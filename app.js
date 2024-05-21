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
}

function getRandomNumber(min, max) {
  return parseInt(Math.random() * (max - min + 1) + min);
}
