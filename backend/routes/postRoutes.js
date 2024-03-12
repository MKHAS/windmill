const express = require("express");
const router = express.Router();
const {
	getPosts,
	addPost,
	updatePost,
	deletePost,
} = require("../controllers/postController");

/**
 *
 * "/"
 */
router.route("/").get(getPosts).post(addPost);

/**
 *
 * PUT - Update a Post
 */
router.put("/:id", updatePost);

/**
 *
 * DELETE - Delete Post by id
 */
router.delete("/:id", deletePost);

module.exports = router;
