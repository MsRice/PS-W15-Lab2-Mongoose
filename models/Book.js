const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema({
    title:{
        type: String,
        required: [true , 'This is required']
    },
    author:{
        type: String,
        required: [true, 'Author is required']
        
    },
    type: String,
    isbn:{
        type: String,
        unique: true
    },
    publishDate: Date,
    inStock:{
        type: Boolean,
        default: true
    }


})

const Book = mongoose.model('Book' , bookSchema)

module.exports = Book
