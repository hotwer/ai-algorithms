"use strict";

$app.controller("rnaController", rnaController);

rnaController.$inject = [];

function rnaController()
{
    var brainArchtecture = new BrainArchitecture(),
        brain = new Brain(2, activationFunction, brainArchtecture, 1);


    function activationFunction() {

    }

    function verificationFunction() {

    }
}
