if (process.env.USER) require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const moviesRouter = require("./movies/movies.router");
const theatersRouter = require("./theaters/theaters.router");
const reviewsRouter = require("./reviews/reviews.router");

// TODO: Add your code here
app.use(cors());
app.use(express.json());

app.use("/movies", moviesRouter);
app.use("/theaters", theatersRouter);
app.use("/reviews", reviewsRouter);


//Not found handler
app.use((request, response, next) => {
    next({ status: 404, message: `Not found ${request.originalUrl}` });
});

//Error handler
app.use((error, request, response, next) => {
    console.log(error)
    const { status = 500, message = "Something went wrong" } = error;
    response.status(status).json({error: message})
});

module.exports = app;
