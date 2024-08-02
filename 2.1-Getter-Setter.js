class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }
}
const moni = new User("moni@.com", "abc");
console.log(moni.email);

//Object --> Getter Setter
const Users = {
  _email: "moni@User.com",
  _password: "123",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const m = Object.create(Users);
console.log(m.email);

// Using function
function Userss(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const mo = new Userss("moni@chaurasiya.com", "myself");
console.log(mo.email);
