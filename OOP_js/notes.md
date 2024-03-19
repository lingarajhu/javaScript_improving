# javaScript and classes

# Do javascript have classes ?
- Yes, javascript does have classes. This featured was introduced with ECMAscript 2015 specilaziton(often refered to as ES6). However it is important to know that javascript is primarily a prototype - based language and classes are just a syntactic suger behind the it is still a prototype - based inheritance mechanism, in other words, it provides a more familier syntax for developers comming from other language like java, c++ and python.

## Object
- collection of properties and methods
- toLowerCase()

## why use OOP ?

## parts of OOP
- Object literal

- constructor function
- prototypes
- classes
- instences (new, this)


## 4 pillers
- Abstraction - 

 ```javascript

    function Car(color, make, model){
        this.color = color;
        this.make = make;
        this.model = model;

        // heiding engine information
        let engine = {
            isRunning: false,
            start: function() {
                this.isRunning = true;
                console.log("Engine started!")
            },

            stop: function() {
                this,isRunning = false;
                console.log("Engine stopped!")
            }
        };


        // public methids (abstraction)
        this.startEngine = function() {
            engine.start();
        }

        this.stopEngine = function() {
            engine.stop()
        }
    }

    let myCar = new Car("blue", "Honda", "Civic");
    myCar.startEngine();

 ```

- Encapsulation

 ```javascript

    function Car(color, make, model){
        this.color = color;
        this.make = make;
        this.model = model;

        // Private property (encapsulation)
        let year = 2023; // cannot be accesed direcly form outside 

        this.getYear = function() {
            return year;
        }  
    }

    let myCar = new Car("blue", "Honda", "Civic");
    myCar.startEngine();

 ```


- Inheritence

- Polymorphism