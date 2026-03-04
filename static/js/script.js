/* Sidebar toggle */
const sidebar = document.getElementById('sidebar');
const main = document.getElementById('main-content');
const toggleBtn = document.getElementById('sidebarToggle');
const overlay = document.getElementById('overlay');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show');
  sidebar.classList.toggle('collapsed');
  overlay.classList.toggle('show');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('show');
  sidebar.classList.add('collapsed');
  overlay.classList.remove('show');
});

/* Theme logic */
const getStoredTheme = () => localStorage.getItem('theme');
const setStoredTheme = theme => localStorage.setItem('theme', theme);

const getPreferredTheme = () => {
  const storedTheme = getStoredTheme();
  if (storedTheme) return storedTheme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const setTheme = theme => {
  if (theme === 'auto') {
    document.documentElement.setAttribute(
      'data-bs-theme',
      window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    );
  } else {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }
};

setTheme(getPreferredTheme());

document.querySelectorAll('[data-bs-theme-value]').forEach(button => {
  button.addEventListener('click', () => {
    const theme = button.getAttribute('data-bs-theme-value');
    setStoredTheme(theme);
    setTheme(theme);
  });
});