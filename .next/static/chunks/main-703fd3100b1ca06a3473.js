_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[14],{

/***/ "/9Lk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__("iQBx");

var _createClass = __webpack_require__("epNI");

var _inherits = __webpack_require__("zmGa");

var _possibleConstructorReturn = __webpack_require__("isXc");

var _getPrototypeOf = __webpack_require__("OWMz");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__("fhWJ"));

var _head = _interopRequireDefault(__webpack_require__("zWek"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps(_ref) {
  var res = _ref.res,
      err = _ref.err;
  var statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
}

var Error1 = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(Error1, _react$default$Compon);

  var _super = _createSuper(Error1);

  function Error1() {
    _classCallCheck(this, Error1);

    return _super.apply(this, arguments);
  }

  _createClass(Error1, [{
    key: "render",
    value: function render() {
      var statusCode = this.props.statusCode;
      var title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.error
      }, /*#__PURE__*/_react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("title", null, statusCode ? "".concat(statusCode, ": ").concat(title) : 'Application error: a client-side exception has occurred')), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("style", {
        dangerouslySetInnerHTML: {
          __html: 'body { margin: 0 }'
        }
      }), statusCode ? /*#__PURE__*/_react["default"].createElement("h1", {
        style: styles.h1
      }, statusCode) : null, /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.desc
      }, /*#__PURE__*/_react["default"].createElement("h2", {
        style: styles.h2
      }, this.props.title || statusCode ? title : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Application error: a client-side exception has occurred (see the browser console for more information)"), "."))));
    }
  }]);

  return Error1;
}(_react["default"].Component);

Error1.displayName = 'ErrorPage';
Error1.getInitialProps = _getInitialProps;
Error1.origGetInitialProps = _getInitialProps;
exports["default"] = Error1;
var styles = {
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

/***/ "18Vp":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports=function(){var e={770:function(e,t){!function(e,n){true?n(t):undefined}(this,function(e){"use strict";var t,n,i,r,a=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},o=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver(function(e){return e.getEntries().map(t)});return n.observe({type:e,buffered:!0}),n}}catch(e){}},u=function(e,t){var i=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",i,!0),addEventListener("pagehide",i,!0)},c=function(e){addEventListener("pageshow",function(t){t.persisted&&e(t)},!0)},s=function(e,t,n){var i;return function(r){t.value>=0&&(r||n)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)))}},f=-1,v=function(){return"hidden"===document.visibilityState?0:1/0},m=function(){u(function(e){var t=e.timeStamp;f=t},!0)},p=function(){return f<0&&(f=v(),m(),c(function(){setTimeout(function(){f=v(),m()},0)})),{get firstHiddenTime(){return f}}},d=function(e,t){var n,i=p(),r=a("FCP"),u=function(e){"first-contentful-paint"===e.name&&(v&&v.disconnect(),e.startTime<i.firstHiddenTime&&(r.value=e.startTime,r.entries.push(e),n(!0)))},f=performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],v=f?null:o("paint",u);(f||v)&&(n=s(e,r,t),f&&u(f),c(function(i){r=a("FCP"),n=s(e,r,t),requestAnimationFrame(function(){requestAnimationFrame(function(){r.value=performance.now()-i.timeStamp,n(!0)})})}))},l=!1,g=-1,h={passive:!0,capture:!0},y=new Date,T=function(e,r){t||(t=r,n=e,i=new Date,w(removeEventListener),_())},_=function(){if(n>=0&&n<i-y){var e={entryType:"first-input",name:t.type,target:t.target,cancelable:t.cancelable,startTime:t.timeStamp,processingStart:t.timeStamp+n};r.forEach(function(t){t(e)}),r=[]}},E=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){T(e,t),r()},i=function(){r()},r=function(){removeEventListener("pointerup",n,h),removeEventListener("pointercancel",i,h)};addEventListener("pointerup",n,h),addEventListener("pointercancel",i,h)}(t,e):T(t,e)}},w=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach(function(t){return e(t,E,h)})},S=new Set;e.getCLS=function(e,t){l||(d(function(e){g=e.value}),l=!0);var n,i=function(t){g>-1&&e(t)},r=a("CLS",0),f=0,v=[],m=function(e){if(!e.hadRecentInput){var t=v[0],i=v[v.length-1];f&&e.startTime-i.startTime<1e3&&e.startTime-t.startTime<5e3?(f+=e.value,v.push(e)):(f=e.value,v=[e]),f>r.value&&(r.value=f,r.entries=v,n())}},p=o("layout-shift",m);p&&(n=s(i,r,t),u(function(){p.takeRecords().map(m),n(!0)}),c(function(){f=0,g=-1,r=a("CLS",0),n=s(i,r,t)}))},e.getFCP=d,e.getFID=function(e,i){var f,v=p(),m=a("FID"),d=function(e){e.startTime<v.firstHiddenTime&&(m.value=e.processingStart-e.startTime,m.entries.push(e),f(!0))},l=o("first-input",d);f=s(e,m,i),l&&u(function(){l.takeRecords().map(d),l.disconnect()},!0),l&&c(function(){var o;m=a("FID"),f=s(e,m,i),r=[],n=-1,t=null,w(addEventListener),o=d,r.push(o),_()})},e.getLCP=function(e,t){var n,i=p(),r=a("LCP"),f=function(e){var t=e.startTime;t<i.firstHiddenTime&&(r.value=t,r.entries.push(e)),n()},v=o("largest-contentful-paint",f);if(v){n=s(e,r,t);var m=function(){S.has(r.id)||(v.takeRecords().map(f),v.disconnect(),S.add(r.id),n(!0))};["keydown","click"].forEach(function(e){addEventListener(e,m,{once:!0,capture:!0})}),u(m,!0),c(function(i){r=a("LCP"),n=s(e,r,t),requestAnimationFrame(function(){requestAnimationFrame(function(){r.value=performance.now()-i.timeStamp,S.add(r.id),n(!0)})})})}},e.getTTFB=function(e){var t,n=a("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();if(n.value=n.delta=t.responseStart,n.value<0)return;n.entries=[t],e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)},Object.defineProperty(e,"__esModule",{value:!0})})}};var t={};function __nccwpck_require__(n){if(t[n]){return t[n].exports}var i=t[n]={exports:{}};var r=true;try{e[n].call(i.exports,i,i.exports,__nccwpck_require__);r=false}finally{if(r)delete t[n]}return i.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(770)}();
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "3HD9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _webVitals = __webpack_require__("18Vp");

