const { expect } = require('chai');
const { Then } = require('cucumber');

Then('the response should contain a {int} status code', function (statusCodeExpected) {
  switch (statusCodeExpected) {
    case 200:
      expect(this.response.status).to.equal(statusCodeExpected);
      break;
    case 204:
      expect(this.response.status).to.equal(statusCodeExpected);
      break;
    default:
      break;
  }
});
