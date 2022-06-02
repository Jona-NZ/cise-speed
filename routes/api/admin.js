const express = require('express');
const router = express.Router();
const CompletedArticles = require('../../models/CompletedArticles');

router.get('/', (req, res) => {
  CompletedArticles.find()
    .then((articles) => res.json(articles))
    .catch((err) => res.status(500).json({}));
});

router.delete('/:id', (req, res) => {
  CompletedArticles.findByIdAndRemove(req.params.id)
    .then(() => res.json({ msg: 'Article deleted successfully' }))
    .catch((err) =>
      res.status(400).json({
        error: 'Unable to delete this article' + err,
      })
    );
});

module.exports = router;
