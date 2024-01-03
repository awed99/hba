_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[21],{

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

/***/ }),

/***/ "eefG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Services; });
/* harmony import */ var _home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("EZV4");
/* harmony import */ var _home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7RXq");
/* harmony import */ var _home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+4Qm");
/* harmony import */ var _home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fhWJ");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ngBj");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ZHh6");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("aIN1");
/* harmony import */ var _public_assets_vendor_isotope_layout_isotope_pkgd_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("IxrA");
/* harmony import */ var _public_assets_vendor_isotope_layout_isotope_pkgd_min_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_assets_vendor_isotope_layout_isotope_pkgd_min_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("LNOq");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);







 // const Isotope = React.lazy(() => import('../public/assets/vendor/isotope-layout/isotope.pkgd.min.js'))




function Services() {
  var execFunc = /*#__PURE__*/function () {
    var _ref = Object(_home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      var select, portfolioContainer, portfolioContainer2, portfolioContainer3;
      return _home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              /**
               * Easy selector helper function
               */
              select = function select(el) {
                var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                el = el.trim();

                if (all) {
                  var _document;

                  return Object(_home_aris5618_nodevenv_public_html_repository_hba_14_lib_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])((_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll(el));
                } else {
                  var _document2;

                  return (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector(el);
                }
              };

              portfolioContainer = select('.portfolio-container');

              if (portfolioContainer) {
                new _public_assets_vendor_isotope_layout_isotope_pkgd_min_js__WEBPACK_IMPORTED_MODULE_7___default.a(portfolioContainer, {
                  itemSelector: '.portfolio-item'
                });
              }

              portfolioContainer2 = select('.portfolio-container2');

              if (portfolioContainer2) {
                new _public_assets_vendor_isotope_layout_isotope_pkgd_min_js__WEBPACK_IMPORTED_MODULE_7___default.a(portfolioContainer2, {
                  itemSelector: '.portfolio-item2'
                });
              }

              portfolioContainer3 = select('.portfolio-container3');

              if (portfolioContainer3) {
                new _public_assets_vendor_isotope_layout_isotope_pkgd_min_js__WEBPACK_IMPORTED_MODULE_7___default.a(portfolioContainer3, {
                  itemSelector: '.portfolio-item3'
                });
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function execFunc() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    execFunc();
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("main", {
      id: "main",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("section", {
        id: "services",
        className: "services section-bg",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
          className: "container",
          "data-aos": "fade-up",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
            className: "section-title",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h2", {
              children: "Services"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("p", {
              children: "Check our Services"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
            className: "row",
            "data-aos": "fade-up",
            "data-aos-delay": "200",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
              className: "col-md-12",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                className: "icon-box",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                  className: "bi bi-box-fill"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("h4", {
                  children: ["A. General Supplier", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
                    className: "section-title",
                    style: {
                      marginTop: 20
                    },
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h2", {
                      children: "Conveyor System Parts"
                    })
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
                  className: "col-md-12",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
                    id: "portfolio",
                    className: "portfolio",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
                      className: "container",
                      "data-aos": "fade-up",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                        className: "row portfolio-container",
                        "data-aos": "fade-up",
                        "data-aos-delay": "200",
                        style: {
                          position: 'relative'
                        },
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image5.png",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Our Products"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image5.png",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Our Products",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "./services",
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image6.png",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Our Products"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image6.png",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Our Products",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "./services",
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image6.png",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Our Products"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image6.png",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Our Products",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "./services",
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image7.png",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Our Products"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image7.png",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Our Products",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "./services",
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image8.png",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Our Products"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image8.png",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Our Products",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "./services",
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image9.png",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Our Products"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image9.png",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Our Products",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "./services",
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image10.png",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Our Products"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image10.png",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Our Products",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "./services",
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image11.png",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Our Products"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image11.png",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Our Products",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "./services",
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image12.png",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Our Products"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image12.png",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Our Products",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "./services",
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image13.png",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Our Products"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image13.png",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Our Products",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "./services",
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image14.png",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Our Products"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image14.png",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Our Products",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "./services",
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image15.png",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Our Products"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image15.png",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Our Products",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "./services",
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image16.png",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Our Products"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image16.png",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Our Products",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "./services",
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        })]
                      })
                    })
                  })
                })]
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
              className: "col-md-12",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                className: "icon-box",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                  className: "bi bi-bus-front"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("h4", {
                  children: ["B. Transportation Service", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
                    className: "section-title",
                    style: {
                      marginTop: 20
                    },
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h2", {
                      children: "Transportations"
                    })
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
                  className: "col-md-12",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
                    id: "portfolio",
                    className: "portfolio",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
                      className: "container",
                      "data-aos": "fade-up",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                        className: "row portfolio-container portfolio-container2",
                        "data-aos": "fade-up",
                        "data-aos-delay": "200",
                        style: {
                          position: 'relative'
                        },
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item portfolio-item2 filter-app",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image44.png",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Transportation Service"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image44.png",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Transportation Service",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item portfolio-item2 filter-web",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image45.png",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Transportation Service"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image45.png",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Transportation Service",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item portfolio-item2 filter-app",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image46.png",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Transportation Service"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image46.png",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Transportation Service",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item portfolio-item2 filter-app",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image47.png",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Transportation Service"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image47.png",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Transportation Service",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        })]
                      })
                    })
                  })
                })]
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
              className: "col-md-12",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                className: "icon-box",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                  className: "bi bi-hammer"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("h4", {
                  children: ["C. Civil Construction", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
                    className: "section-title",
                    style: {
                      marginTop: 20
                    },
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h2", {
                      children: "Office Building"
                    })
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
                  className: "col-md-12",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
                    id: "portfolio",
                    className: "portfolio",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
                      className: "container",
                      "data-aos": "fade-up",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                        className: "row portfolio-container portfolio-container3",
                        "data-aos": "fade-up",
                        "data-aos-delay": "200",
                        style: {
                          position: 'relative'
                        },
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item portfolio-item3 filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image4.jpeg",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Our Products"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image4.jpeg",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Our Products",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "./services",
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item portfolio-item3 filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image6.jpeg",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Our Products"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image6.jpeg",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Our Products",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "./services",
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item portfolio-item3 filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image17.jpeg",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Our Products"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image17.jpeg",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Our Products",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "./services",
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item portfolio-item3 filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image24.jpeg",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Our Products"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image24.jpeg",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Our Products",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "./services",
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item portfolio-item3 filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image25.jpeg",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Our Products"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image25.jpeg",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Our Products",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "./services",
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item portfolio-item3 filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image30.jpeg",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Our Products"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image30.jpeg",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Our Products",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "./services",
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item portfolio-item3 filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image31.jpeg",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Our Products"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image31.jpeg",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Our Products",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "./services",
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item portfolio-item3 filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image34.jpeg",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Our Products"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image34.jpeg",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Our Products",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "./services",
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item portfolio-item3 filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image35.jpeg",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Our Products"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image35.jpeg",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Our Products",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "./services",
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item portfolio-item3 filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image38.jpeg",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Our Products"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image38.jpeg",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Our Products",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "./services",
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item portfolio-item3 filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image39.jpeg",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Our Products"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image39.jpeg",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Our Products",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "./services",
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item portfolio-item3 filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image40.jpeg",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Our Products"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image40.jpeg",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Our Products",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "./services",
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item portfolio-item3 filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
                            src: "assets/img/app/image41.jpeg",
                            className: "img-fluid",
                            alt: ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", {
                              children: "Our Products"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "assets/img/app/image41.jpeg",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link",
                              title: "Our Products",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-plus"
                              })
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                              href: "./services",
                              className: "details-link",
                              title: "More Details",
                              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
                                className: "bx bx-link"
                              })
                            })]
                          })]
                        })]
                      })
                    })
                  })
                })]
              })
            })]
          })]
        })
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_components_footer__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
      id: "preloader"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
      href: "#",
      className: "back-to-top d-flex align-items-center justify-content-center",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", {
        className: "bi bi-arrow-up-short"
      })
    })]
  });
}

/***/ }),

/***/ "jd3i":
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/services",
      function () {
        return __webpack_require__("eefG");
      }
    ]);
  

/***/ })

},[["jd3i",2,1,6,0,4,3,7]]]);