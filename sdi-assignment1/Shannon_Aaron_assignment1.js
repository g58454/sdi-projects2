//alert("JavaScript works!");

//Aaron Shannon
//January 9, 2014
//SDI 1401
//Project 1

//This section if for setting up my global variables
var myEscape = "\"Chomp\"";
var myString = "FIGHT!";
var myNumber = 100;
var myBoolean = true;

//This section is where I will be 'outputting' my variables
console.log(myEscape);
console.log(myString);
console.log(myNumber);
console.log(myBoolean);

//This is javascript program
var myBoolean = confirm("Are you going to Battle(OK)\nor are you going to Run(Cancel) your enemy?");
    if (myBoolean === true) {
        //code
        var input = parseInt(prompt("Are you going to Attack(1) or Stun(2)?/n(1 or 2)"));
        console.log(myString);
            if (input === 1) {
                //Math
                var health = myNumber - 100;
                console.log("The fly's health is at " + health + ";\nThat poor little fly, what's wrong with you?!");
            }else{
                var health = myNumber - 50;
                console.log("The fly's health is at " + health + ";\nHe's ok, just stunned.");
            }
    }else{
        var input = prompt("What's your name?");
        var newInput = input.toLowerCase();
            if (newInput === "chomp") {
                //String conditional
                console.log("Hey that's my name!");
            }else{
                console.log(myEscape + "is a much better name. So that's what I will call you.");
            }
    };



