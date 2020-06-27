const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];
const idades = usuarios.map(item => item.idade);
console.log(idades);
const filtro = usuarios.filter(item => item.empresa === 'Rocketseat'&& item.idade >= 18);
console.log(filtro);
const procurar = usuarios.find( item => item.empresa ==="Google");
console.log(procurar);
const maior50 = usuarios.filter(item => item.idade*2 <50 );
console.log(maior50);
function mostraInfo({nome, idade}) {
    return `${nome} tem ${idade} anos.`;
   }   
console.log(mostraInfo( usuarios[0]));
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;
console.log(x);
console.log(y);
function soma (a, b, ...params){
    return params != ""?params.reduce((total, next)=> total + next)+a+b: a+b;
}
console.log(soma(1,2,5,6,8,7));