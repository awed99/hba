webpackHotUpdate_N_E(2,{

/***/ "./public/assets/js/main.js":
/*!**********************************!*\
  !*** ./public/assets/js/main.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _toConsumableArray = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js");

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

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2Fzc2V0cy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbInNlbGVjdCIsImVsIiwiYWxsIiwidHJpbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmRlZmluZWQiLCJvbiIsInR5cGUiLCJsaXN0ZW5lciIsInNlbGVjdEVsIiwiZm9yRWFjaCIsImUiLCJhZGRFdmVudExpc3RlbmVyIiwib25zY3JvbGwiLCJuYXZiYXJsaW5rcyIsIm5hdmJhcmxpbmtzQWN0aXZlIiwicG9zaXRpb24iLCJ3aW5kb3ciLCJzY3JvbGxZIiwibmF2YmFybGluayIsImhhc2giLCJzZWN0aW9uIiwib2Zmc2V0VG9wIiwib2Zmc2V0SGVpZ2h0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic2Nyb2xsdG8iLCJoZWFkZXIiLCJvZmZzZXQiLCJjb250YWlucyIsImVsZW1lbnRQb3MiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwic2VsZWN0SGVhZGVyIiwiaGVhZGVyU2Nyb2xsZWQiLCJiYWNrdG90b3AiLCJ0b2dnbGVCYWNrdG90b3AiLCJ0b2dnbGUiLCJwcmV2ZW50RGVmYXVsdCIsIm5leHRFbGVtZW50U2libGluZyIsImdldEN1cnJlbnRTY3JvbGwiLCJwYWdlWU9mZnNldCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsWUFBVztBQUNWO0FBRUE7QUFDRjtBQUNBOztBQUNFLE1BQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEVBQUQsRUFBcUI7QUFBQSxRQUFoQkMsR0FBZ0IsdUVBQVYsS0FBVTtBQUNsQ0QsTUFBRSxHQUFHQSxFQUFFLENBQUNFLElBQUgsRUFBTDs7QUFDQSxRQUFJRCxHQUFKLEVBQVM7QUFBQTs7QUFDUCw2Q0FBV0UsUUFBWCw4Q0FBVyxVQUFVQyxnQkFBVixDQUEyQkosRUFBM0IsQ0FBWDtBQUNELEtBRkQsTUFFTztBQUFBOztBQUNMLGFBQU8sY0FBQ0csUUFBRCx1Q0FBQyxXQUFVRSxhQUFYLGlCQUE0QkYsUUFBNUIsK0NBQTRCLFdBQVVFLGFBQVYsQ0FBd0JMLEVBQXhCLENBQTVCLEdBQTBETSxTQUFqRTtBQUNEO0FBQ0YsR0FQRDtBQVNBO0FBQ0Y7QUFDQTs7O0FBQ0UsTUFBTUMsRUFBRSxHQUFHLFNBQUxBLEVBQUssQ0FBQ0MsSUFBRCxFQUFPUixFQUFQLEVBQVdTLFFBQVgsRUFBcUM7QUFBQSxRQUFoQlIsR0FBZ0IsdUVBQVYsS0FBVTtBQUM5QyxRQUFJUyxRQUFRLEdBQUdYLE1BQU0sQ0FBQ0MsRUFBRCxFQUFLQyxHQUFMLENBQXJCOztBQUNBLFFBQUlTLFFBQUosRUFBYztBQUNaLFVBQUlULEdBQUosRUFBUztBQUNQUyxnQkFBUSxDQUFDQyxPQUFULENBQWlCLFVBQUFDLENBQUM7QUFBQSxpQkFBSUEsQ0FBQyxDQUFDQyxnQkFBRixDQUFtQkwsSUFBbkIsRUFBeUJDLFFBQXpCLENBQUo7QUFBQSxTQUFsQjtBQUNELE9BRkQsTUFFTztBQUNMQyxnQkFBUSxDQUFDRyxnQkFBVCxDQUEwQkwsSUFBMUIsRUFBZ0NDLFFBQWhDO0FBQ0Q7QUFDRjtBQUNGLEdBVEQ7QUFXQTtBQUNGO0FBQ0E7OztBQUNFLE1BQU1LLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNkLEVBQUQsRUFBS1MsUUFBTCxFQUFrQjtBQUNqQ1QsTUFBRSxDQUFDYSxnQkFBSCxDQUFvQixRQUFwQixFQUE4QkosUUFBOUI7QUFDRCxHQUZEO0FBSUE7QUFDRjtBQUNBOzs7QUFDRSxNQUFJTSxXQUFXLEdBQUdoQixNQUFNLENBQUMsbUJBQUQsRUFBc0IsSUFBdEIsQ0FBeEI7O0FBQ0EsTUFBTWlCLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QixRQUFJQyxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixHQUFoQztBQUNBSixlQUFXLENBQUNKLE9BQVosQ0FBb0IsVUFBQVMsVUFBVSxFQUFJO0FBQ2hDLFVBQUksQ0FBQ0EsVUFBVSxDQUFDQyxJQUFoQixFQUFzQjtBQUN0QixVQUFJQyxPQUFPLEdBQUd2QixNQUFNLENBQUNxQixVQUFVLENBQUNDLElBQVosQ0FBcEI7QUFDQSxVQUFJLENBQUNDLE9BQUwsRUFBYzs7QUFDZCxVQUFJTCxRQUFRLElBQUlLLE9BQU8sQ0FBQ0MsU0FBcEIsSUFBaUNOLFFBQVEsSUFBS0ssT0FBTyxDQUFDQyxTQUFSLEdBQW9CRCxPQUFPLENBQUNFLFlBQTlFLEVBQTZGO0FBQzNGSixrQkFBVSxDQUFDSyxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixRQUF6QjtBQUNELE9BRkQsTUFFTztBQUNMTixrQkFBVSxDQUFDSyxTQUFYLENBQXFCRSxNQUFyQixDQUE0QixRQUE1QjtBQUNEO0FBQ0YsS0FURDtBQVVELEdBWkQ7O0FBYUFULFFBQU0sQ0FBQ0wsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0NHLGlCQUFoQztBQUNBRixVQUFRLENBQUNYLFFBQUQsRUFBV2EsaUJBQVgsQ0FBUjtBQUVBO0FBQ0Y7QUFDQTs7QUFDRSxNQUFNWSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDNUIsRUFBRCxFQUFRO0FBQ3ZCLFFBQUk2QixNQUFNLEdBQUc5QixNQUFNLENBQUMsU0FBRCxDQUFuQjtBQUNBLFFBQUkrQixNQUFNLEdBQUdELE1BQU0sQ0FBQ0wsWUFBcEI7O0FBRUEsUUFBSSxDQUFDSyxNQUFNLENBQUNKLFNBQVAsQ0FBaUJNLFFBQWpCLENBQTBCLGlCQUExQixDQUFMLEVBQW1EO0FBQ2pERCxZQUFNLElBQUksRUFBVjtBQUNEOztBQUVELFFBQUlFLFVBQVUsR0FBR2pDLE1BQU0sQ0FBQ0MsRUFBRCxDQUFOLENBQVd1QixTQUE1QjtBQUNBTCxVQUFNLENBQUNlLFFBQVAsQ0FBZ0I7QUFDZEMsU0FBRyxFQUFFRixVQUFVLEdBQUdGLE1BREo7QUFFZEssY0FBUSxFQUFFO0FBRkksS0FBaEI7QUFJRCxHQWJEO0FBZUE7QUFDRjtBQUNBOzs7QUFDRSxNQUFJQyxZQUFZLEdBQUdyQyxNQUFNLENBQUMsU0FBRCxDQUF6Qjs7QUFDQSxNQUFJcUMsWUFBSixFQUFrQjtBQUNoQixRQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsVUFBSW5CLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixHQUFyQixFQUEwQjtBQUN4QmlCLG9CQUFZLENBQUNYLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLGlCQUEzQjtBQUNELE9BRkQsTUFFTztBQUNMVSxvQkFBWSxDQUFDWCxTQUFiLENBQXVCRSxNQUF2QixDQUE4QixpQkFBOUI7QUFDRDtBQUNGLEtBTkQ7O0FBT0FULFVBQU0sQ0FBQ0wsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0N3QixjQUFoQztBQUNBdkIsWUFBUSxDQUFDWCxRQUFELEVBQVdrQyxjQUFYLENBQVI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBQ0UsTUFBSUMsU0FBUyxHQUFHdkMsTUFBTSxDQUFDLGNBQUQsQ0FBdEI7O0FBQ0EsTUFBSXVDLFNBQUosRUFBZTtBQUNiLFFBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixVQUFJckIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLEdBQXJCLEVBQTBCO0FBQ3hCbUIsaUJBQVMsQ0FBQ2IsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsUUFBeEI7QUFDRCxPQUZELE1BRU87QUFDTFksaUJBQVMsQ0FBQ2IsU0FBVixDQUFvQkUsTUFBcEIsQ0FBMkIsUUFBM0I7QUFDRDtBQUNGLEtBTkQ7O0FBT0FULFVBQU0sQ0FBQ0wsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MwQixlQUFoQztBQUNBekIsWUFBUSxDQUFDWCxRQUFELEVBQVdvQyxlQUFYLENBQVI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBQ0VoQyxJQUFFLENBQUMsT0FBRCxFQUFVLG9CQUFWLEVBQWdDLFVBQVNLLENBQVQsRUFBWTtBQUM1Q2IsVUFBTSxDQUFDLFNBQUQsQ0FBTixDQUFrQjBCLFNBQWxCLENBQTRCZSxNQUE1QixDQUFtQyxlQUFuQztBQUNBLFNBQUtmLFNBQUwsQ0FBZWUsTUFBZixDQUFzQixTQUF0QjtBQUNBLFNBQUtmLFNBQUwsQ0FBZWUsTUFBZixDQUFzQixNQUF0QjtBQUNELEdBSkMsQ0FBRjtBQU1BO0FBQ0Y7QUFDQTs7QUFDRWpDLElBQUUsQ0FBQyxPQUFELEVBQVUsdUJBQVYsRUFBbUMsVUFBU0ssQ0FBVCxFQUFZO0FBQy9DLFFBQUliLE1BQU0sQ0FBQyxTQUFELENBQU4sQ0FBa0IwQixTQUFsQixDQUE0Qk0sUUFBNUIsQ0FBcUMsZUFBckMsQ0FBSixFQUEyRDtBQUN6RG5CLE9BQUMsQ0FBQzZCLGNBQUY7QUFDQSxXQUFLQyxrQkFBTCxDQUF3QmpCLFNBQXhCLENBQWtDZSxNQUFsQyxDQUF5QyxpQkFBekM7QUFDRDtBQUNGLEdBTEMsRUFLQyxJQUxELENBQUY7QUFPQTtBQUNGO0FBQ0E7QUFDRTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNGO0FBQ0E7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNGO0FBQ0E7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDRjtBQUNBO0FBQ0U7QUFDQTtBQUNBOztBQUVBO0FBQ0Y7QUFDQTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBU0csZ0JBQVQsR0FBNEI7QUFDMUIsV0FBT3pCLE1BQU0sQ0FBQzBCLFdBQVAsSUFBc0J6QyxRQUFRLENBQUMwQyxlQUFULENBQXlCQyxTQUF0RDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0U7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDRjtBQUNBO0FBQ0U7QUFDQTtBQUNBOztBQUVBO0FBQ0Y7QUFDQTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Y7QUFDQTs7O0FBQ0U1QixRQUFNLENBQUNMLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFlBQU0sQ0FDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsR0FQRDtBQVNBO0FBQ0Y7QUFDQTtBQUNFO0FBRUQsQ0EzUUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svMi43NTA5ZjZkMGM3NmU3MDVmZmIzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiogVGVtcGxhdGUgTmFtZTogRGV3aVxyXG4qIFVwZGF0ZWQ6IFNlcCAxOCAyMDIzIHdpdGggQm9vdHN0cmFwIHY1LjMuMlxyXG4qIFRlbXBsYXRlIFVSTDogaHR0cHM6Ly9ib290c3RyYXBtYWRlLmNvbS9kZXdpLWZyZWUtbXVsdGktcHVycG9zZS1odG1sLXRlbXBsYXRlL1xyXG4qIEF1dGhvcjogQm9vdHN0cmFwTWFkZS5jb21cclxuKiBMaWNlbnNlOiBodHRwczovL2Jvb3RzdHJhcG1hZGUuY29tL2xpY2Vuc2UvXHJcbiovXHJcbihmdW5jdGlvbigpIHtcclxuICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgLyoqXHJcbiAgICogRWFzeSBzZWxlY3RvciBoZWxwZXIgZnVuY3Rpb25cclxuICAgKi9cclxuICBjb25zdCBzZWxlY3QgPSAoZWwsIGFsbCA9IGZhbHNlKSA9PiB7XHJcbiAgICBlbCA9IGVsLnRyaW0oKVxyXG4gICAgaWYgKGFsbCkge1xyXG4gICAgICByZXR1cm4gWy4uLmRvY3VtZW50Py5xdWVyeVNlbGVjdG9yQWxsKGVsKV1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoZG9jdW1lbnQ/LnF1ZXJ5U2VsZWN0b3IpID8gZG9jdW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoZWwpIDogdW5kZWZpbmVkXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFYXN5IGV2ZW50IGxpc3RlbmVyIGZ1bmN0aW9uXHJcbiAgICovXHJcbiAgY29uc3Qgb24gPSAodHlwZSwgZWwsIGxpc3RlbmVyLCBhbGwgPSBmYWxzZSkgPT4ge1xyXG4gICAgbGV0IHNlbGVjdEVsID0gc2VsZWN0KGVsLCBhbGwpXHJcbiAgICBpZiAoc2VsZWN0RWwpIHtcclxuICAgICAgaWYgKGFsbCkge1xyXG4gICAgICAgIHNlbGVjdEVsLmZvckVhY2goZSA9PiBlLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlbGVjdEVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVhc3kgb24gc2Nyb2xsIGV2ZW50IGxpc3RlbmVyIFxyXG4gICAqL1xyXG4gIGNvbnN0IG9uc2Nyb2xsID0gKGVsLCBsaXN0ZW5lcikgPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgbGlzdGVuZXIpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBOYXZiYXIgbGlua3MgYWN0aXZlIHN0YXRlIG9uIHNjcm9sbFxyXG4gICAqL1xyXG4gIGxldCBuYXZiYXJsaW5rcyA9IHNlbGVjdCgnI25hdmJhciAuc2Nyb2xsdG8nLCB0cnVlKVxyXG4gIGNvbnN0IG5hdmJhcmxpbmtzQWN0aXZlID0gKCkgPT4ge1xyXG4gICAgbGV0IHBvc2l0aW9uID0gd2luZG93LnNjcm9sbFkgKyAyMDBcclxuICAgIG5hdmJhcmxpbmtzLmZvckVhY2gobmF2YmFybGluayA9PiB7XHJcbiAgICAgIGlmICghbmF2YmFybGluay5oYXNoKSByZXR1cm5cclxuICAgICAgbGV0IHNlY3Rpb24gPSBzZWxlY3QobmF2YmFybGluay5oYXNoKVxyXG4gICAgICBpZiAoIXNlY3Rpb24pIHJldHVyblxyXG4gICAgICBpZiAocG9zaXRpb24gPj0gc2VjdGlvbi5vZmZzZXRUb3AgJiYgcG9zaXRpb24gPD0gKHNlY3Rpb24ub2Zmc2V0VG9wICsgc2VjdGlvbi5vZmZzZXRIZWlnaHQpKSB7XHJcbiAgICAgICAgbmF2YmFybGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmJhcmxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBuYXZiYXJsaW5rc0FjdGl2ZSlcclxuICBvbnNjcm9sbChkb2N1bWVudCwgbmF2YmFybGlua3NBY3RpdmUpXHJcblxyXG4gIC8qKlxyXG4gICAqIFNjcm9sbHMgdG8gYW4gZWxlbWVudCB3aXRoIGhlYWRlciBvZmZzZXRcclxuICAgKi9cclxuICBjb25zdCBzY3JvbGx0byA9IChlbCkgPT4ge1xyXG4gICAgbGV0IGhlYWRlciA9IHNlbGVjdCgnI2hlYWRlcicpXHJcbiAgICBsZXQgb2Zmc2V0ID0gaGVhZGVyLm9mZnNldEhlaWdodFxyXG5cclxuICAgIGlmICghaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyLXNjcm9sbGVkJykpIHtcclxuICAgICAgb2Zmc2V0IC09IDIwXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGVsZW1lbnRQb3MgPSBzZWxlY3QoZWwpLm9mZnNldFRvcFxyXG4gICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgdG9wOiBlbGVtZW50UG9zIC0gb2Zmc2V0LFxyXG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUb2dnbGUgLmhlYWRlci1zY3JvbGxlZCBjbGFzcyB0byAjaGVhZGVyIHdoZW4gcGFnZSBpcyBzY3JvbGxlZFxyXG4gICAqL1xyXG4gIGxldCBzZWxlY3RIZWFkZXIgPSBzZWxlY3QoJyNoZWFkZXInKVxyXG4gIGlmIChzZWxlY3RIZWFkZXIpIHtcclxuICAgIGNvbnN0IGhlYWRlclNjcm9sbGVkID0gKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxMDApIHtcclxuICAgICAgICBzZWxlY3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLXNjcm9sbGVkJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZWxlY3RIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyLXNjcm9sbGVkJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBoZWFkZXJTY3JvbGxlZClcclxuICAgIG9uc2Nyb2xsKGRvY3VtZW50LCBoZWFkZXJTY3JvbGxlZClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJhY2sgdG8gdG9wIGJ1dHRvblxyXG4gICAqL1xyXG4gIGxldCBiYWNrdG90b3AgPSBzZWxlY3QoJy5iYWNrLXRvLXRvcCcpXHJcbiAgaWYgKGJhY2t0b3RvcCkge1xyXG4gICAgY29uc3QgdG9nZ2xlQmFja3RvdG9wID0gKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxMDApIHtcclxuICAgICAgICBiYWNrdG90b3AuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBiYWNrdG90b3AuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0b2dnbGVCYWNrdG90b3ApXHJcbiAgICBvbnNjcm9sbChkb2N1bWVudCwgdG9nZ2xlQmFja3RvdG9wKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTW9iaWxlIG5hdiB0b2dnbGVcclxuICAgKi9cclxuICBvbignY2xpY2snLCAnLm1vYmlsZS1uYXYtdG9nZ2xlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgc2VsZWN0KCcjbmF2YmFyJykuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2YmFyLW1vYmlsZScpXHJcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2JpLWxpc3QnKVxyXG4gICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdiaS14JylcclxuICB9KVxyXG5cclxuICAvKipcclxuICAgKiBNb2JpbGUgbmF2IGRyb3Bkb3ducyBhY3RpdmF0ZVxyXG4gICAqL1xyXG4gIG9uKCdjbGljaycsICcubmF2YmFyIC5kcm9wZG93biA+IGEnLCBmdW5jdGlvbihlKSB7XHJcbiAgICBpZiAoc2VsZWN0KCcjbmF2YmFyJykuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXZiYXItbW9iaWxlJykpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoJ2Ryb3Bkb3duLWFjdGl2ZScpXHJcbiAgICB9XHJcbiAgfSwgdHJ1ZSlcclxuXHJcbiAgLyoqXHJcbiAgICogU2Nyb29sIHdpdGggb2ZzZXQgb24gbGlua3Mgd2l0aCBhIGNsYXNzIG5hbWUgLnNjcm9sbHRvXHJcbiAgICovXHJcbiAgLy8gb24oJ2NsaWNrJywgJy5zY3JvbGx0bycsIGZ1bmN0aW9uKGUpIHtcclxuICAvLyAgIGlmIChzZWxlY3QodGhpcy5oYXNoKSkge1xyXG4gIC8vICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgLy8gICAgIGxldCBuYXZiYXIgPSBzZWxlY3QoJyNuYXZiYXInKVxyXG4gIC8vICAgICBpZiAobmF2YmFyLmNsYXNzTGlzdC5jb250YWlucygnbmF2YmFyLW1vYmlsZScpKSB7XHJcbiAgLy8gICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoJ25hdmJhci1tb2JpbGUnKVxyXG4gIC8vICAgICAgIGxldCBuYXZiYXJUb2dnbGUgPSBzZWxlY3QoJy5tb2JpbGUtbmF2LXRvZ2dsZScpXHJcbiAgLy8gICAgICAgbmF2YmFyVG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ2JpLWxpc3QnKVxyXG4gIC8vICAgICAgIG5hdmJhclRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdiaS14JylcclxuICAvLyAgICAgfVxyXG4gIC8vICAgICBzY3JvbGx0byh0aGlzLmhhc2gpXHJcbiAgLy8gICB9XHJcbiAgLy8gfSwgdHJ1ZSlcclxuXHJcbiAgLyoqXHJcbiAgICogU2Nyb2xsIHdpdGggb2ZzZXQgb24gcGFnZSBsb2FkIHdpdGggaGFzaCBsaW5rcyBpbiB0aGUgdXJsXHJcbiAgICovXHJcbiAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgLy8gICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcclxuICAvLyAgICAgaWYgKHNlbGVjdCh3aW5kb3cubG9jYXRpb24uaGFzaCkpIHtcclxuICAvLyAgICAgICBzY3JvbGx0byh3aW5kb3cubG9jYXRpb24uaGFzaClcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfVxyXG4gIC8vIH0pO1xyXG5cclxuICAvKipcclxuICAgKiBQcmVsb2FkZXJcclxuICAgKi9cclxuICAvLyBsZXQgcHJlbG9hZGVyID0gc2VsZWN0KCcjcHJlbG9hZGVyJyk7XHJcbiAgLy8gaWYgKHByZWxvYWRlcikge1xyXG4gIC8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgLy8gICAgIHByZWxvYWRlci5yZW1vdmUoKVxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWF0ZSBnbGlnaHRib3ggXHJcbiAgICovXHJcbiAgLy8gY29uc3QgZ2xpZ2h0Ym94ID0gR0xpZ2h0Ym94KHtcclxuICAvLyAgIHNlbGVjdG9yOiAnLmdsaWdodGJveCdcclxuICAvLyB9KTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGVzdGltb25pYWxzIHNsaWRlclxyXG4gICAqL1xyXG4gIC8vIG5ldyBTd2lwZXIoJy50ZXN0aW1vbmlhbHMtc2xpZGVyJywge1xyXG4gIC8vICAgc3BlZWQ6IDYwMCxcclxuICAvLyAgIGxvb3A6IHRydWUsXHJcbiAgLy8gICBhdXRvcGxheToge1xyXG4gIC8vICAgICBkZWxheTogNTAwMCxcclxuICAvLyAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlXHJcbiAgLy8gICB9LFxyXG4gIC8vICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gIC8vICAgcGFnaW5hdGlvbjoge1xyXG4gIC8vICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgLy8gICAgIHR5cGU6ICdidWxsZXRzJyxcclxuICAvLyAgICAgY2xpY2thYmxlOiB0cnVlXHJcbiAgLy8gICB9XHJcbiAgLy8gfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRTY3JvbGwoKSB7XHJcbiAgICByZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQb3Jmb2xpbyBpc290b3BlIGFuZCBmaWx0ZXJcclxuICAgKi9cclxuICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuXHJcbiAgLy8gICBsZXQgcG9ydGZvbGlvQ29udGFpbmVyID0gc2VsZWN0KCcucG9ydGZvbGlvLWNvbnRhaW5lcicpO1xyXG5cclxuICAvLyAgIGlmIChwb3J0Zm9saW9Db250YWluZXIpIHtcclxuICAvLyAgICAgbGV0IHBvcnRmb2xpb0lzb3RvcGUgPSBuZXcgSXNvdG9wZShwb3J0Zm9saW9Db250YWluZXIsIHtcclxuICAvLyAgICAgICBpdGVtU2VsZWN0b3I6ICcucG9ydGZvbGlvLWl0ZW0nXHJcbiAgLy8gICAgIH0pO1xyXG5cclxuICAvLyAgICAgbGV0IHBvcnRmb2xpb0ZpbHRlcnMgPSBzZWxlY3QoJyNwb3J0Zm9saW8tZmx0ZXJzIGxpJywgdHJ1ZSk7XHJcblxyXG4gIC8vICAgICBvbignY2xpY2snLCAnI3BvcnRmb2xpby1mbHRlcnMgbGknLCBmdW5jdGlvbihlKSB7XHJcbiAgLy8gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIC8vICAgICAgIHBvcnRmb2xpb0ZpbHRlcnMuZm9yRWFjaChmdW5jdGlvbihlbCkge1xyXG4gIC8vICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZmlsdGVyLWFjdGl2ZScpO1xyXG4gIC8vICAgICAgIH0pO1xyXG4gIC8vICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnZmlsdGVyLWFjdGl2ZScpO1xyXG5cclxuICAvLyAgICAgICBwb3J0Zm9saW9Jc290b3BlLmFycmFuZ2Uoe1xyXG4gIC8vICAgICAgICAgZmlsdGVyOiB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1maWx0ZXInKVxyXG4gIC8vICAgICAgIH0pO1xyXG4gIC8vICAgICAgIHBvcnRmb2xpb0lzb3RvcGUub24oJ2FycmFuZ2VDb21wbGV0ZScsIGZ1bmN0aW9uKCkge1xyXG4gIC8vICAgICAgICAgQU9TLnJlZnJlc2goKVxyXG4gIC8vICAgICAgIH0pO1xyXG5cclxuICAvLyAgICAgfSwgdHJ1ZSk7XHJcbiAgLy8gICB9XHJcblxyXG4gIC8vIH0pO1xyXG5cclxuICAvKipcclxuICAgKiBJbml0aWF0ZSBwb3J0Zm9saW8gbGlnaHRib3ggXHJcbiAgICovXHJcbiAgLy8gY29uc3QgcG9ydGZvbGlvTGlnaHRib3ggPSBHTGlnaHRib3goe1xyXG4gIC8vICAgc2VsZWN0b3I6ICcucG9ydGZvbGlvLWxpZ2h0Ym94J1xyXG4gIC8vIH0pO1xyXG5cclxuICAvKipcclxuICAgKiBQb3J0Zm9saW8gZGV0YWlscyBzbGlkZXJcclxuICAgKi9cclxuICAvLyBuZXcgU3dpcGVyKCcucG9ydGZvbGlvLWRldGFpbHMtc2xpZGVyJywge1xyXG4gIC8vICAgc3BlZWQ6IDQwMCxcclxuICAvLyAgIGxvb3A6IHRydWUsXHJcbiAgLy8gICBhdXRvcGxheToge1xyXG4gIC8vICAgICBkZWxheTogNTAwMCxcclxuICAvLyAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlXHJcbiAgLy8gICB9LFxyXG4gIC8vICAgcGFnaW5hdGlvbjoge1xyXG4gIC8vICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgLy8gICAgIHR5cGU6ICdidWxsZXRzJyxcclxuICAvLyAgICAgY2xpY2thYmxlOiB0cnVlXHJcbiAgLy8gICB9XHJcbiAgLy8gfSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFuaW1hdGlvbiBvbiBzY3JvbGxcclxuICAgKi9cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgIC8vIEFPUy5pbml0KHtcclxuICAgIC8vICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAvLyAgIGVhc2luZzogXCJlYXNlLWluLW91dFwiLFxyXG4gICAgLy8gICBvbmNlOiB0cnVlLFxyXG4gICAgLy8gICBtaXJyb3I6IGZhbHNlXHJcbiAgICAvLyB9KTtcclxuICB9KTtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhdGUgUHVyZSBDb3VudGVyIFxyXG4gICAqL1xyXG4gIC8vIG5ldyBQdXJlQ291bnRlcigpO1xyXG5cclxufSkoKSJdLCJzb3VyY2VSb290IjoiIn0=