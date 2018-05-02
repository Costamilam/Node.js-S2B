let json = {
    key: "value",
    subObject: {
        subKey: 7.35
    }
};

console.log(json);
console.log(json.subObject);
console.log(json['subObject']['subKey']);
console.log(JSON.stringify(json));

// ---- MY TRIM() ----
String.prototype.trim = function(oldValue, newValue) {
    regex = new RegExp(`^[${oldValue}]+|[${oldValue}]+$`, 'g');
    return this.replace(regex, newValue);
}

let jsonStringfy = JSON.stringify(json);
let jsonParse = '{\n';
console.log(JSON.parse(jsonStringfy, function(key, value) {
    jsonParse += `    ${key}: ${this[value]},\n`

    return `${jsonParse.trim(',\n', '')}\n}`;
}));

class JSONClass {
    constructor(value) {
        this.key = value;
    }
}

let jc = new JSONClass('value');

console.log(jc);
console.log(jc['key']);
console.log(JSON.stringify(jc, null, 4));

