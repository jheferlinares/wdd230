const temperatureInput = document.getElementById('temperature-input');
const windSpeedInput = document.getElementById('wind-speed-input');
const windChillResult = document.getElementById('wind-chill-result');
const calculateButton = document.getElementById('calculate-wind-chill');

calculateButton.addEventListener('click', calculateWindChill);

function calculateWindChill() {
  const temperature = parseFloat(temperatureInput.value);
  const windSpeed = parseFloat(windSpeedInput.value);

  if (temperature <= 50 && windSpeed > 3.0) {
    const windChill = calculateWindChillFormula(temperature, windSpeed);

    windChillResult.textContent = `Wind Chill: ${windChill.toFixed(2)} °F`;
  } else {
    windChillResult.textContent = "N/A";
  }
}

function calculateWindChillFormula(temperature, windSpeed) {
  return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
}