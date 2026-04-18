document.getElementById("formulario").addEventListener("submit", function(e){
e.preventDefault();

let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let destino = document.getElementById("destino");
let mensaje = document.getElementById("mensaje");
let check = document.getElementById("check");

let valido = true;

// RESET
document.querySelectorAll(".error").forEach(e => e.innerText = "");
document.querySelectorAll("input, textarea, select").forEach(e => {
    e.classList.remove("input-error","input-ok");
});

// NOMBRE
if(nombre.value.length < 3){
    document.getElementById("error-nombre").innerText = "Mínimo 3 caracteres";
    nombre.classList.add("input-error");
    valido = false;
} else {
    nombre.classList.add("input-ok");
}

// EMAIL
if(!email.value.includes("@")){
    document.getElementById("error-email").innerText = "Correo inválido";
    email.classList.add("input-error");
    valido = false;
} else {
    email.classList.add("input-ok");
}

// DESTINO
if(destino.value === ""){
    document.getElementById("error-destino").innerText = "Seleccione un destino";
    destino.classList.add("input-error");
    valido = false;
} else {
    destino.classList.add("input-ok");
}

// MENSAJE
if(mensaje.value.length < 20){
    document.getElementById("error-mensaje").innerText = "Mínimo 20 caracteres";
    mensaje.classList.add("input-error");
    valido = false;
} else {
    mensaje.classList.add("input-ok");
}

// CHECK
if(!check.checked){
    document.getElementById("error-check").innerText = "Debes aceptar los términos";
    valido = false;
}

// RESULTADO
if(valido){
    document.getElementById("respuesta").innerText = "✅ Enviado correctamente";
}
});