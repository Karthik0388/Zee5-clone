const { Router } = require("express");
const multer = require("multer");
const MovieSchema = require("../model/movies");
const router = Router();

let { storage } = require("../middlewares/multer");
const upload = multer({ storage: storage });

router.post("/movie-data", upload.single("Poster"), async (req, res) => {
  console.log(req.body);

  try {
    let payload = {
      movie_poster: req.file,
      movie_name: req.body.movie_name,
      movie_gener: req.body.movie_gener,
      movie_language: req.body.movie_language,
    };
    // save all data to database
    let Movies = await MovieSchema.create(payload);
    res.status(201).json({ message: "successfully stored", Movies });
  } catch (err) {
    res.status(501).json("Server Error");
  }
});

router.get("/movie-data", async (req, res) => {
  try {
    let getMovies = await MovieSchema.find({});
    res.status(201).json({ message: "successfully fetched movies", getMovies });
  } catch (err) {
    res.status(501).json("Server Error");
  }
});

module.exports = router;
