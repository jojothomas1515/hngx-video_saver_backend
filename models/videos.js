const { db } = require('../config/db');

const Video = db.model('Video', {
  name: String,
  transcript: String,
  url: String,
});

module.exports = { Video };
