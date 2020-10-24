/*function propiedad(arreglo){
    console.log(arreglo);
}

function miSort (arreglo,callback){
    callback(arreglo.sort((a,b)=>a-b));
}

let numeros = [50,12,15,25,3,5]
miSort(numeros,propiedad);*/

//primera forma
function propiedad(arreglo){
    console.log(arreglo);
}

function miSort (a,callback){
    let temporal=0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 1; j < (a.length - i); j++) {
            if (a[j - 1] > a[j]) {
                temporal = a[j - 1];
                a[j - 1] = a[j];
                a[j] = temporal;
            }
        }
    }
    callback(a);
}

let numeros = [50,12,15,25,3,5]
miSort(numeros,propiedad);

//Segunda Forma

function miSort2 (arreglo,callback){
    arr = []
    count = 0
    lengthPrincipal = arreglo.length
    for(let i = 0; i<lengthPrincipal; i++){
        count=arreglo[i]
        for(let j = 0; j<arreglo.length; j++){
            if(count<=arreglo[j]){
                count = count
            }else{
                count = arreglo[j]
            }
        }
        
        arr.push(count)    
        arreglo.splice(arreglo.indexOf(count), 1);
    }
    callback(arr)
}

miSort2(numeros,propiedad);