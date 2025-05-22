const questions = [
    {
        title: "Welche Zahl folgt logisch? 2, 4, 8, 16, ?",
        answers: [
            { text: "18", points: 0 },
            { text: "32", points: 10 },
            { text: "24", points: 2 }
        ]
    },
    {
        title: "Was passt am besten? Hund ist zu Welpe wie Katze zu...",
        answers: [
            { text: "Kätzchen", points: 10 },
            { text: "Hund", points: 0 },
            { text: "Maus", points: 1 }
        ]
    },
    {
        title: "Was zeigt dieses Bild?",
        image: "dreieck.jpg",
        answers: [
            { text: "Ein Dreieck", points: 10 },
            { text: "Ein Viereck", points: 0 },
            { text: "Ein Kreis", points: 0 }
        ]
    },
    {
        title: "Welcher Buchstabe kommt als nächstes? A, C, E, G, ...",
        answers: [
            { text: "I", points: 10 },
            { text: "H", points: 0 },
            { text: "J", points: 2 }
        ]
    },
    {
        title: "Welche Figur vervollständigt die Reihe?",
        image: "muster.jpg",
        answers: [
            { text: "Figur A", points: 2 },
            { text: "Figur B", points: 0 },
            { text: "Figur C", points: 10 }
        ]
    }
];

let currentQuestionIndex = 0;
let totalScore = 0;

const questionContainer = document.getElementById("questionContainer");
const nextBtn = document.getElementById("nextBtn");
const resultDiv = document.getElementById("result");

function showQuestion(index) {
    nextBtn.disabled = true;
    questionContainer.innerHTML = "";

    const q = questions[index];

    const div = document.createElement("div");
    div.classList.add("question");

    const title = document.createElement("h3");
    title.textContent = `${index + 1}. ${q.title}`;
    div.appendChild(title);

    if (q.image) {
        const img = document.createElement("img");
        img.src = q.image;
        img.alt = "Bild zur Frage";
        div.appendChild(img);
    }

    q.answers.forEach((a, i) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = a.points;
        input.addEventListener("change", () => {
            nextBtn.disabled = false;
        });
        label.appendChild(input);
        label.append(` ${a.text}`);
        div.appendChild(label);
    });

    questionContainer.appendChild(div);
}

nextBtn.addEventListener("click", () => {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (selected) {
        totalScore += parseInt(selected.value, 10);
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        questionContainer.innerHTML = "";
        nextBtn.style.display = "none";
        const iq = 80 + totalScore;
        resultDiv.textContent = `Dein geschätzter IQ: ${iq}`;
    }
});

showQuestion(currentQuestionIndex);
