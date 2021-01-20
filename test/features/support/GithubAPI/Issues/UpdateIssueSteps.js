const defaults = require('superagent-defaults');

const agent = defaults();
const { When, Then } = require('cucumber');
const chai = require('chai');
const { setAuthorizationHeaders } = require('../../helpers/helpers');

const { expect } = chai;

const urlBase = 'https://api.github.com';

const updateQuery = { body: 'API Created Issue new body' };

When('a request is used to update the issue {int} in the accounts repository', async function (issueNumber) {
  setAuthorizationHeaders(agent);
  this.response = await agent.patch(`${urlBase}/repos/${this.username}/${this.repositoryName}/issues/${issueNumber}`).send(updateQuery);
});

Then('the issue should have been updated', function () {
  expect(this.response.body.body).to.equal(updateQuery.body);
});
