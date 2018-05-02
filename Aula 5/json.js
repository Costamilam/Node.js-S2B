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

let jsonStringfy = JSON.stringify(json);
let jsonParse = '';
console.log(JSON.parse(jsonStringfy, function(key, value) {
    jsonParse += `${key}: ${value}\n`
    return jsonParse;
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
