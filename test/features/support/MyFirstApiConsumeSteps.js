const agent = require('superagent');
const statusCode = require('http-status-codes');
const { expect } = require('chai');
const { Given, When, Then } = require("cucumber");

let apiURL;
let response_scenario_1;
let response_scenario_2;
let response_scenario_3;
let response_scenario_4;
let response_scenario_5;
const query = {
    name: 'John',
    age: '31',
    city: 'New York'
  };

const query_2 = {
    name: 'The Query'
};

Given("a REST API url", function() {
    apiURL = 'https://httpbin.org';
});
When("we consume a GET Service", async function() {
    response_scenario_1 = await agent.get(`${apiURL}/ip`);
});

Then("the response should contain a OK status and a property {string}", function(property) {
    expect(response_scenario_1.status).to.equal(statusCode.OK);
    expect(response_scenario_1.body).to.have.property(property);
});

When("we consume a GET Service with query parameters", async function() {
    response_scenario_2 = await agent.get(`${apiURL}/get`).query(query);
});

Then("the response should contain a OK status and the query values", function() {
    expect(response_scenario_2.status).to.equal(statusCode.OK);
    expect(response_scenario_2.body.args).to.eql(query);
});

Then("the response should contain a OK status and the its header the server value", function() {
    expect(response_scenario_2.status).to.equal(statusCode.OK);
    expect(response_scenario_2.header.server).to.eql('gunicorn/19.9.0');
});

When("we consume a PATCH Service with query parameters", async function() {
    response_scenario_3 = await agent.patch(`${apiURL}/patch`).query(query_2);
});

Then("the PATCH response should contain a OK status and the query name", function() {
    expect(response_scenario_3.status).to.equal(statusCode.OK);
    expect(response_scenario_3.body.args.name).to.eql(query_2.name);
});

When("we consume a PUT Service with query parameters", async function() {
    response_scenario_4 = await agent.put(`${apiURL}/put`).query(query_2);
});

Then("the PUT response should contain a OK status and the query name", function() {
    expect(response_scenario_4.status).to.equal(statusCode.OK);
    expect(response_scenario_4.body.args.name).to.eql(query_2.name);
});

When("we consume a DELETE Service with query parameters", async function() {
    response_scenario_5 = await agent.delete(`${apiURL}/delete`).query(query_2);
});

Then("the DELETE response should contain a OK status and the query name", function() {
    expect(response_scenario_5.status).to.equal(statusCode.OK);
    expect(response_scenario_5.body.args.name).to.eql(query_2.name);
});