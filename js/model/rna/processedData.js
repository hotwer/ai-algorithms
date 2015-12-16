"use strict";

function ProcessedData(data) {
    this.data = data;
}

ProcessedData.prototype.getData = function() {
    return this.data;
};

ProcessedData.prototype.setData = function(data) {
    this.data = data;
    return this;
};

