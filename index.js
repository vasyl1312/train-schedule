var express = require('express')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

const homeRoutes = require('./routes/home')
const addRoutes = require('./routes/add')

const PORT = process.env.PORT
const app = express()

app.use(bodyParser.json())
app.use(express.static(__dirname + '/views'))
app.engine('ejs', require('ejs').renderFile)
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', homeRoutes)
app.use('/add', addRoutes)

const start = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`)
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}

start()
