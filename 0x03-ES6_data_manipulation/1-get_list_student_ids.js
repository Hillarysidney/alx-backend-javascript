export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const result = array.map((obj) => obj.id);
  return result;
}
