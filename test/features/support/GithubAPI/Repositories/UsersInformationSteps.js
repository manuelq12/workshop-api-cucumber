const agent = require('../../../../agent/Agent');
const { Given, When, Then } = require('cucumber');
const chai = require('chai');
const chaiSubset = require('chai-subset');

chai.use(chaiSubset);
const { expect } = chai;

const urlBase = 'https://api.github.com';

Given('a Github account like {string}', function (username) {
  this.username = username;
});

When('a request is used to retrieve the users information', async function () {
  this.response = await agent.getRequest(`${urlBase}/users/${this.username}`)
});

Then('the response must contain users property {string} {string}', function (propertyName, expectedValue) {
  switch (propertyName) {
    case 'name':
      expect(this.response.body.name).equal(expectedValue);
      break;
    case 'company':
      expect(this.response.body.company).equal(expectedValue);
      break;
    case 'location':
      expect(this.response.body.location).equal(expectedValue);
      break;
    default:
      break;
  }
});
