const { Schema, model } = require("mongoose");
const MovieSchema = new Schema(
  {
    movie_name: {
      type: String,
      required: true, 
    },
    movie_language: {
      type: String,
      required: true,
    },
    movie_gener: {
      type: String,
      required: true,
    },
    movie_poster: {
      type: [""],
      required: true,
      default: [
        "https://cdn-icons.flaticon.com/png/512/1144/premium/1144709.png?token=exp=1643956819~hmac=a1be9f199388dc39587287ee4a8771f5",
      ],
    },
  },
  { timestamps: true }
);
module.exports = model("movies", MovieSchema);
