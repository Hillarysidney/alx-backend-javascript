const sinon = require('sinon');
const chai = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

const expect = chai.expect;

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
    //prettier-ignore
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(calculateNumberStub.firstCall.args).to.deep.equal(['SUM', 100, 20]);
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
