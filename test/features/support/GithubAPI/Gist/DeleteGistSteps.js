const defaults = require('superagent-defaults');

const agent = defaults();
const { When } = require('cucumber');

const { setAuthorizationHeaders } = require('../../helpers/helpers');

const urlBase = 'https://api.github.com';

When('a request is used to delete a GIST from the account', async function () {
  setAuthorizationHeaders(agent);
  this.response = await agent.get(`${urlBase}/gists`);
  this.url = this.response.body.shift().url;

  this.response = await agent.delete(this.url);
});
