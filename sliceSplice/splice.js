/**
 * splice() method
 * 
 * The splice() method is used to add or remove elements of an existing array 
 * and the return value will be the remove items from the array.
 * 
 * Note :- 
 *  the first number is the starting index, and the second number is the delete
 * count.
 * 
 * when we are not deleting any itmes our deleting count is zero,then the reuturn
 * vlue will just be an empty array.
 */

// Ex :- 01

const num = [1, 2, 3, 4, 11, 12, 32, 33, 23];

const splicenum = num.splice(1, 4, 20, 30, 40 , 50)

console.log(num);
console.log(splicenum);