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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../server/get-page-files":
/*!*****************************************************!*\
  !*** external "next/dist/server/get-page-files.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ "../server/htmlescape":
/*!*************************************************!*\
  !*** external "next/dist/server/htmlescape.js" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ "../server/utils":
/*!********************************************!*\
  !*** external "next/dist/server/utils.js" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ "../shared/lib/constants":
/*!****************************************************!*\
  !*** external "next/dist/shared/lib/constants.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ "../shared/lib/head-manager-context":
/*!***************************************************************!*\
  !*** external "next/dist/shared/lib/head-manager-context.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "./node_modules/next/dist/client/head-manager.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/head-manager.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initHeadManager;
exports.DOMAttributeNames = void 0;
const DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM({
  type,
  props
}) {
  const el = document.createElement(type);

  for (const p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    const attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  const {
    children,
    dangerouslySetInnerHTML
  } = props;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function updateElements(type, components) {
  const headEl = document.getElementsByTagName('head')[0];
  const headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (true) {
    if (!headCountEl) {
      console.error('Warning: next-head-count is missing. https://nextjs.org/docs/messages/next-head-count-missing');
      return;
    }
  }

  const headCount = Number(headCountEl.content);
  const oldTags = [];

  for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  const newTags = components.map(reactElementToDOM).filter(newTag => {
    for (let k = 0, len = oldTags.length; k < len; k++) {
      const oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(t => t.parentNode.removeChild(t));
  newTags.forEach(t => headEl.insertBefore(t, headCountEl));
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  let updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: head => {
      const promise = updatePromise = Promise.resolve().then(() => {
        if (promise !== updatePromise) return;
        updatePromise = null;
        const tags = {};
        head.forEach(h => {
          if ( // If the font tag is loaded only on client navigation
          // it won't be inlined. In this case revert to the original behavior
          h.type === 'link' && h.props['data-optimized-fonts'] && !document.querySelector(`style[data-href="${h.props['data-href']}"]`)) {
            h.props.href = h.props['data-href'];
            h.props['data-href'] = undefined;
          }

          const components = tags[h.type] || [];
          components.push(h);
          tags[h.type] = components;
        });
        const titleComponent = tags.title ? tags.title[0] : null;
        let title = '';

        if (titleComponent) {
          const {
            children
          } = titleComponent.props;
          title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        }

        if (title !== document.title) document.title = title;
        ['meta', 'base', 'link', 'style', 'script'].forEach(type => {
          updateElements(type, tags[type] || []);
        });
      });
    }
  };
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

/***/ "./node_modules/next/dist/client/script.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/script.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initScriptLoader = initScriptLoader;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _headManagerContext = __webpack_require__(/*! ../shared/lib/head-manager-context */ "../shared/lib/head-manager-context");

var _headManager = __webpack_require__(/*! ./head-manager */ "./node_modules/next/dist/client/head-manager.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

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

const ScriptCache = new Map();
const LoadCache = new Set();
const ignoreProps = ['onLoad', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy'];

const loadScript = props => {
  const {
    src,
    id,
    onLoad = () => {},
    dangerouslySetInnerHTML,
    children = '',
    strategy = 'afterInteractive',
    onError
  } = props;
  const cacheKey = id || src; // Script has already loaded

  if (cacheKey && LoadCache.has(cacheKey)) {
    return;
  } // Contents of this script are already loading/loaded


  if (ScriptCache.has(src)) {
    LoadCache.add(cacheKey); // Execute onLoad since the script loading has begun

    ScriptCache.get(src).then(onLoad, onError);
    return;
  }

  const el = document.createElement('script');
  const loadPromise = new Promise((resolve, reject) => {
    el.addEventListener('load', function (e) {
      resolve();

      if (onLoad) {
        onLoad.call(this, e);
      }
    });
    el.addEventListener('error', function (e) {
      reject(e);
    });
  }).catch(function (e) {
    if (onError) {
      onError(e);
    }
  });

  if (src) {
    ScriptCache.set(src, loadPromise);
  }

  LoadCache.add(cacheKey);

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  } else if (src) {
    el.src = src;
  }

  for (const [k, value] of Object.entries(props)) {
    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  el.setAttribute('data-nscript', strategy);
  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  const {
    strategy = 'afterInteractive'
  } = props;

  if (strategy === 'afterInteractive') {
    loadScript(props);
  } else if (strategy === 'lazyOnload') {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
    });
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
  } else {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
    });
  }
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
}

function Script(props) {
  const {
    src = '',
    onLoad = () => {},
    dangerouslySetInnerHTML,
    strategy = 'afterInteractive',
    onError
  } = props,
        restProps = _objectWithoutProperties(props, ["src", "onLoad", "dangerouslySetInnerHTML", "strategy", "onError"]); // Context is available only during SSR


  const {
    updateScripts,
    scripts,
    getIsSsr
  } = (0, _react).useContext(_headManagerContext.HeadManagerContext);
  (0, _react).useEffect(() => {
    if (strategy === 'afterInteractive') {
      loadScript(props);
    } else if (strategy === 'lazyOnload') {
      loadLazyScript(props);
    }
  }, [props, strategy]);

  if (strategy === 'beforeInteractive') {
    if (updateScripts) {
      scripts.beforeInteractive = (scripts.beforeInteractive || []).concat([_objectSpread({
        src,
        onLoad,
        onError
      }, restProps)]);
      updateScripts(scripts);
    } else if (getIsSsr && getIsSsr()) {
      // Script has already loaded during SSR
      LoadCache.add(restProps.id || src);
    } else if (getIsSsr && !getIsSsr()) {
      loadScript(props);
    }
  }

  return null;
}

var _default = Script;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const _excluded = ["strategy"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DocumentContext", {
  enumerable: true,
  get: function () {
    return _utils.DocumentContext;
  }
});
Object.defineProperty(exports, "DocumentInitialProps", {
  enumerable: true,
  get: function () {
    return _utils.DocumentInitialProps;
  }
});
Object.defineProperty(exports, "DocumentProps", {
  enumerable: true,
  get: function () {
    return _utils.DocumentProps;
  }
});
exports.Html = Html;
exports.Main = Main;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../shared/lib/constants */ "../shared/lib/constants");

var _utils = __webpack_require__(/*! ../shared/lib/utils */ "../shared/lib/utils");

var _getPageFiles = __webpack_require__(/*! ../server/get-page-files */ "../server/get-page-files");

var _utils1 = __webpack_require__(/*! ../server/utils */ "../server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "../server/htmlescape");

var _script = _interopRequireDefault(__webpack_require__(/*! ../client/script */ "./node_modules/next/dist/client/script.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  const sharedFiles = (0, _getPageFiles).getPageFiles(buildManifest, '/_app');
  const pageFiles = inAmpMode ? [] : (0, _getPageFiles).getPageFiles(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}

function getPolyfillScripts(context, props) {
  // polyfills.js has to be rendered as nomodule without async
  // It also has to be the first script to load
  const {
    assetPrefix,
    buildManifest,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
    key: polyfill,
    defer: !disableOptimizedLoading,
    nonce: props.nonce,
    crossOrigin: props.crossOrigin || undefined,
    noModule: true,
    src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
  }));
}

function getPreNextScripts(context, props) {
  const {
    scriptLoader,
    disableOptimizedLoading
  } = context;
  return (scriptLoader.beforeInteractive || []).map((file, index) => {
    const {
      strategy
    } = file,
          scriptProps = _objectWithoutProperties(file, _excluded);

    return /*#__PURE__*/_react.default.createElement("script", Object.assign({}, scriptProps, {
      key: scriptProps.src || index,
      defer: !disableOptimizedLoading,
      nonce: props.nonce,
      "data-nscript": "beforeInteractive",
      crossOrigin: props.crossOrigin || undefined
    }));
  });
}

function getDynamicChunks(context, props, files) {
  const {
    dynamicImports,
    assetPrefix,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return dynamicImports.map(file => {
    if (!file.endsWith('.js') || files.allFiles.includes(file)) return null;
    return /*#__PURE__*/_react.default.createElement("script", {
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}

function getScripts(context, props, files) {
  var ref;
  const {
    assetPrefix,
    buildManifest,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
  const lowPriorityScripts = (ref = buildManifest.lowPriorityFiles) === null || ref === void 0 ? void 0 : ref.filter(file => file.endsWith('.js'));
  return [...normalScripts, ...lowPriorityScripts].map(file => {
    return /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}

class Document1 extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, Object.assign({}, props));
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server).default()];
    return {
      html,
      head,
      styles
    };
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document1;

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale
  } = (0, _react).useContext(_utils.HtmlContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && true ? '' : undefined
  }));
}

class Head extends _react.Component {
  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
    // webpack runtime (`mini-css-extract-plugin`).

    let unmangedFiles = new Set([]);
    let dynamicCssFiles = Array.from(new Set(dynamicImports.filter(file => file.endsWith('.css'))));

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }

    let cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);

      if (true) {
        cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
          key: `${file}-preload`,
          nonce: this.props.nonce,
          rel: "preload",
          href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
          as: "style",
          crossOrigin: this.props.crossOrigin || undefined
        }));
      }

      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
        "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
      }));
    });

    if (false) {}

    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dynamicImports.map(file => {
      if (!file.endsWith('.js')) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: file,
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      scriptLoader
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      return file.endsWith('.js');
    });
    return [...(scriptLoader.beforeInteractive || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file.src,
      nonce: this.props.nonce,
      rel: "preload",
      href: file.src,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }))];
  }

  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  handleDocumentScriptLoaderItems(children) {
    const {
      scriptLoader
    } = this.context;
    const scriptLoaderItems = [];
    const filteredChildren = [];

    _react.default.Children.forEach(children, child => {
      if (child.type === _script.default) {
        if (child.props.strategy === 'beforeInteractive') {
          scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([_objectSpread({}, child.props)]);
          return;
        } else if (['lazyOnload', 'afterInteractive'].includes(child.props.strategy)) {
          scriptLoaderItems.push(child.props);
          return;
        }
      }

      filteredChildren.push(child);
    });

    this.context.__NEXT_DATA__.scriptLoader = scriptLoaderItems;
    return filteredChildren;
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(({
        url
      }) => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS,
      unstable_JsPreload,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let cssPreloads = [];
    let otherHeadElements = [];

    if (head) {
      head.forEach(c => {
        if (c && c.type === 'link' && c.props['rel'] === 'preload' && c.props['as'] === 'style') {
          cssPreloads.push(c);
        } else {
          c && otherHeadElements.push(c);
        }
      });
      head = cssPreloads.concat(otherHeadElements);
    }

    let children = _react.default.Children.toArray(this.props.children).filter(Boolean); // show a warning if Head contains <title> (only in development)


    if (true) {
      children = _react.default.Children.map(children, child => {
        var ref;
        const isReactHelmet = child === null || child === void 0 ? void 0 : (ref = child.props) === null || ref === void 0 ? void 0 : ref['data-react-helmet'];

        if (!isReactHelmet) {
          var ref1;

          if ((child === null || child === void 0 ? void 0 : child.type) === 'title') {
            console.warn("Warning: <title> should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-title");
          } else if ((child === null || child === void 0 ? void 0 : child.type) === 'meta' && (child === null || child === void 0 ? void 0 : (ref1 = child.props) === null || ref1 === void 0 ? void 0 : ref1.name) === 'viewport') {
            console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-viewport-meta");
          }
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    if (false) {}

    children = this.handleDocumentScriptLoaderItems(children);
    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var ref2, ref3;
        return el === null || el === void 0 ? void 0 : (ref2 = el.props) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.dangerouslySetInnerHTML) === null || ref3 === void 0 ? void 0 : ref3.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);

    var _nonce, _nonce1;

    return /*#__PURE__*/_react.default.createElement("head", Object.assign({}, this.props), this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children,  false && /*#__PURE__*/false, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils1).cleanAmpPath(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  true && this.getCssLinks(files),  true && /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": (_nonce = this.props.nonce) !== null && _nonce !== void 0 ? _nonce : ''
    }),  false && /*#__PURE__*/false, !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files),  false && false,  false && /*#__PURE__*/false, this.context.isDevelopment && // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)

    /*#__PURE__*/
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _utils.HtmlContext;

function Main() {
  const {
    inAmpMode,
    docComponentsRendered
  } = (0, _react).useContext(_utils.HtmlContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.BODY_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next"
  }, _constants.BODY_RENDER_TARGET);
}

class NextScript extends _react.Component {
  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  static getInlineScriptSource(context) {
    const {
      __NEXT_DATA__
    } = context;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape).htmlEscapeJsonString(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (false) {}

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.polyfillFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }), disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _utils.HtmlContext;
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Document; });
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\kerjaan\\dewa\\hba\\pages\\_document.js";


