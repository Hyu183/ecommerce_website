
import bcrypt from 'bcryptjs';
import generator from 'generate-password';

import * as userDAO from '../dao/user.dao.js';

import ValidatorHelper from '../helpers/validator.helper.js';
import * as JWT from '../helpers/jwt.helper.js';
import sendMail from '../helpers/sendMail.helper.js';



/**
 * func: register user
 * @param {*} req req.body = {name, email, password}
 * @param {*} res
 * @returns json : {success: 0||1  ,  message: string}
 */
const registerUser = async (req, res) => {
    let user = req.body;
    //Check user infor  is valid
    const validator = new ValidatorHelper(user);
    validator.validateName();
    validator.validateEmail();
    validator.validatePassword();

    //has error return
    if (validator.hasError()) {
        return res
            .status(400)
            .json({ success: 0, message: 'Invalid information' });
    }

    const isEmailExisted = await userDAO.checkEmailExisted(user.email);

    //email existed return
    if (isEmailExisted) {
        return res
            .status(400)
            .json({ success: 0, message: 'Email existed!!!' });
    }
    //processing create user
    user.role = 0; //default user role is: 0 -- customer
    const hashedPassword = bcrypt.hashSync(
        user.password,
        +process.env.SALT_ROUNDS
    );
    user = { ...user, password: hashedPassword };
    await userDAO.create(user);

    return res
        .status(200)
        .json({ success: 1, message: 'Register successfully' });
};

const loginUser = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    //Check user infor  is valid
    const validator = new ValidatorHelper({ email: email, password: password });
    validator.validateEmail();
    validator.validatePassword();

    if (validator.hasError()) {
        return res
            .status(400)
            .json({ success: 0, message: 'Invalid information' });
    }

    const user = await userDAO.findUserByEmail(email);
    if (user === null) {
        return res
            .status(400)
            .json({ success: 0, message: 'Email does not exist' });
    }
    const checkPassword = bcrypt.compareSync(password, user.password);
    if (!checkPassword) {
        return res.status(400).json({ success: 0, message: 'Wrong password' });
    }

    const returnUser = {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
    };
    //generate JWT
    const token = JWT.generateJWT(user.id, user.role);
    await userDAO.updateAccessToken(user.id, token);

    return res.status(200).json({
        success: 1,
        message: 'Login successfully',
        token: token,
        user: returnUser,
    });
};

/**
 * func: check email is existed
 * @param {*} req ?email=email
 * @param {*} res
 * @returns bool
 */
const checkEmailExisted = async (req, res) => {
    const email = req.query.email;
    console.log(email);
    const isEmailExisted = await userDAO.checkEmailExisted(email);
    console.log(isEmailExisted);
    return res.send(isEmailExisted);
};

const resetPassword = async (req, res) => {
    const email = req.body.email;
    const validator = new ValidatorHelper({ email: email });
    validator.validateEmail();

    if (validator.hasError()) {
        return res
            .status(400)
            .json({ success: 0, message: 'Email is invalid' });
    }

    const user = await userDAO.findUserByEmail(email);
    if (user === null) {
        return res
            .status(400)
            .json({ success: 0, message: 'Email does not exist' });
    }

    const newPassword = generator.generate({ length: 7, numbers: true });
    const hashedPassword = bcrypt.hashSync(
        newPassword,
        +process.env.SALT_ROUNDS
    );
    await userDAO.updatePassword(user.id, hashedPassword);
    sendMail(
        email,
        user.name,
        'Reset password',
        'Your password have been reset',
        newPassword
    );

    return res
        .status(200)
        .json({ success: 1, message: 'Password reset successfully' });
};

const test = (req, res) => {
    console.log(req.userID);
    return res.json(true);
};

export { registerUser, loginUser, resetPassword, checkEmailExisted, test };
