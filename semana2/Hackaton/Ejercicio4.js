//Ejercicio #4: Escriba una función de JavaScript para contar el número de vocales en una cadena dada

function cantidadVocales(cadena){
    let contador = 0;
    let vocales = "";
    for(letra of cadena){
        
        if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){            
            contador ++;
            vocales+=letra + " ";
        }
        
    }    
    console.log(`Hay ${contador} de vocales en la cadena "${cadena}" y son ${vocales}`)
    return contador;
}

cantidadVocales("Hola, ¿como estas?")