const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('VCC Platform is running!');
});

const server = app.listen(port, () => {
  console.log(`VCC Platform listening at http://localhost:${port}`);
});

// Handle shutdown gracefully
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});
