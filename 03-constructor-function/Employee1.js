function Employee(id, name, salary){
    if (!(this instanceof Employee)){
        return JSON.stringify({id : id, name : name, salary : salary})
    }
    //this -> new object
    this.id = id;
    this.name = name;
    this.salary = salary;
    //this -> returned by default
}