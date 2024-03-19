const mongoose = require("mongoose");
// const User = require("../model/userModel");
//const Community = require("../model/communityModel");

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.italic);

		//Db mini tests go here

		// const user = await User.create({
		// 	username: "Test User 1",
		// 	password: "password",
		// });
		// console.log(user);
	} catch (error) {
		console.log(error);
		process.exit(1); //exit with failure
	}
};

module.exports = connectDB;
