const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
 
//  Testimonial Wisper 

new Swiper(".testimonial-swiper",{
  slidesPerView:1,
  loop:true,
  autoplay:{delay:3500}
});

