class Student extends Person { 
    constructor(id, age, name, lastname, group, address){
        super(id, age, name, lastname);
        this.curso = curso; 
        this.address = address;
    }

    toStringStudent(){
        return super.toStringPerson() + 
        "Group " + this.group + "<br>" +
        "Address " + this.address + "<br>";
    }
}