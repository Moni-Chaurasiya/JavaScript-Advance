// #javascript and class
// ## OOP
// ## Object
// - collection of properties and methods
// - toLowerCase

// ## why use OOP

// ## parts of OOP
//  Object literal
//  - Constructor function
//  - Prototypes
//  - Classes
//  - Instances(new,this)

// # 4 pillars
// Abstraction
// Encaplation
// Inheritance
// Polymorphism

const user = {
  username: "Moni",
  password: 123,
  login: 8,
  signedIn: true,
  getUser: function () {
    console.log("Got user detail from database");
    console.log(`Username:${this.username}`);
    console.log(this);
  },
};

console.log(user.username);
console.log(user.getUser());

//const promiseOne = new Promise();
//const date = new Data();

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  // left side is variable and right side is value

  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Good Morning ${this.username}`);
  };
  return this; // This line is optional
}
User();
//const userOne = User("Moni", 8, true);
//const userTwo = User("@moni.chaurasiya", 10, false);  // This line will overwrite the value of upper one therefore we have to use new keyword

const userThree = new User("Moni", 8, true);
const userFour = new User("@moni.chaurasiya", 10, false);

// when we use new keyword first empty object will created which is known as instance
// Constructor function will be called because of new keyword
// It will pack all the argument and inject in it
// In the fourth step we get inside the function

console.log(userThree);

// The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value.
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car);
// Expected output: true

console.log(auto instanceof Object);
// Expected output: true

// instanceof: This is a JavaScript operator used to check if an object (auto in this case) is an instance of a specific class (Car).

// This operator is useful for checking object relationships and inheritance in JavaScript, especially when dealing with classes and constructor functions.
