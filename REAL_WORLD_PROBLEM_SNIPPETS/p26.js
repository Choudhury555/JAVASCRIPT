// Count word frequency in a sentence using Map
function wordFrequency(str){
    const words = str.toLowerCase().split(" ");
    // console.log(words);//[ 'js', 'is', 'fun', 'and', 'js', 'is', 'powerful' ]
    
    const m = new Map();

    for(let word of words){
        if(m.has(word)){
            m.set(word,(m.get(word)+1));
        }else{
            m.set(word,1);
        }
    }
    return m;
}

console.log(wordFrequency("JS is fun and JS is powerful"));
// Output: Map { 'js' => 2, 'is' => 2, 'fun' => 1, 'and' => 1, 'powerful' => 1 }