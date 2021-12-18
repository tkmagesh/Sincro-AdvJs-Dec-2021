function Spinner(){
    var counter = 0;

    this.increment = function(){
        return ++counter;
    };

    this.decrement = function(){
        return --counter;
    }
}