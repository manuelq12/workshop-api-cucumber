const defaults = require('superagent-defaults');

const agent = defaults();
const { When, Then } = require('cucumber');
const chai = require('chai');
const chaiSubset = require('chai-subset');

chai.use(chaiSubset);
const { expect } = chai;
const { setAuthorizationHeaders } = require('../../helpers/helpers');

const urlBase = 'https://api.github.com';
const newGist = {
  files: {
    'promiseExample.js': {
      content: `
    function promiseExample() {
      return new Promise((resolve, reject) => {
        setTimeout(function(){
          resolve("¡Éxito!");
        }, 250);
    `
    }
  },
  public: true,
  description: 'This code contains an example of a promise'
};

When('a request is used to place a GIST in the account', async function () {
  setAuthorizationHeaders(agent);
  this.response = await agent.post(`${urlBase}/gists`).send(newGist);
  this.url = this.response.body.url;
});

Then('the response info must contain a subset with the Gists description, state and content', function () {
  expect(this.response.body).to.containSubset(newGist);
});

When('a request is used to retrieve the Gist in the account', async function () {
  try {
    this.response = await agent.get(this.url);
  } catch (response) {
    this.response = response;
  }
});

Then('the response must contain gist property {string}', function (propertyName) {
  expect(this.response.body[propertyName]).equal(newGist[propertyName]);
});
