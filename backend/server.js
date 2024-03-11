const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

/**
 *
 * GET - All Posts
 */
app.get("/api/posts", (req, res) => {
	res.status(200).json({ message: "All Posts" });
});

app.listen(port, () => console.log(`Server started on port ${port}`));
