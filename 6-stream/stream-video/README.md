# Run this existing project

Install the the express package:
`npm install express`

Start the server:
`npm start`

Or if you have nodemon installed globally (recommended) run:
`npm run dev`

View the HTML page at http://localhost:3000


---
# Build a Basic Video Streaming Web App
Create a project folder called stream-video.
From the stream-video folder initiate a Node project:

`npm init -y`

---

### package.json:
In the package.json file:
* In the scripts property, delete the test script and add the following two scripts:
``` json
"start": "node index.js",
"dev": "nodemon index.js"
```

Install the express npm package: `npm install express`

---

### index.html
Create an HTML document named index.html
Populate that file with:
``` html
<html>
  <head>
    <title>Node stream video example</title>
  </head>
  <body>
    <h1>How To Build a Video App</h1>
    <!-- controls attribute shows the video controls at the bottom of the video screen -->
    <video width="1080" controls> 
      <source src="/video" type="video/mp4">
    </video>
  </body>
</html>
```

---

### index.js
Create a file in the project root named index.js.
In that file populate it with the below:
``` js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/video', (req, res) => {
  const videoPath = './stream-tutorial.mp4';
  // Get video size (in bytes)
  const videoSize = fs.statSync(videoPath).size;

  // Set chunk size to 1MB (default is 64KB)
  const chunkSize = 1000000;
  // Get the video range string from the request headers
  const range = req.headers.range;
  // Starting point: remove non-digits from the range string and convert it to a number.
  const start = Number(range.replace(/\D/g, ''));
  const end = Math.min(start + chunkSize, videoSize - 1);
  // Get the length of the remaining video to play. 
  const contentLength = end - start + 1;

  const headers = {
    'Content-Range': `bytes ${start}-${end}/${videoSize}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': contentLength,
    'Content-Type': 'video/mp4'
  }
  // Add headers to response object. HTTP Status 206 is for partial content
  res.writeHead(206, headers);

  // Create read stream for the current chunk of video.
  const readStream = fs.createReadStream(videoPath, { start, end });
  // Pipe the video chunk to the response object to send to the client.
  readStream.pipe(res);
});

// Listen for client requests on port 3000
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
```

---

Start the server:
`npm start`

Or if you have nodemon installed globally (recommended) run:
`npm run dev`

View the HTML page at http://localhost:3000