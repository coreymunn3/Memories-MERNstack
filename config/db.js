const mongoose = require('mongoose');

const connectDB = async (url, port) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log('DB connected');
  } catch (error) {
    console.log('ERROR');
    console.log(error.message);
  }
};

module.exports = connectDB;
