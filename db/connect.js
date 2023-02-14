const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;
// <=========== USING PROMISES TO CREATE A CONNECTION SYNTAX =============>
/* mongoose
  .connect(connectionString)
  .then(() => {
    console.log("connected to the Database!");
  })
  .catch((err) => {
    console.error(err);
  });
 */
// <=========== USING PROMISES TO CREATE A CONNECTION SYNTAX =============>

// <=========== USING ASYNC/AWAIT TO CREATE A CONNECTION SYSNTAX  =============>
/* const mongoDBconnect = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("connected to the Database!");
  } catch (error) {
    console.error(error);
  }
};

mongoDBconnect(); */
// <=========== USING ASYNC/AWAIT TO CREATE A CONNECTION SYSNTAX  =============>
