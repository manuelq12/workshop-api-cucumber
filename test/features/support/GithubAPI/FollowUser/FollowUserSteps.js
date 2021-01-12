const agent = require('../../../../agent/Agent');
const { When, Then } = require('cucumber');
const chai = require('chai');

const { expect } = chai;

const urlBase = 'https://api.github.com';

When('a request is used to follow the account', async function () {
  this.response = await agent.putRequest(`${urlBase}/user/following/${this.username}`)
});

When('a request is used to verify the account was followed', async function () {
  this.response =  await agent.getRequest(`${urlBase}/user/following`)

  this.body = this.response.body.find((element) => element.login === this.username);
});

Then('the account should be marked as followed', function () {
  expect(this.body.login).to.equal(this.username);
});

When('a request is used to follow the account again so we test the method is idempotent', async function () {
  this.response = await agent.putRequest(`${urlBase}/user/following/${this.username}`)
});
