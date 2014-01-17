//alert("JavaScript works!");
//Aaron Shannon
//SDI 1401
//Assignment2
//January 16, 2014

//Declaring global varibles
var playerName = prompt("What is your name, player?/nI need to know, so I can make fun of your ridiculous name.");
var myString1 = "Hurray! " + playerName +", you have accomplised something. ";
var myString2 = "You should give yourself a pat on the back!";
var myReturnString = "I hope this works";
var myNumber = 0;
var myReturnNumber = 0;
var myBoolean = true;
var myReturnBoolean = true;


//This section is for the procedure function.
//This will check to see if the players name is worthy!
var myProcedure = function(name){
    if(name !== "Chomp"){
        console.log("Did your parent's give you that name? I'm sorry!");
    }else{
        console.log("Now that's a powerful name.");
    };    
};

//This section is for the confirm and Boolean.
//This will pester the player until they agree to play.

var booFunc = function(arg, i){
    while (i < 100 ) {
        //code
        arg = confirm("Are you sure?");
        if (arg !== true) {
            //code
            console.log("Come on, your answer can't be " + arg + ". That just ruins it.");
            i++;
        }else{
            console.log("Thank you for choosing " + arg + ". This pleases \"Chomp\". It only took "+ i +" tries.");
            return arg;
            break;
        }
    }
};

//This section will be a number function.
//Allowing it to calculate the players starting health.
var numFunc = function(num){
        var random = prompt("This is to determine your health. Enter a random code. It can be anything, I don't care.");
        for (var i = num; i< random.length; i++) {
            //code
            num += (random.length*(20/100));
            console.log("Your health is at " + num.toFixed(0) + ".");
        }
        return num.toFixed(0);
};

//This section will be combining two different strings
//Perfect for speech libraries
var stringFunc = function(string1, string2){
    var first = string1;
    var second = string2;
    var combine = first.concat(second);
    return combine;
};

//This is the function calling section.
//This will follow the procedural flowchart2
myProcedure(playerName);
myBoolean = confirm("Do you want to play?");
myReturnBoolean = booFunc(myBoolean,3);
myReturnNumber = numFunc(myNumber);
myReturnString = stringFunc(myString1, myString2);
console.log("So just to recap your choices and goodies.");
console.log("It's " + myReturnBoolean + " you were forced to play.");
console.log("Your health is at " + myReturnNumber + ".");
console.log(myReturnString);