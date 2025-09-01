// "this" in strict vs non-strict mode
//Non-Strict
function nonStrictFn() {
    console.log(this);//global
}

nonStrictFn();