_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[15],{

/***/ "+OYd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("7p0j");
module.exports = __webpack_require__("qGJC");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ App; });

// CONCATENATED MODULE: /home/aris5618/nodevenv/public_html/repository/hba/14/lib/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
// CONCATENATED MODULE: /home/aris5618/nodevenv/public_html/repository/hba/14/lib/node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
// CONCATENATED MODULE: /home/aris5618/nodevenv/public_html/repository/hba/14/lib/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
// CONCATENATED MODULE: /home/aris5618/nodevenv/public_html/repository/hba/14/lib/node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
// EXTERNAL MODULE: /home/aris5618/nodevenv/public_html/repository/hba/14/lib/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("7RXq");

// EXTERNAL MODULE: /home/aris5618/nodevenv/public_html/repository/hba/14/lib/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__("EZV4");

// EXTERNAL MODULE: /home/aris5618/nodevenv/public_html/repository/hba/14/lib/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("+4Qm");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: /home/aris5618/nodevenv/public_html/repository/hba/14/lib/node_modules/react/index.js
var react = __webpack_require__("fhWJ");

// EXTERNAL MODULE: /home/aris5618/nodevenv/public_html/repository/hba/14/lib/node_modules/next/image.js
var next_image = __webpack_require__("ngBj");

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__("zPlV");

// EXTERNAL MODULE: ./public/assets/vendor/aos/aos.css
var aos = __webpack_require__("rQCF");

// EXTERNAL MODULE: ./public/assets/vendor/bootstrap/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("fHWF");

// EXTERNAL MODULE: ./public/assets/vendor/bootstrap-icons/bootstrap-icons.css
var bootstrap_icons = __webpack_require__("vOas");

// EXTERNAL MODULE: ./public/assets/vendor/boxicons/css/boxicons.min.css
var boxicons_min = __webpack_require__("+OYd");

// EXTERNAL MODULE: ./public/assets/vendor/glightbox/css/glightbox.min.css
var glightbox_min = __webpack_require__("yF/l");

// EXTERNAL MODULE: ./public/assets/vendor/remixicon/remixicon.css
var remixicon = __webpack_require__("clZi");

// EXTERNAL MODULE: ./public/assets/vendor/swiper/swiper-bundle.min.css
var swiper_bundle_min = __webpack_require__("Ozth");

// EXTERNAL MODULE: ./public/assets/css/style.css
var style = __webpack_require__("djLK");

// EXTERNAL MODULE: ./public/assets/vendor/purecounter/purecounter_vanilla.js
var purecounter_vanilla = __webpack_require__("E5Q/");
var purecounter_vanilla_default = /*#__PURE__*/__webpack_require__.n(purecounter_vanilla);

// EXTERNAL MODULE: ./public/assets/vendor/glightbox/js/glightbox.min.js
var js_glightbox_min = __webpack_require__("OFRp");
var js_glightbox_min_default = /*#__PURE__*/__webpack_require__.n(js_glightbox_min);

// EXTERNAL MODULE: ./public/assets/vendor/swiper/swiper-bundle.min.js
var swiper_swiper_bundle_min = __webpack_require__("ht25");
var swiper_swiper_bundle_min_default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_min);

// EXTERNAL MODULE: ./public/assets/vendor/isotope-layout/isotope.pkgd.min.js
var isotope_pkgd_min = __webpack_require__("IxrA");
var isotope_pkgd_min_default = /*#__PURE__*/__webpack_require__.n(isotope_pkgd_min);

// EXTERNAL MODULE: /home/aris5618/nodevenv/public_html/repository/hba/14/lib/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("LNOq");

// CONCATENATED MODULE: ./pages/_app.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


















function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useState = Object(react["useState"])(false),
      mounted = _useState[0],
      setMounted = _useState[1];
  /**
   * Easy selector helper function
   */


  var select = function select(el) {
    var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    el = el.trim();

    if (all) {
      var _document;

      return Object(toConsumableArray["a" /* default */])((_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll(el));
    } else {
      var _document2;

      return (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector(el);
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

  var initTerminal = /*#__PURE__*/function () {
    var _ref2 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var AOS, portfolioContainer, portfolioIsotope, portfolioFilters, heroCarouselIndicators, heroCarouselItems, preloader;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__.e(/* import() */ 10).then(__webpack_require__.t.bind(null, "2Anh", 7));

            case 2:
              AOS = _context.sent;
              _context.next = 5;
              return __webpack_require__.e(/* import() */ 8).then(__webpack_require__.t.bind(null, "NlV/", 7));

            case 5:
              _context.next = 7;
              return __webpack_require__.e(/* import() */ 11).then(__webpack_require__.t.bind(null, "7Szc", 7));

            case 7:
              _context.next = 9;
              return __webpack_require__.e(/* import() */ 9).then(__webpack_require__.t.bind(null, "cAMi", 7));

            case 9:
              portfolioContainer = select('.portfolio-container');

              if (portfolioContainer) {
                portfolioIsotope = new isotope_pkgd_min_default.a(portfolioContainer, {
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
               * Initiate portfolio lightbox 
               */


              js_glightbox_min_default()({
                selector: '.portfolio-lightbox'
              });
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

              js_glightbox_min_default()({
                selector: '.glightbox'
              });
              new swiper_swiper_bundle_min_default.a('.testimonials-slider', {
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
              new swiper_swiper_bundle_min_default.a('.portfolio-details-slider', {
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
              purecounter_vanilla_default()(); // Add logic with `term`

              preloader = select('#preloader');
              preloader === null || preloader === void 0 ? void 0 : preloader.remove();

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function initTerminal() {
      return _ref2.apply(this, arguments);
    };
  }(); // useEffect(() => {
  //   // setTimeout(() => {
  //   //   initTerminal()
  //   // }, 100)
  //   if (mounted) {
  //     setTimeout(() => initTerminal(), 200)
  //   }
  // }, [mounted])


  Object(react["useEffect"])(function () {
    setTimeout(function () {
      return initTerminal();
    }, 200);
  }); // console.log('pageProps: ', pageProps)
  // console.log('Component: ', Component)

  return /*#__PURE__*/Object(jsx_runtime["jsx"])(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
    suppressHydrationWarning: true
  }));
}

/***/ }),

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

/***/ "7p0j":
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__("1TCz");
      }
    ]);
  

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

/***/ "Ozth":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "clZi":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "djLK":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fHWF":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "rQCF":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "vOas":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "yF/l":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "zPlV":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[0,2,1,6,0,4,3,12,5,7]]]);