//document.body.style.background = "purple"
//document.querySelector("h1").style.color = "green"

"use strict";

var prekesKaina = +prompt("iveskite prekes kaina")
var pristatymas = 2

var viso = prekesKaina + pristatymas
var miestas

do {
  var miestas = prompt("Ar reikalingas pristatymas i namus yes/no")
}while (miestas !== "yes" && miestas !== "no") 


if (miestas == "no") {
    alert(prekesKaina);
    alert("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a");
}

else if (miestas == "yes") {
    var kur = prompt("kur pristatyt");
    alert("prekes kaina " + prekesKaina);
    alert("pristatymas " + pristatymas);
    alert("is viso " + viso);
    alert("preke pristatysime i " + kur)

} 


