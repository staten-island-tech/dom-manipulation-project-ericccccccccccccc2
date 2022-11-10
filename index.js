const DOMSelectors = {
  thing: document.getElementById("poopy"),
  body: document.getElementById("body"),
  selector: document.getElementById("select"),
  history: document.getElementById("history"),
};

function nowred(e) {
  e.style.color = "red";
  e.style.fontSize = "50px";
}

nowred(DOMSelectors.hist);
nowred(DOMSelectors.thing);

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
  var operator = readOper();
  if ((operator = "+")) {
    let in1 = parseInt(document.getElementById("num1").value);
    let in2 = parseInt(document.getElementById("num2").value);
    let out = add(in1, in2);
    console.log(out);
  }
}
