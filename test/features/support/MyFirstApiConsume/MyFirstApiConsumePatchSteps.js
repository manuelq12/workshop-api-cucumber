const agent = require('superagent');
const { When } = require('cucumber');

When('the user consumes a PATCH Service with query parameters', async function () {
  this.query = {
    name: 'PATCH Query'
  };
  this.response = await agent.patch(`${this.url}/patch`).query(this.query);
});
