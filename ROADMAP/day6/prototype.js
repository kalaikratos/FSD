
   function Student(name, email, phoneNumber) {
    this.name = name;
    this.email =email;
    this.phoneNumber = phoneNumber;
}

Student.prototype.sayHello = function() {
    return "Hello, " + this.name + "!";
};

Student.prototype.getDetails = function() {
    return "Name: " + this.name + ", Email: " + this.email + ", Phone Number: " + this.phoneNumber;
};

Student.prototype.getEmail = function() {
    return this.email;
};

Student.prototype.getPhoneNumber = function() {
    return this.phoneNumber;
};


var student1 = new Student("kalai", "kalaiarasan2796@gmail.com", "9578095265");

console.log(student1.sayHello());  
console.log(student1.getDetails());  
console.log(student1.getEmail());  
console.log(student1.getPhoneNumber());  
