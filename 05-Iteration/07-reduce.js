

// shoppingCart 

const ShoppingCart = [
    {
        itemname : `T-Shirt`,
        price : 800,

    },
    {
        itemname : `Shirt`,
        price : 1800,

    },
    {
        itemname : `Denim plant`,
        price : 2800,

    },
    {
        itemname : `Jacket`,
        price : 3000,

    },
]

const totalPrice = ShoppingCart.reduce((acc,item) => acc + item.price,0);

console.log(totalPrice);