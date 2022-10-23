/**
 * The slice() method can be used to create a copy of an array or return
 * a portion of an array.
 * 
 * Note: It is important to note that the slice() method does not alter the 
 * original array but insted creates a shallow copy
 */

// Ex :- 01
    const cities = ["Tokyo", "Cario", "Los Angels", "Paris", "Dhaka"];
    const newCities = cities.slice(1, 4);
    console.log(newCities); //["Tokyo", "Cario", "Los Angels", "Paris",]
    console.log(cities);    // ["Tokyo", "Cario", "Los Angels", "Paris", "Dhaka"]


    
    /**
     * You can also use negative indexes which will start extracting elements from the end of the array.

    In this example, we will set the start position at -2 which will select the last two cities in the array and return them in a new array.
     */
// Ex :- 02
    const number =[1, 2, 3, 9, 8, 7, 6, 5, 4];
    const sliceNum = number.slice(2, -5 );
    console.log(sliceNum);  //[3, 9]
    console.log(number)     //[1, 2, 3, 9, 8, 7, 6, 5, 4]