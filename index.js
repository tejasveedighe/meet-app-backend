require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
	res.send("Hello World");
});

const jwt = require("jsonwebtoken");

app.post("/get-token", (req, res) => {
	const API_KEY = process.env.API_KEY;
	const SECRET = process.env.SECRET;

	const options = {
		expiresIn: "120m",
		algorithm: "HS256",
	};
	const payload = {
		apikey: API_KEY,
		permissions: [`allow_join`], // `ask_join` || `allow_mod`
		version: 2,
		roles: ["CRAWLER"],
	};

	const token = jwt.sign(payload, SECRET, options);
	res.json({ authToken: token });
});

app.listen(port, () => console.log(`Server Running on Port ${port}`));
