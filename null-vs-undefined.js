//undefined variable
let blank;
console.log(blank);

function add(num1,num2){
    console.log(num1,num2);
    //return num1 + num2; (not adding "return" results undefined)
}
const result = add(10,15);
console.log(result);


//missing parameter results undefined
function add(num1,num2){
    console.log(num1,num2);
    return num1 + num2;
}
const result = add(10);
console.log(result);


// accessing a non-existing property in an object results undefined
const student = {name: "boy", id:45454, age:15};
console.log(student.salary);


// accessing a non-existing value in an array results undefined
let array = [12, 78, 99];
console.log(array[5]);
