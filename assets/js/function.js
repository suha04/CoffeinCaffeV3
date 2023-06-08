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

const currentScrollPos = window.pageYOffset;
window.onscroll = function() {
    let prevScrollpos = window.pageYOffset;

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