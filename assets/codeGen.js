


export function ticketGen() {
    const myFour1 = () => {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const randomAlpha = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
        const randomAlphabet = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();

        const number = '0123456789';
        const randomNum = number[Math.floor(Math.random() * number.length)];
        const randomNumber = number[Math.floor(Math.random() * number.length)];

        const theTwo1 = (randomAlpha + randomAlphabet);

        const myTwo1 = (randomNum + randomNumber);

        const myFour1 = (theTwo1 + myTwo1);
        return myFour1;
    }

    const myFour2 = () => {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const randomAlpha = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
        const randomAlphabet = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
        const number = '0123456789';
        const randomNum = number[Math.floor(Math.random() * number.length)];
        const randomNumber = number[Math.floor(Math.random() * number.length)];


        const theTwo1 = (randomAlpha + randomAlphabet);
        const myTwo1 = (randomNum + randomNumber);

        const myFour1 = (theTwo1 + myTwo1);

        return myFour1;
    }

    const alphaNum = (myFour1() + myFour2());

    return alphaNum
}