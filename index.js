function writeCards(name, eventName) {
    let newArray = [];
    for(let i = 0; i < name.length; i++) {
        newArray[i] = `Thank you, ${name[i]}, for the wonderful ${eventName} gift!`
    }
    return newArray;
}

function countDown(number) {
    while (number > 0) {
        console.log(number--);
    }
    return console.log(number);
}
