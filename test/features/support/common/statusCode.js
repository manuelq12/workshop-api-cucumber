const { expect } = require('chai');
const statusCode = require('http-status-codes');
const { Then } = require('cucumber');

Then('the response should contain a {string} status', function (status) {
  switch (status) {
    case 'OK':
      expect(this.response.status).to.equal(statusCode.OK);
      break;
    case 'No-Content':
      expect(this.response.status).to.equal(statusCode.NO_CONTENT);
      break;
    default:
      break;
  }
});
