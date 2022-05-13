class Slider {
  constructor() {
    this.root = document.querySelector('.root');
    this.slider = this.root.querySelector('.slider');
    this.slideWrapper = this.root.querySelector('.slide-wrapper');
    this.pointer = this.root.querySelector('.pointer');
    this.widthSlede = this.slider.offsetWidth;
    this.slides = this.root.querySelectorAll('.slide');
    this.widthSleder = 0;
    this.init();
  }



  init() {
    this.slides.forEach(slide => {
      const isActive =  !this.widthSleder ? 'point--active': '';
      this.pointer.innerHTML += `<div class="point ${isActive}" data-position="${this.widthSleder}"><div></div></div>`
      slide.querySelector('img').setAttribute('style', `width:${this.widthSlede}px;`);
      this.widthSleder += slide.offsetWidth
    });
    this.pointHandler();
  }

  pointHandler() {
    this.pointer.addEventListener('click', (event) => {
      this.slideWrapper.setAttribute('style', `transform: translateX(-${+event.target.dataset.position}px);`);
      this.pointer.querySelector('.point--active').classList.remove('point--active');
      event.target.classList.add('point--active');
    })
  }
  
}

new Slider();