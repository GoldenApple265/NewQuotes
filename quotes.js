const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don't watch the clock; do what it does. Keep going.",
    "The future belongs to those who believe in the beauty of their dreams."
];

// Function to get today's quote
function getTodaysQuote() {
    const today = new Date();
    const index = today.getFullYear() + today.getMonth() + today.getDate();
    return quotes[index % quotes.length];
}
