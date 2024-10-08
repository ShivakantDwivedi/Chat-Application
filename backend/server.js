const express = require("express");
const {chat} = require('./data/data')
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes')

dotenv.config()
connectDB()
const app = express();

app.use(express.json())


  app.get("/", (req, res) => {
    res.send("API is running..");
  });


  app.use('/api/users' , userRoutes)

  const PORT = process.env.PORT || 4000

  app.listen( PORT, console.log(`Server Stared at PORT ${PORT}`));