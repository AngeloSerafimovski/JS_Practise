require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const aiRoutes = require("./Routes/aiRoutes");
const pochvaRoutes = require("./Routes/pochvaRoutes");


const app = express();
app.use(express.json());

const DB = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
);

mongoose.connect(DB)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});


app.use("/api/v1/pochva", pochvaRoutes);
app.use("/api/v1/ai", aiRoutes);



const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server has started on ${PORT}`);
    
});