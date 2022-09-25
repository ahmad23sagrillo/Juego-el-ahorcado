var canva = document.querySelector("canvas");
var ctx = canva.getContext("2d");
var drawColor = "#00008b";
var backgroundColor = "#EAFAF1";
var stroke = 4;

window.addEventListener("load", function canvasSettings() {
    canva.width = 300;
    canva.height = 300;
    drawRectangle(0, 0, canva.width, canva.height, backgroundColor);
});

function graphDrawing(request) {
    switch (request) {
        case 1:
            drawLine(60, 300, drawColor, stroke, 60, 10);
            break;
        case 2:
            drawLine(59, 11, drawColor, stroke, 200, 11)
            break;
        case 3:
            drawLine(199, 10, drawColor, stroke, 199, 40);
            break;
        case 4:
            drawCircle(200, 70, 30, drawColor);
            break;
        case 5:
            drawLine(200, 98, drawColor, stroke, 200, 220);
            break;
        case 6:
            drawLine(200, 98, drawColor, stroke, 150, 170);
            break;
        case 7:
            drawLine(200, 98, drawColor, stroke, 250, 170);
            break;
        case 8:
            drawLine(200, 219, drawColor, stroke, 150, 270);
            break;
        case 9:
            drawLine(200, 219, drawColor, stroke, 250, 270);
    }
    playSound(sounds[1]);
}

function drawCircle(x, y, radio, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radio, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawRectangle(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function drawLine(x, y, color, stroke, xTo, yTo) {
    ctx.lineWidth = stroke;
    ctx.strokeStyle = color;
    ctx.moveTo(x, y);
    ctx.lineTo(xTo, yTo);
    ctx.stroke();
    ctx.closePath();
}

function clearCanvas() {
    canva.width = canva.width;
}