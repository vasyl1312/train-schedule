var express = require('express')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()
const homeRoutes = require('./routes/home')
const addRoutes = require('./routes/add')
const editRoutes = require('./routes/edit')
const deleteRoutes = require('./routes/delete')
const errorMiddleware = require('./middleware/error')

const PORT = process.env.PORT
const app = express()

app.use(bodyParser.json())
app.use(express.static(__dirname + '/views'))
app.engine('ejs', require('ejs').renderFile)
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', homeRoutes)
app.use('/add', addRoutes)
app.use('/edit', editRoutes)
app.use('/delete', deleteRoutes)

app.use(errorMiddleware) //вкінці бо деякі роути будуть не доступні(для того щоб не можна на невідомі роути)

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
