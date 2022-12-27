// Connect database
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // strictQuery: true,
  })
  .then(() => {
    console.log("DB is connected...");
  })
  .catch((err) => console.log(err.message));