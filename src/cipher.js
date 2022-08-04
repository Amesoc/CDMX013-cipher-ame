const cipher = {
    encode:function(offset,textocifra){
        if(offset<=0 && typeof textocifra !="string"){
            throw new TypeError();
        }
       let mensajecifrado= ""
        for (let i=0; i< textocifra.length; i++){
            if(textocifra.charCodeAt(i) <=90 && textocifra.charCodeAt(i) >=65){
            console.log(textocifra.charCodeAt(i))
                let letras = (textocifra.charCodeAt(i) - 65+ (offset)) %26+65;
            console.log(letras)
            mensajecifrado += String.fromCharCode (letras);
            }
            else{
                mensajecifrado+=textocifra[i]
            }
        }
      return (mensajecifrado)
      },
 
      decode:function(offset,textocifra2){
        if(offset<=0 && typeof textocifra2 !="string"){
            throw new TypeError();
        }
             let mensajedescifrado= "";
        for (let i=0; i< textocifra2.length; i++){
            if(textocifra2.charCodeAt (i)<=90 && textocifra2.charCodeAt(i)>=65){
            let letras2 = textocifra2.charCodeAt(i) -(offset %26);
            if(letras2>=40 && letras2 <=64){
            let letras3= letras2+26
                mensajedescifrado+=String.fromCharCode (letras3);
            }
            else {mensajedescifrado += String.fromCharCode (letras2)}
            }
            else {mensajedescifrado +=textocifra2[i]
            }
        }
      return (mensajedescifrado)
      }
 
        /*nombreDelModulo:"cipher",
        leer:function(){
            console.log("leer")
           
        }*/
       
         
   
   
 
 
 
 
      };
    
export default cipher;
 