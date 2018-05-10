const {trim} = require('./export.js');

console.log(trim.toString());

String.prototype.trim = trim

console.log("....abc.".trim("."));

let a = new Object();
a.a = 'a';
a.b = 0;
a.c = {
    d: null, 
    e: undefined
};

console.log(a.toString());