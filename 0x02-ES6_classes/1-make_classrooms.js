import Classroom from './0-classroom';

export default function initializeRooms() {
  const c1 = new Classroom(19);
  const c2 = new Classroom(20);
  const c3 = new Classroom(34);
  const classrooms = [c1, c2, c3];
  return classrooms;
}
