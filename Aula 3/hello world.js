let hello = 'Hellow World!';
console.clear();
console.time(`${hello}`);
console.group(`3: ${hello}`);
console.log(`4: ${hello}`);
console.info(`5: ${hello}`);
console.groupCollapsed(`6: ${hello}`);
console.trace(`7: ${hello}`)
console.error(`8: ${hello}`);
console.warn(`9: ${hello}`);
console.groupEnd(`10: ${hello}`);
console.groupEnd(`11: ${hello}`);
console.timeEnd(`${hello}`);
console.assert(false, `13: ${hello}`);