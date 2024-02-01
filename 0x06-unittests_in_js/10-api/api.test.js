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

describe('Test cart/:id route', () => {
  it('should return the right status and result', (done) => {
    const id = 1;
    request.get(`http://localhost:7865/cart/${id}`, (error, response, body) => {
      chai.expect(response.statusCode).to.equal(200);
      chai.expect(body).to.equal(`Payment methods for cart ${id}`);
      done();
    });
  });

  it('should return the right statusCode', (done) => {
    request.get('http://localhost:7865/cart/one', (error, response, body) => {
      chai.expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Test login route', () => {
  it('should return the right result after login', (done) => {
    const requestData = { userName: 'Betty' };
    request.post(
      { url: 'http://localhost:7865/login', json: requestData },
      (error, response, body) => {
        chai.expect(response.statusCode).to.equal(200);
        chai.expect(body).to.equal(`Welcome ${requestData.userName}`);
        done();
      }
    );
  });
});

describe('Test /available_payments route', () => {
  it('should return the right result', (done) => {
    request.get(
      'http://localhost:7865/available_payments',
      (error, response, body) => {
        chai.expect(response.statusCode).to.equal(200);
        const resBody = JSON.parse(body);
        chai.expect(resBody).to.deep.equal({
          payment_methods: { credit_cards: true, paypal: false },
        });
        done();
      }
    );
  });
});
