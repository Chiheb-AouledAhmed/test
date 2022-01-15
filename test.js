console.log('a');
function adder(x){
    return function add(y){
        return x+y;
    }
}
let a = adder(5);
console.log(a(4));