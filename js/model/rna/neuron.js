"use strict";

function Neuron(activationFunction, startPulseDataOperationResult, pulseDataOperation, handlePulseDataOperationResult) {
    var self = this;

    self.incomingSynapses = [];
    self.activationFunction = activationFunction;
    self.startPulseDataOperationResult = startPulseDataOperationResult;
    self.pulseDataOperation = pulseDataOperation;
    self.handlePulseDataOperationResult = handlePulseDataOperationResult;


}

Neuron.prototype.addIncomingSynapse = function (synapseWeight) {
    this.incomingSynapses = new Synapse(synapseWeight);
    return this;
};

//Neuron.prototype.getNumberOfIncomingSynapses = function () {
//    return this.incomingSynapses.length;
//};

Neuron.prototype.changeSynapseWeight = function (synapseIndex, synapseWeight) {
    synapseWeight = parseFloat(synapseWeight);

    if (_.isNaN(synapseWeight)) {
        synapseWeight = 0000.1;
    }

    this.incomingSynapses[synapseIndex].setWeight(synapseWeight)
    return this;
};

Neuron.prototype.insertPulse = function (pulseData) {
    var pulseDataOperationResult = this.startPulseDataOperationResult(), response;

    if (!_.isArray(pulseData)) {
        throw "Pulse data must be an array of size " + this.incomingSynapses.length;
    }

    for (var i = 0; i < this.incomingSynapses.length; i++) {
        if (_.isUndefined(pulseData[i])) {
            throw "Pulse data must be an array of size " + this.incomingSynapses.length;
        }

        pulseDataOperationResult = this.pulseDataOperation(pulseDataOperationResult, this.incomingSynapses.transmitPulse(pulseData[i]));
    }

    return this.handlePulseDataOperationResult(pulseDataOperationResult, this);

    function handlePulseDataOperationResult(pulseDataOperationResult, scope) {
        if (scope.verificationFunction(scope.activationFunction(pulseDataOperationResult))) {
            return pulseDataOperationResult;
        } else {
            return null;
        }
    }

    // soma das saidas de todas das sinapses de entrada
    // a ideia é que essa funcionalidade não seja fixa
    // por exemplo, o pulseDataOpenrationpoderia ser um array e a operação seria uma operação em um array
    // ou o ele fosse uma string e a operation fosse uma concatenação específica
    function startPulseDataOperationResult() {
        return 0;
    }

    function pulseDataOperation(pulseDataOperationResult, pulseData) {
        if (_.isNull(pulseData)) {
            pulseData = 0;
        }
        return pulseDataOperationResult + pulseData;
    }
};