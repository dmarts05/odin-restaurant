import createHomeTab from './home-tab';

function clearTab() {
  const tab = document.querySelector('main');

  tab.childNodes.forEach((child) => {
    tab.removeChild(child);
  });
}

function switchTab(e) {
  const tab = document.querySelector('main');

  // Remove current active link styling
  document.querySelector('.active').classList.remove('active');
  clearTab();

  const selectedTab = e.target;
  selectedTab.parentNode.classList.add('active');

  switch (selectedTab.id) {
    case 'home-link':
      tab.appendChild(createHomeTab());
      break;
    case 'menu-link':
      break;
    case 'contact-link':
      break;
    default:
      break;
  }
}

function enableTabSwitching() {
  const menuLinks = document.querySelectorAll('.nav-menu li a');

  menuLinks.forEach((link) => link.addEventListener('click', switchTab));
}

export default enableTabSwitching;
