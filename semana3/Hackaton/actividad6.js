function operaciones (a,b,callback1,callback2){
    if(a>b){
         callback1(a,b)
    }else{
         callback2(a,b)
    }
    
}
 
function suma (a,b){
     console.log(a+b);
}
 
function resta (a,b){
     console.log(a-b);
}
 
operaciones(3,5,suma,resta)