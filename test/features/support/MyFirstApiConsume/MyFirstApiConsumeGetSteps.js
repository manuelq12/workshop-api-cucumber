const agent = require('superagent');
const { expect } = require('chai');
const {Before, Given, When, Then } = require("cucumber");

Before(function () {
    this.query = {
        name: 'John',
        age: '31',
        city: 'New York'
      };
});


When("we consume a GET Service", async function() {
    this.response = await agent.get(`${this.url}/ip`);
});

Then("the response must contain a property {string}", function(property) {
    expect(this.response.body).to.have.property(property);
});

When("we consume a GET Service with query parameters", async function() {
    this.response = await agent.get(`${this.url}/get`).query(this.query);
});

Then("the response must contain the query values", function() {
    expect(this.response.body.args).to.eql(this.query);
});

Then("the response must contain in its header the server value", function() {
    expect(this.response.header.server).to.eql('gunicorn/19.9.0');
});
