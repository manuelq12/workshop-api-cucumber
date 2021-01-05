const agent = require('superagent');
const { expect } = require('chai');
const {Before, Given, When, Then } = require("cucumber");

Before(function () {
    this.query = {
        name: 'PUT Query'
    };
});

When("we consume a PUT Service with query parameters", async function() {
    this.response = await agent.put(`${this.url}/put`).query(this.query);
});

Then("the response must contain the PUT query name", function() {
    expect(this.response.body.args.name).to.eql(this.query.name);
});
