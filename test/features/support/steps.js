const { expect } = require('chai');
const { Given, When, Then } = require("cucumber");

const array = [1,2,3];
let result = 0;

Given("an Array with items", function() {
});
When("the value is not present", function() {
    result = [1,2,3].indexOf(4);
});
Then("the result should be {int}", function(arg1) {
    expect(result).to.eql(arg1);
});
