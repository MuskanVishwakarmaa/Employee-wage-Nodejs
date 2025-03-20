// validateEmail.js

const validateEmail = (email) => {
    // Regex pattern to validate email with mandatory parts and optional subdomains
    const emailPattern = /^[a-zA-Z0-9]+([.-_+]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
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
