"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//classes
var MostraImc = /*#__PURE__*/function () {
  function MostraImc() {
    _classCallCheck(this, MostraImc);
  }

  _createClass(MostraImc, [{
    key: "renderImc",
    value: function renderImc(weight, height) {
      //LET
      var imc = weight / (height * height);
      return imc;
    }
  }]);

  return MostraImc;
}(); //CONST


var meuImc = new MostraImc();
console.log("resultado do metodo renderImc da classe MostraImc -> " + meuImc.renderImc(81, 1.69)); //Operações com Arrays

var exemplo = [1, 2, 3, 4, 5, 6, 7];
console.log("Operacões com arrays:");
console.log("array -> " + exemplo); //map -> Executa uma operação com cada item

var exemploMap = exemplo.map(function (item, index) {
  return item * index;
});
console.log("map ->" + exemploMap); //reduce -> Executa operação com todos os itens em sequencia 

var exemploReduce = exemplo.reduce(function (total, next) {
  return total + next;
});
console.log("reduce -> " + exemploReduce); //filter -> filtra itens de um array

var exemploFilter = exemplo.filter(function (item) {
  return item % 2 === 0;
});
console.log("filter -> " + exemploFilter); //find -> verificar se existe valor em array

var exemploFind = exemplo.find(function (item) {
  return item === 4;
});
console.log("find -> " + exemploFind); //Arrows Function

var exemploMapArrowFunction = exemplo.map(function (item, index) {
  return item * index;
});
console.log("map com arrow function -> " + exemploMapArrowFunction); // Valores Padrão

function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  return a + b;
}

console.log("funcção soma com valores padrao - >" + soma()); //rest

var usuario = {
  nome: "Isaque",
  sobrenome: "Lopes",
  cidade: "Teresina"
};

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]);

console.log(nome, resto); //spread

var endereco = {
  rua: "Otacílio Forbesanio",
  num: "5798",
  bairro: "Parque Norte"
};

var newEndereco = _objectSpread(_objectSpread({}, endereco), {}, {
  rua: "valter XERONCAR"
});

console.log(newEndereco); //template literals

console.log("constante newEndereco com template literals -> ".concat(newEndereco.rua, " ").concat(newEndereco.num, " ").concat(newEndereco.bairro)); //Object Short Syntax

var name = "Isaque";
var age = 22;
var user = {
  name: name,
  age: age,
  apelido: "chacaraca"
};
console.log(user);
