/*4.- Devuelve los primeros n números de la sucesión de Fibonacci
Crea una función que genere los primeros n números de la sucesión de Fibonacci.
 Debes evitar la recursividad para mejorar el rendimiento cuando n es grande*/

 function fibonacci(n) {
    let fibSeries = [];
    
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fibSeries.push(0); 
        } else if (i === 1) {
            fibSeries.push(1); 
        } else {
            let CFib = fibSeries[i - 1] + fibSeries[i - 2];
            fibSeries.push(CFib); 
        }
    }
    
    return fibSeries;
}

console.log(fibonacci(1));