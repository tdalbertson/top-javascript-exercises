const repeatString = function(word, count) {
	if (count < 0) {
		return 'ERROR';
	}
	let newWord = '';
	for (let i = 1; i <= count; i++) {
		newWord += word;
	}
	return newWord;
};

// Do not edit below this line
module.exports = repeatString;
