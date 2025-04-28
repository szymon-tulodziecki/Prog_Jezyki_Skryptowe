let liczbaPunktow = 0;
let aktualnyIndeksPytania = 0;

const listaPytan = [
    ["Jak rozwija się skrót HTML?", "HyperText Markup Language"],
    ["Ile bitów ma jeden bajt?", "8"],
    ["Jak nazywa się główna pamięć komputera?", "RAM"],
    ["Co oznacza skrót CPU?", "Central Processing Unit"],
    ["Jak nazywa się protokół do wysyłania poczty e-mail?", "SMTP"],
    ["Co oznacza skrót CSS?", "Cascading Style Sheets"],
    ["Jaki system operacyjny stworzyła firma Microsoft?", "Windows"],
    ["Co to jest algorytm?", "zbiór instrukcji"],
    ["Jak nazywa się lokalna sieć komputerowa?", "LAN"],
    ["Który klawisz na klawiaturze przenosi kursor na początek linii?", "Home"]
];

const pytanieTekst = document.querySelector('.pytanieTekst');
const poleOdpowiedzi = document.querySelector('.poleOdpowiedzi');
const przyciskNastepne = document.querySelector('.przyciskNastepne');
const komunikatZwrotny = document.querySelector('.komunikatZwrotny');
const wynikContainer = document.querySelector('.wynikContainer');
const wynikTekst = document.querySelector('.wynikTekst');
const pytanieSekcja = document.querySelector('.pytanieSekcja');

function wyswietlPytanie() {
    if (aktualnyIndeksPytania < listaPytan.length) {
        pytanieTekst.textContent = listaPytan[aktualnyIndeksPytania][0];
        poleOdpowiedzi.value = "";
        komunikatZwrotny.textContent = "";
        poleOdpowiedzi.disabled = false;
        przyciskNastepne.disabled = false;
        poleOdpowiedzi.focus();
    } else {
        pokazWynik();
    }
}

function sprawdzOdpowiedz() {
    const odpowiedzUzytkownika = poleOdpowiedzi.value.trim();
    const poprawnaOdpowiedz = listaPytan[aktualnyIndeksPytania][1];

    if (odpowiedzUzytkownika.toLowerCase() === poprawnaOdpowiedz.toLowerCase()) {
        komunikatZwrotny.textContent = "Dobrze!";
        komunikatZwrotny.style.color = "green";
        liczbaPunktow++;
    } else {
        komunikatZwrotny.textContent = "Źle! Poprawna odpowiedź: " + poprawnaOdpowiedz;
        komunikatZwrotny.style.color = "red";
    }

    poleOdpowiedzi.disabled = true;
    przyciskNastepne.disabled = true;

    setTimeout(() => {
        aktualnyIndeksPytania++;
        wyswietlPytanie();
    }, 1200);
}

function pokazWynik() {
    pytanieSekcja.style.display = "none";
    wynikContainer.style.display = "block";
    wynikTekst.textContent = `Twój wynik: ${liczbaPunktow} z ${listaPytan.length} punktów.`;
}

przyciskNastepne.addEventListener('click', function() {
    if (poleOdpowiedzi.value.trim() !== "") {
        sprawdzOdpowiedz();
    } else {
        komunikatZwrotny.textContent = "Najpierw wpisz odpowiedź!";
        komunikatZwrotny.style.color = "orange";
    }
});

poleOdpowiedzi.addEventListener('keydown', function(e) {
    if (e.key === "Enter") {
        przyciskNastepne.click();
    }
});

wyswietlPytanie();
