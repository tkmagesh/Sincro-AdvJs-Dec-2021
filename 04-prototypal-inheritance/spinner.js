/* 
    memory efficiency is achieved
    privacy is the price
*/
function Spinner(){
    this.__counter__ = 0;
}

Spinner.prototype.increment = function(){
    return ++this.__counter__;
};

Spinner.prototype.decrement = function(){
    return --this.__counter__;
}



/* 
    privacy is achieved
    memory is the price
*/
function Spinner(){
    var counter = 0;

    this.increment = function(){
        return ++counter;
    };

    this.decrement = function(){
        return --counter;
    }
}