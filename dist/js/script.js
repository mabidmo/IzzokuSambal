// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const navtem = document.querySelector('.navtem1');
  const navtem1 = document.querySelector('.navtem2');
  const navtem2 = document.querySelector('.navtem3');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    navtem.classList.remove('lg:text-white');
    navtem1.classList.remove('lg:text-white');
    navtem2.classList.remove('lg:text-white');

  } else {
    header.classList.remove('navbar-fixed');
    navtem.classList.add('lg:text-white');
    navtem1.classList.add('lg:text-white');
    navtem2.classList.add('lg:text-white');
  }
}


// Hamburger
const Hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

Hamburger.addEventListener('click', function () {
  Hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Slider Card Apa Kata Mereka
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});

prevBtn.addEventListener('click', () => {
  slider.scrollLeft -= 300;
});

nextBtn.addEventListener('click', () => {
  slider.scrollLeft += 300;
});



// swiper Produk Izzoku

const swiper = new Swiper('.swiper-container', {
  slidesPerView: '3',
  spaceBetween: 10,
  loop:true,
  fade: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  breakpoints: {
    255: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
      spaceBetween: 50
    },
    1660: {
      slidesPerView: 5,
      spaceBetween: 400,
      grabCursor:true
    },
  }
});

// modal
const modal = document.querySelector('.modal');
const showmodal = document.querySelector('.show-modal');
const closemodal = document.querySelector('.close-modal');

closemodal.addEventListener('click', function (){
  modal.classList.add('hidden')
});

showmodal.addEventListener('click', function() {
  modal.classList.remove('hidden')
});