var initialHref = location.href;
var isRegistered = false;
var userReportHandler;

function onReport(metric) {
  if (userReportHandler) {
    userReportHandler(metric);
  } // This code is not shipped, executed, or present in the client-side
  // JavaScript bundle unless explicitly enabled in your application.
  //
  // When this feature is enabled, we'll make it very clear by printing a
  // message during the build (`next build`).


  if (false) { var send, vitalsUrl, blob, body, fallbackSend; }
}

var _default = function _default(onPerfEntry) {
  // Update function if it changes:
  userReportHandler = onPerfEntry; // Only register listeners once:

  if (isRegistered) {
    return;
  }

  isRegistered = true;
  (0, _webVitals).getCLS(onReport);
  (0, _webVitals).getFID(onReport);
  (0, _webVitals).getFCP(onReport);
  (0, _webVitals).getLCP(onReport);
  (0, _webVitals).getTTFB(onReport);
};

exports["default"] = _default;

/***/ }),

/***/ "82QL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__("K2X+");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Portal = void 0;

var _react = _interopRequireDefault(__webpack_require__("fhWJ"));

var _reactDom = __webpack_require__("qC97");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var Portal = function Portal(_ref) {
  var children = _ref.children,
      type = _ref.type;

  var portalNode = _react["default"].useRef(null);

  var _react$default$useSta = _react["default"].useState(),
      _react$default$useSta2 = _slicedToArray(_react$default$useSta, 2),
      forceUpdate = _react$default$useSta2[1];

  _react["default"].useEffect(function () {
    portalNode.current = document.createElement(type);
    document.body.appendChild(portalNode.current);
    forceUpdate({});
    return function () {
      if (portalNode.current) {
        document.body.removeChild(portalNode.current);
      }
    };
  }, [type]);

  return portalNode.current ? /*#__PURE__*/(0, _reactDom).createPortal(children, portalNode.current) : null;
};

exports.Portal = Portal;

/***/ }),

/***/ "BJuT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__("K2X+");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initScriptLoader = initScriptLoader;
exports["default"] = void 0;

var _react = __webpack_require__("fhWJ");

var _headManagerContext = __webpack_require__("Qo88");

var _headManager = __webpack_require__("uEII");

var _requestIdleCallback = __webpack_require__("9ian");

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

