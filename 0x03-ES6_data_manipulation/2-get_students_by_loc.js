export default function getStudentsByLocation(students, city) {
  // eslint-disable-next-line array-callback-return, consistent-return
  const result = students.filter((obj) => {
    if (obj.location === city) {
      return obj;
    }
  });
  return result;
}
