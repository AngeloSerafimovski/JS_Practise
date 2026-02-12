// mongodb+srv://gelo24:Kobi2026@cluster0.qzdo2vb.mongodb.net/semos1?appName=Cluster0

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const controller = require('./controller/controller');



mongoose
.connect("mongodb+srv://gelo24:Kobi2026@cluster0.qzdo2vb.mongodb.net/?appName=Cluster0")
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(err));




app.get("/Zemjodelie",controller.getAll);
app.post("/Zemjodelie",controller.create);


app.listen(10000, (err) => {
    if(err) return console.log(err.message);
    console.log("Sucessfully started the backend");
});
    