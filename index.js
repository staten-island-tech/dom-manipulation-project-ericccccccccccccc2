const DOMSelectors = {
  thing: document.getElementById("poopy"),
  body: document.getElementById("body"),
  selector: document.getElementById("select"),
  history: document.getElementById("history"),
  button: document.getElementById("button"),
  clear: document.getElementById("clear"),
};

function redbkground(e) {
  e.style.backgroundColor = "red";
}

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
  let in1 = parseInt(document.getElementById("num1").value);
  let in2 = parseInt(document.getElementById("num2").value);
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

DOMSelectors.button.addEventListener("click", function() {
  let out = mathTime();
  DOMSelectors.history.insertAdjacentHTML('afterend', out)
});


DOMSelectors.clear.addEventListener("click", function() {
  let arraynow = Array.from(document.getElementsByClassName("histtext"));
  arraynow.remove();
});

