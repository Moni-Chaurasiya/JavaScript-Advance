class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}moni`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}
const me = new User("moni", "m@gmail.com", "123");
console.log(me.encryptPassword());
console.log(me.changeUsername());

//behind the scene

function User2(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User2.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User2.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User2("tea", "tea@gmail.com", "123");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
