module.exports=class User
{
    /**
     * Function to matching the pattern
     * @param {*} inputPattern 
     * @param {*} validPattern 
     */
    patternMatching(inputPattern,validPattern) 
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
}

