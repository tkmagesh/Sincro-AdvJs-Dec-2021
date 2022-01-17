function add(x,y){
    console.log(x + y);
}

function subtract(x,y){
    console.log(x - y);
}

function logDecorator(fn){
    return function(...args){
        console.log("Before invocation");
        var result = fn(...args)
        console.log("After invocation");
        return result;
    }
}

var add = logDecorator(add);
var subtract = logDecorator(subtract);

function profile(fn){
    return function(...args){
        var start = new Date();
        var result = fn(...args);
        var end = new Date()
        console.log('time taken : ', end - start)
        return result;
    }
}

var add = profile(add)
var subtract = profile(subtract)

//Pure function
/*  
    - with no side effects
    - the invocation of the function can be replaced with the result of the function without affecting the outcome
        - it is possible only when the function depends ONLY only on the given inputs
 */