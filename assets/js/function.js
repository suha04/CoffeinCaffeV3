//Hamburger gomb működése

const hamburger = document.querySelector('#hamburger');
const navDivs = document.querySelectorAll('.navDiv');
const nav = document.querySelector('nav');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    navDivs.forEach(navDiv => navDiv.classList.toggle('active'));
});



//Navbar eltűnik görgetésre

const currentScrollPos = window.scrollY;
window.onscroll = function() {
    let prevScrollpos = window.scrollY;

  if (prevScrollpos == currentScrollPos) {
// Látszódó navbar
    nav.classList.remove("hidden");
  } 
  else {
// Rejtett navbar
    hamburger.classList.remove('active');
    navDivs.forEach(navDiv => navDiv.classList.remove('active'));
    nav.classList.remove('active');
  }  
  prevScrollpos = currentScrollPos;
}

//Carousel

document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.imgContent');
  const images = carousel.querySelectorAll('img');
  const text = document.querySelectorAll('.textContent .text');
  const arrows = document.querySelectorAll('.arrow');
  const slideCounter = document.getElementById('slideCounter');
  const totalSlides = document.querySelectorAll('.imgContent img').length;


  let currentIndex = 0;

  showSlide(currentIndex); // Első Slide

  function showSlide(index) {
    images.forEach(function (image, i) {
      if (i === index) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });

    text.forEach(function (textElement, i) {
      if (i === index) {
        textElement.classList.add('active');
      } else {
        textElement.classList.remove('active');
      }
    });
  }

  function changeSlide(direction) {
    if (direction === 'next') {
      currentIndex = (currentIndex + 1) % images.length;
    } else if (direction === 'prev') {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

    showSlide(currentIndex);
  }

  // Counter
  let currentSlide = 1;
  slideCounter.textContent = `${currentSlide}/${totalSlides}`;

  function updateSlideCounter() {
  slideCounter.textContent = `${currentSlide}/${totalSlides}`;
  }

  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');

  leftArrow.addEventListener('click', () => {
  currentSlide = (currentSlide - 1) < 1 ? totalSlides : currentSlide - 1;
  updateSlideCounter();
  });

  rightArrow.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) > totalSlides ? 1 : currentSlide + 1;
  updateSlideCounter();
  });



// Carousel nyilak

  arrows.forEach(function (arrow) {
    arrow.addEventListener('click', function () {
      if (this.classList.contains('left')) {
        changeSlide('prev');
      } else if (this.classList.contains('right')) {
        changeSlide('next');
      }
    });
  });
});





//Aktív nav elemek

const navLinks = document.querySelectorAll('#navList a');

// Linkek figyelése klikkhez
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // aktív eltávolítása minden navelemről
    navLinks.forEach(link => link.classList.remove('active'));

    // klikkelt elemek aktívvá tétele
    link.classList.add('active');
  });
});

// első nav elemhez .active, oldaltöltéskor
navLinks[0].classList.add('active');

// aktív elem frissítés görgetésnél
window.addEventListener('scroll', () => {
  // görgetés pozíció
  const scrollPos = window.scrollY;

  // minden nav elem figyelembe vétele
  navLinks.forEach(link => {
    // link hivatkozása
    const anchor = document.querySelector(link.hash);

    // hivatkozás létezik és legalább 10vh-re van-e a felső szélétől
    if (anchor && anchor.getBoundingClientRect().top < window.innerHeight - window.innerHeight * 0.5) {
      // aktív eltávolítása minden navelemről
      navLinks.forEach(link => link.classList.remove('active'));

      // aktív hozzáadása jelenlegi navelemhez
      link.classList.add('active');
    }
  });
});