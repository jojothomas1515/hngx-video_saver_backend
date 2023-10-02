const express = require('express');
const cors = require('cors');
const path = require('path');
const { vidRoutes } = require('./routes/videoRoute');
const { Video } = require('./models/videos');
const fs = require('fs');

const app = express();

app.use(
  '/static',
  async (req, res, next) => {
    console.log('i am here');
    console.log(await Video.find());
    console.log(req.path);
    next();
  },
  express.static(path.join(__dirname, 'uploads'))
);
app.use(cors({ origin: '*' }));

app.use('/api', vidRoutes);
const PORT = process.env.PORT ?? 5000;
app.listen(PORT, () => {
  if (!fs.existsSync('uploads')) fs.mkdirSync('./uploads/');
  if (!fs.existsSync('audios')) fs.mkdirSync('./audios/');
  console.log('Listening on port', PORT);
});
