"use strict";

function BrainArchitecture() {
    var self = this;

    self.layersConfiguration = [];
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

