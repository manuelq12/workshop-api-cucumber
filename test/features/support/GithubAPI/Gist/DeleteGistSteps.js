const defaults = require('superagent-defaults');

const agent = defaults();
const { When } = require('cucumber');

const { setAuthorizationHeaders } = require('../../helpers/helpers');

When('a request is used to delete the GIST from the account', async function () {
  setAuthorizationHeaders(agent);
  this.response = await agent.delete(this.url);
});
