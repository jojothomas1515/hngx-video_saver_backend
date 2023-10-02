# HelpMeOut Backend

## Usage

```bash
git clone https://github.com/jojothomas1515/hngx-video_saver_backend

cd hngx-video_saver_backend

npm i

npm run dev
```

## api endpoint

_POST_ http://localhost:5000/api/start/ - generate the video id used by api/upp/:id and api/:end/:id

_POST_ http://localhost:5000/api/upp/:id - for the video chunks

_POST_ http://localhost:5000/api/end/:id - save the video to and add the info to the db, also trigger the conversion and transcription service

_GET_ http://localhost:5000/static/:vidname - to get the video
