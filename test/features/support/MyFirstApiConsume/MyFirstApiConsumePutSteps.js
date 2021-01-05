const agent = require('superagent');
const { expect } = require('chai');
const {When, Then } = require('cucumber');

When("the user consumes a PUT Service with query parameters", async function() {
    this.query = {
        name: 'PUT Query'
    };

    this.response = await agent.put(`${this.url}/put`).query(this.query);
});

Then("the response must contain the PUT query name", function() {
    expect(this.response.body.args.name).to.eql(this.query.name);
});
