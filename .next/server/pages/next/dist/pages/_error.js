module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/next/dist/pages/_error.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps({
  res,
  err
}) {
  const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
}

class Error1 extends _react.default.Component {
  render() {
    const {
      statusCode
    } = this.props;
    const title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
    return /*#__PURE__*/_react.default.createElement("div", {
      style: styles.error
    }, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("title", null, statusCode ? `${statusCode}: ${title}` : 'Application error: a client-side exception has occurred')), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: 'body { margin: 0 }'
      }
    }), statusCode ? /*#__PURE__*/_react.default.createElement("h1", {
      style: styles.h1
    }, statusCode) : null, /*#__PURE__*/_react.default.createElement("div", {
      style: styles.desc
    }, /*#__PURE__*/_react.default.createElement("h2", {
      style: styles.h2
    }, this.props.title || statusCode ? title : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "Application error: a client-side exception has occurred (see the browser console for more information)"), "."))));
  }

}

Error1.displayName = 'ErrorPage';
Error1.getInitialProps = _getInitialProps;
Error1.origGetInitialProps = _getInitialProps;
exports.default = Error1;
const styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiIiwid2VicGFjazovLy8uLi8uLi9wYWdlcy9fZXJyb3IudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWtCLFVBQU8sb0VBQVA7O0FBQ0QsU0FBb0IsOEZBQXBCOzs7Ozs7OztBQUdqQixNQUFNLFdBQVc7QUFDZixPQUFHLGFBRFk7QUFFZixPQUFHLDhCQUZZO0FBR2YsT0FBRyxvQkFIWTtBQUlmLE9BQUc7QUFKWSxDQUFqQjs7U0FZUyxnQixDQUFnQjtBQUN2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ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL19uZXh0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2Vycm9yLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9zaGFyZWQvbGliL2hlYWQnXG5pbXBvcnQgeyBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9zaGFyZWQvbGliL3V0aWxzJ1xuXG5jb25zdCBzdGF0dXNDb2RlczogeyBbY29kZTogbnVtYmVyXTogc3RyaW5nIH0gPSB7XG4gIDQwMDogJ0JhZCBSZXF1ZXN0JyxcbiAgNDA0OiAnVGhpcyBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZCcsXG4gIDQwNTogJ01ldGhvZCBOb3QgQWxsb3dlZCcsXG4gIDUwMDogJ0ludGVybmFsIFNlcnZlciBFcnJvcicsXG59XG5cbmV4cG9ydCB0eXBlIEVycm9yUHJvcHMgPSB7XG4gIHN0YXR1c0NvZGU6IG51bWJlclxuICB0aXRsZT86IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBfZ2V0SW5pdGlhbFByb3BzKHtcbiAgcmVzLFxuICBlcnIsXG59OiBOZXh0UGFnZUNvbnRleHQpOiBQcm9taXNlPEVycm9yUHJvcHM+IHwgRXJyb3JQcm9wcyB7XG4gIGNvbnN0IHN0YXR1c0NvZGUgPVxuICAgIHJlcyAmJiByZXMuc3RhdHVzQ29kZSA/IHJlcy5zdGF0dXNDb2RlIDogZXJyID8gZXJyLnN0YXR1c0NvZGUhIDogNDA0XG4gIHJldHVybiB7IHN0YXR1c0NvZGUgfVxufVxuXG4vKipcbiAqIGBFcnJvcmAgY29tcG9uZW50IHVzZWQgZm9yIGhhbmRsaW5nIGVycm9ycy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3I8UCA9IHt9PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQICYgRXJyb3JQcm9wcz4ge1xuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnRXJyb3JQYWdlJ1xuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBfZ2V0SW5pdGlhbFByb3BzXG4gIHN0YXRpYyBvcmlnR2V0SW5pdGlhbFByb3BzID0gX2dldEluaXRpYWxQcm9wc1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0YXR1c0NvZGUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB0aXRsZSA9XG4gICAgICB0aGlzLnByb3BzLnRpdGxlIHx8XG4gICAgICBzdGF0dXNDb2Rlc1tzdGF0dXNDb2RlXSB8fFxuICAgICAgJ0FuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkJ1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5lcnJvcn0+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5cbiAgICAgICAgICAgIHtzdGF0dXNDb2RlXG4gICAgICAgICAgICAgID8gYCR7c3RhdHVzQ29kZX06ICR7dGl0bGV9YFxuICAgICAgICAgICAgICA6ICdBcHBsaWNhdGlvbiBlcnJvcjogYSBjbGllbnQtc2lkZSBleGNlcHRpb24gaGFzIG9jY3VycmVkJ31cbiAgICAgICAgICA8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogJ2JvZHkgeyBtYXJnaW46IDAgfScgfX0gLz5cbiAgICAgICAgICB7c3RhdHVzQ29kZSA/IDxoMSBzdHlsZT17c3R5bGVzLmgxfT57c3RhdHVzQ29kZX08L2gxPiA6IG51bGx9XG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmRlc2N9PlxuICAgICAgICAgICAgPGgyIHN0eWxlPXtzdHlsZXMuaDJ9PlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50aXRsZSB8fCBzdGF0dXNDb2RlID8gKFxuICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uIGVycm9yOiBhIGNsaWVudC1zaWRlIGV4Y2VwdGlvbiBoYXMgb2NjdXJyZWQgKHNlZVxuICAgICAgICAgICAgICAgICAgdGhlIGJyb3dzZXIgY29uc29sZSBmb3IgbW9yZSBpbmZvcm1hdGlvbilcbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgLlxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzOiB7IFtrOiBzdHJpbmddOiBSZWFjdC5DU1NQcm9wZXJ0aWVzIH0gPSB7XG4gIGVycm9yOiB7XG4gICAgY29sb3I6ICcjMDAwJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgZm9udEZhbWlseTpcbiAgICAgICctYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgXCJTZWdvZSBVSVwiLCBcIkZpcmEgU2Fuc1wiLCBBdmVuaXIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWYnLFxuICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIH0sXG5cbiAgZGVzYzoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIGxpbmVIZWlnaHQ6ICc0OXB4JyxcbiAgICBoZWlnaHQ6ICc0OXB4JyxcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgfSxcblxuICBoMToge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIGJvcmRlclJpZ2h0OiAnMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwuMyknLFxuICAgIG1hcmdpbjogMCxcbiAgICBtYXJnaW5SaWdodDogJzIwcHgnLFxuICAgIHBhZGRpbmc6ICcxMHB4IDIzcHggMTBweCAwJyxcbiAgICBmb250U2l6ZTogJzI0cHgnLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgfSxcblxuICBoMjoge1xuICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgbGluZUhlaWdodDogJ2luaGVyaXQnLFxuICAgIG1hcmdpbjogMCxcbiAgICBwYWRkaW5nOiAwLFxuICB9LFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==