var ScriptCache = new Map();
var LoadCache = new Set();
var ignoreProps = ['onLoad', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy'];

var loadScript = function loadScript(props) {
  var src = props.src,
      id = props.id,
      _props$onLoad = props.onLoad,
      onLoad = _props$onLoad === void 0 ? function () {} : _props$onLoad,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML,
      _props$children = props.children,
      children = _props$children === void 0 ? '' : _props$children,
      _props$strategy = props.strategy,
      strategy = _props$strategy === void 0 ? 'afterInteractive' : _props$strategy,
      onError = props.onError;
  var cacheKey = id || src; // Script has already loaded

  if (cacheKey && LoadCache.has(cacheKey)) {
    return;
  } // Contents of this script are already loading/loaded


  if (ScriptCache.has(src)) {
    LoadCache.add(cacheKey); // Execute onLoad since the script loading has begun

    ScriptCache.get(src).then(onLoad, onError);
    return;
  }

  var el = document.createElement('script');
  var loadPromise = new Promise(function (resolve, reject) {
    el.addEventListener('load', function (e) {
      resolve();

      if (onLoad) {
        onLoad.call(this, e);
      }
    });
    el.addEventListener('error', function (e) {
      reject(e);
    });
  })["catch"](function (e) {
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

  for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        k = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    var attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  el.setAttribute('data-nscript', strategy);
  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  var _props$strategy2 = props.strategy,
      strategy = _props$strategy2 === void 0 ? 'afterInteractive' : _props$strategy2;

  if (strategy === 'afterInteractive') {
    loadScript(props);
  } else if (strategy === 'lazyOnload') {
    window.addEventListener('load', function () {
      (0, _requestIdleCallback).requestIdleCallback(function () {
        return loadScript(props);
      });
    });
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback).requestIdleCallback(function () {
      return loadScript(props);
    });
  } else {
    window.addEventListener('load', function () {
      (0, _requestIdleCallback).requestIdleCallback(function () {
        return loadScript(props);
      });
    });
  }
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
}

function Script(props) {
  var _props$src = props.src,
      src = _props$src === void 0 ? '' : _props$src,
      _props$onLoad2 = props.onLoad,
      onLoad = _props$onLoad2 === void 0 ? function () {} : _props$onLoad2,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML,
      _props$strategy3 = props.strategy,
      strategy = _props$strategy3 === void 0 ? 'afterInteractive' : _props$strategy3,
      onError = props.onError,
      restProps = _objectWithoutProperties(props, ["src", "onLoad", "dangerouslySetInnerHTML", "strategy", "onError"]); // Context is available only during SSR


  var _useContext = (0, _react).useContext(_headManagerContext.HeadManagerContext),
      updateScripts = _useContext.updateScripts,
      scripts = _useContext.scripts,
      getIsSsr = _useContext.getIsSsr;

  (0, _react).useEffect(function () {
    if (strategy === 'afterInteractive') {
      loadScript(props);
    } else if (strategy === 'lazyOnload') {
      loadLazyScript(props);
    }
  }, [props, strategy]);

  if (strategy === 'beforeInteractive') {
    if (updateScripts) {
      scripts.beforeInteractive = (scripts.beforeInteractive || []).concat([_objectSpread({
        src: src,
        onLoad: onLoad,
        onError: onError
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
exports["default"] = _default;

/***/ }),

/***/ "Z703":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__("iQBx");

var _createClass = __webpack_require__("epNI");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _router = __webpack_require__("KeBg");

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("JkqG"));

var _isDynamic = __webpack_require__("qvsF");

var _parseRelativeUrl = __webpack_require__("Gczk");

var _normalizeTrailingSlash = __webpack_require__("R73X");

var _routeLoader = __webpack_require__("Mkay");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function normalizeRoute(route) {
  if (route[0] !== '/') {
    throw new Error("Route name should start with a \"/\", got \"".concat(route, "\""));
  }

  if (route === '/') return route;
  return route.replace(/\/$/, '');
}

var PageLoader = /*#__PURE__*/function () {
  function PageLoader(buildId, assetPrefix) {
    _classCallCheck(this, PageLoader);

    this.routeLoader = (0, _routeLoader).createRouteLoader(assetPrefix);
    this.buildId = buildId;
    this.assetPrefix = assetPrefix;
    /** @type {Promise<Set<string>>} */

    this.promisedSsgManifest = new Promise(function (resolve) {
      if (window.__SSG_MANIFEST) {
        resolve(window.__SSG_MANIFEST);
      } else {
        window.__SSG_MANIFEST_CB = function () {
          resolve(window.__SSG_MANIFEST);
        };
      }
    });
  }

  _createClass(PageLoader, [{
    key: "getPageList",
    value: function getPageList() {
      if (true) {
        return (0, _routeLoader).getClientBuildManifest().then(function (manifest) {
          return manifest.sortedPages;
        });
      } else {}
    }
    /**
    * @param {string} href the route href (file-system path)
    * @param {string} asPath the URL as shown in browser (virtual path); used for dynamic routes
    * @returns {string}
    */

  }, {
    key: "getDataHref",
    value: function getDataHref(href, asPath, ssg, locale) {
      var _this = this;

      var _parseRelativeUrl2 = (0, _parseRelativeUrl).parseRelativeUrl(href),
          hrefPathname = _parseRelativeUrl2.pathname,
          query = _parseRelativeUrl2.query,
          search = _parseRelativeUrl2.search;

      var _parseRelativeUrl3 = (0, _parseRelativeUrl).parseRelativeUrl(asPath),
          asPathname = _parseRelativeUrl3.pathname;

      var route = normalizeRoute(hrefPathname);

      var getHrefForSlug = function getHrefForSlug(path) {
        var dataRoute = (0, _getAssetPathFromRoute)["default"]((0, _normalizeTrailingSlash).removePathTrailingSlash((0, _router).addLocale(path, locale)), '.json');
        return (0, _router).addBasePath("/_next/data/".concat(_this.buildId).concat(dataRoute).concat(ssg ? '' : search));
      };

      var isDynamic = (0, _isDynamic).isDynamicRoute(route);
      var interpolatedRoute = isDynamic ? (0, _router).interpolateAs(hrefPathname, asPathname, query).result : '';
      return isDynamic ? interpolatedRoute && getHrefForSlug(interpolatedRoute) : getHrefForSlug(route);
    }
    /**
    * @param {string} route - the route (file-system path)
    */

  }, {
    key: "_isSsg",
    value: function _isSsg(route) {
      return this.promisedSsgManifest.then(function (s) {
        return s.has(route);
      });
    }
  }, {
    key: "loadPage",
    value: function loadPage(route) {
      return this.routeLoader.loadRoute(route).then(function (res) {
        if ('component' in res) {
          return {
            page: res.component,
            mod: res.exports,
            styleSheets: res.styles.map(function (o) {
              return {
                href: o.href,
                text: o.content
              };
            })
          };
        }

        throw res.error;
      });
    }
  }, {
    key: "prefetch",
    value: function prefetch(route) {
      return this.routeLoader.prefetch(route);
    }
  }]);

  return PageLoader;
}();

exports["default"] = PageLoader;

/***/ }),

/***/ "d602":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__("K2X+");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RouteAnnouncer = RouteAnnouncer;
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__("fhWJ"));

var _router = __webpack_require__("qGJC");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function RouteAnnouncer() {
  var _useRouter = (0, _router).useRouter(),
      asPath = _useRouter.asPath;

  var _react$default$useSta = _react["default"].useState(''),
      _react$default$useSta2 = _slicedToArray(_react$default$useSta, 2),
      routeAnnouncement = _react$default$useSta2[0],
      setRouteAnnouncement = _react$default$useSta2[1]; // Only announce the path change, but not for the first load because screen reader will do that automatically.


  var initialPathLoaded = _react["default"].useRef(false); // Every time the path changes, announce the route change. The announcement will be prioritized by h1, then title
  // (from metadata), and finally if those don't exist, then the pathName that is in the URL. This methodology is
  // inspired by Marcy Sutton's accessible client routing user testing. More information can be found here:
  // https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/


  _react["default"].useEffect(function () {
    if (!initialPathLoaded.current) {
      initialPathLoaded.current = true;
      return;
    }

    var newRouteAnnouncement;
    var pageHeader = document.querySelector('h1');

    if (pageHeader) {
      newRouteAnnouncement = pageHeader.innerText || pageHeader.textContent;
    }

    if (!newRouteAnnouncement) {
      if (document.title) {
        newRouteAnnouncement = document.title;
      } else {
        newRouteAnnouncement = asPath;
      }
    }

    setRouteAnnouncement(newRouteAnnouncement);
  }, // TODO: switch to pathname + query object of dynamic route requirements
  [asPath]);

  return /*#__PURE__*/_react["default"].createElement("p", {
    "aria-live": "assertive" // Make the announcement immediately.
    ,
    id: "__next-route-announcer__",
    role: "alert",
    style: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: '1px',
      // https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
      whiteSpace: 'nowrap',
      wordWrap: 'normal'
    }
  }, routeAnnouncement);
}

var _default = RouteAnnouncer;
exports["default"] = _default;

/***/ }),

