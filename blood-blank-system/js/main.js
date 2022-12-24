 (function($) {
   "use strict"; // Start of use strict

   /* ---------------------------------------------
    Scripts initialization
    --------------------------------------------- */

   $(window).load(function() {

     /******** Page loader *******/
     $(".page-loader div").fadeOut();
     $(".page-loader").delay(200).fadeOut("slow");


     /******** fractionSlider *******/

     $('.fr-slider').fractionSlider({
       'fullWidth': true,
       'slideTransition': 'fade',
       'slideTransitionSpeed': 650,
       'slideEndAnimation': false,
       'controls': false,
       'pager': true,
       'speedOut': 2600,
       'timeout': 6000,
       'responsive': true,
       'increase': true,
       'dimensions': '1170 , 600',
     });

     var viewportWidth = $(window).width();
     var colWidth = $(".fraction-slider").width();
     var viewportHeight = $(window).height();
     var divideval = 2;
     var marginslidebg = (viewportWidth - colWidth) / divideval + 2;

     $(".slide-bg").css({
       "width": viewportWidth,
       "max-width": viewportWidth,
       "margin-left": "-" + marginslidebg + "px",
     });

     $(window).resize(function() {
       /******** fractionSlider bg image resize *******/
       $(".slide-bg").css({
         "width": viewportWidth,
         "max-width": viewportWidth,
         "margin-left": "-" + marginslidebg + "px",
       });

     });

     
     /******** Isotope Portfolio *******/
     // Isotope Portfolio
     var $container = jQuery('.portfolio');
     $container.isotope({
       filter: '*',
       animationOptions: {
         duration: 750,
         easing: 'linear',
         queue: false,
       }
     });
     jQuery('.port-filter li a').click(function() {
       jQuery('.port-filter li').removeClass('active');
       jQuery(this).parent().addClass('active');

       var selector = jQuery(this).attr('data-filter');
       $container.isotope({
         filter: selector,
         animationOptions: {
           duration: 750,
           easing: 'linear',
           queue: false
         },
       });
       return false;
     });
     $container.isotope('layout');

     /******** append Portfolio item on click *******/
     $('.append-button').on('click', function() {
       // create new item elements 
       var $item_height = $('.gallery-portfolio .project-item').height();
       var $items = $('<div class="project-item  illustration" style="height:' + $item_height + 'px;"><div class="project-image"><img src="../images/gallery/i3.jpg" alt=""><div class="overlay"><div class="content-wrap"><div class="overlay-content"><h3><a href="../single-portfolio.html">WIDE GALLERY</a></h3> <ul class="entry-cat"> <li><a href="#">Motion </a></li> <li><a href="#">Photography</a></li></ul></div></div></div></div></div> <div class="project-item  illustration"><div class="project-image"><img src="../images/gallery/i8.jpg" alt=""><div class="overlay"><div class="content-wrap"><div class="overlay-content"><h3><a href="../single-portfolio.html">WIDE GALLERY</a></h3> <ul class="entry-cat"> <li><a href="#">Motion </a></li> <li><a href="#">Photography</a></li></ul></div></div></div></div></div> <div class="project-item  illustration"><div class="project-image"><img src="../images/gallery/i9.jpg" alt=""><div class="overlay"><div class="content-wrap"><div class="overlay-content"><h3><a href="../single-portfolio.html">WIDE GALLERY</a></h3> <ul class="entry-cat"> <li><a href="#">Motion </a></li> <li><a href="#">Photography</a></li></ul></div></div></div></div></div>');

       // append items to grid
       $container.append($items)
         // add and lay out newly appended items
         .isotope('appended', $items);

       $(".append-button").remove(".append-button");
       $container.isotope('layout');

     });

   });


   $(document).ready(function() {


     /******** Nav menu *******/

     $('ul.sf-menu').superfish({
       animation: {
         height: 'show'
       }, // slide-down effect without fade-in
       delay: 100 // 1.2 second delay on mouseout
     });


     /******** Header two menu button *******/

     $("#mobnav-btn").click(function() {
       $(".sf-menu").slideToggle("slow");
     });

     $('.mobnav-subarrow').click(

       function() {
         $(this).siblings(".sub-menu").toggleClass("sub-menu-open");
       });

     $("#search-label").click(function() {
       $(".search-bar").slideToggle("slow");
     });

     $('.nav-button, .overlay-content-wrap').on('click', function() {
       $('.nav-button').toggleClass("active");
       $('.menu-content').fadeToggle();
       $('.overlay-content-wrap').toggleClass("overlay-active");
       $('body').toggleClass("overflow-hidden-header-three");

       var height = $(window).height();
       $(".menu-content-wrap").css('height', height);

     });

     /******** Header on scroll *******/

     // Hide Header on on scroll down
     var didScroll;
     var lastScrollTop = 0;
     var delta = 5;
     var navbarHeight = $('.header-inner').outerHeight();

     $(window).scroll(function(event) {
       didScroll = true;
     });

     setInterval(function() {
       if (didScroll) {
         hasScrolled();
         didScroll = false;
       }
     }, 250);

     function hasScrolled() {
       var st = $(window).scrollTop();
       
       var conterner_width = $('.inner-conterner').width();
       // Make sure they scroll more than delta
       if (Math.abs(lastScrollTop - st) <= delta)
         return;

       // If they scrolled down and are past the navbar, add class .nav-up.
       // This is necessary so you never see what is "behind" the navbar.
       if (st > lastScrollTop && st > navbarHeight) {
         // Scroll Down
         $('.header-inner').removeClass('header-scroll-fixed').addClass('header-scroll-up');
       } else {
         // Scroll Up 
         if (st + $(window).height() < $(document).height()) {

           $('.header-inner').removeClass('nav-up').addClass('header-scroll-fixed').css({
             "width": conterner_width,
           });

         }
       }

       if (st < 50) {
         $('.header-inner').removeClass('header-scroll-fixed').removeClass('header-scroll-up');
       }

       lastScrollTop = st;
     }



     /******** OWL Slider *******/

     $("#owl-slide").owlCarousel({
       autoPlay: 3000,
       stopOnHover: true,
       navigation: false,
       paginationSpeed: 1000,
       goToFirstSpeed: 2000,
       singleItem: true,
       autoHeight: true,
     });

     //owl slider
     var owl = $("#owl-single-port");
     owl.owlCarousel({
       navigation: false, // Show next and prev buttons
       slideSpeed: 1000,
       autoPlay: 100000000,
       paginationSpeed: 2000,
       singleItem: true,
       pagination: false,
     });

     // Custom Navigation Events
     $(".next").click(function() {
       owl.trigger('owl.next');
     })
     $(".prev").click(function() {
       owl.trigger('owl.prev');
     })

     function SetResizeContent() {
       var minheight = $(window).height();
       $(".full-screen").css({'min-height': minheight, 'height': minheight});
     }
     SetResizeContent();

     // owl slider for client slide show
     var owl = $("#client-list-slide");
     owl.owlCarousel({
       items: 5, //10 items above 1000px browser width
       itemsDesktop: [1000, 5], //5 items between 1000px and 901px
       itemsDesktopSmall: [900, 3], // betweem 900px and 601px
       itemsTablet: [600, 2], //2 items between 600 and 0
       pagination: false,
       itemsMobile: true // itemsMobile disabled - inherit from itemsTablet option
     });

     // Custom Navigation Events
     $(".next").click(function() {
       owl.trigger('owl.next');
     })
     $(".prev").click(function() {
       owl.trigger('owl.prev');
     })


     /******** Flickr feed *******/

     $('#cbox').jflickrfeed({
       limit: 6,
       qstrings: {
         id: '23588458@N00'
       },
       itemTemplate: '<li>' +
         '<a href="{{image_b}}" title="{{title}}">' +
         '<img src="{{image_q}}" alt="{{title}}" />' +
         '</a>' +
         '</li>'
     });


     /********  FitVids.js *******/

     // Target your .container, .wrapper, .post, etc.
     $(".fit").fitVids();


     /********  jquery-ui slider for price filter  *******/
     $("#slider-range").slider({
       range: true,
       min: 0,
       max: 9000,
       values: [1240, 6000],
       slide: function(event, ui) {
         $("#amount").val("£" + ui.values[0] + " - £" + ui.values[1]);
       }
     });
     $("#amount").val("£" + $("#slider-range").slider("values", 0) +
       " - £" + $("#slider-range").slider("values", 1));

     /********  MAGNIFIC POPUP INIT *******/

     $('.popup-gallery').magnificPopup({
       delegate: 'a',
       type: 'image',
       tLoading: 'Loading image #%curr%...',
       mainClass: 'mfp-with-fade mfp-img-mobile',
       gallery: {
         enabled: true,
         navigateByImgClick: true,
         preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
       },
       image: {
         tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
         titleSrc: function(item) {
           return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
         }
       }
     });

     // For video popup (PLAY VIDEO TRIGGER)
     if ($('.video-play-trigger').length) {
       $('.video-play-trigger').magnificPopup({
         disableOn: 700,
         type: 'iframe',
         mainClass: 'mfp-with-fade',
         removalDelay: 160,
         preloader: false,
         fixedContentPos: false
       });
     };



   });



   $(window).resize(function() {

     /******** Header size *******/
     var conterner_width = $('.inner-conterner').width();
     $('.header-inner').css({
       "width": conterner_width,
     });

   });



   /********  wow.js *******/
   var wow = new WOW({
     boxClass: 'wow', // animated element css class (default is wow)
     animateClass: 'animated', // animation css class (default is animated)
     offset: 50, // distance to the element when triggering the animation (default is 0) 
     mobile: false
   });
   wow.init();

 })(jQuery)

