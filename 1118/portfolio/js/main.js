/* ======================================================
   MYFOLIO — 설정하기 쉬운 개인 포트폴리오
   제출 전 아래 연락처 두 값만 꼭 확인하세요.
   ====================================================== */
const PROFILE = {
  email: 'yourname@example.com', // 예: 'myname@gmail.com'
  github: '',                    // 예: 'https://github.com/myname'
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

// 1) 라이트/다크 모드: 사용자가 고른 테마를 브라우저에 기억합니다.
const root = document.documentElement;
const themeButtons = $$('.theme-toggle');
let storedTheme = null;
try { storedTheme = localStorage.getItem('myfolio-theme'); } catch (_) { /* storage unavailable */ }
const initialTheme = storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : 'light';
function setTheme(theme) {
  root.dataset.theme = theme;
  const dark = theme === 'dark';
  themeButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(dark));
    button.setAttribute('aria-label', dark ? '라이트 모드 켜기' : '다크 모드 켜기');
  });
  const metaColor = $('meta[name="theme-color"]');
  if (metaColor) metaColor.content = dark ? '#0e1421' : '#fafbff';
  try { localStorage.setItem('myfolio-theme', theme); } catch (_) { /* storage unavailable */ }
}
setTheme(initialTheme);
themeButtons.forEach((button) => button.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
}));

// 2) 모바일 메뉴: 열고 닫으며 항목을 선택하면 자동으로 닫힙니다.
const menuToggle = $('#menu-toggle');
const mobileNav = $('#mobile-nav');
function setMenuOpen(open) {
  if (!menuToggle || !mobileNav) return;
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  mobileNav.hidden = !open;
}
menuToggle?.addEventListener('click', () => setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true'));
$$('#mobile-nav a').forEach((link) => link.addEventListener('click', () => setMenuOpen(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuOpen(false);
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 820) setMenuOpen(false);
});

// 3) 기술 스택 분류 필터: DOM 요소를 데이터에 따라 숨기거나 표시합니다.
const filterButtons = $$('.filter-chip');
const skillCards = $$('.skill-card');
filterButtons.forEach((button) => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  filterButtons.forEach((item) => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  skillCards.forEach((card) => {
    card.hidden = category !== 'all' && card.dataset.category !== category;
  });
}));

// 4) 스크롤 상태에 따라 헤더와 활성 메뉴를 변경합니다.
const header = $('.site-header');
const progressFill = $('#scroll-progress-fill');
const navLinks = $$('.desktop-nav [data-nav]');
const sections = $$('main section[id]');
function updateScroll() {
  const y = window.scrollY;
  header?.classList.toggle('is-scrolled', y > 10);
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  if (progressFill) progressFill.style.width = `${maxScroll > 0 ? (y / maxScroll) * 100 : 0}%`;
  let currentSection = 'home';
  const offset = window.innerHeight * 0.35 + 82;
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= offset) currentSection = section.id;
  });
  navLinks.forEach((link) => {
    const active = link.getAttribute('href') === `#${currentSection}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
window.addEventListener('scroll', updateScroll, { passive: true });
window.addEventListener('resize', updateScroll, { passive: true });
updateScroll();

// 5) 스크롤 등장 애니메이션: 애니메이션을 줄여 달라는 OS 설정을 존중합니다.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reducedMotion && 'IntersectionObserver' in window) {
  const elements = $$('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -35px 0px', threshold: 0.05 });
  elements.forEach((element) => observer.observe(element));
  root.classList.add('js-ready');
}

// 6) 연락처: 비어 있는 GitHub 주소나 미수정 예시 메일은 실제 정보인 척하지 않습니다.
const emailDisplay = $('#email-display');
const githubLink = $('#github-link');
const placeholderNote = $('#contact-placeholder-note');
const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(PROFILE.email);
const sampleEmail = PROFILE.email.toLowerCase() === 'yourname@example.com';
if (emailDisplay) emailDisplay.textContent = PROFILE.email || '이메일을 입력해 주세요';
if (placeholderNote) placeholderNote.hidden = validEmail && !sampleEmail;
if (githubLink) {
  if (/^https:\/\/github\.com\/[A-Za-z0-9-]+\/?$/.test(PROFILE.github)) {
    githubLink.href = PROFILE.github;
  } else {
    githubLink.removeAttribute('href');
    githubLink.setAttribute('aria-disabled', 'true');
    githubLink.title = 'js/main.js의 PROFILE.github를 입력해 주세요';
  }
}
let toastTimer;
function showToast(message) {
  const toast = $('#toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2600);
}
$('#copy-email')?.addEventListener('click', async () => {
  if (!validEmail || sampleEmail) {
    showToast('js/main.js에서 실제 이메일을 먼저 입력해 주세요.');
    return;
  }
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(PROFILE.email);
    } else {
      const input = document.createElement('textarea');
      input.value = PROFILE.email;
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();
      const success = document.execCommand('copy');
      input.remove();
      if (!success) throw new Error('copy unavailable');
    }
    showToast('이메일 주소가 복사되었습니다!');
  } catch (_) {
    showToast('복사할 수 없습니다. 화면에 표시된 이메일을 이용해 주세요.');
  }
});
githubLink?.addEventListener('click', (event) => {
  if (githubLink.getAttribute('aria-disabled') === 'true') {
    event.preventDefault();
    showToast('js/main.js에서 GitHub 프로필 주소를 입력해 주세요.');
  }
});

// 7) 자동 연도 갱신
const yearLabel = $('#current-year');
if (yearLabel) yearLabel.textContent = String(new Date().getFullYear());
