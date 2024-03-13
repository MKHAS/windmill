const asyncHandler = require("express-async-handler");

/**
 *
 * @desc get Posts
 * @route GET /api/posts
 * @access Private
 */

const getPosts = asyncHandler(async (req, res) => {
	res.status(200).json({ message: "Get All Posts" });
});

/**
 *
 * @desc Add a post
 * @route Post /api/posts
 * @access Private
 */

const addPost = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error("Please add a text field");
	}
	res.status(200).json({ message: "Add a post" });
});

/**
 *
 * @desc Update a Post
 * @route PUT /api/posts/:id
 * @access Private
 */

const updatePost = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Update Post with id : ${req.params.id}` });
});

/**
 *
 * @desc Delete a Post
 * @route DELETE /api/posts/:id
 * @access Private
 */

const deletePost = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Delete Post with id : ${req.params.id}` });
});

module.exports = {
	getPosts,
	addPost,
	updatePost,
	deletePost,
};
