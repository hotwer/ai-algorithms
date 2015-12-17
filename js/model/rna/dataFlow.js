"use strict";

function DataFlow() {
    var self = this;

    self.tests = [];
    self.internalPointer = 0;
    self.calculator = function () {};
};

DataFlow.prototype.addDataTest = function (data, expected) {
    this.tests.push({
        data: data,
        expected: expected
    });
    return this;
};

DataFlow.prototype.previous = function () {
    if (this.internalPointer > 0) {
        --this.internalPointer
    }
    return this;
};

DataFlow.prototype.next = function () {
    if ((this.internalPointer + 1) < this.getLength()) {
        ++this.internalPointer;
    }
    return this;
};

DataFlow.prototype.getCalculator = function () {
    return this.calculator;
};

DataFlow.prototype.setCalculator = function (calculatorFunction) {
    this.calculator = calculatorFunction;
    return this;
};

DataFlow.prototype.getLength = function () {
    return this.tests.length;
};

DataFlow.prototype.getExpectedData = function () {
    return this.tests[this.internalPointer].expected;
};

DataFlow.prototype.verificateExpected = function (data) {
    return  data.getData() === this.test.expected[this.internalPointer];
};

