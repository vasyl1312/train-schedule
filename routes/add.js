const { Router } = require('express')
const Schedule = require('../models/Schedule')
const router = new Router()

router.get('/', (req, res) => {
  res.render('add')
})

router.post('/', async (req, res) => {
  try {
    const { from, to, trip_date } = req.body

    const schedule = new Schedule({ from, to, trip_date })
    await schedule.save()
    return res.redirect('/')
  } catch (e) {
    console.log(e)
  }
})

module.exports = router
