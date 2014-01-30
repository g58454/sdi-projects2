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
                    
                }
            }else{
                
            }
        }else{
        
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
    
    }else{
        if (start === "https:") {
            console.log("This is a URL.");
        }else{
            console.log("This is not a URL.");
            return false;
        }
    }
};

//Function calling
var returnPhoneNumber = myPhoneNumber(prompt("Enter a phone number: *please use the '-' format*"));
console.log(returnPhoneNumber);

var returnEmailAddress = myEmailAddress(prompt("Please enter your email address:"));
console.log(returnEmailAddress);

var myReturnUrl = myUrl(prompt("Enter in a url:"));
console.log(myReturnUrl);