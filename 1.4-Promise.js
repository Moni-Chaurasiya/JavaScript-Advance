/* Promise object represent the eventual completion or failure of an asynchronous operation and its resulting value. */

// fetch('https://somthjing.com').then().catch().finally()

const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB calls, cryptography,network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolve");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Moni", email: "moni@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Moni", password: "1@2" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolve or reject"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

async function getAllUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json(); // response.json() take time to convert therefore await is used
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getAllUser();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

// A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.
/*
response= fetch('Something') 

Data:- onfulfield[]  --> 404 error
       onRejection[] 
       
       */
