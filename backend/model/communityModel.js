const mongoose = require("mongoose");
const { Schema, model, SchemaTypes } = mongoose;

const communitySchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		description: String,
		members: [SchemaTypes.ObjectId],
		communityAdmins: [SchemaTypes.ObjectId],
		communityMods: [SchemaTypes.ObjectId],
		isPrivate: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const Community = model("Community", communitySchema);
module.exports = Community;
