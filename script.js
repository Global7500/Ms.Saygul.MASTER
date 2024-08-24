const words = [
    { word: "apple", translation: "olma" },
    { word: "book", translation: "kitob" },
    { word: "car", translation: "mashina" },
    { word: "dog", translation: "it" },
    { word: "elephant", translation: "fil" }
];

let currentWord = null;

document.getElementById('generate-word').addEventListener('click', function() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById('word').textContent = currentWord.word;
    document.getElementById('result').textContent = '';
    document.getElementById('answer').value = '';
});

document.getElementById('check-answer').addEventListener('click', function() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    if (userAnswer === currentWord.translation) {
        document.getElementById('result').textContent = "To'g'ri.!";
        document.getElementById('result').style.color = 'green';
    } else {
        document.getElementById('result').textContent = `Noto'g'ri! To'g'ri tarjima "${currentWord.translation}"`;
        document.getElementById('result').style.color = 'red';
    }
});
