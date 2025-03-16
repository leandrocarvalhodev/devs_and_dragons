/* const personagemPedrinho = {
    nome: 'Pedrinho',
    vida: 7,
    mana: 12,
    level: 5,
    tipo: 'Mago',
}

import { Personagem } from "./modules/personagem.js"

const personagemJose = {
    nome: 'Jose',
    vida: 7,
    mana: 6,
    level: 3,
    tipo: 'Arqueiro',
}*/

import { Personagem } from "./modules/personagem.js"

//Instância da classe Personagem:

const personagemPedrinho = new Personagem()
    personagemPedrinho.nome = 'Pedrinho'
    personagemPedrinho.mana = 12
    personagemPedrinho.vida = 7
    personagemPedrinho.static tipo =   'Mago'
    personagemPedrinho.level = 5

const personagemJose = new Personagem()
    personagemJose.nome = 'Jose'
    personagemJose.mana = 12
    personagemJose.vida = 7
    personagemJose.static tipo =   'Arqueiro'
    personagemJose.level = 3



console.log('Insignia de ' + personagemPedrinho.nome + ': ' + personagemPedrinho.obterInsignia())
console.log('Insignia de ' + personagemJose.nome + ': ' + personagemJose.obterInsignia())