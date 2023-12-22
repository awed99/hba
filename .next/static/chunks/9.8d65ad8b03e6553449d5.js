(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[9],{

/***/ "cAMi":
/***/ (function(module, exports, __webpack_require__) {

var _toConsumableArray = __webpack_require__("nnez");

/**
* Template Name: Dewi
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/dewi-free-multi-purpose-html-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function () {
  "use strict";
  /**
   * Easy selector helper function
   */

  var select = function select(el) {
    var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    el = el.trim();

    if (all) {
      var _document;

      return _toConsumableArray((_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll(el));
    } else {
      var _document2, _document3;

      return (_document2 = document) !== null && _document2 !== void 0 && _document2.querySelector ? (_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.querySelector(el) : undefined;
    }
  };
  /**
   * Easy event listener function
   */


  var on = function on(type, el, listener) {
    var all = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var selectEl = select(el, all);

    if (selectEl) {
      if (all) {
        selectEl.forEach(function (e) {
          return e.addEventListener(type, listener);
        });
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };
  /**
   * Easy on scroll event listener 
   */


  var onscroll = function onscroll(el, listener) {
    el.addEventListener('scroll', listener);
  };
  /**
   * Navbar links active state on scroll
   */


  var navbarlinks = select('#navbar .scrollto', true);

  var navbarlinksActive = function navbarlinksActive() {
    var position = window.scrollY + 200;
    navbarlinks.forEach(function (navbarlink) {
      if (!navbarlink.hash) return;
      var section = select(navbarlink.hash);
      if (!section) return;

      if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    });
  };

  window.addEventListener('load', navbarlinksActive);
  onscroll(document, navbarlinksActive);
  /**
   * Scrolls to an element with header offset
   */

  var scrollto = function scrollto(el) {
    var header = select('#header');
    var offset = header.offsetHeight;

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20;
    }

    var elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    });
  };
  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */


  var selectHeader = select('#header');

  if (selectHeader) {
    var headerScrolled = function headerScrolled() {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled');
      } else {
        selectHeader.classList.remove('header-scrolled');
      }
    };

    window.addEventListener('load', headerScrolled);
    onscroll(document, headerScrolled);
  }
  /**
   * Back to top button
   */


  var backtotop = select('.back-to-top');

  if (backtotop) {
    var toggleBacktotop = function toggleBacktotop() {
      if (window.scrollY > 100) {
        backtotop.classList.add('active');
      } else {
        backtotop.classList.remove('active');
      }
    };

    window.addEventListener('load', toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }
  /**
   * Mobile nav toggle
   */


  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile');
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });
  /**
   * Mobile nav dropdowns activate
   */
  // on('click', '.navbar .dropdown > a', function(e) {
  //   if (select('#navbar').classList.contains('navbar-mobile')) {
  //     e.preventDefault()
  //     this.nextElementSibling.classList.toggle('dropdown-active')
  //   }
  // }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  // on('click', '.scrollto', function(e) {
  //   if (select(this.hash)) {
  //     e.preventDefault()
  //     let navbar = select('#navbar')
  //     if (navbar.classList.contains('navbar-mobile')) {
  //       navbar.classList.remove('navbar-mobile')
  //       let navbarToggle = select('.mobile-nav-toggle')
  //       navbarToggle.classList.toggle('bi-list')
  //       navbarToggle.classList.toggle('bi-x')
  //     }
  //     scrollto(this.hash)
  //   }
  // }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  // window.addEventListener('load', () => {
  //   if (window.location.hash) {
  //     if (select(window.location.hash)) {
  //       scrollto(window.location.hash)
  //     }
  //   }
  // });

  /**
   * Preloader
   */
  // let preloader = select('#preloader');
  // if (preloader) {
  //   window.addEventListener('load', () => {
  //     preloader.remove()
  //   });
  // }

  /**
   * Initiate glightbox 
   */
  // const glightbox = GLightbox({
  //   selector: '.glightbox'
  // });

  /**
   * Testimonials slider
   */
  // new Swiper('.testimonials-slider', {
  //   speed: 600,
  //   loop: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false
  //   },
  //   slidesPerView: 'auto',
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true
  //   }
  // });

  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
  /**
   * Porfolio isotope and filter
   */
  // window.addEventListener('load', () => {
  //   let portfolioContainer = select('.portfolio-container');
  //   if (portfolioContainer) {
  //     let portfolioIsotope = new Isotope(portfolioContainer, {
  //       itemSelector: '.portfolio-item'
  //     });
  //     let portfolioFilters = select('#portfolio-flters li', true);
  //     on('click', '#portfolio-flters li', function(e) {
  //       e.preventDefault();
  //       portfolioFilters.forEach(function(el) {
  //         el.classList.remove('filter-active');
  //       });
  //       this.classList.add('filter-active');
  //       portfolioIsotope.arrange({
  //         filter: this.getAttribute('data-filter')
  //       });
  //       portfolioIsotope.on('arrangeComplete', function() {
  //         AOS.refresh()
  //       });
  //     }, true);
  //   }
  // });

  /**
   * Initiate portfolio lightbox 
   */
  // const portfolioLightbox = GLightbox({
  //   selector: '.portfolio-lightbox'
  // });

  /**
   * Portfolio details slider
   */
  // new Swiper('.portfolio-details-slider', {
  //   speed: 400,
  //   loop: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true
  //   }
  // });

  /**
   * Animation on scroll
   */


  window.addEventListener('load', function () {// AOS.init({
    //   duration: 1000,
    //   easing: "ease-in-out",
    //   once: true,
    //   mirror: false
    // });
  });
  /**
   * Initiate Pure Counter 
   */
  // new PureCounter();
})();

/***/ })

}]);