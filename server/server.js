const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const db = require("./models/db");
const app = express();
const PORT = 8000;

const {
	getTodos,
	getOneTodo,
	postTodos,
	updateTodo,
	deleteTodo,
} = require("./controllers/todos.controller");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// app.use(
// 	cors({
// 		origin: "http://localhost:3000",
// 	}),
// );

// app.use(
// 	cors({
// 		origin: "http://localhost:3000", // Adjust this to match your frontend URL
// 		methods: ["GET", "POST", "PUT", "DELETE"],
// 		allowedHeaders: ["Content-Type"],
// 	}),
// );

app.get("/api/todos", (req, res) => getTodos(req, res, db));
app.post("/api/todos", (req, res) => postTodos(req, res, db));
app.get("/api/todos/:id", (req, res) => getOneTodo(req, res, db));
app.put("/api/todos/:id", (req, res) => updateTodo(req, res, db));
app.delete("/api/todos/:id", (req, res) => deleteTodo(req, res, db));

app.use(express.static(path.join(__dirname, "./public")));
app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, () => {
	console.log(`Server running at ${PORT}`);
});
