'use strict';

const { createApp } = Vue;

const vueConfig = {
  data() {
    const title = 'Sono il titolo della pagina';
    const slides = [
        {
            image: "img/spiderman_result.jpg",
            title: "Titolo Spiderman",
            subtitle: "Sottotitolo Spiderman"
        },
        {
            image: "img/gta_result.jpg",
            title: "Titolo GTA 6",
            subtitle: "Sottotitolo GTA 6"
        },
        {
            image: "img/liesofp_result.jpg",
            title: "Titolo Lies Of P",
            subtitle: "sottotitolo Lies of P"
        },
        {
            image: "img/ken_result.jpg",
            title: "Titolo Ken il Guerriero",
            subtitle: "sottotitolo Ken il guerriero"
        },
        {
            image: "img/layton_result.jpg",
            title: "Titolo Pro Layton",
            subtitle: "Sottotitolo pro Layton"
        },
    ];
    return {
        title,
        slides,
        currentSlider: 0,
        currentInterval: null,
      };
  },
  methods: {
    next() {
      console.log('next');
      this.currentSlider++;
      if (this.currentSlider > this.slides.length - 1) {
        this.currentSlider = 0;
      }
    },
    prev() {
      console.log('prev');
      this.currentSlider--;
      if (this.currentSlider < 0) {
        this.currentSlider = this.slides.length - 1;
      }
    },
    setImage(index) {
      console.log('set image');
      console.log(index);
      this.currentSlider = index;
    },
    stopAutoPlay() {
      console.log('stoppo lo slider');
      clearInterval(this.currentInterval);
    },
    startAutoPlay() {
      this.currentInterval = setInterval(this.next, 2_000);
    },
  }
}

const myApp = createApp(vueConfig);
myApp.mount('#app');