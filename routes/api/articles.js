const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const ToBeModerated = require('../../models/ToBeModerated');

router.post('/', (req, res) => {
  ToBeModerated.create(req.body)
    .then((book) => res.json({ msg: 'Article added successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to add this article' + err })
    );
});

router.get('/', (req, res) => {
  ToBeModerated.find()
    .then((articles) => res.json(articles))
    .catch((err) => res.status(500).json({}));
});

router.get('/:id', (req, res) => {
  ToBeModerated.findById({ _id: req.params.id })
    .then((article) => res.json(article))
    .catch((err) => res.status(500).json({}));
});

router.get('/search/:search', (req, res) => {
  ToBeModerated.find({ methodology: req.params.search })
    .then((articles) => res.json(articles))
    .catch((err) => res.status(500).json({ error: 'Error: ' + err }));
});

router.delete('/:id', (req, res) => {
  ToBeModerated.findByIdAndRemove(req.params.id)
    .then(() => res.json({ msg: 'Article deleted successfully' }))
    .catch((err) =>
      res.status(400).json({
        error: 'Unable to delete this article' + err,
      })
    );
});

module.exports = router;
