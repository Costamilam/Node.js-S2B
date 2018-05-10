// Objeo Map 
let mapa = new Map();
mapa.set('RS', 'Rio Grande do Sul');
mapa.set('PR', 'Paraná');
mapa.set('SC', 'Santa Catarina');

console.log(mapa.get('RS'));
console.log(mapa.get('Rio Grande do Sul'));
console.log(mapa.get('RJ'));
console.log(mapa.has('RS'));

// Objeto Set
let conjunto = new Set();
conjunto.add('a');
conjunto.add('a');
conjunto.add('b');

console.log(conjunto.size);
for(let elemento of conjunto) {
    console.log(elemento);
}

// __proto__ utiliaries 
let utiliaries = {
    set: function(key, value) {
        return this[key] = value;
    },
    size: function() {
        return Object.keys(utiliaries).length;
    },
    toString: function() {
        let str = '{\n';

        for(let elemento of Object.keys(this)) {
            str += `    ${elemento}: ${this[elemento]},\n`
        }

        return `${str.trim(',\n', '')}\n}`;
    }
};

// ---- MY TRIM() ----
String.prototype.trim = function(oldValue, newValue) {
    regex = new RegExp(`^[${oldValue}]+|[${oldValue}]+$`, 'g');
    return this.replace(regex, newValue);
}

//Construtor
function Construtor() {
    this.__proto__ = utiliaries;
    return this;
}

class Classe {
    constructor() {
        this.__proto__ = utiliaries;
        return this;
    }
    set(key, value) {
        this[key] = value;
    }
}

let construtor = new Construtor();
construtor.set('nome', 'Guilherme');
construtor.set('aniversario', new Date('2000-09-21'));
console.log(construtor.toString());
console.log(construtor.size());
console.log(construtor.__proto__);

let classe = new Classe();
classe.set('nome', 'Guilherme');
classe.set('aniversario', new Date('2000-09-21'));
console.log(classe.toString());
console.log(classe.size());
console.log(classe.__proto__);

