let read=require('readline-sync');

console.log("***********Welcome to user registration**********")

/**
 * Constants
 */
let VALIDNAMEPATTERN = new RegExp("^[A-Z]([a-zA-Z]{2,})$");
let VALIDEMAILPATTERN=new RegExp("^[a-z][a-z0-9]*[.+-]?[a-z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]{2,3}([.]{1}[a-z]{2,3})?$");
let VALIDMOBILEPATTERN=new RegExp("^[0-9]{2}[0-9]{10}");
let VALIDPASSWORD=new RegExp("^[a-zA-Z]{8,}$");

/**
 * Function to matching the pattern
 * @param {*} inputPattern 
 * @param {*} validPattern 
 */
function patternMatching(inputPattern,validPattern) 
{
    if(validPattern.test(inputPattern))
    {
        console.log("Valid");
    }
    else
    {
        console.log("Invalid");
    }
}

/**
 * Checking first name is valid or not
 */
let firstName = read.question("Enter valid first name : ");
patternMatching(firstName,VALIDNAMEPATTERN);

/**
 * Checking last name is valid or not
 */
let lastName=read.question("Enter valid Last name:");
patternMatching(lastName,VALIDNAMEPATTERN);

/**
 * Checking email is valid or not
 */
let email=read.question("Enter Email:");
patternMatching(email,VALIDEMAILPATTERN);

/**
 * Checking mobile is valid or not
 */
let mobile=read.question("Enter Mobile:");
patternMatching(mobile,VALIDMOBILEPATTERN);

/**
 * Checking password is minimum 8 characters or not
 */
let password=read.question("Enter Password:");
patternMatching(password,VALIDPASSWORD);

