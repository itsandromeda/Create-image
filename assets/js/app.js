/*global document*/

function creandoDiv(getURL) {
    "use strict";
    var contenedor = document.getElementById("contenedor"),
        div = document.createElement("div"),
        img = document.createElement("img");
    
    img.setAttribute("src", getURL);
    div.classList.add("contenedor-imagen");
    div.appendChild(img);
    contenedor.appendChild(div);
}

var inputURL = document.getElementById("url");

var getURL = function (e) {
    "use strict";
    if (e.keyCode === 13) {
        creandoDiv(this.value);
        this.value = "";
    }
};

inputURL.onkeydown = getURL;