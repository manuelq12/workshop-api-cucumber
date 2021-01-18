const defaults = require('superagent-defaults');

const agent = defaults();
const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const { setAuthorizationHeaders } = require('../../helpers/helpers');

let oldRepository;
let newRepository;

Given('a Github a repository old URL {string}', (oldURL) => {
  setAuthorizationHeaders(agent);
  oldRepository = oldURL;
});

Given('the Github repository new URL {string}', (newURL) => {
  newRepository = newURL;
});

When('a request is used to obtain information of the repository, with the old URL', async function () {
  try {
    await agent.head(oldRepository);
  } catch (response) {
    this.response = response;
  }
});

Then('the response must contain a header with the redirect url', function () {
  expect(this.response.response.headers.location).to.equal(newRepository);
});

When('a request is used to retrieve the repository with the old URL', async function () {
  this.response = await agent.get(oldRepository);
});

Then('the response must contain a redirect to the new URL', function () {
  expect(this.response.redirects).to.include(newRepository);
});
