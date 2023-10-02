const fs = require('fs');
const path = require('path');
const { Video } = require('../models/videos');
const { videoToMp3 } = require('../service/convertVideo');

// TODO: fix this
let vidChunk = [];
const uploadVideo = (req, res) => {
  // console.log(req.files);
  // console.log(req.file);
  // console.log(req.body);

  // vidChunk.push(req.file.buffer);
  // res.json({ status: 'ok' });
  // const save_path = `./uploads/${video.name}`;
  // video.mv(save_path);
  // req.on('data', (data) => {
  //   console.log(String(data));
  //   result = Buffer.concat([result, data]);
  //   fs.writeFileSync('./vid.webm', result);
  // });
  // res.json({
  //   status: 'success',
  // });
  const { id } = req.params;
  req.on('data', (data) => {
    fs.appendFileSync(`./uploads/${id}.webm`, data);
  });
  return res.status(201).json({ status: 'chunk appended' });
};

const endUpload = (req, res) => {
  const { id } = req.params;

  // const saveBuff = Buffer.concat(vidChunk);

  // fs.writeFileSync(`./uploads/${id}.webm`, saveBuff);
  // console.log(saveBuff)
  // vidChunk = [];
  console.log('saved');
  const vid = new Video({ name: `${id}.webm`, transcript: null, url: `/static/${id}.webm` });
  vid.save();
  videoToMp3(`${id}.webm`);
  return res.json({ message: 'saved', data: { vid } });
};

const startRecord = (req, res) => {
  const id = String(Math.floor(Math.random() * 9999999999999999));
  res.status(200).json({ status: 'success', vID: id });
};

const getAllVideos = async (req, res) => {
  const allVid = await Video.find();
  return res.json(allVid);
};

const getVid = async (req, res) => {
  let { name } = req.params;

  if (!name.endsWith('.webm')) name = name + '.webm';

  const vid = await Video.findOne({ name: name });
  res.json(vid);
};

module.exports = { uploadVideo, endUpload, startRecord, getAllVideos, getVid };
