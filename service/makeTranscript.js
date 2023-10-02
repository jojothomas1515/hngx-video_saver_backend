const { Deepgram } = require('@deepgram/sdk');
const deepgram = new Deepgram(process.env.DEEPGRAM_KEY);

const fs = require('fs');
const { Video } = require('../models/videos');

const makeTrancript = async (vidName, audioPath) => {
  const audioSource = {
    stream: fs.createReadStream(audioPath),
    mimetype: MIMETYPE_OF_FILE,
  };

  const response = await deepgram.transcription.preRecorded(audioSource, {
    punctuate: true,
    // other options are available
  });
  const vid = await Video.findOne({ name: vidName });
  if (vid) {
    vid.set({ transcript: response.results[0] });
    await vid.save();
  }
};

module.exports = { makeTrancript };
