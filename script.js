/* 🌙 / ☀️ */
const toggle = document.getElementById("toggleMode");
const body = document.body;

toggle.onclick = () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  toggle.textContent = body.classList.contains("dark") ? "🌙" : "☀️";
};

/* 🔍 Search */
const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

search.addEventListener("input", () => {
  const value = search.value.trim();

  cards.forEach(card => {
    const title = card.dataset.title;
    card.style.display = title.includes(value) ? "block" : "none";
  });
});

/* ⏸️ إيقاف باقي الفيديوهات */
const videos = document.querySelectorAll("video");
videos.forEach(v => {
  v.addEventListener("play", () => {
    videos.forEach(o => o !== v && o.pause());
  });
});
