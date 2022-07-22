// import express from "express";
// import app from "./app.js";

const express = require("express");
const app = require("./app");
const server = express();

server.use(app);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
	console.log(
		`Server started at PORT:${PORT} MODE:${process.env.NODE_ENV}`
	);
});
