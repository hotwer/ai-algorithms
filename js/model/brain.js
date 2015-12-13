"use strict";

function Brain(pulseDataSize, activationFunction, verificationFunction, workWithBias) {
    var self = this, neuroniuns = [];

    self.activationFunction = activationFunction;
    self.verificationFunction = verificationFunction;
    self.pulseDataSize = parseInt(pulseDataSize);
    self.workWithBias = workWithBias;


    if (_.isNaN(self.pulseDataSize)) {
        self.pulseDataSize = 0;
    }

    if (self.workWithBias) {

    }

    for (var i = 0; i < pulseDataSize; i++) {
        neuroniuns.push(
            new Neuronium(
                new Synapse(Math.random()),
                this.pulseDataSize,
                this.activationFunction
            )
        );
    }

}

Brain.prototype.processData = function (data) {
    if (!_.isArray(data) || data.length !== pulseDataSize) {
        throw "Data must be an array of size " + this.pulseDataSize;
    }


};