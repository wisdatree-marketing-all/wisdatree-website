// Lightweight zero-dependency local preview server for Wisdatree website
const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

let currentPort = 3000;
const DIST_DIR = path.join(__dirname, 'dist');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.zip': 'application/zip',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  // Normalize URL and remove query string
  let safePath = decodeURIComponent(req.url.split('?')[0]);
  if (safePath === '/' || safePath === '') safePath = '/index.html';

  let filePath = path.join(DIST_DIR, safePath);

  // If file doesn't exist directly, check without leading slash
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(DIST_DIR, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 - Internal Server Error');
      return;
    }
    // Allow CORS and set caching
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  });
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    currentPort++;
    if (currentPort < 3010) {
      console.log(`Port ${currentPort - 1} is in use, trying port ${currentPort}...`);
      server.listen(currentPort, '0.0.0.0');
    } else {
      console.error('All ports between 3000-3010 are in use.');
    }
  } else {
    console.error('Server error:', err);
  }
});

server.listen(currentPort, '0.0.0.0', () => {
  const url = `http://localhost:${currentPort}`;
  console.log(`\n======================================================`);
  console.log(`  Wisdatree Website Preview is running!`);
  console.log(`  Local URL: ${url}`);
  console.log(`  Press Ctrl + C to stop the preview`);
  console.log(`======================================================\n`);

  // Automatically open browser on Windows
  exec(`start ${url}`);
});
