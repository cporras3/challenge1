const textArea=document.querySelector(".text-area"); /* con esta constante se almacena lo que el usuario ingresa en el text-area*/
const mensaje = document.querySelector(".mensaje");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

 /* arreglo de arreglos o conjunto de arreglos cada uno tiene la llaves de incriptacion*/
/*console.table(matrizcodigo) /*para ver en la consola de desarrollador */


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado
    textArea.value = ""; /* para quitar el texto que el usuario escribe */
    mensaje.style.backgroundImage = "none"; /*para quitar el background cuando traduce el texto */ 
}

function encriptar(stringEncriptada){
    let matrizcodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase() //solo minusculas 

    for(let i = 0; i < matrizcodigo.length; i++){ /* length tamaño de la matriz */
        if(stringEncriptada.includes(matrizcodigo[i][0])){ /*[i]indice [0]posicion */
            stringEncriptada = stringEncriptada.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1]) /* metodo replace ,remplaza vocales con las llaves de incriptacion */
            
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado
    textArea.value = ""; /* para quitar el texto que el usuario escribe */
    mensaje.style.backgroundImage = "none"; /*para quitar el background cuando traduce el texto */ 
}

function desencriptar(stringDesencriptada){
    let matrizcodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizcodigo.length; i++){ /* length tamaño de la matriz */
        if(stringDesencriptada.includes(matrizcodigo[i][1])){ /*[i]indice [0]posicion */
            stringDesencriptada = stringDesencriptada.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0]) /* metodo replace ,remplaza vocales con las llaves de incriptacion */
            
        }
    }
    return stringDesencriptada
}
 
function btnCopiar(){
    var copiartexto = document.querySelector(".mensaje");
    copiartexto.select();
    document.execCommand('copy');
    mensaje.value = "";
}