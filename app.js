const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')

// Config
app.use(express.json())
app.use(morgan('dev'))
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

// const db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error:'))
// db.once('open', () => console.log('db connected!'))

// Routes
const indexRouter = require('./routes/index')
const fetchPokemons = require('./routes/fetchPokemons')
const filterPokemons = require('./routes/filterPokemons')

app.use('/index', indexRouter)
app.use('/fetchpokemons', fetchPokemons)
app.use('/filterpokemons', filterPokemons)

module.exports = app
