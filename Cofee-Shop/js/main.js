// Swiper

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });

//   Menu Open Close

let menu = document.querySelector('.menu-icon');

menu.onclick = () => {
    menu.classList.toggle("move");
};