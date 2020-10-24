/*function propiedad(arreglo){
    console.log(arreglo);
}

function miReduce (arreglo,callback){
    callback(arreglo.reduce((a,b)=>a+b));
}

let numeros = [50,12,15,25,3,5] 
miReduce(numeros,propiedad);*/

function propiedad(arreglo){
    console.log(arreglo);
}

function miReduce (arreglo,callback){
    let count = 0;
    for(data of arreglo){
        count += data
    }
    callback(count)
}

let numeros = [50,12,15,25,3,5] 
miReduce(numeros,propiedad);