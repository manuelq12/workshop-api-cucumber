const agent = require('superagent');
const { expect } = require('chai');
const { Given, When, Then } = require('cucumber');

Given("a REST API url", function() {
    this.url = 'https://httpbin.org';
});

When("the user consumes a DELETE Service with query parameters", async function() {
    this.query = {
        name: 'DELETE Query'
    };
    this.response = await agent.delete(`${this.url}/delete`).query(this.query);
});

Then("the response must contain the DELETE query name", function() {
    expect(this.response.body.args.name).to.eql(this.query.name);
});
