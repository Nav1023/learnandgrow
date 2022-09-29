const jwt = require('jsonwebtoken');
const config= require('../config/');

const verifyToken = async (req, res, next) => {
  try {
      const token = req.header('authorization');

      if(!token){
        return res.status(401).send({
          status: false,
          message: "Authentication failed",
        });
      }

      const decoded = jwt.verify(token, config.JWT_SECRET);
      req.user = decoded.user;
      next();

  } catch (error) {
    return res.status(401).send({
      status: false,
      message: "Token is invalid",
    });
  }
}

module.exports = verifyToken;