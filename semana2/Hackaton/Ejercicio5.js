//Ejercicio #5: Escriba una función de JavaScript para imprimir un número entero con comas como miles de separadores o Datos de prueba:
/*
console.log (miles_separador (1000));
"1,000"
o console.log (miles_separador (10000.23));
"10,000.23"
o console.log (miles_separador (100000));
"100,000"
*/

//primera forma

function formatoMiles(number){
    const numero = new Intl.NumberFormat().format(number)
    console.log(numero)
}

formatoMiles(10000.185)

//segunda forma

function miles_separador(number){
    number = number.toString();
    let cont = 0;
    let numeroInverso = "";    
    let num = "";
    let numeroNormal = ""
    
    for(j = number.length - 1; j>=0;  j -= 1){
        numeroInverso += number[j];
    }    

    for(i of numeroInverso){
        if (i == '.'){
            break;
        }
            cont ++;
    }
    for (let x = 1; x < numeroInverso.slice(cont+1).length+1; x++){
        let sep = "";
        if (x%3==0){
            sep = ','
        }      
            num += numeroInverso.slice(cont+1)[x-1]+sep
    }
    for(y = num.length - 1; y>=0; y -=1 ){
        numeroNormal += num[y]
    }
    console.log(numeroNormal + number.slice(numeroInverso.slice(cont+1).length))
}

miles_separador(10000.185)