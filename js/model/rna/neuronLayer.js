"use strict";

function NeuronLayer(numberOfNeurons) {
    var self = this;

    self.neurons = [];

}

NeuronLayer.prototype.getNeuron = function (index) {
    return self.neurons[index];
};

NeuronLayer.prototype.pushNeuron = function (neuronium) {
    self.neurons.push(neuronium);
};

NeuronLayer.prototype.pulseData = function (data) {
    var processedData = [];

    for (var i = 0; i < self.neurons.length; i++) {
        processedData.push({
            neuronIndex: i,
            data: this.neurons[i].insertPulse(data)
        });
    }

    return processedData;
};

