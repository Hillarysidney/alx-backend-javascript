/* eslint-disable comma-dangle */
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
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
        `Number of students in ${key}: ${value.length}. List: ${value.join(
          ', '
        )}`
      );
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('Cannot load the database');
    }
    throw err;
  }
}
module.exports = countStudents;
