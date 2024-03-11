const getPosts = (req, res) => {
	res.status(200).json({ message: "Get All Posts" });
};

module.exports = {
	getPosts,
};
