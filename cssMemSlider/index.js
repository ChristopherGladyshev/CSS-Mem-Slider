class Slider {
  constructor() {
    this.root = document.querySelector('.root');
    this.slider = this.root.querySelector('.slider');
    this.slideWrapper = this.root.querySelector('.slide-wrapper');
    this.textWrapper = this.root.querySelector('.wrapper-text');
    this.textConteiners = this.root.querySelectorAll('.text');
    this.pointer = this.root.querySelector('.pointer');
    this.slides = this.root.querySelectorAll('.slide');
    this.widthSleder = 0;
    this.init();
  }



  init() {
    window.addEventListener('load', () => {
      this.initSizes();
      this.pointHandler();
      this.hendlerResize();
    })
  }

  initSizes() {
    this.pointer.innerHTML = '';
    this.widthSleder = 0;
    this.slideWrapper.setAttribute('style', `transform: translateX(${0}px);`);
    this.textWrapper.setAttribute('style', `transform: translateX(${0}px);`);
    this.slides.forEach(slide => {
      const isActive = !this.widthSleder ? 'point--active' : '';
      this.pointer.innerHTML += `<div class="point ${isActive}" data-position="${this.widthSleder}"><div></div></div>`
      slide.querySelector('img').setAttribute('style', `width:${this.slider.offsetWidth}px;`);
      this.widthSleder += slide.offsetWidth;
    });
    this.textConteiners.forEach(text => {
      text.setAttribute('style', `min-width:${this.slider.offsetWidth}px;`);
    });
  }

  pointHandler() {
    this.pointer.addEventListener('click', (event) => {
      if (!event.target.classList.contains('point')) return;
      this.slideWrapper.setAttribute('style', `transform: translateX(-${+event.target.dataset.position}px);`);
      this.textWrapper.setAttribute('style', `transform: translateX(-${+event.target.dataset.position}px);`);
      this.pointer.querySelector('.point--active').classList.remove('point--active');
      event.target.classList.add('point--active');
    })
  }

  hendlerResize() {
    window.addEventListener('resize', (event) => {
      if (this.timer) return;
      this.timer = setTimeout(() => {
        this.initSizes();
        this.timer = null
      }, 300);
    })
  }

}

new Slider();