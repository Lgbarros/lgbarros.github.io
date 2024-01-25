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

// TYPED EFFECT //

new Typed('#typed',{
  strings : ['Front-End Developer.','WordPress Developer.', 'E-Commerce Management.', 'Support Client.'],
  typeSpeed : 40,
  delaySpeed : 200,
  loop : true
});

// INIT AOS ANIMATE CSS //

AOS.init();