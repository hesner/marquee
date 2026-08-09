/* =========================================
   FUENTE LED 5 x 7
========================================= */

const FONT = {

    "A": [
        "01110",
        "10001",
        "10001",
        "11111",
        "10001",
        "10001",
        "10001"
    ],

    "B": [
        "11110",
        "10001",
        "10001",
        "11110",
        "10001",
        "10001",
        "11110"
    ],

    "C": [
        "01111",
        "10000",
        "10000",
        "10000",
        "10000",
        "10000",
        "01111"
    ],

    "D": [
        "11110",
        "10001",
        "10001",
        "10001",
        "10001",
        "10001",
        "11110"
    ],

    "E": [
        "11111",
        "10000",
        "10000",
        "11110",
        "10000",
        "10000",
        "11111"
    ],

    "F": [
        "11111",
        "10000",
        "10000",
        "11110",
        "10000",
        "10000",
        "10000"
    ],

    "G": [
        "01111",
        "10000",
        "10000",
        "10111",
        "10001",
        "10001",
        "01111"
    ],

    "H": [
        "10001",
        "10001",
        "10001",
        "11111",
        "10001",
        "10001",
        "10001"
    ],

    "I": [
        "11111",
        "00100",
        "00100",
        "00100",
        "00100",
        "00100",
        "11111"
    ],

    "J": [
        "00111",
        "00010",
        "00010",
        "00010",
        "00010",
        "10010",
        "01100"
    ],

    "K": [
        "10001",
        "10010",
        "10100",
        "11000",
        "10100",
        "10010",
        "10001"
    ],

    "L": [
        "10000",
        "10000",
        "10000",
        "10000",
        "10000",
        "10000",
        "11111"
    ],

    "M": [
        "10001",
        "11011",
        "10101",
        "10101",
        "10001",
        "10001",
        "10001"
    ],

    "N": [
        "10001",
        "11001",
        "11001",
        "10101",
        "10011",
        "10011",
        "10001"
    ],

    "O": [
        "01110",
        "10001",
        "10001",
        "10001",
        "10001",
        "10001",
        "01110"
    ],

    "P": [
        "11110",
        "10001",
        "10001",
        "11110",
        "10000",
        "10000",
        "10000"
    ],

    "Q": [
        "01110",
        "10001",
        "10001",
        "10001",
        "10101",
        "10010",
        "01101"
    ],

    "R": [
        "11110",
        "10001",
        "10001",
        "11110",
        "10100",
        "10010",
        "10001"
    ],

    "S": [
        "01111",
        "10000",
        "10000",
        "01110",
        "00001",
        "00001",
        "11110"
    ],

    "T": [
        "11111",
        "00100",
        "00100",
        "00100",
        "00100",
        "00100",
        "00100"
    ],

    "U": [
        "10001",
        "10001",
        "10001",
        "10001",
        "10001",
        "10001",
        "01110"
    ],

    "V": [
        "10001",
        "10001",
        "10001",
        "10001",
        "10001",
        "01010",
        "00100"
    ],

    "W": [
        "10001",
        "10001",
        "10001",
        "10101",
        "10101",
        "11011",
        "10001"
    ],

    "X": [
        "10001",
        "10001",
        "01010",
        "00100",
        "01010",
        "10001",
        "10001"
    ],

    "Y": [
        "10001",
        "10001",
        "01010",
        "00100",
        "00100",
        "00100",
        "00100"
    ],

    "Z": [
        "11111",
        "00001",
        "00010",
        "00100",
        "01000",
        "10000",
        "11111"
    ],


    "0": [
        "01110",
        "10001",
        "10011",
        "10101",
        "11001",
        "10001",
        "01110"
    ],

    "1": [
        "00100",
        "01100",
        "00100",
        "00100",
        "00100",
        "00100",
        "01110"
    ],

    "2": [
        "01110",
        "10001",
        "00001",
        "00010",
        "00100",
        "01000",
        "11111"
    ],

    "3": [
        "11110",
        "00001",
        "00001",
        "01110",
        "00001",
        "00001",
        "11110"
    ],

    "4": [
        "00010",
        "00110",
        "01010",
        "10010",
        "11111",
        "00010",
        "00010"
    ],

    "5": [
        "11111",
        "10000",
        "10000",
        "11110",
        "00001",
        "00001",
        "11110"
    ],

    "6": [
        "01110",
        "10000",
        "10000",
        "11110",
        "10001",
        "10001",
        "01110"
    ],

    "7": [
        "11111",
        "00001",
        "00010",
        "00100",
        "01000",
        "01000",
        "01000"
    ],

    "8": [
        "01110",
        "10001",
        "10001",
        "01110",
        "10001",
        "10001",
        "01110"
    ],

    "9": [
        "01110",
        "10001",
        "10001",
        "01111",
        "00001",
        "00001",
        "01110"
    ],


    ".": [
        "00000",
        "00000",
        "00000",
        "00000",
        "00000",
        "00100",
        "00100"
    ],

    "-": [
        "00000",
        "00000",
        "00000",
        "11111",
        "00000",
        "00000",
        "00000"
    ],

    "!": [
        "00100",
        "00100",
        "00100",
        "00100",
        "00100",
        "00000",
        "00100"
    ],

    "?": [
        "01110",
        "10001",
        "00001",
        "00010",
        "00100",
        "00000",
        "00100"
    ],

    ":": [
        "00000",
        "00100",
        "00100",
        "00000",
        "00100",
        "00100",
        "00000"
    ],

    "/": [
        "00001",
        "00010",
        "00010",
        "00100",
        "01000",
        "01000",
        "10000"
    ]

};


