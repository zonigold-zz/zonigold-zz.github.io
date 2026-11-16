/* Progressive enhancement: content and disclosures also work without JavaScript. */
(() => {
  'use strict';
  const root = document.documentElement;
  root.classList.add('js');
  const themeButton = document.querySelector('.theme-toggle');
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const setTheme = (theme) => {
    root.dataset.theme = theme;
    themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
    themeButton.title = themeButton.getAttribute('aria-label');
    themeMeta.content = theme === 'dark' ? '#171916' : '#f3f3e9';
  };
  try { setTheme(localStorage.getItem('zion-theme') === 'light' ? 'light' : 'dark'); } catch { setTheme('dark'); }
  themeButton.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem('zion-theme', next); } catch { /* Storage is optional. */ }
  });

  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-toggle');
  const setMenu = (open) => {
    menuButton.setAttribute('aria-expanded', String(open));
    header.classList.toggle('menu-open', open);
  };
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && header.classList.contains('menu-open')) { setMenu(false); menuButton.focus(); }
  });
  const mobileQuery = window.matchMedia('(max-width: 760px)');
  mobileQuery.addEventListener('change', () => setMenu(false));

  // Open the complete disclosure ancestry for shared links and in-page navigation.
  const revealHash = () => {
    let target;
    try { target = document.getElementById(decodeURIComponent(location.hash.slice(1))); } catch { return; }
    if (!target) return;
    let current = target;
    while (current) { if (current instanceof HTMLDetailsElement) current.open = true; current = current.parentElement; }
  };
  window.addEventListener('hashchange', revealHash);
  document.querySelectorAll('a[href^="#"]').forEach((link) => link.addEventListener('click', () => {
    const target = document.getElementById(link.hash.slice(1));
    if (target instanceof HTMLDetailsElement) target.open = true;
  }));
  revealHash();

  if ('IntersectionObserver' in window) {
    const navLinks = Array.from(document.querySelectorAll('.main-nav a'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
    document.querySelectorAll('main > section[id]').forEach((section) => observer.observe(section));
  }

  let toastTimer;
  const announce = (text) => {
    const toast = document.querySelector('.toast');
    toast.textContent = text;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 4500);
  };
  document.querySelectorAll('.copy-citation').forEach((button) => button.addEventListener('click', async () => {
    const source = button.closest('.publication').querySelector('.citation-source');
    try {
      if (!navigator.clipboard) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(source.textContent.trim());
      announce('Citation copied to clipboard.');
    } catch {
      source.hidden = false;
      source.classList.add('citation-fallback');
      const range = document.createRange();
      range.selectNodeContents(source);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      announce('Citation selected. Use your browser’s Copy command.');
    }
  }));

  let printState = [];
  window.addEventListener('beforeprint', () => {
    printState = Array.from(document.querySelectorAll('details')).map((detail) => [detail, detail.open]);
    printState.forEach(([detail]) => { detail.open = true; });
  });
  window.addEventListener('afterprint', () => { printState.forEach(([detail, open]) => { detail.open = open; }); });
  document.querySelector('.print-profile').addEventListener('click', () => window.print());
})();
