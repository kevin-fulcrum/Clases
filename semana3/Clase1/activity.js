const elementos = [
    {
        name: 'taza',
        price: 20
    },
    {
        name: 'polo',
        price: 40
    },
    {
        name: 'jeans',
        price: 60
    }
];

let acumulator = 0;

elementos.map((item) => {
  acumulator += item.price;
});
console.log("La suma total del arreglo es: ", acumulator);