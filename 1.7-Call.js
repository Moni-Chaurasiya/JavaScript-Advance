function SetUsername(username) {
  //complex DB call
  this.username = username;
  console.log(username);
  console.log("Called");
}
SetUsername("moni");
function createUser(username, email, password) {
  SetUsername.call(username);
  this.email = email;
  this.password = password;
}

const user = new createUser("moni", "moni@gmail.com", "123");
console.log(user);
