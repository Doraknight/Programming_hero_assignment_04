// Problem 2:
/* pandaCost */

function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity) {
    /* all these const value's unit are defined as TAKA BDT */
    const perSingaraPrice = 7;
    const perSomuchaPrice = 10;
    const perJilapiPrice = 15;

    const totalPriceOfSingara = perSingaraPrice * singaraQuantity;
    const totalPriceOfSomucha = perSomuchaPrice * somuchaQuantity;
    const totalPriceOfJilapi = perJilapiPrice * jilapiQuantity;

    const totalPrice =
        totalPriceOfSingara + totalPriceOfSomucha + totalPriceOfJilapi;
    return totalPrice;
}
/* these three variable's are defined as piece; */
let checkout = pandaCost(4, 3, 6);
/* console output */
console.log(checkout);