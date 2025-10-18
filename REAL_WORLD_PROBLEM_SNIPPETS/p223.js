// Check for Words Ending with “ing”
const text = "I am running, jumping and eating fast!";
const matches = text.match(/\b\w+ing\b/g);
console.log(matches);//[ 'running', 'jumping', 'eating' ]