class VehiculoFactory {
    constructor() {
        this.createVehiculo = function(type) {
            let vehiculo;
            if( type === 'Auto' || type === 'Sedan') vehiculo = new Auto();
            else if (type == 'Motocicleta') vehiculo = new Motocicleta();
            vehiculo.licencia = function() {
                return `el Siguiente Vehiculo: ${this._type} requiere de licencia`;
            }

            return vehiculo;
        }
    }
}

class Auto {
    constructor() {
        this._type = 'Auto';
        this.caracteristica = function() {
            return 'Tiene 4 ruedas'
        }
    }
}

class Motocicleta {
    constructor() {
        this._type = 'Moto';
        this.caracteristicas = function() {
            return 'Tiene dos ruedas'
        }
    }
}

// creating objects
const factory = new VehiculoFactory();

const myAuto = factory.createVehiculo('Sedan');
const myMotocicleta = factory.createVehiculo('Motocicleta');

console.log(myAuto.licencia());
console.log(myMotocicleta.licencia());
console.log('Mi Auto', myAuto.caracteristica());
console.log('Mi Moto', myMotocicleta.caracteristicas());


