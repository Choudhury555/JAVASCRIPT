const bike = {
    brand:"Royal Enfield",
    model:"Hunter",
    year:2025
}

console.log(bike);

bike.color = "Tokyo Black"
console.log(bike);

for(let key in bike){
    console.log(key,bike[key]);
}

const {model} = bike;
console.log(model);
