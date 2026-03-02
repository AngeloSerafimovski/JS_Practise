require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");

const db = require("./pkg/db/index");
const auth = require("./handlers/authHandler");
const tours = require("./handlers/tour");
const bookings = require("./handlers/booking");

const app = express();

app.use(express.json());
app.use(cookieParser());

// AUTH
app.post("/api/v1/signup", auth.signup);
app.post("/api/v1/login", auth.login);

// TOURS
app.get("/api/v1/tours", tours.getAll);
app.get("/api/v1/tours/:id", tours.getOne);

app.post("/api/v1/tours", auth.protect, auth.restrict("agent", "admin"), tours.create);
app.patch("/api/v1/tours/:id", auth.protect, auth.restrict("agent", "admin"), tours.update);
app.delete("/api/v1/tours/:id", auth.protect, auth.restrict("admin"), tours.delete);

// BOOKINGS
app.get("/api/v1/bookings", auth.protect, auth.restrict("agent", "admin"), bookings.getAll);
app.get("/api/v1/bookings/:id", auth.protect, bookings.getOne);

app.post("/api/v1/bookings", auth.protect, auth.restrict("customer", "agent", "admin"), bookings.create);
app.patch("/api/v1/bookings/:id", auth.protect, auth.restrict("agent", "admin"), bookings.update);
app.delete("/api/v1/bookings/:id", auth.protect, auth.restrict("admin"), bookings.delete);

const port = process.env.PORT || 3000;

(async () => {
  await db.init(); // ✅ прво DB
  app.listen(port, () => console.log("LISTENING ON PORT:", port));
})();