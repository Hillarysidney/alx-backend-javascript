/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */ const http = require('http');
const url = require('url');
const fs = require('fs');

const printStats = (data) => {
  const dataList = data.split('\n').splice(1);
  const stats = { CS: [], SWE: [] };
  let students = 0;
  for (const line of dataList) {
    const columns = line.split(',');
    if (columns[3] === 'CS') {
      stats.CS.push(columns[0]);
      students += 1;
    } else if (columns[3] === 'SWE') {
      stats.SWE.push(columns[0]);
      students += 1;
    }
  }
  const result = [`Number of students: ${students}`];
  for (const [key, value] of Object.entries(stats)) {
    result.push(
      `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`
    );
  }
  return result;
};

const countStudents = (file) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        if (err.code === 'ENOENT') {
          reject(new Error('Cannot load the database'));
        }
        reject(err);
      } else {
        resolve(printStats(data));
      }
    });
  });

const app = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url).pathname;
  if (reqUrl === '/') {
    res.end('Hello Holberton School!');
  } else if (reqUrl === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((data) => {
        res.end(data.join('\n'));
      })
      .catch((err) => {
        res.end(err.message);
      });
  }
});

app.listen(1245, '127.0.0.1', () => console.log('Server Started'));

module.exports = app;
