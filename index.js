const DOMSelectors = {
  thing: document.getElementById("poopy"),
  body: document.getElementById("body"),
  selector: document.getElementById("select")
};

function nowred(e) {
  e.style.color = "red";
  e.style.fontSize = "50px";
}

nowred(DOMSelectors.thing);

function redbkground(e) {
  e.style.backgroundColor = "red";
}

function readOper() {
return document.getElementById("oper").value;
}


function mathTime() {
  var operator = readOper();
  console.log(operator);
}