const { Router } = require("express");
const { SignUp, SignIn, getMe } = require("../Controllers/auth");
const { Protected } = require("../middlewares/auth");
const router = Router();


router.route("/signup").post(SignUp);
router.route("/signin").post(SignIn);
router.route("/get").get(Protected, getMe);


module.exports = router;
