function propiedad(arreglo){
    console.log(arreglo);
}

function miFilter (arreglo,callback){
    callback(arreglo.filter(numeros=>numeros<10));
}

let numeros = [50,12,15,25,3,5] 
miFilter(numeros,propiedad);