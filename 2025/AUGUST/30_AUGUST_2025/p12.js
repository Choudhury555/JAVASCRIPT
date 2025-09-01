// Class Counter using this
class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
        console.log(this.count);
    }

    decrement() {
        this.count--;
        console.log(this.count);
    }
}

const c = new Counter();
c.increment();//1
c.increment();//2
c.increment();//3
c.decrement();//2
c.decrement();//1