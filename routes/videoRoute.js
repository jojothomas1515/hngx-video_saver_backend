const { Router } = require('express');
const { uploadVideo, endUpload, startRecord, getAllVideos, getVid } = require('../controllers/videoController');
const { streamVideo } = require('../controllers/streamVideoController');
const vidRoutes = Router();

// Video recording
vidRoutes.post('/start', startRecord);
vidRoutes.post('/upp/:id', uploadVideo);
vidRoutes.get('/stream/:name', streamVideo);
vidRoutes.post('/end/:id', endUpload);

vidRoutes.get('/all', getAllVideos);
vidRoutes.get('/video/:name', getVid);

module.exports = { vidRoutes };
