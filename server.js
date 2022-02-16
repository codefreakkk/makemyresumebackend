const express = require("express");
const app = express();
const cors = require("cors");
let cookieParser = require("cookie-parser");
const PORT = 8000 || process.env.PORT;
require("./model/dbcon");

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

const resumes = require("./controller/resumes");
app.use(resumes);

const login = require("./controller/login");
app.use(login);

const authenticate = require("./controller/authenticate");
app.use(authenticate);

app.listen(PORT, () => console.log("Server running"));
