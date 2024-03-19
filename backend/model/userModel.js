const mongoose = require("mongoose");
const { Schema, model, SchemaTypes } = mongoose;

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		minlength: 6,
		maxlength: 24,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	following: {
		type: [SchemaTypes.ObjectId],
	},
	friends: {
		type: [SchemaTypes.ObjectId],
	},
});

const User = model("User", userSchema);
module.exports = User;
