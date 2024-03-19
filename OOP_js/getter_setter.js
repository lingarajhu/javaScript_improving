class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }


    get username() {
        return `user name is ${this._username.toUpperCase()}`;
    }

    set username(value) {
        this._username = value;
    }

    get email() {
        return `Email is ${this._email.toUpperCase()}`;
    }

    set email(value) {
        this._email = value;
    }
}

const user = new User('anirudh', 'ani@gamail.com', 7777);
console.log(user.username);
console.log(user.email);