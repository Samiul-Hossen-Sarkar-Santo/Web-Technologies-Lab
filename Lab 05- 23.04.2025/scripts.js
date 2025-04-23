document.getElementById("text").innerText = "5+6=????? wanna know? Click the button below!!!";
console.log("Holy molyyyy!!! This worksss!!!!");
let a = 31;
let b = 5;

var sum = a + b;
const diff = a - b;
const mult = a * b;
const div = a / b;
const rem = a % b;

console.log(sum, diff, mult, div, rem)

if(sum <= 50){
    sum = 50;
}

console.log("Sum now is: "+sum)

var itr = 0;

while(b != 0){
    console.log("iteration " + itr);
    itr++;
    b--;
}
