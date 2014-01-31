//alert("JavaScript works!");

//Aaron Shannon
//SDI 1401
//Assignment 4
//January 30, 2014

//Global Variables
var myString = "Hello";
var myBoolean = true;
var myNumber = 26;


//This function will test to see if the "Phone Number" that is typed in, is indeed a phonenumber
var myPhoneNumber = function(num){
    var areaCode = num.substring(0,num.indexOf("-"));
    var startNum = num.substring(num.indexOf("-")+1, num.lastIndexOf("-"));
    var endNum = num.substring(num.lastIndexOf("-")+1, num.length);
    if (areaCode.length === 3){
        console.log(true);
        if (startNum.length === 3) {
            console.log(true);
            if (endNum.length === 4) {
                console.log("This is a phone number.");
                return true;
            }else{
                
            }
        }else{
            
        }
    }else{
        console.log("This is not a phone number.");
        return false;
    }    
};

//This will check to see if the "Email Address" follows a pattern
var myEmailAddress = function(email){
    check1 = email.indexOf("@");
    check2 = email.lastIndexOf(".");
    if (email !== "") {
        if (check1 !== -1||check2 !== -1) {
            if (check2 > check1) {
                if (check2 - check1 !== 1) {
                    console.log("This is an Email Address.");
                    return true;
                }else{
                   console.log("This is not an email address.");
                   return false;
                }
            }else{
                console.log("This is not an email address.");
                return false;
            }
        }else{
            console.log("This is not an email address.");
            return false;
        }
    }else{
        console.log("This is not an email address.");
        return false;
    }
    
};

//This funciton tests for a URL.
var myUrl = function(url){
    var start = url.substring(0, url.indexOf(":")+1);
    if (start === "http:") {
        console.log("That is a URL");
    }else{
        if (start === "https:") {
            console.log("This is a URL.");
        }else{
            console.log("This is not a URL.");
            return false;
        }
    }
};

//This function will capitalize the first letter and return it back
var myCaptialName = function(name){
    var firstName = name.substring(0, name.indexOf(" "));
    var lastName = name.substring(name.indexOf(" ")+1, name.length);
    var capitalFirstName = firstName.substring(0,1).toUpperCase() + firstName.substring(1, firstName.length);
    var capitalLastName = lastName.substring(0,1).toUpperCase() + lastName.substring(1, lastName.length);
    return (capitalFirstName + " " + capitalLastName);
};

//This function will format the decimal place of any number to the thenth's place
var myDecimalFormat = function(num1, num2){
    var total = num1 + num2;
    var totalFixed = total.toFixed(1);
    return totalFixed;
};

//This will search an Array for the smallest number
var myParse = function(pass){
    var newPass = parseFloat(pass);
    if (typeof(newPass) === "number") {
        console.log("This is a number.");
        return newPass;
    }else{
        console.log("This is not a number.");
    }
};

//Function calling
/*var returnPhoneNumber = myPhoneNumber(prompt("Enter a phone number: *please use the '-' format*"));
console.log(returnPhoneNumber);

var returnEmailAddress = myEmailAddress(prompt("Please enter your email address:"));
console.log(returnEmailAddress);

var myReturnUrl = myUrl(prompt("Enter in a url:"));
console.log(myReturnUrl);

var myReturnCapitalName = myCaptialName(prompt("What is your first and last name?"));
console.log(myReturnCapitalName);

var myReturnDecimal = myDecimalFormat(3.1449879879879, 32.1628928098);
console.log(myReturnDecimal);*/

var myReturnParse = myParse(prompt("Pick a number, any number"));
console.log(myReturnParse + " This is a true number.");

