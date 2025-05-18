function Zad_1() {
    const tablica = ["Kot", "Pies", "Kura", "Krowa", "Owca"];
    tablica[tablica.length - 1] = "Koń";
    tablica[5] = "Kaczka";
    tablica.push("Zebra", "Tygrys");
    tablica.unshift("Lew", "Pantera");
    document.getElementsByClassName("Zad_1")[0].textContent = `Drugi element to: ${tablica[1]}`;
}

function Zad_2() {
    const nowaTablica = ["Jabłko", "Gruszka", "Pomarańcza", "Banan"];
    let output = `<p>Pierwszy element to: <strong>${nowaTablica[0]}</strong></p>`;
    output += `<p>Ostatni element to: <strong>${nowaTablica[nowaTablica.length - 1]}</strong></p>`;
    nowaTablica.unshift("Winogrono");
    output += `<p>Nowy pierwszy element to: <strong>${nowaTablica[0]}</strong></p>`;
    document.getElementsByClassName("Zad_2")[0].innerHTML = output;
}

function Zad_3() {
    const liczbaElementow = document.getElementsByTagName("*").length;
    document.getElementById("wynik").textContent = `Liczba elementów na stronie: ${liczbaElementow}`;
}


function Zad_4() {
    const tablica = ["Kot", "Pies", "Kura", "Krowa", "Owca"];
    document.getElementById("p1").textContent = `Pierwszy element: ${tablica[0]}`;
    document.getElementById("p2").textContent = `Ostatni element: ${tablica[tablica.length - 1]}`;

    let wynik = "";
    let i = 0;
    while (i < Math.floor(tablica.length / 2)) {
        wynik += tablica[i] + " ";
        i++;
    }
    console.log("Pętla while:", wynik);

    wynik = "";
    for (let i = 0; i < Math.floor(tablica.length / 2); i++) {
        wynik += tablica[i] + " ";
    }
    console.log("Pętla for:", wynik);
}

const questions = [
    ["Ile księżyców ma Ziemia?", 1],
    ["Ile księżyców ma Saturn?", 62],
    ["Ile księżyców ma Wenus?", 0],
];
let score = 0;
let currentQuestionIndex = 0;

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById("pyt").textContent = questions[currentQuestionIndex][0];
    }
}

function submitAnswer() {
    const answer = parseInt(document.getElementById("odp").value);
    if (answer === questions[currentQuestionIndex][1]) {
        score++;
        alert("Prawidłowa odpowiedź!");
    } else {
        alert(`Błąd. Prawidłowa odpowiedź to ${questions[currentQuestionIndex][1]}`);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        document.getElementById("odp").value = "";
    } else {
        document.getElementById("q-wynik").textContent = `Twój wynik to: ${score}/${questions.length}`;
        document.getElementById("pyt").textContent = "Koniec quizu!";
        document.getElementById("odp").style.display = "none";
        document.querySelector("#quiz button").style.display = "none";
    }
}

window.onload = function() {
    Zad_1();
    Zad_2();
    Zad_3();
    Zad_4();
    displayQuestion();
};
