function setUserName(username) {
    this.username = username;
    // console.log("called");
}

function createUser(username, email, possword){
    setUserName.call(this, username); // the reason of using .call in this line is to hold the refrence, if we dont use the .call() function eventhough function is called after execution that fucntion the EC of that function is removed form the global EC and also varaiable inside that fucntion also deleted. SO in order to keep the refernce of that function we use .call() method. 'this' is passed inside the call method to set the userName to the current context in this case createUser() 

    this.email = email;
    this.possword = possword
}

const user = new createUser("chai", "chaiaurcode@Fb.com", 9991);
// console.log(user);

