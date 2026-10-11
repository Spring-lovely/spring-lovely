(() => {
  const root = document.documentElement;
  const switcher = document.querySelector('.language-switch');
  const buttons = [...switcher.querySelectorAll('button')];
  const setLanguage = (language) => {
    const valid = ['zh', 'en', 'both'].includes(language) ? language : 'both';
    root.dataset.language = valid;
    root.lang = valid === 'en' ? 'en' : 'zh-CN';
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === valid)));
    try { localStorage.setItem('spring-language', valid); } catch { /* Storage can be disabled. */ }
  };
  let preferred = 'both';
  try { preferred = localStorage.getItem('spring-language') || 'both'; } catch { /* Use the bilingual default. */ }
  setLanguage(preferred);
  switcher.hidden = false;
  buttons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  document.querySelector('#year').textContent = new Date().getFullYear();

  const links = [...document.querySelectorAll('.sidebar nav a')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href')));
  let scheduled = false;
  const updateNavigation = () => {
    let active = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= window.innerHeight * 0.35) active = section;
    }
    if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      active = sections[sections.length - 1];
    }
    links.forEach(link => {
      if (link.hash === `#${active.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scheduled = false;
  };
  const scheduleUpdate = () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateNavigation); }
  };
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  buttons.forEach(button => button.addEventListener('click', scheduleUpdate));
  updateNavigation();
})();
