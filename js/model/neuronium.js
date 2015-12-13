"use strict";

function Neuronium(synapse, pulseDataSize, activationFunction) {
    var self = this;

    self.incomingSynapse = synapse;
    self.pulseDataSize = pulseDataSize;
    self.activationFunction = activationFunction;


    //soma das saidas de todas das sinapses de entrada
    function pulseDataOperation(pulseDataOperationResult, pulseData) {
        return pulseDataOperationResult + pulseData;
    }
}

Neuronium.prototype.changeSynapseWeight = function (synapseWeight) {
    synapseWeight = parseFloat(synapseWeight);

    if (_.isNaN(synapseWeight)) {
        synapseWeight = 0000.1;
    }

    this.incomingSynapse.setWeight(synapseWeight)
};

Neuronium.prototype.insertPulse = function (pulseData) {
    var pulseDataOperationResult = 0;

    if (!_.isArray(pulseData)) {
        throw "Pulse data must be an array of size " + this.pulseDataSize;
    }

    for (var i = 0; i < this.pulseDataSize; i++) {
        if (_.isUndefined(pulseData[i])) {
            throw "Pulse data must be an array of size " + this.pulseDataSize;
        }

        pulseDataOperationResult = pulseDataOperation(pulseDataOperationResult, this.incomingSynapse.transmitPulse(pulseData[i]));
    }

    return this.activationFunction(pulseDataOperationResult);
};