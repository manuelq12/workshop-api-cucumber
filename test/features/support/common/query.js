const { expect } = require('chai');
const { Then } = require("cucumber");

Then('the response must contain the query name', function () {
    expect(this.response.body.args.name).to.eql(this.query.name);
});
