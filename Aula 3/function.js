function teste1() {
	return console.log('teste 1');
};

(function() {
	return console.log('teste 2');
})();

const teste3 = (var1, var2) => console.log(var1 ** var2);

(function(var1) {
	return (var2) => console.log(var1 ** var2);
})(3)(3);

teste1();
teste3(5, 3);