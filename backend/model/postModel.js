const mongoose = require("mongoose");
const { Schema, model, SchemaTypes } = mongoose;

const postSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			minlength: 6,
			maxlength: 250,
		},
		body: {
			type: String,
			maxlength: 40000,
		},
		posturl: String,
		author: SchemaTypes.ObjectId,
		posted_in: SchemaTypes.ObjectId,
		likes: [SchemaTypes.ObjectId],
		commentsThread: SchemaTypes.ObjectId,
	},
	{ timestamps: true }
);

const Post = model("Post", postSchema);
module.exports = Post;
