/**
    Rest parameters
    The rest parameters syntax allows a function to accept
    an indefinite number of arguments as an array , proving a way to rehresent
    in javascript.
 
*/

 //Ex 01
function number (a, b,...params){
    console.log(a, b)// 2, 23
    console.log(params)// [4, 445, 'shaykot', 'selim']
};

number(2, 23, 4, 445,'shaykot', 'selim');
