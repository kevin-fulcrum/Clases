function propiedad(arreglo){
    console.log(arreglo);
}

function incremento (arreglo, callback){
    callback(arreglo.map(a=>a+1));
}

let numeros = [50,12,15,25,3,5]
incremento(numeros,propiedad);

