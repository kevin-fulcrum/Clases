/*function propiedad(arreglo){
    console.log(arreglo);
}

function miFilter (arreglo,callback){
    callback(arreglo.filter(numeros=>numeros<10));
}

let numeros = [50,12,15,25,3,5] 
miFilter(numeros,propiedad);*/

function propiedad(arreglo){
    console.log(arreglo);
}

function miFilter (arreglo,callback){
    let ar= [];
    for (dato of arreglo){
        if(dato<10){
           ar.push(dato);     
        }
    }
    callback(ar);
}

let numeros = [50,12,15,25,3,5] 
miFilter(numeros,propiedad);
