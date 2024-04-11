const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("using the router and controllers....");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }

    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);
    // const userCreated = await User.create({username, email, phone, password: saltRound,});

    const userCreated = await User.create({ username, email, phone, password });
    res
      .status(201)
      .json({
        msg: "registraton successful",
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
  } catch (error) {
    res.status(500).json("internal server error");
  }
};


///Login


const login = async(req, res)=>{
    try {
        const {email, password} = req.body;
        const userExist = await User.findOne({email});
        console.log(userExist);

        if(!userExist){
            return res.status(400).json({massage: "invalid credentials"});
        }


        // const user = await bcrypt.compare(password,userExist.password );
        const user = await userExist.comparePassword(password);


        if(user){
            res.status(200).json({
                msg:"Login successful",
                token: await userExist.generateToken(),
                userId:userExist._id.toString(),
            });
        }else{
            res.status(401).json({message:"Invalid email of password"});
        }
    } catch (error) {
        // res.status(500).json("internal server error");
        next(error);
    }
}


module.exports = { home, register, login };