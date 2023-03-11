const { Schema, model } = require('mongoose')

const scheduleSchema = new Schema({
  from: {
    type: String,
    required: true,
  },

  to: {
    type: String,
    required: true,
  },

  trip_date: {
    type: Date,
    required: true,
  },
})

module.exports = model('schedule', scheduleSchema)
