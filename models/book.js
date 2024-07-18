const mongoose = require("mongoose")
const bookSchema = new mongoose.Schema({
    bookPoster: {
        type: String,
        required: [true, "Book poster is required"]
    },
    bookName: {
        type: String,
        required: [true, "Book name is required"],
        trim:true,
        uppercase:true,
        unique:true
    },
    authorName: {
        type: String,
        required: [true, "Author name is required"],
        uppercase:true,
    },
    isbnNumber: {
        type: String,
        required: [true, "isbn is required"],
        minLength:[13,"Book ISBN must have 13 characters"],
        maxLenght:[13,"Book ISBN must have 13 characters"],
        trim:true,
        unique:true
    },
    bookPrice: {
        type: Number,
        required: [true, "Enter book price is required"],
        trim :true
    },
    description: {
        type: String,
        required: [true, "Describe your book"],
        maxLength:[100,"description may contain only 100 characters including space"]
    },

})

const bookcollection = mongoose.model("book", bookSchema)

module.exports = bookcollection