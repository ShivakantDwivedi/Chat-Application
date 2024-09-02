const mongoose = require("mongoose");

const connectDB = async () => {
  try {
   // const db = "mongodb+srv://shivakant1472002:Shiva111@cluster0.cqv5r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const conn = await mongoose.connect(process.env.MONGODB);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
