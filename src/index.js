import './styles.css';
import menu from './menu.json';
import menuTemplate from './templates/menu-list.hbs';

const list = document.querySelector('ul.js-menu');
const switchBtn = document.querySelector('#theme-switch-toggle');
const wrapper = document.querySelector('body');

list.innerHTML = menuTemplate(menu);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (localStorage.getItem('theme') !== null) {
  wrapper.classList.add(Theme[localStorage.getItem('theme')]);
  if (localStorage.getItem('theme') === 'DARK') {
    switchBtn.checked = true;
  }
}

switchBtn.addEventListener('change', event => {
  if (event.target.checked) {
    wrapper.classList.add(Theme.DARK);
    wrapper.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', 'DARK');
  } else {
    wrapper.classList.remove(Theme.DARK);
    wrapper.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', 'LIGHT');
  }
});
