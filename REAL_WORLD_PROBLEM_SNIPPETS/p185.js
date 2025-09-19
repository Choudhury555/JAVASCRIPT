// BankAccount with Private Balance
class BankAccount {
    #balance = 0;

    deposit(amount) {
        if (amount < 0) {
            throw new Error("Deposit must be positive");
        }
        this.#balance = this.#balance + amount;
        console.log(`Deposited: ₹${amount}`);
    }

    withdrw(amount) {
        if (amount > this.#balance) {
            throw new Error("Insufficient Funds");
        }
        this.#balance = this.#balance - amount;
        console.log(`Withdrew: ₹${amount}`);
    }

    getBalnce() {
        return `Balance: ₹${this.#balance}`;
    }
}

const acc = new BankAccount();
acc.deposit(1000);//Deposited: ₹1000
acc.withdrw(400);//Withdrew: ₹400
console.log(acc.getBalnce());//Balance: ₹600