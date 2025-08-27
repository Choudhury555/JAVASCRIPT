// WeakMap for caching object computations
const cache = new WeakMap();

function compute(obj) {
    if (!cache.has(obj)) {
        console.log("Calculating...");
        cache.set(obj, obj.num * 2);
        return cache.get(obj);
    } else {
        console.log("From Cache");;
        return cache.get(obj);
    }
}

let data = { num: 10 };
console.log(compute(data));
console.log(compute(data));

let data_1 = { num: 25 };
console.log(compute(data_1));
