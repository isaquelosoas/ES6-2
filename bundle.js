"use strict";

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idades = usuarios.map(function (item) {
  return item.idade;
});
console.log(idades);
var filtro = usuarios.filter(function (item) {
  return item.empresa === 'Rocketseat' && item.idade >= 18;
});
console.log(filtro);
var procurar = usuarios.find(function (item) {
  return item.empresa === "Google";
});
console.log(procurar);
var maior50 = usuarios.filter(function (item) {
  return item.idade * 2 < 50;
});
console.log(maior50);

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo(usuarios[0]));
var arr = [1, 2, 3, 4, 5, 6];
var x = arr[0],
    y = arr.slice(1);
console.log(x);
console.log(y);

function soma(a, b) {
  for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    params[_key - 2] = arguments[_key];
  }

  return params != "" ? params.reduce(function (total, next) {
    return total + next;
  }) + a + b : a + b;
}

console.log(soma(1, 2, 5, 6, 8, 7));
