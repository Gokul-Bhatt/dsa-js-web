const mongoose = require("mongoose");

//const URI = "mongodb://127.0.0.1:27017/gokul";
//mongoose.connect(URI);
  // const URI  = "mongodb+srv://gokul:Gokul9012@cluster0.8wxcaym.mongodb.net/gokul?retryWrites=true&w=majority";

const URI = process.env.MONGODB_URI;
const connectDb = async () => {


  try {
    await mongoose.connect(URI);
    console.log("conected to db");
  } catch (error) {
    console.error("database conection fail");
    process.exit(0);
  }
};

module.exports = connectDb;
