console.log(Math.PI);
console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

const myObj = {
    userName: "Hithesh",
    email: "hithest@gmail.com",

    getGmail: function() {
        console.log(this.email);
    }
}

// console.log(Object.getOwnPropertyDescriptor(myObj, "email"));

Object.defineProperty(myObj, 'email', {
    // writable: false,
    enumerable: false
})

for (let [key, value] of Object.entries(myObj)) {
    if(typeof value !== 'function'){   
        console.log(`${key}: ${value}`);
    }
}

// console.log(Object.getOwnPropertyDescriptor(myObj, "email"));

