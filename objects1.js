//singleton object
const  tinderUser = new Object ();

//const user = {}; // it is a literal object or non singleton object  


 tinderUser.id = " 123abc";     // add id  to the object
 tinderUser.name = " shyam";    // add name to the object
 tinderUser.isloggedin = false;  


//  console.log(tinderUser);

const regularuser = {
    email:"some@gmail.com",                  // nested object create 
    fullname:{                                 // nested object 
        user_fullname:{                       // nested object
            firstname:"debsankar",
            lastname:"dhara"
        }
    }
}

// console.log(regularuser.fullname.user_fullname.firstname);    // access the nested object value


// //optional chaining ---> it means the key is exist or not
// console.log(regularuser.fullname?.user_fullname.firstname);    // it means the fullname is exist or not if exist then follow the instruction
const person = {
  name: "Alice",
  address: {
    city: "New York"
  }
};

// Without optional chaining
let city = undefined;
if (person && person.address && person.address.city) {
  city = person.address.city;
}

// With optional chaining
const city = person?.address?.city;

// merging two object


const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}
const obj3 = {
    5: "a",
    6: "b"
}
// const obj3 = {obj1, obj2};   // to merge the object1 and object2

// //it is a one type of the merge method
// const new_object = Object.assign({}, obj1, obj2, obj3);  // {}-> represet the target obj1,obj2, obj3 those are source


//spread method 
const new_object= {...obj1,...obj2,...obj3};    //most probably used  in merge in object
console.log(new_object);



// it is use when data came to database the it is the form of the array of object
const users = [
    {
        id:1,
        email: "gmail@gmail.com"
    },
    {
        id:2,
        email: "email@gmail.com"
    },
    {

    }
]


console.log(users[0].email);      // users[0] means 0 index's emial 
console .log(users[1].email);     // users[1] means 0 index's emial 

console.log(tinderUser);           
console.log(Object.keys(tinderUser));     // it prints the key value if the objects which is the form of the array
console.log(Object.values(tinderUser));   // it prints the value of the objects 

console.log(Object.entries(tinderUser));    // it is use separate all key or value and store in the separated array

console.log(tinderUser.hasOwnProperty('isloggedin'));   // it is used to check the value is exist or not it produce the result the value of true or false





//important pounts------------------
// The spread operator (...) in JavaScript is used to copy, merge, or expand objects (and arrays). When used with objects, it helps create shallow copies or merge multiple objects together.

// 📦 Syntax
const newObj = { ...oldObj };

// 1. Copying an Object

const person = { name: "Alice", age: 25 };
const copy = { ...person };

console.log(copy); // { name: "Alice", age: 25 }
// ✅ copy is a new object with the same properties as person.

// 2. Merging Objects

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const merged = { ...obj1, ...obj2 };

console.log(merged); // { a: 1, b: 3, c: 4 }
// ✅ If keys overlap, later values overwrite earlier ones (b becomes 3).

// 3.✅ Adding/Overriding Properties

const user = { name: "Bob", age: 30 };
const updatedUser = { ...user, age: 31, city: "Paris" };

console.log(updatedUser); // { name: "Bob", age: 31, city: "Paris" }


// ⚠️ Note: Shallow Copy
// The spread operator does not deeply clone nested objects.
const obj = { user: { name: "Eve" } };
const copy = { ...obj };
copy.user.name = "Not Eve";

console.log(obj.user.name); // "Not Eve" 😬



//simple example
const myObject = {
    name:"Debsankar",
    age:21
}

name = "Modon";
age=22;

const newObject = {...myObject, name, age };

console.log(newObject);


// copy the reference or both object share the same memory location  tha's why is changes is apply in one object then that will be reflected in other object
const myObject = {
  name: "modon",
  age: 21,
  email: "modon@gmail.com",
};

const newObject = myObject;

newObject.course = "CS";

console.log(newObject);
console.log(myObject);




