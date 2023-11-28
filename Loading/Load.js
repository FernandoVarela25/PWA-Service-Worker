function loadDoc(url, nameFunction) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {nameFunction(this);}
    xhttp.open("GET", url);
    xhttp.send();
}

function loadPortada(xhttp){document.getElementById("Content").innerHTML = xhttp.responseText;}
function loadIntro(xhttp){document.getElementById("Content").innerHTML = xhttp.responseText;}
function loadJustificacion(xhttp){document.getElementById("Content").innerHTML = xhttp.responseText;}
function loadParametros(xhttp){document.getElementById("Content").innerHTML = xhttp.responseText;}
function loadPruebas(xhttp){document.getElementById("Content").innerHTML = xhttp.responseText;}
function loadConclu(xhttp){document.getElementById("Content").innerHTML = xhttp.responseText;}
function loadFuentes(xhttp){document.getElementById("Content").innerHTML = xhttp.responseText;}