const express = require("express");
const app = express();
require("dotenv").config();
global.XMLHttpRequest = require("xhr2");
const emailjs = require("@emailjs/browser");
// const app = express();

// import express from "express";

app.use(express.json());

app.post("/user/send/mail", async (req, res) => {
	try {
		await emailjs.init(process.env.KEY);
		var templateParams = {
			name: req.body.name,
			to_email: req.body.email
		};

		await emailjs.send(
			process.env.SERVICE,
			process.env.TEMPLATE,
			templateParams
		);
		res.json({
			msg: "Email sent successfully"
		});
	} catch (error) {
		console.log(error);
		res.json({
			error: error
		});
	}
});

app.use("*", async (req, res) => {
	res.send(
		"<h1>Send a json POST request at /user/send/mail with name and email</h1>"
	);
});

// export default app;

module.exports = app;
