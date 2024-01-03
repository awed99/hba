exports.ids = [0];
exports.modules = {

/***/ "./public/assets/js/main.js":
/*!**********************************!*\
  !*** ./public/assets/js/main.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

  const select = (el, all = false) => {
    el = el.trim();

    if (all) {
      var _document;

      return [...((_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll(el))];
    } else {
      var _document2, _document3;

      return (_document2 = document) !== null && _document2 !== void 0 && _document2.querySelector ? (_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.querySelector(el) : undefined;
    }
  };
  /**
   * Easy event listener function
   */


  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };
  /**
   * Easy on scroll event listener 
   */


  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  };
  /**
   * Navbar links active state on scroll
   */


  let navbarlinks = select('#navbar .scrollto', true);

  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
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

  const scrollto = el => {
    let header = select('#header');
    let offset = header.offsetHeight;

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20;
    }

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    });
  };
  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */


  let selectHeader = select('#header');

  if (selectHeader) {
    const headerScrolled = () => {
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


  let backtotop = select('.back-to-top');

  if (backtotop) {
    const toggleBacktotop = () => {
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

  on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault();
      this.nextElementSibling.classList.toggle('dropdown-active');
    }
  }, true);
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


  window.addEventListener('load', () => {// AOS.init({
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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2pzL21haW4uanMiXSwibmFtZXMiOlsic2VsZWN0IiwiZWwiLCJhbGwiLCJ0cmltIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicXVlcnlTZWxlY3RvciIsInVuZGVmaW5lZCIsIm9uIiwidHlwZSIsImxpc3RlbmVyIiwic2VsZWN0RWwiLCJmb3JFYWNoIiwiZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbnNjcm9sbCIsIm5hdmJhcmxpbmtzIiwibmF2YmFybGlua3NBY3RpdmUiLCJwb3NpdGlvbiIsIndpbmRvdyIsInNjcm9sbFkiLCJuYXZiYXJsaW5rIiwiaGFzaCIsInNlY3Rpb24iLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzY3JvbGx0byIsImhlYWRlciIsIm9mZnNldCIsImNvbnRhaW5zIiwiZWxlbWVudFBvcyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJzZWxlY3RIZWFkZXIiLCJoZWFkZXJTY3JvbGxlZCIsImJhY2t0b3RvcCIsInRvZ2dsZUJhY2t0b3RvcCIsInRvZ2dsZSIsInByZXZlbnREZWZhdWx0IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZ2V0Q3VycmVudFNjcm9sbCIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFlBQVc7QUFDVjtBQUVBO0FBQ0Y7QUFDQTs7QUFDRSxRQUFNQSxNQUFNLEdBQUcsQ0FBQ0MsRUFBRCxFQUFLQyxHQUFHLEdBQUcsS0FBWCxLQUFxQjtBQUNsQ0QsTUFBRSxHQUFHQSxFQUFFLENBQUNFLElBQUgsRUFBTDs7QUFDQSxRQUFJRCxHQUFKLEVBQVM7QUFBQTs7QUFDUCxhQUFPLENBQUMsaUJBQUdFLFFBQUgsOENBQUcsVUFBVUMsZ0JB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Q0Y7QUFDQTs7O0FBQ0U1QixRQUFNLENBQUNMLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLE1BQU0sQ0FDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsR0FQRDtBQVNBO0FBQ0Y7QUFDQTtBQUNFO0FBRUQsQ0EzUUQsSSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiogVGVtcGxhdGUgTmFtZTogRGV3aVxyXG4qIFVwZGF0ZWQ6IFNlcCAxOCAyMDIzIHdpdGggQm9vdHN0cmFwIHY1LjMuMlxyXG4qIFRlbXBsYXRlIFVSTDogaHR0cHM6Ly9ib290c3RyYXBtYWRlLmNvbS9kZXdpLWZyZWUtbXVsdGktcHVycG9zZS1odG1sLXRlbXBsYXRlL1xyXG4qIEF1dGhvcjogQm9vdHN0cmFwTWFkZS5jb21cclxuKiBMaWNlbnNlOiBodHRwczovL2Jvb3RzdHJhcG1hZGUuY29tL2xpY2Vuc2UvXHJcbiovXHJcbihmdW5jdGlvbigpIHtcclxuICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgLyoqXHJcbiAgICogRWFzeSBzZWxlY3RvciBoZWxwZXIgZnVuY3Rpb25cclxuICAgKi9cclxuICBjb25zdCBzZWxlY3QgPSAoZWwsIGFsbCA9IGZhbHNlKSA9PiB7XHJcbiAgICBlbCA9IGVsLnRyaW0oKVxyXG4gICAgaWYgKGFsbCkge1xyXG4gICAgICByZXR1cm4gWy4uLmRvY3VtZW50Py5xdWVyeVNlbGVjdG9yQWxsKGVsKV1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoZG9jdW1lbnQ/LnF1ZXJ5U2VsZWN0b3IpID8gZG9jdW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoZWwpIDogdW5kZWZpbmVkXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFYXN5IGV2ZW50IGxpc3RlbmVyIGZ1bmN0aW9uXHJcbiAgICovXHJcbiAgY29uc3Qgb24gPSAodHlwZSwgZWwsIGxpc3RlbmVyLCBhbGwgPSBmYWxzZSkgPT4ge1xyXG4gICAgbGV0IHNlbGVjdEVsID0gc2VsZWN0KGVsLCBhbGwpXHJcbiAgICBpZiAoc2VsZWN0RWwpIHtcclxuICAgICAgaWYgKGFsbCkge1xyXG4gICAgICAgIHNlbGVjdEVsLmZvckVhY2goZSA9PiBlLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlbGVjdEVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVhc3kgb24gc2Nyb2xsIGV2ZW50IGxpc3RlbmVyIFxyXG4gICAqL1xyXG4gIGNvbnN0IG9uc2Nyb2xsID0gKGVsLCBsaXN0ZW5lcikgPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgbGlzdGVuZXIpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBOYXZiYXIgbGlua3MgYWN0aXZlIHN0YXRlIG9uIHNjcm9sbFxyXG4gICAqL1xyXG4gIGxldCBuYXZiYXJsaW5rcyA9IHNlbGVjdCgnI25hdmJhciAuc2Nyb2xsdG8nLCB0cnVlKVxyXG4gIGNvbnN0IG5hdmJhcmxpbmtzQWN0aXZlID0gKCkgPT4ge1xyXG4gICAgbGV0IHBvc2l0aW9uID0gd2luZG93LnNjcm9sbFkgKyAyMDBcclxuICAgIG5hdmJhcmxpbmtzLmZvckVhY2gobmF2YmFybGluayA9PiB7XHJcbiAgICAgIGlmICghbmF2YmFybGluay5oYXNoKSByZXR1cm5cclxuICAgICAgbGV0IHNlY3Rpb24gPSBzZWxlY3QobmF2YmFybGluay5oYXNoKVxyXG4gICAgICBpZiAoIXNlY3Rpb24pIHJldHVyblxyXG4gICAgICBpZiAocG9zaXRpb24gPj0gc2VjdGlvbi5vZmZzZXRUb3AgJiYgcG9zaXRpb24gPD0gKHNlY3Rpb24ub2Zmc2V0VG9wICsgc2VjdGlvbi5vZmZzZXRIZWlnaHQpKSB7XHJcbiAgICAgICAgbmF2YmFybGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmJhcmxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBuYXZiYXJsaW5rc0FjdGl2ZSlcclxuICBvbnNjcm9sbChkb2N1bWVudCwgbmF2YmFybGlua3NBY3RpdmUpXHJcblxyXG4gIC8qKlxyXG4gICAqIFNjcm9sbHMgdG8gYW4gZWxlbWVudCB3aXRoIGhlYWRlciBvZmZzZXRcclxuICAgKi9cclxuICBjb25zdCBzY3JvbGx0byA9IChlbCkgPT4ge1xyXG4gICAgbGV0IGhlYWRlciA9IHNlbGVjdCgnI2hlYWRlcicpXHJcbiAgICBsZXQgb2Zmc2V0ID0gaGVhZGVyLm9mZnNldEhlaWdodFxyXG5cclxuICAgIGlmICghaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyLXNjcm9sbGVkJykpIHtcclxuICAgICAgb2Zmc2V0IC09IDIwXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGVsZW1lbnRQb3MgPSBzZWxlY3QoZWwpLm9mZnNldFRvcFxyXG4gICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgdG9wOiBlbGVtZW50UG9zIC0gb2Zmc2V0LFxyXG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUb2dnbGUgLmhlYWRlci1zY3JvbGxlZCBjbGFzcyB0byAjaGVhZGVyIHdoZW4gcGFnZSBpcyBzY3JvbGxlZFxyXG4gICAqL1xyXG4gIGxldCBzZWxlY3RIZWFkZXIgPSBzZWxlY3QoJyNoZWFkZXInKVxyXG4gIGlmIChzZWxlY3RIZWFkZXIpIHtcclxuICAgIGNvbnN0IGhlYWRlclNjcm9sbGVkID0gKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxMDApIHtcclxuICAgICAgICBzZWxlY3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLXNjcm9sbGVkJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZWxlY3RIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyLXNjcm9sbGVkJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBoZWFkZXJTY3JvbGxlZClcclxuICAgIG9uc2Nyb2xsKGRvY3VtZW50LCBoZWFkZXJTY3JvbGxlZClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJhY2sgdG8gdG9wIGJ1dHRvblxyXG4gICAqL1xyXG4gIGxldCBiYWNrdG90b3AgPSBzZWxlY3QoJy5iYWNrLXRvLXRvcCcpXHJcbiAgaWYgKGJhY2t0b3RvcCkge1xyXG4gICAgY29uc3QgdG9nZ2xlQmFja3RvdG9wID0gKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxMDApIHtcclxuICAgICAgICBiYWNrdG90b3AuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBiYWNrdG90b3AuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0b2dnbGVCYWNrdG90b3ApXHJcbiAgICBvbnNjcm9sbChkb2N1bWVudCwgdG9nZ2xlQmFja3RvdG9wKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTW9iaWxlIG5hdiB0b2dnbGVcclxuICAgKi9cclxuICBvbignY2xpY2snLCAnLm1vYmlsZS1uYXYtdG9nZ2xlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgc2VsZWN0KCcjbmF2YmFyJykuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2YmFyLW1vYmlsZScpXHJcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2JpLWxpc3QnKVxyXG4gICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdiaS14JylcclxuICB9KVxyXG5cclxuICAvKipcclxuICAgKiBNb2JpbGUgbmF2IGRyb3Bkb3ducyBhY3RpdmF0ZVxyXG4gICAqL1xyXG4gIG9uKCdjbGljaycsICcubmF2YmFyIC5kcm9wZG93biA+IGEnLCBmdW5jdGlvbihlKSB7XHJcbiAgICBpZiAoc2VsZWN0KCcjbmF2YmFyJykuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXZiYXItbW9iaWxlJykpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoJ2Ryb3Bkb3duLWFjdGl2ZScpXHJcbiAgICB9XHJcbiAgfSwgdHJ1ZSlcclxuXHJcbiAgLyoqXHJcbiAgICogU2Nyb29sIHdpdGggb2ZzZXQgb24gbGlua3Mgd2l0aCBhIGNsYXNzIG5hbWUgLnNjcm9sbHRvXHJcbiAgICovXHJcbiAgLy8gb24oJ2NsaWNrJywgJy5zY3JvbGx0bycsIGZ1bmN0aW9uKGUpIHtcclxuICAvLyAgIGlmIChzZWxlY3QodGhpcy5oYXNoKSkge1xyXG4gIC8vICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgLy8gICAgIGxldCBuYXZiYXIgPSBzZWxlY3QoJyNuYXZiYXInKVxyXG4gIC8vICAgICBpZiAobmF2YmFyLmNsYXNzTGlzdC5jb250YWlucygnbmF2YmFyLW1vYmlsZScpKSB7XHJcbiAgLy8gICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoJ25hdmJhci1tb2JpbGUnKVxyXG4gIC8vICAgICAgIGxldCBuYXZiYXJUb2dnbGUgPSBzZWxlY3QoJy5tb2JpbGUtbmF2LXRvZ2dsZScpXHJcbiAgLy8gICAgICAgbmF2YmFyVG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ2JpLWxpc3QnKVxyXG4gIC8vICAgICAgIG5hdmJhclRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdiaS14JylcclxuICAvLyAgICAgfVxyXG4gIC8vICAgICBzY3JvbGx0byh0aGlzLmhhc2gpXHJcbiAgLy8gICB9XHJcbiAgLy8gfSwgdHJ1ZSlcclxuXHJcbiAgLyoqXHJcbiAgICogU2Nyb2xsIHdpdGggb2ZzZXQgb24gcGFnZSBsb2FkIHdpdGggaGFzaCBsaW5rcyBpbiB0aGUgdXJsXHJcbiAgICovXHJcbiAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgLy8gICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcclxuICAvLyAgICAgaWYgKHNlbGVjdCh3aW5kb3cubG9jYXRpb24uaGFzaCkpIHtcclxuICAvLyAgICAgICBzY3JvbGx0byh3aW5kb3cubG9jYXRpb24uaGFzaClcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfVxyXG4gIC8vIH0pO1xyXG5cclxuICAvKipcclxuICAgKiBQcmVsb2FkZXJcclxuICAgKi9cclxuICAvLyBsZXQgcHJlbG9hZGVyID0gc2VsZWN0KCcjcHJlbG9hZGVyJyk7XHJcbiAgLy8gaWYgKHByZWxvYWRlcikge1xyXG4gIC8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgLy8gICAgIHByZWxvYWRlci5yZW1vdmUoKVxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWF0ZSBnbGlnaHRib3ggXHJcbiAgICovXHJcbiAgLy8gY29uc3QgZ2xpZ2h0Ym94ID0gR0xpZ2h0Ym94KHtcclxuICAvLyAgIHNlbGVjdG9yOiAnLmdsaWdodGJveCdcclxuICAvLyB9KTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGVzdGltb25pYWxzIHNsaWRlclxyXG4gICAqL1xyXG4gIC8vIG5ldyBTd2lwZXIoJy50ZXN0aW1vbmlhbHMtc2xpZGVyJywge1xyXG4gIC8vICAgc3BlZWQ6IDYwMCxcclxuICAvLyAgIGxvb3A6IHRydWUsXHJcbiAgLy8gICBhdXRvcGxheToge1xyXG4gIC8vICAgICBkZWxheTogNTAwMCxcclxuICAvLyAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlXHJcbiAgLy8gICB9LFxyXG4gIC8vICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gIC8vICAgcGFnaW5hdGlvbjoge1xyXG4gIC8vICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgLy8gICAgIHR5cGU6ICdidWxsZXRzJyxcclxuICAvLyAgICAgY2xpY2thYmxlOiB0cnVlXHJcbiAgLy8gICB9XHJcbiAgLy8gfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRTY3JvbGwoKSB7XHJcbiAgICByZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQb3Jmb2xpbyBpc290b3BlIGFuZCBmaWx0ZXJcclxuICAgKi9cclxuICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuXHJcbiAgLy8gICBsZXQgcG9ydGZvbGlvQ29udGFpbmVyID0gc2VsZWN0KCcucG9ydGZvbGlvLWNvbnRhaW5lcicpO1xyXG5cclxuICAvLyAgIGlmIChwb3J0Zm9saW9Db250YWluZXIpIHtcclxuICAvLyAgICAgbGV0IHBvcnRmb2xpb0lzb3RvcGUgPSBuZXcgSXNvdG9wZShwb3J0Zm9saW9Db250YWluZXIsIHtcclxuICAvLyAgICAgICBpdGVtU2VsZWN0b3I6ICcucG9ydGZvbGlvLWl0ZW0nXHJcbiAgLy8gICAgIH0pO1xyXG5cclxuICAvLyAgICAgbGV0IHBvcnRmb2xpb0ZpbHRlcnMgPSBzZWxlY3QoJyNwb3J0Zm9saW8tZmx0ZXJzIGxpJywgdHJ1ZSk7XHJcblxyXG4gIC8vICAgICBvbignY2xpY2snLCAnI3BvcnRmb2xpby1mbHRlcnMgbGknLCBmdW5jdGlvbihlKSB7XHJcbiAgLy8gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIC8vICAgICAgIHBvcnRmb2xpb0ZpbHRlcnMuZm9yRWFjaChmdW5jdGlvbihlbCkge1xyXG4gIC8vICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZmlsdGVyLWFjdGl2ZScpO1xyXG4gIC8vICAgICAgIH0pO1xyXG4gIC8vICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnZmlsdGVyLWFjdGl2ZScpO1xyXG5cclxuICAvLyAgICAgICBwb3J0Zm9saW9Jc290b3BlLmFycmFuZ2Uoe1xyXG4gIC8vICAgICAgICAgZmlsdGVyOiB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1maWx0ZXInKVxyXG4gIC8vICAgICAgIH0pO1xyXG4gIC8vICAgICAgIHBvcnRmb2xpb0lzb3RvcGUub24oJ2FycmFuZ2VDb21wbGV0ZScsIGZ1bmN0aW9uKCkge1xyXG4gIC8vICAgICAgICAgQU9TLnJlZnJlc2goKVxyXG4gIC8vICAgICAgIH0pO1xyXG5cclxuICAvLyAgICAgfSwgdHJ1ZSk7XHJcbiAgLy8gICB9XHJcblxyXG4gIC8vIH0pO1xyXG5cclxuICAvKipcclxuICAgKiBJbml0aWF0ZSBwb3J0Zm9saW8gbGlnaHRib3ggXHJcbiAgICovXHJcbiAgLy8gY29uc3QgcG9ydGZvbGlvTGlnaHRib3ggPSBHTGlnaHRib3goe1xyXG4gIC8vICAgc2VsZWN0b3I6ICcucG9ydGZvbGlvLWxpZ2h0Ym94J1xyXG4gIC8vIH0pO1xyXG5cclxuICAvKipcclxuICAgKiBQb3J0Zm9saW8gZGV0YWlscyBzbGlkZXJcclxuICAgKi9cclxuICAvLyBuZXcgU3dpcGVyKCcucG9ydGZvbGlvLWRldGFpbHMtc2xpZGVyJywge1xyXG4gIC8vICAgc3BlZWQ6IDQwMCxcclxuICAvLyAgIGxvb3A6IHRydWUsXHJcbiAgLy8gICBhdXRvcGxheToge1xyXG4gIC8vICAgICBkZWxheTogNTAwMCxcclxuICAvLyAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlXHJcbiAgLy8gICB9LFxyXG4gIC8vICAgcGFnaW5hdGlvbjoge1xyXG4gIC8vICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgLy8gICAgIHR5cGU6ICdidWxsZXRzJyxcclxuICAvLyAgICAgY2xpY2thYmxlOiB0cnVlXHJcbiAgLy8gICB9XHJcbiAgLy8gfSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFuaW1hdGlvbiBvbiBzY3JvbGxcclxuICAgKi9cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgIC8vIEFPUy5pbml0KHtcclxuICAgIC8vICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAvLyAgIGVhc2luZzogXCJlYXNlLWluLW91dFwiLFxyXG4gICAgLy8gICBvbmNlOiB0cnVlLFxyXG4gICAgLy8gICBtaXJyb3I6IGZhbHNlXHJcbiAgICAvLyB9KTtcclxuICB9KTtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhdGUgUHVyZSBDb3VudGVyIFxyXG4gICAqL1xyXG4gIC8vIG5ldyBQdXJlQ291bnRlcigpO1xyXG5cclxufSkoKSJdLCJzb3VyY2VSb290IjoiIn0=