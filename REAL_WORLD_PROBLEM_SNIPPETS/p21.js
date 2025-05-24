// Calculate total cart value
const cart = [
    { item: "Book", price: 120 },
    { item: "Pen", price: 30 },
    { item: "Notebook", price: 80 }
];

const total = cart.reduce((acc,ele)=>acc+ele.price,0);
console.log(total);//230