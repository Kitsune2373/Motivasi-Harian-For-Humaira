// Array quotes
const quotes = [
    {
        indonesian: "Kamu adalah cahaya bagi pasienmu, teruslah bersinar.",
        english: "You are the light for your patients, keep shining."
    },
    {
        indonesian: "Setiap langkah kecilmu membawa perubahan besar bagi mereka yang membutuhkan.",
        english: "Every small step you take brings a big change to those in need."
    },
    {
        indonesian: "Jangan pernah meremehkan kekuatan kebaikanmu, kamu sangat berarti.",
        english: "Never underestimate the power of your kindness, you matter so much."
    },
    {
        indonesian: "Kesabaran dan dedikasimu tak tertandingi. Teruslah maju.",
        english: "Your patience and dedication are unmatched. Keep moving forward."
    },
    {
        indonesian: "Kesehatan orang lain ada di tanganmu, dan kamu melakukannya dengan hati yang luar biasa.",
        english: "The health of others is in your hands, and you handle it with an amazing heart."
    }
];

// Function to display today's quote
function displayQuote() {
    const today = new Date().getDay(); 
    const quote = quotes[today % quotes.length];

    document.getElementById('quote-indonesian').innerText = quote.indonesian;
    document.getElementById('quote-english').innerText = quote.english;
}

// Display the quote when the page loads
window.onload = displayQuote;

// Function to handle change quote button click
document.getElementById('change-quote-btn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    document.getElementById('quote-indonesian').innerText = randomQuote.indonesian;
    document.getElementById('quote-english').innerText = randomQuote.english;
});
