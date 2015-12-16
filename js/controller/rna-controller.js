/*globals $app, Brain, BrainArchitecture*/

"use strict";

$app.controller("rnaController", rnaController);

rnaController.$inject = [];

function rnaController()
{
    var brainArchtecture = new BrainArchitecture(),
        brain = new Brain(activationFunction, verificationFunction, brainArchtecture);

    function activationFunction() {

    }

    function verificationFunction() {

    }
}
