const search = document.getElementById('search');
const cards = document.querySelectorAll('.card');
const toggle = document.getElementById('toggleMode');

search.addEventListener('input',()=>{
  const val = search.value.toLowerCase();
  cards.forEach(card=>{
    card.style.display = card.dataset.title.includes(val) ? 'block' : 'none';
  });
});

toggle.onclick = ()=>{
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
};