/***/ "fIUa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setConfig = setConfig;
exports["default"] = void 0;
var runtimeConfig;

var _default = function _default() {
  return runtimeConfig;
};

exports["default"] = _default;

function setConfig(configValue) {
  runtimeConfig = configValue;
}

/***/ }),

/***/ "ljXV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__("tGz5");

window.next = {
  version: _.version,

  // router is initialized later so it has to be live-binded
  get router() {
    return _.router;
  },

  emitter: _.emitter,
  render: _.render,
  renderError: _.renderError
};
(0, _).initNext()["catch"](console.error);

/***/ }),

/***/ "tGz5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__("+4Qm");

var _classCallCheck = __webpack_require__("iQBx");

var _createClass = __webpack_require__("epNI");

var _inherits = __webpack_require__("zmGa");

var _possibleConstructorReturn = __webpack_require__("isXc");

var _getPrototypeOf = __webpack_require__("OWMz");

var _slicedToArray = __webpack_require__("K2X+");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initNext = initNext;
exports.render = render;
exports.renderError = renderError;
exports.emitter = exports.version = exports.router = void 0;

__webpack_require__("uv0t");

var _react = _interopRequireDefault(__webpack_require__("fhWJ"));

var _reactDom = _interopRequireDefault(__webpack_require__("qC97"));

var _headManagerContext = __webpack_require__("Qo88");

var _mitt = _interopRequireDefault(__webpack_require__("7+NJ"));

var _routerContext = __webpack_require__("WWTe");

var _router = __webpack_require__("KeBg");

var _isDynamic = __webpack_require__("qvsF");

var _querystring = __webpack_require__("sDZu");

var _runtimeConfig = __webpack_require__("fIUa");

var _utils = __webpack_require__("ZVed");

var _portal = __webpack_require__("82QL");

var _headManager = _interopRequireDefault(__webpack_require__("uEII"));

var _pageLoader = _interopRequireDefault(__webpack_require__("Z703"));

var _performanceRelayer = _interopRequireDefault(__webpack_require__("3HD9"));

var _routeAnnouncer = __webpack_require__("d602");

var _router1 = __webpack_require__("qGJC");

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
    "default": obj
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

    newObj["default"] = obj;
    return newObj;
  }
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

var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
window.__NEXT_DATA__ = data;
var version = "11.1.4";
exports.version = version;

var looseToArray = function looseToArray(input) {
  return [].slice.call(input);
};

var hydrateProps = data.props,
    hydrateErr = data.err,
    page = data.page,
    query = data.query,
    buildId = data.buildId,
    assetPrefix = data.assetPrefix,
    runtimeConfig = data.runtimeConfig,
    dynamicIds = data.dynamicIds,
    isFallback = data.isFallback,
    locale = data.locale,
    locales = data.locales,
    domainLocales = data.domainLocales,
    isPreview = data.isPreview;
var defaultLocale = data.defaultLocale;
var prefix = assetPrefix || ''; // With dynamic assetPrefix it's no longer possible to set assetPrefix at the build time
// So, this is how we do it in the client side at runtime

__webpack_require__.p = "".concat(prefix, "/_next/") //eslint-disable-line
; // Initialize next/config with the environment configuration

(0, _runtimeConfig).setConfig({
  serverRuntimeConfig: {},
  publicRuntimeConfig: runtimeConfig || {}
});
var asPath = (0, _utils).getURL(); // make sure not to attempt stripping basePath for 404s

if ((0, _router).hasBasePath(asPath)) {
  asPath = (0, _router).delBasePath(asPath);
}

if (false) { var detectedDomain, localePathResult, parsedAs, _require4, formatUrl, _require3, parseRelativeUrl, _require2, detectDomainLocale, _require, normalizeLocalePath; }

