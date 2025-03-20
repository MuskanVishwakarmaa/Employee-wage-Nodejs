// validatePinCodeWithSpaces.js

const validatePinCode = (pinCode) => {
    // Regex to ensure the PIN code is valid with or without spaces
    const pinCodePattern = /^[1-9][0-9]{5}$/;
    const pinCodeWithSpacesPattern = /^[1-9][0-9]{3}\s[0-9]{3}$/;

    return pinCodePattern.test(pinCode) || pinCodeWithSpacesPattern.test(pinCode);
}

// Example Usage
const pinCode1 = "400088";  // Valid without spaces
const pinCode2 = "400 088";  // Valid with spaces

console.log(`${pinCode1} is ${validatePinCode(pinCode1) ? 'a valid' : 'an invalid'} PIN code.`);
console.log(`${pinCode2} is ${validatePinCode(pinCode2) ? 'a valid' : 'an invalid'} PIN code.`);
