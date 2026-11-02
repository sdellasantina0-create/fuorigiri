const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  toggle.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}));
const mood = document.querySelector('#mood');
const suggestion = document.querySelector('#suggestion');
const ideas = {
  'Passi e tornanti': 'Punta verso un passo aperto della tua zona. Parti presto, scegli una sosta panoramica e lascia spazio a una pausa caffè. Il panorama vale più del cronometro.',
  'Sale sulla visiera': 'Cerca una strada costiera e un piccolo borgo dove fermarti. Evita le ore più trafficate e regalati una sosta a piedi, con il mare davanti.',
  'Fuori dalle solite rotte': 'Scegli un borgo a un’ora da casa e raggiungilo dalle strade secondarie. Prepara il percorso prima di partire e concediti una deviazione panoramica.'
};
document.querySelector('#inspiration').addEventListener('click', () => { suggestion.textContent = ideas[mood.value]; });
document.querySelectorAll('[data-route]').forEach(card => card.addEventListener('click', () => { mood.value = card.dataset.route; suggestion.textContent = ideas[mood.value]; }));
