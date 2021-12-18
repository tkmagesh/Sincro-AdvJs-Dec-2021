(function(){
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        var result = x + y;
        console.log(`   [@service] returning result`)
        return result
    }

    function addSyncClient(x,y){
        console.log(`[@client] triggering the service`)
        var result = addSync(x,y)
        console.log(`[@client] result = ${result}`)
    }

    window['addSyncClient'] = addSyncClient

    function addAsync(x,y, callback){
        console.log(`   [@service] processing ${x} and ${y}`)
        setTimeout(function(){ 
            var result = x + y;
            console.log(`   [@service] returning result`)
           callback(result)
        }, 4000);
    }

    function addAsyncClient(x,y){
        console.log(`[@client] triggering the service`)
        addAsync(x,y, function(result){
            console.log(`[@client] result = ${result}`)
        });
    }

    window['addAsyncClient'] = addAsyncClient

    function addAsyncPromise(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        var p = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){ 
                var result = x + y;
                console.log(`   [@service] returning result`)
                resolveFn(result)
            }, 4000);
        });
        return p;
    }

    function addSyncClient(x,y){
        console.log(`[@client] triggering the service`)
        var result = addSync(x,y)
        console.log(`[@client] result = ${result}`)
    }

    
    function addAsyncPromiseClient(x,y){
        console.log(`[@client] triggering the service`);
        var p = addAsyncPromise(100,200)
        p.then(function(result){
            console.log(`[@client] result = ${result}`);
        });
        var p2 = addAsyncPromise(1000,2000)
        p2.then(function(result){
            console.log(`[@client] result2 = ${result}`);
        });
    } 
   

    /* async function addAsyncPromiseClient(){
        console.log(`[@client] triggering the service`);
        var result = await addAsyncPromise(100,200)
        var result2 = await addAsyncPromise(1000,2000);
        console.log(`[@client] result = ${result}`);
        console.log(`[@client] result2 = ${result2}`)
    }  */
     

    window['addAsyncPromiseClient'] = addAsyncPromiseClient;

})();