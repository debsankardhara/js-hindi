//singleton if the oject is create through constructor then it is singleton
Object.create;  // this method create a obect using constructor

//objects literals

const mysym = Symbol("key1");     //create a symbol and use this as a  key inside the object

const user = {
    name: "Debsanakr",         // here name store as "name"  in the stirng form

    "full_name" : "Debsankar Dhara",
    age: 19,

    [mysym]: "mykey1",  // how to use  symbol as a key inside the object
    location: "WB",
    email: "Debsankar@gmail.com",
    isloggedIn: false,
    lastloginDays: ["Monday","saturday"]
}

console.log(user.name);
console.log(user["email"]);      // inside the user email must be written in the form of  String

console.log(user["full_name"]);

console.log(user[mysym]);    //it is the access method of the symbol must be follow this syntax
console.log(typeof user[mysym]);

// delete any attribute
delete user.location;


user.email = "Debsanakr1972@gmail.com";    // how to change the value of the objects

console.log(user.email);
Object.freeze(user);     //   how to lock the value of the objects  it means doesn't change the value of the object


user.email = "debsankar@gmail.com"   // it doesn't work because it already freeze
console.log(user); 

user.greeting = function(){         // how to use the function in the object
    console.log("hello  user!");
}

console.log(user.greeting());     // how to access the function using object

console.log(user.greeting);      // it return the reference the of the function


user.greetingtwo = function(){         
    console.log(`hello  user!, ${this.full_name}`);    //this keyword referce the current object of the key of the object
}

console.log(user.greetingtwo());
