const { expect } = require('chai');
const { Given, When, Then } = require("cucumber");

let array;
let result;

Given("an Array with items", function() {
    array = [1,2,3]
});
When("the value is not present", function() {
    result = [1,2,3].indexOf(4);
});
Then("the result should be {int}", function(expected_result) {
    expect(result).to.eql(expected_result);
});
