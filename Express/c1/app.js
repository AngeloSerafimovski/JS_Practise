//! Paketi
// dotenv
// express
// mongoose
const express = require("express");
const db = require("./pkg/db/index");
const movies = require("./handlers/movie");
const actorHandler = require("./handlers/actor");

const app = express();

//* povikuvame middelware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.init();

//CRUD
app.get("/movies", movies.getAll);
app.get("/movies/:id", movies.getOne);
app.post("/movies", movies.create);
app.patch("/movies/:id", movies.update);
app.delete("/movies/:id", movies.delete);

//CRUD AKTERI
// ACTOR ROUTES

app.get("/api/v1/actors", actorHandler.getAll);
app.get("/api/v1/actors/:id", actorHandler.getOne);
app.post("/api/v1/actors", actorHandler.create);
app.patch("/api/v1/actors/:id", actorHandler.update);
app.delete("/api/v1/actors/:id", actorHandler.delete);

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log("Could not start a service");
  }
  console.log(`Service started successfully ${process.env.PORT}`);
});