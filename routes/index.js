var express = require('express');
const bookcollection = require('../models/book');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});
// Get Library page 
router.get("/library",async (req,res,next)=>{
try {
  const allBooks = await bookcollection.find()
  // console.log(allBooks);
  res.render("library", {
    title: "Library",
    allBooks: allBooks
  })
} catch (error) {
  console.log(error.message)
}
})
// Get createBook page
router.get("/create-new-book",(req,res,next)=>{
res.render("createNewBook",{
  title:"Create New Book",
  
})
})
// post route to createBook page
router.post("/create-new-book",async function(req,res,next){
try {
    const createBook = await bookcollection.create(req.body)
    
    res.redirect("/library")
} catch (error) {
  console.log(error.message)
}
})
// Get details page
router.get("/details/:id",async(req,res,next)=>{
  const bookid=req.params.id
  const bookDetails=await bookcollection.findById(bookid)
  res.render("details",{
    title:"Book Details",
    bookDetails
  })
})
// Get About page 
router.get("/about",(req,res,next)=>{
  res.render("About",{
    title:"About"
  })
})
// Get updateBook page 
router.get("/update-book/:id", async(req, res, next) => {
     const bookid = req.params.id
      const updateBook = await bookcollection.findById(bookid)
  res.render("updateBook", {
    title: "Update Book",
    updateBook,
  })
})
// post updateBook page 
router.post("/update-book/:id", async(req, res, next) => {
  try {
    const bookid = req.params.id
    const updateBook = await bookcollection.findByIdAndUpdate(bookid, req.body)
    res.redirect(`/details/${bookid}`)
    
  } catch (error) {
    console.log(error.message)
  }
})
router.get("/delete-book/:id", async function (req, res, next) {
try {
    const bookid = req.params.id
    const updateBook = await bookcollection.findByIdAndDelete(bookid)
    return res.redirect(`/library`)
} catch (error) {
  console.log(error.message)
}
});
module.exports = router;
