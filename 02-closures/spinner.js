/* Assignment
(NO HTML, No Button)
Create a spinner object with 2 methods (increment, decrement)
    spinner.increment() //=> 1
    spinner.increment() //=> 2
    spinner.increment() //=> 3
    spinner.increment() //=> 4

    spinner.decrement() //=> 3
    spinner.decrement() //=> 2
    spinner.decrement() //=> 1
    spinner.decrement() //=> 0
    spinner.decrement() //=> -1

    IMPORTANT NOTE: There should NO OTHER WAY by which the outcome of the methods can be influenced

    The following SHOULD NOT be possible

    spinner.count = 10000
    spinner.increment() //=> SHOULD NOT be 10001

    OR

    count = 10000
    spinner.increment() //=> SHOULD NOT be 10001


function fn(){
    console.log('fn is invoked')
}
 */

function spinnerFactory(){
    var counter = 0;

    function increment(){
        return ++counter;
    }

    function decrement(){
        return --counter;
    }

    return {
        increment: increment,
        decrement: decrement
    }    
}

//usage: 
var spinner = spinnerFactory()
spinner.increment() //=> 1
spinner.increment() //=> 2
spinner.increment() //=> 3

spinner.decrement() //=> 2
spinner.decrement() //=> 1
spinner.decrement() //=> 0
spinner.decrement() //=> -1


//spinner as a singleton
var spinner = (function(){
    var counter = 0;

    function increment(){
        return ++counter;
    }

    function decrement(){
        return --counter;
    }

    return {
        increment: increment,
        decrement: decrement
    }
})()

