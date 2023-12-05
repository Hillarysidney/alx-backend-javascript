export default function getStudentIdsSum(students) {
  const initialValue = 0;
  const sum = students.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id,
    initialValue,
  );
  return sum;
}
