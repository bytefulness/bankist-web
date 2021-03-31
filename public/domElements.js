class DOMElements {
    constructor() {
        // Modal window
        this.modal = document.querySelector('.modal');
        this.overlay = document.querySelector('.overlay');
        this.btnCloseModal = document.querySelector('.btn--close-modal');
        this.btnsOpenModal = document.querySelectorAll('.btn--show-modal');
        this.btnScrollTo = document.querySelector('.btn--scroll-to');
        this.featuresSection = document.querySelector('#section--1');
        this.navigation = document.querySelector('.nav__links');
        // Tabbed Component
        this.tabs = document.querySelectorAll('.operations__tab');
        this.tabsContainer = document.querySelector('.operations__tab-container');
        this.tabsContent = document.querySelectorAll('.operations__content');
        // Menu
        this.nav = document.querySelector('.nav');
        this.header = document.querySelector('.header');
        // Sections
        this.allSections = document.querySelectorAll('.section');
        // Images
        this.imgLazyLoading = document.querySelectorAll('img[data-src]');
    }
}
export default new DOMElements();
