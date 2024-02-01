const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

expect = chai.expect;

describe('getPaymentTokenFromAPI', () => {
  it('returns the right content', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response.data).to.equal('Successful response from the API');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
