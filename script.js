/* ==========================================
   ELEMENTOS
========================================== */
const messageInput = document.getElementById("message");
const speedInput = document.getElementById("speed");
const showButton = document.getElementById("showButton");
const fullscreenButton = document.getElementById("fullscreenButton");
const exitFullscreen = document.getElementById("exitFullscreen");
const marqueeScreen = document.getElementById("marqueeScreen");
const marqueeTrack = document.getElementById("marqueeTrack");
const marqueeText = document.getElementById("marqueeText");
/* ==========================================
   VARIABLES
========================================== */
let position = window.innerWidth;
let animationFrame = null;
let lastTime = null;
/* ==========================================
   CAMBIAR TEXTO
========================================== */
function updateText() {
    let text = messageInput.value.trim();
    if (text === "") {
        text = "MARQUESINA LED";
    }
    marqueeText.textContent = text;
    resetPosition();
}
/* ==========================================
   POSICIÓN INICIAL
========================================== */
function resetPosition() {
    position = window.innerWidth;
    marqueeTrack.style.transform =
        `translateX(${position}px)`;
}
/* ==========================================
   VELOCIDAD
========================================== */
function getSpeed() {
    return Number(speedInput.value);
}
/* ==========================================
   ANIMACIÓN
========================================== */
function animate(timestamp) {
    if (!lastTime) {
        lastTime = timestamp;
    }
    const deltaTime =
        (timestamp - lastTime) / 1000;
    lastTime = timestamp;
    position -= getSpeed() * deltaTime;
    const textWidth =
        marqueeText.offsetWidth;
    if (position < -textWidth) {
        position = window.innerWidth;
    }
    marqueeTrack.style.transform =
        `translateX(${position}px)`;
    animationFrame =
        requestAnimationFrame(animate);
}
/* ==========================================
   INICIAR ANIMACIÓN
========================================== */
function startAnimation() {
    if (animationFrame) {
        cancelAnimationFrame(animationFrame);
    }
    lastTime = null;
    resetPosition();
    animationFrame =
        requestAnimationFrame(animate);
}
/* ==========================================
   BOTÓN MOSTRAR
========================================== */
showButton.addEventListener(
    "click",
    function () {
        updateText();
        startAnimation();
    }
);
/* ==========================================
   ENTER
========================================== */
messageInput.addEventListener(
    "keydown",
    function (event) {
        if (event.key === "Enter") {
            updateText();
            startAnimation();
        }
    }
);
/* ==========================================
   PANTALLA COMPLETA
========================================== */
fullscreenButton.addEventListener(
    "click",
    async function () {
        try {
            await marqueeScreen.requestFullscreen();
        } catch (error) {
            console.error(
                "No se pudo activar pantalla completa:",
                error
            );
        }
    }
);
/* ==========================================
   SALIR DE PANTALLA COMPLETA
========================================== */
exitFullscreen.addEventListener(
    "click",
    async function () {
        if (document.fullscreenElement) {
            await document.exitFullscreen();
        }
    }
);
/* ==========================================
   TECLA ESC
========================================== */
document.addEventListener(
    "keydown",
    function (event) {
        if (
            event.key === "Escape" &&
            document.fullscreenElement
        ) {
            document.exitFullscreen();
        }
    }
);
/* ==========================================
   CAMBIO DE TAMAÑO
========================================== */
window.addEventListener(
    "resize",
    function () {
        resetPosition();
    }
);
/* ==========================================
   INICIO
========================================== */
updateText();
startAnimation();
