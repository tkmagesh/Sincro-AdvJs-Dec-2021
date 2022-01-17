var spinner = (function(){
    var instance;

    function init(){
        //private members
        var _counter = 0;

        function increment(){
            return ++_counter;
        }

        function decrement(){
            return --_counter;
        }

        return { increment, decrement }
    }

    return {
        getInstance : function(){
            if (!instance)
                instance = init();
            return instance;
        }
    }
})()