function propiedad(arreglo){
    
    console.log(arreglo);
    
 }

 function miForEach (arreglo,callback){
    for (data of arreglo){
        callback(data);
    }
    
 }

 let numeros = [50,12,15,25,3,5] 
 miForEach(numeros,propiedad);