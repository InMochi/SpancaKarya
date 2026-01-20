require('dotenv').config()
require('dns').setDefaultResultOrder('ipv4first')

const express = require('express')
const workoutRoutes = require('./routes/workouts.js')
const e = require('express')
const mongoose = require('mongoose')

// aplikasi express
const app = express()

//  middleware
app.use(express.json())
app.use((req, res, next) => {
 console.log(req.path, req.method)
 next()
})
     
// routes rute cuy
app.use('/api/workouts',workoutRoutes)



// mongose connect 
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // listen for request
    app.listen(process.env.PORT, () => {
      console.log(`Terkoneksi Dengan Database`, process.env.PORT)
    })
})
.catch((error) => {
  console.log(error)
})

process.env


