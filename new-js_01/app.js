const quizeData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlink Text Management Language",
        ],
        correct: 0,
    },
    {
        question: "Which CSS property is used to control the spacing between elements?",
        options: [
            "padding",
            "spacing",
            "margin",
            "border-spacing",
        ],
        correct: 2,
    },
    {
        question: "What tag is used to define an unordered list in HTML?",
        options: [
            "<ol>",
            "<ul>",
            "<li>",
            "<dl>",
        ],
        correct: 1,
    },
    {
        question: "In CSS, which property is used to change the text color of an element?",
        options: [
            "text-color",
            "font-color",
            "text-style",
            "color",
        ],
        correct: 3,
    },
    {
        question: "What does the CSS property 'display: none;' do?",
        options: [
            "It hides the element",
            "It shows the element as a block-level element",
            "It aligns the element to the left",
            "It makes the element transparent",
        ],
        correct: 0,
    },
];

const answers = document.querySelectorAll(".answer");

const questions = document.querySelector("#question");
const option_1 = document.querySelector("#option_1");
const option_2 = document.querySelector("#option_2");
const option_3 = document.querySelector("#option_3");
const option_4 = document.querySelector("#option_4");
const quiz = document.querySelector("#quiz");

const submitbtn = document.querySelector("#submit");

let crrquiz = 0;
let score = 0;

const loadQuiz = () => {
    const { question, options } = quizeData[crrquiz];
    questions.innerText = `${crrquiz + 1}: ${question}`;
    options.forEach((currOption, index) => window[`option_${index + 1}`].innerText = currOption);
};

loadQuiz();

const getSelectedOption = () => {
    let answerElement = Array.from(answers);
    return answerElement.findIndex(currOption => currOption.checked);
};

const deselectedAnswers = () => {
    answers.forEach((currOption) => currOption.checked = false);
};

submitbtn.addEventListener('click', () => {
    const selectedOptionsIndex = getSelectedOption();

    if (selectedOptionsIndex === quizeData[crrquiz].correct) {
        score = score + 1;
    }
    crrquiz++;
    if (crrquiz < quizeData.length) {
        deselectedAnswers();
        loadQuiz();
    } else {
        quiz.innerHTML = `
        <div class="result">
            <h2>Your score: ${score}/${quizeData.length} correct answers</h2>
            <p>Congratulations on completing the quiz!</p>
            <button class="replay-button" onclick="location.reload()">Play Again</button>
        </div>`;
    }
});
