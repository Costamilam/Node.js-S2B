let json = '{"variable1": "value", "variable2": null, "variable3"= 7.35}';

try {
    console.log(JSON.parse(json));
} catch(exceptionError) {
    console.log(`Exception\n    ${exceptionError}`);
} finally {
    console.log('Finish exceptions');
}

console.log('Exceptions not show in console');