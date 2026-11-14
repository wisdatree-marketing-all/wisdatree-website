// Lightweight zero-dependency local preview server for Wisdatree website
const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 3000;
const DIST_DIR = path.join(__dirname, 'dist');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
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

  // Fallback to index.html for SPA client-side routing
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
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  });
});

server.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log(`\n======================================================`);
  console.log(`  Wisdatree Website Preview is running!`);
  console.log(`  Local URL: ${url}`);
  console.log(`  Press Ctrl + C to stop the preview`);
  console.log(`======================================================\n`);

  // Automatically open browser on Windows
  exec(`start ${url}`);
});
