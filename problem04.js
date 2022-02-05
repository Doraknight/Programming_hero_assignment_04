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