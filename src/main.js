//classes
class MostraImc {
    renderImc(weight, height){
        //LET
        let imc = weight / (height*height);
        return imc;
    }
}
//CONST
const meuImc = new MostraImc;
console.log("resultado do metodo renderImc da classe MostraImc -> "+meuImc.renderImc(81,1.69));
//Operações com Arrays
const exemplo = [1,2,3,4,5,6,7];
console.log("Operacões com arrays:")
console.log("array -> " +exemplo);
    //map -> Executa uma operação com cada item
    const exemploMap = exemplo.map(function(item, index){
        return item*index;
    });
    console.log("map ->" + exemploMap);
    //reduce -> Executa operação com todos os itens em sequencia 
    const exemploReduce = exemplo.reduce(function(total, next){
        return total + next ;
    });
    console.log("reduce -> "+exemploReduce);
    //filter -> filtra itens de um array
    const exemploFilter = exemplo.filter(function(item){
        return item % 2 === 0;
    })
    console.log("filter -> " + exemploFilter);
    //find -> verificar se existe valor em array
    const exemploFind = exemplo.find(function(item){
        return item ===4;
    }) 
    console.log("find -> "+exemploFind);
//Arrows Function
const exemploMapArrowFunction =  exemplo.map((item, index) => item * index);
console.log("map com arrow function -> " + exemploMapArrowFunction);
// Valores Padrão
function soma (a = 3,b = 5){
    return a+b;    
}
console.log("funcção soma com valores padrao - >" + soma());
//rest
const usuario ={
    nome: "Isaque",
    sobrenome:"Lopes",
    cidade:"Teresina"
};
const {nome, ...resto} = usuario;
console.log(nome, resto);
//spread
const endereco ={
    rua: "Otacílio Forbesanio",
    num: "5798",
    bairro: "Parque Norte"
}
const newEndereco = {...endereco, rua: "valter XERONCAR"};
console.log(newEndereco);
//template literals
console.log(`constante newEndereco com template literals -> ${newEndereco.rua} ${newEndereco.num} ${newEndereco.bairro}`);
//Object Short Syntax
const name = "Isaque";
const age = 22;
const user ={
    name,
    age,
    apelido: "chacaraca"
};
console.log(user);
import somaNova from './funcao.js';
console.log(somaNova(1,2));
import {Usuario, Admin} from './Admin.js';
const ave = new Admin;
ave.setEmailESenha("falca@falcao.com",'faruei');
console.log(ave.isAdmin());
// Exercício transformar promise em async/await
const delay = () => new Promise(resolve => {    
    setTimeout(() => resolve(),2000)});
async function umPorSegundo() {
    
    console.log(await delay());
    console.log(1);        
    console.log(await delay());
    console.log(2);
    console.log(await delay());
    console.log(3);
    console.log(await delay());
    console.log(4);
}
umPorSegundo();
// Exercício axios
import axios from 'axios';
async function getGitUser(usuario){
    try{
        let user = await axios.get(`http://api.github.com/users/${usuario}`);
        console.log(user.data.avatar_url);
    }
    catch{
        console.log('Algo de errado com a requisição');
    }
    
}
getGitUser('isaquelosoas');


class GitHub{
    static async getRepositorie(repositorie){
        try{
            const response = await axios.get(`http://api.github.com/repos/${repositorie}`);
            console.log(response);
        }
        catch{
            console.warn('repositório Inexistente');
        }
    }
}

GitHub.getRepositorie('isaquelosoas/ES6');
GitHub.getRepositorie('rocketseat/dslkvmskv');