if (data.scriptLoader) {
  var _require5 = __webpack_require__("BJuT"),
      initScriptLoader = _require5.initScriptLoader;

  initScriptLoader(data.scriptLoader);
}

var pageLoader = new _pageLoader["default"](buildId, prefix);

var register = function register(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      r = _ref2[0],
      f = _ref2[1];

  return pageLoader.routeLoader.onEntrypoint(r, f);
};

if (window.__NEXT_P) {
  // Defer page registration for another tick. This will increase the overall
  // latency in hydrating the page, but reduce the total blocking time.
  window.__NEXT_P.map(function (p) {
    return setTimeout(function () {
      return register(p);
    }, 0);
  });
}

window.__NEXT_P = [];
window.__NEXT_P.push = register;
var headManager = (0, _headManager)["default"]();
var appElement = document.getElementById('__next');

var _lastRenderReject;

var webpackHMR;
var router;
exports.router = router;
var CachedApp, onPerfEntry;

headManager.getIsSsr = function () {
  return router.isSsr;
};

var Container = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(Container, _react$default$Compon);

  var _super = _createSuper(Container);

  function Container() {
    _classCallCheck(this, Container);

    return _super.apply(this, arguments);
  }

  _createClass(Container, [{
    key: "componentDidCatch",
    value: function componentDidCatch(componentErr, info) {
      this.props.fn(componentErr, info);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash(); // We need to replace the router state if:
      // - the page was (auto) exported and has a query string or search (hash)
      // - it was auto exported and is a dynamic route (to provide params)
      // - if it is a client-side skeleton (fallback render)

      if (router.isSsr && // We don't update for 404 requests as this can modify
      // the asPath unexpectedly e.g. adding basePath when
      // it wasn't originally present
      page !== '/404' && page !== '/_error' && (isFallback || data.nextExport && ((0, _isDynamic).isDynamicRoute(router.pathname) || location.search || false) || hydrateProps && hydrateProps.__N_SSG && (location.search || false))) {
        // update query on mount for exported pages
        router.replace(router.pathname + '?' + String((0, _querystring).assign((0, _querystring).urlQueryToSearchParams(router.query), new URLSearchParams(location.search))), asPath, {
          // @ts-ignore
          // WARNING: `_h` is an internal option for handing Next.js
          // client-side hydration. Your app should _never_ use this property.
          // It may change at any time without notice.
          _h: 1,
          // Fallback pages must trigger the data fetch, so the transition is
          // not shallow.
          // Other pages (strictly updating query) happens shallowly, as data
          // requirements would already be present.
          shallow: !isFallback
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var _location = location,
          hash = _location.hash;
      hash = hash && hash.substring(1);
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      if (true) {
        return this.props.children;
      } else { var _require6, ReactDevOverlay; }
    }
  }]);

  return Container;
}(_react["default"].Component);

var emitter = (0, _mitt)["default"]();
exports.emitter = emitter;
var CachedComponent;

function _initNext() {
  _initNext = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var opts,
        initialErr,
        appEntrypoint,
        app,
        mod,
        pageEntrypoint,
        _require7,
        isValidElementType,
        _require8,
        getNodeError,
        renderCtx,
        _args = arguments;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opts = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};

            // This makes sure this specific lines are removed in production
            if (false) {}

            initialErr = hydrateErr;
            _context.prev = 3;
            _context.next = 6;
            return pageLoader.routeLoader.whenEntrypoint('/_app');

          case 6:
            appEntrypoint = _context.sent;

            if (!('error' in appEntrypoint)) {
              _context.next = 9;
              break;
            }

            throw appEntrypoint.error;

          case 9:
            app = appEntrypoint.component, mod = appEntrypoint.exports;
            CachedApp = app;

            if (mod && mod.reportWebVitals) {
              onPerfEntry = function onPerfEntry(_ref3) {
                var id = _ref3.id,
                    name = _ref3.name,
                    startTime = _ref3.startTime,
                    value = _ref3.value,
                    duration = _ref3.duration,
                    entryType = _ref3.entryType,
                    entries = _ref3.entries;
                // Combines timestamp with random number for unique ID
                var uniqueID = "".concat(Date.now(), "-").concat(Math.floor(Math.random() * (9000000000000 - 1)) + 1000000000000);
                var perfStartEntry;

                if (entries && entries.length) {
                  perfStartEntry = entries[0].startTime;
                }

                mod.reportWebVitals({
                  id: id || uniqueID,
                  name: name,
                  startTime: startTime || perfStartEntry,
                  value: value == null ? duration : value,
                  label: entryType === 'mark' || entryType === 'measure' ? 'custom' : 'web-vital'
                });
              };
            }

            if (true) {
              _context.next = 16;
              break;
            }

            _context.t0 = {
              error: hydrateErr
            };
            _context.next = 19;
            break;

          case 16:
            _context.next = 18;
            return pageLoader.routeLoader.whenEntrypoint(page);

          case 18:
            _context.t0 = _context.sent;

          case 19:
            pageEntrypoint = _context.t0;

            if (!('error' in pageEntrypoint)) {
              _context.next = 22;
              break;
            }

            throw pageEntrypoint.error;

          case 22:
            CachedComponent = pageEntrypoint.component;

            if (true) {
              _context.next = 27;
              break;
            }

            _require7 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-is'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), isValidElementType = _require7.isValidElementType;

            if (isValidElementType(CachedComponent)) {
              _context.next = 27;
              break;
            }

            throw new Error("The default export is not a React Component in page: \"".concat(page, "\""));

          case 27:
            _context.next = 32;
            break;

          case 29:
            _context.prev = 29;
            _context.t1 = _context["catch"](3);
            // This catches errors like throwing in the top level of a module
            initialErr = _context.t1;

          case 32:
            if (false) {}

            if (!window.__NEXT_PRELOADREADY) {
              _context.next = 36;
              break;
            }

            _context.next = 36;
            return window.__NEXT_PRELOADREADY(dynamicIds);

          case 36:
            exports.router = router = (0, _router1).createRouter(page, query, asPath, {
              initialProps: hydrateProps,
              pageLoader: pageLoader,
              App: CachedApp,
              Component: CachedComponent,
              wrapApp: wrapApp,
              err: initialErr,
              isFallback: Boolean(isFallback),
              subscription: function subscription(info, App, scroll) {
                return render(Object.assign({}, info, {
                  App: App,
                  scroll: scroll
                }));
              },
              locale: locale,
              locales: locales,
              defaultLocale: defaultLocale,
              domainLocales: domainLocales,
              isPreview: isPreview
            });
            renderCtx = {
              App: CachedApp,
              initial: true,
              Component: CachedComponent,
              props: hydrateProps,
              err: initialErr
            };

            if (false) {}

            render(renderCtx);
            return _context.abrupt("return", emitter);

          case 43:
            return _context.abrupt("return", {
              emitter: emitter,
              renderCtx: renderCtx
            });

          case 44:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 29]]);
  }));
  return _initNext.apply(this, arguments);
}

