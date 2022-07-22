const principalInput = document.querySelector("#initial-amount");
console.log(principalInput);
const rateInput = document.querySelector("#interest-rate");
console.log(rateInput);
const timeInput = document.querySelector("#time-in-years");
console.log(timeInput);
const calculateButton = document.querySelector("#calculate-button");
console.log(calculateButton);
calculateButton.addEventListener("click", calculate);
calculateButton.disabled = true;
const results = document.querySelector(".results");
const amountDisplay = document.querySelector("#amount-display");
const monthlyDisplay = document.querySelector("#monthly-display");
const interestDisplay = document.querySelector("#interest-display");

principalInput.addEventListener("click", function (e) {
  principalInput.value = "";
  rateInput.value = "";
  timeInput.selectedIndex = 0;
  calculateButton.disabled = false;
  removeResults();
});

function calculate(e) {
  console.log("++++++++++++++++");

  let p = principalInput.value;
  console.log(p);
  let r = rateInput.value;
  console.log(r);
  let t = timeInput.options[timeInput.selectedIndex].text;
  console.log(t);
  if (p === "" || r === "" || t === "") {
    console.log("Error: empty input");
  } else {
    let calculatedAmount = totalAmount(p, r, t).toFixed(2);
    console.log(calculatedAmount);
    amountDisplay.value = `Amount: ${calculatedAmount}`;

    let monthlyPayment = (calculatedAmount / (t * 12)).toFixed(2);
    console.log(monthlyPayment);
    monthlyDisplay.value = `Monthly: ${monthlyPayment}`;

    let interest = (calculatedAmount - p).toFixed(2);
    console.log(interest);
    interestDisplay.value = `Interest: ${interest}`;
    showResults();
    calculateButton.disabled = true;
  }
}

function totalAmount(p, r, t) {
  return p * (1 + (r / 100) * t);
}

function showResults() {
  // results.style.opacity = 1;
  results.style.animation = "show 2s forwards";
  setTimeout(function () {
    results.style.opacity = 1;
  }, 1000);
}

function removeResults() {
  results.style.animation = "remove 1s forwards";
  setTimeout(function () {
    results.style.opacity = 0;
  }, 1000);
}
