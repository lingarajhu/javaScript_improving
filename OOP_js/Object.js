function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.incrementScore = function() {
    this.score++;
    console.log(this.score);
}
createUser.prototype.printMe = function() {
    console.log(`Score: ${this.score}`);
}

const chai = new createUser("Chai", 22);
const tea = new createUser("Tea", 220);

// chai.printMe();
// tea.incrementScore();
// console.log(tea);

const arr = new Array(2, 3, 4, 5);
console.log(arr);


