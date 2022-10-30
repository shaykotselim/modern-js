/**
    reduce() method:
    The reduce() method indicates that all elements of the original array will 
    get transformed into a new value. That new value could be an array, the length
    of which might be differnt than the original;


*/

    const numbers = [1, 2, 3, 4, 5, 6, 7];
    
       const totalNumbers = numbers.reduce((pre, cur)=>{
                return pre + cur;
        },0);// 0 is a initil value it's add before 1;

        console.log(totalNumbers)// 28