import './styles.css';
import menu from './menu.json';
import menuTemplate from './templates/menu-list.hbs';

const list = document.querySelector('ul.js-menu');
const switchBtn = document.querySelector('#theme-switch-toggle');
const wrapper = document.body;

list.innerHTML = menuTemplate(menu);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const theme = localStorage.getItem('theme') || Theme.LIGHT;
wrapper.classList.add(theme);
localStorage.setItem('theme', theme);
switchBtn.checked = theme === Theme.DARK;

switchBtn.addEventListener('change', event => {
  if (event.target.checked) {
    wrapper.classList.add(Theme.DARK);
    wrapper.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    wrapper.classList.remove(Theme.DARK);
    wrapper.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
});
