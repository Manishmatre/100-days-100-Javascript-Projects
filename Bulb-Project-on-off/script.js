const signal = document.getElementById("signal");

const bulb = document.getElementById("bulb");

const button = document.getElementById("btn");

function onBulb() {
  signal.classList.add("green");
  signal.classList.remove("red");
  signal.innerText = "ON";

  bulb.src = "./on bulb.jpg";
  button.innerText = "Turn OFF Bulb";

  button.style.backgroundColor = "green";

  button.setAttribute("onclick", "offBulb()");
}

function offBulb() {
  signal.classList.add("red");
  signal.classList.remove("green");
  signal.innerText = "OFF";

  bulb.src = "./off bulb.jpg";
  button.innerText = "Turn ON Bulb";

  button.style.backgroundColor = "red";

  button.setAttribute("onclick", "onBulb()");
}
