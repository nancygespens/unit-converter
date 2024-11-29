/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// METRIC/IMPERIAL UNIT CONVERSION
const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");

const lengthEl = document.getElementById("length-text");
const volumeEl = document.getElementById("volume-text");
const massEl = document.getElementById("mass-text");

const meterToFeet =  3.28084;
const feetToMeter =  0.3048;

const literToGallon =  0.264172;
const gallonToLiter =  3.78541;

const kiloToPound =  2.20462;
const poundToKilo =  0.453592;

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value;

    lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(3)} meters`; 

    volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue * gallonToLiter).toFixed(3)} liters`; 

    massEl.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue * poundToKilo).toFixed(3)} kilos`; 

    // Clear input field after conversion
    inputEl.value = "";
});

// FUNCTION TO DARK MODE
const darkModeBtn = document.getElementById("darkMode");
const bottomSection = document.getElementById("main");

// Function to toggle dark mode
darkModeBtn.addEventListener("click", function () {
    // Toggle the dark-mode class on the bottom section
    bottomSection.classList.toggle("dark-mode");

    // Invert the colors of the dark mode button icon
    darkModeBtn.classList.toggle("inverted");
});

// FUNCTION TO RESIZE INPUT SECTION
function updateInputWidth() {
    const text = inputEl.value || " "; // Use a space if the box is empty
    const canvas = document.createElement("canvas"); // Create a "canvas" to measure text
    const context = canvas.getContext("2d"); // Get the drawing tool from the canvas

    // Set the same font as the input box to measure correctly
    context.font = "58px Inter, sans-serif";

    // Measure the width of the text
    const textWidth = context.measureText(text).width;

    // Calculate the new width of the input box
    let newWidth = textWidth + 50; // Add some padding
    newWidth = Math.max(newWidth, 117); // Ensure the width doesn't go below 117px
    newWidth = Math.min(newWidth, 500); // Set the maximum width to prevent it from becoming too wide

    inputEl.style.width = newWidth + "px"; // Set the new width to the input box
}

// Update input box width whenever text is entered
inputEl.addEventListener("input", updateInputWidth);

// Set the starting size of the input box
inputEl.style.width = "117px";
