

const div = (a,b) => {
    console.log('div', a/b)
    return a/b;
}

div(20,5);

const cstring = (a) => {
    b='algo'
    console.log('cstring', b=b+a)
    return b=b+a;
}

cstring(2);

const libreria = (c) =>{
    let libro = ["libroa","librob"]
    libro.push(c);
    console.log(libro);
}

libreria("libroc");


const bill = (product, tax) =>{
    let total=0;
    for(let i=0; i < product.length; i++){
        total += product[i] + product[i] * tax;
    }
    return total;
}

console.log('bill', bill([10,12,15], 0.18));