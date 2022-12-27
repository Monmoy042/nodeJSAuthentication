const express = require("express");
require("dotenv").config();
require("./models/db");
const userRouter = require("./routes/user");

const User = require("./models/user");

//   Express server create
const app = express();

// Express middleware
// app.use((req, res, next) => {
//   req.on("data", (chunk) => {
//     const data = JSON.parse(chunk);
//     req.body = data;
//     next();
//   });
// });

// pull data from frontend or user/incoming data

app.use(express.json());
app.use(userRouter);

const test = async (email, password) => {
  const user = await User.findOne({ email: email });
  const result = await user.comparePassword(password);
  console.log(result);
};

test("kms@email.com", "mikku2244");

app.get("/test", (req, res) => {
  res.send("Hello World");
});

// const email = "jane@email.com";

// Home route setup
app.get("/", (req, res) => {
  res.send("<h1 style='color:red;'>MERN App</h1>");
});

// Listen from the server
app.listen(8000, () => {
  console.log("Server is running...");
});
