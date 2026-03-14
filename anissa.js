//* печатающийся текст */
const phrases = [
  "Аниса ты самая красивая девушка которую я когда либо видел",
  "Твои янтарьные глаза самые красивые",
  "Твой прекрасный голос сводит меня с ума",
  "Ты вдохновляешь меня быть лучше",
  "С тобой мне не страшны никакие преграды",
  "ТЫ САМАЯ САМАЯ ВО ВСЕМ❤️",
  "Ты даешь мне сил не сдаваться",
  "ты стала моим маяком",
  "ты моя путеводная звезда",
  "Этот сайт только для тебя ❤️",
  "Ты все о чем я когда либо мечтал",
  "Я очень сильно скучаю по тебе",
  "Я ОЧЕНЬ СИЛЬНО ЛЮБЛЮ ТЕБЯ❤️"
];

let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

const text = document.getElementById("text");

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    text.textContent = currentPhrase.substring(0, letterIndex + 1);
    letterIndex++;

    if (letterIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    text.textContent = currentPhrase.substring(0, letterIndex - 1);
    letterIndex--;

    if (letterIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(typeEffect, 80);
}

typeEffect();

/* сердце из маленьких сердечек */
const heartContainer = document.getElementById("heart-container");

function createHeartShape() {
  const scale = heartContainer.offsetWidth / 50; // масштаб под контейнер
  let t = 0;

  const interval = setInterval(() => {
    let x = 16 * Math.pow(Math.sin(t), 3);
    let y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

    x *= scale;
    y *= scale;

    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = (50 + (x / heartContainer.offsetWidth) * 100) + "%";
    heart.style.top = (50 - (y / heartContainer.offsetHeight) * 100) + "%";

    heartContainer.appendChild(heart);

    t += 0.2;

    if (t >= Math.PI * 2) {
      clearInterval(interval);
    }
  }, 50);
}
createHeartShape();

/* падающие лепестки сакуры */
const sakuraContainer = document.querySelector(".sakura-outer-container");

function createSakuraPetal() {
  const petal = document.createElement("div");
  petal.className = "sakura-petal";
  petal.innerHTML = "🌸";
  petal.style.left = Math.random() * window.innerWidth + "px";
  petal.style.animationDuration = (5 + Math.random() * 5) + "s";
  petal.style.fontSize = (window.innerWidth * 0.03 + Math.random() * 10) + "px"; // адаптивный размер
  sakuraContainer.appendChild(petal);

  petal.addEventListener("animationend", () => {
    petal.remove();
  });
}

setInterval(createSakuraPetal, 300);