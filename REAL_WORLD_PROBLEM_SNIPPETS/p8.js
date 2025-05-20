// Deep access to nested properties safely
const profile = {
    user: {
        name: "Abhisek",
        address: {
            city: "Bhubaneswar",
            zip: 751001
        }
    }
};

console.log(profile.user?.address?.city);
console.log(profile.user?.name);


// console.log(profile.company.name);//Cannot read properties of undefined (reading 'name')
console.log(profile.company?.name);// undefined (no error)