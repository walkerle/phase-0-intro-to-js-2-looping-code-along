// CODE ALONG

// for(let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }

// const gifts = ['teddy bear', 'drone', 'doll'];

// function wrapGifts(gifts) {
//     for(let i=  0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         // debugger;
//     }
//     return gifts;
// }

// function wrapGifts(gifts) {
//     let i = 0;
//     while(i < gifts.length) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         i++;
//     }
//     return gifts;
// }

// wrapGifts(gifts);
// console.log(wrapGifts(gifts));

// ASSIGNMENT

function writeCards(names, event) {
    const message = [];

    for (let i = 0; i < names.length; i++) {
        message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return message;
}

// console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

function countDown(number) {
    while(0 < number) {
        console.log(number);
        number--;
    }
    console.log(number);
}

// countDown(4);