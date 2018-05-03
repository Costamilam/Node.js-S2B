// __proto__ utiliaries
Object.prototype.get = function(key) {
    return this[key];
}
Object.prototype.set = function(key, value) {
    return this[key] = value;
}
Object.prototype.size = function() {
    return Object.keys(utiliaries).length;
}
Object.prototype.toString = function() {
    let str = '{\n';

    for(let elemento of Object.keys(this)) {
        str += `    ${elemento}: ${this[elemento]},\n`
    }

    return `${str.trim(',\n', '')}\n}`;
}

// ---- MY TRIM() ----
exports.trim = function(oldValue = " ", newValue = "") {
    regex = new RegExp(`^[${oldValue}]+|[${oldValue}]+$`, 'g');
    return this.replace(regex, newValue);
}