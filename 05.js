function isPrime(number) {
    let start = 2;
    const limit = Math.sqrt(number);
    while (start <= limit) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}

for (let i = 0; i <= 1000; i++) {
	let text = '';
	if (i % 2 == 0)
		text += i + ": [even";
	else text += i + ": [odd";
	if (i % 5 == 0)
		text +=  ", multiplies by 5";
	if (isPrime(i)) {
		if (i < 100)
			text +=  ", prime less than 100";
		else text +=  ", prime";
	}
	if(i==0){
		continue;
	}
	text += "]";
	console.log(text);
}