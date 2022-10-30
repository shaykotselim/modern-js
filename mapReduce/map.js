/**
    map() method 

    The map() method allows you to iterate over an array and modify its
    element using callback function. The callback function will then be executed
    on each of the array's elements;
    
    

 */

    // Ex -: 01

    const numbers = [1, 2, 3, 4, 5 ];
    
    const result = numbers.map((num)=>{
                return num * 3;
    });

       const result1 = numbers.map( num=> num*2 ) // using arrow function

        console.log(result)     //[3, 6, 9, 12, 15];
        console.log(result1)    // [ 2, 4, 6, 8, 10];
        console.log(numbers)    //[1, 2, 3, 4, 5];
