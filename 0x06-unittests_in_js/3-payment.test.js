const sinon = require('sinon');
const chai = require('chai');
//const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const expect = chai.expect;

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
    // Create a spy for Utils.calculateNumber
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Call the function you want to test
    sendPaymentRequestToApi(100, 20);

    // Assert that Utils.calculateNumber was called correctly
    //assert(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20));

    // Use Chai's expect assertions to verify the spy
    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.firstCall.args).to.deep.equal(['SUM', 100, 20]);

    // Restore the original function after the test
    calculateNumberSpy.restore();
  });
});
