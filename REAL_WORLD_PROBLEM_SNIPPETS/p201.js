// Bank Balance Validation
const account = { balance: 0 };

const proxy = new Proxy(account, {
    set(obj, prop, value) {
        if (prop == "balance" && value < 0) {
            throw new Error("Balance cannot be negative!");
        }
        obj[prop] = value;
        return true;
    }
});


proxy.balance = 1000;
console.log(proxy.balance);
// proxy.balance = -500;//Error: Balance cannot be negative!