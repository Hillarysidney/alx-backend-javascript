const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('add function', () => {
    it('adds two rounded numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 3, 5), 8);
    });

    it('adds two rounded numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 3.7, 1), 5);
    });

    it('adds two rounded numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 3.7, 5.2), 9);
    });
  });

  describe('subraction function', () => {
    it('subtract two rounded numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 5), -2);
    });

    it('subtract two rounded numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1), 3);
    });

    it('subtract two rounded numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 9.7, 5.2), 5);
    });
  });

  describe('division function', () => {
    it('divides two rounded numbers correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3, 5), 0.6);
    });

    it('divides two rounded numbers correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.7, 1), 4);
    });

    it('divides two rounded numbers correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 13.6, 5.2), 2.8);
    });
    it('divides two rounded numbers correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 13.6, 0.3), 'Error');
    });
  });
});
