const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const postsRouter = require('./routes/posts');
const dotenv = require('dotenv');
const path = require('path');

const app = express();
dotenv.config();
// connect the DB
connectDB(process.env.CONNECTION_URL);
// general setup
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
// app routes
app.use('/posts', postsRouter);

// Serve static assets in production build
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));
}
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
// init
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
