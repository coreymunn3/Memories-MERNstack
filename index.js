const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const postsRouter = require('./routes/posts');
const dotenv = require('dotenv');

const app = express();
dotenv.config();
// general setup
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
// app routes
app.use('/posts', postsRouter);

const PORT = process.env.PORT || 5000;

// connect the DB
connectDB(process.env.CONNECTION_URL, PORT);
// init
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
