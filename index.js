const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
// app routes

// general setup
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const CONNECTION_URL =
  'mongodb+srv://coreymunn3:Sherm@n5@cluster0.pxasv.mongodb.net/test?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

const connectDB = async (url, port) => {
  try {
    await mongoose.connect(CONNECTION_URL, {
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

connectDB(CONNECTION_URL, PORT);
app.listen(() => console.log(`Server running on port ${PORT}`));
