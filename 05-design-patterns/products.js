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
        describe('Products By Value (cost * units )', function(){
            var productComparerByValue = function(p1, p2){
                var p1Value = p1.cost * p1.units,
                    p2Value = p2.cost * p2.units;
                if (p1Value > p2Value) return 1
                if (p1Value < p2Value) return -1
                return 0;
            }
            sort(products, productComparerByValue)
            console.table(products)
        });
        describe('Products By Value (cost * units ) in descending order', function(){
           //TO BE IMPLEMENTED
        });
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
            for(var i = 0; i < products.length-1; i++)
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
            for(var i = 0; i < list.length-1; i++)
                if (criteriaFn(list[i]))
                    result.push(list[i])
            return result;
        }
        describe("Products by cost", function(){
            describe('costly products [cost > 50]', function(){
                var costlyProductCriteria = function(product){
                    return product.cost > 50;
                }
                var costlyProducts = filter(products, costlyProductCriteria)
                console.table(costlyProducts)
            })
            describe('affordable products', function(){

            })
        })

        describe('Products by units', function(){

            describe('understocked products [units < 50]', function(){
                var undetStockedProductCriteria = function(product){
                    return product.units < 50;
                }
                var underStockedProducts = filter(products, undetStockedProductCriteria)
                console.table(underStockedProducts)
            })
            describe('wellStocked products', function(){
                
            })
        });
    })
});