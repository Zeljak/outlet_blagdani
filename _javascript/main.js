document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello Bulma!');
});


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//animacija
// Universal variables
var viewWidth = document.querySelector('body').offsetWidth;

// Animation nadnaslov on scroll
gsap.from('.ana_tevsic',{
  scrollTrigger: {
      trigger: '.ana_tevsic',
      start: 'top 90%'
  },
  x: -viewWidth,
  opacity: 0,
  duration: 1,
  ease:"none"
})

gsap.from('.maja_kranjec',{
  scrollTrigger: {
      trigger: '.maja_kranjec',
      start: 'top 90%'
  },
  x: viewWidth,
  opacity: 0,
  duration: 1,
  ease:"none"
})


gsap.from('.ivana_culjak',{
  scrollTrigger: {
      trigger: '.ivana_culjak',
      start: 'top 90%'
  },
  x: -viewWidth,
  opacity: 0,
  duration: 1,
  ease:"none"
})
gsap.from('.lidija_tomas',{
  scrollTrigger: {
      trigger: '.lidija_tomas',
      start: 'top 90%'
  },
  x: viewWidth,
  opacity: 0,
  duration: 1,
  ease:"none"
})
gsap.from('.emilija_lasic',{
  scrollTrigger: {
      trigger: '.emilija_lasic',
      start: 'top 90%'
  },
  x: -viewWidth,
  opacity: 0,
  duration: 1,
  ease:"none"
})



