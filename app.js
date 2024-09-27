/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let currentInput = ""
let firstInput = ""
let operator = ""
let result
/*------------------------ Cached Element References ------------------------*/
const display = document.querySelector(".display")
const buttons = document.querySelectorAll(".button")
/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent
    if (buttonValue === "C") {
      clearDisplay()
    } else if (buttonValue === "=") {
      calc()
    } else if (
      buttonValue === "+" ||
      buttonValue === "-" ||
      buttonValue === "*" ||
      buttonValue === "/"
    ) {
      savedOperator(buttonValue)
    } else {
      savedNumber(buttonValue)
    }
  })
})

/*-------------------------------- Functions --------------------------------*/
function clearDisplay() {
  currentInput = ""
  previousInput = ""
  operator = ""
  refreshDisplay()
}

function calc() {
  if (firstInput !== "" && currentInput !== "" && operator !== "") {
    if (operator === "+") {
      result = parseInt(firstInput) + parseInt(currentInput)
    } else if (operator === "-") {
      result = parseInt(firstInput) - parseInt(currentInput)
    } else if (operator === "*") {
      result = parseInt(firstInput) * parseInt(currentInput)
    } else if (operator === "/") {
      result = parseInt(firstInput) / parseInt(currentInput)
    }

    currentInput = result
    firstInput = ""
    operator = ""
    refreshDisplay()
  }
}

function savedOperator(operatorClicked) {
  if (currentInput !== "") {
    firstInput = currentInput
    operator = operatorClicked
    currentInput = ""
    refreshDisplay()
  }
}

function savedNumber(number) {
  currentInput += number
  refreshDisplay()
}

function refreshDisplay() {
  display.innerHTML = currentInput
}
