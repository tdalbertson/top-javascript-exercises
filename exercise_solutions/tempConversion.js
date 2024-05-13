const convertToCelsius = function(tempInFahrenheit) {
  // °C = (°F - 32) × 5/9
  const tempInCelcius = (tempInFahrenheit - 32) * (5/9);
  return Math.round(tempInCelcius * 10) / 10;
};  

const convertToFahrenheit = function(tempInCelcius) {
  // °F = °C * 9/5 + 32
  const tempInFahrenheit = (tempInCelcius * (9/5)) + 32;
  return Math.round(tempInFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
