const fizzInput = document.getElementById('fizzInput');
const buzzInput = document.getElementById('buzzInput');
const lowerInput = document.getElementById('lowerInput');
const upperInput = document.getElementById('upperInput');


const submitButton = document.getElementById('submitButton');
const randomButton = document.getElementById('randomButton');

const fizzbuzz = (fizz, buzz, num1 = 0, num2 = 100) => {
	let resArray = [];

	for (let i = num1; i <= num2; i++) {
		let result = "";

		if (i % fizz == 0) result += 'fizz';
		if (i % buzz == 0) result += 'buzz';

		if (result == '') result = i.toString();

		resArray.push([i, result]);
	}
	return resArray;
}

const loadTableData = (data) => {
	const tableBody = document.getElementById('tableBody');
	while (tableBody.rows.length > 0) tableBody.deleteRow(0);

	data.forEach(item => {
		let row = tableBody.insertRow();
		let num = row.insertCell(0);
		num.innerHTML = item[0];
		let res = row.insertCell(1);
		res.innerHTML = item[1]
	})
}


submitButton.addEventListener('click', (event) => {
	event.preventDefault();

	let fizz = fizzInput.value;
	let buzz = buzzInput.value;

	let lower = lowerInput.value;
	let upper = upperInput.value;

	loadTableData(fizzbuzz(fizz, buzz, lower, upper))
})

const mathRandom = (size) => Math.floor(Math.random() * size);

randomButton.addEventListener('click', (event) => {
	event.preventDefault();

	let fizz = mathRandom(10);
	let buzz = mathRandom(10);

	if (fizz < 2) fizz = 3;
	if (buzz < 2) buzz = 5;

	let upper = mathRandom(1000);
	let lower = upper - mathRandom(1000);

	if (lower < 0) lower = 0;

	fizzInput.value = fizz;
	buzzInput.value = buzz;
	lowerInput.value = lower;
	upperInput.value = upper;
})



