let str = "Javascript"
console.log(str.length);

console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());

//Extracting Parts: Slice,substring,substr
console.log(str.slice(0,4));
console.log(str.substring(2,4));//here 4 is end index(not included)
console.log(str.substr(2,4));//here 4 is length(no of characters)

//Serching in a sting
let text = "Hello Javascript";

console.log(text.includes("ava"));
console.log(text.startsWith("Java"));
console.log(text.endsWith("ipt"));

//Replacing Content
let sentence = "I love Java. Java is Powerful";

console.log(sentence.replace("Java","JS"));//only replace the first occurance
console.log(sentence.replaceAll("Java","JS"));//replace all occurances


//Trimming spaces
let str1 = "  Hello     ";
console.log(str1.trim());
console.log(str1.trimStart());
console.log(str1.trimEnd());


//Repeating and padding
let str3 = "JS";
console.log(str3.repeat(3));
console.log(str3.padStart(5,'$'));
console.log(str3.padEnd(5,"%"));


//Template literals
let name = "Abhisek";
console.log(`Welcome ${name}`);




