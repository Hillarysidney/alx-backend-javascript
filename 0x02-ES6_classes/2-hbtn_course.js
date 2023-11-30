/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    if (typeof students !== 'object') {
      throw TypeError('students must be array of strings');
    }
    for (const val of students) {
      if (typeof val !== 'string') {
        throw TypeError('students must be array of strings');
      }
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = length;
  }

  set students(students) {
    if (typeof students !== 'object') {
      throw TypeError('students must be array of strings');
    }
    for (const val of students) {
      if (typeof val !== 'string') {
        throw TypeError('students must be array of strings');
      }
    }
    this._students = students;
  }

  get students() {
    return this._students;
  }
}
