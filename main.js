
let display = document.getElementById('display');

function appendChar(char) {
	display.value += char;
}

function clearDisplay() {
	display.value = '';
}

function deleteLastChar() {
	display.value = display.value.slice(0, -1);
}

function calculate() {
	try {
		display.value = eval(display.value);
	} catch (e) {
		display.value = 'Error';
	}
}
