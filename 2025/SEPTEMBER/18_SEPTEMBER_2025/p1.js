// Private Fields (#)
class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance = this.#balance + amount;
        console.log(`Deposited: ₹${amount}`);
    }

    getBalance() {
        return `Balance: ₹${this.#balance}`;
    }
}

const acc = new BankAccount();
acc.deposit(500);//Deposited: ₹500
console.log(acc.getBalance());//Balance: ₹500
// console.log(acc.#balance);//Property '#balance' is not accessible outside class 'BankAccount' because it has a private identifier.