//es5
function memoize(fn){
    var cache = {};
    return function(){
        var key = JSON.stringify(arguments)
        if (!cache.hasOwnProperty(key)){
            cache[key] = fn.apply(this, arguments);
        }
        return cache[key]
    }
}

//es6
function memoize(fn){
    var cache = {};
    return function(...args){
        var key = JSON.stringify(args)
        if (!cache.hasOwnProperty(key)){
            cache[key] = fn(...args);
        }
        return cache[key]
    }
}

var add = memoize(function(x,y){
    console.log(`processing ${x} and ${y}`);
    return x + y;
})