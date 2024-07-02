const express =  require('express')
const server = express ()
const port = process.env.PORT || 5000
const router = require('./routes/router')
const mongoose = require('mongoose')
const cors = require('cors')
require('./middlewares/auth')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB !'))

server.use(express.json())
server.use(router)

server.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
