// - Random Ship Location Generator -

var randomLoc = Math.floor (Math.random () * 5);

// - Assigning Variables For Ships Random Locations  -

var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

// - Checking Users Guess - 
// Var Declarations Go Here:

while (isSunk == false) {

    guess = prompt("Play Battleship! Ready? Aim, Fire! (Enter a number from 0 - 6):");

    if (guess < 0 || guess > 6) {
        alert("Please enter a valid number from 0 - 6!");
    } else {
        guesses = guesses + 1;

        // - Getting A Hit & Hit Dectection Code - 

        if (guess == location1 || guess == location2 || guess == location3) {
            alert ("You Got A Hit!");
            hits = hits + 1;

            // - End User Battleship Sank Notice - 

            if (hits == 3) {
                isSunk = true;
                alert("Congradulations, You Sank Enemy Battleship!");
            }
        } else {
            alert (" You Missed!");
        }
    }
}

// -  Post-Game Stats -

var stats = "You took " + guesses + " guesses to sink the battleship, " +
"which means your shooting accuracy was " + (3/guesses*100) + "%!";
alert (stats);