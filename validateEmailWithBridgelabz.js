// validateEmailWithBridgelabz.js

const validateEmail = (email) => {
    // Regex pattern to validate email with mandatory parts, including 'bridgelabz'
    const emailPattern = /^[a-zA-Z0-9]+([.-_+]?[a-zA-Z0-9]+)*@bridgelabz\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
    return emailPattern.test(email);
}

// Example Usage
const validEmails = [
    "abc@bridgelabz.com",
    "abc-100@bridgelabz.net",
    "abc.100@bridgelabz.co.in",
    "abc111@bridgelabz.com",
    "abc-100@bridgelabz.net",
    "abc+100@bridgelabz.com"
];

const invalidEmails = [
    "abc",
    "abc@.com.my",
    "abc123@gmail.a",
    "abc123@.com",
    "abc123@.com.com",
    ".abc@abc.com",
    "abc()*@gmail.com",
    "abc@%*.com",
    "abc..2002@gmail.com",
    "abc.@gmail.com",
    "abc@abc@gmail.com",
    "abc@gmail.com.1a",
    "abc@gmail.com.aa.au"
];

console.log("Valid Emails:");
validEmails.forEach(email => {
    console.log(`${email} is ${validateEmail(email) ? 'valid' : 'invalid'}`);
});

console.log("\nInvalid Emails:");
invalidEmails.forEach(email => {
    console.log(`${email} is ${validateEmail(email) ? 'valid' : 'invalid'}`);
});
