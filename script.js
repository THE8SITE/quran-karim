const container = document.getElementById("videoContainer");

videos.forEach(video => {
  const card = document.createElement("div");
  card.className = "card";

  if (video.type === "youtube") {
    card.innerHTML = `
      <iframe src="${video.url}" allowfullscreen></iframe>
      <h3>${video.surah}</h3>
      <span>${video.reader}</span>
    `;
  } else {
    card.innerHTML = `
      <video controls>
        <source src="${video.url}" type="video/mp4">
      </video>
      <h3>${video.surah}</h3>
      <span>${video.reader}</span>
    `;
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
