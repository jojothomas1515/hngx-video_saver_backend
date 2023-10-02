const fs = require('fs');

const fileName = '/home/jojo/hngx-video_saver_backend/lala.webm';
const streamVideo = async (req, res) => {
  const range = req.headers.range;
  if (!range) {
    return res.send('Range header needed');
  }
  console.log(range);
  const size = fs.statSync(fileName).size;
  console.log(size);
  const CHUNCK_SIZE = 2 * (1000 * 100);
  const start = Number(range.replace(/\D/g, ''));
  const end = Math.min(start + CHUNCK_SIZE + 1, size);
  const rangeHeader = `bytes ${start}-${end}/${size}`;
  const contentLength = end - start + 1;

  const headers = {
    'Content-Range': rangeHeader,
    'Accept-Ranges': 'bytes',
    'Content-Length': contentLength,
    'Content-Type': 'video/mp4',
  };

  res.writeHeader(206, headers);
  const stream = fs.createReadStream(fileName, { start, end });
  console.log('here');
  stream.pipe(res);
};

module.exports = { streamVideo };
