class DOMElements {
  // Modal window
  modal = document.querySelector('.modal') as HTMLElement;
  overlay = document.querySelector('.overlay') as HTMLElement;
  btnCloseModal = document.querySelector(
    '.btn--close-modal'
  ) as HTMLButtonElement;
  btnsOpenModal = document.querySelectorAll('.btn--show-modal')!;

  btnScrollTo = document.querySelector('.btn--scroll-to') as HTMLButtonElement;
  featuresSection = document.querySelector('#section--1') as HTMLElement;
  navigation = document.querySelector('.nav__links') as HTMLElement;

  // Tabbed Component
  tabs = document.querySelectorAll('.operations__tab')!;
  tabsContainer = document.querySelector(
    '.operations__tab-container'
  ) as HTMLElement;
  tabsContent = document.querySelectorAll('.operations__content')!;

  // Menu
  nav = document.querySelector('.nav') as HTMLMenuElement;
  header = document.querySelector('.header') as HTMLElement;

  // Sections
  allSections = document.querySelectorAll('.section');

  // Images
  imgLazyLoading = document.querySelectorAll('img[data-src]');
}

export default new DOMElements();
