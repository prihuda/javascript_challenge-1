const csv = `NAME, CATEGORY, PRICE
Xiaomi Redmi 5A, Smartphone, 1199000
Macbook Air, Laptop, 13775000
Samsung Galaxy J7, Smartphone, 3549000
DELL XPS 13, Laptop, 26799000
Xiaomi Mi 6, Smartphone, 5399000
LG V30 Plus, Smartphone, 10499000`;

let table = csv.split("\n")
			   .map(                
				l => l.split(", ")
			   );

function compare(a, b) {
	const priceA = parseInt(a[2]);
	const priceB = parseInt(b[2]);
	
	let comparison = 0;
	if (priceA > priceB) {
	comparison = 1;
	} else if (priceA < priceB) {
	comparison = -1;
	}
	return comparison;
}
table.sort(compare);

let arr = [];
for (let i = 1; i < table.length; i++) {
	let obj = new Object();
	obj[table[0][0].toLowerCase()] = table[i][0];
	obj[table[0][2].toLowerCase()] = "Rp" + table[i][2];
	obj[table[0][1].toLowerCase()] = table[i][1];
	arr.push(obj);
}

console.log(arr);