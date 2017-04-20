const express = require('express');
const mongoose = require('mongoose');
const User = require('../model/User');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.route('/login')
  .post((req, res) => {

    const user_name = req.body.userName;
    // const user_password = bcrypt.hashSync(req.body.password, 10);
    const user_password = req.body.password;

    User.findOne({'userName': user_name}, (err, user) => {
      if (err) {
        res.status(400)
           .json(err);
      }
      if (!user) {
        res.status(404)
           .json({message: 'User not found.'});
      }
      if (user) { 
        bcrypt.compare(user_password, user.password, function(err, isMatch) {
        if (err) {
          res.status(400)
             .json(err);
        }
        if (!isMatch) {
          res.status(404)
             .json({message: 'bad pass'});
        }
        if (isMatch){
          const token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
          res.status(200)
             .json({message: 'User ' + user_name + ' Logged in!',
                    token: token,
                    userName: user._id});
        }
      });
      }
      
      


    });
  });

module.exports = router;