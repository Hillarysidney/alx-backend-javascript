/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
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
  console.log(`Number of students: ${students}`);
  for (const [key, value] of Object.entries(stats)) {
    console.log(
      `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`
    );
  }
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

module.exports = countStudents;
