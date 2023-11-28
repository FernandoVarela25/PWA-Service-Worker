/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    // Muestra la pantalla Splash al cargar la página
    showSplashScreen();

    // Oculta la pantalla Splash después de un tiempo (por ejemplo, 2 segundos)
    setTimeout(hideSplashScreen, 2000);
});

function showSplashScreen() {
    var splashScreen = document.createElement("div");
    splashScreen.classList.add("splash-screen");

    var splashText = document.createElement("div");
    splashText.classList.add("splash-text");
    splashText.textContent = "Cargando...";

    splashScreen.appendChild(splashText);
    document.body.appendChild(splashScreen);
}

function hideSplashScreen() {
    var splashScreen = document.querySelector(".splash-screen");
    if (splashScreen) {
        splashScreen.remove();
    }
}
