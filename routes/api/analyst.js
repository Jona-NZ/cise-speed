const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const ToBeModerated = require('../../models/ToBeModerated');
const ToBeAnalysed = require('../../models/ToBeAnalysed');
const CompletedArticles = require('../../models/CompletedArticles');

router.get('/', (req, res) => {
  ToBeAnalysed.find()
    .then((articles) => res.json(articles))
    .catch((err) => res.status(500).json({}));
});

router.get('/:id', (req, res) => {
  ToBeAnalysed.findById({ _id: req.params.id })
    .then((article) => res.json(article))
    .catch((err) => res.status(500).json({}));
});

router.delete('/:id', (req, res) => {
  ToBeAnalysed.findByIdAndRemove(req.params.id)
    .then(() => res.json({ msg: 'Article deleted successfully' }))
    .catch((err) =>
      res.status(400).json({
        error: 'Unable to delete this article' + err,
      })
    );
});

router.post('/movetocompleted', (req, res) => {
  console.log('THIS IS A CONSOLE LOG: ' + JSON.stringify(req.body));
  CompletedArticles.create(req.body)
    .then((res) => {
      console.log('Analysed moved successfully ' + res);
    })
    .catch((err) => {
      console.log('Error when creating: ' + err);
    });
});

module.exports = router;
