// validatePinCode.js

const validatePinCode = (pinCode) => {
    const pinCodePattern = /^[1-9][0-9]{5}$/;
    return pinCodePattern.test(pinCode);
}

// Example Usage
const pinCode = "400088";
if (validatePinCode(pinCode)) {
    console.log(`${pinCode} is a valid PIN code.`);
} else {
    console.log(`${pinCode} is an invalid PIN code.`);
}
