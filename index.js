const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const postsRouter = require('./routes/posts');

const app = express();
// app routes
app.use('/posts', postsRouter);

// general setup
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const CONNECTION_URL =
  'mongodb+srv://coreymunn3:Sherm@n5@cluster0.pxasv.mongodb.net/test?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// connect the DB
connectDB(CONNECTION_URL, PORT);
// init
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
