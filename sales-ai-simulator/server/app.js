const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const scenarioRoutes = require("./routes/scenarioRoutes");
const aiRoutes = require("./routes/aiRoutes");


const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());



app.use("/scenarios", scenarioRoutes);
app.use("/",authRoutes);
app.use("/ai", aiRoutes);



app.get("/",(req,res) => {
    res.status(200).json({
        status: "success",
        message: "Server is running!",
    });
});

module.exports = app;