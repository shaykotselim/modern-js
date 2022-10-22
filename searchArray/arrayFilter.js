/**
     Defination of Array.Filter() method;
     We can use the array.filter() methood to find the element in array that meets
     a certain condition.
     
     For-Ex -:
     For instance, if we want to get all in an array of numbers that are gretter 
     than 10, we can do this---- 
 */
     


        // Ex - 01
     const numbers = [ 10, 14, 16, 3, 4, 1 ,12];
     const getterThanTen = numbers.filter(
                num =>num > 10 //arrow funtion & ternary operator
     );

     console.log(getterThanTen)