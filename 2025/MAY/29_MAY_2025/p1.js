// "this" keyword
//"this" refers to the context in which a function is called
//Its values depends on how the function is invoked,not where it's defined

console.log(this);//In nodeJs global scope "this refers to" module.exports(which is initially {})

function show(){
    console.log(this);
}

show();//Object [global] in "non strict" and undeined in strict mode

