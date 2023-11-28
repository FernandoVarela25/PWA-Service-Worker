// script.js
function showSplashScreen() {
    var splashScreen = document.createElement("div");
    splashScreen.classList.add("splash-screen");

    var splashText = document.createElement("div");
    splashText.classList.add("splash-text");
    splashText.textContent = "Cargando...";

    splashScreen.appendChild(splashText);
    document.body.appendChild(splashScreen);

    return splashScreen; // Devolver la referencia a la pantalla de inicio
}

function hideSplashScreen(splashScreen) {
    if (splashScreen) {
        splashScreen.remove();
    }
}

function loadContent(url, nameFunction) {
    var splashScreen = showSplashScreen(); // Mostrar la pantalla de inicio al cargar la nueva página

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        setTimeout(function() {
            hideSplashScreen(splashScreen); // Ocultar la pantalla de inicio después de 2 segundos
        }, 2000);
        nameFunction(this);
        loadStyles();
    };
    xhttp.open("GET", url);
    xhttp.send();
}

document.addEventListener("DOMContentLoaded", function() {
    loadContent('Archives/Portada.html', loadPortada); // Cargar contenido por defecto al iniciar la página
});
