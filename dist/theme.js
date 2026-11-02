// Applicato prima del CSS per evitare lampeggiamenti del tema iniziale.
(() => {
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = null;
  try { preference = localStorage.getItem('fuorigiri-theme'); } catch {}
  if (preference !== 'dark' && preference !== 'light') preference = null;

  function apply(theme) {
    document.documentElement.dataset.theme = theme;
    const button = document.querySelector('.theme-toggle');
    if (!button) return;
    const dark = theme === 'dark';
    const label = dark ? 'Attiva tema chiaro' : 'Attiva tema scuro';
    button.setAttribute('aria-label', label);
    button.setAttribute('aria-pressed', String(dark));
    button.title = label;
    button.querySelector('.theme-label').textContent = dark ? 'Tema chiaro' : 'Tema scuro';
  }

  apply(preference || (system.matches ? 'dark' : 'light'));
  system.addEventListener('change', event => {
    if (!preference) apply(event.matches ? 'dark' : 'light');
  });
  document.addEventListener('DOMContentLoaded', () => {
    apply(document.documentElement.dataset.theme);
    document.querySelector('.theme-toggle').addEventListener('click', () => {
      preference = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('fuorigiri-theme', preference); } catch {}
      apply(preference);
    });
  });
})();
