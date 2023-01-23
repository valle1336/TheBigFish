"use strict";


// HTML ELEMENT
const fisk = document.getElementById("fiskid");
const knapp1 = document.getElementById("k1");
const knapp2 = document.getElementById("k2");
const knapp3 = document.getElementById("k3");
const knapp4 = document.getElementById("k4");



// FUNKTIONER 
function addRotera() {
    fiskid.classList.add("rotera");

    setTimeout(function() {
        fiskid.classList.remove("rotera");

    }, 5000);
}

function addForstora() {
    fiskid.classList.add("forstora");

    setTimeout(function() {
        fiskid.classList.remove("forstora");

    }, 5000);
}

function addForminska() {
    fiskid.classList.add("forminska");

    setTimeout(function() {
        fiskid.classList.remove("forminska");

    }, 5000);
}

function addRotera_forstora() {
    fiskid.classList.add("rotera_forstora");

    setTimeout(function() {
        fiskid.classList.remove("rotera_forstora");

    }, 5000);
}






// EVENTLYSSNARE
knapp1.addEventListener("click", addRotera);

knapp2.addEventListener("click", addForstora);

knapp3.addEventListener("click", addForminska);

knapp4.addEventListener("click", addRotera_forstora);