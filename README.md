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

- Response
  ```json
  {
    "status": "success",
    "vID": "4377648281760191"
  }
  ```

_POST_ http://localhost:5000/api/upp/:id - for the video chunks

- Response
  ```json
  {
    "status": "chunk appended"
  }
  ```

_POST_ http://localhost:5000/api/end/:id - save the video to and add the info to the db, also trigger the conversion and transcription service

- Response
  ```json
  {
    "message": "saved",
    "data": {
        "vid":{
                  "_id":"651b026ed4ce2da660959162",
                  "name":"7856340036359164.webm",
                  "transcript":"Now, every five seconds is going to send the buffer profile. I'm logging these out to I would know that I wouldn't send the buffer. Start sending the buffer. Will send again. So let me just do something on the screen so that's when I played the video, it's not, like, I did nothing. Okay. And I think this should be enough. So I'm going to stop it when I stop it sends the stop and the videos start transcribing and",
                  "url":"/static/7856340036359164.webm","
                  __v":0
              }
    }
  }
  ```

_GET_ http://localhost:5000/static/:vidname - to get the video

- Response
  ```json
    {
        "_id":"651b026ed4ce2da660959162",
        "name":"7856340036359164.webm",
        "transcript":"Now, every five seconds is going to send the buffer profile. I'm logging these out to I would know that I wouldn't send the buffer. Start sending the buffer. Will send again. So let me just do something on the screen so that's when I played the video, it's not, like, I did nothing. Okay. And I think this should be enough. So I'm going to stop it when I stop it sends the stop and the videos start transcribing and",
        "url":"/static/7856340036359164.webm","
        __v":0
    }
  ```

_GET_ http://localhost:5000/api/all -

- Response

  ````json
          [
              {
                  "_id":"651b026ed4ce2da660959162",
                  "name":"7856340036359164.webm",
                  "transcript":"Now, every five seconds is going to send the buffer profile. I'm logging these out to I would know that I wouldn't send the buffer. Start sending the buffer. Will send again. So let me just do something on the screen so that's when I played the video, it's not, like, I did nothing. Okay. And I think this should be enough. So I'm going to stop it when I stop it sends the stop and the videos start transcribing and",
                  "url":"/static/7856340036359164.webm","
                  __v":0
              }
          ]
          ```
  ````
