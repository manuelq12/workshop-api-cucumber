const agent = require('superagent');
const { expect } = require('chai');
const {Before, Given, When, Then } = require("cucumber");

Before(function () {
    this.query = {
        name: 'DELETE Query'
    };
});

Given("a REST API url", function() {
    this.url = 'https://httpbin.org';
});

When("we consume a DELETE Service with query parameters", async function() {
    this.response = await agent.delete(`${this.url}/delete`).query(this.query);
});

Then("the response must contain the DELETE query name", function() {
    expect(this.response.body.args.name).to.eql(this.query.name);
});
