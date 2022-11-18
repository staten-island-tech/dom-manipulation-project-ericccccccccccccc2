const DOMSelectors = {
  thing: document.getElementById("poopy"),
  body: document.getElementById("body"),
  selector: document.getElementById("select"),
  history: document.getElementById("history"),
  button: document.getElementById("button"),
  clear: document.getElementById("clear"),
  input1: document.getElementById("num1"),
  input2: document.getElementById("num2"),
  backspace: document.getElementById("lazy")
};

function readOper() {
  return document.getElementById("oper").value;
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function mathTime() {
  let operator = readOper();
  let in1 = parseInt((DOMSelectors.input1).value);
  let in2 = parseInt((DOMSelectors.input2).value);
  if ((operator === `+`)) {
    return `<p class="histtext">${in1} + ${in2} = ${add(in1, in2)}</p>`;
  }  
  else if ((operator === `-`)) {
    return `<p class="histtext">${in1} - ${in2} = ${subtract(in1, in2)}</p>`;
  } 
   else if ((operator === `x`)) {
    return `<p class="histtext">${in1} x ${in2} = ${multiply(in1, in2)}</p>`;
  }
  else {
    return `<p class="histtext">${in1} / ${in2} = ${divide(in1, in2)}</p>`;
  }
}

function valid() {
  let operator = readOper();
  let in1 = parseInt((DOMSelectors.input1).value);
  let in2 = parseInt((DOMSelectors.input2).value);
  if ((operator === `+`)) {
    return in1 + in2
  }  
  else if ((operator === `-`)) {
    return in1 - in2
  } 
   else if ((operator === `x`)) {
    return in1 * in2
  }
  else {
    return in1 / in2
  }
}

DOMSelectors.button.addEventListener("click", function() {
  let yes = valid();
  if (isNaN(yes)) {
    DOMSelectors.history.insertAdjacentHTML('afterbegin', `<p class="histtext">put in valid numbers in the input</p>`)
  }
  else {
  let out = mathTime();
  DOMSelectors.history.insertAdjacentHTML('afterbegin', out)
  }});

DOMSelectors.clear.addEventListener("click", function() {
  DOMSelectors.history.innerHTML = "";
});

DOMSelectors.backspace.addEventListener("click", function(){
  DOMSelectors.input1.value = "";
  DOMSelectors.input2.value = "";
});