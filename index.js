const DOMSelectors = {
  thing: document.getElementById("poopy"),
  body: document.getElementById("body"),
};

function nowred(e) {
  e.style.color = "red";
  e.style.fontSize = "50px";
}

nowred(DOMSelectors.thing);

function redbkground(e) {
  e.style.backgroundColor = "red";
}
