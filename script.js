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

const form = document.getElementById("quizForm");
const resultDiv = document.getElementById("result");

questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.classList.add("question");

    const title = document.createElement("h3");
    title.textContent = `${index + 1}. ${q.title}`;
    div.appendChild(title);

    if (q.image) {
        const img = document.createElement("img");
        img.src = q.image;
        img.alt = "Fragebild";
        div.appendChild(img);
    }

    q.answers.forEach((a, i) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `question${index}`;
        input.value = a.points;
        label.appendChild(input);
        label.append(` ${a.text}`);
        div.appendChild(label);
        div.appendChild(document.createElement("br"));
    });

    form.appendChild(div);
});

document.getElementById("submitBtn").addEventListener("click", () => {
    let score = 0;
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected) {
            score += parseInt(selected.value, 10);
        }
    });

    const iq = 80 + score; // Basiswert + Punkte
    resultDiv.textContent = `Dein geschätzter IQ: ${iq}`;
});
