const { Router } = require('express')
const Schedule = require('../models/Schedule')
const router = new Router()

router.get('/', async (req, res) => {
  try {
    const schedules = await Schedule.find()
    res.render('home', { schedules })
  } catch (e) {
    console.error(e)
  }
})

module.exports = router
