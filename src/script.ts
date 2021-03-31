import domElements from './domElements.js';
import slider from './slider.js';
class App {
  constructor() {
    // Init
    this.sticyNavigation();
    this.revealSections();
    this.lazyLoading();
    slider;

    // Event Listeners
    domElements.btnsOpenModal.forEach(btn =>
      btn.addEventListener('click', this.openModal)
    );
    [domElements.btnCloseModal, domElements.overlay].forEach(element =>
      element.addEventListener('click', this.closeModal)
    );
    document.addEventListener('keypress', this.escape.bind(this));
    domElements.btnScrollTo.addEventListener('click', this.scrollToFeatures);
    domElements.navigation.addEventListener('click', this.scrollToSection);
    domElements.tabsContainer.addEventListener('click', this.activateTabs);
    domElements.nav.addEventListener('mouseover', this.hoverEffect.bind(0.5));
    domElements.nav.addEventListener('mouseout', this.hoverEffect.bind(1));
  }

  private openModal(e: any): void {
    e.preventDefault();
    domElements.modal.classList.remove('hidden');
    domElements.overlay.classList.remove('hidden');
  }

  private closeModal(): void {
    domElements.modal.classList.add('hidden');
    domElements.overlay.classList.add('hidden');
  }

  private escape(e: any): void {
    if (e.key === 'Escape' && !domElements.modal.classList.contains('hidden')) {
      this.closeModal();
      console.log('Escape');
    }
  }

  private scrollToFeatures(): void {
    domElements.featuresSection.scrollIntoView({ behavior: 'smooth' });
  }

  private scrollToSection(e: any): void {
    e.preventDefault();

    const link = e.target.closest('.nav__link');
    if (!link) return;

    const id = link.getAttribute('href');
    if (id === '#') return;

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }

  private activateTabs(e: any): void {
    const clicked = e.target.closest('.operations__tab');
    // Guard Clause
    if (!clicked) return;

    // # Remove initial class
    domElements.tabs.forEach(tab =>
      tab.classList.remove('operations__tab--active')
    );
    domElements.tabsContent.forEach(content =>
      content.classList.remove('operations__content--active')
    );

    // Activate tab
    clicked.classList.add('operations__tab--active');

    // Activate container
    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)!
      .classList.add('operations__content--active');
  }

  private hoverEffect(e: any): void {
    if (e.target.classList.contains('nav__link')) {
      // Determine on which happended event
      const link = e.target;
      // Select sibling elements
      const sibling = link.closest('.nav').querySelectorAll('.nav__link');
      const logo = link.closest('.nav').querySelector('img');

      sibling.forEach((el: any) => {
        if (link !== el) el.style.opacity = this;
      });

      logo.style.opacity = this;
    }
  }

  private sticyNavigation(): void {
    const navHeight: number = domElements.nav.getBoundingClientRect().height;

    const stickyNav = function (entries: any) {
      const [entry] = entries;

      if (!entry.isIntersecting) domElements.nav.classList.add('sticky');
      else domElements.nav.classList.remove('sticky');
    };

    const headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    });

    headerObserver.observe(domElements.header);
  }

  private revealSections() {
    const revealSection = function (entries: any, observer: any) {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });

    domElements.allSections.forEach(section => {
      sectionObserver.observe(section);
      section.classList.add('section--hidden');
    });
  }

  private lazyLoading() {
    const loadImg = function (entries: any, observer: any) {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      entry.target.src = entry.target.dataset.src;
      entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img');
      });

      observer.unobserve(entry.target);
    };

    const ImgObserver = new IntersectionObserver(loadImg, {
      root: null,
      threshold: 0.5,
    });

    domElements.imgLazyLoading.forEach(img => ImgObserver.observe(img));
  }
}

new App();
