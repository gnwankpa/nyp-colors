const express = require('express');
const mongoose = require('mongoose');
const User = require('../model/User');
const router = express.Router();

router.route('/:id')
  .put((req, res) => {

    const _id = req.params.id;

    User.findOneAndUpdate({ _id },
      req.body,
      { new: true },
      (err, user) => {
      if (err) {
        res.status(400).json(err);
      }
      res.json(user);
    });

  });

module.exports = router;