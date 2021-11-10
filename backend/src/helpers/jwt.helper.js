import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

//load .env
config();

//payload: id of user
const generateJWT = (userID) => {
    const secretKey = process.env.JWT_SECRET_KEY;
    const expireTime = process.env.JWT_EXPIRE_TIME;

    return jwt.sign({ id: userID }, secretKey, { expiresIn: expireTime });
};

const verifyJWT = (token) => {
    const secretKey = process.env.JWT_SECRET_KEY;
    return jwt.verify(token, secretKey);
};

export { generateJWT, verifyJWT };
