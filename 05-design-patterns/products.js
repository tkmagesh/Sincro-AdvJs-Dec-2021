var products = [
	{id : 6, name : 'Pen', cost : 50, units : 20, category : 'stationary'},
	{id : 9, name : 'Ten', cost : 70, units : 70, category : 'stationary'},
	{id : 3, name : 'Len', cost : 60, units : 60, category : 'grocery'},
	{id : 5, name : 'Zen', cost : 30, units : 30, category : 'grocery'},
	{id : 1, name : 'Ken', cost : 20, units : 80, category : 'utencil'},
    {id : 7, name : 'Mouse', cost : 100, units : 20, category : 'electronics'}
];

/* 
sorting
filtering
grouping
pubsub
*/

/* Pattern applied */
/* 
    strategy pattern - comparers
    specfication pattern - criteriaFn / predicate
    decorator pattern - getDescComparer, negate
*/

/* console.group('Initial List')
    console.table(products);
console.groupEnd();

console.group('Soring')
    console.group('Default Sorting [by id]')
        //sorting
        console.table(products)
    console.groupEnd();

    console.group('By Name')
        //sorting
        console.table(products)
    console.groupEnd();
console.groupEnd();

console.group('Filtering')
    console.group('Costly products [cost > 50]')
        //filter
        console.table(products)
    console.groupEnd();
console.groupEnd();
 */
function describe(title, fn){
    console.group(title);
    fn();
    console.groupEnd();
}

function describeGroup(groupedObj){
    for(var key in groupedObj){
        describe('Key - [' + key + ']', function(){
            console.table(groupedObj[key])
        });
    }
}

describe('Initial List', function(){
    console.table(products);
});

describe('Soring', function(){
    describe('Default Sorting [by id]', function(){
        function sortProducts(){
            for (var i = 0; i < products.length-1; i++) {
                for (var j = i + 1; j < products.length; j++){
                    if (products[i].id > products[j].id ){
                        var temp = products[i];
                        products[i] = products[j];
                        products[j] = temp;
                    }
                }
                
            }
        }
        sortProducts();
        console.table(products)
    });
    function sort(list, comparer){
        var comparerFn;
        if (typeof comparer === 'function'){
            comparerFn = comparer;
        }
        if (typeof comparer === 'string'){
            comparerFn = function(p1, p2){
                if (p1[comparer] < p2[comparer]) return -1;
                if (p1[comparer] > p2[comparer]) return 1;
                return 0
            }
        }
        if (!comparerFn) return;
        for (var i = 0; i < list.length-1; i++) {
            for (var j = i + 1; j < list.length; j++){
                if ( comparerFn(list[i], list[j]) > 0 ){
                    var temp = list[i];
                    list[i] = list[j];
                    list[j] = temp;
                }
            }
            
        }

    }

    function getDescComparer(comparerFn){
        return function(){
            return comparerFn.apply(this, arguments) * -1
        }
    }
    describe('Any list by any attribute', function(){
        /* function sort(list, attrName){
            for (var i = 0; i < list.length-1; i++) {
                for (var j = i + 1; j < list.length; j++){
                    if (list[i][attrName] > list[j][attrName] ){
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
                }
                
            }
        } */
        describe('Products By Name', function(){
            sort(products, 'name')
            console.table(products)
        });
    })
     describe('Any list by any comparer', function(){
        /* function sort(list, comparerFn){
            for (var i = 0; i < list.length-1; i++) {
                for (var j = i + 1; j < list.length; j++){
                    if ( comparerFn(list[i], list[j]) > 0 ){
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
                }
                
            }
        } */
        describe("Proucts by value ", function(){
            var productComparerByValue = function(p1, p2){
                var p1Value = p1.cost * p1.units,
                    p2Value = p2.cost * p2.units;
                if (p1Value > p2Value) return 1
                if (p1Value < p2Value) return -1
                return 0;
            }
            describe('Sorting Products By Value (cost * units )', function(){
                
                sort(products, productComparerByValue)
                console.table(products)
            });
            describe('Products By Value (cost * units ) in descending order', function(){
                var productComparerByValueDesc = getDescComparer(productComparerByValue)
                sort(products, productComparerByValueDesc)
                console.table(products);
            });
        })
    })

    
});
/* 
    L < R => < 0
    L > R => > 0
    L == R =>  == 0
 */

describe('Filtering', function(){
    describe('Costly products [cost > 50]', function(){
        function filterCostlyProducts(){
            var costlyProducts = [];
            for(var i = 0; i < products.length; i++)
                if (products[i].cost > 50)
                    costlyProducts.push(products[i])
            return costlyProducts;
        }
        var costlyProducts = filterCostlyProducts()
        console.table(costlyProducts)
    });
    describe("Any list by any criteria", function(){
        function filter(list, criteriaFn){
            var result = [];
            for(var i = 0; i < list.length; i++)
                if (criteriaFn(list[i]))
                    result.push(list[i])
            return result;
        }
        function negate(criteriaFn){
            return function(){
                return !criteriaFn.apply(this, arguments)
            }
        }
        describe("Products by cost", function(){
            var costlyProductCriteria = function(product){
                return product.cost > 50;
            }
            describe('costly products [cost > 50]', function(){
                var costlyProducts = filter(products, costlyProductCriteria)
                console.table(costlyProducts)
            })
            describe('affordable products', function(){
                /* 
                var affordableProductCriteria = function(product){
                    return !costlyProductCriteria(product);
                } 
                */
               var affordableProductCriteria = negate(costlyProductCriteria);
                var affordableProducts = filter(products, affordableProductCriteria)
                console.table(affordableProducts)
            })
        })

        describe('Products by units', function(){
            var undetStockedProductCriteria = function(product){
                return product.units < 50;
            }
            describe('understocked products [units < 50]', function(){
                var underStockedProducts = filter(products, undetStockedProductCriteria)
                console.table(underStockedProducts)
            })
            describe('wellStocked products', function(){
                /* var wellStockedProductCriteria = function(product){
                    return !undetStockedProductCriteria(product)
                } */
                var wellStockedProductCriteria = negate(undetStockedProductCriteria)
                wellStockedProducts = filter(products, wellStockedProductCriteria)
                console.table(wellStockedProducts);
            })
        });
    })
});


describe('grouping', function(){
    function groupBy(list, keySelectorFn){
        var result = {};
        for(var i = 0; i < list.length; i++){
            var key = keySelectorFn(list[i])
            if (typeof result[key] === 'undefined')
                result[key]= [];
            result[key].push(list[i])
        }
        return result;
    }
    describe("Products by category", function(){
        var categoryKeySelector = function(product){
            return product.category;
        }
        var productsByCategory = groupBy(products, categoryKeySelector);
        describeGroup(productsByCategory);
    })
})