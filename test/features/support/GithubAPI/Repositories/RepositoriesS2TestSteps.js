const agent = require('superagent');
const { Given, When, Then } = require('cucumber');
const chai = require('chai');
const chaiSubset = require('chai-subset');
const md5 = require('md5');

chai.use(chaiSubset);
const { expect } = chai;

const urlBase = 'https://api.github.com';
const fileSha = 'b9900ca9b34077fe6a8f2aaa37a173824fa9751d';
const md5ReadMe = '0e62b07144b4fa997eedb864ff93e26b';
let md5FileResponse;

Given('the account information response', async function () {
  this.previous_response = await agent.get(`${urlBase}/users/${this.username}`)
    .auth('token', process.env.ACCESS_TOKEN)
    .set('User-Agent', 'agent');
});

When('a request is used to retrieve a users repository information like {string}', async function (repository) {
  this.response = await agent.get(this.previous_response.body.repos_url)
    .auth('token', process.env.ACCESS_TOKEN)
    .set('User-Agent', 'agent');

  this.body = this.response.body.find((element) => element.name === repository);
});

Then('the response must contain the repository full-name {string}', function (fullName) {
  expect(this.body.full_name).equal(fullName);
});

Then('the response also must contain the repository status {word}', function (status) {
  expect(String(this.body.private)).equal(status);
});

Then('the response also must contain the repository description {string}', function (description) {
  expect(this.body.description).equal(description);
});

When('a request is used to download {string} repository', async function (repository) {
  this.response = await agent.get(`${urlBase}/repos/${this.username}/${repository}/zipball`)
    .auth('token', process.env.ACCESS_TOKEN)
    .set('User-Agent', 'agent');
});

Then('the response content-type must be a zip', function () {
  expect(this.response.header['content-type']).to.equal('application/zip');
});

When('a request is used to retrieve {string} repository README.md info', async function (repository) {
  this.response = await agent.get(`${urlBase}/repos/${this.username}/${repository}/contents`)
    .auth('token', process.env.ACCESS_TOKEN)
    .set('User-Agent', 'agent');

  this.body = this.response.body.find((element) => element.name === 'README.md');
});

Then('the README.md info must contain a subset with its path and SHA', function () {
  expect(this.body).to.containSubset({
    path: 'README.md',
    sha: fileSha
  });
});

When('a request is used to download repository README.md', async function () {
  this.response = await agent.get(this.body.download_url)
    .auth('token', process.env.ACCESS_TOKEN)
    .set('User-Agent', 'agent');
});

When('the README.md is calculated', function () {
  md5FileResponse = md5(this.response.text);
});

Then('the README.md MD5 calculated and the one we previously had must be equal', () => {
  expect(md5FileResponse).to.equal(md5ReadMe);
});
