import cipher from './cipher.js';

//definir las variables que voy a usar

let mensaje1 = document.getElementById("mesaje1");//donde va el texto a descifrar y/o dsifrar
let input = document.getElementById ("number"); //variable para mover la posicion para cifrar
let cifrar= document.getElementById ("cifrar"); //variable de boton
let descifar = document.getElementById("descifrar");//variable de boton


cifrar.addEventListener("click", codificar); //evento al hacer click
function codificar (texto, corrimiento){
    let abecedario="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let resultado="";
    texto=texto.toUpperCase()
    for (let i=0; i<texto.length;i++){ //i es para recorrer texto
        console.log(abecedario.includes(texto[i]))
        if(abecedario.includes(texto[i])){
git 
        for(let j=0; j<abecedario.length;j++){ //j para recorrer abecedario
           
            if (abecedario[j]==texto[i]){
              resultado=resultado+abecedario[j+corrimiento]
            
            }
        }
        }
        else{
            resultado=resultado+texto[i]
        }
    }

    console.log(texto);
    console.log(resultado);
}

codificar("ame hola",4);
