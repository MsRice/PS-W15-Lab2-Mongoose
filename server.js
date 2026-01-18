require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const bookRoutes = require('./routes/bookRoutes')

const PORT = process.env.PORT
const uri = process.env.MONGO_URI
const app = express()

app.use(express.json())

mongoose.connect(uri)
    .then(() => console.log('Yep youre connected to the MDB!'))
    .catch(error => console.error('Naw bro you got issues --->>>' ,error))

app.use('/api/books' , bookRoutes)

app.listen(PORT, () =>{
    console.log(`Server is live. Coffee is pending, and port is live @  http://localhost:${PORT}... Probably`)
})

