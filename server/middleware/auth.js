
   
const { User } = require('../models/User');

let auth = (req, res, next) => {
  if (req.session.user){
      next()
  } else {
      return res.status(400).json({
            authSuccess: false
      })
  }
};

module.exports = { auth };