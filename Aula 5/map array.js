let array = [1, 0, 1, 2, 3, 3, 3, 4];

console.log(' - - - Map Object - - -')

let frequence = new Map();

for(let element of array) {
    if(frequence.has(element)) {
        frequence.set(element, frequence.get(element) + 1);
    } else {
        frequence.set(element, 1);
    }
}

for(let [key, value] of frequence) {
    console.log(`the value ${key} repeat ${value} times`);
}

console.log(' - - - forEach  - - - ');

let previousElement;

array.sort().forEach(function(element, index) {
    let count = 0;

    array.sort().forEach(function(e, i) {
        if(element == e) {
            count++;
        }
    });

    if(previousElement !== element) {
        previousElement = element;
        console.log(`the value ${element} repeat ${count} times`);
    }
});

console.log(' - - - reduce  - - - ');

array.reduce(function(count, value, index, array, initialValue){
    console.log(count++)
});