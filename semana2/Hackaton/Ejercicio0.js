function primeraLetra(name){
    let nameString = name.split(" ");
    let resulName = "";
    for(let i=0; i < nameString.length; i++){
        resulName += nameString[i][0].toUpperCase() + nameString[i].slice(1) + " ";
    }
    console.log(resulName);
    return resulName;
}

primeraLetra('lo mejor de todo');