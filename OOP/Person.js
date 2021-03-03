class Person {
    constructor(id, age, name, lastname){
        this._id = id;
        this._age = age;
        this._name = name;
        this._lastname = lastname;
    }

    getDNI(){
        return this._DNI;
    }

    getAge(){
        return this._age;
    }

    toStringPerson(){
        return "Name: " + this._name + "<br>" +
        "Lastname: " + this._lastname + "<br>" + 
        "ID: " + this._id + "<br>" + 
        "Age: " + this._age + "<br>";
    }
}