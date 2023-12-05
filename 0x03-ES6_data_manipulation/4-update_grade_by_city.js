/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (!(Array.isArray(getListStudents))) {
    return [];
  }
  // eslint-disable-next-line array-callback-return, consistent-return
  const result = getListStudents.filter((obj) => {
    if (obj.location === city) {
      return obj;
    }
  });
  const final = result.map((obj) => {
    for (const grades of newGrades) {
      if (grades.studentId === obj.id) {
        if (grades.grade) {
          obj.grade = grades.grade;
        }
        return obj;
      }
    }
    obj.grade = 'N/A';
    return obj;
  });

  return final;
}
