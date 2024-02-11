const express = require("express");
const {connectDB} = require("./connect")
const urlRoute = require("./routes/url")
require('dotenv').config();
const app = express();
const PORT = 8000;

const MongoURI = process.env.MONGO_URI;
connectDB(MongoURI).then(()=> console.log("mongoDB connected"))

// Middleware
app.use(express.json())

app.use("/url", urlRoute)
app.use("/", urlRoute)

app.listen(PORT, ()=>console.log(`Server started at ${PORT}`))