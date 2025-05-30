// Add a method to all arrays using prototype
Array.prototype.last = function(){
    return this[this.length-1];
}

const numbers = [1, 2, 3, 4];
console.log(numbers.last()); // 4