const { expect } = require('chai');
const { Then } = require('cucumber');

Then('the response body must be empty', function () {
  /* eslint-disable no-unused-expressions */
  expect(this.response.body).to.be.empty;
});
