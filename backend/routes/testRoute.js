const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.json({ msg: 'Test route is working' });
});

module.exports = router;
