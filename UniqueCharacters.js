const isUnique = (str) => {
	let newArr = [];
	for (let i = 0; i < str.length; i++) {
		if (newArr.includes(str[i].toLowerCase())) {
			return false;
		} else {
			newArr.join('');
			newArr.push(str[i]);
		}
	}

	return true;
};

console.log(isUnique('bruhhh'));
console.log(isUnique('bruh bruh'));
console.log(isUnique('Moon'));
console.log(isUnique('Mon'));
