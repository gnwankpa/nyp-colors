const express = require('express');
const mongoose = require('mongoose');
const Question = require('../model/Question');
const router = express.Router();

router.route('/:id')
  .delete((req, res) => {

    const _id = req.params.id;

    Question.findOneAndRemove({ _id }, (err, question) => {
      if (err) {
        res.status(400).json(err);
      }
      if (!question) {
        res.status(404).json({ message: 'Question not found.' });
      }
      res.json({ message: `Question ${question._id} deleted.` });
    });

  });

module.exports = router;