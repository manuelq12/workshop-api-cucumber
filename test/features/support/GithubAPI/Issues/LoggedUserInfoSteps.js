const defaults = require('superagent-defaults');

const agent = defaults();
const { When, Then } = require('cucumber');
const chai = require('chai');
const { setAuthorizationHeaders } = require('../../helpers/helpers');

const { expect } = chai;

const urlBase = 'https://api.github.com';

When('a request is used to retrieve the account information', async function () {
  setAuthorizationHeaders(agent);
  this.response = await agent.get(`${urlBase}/user`);
});

Then('at least one public repository is expected', function () {
  expect(this.response.body.public_repos).to.be.at.least(1);
});

When('a request is used to retrieve the accounts public repository information', async function () {
  this.response = await agent.get(this.response.body.repos_url);

  this.body = this.response.body.shift();
});

Then('the repository must exist', function () {
  expect(this.body.full_name).to.not.equal('undefined');
  expect(this.body.owner.login).equal(this.username);
});
