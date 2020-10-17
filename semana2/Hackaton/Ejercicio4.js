//Ejercicio #4: Escriba una función de JavaScript para contar el número de vocales en una cadena dada

function cantidadVocales(cadena){
    let contador = 0;
    let vocales = "";
    for(letra of cadena){
        
        if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u' || letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U'){            
            contador ++;
            vocales+=letra + " ";
        }
        
    }    
    console.log(`Hay ${contador} de vocales en la cadena "${cadena}" y son ${vocales}`)
    return contador;
}

cantidadVocales("HOla, ¿como estas?")