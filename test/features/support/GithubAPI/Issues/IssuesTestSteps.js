const defaults = require('superagent-defaults');

const agent = defaults();
const { Given, When, Then } = require('cucumber');
const chai = require('chai');
const { setAuthorizationHeaders } = require('../../helpers/helpers');

const { expect } = chai;

const urlBase = 'https://api.github.com';

let githubRepositoryName;

const query = { title: 'API Created Issue' };
const updateQuery = { body: 'API Created Issue new body' };

Given('a public repository of the account {string}', (repository) => {
  setAuthorizationHeaders(agent);
  githubRepositoryName = repository;
});

When('a request is used to create an issue in the accounts repository', async function () {
  this.response = await agent.post(`${urlBase}/repos/${this.username}/${githubRepositoryName}/issues`).send(query);
});

Then('the issue should have been created', function () {
  /* eslint-disable no-unused-expressions */
  expect(this.response.body.id).to.not.be.undefined;
  expect(this.response.body.title).to.equal(query.title);
  expect(this.response.body.body).to.equal(null);
});

When('a request is used to update the issue in the accounts repository', async function () {
  this.response = await agent.patch(`${urlBase}/repos/${this.username}/${githubRepositoryName}/issues/${this.response.body.number}`).send(updateQuery);
});

Then('the issue should have been updated', function () {
  expect(this.response.body.title).to.equal(query.title);
  expect(this.response.body.body).to.equal(updateQuery.body);
});
