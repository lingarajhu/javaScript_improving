class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME IS ${this.username}`);
    }

}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password
    }

    addCourses() {
        console.log(`A new course is added by ${this.username}`);
    }
}

const chai = new Teacher("Hithesh", 'chai@gmail.com', 666);
chai.addCourses();

const masalaChai = new User("massalachai");
masalaChai.logMe();
console.log(chai instanceof User);