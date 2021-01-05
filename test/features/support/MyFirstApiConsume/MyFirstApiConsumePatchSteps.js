const agent = require('superagent');
const { expect } = require('chai');
const {Before, Given, When, Then } = require("cucumber");

Before(function () {
    this.query = {
        name: 'PATCH Query'
    };
});


When("we consume a PATCH Service with query parameters", async function() {
    this.response = await agent.patch(`${this.url}/patch`).query(this.query);
});

Then("the response must contain the PATCH query name", function() {
    expect(this.response.body.args.name).to.eql(this.query.name);
});
