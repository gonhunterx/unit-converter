let selectUnits = document.getElementById('select-units');
let inputNumber = document.getElementById('input-number');
let outputUnits = document.getElementById('output-units');
let resultText = document.getElementById('result');


selectUnits.addEventListener('change', convertUnits);
inputNumber.addEventListener('input', convertUnits);
outputUnits.addEventListener('change', convertUnits);

function convertUnits() {
    let inputVal = inputNumber.value;
    let selectedUnit = selectUnits.value;
    let outputUnit = outputUnits.value;
    let result;

    if (selectedUnit === "Meters"){
        result = inputVal; // as meters is the base unit, no conversion is needed
    } else if (selectedUnit === "Yards") {
        result = inputVal * 1.09361; // conversion rate from meters to yards
    }

    // convert results to output unit
    if (outputUnit === "Meters") {
        result = result;
    } else if (outputUnit === "Yards") {
        result = result / 1.09361;
    }

    resultText.textContent = "Result: " + result;

}