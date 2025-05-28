// Simulate a bank account with private balance
function createAccount(){
    let balance = 1000;

    return {
        deposit: (amount) => balance=balance+amount,
        withdraw: (amount) => balance=balance-amount,
        checkBalance: () => balance
    }
}

const myAccount = createAccount();
console.log(myAccount);//{deposit: [Function: deposit],withdraw: [Function: withdraw],checkBalance: [Function: checkBalance]}

console.log(myAccount.checkBalance());//1000
console.log(myAccount.deposit(300));//1300
console.log(myAccount.withdraw(100));//1200
console.log(myAccount.checkBalance());//1200

