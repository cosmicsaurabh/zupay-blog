const express = require("express");
const { getAllBlogs, createBlog, getShortlistedUsers, toggleUserShortlist, getBlog, deleteBlog } = require("../controllers/blogController");

const router = express.Router();

router.route("/blogs").get(getAllBlogs);
router.route("/blogs/new").post(createBlog);
router.route("/blogs/:id").get(getBlog);
router.route("/blogs/delete/:id").delete(deleteBlog);
// router.route("/blogs/update/:id").put(updateBlog);n



module.exports = router