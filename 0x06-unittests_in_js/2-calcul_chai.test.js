const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('add function', () => {
    it('adds two rounded numbers correctly', () => {
      chai.expect(calculateNumber('SUM', 3, 5)).to.equal(8);
    });

    it('adds two rounded numbers correctly', () => {
      chai.expect(calculateNumber('SUM', 3.7, 1)).to.equal(5);
    });

    it('adds two rounded numbers correctly', () => {
      chai.expect(calculateNumber('SUM', 3.7, 5.2)).to.equal(9);
    });
  });

  describe('subraction function', () => {
    it('subtract two rounded numbers correctly', () => {
      chai.expect(calculateNumber('SUBTRACT', 3, 5)).to.equal(-2);
    });

    it('subtract two rounded numbers correctly', () => {
      chai.expect(calculateNumber('SUBTRACT', 3.7, 1)).to.equal(3);
    });

    it('subtract two rounded numbers correctly', () => {
      chai.expect(calculateNumber('SUBTRACT', 9.7, 5.2)).to.equal(5);
    });
  });

  describe('division function', () => {
    it('divides two rounded numbers correctly', () => {
      chai.expect(calculateNumber('DIVIDE', 3, 5)).to.equal(0.6);
    });

    it('divides two rounded numbers correctly', () => {
      chai.expect(calculateNumber('DIVIDE', 3.7, 1)).to.equal(4);
    });

    it('divides two rounded numbers correctly', () => {
      chai.expect(calculateNumber('DIVIDE', 13.6, 5.2)).to.equal(2.8);
    });
    it('divides two rounded numbers correctly', () => {
      chai.expect(calculateNumber('DIVIDE', 13.6, 0.3)).to.equal('Error');
    });
  });
});
