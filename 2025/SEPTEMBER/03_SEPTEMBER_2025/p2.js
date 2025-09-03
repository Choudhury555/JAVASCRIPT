// apply()==> Same as call(), but arguments are passed as an array.

function greet(greeting, punctuation) {
    console.log(greeting + " " + this.name + punctuation);
}

const user = { name: "Abhisek" };

greet.apply(user, ["Hi", "!!"]);//Hi Abhisek!!