"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var calculoimc = function (peso, altura) { return peso / (altura * altura); };
console.log('Digite seu peso: ');
var peso = Number(prompt(">"));
console.log("Qual \u00E9 a sua altura: ");
var altura = Number(prompt("> "));
var resultado = calculoimc(peso, altura);
console.table("Seu IMC \u00E9 ".concat(resultado));
