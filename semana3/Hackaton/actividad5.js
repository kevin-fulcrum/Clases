function propiedad(arreglo){
    console.log(arreglo);
}

function miSort (arreglo,callback){
    callback(arreglo.sort((a,b)=>a-b));
}

let numeros = [50,12,15,25,3,5]
miSort(numeros,propiedad);