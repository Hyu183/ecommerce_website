import * as JWT from "../helpers/jwt.helper.js";

import { findUserByID } from "../dao/user.dao.js";

const authenticateUser = async (req, res, next) => {
  try {
    //"Authorization": "Bearer <access_token>"
    const authorization = req.headers.authorization;
    const access_token = authorization.split(" ")[1];

    //include id of user
    const verifiedUser = JWT.verifyJWT(access_token);

    let user = await findUserByID(verifiedUser.id);

    if (user === null) {
      return res
        .status(400)
        .json({ success: 0, message: "Access token does not match" });
    }

    if (user.access_token != access_token) {
      return res
        .status(400)
        .json({ success: 0, message: "Access token does not match" });
    }

    req.userID = verifiedUser.id;
    next();
  } catch (error) {
    return res
      .status(400)
      .json({ success: 0, message: "Access token invalid" });
  }
};

export const authenticateAdmin = async (req, res, next) => {
  try {
    //"Authorization": "Bearer <access_token>"
    const authorization = req.headers.authorization;
    const access_token = authorization.split(" ")[1];

    //include id of user
    const verifiedUser = JWT.verifyJWT(access_token);

    let user = await findUserByID(verifiedUser.id);

    if (user === null) {
      return res
        .status(400)
        .json({ success: 0, message: "Access token does not match" });
    }

    if (user.access_token != access_token) {
      return res
        .status(400)
        .json({ success: 0, message: "Access token does not match" });
    }

    if (verifiedUser.role !== 1) {
      return res.status(403).json({ success: 0, message: "Rejected" });
    }

    req.userID = verifiedUser.id;
    next();
  } catch (error) {
    return res
      .status(400)
      .json({ success: 0, message: "Access token invalid" });
  }
};

export default authenticateUser;
