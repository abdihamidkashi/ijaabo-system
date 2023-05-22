const express = require("express");
require("dotenv").config();
const userRouter = require("./users/route");

const app = express();

app.use(express.json());

app.use("/users", userRouter);

app.listen(8080, () => {
    console.log("Server running on port 8080");
});

 

 