const books = require('../Models/bookModel')

// add book
exports.addBook = async (req,res)=>{
    // console.log("Inside add Book request");
    const {bookName,authorName} = req.body
    const bookImage = req.file.filename
    try{
        const existingBook = await books.findOne({bookName})
        if(existingBook){
            res.status(406).json("Book Already exists..")
        }
        else{
            const newBook = new books({
                bookName,authorName,bookImage
            })
            await newBook.save()
            res.status(200).json(newBook)
        }
    }catch(err){
        res.status(401).json(err)
    }
}

// get all books
exports.getAllBooks = async(req,res)=>{
    try{  
        const allBooks = await books.find()
        res.status(200).json(allBooks)
    }catch(err){
        res.status(401).json(err)
    }
}

// edit book
exports.editBook = async(req,res)=>{
    const {bookName,authorName,bookImage} = req.body
    const uploadImage = req.file?req.file.filename:bookImage
    const {bid} = req.params
    try{
        const updateBook = await books.findByIdAndUpdate({_id:bid},{bookName,authorName,bookImage:uploadImage},{new:true})
        await updateBook.save()
        res.status(200).json(updateBook)
    }catch(err){
        res.status(401).json(err)
    }
}

// delete a book
exports.deleteBook = async(req,res)=>{
    const {bid} = req.params
    try{
        const deleteData = await books.findByIdAndDelete({_id:bid})
        res.status(200).json(deleteData)
    }catch(err){
        res.status(401).json(err)
    }
}