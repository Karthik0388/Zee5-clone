const bcrypt = require("bcryptjs");
const AuthSchema = require("../model/Auth");
const MovieSchema = require("../model/movies");
const { JWT_COOKIE_EXPIRE } = require("../config");

/* @http request method post
@access public
@url =>api/auth/signup
*/

exports.SignUp = async (req, res) => {
  // write signup logic
  let { username, password, role, email } = req.body;
  try {
    let payload = {
      username,
      email,
      role,
      password,
    };
    // ? Save to database
    let user = await AuthSchema.create(payload);

    //?After JWT payload is encoded  in the form of TOKEN
    sendTokenRequest(user, 201, res);
  } catch (err) {
    res.status(501).json("Server Error");
  }
};

/* @http request method post
@access public
@url =>api/auth/signin
*/
exports.SignIn = async (req, res) => {
  // write signup logic

  try {
    let { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and Password Required" });
    }
    //? check user exists or not
    //? fetching data from database
    let user = await AuthSchema.findOne({ email }).select("+password");

    if (!user) {
      return res
        .status(401)
        .json({ message: "Email Not Exists In Our Database" });
    }

    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Password Not Matched" });
    }

    sendTokenRequest(user, 201, res);
  } catch (err) {
    return res.status(501).json({ message: "SERVER ERROR" });
  }
};

function sendTokenRequest(user, statusCode, res) {
  let TOKEN = user.getJWTtoken();
  let options = {
    expires: new Date(Date.now() + JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res
    .status(statusCode)
    .cookie("Token", TOKEN, options)
    .json({ message: "successfully stored", TOKEN });
}

//?This logic or block is only for authenticated users once login after TOKEN
exports.getMe = async (req, res, next) => {
  try {
    let user = await AuthSchema.findById(req.user.id);
    res.status(200).json({ message: "successfully fetched", user });
  } catch (err) {
    res.status(501).json({ message: "SERVER ERROR" });
  }
};

// exports.createMovies = async (req, res) => {
//   let { movie_name, movie_gener, movie_language} = req.body;
//   try {
//     let payload = {
//       movie_name,
//       movie_gener,
//       movie_language,
//       movie_poster: req.file,
//     };
//     // ? Save to database
//     let Movies = await MovieSchema.create(payload);
//     res.status(200).json({ message: "successfully stored", Movies });
//   } catch (err) {
//     res.status(501).json("Server Error");
//   }
// };
