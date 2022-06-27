let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#senha");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstwxyzABCDEFGHIJKLMNOPQRSTWXYZ123456789!@#$%¨&*_";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function gerarSenha(){
    let pass = "";

    for(let i = 0, j = charset.length; i <= sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random()*j));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copiaSenha(){
    navigator.clipboard.writeText(novaSenha);
}