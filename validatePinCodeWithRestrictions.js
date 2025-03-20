// validatePinCodeWithRestrictions.js

const validatePinCode = (pinCode) => {
    // Regex to ensure it starts with a digit and is followed by exactly 5 digits
    const pinCodePattern = /^[1-9][0-9]{5}$/;
    return pinCodePattern.test(pinCode);
}

// Example Usage
const pinCode = "A400088";  // This should fail
if (validatePinCode(pinCode)) {
    console.log(`${pinCode} is a valid PIN code.`);
} else {
    console.log(`${pinCode} is an invalid PIN code.`);
}
