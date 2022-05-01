// Number -> Any numerical value from Positive, Negative, Fractional, Decimal

// Syntax - To create a Variable (Temp Storage)
// var variable_name = value;

// variable_name -> Any valid text, it should contains a-z, A-Z, 0-9, _, $

var age = 28;
console.log(age);

//String -> Any text value which is typed inside '' or ""

var user_email = "karthick@gmail.com";
console.log(user_email);

// Boolean -> Either true or false

var result = true;
console.log(result);

var future_value;
console.log(future_value);

user_email = "kumar@yahoo.in";
console.log(user_email);

var first_name = "Karthick";
var last_name = "Kumar";
var age = 28;
var roll_no = 487655566;

// Object -> It is collection of Key and Values

// var variable_name = {
//   key1 : value,
//   key2 : value
// }

// key -> Similar to variable_name -> it should contains a-z, A-Z, 0-9, _, $
// value -> Number, String, Boolean, Object, Array, Function

var studentInfo = {
  first_name : "Karthick",
  last_name : "kumar",
  age : 28,
  roll_no : 487655566,
  future_value : undefined
};


// Object -> 4 operation = read value, insert new value, edit exisiting value, delete existing value

// To Read a Value -> object_variable_name.key;
console.log(studentInfo.first_name);
console.log(studentInfo.age);

// To Insert a new Value -> object_variable_name.newKey = value;

studentInfo.blood_group = "A +ve";

// To Edit/Updated an exisiting value -> object_variable_name.existing_key = new_value;

studentInfo.roll_no = "7WRSD544555";

// To delete a existing Record -> delete object_variable_name.key
delete studentInfo.first_name;
console.log(studentInfo)

//Array -> It is a collection of List data

// Syntax of creating an Array

// var variable_name = [ value_1, value_2, ... , Value_n ];

// value -> Number, String, Boolean, Object, Array, Function

var listOfMark = [70, 89, 45, 78, 54];

var nameList = ["karthick","karthick", "karthick","karthick", "karthick"];

var studentList = [
  { name : "Karthick", age : 24},
  {name : "Ak", age : 20},
  { name : "Yuvi", age : 25}
];

console.log(studentList);

// Operation in Array -> 4 Operation = Insert a new value, Read the Value, Edit the exiting value, Delete the value

// Insert a new value into Array

// push() - Insert a new value at the end of array record
// array_variable_name.push(value_1, value_2, ... , value_n);

studentList.push({name: "Kumar", age: 28}, {name: "YK", age: 27});

// unshift() -> Insert a new value at the start of array record
// array_variable_name.unshift(value_1, value_2, ... , value_n);

studentList.unshift({name : "Zyan", age : 29});
console.log(studentList);

// To Read value from Array
// array_variable_name[index]

console.log(studentList[1].name)

// To edit a existing value from Array
// array_variable_name[index] = value;
studentList[2] = {name: "XYZ", age : 100};
studentList[2].age = 50;

console.log(studentList);

// To delete an value 

// pop() -> Remove a value from last of the Array
// array_variable_name.pop();
studentList.pop();

// shift() -> Remove a value from the Start of the Array
// array_variable_name.shift();

studentList.shift();

// splice() -> Remove a value from specific index of the Array
// array_variable_name.splice(index, deleteCount);

studentList.splice(2, 1);

console.log(studentList);

console.log(studentList.length);

// Function -> Block of Code 

// Syntax for Creating a Function (Function Definition)

// function function_name(){
//   // coding
// } 

// function_name -> It should be a Proper text value -> a-z, A-Z, 0-9, $, _

// Syntax for Executing/Running the Function (Function Invocation)

// function_name();

function onSubmitForm(){
  var output = "The form has been submitted successfully";
  console.log(output);
};

function onLogin(){
  var result = "You have loggin to the application";
  console.log(result);
}

var caluculate = {
  add : function(){
    var a = 20;
    var b = 50;
    var c = a + b;
    console.log(c);
  }
}

// Operators
// 1. Arithmetic Operator -> +, -, *, /, %, ++, --
// 2. Assignment Operator -> =
// 3. Comparision Operator -> <, <=, >, >=, ==, ===, !=, !== 
// 4. Logical Operator -> &&, ||, !

// && - AND
// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false

// || - OR
// true || true -> true
// false || true -> true
// true || false -> true
// false || false -> false

// ! - NOT
// ! true -> false
// ! false -> true

//Syntax - if else conditon
/*
  if(conditon) {
    // code block will execute if the condition is Truthy.
  }
  else{
    // code block will execute if the condition is Falsy.
  }
*/

/*
Problem Statement
1. We need to provide age(Number - Data type) as input for a program 
2. If the given age is greater than or equal to 18 -> Output - The user is eligible for Vote
3. If the given age is less then 18 -> Output - The user is not eligible for vote
*/

function check_voting_status(){
  var age = prompt("Enter your user age");
  if(age >= 18){
    console.log("The user is eligible for Vote");
  }
  else{
    console.log("The user is not eligible for vote");
  }
}