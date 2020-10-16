class Vehiculos {
    constructor(marca, modelo, precio){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;

        this.catalogo = function(){
            return `${this.marca} su modelo: ${this.modelo} y su precio:${this.precio}`
        }
    }

}

const Sedan = new Vehiculos('toyota', 'yaris', 10.000);

console.log(Sedan.catalogo());