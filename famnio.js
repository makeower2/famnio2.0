// Famnio shared JavaScript

// =====================
// GOOGLE ANALYTICS
// =====================
const GA_ID = 'G-E045N6HW9E';

function loadGA() {
  if (window._gaLoaded) return;
  window._gaLoaded = true;
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);
}

// =====================
// COOKIE CONSENT
// =====================
function initCookies() {
  const consent = localStorage.getItem('famnio_cookie');
  if (consent === 'accepted') {
    loadGA();
    document.getElementById('cookie').style.display = 'none';
  } else if (consent === 'declined') {
    document.getElementById('cookie').style.display = 'none';
  }
  // else: show banner
}

function acceptCookies() {
  localStorage.setItem('famnio_cookie', 'accepted');
  document.getElementById('cookie').style.display = 'none';
  loadGA();
}

function declineCookies() {
  localStorage.setItem('famnio_cookie', 'declined');
  document.getElementById('cookie').style.display = 'none';
}

// Legacy alias
function hideCookie() { declineCookies(); }

// =====================
// NAV
// =====================
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// =====================
// INIT
// =====================
document.addEventListener('DOMContentLoaded', initCookies);
