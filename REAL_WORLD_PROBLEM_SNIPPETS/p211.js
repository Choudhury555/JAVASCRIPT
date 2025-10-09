// Random OTP Generator (Math.random + Math.floor)
function generateOTP() {
    return Math.floor(Math.random() * 900000 + 100000);
}

console.log("Your OTP is:", generateOTP());//e.g Your OTP is: 202059