// Inside a Function (non-strict vs strict)
function show(){
    console.log(this);
}

show();// Browser: window, Node: global