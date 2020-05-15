let read=require('readline-sync');

console.log("***********Welcome to user registration**********")

/**
 * Constants
 */
let validNamePattern = new RegExp("^[A-Z]([a-zA-Z]{2,})$");
let validEmailPattern=new RegExp("^[a-z][a-z0-9]*[.+-]?[a-z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]{2,3}([.]{1}[a-z]{2,3})?$");
let validMobilePattern=new RegExp("^[0-9]{2}[0-9]{10}");

/**
 * Function to matching the pattern
 * @param {*} inputPattern 
 * @param {*} validPattern 
 */
function patternMatching(inputPattern,validPattern) 
{
	if(validPattern.test(inputPattern))
		console.log("Valid");
	else
		console.log("Invalid");
}

/**
 * Checking first name is valid or not
 */
let firstName = read.question("Enter valid first name : ");
patternMatching(firstName,validNamePattern);

/**
 * Checking last name is valid or not
 */
let lastName=read.question("Enter valid Last name:");
patternMatching(lastName,validNamePattern);

/**
 * Checking email is valid or not
 */
let email=read.question("Enter Email:");
patternMatching(email,validEmailPattern);

/**
 * Checking mobile is valid or not
 */
let mobile=read.question("Enter Mobile:");
patternMatching(mobile,validMobilePattern);

