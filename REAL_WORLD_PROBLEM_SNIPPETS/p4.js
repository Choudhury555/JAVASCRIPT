// Count how many times a word appears in a sentence

const countWord = (sentence,targetWord) => {
    let words = sentence.toLowerCase().split(' ');
    let count = 0;
    
    for(let w of words){
        if(w==targetWord.toLowerCase()){
            count++;
        }
    }
    return count;
}

console.log(countWord("JS is great. I love JS because JS is powerful", "js")); // Output: 3
console.log(countWord("JS is great. I love JS because JS is powerful", "JS")); // Output: 3