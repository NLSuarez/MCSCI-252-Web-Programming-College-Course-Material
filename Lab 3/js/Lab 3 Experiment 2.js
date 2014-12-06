/*
Name: Stefan Suarez
Assignment: Lab3
Final Draft: 9/30/2014
Description: Refactor the sloppy code for a calculator program using jslint and jsbeautify.
*/

/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

/*
Awesome news: Notepad++ has a jslint plugin. Yay!
*/

function s(num, val) {
    "use strict";
    var amount,
        sum;
    amount = num; // amount is the num or NaN
    sum = (!num ? 0 : num) * val; // the sum for that bill or coin
    if (isNaN(amount)) { // If user input is not a number, execute the following code.
        alert("'" + num + "' is not a valid number entry and that field will not be included in the total money calculation.");
        return 0;
    }
    if (amount >= 9E15) { // If user input is too large, execute the following code.
        alert("'" + num + "' is too large of a number for this program and will not be included in the total money calculation.");
        return 0;
    }
    if (amount < 0) { //If user input is a negative number.
        alert("You may not enter a negative number.");
        return 0;
    }
    if (amount % 1 !== 0) { //If user inputs a non-whole number.
        alert("You may not enter a fraction of a number. If the fraction is of the dollar quantity, please enter the appropriate number of cents instead.");
        return 0;
    }
    return sum; // If the amount matches the conditions, return sum.
}

function money(form) {
    "use strict";
    var hun,
        fif,
        twe,
        ten,
        fiv,
        one,
        hlf,
        qtr,
        dme,
        nck,
        pny,
        ttl,
        decicheck1,
        decicheck2;
    /*The following block of code has been altered to whole numbers for the purposes of calculation.*/
    hun = s(form.hun.value, 10000); // Each amount specified is the returned value used in function s.
    fif = s(form.fif.value, 5000);
    twe = s(form.twe.value, 2000);
    ten = s(form.ten.value, 1000);
    fiv = s(form.fiv.value, 500);
    one = s(form.one.value, 100);
    hlf = s(form.hlf.value, 50);
    qtr = s(form.qtr.value, 25);
    dme = s(form.dme.value, 10);
    nck = s(form.nck.value, 5);
    pny = s(form.pny.value, 1);


    // Add up all the amounts to form a total.
    ttl = hun + fif + twe + ten + fiv + one + hlf + qtr + dme + nck + pny;

    // Now divide by 100 to get 2 decimal places.
    // This command also converts the total to a string.
    ttl = String(ttl / 100);
    /*
    The following block of code checks for a few exception cases where decimals are misplaced
    or don't appear at all and then corrects them.
    */
    decicheck1 = ttl.substring(ttl.length - 3, ttl.length - 2);
    decicheck2 = ttl.substring(ttl.length - 2, ttl.length - 1);
    if (decicheck1 !== ".") {
        if (decicheck2 === ".") {
            ttl += "0";
        } else {
            ttl += ".00";
        }
    }
    //Now display the total amount for the user.
    form.total.value = "$ " + ttl;
}
// end