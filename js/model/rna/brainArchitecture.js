"use strict";

function BrainArchitecture() {
    var self = this;

    self.layersConfiguration = [];
    self.workWithBias = false;
    self.pulseDataOperation = function () { return 0 };
    self.startPulseDataResult = function () { return 0 };
    self.handlerPulseDataResult = function () { return null };
}

BrainArchitecture.prototype.insertLayer = function (numberOfNeurons) {
    this.layersConfiguration.push({
        numberOfNeurons: numberOfNeurons
    });
    return this;
};

BrainArchitecture.prototype.defineLastLayer = function (numberOfNeurons) {
    this.layersConfiguration[this.getNumberOfLayers() - 1] = {
        numberOfNeurons: numberOfNeurons
    };
    return this;
};

BrainArchitecture.prototype.getNumberOfNeuronsInLayer = function (layerIndex) {
    return this.layersConfiguration[layerIndex].numberOfNeurons;
};

BrainArchitecture.prototype.getNumberOfLayers = function () {
    return this.layersConfiguration.length;
};

BrainArchitecture.prototype.setWorkWithBias = function () {
    this.workWithBias = true;
    return this;
};

BrainArchitecture.prototype.unsetWorkWithBias = function () {
    this.workWithBias = false;
    return this;
};

BrainArchitecture.prototype.isWorkingWithBias = function () {
    return this.workWithBias;
};

BrainArchitecture.prototype.setPulseDataOperation = function (handler) {
    return this;
};

BrainArchitecture.prototype.setHanlderPulseDataResult = function (handler) {
    return this;
};

BrainArchitecture.prototype.setHanlderPulseDataResult = function (handler) {
    return this;
};

