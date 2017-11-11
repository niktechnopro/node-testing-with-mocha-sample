//test case - some function that runs some code
// it - function provided by mocha
const utils = require('./utils');

it('should add two numbers', () => { //behaviour driven development - BDD
	var res = utils.add(23, 21);

	if (res != 44){
		throw new Error(`Expected 44, but came back ${res}`);
	}
});


it('should square the number', () => {
	var res = utils.square(3);

	if (res != 9){
		throw new Error(`Expected 9, but came back ${res}`)
	}

});