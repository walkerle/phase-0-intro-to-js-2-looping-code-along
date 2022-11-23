/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}
*/

/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for(let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}

wrapGifts(gifts);
*/

const nameArray = ["Charlie", "Samip", "Ali"];

function writeCards(name, eventName) {
    let newArray = [];
    for(let i = 0; i < name.length; i++) {
        newArray[i] = `Thank you, ${name[i]}, for the wonderful ${eventName} gift!`
    }
    return newArray;
}

// console.log(nameArray);
// console.log(writeCards(nameArray, "Christmas"));

let count = 10;
function countDown(number) {
    while (number > 0) {
        console.log(number--);
    }
    return console.log(number);
}

// countDown(count);
