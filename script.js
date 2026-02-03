window.addEventListener('load', () => {
  document.querySelector('.card').classList.add('slide-up');
});

const button = document.querySelector(".yes");
button.addEventListener('click', yes);

document.querySelector('.no').addEventListener('mouseenter', () => {
  const btn = document.querySelector('.no');
  const card = document.querySelector('.card');
  const padding = 20; 

  const maxX = card.offsetWidth - btn.offsetWidth - padding;
  const maxY = card.offsetHeight - btn.offsetHeight - padding;

  btn.style.position = 'absolute';
  btn.style.left = (Math.random() * maxX + padding) + 'px';
  btn.style.top = (Math.random() * maxY + padding) + 'px';
  btn.style.transition = 'all 0.3s ease-out';
});

function yes() {
    confetti();
    document.querySelectorAll('.button').forEach(btn => btn.style.display = 'none');
    document.querySelector('.question').textContent = "♥️♥️  Yay!  ♥️♥️";
    document.querySelector('.message').textContent = "I knew you'd say yes :) I never doubted you for a second";
}