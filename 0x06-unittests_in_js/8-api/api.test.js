const chai = require('chai');
const request = require('request');

describe('Test the Express API', () => {
  it('should return the right results', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      chai.expect(response.statusCode).to.equal(200);
      chai.expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