function Document() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_document__WEBPACK_IMPORTED_MODULE_0__["Html"], {
    lang: "en",
    suppressHydrationWarning: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_document__WEBPACK_IMPORTED_MODULE_0__["Head"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        charset: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
        children: "Hidayat Bersaudara Abadi"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        content: "",
        name: "description"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        content: "",
        name: "keywords"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
        href: "assets/img/hba.png",
        rel: "icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
        href: "assets/img/hba.png",
        rel: "apple-touch-icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("body", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_document__WEBPACK_IMPORTED_MODULE_0__["Main"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_document__WEBPACK_IMPORTED_MODULE_0__["NextScript"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ 1:
/*!*********************************************!*\
  !*** multi private-next-pages/_document.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_document.js */"./pages/_document.js");


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

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9nZXQtcGFnZS1maWxlcy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvaHRtbGVzY2FwZS5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9oZWFkLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9zY3JpcHQudHN4Iiwid2VicGFjazovLy8uLi8uLi9wYWdlcy9fZG9jdW1lbnQudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc2VydmVyXCIiXSwibmFtZXMiOlsiRG9jdW1lbnQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FB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O0FBQUE7QUFBQSxZQURGLGVBa0JFO0FBQUEsOEJBQ0UscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCRCxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9fbmV4dC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9nZXQtcGFnZS1maWxlcy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2h0bWxlc2NhcGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9jb25zdGFudHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwiZXhwb3J0IGNvbnN0IERPTUF0dHJpYnV0ZU5hbWVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBhY2NlcHRDaGFyc2V0OiAnYWNjZXB0LWNoYXJzZXQnLFxuICBjbGFzc05hbWU6ICdjbGFzcycsXG4gIGh0bWxGb3I6ICdmb3InLFxuICBodHRwRXF1aXY6ICdodHRwLWVxdWl2JyxcbiAgbm9Nb2R1bGU6ICdub01vZHVsZScsXG59XG5cbmZ1bmN0aW9uIHJlYWN0RWxlbWVudFRvRE9NKHsgdHlwZSwgcHJvcHMgfTogSlNYLkVsZW1lbnQpOiBIVE1MRWxlbWVudCB7XG4gIGNvbnN0IGVsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcbiAgZm9yIChjb25zdCBwIGluIHByb3BzKSB7XG4gICAgaWYgKCFwcm9wcy5oYXNPd25Qcm9wZXJ0eShwKSkgY29udGludWVcbiAgICBpZiAocCA9PT0gJ2NoaWxkcmVuJyB8fCBwID09PSAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKSBjb250aW51ZVxuXG4gICAgLy8gd2UgZG9uJ3QgcmVuZGVyIHVuZGVmaW5lZCBwcm9wcyB0byB0aGUgRE9NXG4gICAgaWYgKHByb3BzW3BdID09PSB1bmRlZmluZWQpIGNvbnRpbnVlXG5cbiAgICBjb25zdCBhdHRyID0gRE9NQXR0cmlidXRlTmFtZXNbcF0gfHwgcC50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKFxuICAgICAgdHlwZSA9PT0gJ3NjcmlwdCcgJiZcbiAgICAgIChhdHRyID09PSAnYXN5bmMnIHx8IGF0dHIgPT09ICdkZWZlcicgfHwgYXR0ciA9PT0gJ25vTW9kdWxlJylcbiAgICApIHtcbiAgICAgIDsoZWwgYXMgSFRNTFNjcmlwdEVsZW1lbnQpW2F0dHJdID0gISFwcm9wc1twXVxuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ciwgcHJvcHNbcF0pXG4gICAgfVxuICB9XG5cbiAgY29uc3QgeyBjaGlsZHJlbiwgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgfSA9IHByb3BzXG4gIGlmIChkYW5nZXJvdXNseVNldElubmVySFRNTCkge1xuICAgIGVsLmlubmVySFRNTCA9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbCB8fCAnJ1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuKSB7XG4gICAgZWwudGV4dENvbnRlbnQgPVxuICAgICAgdHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJ1xuICAgICAgICA/IGNoaWxkcmVuXG4gICAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZHJlbilcbiAgICAgICAgPyBjaGlsZHJlbi5qb2luKCcnKVxuICAgICAgICA6ICcnXG4gIH1cbiAgcmV0dXJuIGVsXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnRzKHR5cGU6IHN0cmluZywgY29tcG9uZW50czogSlNYLkVsZW1lbnRbXSk6IHZvaWQge1xuICBjb25zdCBoZWFkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdXG4gIGNvbnN0IGhlYWRDb3VudEVsOiBIVE1MTWV0YUVsZW1lbnQgPSBoZWFkRWwucXVlcnlTZWxlY3RvcihcbiAgICAnbWV0YVtuYW1lPW5leHQtaGVhZC1jb3VudF0nXG4gICkgYXMgSFRNTE1ldGFFbGVtZW50XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFoZWFkQ291bnRFbCkge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgJ1dhcm5pbmc6IG5leHQtaGVhZC1jb3VudCBpcyBtaXNzaW5nLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWhlYWQtY291bnQtbWlzc2luZydcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhlYWRDb3VudCA9IE51bWJlcihoZWFkQ291bnRFbC5jb250ZW50KVxuICBjb25zdCBvbGRUYWdzOiBFbGVtZW50W10gPSBbXVxuXG4gIGZvciAoXG4gICAgbGV0IGkgPSAwLCBqID0gaGVhZENvdW50RWwucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICBpIDwgaGVhZENvdW50O1xuICAgIGkrKywgaiA9IGohLnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgKSB7XG4gICAgaWYgKGohLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gdHlwZSkge1xuICAgICAgb2xkVGFncy5wdXNoKGohKVxuICAgIH1cbiAgfVxuICBjb25zdCBuZXdUYWdzID0gKGNvbXBvbmVudHMubWFwKHJlYWN0RWxlbWVudFRvRE9NKSBhcyBIVE1MRWxlbWVudFtdKS5maWx0ZXIoXG4gICAgKG5ld1RhZykgPT4ge1xuICAgICAgZm9yIChsZXQgayA9IDAsIGxlbiA9IG9sZFRhZ3MubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgICAgY29uc3Qgb2xkVGFnID0gb2xkVGFnc1trXVxuICAgICAgICBpZiAob2xkVGFnLmlzRXF1YWxOb2RlKG5ld1RhZykpIHtcbiAgICAgICAgICBvbGRUYWdzLnNwbGljZShrLCAxKVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgKVxuXG4gIG9sZFRhZ3MuZm9yRWFjaCgodCkgPT4gdC5wYXJlbnROb2RlIS5yZW1vdmVDaGlsZCh0KSlcbiAgbmV3VGFncy5mb3JFYWNoKCh0KSA9PiBoZWFkRWwuaW5zZXJ0QmVmb3JlKHQsIGhlYWRDb3VudEVsKSlcbiAgaGVhZENvdW50RWwuY29udGVudCA9IChoZWFkQ291bnQgLSBvbGRUYWdzLmxlbmd0aCArIG5ld1RhZ3MubGVuZ3RoKS50b1N0cmluZygpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRIZWFkTWFuYWdlcigpOiB7XG4gIG1vdW50ZWRJbnN0YW5jZXM6IFNldDx1bmtub3duPlxuICB1cGRhdGVIZWFkOiAoaGVhZDogSlNYLkVsZW1lbnRbXSkgPT4gdm9pZFxufSB7XG4gIGxldCB1cGRhdGVQcm9taXNlOiBQcm9taXNlPHZvaWQ+IHwgbnVsbCA9IG51bGxcblxuICByZXR1cm4ge1xuICAgIG1vdW50ZWRJbnN0YW5jZXM6IG5ldyBTZXQoKSxcbiAgICB1cGRhdGVIZWFkOiAoaGVhZDogSlNYLkVsZW1lbnRbXSkgPT4ge1xuICAgICAgY29uc3QgcHJvbWlzZSA9ICh1cGRhdGVQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIGlmIChwcm9taXNlICE9PSB1cGRhdGVQcm9taXNlKSByZXR1cm5cblxuICAgICAgICB1cGRhdGVQcm9taXNlID0gbnVsbFxuICAgICAgICBjb25zdCB0YWdzOiBSZWNvcmQ8c3RyaW5nLCBKU1guRWxlbWVudFtdPiA9IHt9XG5cbiAgICAgICAgaGVhZC5mb3JFYWNoKChoKSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgLy8gSWYgdGhlIGZvbnQgdGFnIGlzIGxvYWRlZCBvbmx5IG9uIGNsaWVudCBuYXZpZ2F0aW9uXG4gICAgICAgICAgICAvLyBpdCB3b24ndCBiZSBpbmxpbmVkLiBJbiB0aGlzIGNhc2UgcmV2ZXJ0IHRvIHRoZSBvcmlnaW5hbCBiZWhhdmlvclxuICAgICAgICAgICAgaC50eXBlID09PSAnbGluaycgJiZcbiAgICAgICAgICAgIGgucHJvcHNbJ2RhdGEtb3B0aW1pemVkLWZvbnRzJ10gJiZcbiAgICAgICAgICAgICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgc3R5bGVbZGF0YS1ocmVmPVwiJHtoLnByb3BzWydkYXRhLWhyZWYnXX1cIl1gXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBoLnByb3BzLmhyZWYgPSBoLnByb3BzWydkYXRhLWhyZWYnXVxuICAgICAgICAgICAgaC5wcm9wc1snZGF0YS1ocmVmJ10gPSB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IHRhZ3NbaC50eXBlXSB8fCBbXVxuICAgICAgICAgIGNvbXBvbmVudHMucHVzaChoKVxuICAgICAgICAgIHRhZ3NbaC50eXBlXSA9IGNvbXBvbmVudHNcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCB0aXRsZUNvbXBvbmVudCA9IHRhZ3MudGl0bGUgPyB0YWdzLnRpdGxlWzBdIDogbnVsbFxuICAgICAgICBsZXQgdGl0bGUgPSAnJ1xuICAgICAgICBpZiAodGl0bGVDb21wb25lbnQpIHtcbiAgICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aXRsZUNvbXBvbmVudC5wcm9wc1xuICAgICAgICAgIHRpdGxlID1cbiAgICAgICAgICAgIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgPyBjaGlsZHJlblxuICAgICAgICAgICAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pXG4gICAgICAgICAgICAgID8gY2hpbGRyZW4uam9pbignJylcbiAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aXRsZSAhPT0gZG9jdW1lbnQudGl0bGUpIGRvY3VtZW50LnRpdGxlID0gdGl0bGVcbiAgICAgICAgO1snbWV0YScsICdiYXNlJywgJ2xpbmsnLCAnc3R5bGUnLCAnc2NyaXB0J10uZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICAgIHVwZGF0ZUVsZW1lbnRzKHR5cGUsIHRhZ3NbdHlwZV0gfHwgW10pXG4gICAgICAgIH0pXG4gICAgICB9KSlcbiAgICB9LFxuICB9XG59XG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiZcbiAgICBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmXG4gICAgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiZcbiAgICBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykpIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNjcmlwdEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBIZWFkTWFuYWdlckNvbnRleHQgfSBmcm9tICcuLi9zaGFyZWQvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0J1xuaW1wb3J0IHsgRE9NQXR0cmlidXRlTmFtZXMgfSBmcm9tICcuL2hlYWQtbWFuYWdlcidcbmltcG9ydCB7IHJlcXVlc3RJZGxlQ2FsbGJhY2sgfSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuY29uc3QgU2NyaXB0Q2FjaGUgPSBuZXcgTWFwKClcbmNvbnN0IExvYWRDYWNoZSA9IG5ldyBTZXQoKVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjcmlwdFByb3BzIGV4dGVuZHMgU2NyaXB0SFRNTEF0dHJpYnV0ZXM8SFRNTFNjcmlwdEVsZW1lbnQ+IHtcbiAgc3RyYXRlZ3k/OiAnYWZ0ZXJJbnRlcmFjdGl2ZScgfCAnbGF6eU9ubG9hZCcgfCAnYmVmb3JlSW50ZXJhY3RpdmUnXG4gIGlkPzogc3RyaW5nXG4gIG9uTG9hZD86IChlOiBhbnkpID0+IHZvaWRcbiAgb25FcnJvcj86IChlOiBhbnkpID0+IHZvaWRcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2UgYFNjcmlwdFByb3BzYCBpbnN0ZWFkLlxuICovXG5leHBvcnQgdHlwZSBQcm9wcyA9IFNjcmlwdFByb3BzXG5cbmNvbnN0IGlnbm9yZVByb3BzID0gW1xuICAnb25Mb2FkJyxcbiAgJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJyxcbiAgJ2NoaWxkcmVuJyxcbiAgJ29uRXJyb3InLFxuICAnc3RyYXRlZ3knLFxuXVxuXG5jb25zdCBsb2FkU2NyaXB0ID0gKHByb3BzOiBTY3JpcHRQcm9wcyk6IHZvaWQgPT4ge1xuICBjb25zdCB7XG4gICAgc3JjLFxuICAgIGlkLFxuICAgIG9uTG9hZCA9ICgpID0+IHt9LFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLFxuICAgIGNoaWxkcmVuID0gJycsXG4gICAgc3RyYXRlZ3kgPSAnYWZ0ZXJJbnRlcmFjdGl2ZScsXG4gICAgb25FcnJvcixcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgY2FjaGVLZXkgPSBpZCB8fCBzcmNcblxuICAvLyBTY3JpcHQgaGFzIGFscmVhZHkgbG9hZGVkXG4gIGlmIChjYWNoZUtleSAmJiBMb2FkQ2FjaGUuaGFzKGNhY2hlS2V5KSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gQ29udGVudHMgb2YgdGhpcyBzY3JpcHQgYXJlIGFscmVhZHkgbG9hZGluZy9sb2FkZWRcbiAgaWYgKFNjcmlwdENhY2hlLmhhcyhzcmMpKSB7XG4gICAgTG9hZENhY2hlLmFkZChjYWNoZUtleSlcbiAgICAvLyBFeGVjdXRlIG9uTG9hZCBzaW5jZSB0aGUgc2NyaXB0IGxvYWRpbmcgaGFzIGJlZ3VuXG4gICAgU2NyaXB0Q2FjaGUuZ2V0KHNyYykudGhlbihvbkxvYWQsIG9uRXJyb3IpXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgY29uc3QgbG9hZFByb21pc2UgPSBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXNvbHZlKClcbiAgICAgIGlmIChvbkxvYWQpIHtcbiAgICAgICAgb25Mb2FkLmNhbGwodGhpcywgZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJlamVjdChlKVxuICAgIH0pXG4gIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgIG9uRXJyb3IoZSlcbiAgICB9XG4gIH0pXG5cbiAgaWYgKHNyYykge1xuICAgIFNjcmlwdENhY2hlLnNldChzcmMsIGxvYWRQcm9taXNlKVxuICB9XG4gIExvYWRDYWNoZS5hZGQoY2FjaGVLZXkpXG5cbiAgaWYgKGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKSB7XG4gICAgZWwuaW5uZXJIVE1MID0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sIHx8ICcnXG4gIH0gZWxzZSBpZiAoY2hpbGRyZW4pIHtcbiAgICBlbC50ZXh0Q29udGVudCA9XG4gICAgICB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnXG4gICAgICAgID8gY2hpbGRyZW5cbiAgICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKVxuICAgICAgICA/IGNoaWxkcmVuLmpvaW4oJycpXG4gICAgICAgIDogJydcbiAgfSBlbHNlIGlmIChzcmMpIHtcbiAgICBlbC5zcmMgPSBzcmNcbiAgfVxuXG4gIGZvciAoY29uc3QgW2ssIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcm9wcykpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCBpZ25vcmVQcm9wcy5pbmNsdWRlcyhrKSkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBjb25zdCBhdHRyID0gRE9NQXR0cmlidXRlTmFtZXNba10gfHwgay50b0xvd2VyQ2FzZSgpXG4gICAgZWwuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKVxuICB9XG5cbiAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLW5zY3JpcHQnLCBzdHJhdGVneSlcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVDbGllbnRTY3JpcHRMb2FkKHByb3BzOiBTY3JpcHRQcm9wcykge1xuICBjb25zdCB7IHN0cmF0ZWd5ID0gJ2FmdGVySW50ZXJhY3RpdmUnIH0gPSBwcm9wc1xuICBpZiAoc3RyYXRlZ3kgPT09ICdhZnRlckludGVyYWN0aXZlJykge1xuICAgIGxvYWRTY3JpcHQocHJvcHMpXG4gIH0gZWxzZSBpZiAoc3RyYXRlZ3kgPT09ICdsYXp5T25sb2FkJykge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBsb2FkU2NyaXB0KHByb3BzKSlcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRMYXp5U2NyaXB0KHByb3BzOiBTY3JpcHRQcm9wcykge1xuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gbG9hZFNjcmlwdChwcm9wcykpXG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IGxvYWRTY3JpcHQocHJvcHMpKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRTY3JpcHRMb2FkZXIoc2NyaXB0TG9hZGVySXRlbXM6IFNjcmlwdFByb3BzW10pIHtcbiAgc2NyaXB0TG9hZGVySXRlbXMuZm9yRWFjaChoYW5kbGVDbGllbnRTY3JpcHRMb2FkKVxufVxuXG5mdW5jdGlvbiBTY3JpcHQocHJvcHM6IFNjcmlwdFByb3BzKTogSlNYLkVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3Qge1xuICAgIHNyYyA9ICcnLFxuICAgIG9uTG9hZCA9ICgpID0+IHt9LFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLFxuICAgIHN0cmF0ZWd5ID0gJ2FmdGVySW50ZXJhY3RpdmUnLFxuICAgIG9uRXJyb3IsXG4gICAgLi4ucmVzdFByb3BzXG4gIH0gPSBwcm9wc1xuXG4gIC8vIENvbnRleHQgaXMgYXZhaWxhYmxlIG9ubHkgZHVyaW5nIFNTUlxuICBjb25zdCB7IHVwZGF0ZVNjcmlwdHMsIHNjcmlwdHMsIGdldElzU3NyIH0gPSB1c2VDb250ZXh0KEhlYWRNYW5hZ2VyQ29udGV4dClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzdHJhdGVneSA9PT0gJ2FmdGVySW50ZXJhY3RpdmUnKSB7XG4gICAgICBsb2FkU2NyaXB0KHByb3BzKVxuICAgIH0gZWxzZSBpZiAoc3RyYXRlZ3kgPT09ICdsYXp5T25sb2FkJykge1xuICAgICAgbG9hZExhenlTY3JpcHQocHJvcHMpXG4gICAgfVxuICB9LCBbcHJvcHMsIHN0cmF0ZWd5XSlcblxuICBpZiAoc3RyYXRlZ3kgPT09ICdiZWZvcmVJbnRlcmFjdGl2ZScpIHtcbiAgICBpZiAodXBkYXRlU2NyaXB0cykge1xuICAgICAgc2NyaXB0cy5iZWZvcmVJbnRlcmFjdGl2ZSA9IChzY3JpcHRzLmJlZm9yZUludGVyYWN0aXZlIHx8IFtdKS5jb25jYXQoW1xuICAgICAgICB7XG4gICAgICAgICAgc3JjLFxuICAgICAgICAgIG9uTG9hZCxcbiAgICAgICAgICBvbkVycm9yLFxuICAgICAgICAgIC4uLnJlc3RQcm9wcyxcbiAgICAgICAgfSxcbiAgICAgIF0pXG4gICAgICB1cGRhdGVTY3JpcHRzKHNjcmlwdHMpXG4gICAgfSBlbHNlIGlmIChnZXRJc1NzciAmJiBnZXRJc1NzcigpKSB7XG4gICAgICAvLyBTY3JpcHQgaGFzIGFscmVhZHkgbG9hZGVkIGR1cmluZyBTU1JcbiAgICAgIExvYWRDYWNoZS5hZGQocmVzdFByb3BzLmlkIHx8IHNyYylcbiAgICB9IGVsc2UgaWYgKGdldElzU3NyICYmICFnZXRJc1NzcigpKSB7XG4gICAgICBsb2FkU2NyaXB0KHByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmlwdFxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBmbHVzaCBmcm9tICdzdHlsZWQtanN4L3NlcnZlcidcbmltcG9ydCB7XG4gIEJPRFlfUkVOREVSX1RBUkdFVCxcbiAgT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTLFxufSBmcm9tICcuLi9zaGFyZWQvbGliL2NvbnN0YW50cydcbmltcG9ydCB7XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHMsXG4gIEh0bWxDb250ZXh0LFxuICBIdG1sUHJvcHMsXG59IGZyb20gJy4uL3NoYXJlZC9saWIvdXRpbHMnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0LCBnZXRQYWdlRmlsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBjbGVhbkFtcFBhdGggfSBmcm9tICcuLi9zZXJ2ZXIvdXRpbHMnXG5pbXBvcnQgeyBodG1sRXNjYXBlSnNvblN0cmluZyB9IGZyb20gJy4uL3NlcnZlci9odG1sZXNjYXBlJ1xuaW1wb3J0IFNjcmlwdCwgeyBTY3JpcHRQcm9wcyB9IGZyb20gJy4uL2NsaWVudC9zY3JpcHQnXG5cbmV4cG9ydCB7IERvY3VtZW50Q29udGV4dCwgRG9jdW1lbnRJbml0aWFsUHJvcHMsIERvY3VtZW50UHJvcHMgfVxuXG5leHBvcnQgdHlwZSBPcmlnaW5Qcm9wcyA9IHtcbiAgbm9uY2U/OiBzdHJpbmdcbiAgY3Jvc3NPcmlnaW4/OiBzdHJpbmdcbn1cblxudHlwZSBEb2N1bWVudEZpbGVzID0ge1xuICBzaGFyZWRGaWxlczogcmVhZG9ubHkgc3RyaW5nW11cbiAgcGFnZUZpbGVzOiByZWFkb25seSBzdHJpbmdbXVxuICBhbGxGaWxlczogcmVhZG9ubHkgc3RyaW5nW11cbn1cblxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRGaWxlcyhcbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdCxcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4pOiBEb2N1bWVudEZpbGVzIHtcbiAgY29uc3Qgc2hhcmVkRmlsZXM6IHJlYWRvbmx5IHN0cmluZ1tdID0gZ2V0UGFnZUZpbGVzKGJ1aWxkTWFuaWZlc3QsICcvX2FwcCcpXG4gIGNvbnN0IHBhZ2VGaWxlczogcmVhZG9ubHkgc3RyaW5nW10gPSBpbkFtcE1vZGVcbiAgICA/IFtdXG4gICAgOiBnZXRQYWdlRmlsZXMoYnVpbGRNYW5pZmVzdCwgcGF0aG5hbWUpXG5cbiAgcmV0dXJuIHtcbiAgICBzaGFyZWRGaWxlcyxcbiAgICBwYWdlRmlsZXMsXG4gICAgYWxsRmlsZXM6IFsuLi5uZXcgU2V0KFsuLi5zaGFyZWRGaWxlcywgLi4ucGFnZUZpbGVzXSldLFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBvbHlmaWxsU2NyaXB0cyhjb250ZXh0OiBIdG1sUHJvcHMsIHByb3BzOiBPcmlnaW5Qcm9wcykge1xuICAvLyBwb2x5ZmlsbHMuanMgaGFzIHRvIGJlIHJlbmRlcmVkIGFzIG5vbW9kdWxlIHdpdGhvdXQgYXN5bmNcbiAgLy8gSXQgYWxzbyBoYXMgdG8gYmUgdGhlIGZpcnN0IHNjcmlwdCB0byBsb2FkXG4gIGNvbnN0IHtcbiAgICBhc3NldFByZWZpeCxcbiAgICBidWlsZE1hbmlmZXN0LFxuICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLFxuICB9ID0gY29udGV4dFxuXG4gIHJldHVybiBidWlsZE1hbmlmZXN0LnBvbHlmaWxsRmlsZXNcbiAgICAuZmlsdGVyKFxuICAgICAgKHBvbHlmaWxsKSA9PiBwb2x5ZmlsbC5lbmRzV2l0aCgnLmpzJykgJiYgIXBvbHlmaWxsLmVuZHNXaXRoKCcubW9kdWxlLmpzJylcbiAgICApXG4gICAgLm1hcCgocG9seWZpbGwpID0+IChcbiAgICAgIDxzY3JpcHRcbiAgICAgICAga2V5PXtwb2x5ZmlsbH1cbiAgICAgICAgZGVmZXI9eyFkaXNhYmxlT3B0aW1pemVkTG9hZGluZ31cbiAgICAgICAgbm9uY2U9e3Byb3BzLm5vbmNlfVxuICAgICAgICBjcm9zc09yaWdpbj17cHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTn1cbiAgICAgICAgbm9Nb2R1bGU9e3RydWV9XG4gICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7cG9seWZpbGx9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgLz5cbiAgICApKVxufVxuXG5mdW5jdGlvbiBnZXRQcmVOZXh0U2NyaXB0cyhjb250ZXh0OiBIdG1sUHJvcHMsIHByb3BzOiBPcmlnaW5Qcm9wcykge1xuICBjb25zdCB7IHNjcmlwdExvYWRlciwgZGlzYWJsZU9wdGltaXplZExvYWRpbmcgfSA9IGNvbnRleHRcblxuICByZXR1cm4gKHNjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZSB8fCBbXSkubWFwKFxuICAgIChmaWxlOiBTY3JpcHRQcm9wcywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgeyBzdHJhdGVneSwgLi4uc2NyaXB0UHJvcHMgfSA9IGZpbGVcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICB7Li4uc2NyaXB0UHJvcHN9XG4gICAgICAgICAga2V5PXtzY3JpcHRQcm9wcy5zcmMgfHwgaW5kZXh9XG4gICAgICAgICAgZGVmZXI9eyFkaXNhYmxlT3B0aW1pemVkTG9hZGluZ31cbiAgICAgICAgICBub25jZT17cHJvcHMubm9uY2V9XG4gICAgICAgICAgZGF0YS1uc2NyaXB0PVwiYmVmb3JlSW50ZXJhY3RpdmVcIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtwcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBnZXREeW5hbWljQ2h1bmtzKFxuICBjb250ZXh0OiBIdG1sUHJvcHMsXG4gIHByb3BzOiBPcmlnaW5Qcm9wcyxcbiAgZmlsZXM6IERvY3VtZW50RmlsZXNcbikge1xuICBjb25zdCB7XG4gICAgZHluYW1pY0ltcG9ydHMsXG4gICAgYXNzZXRQcmVmaXgsXG4gICAgaXNEZXZlbG9wbWVudCxcbiAgICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxcbiAgICBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxcbiAgfSA9IGNvbnRleHRcblxuICByZXR1cm4gZHluYW1pY0ltcG9ydHMubWFwKChmaWxlKSA9PiB7XG4gICAgaWYgKCFmaWxlLmVuZHNXaXRoKCcuanMnKSB8fCBmaWxlcy5hbGxGaWxlcy5pbmNsdWRlcyhmaWxlKSkgcmV0dXJuIG51bGxcblxuICAgIHJldHVybiAoXG4gICAgICA8c2NyaXB0XG4gICAgICAgIGFzeW5jPXshaXNEZXZlbG9wbWVudCAmJiBkaXNhYmxlT3B0aW1pemVkTG9hZGluZ31cbiAgICAgICAgZGVmZXI9eyFkaXNhYmxlT3B0aW1pemVkTG9hZGluZ31cbiAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICBmaWxlXG4gICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICBub25jZT17cHJvcHMubm9uY2V9XG4gICAgICAgIGNyb3NzT3JpZ2luPXtwcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOfVxuICAgICAgLz5cbiAgICApXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdldFNjcmlwdHMoXG4gIGNvbnRleHQ6IEh0bWxQcm9wcyxcbiAgcHJvcHM6IE9yaWdpblByb3BzLFxuICBmaWxlczogRG9jdW1lbnRGaWxlc1xuKSB7XG4gIGNvbnN0IHtcbiAgICBhc3NldFByZWZpeCxcbiAgICBidWlsZE1hbmlmZXN0LFxuICAgIGlzRGV2ZWxvcG1lbnQsXG4gICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXG4gIH0gPSBjb250ZXh0XG5cbiAgY29uc3Qgbm9ybWFsU2NyaXB0cyA9IGZpbGVzLmFsbEZpbGVzLmZpbHRlcigoZmlsZSkgPT4gZmlsZS5lbmRzV2l0aCgnLmpzJykpXG4gIGNvbnN0IGxvd1ByaW9yaXR5U2NyaXB0cyA9IGJ1aWxkTWFuaWZlc3QubG93UHJpb3JpdHlGaWxlcz8uZmlsdGVyKChmaWxlKSA9PlxuICAgIGZpbGUuZW5kc1dpdGgoJy5qcycpXG4gIClcblxuICByZXR1cm4gWy4uLm5vcm1hbFNjcmlwdHMsIC4uLmxvd1ByaW9yaXR5U2NyaXB0c10ubWFwKChmaWxlKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzY3JpcHRcbiAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICBmaWxlXG4gICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICBub25jZT17cHJvcHMubm9uY2V9XG4gICAgICAgIGFzeW5jPXshaXNEZXZlbG9wbWVudCAmJiBkaXNhYmxlT3B0aW1pemVkTG9hZGluZ31cbiAgICAgICAgZGVmZXI9eyFkaXNhYmxlT3B0aW1pemVkTG9hZGluZ31cbiAgICAgICAgY3Jvc3NPcmlnaW49e3Byb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59XG4gICAgICAvPlxuICAgIClcbiAgfSlcbn1cblxuLyoqXG4gKiBgRG9jdW1lbnRgIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBpbml0aWFsIGBkb2N1bWVudGAgbWFya3VwIGFuZCByZW5kZXJzIG9ubHkgb24gdGhlIHNlcnZlciBzaWRlLlxuICogQ29tbW9ubHkgdXNlZCBmb3IgaW1wbGVtZW50aW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZyBmb3IgYGNzcy1pbi1qc2AgbGlicmFyaWVzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudDxQID0ge30+IGV4dGVuZHMgQ29tcG9uZW50PERvY3VtZW50UHJvcHMgJiBQPiB7XG4gIC8qKlxuICAgKiBgZ2V0SW5pdGlhbFByb3BzYCBob29rIHJldHVybnMgdGhlIGNvbnRleHQgb2JqZWN0IHdpdGggdGhlIGFkZGl0aW9uIG9mIGByZW5kZXJQYWdlYC5cbiAgICogYHJlbmRlclBhZ2VgIGNhbGxiYWNrIGV4ZWN1dGVzIGBSZWFjdGAgcmVuZGVyaW5nIGxvZ2ljIHN5bmNocm9ub3VzbHkgdG8gc3VwcG9ydCBzZXJ2ZXItcmVuZGVyaW5nIHdyYXBwZXJzXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKFxuICAgIGN0eDogRG9jdW1lbnRDb250ZXh0XG4gICk6IFByb21pc2U8RG9jdW1lbnRJbml0aWFsUHJvcHM+IHtcbiAgICBjb25zdCBlbmhhbmNlQXBwID0gKEFwcDogYW55KSA9PiB7XG4gICAgICByZXR1cm4gKHByb3BzOiBhbnkpID0+IDxBcHAgey4uLnByb3BzfSAvPlxuICAgIH1cblxuICAgIGNvbnN0IHsgaHRtbCwgaGVhZCB9ID0gYXdhaXQgY3R4LnJlbmRlclBhZ2UoeyBlbmhhbmNlQXBwIH0pXG4gICAgY29uc3Qgc3R5bGVzID0gWy4uLmZsdXNoKCldXG4gICAgcmV0dXJuIHsgaHRtbCwgaGVhZCwgc3R5bGVzIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEh0bWw+XG4gICAgICAgIDxIZWFkIC8+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9IdG1sPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gSHRtbChcbiAgcHJvcHM6IFJlYWN0LkRldGFpbGVkSFRNTFByb3BzPFxuICAgIFJlYWN0Lkh0bWxIVE1MQXR0cmlidXRlczxIVE1MSHRtbEVsZW1lbnQ+LFxuICAgIEhUTUxIdG1sRWxlbWVudFxuICA+XG4pIHtcbiAgY29uc3QgeyBpbkFtcE1vZGUsIGRvY0NvbXBvbmVudHNSZW5kZXJlZCwgbG9jYWxlIH0gPSB1c2VDb250ZXh0KEh0bWxDb250ZXh0KVxuXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZC5IdG1sID0gdHJ1ZVxuXG4gIHJldHVybiAoXG4gICAgPGh0bWxcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGxhbmc9e3Byb3BzLmxhbmcgfHwgbG9jYWxlIHx8IHVuZGVmaW5lZH1cbiAgICAgIGFtcD17aW5BbXBNb2RlID8gJycgOiB1bmRlZmluZWR9XG4gICAgICBkYXRhLWFtcGRldm1vZGU9e1xuICAgICAgICBpbkFtcE1vZGUgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICcnIDogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgY2xhc3MgSGVhZCBleHRlbmRzIENvbXBvbmVudDxcbiAgT3JpZ2luUHJvcHMgJlxuICAgIFJlYWN0LkRldGFpbGVkSFRNTFByb3BzPFxuICAgICAgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTEhlYWRFbGVtZW50PixcbiAgICAgIEhUTUxIZWFkRWxlbWVudFxuICAgID5cbj4ge1xuICBzdGF0aWMgY29udGV4dFR5cGUgPSBIdG1sQ29udGV4dFxuXG4gIGNvbnRleHQhOiBSZWFjdC5Db250ZXh0VHlwZTx0eXBlb2YgSHRtbENvbnRleHQ+XG5cbiAgZ2V0Q3NzTGlua3MoZmlsZXM6IERvY3VtZW50RmlsZXMpOiBKU1guRWxlbWVudFtdIHwgbnVsbCB7XG4gICAgY29uc3QgeyBhc3NldFByZWZpeCwgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsIGR5bmFtaWNJbXBvcnRzIH0gPVxuICAgICAgdGhpcy5jb250ZXh0XG4gICAgY29uc3QgY3NzRmlsZXMgPSBmaWxlcy5hbGxGaWxlcy5maWx0ZXIoKGYpID0+IGYuZW5kc1dpdGgoJy5jc3MnKSlcbiAgICBjb25zdCBzaGFyZWRGaWxlczogU2V0PHN0cmluZz4gPSBuZXcgU2V0KGZpbGVzLnNoYXJlZEZpbGVzKVxuXG4gICAgLy8gVW5tYW5hZ2VkIGZpbGVzIGFyZSBDU1MgZmlsZXMgdGhhdCB3aWxsIGJlIGhhbmRsZWQgZGlyZWN0bHkgYnkgdGhlXG4gICAgLy8gd2VicGFjayBydW50aW1lIChgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5gKS5cbiAgICBsZXQgdW5tYW5nZWRGaWxlczogU2V0PHN0cmluZz4gPSBuZXcgU2V0KFtdKVxuICAgIGxldCBkeW5hbWljQ3NzRmlsZXMgPSBBcnJheS5mcm9tKFxuICAgICAgbmV3IFNldChkeW5hbWljSW1wb3J0cy5maWx0ZXIoKGZpbGUpID0+IGZpbGUuZW5kc1dpdGgoJy5jc3MnKSkpXG4gICAgKVxuICAgIGlmIChkeW5hbWljQ3NzRmlsZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBleGlzdGluZyA9IG5ldyBTZXQoY3NzRmlsZXMpXG4gICAgICBkeW5hbWljQ3NzRmlsZXMgPSBkeW5hbWljQ3NzRmlsZXMuZmlsdGVyKFxuICAgICAgICAoZikgPT4gIShleGlzdGluZy5oYXMoZikgfHwgc2hhcmVkRmlsZXMuaGFzKGYpKVxuICAgICAgKVxuICAgICAgdW5tYW5nZWRGaWxlcyA9IG5ldyBTZXQoZHluYW1pY0Nzc0ZpbGVzKVxuICAgICAgY3NzRmlsZXMucHVzaCguLi5keW5hbWljQ3NzRmlsZXMpXG4gICAgfVxuXG4gICAgbGV0IGNzc0xpbmtFbGVtZW50czogSlNYLkVsZW1lbnRbXSA9IFtdXG4gICAgY3NzRmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgY29uc3QgaXNTaGFyZWRGaWxlID0gc2hhcmVkRmlsZXMuaGFzKGZpbGUpXG5cbiAgICAgIGlmICghcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUykge1xuICAgICAgICBjc3NMaW5rRWxlbWVudHMucHVzaChcbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAga2V5PXtgJHtmaWxlfS1wcmVsb2FkYH1cbiAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgYXM9XCJzdHlsZVwiXG4gICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNVbm1hbmFnZWRGaWxlID0gdW5tYW5nZWRGaWxlcy5oYXMoZmlsZSlcbiAgICAgIGNzc0xpbmtFbGVtZW50cy5wdXNoKFxuICAgICAgICA8bGlua1xuICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICBmaWxlXG4gICAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgfVxuICAgICAgICAgIGRhdGEtbi1nPXtpc1VubWFuYWdlZEZpbGUgPyB1bmRlZmluZWQgOiBpc1NoYXJlZEZpbGUgPyAnJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICBkYXRhLW4tcD17aXNVbm1hbmFnZWRGaWxlID8gdW5kZWZpbmVkIDogaXNTaGFyZWRGaWxlID8gdW5kZWZpbmVkIDogJyd9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSlcblxuICAgIGlmIChcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnICYmXG4gICAgICBwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFNcbiAgICApIHtcbiAgICAgIGNzc0xpbmtFbGVtZW50cyA9IHRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChcbiAgICAgICAgY3NzTGlua0VsZW1lbnRzXG4gICAgICApIGFzIFJlYWN0RWxlbWVudFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIGNzc0xpbmtFbGVtZW50cy5sZW5ndGggPT09IDAgPyBudWxsIDogY3NzTGlua0VsZW1lbnRzXG4gIH1cblxuICBnZXRQcmVsb2FkRHluYW1pY0NodW5rcygpIHtcbiAgICBjb25zdCB7IGR5bmFtaWNJbXBvcnRzLCBhc3NldFByZWZpeCwgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcgfSA9XG4gICAgICB0aGlzLmNvbnRleHRcblxuICAgIHJldHVybiAoXG4gICAgICBkeW5hbWljSW1wb3J0c1xuICAgICAgICAubWFwKChmaWxlKSA9PiB7XG4gICAgICAgICAgaWYgKCFmaWxlLmVuZHNXaXRoKCcuanMnKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICAgIC8vIEZpbHRlciBvdXQgbnVsbGVkIHNjcmlwdHNcbiAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgIClcbiAgfVxuXG4gIGdldFByZWxvYWRNYWluTGlua3MoZmlsZXM6IERvY3VtZW50RmlsZXMpOiBKU1guRWxlbWVudFtdIHwgbnVsbCB7XG4gICAgY29uc3QgeyBhc3NldFByZWZpeCwgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsIHNjcmlwdExvYWRlciB9ID1cbiAgICAgIHRoaXMuY29udGV4dFxuICAgIGNvbnN0IHByZWxvYWRGaWxlcyA9IGZpbGVzLmFsbEZpbGVzLmZpbHRlcigoZmlsZTogc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gZmlsZS5lbmRzV2l0aCgnLmpzJylcbiAgICB9KVxuXG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLihzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmUgfHwgW10pLm1hcCgoZmlsZSkgPT4gKFxuICAgICAgICA8bGlua1xuICAgICAgICAgIGtleT17ZmlsZS5zcmN9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgaHJlZj17ZmlsZS5zcmN9XG4gICAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICkpLFxuICAgICAgLi4ucHJlbG9hZEZpbGVzLm1hcCgoZmlsZTogc3RyaW5nKSA9PiAoXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgIGhyZWY9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgKSksXG4gICAgXVxuICB9XG5cbiAgZ2V0RHluYW1pY0NodW5rcyhmaWxlczogRG9jdW1lbnRGaWxlcykge1xuICAgIHJldHVybiBnZXREeW5hbWljQ2h1bmtzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcywgZmlsZXMpXG4gIH1cblxuICBnZXRQcmVOZXh0U2NyaXB0cygpIHtcbiAgICByZXR1cm4gZ2V0UHJlTmV4dFNjcmlwdHModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzKVxuICB9XG5cbiAgZ2V0U2NyaXB0cyhmaWxlczogRG9jdW1lbnRGaWxlcykge1xuICAgIHJldHVybiBnZXRTY3JpcHRzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcywgZmlsZXMpXG4gIH1cblxuICBnZXRQb2x5ZmlsbFNjcmlwdHMoKSB7XG4gICAgcmV0dXJuIGdldFBvbHlmaWxsU2NyaXB0cyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMpXG4gIH1cblxuICBoYW5kbGVEb2N1bWVudFNjcmlwdExvYWRlckl0ZW1zKGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUpOiBSZWFjdE5vZGVbXSB7XG4gICAgY29uc3QgeyBzY3JpcHRMb2FkZXIgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IHNjcmlwdExvYWRlckl0ZW1zOiBTY3JpcHRQcm9wc1tdID0gW11cbiAgICBjb25zdCBmaWx0ZXJlZENoaWxkcmVuOiBSZWFjdE5vZGVbXSA9IFtdXG5cbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCAoY2hpbGQ6IGFueSkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IFNjcmlwdCkge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMuc3RyYXRlZ3kgPT09ICdiZWZvcmVJbnRlcmFjdGl2ZScpIHtcbiAgICAgICAgICBzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmUgPSAoXG4gICAgICAgICAgICBzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmUgfHwgW11cbiAgICAgICAgICApLmNvbmNhdChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC4uLmNoaWxkLnByb3BzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIFsnbGF6eU9ubG9hZCcsICdhZnRlckludGVyYWN0aXZlJ10uaW5jbHVkZXMoY2hpbGQucHJvcHMuc3RyYXRlZ3kpXG4gICAgICAgICkge1xuICAgICAgICAgIHNjcmlwdExvYWRlckl0ZW1zLnB1c2goY2hpbGQucHJvcHMpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZmlsdGVyZWRDaGlsZHJlbi5wdXNoKGNoaWxkKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5zY3JpcHRMb2FkZXIgPSBzY3JpcHRMb2FkZXJJdGVtc1xuXG4gICAgcmV0dXJuIGZpbHRlcmVkQ2hpbGRyZW5cbiAgfVxuXG4gIG1ha2VTdHlsZXNoZWV0SW5lcnQobm9kZTogUmVhY3ROb2RlKTogUmVhY3ROb2RlW10ge1xuICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAobm9kZSwgKGM6IGFueSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBjLnR5cGUgPT09ICdsaW5rJyAmJlxuICAgICAgICBjLnByb3BzWydocmVmJ10gJiZcbiAgICAgICAgT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTLnNvbWUoKHsgdXJsIH0pID0+XG4gICAgICAgICAgYy5wcm9wc1snaHJlZiddLnN0YXJ0c1dpdGgodXJsKVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB7IC4uLihjLnByb3BzIHx8IHt9KSB9XG4gICAgICAgIG5ld1Byb3BzWydkYXRhLWhyZWYnXSA9IG5ld1Byb3BzWydocmVmJ11cbiAgICAgICAgbmV3UHJvcHNbJ2hyZWYnXSA9IHVuZGVmaW5lZFxuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGMsIG5ld1Byb3BzKVxuICAgICAgfSBlbHNlIGlmIChjLnByb3BzICYmIGMucHJvcHNbJ2NoaWxkcmVuJ10pIHtcbiAgICAgICAgYy5wcm9wc1snY2hpbGRyZW4nXSA9IHRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChjLnByb3BzWydjaGlsZHJlbiddKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHN0eWxlcyxcbiAgICAgIGFtcFBhdGgsXG4gICAgICBpbkFtcE1vZGUsXG4gICAgICBoeWJyaWRBbXAsXG4gICAgICBjYW5vbmljYWxCYXNlLFxuICAgICAgX19ORVhUX0RBVEFfXyxcbiAgICAgIGRhbmdlcm91c0FzUGF0aCxcbiAgICAgIGhlYWRUYWdzLFxuICAgICAgdW5zdGFibGVfcnVudGltZUpTLFxuICAgICAgdW5zdGFibGVfSnNQcmVsb2FkLFxuICAgICAgZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuXG4gICAgY29uc3QgZGlzYWJsZVJ1bnRpbWVKUyA9IHVuc3RhYmxlX3J1bnRpbWVKUyA9PT0gZmFsc2VcbiAgICBjb25zdCBkaXNhYmxlSnNQcmVsb2FkID1cbiAgICAgIHVuc3RhYmxlX0pzUHJlbG9hZCA9PT0gZmFsc2UgfHwgIWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nXG5cbiAgICB0aGlzLmNvbnRleHQuZG9jQ29tcG9uZW50c1JlbmRlcmVkLkhlYWQgPSB0cnVlXG5cbiAgICBsZXQgeyBoZWFkIH0gPSB0aGlzLmNvbnRleHRcbiAgICBsZXQgY3NzUHJlbG9hZHM6IEFycmF5PEpTWC5FbGVtZW50PiA9IFtdXG4gICAgbGV0IG90aGVySGVhZEVsZW1lbnRzOiBBcnJheTxKU1guRWxlbWVudD4gPSBbXVxuICAgIGlmIChoZWFkKSB7XG4gICAgICBoZWFkLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGMgJiZcbiAgICAgICAgICBjLnR5cGUgPT09ICdsaW5rJyAmJlxuICAgICAgICAgIGMucHJvcHNbJ3JlbCddID09PSAncHJlbG9hZCcgJiZcbiAgICAgICAgICBjLnByb3BzWydhcyddID09PSAnc3R5bGUnXG4gICAgICAgICkge1xuICAgICAgICAgIGNzc1ByZWxvYWRzLnB1c2goYylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjICYmIG90aGVySGVhZEVsZW1lbnRzLnB1c2goYylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGhlYWQgPSBjc3NQcmVsb2Fkcy5jb25jYXQob3RoZXJIZWFkRWxlbWVudHMpXG4gICAgfVxuICAgIGxldCBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbikuZmlsdGVyKEJvb2xlYW4pXG4gICAgLy8gc2hvdyBhIHdhcm5pbmcgaWYgSGVhZCBjb250YWlucyA8dGl0bGU+IChvbmx5IGluIGRldmVsb3BtZW50KVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgaXNSZWFjdEhlbG1ldCA9IGNoaWxkPy5wcm9wcz8uWydkYXRhLXJlYWN0LWhlbG1ldCddXG4gICAgICAgIGlmICghaXNSZWFjdEhlbG1ldCkge1xuICAgICAgICAgIGlmIChjaGlsZD8udHlwZSA9PT0gJ3RpdGxlJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBcIldhcm5pbmc6IDx0aXRsZT4gc2hvdWxkIG5vdCBiZSB1c2VkIGluIF9kb2N1bWVudC5qcydzIDxIZWFkPi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbm8tZG9jdW1lbnQtdGl0bGVcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBjaGlsZD8udHlwZSA9PT0gJ21ldGEnICYmXG4gICAgICAgICAgICBjaGlsZD8ucHJvcHM/Lm5hbWUgPT09ICd2aWV3cG9ydCdcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgXCJXYXJuaW5nOiB2aWV3cG9ydCBtZXRhIHRhZ3Mgc2hvdWxkIG5vdCBiZSB1c2VkIGluIF9kb2N1bWVudC5qcydzIDxIZWFkPi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbm8tZG9jdW1lbnQtdmlld3BvcnQtbWV0YVwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGlsZFxuICAgICAgfSlcbiAgICAgIGlmICh0aGlzLnByb3BzLmNyb3NzT3JpZ2luKVxuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1dhcm5pbmc6IGBIZWFkYCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnICYmXG4gICAgICBwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMgJiZcbiAgICAgICFpbkFtcE1vZGVcbiAgICApIHtcbiAgICAgIGNoaWxkcmVuID0gdGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGNoaWxkcmVuKVxuICAgIH1cblxuICAgIGNoaWxkcmVuID0gdGhpcy5oYW5kbGVEb2N1bWVudFNjcmlwdExvYWRlckl0ZW1zKGNoaWxkcmVuKVxuXG4gICAgbGV0IGhhc0FtcGh0bWxSZWwgPSBmYWxzZVxuICAgIGxldCBoYXNDYW5vbmljYWxSZWwgPSBmYWxzZVxuXG4gICAgLy8gc2hvdyB3YXJuaW5nIGFuZCByZW1vdmUgY29uZmxpY3RpbmcgYW1wIGhlYWQgdGFnc1xuICAgIGhlYWQgPSBSZWFjdC5DaGlsZHJlbi5tYXAoaGVhZCB8fCBbXSwgKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoIWNoaWxkKSByZXR1cm4gY2hpbGRcbiAgICAgIGNvbnN0IHsgdHlwZSwgcHJvcHMgfSA9IGNoaWxkXG4gICAgICBpZiAoaW5BbXBNb2RlKSB7XG4gICAgICAgIGxldCBiYWRQcm9wOiBzdHJpbmcgPSAnJ1xuXG4gICAgICAgIGlmICh0eXBlID09PSAnbWV0YScgJiYgcHJvcHMubmFtZSA9PT0gJ3ZpZXdwb3J0Jykge1xuICAgICAgICAgIGJhZFByb3AgPSAnbmFtZT1cInZpZXdwb3J0XCInXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2xpbmsnICYmIHByb3BzLnJlbCA9PT0gJ2Nhbm9uaWNhbCcpIHtcbiAgICAgICAgICBoYXNDYW5vbmljYWxSZWwgPSB0cnVlXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3NjcmlwdCcpIHtcbiAgICAgICAgICAvLyBvbmx5IGJsb2NrIGlmXG4gICAgICAgICAgLy8gMS4gaXQgaGFzIGEgc3JjIGFuZCBpc24ndCBwb2ludGluZyB0byBhbXBwcm9qZWN0J3MgQ0ROXG4gICAgICAgICAgLy8gMi4gaXQgaXMgdXNpbmcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgd2l0aG91dCBhIHR5cGUgb3JcbiAgICAgICAgICAvLyBhIHR5cGUgb2YgdGV4dC9qYXZhc2NyaXB0XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHByb3BzLnNyYyAmJiBwcm9wcy5zcmMuaW5kZXhPZignYW1wcHJvamVjdCcpIDwgLTEpIHx8XG4gICAgICAgICAgICAocHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgJiZcbiAgICAgICAgICAgICAgKCFwcm9wcy50eXBlIHx8IHByb3BzLnR5cGUgPT09ICd0ZXh0L2phdmFzY3JpcHQnKSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGJhZFByb3AgPSAnPHNjcmlwdCdcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgICAgICAgICAgIGJhZFByb3AgKz0gYCAke3Byb3B9PVwiJHtwcm9wc1twcm9wXX1cImBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBiYWRQcm9wICs9ICcvPidcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmFkUHJvcCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBGb3VuZCBjb25mbGljdGluZyBhbXAgdGFnIFwiJHtjaGlsZC50eXBlfVwiIHdpdGggY29uZmxpY3RpbmcgcHJvcCAke2JhZFByb3B9IGluICR7X19ORVhUX0RBVEFfXy5wYWdlfS4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvY29uZmxpY3RpbmctYW1wLXRhZ2BcbiAgICAgICAgICApXG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm9uLWFtcCBtb2RlXG4gICAgICAgIGlmICh0eXBlID09PSAnbGluaycgJiYgcHJvcHMucmVsID09PSAnYW1waHRtbCcpIHtcbiAgICAgICAgICBoYXNBbXBodG1sUmVsID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY2hpbGRcbiAgICB9KVxuXG4gICAgLy8gdHJ5IHRvIHBhcnNlIHN0eWxlcyBmcm9tIGZyYWdtZW50IGZvciBiYWNrd2FyZHMgY29tcGF0XG4gICAgY29uc3QgY3VyU3R5bGVzOiBSZWFjdC5SZWFjdEVsZW1lbnRbXSA9IEFycmF5LmlzQXJyYXkoc3R5bGVzKVxuICAgICAgPyAoc3R5bGVzIGFzIFJlYWN0LlJlYWN0RWxlbWVudFtdKVxuICAgICAgOiBbXVxuICAgIGlmIChcbiAgICAgIGluQW1wTW9kZSAmJlxuICAgICAgc3R5bGVzICYmXG4gICAgICAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgIHN0eWxlcy5wcm9wcyAmJlxuICAgICAgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgICBBcnJheS5pc0FycmF5KHN0eWxlcy5wcm9wcy5jaGlsZHJlbilcbiAgICApIHtcbiAgICAgIGNvbnN0IGhhc1N0eWxlcyA9IChlbDogUmVhY3QuUmVhY3RFbGVtZW50KSA9PlxuICAgICAgICBlbD8ucHJvcHM/LmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPy5fX2h0bWxcbiAgICAgIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgICAgc3R5bGVzLnByb3BzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkOiBSZWFjdC5SZWFjdEVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgICAgY2hpbGQuZm9yRWFjaCgoZWwpID0+IGhhc1N0eWxlcyhlbCkgJiYgY3VyU3R5bGVzLnB1c2goZWwpKVxuICAgICAgICB9IGVsc2UgaWYgKGhhc1N0eWxlcyhjaGlsZCkpIHtcbiAgICAgICAgICBjdXJTdHlsZXMucHVzaChjaGlsZClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlczogRG9jdW1lbnRGaWxlcyA9IGdldERvY3VtZW50RmlsZXMoXG4gICAgICB0aGlzLmNvbnRleHQuYnVpbGRNYW5pZmVzdCxcbiAgICAgIHRoaXMuY29udGV4dC5fX05FWFRfREFUQV9fLnBhZ2UsXG4gICAgICBpbkFtcE1vZGVcbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGhlYWQgey4uLnRoaXMucHJvcHN9PlxuICAgICAgICB7dGhpcy5jb250ZXh0LmlzRGV2ZWxvcG1lbnQgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgZGF0YS1uZXh0LWhpZGUtZm91Y1xuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGU9e2luQW1wTW9kZSA/ICd0cnVlJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5e2Rpc3BsYXk6bm9uZX1gLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxub3NjcmlwdFxuICAgICAgICAgICAgICBkYXRhLW5leHQtaGlkZS1mb3VjXG4gICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZT17aW5BbXBNb2RlID8gJ3RydWUnIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXtkaXNwbGF5OmJsb2NrfWAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbm9zY3JpcHQ+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAge3Byb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUyAmJiAoXG4gICAgICAgICAgPG1ldGEgbmFtZT1cIm5leHQtZm9udC1wcmVjb25uZWN0XCIgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2hlYWR9XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cIm5leHQtaGVhZC1jb3VudFwiXG4gICAgICAgICAgY29udGVudD17UmVhY3QuQ2hpbGRyZW4uY291bnQoaGVhZCB8fCBbXSkudG9TdHJpbmcoKX1cbiAgICAgICAgLz5cbiAgICAgICAge2luQW1wTW9kZSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsbWluaW11bS1zY2FsZT0xLGluaXRpYWwtc2NhbGU9MVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgeyFoYXNDYW5vbmljYWxSZWwgJiYgKFxuICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgIHJlbD1cImNhbm9uaWNhbFwiXG4gICAgICAgICAgICAgICAgaHJlZj17Y2Fub25pY2FsQmFzZSArIGNsZWFuQW1wUGF0aChkYW5nZXJvdXNBc1BhdGgpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHsvKiBodHRwczovL3d3dy5hbXBwcm9qZWN0Lm9yZy9kb2NzL2Z1bmRhbWVudGFscy9vcHRpbWl6ZV9hbXAjb3B0aW1pemUtdGhlLWFtcC1ydW50aW1lLWxvYWRpbmcgKi99XG4gICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHsvKiBBZGQgY3VzdG9tIHN0eWxlcyBiZWZvcmUgQU1QIHN0eWxlcyB0byBwcmV2ZW50IGFjY2lkZW50YWwgb3ZlcnJpZGVzICovfVxuICAgICAgICAgICAge3N0eWxlcyAmJiAoXG4gICAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICAgIGFtcC1jdXN0b209XCJcIlxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IGN1clN0eWxlc1xuICAgICAgICAgICAgICAgICAgICAubWFwKChzdHlsZSkgPT4gc3R5bGUucHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sKVxuICAgICAgICAgICAgICAgICAgICAuam9pbignJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcL1xcKiMgc291cmNlTWFwcGluZ1VSTD0uKlxcKlxcLy9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcL1xcKkAgc291cmNlVVJMPS4qP1xcKlxcLy9nLCAnJyksXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgYW1wLWJvaWxlcnBsYXRlPVwiXCJcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5ey13ZWJraXQtYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1vei1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDstbXMtYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7YW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGh9QC13ZWJraXQta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtbW96LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1zLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW8ta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUBrZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19YCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bm9zY3JpcHQ+XG4gICAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICAgIGFtcC1ib2lsZXJwbGF0ZT1cIlwiXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7LXdlYmtpdC1hbmltYXRpb246bm9uZTstbW96LWFuaW1hdGlvbjpub25lOy1tcy1hbmltYXRpb246bm9uZTthbmltYXRpb246bm9uZX1gLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L25vc2NyaXB0PlxuICAgICAgICAgICAgPHNjcmlwdCBhc3luYyBzcmM9XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC5qc1wiIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHshaW5BbXBNb2RlICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgeyFoYXNBbXBodG1sUmVsICYmIGh5YnJpZEFtcCAmJiAoXG4gICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgcmVsPVwiYW1waHRtbFwiXG4gICAgICAgICAgICAgICAgaHJlZj17Y2Fub25pY2FsQmFzZSArIGdldEFtcFBhdGgoYW1wUGF0aCwgZGFuZ2Vyb3VzQXNQYXRoKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7IXByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MgJiYgdGhpcy5nZXRDc3NMaW5rcyhmaWxlcyl9XG4gICAgICAgICAgICB7IXByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MgJiYgKFxuICAgICAgICAgICAgICA8bm9zY3JpcHQgZGF0YS1uLWNzcz17dGhpcy5wcm9wcy5ub25jZSA/PyAnJ30gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7cHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0lNQUdFUyAmJiAoXG4gICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJuZXh0LWltYWdlLXByZWxvYWRcIiAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZUpzUHJlbG9hZCAmJlxuICAgICAgICAgICAgICB0aGlzLmdldFByZWxvYWREeW5hbWljQ2h1bmtzKCl9XG4gICAgICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiZcbiAgICAgICAgICAgICAgIWRpc2FibGVKc1ByZWxvYWQgJiZcbiAgICAgICAgICAgICAgdGhpcy5nZXRQcmVsb2FkTWFpbkxpbmtzKGZpbGVzKX1cbiAgICAgICAgICAgIHshZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiZcbiAgICAgICAgICAgICAgIWRpc2FibGVSdW50aW1lSlMgJiZcbiAgICAgICAgICAgICAgdGhpcy5nZXRQb2x5ZmlsbFNjcmlwdHMoKX1cbiAgICAgICAgICAgIHshZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiZcbiAgICAgICAgICAgICAgIWRpc2FibGVSdW50aW1lSlMgJiZcbiAgICAgICAgICAgICAgdGhpcy5nZXRQcmVOZXh0U2NyaXB0cygpfVxuICAgICAgICAgICAgeyFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZVJ1bnRpbWVKUyAmJlxuICAgICAgICAgICAgICB0aGlzLmdldER5bmFtaWNDaHVua3MoZmlsZXMpfVxuICAgICAgICAgICAgeyFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZVJ1bnRpbWVKUyAmJlxuICAgICAgICAgICAgICB0aGlzLmdldFNjcmlwdHMoZmlsZXMpfVxuICAgICAgICAgICAge3Byb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MgJiYgdGhpcy5nZXRDc3NMaW5rcyhmaWxlcyl9XG4gICAgICAgICAgICB7cHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyAmJiAoXG4gICAgICAgICAgICAgIDxub3NjcmlwdCBkYXRhLW4tY3NzPXt0aGlzLnByb3BzLm5vbmNlID8/ICcnfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuaXNEZXZlbG9wbWVudCAmJiAoXG4gICAgICAgICAgICAgIC8vIHRoaXMgZWxlbWVudCBpcyB1c2VkIHRvIG1vdW50IGRldmVsb3BtZW50IHN0eWxlcyBzbyB0aGVcbiAgICAgICAgICAgICAgLy8gb3JkZXJpbmcgbWF0Y2hlcyBwcm9kdWN0aW9uXG4gICAgICAgICAgICAgIC8vIChieSBkZWZhdWx0LCBzdHlsZS1sb2FkZXIgaW5qZWN0cyBhdCB0aGUgYm90dG9tIG9mIDxoZWFkIC8+KVxuICAgICAgICAgICAgICA8bm9zY3JpcHQgaWQ9XCJfX25leHRfY3NzX19ET19OT1RfVVNFX19cIiAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzdHlsZXMgfHwgbnVsbH1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIHt9LCAuLi4oaGVhZFRhZ3MgfHwgW10pKX1cbiAgICAgIDwvaGVhZD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1haW4oKSB7XG4gIGNvbnN0IHsgaW5BbXBNb2RlLCBkb2NDb21wb25lbnRzUmVuZGVyZWQgfSA9IHVzZUNvbnRleHQoSHRtbENvbnRleHQpXG5cbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLk1haW4gPSB0cnVlXG5cbiAgaWYgKGluQW1wTW9kZSkgcmV0dXJuIDw+e0JPRFlfUkVOREVSX1RBUkdFVH08Lz5cbiAgcmV0dXJuIDxkaXYgaWQ9XCJfX25leHRcIj57Qk9EWV9SRU5ERVJfVEFSR0VUfTwvZGl2PlxufVxuXG5leHBvcnQgY2xhc3MgTmV4dFNjcmlwdCBleHRlbmRzIENvbXBvbmVudDxPcmlnaW5Qcm9wcz4ge1xuICBzdGF0aWMgY29udGV4dFR5cGUgPSBIdG1sQ29udGV4dFxuXG4gIGNvbnRleHQhOiBSZWFjdC5Db250ZXh0VHlwZTx0eXBlb2YgSHRtbENvbnRleHQ+XG5cbiAgLy8gU291cmNlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9zYW10aG9yLzY0YjExNGU0YTRmNTM5OTE1YTk1YjkxZmZkMzQwYWNjXG4gIHN0YXRpYyBzYWZhcmlOb21vZHVsZUZpeCA9XG4gICAgJyFmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LHQ9ZS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2lmKCEoXCJub01vZHVsZVwiaW4gdCkmJlwib25iZWZvcmVsb2FkXCJpbiB0KXt2YXIgbj0hMTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmVsb2FkXCIsZnVuY3Rpb24oZSl7aWYoZS50YXJnZXQ9PT10KW49ITA7ZWxzZSBpZighZS50YXJnZXQuaGFzQXR0cmlidXRlKFwibm9tb2R1bGVcIil8fCFuKXJldHVybjtlLnByZXZlbnREZWZhdWx0KCl9LCEwKSx0LnR5cGU9XCJtb2R1bGVcIix0LnNyYz1cIi5cIixlLmhlYWQuYXBwZW5kQ2hpbGQodCksdC5yZW1vdmUoKX19KCk7J1xuXG4gIGdldER5bmFtaWNDaHVua3MoZmlsZXM6IERvY3VtZW50RmlsZXMpIHtcbiAgICByZXR1cm4gZ2V0RHluYW1pY0NodW5rcyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMsIGZpbGVzKVxuICB9XG5cbiAgZ2V0UHJlTmV4dFNjcmlwdHMoKSB7XG4gICAgcmV0dXJuIGdldFByZU5leHRTY3JpcHRzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcylcbiAgfVxuXG4gIGdldFNjcmlwdHMoZmlsZXM6IERvY3VtZW50RmlsZXMpIHtcbiAgICByZXR1cm4gZ2V0U2NyaXB0cyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMsIGZpbGVzKVxuICB9XG5cbiAgZ2V0UG9seWZpbGxTY3JpcHRzKCkge1xuICAgIHJldHVybiBnZXRQb2x5ZmlsbFNjcmlwdHModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzKVxuICB9XG5cbiAgc3RhdGljIGdldElubGluZVNjcmlwdFNvdXJjZShjb250ZXh0OiBSZWFkb25seTxIdG1sUHJvcHM+KTogc3RyaW5nIHtcbiAgICBjb25zdCB7IF9fTkVYVF9EQVRBX18gfSA9IGNvbnRleHRcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KF9fTkVYVF9EQVRBX18pXG4gICAgICByZXR1cm4gaHRtbEVzY2FwZUpzb25TdHJpbmcoZGF0YSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIubWVzc2FnZS5pbmRleE9mKCdjaXJjdWxhciBzdHJ1Y3R1cmUnKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYENpcmN1bGFyIHN0cnVjdHVyZSBpbiBcImdldEluaXRpYWxQcm9wc1wiIHJlc3VsdCBvZiBwYWdlIFwiJHtfX05FWFRfREFUQV9fLnBhZ2V9XCIuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2NpcmN1bGFyLXN0cnVjdHVyZWBcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgaW5BbXBNb2RlLFxuICAgICAgYnVpbGRNYW5pZmVzdCxcbiAgICAgIHVuc3RhYmxlX3J1bnRpbWVKUyxcbiAgICAgIGRvY0NvbXBvbmVudHNSZW5kZXJlZCxcbiAgICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgICAgZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IGRpc2FibGVSdW50aW1lSlMgPSB1bnN0YWJsZV9ydW50aW1lSlMgPT09IGZhbHNlXG5cbiAgICBkb2NDb21wb25lbnRzUmVuZGVyZWQuTmV4dFNjcmlwdCA9IHRydWVcblxuICAgIGlmIChpbkFtcE1vZGUpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFtcERldkZpbGVzID0gW1xuICAgICAgICAuLi5idWlsZE1hbmlmZXN0LmRldkZpbGVzLFxuICAgICAgICAuLi5idWlsZE1hbmlmZXN0LnBvbHlmaWxsRmlsZXMsXG4gICAgICAgIC4uLmJ1aWxkTWFuaWZlc3QuYW1wRGV2RmlsZXMsXG4gICAgICBdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge2Rpc2FibGVSdW50aW1lSlMgPyBudWxsIDogKFxuICAgICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgICBpZD1cIl9fTkVYVF9EQVRBX19cIlxuICAgICAgICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IE5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKHRoaXMuY29udGV4dCksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHthbXBEZXZGaWxlcy5tYXAoKGZpbGUpID0+IChcbiAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2ZpbGV9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNyb3NzT3JpZ2luKVxuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1dhcm5pbmc6IGBOZXh0U2NyaXB0YCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IGZpbGVzOiBEb2N1bWVudEZpbGVzID0gZ2V0RG9jdW1lbnRGaWxlcyhcbiAgICAgIHRoaXMuY29udGV4dC5idWlsZE1hbmlmZXN0LFxuICAgICAgdGhpcy5jb250ZXh0Ll9fTkVYVF9EQVRBX18ucGFnZSxcbiAgICAgIGluQW1wTW9kZVxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgYnVpbGRNYW5pZmVzdC5kZXZGaWxlc1xuICAgICAgICAgID8gYnVpbGRNYW5pZmVzdC5kZXZGaWxlcy5tYXAoKGZpbGU6IHN0cmluZykgPT4gKFxuICAgICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgICB7ZGlzYWJsZVJ1bnRpbWVKUyA/IG51bGwgOiAoXG4gICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgaWQ9XCJfX05FWFRfREFUQV9fXCJcbiAgICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogTmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UodGhpcy5jb250ZXh0KSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2Rpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmXG4gICAgICAgICAgIWRpc2FibGVSdW50aW1lSlMgJiZcbiAgICAgICAgICB0aGlzLmdldFBvbHlmaWxsU2NyaXB0cygpfVxuICAgICAgICB7ZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiZcbiAgICAgICAgICAhZGlzYWJsZVJ1bnRpbWVKUyAmJlxuICAgICAgICAgIHRoaXMuZ2V0UHJlTmV4dFNjcmlwdHMoKX1cbiAgICAgICAge2Rpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmXG4gICAgICAgICAgIWRpc2FibGVSdW50aW1lSlMgJiZcbiAgICAgICAgICB0aGlzLmdldER5bmFtaWNDaHVua3MoZmlsZXMpfVxuICAgICAgICB7ZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiYgIWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRTY3JpcHRzKGZpbGVzKX1cbiAgICAgIDwvPlxuICAgIClcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBbXBQYXRoKGFtcFBhdGg6IHN0cmluZywgYXNQYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYW1wUGF0aCB8fCBgJHthc1BhdGh9JHthc1BhdGguaW5jbHVkZXMoJz8nKSA/ICcmJyA6ICc/J31hbXA9MWBcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19kb2N1bWVudCcpXG4iLCJpbXBvcnQgeyBIdG1sLCBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSAnbmV4dC9kb2N1bWVudCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY3VtZW50KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SHRtbCBsYW5nPVwiZW5cIiBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmc+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiLz5cclxuICAgICAgICB7LyogPG1ldGEgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiBuYW1lPVwidmlld3BvcnRcIiAvPiAqL31cclxuXHJcbiAgICAgICAgPHRpdGxlPkhpZGF5YXQgQmVyc2F1ZGFyYSBBYmFkaTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgY29udGVudD1cIlwiIG5hbWU9XCJkZXNjcmlwdGlvblwiLz5cclxuICAgICAgICA8bWV0YSBjb250ZW50PVwiXCIgbmFtZT1cImtleXdvcmRzXCIvPlxyXG5cclxuICAgICAgICA8bGluayBocmVmPVwiYXNzZXRzL2ltZy9oYmEucG5nXCIgcmVsPVwiaWNvblwiLz5cclxuICAgICAgICA8bGluayBocmVmPVwiYXNzZXRzL2ltZy9oYmEucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiLz5cclxuXHJcbiAgICAgICAgey8qIDxsaW5rIFxyXG4gICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjMwMCwzMDBpLDQwMCw0MDBpLDYwMCw2MDBpLDcwMCw3MDBpfFJhbGV3YXk6MzAwLDMwMGksNDAwLDQwMGksNTAwLDUwMGksNjAwLDYwMGksNzAwLDcwMGl8UG9wcGluczozMDAsMzAwaSw0MDAsNDAwaSw1MDAsNTAwaSw2MDAsNjAwaSw3MDAsNzAwaVwiIFxyXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIiAvPiAqL31cclxuICAgICAgICBcclxuXHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGJvZHk+XHJcbiAgICAgICAgPE1haW4vPlxyXG4gICAgICAgIDxOZXh0U2NyaXB0Lz5cclxuICAgICAgPC9ib2R5PlxyXG4gICAgPC9IdG1sPlxyXG4gIClcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zZXJ2ZXJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==