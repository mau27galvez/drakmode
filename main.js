'use strict'

var white = document.getElementById('white');
var dark = document.getElementById('dark');
var estilo = document.getElementById('estilo');

white.addEventListener("click", ()=>
{
    estilo.href="./style.css";
});

dark.addEventListener("click", () => {
    estilo.href = "./dark-style.css";
});