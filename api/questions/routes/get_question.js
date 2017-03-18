const express = require('express');
const mongoose = require('mongoose');
const Question = require('../model/Question');
const router = express.Router();

router.route('/:id')
  .get((req, res) => {

    const _id = req.params.id;

    Question.findOne({ _id }, (err, question) => {
      if (err) {
        res.status(400).json(err);
      }
      if (!question) {
        res.status(404).json({ message: 'Question not found.' });
      }

      res.json(question);
    });
    
  });

module.exports = router;