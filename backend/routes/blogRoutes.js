const express = require("express");
const { getAllBlogs, createBlog, getBlog, deleteBlog,updateBlog } = require("../controllers/blogController");

const router = express.Router();

router.route("/blogs").get(getAllBlogs);
router.route("/blogs/create").post(createBlog);
router.route("/blogs/:id").get(getBlog);
router.route("/blogs/delete/:id").delete(deleteBlog);
router.route("/blogs/update/:id").put(updateBlog);
// router.route("/blogs/update/:id").put(updateBlog);n



module.exports = router