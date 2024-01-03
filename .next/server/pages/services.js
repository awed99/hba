module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_next/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/services.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../server/image-config":
/*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "../shared/lib/to-base-64":
/*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\kerjaan\\dewa\\hba\\components\\footer.js";




function Footer() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("footer", {
      id: "footer",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "footer-top",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "col-lg-3 col-md-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "footer-info",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
                  children: "PT Hidayat Bersaudara Abadi (HBA)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 15,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                    children: "- Jl. Masjid Al Mujahidin RT. 003 RW 01 No.100, Kel. Jatirahayu Kec. Pondok Gede, Kota Bekasi, 17414, Jabar"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 17,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 19,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                    children: "- Komplek Grand City, Forest ville K12 No. 23, Jl. MT Haryono Balikpapan, Kaltim"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 20,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 23,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("strong", {
                    children: "Phone:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 24,
                    columnNumber: 23
                  }, this), " 0812 1282 3030", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 24,
                    columnNumber: 61
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("strong", {
                    children: "Email:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 25,
                    columnNumber: 23
                  }, this), " admin@hidayatbersaudaraabadi.com", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 25,
                    columnNumber: 79
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  className: "social-links mt-3",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    href: "./",
                    className: "twitter",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                      className: "bx bxl-twitter"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 28,
                      columnNumber: 56
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 28,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    href: "./",
                    className: "facebook",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                      className: "bx bxl-facebook"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 29,
                      columnNumber: 57
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 29,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    href: "./",
                    className: "instagram",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                      className: "bx bxl-instagram"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 30,
                      columnNumber: 58
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 30,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    href: "./",
                    className: "google-plus",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                      className: "bx bxl-skype"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 31,
                      columnNumber: 60
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 31,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    href: "./",
                    className: "linkedin",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                      className: "bx bxl-linkedin"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 32,
                      columnNumber: 57
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 32,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "col-lg-2 col-md-6 footer-links",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
                children: "Useful Links"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                    className: "bx bx-chevron-right"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 25
                  }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    className: "scrollto",
                    href: "./",
                    children: "Home"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 65
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                    className: "bx bx-chevron-right"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 41,
                    columnNumber: 25
                  }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    className: "scrollto",
                    href: "./about-us",
                    children: "About us"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 41,
                    columnNumber: 65
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                    className: "bx bx-chevron-right"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 25
                  }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    className: "scrollto",
                    href: "./services",
                    children: "Services"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 65
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                    className: "bx bx-chevron-right"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 43,
                    columnNumber: 25
                  }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    className: "scrollto",
                    href: "./contact-us",
                    children: "Contact"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 43,
                    columnNumber: 65
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "col-lg-3 col-md-6 footer-links",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
                children: "Our Services"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                  onClick: () => window.location = '/services',
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                    className: "bx bx-chevron-right"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 73
                  }, this), " General Supplies"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                  onClick: () => window.location = '/services',
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                    className: "bx bx-chevron-right"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 73
                  }, this), " Transportation Service"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                  onClick: () => window.location = '/services',
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                    className: "bx bx-chevron-right"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 73
                  }, this), " Civil Construction"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                  onClick: () => window.location = '/services',
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                    className: "bx bx-chevron-right"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 73
                  }, this), " Safety/Enviro Material Supplies"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                  onClick: () => window.location = '/services',
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                    className: "bx bx-chevron-right"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 73
                  }, this), " Tools Supplies"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "col-lg-4 col-md-6 footer-newsletter",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
                children: "Our Newsletter"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                children: "Input your email to get our updates."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
                action: "",
                method: "post",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                  type: "email",
                  name: "email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                  type: "submit",
                  value: "Subscribe"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 56
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "copyright",
          children: ["\xA9 Copyright ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("strong", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
              children: "Rumah Teknologi"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 40
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 32
          }, this), ". All Rights Reserved ", new Date().getFullYear()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "credits",
          children: ["Designed by ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            href: "https://bootstrapmade.com/",
            children: "BootstrapMade"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 27
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 81
          }, this), "Script used by ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            href: "https://nextjs.org/",
            children: "NextJS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 30
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\kerjaan\\dewa\\hba\\components\\header.js";




function Header() {
  var _router$asPath, _router$asPath2, _router$asPath3, _router$asPath4, _router$asPath5, _router$asPath6, _router$asPath7;

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("header", {
      id: "header",
      className: "fixed-top ",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "container d-flex align-items-center justify-content-between",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
          className: "logo",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            href: "./",
            children: "HB ABADI"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 32
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("nav", {
          id: "navbar",
          className: "navbar",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                className: "nav-link scrollto " + ((router === null || router === void 0 ? void 0 : (_router$asPath = router.asPath) === null || _router$asPath === void 0 ? void 0 : _router$asPath.split("/")[1]) === '' ? 'active' : ''),
                href: "./",
                children: "Home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              className: "dropdown",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                className: "nav-link scrollto " + ((router === null || router === void 0 ? void 0 : (_router$asPath2 = router.asPath) === null || _router$asPath2 === void 0 ? void 0 : _router$asPath2.split("/")[1]) === 'about-us' || (router === null || router === void 0 ? void 0 : (_router$asPath3 = router.asPath) === null || _router$asPath3 === void 0 ? void 0 : _router$asPath3.split("/")[1]) === 'anti-bribery' ? 'active' : ''),
                onClick: () => false,
                style: {
                  cursor: 'pointer'
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                  children: "About"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 17,
                  columnNumber: 251
                }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                  className: "bi bi-chevron-down"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 17,
                  columnNumber: 270
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 40
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    className: "nav-link scrollto " + ((router === null || router === void 0 ? void 0 : (_router$asPath4 = router.asPath) === null || _router$asPath4 === void 0 ? void 0 : _router$asPath4.split("/")[1]) === 'about-us' ? 'active' : ''),
                    href: "./about-us",
                    children: "About Us"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 19,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 19,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    className: "nav-link scrollto " + ((router === null || router === void 0 ? void 0 : (_router$asPath5 = router.asPath) === null || _router$asPath5 === void 0 ? void 0 : _router$asPath5.split("/")[1]) === 'anti-bribery' ? 'active' : ''),
                    href: "./anti-bribery",
                    children: "Anti Bribery Policies"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 20,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                className: "nav-link scrollto " + ((router === null || router === void 0 ? void 0 : (_router$asPath6 = router.asPath) === null || _router$asPath6 === void 0 ? void 0 : _router$asPath6.split("/")[1]) === 'services' ? 'active' : ''),
                href: "./services",
                children: "Services"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                className: "nav-link scrollto " + ((router === null || router === void 0 ? void 0 : (_router$asPath7 = router.asPath) === null || _router$asPath7 === void 0 ? void 0 : _router$asPath7.split("/")[1]) === 'contact-us' ? 'active' : ''),
                href: "./contact-us",
                children: "Contact"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
            className: "bi bi-list mobile-nav-toggle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Image1;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

var _toBase64 = __webpack_require__(/*! ../shared/lib/to-base-64 */ "../shared/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../server/image-config */ "../server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _defineProperty(obj, key, value) {
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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const loadedImageURLs = new Set();

if (true) {
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load(_objectSpread({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, layout, placeholder, onLoadingComplete) {
  if (!img) {
    return;
  }

  const handleLoad = () => {
    if (!img.src.startsWith('data:')) {
      const p = 'decode' in img ? img.decode() : Promise.resolve();
      p.catch(() => {}).then(() => {
        if (placeholder === 'blur') {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        }

        loadedImageURLs.add(src);

        if (onLoadingComplete) {
          const {
            naturalWidth,
            naturalHeight
          } = img; // Pass back read-only primitive values but not the
          // underlying DOM element because it could be misused.

          onLoadingComplete({
            naturalWidth,
            naturalHeight
          });
        }

        if (true) {
          var ref;

          if ((ref = img.parentElement) === null || ref === void 0 ? void 0 : ref.parentElement) {
            const parent = getComputedStyle(img.parentElement.parentElement);

            if (layout === 'responsive' && parent.display === 'flex') {
              console.warn(`Image with src "${src}" may not render properly as a child of a flex container. Consider wrapping the image with a div to configure the width.`);
            } else if (layout === 'fill' && parent.position !== 'relative') {
              console.warn(`Image with src "${src}" may not render properly with a parent using position:"${parent.position}". Consider changing the parent style to position:"relative" with a width and height.`);
            }
          }
        }
      });
    }
  };

  if (img.complete) {
    // If the real image fails to load, this will still remove the placeholder.
    // This is the desired behavior for now, and will be revisited when error
    // handling is worked on for the image component itself.
    handleLoad();
  } else {
    img.onload = handleLoad;
  }
}

function Image1(_param) {
  var {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    lazyBoundary = '200px',
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    onLoadingComplete,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _param,
      all = _objectWithoutProperties(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]);

  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:') || src.startsWith('blob:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (false) {}

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (layout === 'fill' && (width || height)) {
      console.warn(`Image with src "${src}" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp'] // should match next-image-loader
        ;
        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }

    if ('ref' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.`);
    }

    if ('style' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "style" property. Please use the "className" property instead.`);
    }

    const rand = Math.floor(Math.random() * 1000) + 100;

    if (!unoptimized && !loader({
      src,
      width: rand,
      quality: 75
    }).includes(rand.toString())) {
      console.warn(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
    }
  }

  const [setRef, isIntersected] = (0, _useIntersection).useIntersection({
    rootMargin: lazyBoundary,
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };
  const blurStyle = placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: objectFit || 'cover',
    backgroundImage: `url("${blurDataURL}")`,
    backgroundPosition: objectPosition || '0% 0%'
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  let srcString = src;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: `data:image/svg+xml;base64,${(0, _toBase64).toBase64(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": layout,
    className: className,
    ref: img => {
      setRef(img);
      handleLoading(img, srcString, layout, placeholder, onLoadingComplete);
    },
    style: _objectSpread({}, imgStyle, blurStyle)
  })), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    "data-nimg": layout,
    style: imgStyle,
    className: className,
    loading: loading || 'lazy'
  }))), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
    // @ts-ignore: imagesrcset is not yet in the link element type.
    imagesrcset: imgAttributes.srcSet,
    // @ts-ignore: imagesizes is not yet in the link element type.
    imagesizes: imgAttributes.sizes
  })) : null);
}

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  const url = new URL(`${root}${normalizeSrc(src)}`);
  const params = url.searchParams;
  params.set('auto', params.get('auto') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function customLoader({
  src
}) {
  throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if ( true && !configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./pages/services.js":
/*!***************************!*\
  !*** ./pages/services.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Services; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _public_assets_vendor_isotope_layout_isotope_pkgd_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/assets/vendor/isotope-layout/isotope.pkgd.min.js */ "./public/assets/vendor/isotope-layout/isotope.pkgd.min.js");
/* harmony import */ var _public_assets_vendor_isotope_layout_isotope_pkgd_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_vendor_isotope_layout_isotope_pkgd_min_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\kerjaan\\dewa\\hba\\pages\\services.js";




 // const Isotope = React.lazy(() => import('../public/assets/vendor/isotope-layout/isotope.pkgd.min.js'))



function Services() {
  const execFunc = async () => {
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim();

      if (all) {
        var _document;

        return [...((_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll(el))];
      } else {
        var _document2;

        return (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector(el);
      }
    };

    let portfolioContainer = select('.portfolio-container');

    if (portfolioContainer) {
      new _public_assets_vendor_isotope_layout_isotope_pkgd_min_js__WEBPACK_IMPORTED_MODULE_4___default.a(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });
    }

    let portfolioContainer2 = select('.portfolio-container2');

    if (portfolioContainer2) {
      new _public_assets_vendor_isotope_layout_isotope_pkgd_min_js__WEBPACK_IMPORTED_MODULE_4___default.a(portfolioContainer2, {
        itemSelector: '.portfolio-item2'
      });
    }

    let portfolioContainer3 = select('.portfolio-container3');

    if (portfolioContainer3) {
      new _public_assets_vendor_isotope_layout_isotope_pkgd_min_js__WEBPACK_IMPORTED_MODULE_4___default.a(portfolioContainer3, {
        itemSelector: '.portfolio-item3'
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    execFunc();
  });
  const _supplies = [{
    img: 'image5.png',
    title: 'Track Link'
  }, {
    img: 'image4.jpeg',
    title: 'Track Group Assembly'
  }, {
    img: 'image6.jpeg',
    title: 'Track Roller & Idler'
  }, {
    img: 'image8.png',
    title: 'Segmen & Sprocket'
  }, {
    img: 'image9.png',
    title: 'Forging line'
  }, {
    img: 'image10.png',
    title: 'Quenching and Tempering line'
  }, {
    img: 'image11.png',
    title: 'Induction Hardening line'
  }, {
    img: 'image12.png',
    title: 'Machining line'
  }, {
    img: 'image13.png',
    title: 'Assembly line'
  }, {
    img: 'image14.png',
    title: 'Major Machinery / Equipment'
  }, {
    img: 'image15.png',
    title: 'Gear Set'
  }, {
    img: 'image16.png',
    title: 'Mold Dev : Tooth Point'
  }, {
    img: 'image17.jpeg',
    title: 'Gland Packing'
  }, {
    img: 'image19.jpeg',
    title: 'Free Roller Conveyor'
  }, {
    img: 'image21.jpeg',
    title: 'Drive Roller Conveyor'
  }, {
    img: 'image23.jpeg',
    title: 'Accumulation Roller Conveyor'
  }, {
    img: 'image24.jpeg',
    title: 'Hose'
  }, {
    img: 'image23.png',
    title: 'HDPE Pipe'
  }, {
    img: 'image33.jpeg',
    title: 'Coupling'
  }, {
    img: 'image25.jpeg',
    title: 'Flange'
  }, {
    img: 'image35.jpeg',
    title: 'Coupling'
  }, {
    img: 'image32.jpeg',
    title: 'Safety Cabinet'
  }, {
    img: 'image28.png',
    title: 'Hydrant Coupling'
  }, {
    img: 'image29.png',
    title: 'Box APD'
  }, {
    img: 'picture2.jpg',
    title: 'Industrial Pump'
  }, {
    img: 'image42.png',
    title: 'Hydrant Hose'
  }, {
    img: 'image39.jpeg',
    title: 'PVC Pipe'
  }, {
    img: 'image26.jpeg',
    title: 'Industrial Scale'
  }, {
    img: 'image32.jpeg',
    title: 'Chemical Spray'
  }, {
    img: 'image36.jpeg',
    title: 'Packing'
  }, {
    img: 'image37.jpeg',
    title: 'Auto Travo'
  }, {
    img: 'image38.jpeg',
    title: 'Electrical'
  }, {
    img: 'image40.jpeg',
    title: 'Rachet Binder W/Hook'
  }, {
    img: 'image41.jpeg',
    title: 'Lever Hoist Chain Block'
  }, {
    img: 'image44.png',
    title: 'Spare Part Dump Truck'
  }, {
    img: 'image45.png',
    title: 'Spare Part Bull Dozer'
  }, {
    img: 'image46.png',
    title: 'Spare Part Wheel Loader'
  }, {
    img: 'image47.png',
    title: 'Spare Part Motor Grader'
  }, {
    img: 'picture3.jpg',
    title: 'Construction Materials'
  }, {
    img: 'picture4.jpg',
    title: 'Building Materials'
  }, {
    img: 'picture5.jpg',
    title: 'Road Maintenance Materials'
  }, {
    img: 'image22.jpeg',
    title: 'Transportation support services'
  }, {
    img: 'image27.png',
    title: 'Transportation support services'
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("main", {
      id: "main",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 15
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("section", {
        id: "services",
        className: "services section-bg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "container",
          "data-aos": "fade-up",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "section-title",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
              children: "Services"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
              children: "Check our Services"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "row",
            "data-aos": "fade-up",
            "data-aos-delay": "200",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-md-12",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "icon-box",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                  className: "bi bi-people-fill"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h4", {
                  children: ["Our Team", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                    className: "section-title",
                    style: {
                      marginTop: 20
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
                      children: "Our Team on Working"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 118,
                      columnNumber: 27
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 117,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "col-md-12",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                    id: "portfolio",
                    className: "portfolio",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                      className: "container",
                      "data-aos": "fade-up",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                        className: "row portfolio-container",
                        "data-aos": "fade-up",
                        "data-aos-delay": "200",
                        style: {
                          position: 'relative'
                        },
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                            src: "assets/img/app/on-goal.png",
                            className: "img-fluid",
                            alt: ""
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 129,
                            columnNumber: 29
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h4", {
                              children: "Team Work"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 131,
                              columnNumber: 31
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                              href: "assets/img/app/on-goal.png",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link details-link",
                              title: "Team Work",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                                className: "bx bx-plus"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 132,
                                columnNumber: 175
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 132,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 130,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 128,
                          columnNumber: 27
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                            src: "assets/img/app/team-work.png",
                            className: "img-fluid",
                            alt: ""
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 137,
                            columnNumber: 29
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h4", {
                              children: "One Goal"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 139,
                              columnNumber: 31
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                              href: "assets/img/app/team-work.png",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link details-link",
                              title: "One Goal",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                                className: "bx bx-plus"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 140,
                                columnNumber: 176
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 140,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 138,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 136,
                          columnNumber: 27
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item filter-product",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                            src: "assets/img/app/partner.png",
                            className: "img-fluid",
                            alt: ""
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 145,
                            columnNumber: 29
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h4", {
                              children: "Business Partner Services"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 147,
                              columnNumber: 31
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                              href: "assets/img/app/partner.png",
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link details-link",
                              title: "Business Partner Services",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                                className: "bx bx-plus"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 148,
                                columnNumber: 191
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 148,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 146,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 144,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 126,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 124,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 123,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-md-12",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "icon-box",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                  className: "bi bi-box-fill"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 163,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h4", {
                  children: ["B. General Material Suppliers", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                    className: "section-title",
                    style: {
                      marginTop: 20
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
                      children: "We also support General Material Supplies"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 166,
                      columnNumber: 27
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 165,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "col-md-12",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                    id: "portfolio",
                    className: "portfolio",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                      className: "container",
                      "data-aos": "fade-up",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                        className: "row portfolio-container portfolio-container2",
                        "data-aos": "fade-up",
                        "data-aos-delay": "200",
                        style: {
                          position: 'relative'
                        },
                        children: _supplies === null || _supplies === void 0 ? void 0 : _supplies.map(data => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                          className: "col-lg-4 col-md-6 portfolio-item portfolio-item2 filter-app",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                            src: "assets/img/app/" + (data === null || data === void 0 ? void 0 : data.img),
                            className: "img-fluid",
                            alt: ""
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 179,
                            columnNumber: 33
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                            className: "portfolio-info",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h4", {
                              children: data === null || data === void 0 ? void 0 : data.title
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 181,
                              columnNumber: 35
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                              href: "assets/img/app/" + (data === null || data === void 0 ? void 0 : data.img),
                              "data-gallery": "portfolioGallery",
                              className: "portfolio-lightbox preview-link details-link",
                              title: data === null || data === void 0 ? void 0 : data.title,
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                                className: "bx bx-plus"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 182,
                                columnNumber: 184
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 182,
                              columnNumber: 35
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 180,
                            columnNumber: 33
                          }, this)]
                        }, data === null || data === void 0 ? void 0 : data.title, true, {
                          fileName: _jsxFileName,
                          lineNumber: 178,
                          columnNumber: 31
                        }, this))
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 174,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 172,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 171,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      id: "preloader"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
      href: "#",
      className: "back-to-top d-flex align-items-center justify-content-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
        className: "bi bi-arrow-up-short"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 92
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./public/assets/vendor/isotope-layout/isotope.pkgd.min.js":
/*!*****************************************************************!*\
  !*** ./public/assets/vendor/isotope-layout/isotope.pkgd.min.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
if (false) {}

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvaW1hZ2UudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy92ZW5kb3IvaXNvdG9wZS1sYXlvdXQvaXNvdG9wZS5wa2dkLm1pbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiRm9vdGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwid2luZG93IiwibG9jYXRpb24iLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJIZWFkZXIiLCJhc1BhdGgiLCJzcGxpdCIsImN1cnNvciIsIlNlcnZpY2VzIiwiZXhlY0Z1bmMiLCJzZWxlY3QiLCJlbCIsImFsbCIsInRyaW0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJxdWVyeVNlbGVjdG9yIiwicG9ydGZvbGlvQ29udGFpbmVyIiwiSXNvdG9wZSIsIml0ZW1TZWxlY3RvciIsInBvcnRmb2xpb0NvbnRhaW5lcjIiLCJwb3J0Zm9saW9Db250YWluZXIzIiwidXNlRWZmZWN0IiwiX3N1cHBsaWVzIiwiaW1nIiwidGl0bGUiLCJtYXJnaW5Ub3AiLCJwb3NpdGlvbiIsIm1hcCIsImRhdGEiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSw2RDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7O0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUM3QixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsc0JBQVE7QUFBQSwyQkFDSjtBQUFRLFFBQUUsRUFBQyxRQUFYO0FBQUEsOEJBQ0U7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Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvc2VydmljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9fbmV4dC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9zZXJ2aWNlcy5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgPGZvb3RlciBpZD1cImZvb3RlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItdG9wXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5QVCBIaWRheWF0IEJlcnNhdWRhcmEgQWJhZGkgKEhCQSk8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLSBKbC4gTWFzamlkIEFsIE11amFoaWRpbiBSVC4gMDAzIFJXIDAxIE5vLjEwMCwgS2VsLiBKYXRpcmFoYXl1IEtlYy4gUG9uZG9rIEdlZGUsIEtvdGEgQmVrYXNpLCAxNzQxNCwgSmFiYXJcclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0gS29tcGxlayBHcmFuZCBDaXR5LCBGb3Jlc3QgdmlsbGUgSzEyIE5vLiAyMywgSmwuIE1UIEhhcnlvbm8gQmFsaWtwYXBhbiwgS2FsdGltXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5QaG9uZTo8L3N0cm9uZz4gMDgxMiAxMjgyIDMwMzA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5FbWFpbDo8L3N0cm9uZz4gYWRtaW5AaGlkYXlhdGJlcnNhdWRhcmFhYmFkaS5jb208YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWxpbmtzIG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIuL1wiIGNsYXNzTmFtZT1cInR3aXR0ZXJcIj48aSBjbGFzc05hbWU9XCJieCBieGwtdHdpdHRlclwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLi9cIiBjbGFzc05hbWU9XCJmYWNlYm9va1wiPjxpIGNsYXNzTmFtZT1cImJ4IGJ4bC1mYWNlYm9va1wiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLi9cIiBjbGFzc05hbWU9XCJpbnN0YWdyYW1cIj48aSBjbGFzc05hbWU9XCJieCBieGwtaW5zdGFncmFtXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIuL1wiIGNsYXNzTmFtZT1cImdvb2dsZS1wbHVzXCI+PGkgY2xhc3NOYW1lPVwiYnggYnhsLXNreXBlXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIuL1wiIGNsYXNzTmFtZT1cImxpbmtlZGluXCI+PGkgY2xhc3NOYW1lPVwiYnggYnhsLWxpbmtlZGluXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgY29sLW1kLTYgZm9vdGVyLWxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoND5Vc2VmdWwgTGlua3M8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImJ4IGJ4LWNoZXZyb24tcmlnaHRcIj48L2k+IDxhIGNsYXNzTmFtZT0nc2Nyb2xsdG8nIGhyZWY9XCIuL1wiPkhvbWU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGkgY2xhc3NOYW1lPVwiYnggYngtY2hldnJvbi1yaWdodFwiPjwvaT4gPGEgY2xhc3NOYW1lPSdzY3JvbGx0bycgaHJlZj1cIi4vYWJvdXQtdXNcIj5BYm91dCB1czwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48aSBjbGFzc05hbWU9XCJieCBieC1jaGV2cm9uLXJpZ2h0XCI+PC9pPiA8YSBjbGFzc05hbWU9J3Njcm9sbHRvJyBocmVmPVwiLi9zZXJ2aWNlc1wiPlNlcnZpY2VzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImJ4IGJ4LWNoZXZyb24tcmlnaHRcIj48L2k+IDxhIGNsYXNzTmFtZT0nc2Nyb2xsdG8nIGhyZWY9XCIuL2NvbnRhY3QtdXNcIj5Db250YWN0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTYgZm9vdGVyLWxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoND5PdXIgU2VydmljZXM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbiA9ICgnL3NlcnZpY2VzJyl9PjxpIGNsYXNzTmFtZT1cImJ4IGJ4LWNoZXZyb24tcmlnaHRcIj48L2k+IEdlbmVyYWwgU3VwcGxpZXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24gPSAoJy9zZXJ2aWNlcycpfT48aSBjbGFzc05hbWU9XCJieCBieC1jaGV2cm9uLXJpZ2h0XCI+PC9pPiBUcmFuc3BvcnRhdGlvbiBTZXJ2aWNlPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uID0gKCcvc2VydmljZXMnKX0+PGkgY2xhc3NOYW1lPVwiYnggYngtY2hldnJvbi1yaWdodFwiPjwvaT4gQ2l2aWwgQ29uc3RydWN0aW9uPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uID0gKCcvc2VydmljZXMnKX0+PGkgY2xhc3NOYW1lPVwiYnggYngtY2hldnJvbi1yaWdodFwiPjwvaT4gU2FmZXR5L0VudmlybyBNYXRlcmlhbCBTdXBwbGllczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbiA9ICgnL3NlcnZpY2VzJyl9PjxpIGNsYXNzTmFtZT1cImJ4IGJ4LWNoZXZyb24tcmlnaHRcIj48L2k+IFRvb2xzIFN1cHBsaWVzPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtNiBmb290ZXItbmV3c2xldHRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDQ+T3VyIE5ld3NsZXR0ZXI8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8cD5JbnB1dCB5b3VyIGVtYWlsIHRvIGdldCBvdXIgdXBkYXRlcy48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgLz48aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3Vic2NyaWJlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlyaWdodFwiPlxyXG4gICAgICAgICAgICAgICZjb3B5OyBDb3B5cmlnaHQgPHN0cm9uZz48c3Bhbj5SdW1haCBUZWtub2xvZ2k8L3NwYW4+PC9zdHJvbmc+LiBBbGwgUmlnaHRzIFJlc2VydmVkIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWRpdHNcIj5cclxuICAgICAgICAgICAgICBEZXNpZ25lZCBieSA8YSBocmVmPVwiaHR0cHM6Ly9ib290c3RyYXBtYWRlLmNvbS9cIj5Cb290c3RyYXBNYWRlPC9hPjxici8+XHJcbiAgICAgICAgICAgICAgU2NyaXB0IHVzZWQgYnkgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9cIj5OZXh0SlM8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICA8Lz4pXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICAgIDxoZWFkZXIgaWQ9XCJoZWFkZXJcIiBjbGFzc05hbWU9XCJmaXhlZC10b3AgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJsb2dvXCI+PGEgaHJlZj1cIi4vXCI+SEIgQUJBREk8L2E+PC9oMT5cclxuICAgICAgICAgIHsvKiA8YSBocmVmPVwiLi9cIiBjbGFzc05hbWU9XCJsb2dvXCI+PGltZyBzcmM9XCJhc3NldHMvaW1nL2hiYS5wbmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPjwvYT4gKi99XHJcblxyXG4gICAgICAgICAgPG5hdiBpZD1cIm5hdmJhclwiIGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT17XCJuYXYtbGluayBzY3JvbGx0byBcIiArICgocm91dGVyPy5hc1BhdGg/LnNwbGl0KFwiL1wiKVsxXSA9PT0gJycgPyAnYWN0aXZlJyA6ICcnKSl9IGhyZWY9XCIuL1wiPkhvbWU8L2E+PC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdkcm9wZG93bic+PGEgY2xhc3NOYW1lPXtcIm5hdi1saW5rIHNjcm9sbHRvIFwiICsgKCgoKHJvdXRlcj8uYXNQYXRoPy5zcGxpdChcIi9cIilbMV0gPT09ICdhYm91dC11cycpIHx8IChyb3V0ZXI/LmFzUGF0aD8uc3BsaXQoXCIvXCIpWzFdID09PSAnYW50aS1icmliZXJ5JykpID8gJ2FjdGl2ZScgOiAnJykpfSBvbkNsaWNrPXsoKSA9PiBmYWxzZX0gc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319PjxzcGFuPkFib3V0PC9zcGFuPiA8aSBjbGFzc05hbWU9XCJiaSBiaS1jaGV2cm9uLWRvd25cIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPXtcIm5hdi1saW5rIHNjcm9sbHRvIFwiICsgKChyb3V0ZXI/LmFzUGF0aD8uc3BsaXQoXCIvXCIpWzFdID09PSAnYWJvdXQtdXMnID8gJ2FjdGl2ZScgOiAnJykpfSBocmVmPVwiLi9hYm91dC11c1wiPkFib3V0IFVzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9e1wibmF2LWxpbmsgc2Nyb2xsdG8gXCIgKyAoKHJvdXRlcj8uYXNQYXRoPy5zcGxpdChcIi9cIilbMV0gPT09ICdhbnRpLWJyaWJlcnknID8gJ2FjdGl2ZScgOiAnJykpfSBocmVmPVwiLi9hbnRpLWJyaWJlcnlcIj5BbnRpIEJyaWJlcnkgUG9saWNpZXM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICB7LyogPGxpPjxhIGNsYXNzTmFtZT17XCJuYXYtbGluayBzY3JvbGx0byBcIiArICgocm91dGVyPy5hc1BhdGg/LnNwbGl0KFwiL1wiKVsxXSA9PT0gJ2Fib3V0LXVzJyA/ICdhY3RpdmUnIDogJycpKX0gaHJlZj1cIi4vYWJvdXQtdXNcIj5BYm91dDwvYT48L2xpPiAqL31cclxuICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPXtcIm5hdi1saW5rIHNjcm9sbHRvIFwiICsgKChyb3V0ZXI/LmFzUGF0aD8uc3BsaXQoXCIvXCIpWzFdID09PSAnc2VydmljZXMnID8gJ2FjdGl2ZScgOiAnJykpfSBocmVmPVwiLi9zZXJ2aWNlc1wiPlNlcnZpY2VzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT17XCJuYXYtbGluayBzY3JvbGx0byBcIiArICgocm91dGVyPy5hc1BhdGg/LnNwbGl0KFwiL1wiKVsxXSA9PT0gJ2NvbnRhY3QtdXMnID8gJ2FjdGl2ZScgOiAnJykpfSBocmVmPVwiLi9jb250YWN0LXVzXCI+Q29udGFjdDwvYT48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJiaSBiaS1saXN0IG1vYmlsZS1uYXYtdG9nZ2xlXCI+PC9pPlxyXG4gICAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgIDwvPilcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJy4uL3NoYXJlZC9saWIvaGVhZCdcbmltcG9ydCB7IHRvQmFzZTY0IH0gZnJvbSAnLi4vc2hhcmVkL2xpYi90by1iYXNlLTY0J1xuaW1wb3J0IHtcbiAgSW1hZ2VDb25maWcsXG4gIGltYWdlQ29uZmlnRGVmYXVsdCxcbiAgTG9hZGVyVmFsdWUsXG4gIFZBTElEX0xPQURFUlMsXG59IGZyb20gJy4uL3NlcnZlci9pbWFnZS1jb25maWcnXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbmNvbnN0IGxvYWRlZEltYWdlVVJMcyA9IG5ldyBTZXQ8c3RyaW5nPigpXG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICA7KGdsb2JhbCBhcyBhbnkpLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWVcbn1cblxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbJ2xhenknLCAnZWFnZXInLCB1bmRlZmluZWRdIGFzIGNvbnN0XG50eXBlIExvYWRpbmdWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MT0FESU5HX1ZBTFVFU1tudW1iZXJdXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyID0gKHJlc29sdmVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlclByb3BzID0ge1xuICBzcmM6IHN0cmluZ1xuICB3aWR0aDogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbn1cblxudHlwZSBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyA9IEltYWdlTG9hZGVyUHJvcHMgJiB7IHJvb3Q6IHN0cmluZyB9XG5cbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwPFxuICBMb2FkZXJWYWx1ZSxcbiAgKHByb3BzOiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG4+KFtcbiAgWydkZWZhdWx0JywgZGVmYXVsdExvYWRlcl0sXG4gIFsnaW1naXgnLCBpbWdpeExvYWRlcl0sXG4gIFsnY2xvdWRpbmFyeScsIGNsb3VkaW5hcnlMb2FkZXJdLFxuICBbJ2FrYW1haScsIGFrYW1haUxvYWRlcl0sXG4gIFsnY3VzdG9tJywgY3VzdG9tTG9hZGVyXSxcbl0pXG5cbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICdmaWxsJyxcbiAgJ2ZpeGVkJyxcbiAgJ2ludHJpbnNpYycsXG4gICdyZXNwb25zaXZlJyxcbiAgdW5kZWZpbmVkLFxuXSBhcyBjb25zdFxudHlwZSBMYXlvdXRWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MQVlPVVRfVkFMVUVTW251bWJlcl1cblxudHlwZSBQbGFjZWhvbGRlclZhbHVlID0gJ2JsdXInIHwgJ2VtcHR5J1xuXG50eXBlIE9uTG9hZGluZ0NvbXBsZXRlID0gKHJlc3VsdDoge1xuICBuYXR1cmFsV2lkdGg6IG51bWJlclxuICBuYXR1cmFsSGVpZ2h0OiBudW1iZXJcbn0pID0+IHZvaWRcblxudHlwZSBJbWdFbGVtZW50U3R5bGUgPSBOb25OdWxsYWJsZTxKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddWydzdHlsZSddPlxuXG5pbnRlcmZhY2UgU3RhdGljUmVxdWlyZSB7XG4gIGRlZmF1bHQ6IFN0YXRpY0ltYWdlRGF0YVxufVxuXG50eXBlIFN0YXRpY0ltcG9ydCA9IFN0YXRpY1JlcXVpcmUgfCBTdGF0aWNJbWFnZURhdGFcblxuZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKFxuICBzcmM6IFN0YXRpY1JlcXVpcmUgfCBTdGF0aWNJbWFnZURhdGFcbik6IHNyYyBpcyBTdGF0aWNSZXF1aXJlIHtcbiAgcmV0dXJuIChzcmMgYXMgU3RhdGljUmVxdWlyZSkuZGVmYXVsdCAhPT0gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGlzU3RhdGljSW1hZ2VEYXRhKFxuICBzcmM6IFN0YXRpY1JlcXVpcmUgfCBTdGF0aWNJbWFnZURhdGFcbik6IHNyYyBpcyBTdGF0aWNJbWFnZURhdGEge1xuICByZXR1cm4gKHNyYyBhcyBTdGF0aWNJbWFnZURhdGEpLnNyYyAhPT0gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYzogc3RyaW5nIHwgU3RhdGljSW1wb3J0KTogc3JjIGlzIFN0YXRpY0ltcG9ydCB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHNyYyA9PT0gJ29iamVjdCcgJiZcbiAgICAoaXNTdGF0aWNSZXF1aXJlKHNyYyBhcyBTdGF0aWNJbXBvcnQpIHx8XG4gICAgICBpc1N0YXRpY0ltYWdlRGF0YShzcmMgYXMgU3RhdGljSW1wb3J0KSlcbiAgKVxufVxuXG5leHBvcnQgdHlwZSBJbWFnZVByb3BzID0gT21pdDxcbiAgSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXSxcbiAgJ3NyYycgfCAnc3JjU2V0JyB8ICdyZWYnIHwgJ3dpZHRoJyB8ICdoZWlnaHQnIHwgJ2xvYWRpbmcnIHwgJ3N0eWxlJ1xuPiAmIHtcbiAgc3JjOiBzdHJpbmcgfCBTdGF0aWNJbXBvcnRcbiAgd2lkdGg/OiBudW1iZXIgfCBzdHJpbmdcbiAgaGVpZ2h0PzogbnVtYmVyIHwgc3RyaW5nXG4gIGxheW91dD86IExheW91dFZhbHVlXG4gIGxvYWRlcj86IEltYWdlTG9hZGVyXG4gIHF1YWxpdHk/OiBudW1iZXIgfCBzdHJpbmdcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvYWRpbmc/OiBMb2FkaW5nVmFsdWVcbiAgbGF6eUJvdW5kYXJ5Pzogc3RyaW5nXG4gIHBsYWNlaG9sZGVyPzogUGxhY2Vob2xkZXJWYWx1ZVxuICBibHVyRGF0YVVSTD86IHN0cmluZ1xuICB1bm9wdGltaXplZD86IGJvb2xlYW5cbiAgb2JqZWN0Rml0PzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RGaXQnXVxuICBvYmplY3RQb3NpdGlvbj86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0UG9zaXRpb24nXVxuICBvbkxvYWRpbmdDb21wbGV0ZT86IE9uTG9hZGluZ0NvbXBsZXRlXG59XG5cbmNvbnN0IHtcbiAgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzLFxuICBpbWFnZVNpemVzOiBjb25maWdJbWFnZVNpemVzLFxuICBsb2FkZXI6IGNvbmZpZ0xvYWRlcixcbiAgcGF0aDogY29uZmlnUGF0aCxcbiAgZG9tYWluczogY29uZmlnRG9tYWlucyxcbn0gPSAocHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgYXMgYW55IGFzIEltYWdlQ29uZmlnKSB8fCBpbWFnZUNvbmZpZ0RlZmF1bHRcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbLi4uY29uZmlnRGV2aWNlU2l6ZXMsIC4uLmNvbmZpZ0ltYWdlU2l6ZXNdXG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcbmFsbFNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuXG5mdW5jdGlvbiBnZXRXaWR0aHMoXG4gIHdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQsXG4gIGxheW91dDogTGF5b3V0VmFsdWUsXG4gIHNpemVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbik6IHsgd2lkdGhzOiBudW1iZXJbXTsga2luZDogJ3cnIHwgJ3gnIH0ge1xuICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgIC8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG4gICAgY29uc3Qgdmlld3BvcnRXaWR0aFJlID0gLyhefFxccykoMT9cXGQ/XFxkKXZ3L2dcbiAgICBjb25zdCBwZXJjZW50U2l6ZXMgPSBbXVxuICAgIGZvciAobGV0IG1hdGNoOyAobWF0Y2ggPSB2aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcykpOyBtYXRjaCkge1xuICAgICAgcGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKVxuICAgIH1cbiAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxXG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcihcbiAgICAgICAgICAocykgPT4gcyA+PSBjb25maWdEZXZpY2VTaXplc1swXSAqIHNtYWxsZXN0UmF0aW9cbiAgICAgICAgKSxcbiAgICAgICAga2luZDogJ3cnLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyB3aWR0aHM6IGFsbFNpemVzLCBraW5kOiAndycgfVxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8XG4gICAgbGF5b3V0ID09PSAnZmlsbCcgfHxcbiAgICBsYXlvdXQgPT09ICdyZXNwb25zaXZlJ1xuICApIHtcbiAgICByZXR1cm4geyB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLCBraW5kOiAndycgfVxuICB9XG5cbiAgY29uc3Qgd2lkdGhzID0gW1xuICAgIC4uLm5ldyBTZXQoXG4gICAgICAvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgIC8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4gICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4gICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICBbd2lkdGgsIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi9dLm1hcChcbiAgICAgICAgKHcpID0+IGFsbFNpemVzLmZpbmQoKHApID0+IHAgPj0gdykgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgIClcbiAgICApLFxuICBdXG4gIHJldHVybiB7IHdpZHRocywga2luZDogJ3gnIH1cbn1cblxudHlwZSBHZW5JbWdBdHRyc0RhdGEgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHVub3B0aW1pemVkOiBib29sZWFuXG4gIGxheW91dDogTGF5b3V0VmFsdWVcbiAgbG9hZGVyOiBJbWFnZUxvYWRlclxuICB3aWR0aD86IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG4gIHNpemVzPzogc3RyaW5nXG59XG5cbnR5cGUgR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHNyY1NldDogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIHNpemVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7XG4gIHNyYyxcbiAgdW5vcHRpbWl6ZWQsXG4gIGxheW91dCxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG4gIHNpemVzLFxuICBsb2FkZXIsXG59OiBHZW5JbWdBdHRyc0RhdGEpOiBHZW5JbWdBdHRyc1Jlc3VsdCB7XG4gIGlmICh1bm9wdGltaXplZCkge1xuICAgIHJldHVybiB7IHNyYywgc3JjU2V0OiB1bmRlZmluZWQsIHNpemVzOiB1bmRlZmluZWQgfVxuICB9XG5cbiAgY29uc3QgeyB3aWR0aHMsIGtpbmQgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcylcbiAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxXG5cbiAgcmV0dXJuIHtcbiAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICBzcmNTZXQ6IHdpZHRoc1xuICAgICAgLm1hcChcbiAgICAgICAgKHcsIGkpID0+XG4gICAgICAgICAgYCR7bG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogdyB9KX0gJHtcbiAgICAgICAgICAgIGtpbmQgPT09ICd3JyA/IHcgOiBpICsgMVxuICAgICAgICAgIH0ke2tpbmR9YFxuICAgICAgKVxuICAgICAgLmpvaW4oJywgJyksXG5cbiAgICAvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuICAgIC8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbiAgICAvLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4gICAgLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbiAgICAvLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbiAgICAvLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbiAgICBzcmM6IGxvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHdpZHRoc1tsYXN0XSB9KSxcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRJbnQoeDogdW5rbm93bik6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4geFxuICB9XG4gIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpIHtcbiAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcilcbiAgaWYgKGxvYWQpIHtcbiAgICByZXR1cm4gbG9hZCh7IHJvb3Q6IGNvbmZpZ1BhdGgsIC4uLmxvYWRlclByb3BzIH0pXG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtWQUxJRF9MT0FERVJTLmpvaW4oXG4gICAgICAnLCAnXG4gICAgKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gXG4gIClcbn1cblxuLy8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIGhhbmRsZUxvYWRpbmcoXG4gIGltZzogSFRNTEltYWdlRWxlbWVudCB8IG51bGwsXG4gIHNyYzogc3RyaW5nLFxuICBsYXlvdXQ6IExheW91dFZhbHVlLFxuICBwbGFjZWhvbGRlcjogUGxhY2Vob2xkZXJWYWx1ZSxcbiAgb25Mb2FkaW5nQ29tcGxldGU/OiBPbkxvYWRpbmdDb21wbGV0ZVxuKSB7XG4gIGlmICghaW1nKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgaGFuZGxlTG9hZCA9ICgpID0+IHtcbiAgICBpZiAoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgY29uc3QgcCA9ICdkZWNvZGUnIGluIGltZyA/IGltZy5kZWNvZGUoKSA6IFByb21pc2UucmVzb2x2ZSgpXG4gICAgICBwLmNhdGNoKCgpID0+IHt9KS50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICBpbWcuc3R5bGUuZmlsdGVyID0gJ25vbmUnXG4gICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ25vbmUnXG4gICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJ1xuICAgICAgICB9XG4gICAgICAgIGxvYWRlZEltYWdlVVJMcy5hZGQoc3JjKVxuICAgICAgICBpZiAob25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICAgICAgICBjb25zdCB7IG5hdHVyYWxXaWR0aCwgbmF0dXJhbEhlaWdodCB9ID0gaW1nXG4gICAgICAgICAgLy8gUGFzcyBiYWNrIHJlYWQtb25seSBwcmltaXRpdmUgdmFsdWVzIGJ1dCBub3QgdGhlXG4gICAgICAgICAgLy8gdW5kZXJseWluZyBET00gZWxlbWVudCBiZWNhdXNlIGl0IGNvdWxkIGJlIG1pc3VzZWQuXG4gICAgICAgICAgb25Mb2FkaW5nQ29tcGxldGUoeyBuYXR1cmFsV2lkdGgsIG5hdHVyYWxIZWlnaHQgfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGlmIChpbWcucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZ2V0Q29tcHV0ZWRTdHlsZShpbWcucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KVxuICAgICAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnICYmIHBhcmVudC5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IGFzIGEgY2hpbGQgb2YgYSBmbGV4IGNvbnRhaW5lci4gQ29uc2lkZXIgd3JhcHBpbmcgdGhlIGltYWdlIHdpdGggYSBkaXYgdG8gY29uZmlndXJlIHRoZSB3aWR0aC5gXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgcGFyZW50LnBvc2l0aW9uICE9PSAncmVsYXRpdmUnKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtYXkgbm90IHJlbmRlciBwcm9wZXJseSB3aXRoIGEgcGFyZW50IHVzaW5nIHBvc2l0aW9uOlwiJHtwYXJlbnQucG9zaXRpb259XCIuIENvbnNpZGVyIGNoYW5naW5nIHRoZSBwYXJlbnQgc3R5bGUgdG8gcG9zaXRpb246XCJyZWxhdGl2ZVwiIHdpdGggYSB3aWR0aCBhbmQgaGVpZ2h0LmBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgaWYgKGltZy5jb21wbGV0ZSkge1xuICAgIC8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuICAgIC8vIFRoaXMgaXMgdGhlIGRlc2lyZWQgYmVoYXZpb3IgZm9yIG5vdywgYW5kIHdpbGwgYmUgcmV2aXNpdGVkIHdoZW4gZXJyb3JcbiAgICAvLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuICAgIGhhbmRsZUxvYWQoKVxuICB9IGVsc2Uge1xuICAgIGltZy5vbmxvYWQgPSBoYW5kbGVMb2FkXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2Uoe1xuICBzcmMsXG4gIHNpemVzLFxuICB1bm9wdGltaXplZCA9IGZhbHNlLFxuICBwcmlvcml0eSA9IGZhbHNlLFxuICBsb2FkaW5nLFxuICBsYXp5Qm91bmRhcnkgPSAnMjAwcHgnLFxuICBjbGFzc05hbWUsXG4gIHF1YWxpdHksXG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIG9iamVjdEZpdCxcbiAgb2JqZWN0UG9zaXRpb24sXG4gIG9uTG9hZGluZ0NvbXBsZXRlLFxuICBsb2FkZXIgPSBkZWZhdWx0SW1hZ2VMb2FkZXIsXG4gIHBsYWNlaG9sZGVyID0gJ2VtcHR5JyxcbiAgYmx1ckRhdGFVUkwsXG4gIC4uLmFsbFxufTogSW1hZ2VQcm9wcykge1xuICBsZXQgcmVzdDogUGFydGlhbDxJbWFnZVByb3BzPiA9IGFsbFxuICBsZXQgbGF5b3V0OiBOb25OdWxsYWJsZTxMYXlvdXRWYWx1ZT4gPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnXG4gIGlmICgnbGF5b3V0JyBpbiByZXN0KSB7XG4gICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0XG5cbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ2xheW91dCddXG4gIH1cblxuICBsZXQgc3RhdGljU3JjID0gJydcbiAgaWYgKGlzU3RhdGljSW1wb3J0KHNyYykpIHtcbiAgICBjb25zdCBzdGF0aWNJbWFnZURhdGEgPSBpc1N0YXRpY1JlcXVpcmUoc3JjKSA/IHNyYy5kZWZhdWx0IDogc3JjXG5cbiAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5zcmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgc3JjLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHN0YXRpY0ltYWdlRGF0YVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG4gICAgYmx1ckRhdGFVUkwgPSBibHVyRGF0YVVSTCB8fCBzdGF0aWNJbWFnZURhdGEuYmx1ckRhdGFVUkxcbiAgICBzdGF0aWNTcmMgPSBzdGF0aWNJbWFnZURhdGEuc3JjXG4gICAgaWYgKCFsYXlvdXQgfHwgbGF5b3V0ICE9PSAnZmlsbCcpIHtcbiAgICAgIGhlaWdodCA9IGhlaWdodCB8fCBzdGF0aWNJbWFnZURhdGEuaGVpZ2h0XG4gICAgICB3aWR0aCA9IHdpZHRoIHx8IHN0YXRpY0ltYWdlRGF0YS53aWR0aFxuICAgICAgaWYgKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0IHx8ICFzdGF0aWNJbWFnZURhdGEud2lkdGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICBzdGF0aWNJbWFnZURhdGFcbiAgICAgICAgICApfWBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBzcmMgPSB0eXBlb2Ygc3JjID09PSAnc3RyaW5nJyA/IHNyYyA6IHN0YXRpY1NyY1xuXG4gIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKVxuICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KVxuICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpXG5cbiAgbGV0IGlzTGF6eSA9XG4gICAgIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKVxuICBpZiAoc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykgfHwgc3JjLnN0YXJ0c1dpdGgoJ2Jsb2I6JykpIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuICAgIHVub3B0aW1pemVkID0gdHJ1ZVxuICAgIGlzTGF6eSA9IGZhbHNlXG4gIH1cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGxvYWRlZEltYWdlVVJMcy5oYXMoc3JjKSkge1xuICAgIGlzTGF6eSA9IGZhbHNlXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghc3JjKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyB3aWR0aCwgaGVpZ2h0LCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFxuICAgICAgICAgIFN0cmluZ1xuICAgICAgICApLmpvaW4oJywnKX0uYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoXG4gICAgICAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTih3aWR0aEludCkpIHx8XG4gICAgICAodHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4oaGVpZ2h0SW50KSlcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJ3aWR0aFwiIG9yIFwiaGVpZ2h0XCIgcHJvcGVydHkuIFRoZXNlIHNob3VsZCBiZSBudW1lcmljIHZhbHVlcy5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiAod2lkdGggfHwgaGVpZ2h0KSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBhbmQgXCJsYXlvdXQ9J2ZpbGwnXCIgaGFzIHVudXNlZCBwcm9wZXJ0aWVzIGFzc2lnbmVkLiBQbGVhc2UgcmVtb3ZlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIi5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgaWYgKGxheW91dCAhPT0gJ2ZpbGwnICYmICh3aWR0aEludCB8fCAwKSAqIChoZWlnaHRJbnQgfHwgMCkgPCAxNjAwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBzbWFsbGVyIHRoYW4gNDB4NDAuIENvbnNpZGVyIHJlbW92aW5nIHRoZSBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuYFxuICAgICAgICApXG4gICAgICB9XG4gICAgICBpZiAoIWJsdXJEYXRhVVJMKSB7XG4gICAgICAgIGNvbnN0IFZBTElEX0JMVVJfRVhUID0gWydqcGVnJywgJ3BuZycsICd3ZWJwJ10gLy8gc2hvdWxkIG1hdGNoIG5leHQtaW1hZ2UtbG9hZGVyXG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oXG4gICAgICAgICAgICAgICcsJ1xuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIGlmICgncmVmJyBpbiByZXN0KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwicmVmXCIgcHJvcGVydHkuIENvbnNpZGVyIHVzaW5nIHRoZSBcIm9uTG9hZGluZ0NvbXBsZXRlXCIgcHJvcGVydHkgaW5zdGVhZC5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICgnc3R5bGUnIGluIHJlc3QpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJzdHlsZVwiIHByb3BlcnR5LiBQbGVhc2UgdXNlIHRoZSBcImNsYXNzTmFtZVwiIHByb3BlcnR5IGluc3RlYWQuYFxuICAgICAgKVxuICAgIH1cbiAgICBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCkgKyAxMDBcbiAgICBpZiAoXG4gICAgICAhdW5vcHRpbWl6ZWQgJiZcbiAgICAgICFsb2FkZXIoeyBzcmMsIHdpZHRoOiByYW5kLCBxdWFsaXR5OiA3NSB9KS5pbmNsdWRlcyhyYW5kLnRvU3RyaW5nKCkpXG4gICAgKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBhIFwibG9hZGVyXCIgcHJvcGVydHkgdGhhdCBkb2VzIG5vdCBpbXBsZW1lbnQgd2lkdGguIFBsZWFzZSBpbXBsZW1lbnQgaXQgb3IgdXNlIHRoZSBcInVub3B0aW1pemVkXCIgcHJvcGVydHkgaW5zdGVhZC5gICtcbiAgICAgICAgICBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyLXdpZHRoYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gdXNlSW50ZXJzZWN0aW9uPEhUTUxJbWFnZUVsZW1lbnQ+KHtcbiAgICByb290TWFyZ2luOiBsYXp5Qm91bmRhcnksXG4gICAgZGlzYWJsZWQ6ICFpc0xhenksXG4gIH0pXG4gIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZFxuXG4gIGxldCB3cmFwcGVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3ZnOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgbGV0IGltZ1N0eWxlOiBJbWdFbGVtZW50U3R5bGUgfCB1bmRlZmluZWQgPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHJpZ2h0OiAwLFxuXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgcGFkZGluZzogMCxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBtYXJnaW46ICdhdXRvJyxcblxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcblxuICAgIG9iamVjdEZpdCxcbiAgICBvYmplY3RQb3NpdGlvbixcbiAgfVxuICBjb25zdCBibHVyU3R5bGUgPVxuICAgIHBsYWNlaG9sZGVyID09PSAnYmx1cidcbiAgICAgID8ge1xuICAgICAgICAgIGZpbHRlcjogJ2JsdXIoMjBweCknLFxuICAgICAgICAgIGJhY2tncm91bmRTaXplOiBvYmplY3RGaXQgfHwgJ2NvdmVyJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWAsXG4gICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBvYmplY3RQb3NpdGlvbiB8fCAnMCUgMCUnLFxuICAgICAgICB9XG4gICAgICA6IHt9XG4gIGlmIChsYXlvdXQgPT09ICdmaWxsJykge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG5cbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHJpZ2h0OiAwLFxuXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50XG4gICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgXG4gICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0geyBkaXNwbGF5OiAnYmxvY2snLCBib3hTaXppbmc6ICdib3JkZXItYm94JywgcGFkZGluZ1RvcCB9XG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICB9XG4gICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gXG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnQsXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpbWdBdHRyaWJ1dGVzOiBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgICBzcmM6ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgIHNpemVzOiB1bmRlZmluZWQsXG4gIH1cblxuICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgc3JjLFxuICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICBsYXlvdXQsXG4gICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgc2l6ZXMsXG4gICAgICBsb2FkZXIsXG4gICAgfSlcbiAgfVxuXG4gIGxldCBzcmNTdHJpbmc6IHN0cmluZyA9IHNyY1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17d3JhcHBlclN0eWxlfT5cbiAgICAgIHtzaXplclN0eWxlID8gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzaXplclN0eWxlfT5cbiAgICAgICAgICB7c2l6ZXJTdmcgPyAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17dHJ1ZX1cbiAgICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke3RvQmFzZTY0KHNpemVyU3ZnKX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIDxpbWdcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHsuLi5pbWdBdHRyaWJ1dGVzfVxuICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgZGF0YS1uaW1nPXtsYXlvdXR9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICByZWY9eyhpbWcpID0+IHtcbiAgICAgICAgICBzZXRSZWYoaW1nKVxuICAgICAgICAgIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmNTdHJpbmcsIGxheW91dCwgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKVxuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17eyAuLi5pbWdTdHlsZSwgLi4uYmx1clN0eWxlIH19XG4gICAgICAvPlxuICAgICAgPG5vc2NyaXB0PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgey4uLmdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICBsb2FkZXIsXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgICAgZGF0YS1uaW1nPXtsYXlvdXR9XG4gICAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmcgfHwgJ2xhenknfVxuICAgICAgICAvPlxuICAgICAgPC9ub3NjcmlwdD5cblxuICAgICAge3ByaW9yaXR5ID8gKFxuICAgICAgICAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgICAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAga2V5PXtcbiAgICAgICAgICAgICAgJ19fbmltZy0nICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmMgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyY1NldCArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgYXM9XCJpbWFnZVwiXG4gICAgICAgICAgICBocmVmPXtpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjfVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgICAgICBpbWFnZXNyY3NldD17aW1nQXR0cmlidXRlcy5zcmNTZXR9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICAgICAgaW1hZ2VzaXplcz17aW1nQXR0cmlidXRlcy5zaXplc31cbiAgICAgICAgICA+PC9saW5rPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmNcbn1cblxuZnVuY3Rpb24gaW1naXhMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2F1dG89Zm9ybWF0JmZpdD1tYXgmdz0zMDBcbiAgY29uc3QgdXJsID0gbmV3IFVSTChgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9YClcbiAgY29uc3QgcGFyYW1zID0gdXJsLnNlYXJjaFBhcmFtc1xuXG4gIHBhcmFtcy5zZXQoJ2F1dG8nLCBwYXJhbXMuZ2V0KCdhdXRvJykgfHwgJ2Zvcm1hdCcpXG4gIHBhcmFtcy5zZXQoJ2ZpdCcsIHBhcmFtcy5nZXQoJ2ZpdCcpIHx8ICdtYXgnKVxuICBwYXJhbXMuc2V0KCd3JywgcGFyYW1zLmdldCgndycpIHx8IHdpZHRoLnRvU3RyaW5nKCkpXG5cbiAgaWYgKHF1YWxpdHkpIHtcbiAgICBwYXJhbXMuc2V0KCdxJywgcXVhbGl0eS50b1N0cmluZygpKVxuICB9XG5cbiAgcmV0dXJuIHVybC5ocmVmXG59XG5cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QsIHNyYywgd2lkdGggfTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YFxufVxuXG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgY29uc3QgcGFyYW1zID0gWydmX2F1dG8nLCAnY19saW1pdCcsICd3XycgKyB3aWR0aCwgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJyldXG4gIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nXG4gIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YFxufVxuXG5mdW5jdGlvbiBjdXN0b21Mb2FkZXIoeyBzcmMgfTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgbWlzc2luZyBcImxvYWRlclwiIHByb3AuYCArXG4gICAgICBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyYFxuICApXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXVxuXG4gICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJylcbiAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJylcblxuICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKFxuICAgICAgICAgICcsICdcbiAgICAgICAgKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgIGxldCBwYXJzZWRTcmM6IFVSTFxuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiZcbiAgICAgICAgIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKVxuICAgICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArXG4gICAgICAgICAgICBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gXG59XG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiZcbiAgICBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmXG4gICAgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiZcbiAgICBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykpIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXHJcbmltcG9ydCBJc290b3BlIGZyb20gJy4uL3B1YmxpYy9hc3NldHMvdmVuZG9yL2lzb3RvcGUtbGF5b3V0L2lzb3RvcGUucGtnZC5taW4uanMnXHJcbi8vIGNvbnN0IElzb3RvcGUgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnLi4vcHVibGljL2Fzc2V0cy92ZW5kb3IvaXNvdG9wZS1sYXlvdXQvaXNvdG9wZS5wa2dkLm1pbi5qcycpKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmljZXMoKSB7XHJcblxyXG4gIGNvbnN0IGV4ZWNGdW5jID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBFYXN5IHNlbGVjdG9yIGhlbHBlciBmdW5jdGlvblxyXG4gICAgICovXHJcbiAgICBjb25zdCBzZWxlY3QgPSAoZWwsIGFsbCA9IGZhbHNlKSA9PiB7XHJcbiAgICAgIGVsID0gZWwudHJpbSgpXHJcbiAgICAgIGlmIChhbGwpIHtcclxuICAgICAgICByZXR1cm4gWy4uLmRvY3VtZW50Py5xdWVyeVNlbGVjdG9yQWxsKGVsKV1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoZWwpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGxldCBwb3J0Zm9saW9Db250YWluZXIgPSBzZWxlY3QoJy5wb3J0Zm9saW8tY29udGFpbmVyJyk7XHJcbiAgICBpZiAocG9ydGZvbGlvQ29udGFpbmVyKSB7XHJcbiAgICAgIG5ldyBJc290b3BlKHBvcnRmb2xpb0NvbnRhaW5lciwge1xyXG4gICAgICAgIGl0ZW1TZWxlY3RvcjogJy5wb3J0Zm9saW8taXRlbSdcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBsZXQgcG9ydGZvbGlvQ29udGFpbmVyMiA9IHNlbGVjdCgnLnBvcnRmb2xpby1jb250YWluZXIyJyk7XHJcbiAgICBpZiAocG9ydGZvbGlvQ29udGFpbmVyMikge1xyXG4gICAgICBuZXcgSXNvdG9wZShwb3J0Zm9saW9Db250YWluZXIyLCB7XHJcbiAgICAgICAgaXRlbVNlbGVjdG9yOiAnLnBvcnRmb2xpby1pdGVtMidcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBsZXQgcG9ydGZvbGlvQ29udGFpbmVyMyA9IHNlbGVjdCgnLnBvcnRmb2xpby1jb250YWluZXIzJyk7XHJcbiAgICBpZiAocG9ydGZvbGlvQ29udGFpbmVyMykge1xyXG4gICAgICBuZXcgSXNvdG9wZShwb3J0Zm9saW9Db250YWluZXIzLCB7XHJcbiAgICAgICAgaXRlbVNlbGVjdG9yOiAnLnBvcnRmb2xpby1pdGVtMydcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBcclxuICB1c2VFZmZlY3QgKCgpID0+IHtcclxuICAgIGV4ZWNGdW5jKCkgIFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IF9zdXBwbGllcyA9IFtcclxuICAgIHsgaW1nOiAnaW1hZ2U1LnBuZycsIHRpdGxlOiAnVHJhY2sgTGluayd9LFxyXG4gICAgeyBpbWc6ICdpbWFnZTQuanBlZycsIHRpdGxlOiAnVHJhY2sgR3JvdXAgQXNzZW1ibHknfSxcclxuICAgIHsgaW1nOiAnaW1hZ2U2LmpwZWcnLCB0aXRsZTogJ1RyYWNrIFJvbGxlciAmIElkbGVyJ30sXHJcbiAgICB7IGltZzogJ2ltYWdlOC5wbmcnLCB0aXRsZTogJ1NlZ21lbiAmIFNwcm9ja2V0J30sXHJcbiAgICB7IGltZzogJ2ltYWdlOS5wbmcnLCB0aXRsZTogJ0ZvcmdpbmcgbGluZSd9LFxyXG4gICAgeyBpbWc6ICdpbWFnZTEwLnBuZycsIHRpdGxlOiAnUXVlbmNoaW5nIGFuZCBUZW1wZXJpbmcgbGluZSd9LFxyXG4gICAgeyBpbWc6ICdpbWFnZTExLnBuZycsIHRpdGxlOiAnSW5kdWN0aW9uIEhhcmRlbmluZyBsaW5lJ30sXHJcbiAgICB7IGltZzogJ2ltYWdlMTIucG5nJywgdGl0bGU6ICdNYWNoaW5pbmcgbGluZSd9LFxyXG4gICAgeyBpbWc6ICdpbWFnZTEzLnBuZycsIHRpdGxlOiAnQXNzZW1ibHkgbGluZSd9LFxyXG4gICAgeyBpbWc6ICdpbWFnZTE0LnBuZycsIHRpdGxlOiAnTWFqb3IgTWFjaGluZXJ5IC8gRXF1aXBtZW50J30sXHJcbiAgICB7IGltZzogJ2ltYWdlMTUucG5nJywgdGl0bGU6ICdHZWFyIFNldCd9LFxyXG4gICAgeyBpbWc6ICdpbWFnZTE2LnBuZycsIHRpdGxlOiAnTW9sZCBEZXYgOiBUb290aCBQb2ludCd9LFxyXG4gICAgeyBpbWc6ICdpbWFnZTE3LmpwZWcnLCB0aXRsZTogJ0dsYW5kIFBhY2tpbmcnfSxcclxuICAgIHsgaW1nOiAnaW1hZ2UxOS5qcGVnJywgdGl0bGU6ICdGcmVlIFJvbGxlciBDb252ZXlvcid9LFxyXG4gICAgeyBpbWc6ICdpbWFnZTIxLmpwZWcnLCB0aXRsZTogJ0RyaXZlIFJvbGxlciBDb252ZXlvcid9LFxyXG4gICAgeyBpbWc6ICdpbWFnZTIzLmpwZWcnLCB0aXRsZTogJ0FjY3VtdWxhdGlvbiBSb2xsZXIgQ29udmV5b3InfSxcclxuICAgIHsgaW1nOiAnaW1hZ2UyNC5qcGVnJywgdGl0bGU6ICdIb3NlJ30sXHJcbiAgICB7IGltZzogJ2ltYWdlMjMucG5nJywgdGl0bGU6ICdIRFBFIFBpcGUnfSxcclxuICAgIHsgaW1nOiAnaW1hZ2UzMy5qcGVnJywgdGl0bGU6ICdDb3VwbGluZyd9LFxyXG4gICAgeyBpbWc6ICdpbWFnZTI1LmpwZWcnLCB0aXRsZTogJ0ZsYW5nZSd9LFxyXG4gICAgeyBpbWc6ICdpbWFnZTM1LmpwZWcnLCB0aXRsZTogJ0NvdXBsaW5nJ30sXHJcbiAgICB7IGltZzogJ2ltYWdlMzIuanBlZycsIHRpdGxlOiAnU2FmZXR5IENhYmluZXQnfSxcclxuICAgIHsgaW1nOiAnaW1hZ2UyOC5wbmcnLCB0aXRsZTogJ0h5ZHJhbnQgQ291cGxpbmcnfSxcclxuICAgIHsgaW1nOiAnaW1hZ2UyOS5wbmcnLCB0aXRsZTogJ0JveCBBUEQnfSxcclxuICAgIHsgaW1nOiAncGljdHVyZTIuanBnJywgdGl0bGU6ICdJbmR1c3RyaWFsIFB1bXAnfSxcclxuICAgIHsgaW1nOiAnaW1hZ2U0Mi5wbmcnLCB0aXRsZTogJ0h5ZHJhbnQgSG9zZSd9LFxyXG4gICAgeyBpbWc6ICdpbWFnZTM5LmpwZWcnLCB0aXRsZTogJ1BWQyBQaXBlJ30sXHJcbiAgICB7IGltZzogJ2ltYWdlMjYuanBlZycsIHRpdGxlOiAnSW5kdXN0cmlhbCBTY2FsZSd9LFxyXG4gICAgeyBpbWc6ICdpbWFnZTMyLmpwZWcnLCB0aXRsZTogJ0NoZW1pY2FsIFNwcmF5J30sXHJcbiAgICB7IGltZzogJ2ltYWdlMzYuanBlZycsIHRpdGxlOiAnUGFja2luZyd9LFxyXG4gICAgeyBpbWc6ICdpbWFnZTM3LmpwZWcnLCB0aXRsZTogJ0F1dG8gVHJhdm8nfSxcclxuICAgIHsgaW1nOiAnaW1hZ2UzOC5qcGVnJywgdGl0bGU6ICdFbGVjdHJpY2FsJ30sXHJcbiAgICB7IGltZzogJ2ltYWdlNDAuanBlZycsIHRpdGxlOiAnUmFjaGV0IEJpbmRlciBXL0hvb2snfSxcclxuICAgIHsgaW1nOiAnaW1hZ2U0MS5qcGVnJywgdGl0bGU6ICdMZXZlciBIb2lzdCBDaGFpbiBCbG9jayd9LFxyXG4gICAgeyBpbWc6ICdpbWFnZTQ0LnBuZycsIHRpdGxlOiAnU3BhcmUgUGFydCBEdW1wIFRydWNrJ30sXHJcbiAgICB7IGltZzogJ2ltYWdlNDUucG5nJywgdGl0bGU6ICdTcGFyZSBQYXJ0IEJ1bGwgRG96ZXInfSxcclxuICAgIHsgaW1nOiAnaW1hZ2U0Ni5wbmcnLCB0aXRsZTogJ1NwYXJlIFBhcnQgV2hlZWwgTG9hZGVyJ30sXHJcbiAgICB7IGltZzogJ2ltYWdlNDcucG5nJywgdGl0bGU6ICdTcGFyZSBQYXJ0IE1vdG9yIEdyYWRlcid9LFxyXG4gICAgeyBpbWc6ICdwaWN0dXJlMy5qcGcnLCB0aXRsZTogJ0NvbnN0cnVjdGlvbiBNYXRlcmlhbHMnfSxcclxuICAgIHsgaW1nOiAncGljdHVyZTQuanBnJywgdGl0bGU6ICdCdWlsZGluZyBNYXRlcmlhbHMnfSxcclxuICAgIHsgaW1nOiAncGljdHVyZTUuanBnJywgdGl0bGU6ICdSb2FkIE1haW50ZW5hbmNlIE1hdGVyaWFscyd9LFxyXG4gICAgeyBpbWc6ICdpbWFnZTIyLmpwZWcnLCB0aXRsZTogJ1RyYW5zcG9ydGF0aW9uIHN1cHBvcnQgc2VydmljZXMnfSxcclxuICAgIHsgaW1nOiAnaW1hZ2UyNy5wbmcnLCB0aXRsZTogJ1RyYW5zcG9ydGF0aW9uIHN1cHBvcnQgc2VydmljZXMnfSxcclxuICBdXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcblxyXG4gICAgICA8bWFpbiBpZD1cIm1haW5cIj5cclxuICAgICAgICBcclxuICAgICAgICA8YnIgLz48YnIgLz48YnIgLz5cclxuICAgICAgICA8c2VjdGlvbiBpZD1cInNlcnZpY2VzXCIgY2xhc3NOYW1lPVwic2VydmljZXMgc2VjdGlvbi1iZ1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgIDxoMj5TZXJ2aWNlczwvaDI+XHJcbiAgICAgICAgICAgICAgPHA+Q2hlY2sgb3VyIFNlcnZpY2VzPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCIyMDBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJiaSBiaS1wZW9wbGUtZmlsbFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPGg0Pk91ciBUZWFtXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luVG9wOiAyMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5PdXIgVGVhbSBvbiBXb3JraW5nPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcnRmb2xpb1wiIGNsYXNzTmFtZT1cInBvcnRmb2xpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHBvcnRmb2xpby1jb250YWluZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjIwMFwiIHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZSd9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtNiBwb3J0Zm9saW8taXRlbSBmaWx0ZXItcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1nL2FwcC9vbi1nb2FsLnBuZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5UZWFtIFdvcms8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiYXNzZXRzL2ltZy9hcHAvb24tZ29hbC5wbmdcIiBkYXRhLWdhbGxlcnk9XCJwb3J0Zm9saW9HYWxsZXJ5XCIgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWxpZ2h0Ym94IHByZXZpZXctbGluayBkZXRhaWxzLWxpbmtcIiB0aXRsZT1cIlRlYW0gV29ya1wiPjxpIGNsYXNzTmFtZT1cImJ4IGJ4LXBsdXNcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLW1kLTYgcG9ydGZvbGlvLWl0ZW0gZmlsdGVyLXByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltZy9hcHAvdGVhbS13b3JrLnBuZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5PbmUgR29hbDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJhc3NldHMvaW1nL2FwcC90ZWFtLXdvcmsucG5nXCIgZGF0YS1nYWxsZXJ5PVwicG9ydGZvbGlvR2FsbGVyeVwiIGNsYXNzTmFtZT1cInBvcnRmb2xpby1saWdodGJveCBwcmV2aWV3LWxpbmsgZGV0YWlscy1saW5rXCIgdGl0bGU9XCJPbmUgR29hbFwiPjxpIGNsYXNzTmFtZT1cImJ4IGJ4LXBsdXNcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLW1kLTYgcG9ydGZvbGlvLWl0ZW0gZmlsdGVyLXByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltZy9hcHAvcGFydG5lci5wbmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8taW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+QnVzaW5lc3MgUGFydG5lciBTZXJ2aWNlczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJhc3NldHMvaW1nL2FwcC9wYXJ0bmVyLnBuZ1wiIGRhdGEtZ2FsbGVyeT1cInBvcnRmb2xpb0dhbGxlcnlcIiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tbGlnaHRib3ggcHJldmlldy1saW5rIGRldGFpbHMtbGlua1wiIHRpdGxlPVwiQnVzaW5lc3MgUGFydG5lciBTZXJ2aWNlc1wiPjxpIGNsYXNzTmFtZT1cImJ4IGJ4LXBsdXNcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYmkgYmktYm94LWZpbGxcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDxoND5CLiBHZW5lcmFsIE1hdGVyaWFsIFN1cHBsaWVycyBcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5Ub3A6IDIwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPldlIGFsc28gc3VwcG9ydCBHZW5lcmFsIE1hdGVyaWFsIFN1cHBsaWVzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcnRmb2xpb1wiIGNsYXNzTmFtZT1cInBvcnRmb2xpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHBvcnRmb2xpby1jb250YWluZXIgcG9ydGZvbGlvLWNvbnRhaW5lcjJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjIwMFwiIHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZSd9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3N1cHBsaWVzPy5tYXAoZGF0YSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtkYXRhPy50aXRsZX0gY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLW1kLTYgcG9ydGZvbGlvLWl0ZW0gcG9ydGZvbGlvLWl0ZW0yIGZpbHRlci1hcHBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCJhc3NldHMvaW1nL2FwcC9cIiArIGRhdGE/LmltZ30gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e2RhdGE/LnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtcImFzc2V0cy9pbWcvYXBwL1wiICsgZGF0YT8uaW1nfSBkYXRhLWdhbGxlcnk9XCJwb3J0Zm9saW9HYWxsZXJ5XCIgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWxpZ2h0Ym94IHByZXZpZXctbGluayBkZXRhaWxzLWxpbmtcIiB0aXRsZT17ZGF0YT8udGl0bGV9PjxpIGNsYXNzTmFtZT1cImJ4IGJ4LXBsdXNcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgPEZvb3RlciAvPlxyXG5cclxuXHJcbiAgICAgIDxkaXYgaWQ9XCJwcmVsb2FkZXJcIj48L2Rpdj5cclxuICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJiYWNrLXRvLXRvcCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj48aSBjbGFzc05hbWU9XCJiaSBiaS1hcnJvdy11cC1zaG9ydFwiPjwvaT48L2E+XHJcblxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiIsIi8qIVxyXG4gKiBJc290b3BlIFBBQ0tBR0VEIHYzLjAuNlxyXG4gKlxyXG4gKiBMaWNlbnNlZCBHUEx2MyBmb3Igb3BlbiBzb3VyY2UgdXNlXHJcbiAqIG9yIElzb3RvcGUgQ29tbWVyY2lhbCBMaWNlbnNlIGZvciBjb21tZXJjaWFsIHVzZVxyXG4gKlxyXG4gKiBodHRwczovL2lzb3RvcGUubWV0YWZpenp5LmNvXHJcbiAqIENvcHlyaWdodCAyMDEwLTIwMTggTWV0YWZpenp5XHJcbiAqL1xyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgXHJcbiFmdW5jdGlvbih0LGUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJqcXVlcnktYnJpZGdldC9qcXVlcnktYnJpZGdldFwiLFtcImpxdWVyeVwiXSxmdW5jdGlvbihpKXtyZXR1cm4gZSh0LGkpfSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZSh0LHJlcXVpcmUoXCJqcXVlcnlcIikpOnQualF1ZXJ5QnJpZGdldD1lKHQsdC5qUXVlcnkpfSh3aW5kb3csZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBpKGkscyxhKXtmdW5jdGlvbiB1KHQsZSxvKXt2YXIgbixzPVwiJCgpLlwiK2krJyhcIicrZSsnXCIpJztyZXR1cm4gdC5lYWNoKGZ1bmN0aW9uKHQsdSl7dmFyIGg9YS5kYXRhKHUsaSk7aWYoIWgpcmV0dXJuIHZvaWQgcihpK1wiIG5vdCBpbml0aWFsaXplZC4gQ2Fubm90IGNhbGwgbWV0aG9kcywgaS5lLiBcIitzKTt2YXIgZD1oW2VdO2lmKCFkfHxcIl9cIj09ZS5jaGFyQXQoMCkpcmV0dXJuIHZvaWQgcihzK1wiIGlzIG5vdCBhIHZhbGlkIG1ldGhvZFwiKTt2YXIgbD1kLmFwcGx5KGgsbyk7bj12b2lkIDA9PT1uP2w6bn0pLHZvaWQgMCE9PW4/bjp0fWZ1bmN0aW9uIGgodCxlKXt0LmVhY2goZnVuY3Rpb24odCxvKXt2YXIgbj1hLmRhdGEobyxpKTtuPyhuLm9wdGlvbihlKSxuLl9pbml0KCkpOihuPW5ldyBzKG8sZSksYS5kYXRhKG8saSxuKSl9KX1hPWF8fGV8fHQualF1ZXJ5LGEmJihzLnByb3RvdHlwZS5vcHRpb258fChzLnByb3RvdHlwZS5vcHRpb249ZnVuY3Rpb24odCl7YS5pc1BsYWluT2JqZWN0KHQpJiYodGhpcy5vcHRpb25zPWEuZXh0ZW5kKCEwLHRoaXMub3B0aW9ucyx0KSl9KSxhLmZuW2ldPWZ1bmN0aW9uKHQpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXt2YXIgZT1uLmNhbGwoYXJndW1lbnRzLDEpO3JldHVybiB1KHRoaXMsdCxlKX1yZXR1cm4gaCh0aGlzLHQpLHRoaXN9LG8oYSkpfWZ1bmN0aW9uIG8odCl7IXR8fHQmJnQuYnJpZGdldHx8KHQuYnJpZGdldD1pKX12YXIgbj1BcnJheS5wcm90b3R5cGUuc2xpY2Uscz10LmNvbnNvbGUscj1cInVuZGVmaW5lZFwiPT10eXBlb2Ygcz9mdW5jdGlvbigpe306ZnVuY3Rpb24odCl7cy5lcnJvcih0KX07cmV0dXJuIG8oZXx8dC5qUXVlcnkpLGl9KSxmdW5jdGlvbih0LGUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJldi1lbWl0dGVyL2V2LWVtaXR0ZXJcIixlKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKCk6dC5FdkVtaXR0ZXI9ZSgpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe312YXIgZT10LnByb3RvdHlwZTtyZXR1cm4gZS5vbj1mdW5jdGlvbih0LGUpe2lmKHQmJmUpe3ZhciBpPXRoaXMuX2V2ZW50cz10aGlzLl9ldmVudHN8fHt9LG89aVt0XT1pW3RdfHxbXTtyZXR1cm4gby5pbmRleE9mKGUpPT0tMSYmby5wdXNoKGUpLHRoaXN9fSxlLm9uY2U9ZnVuY3Rpb24odCxlKXtpZih0JiZlKXt0aGlzLm9uKHQsZSk7dmFyIGk9dGhpcy5fb25jZUV2ZW50cz10aGlzLl9vbmNlRXZlbnRzfHx7fSxvPWlbdF09aVt0XXx8e307cmV0dXJuIG9bZV09ITAsdGhpc319LGUub2ZmPWZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy5fZXZlbnRzJiZ0aGlzLl9ldmVudHNbdF07aWYoaSYmaS5sZW5ndGgpe3ZhciBvPWkuaW5kZXhPZihlKTtyZXR1cm4gbyE9LTEmJmkuc3BsaWNlKG8sMSksdGhpc319LGUuZW1pdEV2ZW50PWZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy5fZXZlbnRzJiZ0aGlzLl9ldmVudHNbdF07aWYoaSYmaS5sZW5ndGgpe2k9aS5zbGljZSgwKSxlPWV8fFtdO2Zvcih2YXIgbz10aGlzLl9vbmNlRXZlbnRzJiZ0aGlzLl9vbmNlRXZlbnRzW3RdLG49MDtuPGkubGVuZ3RoO24rKyl7dmFyIHM9aVtuXSxyPW8mJm9bc107ciYmKHRoaXMub2ZmKHQscyksZGVsZXRlIG9bc10pLHMuYXBwbHkodGhpcyxlKX1yZXR1cm4gdGhpc319LGUuYWxsT2ZmPWZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXMuX2V2ZW50cyxkZWxldGUgdGhpcy5fb25jZUV2ZW50c30sdH0pLGZ1bmN0aW9uKHQsZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcImdldC1zaXplL2dldC1zaXplXCIsZSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZSgpOnQuZ2V0U2l6ZT1lKCl9KHdpbmRvdyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQodCl7dmFyIGU9cGFyc2VGbG9hdCh0KSxpPXQuaW5kZXhPZihcIiVcIik9PS0xJiYhaXNOYU4oZSk7cmV0dXJuIGkmJmV9ZnVuY3Rpb24gZSgpe31mdW5jdGlvbiBpKCl7Zm9yKHZhciB0PXt3aWR0aDowLGhlaWdodDowLGlubmVyV2lkdGg6MCxpbm5lckhlaWdodDowLG91dGVyV2lkdGg6MCxvdXRlckhlaWdodDowfSxlPTA7ZTxoO2UrKyl7dmFyIGk9dVtlXTt0W2ldPTB9cmV0dXJuIHR9ZnVuY3Rpb24gbyh0KXt2YXIgZT1nZXRDb21wdXRlZFN0eWxlKHQpO3JldHVybiBlfHxhKFwiU3R5bGUgcmV0dXJuZWQgXCIrZStcIi4gQXJlIHlvdSBydW5uaW5nIHRoaXMgY29kZSBpbiBhIGhpZGRlbiBpZnJhbWUgb24gRmlyZWZveD8gU2VlIGh0dHBzOi8vYml0Lmx5L2dldHNpemVidWcxXCIpLGV9ZnVuY3Rpb24gbigpe2lmKCFkKXtkPSEwO3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5zdHlsZS53aWR0aD1cIjIwMHB4XCIsZS5zdHlsZS5wYWRkaW5nPVwiMXB4IDJweCAzcHggNHB4XCIsZS5zdHlsZS5ib3JkZXJTdHlsZT1cInNvbGlkXCIsZS5zdHlsZS5ib3JkZXJXaWR0aD1cIjFweCAycHggM3B4IDRweFwiLGUuc3R5bGUuYm94U2l6aW5nPVwiYm9yZGVyLWJveFwiO3ZhciBpPWRvY3VtZW50LmJvZHl8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtpLmFwcGVuZENoaWxkKGUpO3ZhciBuPW8oZSk7cj0yMDA9PU1hdGgucm91bmQodChuLndpZHRoKSkscy5pc0JveFNpemVPdXRlcj1yLGkucmVtb3ZlQ2hpbGQoZSl9fWZ1bmN0aW9uIHMoZSl7aWYobigpLFwic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUpKSxlJiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZS5ub2RlVHlwZSl7dmFyIHM9byhlKTtpZihcIm5vbmVcIj09cy5kaXNwbGF5KXJldHVybiBpKCk7dmFyIGE9e307YS53aWR0aD1lLm9mZnNldFdpZHRoLGEuaGVpZ2h0PWUub2Zmc2V0SGVpZ2h0O2Zvcih2YXIgZD1hLmlzQm9yZGVyQm94PVwiYm9yZGVyLWJveFwiPT1zLmJveFNpemluZyxsPTA7bDxoO2wrKyl7dmFyIGY9dVtsXSxjPXNbZl0sbT1wYXJzZUZsb2F0KGMpO2FbZl09aXNOYU4obSk/MDptfXZhciBwPWEucGFkZGluZ0xlZnQrYS5wYWRkaW5nUmlnaHQseT1hLnBhZGRpbmdUb3ArYS5wYWRkaW5nQm90dG9tLGc9YS5tYXJnaW5MZWZ0K2EubWFyZ2luUmlnaHQsdj1hLm1hcmdpblRvcCthLm1hcmdpbkJvdHRvbSxfPWEuYm9yZGVyTGVmdFdpZHRoK2EuYm9yZGVyUmlnaHRXaWR0aCx6PWEuYm9yZGVyVG9wV2lkdGgrYS5ib3JkZXJCb3R0b21XaWR0aCxJPWQmJnIseD10KHMud2lkdGgpO3ghPT0hMSYmKGEud2lkdGg9eCsoST8wOnArXykpO3ZhciBTPXQocy5oZWlnaHQpO3JldHVybiBTIT09ITEmJihhLmhlaWdodD1TKyhJPzA6eSt6KSksYS5pbm5lcldpZHRoPWEud2lkdGgtKHArXyksYS5pbm5lckhlaWdodD1hLmhlaWdodC0oeSt6KSxhLm91dGVyV2lkdGg9YS53aWR0aCtnLGEub3V0ZXJIZWlnaHQ9YS5oZWlnaHQrdixhfX12YXIgcixhPVwidW5kZWZpbmVkXCI9PXR5cGVvZiBjb25zb2xlP2U6ZnVuY3Rpb24odCl7Y29uc29sZS5lcnJvcih0KX0sdT1bXCJwYWRkaW5nTGVmdFwiLFwicGFkZGluZ1JpZ2h0XCIsXCJwYWRkaW5nVG9wXCIsXCJwYWRkaW5nQm90dG9tXCIsXCJtYXJnaW5MZWZ0XCIsXCJtYXJnaW5SaWdodFwiLFwibWFyZ2luVG9wXCIsXCJtYXJnaW5Cb3R0b21cIixcImJvcmRlckxlZnRXaWR0aFwiLFwiYm9yZGVyUmlnaHRXaWR0aFwiLFwiYm9yZGVyVG9wV2lkdGhcIixcImJvcmRlckJvdHRvbVdpZHRoXCJdLGg9dS5sZW5ndGgsZD0hMTtyZXR1cm4gc30pLGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcImRlc2FuZHJvLW1hdGNoZXMtc2VsZWN0b3IvbWF0Y2hlcy1zZWxlY3RvclwiLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUoKTp0Lm1hdGNoZXNTZWxlY3Rvcj1lKCl9KHdpbmRvdyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PWZ1bmN0aW9uKCl7dmFyIHQ9d2luZG93LkVsZW1lbnQucHJvdG90eXBlO2lmKHQubWF0Y2hlcylyZXR1cm5cIm1hdGNoZXNcIjtpZih0Lm1hdGNoZXNTZWxlY3RvcilyZXR1cm5cIm1hdGNoZXNTZWxlY3RvclwiO2Zvcih2YXIgZT1bXCJ3ZWJraXRcIixcIm1velwiLFwibXNcIixcIm9cIl0saT0wO2k8ZS5sZW5ndGg7aSsrKXt2YXIgbz1lW2ldLG49bytcIk1hdGNoZXNTZWxlY3RvclwiO2lmKHRbbl0pcmV0dXJuIG59fSgpO3JldHVybiBmdW5jdGlvbihlLGkpe3JldHVybiBlW3RdKGkpfX0pLGZ1bmN0aW9uKHQsZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcImZpenp5LXVpLXV0aWxzL3V0aWxzXCIsW1wiZGVzYW5kcm8tbWF0Y2hlcy1zZWxlY3Rvci9tYXRjaGVzLXNlbGVjdG9yXCJdLGZ1bmN0aW9uKGkpe3JldHVybiBlKHQsaSl9KTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKHQscmVxdWlyZShcImRlc2FuZHJvLW1hdGNoZXMtc2VsZWN0b3JcIikpOnQuZml6enlVSVV0aWxzPWUodCx0Lm1hdGNoZXNTZWxlY3Rvcil9KHdpbmRvdyxmdW5jdGlvbih0LGUpe3ZhciBpPXt9O2kuZXh0ZW5kPWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBpIGluIGUpdFtpXT1lW2ldO3JldHVybiB0fSxpLm1vZHVsbz1mdW5jdGlvbih0LGUpe3JldHVybih0JWUrZSklZX07dmFyIG89QXJyYXkucHJvdG90eXBlLnNsaWNlO2kubWFrZUFycmF5PWZ1bmN0aW9uKHQpe2lmKEFycmF5LmlzQXJyYXkodCkpcmV0dXJuIHQ7aWYobnVsbD09PXR8fHZvaWQgMD09PXQpcmV0dXJuW107dmFyIGU9XCJvYmplY3RcIj09dHlwZW9mIHQmJlwibnVtYmVyXCI9PXR5cGVvZiB0Lmxlbmd0aDtyZXR1cm4gZT9vLmNhbGwodCk6W3RdfSxpLnJlbW92ZUZyb209ZnVuY3Rpb24odCxlKXt2YXIgaT10LmluZGV4T2YoZSk7aSE9LTEmJnQuc3BsaWNlKGksMSl9LGkuZ2V0UGFyZW50PWZ1bmN0aW9uKHQsaSl7Zm9yKDt0LnBhcmVudE5vZGUmJnQhPWRvY3VtZW50LmJvZHk7KWlmKHQ9dC5wYXJlbnROb2RlLGUodCxpKSlyZXR1cm4gdH0saS5nZXRRdWVyeUVsZW1lbnQ9ZnVuY3Rpb24odCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQ/ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0KTp0fSxpLmhhbmRsZUV2ZW50PWZ1bmN0aW9uKHQpe3ZhciBlPVwib25cIit0LnR5cGU7dGhpc1tlXSYmdGhpc1tlXSh0KX0saS5maWx0ZXJGaW5kRWxlbWVudHM9ZnVuY3Rpb24odCxvKXt0PWkubWFrZUFycmF5KHQpO3ZhciBuPVtdO3JldHVybiB0LmZvckVhY2goZnVuY3Rpb24odCl7aWYodCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KXtpZighbylyZXR1cm4gdm9pZCBuLnB1c2godCk7ZSh0LG8pJiZuLnB1c2godCk7Zm9yKHZhciBpPXQucXVlcnlTZWxlY3RvckFsbChvKSxzPTA7czxpLmxlbmd0aDtzKyspbi5wdXNoKGlbc10pfX0pLG59LGkuZGVib3VuY2VNZXRob2Q9ZnVuY3Rpb24odCxlLGkpe2k9aXx8MTAwO3ZhciBvPXQucHJvdG90eXBlW2VdLG49ZStcIlRpbWVvdXRcIjt0LnByb3RvdHlwZVtlXT1mdW5jdGlvbigpe3ZhciB0PXRoaXNbbl07Y2xlYXJUaW1lb3V0KHQpO3ZhciBlPWFyZ3VtZW50cyxzPXRoaXM7dGhpc1tuXT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7by5hcHBseShzLGUpLGRlbGV0ZSBzW25dfSxpKX19LGkuZG9jUmVhZHk9ZnVuY3Rpb24odCl7dmFyIGU9ZG9jdW1lbnQucmVhZHlTdGF0ZTtcImNvbXBsZXRlXCI9PWV8fFwiaW50ZXJhY3RpdmVcIj09ZT9zZXRUaW1lb3V0KHQpOmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsdCl9LGkudG9EYXNoZWQ9ZnVuY3Rpb24odCl7cmV0dXJuIHQucmVwbGFjZSgvKC4pKFtBLVpdKS9nLGZ1bmN0aW9uKHQsZSxpKXtyZXR1cm4gZStcIi1cIitpfSkudG9Mb3dlckNhc2UoKX07dmFyIG49dC5jb25zb2xlO3JldHVybiBpLmh0bWxJbml0PWZ1bmN0aW9uKGUsbyl7aS5kb2NSZWFkeShmdW5jdGlvbigpe3ZhciBzPWkudG9EYXNoZWQobykscj1cImRhdGEtXCIrcyxhPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbXCIrcitcIl1cIiksdT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLVwiK3MpLGg9aS5tYWtlQXJyYXkoYSkuY29uY2F0KGkubWFrZUFycmF5KHUpKSxkPXIrXCItb3B0aW9uc1wiLGw9dC5qUXVlcnk7aC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBpLHM9dC5nZXRBdHRyaWJ1dGUocil8fHQuZ2V0QXR0cmlidXRlKGQpO3RyeXtpPXMmJkpTT04ucGFyc2Uocyl9Y2F0Y2goYSl7cmV0dXJuIHZvaWQobiYmbi5lcnJvcihcIkVycm9yIHBhcnNpbmcgXCIrcitcIiBvbiBcIit0LmNsYXNzTmFtZStcIjogXCIrYSkpfXZhciB1PW5ldyBlKHQsaSk7bCYmbC5kYXRhKHQsbyx1KX0pfSl9LGl9KSxmdW5jdGlvbih0LGUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJvdXRsYXllci9pdGVtXCIsW1wiZXYtZW1pdHRlci9ldi1lbWl0dGVyXCIsXCJnZXQtc2l6ZS9nZXQtc2l6ZVwiXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKHJlcXVpcmUoXCJldi1lbWl0dGVyXCIpLHJlcXVpcmUoXCJnZXQtc2l6ZVwiKSk6KHQuT3V0bGF5ZXI9e30sdC5PdXRsYXllci5JdGVtPWUodC5FdkVtaXR0ZXIsdC5nZXRTaXplKSl9KHdpbmRvdyxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGkodCl7Zm9yKHZhciBlIGluIHQpcmV0dXJuITE7cmV0dXJuIGU9bnVsbCwhMH1mdW5jdGlvbiBvKHQsZSl7dCYmKHRoaXMuZWxlbWVudD10LHRoaXMubGF5b3V0PWUsdGhpcy5wb3NpdGlvbj17eDowLHk6MH0sdGhpcy5fY3JlYXRlKCkpfWZ1bmN0aW9uIG4odCl7cmV0dXJuIHQucmVwbGFjZSgvKFtBLVpdKS9nLGZ1bmN0aW9uKHQpe3JldHVyblwiLVwiK3QudG9Mb3dlckNhc2UoKX0pfXZhciBzPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSxyPVwic3RyaW5nXCI9PXR5cGVvZiBzLnRyYW5zaXRpb24/XCJ0cmFuc2l0aW9uXCI6XCJXZWJraXRUcmFuc2l0aW9uXCIsYT1cInN0cmluZ1wiPT10eXBlb2Ygcy50cmFuc2Zvcm0/XCJ0cmFuc2Zvcm1cIjpcIldlYmtpdFRyYW5zZm9ybVwiLHU9e1dlYmtpdFRyYW5zaXRpb246XCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIsdHJhbnNpdGlvbjpcInRyYW5zaXRpb25lbmRcIn1bcl0saD17dHJhbnNmb3JtOmEsdHJhbnNpdGlvbjpyLHRyYW5zaXRpb25EdXJhdGlvbjpyK1wiRHVyYXRpb25cIix0cmFuc2l0aW9uUHJvcGVydHk6citcIlByb3BlcnR5XCIsdHJhbnNpdGlvbkRlbGF5OnIrXCJEZWxheVwifSxkPW8ucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodC5wcm90b3R5cGUpO2QuY29uc3RydWN0b3I9byxkLl9jcmVhdGU9ZnVuY3Rpb24oKXt0aGlzLl90cmFuc249e2luZ1Byb3BlcnRpZXM6e30sY2xlYW46e30sb25FbmQ6e319LHRoaXMuY3NzKHtwb3NpdGlvbjpcImFic29sdXRlXCJ9KX0sZC5oYW5kbGVFdmVudD1mdW5jdGlvbih0KXt2YXIgZT1cIm9uXCIrdC50eXBlO3RoaXNbZV0mJnRoaXNbZV0odCl9LGQuZ2V0U2l6ZT1mdW5jdGlvbigpe3RoaXMuc2l6ZT1lKHRoaXMuZWxlbWVudCl9LGQuY3NzPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuZWxlbWVudC5zdHlsZTtmb3IodmFyIGkgaW4gdCl7dmFyIG89aFtpXXx8aTtlW29dPXRbaV19fSxkLmdldFBvc2l0aW9uPWZ1bmN0aW9uKCl7dmFyIHQ9Z2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpLGU9dGhpcy5sYXlvdXQuX2dldE9wdGlvbihcIm9yaWdpbkxlZnRcIiksaT10aGlzLmxheW91dC5fZ2V0T3B0aW9uKFwib3JpZ2luVG9wXCIpLG89dFtlP1wibGVmdFwiOlwicmlnaHRcIl0sbj10W2k/XCJ0b3BcIjpcImJvdHRvbVwiXSxzPXBhcnNlRmxvYXQobykscj1wYXJzZUZsb2F0KG4pLGE9dGhpcy5sYXlvdXQuc2l6ZTtvLmluZGV4T2YoXCIlXCIpIT0tMSYmKHM9cy8xMDAqYS53aWR0aCksbi5pbmRleE9mKFwiJVwiKSE9LTEmJihyPXIvMTAwKmEuaGVpZ2h0KSxzPWlzTmFOKHMpPzA6cyxyPWlzTmFOKHIpPzA6cixzLT1lP2EucGFkZGluZ0xlZnQ6YS5wYWRkaW5nUmlnaHQsci09aT9hLnBhZGRpbmdUb3A6YS5wYWRkaW5nQm90dG9tLHRoaXMucG9zaXRpb24ueD1zLHRoaXMucG9zaXRpb24ueT1yfSxkLmxheW91dFBvc2l0aW9uPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5sYXlvdXQuc2l6ZSxlPXt9LGk9dGhpcy5sYXlvdXQuX2dldE9wdGlvbihcIm9yaWdpbkxlZnRcIiksbz10aGlzLmxheW91dC5fZ2V0T3B0aW9uKFwib3JpZ2luVG9wXCIpLG49aT9cInBhZGRpbmdMZWZ0XCI6XCJwYWRkaW5nUmlnaHRcIixzPWk/XCJsZWZ0XCI6XCJyaWdodFwiLHI9aT9cInJpZ2h0XCI6XCJsZWZ0XCIsYT10aGlzLnBvc2l0aW9uLngrdFtuXTtlW3NdPXRoaXMuZ2V0WFZhbHVlKGEpLGVbcl09XCJcIjt2YXIgdT1vP1wicGFkZGluZ1RvcFwiOlwicGFkZGluZ0JvdHRvbVwiLGg9bz9cInRvcFwiOlwiYm90dG9tXCIsZD1vP1wiYm90dG9tXCI6XCJ0b3BcIixsPXRoaXMucG9zaXRpb24ueSt0W3VdO2VbaF09dGhpcy5nZXRZVmFsdWUobCksZVtkXT1cIlwiLHRoaXMuY3NzKGUpLHRoaXMuZW1pdEV2ZW50KFwibGF5b3V0XCIsW3RoaXNdKX0sZC5nZXRYVmFsdWU9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5sYXlvdXQuX2dldE9wdGlvbihcImhvcml6b250YWxcIik7cmV0dXJuIHRoaXMubGF5b3V0Lm9wdGlvbnMucGVyY2VudFBvc2l0aW9uJiYhZT90L3RoaXMubGF5b3V0LnNpemUud2lkdGgqMTAwK1wiJVwiOnQrXCJweFwifSxkLmdldFlWYWx1ZT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmxheW91dC5fZ2V0T3B0aW9uKFwiaG9yaXpvbnRhbFwiKTtyZXR1cm4gdGhpcy5sYXlvdXQub3B0aW9ucy5wZXJjZW50UG9zaXRpb24mJmU/dC90aGlzLmxheW91dC5zaXplLmhlaWdodCoxMDArXCIlXCI6dCtcInB4XCJ9LGQuX3RyYW5zaXRpb25Ubz1mdW5jdGlvbih0LGUpe3RoaXMuZ2V0UG9zaXRpb24oKTt2YXIgaT10aGlzLnBvc2l0aW9uLngsbz10aGlzLnBvc2l0aW9uLnksbj10PT10aGlzLnBvc2l0aW9uLngmJmU9PXRoaXMucG9zaXRpb24ueTtpZih0aGlzLnNldFBvc2l0aW9uKHQsZSksbiYmIXRoaXMuaXNUcmFuc2l0aW9uaW5nKXJldHVybiB2b2lkIHRoaXMubGF5b3V0UG9zaXRpb24oKTt2YXIgcz10LWkscj1lLW8sYT17fTthLnRyYW5zZm9ybT10aGlzLmdldFRyYW5zbGF0ZShzLHIpLHRoaXMudHJhbnNpdGlvbih7dG86YSxvblRyYW5zaXRpb25FbmQ6e3RyYW5zZm9ybTp0aGlzLmxheW91dFBvc2l0aW9ufSxpc0NsZWFuaW5nOiEwfSl9LGQuZ2V0VHJhbnNsYXRlPWZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy5sYXlvdXQuX2dldE9wdGlvbihcIm9yaWdpbkxlZnRcIiksbz10aGlzLmxheW91dC5fZ2V0T3B0aW9uKFwib3JpZ2luVG9wXCIpO3JldHVybiB0PWk/dDotdCxlPW8/ZTotZSxcInRyYW5zbGF0ZTNkKFwiK3QrXCJweCwgXCIrZStcInB4LCAwKVwifSxkLmdvVG89ZnVuY3Rpb24odCxlKXt0aGlzLnNldFBvc2l0aW9uKHQsZSksdGhpcy5sYXlvdXRQb3NpdGlvbigpfSxkLm1vdmVUbz1kLl90cmFuc2l0aW9uVG8sZC5zZXRQb3NpdGlvbj1mdW5jdGlvbih0LGUpe3RoaXMucG9zaXRpb24ueD1wYXJzZUZsb2F0KHQpLHRoaXMucG9zaXRpb24ueT1wYXJzZUZsb2F0KGUpfSxkLl9ub25UcmFuc2l0aW9uPWZ1bmN0aW9uKHQpe3RoaXMuY3NzKHQudG8pLHQuaXNDbGVhbmluZyYmdGhpcy5fcmVtb3ZlU3R5bGVzKHQudG8pO2Zvcih2YXIgZSBpbiB0Lm9uVHJhbnNpdGlvbkVuZCl0Lm9uVHJhbnNpdGlvbkVuZFtlXS5jYWxsKHRoaXMpfSxkLnRyYW5zaXRpb249ZnVuY3Rpb24odCl7aWYoIXBhcnNlRmxvYXQodGhpcy5sYXlvdXQub3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb24pKXJldHVybiB2b2lkIHRoaXMuX25vblRyYW5zaXRpb24odCk7dmFyIGU9dGhpcy5fdHJhbnNuO2Zvcih2YXIgaSBpbiB0Lm9uVHJhbnNpdGlvbkVuZCllLm9uRW5kW2ldPXQub25UcmFuc2l0aW9uRW5kW2ldO2ZvcihpIGluIHQudG8pZS5pbmdQcm9wZXJ0aWVzW2ldPSEwLHQuaXNDbGVhbmluZyYmKGUuY2xlYW5baV09ITApO2lmKHQuZnJvbSl7dGhpcy5jc3ModC5mcm9tKTt2YXIgbz10aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0O289bnVsbH10aGlzLmVuYWJsZVRyYW5zaXRpb24odC50byksdGhpcy5jc3ModC50byksdGhpcy5pc1RyYW5zaXRpb25pbmc9ITB9O3ZhciBsPVwib3BhY2l0eSxcIituKGEpO2QuZW5hYmxlVHJhbnNpdGlvbj1mdW5jdGlvbigpe2lmKCF0aGlzLmlzVHJhbnNpdGlvbmluZyl7dmFyIHQ9dGhpcy5sYXlvdXQub3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb247dD1cIm51bWJlclwiPT10eXBlb2YgdD90K1wibXNcIjp0LHRoaXMuY3NzKHt0cmFuc2l0aW9uUHJvcGVydHk6bCx0cmFuc2l0aW9uRHVyYXRpb246dCx0cmFuc2l0aW9uRGVsYXk6dGhpcy5zdGFnZ2VyRGVsYXl8fDB9KSx0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih1LHRoaXMsITEpfX0sZC5vbndlYmtpdFRyYW5zaXRpb25FbmQ9ZnVuY3Rpb24odCl7dGhpcy5vbnRyYW5zaXRpb25lbmQodCl9LGQub25vdHJhbnNpdGlvbmVuZD1mdW5jdGlvbih0KXt0aGlzLm9udHJhbnNpdGlvbmVuZCh0KX07dmFyIGY9e1wiLXdlYmtpdC10cmFuc2Zvcm1cIjpcInRyYW5zZm9ybVwifTtkLm9udHJhbnNpdGlvbmVuZD1mdW5jdGlvbih0KXtpZih0LnRhcmdldD09PXRoaXMuZWxlbWVudCl7dmFyIGU9dGhpcy5fdHJhbnNuLG89Zlt0LnByb3BlcnR5TmFtZV18fHQucHJvcGVydHlOYW1lO2lmKGRlbGV0ZSBlLmluZ1Byb3BlcnRpZXNbb10saShlLmluZ1Byb3BlcnRpZXMpJiZ0aGlzLmRpc2FibGVUcmFuc2l0aW9uKCksbyBpbiBlLmNsZWFuJiYodGhpcy5lbGVtZW50LnN0eWxlW3QucHJvcGVydHlOYW1lXT1cIlwiLGRlbGV0ZSBlLmNsZWFuW29dKSxvIGluIGUub25FbmQpe3ZhciBuPWUub25FbmRbb107bi5jYWxsKHRoaXMpLGRlbGV0ZSBlLm9uRW5kW29dfXRoaXMuZW1pdEV2ZW50KFwidHJhbnNpdGlvbkVuZFwiLFt0aGlzXSl9fSxkLmRpc2FibGVUcmFuc2l0aW9uPWZ1bmN0aW9uKCl7dGhpcy5yZW1vdmVUcmFuc2l0aW9uU3R5bGVzKCksdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodSx0aGlzLCExKSx0aGlzLmlzVHJhbnNpdGlvbmluZz0hMX0sZC5fcmVtb3ZlU3R5bGVzPWZ1bmN0aW9uKHQpe3ZhciBlPXt9O2Zvcih2YXIgaSBpbiB0KWVbaV09XCJcIjt0aGlzLmNzcyhlKX07dmFyIGM9e3RyYW5zaXRpb25Qcm9wZXJ0eTpcIlwiLHRyYW5zaXRpb25EdXJhdGlvbjpcIlwiLHRyYW5zaXRpb25EZWxheTpcIlwifTtyZXR1cm4gZC5yZW1vdmVUcmFuc2l0aW9uU3R5bGVzPWZ1bmN0aW9uKCl7dGhpcy5jc3MoYyl9LGQuc3RhZ2dlcj1mdW5jdGlvbih0KXt0PWlzTmFOKHQpPzA6dCx0aGlzLnN0YWdnZXJEZWxheT10K1wibXNcIn0sZC5yZW1vdmVFbGVtPWZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KSx0aGlzLmNzcyh7ZGlzcGxheTpcIlwifSksdGhpcy5lbWl0RXZlbnQoXCJyZW1vdmVcIixbdGhpc10pfSxkLnJlbW92ZT1mdW5jdGlvbigpe3JldHVybiByJiZwYXJzZUZsb2F0KHRoaXMubGF5b3V0Lm9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uKT8odGhpcy5vbmNlKFwidHJhbnNpdGlvbkVuZFwiLGZ1bmN0aW9uKCl7dGhpcy5yZW1vdmVFbGVtKCl9KSx2b2lkIHRoaXMuaGlkZSgpKTp2b2lkIHRoaXMucmVtb3ZlRWxlbSgpfSxkLnJldmVhbD1mdW5jdGlvbigpe2RlbGV0ZSB0aGlzLmlzSGlkZGVuLHRoaXMuY3NzKHtkaXNwbGF5OlwiXCJ9KTt2YXIgdD10aGlzLmxheW91dC5vcHRpb25zLGU9e30saT10aGlzLmdldEhpZGVSZXZlYWxUcmFuc2l0aW9uRW5kUHJvcGVydHkoXCJ2aXNpYmxlU3R5bGVcIik7ZVtpXT10aGlzLm9uUmV2ZWFsVHJhbnNpdGlvbkVuZCx0aGlzLnRyYW5zaXRpb24oe2Zyb206dC5oaWRkZW5TdHlsZSx0bzp0LnZpc2libGVTdHlsZSxpc0NsZWFuaW5nOiEwLG9uVHJhbnNpdGlvbkVuZDplfSl9LGQub25SZXZlYWxUcmFuc2l0aW9uRW5kPWZ1bmN0aW9uKCl7dGhpcy5pc0hpZGRlbnx8dGhpcy5lbWl0RXZlbnQoXCJyZXZlYWxcIil9LGQuZ2V0SGlkZVJldmVhbFRyYW5zaXRpb25FbmRQcm9wZXJ0eT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmxheW91dC5vcHRpb25zW3RdO2lmKGUub3BhY2l0eSlyZXR1cm5cIm9wYWNpdHlcIjtmb3IodmFyIGkgaW4gZSlyZXR1cm4gaX0sZC5oaWRlPWZ1bmN0aW9uKCl7dGhpcy5pc0hpZGRlbj0hMCx0aGlzLmNzcyh7ZGlzcGxheTpcIlwifSk7dmFyIHQ9dGhpcy5sYXlvdXQub3B0aW9ucyxlPXt9LGk9dGhpcy5nZXRIaWRlUmV2ZWFsVHJhbnNpdGlvbkVuZFByb3BlcnR5KFwiaGlkZGVuU3R5bGVcIik7ZVtpXT10aGlzLm9uSGlkZVRyYW5zaXRpb25FbmQsdGhpcy50cmFuc2l0aW9uKHtmcm9tOnQudmlzaWJsZVN0eWxlLHRvOnQuaGlkZGVuU3R5bGUsaXNDbGVhbmluZzohMCxvblRyYW5zaXRpb25FbmQ6ZX0pfSxkLm9uSGlkZVRyYW5zaXRpb25FbmQ9ZnVuY3Rpb24oKXt0aGlzLmlzSGlkZGVuJiYodGhpcy5jc3Moe2Rpc3BsYXk6XCJub25lXCJ9KSx0aGlzLmVtaXRFdmVudChcImhpZGVcIikpfSxkLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0aGlzLmNzcyh7cG9zaXRpb246XCJcIixsZWZ0OlwiXCIscmlnaHQ6XCJcIix0b3A6XCJcIixib3R0b206XCJcIix0cmFuc2l0aW9uOlwiXCIsdHJhbnNmb3JtOlwiXCJ9KX0sb30pLGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcIm91dGxheWVyL291dGxheWVyXCIsW1wiZXYtZW1pdHRlci9ldi1lbWl0dGVyXCIsXCJnZXQtc2l6ZS9nZXQtc2l6ZVwiLFwiZml6enktdWktdXRpbHMvdXRpbHNcIixcIi4vaXRlbVwiXSxmdW5jdGlvbihpLG8sbixzKXtyZXR1cm4gZSh0LGksbyxuLHMpfSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZSh0LHJlcXVpcmUoXCJldi1lbWl0dGVyXCIpLHJlcXVpcmUoXCJnZXQtc2l6ZVwiKSxyZXF1aXJlKFwiZml6enktdWktdXRpbHNcIikscmVxdWlyZShcIi4vaXRlbVwiKSk6dC5PdXRsYXllcj1lKHQsdC5FdkVtaXR0ZXIsdC5nZXRTaXplLHQuZml6enlVSVV0aWxzLHQuT3V0bGF5ZXIuSXRlbSl9KHdpbmRvdyxmdW5jdGlvbih0LGUsaSxvLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHModCxlKXt2YXIgaT1vLmdldFF1ZXJ5RWxlbWVudCh0KTtpZighaSlyZXR1cm4gdm9pZCh1JiZ1LmVycm9yKFwiQmFkIGVsZW1lbnQgZm9yIFwiK3RoaXMuY29uc3RydWN0b3IubmFtZXNwYWNlK1wiOiBcIisoaXx8dCkpKTt0aGlzLmVsZW1lbnQ9aSxoJiYodGhpcy4kZWxlbWVudD1oKHRoaXMuZWxlbWVudCkpLHRoaXMub3B0aW9ucz1vLmV4dGVuZCh7fSx0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRzKSx0aGlzLm9wdGlvbihlKTt2YXIgbj0rK2w7dGhpcy5lbGVtZW50Lm91dGxheWVyR1VJRD1uLGZbbl09dGhpcyx0aGlzLl9jcmVhdGUoKTt2YXIgcz10aGlzLl9nZXRPcHRpb24oXCJpbml0TGF5b3V0XCIpO3MmJnRoaXMubGF5b3V0KCl9ZnVuY3Rpb24gcih0KXtmdW5jdGlvbiBlKCl7dC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9cmV0dXJuIGUucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodC5wcm90b3R5cGUpLGUucHJvdG90eXBlLmNvbnN0cnVjdG9yPWUsZX1mdW5jdGlvbiBhKHQpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiB0KXJldHVybiB0O3ZhciBlPXQubWF0Y2goLyheXFxkKlxcLj9cXGQqKShcXHcqKS8pLGk9ZSYmZVsxXSxvPWUmJmVbMl07aWYoIWkubGVuZ3RoKXJldHVybiAwO2k9cGFyc2VGbG9hdChpKTt2YXIgbj1tW29dfHwxO3JldHVybiBpKm59dmFyIHU9dC5jb25zb2xlLGg9dC5qUXVlcnksZD1mdW5jdGlvbigpe30sbD0wLGY9e307cy5uYW1lc3BhY2U9XCJvdXRsYXllclwiLHMuSXRlbT1uLHMuZGVmYXVsdHM9e2NvbnRhaW5lclN0eWxlOntwb3NpdGlvbjpcInJlbGF0aXZlXCJ9LGluaXRMYXlvdXQ6ITAsb3JpZ2luTGVmdDohMCxvcmlnaW5Ub3A6ITAscmVzaXplOiEwLHJlc2l6ZUNvbnRhaW5lcjohMCx0cmFuc2l0aW9uRHVyYXRpb246XCIwLjRzXCIsaGlkZGVuU3R5bGU6e29wYWNpdHk6MCx0cmFuc2Zvcm06XCJzY2FsZSgwLjAwMSlcIn0sdmlzaWJsZVN0eWxlOntvcGFjaXR5OjEsdHJhbnNmb3JtOlwic2NhbGUoMSlcIn19O3ZhciBjPXMucHJvdG90eXBlO28uZXh0ZW5kKGMsZS5wcm90b3R5cGUpLGMub3B0aW9uPWZ1bmN0aW9uKHQpe28uZXh0ZW5kKHRoaXMub3B0aW9ucyx0KX0sYy5fZ2V0T3B0aW9uPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuY29uc3RydWN0b3IuY29tcGF0T3B0aW9uc1t0XTtyZXR1cm4gZSYmdm9pZCAwIT09dGhpcy5vcHRpb25zW2VdP3RoaXMub3B0aW9uc1tlXTp0aGlzLm9wdGlvbnNbdF19LHMuY29tcGF0T3B0aW9ucz17aW5pdExheW91dDpcImlzSW5pdExheW91dFwiLGhvcml6b250YWw6XCJpc0hvcml6b250YWxcIixsYXlvdXRJbnN0YW50OlwiaXNMYXlvdXRJbnN0YW50XCIsb3JpZ2luTGVmdDpcImlzT3JpZ2luTGVmdFwiLG9yaWdpblRvcDpcImlzT3JpZ2luVG9wXCIscmVzaXplOlwiaXNSZXNpemVCb3VuZFwiLHJlc2l6ZUNvbnRhaW5lcjpcImlzUmVzaXppbmdDb250YWluZXJcIn0sYy5fY3JlYXRlPWZ1bmN0aW9uKCl7dGhpcy5yZWxvYWRJdGVtcygpLHRoaXMuc3RhbXBzPVtdLHRoaXMuc3RhbXAodGhpcy5vcHRpb25zLnN0YW1wKSxvLmV4dGVuZCh0aGlzLmVsZW1lbnQuc3R5bGUsdGhpcy5vcHRpb25zLmNvbnRhaW5lclN0eWxlKTt2YXIgdD10aGlzLl9nZXRPcHRpb24oXCJyZXNpemVcIik7dCYmdGhpcy5iaW5kUmVzaXplKCl9LGMucmVsb2FkSXRlbXM9ZnVuY3Rpb24oKXt0aGlzLml0ZW1zPXRoaXMuX2l0ZW1pemUodGhpcy5lbGVtZW50LmNoaWxkcmVuKX0sYy5faXRlbWl6ZT1mdW5jdGlvbih0KXtmb3IodmFyIGU9dGhpcy5fZmlsdGVyRmluZEl0ZW1FbGVtZW50cyh0KSxpPXRoaXMuY29uc3RydWN0b3IuSXRlbSxvPVtdLG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIHM9ZVtuXSxyPW5ldyBpKHMsdGhpcyk7by5wdXNoKHIpfXJldHVybiBvfSxjLl9maWx0ZXJGaW5kSXRlbUVsZW1lbnRzPWZ1bmN0aW9uKHQpe3JldHVybiBvLmZpbHRlckZpbmRFbGVtZW50cyh0LHRoaXMub3B0aW9ucy5pdGVtU2VsZWN0b3IpfSxjLmdldEl0ZW1FbGVtZW50cz1mdW5jdGlvbigpe3JldHVybiB0aGlzLml0ZW1zLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gdC5lbGVtZW50fSl9LGMubGF5b3V0PWZ1bmN0aW9uKCl7dGhpcy5fcmVzZXRMYXlvdXQoKSx0aGlzLl9tYW5hZ2VTdGFtcHMoKTt2YXIgdD10aGlzLl9nZXRPcHRpb24oXCJsYXlvdXRJbnN0YW50XCIpLGU9dm9pZCAwIT09dD90OiF0aGlzLl9pc0xheW91dEluaXRlZDt0aGlzLmxheW91dEl0ZW1zKHRoaXMuaXRlbXMsZSksdGhpcy5faXNMYXlvdXRJbml0ZWQ9ITB9LGMuX2luaXQ9Yy5sYXlvdXQsYy5fcmVzZXRMYXlvdXQ9ZnVuY3Rpb24oKXt0aGlzLmdldFNpemUoKX0sYy5nZXRTaXplPWZ1bmN0aW9uKCl7dGhpcy5zaXplPWkodGhpcy5lbGVtZW50KX0sYy5fZ2V0TWVhc3VyZW1lbnQ9ZnVuY3Rpb24odCxlKXt2YXIgbyxuPXRoaXMub3B0aW9uc1t0XTtuPyhcInN0cmluZ1wiPT10eXBlb2Ygbj9vPXRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKG4pOm4gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCYmKG89biksdGhpc1t0XT1vP2kobylbZV06bik6dGhpc1t0XT0wfSxjLmxheW91dEl0ZW1zPWZ1bmN0aW9uKHQsZSl7dD10aGlzLl9nZXRJdGVtc0ZvckxheW91dCh0KSx0aGlzLl9sYXlvdXRJdGVtcyh0LGUpLHRoaXMuX3Bvc3RMYXlvdXQoKX0sYy5fZ2V0SXRlbXNGb3JMYXlvdXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHQuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiF0LmlzSWdub3JlZH0pfSxjLl9sYXlvdXRJdGVtcz1mdW5jdGlvbih0LGUpe2lmKHRoaXMuX2VtaXRDb21wbGV0ZU9uSXRlbXMoXCJsYXlvdXRcIix0KSx0JiZ0Lmxlbmd0aCl7dmFyIGk9W107dC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBvPXRoaXMuX2dldEl0ZW1MYXlvdXRQb3NpdGlvbih0KTtvLml0ZW09dCxvLmlzSW5zdGFudD1lfHx0LmlzTGF5b3V0SW5zdGFudCxpLnB1c2gobyl9LHRoaXMpLHRoaXMuX3Byb2Nlc3NMYXlvdXRRdWV1ZShpKX19LGMuX2dldEl0ZW1MYXlvdXRQb3NpdGlvbj1mdW5jdGlvbigpe3JldHVybnt4OjAseTowfX0sYy5fcHJvY2Vzc0xheW91dFF1ZXVlPWZ1bmN0aW9uKHQpe3RoaXMudXBkYXRlU3RhZ2dlcigpLHQuZm9yRWFjaChmdW5jdGlvbih0LGUpe3RoaXMuX3Bvc2l0aW9uSXRlbSh0Lml0ZW0sdC54LHQueSx0LmlzSW5zdGFudCxlKX0sdGhpcyl9LGMudXBkYXRlU3RhZ2dlcj1mdW5jdGlvbigpe3ZhciB0PXRoaXMub3B0aW9ucy5zdGFnZ2VyO3JldHVybiBudWxsPT09dHx8dm9pZCAwPT09dD92b2lkKHRoaXMuc3RhZ2dlcj0wKToodGhpcy5zdGFnZ2VyPWEodCksdGhpcy5zdGFnZ2VyKX0sYy5fcG9zaXRpb25JdGVtPWZ1bmN0aW9uKHQsZSxpLG8sbil7bz90LmdvVG8oZSxpKToodC5zdGFnZ2VyKG4qdGhpcy5zdGFnZ2VyKSx0Lm1vdmVUbyhlLGkpKX0sYy5fcG9zdExheW91dD1mdW5jdGlvbigpe3RoaXMucmVzaXplQ29udGFpbmVyKCl9LGMucmVzaXplQ29udGFpbmVyPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fZ2V0T3B0aW9uKFwicmVzaXplQ29udGFpbmVyXCIpO2lmKHQpe3ZhciBlPXRoaXMuX2dldENvbnRhaW5lclNpemUoKTtlJiYodGhpcy5fc2V0Q29udGFpbmVyTWVhc3VyZShlLndpZHRoLCEwKSx0aGlzLl9zZXRDb250YWluZXJNZWFzdXJlKGUuaGVpZ2h0LCExKSl9fSxjLl9nZXRDb250YWluZXJTaXplPWQsYy5fc2V0Q29udGFpbmVyTWVhc3VyZT1mdW5jdGlvbih0LGUpe2lmKHZvaWQgMCE9PXQpe3ZhciBpPXRoaXMuc2l6ZTtpLmlzQm9yZGVyQm94JiYodCs9ZT9pLnBhZGRpbmdMZWZ0K2kucGFkZGluZ1JpZ2h0K2kuYm9yZGVyTGVmdFdpZHRoK2kuYm9yZGVyUmlnaHRXaWR0aDppLnBhZGRpbmdCb3R0b20raS5wYWRkaW5nVG9wK2kuYm9yZGVyVG9wV2lkdGgraS5ib3JkZXJCb3R0b21XaWR0aCksdD1NYXRoLm1heCh0LDApLHRoaXMuZWxlbWVudC5zdHlsZVtlP1wid2lkdGhcIjpcImhlaWdodFwiXT10K1wicHhcIn19LGMuX2VtaXRDb21wbGV0ZU9uSXRlbXM9ZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBpKCl7bi5kaXNwYXRjaEV2ZW50KHQrXCJDb21wbGV0ZVwiLG51bGwsW2VdKX1mdW5jdGlvbiBvKCl7cisrLHI9PXMmJmkoKX12YXIgbj10aGlzLHM9ZS5sZW5ndGg7aWYoIWV8fCFzKXJldHVybiB2b2lkIGkoKTt2YXIgcj0wO2UuZm9yRWFjaChmdW5jdGlvbihlKXtlLm9uY2UodCxvKX0pfSxjLmRpc3BhdGNoRXZlbnQ9ZnVuY3Rpb24odCxlLGkpe3ZhciBvPWU/W2VdLmNvbmNhdChpKTppO2lmKHRoaXMuZW1pdEV2ZW50KHQsbyksaClpZih0aGlzLiRlbGVtZW50PXRoaXMuJGVsZW1lbnR8fGgodGhpcy5lbGVtZW50KSxlKXt2YXIgbj1oLkV2ZW50KGUpO24udHlwZT10LHRoaXMuJGVsZW1lbnQudHJpZ2dlcihuLGkpfWVsc2UgdGhpcy4kZWxlbWVudC50cmlnZ2VyKHQsaSl9LGMuaWdub3JlPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuZ2V0SXRlbSh0KTtlJiYoZS5pc0lnbm9yZWQ9ITApfSxjLnVuaWdub3JlPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuZ2V0SXRlbSh0KTtlJiZkZWxldGUgZS5pc0lnbm9yZWR9LGMuc3RhbXA9ZnVuY3Rpb24odCl7dD10aGlzLl9maW5kKHQpLHQmJih0aGlzLnN0YW1wcz10aGlzLnN0YW1wcy5jb25jYXQodCksdC5mb3JFYWNoKHRoaXMuaWdub3JlLHRoaXMpKX0sYy51bnN0YW1wPWZ1bmN0aW9uKHQpe3Q9dGhpcy5fZmluZCh0KSx0JiZ0LmZvckVhY2goZnVuY3Rpb24odCl7by5yZW1vdmVGcm9tKHRoaXMuc3RhbXBzLHQpLHRoaXMudW5pZ25vcmUodCl9LHRoaXMpfSxjLl9maW5kPWZ1bmN0aW9uKHQpe2lmKHQpcmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PXRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHQpKSx0PW8ubWFrZUFycmF5KHQpfSxjLl9tYW5hZ2VTdGFtcHM9ZnVuY3Rpb24oKXt0aGlzLnN0YW1wcyYmdGhpcy5zdGFtcHMubGVuZ3RoJiYodGhpcy5fZ2V0Qm91bmRpbmdSZWN0KCksdGhpcy5zdGFtcHMuZm9yRWFjaCh0aGlzLl9tYW5hZ2VTdGFtcCx0aGlzKSl9LGMuX2dldEJvdW5kaW5nUmVjdD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxlPXRoaXMuc2l6ZTt0aGlzLl9ib3VuZGluZ1JlY3Q9e2xlZnQ6dC5sZWZ0K2UucGFkZGluZ0xlZnQrZS5ib3JkZXJMZWZ0V2lkdGgsdG9wOnQudG9wK2UucGFkZGluZ1RvcCtlLmJvcmRlclRvcFdpZHRoLHJpZ2h0OnQucmlnaHQtKGUucGFkZGluZ1JpZ2h0K2UuYm9yZGVyUmlnaHRXaWR0aCksYm90dG9tOnQuYm90dG9tLShlLnBhZGRpbmdCb3R0b20rZS5ib3JkZXJCb3R0b21XaWR0aCl9fSxjLl9tYW5hZ2VTdGFtcD1kLGMuX2dldEVsZW1lbnRPZmZzZXQ9ZnVuY3Rpb24odCl7dmFyIGU9dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxvPXRoaXMuX2JvdW5kaW5nUmVjdCxuPWkodCkscz17bGVmdDplLmxlZnQtby5sZWZ0LW4ubWFyZ2luTGVmdCx0b3A6ZS50b3Atby50b3Atbi5tYXJnaW5Ub3AscmlnaHQ6by5yaWdodC1lLnJpZ2h0LW4ubWFyZ2luUmlnaHQsYm90dG9tOm8uYm90dG9tLWUuYm90dG9tLW4ubWFyZ2luQm90dG9tfTtyZXR1cm4gc30sYy5oYW5kbGVFdmVudD1vLmhhbmRsZUV2ZW50LGMuYmluZFJlc2l6ZT1mdW5jdGlvbigpe3QuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMpLHRoaXMuaXNSZXNpemVCb3VuZD0hMH0sYy51bmJpbmRSZXNpemU9ZnVuY3Rpb24oKXt0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzKSx0aGlzLmlzUmVzaXplQm91bmQ9ITF9LGMub25yZXNpemU9ZnVuY3Rpb24oKXt0aGlzLnJlc2l6ZSgpfSxvLmRlYm91bmNlTWV0aG9kKHMsXCJvbnJlc2l6ZVwiLDEwMCksYy5yZXNpemU9ZnVuY3Rpb24oKXt0aGlzLmlzUmVzaXplQm91bmQmJnRoaXMubmVlZHNSZXNpemVMYXlvdXQoKSYmdGhpcy5sYXlvdXQoKX0sYy5uZWVkc1Jlc2l6ZUxheW91dD1mdW5jdGlvbigpe3ZhciB0PWkodGhpcy5lbGVtZW50KSxlPXRoaXMuc2l6ZSYmdDtyZXR1cm4gZSYmdC5pbm5lcldpZHRoIT09dGhpcy5zaXplLmlubmVyV2lkdGh9LGMuYWRkSXRlbXM9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5faXRlbWl6ZSh0KTtyZXR1cm4gZS5sZW5ndGgmJih0aGlzLml0ZW1zPXRoaXMuaXRlbXMuY29uY2F0KGUpKSxlfSxjLmFwcGVuZGVkPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuYWRkSXRlbXModCk7ZS5sZW5ndGgmJih0aGlzLmxheW91dEl0ZW1zKGUsITApLHRoaXMucmV2ZWFsKGUpKX0sYy5wcmVwZW5kZWQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5faXRlbWl6ZSh0KTtpZihlLmxlbmd0aCl7dmFyIGk9dGhpcy5pdGVtcy5zbGljZSgwKTt0aGlzLml0ZW1zPWUuY29uY2F0KGkpLHRoaXMuX3Jlc2V0TGF5b3V0KCksdGhpcy5fbWFuYWdlU3RhbXBzKCksdGhpcy5sYXlvdXRJdGVtcyhlLCEwKSx0aGlzLnJldmVhbChlKSx0aGlzLmxheW91dEl0ZW1zKGkpfX0sYy5yZXZlYWw9ZnVuY3Rpb24odCl7aWYodGhpcy5fZW1pdENvbXBsZXRlT25JdGVtcyhcInJldmVhbFwiLHQpLHQmJnQubGVuZ3RoKXt2YXIgZT10aGlzLnVwZGF0ZVN0YWdnZXIoKTt0LmZvckVhY2goZnVuY3Rpb24odCxpKXt0LnN0YWdnZXIoaSplKSx0LnJldmVhbCgpfSl9fSxjLmhpZGU9ZnVuY3Rpb24odCl7aWYodGhpcy5fZW1pdENvbXBsZXRlT25JdGVtcyhcImhpZGVcIix0KSx0JiZ0Lmxlbmd0aCl7dmFyIGU9dGhpcy51cGRhdGVTdGFnZ2VyKCk7dC5mb3JFYWNoKGZ1bmN0aW9uKHQsaSl7dC5zdGFnZ2VyKGkqZSksdC5oaWRlKCl9KX19LGMucmV2ZWFsSXRlbUVsZW1lbnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuZ2V0SXRlbXModCk7dGhpcy5yZXZlYWwoZSl9LGMuaGlkZUl0ZW1FbGVtZW50cz1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmdldEl0ZW1zKHQpO3RoaXMuaGlkZShlKX0sYy5nZXRJdGVtPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8dGhpcy5pdGVtcy5sZW5ndGg7ZSsrKXt2YXIgaT10aGlzLml0ZW1zW2VdO2lmKGkuZWxlbWVudD09dClyZXR1cm4gaX19LGMuZ2V0SXRlbXM9ZnVuY3Rpb24odCl7dD1vLm1ha2VBcnJheSh0KTt2YXIgZT1bXTtyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBpPXRoaXMuZ2V0SXRlbSh0KTtpJiZlLnB1c2goaSl9LHRoaXMpLGV9LGMucmVtb3ZlPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuZ2V0SXRlbXModCk7dGhpcy5fZW1pdENvbXBsZXRlT25JdGVtcyhcInJlbW92ZVwiLGUpLGUmJmUubGVuZ3RoJiZlLmZvckVhY2goZnVuY3Rpb24odCl7dC5yZW1vdmUoKSxvLnJlbW92ZUZyb20odGhpcy5pdGVtcyx0KX0sdGhpcyl9LGMuZGVzdHJveT1mdW5jdGlvbigpe3ZhciB0PXRoaXMuZWxlbWVudC5zdHlsZTt0LmhlaWdodD1cIlwiLHQucG9zaXRpb249XCJcIix0LndpZHRoPVwiXCIsdGhpcy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKHQpe3QuZGVzdHJveSgpfSksdGhpcy51bmJpbmRSZXNpemUoKTt2YXIgZT10aGlzLmVsZW1lbnQub3V0bGF5ZXJHVUlEO2RlbGV0ZSBmW2VdLGRlbGV0ZSB0aGlzLmVsZW1lbnQub3V0bGF5ZXJHVUlELGgmJmgucmVtb3ZlRGF0YSh0aGlzLmVsZW1lbnQsdGhpcy5jb25zdHJ1Y3Rvci5uYW1lc3BhY2UpfSxzLmRhdGE9ZnVuY3Rpb24odCl7dD1vLmdldFF1ZXJ5RWxlbWVudCh0KTt2YXIgZT10JiZ0Lm91dGxheWVyR1VJRDtyZXR1cm4gZSYmZltlXX0scy5jcmVhdGU9ZnVuY3Rpb24odCxlKXt2YXIgaT1yKHMpO3JldHVybiBpLmRlZmF1bHRzPW8uZXh0ZW5kKHt9LHMuZGVmYXVsdHMpLG8uZXh0ZW5kKGkuZGVmYXVsdHMsZSksaS5jb21wYXRPcHRpb25zPW8uZXh0ZW5kKHt9LHMuY29tcGF0T3B0aW9ucyksaS5uYW1lc3BhY2U9dCxpLmRhdGE9cy5kYXRhLGkuSXRlbT1yKG4pLG8uaHRtbEluaXQoaSx0KSxoJiZoLmJyaWRnZXQmJmguYnJpZGdldCh0LGkpLGl9O3ZhciBtPXttczoxLHM6MWUzfTtyZXR1cm4gcy5JdGVtPW4sc30pLGZ1bmN0aW9uKHQsZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcImlzb3RvcGUtbGF5b3V0L2pzL2l0ZW1cIixbXCJvdXRsYXllci9vdXRsYXllclwiXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKHJlcXVpcmUoXCJvdXRsYXllclwiKSk6KHQuSXNvdG9wZT10Lklzb3RvcGV8fHt9LHQuSXNvdG9wZS5JdGVtPWUodC5PdXRsYXllcikpfSh3aW5kb3csZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZSgpe3QuSXRlbS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9dmFyIGk9ZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0Lkl0ZW0ucHJvdG90eXBlKSxvPWkuX2NyZWF0ZTtpLl9jcmVhdGU9ZnVuY3Rpb24oKXt0aGlzLmlkPXRoaXMubGF5b3V0Lml0ZW1HVUlEKyssby5jYWxsKHRoaXMpLHRoaXMuc29ydERhdGE9e319LGkudXBkYXRlU29ydERhdGE9ZnVuY3Rpb24oKXtpZighdGhpcy5pc0lnbm9yZWQpe3RoaXMuc29ydERhdGEuaWQ9dGhpcy5pZCx0aGlzLnNvcnREYXRhW1wib3JpZ2luYWwtb3JkZXJcIl09dGhpcy5pZCx0aGlzLnNvcnREYXRhLnJhbmRvbT1NYXRoLnJhbmRvbSgpO3ZhciB0PXRoaXMubGF5b3V0Lm9wdGlvbnMuZ2V0U29ydERhdGEsZT10aGlzLmxheW91dC5fc29ydGVycztmb3IodmFyIGkgaW4gdCl7dmFyIG89ZVtpXTt0aGlzLnNvcnREYXRhW2ldPW8odGhpcy5lbGVtZW50LHRoaXMpfX19O3ZhciBuPWkuZGVzdHJveTtyZXR1cm4gaS5kZXN0cm95PWZ1bmN0aW9uKCl7bi5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5jc3Moe2Rpc3BsYXk6XCJcIn0pfSxlfSksZnVuY3Rpb24odCxlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiaXNvdG9wZS1sYXlvdXQvanMvbGF5b3V0LW1vZGVcIixbXCJnZXQtc2l6ZS9nZXQtc2l6ZVwiLFwib3V0bGF5ZXIvb3V0bGF5ZXJcIl0sZSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZShyZXF1aXJlKFwiZ2V0LXNpemVcIikscmVxdWlyZShcIm91dGxheWVyXCIpKToodC5Jc290b3BlPXQuSXNvdG9wZXx8e30sdC5Jc290b3BlLkxheW91dE1vZGU9ZSh0LmdldFNpemUsdC5PdXRsYXllcikpfSh3aW5kb3csZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBpKHQpe3RoaXMuaXNvdG9wZT10LHQmJih0aGlzLm9wdGlvbnM9dC5vcHRpb25zW3RoaXMubmFtZXNwYWNlXSx0aGlzLmVsZW1lbnQ9dC5lbGVtZW50LHRoaXMuaXRlbXM9dC5maWx0ZXJlZEl0ZW1zLHRoaXMuc2l6ZT10LnNpemUpfXZhciBvPWkucHJvdG90eXBlLG49W1wiX3Jlc2V0TGF5b3V0XCIsXCJfZ2V0SXRlbUxheW91dFBvc2l0aW9uXCIsXCJfbWFuYWdlU3RhbXBcIixcIl9nZXRDb250YWluZXJTaXplXCIsXCJfZ2V0RWxlbWVudE9mZnNldFwiLFwibmVlZHNSZXNpemVMYXlvdXRcIixcIl9nZXRPcHRpb25cIl07cmV0dXJuIG4uZm9yRWFjaChmdW5jdGlvbih0KXtvW3RdPWZ1bmN0aW9uKCl7cmV0dXJuIGUucHJvdG90eXBlW3RdLmFwcGx5KHRoaXMuaXNvdG9wZSxhcmd1bWVudHMpfX0pLG8ubmVlZHNWZXJ0aWNhbFJlc2l6ZUxheW91dD1mdW5jdGlvbigpe3ZhciBlPXQodGhpcy5pc290b3BlLmVsZW1lbnQpLGk9dGhpcy5pc290b3BlLnNpemUmJmU7cmV0dXJuIGkmJmUuaW5uZXJIZWlnaHQhPXRoaXMuaXNvdG9wZS5zaXplLmlubmVySGVpZ2h0fSxvLl9nZXRNZWFzdXJlbWVudD1mdW5jdGlvbigpe3RoaXMuaXNvdG9wZS5fZ2V0TWVhc3VyZW1lbnQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxvLmdldENvbHVtbldpZHRoPWZ1bmN0aW9uKCl7dGhpcy5nZXRTZWdtZW50U2l6ZShcImNvbHVtblwiLFwiV2lkdGhcIil9LG8uZ2V0Um93SGVpZ2h0PWZ1bmN0aW9uKCl7dGhpcy5nZXRTZWdtZW50U2l6ZShcInJvd1wiLFwiSGVpZ2h0XCIpfSxvLmdldFNlZ21lbnRTaXplPWZ1bmN0aW9uKHQsZSl7dmFyIGk9dCtlLG89XCJvdXRlclwiK2U7aWYodGhpcy5fZ2V0TWVhc3VyZW1lbnQoaSxvKSwhdGhpc1tpXSl7dmFyIG49dGhpcy5nZXRGaXJzdEl0ZW1TaXplKCk7dGhpc1tpXT1uJiZuW29dfHx0aGlzLmlzb3RvcGUuc2l6ZVtcImlubmVyXCIrZV19fSxvLmdldEZpcnN0SXRlbVNpemU9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmlzb3RvcGUuZmlsdGVyZWRJdGVtc1swXTtyZXR1cm4gZSYmZS5lbGVtZW50JiZ0KGUuZWxlbWVudCl9LG8ubGF5b3V0PWZ1bmN0aW9uKCl7dGhpcy5pc290b3BlLmxheW91dC5hcHBseSh0aGlzLmlzb3RvcGUsYXJndW1lbnRzKX0sby5nZXRTaXplPWZ1bmN0aW9uKCl7dGhpcy5pc290b3BlLmdldFNpemUoKSx0aGlzLnNpemU9dGhpcy5pc290b3BlLnNpemV9LGkubW9kZXM9e30saS5jcmVhdGU9ZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBuKCl7aS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9cmV0dXJuIG4ucHJvdG90eXBlPU9iamVjdC5jcmVhdGUobyksbi5wcm90b3R5cGUuY29uc3RydWN0b3I9bixlJiYobi5vcHRpb25zPWUpLG4ucHJvdG90eXBlLm5hbWVzcGFjZT10LGkubW9kZXNbdF09bixufSxpfSksZnVuY3Rpb24odCxlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwibWFzb25yeS1sYXlvdXQvbWFzb25yeVwiLFtcIm91dGxheWVyL291dGxheWVyXCIsXCJnZXQtc2l6ZS9nZXQtc2l6ZVwiXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKHJlcXVpcmUoXCJvdXRsYXllclwiKSxyZXF1aXJlKFwiZ2V0LXNpemVcIikpOnQuTWFzb25yeT1lKHQuT3V0bGF5ZXIsdC5nZXRTaXplKX0od2luZG93LGZ1bmN0aW9uKHQsZSl7dmFyIGk9dC5jcmVhdGUoXCJtYXNvbnJ5XCIpO2kuY29tcGF0T3B0aW9ucy5maXRXaWR0aD1cImlzRml0V2lkdGhcIjt2YXIgbz1pLnByb3RvdHlwZTtyZXR1cm4gby5fcmVzZXRMYXlvdXQ9ZnVuY3Rpb24oKXt0aGlzLmdldFNpemUoKSx0aGlzLl9nZXRNZWFzdXJlbWVudChcImNvbHVtbldpZHRoXCIsXCJvdXRlcldpZHRoXCIpLHRoaXMuX2dldE1lYXN1cmVtZW50KFwiZ3V0dGVyXCIsXCJvdXRlcldpZHRoXCIpLHRoaXMubWVhc3VyZUNvbHVtbnMoKSx0aGlzLmNvbFlzPVtdO2Zvcih2YXIgdD0wO3Q8dGhpcy5jb2xzO3QrKyl0aGlzLmNvbFlzLnB1c2goMCk7dGhpcy5tYXhZPTAsdGhpcy5ob3Jpem9udGFsQ29sSW5kZXg9MH0sby5tZWFzdXJlQ29sdW1ucz1mdW5jdGlvbigpe2lmKHRoaXMuZ2V0Q29udGFpbmVyV2lkdGgoKSwhdGhpcy5jb2x1bW5XaWR0aCl7dmFyIHQ9dGhpcy5pdGVtc1swXSxpPXQmJnQuZWxlbWVudDt0aGlzLmNvbHVtbldpZHRoPWkmJmUoaSkub3V0ZXJXaWR0aHx8dGhpcy5jb250YWluZXJXaWR0aH12YXIgbz10aGlzLmNvbHVtbldpZHRoKz10aGlzLmd1dHRlcixuPXRoaXMuY29udGFpbmVyV2lkdGgrdGhpcy5ndXR0ZXIscz1uL28scj1vLW4lbyxhPXImJnI8MT9cInJvdW5kXCI6XCJmbG9vclwiO3M9TWF0aFthXShzKSx0aGlzLmNvbHM9TWF0aC5tYXgocywxKX0sby5nZXRDb250YWluZXJXaWR0aD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuX2dldE9wdGlvbihcImZpdFdpZHRoXCIpLGk9dD90aGlzLmVsZW1lbnQucGFyZW50Tm9kZTp0aGlzLmVsZW1lbnQsbz1lKGkpO3RoaXMuY29udGFpbmVyV2lkdGg9byYmby5pbm5lcldpZHRofSxvLl9nZXRJdGVtTGF5b3V0UG9zaXRpb249ZnVuY3Rpb24odCl7dC5nZXRTaXplKCk7dmFyIGU9dC5zaXplLm91dGVyV2lkdGgldGhpcy5jb2x1bW5XaWR0aCxpPWUmJmU8MT9cInJvdW5kXCI6XCJjZWlsXCIsbz1NYXRoW2ldKHQuc2l6ZS5vdXRlcldpZHRoL3RoaXMuY29sdW1uV2lkdGgpO289TWF0aC5taW4obyx0aGlzLmNvbHMpO2Zvcih2YXIgbj10aGlzLm9wdGlvbnMuaG9yaXpvbnRhbE9yZGVyP1wiX2dldEhvcml6b250YWxDb2xQb3NpdGlvblwiOlwiX2dldFRvcENvbFBvc2l0aW9uXCIscz10aGlzW25dKG8sdCkscj17eDp0aGlzLmNvbHVtbldpZHRoKnMuY29sLHk6cy55fSxhPXMueSt0LnNpemUub3V0ZXJIZWlnaHQsdT1vK3MuY29sLGg9cy5jb2w7aDx1O2grKyl0aGlzLmNvbFlzW2hdPWE7cmV0dXJuIHJ9LG8uX2dldFRvcENvbFBvc2l0aW9uPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX2dldFRvcENvbEdyb3VwKHQpLGk9TWF0aC5taW4uYXBwbHkoTWF0aCxlKTtyZXR1cm57Y29sOmUuaW5kZXhPZihpKSx5Oml9fSxvLl9nZXRUb3BDb2xHcm91cD1mdW5jdGlvbih0KXtpZih0PDIpcmV0dXJuIHRoaXMuY29sWXM7Zm9yKHZhciBlPVtdLGk9dGhpcy5jb2xzKzEtdCxvPTA7bzxpO28rKyllW29dPXRoaXMuX2dldENvbEdyb3VwWShvLHQpO3JldHVybiBlfSxvLl9nZXRDb2xHcm91cFk9ZnVuY3Rpb24odCxlKXtpZihlPDIpcmV0dXJuIHRoaXMuY29sWXNbdF07dmFyIGk9dGhpcy5jb2xZcy5zbGljZSh0LHQrZSk7cmV0dXJuIE1hdGgubWF4LmFwcGx5KE1hdGgsaSl9LG8uX2dldEhvcml6b250YWxDb2xQb3NpdGlvbj1mdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuaG9yaXpvbnRhbENvbEluZGV4JXRoaXMuY29scyxvPXQ+MSYmaSt0PnRoaXMuY29scztpPW8/MDppO3ZhciBuPWUuc2l6ZS5vdXRlcldpZHRoJiZlLnNpemUub3V0ZXJIZWlnaHQ7cmV0dXJuIHRoaXMuaG9yaXpvbnRhbENvbEluZGV4PW4/aSt0OnRoaXMuaG9yaXpvbnRhbENvbEluZGV4LHtjb2w6aSx5OnRoaXMuX2dldENvbEdyb3VwWShpLHQpfX0sby5fbWFuYWdlU3RhbXA9ZnVuY3Rpb24odCl7dmFyIGk9ZSh0KSxvPXRoaXMuX2dldEVsZW1lbnRPZmZzZXQodCksbj10aGlzLl9nZXRPcHRpb24oXCJvcmlnaW5MZWZ0XCIpLHM9bj9vLmxlZnQ6by5yaWdodCxyPXMraS5vdXRlcldpZHRoLGE9TWF0aC5mbG9vcihzL3RoaXMuY29sdW1uV2lkdGgpO2E9TWF0aC5tYXgoMCxhKTt2YXIgdT1NYXRoLmZsb29yKHIvdGhpcy5jb2x1bW5XaWR0aCk7dS09ciV0aGlzLmNvbHVtbldpZHRoPzA6MSx1PU1hdGgubWluKHRoaXMuY29scy0xLHUpO2Zvcih2YXIgaD10aGlzLl9nZXRPcHRpb24oXCJvcmlnaW5Ub3BcIiksZD0oaD9vLnRvcDpvLmJvdHRvbSkraS5vdXRlckhlaWdodCxsPWE7bDw9dTtsKyspdGhpcy5jb2xZc1tsXT1NYXRoLm1heChkLHRoaXMuY29sWXNbbF0pfSxvLl9nZXRDb250YWluZXJTaXplPWZ1bmN0aW9uKCl7dGhpcy5tYXhZPU1hdGgubWF4LmFwcGx5KE1hdGgsdGhpcy5jb2xZcyk7dmFyIHQ9e2hlaWdodDp0aGlzLm1heFl9O3JldHVybiB0aGlzLl9nZXRPcHRpb24oXCJmaXRXaWR0aFwiKSYmKHQud2lkdGg9dGhpcy5fZ2V0Q29udGFpbmVyRml0V2lkdGgoKSksdH0sby5fZ2V0Q29udGFpbmVyRml0V2lkdGg9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9MCxlPXRoaXMuY29sczstLWUmJjA9PT10aGlzLmNvbFlzW2VdOyl0Kys7cmV0dXJuKHRoaXMuY29scy10KSp0aGlzLmNvbHVtbldpZHRoLXRoaXMuZ3V0dGVyfSxvLm5lZWRzUmVzaXplTGF5b3V0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5jb250YWluZXJXaWR0aDtyZXR1cm4gdGhpcy5nZXRDb250YWluZXJXaWR0aCgpLHQhPXRoaXMuY29udGFpbmVyV2lkdGh9LGl9KSxmdW5jdGlvbih0LGUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJpc290b3BlLWxheW91dC9qcy9sYXlvdXQtbW9kZXMvbWFzb25yeVwiLFtcIi4uL2xheW91dC1tb2RlXCIsXCJtYXNvbnJ5LWxheW91dC9tYXNvbnJ5XCJdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUocmVxdWlyZShcIi4uL2xheW91dC1tb2RlXCIpLHJlcXVpcmUoXCJtYXNvbnJ5LWxheW91dFwiKSk6ZSh0Lklzb3RvcGUuTGF5b3V0TW9kZSx0Lk1hc29ucnkpfSh3aW5kb3csZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10LmNyZWF0ZShcIm1hc29ucnlcIiksbz1pLnByb3RvdHlwZSxuPXtfZ2V0RWxlbWVudE9mZnNldDohMCxsYXlvdXQ6ITAsX2dldE1lYXN1cmVtZW50OiEwfTtmb3IodmFyIHMgaW4gZS5wcm90b3R5cGUpbltzXXx8KG9bc109ZS5wcm90b3R5cGVbc10pO3ZhciByPW8ubWVhc3VyZUNvbHVtbnM7by5tZWFzdXJlQ29sdW1ucz1mdW5jdGlvbigpe3RoaXMuaXRlbXM9dGhpcy5pc290b3BlLmZpbHRlcmVkSXRlbXMsci5jYWxsKHRoaXMpfTt2YXIgYT1vLl9nZXRPcHRpb247cmV0dXJuIG8uX2dldE9wdGlvbj1mdW5jdGlvbih0KXtyZXR1cm5cImZpdFdpZHRoXCI9PXQ/dm9pZCAwIT09dGhpcy5vcHRpb25zLmlzRml0V2lkdGg/dGhpcy5vcHRpb25zLmlzRml0V2lkdGg6dGhpcy5vcHRpb25zLmZpdFdpZHRoOmEuYXBwbHkodGhpcy5pc290b3BlLGFyZ3VtZW50cyl9LGl9KSxmdW5jdGlvbih0LGUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJpc290b3BlLWxheW91dC9qcy9sYXlvdXQtbW9kZXMvZml0LXJvd3NcIixbXCIuLi9sYXlvdXQtbW9kZVwiXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKHJlcXVpcmUoXCIuLi9sYXlvdXQtbW9kZVwiKSk6ZSh0Lklzb3RvcGUuTGF5b3V0TW9kZSl9KHdpbmRvdyxmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjt2YXIgZT10LmNyZWF0ZShcImZpdFJvd3NcIiksaT1lLnByb3RvdHlwZTtyZXR1cm4gaS5fcmVzZXRMYXlvdXQ9ZnVuY3Rpb24oKXt0aGlzLng9MCx0aGlzLnk9MCx0aGlzLm1heFk9MCx0aGlzLl9nZXRNZWFzdXJlbWVudChcImd1dHRlclwiLFwib3V0ZXJXaWR0aFwiKX0saS5fZ2V0SXRlbUxheW91dFBvc2l0aW9uPWZ1bmN0aW9uKHQpe3QuZ2V0U2l6ZSgpO3ZhciBlPXQuc2l6ZS5vdXRlcldpZHRoK3RoaXMuZ3V0dGVyLGk9dGhpcy5pc290b3BlLnNpemUuaW5uZXJXaWR0aCt0aGlzLmd1dHRlcjswIT09dGhpcy54JiZlK3RoaXMueD5pJiYodGhpcy54PTAsdGhpcy55PXRoaXMubWF4WSk7dmFyIG89e3g6dGhpcy54LHk6dGhpcy55fTtyZXR1cm4gdGhpcy5tYXhZPU1hdGgubWF4KHRoaXMubWF4WSx0aGlzLnkrdC5zaXplLm91dGVySGVpZ2h0KSx0aGlzLngrPWUsb30saS5fZ2V0Q29udGFpbmVyU2l6ZT1mdW5jdGlvbigpe3JldHVybntoZWlnaHQ6dGhpcy5tYXhZfX0sZX0pLGZ1bmN0aW9uKHQsZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcImlzb3RvcGUtbGF5b3V0L2pzL2xheW91dC1tb2Rlcy92ZXJ0aWNhbFwiLFtcIi4uL2xheW91dC1tb2RlXCJdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUocmVxdWlyZShcIi4uL2xheW91dC1tb2RlXCIpKTplKHQuSXNvdG9wZS5MYXlvdXRNb2RlKX0od2luZG93LGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO3ZhciBlPXQuY3JlYXRlKFwidmVydGljYWxcIix7aG9yaXpvbnRhbEFsaWdubWVudDowfSksaT1lLnByb3RvdHlwZTtyZXR1cm4gaS5fcmVzZXRMYXlvdXQ9ZnVuY3Rpb24oKXt0aGlzLnk9MH0saS5fZ2V0SXRlbUxheW91dFBvc2l0aW9uPWZ1bmN0aW9uKHQpe3QuZ2V0U2l6ZSgpO3ZhciBlPSh0aGlzLmlzb3RvcGUuc2l6ZS5pbm5lcldpZHRoLXQuc2l6ZS5vdXRlcldpZHRoKSp0aGlzLm9wdGlvbnMuaG9yaXpvbnRhbEFsaWdubWVudCxpPXRoaXMueTtyZXR1cm4gdGhpcy55Kz10LnNpemUub3V0ZXJIZWlnaHQse3g6ZSx5Oml9fSxpLl9nZXRDb250YWluZXJTaXplPWZ1bmN0aW9uKCl7cmV0dXJue2hlaWdodDp0aGlzLnl9fSxlfSksZnVuY3Rpb24odCxlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcIm91dGxheWVyL291dGxheWVyXCIsXCJnZXQtc2l6ZS9nZXQtc2l6ZVwiLFwiZGVzYW5kcm8tbWF0Y2hlcy1zZWxlY3Rvci9tYXRjaGVzLXNlbGVjdG9yXCIsXCJmaXp6eS11aS11dGlscy91dGlsc1wiLFwiaXNvdG9wZS1sYXlvdXQvanMvaXRlbVwiLFwiaXNvdG9wZS1sYXlvdXQvanMvbGF5b3V0LW1vZGVcIixcImlzb3RvcGUtbGF5b3V0L2pzL2xheW91dC1tb2Rlcy9tYXNvbnJ5XCIsXCJpc290b3BlLWxheW91dC9qcy9sYXlvdXQtbW9kZXMvZml0LXJvd3NcIixcImlzb3RvcGUtbGF5b3V0L2pzL2xheW91dC1tb2Rlcy92ZXJ0aWNhbFwiXSxmdW5jdGlvbihpLG8sbixzLHIsYSl7cmV0dXJuIGUodCxpLG8sbixzLHIsYSl9KTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKHQscmVxdWlyZShcIm91dGxheWVyXCIpLHJlcXVpcmUoXCJnZXQtc2l6ZVwiKSxyZXF1aXJlKFwiZGVzYW5kcm8tbWF0Y2hlcy1zZWxlY3RvclwiKSxyZXF1aXJlKFwiZml6enktdWktdXRpbHNcIikscmVxdWlyZShcImlzb3RvcGUtbGF5b3V0L2pzL2l0ZW1cIikscmVxdWlyZShcImlzb3RvcGUtbGF5b3V0L2pzL2xheW91dC1tb2RlXCIpLHJlcXVpcmUoXCJpc290b3BlLWxheW91dC9qcy9sYXlvdXQtbW9kZXMvbWFzb25yeVwiKSxyZXF1aXJlKFwiaXNvdG9wZS1sYXlvdXQvanMvbGF5b3V0LW1vZGVzL2ZpdC1yb3dzXCIpLHJlcXVpcmUoXCJpc290b3BlLWxheW91dC9qcy9sYXlvdXQtbW9kZXMvdmVydGljYWxcIikpOnQuSXNvdG9wZT1lKHQsdC5PdXRsYXllcix0LmdldFNpemUsdC5tYXRjaGVzU2VsZWN0b3IsdC5maXp6eVVJVXRpbHMsdC5Jc290b3BlLkl0ZW0sdC5Jc290b3BlLkxheW91dE1vZGUpfSh3aW5kb3csZnVuY3Rpb24odCxlLGksbyxuLHMscil7ZnVuY3Rpb24gYSh0LGUpe3JldHVybiBmdW5jdGlvbihpLG8pe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgcz10W25dLHI9aS5zb3J0RGF0YVtzXSxhPW8uc29ydERhdGFbc107aWYocj5hfHxyPGEpe3ZhciB1PXZvaWQgMCE9PWVbc10/ZVtzXTplLGg9dT8xOi0xO3JldHVybihyPmE/MTotMSkqaH19cmV0dXJuIDB9fXZhciB1PXQualF1ZXJ5LGg9U3RyaW5nLnByb3RvdHlwZS50cmltP2Z1bmN0aW9uKHQpe3JldHVybiB0LnRyaW0oKX06ZnVuY3Rpb24odCl7cmV0dXJuIHQucmVwbGFjZSgvXlxccyt8XFxzKyQvZyxcIlwiKX0sZD1lLmNyZWF0ZShcImlzb3RvcGVcIix7bGF5b3V0TW9kZTpcIm1hc29ucnlcIixpc0pRdWVyeUZpbHRlcmluZzohMCxzb3J0QXNjZW5kaW5nOiEwfSk7ZC5JdGVtPXMsZC5MYXlvdXRNb2RlPXI7dmFyIGw9ZC5wcm90b3R5cGU7bC5fY3JlYXRlPWZ1bmN0aW9uKCl7dGhpcy5pdGVtR1VJRD0wLHRoaXMuX3NvcnRlcnM9e30sdGhpcy5fZ2V0U29ydGVycygpLGUucHJvdG90eXBlLl9jcmVhdGUuY2FsbCh0aGlzKSx0aGlzLm1vZGVzPXt9LHRoaXMuZmlsdGVyZWRJdGVtcz10aGlzLml0ZW1zLHRoaXMuc29ydEhpc3Rvcnk9W1wib3JpZ2luYWwtb3JkZXJcIl07Zm9yKHZhciB0IGluIHIubW9kZXMpdGhpcy5faW5pdExheW91dE1vZGUodCl9LGwucmVsb2FkSXRlbXM9ZnVuY3Rpb24oKXt0aGlzLml0ZW1HVUlEPTAsZS5wcm90b3R5cGUucmVsb2FkSXRlbXMuY2FsbCh0aGlzKX0sbC5faXRlbWl6ZT1mdW5jdGlvbigpe2Zvcih2YXIgdD1lLnByb3RvdHlwZS5faXRlbWl6ZS5hcHBseSh0aGlzLGFyZ3VtZW50cyksaT0wO2k8dC5sZW5ndGg7aSsrKXt2YXIgbz10W2ldO28uaWQ9dGhpcy5pdGVtR1VJRCsrfXJldHVybiB0aGlzLl91cGRhdGVJdGVtc1NvcnREYXRhKHQpLHR9LGwuX2luaXRMYXlvdXRNb2RlPWZ1bmN0aW9uKHQpe3ZhciBlPXIubW9kZXNbdF0saT10aGlzLm9wdGlvbnNbdF18fHt9O3RoaXMub3B0aW9uc1t0XT1lLm9wdGlvbnM/bi5leHRlbmQoZS5vcHRpb25zLGkpOmksdGhpcy5tb2Rlc1t0XT1uZXcgZSh0aGlzKX0sbC5sYXlvdXQ9ZnVuY3Rpb24oKXtyZXR1cm4hdGhpcy5faXNMYXlvdXRJbml0ZWQmJnRoaXMuX2dldE9wdGlvbihcImluaXRMYXlvdXRcIik/dm9pZCB0aGlzLmFycmFuZ2UoKTp2b2lkIHRoaXMuX2xheW91dCgpfSxsLl9sYXlvdXQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9nZXRJc0luc3RhbnQoKTt0aGlzLl9yZXNldExheW91dCgpLHRoaXMuX21hbmFnZVN0YW1wcygpLHRoaXMubGF5b3V0SXRlbXModGhpcy5maWx0ZXJlZEl0ZW1zLHQpLHRoaXMuX2lzTGF5b3V0SW5pdGVkPSEwfSxsLmFycmFuZ2U9ZnVuY3Rpb24odCl7dGhpcy5vcHRpb24odCksdGhpcy5fZ2V0SXNJbnN0YW50KCk7dmFyIGU9dGhpcy5fZmlsdGVyKHRoaXMuaXRlbXMpO3RoaXMuZmlsdGVyZWRJdGVtcz1lLm1hdGNoZXMsdGhpcy5fYmluZEFycmFuZ2VDb21wbGV0ZSgpLHRoaXMuX2lzSW5zdGFudD90aGlzLl9ub1RyYW5zaXRpb24odGhpcy5faGlkZVJldmVhbCxbZV0pOnRoaXMuX2hpZGVSZXZlYWwoZSksdGhpcy5fc29ydCgpLHRoaXMuX2xheW91dCgpfSxsLl9pbml0PWwuYXJyYW5nZSxsLl9oaWRlUmV2ZWFsPWZ1bmN0aW9uKHQpe3RoaXMucmV2ZWFsKHQubmVlZFJldmVhbCksdGhpcy5oaWRlKHQubmVlZEhpZGUpfSxsLl9nZXRJc0luc3RhbnQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9nZXRPcHRpb24oXCJsYXlvdXRJbnN0YW50XCIpLGU9dm9pZCAwIT09dD90OiF0aGlzLl9pc0xheW91dEluaXRlZDtyZXR1cm4gdGhpcy5faXNJbnN0YW50PWUsZX0sbC5fYmluZEFycmFuZ2VDb21wbGV0ZT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXtlJiZpJiZvJiZuLmRpc3BhdGNoRXZlbnQoXCJhcnJhbmdlQ29tcGxldGVcIixudWxsLFtuLmZpbHRlcmVkSXRlbXNdKX12YXIgZSxpLG8sbj10aGlzO3RoaXMub25jZShcImxheW91dENvbXBsZXRlXCIsZnVuY3Rpb24oKXtlPSEwLHQoKX0pLHRoaXMub25jZShcImhpZGVDb21wbGV0ZVwiLGZ1bmN0aW9uKCl7aT0hMCx0KCl9KSx0aGlzLm9uY2UoXCJyZXZlYWxDb21wbGV0ZVwiLGZ1bmN0aW9uKCl7bz0hMCx0KCl9KX0sbC5fZmlsdGVyPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMub3B0aW9ucy5maWx0ZXI7ZT1lfHxcIipcIjtmb3IodmFyIGk9W10sbz1bXSxuPVtdLHM9dGhpcy5fZ2V0RmlsdGVyVGVzdChlKSxyPTA7cjx0Lmxlbmd0aDtyKyspe3ZhciBhPXRbcl07aWYoIWEuaXNJZ25vcmVkKXt2YXIgdT1zKGEpO3UmJmkucHVzaChhKSx1JiZhLmlzSGlkZGVuP28ucHVzaChhKTp1fHxhLmlzSGlkZGVufHxuLnB1c2goYSl9fXJldHVybnttYXRjaGVzOmksbmVlZFJldmVhbDpvLG5lZWRIaWRlOm59fSxsLl9nZXRGaWx0ZXJUZXN0PWZ1bmN0aW9uKHQpe3JldHVybiB1JiZ0aGlzLm9wdGlvbnMuaXNKUXVlcnlGaWx0ZXJpbmc/ZnVuY3Rpb24oZSl7cmV0dXJuIHUoZS5lbGVtZW50KS5pcyh0KTtcclxufTpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0P2Z1bmN0aW9uKGUpe3JldHVybiB0KGUuZWxlbWVudCl9OmZ1bmN0aW9uKGUpe3JldHVybiBvKGUuZWxlbWVudCx0KX19LGwudXBkYXRlU29ydERhdGE9ZnVuY3Rpb24odCl7dmFyIGU7dD8odD1uLm1ha2VBcnJheSh0KSxlPXRoaXMuZ2V0SXRlbXModCkpOmU9dGhpcy5pdGVtcyx0aGlzLl9nZXRTb3J0ZXJzKCksdGhpcy5fdXBkYXRlSXRlbXNTb3J0RGF0YShlKX0sbC5fZ2V0U29ydGVycz1mdW5jdGlvbigpe3ZhciB0PXRoaXMub3B0aW9ucy5nZXRTb3J0RGF0YTtmb3IodmFyIGUgaW4gdCl7dmFyIGk9dFtlXTt0aGlzLl9zb3J0ZXJzW2VdPWYoaSl9fSxsLl91cGRhdGVJdGVtc1NvcnREYXRhPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT10JiZ0Lmxlbmd0aCxpPTA7ZSYmaTxlO2krKyl7dmFyIG89dFtpXTtvLnVwZGF0ZVNvcnREYXRhKCl9fTt2YXIgZj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIHQpcmV0dXJuIHQ7dmFyIGk9aCh0KS5zcGxpdChcIiBcIiksbz1pWzBdLG49by5tYXRjaCgvXlxcWyguKylcXF0kLykscz1uJiZuWzFdLHI9ZShzLG8pLGE9ZC5zb3J0RGF0YVBhcnNlcnNbaVsxXV07cmV0dXJuIHQ9YT9mdW5jdGlvbih0KXtyZXR1cm4gdCYmYShyKHQpKX06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJnIodCl9fWZ1bmN0aW9uIGUodCxlKXtyZXR1cm4gdD9mdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUodCl9OmZ1bmN0aW9uKHQpe3ZhciBpPXQucXVlcnlTZWxlY3RvcihlKTtyZXR1cm4gaSYmaS50ZXh0Q29udGVudH19cmV0dXJuIHR9KCk7ZC5zb3J0RGF0YVBhcnNlcnM9e3BhcnNlSW50OmZ1bmN0aW9uKHQpe3JldHVybiBwYXJzZUludCh0LDEwKX0scGFyc2VGbG9hdDpmdW5jdGlvbih0KXtyZXR1cm4gcGFyc2VGbG9hdCh0KX19LGwuX3NvcnQ9ZnVuY3Rpb24oKXtpZih0aGlzLm9wdGlvbnMuc29ydEJ5KXt2YXIgdD1uLm1ha2VBcnJheSh0aGlzLm9wdGlvbnMuc29ydEJ5KTt0aGlzLl9nZXRJc1NhbWVTb3J0QnkodCl8fCh0aGlzLnNvcnRIaXN0b3J5PXQuY29uY2F0KHRoaXMuc29ydEhpc3RvcnkpKTt2YXIgZT1hKHRoaXMuc29ydEhpc3RvcnksdGhpcy5vcHRpb25zLnNvcnRBc2NlbmRpbmcpO3RoaXMuZmlsdGVyZWRJdGVtcy5zb3J0KGUpfX0sbC5fZ2V0SXNTYW1lU29ydEJ5PWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8dC5sZW5ndGg7ZSsrKWlmKHRbZV0hPXRoaXMuc29ydEhpc3RvcnlbZV0pcmV0dXJuITE7cmV0dXJuITB9LGwuX21vZGU9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLm9wdGlvbnMubGF5b3V0TW9kZSxlPXRoaXMubW9kZXNbdF07aWYoIWUpdGhyb3cgbmV3IEVycm9yKFwiTm8gbGF5b3V0IG1vZGU6IFwiK3QpO3JldHVybiBlLm9wdGlvbnM9dGhpcy5vcHRpb25zW3RdLGV9LGwuX3Jlc2V0TGF5b3V0PWZ1bmN0aW9uKCl7ZS5wcm90b3R5cGUuX3Jlc2V0TGF5b3V0LmNhbGwodGhpcyksdGhpcy5fbW9kZSgpLl9yZXNldExheW91dCgpfSxsLl9nZXRJdGVtTGF5b3V0UG9zaXRpb249ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX21vZGUoKS5fZ2V0SXRlbUxheW91dFBvc2l0aW9uKHQpfSxsLl9tYW5hZ2VTdGFtcD1mdW5jdGlvbih0KXt0aGlzLl9tb2RlKCkuX21hbmFnZVN0YW1wKHQpfSxsLl9nZXRDb250YWluZXJTaXplPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX21vZGUoKS5fZ2V0Q29udGFpbmVyU2l6ZSgpfSxsLm5lZWRzUmVzaXplTGF5b3V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX21vZGUoKS5uZWVkc1Jlc2l6ZUxheW91dCgpfSxsLmFwcGVuZGVkPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuYWRkSXRlbXModCk7aWYoZS5sZW5ndGgpe3ZhciBpPXRoaXMuX2ZpbHRlclJldmVhbEFkZGVkKGUpO3RoaXMuZmlsdGVyZWRJdGVtcz10aGlzLmZpbHRlcmVkSXRlbXMuY29uY2F0KGkpfX0sbC5wcmVwZW5kZWQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5faXRlbWl6ZSh0KTtpZihlLmxlbmd0aCl7dGhpcy5fcmVzZXRMYXlvdXQoKSx0aGlzLl9tYW5hZ2VTdGFtcHMoKTt2YXIgaT10aGlzLl9maWx0ZXJSZXZlYWxBZGRlZChlKTt0aGlzLmxheW91dEl0ZW1zKHRoaXMuZmlsdGVyZWRJdGVtcyksdGhpcy5maWx0ZXJlZEl0ZW1zPWkuY29uY2F0KHRoaXMuZmlsdGVyZWRJdGVtcyksdGhpcy5pdGVtcz1lLmNvbmNhdCh0aGlzLml0ZW1zKX19LGwuX2ZpbHRlclJldmVhbEFkZGVkPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX2ZpbHRlcih0KTtyZXR1cm4gdGhpcy5oaWRlKGUubmVlZEhpZGUpLHRoaXMucmV2ZWFsKGUubWF0Y2hlcyksdGhpcy5sYXlvdXRJdGVtcyhlLm1hdGNoZXMsITApLGUubWF0Y2hlc30sbC5pbnNlcnQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5hZGRJdGVtcyh0KTtpZihlLmxlbmd0aCl7dmFyIGksbyxuPWUubGVuZ3RoO2ZvcihpPTA7aTxuO2krKylvPWVbaV0sdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG8uZWxlbWVudCk7dmFyIHM9dGhpcy5fZmlsdGVyKGUpLm1hdGNoZXM7Zm9yKGk9MDtpPG47aSsrKWVbaV0uaXNMYXlvdXRJbnN0YW50PSEwO2Zvcih0aGlzLmFycmFuZ2UoKSxpPTA7aTxuO2krKylkZWxldGUgZVtpXS5pc0xheW91dEluc3RhbnQ7dGhpcy5yZXZlYWwocyl9fTt2YXIgYz1sLnJlbW92ZTtyZXR1cm4gbC5yZW1vdmU9ZnVuY3Rpb24odCl7dD1uLm1ha2VBcnJheSh0KTt2YXIgZT10aGlzLmdldEl0ZW1zKHQpO2MuY2FsbCh0aGlzLHQpO2Zvcih2YXIgaT1lJiZlLmxlbmd0aCxvPTA7aSYmbzxpO28rKyl7dmFyIHM9ZVtvXTtuLnJlbW92ZUZyb20odGhpcy5maWx0ZXJlZEl0ZW1zLHMpfX0sbC5zaHVmZmxlPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PTA7dDx0aGlzLml0ZW1zLmxlbmd0aDt0Kyspe3ZhciBlPXRoaXMuaXRlbXNbdF07ZS5zb3J0RGF0YS5yYW5kb209TWF0aC5yYW5kb20oKX10aGlzLm9wdGlvbnMuc29ydEJ5PVwicmFuZG9tXCIsdGhpcy5fc29ydCgpLHRoaXMuX2xheW91dCgpfSxsLl9ub1RyYW5zaXRpb249ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLm9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uO3RoaXMub3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb249MDt2YXIgbz10LmFwcGx5KHRoaXMsZSk7cmV0dXJuIHRoaXMub3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb249aSxvfSxsLmdldEZpbHRlcmVkSXRlbUVsZW1lbnRzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZmlsdGVyZWRJdGVtcy5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHQuZWxlbWVudH0pfSxkfSk7XHJcblxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=