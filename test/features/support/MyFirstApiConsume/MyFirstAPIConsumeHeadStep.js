const agent = require('superagent');
const { When } = require('cucumber');

When('the user consumes a HEAD Service', async function () {
  this.response = await agent.head(`${this.url}/headers`);
});
