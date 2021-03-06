/* 
function add(){
    function parseArg(n){
        if (typeof n === 'function') return parseArg(n());
        if (Array.isArray(n)){
            var result = 0;
            for (var i = 0; i < n.length; i++)
                result += parseArg(n[i])
            return result
        }
        return isNaN(n) ? 0 : parseInt(n);
    }
    var result = 0;
    for (var i = 0; i < arguments.length; i++)
        result += parseArg(arguments[i])
    return result
} 
*/

//ver 2.0
/* 
function add(){
    function parseArg(n){
        if (typeof n === 'function') return parseArg(n());
        if (Array.isArray(n)) return add.apply(this, n);
        return isNaN(n) ? 0 : parseInt(n);
    }
    var result = 0;
    for (var i = 0; i < arguments.length; i++)
        result += parseArg(arguments[i])
    return result
} 
*/

//ver 3.0
/* 
function add(){
    function parseArg(n){
        if (typeof n === 'function') return parseArg(n());
        if (Array.isArray(n)) return add.apply(this, n);
        return isNaN(n) ? 0 : parseInt(n);
    }
    return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add([].slice.call(arguments,1));
} 
*/

//ver 4.0
/* 
function add(){
    function parseArg(n){
        if (typeof n === 'function') return parseArg(n());
        if (Array.isArray(n)) return add.apply(this, n);
        return isNaN(n) ? 0 : parseInt(n);
    }
    return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add(Array.prototype.slice.call(arguments,1));
} 
*/

//ver 5.0
function add(...args){
    function parseArg(n){
        if (typeof n === 'function') return parseArg(n());
        if (Array.isArray(n)) return add(...n);
        return isNaN(n) ? 0 : parseInt(n);
    }
    return args.length <= 1 ? parseArg(args[0]) : parseArg(args[0]) + add(args.slice(1));
}