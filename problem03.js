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
        return totalBudget;
    }
}

let budgetOfPicnic = picnicBudget(200);
console.log(budgetOfPicnic);