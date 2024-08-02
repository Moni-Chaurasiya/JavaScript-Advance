class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`User name is ${this.username}`);
  }
  static createId() {
    return `123`;
  }
}
const u = new User("moni");
//console.log(u.createId()); --> give error because createId is defined as static
console.log(u.logMe());

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`Anew course was added by ${this.username}`);
  }
}
const chai = new Teacher("chai", "chai@teacher.com", "123");

chai.logMe();
const masalaChai = new User("masalaChai");

masalaChai.logMe();

console.log(chai instanceof User);
