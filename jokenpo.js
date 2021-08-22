function Jokenpo(a) {
  var escolha = document.getElementById('escolha');
  var resultado = document.getElementById('resultado');
  var aleat = 0;
  var pc = 0;

  if (a == 1) {
    escolha.innerHTML = 'Pedra';
  } else if (a == 2) {
    escolha.innerHTML = 'Papel';
  } else {
    escolha.innerHTML = 'Tesoura';
  }

  aleat = Math.random() * (3 - 1);

  if (aleat >= 3) {
    pc = 3;
  } else if (aleat < 3) {
    pc = 2;
  } else if (aleat < 2) {
    pc = 1;
  } else {
    pc = 1;
  }

  if (a == pc) {
    resultado.innerHTML = 'Empate';
  } else if (a > pc) {
    resultado.innerHTML = 'Vitória';
  } else {
    resultado.innerHTML = 'Derrota';
  }
}
