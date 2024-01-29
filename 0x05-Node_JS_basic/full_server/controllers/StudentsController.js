/* eslint-disable comma-dangle */
import readDatabase from '../utils';

const dbFile = process.argv[2] === undefined ? '' : process.argv[2];
class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(dbFile)
      .then((data) => {
        res.statusCode = 200;
        res.write('This is the list of our students\n');
        for (const [key, value] of Object.entries(data)) {
          res.write(
            `Number of students in ${key}: ${value.length}. List: ${value.join(
              ', '
            )}`
          );
          if (key === 'CS') {
            res.write('\n');
          }
        }
        res.end();
      })
      .catch((err) => {
        res.statusCode = 500;
        res.end(err.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.statusCode = 500;
      res.end('Major parameter must be CS or SWE');
    }
    readDatabase(dbFile)
      .then((data) => {
        res.statusCode = 200;
        for (const [key, value] of Object.entries(data)) {
          if (key === major) {
            res.end(`List: ${value.join(', ')}`);
          }
        }
      })
      .catch((err) => {
        res.statusCode = 500;
        res.end(err.message);
      });
  }
}

export default StudentsController;
