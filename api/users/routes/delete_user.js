const express = require('express');
const mongoose = require('mongoose');
const User = require('../model/User');
const router = express.Router();

router.route('/:id')
  .delete((req, res) => {

    const _id = req.params.id;

    User.findOneAndRemove({ _id }, (err, user) => {
      if (err) {
        res.status(400).json(err);
      }
      if (!user) {
        res.status(404).json({ message: 'User not found.' });
      }
      res.json({ message: `User ${user._id} deleted.` });
    });

  });

module.exports = router;