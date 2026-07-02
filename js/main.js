/* ============================================================
   Sayt interaktivligi: mobil menyu, statistika sanoqlari,
   scrollda paydo bo'lish, joriy yil.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobil menyu ---------- */
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });

    // Havolaga bosilganda menyuni yopish
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Joriy yil (footer) ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  /* ---------- Statistika sanoqlari ---------- */
  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10) || 0;
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();

    function frame(now) {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * target);
      el.innerHTML = value + (suffix ? '<span class="suffix">' + suffix + '</span>' : '');
      if (progress < 1) { requestAnimationFrame(frame); }
    }
    requestAnimationFrame(frame);
  }

  /* ---------- Kuzatuvchi: scrollda animatsiya + sanoq ---------- */
  const revealEls = document.querySelectorAll(
    '.section-head, .about-grid, .timeline-item, .card, .contact-item, .stat'
  );
  revealEls.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');

        const numEl = entry.target.querySelector('.stat-num');
        if (numEl && !numEl.dataset.done) {
          numEl.dataset.done = '1';
          animateCount(numEl);
        }
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15 });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Eski brauzerlar: hammasini ko'rsatib qo'yamiz
    revealEls.forEach(function (el) {
      el.classList.add('visible');
      const numEl = el.querySelector('.stat-num');
      if (numEl) animateCount(numEl);
    });
  }
});
