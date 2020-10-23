/*1) Crea una funcion que le pase como callback una función que orderne alfabeticamente un arreglo.
['Jose' 'Pedro', 'Maria', 'Jesus', 'Joel', 'Josue', 'Alberto', 'David', 'Ivan']*/

let nombres = ['Jose', 'Pedro', 'Maria', 'Jesus', 'Joel', 'Josue', 'Alberto', 'David', 'Ivan'];
function fn() {
    nombres.sort()
    console.log(nombres);
}
// a function that take another function as an argument

function higherOrderFunction(callback) {
    // when you call a function that is passed as an argument, it is referred to as a  callback
    callback();
}

// passing a function
higherOrderFunction(fn);


/*2) Crea una función que le pase como callback una función que liste los elementos del siguiente arreglo.
['Jose' 'Pedro', 'Maria', 'Jesus', 'Joel', 'Josue']*/

let nombresA = ['Jose', 'Pedro', 'Maria', 'Jesus', 'Joel', 'Josue'];
function listado() {
    for (x of nombresA){
        console.log(x);
    }
}
// a function that take another function as an argument


// passing a function
higherOrderFunction(listado);


/*
3) Crea una función que le pase como callback una función que sume los articulos de diferentes facturas
[
    {
        id: 1,
        products: [
            {
                id: 21232,
                product: 'Leche',
                price: 60,
                qty: 1
            },
            {
                id: 212111,
                product: 'Agua',
                price: 20,
                qty: 1
            },
            {
                id: 11232,
                product: 'Queso',
                price: 80,
                qty: 1
            }    
        ],
        totalPrice: 160,
        currency: 'USD'
    },
    {
        id: 2,
        products: [
            {
                id: 33332,
                product: 'Mantequilla',
                price: 40,
                qty: 2
            },
            {
                id: 41231283,
                product: 'Refresco',
                price: 35,
                qty: 1
            },
            {
                id: 12315123,
                product: 'Agua gasificada',
                price: 25,
                qty: 1
            }    
        ],
        totalPrice: 140,
        currency: 'USD'
    }
]*/

let facturas = [
    {
        id: 1,
        products: [
            {
                id: 21232,
                product: 'Leche',
                price: 60,
                qty: 1
            },
            {
                id: 212111,
                product: 'Agua',
                price: 20,
                qty: 1
            },
            {
                id: 11232,
                product: 'Queso',
                price: 80,
                qty: 1
            }    
        ],
        totalPrice: 160,
        currency: 'USD'
    },
    {
        id: 2,
        products: [
            {
                id: 33332,
                product: 'Mantequilla',
                price: 40,
                qty: 2
            },
            {
                id: 41231283,
                product: 'Refresco',
                price: 35,
                qty: 1
            },
            {
                id: 12315123,
                product: 'Agua gasificada',
                price: 25,
                qty: 1
            }    
        ],
        totalPrice: 140,
        currency: 'USD'
    }
];

function sumProductos() {
    let y=0;
    for (x of facturas){
        y += x.totalPrice  
    }
    console.log(y)
}

higherOrderFunction(sumProductos);