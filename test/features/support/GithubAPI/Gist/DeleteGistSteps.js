const defaults = require('superagent-defaults');

const agent = defaults();
const { When } = require('cucumber');

const { setAuthorizationHeaders } = require('../../helpers/helpers');

const urlBase = 'https://api.github.com';

When('a request is used to retrieve the first Gist from the account', async function () {
  setAuthorizationHeaders(agent);
  this.response = await agent.get(`${urlBase}/gists`);
  this.url = this.response.body.shift().url;
});

When('a request is used to delete the GIST from the account', async function () {
  this.response = await agent.delete(this.url);
});
