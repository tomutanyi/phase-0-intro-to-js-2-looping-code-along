// Code your solutions in this file
function writeCards(event, eventName){
    const names = []

    for (let i = 0; i < event.length; i++) {
        let name = (`Thank you, ${event[i]}, for the wonderful ${eventName} gift!`)
        names.push(name)
    }

    return names

}

function countDown(numerals){
    while (numerals >= 0) {
        console.log(numerals)
        numerals--
    }
}

countDown(10)
