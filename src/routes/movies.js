const { Router } = require("express");
const router = Router();
const movies = require("../sample.json");
const _ = require("underscore");

// console.log(movies);

//create
router.post("/", (req, res) => {
  const { title, genero, year } = req.body;
  if (title && genero && year) {
    const id = movies.length + 1;
    const newMovie = { ...req.body, id };
    console.log(newMovie);
    // res.json("saved");
    movies.push(newMovie);
    res.json(movies);
  } else {
    res.status(500).json({ error: "hubo un error inesperado" });
  }
  // res.send("received");
});

//read
router.get("/", (req, res) => {
  res.json(movies);
});

//update
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, genero, year } = req.body;
  if (title && genero && year) {
    _.each(movies, (movie, i) => {
      if (movie.id == id) {
        movie.title = title;
        movie.genero = genero;
        movie.year = year;
      }
    });
    res.json(movies);
  } else {
    res.status(500).json({ error: "Tienes que llenar todos los campos." });
  }
});

//delete
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  _.each(movies, (movie, i) => {
    if (movie.id == id) {
      movies.splice(i, 1);
    }
  });
  res.send(movies);
});

module.exports = router;
