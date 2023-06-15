let two = 0;
let znak = "";
let memory = "";
let allow = true;
// сохранняет цифры и знаки в память
function main(cifri) {
  if (typeof cifri === "number") {
    cifri = cifri.toString();

    if (memory === "" || (znak !== "" && allow === true)) {
      memory = cifri;
      if (two !== 0) {
        allow = false;
      } else {
        allow = true;
      }
    } else if (memory !== "" && memory.length < 24) {
      memory += cifri;
    }
  } else {
    switch (cifri) {
      case "plusminus":
        memory *= -1;
        break;
      case "AC":
        memory = "";
        znak = "";
        allow = true;
        break;
      case "delenie":
        znak = "//";
        two = parseFloat(memory);
        break;
      case "procent":
        znak = "%";
        two = parseFloat(memory);
        memory = solve(znak, two);
        break;
      case "plus":
        znak = "+";
        two = parseFloat(memory);
        break;
      case "minus":
        znak = "-";
        two = parseFloat(memory);
        break;
      case "ravno":
        memory = solve(znak, two, parseFloat(memory));
        break;
      case "tochka":
        if (memory !== "" && !memory.includes(".")) {
          memory = memory + ".";
        }
        break;
      case "multiply":
        znak = "*";
        two = parseFloat(memory);
        break;
    }
  }
  document.getElementById("input").innerHTML = memory;
}
function solve(znak, chislo1, chislo2 = 0) {
  console.log(znak, chislo1, chislo2);
  switch (znak) {
    case "-":
      chislo1 = chislo1 - chislo2;
      break;
    case "+":
      chislo1 = chislo1 + chislo2;
      break;
    case "*":
      chislo1 = chislo1 * chislo2;
      break;
    case "//":
      chislo1 = chislo1 / chislo2;
      parseFloat(chislo1.toFixed(7));
      break;
    case "%":
      chislo1 = chislo1 / 100;
  }
  allow = true;
  znak = "";
  two = 0;
  return chislo1;
}
