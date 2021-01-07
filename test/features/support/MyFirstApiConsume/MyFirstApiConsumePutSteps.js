const agent = require('superagent');
const { When } = require('cucumber');

When('the user consumes a PUT Service with query parameters', async function () {
  this.query = {
    name: 'PUT Query'
  };

  this.response = await agent.put(`${this.url}/put`).query(this.query);
});
