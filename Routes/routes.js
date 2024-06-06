const express = require('express')
const router = express.Router()
const bookController = require('../Controllers/bookController')
const multerConfiq = require('../Middlewares/multerMiddleware')

// route to add book
router.post('/add-book',multerConfiq.single('bookImage'),bookController.addBook)

// route to get books
router.get('/get-books',bookController.getAllBooks)

// route for edit project
router.put('/book/edit/:bid',multerConfiq.single("bookImage"),bookController.editBook)

// route for delete book
router.delete('/book/delete/:bid',bookController.deleteBook)

module.exports = router