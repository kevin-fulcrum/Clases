function exponente (numero,callback){
    callback(numero);
}

function cuadradoycubo (numero){
    console.log(Math.pow(numero,2))
    console.log(Math.pow(numero,3))
}

exponente(2,cuadradoycubo);