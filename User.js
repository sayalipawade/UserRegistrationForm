let read=require('readline-sync');

console.log("***********Welcome to user registration**********")

/**
 * Constants
 */
let validNamePattern = new RegExp("^[A-Z]([a-zA-Z]{2,})$");

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