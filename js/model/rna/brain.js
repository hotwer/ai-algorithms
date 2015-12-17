"use strict";

/**
 *
 * @param {function} activationFunction
 * @param {boolean||string} controlByVerificationFunction
 * @param {function} verificationFunction
 * @param {BrainArchitecture} brainArchitecture
 * @constructor
 */
function Brain(activationFunction,
               controlByVerificationFunction,
               verificationFunction,
               brainArchitecture) {
    var self = this, layer, numberOfNeurons, numberOfSynapses, neuron;

    self.activationFunction = activationFunction || function () {
            return 0;
        };
    self.verificationFunction = verificationFunction || function () {
            return 0;
        };

    self.numberOfLayers = parseInt(brainArchitecture.getNumberOfLayers()) || 1;
    self.controlByVerificationFunction = _.isString(controlByVerificationFunction) ? controlByVerificationFunction.toLowerCase() === "true" : !!controlByVerificationFunction;
    self.workWithBias = brainArchitecture.isWorkingWithBias();
    self.neuronLayers = [];

    if (_.isNaN(self.pulseDataSize)) {
        self.pulseDataSize = 0;
    }

    if (_.isNaN(self.pulseDataSize)) {
        self.numberOfLayers = 0;
    }

    for (var l = 0; l < self.numberOfLayers; l++) {
        numberOfNeurons = brainArchitecture.getNumberOfNeuronsInLayer(l);
        numberOfSynapses = l === 0 ? 1 : numberOfNeurons * brainArchitecture.getNumberOfNeuronsInLayer(l - 1);

        layer = new NeuronLayer();

        for (var n = 0; n < numberOfNeurons; n++) {
            neuron = new Neuron(self.activationFunction);

            for (var s = 0; s < numberOfSynapses; s++) {
                neuron.addIncomingSynapse(Math.random());
            }

            layer.pushNeuron(neuron);
        }

        self.neuronLayers.push(layer);
    }

}

Brain.prototype.insertData = function (data) {
    var _data;

    if (!_.isArray(data)) {
        throw "Data must be an array of size "
    }

    if (this.workWithBias) {
        data.push(1);
    }

    _data = processData(data);

    return _data;

    function processData(data) {
        var processedData = [];

        for (var i = 0; i < self.neuronLayers.length; i++) {
            data = self.neuronLayers[i].pulseData(data);
            processedData.push({
                layerIndex: i,
                data: data
            });
        }

        return processedData;
    }
};

/**
 *
 * @param {DataFlow} dataFlow
 */
Brain.prototype.train = function (dataFlow) {
    var processedData, dataFlowSize = dataFlow.getLength();

    for (var i = 0; i < dataFlowSize; i++) {

        processedData = this.insertData(dataFlow.getData());

        if (dataFlow.verificateExpected(processedData)) {
            this.propagateReweight(processedData, dataFlow.getExpectedData(), dataFlow.getCalculator());
        }

        dataFlow.next();
    }
};

Brain.prototype.propagateReweight = function (resulted, expeceted, calculator) {

};