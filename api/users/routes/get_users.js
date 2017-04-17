const express = require('express');
const mongoose = require('mongoose');
const User = require('../model/User');
const router = express.Router();

router.route('/')
  .get((req, res) => {

    User.find({}, (err, users) => {
      if (err) {
        res.status(400).json(err);
      }
      res.json(users);
    });
    
  });

module.exports = router;