const container = document.getElementById("videoContainer");

videos.forEach(video => {
  const card = document.createElement("div");
  card.className = "card";

  if (video.type === "local") {
    const vid = document.createElement("video");
    vid.controls = true;
    vid.preload = "metadata"; // تحميل أسرع
    vid.width = 100;
    vid.height = 180;

    const source = document.createElement("source");
    source.src = video.url;
    source.type = "video/mp4";
    vid.appendChild(source);

    card.appendChild(vid);
    card.innerHTML += `<h3>${video.surah}</h3><span>${video.reader}</span>`;
  }

  container.appendChild(card);
});

/* الوضع الليلي */
const toggleBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  toggleBtn.textContent = "☀️";
}

toggleBtn.onclick = () => {
  document.body.classList.toggle("light");
  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "🌙";
  }
};
