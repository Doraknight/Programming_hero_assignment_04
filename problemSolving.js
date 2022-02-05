// Problem 1:
/* anaToVori */

function anaToVori(ana) {
    Vori = ana / 16; /* 1 vori = 16 ana; */
    if (ana > 16) {
        Vori = false; /* case added */
    }
    return Vori;
}
myGoldMeasurement = anaToVori(15);
console.log(myGoldMeasurement);

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
    if (singaraQuantity == 0) {
        totalPrice = false; /* case added */
    }
    return totalPrice;
}
/* these three variable's are defined as piece; */
let checkout = pandaCost(4, 3, 6);
/* console output */
console.log(checkout);

// Problem 3:
/* picnicBudget */

function picnicBudget(peopleNumber) {
    if (peopleNumber <= 100) {
        const totalBudget = 5000;
        return totalBudget;
    } else if (peopleNumber > 100 && peopleNumber <= 200) {
        const first100people = 5000;
        const second100people = 4000;
        const totalpeople = first100people + second100people;
        return totalpeople;
    } else {
        const first100people = 5000;
        const second100people = 4000;
        const restPeople = 3000;
        const totalBudget = first100people + second100people + restPeople;
        if (peopleNumber == 0) {
            totalBudget = false; /* case added  */
        }
        return totalBudget;
    }
}

let budgetOfPicnic = picnicBudget(200);
console.log(budgetOfPicnic);

// Problem 4:
/* oddFriend */

function oddFriend(friendsName) {
    let odd = [];

    for (const element of friendsName) {
        odd = element;
        if (odd.length % 2 != 0) {
            let number = odd;
            return number;
        }
    }
}

let friendsName = ["Selim", "Reza", "Jhanker", "Mahbub", "Persian", "Mir"];
let nameOfOddFriend = oddFriend(friendsName);
console.log(nameOfOddFriend);