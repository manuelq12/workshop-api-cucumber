const defaults = require('superagent-defaults');

const agent = defaults();

const { Given, When, Then } = require('cucumber');
const chai = require('chai');
const chaiSubset = require('chai-subset');
const { setAuthorizationHeaders } = require('../../helpers/helpers');

chai.use(chaiSubset);
const { expect } = chai;

const urlBase = 'https://api.github.com';

Given('a Github account like {string}', function (username) {
  this.username = username;
});

When('a request is used to retrieve the users information', async function () {
  setAuthorizationHeaders(agent);
  this.response = await agent.get(`${urlBase}/users/${this.username}`);
});

Then('the response must contain users property {string} {string}', function (propertyName, expectedValue) {
  expect(this.response.body[propertyName]).equal(expectedValue);
});
