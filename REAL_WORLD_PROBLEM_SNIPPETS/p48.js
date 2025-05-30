// Use Object.create() to inherit
const baseAccount = {
    balance: 1000,
    showBalance() {
        return `Balance: ${this.balance}`;
    }
};

const myAccount = Object.create(baseAccount);
console.log(myAccount.__proto__);//{ balance: 1000, showBalance: [Function: showBalance] }
console.log(myAccount.showBalance());//1000

myAccount.balance=1500;

console.log(myAccount.showBalance());//1500
