const summa = document.querySelector('.summa');
const input = document.querySelector('input');
const button = document.querySelector('#button');
const care = document.querySelector('.care');


let calculate = function() {

let value = Math.abs(parseInt(input.value));

let sum1 = value * 0.105; 

let sum2 = tax(value, sum1);

let sum3 = value - sum1 - sum2;

summa.innerText = sum3;

}

button.addEventListener('click', calculate);

let tax = function(value, sum1){

	let caresum = 250;

	let careppl = Math.abs(parseInt(care.value)) || 0;

	if (careppl >= 4) {

		return 0


	} else {

		let sum2 = (value - sum1 - (caresum * careppl)) * 0.20;

		return sum2;

		console.log(sum2);

	}
}


