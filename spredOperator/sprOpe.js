//  Spered Operator 

// Ex- for Array
let number1 = [1, 2, 3, ];
let number2 = ['W', 'X', 'Y', 'Z'];

let numbers = [...number1, ...number2]; // exact copy number1 & number2
// console.log(numbers);

// Ex- For object
let myobj1 = {
    a: 1,
    b: 2, 
    c: 3
};

let myobj2 = {
    d: 4, 
    e: 5, 
    f: 6
}

let myObjs = {...myobj1, ...myobj2};
console.log(myObjs)