class Usuario{
    constructor(){
        this.email = "usuario@host.com";
        this.senha = "123456";
    }
    setEmailESenha(email, senha){
        this.email = email;
        this.senha = senha;
    }
    isAdmin(){
        if (this.admin) return true;
        else return false;
    }
}
class Admin extends Usuario {
    constructor(){
        super();
        this.admin = true;
    }
        
}

const usuario = new Usuario;
const admin = new Admin;
admin.setEmailESenha("fabricio@tchemail.com","Aligator");
usuario.setEmailESenha("faruei@farumail.com","abiliduu");
console.log(admin.isAdmin());
console.log(usuario.email);
console.log(usuario.senha);
console.log(admin.email);
console.log(admin.senha);