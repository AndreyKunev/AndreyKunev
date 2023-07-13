const sendMsgWithDate = (msg, date = new Date(), ...recepients) => {
    for (const recepient of recepients) {
        console.log(`To ${recepient}: ${msg} [${date.toLocaleTimeString()}]`);
    }
}

sendMsgWithDate('Hello, World!', undefined , 'John', 'Maria');