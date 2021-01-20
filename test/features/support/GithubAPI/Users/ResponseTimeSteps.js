const defaults = require('superagent-defaults');

const agent = defaults();
const responseTime = require('superagent-response-time');
const { When, Then } = require('cucumber');
const { expect } = require('chai');

const { setAuthorizationHeaders } = require('../../helpers/helpers');

const urlBase = 'https://api.github.com';
let respTime;

When('a request is used to retrieve all users in Github', async function () {
  setAuthorizationHeaders(agent);
  this.response = await agent.get(`${urlBase}/users`)
    .use(responseTime((callback, time) => {
      respTime = time;
    }));
});

Then('the delay of the response must be below 5000ms', () => {
  expect(respTime).to.be.below(5000);
});
