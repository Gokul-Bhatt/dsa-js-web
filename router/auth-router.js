const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controllers");
const singupSchema = require("../validators/auth-validator");
const validate =  require("../middlewares/validat-middleware");


// router.get("/",(req, res)=>{
//     res.status(200).send("by router");
// });


router.route("/").get(authcontrollers.home);

router.route("/register").post(validate(singupSchema), authcontrollers.register);
router.route("/login").post(authcontrollers.login);
module.exports = router;