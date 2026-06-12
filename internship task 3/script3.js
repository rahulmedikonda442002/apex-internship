
const quizData = [
    {
        question: "Which language is used for web page styling?",
        answers: ["HTML", "CSS", "Python", "Java"],
        correct: "CSS"
    },
    {
        question: "Which JavaScript method is used to fetch API data?",
        answers: ["get()", "fetch()", "request()", "retrieve()"],
        correct: "fetch()"
    },
    {
        question: "Which tag is used for JavaScript?",
        answers: ["<css>", "<script>", "<js>", "<javascript>"],
        correct: "<script>"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerBtns = document.querySelectorAll(".answer-btn");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    let q = quizData[currentQuestion];

    questionEl.textContent = q.question;

    answerBtns.forEach((btn, index) => {
        btn.textContent = q.answers[index];

        btn.onclick = () => {
            if (btn.textContent === q.correct) {
                score++;
            }

            nextBtn.style.display = "inline-block";

            answerBtns.forEach(b => b.disabled = true);
        };
    });

    answerBtns.forEach(b => b.disabled = false);
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        questionEl.textContent = "Quiz Completed!";
        document.getElementById("answers").innerHTML = "";
        nextBtn.style.display = "none";
        scoreEl.textContent = `Your Score: ${score}/${quizData.length}`;
    }
});

loadQuestion();

const jokeBtn = document.getElementById("jokeBtn");
const jokeText = document.getElementById("joke");

jokeBtn.addEventListener("click", async () => {
    try {
        const response = await fetch(
            "https://official-joke-api.appspot.com/random_joke"
        );

        const data = await response.json();

        jokeText.textContent =
            `${data.setup} - ${data.punchline}`;
    } catch (error) {
        jokeText.textContent = "Failed to load joke.";
    }
});