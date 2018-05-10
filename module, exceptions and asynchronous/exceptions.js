let json = '{"variable1": "value", "variable2": null, "variable3"= 7.35}';

try {
    console.log(JSON.parse(json));
} catch(exceptionError) {
    console.log(`Exception\n    ${exceptionError}`);
} finally {
    console.log('Finish exceptions');
}

console.log('Exceptions not show in console');

// ---- MY TRIM ----
String.prototype.trim = function(oldValue, newValue) {
    regex = new RegExp(`^[${oldValue}]+|[${oldValue}]+$`, 'g');
    return this.replace(regex, newValue);
}
// ---- MY TO STRING ERROR ----
Error.prototype.toString = function() {
    let str = '{\n';

    for(let elemento of Object.keys(this)) {
        str += `    ${elemento}: ${this[elemento]},\n`
    }

    return `${str.trim(',\n', '')}\n}`;
}

let syntaxError = new SyntaxError('Message');
try {
    throw syntaxError;
} catch(exceptionError) {
    console.log(syntaxError.toString());
}

let error = new Error('Error');
error.name = 'ErrorName';
error.message = 'Error Message'

throw error;
