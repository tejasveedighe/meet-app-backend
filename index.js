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

app.post("/get-token", (req, res) => {
	console.log(req.body);
	res.json({ authToken: "avcd", body: res.body });
});

app.listen(port, () => console.log(`Server Running on Port ${port}`));
