let myName = "Hitesh     ";

// console.log(myName.trim().length);

let myHero = ["ironMan", "spider"];

let heroPower = {
    thor: "hammer",
    spider: "web shooter",

    getSpiderPower: function() {
        console.log(`Spide power is ${this.spider}`);
    }
}

Object.prototype.lingraj = function() {
    console.log("HI this is lingraj function");
}
// myHero.lingraj();

// heroPower.lingraj();

Array.prototype.hithesh = function() {
    console.log("Hithes says hellowww")
}

// myHero.hithesh();


// Inheritence

const User = {
    userName: 'HIthesh',
    email: "hithesh@gmail.com"
}

const teacher = {
    takeClass: true,
    rating: 4
}

const teacherAssistance = {
    takeCareOfteacher: true,
    experience: "4 years"
}

const TeachingSupport = {
    isAvailable: true,
    __proto__: teacherAssistance
}

teacherAssistance.__proto__ = teacher;
// console.log(teacherAssistance.rating);

// Modren syntax

Object.setPrototypeOf(TeachingSupport, teacher);
// console.log(TeachingSupport.takeClass);

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True lenght is: ${this.trim().length}`);
}

myName.trueLength();

"lingari".trueLength();