const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT ? Number(process.env.PORT) : 4173;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
};

function resolveFilePath(requestUrl) {
  const cleanPath = decodeURI(requestUrl.split('?')[0]) || '/';
  const targetPath = cleanPath === '/' ? 'index.html' : cleanPath.replace(/^\/+/, '');
  return path.resolve(ROOT_DIR, targetPath);
}

function sendNotFound(res) {
  res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
  res.end('404 – Олдсонгүй');
}

const server = http.createServer((req, res) => {
  const filePath = resolveFilePath(req.url);

  if (!filePath.startsWith(ROOT_DIR)) {
    sendNotFound(res);
    return;
  }

  fs.stat(filePath, (statErr, stats) => {
    if (statErr) {
      sendNotFound(res);
      return;
    }

    const finalPath = stats.isDirectory() ? path.join(filePath, 'index.html') : filePath;

    fs.readFile(finalPath, (readErr, data) => {
      if (readErr) {
        sendNotFound(res);
        return;
      }

      const ext = path.extname(finalPath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  });
});

server.listen(PORT, () => {
  console.log(`Hunnu Store прототип ${PORT} портоор ажиллаж байна.`);
});
