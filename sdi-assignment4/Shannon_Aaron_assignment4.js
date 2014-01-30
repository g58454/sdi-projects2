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
    var check = num.split("-");
    var check = num.split(" ");
    
    if (check[0].length === 3){
        if (check[1].length === 3) {
            if (check[2].length === 4) {
                console.log("This is a phone number.");
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }else{
        return false;
    }    
};

//This will check to see if the "Email Address" follows a pattern


//Function calling
var returnPhoneNumber = myPhoneNumber(prompt("Enter a phone number: *please use the '-' format*"));
console.log(returnPhoneNumber);