//alert("JavaScript works!");
//Aaron Shannon
//SDI 1401
//Assignment3
//January 23, 2014

//Declaring global varibles
var playerName = prompt("What is your name, player?\nI need to know, so I can make fun of your ridiculous name.");
var myString1 = "Hurray! " + playerName +", you have accomplised something. ";
var myString2 = "You should give yourself a pat on the back!";
var myReturnString = "I hope this works";
var myNumber = 0;
var myReturnNumber = 0;
var myBoolean = true;
var myReturnBoolean = true;
var jSon = [{"firstName":" This is Aaron" , "lastName":"Shannon"},
            {"className":"SDI" , "classNumber":"1401"},
            {"workType":"Assignment" , "workNumber":"3"},
            {"compMonth":"January" , "compDate":"23" , "compYear":"2014"}];
var array = [];

//This will call in the JSON elements
var startFunc = function(json){
    alert(jSon[0].firstName + " " + jSon[0].lastName);
    alert(jSon[1].className + " " + jSon[1].classNumber);
    alert(jSon[2].workType + " " + jSon[2].workNumber);
    alert(jSon[3].compMonth + " " + jSon[3].compDate + ", " + jSon[3].compYear);
};

var myArray = function(array){
        array[0] = prompt("What's is the class number?");
        array[1] = prompt("What year is it?");
        return array;
}; 

//This section is for the procedure function.
//This will check to see if the players name is worthy!
var myProcedure = function(name){
    if(name !== "Chomp"){
        console.log("Did your parent's give you that name? What a silly name. I'm sorry!");
        if (name === "Aaron") {
            //code
            consol.log("That's my developers name! Cool!");
        }else{
            
        }
    }else{
        console.log("\"Chomp\" Now that's a powerful name.");
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
            console.log("Come on, your answer can't be " + arg + ".\nThat just ruins all the fun.\nNow I'm just going to keep buggin you..");
            i++;
        }else{
            console.log("Thank you for choosing " + arg + ". This pleases \"Chomp\". It only took "+ i +" tries to understand what I'm trying to do here.");
            return arg;
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
startFunc(jSon);
myArray(array);
myProcedure(playerName);
myBoolean = confirm("Do you want to play?");
myReturnBoolean = booFunc(myBoolean,3);
myReturnNumber = numFunc(myNumber);
myReturnString = stringFunc(myString1, myString2);
console.log("So just to recap your choices and goodies.");
console.log("It's " + myReturnBoolean + " you were forced to play.");
console.log("Your health is at " + myReturnNumber + ".");
console.log(myReturnString);
console.log("You answered " + array[0] + ", and " + array[1] + ". But remember I said it wat 1401 and 2014 at first");