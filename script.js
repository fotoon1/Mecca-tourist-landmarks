document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // Set the direction to 'horizontal'
    slidesPerView: 1, // Show one slide at a time
    loop: true, // Enable looping
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Delay before the first automatic slide
  setTimeout(() => {
    swiper.slideNext(); // Move to the next slide
  }, 3000); // 3 seconds delay, adjust as needed

  // Delay before returning to the first slide
  setTimeout(() => {
    swiper.slideToLoop(0); // Move back to the first slide in the loop
  }, 6000); // 6 seconds delay, adjust as needed
});
