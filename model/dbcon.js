const mongoose = require("mongoose");
const url =
  "mongodb+srv://codefreak:harshsaid12@cluster0.axqwe.mongodb.net/resume?retryWrites=true&w=majority";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection successfull");
  })
  .catch((err) => console.log(err));
