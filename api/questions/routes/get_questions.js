const express = require('express');
const mongoose = require('mongoose');
const Question = require('../model/Question');
const router = express.Router();

router.route('/')
  .get((req, res) => {

    Question.find({}, (err, questions) => {
      if (err) {
        res.status(400).json(err);
      }
      res.json(questions);
    });
    
  });

module.exports = router;