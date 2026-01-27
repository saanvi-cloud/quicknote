const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// GET all notes
router.get('/', async (req, res) => {
  const notes = await Note.find().sort({ createdAt: -1 });
  res.json(notes);
});

// POST note
router.post('/', async (req, res) => {
  const note = new Note({ text: req.body.text });
  await note.save();
  res.status(201).json(note);
});

// DELETE note
router.delete('/:id', async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
