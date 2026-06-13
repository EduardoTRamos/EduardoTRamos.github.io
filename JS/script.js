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