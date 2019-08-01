// var name = "Jack";
// var age = 23;
//
// var message = "Hi, my name is " + name + " and I am " + age + " years old!";

// var firstName ="John";
// var lastName = "JacobJingleHeimerSmith";
// var dateOfBirth ="10-09-82";
// var age = 23;
// var profileImgUrl = "http://coolpicks.com/johnjacob.jpg";
//
// var loginWelcomeMessage = "Welcome, " + firstName + "! Happy " + age + "rd birthday!";
//
//
//
// console.log(loginWelcomeMessage);

// var sum = 10 + 15;
// var sub = 15 - 10;
// var mul = 10 * 3;
// var div = 10 / 3;
// var mod = 10 % 3;
//
// var msg = "10 / 3 = 3 with a remainder of " + mod;
//
// var result = 10 * ((5 + 3) - 4);
//
//
// console.log(result);

// var myAccountBalance = 300;
// var nikeSBShoes = 599.23;
// var coupon = 400;

// == equal to
// === ??
// <= less than or equal to
// >= greater than or equal to

// var val1 =23;
// var val2 ="23";
//
// if (val1 !== val2)
//     console.log("These are not the same!");
// else
//     console.log("One of these IS like the other...");


// if (nikeSBShoes <= myAccountBalance) {
//     myAccountBalance -= nikeSBShoes;
//     console.log("We just bought some dope shoes!");
//     console.log("Account Balance: " + myAccountBalance);
// } else if (nikeSBShoes - coupon <= myAccountBalance) {
//     console.log("We just bought some dope shoes with coupon!");
//     myAccountBalance -= nikeSBShoes - coupon;
//     console.log("Account Balance: " + myAccountBalance);
// } else {
//     console.log("You dont have enough money!");
// }

// var students = ["Timmy", "Janessa", "Arun"];
//
// var naughtyList = [];
// naughtyList.push(students[0]);
//
// var index = naughtyList.indexOf("Timmy");
// var index2 = naughtyList.indexOf("Arun");
//
// if (index > -1) {
//     naughtyList = naughtyList.splice(index, 1);
// }
//
// console.log(area(10,15));
//
//
// function area(length, width) {
//     return length * width;
// }
//
// var bankBalance = 500;
//
// function makeTransaction(priceOfSale) {
//     console.log(bankBalance);
//     if (priceOfSale <= bankBalance) {
//         bankBalance -= priceOfSale;
//         console.log("Purchase Successful");
//     } else{
//         console.log("Insufficient Funds");
//     }
// }
//
// makeTransaction(79.00);
// makeTransaction(2.32);
// makeTransaction(10.45);
// makeTransaction(450.00);
//
// var transaction = function(priceOfSale) {
//     console.log(bankBalance);
//     if (priceOfSale <= bankBalance) {
//         bankBalance -= priceOfSale;
//         console.log("Purchase Successful");
//     } else{
//         console.log("Insufficient Funds");
//     }
// };
//
// transaction(10);
//
// var printCustomerName = function (first, last) {
//     console.log("First Name: " + first + " Last Name: " + last);
// };
//
// var applyForCredtiCard = function(credtiScore, soul) {
// //    call some functions to process application
// };
//
// var bankOperations = [];
// bankOperations.push(transaction);
// bankOperations.push(printCustomerName);
// bankOperations.push(applyForCredtiCard);



// var student0 = {
//     firstName: "Jayne",
//     lastName: "Looo",
//     age: 8,
//     greeting:
// };
//
// console.log(student0.greeting());
//
// // Creates a new empty object
// var student1 = new Object();
// student1.firstName = "John";
// student1.lastName = "Parker";
// student1.age = 7;
//
// var student2 = {};
// student2.firstName = "Zack";
// student2.label = "Bobo";
// student2.age = 5;


//
var students = [];

function Student(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting = function () {
        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
    };
}

students.push(new Student("Jenny","Laga",5));
students.push(new Student("Timmy","Turner",8));
students.push(new Student("Carl","Jr",4));

var student = students[0];

for (var key in student){
    console.log(student[key]);
}

// students.push(student0);
// students.push(student1);
// students.push(student2);
//
// for (var index = 0; index < students.length; index++) {
//     var student = students[index];
//     console.log(student.greeting());
// }

// console.log(student.firstName);
// console.log(student.lastName);
// console.log(student["firstName"]);
// console.log(student["lastName"]);

