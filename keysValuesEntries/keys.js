const myobj = { 
        product: 'Laptop', 
        brand : 'Dell',
        price : 5500
}

const keysobj = Object.keys(myobj);
// console.log(keysobj);// [ 'product', 'brand', 'price' ]

const valuesobj = Object.values(myobj);
// console.log(valuesobj);//[ 'Laptop', 'Dell', 5500 ]

const entriesobj = Object.entries(myobj);
console.log(entriesobj);// [ [ 'product', 'Laptop' ], [ 'brand', 'Dell' ], [ 'price', 5500 ] ]