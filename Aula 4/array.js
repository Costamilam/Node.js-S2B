let arrayVazio = [];
console.log(arrayVazio);
console.log(arrayVazio.length);

let arrayPopulado = ['a', 'b', 2, true, null, -3];
console.log(arrayPopulado.length);
for(let i = 0; i < arrayPopulado.length; i++) {
    console.log(arrayPopulado[i]);
}
arrayPopulado.length = 10;
for(let elemento of arrayPopulado) {
    console.log(elemento);
}

let indice = arrayPopulado.findIndex(elemento => elemento >= 2);
console.log(indice);

let valor = arrayPopulado.find(elemento => elemento.search('1'));
console.log(valor);

let _undefined