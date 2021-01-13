const defaults = require('superagent-defaults');

const agent = defaults();

const { Given, When, Then } = require('cucumber');
const chai = require('chai');
const chaiSubset = require('chai-subset');
const md5 = require('md5');
const { setAuthorizationHeaders } = require('../../helpers/helpers');

chai.use(chaiSubset);
const { expect } = chai;

const urlBase = 'https://api.github.com';
const enumValues = {
  fileSha: 'b9900ca9b34077fe6a8f2aaa37a173824fa9751d',
  md5ReadMe: '0e62b07144b4fa997eedb864ff93e26b',
  content_type: 'application/zip'
};
let md5FileResponse;

Given('the account information response', async function () {
  setAuthorizationHeaders(agent);

  this.previous_response = await agent.get(`${urlBase}/users/${this.username}`);
});

When('a request is used to retrieve a users repository information like {string}', async function (repository) {
  this.response = await agent.get(this.previous_response.body.repos_url);

  this.body = this.response.body.find((element) => element.name === repository);
});

Then('the response must contain repository property {string} {string}', function (propertyName, expectedValue) {
  switch (propertyName) {
    case 'full-name':
      expect(this.body.full_name).equal(expectedValue);
      break;
    case 'status':
      expect(String(this.body.private)).equal(expectedValue);
      break;
    case 'description':
      expect(this.body.description).equal(expectedValue);
      break;
    default:
      break;
  }
});

When('a request is used to download {string} repository', async function (repository) {
  this.response = await agent.get(`${urlBase}/repos/${this.username}/${repository}/zipball`);
});

Then('the response content-type must be a zip', function () {
  expect(this.response.header['content-type']).to.equal(enumValues.content_type);
});

When('a request is used to retrieve {string} repository README.md info', async function (repository) {
  this.response = await agent.get(`${urlBase}/repos/${this.username}/${repository}/contents`);

  this.body = this.response.body.find((element) => element.name === 'README.md');
});

Then('the README.md info must contain a subset with its path and SHA', function () {
  expect(this.body).to.containSubset({
    path: 'README.md',
    sha: enumValues.fileSha
  });
});

When('a request is used to download repository README.md', async function () {
  this.response = await agent.get(this.body.download_url);
});

When('the README.md is calculated', function () {
  md5FileResponse = md5(this.response.text);
});

Then('the README.md MD5 calculated and the one we previously had must be equal', () => {
  expect(md5FileResponse).to.equal(enumValues.md5ReadMe);
});
