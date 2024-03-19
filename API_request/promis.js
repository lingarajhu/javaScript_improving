const promiseReq = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Aysnc task is completed");
        resolve();
    }, 1000);
})

promiseReq.then(function() {
    console.log('Promise consumed');
});

new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Asyns 2nd task is completed");
        resolve();
    },1000)
}).then(function() {
    console.log("Promise two is consumned")
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Async 3 task is completed")
        resolve({userName:"lingaraj", DOB:"02/02/2003"});
    },1000)
})

promiseThree.then(function(data) {
    console.log(data.userName);
    console.log(data.DOB);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout( () => {
        let error = false;
        if(!error) {
            resolve({name: "Niranjan", email:"niranjan@gmail.com"})
        }else {
            reject("Error: something went wrong");
        }
    }, 2000)
})

promiseFour.then(function(data) {
    console.log(data);
    return data.name;
}).then(function(name) {
    console.log(name);
}).catch((e) => {
    console.log(e);
}).finally(function() {
    console.log("promise is completed");
})

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout( () => {
        let error = false;
        if(!error) {
            resolve({name: "jsvsscript", email:"js@gmail.com"})
        }else {
            reject("Error: Js went wrong");
        }
    }, 2000)
})

async function promiseFiveConsume() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }

    console.log("Aysnc to sync");
}



promiseFiveConsume();

async function getAllData() {
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary');
        const data = await response.json();;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
} 

getAllData();

fetch('https://api.github.com/users/hiteshchoudhary').then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})
