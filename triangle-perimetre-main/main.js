let xA = 0;
let yA = 0;
let xB = 0;
let yB = 0;
let xC = 0;
let yC = 0;
let AB = 0;
let AC = 0;
let BC = 0;
document.getElementById("btn").addEventListener("click", calculate);

function calculate() {
  // getting values
  xA = document.getElementById("xA").value;
  yA = document.getElementById("yA").value;
  xB = document.getElementById("xB").value;
  yB = document.getElementById("yB").value;
  xC = document.getElementById("xC").value;
  yC = document.getElementById("yC").value;
  // calculating length
  AB = Math.sqrt((xA - xB) ** 2 + (yA - yB) ** 2);
  AC = Math.sqrt((xA - xC) ** 2 + (yA - yC) ** 2);
  BC = Math.sqrt((xB - xC) ** 2 + (yB - yC) ** 2);
  // output
  document.getElementById("AB").innerHTML = AB;
  document.getElementById("AC").innerHTML = AC;
  document.getElementById("BC").innerHTML = BC;
  document.getElementById("Perimeter").innerHTML = AB + AC + BC;
}
