// validateEmailWithTLDAndOptionalParts.js

const validateEmail = (email) => {
    // Regex pattern to validate email with optional parts and 2-character TLD
    const emailPattern = /^[a-zA-Z0-9]+([._+-]?[a-zA-Z0-9]+)*@bridgelabz\.co\.[a-zA-Z]{2}(\.[a-zA-Z]{2})?$/;
    return emailPattern.test(email);
}

// Example Usage
const validEmails = [
    "abc@yahoo.com",
    "abc-100@yahoo.com",
    "abc.100@yahoo.com",
    "abc111@abc.com",
    "abc-100@abc.net",
    "abc.100@abc.com.au",
    "abc@1.com",
    "abc@gmail.com.com",
    "abc+100@gmail.com"
];

const invalidEmails = [
    "abc", // Missing @
    "abc@.com.my", // TLD starts with dot
    "abc123@gmail.a", // Invalid TLD (.a)
    "abc123@.com", // TLD starts with dot
    "abc123@.com.com", // TLD starts with dot
    ".abc@abc.com", // Invalid first character
    "abc()*@gmail.com", // Invalid characters
    "abc@%*.com", // Invalid characters in TLD
    "abc..2002@gmail.com", // Double dots
    "abc.@gmail.com", // Ends with dot
    "abc@abc@gmail.com", // Double '@'
    "abc@gmail.com.1a", // Digits in TLD with 2 characters
    "abc@gmail.com.aa.au" // Multiple TLDs
];

console.log("Valid Emails:");
validEmails.forEach(email => {
    console.log(`${email} is ${validateEmail(email) ? 'valid' : 'invalid'}`);
});

console.log("\nInvalid Emails:");
invalidEmails.forEach(email => {
    console.log(`${email} is ${validateEmail(email) ? 'valid' : 'invalid'}`);
});
