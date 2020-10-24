function propiedad(arreglo){
    
    console.log(arreglo);
}

function miMap (arreglo,callback){
    callback(arreglo.map(a=>Math.pow(a,2)));
}

let numeros = [50,12,15,25,3,5]
 miMap(numeros,propiedad);