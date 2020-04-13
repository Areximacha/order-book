const express = require('express')
const fetch = require('isomorphic-fetch')

const router = express.Router()

router.get('/trading-pairs-info', async (req, res) => {
  try {
    const response = await fetch(
      `https://www.bitstamp.net/api/v2/trading-pairs-info/`
    )
    const json = await response.json()

    res.status(200).json(json)
  } catch (error) {
    res.status(403).json({ error })
  }
})

module.exports = router
