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
    },
    {
        indonesian: "Setiap pelayanan yang kamu berikan adalah sebuah hadiah bagi mereka yang membutuhkannya.",
        english: "Every service you provide is a gift to those who need it."
    },
    {
        indonesian: "Kamu bukan hanya seorang profesional, tapi juga seorang yang penuh kasih sayang.",
        english: "You are not just a professional, but also someone full of love."
    },
    {
        indonesian: "Setiap hari, kamu berkontribusi pada kehidupan orang lain dengan cara yang tak terduga.",
        english: "Every day, you contribute to the lives of others in unexpected ways."
    },
    {
        indonesian: "Kamu adalah sumber inspirasi bagi banyak orang, teruslah menjadi dirimu sendiri.",
        english: "You are a source of inspiration to many, keep being yourself."
    },
    {
        indonesian: "Keseimbangan antara profesionalisme dan empati adalah kunci suksesmu.",
        english: "The balance between professionalism and empathy is the key to your success."
    },
    {
        indonesian: "Kamu tidak hanya menyembuhkan tubuh, tapi juga jiwa.",
        english: "You not only heal bodies, but also souls."
    },
    {
        indonesian: "Setiap tindakanmu memiliki dampak yang signifikan pada kehidupan orang lain.",
        english: "Every action of yours has a significant impact on the lives of others."
    },
    {
        indonesian: "Kamu adalah contoh yang baik bagi banyak orang, teruslah berjuang.",
        english: "You are a good example to many, keep fighting."
    },
    {
        indonesian: "Kesehatan mental juga sangat penting dalam pelayananmu.",
        english: "Mental health is also very important in your service."
    },
    {
        indonesian: "Kamu tidak pernah sendirian dalam perjuanganmu.",
        english: "You are never alone in your struggle."
    },
    {
        indonesian: "Setiap keberhasilanmu adalah hasil dari kerja keras dan dedikasimu.",
        english: "Every success of yours is the result of your hard work and dedication."
    },
    {
        indonesian: "Kamu adalah harapan bagi banyak orang, teruslah bersemangat.",
        english: "You are a hope for many, keep being enthusiastic."
    },
    {
        indonesian: "Keseimbangan antara pekerjaan dan kehidupan pribadi sangat penting.",
        english: "The balance between work and personal life is very important."
    },
    {
        indonesian: "Jangan lupa untuk menjaga istirahatmu, karena kamu juga perlu beristirahat.",
        english: "Don't forget to take care of your rest, because you also need to rest."
    },
    {
        indonesian: "Istirahat yang cukup akan membuatmu lebih kuat dan siap menghadapi tantangan.",
        english: "Adequate rest will make you stronger and ready to face challenges."
    },
    {
        indonesian: "Kamu tidak bisa memberikan yang terbaik jika kamu sendiri tidak merasa baik.",
        english: "You can't give your best if you don't feel good yourself."
    },
    {
        indonesian: "Jadikan istirahat sebagai bagian dari rutinitasmu untuk tetap sehat dan produktif.",
        english: "Make rest a part of your routine to stay healthy and productive."
    },
    {
        indonesian: "Kamu tidak perlu merasa bersalah untuk meminta waktu istirahat.",
        english: "You don't need to feel guilty for asking for time to rest."
    },
    {
        indonesian: "Tetaplah bersemangat dan percaya diri dalam setiap tugas yang kamu lakukan.",
        english: "Stay enthusiastic and confident in every task you do."
    },
    {
        indonesian: "Semangatmu adalah sumber energi yang tak terhingga bagi dirimu dan orang lain.",
        english: "Your enthusiasm is an endless source of energy for you and others."
    },
    {
        indonesian: "Jangan pernah menyerah dalam menghadapi tantangan, karena setiap tantangan adalah peluang untuk belajar.",
        english: "Never give up in facing challenges, because every challenge is an opportunity to learn."
    },
    {
        indonesian: "Kamu memiliki kekuatan yang luar biasa untuk mencapai impianmu.",
        english: "You have incredible power to achieve your dreams."
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