const inputBox = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanNumerals = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
];

// Convert Function

const convert = () => {
  let input = inputBox.value;
  const newArray = [];

  if (!input || isNaN(parseInt(input))) {
    output.innerHTML = `<p><b>Please enter a valid number</b></p>`;
    inputBox.value = "";
    return;
  } else if (input < 1) {
    output.innerHTML = `<p><b>Please enter a number greater than or equal to 1.</b></p>`;
    inputBox.value = "";
    return;
  } else if (input > 3999) {
    output.innerHTML = `<p><b>Please enter a number less than or equal to 3999.</b></p>`;
    inputBox.value = "";
    return;
  }

  romanNumerals.forEach((arr) => {
    while (input >= arr[1]) {
      input -= arr[1];
      newArray.push(arr[0]);
    }
  });

  output.innerHTML = `<p><b> ${newArray.join("")}</b></p>`;
};

// Enter Keypress

inputBox.addEventListener("keypress", (buttonPress) => {
  if (buttonPress.key === "Enter") {
    convert();
  }
});

// Convert Button

convertButton.addEventListener("click", convert);
