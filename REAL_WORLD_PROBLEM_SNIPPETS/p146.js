// Counting word frequency using Map
const text = "hello world hello javascript world";
const wordCount = new Map();

for (let word of text.split(" ")) {
    wordCount.set(word, ((wordCount.get(word) || 0) + 1))
}

console.log(wordCount);//Map(3) { 'hello' => 2, 'world' => 2, 'javascript' => 1 }
