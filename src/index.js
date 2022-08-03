import cipher from './cipher.js';
//traer los botones del DOM
const botoncifrado=document.querySelector(".btncifrar");
const botondecifrado=document.querySelector(".btndescifrar");
 
console.log(botoncifrado)
console.log(botondecifrado)
 
 
botoncifrado.addEventListener("click",function(){
    let texto= document.getElementById("mensajeOne").value;
    texto = texto.toUpperCase();
    let posicion=document.getElementById("numero").value;
   let solucion= cipher.encode(texto,parseInt (posicion))
   document.getElementById ("mensajeResuelto").value=solucion
 
 
})
 
botondecifrado.addEventListener("click",function(){
    let texto=document.getElementById("mensajeOne").value;
    texto=texto.toUpperCase();
    let posicion=document.getElementById("numero").value;
    let solucion= cipher.decode(texto,parseInt (posicion))
    document.getElementById ("mensajeResuelto").value=solucion
})
 
 
 
 
