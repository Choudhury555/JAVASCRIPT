// Mask all but last 4 digits of a credit card number

function maskCardNumber(cardNumber){
    const lastFourDigit = cardNumber.slice(-4);
    let maskedCardNumber = lastFourDigit.padStart(cardNumber.length,'*');
    return maskedCardNumber;
}

console.log(maskCardNumber("1234567812345678")); 