function initNext() {
  return _initNext.apply(this, arguments);
}

function _render() {
  _render = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(renderingProps) {
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!renderingProps.err) {
              _context2.next = 4;
              break;
            }

            _context2.next = 3;
            return renderError(renderingProps);

          case 3:
            return _context2.abrupt("return");

          case 4:
            _context2.prev = 4;
            _context2.next = 7;
            return doRender(renderingProps);

          case 7:
            _context2.next = 16;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](4);

            if (!_context2.t0.cancelled) {
              _context2.next = 13;
              break;
            }

            throw _context2.t0;

          case 13:
            if (false) {}

            _context2.next = 16;
            return renderError(_objectSpread({}, renderingProps, {
              err: _context2.t0
            }));

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 9]]);
  }));
  return _render.apply(this, arguments);
}

function render(renderingProps) {
  return _render.apply(this, arguments);
}

function renderError(renderErrorProps) {
  var App = renderErrorProps.App,
      err = renderErrorProps.err; // In development runtime errors are caught by our overlay
  // In production we catch runtime errors using componentDidCatch which will trigger renderError

  if (false) {} // Make sure we log the error to the console, otherwise users can't track down issues.


  console.error(err);
  console.error("A client-side exception has occurred, see here for more info: https://nextjs.org/docs/messages/client-side-exception-occurred");
  return pageLoader.loadPage('/_error').then(function (_ref4) {
    var ErrorComponent = _ref4.page,
        styleSheets = _ref4.styleSheets;
    return (lastAppProps === null || lastAppProps === void 0 ? void 0 : lastAppProps.Component) === ErrorComponent ? Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__("/9Lk"));
    }).then(function (m) {
      return {
        ErrorComponent: m["default"],
        styleSheets: []
      };
    }) : {
      ErrorComponent: ErrorComponent,
      styleSheets: styleSheets
    };
  }).then(function (_ref5) {
    var ErrorComponent = _ref5.ErrorComponent,
        styleSheets = _ref5.styleSheets;
    // In production we do a normal render with the `ErrorComponent` as component.
    // If we've gotten here upon initial render, we can use the props from the server.
    // Otherwise, we need to call `getInitialProps` on `App` before mounting.
    var AppTree = wrapApp(App);
    var appCtx = {
      Component: ErrorComponent,
      AppTree: AppTree,
      router: router,
      ctx: {
        err: err,
        pathname: page,
        query: query,
        asPath: asPath,
        AppTree: AppTree
      }
    };
    return Promise.resolve(renderErrorProps.props ? renderErrorProps.props : (0, _utils).loadGetInitialProps(App, appCtx)).then(function (initProps) {
      return doRender(_objectSpread({}, renderErrorProps, {
        err: err,
        Component: ErrorComponent,
        styleSheets: styleSheets,
        props: initProps
      }));
    });
  });
}

var reactRoot = null; // On initial render a hydrate should always happen

var shouldHydrate = true;

function renderReactElement(domEl, fn) {
  // mark start of hydrate/render
  if (_utils.ST) {
    performance.mark('beforeRender');
  }

  var reactEl = fn(shouldHydrate ? markHydrateComplete : markRenderComplete);

  if (false) {} else {
    // The check for `.hydrate` is there to support React alternatives like preact
    if (shouldHydrate) {
      _reactDom["default"].hydrate(reactEl, domEl);

      shouldHydrate = false;
    } else {
      _reactDom["default"].render(reactEl, domEl);
    }
  }
}

function markHydrateComplete() {
  if (!_utils.ST) return;
  performance.mark('afterHydrate') // mark end of hydration
  ;
  performance.measure('Next.js-before-hydration', 'navigationStart', 'beforeRender');
  performance.measure('Next.js-hydration', 'beforeRender', 'afterHydrate');

  if (onPerfEntry) {
    performance.getEntriesByName('Next.js-hydration').forEach(onPerfEntry);
  }

  clearMarks();
}

