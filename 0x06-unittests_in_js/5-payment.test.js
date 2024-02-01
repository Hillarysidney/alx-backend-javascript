const sinon = require('sinon');
const chai = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

const expect = chai.expect;

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;
  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });
  it('should log the correct output: The total is: 120', () => {
    sendPaymentRequestToApi(100, 20);

    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('should log the correct output: The total is: 20', () => {
    sendPaymentRequestToApi(10, 10);

    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 20')).to.be.true;
  });
});
