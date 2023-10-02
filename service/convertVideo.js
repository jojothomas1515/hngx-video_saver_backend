const ffmpeg = require('ffmpeg');
const { makeTrancript } = require('./makeTranscript');

const videoToMp3 = (vidName) => {
  const process = new ffmpeg(`./uploads/${vidName}`);
  console.log('here');
  process
    .then((video) => {
      const audioName = vidName.replace(/\.webm/, '');
      console.log('processing');
      video.fnExtractSoundToMP3(`./audios/${audioName}.mp3`, (err) => {
        console.log(err);
        console.log('time to transcrib');
        if (!err) makeTrancript(vidName, `./audios/${audioName}.mp3`);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { videoToMp3 };
