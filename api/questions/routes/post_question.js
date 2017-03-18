const express = require('express');
const mongoose = require('mongoose');
const Question = require('../model/Question');
const router = express.Router();

router.route('/')
  .post((req, res) => {

    const question = new Question(req.body);

    question.save((err, question) => {
      if (err) {
        res.status(400).json(err);
      }
      res.json(question);
      // res.json({ message: 'Contact saved! '});
    });
    
  });

module.exports = router;