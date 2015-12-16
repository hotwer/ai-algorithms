"use strict";

function Neuron(activationFunction) {
    var self = this;

    self.incomingSynapses = [];
    self.pulseDataSize = pulseDataSize;
    self.activationFunction = activationFunction;


    //soma das saidas de todas das sinapses de entrada
    function pulseDataOperation(pulseDataOperationResult, pulseData) {
        return pulseDataOperationResult + pulseData;
    }
}

Neuron.prototype.insertSynapse = function (synapseWeight) {
    this.incomingSynapses = new Synapse(synapseWeight);
    return this;
};

Neuron.prototype.changeSynapseWeight = function (synapseIndex, synapseWeight) {
    synapseWeight = parseFloat(synapseWeight);

    if (_.isNaN(synapseWeight)) {
        synapseWeight = 0000.1;
    }

    this.incomingSynapses.setWeight(synapseWeight)
    return this;
};

Neuron.prototype.insertPulse = function (pulseData) {
    var pulseDataOperationResult = 0;

    if (!_.isArray(pulseData)) {
        throw "Pulse data must be an array of size ";
    }

    for (var i = 0; i < this.pulseDataSize; i++) {
        if (_.isUndefined(pulseData[i])) {
            throw "Pulse data must be an array of size " + this.pulseDataSize;
        }

        pulseDataOperationResult = pulseDataOperation(pulseDataOperationResult, this.incomingSynapses.transmitPulse(pulseData[i]));
    }

    return this.activationFunction(pulseDataOperationResult);
};