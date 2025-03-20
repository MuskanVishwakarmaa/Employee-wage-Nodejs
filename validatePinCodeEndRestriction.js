// validatePinCodeEndRestriction.js

const validatePinCode = (pinCode) => {
    // Regex to ensure the PIN code doesn't end with alphabets or special characters
    const pinCodePattern = /^[1-9][0-9]{5}[a-zA-Z!@#$%^&*()_+=<>?/|\\;:'",.]{0,}$/;
    return !pinCodePattern.test(pinCode); // Returns true if invalid
}

// Example Usage
const pinCode = "400088B";  // This should fail
if (validatePinCode(pinCode)) {
    console.log(`${pinCode} is an invalid PIN code.`);
} else {
    console.log(`${pinCode} is a valid PIN code.`);
}
