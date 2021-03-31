class Slider {
  slides = document.querySelectorAll<HTMLElement>('.slide');
  btnLeft = document.querySelector('.slider__btn--left') as HTMLButtonElement;
  btnRight = document.querySelector('.slider__btn--right') as HTMLButtonElement;

  slider = document.querySelector('.slider') as HTMLElement;
  dotContainer = document.querySelector('.dots') as HTMLButtonElement;

  curSlide: number = 0;
  maxSlide: number = this.slides.length;

  constructor() {
    // Init
    this.createDots();
    this.activateDots(0);
    this.goToSlide(0);

    // Event Listener
    this.btnRight.addEventListener('click', this.nextSlide.bind(this));
    this.btnLeft.addEventListener('click', this.prevSlide.bind(this));
    this.dotContainer.addEventListener('click', this.dotSlide.bind(this));
  }

  private createDots(): void {
    this.slides.forEach((_, i) =>
      this.dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide='${i}'></button>`
      )
    );
  }

  private activateDots(value: number): void {
    // # Remove activate dots
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    //   # Add active class on selected dots
    document
      .querySelector(`.dots__dot[data-slide='${value}']`)!
      .classList.add('dots__dot--active');
  }

  private goToSlide(value: number): void {
    this.slides.forEach(
      (slide, indexNumber) =>
        (slide.style.transform = `translateX(${100 * (indexNumber - value)}%)`)
    );
  }

  private nextSlide() {
    if (this.curSlide === this.maxSlide - 1) this.curSlide = 0;
    else this.curSlide++;
    this.goToSlide(this.curSlide);
    this.activateDots(this.curSlide);
  }

  private prevSlide() {
    if (this.curSlide === 0) this.curSlide = this.slides.length - 1;
    else this.curSlide--;
    this.goToSlide(this.curSlide);
    this.activateDots(this.curSlide);
  }

  private dotSlide(e: any): void {
    if (!e.target.classList.contains('dots__dot')) return;

    const { slide } = e.target.dataset;
    this.goToSlide(slide);
    this.activateDots(slide);
  }
}

export default new Slider();
