const express = require("express");
const router = express.Router();
const { getPosts } = require("../controllers/postController");

/**
 *
 * GET - All Posts
 */
router.get("/", getPosts);

/**
 *
 * POST - Add a post
 */
router.post("/", (req, res) => {
	res.status(200).json({ message: "Add a post" });
});

/**
 *
 * PUT - Update a Post
 */
router.put("/:id", (req, res) => {
	res.status(200).json({ message: `Update Post with id : ${req.params.id}` });
});

/**
 *
 * DELETE - Delete Post by id
 */
router.delete("/:id", (req, res) => {
	res.status(200).json({ message: `Delete Post with id : ${req.params.id}` });
});

module.exports = router;
