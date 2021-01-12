const { expect } = require('chai');
const { Then } = require('cucumber');

Then('the response should contain a {int} status code', function (statusCodeExpected) {
  expect(this.response.status).to.equal(statusCodeExpected);
});
