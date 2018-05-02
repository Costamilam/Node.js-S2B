let array = [1, 1, 2, 3, 3, 3, 4];
let frequence = new Map();

for(let element of array) {
    if(frequence.has(element)) {
        frequence.set(element, frequence.get(element) + 1);
    } else {
        frequence.set(element, 1);
    }
}

for(let [key, value] of frequence) {
    console.log(`${key}: ${value}`);
}