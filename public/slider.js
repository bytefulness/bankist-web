class Slider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.btnLeft = document.querySelector('.slider__btn--left');
        this.btnRight = document.querySelector('.slider__btn--right');
        this.slider = document.querySelector('.slider');
        this.dotContainer = document.querySelector('.dots');
        this.curSlide = 0;
        this.maxSlide = this.slides.length;
        // Init
        this.createDots();
        this.activateDots(0);
        this.goToSlide(0);
        // Event Listener
        this.btnRight.addEventListener('click', this.nextSlide.bind(this));
        this.btnLeft.addEventListener('click', this.prevSlide.bind(this));
        this.dotContainer.addEventListener('click', this.dotSlide.bind(this));
    }
    createDots() {
        this.slides.forEach((_, i) => this.dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide='${i}'></button>`));
    }
    activateDots(value) {
        // # Remove activate dots
        document
            .querySelectorAll('.dots__dot')
            .forEach(dot => dot.classList.remove('dots__dot--active'));
        //   # Add active class on selected dots
        document
            .querySelector(`.dots__dot[data-slide='${value}']`)
            .classList.add('dots__dot--active');
    }
    goToSlide(value) {
        this.slides.forEach((slide, indexNumber) => (slide.style.transform = `translateX(${100 * (indexNumber - value)}%)`));
    }
    nextSlide() {
        if (this.curSlide === this.maxSlide - 1)
            this.curSlide = 0;
        else
            this.curSlide++;
        this.goToSlide(this.curSlide);
        this.activateDots(this.curSlide);
    }
    prevSlide() {
        if (this.curSlide === 0)
            this.curSlide = this.slides.length - 1;
        else
            this.curSlide--;
        this.goToSlide(this.curSlide);
        this.activateDots(this.curSlide);
    }
    dotSlide(e) {
        if (!e.target.classList.contains('dots__dot'))
            return;
        const { slide } = e.target.dataset;
        this.goToSlide(slide);
        this.activateDots(slide);
    }
}
export default new Slider();
