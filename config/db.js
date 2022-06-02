require('dotenv').config();

const mongoose = require('mongoose');
const db = process.env.MONGODB_CONNECTION_STRING;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    // console.log('MongoDB is Connected...');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
