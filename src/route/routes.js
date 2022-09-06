

const express = require('express');
const router = express.Router();
const authorController = require("../Controllers/authorController");
const blogController=require("../Controllers/blogController")

router.post("/authors" , authorController.createAuthor)

router.post("/blogs" , blogController.createBlog)

router.get("/getblogs",blogController.getblog)


module.exports = router;