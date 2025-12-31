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

// Order Form 

document.getElementById("orderForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.querySelector('input[name="name"]').value;
  let email = document.querySelector('input[name="email"]').value;
  let message = document.querySelector('textarea[name="message"]').value;

  let whatsappNumber = "92 341-6120222"; 

  let whatsappMessage = 
    `New Order Request:%0A
Name: ${name}%0A
Email: ${email}%0A
Message: ${message}`;

  let whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  window.open(whatsappURL, "_blank");
});


