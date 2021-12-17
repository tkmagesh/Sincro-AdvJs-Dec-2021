describe("A Calculator", function(){
	it("Should be able to add two numbers", function(){
		//Arrange
		var number1 = 10,
			number2 = 20,
			expectedResult = 30;

		//Act
		var result = add(number1, number2);

		//Assert
		expect(result).toBe(expectedResult);
	});
	it("Should be able to add two numbers in string format", function(){
		//Arrange
		var number1 = "10",
			number2 = "20",
			expectedResult = 30;

		//Act
		var result = add(number1, number2);

		//Assert
		expect(result).toBe(expectedResult);
	});
	it("Should be able to treat non numeric string as zero", function(){
		//Arrange
		var number1 = "10",
			number2 = "abc",
			expectedResult = 10;

		//Act
		var result = add(number1, number2);

		//Assert
		expect(result).toBe(expectedResult);
	});
	it("Should be able to add two functions returning numbers", function(){
		//Arrange
		var f1 = function(){ return 10;},
			f2 = function(){ return 20;},
			expectedResult = 30;

		//Act
		var result = add(f1, f2);

		//Assert
		expect(result).toBe(expectedResult);
	});
	it("Should be able to add two functions returning numbers in string format", function(){
		//Arrange
		var f1 = function(){ return "10";},
			f2 = function(){ return "20";},
			expectedResult = 30;

		//Act
		var result = add(f1, f2);

		//Assert
		expect(result).toBe(expectedResult);
	});
	it("Should be able to add two functions returning functions returning numbers in string format", function(){
		//Arrange
		var f1 = function(){ return function(){ return "10";};},
			f2 = function(){ return function(){ return "20";};},
			expectedResult = 30;

		//Act
		var result = add(f1, f2);

		//Assert
		expect(result).toBe(expectedResult);
	});
	it("Should be able to add only one number", function(){
		//Arrange
		var number1 = 10,
			expectedResult = 10;

		//Act
		var result = add(number1);

		//Assert
		expect(result).toBe(expectedResult);
	});
	it("Should return zero when added with no values", function(){
		//Arrange
		var	expectedResult = 0;

		//Act
		var result = add();

		//Assert
		expect(result).toBe(expectedResult);
	});

	it("Should add varying number of arguments", function(){
		//Arrange
		var	expectedResult = 100;

		//Act
		var result = add(10,20,30,40);

		//Assert
		expect(result).toBe(expectedResult);
	});
	it("Should add array of numbers", function(){
		//Arrange

		var	numbers1 = [10,20],
			numbers2 = [30,40],
			expectedResult = 100;

		//Act
		var result = add(numbers1, numbers2);

		//Assert
		expect(result).toBe(expectedResult);
	});

	it("Should add nested array of numbers", function(){
		//Arrange

		var	numbers = [10,[20,[30,[40]]]]
			expectedResult = 100;

		//Act
		var result = add(numbers);

		//Assert
		expect(result).toBe(expectedResult);
	});

	it("Should be able to add two functions returning array of numbers in string format", function(){
		//Arrange
		var f1 = function(){ return ["10","30"];},
			f2 = function(){ return ["20","40"];},
			expectedResult = 100;

		//Act
		var result = add(f1, f2);

		//Assert
		expect(result).toBe(expectedResult);
	});

	it("Should be able to add array of functions returning array of numbers in string format", function(){
		//Arrange
		var f1 = function(){ return ["10","30"];},
			f2 = function(){ return ["20","40"];},
			expectedResult = 100;

		//Act
		var result = add([f1, f2]);

		//Assert
		expect(result).toBe(expectedResult);
	});
});
