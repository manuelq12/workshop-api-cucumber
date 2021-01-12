const agent = require('superagent');
const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

const urlBase = 'https://api.github.com';
let githubUserName;
let repository;
const description = 'This is a Workshop about Api Testing in JavaScript with Cucumber';

Given('a Github username {string}', (username) => {
  githubUserName = username;
});

Given('the repository of the Github user {string}', (repos) => {
  repository = repos;
});

When('the user tries to retrieve its repository with OAuth2 Tokens by Header', async function () {
  this.response = await agent.get(`${urlBase}/repos/${githubUserName}/${repository}`)
    .auth('token', process.env.ACCESS_TOKEN)
    .set('User-Agent', 'agent');
});

When('the user tries to retrieve its repository with OAuth2 Tokens by Parameter', async function () {
  this.response = await agent.get(`${urlBase}/repos/${githubUserName}/${repository}`)
    .query(`access_token=${process.env.ACCESS_TOKEN}`)
    .set('User-Agent', 'agent');
});

Then('the response must contain the repository description', function () {
  expect(this.response.body.description).equal(description);
});
