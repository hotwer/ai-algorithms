"use strict";

function Synapse(weight) {
    var self = this;

    self.weight = weight;
}

Synapse.prototype.setWeight = function (weight) {
    this.weight = weight;
};

Synapse.prototype.transmitPulse = function (data) {
    data = parseInt(data);

    if (_.isNaN(data)) {
        data = 0;
    }

    return data * this.weight;
};