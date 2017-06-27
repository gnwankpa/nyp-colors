const express = require('express');
const mongoose = require('mongoose');
const User = require('../model/User');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.route('/')
  .post((req, res) => {

    const user = new User({
    	userName: req.body.userName,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		password: bcrypt.hashSync(req.body.password, 10),
		email: req.body.email,
		userColor: req.body.userColor,
		admin: req.body.admin
    });

    user.address[0] = {
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipCode,
      country: req.body.country
        };

    user.save((err, user) => {
      if (err) {
        res.status(400).json(err);
      }
      res.json(user);
      // res.json({ message: 'Contact saved! '});
    });
    
  });

module.exports = router;