import * as JWT from '../helpers/jwt.helper.js';
import { config } from 'dotenv';
import { findUserByID } from '../models/user.model.js';

//load .env
config();

const jwtMiddleware = async (req, res, next) => {
    try {
        //"Authorization": "Bearer <access_token>"
        const authorization = req.headers.authorization;
        const access_token = authorization.split(' ')[1];

        //include id, email and name of user
        const verifiedUser = JWT.verifyJWT(access_token);

        let user = await findUserByID(verifiedUser.id);

        if (user === null) {
            return res
                .status(400)
                .json({ success: 0, message: 'Access token does not match' });
        }

        if (user.access_token != access_token) {
            return res
                .status(400)
                .json({ success: 0, message: 'Access token does not match' });
        }

        req.userID = verifiedUser.id;
        next();
    } catch (error) {
        return res
            .status(400)
            .json({ success: 0, message: 'Access token invalid' });
    }
};

export default jwtMiddleware;