let form = document.forms.calculator;
form.money.oninput = calculate;
form.months.onchange = calculate;
form.interest.oninput = calculate;

function calculate() {
  let initial = +form.money.value;
  if (!initial) return;

  let interest = +form.interest.value * 0.01;
  if (!interest) return;

  let months = +form.months.value / 12;
  if (!months) return;

  let result = Math.round(initial + (initial * interest + months));

  document.getElementById("initial-amount").textContent = "Php " + initial.toLocaleString("en-US");
  document.getElementById("with-interest").textContent = "Php " + result.toLocaleString("en-US");

  let height = ((100 / initial) * result) + "px";

  document.getElementById("height-interest").style.height = height;
  
}
