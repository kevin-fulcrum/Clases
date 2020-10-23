/*
crear una funcion que le pase como callback una funcione albafetivamente un arreglo
*/
const words = [
    "Jose",
    "Pedro",
    "Maria",
    "Jesus",
    "Joel",
    "Josue",
    "Alberto",
    "David",
    "Ivan",
  ];
  
  function OrderWords(OrderWord) {
    OrderWord();
  }
  
  OrderWords(function () {
    words.sort();
    console.log(words);
  });
  
  /*
  Crea una función que le pase como callback una función que liste
  los elementos del siguiente arreglo.
   ['Jose' 'Pedro', 'Maria', 'Jesus', 'Joel', 'Josue']
  */
  
  const name = ["Jose", "Pedro", "Maria", "Jesus", "Joel", "Josue"];
  
  function ListName(ListNames) {
    ListNames();
  }
  
  ListName(function () {
    console.log(name);
  });
  
  /*
  Crea una función que le pase como callback una función que sume los articulos de diferentes 
  facturas [ { id: 1, products: [ { id: 21232, product: 'Leche', price: 60, qty: 1 }, { id: 212111, product: 'Agua', price: 20, qty: 1 }, { id: 11232, product: 'Queso', price: 80, qty: 1 }
  ], totalPrice: 160, currency: 'USD' }, { id: 2, products: [ { id: 33332, product: 'Mantequilla', price: 40, qty: 2 }, { id: 41231283, product: 'Refresco', price: 35, qty: 1 }, { id: 12315123, product: 'Agua gasificada', price: 25, qty: 1 }
  ], totalPrice: 140, currency: 'USD' } ]
  */
  
  const bill = [
    {
      id: 1,
      products: [
        { id: 21232, product: "Leche", price: 60, qty: 1 },
        { id: 212111, product: "Agua", price: 20, qty: 1 },
        { id: 11232, product: "Queso", price: 80, qty: 1 },
      ],
      totalPrice: 160,
      currency: "USD",
    },
    {
      id: 2,
      products: [
        { id: 33332, product: "Mantequilla", price: 40, qty: 2 },
        { id: 41231283, product: "Refresco", price: 35, qty: 1 },
        { id: 12315123, product: "Agua gasificada", price: 25, qty: 1 },
      ],
      totalPrice: 140,
      currency: "USD",
    },
  ];
  
  function calculatePrices(calculatePrice) {
    calculatePrice();
  }
  
  calculatePrices(function () {
    let acumulate = 0;
    for (let i = 0; i < bill.length; i++) {
      acumulate = acumulate + bill[i].totalPrice;
    }
    console.log("La suma total de las facutras es: ", acumulate);
  });