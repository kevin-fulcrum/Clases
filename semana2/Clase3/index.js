function greet(name){
    console.log(`Hello!, ${name}!`)
}

greet('Daniel');

//function add(x,y){
  //  console.log('add', x + y)
    //return x +y;
//}

//add(2,50);

const sum = function add(x,y){
    console.log('add', x + y)
    return x +y;
}

sum(20,5)

const multiply = (x,y) => {
    console.log('multiply', x * y)
    return x * y;
}

multiply(20,5)

const square = x => {
    console.log('square', x * x)
    return x * x;
}

square(5);

const squaresimpify = x => console.log('squaresimpify',x*x)
squaresimpify(7);

