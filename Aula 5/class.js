class Class {
    constructor(value) {
        this.key = value;
    }

    function() {
        return this.key;
    }
}

c = new Class('value');

console.log(' - - - Class - - - ');
console.log(c.key);
console.log(c.function());
console.log(c instanceof Class);
console.log(c instanceof Object);

class ClassExtends extends Class {
    constructor(valueExtends, value) {
        super(valueExtends);
        this.keyExends = value;
    }

    accessSuper(key, fn) {
        return this[key];
    }
}

ce = new ClassExtends('value', 'value extends');

console.log(' - - - Class Extends - - - ');
console.log(ce.key);
console.log(ce.keyExends);
console.log(ce.function());
console.log(ce.accessSuper("key"));
console.log(ce.accessSuper("function"));
console.log(ce instanceof Class);
console.log(ce instanceof ClassExtends);
console.log(ce instanceof Object);
