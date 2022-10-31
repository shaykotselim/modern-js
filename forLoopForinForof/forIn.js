/**
    For...in Loop 

    The for...in statement iterates over the properties of an object;

    Th Demonstrate, we will make a simple shark object with a few 
    name: value pairs;

 */
        // Ex : 1

        const shark = {
                specise: 'great-white', 
                color: 'Black', 
                numberOfTeeth: Infinity
        }

        for(property in shark){
            console.log(property); // Print property names of object
        }   // specise
            //color
            //umberOfTeeth