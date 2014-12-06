/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false, document: false*/

var diceData = [];

function diceRoll(d) {
    "use strict";
    var results,
        dienumber;
    results = [];
    dienumber = d;
    while (dienumber !== 0) {
        results.push(1 + Math.floor(20 * Math.random()));
        dienumber = dienumber - 1;
    }
    return results;
}

function dieResults() {
    "use strict";
    var dienumber,
        luckofthethrow,
        die1,
        die2,
        die3,
        die4,
        die5,
        die6;
    dienumber = document.getElementById("numberofdie").value;
    die1 = document.getElementById("die1");
    die2 = document.getElementById("die2");
    die3 = document.getElementById("die3");
    die4 = document.getElementById("die4");
    die5 = document.getElementById("die5");
    die6 = document.getElementById("die6");
    if (isNaN(dienumber)) {
        alert("You're messing with the House by entering something that isn't even a number, impetuous one. Get out.");
        return;
    }
    if (dienumber > 6) {
        alert("You broke the rules by entering a number larger than 6 for the number of die cast. Try again.");
        return;
    }
    if (dienumber <= 0) {
        alert("You broke the rules by entering a number less than 1 for the number of die cast. Try again.");
        return;
    }
    if (dienumber % 1 !== 0) {
        alert("You! Get out! NOW! Bouncers, we got a rule breaker!");
        return;
    }
    luckofthethrow = diceRoll(dienumber);
    diceData = luckofthethrow;
    while (diceData.length < 6) {
        diceData.push(0);
    }
    die1.innerHTML = diceData[0];
    die2.innerHTML = diceData[1];
    die3.innerHTML = diceData[2];
    die4.innerHTML = diceData[3];
    die5.innerHTML = diceData[4];
    die6.innerHTML = diceData[5];
}
//Next, 

/*
alert(diceRoll() + "\n"
+ diceRoll() + "\n"
+ diceRoll() + "\n"
+ diceRoll
);
*/
