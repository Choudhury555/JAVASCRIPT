// Checking unique visitors with Set

const visitors = new Set();

function visit(user) {
    visitors.add(user);
    console.log(`${user} visited. Total unique visitor ${visitors.size}`)
}

visit("Abhisek");
visit("Gudu");
visit("Abhisek");// won't increase count