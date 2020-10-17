function primeraLetra(palabra){
    let nameString = palabra.split(" ");
    let resultado = [];
    console.log(nameString);
    for(let i=0; i < nameString.length; i++){
        let cont = 0;
        for(let p=0; p < nameString[i].length; p++){
            cont ++;
        }
        resultado.push(cont);
    }
    let max = Math.max(...resultado);
    let min = Math.min(...resultado);
    console.log(`la palabra mas larga contiene:  ${max} caracteres y es: ${nameString[resultado.indexOf(max)]}`);
    console.log(`la palabra mas corta contiene:  ${min} caracteres y es: ${nameString[resultado.indexOf(min)]}`);
}

primeraLetra('Veamos cual es la palabra mas larga y corta');