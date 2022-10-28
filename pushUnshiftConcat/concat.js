/**
    *concat() method
    The concat method is used for joining together two (or more) arrays;

 */     
        // Ex -: 1
        const arr1 = ['first', 'second', 'third', 'four'];
        const arr2 = [1, 2, 3, 4 ];

        const concatArr = arr1.concat(arr2);
        const concatArr2 = arr2.concat(arr1);
        console.log(concatArr);
        console.log(concatArr2)