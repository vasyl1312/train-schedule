const { Schema, model } = require('mongoose')

const scheduleSchema = new Schema({
  from: {
    type: String,
    required: true, //позначаємо що це поле є обов'язковим
  },

  to: {
    type: String,
    required: true, //позначаємо що це поле є обов'язковим
  },

  trip_date: {
    type: Date,
    required: true, //позначаємо що це поле є обов'язковим
  },
})

module.exports = model('schedule', scheduleSchema)
