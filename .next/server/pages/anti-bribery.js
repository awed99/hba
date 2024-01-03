module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/anti-bribery": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/anti-bribery.js");
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

/***/ "./helpers/importJS.js":
/*!*****************************!*\
  !*** ./helpers/importJS.js ***!
  \*****************************/
/*! exports provided: importJS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importJS", function() { return importJS; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Easy selector helper function
 */

const select = (el, all = false) => {
  el = el.trim();

  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
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

const importJS = async () => {
  //   const initTerminal = async () => {
  const PureCounter = async () => {
    await __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.t.bind(null, /*! ../public/assets/vendor/purecounter/purecounter_vanilla.js */ "./public/assets/vendor/purecounter/purecounter_vanilla.js", 7));
  };

  const AOS = await __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! ../public/assets/vendor/aos/aos.js */ "./public/assets/vendor/aos/aos.js", 7));
  await __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! ../public/assets/vendor/bootstrap/js/bootstrap.bundle.min.js */ "./public/assets/vendor/bootstrap/js/bootstrap.bundle.min.js", 7));

  const GLightbox = async () => {
    await __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(null, /*! ../public/assets/vendor/glightbox/js/glightbox.min.js */ "./public/assets/vendor/glightbox/js/glightbox.min.js", 7));
  };

  const Isotope = async () => {
    await __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.t.bind(null, /*! ../public/assets/vendor/isotope-layout/isotope.pkgd.min.js */ "./public/assets/vendor/isotope-layout/isotope.pkgd.min.js", 7));
  };

  const Swiper = async () => {
    await __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.t.bind(null, /*! ../public/assets/vendor/swiper/swiper-bundle.min.js */ "./public/assets/vendor/swiper/swiper-bundle.min.js", 7));
  };

  await __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.t.bind(null, /*! ../public/assets/vendor/php-email-form/validate.js */ "./public/assets/vendor/php-email-form/validate.js", 7));
  await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ../public/assets/js/main.js */ "./public/assets/js/main.js", 7));
  let portfolioContainer = select('.portfolio-container');

  if (portfolioContainer) {
    let portfolioIsotope = Isotope(portfolioContainer, {
      itemSelector: '.portfolio-item'
    });
    let portfolioFilters = select('#portfolio-flters li', true);
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


  let heroCarouselIndicators = select("#hero-carousel-indicators");
  let heroCarouselItems = select('#heroCarousel .carousel-item', true);
  heroCarouselItems.forEach((item, index) => {
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

  let preloader = select('#preloader');
  preloader === null || preloader === void 0 ? void 0 : preloader.remove(); //   }
};

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

/***/ "./pages/anti-bribery.js":
/*!*******************************!*\
  !*** ./pages/anti-bribery.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AboutUs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _helpers_importJS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/importJS */ "./helpers/importJS.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ "@mui/material/Box");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\kerjaan\\dewa\\hba\\pages\\anti-bribery.js";








function AboutUs() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_helpers_importJS__WEBPACK_IMPORTED_MODULE_4__["importJS"])();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("main", {
      id: "main",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 15
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "features",
        className: "features",
        sx: {
          p: {
            xs: 2,
            sm: 5,
            md: 10,
            lg: 20,
            xl: 30
          },
          pt: '0px !important',
          pb: '0px !important'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("section", {
          id: "features",
          className: "features",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h2", {
            style: {},
            children: "Anti Bribery & Anti Corruption Policy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "clear height-30",
            style: {
              boxSizing: "border-box",
              margin: 0,
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "inherit",
              fontFamily: '"Droid Sans", sans-serif, "Droid Sans", sans-serif, sans-serif',
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              clear: "both",
              height: 30,
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)"
            },
            children: "\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("strong", {
              style: {
                boxSizing: "border-box"
              },
              children: "Nilai dan Kebijakan/Prinsip Anti\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("strong", {
              style: {
                boxSizing: "border-box"
              },
              children: "Korupsi"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)"
            },
            children: "\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)"
            },
            children: "Nilai-nilai anti korupsi berjumlah 9 buah, yaitu :"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("strong", {
              style: {
                boxSizing: "border-box"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("strong", {
                style: {
                  boxSizing: "border-box"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("em", {
                  style: {
                    boxSizing: "border-box",
                    margin: 0,
                    padding: 0,
                    border: 0,
                    fontVariant: "inherit",
                    fontWeight: "inherit",
                    fontStretch: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                    fontFamily: "inherit",
                    fontOpticalSizing: "inherit",
                    fontKerning: "inherit",
                    fontFeatureSettings: "inherit",
                    fontVariationSettings: "inherit",
                    verticalAlign: "baseline"
                  },
                  children: "1. Kejujuran"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: "Kejujuran berasal dari kata jujur yang dapat di definisikan sebagai sebuah tindakan maupun ucapan yang lurus, tidak berbohong dan tidak curang. Dalam berbagai buku juga disebutkan bahwa jujur memiliki makna satunya kata dan perbuatan. Jujur ilah merupakan salah satu nilai yang paling utama dalam anti korupsi, karena tanpa kejujuran seseorang tidak akan mendapat kepercayaan dalam berbagai hal, termasuk dalam kehidupan sosial. Bagi seorang mahasiswa kejujuran sangat penting dan dapat diwujudkan dalam bentuk tidak melakukan kecurangan akademik, misalnya tidak mencontek, tidak melakukan plagiarisme dan tidak memalsukan nilai. Lebih luas, contoh kejujuran secara umum dimasyarakat ialah dengan selalu berkata jujur, jujur dalam menunaikan tugas dan kewajiban, misalnya sebagai seorang aparat penegak hukum ataupun sebagai masyarakat umum dengan membaya pajak."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("strong", {
              style: {
                boxSizing: "border-box"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("em", {
                style: {
                  boxSizing: "border-box",
                  margin: 0,
                  padding: 0,
                  border: 0,
                  fontVariant: "inherit",
                  fontWeight: "inherit",
                  fontStretch: "inherit",
                  fontSize: "inherit",
                  lineHeight: "inherit",
                  fontFamily: "inherit",
                  fontOpticalSizing: "inherit",
                  fontKerning: "inherit",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  verticalAlign: "baseline"
                },
                children: "2. Kepedulian"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 250,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: "Arti kata peduli adalah mengindahkan, memperhatikan dan menghiraukan. Rasa kepedulian dapat dilakukan terhadap lingkungan sekitar dan berbagai hal yang berkembang didalamnya.Nilai kepedulian sebagai mahasiswa dapat diwujudkan dengan berusaha memantau jalannya proses pembelajaran, memantau sistem pengelolaan sumber daya dikampus serta memantau kondisi infrastruktur di kampus. Selain itu, secara umum sebagai masyarakat dapat diwujudkan dengan peduli terhadap sesama seperti dengan turut membantu jika terjadi bencana alam, serta turut membantu meningkatkan lingkungan sekitar tempat tinggal maupun di lingkungan tempat bekerja baik dari sisi lingkungan alam maupun sosial terhadap individu dan kelompok lain."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 273,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("strong", {
              style: {
                boxSizing: "border-box"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("em", {
                style: {
                  boxSizing: "border-box",
                  margin: 0,
                  padding: 0,
                  border: 0,
                  fontVariant: "inherit",
                  fontWeight: "inherit",
                  fontStretch: "inherit",
                  fontSize: "inherit",
                  lineHeight: "inherit",
                  fontFamily: "inherit",
                  fontOpticalSizing: "inherit",
                  fontKerning: "inherit",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  verticalAlign: "baseline"
                },
                children: "3. Kemandirian"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 333,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 332,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 308,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: "Di dalam beberapa buku pembelajaran, dikatakan bahwa mandiri berarti dapat berdiri diatas kaki sendiri, artinya tidak banyak bergantung kepada orang lain dalam berbagai hal. Kemandirian dianggap sebagai suatu hal yang penting harus dimiliki oleh seorang pemimpin, karena tampa kemandirian seseorang tidak akan mampu memimpin orang lain."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 356,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("strong", {
              style: {
                boxSizing: "border-box"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("em", {
                style: {
                  boxSizing: "border-box",
                  margin: 0,
                  padding: 0,
                  border: 0,
                  fontVariant: "inherit",
                  fontWeight: "inherit",
                  fontStretch: "inherit",
                  fontSize: "inherit",
                  lineHeight: "inherit",
                  fontFamily: "inherit",
                  fontOpticalSizing: "inherit",
                  fontKerning: "inherit",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  verticalAlign: "baseline"
                },
                children: "4. Kedisiplinan"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 411,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 410,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 386,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: "Definisi dari kata disiplin ialah ketaatan atau kepatuhan kepada peraturan. Sebaliknya untuk mengatur kehidupan manusia memerlukan hidup yang disiplin. Manfaat dari disiplin ialah seseorang dapat mencpai tujuan dengan waktu yang lebih efisien. Kedisiplinan memiliki dampak yang sama dngan nilai-nilai antikorupsi lainnya yaitu dapat menumbuhkan kepercayaan dari orang lain dalam berbagai hal. Kedisiplinan dapat diwujudkan antara lain dalam bentuk kemampuan mengatur waktu dengan baik, kepatuhan kepada seluruh peraturan dan ketentuan yang berlaku, mengerjakan segala sesuatu dengan tepat waktu, dan fokus pada pekerjaan."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 434,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("strong", {
              style: {
                boxSizing: "border-box"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("em", {
                style: {
                  boxSizing: "border-box",
                  margin: 0,
                  padding: 0,
                  border: 0,
                  fontVariant: "inherit",
                  fontWeight: "inherit",
                  fontStretch: "inherit",
                  fontSize: "inherit",
                  lineHeight: "inherit",
                  fontFamily: "inherit",
                  fontOpticalSizing: "inherit",
                  fontKerning: "inherit",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  verticalAlign: "baseline"
                },
                children: "5. Tanggung Jawab"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 493,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 492,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 468,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: "Kata tanggung jawab adalah keadaan wajib menanggung segala sesuatunya (kalau terjadi apa-apa boleh dituntut, dipersalahkan dan diperkarakan). Seseorang yang memiliki tanggung jawab akan memiliki kecenderungan menyelesaikan tugas dengan lebih baik. Seseorang yang dapat menunaikan tanggung jawabnya sekecil apa-pun itu dengan baik akan mendapatkan kepercayaan dari orang lain. Penerapan nilai tanggung jawab antara lain dapat diwujudkan dalam bentuk belajar dengan sungguh-sungguh, lulus tepat waktu dengan nilai baik, mengerjakan tugas akademik dengan baik, menjaga amanah dan kepercayaan yang diberikan."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 516,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("strong", {
              style: {
                boxSizing: "border-box"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("em", {
                style: {
                  boxSizing: "border-box",
                  margin: 0,
                  padding: 0,
                  border: 0,
                  fontVariant: "inherit",
                  fontWeight: "inherit",
                  fontStretch: "inherit",
                  fontSize: "inherit",
                  lineHeight: "inherit",
                  fontFamily: "inherit",
                  fontOpticalSizing: "inherit",
                  fontKerning: "inherit",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  verticalAlign: "baseline"
                },
                children: "6. Kerja Keras"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 575,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 574,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 550,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: "Kerja keras didasari dengan adanya kemauan. Di dalam kemauan terkandung ketekadan, ketekunan, daya tahan, daya kerja, pendirian keberanian, ketabahan, keteguhan dan pantang mundur. Bekerja keras merupakan hal yang penting guna tercapainya hasil yang sesuai dengan target. Akan tetapi bekerja keras akan menjadi tidak berguna jika tanpa adanya pengetahuan."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 598,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("strong", {
              style: {
                boxSizing: "border-box"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("em", {
                style: {
                  boxSizing: "border-box",
                  margin: 0,
                  padding: 0,
                  border: 0,
                  fontVariant: "inherit",
                  fontWeight: "inherit",
                  fontStretch: "inherit",
                  fontSize: "inherit",
                  lineHeight: "inherit",
                  fontFamily: "inherit",
                  fontOpticalSizing: "inherit",
                  fontKerning: "inherit",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  verticalAlign: "baseline"
                },
                children: "7. Kesederhanaan"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 653,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 652,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 628,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: "Gaya hidup merupakan suatu hal yang sangat penting bagi interaksi dengan masyarakat disekitar. Dengan gaya hidup yang sederhana manusia dibiasakan untuk tidak hidup boros, tidak sesuai dengan kemampuannya. Dengan gaya hidup yang sederhana, seseorang juga dibina untuk memprioritaskan kebutuhan diatas keinginannya."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 676,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("strong", {
              style: {
                boxSizing: "border-box"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("em", {
                style: {
                  boxSizing: "border-box",
                  margin: 0,
                  padding: 0,
                  border: 0,
                  fontVariant: "inherit",
                  fontWeight: "inherit",
                  fontStretch: "inherit",
                  fontSize: "inherit",
                  lineHeight: "inherit",
                  fontFamily: "inherit",
                  fontOpticalSizing: "inherit",
                  fontKerning: "inherit",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  verticalAlign: "baseline"
                },
                children: "8. Keberanian"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 731,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 730,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 706,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: "Keberanian dapat diwujudkandalam bentuk berani mengatakan dan membela kebenaran, berani mengakui kesalahan, berani bertanggung jawab, dan sebagainya. Keberanian sangat diperlukan untuk mencapai kesuksesan dan keberanian akan semakin matang jika diiringi dengan keyakinan, serta keyakinan akan semakin kuat jika pengetahuannya juga kuat."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 754,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("strong", {
              style: {
                boxSizing: "border-box"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("em", {
                style: {
                  boxSizing: "border-box",
                  margin: 0,
                  padding: 0,
                  border: 0,
                  fontVariant: "inherit",
                  fontWeight: "inherit",
                  fontStretch: "inherit",
                  fontSize: "inherit",
                  lineHeight: "inherit",
                  fontFamily: "inherit",
                  fontOpticalSizing: "inherit",
                  fontKerning: "inherit",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  verticalAlign: "baseline"
                },
                children: "9. Keadilan"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 809,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 808,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 784,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: "Berdasarkan arti katanya, adil adalah sama berat, tidak berat sebelah dan tidak memihak. Keadilan dari sudut pandang bangsa Indonesia disebut juga keadilan sosial, secara jelas dicantumkan dalam pancasila sila ke-2 dan ke-5, serta UUD 1945. Keadilan adalah penilaian dengan memberikan kepada siapapun sesuai dengan apa yang menjadi haknya, yakni dengan bertindak proposional dan tidak melanggar hukum. Keadilan berkaitan erat dengan hak, dalam konsepsi bangsa Indonesia hak tidak dapat dipisahkan dengan kewajiban. Dalam konteks pembangunan bangsa Indonesia keadilan tidak bersifat sektoral tetapi meliputi ideologi. Untuk menciptakan masyarakat yang adil dan makmur. Adil dalam kemakmuran dan makmur dalam keadilan."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 832,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: "Sedangkan Kebijakan/Prinsip anti korupsi, yaitu :"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 867,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("strong", {
              style: {
                boxSizing: "border-box"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("em", {
                style: {
                  boxSizing: "border-box",
                  margin: 0,
                  padding: 0,
                  border: 0,
                  fontVariant: "inherit",
                  fontWeight: "inherit",
                  fontStretch: "inherit",
                  fontSize: "inherit",
                  lineHeight: "inherit",
                  fontFamily: "inherit",
                  fontOpticalSizing: "inherit",
                  fontKerning: "inherit",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  verticalAlign: "baseline"
                },
                children: "1. Akuntabilitas"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 918,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 917,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 893,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: "Akuntabilitas adalah kesesuaian antara aturan dan pelaksanaan kerja. Semua lembaga mempertanggung jawabkan kinerjanya sesuai aturan main baik dalam bentuk konvensi (de facto) maupun konstitusi (de jure), baik pada level budaya (individu dengan individu) maupun pada level lembaga. Akuntabilitas publik secara tradisional dipahami sebagai alat yang digunakan untuk mengawasi dan mengarahkan perilaku administrasi dengan cara memberikan kewajiban untuk dapat memberikan jawaban kepada sejumlah otoritas eksternal ."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 941,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: "Selain itu akuntabilitas publik dalam arti yang lebih fundamental merujuk kepada kemampuan seseorang terkait dengan kinerja yang diharapkan. Seseorang yang diberikan jawaban ini haruslah seseorang yang memiliki legitimasi untuk melakukan pengawasan dan mengharapkan kinerja . Akuntabilitas publik memiliki pola-pola tertentu dalam mekanismenya, antara lain adalah akuntabilitas program, akuntablitas proses, akuntailitas keuangan, akuntabilitas outcome, akuntabilitas hukum, dan akuntabilitas politik . Dalam pelaksanaannya, akuntabilitas harus dapat diukur dan dipertanggungjawabkan melalui mekanisme pelaporan dan pertanggungjawaban atas semua kegiatan yang dilakukan. Evaluasi atas kinerja administrasi, proses pelaksanaan, dampak dan manfaat yang diperoleh masyarakat baik secara langsung maupun manfaat jangka panjang dari sebuah kegiatan."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 974,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("strong", {
              style: {
                boxSizing: "border-box"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("em", {
                style: {
                  boxSizing: "border-box",
                  margin: 0,
                  padding: 0,
                  border: 0,
                  fontVariant: "inherit",
                  fontWeight: "inherit",
                  fontStretch: "inherit",
                  fontSize: "inherit",
                  lineHeight: "inherit",
                  fontFamily: "inherit",
                  fontOpticalSizing: "inherit",
                  fontKerning: "inherit",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  verticalAlign: "baseline"
                },
                children: "2. Transparansi"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1036,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1035,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1011,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: "Prinsip transparansi penting karena pemberantasan korupsi dimulai dari transparansi dan mengharuskan semua proses kebijakan dilakukan secara terbuka, sehingga segala bentuk penyimpangan dapat diketahui oleh publik. Transparansi menjadi pintu masuk sekaligus kontrol bagi seluruh proses dinamika struktural kelembagaan. Dalam bentuk yang paling sederhana, transparansi mengacu pada keterbukaan dan kejujuran untuk saling menjunjung tinggi kepercayaan karena kepercayaan, keterbukaan, dan kejujuran ini merupakan modal awal yang sangat berharga bagi semua orang untuk melanjutkan hidupnya di masa mendatang. Dalam prosesnya transparansi dibagi menjadi lima, yaitu :"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1059,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: "\u2013 Proses penganggaran,"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1094,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: ["\u2013 Proses penyusunan kegiatan, ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {
              style: {
                boxSizing: "border-box"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1144,
              columnNumber: 47
            }, this), " \u2013 Proses pembahasan, ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {
              style: {
                boxSizing: "border-box"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1145,
              columnNumber: 36
            }, this), " \u2013 Proses pengawasan, dan ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {
              style: {
                boxSizing: "border-box"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1146,
              columnNumber: 33
            }, this), " \u2013 Proses evaluasi.", " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1120,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {
              style: {
                boxSizing: "border-box"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1173,
              columnNumber: 17
            }, this), " Proses penganggaran bersifat bottom up, mulai dari perencanaan, implementasi, laporan pertanggungjawaban dan penilaian (evaluasi) terhadap kinerja anggaran."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1149,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {
              style: {
                boxSizing: "border-box"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1201,
              columnNumber: 17
            }, this), " Di dalam proses penyusunan kegiatan atau proyek pembangunan terkait dengan proses pembahasan tentang sumber-sumber pendanaan (anggaran pendapatan) dan alokasi anggaran (anggaran belanja). ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {
              style: {
                boxSizing: "border-box"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1204,
              columnNumber: 27
            }, this), " Proses pembahasan membahas tentang pembutan rancangan peraturan yang berkaitan dengan strategi penggalangan (pemungutan dana), mekanisme pengelolaan proyek mulai dari pelaksanaan tender, pengerjaan teknis, pelaporan finansial dan pertanggungjawaban secara teknis. ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {
              style: {
                boxSizing: "border-box"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1208,
              columnNumber: 51
            }, this), " ", "Proses pengawasan dalam pelksnaaan program dan proyek pembangunan berkaitan dengan kepentingan publik dan lebih khusus lagi adalah proyek-proyek yang diusulkan oleh masyarakat sendiri.", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {
              style: {
                boxSizing: "border-box"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1212,
              columnNumber: 17
            }, this), " Proses evaluasi ini berlaku terhadap penyelenggaraan proyek dijalankan secara terbuka dan bukan hanya pertanggungjawaban secara administratif, tapi juga secara teknis dan fisik dari setiap output kerja-kerja pembangunan."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1177,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("strong", {
              style: {
                boxSizing: "border-box"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("em", {
                style: {
                  boxSizing: "border-box",
                  margin: 0,
                  padding: 0,
                  border: 0,
                  fontVariant: "inherit",
                  fontWeight: "inherit",
                  fontStretch: "inherit",
                  fontSize: "inherit",
                  lineHeight: "inherit",
                  fontFamily: "inherit",
                  fontOpticalSizing: "inherit",
                  fontKerning: "inherit",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  verticalAlign: "baseline"
                },
                children: "3. Kewajaran"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1242,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1241,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1217,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: "Prinsip fairness atau kewajaran ini ditunjukkan untuk mencegah terjadinya manipulasi (ketidakwajaran) dalam penganggaran, baik dalam bentuk mark up maupun ketidakwajaran dalam bentuk lainnya. Sifat-sifat prinsip ketidakwajaran ini terdiri dari lima hal penting komperehensif dan disiplin, fleksibilitas, terprediksi, kejujuran dan informatif. Komperehensif dan disiplin berarti mempertimbangkan keseluruhan aspek, berkesinambungan, taat asas, prinsip pembebanan, pengeluaran dan tidak melampaui batas (off budget). Fleksibilitas artinya adalah adanya kebijakan tertentu untuk mencapai efisiensi dan efektifitas. Terprediksi berarti adanya ketetapan dlam perencanaan atas dasar asas value for money untuk menghindari defisit dalam tahun anggaran berjalan. Anggaran yang terprediksi merupakan cerminan dari adanya prinsip fairness di dalam proses perencanaan pembangunan. Kejujuran mengandung arti tidak adanya bias perkiraan penerimaan maupun pengeluaran yang disengaja yang berasal dari pertimbangan teknis maupun politis. Kejujuran merupakan bagian pokok dari prinsip fairness. Penerapan sifat informatif agar dapat tercapainya sistem informasi pelaporan yang teratur dan informatif. Sistem informatif ini dijadikan sebagai dasar penilaian kinerja, kejujuran dan proses pengambilan keputusan selain itu sifat ini merupakan ciri khas dari kejujuran."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1265,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("strong", {
              style: {
                boxSizing: "border-box"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("em", {
                style: {
                  boxSizing: "border-box",
                  margin: 0,
                  padding: 0,
                  border: 0,
                  fontVariant: "inherit",
                  fontWeight: "inherit",
                  fontStretch: "inherit",
                  fontSize: "inherit",
                  lineHeight: "inherit",
                  fontFamily: "inherit",
                  fontOpticalSizing: "inherit",
                  fontKerning: "inherit",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  verticalAlign: "baseline"
                },
                children: "4. Kebijakan"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1334,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1333,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1309,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: "Kebijakan ini berperan untuk mengatur tata interaksi agar tidak terjadi penyimpangan yang dapat merugikan negara dan masyarakat. Kebijakan anti korupsi ini tidak selalu identik dengan undang-undang anti korupsi, namun bisa berupa undang-undang kebebasan mengakses informasi, undang-undang desentralisasi, undang-undang anti-monopoli, maupun lainnya yang dapat memudahkan masyarakat mengetahui sekaligus mengontrol terhadap kinerja dan penggunaan anggaran negara oleh para pejabat negara. Aspek-aspek kebijakan terdiri dari isi kebijakan, pembuat kebijakan, pelaksana kebijakan, kultur kebijakan. Kebijakan anti korupsi akan efektif apabila didalamnya terkandung unsur-unsur yang terkait dengan persoalan korupsi dan kualitas dari isi kebijakan tergantung pada kualitas dan integritas pembuatnya. Kebijakan yang telah dibuat dapat berfungsi apabila didukung oleh aktor-aktor penegak kebijakan yaitu kepolisian, kejaksaan, pengadilan, pengacara, dan lembaga pemasyarakatan. Eksistensi sebuah kebijakan tersebut terkait dengan nilai-nilai, pemahaman, sikap, persepsi dan kesadaran masyarakat terhadap hukum atau undang-undang anti korupsi. Lebih jauh lagi kultur kebijakan ini akan menentukan tingkat partisipasi masyarakat dalam pemberantasan korupsi."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1357,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("strong", {
              style: {
                boxSizing: "border-box"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("em", {
                style: {
                  boxSizing: "border-box",
                  margin: 0,
                  padding: 0,
                  border: 0,
                  fontVariant: "inherit",
                  fontWeight: "inherit",
                  fontStretch: "inherit",
                  fontSize: "inherit",
                  lineHeight: "inherit",
                  fontFamily: "inherit",
                  fontOpticalSizing: "inherit",
                  fontKerning: "inherit",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  verticalAlign: "baseline"
                },
                children: "5. Kontrol Kebijakan"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1424,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1423,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1399,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              boxSizing: "border-box",
              margin: "0px 0px 25px",
              padding: 0,
              border: 0,
              fontVariantNumeric: "inherit",
              fontVariantEastAsian: "inherit",
              fontVariantAlternates: "inherit",
              fontVariantPosition: "inherit",
              fontStretch: "inherit",
              fontSize: 15,
              lineHeight: "1.6",
              fontFamily: "Nobile, sans-serif",
              fontOpticalSizing: "inherit",
              fontKerning: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              verticalAlign: "baseline",
              color: "rgb(62, 62, 62)",
              backgroundColor: "rgb(255, 255, 255)",
              textAlign: "justify"
            },
            children: "Kontrol kebijakan merupakan upaya agar kebijakan yang dibuat betul-betul efektif dan mengeliminasi semua bentuk korupsi. Bentuk kontrol kebijakan berupa partisipasi, evolusi dan reformasi. Kontrol kebijakan partisipasi yaitu melakukan kontrol terhadap kebijakan dengan ikut serta dalam penyusunan dan pelaksanaannya. Kontrol kebijakan evolusi yaitu dengan menawarkan alternatif kebijakan baru yang dianggap lebih layak. Kontrol kebijakan reformasi yaitu mengontrol dengan mengganti kebijakan yang dianggap tidak sesuai."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1447,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1486,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      id: "preloader"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1489,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
      href: "#",
      className: "back-to-top d-flex align-items-center justify-content-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("i", {
        className: "bi bi-arrow-up-short"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1490,
        columnNumber: 92
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1490,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Box");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvaW1wb3J0SlMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9pbWFnZS50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hbnRpLWJyaWJlcnkuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9Cb3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiRm9vdGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwid2luZG93IiwibG9jYXRpb24iLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJIZWFkZXIiLCJhc1BhdGgiLCJzcGxpdCIsImN1cnNvciIsInNlbGVjdCIsImVsIiwiYWxsIiwidHJpbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInF1ZXJ5U2VsZWN0b3IiLCJvbiIsInR5cGUiLCJsaXN0ZW5lciIsInNlbGVjdEVsIiwiZm9yRWFjaCIsImUiLCJhZGRFdmVudExpc3RlbmVyIiwib25zY3JvbGwiLCJpbXBvcnRKUyIsIlB1cmVDb3VudGVyIiwiQU9TIiwiR0xpZ2h0Ym94IiwiSXNvdG9wZSIsIlN3aXBlciIsInBvcnRmb2xpb0NvbnRhaW5lciIsInBvcnRmb2xpb0lzb3RvcGUiLCJpdGVtU2VsZWN0b3IiLCJwb3J0Zm9saW9GaWx0ZXJzIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJhcnJhbmdlIiwiZmlsdGVyIiwiZ2V0QXR0cmlidXRlIiwicmVmcmVzaCIsImhlcm9DYXJvdXNlbEluZGljYXRvcnMiLCJoZXJvQ2Fyb3VzZWxJdGVtcyIsIml0ZW0iLCJpbmRleCIsImlubmVySFRNTCIsInNlbGVjdG9yIiwic3BlZWQiLCJsb29wIiwiYXV0b3BsYXkiLCJkZWxheSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwic2xpZGVzUGVyVmlldyIsInBhZ2luYXRpb24iLCJjbGlja2FibGUiLCJpbml0IiwiZHVyYXRpb24iLCJlYXNpbmciLCJvbmNlIiwibWlycm9yIiwicHJlbG9hZGVyIiwiQWJvdXRVcyIsInVzZUVmZmVjdCIsInAiLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwicHQiLCJwYiIsImJveFNpemluZyIsIm1hcmdpbiIsInBhZGRpbmciLCJib3JkZXIiLCJmb250VmFyaWFudE51bWVyaWMiLCJmb250VmFyaWFudEVhc3RBc2lhbiIsImZvbnRWYXJpYW50QWx0ZXJuYXRlcyIsImZvbnRWYXJpYW50UG9zaXRpb24iLCJmb250U3RyZXRjaCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImZvbnRGYW1pbHkiLCJmb250T3B0aWNhbFNpemluZyIsImZvbnRLZXJuaW5nIiwiZm9udEZlYXR1cmVTZXR0aW5ncyIsImZvbnRWYXJpYXRpb25TZXR0aW5ncyIsInZlcnRpY2FsQWxpZ24iLCJjbGVhciIsImhlaWdodCIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFZhcmlhbnQiLCJmb250V2VpZ2h0IiwidGV4dEFsaWduIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7O1FBRUE7UUFDQTtRQUNBLG1DQUFtQztRQUNuQztRQUNBO1FBQ0E7UUFDQTtRQUNBLGtCQUFrQixxQkFBcUI7UUFDdkM7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsY0FBYztRQUNkLElBQUk7UUFDSjs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDekhBLDZEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQzdCLFFBQU1DLE1BQU0sR0FBR0MsNkRB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXo0Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBNjdDRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNzdDRixlQWc4Q0U7QUFBSyxRQUFFLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaDhDRixlQWk4Q0U7QUFBRyxVQUFJLEVBQUMsR0FBUjtBQUFZLGVBQVMsRUFBQyw4REFBdEI7QUFBQSw2QkFBcUY7QUFBRyxpQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBajhDRjtBQUFBLGtCQURGO0FBczhDRCxDOzs7Ozs7Ozs7OztBQ3I5Q0QsOEM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvYW50aS1icmliZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicGFnZXMvYW50aS1icmliZXJ5XCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuLi9cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvX25leHQvXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hbnRpLWJyaWJlcnkuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgcmV0dXJuICg8PlxyXG4gICAgICAgIDxmb290ZXIgaWQ9XCJmb290ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXRvcFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+UFQgSGlkYXlhdCBCZXJzYXVkYXJhIEFiYWRpIChIQkEpPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0gSmwuIE1hc2ppZCBBbCBNdWphaGlkaW4gUlQuIDAwMyBSVyAwMSBOby4xMDAsIEtlbC4gSmF0aXJhaGF5dSBLZWMuIFBvbmRvayBHZWRlLCBLb3RhIEJla2FzaSwgMTc0MTQsIEphYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtIEtvbXBsZWsgR3JhbmQgQ2l0eSwgRm9yZXN0IHZpbGxlIEsxMiBOby4gMjMsIEpsLiBNVCBIYXJ5b25vIEJhbGlrcGFwYW4sIEthbHRpbVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+UGhvbmU6PC9zdHJvbmc+IDA4MTIgMTI4MiAzMDMwPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RW1haWw6PC9zdHJvbmc+IGFkbWluQGhpZGF5YXRiZXJzYXVkYXJhYWJhZGkuY29tPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1saW5rcyBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLi9cIiBjbGFzc05hbWU9XCJ0d2l0dGVyXCI+PGkgY2xhc3NOYW1lPVwiYnggYnhsLXR3aXR0ZXJcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi4vXCIgY2xhc3NOYW1lPVwiZmFjZWJvb2tcIj48aSBjbGFzc05hbWU9XCJieCBieGwtZmFjZWJvb2tcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi4vXCIgY2xhc3NOYW1lPVwiaW5zdGFncmFtXCI+PGkgY2xhc3NOYW1lPVwiYnggYnhsLWluc3RhZ3JhbVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLi9cIiBjbGFzc05hbWU9XCJnb29nbGUtcGx1c1wiPjxpIGNsYXNzTmFtZT1cImJ4IGJ4bC1za3lwZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLi9cIiBjbGFzc05hbWU9XCJsaW5rZWRpblwiPjxpIGNsYXNzTmFtZT1cImJ4IGJ4bC1saW5rZWRpblwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yIGNvbC1tZC02IGZvb3Rlci1saW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aDQ+VXNlZnVsIExpbmtzPC9oND5cclxuICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48aSBjbGFzc05hbWU9XCJieCBieC1jaGV2cm9uLXJpZ2h0XCI+PC9pPiA8YSBjbGFzc05hbWU9J3Njcm9sbHRvJyBocmVmPVwiLi9cIj5Ib21lPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImJ4IGJ4LWNoZXZyb24tcmlnaHRcIj48L2k+IDxhIGNsYXNzTmFtZT0nc2Nyb2xsdG8nIGhyZWY9XCIuL2Fib3V0LXVzXCI+QWJvdXQgdXM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGkgY2xhc3NOYW1lPVwiYnggYngtY2hldnJvbi1yaWdodFwiPjwvaT4gPGEgY2xhc3NOYW1lPSdzY3JvbGx0bycgaHJlZj1cIi4vc2VydmljZXNcIj5TZXJ2aWNlczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48aSBjbGFzc05hbWU9XCJieCBieC1jaGV2cm9uLXJpZ2h0XCI+PC9pPiA8YSBjbGFzc05hbWU9J3Njcm9sbHRvJyBocmVmPVwiLi9jb250YWN0LXVzXCI+Q29udGFjdDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1tZC02IGZvb3Rlci1saW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aDQ+T3VyIFNlcnZpY2VzPC9oND5cclxuICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24gPSAoJy9zZXJ2aWNlcycpfT48aSBjbGFzc05hbWU9XCJieCBieC1jaGV2cm9uLXJpZ2h0XCI+PC9pPiBHZW5lcmFsIFN1cHBsaWVzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uID0gKCcvc2VydmljZXMnKX0+PGkgY2xhc3NOYW1lPVwiYnggYngtY2hldnJvbi1yaWdodFwiPjwvaT4gVHJhbnNwb3J0YXRpb24gU2VydmljZTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbiA9ICgnL3NlcnZpY2VzJyl9PjxpIGNsYXNzTmFtZT1cImJ4IGJ4LWNoZXZyb24tcmlnaHRcIj48L2k+IENpdmlsIENvbnN0cnVjdGlvbjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbiA9ICgnL3NlcnZpY2VzJyl9PjxpIGNsYXNzTmFtZT1cImJ4IGJ4LWNoZXZyb24tcmlnaHRcIj48L2k+IFNhZmV0eS9FbnZpcm8gTWF0ZXJpYWwgU3VwcGxpZXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24gPSAoJy9zZXJ2aWNlcycpfT48aSBjbGFzc05hbWU9XCJieCBieC1jaGV2cm9uLXJpZ2h0XCI+PC9pPiBUb29scyBTdXBwbGllczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLW1kLTYgZm9vdGVyLW5ld3NsZXR0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGg0Pk91ciBOZXdzbGV0dGVyPC9oND5cclxuICAgICAgICAgICAgICAgICAgPHA+SW5wdXQgeW91ciBlbWFpbCB0byBnZXQgb3VyIHVwZGF0ZXMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIC8+PGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1YnNjcmliZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5cmlnaHRcIj5cclxuICAgICAgICAgICAgICAmY29weTsgQ29weXJpZ2h0IDxzdHJvbmc+PHNwYW4+UnVtYWggVGVrbm9sb2dpPC9zcGFuPjwvc3Ryb25nPi4gQWxsIFJpZ2h0cyBSZXNlcnZlZCB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVkaXRzXCI+XHJcbiAgICAgICAgICAgICAgRGVzaWduZWQgYnkgPGEgaHJlZj1cImh0dHBzOi8vYm9vdHN0cmFwbWFkZS5jb20vXCI+Qm9vdHN0cmFwTWFkZTwvYT48YnIvPlxyXG4gICAgICAgICAgICAgIFNjcmlwdCB1c2VkIGJ5IDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvXCI+TmV4dEpTPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC8+KVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgcmV0dXJuICg8PlxyXG4gICAgICA8aGVhZGVyIGlkPVwiaGVhZGVyXCIgY2xhc3NOYW1lPVwiZml4ZWQtdG9wIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuXHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibG9nb1wiPjxhIGhyZWY9XCIuL1wiPkhCIEFCQURJPC9hPjwvaDE+XHJcbiAgICAgICAgICB7LyogPGEgaHJlZj1cIi4vXCIgY2xhc3NOYW1lPVwibG9nb1wiPjxpbWcgc3JjPVwiYXNzZXRzL2ltZy9oYmEucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz48L2E+ICovfVxyXG5cclxuICAgICAgICAgIDxuYXYgaWQ9XCJuYXZiYXJcIiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9e1wibmF2LWxpbmsgc2Nyb2xsdG8gXCIgKyAoKHJvdXRlcj8uYXNQYXRoPy5zcGxpdChcIi9cIilbMV0gPT09ICcnID8gJ2FjdGl2ZScgOiAnJykpfSBocmVmPVwiLi9cIj5Ib21lPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nZHJvcGRvd24nPjxhIGNsYXNzTmFtZT17XCJuYXYtbGluayBzY3JvbGx0byBcIiArICgoKChyb3V0ZXI/LmFzUGF0aD8uc3BsaXQoXCIvXCIpWzFdID09PSAnYWJvdXQtdXMnKSB8fCAocm91dGVyPy5hc1BhdGg/LnNwbGl0KFwiL1wiKVsxXSA9PT0gJ2FudGktYnJpYmVyeScpKSA/ICdhY3RpdmUnIDogJycpKX0gb25DbGljaz17KCkgPT4gZmFsc2V9IHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fT48c3Bhbj5BYm91dDwvc3Bhbj4gPGkgY2xhc3NOYW1lPVwiYmkgYmktY2hldnJvbi1kb3duXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT17XCJuYXYtbGluayBzY3JvbGx0byBcIiArICgocm91dGVyPy5hc1BhdGg/LnNwbGl0KFwiL1wiKVsxXSA9PT0gJ2Fib3V0LXVzJyA/ICdhY3RpdmUnIDogJycpKX0gaHJlZj1cIi4vYWJvdXQtdXNcIj5BYm91dCBVczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPXtcIm5hdi1saW5rIHNjcm9sbHRvIFwiICsgKChyb3V0ZXI/LmFzUGF0aD8uc3BsaXQoXCIvXCIpWzFdID09PSAnYW50aS1icmliZXJ5JyA/ICdhY3RpdmUnIDogJycpKX0gaHJlZj1cIi4vYW50aS1icmliZXJ5XCI+QW50aSBCcmliZXJ5IFBvbGljaWVzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgey8qIDxsaT48YSBjbGFzc05hbWU9e1wibmF2LWxpbmsgc2Nyb2xsdG8gXCIgKyAoKHJvdXRlcj8uYXNQYXRoPy5zcGxpdChcIi9cIilbMV0gPT09ICdhYm91dC11cycgPyAnYWN0aXZlJyA6ICcnKSl9IGhyZWY9XCIuL2Fib3V0LXVzXCI+QWJvdXQ8L2E+PC9saT4gKi99XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT17XCJuYXYtbGluayBzY3JvbGx0byBcIiArICgocm91dGVyPy5hc1BhdGg/LnNwbGl0KFwiL1wiKVsxXSA9PT0gJ3NlcnZpY2VzJyA/ICdhY3RpdmUnIDogJycpKX0gaHJlZj1cIi4vc2VydmljZXNcIj5TZXJ2aWNlczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9e1wibmF2LWxpbmsgc2Nyb2xsdG8gXCIgKyAoKHJvdXRlcj8uYXNQYXRoPy5zcGxpdChcIi9cIilbMV0gPT09ICdjb250YWN0LXVzJyA/ICdhY3RpdmUnIDogJycpKX0gaHJlZj1cIi4vY29udGFjdC11c1wiPkNvbnRhY3Q8L2E+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYmkgYmktbGlzdCBtb2JpbGUtbmF2LXRvZ2dsZVwiPjwvaT5cclxuICAgICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICA8Lz4pXHJcbn0iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuICAgIFxyXG4vKipcclxuICogRWFzeSBzZWxlY3RvciBoZWxwZXIgZnVuY3Rpb25cclxuICovXHJcbmNvbnN0IHNlbGVjdCA9IChlbCwgYWxsID0gZmFsc2UpID0+IHtcclxuICAgIGVsID0gZWwudHJpbSgpXHJcbiAgICBpZiAoYWxsKSB7XHJcbiAgICAgIHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbCldXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVhc3kgZXZlbnQgbGlzdGVuZXIgZnVuY3Rpb25cclxuICAgKi9cclxuICBjb25zdCBvbiA9ICh0eXBlLCBlbCwgbGlzdGVuZXIsIGFsbCA9IGZhbHNlKSA9PiB7XHJcbiAgICBsZXQgc2VsZWN0RWwgPSBzZWxlY3QoZWwsIGFsbClcclxuICAgIGlmIChzZWxlY3RFbCkge1xyXG4gICAgICBpZiAoYWxsKSB7XHJcbiAgICAgICAgc2VsZWN0RWwuZm9yRWFjaChlID0+IGUuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VsZWN0RWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRWFzeSBvbiBzY3JvbGwgZXZlbnQgbGlzdGVuZXIgXHJcbiAgICovXHJcbiAgY29uc3Qgb25zY3JvbGwgPSAoZWwsIGxpc3RlbmVyKSA9PiB7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBsaXN0ZW5lcilcclxuICB9XHJcblxyXG5leHBvcnQgY29uc3QgaW1wb3J0SlMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBcclxuICAgIC8vICAgY29uc3QgaW5pdFRlcm1pbmFsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgUHVyZUNvdW50ZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICBhd2FpdCBpbXBvcnQoJy4uL3B1YmxpYy9hc3NldHMvdmVuZG9yL3B1cmVjb3VudGVyL3B1cmVjb3VudGVyX3ZhbmlsbGEuanMnKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgQU9TID0gYXdhaXQgaW1wb3J0KCcuLi9wdWJsaWMvYXNzZXRzL3ZlbmRvci9hb3MvYW9zLmpzJylcclxuICAgICAgICAgIGF3YWl0IGltcG9ydCgnLi4vcHVibGljL2Fzc2V0cy92ZW5kb3IvYm9vdHN0cmFwL2pzL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzJylcclxuICAgICAgICAgIGNvbnN0IEdMaWdodGJveCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgIGF3YWl0IGltcG9ydCgnLi4vcHVibGljL2Fzc2V0cy92ZW5kb3IvZ2xpZ2h0Ym94L2pzL2dsaWdodGJveC5taW4uanMnKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgSXNvdG9wZSA9ICBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IGltcG9ydCgnLi4vcHVibGljL2Fzc2V0cy92ZW5kb3IvaXNvdG9wZS1sYXlvdXQvaXNvdG9wZS5wa2dkLm1pbi5qcycpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCBTd2lwZXIgPSAgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCBpbXBvcnQoJy4uL3B1YmxpYy9hc3NldHMvdmVuZG9yL3N3aXBlci9zd2lwZXItYnVuZGxlLm1pbi5qcycpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhd2FpdCBpbXBvcnQoJy4uL3B1YmxpYy9hc3NldHMvdmVuZG9yL3BocC1lbWFpbC1mb3JtL3ZhbGlkYXRlLmpzJylcclxuICAgICAgICAgIGF3YWl0IGltcG9ydCgnLi4vcHVibGljL2Fzc2V0cy9qcy9tYWluLmpzJylcclxuICAgIFxyXG4gICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgIGxldCBwb3J0Zm9saW9Db250YWluZXIgPSBzZWxlY3QoJy5wb3J0Zm9saW8tY29udGFpbmVyJyk7XHJcbiAgICBcclxuICAgICAgICAgIGlmIChwb3J0Zm9saW9Db250YWluZXIpIHtcclxuICAgICAgICAgICAgbGV0IHBvcnRmb2xpb0lzb3RvcGUgPSBJc290b3BlKHBvcnRmb2xpb0NvbnRhaW5lciwge1xyXG4gICAgICAgICAgICAgIGl0ZW1TZWxlY3RvcjogJy5wb3J0Zm9saW8taXRlbSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgbGV0IHBvcnRmb2xpb0ZpbHRlcnMgPSBzZWxlY3QoJyNwb3J0Zm9saW8tZmx0ZXJzIGxpJywgdHJ1ZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgb24oJ2NsaWNrJywgJyNwb3J0Zm9saW8tZmx0ZXJzIGxpJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBwb3J0Zm9saW9GaWx0ZXJzLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbHRlci1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2ZpbHRlci1hY3RpdmUnKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgIHBvcnRmb2xpb0lzb3RvcGUuYXJyYW5nZSh7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlcicpXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgcG9ydGZvbGlvSXNvdG9wZS5vbignYXJyYW5nZUNvbXBsZXRlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBBT1MucmVmcmVzaCgpXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAvKipcclxuICAgICAgICAgICAqIEhlcm8gY2Fyb3VzZWwgaW5kaWNhdG9yc1xyXG4gICAgICAgICAgICovXHJcbiAgICAgICAgICBsZXQgaGVyb0Nhcm91c2VsSW5kaWNhdG9ycyA9IHNlbGVjdChcIiNoZXJvLWNhcm91c2VsLWluZGljYXRvcnNcIilcclxuICAgICAgICAgIGxldCBoZXJvQ2Fyb3VzZWxJdGVtcyA9IHNlbGVjdCgnI2hlcm9DYXJvdXNlbCAuY2Fyb3VzZWwtaXRlbScsIHRydWUpXHJcbiAgICBcclxuICAgICAgICAgIGhlcm9DYXJvdXNlbEl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIChpbmRleCA9PT0gMCkgP1xyXG4gICAgICAgICAgICBoZXJvQ2Fyb3VzZWxJbmRpY2F0b3JzLmlubmVySFRNTCArPSBcIjxsaSBkYXRhLWJzLXRhcmdldD0nI2hlcm9DYXJvdXNlbCcgZGF0YS1icy1zbGlkZS10bz0nXCIgKyBpbmRleCArIFwiJyBjbGFzcz0nYWN0aXZlJz48L2xpPlwiOlxyXG4gICAgICAgICAgICAgIGhlcm9DYXJvdXNlbEluZGljYXRvcnMuaW5uZXJIVE1MICs9IFwiPGxpIGRhdGEtYnMtdGFyZ2V0PScjaGVyb0Nhcm91c2VsJyBkYXRhLWJzLXNsaWRlLXRvPSdcIiArIGluZGV4ICsgXCInPjwvbGk+XCJcclxuICAgICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgKiBJbml0aWF0ZSBnbGlnaHRib3ggXHJcbiAgICAgICAgICAgKi9cclxuICAgICAgICAgIEdMaWdodGJveCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLmdsaWdodGJveCdcclxuICAgICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICBTd2lwZXIoJy50ZXN0aW1vbmlhbHMtc2xpZGVyJywge1xyXG4gICAgICAgICAgICBzcGVlZDogNjAwLFxyXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICAgIGRlbGF5OiA1MDAwLFxyXG4gICAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgICAgdHlwZTogJ2J1bGxldHMnLFxyXG4gICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgU3dpcGVyKCcucG9ydGZvbGlvLWRldGFpbHMtc2xpZGVyJywge1xyXG4gICAgICAgICAgICBzcGVlZDogNDAwLFxyXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICAgIGRlbGF5OiA1MDAwLFxyXG4gICAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICAgIHR5cGU6ICdidWxsZXRzJyxcclxuICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgQU9TLmluaXQoe1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgICAgICAgZWFzaW5nOiBcImVhc2UtaW4tb3V0XCIsXHJcbiAgICAgICAgICAgIG9uY2U6IHRydWUsXHJcbiAgICAgICAgICAgIG1pcnJvcjogZmFsc2VcclxuICAgICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICBQdXJlQ291bnRlcigpO1xyXG4gICAgICAgICAgLy8gQWRkIGxvZ2ljIHdpdGggYHRlcm1gXHJcbiAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgbGV0IHByZWxvYWRlciA9IHNlbGVjdCgnI3ByZWxvYWRlcicpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBwcmVsb2FkZXI/LnJlbW92ZSgpXHJcbiAgICAvLyAgIH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJy4uL3NoYXJlZC9saWIvaGVhZCdcbmltcG9ydCB7IHRvQmFzZTY0IH0gZnJvbSAnLi4vc2hhcmVkL2xpYi90by1iYXNlLTY0J1xuaW1wb3J0IHtcbiAgSW1hZ2VDb25maWcsXG4gIGltYWdlQ29uZmlnRGVmYXVsdCxcbiAgTG9hZGVyVmFsdWUsXG4gIFZBTElEX0xPQURFUlMsXG59IGZyb20gJy4uL3NlcnZlci9pbWFnZS1jb25maWcnXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbmNvbnN0IGxvYWRlZEltYWdlVVJMcyA9IG5ldyBTZXQ8c3RyaW5nPigpXG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICA7KGdsb2JhbCBhcyBhbnkpLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWVcbn1cblxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbJ2xhenknLCAnZWFnZXInLCB1bmRlZmluZWRdIGFzIGNvbnN0XG50eXBlIExvYWRpbmdWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MT0FESU5HX1ZBTFVFU1tudW1iZXJdXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyID0gKHJlc29sdmVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlclByb3BzID0ge1xuICBzcmM6IHN0cmluZ1xuICB3aWR0aDogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbn1cblxudHlwZSBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyA9IEltYWdlTG9hZGVyUHJvcHMgJiB7IHJvb3Q6IHN0cmluZyB9XG5cbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwPFxuICBMb2FkZXJWYWx1ZSxcbiAgKHByb3BzOiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG4+KFtcbiAgWydkZWZhdWx0JywgZGVmYXVsdExvYWRlcl0sXG4gIFsnaW1naXgnLCBpbWdpeExvYWRlcl0sXG4gIFsnY2xvdWRpbmFyeScsIGNsb3VkaW5hcnlMb2FkZXJdLFxuICBbJ2FrYW1haScsIGFrYW1haUxvYWRlcl0sXG4gIFsnY3VzdG9tJywgY3VzdG9tTG9hZGVyXSxcbl0pXG5cbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICdmaWxsJyxcbiAgJ2ZpeGVkJyxcbiAgJ2ludHJpbnNpYycsXG4gICdyZXNwb25zaXZlJyxcbiAgdW5kZWZpbmVkLFxuXSBhcyBjb25zdFxudHlwZSBMYXlvdXRWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MQVlPVVRfVkFMVUVTW251bWJlcl1cblxudHlwZSBQbGFjZWhvbGRlclZhbHVlID0gJ2JsdXInIHwgJ2VtcHR5J1xuXG50eXBlIE9uTG9hZGluZ0NvbXBsZXRlID0gKHJlc3VsdDoge1xuICBuYXR1cmFsV2lkdGg6IG51bWJlclxuICBuYXR1cmFsSGVpZ2h0OiBudW1iZXJcbn0pID0+IHZvaWRcblxudHlwZSBJbWdFbGVtZW50U3R5bGUgPSBOb25OdWxsYWJsZTxKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddWydzdHlsZSddPlxuXG5pbnRlcmZhY2UgU3RhdGljUmVxdWlyZSB7XG4gIGRlZmF1bHQ6IFN0YXRpY0ltYWdlRGF0YVxufVxuXG50eXBlIFN0YXRpY0ltcG9ydCA9IFN0YXRpY1JlcXVpcmUgfCBTdGF0aWNJbWFnZURhdGFcblxuZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKFxuICBzcmM6IFN0YXRpY1JlcXVpcmUgfCBTdGF0aWNJbWFnZURhdGFcbik6IHNyYyBpcyBTdGF0aWNSZXF1aXJlIHtcbiAgcmV0dXJuIChzcmMgYXMgU3RhdGljUmVxdWlyZSkuZGVmYXVsdCAhPT0gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGlzU3RhdGljSW1hZ2VEYXRhKFxuICBzcmM6IFN0YXRpY1JlcXVpcmUgfCBTdGF0aWNJbWFnZURhdGFcbik6IHNyYyBpcyBTdGF0aWNJbWFnZURhdGEge1xuICByZXR1cm4gKHNyYyBhcyBTdGF0aWNJbWFnZURhdGEpLnNyYyAhPT0gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYzogc3RyaW5nIHwgU3RhdGljSW1wb3J0KTogc3JjIGlzIFN0YXRpY0ltcG9ydCB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHNyYyA9PT0gJ29iamVjdCcgJiZcbiAgICAoaXNTdGF0aWNSZXF1aXJlKHNyYyBhcyBTdGF0aWNJbXBvcnQpIHx8XG4gICAgICBpc1N0YXRpY0ltYWdlRGF0YShzcmMgYXMgU3RhdGljSW1wb3J0KSlcbiAgKVxufVxuXG5leHBvcnQgdHlwZSBJbWFnZVByb3BzID0gT21pdDxcbiAgSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXSxcbiAgJ3NyYycgfCAnc3JjU2V0JyB8ICdyZWYnIHwgJ3dpZHRoJyB8ICdoZWlnaHQnIHwgJ2xvYWRpbmcnIHwgJ3N0eWxlJ1xuPiAmIHtcbiAgc3JjOiBzdHJpbmcgfCBTdGF0aWNJbXBvcnRcbiAgd2lkdGg/OiBudW1iZXIgfCBzdHJpbmdcbiAgaGVpZ2h0PzogbnVtYmVyIHwgc3RyaW5nXG4gIGxheW91dD86IExheW91dFZhbHVlXG4gIGxvYWRlcj86IEltYWdlTG9hZGVyXG4gIHF1YWxpdHk/OiBudW1iZXIgfCBzdHJpbmdcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvYWRpbmc/OiBMb2FkaW5nVmFsdWVcbiAgbGF6eUJvdW5kYXJ5Pzogc3RyaW5nXG4gIHBsYWNlaG9sZGVyPzogUGxhY2Vob2xkZXJWYWx1ZVxuICBibHVyRGF0YVVSTD86IHN0cmluZ1xuICB1bm9wdGltaXplZD86IGJvb2xlYW5cbiAgb2JqZWN0Rml0PzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RGaXQnXVxuICBvYmplY3RQb3NpdGlvbj86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0UG9zaXRpb24nXVxuICBvbkxvYWRpbmdDb21wbGV0ZT86IE9uTG9hZGluZ0NvbXBsZXRlXG59XG5cbmNvbnN0IHtcbiAgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzLFxuICBpbWFnZVNpemVzOiBjb25maWdJbWFnZVNpemVzLFxuICBsb2FkZXI6IGNvbmZpZ0xvYWRlcixcbiAgcGF0aDogY29uZmlnUGF0aCxcbiAgZG9tYWluczogY29uZmlnRG9tYWlucyxcbn0gPSAocHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgYXMgYW55IGFzIEltYWdlQ29uZmlnKSB8fCBpbWFnZUNvbmZpZ0RlZmF1bHRcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbLi4uY29uZmlnRGV2aWNlU2l6ZXMsIC4uLmNvbmZpZ0ltYWdlU2l6ZXNdXG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcbmFsbFNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuXG5mdW5jdGlvbiBnZXRXaWR0aHMoXG4gIHdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQsXG4gIGxheW91dDogTGF5b3V0VmFsdWUsXG4gIHNpemVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbik6IHsgd2lkdGhzOiBudW1iZXJbXTsga2luZDogJ3cnIHwgJ3gnIH0ge1xuICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgIC8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG4gICAgY29uc3Qgdmlld3BvcnRXaWR0aFJlID0gLyhefFxccykoMT9cXGQ/XFxkKXZ3L2dcbiAgICBjb25zdCBwZXJjZW50U2l6ZXMgPSBbXVxuICAgIGZvciAobGV0IG1hdGNoOyAobWF0Y2ggPSB2aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcykpOyBtYXRjaCkge1xuICAgICAgcGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKVxuICAgIH1cbiAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxXG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcihcbiAgICAgICAgICAocykgPT4gcyA+PSBjb25maWdEZXZpY2VTaXplc1swXSAqIHNtYWxsZXN0UmF0aW9cbiAgICAgICAgKSxcbiAgICAgICAga2luZDogJ3cnLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyB3aWR0aHM6IGFsbFNpemVzLCBraW5kOiAndycgfVxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8XG4gICAgbGF5b3V0ID09PSAnZmlsbCcgfHxcbiAgICBsYXlvdXQgPT09ICdyZXNwb25zaXZlJ1xuICApIHtcbiAgICByZXR1cm4geyB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLCBraW5kOiAndycgfVxuICB9XG5cbiAgY29uc3Qgd2lkdGhzID0gW1xuICAgIC4uLm5ldyBTZXQoXG4gICAgICAvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgIC8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4gICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4gICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICBbd2lkdGgsIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi9dLm1hcChcbiAgICAgICAgKHcpID0+IGFsbFNpemVzLmZpbmQoKHApID0+IHAgPj0gdykgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgIClcbiAgICApLFxuICBdXG4gIHJldHVybiB7IHdpZHRocywga2luZDogJ3gnIH1cbn1cblxudHlwZSBHZW5JbWdBdHRyc0RhdGEgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHVub3B0aW1pemVkOiBib29sZWFuXG4gIGxheW91dDogTGF5b3V0VmFsdWVcbiAgbG9hZGVyOiBJbWFnZUxvYWRlclxuICB3aWR0aD86IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG4gIHNpemVzPzogc3RyaW5nXG59XG5cbnR5cGUgR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHNyY1NldDogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIHNpemVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7XG4gIHNyYyxcbiAgdW5vcHRpbWl6ZWQsXG4gIGxheW91dCxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG4gIHNpemVzLFxuICBsb2FkZXIsXG59OiBHZW5JbWdBdHRyc0RhdGEpOiBHZW5JbWdBdHRyc1Jlc3VsdCB7XG4gIGlmICh1bm9wdGltaXplZCkge1xuICAgIHJldHVybiB7IHNyYywgc3JjU2V0OiB1bmRlZmluZWQsIHNpemVzOiB1bmRlZmluZWQgfVxuICB9XG5cbiAgY29uc3QgeyB3aWR0aHMsIGtpbmQgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcylcbiAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxXG5cbiAgcmV0dXJuIHtcbiAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICBzcmNTZXQ6IHdpZHRoc1xuICAgICAgLm1hcChcbiAgICAgICAgKHcsIGkpID0+XG4gICAgICAgICAgYCR7bG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogdyB9KX0gJHtcbiAgICAgICAgICAgIGtpbmQgPT09ICd3JyA/IHcgOiBpICsgMVxuICAgICAgICAgIH0ke2tpbmR9YFxuICAgICAgKVxuICAgICAgLmpvaW4oJywgJyksXG5cbiAgICAvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuICAgIC8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbiAgICAvLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4gICAgLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbiAgICAvLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbiAgICAvLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbiAgICBzcmM6IGxvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHdpZHRoc1tsYXN0XSB9KSxcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRJbnQoeDogdW5rbm93bik6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4geFxuICB9XG4gIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpIHtcbiAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcilcbiAgaWYgKGxvYWQpIHtcbiAgICByZXR1cm4gbG9hZCh7IHJvb3Q6IGNvbmZpZ1BhdGgsIC4uLmxvYWRlclByb3BzIH0pXG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtWQUxJRF9MT0FERVJTLmpvaW4oXG4gICAgICAnLCAnXG4gICAgKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gXG4gIClcbn1cblxuLy8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIGhhbmRsZUxvYWRpbmcoXG4gIGltZzogSFRNTEltYWdlRWxlbWVudCB8IG51bGwsXG4gIHNyYzogc3RyaW5nLFxuICBsYXlvdXQ6IExheW91dFZhbHVlLFxuICBwbGFjZWhvbGRlcjogUGxhY2Vob2xkZXJWYWx1ZSxcbiAgb25Mb2FkaW5nQ29tcGxldGU/OiBPbkxvYWRpbmdDb21wbGV0ZVxuKSB7XG4gIGlmICghaW1nKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgaGFuZGxlTG9hZCA9ICgpID0+IHtcbiAgICBpZiAoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgY29uc3QgcCA9ICdkZWNvZGUnIGluIGltZyA/IGltZy5kZWNvZGUoKSA6IFByb21pc2UucmVzb2x2ZSgpXG4gICAgICBwLmNhdGNoKCgpID0+IHt9KS50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICBpbWcuc3R5bGUuZmlsdGVyID0gJ25vbmUnXG4gICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ25vbmUnXG4gICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJ1xuICAgICAgICB9XG4gICAgICAgIGxvYWRlZEltYWdlVVJMcy5hZGQoc3JjKVxuICAgICAgICBpZiAob25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICAgICAgICBjb25zdCB7IG5hdHVyYWxXaWR0aCwgbmF0dXJhbEhlaWdodCB9ID0gaW1nXG4gICAgICAgICAgLy8gUGFzcyBiYWNrIHJlYWQtb25seSBwcmltaXRpdmUgdmFsdWVzIGJ1dCBub3QgdGhlXG4gICAgICAgICAgLy8gdW5kZXJseWluZyBET00gZWxlbWVudCBiZWNhdXNlIGl0IGNvdWxkIGJlIG1pc3VzZWQuXG4gICAgICAgICAgb25Mb2FkaW5nQ29tcGxldGUoeyBuYXR1cmFsV2lkdGgsIG5hdHVyYWxIZWlnaHQgfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGlmIChpbWcucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZ2V0Q29tcHV0ZWRTdHlsZShpbWcucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KVxuICAgICAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnICYmIHBhcmVudC5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IGFzIGEgY2hpbGQgb2YgYSBmbGV4IGNvbnRhaW5lci4gQ29uc2lkZXIgd3JhcHBpbmcgdGhlIGltYWdlIHdpdGggYSBkaXYgdG8gY29uZmlndXJlIHRoZSB3aWR0aC5gXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgcGFyZW50LnBvc2l0aW9uICE9PSAncmVsYXRpdmUnKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtYXkgbm90IHJlbmRlciBwcm9wZXJseSB3aXRoIGEgcGFyZW50IHVzaW5nIHBvc2l0aW9uOlwiJHtwYXJlbnQucG9zaXRpb259XCIuIENvbnNpZGVyIGNoYW5naW5nIHRoZSBwYXJlbnQgc3R5bGUgdG8gcG9zaXRpb246XCJyZWxhdGl2ZVwiIHdpdGggYSB3aWR0aCBhbmQgaGVpZ2h0LmBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgaWYgKGltZy5jb21wbGV0ZSkge1xuICAgIC8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuICAgIC8vIFRoaXMgaXMgdGhlIGRlc2lyZWQgYmVoYXZpb3IgZm9yIG5vdywgYW5kIHdpbGwgYmUgcmV2aXNpdGVkIHdoZW4gZXJyb3JcbiAgICAvLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuICAgIGhhbmRsZUxvYWQoKVxuICB9IGVsc2Uge1xuICAgIGltZy5vbmxvYWQgPSBoYW5kbGVMb2FkXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2Uoe1xuICBzcmMsXG4gIHNpemVzLFxuICB1bm9wdGltaXplZCA9IGZhbHNlLFxuICBwcmlvcml0eSA9IGZhbHNlLFxuICBsb2FkaW5nLFxuICBsYXp5Qm91bmRhcnkgPSAnMjAwcHgnLFxuICBjbGFzc05hbWUsXG4gIHF1YWxpdHksXG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIG9iamVjdEZpdCxcbiAgb2JqZWN0UG9zaXRpb24sXG4gIG9uTG9hZGluZ0NvbXBsZXRlLFxuICBsb2FkZXIgPSBkZWZhdWx0SW1hZ2VMb2FkZXIsXG4gIHBsYWNlaG9sZGVyID0gJ2VtcHR5JyxcbiAgYmx1ckRhdGFVUkwsXG4gIC4uLmFsbFxufTogSW1hZ2VQcm9wcykge1xuICBsZXQgcmVzdDogUGFydGlhbDxJbWFnZVByb3BzPiA9IGFsbFxuICBsZXQgbGF5b3V0OiBOb25OdWxsYWJsZTxMYXlvdXRWYWx1ZT4gPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnXG4gIGlmICgnbGF5b3V0JyBpbiByZXN0KSB7XG4gICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0XG5cbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ2xheW91dCddXG4gIH1cblxuICBsZXQgc3RhdGljU3JjID0gJydcbiAgaWYgKGlzU3RhdGljSW1wb3J0KHNyYykpIHtcbiAgICBjb25zdCBzdGF0aWNJbWFnZURhdGEgPSBpc1N0YXRpY1JlcXVpcmUoc3JjKSA/IHNyYy5kZWZhdWx0IDogc3JjXG5cbiAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5zcmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgc3JjLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHN0YXRpY0ltYWdlRGF0YVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG4gICAgYmx1ckRhdGFVUkwgPSBibHVyRGF0YVVSTCB8fCBzdGF0aWNJbWFnZURhdGEuYmx1ckRhdGFVUkxcbiAgICBzdGF0aWNTcmMgPSBzdGF0aWNJbWFnZURhdGEuc3JjXG4gICAgaWYgKCFsYXlvdXQgfHwgbGF5b3V0ICE9PSAnZmlsbCcpIHtcbiAgICAgIGhlaWdodCA9IGhlaWdodCB8fCBzdGF0aWNJbWFnZURhdGEuaGVpZ2h0XG4gICAgICB3aWR0aCA9IHdpZHRoIHx8IHN0YXRpY0ltYWdlRGF0YS53aWR0aFxuICAgICAgaWYgKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0IHx8ICFzdGF0aWNJbWFnZURhdGEud2lkdGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICBzdGF0aWNJbWFnZURhdGFcbiAgICAgICAgICApfWBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBzcmMgPSB0eXBlb2Ygc3JjID09PSAnc3RyaW5nJyA/IHNyYyA6IHN0YXRpY1NyY1xuXG4gIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKVxuICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KVxuICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpXG5cbiAgbGV0IGlzTGF6eSA9XG4gICAgIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKVxuICBpZiAoc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykgfHwgc3JjLnN0YXJ0c1dpdGgoJ2Jsb2I6JykpIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuICAgIHVub3B0aW1pemVkID0gdHJ1ZVxuICAgIGlzTGF6eSA9IGZhbHNlXG4gIH1cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGxvYWRlZEltYWdlVVJMcy5oYXMoc3JjKSkge1xuICAgIGlzTGF6eSA9IGZhbHNlXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghc3JjKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyB3aWR0aCwgaGVpZ2h0LCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFxuICAgICAgICAgIFN0cmluZ1xuICAgICAgICApLmpvaW4oJywnKX0uYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoXG4gICAgICAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTih3aWR0aEludCkpIHx8XG4gICAgICAodHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4oaGVpZ2h0SW50KSlcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJ3aWR0aFwiIG9yIFwiaGVpZ2h0XCIgcHJvcGVydHkuIFRoZXNlIHNob3VsZCBiZSBudW1lcmljIHZhbHVlcy5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiAod2lkdGggfHwgaGVpZ2h0KSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBhbmQgXCJsYXlvdXQ9J2ZpbGwnXCIgaGFzIHVudXNlZCBwcm9wZXJ0aWVzIGFzc2lnbmVkLiBQbGVhc2UgcmVtb3ZlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIi5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgaWYgKGxheW91dCAhPT0gJ2ZpbGwnICYmICh3aWR0aEludCB8fCAwKSAqIChoZWlnaHRJbnQgfHwgMCkgPCAxNjAwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBzbWFsbGVyIHRoYW4gNDB4NDAuIENvbnNpZGVyIHJlbW92aW5nIHRoZSBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuYFxuICAgICAgICApXG4gICAgICB9XG4gICAgICBpZiAoIWJsdXJEYXRhVVJMKSB7XG4gICAgICAgIGNvbnN0IFZBTElEX0JMVVJfRVhUID0gWydqcGVnJywgJ3BuZycsICd3ZWJwJ10gLy8gc2hvdWxkIG1hdGNoIG5leHQtaW1hZ2UtbG9hZGVyXG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oXG4gICAgICAgICAgICAgICcsJ1xuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIGlmICgncmVmJyBpbiByZXN0KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwicmVmXCIgcHJvcGVydHkuIENvbnNpZGVyIHVzaW5nIHRoZSBcIm9uTG9hZGluZ0NvbXBsZXRlXCIgcHJvcGVydHkgaW5zdGVhZC5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICgnc3R5bGUnIGluIHJlc3QpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJzdHlsZVwiIHByb3BlcnR5LiBQbGVhc2UgdXNlIHRoZSBcImNsYXNzTmFtZVwiIHByb3BlcnR5IGluc3RlYWQuYFxuICAgICAgKVxuICAgIH1cbiAgICBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCkgKyAxMDBcbiAgICBpZiAoXG4gICAgICAhdW5vcHRpbWl6ZWQgJiZcbiAgICAgICFsb2FkZXIoeyBzcmMsIHdpZHRoOiByYW5kLCBxdWFsaXR5OiA3NSB9KS5pbmNsdWRlcyhyYW5kLnRvU3RyaW5nKCkpXG4gICAgKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBhIFwibG9hZGVyXCIgcHJvcGVydHkgdGhhdCBkb2VzIG5vdCBpbXBsZW1lbnQgd2lkdGguIFBsZWFzZSBpbXBsZW1lbnQgaXQgb3IgdXNlIHRoZSBcInVub3B0aW1pemVkXCIgcHJvcGVydHkgaW5zdGVhZC5gICtcbiAgICAgICAgICBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyLXdpZHRoYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gdXNlSW50ZXJzZWN0aW9uPEhUTUxJbWFnZUVsZW1lbnQ+KHtcbiAgICByb290TWFyZ2luOiBsYXp5Qm91bmRhcnksXG4gICAgZGlzYWJsZWQ6ICFpc0xhenksXG4gIH0pXG4gIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZFxuXG4gIGxldCB3cmFwcGVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3ZnOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgbGV0IGltZ1N0eWxlOiBJbWdFbGVtZW50U3R5bGUgfCB1bmRlZmluZWQgPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHJpZ2h0OiAwLFxuXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgcGFkZGluZzogMCxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBtYXJnaW46ICdhdXRvJyxcblxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcblxuICAgIG9iamVjdEZpdCxcbiAgICBvYmplY3RQb3NpdGlvbixcbiAgfVxuICBjb25zdCBibHVyU3R5bGUgPVxuICAgIHBsYWNlaG9sZGVyID09PSAnYmx1cidcbiAgICAgID8ge1xuICAgICAgICAgIGZpbHRlcjogJ2JsdXIoMjBweCknLFxuICAgICAgICAgIGJhY2tncm91bmRTaXplOiBvYmplY3RGaXQgfHwgJ2NvdmVyJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWAsXG4gICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBvYmplY3RQb3NpdGlvbiB8fCAnMCUgMCUnLFxuICAgICAgICB9XG4gICAgICA6IHt9XG4gIGlmIChsYXlvdXQgPT09ICdmaWxsJykge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG5cbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHJpZ2h0OiAwLFxuXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50XG4gICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgXG4gICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0geyBkaXNwbGF5OiAnYmxvY2snLCBib3hTaXppbmc6ICdib3JkZXItYm94JywgcGFkZGluZ1RvcCB9XG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICB9XG4gICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gXG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnQsXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpbWdBdHRyaWJ1dGVzOiBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgICBzcmM6ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgIHNpemVzOiB1bmRlZmluZWQsXG4gIH1cblxuICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgc3JjLFxuICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICBsYXlvdXQsXG4gICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgc2l6ZXMsXG4gICAgICBsb2FkZXIsXG4gICAgfSlcbiAgfVxuXG4gIGxldCBzcmNTdHJpbmc6IHN0cmluZyA9IHNyY1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17d3JhcHBlclN0eWxlfT5cbiAgICAgIHtzaXplclN0eWxlID8gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzaXplclN0eWxlfT5cbiAgICAgICAgICB7c2l6ZXJTdmcgPyAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17dHJ1ZX1cbiAgICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke3RvQmFzZTY0KHNpemVyU3ZnKX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIDxpbWdcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHsuLi5pbWdBdHRyaWJ1dGVzfVxuICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgZGF0YS1uaW1nPXtsYXlvdXR9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICByZWY9eyhpbWcpID0+IHtcbiAgICAgICAgICBzZXRSZWYoaW1nKVxuICAgICAgICAgIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmNTdHJpbmcsIGxheW91dCwgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKVxuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17eyAuLi5pbWdTdHlsZSwgLi4uYmx1clN0eWxlIH19XG4gICAgICAvPlxuICAgICAgPG5vc2NyaXB0PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgey4uLmdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICBsb2FkZXIsXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgICAgZGF0YS1uaW1nPXtsYXlvdXR9XG4gICAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmcgfHwgJ2xhenknfVxuICAgICAgICAvPlxuICAgICAgPC9ub3NjcmlwdD5cblxuICAgICAge3ByaW9yaXR5ID8gKFxuICAgICAgICAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgICAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAga2V5PXtcbiAgICAgICAgICAgICAgJ19fbmltZy0nICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmMgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyY1NldCArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgYXM9XCJpbWFnZVwiXG4gICAgICAgICAgICBocmVmPXtpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjfVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgICAgICBpbWFnZXNyY3NldD17aW1nQXR0cmlidXRlcy5zcmNTZXR9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICAgICAgaW1hZ2VzaXplcz17aW1nQXR0cmlidXRlcy5zaXplc31cbiAgICAgICAgICA+PC9saW5rPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmNcbn1cblxuZnVuY3Rpb24gaW1naXhMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2F1dG89Zm9ybWF0JmZpdD1tYXgmdz0zMDBcbiAgY29uc3QgdXJsID0gbmV3IFVSTChgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9YClcbiAgY29uc3QgcGFyYW1zID0gdXJsLnNlYXJjaFBhcmFtc1xuXG4gIHBhcmFtcy5zZXQoJ2F1dG8nLCBwYXJhbXMuZ2V0KCdhdXRvJykgfHwgJ2Zvcm1hdCcpXG4gIHBhcmFtcy5zZXQoJ2ZpdCcsIHBhcmFtcy5nZXQoJ2ZpdCcpIHx8ICdtYXgnKVxuICBwYXJhbXMuc2V0KCd3JywgcGFyYW1zLmdldCgndycpIHx8IHdpZHRoLnRvU3RyaW5nKCkpXG5cbiAgaWYgKHF1YWxpdHkpIHtcbiAgICBwYXJhbXMuc2V0KCdxJywgcXVhbGl0eS50b1N0cmluZygpKVxuICB9XG5cbiAgcmV0dXJuIHVybC5ocmVmXG59XG5cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QsIHNyYywgd2lkdGggfTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YFxufVxuXG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgY29uc3QgcGFyYW1zID0gWydmX2F1dG8nLCAnY19saW1pdCcsICd3XycgKyB3aWR0aCwgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJyldXG4gIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nXG4gIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YFxufVxuXG5mdW5jdGlvbiBjdXN0b21Mb2FkZXIoeyBzcmMgfTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgbWlzc2luZyBcImxvYWRlclwiIHByb3AuYCArXG4gICAgICBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyYFxuICApXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXVxuXG4gICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJylcbiAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJylcblxuICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKFxuICAgICAgICAgICcsICdcbiAgICAgICAgKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgIGxldCBwYXJzZWRTcmM6IFVSTFxuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiZcbiAgICAgICAgIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKVxuICAgICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArXG4gICAgICAgICAgICBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gXG59XG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiZcbiAgICBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmXG4gICAgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiZcbiAgICBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykpIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5pbXBvcnQgeyBpbXBvcnRKUyB9IGZyb20gJy4uL2hlbHBlcnMvaW1wb3J0SlMnXHJcblxyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0VXMoKSB7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaW1wb3J0SlMoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcblxyXG4gICAgICA8bWFpbiBpZD1cIm1haW5cIj5cclxuICAgICAgICA8YnIgLz48YnIgLz48YnIgLz5cclxuXHJcbiAgICAgICAgPEJveCBpZD1cImZlYXR1cmVzXCIgY2xhc3NOYW1lPVwiZmVhdHVyZXNcIiBzeD17e3A6IHtcclxuICAgICAgICAgICAgeHM6IDIsXHJcbiAgICAgICAgICAgIHNtOiA1LFxyXG4gICAgICAgICAgICBtZDogMTAsXHJcbiAgICAgICAgICAgIGxnOiAyMCxcclxuICAgICAgICAgICAgeGw6IDMwLFxyXG4gICAgICAgIH0sIHB0OiAnMHB4ICFpbXBvcnRhbnQnLCBwYjogJzBweCAhaW1wb3J0YW50J319PlxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwiZmVhdHVyZXNcIiBjbGFzc05hbWU9XCJmZWF0dXJlc1wiPlxyXG5cclxuICAgICAgICAgICAgPGgyIHN0eWxlPXt7fX0+QW50aSBCcmliZXJ5ICZhbXA7IEFudGkgQ29ycnVwdGlvbiBQb2xpY3k8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGVhciBoZWlnaHQtMzBcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnROdW1lcmljOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50RWFzdEFzaWFuOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50QWx0ZXJuYXRlczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudFBvc2l0aW9uOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTdHJldGNoOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNSxcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTpcclxuICAgICAgICAgICAgICAgICAgICAnXCJEcm9pZCBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiRHJvaWQgU2Fuc1wiLCBzYW5zLXNlcmlmLCBzYW5zLXNlcmlmJyxcclxuICAgICAgICAgICAgICAgIGZvbnRPcHRpY2FsU2l6aW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRLZXJuaW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhdGlvblNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIixcclxuICAgICAgICAgICAgICAgIGNsZWFyOiBcImJvdGhcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2IoNjIsIDYyLCA2MilcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMHB4IDBweCAyNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnROdW1lcmljOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50RWFzdEFzaWFuOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50QWx0ZXJuYXRlczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudFBvc2l0aW9uOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTdHJldGNoOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNSxcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS42XCIsXHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIk5vYmlsZSwgc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udE9wdGljYWxTaXppbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEtlcm5pbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZlYXR1cmVTZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWF0aW9uU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmdiKDYyLCA2MiwgNjIpXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmcgc3R5bGU9e3sgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIiB9fT5cclxuICAgICAgICAgICAgICAgIE5pbGFpIGRhbiBLZWJpamFrYW4vUHJpbnNpcCBBbnRpJm5ic3A7XHJcbiAgICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmcgc3R5bGU9e3sgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIiB9fT5Lb3J1cHNpPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjBweCAwcHggMjVweFwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMCxcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50TnVtZXJpYzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEVhc3RBc2lhbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEFsdGVybmF0ZXM6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRQb3NpdGlvbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U3RyZXRjaDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEuNlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJOb2JpbGUsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgICAgICAgIGZvbnRPcHRpY2FsU2l6aW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRLZXJuaW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhdGlvblNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYig2MiwgNjIsIDYyKVwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMHB4IDBweCAyNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnROdW1lcmljOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50RWFzdEFzaWFuOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50QWx0ZXJuYXRlczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudFBvc2l0aW9uOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTdHJldGNoOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNSxcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS42XCIsXHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIk5vYmlsZSwgc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udE9wdGljYWxTaXppbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEtlcm5pbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZlYXR1cmVTZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWF0aW9uU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmdiKDYyLCA2MiwgNjIpXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIE5pbGFpLW5pbGFpIGFudGkga29ydXBzaSBiZXJqdW1sYWggOSBidWFoLCB5YWl0dSA6XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjBweCAwcHggMjVweFwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMCxcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50TnVtZXJpYzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEVhc3RBc2lhbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEFsdGVybmF0ZXM6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRQb3NpdGlvbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U3RyZXRjaDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEuNlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJOb2JpbGUsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgICAgICAgIGZvbnRPcHRpY2FsU2l6aW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRLZXJuaW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhdGlvblNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYig2MiwgNjIsIDYyKVwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nIHN0eWxlPXt7IGJveFNpemluZzogXCJib3JkZXItYm94XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nIHN0eWxlPXt7IGJveFNpemluZzogXCJib3JkZXItYm94XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGVtXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50OiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTdHJldGNoOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRPcHRpY2FsU2l6aW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEtlcm5pbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmVhdHVyZVNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFZhcmlhdGlvblNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgMS4gS2VqdWp1cmFuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9lbT5cclxuICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjBweCAwcHggMjVweFwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMCxcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50TnVtZXJpYzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEVhc3RBc2lhbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEFsdGVybmF0ZXM6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRQb3NpdGlvbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U3RyZXRjaDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEuNlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJOb2JpbGUsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgICAgICAgIGZvbnRPcHRpY2FsU2l6aW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRLZXJuaW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhdGlvblNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYig2MiwgNjIsIDYyKVwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgS2VqdWp1cmFuIGJlcmFzYWwgZGFyaSBrYXRhIGp1anVyIHlhbmcgZGFwYXQgZGkgZGVmaW5pc2lrYW4gc2ViYWdhaSBzZWJ1YWhcclxuICAgICAgICAgICAgICAgIHRpbmRha2FuIG1hdXB1biB1Y2FwYW4geWFuZyBsdXJ1cywgdGlkYWsgYmVyYm9ob25nIGRhbiB0aWRhayBjdXJhbmcuIERhbGFtXHJcbiAgICAgICAgICAgICAgICBiZXJiYWdhaSBidWt1IGp1Z2EgZGlzZWJ1dGthbiBiYWh3YSBqdWp1ciBtZW1pbGlraSBtYWtuYSBzYXR1bnlhIGthdGEgZGFuXHJcbiAgICAgICAgICAgICAgICBwZXJidWF0YW4uIEp1anVyIGlsYWggbWVydXBha2FuIHNhbGFoIHNhdHUgbmlsYWkgeWFuZyBwYWxpbmcgdXRhbWEgZGFsYW1cclxuICAgICAgICAgICAgICAgIGFudGkga29ydXBzaSwga2FyZW5hIHRhbnBhIGtlanVqdXJhbiBzZXNlb3JhbmcgdGlkYWsgYWthbiBtZW5kYXBhdFxyXG4gICAgICAgICAgICAgICAga2VwZXJjYXlhYW4gZGFsYW0gYmVyYmFnYWkgaGFsLCB0ZXJtYXN1ayBkYWxhbSBrZWhpZHVwYW4gc29zaWFsLiBCYWdpXHJcbiAgICAgICAgICAgICAgICBzZW9yYW5nIG1haGFzaXN3YSBrZWp1anVyYW4gc2FuZ2F0IHBlbnRpbmcgZGFuIGRhcGF0IGRpd3VqdWRrYW4gZGFsYW0gYmVudHVrXHJcbiAgICAgICAgICAgICAgICB0aWRhayBtZWxha3VrYW4ga2VjdXJhbmdhbiBha2FkZW1paywgbWlzYWxueWEgdGlkYWsgbWVuY29udGVrLCB0aWRha1xyXG4gICAgICAgICAgICAgICAgbWVsYWt1a2FuIHBsYWdpYXJpc21lIGRhbiB0aWRhayBtZW1hbHN1a2FuIG5pbGFpLiBMZWJpaCBsdWFzLCBjb250b2hcclxuICAgICAgICAgICAgICAgIGtlanVqdXJhbiBzZWNhcmEgdW11bSBkaW1hc3lhcmFrYXQgaWFsYWggZGVuZ2FuIHNlbGFsdSBiZXJrYXRhIGp1anVyLCBqdWp1clxyXG4gICAgICAgICAgICAgICAgZGFsYW0gbWVudW5haWthbiB0dWdhcyBkYW4ga2V3YWppYmFuLCBtaXNhbG55YSBzZWJhZ2FpIHNlb3JhbmcgYXBhcmF0XHJcbiAgICAgICAgICAgICAgICBwZW5lZ2FrIGh1a3VtIGF0YXVwdW4gc2ViYWdhaSBtYXN5YXJha2F0IHVtdW0gZGVuZ2FuIG1lbWJheWEgcGFqYWsuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjBweCAwcHggMjVweFwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMCxcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50TnVtZXJpYzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEVhc3RBc2lhbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEFsdGVybmF0ZXM6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRQb3NpdGlvbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U3RyZXRjaDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEuNlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJOb2JpbGUsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgICAgICAgIGZvbnRPcHRpY2FsU2l6aW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRLZXJuaW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhdGlvblNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYig2MiwgNjIsIDYyKVwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nIHN0eWxlPXt7IGJveFNpemluZzogXCJib3JkZXItYm94XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZW1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50OiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U3RyZXRjaDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRPcHRpY2FsU2l6aW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250S2VybmluZzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZlYXR1cmVTZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFZhcmlhdGlvblNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImJhc2VsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDIuIEtlcGVkdWxpYW5cclxuICAgICAgICAgICAgICAgIDwvZW0+XHJcbiAgICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMHB4IDBweCAyNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnROdW1lcmljOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50RWFzdEFzaWFuOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50QWx0ZXJuYXRlczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudFBvc2l0aW9uOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTdHJldGNoOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNSxcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS42XCIsXHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIk5vYmlsZSwgc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udE9wdGljYWxTaXppbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEtlcm5pbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZlYXR1cmVTZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWF0aW9uU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmdiKDYyLCA2MiwgNjIpXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmeVwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBBcnRpIGthdGEgcGVkdWxpIGFkYWxhaCBtZW5naW5kYWhrYW4sIG1lbXBlcmhhdGlrYW4gZGFuIG1lbmdoaXJhdWthbi4gUmFzYVxyXG4gICAgICAgICAgICAgICAga2VwZWR1bGlhbiBkYXBhdCBkaWxha3VrYW4gdGVyaGFkYXAgbGluZ2t1bmdhbiBzZWtpdGFyIGRhbiBiZXJiYWdhaSBoYWwgeWFuZ1xyXG4gICAgICAgICAgICAgICAgYmVya2VtYmFuZyBkaWRhbGFtbnlhLk5pbGFpIGtlcGVkdWxpYW4gc2ViYWdhaSBtYWhhc2lzd2EgZGFwYXQgZGl3dWp1ZGthblxyXG4gICAgICAgICAgICAgICAgZGVuZ2FuIGJlcnVzYWhhIG1lbWFudGF1IGphbGFubnlhIHByb3NlcyBwZW1iZWxhamFyYW4sIG1lbWFudGF1IHNpc3RlbVxyXG4gICAgICAgICAgICAgICAgcGVuZ2Vsb2xhYW4gc3VtYmVyIGRheWEgZGlrYW1wdXMgc2VydGEgbWVtYW50YXUga29uZGlzaSBpbmZyYXN0cnVrdHVyIGRpXHJcbiAgICAgICAgICAgICAgICBrYW1wdXMuIFNlbGFpbiBpdHUsIHNlY2FyYSB1bXVtIHNlYmFnYWkgbWFzeWFyYWthdCBkYXBhdCBkaXd1anVka2FuIGRlbmdhblxyXG4gICAgICAgICAgICAgICAgcGVkdWxpIHRlcmhhZGFwIHNlc2FtYSBzZXBlcnRpIGRlbmdhbiB0dXJ1dCBtZW1iYW50dSBqaWthIHRlcmphZGkgYmVuY2FuYVxyXG4gICAgICAgICAgICAgICAgYWxhbSwgc2VydGEgdHVydXQgbWVtYmFudHUgbWVuaW5na2F0a2FuIGxpbmdrdW5nYW4gc2VraXRhciB0ZW1wYXQgdGluZ2dhbFxyXG4gICAgICAgICAgICAgICAgbWF1cHVuIGRpIGxpbmdrdW5nYW4gdGVtcGF0IGJla2VyamEgYmFpayBkYXJpIHNpc2kgbGluZ2t1bmdhbiBhbGFtIG1hdXB1blxyXG4gICAgICAgICAgICAgICAgc29zaWFsIHRlcmhhZGFwIGluZGl2aWR1IGRhbiBrZWxvbXBvayBsYWluLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwcHggMHB4IDI1cHhcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDAsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudE51bWVyaWM6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRFYXN0QXNpYW46IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRBbHRlcm5hdGVzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50UG9zaXRpb246IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFN0cmV0Y2g6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE1LFxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIxLjZcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiTm9iaWxlLCBzYW5zLXNlcmlmXCIsXHJcbiAgICAgICAgICAgICAgICBmb250T3B0aWNhbFNpemluZzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250S2VybmluZzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250RmVhdHVyZVNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYXRpb25TZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImJhc2VsaW5lXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2IoNjIsIDYyLCA2MilcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIixcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmcgc3R5bGU9e3sgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxlbVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFZhcmlhbnQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTdHJldGNoOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udE9wdGljYWxTaXppbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRLZXJuaW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250RmVhdHVyZVNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250VmFyaWF0aW9uU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgMy4gS2VtYW5kaXJpYW5cclxuICAgICAgICAgICAgICAgIDwvZW0+XHJcbiAgICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMHB4IDBweCAyNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnROdW1lcmljOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50RWFzdEFzaWFuOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50QWx0ZXJuYXRlczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudFBvc2l0aW9uOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTdHJldGNoOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNSxcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS42XCIsXHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIk5vYmlsZSwgc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udE9wdGljYWxTaXppbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEtlcm5pbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZlYXR1cmVTZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWF0aW9uU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmdiKDYyLCA2MiwgNjIpXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmeVwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBEaSBkYWxhbSBiZWJlcmFwYSBidWt1IHBlbWJlbGFqYXJhbiwgZGlrYXRha2FuIGJhaHdhIG1hbmRpcmkgYmVyYXJ0aSBkYXBhdFxyXG4gICAgICAgICAgICAgICAgYmVyZGlyaSBkaWF0YXMga2FraSBzZW5kaXJpLCBhcnRpbnlhIHRpZGFrIGJhbnlhayBiZXJnYW50dW5nIGtlcGFkYSBvcmFuZ1xyXG4gICAgICAgICAgICAgICAgbGFpbiBkYWxhbSBiZXJiYWdhaSBoYWwuIEtlbWFuZGlyaWFuIGRpYW5nZ2FwIHNlYmFnYWkgc3VhdHUgaGFsIHlhbmcgcGVudGluZ1xyXG4gICAgICAgICAgICAgICAgaGFydXMgZGltaWxpa2kgb2xlaCBzZW9yYW5nIHBlbWltcGluLCBrYXJlbmEgdGFtcGEga2VtYW5kaXJpYW4gc2VzZW9yYW5nXHJcbiAgICAgICAgICAgICAgICB0aWRhayBha2FuIG1hbXB1IG1lbWltcGluIG9yYW5nIGxhaW4uXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjBweCAwcHggMjVweFwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMCxcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50TnVtZXJpYzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEVhc3RBc2lhbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEFsdGVybmF0ZXM6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRQb3NpdGlvbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U3RyZXRjaDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEuNlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJOb2JpbGUsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgICAgICAgIGZvbnRPcHRpY2FsU2l6aW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRLZXJuaW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhdGlvblNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYig2MiwgNjIsIDYyKVwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZyBzdHlsZT17eyBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGVtXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMCxcclxuICAgICAgICAgICAgICAgICAgICBmb250VmFyaWFudDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFN0cmV0Y2g6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250T3B0aWNhbFNpemluZzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEtlcm5pbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRWYXJpYXRpb25TZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA0LiBLZWRpc2lwbGluYW5cclxuICAgICAgICAgICAgICAgIDwvZW0+XHJcbiAgICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMHB4IDBweCAyNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnROdW1lcmljOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50RWFzdEFzaWFuOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50QWx0ZXJuYXRlczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudFBvc2l0aW9uOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTdHJldGNoOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNSxcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS42XCIsXHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIk5vYmlsZSwgc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udE9wdGljYWxTaXppbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEtlcm5pbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZlYXR1cmVTZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWF0aW9uU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmdiKDYyLCA2MiwgNjIpXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmeVwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBEZWZpbmlzaSBkYXJpIGthdGEgZGlzaXBsaW4gaWFsYWgga2V0YWF0YW4gYXRhdSBrZXBhdHVoYW4ga2VwYWRhIHBlcmF0dXJhbi5cclxuICAgICAgICAgICAgICAgIFNlYmFsaWtueWEgdW50dWsgbWVuZ2F0dXIga2VoaWR1cGFuIG1hbnVzaWEgbWVtZXJsdWthbiBoaWR1cCB5YW5nIGRpc2lwbGluLlxyXG4gICAgICAgICAgICAgICAgTWFuZmFhdCBkYXJpIGRpc2lwbGluIGlhbGFoIHNlc2VvcmFuZyBkYXBhdCBtZW5jcGFpIHR1anVhbiBkZW5nYW4gd2FrdHUgeWFuZ1xyXG4gICAgICAgICAgICAgICAgbGViaWggZWZpc2llbi4gS2VkaXNpcGxpbmFuIG1lbWlsaWtpIGRhbXBhayB5YW5nIHNhbWEgZG5nYW4gbmlsYWktbmlsYWlcclxuICAgICAgICAgICAgICAgIGFudGlrb3J1cHNpIGxhaW5ueWEgeWFpdHUgZGFwYXQgbWVudW1idWhrYW4ga2VwZXJjYXlhYW4gZGFyaSBvcmFuZyBsYWluXHJcbiAgICAgICAgICAgICAgICBkYWxhbSBiZXJiYWdhaSBoYWwuIEtlZGlzaXBsaW5hbiBkYXBhdCBkaXd1anVka2FuIGFudGFyYSBsYWluIGRhbGFtIGJlbnR1a1xyXG4gICAgICAgICAgICAgICAga2VtYW1wdWFuIG1lbmdhdHVyIHdha3R1IGRlbmdhbiBiYWlrLCBrZXBhdHVoYW4ga2VwYWRhIHNlbHVydWggcGVyYXR1cmFuIGRhblxyXG4gICAgICAgICAgICAgICAga2V0ZW50dWFuIHlhbmcgYmVybGFrdSwgbWVuZ2VyamFrYW4gc2VnYWxhIHNlc3VhdHUgZGVuZ2FuIHRlcGF0IHdha3R1LCBkYW5cclxuICAgICAgICAgICAgICAgIGZva3VzIHBhZGEgcGVrZXJqYWFuLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwcHggMHB4IDI1cHhcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDAsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudE51bWVyaWM6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRFYXN0QXNpYW46IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRBbHRlcm5hdGVzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50UG9zaXRpb246IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFN0cmV0Y2g6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE1LFxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIxLjZcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiTm9iaWxlLCBzYW5zLXNlcmlmXCIsXHJcbiAgICAgICAgICAgICAgICBmb250T3B0aWNhbFNpemluZzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250S2VybmluZzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250RmVhdHVyZVNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYXRpb25TZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImJhc2VsaW5lXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2IoNjIsIDYyLCA2MilcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIixcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmcgc3R5bGU9e3sgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxlbVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFZhcmlhbnQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTdHJldGNoOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udE9wdGljYWxTaXppbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRLZXJuaW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250RmVhdHVyZVNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250VmFyaWF0aW9uU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgNS4gVGFuZ2d1bmcgSmF3YWJcclxuICAgICAgICAgICAgICAgIDwvZW0+XHJcbiAgICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMHB4IDBweCAyNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnROdW1lcmljOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50RWFzdEFzaWFuOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50QWx0ZXJuYXRlczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudFBvc2l0aW9uOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTdHJldGNoOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNSxcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS42XCIsXHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIk5vYmlsZSwgc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udE9wdGljYWxTaXppbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEtlcm5pbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZlYXR1cmVTZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWF0aW9uU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmdiKDYyLCA2MiwgNjIpXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmeVwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBLYXRhIHRhbmdndW5nIGphd2FiIGFkYWxhaCBrZWFkYWFuIHdhamliIG1lbmFuZ2d1bmcgc2VnYWxhIHNlc3VhdHVueWEgKGthbGF1XHJcbiAgICAgICAgICAgICAgICB0ZXJqYWRpIGFwYS1hcGEgYm9sZWggZGl0dW50dXQsIGRpcGVyc2FsYWhrYW4gZGFuIGRpcGVya2FyYWthbikuIFNlc2VvcmFuZ1xyXG4gICAgICAgICAgICAgICAgeWFuZyBtZW1pbGlraSB0YW5nZ3VuZyBqYXdhYiBha2FuIG1lbWlsaWtpIGtlY2VuZGVydW5nYW4gbWVueWVsZXNhaWthbiB0dWdhc1xyXG4gICAgICAgICAgICAgICAgZGVuZ2FuIGxlYmloIGJhaWsuIFNlc2VvcmFuZyB5YW5nIGRhcGF0IG1lbnVuYWlrYW4gdGFuZ2d1bmcgamF3YWJueWEgc2VrZWNpbFxyXG4gICAgICAgICAgICAgICAgYXBhLXB1biBpdHUgZGVuZ2FuIGJhaWsgYWthbiBtZW5kYXBhdGthbiBrZXBlcmNheWFhbiBkYXJpIG9yYW5nIGxhaW4uXHJcbiAgICAgICAgICAgICAgICBQZW5lcmFwYW4gbmlsYWkgdGFuZ2d1bmcgamF3YWIgYW50YXJhIGxhaW4gZGFwYXQgZGl3dWp1ZGthbiBkYWxhbSBiZW50dWtcclxuICAgICAgICAgICAgICAgIGJlbGFqYXIgZGVuZ2FuIHN1bmdndWgtc3VuZ2d1aCwgbHVsdXMgdGVwYXQgd2FrdHUgZGVuZ2FuIG5pbGFpIGJhaWssXHJcbiAgICAgICAgICAgICAgICBtZW5nZXJqYWthbiB0dWdhcyBha2FkZW1payBkZW5nYW4gYmFpaywgbWVuamFnYSBhbWFuYWggZGFuIGtlcGVyY2F5YWFuIHlhbmdcclxuICAgICAgICAgICAgICAgIGRpYmVyaWthbi5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMHB4IDBweCAyNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnROdW1lcmljOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50RWFzdEFzaWFuOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50QWx0ZXJuYXRlczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudFBvc2l0aW9uOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTdHJldGNoOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNSxcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS42XCIsXHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIk5vYmlsZSwgc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udE9wdGljYWxTaXppbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEtlcm5pbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZlYXR1cmVTZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWF0aW9uU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmdiKDYyLCA2MiwgNjIpXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmeVwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nIHN0eWxlPXt7IGJveFNpemluZzogXCJib3JkZXItYm94XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZW1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50OiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U3RyZXRjaDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRPcHRpY2FsU2l6aW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250S2VybmluZzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZlYXR1cmVTZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFZhcmlhdGlvblNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImJhc2VsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDYuIEtlcmphIEtlcmFzXHJcbiAgICAgICAgICAgICAgICA8L2VtPlxyXG4gICAgICAgICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjBweCAwcHggMjVweFwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMCxcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50TnVtZXJpYzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEVhc3RBc2lhbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEFsdGVybmF0ZXM6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRQb3NpdGlvbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U3RyZXRjaDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEuNlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJOb2JpbGUsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgICAgICAgIGZvbnRPcHRpY2FsU2l6aW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRLZXJuaW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhdGlvblNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYig2MiwgNjIsIDYyKVwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgS2VyamEga2VyYXMgZGlkYXNhcmkgZGVuZ2FuIGFkYW55YSBrZW1hdWFuLiBEaSBkYWxhbSBrZW1hdWFuIHRlcmthbmR1bmdcclxuICAgICAgICAgICAgICAgIGtldGVrYWRhbiwga2V0ZWt1bmFuLCBkYXlhIHRhaGFuLCBkYXlhIGtlcmphLCBwZW5kaXJpYW4ga2ViZXJhbmlhbixcclxuICAgICAgICAgICAgICAgIGtldGFiYWhhbiwga2V0ZWd1aGFuIGRhbiBwYW50YW5nIG11bmR1ci4gQmVrZXJqYSBrZXJhcyBtZXJ1cGFrYW4gaGFsIHlhbmdcclxuICAgICAgICAgICAgICAgIHBlbnRpbmcgZ3VuYSB0ZXJjYXBhaW55YSBoYXNpbCB5YW5nIHNlc3VhaSBkZW5nYW4gdGFyZ2V0LiBBa2FuIHRldGFwaVxyXG4gICAgICAgICAgICAgICAgYmVrZXJqYSBrZXJhcyBha2FuIG1lbmphZGkgdGlkYWsgYmVyZ3VuYSBqaWthIHRhbnBhIGFkYW55YSBwZW5nZXRhaHVhbi5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMHB4IDBweCAyNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnROdW1lcmljOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50RWFzdEFzaWFuOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50QWx0ZXJuYXRlczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudFBvc2l0aW9uOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTdHJldGNoOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNSxcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS42XCIsXHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIk5vYmlsZSwgc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udE9wdGljYWxTaXppbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEtlcm5pbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZlYXR1cmVTZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWF0aW9uU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmdiKDYyLCA2MiwgNjIpXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmeVwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nIHN0eWxlPXt7IGJveFNpemluZzogXCJib3JkZXItYm94XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZW1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50OiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U3RyZXRjaDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRPcHRpY2FsU2l6aW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250S2VybmluZzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZlYXR1cmVTZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFZhcmlhdGlvblNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImJhc2VsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDcuIEtlc2VkZXJoYW5hYW5cclxuICAgICAgICAgICAgICAgIDwvZW0+XHJcbiAgICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMHB4IDBweCAyNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnROdW1lcmljOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50RWFzdEFzaWFuOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50QWx0ZXJuYXRlczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudFBvc2l0aW9uOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTdHJldGNoOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNSxcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS42XCIsXHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIk5vYmlsZSwgc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udE9wdGljYWxTaXppbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEtlcm5pbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZlYXR1cmVTZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWF0aW9uU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmdiKDYyLCA2MiwgNjIpXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmeVwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBHYXlhIGhpZHVwIG1lcnVwYWthbiBzdWF0dSBoYWwgeWFuZyBzYW5nYXQgcGVudGluZyBiYWdpIGludGVyYWtzaSBkZW5nYW5cclxuICAgICAgICAgICAgICAgIG1hc3lhcmFrYXQgZGlzZWtpdGFyLiBEZW5nYW4gZ2F5YSBoaWR1cCB5YW5nIHNlZGVyaGFuYSBtYW51c2lhIGRpYmlhc2FrYW5cclxuICAgICAgICAgICAgICAgIHVudHVrIHRpZGFrIGhpZHVwIGJvcm9zLCB0aWRhayBzZXN1YWkgZGVuZ2FuIGtlbWFtcHVhbm55YS4gRGVuZ2FuIGdheWEgaGlkdXBcclxuICAgICAgICAgICAgICAgIHlhbmcgc2VkZXJoYW5hLCBzZXNlb3JhbmcganVnYSBkaWJpbmEgdW50dWsgbWVtcHJpb3JpdGFza2FuIGtlYnV0dWhhbiBkaWF0YXNcclxuICAgICAgICAgICAgICAgIGtlaW5naW5hbm55YS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMHB4IDBweCAyNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnROdW1lcmljOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50RWFzdEFzaWFuOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50QWx0ZXJuYXRlczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudFBvc2l0aW9uOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTdHJldGNoOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNSxcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS42XCIsXHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIk5vYmlsZSwgc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udE9wdGljYWxTaXppbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEtlcm5pbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZlYXR1cmVTZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWF0aW9uU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmdiKDYyLCA2MiwgNjIpXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmeVwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nIHN0eWxlPXt7IGJveFNpemluZzogXCJib3JkZXItYm94XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZW1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50OiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U3RyZXRjaDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRPcHRpY2FsU2l6aW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250S2VybmluZzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZlYXR1cmVTZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFZhcmlhdGlvblNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImJhc2VsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDguIEtlYmVyYW5pYW5cclxuICAgICAgICAgICAgICAgIDwvZW0+XHJcbiAgICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMHB4IDBweCAyNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnROdW1lcmljOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50RWFzdEFzaWFuOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50QWx0ZXJuYXRlczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudFBvc2l0aW9uOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTdHJldGNoOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNSxcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS42XCIsXHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIk5vYmlsZSwgc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udE9wdGljYWxTaXppbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEtlcm5pbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZlYXR1cmVTZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWF0aW9uU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmdiKDYyLCA2MiwgNjIpXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmeVwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBLZWJlcmFuaWFuIGRhcGF0IGRpd3VqdWRrYW5kYWxhbSBiZW50dWsgYmVyYW5pIG1lbmdhdGFrYW4gZGFuIG1lbWJlbGFcclxuICAgICAgICAgICAgICAgIGtlYmVuYXJhbiwgYmVyYW5pIG1lbmdha3VpIGtlc2FsYWhhbiwgYmVyYW5pIGJlcnRhbmdndW5nIGphd2FiLCBkYW5cclxuICAgICAgICAgICAgICAgIHNlYmFnYWlueWEuIEtlYmVyYW5pYW4gc2FuZ2F0IGRpcGVybHVrYW4gdW50dWsgbWVuY2FwYWkga2VzdWtzZXNhbiBkYW5cclxuICAgICAgICAgICAgICAgIGtlYmVyYW5pYW4gYWthbiBzZW1ha2luIG1hdGFuZyBqaWthIGRpaXJpbmdpIGRlbmdhbiBrZXlha2luYW4sIHNlcnRhXHJcbiAgICAgICAgICAgICAgICBrZXlha2luYW4gYWthbiBzZW1ha2luIGt1YXQgamlrYSBwZW5nZXRhaHVhbm55YSBqdWdhIGt1YXQuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjBweCAwcHggMjVweFwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMCxcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50TnVtZXJpYzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEVhc3RBc2lhbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEFsdGVybmF0ZXM6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRQb3NpdGlvbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U3RyZXRjaDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEuNlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJOb2JpbGUsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgICAgICAgIGZvbnRPcHRpY2FsU2l6aW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRLZXJuaW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhdGlvblNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYig2MiwgNjIsIDYyKVwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZyBzdHlsZT17eyBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGVtXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMCxcclxuICAgICAgICAgICAgICAgICAgICBmb250VmFyaWFudDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFN0cmV0Y2g6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250T3B0aWNhbFNpemluZzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEtlcm5pbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRWYXJpYXRpb25TZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA5LiBLZWFkaWxhblxyXG4gICAgICAgICAgICAgICAgPC9lbT5cclxuICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwcHggMHB4IDI1cHhcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDAsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudE51bWVyaWM6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRFYXN0QXNpYW46IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRBbHRlcm5hdGVzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50UG9zaXRpb246IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFN0cmV0Y2g6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE1LFxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIxLjZcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiTm9iaWxlLCBzYW5zLXNlcmlmXCIsXHJcbiAgICAgICAgICAgICAgICBmb250T3B0aWNhbFNpemluZzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250S2VybmluZzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250RmVhdHVyZVNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYXRpb25TZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImJhc2VsaW5lXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2IoNjIsIDYyLCA2MilcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIixcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEJlcmRhc2Fya2FuIGFydGkga2F0YW55YSwgYWRpbCBhZGFsYWggc2FtYSBiZXJhdCwgdGlkYWsgYmVyYXQgc2ViZWxhaCBkYW5cclxuICAgICAgICAgICAgICAgIHRpZGFrIG1lbWloYWsuIEtlYWRpbGFuIGRhcmkgc3VkdXQgcGFuZGFuZyBiYW5nc2EgSW5kb25lc2lhIGRpc2VidXQganVnYVxyXG4gICAgICAgICAgICAgICAga2VhZGlsYW4gc29zaWFsLCBzZWNhcmEgamVsYXMgZGljYW50dW1rYW4gZGFsYW0gcGFuY2FzaWxhIHNpbGEga2UtMiBkYW5cclxuICAgICAgICAgICAgICAgIGtlLTUsIHNlcnRhIFVVRCAxOTQ1LiBLZWFkaWxhbiBhZGFsYWggcGVuaWxhaWFuIGRlbmdhbiBtZW1iZXJpa2FuIGtlcGFkYVxyXG4gICAgICAgICAgICAgICAgc2lhcGFwdW4gc2VzdWFpIGRlbmdhbiBhcGEgeWFuZyBtZW5qYWRpIGhha255YSwgeWFrbmkgZGVuZ2FuIGJlcnRpbmRha1xyXG4gICAgICAgICAgICAgICAgcHJvcG9zaW9uYWwgZGFuIHRpZGFrIG1lbGFuZ2dhciBodWt1bS4gS2VhZGlsYW4gYmVya2FpdGFuIGVyYXQgZGVuZ2FuIGhhayxcclxuICAgICAgICAgICAgICAgIGRhbGFtIGtvbnNlcHNpIGJhbmdzYSBJbmRvbmVzaWEgaGFrIHRpZGFrIGRhcGF0IGRpcGlzYWhrYW4gZGVuZ2FuIGtld2FqaWJhbi5cclxuICAgICAgICAgICAgICAgIERhbGFtIGtvbnRla3MgcGVtYmFuZ3VuYW4gYmFuZ3NhIEluZG9uZXNpYSBrZWFkaWxhbiB0aWRhayBiZXJzaWZhdCBzZWt0b3JhbFxyXG4gICAgICAgICAgICAgICAgdGV0YXBpIG1lbGlwdXRpIGlkZW9sb2dpLiBVbnR1ayBtZW5jaXB0YWthbiBtYXN5YXJha2F0IHlhbmcgYWRpbCBkYW4gbWFrbXVyLlxyXG4gICAgICAgICAgICAgICAgQWRpbCBkYWxhbSBrZW1ha211cmFuIGRhbiBtYWttdXIgZGFsYW0ga2VhZGlsYW4uXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjBweCAwcHggMjVweFwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMCxcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50TnVtZXJpYzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEVhc3RBc2lhbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEFsdGVybmF0ZXM6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRQb3NpdGlvbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U3RyZXRjaDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEuNlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJOb2JpbGUsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgICAgICAgIGZvbnRPcHRpY2FsU2l6aW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRLZXJuaW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhdGlvblNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYig2MiwgNjIsIDYyKVwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU2VkYW5na2FuIEtlYmlqYWthbi9Qcmluc2lwIGFudGkga29ydXBzaSwgeWFpdHUgOlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwcHggMHB4IDI1cHhcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDAsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudE51bWVyaWM6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRFYXN0QXNpYW46IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRBbHRlcm5hdGVzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50UG9zaXRpb246IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFN0cmV0Y2g6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE1LFxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIxLjZcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiTm9iaWxlLCBzYW5zLXNlcmlmXCIsXHJcbiAgICAgICAgICAgICAgICBmb250T3B0aWNhbFNpemluZzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250S2VybmluZzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250RmVhdHVyZVNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYXRpb25TZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImJhc2VsaW5lXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2IoNjIsIDYyLCA2MilcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIixcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmcgc3R5bGU9e3sgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxlbVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFZhcmlhbnQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTdHJldGNoOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udE9wdGljYWxTaXppbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRLZXJuaW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250RmVhdHVyZVNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250VmFyaWF0aW9uU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgMS4gQWt1bnRhYmlsaXRhc1xyXG4gICAgICAgICAgICAgICAgPC9lbT5cclxuICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwcHggMHB4IDI1cHhcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDAsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudE51bWVyaWM6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRFYXN0QXNpYW46IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRBbHRlcm5hdGVzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50UG9zaXRpb246IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFN0cmV0Y2g6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE1LFxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIxLjZcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiTm9iaWxlLCBzYW5zLXNlcmlmXCIsXHJcbiAgICAgICAgICAgICAgICBmb250T3B0aWNhbFNpemluZzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250S2VybmluZzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250RmVhdHVyZVNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYXRpb25TZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImJhc2VsaW5lXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2IoNjIsIDYyLCA2MilcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIixcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEFrdW50YWJpbGl0YXMgYWRhbGFoIGtlc2VzdWFpYW4gYW50YXJhIGF0dXJhbiBkYW4gcGVsYWtzYW5hYW4ga2VyamEuIFNlbXVhXHJcbiAgICAgICAgICAgICAgICBsZW1iYWdhIG1lbXBlcnRhbmdndW5nIGphd2Fia2FuIGtpbmVyamFueWEgc2VzdWFpIGF0dXJhbiBtYWluIGJhaWsgZGFsYW1cclxuICAgICAgICAgICAgICAgIGJlbnR1ayBrb252ZW5zaSAoZGUgZmFjdG8pIG1hdXB1biBrb25zdGl0dXNpIChkZSBqdXJlKSwgYmFpayBwYWRhIGxldmVsXHJcbiAgICAgICAgICAgICAgICBidWRheWEgKGluZGl2aWR1IGRlbmdhbiBpbmRpdmlkdSkgbWF1cHVuIHBhZGEgbGV2ZWwgbGVtYmFnYS4gQWt1bnRhYmlsaXRhc1xyXG4gICAgICAgICAgICAgICAgcHVibGlrIHNlY2FyYSB0cmFkaXNpb25hbCBkaXBhaGFtaSBzZWJhZ2FpIGFsYXQgeWFuZyBkaWd1bmFrYW4gdW50dWtcclxuICAgICAgICAgICAgICAgIG1lbmdhd2FzaSBkYW4gbWVuZ2FyYWhrYW4gcGVyaWxha3UgYWRtaW5pc3RyYXNpIGRlbmdhbiBjYXJhIG1lbWJlcmlrYW5cclxuICAgICAgICAgICAgICAgIGtld2FqaWJhbiB1bnR1ayBkYXBhdCBtZW1iZXJpa2FuIGphd2FiYW4ga2VwYWRhIHNlanVtbGFoIG90b3JpdGFzIGVrc3Rlcm5hbFxyXG4gICAgICAgICAgICAgICAgLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwcHggMHB4IDI1cHhcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDAsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudE51bWVyaWM6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRFYXN0QXNpYW46IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRBbHRlcm5hdGVzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50UG9zaXRpb246IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFN0cmV0Y2g6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE1LFxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIxLjZcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiTm9iaWxlLCBzYW5zLXNlcmlmXCIsXHJcbiAgICAgICAgICAgICAgICBmb250T3B0aWNhbFNpemluZzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250S2VybmluZzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250RmVhdHVyZVNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYXRpb25TZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImJhc2VsaW5lXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2IoNjIsIDYyLCA2MilcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIixcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNlbGFpbiBpdHUgYWt1bnRhYmlsaXRhcyBwdWJsaWsgZGFsYW0gYXJ0aSB5YW5nIGxlYmloIGZ1bmRhbWVudGFsIG1lcnVqdWtcclxuICAgICAgICAgICAgICAgIGtlcGFkYSBrZW1hbXB1YW4gc2VzZW9yYW5nIHRlcmthaXQgZGVuZ2FuIGtpbmVyamEgeWFuZyBkaWhhcmFwa2FuLiBTZXNlb3JhbmdcclxuICAgICAgICAgICAgICAgIHlhbmcgZGliZXJpa2FuIGphd2FiYW4gaW5pIGhhcnVzbGFoIHNlc2VvcmFuZyB5YW5nIG1lbWlsaWtpIGxlZ2l0aW1hc2kgdW50dWtcclxuICAgICAgICAgICAgICAgIG1lbGFrdWthbiBwZW5nYXdhc2FuIGRhbiBtZW5naGFyYXBrYW4ga2luZXJqYSAuIEFrdW50YWJpbGl0YXMgcHVibGlrXHJcbiAgICAgICAgICAgICAgICBtZW1pbGlraSBwb2xhLXBvbGEgdGVydGVudHUgZGFsYW0gbWVrYW5pc21lbnlhLCBhbnRhcmEgbGFpbiBhZGFsYWhcclxuICAgICAgICAgICAgICAgIGFrdW50YWJpbGl0YXMgcHJvZ3JhbSwgYWt1bnRhYmxpdGFzIHByb3NlcywgYWt1bnRhaWxpdGFzIGtldWFuZ2FuLFxyXG4gICAgICAgICAgICAgICAgYWt1bnRhYmlsaXRhcyBvdXRjb21lLCBha3VudGFiaWxpdGFzIGh1a3VtLCBkYW4gYWt1bnRhYmlsaXRhcyBwb2xpdGlrIC5cclxuICAgICAgICAgICAgICAgIERhbGFtIHBlbGFrc2FuYWFubnlhLCBha3VudGFiaWxpdGFzIGhhcnVzIGRhcGF0IGRpdWt1ciBkYW5cclxuICAgICAgICAgICAgICAgIGRpcGVydGFuZ2d1bmdqYXdhYmthbiBtZWxhbHVpIG1la2FuaXNtZSBwZWxhcG9yYW4gZGFuIHBlcnRhbmdndW5namF3YWJhblxyXG4gICAgICAgICAgICAgICAgYXRhcyBzZW11YSBrZWdpYXRhbiB5YW5nIGRpbGFrdWthbi4gRXZhbHVhc2kgYXRhcyBraW5lcmphIGFkbWluaXN0cmFzaSxcclxuICAgICAgICAgICAgICAgIHByb3NlcyBwZWxha3NhbmFhbiwgZGFtcGFrIGRhbiBtYW5mYWF0IHlhbmcgZGlwZXJvbGVoIG1hc3lhcmFrYXQgYmFpayBzZWNhcmFcclxuICAgICAgICAgICAgICAgIGxhbmdzdW5nIG1hdXB1biBtYW5mYWF0IGphbmdrYSBwYW5qYW5nIGRhcmkgc2VidWFoIGtlZ2lhdGFuLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwcHggMHB4IDI1cHhcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDAsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudE51bWVyaWM6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRFYXN0QXNpYW46IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRBbHRlcm5hdGVzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50UG9zaXRpb246IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFN0cmV0Y2g6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE1LFxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIxLjZcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiTm9iaWxlLCBzYW5zLXNlcmlmXCIsXHJcbiAgICAgICAgICAgICAgICBmb250T3B0aWNhbFNpemluZzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250S2VybmluZzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250RmVhdHVyZVNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYXRpb25TZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImJhc2VsaW5lXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2IoNjIsIDYyLCA2MilcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIixcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmcgc3R5bGU9e3sgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxlbVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFZhcmlhbnQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTdHJldGNoOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udE9wdGljYWxTaXppbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRLZXJuaW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250RmVhdHVyZVNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250VmFyaWF0aW9uU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgMi4gVHJhbnNwYXJhbnNpXHJcbiAgICAgICAgICAgICAgICA8L2VtPlxyXG4gICAgICAgICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjBweCAwcHggMjVweFwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMCxcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50TnVtZXJpYzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEVhc3RBc2lhbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEFsdGVybmF0ZXM6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRQb3NpdGlvbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U3RyZXRjaDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEuNlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJOb2JpbGUsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgICAgICAgIGZvbnRPcHRpY2FsU2l6aW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRLZXJuaW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhdGlvblNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYig2MiwgNjIsIDYyKVwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUHJpbnNpcCB0cmFuc3BhcmFuc2kgcGVudGluZyBrYXJlbmEgcGVtYmVyYW50YXNhbiBrb3J1cHNpIGRpbXVsYWkgZGFyaVxyXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJhbnNpIGRhbiBtZW5naGFydXNrYW4gc2VtdWEgcHJvc2VzIGtlYmlqYWthbiBkaWxha3VrYW4gc2VjYXJhXHJcbiAgICAgICAgICAgICAgICB0ZXJidWthLCBzZWhpbmdnYSBzZWdhbGEgYmVudHVrIHBlbnlpbXBhbmdhbiBkYXBhdCBkaWtldGFodWkgb2xlaCBwdWJsaWsuXHJcbiAgICAgICAgICAgICAgICBUcmFuc3BhcmFuc2kgbWVuamFkaSBwaW50dSBtYXN1ayBzZWthbGlndXMga29udHJvbCBiYWdpIHNlbHVydWggcHJvc2VzXHJcbiAgICAgICAgICAgICAgICBkaW5hbWlrYSBzdHJ1a3R1cmFsIGtlbGVtYmFnYWFuLiBEYWxhbSBiZW50dWsgeWFuZyBwYWxpbmcgc2VkZXJoYW5hLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJhbnNpIG1lbmdhY3UgcGFkYSBrZXRlcmJ1a2FhbiBkYW4ga2VqdWp1cmFuIHVudHVrIHNhbGluZyBtZW5qdW5qdW5nXHJcbiAgICAgICAgICAgICAgICB0aW5nZ2kga2VwZXJjYXlhYW4ga2FyZW5hIGtlcGVyY2F5YWFuLCBrZXRlcmJ1a2FhbiwgZGFuIGtlanVqdXJhbiBpbmlcclxuICAgICAgICAgICAgICAgIG1lcnVwYWthbiBtb2RhbCBhd2FsIHlhbmcgc2FuZ2F0IGJlcmhhcmdhIGJhZ2kgc2VtdWEgb3JhbmcgdW50dWsgbWVsYW5qdXRrYW5cclxuICAgICAgICAgICAgICAgIGhpZHVwbnlhIGRpIG1hc2EgbWVuZGF0YW5nLiBEYWxhbSBwcm9zZXNueWEgdHJhbnNwYXJhbnNpIGRpYmFnaSBtZW5qYWRpXHJcbiAgICAgICAgICAgICAgICBsaW1hLCB5YWl0dSA6XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjBweCAwcHggMjVweFwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMCxcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50TnVtZXJpYzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEVhc3RBc2lhbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEFsdGVybmF0ZXM6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRQb3NpdGlvbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U3RyZXRjaDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEuNlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJOb2JpbGUsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgICAgICAgIGZvbnRPcHRpY2FsU2l6aW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRLZXJuaW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhdGlvblNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYig2MiwgNjIsIDYyKVwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg4oCTIFByb3NlcyBwZW5nYW5nZ2FyYW4sXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjBweCAwcHggMjVweFwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMCxcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50TnVtZXJpYzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEVhc3RBc2lhbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEFsdGVybmF0ZXM6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRQb3NpdGlvbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U3RyZXRjaDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEuNlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJOb2JpbGUsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgICAgICAgIGZvbnRPcHRpY2FsU2l6aW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRLZXJuaW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhdGlvblNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYig2MiwgNjIsIDYyKVwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg4oCTIFByb3NlcyBwZW55dXN1bmFuIGtlZ2lhdGFuLCA8YnIgc3R5bGU9e3sgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIiB9fSAvPiDigJNcclxuICAgICAgICAgICAgICAgIFByb3NlcyBwZW1iYWhhc2FuLCA8YnIgc3R5bGU9e3sgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIiB9fSAvPiDigJMgUHJvc2VzXHJcbiAgICAgICAgICAgICAgICBwZW5nYXdhc2FuLCBkYW4gPGJyIHN0eWxlPXt7IGJveFNpemluZzogXCJib3JkZXItYm94XCIgfX0gLz4g4oCTIFByb3Nlc1xyXG4gICAgICAgICAgICAgICAgZXZhbHVhc2kue1wiIFwifVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwcHggMHB4IDI1cHhcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDAsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudE51bWVyaWM6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRFYXN0QXNpYW46IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRBbHRlcm5hdGVzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50UG9zaXRpb246IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFN0cmV0Y2g6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE1LFxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIxLjZcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiTm9iaWxlLCBzYW5zLXNlcmlmXCIsXHJcbiAgICAgICAgICAgICAgICBmb250T3B0aWNhbFNpemluZzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250S2VybmluZzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250RmVhdHVyZVNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYXRpb25TZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImJhc2VsaW5lXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2IoNjIsIDYyLCA2MilcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIixcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxiciBzdHlsZT17eyBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiIH19IC8+IFByb3NlcyBwZW5nYW5nZ2FyYW4gYmVyc2lmYXRcclxuICAgICAgICAgICAgICAgIGJvdHRvbSB1cCwgbXVsYWkgZGFyaSBwZXJlbmNhbmFhbiwgaW1wbGVtZW50YXNpLCBsYXBvcmFuIHBlcnRhbmdndW5namF3YWJhblxyXG4gICAgICAgICAgICAgICAgZGFuIHBlbmlsYWlhbiAoZXZhbHVhc2kpIHRlcmhhZGFwIGtpbmVyamEgYW5nZ2FyYW4uXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjBweCAwcHggMjVweFwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMCxcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50TnVtZXJpYzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEVhc3RBc2lhbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEFsdGVybmF0ZXM6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRQb3NpdGlvbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U3RyZXRjaDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEuNlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJOb2JpbGUsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgICAgICAgIGZvbnRPcHRpY2FsU2l6aW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRLZXJuaW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhdGlvblNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYig2MiwgNjIsIDYyKVwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGJyIHN0eWxlPXt7IGJveFNpemluZzogXCJib3JkZXItYm94XCIgfX0gLz4gRGkgZGFsYW0gcHJvc2VzIHBlbnl1c3VuYW5cclxuICAgICAgICAgICAgICAgIGtlZ2lhdGFuIGF0YXUgcHJveWVrIHBlbWJhbmd1bmFuIHRlcmthaXQgZGVuZ2FuIHByb3NlcyBwZW1iYWhhc2FuIHRlbnRhbmdcclxuICAgICAgICAgICAgICAgIHN1bWJlci1zdW1iZXIgcGVuZGFuYWFuIChhbmdnYXJhbiBwZW5kYXBhdGFuKSBkYW4gYWxva2FzaSBhbmdnYXJhbiAoYW5nZ2FyYW5cclxuICAgICAgICAgICAgICAgIGJlbGFuamEpLiA8YnIgc3R5bGU9e3sgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIiB9fSAvPiBQcm9zZXMgcGVtYmFoYXNhblxyXG4gICAgICAgICAgICAgICAgbWVtYmFoYXMgdGVudGFuZyBwZW1idXRhbiByYW5jYW5nYW4gcGVyYXR1cmFuIHlhbmcgYmVya2FpdGFuIGRlbmdhbiBzdHJhdGVnaVxyXG4gICAgICAgICAgICAgICAgcGVuZ2dhbGFuZ2FuIChwZW11bmd1dGFuIGRhbmEpLCBtZWthbmlzbWUgcGVuZ2Vsb2xhYW4gcHJveWVrIG11bGFpIGRhcmlcclxuICAgICAgICAgICAgICAgIHBlbGFrc2FuYWFuIHRlbmRlciwgcGVuZ2VyamFhbiB0ZWtuaXMsIHBlbGFwb3JhbiBmaW5hbnNpYWwgZGFuXHJcbiAgICAgICAgICAgICAgICBwZXJ0YW5nZ3VuZ2phd2FiYW4gc2VjYXJhIHRla25pcy4gPGJyIHN0eWxlPXt7IGJveFNpemluZzogXCJib3JkZXItYm94XCIgfX0gLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICBQcm9zZXMgcGVuZ2F3YXNhbiBkYWxhbSBwZWxrc25hYWFuIHByb2dyYW0gZGFuIHByb3llayBwZW1iYW5ndW5hbiBiZXJrYWl0YW5cclxuICAgICAgICAgICAgICAgIGRlbmdhbiBrZXBlbnRpbmdhbiBwdWJsaWsgZGFuIGxlYmloIGtodXN1cyBsYWdpIGFkYWxhaCBwcm95ZWstcHJveWVrIHlhbmdcclxuICAgICAgICAgICAgICAgIGRpdXN1bGthbiBvbGVoIG1hc3lhcmFrYXQgc2VuZGlyaS57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8YnIgc3R5bGU9e3sgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIiB9fSAvPiBQcm9zZXMgZXZhbHVhc2kgaW5pIGJlcmxha3VcclxuICAgICAgICAgICAgICAgIHRlcmhhZGFwIHBlbnllbGVuZ2dhcmFhbiBwcm95ZWsgZGlqYWxhbmthbiBzZWNhcmEgdGVyYnVrYSBkYW4gYnVrYW4gaGFueWFcclxuICAgICAgICAgICAgICAgIHBlcnRhbmdndW5namF3YWJhbiBzZWNhcmEgYWRtaW5pc3RyYXRpZiwgdGFwaSBqdWdhIHNlY2FyYSB0ZWtuaXMgZGFuIGZpc2lrXHJcbiAgICAgICAgICAgICAgICBkYXJpIHNldGlhcCBvdXRwdXQga2VyamEta2VyamEgcGVtYmFuZ3VuYW4uXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjBweCAwcHggMjVweFwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMCxcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50TnVtZXJpYzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEVhc3RBc2lhbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEFsdGVybmF0ZXM6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRQb3NpdGlvbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U3RyZXRjaDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEuNlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJOb2JpbGUsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgICAgICAgIGZvbnRPcHRpY2FsU2l6aW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRLZXJuaW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhdGlvblNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYig2MiwgNjIsIDYyKVwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZyBzdHlsZT17eyBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGVtXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMCxcclxuICAgICAgICAgICAgICAgICAgICBmb250VmFyaWFudDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFN0cmV0Y2g6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250T3B0aWNhbFNpemluZzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEtlcm5pbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRWYXJpYXRpb25TZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAzLiBLZXdhamFyYW5cclxuICAgICAgICAgICAgICAgIDwvZW0+XHJcbiAgICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMHB4IDBweCAyNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnROdW1lcmljOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50RWFzdEFzaWFuOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50QWx0ZXJuYXRlczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudFBvc2l0aW9uOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTdHJldGNoOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNSxcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS42XCIsXHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIk5vYmlsZSwgc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udE9wdGljYWxTaXppbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEtlcm5pbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZlYXR1cmVTZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWF0aW9uU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmdiKDYyLCA2MiwgNjIpXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmeVwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBQcmluc2lwIGZhaXJuZXNzIGF0YXUga2V3YWphcmFuIGluaSBkaXR1bmp1a2thbiB1bnR1ayBtZW5jZWdhaCB0ZXJqYWRpbnlhXHJcbiAgICAgICAgICAgICAgICBtYW5pcHVsYXNpIChrZXRpZGFrd2FqYXJhbikgZGFsYW0gcGVuZ2FuZ2dhcmFuLCBiYWlrIGRhbGFtIGJlbnR1ayBtYXJrIHVwXHJcbiAgICAgICAgICAgICAgICBtYXVwdW4ga2V0aWRha3dhamFyYW4gZGFsYW0gYmVudHVrIGxhaW5ueWEuIFNpZmF0LXNpZmF0IHByaW5zaXBcclxuICAgICAgICAgICAgICAgIGtldGlkYWt3YWphcmFuIGluaSB0ZXJkaXJpIGRhcmkgbGltYSBoYWwgcGVudGluZyBrb21wZXJlaGVuc2lmIGRhbiBkaXNpcGxpbixcclxuICAgICAgICAgICAgICAgIGZsZWtzaWJpbGl0YXMsIHRlcnByZWRpa3NpLCBrZWp1anVyYW4gZGFuIGluZm9ybWF0aWYuIEtvbXBlcmVoZW5zaWYgZGFuXHJcbiAgICAgICAgICAgICAgICBkaXNpcGxpbiBiZXJhcnRpIG1lbXBlcnRpbWJhbmdrYW4ga2VzZWx1cnVoYW4gYXNwZWssIGJlcmtlc2luYW1idW5nYW4sIHRhYXRcclxuICAgICAgICAgICAgICAgIGFzYXMsIHByaW5zaXAgcGVtYmViYW5hbiwgcGVuZ2VsdWFyYW4gZGFuIHRpZGFrIG1lbGFtcGF1aSBiYXRhcyAob2ZmXHJcbiAgICAgICAgICAgICAgICBidWRnZXQpLiBGbGVrc2liaWxpdGFzIGFydGlueWEgYWRhbGFoIGFkYW55YSBrZWJpamFrYW4gdGVydGVudHUgdW50dWtcclxuICAgICAgICAgICAgICAgIG1lbmNhcGFpIGVmaXNpZW5zaSBkYW4gZWZla3RpZml0YXMuIFRlcnByZWRpa3NpIGJlcmFydGkgYWRhbnlhIGtldGV0YXBhblxyXG4gICAgICAgICAgICAgICAgZGxhbSBwZXJlbmNhbmFhbiBhdGFzIGRhc2FyIGFzYXMgdmFsdWUgZm9yIG1vbmV5IHVudHVrIG1lbmdoaW5kYXJpIGRlZmlzaXRcclxuICAgICAgICAgICAgICAgIGRhbGFtIHRhaHVuIGFuZ2dhcmFuIGJlcmphbGFuLiBBbmdnYXJhbiB5YW5nIHRlcnByZWRpa3NpIG1lcnVwYWthbiBjZXJtaW5hblxyXG4gICAgICAgICAgICAgICAgZGFyaSBhZGFueWEgcHJpbnNpcCBmYWlybmVzcyBkaSBkYWxhbSBwcm9zZXMgcGVyZW5jYW5hYW4gcGVtYmFuZ3VuYW4uXHJcbiAgICAgICAgICAgICAgICBLZWp1anVyYW4gbWVuZ2FuZHVuZyBhcnRpIHRpZGFrIGFkYW55YSBiaWFzIHBlcmtpcmFhbiBwZW5lcmltYWFuIG1hdXB1blxyXG4gICAgICAgICAgICAgICAgcGVuZ2VsdWFyYW4geWFuZyBkaXNlbmdhamEgeWFuZyBiZXJhc2FsIGRhcmkgcGVydGltYmFuZ2FuIHRla25pcyBtYXVwdW5cclxuICAgICAgICAgICAgICAgIHBvbGl0aXMuIEtlanVqdXJhbiBtZXJ1cGFrYW4gYmFnaWFuIHBva29rIGRhcmkgcHJpbnNpcCBmYWlybmVzcy4gUGVuZXJhcGFuXHJcbiAgICAgICAgICAgICAgICBzaWZhdCBpbmZvcm1hdGlmIGFnYXIgZGFwYXQgdGVyY2FwYWlueWEgc2lzdGVtIGluZm9ybWFzaSBwZWxhcG9yYW4geWFuZ1xyXG4gICAgICAgICAgICAgICAgdGVyYXR1ciBkYW4gaW5mb3JtYXRpZi4gU2lzdGVtIGluZm9ybWF0aWYgaW5pIGRpamFkaWthbiBzZWJhZ2FpIGRhc2FyXHJcbiAgICAgICAgICAgICAgICBwZW5pbGFpYW4ga2luZXJqYSwga2VqdWp1cmFuIGRhbiBwcm9zZXMgcGVuZ2FtYmlsYW4ga2VwdXR1c2FuIHNlbGFpbiBpdHVcclxuICAgICAgICAgICAgICAgIHNpZmF0IGluaSBtZXJ1cGFrYW4gY2lyaSBraGFzIGRhcmkga2VqdWp1cmFuLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwcHggMHB4IDI1cHhcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDAsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudE51bWVyaWM6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRFYXN0QXNpYW46IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRBbHRlcm5hdGVzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50UG9zaXRpb246IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFN0cmV0Y2g6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE1LFxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIxLjZcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiTm9iaWxlLCBzYW5zLXNlcmlmXCIsXHJcbiAgICAgICAgICAgICAgICBmb250T3B0aWNhbFNpemluZzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250S2VybmluZzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250RmVhdHVyZVNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYXRpb25TZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImJhc2VsaW5lXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2IoNjIsIDYyLCA2MilcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIixcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmcgc3R5bGU9e3sgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxlbVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFZhcmlhbnQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTdHJldGNoOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udE9wdGljYWxTaXppbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRLZXJuaW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250RmVhdHVyZVNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250VmFyaWF0aW9uU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgNC4gS2ViaWpha2FuXHJcbiAgICAgICAgICAgICAgICA8L2VtPlxyXG4gICAgICAgICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjBweCAwcHggMjVweFwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMCxcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50TnVtZXJpYzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEVhc3RBc2lhbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEFsdGVybmF0ZXM6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRQb3NpdGlvbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U3RyZXRjaDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEuNlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJOb2JpbGUsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgICAgICAgIGZvbnRPcHRpY2FsU2l6aW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRLZXJuaW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhdGlvblNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYig2MiwgNjIsIDYyKVwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgS2ViaWpha2FuIGluaSBiZXJwZXJhbiB1bnR1ayBtZW5nYXR1ciB0YXRhIGludGVyYWtzaSBhZ2FyIHRpZGFrIHRlcmphZGlcclxuICAgICAgICAgICAgICAgIHBlbnlpbXBhbmdhbiB5YW5nIGRhcGF0IG1lcnVnaWthbiBuZWdhcmEgZGFuIG1hc3lhcmFrYXQuIEtlYmlqYWthbiBhbnRpXHJcbiAgICAgICAgICAgICAgICBrb3J1cHNpIGluaSB0aWRhayBzZWxhbHUgaWRlbnRpayBkZW5nYW4gdW5kYW5nLXVuZGFuZyBhbnRpIGtvcnVwc2ksIG5hbXVuXHJcbiAgICAgICAgICAgICAgICBiaXNhIGJlcnVwYSB1bmRhbmctdW5kYW5nIGtlYmViYXNhbiBtZW5nYWtzZXMgaW5mb3JtYXNpLCB1bmRhbmctdW5kYW5nXHJcbiAgICAgICAgICAgICAgICBkZXNlbnRyYWxpc2FzaSwgdW5kYW5nLXVuZGFuZyBhbnRpLW1vbm9wb2xpLCBtYXVwdW4gbGFpbm55YSB5YW5nIGRhcGF0XHJcbiAgICAgICAgICAgICAgICBtZW11ZGFoa2FuIG1hc3lhcmFrYXQgbWVuZ2V0YWh1aSBzZWthbGlndXMgbWVuZ29udHJvbCB0ZXJoYWRhcCBraW5lcmphIGRhblxyXG4gICAgICAgICAgICAgICAgcGVuZ2d1bmFhbiBhbmdnYXJhbiBuZWdhcmEgb2xlaCBwYXJhIHBlamFiYXQgbmVnYXJhLiBBc3Blay1hc3BlayBrZWJpamFrYW5cclxuICAgICAgICAgICAgICAgIHRlcmRpcmkgZGFyaSBpc2kga2ViaWpha2FuLCBwZW1idWF0IGtlYmlqYWthbiwgcGVsYWtzYW5hIGtlYmlqYWthbiwga3VsdHVyXHJcbiAgICAgICAgICAgICAgICBrZWJpamFrYW4uIEtlYmlqYWthbiBhbnRpIGtvcnVwc2kgYWthbiBlZmVrdGlmIGFwYWJpbGEgZGlkYWxhbW55YSB0ZXJrYW5kdW5nXHJcbiAgICAgICAgICAgICAgICB1bnN1ci11bnN1ciB5YW5nIHRlcmthaXQgZGVuZ2FuIHBlcnNvYWxhbiBrb3J1cHNpIGRhbiBrdWFsaXRhcyBkYXJpIGlzaVxyXG4gICAgICAgICAgICAgICAga2ViaWpha2FuIHRlcmdhbnR1bmcgcGFkYSBrdWFsaXRhcyBkYW4gaW50ZWdyaXRhcyBwZW1idWF0bnlhLiBLZWJpamFrYW4geWFuZ1xyXG4gICAgICAgICAgICAgICAgdGVsYWggZGlidWF0IGRhcGF0IGJlcmZ1bmdzaSBhcGFiaWxhIGRpZHVrdW5nIG9sZWggYWt0b3ItYWt0b3IgcGVuZWdha1xyXG4gICAgICAgICAgICAgICAga2ViaWpha2FuIHlhaXR1IGtlcG9saXNpYW4sIGtlamFrc2FhbiwgcGVuZ2FkaWxhbiwgcGVuZ2FjYXJhLCBkYW4gbGVtYmFnYVxyXG4gICAgICAgICAgICAgICAgcGVtYXN5YXJha2F0YW4uIEVrc2lzdGVuc2kgc2VidWFoIGtlYmlqYWthbiB0ZXJzZWJ1dCB0ZXJrYWl0IGRlbmdhblxyXG4gICAgICAgICAgICAgICAgbmlsYWktbmlsYWksIHBlbWFoYW1hbiwgc2lrYXAsIHBlcnNlcHNpIGRhbiBrZXNhZGFyYW4gbWFzeWFyYWthdCB0ZXJoYWRhcFxyXG4gICAgICAgICAgICAgICAgaHVrdW0gYXRhdSB1bmRhbmctdW5kYW5nIGFudGkga29ydXBzaS4gTGViaWggamF1aCBsYWdpIGt1bHR1ciBrZWJpamFrYW4gaW5pXHJcbiAgICAgICAgICAgICAgICBha2FuIG1lbmVudHVrYW4gdGluZ2thdCBwYXJ0aXNpcGFzaSBtYXN5YXJha2F0IGRhbGFtIHBlbWJlcmFudGFzYW4ga29ydXBzaS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMHB4IDBweCAyNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnROdW1lcmljOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50RWFzdEFzaWFuOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50QWx0ZXJuYXRlczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudFBvc2l0aW9uOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTdHJldGNoOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNSxcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS42XCIsXHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIk5vYmlsZSwgc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udE9wdGljYWxTaXppbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEtlcm5pbmc6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZlYXR1cmVTZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWF0aW9uU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmdiKDYyLCA2MiwgNjIpXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmeVwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nIHN0eWxlPXt7IGJveFNpemluZzogXCJib3JkZXItYm94XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZW1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50OiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U3RyZXRjaDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRPcHRpY2FsU2l6aW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250S2VybmluZzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZlYXR1cmVTZXR0aW5nczogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFZhcmlhdGlvblNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImJhc2VsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDUuIEtvbnRyb2wgS2ViaWpha2FuXHJcbiAgICAgICAgICAgICAgICA8L2VtPlxyXG4gICAgICAgICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjBweCAwcHggMjVweFwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMCxcclxuICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50TnVtZXJpYzogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEVhc3RBc2lhbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudEFsdGVybmF0ZXM6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhbnRQb3NpdGlvbjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U3RyZXRjaDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEuNlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJOb2JpbGUsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgICAgICAgIGZvbnRPcHRpY2FsU2l6aW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRLZXJuaW5nOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFZhcmlhdGlvblNldHRpbmdzOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYig2MiwgNjIsIDYyKVwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgS29udHJvbCBrZWJpamFrYW4gbWVydXBha2FuIHVwYXlhIGFnYXIga2ViaWpha2FuIHlhbmcgZGlidWF0IGJldHVsLWJldHVsXHJcbiAgICAgICAgICAgICAgICBlZmVrdGlmIGRhbiBtZW5nZWxpbWluYXNpIHNlbXVhIGJlbnR1ayBrb3J1cHNpLiBCZW50dWsga29udHJvbCBrZWJpamFrYW5cclxuICAgICAgICAgICAgICAgIGJlcnVwYSBwYXJ0aXNpcGFzaSwgZXZvbHVzaSBkYW4gcmVmb3JtYXNpLiBLb250cm9sIGtlYmlqYWthbiBwYXJ0aXNpcGFzaVxyXG4gICAgICAgICAgICAgICAgeWFpdHUgbWVsYWt1a2FuIGtvbnRyb2wgdGVyaGFkYXAga2ViaWpha2FuIGRlbmdhbiBpa3V0IHNlcnRhIGRhbGFtXHJcbiAgICAgICAgICAgICAgICBwZW55dXN1bmFuIGRhbiBwZWxha3NhbmFhbm55YS4gS29udHJvbCBrZWJpamFrYW4gZXZvbHVzaSB5YWl0dSBkZW5nYW5cclxuICAgICAgICAgICAgICAgIG1lbmF3YXJrYW4gYWx0ZXJuYXRpZiBrZWJpamFrYW4gYmFydSB5YW5nIGRpYW5nZ2FwIGxlYmloIGxheWFrLiBLb250cm9sXHJcbiAgICAgICAgICAgICAgICBrZWJpamFrYW4gcmVmb3JtYXNpIHlhaXR1IG1lbmdvbnRyb2wgZGVuZ2FuIG1lbmdnYW50aSBrZWJpamFrYW4geWFuZ1xyXG4gICAgICAgICAgICAgICAgZGlhbmdnYXAgdGlkYWsgc2VzdWFpLlxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIDxGb290ZXIgLz5cclxuXHJcblxyXG4gICAgICA8ZGl2IGlkPVwicHJlbG9hZGVyXCI+PC9kaXY+XHJcbiAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmFjay10by10b3AgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+PGkgY2xhc3NOYW1lPVwiYmkgYmktYXJyb3ctdXAtc2hvcnRcIj48L2k+PC9hPlxyXG5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0JveFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==