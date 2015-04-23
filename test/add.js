/*eslint-env mocha */
"use strict";

var assert = require("assert");
var myModule = require("../src");

describe("add", function() {
  it("should add the two numbers", function() {
    assert.equal(myModule.add(1, 1), 3);
  });
});
