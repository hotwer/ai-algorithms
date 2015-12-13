"use strict";

$app.config(configuration);

configuration.$inject = ["$stateProvider", "$urlRouterProvider"];

function configuration($stateProvider, $urlRouterProvider)
{
    $urlRouterProvider.otherwise("/main");

    $stateProvider
        .state("main", {
            url: "/main",
            templateUrl: "main.html",
            controller: "mainController as main"
        })
        .state("data-mining", {
            url: "/data-mining",
            templateUrl: "data-mining.html",
            controller: "dataMiningController as viewModel"
        })
        .state("genetic-algorithms", {
            url: "/genetic-algorithms",
            templateUrl: "genetic-algorithms.html",
            controller: "geneticAlgorithmsController as viewModel"
        })
        .state("rna", {
            url: "/rna",
            templateUrl: "rna.html",
            controller: "rnaController as viewModel"
        });
}