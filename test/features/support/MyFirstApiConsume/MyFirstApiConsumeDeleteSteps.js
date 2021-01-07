const agent = require('superagent');
const { Given, When } = require('cucumber');

Given('a training REST API url {string}', function (trainingUrl) {
  this.url = trainingUrl;
});

When('the user consumes a DELETE Service with query parameters', async function () {
  this.query = {
    name: 'DELETE Query'
  };
  this.response = await agent.delete(`${this.url}/delete`).query(this.query);
});
