"use strict";

$app.controller("rnaController", rnaController);

rnaController.$inject = [];

function rnaController()
{
    var brain = new Brain(2, activationFunction, verificationFunction, brainArchtecture, 1);

    function activationFunction() {

    }

    function verificationFunction() {

    }
}
