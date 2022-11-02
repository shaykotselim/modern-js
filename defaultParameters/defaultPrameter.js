/**
        Default function parameters allow you to initialize default values if either no values are passed, or if undefined is passed. Before, if you had something like this:
 */

            //Ex : 01
            function defaultAdd (x, y){
                console.log(x+y); // NaN
            }  
            defaultAdd()
            // I  would get NaN, not a number;

            //Ex : 2

            function defaultAdd1(x = 6 , y = 7){
                console.log(x + y)// 13
            };
            defaultAdd1()
            // You get 12! This means if you don’t specifically add values to this function when you call it, it will use the default values.