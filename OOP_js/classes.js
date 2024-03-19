// ES6 - systactial sugar  

class User {
    constructor(userName, email, password){
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `Your Password is: ${this.password}abc`;
    }

    chanageUserName() {
        return (`${this.userName.toUpperCase()}`);
    }
}

const chai = new User("Chai", "chai@gamil.con", 124);
const tea = new User("Hithesh", "hiethes@gamil.com", 666);

console.log(chai.encryptPassword());
console.log(tea.chanageUserName());

// Behind is seen 

function User(userName, email, password){
    this.userName = userName;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function() {
    return `This passwoed is ${this.password}kkkkk`;
}

User.prototype.chanageUserName = function() {
    return `YOUR NAME IS ${this.userName}`;
}

const chai1 = new User("Linagraj", "lingarj@gamil.com", 4444);
console.log(chai1.chanageUserName());
console.log(chai1.encryptPassword());