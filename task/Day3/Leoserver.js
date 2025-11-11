const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const moviesFilePath = path.join(__dirname, 'data', 'movies.txt');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  res.setHeader('Content-Type', 'text/plain');

  if (pathname === '/' || pathname === '/home') {
    res.end('🎬 Welcome to Leo Movie Booking Home Page!');
  }

  else if (pathname === '/movies') {
    fs.readFile(moviesFilePath, 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        return res.end('Error reading movies file.');
      }
      res.write('📁 File Path: ' + moviesFilePath + '\n\n');
      res.end('🎞️ Available Movies:\n' + data);
    });
  }

  else if (pathname === '/booking') {
    const movieName = query.name;
    const seats = query.seats;

    if (!movieName || !seats) {
      res.statusCode = 400;
      return res.end('Please provide movie name and seats in query. Example: /booking?name=Leo&seats=2');
    }

    res.end(` Booking confirmed for "${movieName}" — ${seats} seat(s) reserved!`);
  }

  else if (pathname === '/contact') {
    res.end('Contact us at: support@leomoviebooking.com');
  }

  else {
    res.statusCode = 404;
    res.end(' Page Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🎬 Leo Movie Booking Server running at http://localhost:${PORT}`);
});
