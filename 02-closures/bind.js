function bind(fn, thisCtx){
    var args = [].slice.call(arguments, 2);
    return function(){
        if ( args.length == 0 )
            args = arguments;
        return fn.apply(thisCtx, args);
    }
}

var emp = {
    name : 'Magesh'
}

function greet(salutation, msg){
    console.log(salutation + this.name + ', ' + msg);
}

greet = bind(greet, emp)

greet('Mr.', 'Have a nice day!')

function greet(salutation, msg){
    console.log(salutation + this.name + ', ' + msg);
}


greet = bind(greet, emp, 'Shri.', 'Have a good day!')
