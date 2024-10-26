const flashcard = document.getElementById('flashcard');
const flipButton = document.getElementById('flip');
const addFlashcardButton = document.getElementById('add-flashcard');
const questionInput = document.getElementById('question-input');
const answerInput = document.getElementById('answer-input');
let flashcards = [];

flipButton.addEventListener('click', () => {
    flashcard.classList.toggle('flip');
});

addFlashcardButton.addEventListener('click', () => {
    const question = questionInput.value.trim();
    const answer = answerInput.value.trim();

    if (question && answer) {
        flashcards.push({ question, answer });
        questionInput.value = '';
        answerInput.value = '';
        updateFlashcard();
    } else {
        alert("Please enter both a question and an answer.");
    }
});

function updateFlashcard() {
    if (flashcards.length > 0) {
        const currentFlashcard = flashcards[flashcards.length - 1];
        document.getElementById('flashcard-question').textContent = currentFlashcard.question;
        document.getElementById('flashcard-answer').textContent = currentFlashcard.answer;
    } else {
        document.getElementById('flashcard-question').textContent = 'Question';
        document.getElementById('flashcard-answer').textContent = 'Answer';
    }
}
