// object literal

const user = {
    userName: "hithesh",
    loginCount: 9,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user info")
        console.log(`Username: ${this.userName}`);
    }
}

console.log(user.userName);
console.log(user.getUserDetails());

//  constructure function

function User(userName, loginCount, isLogedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLogedIn = isLogedIn;

    // return this;
}

const userOne = new User("Hithesh", 8, true);
const userTwo = new User("chaiAurCode", 2, false);
console.log(userOne);
console.log(userTwo);
console.log(userOne instanceof Object);

// About new keyWord
/*
    The moment you use new keyword----
    - FIRST STEP -  An empty new object is created which also called as INSTANCE
    - SECOND STEP - Constructure function is called because of the new keyWord and this will pack the all the arguments and gives to you
    - THIRD STEP - All the arguments will injects in this keyword and send it to you
*/