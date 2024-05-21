function draw() {
  let quantity = parseInt(document.getElementById("quantity").value);
  let fromNumber = parseInt(document.getElementById("fromNumber").value);
  let toNumber = parseInt(document.getElementById("toNumber").value);

  let drawn = [];
  let number;

  for (let i = 0; i < quantity; i++) {
    number = getRandomNumber(fromNumber, toNumber);

    while (drawn.includes(number)) {
      number = getRandomNumber(fromNumber, toNumber);
    }

    drawn.push(number);
  }

  let result = document.getElementById("result");
  result.innerHTML = `<label class="texto__paragrafo">Drawn numbers: ${drawn}</label>`;

  buttonStatusChange();
}

function getRandomNumber(min, max) {
  return parseInt(Math.random() * (max - min + 1) + min);
}

function buttonStatusChange() {
  let button = document.getElementById("btn-restart");

  if (button.classList.contains("container__botao-desabilitado")) {
    button.classList.remove("container__botao-desabilitado");
    button.classList.add("container__botao");
  } else {
    // button.classList.remove("container__botao");
    // button.classList.add("container__botao-desabilitado");
  }
}

function restart() {
  document.getElementById("quantity").value = "";
  document.getElementById("fromNumber").value = "";
  document.getElementById("toNumber").value = "";
  document.getElementById("result").innerHTML =
    '<label class="texto__paragrafo">Numbers drawn: none until now</label>';
  buttonStatusReturn();
}

function buttonStatusReturn() {
  let buttonReturn = document.getElementById("btn-restart");

  if (buttonReturn.classList.contains("container__botao")) {
    buttonReturn.classList.remove("container__botao");
    buttonReturn.classList.add("container__botao-desabilitado");
  }
}
