const defaults = require('superagent-defaults');

const agent = defaults();
const { When, Then } = require('cucumber');

const { expect } = require('chai');

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

When('a request is used to retrieve a Gist in the account', async function () {
  // Before
  setAuthorizationHeaders(agent);
  this.response = await agent.get(`${urlBase}/gists`);
  this.body = this.response.body.shift();
  this.url = this.body.url;

  this.response = await agent.get(this.url);
});

When('a request is used to retrieve a deleted Gist of the account {string}', async function (url) {
  try {
    this.response = await agent.get(url);
  } catch (response) {
    this.response = response;
  }
});

Then('the response must contain gist property {string}', function (propertyName) {
  expect(this.response.body[propertyName]).equal(newGist[propertyName]);
});