/******* SignIn - SignUp Form *******/

function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");

  messageElement.textContent = message;
  messageElement.classList.remove("form__message--success", "form__message--error");
  messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
  inputElement.classList.add("form__input--error");
  inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
  inputElement.classList.remove("form__input--error");
  inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");
  const el1 = document.querySelector("#linkCreateAccount");
  const el2 = document.querySelector("#linkLogin");

  if(el1){
      el1.addEventListener("click", e => {
        e.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");
      });
  }

  if(el2){
    el2.addEventListener("click", e => {
      e.preventDefault();
    loginForm.classList.add("form--hidden");
    createAccountForm.classList.remove("form--hidden");
    });
  }

  // document.querySelector("#linkCreateAccount").addEventListener("click", e => {
  //     e.preventDefault();
  //     loginForm.classList.add("form--hidden");
  //     createAccountForm.classList.remove("form--hidden");
  // });

  // document.querySelector("#linkLogin").addEventListener("click", e => {
  //     e.preventDefault();
  //     loginForm.classList.remove("form--hidden");
  //     createAccountForm.classList.add("form--hidden");
  // });

  if(loginForm){
  loginForm.addEventListener("submit", e => {
      e.preventDefault();

      // Perform your AJAX/Fetch login

      setFormMessage(loginForm, "error", "Invalid username/password combination");
   });
  }

  document.querySelectorAll(".form__input").forEach(inputElement => {
      inputElement.addEventListener("blur", e => {
          if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 6) {
              setInputError(inputElement, "Username must be at least 6 characters in length");
          }
      });

      inputElement.addEventListener("input", e => {
          clearInputError(inputElement);
      });
  });
});

/******* SignIn - SignUp Form END *******/
