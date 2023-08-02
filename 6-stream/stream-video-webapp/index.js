const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// 1. Respond to request to / root path with the index.html document 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// 2. Respond to request to /video path.
app.get('/video', (req, res) => {
  const videoPath = './stream-tutorial.mp4';
  // 3. Get video size (in bytes)
  const videoSize = fs.statSync(videoPath).size;

  // 4. Set chunk size to 1MB (default is 64KB)
  const chunkSize = 1000000;
  // 5. Get the video range string from the request headers
  const range = req.headers.range;
  // 6. Starting point: remove non-digits from the range string and convert it to a number.
  const start = Number(range.replace(/\D/g, ''));
  const end = Math.min(start + chunkSize, videoSize - 1);
  // 7. Get the chunk size being sent. 
  const contentLength = end - start + 1;

  // 8. Create the response headers.
  const headers = {
    'Content-Range': `bytes ${start}-${end}/${videoSize}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': contentLength,
    'Content-Type': 'video/mp4'
  }
  // 9. Add headers to response object. HTTP Status 206 is for partial content
  res.writeHead(206, headers);

  // 10. Create read stream for the current chunk of video.
  const readStream = fs.createReadStream(videoPath, { start, end });
  // 11. Pipe the video chunk to the response object to send to the client.
  readStream.pipe(res);
});

// 12. Listen for client requests on port 3000
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
