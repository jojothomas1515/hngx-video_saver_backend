const { Router } = require('express');
const { uploadVideo, endUpload, startRecord, getAllVideos, getVid } = require('../controllers/videoController');
const fileupload = require('express-fileupload');
const { streamVideo } = require('../controllers/streamVideoController');
const multer = require('multer');
const vidRoutes = Router();
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// Video recording
vidRoutes.post('/start', startRecord);
vidRoutes.post('/upp/:id', uploadVideo);
vidRoutes.get('/stream/:name', streamVideo);
vidRoutes.post('/end/:id', endUpload);

vidRoutes.get('/all', getAllVideos);
vidRoutes.get('/video/:name', getVid);

module.exports = { vidRoutes };
