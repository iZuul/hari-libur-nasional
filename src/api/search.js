const express = require('express')
const router = express.Router()
const scraper = require('../scraper')

router.get('/:year', (req, res) => {
  scraper.search_by_year(req.params.year)
    .then(day => {
      res.json(day)
    })
})

module.exports = router