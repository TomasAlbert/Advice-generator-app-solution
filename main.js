const API_URL = "https://api.adviceslip.com/advice";

const adviceElement = document.querySelector("[data-quote-advice]");
const idElement = document.querySelector("[data-quote-id]");
const diceButton = document.querySelector("[data-dice]");

const loader = `<div class="spinner-container"><div class="spinner"></div></div>`;
const error = `<small class="text-[red] text-[16px]">Uuups, there was and error try it later !</small>`;
const diceSvg = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>`;

diceButton.addEventListener("click", getData);
getData();

async function getData() {
	try {
		displayLoader();
		const data = await fetchData(API_URL);
		displayData(data);
	} catch (err) {
		displayError();
	} finally {
		handleButtonState();
	}
}

// Fetch data
async function fetchData(url) {
	const res = await fetch(url);
	return res.json();
}
// Handle Button State
function handleButtonState() {
	disableButton(diceButton);
	setTimeout(() => {
		revertDisabledButton(diceButton);
	}, 2000);
}
// Need to disable fetching because api is cashing value for 2 seconds
function disableButton(button) {
	button.disabled = true;
	button.style.cursor = "not-allowed";
	button.innerHTML = loader;
}
// Revert disabled Button
function revertDisabledButton(button) {
	button.disabled = false;
	button.style.cursor = "pointer";
	button.innerHTML = diceSvg;
}
// Display data
function displayData(data) {
	const { id, advice } = data.slip;
	idElement.innerText = `advice #${id}`;
	adviceElement.innerHTML = makeQuote(advice);
}
// Display loader
function displayLoader() {
	adviceElement.innerHTML = loader;
	idElement.innerHTML = "";
}
// Display Error
function displayError() {
	adviceElement.innerHTML = error;
	idElement.innerHTML = "Not found";
}
// Quote helper
function makeQuote(quote) {
	return `<q class="block text-LightCyan text-sm sm:text-base">${quote}</q>`;
}
