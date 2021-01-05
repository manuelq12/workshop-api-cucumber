const agent = require('superagent');
const { expect } = require('chai');
const { When, Then } = require('cucumber');


When("the user consumes a GET Service", async function() {
    this.response = await agent.get(`${this.url}/ip`);
});

Then("the response must contain a property {string}", function(property) {
    expect(this.response.body).to.have.property(property);
});

When("the user consumes a GET Service with query parameters", async function() {
    this.query = {
        name: 'John',
        age: '31',
        city: 'New York'
      };

    this.response = await agent.get(`${this.url}/get`).query(this.query);
});

Then("the response must contain the query values", function() {
    expect(this.response.body.args).to.eql(this.query);
});
