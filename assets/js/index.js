import Swiper from 'swiper/bundle';

// import styles bundle
// import 'swiper/css/bundle';

const bannerSwiper = new Swiper(".banner", {
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    effect: "fade",
    allowTouchMove: false,
    pagination: {
        el: ".banner-pagination",
        clickable: true
    },
});

var cardSwiper = new Swiper(".card-swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerView: 1,
    loop: true,
    breakpoints: {
        576: { //当屏幕宽度大于等于768 
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
        },
        1024: { //当屏幕宽度大于等于768 
            slidesPerView: 5,
            centeredSlides: true,
        }
    },
    pagination: {
        el: ".card-pagination",
        clickable: true,
    },
});