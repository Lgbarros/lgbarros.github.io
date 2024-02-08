// TIMELINE //
(function () {
    "use strict";
  
    // define variables
    var items = document.querySelectorAll(".timeline li");
  
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  })();

// FIXED MENU WHEN SCROLL //

  document.addEventListener("DOMContentLoaded", function(){
		
		window.addEventListener('scroll', function() {

			if (window.scrollY > 200) {
				document.getElementById('navbar_top').classList.add('fixed-top');
        document.getElementById('navbar_top').classList.remove('bg-dark');
				// add padding top to show content behind navbar
				navbar_height = document.querySelector('.navbar').offsetHeight;
				document.body.style.paddingTop = navbar_height + 'px';
			} else {
			 	document.getElementById('navbar_top').classList.remove('fixed-top');
        document.getElementById("navbar_top").classList.add("bg-dark");
				 // remove padding top from body
				document.body.style.paddingTop = '0';
			} 
		});
	}); 

//PARTE NOVA 2024

$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};


refreshNav = () => {

  //pega todos os a.nav-link dentro da div#navbarTogglerDemo03, remove a classe active
  var navLinks = document.querySelectorAll('#navbarTogglerDemo03 a.nav-link');
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

}


document.addEventListener("DOMContentLoaded", function () {

  window.addEventListener('scroll', function () {

    if (window.scrollY < 1350){

     //refreshNav();

      //pega o a com href href="#career"
      var intro = document.querySelector('a[href*="#intro"]');

      //coloca a classe active
      intro.classList.add("active");

      //esconde o a href #about
      var about = document.querySelector('a[href*="#about"]');
      about.classList.remove("active");

    }

    if (window.scrollY > 1350 && window.scrollY < 2483) {

      refreshNav();

      //pega o a com href href="#career"
      var career = document.querySelector('a[href*="#career"]');

      //coloca a classe active
      career.classList.add("active");

      //esconde o a href #about
      var about = document.querySelector('a[href*="#about"]');
      about.classList.remove("active");


    }

    
    if (  window.scrollY > 3154 && window.scrollY < 3728 ) {

      refreshNav();

      //pega o a com href href="#career"
      var career = document.querySelector('a[href*="#career"]');

      //coloca a classe active
      career.classList.remove("active");

      //pega o a com href href="#certificate"
      var certificate = document.querySelector('a[href*="#certificate"]');

      //coloca a classe active
      certificate.classList.add("active");

    }


    //maior que window.scrollY 3728, ativa o partners
    if (  window.scrollY > 3728) {

      refreshNav();

      //pega o a com href href="#certificate"
      var certificate = document.querySelector('a[href*="#certificate"]');

      //coloca a classe active
      certificate.classList.remove("active");

      //pega o a com href href="#partners"
      var partners = document.querySelector('a[href*="#partners"]');

      //coloca a classe active
      partners.classList.add("active");

    }



    // se o a[href*="#about"] estiver visível, roda refreshNav() + aplica active nele
    // usa is visible do jquery


    if (  $("#about").isInViewport()  && window.scrollY > 500) {

      refreshNav();

      //pega o a com href href="#about"
      var about = document.querySelector('a[href*="#about"]');

      //coloca a classe active
      about.classList.add("active");

    }
 

   


    
  });


}); 

//FIM PARTE NOVA 2024





//  SCROLL TO TOP //
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 100);
});

// SCROLL TO TOP WHEN CLICK ON LOGO //

var btn = $('#logo-click');

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// FIX ACTIVE MENU WHEN CLICK //

$(".nav-link").on("click", function(){
	$(".nav-link.active").removeClass("active");
	$(this).addClass("active");
});


//nav-link out-link
$(".nav-link.out-link").on("click", function(){
  
   setTimeout(() => {
    
    $(".nav-link.out-link").removeClass("active"); //depois de 1 segundo remove a classe active

   }, 1000);

});


// TYPED EFFECT //

new Typed('#typed',{
  strings : ['Front-End Developer.','WordPress Developer.', 'E-Commerce Management.', 'Support Client.'],
  typeSpeed : 40,
  delaySpeed : 200,
  loop : true
});

// INIT AOS ANIMATE CSS //

AOS.init();