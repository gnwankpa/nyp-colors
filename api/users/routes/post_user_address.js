const express = require('express');
const mongoose = require('mongoose');
const User = require('../model/User');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.route('/:userid/add/')
  .post((req, res) => {

    User.findOne({ _id: req.params.userid }, function (err, user) {

        user.address[0] = {
          street: req.body.street,
          city: req.body.city,
          state: req.body.state,
          zipcode: req.body.zipCode,
          country: req.body.country
        };
        user.save();
        res.json({messge: 'user address saved'});
        })

  });
        //FOR LISTS
        // user.address[0].push({
        //   street: req.body.street,
        //   state: req.body.state,
        //   zipcode: req.body.zipCode,
        //   country: req.body.country
        // });
        // user.save();
        // res.json({messge: 'user address saved'});
        // })

  // });

module.exports = router;

// need a write a way to save 
// my help https://www.reddit.com/r/learnjavascript/comments/55mjr7/mongoose_and_inserting_subdocuments_to_a_user/?st=j4f0dgul&sh=0e6373f9