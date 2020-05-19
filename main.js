const User=require('./User')
let read=require('readline-sync');

console.log("***********Welcome to user registration**********")

/**
 * Constants
 */
let VALIDNAMEPATTERN = new RegExp("^[A-Z]([a-zA-Z]{2,})$");
let VALIDEMAILPATTERN=new RegExp("^[a-z][a-z0-9]*[.+-]?[a-z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]{2,3}([.]{1}[a-z]{2,3})?$");
let VALIDMOBILEPATTERN=new RegExp("^[0-9]{2}[0-9]{10}");
let VALIDPASSWORD=new RegExp("^(?=.*[A-Za-z0-9!@#$%^&*])(?=.*[0-9])(?=.*[0-9a-z])(?=.*[A-Z])(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$");

const user=new User();

/**
 * Checking first name is valid or not
 */
let firstName = read.question("Enter valid first name : ");
user.patternMatching(firstName,VALIDNAMEPATTERN);

/**
 * Checking last name is valid or not
 */
let lastName=read.question("Enter valid Last name:");
user.patternMatching(lastName,VALIDNAMEPATTERN);

/**
 * Checking email is valid or not
 */
let email=read.question("Enter Email:");
user.patternMatching(email,VALIDEMAILPATTERN);

/**
 * Checking mobile is valid or not
 */
let mobile=read.question("Enter Mobile:");
user.patternMatching(mobile,VALIDMOBILEPATTERN);

/**
 * Password should have at least one special symbol
 */
let password=read.question("Enter Password:");
user.patternMatching(password,VALIDPASSWORD);



