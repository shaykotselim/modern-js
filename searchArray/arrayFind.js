    // Defination of find.array() methood
/* we use the array.find() methood to find the first element that meets a certain
condition. just like a filter methood, it takes a callback as an argument and 
retunr the first element that  meets the callback condition */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

let result = numbers.find(
    function(num){
        return num >= 4;
    }
) 
console.log(result)