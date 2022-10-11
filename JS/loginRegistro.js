document.getElementById("btnIniciarSesion").addEventListener("click", iniciarSesion);
document.getElementById("btnRegistrarse").addEventListener("click", registro);
window.addEventListener("resize", anchoPagina);

//Declaracion de variables

let contenedorLoginRegistro = document.querySelector(".contenedorLoginRegistro");
let formularioLogin = document.querySelector(".formularioLogin");
let formularioRegistro = document.querySelector(".formularioRegistro");
let cajaTraseraLogin = document.querySelector(".cajaTraseraLogin");
let cajaTraseraRegistro = document.querySelector(".cajaTraseraRegistro");

function anchoPagina(){
    if(window.innerWidth > 850){
        cajaTraseraLogin.style.display = "block";
        cajaTraseraRegistro.style.display = "block";
    }
    else{
        cajaTraseraRegistro.style.display = "block";
        cajaTraseraRegistro.style.opacity = "1";
        cajaTraseraLogin.style.display = "none";
        formularioLogin.style.display = "block";
        formularioRegistro.style.display = "none";
        contenedorLoginRegistro.style.left = "0px";
    }
}

anchoPagina();

function iniciarSesion(){

  if(window.innerWidth > 850){
    formularioRegistro.style.display = "none";
    contenedorLoginRegistro.style.left = "10px";
    formularioLogin.style.display = "block";
    cajaTraseraRegistro.style.opacity = "1";
    cajaTraseraLogin.style.opacity = "0";
   }
   else{
    formularioRegistro.style.display = "none";
    contenedorLoginRegistro.style.left = "0px";
    formularioLogin.style.display = "block";
    cajaTraseraRegistro.style.display = "block";
    cajaTraseraLogin.style.display = "none";
   }
}

function registro(){

  if(window.innerWidth > 850){
    formularioRegistro.style.display = "block";
    contenedorLoginRegistro.style.left = "410px";
    formularioLogin.style.display = "none";
    cajaTraseraRegistro.style.opacity = "0";
    cajaTraseraLogin.style.opacity = "1";
  }
  else{
    formularioRegistro.style.display = "block";
    contenedorLoginRegistro.style.left = "0px";
    formularioLogin.style.display = "none";
    cajaTraseraRegistro.style.display = "none";
    cajaTraseraLogin.style.display = "block";
    cajaTraseraLogin.style.opacity = "1";
  }
}

//Validacion Registro

const nombreR = document.getElementById("nombreR");
const emailR = document.getElementById("emailR");
const usuarioR = document.getElementById("usuarioR");
const contrasenaR = document.getElementById("contrasenaR");
const formularioRegistroVal = document.getElementById("formularioRegistroVal");
const parrafoR = document.getElementById("warningsR");

formularioRegistroVal.addEventListener("submit", e=>{
    e.preventDefault();
    let warningsR= "";
    let entrar = false;
    let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    
    parrafoR.innerHTML = "";

    if(nombreR.value.length <6){
        warningsR += 'Nombre no valido <br>'
        entrar = true;
    }
    
    if(!emailRegex.test(emailR.value)){
        warningsR += 'Correo no valido <br>'
        entrar = true;
    }
    
    if(usuarioR.value.length <4){
        warningsR += 'Usuario no valido <br>'
        entrar = true;
    }

    if(contrasenaR.value.length <8){
        warningsR += 'Contraseña no valida <br>'
        entrar = true;
    }    

    if(entrar){
        parrafoR.innerHTML = warningsR;
    }
    else{
        parrafoR.innerHTML = "Enviado";
    }
})

//Validacion Login

const emailL = document.getElementById("emailL");
const contrasenaL = document.getElementById("contrasenaL");
const formularioLoginVal = document.getElementById("formularioLoginVal");
const parrafoL = document.getElementById("warningsL");

formularioLoginVal.addEventListener("submit", e=>{
    e.preventDefault();
    let warningsL= "";
    let entrar2 = false;
    let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    
    parrafoL.innerHTML = "";
    
    if(!emailRegex.test(emailL.value)){
        warningsL += 'Correo no valido <br>'
        entrar2 = true;
    }

    if(contrasenaL.value.length <8){
        warningsL += 'Contraseña no valida <br>'
        entrar2 = true;
    }    

    if(entrar2){
        parrafoL.innerHTML = warningsL;
    }
    else{
        parrafoL.innerHTML = "Enviado"
    }
})

