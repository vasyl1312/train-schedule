const { Router } = require('express')
const Schedule = require('../models/Schedule')
const router = new Router()

router.get('/:id', async (req, res) => {
  try {
    const schedule = await Schedule.findById(req.params.id)
    res.render('scheduleEdit', { schedule })
  } catch (e) {
    console.log(e)
  }
})

router.post('/', async (req, res) => {
  const { id } = req.body
  try {
    delete req.body.id
    const schedule = await Schedule.findById(id)

    Object.assign(schedule, req.body)
    await schedule.save()
    res.redirect('/')
  } catch (e) {
    console.log(e)
  }
})

module.exports = router
