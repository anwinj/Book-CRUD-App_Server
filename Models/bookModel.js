const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    bookName:{
        type: String,
        required:true,
        unique:true
    },
    authorName:{
        type: String,
        required: true
    },
    bookImage:{
        type: String,
        required: true
    }
})

const books = mongoose.model('books',bookSchema)
module.exports = books