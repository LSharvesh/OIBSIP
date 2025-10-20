function convertTemperature() {
  const temp = parseFloat(document.getElementById("temperature").value);
  const unit = document.getElementById("unit").value;
  const result = document.getElementById("result");

  if (isNaN(temp)) {
    result.innerHTML = "❌ Please enter a valid number!";
    return;
  }

  let convertedTemp = "";
  let output = "";

  if (unit === "celsius") {
    convertedTemp = {
      fahrenheit: (temp * 9/5) + 32,
      kelvin: temp + 273.15
    };
    output = `${temp}°C = ${convertedTemp.fahrenheit.toFixed(2)}°F <br> ${temp}°C = ${convertedTemp.kelvin.toFixed(2)}K`;
  } 
  else if (unit === "fahrenheit") {
    convertedTemp = {
      celsius: (temp - 32) * 5/9,
      kelvin: (temp - 32) * 5/9 + 273.15
    };
    output = `${temp}°F = ${convertedTemp.celsius.toFixed(2)}°C <br> ${temp}°F = ${convertedTemp.kelvin.toFixed(2)}K`;
  } 
  else if (unit === "kelvin") {
    convertedTemp = {
      celsius: temp - 273.15,
      fahrenheit: (temp - 273.15) * 9/5 + 32
    };
    output = `${temp}K = ${convertedTemp.celsius.toFixed(2)}°C <br> ${temp}K = ${convertedTemp.fahrenheit.toFixed(2)}°F`;
  }

  result.innerHTML = output;
}
