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

//Objeos
let objeto = {
    key: 'value',
    set: function(name, value) {
        return this[name] = value;
    },
    size: function() {
        return Object.keys(objeto).length;
    },
    toString: function() {
        let str = '{\n';

        for(let elemento of Object.keys(objeto)) {
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

objeto.set('chave', 'valor')
console.log(objeto.size());
console.log(objeto.toString());

