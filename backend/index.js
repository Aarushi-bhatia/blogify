const path = require("path");
const express = require('express');
const userRoute = require("./routes/user");

const app = express();
const PORT = 8000;


app.get("/", (req, res) =>{
  res.json();
})

app.use("/user", userRoute);

app.listen(PORT, () => console.log(`Server has started at PORT:${PORT}`))