const express = require('express');
const mongoose = require('mongoose');
const Question = require('../model/Question');
const router = express.Router();

router.route('/:id')
  .put((req, res) => {

    const _id = req.params.id;

    Question.findOneAndUpdate({ _id },
      req.body,
      { new: true },
      (err, question) => {
      if (err) {
        res.status(400).json(err);
      }
      res.json(question);
    });

  });

module.exports = router;