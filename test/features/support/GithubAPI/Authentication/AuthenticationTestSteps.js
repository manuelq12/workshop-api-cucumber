const agent = require('superagent');
const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

const urlBase = 'https://api.github.com';
const githubUserName = 'manuelq12';
const repository = 'workshop-api-cucumber';

Given('a Github username', () => {
});

Given('the repository of the Github user', () => {
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
  expect(this.response.body.description).equal('This is a Workshop about Api Testing in JavaScript with Cucumber');
});
