"use strict";

function NeuronLayer() {
    var self = this;

    self.neurons = [];
    self.firstLayer = false;
}

NeuronLayer.prototype.getNeuron = function (index) {
    return this.neurons[index];
};

NeuronLayer.prototype.pushNeuron = function (neuronium) {
    this.neurons.push(neuronium);
    return this;
};

NeuronLayer.prototype.setAsFirstLayer = function () {
    this.firstLayer = true;
    return this;
};

NeuronLayer.prototype.unsetAsFirstLayer = function () {
    this.firstLayer = false;
    return this;
};

NeuronLayer.prototype.isFirstLayer = function () {
    return this.firstLayer;
};

NeuronLayer.prototype.pulseData = function (data) {
    var processedData = [], i;

    if (this.isFirstLayer()) {

        for (i = 0; i < this.neurons.length; i++) {
            processedData.push(new ProcessedData(this.neurons[i].insertPulse([data[i]])));
        }

    } else {

        for (i = 0; i < this.neurons.length; i++) {
            processedData.push(new ProcessedData(this.neurons[i].insertPulse(data)));
        }

    }

    return processedData;
};

