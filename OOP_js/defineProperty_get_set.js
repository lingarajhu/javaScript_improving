function User(password, email) {
    this._password = password;
    this._email = email;

    Object.defineProperty(this, "email", {
        get: function() {
            return this._email;
        },

        set: function(val) {
            this._email = val;
        }

    })

    Object.defineProperty(this, "password", {
        get: function() {
            return this._password;
        },

        set: function(val) {
            this._password = val;
        }

    })
}

const tea = new User(999, 'mine@gmail.com');
console.log(tea.email); 
console.log(tea.password); 