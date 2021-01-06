const agent = require('superagent');
const { Given, When } = require('cucumber');

Given('a training REST API url {string}', function (training_url) {
    this.url = training_url;
});

When('the user consumes a DELETE Service with query parameters', async function () {
    this.query = {
        name: 'DELETE Query'
    };
    this.response = await agent.delete(`${this.url}/delete`).query(this.query);
});
