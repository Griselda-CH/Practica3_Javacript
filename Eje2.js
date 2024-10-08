/*2.- Invierte una cadena sin usar reverse()
Crea una función en JavaScript que reciba una 
cadena de texto y devuelva la cadena invertida, 
pero sin usar el método reverse() ni split(). 
Debes iterar sobre la cadena de caracteres manualmente
 para construir una nueva en orden inverso.*/

function invertirCadena(cad) {
    let nuevaCadena = "";
    for ( let i = cad.length - 1; i >= 0; i--) {
        nuevaCadena += cad[i];
    }
    return nuevaCadena;
}
console.log(invertirCadena('griselda'));

