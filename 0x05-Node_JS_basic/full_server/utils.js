/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import { readFile } from 'fs';

const printStats = (data) => {
  const dataList = data.split('\n').splice(1);
  const stats = { CS: [], SWE: [] };
  for (const line of dataList) {
    const columns = line.split(',');
    if (columns[3] === 'CS') {
      stats.CS.push(columns[0]);
    } else if (columns[3] === 'SWE') {
      stats.SWE.push(columns[0]);
    }
  }
  return stats;
};

const readDatabase = (file) =>
  new Promise((resolve, reject) => {
    readFile(file, 'utf-8', (err, data) => {
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

export default readDatabase;
