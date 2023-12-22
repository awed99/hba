(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[13],{

/***/ "7RXq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ }),

/***/ "A+8Y":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qGJC")


/***/ }),

/***/ "EZV4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _toConsumableArray; });

// CONCATENATED MODULE: /home/aris5618/nodevenv/public_html/repository/hba/14/lib/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
// CONCATENATED MODULE: /home/aris5618/nodevenv/public_html/repository/hba/14/lib/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// CONCATENATED MODULE: /home/aris5618/nodevenv/public_html/repository/hba/14/lib/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
// CONCATENATED MODULE: /home/aris5618/nodevenv/public_html/repository/hba/14/lib/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: /home/aris5618/nodevenv/public_html/repository/hba/14/lib/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: /home/aris5618/nodevenv/public_html/repository/hba/14/lib/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

/***/ }),

/***/ "SB3O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return importJS; });
/* harmony import */ var _home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7RXq");
/* harmony import */ var _home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("EZV4");
/* harmony import */ var _home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+4Qm");
/* harmony import */ var _home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fhWJ");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




/**
 * Easy selector helper function
 */

var select = function select(el) {
  var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  el = el.trim();

  if (all) {
    return Object(_home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(document.querySelectorAll(el));
  } else {
    return document.querySelector(el);
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

var importJS = /*#__PURE__*/function () {
  var _ref = Object(_home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5() {
    var PureCounter, AOS, GLightbox, Isotope, Swiper, portfolioContainer, portfolioIsotope, portfolioFilters, heroCarouselIndicators, heroCarouselItems, preloader;
    return _home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            //   const initTerminal = async () => {
            PureCounter = /*#__PURE__*/function () {
              var _ref2 = Object(_home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
                return _home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return __webpack_require__.e(/* import() */ 5).then(__webpack_require__.t.bind(null, "E5Q/", 7));

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function PureCounter() {
                return _ref2.apply(this, arguments);
              };
            }();

            _context5.next = 3;
            return __webpack_require__.e(/* import() */ 10).then(__webpack_require__.t.bind(null, "2Anh", 7));

          case 3:
            AOS = _context5.sent;
            _context5.next = 6;
            return __webpack_require__.e(/* import() */ 8).then(__webpack_require__.t.bind(null, "NlV/", 7));

          case 6:
            GLightbox = /*#__PURE__*/function () {
              var _ref3 = Object(_home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
                return _home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return __webpack_require__.e(/* import() */ 5).then(__webpack_require__.t.bind(null, "OFRp", 7));

                      case 2:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function GLightbox() {
                return _ref3.apply(this, arguments);
              };
            }();

            Isotope = /*#__PURE__*/function () {
              var _ref4 = Object(_home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
                return _home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return Promise.all(/* import() */[__webpack_require__.e(6), __webpack_require__.e(7)]).then(__webpack_require__.t.bind(null, "IxrA", 7));

                      case 2:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function Isotope() {
                return _ref4.apply(this, arguments);
              };
            }();

            Swiper = /*#__PURE__*/function () {
              var _ref5 = Object(_home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/_home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4() {
                return _home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return __webpack_require__.e(/* import() */ 12).then(__webpack_require__.t.bind(null, "ht25", 7));

                      case 2:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function Swiper() {
                return _ref5.apply(this, arguments);
              };
            }();

            _context5.next = 11;
            return __webpack_require__.e(/* import() */ 11).then(__webpack_require__.t.bind(null, "7Szc", 7));

          case 11:
            _context5.next = 13;
            return __webpack_require__.e(/* import() */ 9).then(__webpack_require__.t.bind(null, "cAMi", 7));

          case 13:
            portfolioContainer = select('.portfolio-container');

            if (portfolioContainer) {
              portfolioIsotope = Isotope(portfolioContainer, {
                itemSelector: '.portfolio-item'
              });
              portfolioFilters = select('#portfolio-flters li', true);
              on('click', '#portfolio-flters li', function (e) {
                e.preventDefault();
                portfolioFilters.forEach(function (el) {
                  el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');
                portfolioIsotope.arrange({
                  filter: this.getAttribute('data-filter')
                });
                portfolioIsotope.on('arrangeComplete', function () {
                  AOS.refresh();
                });
              }, true);
            }
            /**
             * Hero carousel indicators
             */


            heroCarouselIndicators = select("#hero-carousel-indicators");
            heroCarouselItems = select('#heroCarousel .carousel-item', true);
            heroCarouselItems.forEach(function (item, index) {
              index === 0 ? heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>" : heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>";
            });
            /**
             * Initiate glightbox 
             */

            GLightbox({
              selector: '.glightbox'
            });
            Swiper('.testimonials-slider', {
              speed: 600,
              loop: true,
              autoplay: {
                delay: 5000,
                disableOnInteraction: false
              },
              slidesPerView: 'auto',
              pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
              }
            });
            Swiper('.portfolio-details-slider', {
              speed: 400,
              loop: true,
              autoplay: {
                delay: 5000,
                disableOnInteraction: false
              },
              pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
              }
            });
            AOS.init({
              duration: 1000,
              easing: "ease-in-out",
              once: true,
              mirror: false
            });
            PureCounter(); // Add logic with `term`

            preloader = select('#preloader');
            preloader === null || preloader === void 0 ? void 0 : preloader.remove(); //   }

          case 25:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function importJS() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "ZHh6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fhWJ");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("A+8Y");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("LNOq");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





function Header() {
  var _router$asPath, _router$asPath2, _router$asPath3, _router$asPath4;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("header", {
      id: "header",
      className: "fixed-top ",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
        className: "container d-flex align-items-center justify-content-between",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h1", {
          className: "logo",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
            href: "./",
            children: "HB ABADI"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("nav", {
          id: "navbar",
          className: "navbar",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("li", {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
                className: "nav-link scrollto " + ((router === null || router === void 0 ? void 0 : (_router$asPath = router.asPath) === null || _router$asPath === void 0 ? void 0 : _router$asPath.split("/")[1]) === '' ? 'active' : ''),
                href: "./",
                children: "Home"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("li", {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
                className: "nav-link scrollto " + ((router === null || router === void 0 ? void 0 : (_router$asPath2 = router.asPath) === null || _router$asPath2 === void 0 ? void 0 : _router$asPath2.split("/")[1]) === 'about-us' ? 'active' : ''),
                href: "./about-us",
                children: "About"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("li", {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
                className: "nav-link scrollto " + ((router === null || router === void 0 ? void 0 : (_router$asPath3 = router.asPath) === null || _router$asPath3 === void 0 ? void 0 : _router$asPath3.split("/")[1]) === 'services' ? 'active' : ''),
                href: "./services",
                children: "Services"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("li", {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
                className: "nav-link scrollto " + ((router === null || router === void 0 ? void 0 : (_router$asPath4 = router.asPath) === null || _router$asPath4 === void 0 ? void 0 : _router$asPath4.split("/")[1]) === 'contact-us' ? 'active' : ''),
                href: "./contact-us",
                children: "Contact"
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("i", {
            className: "bi bi-list mobile-nav-toggle"
          })]
        })]
      })
    })
  });
}

/***/ }),

/***/ "aIN1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fhWJ");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("A+8Y");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("LNOq");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





function Footer() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("footer", {
      id: "footer",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
        className: "footer-top",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
          className: "container",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
              className: "col-lg-3 col-md-6",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
                className: "footer-info",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h3", {
                  children: "PT Hidayat Bersaudara Abadi (HBA)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
                    children: "- Jl. Masjid Al Mujahidin RT. 003 RW 01 No.100, Kel. Jatirahayu Kec. Pondok Gede, Kota Bekasi, 17414, Jabar"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
                    children: "- Komplek Grand City, Forest ville K12 No. 23, Jl. MT Haryono Balikpapan, Kaltim"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("strong", {
                    children: "Phone:"
                  }), " 0812 1282 3030", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("strong", {
                    children: "Email:"
                  }), " admin@hidayatbersaudaraabadi.com", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("br", {})]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
                  className: "social-links mt-3",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
                    href: "./",
                    className: "twitter",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("i", {
                      className: "bx bxl-twitter"
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
                    href: "./",
                    className: "facebook",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("i", {
                      className: "bx bxl-facebook"
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
                    href: "./",
                    className: "instagram",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("i", {
                      className: "bx bxl-instagram"
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
                    href: "./",
                    className: "google-plus",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("i", {
                      className: "bx bxl-skype"
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
                    href: "./",
                    className: "linkedin",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("i", {
                      className: "bx bxl-linkedin"
                    })
                  })]
                })]
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
              className: "col-lg-2 col-md-6 footer-links",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h4", {
                children: "Useful Links"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("ul", {
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("i", {
                    className: "bx bx-chevron-right"
                  }), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
                    className: "scrollto",
                    href: "./",
                    children: "Home"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("i", {
                    className: "bx bx-chevron-right"
                  }), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
                    className: "scrollto",
                    href: "./about-us",
                    children: "About us"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("i", {
                    className: "bx bx-chevron-right"
                  }), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
                    className: "scrollto",
                    href: "./services",
                    children: "Services"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("i", {
                    className: "bx bx-chevron-right"
                  }), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
                    className: "scrollto",
                    href: "./contact-us",
                    children: "Contact"
                  })]
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
              className: "col-lg-3 col-md-6 footer-links",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h4", {
                children: "Our Services"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("ul", {
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("li", {
                  onClick: function onClick() {
                    return window.location = '/services';
                  },
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("i", {
                    className: "bx bx-chevron-right"
                  }), " General Supplies"]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("li", {
                  onClick: function onClick() {
                    return window.location = '/services';
                  },
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("i", {
                    className: "bx bx-chevron-right"
                  }), " Transportation Service"]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("li", {
                  onClick: function onClick() {
                    return window.location = '/services';
                  },
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("i", {
                    className: "bx bx-chevron-right"
                  }), " Civil Construction"]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("li", {
                  onClick: function onClick() {
                    return window.location = '/services';
                  },
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("i", {
                    className: "bx bx-chevron-right"
                  }), " Safety/Enviro Material Supplies"]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("li", {
                  onClick: function onClick() {
                    return window.location = '/services';
                  },
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("i", {
                    className: "bx bx-chevron-right"
                  }), " Tools Supplies"]
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
              className: "col-lg-4 col-md-6 footer-newsletter",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h4", {
                children: "Our Newsletter"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
                children: "Input your email to get our updates."
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("form", {
                action: "",
                method: "post",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("input", {
                  type: "email",
                  name: "email"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("input", {
                  type: "submit",
                  value: "Subscribe"
                })]
              })]
            })]
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
          className: "copyright",
          children: ["\xA9 Copyright ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("strong", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
              children: "Rumah Teknologi"
            })
          }), ". All Rights Reserved ", new Date().getFullYear()]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
          className: "credits",
          children: ["Designed by ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
            href: "https://bootstrapmade.com/",
            children: "BootstrapMade"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("br", {}), "Script used by ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
            href: "https://nextjs.org/",
            children: "NextJS"
          })]
        })]
      })]
    })
  });
}

/***/ })

}]);