const number = [235,8575,1,20,562,1233,2527,258,254,7485,2683];

const pares = number.filter(function(x) {
    return x % 2 === 0;
 })
 console.log(pares);
 
 const impares = number.filter(function(x) {
    return x % 2 === 1;
 })

console.log(impares);