/* =========================================
   ELEMENTOS
========================================= */

const messageInput =
    document.getElementById("message");

const speedInput =
    document.getElementById("speed");

const speedValue =
    document.getElementById("speedValue");

const showButton =
    document.getElementById("showButton");

const fullscreenButton =
    document.getElementById("fullscreenButton");

const exitFullscreen =
    document.getElementById("exitFullscreen");

const marqueeScreen =
    document.getElementById("marqueeScreen");

const marqueeTrack =
    document.getElementById("marqueeTrack");


/* =========================================
   VARIABLES DE ANIMACIÓN
========================================= */

let position = window.innerWidth;

let animationFrame = null;

let lastTime = null;


/* =========================================
   CREAR UN CARÁCTER LED
========================================= */

function createCharacter(character) {

    const matrix =
        FONT[character] || FONT["?"];

    const characterElement =
        document.createElement("div");

    characterElement.className =
        "matrix-character";


    for (let row = 0; row < 7; row++) {

        for (let column = 0; column < 5; column++) {

            const dot =
                document.createElement("span");

            dot.className =
                "led-dot";


            if (matrix[row][column] === "1") {

                dot.classList.add("on");

            }

            characterElement.appendChild(dot);

        }

    }

    return characterElement;
}


/* =========================================
   CREAR UN MENSAJE
========================================= */

function createMessage(text) {

    const message =
        document.createElement("div");

    message.className =
        "matrix-message";


    const characters =
        text.toUpperCase();


    for (const character of characters) {

        if (character === " ") {

            const space =
                document.createElement("span");

            space.className =
                "matrix-space";

            message.appendChild(space);

        } else {

            const characterElement =
                createCharacter(character);

            message.appendChild(characterElement);

        }

    }

    return message;
}


/* =========================================
   ACTUALIZAR TEXTO
========================================= */

function updateText() {

    let text =
        messageInput.value.trim();


    if (text === "") {

        text = "MARQUESINA LED";

    }


    marqueeTrack.innerHTML = "";


    /*
       Creamos el mensaje dos veces.
       Esto permite que la marquesina pueda
       volver a entrar por la derecha
       continuamente.
    */

    const first =
        createMessage(text);

    const second =
        createMessage(text);


    marqueeTrack.appendChild(first);

    marqueeTrack.appendChild(second);


    resetPosition();
}


/* =========================================
   POSICIÓN
========================================= */

function resetPosition() {

    position =
        window.innerWidth;

    marqueeTrack.style.transform =
        `translateX(${position}px)`;
}


/* =========================================
   VELOCIDAD
========================================= */

function getSpeed() {

    return Number(
        speedInput.value
    );
}


/* =========================================
   ANIMACIÓN
========================================= */

function animate(timestamp) {

    if (!lastTime) {

        lastTime =
            timestamp;
    }


    const deltaTime =
        (timestamp - lastTime) / 1000;


    lastTime =
        timestamp;


    position -=
        getSpeed() * deltaTime;


    /*
       Anchura del primer mensaje.
    */

    const firstMessage =
        marqueeTrack.children[0];


    if (firstMessage) {

        const messageWidth =
            firstMessage.offsetWidth;


        /*
           Cuando el primer mensaje
           desaparece completamente,
           movemos el track de nuevo.
        */

        if (
            position <
            -messageWidth
        ) {

            position +=
                messageWidth;

        }

    }


    marqueeTrack.style.transform =
        `translateX(${position}px)`;


    animationFrame =
        requestAnimationFrame(
            animate
        );
}


/* =========================================
   INICIAR ANIMACIÓN
========================================= */

function startAnimation() {

    if (animationFrame) {

        cancelAnimationFrame(
            animationFrame
        );
    }


    lastTime = null;


    resetPosition();


    animationFrame =
        requestAnimationFrame(
            animate
        );
}


/* =========================================
   MOSTRAR
========================================= */

showButton.addEventListener(
    "click",
    function () {

        updateText();

        startAnimation();

    }
);


/* =========================================
   ENTER
========================================= */

messageInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            updateText();

            startAnimation();

        }

    }
);


/* =========================================
   CONTROL DE VELOCIDAD
========================================= */

speedInput.addEventListener(
    "input",
    function () {

        speedValue.textContent =
            speedInput.value;

    }
);


/* =========================================
   PANTALLA COMPLETA
========================================= */

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


/* =========================================
   SALIR DE PANTALLA COMPLETA
========================================= */

exitFullscreen.addEventListener(
    "click",
    async function () {

        if (document.fullscreenElement) {

            await document.exitFullscreen();

        }

    }
);


/* =========================================
   ESC
========================================= */

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


/* =========================================
   CAMBIO DE TAMAÑO
========================================= */

window.addEventListener(
    "resize",
    function () {

        resetPosition();

    }
);


/* =========================================
   INICIALIZACIÓN
========================================= */

speedValue.textContent =
    speedInput.value;

updateText();

startAnimation();
