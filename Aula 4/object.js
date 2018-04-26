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