const startBtn = document.getElementById("startBtn");
const hiddenSections = document.querySelectorAll(".hidden");

startBtn.addEventListener("click", () => {
  hiddenSections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.remove("hidden");
      section.classList.add("show");
    }, index * 450);
  });

  startBtn.textContent = "Keep scrolling ♡";
  startBtn.disabled = true;

  setTimeout(() => {
    document.querySelector(".birthday").scrollIntoView({
      behavior: "smooth"
    });
  }, 300);
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 20) + "px";
  heart.style.animationDuration = (5 + Math.random() * 6) + "s";

  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 11000);
}

setInterval(createHeart, 700);
