const express = require("express");
const {connectDB} = require("./connect")
const urlRoute = require("./routes/url")
const app = express();
const PORT = 8000;

connectDB("mongodb://127.0.0.1:27017/short-url").then(()=> console.log("mongoDB connected"))

// Middleware
app.use(express.json())

app.use("/url", urlRoute)
app.use("/", urlRoute)

app.listen(PORT, ()=>console.log(`Server started at ${PORT}`))