"use strict";

/**
 *
 * @param {function} activationFunction
 * @param {boolean||string} controlByVerificationFunction
 * @param {function} verificationFunction
 * @param {BrainArchitecture} brainArchitecture
 * @param {boolean||string} workWithBias
 * @constructor
 */
function Brain(activationFunction,
               controlByVerificationFunction,
               verificationFunction,
               brainArchitecture,
               workWithBias,) {
    var self = this, layer, numberOfNeurons;

    self.activationFunction = activationFunction || function () {
            return 0;
        };
    self.verificationFunction = verificationFunction || function () {
            return 0;
        };
    self.numberOfLayers = parseInt(brainArchitecture.getNumberOfLayers()) || 1;
    self.controlByVerificationFunction = _.isString(controlByVerificationFunction) ? controlByVerificationFunction.toLowerCase() === "true" : !!controlByVerificationFunction;
    self.workWithBias = _.isString(workWithBias) ? workWithBias.toLowerCase() === "true" : !!workWithBias;
    self.neuronLayers = [];

    if (_.isNaN(self.pulseDataSize)) {
        self.pulseDataSize = 0;
    }

    if (_.isNaN(self.pulseDataSize)) {
        self.numberOfLayers = 0;
    }

    if (self.workWithBias) {
        ++pulseDataSize;
    }

    for (var l = 0; l < self.numberOfLayers; l++) {
        numberOfNeurons = brainArchitecture.getNumberOfNeuronsInLayer(l);

        layer = new NeuronLayer();

        for (var n = 0; n < numberOfNeurons; n++) {
            layer.pushNeuron(
                new Neuron(
                    new Synapse(Math.random()),
                    self.pulseDataSize,
                    self.activationFunction
                )
            );
        }

        self.neuronLayers.push(layer);
    }

}

Brain.prototype.insertData = function (data) {
    var _data;

    if (!_.isArray(data) || data.length !== this.pulseDataSize) {
        throw "Data must be an array of size " + this.pulseDataSize;
    }

    _data = processData(data);

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