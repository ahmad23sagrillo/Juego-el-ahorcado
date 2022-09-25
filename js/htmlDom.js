var sounds = ["button.mp3", "error.mp3", "Lost.mp3", "Winner.mp3"];

window.addEventListener("load", function() {
    var buttons = document.querySelectorAll('button,a');
    const btnClick = function(event) {
        playSound(sounds[0]);
    }
    buttons.forEach(btn => { btn.addEventListener("click", btnClick) });
});

function pageChandler(request) {
    var request = document.querySelector(request);
    for (var i = 0; i < 3; i++) {
        var search = ".page_" + (i + 1);
        var main = document.querySelector(search);
        visibilityMain(main, false);
    }
    visibilityMain(request, true);
}

function visibilityMain(page, action) {
    if (action == true) {
        page.style.display = "block";
    } else {
        page.style.display = "none";
    }
}

function popup(request) {
    if (request == false) {
        var response = document.querySelector("#popupMessages");
        response.style.display = "none";
    } else {
        var response = document.querySelector("#popupAlert");
        var popup = document.querySelector("#popupMessages");
        response.innerHTML = request;
        popup.style.display = "block";
    }
}

function cleanInput(request) {
    var response = document.querySelector(request);
    response.value = "";
}

function playSound(request) {
    const music = new Audio("sounds/" + request);
    music.play();
}

function createElementHtml(request, id) {
    var response = document.createElement(request);
    if (id != false) {
        response.setAttribute('id', id);
    }
    return response;
}

function changeTextContent(element, request) {
    element.textContent = request;
}