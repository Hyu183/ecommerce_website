import jwt from "jsonwebtoken";

//payload: id of user

const generateJWT = (userID, userRole) => {
  const secretKey = process.env.JWT_SECRET_KEY;
  const expireTime = process.env.JWT_EXPIRE_TIME;

  return jwt.sign({ id: userID, role: userRole }, secretKey, {
    expiresIn: expireTime,
  });
};

const verifyJWT = (token) => {
  const secretKey = process.env.JWT_SECRET_KEY;
  return jwt.verify(token, secretKey);
};

export { generateJWT, verifyJWT };