function markRenderComplete() {
  if (!_utils.ST) return;
  performance.mark('afterRender') // mark end of render
  ;
  var navStartEntries = performance.getEntriesByName('routeChange', 'mark');
  if (!navStartEntries.length) return;
  performance.measure('Next.js-route-change-to-render', navStartEntries[0].name, 'beforeRender');
  performance.measure('Next.js-render', 'beforeRender', 'afterRender');

  if (onPerfEntry) {
    performance.getEntriesByName('Next.js-render').forEach(onPerfEntry);
    performance.getEntriesByName('Next.js-route-change-to-render').forEach(onPerfEntry);
  }

  clearMarks();
  ['Next.js-route-change-to-render', 'Next.js-render'].forEach(function (measure) {
    return performance.clearMeasures(measure);
  });
}

function clearMarks() {
  ['beforeRender', 'afterHydrate', 'afterRender', 'routeChange'].forEach(function (mark) {
    return performance.clearMarks(mark);
  });
}

function AppContainer(_ref6) {
  var children = _ref6.children;
  return /*#__PURE__*/_react["default"].createElement(Container, {
    fn: function fn(error) {
      return renderError({
        App: CachedApp,
        err: error
      })["catch"](function (err) {
        return console.error('Error rendering page: ', err);
      });
    }
  }, /*#__PURE__*/_react["default"].createElement(_routerContext.RouterContext.Provider, {
    value: (0, _router1).makePublicRouterInstance(router)
  }, /*#__PURE__*/_react["default"].createElement(_headManagerContext.HeadManagerContext.Provider, {
    value: headManager
  }, children)));
}

var wrapApp = function wrapApp(App) {
  return function (wrappedAppProps) {
    var appProps = _objectSpread({}, wrappedAppProps, {
      Component: CachedComponent,
      err: hydrateErr,
      router: router
    });

    return /*#__PURE__*/_react["default"].createElement(AppContainer, null, /*#__PURE__*/_react["default"].createElement(App, Object.assign({}, appProps)));
  };
};

var lastAppProps;

function doRender(input) {
  var App = input.App,
      Component = input.Component,
      props = input.props,
      err = input.err;
  var styleSheets = 'initial' in input ? undefined : input.styleSheets;
  Component = Component || lastAppProps.Component;
  props = props || lastAppProps.props;

  var appProps = _objectSpread({}, props, {
    Component: Component,
    err: err,
    router: router
  }); // lastAppProps has to be set before ReactDom.render to account for ReactDom throwing an error.


  lastAppProps = appProps;
  var canceled = false;
  var resolvePromise;
  var renderPromise = new Promise(function (resolve, reject) {
    if (_lastRenderReject) {
      _lastRenderReject();
    }

    resolvePromise = function resolvePromise() {
      _lastRenderReject = null;
      resolve();
    };

    _lastRenderReject = function lastRenderReject() {
      canceled = true;
      _lastRenderReject = null;
      var error = new Error('Cancel rendering route');
      error.cancelled = true;
      reject(error);
    };
  }); // This function has a return type to ensure it doesn't start returning a
  // Promise. It should remain synchronous.

  function onStart() {
    if (!styleSheets || // We use `style-loader` in development, so we don't need to do anything
    // unless we're in production:
    false) {
      return false;
    }

    var currentStyleTags = looseToArray(document.querySelectorAll('style[data-n-href]'));
    var currentHrefs = new Set(currentStyleTags.map(function (tag) {
      return tag.getAttribute('data-n-href');
    }));
    var noscript = document.querySelector('noscript[data-n-css]');
    var nonce = noscript === null || noscript === void 0 ? void 0 : noscript.getAttribute('data-n-css');
    styleSheets.forEach(function (_ref7) {
      var href = _ref7.href,
          text = _ref7.text;

      if (!currentHrefs.has(href)) {
        var styleTag = document.createElement('style');
        styleTag.setAttribute('data-n-href', href);
        styleTag.setAttribute('media', 'x');

        if (nonce) {
          styleTag.setAttribute('nonce', nonce);
        }

        document.head.appendChild(styleTag);
        styleTag.appendChild(document.createTextNode(text));
      }
    });
    return true;
  }

  function onHeadCommit() {
    if ( // We use `style-loader` in development, so we don't need to do anything
    // unless we're in production:
     true && // We can skip this during hydration. Running it wont cause any harm, but
    // we may as well save the CPU cycles:
    styleSheets && // Ensure this render was not canceled
    !canceled) {
      var desiredHrefs = new Set(styleSheets.map(function (s) {
        return s.href;
      }));
      var currentStyleTags = looseToArray(document.querySelectorAll('style[data-n-href]'));
      var currentHrefs = currentStyleTags.map(function (tag) {
        return tag.getAttribute('data-n-href');
      }); // Toggle `<style>` tags on or off depending on if they're needed:

      for (var idx = 0; idx < currentHrefs.length; ++idx) {
        if (desiredHrefs.has(currentHrefs[idx])) {
          currentStyleTags[idx].removeAttribute('media');
        } else {
          currentStyleTags[idx].setAttribute('media', 'x');
        }
      } // Reorder styles into intended order:


      var referenceNode = document.querySelector('noscript[data-n-css]');

      if ( // This should be an invariant:
      referenceNode) {
        styleSheets.forEach(function (_ref8) {
          var href = _ref8.href;
          var targetTag = document.querySelector("style[data-n-href=\"".concat(href, "\"]"));

          if ( // This should be an invariant:
          targetTag) {
            referenceNode.parentNode.insertBefore(targetTag, referenceNode.nextSibling);
            referenceNode = targetTag;
          }
        });
      } // Finally, clean up server rendered stylesheets:


      looseToArray(document.querySelectorAll('link[data-n-p]')).forEach(function (el) {
        el.parentNode.removeChild(el);
      }); // Force browser to recompute layout, which should prevent a flash of
      // unstyled content:

      getComputedStyle(document.body, 'height');
    }

    if (input.scroll) {
      window.scrollTo(input.scroll.x, input.scroll.y);
    }
  }

  function onRootCommit() {
    resolvePromise();
  }

  onStart();

  var elem = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Head, {
    callback: onHeadCommit
  }), /*#__PURE__*/_react["default"].createElement(AppContainer, null, /*#__PURE__*/_react["default"].createElement(App, Object.assign({}, appProps)), /*#__PURE__*/_react["default"].createElement(_portal.Portal, {
    type: "next-route-announcer"
  }, /*#__PURE__*/_react["default"].createElement(_routeAnnouncer.RouteAnnouncer, null)))); // We catch runtime errors using componentDidCatch which will trigger renderError


  renderReactElement(appElement, function (callback) {
    return /*#__PURE__*/_react["default"].createElement(Root, {
      callbacks: [callback, onRootCommit]
    },  false ? /*#__PURE__*/undefined : elem);
  });
  return renderPromise;
}

