const { Router } = require('express');
const { uploadVideo, endUpload, startRecord } = require('../controllers/videoController');
const fileupload = require('express-fileupload');
const { streamVideo } = require('../controllers/streamVideoController');
const multer = require('multer');
const vidRoutes = Router();
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

vidRoutes.post('/upp/:id', uploadVideo);
vidRoutes.get('/stream', streamVideo);
vidRoutes.post('/end/:id', endUpload);
vidRoutes.post('/start', startRecord);
vidRoutes.get('/all', startRecord);
vidRoutes.post('/video/:name', startRecord);

module.exports = { vidRoutes };
