document.getElementById("formulario").addEventListener("submit", function(e){
e.preventDefault();

let valido = true;

let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let destino = document.getElementById("destino");
let mensaje = document.getElementById("mensaje");
let check = document.getElementById("check");

document.querySelectorAll(".error").forEach(e=>e.innerText="");

if(nombre.value.length < 3){
document.getElementById("error-nombre").innerText="Mínimo 3 caracteres";
valido=false;
}

if(!email.value.includes("@")){
document.getElementById("error-email").innerText="Correo inválido";
valido=false;
}

if(destino.value===""){
document.getElementById("error-destino").innerText="Seleccione destino";
valido=false;
}

if(mensaje.value.length < 20){
document.getElementById("error-mensaje").innerText="Mínimo 20 caracteres";
valido=false;
}

if(!check.checked){
document.getElementById("error-check").innerText="Debe aceptar";
valido=false;
}

if(valido){
document.getElementById("respuesta").innerText="Enviado correctamente";
}
});