const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  
  // Check for missing inputs
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
    return;
  }

  // Check if inputs are numbers
  if (isNaN(dividend) || isNaN(divider)) {
    document.body.innerHTML = "Something critical went wrong. Please reload the page.";
    console.error("Invalid input provided. Call stack:", new Error().stack);
    return;
  }

  // Convert inputs to numbers
  const numDividend = Number(dividend);
  const numDivider = Number(divider);

  // Handle division by zero
  if (numDivider === 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again.";
    console.error("Division by zero error. Call stack:", new Error().stack);
    return;
  }

  // Perform the division
  const divisionResult = numDividend / numDivider;
  
  // Check for whole number result and display accordingly
  result.innerText = Math.floor(divisionResult);
});
