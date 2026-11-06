let scoreHomeElm = document.getElementById("score-home");
let scoreGuestElm = document.getElementById("score-guest");

// HOME
let Hscore1 = document.getElementById("home-score-btn-1");
let Hscore2 = document.getElementById("home-score-btn-2");
let Hscore3 = document.getElementById("home-score-btn-3");
let HscoreReset = document.getElementById("reset-home-score");
//END HOME

//GUEST
let Gscore1 = document.getElementById("guest-score-btn-1");
let Gscore2 = document.getElementById("guest-score-btn-2");
let Gscore3 = document.getElementById("guest-score-btn-3");
let GscoreReset = document.getElementById("reset-guest-score");
//END GUEST


//HOME--BUTTONS
Hscore1.addEventListener("click", () => {
  scoreHomeElm.textContent++;
});

Hscore2.addEventListener("click", () => {
    scoreHomeElm.textContent = Number(scoreHomeElm.textContent) +2
});

Hscore3.addEventListener("click", () => {
  scoreHomeElm.textContent = Number(scoreHomeElm.textContent) +3
});

HscoreReset.addEventListener("click", () => {
  scoreHomeElm.textContent = 0;
});
//END--HOME--BUTTONS

//GUEST--BUTTONS
Gscore1.addEventListener("click", () => {
  scoreGuestElm.textContent++;
});

Gscore2.addEventListener("click", () => {
    scoreGuestElm.textContent = Number(scoreGuestElm.textContent) +2
});

Gscore3.addEventListener("click", () => {
  scoreGuestElm.textContent = Number(scoreGuestElm.textContent) +3
});

GscoreReset.addEventListener("click", () => {
  scoreGuestElm.textContent = 0;
});
//END--GUEST--BUTTONS
