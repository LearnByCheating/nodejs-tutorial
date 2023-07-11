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