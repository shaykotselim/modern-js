/**
    The for...in statement is useful for iterating over object properties, but to iterate over iterable objects like arrays and strings, we can use the for...of statement. The for...of statement is a newer feature as of ECMAScript 6. ECMAScript (or ES) is a scripting-language specification created to standardize JavaScript.
 
 */

        const  sharks = ['shark', 'dolphin', 'whale'];
        for(let shark of sharks){
            console.log(shark);
        }