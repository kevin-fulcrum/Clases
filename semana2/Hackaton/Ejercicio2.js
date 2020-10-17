
let parImpar = function (numero) {
    for (let i = 0; i < numero.length; i++) {
        if(numero[i]%2 == 0){
            console.log(`Este numero ${numero[i]} es par`)
        }else{
            console.log(`Este numero ${numero[i]} es inpar`)
        }
    }
}

parImpar([2,3,4,5]);


