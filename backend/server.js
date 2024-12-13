const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/mern_crud")
.then(()=> console.log("MongoDB connected"))
.catch((err)=> console.log(err))

app.use("/api/items", require("./routes/itemRoutes"));

const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Server running on port ${port}`));
