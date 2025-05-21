//ADVANCE JS OBJECT CONCEPTS

// In JS Objects are Reference Types. When you assign an object to another variable, You are copying the reference (not the actual data)

const original = {
    name:"Abhisek"
};

const copy = original;
console.log(original);
copy.name = "Changed"
console.log(original);


//CLONING OBJECTS

//SHALLOW COPY
//Copies only first level of an object.(Nested objects share the same reference)
console.log("==========SHALLOW COPY==========");

let original_1 = {
    a:1,
    b:{
        c:2
    }
}

const shallow = {...original_1};
console.log(original_1);
shallow.a = "Changed .a";//first level(so original_1 will not be affected if we change copied variable(shallow))
shallow.b.c = "Changed .b.c";//nested level(so it share the reference and original_1 will be affected if we change the copied variable(shallow))
console.log(original_1);

console.log("==========ANOTHER WAY TO CREATE SHALLOW COPY(Object.assign())==========")
original_1 = {
    a:1,
    b:{
        c:2
    }
}
//another method for shallow copy
const shallow_1 = Object.assign({},original_1)
console.log(original_1);
shallow_1.a = "Changed .a";//first level(so original_1 will not be affected if we change copied variable(shallow))
shallow_1.b.c = "Changed .b.c";//nested level(so it share the reference and original_1 will be affected if we change the copied variable(shallow))
console.log(original_1);

//DEEP COPY
//Copies all levels including all nested objects(changes in copy variable don't affect the original)

console.log("==========DEEP COPY==========");

const original_2 = {
    a:1,
    b:{
        c:2
    }
}

const deep = JSON.parse(JSON.stringify(original_2));
console.log(original_2);
deep.a = "Changed .a";//will not affect original_2
deep.b.c = "Changed .b.c";//will not affect original_2
console.log(original_2);