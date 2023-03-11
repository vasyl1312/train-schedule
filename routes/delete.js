const { Router } = require('express')
const Schedule = require('../models/Schedule')
const router = new Router()

router.post('/:id', async (req, res) => {
  let scheduleId = req.body.scheduleId
  const schedule = await Schedule.deleteOne({ _id: scheduleId })
  res.redirect('/')
})

module.exports = router
