const statusCode = require('http-status-codes');
const { expect } = require('chai');
const { Then } = require('cucumber');

Then('the response should contain a OK status', function () {
  expect(this.response.status).to.equal(statusCode.OK);
});
