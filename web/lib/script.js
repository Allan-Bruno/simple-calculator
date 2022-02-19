const display = document.getElementById("display");
const equalbtn = document.getElementById("equal");
const buttons = document.getElementById("btn");
let operation = "";
const calculate = eval(operation);

buttons.addEventListener("click", (e) => {
  const target = e.target;

  if (target.tagName === "BUTTON") {
    operation += target.innerHTML;
    display.innerHTML = operation;
  }
});

equalbtn.addEventListener("click", (e) => {
  try {
    display.innerHTML = eval(operation);
  } catch (error) {
    console.log(error.message);
  }

  operation = "";
  operation += display.innerHTML;
});
