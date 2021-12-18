function Employee(id, name, salary){
    //this -> new object
    this.id = id;
    this.name = name;
    this.salary = salary;
    //this -> returned by default

    //method 
}
Employee.prototype.display = function(){
    console.log(this.id, this.name, this.salary);
};

Employee['staticMethod'] = function(){
    console.log('A static method of an Employee class')
}