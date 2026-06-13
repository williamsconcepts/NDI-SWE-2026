const celsiusInput = document.querySelector(".celsius-input");
const convertBtn = document.querySelector(".convert-btn");
const output = document.querySelector(".output");

function celToFah(celsuis, callback) {
  const fahrenheit = (celsuis * 9) / 5 + 32;
  callback(celsuis, fahrenheit);
}

function result(celsuis, fahrenheit) {
  output.innerHTML = `${celsuis}°C  is ${fahrenheit} °F`;
}

convertBtn.addEventListener("click", () => {
  const value = Number(celsiusInput.value);

  output.append(celToFah);
  celToFah(value, result);
});
