/* ==========================================
   MARQUESINA LED
========================================== */
/* ==========================================
   CAPTCHA
========================================== */
function captchaVerified() {
    const captchaScreen = document.getElementById("captchaScreen");
    const app = document.getElementById("app");
    captchaScreen.classList.add("hidden");
    app.classList.remove("hidden");
}
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
   VARIABLES DE ANIMACIÓN
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
    const value = Number(speedInput.value);
    return value;
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
    const speed = getSpeed();
    position -= speed * deltaTime;
    const textWidth =
        marqueeText.offsetWidth;
    /*
       Cuando el texto desaparece completamente
       por la izquierda, vuelve a comenzar desde
       la derecha.
    */
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
   ENTER EN EL CAMPO DE TEXTO
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
   ESCAPE
========================================== */
document.addEventListener(
    "keydown",
    function (event) {
        if (event.key === "Escape") {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
        }
    }
);
/* ==========================================
   AJUSTE AL CAMBIAR TAMAÑO
========================================== */
window.addEventListener(
    "resize",
    function () {
        if (!document.fullscreenElement) {
            resetPosition();
        }
    }
);
/* ==========================================
   INICIO
========================================== */
updateText();
startAnimation();
