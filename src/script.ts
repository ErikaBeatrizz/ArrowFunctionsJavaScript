import PromptSync = require('prompt-sync');
const prompt = PromptSync();



const calculoimc = (peso: number, altura: number) => { return peso / (altura * altura)}


console.log('Digite seu peso: ')
const peso = Number(prompt(`> `));

console.log(`Qual é a sua altura: `)
const altura = Number(prompt(`> `));

const resultado = calculoimc(peso, altura)
console.table(`Seu IMC é ${resultado}`)