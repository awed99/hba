module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _helpers_importJS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/importJS */ "./helpers/importJS.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\kerjaan\\dewa\\hba\\pages\\index.js";







function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("section", {
      id: "hero",
      suppressHydrationWarning: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        id: "heroCarousel",
        "data-bs-interval": "5000",
        className: "carousel slide carousel-fade",
        "data-bs-ride": "carousel",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "carousel-inner",
          role: "listbox",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "carousel-item active",
            style: {
              backgroundImage: 'url(assets/img/slide/slide-1.jpg)'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "carousel-container",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "carousel-content animate__animated animate__fadeInUp",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
                  children: "PT. Hidayat Bersaudara Abadi"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                  children: "PT Hidayat Bersaudara Abadi (Perseroan) merupakan Perseroan Terbatas (PT) yang berupaya mewujudkan visinya menjadi Perusahaan Mitra Kerja dan Jasa terkemuka berskala Nasional yang mampu memberikan nilai tambah kepada stakeholders."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "carousel-item",
            style: {
              backgroundImage: 'url(assets/img/slide/slide-2.jpg)'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "carousel-container",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "carousel-content animate__animated animate__fadeInUp",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
                  children: "Visi PT. Hidayat Bersaudara Abadi"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                  children: "Jasa yang berkualitas dengan mengedepankan pada kepuasan konsumen"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                  children: "Nilai Dasar : Jujur, Berorientasi kualitas, Integritas, Tanggung jawab, Peduli , Visioner"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "carousel-item",
            style: {
              backgroundImage: 'url(assets/img/slide/slide-3.jpg)'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "carousel-container",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "carousel-content animate__animated animate__fadeInUp",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
                  children: "Misi PT. Hidayat Bersaudara Abadi"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                  children: "Menyediakan Jasa yang berkualitas dengan mengedepankan pada kepuasan konsumen"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                  children: "Mewujudkan Manajemen Perusahaan yang memiliki dan menjunjung tinggi Etika Bisnis dan Nilai nilai Dasar"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                  children: "Memanfaatkan perkembangan Teknologi yang ramah lingkungan"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                  children: "Mempunyai keunggulan bersaing dalam Bisnis Inti dan Bisnis terkait"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                  children: "Mensinergikan komponen komponen Perusahaan untuk menghasilkan nilai tambah"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                  children: "Memiliki komitmen untuk meningkatkan pertumbuhan usaha yang berkesinambungan, kesejahteraan stakeholders, dan senantiasa meningkatkan tanggung jawab sosial"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
          className: "carousel-control-prev",
          href: "#heroCarousel",
          role: "button",
          "data-bs-slide": "prev",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
            className: "carousel-control-prev-icon bi bi-chevron-left",
            "aria-hidden": "true"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
          className: "carousel-control-next",
          href: "#heroCarousel",
          role: "button",
          "data-bs-slide": "next",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
            className: "carousel-control-next-icon bi bi-chevron-right",
            "aria-hidden": "true"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("ol", {
          className: "carousel-indicators",
          id: "hero-carousel-indicators"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("main", {
      id: "main",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("section", {
        id: "about",
        className: "about",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "container",
          "data-aos": "fade-up",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "row justify-content-end",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-lg-11",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "row justify-content-end",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                    className: "count-box",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                      className: "bi bi-emoji-smile"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 83,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
                      "data-purecounter-start": "0",
                      "data-purecounter-end": "125",
                      "data-purecounter-duration": "1",
                      className: "purecounter"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 84,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                      children: "Happy Clients"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                    className: "count-box",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                      className: "bi bi-journal-richtext"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 91,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
                      "data-purecounter-start": "0",
                      "data-purecounter-end": "85",
                      "data-purecounter-duration": "1",
                      className: "purecounter"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 92,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                      children: "Projects"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 93,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                    className: "count-box",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                      className: "bi bi-clock"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 99,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
                      "data-purecounter-start": "0",
                      "data-purecounter-end": "35",
                      "data-purecounter-duration": "1",
                      className: "purecounter"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 100,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                      children: "Years of experience"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 101,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                    className: "count-box",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                      className: "bi bi-award"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 107,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
                      "data-purecounter-start": "0",
                      "data-purecounter-end": "48",
                      "data-purecounter-duration": "1",
                      className: "purecounter"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 108,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                      children: "Awards"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 109,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-lg-6 video-box align-self-baseline",
              "data-aos": "zoom-in",
              "data-aos-delay": "100",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                src: "assets/img/about.jpg",
                className: "img-fluid",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                href: "https://www.youtube.com/watch?v=jDDaplaOz7Q",
                className: "glightbox play-btn mb-4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-lg-6 pt-3 pt-lg-0 content",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h3", {
                children: "Perusahaan Mitra Kerja dan Jasa"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                className: "fst-italic",
                children: "Menjalin kerja sama atau rekan bisnis dengan perusahaan lain pada bidang usaha yang selaras untuk pengembangan atau perluasan project. Bukan hanya sekedar menjalin ikatan tapi juga mampu memberikan timbal balik secara positif bagi satu sama lain."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("ul", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-check-double"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 23
                  }, this), " Pengembangan Bisnis"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-check-double"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 23
                  }, this), " Membangun Pertumbuhan Finansial Bisnis"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-check-double"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 23
                  }, this), " Jalinan Hubungan Sosial Dalam Bisnis"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-check-double"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 23
                  }, this), " Membentuk Kesepakatan Yang Saling Menguntungkan"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                children: "Kemitraan diharapkan mampu memberikan kemudahan dan keuntungan bagi semua pihak. Oleh karena itu, sebuah kesepakatan akan dibentuk untuk menentukan penyelesaian suatu project."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("section", {
        id: "about-boxes",
        className: "about-boxes",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "container",
          "data-aos": "fade-up",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-lg-4 col-md-6 d-flex align-items-stretch",
              "data-aos": "fade-up",
              "data-aos-delay": "100",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "card",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                  src: "assets/img/about-boxes-1.jpg",
                  className: "card-img-top",
                  alt: "..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "card-icon",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "ri-brush-4-line"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "card-body",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h5", {
                    className: "card-title",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                      href: "",
                      children: "Our Mission"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 158,
                      columnNumber: 48
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 158,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                    className: "card-text",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                      children: "Menyediakan Jasa yang berkualitas dengan mengedepankan pada kepuasan konsumen"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 160,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                      children: "Mewujudkan Manajemen Perusahaan yang memiliki dan menjunjung tinggi Etika Bisnis dan Nilai nilai Dasar"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 161,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                      children: "Memanfaatkan perkembangan Teknologi yang ramah lingkungan"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 162,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-lg-4 col-md-6 d-flex align-items-stretch",
              "data-aos": "fade-up",
              "data-aos-delay": "200",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "card",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                  src: "assets/img/about-boxes-2.jpg",
                  className: "card-img-top",
                  alt: "..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "card-icon",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "ri-calendar-check-line"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 171,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "card-body",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h5", {
                    className: "card-title",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                      href: "",
                      children: "Our Plan"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 174,
                      columnNumber: 48
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                    className: "card-text",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                      children: "Bersaing dalam Bisnis Inti dan Bisnis terkait"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 176,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                      children: "Meningkatkan pertumbuhan usaha yang berkesinambungan, kesejahteraan stakeholders, dan senantiasa meningkatkan tanggung jawab sosial"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 177,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 175,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-lg-4 col-md-6 d-flex align-items-stretch",
              "data-aos": "fade-up",
              "data-aos-delay": "300",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "card",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                  src: "assets/img/about-boxes-3.jpg",
                  className: "card-img-top",
                  alt: "..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 185,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "card-icon",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "ri-movie-2-line"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 187,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "card-body",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h5", {
                    className: "card-title",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                      href: "",
                      children: "Our Vision"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 190,
                      columnNumber: 48
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 190,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                    className: "card-text",
                    children: "Menjadi Perusahaan Mitra Kerja dan Jasa terkemuka berskala Nasional yang mampu memberikan nilai tambah kepada stakeholders"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 191,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 9
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
              lineNumber: 206,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
              children: "Check our Services"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "row",
            "data-aos": "fade-up",
            "data-aos-delay": "200",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-md-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "icon-box",
                style: {
                  minHeight: '210px'
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                  className: "bi bi-box-fill"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 213,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h4", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                    href: "./services",
                    children: "General Supplier"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 214,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                  children: "Conveyor System Parts, Unit Parts, Heavy Equipment & Vehicles, maintenance, Mechanical/Electrical Materia, Conveyor System, Under Carriage (B/Dozer & Excavator Etc.), Equipment &Vehicles Parts Etc."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 215,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-md-6 mt-4 mt-md-0",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "icon-box",
                style: {
                  minHeight: '210px'
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                  className: "bi bi-bus-front"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h4", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                    href: "./services",
                    children: "Transportation Service"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 223,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 223,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                  children: "Transportation Service"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-md-6 mt-4 mt-md-0",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "icon-box",
                style: {
                  minHeight: '210px'
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                  className: "bi bi-hammer"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h4", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                    href: "./services",
                    children: "Civil Construction"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 230,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                  children: "Office Building, House Building, Renovation, Road  maintenance  (Asphalt work)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 231,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-md-6 mt-4 mt-md-0",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "icon-box",
                style: {
                  minHeight: '210px'
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                  className: "bi bi-cone-striped"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 236,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h4", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                    href: "./services",
                    children: "Safety/Enviro Material "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 237,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 237,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                  children: "APD, Chemicals Etc"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 238,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 235,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-md-6 mt-4 mt-md-0",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "icon-box",
                style: {
                  minHeight: '210px'
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                  className: "bi bi-card-checklist"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 243,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h4", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                    href: "./services",
                    children: "Consumables "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 244,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                  children: "Stationary Parts, Gloves, Mop, etc."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 245,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("section", {
        id: "portfolio",
        className: "portfolio",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "container",
          "data-aos": "fade-up",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "section-title",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
              children: "Portfolio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 257,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
              children: "Check our Portfolio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "row",
            "data-aos": "fade-up",
            "data-aos-delay": "100",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-lg-12 d-flex justify-content-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("ul", {
                id: "portfolio-flters",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
                  "data-filter": "*",
                  className: "filter-active",
                  children: "All"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 264,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
                  "data-filter": ".filter-company",
                  children: "Company"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 265,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
                  "data-filter": ".filter-product",
                  children: "Product"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 266,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
                  "data-filter": ".filter-service",
                  children: "Service"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 267,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 261,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "row portfolio-container",
            "data-aos": "fade-up",
            "data-aos-delay": "200",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-lg-4 col-md-6 portfolio-item filter-company",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                src: "assets/img/app/team-work.png",
                className: "img-fluid",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 275,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "portfolio-info",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h4", {
                  children: "Team Work"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 277,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  href: "assets/img/app/team-work.png",
                  "data-gallery": "portfolioGallery",
                  className: "portfolio-lightbox preview-link",
                  title: "Team Work",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-plus"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 278,
                    columnNumber: 152
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 278,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  href: "./services",
                  className: "details-link",
                  title: "More Details",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-link"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 279,
                    columnNumber: 86
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 279,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 276,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 274,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-lg-4 col-md-6 portfolio-item filter-company",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                src: "assets/img/app/on-goal.png",
                className: "img-fluid",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 284,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "portfolio-info",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h4", {
                  children: "One Goal"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 286,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  href: "assets/img/app/on-goal.png",
                  "data-gallery": "portfolioGallery",
                  className: "portfolio-lightbox preview-link",
                  title: "One Goal",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-plus"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 287,
                    columnNumber: 149
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 287,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  href: "./services",
                  className: "details-link",
                  title: "More Details",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-link"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 288,
                    columnNumber: 86
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 288,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 285,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 283,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-lg-4 col-md-6 portfolio-item filter-company",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                src: "assets/img/app/partner.png",
                className: "img-fluid",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 293,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "portfolio-info",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h4", {
                  children: "Our Parner"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 295,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  href: "assets/img/app/partner.png",
                  "data-gallery": "portfolioGallery",
                  className: "portfolio-lightbox preview-link",
                  title: "Our Parner",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-plus"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 296,
                    columnNumber: 151
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 296,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  href: "./services",
                  className: "details-link",
                  title: "More Details",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-link"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 297,
                    columnNumber: 86
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 297,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 294,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-lg-4 col-md-6 portfolio-item filter-product",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                src: "assets/img/app/image5.png",
                className: "img-fluid",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 302,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "portfolio-info",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h4", {
                  children: "Our Products"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 304,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  href: "assets/img/app/image5.png",
                  "data-gallery": "portfolioGallery",
                  className: "portfolio-lightbox preview-link",
                  title: "Our Products",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-plus"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 305,
                    columnNumber: 152
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 305,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  href: "./services",
                  className: "details-link",
                  title: "More Details",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-link"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 306,
                    columnNumber: 86
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 306,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 303,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-lg-4 col-md-6 portfolio-item filter-product",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                src: "assets/img/app/image8.png",
                className: "img-fluid",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 311,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "portfolio-info",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h4", {
                  children: "Our Products"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 313,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  href: "assets/img/app/image8.png",
                  "data-gallery": "portfolioGallery",
                  className: "portfolio-lightbox preview-link",
                  title: "Our Products",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-plus"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 314,
                    columnNumber: 152
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 314,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  href: "./services",
                  className: "details-link",
                  title: "More Details",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-link"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 315,
                    columnNumber: 86
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 315,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 312,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 310,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-lg-4 col-md-6 portfolio-item filter-product",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                src: "assets/img/app/image9.png",
                className: "img-fluid",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 320,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "portfolio-info",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h4", {
                  children: "Our Products"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 322,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  href: "assets/img/app/image9.png",
                  "data-gallery": "portfolioGallery",
                  className: "portfolio-lightbox preview-link",
                  title: "Our Products",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-plus"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 323,
                    columnNumber: 152
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 323,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  href: "./services",
                  className: "details-link",
                  title: "More Details",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-link"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 324,
                    columnNumber: 86
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 324,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 321,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 319,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-lg-4 col-md-6 portfolio-item filter-product",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                src: "assets/img/app/image10.png",
                className: "img-fluid",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 329,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "portfolio-info",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h4", {
                  children: "Our Products"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 331,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  href: "assets/img/app/image10.png",
                  "data-gallery": "portfolioGallery",
                  className: "portfolio-lightbox preview-link",
                  title: "Our Products",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-plus"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 332,
                    columnNumber: 153
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 332,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  href: "./services",
                  className: "details-link",
                  title: "More Details",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-link"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 333,
                    columnNumber: 86
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 333,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 330,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 328,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-lg-4 col-md-6 portfolio-item filter-product",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                src: "assets/img/app/image11.png",
                className: "img-fluid",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 338,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "portfolio-info",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h4", {
                  children: "Our Products"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 340,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  href: "assets/img/app/image11.png",
                  "data-gallery": "portfolioGallery",
                  className: "portfolio-lightbox preview-link",
                  title: "Our Products",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-plus"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 341,
                    columnNumber: 153
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 341,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  href: "./services",
                  className: "details-link",
                  title: "More Details",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-link"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 342,
                    columnNumber: 86
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 342,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 339,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 337,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-lg-4 col-md-6 portfolio-item filter-product",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                src: "assets/img/app/image12.png",
                className: "img-fluid",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 347,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "portfolio-info",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h4", {
                  children: "Our Products"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 349,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  href: "assets/img/app/image12.png",
                  "data-gallery": "portfolioGallery",
                  className: "portfolio-lightbox preview-link",
                  title: "Our Products",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-plus"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 350,
                    columnNumber: 153
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 350,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  href: "./services",
                  className: "details-link",
                  title: "More Details",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-link"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 351,
                    columnNumber: 86
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 351,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 348,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 346,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-lg-4 col-md-6 portfolio-item filter-product",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                src: "assets/img/app/image13.png",
                className: "img-fluid",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 356,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "portfolio-info",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h4", {
                  children: "Our Products"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 358,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  href: "assets/img/app/image13.png",
                  "data-gallery": "portfolioGallery",
                  className: "portfolio-lightbox preview-link",
                  title: "Our Products",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-plus"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 359,
                    columnNumber: 153
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 359,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  href: "./services",
                  className: "details-link",
                  title: "More Details",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-link"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 360,
                    columnNumber: 86
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 360,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 357,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 355,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-lg-4 col-md-6 portfolio-item filter-product",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                src: "assets/img/app/image14.png",
                className: "img-fluid",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 365,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "portfolio-info",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h4", {
                  children: "Our Products"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 367,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  href: "assets/img/app/image14.png",
                  "data-gallery": "portfolioGallery",
                  className: "portfolio-lightbox preview-link",
                  title: "Our Products",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-plus"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 368,
                    columnNumber: 153
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 368,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  href: "./services",
                  className: "details-link",
                  title: "More Details",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-link"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 369,
                    columnNumber: 86
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 369,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 366,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 364,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-lg-4 col-md-6 portfolio-item filter-product",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                src: "assets/img/app/image15.png",
                className: "img-fluid",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 374,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "portfolio-info",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h4", {
                  children: "Our Products"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 376,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  href: "assets/img/app/image15.png",
                  "data-gallery": "portfolioGallery",
                  className: "portfolio-lightbox preview-link",
                  title: "Our Products",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-plus"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 377,
                    columnNumber: 153
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 377,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  href: "./services",
                  className: "details-link",
                  title: "More Details",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-link"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 378,
                    columnNumber: 86
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 378,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 375,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 373,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-lg-4 col-md-6 portfolio-item filter-product",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                src: "assets/img/app/image16.png",
                className: "img-fluid",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 383,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "portfolio-info",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h4", {
                  children: "Our Products"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 385,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  href: "assets/img/app/image16.png",
                  "data-gallery": "portfolioGallery",
                  className: "portfolio-lightbox preview-link",
                  title: "Our Products",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-plus"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 386,
                    columnNumber: 153
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 386,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  href: "./services",
                  className: "details-link",
                  title: "More Details",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                    className: "bx bx-link"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 387,
                    columnNumber: 86
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 387,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 384,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 382,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 272,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("section", {
        id: "clients",
        className: "clients",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "container",
          "data-aos": "zoom-in",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                src: "assets/img/clients/client-1.png",
                className: "img-fluid",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 402,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 401,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                src: "assets/img/clients/client-2.png",
                className: "img-fluid",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 406,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 405,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                src: "assets/img/clients/client-3.png",
                className: "img-fluid",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 410,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 409,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                src: "assets/img/clients/client-4.png",
                className: "img-fluid",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 414,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 413,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                src: "assets/img/clients/client-5.png",
                className: "img-fluid",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 418,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 417,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                src: "assets/img/clients/client-6.png",
                className: "img-fluid",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 422,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 421,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 399,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 397,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 396,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      id: "preloader"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
      href: "#",
      className: "back-to-top d-flex align-items-center justify-content-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
        className: "bi bi-arrow-up-short"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 436,
        columnNumber: 92
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvaW1wb3J0SlMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9pbWFnZS50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiRm9vdGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwid2luZG93IiwibG9jYXRpb24iLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJIZWFkZXIiLCJhc1BhdGgiLCJzcGxpdCIsImN1cnNvciIsInNlbGVjdCIsImVsIiwiYWxsIiwidHJpbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInF1ZXJ5U2VsZWN0b3IiLCJvbiIsInR5cGUiLCJsaXN0ZW5lciIsInNlbGVjdEVsIiwiZm9yRWFjaCIsImUiLCJhZGRFdmVudExpc3RlbmVyIiwib25zY3JvbGwiLCJpbXBvcnRKUyIsIlB1cmVDb3VudGVyIiwiQU9TIiwiR0xpZ2h0Ym94IiwiSXNvdG9wZSIsIlN3aXBlciIsInBvcnRmb2xpb0NvbnRhaW5lciIsInBvcnRmb2xpb0lzb3RvcGUiLCJpdGVtU2VsZWN0b3IiLCJwb3J0Zm9saW9GaWx0ZXJzIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJhcnJhbmdlIiwiZmlsdGVyIiwiZ2V0QXR0cmlidXRlIiwicmVmcmVzaCIsImhlcm9DYXJvdXNlbEluZGljYXRvcnMiLCJoZXJvQ2Fyb3VzZWxJdGVtcyIsIml0ZW0iLCJpbmRleCIsImlubmVySFRNTCIsInNlbGVjdG9yIiwic3BlZWQiLCJsb29wIiwiYXV0b3BsYXkiLCJkZWxheSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwic2xpZGVzUGVyVmlldyIsInBhZ2luYXRpb24iLCJjbGlja2FibGUiLCJpbml0IiwiZHVyYXRpb24iLCJlYXNpbmciLCJvbmNlIiwibWlycm9yIiwicHJlbG9hZGVyIiwiSG9tZSIsImJhY2tncm91bmRJbWFnZSIsIm1pbkhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBOztRQUVBO1FBQ0E7UUFDQSxtQ0FBbUM7UUFDbkM7UUFDQTtRQUNBO1FBQ0E7UUFDQSxrQkFBa0IscUJBQXFCO1FBQ3ZDO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFD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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbEJGLGVBc0JFO0FBQUssdUJBQVMsRUFBQywwRUFBZjtBQUFBLHFDQUNFO0FBQUssbUJBQUcsRUFBQyxpQ0FBVDtBQUEyQyx5QkFBUyxFQUFDLFdBQXJEO0FBQWlFLG1CQUFHLEVBQUM7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcFVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVERixlQW9hRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcGFGLGVBdWFFO0FBQUssUUFBRSxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZhRixlQXdhRTtBQUFHLFVBQUksRUFBQyxHQUFSO0FBQVksZUFBUyxFQUFDLDhEQUF0QjtBQUFBLDZCQUFxRjtBQUFHLGlCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4YUY7QUFBQSxrQkFERjtBQTZhRCxDOzs7Ozs7Ozs7OztBQ3ZiRCx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBhZ2VzL2luZGV4XCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuLi9cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvX25leHQvXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgPGZvb3RlciBpZD1cImZvb3RlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItdG9wXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5QVCBIaWRheWF0IEJlcnNhdWRhcmEgQWJhZGkgKEhCQSk8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLSBKbC4gTWFzamlkIEFsIE11amFoaWRpbiBSVC4gMDAzIFJXIDAxIE5vLjEwMCwgS2VsLiBKYXRpcmFoYXl1IEtlYy4gUG9uZG9rIEdlZGUsIEtvdGEgQmVrYXNpLCAxNzQxNCwgSmFiYXJcclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0gS29tcGxlayBHcmFuZCBDaXR5LCBGb3Jlc3QgdmlsbGUgSzEyIE5vLiAyMywgSmwuIE1UIEhhcnlvbm8gQmFsaWtwYXBhbiwgS2FsdGltXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5QaG9uZTo8L3N0cm9uZz4gMDgxMiAxMjgyIDMwMzA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5FbWFpbDo8L3N0cm9uZz4gYWRtaW5AaGlkYXlhdGJlcnNhdWRhcmFhYmFkaS5jb208YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWxpbmtzIG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIuL1wiIGNsYXNzTmFtZT1cInR3aXR0ZXJcIj48aSBjbGFzc05hbWU9XCJieCBieGwtdHdpdHRlclwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLi9cIiBjbGFzc05hbWU9XCJmYWNlYm9va1wiPjxpIGNsYXNzTmFtZT1cImJ4IGJ4bC1mYWNlYm9va1wiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLi9cIiBjbGFzc05hbWU9XCJpbnN0YWdyYW1cIj48aSBjbGFzc05hbWU9XCJieCBieGwtaW5zdGFncmFtXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIuL1wiIGNsYXNzTmFtZT1cImdvb2dsZS1wbHVzXCI+PGkgY2xhc3NOYW1lPVwiYnggYnhsLXNreXBlXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIuL1wiIGNsYXNzTmFtZT1cImxpbmtlZGluXCI+PGkgY2xhc3NOYW1lPVwiYnggYnhsLWxpbmtlZGluXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgY29sLW1kLTYgZm9vdGVyLWxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoND5Vc2VmdWwgTGlua3M8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImJ4IGJ4LWNoZXZyb24tcmlnaHRcIj48L2k+IDxhIGNsYXNzTmFtZT0nc2Nyb2xsdG8nIGhyZWY9XCIuL1wiPkhvbWU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGkgY2xhc3NOYW1lPVwiYnggYngtY2hldnJvbi1yaWdodFwiPjwvaT4gPGEgY2xhc3NOYW1lPSdzY3JvbGx0bycgaHJlZj1cIi4vYWJvdXQtdXNcIj5BYm91dCB1czwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48aSBjbGFzc05hbWU9XCJieCBieC1jaGV2cm9uLXJpZ2h0XCI+PC9pPiA8YSBjbGFzc05hbWU9J3Njcm9sbHRvJyBocmVmPVwiLi9zZXJ2aWNlc1wiPlNlcnZpY2VzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImJ4IGJ4LWNoZXZyb24tcmlnaHRcIj48L2k+IDxhIGNsYXNzTmFtZT0nc2Nyb2xsdG8nIGhyZWY9XCIuL2NvbnRhY3QtdXNcIj5Db250YWN0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTYgZm9vdGVyLWxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoND5PdXIgU2VydmljZXM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbiA9ICgnL3NlcnZpY2VzJyl9PjxpIGNsYXNzTmFtZT1cImJ4IGJ4LWNoZXZyb24tcmlnaHRcIj48L2k+IEdlbmVyYWwgU3VwcGxpZXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24gPSAoJy9zZXJ2aWNlcycpfT48aSBjbGFzc05hbWU9XCJieCBieC1jaGV2cm9uLXJpZ2h0XCI+PC9pPiBUcmFuc3BvcnRhdGlvbiBTZXJ2aWNlPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uID0gKCcvc2VydmljZXMnKX0+PGkgY2xhc3NOYW1lPVwiYnggYngtY2hldnJvbi1yaWdodFwiPjwvaT4gQ2l2aWwgQ29uc3RydWN0aW9uPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uID0gKCcvc2VydmljZXMnKX0+PGkgY2xhc3NOYW1lPVwiYnggYngtY2hldnJvbi1yaWdodFwiPjwvaT4gU2FmZXR5L0VudmlybyBNYXRlcmlhbCBTdXBwbGllczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbiA9ICgnL3NlcnZpY2VzJyl9PjxpIGNsYXNzTmFtZT1cImJ4IGJ4LWNoZXZyb24tcmlnaHRcIj48L2k+IFRvb2xzIFN1cHBsaWVzPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtNiBmb290ZXItbmV3c2xldHRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDQ+T3VyIE5ld3NsZXR0ZXI8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8cD5JbnB1dCB5b3VyIGVtYWlsIHRvIGdldCBvdXIgdXBkYXRlcy48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgLz48aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3Vic2NyaWJlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlyaWdodFwiPlxyXG4gICAgICAgICAgICAgICZjb3B5OyBDb3B5cmlnaHQgPHN0cm9uZz48c3Bhbj5SdW1haCBUZWtub2xvZ2k8L3NwYW4+PC9zdHJvbmc+LiBBbGwgUmlnaHRzIFJlc2VydmVkIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWRpdHNcIj5cclxuICAgICAgICAgICAgICBEZXNpZ25lZCBieSA8YSBocmVmPVwiaHR0cHM6Ly9ib290c3RyYXBtYWRlLmNvbS9cIj5Cb290c3RyYXBNYWRlPC9hPjxici8+XHJcbiAgICAgICAgICAgICAgU2NyaXB0IHVzZWQgYnkgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9cIj5OZXh0SlM8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICA8Lz4pXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICAgIDxoZWFkZXIgaWQ9XCJoZWFkZXJcIiBjbGFzc05hbWU9XCJmaXhlZC10b3AgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJsb2dvXCI+PGEgaHJlZj1cIi4vXCI+SEIgQUJBREk8L2E+PC9oMT5cclxuICAgICAgICAgIHsvKiA8YSBocmVmPVwiLi9cIiBjbGFzc05hbWU9XCJsb2dvXCI+PGltZyBzcmM9XCJhc3NldHMvaW1nL2hiYS5wbmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPjwvYT4gKi99XHJcblxyXG4gICAgICAgICAgPG5hdiBpZD1cIm5hdmJhclwiIGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT17XCJuYXYtbGluayBzY3JvbGx0byBcIiArICgocm91dGVyPy5hc1BhdGg/LnNwbGl0KFwiL1wiKVsxXSA9PT0gJycgPyAnYWN0aXZlJyA6ICcnKSl9IGhyZWY9XCIuL1wiPkhvbWU8L2E+PC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdkcm9wZG93bic+PGEgY2xhc3NOYW1lPXtcIm5hdi1saW5rIHNjcm9sbHRvIFwiICsgKCgoKHJvdXRlcj8uYXNQYXRoPy5zcGxpdChcIi9cIilbMV0gPT09ICdhYm91dC11cycpIHx8IChyb3V0ZXI/LmFzUGF0aD8uc3BsaXQoXCIvXCIpWzFdID09PSAnYW50aS1icmliZXJ5JykpID8gJ2FjdGl2ZScgOiAnJykpfSBvbkNsaWNrPXsoKSA9PiBmYWxzZX0gc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319PjxzcGFuPkFib3V0PC9zcGFuPiA8aSBjbGFzc05hbWU9XCJiaSBiaS1jaGV2cm9uLWRvd25cIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPXtcIm5hdi1saW5rIHNjcm9sbHRvIFwiICsgKChyb3V0ZXI/LmFzUGF0aD8uc3BsaXQoXCIvXCIpWzFdID09PSAnYWJvdXQtdXMnID8gJ2FjdGl2ZScgOiAnJykpfSBocmVmPVwiLi9hYm91dC11c1wiPkFib3V0IFVzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9e1wibmF2LWxpbmsgc2Nyb2xsdG8gXCIgKyAoKHJvdXRlcj8uYXNQYXRoPy5zcGxpdChcIi9cIilbMV0gPT09ICdhbnRpLWJyaWJlcnknID8gJ2FjdGl2ZScgOiAnJykpfSBocmVmPVwiLi9hbnRpLWJyaWJlcnlcIj5BbnRpIEJyaWJlcnkgUG9saWNpZXM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICB7LyogPGxpPjxhIGNsYXNzTmFtZT17XCJuYXYtbGluayBzY3JvbGx0byBcIiArICgocm91dGVyPy5hc1BhdGg/LnNwbGl0KFwiL1wiKVsxXSA9PT0gJ2Fib3V0LXVzJyA/ICdhY3RpdmUnIDogJycpKX0gaHJlZj1cIi4vYWJvdXQtdXNcIj5BYm91dDwvYT48L2xpPiAqL31cclxuICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPXtcIm5hdi1saW5rIHNjcm9sbHRvIFwiICsgKChyb3V0ZXI/LmFzUGF0aD8uc3BsaXQoXCIvXCIpWzFdID09PSAnc2VydmljZXMnID8gJ2FjdGl2ZScgOiAnJykpfSBocmVmPVwiLi9zZXJ2aWNlc1wiPlNlcnZpY2VzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT17XCJuYXYtbGluayBzY3JvbGx0byBcIiArICgocm91dGVyPy5hc1BhdGg/LnNwbGl0KFwiL1wiKVsxXSA9PT0gJ2NvbnRhY3QtdXMnID8gJ2FjdGl2ZScgOiAnJykpfSBocmVmPVwiLi9jb250YWN0LXVzXCI+Q29udGFjdDwvYT48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJiaSBiaS1saXN0IG1vYmlsZS1uYXYtdG9nZ2xlXCI+PC9pPlxyXG4gICAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgIDwvPilcclxufSIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG4gICAgXHJcbi8qKlxyXG4gKiBFYXN5IHNlbGVjdG9yIGhlbHBlciBmdW5jdGlvblxyXG4gKi9cclxuY29uc3Qgc2VsZWN0ID0gKGVsLCBhbGwgPSBmYWxzZSkgPT4ge1xyXG4gICAgZWwgPSBlbC50cmltKClcclxuICAgIGlmIChhbGwpIHtcclxuICAgICAgcmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsKV1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRWFzeSBldmVudCBsaXN0ZW5lciBmdW5jdGlvblxyXG4gICAqL1xyXG4gIGNvbnN0IG9uID0gKHR5cGUsIGVsLCBsaXN0ZW5lciwgYWxsID0gZmFsc2UpID0+IHtcclxuICAgIGxldCBzZWxlY3RFbCA9IHNlbGVjdChlbCwgYWxsKVxyXG4gICAgaWYgKHNlbGVjdEVsKSB7XHJcbiAgICAgIGlmIChhbGwpIHtcclxuICAgICAgICBzZWxlY3RFbC5mb3JFYWNoKGUgPT4gZS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZWxlY3RFbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFYXN5IG9uIHNjcm9sbCBldmVudCBsaXN0ZW5lciBcclxuICAgKi9cclxuICBjb25zdCBvbnNjcm9sbCA9IChlbCwgbGlzdGVuZXIpID0+IHtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGxpc3RlbmVyKVxyXG4gIH1cclxuXHJcbmV4cG9ydCBjb25zdCBpbXBvcnRKUyA9IGFzeW5jICgpID0+IHtcclxuICAgIFxyXG4gICAgLy8gICBjb25zdCBpbml0VGVybWluYWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBQdXJlQ291bnRlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgIGF3YWl0IGltcG9ydCgnLi4vcHVibGljL2Fzc2V0cy92ZW5kb3IvcHVyZWNvdW50ZXIvcHVyZWNvdW50ZXJfdmFuaWxsYS5qcycpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCBBT1MgPSBhd2FpdCBpbXBvcnQoJy4uL3B1YmxpYy9hc3NldHMvdmVuZG9yL2Fvcy9hb3MuanMnKVxyXG4gICAgICAgICAgYXdhaXQgaW1wb3J0KCcuLi9wdWJsaWMvYXNzZXRzL3ZlbmRvci9ib290c3RyYXAvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanMnKVxyXG4gICAgICAgICAgY29uc3QgR0xpZ2h0Ym94ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgYXdhaXQgaW1wb3J0KCcuLi9wdWJsaWMvYXNzZXRzL3ZlbmRvci9nbGlnaHRib3gvanMvZ2xpZ2h0Ym94Lm1pbi5qcycpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCBJc290b3BlID0gIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgaW1wb3J0KCcuLi9wdWJsaWMvYXNzZXRzL3ZlbmRvci9pc290b3BlLWxheW91dC9pc290b3BlLnBrZ2QubWluLmpzJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IFN3aXBlciA9ICBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IGltcG9ydCgnLi4vcHVibGljL2Fzc2V0cy92ZW5kb3Ivc3dpcGVyL3N3aXBlci1idW5kbGUubWluLmpzJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGF3YWl0IGltcG9ydCgnLi4vcHVibGljL2Fzc2V0cy92ZW5kb3IvcGhwLWVtYWlsLWZvcm0vdmFsaWRhdGUuanMnKVxyXG4gICAgICAgICAgYXdhaXQgaW1wb3J0KCcuLi9wdWJsaWMvYXNzZXRzL2pzL21haW4uanMnKVxyXG4gICAgXHJcbiAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgbGV0IHBvcnRmb2xpb0NvbnRhaW5lciA9IHNlbGVjdCgnLnBvcnRmb2xpby1jb250YWluZXInKTtcclxuICAgIFxyXG4gICAgICAgICAgaWYgKHBvcnRmb2xpb0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBsZXQgcG9ydGZvbGlvSXNvdG9wZSA9IElzb3RvcGUocG9ydGZvbGlvQ29udGFpbmVyLCB7XHJcbiAgICAgICAgICAgICAgaXRlbVNlbGVjdG9yOiAnLnBvcnRmb2xpby1pdGVtJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICBsZXQgcG9ydGZvbGlvRmlsdGVycyA9IHNlbGVjdCgnI3BvcnRmb2xpby1mbHRlcnMgbGknLCB0cnVlKTtcclxuICAgIFxyXG4gICAgICAgICAgICBvbignY2xpY2snLCAnI3BvcnRmb2xpby1mbHRlcnMgbGknLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIHBvcnRmb2xpb0ZpbHRlcnMuZm9yRWFjaChmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZmlsdGVyLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnZmlsdGVyLWFjdGl2ZScpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgcG9ydGZvbGlvSXNvdG9wZS5hcnJhbmdlKHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcjogdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsdGVyJylcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBwb3J0Zm9saW9Jc290b3BlLm9uKCdhcnJhbmdlQ29tcGxldGUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIEFPUy5yZWZyZXNoKClcclxuICAgICAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICB9LCB0cnVlKTtcclxuICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICogSGVybyBjYXJvdXNlbCBpbmRpY2F0b3JzXHJcbiAgICAgICAgICAgKi9cclxuICAgICAgICAgIGxldCBoZXJvQ2Fyb3VzZWxJbmRpY2F0b3JzID0gc2VsZWN0KFwiI2hlcm8tY2Fyb3VzZWwtaW5kaWNhdG9yc1wiKVxyXG4gICAgICAgICAgbGV0IGhlcm9DYXJvdXNlbEl0ZW1zID0gc2VsZWN0KCcjaGVyb0Nhcm91c2VsIC5jYXJvdXNlbC1pdGVtJywgdHJ1ZSlcclxuICAgIFxyXG4gICAgICAgICAgaGVyb0Nhcm91c2VsSXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgKGluZGV4ID09PSAwKSA/XHJcbiAgICAgICAgICAgIGhlcm9DYXJvdXNlbEluZGljYXRvcnMuaW5uZXJIVE1MICs9IFwiPGxpIGRhdGEtYnMtdGFyZ2V0PScjaGVyb0Nhcm91c2VsJyBkYXRhLWJzLXNsaWRlLXRvPSdcIiArIGluZGV4ICsgXCInIGNsYXNzPSdhY3RpdmUnPjwvbGk+XCI6XHJcbiAgICAgICAgICAgICAgaGVyb0Nhcm91c2VsSW5kaWNhdG9ycy5pbm5lckhUTUwgKz0gXCI8bGkgZGF0YS1icy10YXJnZXQ9JyNoZXJvQ2Fyb3VzZWwnIGRhdGEtYnMtc2xpZGUtdG89J1wiICsgaW5kZXggKyBcIic+PC9saT5cIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAvKipcclxuICAgICAgICAgICAqIEluaXRpYXRlIGdsaWdodGJveCBcclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgR0xpZ2h0Ym94KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICcuZ2xpZ2h0Ym94J1xyXG4gICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgIFN3aXBlcignLnRlc3RpbW9uaWFscy1zbGlkZXInLCB7XHJcbiAgICAgICAgICAgIHNwZWVkOiA2MDAsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgICAgZGVsYXk6IDUwMDAsXHJcbiAgICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgICB0eXBlOiAnYnVsbGV0cycsXHJcbiAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBTd2lwZXIoJy5wb3J0Zm9saW8tZGV0YWlscy1zbGlkZXInLCB7XHJcbiAgICAgICAgICAgIHNwZWVkOiA0MDAsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgICAgZGVsYXk6IDUwMDAsXHJcbiAgICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgICAgdHlwZTogJ2J1bGxldHMnLFxyXG4gICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBBT1MuaW5pdCh7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgICAgICBlYXNpbmc6IFwiZWFzZS1pbi1vdXRcIixcclxuICAgICAgICAgICAgb25jZTogdHJ1ZSxcclxuICAgICAgICAgICAgbWlycm9yOiBmYWxzZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgIFB1cmVDb3VudGVyKCk7XHJcbiAgICAgICAgICAvLyBBZGQgbG9naWMgd2l0aCBgdGVybWBcclxuICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBsZXQgcHJlbG9hZGVyID0gc2VsZWN0KCcjcHJlbG9hZGVyJyk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHByZWxvYWRlcj8ucmVtb3ZlKClcclxuICAgIC8vICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vc2hhcmVkL2xpYi9oZWFkJ1xuaW1wb3J0IHsgdG9CYXNlNjQgfSBmcm9tICcuLi9zaGFyZWQvbGliL3RvLWJhc2UtNjQnXG5pbXBvcnQge1xuICBJbWFnZUNvbmZpZyxcbiAgaW1hZ2VDb25maWdEZWZhdWx0LFxuICBMb2FkZXJWYWx1ZSxcbiAgVkFMSURfTE9BREVSUyxcbn0gZnJvbSAnLi4vc2VydmVyL2ltYWdlLWNvbmZpZydcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxuY29uc3QgbG9hZGVkSW1hZ2VVUkxzID0gbmV3IFNldDxzdHJpbmc+KClcblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gIDsoZ2xvYmFsIGFzIGFueSkuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZVxufVxuXG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFsnbGF6eScsICdlYWdlcicsIHVuZGVmaW5lZF0gYXMgY29uc3RcbnR5cGUgTG9hZGluZ1ZhbHVlID0gdHlwZW9mIFZBTElEX0xPQURJTkdfVkFMVUVTW251bWJlcl1cblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXIgPSAocmVzb2x2ZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyUHJvcHMgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHdpZHRoOiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxufVxuXG50eXBlIERlZmF1bHRJbWFnZUxvYWRlclByb3BzID0gSW1hZ2VMb2FkZXJQcm9wcyAmIHsgcm9vdDogc3RyaW5nIH1cblxuY29uc3QgbG9hZGVycyA9IG5ldyBNYXA8XG4gIExvYWRlclZhbHVlLFxuICAocHJvcHM6IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcbj4oW1xuICBbJ2RlZmF1bHQnLCBkZWZhdWx0TG9hZGVyXSxcbiAgWydpbWdpeCcsIGltZ2l4TG9hZGVyXSxcbiAgWydjbG91ZGluYXJ5JywgY2xvdWRpbmFyeUxvYWRlcl0sXG4gIFsnYWthbWFpJywgYWthbWFpTG9hZGVyXSxcbiAgWydjdXN0b20nLCBjdXN0b21Mb2FkZXJdLFxuXSlcblxuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgJ2ZpbGwnLFxuICAnZml4ZWQnLFxuICAnaW50cmluc2ljJyxcbiAgJ3Jlc3BvbnNpdmUnLFxuICB1bmRlZmluZWQsXG5dIGFzIGNvbnN0XG50eXBlIExheW91dFZhbHVlID0gdHlwZW9mIFZBTElEX0xBWU9VVF9WQUxVRVNbbnVtYmVyXVxuXG50eXBlIFBsYWNlaG9sZGVyVmFsdWUgPSAnYmx1cicgfCAnZW1wdHknXG5cbnR5cGUgT25Mb2FkaW5nQ29tcGxldGUgPSAocmVzdWx0OiB7XG4gIG5hdHVyYWxXaWR0aDogbnVtYmVyXG4gIG5hdHVyYWxIZWlnaHQ6IG51bWJlclxufSkgPT4gdm9pZFxuXG50eXBlIEltZ0VsZW1lbnRTdHlsZSA9IE5vbk51bGxhYmxlPEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ11bJ3N0eWxlJ10+XG5cbmludGVyZmFjZSBTdGF0aWNSZXF1aXJlIHtcbiAgZGVmYXVsdDogU3RhdGljSW1hZ2VEYXRhXG59XG5cbnR5cGUgU3RhdGljSW1wb3J0ID0gU3RhdGljUmVxdWlyZSB8IFN0YXRpY0ltYWdlRGF0YVxuXG5mdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoXG4gIHNyYzogU3RhdGljUmVxdWlyZSB8IFN0YXRpY0ltYWdlRGF0YVxuKTogc3JjIGlzIFN0YXRpY1JlcXVpcmUge1xuICByZXR1cm4gKHNyYyBhcyBTdGF0aWNSZXF1aXJlKS5kZWZhdWx0ICE9PSB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoXG4gIHNyYzogU3RhdGljUmVxdWlyZSB8IFN0YXRpY0ltYWdlRGF0YVxuKTogc3JjIGlzIFN0YXRpY0ltYWdlRGF0YSB7XG4gIHJldHVybiAoc3JjIGFzIFN0YXRpY0ltYWdlRGF0YSkuc3JjICE9PSB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjOiBzdHJpbmcgfCBTdGF0aWNJbXBvcnQpOiBzcmMgaXMgU3RhdGljSW1wb3J0IHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygc3JjID09PSAnb2JqZWN0JyAmJlxuICAgIChpc1N0YXRpY1JlcXVpcmUoc3JjIGFzIFN0YXRpY0ltcG9ydCkgfHxcbiAgICAgIGlzU3RhdGljSW1hZ2VEYXRhKHNyYyBhcyBTdGF0aWNJbXBvcnQpKVxuICApXG59XG5cbmV4cG9ydCB0eXBlIEltYWdlUHJvcHMgPSBPbWl0PFxuICBKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddLFxuICAnc3JjJyB8ICdzcmNTZXQnIHwgJ3JlZicgfCAnd2lkdGgnIHwgJ2hlaWdodCcgfCAnbG9hZGluZycgfCAnc3R5bGUnXG4+ICYge1xuICBzcmM6IHN0cmluZyB8IFN0YXRpY0ltcG9ydFxuICB3aWR0aD86IG51bWJlciB8IHN0cmluZ1xuICBoZWlnaHQ/OiBudW1iZXIgfCBzdHJpbmdcbiAgbGF5b3V0PzogTGF5b3V0VmFsdWVcbiAgbG9hZGVyPzogSW1hZ2VMb2FkZXJcbiAgcXVhbGl0eT86IG51bWJlciB8IHN0cmluZ1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9hZGluZz86IExvYWRpbmdWYWx1ZVxuICBsYXp5Qm91bmRhcnk/OiBzdHJpbmdcbiAgcGxhY2Vob2xkZXI/OiBQbGFjZWhvbGRlclZhbHVlXG4gIGJsdXJEYXRhVVJMPzogc3RyaW5nXG4gIHVub3B0aW1pemVkPzogYm9vbGVhblxuICBvYmplY3RGaXQ/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdEZpdCddXG4gIG9iamVjdFBvc2l0aW9uPzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RQb3NpdGlvbiddXG4gIG9uTG9hZGluZ0NvbXBsZXRlPzogT25Mb2FkaW5nQ29tcGxldGVcbn1cblxuY29uc3Qge1xuICBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMsXG4gIGxvYWRlcjogY29uZmlnTG9hZGVyLFxuICBwYXRoOiBjb25maWdQYXRoLFxuICBkb21haW5zOiBjb25maWdEb21haW5zLFxufSA9IChwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyBhcyBhbnkgYXMgSW1hZ2VDb25maWcpIHx8IGltYWdlQ29uZmlnRGVmYXVsdFxuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFsuLi5jb25maWdEZXZpY2VTaXplcywgLi4uY29uZmlnSW1hZ2VTaXplc11cbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuYWxsU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5cbmZ1bmN0aW9uIGdldFdpZHRocyhcbiAgd2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZCxcbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZSxcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxuKTogeyB3aWR0aHM6IG51bWJlcltdOyBraW5kOiAndycgfCAneCcgfSB7XG4gIGlmIChzaXplcyAmJiAobGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpKSB7XG4gICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICBjb25zdCB2aWV3cG9ydFdpZHRoUmUgPSAvKF58XFxzKSgxP1xcZD9cXGQpdncvZ1xuICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFtdXG4gICAgZm9yIChsZXQgbWF0Y2g7IChtYXRjaCA9IHZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKSk7IG1hdGNoKSB7XG4gICAgICBwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpXG4gICAgfVxuICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDFcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKFxuICAgICAgICAgIChzKSA9PiBzID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICApLFxuICAgICAgICBraW5kOiAndycsXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHdpZHRoczogYWxsU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHxcbiAgICBsYXlvdXQgPT09ICdmaWxsJyB8fFxuICAgIGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnXG4gICkge1xuICAgIHJldHVybiB7IHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cblxuICBjb25zdCB3aWR0aHMgPSBbXG4gICAgLi4ubmV3IFNldChcbiAgICAgIC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgIFt3aWR0aCwgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqL10ubWFwKFxuICAgICAgICAodykgPT4gYWxsU2l6ZXMuZmluZCgocCkgPT4gcCA+PSB3KSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgKVxuICAgICksXG4gIF1cbiAgcmV0dXJuIHsgd2lkdGhzLCBraW5kOiAneCcgfVxufVxuXG50eXBlIEdlbkltZ0F0dHJzRGF0YSA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgdW5vcHRpbWl6ZWQ6IGJvb2xlYW5cbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZVxuICBsb2FkZXI6IEltYWdlTG9hZGVyXG4gIHdpZHRoPzogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbiAgc2l6ZXM/OiBzdHJpbmdcbn1cblxudHlwZSBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgc3JjU2V0OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgc3JjLFxuICB1bm9wdGltaXplZCxcbiAgbGF5b3V0LFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbiAgc2l6ZXMsXG4gIGxvYWRlcixcbn06IEdlbkltZ0F0dHJzRGF0YSk6IEdlbkltZ0F0dHJzUmVzdWx0IHtcbiAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgcmV0dXJuIHsgc3JjLCBzcmNTZXQ6IHVuZGVmaW5lZCwgc2l6ZXM6IHVuZGVmaW5lZCB9XG4gIH1cblxuICBjb25zdCB7IHdpZHRocywga2luZCB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKVxuICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDFcblxuICByZXR1cm4ge1xuICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgIHNyY1NldDogd2lkdGhzXG4gICAgICAubWFwKFxuICAgICAgICAodywgaSkgPT5cbiAgICAgICAgICBgJHtsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3IH0pfSAke1xuICAgICAgICAgICAga2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxXG4gICAgICAgICAgfSR7a2luZH1gXG4gICAgICApXG4gICAgICAuam9pbignLCAnKSxcblxuICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgIHNyYzogbG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogd2lkdGhzW2xhc3RdIH0pLFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEludCh4OiB1bmtub3duKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB4XG4gIH1cbiAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZUludCh4LCAxMClcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykge1xuICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKVxuICBpZiAobG9hZCkge1xuICAgIHJldHVybiBsb2FkKHsgcm9vdDogY29uZmlnUGF0aCwgLi4ubG9hZGVyUHJvcHMgfSlcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke1ZBTElEX0xPQURFUlMuam9pbihcbiAgICAgICcsICdcbiAgICApfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWBcbiAgKVxufVxuXG4vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gaGFuZGxlTG9hZGluZyhcbiAgaW1nOiBIVE1MSW1hZ2VFbGVtZW50IHwgbnVsbCxcbiAgc3JjOiBzdHJpbmcsXG4gIGxheW91dDogTGF5b3V0VmFsdWUsXG4gIHBsYWNlaG9sZGVyOiBQbGFjZWhvbGRlclZhbHVlLFxuICBvbkxvYWRpbmdDb21wbGV0ZT86IE9uTG9hZGluZ0NvbXBsZXRlXG4pIHtcbiAgaWYgKCFpbWcpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBoYW5kbGVMb2FkID0gKCkgPT4ge1xuICAgIGlmICghaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICBjb25zdCBwID0gJ2RlY29kZScgaW4gaW1nID8gaW1nLmRlY29kZSgpIDogUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIHAuY2F0Y2goKCkgPT4ge30pLnRoZW4oKCkgPT4ge1xuICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgIGltZy5zdHlsZS5maWx0ZXIgPSAnbm9uZSdcbiAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnbm9uZSdcbiAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnXG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVkSW1hZ2VVUkxzLmFkZChzcmMpXG4gICAgICAgIGlmIChvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgICAgICAgIGNvbnN0IHsgbmF0dXJhbFdpZHRoLCBuYXR1cmFsSGVpZ2h0IH0gPSBpbWdcbiAgICAgICAgICAvLyBQYXNzIGJhY2sgcmVhZC1vbmx5IHByaW1pdGl2ZSB2YWx1ZXMgYnV0IG5vdCB0aGVcbiAgICAgICAgICAvLyB1bmRlcmx5aW5nIERPTSBlbGVtZW50IGJlY2F1c2UgaXQgY291bGQgYmUgbWlzdXNlZC5cbiAgICAgICAgICBvbkxvYWRpbmdDb21wbGV0ZSh7IG5hdHVyYWxXaWR0aCwgbmF0dXJhbEhlaWdodCB9KVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgaWYgKGltZy5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBnZXRDb21wdXRlZFN0eWxlKGltZy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpXG4gICAgICAgICAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScgJiYgcGFyZW50LmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgYXMgYSBjaGlsZCBvZiBhIGZsZXggY29udGFpbmVyLiBDb25zaWRlciB3cmFwcGluZyB0aGUgaW1hZ2Ugd2l0aCBhIGRpdiB0byBjb25maWd1cmUgdGhlIHdpZHRoLmBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiBwYXJlbnQucG9zaXRpb24gIT09ICdyZWxhdGl2ZScpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IHdpdGggYSBwYXJlbnQgdXNpbmcgcG9zaXRpb246XCIke3BhcmVudC5wb3NpdGlvbn1cIi4gQ29uc2lkZXIgY2hhbmdpbmcgdGhlIHBhcmVudCBzdHlsZSB0byBwb3NpdGlvbjpcInJlbGF0aXZlXCIgd2l0aCBhIHdpZHRoIGFuZCBoZWlnaHQuYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBpZiAoaW1nLmNvbXBsZXRlKSB7XG4gICAgLy8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4gICAgLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuICAgIC8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG4gICAgaGFuZGxlTG9hZCgpXG4gIH0gZWxzZSB7XG4gICAgaW1nLm9ubG9hZCA9IGhhbmRsZUxvYWRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7XG4gIHNyYyxcbiAgc2l6ZXMsXG4gIHVub3B0aW1pemVkID0gZmFsc2UsXG4gIHByaW9yaXR5ID0gZmFsc2UsXG4gIGxvYWRpbmcsXG4gIGxhenlCb3VuZGFyeSA9ICcyMDBweCcsXG4gIGNsYXNzTmFtZSxcbiAgcXVhbGl0eSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgb2JqZWN0Rml0LFxuICBvYmplY3RQb3NpdGlvbixcbiAgb25Mb2FkaW5nQ29tcGxldGUsXG4gIGxvYWRlciA9IGRlZmF1bHRJbWFnZUxvYWRlcixcbiAgcGxhY2Vob2xkZXIgPSAnZW1wdHknLFxuICBibHVyRGF0YVVSTCxcbiAgLi4uYWxsXG59OiBJbWFnZVByb3BzKSB7XG4gIGxldCByZXN0OiBQYXJ0aWFsPEltYWdlUHJvcHM+ID0gYWxsXG4gIGxldCBsYXlvdXQ6IE5vbk51bGxhYmxlPExheW91dFZhbHVlPiA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYydcbiAgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXRcblxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsnbGF5b3V0J11cbiAgfVxuXG4gIGxldCBzdGF0aWNTcmMgPSAnJ1xuICBpZiAoaXNTdGF0aWNJbXBvcnQoc3JjKSkge1xuICAgIGNvbnN0IHN0YXRpY0ltYWdlRGF0YSA9IGlzU3RhdGljUmVxdWlyZShzcmMpID8gc3JjLmRlZmF1bHQgOiBzcmNcblxuICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLnNyYykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgc3RhdGljSW1hZ2VEYXRhXG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cbiAgICBibHVyRGF0YVVSTCA9IGJsdXJEYXRhVVJMIHx8IHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTFxuICAgIHN0YXRpY1NyYyA9IHN0YXRpY0ltYWdlRGF0YS5zcmNcbiAgICBpZiAoIWxheW91dCB8fCBsYXlvdXQgIT09ICdmaWxsJykge1xuICAgICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IHN0YXRpY0ltYWdlRGF0YS5oZWlnaHRcbiAgICAgIHdpZHRoID0gd2lkdGggfHwgc3RhdGljSW1hZ2VEYXRhLndpZHRoXG4gICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHQgfHwgIXN0YXRpY0ltYWdlRGF0YS53aWR0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgIHN0YXRpY0ltYWdlRGF0YVxuICAgICAgICAgICl9YFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNyYyA9IHR5cGVvZiBzcmMgPT09ICdzdHJpbmcnID8gc3JjIDogc3RhdGljU3JjXG5cbiAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpXG4gIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpXG4gIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSlcblxuICBsZXQgaXNMYXp5ID1cbiAgICAhcHJpb3JpdHkgJiYgKGxvYWRpbmcgPT09ICdsYXp5JyB8fCB0eXBlb2YgbG9hZGluZyA9PT0gJ3VuZGVmaW5lZCcpXG4gIGlmIChzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSB8fCBzcmMuc3RhcnRzV2l0aCgnYmxvYjonKSkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgdW5vcHRpbWl6ZWQgPSB0cnVlXG4gICAgaXNMYXp5ID0gZmFsc2VcbiAgfVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9hZGVkSW1hZ2VVUkxzLmhhcyhzcmMpKSB7XG4gICAgaXNMYXp5ID0gZmFsc2VcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChcbiAgICAgICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKHdpZHRoSW50KSkgfHxcbiAgICAgICh0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTihoZWlnaHRJbnQpKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcIndpZHRoXCIgb3IgXCJoZWlnaHRcIiBwcm9wZXJ0eS4gVGhlc2Ugc2hvdWxkIGJlIG51bWVyaWMgdmFsdWVzLmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnICYmICh3aWR0aCB8fCBoZWlnaHQpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGFuZCBcImxheW91dD0nZmlsbCdcIiBoYXMgdW51c2VkIHByb3BlcnRpZXMgYXNzaWduZWQuIFBsZWFzZSByZW1vdmUgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiLmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICBpZiAobGF5b3V0ICE9PSAnZmlsbCcgJiYgKHdpZHRoSW50IHx8IDApICogKGhlaWdodEludCB8fCAwKSA8IDE2MDApIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGlmICghYmx1ckRhdGFVUkwpIHtcbiAgICAgICAgY29uc3QgVkFMSURfQkxVUl9FWFQgPSBbJ2pwZWcnLCAncG5nJywgJ3dlYnAnXSAvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbihcbiAgICAgICAgICAgICAgJywnXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCdyZWYnIGluIHJlc3QpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJyZWZcIiBwcm9wZXJ0eS4gQ29uc2lkZXIgdXNpbmcgdGhlIFwib25Mb2FkaW5nQ29tcGxldGVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCdzdHlsZScgaW4gcmVzdCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInN0eWxlXCIgcHJvcGVydHkuIFBsZWFzZSB1c2UgdGhlIFwiY2xhc3NOYW1lXCIgcHJvcGVydHkgaW5zdGVhZC5gXG4gICAgICApXG4gICAgfVxuICAgIGNvbnN0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIDEwMFxuICAgIGlmIChcbiAgICAgICF1bm9wdGltaXplZCAmJlxuICAgICAgIWxvYWRlcih7IHNyYywgd2lkdGg6IHJhbmQsIHF1YWxpdHk6IDc1IH0pLmluY2x1ZGVzKHJhbmQudG9TdHJpbmcoKSlcbiAgICApIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGEgXCJsb2FkZXJcIiBwcm9wZXJ0eSB0aGF0IGRvZXMgbm90IGltcGxlbWVudCB3aWR0aC4gUGxlYXNlIGltcGxlbWVudCBpdCBvciB1c2UgdGhlIFwidW5vcHRpbWl6ZWRcIiBwcm9wZXJ0eSBpbnN0ZWFkLmAgK1xuICAgICAgICAgIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXItd2lkdGhgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSB1c2VJbnRlcnNlY3Rpb248SFRNTEltYWdlRWxlbWVudD4oe1xuICAgIHJvb3RNYXJnaW46IGxhenlCb3VuZGFyeSxcbiAgICBkaXNhYmxlZDogIWlzTGF6eSxcbiAgfSlcbiAgY29uc3QgaXNWaXNpYmxlID0gIWlzTGF6eSB8fCBpc0ludGVyc2VjdGVkXG5cbiAgbGV0IHdyYXBwZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdmc6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBsZXQgaW1nU3R5bGU6IEltZ0VsZW1lbnRTdHlsZSB8IHVuZGVmaW5lZCA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBib3R0b206IDAsXG4gICAgcmlnaHQ6IDAsXG5cbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIG1heEhlaWdodDogJzEwMCUnLFxuXG4gICAgb2JqZWN0Rml0LFxuICAgIG9iamVjdFBvc2l0aW9uLFxuICB9XG4gIGNvbnN0IGJsdXJTdHlsZSA9XG4gICAgcGxhY2Vob2xkZXIgPT09ICdibHVyJ1xuICAgICAgPyB7XG4gICAgICAgICAgZmlsdGVyOiAnYmx1cigyMHB4KScsXG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6IG9iamVjdEZpdCB8fCAnY292ZXInLFxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYCxcbiAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IG9iamVjdFBvc2l0aW9uIHx8ICcwJSAwJScsXG4gICAgICAgIH1cbiAgICAgIDoge31cbiAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcblxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgcmlnaHQ6IDAsXG5cbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnRcbiAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWBcbiAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7IGRpc3BsYXk6ICdibG9jaycsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBwYWRkaW5nVG9wIH1cbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIH1cbiAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmBcbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBoZWlnaHQ6IGhlaWdodEludCxcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGltZ0F0dHJpYnV0ZXM6IEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICAgIHNyYzogJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgc2l6ZXM6IHVuZGVmaW5lZCxcbiAgfVxuXG4gIGlmIChpc1Zpc2libGUpIHtcbiAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICBzcmMsXG4gICAgICB1bm9wdGltaXplZCxcbiAgICAgIGxheW91dCxcbiAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICBzaXplcyxcbiAgICAgIGxvYWRlcixcbiAgICB9KVxuICB9XG5cbiAgbGV0IHNyY1N0cmluZzogc3RyaW5nID0gc3JjXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt3cmFwcGVyU3R5bGV9PlxuICAgICAge3NpemVyU3R5bGUgPyAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3NpemVyU3R5bGV9PlxuICAgICAgICAgIHtzaXplclN2ZyA/IChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7dG9CYXNlNjQoc2l6ZXJTdmcpfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAgPGltZ1xuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgey4uLmltZ0F0dHJpYnV0ZXN9XG4gICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICBkYXRhLW5pbWc9e2xheW91dH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHJlZj17KGltZykgPT4ge1xuICAgICAgICAgIHNldFJlZihpbWcpXG4gICAgICAgICAgaGFuZGxlTG9hZGluZyhpbWcsIHNyY1N0cmluZywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpXG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7IC4uLmltZ1N0eWxlLCAuLi5ibHVyU3R5bGUgfX1cbiAgICAgIC8+XG4gICAgICA8bm9zY3JpcHQ+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICB7Li4uZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgIGxvYWRlcixcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgICBkYXRhLW5pbWc9e2xheW91dH1cbiAgICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgbG9hZGluZz17bG9hZGluZyB8fCAnbGF6eSd9XG4gICAgICAgIC8+XG4gICAgICA8L25vc2NyaXB0PlxuXG4gICAgICB7cHJpb3JpdHkgPyAoXG4gICAgICAgIC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAgICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4gICAgICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBrZXk9e1xuICAgICAgICAgICAgICAnX19uaW1nLScgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyYyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zaXplc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICBhcz1cImltYWdlXCJcbiAgICAgICAgICAgIGhyZWY9e2ltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmN9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgICAgIGltYWdlc3Jjc2V0PXtpbWdBdHRyaWJ1dGVzLnNyY1NldH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgICAgICBpbWFnZXNpemVzPXtpbWdBdHRyaWJ1dGVzLnNpemVzfVxuICAgICAgICAgID48L2xpbms+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyY1xufVxuXG5mdW5jdGlvbiBpbWdpeExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/YXV0bz1mb3JtYXQmZml0PW1heCZ3PTMwMFxuICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX1gKVxuICBjb25zdCBwYXJhbXMgPSB1cmwuc2VhcmNoUGFyYW1zXG5cbiAgcGFyYW1zLnNldCgnYXV0bycsIHBhcmFtcy5nZXQoJ2F1dG8nKSB8fCAnZm9ybWF0JylcbiAgcGFyYW1zLnNldCgnZml0JywgcGFyYW1zLmdldCgnZml0JykgfHwgJ21heCcpXG4gIHBhcmFtcy5zZXQoJ3cnLCBwYXJhbXMuZ2V0KCd3JykgfHwgd2lkdGgudG9TdHJpbmcoKSlcblxuICBpZiAocXVhbGl0eSkge1xuICAgIHBhcmFtcy5zZXQoJ3EnLCBxdWFsaXR5LnRvU3RyaW5nKCkpXG4gIH1cblxuICByZXR1cm4gdXJsLmhyZWZcbn1cblxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCwgc3JjLCB3aWR0aCB9OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gXG59XG5cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuICBjb25zdCBwYXJhbXMgPSBbJ2ZfYXV0bycsICdjX2xpbWl0JywgJ3dfJyArIHdpZHRoLCAncV8nICsgKHF1YWxpdHkgfHwgJ2F1dG8nKV1cbiAgbGV0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLydcbiAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gXG59XG5cbmZ1bmN0aW9uIGN1c3RvbUxvYWRlcih7IHNyYyB9OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBtaXNzaW5nIFwibG9hZGVyXCIgcHJvcC5gICtcbiAgICAgIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXJgXG4gIClcbn1cblxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdXG5cbiAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKVxuICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKVxuXG4gICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oXG4gICAgICAgICAgJywgJ1xuICAgICAgICApfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHNyYywgd2lkdGgsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgbGV0IHBhcnNlZFNyYzogVVJMXG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJlxuICAgICAgICAhY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICtcbiAgICAgICAgICAgIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbn1cbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJlxuICAgIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykpIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJlxuICAgIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSkgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrLFxufSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXHJcbmltcG9ydCB7IGltcG9ydEpTIH0gZnJvbSAnLi4vaGVscGVycy9pbXBvcnRKUydcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lICgpIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuXHJcbiAgICAgIDxzZWN0aW9uIGlkPVwiaGVyb1wiIHN1cHByZXNzSHlkcmF0aW9uV2FybmluZz17dHJ1ZX0+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiaGVyb0Nhcm91c2VsXCIgZGF0YS1icy1pbnRlcnZhbD1cIjUwMDBcIiBjbGFzc05hbWU9XCJjYXJvdXNlbCBzbGlkZSBjYXJvdXNlbC1mYWRlXCIgZGF0YS1icy1yaWRlPVwiY2Fyb3VzZWxcIj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW5uZXJcIiByb2xlPVwibGlzdGJveFwiPlxyXG5cclxuICAgICAgICAgICAgICB7LyogPCEtLSBTbGlkZSAxIC0tPiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWl0ZW0gYWN0aXZlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoYXNzZXRzL2ltZy9zbGlkZS9zbGlkZS0xLmpwZyknfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRlbnQgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluVXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+UFQuIEhpZGF5YXQgQmVyc2F1ZGFyYSBBYmFkaTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+UFQgSGlkYXlhdCBCZXJzYXVkYXJhIEFiYWRpIChQZXJzZXJvYW4pIG1lcnVwYWthbiBQZXJzZXJvYW4gVGVyYmF0YXMgKFBUKSB5YW5nIGJlcnVwYXlhIG1ld3VqdWRrYW4gdmlzaW55YSBtZW5qYWRpIFBlcnVzYWhhYW4gTWl0cmEgS2VyamEgZGFuIEphc2EgdGVya2VtdWthIGJlcnNrYWxhIE5hc2lvbmFsIHlhbmcgbWFtcHUgbWVtYmVyaWthbiBuaWxhaSB0YW1iYWgga2VwYWRhIHN0YWtlaG9sZGVycy48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIHsvKiA8IS0tIFNsaWRlIDIgLS0+ICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaXRlbVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiAndXJsKGFzc2V0cy9pbWcvc2xpZGUvc2xpZGUtMi5qcGcpJ319PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250ZW50IGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJblVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPlZpc2kgUFQuIEhpZGF5YXQgQmVyc2F1ZGFyYSBBYmFkaTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+SmFzYSB5YW5nIGJlcmt1YWxpdGFzIGRlbmdhbiBtZW5nZWRlcGFua2FuIHBhZGEga2VwdWFzYW4ga29uc3VtZW48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+TmlsYWkgRGFzYXIgOiBKdWp1ciwgQmVyb3JpZW50YXNpIGt1YWxpdGFzLCBJbnRlZ3JpdGFzLCBUYW5nZ3VuZyBqYXdhYiwgUGVkdWxpICwgVmlzaW9uZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIHsvKiA8IS0tIFNsaWRlIDMgLS0+ICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaXRlbVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiAndXJsKGFzc2V0cy9pbWcvc2xpZGUvc2xpZGUtMy5qcGcpJ319PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250ZW50IGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJblVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPk1pc2kgUFQuIEhpZGF5YXQgQmVyc2F1ZGFyYSBBYmFkaTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+TWVueWVkaWFrYW4gSmFzYSB5YW5nIGJlcmt1YWxpdGFzIGRlbmdhbiBtZW5nZWRlcGFua2FuIHBhZGEga2VwdWFzYW4ga29uc3VtZW48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+TWV3dWp1ZGthbiBNYW5hamVtZW4gUGVydXNhaGFhbiB5YW5nIG1lbWlsaWtpIGRhbiBtZW5qdW5qdW5nIHRpbmdnaSBFdGlrYSBCaXNuaXMgZGFuIE5pbGFpIG5pbGFpIERhc2FyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPk1lbWFuZmFhdGthbiBwZXJrZW1iYW5nYW4gVGVrbm9sb2dpIHlhbmcgcmFtYWggbGluZ2t1bmdhbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5NZW1wdW55YWkga2V1bmdndWxhbiBiZXJzYWluZyBkYWxhbSBCaXNuaXMgSW50aSBkYW4gQmlzbmlzIHRlcmthaXQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+TWVuc2luZXJnaWthbiBrb21wb25lbiBrb21wb25lbiBQZXJ1c2FoYWFuIHVudHVrIG1lbmdoYXNpbGthbiBuaWxhaSB0YW1iYWg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+TWVtaWxpa2kga29taXRtZW4gdW50dWsgbWVuaW5na2F0a2FuIHBlcnR1bWJ1aGFuIHVzYWhhIHlhbmcgYmVya2VzaW5hbWJ1bmdhbixcclxuICAgICAgICAgICAgICAgICAgICAgIGtlc2VqYWh0ZXJhYW4gc3Rha2Vob2xkZXJzLCBkYW4gc2VuYW50aWFzYSBtZW5pbmdrYXRrYW4gdGFuZ2d1bmcgamF3YWIgc29zaWFsPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLXByZXZcIiBocmVmPVwiI2hlcm9DYXJvdXNlbFwiIHJvbGU9XCJidXR0b25cIiBkYXRhLWJzLXNsaWRlPVwicHJldlwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uIGJpIGJpLWNoZXZyb24tbGVmdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XCIgaHJlZj1cIiNoZXJvQ2Fyb3VzZWxcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1icy1zbGlkZT1cIm5leHRcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiBiaSBiaS1jaGV2cm9uLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiIGlkPVwiaGVyby1jYXJvdXNlbC1pbmRpY2F0b3JzXCI+PC9vbD5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPG1haW4gaWQ9XCJtYWluXCI+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwiYWJvdXRcIiBjbGFzc05hbWU9XCJhYm91dFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtNSBjb2wtNiBkLW1kLWZsZXggYWxpZ24taXRlbXMtbWQtc3RyZXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJiaSBiaS1lbW9qaS1zbWlsZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHVyZWNvdW50ZXItc3RhcnQ9XCIwXCIgZGF0YS1wdXJlY291bnRlci1lbmQ9XCIxMjVcIiBkYXRhLXB1cmVjb3VudGVyLWR1cmF0aW9uPVwiMVwiIGNsYXNzTmFtZT1cInB1cmVjb3VudGVyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+SGFwcHkgQ2xpZW50czwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1tZC01IGNvbC02IGQtbWQtZmxleCBhbGlnbi1pdGVtcy1tZC1zdHJldGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLWpvdXJuYWwtcmljaHRleHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXB1cmVjb3VudGVyLXN0YXJ0PVwiMFwiIGRhdGEtcHVyZWNvdW50ZXItZW5kPVwiODVcIiBkYXRhLXB1cmVjb3VudGVyLWR1cmF0aW9uPVwiMVwiIGNsYXNzTmFtZT1cInB1cmVjb3VudGVyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+UHJvamVjdHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtNSBjb2wtNiBkLW1kLWZsZXggYWxpZ24taXRlbXMtbWQtc3RyZXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJiaSBiaS1jbG9ja1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHVyZWNvdW50ZXItc3RhcnQ9XCIwXCIgZGF0YS1wdXJlY291bnRlci1lbmQ9XCIzNVwiIGRhdGEtcHVyZWNvdW50ZXItZHVyYXRpb249XCIxXCIgY2xhc3NOYW1lPVwicHVyZWNvdW50ZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5ZZWFycyBvZiBleHBlcmllbmNlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTUgY29sLTYgZC1tZC1mbGV4IGFsaWduLWl0ZW1zLW1kLXN0cmV0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYmkgYmktYXdhcmRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXB1cmVjb3VudGVyLXN0YXJ0PVwiMFwiIGRhdGEtcHVyZWNvdW50ZXItZW5kPVwiNDhcIiBkYXRhLXB1cmVjb3VudGVyLWR1cmF0aW9uPVwiMVwiIGNsYXNzTmFtZT1cInB1cmVjb3VudGVyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+QXdhcmRzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IHZpZGVvLWJveCBhbGlnbi1zZWxmLWJhc2VsaW5lXCIgZGF0YS1hb3M9XCJ6b29tLWluXCIgZGF0YS1hb3MtZGVsYXk9XCIxMDBcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltZy9hYm91dC5qcGdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9akREYXBsYU96N1FcIiBjbGFzc05hbWU9XCJnbGlnaHRib3ggcGxheS1idG4gbWItNFwiPjwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBwdC0zIHB0LWxnLTAgY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPlBlcnVzYWhhYW4gTWl0cmEgS2VyamEgZGFuIEphc2E8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnN0LWl0YWxpY1wiPlxyXG4gICAgICAgICAgICAgICAgICBNZW5qYWxpbiBrZXJqYSBzYW1hIGF0YXUgcmVrYW4gYmlzbmlzIGRlbmdhbiBwZXJ1c2FoYWFuIGxhaW4gcGFkYSBiaWRhbmcgdXNhaGEgeWFuZyBzZWxhcmFzIHVudHVrIHBlbmdlbWJhbmdhbiBhdGF1IHBlcmx1YXNhbiBwcm9qZWN0LiBcclxuICAgICAgICAgICAgICAgICAgQnVrYW4gaGFueWEgc2VrZWRhciBtZW5qYWxpbiBpa2F0YW4gdGFwaSBqdWdhIG1hbXB1IG1lbWJlcmlrYW4gdGltYmFsIGJhbGlrIHNlY2FyYSBwb3NpdGlmIGJhZ2kgc2F0dSBzYW1hIGxhaW4uIFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PGkgY2xhc3NOYW1lPVwiYnggYngtY2hlY2stZG91YmxlXCI+PC9pPiBQZW5nZW1iYW5nYW4gQmlzbmlzPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImJ4IGJ4LWNoZWNrLWRvdWJsZVwiPjwvaT4gTWVtYmFuZ3VuIFBlcnR1bWJ1aGFuIEZpbmFuc2lhbCBCaXNuaXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PGkgY2xhc3NOYW1lPVwiYnggYngtY2hlY2stZG91YmxlXCI+PC9pPiBKYWxpbmFuIEh1YnVuZ2FuIFNvc2lhbCBEYWxhbSBCaXNuaXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PGkgY2xhc3NOYW1lPVwiYnggYngtY2hlY2stZG91YmxlXCI+PC9pPiBNZW1iZW50dWsgS2VzZXBha2F0YW4gWWFuZyBTYWxpbmcgTWVuZ3VudHVuZ2thbjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBLZW1pdHJhYW4gZGloYXJhcGthbiBtYW1wdSBtZW1iZXJpa2FuIGtlbXVkYWhhbiBkYW4ga2V1bnR1bmdhbiBiYWdpIHNlbXVhIHBpaGFrLiBcclxuICAgICAgICAgICAgICAgIE9sZWgga2FyZW5hIGl0dSwgc2VidWFoIGtlc2VwYWthdGFuIGFrYW4gZGliZW50dWsgdW50dWsgbWVuZW50dWthbiBwZW55ZWxlc2FpYW4gc3VhdHUgcHJvamVjdC5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJhYm91dC1ib3hlc1wiIGNsYXNzTmFtZT1cImFib3V0LWJveGVzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1tZC02IGQtZmxleCBhbGlnbi1pdGVtcy1zdHJldGNoXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCIxMDBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvYWJvdXQtYm94ZXMtMS5qcGdcIiBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBhbHQ9XCIuLi5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInJpLWJydXNoLTQtbGluZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj48YSBocmVmPVwiXCI+T3VyIE1pc3Npb248L2E+PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+TWVueWVkaWFrYW4gSmFzYSB5YW5nIGJlcmt1YWxpdGFzIGRlbmdhbiBtZW5nZWRlcGFua2FuIHBhZGEga2VwdWFzYW4ga29uc3VtZW48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5NZXd1anVka2FuIE1hbmFqZW1lbiBQZXJ1c2FoYWFuIHlhbmcgbWVtaWxpa2kgZGFuIG1lbmp1bmp1bmcgdGluZ2dpIEV0aWthIEJpc25pcyBkYW4gTmlsYWkgbmlsYWkgRGFzYXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5NZW1hbmZhYXRrYW4gcGVya2VtYmFuZ2FuIFRla25vbG9naSB5YW5nIHJhbWFoIGxpbmdrdW5nYW48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtNiBkLWZsZXggYWxpZ24taXRlbXMtc3RyZXRjaFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiMjAwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1nL2Fib3V0LWJveGVzLTIuanBnXCIgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgYWx0PVwiLi4uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJyaS1jYWxlbmRhci1jaGVjay1saW5lXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPjxhIGhyZWY9XCJcIj5PdXIgUGxhbjwvYT48L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5CZXJzYWluZyBkYWxhbSBCaXNuaXMgSW50aSBkYW4gQmlzbmlzIHRlcmthaXQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5NZW5pbmdrYXRrYW4gcGVydHVtYnVoYW4gdXNhaGEgeWFuZyBiZXJrZXNpbmFtYnVuZ2FuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXNlamFodGVyYWFuIHN0YWtlaG9sZGVycywgZGFuIHNlbmFudGlhc2EgbWVuaW5na2F0a2FuIHRhbmdndW5nIGphd2FiIHNvc2lhbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1tZC02IGQtZmxleCBhbGlnbi1pdGVtcy1zdHJldGNoXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCIzMDBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvYWJvdXQtYm94ZXMtMy5qcGdcIiBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBhbHQ9XCIuLi5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInJpLW1vdmllLTItbGluZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj48YSBocmVmPVwiXCI+T3VyIFZpc2lvbjwvYT48L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTWVuamFkaSBQZXJ1c2FoYWFuIE1pdHJhIEtlcmphIGRhbiBKYXNhIHRlcmtlbXVrYSBiZXJza2FsYSBOYXNpb25hbCB5YW5nIG1hbXB1IG1lbWJlcmlrYW4gbmlsYWkgdGFtYmFoIGtlcGFkYSBzdGFrZWhvbGRlcnNcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJzZXJ2aWNlc1wiIGNsYXNzTmFtZT1cInNlcnZpY2VzIHNlY3Rpb24tYmdcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICAgICAgICA8aDI+U2VydmljZXM8L2gyPlxyXG4gICAgICAgICAgICAgIDxwPkNoZWNrIG91ciBTZXJ2aWNlczwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiMjAwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWJveFwiIHN0eWxlPXt7bWluSGVpZ2h0OiAnMjEwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLWJveC1maWxsXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8aDQ+PGEgaHJlZj1cIi4vc2VydmljZXNcIj5HZW5lcmFsIFN1cHBsaWVyPC9hPjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDxwPkNvbnZleW9yIFN5c3RlbSBQYXJ0cywgVW5pdCBQYXJ0cywgSGVhdnkgRXF1aXBtZW50ICYgVmVoaWNsZXMsIFxyXG4gICAgICAgICAgICAgICAgICAgICBtYWludGVuYW5jZSwgTWVjaGFuaWNhbC9FbGVjdHJpY2FsIE1hdGVyaWEsIENvbnZleW9yIFN5c3RlbSwgXHJcbiAgICAgICAgICAgICAgICAgICAgIFVuZGVyIENhcnJpYWdlIChCL0RvemVyICYgRXhjYXZhdG9yIEV0Yy4pLCBFcXVpcG1lbnQgJlZlaGljbGVzIFBhcnRzIEV0Yy48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG10LTQgbXQtbWQtMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWJveFwiIHN0eWxlPXt7bWluSGVpZ2h0OiAnMjEwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLWJ1cy1mcm9udFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPGg0PjxhIGhyZWY9XCIuL3NlcnZpY2VzXCI+VHJhbnNwb3J0YXRpb24gU2VydmljZTwvYT48L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8cD5UcmFuc3BvcnRhdGlvbiBTZXJ2aWNlPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBtdC00IG10LW1kLTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ib3hcIiBzdHlsZT17e21pbkhlaWdodDogJzIxMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJiaSBiaS1oYW1tZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDxoND48YSBocmVmPVwiLi9zZXJ2aWNlc1wiPkNpdmlsIENvbnN0cnVjdGlvbjwvYT48L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8cD5PZmZpY2UgQnVpbGRpbmcsIEhvdXNlIEJ1aWxkaW5nLCBSZW5vdmF0aW9uLCBSb2FkICBtYWludGVuYW5jZSAgKEFzcGhhbHQgd29yayk8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG10LTQgbXQtbWQtMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWJveFwiIHN0eWxlPXt7bWluSGVpZ2h0OiAnMjEwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLWNvbmUtc3RyaXBlZFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPGg0PjxhIGhyZWY9XCIuL3NlcnZpY2VzXCI+U2FmZXR5L0VudmlybyBNYXRlcmlhbCA8L2E+PC9oND5cclxuICAgICAgICAgICAgICAgICAgPHA+QVBELCBDaGVtaWNhbHMgRXRjPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBtdC00IG10LW1kLTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ib3hcIiBzdHlsZT17e21pbkhlaWdodDogJzIxMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJiaSBiaS1jYXJkLWNoZWNrbGlzdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPGg0PjxhIGhyZWY9XCIuL3NlcnZpY2VzXCI+Q29uc3VtYWJsZXMgPC9hPjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlN0YXRpb25hcnkgUGFydHMsIEdsb3ZlcywgTW9wLCBldGMuPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJwb3J0Zm9saW9cIiBjbGFzc05hbWU9XCJwb3J0Zm9saW9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICAgICAgICA8aDI+UG9ydGZvbGlvPC9oMj5cclxuICAgICAgICAgICAgICA8cD5DaGVjayBvdXIgUG9ydGZvbGlvPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCIxMDBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGlkPVwicG9ydGZvbGlvLWZsdGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgZGF0YS1maWx0ZXI9XCIqXCIgY2xhc3NOYW1lPVwiZmlsdGVyLWFjdGl2ZVwiPkFsbDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBkYXRhLWZpbHRlcj1cIi5maWx0ZXItY29tcGFueVwiPkNvbXBhbnk8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgZGF0YS1maWx0ZXI9XCIuZmlsdGVyLXByb2R1Y3RcIj5Qcm9kdWN0PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGRhdGEtZmlsdGVyPVwiLmZpbHRlci1zZXJ2aWNlXCI+U2VydmljZTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHBvcnRmb2xpby1jb250YWluZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjIwMFwiPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1tZC02IHBvcnRmb2xpby1pdGVtIGZpbHRlci1jb21wYW55XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvYXBwL3RlYW0td29yay5wbmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8taW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aDQ+VGVhbSBXb3JrPC9oND5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImFzc2V0cy9pbWcvYXBwL3RlYW0td29yay5wbmdcIiBkYXRhLWdhbGxlcnk9XCJwb3J0Zm9saW9HYWxsZXJ5XCIgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWxpZ2h0Ym94IHByZXZpZXctbGlua1wiIHRpdGxlPVwiVGVhbSBXb3JrXCI+PGkgY2xhc3NOYW1lPVwiYnggYngtcGx1c1wiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIuL3NlcnZpY2VzXCIgY2xhc3NOYW1lPVwiZGV0YWlscy1saW5rXCIgdGl0bGU9XCJNb3JlIERldGFpbHNcIj48aSBjbGFzc05hbWU9XCJieCBieC1saW5rXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1tZC02IHBvcnRmb2xpby1pdGVtIGZpbHRlci1jb21wYW55XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvYXBwL29uLWdvYWwucG5nXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgPGg0Pk9uZSBHb2FsPC9oND5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImFzc2V0cy9pbWcvYXBwL29uLWdvYWwucG5nXCIgZGF0YS1nYWxsZXJ5PVwicG9ydGZvbGlvR2FsbGVyeVwiIGNsYXNzTmFtZT1cInBvcnRmb2xpby1saWdodGJveCBwcmV2aWV3LWxpbmtcIiB0aXRsZT1cIk9uZSBHb2FsXCI+PGkgY2xhc3NOYW1lPVwiYnggYngtcGx1c1wiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIuL3NlcnZpY2VzXCIgY2xhc3NOYW1lPVwiZGV0YWlscy1saW5rXCIgdGl0bGU9XCJNb3JlIERldGFpbHNcIj48aSBjbGFzc05hbWU9XCJieCBieC1saW5rXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1tZC02IHBvcnRmb2xpby1pdGVtIGZpbHRlci1jb21wYW55XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvYXBwL3BhcnRuZXIucG5nXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgPGg0Pk91ciBQYXJuZXI8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiYXNzZXRzL2ltZy9hcHAvcGFydG5lci5wbmdcIiBkYXRhLWdhbGxlcnk9XCJwb3J0Zm9saW9HYWxsZXJ5XCIgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWxpZ2h0Ym94IHByZXZpZXctbGlua1wiIHRpdGxlPVwiT3VyIFBhcm5lclwiPjxpIGNsYXNzTmFtZT1cImJ4IGJ4LXBsdXNcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLi9zZXJ2aWNlc1wiIGNsYXNzTmFtZT1cImRldGFpbHMtbGlua1wiIHRpdGxlPVwiTW9yZSBEZXRhaWxzXCI+PGkgY2xhc3NOYW1lPVwiYnggYngtbGlua1wiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtNiBwb3J0Zm9saW8taXRlbSBmaWx0ZXItcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1nL2FwcC9pbWFnZTUucG5nXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgPGg0Pk91ciBQcm9kdWN0czwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJhc3NldHMvaW1nL2FwcC9pbWFnZTUucG5nXCIgZGF0YS1nYWxsZXJ5PVwicG9ydGZvbGlvR2FsbGVyeVwiIGNsYXNzTmFtZT1cInBvcnRmb2xpby1saWdodGJveCBwcmV2aWV3LWxpbmtcIiB0aXRsZT1cIk91ciBQcm9kdWN0c1wiPjxpIGNsYXNzTmFtZT1cImJ4IGJ4LXBsdXNcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLi9zZXJ2aWNlc1wiIGNsYXNzTmFtZT1cImRldGFpbHMtbGlua1wiIHRpdGxlPVwiTW9yZSBEZXRhaWxzXCI+PGkgY2xhc3NOYW1lPVwiYnggYngtbGlua1wiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtNiBwb3J0Zm9saW8taXRlbSBmaWx0ZXItcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1nL2FwcC9pbWFnZTgucG5nXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgPGg0Pk91ciBQcm9kdWN0czwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJhc3NldHMvaW1nL2FwcC9pbWFnZTgucG5nXCIgZGF0YS1nYWxsZXJ5PVwicG9ydGZvbGlvR2FsbGVyeVwiIGNsYXNzTmFtZT1cInBvcnRmb2xpby1saWdodGJveCBwcmV2aWV3LWxpbmtcIiB0aXRsZT1cIk91ciBQcm9kdWN0c1wiPjxpIGNsYXNzTmFtZT1cImJ4IGJ4LXBsdXNcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLi9zZXJ2aWNlc1wiIGNsYXNzTmFtZT1cImRldGFpbHMtbGlua1wiIHRpdGxlPVwiTW9yZSBEZXRhaWxzXCI+PGkgY2xhc3NOYW1lPVwiYnggYngtbGlua1wiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtNiBwb3J0Zm9saW8taXRlbSBmaWx0ZXItcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1nL2FwcC9pbWFnZTkucG5nXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgPGg0Pk91ciBQcm9kdWN0czwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJhc3NldHMvaW1nL2FwcC9pbWFnZTkucG5nXCIgZGF0YS1nYWxsZXJ5PVwicG9ydGZvbGlvR2FsbGVyeVwiIGNsYXNzTmFtZT1cInBvcnRmb2xpby1saWdodGJveCBwcmV2aWV3LWxpbmtcIiB0aXRsZT1cIk91ciBQcm9kdWN0c1wiPjxpIGNsYXNzTmFtZT1cImJ4IGJ4LXBsdXNcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLi9zZXJ2aWNlc1wiIGNsYXNzTmFtZT1cImRldGFpbHMtbGlua1wiIHRpdGxlPVwiTW9yZSBEZXRhaWxzXCI+PGkgY2xhc3NOYW1lPVwiYnggYngtbGlua1wiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtNiBwb3J0Zm9saW8taXRlbSBmaWx0ZXItcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1nL2FwcC9pbWFnZTEwLnBuZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoND5PdXIgUHJvZHVjdHM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiYXNzZXRzL2ltZy9hcHAvaW1hZ2UxMC5wbmdcIiBkYXRhLWdhbGxlcnk9XCJwb3J0Zm9saW9HYWxsZXJ5XCIgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWxpZ2h0Ym94IHByZXZpZXctbGlua1wiIHRpdGxlPVwiT3VyIFByb2R1Y3RzXCI+PGkgY2xhc3NOYW1lPVwiYnggYngtcGx1c1wiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIuL3NlcnZpY2VzXCIgY2xhc3NOYW1lPVwiZGV0YWlscy1saW5rXCIgdGl0bGU9XCJNb3JlIERldGFpbHNcIj48aSBjbGFzc05hbWU9XCJieCBieC1saW5rXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1tZC02IHBvcnRmb2xpby1pdGVtIGZpbHRlci1wcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvYXBwL2ltYWdlMTEucG5nXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgPGg0Pk91ciBQcm9kdWN0czwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJhc3NldHMvaW1nL2FwcC9pbWFnZTExLnBuZ1wiIGRhdGEtZ2FsbGVyeT1cInBvcnRmb2xpb0dhbGxlcnlcIiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tbGlnaHRib3ggcHJldmlldy1saW5rXCIgdGl0bGU9XCJPdXIgUHJvZHVjdHNcIj48aSBjbGFzc05hbWU9XCJieCBieC1wbHVzXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi4vc2VydmljZXNcIiBjbGFzc05hbWU9XCJkZXRhaWxzLWxpbmtcIiB0aXRsZT1cIk1vcmUgRGV0YWlsc1wiPjxpIGNsYXNzTmFtZT1cImJ4IGJ4LWxpbmtcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLW1kLTYgcG9ydGZvbGlvLWl0ZW0gZmlsdGVyLXByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltZy9hcHAvaW1hZ2UxMi5wbmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8taW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aDQ+T3VyIFByb2R1Y3RzPC9oND5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImFzc2V0cy9pbWcvYXBwL2ltYWdlMTIucG5nXCIgZGF0YS1nYWxsZXJ5PVwicG9ydGZvbGlvR2FsbGVyeVwiIGNsYXNzTmFtZT1cInBvcnRmb2xpby1saWdodGJveCBwcmV2aWV3LWxpbmtcIiB0aXRsZT1cIk91ciBQcm9kdWN0c1wiPjxpIGNsYXNzTmFtZT1cImJ4IGJ4LXBsdXNcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLi9zZXJ2aWNlc1wiIGNsYXNzTmFtZT1cImRldGFpbHMtbGlua1wiIHRpdGxlPVwiTW9yZSBEZXRhaWxzXCI+PGkgY2xhc3NOYW1lPVwiYnggYngtbGlua1wiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtNiBwb3J0Zm9saW8taXRlbSBmaWx0ZXItcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1nL2FwcC9pbWFnZTEzLnBuZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoND5PdXIgUHJvZHVjdHM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiYXNzZXRzL2ltZy9hcHAvaW1hZ2UxMy5wbmdcIiBkYXRhLWdhbGxlcnk9XCJwb3J0Zm9saW9HYWxsZXJ5XCIgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWxpZ2h0Ym94IHByZXZpZXctbGlua1wiIHRpdGxlPVwiT3VyIFByb2R1Y3RzXCI+PGkgY2xhc3NOYW1lPVwiYnggYngtcGx1c1wiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIuL3NlcnZpY2VzXCIgY2xhc3NOYW1lPVwiZGV0YWlscy1saW5rXCIgdGl0bGU9XCJNb3JlIERldGFpbHNcIj48aSBjbGFzc05hbWU9XCJieCBieC1saW5rXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1tZC02IHBvcnRmb2xpby1pdGVtIGZpbHRlci1wcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvYXBwL2ltYWdlMTQucG5nXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgPGg0Pk91ciBQcm9kdWN0czwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJhc3NldHMvaW1nL2FwcC9pbWFnZTE0LnBuZ1wiIGRhdGEtZ2FsbGVyeT1cInBvcnRmb2xpb0dhbGxlcnlcIiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tbGlnaHRib3ggcHJldmlldy1saW5rXCIgdGl0bGU9XCJPdXIgUHJvZHVjdHNcIj48aSBjbGFzc05hbWU9XCJieCBieC1wbHVzXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi4vc2VydmljZXNcIiBjbGFzc05hbWU9XCJkZXRhaWxzLWxpbmtcIiB0aXRsZT1cIk1vcmUgRGV0YWlsc1wiPjxpIGNsYXNzTmFtZT1cImJ4IGJ4LWxpbmtcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLW1kLTYgcG9ydGZvbGlvLWl0ZW0gZmlsdGVyLXByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltZy9hcHAvaW1hZ2UxNS5wbmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8taW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aDQ+T3VyIFByb2R1Y3RzPC9oND5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImFzc2V0cy9pbWcvYXBwL2ltYWdlMTUucG5nXCIgZGF0YS1nYWxsZXJ5PVwicG9ydGZvbGlvR2FsbGVyeVwiIGNsYXNzTmFtZT1cInBvcnRmb2xpby1saWdodGJveCBwcmV2aWV3LWxpbmtcIiB0aXRsZT1cIk91ciBQcm9kdWN0c1wiPjxpIGNsYXNzTmFtZT1cImJ4IGJ4LXBsdXNcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLi9zZXJ2aWNlc1wiIGNsYXNzTmFtZT1cImRldGFpbHMtbGlua1wiIHRpdGxlPVwiTW9yZSBEZXRhaWxzXCI+PGkgY2xhc3NOYW1lPVwiYnggYngtbGlua1wiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtNiBwb3J0Zm9saW8taXRlbSBmaWx0ZXItcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1nL2FwcC9pbWFnZTE2LnBuZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoND5PdXIgUHJvZHVjdHM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiYXNzZXRzL2ltZy9hcHAvaW1hZ2UxNi5wbmdcIiBkYXRhLWdhbGxlcnk9XCJwb3J0Zm9saW9HYWxsZXJ5XCIgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWxpZ2h0Ym94IHByZXZpZXctbGlua1wiIHRpdGxlPVwiT3VyIFByb2R1Y3RzXCI+PGkgY2xhc3NOYW1lPVwiYnggYngtcGx1c1wiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIuL3NlcnZpY2VzXCIgY2xhc3NOYW1lPVwiZGV0YWlscy1saW5rXCIgdGl0bGU9XCJNb3JlIERldGFpbHNcIj48aSBjbGFzc05hbWU9XCJieCBieC1saW5rXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8c2VjdGlvbiBpZD1cImNsaWVudHNcIiBjbGFzc05hbWU9XCJjbGllbnRzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIGRhdGEtYW9zPVwiem9vbS1pblwiPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMiBjb2wtbWQtNCBjb2wtNiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltZy9jbGllbnRzL2NsaWVudC0xLnBuZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgY29sLW1kLTQgY29sLTYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvY2xpZW50cy9jbGllbnQtMi5wbmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yIGNvbC1tZC00IGNvbC02IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1nL2NsaWVudHMvY2xpZW50LTMucG5nXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMiBjb2wtbWQtNCBjb2wtNiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltZy9jbGllbnRzL2NsaWVudC00LnBuZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgY29sLW1kLTQgY29sLTYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvY2xpZW50cy9jbGllbnQtNS5wbmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yIGNvbC1tZC00IGNvbC02IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1nL2NsaWVudHMvY2xpZW50LTYucG5nXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIDxGb290ZXIgLz5cclxuXHJcblxyXG4gICAgICA8ZGl2IGlkPVwicHJlbG9hZGVyXCI+PC9kaXY+XHJcbiAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmFjay10by10b3AgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+PGkgY2xhc3NOYW1lPVwiYmkgYmktYXJyb3ctdXAtc2hvcnRcIj48L2k+PC9hPlxyXG5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==