function Root(_ref9) {
  var callbacks = _ref9.callbacks,
      children = _ref9.children;

  // We use `useLayoutEffect` to guarantee the callbacks are executed
  // as soon as React flushes the update
  _react["default"].useLayoutEffect(function () {
    return callbacks.forEach(function (callback) {
      return callback();
    });
  }, [callbacks]);

  if (undefined) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    _react["default"].useEffect(function () {
      window.__NEXT_HYDRATED = true;

      if (window.__NEXT_HYDRATED_CB) {
        window.__NEXT_HYDRATED_CB();
      }
    }, []);
  } // We should ask to measure the Web Vitals after rendering completes so we
  // don't cause any hydration delay:


  _react["default"].useEffect(function () {
    (0, _performanceRelayer)["default"](onPerfEntry);
  }, []);

  return children;
} // Dummy component that we render as a child of Root so that we can
// toggle the correct styles before the page is rendered.


function Head(_ref10) {
  var callback = _ref10.callback;

  // We use `useLayoutEffect` to guarantee the callback is executed
  // as soon as React flushes the update.
  _react["default"].useLayoutEffect(function () {
    return callback();
  }, [callback]);

  return null;
}

/***/ }),

/***/ "uEII":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initHeadManager;
exports.DOMAttributeNames = void 0;
var DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM(_ref) {
  var type = _ref.type,
      props = _ref.props;
  var el = document.createElement(type);

  for (var p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    var attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  var children = props.children,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function updateElements(type, components) {
  var headEl = document.getElementsByTagName('head')[0];
  var headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (false) {}

  var headCount = Number(headCountEl.content);
  var oldTags = [];

  for (var i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  var newTags = components.map(reactElementToDOM).filter(function (newTag) {
    for (var k = 0, len = oldTags.length; k < len; k++) {
      var oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(function (t) {
    return t.parentNode.removeChild(t);
  });
  newTags.forEach(function (t) {
    return headEl.insertBefore(t, headCountEl);
  });
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  var updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: function updateHead(head) {
      var promise = updatePromise = Promise.resolve().then(function () {
        if (promise !== updatePromise) return;
        updatePromise = null;
        var tags = {};
        head.forEach(function (h) {
          if ( // If the font tag is loaded only on client navigation
          // it won't be inlined. In this case revert to the original behavior
          h.type === 'link' && h.props['data-optimized-fonts'] && !document.querySelector("style[data-href=\"".concat(h.props['data-href'], "\"]"))) {
            h.props.href = h.props['data-href'];
            h.props['data-href'] = undefined;
          }

          var components = tags[h.type] || [];
          components.push(h);
          tags[h.type] = components;
        });
        var titleComponent = tags.title ? tags.title[0] : null;
        var title = '';

        if (titleComponent) {
          var children = titleComponent.props.children;
          title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        }

        if (title !== document.title) document.title = title;
        ['meta', 'base', 'link', 'style', 'script'].forEach(function (type) {
          updateElements(type, tags[type] || []);
        });
      });
    }
  };
}

/***/ }),

/***/ "uv0t":
/***/ (function(module, exports) {

"trimStart"in String.prototype||(String.prototype.trimStart=String.prototype.trimLeft),"trimEnd"in String.prototype||(String.prototype.trimEnd=String.prototype.trimRight),"description"in Symbol.prototype||Object.defineProperty(Symbol.prototype,"description",{configurable:!0,get:function(){var t=/\((.*)\)/.exec(this.toString());return t?t[1]:void 0}}),Array.prototype.flat||(Array.prototype.flat=function(t,r){return r=this.concat.apply([],this),t>1&&r.some(Array.isArray)?r.flat(t-1):r},Array.prototype.flatMap=function(t,r){return this.map(t,r).flat()}),Promise.prototype.finally||(Promise.prototype.finally=function(t){if("function"!=typeof t)return this.then(t,t);var r=this.constructor||Promise;return this.then(function(o){return r.resolve(t()).then(function(){return o})},function(o){return r.resolve(t()).then(function(){throw o})})});


/***/ })

},[["ljXV",2,1,0,4]]]);