const btnLogin = document.getElementById('entrar');
const form = document.querySelector("form");
const btnSair = document.getElementById('sair');

function deslogar() {
    window.close();
    window.open("tela_login.html");
    
};

btnLogin.addEventListener("click", event => {
    event.preventDefault();
    form.classList.add("form-hide");
  
});

form.addEventListener("animationstart", event => {
    if (event.animationName == "down") {
        document.querySelector("body").style.overflow = "hiden";
    }
});

form.addEventListener("animationend", (event) => {
    if (event.animationName == "down") {
        form.style.display = "none";
        window.location.replace("http://localhost:3000/");
    }
});

/*
btnSair.addEventListener("click", event => {
    event.preventDefault();
    window.close("tela_login.html");
  
}); 
*/



/*
document.querySelector("body").style.overflow = "none";

function login(){
    window.open("menu_inicial.html")
}
*/

function voltar(){
    window.close("menu_inicial.html")
}

function clicar_Motorista(){
    window.open("tela_motorista.html")
}

function clicar_Frota(){
    window.open("tela_veiculo.html")
}



