function mudarTema() {
    let botao = document.getElementById('theme');
    botao.classList.toggle("darkTheme");
    // document.body.classlist.Toggle("")
}

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