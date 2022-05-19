const express = require('express');
const router = express.Router();
const ToBeModerated = require('../../models/ToBeModerated');

router.post('/', (req, res) => {
  ToBeModerated.create(req.body)
    .then((book) => res.json({ msg: 'Article added successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to add this article' + err })
    );
});

module.exports = router;
