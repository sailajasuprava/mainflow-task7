const express = require("express");
const {
  createBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

const router = express.Router();

router.route("/").get(getAllBlogs).post(createBlog);
router.route("/:blogID").get(getBlog).patch(updateBlog).delete(deleteBlog);

module.exports = router;
