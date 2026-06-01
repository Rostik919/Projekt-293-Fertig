const NAV_HTML = `
<nav class="navbar">
  <a href="index.html" class="nav-logo"><span class="accent">My</span>Portfolio</a>
  <ul class="nav-links" id="navLinks">
    <li><a href="index.html#ueber-mich">Über mich</a></li>
    <li><a href="faehigkeiten.html">Fähigkeiten</a></li>
    <li><a href="portfolio.html">Portfolio</a></li>
    <li><a href="kontakt.html" class="nav-kontakt">Kontakt</a></li>
  </ul>
  <button class="hamburger" id="hamburger" aria-label="Menü öffnen">
    <span></span><span></span><span></span>
  </button>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-grid">
    <div>
      <div class="footer-title">Persönliche Daten</div>
      <div class="footer-subtitle">Ein bisschen mehr über mich.</div>
      <div class="footer-row">
        <div class="footer-icon">📞</div>
        <div>
          <div class="footer-info-label">Nummer</div>
          <div class="footer-info-val">+41765415571</div>
        </div>
      </div>
      <div class="footer-row">
        <div class="footer-icon">✉️</div>
        <div>
          <div class="footer-info-label">Email</div>
          <div class="footer-info-val">kylrost@gmail.com</div>
        </div>
      </div>
      <div class="footer-row">
        <div class="footer-icon">📍</div>
        <div>
          <div class="footer-info-label">Address</div>
          <div class="footer-info-val">Dorf 33, 9063 Stein AR, Schweiz</div>
        </div>
      </div>
    </div>
    <div></div>
    <div class="footer-deco">
      <div class="deco-wrap">
        <div class="deco-curve"></div>
        <div class="deco-tri"></div>
        <div class="deco-dot"></div>
      </div>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  const pageWrap = document.querySelector('.page-wrap');
  if (pageWrap) pageWrap.insertAdjacentHTML('beforeend', FOOTER_HTML);

  const file = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === file || (file === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  const ham = document.getElementById('hamburger');
  const nav = document.getElementById('navLinks');
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    nav.classList.toggle('open');
  });
  document.addEventListener('click', e => {
    if (!ham.contains(e.target) && !nav.contains(e.target)) {
      ham.classList.remove('open');
      nav.classList.remove('open');
    }
  });
});
