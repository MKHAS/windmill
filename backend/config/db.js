const mongoose = require("mongoose");
const Community = require("../model/communityModel");

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.italic);

		//Db mini tests go here

		// const community = await Community.create({
		// 	name: "Test Community 0",
		// 	description: "Test Community",
		// });
		// console.log(community);
	} catch (error) {
		console.log(error);
		process.exit(1); //exit with failure
	}
};

module.exports = connectDB;
