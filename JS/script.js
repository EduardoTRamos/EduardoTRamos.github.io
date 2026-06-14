function fontUp() {
    document.body.classList.toggle("bigfont");
}

function fontDown() {
    document.body.classList.toggle("smallfont");
}

// function fontReset() {
//     document.body.classList.remove('bigfont');
//     document.body.classList.remove('smallfont');
// }

let lightTheme = document.getElementById("lightTheme");
let darkTheme = document.getElementById("darkTheme");

function toggleTheme() {
    lightTheme.disabled = !lightTheme.disabled;
    darkTheme.disabled = !darkTheme.disabled;
}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.querySelector('input[type="text"]');
    let email = document.querySelector('input[type="email"]');
    let telefone = document.querySelector('input[type="tel"]');

    if (nome.value.trim().length <= 4) {
        alert("ERRO: PRECISA ser o nome completo, eu duvido que seu nome seja tão curto.");
        return;
    }

    if (!email.value.includes("@")) {
        alert("ERRO: o email deve conter @");
        return;
    }

    if (/[a-zA-Z]/.test(telefone.value)) {
        alert("ERRO: O telefone não pode conter letras.");
        return;
    }

    alert("Mensagem enviada!");
});