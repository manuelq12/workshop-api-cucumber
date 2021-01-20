const defaults = require('superagent-defaults');

const agent = defaults();
const { Given, When, Then } = require('cucumber');
const chai = require('chai');
const { setAuthorizationHeaders } = require('../../helpers/helpers');

const { expect } = chai;

const urlBase = 'https://api.github.com';
const query = { title: 'API Created Issue' };

Given('a public repository of the account {string}', function (repository) {
  setAuthorizationHeaders(agent);
  this.repositoryName = repository;
});

When('a request is used to create an issue in the accounts repository', async function () {
  this.response = await agent.post(`${urlBase}/repos/${this.username}/${this.repositoryName}/issues`).send(query);
});

Then('the issue should have been created', function () {
  /* eslint-disable no-unused-expressions */
  expect(this.response.body.id).to.not.be.undefined;
  expect(this.response.body.title).to.equal(query.title);
  expect(this.response.body.body).to.equal(null);
});
