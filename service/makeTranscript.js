const { Deepgram } = require('@deepgram/sdk');
const deepgram = new Deepgram(process.env.DEEPGRAM_KEY);

const fs = require('fs');
const { Video } = require('../models/videos');

const makeTrancript = async (vidName, audioPath) => {
  try {
    const audioSource = {
      stream: fs.createReadStream(audioPath),
      mimetype: 'audio/mp3',
    };
    const response = await deepgram.transcription.preRecorded(audioSource, {
      punctuate: true,
      // other options are available
    });
    console.log(response.results.channels[0].alternatives[0].transcript);
    const vid = await Video.findOne({ name: vidName });
    if (vid) {
      vid.set({ transcript: String(response.results.channels[0].alternatives[0].transcript) });
      console.log('transcript done');
      await vid.save();
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { makeTrancript };
