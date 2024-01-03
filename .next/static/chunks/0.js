(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[0],{

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/get.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/get.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/next/node_modules/@babel/runtime/helpers/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/superPropBase.js":
/*!********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./public/assets/vendor/bootstrap/js/bootstrap.bundle.min.js":
/*!*******************************************************************!*\
  !*** ./public/assets/vendor/bootstrap/js/bootstrap.bundle.min.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _get = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/get */ "./node_modules/next/node_modules/@babel/runtime/helpers/get.js");

var _assertThisInitialized = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _inherits = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _defineProperty = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _slicedToArray = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js");

var _toConsumableArray = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e18) { throw _e18; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e19) { didErr = true; err = _e19; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) {
   true ? module.exports = e() : undefined;
}(this, function () {
  "use strict";

  var t = new Map(),
      e = {
    set: function set(e, i, n) {
      t.has(e) || t.set(e, new Map());
      var s = t.get(e);
      s.has(i) || 0 === s.size ? s.set(i, n) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(s.keys())[0], "."));
    },
    get: function get(e, i) {
      return t.has(e) && t.get(e).get(i) || null;
    },
    remove: function remove(e, i) {
      if (!t.has(e)) return;
      var n = t.get(e);
      n["delete"](i), 0 === n.size && t["delete"](e);
    }
  },
      i = "transitionend",
      n = function n(t) {
    return t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, function (t, e) {
      return "#".concat(CSS.escape(e));
    })), t;
  },
      s = function s(t) {
    t.dispatchEvent(new Event(i));
  },
      o = function o(t) {
    return !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType);
  },
      r = function r(t) {
    return o(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(n(t)) : null;
  },
      a = function a(t) {
    if (!o(t) || 0 === t.getClientRects().length) return !1;
    var e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        i = t.closest("details:not([open])");
    if (!i) return e;

    if (i !== t) {
      var _e2 = t.closest("summary");

      if (_e2 && _e2.parentNode !== i) return !1;
      if (null === _e2) return !1;
    }

    return e;
  },
      l = function l(t) {
    return !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"));
  },
      c = function c(t) {
    if (!document.documentElement.attachShadow) return null;

    if ("function" == typeof t.getRootNode) {
      var _e3 = t.getRootNode();

      return _e3 instanceof ShadowRoot ? _e3 : null;
    }

    return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null;
  },
      h = function h() {},
      d = function d(t) {
    t.offsetHeight;
  },
      u = function u() {
    return window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null;
  },
      f = [],
      p = function p() {
    return "rtl" === document.documentElement.dir;
  },
      m = function m(t) {
    var e;
    e = function e() {
      var e = u();

      if (e) {
        var _i2 = t.NAME,
            _n2 = e.fn[_i2];
        e.fn[_i2] = t.jQueryInterface, e.fn[_i2].Constructor = t, e.fn[_i2].noConflict = function () {
          return e.fn[_i2] = _n2, t.jQueryInterface;
        };
      }
    }, "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", function () {
      var _iterator = _createForOfIteratorHelper(f),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _t2 = _step.value;

          _t2();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }), f.push(e)) : e();
  },
      g = function g(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
    return "function" == typeof t ? t.apply(void 0, _toConsumableArray(e)) : i;
  },
      _ = function _(t, e) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    if (!n) return void g(t);

    var o = function (t) {
      if (!t) return 0;

      var _window$getComputedSt = window.getComputedStyle(t),
          e = _window$getComputedSt.transitionDuration,
          i = _window$getComputedSt.transitionDelay;

      var n = Number.parseFloat(e),
          s = Number.parseFloat(i);
      return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
    }(e) + 5;

    var r = !1;

    var a = function a(_ref) {
      var n = _ref.target;
      n === e && (r = !0, e.removeEventListener(i, a), g(t));
    };

    e.addEventListener(i, a), setTimeout(function () {
      r || s(e);
    }, o);
  },
      b = function b(t, e, i, n) {
    var s = t.length;
    var o = t.indexOf(e);
    return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1, n && (o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))]);
  },
      v = /[^.]*(?=\..*)\.|.*/,
      y = /\..*/,
      w = /::\d+$/,
      A = {};

  var E = 1;
  var T = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
      C = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function O(t, e) {
    return e && "".concat(e, "::").concat(E++) || t.uidEvent || E++;
  }

  function x(t) {
    var e = O(t);
    return t.uidEvent = e, A[e] = A[e] || {}, A[e];
  }

  function k(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return Object.values(t).find(function (t) {
      return t.callable === e && t.delegationSelector === i;
    });
  }

  function L(t, e, i) {
    var n = "string" == typeof e,
        s = n ? i : e || i;
    var o = I(t);
    return C.has(o) || (o = t), [n, s, o];
  }

  function S(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;

    var _L = L(e, i, n),
        _L2 = _slicedToArray(_L, 3),
        o = _L2[0],
        r = _L2[1],
        a = _L2[2];

    if (e in T) {
      var _t3 = function _t3(t) {
        return function (e) {
          if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
        };
      };

      r = _t3(r);
    }

    var l = x(t),
        c = l[a] || (l[a] = {}),
        h = k(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && s);
    var d = O(r, e.replace(v, "")),
        u = o ? function (t, e, i) {
      return function n(s) {
        var o = t.querySelectorAll(e);

        for (var _r = s.target; _r && _r !== this; _r = _r.parentNode) {
          var _iterator2 = _createForOfIteratorHelper(o),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _a = _step2.value;
              if (_a === _r) return P(s, {
                delegateTarget: _r
              }), n.oneOff && N.off(t, s.type, e, i), i.apply(_r, [s]);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      };
    }(t, i, r) : function (t, e) {
      return function i(n) {
        return P(n, {
          delegateTarget: t
        }), i.oneOff && N.off(t, n.type, e), e.apply(t, [n]);
      };
    }(t, r);
    u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
  }

  function D(t, e, i, n, s) {
    var o = k(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }

  function $(t, e, i, n) {
    var s = e[i] || {};

    for (var _i3 = 0, _Object$entries = Object.entries(s); _i3 < _Object$entries.length; _i3++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2),
          _o = _Object$entries$_i[0],
          _r2 = _Object$entries$_i[1];

      _o.includes(n) && D(t, e, i, _r2.callable, _r2.delegationSelector);
    }
  }

  function I(t) {
    return t = t.replace(y, ""), T[t] || t;
  }

  var N = {
    on: function on(t, e, i, n) {
      S(t, e, i, n, !1);
    },
    one: function one(t, e, i, n) {
      S(t, e, i, n, !0);
    },
    off: function off(t, e, i, n) {
      if ("string" != typeof e || !t) return;

      var _L3 = L(e, i, n),
          _L4 = _slicedToArray(_L3, 3),
          s = _L4[0],
          o = _L4[1],
          r = _L4[2],
          a = r !== e,
          l = x(t),
          c = l[r] || {},
          h = e.startsWith(".");

      if (void 0 === o) {
        if (h) for (var _i4 = 0, _Object$keys = Object.keys(l); _i4 < _Object$keys.length; _i4++) {
          var _i5 = _Object$keys[_i4];
          $(t, l, _i5, e.slice(1));
        }

        for (var _i6 = 0, _Object$entries2 = Object.entries(c); _i6 < _Object$entries2.length; _i6++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i6], 2),
              _i7 = _Object$entries2$_i[0],
              _n3 = _Object$entries2$_i[1];

          var _s2 = _i7.replace(w, "");

          a && !e.includes(_s2) || D(t, l, r, _n3.callable, _n3.delegationSelector);
        }
      } else {
        if (!Object.keys(c).length) return;
        D(t, l, r, o, s ? i : null);
      }
    },
    trigger: function trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      var n = u();
      var s = null,
          o = !0,
          r = !0,
          a = !1;
      e !== I(e) && n && (s = n.Event(e, i), n(t).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
      var l = P(new Event(e, {
        bubbles: o,
        cancelable: !0
      }), i);
      return a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l;
    }
  };

  function P(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _loop = function _loop() {
      var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i8], 2),
          i = _Object$entries3$_i[0],
          n = _Object$entries3$_i[1];

      try {
        t[i] = n;
      } catch (e) {
        Object.defineProperty(t, i, {
          configurable: !0,
          get: function get() {
            return n;
          }
        });
      }
    };

    for (var _i8 = 0, _Object$entries3 = Object.entries(e); _i8 < _Object$entries3.length; _i8++) {
      _loop();
    }

    return t;
  }

  function M(t) {
    if ("true" === t) return !0;
    if ("false" === t) return !1;
    if (t === Number(t).toString()) return Number(t);
    if ("" === t || "null" === t) return null;
    if ("string" != typeof t) return t;

    try {
      return JSON.parse(decodeURIComponent(t));
    } catch (e) {
      return t;
    }
  }

  function j(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-".concat(t.toLowerCase());
    });
  }

  var F = {
    setDataAttribute: function setDataAttribute(t, e, i) {
      t.setAttribute("data-bs-".concat(j(e)), i);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-".concat(j(e)));
    },
    getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};
      var e = {},
          i = Object.keys(t.dataset).filter(function (t) {
        return t.startsWith("bs") && !t.startsWith("bsConfig");
      });

      var _iterator3 = _createForOfIteratorHelper(i),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _n4 = _step3.value;

          var _i9 = _n4.replace(/^bs/, "");

          _i9 = _i9.charAt(0).toLowerCase() + _i9.slice(1, _i9.length), e[_i9] = M(t.dataset[_n4]);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return e;
    },
    getDataAttribute: function getDataAttribute(t, e) {
      return M(t.getAttribute("data-bs-".concat(j(e))));
    }
  };

  var H = /*#__PURE__*/function () {
    function H() {
      _classCallCheck(this, H);
    }

    _createClass(H, [{
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t;
      }
    }, {
      key: "_mergeConfigObj",
      value: function _mergeConfigObj(t, e) {
        var i = o(e) ? F.getDataAttribute(e, "config") : {};
        return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), "object" == typeof i ? i : {}), o(e) ? F.getDataAttributes(e) : {}), "object" == typeof t ? t : {});
      }
    }, {
      key: "_typeCheckConfig",
      value: function _typeCheckConfig(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.constructor.DefaultType;

        for (var _i10 = 0, _Object$entries4 = Object.entries(e); _i10 < _Object$entries4.length; _i10++) {
          var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i10], 2),
              _n5 = _Object$entries4$_i[0],
              _s3 = _Object$entries4$_i[1];

          var _e4 = t[_n5],
              _r3 = o(_e4) ? "element" : null == (i = _e4) ? "".concat(i) : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();

          if (!new RegExp(_s3).test(_r3)) throw new TypeError("".concat(this.constructor.NAME.toUpperCase(), ": Option \"").concat(_n5, "\" provided type \"").concat(_r3, "\" but expected type \"").concat(_s3, "\"."));
        }

        var i;
      }
    }], [{
      key: "Default",
      get: function get() {
        return {};
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return {};
      }
    }, {
      key: "NAME",
      get: function get() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
    }]);

    return H;
  }();

  var W = /*#__PURE__*/function (_H) {
    _inherits(W, _H);

    var _super = _createSuper(W);

    function W(t, i) {
      var _this;

      _classCallCheck(this, W);

      _this = _super.call(this), (t = r(t)) && (_this._element = t, _this._config = _this._getConfig(i), e.set(_this._element, _this.constructor.DATA_KEY, _assertThisInitialized(_this)));
      return _this;
    }

    _createClass(W, [{
      key: "dispose",
      value: function dispose() {
        e.remove(this._element, this.constructor.DATA_KEY), N.off(this._element, this.constructor.EVENT_KEY);

        var _iterator4 = _createForOfIteratorHelper(Object.getOwnPropertyNames(this)),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _t4 = _step4.value;
            this[_t4] = null;
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    }, {
      key: "_queueCallback",
      value: function _queueCallback(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;

        _(t, e, i);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }], [{
      key: "getInstance",
      value: function getInstance(t) {
        return e.get(r(t), this.DATA_KEY);
      }
    }, {
      key: "getOrCreateInstance",
      value: function getOrCreateInstance(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.getInstance(t) || new this(t, "object" == typeof e ? e : null);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return "5.3.2";
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.".concat(this.NAME);
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".".concat(this.DATA_KEY);
      }
    }, {
      key: "eventName",
      value: function eventName(t) {
        return "".concat(t).concat(this.EVENT_KEY);
      }
    }]);

    return W;
  }(H);

  var B = function B(t) {
    var e = t.getAttribute("data-bs-target");

    if (!e || "#" === e) {
      var _i11 = t.getAttribute("href");

      if (!_i11 || !_i11.includes("#") && !_i11.startsWith(".")) return null;
      _i11.includes("#") && !_i11.startsWith("#") && (_i11 = "#".concat(_i11.split("#")[1])), e = _i11 && "#" !== _i11 ? n(_i11.trim()) : null;
    }

    return e;
  },
      z = {
    find: function find(t) {
      var _ref2;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(Element.prototype.querySelectorAll.call(e, t)));
    },
    findOne: function findOne(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return Element.prototype.querySelector.call(e, t);
    },
    children: function children(t, e) {
      var _ref3;

      return (_ref3 = []).concat.apply(_ref3, _toConsumableArray(t.children)).filter(function (t) {
        return t.matches(e);
      });
    },
    parents: function parents(t, e) {
      var i = [];
      var n = t.parentNode.closest(e);

      for (; n;) {
        i.push(n), n = n.parentNode.closest(e);
      }

      return i;
    },
    prev: function prev(t, e) {
      var i = t.previousElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.previousElementSibling;
      }

      return [];
    },
    next: function next(t, e) {
      var i = t.nextElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.nextElementSibling;
      }

      return [];
    },
    focusableChildren: function focusableChildren(t) {
      var e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(function (t) {
        return "".concat(t, ":not([tabindex^=\"-\"])");
      }).join(",");
      return this.find(e, t).filter(function (t) {
        return !l(t) && a(t);
      });
    },
    getSelectorFromElement: function getSelectorFromElement(t) {
      var e = B(t);
      return e && z.findOne(e) ? e : null;
    },
    getElementFromSelector: function getElementFromSelector(t) {
      var e = B(t);
      return e ? z.findOne(e) : null;
    },
    getMultipleElementsFromSelector: function getMultipleElementsFromSelector(t) {
      var e = B(t);
      return e ? z.find(e) : [];
    }
  },
      R = function R(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "hide";
    var i = "click.dismiss".concat(t.EVENT_KEY),
        n = t.NAME;
    N.on(document, i, "[data-bs-dismiss=\"".concat(n, "\"]"), function (i) {
      if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), l(this)) return;
      var s = z.getElementFromSelector(this) || this.closest(".".concat(n));
      t.getOrCreateInstance(s)[e]();
    });
  },
      q = ".bs.alert",
      V = "close".concat(q),
      K = "closed".concat(q);

  var Q = /*#__PURE__*/function (_W) {
    _inherits(Q, _W);

    var _super2 = _createSuper(Q);

    function Q() {
      _classCallCheck(this, Q);

      return _super2.apply(this, arguments);
    }

    _createClass(Q, [{
      key: "close",
      value: function close() {
        var _this2 = this;

        if (N.trigger(this._element, V).defaultPrevented) return;

        this._element.classList.remove("show");

        var t = this._element.classList.contains("fade");

        this._queueCallback(function () {
          return _this2._destroyElement();
        }, this._element, t);
      }
    }, {
      key: "_destroyElement",
      value: function _destroyElement() {
        this._element.remove(), N.trigger(this._element, K), this.dispose();
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "alert";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Q.getOrCreateInstance(this);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);

    return Q;
  }(W);

  R(Q, "close"), m(Q);
  var X = '[data-bs-toggle="button"]';

  var Y = /*#__PURE__*/function (_W2) {
    _inherits(Y, _W2);

    var _super3 = _createSuper(Y);

    function Y() {
      _classCallCheck(this, Y);

      return _super3.apply(this, arguments);
    }

    _createClass(Y, [{
      key: "toggle",
      value: function toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "button";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Y.getOrCreateInstance(this);
          "toggle" === t && e[t]();
        });
      }
    }]);

    return Y;
  }(W);

  N.on(document, "click.bs.button.data-api", X, function (t) {
    t.preventDefault();
    var e = t.target.closest(X);
    Y.getOrCreateInstance(e).toggle();
  }), m(Y);
  var U = ".bs.swipe",
      G = "touchstart".concat(U),
      J = "touchmove".concat(U),
      Z = "touchend".concat(U),
      tt = "pointerdown".concat(U),
      et = "pointerup".concat(U),
      it = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  },
      nt = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
  };

  var st = /*#__PURE__*/function (_H2) {
    _inherits(st, _H2);

    var _super4 = _createSuper(st);

    function st(t, e) {
      var _this3;

      _classCallCheck(this, st);

      _this3 = _super4.call(this), _this3._element = t, t && st.isSupported() && (_this3._config = _this3._getConfig(e), _this3._deltaX = 0, _this3._supportPointerEvents = Boolean(window.PointerEvent), _this3._initEvents());
      return _this3;
    }

    _createClass(st, [{
      key: "dispose",
      value: function dispose() {
        N.off(this._element, U);
      }
    }, {
      key: "_start",
      value: function _start(t) {
        this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX;
      }
    }, {
      key: "_end",
      value: function _end(t) {
        this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), g(this._config.endCallback);
      }
    }, {
      key: "_move",
      value: function _move(t) {
        this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var t = Math.abs(this._deltaX);
        if (t <= 40) return;
        var e = t / this._deltaX;
        this._deltaX = 0, e && g(e > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
    }, {
      key: "_initEvents",
      value: function _initEvents() {
        var _this4 = this;

        this._supportPointerEvents ? (N.on(this._element, tt, function (t) {
          return _this4._start(t);
        }), N.on(this._element, et, function (t) {
          return _this4._end(t);
        }), this._element.classList.add("pointer-event")) : (N.on(this._element, G, function (t) {
          return _this4._start(t);
        }), N.on(this._element, J, function (t) {
          return _this4._move(t);
        }), N.on(this._element, Z, function (t) {
          return _this4._end(t);
        }));
      }
    }, {
      key: "_eventIsPointerPenTouch",
      value: function _eventIsPointerPenTouch(t) {
        return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType);
      }
    }], [{
      key: "Default",
      get: function get() {
        return it;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return nt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "swipe";
      }
    }, {
      key: "isSupported",
      value: function isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
      }
    }]);

    return st;
  }(H);

  var ot = ".bs.carousel",
      rt = ".data-api",
      at = "next",
      lt = "prev",
      ct = "left",
      ht = "right",
      dt = "slide".concat(ot),
      ut = "slid".concat(ot),
      ft = "keydown".concat(ot),
      pt = "mouseenter".concat(ot),
      mt = "mouseleave".concat(ot),
      gt = "dragstart".concat(ot),
      _t = "load".concat(ot).concat(rt),
      bt = "click".concat(ot).concat(rt),
      vt = "carousel",
      yt = "active",
      wt = ".active",
      At = ".carousel-item",
      Et = wt + At,
      Tt = {
    ArrowLeft: ht,
    ArrowRight: ct
  },
      Ct = {
    interval: 5e3,
    keyboard: !0,
    pause: "hover",
    ride: !1,
    touch: !0,
    wrap: !0
  },
      Ot = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
  };

  var xt = /*#__PURE__*/function (_W3) {
    _inherits(xt, _W3);

    var _super5 = _createSuper(xt);

    function xt(t, e) {
      var _this5;

      _classCallCheck(this, xt);

      _this5 = _super5.call(this, t, e), _this5._interval = null, _this5._activeElement = null, _this5._isSliding = !1, _this5.touchTimeout = null, _this5._swipeHelper = null, _this5._indicatorsElement = z.findOne(".carousel-indicators", _this5._element), _this5._addEventListeners(), _this5._config.ride === vt && _this5.cycle();
      return _this5;
    }

    _createClass(xt, [{
      key: "next",
      value: function next() {
        this._slide(at);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        !document.hidden && a(this._element) && this.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        this._slide(lt);
      }
    }, {
      key: "pause",
      value: function pause() {
        this._isSliding && s(this._element), this._clearInterval();
      }
    }, {
      key: "cycle",
      value: function cycle() {
        var _this6 = this;

        this._clearInterval(), this._updateInterval(), this._interval = setInterval(function () {
          return _this6.nextWhenVisible();
        }, this._config.interval);
      }
    }, {
      key: "_maybeEnableCycle",
      value: function _maybeEnableCycle() {
        var _this7 = this;

        this._config.ride && (this._isSliding ? N.one(this._element, ut, function () {
          return _this7.cycle();
        }) : this.cycle());
      }
    }, {
      key: "to",
      value: function to(t) {
        var _this8 = this;

        var e = this._getItems();

        if (t > e.length - 1 || t < 0) return;
        if (this._isSliding) return void N.one(this._element, ut, function () {
          return _this8.to(t);
        });

        var i = this._getItemIndex(this._getActive());

        if (i === t) return;
        var n = t > i ? at : lt;

        this._slide(n, e[t]);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), _get(_getPrototypeOf(xt.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.defaultInterval = t.interval, t;
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this9 = this;

        this._config.keyboard && N.on(this._element, ft, function (t) {
          return _this9._keydown(t);
        }), "hover" === this._config.pause && (N.on(this._element, pt, function () {
          return _this9.pause();
        }), N.on(this._element, mt, function () {
          return _this9._maybeEnableCycle();
        })), this._config.touch && st.isSupported() && this._addTouchEventListeners();
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this10 = this;

        var _iterator5 = _createForOfIteratorHelper(z.find(".carousel-item img", this._element)),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _t5 = _step5.value;
            N.on(_t5, gt, function (t) {
              return t.preventDefault();
            });
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }

        var t = {
          leftCallback: function leftCallback() {
            return _this10._slide(_this10._directionToOrder(ct));
          },
          rightCallback: function rightCallback() {
            return _this10._slide(_this10._directionToOrder(ht));
          },
          endCallback: function endCallback() {
            "hover" === _this10._config.pause && (_this10.pause(), _this10.touchTimeout && clearTimeout(_this10.touchTimeout), _this10.touchTimeout = setTimeout(function () {
              return _this10._maybeEnableCycle();
            }, 500 + _this10._config.interval));
          }
        };
        this._swipeHelper = new st(this._element, t);
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (/input|textarea/i.test(t.target.tagName)) return;
        var e = Tt[t.key];
        e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(t) {
        return this._getItems().indexOf(t);
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(t) {
        if (!this._indicatorsElement) return;
        var e = z.findOne(wt, this._indicatorsElement);
        e.classList.remove(yt), e.removeAttribute("aria-current");
        var i = z.findOne("[data-bs-slide-to=\"".concat(t, "\"]"), this._indicatorsElement);
        i && (i.classList.add(yt), i.setAttribute("aria-current", "true"));
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var t = this._activeElement || this._getActive();

        if (!t) return;
        var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
        this._config.interval = e || this._config.defaultInterval;
      }
    }, {
      key: "_slide",
      value: function _slide(t) {
        var _this11 = this;

        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (this._isSliding) return;

        var i = this._getActive(),
            n = t === at,
            s = e || b(this._getItems(), i, n, this._config.wrap);

        if (s === i) return;

        var o = this._getItemIndex(s),
            r = function r(e) {
          return N.trigger(_this11._element, e, {
            relatedTarget: s,
            direction: _this11._orderToDirection(t),
            from: _this11._getItemIndex(i),
            to: o
          });
        };

        if (r(dt).defaultPrevented) return;
        if (!i || !s) return;
        var a = Boolean(this._interval);
        this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = s;
        var l = n ? "carousel-item-start" : "carousel-item-end",
            c = n ? "carousel-item-next" : "carousel-item-prev";
        s.classList.add(c), d(s), i.classList.add(l), s.classList.add(l), this._queueCallback(function () {
          s.classList.remove(l, c), s.classList.add(yt), i.classList.remove(yt, c, l), _this11._isSliding = !1, r(ut);
        }, i, this._isAnimated()), a && this.cycle();
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("slide");
      }
    }, {
      key: "_getActive",
      value: function _getActive() {
        return z.findOne(Et, this._element);
      }
    }, {
      key: "_getItems",
      value: function _getItems() {
        return z.find(At, this._element);
      }
    }, {
      key: "_clearInterval",
      value: function _clearInterval() {
        this._interval && (clearInterval(this._interval), this._interval = null);
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(t) {
        return p() ? t === ct ? lt : at : t === ct ? at : lt;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(t) {
        return p() ? t === lt ? ct : ht : t === lt ? ht : ct;
      }
    }], [{
      key: "Default",
      get: function get() {
        return Ct;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ot;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "carousel";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = xt.getOrCreateInstance(this, t);

          if ("number" != typeof t) {
            if ("string" == typeof t) {
              if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
              e[t]();
            }
          } else e.to(t);
        });
      }
    }]);

    return xt;
  }(W);

  N.on(document, bt, "[data-bs-slide], [data-bs-slide-to]", function (t) {
    var e = z.getElementFromSelector(this);
    if (!e || !e.classList.contains(vt)) return;
    t.preventDefault();
    var i = xt.getOrCreateInstance(e),
        n = this.getAttribute("data-bs-slide-to");
    return n ? (i.to(n), void i._maybeEnableCycle()) : "next" === F.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle());
  }), N.on(window, _t, function () {
    var t = z.find('[data-bs-ride="carousel"]');

    var _iterator6 = _createForOfIteratorHelper(t),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _e5 = _step6.value;
        xt.getOrCreateInstance(_e5);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }), m(xt);
  var kt = ".bs.collapse",
      Lt = "show".concat(kt),
      St = "shown".concat(kt),
      Dt = "hide".concat(kt),
      $t = "hidden".concat(kt),
      It = "click".concat(kt, ".data-api"),
      Nt = "show",
      Pt = "collapse",
      Mt = "collapsing",
      jt = ":scope .".concat(Pt, " .").concat(Pt),
      Ft = '[data-bs-toggle="collapse"]',
      Ht = {
    parent: null,
    toggle: !0
  },
      Wt = {
    parent: "(null|element)",
    toggle: "boolean"
  };

  var Bt = /*#__PURE__*/function (_W4) {
    _inherits(Bt, _W4);

    var _super6 = _createSuper(Bt);

    function Bt(t, e) {
      var _this12;

      _classCallCheck(this, Bt);

      _this12 = _super6.call(this, t, e), _this12._isTransitioning = !1, _this12._triggerArray = [];
      var i = z.find(Ft);

      var _iterator7 = _createForOfIteratorHelper(i),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _t6 = _step7.value;

          var _e6 = z.getSelectorFromElement(_t6),
              _i12 = z.find(_e6).filter(function (t) {
            return t === _this12._element;
          });

          null !== _e6 && _i12.length && _this12._triggerArray.push(_t6);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      _this12._initializeChildren(), _this12._config.parent || _this12._addAriaAndCollapsedClass(_this12._triggerArray, _this12._isShown()), _this12._config.toggle && _this12.toggle();
      return _this12;
    }

    _createClass(Bt, [{
      key: "toggle",
      value: function toggle() {
        this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _this13 = this;

        if (this._isTransitioning || this._isShown()) return;
        var t = [];
        if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(function (t) {
          return t !== _this13._element;
        }).map(function (t) {
          return Bt.getOrCreateInstance(t, {
            toggle: !1
          });
        })), t.length && t[0]._isTransitioning) return;
        if (N.trigger(this._element, Lt).defaultPrevented) return;

        var _iterator8 = _createForOfIteratorHelper(t),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _e7 = _step8.value;

            _e7.hide();
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }

        var e = this._getDimension();

        this._element.classList.remove(Pt), this._element.classList.add(Mt), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
        var i = "scroll".concat(e[0].toUpperCase() + e.slice(1));
        this._queueCallback(function () {
          _this13._isTransitioning = !1, _this13._element.classList.remove(Mt), _this13._element.classList.add(Pt, Nt), _this13._element.style[e] = "", N.trigger(_this13._element, St);
        }, this._element, !0), this._element.style[e] = "".concat(this._element[i], "px");
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this14 = this;

        if (this._isTransitioning || !this._isShown()) return;
        if (N.trigger(this._element, Dt).defaultPrevented) return;

        var t = this._getDimension();

        this._element.style[t] = "".concat(this._element.getBoundingClientRect()[t], "px"), d(this._element), this._element.classList.add(Mt), this._element.classList.remove(Pt, Nt);

        var _iterator9 = _createForOfIteratorHelper(this._triggerArray),
            _step9;

        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var _t7 = _step9.value;

            var _e8 = z.getElementFromSelector(_t7);

            _e8 && !this._isShown(_e8) && this._addAriaAndCollapsedClass([_t7], !1);
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }

        this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(function () {
          _this14._isTransitioning = !1, _this14._element.classList.remove(Mt), _this14._element.classList.add(Pt), N.trigger(_this14._element, $t);
        }, this._element, !0);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return t.classList.contains(Nt);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.toggle = Boolean(t.toggle), t.parent = r(t.parent), t;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
      }
    }, {
      key: "_initializeChildren",
      value: function _initializeChildren() {
        if (!this._config.parent) return;

        var t = this._getFirstLevelChildren(Ft);

        var _iterator10 = _createForOfIteratorHelper(t),
            _step10;

        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var _e9 = _step10.value;

            var _t8 = z.getElementFromSelector(_e9);

            _t8 && this._addAriaAndCollapsedClass([_e9], this._isShown(_t8));
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
      }
    }, {
      key: "_getFirstLevelChildren",
      value: function _getFirstLevelChildren(t) {
        var e = z.find(jt, this._config.parent);
        return z.find(t, this._config.parent).filter(function (t) {
          return !e.includes(t);
        });
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(t, e) {
        if (t.length) {
          var _iterator11 = _createForOfIteratorHelper(t),
              _step11;

          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var _i13 = _step11.value;
              _i13.classList.toggle("collapsed", !e), _i13.setAttribute("aria-expanded", e);
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }
        }
      }
    }], [{
      key: "Default",
      get: function get() {
        return Ht;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Wt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "collapse";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        var e = {};
        return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each(function () {
          var i = Bt.getOrCreateInstance(this, e);

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t]();
          }
        });
      }
    }]);

    return Bt;
  }(W);

  N.on(document, It, Ft, function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();

    var _iterator12 = _createForOfIteratorHelper(z.getMultipleElementsFromSelector(this)),
        _step12;

    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var _t9 = _step12.value;
        Bt.getOrCreateInstance(_t9, {
          toggle: !1
        }).toggle();
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
  }), m(Bt);
  var zt = "top",
      Rt = "bottom",
      qt = "right",
      Vt = "left",
      Kt = "auto",
      Qt = [zt, Rt, qt, Vt],
      Xt = "start",
      Yt = "end",
      Ut = "clippingParents",
      Gt = "viewport",
      Jt = "popper",
      Zt = "reference",
      te = Qt.reduce(function (t, e) {
    return t.concat([e + "-" + Xt, e + "-" + Yt]);
  }, []),
      ee = [].concat(Qt, [Kt]).reduce(function (t, e) {
    return t.concat([e, e + "-" + Xt, e + "-" + Yt]);
  }, []),
      ie = "beforeRead",
      ne = "read",
      se = "afterRead",
      oe = "beforeMain",
      re = "main",
      ae = "afterMain",
      le = "beforeWrite",
      ce = "write",
      he = "afterWrite",
      de = [ie, ne, se, oe, re, ae, le, ce, he];

  function ue(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }

  function fe(t) {
    if (null == t) return window;

    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return e && e.defaultView || window;
    }

    return t;
  }

  function pe(t) {
    return t instanceof fe(t).Element || t instanceof Element;
  }

  function me(t) {
    return t instanceof fe(t).HTMLElement || t instanceof HTMLElement;
  }

  function ge(t) {
    return "undefined" != typeof ShadowRoot && (t instanceof fe(t).ShadowRoot || t instanceof ShadowRoot);
  }

  var _e = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function fn(t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
            n = e.attributes[t] || {},
            s = e.elements[t];
        me(s) && ue(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function (t) {
          var e = n[t];
          !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
        }));
      });
    },
    effect: function effect(t) {
      var e = t.state,
          i = {
        popper: {
          position: e.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function () {
        Object.keys(e.elements).forEach(function (t) {
          var n = e.elements[t],
              s = e.attributes[t] || {},
              o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function (t, e) {
            return t[e] = "", t;
          }, {});
          me(n) && ue(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function (t) {
            n.removeAttribute(t);
          }));
        });
      };
    },
    requires: ["computeStyles"]
  };

  function be(t) {
    return t.split("-")[0];
  }

  var ve = Math.max,
      ye = Math.min,
      we = Math.round;

  function Ae() {
    var t = navigator.userAgentData;
    return null != t && t.brands && Array.isArray(t.brands) ? t.brands.map(function (t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }

  function Ee() {
    return !/^((?!chrome|android).)*safari/i.test(Ae());
  }

  function Te(t, e, i) {
    void 0 === e && (e = !1), void 0 === i && (i = !1);
    var n = t.getBoundingClientRect(),
        s = 1,
        o = 1;
    e && me(t) && (s = t.offsetWidth > 0 && we(n.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && we(n.height) / t.offsetHeight || 1);
    var r = (pe(t) ? fe(t) : window).visualViewport,
        a = !Ee() && i,
        l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
        c = (n.top + (a && r ? r.offsetTop : 0)) / o,
        h = n.width / s,
        d = n.height / o;
    return {
      width: h,
      height: d,
      top: c,
      right: l + h,
      bottom: c + d,
      left: l,
      x: l,
      y: c
    };
  }

  function Ce(t) {
    var e = Te(t),
        i = t.offsetWidth,
        n = t.offsetHeight;
    return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: i,
      height: n
    };
  }

  function Oe(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;

    if (i && ge(i)) {
      var n = e;

      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }

    return !1;
  }

  function xe(t) {
    return fe(t).getComputedStyle(t);
  }

  function ke(t) {
    return ["table", "td", "th"].indexOf(ue(t)) >= 0;
  }

  function Le(t) {
    return ((pe(t) ? t.ownerDocument : t.document) || window.document).documentElement;
  }

  function Se(t) {
    return "html" === ue(t) ? t : t.assignedSlot || t.parentNode || (ge(t) ? t.host : null) || Le(t);
  }

  function De(t) {
    return me(t) && "fixed" !== xe(t).position ? t.offsetParent : null;
  }

  function $e(t) {
    for (var e = fe(t), i = De(t); i && ke(i) && "static" === xe(i).position;) {
      i = De(i);
    }

    return i && ("html" === ue(i) || "body" === ue(i) && "static" === xe(i).position) ? e : i || function (t) {
      var e = /firefox/i.test(Ae());
      if (/Trident/i.test(Ae()) && me(t) && "fixed" === xe(t).position) return null;
      var i = Se(t);

      for (ge(i) && (i = i.host); me(i) && ["html", "body"].indexOf(ue(i)) < 0;) {
        var n = xe(i);
        if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
        i = i.parentNode;
      }

      return null;
    }(t) || e;
  }

  function Ie(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }

  function Ne(t, e, i) {
    return ve(t, ye(e, i));
  }

  function Pe(t) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, t);
  }

  function Me(t, e) {
    return e.reduce(function (e, i) {
      return e[i] = t, e;
    }, {});
  }

  var je = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e,
          i = t.state,
          n = t.name,
          s = t.options,
          o = i.elements.arrow,
          r = i.modifiersData.popperOffsets,
          a = be(i.placement),
          l = Ie(a),
          c = [Vt, qt].indexOf(a) >= 0 ? "height" : "width";

      if (o && r) {
        var h = function (t, e) {
          return Pe("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
            placement: e.placement
          })) : t) ? t : Me(t, Qt));
        }(s.padding, i),
            d = Ce(o),
            u = "y" === l ? zt : Vt,
            f = "y" === l ? Rt : qt,
            p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
            m = r[l] - i.rects.reference[l],
            g = $e(o),
            _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
            b = p / 2 - m / 2,
            v = h[u],
            y = _ - d[c] - h[f],
            w = _ / 2 - d[c] / 2 + b,
            A = Ne(v, w, y),
            E = l;

        i.modifiersData[n] = ((e = {})[E] = A, e.centerOffset = A - w, e);
      }
    },
    effect: function effect(t) {
      var e = t.state,
          i = t.options.element,
          n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Oe(e.elements.popper, n) && (e.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };

  function Fe(t) {
    return t.split("-")[1];
  }

  var He = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };

  function We(t) {
    var e,
        i = t.popper,
        n = t.popperRect,
        s = t.placement,
        o = t.variation,
        r = t.offsets,
        a = t.position,
        l = t.gpuAcceleration,
        c = t.adaptive,
        h = t.roundOffsets,
        d = t.isFixed,
        u = r.x,
        f = void 0 === u ? 0 : u,
        p = r.y,
        m = void 0 === p ? 0 : p,
        g = "function" == typeof h ? h({
      x: f,
      y: m
    }) : {
      x: f,
      y: m
    };
    f = g.x, m = g.y;

    var _ = r.hasOwnProperty("x"),
        b = r.hasOwnProperty("y"),
        v = Vt,
        y = zt,
        w = window;

    if (c) {
      var A = $e(i),
          E = "clientHeight",
          T = "clientWidth";
      A === fe(i) && "static" !== xe(A = Le(i)).position && "absolute" === a && (E = "scrollHeight", T = "scrollWidth"), (s === zt || (s === Vt || s === qt) && o === Yt) && (y = Rt, m -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - n.height, m *= l ? 1 : -1), s !== Vt && (s !== zt && s !== Rt || o !== Yt) || (v = qt, f -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n.width, f *= l ? 1 : -1);
    }

    var C,
        O = Object.assign({
      position: a
    }, c && He),
        x = !0 === h ? function (t, e) {
      var i = t.x,
          n = t.y,
          s = e.devicePixelRatio || 1;
      return {
        x: we(i * s) / s || 0,
        y: we(n * s) / s || 0
      };
    }({
      x: f,
      y: m
    }, fe(i)) : {
      x: f,
      y: m
    };
    return f = x.x, m = x.y, l ? Object.assign({}, O, ((C = {})[y] = b ? "0" : "", C[v] = _ ? "0" : "", C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", C)) : Object.assign({}, O, ((e = {})[y] = b ? m + "px" : "", e[v] = _ ? f + "px" : "", e.transform = "", e));
  }

  var Be = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = i.gpuAcceleration,
          s = void 0 === n || n,
          o = i.adaptive,
          r = void 0 === o || o,
          a = i.roundOffsets,
          l = void 0 === a || a,
          c = {
        placement: be(e.placement),
        variation: Fe(e.placement),
        popper: e.elements.popper,
        popperRect: e.rects.popper,
        gpuAcceleration: s,
        isFixed: "fixed" === e.options.strategy
      };
      null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, We(Object.assign({}, c, {
        offsets: e.modifiersData.popperOffsets,
        position: e.options.strategy,
        adaptive: r,
        roundOffsets: l
      })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, We(Object.assign({}, c, {
        offsets: e.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: l
      })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-placement": e.placement
      });
    },
    data: {}
  };
  var ze = {
    passive: !0
  };
  var Re = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function fn() {},
    effect: function effect(t) {
      var e = t.state,
          i = t.instance,
          n = t.options,
          s = n.scroll,
          o = void 0 === s || s,
          r = n.resize,
          a = void 0 === r || r,
          l = fe(e.elements.popper),
          c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return o && c.forEach(function (t) {
        t.addEventListener("scroll", i.update, ze);
      }), a && l.addEventListener("resize", i.update, ze), function () {
        o && c.forEach(function (t) {
          t.removeEventListener("scroll", i.update, ze);
        }), a && l.removeEventListener("resize", i.update, ze);
      };
    },
    data: {}
  };
  var qe = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };

  function Ve(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return qe[t];
    });
  }

  var Ke = {
    start: "end",
    end: "start"
  };

  function Qe(t) {
    return t.replace(/start|end/g, function (t) {
      return Ke[t];
    });
  }

  function Xe(t) {
    var e = fe(t);
    return {
      scrollLeft: e.pageXOffset,
      scrollTop: e.pageYOffset
    };
  }

  function Ye(t) {
    return Te(Le(t)).left + Xe(t).scrollLeft;
  }

  function Ue(t) {
    var e = xe(t),
        i = e.overflow,
        n = e.overflowX,
        s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }

  function Ge(t) {
    return ["html", "body", "#document"].indexOf(ue(t)) >= 0 ? t.ownerDocument.body : me(t) && Ue(t) ? t : Ge(Se(t));
  }

  function Je(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = Ge(t),
        s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
        o = fe(n),
        r = s ? [o].concat(o.visualViewport || [], Ue(n) ? n : []) : n,
        a = e.concat(r);
    return s ? a : a.concat(Je(Se(r)));
  }

  function Ze(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height
    });
  }

  function ti(t, e, i) {
    return e === Gt ? Ze(function (t, e) {
      var i = fe(t),
          n = Le(t),
          s = i.visualViewport,
          o = n.clientWidth,
          r = n.clientHeight,
          a = 0,
          l = 0;

      if (s) {
        o = s.width, r = s.height;
        var c = Ee();
        (c || !c && "fixed" === e) && (a = s.offsetLeft, l = s.offsetTop);
      }

      return {
        width: o,
        height: r,
        x: a + Ye(t),
        y: l
      };
    }(t, i)) : pe(e) ? function (t, e) {
      var i = Te(t, !1, "fixed" === e);
      return i.top = i.top + t.clientTop, i.left = i.left + t.clientLeft, i.bottom = i.top + t.clientHeight, i.right = i.left + t.clientWidth, i.width = t.clientWidth, i.height = t.clientHeight, i.x = i.left, i.y = i.top, i;
    }(e, i) : Ze(function (t) {
      var e,
          i = Le(t),
          n = Xe(t),
          s = null == (e = t.ownerDocument) ? void 0 : e.body,
          o = ve(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
          r = ve(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
          a = -n.scrollLeft + Ye(t),
          l = -n.scrollTop;
      return "rtl" === xe(s || i).direction && (a += ve(i.clientWidth, s ? s.clientWidth : 0) - o), {
        width: o,
        height: r,
        x: a,
        y: l
      };
    }(Le(t)));
  }

  function ei(t) {
    var e,
        i = t.reference,
        n = t.element,
        s = t.placement,
        o = s ? be(s) : null,
        r = s ? Fe(s) : null,
        a = i.x + i.width / 2 - n.width / 2,
        l = i.y + i.height / 2 - n.height / 2;

    switch (o) {
      case zt:
        e = {
          x: a,
          y: i.y - n.height
        };
        break;

      case Rt:
        e = {
          x: a,
          y: i.y + i.height
        };
        break;

      case qt:
        e = {
          x: i.x + i.width,
          y: l
        };
        break;

      case Vt:
        e = {
          x: i.x - n.width,
          y: l
        };
        break;

      default:
        e = {
          x: i.x,
          y: i.y
        };
    }

    var c = o ? Ie(o) : null;

    if (null != c) {
      var h = "y" === c ? "height" : "width";

      switch (r) {
        case Xt:
          e[c] = e[c] - (i[h] / 2 - n[h] / 2);
          break;

        case Yt:
          e[c] = e[c] + (i[h] / 2 - n[h] / 2);
      }
    }

    return e;
  }

  function ii(t, e) {
    void 0 === e && (e = {});

    var i = e,
        n = i.placement,
        s = void 0 === n ? t.placement : n,
        o = i.strategy,
        r = void 0 === o ? t.strategy : o,
        a = i.boundary,
        l = void 0 === a ? Ut : a,
        c = i.rootBoundary,
        h = void 0 === c ? Gt : c,
        d = i.elementContext,
        u = void 0 === d ? Jt : d,
        f = i.altBoundary,
        p = void 0 !== f && f,
        m = i.padding,
        g = void 0 === m ? 0 : m,
        _ = Pe("number" != typeof g ? g : Me(g, Qt)),
        b = u === Jt ? Zt : Jt,
        v = t.rects.popper,
        y = t.elements[p ? b : u],
        w = function (t, e, i, n) {
      var s = "clippingParents" === e ? function (t) {
        var e = Je(Se(t)),
            i = ["absolute", "fixed"].indexOf(xe(t).position) >= 0 && me(t) ? $e(t) : t;
        return pe(i) ? e.filter(function (t) {
          return pe(t) && Oe(t, i) && "body" !== ue(t);
        }) : [];
      }(t) : [].concat(e),
          o = [].concat(s, [i]),
          r = o[0],
          a = o.reduce(function (e, i) {
        var s = ti(t, i, n);
        return e.top = ve(s.top, e.top), e.right = ye(s.right, e.right), e.bottom = ye(s.bottom, e.bottom), e.left = ve(s.left, e.left), e;
      }, ti(t, r, n));
      return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
    }(pe(y) ? y : y.contextElement || Le(t.elements.popper), l, h, r),
        A = Te(t.elements.reference),
        E = ei({
      reference: A,
      element: v,
      strategy: "absolute",
      placement: s
    }),
        T = Ze(Object.assign({}, v, E)),
        C = u === Jt ? T : A,
        O = {
      top: w.top - C.top + _.top,
      bottom: C.bottom - w.bottom + _.bottom,
      left: w.left - C.left + _.left,
      right: C.right - w.right + _.right
    },
        x = t.modifiersData.offset;

    if (u === Jt && x) {
      var k = x[s];
      Object.keys(O).forEach(function (t) {
        var e = [qt, Rt].indexOf(t) >= 0 ? 1 : -1,
            i = [zt, Rt].indexOf(t) >= 0 ? "y" : "x";
        O[t] += k[i] * e;
      });
    }

    return O;
  }

  function ni(t, e) {
    void 0 === e && (e = {});
    var i = e,
        n = i.placement,
        s = i.boundary,
        o = i.rootBoundary,
        r = i.padding,
        a = i.flipVariations,
        l = i.allowedAutoPlacements,
        c = void 0 === l ? ee : l,
        h = Fe(n),
        d = h ? a ? te : te.filter(function (t) {
      return Fe(t) === h;
    }) : Qt,
        u = d.filter(function (t) {
      return c.indexOf(t) >= 0;
    });
    0 === u.length && (u = d);
    var f = u.reduce(function (e, i) {
      return e[i] = ii(t, {
        placement: i,
        boundary: s,
        rootBoundary: o,
        padding: r
      })[be(i)], e;
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }

  var si = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name;

      if (!e.modifiersData[n]._skip) {
        for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = be(g), b = l || (_ !== g && p ? function (t) {
          if (be(t) === Kt) return [];
          var e = Ve(t);
          return [Qe(t), e, Qe(e)];
        }(g) : [Ve(g)]), v = [g].concat(b).reduce(function (t, i) {
          return t.concat(be(i) === Kt ? ni(e, {
            placement: i,
            boundary: h,
            rootBoundary: d,
            padding: c,
            flipVariations: p,
            allowedAutoPlacements: m
          }) : i);
        }, []), y = e.rects.reference, w = e.rects.popper, A = new Map(), E = !0, T = v[0], C = 0; C < v.length; C++) {
          var O = v[C],
              x = be(O),
              k = Fe(O) === Xt,
              L = [zt, Rt].indexOf(x) >= 0,
              S = L ? "width" : "height",
              D = ii(e, {
            placement: O,
            boundary: h,
            rootBoundary: d,
            altBoundary: u,
            padding: c
          }),
              $ = L ? k ? qt : Vt : k ? Rt : zt;
          y[S] > w[S] && ($ = Ve($));
          var I = Ve($),
              N = [];

          if (o && N.push(D[x] <= 0), a && N.push(D[$] <= 0, D[I] <= 0), N.every(function (t) {
            return t;
          })) {
            T = O, E = !1;
            break;
          }

          A.set(O, N);
        }

        if (E) for (var P = function P(t) {
          var e = v.find(function (e) {
            var i = A.get(e);
            if (i) return i.slice(0, t).every(function (t) {
              return t;
            });
          });
          if (e) return T = e, "break";
        }, M = p ? 3 : 1; M > 0 && "break" !== P(M); M--) {
          ;
        }
        e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0);
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };

  function oi(t, e, i) {
    return void 0 === i && (i = {
      x: 0,
      y: 0
    }), {
      top: t.top - e.height - i.y,
      right: t.right - e.width + i.x,
      bottom: t.bottom - e.height + i.y,
      left: t.left - e.width - i.x
    };
  }

  function ri(t) {
    return [zt, qt, Rt, Vt].some(function (e) {
      return t[e] >= 0;
    });
  }

  var ai = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function fn(t) {
      var e = t.state,
          i = t.name,
          n = e.rects.reference,
          s = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = ii(e, {
        elementContext: "reference"
      }),
          a = ii(e, {
        altBoundary: !0
      }),
          l = oi(r, n),
          c = oi(a, s, o),
          h = ri(l),
          d = ri(c);
      e.modifiersData[i] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: c,
        isReferenceHidden: h,
        hasPopperEscaped: d
      }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-reference-hidden": h,
        "data-popper-escaped": d
      });
    }
  },
      li = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name,
          s = i.offset,
          o = void 0 === s ? [0, 0] : s,
          r = ee.reduce(function (t, i) {
        return t[i] = function (t, e, i) {
          var n = be(t),
              s = [Vt, zt].indexOf(n) >= 0 ? -1 : 1,
              o = "function" == typeof i ? i(Object.assign({}, e, {
            placement: t
          })) : i,
              r = o[0],
              a = o[1];
          return r = r || 0, a = (a || 0) * s, [Vt, qt].indexOf(n) >= 0 ? {
            x: a,
            y: r
          } : {
            x: r,
            y: a
          };
        }(i, e.rects, o), t;
      }, {}),
          a = r[e.placement],
          l = a.x,
          c = a.y;
      null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r;
    }
  },
      ci = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function fn(t) {
      var e = t.state,
          i = t.name;
      e.modifiersData[i] = ei({
        reference: e.rects.reference,
        element: e.rects.popper,
        strategy: "absolute",
        placement: e.placement
      });
    },
    data: {}
  },
      hi = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name,
          s = i.mainAxis,
          o = void 0 === s || s,
          r = i.altAxis,
          a = void 0 !== r && r,
          l = i.boundary,
          c = i.rootBoundary,
          h = i.altBoundary,
          d = i.padding,
          u = i.tether,
          f = void 0 === u || u,
          p = i.tetherOffset,
          m = void 0 === p ? 0 : p,
          g = ii(e, {
        boundary: l,
        rootBoundary: c,
        padding: d,
        altBoundary: h
      }),
          _ = be(e.placement),
          b = Fe(e.placement),
          v = !b,
          y = Ie(_),
          w = "x" === y ? "y" : "x",
          A = e.modifiersData.popperOffsets,
          E = e.rects.reference,
          T = e.rects.popper,
          C = "function" == typeof m ? m(Object.assign({}, e.rects, {
        placement: e.placement
      })) : m,
          O = "number" == typeof C ? {
        mainAxis: C,
        altAxis: C
      } : Object.assign({
        mainAxis: 0,
        altAxis: 0
      }, C),
          x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
          k = {
        x: 0,
        y: 0
      };

      if (A) {
        if (o) {
          var L,
              S = "y" === y ? zt : Vt,
              D = "y" === y ? Rt : qt,
              $ = "y" === y ? "height" : "width",
              I = A[y],
              N = I + g[S],
              P = I - g[D],
              M = f ? -T[$] / 2 : 0,
              j = b === Xt ? E[$] : T[$],
              F = b === Xt ? -T[$] : -E[$],
              H = e.elements.arrow,
              W = f && H ? Ce(H) : {
            width: 0,
            height: 0
          },
              B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
              z = B[S],
              R = B[D],
              q = Ne(0, E[$], W[$]),
              V = v ? E[$] / 2 - M - q - z - O.mainAxis : j - q - z - O.mainAxis,
              K = v ? -E[$] / 2 + M + q + R + O.mainAxis : F + q + R + O.mainAxis,
              Q = e.elements.arrow && $e(e.elements.arrow),
              X = Q ? "y" === y ? Q.clientTop || 0 : Q.clientLeft || 0 : 0,
              Y = null != (L = null == x ? void 0 : x[y]) ? L : 0,
              U = I + K - Y,
              G = Ne(f ? ye(N, I + V - Y - X) : N, I, f ? ve(P, U) : P);
          A[y] = G, k[y] = G - I;
        }

        if (a) {
          var J,
              Z = "x" === y ? zt : Vt,
              tt = "x" === y ? Rt : qt,
              et = A[w],
              it = "y" === w ? "height" : "width",
              nt = et + g[Z],
              st = et - g[tt],
              ot = -1 !== [zt, Vt].indexOf(_),
              rt = null != (J = null == x ? void 0 : x[w]) ? J : 0,
              at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis,
              lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st,
              ct = f && ot ? function (t, e, i) {
            var n = Ne(t, e, i);
            return n > i ? i : n;
          }(at, et, lt) : Ne(f ? at : nt, et, f ? lt : st);
          A[w] = ct, k[w] = ct - et;
        }

        e.modifiersData[n] = k;
      }
    },
    requiresIfExists: ["offset"]
  };

  function di(t, e, i) {
    void 0 === i && (i = !1);

    var n,
        s,
        o = me(e),
        r = me(e) && function (t) {
      var e = t.getBoundingClientRect(),
          i = we(e.width) / t.offsetWidth || 1,
          n = we(e.height) / t.offsetHeight || 1;
      return 1 !== i || 1 !== n;
    }(e),
        a = Le(e),
        l = Te(t, r, i),
        c = {
      scrollLeft: 0,
      scrollTop: 0
    },
        h = {
      x: 0,
      y: 0
    };

    return (o || !o && !i) && (("body" !== ue(e) || Ue(a)) && (c = (n = e) !== fe(n) && me(n) ? {
      scrollLeft: (s = n).scrollLeft,
      scrollTop: s.scrollTop
    } : Xe(n)), me(e) ? ((h = Te(e, !0)).x += e.clientLeft, h.y += e.clientTop) : a && (h.x = Ye(a))), {
      x: l.left + c.scrollLeft - h.x,
      y: l.top + c.scrollTop - h.y,
      width: l.width,
      height: l.height
    };
  }

  function ui(t) {
    var e = new Map(),
        i = new Set(),
        n = [];

    function s(t) {
      i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {
        if (!i.has(t)) {
          var n = e.get(t);
          n && s(n);
        }
      }), n.push(t);
    }

    return t.forEach(function (t) {
      e.set(t.name, t);
    }), t.forEach(function (t) {
      i.has(t.name) || s(t);
    }), n;
  }

  var fi = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };

  function pi() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) {
      e[i] = arguments[i];
    }

    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }

  function mi(t) {
    void 0 === t && (t = {});
    var e = t,
        i = e.defaultModifiers,
        n = void 0 === i ? [] : i,
        s = e.defaultOptions,
        o = void 0 === s ? fi : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
          r,
          a = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, fi, o),
        modifiersData: {},
        elements: {
          reference: t,
          popper: e
        },
        attributes: {},
        styles: {}
      },
          l = [],
          c = !1,
          h = {
        state: a,
        setOptions: function setOptions(i) {
          var s = "function" == typeof i ? i(a.options) : i;
          d(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
            reference: pe(t) ? Je(t) : t.contextElement ? Je(t.contextElement) : [],
            popper: Je(e)
          };

          var r,
              c,
              u = function (t) {
            var e = ui(t);
            return de.reduce(function (t, i) {
              return t.concat(e.filter(function (t) {
                return t.phase === i;
              }));
            }, []);
          }((r = [].concat(n, a.options.modifiers), c = r.reduce(function (t, e) {
            var i = t[e.name];
            return t[e.name] = i ? Object.assign({}, i, e, {
              options: Object.assign({}, i.options, e.options),
              data: Object.assign({}, i.data, e.data)
            }) : e, t;
          }, {}), Object.keys(c).map(function (t) {
            return c[t];
          })));

          return a.orderedModifiers = u.filter(function (t) {
            return t.enabled;
          }), a.orderedModifiers.forEach(function (t) {
            var e = t.name,
                i = t.options,
                n = void 0 === i ? {} : i,
                s = t.effect;

            if ("function" == typeof s) {
              var o = s({
                state: a,
                name: e,
                instance: h,
                options: n
              });
              l.push(o || function () {});
            }
          }), h.update();
        },
        forceUpdate: function forceUpdate() {
          if (!c) {
            var t = a.elements,
                e = t.reference,
                i = t.popper;

            if (pi(e, i)) {
              a.rects = {
                reference: di(e, $e(i), "fixed" === a.options.strategy),
                popper: Ce(i)
              }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function (t) {
                return a.modifiersData[t.name] = Object.assign({}, t.data);
              });

              for (var n = 0; n < a.orderedModifiers.length; n++) {
                if (!0 !== a.reset) {
                  var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      d = s.name;
                  "function" == typeof o && (a = o({
                    state: a,
                    options: l,
                    name: d,
                    instance: h
                  }) || a);
                } else a.reset = !1, n = -1;
              }
            }
          }
        },
        update: (s = function s() {
          return new Promise(function (t) {
            h.forceUpdate(), t(a);
          });
        }, function () {
          return r || (r = new Promise(function (t) {
            Promise.resolve().then(function () {
              r = void 0, t(s());
            });
          })), r;
        }),
        destroy: function destroy() {
          d(), c = !0;
        }
      };
      if (!pi(t, e)) return h;

      function d() {
        l.forEach(function (t) {
          return t();
        }), l = [];
      }

      return h.setOptions(i).then(function (t) {
        !c && i.onFirstUpdate && i.onFirstUpdate(t);
      }), h;
    };
  }

  var gi = mi(),
      _i = mi({
    defaultModifiers: [Re, ci, Be, _e]
  }),
      bi = mi({
    defaultModifiers: [Re, ci, Be, _e, li, si, hi, je, ai]
  });

  var vi = Object.freeze(Object.defineProperty({
    __proto__: null,
    afterMain: ae,
    afterRead: se,
    afterWrite: he,
    applyStyles: _e,
    arrow: je,
    auto: Kt,
    basePlacements: Qt,
    beforeMain: oe,
    beforeRead: ie,
    beforeWrite: le,
    bottom: Rt,
    clippingParents: Ut,
    computeStyles: Be,
    createPopper: bi,
    createPopperBase: gi,
    createPopperLite: _i,
    detectOverflow: ii,
    end: Yt,
    eventListeners: Re,
    flip: si,
    hide: ai,
    left: Vt,
    main: re,
    modifierPhases: de,
    offset: li,
    placements: ee,
    popper: Jt,
    popperGenerator: mi,
    popperOffsets: ci,
    preventOverflow: hi,
    read: ne,
    reference: Zt,
    right: qt,
    start: Xt,
    top: zt,
    variationPlacements: te,
    viewport: Gt,
    write: ce
  }, Symbol.toStringTag, {
    value: "Module"
  })),
      yi = "dropdown",
      wi = ".bs.dropdown",
      Ai = ".data-api",
      Ei = "ArrowUp",
      Ti = "ArrowDown",
      Ci = "hide".concat(wi),
      Oi = "hidden".concat(wi),
      xi = "show".concat(wi),
      ki = "shown".concat(wi),
      Li = "click".concat(wi).concat(Ai),
      Si = "keydown".concat(wi).concat(Ai),
      Di = "keyup".concat(wi).concat(Ai),
      $i = "show",
      Ii = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
      Ni = "".concat(Ii, ".").concat($i),
      Pi = ".dropdown-menu",
      Mi = p() ? "top-end" : "top-start",
      ji = p() ? "top-start" : "top-end",
      Fi = p() ? "bottom-end" : "bottom-start",
      Hi = p() ? "bottom-start" : "bottom-end",
      Wi = p() ? "left-start" : "right-start",
      Bi = p() ? "right-start" : "left-start",
      zi = {
    autoClose: !0,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle"
  },
      Ri = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
  };

  var qi = /*#__PURE__*/function (_W5) {
    _inherits(qi, _W5);

    var _super7 = _createSuper(qi);

    function qi(t, e) {
      var _this15;

      _classCallCheck(this, qi);

      _this15 = _super7.call(this, t, e), _this15._popper = null, _this15._parent = _this15._element.parentNode, _this15._menu = z.next(_this15._element, Pi)[0] || z.prev(_this15._element, Pi)[0] || z.findOne(Pi, _this15._parent), _this15._inNavbar = _this15._detectNavbar();
      return _this15;
    }

    _createClass(qi, [{
      key: "toggle",
      value: function toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        if (l(this._element) || this._isShown()) return;
        var t = {
          relatedTarget: this._element
        };

        if (!N.trigger(this._element, xi, t).defaultPrevented) {
          if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) {
            var _ref4;

            var _iterator13 = _createForOfIteratorHelper((_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children))),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var _t10 = _step13.value;
                N.on(_t10, "mouseover", h);
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
          }

          this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add($i), this._element.classList.add($i), N.trigger(this._element, ki, t);
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        if (l(this._element) || !this._isShown()) return;
        var t = {
          relatedTarget: this._element
        };

        this._completeHide(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._popper && this._popper.destroy(), _get(_getPrototypeOf(qi.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
    }, {
      key: "_completeHide",
      value: function _completeHide(t) {
        if (!N.trigger(this._element, Ci, t).defaultPrevented) {
          if ("ontouchstart" in document.documentElement) {
            var _ref5;

            var _iterator14 = _createForOfIteratorHelper((_ref5 = []).concat.apply(_ref5, _toConsumableArray(document.body.children))),
                _step14;

            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                var _t11 = _step14.value;
                N.off(_t11, "mouseover", h);
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }
          }

          this._popper && this._popper.destroy(), this._menu.classList.remove($i), this._element.classList.remove($i), this._element.setAttribute("aria-expanded", "false"), F.removeDataAttribute(this._menu, "popper"), N.trigger(this._element, Oi, t);
        }
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if ("object" == typeof (t = _get(_getPrototypeOf(qi.prototype), "_getConfig", this).call(this, t)).reference && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("".concat(yi.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
        return t;
      }
    }, {
      key: "_createPopper",
      value: function _createPopper() {
        if (void 0 === vi) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        var t = this._element;
        "parent" === this._config.reference ? t = this._parent : o(this._config.reference) ? t = r(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);

        var e = this._getPopperConfig();

        this._popper = bi(t, this._menu, e);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        return this._menu.classList.contains($i);
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var t = this._parent;
        if (t.classList.contains("dropend")) return Wi;
        if (t.classList.contains("dropstart")) return Bi;
        if (t.classList.contains("dropup-center")) return "top";
        if (t.classList.contains("dropdown-center")) return "bottom";
        var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? ji : Mi : e ? Hi : Fi;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this16 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this16._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var t = {
          placement: this._getPlacement(),
          modifiers: [{
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }]
        };
        return (this._inNavbar || "static" === this._config.display) && (F.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), _objectSpread(_objectSpread({}, t), g(this._config.popperConfig, [t]));
      }
    }, {
      key: "_selectMenuItem",
      value: function _selectMenuItem(_ref6) {
        var t = _ref6.key,
            e = _ref6.target;
        var i = z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(function (t) {
          return a(t);
        });
        i.length && b(i, e, t === Ti, !i.includes(e)).focus();
      }
    }], [{
      key: "Default",
      get: function get() {
        return zi;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ri;
      }
    }, {
      key: "NAME",
      get: function get() {
        return yi;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = qi.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(t) {
        if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
        var e = z.find(Ni);

        var _iterator15 = _createForOfIteratorHelper(e),
            _step15;

        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var _i14 = _step15.value;

            var _e10 = qi.getInstance(_i14);

            if (!_e10 || !1 === _e10._config.autoClose) continue;

            var _n6 = t.composedPath(),
                _s4 = _n6.includes(_e10._menu);

            if (_n6.includes(_e10._element) || "inside" === _e10._config.autoClose && !_s4 || "outside" === _e10._config.autoClose && _s4) continue;
            if (_e10._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
            var _o2 = {
              relatedTarget: _e10._element
            };
            "click" === t.type && (_o2.clickEvent = t), _e10._completeHide(_o2);
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(t) {
        var e = /input|textarea/i.test(t.target.tagName),
            i = "Escape" === t.key,
            n = [Ei, Ti].includes(t.key);
        if (!n && !i) return;
        if (e && !i) return;
        t.preventDefault();
        var s = this.matches(Ii) ? this : z.prev(this, Ii)[0] || z.next(this, Ii)[0] || z.findOne(Ii, t.delegateTarget.parentNode),
            o = qi.getOrCreateInstance(s);
        if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
        o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
      }
    }]);

    return qi;
  }(W);

  N.on(document, Si, Ii, qi.dataApiKeydownHandler), N.on(document, Si, Pi, qi.dataApiKeydownHandler), N.on(document, Li, qi.clearMenus), N.on(document, Di, qi.clearMenus), N.on(document, Li, Ii, function (t) {
    t.preventDefault(), qi.getOrCreateInstance(this).toggle();
  }), m(qi);
  var Vi = "backdrop",
      Ki = "show",
      Qi = "mousedown.bs.".concat(Vi),
      Xi = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: !1,
    isVisible: !0,
    rootElement: "body"
  },
      Yi = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
  };

  var Ui = /*#__PURE__*/function (_H3) {
    _inherits(Ui, _H3);

    var _super8 = _createSuper(Ui);

    function Ui(t) {
      var _this17;

      _classCallCheck(this, Ui);

      _this17 = _super8.call(this), _this17._config = _this17._getConfig(t), _this17._isAppended = !1, _this17._element = null;
      return _this17;
    }

    _createClass(Ui, [{
      key: "show",
      value: function show(t) {
        if (!this._config.isVisible) return void g(t);

        this._append();

        var e = this._getElement();

        this._config.isAnimated && d(e), e.classList.add(Ki), this._emulateAnimation(function () {
          g(t);
        });
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this18 = this;

        this._config.isVisible ? (this._getElement().classList.remove(Ki), this._emulateAnimation(function () {
          _this18.dispose(), g(t);
        })) : g(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._isAppended && (N.off(this._element, Qi), this._element.remove(), this._isAppended = !1);
      }
    }, {
      key: "_getElement",
      value: function _getElement() {
        if (!this._element) {
          var _t12 = document.createElement("div");

          _t12.className = this._config.className, this._config.isAnimated && _t12.classList.add("fade"), this._element = _t12;
        }

        return this._element;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.rootElement = r(t.rootElement), t;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _this19 = this;

        if (this._isAppended) return;

        var t = this._getElement();

        this._config.rootElement.append(t), N.on(t, Qi, function () {
          g(_this19._config.clickCallback);
        }), this._isAppended = !0;
      }
    }, {
      key: "_emulateAnimation",
      value: function _emulateAnimation(t) {
        _(t, this._getElement(), this._config.isAnimated);
      }
    }], [{
      key: "Default",
      get: function get() {
        return Xi;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Yi;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Vi;
      }
    }]);

    return Ui;
  }(H);

  var Gi = ".bs.focustrap",
      Ji = "focusin".concat(Gi),
      Zi = "keydown.tab".concat(Gi),
      tn = "backward",
      en = {
    autofocus: !0,
    trapElement: null
  },
      nn = {
    autofocus: "boolean",
    trapElement: "element"
  };

  var sn = /*#__PURE__*/function (_H4) {
    _inherits(sn, _H4);

    var _super9 = _createSuper(sn);

    function sn(t) {
      var _this20;

      _classCallCheck(this, sn);

      _this20 = _super9.call(this), _this20._config = _this20._getConfig(t), _this20._isActive = !1, _this20._lastTabNavDirection = null;
      return _this20;
    }

    _createClass(sn, [{
      key: "activate",
      value: function activate() {
        var _this21 = this;

        this._isActive || (this._config.autofocus && this._config.trapElement.focus(), N.off(document, Gi), N.on(document, Ji, function (t) {
          return _this21._handleFocusin(t);
        }), N.on(document, Zi, function (t) {
          return _this21._handleKeydown(t);
        }), this._isActive = !0);
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        this._isActive && (this._isActive = !1, N.off(document, Gi));
      }
    }, {
      key: "_handleFocusin",
      value: function _handleFocusin(t) {
        var e = this._config.trapElement;
        if (t.target === document || t.target === e || e.contains(t.target)) return;
        var i = z.focusableChildren(e);
        0 === i.length ? e.focus() : this._lastTabNavDirection === tn ? i[i.length - 1].focus() : i[0].focus();
      }
    }, {
      key: "_handleKeydown",
      value: function _handleKeydown(t) {
        "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? tn : "forward");
      }
    }], [{
      key: "Default",
      get: function get() {
        return en;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return nn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "focustrap";
      }
    }]);

    return sn;
  }(H);

  var on = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      rn = ".sticky-top",
      an = "padding-right",
      ln = "margin-right";

  var cn = /*#__PURE__*/function () {
    function cn() {
      _classCallCheck(this, cn);

      this._element = document.body;
    }

    _createClass(cn, [{
      key: "getWidth",
      value: function getWidth() {
        var t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t);
      }
    }, {
      key: "hide",
      value: function hide() {
        var t = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, an, function (e) {
          return e + t;
        }), this._setElementAttributes(on, an, function (e) {
          return e + t;
        }), this._setElementAttributes(rn, ln, function (e) {
          return e - t;
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, an), this._resetElementAttributes(on, an), this._resetElementAttributes(rn, ln);
      }
    }, {
      key: "isOverflowing",
      value: function isOverflowing() {
        return this.getWidth() > 0;
      }
    }, {
      key: "_disableOverFlow",
      value: function _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
      }
    }, {
      key: "_setElementAttributes",
      value: function _setElementAttributes(t, e, i) {
        var _this22 = this;

        var n = this.getWidth();

        this._applyManipulationCallback(t, function (t) {
          if (t !== _this22._element && window.innerWidth > t.clientWidth + n) return;

          _this22._saveInitialAttribute(t, e);

          var s = window.getComputedStyle(t).getPropertyValue(e);
          t.style.setProperty(e, "".concat(i(Number.parseFloat(s)), "px"));
        });
      }
    }, {
      key: "_saveInitialAttribute",
      value: function _saveInitialAttribute(t, e) {
        var i = t.style.getPropertyValue(e);
        i && F.setDataAttribute(t, e, i);
      }
    }, {
      key: "_resetElementAttributes",
      value: function _resetElementAttributes(t, e) {
        this._applyManipulationCallback(t, function (t) {
          var i = F.getDataAttribute(t, e);
          null !== i ? (F.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e);
        });
      }
    }, {
      key: "_applyManipulationCallback",
      value: function _applyManipulationCallback(t, e) {
        if (o(t)) e(t);else {
          var _iterator16 = _createForOfIteratorHelper(z.find(t, this._element)),
              _step16;

          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var _i15 = _step16.value;
              e(_i15);
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }
        }
      }
    }]);

    return cn;
  }();

  var hn = ".bs.modal",
      dn = "hide".concat(hn),
      un = "hidePrevented".concat(hn),
      fn = "hidden".concat(hn),
      pn = "show".concat(hn),
      mn = "shown".concat(hn),
      gn = "resize".concat(hn),
      _n = "click.dismiss".concat(hn),
      bn = "mousedown.dismiss".concat(hn),
      vn = "keydown.dismiss".concat(hn),
      yn = "click".concat(hn, ".data-api"),
      wn = "modal-open",
      An = "show",
      En = "modal-static",
      Tn = {
    backdrop: !0,
    focus: !0,
    keyboard: !0
  },
      Cn = {
    backdrop: "(boolean|string)",
    focus: "boolean",
    keyboard: "boolean"
  };

  var On = /*#__PURE__*/function (_W6) {
    _inherits(On, _W6);

    var _super10 = _createSuper(On);

    function On(t, e) {
      var _this23;

      _classCallCheck(this, On);

      _this23 = _super10.call(this, t, e), _this23._dialog = z.findOne(".modal-dialog", _this23._element), _this23._backdrop = _this23._initializeBackDrop(), _this23._focustrap = _this23._initializeFocusTrap(), _this23._isShown = !1, _this23._isTransitioning = !1, _this23._scrollBar = new cn(), _this23._addEventListeners();
      return _this23;
    }

    _createClass(On, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this24 = this;

        this._isShown || this._isTransitioning || N.trigger(this._element, pn, {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(wn), this._adjustDialog(), this._backdrop.show(function () {
          return _this24._showElement(t);
        }));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this25 = this;

        this._isShown && !this._isTransitioning && (N.trigger(this._element, dn).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(An), this._queueCallback(function () {
          return _this25._hideModal();
        }, this._element, this._isAnimated())));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        N.off(window, hn), N.off(this._dialog, hn), this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(On.prototype), "dispose", this).call(this);
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new Ui({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new sn({
          trapElement: this._element
        });
      }
    }, {
      key: "_showElement",
      value: function _showElement(t) {
        var _this26 = this;

        document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
        var e = z.findOne(".modal-body", this._dialog);
        e && (e.scrollTop = 0), d(this._element), this._element.classList.add(An), this._queueCallback(function () {
          _this26._config.focus && _this26._focustrap.activate(), _this26._isTransitioning = !1, N.trigger(_this26._element, mn, {
            relatedTarget: t
          });
        }, this._dialog, this._isAnimated());
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this27 = this;

        N.on(this._element, vn, function (t) {
          "Escape" === t.key && (_this27._config.keyboard ? _this27.hide() : _this27._triggerBackdropTransition());
        }), N.on(window, gn, function () {
          _this27._isShown && !_this27._isTransitioning && _this27._adjustDialog();
        }), N.on(this._element, bn, function (t) {
          N.one(_this27._element, _n, function (e) {
            _this27._element === t.target && _this27._element === e.target && ("static" !== _this27._config.backdrop ? _this27._config.backdrop && _this27.hide() : _this27._triggerBackdropTransition());
          });
        });
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this28 = this;

        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
          document.body.classList.remove(wn), _this28._resetAdjustments(), _this28._scrollBar.reset(), N.trigger(_this28._element, fn);
        });
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("fade");
      }
    }, {
      key: "_triggerBackdropTransition",
      value: function _triggerBackdropTransition() {
        var _this29 = this;

        if (N.trigger(this._element, un).defaultPrevented) return;
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = this._element.style.overflowY;
        "hidden" === e || this._element.classList.contains(En) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(En), this._queueCallback(function () {
          _this29._element.classList.remove(En), _this29._queueCallback(function () {
            _this29._element.style.overflowY = e;
          }, _this29._dialog);
        }, this._dialog), this._element.focus());
      }
    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = this._scrollBar.getWidth(),
            i = e > 0;

        if (i && !t) {
          var _t13 = p() ? "paddingLeft" : "paddingRight";

          this._element.style[_t13] = "".concat(e, "px");
        }

        if (!i && t) {
          var _t14 = p() ? "paddingRight" : "paddingLeft";

          this._element.style[_t14] = "".concat(e, "px");
        }
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
    }], [{
      key: "Default",
      get: function get() {
        return Tn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Cn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "modal";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t, e) {
        return this.each(function () {
          var i = On.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t](e);
          }
        });
      }
    }]);

    return On;
  }(W);

  N.on(document, yn, '[data-bs-toggle="modal"]', function (t) {
    var _this30 = this;

    var e = z.getElementFromSelector(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), N.one(e, pn, function (t) {
      t.defaultPrevented || N.one(e, fn, function () {
        a(_this30) && _this30.focus();
      });
    });
    var i = z.findOne(".modal.show");
    i && On.getInstance(i).hide(), On.getOrCreateInstance(e).toggle(this);
  }), R(On), m(On);
  var xn = ".bs.offcanvas",
      kn = ".data-api",
      Ln = "load".concat(xn).concat(kn),
      Sn = "show",
      Dn = "showing",
      $n = "hiding",
      In = ".offcanvas.show",
      Nn = "show".concat(xn),
      Pn = "shown".concat(xn),
      Mn = "hide".concat(xn),
      jn = "hidePrevented".concat(xn),
      Fn = "hidden".concat(xn),
      Hn = "resize".concat(xn),
      Wn = "click".concat(xn).concat(kn),
      Bn = "keydown.dismiss".concat(xn),
      zn = {
    backdrop: !0,
    keyboard: !0,
    scroll: !1
  },
      Rn = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
  };

  var qn = /*#__PURE__*/function (_W7) {
    _inherits(qn, _W7);

    var _super11 = _createSuper(qn);

    function qn(t, e) {
      var _this31;

      _classCallCheck(this, qn);

      _this31 = _super11.call(this, t, e), _this31._isShown = !1, _this31._backdrop = _this31._initializeBackDrop(), _this31._focustrap = _this31._initializeFocusTrap(), _this31._addEventListeners();
      return _this31;
    }

    _createClass(qn, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this32 = this;

        this._isShown || N.trigger(this._element, Nn, {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || new cn().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Dn), this._queueCallback(function () {
          _this32._config.scroll && !_this32._config.backdrop || _this32._focustrap.activate(), _this32._element.classList.add(Sn), _this32._element.classList.remove(Dn), N.trigger(_this32._element, Pn, {
            relatedTarget: t
          });
        }, this._element, !0));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this33 = this;

        this._isShown && (N.trigger(this._element, Mn).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add($n), this._backdrop.hide(), this._queueCallback(function () {
          _this33._element.classList.remove(Sn, $n), _this33._element.removeAttribute("aria-modal"), _this33._element.removeAttribute("role"), _this33._config.scroll || new cn().reset(), N.trigger(_this33._element, Fn);
        }, this._element, !0)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(qn.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        var _this34 = this;

        var t = Boolean(this._config.backdrop);
        return new Ui({
          className: "offcanvas-backdrop",
          isVisible: t,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: t ? function () {
            "static" !== _this34._config.backdrop ? _this34.hide() : N.trigger(_this34._element, jn);
          } : null
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new sn({
          trapElement: this._element
        });
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this35 = this;

        N.on(this._element, Bn, function (t) {
          "Escape" === t.key && (_this35._config.keyboard ? _this35.hide() : N.trigger(_this35._element, jn));
        });
      }
    }], [{
      key: "Default",
      get: function get() {
        return zn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Rn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "offcanvas";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = qn.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);

    return qn;
  }(W);

  N.on(document, Wn, '[data-bs-toggle="offcanvas"]', function (t) {
    var _this36 = this;

    var e = z.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this)) return;
    N.one(e, Fn, function () {
      a(_this36) && _this36.focus();
    });
    var i = z.findOne(In);
    i && i !== e && qn.getInstance(i).hide(), qn.getOrCreateInstance(e).toggle(this);
  }), N.on(window, Ln, function () {
    var _iterator17 = _createForOfIteratorHelper(z.find(In)),
        _step17;

    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
        var _t15 = _step17.value;
        qn.getOrCreateInstance(_t15).show();
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }
  }), N.on(window, Hn, function () {
    var _iterator18 = _createForOfIteratorHelper(z.find("[aria-modal][class*=show][class*=offcanvas-]")),
        _step18;

    try {
      for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
        var _t16 = _step18.value;
        "fixed" !== getComputedStyle(_t16).position && qn.getOrCreateInstance(_t16).hide();
      }
    } catch (err) {
      _iterator18.e(err);
    } finally {
      _iterator18.f();
    }
  }), R(qn), m(qn);

  var Vn = {
    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  },
      Kn = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      Qn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
      Xn = function Xn(t, e) {
    var i = t.nodeName.toLowerCase();
    return e.includes(i) ? !Kn.has(i) || Boolean(Qn.test(t.nodeValue)) : e.filter(function (t) {
      return t instanceof RegExp;
    }).some(function (t) {
      return t.test(i);
    });
  },
      Yn = {
    allowList: Vn,
    content: {},
    extraClass: "",
    html: !1,
    sanitize: !0,
    sanitizeFn: null,
    template: "<div></div>"
  },
      Un = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string"
  },
      Gn = {
    entry: "(string|element|function|null)",
    selector: "(string|element)"
  };

  var Jn = /*#__PURE__*/function (_H5) {
    _inherits(Jn, _H5);

    var _super12 = _createSuper(Jn);

    function Jn(t) {
      var _this37;

      _classCallCheck(this, Jn);

      _this37 = _super12.call(this), _this37._config = _this37._getConfig(t);
      return _this37;
    }

    _createClass(Jn, [{
      key: "getContent",
      value: function getContent() {
        var _this38 = this;

        return Object.values(this._config.content).map(function (t) {
          return _this38._resolvePossibleFunction(t);
        }).filter(Boolean);
      }
    }, {
      key: "hasContent",
      value: function hasContent() {
        return this.getContent().length > 0;
      }
    }, {
      key: "changeContent",
      value: function changeContent(t) {
        return this._checkContent(t), this._config.content = _objectSpread(_objectSpread({}, this._config.content), t), this;
      }
    }, {
      key: "toHtml",
      value: function toHtml() {
        var _e$classList;

        var t = document.createElement("div");
        t.innerHTML = this._maybeSanitize(this._config.template);

        for (var _i16 = 0, _Object$entries5 = Object.entries(this._config.content); _i16 < _Object$entries5.length; _i16++) {
          var _Object$entries5$_i = _slicedToArray(_Object$entries5[_i16], 2),
              _e11 = _Object$entries5$_i[0],
              _i17 = _Object$entries5$_i[1];

          this._setContent(t, _i17, _e11);
        }

        var e = t.children[0],
            i = this._resolvePossibleFunction(this._config.extraClass);

        return i && (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(i.split(" "))), e;
      }
    }, {
      key: "_typeCheckConfig",
      value: function _typeCheckConfig(t) {
        _get(_getPrototypeOf(Jn.prototype), "_typeCheckConfig", this).call(this, t), this._checkContent(t.content);
      }
    }, {
      key: "_checkContent",
      value: function _checkContent(t) {
        for (var _i18 = 0, _Object$entries6 = Object.entries(t); _i18 < _Object$entries6.length; _i18++) {
          var _Object$entries6$_i = _slicedToArray(_Object$entries6[_i18], 2),
              _e12 = _Object$entries6$_i[0],
              _i19 = _Object$entries6$_i[1];

          _get(_getPrototypeOf(Jn.prototype), "_typeCheckConfig", this).call(this, {
            selector: _e12,
            entry: _i19
          }, Gn);
        }
      }
    }, {
      key: "_setContent",
      value: function _setContent(t, e, i) {
        var n = z.findOne(i, t);
        n && ((e = this._resolvePossibleFunction(e)) ? o(e) ? this._putElementInTemplate(r(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove());
      }
    }, {
      key: "_maybeSanitize",
      value: function _maybeSanitize(t) {
        return this._config.sanitize ? function (t, e, i) {
          var _ref7;

          if (!t.length) return t;
          if (i && "function" == typeof i) return i(t);

          var n = new window.DOMParser().parseFromString(t, "text/html"),
              s = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(n.body.querySelectorAll("*")));

          var _iterator19 = _createForOfIteratorHelper(s),
              _step19;

          try {
            for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
              var _ref8;

              var _t17 = _step19.value;

              var _i20 = _t17.nodeName.toLowerCase();

              if (!Object.keys(e).includes(_i20)) {
                _t17.remove();

                continue;
              }

              var _n7 = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(_t17.attributes)),
                  _s5 = [].concat(e["*"] || [], e[_i20] || []);

              var _iterator20 = _createForOfIteratorHelper(_n7),
                  _step20;

              try {
                for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                  var _e13 = _step20.value;
                  Xn(_e13, _s5) || _t17.removeAttribute(_e13.nodeName);
                }
              } catch (err) {
                _iterator20.e(err);
              } finally {
                _iterator20.f();
              }
            }
          } catch (err) {
            _iterator19.e(err);
          } finally {
            _iterator19.f();
          }

          return n.body.innerHTML;
        }(t, this._config.allowList, this._config.sanitizeFn) : t;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(t) {
        return g(t, [this]);
      }
    }, {
      key: "_putElementInTemplate",
      value: function _putElementInTemplate(t, e) {
        if (this._config.html) return e.innerHTML = "", void e.append(t);
        e.textContent = t.textContent;
      }
    }], [{
      key: "Default",
      get: function get() {
        return Yn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Un;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "TemplateFactory";
      }
    }]);

    return Jn;
  }(H);

  var Zn = new Set(["sanitize", "allowList", "sanitizeFn"]),
      ts = "fade",
      es = "show",
      is = ".modal",
      ns = "hide.bs.modal",
      ss = "hover",
      os = "focus",
      rs = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: p() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: p() ? "right" : "left"
  },
      as = {
    allowList: Vn,
    animation: !0,
    boundary: "clippingParents",
    container: !1,
    customClass: "",
    delay: 0,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    html: !1,
    offset: [0, 6],
    placement: "top",
    popperConfig: null,
    sanitize: !0,
    sanitizeFn: null,
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus"
  },
      ls = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string"
  };

  var cs = /*#__PURE__*/function (_W8) {
    _inherits(cs, _W8);

    var _super13 = _createSuper(cs);

    function cs(t, e) {
      var _this39;

      _classCallCheck(this, cs);

      if (void 0 === vi) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      _this39 = _super13.call(this, t, e), _this39._isEnabled = !0, _this39._timeout = 0, _this39._isHovered = null, _this39._activeTrigger = {}, _this39._popper = null, _this39._templateFactory = null, _this39._newContent = null, _this39.tip = null, _this39._setListeners(), _this39._config.selector || _this39._fixTitle();
      return _this39;
    }

    _createClass(cs, [{
      key: "enable",
      value: function enable() {
        this._isEnabled = !0;
      }
    }, {
      key: "disable",
      value: function disable() {
        this._isEnabled = !1;
      }
    }, {
      key: "toggleEnabled",
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
    }, {
      key: "toggle",
      value: function toggle() {
        this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter());
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout), N.off(this._element.closest(is), ns, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), _get(_getPrototypeOf(cs.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _this40 = this;

        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (!this._isWithContent() || !this._isEnabled) return;

        var t = N.trigger(this._element, this.constructor.eventName("show")),
            e = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);

        if (t.defaultPrevented || !e) return;

        this._disposePopper();

        var i = this._getTipElement();

        this._element.setAttribute("aria-describedby", i.getAttribute("id"));

        var n = this._config.container;

        if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), N.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i), i.classList.add(es), "ontouchstart" in document.documentElement) {
          var _ref9;

          var _iterator21 = _createForOfIteratorHelper((_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children))),
              _step21;

          try {
            for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
              var _t18 = _step21.value;
              N.on(_t18, "mouseover", h);
            }
          } catch (err) {
            _iterator21.e(err);
          } finally {
            _iterator21.f();
          }
        }

        this._queueCallback(function () {
          N.trigger(_this40._element, _this40.constructor.eventName("shown")), !1 === _this40._isHovered && _this40._leave(), _this40._isHovered = !1;
        }, this.tip, this._isAnimated());
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this41 = this;

        if (this._isShown() && !N.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
          if (this._getTipElement().classList.remove(es), "ontouchstart" in document.documentElement) {
            var _ref10;

            var _iterator22 = _createForOfIteratorHelper((_ref10 = []).concat.apply(_ref10, _toConsumableArray(document.body.children))),
                _step22;

            try {
              for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                var _t19 = _step22.value;
                N.off(_t19, "mouseover", h);
              }
            } catch (err) {
              _iterator22.e(err);
            } finally {
              _iterator22.f();
            }
          }

          this._activeTrigger.click = !1, this._activeTrigger[os] = !1, this._activeTrigger[ss] = !1, this._isHovered = null, this._queueCallback(function () {
            _this41._isWithActiveTrigger() || (_this41._isHovered || _this41._disposePopper(), _this41._element.removeAttribute("aria-describedby"), N.trigger(_this41._element, _this41.constructor.eventName("hidden")));
          }, this.tip, this._isAnimated());
        }
      }
    }, {
      key: "update",
      value: function update() {
        this._popper && this._popper.update();
      }
    }, {
      key: "_isWithContent",
      value: function _isWithContent() {
        return Boolean(this._getTitle());
      }
    }, {
      key: "_getTipElement",
      value: function _getTipElement() {
        return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
      }
    }, {
      key: "_createTipElement",
      value: function _createTipElement(t) {
        var e = this._getTemplateFactory(t).toHtml();

        if (!e) return null;
        e.classList.remove(ts, es), e.classList.add("bs-".concat(this.constructor.NAME, "-auto"));

        var i = function (t) {
          do {
            t += Math.floor(1e6 * Math.random());
          } while (document.getElementById(t));

          return t;
        }(this.constructor.NAME).toString();

        return e.setAttribute("id", i), this._isAnimated() && e.classList.add(ts), e;
      }
    }, {
      key: "setContent",
      value: function setContent(t) {
        this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
      }
    }, {
      key: "_getTemplateFactory",
      value: function _getTemplateFactory(t) {
        return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Jn(_objectSpread(_objectSpread({}, this._config), {}, {
          content: t,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        })), this._templateFactory;
      }
    }, {
      key: "_getContentForTemplate",
      value: function _getContentForTemplate() {
        return {
          ".tooltip-inner": this._getTitle()
        };
      }
    }, {
      key: "_getTitle",
      value: function _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
      }
    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(t) {
        return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains(ts);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        return this.tip && this.tip.classList.contains(es);
      }
    }, {
      key: "_createPopper",
      value: function _createPopper(t) {
        var e = g(this._config.placement, [this, t, this._element]),
            i = rs[e.toUpperCase()];
        return bi(this._element, t, this._getPopperConfig(i));
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this42 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this42._element);
        } : t;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(t) {
        return g(t, [this._element]);
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(t) {
        var _this43 = this;

        var e = {
          placement: t,
          modifiers: [{
            name: "flip",
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }, {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "arrow",
            options: {
              element: ".".concat(this.constructor.NAME, "-arrow")
            }
          }, {
            name: "preSetPlacement",
            enabled: !0,
            phase: "beforeMain",
            fn: function fn(t) {
              _this43._getTipElement().setAttribute("data-popper-placement", t.state.placement);
            }
          }]
        };
        return _objectSpread(_objectSpread({}, e), g(this._config.popperConfig, [e]));
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this44 = this;

        var t = this._config.trigger.split(" ");

        var _iterator23 = _createForOfIteratorHelper(t),
            _step23;

        try {
          for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
            var _e14 = _step23.value;
            if ("click" === _e14) N.on(this._element, this.constructor.eventName("click"), this._config.selector, function (t) {
              _this44._initializeOnDelegatedTarget(t).toggle();
            });else if ("manual" !== _e14) {
              var _t20 = _e14 === ss ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                  _i21 = _e14 === ss ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");

              N.on(this._element, _t20, this._config.selector, function (t) {
                var e = _this44._initializeOnDelegatedTarget(t);

                e._activeTrigger["focusin" === t.type ? os : ss] = !0, e._enter();
              }), N.on(this._element, _i21, this._config.selector, function (t) {
                var e = _this44._initializeOnDelegatedTarget(t);

                e._activeTrigger["focusout" === t.type ? os : ss] = e._element.contains(t.relatedTarget), e._leave();
              });
            }
          }
        } catch (err) {
          _iterator23.e(err);
        } finally {
          _iterator23.f();
        }

        this._hideModalHandler = function () {
          _this44._element && _this44.hide();
        }, N.on(this._element.closest(is), ns, this._hideModalHandler);
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var t = this._element.getAttribute("title");

        t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"));
      }
    }, {
      key: "_enter",
      value: function _enter() {
        var _this45 = this;

        this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(function () {
          _this45._isHovered && _this45.show();
        }, this._config.delay.show));
      }
    }, {
      key: "_leave",
      value: function _leave() {
        var _this46 = this;

        this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(function () {
          _this46._isHovered || _this46.hide();
        }, this._config.delay.hide));
      }
    }, {
      key: "_setTimeout",
      value: function _setTimeout(t, e) {
        clearTimeout(this._timeout), this._timeout = setTimeout(t, e);
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        var e = F.getDataAttributes(this._element);

        for (var _i22 = 0, _Object$keys2 = Object.keys(e); _i22 < _Object$keys2.length; _i22++) {
          var _t21 = _Object$keys2[_i22];
          Zn.has(_t21) && delete e[_t21];
        }

        return t = _objectSpread(_objectSpread({}, e), "object" == typeof t && t ? t : {}), t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.container = !1 === t.container ? document.body : r(t.container), "number" == typeof t.delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var t = {};

        for (var _i23 = 0, _Object$entries7 = Object.entries(this._config); _i23 < _Object$entries7.length; _i23++) {
          var _Object$entries7$_i = _slicedToArray(_Object$entries7[_i23], 2),
              _e15 = _Object$entries7$_i[0],
              _i24 = _Object$entries7$_i[1];

          this.constructor.Default[_e15] !== _i24 && (t[_e15] = _i24);
        }

        return t.selector = !1, t.trigger = "manual", t;
      }
    }, {
      key: "_disposePopper",
      value: function _disposePopper() {
        this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
      }
    }], [{
      key: "Default",
      get: function get() {
        return as;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ls;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tooltip";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = cs.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return cs;
  }(W);

  m(cs);

  var hs = _objectSpread(_objectSpread({}, cs.Default), {}, {
    content: "",
    offset: [0, 8],
    placement: "right",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click"
  }),
      ds = _objectSpread(_objectSpread({}, cs.DefaultType), {}, {
    content: "(null|string|element|function)"
  });

  var us = /*#__PURE__*/function (_cs) {
    _inherits(us, _cs);

    var _super14 = _createSuper(us);

    function us() {
      _classCallCheck(this, us);

      return _super14.apply(this, arguments);
    }

    _createClass(us, [{
      key: "_isWithContent",
      value: function _isWithContent() {
        return this._getTitle() || this._getContent();
      }
    }, {
      key: "_getContentForTemplate",
      value: function _getContentForTemplate() {
        return {
          ".popover-header": this._getTitle(),
          ".popover-body": this._getContent()
        };
      }
    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
    }], [{
      key: "Default",
      get: function get() {
        return hs;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ds;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "popover";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = us.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return us;
  }(cs);

  m(us);
  var fs = ".bs.scrollspy",
      ps = "activate".concat(fs),
      ms = "click".concat(fs),
      gs = "load".concat(fs, ".data-api"),
      _s = "active",
      bs = "[href]",
      vs = ".nav-link",
      ys = "".concat(vs, ", .nav-item > ").concat(vs, ", .list-group-item"),
      ws = {
    offset: null,
    rootMargin: "0px 0px -25%",
    smoothScroll: !1,
    target: null,
    threshold: [.1, .5, 1]
  },
      As = {
    offset: "(number|null)",
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
  };

  var Es = /*#__PURE__*/function (_W9) {
    _inherits(Es, _W9);

    var _super15 = _createSuper(Es);

    function Es(t, e) {
      var _this47;

      _classCallCheck(this, Es);

      _this47 = _super15.call(this, t, e), _this47._targetLinks = new Map(), _this47._observableSections = new Map(), _this47._rootElement = "visible" === getComputedStyle(_this47._element).overflowY ? null : _this47._element, _this47._activeTarget = null, _this47._observer = null, _this47._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      }, _this47.refresh();
      return _this47;
    }

    _createClass(Es, [{
      key: "refresh",
      value: function refresh() {
        this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();

        var _iterator24 = _createForOfIteratorHelper(this._observableSections.values()),
            _step24;

        try {
          for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
            var _t22 = _step24.value;

            this._observer.observe(_t22);
          }
        } catch (err) {
          _iterator24.e(err);
        } finally {
          _iterator24.f();
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._observer.disconnect(), _get(_getPrototypeOf(Es.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.target = r(t.target) || document.body, t.rootMargin = t.offset ? "".concat(t.offset, "px 0px -30%") : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map(function (t) {
          return Number.parseFloat(t);
        })), t;
      }
    }, {
      key: "_maybeEnableSmoothScroll",
      value: function _maybeEnableSmoothScroll() {
        var _this48 = this;

        this._config.smoothScroll && (N.off(this._config.target, ms), N.on(this._config.target, ms, bs, function (t) {
          var e = _this48._observableSections.get(t.target.hash);

          if (e) {
            t.preventDefault();

            var _i25 = _this48._rootElement || window,
                _n8 = e.offsetTop - _this48._element.offsetTop;

            if (_i25.scrollTo) return void _i25.scrollTo({
              top: _n8,
              behavior: "smooth"
            });
            _i25.scrollTop = _n8;
          }
        }));
      }
    }, {
      key: "_getNewObserver",
      value: function _getNewObserver() {
        var _this49 = this;

        var t = {
          root: this._rootElement,
          threshold: this._config.threshold,
          rootMargin: this._config.rootMargin
        };
        return new IntersectionObserver(function (t) {
          return _this49._observerCallback(t);
        }, t);
      }
    }, {
      key: "_observerCallback",
      value: function _observerCallback(t) {
        var _this50 = this;

        var e = function e(t) {
          return _this50._targetLinks.get("#".concat(t.target.id));
        },
            i = function i(t) {
          _this50._previousScrollData.visibleEntryTop = t.target.offsetTop, _this50._process(e(t));
        },
            n = (this._rootElement || document.documentElement).scrollTop,
            s = n >= this._previousScrollData.parentScrollTop;

        this._previousScrollData.parentScrollTop = n;

        var _iterator25 = _createForOfIteratorHelper(t),
            _step25;

        try {
          for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
            var _o3 = _step25.value;

            if (!_o3.isIntersecting) {
              this._activeTarget = null, this._clearActiveClass(e(_o3));
              continue;
            }

            var _t23 = _o3.target.offsetTop >= this._previousScrollData.visibleEntryTop;

            if (s && _t23) {
              if (i(_o3), !n) return;
            } else s || _t23 || i(_o3);
          }
        } catch (err) {
          _iterator25.e(err);
        } finally {
          _iterator25.f();
        }
      }
    }, {
      key: "_initializeTargetsAndObservables",
      value: function _initializeTargetsAndObservables() {
        this._targetLinks = new Map(), this._observableSections = new Map();
        var t = z.find(bs, this._config.target);

        var _iterator26 = _createForOfIteratorHelper(t),
            _step26;

        try {
          for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
            var _e16 = _step26.value;
            if (!_e16.hash || l(_e16)) continue;

            var _t24 = z.findOne(decodeURI(_e16.hash), this._element);

            a(_t24) && (this._targetLinks.set(decodeURI(_e16.hash), _e16), this._observableSections.set(_e16.hash, _t24));
          }
        } catch (err) {
          _iterator26.e(err);
        } finally {
          _iterator26.f();
        }
      }
    }, {
      key: "_process",
      value: function _process(t) {
        this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(_s), this._activateParents(t), N.trigger(this._element, ps, {
          relatedTarget: t
        }));
      }
    }, {
      key: "_activateParents",
      value: function _activateParents(t) {
        if (t.classList.contains("dropdown-item")) z.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(_s);else {
          var _iterator27 = _createForOfIteratorHelper(z.parents(t, ".nav, .list-group")),
              _step27;

          try {
            for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
              var _e17 = _step27.value;

              var _iterator28 = _createForOfIteratorHelper(z.prev(_e17, ys)),
                  _step28;

              try {
                for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                  var _t25 = _step28.value;

                  _t25.classList.add(_s);
                }
              } catch (err) {
                _iterator28.e(err);
              } finally {
                _iterator28.f();
              }
            }
          } catch (err) {
            _iterator27.e(err);
          } finally {
            _iterator27.f();
          }
        }
      }
    }, {
      key: "_clearActiveClass",
      value: function _clearActiveClass(t) {
        t.classList.remove(_s);
        var e = z.find("".concat(bs, ".").concat(_s), t);

        var _iterator29 = _createForOfIteratorHelper(e),
            _step29;

        try {
          for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
            var _t26 = _step29.value;

            _t26.classList.remove(_s);
          }
        } catch (err) {
          _iterator29.e(err);
        } finally {
          _iterator29.f();
        }
      }
    }], [{
      key: "Default",
      get: function get() {
        return ws;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return As;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "scrollspy";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Es.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return Es;
  }(W);

  N.on(window, gs, function () {
    var _iterator30 = _createForOfIteratorHelper(z.find('[data-bs-spy="scroll"]')),
        _step30;

    try {
      for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
        var _t27 = _step30.value;
        Es.getOrCreateInstance(_t27);
      }
    } catch (err) {
      _iterator30.e(err);
    } finally {
      _iterator30.f();
    }
  }), m(Es);
  var Ts = ".bs.tab",
      Cs = "hide".concat(Ts),
      Os = "hidden".concat(Ts),
      xs = "show".concat(Ts),
      ks = "shown".concat(Ts),
      Ls = "click".concat(Ts),
      Ss = "keydown".concat(Ts),
      Ds = "load".concat(Ts),
      $s = "ArrowLeft",
      Is = "ArrowRight",
      Ns = "ArrowUp",
      Ps = "ArrowDown",
      Ms = "Home",
      js = "End",
      Fs = "active",
      Hs = "fade",
      Ws = "show",
      Bs = ".dropdown-toggle",
      zs = ":not(".concat(Bs, ")"),
      Rs = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      qs = ".nav-link".concat(zs, ", .list-group-item").concat(zs, ", [role=\"tab\"]").concat(zs, ", ").concat(Rs),
      Vs = ".".concat(Fs, "[data-bs-toggle=\"tab\"], .").concat(Fs, "[data-bs-toggle=\"pill\"], .").concat(Fs, "[data-bs-toggle=\"list\"]");

  var Ks = /*#__PURE__*/function (_W10) {
    _inherits(Ks, _W10);

    var _super16 = _createSuper(Ks);

    function Ks(t) {
      var _this51;

      _classCallCheck(this, Ks);

      _this51 = _super16.call(this, t), _this51._parent = _this51._element.closest('.list-group, .nav, [role="tablist"]'), _this51._parent && (_this51._setInitialAttributes(_this51._parent, _this51._getChildren()), N.on(_this51._element, Ss, function (t) {
        return _this51._keydown(t);
      }));
      return _this51;
    }

    _createClass(Ks, [{
      key: "show",
      value: function show() {
        var t = this._element;
        if (this._elemIsActive(t)) return;

        var e = this._getActiveElem(),
            i = e ? N.trigger(e, Cs, {
          relatedTarget: t
        }) : null;

        N.trigger(t, xs, {
          relatedTarget: e
        }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e));
      }
    }, {
      key: "_activate",
      value: function _activate(t, e) {
        var _this52 = this;

        t && (t.classList.add(Fs), this._activate(z.getElementFromSelector(t)), this._queueCallback(function () {
          "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), _this52._toggleDropDown(t, !0), N.trigger(t, ks, {
            relatedTarget: e
          })) : t.classList.add(Ws);
        }, t, t.classList.contains(Hs)));
      }
    }, {
      key: "_deactivate",
      value: function _deactivate(t, e) {
        var _this53 = this;

        t && (t.classList.remove(Fs), t.blur(), this._deactivate(z.getElementFromSelector(t)), this._queueCallback(function () {
          "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), _this53._toggleDropDown(t, !1), N.trigger(t, Os, {
            relatedTarget: e
          })) : t.classList.remove(Ws);
        }, t, t.classList.contains(Hs)));
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (![$s, Is, Ns, Ps, Ms, js].includes(t.key)) return;
        t.stopPropagation(), t.preventDefault();

        var e = this._getChildren().filter(function (t) {
          return !l(t);
        });

        var i;
        if ([Ms, js].includes(t.key)) i = e[t.key === Ms ? 0 : e.length - 1];else {
          var _n9 = [Is, Ps].includes(t.key);

          i = b(e, t.target, _n9, !0);
        }
        i && (i.focus({
          preventScroll: !0
        }), Ks.getOrCreateInstance(i).show());
      }
    }, {
      key: "_getChildren",
      value: function _getChildren() {
        return z.find(qs, this._parent);
      }
    }, {
      key: "_getActiveElem",
      value: function _getActiveElem() {
        var _this54 = this;

        return this._getChildren().find(function (t) {
          return _this54._elemIsActive(t);
        }) || null;
      }
    }, {
      key: "_setInitialAttributes",
      value: function _setInitialAttributes(t, e) {
        this._setAttributeIfNotExists(t, "role", "tablist");

        var _iterator31 = _createForOfIteratorHelper(e),
            _step31;

        try {
          for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
            var _t28 = _step31.value;

            this._setInitialAttributesOnChild(_t28);
          }
        } catch (err) {
          _iterator31.e(err);
        } finally {
          _iterator31.f();
        }
      }
    }, {
      key: "_setInitialAttributesOnChild",
      value: function _setInitialAttributesOnChild(t) {
        t = this._getInnerElement(t);

        var e = this._elemIsActive(t),
            i = this._getOuterElement(t);

        t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t);
      }
    }, {
      key: "_setInitialAttributesOnTargetPanel",
      value: function _setInitialAttributesOnTargetPanel(t) {
        var e = z.getElementFromSelector(t);
        e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", "".concat(t.id)));
      }
    }, {
      key: "_toggleDropDown",
      value: function _toggleDropDown(t, e) {
        var i = this._getOuterElement(t);

        if (!i.classList.contains("dropdown")) return;

        var n = function n(t, _n10) {
          var s = z.findOne(t, i);
          s && s.classList.toggle(_n10, e);
        };

        n(Bs, Fs), n(".dropdown-menu", Ws), i.setAttribute("aria-expanded", e);
      }
    }, {
      key: "_setAttributeIfNotExists",
      value: function _setAttributeIfNotExists(t, e, i) {
        t.hasAttribute(e) || t.setAttribute(e, i);
      }
    }, {
      key: "_elemIsActive",
      value: function _elemIsActive(t) {
        return t.classList.contains(Fs);
      }
    }, {
      key: "_getInnerElement",
      value: function _getInnerElement(t) {
        return t.matches(qs) ? t : z.findOne(qs, t);
      }
    }, {
      key: "_getOuterElement",
      value: function _getOuterElement(t) {
        return t.closest(".nav-item, .list-group-item") || t;
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "tab";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Ks.getOrCreateInstance(this);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return Ks;
  }(W);

  N.on(document, Ls, Rs, function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this) || Ks.getOrCreateInstance(this).show();
  }), N.on(window, Ds, function () {
    var _iterator32 = _createForOfIteratorHelper(z.find(Vs)),
        _step32;

    try {
      for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
        var _t29 = _step32.value;
        Ks.getOrCreateInstance(_t29);
      }
    } catch (err) {
      _iterator32.e(err);
    } finally {
      _iterator32.f();
    }
  }), m(Ks);
  var Qs = ".bs.toast",
      Xs = "mouseover".concat(Qs),
      Ys = "mouseout".concat(Qs),
      Us = "focusin".concat(Qs),
      Gs = "focusout".concat(Qs),
      Js = "hide".concat(Qs),
      Zs = "hidden".concat(Qs),
      to = "show".concat(Qs),
      eo = "shown".concat(Qs),
      io = "hide",
      no = "show",
      so = "showing",
      oo = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      ro = {
    animation: !0,
    autohide: !0,
    delay: 5e3
  };

  var ao = /*#__PURE__*/function (_W11) {
    _inherits(ao, _W11);

    var _super17 = _createSuper(ao);

    function ao(t, e) {
      var _this55;

      _classCallCheck(this, ao);

      _this55 = _super17.call(this, t, e), _this55._timeout = null, _this55._hasMouseInteraction = !1, _this55._hasKeyboardInteraction = !1, _this55._setListeners();
      return _this55;
    }

    _createClass(ao, [{
      key: "show",
      value: function show() {
        var _this56 = this;

        N.trigger(this._element, to).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(io), d(this._element), this._element.classList.add(no, so), this._queueCallback(function () {
          _this56._element.classList.remove(so), N.trigger(_this56._element, eo), _this56._maybeScheduleHide();
        }, this._element, this._config.animation));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this57 = this;

        this.isShown() && (N.trigger(this._element, Js).defaultPrevented || (this._element.classList.add(so), this._queueCallback(function () {
          _this57._element.classList.add(io), _this57._element.classList.remove(so, no), N.trigger(_this57._element, Zs);
        }, this._element, this._config.animation)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout(), this.isShown() && this._element.classList.remove(no), _get(_getPrototypeOf(ao.prototype), "dispose", this).call(this);
      }
    }, {
      key: "isShown",
      value: function isShown() {
        return this._element.classList.contains(no);
      }
    }, {
      key: "_maybeScheduleHide",
      value: function _maybeScheduleHide() {
        var _this58 = this;

        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(function () {
          _this58.hide();
        }, this._config.delay)));
      }
    }, {
      key: "_onInteraction",
      value: function _onInteraction(t, e) {
        switch (t.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = e;
            break;

          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = e;
        }

        if (e) return void this._clearTimeout();
        var i = t.relatedTarget;
        this._element === i || this._element.contains(i) || this._maybeScheduleHide();
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this59 = this;

        N.on(this._element, Xs, function (t) {
          return _this59._onInteraction(t, !0);
        }), N.on(this._element, Ys, function (t) {
          return _this59._onInteraction(t, !1);
        }), N.on(this._element, Us, function (t) {
          return _this59._onInteraction(t, !0);
        }), N.on(this._element, Gs, function (t) {
          return _this59._onInteraction(t, !1);
        });
      }
    }, {
      key: "_clearTimeout",
      value: function _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
    }], [{
      key: "Default",
      get: function get() {
        return ro;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return oo;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "toast";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = ao.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);

    return ao;
  }(W);

  return R(ao), m(ao), {
    Alert: Q,
    Button: Y,
    Carousel: xt,
    Collapse: Bt,
    Dropdown: qi,
    Modal: On,
    Offcanvas: qn,
    Popover: us,
    ScrollSpy: Es,
    Tab: Ks,
    Toast: ao,
    Tooltip: cs
  };
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vanMvc3JjL2RvbS9kYXRhLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vanMvc3JjL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9qcy9zcmMvZG9tL2V2ZW50LWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9qcy9zcmMvZG9tL21hbmlwdWxhdG9yLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vanMvc3JjL3V0aWwvY29uZmlnLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vanMvc3JjL2Jhc2UtY29tcG9uZW50LmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vanMvc3JjL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9qcy9zcmMvdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vanMvc3JjL2FsZXJ0LmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vanMvc3JjL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL2pzL3NyYy91dGlsL3N3aXBlLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vanMvc3JjL2Nhcm91c2VsLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vanMvc3JjL2NvbGxhcHNlLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9lbnVtcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVOYW1lLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0V2luZG93LmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2FwcGx5U3R5bGVzLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9tYXRoLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy91c2VyQWdlbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pc0xheW91dFZpZXdwb3J0LmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2NvbnRhaW5zLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2lzVGFibGVFbGVtZW50LmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0UGFyZW50Tm9kZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy93aXRoaW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0RnJlc2hTaWRlT2JqZWN0LmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9leHBhbmRUb0hhc2hNYXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9hcnJvdy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0VmFyaWF0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvY29tcHV0ZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2V2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3dTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaXNTY3JvbGxQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRTY3JvbGxQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9saXN0U2Nyb2xsUGFyZW50cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvcmVjdFRvQ2xpZW50UmVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldENsaXBwaW5nUmVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFZpZXdwb3J0UmVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50UmVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvY29tcHV0ZU9mZnNldHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2ZsaXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9oaWRlLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvb2Zmc2V0LmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL3ByZXZlbnRPdmVyZmxvdy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0QWx0QXhpcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldENvbXBvc2l0ZVJlY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXROb2RlU2Nyb2xsLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0SFRNTEVsZW1lbnRTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL29yZGVyTW9kaWZpZXJzLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9jcmVhdGVQb3BwZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2RlYm91bmNlLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9tZXJnZUJ5TmFtZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvcG9wcGVyLWxpdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3BvcHBlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL2pzL3NyYy9kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL2pzL3NyYy91dGlsL2JhY2tkcm9wLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vanMvc3JjL3V0aWwvZm9jdXN0cmFwLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vanMvc3JjL3V0aWwvc2Nyb2xsYmFyLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vanMvc3JjL21vZGFsLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vanMvc3JjL29mZmNhbnZhcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL2pzL3NyYy91dGlsL3Nhbml0aXplci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL2pzL3NyYy91dGlsL3RlbXBsYXRlLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9qcy9zcmMvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL2pzL3NyYy9wb3BvdmVyLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vanMvc3JjL3Njcm9sbHNweS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL2pzL3NyYy90YWIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9qcy9zcmMvdG9hc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9qcy9pbmRleC51bWQuanMiXSwibmFtZXMiOlsiZWxlbWVudE1hcCIsIk1hcCIsIkRhdGEiLCJzZXQiLCJlbGVtZW50Iiwia2V5IiwiaW5zdGFuY2UiLCJoYXMiLCJpbnN0YW5jZU1hcCIsImdldCIsInNpemUiLCJjb25zb2xlIiwiZXJyb3IiLCJBcnJheSIsImZyb20iLCJrZXlzIiwicmVtb3ZlIiwiVFJBTlNJVElPTl9FTkQiLCJwYXJzZVNlbGVjdG9yIiwic2VsZWN0b3IiLCJ3aW5kb3ciLCJDU1MiLCJlc2NhcGUiLCJyZXBsYWNlIiwibWF0Y2giLCJpZCIsInRyaWdnZXJUcmFuc2l0aW9uRW5kIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiaXNFbGVtZW50Iiwib2JqZWN0IiwianF1ZXJ5Iiwibm9kZVR5cGUiLCJnZXRFbGVtZW50IiwibGVuZ3RoIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaXNWaXNpYmxlIiwiZ2V0Q2xpZW50UmVjdHMiLCJlbGVtZW50SXNWaXNpYmxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJjbG9zZWREZXRhaWxzIiwiY2xvc2VzdCIsInN1bW1hcnkiLCJwYXJlbnROb2RlIiwiaXNEaXNhYmxlZCIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImRpc2FibGVkIiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiZmluZFNoYWRvd1Jvb3QiLCJkb2N1bWVudEVsZW1lbnQiLCJhdHRhY2hTaGFkb3ciLCJnZXRSb290Tm9kZSIsInJvb3QiLCJTaGFkb3dSb290Iiwibm9vcCIsInJlZmxvdyIsIm9mZnNldEhlaWdodCIsImdldGpRdWVyeSIsImpRdWVyeSIsImJvZHkiLCJET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzIiwiaXNSVEwiLCJkaXIiLCJkZWZpbmVKUXVlcnlQbHVnaW4iLCJwbHVnaW4iLCJjYWxsYmFjayIsIiQiLCJuYW1lIiwiTkFNRSIsIkpRVUVSWV9OT19DT05GTElDVCIsImZuIiwialF1ZXJ5SW50ZXJmYWNlIiwiQ29uc3RydWN0b3IiLCJub0NvbmZsaWN0IiwicmVhZHlTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwdXNoIiwiZXhlY3V0ZSIsInBvc3NpYmxlQ2FsbGJhY2siLCJhcmdzIiwiZGVmYXVsdFZhbHVlIiwiZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiIsInRyYW5zaXRpb25FbGVtZW50Iiwid2FpdEZvclRyYW5zaXRpb24iLCJlbXVsYXRlZER1cmF0aW9uIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvbkRlbGF5IiwiZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24iLCJOdW1iZXIiLCJwYXJzZUZsb2F0IiwiZmxvYXRUcmFuc2l0aW9uRGVsYXkiLCJzcGxpdCIsImNhbGxlZCIsImhhbmRsZXIiLCJ0YXJnZXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsImdldE5leHRBY3RpdmVFbGVtZW50IiwibGlzdCIsImFjdGl2ZUVsZW1lbnQiLCJzaG91bGRHZXROZXh0IiwiaXNDeWNsZUFsbG93ZWQiLCJsaXN0TGVuZ3RoIiwiaW5kZXgiLCJpbmRleE9mIiwiTWF0aCIsIm1heCIsIm1pbiIsIm5hbWVzcGFjZVJlZ2V4Iiwic3RyaXBOYW1lUmVnZXgiLCJzdHJpcFVpZFJlZ2V4IiwiZXZlbnRSZWdpc3RyeSIsInVpZEV2ZW50IiwiY3VzdG9tRXZlbnRzIiwibW91c2VlbnRlciIsIm1vdXNlbGVhdmUiLCJuYXRpdmVFdmVudHMiLCJTZXQiLCJtYWtlRXZlbnRVaWQiLCJ1aWQiLCJnZXRFbGVtZW50RXZlbnRzIiwiZmluZEhhbmRsZXIiLCJldmVudHMiLCJjYWxsYWJsZSIsImRlbGVnYXRpb25TZWxlY3RvciIsIk9iamVjdCIsInZhbHVlcyIsImZpbmQiLCJldmVudCIsIm5vcm1hbGl6ZVBhcmFtZXRlcnMiLCJvcmlnaW5hbFR5cGVFdmVudCIsImRlbGVnYXRpb25GdW5jdGlvbiIsImlzRGVsZWdhdGVkIiwidHlwZUV2ZW50IiwiZ2V0VHlwZUV2ZW50IiwiYWRkSGFuZGxlciIsIm9uZU9mZiIsIndyYXBGdW5jdGlvbiIsInJlbGF0ZWRUYXJnZXQiLCJkZWxlZ2F0ZVRhcmdldCIsImNhbGwiLCJ0aGlzIiwiaGFuZGxlcnMiLCJwcmV2aW91c0Z1bmN0aW9uIiwiZG9tRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZG9tRWxlbWVudCIsImh5ZHJhdGVPYmoiLCJFdmVudEhhbmRsZXIiLCJvZmYiLCJ0eXBlIiwiYXBwbHkiLCJib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlciIsImJvb3RzdHJhcEhhbmRsZXIiLCJyZW1vdmVIYW5kbGVyIiwiQm9vbGVhbiIsInJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyIsIm5hbWVzcGFjZSIsInN0b3JlRWxlbWVudEV2ZW50IiwiZW50cmllcyIsImhhbmRsZXJLZXkiLCJpbmNsdWRlcyIsIm9uIiwib25lIiwiaW5OYW1lc3BhY2UiLCJpc05hbWVzcGFjZSIsInN0YXJ0c1dpdGgiLCJlbGVtZW50RXZlbnQiLCJzbGljZSIsImtleUhhbmRsZXJzIiwidHJpZ2dlciIsImpRdWVyeUV2ZW50IiwiYnViYmxlcyIsIm5hdGl2ZURpc3BhdGNoIiwiZGVmYXVsdFByZXZlbnRlZCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJldnQiLCJjYW5jZWxhYmxlIiwicHJldmVudERlZmF1bHQiLCJvYmoiLCJtZXRhIiwidmFsdWUiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsIm5vcm1hbGl6ZURhdGEiLCJ0b1N0cmluZyIsIkpTT04iLCJwYXJzZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIm5vcm1hbGl6ZURhdGFLZXkiLCJjaHIiLCJ0b0xvd2VyQ2FzZSIsIk1hbmlwdWxhdG9yIiwic2V0RGF0YUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZURhdGFBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJnZXREYXRhQXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJic0tleXMiLCJkYXRhc2V0IiwiZmlsdGVyIiwicHVyZUtleSIsImNoYXJBdCIsImdldERhdGFBdHRyaWJ1dGUiLCJDb25maWciLCJfZ2V0Q29uZmlnIiwiY29uZmlnIiwiX21lcmdlQ29uZmlnT2JqIiwiX2NvbmZpZ0FmdGVyTWVyZ2UiLCJfdHlwZUNoZWNrQ29uZmlnIiwianNvbkNvbmZpZyIsImNvbnN0cnVjdG9yIiwiRGVmYXVsdCIsIkRlZmF1bHRUeXBlIiwiY29uZmlnVHlwZXMiLCJwcm9wZXJ0eSIsImV4cGVjdGVkVHlwZXMiLCJ2YWx1ZVR5cGUiLCJwcm90b3R5cGUiLCJSZWdFeHAiLCJ0ZXN0IiwiVHlwZUVycm9yIiwidG9VcHBlckNhc2UiLCJFcnJvciIsIkJhc2VDb21wb25lbnQiLCJzdXBlciIsIl9lbGVtZW50IiwiX2NvbmZpZyIsIkRBVEFfS0VZIiwiZGlzcG9zZSIsIkVWRU5UX0tFWSIsImdldE93blByb3BlcnR5TmFtZXMiLCJwcm9wZXJ0eU5hbWUiLCJfcXVldWVDYWxsYmFjayIsImlzQW5pbWF0ZWQiLCJnZXRJbnN0YW5jZSIsIlZFUlNJT04iLCJnZXRTZWxlY3RvciIsImhyZWZBdHRyaWJ1dGUiLCJ0cmltIiwiU2VsZWN0b3JFbmdpbmUiLCJjb25jYXQiLCJFbGVtZW50IiwiZmluZE9uZSIsImNoaWxkcmVuIiwiY2hpbGQiLCJtYXRjaGVzIiwicGFyZW50cyIsImFuY2VzdG9yIiwicHJldiIsInByZXZpb3VzIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm5leHQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJmb2N1c2FibGVDaGlsZHJlbiIsImZvY3VzYWJsZXMiLCJtYXAiLCJqb2luIiwiZWwiLCJnZXRTZWxlY3RvckZyb21FbGVtZW50IiwiZ2V0RWxlbWVudEZyb21TZWxlY3RvciIsImdldE11bHRpcGxlRWxlbWVudHNGcm9tU2VsZWN0b3IiLCJlbmFibGVEaXNtaXNzVHJpZ2dlciIsImNvbXBvbmVudCIsIm1ldGhvZCIsImNsaWNrRXZlbnQiLCJ0YWdOYW1lIiwiZ2V0T3JDcmVhdGVJbnN0YW5jZSIsIkVWRU5UX0NMT1NFIiwiRVZFTlRfQ0xPU0VEIiwiQWxlcnQiLCJjbG9zZSIsIl9kZXN0cm95RWxlbWVudCIsImVhY2giLCJkYXRhIiwidW5kZWZpbmVkIiwiU0VMRUNUT1JfREFUQV9UT0dHTEUiLCJCdXR0b24iLCJ0b2dnbGUiLCJidXR0b24iLCJFVkVOVF9UT1VDSFNUQVJUIiwiRVZFTlRfVE9VQ0hNT1ZFIiwiRVZFTlRfVE9VQ0hFTkQiLCJFVkVOVF9QT0lOVEVSRE9XTiIsIkVWRU5UX1BPSU5URVJVUCIsImVuZENhbGxiYWNrIiwibGVmdENhbGxiYWNrIiwicmlnaHRDYWxsYmFjayIsIlN3aXBlIiwiaXNTdXBwb3J0ZWQiLCJfZGVsdGFYIiwiX3N1cHBvcnRQb2ludGVyRXZlbnRzIiwiUG9pbnRlckV2ZW50IiwiX2luaXRFdmVudHMiLCJfc3RhcnQiLCJfZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaCIsImNsaWVudFgiLCJ0b3VjaGVzIiwiX2VuZCIsIl9oYW5kbGVTd2lwZSIsIl9tb3ZlIiwiYWJzRGVsdGFYIiwiYWJzIiwiZGlyZWN0aW9uIiwiYWRkIiwicG9pbnRlclR5cGUiLCJuYXZpZ2F0b3IiLCJtYXhUb3VjaFBvaW50cyIsIkRBVEFfQVBJX0tFWSIsIk9SREVSX05FWFQiLCJPUkRFUl9QUkVWIiwiRElSRUNUSU9OX0xFRlQiLCJESVJFQ1RJT05fUklHSFQiLCJFVkVOVF9TTElERSIsIkVWRU5UX1NMSUQiLCJFVkVOVF9LRVlET1dOIiwiRVZFTlRfTU9VU0VFTlRFUiIsIkVWRU5UX01PVVNFTEVBVkUiLCJFVkVOVF9EUkFHX1NUQVJUIiwiRVZFTlRfTE9BRF9EQVRBX0FQSSIsIkVWRU5UX0NMSUNLX0RBVEFfQVBJIiwiQ0xBU1NfTkFNRV9DQVJPVVNFTCIsIkNMQVNTX05BTUVfQUNUSVZFIiwiU0VMRUNUT1JfQUNUSVZFIiwiU0VMRUNUT1JfSVRFTSIsIlNFTEVDVE9SX0FDVElWRV9JVEVNIiwiS0VZX1RPX0RJUkVDVElPTiIsIkFycm93TGVmdCIsIkFycm93UmlnaHQiLCJpbnRlcnZhbCIsImtleWJvYXJkIiwicGF1c2UiLCJyaWRlIiwidG91Y2giLCJ3cmFwIiwiQ2Fyb3VzZWwiLCJfaW50ZXJ2YWwiLCJfYWN0aXZlRWxlbWVudCIsIl9pc1NsaWRpbmciLCJ0b3VjaFRpbWVvdXQiLCJfc3dpcGVIZWxwZXIiLCJfaW5kaWNhdG9yc0VsZW1lbnQiLCJfYWRkRXZlbnRMaXN0ZW5lcnMiLCJjeWNsZSIsIl9zbGlkZSIsIm5leHRXaGVuVmlzaWJsZSIsImhpZGRlbiIsIl9jbGVhckludGVydmFsIiwiX3VwZGF0ZUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJfbWF5YmVFbmFibGVDeWNsZSIsInRvIiwiaXRlbXMiLCJfZ2V0SXRlbXMiLCJhY3RpdmVJbmRleCIsIl9nZXRJdGVtSW5kZXgiLCJfZ2V0QWN0aXZlIiwib3JkZXIiLCJkZWZhdWx0SW50ZXJ2YWwiLCJfa2V5ZG93biIsIl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzIiwiaW1nIiwic3dpcGVDb25maWciLCJfZGlyZWN0aW9uVG9PcmRlciIsImVuZENhbGxCYWNrIiwiY2xlYXJUaW1lb3V0IiwiX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQiLCJhY3RpdmVJbmRpY2F0b3IiLCJuZXdBY3RpdmVJbmRpY2F0b3IiLCJlbGVtZW50SW50ZXJ2YWwiLCJwYXJzZUludCIsImlzTmV4dCIsIm5leHRFbGVtZW50IiwibmV4dEVsZW1lbnRJbmRleCIsInRyaWdnZXJFdmVudCIsImV2ZW50TmFtZSIsIl9vcmRlclRvRGlyZWN0aW9uIiwiaXNDeWNsaW5nIiwiZGlyZWN0aW9uYWxDbGFzc05hbWUiLCJvcmRlckNsYXNzTmFtZSIsImNvbXBsZXRlQ2FsbEJhY2siLCJfaXNBbmltYXRlZCIsImNsZWFySW50ZXJ2YWwiLCJjYXJvdXNlbCIsInNsaWRlSW5kZXgiLCJjYXJvdXNlbHMiLCJFVkVOVF9TSE9XIiwiRVZFTlRfU0hPV04iLCJFVkVOVF9ISURFIiwiRVZFTlRfSElEREVOIiwiQ0xBU1NfTkFNRV9TSE9XIiwiQ0xBU1NfTkFNRV9DT0xMQVBTRSIsIkNMQVNTX05BTUVfQ09MTEFQU0lORyIsIkNMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOIiwicGFyZW50IiwiQ29sbGFwc2UiLCJfaXNUcmFuc2l0aW9uaW5nIiwiX3RyaWdnZXJBcnJheSIsInRvZ2dsZUxpc3QiLCJlbGVtIiwiZmlsdGVyRWxlbWVudCIsImZvdW5kRWxlbWVudCIsIl9pbml0aWFsaXplQ2hpbGRyZW4iLCJfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzIiwiX2lzU2hvd24iLCJoaWRlIiwic2hvdyIsImFjdGl2ZUNoaWxkcmVuIiwiX2dldEZpcnN0TGV2ZWxDaGlsZHJlbiIsImFjdGl2ZUluc3RhbmNlIiwiZGltZW5zaW9uIiwiX2dldERpbWVuc2lvbiIsInN0eWxlIiwic2Nyb2xsU2l6ZSIsImNvbXBsZXRlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic2VsZWN0ZWQiLCJ0cmlnZ2VyQXJyYXkiLCJpc09wZW4iLCJ0b3AiLCJib3R0b20iLCJyaWdodCIsImxlZnQiLCJhdXRvIiwiYmFzZVBsYWNlbWVudHMiLCJzdGFydCIsImVuZCIsImNsaXBwaW5nUGFyZW50cyIsInZpZXdwb3J0IiwicG9wcGVyIiwicmVmZXJlbmNlIiwidmFyaWF0aW9uUGxhY2VtZW50cyIsInJlZHVjZSIsImFjYyIsInBsYWNlbWVudCIsInBsYWNlbWVudHMiLCJiZWZvcmVSZWFkIiwicmVhZCIsImFmdGVyUmVhZCIsImJlZm9yZU1haW4iLCJtYWluIiwiYWZ0ZXJNYWluIiwiYmVmb3JlV3JpdGUiLCJ3cml0ZSIsImFmdGVyV3JpdGUiLCJtb2RpZmllclBoYXNlcyIsImdldE5vZGVOYW1lIiwibm9kZU5hbWUiLCJnZXRXaW5kb3ciLCJub2RlIiwib3duZXJEb2N1bWVudCIsImRlZmF1bHRWaWV3IiwiaXNIVE1MRWxlbWVudCIsIkhUTUxFbGVtZW50IiwiaXNTaGFkb3dSb290IiwiZW5hYmxlZCIsInBoYXNlIiwiX3JlZiIsInN0YXRlIiwiZWxlbWVudHMiLCJmb3JFYWNoIiwic3R5bGVzIiwiYXNzaWduIiwiZWZmZWN0IiwiX3JlZjIiLCJpbml0aWFsU3R5bGVzIiwicG9zaXRpb24iLCJvcHRpb25zIiwic3RyYXRlZ3kiLCJtYXJnaW4iLCJhcnJvdyIsImhhc093blByb3BlcnR5IiwiYXR0cmlidXRlIiwicmVxdWlyZXMiLCJnZXRCYXNlUGxhY2VtZW50Iiwicm91bmQiLCJnZXRVQVN0cmluZyIsInVhRGF0YSIsInVzZXJBZ2VudERhdGEiLCJicmFuZHMiLCJpc0FycmF5IiwiaXRlbSIsImJyYW5kIiwidmVyc2lvbiIsInVzZXJBZ2VudCIsImlzTGF5b3V0Vmlld3BvcnQiLCJpbmNsdWRlU2NhbGUiLCJpc0ZpeGVkU3RyYXRlZ3kiLCJjbGllbnRSZWN0Iiwic2NhbGVYIiwic2NhbGVZIiwib2Zmc2V0V2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsInZpc3VhbFZpZXdwb3J0IiwiYWRkVmlzdWFsT2Zmc2V0cyIsIngiLCJvZmZzZXRMZWZ0IiwieSIsIm9mZnNldFRvcCIsImdldExheW91dFJlY3QiLCJyb290Tm9kZSIsImlzU2FtZU5vZGUiLCJob3N0IiwiaXNUYWJsZUVsZW1lbnQiLCJnZXREb2N1bWVudEVsZW1lbnQiLCJnZXRQYXJlbnROb2RlIiwiYXNzaWduZWRTbG90IiwiZ2V0VHJ1ZU9mZnNldFBhcmVudCIsIm9mZnNldFBhcmVudCIsImdldE9mZnNldFBhcmVudCIsImlzRmlyZWZveCIsImN1cnJlbnROb2RlIiwiY3NzIiwidHJhbnNmb3JtIiwicGVyc3BlY3RpdmUiLCJjb250YWluIiwid2lsbENoYW5nZSIsImdldENvbnRhaW5pbmdCbG9jayIsImdldE1haW5BeGlzRnJvbVBsYWNlbWVudCIsIndpdGhpbiIsIm1hdGhNYXgiLCJtYXRoTWluIiwibWVyZ2VQYWRkaW5nT2JqZWN0IiwicGFkZGluZ09iamVjdCIsImV4cGFuZFRvSGFzaE1hcCIsImhhc2hNYXAiLCJfc3RhdGUkbW9kaWZpZXJzRGF0YSQiLCJhcnJvd0VsZW1lbnQiLCJwb3BwZXJPZmZzZXRzIiwibW9kaWZpZXJzRGF0YSIsImJhc2VQbGFjZW1lbnQiLCJheGlzIiwibGVuIiwicGFkZGluZyIsInJlY3RzIiwidG9QYWRkaW5nT2JqZWN0IiwiYXJyb3dSZWN0IiwibWluUHJvcCIsIm1heFByb3AiLCJlbmREaWZmIiwic3RhcnREaWZmIiwiYXJyb3dPZmZzZXRQYXJlbnQiLCJjbGllbnRTaXplIiwiY2xpZW50SGVpZ2h0IiwiY2xpZW50V2lkdGgiLCJjZW50ZXJUb1JlZmVyZW5jZSIsImNlbnRlciIsIm9mZnNldCIsImF4aXNQcm9wIiwiY2VudGVyT2Zmc2V0IiwiX29wdGlvbnMkZWxlbWVudCIsInJlcXVpcmVzSWZFeGlzdHMiLCJnZXRWYXJpYXRpb24iLCJ1bnNldFNpZGVzIiwibWFwVG9TdHlsZXMiLCJfT2JqZWN0JGFzc2lnbjIiLCJwb3BwZXJSZWN0IiwidmFyaWF0aW9uIiwib2Zmc2V0cyIsImdwdUFjY2VsZXJhdGlvbiIsImFkYXB0aXZlIiwicm91bmRPZmZzZXRzIiwiaXNGaXhlZCIsIl9vZmZzZXRzJHgiLCJfb2Zmc2V0cyR5IiwiX3JlZjMiLCJoYXNYIiwiaGFzWSIsInNpZGVYIiwic2lkZVkiLCJ3aW4iLCJoZWlnaHRQcm9wIiwid2lkdGhQcm9wIiwiX09iamVjdCRhc3NpZ24iLCJjb21tb25TdHlsZXMiLCJfcmVmNCIsImRwciIsImRldmljZVBpeGVsUmF0aW8iLCJyb3VuZE9mZnNldHNCeURQUiIsIl9yZWY1IiwiX29wdGlvbnMkZ3B1QWNjZWxlcmF0IiwiX29wdGlvbnMkYWRhcHRpdmUiLCJfb3B0aW9ucyRyb3VuZE9mZnNldHMiLCJwYXNzaXZlIiwiX29wdGlvbnMkc2Nyb2xsIiwic2Nyb2xsIiwiX29wdGlvbnMkcmVzaXplIiwicmVzaXplIiwic2Nyb2xsUGFyZW50cyIsInNjcm9sbFBhcmVudCIsInVwZGF0ZSIsImhhc2giLCJnZXRPcHBvc2l0ZVBsYWNlbWVudCIsIm1hdGNoZWQiLCJnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudCIsImdldFdpbmRvd1Njcm9sbCIsInNjcm9sbExlZnQiLCJwYWdlWE9mZnNldCIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiZ2V0V2luZG93U2Nyb2xsQmFyWCIsImlzU2Nyb2xsUGFyZW50IiwiX2dldENvbXB1dGVkU3R5bGUiLCJvdmVyZmxvdyIsIm92ZXJmbG93WCIsIm92ZXJmbG93WSIsImdldFNjcm9sbFBhcmVudCIsImxpc3RTY3JvbGxQYXJlbnRzIiwiX2VsZW1lbnQkb3duZXJEb2N1bWVuIiwiaXNCb2R5IiwidXBkYXRlZExpc3QiLCJyZWN0VG9DbGllbnRSZWN0IiwicmVjdCIsImdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlIiwiY2xpcHBpbmdQYXJlbnQiLCJodG1sIiwibGF5b3V0Vmlld3BvcnQiLCJnZXRWaWV3cG9ydFJlY3QiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0IiwiZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aW5TY3JvbGwiLCJzY3JvbGxXaWR0aCIsInNjcm9sbEhlaWdodCIsImdldERvY3VtZW50UmVjdCIsImNvbXB1dGVPZmZzZXRzIiwiY29tbW9uWCIsImNvbW1vblkiLCJtYWluQXhpcyIsImRldGVjdE92ZXJmbG93IiwiX29wdGlvbnMiLCJfb3B0aW9ucyRwbGFjZW1lbnQiLCJfb3B0aW9ucyRzdHJhdGVneSIsIl9vcHRpb25zJGJvdW5kYXJ5IiwiYm91bmRhcnkiLCJfb3B0aW9ucyRyb290Qm91bmRhcnkiLCJyb290Qm91bmRhcnkiLCJfb3B0aW9ucyRlbGVtZW50Q29udGUiLCJlbGVtZW50Q29udGV4dCIsIl9vcHRpb25zJGFsdEJvdW5kYXJ5IiwiYWx0Qm91bmRhcnkiLCJfb3B0aW9ucyRwYWRkaW5nIiwiYWx0Q29udGV4dCIsImNsaXBwaW5nQ2xpZW50UmVjdCIsIm1haW5DbGlwcGluZ1BhcmVudHMiLCJjbGlwcGVyRWxlbWVudCIsImdldENsaXBwaW5nUGFyZW50cyIsImZpcnN0Q2xpcHBpbmdQYXJlbnQiLCJjbGlwcGluZ1JlY3QiLCJhY2NSZWN0IiwiZ2V0Q2xpcHBpbmdSZWN0IiwiY29udGV4dEVsZW1lbnQiLCJyZWZlcmVuY2VDbGllbnRSZWN0IiwicG9wcGVyQ2xpZW50UmVjdCIsImVsZW1lbnRDbGllbnRSZWN0Iiwib3ZlcmZsb3dPZmZzZXRzIiwib2Zmc2V0RGF0YSIsIm11bHRpcGx5IiwiY29tcHV0ZUF1dG9QbGFjZW1lbnQiLCJmbGlwVmFyaWF0aW9ucyIsIl9vcHRpb25zJGFsbG93ZWRBdXRvUCIsImFsbG93ZWRBdXRvUGxhY2VtZW50cyIsImFsbFBsYWNlbWVudHMiLCJhbGxvd2VkUGxhY2VtZW50cyIsIm92ZXJmbG93cyIsInNvcnQiLCJhIiwiYiIsIl9za2lwIiwiX29wdGlvbnMkbWFpbkF4aXMiLCJjaGVja01haW5BeGlzIiwiX29wdGlvbnMkYWx0QXhpcyIsImFsdEF4aXMiLCJjaGVja0FsdEF4aXMiLCJzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMiLCJmYWxsYmFja1BsYWNlbWVudHMiLCJfb3B0aW9ucyRmbGlwVmFyaWF0aW8iLCJwcmVmZXJyZWRQbGFjZW1lbnQiLCJvcHBvc2l0ZVBsYWNlbWVudCIsImdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzIiwicmVmZXJlbmNlUmVjdCIsImNoZWNrc01hcCIsIm1ha2VGYWxsYmFja0NoZWNrcyIsImZpcnN0Rml0dGluZ1BsYWNlbWVudCIsImkiLCJfYmFzZVBsYWNlbWVudCIsImlzU3RhcnRWYXJpYXRpb24iLCJpc1ZlcnRpY2FsIiwibWFpblZhcmlhdGlvblNpZGUiLCJhbHRWYXJpYXRpb25TaWRlIiwiY2hlY2tzIiwiZXZlcnkiLCJjaGVjayIsIl9sb29wIiwiX2kiLCJmaXR0aW5nUGxhY2VtZW50IiwicmVzZXQiLCJnZXRTaWRlT2Zmc2V0cyIsInByZXZlbnRlZE9mZnNldHMiLCJpc0FueVNpZGVGdWxseUNsaXBwZWQiLCJzb21lIiwic2lkZSIsInByZXZlbnRPdmVyZmxvdyIsInJlZmVyZW5jZU92ZXJmbG93IiwicG9wcGVyQWx0T3ZlcmZsb3ciLCJyZWZlcmVuY2VDbGlwcGluZ09mZnNldHMiLCJwb3BwZXJFc2NhcGVPZmZzZXRzIiwiaXNSZWZlcmVuY2VIaWRkZW4iLCJoYXNQb3BwZXJFc2NhcGVkIiwib2Zmc2V0JDEiLCJfb3B0aW9ucyRvZmZzZXQiLCJpbnZlcnREaXN0YW5jZSIsInNraWRkaW5nIiwiZGlzdGFuY2UiLCJkaXN0YW5jZUFuZFNraWRkaW5nVG9YWSIsIl9kYXRhJHN0YXRlJHBsYWNlbWVudCIsInBvcHBlck9mZnNldHMkMSIsInByZXZlbnRPdmVyZmxvdyQxIiwiX29wdGlvbnMkdGV0aGVyIiwidGV0aGVyIiwiX29wdGlvbnMkdGV0aGVyT2Zmc2V0IiwidGV0aGVyT2Zmc2V0IiwiaXNCYXNlUGxhY2VtZW50IiwidGV0aGVyT2Zmc2V0VmFsdWUiLCJub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUiLCJvZmZzZXRNb2RpZmllclN0YXRlIiwiX29mZnNldE1vZGlmaWVyU3RhdGUkIiwibWFpblNpZGUiLCJhbHRTaWRlIiwiYWRkaXRpdmUiLCJtaW5MZW4iLCJtYXhMZW4iLCJhcnJvd1BhZGRpbmdPYmplY3QiLCJhcnJvd1BhZGRpbmdNaW4iLCJhcnJvd1BhZGRpbmdNYXgiLCJhcnJvd0xlbiIsIm1pbk9mZnNldCIsIm1heE9mZnNldCIsImNsaWVudE9mZnNldCIsIm9mZnNldE1vZGlmaWVyVmFsdWUiLCJ0ZXRoZXJNYXgiLCJwcmV2ZW50ZWRPZmZzZXQiLCJfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyIiwiX21haW5TaWRlIiwiX2FsdFNpZGUiLCJfb2Zmc2V0IiwiX2xlbiIsIl9taW4iLCJfbWF4IiwiaXNPcmlnaW5TaWRlIiwiX29mZnNldE1vZGlmaWVyVmFsdWUiLCJfdGV0aGVyTWluIiwiX3RldGhlck1heCIsIl9wcmV2ZW50ZWRPZmZzZXQiLCJ2Iiwid2l0aGluTWF4Q2xhbXAiLCJnZXRDb21wb3NpdGVSZWN0IiwiZWxlbWVudE9yVmlydHVhbEVsZW1lbnQiLCJpc09mZnNldFBhcmVudEFuRWxlbWVudCIsIm9mZnNldFBhcmVudElzU2NhbGVkIiwiaXNFbGVtZW50U2NhbGVkIiwibW9kaWZpZXJzIiwidmlzaXRlZCIsInJlc3VsdCIsIm1vZGlmaWVyIiwiZGVwIiwiZGVwTW9kaWZpZXIiLCJERUZBVUxUX09QVElPTlMiLCJhcmVWYWxpZEVsZW1lbnRzIiwiYXJndW1lbnRzIiwiX2tleSIsInBvcHBlckdlbmVyYXRvciIsImdlbmVyYXRvck9wdGlvbnMiLCJfZ2VuZXJhdG9yT3B0aW9ucyIsIl9nZW5lcmF0b3JPcHRpb25zJGRlZiIsImRlZmF1bHRNb2RpZmllcnMiLCJfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyIiwiZGVmYXVsdE9wdGlvbnMiLCJwZW5kaW5nIiwib3JkZXJlZE1vZGlmaWVycyIsImVmZmVjdENsZWFudXBGbnMiLCJpc0Rlc3Ryb3llZCIsInNldE9wdGlvbnMiLCJzZXRPcHRpb25zQWN0aW9uIiwiY2xlYW51cE1vZGlmaWVyRWZmZWN0cyIsIm1lcmdlZCIsIm9yZGVyTW9kaWZpZXJzIiwiY3VycmVudCIsImV4aXN0aW5nIiwibSIsIl9yZWYkb3B0aW9ucyIsImNsZWFudXBGbiIsImZvcmNlVXBkYXRlIiwiX3N0YXRlJGVsZW1lbnRzIiwiX3N0YXRlJG9yZGVyZWRNb2RpZmllIiwiX3N0YXRlJG9yZGVyZWRNb2RpZmllMiIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsImRlc3Ryb3kiLCJvbkZpcnN0VXBkYXRlIiwiY3JlYXRlUG9wcGVyIiwiZXZlbnRMaXN0ZW5lcnMiLCJjb21wdXRlU3R5bGVzIiwiYXBwbHlTdHlsZXMiLCJmbGlwIiwiQVJST1dfVVBfS0VZIiwiQVJST1dfRE9XTl9LRVkiLCJFVkVOVF9LRVlET1dOX0RBVEFfQVBJIiwiRVZFTlRfS0VZVVBfREFUQV9BUEkiLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TSE9XTiIsIlNFTEVDVE9SX01FTlUiLCJQTEFDRU1FTlRfVE9QIiwiUExBQ0VNRU5UX1RPUEVORCIsIlBMQUNFTUVOVF9CT1RUT00iLCJQTEFDRU1FTlRfQk9UVE9NRU5EIiwiUExBQ0VNRU5UX1JJR0hUIiwiUExBQ0VNRU5UX0xFRlQiLCJhdXRvQ2xvc2UiLCJkaXNwbGF5IiwicG9wcGVyQ29uZmlnIiwiRHJvcGRvd24iLCJfcG9wcGVyIiwiX3BhcmVudCIsIl9tZW51IiwiX2luTmF2YmFyIiwiX2RldGVjdE5hdmJhciIsIl9jcmVhdGVQb3BwZXIiLCJmb2N1cyIsIl9jb21wbGV0ZUhpZGUiLCJQb3BwZXIiLCJyZWZlcmVuY2VFbGVtZW50IiwiX2dldFBvcHBlckNvbmZpZyIsIl9nZXRQbGFjZW1lbnQiLCJwYXJlbnREcm9wZG93biIsImlzRW5kIiwiX2dldE9mZnNldCIsInBvcHBlckRhdGEiLCJkZWZhdWx0QnNQb3BwZXJDb25maWciLCJfc2VsZWN0TWVudUl0ZW0iLCJvcGVuVG9nZ2xlcyIsImNvbnRleHQiLCJjb21wb3NlZFBhdGgiLCJpc01lbnVUYXJnZXQiLCJpc0lucHV0IiwiaXNFc2NhcGVFdmVudCIsImlzVXBPckRvd25FdmVudCIsImdldFRvZ2dsZUJ1dHRvbiIsInN0b3BQcm9wYWdhdGlvbiIsImRhdGFBcGlLZXlkb3duSGFuZGxlciIsImNsZWFyTWVudXMiLCJFVkVOVF9NT1VTRURPV04iLCJjbGFzc05hbWUiLCJjbGlja0NhbGxiYWNrIiwicm9vdEVsZW1lbnQiLCJCYWNrZHJvcCIsIl9pc0FwcGVuZGVkIiwiX2FwcGVuZCIsIl9nZXRFbGVtZW50IiwiX2VtdWxhdGVBbmltYXRpb24iLCJiYWNrZHJvcCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmQiLCJFVkVOVF9GT0NVU0lOIiwiRVZFTlRfS0VZRE9XTl9UQUIiLCJUQUJfTkFWX0JBQ0tXQVJEIiwiYXV0b2ZvY3VzIiwidHJhcEVsZW1lbnQiLCJGb2N1c1RyYXAiLCJfaXNBY3RpdmUiLCJfbGFzdFRhYk5hdkRpcmVjdGlvbiIsImFjdGl2YXRlIiwiX2hhbmRsZUZvY3VzaW4iLCJfaGFuZGxlS2V5ZG93biIsImRlYWN0aXZhdGUiLCJzaGlmdEtleSIsIlNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQiLCJTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCIsIlBST1BFUlRZX1BBRERJTkciLCJQUk9QRVJUWV9NQVJHSU4iLCJTY3JvbGxCYXJIZWxwZXIiLCJnZXRXaWR0aCIsImRvY3VtZW50V2lkdGgiLCJpbm5lcldpZHRoIiwiX2Rpc2FibGVPdmVyRmxvdyIsIl9zZXRFbGVtZW50QXR0cmlidXRlcyIsImNhbGN1bGF0ZWRWYWx1ZSIsIl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzIiwiaXNPdmVyZmxvd2luZyIsIl9zYXZlSW5pdGlhbEF0dHJpYnV0ZSIsInN0eWxlUHJvcGVydHkiLCJzY3JvbGxiYXJXaWR0aCIsIl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrIiwic2V0UHJvcGVydHkiLCJhY3R1YWxWYWx1ZSIsInJlbW92ZVByb3BlcnR5IiwiY2FsbEJhY2siLCJzZWwiLCJFVkVOVF9ISURFX1BSRVZFTlRFRCIsIkVWRU5UX1JFU0laRSIsIkVWRU5UX0NMSUNLX0RJU01JU1MiLCJFVkVOVF9NT1VTRURPV05fRElTTUlTUyIsIkVWRU5UX0tFWURPV05fRElTTUlTUyIsIkNMQVNTX05BTUVfT1BFTiIsIkNMQVNTX05BTUVfU1RBVElDIiwiTW9kYWwiLCJfZGlhbG9nIiwiX2JhY2tkcm9wIiwiX2luaXRpYWxpemVCYWNrRHJvcCIsIl9mb2N1c3RyYXAiLCJfaW5pdGlhbGl6ZUZvY3VzVHJhcCIsIl9zY3JvbGxCYXIiLCJfYWRqdXN0RGlhbG9nIiwiX3Nob3dFbGVtZW50IiwiX2hpZGVNb2RhbCIsImhhbmRsZVVwZGF0ZSIsIm1vZGFsQm9keSIsInRyYW5zaXRpb25Db21wbGV0ZSIsIl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uIiwiZXZlbnQyIiwiX3Jlc2V0QWRqdXN0bWVudHMiLCJpc01vZGFsT3ZlcmZsb3dpbmciLCJpbml0aWFsT3ZlcmZsb3dZIiwiaXNCb2R5T3ZlcmZsb3dpbmciLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInNob3dFdmVudCIsImFscmVhZHlPcGVuIiwiQ0xBU1NfTkFNRV9TSE9XSU5HIiwiQ0xBU1NfTkFNRV9ISURJTkciLCJPUEVOX1NFTEVDVE9SIiwiT2ZmY2FudmFzIiwiYmx1ciIsImNvbXBsZXRlQ2FsbGJhY2siLCJEZWZhdWx0QWxsb3dsaXN0IiwiYXJlYSIsImJyIiwiY29sIiwiY29kZSIsImRpdiIsImVtIiwiaHIiLCJoMSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJsaSIsIm9sIiwicCIsInByZSIsInMiLCJzbWFsbCIsInNwYW4iLCJzdWIiLCJzdXAiLCJzdHJvbmciLCJ1IiwidWwiLCJ1cmlBdHRyaWJ1dGVzIiwiU0FGRV9VUkxfUEFUVEVSTiIsImFsbG93ZWRBdHRyaWJ1dGUiLCJhbGxvd2VkQXR0cmlidXRlTGlzdCIsImF0dHJpYnV0ZU5hbWUiLCJub2RlVmFsdWUiLCJhdHRyaWJ1dGVSZWdleCIsInJlZ2V4IiwiYWxsb3dMaXN0IiwiY29udGVudCIsImV4dHJhQ2xhc3MiLCJzYW5pdGl6ZSIsInNhbml0aXplRm4iLCJ0ZW1wbGF0ZSIsIkRlZmF1bHRDb250ZW50VHlwZSIsImVudHJ5IiwiVGVtcGxhdGVGYWN0b3J5IiwiZ2V0Q29udGVudCIsIl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbiIsImhhc0NvbnRlbnQiLCJjaGFuZ2VDb250ZW50IiwiX2NoZWNrQ29udGVudCIsInRvSHRtbCIsInRlbXBsYXRlV3JhcHBlciIsImlubmVySFRNTCIsIl9tYXliZVNhbml0aXplIiwidGV4dCIsIl9zZXRDb250ZW50IiwiYXJnIiwidGVtcGxhdGVFbGVtZW50IiwiX3B1dEVsZW1lbnRJblRlbXBsYXRlIiwidGV4dENvbnRlbnQiLCJ1bnNhZmVIdG1sIiwic2FuaXRpemVGdW5jdGlvbiIsImNyZWF0ZWREb2N1bWVudCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsImVsZW1lbnROYW1lIiwiYXR0cmlidXRlTGlzdCIsImFsbG93ZWRBdHRyaWJ1dGVzIiwic2FuaXRpemVIdG1sIiwiRElTQUxMT1dFRF9BVFRSSUJVVEVTIiwiQ0xBU1NfTkFNRV9GQURFIiwiU0VMRUNUT1JfTU9EQUwiLCJFVkVOVF9NT0RBTF9ISURFIiwiVFJJR0dFUl9IT1ZFUiIsIlRSSUdHRVJfRk9DVVMiLCJBdHRhY2htZW50TWFwIiwiQVVUTyIsIlRPUCIsIlJJR0hUIiwiQk9UVE9NIiwiTEVGVCIsImFuaW1hdGlvbiIsImNvbnRhaW5lciIsImN1c3RvbUNsYXNzIiwiZGVsYXkiLCJ0aXRsZSIsIlRvb2x0aXAiLCJfaXNFbmFibGVkIiwiX3RpbWVvdXQiLCJfaXNIb3ZlcmVkIiwiX2FjdGl2ZVRyaWdnZXIiLCJfdGVtcGxhdGVGYWN0b3J5IiwiX25ld0NvbnRlbnQiLCJ0aXAiLCJfc2V0TGlzdGVuZXJzIiwiX2ZpeFRpdGxlIiwiZW5hYmxlIiwiZGlzYWJsZSIsInRvZ2dsZUVuYWJsZWQiLCJjbGljayIsIl9sZWF2ZSIsIl9lbnRlciIsIl9oaWRlTW9kYWxIYW5kbGVyIiwiX2Rpc3Bvc2VQb3BwZXIiLCJfaXNXaXRoQ29udGVudCIsImlzSW5UaGVEb20iLCJfZ2V0VGlwRWxlbWVudCIsIl9pc1dpdGhBY3RpdmVUcmlnZ2VyIiwiX2dldFRpdGxlIiwiX2NyZWF0ZVRpcEVsZW1lbnQiLCJfZ2V0Q29udGVudEZvclRlbXBsYXRlIiwiX2dldFRlbXBsYXRlRmFjdG9yeSIsInRpcElkIiwicHJlZml4IiwiZmxvb3IiLCJyYW5kb20iLCJnZXRFbGVtZW50QnlJZCIsInNldENvbnRlbnQiLCJfaW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0IiwiX2dldERlbGVnYXRlQ29uZmlnIiwiYXR0YWNobWVudCIsInRyaWdnZXJzIiwiZXZlbnRJbiIsImV2ZW50T3V0IiwiX3NldFRpbWVvdXQiLCJ0aW1lb3V0IiwiZGF0YUF0dHJpYnV0ZXMiLCJkYXRhQXR0cmlidXRlIiwiUG9wb3ZlciIsIl9nZXRDb250ZW50IiwiRVZFTlRfQUNUSVZBVEUiLCJFVkVOVF9DTElDSyIsIlNFTEVDVE9SX1RBUkdFVF9MSU5LUyIsIlNFTEVDVE9SX05BVl9MSU5LUyIsIlNFTEVDVE9SX0xJTktfSVRFTVMiLCJyb290TWFyZ2luIiwic21vb3RoU2Nyb2xsIiwidGhyZXNob2xkIiwiU2Nyb2xsU3B5IiwiX3RhcmdldExpbmtzIiwiX29ic2VydmFibGVTZWN0aW9ucyIsIl9yb290RWxlbWVudCIsIl9hY3RpdmVUYXJnZXQiLCJfb2JzZXJ2ZXIiLCJfcHJldmlvdXNTY3JvbGxEYXRhIiwidmlzaWJsZUVudHJ5VG9wIiwicGFyZW50U2Nyb2xsVG9wIiwicmVmcmVzaCIsIl9pbml0aWFsaXplVGFyZ2V0c0FuZE9ic2VydmFibGVzIiwiX21heWJlRW5hYmxlU21vb3RoU2Nyb2xsIiwiZGlzY29ubmVjdCIsIl9nZXROZXdPYnNlcnZlciIsInNlY3Rpb24iLCJvYnNlcnZlIiwib2JzZXJ2YWJsZVNlY3Rpb24iLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJfb2JzZXJ2ZXJDYWxsYmFjayIsInRhcmdldEVsZW1lbnQiLCJfcHJvY2VzcyIsInVzZXJTY3JvbGxzRG93biIsImlzSW50ZXJzZWN0aW5nIiwiX2NsZWFyQWN0aXZlQ2xhc3MiLCJlbnRyeUlzTG93ZXJUaGFuUHJldmlvdXMiLCJ0YXJnZXRMaW5rcyIsImFuY2hvciIsImRlY29kZVVSSSIsIl9hY3RpdmF0ZVBhcmVudHMiLCJsaXN0R3JvdXAiLCJhY3RpdmVOb2RlcyIsInNweSIsIkFSUk9XX0xFRlRfS0VZIiwiQVJST1dfUklHSFRfS0VZIiwiSE9NRV9LRVkiLCJFTkRfS0VZIiwiU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFIiwiTk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRSIsIlNFTEVDVE9SX0lOTkVSX0VMRU0iLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRV9BQ1RJVkUiLCJUYWIiLCJfc2V0SW5pdGlhbEF0dHJpYnV0ZXMiLCJfZ2V0Q2hpbGRyZW4iLCJpbm5lckVsZW0iLCJfZWxlbUlzQWN0aXZlIiwiYWN0aXZlIiwiX2dldEFjdGl2ZUVsZW0iLCJoaWRlRXZlbnQiLCJfZGVhY3RpdmF0ZSIsIl9hY3RpdmF0ZSIsInJlbGF0ZWRFbGVtIiwiX3RvZ2dsZURyb3BEb3duIiwibmV4dEFjdGl2ZUVsZW1lbnQiLCJwcmV2ZW50U2Nyb2xsIiwiX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzIiwiX3NldEluaXRpYWxBdHRyaWJ1dGVzT25DaGlsZCIsIl9nZXRJbm5lckVsZW1lbnQiLCJpc0FjdGl2ZSIsIm91dGVyRWxlbSIsIl9nZXRPdXRlckVsZW1lbnQiLCJfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPblRhcmdldFBhbmVsIiwib3BlbiIsIkVWRU5UX01PVVNFT1ZFUiIsIkVWRU5UX01PVVNFT1VUIiwiRVZFTlRfRk9DVVNPVVQiLCJDTEFTU19OQU1FX0hJREUiLCJhdXRvaGlkZSIsIlRvYXN0IiwiX2hhc01vdXNlSW50ZXJhY3Rpb24iLCJfaGFzS2V5Ym9hcmRJbnRlcmFjdGlvbiIsIl9jbGVhclRpbWVvdXQiLCJfbWF5YmVTY2hlZHVsZUhpZGUiLCJpc1Nob3duIiwiX29uSW50ZXJhY3Rpb24iLCJpc0ludGVyYWN0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxvQkFBb0IsbUJBQU8sQ0FBQyxvR0FBb0I7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNB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S3BCc0MsRUFBcUI4MkIsRUFBckI5MkIsR0FNQTFNLEVBQW1Cd2pDLEVBQW5CeGpDLENBTkEwTSxFQ3BNZTtBQUNiUSxZQURhO0FBRWJPLGFBRmE7QUFHYjBELGdCQUhhO0FBSWI0RCxnQkFKYTtBQUtiMmEsZ0JBTGE7QUFNYm9GLGFBTmE7QUFPYjBCLGlCQVBhO0FBUWJpSSxlQVJhO0FBU2JVLGlCQVRhO0FBVWIwQyxXQVZhO0FBV2IyQixhQVhhO0FBWWJ6SDtBQVphLEciLCJmaWxlIjoic3RhdGljL2NodW5rcy8wLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlLmpzXCIpO1xuXG5mdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IFJlZmxlY3QuZ2V0O1xuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc3VwZXJQcm9wQmFzZTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgZG9tL2RhdGEuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IGVsZW1lbnRNYXAgPSBuZXcgTWFwKClcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzZXQoZWxlbWVudCwga2V5LCBpbnN0YW5jZSkge1xuICAgIGlmICghZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgIGVsZW1lbnRNYXAuc2V0KGVsZW1lbnQsIG5ldyBNYXAoKSlcbiAgICB9XG5cbiAgICBjb25zdCBpbnN0YW5jZU1hcCA9IGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpXG5cbiAgICAvLyBtYWtlIGl0IGNsZWFyIHdlIG9ubHkgd2FudCBvbmUgaW5zdGFuY2UgcGVyIGVsZW1lbnRcbiAgICAvLyBjYW4gYmUgcmVtb3ZlZCBsYXRlciB3aGVuIG11bHRpcGxlIGtleS9pbnN0YW5jZXMgYXJlIGZpbmUgdG8gYmUgdXNlZFxuICAgIGlmICghaW5zdGFuY2VNYXAuaGFzKGtleSkgJiYgaW5zdGFuY2VNYXAuc2l6ZSAhPT0gMCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEJvb3RzdHJhcCBkb2Vzbid0IGFsbG93IG1vcmUgdGhhbiBvbmUgaW5zdGFuY2UgcGVyIGVsZW1lbnQuIEJvdW5kIGluc3RhbmNlOiAke0FycmF5LmZyb20oaW5zdGFuY2VNYXAua2V5cygpKVswXX0uYClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGluc3RhbmNlTWFwLnNldChrZXksIGluc3RhbmNlKVxuICB9LFxuXG4gIGdldChlbGVtZW50LCBrZXkpIHtcbiAgICBpZiAoZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybiBlbGVtZW50TWFwLmdldChlbGVtZW50KS5nZXQoa2V5KSB8fCBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfSxcblxuICByZW1vdmUoZWxlbWVudCwga2V5KSB7XG4gICAgaWYgKCFlbGVtZW50TWFwLmhhcyhlbGVtZW50KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaW5zdGFuY2VNYXAgPSBlbGVtZW50TWFwLmdldChlbGVtZW50KVxuXG4gICAgaW5zdGFuY2VNYXAuZGVsZXRlKGtleSlcblxuICAgIC8vIGZyZWUgdXAgZWxlbWVudCByZWZlcmVuY2VzIGlmIHRoZXJlIGFyZSBubyBpbnN0YW5jZXMgbGVmdCBmb3IgYW4gZWxlbWVudFxuICAgIGlmIChpbnN0YW5jZU1hcC5zaXplID09PSAwKSB7XG4gICAgICBlbGVtZW50TWFwLmRlbGV0ZShlbGVtZW50KVxuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvaW5kZXguanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBNQVhfVUlEID0gMV8wMDBfMDAwXG5jb25zdCBNSUxMSVNFQ09ORFNfTVVMVElQTElFUiA9IDEwMDBcbmNvbnN0IFRSQU5TSVRJT05fRU5EID0gJ3RyYW5zaXRpb25lbmQnXG5cbi8qKlxuICogUHJvcGVybHkgZXNjYXBlIElEcyBzZWxlY3RvcnMgdG8gaGFuZGxlIHdlaXJkIElEc1xuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5jb25zdCBwYXJzZVNlbGVjdG9yID0gc2VsZWN0b3IgPT4ge1xuICBpZiAoc2VsZWN0b3IgJiYgd2luZG93LkNTUyAmJiB3aW5kb3cuQ1NTLmVzY2FwZSkge1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgbmVlZHMgZXNjYXBpbmcgdG8gaGFuZGxlIElEcyAoaHRtbDUrKSBjb250YWluaW5nIGZvciBpbnN0YW5jZSAvXG4gICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5yZXBsYWNlKC8jKFteXFxzXCIjJ10rKS9nLCAobWF0Y2gsIGlkKSA9PiBgIyR7Q1NTLmVzY2FwZShpZCl9YClcbiAgfVxuXG4gIHJldHVybiBzZWxlY3RvclxufVxuXG4vLyBTaG91dC1vdXQgQW5ndXMgQ3JvbGwgKGh0dHBzOi8vZ29vLmdsL3B4d1FHcClcbmNvbnN0IHRvVHlwZSA9IG9iamVjdCA9PiB7XG4gIGlmIChvYmplY3QgPT09IG51bGwgfHwgb2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYCR7b2JqZWN0fWBcbiAgfVxuXG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KS5tYXRjaCgvXFxzKFthLXpdKykvaSlbMV0udG9Mb3dlckNhc2UoKVxufVxuXG4vKipcbiAqIFB1YmxpYyBVdGlsIEFQSVxuICovXG5cbmNvbnN0IGdldFVJRCA9IHByZWZpeCA9PiB7XG4gIGRvIHtcbiAgICBwcmVmaXggKz0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTUFYX1VJRClcbiAgfSB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4KSlcblxuICByZXR1cm4gcHJlZml4XG59XG5cbmNvbnN0IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50ID0gZWxlbWVudCA9PiB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICAvLyBHZXQgdHJhbnNpdGlvbi1kdXJhdGlvbiBvZiB0aGUgZWxlbWVudFxuICBsZXQgeyB0cmFuc2l0aW9uRHVyYXRpb24sIHRyYW5zaXRpb25EZWxheSB9ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClcblxuICBjb25zdCBmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiA9IE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbilcbiAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRGVsYXkgPSBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpXG5cbiAgLy8gUmV0dXJuIDAgaWYgZWxlbWVudCBvciB0cmFuc2l0aW9uIGR1cmF0aW9uIGlzIG5vdCBmb3VuZFxuICBpZiAoIWZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uICYmICFmbG9hdFRyYW5zaXRpb25EZWxheSkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICAvLyBJZiBtdWx0aXBsZSBkdXJhdGlvbnMgYXJlIGRlZmluZWQsIHRha2UgdGhlIGZpcnN0XG4gIHRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbi5zcGxpdCgnLCcpWzBdXG4gIHRyYW5zaXRpb25EZWxheSA9IHRyYW5zaXRpb25EZWxheS5zcGxpdCgnLCcpWzBdXG5cbiAgcmV0dXJuIChOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pICsgTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KSkgKiBNSUxMSVNFQ09ORFNfTVVMVElQTElFUlxufVxuXG5jb25zdCB0cmlnZ2VyVHJhbnNpdGlvbkVuZCA9IGVsZW1lbnQgPT4ge1xuICBlbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFRSQU5TSVRJT05fRU5EKSlcbn1cblxuY29uc3QgaXNFbGVtZW50ID0gb2JqZWN0ID0+IHtcbiAgaWYgKCFvYmplY3QgfHwgdHlwZW9mIG9iamVjdCAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqZWN0LmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBvYmplY3QgPSBvYmplY3RbMF1cbiAgfVxuXG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0Lm5vZGVUeXBlICE9PSAndW5kZWZpbmVkJ1xufVxuXG5jb25zdCBnZXRFbGVtZW50ID0gb2JqZWN0ID0+IHtcbiAgLy8gaXQncyBhIGpRdWVyeSBvYmplY3Qgb3IgYSBub2RlIGVsZW1lbnRcbiAgaWYgKGlzRWxlbWVudChvYmplY3QpKSB7XG4gICAgcmV0dXJuIG9iamVjdC5qcXVlcnkgPyBvYmplY3RbMF0gOiBvYmplY3RcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnc3RyaW5nJyAmJiBvYmplY3QubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcnNlU2VsZWN0b3Iob2JqZWN0KSlcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmNvbnN0IGlzVmlzaWJsZSA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWlzRWxlbWVudChlbGVtZW50KSB8fCBlbGVtZW50LmdldENsaWVudFJlY3RzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50SXNWaXNpYmxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCd2aXNpYmlsaXR5JykgPT09ICd2aXNpYmxlJ1xuICAvLyBIYW5kbGUgYGRldGFpbHNgIGVsZW1lbnQgYXMgaXRzIGNvbnRlbnQgbWF5IGZhbHNpZSBhcHBlYXIgdmlzaWJsZSB3aGVuIGl0IGlzIGNsb3NlZFxuICBjb25zdCBjbG9zZWREZXRhaWxzID0gZWxlbWVudC5jbG9zZXN0KCdkZXRhaWxzOm5vdChbb3Blbl0pJylcblxuICBpZiAoIWNsb3NlZERldGFpbHMpIHtcbiAgICByZXR1cm4gZWxlbWVudElzVmlzaWJsZVxuICB9XG5cbiAgaWYgKGNsb3NlZERldGFpbHMgIT09IGVsZW1lbnQpIHtcbiAgICBjb25zdCBzdW1tYXJ5ID0gZWxlbWVudC5jbG9zZXN0KCdzdW1tYXJ5JylcbiAgICBpZiAoc3VtbWFyeSAmJiBzdW1tYXJ5LnBhcmVudE5vZGUgIT09IGNsb3NlZERldGFpbHMpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmIChzdW1tYXJ5ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudElzVmlzaWJsZVxufVxuXG5jb25zdCBpc0Rpc2FibGVkID0gZWxlbWVudCA9PiB7XG4gIGlmICghZWxlbWVudCB8fCBlbGVtZW50Lm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50LmRpc2FibGVkICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBlbGVtZW50LmRpc2FibGVkXG4gIH1cblxuICByZXR1cm4gZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgIT09ICdmYWxzZSdcbn1cblxuY29uc3QgZmluZFNoYWRvd1Jvb3QgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0YWNoU2hhZG93KSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIENhbiBmaW5kIHRoZSBzaGFkb3cgcm9vdCBvdGhlcndpc2UgaXQnbGwgcmV0dXJuIHRoZSBkb2N1bWVudFxuICBpZiAodHlwZW9mIGVsZW1lbnQuZ2V0Um9vdE5vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCByb290ID0gZWxlbWVudC5nZXRSb290Tm9kZSgpXG4gICAgcmV0dXJuIHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gcm9vdCA6IG51bGxcbiAgfVxuXG4gIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xuICAgIHJldHVybiBlbGVtZW50XG4gIH1cblxuICAvLyB3aGVuIHdlIGRvbid0IGZpbmQgYSBzaGFkb3cgcm9vdFxuICBpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gZmluZFNoYWRvd1Jvb3QoZWxlbWVudC5wYXJlbnROb2RlKVxufVxuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuLyoqXG4gKiBUcmljayB0byByZXN0YXJ0IGFuIGVsZW1lbnQncyBhbmltYXRpb25cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJuIHZvaWRcbiAqXG4gKiBAc2VlIGh0dHBzOi8vd3d3LmNoYXJpc3RoZW8uaW8vYmxvZy8yMDIxLzAyL3Jlc3RhcnQtYS1jc3MtYW5pbWF0aW9uLXdpdGgtamF2YXNjcmlwdC8jcmVzdGFydGluZy1hLWNzcy1hbmltYXRpb25cbiAqL1xuY29uc3QgcmVmbG93ID0gZWxlbWVudCA9PiB7XG4gIGVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG59XG5cbmNvbnN0IGdldGpRdWVyeSA9ICgpID0+IHtcbiAgaWYgKHdpbmRvdy5qUXVlcnkgJiYgIWRvY3VtZW50LmJvZHkuaGFzQXR0cmlidXRlKCdkYXRhLWJzLW5vLWpxdWVyeScpKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5qUXVlcnlcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmNvbnN0IERPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MgPSBbXVxuXG5jb25zdCBvbkRPTUNvbnRlbnRMb2FkZWQgPSBjYWxsYmFjayA9PiB7XG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAvLyBhZGQgbGlzdGVuZXIgb24gdGhlIGZpcnN0IGNhbGwgd2hlbiB0aGUgZG9jdW1lbnQgaXMgaW4gbG9hZGluZyBzdGF0ZVxuICAgIGlmICghRE9NQ29udGVudExvYWRlZENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgRE9NQ29udGVudExvYWRlZENhbGxiYWNrcykge1xuICAgICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spXG4gIH0gZWxzZSB7XG4gICAgY2FsbGJhY2soKVxuICB9XG59XG5cbmNvbnN0IGlzUlRMID0gKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpciA9PT0gJ3J0bCdcblxuY29uc3QgZGVmaW5lSlF1ZXJ5UGx1Z2luID0gcGx1Z2luID0+IHtcbiAgb25ET01Db250ZW50TG9hZGVkKCgpID0+IHtcbiAgICBjb25zdCAkID0gZ2V0alF1ZXJ5KClcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoJCkge1xuICAgICAgY29uc3QgbmFtZSA9IHBsdWdpbi5OQU1FXG4gICAgICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW25hbWVdXG4gICAgICAkLmZuW25hbWVdID0gcGx1Z2luLmpRdWVyeUludGVyZmFjZVxuICAgICAgJC5mbltuYW1lXS5Db25zdHJ1Y3RvciA9IHBsdWdpblxuICAgICAgJC5mbltuYW1lXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAgICAgICAkLmZuW25hbWVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgICAgIHJldHVybiBwbHVnaW4ualF1ZXJ5SW50ZXJmYWNlXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBleGVjdXRlID0gKHBvc3NpYmxlQ2FsbGJhY2ssIGFyZ3MgPSBbXSwgZGVmYXVsdFZhbHVlID0gcG9zc2libGVDYWxsYmFjaykgPT4ge1xuICByZXR1cm4gdHlwZW9mIHBvc3NpYmxlQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicgPyBwb3NzaWJsZUNhbGxiYWNrKC4uLmFyZ3MpIDogZGVmYXVsdFZhbHVlXG59XG5cbmNvbnN0IGV4ZWN1dGVBZnRlclRyYW5zaXRpb24gPSAoY2FsbGJhY2ssIHRyYW5zaXRpb25FbGVtZW50LCB3YWl0Rm9yVHJhbnNpdGlvbiA9IHRydWUpID0+IHtcbiAgaWYgKCF3YWl0Rm9yVHJhbnNpdGlvbikge1xuICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBkdXJhdGlvblBhZGRpbmcgPSA1XG4gIGNvbnN0IGVtdWxhdGVkRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0cmFuc2l0aW9uRWxlbWVudCkgKyBkdXJhdGlvblBhZGRpbmdcblxuICBsZXQgY2FsbGVkID0gZmFsc2VcblxuICBjb25zdCBoYW5kbGVyID0gKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBpZiAodGFyZ2V0ICE9PSB0cmFuc2l0aW9uRWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2FsbGVkID0gdHJ1ZVxuICAgIHRyYW5zaXRpb25FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoVFJBTlNJVElPTl9FTkQsIGhhbmRsZXIpXG4gICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgfVxuXG4gIHRyYW5zaXRpb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoVFJBTlNJVElPTl9FTkQsIGhhbmRsZXIpXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRWxlbWVudClcbiAgICB9XG4gIH0sIGVtdWxhdGVkRHVyYXRpb24pXG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBwcmV2aW91cy9uZXh0IGVsZW1lbnQgb2YgYSBsaXN0LlxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGxpc3QgICAgVGhlIGxpc3Qgb2YgZWxlbWVudHNcbiAqIEBwYXJhbSBhY3RpdmVFbGVtZW50ICAgVGhlIGFjdGl2ZSBlbGVtZW50XG4gKiBAcGFyYW0gc2hvdWxkR2V0TmV4dCAgIENob29zZSB0byBnZXQgbmV4dCBvciBwcmV2aW91cyBlbGVtZW50XG4gKiBAcGFyYW0gaXNDeWNsZUFsbG93ZWRcbiAqIEByZXR1cm4ge0VsZW1lbnR8ZWxlbX0gVGhlIHByb3BlciBlbGVtZW50XG4gKi9cbmNvbnN0IGdldE5leHRBY3RpdmVFbGVtZW50ID0gKGxpc3QsIGFjdGl2ZUVsZW1lbnQsIHNob3VsZEdldE5leHQsIGlzQ3ljbGVBbGxvd2VkKSA9PiB7XG4gIGNvbnN0IGxpc3RMZW5ndGggPSBsaXN0Lmxlbmd0aFxuICBsZXQgaW5kZXggPSBsaXN0LmluZGV4T2YoYWN0aXZlRWxlbWVudClcblxuICAvLyBpZiB0aGUgZWxlbWVudCBkb2VzIG5vdCBleGlzdCBpbiB0aGUgbGlzdCByZXR1cm4gYW4gZWxlbWVudFxuICAvLyBkZXBlbmRpbmcgb24gdGhlIGRpcmVjdGlvbiBhbmQgaWYgY3ljbGUgaXMgYWxsb3dlZFxuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuICFzaG91bGRHZXROZXh0ICYmIGlzQ3ljbGVBbGxvd2VkID8gbGlzdFtsaXN0TGVuZ3RoIC0gMV0gOiBsaXN0WzBdXG4gIH1cblxuICBpbmRleCArPSBzaG91bGRHZXROZXh0ID8gMSA6IC0xXG5cbiAgaWYgKGlzQ3ljbGVBbGxvd2VkKSB7XG4gICAgaW5kZXggPSAoaW5kZXggKyBsaXN0TGVuZ3RoKSAlIGxpc3RMZW5ndGhcbiAgfVxuXG4gIHJldHVybiBsaXN0W01hdGgubWF4KDAsIE1hdGgubWluKGluZGV4LCBsaXN0TGVuZ3RoIC0gMSkpXVxufVxuXG5leHBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGV4ZWN1dGUsXG4gIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24sXG4gIGZpbmRTaGFkb3dSb290LFxuICBnZXRFbGVtZW50LFxuICBnZXRqUXVlcnksXG4gIGdldE5leHRBY3RpdmVFbGVtZW50LFxuICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCxcbiAgZ2V0VUlELFxuICBpc0Rpc2FibGVkLFxuICBpc0VsZW1lbnQsXG4gIGlzUlRMLFxuICBpc1Zpc2libGUsXG4gIG5vb3AsXG4gIG9uRE9NQ29udGVudExvYWRlZCxcbiAgcGFyc2VTZWxlY3RvcixcbiAgcmVmbG93LFxuICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCxcbiAgdG9UeXBlXG59XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgZG9tL2V2ZW50LWhhbmRsZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBnZXRqUXVlcnkgfSBmcm9tICcuLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IG5hbWVzcGFjZVJlZ2V4ID0gL1teLl0qKD89XFwuLiopXFwufC4qL1xuY29uc3Qgc3RyaXBOYW1lUmVnZXggPSAvXFwuLiovXG5jb25zdCBzdHJpcFVpZFJlZ2V4ID0gLzo6XFxkKyQvXG5jb25zdCBldmVudFJlZ2lzdHJ5ID0ge30gLy8gRXZlbnRzIHN0b3JhZ2VcbmxldCB1aWRFdmVudCA9IDFcbmNvbnN0IGN1c3RvbUV2ZW50cyA9IHtcbiAgbW91c2VlbnRlcjogJ21vdXNlb3ZlcicsXG4gIG1vdXNlbGVhdmU6ICdtb3VzZW91dCdcbn1cblxuY29uc3QgbmF0aXZlRXZlbnRzID0gbmV3IFNldChbXG4gICdjbGljaycsXG4gICdkYmxjbGljaycsXG4gICdtb3VzZXVwJyxcbiAgJ21vdXNlZG93bicsXG4gICdjb250ZXh0bWVudScsXG4gICdtb3VzZXdoZWVsJyxcbiAgJ0RPTU1vdXNlU2Nyb2xsJyxcbiAgJ21vdXNlb3ZlcicsXG4gICdtb3VzZW91dCcsXG4gICdtb3VzZW1vdmUnLFxuICAnc2VsZWN0c3RhcnQnLFxuICAnc2VsZWN0ZW5kJyxcbiAgJ2tleWRvd24nLFxuICAna2V5cHJlc3MnLFxuICAna2V5dXAnLFxuICAnb3JpZW50YXRpb25jaGFuZ2UnLFxuICAndG91Y2hzdGFydCcsXG4gICd0b3VjaG1vdmUnLFxuICAndG91Y2hlbmQnLFxuICAndG91Y2hjYW5jZWwnLFxuICAncG9pbnRlcmRvd24nLFxuICAncG9pbnRlcm1vdmUnLFxuICAncG9pbnRlcnVwJyxcbiAgJ3BvaW50ZXJsZWF2ZScsXG4gICdwb2ludGVyY2FuY2VsJyxcbiAgJ2dlc3R1cmVzdGFydCcsXG4gICdnZXN0dXJlY2hhbmdlJyxcbiAgJ2dlc3R1cmVlbmQnLFxuICAnZm9jdXMnLFxuICAnYmx1cicsXG4gICdjaGFuZ2UnLFxuICAncmVzZXQnLFxuICAnc2VsZWN0JyxcbiAgJ3N1Ym1pdCcsXG4gICdmb2N1c2luJyxcbiAgJ2ZvY3Vzb3V0JyxcbiAgJ2xvYWQnLFxuICAndW5sb2FkJyxcbiAgJ2JlZm9yZXVubG9hZCcsXG4gICdyZXNpemUnLFxuICAnbW92ZScsXG4gICdET01Db250ZW50TG9hZGVkJyxcbiAgJ3JlYWR5c3RhdGVjaGFuZ2UnLFxuICAnZXJyb3InLFxuICAnYWJvcnQnLFxuICAnc2Nyb2xsJ1xuXSlcblxuLyoqXG4gKiBQcml2YXRlIG1ldGhvZHNcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRXZlbnRVaWQoZWxlbWVudCwgdWlkKSB7XG4gIHJldHVybiAodWlkICYmIGAke3VpZH06OiR7dWlkRXZlbnQrK31gKSB8fCBlbGVtZW50LnVpZEV2ZW50IHx8IHVpZEV2ZW50Kytcbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudEV2ZW50cyhlbGVtZW50KSB7XG4gIGNvbnN0IHVpZCA9IG1ha2VFdmVudFVpZChlbGVtZW50KVxuXG4gIGVsZW1lbnQudWlkRXZlbnQgPSB1aWRcbiAgZXZlbnRSZWdpc3RyeVt1aWRdID0gZXZlbnRSZWdpc3RyeVt1aWRdIHx8IHt9XG5cbiAgcmV0dXJuIGV2ZW50UmVnaXN0cnlbdWlkXVxufVxuXG5mdW5jdGlvbiBib290c3RyYXBIYW5kbGVyKGVsZW1lbnQsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgaHlkcmF0ZU9iaihldmVudCwgeyBkZWxlZ2F0ZVRhcmdldDogZWxlbWVudCB9KVxuXG4gICAgaWYgKGhhbmRsZXIub25lT2ZmKSB7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsIGV2ZW50LnR5cGUsIGZuKVxuICAgIH1cblxuICAgIHJldHVybiBmbi5hcHBseShlbGVtZW50LCBbZXZlbnRdKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyKGVsZW1lbnQsIHNlbGVjdG9yLCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnRzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuXG4gICAgZm9yIChsZXQgeyB0YXJnZXQgfSA9IGV2ZW50OyB0YXJnZXQgJiYgdGFyZ2V0ICE9PSB0aGlzOyB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZSkge1xuICAgICAgZm9yIChjb25zdCBkb21FbGVtZW50IG9mIGRvbUVsZW1lbnRzKSB7XG4gICAgICAgIGlmIChkb21FbGVtZW50ICE9PSB0YXJnZXQpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaHlkcmF0ZU9iaihldmVudCwgeyBkZWxlZ2F0ZVRhcmdldDogdGFyZ2V0IH0pXG5cbiAgICAgICAgaWYgKGhhbmRsZXIub25lT2ZmKSB7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCBldmVudC50eXBlLCBzZWxlY3RvciwgZm4pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm4uYXBwbHkodGFyZ2V0LCBbZXZlbnRdKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kSGFuZGxlcihldmVudHMsIGNhbGxhYmxlLCBkZWxlZ2F0aW9uU2VsZWN0b3IgPSBudWxsKSB7XG4gIHJldHVybiBPYmplY3QudmFsdWVzKGV2ZW50cylcbiAgICAuZmluZChldmVudCA9PiBldmVudC5jYWxsYWJsZSA9PT0gY2FsbGFibGUgJiYgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yID09PSBkZWxlZ2F0aW9uU2VsZWN0b3IpXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBhcmFtZXRlcnMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICBjb25zdCBpc0RlbGVnYXRlZCA9IHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJ1xuICAvLyBUT0RPOiB0b29sdGlwIHBhc3NlcyBgZmFsc2VgIGluc3RlYWQgb2Ygc2VsZWN0b3IsIHNvIHdlIG5lZWQgdG8gY2hlY2tcbiAgY29uc3QgY2FsbGFibGUgPSBpc0RlbGVnYXRlZCA/IGRlbGVnYXRpb25GdW5jdGlvbiA6IChoYW5kbGVyIHx8IGRlbGVnYXRpb25GdW5jdGlvbilcbiAgbGV0IHR5cGVFdmVudCA9IGdldFR5cGVFdmVudChvcmlnaW5hbFR5cGVFdmVudClcblxuICBpZiAoIW5hdGl2ZUV2ZW50cy5oYXModHlwZUV2ZW50KSkge1xuICAgIHR5cGVFdmVudCA9IG9yaWdpbmFsVHlwZUV2ZW50XG4gIH1cblxuICByZXR1cm4gW2lzRGVsZWdhdGVkLCBjYWxsYWJsZSwgdHlwZUV2ZW50XVxufVxuXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIG9uZU9mZikge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsVHlwZUV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgbGV0IFtpc0RlbGVnYXRlZCwgY2FsbGFibGUsIHR5cGVFdmVudF0gPSBub3JtYWxpemVQYXJhbWV0ZXJzKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pXG5cbiAgLy8gaW4gY2FzZSBvZiBtb3VzZWVudGVyIG9yIG1vdXNlbGVhdmUgd3JhcCB0aGUgaGFuZGxlciB3aXRoaW4gYSBmdW5jdGlvbiB0aGF0IGNoZWNrcyBmb3IgaXRzIERPTSBwb3NpdGlvblxuICAvLyB0aGlzIHByZXZlbnRzIHRoZSBoYW5kbGVyIGZyb20gYmVpbmcgZGlzcGF0Y2hlZCB0aGUgc2FtZSB3YXkgYXMgbW91c2VvdmVyIG9yIG1vdXNlb3V0IGRvZXNcbiAgaWYgKG9yaWdpbmFsVHlwZUV2ZW50IGluIGN1c3RvbUV2ZW50cykge1xuICAgIGNvbnN0IHdyYXBGdW5jdGlvbiA9IGZuID0+IHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKCFldmVudC5yZWxhdGVkVGFyZ2V0IHx8IChldmVudC5yZWxhdGVkVGFyZ2V0ICE9PSBldmVudC5kZWxlZ2F0ZVRhcmdldCAmJiAhZXZlbnQuZGVsZWdhdGVUYXJnZXQuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCkpKSB7XG4gICAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYWxsYWJsZSA9IHdyYXBGdW5jdGlvbihjYWxsYWJsZSlcbiAgfVxuXG4gIGNvbnN0IGV2ZW50cyA9IGdldEVsZW1lbnRFdmVudHMoZWxlbWVudClcbiAgY29uc3QgaGFuZGxlcnMgPSBldmVudHNbdHlwZUV2ZW50XSB8fCAoZXZlbnRzW3R5cGVFdmVudF0gPSB7fSlcbiAgY29uc3QgcHJldmlvdXNGdW5jdGlvbiA9IGZpbmRIYW5kbGVyKGhhbmRsZXJzLCBjYWxsYWJsZSwgaXNEZWxlZ2F0ZWQgPyBoYW5kbGVyIDogbnVsbClcblxuICBpZiAocHJldmlvdXNGdW5jdGlvbikge1xuICAgIHByZXZpb3VzRnVuY3Rpb24ub25lT2ZmID0gcHJldmlvdXNGdW5jdGlvbi5vbmVPZmYgJiYgb25lT2ZmXG5cbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHVpZCA9IG1ha2VFdmVudFVpZChjYWxsYWJsZSwgb3JpZ2luYWxUeXBlRXZlbnQucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpKVxuICBjb25zdCBmbiA9IGlzRGVsZWdhdGVkID9cbiAgICBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBjYWxsYWJsZSkgOlxuICAgIGJvb3RzdHJhcEhhbmRsZXIoZWxlbWVudCwgY2FsbGFibGUpXG5cbiAgZm4uZGVsZWdhdGlvblNlbGVjdG9yID0gaXNEZWxlZ2F0ZWQgPyBoYW5kbGVyIDogbnVsbFxuICBmbi5jYWxsYWJsZSA9IGNhbGxhYmxlXG4gIGZuLm9uZU9mZiA9IG9uZU9mZlxuICBmbi51aWRFdmVudCA9IHVpZFxuICBoYW5kbGVyc1t1aWRdID0gZm5cblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgaXNEZWxlZ2F0ZWQpXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3Rvcikge1xuICBjb25zdCBmbiA9IGZpbmRIYW5kbGVyKGV2ZW50c1t0eXBlRXZlbnRdLCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IpXG5cbiAgaWYgKCFmbikge1xuICAgIHJldHVyblxuICB9XG5cbiAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIEJvb2xlYW4oZGVsZWdhdGlvblNlbGVjdG9yKSlcbiAgZGVsZXRlIGV2ZW50c1t0eXBlRXZlbnRdW2ZuLnVpZEV2ZW50XVxufVxuXG5mdW5jdGlvbiByZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIG5hbWVzcGFjZSkge1xuICBjb25zdCBzdG9yZUVsZW1lbnRFdmVudCA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IHt9XG5cbiAgZm9yIChjb25zdCBbaGFuZGxlcktleSwgZXZlbnRdIG9mIE9iamVjdC5lbnRyaWVzKHN0b3JlRWxlbWVudEV2ZW50KSkge1xuICAgIGlmIChoYW5kbGVyS2V5LmluY2x1ZGVzKG5hbWVzcGFjZSkpIHtcbiAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50LmNhbGxhYmxlLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFR5cGVFdmVudChldmVudCkge1xuICAvLyBhbGxvdyB0byBnZXQgdGhlIG5hdGl2ZSBldmVudHMgZnJvbSBuYW1lc3BhY2VkIGV2ZW50cyAoJ2NsaWNrLmJzLmJ1dHRvbicgLS0+ICdjbGljaycpXG4gIGV2ZW50ID0gZXZlbnQucmVwbGFjZShzdHJpcE5hbWVSZWdleCwgJycpXG4gIHJldHVybiBjdXN0b21FdmVudHNbZXZlbnRdIHx8IGV2ZW50XG59XG5cbmNvbnN0IEV2ZW50SGFuZGxlciA9IHtcbiAgb24oZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbiwgZmFsc2UpXG4gIH0sXG5cbiAgb25lKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIHRydWUpXG4gIH0sXG5cbiAgb2ZmKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICBpZiAodHlwZW9mIG9yaWdpbmFsVHlwZUV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgW2lzRGVsZWdhdGVkLCBjYWxsYWJsZSwgdHlwZUV2ZW50XSA9IG5vcm1hbGl6ZVBhcmFtZXRlcnMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbilcbiAgICBjb25zdCBpbk5hbWVzcGFjZSA9IHR5cGVFdmVudCAhPT0gb3JpZ2luYWxUeXBlRXZlbnRcbiAgICBjb25zdCBldmVudHMgPSBnZXRFbGVtZW50RXZlbnRzKGVsZW1lbnQpXG4gICAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fVxuICAgIGNvbnN0IGlzTmFtZXNwYWNlID0gb3JpZ2luYWxUeXBlRXZlbnQuc3RhcnRzV2l0aCgnLicpXG5cbiAgICBpZiAodHlwZW9mIGNhbGxhYmxlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gU2ltcGxlc3QgY2FzZTogaGFuZGxlciBpcyBwYXNzZWQsIHJlbW92ZSB0aGF0IGxpc3RlbmVyIE9OTFkuXG4gICAgICBpZiAoIU9iamVjdC5rZXlzKHN0b3JlRWxlbWVudEV2ZW50KS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGNhbGxhYmxlLCBpc0RlbGVnYXRlZCA/IGhhbmRsZXIgOiBudWxsKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzTmFtZXNwYWNlKSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnRFdmVudCBvZiBPYmplY3Qua2V5cyhldmVudHMpKSB7XG4gICAgICAgIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIGVsZW1lbnRFdmVudCwgb3JpZ2luYWxUeXBlRXZlbnQuc2xpY2UoMSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBba2V5SGFuZGxlcnMsIGV2ZW50XSBvZiBPYmplY3QuZW50cmllcyhzdG9yZUVsZW1lbnRFdmVudCkpIHtcbiAgICAgIGNvbnN0IGhhbmRsZXJLZXkgPSBrZXlIYW5kbGVycy5yZXBsYWNlKHN0cmlwVWlkUmVnZXgsICcnKVxuXG4gICAgICBpZiAoIWluTmFtZXNwYWNlIHx8IG9yaWdpbmFsVHlwZUV2ZW50LmluY2x1ZGVzKGhhbmRsZXJLZXkpKSB7XG4gICAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50LmNhbGxhYmxlLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHRyaWdnZXIoZWxlbWVudCwgZXZlbnQsIGFyZ3MpIHtcbiAgICBpZiAodHlwZW9mIGV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCAkID0gZ2V0alF1ZXJ5KClcbiAgICBjb25zdCB0eXBlRXZlbnQgPSBnZXRUeXBlRXZlbnQoZXZlbnQpXG4gICAgY29uc3QgaW5OYW1lc3BhY2UgPSBldmVudCAhPT0gdHlwZUV2ZW50XG5cbiAgICBsZXQgalF1ZXJ5RXZlbnQgPSBudWxsXG4gICAgbGV0IGJ1YmJsZXMgPSB0cnVlXG4gICAgbGV0IG5hdGl2ZURpc3BhdGNoID0gdHJ1ZVxuICAgIGxldCBkZWZhdWx0UHJldmVudGVkID0gZmFsc2VcblxuICAgIGlmIChpbk5hbWVzcGFjZSAmJiAkKSB7XG4gICAgICBqUXVlcnlFdmVudCA9ICQuRXZlbnQoZXZlbnQsIGFyZ3MpXG5cbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcihqUXVlcnlFdmVudClcbiAgICAgIGJ1YmJsZXMgPSAhalF1ZXJ5RXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKVxuICAgICAgbmF0aXZlRGlzcGF0Y2ggPSAhalF1ZXJ5RXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKVxuICAgICAgZGVmYXVsdFByZXZlbnRlZCA9IGpRdWVyeUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpXG4gICAgfVxuXG4gICAgY29uc3QgZXZ0ID0gaHlkcmF0ZU9iaihuZXcgRXZlbnQoZXZlbnQsIHsgYnViYmxlcywgY2FuY2VsYWJsZTogdHJ1ZSB9KSwgYXJncylcblxuICAgIGlmIChkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmIChuYXRpdmVEaXNwYXRjaCkge1xuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICB9XG5cbiAgICBpZiAoZXZ0LmRlZmF1bHRQcmV2ZW50ZWQgJiYgalF1ZXJ5RXZlbnQpIHtcbiAgICAgIGpRdWVyeUV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICByZXR1cm4gZXZ0XG4gIH1cbn1cblxuZnVuY3Rpb24gaHlkcmF0ZU9iaihvYmosIG1ldGEgPSB7fSkge1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhtZXRhKSkge1xuICAgIHRyeSB7XG4gICAgICBvYmpba2V5XSA9IHZhbHVlXG4gICAgfSBjYXRjaCB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9ialxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEhhbmRsZXJcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBkb20vbWFuaXB1bGF0b3IuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5mdW5jdGlvbiBub3JtYWxpemVEYXRhKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gJ3RydWUnKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gJ2ZhbHNlJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKHZhbHVlID09PSBOdW1iZXIodmFsdWUpLnRvU3RyaW5nKCkpIHtcbiAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICB9XG5cbiAgaWYgKHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gJ251bGwnKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZURhdGFLZXkoa2V5KSB7XG4gIHJldHVybiBrZXkucmVwbGFjZSgvW0EtWl0vZywgY2hyID0+IGAtJHtjaHIudG9Mb3dlckNhc2UoKX1gKVxufVxuXG5jb25zdCBNYW5pcHVsYXRvciA9IHtcbiAgc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXksIHZhbHVlKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YCwgdmFsdWUpXG4gIH0sXG5cbiAgcmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXkpIHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gKVxuICB9LFxuXG4gIGdldERhdGFBdHRyaWJ1dGVzKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH1cblxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7fVxuICAgIGNvbnN0IGJzS2V5cyA9IE9iamVjdC5rZXlzKGVsZW1lbnQuZGF0YXNldCkuZmlsdGVyKGtleSA9PiBrZXkuc3RhcnRzV2l0aCgnYnMnKSAmJiAha2V5LnN0YXJ0c1dpdGgoJ2JzQ29uZmlnJykpXG5cbiAgICBmb3IgKGNvbnN0IGtleSBvZiBic0tleXMpIHtcbiAgICAgIGxldCBwdXJlS2V5ID0ga2V5LnJlcGxhY2UoL15icy8sICcnKVxuICAgICAgcHVyZUtleSA9IHB1cmVLZXkuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBwdXJlS2V5LnNsaWNlKDEsIHB1cmVLZXkubGVuZ3RoKVxuICAgICAgYXR0cmlidXRlc1twdXJlS2V5XSA9IG5vcm1hbGl6ZURhdGEoZWxlbWVudC5kYXRhc2V0W2tleV0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZXNcbiAgfSxcblxuICBnZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSkge1xuICAgIHJldHVybiBub3JtYWxpemVEYXRhKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWApKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmlwdWxhdG9yXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9jb25maWcuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi4vZG9tL21hbmlwdWxhdG9yLmpzJ1xuaW1wb3J0IHsgaXNFbGVtZW50LCB0b1R5cGUgfSBmcm9tICcuL2luZGV4LmpzJ1xuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBDb25maWcge1xuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgaGF2ZSB0byBpbXBsZW1lbnQgdGhlIHN0YXRpYyBtZXRob2QgXCJOQU1FXCIsIGZvciBlYWNoIGNvbXBvbmVudCEnKVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB0aGlzLl9tZXJnZUNvbmZpZ09iaihjb25maWcpXG4gICAgY29uZmlnID0gdGhpcy5fY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpXG4gICAgdGhpcy5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZylcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfbWVyZ2VDb25maWdPYmooY29uZmlnLCBlbGVtZW50KSB7XG4gICAgY29uc3QganNvbkNvbmZpZyA9IGlzRWxlbWVudChlbGVtZW50KSA/IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgJ2NvbmZpZycpIDoge30gLy8gdHJ5IHRvIHBhcnNlXG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgLi4uKHR5cGVvZiBqc29uQ29uZmlnID09PSAnb2JqZWN0JyA/IGpzb25Db25maWcgOiB7fSksXG4gICAgICAuLi4oaXNFbGVtZW50KGVsZW1lbnQpID8gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudCkgOiB7fSksXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiB7fSlcbiAgICB9XG4gIH1cblxuICBfdHlwZUNoZWNrQ29uZmlnKGNvbmZpZywgY29uZmlnVHlwZXMgPSB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKSB7XG4gICAgZm9yIChjb25zdCBbcHJvcGVydHksIGV4cGVjdGVkVHlwZXNdIG9mIE9iamVjdC5lbnRyaWVzKGNvbmZpZ1R5cGVzKSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBjb25maWdbcHJvcGVydHldXG4gICAgICBjb25zdCB2YWx1ZVR5cGUgPSBpc0VsZW1lbnQodmFsdWUpID8gJ2VsZW1lbnQnIDogdG9UeXBlKHZhbHVlKVxuXG4gICAgICBpZiAoIW5ldyBSZWdFeHAoZXhwZWN0ZWRUeXBlcykudGVzdCh2YWx1ZVR5cGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgYCR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gXCIke3Byb3BlcnR5fVwiIHByb3ZpZGVkIHR5cGUgXCIke3ZhbHVlVHlwZX1cIiBidXQgZXhwZWN0ZWQgdHlwZSBcIiR7ZXhwZWN0ZWRUeXBlc31cIi5gXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgYmFzZS1jb21wb25lbnQuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhLmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL3V0aWwvY29uZmlnLmpzJ1xuaW1wb3J0IHsgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiwgZ2V0RWxlbWVudCB9IGZyb20gJy4vdXRpbC9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBWRVJTSU9OID0gJzUuMy4yJ1xuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgZWxlbWVudCA9IGdldEVsZW1lbnQoZWxlbWVudClcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcblxuICAgIERhdGEuc2V0KHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVksIHRoaXMpXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgZGlzcG9zZSgpIHtcbiAgICBEYXRhLnJlbW92ZSh0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZKVxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FVkVOVF9LRVkpXG5cbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5TmFtZSBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuICAgICAgdGhpc1twcm9wZXJ0eU5hbWVdID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIF9xdWV1ZUNhbGxiYWNrKGNhbGxiYWNrLCBlbGVtZW50LCBpc0FuaW1hdGVkID0gdHJ1ZSkge1xuICAgIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24oY2FsbGJhY2ssIGVsZW1lbnQsIGlzQW5pbWF0ZWQpXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHRoaXMuX21lcmdlQ29uZmlnT2JqKGNvbmZpZywgdGhpcy5fZWxlbWVudClcbiAgICBjb25maWcgPSB0aGlzLl9jb25maWdBZnRlck1lcmdlKGNvbmZpZylcbiAgICB0aGlzLl90eXBlQ2hlY2tDb25maWcoY29uZmlnKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgZ2V0SW5zdGFuY2UoZWxlbWVudCkge1xuICAgIHJldHVybiBEYXRhLmdldChnZXRFbGVtZW50KGVsZW1lbnQpLCB0aGlzLkRBVEFfS0VZKVxuICB9XG5cbiAgc3RhdGljIGdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgY29uZmlnID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZShlbGVtZW50KSB8fCBuZXcgdGhpcyhlbGVtZW50LCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGwpXG4gIH1cblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIGBicy4ke3RoaXMuTkFNRX1gXG4gIH1cblxuICBzdGF0aWMgZ2V0IEVWRU5UX0tFWSgpIHtcbiAgICByZXR1cm4gYC4ke3RoaXMuREFUQV9LRVl9YFxuICB9XG5cbiAgc3RhdGljIGV2ZW50TmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIGAke25hbWV9JHt0aGlzLkVWRU5UX0tFWX1gXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUNvbXBvbmVudFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGRvbS9zZWxlY3Rvci1lbmdpbmUuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBpc0Rpc2FibGVkLCBpc1Zpc2libGUsIHBhcnNlU2VsZWN0b3IgfSBmcm9tICcuLi91dGlsL2luZGV4LmpzJ1xuXG5jb25zdCBnZXRTZWxlY3RvciA9IGVsZW1lbnQgPT4ge1xuICBsZXQgc2VsZWN0b3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy10YXJnZXQnKVxuXG4gIGlmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09ICcjJykge1xuICAgIGxldCBocmVmQXR0cmlidXRlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuXG4gICAgLy8gVGhlIG9ubHkgdmFsaWQgY29udGVudCB0aGF0IGNvdWxkIGRvdWJsZSBhcyBhIHNlbGVjdG9yIGFyZSBJRHMgb3IgY2xhc3NlcyxcbiAgICAvLyBzbyBldmVyeXRoaW5nIHN0YXJ0aW5nIHdpdGggYCNgIG9yIGAuYC4gSWYgYSBcInJlYWxcIiBVUkwgaXMgdXNlZCBhcyB0aGUgc2VsZWN0b3IsXG4gICAgLy8gYGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JgIHdpbGwgcmlnaHRmdWxseSBjb21wbGFpbiBpdCBpcyBpbnZhbGlkLlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzMyMjczXG4gICAgaWYgKCFocmVmQXR0cmlidXRlIHx8ICghaHJlZkF0dHJpYnV0ZS5pbmNsdWRlcygnIycpICYmICFocmVmQXR0cmlidXRlLnN0YXJ0c1dpdGgoJy4nKSkpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLy8gSnVzdCBpbiBjYXNlIHNvbWUgQ01TIHB1dHMgb3V0IGEgZnVsbCBVUkwgd2l0aCB0aGUgYW5jaG9yIGFwcGVuZGVkXG4gICAgaWYgKGhyZWZBdHRyaWJ1dGUuaW5jbHVkZXMoJyMnKSAmJiAhaHJlZkF0dHJpYnV0ZS5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIGhyZWZBdHRyaWJ1dGUgPSBgIyR7aHJlZkF0dHJpYnV0ZS5zcGxpdCgnIycpWzFdfWBcbiAgICB9XG5cbiAgICBzZWxlY3RvciA9IGhyZWZBdHRyaWJ1dGUgJiYgaHJlZkF0dHJpYnV0ZSAhPT0gJyMnID8gcGFyc2VTZWxlY3RvcihocmVmQXR0cmlidXRlLnRyaW0oKSkgOiBudWxsXG4gIH1cblxuICByZXR1cm4gc2VsZWN0b3Jcbn1cblxuY29uc3QgU2VsZWN0b3JFbmdpbmUgPSB7XG4gIGZpbmQoc2VsZWN0b3IsIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLkVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGwuY2FsbChlbGVtZW50LCBzZWxlY3RvcikpXG4gIH0sXG5cbiAgZmluZE9uZShzZWxlY3RvciwgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIHJldHVybiBFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpXG4gIH0sXG5cbiAgY2hpbGRyZW4oZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLmVsZW1lbnQuY2hpbGRyZW4pLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5tYXRjaGVzKHNlbGVjdG9yKSlcbiAgfSxcblxuICBwYXJlbnRzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgY29uc3QgcGFyZW50cyA9IFtdXG4gICAgbGV0IGFuY2VzdG9yID0gZWxlbWVudC5wYXJlbnROb2RlLmNsb3Nlc3Qoc2VsZWN0b3IpXG5cbiAgICB3aGlsZSAoYW5jZXN0b3IpIHtcbiAgICAgIHBhcmVudHMucHVzaChhbmNlc3RvcilcbiAgICAgIGFuY2VzdG9yID0gYW5jZXN0b3IucGFyZW50Tm9kZS5jbG9zZXN0KHNlbGVjdG9yKVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRzXG4gIH0sXG5cbiAgcHJldihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGxldCBwcmV2aW91cyA9IGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZ1xuXG4gICAgd2hpbGUgKHByZXZpb3VzKSB7XG4gICAgICBpZiAocHJldmlvdXMubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIFtwcmV2aW91c11cbiAgICAgIH1cblxuICAgICAgcHJldmlvdXMgPSBwcmV2aW91cy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH0sXG4gIC8vIFRPRE86IHRoaXMgaXMgbm93IHVudXNlZDsgcmVtb3ZlIGxhdGVyIGFsb25nIHdpdGggcHJldigpXG4gIG5leHQoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBsZXQgbmV4dCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nXG5cbiAgICB3aGlsZSAobmV4dCkge1xuICAgICAgaWYgKG5leHQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIFtuZXh0XVxuICAgICAgfVxuXG4gICAgICBuZXh0ID0gbmV4dC5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfSxcblxuICBmb2N1c2FibGVDaGlsZHJlbihlbGVtZW50KSB7XG4gICAgY29uc3QgZm9jdXNhYmxlcyA9IFtcbiAgICAgICdhJyxcbiAgICAgICdidXR0b24nLFxuICAgICAgJ2lucHV0JyxcbiAgICAgICd0ZXh0YXJlYScsXG4gICAgICAnc2VsZWN0JyxcbiAgICAgICdkZXRhaWxzJyxcbiAgICAgICdbdGFiaW5kZXhdJyxcbiAgICAgICdbY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiXSdcbiAgICBdLm1hcChzZWxlY3RvciA9PiBgJHtzZWxlY3Rvcn06bm90KFt0YWJpbmRleF49XCItXCJdKWApLmpvaW4oJywnKVxuXG4gICAgcmV0dXJuIHRoaXMuZmluZChmb2N1c2FibGVzLCBlbGVtZW50KS5maWx0ZXIoZWwgPT4gIWlzRGlzYWJsZWQoZWwpICYmIGlzVmlzaWJsZShlbCkpXG4gIH0sXG5cbiAgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KVxuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShzZWxlY3RvcikgPyBzZWxlY3RvciA6IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9LFxuXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudClcblxuICAgIHJldHVybiBzZWxlY3RvciA/IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoc2VsZWN0b3IpIDogbnVsbFxuICB9LFxuXG4gIGdldE11bHRpcGxlRWxlbWVudHNGcm9tU2VsZWN0b3IoZWxlbWVudCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudClcblxuICAgIHJldHVybiBzZWxlY3RvciA/IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpIDogW11cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RvckVuZ2luZVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvY29tcG9uZW50LWZ1bmN0aW9ucy5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCB7IGlzRGlzYWJsZWQgfSBmcm9tICcuL2luZGV4LmpzJ1xuXG5jb25zdCBlbmFibGVEaXNtaXNzVHJpZ2dlciA9IChjb21wb25lbnQsIG1ldGhvZCA9ICdoaWRlJykgPT4ge1xuICBjb25zdCBjbGlja0V2ZW50ID0gYGNsaWNrLmRpc21pc3Mke2NvbXBvbmVudC5FVkVOVF9LRVl9YFxuICBjb25zdCBuYW1lID0gY29tcG9uZW50Lk5BTUVcblxuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIGNsaWNrRXZlbnQsIGBbZGF0YS1icy1kaXNtaXNzPVwiJHtuYW1lfVwiXWAsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKSB8fCB0aGlzLmNsb3Nlc3QoYC4ke25hbWV9YClcbiAgICBjb25zdCBpbnN0YW5jZSA9IGNvbXBvbmVudC5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldClcblxuICAgIC8vIE1ldGhvZCBhcmd1bWVudCBpcyBsZWZ0LCBmb3IgQWxlcnQgYW5kIG9ubHksIGFzIGl0IGRvZXNuJ3QgaW1wbGVtZW50IHRoZSAnaGlkZScgbWV0aG9kXG4gICAgaW5zdGFuY2VbbWV0aG9kXSgpXG4gIH0pXG59XG5cbmV4cG9ydCB7XG4gIGVuYWJsZURpc21pc3NUcmlnZ2VyXG59XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgYWxlcnQuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50LmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IHsgZW5hYmxlRGlzbWlzc1RyaWdnZXIgfSBmcm9tICcuL3V0aWwvY29tcG9uZW50LWZ1bmN0aW9ucy5qcydcbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiB9IGZyb20gJy4vdXRpbC9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ2FsZXJ0J1xuY29uc3QgREFUQV9LRVkgPSAnYnMuYWxlcnQnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuXG5jb25zdCBFVkVOVF9DTE9TRSA9IGBjbG9zZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMT1NFRCA9IGBjbG9zZWQke0VWRU5UX0tFWX1gXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBBbGVydCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGNsb3NlKCkge1xuICAgIGNvbnN0IGNsb3NlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9DTE9TRSlcblxuICAgIGlmIChjbG9zZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBjb25zdCBpc0FuaW1hdGVkID0gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKVxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCkgPT4gdGhpcy5fZGVzdHJveUVsZW1lbnQoKSwgdGhpcy5fZWxlbWVudCwgaXNBbmltYXRlZClcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2Rlc3Ryb3lFbGVtZW50KCkge1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKClcbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9DTE9TRUQpXG4gICAgdGhpcy5kaXNwb3NlKClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IEFsZXJ0LmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5lbmFibGVEaXNtaXNzVHJpZ2dlcihBbGVydCwgJ2Nsb3NlJylcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQWxlcnQpXG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgYnV0dG9uLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiB9IGZyb20gJy4vdXRpbC9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ2J1dHRvbidcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmJ1dHRvbidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJidXR0b25cIl0nXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgdG9nZ2xlKCkge1xuICAgIC8vIFRvZ2dsZSBjbGFzcyBhbmQgc3luYyB0aGUgYGFyaWEtcHJlc3NlZGAgYXR0cmlidXRlIHdpdGggdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgYC50b2dnbGUoKWAgbWV0aG9kXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0FDVElWRSkpXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBCdXR0b24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKVxuXG4gICAgICBpZiAoY29uZmlnID09PSAndG9nZ2xlJykge1xuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBldmVudCA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICBjb25zdCBidXR0b24gPSBldmVudC50YXJnZXQuY2xvc2VzdChTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcbiAgY29uc3QgZGF0YSA9IEJ1dHRvbi5nZXRPckNyZWF0ZUluc3RhbmNlKGJ1dHRvbilcblxuICBkYXRhLnRvZ2dsZSgpXG59KVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihCdXR0b24pXG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvc3dpcGUuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL2NvbmZpZy5qcydcbmltcG9ydCB7IGV4ZWN1dGUgfSBmcm9tICcuL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnc3dpcGUnXG5jb25zdCBFVkVOVF9LRVkgPSAnLmJzLnN3aXBlJ1xuY29uc3QgRVZFTlRfVE9VQ0hTVEFSVCA9IGB0b3VjaHN0YXJ0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfVE9VQ0hNT1ZFID0gYHRvdWNobW92ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNIRU5EID0gYHRvdWNoZW5kJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUE9JTlRFUkRPV04gPSBgcG9pbnRlcmRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9QT0lOVEVSVVAgPSBgcG9pbnRlcnVwJHtFVkVOVF9LRVl9YFxuY29uc3QgUE9JTlRFUl9UWVBFX1RPVUNIID0gJ3RvdWNoJ1xuY29uc3QgUE9JTlRFUl9UWVBFX1BFTiA9ICdwZW4nXG5jb25zdCBDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQgPSAncG9pbnRlci1ldmVudCdcbmNvbnN0IFNXSVBFX1RIUkVTSE9MRCA9IDQwXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGVuZENhbGxiYWNrOiBudWxsLFxuICBsZWZ0Q2FsbGJhY2s6IG51bGwsXG4gIHJpZ2h0Q2FsbGJhY2s6IG51bGxcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGVuZENhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJyxcbiAgbGVmdENhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJyxcbiAgcmlnaHRDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKSdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgU3dpcGUgZXh0ZW5kcyBDb25maWcge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcblxuICAgIGlmICghZWxlbWVudCB8fCAhU3dpcGUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9kZWx0YVggPSAwXG4gICAgdGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMgPSBCb29sZWFuKHdpbmRvdy5Qb2ludGVyRXZlbnQpXG4gICAgdGhpcy5faW5pdEV2ZW50cygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGRpc3Bvc2UoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVkpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9zdGFydChldmVudCkge1xuICAgIGlmICghdGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMpIHtcbiAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WFxuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaChldmVudCkpIHtcbiAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LmNsaWVudFhcbiAgICB9XG4gIH1cblxuICBfZW5kKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX2V2ZW50SXNQb2ludGVyUGVuVG91Y2goZXZlbnQpKSB7XG4gICAgICB0aGlzLl9kZWx0YVggPSBldmVudC5jbGllbnRYIC0gdGhpcy5fZGVsdGFYXG4gICAgfVxuXG4gICAgdGhpcy5faGFuZGxlU3dpcGUoKVxuICAgIGV4ZWN1dGUodGhpcy5fY29uZmlnLmVuZENhbGxiYWNrKVxuICB9XG5cbiAgX21vdmUoZXZlbnQpIHtcbiAgICB0aGlzLl9kZWx0YVggPSBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSA/XG4gICAgICAwIDpcbiAgICAgIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMuX2RlbHRhWFxuICB9XG5cbiAgX2hhbmRsZVN3aXBlKCkge1xuICAgIGNvbnN0IGFic0RlbHRhWCA9IE1hdGguYWJzKHRoaXMuX2RlbHRhWClcblxuICAgIGlmIChhYnNEZWx0YVggPD0gU1dJUEVfVEhSRVNIT0xEKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBhYnNEZWx0YVggLyB0aGlzLl9kZWx0YVhcblxuICAgIHRoaXMuX2RlbHRhWCA9IDBcblxuICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBleGVjdXRlKGRpcmVjdGlvbiA+IDAgPyB0aGlzLl9jb25maWcucmlnaHRDYWxsYmFjayA6IHRoaXMuX2NvbmZpZy5sZWZ0Q2FsbGJhY2spXG4gIH1cblxuICBfaW5pdEV2ZW50cygpIHtcbiAgICBpZiAodGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9QT0lOVEVSRE9XTiwgZXZlbnQgPT4gdGhpcy5fc3RhcnQoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1BPSU5URVJVUCwgZXZlbnQgPT4gdGhpcy5fZW5kKGV2ZW50KSlcblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfUE9JTlRFUl9FVkVOVClcbiAgICB9IGVsc2Uge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNIU1RBUlQsIGV2ZW50ID0+IHRoaXMuX3N0YXJ0KGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSE1PVkUsIGV2ZW50ID0+IHRoaXMuX21vdmUoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNIRU5ELCBldmVudCA9PiB0aGlzLl9lbmQoZXZlbnQpKVxuICAgIH1cbiAgfVxuXG4gIF9ldmVudElzUG9pbnRlclBlblRvdWNoKGV2ZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzICYmIChldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1BFTiB8fCBldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1RPVUNIKVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBpc1N1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTd2lwZVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGNhcm91c2VsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldE5leHRBY3RpdmVFbGVtZW50LFxuICBpc1JUTCxcbiAgaXNWaXNpYmxlLFxuICByZWZsb3csXG4gIHRyaWdnZXJUcmFuc2l0aW9uRW5kXG59IGZyb20gJy4vdXRpbC9pbmRleC5qcydcbmltcG9ydCBTd2lwZSBmcm9tICcuL3V0aWwvc3dpcGUuanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdjYXJvdXNlbCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmNhcm91c2VsJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEFSUk9XX0xFRlRfS0VZID0gJ0Fycm93TGVmdCdcbmNvbnN0IEFSUk9XX1JJR0hUX0tFWSA9ICdBcnJvd1JpZ2h0J1xuY29uc3QgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCA9IDUwMCAvLyBUaW1lIGZvciBtb3VzZSBjb21wYXQgZXZlbnRzIHRvIGZpcmUgYWZ0ZXIgdG91Y2hcblxuY29uc3QgT1JERVJfTkVYVCA9ICduZXh0J1xuY29uc3QgT1JERVJfUFJFViA9ICdwcmV2J1xuY29uc3QgRElSRUNUSU9OX0xFRlQgPSAnbGVmdCdcbmNvbnN0IERJUkVDVElPTl9SSUdIVCA9ICdyaWdodCdcblxuY29uc3QgRVZFTlRfU0xJREUgPSBgc2xpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TTElEID0gYHNsaWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOID0gYGtleWRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRUVOVEVSID0gYG1vdXNlZW50ZXIke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRUxFQVZFID0gYG1vdXNlbGVhdmUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9EUkFHX1NUQVJUID0gYGRyYWdzdGFydCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0NBUk9VU0VMID0gJ2Nhcm91c2VsJ1xuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TTElERSA9ICdzbGlkZSdcbmNvbnN0IENMQVNTX05BTUVfRU5EID0gJ2Nhcm91c2VsLWl0ZW0tZW5kJ1xuY29uc3QgQ0xBU1NfTkFNRV9TVEFSVCA9ICdjYXJvdXNlbC1pdGVtLXN0YXJ0J1xuY29uc3QgQ0xBU1NfTkFNRV9ORVhUID0gJ2Nhcm91c2VsLWl0ZW0tbmV4dCdcbmNvbnN0IENMQVNTX05BTUVfUFJFViA9ICdjYXJvdXNlbC1pdGVtLXByZXYnXG5cbmNvbnN0IFNFTEVDVE9SX0FDVElWRSA9ICcuYWN0aXZlJ1xuY29uc3QgU0VMRUNUT1JfSVRFTSA9ICcuY2Fyb3VzZWwtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0FDVElWRV9JVEVNID0gU0VMRUNUT1JfQUNUSVZFICsgU0VMRUNUT1JfSVRFTVxuY29uc3QgU0VMRUNUT1JfSVRFTV9JTUcgPSAnLmNhcm91c2VsLWl0ZW0gaW1nJ1xuY29uc3QgU0VMRUNUT1JfSU5ESUNBVE9SUyA9ICcuY2Fyb3VzZWwtaW5kaWNhdG9ycydcbmNvbnN0IFNFTEVDVE9SX0RBVEFfU0xJREUgPSAnW2RhdGEtYnMtc2xpZGVdLCBbZGF0YS1icy1zbGlkZS10b10nXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1JJREUgPSAnW2RhdGEtYnMtcmlkZT1cImNhcm91c2VsXCJdJ1xuXG5jb25zdCBLRVlfVE9fRElSRUNUSU9OID0ge1xuICBbQVJST1dfTEVGVF9LRVldOiBESVJFQ1RJT05fUklHSFQsXG4gIFtBUlJPV19SSUdIVF9LRVldOiBESVJFQ1RJT05fTEVGVFxufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBpbnRlcnZhbDogNTAwMCxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIHBhdXNlOiAnaG92ZXInLFxuICByaWRlOiBmYWxzZSxcbiAgdG91Y2g6IHRydWUsXG4gIHdyYXA6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGludGVydmFsOiAnKG51bWJlcnxib29sZWFuKScsIC8vIFRPRE86djYgcmVtb3ZlIGJvb2xlYW4gc3VwcG9ydFxuICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICBwYXVzZTogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICByaWRlOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIHRvdWNoOiAnYm9vbGVhbicsXG4gIHdyYXA6ICdib29sZWFuJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBDYXJvdXNlbCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb25maWcpXG5cbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG4gICAgdGhpcy50b3VjaFRpbWVvdXQgPSBudWxsXG4gICAgdGhpcy5fc3dpcGVIZWxwZXIgPSBudWxsXG5cbiAgICB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfSU5ESUNBVE9SUywgdGhpcy5fZWxlbWVudClcbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnJpZGUgPT09IENMQVNTX05BTUVfQ0FST1VTRUwpIHtcbiAgICAgIHRoaXMuY3ljbGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgbmV4dCgpIHtcbiAgICB0aGlzLl9zbGlkZShPUkRFUl9ORVhUKVxuICB9XG5cbiAgbmV4dFdoZW5WaXNpYmxlKCkge1xuICAgIC8vIEZJWE1FIFRPRE8gdXNlIGBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGVgXG4gICAgLy8gRG9uJ3QgY2FsbCBuZXh0IHdoZW4gdGhlIHBhZ2UgaXNuJ3QgdmlzaWJsZVxuICAgIC8vIG9yIHRoZSBjYXJvdXNlbCBvciBpdHMgcGFyZW50IGlzbid0IHZpc2libGVcbiAgICBpZiAoIWRvY3VtZW50LmhpZGRlbiAmJiBpc1Zpc2libGUodGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgfVxuICB9XG5cbiAgcHJldigpIHtcbiAgICB0aGlzLl9zbGlkZShPUkRFUl9QUkVWKVxuICB9XG5cbiAgcGF1c2UoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgdHJpZ2dlclRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLl9jbGVhckludGVydmFsKClcbiAgfVxuXG4gIGN5Y2xlKCkge1xuICAgIHRoaXMuX2NsZWFySW50ZXJ2YWwoKVxuICAgIHRoaXMuX3VwZGF0ZUludGVydmFsKClcblxuICAgIHRoaXMuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5uZXh0V2hlblZpc2libGUoKSwgdGhpcy5fY29uZmlnLmludGVydmFsKVxuICB9XG5cbiAgX21heWJlRW5hYmxlQ3ljbGUoKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcucmlkZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9TTElELCAoKSA9PiB0aGlzLmN5Y2xlKCkpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmN5Y2xlKClcbiAgfVxuXG4gIHRvKGluZGV4KSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLl9nZXRJdGVtcygpXG4gICAgaWYgKGluZGV4ID4gaXRlbXMubGVuZ3RoIC0gMSB8fCBpbmRleCA8IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJRCwgKCkgPT4gdGhpcy50byhpbmRleCkpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleCh0aGlzLl9nZXRBY3RpdmUoKSlcbiAgICBpZiAoYWN0aXZlSW5kZXggPT09IGluZGV4KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBvcmRlciA9IGluZGV4ID4gYWN0aXZlSW5kZXggPyBPUkRFUl9ORVhUIDogT1JERVJfUFJFVlxuXG4gICAgdGhpcy5fc2xpZGUob3JkZXIsIGl0ZW1zW2luZGV4XSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgaWYgKHRoaXMuX3N3aXBlSGVscGVyKSB7XG4gICAgICB0aGlzLl9zd2lwZUhlbHBlci5kaXNwb3NlKClcbiAgICB9XG5cbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgY29uZmlnLmRlZmF1bHRJbnRlcnZhbCA9IGNvbmZpZy5pbnRlcnZhbFxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTiwgZXZlbnQgPT4gdGhpcy5fa2V5ZG93bihldmVudCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFRU5URVIsICgpID0+IHRoaXMucGF1c2UoKSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRUxFQVZFLCAoKSA9PiB0aGlzLl9tYXliZUVuYWJsZUN5Y2xlKCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy50b3VjaCAmJiBTd2lwZS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICB0aGlzLl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG4gIH1cblxuICBfYWRkVG91Y2hFdmVudExpc3RlbmVycygpIHtcbiAgICBmb3IgKGNvbnN0IGltZyBvZiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lURU1fSU1HLCB0aGlzLl9lbGVtZW50KSkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKGltZywgRVZFTlRfRFJBR19TVEFSVCwgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSlcbiAgICB9XG5cbiAgICBjb25zdCBlbmRDYWxsQmFjayA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgIT09ICdob3ZlcicpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0J3MgYSB0b3VjaC1lbmFibGVkIGRldmljZSwgbW91c2VlbnRlci9sZWF2ZSBhcmUgZmlyZWQgYXNcbiAgICAgIC8vIHBhcnQgb2YgdGhlIG1vdXNlIGNvbXBhdGliaWxpdHkgZXZlbnRzIG9uIGZpcnN0IHRhcCAtIHRoZSBjYXJvdXNlbFxuICAgICAgLy8gd291bGQgc3RvcCBjeWNsaW5nIHVudGlsIHVzZXIgdGFwcGVkIG91dCBvZiBpdDtcbiAgICAgIC8vIGhlcmUsIHdlIGxpc3RlbiBmb3IgdG91Y2hlbmQsIGV4cGxpY2l0bHkgcGF1c2UgdGhlIGNhcm91c2VsXG4gICAgICAvLyAoYXMgaWYgaXQncyB0aGUgc2Vjb25kIHRpbWUgd2UgdGFwIG9uIGl0LCBtb3VzZWVudGVyIGNvbXBhdCBldmVudFxuICAgICAgLy8gaXMgTk9UIGZpcmVkKSBhbmQgYWZ0ZXIgYSB0aW1lb3V0ICh0byBhbGxvdyBmb3IgbW91c2UgY29tcGF0aWJpbGl0eVxuICAgICAgLy8gZXZlbnRzIHRvIGZpcmUpIHdlIGV4cGxpY2l0bHkgcmVzdGFydCBjeWNsaW5nXG5cbiAgICAgIHRoaXMucGF1c2UoKVxuICAgICAgaWYgKHRoaXMudG91Y2hUaW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRvdWNoVGltZW91dClcbiAgICAgIH1cblxuICAgICAgdGhpcy50b3VjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX21heWJlRW5hYmxlQ3ljbGUoKSwgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCArIHRoaXMuX2NvbmZpZy5pbnRlcnZhbClcbiAgICB9XG5cbiAgICBjb25zdCBzd2lwZUNvbmZpZyA9IHtcbiAgICAgIGxlZnRDYWxsYmFjazogKCkgPT4gdGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcihESVJFQ1RJT05fTEVGVCkpLFxuICAgICAgcmlnaHRDYWxsYmFjazogKCkgPT4gdGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcihESVJFQ1RJT05fUklHSFQpKSxcbiAgICAgIGVuZENhbGxiYWNrOiBlbmRDYWxsQmFja1xuICAgIH1cblxuICAgIHRoaXMuX3N3aXBlSGVscGVyID0gbmV3IFN3aXBlKHRoaXMuX2VsZW1lbnQsIHN3aXBlQ29uZmlnKVxuICB9XG5cbiAgX2tleWRvd24oZXZlbnQpIHtcbiAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IEtFWV9UT19ESVJFQ1RJT05bZXZlbnQua2V5XVxuICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoZGlyZWN0aW9uKSlcbiAgICB9XG4gIH1cblxuICBfZ2V0SXRlbUluZGV4KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0SXRlbXMoKS5pbmRleE9mKGVsZW1lbnQpXG4gIH1cblxuICBfc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChpbmRleCkge1xuICAgIGlmICghdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZUluZGljYXRvciA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFLCB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudClcblxuICAgIGFjdGl2ZUluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIGFjdGl2ZUluZGljYXRvci5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpXG5cbiAgICBjb25zdCBuZXdBY3RpdmVJbmRpY2F0b3IgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKGBbZGF0YS1icy1zbGlkZS10bz1cIiR7aW5kZXh9XCJdYCwgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpXG5cbiAgICBpZiAobmV3QWN0aXZlSW5kaWNhdG9yKSB7XG4gICAgICBuZXdBY3RpdmVJbmRpY2F0b3IuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIG5ld0FjdGl2ZUluZGljYXRvci5zZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcsICd0cnVlJylcbiAgICB9XG4gIH1cblxuICBfdXBkYXRlSW50ZXJ2YWwoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2FjdGl2ZUVsZW1lbnQgfHwgdGhpcy5fZ2V0QWN0aXZlKClcblxuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudEludGVydmFsID0gTnVtYmVyLnBhcnNlSW50KGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLWludGVydmFsJyksIDEwKVxuXG4gICAgdGhpcy5fY29uZmlnLmludGVydmFsID0gZWxlbWVudEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWxcbiAgfVxuXG4gIF9zbGlkZShvcmRlciwgZWxlbWVudCA9IG51bGwpIHtcbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gdGhpcy5fZ2V0QWN0aXZlKClcbiAgICBjb25zdCBpc05leHQgPSBvcmRlciA9PT0gT1JERVJfTkVYVFxuICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZWxlbWVudCB8fCBnZXROZXh0QWN0aXZlRWxlbWVudCh0aGlzLl9nZXRJdGVtcygpLCBhY3RpdmVFbGVtZW50LCBpc05leHQsIHRoaXMuX2NvbmZpZy53cmFwKVxuXG4gICAgaWYgKG5leHRFbGVtZW50ID09PSBhY3RpdmVFbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBuZXh0RWxlbWVudEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KG5leHRFbGVtZW50KVxuXG4gICAgY29uc3QgdHJpZ2dlckV2ZW50ID0gZXZlbnROYW1lID0+IHtcbiAgICAgIHJldHVybiBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBldmVudE5hbWUsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogbmV4dEVsZW1lbnQsXG4gICAgICAgIGRpcmVjdGlvbjogdGhpcy5fb3JkZXJUb0RpcmVjdGlvbihvcmRlciksXG4gICAgICAgIGZyb206IHRoaXMuX2dldEl0ZW1JbmRleChhY3RpdmVFbGVtZW50KSxcbiAgICAgICAgdG86IG5leHRFbGVtZW50SW5kZXhcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc2xpZGVFdmVudCA9IHRyaWdnZXJFdmVudChFVkVOVF9TTElERSlcblxuICAgIGlmIChzbGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghYWN0aXZlRWxlbWVudCB8fCAhbmV4dEVsZW1lbnQpIHtcbiAgICAgIC8vIFNvbWUgd2VpcmRuZXNzIGlzIGhhcHBlbmluZywgc28gd2UgYmFpbFxuICAgICAgLy8gVE9ETzogY2hhbmdlIHRlc3RzIHRoYXQgdXNlIGVtcHR5IGRpdnMgdG8gYXZvaWQgdGhpcyBjaGVja1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNDeWNsaW5nID0gQm9vbGVhbih0aGlzLl9pbnRlcnZhbClcbiAgICB0aGlzLnBhdXNlKClcblxuICAgIHRoaXMuX2lzU2xpZGluZyA9IHRydWVcblxuICAgIHRoaXMuX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQobmV4dEVsZW1lbnRJbmRleClcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbmV4dEVsZW1lbnRcblxuICAgIGNvbnN0IGRpcmVjdGlvbmFsQ2xhc3NOYW1lID0gaXNOZXh0ID8gQ0xBU1NfTkFNRV9TVEFSVCA6IENMQVNTX05BTUVfRU5EXG4gICAgY29uc3Qgb3JkZXJDbGFzc05hbWUgPSBpc05leHQgPyBDTEFTU19OQU1FX05FWFQgOiBDTEFTU19OQU1FX1BSRVZcblxuICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQob3JkZXJDbGFzc05hbWUpXG5cbiAgICByZWZsb3cobmV4dEVsZW1lbnQpXG5cbiAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG4gICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChkaXJlY3Rpb25hbENsYXNzTmFtZSlcblxuICAgIGNvbnN0IGNvbXBsZXRlQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGRpcmVjdGlvbmFsQ2xhc3NOYW1lLCBvcmRlckNsYXNzTmFtZSlcbiAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSwgb3JkZXJDbGFzc05hbWUsIGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuXG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuXG4gICAgICB0cmlnZ2VyRXZlbnQoRVZFTlRfU0xJRClcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbEJhY2ssIGFjdGl2ZUVsZW1lbnQsIHRoaXMuX2lzQW5pbWF0ZWQoKSlcblxuICAgIGlmIChpc0N5Y2xpbmcpIHtcbiAgICAgIHRoaXMuY3ljbGUoKVxuICAgIH1cbiAgfVxuXG4gIF9pc0FuaW1hdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NMSURFKVxuICB9XG5cbiAgX2dldEFjdGl2ZSgpIHtcbiAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkVfSVRFTSwgdGhpcy5fZWxlbWVudClcbiAgfVxuXG4gIF9nZXRJdGVtcygpIHtcbiAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JVEVNLCB0aGlzLl9lbGVtZW50KVxuICB9XG5cbiAgX2NsZWFySW50ZXJ2YWwoKSB7XG4gICAgaWYgKHRoaXMuX2ludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKVxuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgX2RpcmVjdGlvblRvT3JkZXIoZGlyZWN0aW9uKSB7XG4gICAgaWYgKGlzUlRMKCkpIHtcbiAgICAgIHJldHVybiBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9MRUZUID8gT1JERVJfUFJFViA6IE9SREVSX05FWFRcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTEVGVCA/IE9SREVSX05FWFQgOiBPUkRFUl9QUkVWXG4gIH1cblxuICBfb3JkZXJUb0RpcmVjdGlvbihvcmRlcikge1xuICAgIGlmIChpc1JUTCgpKSB7XG4gICAgICByZXR1cm4gb3JkZXIgPT09IE9SREVSX1BSRVYgPyBESVJFQ1RJT05fTEVGVCA6IERJUkVDVElPTl9SSUdIVFxuICAgIH1cblxuICAgIHJldHVybiBvcmRlciA9PT0gT1JERVJfUFJFViA/IERJUkVDVElPTl9SSUdIVCA6IERJUkVDVElPTl9MRUZUXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBDYXJvdXNlbC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGRhdGEudG8oY29uZmlnKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9TTElERSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcylcblxuICBpZiAoIXRhcmdldCB8fCAhdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0NBUk9VU0VMKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gIGNvbnN0IGNhcm91c2VsID0gQ2Fyb3VzZWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpXG4gIGNvbnN0IHNsaWRlSW5kZXggPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1icy1zbGlkZS10bycpXG5cbiAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICBjYXJvdXNlbC50byhzbGlkZUluZGV4KVxuICAgIGNhcm91c2VsLl9tYXliZUVuYWJsZUN5Y2xlKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlKHRoaXMsICdzbGlkZScpID09PSAnbmV4dCcpIHtcbiAgICBjYXJvdXNlbC5uZXh0KClcbiAgICBjYXJvdXNlbC5fbWF5YmVFbmFibGVDeWNsZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBjYXJvdXNlbC5wcmV2KClcbiAgY2Fyb3VzZWwuX21heWJlRW5hYmxlQ3ljbGUoKVxufSlcblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBjb25zdCBjYXJvdXNlbHMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfUklERSlcblxuICBmb3IgKGNvbnN0IGNhcm91c2VsIG9mIGNhcm91c2Vscykge1xuICAgIENhcm91c2VsLmdldE9yQ3JlYXRlSW5zdGFuY2UoY2Fyb3VzZWwpXG4gIH1cbn0pXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKENhcm91c2VsKVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGNvbGxhcHNlLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnQsXG4gIHJlZmxvd1xufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdjb2xsYXBzZSdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmNvbGxhcHNlJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0UgPSAnY29sbGFwc2UnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNJTkcgPSAnY29sbGFwc2luZydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0VEID0gJ2NvbGxhcHNlZCdcbmNvbnN0IENMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOID0gYDpzY29wZSAuJHtDTEFTU19OQU1FX0NPTExBUFNFfSAuJHtDTEFTU19OQU1FX0NPTExBUFNFfWBcbmNvbnN0IENMQVNTX05BTUVfSE9SSVpPTlRBTCA9ICdjb2xsYXBzZS1ob3Jpem9udGFsJ1xuXG5jb25zdCBXSURUSCA9ICd3aWR0aCdcbmNvbnN0IEhFSUdIVCA9ICdoZWlnaHQnXG5cbmNvbnN0IFNFTEVDVE9SX0FDVElWRVMgPSAnLmNvbGxhcHNlLnNob3csIC5jb2xsYXBzZS5jb2xsYXBzaW5nJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIl0nXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIHBhcmVudDogbnVsbCxcbiAgdG9nZ2xlOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBwYXJlbnQ6ICcobnVsbHxlbGVtZW50KScsXG4gIHRvZ2dsZTogJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIENvbGxhcHNlIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgdGhpcy5fdHJpZ2dlckFycmF5ID0gW11cblxuICAgIGNvbnN0IHRvZ2dsZUxpc3QgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFKVxuXG4gICAgZm9yIChjb25zdCBlbGVtIG9mIHRvZ2dsZUxpc3QpIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gU2VsZWN0b3JFbmdpbmUuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtKVxuICAgICAgY29uc3QgZmlsdGVyRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpXG4gICAgICAgIC5maWx0ZXIoZm91bmRFbGVtZW50ID0+IGZvdW5kRWxlbWVudCA9PT0gdGhpcy5fZWxlbWVudClcblxuICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsICYmIGZpbHRlckVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJBcnJheS5wdXNoKGVsZW0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faW5pdGlhbGl6ZUNoaWxkcmVuKClcblxuICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdGhpcy5faXNTaG93bigpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG9nZ2xlKSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KClcbiAgICB9XG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgYWN0aXZlQ2hpbGRyZW4gPSBbXVxuXG4gICAgLy8gZmluZCBhY3RpdmUgY2hpbGRyZW5cbiAgICBpZiAodGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgYWN0aXZlQ2hpbGRyZW4gPSB0aGlzLl9nZXRGaXJzdExldmVsQ2hpbGRyZW4oU0VMRUNUT1JfQUNUSVZFUylcbiAgICAgICAgLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQgIT09IHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5tYXAoZWxlbWVudCA9PiBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIHsgdG9nZ2xlOiBmYWxzZSB9KSlcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlQ2hpbGRyZW4ubGVuZ3RoICYmIGFjdGl2ZUNoaWxkcmVuWzBdLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XKVxuICAgIGlmIChzdGFydEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3QgYWN0aXZlSW5zdGFuY2Ugb2YgYWN0aXZlQ2hpbGRyZW4pIHtcbiAgICAgIGFjdGl2ZUluc3RhbmNlLmhpZGUoKVxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRSlcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gMFxuXG4gICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdHJ1ZSlcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRSwgQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTilcbiAgICB9XG5cbiAgICBjb25zdCBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXG4gICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IGBzY3JvbGwke2NhcGl0YWxpemVkRGltZW5zaW9ufWBcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudFtzY3JvbGxTaXplXX1weGBcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCAhdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcbiAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1lbnNpb25dfXB4YFxuXG4gICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFLCBDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBmb3IgKGNvbnN0IHRyaWdnZXIgb2YgdGhpcy5fdHJpZ2dlckFycmF5KSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0cmlnZ2VyKVxuXG4gICAgICBpZiAoZWxlbWVudCAmJiAhdGhpcy5faXNTaG93bihlbGVtZW50KSkge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoW3RyaWdnZXJdLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gIH1cblxuICBfaXNTaG93bihlbGVtZW50ID0gdGhpcy5fZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIGNvbmZpZy50b2dnbGUgPSBCb29sZWFuKGNvbmZpZy50b2dnbGUpIC8vIENvZXJjZSBzdHJpbmcgdmFsdWVzXG4gICAgY29uZmlnLnBhcmVudCA9IGdldEVsZW1lbnQoY29uZmlnLnBhcmVudClcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGltZW5zaW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0hPUklaT05UQUwpID8gV0lEVEggOiBIRUlHSFRcbiAgfVxuXG4gIF9pbml0aWFsaXplQ2hpbGRyZW4oKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX2dldEZpcnN0TGV2ZWxDaGlsZHJlbihTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcblxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBjaGlsZHJlbikge1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoW2VsZW1lbnRdLCB0aGlzLl9pc1Nob3duKHNlbGVjdGVkKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKHNlbGVjdG9yKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBTZWxlY3RvckVuZ2luZS5maW5kKENMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOLCB0aGlzLl9jb25maWcucGFyZW50KVxuICAgIC8vIHJlbW92ZSBjaGlsZHJlbiBpZiBncmVhdGVyIGRlcHRoXG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHRoaXMuX2NvbmZpZy5wYXJlbnQpLmZpbHRlcihlbGVtZW50ID0+ICFjaGlsZHJlbi5pbmNsdWRlcyhlbGVtZW50KSlcbiAgfVxuXG4gIF9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModHJpZ2dlckFycmF5LCBpc09wZW4pIHtcbiAgICBpZiAoIXRyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB0cmlnZ2VyQXJyYXkpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0NPTExBUFNFRCwgIWlzT3BlbilcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIGNvbnN0IF9jb25maWcgPSB7fVxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgIF9jb25maWcudG9nZ2xlID0gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIF9jb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gcHJldmVudERlZmF1bHQgb25seSBmb3IgPGE+IGVsZW1lbnRzICh3aGljaCBjaGFuZ2UgdGhlIFVSTCkgbm90IGluc2lkZSB0aGUgY29sbGFwc2libGUgZWxlbWVudFxuICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdBJyB8fCAoZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgZXZlbnQuZGVsZWdhdGVUYXJnZXQudGFnTmFtZSA9PT0gJ0EnKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBTZWxlY3RvckVuZ2luZS5nZXRNdWx0aXBsZUVsZW1lbnRzRnJvbVNlbGVjdG9yKHRoaXMpKSB7XG4gICAgQ29sbGFwc2UuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50LCB7IHRvZ2dsZTogZmFsc2UgfSkudG9nZ2xlKClcbiAgfVxufSlcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQ29sbGFwc2UpXG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNlXG4iLCJleHBvcnQgdmFyIHRvcCA9ICd0b3AnO1xuZXhwb3J0IHZhciBib3R0b20gPSAnYm90dG9tJztcbmV4cG9ydCB2YXIgcmlnaHQgPSAncmlnaHQnO1xuZXhwb3J0IHZhciBsZWZ0ID0gJ2xlZnQnO1xuZXhwb3J0IHZhciBhdXRvID0gJ2F1dG8nO1xuZXhwb3J0IHZhciBiYXNlUGxhY2VtZW50cyA9IFt0b3AsIGJvdHRvbSwgcmlnaHQsIGxlZnRdO1xuZXhwb3J0IHZhciBzdGFydCA9ICdzdGFydCc7XG5leHBvcnQgdmFyIGVuZCA9ICdlbmQnO1xuZXhwb3J0IHZhciBjbGlwcGluZ1BhcmVudHMgPSAnY2xpcHBpbmdQYXJlbnRzJztcbmV4cG9ydCB2YXIgdmlld3BvcnQgPSAndmlld3BvcnQnO1xuZXhwb3J0IHZhciBwb3BwZXIgPSAncG9wcGVyJztcbmV4cG9ydCB2YXIgcmVmZXJlbmNlID0gJ3JlZmVyZW5jZSc7XG5leHBvcnQgdmFyIHZhcmlhdGlvblBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovYmFzZVBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTtcbmV4cG9ydCB2YXIgcGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9bXS5jb25jYXQoYmFzZVBsYWNlbWVudHMsIFthdXRvXSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50LCBwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pOyAvLyBtb2RpZmllcnMgdGhhdCBuZWVkIHRvIHJlYWQgdGhlIERPTVxuXG5leHBvcnQgdmFyIGJlZm9yZVJlYWQgPSAnYmVmb3JlUmVhZCc7XG5leHBvcnQgdmFyIHJlYWQgPSAncmVhZCc7XG5leHBvcnQgdmFyIGFmdGVyUmVhZCA9ICdhZnRlclJlYWQnOyAvLyBwdXJlLWxvZ2ljIG1vZGlmaWVyc1xuXG5leHBvcnQgdmFyIGJlZm9yZU1haW4gPSAnYmVmb3JlTWFpbic7XG5leHBvcnQgdmFyIG1haW4gPSAnbWFpbic7XG5leHBvcnQgdmFyIGFmdGVyTWFpbiA9ICdhZnRlck1haW4nOyAvLyBtb2RpZmllciB3aXRoIHRoZSBwdXJwb3NlIHRvIHdyaXRlIHRvIHRoZSBET00gKG9yIHdyaXRlIGludG8gYSBmcmFtZXdvcmsgc3RhdGUpXG5cbmV4cG9ydCB2YXIgYmVmb3JlV3JpdGUgPSAnYmVmb3JlV3JpdGUnO1xuZXhwb3J0IHZhciB3cml0ZSA9ICd3cml0ZSc7XG5leHBvcnQgdmFyIGFmdGVyV3JpdGUgPSAnYWZ0ZXJXcml0ZSc7XG5leHBvcnQgdmFyIG1vZGlmaWVyUGhhc2VzID0gW2JlZm9yZVJlYWQsIHJlYWQsIGFmdGVyUmVhZCwgYmVmb3JlTWFpbiwgbWFpbiwgYWZ0ZXJNYWluLCBiZWZvcmVXcml0ZSwgd3JpdGUsIGFmdGVyV3JpdGVdOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE5vZGVOYW1lKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQgPyAoZWxlbWVudC5ub2RlTmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKSA6IG51bGw7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93KG5vZGUpIHtcbiAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICBpZiAobm9kZS50b1N0cmluZygpICE9PSAnW29iamVjdCBXaW5kb3ddJykge1xuICAgIHZhciBvd25lckRvY3VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50O1xuICAgIHJldHVybiBvd25lckRvY3VtZW50ID8gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cgOiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuXG5mdW5jdGlvbiBpc0VsZW1lbnQobm9kZSkge1xuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5FbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQobm9kZSkge1xuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5IVE1MRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNTaGFkb3dSb290KG5vZGUpIHtcbiAgLy8gSUUgMTEgaGFzIG5vIFNoYWRvd1Jvb3RcbiAgaWYgKHR5cGVvZiBTaGFkb3dSb290ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLlNoYWRvd1Jvb3Q7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdDtcbn1cblxuZXhwb3J0IHsgaXNFbGVtZW50LCBpc0hUTUxFbGVtZW50LCBpc1NoYWRvd1Jvb3QgfTsiLCJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4uL2RvbS11dGlscy9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiOyAvLyBUaGlzIG1vZGlmaWVyIHRha2VzIHRoZSBzdHlsZXMgcHJlcGFyZWQgYnkgdGhlIGBjb21wdXRlU3R5bGVzYCBtb2RpZmllclxuLy8gYW5kIGFwcGxpZXMgdGhlbSB0byB0aGUgSFRNTEVsZW1lbnRzIHN1Y2ggYXMgcG9wcGVyIGFuZCBhcnJvd1xuXG5mdW5jdGlvbiBhcHBseVN0eWxlcyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHN0eWxlID0gc3RhdGUuc3R5bGVzW25hbWVdIHx8IHt9O1xuICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEZsb3cgZG9lc24ndCBzdXBwb3J0IHRvIGV4dGVuZCB0aGlzIHByb3BlcnR5LCBidXQgaXQncyB0aGUgbW9zdFxuICAgIC8vIGVmZmVjdGl2ZSB3YXkgdG8gYXBwbHkgc3R5bGVzIHRvIGFuIEhUTUxFbGVtZW50XG4gICAgLy8gJEZsb3dGaXhNZVtjYW5ub3Qtd3JpdGVdXG5cblxuICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlO1xuICB2YXIgaW5pdGlhbFN0eWxlcyA9IHtcbiAgICBwb3BwZXI6IHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgbGVmdDogJzAnLFxuICAgICAgdG9wOiAnMCcsXG4gICAgICBtYXJnaW46ICcwJ1xuICAgIH0sXG4gICAgYXJyb3c6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSxcbiAgICByZWZlcmVuY2U6IHt9XG4gIH07XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMucG9wcGVyLnN0eWxlLCBpbml0aWFsU3R5bGVzLnBvcHBlcik7XG4gIHN0YXRlLnN0eWxlcyA9IGluaXRpYWxTdHlsZXM7XG5cbiAgaWYgKHN0YXRlLmVsZW1lbnRzLmFycm93KSB7XG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5hcnJvdy5zdHlsZSwgaW5pdGlhbFN0eWxlcy5hcnJvdyk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdO1xuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgICAgdmFyIHN0eWxlUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKHN0YXRlLnN0eWxlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IHN0YXRlLnN0eWxlc1tuYW1lXSA6IGluaXRpYWxTdHlsZXNbbmFtZV0pOyAvLyBTZXQgYWxsIHZhbHVlcyB0byBhbiBlbXB0eSBzdHJpbmcgdG8gdW5zZXQgdGhlbVxuXG4gICAgICB2YXIgc3R5bGUgPSBzdHlsZVByb3BlcnRpZXMucmVkdWNlKGZ1bmN0aW9uIChzdHlsZSwgcHJvcGVydHkpIHtcbiAgICAgICAgc3R5bGVbcHJvcGVydHldID0gJyc7XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH0sIHt9KTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogYXBwbHlTdHlsZXMsXG4gIGVmZmVjdDogZWZmZWN0LFxuICByZXF1aXJlczogWydjb21wdXRlU3R5bGVzJ11cbn07IiwiaW1wb3J0IHsgYXV0byB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xufSIsImV4cG9ydCB2YXIgbWF4ID0gTWF0aC5tYXg7XG5leHBvcnQgdmFyIG1pbiA9IE1hdGgubWluO1xuZXhwb3J0IHZhciByb3VuZCA9IE1hdGgucm91bmQ7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VUFTdHJpbmcoKSB7XG4gIHZhciB1YURhdGEgPSBuYXZpZ2F0b3IudXNlckFnZW50RGF0YTtcblxuICBpZiAodWFEYXRhICE9IG51bGwgJiYgdWFEYXRhLmJyYW5kcyAmJiBBcnJheS5pc0FycmF5KHVhRGF0YS5icmFuZHMpKSB7XG4gICAgcmV0dXJuIHVhRGF0YS5icmFuZHMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS5icmFuZCArIFwiL1wiICsgaXRlbS52ZXJzaW9uO1xuICAgIH0pLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50O1xufSIsImltcG9ydCBnZXRVQVN0cmluZyBmcm9tIFwiLi4vdXRpbHMvdXNlckFnZW50LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0xheW91dFZpZXdwb3J0KCkge1xuICByZXR1cm4gIS9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QoZ2V0VUFTdHJpbmcoKSk7XG59IiwiaW1wb3J0IHsgaXNFbGVtZW50LCBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IHsgcm91bmQgfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBpc0xheW91dFZpZXdwb3J0IGZyb20gXCIuL2lzTGF5b3V0Vmlld3BvcnQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBpbmNsdWRlU2NhbGUsIGlzRml4ZWRTdHJhdGVneSkge1xuICBpZiAoaW5jbHVkZVNjYWxlID09PSB2b2lkIDApIHtcbiAgICBpbmNsdWRlU2NhbGUgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChpc0ZpeGVkU3RyYXRlZ3kgPT09IHZvaWQgMCkge1xuICAgIGlzRml4ZWRTdHJhdGVneSA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGNsaWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgc2NhbGVYID0gMTtcbiAgdmFyIHNjYWxlWSA9IDE7XG5cbiAgaWYgKGluY2x1ZGVTY2FsZSAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgc2NhbGVYID0gZWxlbWVudC5vZmZzZXRXaWR0aCA+IDAgPyByb3VuZChjbGllbnRSZWN0LndpZHRoKSAvIGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMSA6IDE7XG4gICAgc2NhbGVZID0gZWxlbWVudC5vZmZzZXRIZWlnaHQgPiAwID8gcm91bmQoY2xpZW50UmVjdC5oZWlnaHQpIC8gZWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgMSA6IDE7XG4gIH1cblxuICB2YXIgX3JlZiA9IGlzRWxlbWVudChlbGVtZW50KSA/IGdldFdpbmRvdyhlbGVtZW50KSA6IHdpbmRvdyxcbiAgICAgIHZpc3VhbFZpZXdwb3J0ID0gX3JlZi52aXN1YWxWaWV3cG9ydDtcblxuICB2YXIgYWRkVmlzdWFsT2Zmc2V0cyA9ICFpc0xheW91dFZpZXdwb3J0KCkgJiYgaXNGaXhlZFN0cmF0ZWd5O1xuICB2YXIgeCA9IChjbGllbnRSZWN0LmxlZnQgKyAoYWRkVmlzdWFsT2Zmc2V0cyAmJiB2aXN1YWxWaWV3cG9ydCA/IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQgOiAwKSkgLyBzY2FsZVg7XG4gIHZhciB5ID0gKGNsaWVudFJlY3QudG9wICsgKGFkZFZpc3VhbE9mZnNldHMgJiYgdmlzdWFsVmlld3BvcnQgPyB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3AgOiAwKSkgLyBzY2FsZVk7XG4gIHZhciB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGggLyBzY2FsZVg7XG4gIHZhciBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodCAvIHNjYWxlWTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgdG9wOiB5LFxuICAgIHJpZ2h0OiB4ICsgd2lkdGgsXG4gICAgYm90dG9tOiB5ICsgaGVpZ2h0LFxuICAgIGxlZnQ6IHgsXG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH07XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjsgLy8gUmV0dXJucyB0aGUgbGF5b3V0IHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LiBMYXlvdXRcbi8vIG1lYW5zIGl0IGRvZXNuJ3QgdGFrZSBpbnRvIGFjY291bnQgdHJhbnNmb3Jtcy5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TGF5b3V0UmVjdChlbGVtZW50KSB7XG4gIHZhciBjbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpOyAvLyBVc2UgdGhlIGNsaWVudFJlY3Qgc2l6ZXMgaWYgaXQncyBub3QgYmVlbiB0cmFuc2Zvcm1lZC5cbiAgLy8gRml4ZXMgaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMjIzXG5cbiAgdmFyIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LndpZHRoIC0gd2lkdGgpIDw9IDEpIHtcbiAgICB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGg7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC5oZWlnaHQgLSBoZWlnaHQpIDw9IDEpIHtcbiAgICBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogZWxlbWVudC5vZmZzZXRMZWZ0LFxuICAgIHk6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xufSIsImltcG9ydCB7IGlzU2hhZG93Um9vdCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhaW5zKHBhcmVudCwgY2hpbGQpIHtcbiAgdmFyIHJvb3ROb2RlID0gY2hpbGQuZ2V0Um9vdE5vZGUgJiYgY2hpbGQuZ2V0Um9vdE5vZGUoKTsgLy8gRmlyc3QsIGF0dGVtcHQgd2l0aCBmYXN0ZXIgbmF0aXZlIG1ldGhvZFxuXG4gIGlmIChwYXJlbnQuY29udGFpbnMoY2hpbGQpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gdGhlbiBmYWxsYmFjayB0byBjdXN0b20gaW1wbGVtZW50YXRpb24gd2l0aCBTaGFkb3cgRE9NIHN1cHBvcnRcbiAgZWxzZSBpZiAocm9vdE5vZGUgJiYgaXNTaGFkb3dSb290KHJvb3ROb2RlKSkge1xuICAgICAgdmFyIG5leHQgPSBjaGlsZDtcblxuICAgICAgZG8ge1xuICAgICAgICBpZiAobmV4dCAmJiBwYXJlbnQuaXNTYW1lTm9kZShuZXh0KSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXTogbmVlZCBhIGJldHRlciB3YXkgdG8gaGFuZGxlIHRoaXMuLi5cblxuXG4gICAgICAgIG5leHQgPSBuZXh0LnBhcmVudE5vZGUgfHwgbmV4dC5ob3N0O1xuICAgICAgfSB3aGlsZSAobmV4dCk7XG4gICAgfSAvLyBHaXZlIHVwLCB0aGUgcmVzdWx0IGlzIGZhbHNlXG5cblxuICByZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0V2luZG93KGVsZW1lbnQpLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59IiwiaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RhYmxlRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBbJ3RhYmxlJywgJ3RkJywgJ3RoJ10uaW5kZXhPZihnZXROb2RlTmFtZShlbGVtZW50KSkgPj0gMDtcbn0iLCJpbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkge1xuICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gIHJldHVybiAoKGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQub3duZXJEb2N1bWVudCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICBlbGVtZW50LmRvY3VtZW50KSB8fCB3aW5kb3cuZG9jdW1lbnQpLmRvY3VtZW50RWxlbWVudDtcbn0iLCJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgeyBpc1NoYWRvd1Jvb3QgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIHtcbiAgaWYgKGdldE5vZGVOYW1lKGVsZW1lbnQpID09PSAnaHRtbCcpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiAoLy8gdGhpcyBpcyBhIHF1aWNrZXIgKGJ1dCBsZXNzIHR5cGUgc2FmZSkgd2F5IHRvIHNhdmUgcXVpdGUgc29tZSBieXRlcyBmcm9tIHRoZSBidW5kbGVcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dXG4gICAgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgZWxlbWVudC5hc3NpZ25lZFNsb3QgfHwgLy8gc3RlcCBpbnRvIHRoZSBzaGFkb3cgRE9NIG9mIHRoZSBwYXJlbnQgb2YgYSBzbG90dGVkIG5vZGVcbiAgICBlbGVtZW50LnBhcmVudE5vZGUgfHwgKCAvLyBET00gRWxlbWVudCBkZXRlY3RlZFxuICAgIGlzU2hhZG93Um9vdChlbGVtZW50KSA/IGVsZW1lbnQuaG9zdCA6IG51bGwpIHx8IC8vIFNoYWRvd1Jvb3QgZGV0ZWN0ZWRcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogSFRNTEVsZW1lbnQgaXMgYSBOb2RlXG4gICAgZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIC8vIGZhbGxiYWNrXG5cbiAgKTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50LCBpc1NoYWRvd1Jvb3QgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgaXNUYWJsZUVsZW1lbnQgZnJvbSBcIi4vaXNUYWJsZUVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBnZXRVQVN0cmluZyBmcm9tIFwiLi4vdXRpbHMvdXNlckFnZW50LmpzXCI7XG5cbmZ1bmN0aW9uIGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy84MzdcbiAgZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xufSAvLyBgLm9mZnNldFBhcmVudGAgcmVwb3J0cyBgbnVsbGAgZm9yIGZpeGVkIGVsZW1lbnRzLCB3aGlsZSBhYnNvbHV0ZSBlbGVtZW50c1xuLy8gcmV0dXJuIHRoZSBjb250YWluaW5nIGJsb2NrXG5cblxuZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHtcbiAgdmFyIGlzRmlyZWZveCA9IC9maXJlZm94L2kudGVzdChnZXRVQVN0cmluZygpKTtcbiAgdmFyIGlzSUUgPSAvVHJpZGVudC9pLnRlc3QoZ2V0VUFTdHJpbmcoKSk7XG5cbiAgaWYgKGlzSUUgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuICAgIC8vIEluIElFIDksIDEwIGFuZCAxMSBmaXhlZCBlbGVtZW50cyBjb250YWluaW5nIGJsb2NrIGlzIGFsd2F5cyBlc3RhYmxpc2hlZCBieSB0aGUgdmlld3BvcnRcbiAgICB2YXIgZWxlbWVudENzcyA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG5cbiAgICBpZiAoZWxlbWVudENzcy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgdmFyIGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcblxuICBpZiAoaXNTaGFkb3dSb290KGN1cnJlbnROb2RlKSkge1xuICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUuaG9zdDtcbiAgfVxuXG4gIHdoaWxlIChpc0hUTUxFbGVtZW50KGN1cnJlbnROb2RlKSAmJiBbJ2h0bWwnLCAnYm9keSddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoY3VycmVudE5vZGUpKSA8IDApIHtcbiAgICB2YXIgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50Tm9kZSk7IC8vIFRoaXMgaXMgbm9uLWV4aGF1c3RpdmUgYnV0IGNvdmVycyB0aGUgbW9zdCBjb21tb24gQ1NTIHByb3BlcnRpZXMgdGhhdFxuICAgIC8vIGNyZWF0ZSBhIGNvbnRhaW5pbmcgYmxvY2suXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NvbnRhaW5pbmdfYmxvY2sjaWRlbnRpZnlpbmdfdGhlX2NvbnRhaW5pbmdfYmxvY2tcblxuICAgIGlmIChjc3MudHJhbnNmb3JtICE9PSAnbm9uZScgfHwgY3NzLnBlcnNwZWN0aXZlICE9PSAnbm9uZScgfHwgY3NzLmNvbnRhaW4gPT09ICdwYWludCcgfHwgWyd0cmFuc2Zvcm0nLCAncGVyc3BlY3RpdmUnXS5pbmRleE9mKGNzcy53aWxsQ2hhbmdlKSAhPT0gLTEgfHwgaXNGaXJlZm94ICYmIGNzcy53aWxsQ2hhbmdlID09PSAnZmlsdGVyJyB8fCBpc0ZpcmVmb3ggJiYgY3NzLmZpbHRlciAmJiBjc3MuZmlsdGVyICE9PSAnbm9uZScpIHtcbiAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufSAvLyBHZXRzIHRoZSBjbG9zZXN0IGFuY2VzdG9yIHBvc2l0aW9uZWQgZWxlbWVudC4gSGFuZGxlcyBzb21lIGVkZ2UgY2FzZXMsXG4vLyBzdWNoIGFzIHRhYmxlIGFuY2VzdG9ycyBhbmQgY3Jvc3MgYnJvd3NlciBidWdzLlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xuXG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgaXNUYWJsZUVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQpO1xuICB9XG5cbiAgaWYgKG9mZnNldFBhcmVudCAmJiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2h0bWwnIHx8IGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdib2R5JyAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB8fCB3aW5kb3c7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpID49IDAgPyAneCcgOiAneSc7XG59IiwiaW1wb3J0IHsgbWF4IGFzIG1hdGhNYXgsIG1pbiBhcyBtYXRoTWluIH0gZnJvbSBcIi4vbWF0aC5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHdpdGhpbihtaW4sIHZhbHVlLCBtYXgpIHtcbiAgcmV0dXJuIG1hdGhNYXgobWluLCBtYXRoTWluKHZhbHVlLCBtYXgpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3aXRoaW5NYXhDbGFtcChtaW4sIHZhbHVlLCBtYXgpIHtcbiAgdmFyIHYgPSB3aXRoaW4obWluLCB2YWx1ZSwgbWF4KTtcbiAgcmV0dXJuIHYgPiBtYXggPyBtYXggOiB2O1xufSIsImltcG9ydCBnZXRGcmVzaFNpZGVPYmplY3QgZnJvbSBcIi4vZ2V0RnJlc2hTaWRlT2JqZWN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZVBhZGRpbmdPYmplY3QocGFkZGluZ09iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZ2V0RnJlc2hTaWRlT2JqZWN0KCksIHBhZGRpbmdPYmplY3QpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEZyZXNoU2lkZU9iamVjdCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDBcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHBhbmRUb0hhc2hNYXAodmFsdWUsIGtleXMpIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uIChoYXNoTWFwLCBrZXkpIHtcbiAgICBoYXNoTWFwW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gaGFzaE1hcDtcbiAgfSwge30pO1xufSIsImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBjb250YWlucyBmcm9tIFwiLi4vZG9tLXV0aWxzL2NvbnRhaW5zLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHdpdGhpbiB9IGZyb20gXCIuLi91dGlscy93aXRoaW4uanNcIjtcbmltcG9ydCBtZXJnZVBhZGRpbmdPYmplY3QgZnJvbSBcIi4uL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdC5qc1wiO1xuaW1wb3J0IGV4cGFuZFRvSGFzaE1hcCBmcm9tIFwiLi4vdXRpbHMvZXhwYW5kVG9IYXNoTWFwLmpzXCI7XG5pbXBvcnQgeyBsZWZ0LCByaWdodCwgYmFzZVBsYWNlbWVudHMsIHRvcCwgYm90dG9tIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHRvUGFkZGluZ09iamVjdCA9IGZ1bmN0aW9uIHRvUGFkZGluZ09iamVjdChwYWRkaW5nLCBzdGF0ZSkge1xuICBwYWRkaW5nID0gdHlwZW9mIHBhZGRpbmcgPT09ICdmdW5jdGlvbicgPyBwYWRkaW5nKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogcGFkZGluZztcbiAgcmV0dXJuIG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG59O1xuXG5mdW5jdGlvbiBhcnJvdyhfcmVmKSB7XG4gIHZhciBfc3RhdGUkbW9kaWZpZXJzRGF0YSQ7XG5cbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIGF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBpc1ZlcnRpY2FsID0gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDA7XG4gIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gIGlmICghYXJyb3dFbGVtZW50IHx8ICFwb3BwZXJPZmZzZXRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHBhZGRpbmdPYmplY3QgPSB0b1BhZGRpbmdPYmplY3Qob3B0aW9ucy5wYWRkaW5nLCBzdGF0ZSk7XG4gIHZhciBhcnJvd1JlY3QgPSBnZXRMYXlvdXRSZWN0KGFycm93RWxlbWVudCk7XG4gIHZhciBtaW5Qcm9wID0gYXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgdmFyIG1heFByb3AgPSBheGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgdmFyIGVuZERpZmYgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbbGVuXSArIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXSAtIHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5wb3BwZXJbbGVuXTtcbiAgdmFyIHN0YXJ0RGlmZiA9IHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc107XG4gIHZhciBhcnJvd09mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChhcnJvd0VsZW1lbnQpO1xuICB2YXIgY2xpZW50U2l6ZSA9IGFycm93T2Zmc2V0UGFyZW50ID8gYXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50SGVpZ2h0IHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRXaWR0aCB8fCAwIDogMDtcbiAgdmFyIGNlbnRlclRvUmVmZXJlbmNlID0gZW5kRGlmZiAvIDIgLSBzdGFydERpZmYgLyAyOyAvLyBNYWtlIHN1cmUgdGhlIGFycm93IGRvZXNuJ3Qgb3ZlcmZsb3cgdGhlIHBvcHBlciBpZiB0aGUgY2VudGVyIHBvaW50IGlzXG4gIC8vIG91dHNpZGUgb2YgdGhlIHBvcHBlciBib3VuZHNcblxuICB2YXIgbWluID0gcGFkZGluZ09iamVjdFttaW5Qcm9wXTtcbiAgdmFyIG1heCA9IGNsaWVudFNpemUgLSBhcnJvd1JlY3RbbGVuXSAtIHBhZGRpbmdPYmplY3RbbWF4UHJvcF07XG4gIHZhciBjZW50ZXIgPSBjbGllbnRTaXplIC8gMiAtIGFycm93UmVjdFtsZW5dIC8gMiArIGNlbnRlclRvUmVmZXJlbmNlO1xuICB2YXIgb2Zmc2V0ID0gd2l0aGluKG1pbiwgY2VudGVyLCBtYXgpOyAvLyBQcmV2ZW50cyBicmVha2luZyBzeW50YXggaGlnaGxpZ2h0aW5nLi4uXG5cbiAgdmFyIGF4aXNQcm9wID0gYXhpcztcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IChfc3RhdGUkbW9kaWZpZXJzRGF0YSQgPSB7fSwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkW2F4aXNQcm9wXSA9IG9mZnNldCwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkLmNlbnRlck9mZnNldCA9IG9mZnNldCAtIGNlbnRlciwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkKTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRlbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50LFxuICAgICAgYXJyb3dFbGVtZW50ID0gX29wdGlvbnMkZWxlbWVudCA9PT0gdm9pZCAwID8gJ1tkYXRhLXBvcHBlci1hcnJvd10nIDogX29wdGlvbnMkZWxlbWVudDtcblxuICBpZiAoYXJyb3dFbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gQ1NTIHNlbGVjdG9yXG5cblxuICBpZiAodHlwZW9mIGFycm93RWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5wb3BwZXIucXVlcnlTZWxlY3RvcihhcnJvd0VsZW1lbnQpO1xuXG4gICAgaWYgKCFhcnJvd0VsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbnRhaW5zKHN0YXRlLmVsZW1lbnRzLnBvcHBlciwgYXJyb3dFbGVtZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHN0YXRlLmVsZW1lbnRzLmFycm93ID0gYXJyb3dFbGVtZW50O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYXJyb3cnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogYXJyb3csXG4gIGVmZmVjdDogZWZmZWN0LFxuICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J11cbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG59IiwiaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgYm90dG9tLCBlbmQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4uL3V0aWxzL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IHsgcm91bmQgfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciB1bnNldFNpZGVzID0ge1xuICB0b3A6ICdhdXRvJyxcbiAgcmlnaHQ6ICdhdXRvJyxcbiAgYm90dG9tOiAnYXV0bycsXG4gIGxlZnQ6ICdhdXRvJ1xufTsgLy8gUm91bmQgdGhlIG9mZnNldHMgdG8gdGhlIG5lYXJlc3Qgc3VpdGFibGUgc3VicGl4ZWwgYmFzZWQgb24gdGhlIERQUi5cbi8vIFpvb21pbmcgY2FuIGNoYW5nZSB0aGUgRFBSLCBidXQgaXQgc2VlbXMgdG8gcmVwb3J0IGEgdmFsdWUgdGhhdCB3aWxsXG4vLyBjbGVhbmx5IGRpdmlkZSB0aGUgdmFsdWVzIGludG8gdGhlIGFwcHJvcHJpYXRlIHN1YnBpeGVscy5cblxuZnVuY3Rpb24gcm91bmRPZmZzZXRzQnlEUFIoX3JlZiwgd2luKSB7XG4gIHZhciB4ID0gX3JlZi54LFxuICAgICAgeSA9IF9yZWYueTtcbiAgdmFyIGRwciA9IHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gIHJldHVybiB7XG4gICAgeDogcm91bmQoeCAqIGRwcikgLyBkcHIgfHwgMCxcbiAgICB5OiByb3VuZCh5ICogZHByKSAvIGRwciB8fCAwXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBUb1N0eWxlcyhfcmVmMikge1xuICB2YXIgX09iamVjdCRhc3NpZ24yO1xuXG4gIHZhciBwb3BwZXIgPSBfcmVmMi5wb3BwZXIsXG4gICAgICBwb3BwZXJSZWN0ID0gX3JlZjIucG9wcGVyUmVjdCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYyLnBsYWNlbWVudCxcbiAgICAgIHZhcmlhdGlvbiA9IF9yZWYyLnZhcmlhdGlvbixcbiAgICAgIG9mZnNldHMgPSBfcmVmMi5vZmZzZXRzLFxuICAgICAgcG9zaXRpb24gPSBfcmVmMi5wb3NpdGlvbixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9yZWYyLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGFkYXB0aXZlID0gX3JlZjIuYWRhcHRpdmUsXG4gICAgICByb3VuZE9mZnNldHMgPSBfcmVmMi5yb3VuZE9mZnNldHMsXG4gICAgICBpc0ZpeGVkID0gX3JlZjIuaXNGaXhlZDtcbiAgdmFyIF9vZmZzZXRzJHggPSBvZmZzZXRzLngsXG4gICAgICB4ID0gX29mZnNldHMkeCA9PT0gdm9pZCAwID8gMCA6IF9vZmZzZXRzJHgsXG4gICAgICBfb2Zmc2V0cyR5ID0gb2Zmc2V0cy55LFxuICAgICAgeSA9IF9vZmZzZXRzJHkgPT09IHZvaWQgMCA/IDAgOiBfb2Zmc2V0cyR5O1xuXG4gIHZhciBfcmVmMyA9IHR5cGVvZiByb3VuZE9mZnNldHMgPT09ICdmdW5jdGlvbicgPyByb3VuZE9mZnNldHMoe1xuICAgIHg6IHgsXG4gICAgeTogeVxuICB9KSA6IHtcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcblxuICB4ID0gX3JlZjMueDtcbiAgeSA9IF9yZWYzLnk7XG4gIHZhciBoYXNYID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneCcpO1xuICB2YXIgaGFzWSA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3knKTtcbiAgdmFyIHNpZGVYID0gbGVmdDtcbiAgdmFyIHNpZGVZID0gdG9wO1xuICB2YXIgd2luID0gd2luZG93O1xuXG4gIGlmIChhZGFwdGl2ZSkge1xuICAgIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKTtcbiAgICB2YXIgaGVpZ2h0UHJvcCA9ICdjbGllbnRIZWlnaHQnO1xuICAgIHZhciB3aWR0aFByb3AgPSAnY2xpZW50V2lkdGgnO1xuXG4gICAgaWYgKG9mZnNldFBhcmVudCA9PT0gZ2V0V2luZG93KHBvcHBlcikpIHtcbiAgICAgIG9mZnNldFBhcmVudCA9IGdldERvY3VtZW50RWxlbWVudChwb3BwZXIpO1xuXG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uICE9PSAnc3RhdGljJyAmJiBwb3NpdGlvbiA9PT0gJ2Fic29sdXRlJykge1xuICAgICAgICBoZWlnaHRQcm9wID0gJ3Njcm9sbEhlaWdodCc7XG4gICAgICAgIHdpZHRoUHJvcCA9ICdzY3JvbGxXaWR0aCc7XG4gICAgICB9XG4gICAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYXN0XTogZm9yY2UgdHlwZSByZWZpbmVtZW50LCB3ZSBjb21wYXJlIG9mZnNldFBhcmVudCB3aXRoIHdpbmRvdyBhYm92ZSwgYnV0IEZsb3cgZG9lc24ndCBkZXRlY3QgaXRcblxuXG4gICAgb2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50O1xuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gdG9wIHx8IChwbGFjZW1lbnQgPT09IGxlZnQgfHwgcGxhY2VtZW50ID09PSByaWdodCkgJiYgdmFyaWF0aW9uID09PSBlbmQpIHtcbiAgICAgIHNpZGVZID0gYm90dG9tO1xuICAgICAgdmFyIG9mZnNldFkgPSBpc0ZpeGVkICYmIG9mZnNldFBhcmVudCA9PT0gd2luICYmIHdpbi52aXN1YWxWaWV3cG9ydCA/IHdpbi52aXN1YWxWaWV3cG9ydC5oZWlnaHQgOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICAgIG9mZnNldFBhcmVudFtoZWlnaHRQcm9wXTtcbiAgICAgIHkgLT0gb2Zmc2V0WSAtIHBvcHBlclJlY3QuaGVpZ2h0O1xuICAgICAgeSAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gbGVmdCB8fCAocGxhY2VtZW50ID09PSB0b3AgfHwgcGxhY2VtZW50ID09PSBib3R0b20pICYmIHZhcmlhdGlvbiA9PT0gZW5kKSB7XG4gICAgICBzaWRlWCA9IHJpZ2h0O1xuICAgICAgdmFyIG9mZnNldFggPSBpc0ZpeGVkICYmIG9mZnNldFBhcmVudCA9PT0gd2luICYmIHdpbi52aXN1YWxWaWV3cG9ydCA/IHdpbi52aXN1YWxWaWV3cG9ydC53aWR0aCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgICAgb2Zmc2V0UGFyZW50W3dpZHRoUHJvcF07XG4gICAgICB4IC09IG9mZnNldFggLSBwb3BwZXJSZWN0LndpZHRoO1xuICAgICAgeCAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbW1vblN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHBvc2l0aW9uOiBwb3NpdGlvblxuICB9LCBhZGFwdGl2ZSAmJiB1bnNldFNpZGVzKTtcblxuICB2YXIgX3JlZjQgPSByb3VuZE9mZnNldHMgPT09IHRydWUgPyByb3VuZE9mZnNldHNCeURQUih7XG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH0sIGdldFdpbmRvdyhwb3BwZXIpKSA6IHtcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcblxuICB4ID0gX3JlZjQueDtcbiAgeSA9IF9yZWY0Lnk7XG5cbiAgaWYgKGdwdUFjY2VsZXJhdGlvbikge1xuICAgIHZhciBfT2JqZWN0JGFzc2lnbjtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbiA9IHt9LCBfT2JqZWN0JGFzc2lnbltzaWRlWV0gPSBoYXNZID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduW3NpZGVYXSA9IGhhc1ggPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ24udHJhbnNmb3JtID0gKHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpIDw9IDEgPyBcInRyYW5zbGF0ZShcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4KVwiIDogXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4LCAwKVwiLCBfT2JqZWN0JGFzc2lnbikpO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduMiA9IHt9LCBfT2JqZWN0JGFzc2lnbjJbc2lkZVldID0gaGFzWSA/IHkgKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yW3NpZGVYXSA9IGhhc1ggPyB4ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMi50cmFuc2Zvcm0gPSAnJywgX09iamVjdCRhc3NpZ24yKSk7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVTdHlsZXMoX3JlZjUpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjUuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjUub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9IG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZ3B1QWNjZWxlcmF0LFxuICAgICAgX29wdGlvbnMkYWRhcHRpdmUgPSBvcHRpb25zLmFkYXB0aXZlLFxuICAgICAgYWRhcHRpdmUgPSBfb3B0aW9ucyRhZGFwdGl2ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFkYXB0aXZlLFxuICAgICAgX29wdGlvbnMkcm91bmRPZmZzZXRzID0gb3B0aW9ucy5yb3VuZE9mZnNldHMsXG4gICAgICByb3VuZE9mZnNldHMgPSBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyb3VuZE9mZnNldHM7XG4gIHZhciBjb21tb25TdHlsZXMgPSB7XG4gICAgcGxhY2VtZW50OiBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCksXG4gICAgdmFyaWF0aW9uOiBnZXRWYXJpYXRpb24oc3RhdGUucGxhY2VtZW50KSxcbiAgICBwb3BwZXI6IHN0YXRlLmVsZW1lbnRzLnBvcHBlcixcbiAgICBwb3BwZXJSZWN0OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgZ3B1QWNjZWxlcmF0aW9uOiBncHVBY2NlbGVyYXRpb24sXG4gICAgaXNGaXhlZDogc3RhdGUub3B0aW9ucy5zdHJhdGVneSA9PT0gJ2ZpeGVkJ1xuICB9O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLnN0eWxlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMucG9wcGVyLCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgYWRhcHRpdmU6IGFkYXB0aXZlLFxuICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICB9KSkpO1xuICB9XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3cgIT0gbnVsbCkge1xuICAgIHN0YXRlLnN0eWxlcy5hcnJvdyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5hcnJvdywgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93LFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBhZGFwdGl2ZTogZmFsc2UsXG4gICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgIH0pKSk7XG4gIH1cblxuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXBsYWNlbWVudCc6IHN0YXRlLnBsYWNlbWVudFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2NvbXB1dGVTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ2JlZm9yZVdyaXRlJyxcbiAgZm46IGNvbXB1dGVTdHlsZXMsXG4gIGRhdGE6IHt9XG59OyIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRXaW5kb3cuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgcGFzc2l2ZSA9IHtcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRzY3JvbGwgPSBvcHRpb25zLnNjcm9sbCxcbiAgICAgIHNjcm9sbCA9IF9vcHRpb25zJHNjcm9sbCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHNjcm9sbCxcbiAgICAgIF9vcHRpb25zJHJlc2l6ZSA9IG9wdGlvbnMucmVzaXplLFxuICAgICAgcmVzaXplID0gX29wdGlvbnMkcmVzaXplID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcmVzaXplO1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KHN0YXRlLmVsZW1lbnRzLnBvcHBlcik7XG4gIHZhciBzY3JvbGxQYXJlbnRzID0gW10uY29uY2F0KHN0YXRlLnNjcm9sbFBhcmVudHMucmVmZXJlbmNlLCBzdGF0ZS5zY3JvbGxQYXJlbnRzLnBvcHBlcik7XG5cbiAgaWYgKHNjcm9sbCkge1xuICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICBzY3JvbGxQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChyZXNpemUpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgICAgc2Nyb2xsUGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVzaXplKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdldmVudExpc3RlbmVycycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogZnVuY3Rpb24gZm4oKSB7fSxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIGRhdGE6IHt9XG59OyIsInZhciBoYXNoID0ge1xuICBsZWZ0OiAncmlnaHQnLFxuICByaWdodDogJ2xlZnQnLFxuICBib3R0b206ICd0b3AnLFxuICB0b3A6ICdib3R0b20nXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gIH0pO1xufSIsInZhciBoYXNoID0ge1xuICBzdGFydDogJ2VuZCcsXG4gIGVuZDogJ3N0YXJ0J1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsKG5vZGUpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhub2RlKTtcbiAgdmFyIHNjcm9sbExlZnQgPSB3aW4ucGFnZVhPZmZzZXQ7XG4gIHZhciBzY3JvbGxUb3AgPSB3aW4ucGFnZVlPZmZzZXQ7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IHNjcm9sbFRvcFxuICB9O1xufSIsImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCkge1xuICAvLyBJZiA8aHRtbD4gaGFzIGEgQ1NTIHdpZHRoIGdyZWF0ZXIgdGhhbiB0aGUgdmlld3BvcnQsIHRoZW4gdGhpcyB3aWxsIGJlXG4gIC8vIGluY29ycmVjdCBmb3IgUlRMLlxuICAvLyBQb3BwZXIgMSBpcyBicm9rZW4gaW4gdGhpcyBjYXNlIGFuZCBuZXZlciBoYWQgYSBidWcgcmVwb3J0IHNvIGxldCdzIGFzc3VtZVxuICAvLyBpdCdzIG5vdCBhbiBpc3N1ZS4gSSBkb24ndCB0aGluayBhbnlvbmUgZXZlciBzcGVjaWZpZXMgd2lkdGggb24gPGh0bWw+XG4gIC8vIGFueXdheS5cbiAgLy8gQnJvd3NlcnMgd2hlcmUgdGhlIGxlZnQgc2Nyb2xsYmFyIGRvZXNuJ3QgY2F1c2UgYW4gaXNzdWUgcmVwb3J0IGAwYCBmb3JcbiAgLy8gdGhpcyAoZS5nLiBFZGdlIDIwMTksIElFMTEsIFNhZmFyaSlcbiAgcmV0dXJuIGdldEJvdW5kaW5nQ2xpZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpLmxlZnQgKyBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCkuc2Nyb2xsTGVmdDtcbn0iLCJpbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1Njcm9sbFBhcmVudChlbGVtZW50KSB7XG4gIC8vIEZpcmVmb3ggd2FudHMgdXMgdG8gY2hlY2sgYC14YCBhbmQgYC15YCB2YXJpYXRpb25zIGFzIHdlbGxcbiAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSxcbiAgICAgIG92ZXJmbG93ID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3csXG4gICAgICBvdmVyZmxvd1ggPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1gsXG4gICAgICBvdmVyZmxvd1kgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1k7XG5cbiAgcmV0dXJuIC9hdXRvfHNjcm9sbHxvdmVybGF5fGhpZGRlbi8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCk7XG59IiwiaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQobm9kZSkge1xuICBpZiAoWydodG1sJywgJ2JvZHknLCAnI2RvY3VtZW50J10uaW5kZXhPZihnZXROb2RlTmFtZShub2RlKSkgPj0gMCkge1xuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XG4gIH1cblxuICBpZiAoaXNIVE1MRWxlbWVudChub2RlKSAmJiBpc1Njcm9sbFBhcmVudChub2RlKSkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcmV0dXJuIGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKG5vZGUpKTtcbn0iLCJpbXBvcnQgZ2V0U2Nyb2xsUGFyZW50IGZyb20gXCIuL2dldFNjcm9sbFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiO1xuLypcbmdpdmVuIGEgRE9NIGVsZW1lbnQsIHJldHVybiB0aGUgbGlzdCBvZiBhbGwgc2Nyb2xsIHBhcmVudHMsIHVwIHRoZSBsaXN0IG9mIGFuY2Vzb3JzXG51bnRpbCB3ZSBnZXQgdG8gdGhlIHRvcCB3aW5kb3cgb2JqZWN0LiBUaGlzIGxpc3QgaXMgd2hhdCB3ZSBhdHRhY2ggc2Nyb2xsIGxpc3RlbmVyc1xudG8sIGJlY2F1c2UgaWYgYW55IG9mIHRoZXNlIHBhcmVudCBlbGVtZW50cyBzY3JvbGwsIHdlJ2xsIG5lZWQgdG8gcmUtY2FsY3VsYXRlIHRoZVxucmVmZXJlbmNlIGVsZW1lbnQncyBwb3NpdGlvbi5cbiovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RTY3JvbGxQYXJlbnRzKGVsZW1lbnQsIGxpc3QpIHtcbiAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICBpZiAobGlzdCA9PT0gdm9pZCAwKSB7XG4gICAgbGlzdCA9IFtdO1xuICB9XG5cbiAgdmFyIHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChlbGVtZW50KTtcbiAgdmFyIGlzQm9keSA9IHNjcm9sbFBhcmVudCA9PT0gKChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keSk7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coc2Nyb2xsUGFyZW50KTtcbiAgdmFyIHRhcmdldCA9IGlzQm9keSA/IFt3aW5dLmNvbmNhdCh3aW4udmlzdWFsVmlld3BvcnQgfHwgW10sIGlzU2Nyb2xsUGFyZW50KHNjcm9sbFBhcmVudCkgPyBzY3JvbGxQYXJlbnQgOiBbXSkgOiBzY3JvbGxQYXJlbnQ7XG4gIHZhciB1cGRhdGVkTGlzdCA9IGxpc3QuY29uY2F0KHRhcmdldCk7XG4gIHJldHVybiBpc0JvZHkgPyB1cGRhdGVkTGlzdCA6IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBpc0JvZHkgdGVsbHMgdXMgdGFyZ2V0IHdpbGwgYmUgYW4gSFRNTEVsZW1lbnQgaGVyZVxuICB1cGRhdGVkTGlzdC5jb25jYXQobGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZSh0YXJnZXQpKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVjdFRvQ2xpZW50UmVjdChyZWN0KSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByZWN0LCB7XG4gICAgbGVmdDogcmVjdC54LFxuICAgIHRvcDogcmVjdC55LFxuICAgIHJpZ2h0OiByZWN0LnggKyByZWN0LndpZHRoLFxuICAgIGJvdHRvbTogcmVjdC55ICsgcmVjdC5oZWlnaHRcbiAgfSk7XG59IiwiaW1wb3J0IHsgdmlld3BvcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRWaWV3cG9ydFJlY3QgZnJvbSBcIi4vZ2V0Vmlld3BvcnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRSZWN0IGZyb20gXCIuL2dldERvY3VtZW50UmVjdC5qc1wiO1xuaW1wb3J0IGxpc3RTY3JvbGxQYXJlbnRzIGZyb20gXCIuL2xpc3RTY3JvbGxQYXJlbnRzLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgY29udGFpbnMgZnJvbSBcIi4vY29udGFpbnMuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHJlY3RUb0NsaWVudFJlY3QgZnJvbSBcIi4uL3V0aWxzL3JlY3RUb0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCB7IG1heCwgbWluIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcblxuZnVuY3Rpb24gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpIHtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgZmFsc2UsIHN0cmF0ZWd5ID09PSAnZml4ZWQnKTtcbiAgcmVjdC50b3AgPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50VG9wO1xuICByZWN0LmxlZnQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG4gIHJlY3QuYm90dG9tID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC5yaWdodCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3Qud2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LmhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnggPSByZWN0LmxlZnQ7XG4gIHJlY3QueSA9IHJlY3QudG9wO1xuICByZXR1cm4gcmVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KSB7XG4gIHJldHVybiBjbGlwcGluZ1BhcmVudCA9PT0gdmlld3BvcnQgPyByZWN0VG9DbGllbnRSZWN0KGdldFZpZXdwb3J0UmVjdChlbGVtZW50LCBzdHJhdGVneSkpIDogaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSA/IGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGNsaXBwaW5nUGFyZW50LCBzdHJhdGVneSkgOiByZWN0VG9DbGllbnRSZWN0KGdldERvY3VtZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpKTtcbn0gLy8gQSBcImNsaXBwaW5nIHBhcmVudFwiIGlzIGFuIG92ZXJmbG93YWJsZSBjb250YWluZXIgd2l0aCB0aGUgY2hhcmFjdGVyaXN0aWMgb2Zcbi8vIGNsaXBwaW5nIChvciBoaWRpbmcpIG92ZXJmbG93aW5nIGVsZW1lbnRzIHdpdGggYSBwb3NpdGlvbiBkaWZmZXJlbnQgZnJvbVxuLy8gYGluaXRpYWxgXG5cblxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIHtcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xuICB2YXIgY2FuRXNjYXBlQ2xpcHBpbmcgPSBbJ2Fic29sdXRlJywgJ2ZpeGVkJ10uaW5kZXhPZihnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uKSA+PSAwO1xuICB2YXIgY2xpcHBlckVsZW1lbnQgPSBjYW5Fc2NhcGVDbGlwcGluZyAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpID8gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIDogZWxlbWVudDtcblxuICBpZiAoIWlzRWxlbWVudChjbGlwcGVyRWxlbWVudCkpIHtcbiAgICByZXR1cm4gW107XG4gIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzE0MTRcblxuXG4gIHJldHVybiBjbGlwcGluZ1BhcmVudHMuZmlsdGVyKGZ1bmN0aW9uIChjbGlwcGluZ1BhcmVudCkge1xuICAgIHJldHVybiBpc0VsZW1lbnQoY2xpcHBpbmdQYXJlbnQpICYmIGNvbnRhaW5zKGNsaXBwaW5nUGFyZW50LCBjbGlwcGVyRWxlbWVudCkgJiYgZ2V0Tm9kZU5hbWUoY2xpcHBpbmdQYXJlbnQpICE9PSAnYm9keSc7XG4gIH0pO1xufSAvLyBHZXRzIHRoZSBtYXhpbXVtIGFyZWEgdGhhdCB0aGUgZWxlbWVudCBpcyB2aXNpYmxlIGluIGR1ZSB0byBhbnkgbnVtYmVyIG9mXG4vLyBjbGlwcGluZyBwYXJlbnRzXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q2xpcHBpbmdSZWN0KGVsZW1lbnQsIGJvdW5kYXJ5LCByb290Qm91bmRhcnksIHN0cmF0ZWd5KSB7XG4gIHZhciBtYWluQ2xpcHBpbmdQYXJlbnRzID0gYm91bmRhcnkgPT09ICdjbGlwcGluZ1BhcmVudHMnID8gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIDogW10uY29uY2F0KGJvdW5kYXJ5KTtcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IFtdLmNvbmNhdChtYWluQ2xpcHBpbmdQYXJlbnRzLCBbcm9vdEJvdW5kYXJ5XSk7XG4gIHZhciBmaXJzdENsaXBwaW5nUGFyZW50ID0gY2xpcHBpbmdQYXJlbnRzWzBdO1xuICB2YXIgY2xpcHBpbmdSZWN0ID0gY2xpcHBpbmdQYXJlbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjUmVjdCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgICB2YXIgcmVjdCA9IGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50LCBzdHJhdGVneSk7XG4gICAgYWNjUmVjdC50b3AgPSBtYXgocmVjdC50b3AsIGFjY1JlY3QudG9wKTtcbiAgICBhY2NSZWN0LnJpZ2h0ID0gbWluKHJlY3QucmlnaHQsIGFjY1JlY3QucmlnaHQpO1xuICAgIGFjY1JlY3QuYm90dG9tID0gbWluKHJlY3QuYm90dG9tLCBhY2NSZWN0LmJvdHRvbSk7XG4gICAgYWNjUmVjdC5sZWZ0ID0gbWF4KHJlY3QubGVmdCwgYWNjUmVjdC5sZWZ0KTtcbiAgICByZXR1cm4gYWNjUmVjdDtcbiAgfSwgZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgZmlyc3RDbGlwcGluZ1BhcmVudCwgc3RyYXRlZ3kpKTtcbiAgY2xpcHBpbmdSZWN0LndpZHRoID0gY2xpcHBpbmdSZWN0LnJpZ2h0IC0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC5oZWlnaHQgPSBjbGlwcGluZ1JlY3QuYm90dG9tIC0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgY2xpcHBpbmdSZWN0LnggPSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LnkgPSBjbGlwcGluZ1JlY3QudG9wO1xuICByZXR1cm4gY2xpcHBpbmdSZWN0O1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuaW1wb3J0IGlzTGF5b3V0Vmlld3BvcnQgZnJvbSBcIi4vaXNMYXlvdXRWaWV3cG9ydC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgdmlzdWFsVmlld3BvcnQgPSB3aW4udmlzdWFsVmlld3BvcnQ7XG4gIHZhciB3aWR0aCA9IGh0bWwuY2xpZW50V2lkdGg7XG4gIHZhciBoZWlnaHQgPSBodG1sLmNsaWVudEhlaWdodDtcbiAgdmFyIHggPSAwO1xuICB2YXIgeSA9IDA7XG5cbiAgaWYgKHZpc3VhbFZpZXdwb3J0KSB7XG4gICAgd2lkdGggPSB2aXN1YWxWaWV3cG9ydC53aWR0aDtcbiAgICBoZWlnaHQgPSB2aXN1YWxWaWV3cG9ydC5oZWlnaHQ7XG4gICAgdmFyIGxheW91dFZpZXdwb3J0ID0gaXNMYXlvdXRWaWV3cG9ydCgpO1xuXG4gICAgaWYgKGxheW91dFZpZXdwb3J0IHx8ICFsYXlvdXRWaWV3cG9ydCAmJiBzdHJhdGVneSA9PT0gJ2ZpeGVkJykge1xuICAgICAgeCA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQ7XG4gICAgICB5ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHg6IHggKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpLFxuICAgIHk6IHlcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmltcG9ydCB7IG1heCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7IC8vIEdldHMgdGhlIGVudGlyZSBzaXplIG9mIHRoZSBzY3JvbGxhYmxlIGRvY3VtZW50IGFyZWEsIGV2ZW4gZXh0ZW5kaW5nIG91dHNpZGVcbi8vIG9mIHRoZSBgPGh0bWw+YCBhbmQgYDxib2R5PmAgcmVjdCBib3VuZHMgaWYgaG9yaXpvbnRhbGx5IHNjcm9sbGFibGVcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RG9jdW1lbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIHdpblNjcm9sbCA9IGdldFdpbmRvd1Njcm9sbChlbGVtZW50KTtcbiAgdmFyIGJvZHkgPSAoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHk7XG4gIHZhciB3aWR0aCA9IG1heChodG1sLnNjcm9sbFdpZHRoLCBodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5zY3JvbGxXaWR0aCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCk7XG4gIHZhciBoZWlnaHQgPSBtYXgoaHRtbC5zY3JvbGxIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0LCBib2R5ID8gYm9keS5zY3JvbGxIZWlnaHQgOiAwLCBib2R5ID8gYm9keS5jbGllbnRIZWlnaHQgOiAwKTtcbiAgdmFyIHggPSAtd2luU2Nyb2xsLnNjcm9sbExlZnQgKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpO1xuICB2YXIgeSA9IC13aW5TY3JvbGwuc2Nyb2xsVG9wO1xuXG4gIGlmIChnZXRDb21wdXRlZFN0eWxlKGJvZHkgfHwgaHRtbCkuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgIHggKz0gbWF4KGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCkgLSB3aWR0aDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHg6IHgsXG4gICAgeTogeVxuICB9O1xufSIsImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4vZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0LCBzdGFydCwgZW5kIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciByZWZlcmVuY2UgPSBfcmVmLnJlZmVyZW5jZSxcbiAgICAgIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQgPyBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgdmFyaWF0aW9uID0gcGxhY2VtZW50ID8gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgY29tbW9uWCA9IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoIC8gMiAtIGVsZW1lbnQud2lkdGggLyAyO1xuICB2YXIgY29tbW9uWSA9IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodCAvIDIgLSBlbGVtZW50LmhlaWdodCAvIDI7XG4gIHZhciBvZmZzZXRzO1xuXG4gIHN3aXRjaCAoYmFzZVBsYWNlbWVudCkge1xuICAgIGNhc2UgdG9wOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgLSBlbGVtZW50LmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBib3R0b206XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcmlnaHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBsZWZ0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggLSBlbGVtZW50LndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLngsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55XG4gICAgICB9O1xuICB9XG5cbiAgdmFyIG1haW5BeGlzID0gYmFzZVBsYWNlbWVudCA/IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KSA6IG51bGw7XG5cbiAgaWYgKG1haW5BeGlzICE9IG51bGwpIHtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHN3aXRjaCAodmFyaWF0aW9uKSB7XG4gICAgICBjYXNlIHN0YXJ0OlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdIC0gKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBlbmQ6XG4gICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gKyAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvZmZzZXRzO1xufSIsImltcG9ydCBnZXRDbGlwcGluZ1JlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRDbGlwcGluZ1JlY3QuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBjb21wdXRlT2Zmc2V0cyBmcm9tIFwiLi9jb21wdXRlT2Zmc2V0cy5qc1wiO1xuaW1wb3J0IHJlY3RUb0NsaWVudFJlY3QgZnJvbSBcIi4vcmVjdFRvQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IHsgY2xpcHBpbmdQYXJlbnRzLCByZWZlcmVuY2UsIHBvcHBlciwgYm90dG9tLCB0b3AsIHJpZ2h0LCBiYXNlUGxhY2VtZW50cywgdmlld3BvcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IG1lcmdlUGFkZGluZ09iamVjdCBmcm9tIFwiLi9tZXJnZVBhZGRpbmdPYmplY3QuanNcIjtcbmltcG9ydCBleHBhbmRUb0hhc2hNYXAgZnJvbSBcIi4vZXhwYW5kVG9IYXNoTWFwLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBfb3B0aW9ucyRwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucyRwbGFjZW1lbnQgPT09IHZvaWQgMCA/IHN0YXRlLnBsYWNlbWVudCA6IF9vcHRpb25zJHBsYWNlbWVudCxcbiAgICAgIF9vcHRpb25zJHN0cmF0ZWd5ID0gX29wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICBzdHJhdGVneSA9IF9vcHRpb25zJHN0cmF0ZWd5ID09PSB2b2lkIDAgPyBzdGF0ZS5zdHJhdGVneSA6IF9vcHRpb25zJHN0cmF0ZWd5LFxuICAgICAgX29wdGlvbnMkYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMkYm91bmRhcnkgPT09IHZvaWQgMCA/IGNsaXBwaW5nUGFyZW50cyA6IF9vcHRpb25zJGJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyB2aWV3cG9ydCA6IF9vcHRpb25zJHJvb3RCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJGVsZW1lbnRDb250ZSA9IF9vcHRpb25zLmVsZW1lbnRDb250ZXh0LFxuICAgICAgZWxlbWVudENvbnRleHQgPSBfb3B0aW9ucyRlbGVtZW50Q29udGUgPT09IHZvaWQgMCA/IHBvcHBlciA6IF9vcHRpb25zJGVsZW1lbnRDb250ZSxcbiAgICAgIF9vcHRpb25zJGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IF9vcHRpb25zJGFsdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMkcGFkZGluZyA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHBhZGRpbmc7XG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbiAgdmFyIGFsdENvbnRleHQgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcmVmZXJlbmNlIDogcG9wcGVyO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1thbHRCb3VuZGFyeSA/IGFsdENvbnRleHQgOiBlbGVtZW50Q29udGV4dF07XG4gIHZhciBjbGlwcGluZ0NsaWVudFJlY3QgPSBnZXRDbGlwcGluZ1JlY3QoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudCA6IGVsZW1lbnQuY29udGV4dEVsZW1lbnQgfHwgZ2V0RG9jdW1lbnRFbGVtZW50KHN0YXRlLmVsZW1lbnRzLnBvcHBlciksIGJvdW5kYXJ5LCByb290Qm91bmRhcnksIHN0cmF0ZWd5KTtcbiAgdmFyIHJlZmVyZW5jZUNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qoc3RhdGUuZWxlbWVudHMucmVmZXJlbmNlKTtcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiByZWZlcmVuY2VDbGllbnRSZWN0LFxuICAgIGVsZW1lbnQ6IHBvcHBlclJlY3QsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgfSk7XG4gIHZhciBwb3BwZXJDbGllbnRSZWN0ID0gcmVjdFRvQ2xpZW50UmVjdChPYmplY3QuYXNzaWduKHt9LCBwb3BwZXJSZWN0LCBwb3BwZXJPZmZzZXRzKSk7XG4gIHZhciBlbGVtZW50Q2xpZW50UmVjdCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyBwb3BwZXJDbGllbnRSZWN0IDogcmVmZXJlbmNlQ2xpZW50UmVjdDsgLy8gcG9zaXRpdmUgPSBvdmVyZmxvd2luZyB0aGUgY2xpcHBpbmcgcmVjdFxuICAvLyAwIG9yIG5lZ2F0aXZlID0gd2l0aGluIHRoZSBjbGlwcGluZyByZWN0XG5cbiAgdmFyIG92ZXJmbG93T2Zmc2V0cyA9IHtcbiAgICB0b3A6IGNsaXBwaW5nQ2xpZW50UmVjdC50b3AgLSBlbGVtZW50Q2xpZW50UmVjdC50b3AgKyBwYWRkaW5nT2JqZWN0LnRvcCxcbiAgICBib3R0b206IGVsZW1lbnRDbGllbnRSZWN0LmJvdHRvbSAtIGNsaXBwaW5nQ2xpZW50UmVjdC5ib3R0b20gKyBwYWRkaW5nT2JqZWN0LmJvdHRvbSxcbiAgICBsZWZ0OiBjbGlwcGluZ0NsaWVudFJlY3QubGVmdCAtIGVsZW1lbnRDbGllbnRSZWN0LmxlZnQgKyBwYWRkaW5nT2JqZWN0LmxlZnQsXG4gICAgcmlnaHQ6IGVsZW1lbnRDbGllbnRSZWN0LnJpZ2h0IC0gY2xpcHBpbmdDbGllbnRSZWN0LnJpZ2h0ICsgcGFkZGluZ09iamVjdC5yaWdodFxuICB9O1xuICB2YXIgb2Zmc2V0RGF0YSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0OyAvLyBPZmZzZXRzIGNhbiBiZSBhcHBsaWVkIG9ubHkgdG8gdGhlIHBvcHBlciBlbGVtZW50XG5cbiAgaWYgKGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgJiYgb2Zmc2V0RGF0YSkge1xuICAgIHZhciBvZmZzZXQgPSBvZmZzZXREYXRhW3BsYWNlbWVudF07XG4gICAgT2JqZWN0LmtleXMob3ZlcmZsb3dPZmZzZXRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtdWx0aXBseSA9IFtyaWdodCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/IDEgOiAtMTtcbiAgICAgIHZhciBheGlzID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/ICd5JyA6ICd4JztcbiAgICAgIG92ZXJmbG93T2Zmc2V0c1trZXldICs9IG9mZnNldFtheGlzXSAqIG11bHRpcGx5O1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG92ZXJmbG93T2Zmc2V0cztcbn0iLCJpbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IHsgdmFyaWF0aW9uUGxhY2VtZW50cywgYmFzZVBsYWNlbWVudHMsIHBsYWNlbWVudHMgYXMgYWxsUGxhY2VtZW50cyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPSBfb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPT09IHZvaWQgMCA/IGFsbFBsYWNlbWVudHMgOiBfb3B0aW9ucyRhbGxvd2VkQXV0b1A7XG4gIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KTtcbiAgdmFyIHBsYWNlbWVudHMgPSB2YXJpYXRpb24gPyBmbGlwVmFyaWF0aW9ucyA/IHZhcmlhdGlvblBsYWNlbWVudHMgOiB2YXJpYXRpb25QbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSB2YXJpYXRpb247XG4gIH0pIDogYmFzZVBsYWNlbWVudHM7XG4gIHZhciBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWxsb3dlZEF1dG9QbGFjZW1lbnRzLmluZGV4T2YocGxhY2VtZW50KSA+PSAwO1xuICB9KTtcblxuICBpZiAoYWxsb3dlZFBsYWNlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzO1xuICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdOiBGbG93IHNlZW1zIHRvIGhhdmUgcHJvYmxlbXMgd2l0aCB0d28gYXJyYXkgdW5pb25zLi4uXG5cblxuICB2YXIgb3ZlcmZsb3dzID0gYWxsb3dlZFBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgfSlbZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpXTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvdmVyZmxvd3MpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dzW2FdIC0gb3ZlcmZsb3dzW2JdO1xuICB9KTtcbn0iLCJpbXBvcnQgZ2V0T3Bwb3NpdGVQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVBdXRvUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgYm90dG9tLCB0b3AsIHN0YXJ0LCByaWdodCwgbGVmdCwgYXV0byB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZnVuY3Rpb24gZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocGxhY2VtZW50KSB7XG4gIGlmIChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgb3Bwb3NpdGVQbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICByZXR1cm4gW2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCksIG9wcG9zaXRlUGxhY2VtZW50LCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChvcHBvc2l0ZVBsYWNlbWVudCldO1xufVxuXG5mdW5jdGlvbiBmbGlwKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzID0gb3B0aW9ucy5mYWxsYmFja1BsYWNlbWVudHMsXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPSBvcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRmbGlwVmFyaWF0aW8sXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBvcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cztcbiAgdmFyIHByZWZlcnJlZFBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KTtcbiAgdmFyIGlzQmFzZVBsYWNlbWVudCA9IGJhc2VQbGFjZW1lbnQgPT09IHByZWZlcnJlZFBsYWNlbWVudDtcbiAgdmFyIGZhbGxiYWNrUGxhY2VtZW50cyA9IHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyB8fCAoaXNCYXNlUGxhY2VtZW50IHx8ICFmbGlwVmFyaWF0aW9ucyA/IFtnZXRPcHBvc2l0ZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpXSA6IGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHByZWZlcnJlZFBsYWNlbWVudCkpO1xuICB2YXIgcGxhY2VtZW50cyA9IFtwcmVmZXJyZWRQbGFjZW1lbnRdLmNvbmNhdChmYWxsYmFja1BsYWNlbWVudHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8gPyBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9uczogZmxpcFZhcmlhdGlvbnMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHM6IGFsbG93ZWRBdXRvUGxhY2VtZW50c1xuICAgIH0pIDogcGxhY2VtZW50KTtcbiAgfSwgW10pO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBjaGVja3NNYXAgPSBuZXcgTWFwKCk7XG4gIHZhciBtYWtlRmFsbGJhY2tDaGVja3MgPSB0cnVlO1xuICB2YXIgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50c1swXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBsYWNlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGxhY2VtZW50ID0gcGxhY2VtZW50c1tpXTtcblxuICAgIHZhciBfYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcblxuICAgIHZhciBpc1N0YXJ0VmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHN0YXJ0O1xuICAgIHZhciBpc1ZlcnRpY2FsID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKF9iYXNlUGxhY2VtZW50KSA+PSAwO1xuICAgIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuICAgIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pO1xuICAgIHZhciBtYWluVmFyaWF0aW9uU2lkZSA9IGlzVmVydGljYWwgPyBpc1N0YXJ0VmFyaWF0aW9uID8gcmlnaHQgOiBsZWZ0IDogaXNTdGFydFZhcmlhdGlvbiA/IGJvdHRvbSA6IHRvcDtcblxuICAgIGlmIChyZWZlcmVuY2VSZWN0W2xlbl0gPiBwb3BwZXJSZWN0W2xlbl0pIHtcbiAgICAgIG1haW5WYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIH1cblxuICAgIHZhciBhbHRWYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIHZhciBjaGVja3MgPSBbXTtcblxuICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1tfYmFzZVBsYWNlbWVudF0gPD0gMCk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbbWFpblZhcmlhdGlvblNpZGVdIDw9IDAsIG92ZXJmbG93W2FsdFZhcmlhdGlvblNpZGVdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja3MuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICByZXR1cm4gY2hlY2s7XG4gICAgfSkpIHtcbiAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICAgIG1ha2VGYWxsYmFja0NoZWNrcyA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2hlY2tzTWFwLnNldChwbGFjZW1lbnQsIGNoZWNrcyk7XG4gIH1cblxuICBpZiAobWFrZUZhbGxiYWNrQ2hlY2tzKSB7XG4gICAgLy8gYDJgIG1heSBiZSBkZXNpcmVkIGluIHNvbWUgY2FzZXMg4oCTIHJlc2VhcmNoIGxhdGVyXG4gICAgdmFyIG51bWJlck9mQ2hlY2tzID0gZmxpcFZhcmlhdGlvbnMgPyAzIDogMTtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKF9pKSB7XG4gICAgICB2YXIgZml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHMuZmluZChmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgICAgIHZhciBjaGVja3MgPSBjaGVja3NNYXAuZ2V0KHBsYWNlbWVudCk7XG5cbiAgICAgICAgaWYgKGNoZWNrcykge1xuICAgICAgICAgIHJldHVybiBjaGVja3Muc2xpY2UoMCwgX2kpLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gZml0dGluZ1BsYWNlbWVudDtcbiAgICAgICAgcmV0dXJuIFwiYnJlYWtcIjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9yICh2YXIgX2kgPSBudW1iZXJPZkNoZWNrczsgX2kgPiAwOyBfaS0tKSB7XG4gICAgICB2YXIgX3JldCA9IF9sb29wKF9pKTtcblxuICAgICAgaWYgKF9yZXQgPT09IFwiYnJlYWtcIikgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLnBsYWNlbWVudCAhPT0gZmlyc3RGaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCA9IHRydWU7XG4gICAgc3RhdGUucGxhY2VtZW50ID0gZmlyc3RGaXR0aW5nUGxhY2VtZW50O1xuICAgIHN0YXRlLnJlc2V0ID0gdHJ1ZTtcbiAgfVxufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnZmxpcCcsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBmbGlwLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddLFxuICBkYXRhOiB7XG4gICAgX3NraXA6IGZhbHNlXG4gIH1cbn07IiwiaW1wb3J0IHsgdG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5cbmZ1bmN0aW9uIGdldFNpZGVPZmZzZXRzKG92ZXJmbG93LCByZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKSB7XG4gIGlmIChwcmV2ZW50ZWRPZmZzZXRzID09PSB2b2lkIDApIHtcbiAgICBwcmV2ZW50ZWRPZmZzZXRzID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0b3A6IG92ZXJmbG93LnRvcCAtIHJlY3QuaGVpZ2h0IC0gcHJldmVudGVkT2Zmc2V0cy55LFxuICAgIHJpZ2h0OiBvdmVyZmxvdy5yaWdodCAtIHJlY3Qud2lkdGggKyBwcmV2ZW50ZWRPZmZzZXRzLngsXG4gICAgYm90dG9tOiBvdmVyZmxvdy5ib3R0b20gLSByZWN0LmhlaWdodCArIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICBsZWZ0OiBvdmVyZmxvdy5sZWZ0IC0gcmVjdC53aWR0aCAtIHByZXZlbnRlZE9mZnNldHMueFxuICB9O1xufVxuXG5mdW5jdGlvbiBpc0FueVNpZGVGdWxseUNsaXBwZWQob3ZlcmZsb3cpIHtcbiAgcmV0dXJuIFt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRdLnNvbWUoZnVuY3Rpb24gKHNpZGUpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dbc2lkZV0gPj0gMDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhpZGUoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgcHJldmVudGVkT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucHJldmVudE92ZXJmbG93O1xuICB2YXIgcmVmZXJlbmNlT3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGVsZW1lbnRDb250ZXh0OiAncmVmZXJlbmNlJ1xuICB9KTtcbiAgdmFyIHBvcHBlckFsdE92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBhbHRCb3VuZGFyeTogdHJ1ZVxuICB9KTtcbiAgdmFyIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHJlZmVyZW5jZU92ZXJmbG93LCByZWZlcmVuY2VSZWN0KTtcbiAgdmFyIHBvcHBlckVzY2FwZU9mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhwb3BwZXJBbHRPdmVyZmxvdywgcG9wcGVyUmVjdCwgcHJldmVudGVkT2Zmc2V0cyk7XG4gIHZhciBpc1JlZmVyZW5jZUhpZGRlbiA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChyZWZlcmVuY2VDbGlwcGluZ09mZnNldHMpO1xuICB2YXIgaGFzUG9wcGVyRXNjYXBlZCA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChwb3BwZXJFc2NhcGVPZmZzZXRzKTtcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IHtcbiAgICByZWZlcmVuY2VDbGlwcGluZ09mZnNldHM6IHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyxcbiAgICBwb3BwZXJFc2NhcGVPZmZzZXRzOiBwb3BwZXJFc2NhcGVPZmZzZXRzLFxuICAgIGlzUmVmZXJlbmNlSGlkZGVuOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICBoYXNQb3BwZXJFc2NhcGVkOiBoYXNQb3BwZXJFc2NhcGVkXG4gIH07XG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAnZGF0YS1wb3BwZXItcmVmZXJlbmNlLWhpZGRlbic6IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgICdkYXRhLXBvcHBlci1lc2NhcGVkJzogaGFzUG9wcGVyRXNjYXBlZFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2hpZGUnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddLFxuICBmbjogaGlkZVxufTsiLCJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgcGxhY2VtZW50cyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHJlY3RzLCBvZmZzZXQpIHtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHZhciBpbnZlcnREaXN0YW5jZSA9IFtsZWZ0LCB0b3BdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IC0xIDogMTtcblxuICB2YXIgX3JlZiA9IHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicgPyBvZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgcmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9KSkgOiBvZmZzZXQsXG4gICAgICBza2lkZGluZyA9IF9yZWZbMF0sXG4gICAgICBkaXN0YW5jZSA9IF9yZWZbMV07XG5cbiAgc2tpZGRpbmcgPSBza2lkZGluZyB8fCAwO1xuICBkaXN0YW5jZSA9IChkaXN0YW5jZSB8fCAwKSAqIGludmVydERpc3RhbmNlO1xuICByZXR1cm4gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyB7XG4gICAgeDogZGlzdGFuY2UsXG4gICAgeTogc2tpZGRpbmdcbiAgfSA6IHtcbiAgICB4OiBza2lkZGluZyxcbiAgICB5OiBkaXN0YW5jZVxuICB9O1xufVxuXG5mdW5jdGlvbiBvZmZzZXQoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmMi5uYW1lO1xuICB2YXIgX29wdGlvbnMkb2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQsXG4gICAgICBvZmZzZXQgPSBfb3B0aW9ucyRvZmZzZXQgPT09IHZvaWQgMCA/IFswLCAwXSA6IF9vcHRpb25zJG9mZnNldDtcbiAgdmFyIGRhdGEgPSBwbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgc3RhdGUucmVjdHMsIG9mZnNldCk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICB2YXIgX2RhdGEkc3RhdGUkcGxhY2VtZW50ID0gZGF0YVtzdGF0ZS5wbGFjZW1lbnRdLFxuICAgICAgeCA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC54LFxuICAgICAgeSA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC55O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy54ICs9IHg7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnkgKz0geTtcbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnb2Zmc2V0JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICBmbjogb2Zmc2V0XG59OyIsImltcG9ydCBjb21wdXRlT2Zmc2V0cyBmcm9tIFwiLi4vdXRpbHMvY29tcHV0ZU9mZnNldHMuanNcIjtcblxuZnVuY3Rpb24gcG9wcGVyT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICAvLyBPZmZzZXRzIGFyZSB0aGUgYWN0dWFsIHBvc2l0aW9uIHRoZSBwb3BwZXIgbmVlZHMgdG8gaGF2ZSB0byBiZVxuICAvLyBwcm9wZXJseSBwb3NpdGlvbmVkIG5lYXIgaXRzIHJlZmVyZW5jZSBlbGVtZW50XG4gIC8vIFRoaXMgaXMgdGhlIG1vc3QgYmFzaWMgcGxhY2VtZW50LCBhbmQgd2lsbCBiZSBhZGp1c3RlZCBieVxuICAvLyB0aGUgbW9kaWZpZXJzIGluIHRoZSBuZXh0IHN0ZXBcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICByZWZlcmVuY2U6IHN0YXRlLnJlY3RzLnJlZmVyZW5jZSxcbiAgICBlbGVtZW50OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdwb3BwZXJPZmZzZXRzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdyZWFkJyxcbiAgZm46IHBvcHBlck9mZnNldHMsXG4gIGRhdGE6IHt9XG59OyIsImltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgc3RhcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRBbHRBeGlzIGZyb20gXCIuLi91dGlscy9nZXRBbHRBeGlzLmpzXCI7XG5pbXBvcnQgeyB3aXRoaW4sIHdpdGhpbk1heENsYW1wIH0gZnJvbSBcIi4uL3V0aWxzL3dpdGhpbi5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuLi91dGlscy9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCBnZXRGcmVzaFNpZGVPYmplY3QgZnJvbSBcIi4uL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qc1wiO1xuaW1wb3J0IHsgbWluIGFzIG1hdGhNaW4sIG1heCBhcyBtYXRoTWF4IH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcblxuZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgX29wdGlvbnMkdGV0aGVyID0gb3B0aW9ucy50ZXRoZXIsXG4gICAgICB0ZXRoZXIgPSBfb3B0aW9ucyR0ZXRoZXIgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyR0ZXRoZXIsXG4gICAgICBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPSBvcHRpb25zLnRldGhlck9mZnNldCxcbiAgICAgIHRldGhlck9mZnNldCA9IF9vcHRpb25zJHRldGhlck9mZnNldCA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHRldGhlck9mZnNldDtcbiAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgcGFkZGluZzogcGFkZGluZyxcbiAgICBhbHRCb3VuZGFyeTogYWx0Qm91bmRhcnlcbiAgfSk7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSAhdmFyaWF0aW9uO1xuICB2YXIgbWFpbkF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBhbHRBeGlzID0gZ2V0QWx0QXhpcyhtYWluQXhpcyk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciB0ZXRoZXJPZmZzZXRWYWx1ZSA9IHR5cGVvZiB0ZXRoZXJPZmZzZXQgPT09ICdmdW5jdGlvbicgPyB0ZXRoZXJPZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KSkgOiB0ZXRoZXJPZmZzZXQ7XG4gIHZhciBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0VmFsdWUgPT09ICdudW1iZXInID8ge1xuICAgIG1haW5BeGlzOiB0ZXRoZXJPZmZzZXRWYWx1ZSxcbiAgICBhbHRBeGlzOiB0ZXRoZXJPZmZzZXRWYWx1ZVxuICB9IDogT2JqZWN0LmFzc2lnbih7XG4gICAgbWFpbkF4aXM6IDAsXG4gICAgYWx0QXhpczogMFxuICB9LCB0ZXRoZXJPZmZzZXRWYWx1ZSk7XG4gIHZhciBvZmZzZXRNb2RpZmllclN0YXRlID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQgPyBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldFtzdGF0ZS5wbGFjZW1lbnRdIDogbnVsbDtcbiAgdmFyIGRhdGEgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgaWYgKCFwb3BwZXJPZmZzZXRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICB2YXIgX29mZnNldE1vZGlmaWVyU3RhdGUkO1xuXG4gICAgdmFyIG1haW5TaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gICAgdmFyIGFsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gICAgdmFyIG9mZnNldCA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdO1xuICAgIHZhciBtaW4gPSBvZmZzZXQgKyBvdmVyZmxvd1ttYWluU2lkZV07XG4gICAgdmFyIG1heCA9IG9mZnNldCAtIG92ZXJmbG93W2FsdFNpZGVdO1xuICAgIHZhciBhZGRpdGl2ZSA9IHRldGhlciA/IC1wb3BwZXJSZWN0W2xlbl0gLyAyIDogMDtcbiAgICB2YXIgbWluTGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IHJlZmVyZW5jZVJlY3RbbGVuXSA6IHBvcHBlclJlY3RbbGVuXTtcbiAgICB2YXIgbWF4TGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IC1wb3BwZXJSZWN0W2xlbl0gOiAtcmVmZXJlbmNlUmVjdFtsZW5dOyAvLyBXZSBuZWVkIHRvIGluY2x1ZGUgdGhlIGFycm93IGluIHRoZSBjYWxjdWxhdGlvbiBzbyB0aGUgYXJyb3cgZG9lc24ndCBnb1xuICAgIC8vIG91dHNpZGUgdGhlIHJlZmVyZW5jZSBib3VuZHNcblxuICAgIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgICB2YXIgYXJyb3dSZWN0ID0gdGV0aGVyICYmIGFycm93RWxlbWVudCA/IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KSA6IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwXG4gICAgfTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nT2JqZWN0ID0gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddID8gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddLnBhZGRpbmcgOiBnZXRGcmVzaFNpZGVPYmplY3QoKTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWluID0gYXJyb3dQYWRkaW5nT2JqZWN0W21haW5TaWRlXTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWF4ID0gYXJyb3dQYWRkaW5nT2JqZWN0W2FsdFNpZGVdOyAvLyBJZiB0aGUgcmVmZXJlbmNlIGxlbmd0aCBpcyBzbWFsbGVyIHRoYW4gdGhlIGFycm93IGxlbmd0aCwgd2UgZG9uJ3Qgd2FudFxuICAgIC8vIHRvIGluY2x1ZGUgaXRzIGZ1bGwgc2l6ZSBpbiB0aGUgY2FsY3VsYXRpb24uIElmIHRoZSByZWZlcmVuY2UgaXMgc21hbGxcbiAgICAvLyBhbmQgbmVhciB0aGUgZWRnZSBvZiBhIGJvdW5kYXJ5LCB0aGUgcG9wcGVyIGNhbiBvdmVyZmxvdyBldmVuIGlmIHRoZVxuICAgIC8vIHJlZmVyZW5jZSBpcyBub3Qgb3ZlcmZsb3dpbmcgYXMgd2VsbCAoZS5nLiB2aXJ0dWFsIGVsZW1lbnRzIHdpdGggbm9cbiAgICAvLyB3aWR0aCBvciBoZWlnaHQpXG5cbiAgICB2YXIgYXJyb3dMZW4gPSB3aXRoaW4oMCwgcmVmZXJlbmNlUmVjdFtsZW5dLCBhcnJvd1JlY3RbbGVuXSk7XG4gICAgdmFyIG1pbk9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IHJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgLSBhZGRpdGl2ZSAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzIDogbWluTGVuIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXM7XG4gICAgdmFyIG1heE9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IC1yZWZlcmVuY2VSZWN0W2xlbl0gLyAyICsgYWRkaXRpdmUgKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcyA6IG1heExlbiArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzO1xuICAgIHZhciBhcnJvd09mZnNldFBhcmVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93ICYmIGdldE9mZnNldFBhcmVudChzdGF0ZS5lbGVtZW50cy5hcnJvdyk7XG4gICAgdmFyIGNsaWVudE9mZnNldCA9IGFycm93T2Zmc2V0UGFyZW50ID8gbWFpbkF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFRvcCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50TGVmdCB8fCAwIDogMDtcbiAgICB2YXIgb2Zmc2V0TW9kaWZpZXJWYWx1ZSA9IChfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQgPSBvZmZzZXRNb2RpZmllclN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBvZmZzZXRNb2RpZmllclN0YXRlW21haW5BeGlzXSkgIT0gbnVsbCA/IF9vZmZzZXRNb2RpZmllclN0YXRlJCA6IDA7XG4gICAgdmFyIHRldGhlck1pbiA9IG9mZnNldCArIG1pbk9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWUgLSBjbGllbnRPZmZzZXQ7XG4gICAgdmFyIHRldGhlck1heCA9IG9mZnNldCArIG1heE9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWU7XG4gICAgdmFyIHByZXZlbnRlZE9mZnNldCA9IHdpdGhpbih0ZXRoZXIgPyBtYXRoTWluKG1pbiwgdGV0aGVyTWluKSA6IG1pbiwgb2Zmc2V0LCB0ZXRoZXIgPyBtYXRoTWF4KG1heCwgdGV0aGVyTWF4KSA6IG1heCk7XG4gICAgcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQ7XG4gICAgZGF0YVttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQgLSBvZmZzZXQ7XG4gIH1cblxuICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgdmFyIF9vZmZzZXRNb2RpZmllclN0YXRlJDI7XG5cbiAgICB2YXIgX21haW5TaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IHRvcCA6IGxlZnQ7XG5cbiAgICB2YXIgX2FsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gYm90dG9tIDogcmlnaHQ7XG5cbiAgICB2YXIgX29mZnNldCA9IHBvcHBlck9mZnNldHNbYWx0QXhpc107XG5cbiAgICB2YXIgX2xlbiA9IGFsdEF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHZhciBfbWluID0gX29mZnNldCArIG92ZXJmbG93W19tYWluU2lkZV07XG5cbiAgICB2YXIgX21heCA9IF9vZmZzZXQgLSBvdmVyZmxvd1tfYWx0U2lkZV07XG5cbiAgICB2YXIgaXNPcmlnaW5TaWRlID0gW3RvcCwgbGVmdF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgICB2YXIgX29mZnNldE1vZGlmaWVyVmFsdWUgPSAoX29mZnNldE1vZGlmaWVyU3RhdGUkMiA9IG9mZnNldE1vZGlmaWVyU3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IG9mZnNldE1vZGlmaWVyU3RhdGVbYWx0QXhpc10pICE9IG51bGwgPyBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyIDogMDtcblxuICAgIHZhciBfdGV0aGVyTWluID0gaXNPcmlnaW5TaWRlID8gX21pbiA6IF9vZmZzZXQgLSByZWZlcmVuY2VSZWN0W19sZW5dIC0gcG9wcGVyUmVjdFtfbGVuXSAtIF9vZmZzZXRNb2RpZmllclZhbHVlICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLmFsdEF4aXM7XG5cbiAgICB2YXIgX3RldGhlck1heCA9IGlzT3JpZ2luU2lkZSA/IF9vZmZzZXQgKyByZWZlcmVuY2VSZWN0W19sZW5dICsgcG9wcGVyUmVjdFtfbGVuXSAtIF9vZmZzZXRNb2RpZmllclZhbHVlIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLmFsdEF4aXMgOiBfbWF4O1xuXG4gICAgdmFyIF9wcmV2ZW50ZWRPZmZzZXQgPSB0ZXRoZXIgJiYgaXNPcmlnaW5TaWRlID8gd2l0aGluTWF4Q2xhbXAoX3RldGhlck1pbiwgX29mZnNldCwgX3RldGhlck1heCkgOiB3aXRoaW4odGV0aGVyID8gX3RldGhlck1pbiA6IF9taW4sIF9vZmZzZXQsIHRldGhlciA/IF90ZXRoZXJNYXggOiBfbWF4KTtcblxuICAgIHBvcHBlck9mZnNldHNbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0O1xuICAgIGRhdGFbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0IC0gX29mZnNldDtcbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IHByZXZlbnRPdmVyZmxvdyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXVxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBbHRBeGlzKGF4aXMpIHtcbiAgcmV0dXJuIGF4aXMgPT09ICd4JyA/ICd5JyA6ICd4Jztcbn0iLCJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldE5vZGVTY3JvbGwgZnJvbSBcIi4vZ2V0Tm9kZVNjcm9sbC5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiO1xuaW1wb3J0IHsgcm91bmQgfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xuXG5mdW5jdGlvbiBpc0VsZW1lbnRTY2FsZWQoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBzY2FsZVggPSByb3VuZChyZWN0LndpZHRoKSAvIGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMTtcbiAgdmFyIHNjYWxlWSA9IHJvdW5kKHJlY3QuaGVpZ2h0KSAvIGVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8IDE7XG4gIHJldHVybiBzY2FsZVggIT09IDEgfHwgc2NhbGVZICE9PSAxO1xufSAvLyBSZXR1cm5zIHRoZSBjb21wb3NpdGUgcmVjdCBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBvZmZzZXRQYXJlbnQuXG4vLyBDb21wb3NpdGUgbWVhbnMgaXQgdGFrZXMgaW50byBhY2NvdW50IHRyYW5zZm9ybXMgYXMgd2VsbCBhcyBsYXlvdXQuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29tcG9zaXRlUmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCwgb2Zmc2V0UGFyZW50LCBpc0ZpeGVkKSB7XG4gIGlmIChpc0ZpeGVkID09PSB2b2lkIDApIHtcbiAgICBpc0ZpeGVkID0gZmFsc2U7XG4gIH1cblxuICB2YXIgaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIHZhciBvZmZzZXRQYXJlbnRJc1NjYWxlZCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBpc0VsZW1lbnRTY2FsZWQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50RWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCwgb2Zmc2V0UGFyZW50SXNTY2FsZWQsIGlzRml4ZWQpO1xuICB2YXIgc2Nyb2xsID0ge1xuICAgIHNjcm9sbExlZnQ6IDAsXG4gICAgc2Nyb2xsVG9wOiAwXG4gIH07XG4gIHZhciBvZmZzZXRzID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgIWlzRml4ZWQpIHtcbiAgICBpZiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSAhPT0gJ2JvZHknIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTA3OFxuICAgIGlzU2Nyb2xsUGFyZW50KGRvY3VtZW50RWxlbWVudCkpIHtcbiAgICAgIHNjcm9sbCA9IGdldE5vZGVTY3JvbGwob2Zmc2V0UGFyZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICBvZmZzZXRzID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG9mZnNldFBhcmVudCwgdHJ1ZSk7XG4gICAgICBvZmZzZXRzLnggKz0gb2Zmc2V0UGFyZW50LmNsaWVudExlZnQ7XG4gICAgICBvZmZzZXRzLnkgKz0gb2Zmc2V0UGFyZW50LmNsaWVudFRvcDtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgb2Zmc2V0cy54ID0gZ2V0V2luZG93U2Nyb2xsQmFyWChkb2N1bWVudEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogcmVjdC5sZWZ0ICsgc2Nyb2xsLnNjcm9sbExlZnQgLSBvZmZzZXRzLngsXG4gICAgeTogcmVjdC50b3AgKyBzY3JvbGwuc2Nyb2xsVG9wIC0gb2Zmc2V0cy55LFxuICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHRcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0SFRNTEVsZW1lbnRTY3JvbGwgZnJvbSBcIi4vZ2V0SFRNTEVsZW1lbnRTY3JvbGwuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE5vZGVTY3JvbGwobm9kZSkge1xuICBpZiAobm9kZSA9PT0gZ2V0V2luZG93KG5vZGUpIHx8ICFpc0hUTUxFbGVtZW50KG5vZGUpKSB7XG4gICAgcmV0dXJuIGdldFdpbmRvd1Njcm9sbChub2RlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0SFRNTEVsZW1lbnRTY3JvbGwobm9kZSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRIVE1MRWxlbWVudFNjcm9sbChlbGVtZW50KSB7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogZWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcDogZWxlbWVudC5zY3JvbGxUb3BcbiAgfTtcbn0iLCJpbXBvcnQgeyBtb2RpZmllclBoYXNlcyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiOyAvLyBzb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ5ODc1MjU1XG5cbmZ1bmN0aW9uIG9yZGVyKG1vZGlmaWVycykge1xuICB2YXIgbWFwID0gbmV3IE1hcCgpO1xuICB2YXIgdmlzaXRlZCA9IG5ldyBTZXQoKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBtYXAuc2V0KG1vZGlmaWVyLm5hbWUsIG1vZGlmaWVyKTtcbiAgfSk7IC8vIE9uIHZpc2l0aW5nIG9iamVjdCwgY2hlY2sgZm9yIGl0cyBkZXBlbmRlbmNpZXMgYW5kIHZpc2l0IHRoZW0gcmVjdXJzaXZlbHlcblxuICBmdW5jdGlvbiBzb3J0KG1vZGlmaWVyKSB7XG4gICAgdmlzaXRlZC5hZGQobW9kaWZpZXIubmFtZSk7XG4gICAgdmFyIHJlcXVpcmVzID0gW10uY29uY2F0KG1vZGlmaWVyLnJlcXVpcmVzIHx8IFtdLCBtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzIHx8IFtdKTtcbiAgICByZXF1aXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChkZXApIHtcbiAgICAgIGlmICghdmlzaXRlZC5oYXMoZGVwKSkge1xuICAgICAgICB2YXIgZGVwTW9kaWZpZXIgPSBtYXAuZ2V0KGRlcCk7XG5cbiAgICAgICAgaWYgKGRlcE1vZGlmaWVyKSB7XG4gICAgICAgICAgc29ydChkZXBNb2RpZmllcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXN1bHQucHVzaChtb2RpZmllcik7XG4gIH1cblxuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBpZiAoIXZpc2l0ZWQuaGFzKG1vZGlmaWVyLm5hbWUpKSB7XG4gICAgICAvLyBjaGVjayBmb3IgdmlzaXRlZCBvYmplY3RcbiAgICAgIHNvcnQobW9kaWZpZXIpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9yZGVyTW9kaWZpZXJzKG1vZGlmaWVycykge1xuICAvLyBvcmRlciBiYXNlZCBvbiBkZXBlbmRlbmNpZXNcbiAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcihtb2RpZmllcnMpOyAvLyBvcmRlciBiYXNlZCBvbiBwaGFzZVxuXG4gIHJldHVybiBtb2RpZmllclBoYXNlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGhhc2UpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgIHJldHVybiBtb2RpZmllci5waGFzZSA9PT0gcGhhc2U7XG4gICAgfSkpO1xuICB9LCBbXSk7XG59IiwiaW1wb3J0IGdldENvbXBvc2l0ZVJlY3QgZnJvbSBcIi4vZG9tLXV0aWxzL2dldENvbXBvc2l0ZVJlY3QuanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgbGlzdFNjcm9sbFBhcmVudHMgZnJvbSBcIi4vZG9tLXV0aWxzL2xpc3RTY3JvbGxQYXJlbnRzLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBvcmRlck1vZGlmaWVycyBmcm9tIFwiLi91dGlscy9vcmRlck1vZGlmaWVycy5qc1wiO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gXCIuL3V0aWxzL2RlYm91bmNlLmpzXCI7XG5pbXBvcnQgbWVyZ2VCeU5hbWUgZnJvbSBcIi4vdXRpbHMvbWVyZ2VCeU5hbWUuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjtcbnZhciBERUZBVUxUX09QVElPTlMgPSB7XG4gIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gIG1vZGlmaWVyczogW10sXG4gIHN0cmF0ZWd5OiAnYWJzb2x1dGUnXG59O1xuXG5mdW5jdGlvbiBhcmVWYWxpZEVsZW1lbnRzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuICFhcmdzLnNvbWUoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gIShlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9PT0gJ2Z1bmN0aW9uJyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wcGVyR2VuZXJhdG9yKGdlbmVyYXRvck9wdGlvbnMpIHtcbiAgaWYgKGdlbmVyYXRvck9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIGdlbmVyYXRvck9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfZ2VuZXJhdG9yT3B0aW9ucyA9IGdlbmVyYXRvck9wdGlvbnMsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0TW9kaWZpZXJzLFxuICAgICAgZGVmYXVsdE1vZGlmaWVycyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9PT0gdm9pZCAwID8gW10gOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE9wdGlvbnMsXG4gICAgICBkZWZhdWx0T3B0aW9ucyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPT09IHZvaWQgMCA/IERFRkFVTFRfT1BUSU9OUyA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZjI7XG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVQb3BwZXIocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XG4gICAgfVxuXG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgIG9yZGVyZWRNb2RpZmllcnM6IFtdLFxuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TLCBkZWZhdWx0T3B0aW9ucyksXG4gICAgICBtb2RpZmllcnNEYXRhOiB7fSxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlLFxuICAgICAgICBwb3BwZXI6IHBvcHBlclxuICAgICAgfSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH07XG4gICAgdmFyIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB2YXIgaXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB2YXIgaW5zdGFuY2UgPSB7XG4gICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICBzZXRPcHRpb25zOiBmdW5jdGlvbiBzZXRPcHRpb25zKHNldE9wdGlvbnNBY3Rpb24pIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2V0T3B0aW9uc0FjdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IHNldE9wdGlvbnNBY3Rpb24oc3RhdGUub3B0aW9ucykgOiBzZXRPcHRpb25zQWN0aW9uO1xuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIHN0YXRlLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgc3RhdGUub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHN0YXRlLnNjcm9sbFBhcmVudHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBpc0VsZW1lbnQocmVmZXJlbmNlKSA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZSkgOiByZWZlcmVuY2UuY29udGV4dEVsZW1lbnQgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UuY29udGV4dEVsZW1lbnQpIDogW10sXG4gICAgICAgICAgcG9wcGVyOiBsaXN0U2Nyb2xsUGFyZW50cyhwb3BwZXIpXG4gICAgICAgIH07IC8vIE9yZGVycyB0aGUgbW9kaWZpZXJzIGJhc2VkIG9uIHRoZWlyIGRlcGVuZGVuY2llcyBhbmQgYHBoYXNlYFxuICAgICAgICAvLyBwcm9wZXJ0aWVzXG5cbiAgICAgICAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlck1vZGlmaWVycyhtZXJnZUJ5TmFtZShbXS5jb25jYXQoZGVmYXVsdE1vZGlmaWVycywgc3RhdGUub3B0aW9ucy5tb2RpZmllcnMpKSk7IC8vIFN0cmlwIG91dCBkaXNhYmxlZCBtb2RpZmllcnNcblxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICByZXR1cm4gbS5lbmFibGVkO1xuICAgICAgICB9KTtcbiAgICAgICAgcnVuTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS51cGRhdGUoKTtcbiAgICAgIH0sXG4gICAgICAvLyBTeW5jIHVwZGF0ZSDigJMgaXQgd2lsbCBhbHdheXMgYmUgZXhlY3V0ZWQsIGV2ZW4gaWYgbm90IG5lY2Vzc2FyeS4gVGhpc1xuICAgICAgLy8gaXMgdXNlZnVsIGZvciBsb3cgZnJlcXVlbmN5IHVwZGF0ZXMgd2hlcmUgc3luYyBiZWhhdmlvciBzaW1wbGlmaWVzIHRoZVxuICAgICAgLy8gbG9naWMuXG4gICAgICAvLyBGb3IgaGlnaCBmcmVxdWVuY3kgdXBkYXRlcyAoZS5nLiBgcmVzaXplYCBhbmQgYHNjcm9sbGAgZXZlbnRzKSwgYWx3YXlzXG4gICAgICAvLyBwcmVmZXIgdGhlIGFzeW5jIFBvcHBlciN1cGRhdGUgbWV0aG9kXG4gICAgICBmb3JjZVVwZGF0ZTogZnVuY3Rpb24gZm9yY2VVcGRhdGUoKSB7XG4gICAgICAgIGlmIChpc0Rlc3Ryb3llZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfc3RhdGUkZWxlbWVudHMgPSBzdGF0ZS5lbGVtZW50cyxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IF9zdGF0ZSRlbGVtZW50cy5yZWZlcmVuY2UsXG4gICAgICAgICAgICBwb3BwZXIgPSBfc3RhdGUkZWxlbWVudHMucG9wcGVyOyAvLyBEb24ndCBwcm9jZWVkIGlmIGByZWZlcmVuY2VgIG9yIGBwb3BwZXJgIGFyZSBub3QgdmFsaWQgZWxlbWVudHNcbiAgICAgICAgLy8gYW55bW9yZVxuXG4gICAgICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gU3RvcmUgdGhlIHJlZmVyZW5jZSBhbmQgcG9wcGVyIHJlY3RzIHRvIGJlIHJlYWQgYnkgbW9kaWZpZXJzXG5cblxuICAgICAgICBzdGF0ZS5yZWN0cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGdldENvbXBvc2l0ZVJlY3QocmVmZXJlbmNlLCBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKSwgc3RhdGUub3B0aW9ucy5zdHJhdGVneSA9PT0gJ2ZpeGVkJyksXG4gICAgICAgICAgcG9wcGVyOiBnZXRMYXlvdXRSZWN0KHBvcHBlcilcbiAgICAgICAgfTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gcmVzZXQgdGhlIGN1cnJlbnQgdXBkYXRlIGN5Y2xlLiBUaGVcbiAgICAgICAgLy8gbW9zdCBjb21tb24gdXNlIGNhc2UgZm9yIHRoaXMgaXMgdGhlIGBmbGlwYCBtb2RpZmllciBjaGFuZ2luZyB0aGVcbiAgICAgICAgLy8gcGxhY2VtZW50LCB3aGljaCB0aGVuIG5lZWRzIHRvIHJlLXJ1biBhbGwgdGhlIG1vZGlmaWVycywgYmVjYXVzZSB0aGVcbiAgICAgICAgLy8gbG9naWMgd2FzIHByZXZpb3VzbHkgcmFuIGZvciB0aGUgcHJldmlvdXMgcGxhY2VtZW50IGFuZCBpcyB0aGVyZWZvcmVcbiAgICAgICAgLy8gc3RhbGUvaW5jb3JyZWN0XG5cbiAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUucGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7IC8vIE9uIGVhY2ggdXBkYXRlIGN5Y2xlLCB0aGUgYG1vZGlmaWVyc0RhdGFgIHByb3BlcnR5IGZvciBlYWNoIG1vZGlmaWVyXG4gICAgICAgIC8vIGlzIGZpbGxlZCB3aXRoIHRoZSBpbml0aWFsIGRhdGEgc3BlY2lmaWVkIGJ5IHRoZSBtb2RpZmllci4gVGhpcyBtZWFuc1xuICAgICAgICAvLyBpdCBkb2Vzbid0IHBlcnNpc3QgYW5kIGlzIGZyZXNoIG9uIGVhY2ggdXBkYXRlLlxuICAgICAgICAvLyBUbyBlbnN1cmUgcGVyc2lzdGVudCBkYXRhLCB1c2UgYCR7bmFtZX0jcGVyc2lzdGVudGBcblxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlLm1vZGlmaWVyc0RhdGFbbW9kaWZpZXIubmFtZV0gPSBPYmplY3QuYXNzaWduKHt9LCBtb2RpZmllci5kYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHN0YXRlLm9yZGVyZWRNb2RpZmllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgaWYgKHN0YXRlLnJlc2V0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICAgICAgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBfc3RhdGUkb3JkZXJlZE1vZGlmaWUgPSBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzW2luZGV4XSxcbiAgICAgICAgICAgICAgZm4gPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUuZm4sXG4gICAgICAgICAgICAgIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUub3B0aW9ucyxcbiAgICAgICAgICAgICAgX29wdGlvbnMgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID09PSB2b2lkIDAgPyB7fSA6IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIsXG4gICAgICAgICAgICAgIG5hbWUgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUubmFtZTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHN0YXRlID0gZm4oe1xuICAgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IF9vcHRpb25zLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2VcbiAgICAgICAgICAgIH0pIHx8IHN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIEFzeW5jIGFuZCBvcHRpbWlzdGljYWxseSBvcHRpbWl6ZWQgdXBkYXRlIOKAkyBpdCB3aWxsIG5vdCBiZSBleGVjdXRlZCBpZlxuICAgICAgLy8gbm90IG5lY2Vzc2FyeSAoZGVib3VuY2VkIHRvIHJ1biBhdCBtb3N0IG9uY2UtcGVyLXRpY2spXG4gICAgICB1cGRhdGU6IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICByZXNvbHZlKHN0YXRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgaXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgaW5zdGFuY2Uuc2V0T3B0aW9ucyhvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgaWYgKCFpc0Rlc3Ryb3llZCAmJiBvcHRpb25zLm9uRmlyc3RVcGRhdGUpIHtcbiAgICAgICAgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9KTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gZXhlY3V0ZSBhcmJpdHJhcnkgY29kZSBiZWZvcmUgdGhlIGZpcnN0XG4gICAgLy8gdXBkYXRlIGN5Y2xlIHJ1bnMuIFRoZXkgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgdXBkYXRlXG4gICAgLy8gY3ljbGUuIFRoaXMgaXMgdXNlZnVsIHdoZW4gYSBtb2RpZmllciBhZGRzIHNvbWUgcGVyc2lzdGVudCBkYXRhIHRoYXRcbiAgICAvLyBvdGhlciBtb2RpZmllcnMgbmVlZCB0byB1c2UsIGJ1dCB0aGUgbW9kaWZpZXIgaXMgcnVuIGFmdGVyIHRoZSBkZXBlbmRlbnRcbiAgICAvLyBvbmUuXG5cbiAgICBmdW5jdGlvbiBydW5Nb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICAgICAgICBfcmVmJG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICAgICAgICBvcHRpb25zID0gX3JlZiRvcHRpb25zID09PSB2b2lkIDAgPyB7fSA6IF9yZWYkb3B0aW9ucyxcbiAgICAgICAgICAgIGVmZmVjdCA9IF9yZWYuZWZmZWN0O1xuXG4gICAgICAgIGlmICh0eXBlb2YgZWZmZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdmFyIGNsZWFudXBGbiA9IGVmZmVjdCh7XG4gICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlLFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyIG5vb3BGbiA9IGZ1bmN0aW9uIG5vb3BGbigpIHt9O1xuXG4gICAgICAgICAgZWZmZWN0Q2xlYW51cEZucy5wdXNoKGNsZWFudXBGbiB8fCBub29wRm4pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgZWZmZWN0Q2xlYW51cEZucy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICByZXR1cm4gZm4oKTtcbiAgICAgIH0pO1xuICAgICAgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfTtcbn1cbmV4cG9ydCB2YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcigpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGRldGVjdE92ZXJmbG93IH07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoZm4pIHtcbiAgdmFyIHBlbmRpbmc7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFwZW5kaW5nKSB7XG4gICAgICBwZW5kaW5nID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcGVuZGluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICByZXNvbHZlKGZuKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwZW5kaW5nO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlQnlOYW1lKG1vZGlmaWVycykge1xuICB2YXIgbWVyZ2VkID0gbW9kaWZpZXJzLnJlZHVjZShmdW5jdGlvbiAobWVyZ2VkLCBjdXJyZW50KSB7XG4gICAgdmFyIGV4aXN0aW5nID0gbWVyZ2VkW2N1cnJlbnQubmFtZV07XG4gICAgbWVyZ2VkW2N1cnJlbnQubmFtZV0gPSBleGlzdGluZyA/IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLCBjdXJyZW50LCB7XG4gICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5vcHRpb25zLCBjdXJyZW50Lm9wdGlvbnMpLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcuZGF0YSwgY3VycmVudC5kYXRhKVxuICAgIH0pIDogY3VycmVudDtcbiAgICByZXR1cm4gbWVyZ2VkO1xuICB9LCB7fSk7IC8vIElFMTEgZG9lcyBub3Qgc3VwcG9ydCBPYmplY3QudmFsdWVzXG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKG1lcmdlZCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gbWVyZ2VkW2tleV07XG4gIH0pO1xufSIsImltcG9ydCB7IHBvcHBlckdlbmVyYXRvciwgZGV0ZWN0T3ZlcmZsb3cgfSBmcm9tIFwiLi9jcmVhdGVQb3BwZXIuanNcIjtcbmltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9tb2RpZmllcnMvZXZlbnRMaXN0ZW5lcnMuanNcIjtcbmltcG9ydCBwb3BwZXJPZmZzZXRzIGZyb20gXCIuL21vZGlmaWVycy9wb3BwZXJPZmZzZXRzLmpzXCI7XG5pbXBvcnQgY29tcHV0ZVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvY29tcHV0ZVN0eWxlcy5qc1wiO1xuaW1wb3J0IGFwcGx5U3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9hcHBseVN0eWxlcy5qc1wiO1xudmFyIGRlZmF1bHRNb2RpZmllcnMgPSBbZXZlbnRMaXN0ZW5lcnMsIHBvcHBlck9mZnNldHMsIGNvbXB1dGVTdHlsZXMsIGFwcGx5U3R5bGVzXTtcbnZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKHtcbiAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVyc1xufSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyLCBwb3BwZXJHZW5lcmF0b3IsIGRlZmF1bHRNb2RpZmllcnMsIGRldGVjdE92ZXJmbG93IH07IiwiaW1wb3J0IHsgcG9wcGVyR2VuZXJhdG9yLCBkZXRlY3RPdmVyZmxvdyB9IGZyb20gXCIuL2NyZWF0ZVBvcHBlci5qc1wiO1xuaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qc1wiO1xuaW1wb3J0IHBvcHBlck9mZnNldHMgZnJvbSBcIi4vbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanNcIjtcbmltcG9ydCBjb21wdXRlU3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9jb21wdXRlU3R5bGVzLmpzXCI7XG5pbXBvcnQgYXBwbHlTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2FwcGx5U3R5bGVzLmpzXCI7XG5pbXBvcnQgb2Zmc2V0IGZyb20gXCIuL21vZGlmaWVycy9vZmZzZXQuanNcIjtcbmltcG9ydCBmbGlwIGZyb20gXCIuL21vZGlmaWVycy9mbGlwLmpzXCI7XG5pbXBvcnQgcHJldmVudE92ZXJmbG93IGZyb20gXCIuL21vZGlmaWVycy9wcmV2ZW50T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBhcnJvdyBmcm9tIFwiLi9tb2RpZmllcnMvYXJyb3cuanNcIjtcbmltcG9ydCBoaWRlIGZyb20gXCIuL21vZGlmaWVycy9oaWRlLmpzXCI7XG52YXIgZGVmYXVsdE1vZGlmaWVycyA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cywgY29tcHV0ZVN0eWxlcywgYXBwbHlTdHlsZXMsIG9mZnNldCwgZmxpcCwgcHJldmVudE92ZXJmbG93LCBhcnJvdywgaGlkZV07XG52YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XG4gIGRlZmF1bHRNb2RpZmllcnM6IGRlZmF1bHRNb2RpZmllcnNcbn0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciwgcG9wcGVyR2VuZXJhdG9yLCBkZWZhdWx0TW9kaWZpZXJzLCBkZXRlY3RPdmVyZmxvdyB9OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciBhcyBjcmVhdGVQb3BwZXJMaXRlIH0gZnJvbSBcIi4vcG9wcGVyLWxpdGUuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgKiBmcm9tIFwiLi9tb2RpZmllcnMvaW5kZXguanNcIjsiLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgZHJvcGRvd24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgKiBhcyBQb3BwZXIgZnJvbSAnQHBvcHBlcmpzL2NvcmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50LmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZXhlY3V0ZSxcbiAgZ2V0RWxlbWVudCxcbiAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQsXG4gIGlzRGlzYWJsZWQsXG4gIGlzRWxlbWVudCxcbiAgaXNSVEwsXG4gIGlzVmlzaWJsZSxcbiAgbm9vcFxufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdkcm9wZG93bidcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmRyb3Bkb3duJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVTQ0FQRV9LRVkgPSAnRXNjYXBlJ1xuY29uc3QgVEFCX0tFWSA9ICdUYWInXG5jb25zdCBBUlJPV19VUF9LRVkgPSAnQXJyb3dVcCdcbmNvbnN0IEFSUk9XX0RPV05fS0VZID0gJ0Fycm93RG93bidcbmNvbnN0IFJJR0hUX01PVVNFX0JVVFRPTiA9IDIgLy8gTW91c2VFdmVudC5idXR0b24gdmFsdWUgZm9yIHRoZSBzZWNvbmRhcnkgYnV0dG9uLCB1c3VhbGx5IHRoZSByaWdodCBidXR0b25cblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJID0gYGtleWRvd24ke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlVUF9EQVRBX0FQSSA9IGBrZXl1cCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX0RST1BVUCA9ICdkcm9wdXAnXG5jb25zdCBDTEFTU19OQU1FX0RST1BFTkQgPSAnZHJvcGVuZCdcbmNvbnN0IENMQVNTX05BTUVfRFJPUFNUQVJUID0gJ2Ryb3BzdGFydCdcbmNvbnN0IENMQVNTX05BTUVfRFJPUFVQX0NFTlRFUiA9ICdkcm9wdXAtY2VudGVyJ1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QRE9XTl9DRU5URVIgPSAnZHJvcGRvd24tY2VudGVyJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiXTpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFX1NIT1dOID0gYCR7U0VMRUNUT1JfREFUQV9UT0dHTEV9LiR7Q0xBU1NfTkFNRV9TSE9XfWBcbmNvbnN0IFNFTEVDVE9SX01FTlUgPSAnLmRyb3Bkb3duLW1lbnUnXG5jb25zdCBTRUxFQ1RPUl9OQVZCQVIgPSAnLm5hdmJhcidcbmNvbnN0IFNFTEVDVE9SX05BVkJBUl9OQVYgPSAnLm5hdmJhci1uYXYnXG5jb25zdCBTRUxFQ1RPUl9WSVNJQkxFX0lURU1TID0gJy5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJ1xuXG5jb25zdCBQTEFDRU1FTlRfVE9QID0gaXNSVEwoKSA/ICd0b3AtZW5kJyA6ICd0b3Atc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfVE9QRU5EID0gaXNSVEwoKSA/ICd0b3Atc3RhcnQnIDogJ3RvcC1lbmQnXG5jb25zdCBQTEFDRU1FTlRfQk9UVE9NID0gaXNSVEwoKSA/ICdib3R0b20tZW5kJyA6ICdib3R0b20tc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfQk9UVE9NRU5EID0gaXNSVEwoKSA/ICdib3R0b20tc3RhcnQnIDogJ2JvdHRvbS1lbmQnXG5jb25zdCBQTEFDRU1FTlRfUklHSFQgPSBpc1JUTCgpID8gJ2xlZnQtc3RhcnQnIDogJ3JpZ2h0LXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX0xFRlQgPSBpc1JUTCgpID8gJ3JpZ2h0LXN0YXJ0JyA6ICdsZWZ0LXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX1RPUENFTlRFUiA9ICd0b3AnXG5jb25zdCBQTEFDRU1FTlRfQk9UVE9NQ0VOVEVSID0gJ2JvdHRvbSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYXV0b0Nsb3NlOiB0cnVlLFxuICBib3VuZGFyeTogJ2NsaXBwaW5nUGFyZW50cycsXG4gIGRpc3BsYXk6ICdkeW5hbWljJyxcbiAgb2Zmc2V0OiBbMCwgMl0sXG4gIHBvcHBlckNvbmZpZzogbnVsbCxcbiAgcmVmZXJlbmNlOiAndG9nZ2xlJ1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYXV0b0Nsb3NlOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIGJvdW5kYXJ5OiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIGRpc3BsYXk6ICdzdHJpbmcnLFxuICBvZmZzZXQ6ICcoYXJyYXl8c3RyaW5nfGZ1bmN0aW9uKScsXG4gIHBvcHBlckNvbmZpZzogJyhudWxsfG9iamVjdHxmdW5jdGlvbiknLFxuICByZWZlcmVuY2U6ICcoc3RyaW5nfGVsZW1lbnR8b2JqZWN0KSdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIHRoaXMuX3BhcmVudCA9IHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSAvLyBkcm9wZG93biB3cmFwcGVyXG4gICAgLy8gVE9ETzogdjYgcmV2ZXJ0ICMzNzAxMSAmIGNoYW5nZSBtYXJrdXAgaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNS4zL2Zvcm1zL2lucHV0LWdyb3VwL1xuICAgIHRoaXMuX21lbnUgPSBTZWxlY3RvckVuZ2luZS5uZXh0KHRoaXMuX2VsZW1lbnQsIFNFTEVDVE9SX01FTlUpWzBdIHx8XG4gICAgICBTZWxlY3RvckVuZ2luZS5wcmV2KHRoaXMuX2VsZW1lbnQsIFNFTEVDVE9SX01FTlUpWzBdIHx8XG4gICAgICBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX01FTlUsIHRoaXMuX3BhcmVudClcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHRvZ2dsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93bigpID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3coKVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzLl9lbGVtZW50KSB8fCB0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywgcmVsYXRlZFRhcmdldClcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY3JlYXRlUG9wcGVyKClcblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiAhdGhpcy5fcGFyZW50LmNsb3Nlc3QoU0VMRUNUT1JfTkFWQkFSX05BVikpIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcblxuICAgIHRoaXMuX21lbnUuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwgcmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkgfHwgIXRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9XG5cbiAgICB0aGlzLl9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKClcbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldCkge1xuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUsIHJlbGF0ZWRUYXJnZXQpXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICB0aGlzLl9tZW51LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxuICAgIE1hbmlwdWxhdG9yLnJlbW92ZURhdGFBdHRyaWJ1dGUodGhpcy5fbWVudSwgJ3BvcHBlcicpXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOLCByZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSBzdXBlci5fZ2V0Q29uZmlnKGNvbmZpZylcblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZmVyZW5jZSA9PT0gJ29iamVjdCcgJiYgIWlzRWxlbWVudChjb25maWcucmVmZXJlbmNlKSAmJlxuICAgICAgdHlwZW9mIGNvbmZpZy5yZWZlcmVuY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSAnZnVuY3Rpb24nXG4gICAgKSB7XG4gICAgICAvLyBQb3BwZXIgdmlydHVhbCBlbGVtZW50cyByZXF1aXJlIGEgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG1ldGhvZFxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtOQU1FLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gXCJyZWZlcmVuY2VcIiBwcm92aWRlZCB0eXBlIFwib2JqZWN0XCIgd2l0aG91dCBhIHJlcXVpcmVkIFwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0XCIgbWV0aG9kLmApXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2NyZWF0ZVBvcHBlcigpIHtcbiAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgZHJvcGRvd25zIHJlcXVpcmUgUG9wcGVyIChodHRwczovL3BvcHBlci5qcy5vcmcpJylcbiAgICB9XG5cbiAgICBsZXQgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRcblxuICAgIGlmICh0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAncGFyZW50Jykge1xuICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX3BhcmVudFxuICAgIH0gZWxzZSBpZiAoaXNFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpKSB7XG4gICAgICByZWZlcmVuY2VFbGVtZW50ID0gZ2V0RWxlbWVudCh0aGlzLl9jb25maWcucmVmZXJlbmNlKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdvYmplY3QnKSB7XG4gICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fY29uZmlnLnJlZmVyZW5jZVxuICAgIH1cblxuICAgIGNvbnN0IHBvcHBlckNvbmZpZyA9IHRoaXMuX2dldFBvcHBlckNvbmZpZygpXG4gICAgdGhpcy5fcG9wcGVyID0gUG9wcGVyLmNyZWF0ZVBvcHBlcihyZWZlcmVuY2VFbGVtZW50LCB0aGlzLl9tZW51LCBwb3BwZXJDb25maWcpXG4gIH1cblxuICBfaXNTaG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVudS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKVxuICB9XG5cbiAgX2dldFBsYWNlbWVudCgpIHtcbiAgICBjb25zdCBwYXJlbnREcm9wZG93biA9IHRoaXMuX3BhcmVudFxuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BFTkQpKSB7XG4gICAgICByZXR1cm4gUExBQ0VNRU5UX1JJR0hUXG4gICAgfVxuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BTVEFSVCkpIHtcbiAgICAgIHJldHVybiBQTEFDRU1FTlRfTEVGVFxuICAgIH1cblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QVVBfQ0VOVEVSKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9UT1BDRU5URVJcbiAgICB9XG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUERPV05fQ0VOVEVSKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9CT1RUT01DRU5URVJcbiAgICB9XG5cbiAgICAvLyBXZSBuZWVkIHRvIHRyaW0gdGhlIHZhbHVlIGJlY2F1c2UgY3VzdG9tIHByb3BlcnRpZXMgY2FuIGFsc28gaW5jbHVkZSBzcGFjZXNcbiAgICBjb25zdCBpc0VuZCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fbWVudSkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1icy1wb3NpdGlvbicpLnRyaW0oKSA9PT0gJ2VuZCdcblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QVVApKSB7XG4gICAgICByZXR1cm4gaXNFbmQgPyBQTEFDRU1FTlRfVE9QRU5EIDogUExBQ0VNRU5UX1RPUFxuICAgIH1cblxuICAgIHJldHVybiBpc0VuZCA/IFBMQUNFTUVOVF9CT1RUT01FTkQgOiBQTEFDRU1FTlRfQk9UVE9NXG4gIH1cblxuICBfZGV0ZWN0TmF2YmFyKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfTkFWQkFSKSAhPT0gbnVsbFxuICB9XG5cbiAgX2dldE9mZnNldCgpIHtcbiAgICBjb25zdCB7IG9mZnNldCB9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBvZmZzZXQuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gTnVtYmVyLnBhcnNlSW50KHZhbHVlLCAxMCkpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBwb3BwZXJEYXRhID0+IG9mZnNldChwb3BwZXJEYXRhLCB0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRcbiAgfVxuXG4gIF9nZXRQb3BwZXJDb25maWcoKSB7XG4gICAgY29uc3QgZGVmYXVsdEJzUG9wcGVyQ29uZmlnID0ge1xuICAgICAgcGxhY2VtZW50OiB0aGlzLl9nZXRQbGFjZW1lbnQoKSxcbiAgICAgIG1vZGlmaWVyczogW3tcbiAgICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBib3VuZGFyeTogdGhpcy5fY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKVxuICAgICAgICB9XG4gICAgICB9XVxuICAgIH1cblxuICAgIC8vIERpc2FibGUgUG9wcGVyIGlmIHdlIGhhdmUgYSBzdGF0aWMgZGlzcGxheSBvciBEcm9wZG93biBpcyBpbiBOYXZiYXJcbiAgICBpZiAodGhpcy5faW5OYXZiYXIgfHwgdGhpcy5fY29uZmlnLmRpc3BsYXkgPT09ICdzdGF0aWMnKSB7XG4gICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInLCAnc3RhdGljJykgLy8gVE9ETzogdjYgcmVtb3ZlXG4gICAgICBkZWZhdWx0QnNQb3BwZXJDb25maWcubW9kaWZpZXJzID0gW3tcbiAgICAgICAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRlZmF1bHRCc1BvcHBlckNvbmZpZyxcbiAgICAgIC4uLmV4ZWN1dGUodGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZywgW2RlZmF1bHRCc1BvcHBlckNvbmZpZ10pXG4gICAgfVxuICB9XG5cbiAgX3NlbGVjdE1lbnVJdGVtKHsga2V5LCB0YXJnZXQgfSkge1xuICAgIGNvbnN0IGl0ZW1zID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9WSVNJQkxFX0lURU1TLCB0aGlzLl9tZW51KS5maWx0ZXIoZWxlbWVudCA9PiBpc1Zpc2libGUoZWxlbWVudCkpXG5cbiAgICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gaWYgdGFyZ2V0IGlzbid0IGluY2x1ZGVkIGluIGl0ZW1zIChlLmcuIHdoZW4gZXhwYW5kaW5nIHRoZSBkcm9wZG93bilcbiAgICAvLyBhbGxvdyBjeWNsaW5nIHRvIGdldCB0aGUgbGFzdCBpdGVtIGluIGNhc2Uga2V5IGVxdWFscyBBUlJPV19VUF9LRVlcbiAgICBnZXROZXh0QWN0aXZlRWxlbWVudChpdGVtcywgdGFyZ2V0LCBrZXkgPT09IEFSUk9XX0RPV05fS0VZLCAhaXRlbXMuaW5jbHVkZXModGFyZ2V0KSkuZm9jdXMoKVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGNsZWFyTWVudXMoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuYnV0dG9uID09PSBSSUdIVF9NT1VTRV9CVVRUT04gfHwgKGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQua2V5ICE9PSBUQUJfS0VZKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgb3BlblRvZ2dsZXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFX1NIT1dOKVxuXG4gICAgZm9yIChjb25zdCB0b2dnbGUgb2Ygb3BlblRvZ2dsZXMpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBEcm9wZG93bi5nZXRJbnN0YW5jZSh0b2dnbGUpXG4gICAgICBpZiAoIWNvbnRleHQgfHwgY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tcG9zZWRQYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKClcbiAgICAgIGNvbnN0IGlzTWVudVRhcmdldCA9IGNvbXBvc2VkUGF0aC5pbmNsdWRlcyhjb250ZXh0Ll9tZW51KVxuICAgICAgaWYgKFxuICAgICAgICBjb21wb3NlZFBhdGguaW5jbHVkZXMoY29udGV4dC5fZWxlbWVudCkgfHxcbiAgICAgICAgKGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09ICdpbnNpZGUnICYmICFpc01lbnVUYXJnZXQpIHx8XG4gICAgICAgIChjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSAnb3V0c2lkZScgJiYgaXNNZW51VGFyZ2V0KVxuICAgICAgKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIFRhYiBuYXZpZ2F0aW9uIHRocm91Z2ggdGhlIGRyb3Bkb3duIG1lbnUgb3IgZXZlbnRzIGZyb20gY29udGFpbmVkIGlucHV0cyBzaG91bGRuJ3QgY2xvc2UgdGhlIG1lbnVcbiAgICAgIGlmIChjb250ZXh0Ll9tZW51LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgKChldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LmtleSA9PT0gVEFCX0tFWSkgfHwgL2lucHV0fHNlbGVjdHxvcHRpb258dGV4dGFyZWF8Zm9ybS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0geyByZWxhdGVkVGFyZ2V0OiBjb250ZXh0Ll9lbGVtZW50IH1cblxuICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldC5jbGlja0V2ZW50ID0gZXZlbnRcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5fY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGRhdGFBcGlLZXlkb3duSGFuZGxlcihldmVudCkge1xuICAgIC8vIElmIG5vdCBhbiBVUCB8IERPV04gfCBFU0NBUEUga2V5ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyBJZiBpbnB1dC90ZXh0YXJlYSAmJiBpZiBrZXkgaXMgb3RoZXIgdGhhbiBFU0NBUEUgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuXG4gICAgY29uc3QgaXNJbnB1dCA9IC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpXG4gICAgY29uc3QgaXNFc2NhcGVFdmVudCA9IGV2ZW50LmtleSA9PT0gRVNDQVBFX0tFWVxuICAgIGNvbnN0IGlzVXBPckRvd25FdmVudCA9IFtBUlJPV19VUF9LRVksIEFSUk9XX0RPV05fS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpXG5cbiAgICBpZiAoIWlzVXBPckRvd25FdmVudCAmJiAhaXNFc2NhcGVFdmVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzSW5wdXQgJiYgIWlzRXNjYXBlRXZlbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vIFRPRE86IHY2IHJldmVydCAjMzcwMTEgJiBjaGFuZ2UgbWFya3VwIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzUuMy9mb3Jtcy9pbnB1dC1ncm91cC9cbiAgICBjb25zdCBnZXRUb2dnbGVCdXR0b24gPSB0aGlzLm1hdGNoZXMoU0VMRUNUT1JfREFUQV9UT0dHTEUpID9cbiAgICAgIHRoaXMgOlxuICAgICAgKFNlbGVjdG9yRW5naW5lLnByZXYodGhpcywgU0VMRUNUT1JfREFUQV9UT0dHTEUpWzBdIHx8XG4gICAgICAgIFNlbGVjdG9yRW5naW5lLm5leHQodGhpcywgU0VMRUNUT1JfREFUQV9UT0dHTEUpWzBdIHx8XG4gICAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfREFUQV9UT0dHTEUsIGV2ZW50LmRlbGVnYXRlVGFyZ2V0LnBhcmVudE5vZGUpKVxuXG4gICAgY29uc3QgaW5zdGFuY2UgPSBEcm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKGdldFRvZ2dsZUJ1dHRvbilcblxuICAgIGlmIChpc1VwT3JEb3duRXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBpbnN0YW5jZS5zaG93KClcbiAgICAgIGluc3RhbmNlLl9zZWxlY3RNZW51SXRlbShldmVudClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5faXNTaG93bigpKSB7IC8vIGVsc2UgaXMgZXNjYXBlIGFuZCB3ZSBjaGVjayBpZiBpdCBpcyBzaG93blxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGluc3RhbmNlLmhpZGUoKVxuICAgICAgZ2V0VG9nZ2xlQnV0dG9uLmZvY3VzKClcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIERyb3Bkb3duLmRhdGFBcGlLZXlkb3duSGFuZGxlcilcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfTUVOVSwgRHJvcGRvd24uZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgRHJvcGRvd24uY2xlYXJNZW51cylcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZVVBfREFUQV9BUEksIERyb3Bkb3duLmNsZWFyTWVudXMpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKS50b2dnbGUoKVxufSlcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oRHJvcGRvd24pXG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9iYWNrZHJvcC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vY29uZmlnLmpzJ1xuaW1wb3J0IHsgZXhlY3V0ZSwgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiwgZ2V0RWxlbWVudCwgcmVmbG93IH0gZnJvbSAnLi9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ2JhY2tkcm9wJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IEVWRU5UX01PVVNFRE9XTiA9IGBtb3VzZWRvd24uYnMuJHtOQU1FfWBcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgY2xhc3NOYW1lOiAnbW9kYWwtYmFja2Ryb3AnLFxuICBjbGlja0NhbGxiYWNrOiBudWxsLFxuICBpc0FuaW1hdGVkOiBmYWxzZSxcbiAgaXNWaXNpYmxlOiB0cnVlLCAvLyBpZiBmYWxzZSwgd2UgdXNlIHRoZSBiYWNrZHJvcCBoZWxwZXIgd2l0aG91dCBhZGRpbmcgYW55IGVsZW1lbnQgdG8gdGhlIGRvbVxuICByb290RWxlbWVudDogJ2JvZHknIC8vIGdpdmUgdGhlIGNob2ljZSB0byBwbGFjZSBiYWNrZHJvcCB1bmRlciBkaWZmZXJlbnQgZWxlbWVudHNcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gIGNsaWNrQ2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknLFxuICBpc0FuaW1hdGVkOiAnYm9vbGVhbicsXG4gIGlzVmlzaWJsZTogJ2Jvb2xlYW4nLFxuICByb290RWxlbWVudDogJyhlbGVtZW50fHN0cmluZyknXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIEJhY2tkcm9wIGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5faXNBcHBlbmRlZCA9IGZhbHNlXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgc2hvdyhjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5fY29uZmlnLmlzVmlzaWJsZSkge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2FwcGVuZCgpXG5cbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fZ2V0RWxlbWVudCgpXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XG4gICAgICByZWZsb3coZWxlbWVudClcbiAgICB9XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgdGhpcy5fZW11bGF0ZUFuaW1hdGlvbigoKSA9PiB7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgIH0pXG4gIH1cblxuICBoaWRlKGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuaXNWaXNpYmxlKSB7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZ2V0RWxlbWVudCgpLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgdGhpcy5fZW11bGF0ZUFuaW1hdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLmRpc3Bvc2UoKVxuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICB9KVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzQXBwZW5kZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VET1dOKVxuXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKVxuICAgIHRoaXMuX2lzQXBwZW5kZWQgPSBmYWxzZVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfZ2V0RWxlbWVudCgpIHtcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGJhY2tkcm9wLmNsYXNzTmFtZSA9IHRoaXMuX2NvbmZpZy5jbGFzc05hbWVcbiAgICAgIGlmICh0aGlzLl9jb25maWcuaXNBbmltYXRlZCkge1xuICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudCA9IGJhY2tkcm9wXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRcbiAgfVxuXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIC8vIHVzZSBnZXRFbGVtZW50KCkgd2l0aCB0aGUgZGVmYXVsdCBcImJvZHlcIiB0byBnZXQgYSBmcmVzaCBFbGVtZW50IG9uIGVhY2ggaW5zdGFudGlhdGlvblxuICAgIGNvbmZpZy5yb290RWxlbWVudCA9IGdldEVsZW1lbnQoY29uZmlnLnJvb3RFbGVtZW50KVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9hcHBlbmQoKSB7XG4gICAgaWYgKHRoaXMuX2lzQXBwZW5kZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9nZXRFbGVtZW50KClcbiAgICB0aGlzLl9jb25maWcucm9vdEVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpXG5cbiAgICBFdmVudEhhbmRsZXIub24oZWxlbWVudCwgRVZFTlRfTU9VU0VET1dOLCAoKSA9PiB7XG4gICAgICBleGVjdXRlKHRoaXMuX2NvbmZpZy5jbGlja0NhbGxiYWNrKVxuICAgIH0pXG5cbiAgICB0aGlzLl9pc0FwcGVuZGVkID0gdHJ1ZVxuICB9XG5cbiAgX2VtdWxhdGVBbmltYXRpb24oY2FsbGJhY2spIHtcbiAgICBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uKGNhbGxiYWNrLCB0aGlzLl9nZXRFbGVtZW50KCksIHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tkcm9wXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9mb2N1c3RyYXAuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4uL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vY29uZmlnLmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnZm9jdXN0cmFwJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuZm9jdXN0cmFwJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSBgZm9jdXNpbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fVEFCID0gYGtleWRvd24udGFiJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBUQUJfS0VZID0gJ1RhYidcbmNvbnN0IFRBQl9OQVZfRk9SV0FSRCA9ICdmb3J3YXJkJ1xuY29uc3QgVEFCX05BVl9CQUNLV0FSRCA9ICdiYWNrd2FyZCdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYXV0b2ZvY3VzOiB0cnVlLFxuICB0cmFwRWxlbWVudDogbnVsbCAvLyBUaGUgZWxlbWVudCB0byB0cmFwIGZvY3VzIGluc2lkZSBvZlxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYXV0b2ZvY3VzOiAnYm9vbGVhbicsXG4gIHRyYXBFbGVtZW50OiAnZWxlbWVudCdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgRm9jdXNUcmFwIGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZVxuICAgIHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb24gPSBudWxsXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGFjdGl2YXRlKCkge1xuICAgIGlmICh0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hdXRvZm9jdXMpIHtcbiAgICAgIHRoaXMuX2NvbmZpZy50cmFwRWxlbWVudC5mb2N1cygpXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfS0VZKSAvLyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGZvY3VzIGxvb3BcbiAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4sIGV2ZW50ID0+IHRoaXMuX2hhbmRsZUZvY3VzaW4oZXZlbnQpKVxuICAgIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9UQUIsIGV2ZW50ID0+IHRoaXMuX2hhbmRsZUtleWRvd24oZXZlbnQpKVxuXG4gICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlXG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIGlmICghdGhpcy5faXNBY3RpdmUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2VcbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9LRVkpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9oYW5kbGVGb2N1c2luKGV2ZW50KSB7XG4gICAgY29uc3QgeyB0cmFwRWxlbWVudCB9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBkb2N1bWVudCB8fCBldmVudC50YXJnZXQgPT09IHRyYXBFbGVtZW50IHx8IHRyYXBFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRzID0gU2VsZWN0b3JFbmdpbmUuZm9jdXNhYmxlQ2hpbGRyZW4odHJhcEVsZW1lbnQpXG5cbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0cmFwRWxlbWVudC5mb2N1cygpXG4gICAgfSBlbHNlIGlmICh0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uID09PSBUQUJfTkFWX0JBQ0tXQVJEKSB7XG4gICAgICBlbGVtZW50c1tlbGVtZW50cy5sZW5ndGggLSAxXS5mb2N1cygpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnRzWzBdLmZvY3VzKClcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlS2V5ZG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgIT09IFRBQl9LRVkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb24gPSBldmVudC5zaGlmdEtleSA/IFRBQl9OQVZfQkFDS1dBUkQgOiBUQUJfTkFWX0ZPUldBUkRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb2N1c1RyYXBcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL3Njcm9sbEJhci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuLi9kb20vbWFuaXB1bGF0b3IuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gJy4vaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgU0VMRUNUT1JfRklYRURfQ09OVEVOVCA9ICcuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQsIC5zdGlja3ktdG9wJ1xuY29uc3QgU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQgPSAnLnN0aWNreS10b3AnXG5jb25zdCBQUk9QRVJUWV9QQURESU5HID0gJ3BhZGRpbmctcmlnaHQnXG5jb25zdCBQUk9QRVJUWV9NQVJHSU4gPSAnbWFyZ2luLXJpZ2h0J1xuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBTY3JvbGxCYXJIZWxwZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQuYm9keVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGdldFdpZHRoKCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvaW5uZXJXaWR0aCN1c2FnZV9ub3Rlc1xuICAgIGNvbnN0IGRvY3VtZW50V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICByZXR1cm4gTWF0aC5hYnMod2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudFdpZHRoKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKVxuICAgIHRoaXMuX2Rpc2FibGVPdmVyRmxvdygpXG4gICAgLy8gZ2l2ZSBwYWRkaW5nIHRvIGVsZW1lbnQgdG8gYmFsYW5jZSB0aGUgaGlkZGVuIHNjcm9sbGJhciB3aWR0aFxuICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsIFBST1BFUlRZX1BBRERJTkcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgKyB3aWR0aClcbiAgICAvLyB0cmljazogV2UgYWRqdXN0IHBvc2l0aXZlIHBhZGRpbmdSaWdodCBhbmQgbmVnYXRpdmUgbWFyZ2luUmlnaHQgdG8gc3RpY2t5LXRvcCBlbGVtZW50cyB0byBrZWVwIHNob3dpbmcgZnVsbHdpZHRoXG4gICAgdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfRklYRURfQ09OVEVOVCwgUFJPUEVSVFlfUEFERElORywgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSArIHdpZHRoKVxuICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX1NUSUNLWV9DT05URU5ULCBQUk9QRVJUWV9NQVJHSU4sIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgLSB3aWR0aClcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCwgJ292ZXJmbG93JylcbiAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsIFBST1BFUlRZX1BBRERJTkcpXG4gICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9GSVhFRF9DT05URU5ULCBQUk9QRVJUWV9QQURESU5HKVxuICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQsIFBST1BFUlRZX01BUkdJTilcbiAgfVxuXG4gIGlzT3ZlcmZsb3dpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0V2lkdGgoKSA+IDBcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2Rpc2FibGVPdmVyRmxvdygpIHtcbiAgICB0aGlzLl9zYXZlSW5pdGlhbEF0dHJpYnV0ZSh0aGlzLl9lbGVtZW50LCAnb3ZlcmZsb3cnKVxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICB9XG5cbiAgX3NldEVsZW1lbnRBdHRyaWJ1dGVzKHNlbGVjdG9yLCBzdHlsZVByb3BlcnR5LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gdGhpcy5nZXRXaWR0aCgpXG4gICAgY29uc3QgbWFuaXB1bGF0aW9uQ2FsbEJhY2sgPSBlbGVtZW50ID0+IHtcbiAgICAgIGlmIChlbGVtZW50ICE9PSB0aGlzLl9lbGVtZW50ICYmIHdpbmRvdy5pbm5lcldpZHRoID4gZWxlbWVudC5jbGllbnRXaWR0aCArIHNjcm9sbGJhcldpZHRoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl9zYXZlSW5pdGlhbEF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KVxuICAgICAgY29uc3QgY2FsY3VsYXRlZFZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShzdHlsZVByb3BlcnR5KVxuICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShzdHlsZVByb3BlcnR5LCBgJHtjYWxsYmFjayhOdW1iZXIucGFyc2VGbG9hdChjYWxjdWxhdGVkVmFsdWUpKX1weGApXG4gICAgfVxuXG4gICAgdGhpcy5fYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayhzZWxlY3RvciwgbWFuaXB1bGF0aW9uQ2FsbEJhY2spXG4gIH1cblxuICBfc2F2ZUluaXRpYWxBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSkge1xuICAgIGNvbnN0IGFjdHVhbFZhbHVlID0gZWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHN0eWxlUHJvcGVydHkpXG4gICAgaWYgKGFjdHVhbFZhbHVlKSB7XG4gICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHksIGFjdHVhbFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIF9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHNlbGVjdG9yLCBzdHlsZVByb3BlcnR5KSB7XG4gICAgY29uc3QgbWFuaXB1bGF0aW9uQ2FsbEJhY2sgPSBlbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KVxuICAgICAgLy8gV2Ugb25seSB3YW50IHRvIHJlbW92ZSB0aGUgcHJvcGVydHkgaWYgdGhlIHZhbHVlIGlzIGBudWxsYDsgdGhlIHZhbHVlIGNhbiBhbHNvIGJlIHplcm9cbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KHN0eWxlUHJvcGVydHkpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBNYW5pcHVsYXRvci5yZW1vdmVEYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpXG4gICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHN0eWxlUHJvcGVydHksIHZhbHVlKVxuICAgIH1cblxuICAgIHRoaXMuX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2soc2VsZWN0b3IsIG1hbmlwdWxhdGlvbkNhbGxCYWNrKVxuICB9XG5cbiAgX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2soc2VsZWN0b3IsIGNhbGxCYWNrKSB7XG4gICAgaWYgKGlzRWxlbWVudChzZWxlY3RvcikpIHtcbiAgICAgIGNhbGxCYWNrKHNlbGVjdG9yKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBzZWwgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvciwgdGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIGNhbGxCYWNrKHNlbClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsQmFySGVscGVyXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgbW9kYWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50LmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCBCYWNrZHJvcCBmcm9tICcuL3V0aWwvYmFja2Ryb3AuanMnXG5pbXBvcnQgeyBlbmFibGVEaXNtaXNzVHJpZ2dlciB9IGZyb20gJy4vdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zLmpzJ1xuaW1wb3J0IEZvY3VzVHJhcCBmcm9tICcuL3V0aWwvZm9jdXN0cmFwLmpzJ1xuaW1wb3J0IHsgZGVmaW5lSlF1ZXJ5UGx1Z2luLCBpc1JUTCwgaXNWaXNpYmxlLCByZWZsb3cgfSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5pbXBvcnQgU2Nyb2xsQmFySGVscGVyIGZyb20gJy4vdXRpbC9zY3JvbGxiYXIuanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdtb2RhbCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLm1vZGFsJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5jb25zdCBFU0NBUEVfS0VZID0gJ0VzY2FwZSdcblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERV9QUkVWRU5URUQgPSBgaGlkZVByZXZlbnRlZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1JFU0laRSA9IGByZXNpemUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19ESVNNSVNTID0gYGNsaWNrLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRURPV05fRElTTUlTUyA9IGBtb3VzZWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fRElTTUlTUyA9IGBrZXlkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9PUEVOID0gJ21vZGFsLW9wZW4nXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9TVEFUSUMgPSAnbW9kYWwtc3RhdGljJ1xuXG5jb25zdCBPUEVOX1NFTEVDVE9SID0gJy5tb2RhbC5zaG93J1xuY29uc3QgU0VMRUNUT1JfRElBTE9HID0gJy5tb2RhbC1kaWFsb2cnXG5jb25zdCBTRUxFQ1RPUl9NT0RBTF9CT0RZID0gJy5tb2RhbC1ib2R5J1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwibW9kYWxcIl0nXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGJhY2tkcm9wOiB0cnVlLFxuICBmb2N1czogdHJ1ZSxcbiAga2V5Ym9hcmQ6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGJhY2tkcm9wOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIGZvY3VzOiAnYm9vbGVhbicsXG4gIGtleWJvYXJkOiAnYm9vbGVhbidcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgdGhpcy5fZGlhbG9nID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9ESUFMT0csIHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fYmFja2Ryb3AgPSB0aGlzLl9pbml0aWFsaXplQmFja0Ryb3AoKVxuICAgIHRoaXMuX2ZvY3VzdHJhcCA9IHRoaXMuX2luaXRpYWxpemVGb2N1c1RyYXAoKVxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgdGhpcy5fc2Nyb2xsQmFyID0gbmV3IFNjcm9sbEJhckhlbHBlcigpXG5cbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHRvZ2dsZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgc2hvdyhyZWxhdGVkVGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0XG4gICAgfSlcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IHRydWVcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG5cbiAgICB0aGlzLl9zY3JvbGxCYXIuaGlkZSgpXG5cbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9PUEVOKVxuXG4gICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcblxuICAgIHRoaXMuX2JhY2tkcm9wLnNob3coKCkgPT4gdGhpcy5fc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5faXNTaG93biB8fCB0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB0aGlzLl9oaWRlTW9kYWwoKSwgdGhpcy5fZWxlbWVudCwgdGhpcy5faXNBbmltYXRlZCgpKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBFdmVudEhhbmRsZXIub2ZmKHdpbmRvdywgRVZFTlRfS0VZKVxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZGlhbG9nLCBFVkVOVF9LRVkpXG5cbiAgICB0aGlzLl9iYWNrZHJvcC5kaXNwb3NlKClcbiAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpXG5cbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIGhhbmRsZVVwZGF0ZSgpIHtcbiAgICB0aGlzLl9hZGp1c3REaWFsb2coKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfaW5pdGlhbGl6ZUJhY2tEcm9wKCkge1xuICAgIHJldHVybiBuZXcgQmFja2Ryb3Aoe1xuICAgICAgaXNWaXNpYmxlOiBCb29sZWFuKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCksIC8vICdzdGF0aWMnIG9wdGlvbiB3aWxsIGJlIHRyYW5zbGF0ZWQgdG8gdHJ1ZSwgYW5kIGJvb2xlYW5zIHdpbGwga2VlcCB0aGVpciB2YWx1ZSxcbiAgICAgIGlzQW5pbWF0ZWQ6IHRoaXMuX2lzQW5pbWF0ZWQoKVxuICAgIH0pXG4gIH1cblxuICBfaW5pdGlhbGl6ZUZvY3VzVHJhcCgpIHtcbiAgICByZXR1cm4gbmV3IEZvY3VzVHJhcCh7XG4gICAgICB0cmFwRWxlbWVudDogdGhpcy5fZWxlbWVudFxuICAgIH0pXG4gIH1cblxuICBfc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkge1xuICAgIC8vIHRyeSB0byBhcHBlbmQgZHluYW1pYyBtb2RhbFxuICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLl9lbGVtZW50KSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJylcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJylcbiAgICB0aGlzLl9lbGVtZW50LnNjcm9sbFRvcCA9IDBcblxuICAgIGNvbnN0IG1vZGFsQm9keSA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfTU9EQUxfQk9EWSwgdGhpcy5fZGlhbG9nKVxuICAgIGlmIChtb2RhbEJvZHkpIHtcbiAgICAgIG1vZGFsQm9keS5zY3JvbGxUb3AgPSAwXG4gICAgfVxuXG4gICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgY29uc3QgdHJhbnNpdGlvbkNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgICB0aGlzLl9mb2N1c3RyYXAuYWN0aXZhdGUoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldFxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKHRyYW5zaXRpb25Db21wbGV0ZSwgdGhpcy5fZGlhbG9nLCB0aGlzLl9pc0FuaW1hdGVkKCkpXG4gIH1cblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV05fRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSAhPT0gRVNDQVBFX0tFWSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpXG4gICAgfSlcblxuICAgIEV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX1JFU0laRSwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2lzU2hvd24gJiYgIXRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICB0aGlzLl9hZGp1c3REaWFsb2coKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VET1dOX0RJU01JU1MsIGV2ZW50ID0+IHtcbiAgICAgIC8vIGEgYmFkIHRyaWNrIHRvIHNlZ3JlZ2F0ZSBjbGlja3MgdGhhdCBtYXkgc3RhcnQgaW5zaWRlIGRpYWxvZyBidXQgZW5kIG91dHNpZGUsIGFuZCBhdm9pZCBsaXN0ZW4gdG8gc2Nyb2xsYmFyIGNsaWNrc1xuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9DTElDS19ESVNNSVNTLCBldmVudDIgPT4ge1xuICAgICAgICBpZiAodGhpcy5fZWxlbWVudCAhPT0gZXZlbnQudGFyZ2V0IHx8IHRoaXMuX2VsZW1lbnQgIT09IGV2ZW50Mi50YXJnZXQpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgICAgdGhpcy5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wKSB7XG4gICAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgX2hpZGVNb2RhbCgpIHtcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW1vZGFsJylcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcblxuICAgIHRoaXMuX2JhY2tkcm9wLmhpZGUoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfT1BFTilcbiAgICAgIHRoaXMuX3Jlc2V0QWRqdXN0bWVudHMoKVxuICAgICAgdGhpcy5fc2Nyb2xsQmFyLnJlc2V0KClcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTilcbiAgICB9KVxuICB9XG5cbiAgX2lzQW5pbWF0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSlcbiAgfVxuXG4gIF90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKCkge1xuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREVfUFJFVkVOVEVEKVxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID0gdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgY29uc3QgaW5pdGlhbE92ZXJmbG93WSA9IHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZXG4gICAgLy8gcmV0dXJuIGlmIHRoZSBmb2xsb3dpbmcgYmFja2dyb3VuZCB0cmFuc2l0aW9uIGhhc24ndCB5ZXQgY29tcGxldGVkXG4gICAgaWYgKGluaXRpYWxPdmVyZmxvd1kgPT09ICdoaWRkZW4nIHx8IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU1RBVElDKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbidcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TVEFUSUMpXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TVEFUSUMpXG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1kgPSBpbml0aWFsT3ZlcmZsb3dZXG4gICAgICB9LCB0aGlzLl9kaWFsb2cpXG4gICAgfSwgdGhpcy5fZGlhbG9nKVxuXG4gICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gIH1cblxuICAvKipcbiAgICogVGhlIGZvbGxvd2luZyBtZXRob2RzIGFyZSB1c2VkIHRvIGhhbmRsZSBvdmVyZmxvd2luZyBtb2RhbHNcbiAgICovXG5cbiAgX2FkanVzdERpYWxvZygpIHtcbiAgICBjb25zdCBpc01vZGFsT3ZlcmZsb3dpbmcgPSB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHRoaXMuX3Njcm9sbEJhci5nZXRXaWR0aCgpXG4gICAgY29uc3QgaXNCb2R5T3ZlcmZsb3dpbmcgPSBzY3JvbGxiYXJXaWR0aCA+IDBcblxuICAgIGlmIChpc0JvZHlPdmVyZmxvd2luZyAmJiAhaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IGlzUlRMKCkgPyAncGFkZGluZ0xlZnQnIDogJ3BhZGRpbmdSaWdodCdcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbcHJvcGVydHldID0gYCR7c2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgfVxuXG4gICAgaWYgKCFpc0JvZHlPdmVyZmxvd2luZyAmJiBpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gaXNSVEwoKSA/ICdwYWRkaW5nUmlnaHQnIDogJ3BhZGRpbmdMZWZ0J1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtwcm9wZXJ0eV0gPSBgJHtzY3JvbGxiYXJXaWR0aH1weGBcbiAgICB9XG4gIH1cblxuICBfcmVzZXRBZGp1c3RtZW50cygpIHtcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gJydcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcsIHJlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBNb2RhbC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10ocmVsYXRlZFRhcmdldClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcylcblxuICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX1NIT1csIHNob3dFdmVudCA9PiB7XG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAvLyBvbmx5IHJlZ2lzdGVyIGZvY3VzIHJlc3RvcmVyIGlmIG1vZGFsIHdpbGwgYWN0dWFsbHkgZ2V0IHNob3duXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIub25lKHRhcmdldCwgRVZFTlRfSElEREVOLCAoKSA9PiB7XG4gICAgICBpZiAoaXNWaXNpYmxlKHRoaXMpKSB7XG4gICAgICAgIHRoaXMuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG5cbiAgLy8gYXZvaWQgY29uZmxpY3Qgd2hlbiBjbGlja2luZyBtb2RhbCB0b2dnbGVyIHdoaWxlIGFub3RoZXIgb25lIGlzIG9wZW5cbiAgY29uc3QgYWxyZWFkeU9wZW4gPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKE9QRU5fU0VMRUNUT1IpXG4gIGlmIChhbHJlYWR5T3Blbikge1xuICAgIE1vZGFsLmdldEluc3RhbmNlKGFscmVhZHlPcGVuKS5oaWRlKClcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSBNb2RhbC5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldClcblxuICBkYXRhLnRvZ2dsZSh0aGlzKVxufSlcblxuZW5hYmxlRGlzbWlzc1RyaWdnZXIoTW9kYWwpXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKE1vZGFsKVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIG9mZmNhbnZhcy5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IEJhY2tkcm9wIGZyb20gJy4vdXRpbC9iYWNrZHJvcC5qcydcbmltcG9ydCB7IGVuYWJsZURpc21pc3NUcmlnZ2VyIH0gZnJvbSAnLi91dGlsL2NvbXBvbmVudC1mdW5jdGlvbnMuanMnXG5pbXBvcnQgRm9jdXNUcmFwIGZyb20gJy4vdXRpbC9mb2N1c3RyYXAuanMnXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGlzRGlzYWJsZWQsXG4gIGlzVmlzaWJsZVxufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5pbXBvcnQgU2Nyb2xsQmFySGVscGVyIGZyb20gJy4vdXRpbC9zY3JvbGxiYXIuanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdvZmZjYW52YXMnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5vZmZjYW52YXMnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcbmNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVTQ0FQRV9LRVkgPSAnRXNjYXBlJ1xuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfU0hPV0lORyA9ICdzaG93aW5nJ1xuY29uc3QgQ0xBU1NfTkFNRV9ISURJTkcgPSAnaGlkaW5nJ1xuY29uc3QgQ0xBU1NfTkFNRV9CQUNLRFJPUCA9ICdvZmZjYW52YXMtYmFja2Ryb3AnXG5jb25zdCBPUEVOX1NFTEVDVE9SID0gJy5vZmZjYW52YXMuc2hvdydcblxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFX1BSRVZFTlRFRCA9IGBoaWRlUHJldmVudGVkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1JFU0laRSA9IGByZXNpemUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fRElTTUlTUyA9IGBrZXlkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cIm9mZmNhbnZhc1wiXSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBzY3JvbGw6IGZhbHNlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBiYWNrZHJvcDogJyhib29sZWFufHN0cmluZyknLFxuICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICBzY3JvbGw6ICdib29sZWFuJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBPZmZjYW52YXMgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgdGhpcy5fYmFja2Ryb3AgPSB0aGlzLl9pbml0aWFsaXplQmFja0Ryb3AoKVxuICAgIHRoaXMuX2ZvY3VzdHJhcCA9IHRoaXMuX2luaXRpYWxpemVGb2N1c1RyYXAoKVxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgdG9nZ2xlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBzaG93KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywgeyByZWxhdGVkVGFyZ2V0IH0pXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSB0cnVlXG4gICAgdGhpcy5fYmFja2Ryb3Auc2hvdygpXG5cbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwpIHtcbiAgICAgIG5ldyBTY3JvbGxCYXJIZWxwZXIoKS5oaWRlKClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XSU5HKVxuXG4gICAgY29uc3QgY29tcGxldGVDYWxsQmFjayA9ICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnNjcm9sbCB8fCB0aGlzLl9jb25maWcuYmFja2Ryb3ApIHtcbiAgICAgICAgdGhpcy5fZm9jdXN0cmFwLmFjdGl2YXRlKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1dJTkcpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwgeyByZWxhdGVkVGFyZ2V0IH0pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxCYWNrLCB0aGlzLl9lbGVtZW50LCB0cnVlKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2hvd24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKClcbiAgICB0aGlzLl9lbGVtZW50LmJsdXIoKVxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0hJRElORylcbiAgICB0aGlzLl9iYWNrZHJvcC5oaWRlKClcblxuICAgIGNvbnN0IGNvbXBsZXRlQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XLCBDTEFTU19OQU1FX0hJRElORylcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW1vZGFsJylcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyb2xlJylcblxuICAgICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsKSB7XG4gICAgICAgIG5ldyBTY3JvbGxCYXJIZWxwZXIoKS5yZXNldCgpXG4gICAgICB9XG5cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbGJhY2ssIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHRoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKVxuICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKClcbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2luaXRpYWxpemVCYWNrRHJvcCgpIHtcbiAgICBjb25zdCBjbGlja0NhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH1cblxuICAgIC8vICdzdGF0aWMnIG9wdGlvbiB3aWxsIGJlIHRyYW5zbGF0ZWQgdG8gdHJ1ZSwgYW5kIGJvb2xlYW5zIHdpbGwga2VlcCB0aGVpciB2YWx1ZVxuICAgIGNvbnN0IGlzVmlzaWJsZSA9IEJvb2xlYW4odGhpcy5fY29uZmlnLmJhY2tkcm9wKVxuXG4gICAgcmV0dXJuIG5ldyBCYWNrZHJvcCh7XG4gICAgICBjbGFzc05hbWU6IENMQVNTX05BTUVfQkFDS0RST1AsXG4gICAgICBpc1Zpc2libGUsXG4gICAgICBpc0FuaW1hdGVkOiB0cnVlLFxuICAgICAgcm9vdEVsZW1lbnQ6IHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgIGNsaWNrQ2FsbGJhY2s6IGlzVmlzaWJsZSA/IGNsaWNrQ2FsbGJhY2sgOiBudWxsXG4gICAgfSlcbiAgfVxuXG4gIF9pbml0aWFsaXplRm9jdXNUcmFwKCkge1xuICAgIHJldHVybiBuZXcgRm9jdXNUcmFwKHtcbiAgICAgIHRyYXBFbGVtZW50OiB0aGlzLl9lbGVtZW50XG4gICAgfSlcbiAgfVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTl9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ICE9PSBFU0NBUEVfS0VZKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFX1BSRVZFTlRFRClcbiAgICB9KVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKVxuXG4gIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX0hJRERFTiwgKCkgPT4ge1xuICAgIC8vIGZvY3VzIG9uIHRyaWdnZXIgd2hlbiBpdCBpcyBjbG9zZWRcbiAgICBpZiAoaXNWaXNpYmxlKHRoaXMpKSB7XG4gICAgICB0aGlzLmZvY3VzKClcbiAgICB9XG4gIH0pXG5cbiAgLy8gYXZvaWQgY29uZmxpY3Qgd2hlbiBjbGlja2luZyBhIHRvZ2dsZXIgb2YgYW4gb2ZmY2FudmFzLCB3aGlsZSBhbm90aGVyIGlzIG9wZW5cbiAgY29uc3QgYWxyZWFkeU9wZW4gPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKE9QRU5fU0VMRUNUT1IpXG4gIGlmIChhbHJlYWR5T3BlbiAmJiBhbHJlYWR5T3BlbiAhPT0gdGFyZ2V0KSB7XG4gICAgT2ZmY2FudmFzLmdldEluc3RhbmNlKGFscmVhZHlPcGVuKS5oaWRlKClcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSBPZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpXG4gIGRhdGEudG9nZ2xlKHRoaXMpXG59KVxuXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGZvciAoY29uc3Qgc2VsZWN0b3Igb2YgU2VsZWN0b3JFbmdpbmUuZmluZChPUEVOX1NFTEVDVE9SKSkge1xuICAgIE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHNlbGVjdG9yKS5zaG93KClcbiAgfVxufSlcblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfUkVTSVpFLCAoKSA9PiB7XG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBTZWxlY3RvckVuZ2luZS5maW5kKCdbYXJpYS1tb2RhbF1bY2xhc3MqPXNob3ddW2NsYXNzKj1vZmZjYW52YXMtXScpKSB7XG4gICAgaWYgKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgIE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQpLmhpZGUoKVxuICAgIH1cbiAgfVxufSlcblxuZW5hYmxlRGlzbWlzc1RyaWdnZXIoT2ZmY2FudmFzKVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihPZmZjYW52YXMpXG5cbmV4cG9ydCBkZWZhdWx0IE9mZmNhbnZhc1xuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvc2FuaXRpemVyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLy8ganMtZG9jcy1zdGFydCBhbGxvdy1saXN0XG5jb25zdCBBUklBX0FUVFJJQlVURV9QQVRURVJOID0gL15hcmlhLVtcXHctXSokL2lcblxuZXhwb3J0IGNvbnN0IERlZmF1bHRBbGxvd2xpc3QgPSB7XG4gIC8vIEdsb2JhbCBhdHRyaWJ1dGVzIGFsbG93ZWQgb24gYW55IHN1cHBsaWVkIGVsZW1lbnQgYmVsb3cuXG4gICcqJzogWydjbGFzcycsICdkaXInLCAnaWQnLCAnbGFuZycsICdyb2xlJywgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTl0sXG4gIGE6IFsndGFyZ2V0JywgJ2hyZWYnLCAndGl0bGUnLCAncmVsJ10sXG4gIGFyZWE6IFtdLFxuICBiOiBbXSxcbiAgYnI6IFtdLFxuICBjb2w6IFtdLFxuICBjb2RlOiBbXSxcbiAgZGl2OiBbXSxcbiAgZW06IFtdLFxuICBocjogW10sXG4gIGgxOiBbXSxcbiAgaDI6IFtdLFxuICBoMzogW10sXG4gIGg0OiBbXSxcbiAgaDU6IFtdLFxuICBoNjogW10sXG4gIGk6IFtdLFxuICBpbWc6IFsnc3JjJywgJ3NyY3NldCcsICdhbHQnLCAndGl0bGUnLCAnd2lkdGgnLCAnaGVpZ2h0J10sXG4gIGxpOiBbXSxcbiAgb2w6IFtdLFxuICBwOiBbXSxcbiAgcHJlOiBbXSxcbiAgczogW10sXG4gIHNtYWxsOiBbXSxcbiAgc3BhbjogW10sXG4gIHN1YjogW10sXG4gIHN1cDogW10sXG4gIHN0cm9uZzogW10sXG4gIHU6IFtdLFxuICB1bDogW11cbn1cbi8vIGpzLWRvY3MtZW5kIGFsbG93LWxpc3RcblxuY29uc3QgdXJpQXR0cmlidXRlcyA9IG5ldyBTZXQoW1xuICAnYmFja2dyb3VuZCcsXG4gICdjaXRlJyxcbiAgJ2hyZWYnLFxuICAnaXRlbXR5cGUnLFxuICAnbG9uZ2Rlc2MnLFxuICAncG9zdGVyJyxcbiAgJ3NyYycsXG4gICd4bGluazpocmVmJ1xuXSlcblxuLyoqXG4gKiBBIHBhdHRlcm4gdGhhdCByZWNvZ25pemVzIFVSTHMgdGhhdCBhcmUgc2FmZSB3cnQuIFhTUyBpbiBVUkwgbmF2aWdhdGlvblxuICogY29udGV4dHMuXG4gKlxuICogU2hvdXQtb3V0IHRvIEFuZ3VsYXIgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzE1LjIuOC9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplci50cyNMMzhcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vYmV0dGVyLXJlZ2V4XG5jb25zdCBTQUZFX1VSTF9QQVRURVJOID0gL14oPyFqYXZhc2NyaXB0OikoPzpbYS16MC05Ky4tXSs6fFteJjovPyNdKig/OlsvPyNdfCQpKS9pXG5cbmNvbnN0IGFsbG93ZWRBdHRyaWJ1dGUgPSAoYXR0cmlidXRlLCBhbGxvd2VkQXR0cmlidXRlTGlzdCkgPT4ge1xuICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gYXR0cmlidXRlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcblxuICBpZiAoYWxsb3dlZEF0dHJpYnV0ZUxpc3QuaW5jbHVkZXMoYXR0cmlidXRlTmFtZSkpIHtcbiAgICBpZiAodXJpQXR0cmlidXRlcy5oYXMoYXR0cmlidXRlTmFtZSkpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKFNBRkVfVVJMX1BBVFRFUk4udGVzdChhdHRyaWJ1dGUubm9kZVZhbHVlKSlcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgYSByZWd1bGFyIGV4cHJlc3Npb24gdmFsaWRhdGVzIHRoZSBhdHRyaWJ1dGUuXG4gIHJldHVybiBhbGxvd2VkQXR0cmlidXRlTGlzdC5maWx0ZXIoYXR0cmlidXRlUmVnZXggPT4gYXR0cmlidXRlUmVnZXggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgLnNvbWUocmVnZXggPT4gcmVnZXgudGVzdChhdHRyaWJ1dGVOYW1lKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplSHRtbCh1bnNhZmVIdG1sLCBhbGxvd0xpc3QsIHNhbml0aXplRnVuY3Rpb24pIHtcbiAgaWYgKCF1bnNhZmVIdG1sLmxlbmd0aCkge1xuICAgIHJldHVybiB1bnNhZmVIdG1sXG4gIH1cblxuICBpZiAoc2FuaXRpemVGdW5jdGlvbiAmJiB0eXBlb2Ygc2FuaXRpemVGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBzYW5pdGl6ZUZ1bmN0aW9uKHVuc2FmZUh0bWwpXG4gIH1cblxuICBjb25zdCBkb21QYXJzZXIgPSBuZXcgd2luZG93LkRPTVBhcnNlcigpXG4gIGNvbnN0IGNyZWF0ZWREb2N1bWVudCA9IGRvbVBhcnNlci5wYXJzZUZyb21TdHJpbmcodW5zYWZlSHRtbCwgJ3RleHQvaHRtbCcpXG4gIGNvbnN0IGVsZW1lbnRzID0gW10uY29uY2F0KC4uLmNyZWF0ZWREb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSlcblxuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICBjb25zdCBlbGVtZW50TmFtZSA9IGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKVxuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhhbGxvd0xpc3QpLmluY2x1ZGVzKGVsZW1lbnROYW1lKSkge1xuICAgICAgZWxlbWVudC5yZW1vdmUoKVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBjb25zdCBhdHRyaWJ1dGVMaXN0ID0gW10uY29uY2F0KC4uLmVsZW1lbnQuYXR0cmlidXRlcylcbiAgICBjb25zdCBhbGxvd2VkQXR0cmlidXRlcyA9IFtdLmNvbmNhdChhbGxvd0xpc3RbJyonXSB8fCBbXSwgYWxsb3dMaXN0W2VsZW1lbnROYW1lXSB8fCBbXSlcblxuICAgIGZvciAoY29uc3QgYXR0cmlidXRlIG9mIGF0dHJpYnV0ZUxpc3QpIHtcbiAgICAgIGlmICghYWxsb3dlZEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGFsbG93ZWRBdHRyaWJ1dGVzKSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUubm9kZU5hbWUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZWREb2N1bWVudC5ib2R5LmlubmVySFRNTFxufVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvdGVtcGxhdGUtZmFjdG9yeS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL2NvbmZpZy5qcydcbmltcG9ydCB7IERlZmF1bHRBbGxvd2xpc3QsIHNhbml0aXplSHRtbCB9IGZyb20gJy4vc2FuaXRpemVyLmpzJ1xuaW1wb3J0IHsgZXhlY3V0ZSwgZ2V0RWxlbWVudCwgaXNFbGVtZW50IH0gZnJvbSAnLi9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ1RlbXBsYXRlRmFjdG9yeSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYWxsb3dMaXN0OiBEZWZhdWx0QWxsb3dsaXN0LFxuICBjb250ZW50OiB7fSwgLy8geyBzZWxlY3RvciA6IHRleHQgLCAgc2VsZWN0b3IyIDogdGV4dDIgLCB9XG4gIGV4dHJhQ2xhc3M6ICcnLFxuICBodG1sOiBmYWxzZSxcbiAgc2FuaXRpemU6IHRydWUsXG4gIHNhbml0aXplRm46IG51bGwsXG4gIHRlbXBsYXRlOiAnPGRpdj48L2Rpdj4nXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhbGxvd0xpc3Q6ICdvYmplY3QnLFxuICBjb250ZW50OiAnb2JqZWN0JyxcbiAgZXh0cmFDbGFzczogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgaHRtbDogJ2Jvb2xlYW4nLFxuICBzYW5pdGl6ZTogJ2Jvb2xlYW4nLFxuICBzYW5pdGl6ZUZuOiAnKG51bGx8ZnVuY3Rpb24pJyxcbiAgdGVtcGxhdGU6ICdzdHJpbmcnXG59XG5cbmNvbnN0IERlZmF1bHRDb250ZW50VHlwZSA9IHtcbiAgZW50cnk6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb258bnVsbCknLFxuICBzZWxlY3RvcjogJyhzdHJpbmd8ZWxlbWVudCknXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFRlbXBsYXRlRmFjdG9yeSBleHRlbmRzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuX2NvbmZpZy5jb250ZW50KVxuICAgICAgLm1hcChjb25maWcgPT4gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oY29uZmlnKSlcbiAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgfVxuXG4gIGhhc0NvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29udGVudCgpLmxlbmd0aCA+IDBcbiAgfVxuXG4gIGNoYW5nZUNvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuX2NoZWNrQ29udGVudChjb250ZW50KVxuICAgIHRoaXMuX2NvbmZpZy5jb250ZW50ID0geyAuLi50aGlzLl9jb25maWcuY29udGVudCwgLi4uY29udGVudCB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHRvSHRtbCgpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRlbXBsYXRlV3JhcHBlci5pbm5lckhUTUwgPSB0aGlzLl9tYXliZVNhbml0aXplKHRoaXMuX2NvbmZpZy50ZW1wbGF0ZSlcblxuICAgIGZvciAoY29uc3QgW3NlbGVjdG9yLCB0ZXh0XSBvZiBPYmplY3QuZW50cmllcyh0aGlzLl9jb25maWcuY29udGVudCkpIHtcbiAgICAgIHRoaXMuX3NldENvbnRlbnQodGVtcGxhdGVXcmFwcGVyLCB0ZXh0LCBzZWxlY3RvcilcbiAgICB9XG5cbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRlbXBsYXRlV3JhcHBlci5jaGlsZHJlblswXVxuICAgIGNvbnN0IGV4dHJhQ2xhc3MgPSB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuZXh0cmFDbGFzcylcblxuICAgIGlmIChleHRyYUNsYXNzKSB7XG4gICAgICB0ZW1wbGF0ZS5jbGFzc0xpc3QuYWRkKC4uLmV4dHJhQ2xhc3Muc3BsaXQoJyAnKSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcGxhdGVcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX3R5cGVDaGVja0NvbmZpZyhjb25maWcpIHtcbiAgICBzdXBlci5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9jaGVja0NvbnRlbnQoY29uZmlnLmNvbnRlbnQpXG4gIH1cblxuICBfY2hlY2tDb250ZW50KGFyZykge1xuICAgIGZvciAoY29uc3QgW3NlbGVjdG9yLCBjb250ZW50XSBvZiBPYmplY3QuZW50cmllcyhhcmcpKSB7XG4gICAgICBzdXBlci5fdHlwZUNoZWNrQ29uZmlnKHsgc2VsZWN0b3IsIGVudHJ5OiBjb250ZW50IH0sIERlZmF1bHRDb250ZW50VHlwZSlcbiAgICB9XG4gIH1cblxuICBfc2V0Q29udGVudCh0ZW1wbGF0ZSwgY29udGVudCwgc2VsZWN0b3IpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZUVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHNlbGVjdG9yLCB0ZW1wbGF0ZSlcblxuICAgIGlmICghdGVtcGxhdGVFbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb250ZW50ID0gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oY29udGVudClcblxuICAgIGlmICghY29udGVudCkge1xuICAgICAgdGVtcGxhdGVFbGVtZW50LnJlbW92ZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaXNFbGVtZW50KGNvbnRlbnQpKSB7XG4gICAgICB0aGlzLl9wdXRFbGVtZW50SW5UZW1wbGF0ZShnZXRFbGVtZW50KGNvbnRlbnQpLCB0ZW1wbGF0ZUVsZW1lbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmh0bWwpIHtcbiAgICAgIHRlbXBsYXRlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLl9tYXliZVNhbml0aXplKGNvbnRlbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0ZW1wbGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50XG4gIH1cblxuICBfbWF5YmVTYW5pdGl6ZShhcmcpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLnNhbml0aXplID8gc2FuaXRpemVIdG1sKGFyZywgdGhpcy5fY29uZmlnLmFsbG93TGlzdCwgdGhpcy5fY29uZmlnLnNhbml0aXplRm4pIDogYXJnXG4gIH1cblxuICBfcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGV4ZWN1dGUoYXJnLCBbdGhpc10pXG4gIH1cblxuICBfcHV0RWxlbWVudEluVGVtcGxhdGUoZWxlbWVudCwgdGVtcGxhdGVFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5odG1sKSB7XG4gICAgICB0ZW1wbGF0ZUVsZW1lbnQuaW5uZXJIVE1MID0gJydcbiAgICAgIHRlbXBsYXRlRWxlbWVudC5hcHBlbmQoZWxlbWVudClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRlbXBsYXRlRWxlbWVudC50ZXh0Q29udGVudCA9IGVsZW1lbnQudGV4dENvbnRlbnRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZW1wbGF0ZUZhY3RvcnlcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB0b29sdGlwLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICogYXMgUG9wcGVyIGZyb20gJ0Bwb3BwZXJqcy9jb3JlJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvci5qcydcbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiwgZXhlY3V0ZSwgZmluZFNoYWRvd1Jvb3QsIGdldEVsZW1lbnQsIGdldFVJRCwgaXNSVEwsIG5vb3AgfSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5pbXBvcnQgeyBEZWZhdWx0QWxsb3dsaXN0IH0gZnJvbSAnLi91dGlsL3Nhbml0aXplci5qcydcbmltcG9ydCBUZW1wbGF0ZUZhY3RvcnkgZnJvbSAnLi91dGlsL3RlbXBsYXRlLWZhY3RvcnkuanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICd0b29sdGlwJ1xuY29uc3QgRElTQUxMT1dFRF9BVFRSSUJVVEVTID0gbmV3IFNldChbJ3Nhbml0aXplJywgJ2FsbG93TGlzdCcsICdzYW5pdGl6ZUZuJ10pXG5cbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9NT0RBTCA9ICdtb2RhbCdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG5jb25zdCBTRUxFQ1RPUl9UT09MVElQX0lOTkVSID0gJy50b29sdGlwLWlubmVyJ1xuY29uc3QgU0VMRUNUT1JfTU9EQUwgPSBgLiR7Q0xBU1NfTkFNRV9NT0RBTH1gXG5cbmNvbnN0IEVWRU5UX01PREFMX0hJREUgPSAnaGlkZS5icy5tb2RhbCdcblxuY29uc3QgVFJJR0dFUl9IT1ZFUiA9ICdob3ZlcidcbmNvbnN0IFRSSUdHRVJfRk9DVVMgPSAnZm9jdXMnXG5jb25zdCBUUklHR0VSX0NMSUNLID0gJ2NsaWNrJ1xuY29uc3QgVFJJR0dFUl9NQU5VQUwgPSAnbWFudWFsJ1xuXG5jb25zdCBFVkVOVF9ISURFID0gJ2hpZGUnXG5jb25zdCBFVkVOVF9ISURERU4gPSAnaGlkZGVuJ1xuY29uc3QgRVZFTlRfU0hPVyA9ICdzaG93J1xuY29uc3QgRVZFTlRfU0hPV04gPSAnc2hvd24nXG5jb25zdCBFVkVOVF9JTlNFUlRFRCA9ICdpbnNlcnRlZCdcbmNvbnN0IEVWRU5UX0NMSUNLID0gJ2NsaWNrJ1xuY29uc3QgRVZFTlRfRk9DVVNJTiA9ICdmb2N1c2luJ1xuY29uc3QgRVZFTlRfRk9DVVNPVVQgPSAnZm9jdXNvdXQnXG5jb25zdCBFVkVOVF9NT1VTRUVOVEVSID0gJ21vdXNlZW50ZXInXG5jb25zdCBFVkVOVF9NT1VTRUxFQVZFID0gJ21vdXNlbGVhdmUnXG5cbmNvbnN0IEF0dGFjaG1lbnRNYXAgPSB7XG4gIEFVVE86ICdhdXRvJyxcbiAgVE9QOiAndG9wJyxcbiAgUklHSFQ6IGlzUlRMKCkgPyAnbGVmdCcgOiAncmlnaHQnLFxuICBCT1RUT006ICdib3R0b20nLFxuICBMRUZUOiBpc1JUTCgpID8gJ3JpZ2h0JyA6ICdsZWZ0J1xufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhbGxvd0xpc3Q6IERlZmF1bHRBbGxvd2xpc3QsXG4gIGFuaW1hdGlvbjogdHJ1ZSxcbiAgYm91bmRhcnk6ICdjbGlwcGluZ1BhcmVudHMnLFxuICBjb250YWluZXI6IGZhbHNlLFxuICBjdXN0b21DbGFzczogJycsXG4gIGRlbGF5OiAwLFxuICBmYWxsYmFja1BsYWNlbWVudHM6IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10sXG4gIGh0bWw6IGZhbHNlLFxuICBvZmZzZXQ6IFswLCA2XSxcbiAgcGxhY2VtZW50OiAndG9wJyxcbiAgcG9wcGVyQ29uZmlnOiBudWxsLFxuICBzYW5pdGl6ZTogdHJ1ZSxcbiAgc2FuaXRpemVGbjogbnVsbCxcbiAgc2VsZWN0b3I6IGZhbHNlLFxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj4nICtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PicgK1xuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+JyArXG4gICAgICAgICAgICAnPC9kaXY+JyxcbiAgdGl0bGU6ICcnLFxuICB0cmlnZ2VyOiAnaG92ZXIgZm9jdXMnXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhbGxvd0xpc3Q6ICdvYmplY3QnLFxuICBhbmltYXRpb246ICdib29sZWFuJyxcbiAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgY29udGFpbmVyOiAnKHN0cmluZ3xlbGVtZW50fGJvb2xlYW4pJyxcbiAgY3VzdG9tQ2xhc3M6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gIGRlbGF5OiAnKG51bWJlcnxvYmplY3QpJyxcbiAgZmFsbGJhY2tQbGFjZW1lbnRzOiAnYXJyYXknLFxuICBodG1sOiAnYm9vbGVhbicsXG4gIG9mZnNldDogJyhhcnJheXxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgcGxhY2VtZW50OiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3R8ZnVuY3Rpb24pJyxcbiAgc2FuaXRpemU6ICdib29sZWFuJyxcbiAgc2FuaXRpemVGbjogJyhudWxsfGZ1bmN0aW9uKScsXG4gIHNlbGVjdG9yOiAnKHN0cmluZ3xib29sZWFuKScsXG4gIHRlbXBsYXRlOiAnc3RyaW5nJyxcbiAgdGl0bGU6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJyxcbiAgdHJpZ2dlcjogJ3N0cmluZydcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgVG9vbHRpcCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgdG9vbHRpcHMgcmVxdWlyZSBQb3BwZXIgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZyknKVxuICAgIH1cblxuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIC8vIFByaXZhdGVcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlXG4gICAgdGhpcy5fdGltZW91dCA9IDBcbiAgICB0aGlzLl9pc0hvdmVyZWQgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IHt9XG4gICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIHRoaXMuX3RlbXBsYXRlRmFjdG9yeSA9IG51bGxcbiAgICB0aGlzLl9uZXdDb250ZW50ID0gbnVsbFxuXG4gICAgLy8gUHJvdGVjdGVkXG4gICAgdGhpcy50aXAgPSBudWxsXG5cbiAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKVxuXG4gICAgaWYgKCF0aGlzLl9jb25maWcuc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuX2ZpeFRpdGxlKClcbiAgICB9XG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlXG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9IGZhbHNlXG4gIH1cblxuICB0b2dnbGVFbmFibGVkKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9ICF0aGlzLl9pc0VuYWJsZWRcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlci5jbGljayA9ICF0aGlzLl9hY3RpdmVUcmlnZ2VyLmNsaWNrXG4gICAgaWYgKHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgdGhpcy5fbGVhdmUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZW50ZXIoKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcblxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX01PREFMKSwgRVZFTlRfTU9EQUxfSElERSwgdGhpcy5faGlkZU1vZGFsSGFuZGxlcilcblxuICAgIGlmICh0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpKVxuICAgIH1cblxuICAgIHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKVxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHVzZSBzaG93IG9uIHZpc2libGUgZWxlbWVudHMnKVxuICAgIH1cblxuICAgIGlmICghKHRoaXMuX2lzV2l0aENvbnRlbnQoKSAmJiB0aGlzLl9pc0VuYWJsZWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9TSE9XKSlcbiAgICBjb25zdCBzaGFkb3dSb290ID0gZmluZFNoYWRvd1Jvb3QodGhpcy5fZWxlbWVudClcbiAgICBjb25zdCBpc0luVGhlRG9tID0gKHNoYWRvd1Jvb3QgfHwgdGhpcy5fZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuY29udGFpbnModGhpcy5fZWxlbWVudClcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCAhaXNJblRoZURvbSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gVE9ETzogdjYgcmVtb3ZlIHRoaXMgb3IgbWFrZSBpdCBvcHRpb25hbFxuICAgIHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKVxuXG4gICAgY29uc3QgdGlwID0gdGhpcy5fZ2V0VGlwRWxlbWVudCgpXG5cbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIHRpcC5nZXRBdHRyaWJ1dGUoJ2lkJykpXG5cbiAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnModGhpcy50aXApKSB7XG4gICAgICBjb250YWluZXIuYXBwZW5kKHRpcClcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0lOU0VSVEVEKSlcbiAgICB9XG5cbiAgICB0aGlzLl9wb3BwZXIgPSB0aGlzLl9jcmVhdGVQb3BwZXIodGlwKVxuXG4gICAgdGlwLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX1NIT1dOKSlcblxuICAgICAgaWYgKHRoaXMuX2lzSG92ZXJlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5fbGVhdmUoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc0hvdmVyZWQgPSBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMudGlwLCB0aGlzLl9pc0FuaW1hdGVkKCkpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9ISURFKSlcbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRpcCA9IHRoaXMuX2dldFRpcEVsZW1lbnQoKVxuICAgIHRpcC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0NMSUNLXSA9IGZhbHNlXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0ZPQ1VTXSA9IGZhbHNlXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0hPVkVSXSA9IGZhbHNlXG4gICAgdGhpcy5faXNIb3ZlcmVkID0gbnVsbCAvLyBpdCBpcyBhIHRyaWNrIHRvIHN1cHBvcnQgbWFudWFsIHRyaWdnZXJpbmdcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLl9pc0hvdmVyZWQpIHtcbiAgICAgICAgdGhpcy5fZGlzcG9zZVBvcHBlcigpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JylcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0hJRERFTikpXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy50aXAsIHRoaXMuX2lzQW5pbWF0ZWQoKSlcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcm90ZWN0ZWRcbiAgX2lzV2l0aENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5fZ2V0VGl0bGUoKSlcbiAgfVxuXG4gIF9nZXRUaXBFbGVtZW50KCkge1xuICAgIGlmICghdGhpcy50aXApIHtcbiAgICAgIHRoaXMudGlwID0gdGhpcy5fY3JlYXRlVGlwRWxlbWVudCh0aGlzLl9uZXdDb250ZW50IHx8IHRoaXMuX2dldENvbnRlbnRGb3JUZW1wbGF0ZSgpKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnRpcFxuICB9XG5cbiAgX2NyZWF0ZVRpcEVsZW1lbnQoY29udGVudCkge1xuICAgIGNvbnN0IHRpcCA9IHRoaXMuX2dldFRlbXBsYXRlRmFjdG9yeShjb250ZW50KS50b0h0bWwoKVxuXG4gICAgLy8gVE9ETzogcmVtb3ZlIHRoaXMgY2hlY2sgaW4gdjZcbiAgICBpZiAoIXRpcCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0ZBREUsIENMQVNTX05BTUVfU0hPVylcbiAgICAvLyBUT0RPOiB2NiB0aGUgZm9sbG93aW5nIGNhbiBiZSBhY2hpZXZlZCB3aXRoIENTUyBvbmx5XG4gICAgdGlwLmNsYXNzTGlzdC5hZGQoYGJzLSR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FfS1hdXRvYClcblxuICAgIGNvbnN0IHRpcElkID0gZ2V0VUlEKHRoaXMuY29uc3RydWN0b3IuTkFNRSkudG9TdHJpbmcoKVxuXG4gICAgdGlwLnNldEF0dHJpYnV0ZSgnaWQnLCB0aXBJZClcblxuICAgIGlmICh0aGlzLl9pc0FuaW1hdGVkKCkpIHtcbiAgICAgIHRpcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGlwXG4gIH1cblxuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLl9uZXdDb250ZW50ID0gY29udGVudFxuICAgIGlmICh0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKVxuICAgICAgdGhpcy5zaG93KClcbiAgICB9XG4gIH1cblxuICBfZ2V0VGVtcGxhdGVGYWN0b3J5KGNvbnRlbnQpIHtcbiAgICBpZiAodGhpcy5fdGVtcGxhdGVGYWN0b3J5KSB7XG4gICAgICB0aGlzLl90ZW1wbGF0ZUZhY3RvcnkuY2hhbmdlQ29udGVudChjb250ZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90ZW1wbGF0ZUZhY3RvcnkgPSBuZXcgVGVtcGxhdGVGYWN0b3J5KHtcbiAgICAgICAgLi4udGhpcy5fY29uZmlnLFxuICAgICAgICAvLyB0aGUgYGNvbnRlbnRgIHZhciBoYXMgdG8gYmUgYWZ0ZXIgYHRoaXMuX2NvbmZpZ2BcbiAgICAgICAgLy8gdG8gb3ZlcnJpZGUgY29uZmlnLmNvbnRlbnQgaW4gY2FzZSBvZiBwb3BvdmVyXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICAgIGV4dHJhQ2xhc3M6IHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy5jdXN0b21DbGFzcylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlRmFjdG9yeVxuICB9XG5cbiAgX2dldENvbnRlbnRGb3JUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW1NFTEVDVE9SX1RPT0xUSVBfSU5ORVJdOiB0aGlzLl9nZXRUaXRsZSgpXG4gICAgfVxuICB9XG5cbiAgX2dldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcudGl0bGUpIHx8IHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJylcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudCkge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmdldE9yQ3JlYXRlSW5zdGFuY2UoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKCkpXG4gIH1cblxuICBfaXNBbmltYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLmFuaW1hdGlvbiB8fCAodGhpcy50aXAgJiYgdGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpXG4gIH1cblxuICBfaXNTaG93bigpIHtcbiAgICByZXR1cm4gdGhpcy50aXAgJiYgdGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVylcbiAgfVxuXG4gIF9jcmVhdGVQb3BwZXIodGlwKSB7XG4gICAgY29uc3QgcGxhY2VtZW50ID0gZXhlY3V0ZSh0aGlzLl9jb25maWcucGxhY2VtZW50LCBbdGhpcywgdGlwLCB0aGlzLl9lbGVtZW50XSlcbiAgICBjb25zdCBhdHRhY2htZW50ID0gQXR0YWNobWVudE1hcFtwbGFjZW1lbnQudG9VcHBlckNhc2UoKV1cbiAgICByZXR1cm4gUG9wcGVyLmNyZWF0ZVBvcHBlcih0aGlzLl9lbGVtZW50LCB0aXAsIHRoaXMuX2dldFBvcHBlckNvbmZpZyhhdHRhY2htZW50KSlcbiAgfVxuXG4gIF9nZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgeyBvZmZzZXQgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gb2Zmc2V0LnNwbGl0KCcsJykubWFwKHZhbHVlID0+IE51bWJlci5wYXJzZUludCh2YWx1ZSwgMTApKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gcG9wcGVyRGF0YSA9PiBvZmZzZXQocG9wcGVyRGF0YSwgdGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGV4ZWN1dGUoYXJnLCBbdGhpcy5fZWxlbWVudF0pXG4gIH1cblxuICBfZ2V0UG9wcGVyQ29uZmlnKGF0dGFjaG1lbnQpIHtcbiAgICBjb25zdCBkZWZhdWx0QnNQb3BwZXJDb25maWcgPSB7XG4gICAgICBwbGFjZW1lbnQ6IGF0dGFjaG1lbnQsXG4gICAgICBtb2RpZmllcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdmbGlwJyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBmYWxsYmFja1BsYWNlbWVudHM6IHRoaXMuX2NvbmZpZy5mYWxsYmFja1BsYWNlbWVudHNcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgYm91bmRhcnk6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdhcnJvdycsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgZWxlbWVudDogYC4ke3RoaXMuY29uc3RydWN0b3IuTkFNRX0tYXJyb3dgXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ3ByZVNldFBsYWNlbWVudCcsXG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBwaGFzZTogJ2JlZm9yZU1haW4nLFxuICAgICAgICAgIGZuOiBkYXRhID0+IHtcbiAgICAgICAgICAgIC8vIFByZS1zZXQgUG9wcGVyJ3MgcGxhY2VtZW50IGF0dHJpYnV0ZSBpbiBvcmRlciB0byByZWFkIHRoZSBhcnJvdyBzaXplcyBwcm9wZXJseS5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgUG9wcGVyIG1peGVzIHVwIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IGRpbWVuc2lvbnMgc2luY2UgdGhlIGluaXRpYWwgYXJyb3cgc3R5bGUgaXMgZm9yIHRvcCBwbGFjZW1lbnRcbiAgICAgICAgICAgIHRoaXMuX2dldFRpcEVsZW1lbnQoKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9wcGVyLXBsYWNlbWVudCcsIGRhdGEuc3RhdGUucGxhY2VtZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5kZWZhdWx0QnNQb3BwZXJDb25maWcsXG4gICAgICAuLi5leGVjdXRlKHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcsIFtkZWZhdWx0QnNQb3BwZXJDb25maWddKVxuICAgIH1cbiAgfVxuXG4gIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgdHJpZ2dlcnMgPSB0aGlzLl9jb25maWcudHJpZ2dlci5zcGxpdCgnICcpXG5cbiAgICBmb3IgKGNvbnN0IHRyaWdnZXIgb2YgdHJpZ2dlcnMpIHtcbiAgICAgIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9DTElDSyksIHRoaXMuX2NvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpXG4gICAgICAgICAgY29udGV4dC50b2dnbGUoKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9PSBUUklHR0VSX01BTlVBTCkge1xuICAgICAgICBjb25zdCBldmVudEluID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfTU9VU0VFTlRFUikgOlxuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0ZPQ1VTSU4pXG4gICAgICAgIGNvbnN0IGV2ZW50T3V0ID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfTU9VU0VMRUFWRSkgOlxuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0ZPQ1VTT1VUKVxuXG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBldmVudEluLCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHtcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KVxuICAgICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3VzaW4nID8gVFJJR0dFUl9GT0NVUyA6IFRSSUdHRVJfSE9WRVJdID0gdHJ1ZVxuICAgICAgICAgIGNvbnRleHQuX2VudGVyKClcbiAgICAgICAgfSlcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIGV2ZW50T3V0LCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHtcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KVxuICAgICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3Vzb3V0JyA/IFRSSUdHRVJfRk9DVVMgOiBUUklHR0VSX0hPVkVSXSA9XG4gICAgICAgICAgICBjb250ZXh0Ll9lbGVtZW50LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpXG5cbiAgICAgICAgICBjb250ZXh0Ll9sZWF2ZSgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faGlkZU1vZGFsSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9NT0RBTCksIEVWRU5UX01PREFMX0hJREUsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpXG4gIH1cblxuICBfZml4VGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuXG4gICAgaWYgKCF0aXRsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpICYmICF0aGlzLl9lbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0aXRsZSlcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScsIHRpdGxlKSAvLyBETyBOT1QgVVNFIElULiBJcyBvbmx5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpXG4gIH1cblxuICBfZW50ZXIoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24oKSB8fCB0aGlzLl9pc0hvdmVyZWQpIHtcbiAgICAgIHRoaXMuX2lzSG92ZXJlZCA9IHRydWVcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzSG92ZXJlZCA9IHRydWVcblxuICAgIHRoaXMuX3NldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2lzSG92ZXJlZCkge1xuICAgICAgICB0aGlzLnNob3coKVxuICAgICAgfVxuICAgIH0sIHRoaXMuX2NvbmZpZy5kZWxheS5zaG93KVxuICB9XG5cbiAgX2xlYXZlKCkge1xuICAgIGlmICh0aGlzLl9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzSG92ZXJlZCA9IGZhbHNlXG5cbiAgICB0aGlzLl9zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9XG4gICAgfSwgdGhpcy5fY29uZmlnLmRlbGF5LmhpZGUpXG4gIH1cblxuICBfc2V0VGltZW91dChoYW5kbGVyLCB0aW1lb3V0KSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpXG4gICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoaGFuZGxlciwgdGltZW91dClcbiAgfVxuXG4gIF9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuX2FjdGl2ZVRyaWdnZXIpLmluY2x1ZGVzKHRydWUpXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbnN0IGRhdGFBdHRyaWJ1dGVzID0gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudClcblxuICAgIGZvciAoY29uc3QgZGF0YUF0dHJpYnV0ZSBvZiBPYmplY3Qua2V5cyhkYXRhQXR0cmlidXRlcykpIHtcbiAgICAgIGlmIChESVNBTExPV0VEX0FUVFJJQlVURVMuaGFzKGRhdGFBdHRyaWJ1dGUpKSB7XG4gICAgICAgIGRlbGV0ZSBkYXRhQXR0cmlidXRlc1tkYXRhQXR0cmlidXRlXVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLmRhdGFBdHRyaWJ1dGVzLFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cbiAgICBjb25maWcgPSB0aGlzLl9tZXJnZUNvbmZpZ09iaihjb25maWcpXG4gICAgY29uZmlnID0gdGhpcy5fY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpXG4gICAgdGhpcy5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZylcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICBjb25maWcuY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lciA9PT0gZmFsc2UgPyBkb2N1bWVudC5ib2R5IDogZ2V0RWxlbWVudChjb25maWcuY29udGFpbmVyKVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuZGVsYXkgPSB7XG4gICAgICAgIHNob3c6IGNvbmZpZy5kZWxheSxcbiAgICAgICAgaGlkZTogY29uZmlnLmRlbGF5XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGl0bGUgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcudGl0bGUgPSBjb25maWcudGl0bGUudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmNvbnRlbnQgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuY29udGVudCA9IGNvbmZpZy5jb250ZW50LnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGVsZWdhdGVDb25maWcoKSB7XG4gICAgY29uc3QgY29uZmlnID0ge31cblxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuX2NvbmZpZykpIHtcbiAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgY29uZmlnW2tleV0gPSB2YWx1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbmZpZy5zZWxlY3RvciA9IGZhbHNlXG4gICAgY29uZmlnLnRyaWdnZXIgPSAnbWFudWFsJ1xuXG4gICAgLy8gSW4gdGhlIGZ1dHVyZSBjYW4gYmUgcmVwbGFjZWQgd2l0aDpcbiAgICAvLyBjb25zdCBrZXlzV2l0aERpZmZlcmVudFZhbHVlcyA9IE9iamVjdC5lbnRyaWVzKHRoaXMuX2NvbmZpZykuZmlsdGVyKGVudHJ5ID0+IHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtlbnRyeVswXV0gIT09IHRoaXMuX2NvbmZpZ1tlbnRyeVswXV0pXG4gICAgLy8gYE9iamVjdC5mcm9tRW50cmllcyhrZXlzV2l0aERpZmZlcmVudFZhbHVlcylgXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2Rpc3Bvc2VQb3BwZXIoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0aGlzLnRpcCkge1xuICAgICAgdGhpcy50aXAucmVtb3ZlKClcbiAgICAgIHRoaXMudGlwID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFRvb2x0aXAuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFRvb2x0aXApXG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXBcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBwb3BvdmVyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwLmpzJ1xuaW1wb3J0IHsgZGVmaW5lSlF1ZXJ5UGx1Z2luIH0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAncG9wb3ZlcidcblxuY29uc3QgU0VMRUNUT1JfVElUTEUgPSAnLnBvcG92ZXItaGVhZGVyJ1xuY29uc3QgU0VMRUNUT1JfQ09OVEVOVCA9ICcucG9wb3Zlci1ib2R5J1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICAuLi5Ub29sdGlwLkRlZmF1bHQsXG4gIGNvbnRlbnQ6ICcnLFxuICBvZmZzZXQ6IFswLCA4XSxcbiAgcGxhY2VtZW50OiAncmlnaHQnLFxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJwb3BvdmVyXCIgcm9sZT1cInRvb2x0aXBcIj4nICtcbiAgICAnPGRpdiBjbGFzcz1cInBvcG92ZXItYXJyb3dcIj48L2Rpdj4nICtcbiAgICAnPGgzIGNsYXNzPVwicG9wb3Zlci1oZWFkZXJcIj48L2gzPicgK1xuICAgICc8ZGl2IGNsYXNzPVwicG9wb3Zlci1ib2R5XCI+PC9kaXY+JyArXG4gICAgJzwvZGl2PicsXG4gIHRyaWdnZXI6ICdjbGljaydcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIC4uLlRvb2x0aXAuRGVmYXVsdFR5cGUsXG4gIGNvbnRlbnQ6ICcobnVsbHxzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBUb29sdGlwIHtcbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIE92ZXJyaWRlc1xuICBfaXNXaXRoQ29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0VGl0bGUoKSB8fCB0aGlzLl9nZXRDb250ZW50KClcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2dldENvbnRlbnRGb3JUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW1NFTEVDVE9SX1RJVExFXTogdGhpcy5fZ2V0VGl0bGUoKSxcbiAgICAgIFtTRUxFQ1RPUl9DT05URU5UXTogdGhpcy5fZ2V0Q29udGVudCgpXG4gICAgfVxuICB9XG5cbiAgX2dldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy5jb250ZW50KVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gUG9wb3Zlci5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oUG9wb3ZlcilcblxuZXhwb3J0IGRlZmF1bHQgUG9wb3ZlclxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHNjcm9sbHNweS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IHsgZGVmaW5lSlF1ZXJ5UGx1Z2luLCBnZXRFbGVtZW50LCBpc0Rpc2FibGVkLCBpc1Zpc2libGUgfSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdzY3JvbGxzcHknXG5jb25zdCBEQVRBX0tFWSA9ICdicy5zY3JvbGxzcHknXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgRVZFTlRfQUNUSVZBVEUgPSBgYWN0aXZhdGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDSyA9IGBjbGljayR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNID0gJ2Ryb3Bkb3duLWl0ZW0nXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfU1BZID0gJ1tkYXRhLWJzLXNweT1cInNjcm9sbFwiXSdcbmNvbnN0IFNFTEVDVE9SX1RBUkdFVF9MSU5LUyA9ICdbaHJlZl0nXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCA9ICcubmF2LCAubGlzdC1ncm91cCdcbmNvbnN0IFNFTEVDVE9SX05BVl9MSU5LUyA9ICcubmF2LWxpbmsnXG5jb25zdCBTRUxFQ1RPUl9OQVZfSVRFTVMgPSAnLm5hdi1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfTElTVF9JVEVNUyA9ICcubGlzdC1ncm91cC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfTElOS19JVEVNUyA9IGAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7U0VMRUNUT1JfTkFWX0lURU1TfSA+ICR7U0VMRUNUT1JfTkFWX0xJTktTfSwgJHtTRUxFQ1RPUl9MSVNUX0lURU1TfWBcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOID0gJy5kcm9wZG93bidcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9ICcuZHJvcGRvd24tdG9nZ2xlJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBvZmZzZXQ6IG51bGwsIC8vIFRPRE86IHY2IEBkZXByZWNhdGVkLCBrZWVwIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSByZWFzb25zXG4gIHJvb3RNYXJnaW46ICcwcHggMHB4IC0yNSUnLFxuICBzbW9vdGhTY3JvbGw6IGZhbHNlLFxuICB0YXJnZXQ6IG51bGwsXG4gIHRocmVzaG9sZDogWzAuMSwgMC41LCAxXVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgb2Zmc2V0OiAnKG51bWJlcnxudWxsKScsIC8vIFRPRE8gdjYgQGRlcHJlY2F0ZWQsIGtlZXAgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHJlYXNvbnNcbiAgcm9vdE1hcmdpbjogJ3N0cmluZycsXG4gIHNtb290aFNjcm9sbDogJ2Jvb2xlYW4nLFxuICB0YXJnZXQ6ICdlbGVtZW50JyxcbiAgdGhyZXNob2xkOiAnYXJyYXknXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFNjcm9sbFNweSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb25maWcpXG5cbiAgICAvLyB0aGlzLl9lbGVtZW50IGlzIHRoZSBvYnNlcnZhYmxlc0NvbnRhaW5lciBhbmQgY29uZmlnLnRhcmdldCB0aGUgbWVudSBsaW5rcyB3cmFwcGVyXG4gICAgdGhpcy5fdGFyZ2V0TGlua3MgPSBuZXcgTWFwKClcbiAgICB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMgPSBuZXcgTWFwKClcbiAgICB0aGlzLl9yb290RWxlbWVudCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fZWxlbWVudCkub3ZlcmZsb3dZID09PSAndmlzaWJsZScgPyBudWxsIDogdGhpcy5fZWxlbWVudFxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGxcbiAgICB0aGlzLl9vYnNlcnZlciA9IG51bGxcbiAgICB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEgPSB7XG4gICAgICB2aXNpYmxlRW50cnlUb3A6IDAsXG4gICAgICBwYXJlbnRTY3JvbGxUb3A6IDBcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoKCkgLy8gaW5pdGlhbGl6ZVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICByZWZyZXNoKCkge1xuICAgIHRoaXMuX2luaXRpYWxpemVUYXJnZXRzQW5kT2JzZXJ2YWJsZXMoKVxuICAgIHRoaXMuX21heWJlRW5hYmxlU21vb3RoU2Nyb2xsKClcblxuICAgIGlmICh0aGlzLl9vYnNlcnZlcikge1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29ic2VydmVyID0gdGhpcy5fZ2V0TmV3T2JzZXJ2ZXIoKVxuICAgIH1cblxuICAgIGZvciAoY29uc3Qgc2VjdGlvbiBvZiB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMudmFsdWVzKCkpIHtcbiAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUoc2VjdGlvbilcbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICAvLyBUT0RPOiBvbiB2NiB0YXJnZXQgc2hvdWxkIGJlIGdpdmVuIGV4cGxpY2l0bHkgJiByZW1vdmUgdGhlIHt0YXJnZXQ6ICdzcy10YXJnZXQnfSBjYXNlXG4gICAgY29uZmlnLnRhcmdldCA9IGdldEVsZW1lbnQoY29uZmlnLnRhcmdldCkgfHwgZG9jdW1lbnQuYm9keVxuXG4gICAgLy8gVE9ETzogdjYgT25seSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgcmVhc29ucy4gVXNlIHJvb3RNYXJnaW4gb25seVxuICAgIGNvbmZpZy5yb290TWFyZ2luID0gY29uZmlnLm9mZnNldCA/IGAke2NvbmZpZy5vZmZzZXR9cHggMHB4IC0zMCVgIDogY29uZmlnLnJvb3RNYXJnaW5cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnRocmVzaG9sZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbmZpZy50aHJlc2hvbGQgPSBjb25maWcudGhyZXNob2xkLnNwbGl0KCcsJykubWFwKHZhbHVlID0+IE51bWJlci5wYXJzZUZsb2F0KHZhbHVlKSlcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfbWF5YmVFbmFibGVTbW9vdGhTY3JvbGwoKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuc21vb3RoU2Nyb2xsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyB1bnJlZ2lzdGVyIGFueSBwcmV2aW91cyBsaXN0ZW5lcnNcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2NvbmZpZy50YXJnZXQsIEVWRU5UX0NMSUNLKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2NvbmZpZy50YXJnZXQsIEVWRU5UX0NMSUNLLCBTRUxFQ1RPUl9UQVJHRVRfTElOS1MsIGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IG9ic2VydmFibGVTZWN0aW9uID0gdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLmdldChldmVudC50YXJnZXQuaGFzaClcbiAgICAgIGlmIChvYnNlcnZhYmxlU2VjdGlvbikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLl9yb290RWxlbWVudCB8fCB3aW5kb3dcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gb2JzZXJ2YWJsZVNlY3Rpb24ub2Zmc2V0VG9wIC0gdGhpcy5fZWxlbWVudC5vZmZzZXRUb3BcbiAgICAgICAgaWYgKHJvb3Quc2Nyb2xsVG8pIHtcbiAgICAgICAgICByb290LnNjcm9sbFRvKHsgdG9wOiBoZWlnaHQsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hyb21lIDYwIGRvZXNuJ3Qgc3VwcG9ydCBgc2Nyb2xsVG9gXG4gICAgICAgIHJvb3Quc2Nyb2xsVG9wID0gaGVpZ2h0XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIF9nZXROZXdPYnNlcnZlcigpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgcm9vdDogdGhpcy5fcm9vdEVsZW1lbnQsXG4gICAgICB0aHJlc2hvbGQ6IHRoaXMuX2NvbmZpZy50aHJlc2hvbGQsXG4gICAgICByb290TWFyZ2luOiB0aGlzLl9jb25maWcucm9vdE1hcmdpblxuICAgIH1cblxuICAgIHJldHVybiBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB0aGlzLl9vYnNlcnZlckNhbGxiYWNrKGVudHJpZXMpLCBvcHRpb25zKVxuICB9XG5cbiAgLy8gVGhlIGxvZ2ljIG9mIHNlbGVjdGlvblxuICBfb2JzZXJ2ZXJDYWxsYmFjayhlbnRyaWVzKSB7XG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGVudHJ5ID0+IHRoaXMuX3RhcmdldExpbmtzLmdldChgIyR7ZW50cnkudGFyZ2V0LmlkfWApXG4gICAgY29uc3QgYWN0aXZhdGUgPSBlbnRyeSA9PiB7XG4gICAgICB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEudmlzaWJsZUVudHJ5VG9wID0gZW50cnkudGFyZ2V0Lm9mZnNldFRvcFxuICAgICAgdGhpcy5fcHJvY2Vzcyh0YXJnZXRFbGVtZW50KGVudHJ5KSlcbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnRTY3JvbGxUb3AgPSAodGhpcy5fcm9vdEVsZW1lbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5zY3JvbGxUb3BcbiAgICBjb25zdCB1c2VyU2Nyb2xsc0Rvd24gPSBwYXJlbnRTY3JvbGxUb3AgPj0gdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnBhcmVudFNjcm9sbFRvcFxuICAgIHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS5wYXJlbnRTY3JvbGxUb3AgPSBwYXJlbnRTY3JvbGxUb3BcblxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgaWYgKCFlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsXG4gICAgICAgIHRoaXMuX2NsZWFyQWN0aXZlQ2xhc3ModGFyZ2V0RWxlbWVudChlbnRyeSkpXG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgZW50cnlJc0xvd2VyVGhhblByZXZpb3VzID0gZW50cnkudGFyZ2V0Lm9mZnNldFRvcCA+PSB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEudmlzaWJsZUVudHJ5VG9wXG4gICAgICAvLyBpZiB3ZSBhcmUgc2Nyb2xsaW5nIGRvd24sIHBpY2sgdGhlIGJpZ2dlciBvZmZzZXRUb3BcbiAgICAgIGlmICh1c2VyU2Nyb2xsc0Rvd24gJiYgZW50cnlJc0xvd2VyVGhhblByZXZpb3VzKSB7XG4gICAgICAgIGFjdGl2YXRlKGVudHJ5KVxuICAgICAgICAvLyBpZiBwYXJlbnQgaXNuJ3Qgc2Nyb2xsZWQsIGxldCdzIGtlZXAgdGhlIGZpcnN0IHZpc2libGUgaXRlbSwgYnJlYWtpbmcgdGhlIGl0ZXJhdGlvblxuICAgICAgICBpZiAoIXBhcmVudFNjcm9sbFRvcCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gaWYgd2UgYXJlIHNjcm9sbGluZyB1cCwgcGljayB0aGUgc21hbGxlc3Qgb2Zmc2V0VG9wXG4gICAgICBpZiAoIXVzZXJTY3JvbGxzRG93biAmJiAhZW50cnlJc0xvd2VyVGhhblByZXZpb3VzKSB7XG4gICAgICAgIGFjdGl2YXRlKGVudHJ5KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9pbml0aWFsaXplVGFyZ2V0c0FuZE9ic2VydmFibGVzKCkge1xuICAgIHRoaXMuX3RhcmdldExpbmtzID0gbmV3IE1hcCgpXG4gICAgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zID0gbmV3IE1hcCgpXG5cbiAgICBjb25zdCB0YXJnZXRMaW5rcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfVEFSR0VUX0xJTktTLCB0aGlzLl9jb25maWcudGFyZ2V0KVxuXG4gICAgZm9yIChjb25zdCBhbmNob3Igb2YgdGFyZ2V0TGlua3MpIHtcbiAgICAgIC8vIGVuc3VyZSB0aGF0IHRoZSBhbmNob3IgaGFzIGFuIGlkIGFuZCBpcyBub3QgZGlzYWJsZWRcbiAgICAgIGlmICghYW5jaG9yLmhhc2ggfHwgaXNEaXNhYmxlZChhbmNob3IpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9ic2VydmFibGVTZWN0aW9uID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShkZWNvZGVVUkkoYW5jaG9yLmhhc2gpLCB0aGlzLl9lbGVtZW50KVxuXG4gICAgICAvLyBlbnN1cmUgdGhhdCB0aGUgb2JzZXJ2YWJsZVNlY3Rpb24gZXhpc3RzICYgaXMgdmlzaWJsZVxuICAgICAgaWYgKGlzVmlzaWJsZShvYnNlcnZhYmxlU2VjdGlvbikpIHtcbiAgICAgICAgdGhpcy5fdGFyZ2V0TGlua3Muc2V0KGRlY29kZVVSSShhbmNob3IuaGFzaCksIGFuY2hvcilcbiAgICAgICAgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLnNldChhbmNob3IuaGFzaCwgb2JzZXJ2YWJsZVNlY3Rpb24pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3Byb2Nlc3ModGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldCA9PT0gdGFyZ2V0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9jbGVhckFjdGl2ZUNsYXNzKHRoaXMuX2NvbmZpZy50YXJnZXQpXG4gICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gdGFyZ2V0XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgdGhpcy5fYWN0aXZhdGVQYXJlbnRzKHRhcmdldClcblxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0FDVElWQVRFLCB7IHJlbGF0ZWRUYXJnZXQ6IHRhcmdldCB9KVxuICB9XG5cbiAgX2FjdGl2YXRlUGFyZW50cyh0YXJnZXQpIHtcbiAgICAvLyBBY3RpdmF0ZSBkcm9wZG93biBwYXJlbnRzXG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNKSkge1xuICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUsIHRhcmdldC5jbG9zZXN0KFNFTEVDVE9SX0RST1BET1dOKSlcbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGxpc3RHcm91cCBvZiBTZWxlY3RvckVuZ2luZS5wYXJlbnRzKHRhcmdldCwgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVApKSB7XG4gICAgICAvLyBTZXQgdHJpZ2dlcmVkIGxpbmtzIHBhcmVudHMgYXMgYWN0aXZlXG4gICAgICAvLyBXaXRoIGJvdGggPHVsPiBhbmQgPG5hdj4gbWFya3VwIGEgcGFyZW50IGlzIHRoZSBwcmV2aW91cyBzaWJsaW5nIG9mIGFueSBuYXYgYW5jZXN0b3JcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBTZWxlY3RvckVuZ2luZS5wcmV2KGxpc3RHcm91cCwgU0VMRUNUT1JfTElOS19JVEVNUykpIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9jbGVhckFjdGl2ZUNsYXNzKHBhcmVudCkge1xuICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgY29uc3QgYWN0aXZlTm9kZXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKGAke1NFTEVDVE9SX1RBUkdFVF9MSU5LU30uJHtDTEFTU19OQU1FX0FDVElWRX1gLCBwYXJlbnQpXG4gICAgZm9yIChjb25zdCBub2RlIG9mIGFjdGl2ZU5vZGVzKSB7XG4gICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gU2Nyb2xsU3B5LmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBmb3IgKGNvbnN0IHNweSBvZiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfU1BZKSkge1xuICAgIFNjcm9sbFNweS5nZXRPckNyZWF0ZUluc3RhbmNlKHNweSlcbiAgfVxufSlcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oU2Nyb2xsU3B5KVxuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxTcHlcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB0YWIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50LmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiwgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQsIGlzRGlzYWJsZWQgfSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICd0YWInXG5jb25zdCBEQVRBX0tFWSA9ICdicy50YWInXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV04gPSBga2V5ZG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZfWBcblxuY29uc3QgQVJST1dfTEVGVF9LRVkgPSAnQXJyb3dMZWZ0J1xuY29uc3QgQVJST1dfUklHSFRfS0VZID0gJ0Fycm93UmlnaHQnXG5jb25zdCBBUlJPV19VUF9LRVkgPSAnQXJyb3dVcCdcbmNvbnN0IEFSUk9XX0RPV05fS0VZID0gJ0Fycm93RG93bidcbmNvbnN0IEhPTUVfS0VZID0gJ0hvbWUnXG5jb25zdCBFTkRfS0VZID0gJ0VuZCdcblxuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX0RST1BET1dOID0gJ2Ryb3Bkb3duJ1xuXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSAnLmRyb3Bkb3duLXRvZ2dsZSdcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX01FTlUgPSAnLmRyb3Bkb3duLW1lbnUnXG5jb25zdCBOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gYDpub3QoJHtTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEV9KWBcblxuY29uc3QgU0VMRUNUT1JfVEFCX1BBTkVMID0gJy5saXN0LWdyb3VwLCAubmF2LCBbcm9sZT1cInRhYmxpc3RcIl0nXG5jb25zdCBTRUxFQ1RPUl9PVVRFUiA9ICcubmF2LWl0ZW0sIC5saXN0LWdyb3VwLWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9JTk5FUiA9IGAubmF2LWxpbmske05PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEV9LCAubGlzdC1ncm91cC1pdGVtJHtOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfSwgW3JvbGU9XCJ0YWJcIl0ke05PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEV9YFxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwidGFiXCJdLCBbZGF0YS1icy10b2dnbGU9XCJwaWxsXCJdLCBbZGF0YS1icy10b2dnbGU9XCJsaXN0XCJdJyAvLyBUT0RPOiBjb3VsZCBvbmx5IGJlIGB0YWJgIGluIHY2XG5jb25zdCBTRUxFQ1RPUl9JTk5FUl9FTEVNID0gYCR7U0VMRUNUT1JfSU5ORVJ9LCAke1NFTEVDVE9SX0RBVEFfVE9HR0xFfWBcblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEVfQUNUSVZFID0gYC4ke0NMQVNTX05BTUVfQUNUSVZFfVtkYXRhLWJzLXRvZ2dsZT1cInRhYlwiXSwgLiR7Q0xBU1NfTkFNRV9BQ1RJVkV9W2RhdGEtYnMtdG9nZ2xlPVwicGlsbFwiXSwgLiR7Q0xBU1NfTkFNRV9BQ1RJVkV9W2RhdGEtYnMtdG9nZ2xlPVwibGlzdFwiXWBcblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgVGFiIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuICAgIHRoaXMuX3BhcmVudCA9IHRoaXMuX2VsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9UQUJfUEFORUwpXG5cbiAgICBpZiAoIXRoaXMuX3BhcmVudCkge1xuICAgICAgcmV0dXJuXG4gICAgICAvLyBUT0RPOiBzaG91bGQgdGhyb3cgZXhjZXB0aW9uIGluIHY2XG4gICAgICAvLyB0aHJvdyBuZXcgVHlwZUVycm9yKGAke2VsZW1lbnQub3V0ZXJIVE1MfSBoYXMgbm90IGEgdmFsaWQgcGFyZW50ICR7U0VMRUNUT1JfSU5ORVJfRUxFTX1gKVxuICAgIH1cblxuICAgIC8vIFNldCB1cCBpbml0aWFsIGFyaWEgYXR0cmlidXRlc1xuICAgIHRoaXMuX3NldEluaXRpYWxBdHRyaWJ1dGVzKHRoaXMuX3BhcmVudCwgdGhpcy5fZ2V0Q2hpbGRyZW4oKSlcblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOLCBldmVudCA9PiB0aGlzLl9rZXlkb3duKGV2ZW50KSlcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgc2hvdygpIHsgLy8gU2hvd3MgdGhpcyBlbGVtIGFuZCBkZWFjdGl2YXRlIHRoZSBhY3RpdmUgc2libGluZyBpZiBleGlzdHNcbiAgICBjb25zdCBpbm5lckVsZW0gPSB0aGlzLl9lbGVtZW50XG4gICAgaWYgKHRoaXMuX2VsZW1Jc0FjdGl2ZShpbm5lckVsZW0pKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBTZWFyY2ggZm9yIGFjdGl2ZSB0YWIgb24gc2FtZSBwYXJlbnQgdG8gZGVhY3RpdmF0ZSBpdFxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuX2dldEFjdGl2ZUVsZW0oKVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gYWN0aXZlID9cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKGFjdGl2ZSwgRVZFTlRfSElERSwgeyByZWxhdGVkVGFyZ2V0OiBpbm5lckVsZW0gfSkgOlxuICAgICAgbnVsbFxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIoaW5uZXJFbGVtLCBFVkVOVF9TSE9XLCB7IHJlbGF0ZWRUYXJnZXQ6IGFjdGl2ZSB9KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkIHx8IChoaWRlRXZlbnQgJiYgaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9kZWFjdGl2YXRlKGFjdGl2ZSwgaW5uZXJFbGVtKVxuICAgIHRoaXMuX2FjdGl2YXRlKGlubmVyRWxlbSwgYWN0aXZlKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfYWN0aXZhdGUoZWxlbWVudCwgcmVsYXRlZEVsZW0pIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcblxuICAgIHRoaXMuX2FjdGl2YXRlKFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkpIC8vIFNlYXJjaCBhbmQgYWN0aXZhdGUvc2hvdyB0aGUgcHJvcGVyIHNlY3Rpb25cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykgIT09ICd0YWInKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKVxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKVxuICAgICAgdGhpcy5fdG9nZ2xlRHJvcERvd24oZWxlbWVudCwgdHJ1ZSlcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKGVsZW1lbnQsIEVWRU5UX1NIT1dOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHJlbGF0ZWRFbGVtXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIGVsZW1lbnQsIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpXG4gIH1cblxuICBfZGVhY3RpdmF0ZShlbGVtZW50LCByZWxhdGVkRWxlbSkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIGVsZW1lbnQuYmx1cigpXG5cbiAgICB0aGlzLl9kZWFjdGl2YXRlKFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkpIC8vIFNlYXJjaCBhbmQgZGVhY3RpdmF0ZSB0aGUgc2hvd24gc2VjdGlvbiB0b29cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykgIT09ICd0YWInKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIGZhbHNlKVxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJylcbiAgICAgIHRoaXMuX3RvZ2dsZURyb3BEb3duKGVsZW1lbnQsIGZhbHNlKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIoZWxlbWVudCwgRVZFTlRfSElEREVOLCB7IHJlbGF0ZWRUYXJnZXQ6IHJlbGF0ZWRFbGVtIH0pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgZWxlbWVudCwgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKSlcbiAgfVxuXG4gIF9rZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKCEoW0FSUk9XX0xFRlRfS0VZLCBBUlJPV19SSUdIVF9LRVksIEFSUk9XX1VQX0tFWSwgQVJST1dfRE9XTl9LRVksIEhPTUVfS0VZLCBFTkRfS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkvLyBzdG9wUHJvcGFnYXRpb24vcHJldmVudERlZmF1bHQgYm90aCBhZGRlZCB0byBzdXBwb3J0IHVwL2Rvd24ga2V5cyB3aXRob3V0IHNjcm9sbGluZyB0aGUgcGFnZVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5fZ2V0Q2hpbGRyZW4oKS5maWx0ZXIoZWxlbWVudCA9PiAhaXNEaXNhYmxlZChlbGVtZW50KSlcbiAgICBsZXQgbmV4dEFjdGl2ZUVsZW1lbnRcblxuICAgIGlmIChbSE9NRV9LRVksIEVORF9LRVldLmluY2x1ZGVzKGV2ZW50LmtleSkpIHtcbiAgICAgIG5leHRBY3RpdmVFbGVtZW50ID0gY2hpbGRyZW5bZXZlbnQua2V5ID09PSBIT01FX0tFWSA/IDAgOiBjaGlsZHJlbi5sZW5ndGggLSAxXVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpc05leHQgPSBbQVJST1dfUklHSFRfS0VZLCBBUlJPV19ET1dOX0tFWV0uaW5jbHVkZXMoZXZlbnQua2V5KVxuICAgICAgbmV4dEFjdGl2ZUVsZW1lbnQgPSBnZXROZXh0QWN0aXZlRWxlbWVudChjaGlsZHJlbiwgZXZlbnQudGFyZ2V0LCBpc05leHQsIHRydWUpXG4gICAgfVxuXG4gICAgaWYgKG5leHRBY3RpdmVFbGVtZW50KSB7XG4gICAgICBuZXh0QWN0aXZlRWxlbWVudC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSlcbiAgICAgIFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKG5leHRBY3RpdmVFbGVtZW50KS5zaG93KClcbiAgICB9XG4gIH1cblxuICBfZ2V0Q2hpbGRyZW4oKSB7IC8vIGNvbGxlY3Rpb24gb2YgaW5uZXIgZWxlbWVudHNcbiAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JTk5FUl9FTEVNLCB0aGlzLl9wYXJlbnQpXG4gIH1cblxuICBfZ2V0QWN0aXZlRWxlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0Q2hpbGRyZW4oKS5maW5kKGNoaWxkID0+IHRoaXMuX2VsZW1Jc0FjdGl2ZShjaGlsZCkpIHx8IG51bGxcbiAgfVxuXG4gIF9zZXRJbml0aWFsQXR0cmlidXRlcyhwYXJlbnQsIGNoaWxkcmVuKSB7XG4gICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMocGFyZW50LCAncm9sZScsICd0YWJsaXN0JylcblxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgIHRoaXMuX3NldEluaXRpYWxBdHRyaWJ1dGVzT25DaGlsZChjaGlsZClcbiAgICB9XG4gIH1cblxuICBfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPbkNoaWxkKGNoaWxkKSB7XG4gICAgY2hpbGQgPSB0aGlzLl9nZXRJbm5lckVsZW1lbnQoY2hpbGQpXG4gICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLl9lbGVtSXNBY3RpdmUoY2hpbGQpXG4gICAgY29uc3Qgb3V0ZXJFbGVtID0gdGhpcy5fZ2V0T3V0ZXJFbGVtZW50KGNoaWxkKVxuICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIGlzQWN0aXZlKVxuXG4gICAgaWYgKG91dGVyRWxlbSAhPT0gY2hpbGQpIHtcbiAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKG91dGVyRWxlbSwgJ3JvbGUnLCAncHJlc2VudGF0aW9uJylcbiAgICB9XG5cbiAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJylcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhjaGlsZCwgJ3JvbGUnLCAndGFiJylcblxuICAgIC8vIHNldCBhdHRyaWJ1dGVzIHRvIHRoZSByZWxhdGVkIHBhbmVsIHRvb1xuICAgIHRoaXMuX3NldEluaXRpYWxBdHRyaWJ1dGVzT25UYXJnZXRQYW5lbChjaGlsZClcbiAgfVxuXG4gIF9zZXRJbml0aWFsQXR0cmlidXRlc09uVGFyZ2V0UGFuZWwoY2hpbGQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGNoaWxkKVxuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKHRhcmdldCwgJ3JvbGUnLCAndGFicGFuZWwnKVxuXG4gICAgaWYgKGNoaWxkLmlkKSB7XG4gICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyh0YXJnZXQsICdhcmlhLWxhYmVsbGVkYnknLCBgJHtjaGlsZC5pZH1gKVxuICAgIH1cbiAgfVxuXG4gIF90b2dnbGVEcm9wRG93bihlbGVtZW50LCBvcGVuKSB7XG4gICAgY29uc3Qgb3V0ZXJFbGVtID0gdGhpcy5fZ2V0T3V0ZXJFbGVtZW50KGVsZW1lbnQpXG4gICAgaWYgKCFvdXRlckVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX0RST1BET1dOKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlID0gKHNlbGVjdG9yLCBjbGFzc05hbWUpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHNlbGVjdG9yLCBvdXRlckVsZW0pXG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lLCBvcGVuKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZShTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUsIENMQVNTX05BTUVfQUNUSVZFKVxuICAgIHRvZ2dsZShTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VLCBDTEFTU19OQU1FX1NIT1cpXG4gICAgb3V0ZXJFbGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIG9wZW4pXG4gIH1cblxuICBfc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMoZWxlbWVudCwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoYXR0cmlidXRlKSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSlcbiAgICB9XG4gIH1cblxuICBfZWxlbUlzQWN0aXZlKGVsZW0pIHtcbiAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gIH1cblxuICAvLyBUcnkgdG8gZ2V0IHRoZSBpbm5lciBlbGVtZW50ICh1c3VhbGx5IHRoZSAubmF2LWxpbmspXG4gIF9nZXRJbm5lckVsZW1lbnQoZWxlbSkge1xuICAgIHJldHVybiBlbGVtLm1hdGNoZXMoU0VMRUNUT1JfSU5ORVJfRUxFTSkgPyBlbGVtIDogU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9JTk5FUl9FTEVNLCBlbGVtKVxuICB9XG5cbiAgLy8gVHJ5IHRvIGdldCB0aGUgb3V0ZXIgZWxlbWVudCAodXN1YWxseSB0aGUgLm5hdi1pdGVtKVxuICBfZ2V0T3V0ZXJFbGVtZW50KGVsZW0pIHtcbiAgICByZXR1cm4gZWxlbS5jbG9zZXN0KFNFTEVDVE9SX09VVEVSKSB8fCBlbGVtXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpLnNob3coKVxufSlcblxuLyoqXG4gKiBJbml0aWFsaXplIG9uIGZvY3VzXG4gKi9cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9UT0dHTEVfQUNUSVZFKSkge1xuICAgIFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQpXG4gIH1cbn0pXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihUYWIpXG5cbmV4cG9ydCBkZWZhdWx0IFRhYlxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHRvYXN0LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCB7IGVuYWJsZURpc21pc3NUcmlnZ2VyIH0gZnJvbSAnLi91dGlsL2NvbXBvbmVudC1mdW5jdGlvbnMuanMnXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4sIHJlZmxvdyB9IGZyb20gJy4vdXRpbC9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ3RvYXN0J1xuY29uc3QgREFUQV9LRVkgPSAnYnMudG9hc3QnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuXG5jb25zdCBFVkVOVF9NT1VTRU9WRVIgPSBgbW91c2VvdmVyJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VPVVQgPSBgbW91c2VvdXQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9GT0NVU0lOID0gYGZvY3VzaW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9GT0NVU09VVCA9IGBmb2N1c291dCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX0hJREUgPSAnaGlkZScgLy8gQGRlcHJlY2F0ZWQgLSBrZXB0IGhlcmUgb25seSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XSU5HID0gJ3Nob3dpbmcnXG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhbmltYXRpb246ICdib29sZWFuJyxcbiAgYXV0b2hpZGU6ICdib29sZWFuJyxcbiAgZGVsYXk6ICdudW1iZXInXG59XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGFuaW1hdGlvbjogdHJ1ZSxcbiAgYXV0b2hpZGU6IHRydWUsXG4gIGRlbGF5OiA1MDAwXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFRvYXN0IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG4gICAgdGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbiA9IGZhbHNlXG4gICAgdGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbiA9IGZhbHNlXG4gICAgdGhpcy5fc2V0TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgc2hvdygpIHtcbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XKVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9jbGVhclRpbWVvdXQoKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpXG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XSU5HKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04pXG5cbiAgICAgIHRoaXMuX21heWJlU2NoZWR1bGVIaWRlKClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9ISURFKSAvLyBAZGVwcmVjYXRlZFxuICAgIHJlZmxvdyh0aGlzLl9lbGVtZW50KVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1csIENMQVNTX05BTUVfU0hPV0lORylcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2NvbmZpZy5hbmltYXRpb24pXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5pc1Nob3duKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfSElERSkgLy8gQGRlcHJlY2F0ZWRcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1dJTkcsIENMQVNTX05BTUVfU0hPVylcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XSU5HKVxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2NvbmZpZy5hbmltYXRpb24pXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHRoaXMuX2NsZWFyVGltZW91dCgpXG5cbiAgICBpZiAodGhpcy5pc1Nob3duKCkpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgfVxuXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICBpc1Nob3duKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX21heWJlU2NoZWR1bGVIaWRlKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnLmF1dG9oaWRlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbiB8fCB0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH0sIHRoaXMuX2NvbmZpZy5kZWxheSlcbiAgfVxuXG4gIF9vbkludGVyYWN0aW9uKGV2ZW50LCBpc0ludGVyYWN0aW5nKSB7XG4gICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICBjYXNlICdtb3VzZW92ZXInOlxuICAgICAgY2FzZSAnbW91c2VvdXQnOiB7XG4gICAgICAgIHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb24gPSBpc0ludGVyYWN0aW5nXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGNhc2UgJ2ZvY3VzaW4nOlxuICAgICAgY2FzZSAnZm9jdXNvdXQnOiB7XG4gICAgICAgIHRoaXMuX2hhc0tleWJvYXJkSW50ZXJhY3Rpb24gPSBpc0ludGVyYWN0aW5nXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNJbnRlcmFjdGluZykge1xuICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0KClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZXZlbnQucmVsYXRlZFRhcmdldFxuICAgIGlmICh0aGlzLl9lbGVtZW50ID09PSBuZXh0RWxlbWVudCB8fCB0aGlzLl9lbGVtZW50LmNvbnRhaW5zKG5leHRFbGVtZW50KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fbWF5YmVTY2hlZHVsZUhpZGUoKVxuICB9XG5cbiAgX3NldExpc3RlbmVycygpIHtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VPVkVSLCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCB0cnVlKSlcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VPVVQsIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIGZhbHNlKSlcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfRk9DVVNJTiwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgdHJ1ZSkpXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0ZPQ1VTT1VULCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCBmYWxzZSkpXG4gIH1cblxuICBfY2xlYXJUaW1lb3V0KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBUb2FzdC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbmVuYWJsZURpc21pc3NUcmlnZ2VyKFRvYXN0KVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihUb2FzdClcblxuZXhwb3J0IGRlZmF1bHQgVG9hc3RcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBpbmRleC51bWQuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgQWxlcnQgZnJvbSAnLi9zcmMvYWxlcnQuanMnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vc3JjL2J1dHRvbi5qcydcbmltcG9ydCBDYXJvdXNlbCBmcm9tICcuL3NyYy9jYXJvdXNlbC5qcydcbmltcG9ydCBDb2xsYXBzZSBmcm9tICcuL3NyYy9jb2xsYXBzZS5qcydcbmltcG9ydCBEcm9wZG93biBmcm9tICcuL3NyYy9kcm9wZG93bi5qcydcbmltcG9ydCBNb2RhbCBmcm9tICcuL3NyYy9tb2RhbC5qcydcbmltcG9ydCBPZmZjYW52YXMgZnJvbSAnLi9zcmMvb2ZmY2FudmFzLmpzJ1xuaW1wb3J0IFBvcG92ZXIgZnJvbSAnLi9zcmMvcG9wb3Zlci5qcydcbmltcG9ydCBTY3JvbGxTcHkgZnJvbSAnLi9zcmMvc2Nyb2xsc3B5LmpzJ1xuaW1wb3J0IFRhYiBmcm9tICcuL3NyYy90YWIuanMnXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi9zcmMvdG9hc3QuanMnXG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3NyYy90b29sdGlwLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEFsZXJ0LFxuICBCdXR0b24sXG4gIENhcm91c2VsLFxuICBDb2xsYXBzZSxcbiAgRHJvcGRvd24sXG4gIE1vZGFsLFxuICBPZmZjYW52YXMsXG4gIFBvcG92ZXIsXG4gIFNjcm9sbFNweSxcbiAgVGFiLFxuICBUb2FzdCxcbiAgVG9vbHRpcFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==