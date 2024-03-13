const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

//Middleware

//Enable us to use req body data
app.use(express.json());
//Enable us to use data encoded in the url
app.use(express.urlencoded({ extended: false }));

app.use("/api/posts", require("./routes/postRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
