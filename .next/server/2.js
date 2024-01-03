exports.ids = [2];
exports.modules = {

/***/ "./public/assets/vendor/bootstrap/js/bootstrap.bundle.min.js":
/*!*******************************************************************!*\
  !*** ./public/assets/vendor/bootstrap/js/bootstrap.bundle.min.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) {
   true ? module.exports = e() : undefined;
}(this, function () {
  "use strict";

  const t = new Map(),
        e = {
    set(e, i, n) {
      t.has(e) || t.set(e, new Map());
      const s = t.get(e);
      s.has(i) || 0 === s.size ? s.set(i, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);
    },

    get: (e, i) => t.has(e) && t.get(e).get(i) || null,

    remove(e, i) {
      if (!t.has(e)) return;
      const n = t.get(e);
      n.delete(i), 0 === n.size && t.delete(e);
    }

  },
        i = "transitionend",
        n = t => (t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, (t, e) => `#${CSS.escape(e)}`)), t),
        s = t => {
    t.dispatchEvent(new Event(i));
  },
        o = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        r = t => o(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(n(t)) : null,
        a = t => {
    if (!o(t) || 0 === t.getClientRects().length) return !1;
    const e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
          i = t.closest("details:not([open])");
    if (!i) return e;

    if (i !== t) {
      const e = t.closest("summary");
      if (e && e.parentNode !== i) return !1;
      if (null === e) return !1;
    }

    return e;
  },
        l = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
        c = t => {
    if (!document.documentElement.attachShadow) return null;

    if ("function" == typeof t.getRootNode) {
      const e = t.getRootNode();
      return e instanceof ShadowRoot ? e : null;
    }

    return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null;
  },
        h = () => {},
        d = t => {
    t.offsetHeight;
  },
        u = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null,
        f = [],
        p = () => "rtl" === document.documentElement.dir,
        m = t => {
    var e;
    e = () => {
      const e = u();

      if (e) {
        const i = t.NAME,
              n = e.fn[i];
        e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = n, t.jQueryInterface);
      }
    }, "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", () => {
      for (const t of f) t();
    }), f.push(e)) : e();
  },
        g = (t, e = [], i = t) => "function" == typeof t ? t(...e) : i,
        _ = (t, e, n = !0) => {
    if (!n) return void g(t);

    const o = (t => {
      if (!t) return 0;
      let {
        transitionDuration: e,
        transitionDelay: i
      } = window.getComputedStyle(t);
      const n = Number.parseFloat(e),
            s = Number.parseFloat(i);
      return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
    })(e) + 5;

    let r = !1;

    const a = ({
      target: n
    }) => {
      n === e && (r = !0, e.removeEventListener(i, a), g(t));
    };

    e.addEventListener(i, a), setTimeout(() => {
      r || s(e);
    }, o);
  },
        b = (t, e, i, n) => {
    const s = t.length;
    let o = t.indexOf(e);
    return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1, n && (o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))]);
  },
        v = /[^.]*(?=\..*)\.|.*/,
        y = /\..*/,
        w = /::\d+$/,
        A = {};

  let E = 1;
  const T = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
        C = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function O(t, e) {
    return e && `${e}::${E++}` || t.uidEvent || E++;
  }

  function x(t) {
    const e = O(t);
    return t.uidEvent = e, A[e] = A[e] || {}, A[e];
  }

  function k(t, e, i = null) {
    return Object.values(t).find(t => t.callable === e && t.delegationSelector === i);
  }

  function L(t, e, i) {
    const n = "string" == typeof e,
          s = n ? i : e || i;
    let o = I(t);
    return C.has(o) || (o = t), [n, s, o];
  }

  function S(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;
    let [o, r, a] = L(e, i, n);

    if (e in T) {
      const t = t => function (e) {
        if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
      };

      r = t(r);
    }

    const l = x(t),
          c = l[a] || (l[a] = {}),
          h = k(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && s);
    const d = O(r, e.replace(v, "")),
          u = o ? function (t, e, i) {
      return function n(s) {
        const o = t.querySelectorAll(e);

        for (let {
          target: r
        } = s; r && r !== this; r = r.parentNode) for (const a of o) if (a === r) return P(s, {
          delegateTarget: r
        }), n.oneOff && N.off(t, s.type, e, i), i.apply(r, [s]);
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
    const o = k(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }

  function $(t, e, i, n) {
    const s = e[i] || {};

    for (const [o, r] of Object.entries(s)) o.includes(n) && D(t, e, i, r.callable, r.delegationSelector);
  }

  function I(t) {
    return t = t.replace(y, ""), T[t] || t;
  }

  const N = {
    on(t, e, i, n) {
      S(t, e, i, n, !1);
    },

    one(t, e, i, n) {
      S(t, e, i, n, !0);
    },

    off(t, e, i, n) {
      if ("string" != typeof e || !t) return;
      const [s, o, r] = L(e, i, n),
            a = r !== e,
            l = x(t),
            c = l[r] || {},
            h = e.startsWith(".");

      if (void 0 === o) {
        if (h) for (const i of Object.keys(l)) $(t, l, i, e.slice(1));

        for (const [i, n] of Object.entries(c)) {
          const s = i.replace(w, "");
          a && !e.includes(s) || D(t, l, r, n.callable, n.delegationSelector);
        }
      } else {
        if (!Object.keys(c).length) return;
        D(t, l, r, o, s ? i : null);
      }
    },

    trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      const n = u();
      let s = null,
          o = !0,
          r = !0,
          a = !1;
      e !== I(e) && n && (s = n.Event(e, i), n(t).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
      const l = P(new Event(e, {
        bubbles: o,
        cancelable: !0
      }), i);
      return a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l;
    }

  };

  function P(t, e = {}) {
    for (const [i, n] of Object.entries(e)) try {
      t[i] = n;
    } catch (e) {
      Object.defineProperty(t, i, {
        configurable: !0,
        get: () => n
      });
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
    return t.replace(/[A-Z]/g, t => `-${t.toLowerCase()}`);
  }

  const F = {
    setDataAttribute(t, e, i) {
      t.setAttribute(`data-bs-${j(e)}`, i);
    },

    removeDataAttribute(t, e) {
      t.removeAttribute(`data-bs-${j(e)}`);
    },

    getDataAttributes(t) {
      if (!t) return {};
      const e = {},
            i = Object.keys(t.dataset).filter(t => t.startsWith("bs") && !t.startsWith("bsConfig"));

      for (const n of i) {
        let i = n.replace(/^bs/, "");
        i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = M(t.dataset[n]);
      }

      return e;
    },

    getDataAttribute: (t, e) => M(t.getAttribute(`data-bs-${j(e)}`))
  };

  class H {
    static get Default() {
      return {};
    }

    static get DefaultType() {
      return {};
    }

    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }

    _getConfig(t) {
      return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
    }

    _configAfterMerge(t) {
      return t;
    }

    _mergeConfigObj(t, e) {
      const i = o(e) ? F.getDataAttribute(e, "config") : {};
      return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), "object" == typeof i ? i : {}), o(e) ? F.getDataAttributes(e) : {}), "object" == typeof t ? t : {});
    }

    _typeCheckConfig(t, e = this.constructor.DefaultType) {
      for (const [n, s] of Object.entries(e)) {
        const e = t[n],
              r = o(e) ? "element" : null == (i = e) ? `${i}` : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
        if (!new RegExp(s).test(r)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`);
      }

      var i;
    }

  }

  class W extends H {
    constructor(t, i) {
      super(), (t = r(t)) && (this._element = t, this._config = this._getConfig(i), e.set(this._element, this.constructor.DATA_KEY, this));
    }

    dispose() {
      e.remove(this._element, this.constructor.DATA_KEY), N.off(this._element, this.constructor.EVENT_KEY);

      for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
    }

    _queueCallback(t, e, i = !0) {
      _(t, e, i);
    }

    _getConfig(t) {
      return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
    }

    static getInstance(t) {
      return e.get(r(t), this.DATA_KEY);
    }

    static getOrCreateInstance(t, e = {}) {
      return this.getInstance(t) || new this(t, "object" == typeof e ? e : null);
    }

    static get VERSION() {
      return "5.3.2";
    }

    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }

    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }

    static eventName(t) {
      return `${t}${this.EVENT_KEY}`;
    }

  }

  const B = t => {
    let e = t.getAttribute("data-bs-target");

    if (!e || "#" === e) {
      let i = t.getAttribute("href");
      if (!i || !i.includes("#") && !i.startsWith(".")) return null;
      i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? n(i.trim()) : null;
    }

    return e;
  },
        z = {
    find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
    findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
    children: (t, e) => [].concat(...t.children).filter(t => t.matches(e)),

    parents(t, e) {
      const i = [];
      let n = t.parentNode.closest(e);

      for (; n;) i.push(n), n = n.parentNode.closest(e);

      return i;
    },

    prev(t, e) {
      let i = t.previousElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.previousElementSibling;
      }

      return [];
    },

    next(t, e) {
      let i = t.nextElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.nextElementSibling;
      }

      return [];
    },

    focusableChildren(t) {
      const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(t => `${t}:not([tabindex^="-"])`).join(",");
      return this.find(e, t).filter(t => !l(t) && a(t));
    },

    getSelectorFromElement(t) {
      const e = B(t);
      return e && z.findOne(e) ? e : null;
    },

    getElementFromSelector(t) {
      const e = B(t);
      return e ? z.findOne(e) : null;
    },

    getMultipleElementsFromSelector(t) {
      const e = B(t);
      return e ? z.find(e) : [];
    }

  },
        R = (t, e = "hide") => {
    const i = `click.dismiss${t.EVENT_KEY}`,
          n = t.NAME;
    N.on(document, i, `[data-bs-dismiss="${n}"]`, function (i) {
      if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), l(this)) return;
      const s = z.getElementFromSelector(this) || this.closest(`.${n}`);
      t.getOrCreateInstance(s)[e]();
    });
  },
        q = ".bs.alert",
        V = `close${q}`,
        K = `closed${q}`;

  class Q extends W {
    static get NAME() {
      return "alert";
    }

    close() {
      if (N.trigger(this._element, V).defaultPrevented) return;

      this._element.classList.remove("show");

      const t = this._element.classList.contains("fade");

      this._queueCallback(() => this._destroyElement(), this._element, t);
    }

    _destroyElement() {
      this._element.remove(), N.trigger(this._element, K), this.dispose();
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = Q.getOrCreateInstance(this);

        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }

  }

  R(Q, "close"), m(Q);
  const X = '[data-bs-toggle="button"]';

  class Y extends W {
    static get NAME() {
      return "button";
    }

    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = Y.getOrCreateInstance(this);
        "toggle" === t && e[t]();
      });
    }

  }

  N.on(document, "click.bs.button.data-api", X, t => {
    t.preventDefault();
    const e = t.target.closest(X);
    Y.getOrCreateInstance(e).toggle();
  }), m(Y);
  const U = ".bs.swipe",
        G = `touchstart${U}`,
        J = `touchmove${U}`,
        Z = `touchend${U}`,
        tt = `pointerdown${U}`,
        et = `pointerup${U}`,
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

  class st extends H {
    constructor(t, e) {
      super(), this._element = t, t && st.isSupported() && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents());
    }

    static get Default() {
      return it;
    }

    static get DefaultType() {
      return nt;
    }

    static get NAME() {
      return "swipe";
    }

    dispose() {
      N.off(this._element, U);
    }

    _start(t) {
      this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX;
    }

    _end(t) {
      this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), g(this._config.endCallback);
    }

    _move(t) {
      this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
    }

    _handleSwipe() {
      const t = Math.abs(this._deltaX);
      if (t <= 40) return;
      const e = t / this._deltaX;
      this._deltaX = 0, e && g(e > 0 ? this._config.rightCallback : this._config.leftCallback);
    }

    _initEvents() {
      this._supportPointerEvents ? (N.on(this._element, tt, t => this._start(t)), N.on(this._element, et, t => this._end(t)), this._element.classList.add("pointer-event")) : (N.on(this._element, G, t => this._start(t)), N.on(this._element, J, t => this._move(t)), N.on(this._element, Z, t => this._end(t)));
    }

    _eventIsPointerPenTouch(t) {
      return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType);
    }

    static isSupported() {
      return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }

  }

  const ot = ".bs.carousel",
        rt = ".data-api",
        at = "next",
        lt = "prev",
        ct = "left",
        ht = "right",
        dt = `slide${ot}`,
        ut = `slid${ot}`,
        ft = `keydown${ot}`,
        pt = `mouseenter${ot}`,
        mt = `mouseleave${ot}`,
        gt = `dragstart${ot}`,
        _t = `load${ot}${rt}`,
        bt = `click${ot}${rt}`,
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

  class xt extends W {
    constructor(t, e) {
      super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = z.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === vt && this.cycle();
    }

    static get Default() {
      return Ct;
    }

    static get DefaultType() {
      return Ot;
    }

    static get NAME() {
      return "carousel";
    }

    next() {
      this._slide(at);
    }

    nextWhenVisible() {
      !document.hidden && a(this._element) && this.next();
    }

    prev() {
      this._slide(lt);
    }

    pause() {
      this._isSliding && s(this._element), this._clearInterval();
    }

    cycle() {
      this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }

    _maybeEnableCycle() {
      this._config.ride && (this._isSliding ? N.one(this._element, ut, () => this.cycle()) : this.cycle());
    }

    to(t) {
      const e = this._getItems();

      if (t > e.length - 1 || t < 0) return;
      if (this._isSliding) return void N.one(this._element, ut, () => this.to(t));

      const i = this._getItemIndex(this._getActive());

      if (i === t) return;
      const n = t > i ? at : lt;

      this._slide(n, e[t]);
    }

    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
    }

    _configAfterMerge(t) {
      return t.defaultInterval = t.interval, t;
    }

    _addEventListeners() {
      this._config.keyboard && N.on(this._element, ft, t => this._keydown(t)), "hover" === this._config.pause && (N.on(this._element, pt, () => this.pause()), N.on(this._element, mt, () => this._maybeEnableCycle())), this._config.touch && st.isSupported() && this._addTouchEventListeners();
    }

    _addTouchEventListeners() {
      for (const t of z.find(".carousel-item img", this._element)) N.on(t, gt, t => t.preventDefault());

      const t = {
        leftCallback: () => this._slide(this._directionToOrder(ct)),
        rightCallback: () => this._slide(this._directionToOrder(ht)),
        endCallback: () => {
          "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval));
        }
      };
      this._swipeHelper = new st(this._element, t);
    }

    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return;
      const e = Tt[t.key];
      e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
    }

    _getItemIndex(t) {
      return this._getItems().indexOf(t);
    }

    _setActiveIndicatorElement(t) {
      if (!this._indicatorsElement) return;
      const e = z.findOne(wt, this._indicatorsElement);
      e.classList.remove(yt), e.removeAttribute("aria-current");
      const i = z.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
      i && (i.classList.add(yt), i.setAttribute("aria-current", "true"));
    }

    _updateInterval() {
      const t = this._activeElement || this._getActive();

      if (!t) return;
      const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
      this._config.interval = e || this._config.defaultInterval;
    }

    _slide(t, e = null) {
      if (this._isSliding) return;

      const i = this._getActive(),
            n = t === at,
            s = e || b(this._getItems(), i, n, this._config.wrap);

      if (s === i) return;

      const o = this._getItemIndex(s),
            r = e => N.trigger(this._element, e, {
        relatedTarget: s,
        direction: this._orderToDirection(t),
        from: this._getItemIndex(i),
        to: o
      });

      if (r(dt).defaultPrevented) return;
      if (!i || !s) return;
      const a = Boolean(this._interval);
      this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = s;
      const l = n ? "carousel-item-start" : "carousel-item-end",
            c = n ? "carousel-item-next" : "carousel-item-prev";
      s.classList.add(c), d(s), i.classList.add(l), s.classList.add(l), this._queueCallback(() => {
        s.classList.remove(l, c), s.classList.add(yt), i.classList.remove(yt, c, l), this._isSliding = !1, r(ut);
      }, i, this._isAnimated()), a && this.cycle();
    }

    _isAnimated() {
      return this._element.classList.contains("slide");
    }

    _getActive() {
      return z.findOne(Et, this._element);
    }

    _getItems() {
      return z.find(At, this._element);
    }

    _clearInterval() {
      this._interval && (clearInterval(this._interval), this._interval = null);
    }

    _directionToOrder(t) {
      return p() ? t === ct ? lt : at : t === ct ? at : lt;
    }

    _orderToDirection(t) {
      return p() ? t === lt ? ct : ht : t === lt ? ht : ct;
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = xt.getOrCreateInstance(this, t);

        if ("number" != typeof t) {
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
            e[t]();
          }
        } else e.to(t);
      });
    }

  }

  N.on(document, bt, "[data-bs-slide], [data-bs-slide-to]", function (t) {
    const e = z.getElementFromSelector(this);
    if (!e || !e.classList.contains(vt)) return;
    t.preventDefault();
    const i = xt.getOrCreateInstance(e),
          n = this.getAttribute("data-bs-slide-to");
    return n ? (i.to(n), void i._maybeEnableCycle()) : "next" === F.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle());
  }), N.on(window, _t, () => {
    const t = z.find('[data-bs-ride="carousel"]');

    for (const e of t) xt.getOrCreateInstance(e);
  }), m(xt);
  const kt = ".bs.collapse",
        Lt = `show${kt}`,
        St = `shown${kt}`,
        Dt = `hide${kt}`,
        $t = `hidden${kt}`,
        It = `click${kt}.data-api`,
        Nt = "show",
        Pt = "collapse",
        Mt = "collapsing",
        jt = `:scope .${Pt} .${Pt}`,
        Ft = '[data-bs-toggle="collapse"]',
        Ht = {
    parent: null,
    toggle: !0
  },
        Wt = {
    parent: "(null|element)",
    toggle: "boolean"
  };

  class Bt extends W {
    constructor(t, e) {
      super(t, e), this._isTransitioning = !1, this._triggerArray = [];
      const i = z.find(Ft);

      for (const t of i) {
        const e = z.getSelectorFromElement(t),
              i = z.find(e).filter(t => t === this._element);
        null !== e && i.length && this._triggerArray.push(t);
      }

      this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
    }

    static get Default() {
      return Ht;
    }

    static get DefaultType() {
      return Wt;
    }

    static get NAME() {
      return "collapse";
    }

    toggle() {
      this._isShown() ? this.hide() : this.show();
    }

    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t = [];
      if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(t => t !== this._element).map(t => Bt.getOrCreateInstance(t, {
        toggle: !1
      }))), t.length && t[0]._isTransitioning) return;
      if (N.trigger(this._element, Lt).defaultPrevented) return;

      for (const e of t) e.hide();

      const e = this._getDimension();

      this._element.classList.remove(Pt), this._element.classList.add(Mt), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
      const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
      this._queueCallback(() => {
        this._isTransitioning = !1, this._element.classList.remove(Mt), this._element.classList.add(Pt, Nt), this._element.style[e] = "", N.trigger(this._element, St);
      }, this._element, !0), this._element.style[e] = `${this._element[i]}px`;
    }

    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if (N.trigger(this._element, Dt).defaultPrevented) return;

      const t = this._getDimension();

      this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, d(this._element), this._element.classList.add(Mt), this._element.classList.remove(Pt, Nt);

      for (const t of this._triggerArray) {
        const e = z.getElementFromSelector(t);
        e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1);
      }

      this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(() => {
        this._isTransitioning = !1, this._element.classList.remove(Mt), this._element.classList.add(Pt), N.trigger(this._element, $t);
      }, this._element, !0);
    }

    _isShown(t = this._element) {
      return t.classList.contains(Nt);
    }

    _configAfterMerge(t) {
      return t.toggle = Boolean(t.toggle), t.parent = r(t.parent), t;
    }

    _getDimension() {
      return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
    }

    _initializeChildren() {
      if (!this._config.parent) return;

      const t = this._getFirstLevelChildren(Ft);

      for (const e of t) {
        const t = z.getElementFromSelector(e);
        t && this._addAriaAndCollapsedClass([e], this._isShown(t));
      }
    }

    _getFirstLevelChildren(t) {
      const e = z.find(jt, this._config.parent);
      return z.find(t, this._config.parent).filter(t => !e.includes(t));
    }

    _addAriaAndCollapsedClass(t, e) {
      if (t.length) for (const i of t) i.classList.toggle("collapsed", !e), i.setAttribute("aria-expanded", e);
    }

    static jQueryInterface(t) {
      const e = {};
      return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each(function () {
        const i = Bt.getOrCreateInstance(this, e);

        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t]();
        }
      });
    }

  }

  N.on(document, It, Ft, function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();

    for (const t of z.getMultipleElementsFromSelector(this)) Bt.getOrCreateInstance(t, {
      toggle: !1
    }).toggle();
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

  const _e = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (t) {
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
    effect: function (t) {
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
    for (var e = fe(t), i = De(t); i && ke(i) && "static" === xe(i).position;) i = De(i);

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

  const je = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (t) {
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
    effect: function (t) {
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

  const Be = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function (t) {
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
  const Re = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: function (t) {
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

  const si = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (t) {
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

        if (E) for (var P = function (t) {
          var e = v.find(function (e) {
            var i = A.get(e);
            if (i) return i.slice(0, t).every(function (t) {
              return t;
            });
          });
          if (e) return T = e, "break";
        }, M = p ? 3 : 1; M > 0 && "break" !== P(M); M--);
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

  const ai = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function (t) {
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
    fn: function (t) {
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
    fn: function (t) {
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
    fn: function (t) {
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
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];

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
        setOptions: function (i) {
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
        forceUpdate: function () {
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

              for (var n = 0; n < a.orderedModifiers.length; n++) if (!0 !== a.reset) {
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
        },
        update: (s = function () {
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
        destroy: function () {
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

  const vi = Object.freeze(Object.defineProperty({
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
        Ci = `hide${wi}`,
        Oi = `hidden${wi}`,
        xi = `show${wi}`,
        ki = `shown${wi}`,
        Li = `click${wi}${Ai}`,
        Si = `keydown${wi}${Ai}`,
        Di = `keyup${wi}${Ai}`,
        $i = "show",
        Ii = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        Ni = `${Ii}.${$i}`,
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

  class qi extends W {
    constructor(t, e) {
      super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = z.next(this._element, Pi)[0] || z.prev(this._element, Pi)[0] || z.findOne(Pi, this._parent), this._inNavbar = this._detectNavbar();
    }

    static get Default() {
      return zi;
    }

    static get DefaultType() {
      return Ri;
    }

    static get NAME() {
      return yi;
    }

    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }

    show() {
      if (l(this._element) || this._isShown()) return;
      const t = {
        relatedTarget: this._element
      };

      if (!N.trigger(this._element, xi, t).defaultPrevented) {
        if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) for (const t of [].concat(...document.body.children)) N.on(t, "mouseover", h);
        this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add($i), this._element.classList.add($i), N.trigger(this._element, ki, t);
      }
    }

    hide() {
      if (l(this._element) || !this._isShown()) return;
      const t = {
        relatedTarget: this._element
      };

      this._completeHide(t);
    }

    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }

    update() {
      this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
    }

    _completeHide(t) {
      if (!N.trigger(this._element, Ci, t).defaultPrevented) {
        if ("ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children)) N.off(t, "mouseover", h);
        this._popper && this._popper.destroy(), this._menu.classList.remove($i), this._element.classList.remove($i), this._element.setAttribute("aria-expanded", "false"), F.removeDataAttribute(this._menu, "popper"), N.trigger(this._element, Oi, t);
      }
    }

    _getConfig(t) {
      if ("object" == typeof (t = super._getConfig(t)).reference && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${yi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      return t;
    }

    _createPopper() {
      if (void 0 === vi) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      let t = this._element;
      "parent" === this._config.reference ? t = this._parent : o(this._config.reference) ? t = r(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);

      const e = this._getPopperConfig();

      this._popper = bi(t, this._menu, e);
    }

    _isShown() {
      return this._menu.classList.contains($i);
    }

    _getPlacement() {
      const t = this._parent;
      if (t.classList.contains("dropend")) return Wi;
      if (t.classList.contains("dropstart")) return Bi;
      if (t.classList.contains("dropup-center")) return "top";
      if (t.classList.contains("dropdown-center")) return "bottom";
      const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? e ? ji : Mi : e ? Hi : Fi;
    }

    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }

    _getOffset() {
      const {
        offset: t
      } = this._config;
      return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t;
    }

    _getPopperConfig() {
      const t = {
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

    _selectMenuItem({
      key: t,
      target: e
    }) {
      const i = z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(t => a(t));
      i.length && b(i, e, t === Ti, !i.includes(e)).focus();
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = qi.getOrCreateInstance(this, t);

        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }

    static clearMenus(t) {
      if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
      const e = z.find(Ni);

      for (const i of e) {
        const e = qi.getInstance(i);
        if (!e || !1 === e._config.autoClose) continue;
        const n = t.composedPath(),
              s = n.includes(e._menu);
        if (n.includes(e._element) || "inside" === e._config.autoClose && !s || "outside" === e._config.autoClose && s) continue;
        if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
        const o = {
          relatedTarget: e._element
        };
        "click" === t.type && (o.clickEvent = t), e._completeHide(o);
      }
    }

    static dataApiKeydownHandler(t) {
      const e = /input|textarea/i.test(t.target.tagName),
            i = "Escape" === t.key,
            n = [Ei, Ti].includes(t.key);
      if (!n && !i) return;
      if (e && !i) return;
      t.preventDefault();
      const s = this.matches(Ii) ? this : z.prev(this, Ii)[0] || z.next(this, Ii)[0] || z.findOne(Ii, t.delegateTarget.parentNode),
            o = qi.getOrCreateInstance(s);
      if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
      o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
    }

  }

  N.on(document, Si, Ii, qi.dataApiKeydownHandler), N.on(document, Si, Pi, qi.dataApiKeydownHandler), N.on(document, Li, qi.clearMenus), N.on(document, Di, qi.clearMenus), N.on(document, Li, Ii, function (t) {
    t.preventDefault(), qi.getOrCreateInstance(this).toggle();
  }), m(qi);
  const Vi = "backdrop",
        Ki = "show",
        Qi = `mousedown.bs.${Vi}`,
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

  class Ui extends H {
    constructor(t) {
      super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
    }

    static get Default() {
      return Xi;
    }

    static get DefaultType() {
      return Yi;
    }

    static get NAME() {
      return Vi;
    }

    show(t) {
      if (!this._config.isVisible) return void g(t);

      this._append();

      const e = this._getElement();

      this._config.isAnimated && d(e), e.classList.add(Ki), this._emulateAnimation(() => {
        g(t);
      });
    }

    hide(t) {
      this._config.isVisible ? (this._getElement().classList.remove(Ki), this._emulateAnimation(() => {
        this.dispose(), g(t);
      })) : g(t);
    }

    dispose() {
      this._isAppended && (N.off(this._element, Qi), this._element.remove(), this._isAppended = !1);
    }

    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t;
      }

      return this._element;
    }

    _configAfterMerge(t) {
      return t.rootElement = r(t.rootElement), t;
    }

    _append() {
      if (this._isAppended) return;

      const t = this._getElement();

      this._config.rootElement.append(t), N.on(t, Qi, () => {
        g(this._config.clickCallback);
      }), this._isAppended = !0;
    }

    _emulateAnimation(t) {
      _(t, this._getElement(), this._config.isAnimated);
    }

  }

  const Gi = ".bs.focustrap",
        Ji = `focusin${Gi}`,
        Zi = `keydown.tab${Gi}`,
        tn = "backward",
        en = {
    autofocus: !0,
    trapElement: null
  },
        nn = {
    autofocus: "boolean",
    trapElement: "element"
  };

  class sn extends H {
    constructor(t) {
      super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
    }

    static get Default() {
      return en;
    }

    static get DefaultType() {
      return nn;
    }

    static get NAME() {
      return "focustrap";
    }

    activate() {
      this._isActive || (this._config.autofocus && this._config.trapElement.focus(), N.off(document, Gi), N.on(document, Ji, t => this._handleFocusin(t)), N.on(document, Zi, t => this._handleKeydown(t)), this._isActive = !0);
    }

    deactivate() {
      this._isActive && (this._isActive = !1, N.off(document, Gi));
    }

    _handleFocusin(t) {
      const {
        trapElement: e
      } = this._config;
      if (t.target === document || t.target === e || e.contains(t.target)) return;
      const i = z.focusableChildren(e);
      0 === i.length ? e.focus() : this._lastTabNavDirection === tn ? i[i.length - 1].focus() : i[0].focus();
    }

    _handleKeydown(t) {
      "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? tn : "forward");
    }

  }

  const on = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        rn = ".sticky-top",
        an = "padding-right",
        ln = "margin-right";

  class cn {
    constructor() {
      this._element = document.body;
    }

    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    }

    hide() {
      const t = this.getWidth();
      this._disableOverFlow(), this._setElementAttributes(this._element, an, e => e + t), this._setElementAttributes(on, an, e => e + t), this._setElementAttributes(rn, ln, e => e - t);
    }

    reset() {
      this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, an), this._resetElementAttributes(on, an), this._resetElementAttributes(rn, ln);
    }

    isOverflowing() {
      return this.getWidth() > 0;
    }

    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
    }

    _setElementAttributes(t, e, i) {
      const n = this.getWidth();

      this._applyManipulationCallback(t, t => {
        if (t !== this._element && window.innerWidth > t.clientWidth + n) return;

        this._saveInitialAttribute(t, e);

        const s = window.getComputedStyle(t).getPropertyValue(e);
        t.style.setProperty(e, `${i(Number.parseFloat(s))}px`);
      });
    }

    _saveInitialAttribute(t, e) {
      const i = t.style.getPropertyValue(e);
      i && F.setDataAttribute(t, e, i);
    }

    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, t => {
        const i = F.getDataAttribute(t, e);
        null !== i ? (F.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e);
      });
    }

    _applyManipulationCallback(t, e) {
      if (o(t)) e(t);else for (const i of z.find(t, this._element)) e(i);
    }

  }

  const hn = ".bs.modal",
        dn = `hide${hn}`,
        un = `hidePrevented${hn}`,
        fn = `hidden${hn}`,
        pn = `show${hn}`,
        mn = `shown${hn}`,
        gn = `resize${hn}`,
        _n = `click.dismiss${hn}`,
        bn = `mousedown.dismiss${hn}`,
        vn = `keydown.dismiss${hn}`,
        yn = `click${hn}.data-api`,
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

  class On extends W {
    constructor(t, e) {
      super(t, e), this._dialog = z.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new cn(), this._addEventListeners();
    }

    static get Default() {
      return Tn;
    }

    static get DefaultType() {
      return Cn;
    }

    static get NAME() {
      return "modal";
    }

    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }

    show(t) {
      this._isShown || this._isTransitioning || N.trigger(this._element, pn, {
        relatedTarget: t
      }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(wn), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)));
    }

    hide() {
      this._isShown && !this._isTransitioning && (N.trigger(this._element, dn).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(An), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())));
    }

    dispose() {
      N.off(window, hn), N.off(this._dialog, hn), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }

    handleUpdate() {
      this._adjustDialog();
    }

    _initializeBackDrop() {
      return new Ui({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated()
      });
    }

    _initializeFocusTrap() {
      return new sn({
        trapElement: this._element
      });
    }

    _showElement(t) {
      document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
      const e = z.findOne(".modal-body", this._dialog);
      e && (e.scrollTop = 0), d(this._element), this._element.classList.add(An), this._queueCallback(() => {
        this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, N.trigger(this._element, mn, {
          relatedTarget: t
        });
      }, this._dialog, this._isAnimated());
    }

    _addEventListeners() {
      N.on(this._element, vn, t => {
        "Escape" === t.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
      }), N.on(window, gn, () => {
        this._isShown && !this._isTransitioning && this._adjustDialog();
      }), N.on(this._element, bn, t => {
        N.one(this._element, _n, e => {
          this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
        });
      });
    }

    _hideModal() {
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
        document.body.classList.remove(wn), this._resetAdjustments(), this._scrollBar.reset(), N.trigger(this._element, fn);
      });
    }

    _isAnimated() {
      return this._element.classList.contains("fade");
    }

    _triggerBackdropTransition() {
      if (N.trigger(this._element, un).defaultPrevented) return;
      const t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = this._element.style.overflowY;
      "hidden" === e || this._element.classList.contains(En) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(En), this._queueCallback(() => {
        this._element.classList.remove(En), this._queueCallback(() => {
          this._element.style.overflowY = e;
        }, this._dialog);
      }, this._dialog), this._element.focus());
    }

    _adjustDialog() {
      const t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = this._scrollBar.getWidth(),
            i = e > 0;

      if (i && !t) {
        const t = p() ? "paddingLeft" : "paddingRight";
        this._element.style[t] = `${e}px`;
      }

      if (!i && t) {
        const t = p() ? "paddingRight" : "paddingLeft";
        this._element.style[t] = `${e}px`;
      }
    }

    _resetAdjustments() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }

    static jQueryInterface(t, e) {
      return this.each(function () {
        const i = On.getOrCreateInstance(this, t);

        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }

  }

  N.on(document, yn, '[data-bs-toggle="modal"]', function (t) {
    const e = z.getElementFromSelector(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), N.one(e, pn, t => {
      t.defaultPrevented || N.one(e, fn, () => {
        a(this) && this.focus();
      });
    });
    const i = z.findOne(".modal.show");
    i && On.getInstance(i).hide(), On.getOrCreateInstance(e).toggle(this);
  }), R(On), m(On);
  const xn = ".bs.offcanvas",
        kn = ".data-api",
        Ln = `load${xn}${kn}`,
        Sn = "show",
        Dn = "showing",
        $n = "hiding",
        In = ".offcanvas.show",
        Nn = `show${xn}`,
        Pn = `shown${xn}`,
        Mn = `hide${xn}`,
        jn = `hidePrevented${xn}`,
        Fn = `hidden${xn}`,
        Hn = `resize${xn}`,
        Wn = `click${xn}${kn}`,
        Bn = `keydown.dismiss${xn}`,
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

  class qn extends W {
    constructor(t, e) {
      super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
    }

    static get Default() {
      return zn;
    }

    static get DefaultType() {
      return Rn;
    }

    static get NAME() {
      return "offcanvas";
    }

    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }

    show(t) {
      this._isShown || N.trigger(this._element, Nn, {
        relatedTarget: t
      }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || new cn().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Dn), this._queueCallback(() => {
        this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(Sn), this._element.classList.remove(Dn), N.trigger(this._element, Pn, {
          relatedTarget: t
        });
      }, this._element, !0));
    }

    hide() {
      this._isShown && (N.trigger(this._element, Mn).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add($n), this._backdrop.hide(), this._queueCallback(() => {
        this._element.classList.remove(Sn, $n), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new cn().reset(), N.trigger(this._element, Fn);
      }, this._element, !0)));
    }

    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }

    _initializeBackDrop() {
      const t = Boolean(this._config.backdrop);
      return new Ui({
        className: "offcanvas-backdrop",
        isVisible: t,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: t ? () => {
          "static" !== this._config.backdrop ? this.hide() : N.trigger(this._element, jn);
        } : null
      });
    }

    _initializeFocusTrap() {
      return new sn({
        trapElement: this._element
      });
    }

    _addEventListeners() {
      N.on(this._element, Bn, t => {
        "Escape" === t.key && (this._config.keyboard ? this.hide() : N.trigger(this._element, jn));
      });
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = qn.getOrCreateInstance(this, t);

        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }

  }

  N.on(document, Wn, '[data-bs-toggle="offcanvas"]', function (t) {
    const e = z.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this)) return;
    N.one(e, Fn, () => {
      a(this) && this.focus();
    });
    const i = z.findOne(In);
    i && i !== e && qn.getInstance(i).hide(), qn.getOrCreateInstance(e).toggle(this);
  }), N.on(window, Ln, () => {
    for (const t of z.find(In)) qn.getOrCreateInstance(t).show();
  }), N.on(window, Hn, () => {
    for (const t of z.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(t).position && qn.getOrCreateInstance(t).hide();
  }), R(qn), m(qn);

  const Vn = {
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
        Xn = (t, e) => {
    const i = t.nodeName.toLowerCase();
    return e.includes(i) ? !Kn.has(i) || Boolean(Qn.test(t.nodeValue)) : e.filter(t => t instanceof RegExp).some(t => t.test(i));
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

  class Jn extends H {
    constructor(t) {
      super(), this._config = this._getConfig(t);
    }

    static get Default() {
      return Yn;
    }

    static get DefaultType() {
      return Un;
    }

    static get NAME() {
      return "TemplateFactory";
    }

    getContent() {
      return Object.values(this._config.content).map(t => this._resolvePossibleFunction(t)).filter(Boolean);
    }

    hasContent() {
      return this.getContent().length > 0;
    }

    changeContent(t) {
      return this._checkContent(t), this._config.content = _objectSpread(_objectSpread({}, this._config.content), t), this;
    }

    toHtml() {
      const t = document.createElement("div");
      t.innerHTML = this._maybeSanitize(this._config.template);

      for (const [e, i] of Object.entries(this._config.content)) this._setContent(t, i, e);

      const e = t.children[0],
            i = this._resolvePossibleFunction(this._config.extraClass);

      return i && e.classList.add(...i.split(" ")), e;
    }

    _typeCheckConfig(t) {
      super._typeCheckConfig(t), this._checkContent(t.content);
    }

    _checkContent(t) {
      for (const [e, i] of Object.entries(t)) super._typeCheckConfig({
        selector: e,
        entry: i
      }, Gn);
    }

    _setContent(t, e, i) {
      const n = z.findOne(i, t);
      n && ((e = this._resolvePossibleFunction(e)) ? o(e) ? this._putElementInTemplate(r(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove());
    }

    _maybeSanitize(t) {
      return this._config.sanitize ? function (t, e, i) {
        if (!t.length) return t;
        if (i && "function" == typeof i) return i(t);
        const n = new window.DOMParser().parseFromString(t, "text/html"),
              s = [].concat(...n.body.querySelectorAll("*"));

        for (const t of s) {
          const i = t.nodeName.toLowerCase();

          if (!Object.keys(e).includes(i)) {
            t.remove();
            continue;
          }

          const n = [].concat(...t.attributes),
                s = [].concat(e["*"] || [], e[i] || []);

          for (const e of n) Xn(e, s) || t.removeAttribute(e.nodeName);
        }

        return n.body.innerHTML;
      }(t, this._config.allowList, this._config.sanitizeFn) : t;
    }

    _resolvePossibleFunction(t) {
      return g(t, [this]);
    }

    _putElementInTemplate(t, e) {
      if (this._config.html) return e.innerHTML = "", void e.append(t);
      e.textContent = t.textContent;
    }

  }

  const Zn = new Set(["sanitize", "allowList", "sanitizeFn"]),
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

  class cs extends W {
    constructor(t, e) {
      if (void 0 === vi) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
    }

    static get Default() {
      return as;
    }

    static get DefaultType() {
      return ls;
    }

    static get NAME() {
      return "tooltip";
    }

    enable() {
      this._isEnabled = !0;
    }

    disable() {
      this._isEnabled = !1;
    }

    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }

    toggle() {
      this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter());
    }

    dispose() {
      clearTimeout(this._timeout), N.off(this._element.closest(is), ns, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
    }

    show() {
      if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
      if (!this._isWithContent() || !this._isEnabled) return;

      const t = N.trigger(this._element, this.constructor.eventName("show")),
            e = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);

      if (t.defaultPrevented || !e) return;

      this._disposePopper();

      const i = this._getTipElement();

      this._element.setAttribute("aria-describedby", i.getAttribute("id"));

      const {
        container: n
      } = this._config;
      if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), N.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i), i.classList.add(es), "ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children)) N.on(t, "mouseover", h);

      this._queueCallback(() => {
        N.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), this._isHovered = !1;
      }, this.tip, this._isAnimated());
    }

    hide() {
      if (this._isShown() && !N.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
        if (this._getTipElement().classList.remove(es), "ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children)) N.off(t, "mouseover", h);
        this._activeTrigger.click = !1, this._activeTrigger[os] = !1, this._activeTrigger[ss] = !1, this._isHovered = null, this._queueCallback(() => {
          this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), N.trigger(this._element, this.constructor.eventName("hidden")));
        }, this.tip, this._isAnimated());
      }
    }

    update() {
      this._popper && this._popper.update();
    }

    _isWithContent() {
      return Boolean(this._getTitle());
    }

    _getTipElement() {
      return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
    }

    _createTipElement(t) {
      const e = this._getTemplateFactory(t).toHtml();

      if (!e) return null;
      e.classList.remove(ts, es), e.classList.add(`bs-${this.constructor.NAME}-auto`);

      const i = (t => {
        do {
          t += Math.floor(1e6 * Math.random());
        } while (document.getElementById(t));

        return t;
      })(this.constructor.NAME).toString();

      return e.setAttribute("id", i), this._isAnimated() && e.classList.add(ts), e;
    }

    setContent(t) {
      this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
    }

    _getTemplateFactory(t) {
      return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Jn(_objectSpread(_objectSpread({}, this._config), {}, {
        content: t,
        extraClass: this._resolvePossibleFunction(this._config.customClass)
      })), this._templateFactory;
    }

    _getContentForTemplate() {
      return {
        ".tooltip-inner": this._getTitle()
      };
    }

    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
    }

    _initializeOnDelegatedTarget(t) {
      return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
    }

    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(ts);
    }

    _isShown() {
      return this.tip && this.tip.classList.contains(es);
    }

    _createPopper(t) {
      const e = g(this._config.placement, [this, t, this._element]),
            i = rs[e.toUpperCase()];
      return bi(this._element, t, this._getPopperConfig(i));
    }

    _getOffset() {
      const {
        offset: t
      } = this._config;
      return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t;
    }

    _resolvePossibleFunction(t) {
      return g(t, [this._element]);
    }

    _getPopperConfig(t) {
      const e = {
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
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
          name: "preSetPlacement",
          enabled: !0,
          phase: "beforeMain",
          fn: t => {
            this._getTipElement().setAttribute("data-popper-placement", t.state.placement);
          }
        }]
      };
      return _objectSpread(_objectSpread({}, e), g(this._config.popperConfig, [e]));
    }

    _setListeners() {
      const t = this._config.trigger.split(" ");

      for (const e of t) if ("click" === e) N.on(this._element, this.constructor.eventName("click"), this._config.selector, t => {
        this._initializeOnDelegatedTarget(t).toggle();
      });else if ("manual" !== e) {
        const t = e === ss ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
              i = e === ss ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
        N.on(this._element, t, this._config.selector, t => {
          const e = this._initializeOnDelegatedTarget(t);

          e._activeTrigger["focusin" === t.type ? os : ss] = !0, e._enter();
        }), N.on(this._element, i, this._config.selector, t => {
          const e = this._initializeOnDelegatedTarget(t);

          e._activeTrigger["focusout" === t.type ? os : ss] = e._element.contains(t.relatedTarget), e._leave();
        });
      }

      this._hideModalHandler = () => {
        this._element && this.hide();
      }, N.on(this._element.closest(is), ns, this._hideModalHandler);
    }

    _fixTitle() {
      const t = this._element.getAttribute("title");

      t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"));
    }

    _enter() {
      this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(() => {
        this._isHovered && this.show();
      }, this._config.delay.show));
    }

    _leave() {
      this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
        this._isHovered || this.hide();
      }, this._config.delay.hide));
    }

    _setTimeout(t, e) {
      clearTimeout(this._timeout), this._timeout = setTimeout(t, e);
    }

    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(!0);
    }

    _getConfig(t) {
      const e = F.getDataAttributes(this._element);

      for (const t of Object.keys(e)) Zn.has(t) && delete e[t];

      return t = _objectSpread(_objectSpread({}, e), "object" == typeof t && t ? t : {}), t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
    }

    _configAfterMerge(t) {
      return t.container = !1 === t.container ? document.body : r(t.container), "number" == typeof t.delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t;
    }

    _getDelegateConfig() {
      const t = {};

      for (const [e, i] of Object.entries(this._config)) this.constructor.Default[e] !== i && (t[e] = i);

      return t.selector = !1, t.trigger = "manual", t;
    }

    _disposePopper() {
      this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = cs.getOrCreateInstance(this, t);

        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }

  }

  m(cs);

  const hs = _objectSpread(_objectSpread({}, cs.Default), {}, {
    content: "",
    offset: [0, 8],
    placement: "right",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click"
  }),
        ds = _objectSpread(_objectSpread({}, cs.DefaultType), {}, {
    content: "(null|string|element|function)"
  });

  class us extends cs {
    static get Default() {
      return hs;
    }

    static get DefaultType() {
      return ds;
    }

    static get NAME() {
      return "popover";
    }

    _isWithContent() {
      return this._getTitle() || this._getContent();
    }

    _getContentForTemplate() {
      return {
        ".popover-header": this._getTitle(),
        ".popover-body": this._getContent()
      };
    }

    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = us.getOrCreateInstance(this, t);

        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }

  }

  m(us);
  const fs = ".bs.scrollspy",
        ps = `activate${fs}`,
        ms = `click${fs}`,
        gs = `load${fs}.data-api`,
        _s = "active",
        bs = "[href]",
        vs = ".nav-link",
        ys = `${vs}, .nav-item > ${vs}, .list-group-item`,
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

  class Es extends W {
    constructor(t, e) {
      super(t, e), this._targetLinks = new Map(), this._observableSections = new Map(), this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      }, this.refresh();
    }

    static get Default() {
      return ws;
    }

    static get DefaultType() {
      return As;
    }

    static get NAME() {
      return "scrollspy";
    }

    refresh() {
      this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();

      for (const t of this._observableSections.values()) this._observer.observe(t);
    }

    dispose() {
      this._observer.disconnect(), super.dispose();
    }

    _configAfterMerge(t) {
      return t.target = r(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map(t => Number.parseFloat(t))), t;
    }

    _maybeEnableSmoothScroll() {
      this._config.smoothScroll && (N.off(this._config.target, ms), N.on(this._config.target, ms, bs, t => {
        const e = this._observableSections.get(t.target.hash);

        if (e) {
          t.preventDefault();
          const i = this._rootElement || window,
                n = e.offsetTop - this._element.offsetTop;
          if (i.scrollTo) return void i.scrollTo({
            top: n,
            behavior: "smooth"
          });
          i.scrollTop = n;
        }
      }));
    }

    _getNewObserver() {
      const t = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin
      };
      return new IntersectionObserver(t => this._observerCallback(t), t);
    }

    _observerCallback(t) {
      const e = t => this._targetLinks.get(`#${t.target.id}`),
            i = t => {
        this._previousScrollData.visibleEntryTop = t.target.offsetTop, this._process(e(t));
      },
            n = (this._rootElement || document.documentElement).scrollTop,
            s = n >= this._previousScrollData.parentScrollTop;

      this._previousScrollData.parentScrollTop = n;

      for (const o of t) {
        if (!o.isIntersecting) {
          this._activeTarget = null, this._clearActiveClass(e(o));
          continue;
        }

        const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;

        if (s && t) {
          if (i(o), !n) return;
        } else s || t || i(o);
      }
    }

    _initializeTargetsAndObservables() {
      this._targetLinks = new Map(), this._observableSections = new Map();
      const t = z.find(bs, this._config.target);

      for (const e of t) {
        if (!e.hash || l(e)) continue;
        const t = z.findOne(decodeURI(e.hash), this._element);
        a(t) && (this._targetLinks.set(decodeURI(e.hash), e), this._observableSections.set(e.hash, t));
      }
    }

    _process(t) {
      this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(_s), this._activateParents(t), N.trigger(this._element, ps, {
        relatedTarget: t
      }));
    }

    _activateParents(t) {
      if (t.classList.contains("dropdown-item")) z.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(_s);else for (const e of z.parents(t, ".nav, .list-group")) for (const t of z.prev(e, ys)) t.classList.add(_s);
    }

    _clearActiveClass(t) {
      t.classList.remove(_s);
      const e = z.find(`${bs}.${_s}`, t);

      for (const t of e) t.classList.remove(_s);
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = Es.getOrCreateInstance(this, t);

        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }

  }

  N.on(window, gs, () => {
    for (const t of z.find('[data-bs-spy="scroll"]')) Es.getOrCreateInstance(t);
  }), m(Es);
  const Ts = ".bs.tab",
        Cs = `hide${Ts}`,
        Os = `hidden${Ts}`,
        xs = `show${Ts}`,
        ks = `shown${Ts}`,
        Ls = `click${Ts}`,
        Ss = `keydown${Ts}`,
        Ds = `load${Ts}`,
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
        zs = `:not(${Bs})`,
        Rs = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        qs = `.nav-link${zs}, .list-group-item${zs}, [role="tab"]${zs}, ${Rs}`,
        Vs = `.${Fs}[data-bs-toggle="tab"], .${Fs}[data-bs-toggle="pill"], .${Fs}[data-bs-toggle="list"]`;

  class Ks extends W {
    constructor(t) {
      super(t), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), N.on(this._element, Ss, t => this._keydown(t)));
    }

    static get NAME() {
      return "tab";
    }

    show() {
      const t = this._element;
      if (this._elemIsActive(t)) return;

      const e = this._getActiveElem(),
            i = e ? N.trigger(e, Cs, {
        relatedTarget: t
      }) : null;

      N.trigger(t, xs, {
        relatedTarget: e
      }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e));
    }

    _activate(t, e) {
      t && (t.classList.add(Fs), this._activate(z.getElementFromSelector(t)), this._queueCallback(() => {
        "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), N.trigger(t, ks, {
          relatedTarget: e
        })) : t.classList.add(Ws);
      }, t, t.classList.contains(Hs)));
    }

    _deactivate(t, e) {
      t && (t.classList.remove(Fs), t.blur(), this._deactivate(z.getElementFromSelector(t)), this._queueCallback(() => {
        "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), N.trigger(t, Os, {
          relatedTarget: e
        })) : t.classList.remove(Ws);
      }, t, t.classList.contains(Hs)));
    }

    _keydown(t) {
      if (![$s, Is, Ns, Ps, Ms, js].includes(t.key)) return;
      t.stopPropagation(), t.preventDefault();

      const e = this._getChildren().filter(t => !l(t));

      let i;
      if ([Ms, js].includes(t.key)) i = e[t.key === Ms ? 0 : e.length - 1];else {
        const n = [Is, Ps].includes(t.key);
        i = b(e, t.target, n, !0);
      }
      i && (i.focus({
        preventScroll: !0
      }), Ks.getOrCreateInstance(i).show());
    }

    _getChildren() {
      return z.find(qs, this._parent);
    }

    _getActiveElem() {
      return this._getChildren().find(t => this._elemIsActive(t)) || null;
    }

    _setInitialAttributes(t, e) {
      this._setAttributeIfNotExists(t, "role", "tablist");

      for (const t of e) this._setInitialAttributesOnChild(t);
    }

    _setInitialAttributesOnChild(t) {
      t = this._getInnerElement(t);

      const e = this._elemIsActive(t),
            i = this._getOuterElement(t);

      t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t);
    }

    _setInitialAttributesOnTargetPanel(t) {
      const e = z.getElementFromSelector(t);
      e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`));
    }

    _toggleDropDown(t, e) {
      const i = this._getOuterElement(t);

      if (!i.classList.contains("dropdown")) return;

      const n = (t, n) => {
        const s = z.findOne(t, i);
        s && s.classList.toggle(n, e);
      };

      n(Bs, Fs), n(".dropdown-menu", Ws), i.setAttribute("aria-expanded", e);
    }

    _setAttributeIfNotExists(t, e, i) {
      t.hasAttribute(e) || t.setAttribute(e, i);
    }

    _elemIsActive(t) {
      return t.classList.contains(Fs);
    }

    _getInnerElement(t) {
      return t.matches(qs) ? t : z.findOne(qs, t);
    }

    _getOuterElement(t) {
      return t.closest(".nav-item, .list-group-item") || t;
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = Ks.getOrCreateInstance(this);

        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }

  }

  N.on(document, Ls, Rs, function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this) || Ks.getOrCreateInstance(this).show();
  }), N.on(window, Ds, () => {
    for (const t of z.find(Vs)) Ks.getOrCreateInstance(t);
  }), m(Ks);
  const Qs = ".bs.toast",
        Xs = `mouseover${Qs}`,
        Ys = `mouseout${Qs}`,
        Us = `focusin${Qs}`,
        Gs = `focusout${Qs}`,
        Js = `hide${Qs}`,
        Zs = `hidden${Qs}`,
        to = `show${Qs}`,
        eo = `shown${Qs}`,
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

  class ao extends W {
    constructor(t, e) {
      super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
    }

    static get Default() {
      return ro;
    }

    static get DefaultType() {
      return oo;
    }

    static get NAME() {
      return "toast";
    }

    show() {
      N.trigger(this._element, to).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(io), d(this._element), this._element.classList.add(no, so), this._queueCallback(() => {
        this._element.classList.remove(so), N.trigger(this._element, eo), this._maybeScheduleHide();
      }, this._element, this._config.animation));
    }

    hide() {
      this.isShown() && (N.trigger(this._element, Js).defaultPrevented || (this._element.classList.add(so), this._queueCallback(() => {
        this._element.classList.add(io), this._element.classList.remove(so, no), N.trigger(this._element, Zs);
      }, this._element, this._config.animation)));
    }

    dispose() {
      this._clearTimeout(), this.isShown() && this._element.classList.remove(no), super.dispose();
    }

    isShown() {
      return this._element.classList.contains(no);
    }

    _maybeScheduleHide() {
      this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay)));
    }

    _onInteraction(t, e) {
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
      const i = t.relatedTarget;
      this._element === i || this._element.contains(i) || this._maybeScheduleHide();
    }

    _setListeners() {
      N.on(this._element, Xs, t => this._onInteraction(t, !0)), N.on(this._element, Ys, t => this._onInteraction(t, !1)), N.on(this._element, Us, t => this._onInteraction(t, !0)), N.on(this._element, Gs, t => this._onInteraction(t, !1));
    }

    _clearTimeout() {
      clearTimeout(this._timeout), this._timeout = null;
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = ao.getOrCreateInstance(this, t);

        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }

  }

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

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL2RvbS9kYXRhLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdXRpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL2RvbS9ldmVudC1oYW5kbGVyLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvZG9tL21hbmlwdWxhdG9yLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdXRpbC9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9iYXNlLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy91dGlsL2NvbXBvbmVudC1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9hbGVydC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3V0aWwvc3dpcGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL2NvbGxhcHNlLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2VudW1zLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXROb2RlTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0V2luZG93LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9hcHBseVN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21hdGguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvdXNlckFnZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pc0xheW91dFZpZXdwb3J0LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldExheW91dFJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2NvbnRhaW5zLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pc1RhYmxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRQYXJlbnROb2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3dpdGhpbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9tZXJnZVBhZGRpbmdPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0RnJlc2hTaWRlT2JqZWN0LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2V4cGFuZFRvSGFzaE1hcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXJyb3cuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0VmFyaWF0aW9uLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9jb21wdXRlU3R5bGVzLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0V2luZG93U2Nyb2xsLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pc1Njcm9sbFBhcmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0U2Nyb2xsUGFyZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9saXN0U2Nyb2xsUGFyZW50cy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9yZWN0VG9DbGllbnRSZWN0LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDbGlwcGluZ1JlY3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFZpZXdwb3J0UmVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRSZWN0LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2NvbXB1dGVPZmZzZXRzLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2NvbXB1dGVBdXRvUGxhY2VtZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9mbGlwLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9oaWRlLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9vZmZzZXQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL3ByZXZlbnRPdmVyZmxvdy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRBbHRBeGlzLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wb3NpdGVSZWN0LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXROb2RlU2Nyb2xsLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRIVE1MRWxlbWVudFNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9vcmRlck1vZGlmaWVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9jcmVhdGVQb3BwZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvbWVyZ2VCeU5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvcG9wcGVyLWxpdGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvcG9wcGVyLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy91dGlsL2JhY2tkcm9wLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdXRpbC9mb2N1c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy91dGlsL3Njcm9sbGJhci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL21vZGFsLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvb2ZmY2FudmFzLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdXRpbC9zYW5pdGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy91dGlsL3RlbXBsYXRlLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy90b29sdGlwLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvcG9wb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3Njcm9sbHNweS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3RhYi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3RvYXN0LmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9pbmRleC51bWQuanMiXSwibmFtZXMiOlsiZWxlbWVudE1hcCIsIk1hcCIsIkRhdGEiLCJzZXQiLCJlbGVtZW50Iiwia2V5IiwiaW5zdGFuY2UiLCJoYXMiLCJpbnN0YW5jZU1hcCIsImdldCIsInNpemUiLCJjb25zb2xlIiwiZXJyb3IiLCJBcnJheSIsImZyb20iLCJrZXlzIiwicmVtb3ZlIiwiZGVsZXRlIiwiVFJBTlNJVElPTl9FTkQiLCJwYXJzZVNlbGVjdG9yIiwic2VsZWN0b3IiLCJ3aW5kb3ciLCJDU1MiLCJlc2NhcGUiLCJyZXBsYWNlIiwibWF0Y2giLCJpZCIsInRyaWdnZXJUcmFuc2l0aW9uRW5kIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiaXNFbGVtZW50Iiwib2JqZWN0IiwianF1ZXJ5Iiwibm9kZVR5cGUiLCJnZXRFbGVtZW50IiwibGVuZ3RoIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaXNWaXNpYmxlIiwiZ2V0Q2xpZW50UmVjdHMiLCJlbGVtZW50SXNWaXNpYmxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJjbG9zZWREZXRhaWxzIiwiY2xvc2VzdCIsInN1bW1hcnkiLCJwYXJlbnROb2RlIiwiaXNEaXNhYmxlZCIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImRpc2FibGVkIiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiZmluZFNoYWRvd1Jvb3QiLCJkb2N1bWVudEVsZW1lbnQiLCJhdHRhY2hTaGFkb3ciLCJnZXRSb290Tm9kZSIsInJvb3QiLCJTaGFkb3dSb290Iiwibm9vcCIsInJlZmxvdyIsIm9mZnNldEhlaWdodCIsImdldGpRdWVyeSIsImpRdWVyeSIsImJvZHkiLCJET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzIiwiaXNSVEwiLCJkaXIiLCJkZWZpbmVKUXVlcnlQbHVnaW4iLCJwbHVnaW4iLCJjYWxsYmFjayIsIiQiLCJuYW1lIiwiTkFNRSIsIkpRVUVSWV9OT19DT05GTElDVCIsImZuIiwialF1ZXJ5SW50ZXJmYWNlIiwiQ29uc3RydWN0b3IiLCJub0NvbmZsaWN0IiwicmVhZHlTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwdXNoIiwiZXhlY3V0ZSIsInBvc3NpYmxlQ2FsbGJhY2siLCJhcmdzIiwiZGVmYXVsdFZhbHVlIiwiZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiIsInRyYW5zaXRpb25FbGVtZW50Iiwid2FpdEZvclRyYW5zaXRpb24iLCJlbXVsYXRlZER1cmF0aW9uIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvbkRlbGF5IiwiZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24iLCJOdW1iZXIiLCJwYXJzZUZsb2F0IiwiZmxvYXRUcmFuc2l0aW9uRGVsYXkiLCJzcGxpdCIsImNhbGxlZCIsImhhbmRsZXIiLCJ0YXJnZXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsImdldE5leHRBY3RpdmVFbGVtZW50IiwibGlzdCIsImFjdGl2ZUVsZW1lbnQiLCJzaG91bGRHZXROZXh0IiwiaXNDeWNsZUFsbG93ZWQiLCJsaXN0TGVuZ3RoIiwiaW5kZXgiLCJpbmRleE9mIiwiTWF0aCIsIm1heCIsIm1pbiIsIm5hbWVzcGFjZVJlZ2V4Iiwic3RyaXBOYW1lUmVnZXgiLCJzdHJpcFVpZFJlZ2V4IiwiZXZlbnRSZWdpc3RyeSIsInVpZEV2ZW50IiwiY3VzdG9tRXZlbnRzIiwibW91c2VlbnRlciIsIm1vdXNlbGVhdmUiLCJuYXRpdmVFdmVudHMiLCJTZXQiLCJtYWtlRXZlbnRVaWQiLCJ1aWQiLCJnZXRFbGVtZW50RXZlbnRzIiwiZmluZEhhbmRsZXIiLCJldmVudHMiLCJjYWxsYWJsZSIsImRlbGVnYXRpb25TZWxlY3RvciIsIk9iamVjdCIsInZhbHVlcyIsImZpbmQiLCJldmVudCIsIm5vcm1hbGl6ZVBhcmFtZXRlcnMiLCJvcmlnaW5hbFR5cGVFdmVudCIsImRlbGVnYXRpb25GdW5jdGlvbiIsImlzRGVsZWdhdGVkIiwidHlwZUV2ZW50IiwiZ2V0VHlwZUV2ZW50IiwiYWRkSGFuZGxlciIsIm9uZU9mZiIsIndyYXBGdW5jdGlvbiIsInJlbGF0ZWRUYXJnZXQiLCJkZWxlZ2F0ZVRhcmdldCIsImNhbGwiLCJ0aGlzIiwiaGFuZGxlcnMiLCJwcmV2aW91c0Z1bmN0aW9uIiwiZG9tRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZG9tRWxlbWVudCIsImh5ZHJhdGVPYmoiLCJFdmVudEhhbmRsZXIiLCJvZmYiLCJ0eXBlIiwiYXBwbHkiLCJib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlciIsImJvb3RzdHJhcEhhbmRsZXIiLCJyZW1vdmVIYW5kbGVyIiwiQm9vbGVhbiIsInJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyIsIm5hbWVzcGFjZSIsInN0b3JlRWxlbWVudEV2ZW50IiwiaGFuZGxlcktleSIsImVudHJpZXMiLCJpbmNsdWRlcyIsIm9uIiwib25lIiwiaW5OYW1lc3BhY2UiLCJpc05hbWVzcGFjZSIsInN0YXJ0c1dpdGgiLCJlbGVtZW50RXZlbnQiLCJzbGljZSIsImtleUhhbmRsZXJzIiwidHJpZ2dlciIsImpRdWVyeUV2ZW50IiwiYnViYmxlcyIsIm5hdGl2ZURpc3BhdGNoIiwiZGVmYXVsdFByZXZlbnRlZCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJldnQiLCJjYW5jZWxhYmxlIiwicHJldmVudERlZmF1bHQiLCJvYmoiLCJtZXRhIiwidmFsdWUiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsIm5vcm1hbGl6ZURhdGEiLCJ0b1N0cmluZyIsIkpTT04iLCJwYXJzZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIm5vcm1hbGl6ZURhdGFLZXkiLCJjaHIiLCJ0b0xvd2VyQ2FzZSIsIk1hbmlwdWxhdG9yIiwic2V0RGF0YUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZURhdGFBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJnZXREYXRhQXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJic0tleXMiLCJkYXRhc2V0IiwiZmlsdGVyIiwicHVyZUtleSIsImNoYXJBdCIsImdldERhdGFBdHRyaWJ1dGUiLCJDb25maWciLCJEZWZhdWx0IiwiRGVmYXVsdFR5cGUiLCJFcnJvciIsIl9nZXRDb25maWciLCJjb25maWciLCJfbWVyZ2VDb25maWdPYmoiLCJfY29uZmlnQWZ0ZXJNZXJnZSIsIl90eXBlQ2hlY2tDb25maWciLCJqc29uQ29uZmlnIiwiY29uc3RydWN0b3IiLCJjb25maWdUeXBlcyIsInByb3BlcnR5IiwiZXhwZWN0ZWRUeXBlcyIsInZhbHVlVHlwZSIsInByb3RvdHlwZSIsIlJlZ0V4cCIsInRlc3QiLCJUeXBlRXJyb3IiLCJ0b1VwcGVyQ2FzZSIsIkJhc2VDb21wb25lbnQiLCJzdXBlciIsIl9lbGVtZW50IiwiX2NvbmZpZyIsIkRBVEFfS0VZIiwiZGlzcG9zZSIsIkVWRU5UX0tFWSIsInByb3BlcnR5TmFtZSIsImdldE93blByb3BlcnR5TmFtZXMiLCJfcXVldWVDYWxsYmFjayIsImlzQW5pbWF0ZWQiLCJnZXRJbnN0YW5jZSIsImdldE9yQ3JlYXRlSW5zdGFuY2UiLCJWRVJTSU9OIiwiZXZlbnROYW1lIiwiZ2V0U2VsZWN0b3IiLCJocmVmQXR0cmlidXRlIiwidHJpbSIsIlNlbGVjdG9yRW5naW5lIiwiY29uY2F0IiwiRWxlbWVudCIsImZpbmRPbmUiLCJjaGlsZHJlbiIsImNoaWxkIiwibWF0Y2hlcyIsInBhcmVudHMiLCJhbmNlc3RvciIsInByZXYiLCJwcmV2aW91cyIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJuZXh0IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZm9jdXNhYmxlQ2hpbGRyZW4iLCJmb2N1c2FibGVzIiwibWFwIiwiam9pbiIsImVsIiwiZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCIsImdldEVsZW1lbnRGcm9tU2VsZWN0b3IiLCJnZXRNdWx0aXBsZUVsZW1lbnRzRnJvbVNlbGVjdG9yIiwiZW5hYmxlRGlzbWlzc1RyaWdnZXIiLCJjb21wb25lbnQiLCJtZXRob2QiLCJjbGlja0V2ZW50IiwidGFnTmFtZSIsIkVWRU5UX0NMT1NFIiwiRVZFTlRfQ0xPU0VEIiwiQWxlcnQiLCJjbG9zZSIsIl9kZXN0cm95RWxlbWVudCIsImVhY2giLCJkYXRhIiwidW5kZWZpbmVkIiwiU0VMRUNUT1JfREFUQV9UT0dHTEUiLCJCdXR0b24iLCJ0b2dnbGUiLCJidXR0b24iLCJFVkVOVF9UT1VDSFNUQVJUIiwiRVZFTlRfVE9VQ0hNT1ZFIiwiRVZFTlRfVE9VQ0hFTkQiLCJFVkVOVF9QT0lOVEVSRE9XTiIsIkVWRU5UX1BPSU5URVJVUCIsImVuZENhbGxiYWNrIiwibGVmdENhbGxiYWNrIiwicmlnaHRDYWxsYmFjayIsIlN3aXBlIiwiaXNTdXBwb3J0ZWQiLCJfZGVsdGFYIiwiX3N1cHBvcnRQb2ludGVyRXZlbnRzIiwiUG9pbnRlckV2ZW50IiwiX2luaXRFdmVudHMiLCJfc3RhcnQiLCJfZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaCIsImNsaWVudFgiLCJ0b3VjaGVzIiwiX2VuZCIsIl9oYW5kbGVTd2lwZSIsIl9tb3ZlIiwiYWJzRGVsdGFYIiwiYWJzIiwiZGlyZWN0aW9uIiwiYWRkIiwicG9pbnRlclR5cGUiLCJuYXZpZ2F0b3IiLCJtYXhUb3VjaFBvaW50cyIsIkRBVEFfQVBJX0tFWSIsIk9SREVSX05FWFQiLCJPUkRFUl9QUkVWIiwiRElSRUNUSU9OX0xFRlQiLCJESVJFQ1RJT05fUklHSFQiLCJFVkVOVF9TTElERSIsIkVWRU5UX1NMSUQiLCJFVkVOVF9LRVlET1dOIiwiRVZFTlRfTU9VU0VFTlRFUiIsIkVWRU5UX01PVVNFTEVBVkUiLCJFVkVOVF9EUkFHX1NUQVJUIiwiRVZFTlRfTE9BRF9EQVRBX0FQSSIsIkVWRU5UX0NMSUNLX0RBVEFfQVBJIiwiQ0xBU1NfTkFNRV9DQVJPVVNFTCIsIkNMQVNTX05BTUVfQUNUSVZFIiwiU0VMRUNUT1JfQUNUSVZFIiwiU0VMRUNUT1JfSVRFTSIsIlNFTEVDVE9SX0FDVElWRV9JVEVNIiwiS0VZX1RPX0RJUkVDVElPTiIsIkFycm93TGVmdCIsIkFycm93UmlnaHQiLCJpbnRlcnZhbCIsImtleWJvYXJkIiwicGF1c2UiLCJyaWRlIiwidG91Y2giLCJ3cmFwIiwiQ2Fyb3VzZWwiLCJfaW50ZXJ2YWwiLCJfYWN0aXZlRWxlbWVudCIsIl9pc1NsaWRpbmciLCJ0b3VjaFRpbWVvdXQiLCJfc3dpcGVIZWxwZXIiLCJfaW5kaWNhdG9yc0VsZW1lbnQiLCJfYWRkRXZlbnRMaXN0ZW5lcnMiLCJjeWNsZSIsIl9zbGlkZSIsIm5leHRXaGVuVmlzaWJsZSIsImhpZGRlbiIsIl9jbGVhckludGVydmFsIiwiX3VwZGF0ZUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJfbWF5YmVFbmFibGVDeWNsZSIsInRvIiwiaXRlbXMiLCJfZ2V0SXRlbXMiLCJhY3RpdmVJbmRleCIsIl9nZXRJdGVtSW5kZXgiLCJfZ2V0QWN0aXZlIiwib3JkZXIiLCJkZWZhdWx0SW50ZXJ2YWwiLCJfa2V5ZG93biIsIl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzIiwiaW1nIiwic3dpcGVDb25maWciLCJfZGlyZWN0aW9uVG9PcmRlciIsImVuZENhbGxCYWNrIiwiY2xlYXJUaW1lb3V0IiwiX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQiLCJhY3RpdmVJbmRpY2F0b3IiLCJuZXdBY3RpdmVJbmRpY2F0b3IiLCJlbGVtZW50SW50ZXJ2YWwiLCJwYXJzZUludCIsImlzTmV4dCIsIm5leHRFbGVtZW50IiwibmV4dEVsZW1lbnRJbmRleCIsInRyaWdnZXJFdmVudCIsIl9vcmRlclRvRGlyZWN0aW9uIiwiaXNDeWNsaW5nIiwiZGlyZWN0aW9uYWxDbGFzc05hbWUiLCJvcmRlckNsYXNzTmFtZSIsImNvbXBsZXRlQ2FsbEJhY2siLCJfaXNBbmltYXRlZCIsImNsZWFySW50ZXJ2YWwiLCJjYXJvdXNlbCIsInNsaWRlSW5kZXgiLCJjYXJvdXNlbHMiLCJFVkVOVF9TSE9XIiwiRVZFTlRfU0hPV04iLCJFVkVOVF9ISURFIiwiRVZFTlRfSElEREVOIiwiQ0xBU1NfTkFNRV9TSE9XIiwiQ0xBU1NfTkFNRV9DT0xMQVBTRSIsIkNMQVNTX05BTUVfQ09MTEFQU0lORyIsIkNMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOIiwicGFyZW50IiwiQ29sbGFwc2UiLCJfaXNUcmFuc2l0aW9uaW5nIiwiX3RyaWdnZXJBcnJheSIsInRvZ2dsZUxpc3QiLCJlbGVtIiwiZmlsdGVyRWxlbWVudCIsImZvdW5kRWxlbWVudCIsIl9pbml0aWFsaXplQ2hpbGRyZW4iLCJfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzIiwiX2lzU2hvd24iLCJoaWRlIiwic2hvdyIsImFjdGl2ZUNoaWxkcmVuIiwiX2dldEZpcnN0TGV2ZWxDaGlsZHJlbiIsImFjdGl2ZUluc3RhbmNlIiwiZGltZW5zaW9uIiwiX2dldERpbWVuc2lvbiIsInN0eWxlIiwic2Nyb2xsU2l6ZSIsImNvbXBsZXRlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic2VsZWN0ZWQiLCJ0cmlnZ2VyQXJyYXkiLCJpc09wZW4iLCJ0b3AiLCJib3R0b20iLCJyaWdodCIsImxlZnQiLCJhdXRvIiwiYmFzZVBsYWNlbWVudHMiLCJzdGFydCIsImVuZCIsImNsaXBwaW5nUGFyZW50cyIsInZpZXdwb3J0IiwicG9wcGVyIiwicmVmZXJlbmNlIiwidmFyaWF0aW9uUGxhY2VtZW50cyIsInJlZHVjZSIsImFjYyIsInBsYWNlbWVudCIsInBsYWNlbWVudHMiLCJiZWZvcmVSZWFkIiwicmVhZCIsImFmdGVyUmVhZCIsImJlZm9yZU1haW4iLCJtYWluIiwiYWZ0ZXJNYWluIiwiYmVmb3JlV3JpdGUiLCJ3cml0ZSIsImFmdGVyV3JpdGUiLCJtb2RpZmllclBoYXNlcyIsImdldE5vZGVOYW1lIiwibm9kZU5hbWUiLCJnZXRXaW5kb3ciLCJub2RlIiwib3duZXJEb2N1bWVudCIsImRlZmF1bHRWaWV3IiwiaXNIVE1MRWxlbWVudCIsIkhUTUxFbGVtZW50IiwiaXNTaGFkb3dSb290IiwiZW5hYmxlZCIsInBoYXNlIiwiX3JlZiIsInN0YXRlIiwiZWxlbWVudHMiLCJmb3JFYWNoIiwic3R5bGVzIiwiYXNzaWduIiwiZWZmZWN0IiwiX3JlZjIiLCJpbml0aWFsU3R5bGVzIiwicG9zaXRpb24iLCJvcHRpb25zIiwic3RyYXRlZ3kiLCJtYXJnaW4iLCJhcnJvdyIsImhhc093blByb3BlcnR5IiwiYXR0cmlidXRlIiwicmVxdWlyZXMiLCJnZXRCYXNlUGxhY2VtZW50Iiwicm91bmQiLCJnZXRVQVN0cmluZyIsInVhRGF0YSIsInVzZXJBZ2VudERhdGEiLCJicmFuZHMiLCJpc0FycmF5IiwiaXRlbSIsImJyYW5kIiwidmVyc2lvbiIsInVzZXJBZ2VudCIsImlzTGF5b3V0Vmlld3BvcnQiLCJpbmNsdWRlU2NhbGUiLCJpc0ZpeGVkU3RyYXRlZ3kiLCJjbGllbnRSZWN0Iiwic2NhbGVYIiwic2NhbGVZIiwib2Zmc2V0V2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsInZpc3VhbFZpZXdwb3J0IiwiYWRkVmlzdWFsT2Zmc2V0cyIsIngiLCJvZmZzZXRMZWZ0IiwieSIsIm9mZnNldFRvcCIsImdldExheW91dFJlY3QiLCJyb290Tm9kZSIsImlzU2FtZU5vZGUiLCJob3N0IiwiaXNUYWJsZUVsZW1lbnQiLCJnZXREb2N1bWVudEVsZW1lbnQiLCJnZXRQYXJlbnROb2RlIiwiYXNzaWduZWRTbG90IiwiZ2V0VHJ1ZU9mZnNldFBhcmVudCIsIm9mZnNldFBhcmVudCIsImdldE9mZnNldFBhcmVudCIsImlzRmlyZWZveCIsImN1cnJlbnROb2RlIiwiY3NzIiwidHJhbnNmb3JtIiwicGVyc3BlY3RpdmUiLCJjb250YWluIiwid2lsbENoYW5nZSIsImdldENvbnRhaW5pbmdCbG9jayIsImdldE1haW5BeGlzRnJvbVBsYWNlbWVudCIsIndpdGhpbiIsIm1hdGhNYXgiLCJtYXRoTWluIiwibWVyZ2VQYWRkaW5nT2JqZWN0IiwicGFkZGluZ09iamVjdCIsImV4cGFuZFRvSGFzaE1hcCIsImhhc2hNYXAiLCJfc3RhdGUkbW9kaWZpZXJzRGF0YSQiLCJhcnJvd0VsZW1lbnQiLCJwb3BwZXJPZmZzZXRzIiwibW9kaWZpZXJzRGF0YSIsImJhc2VQbGFjZW1lbnQiLCJheGlzIiwibGVuIiwicGFkZGluZyIsInJlY3RzIiwidG9QYWRkaW5nT2JqZWN0IiwiYXJyb3dSZWN0IiwibWluUHJvcCIsIm1heFByb3AiLCJlbmREaWZmIiwic3RhcnREaWZmIiwiYXJyb3dPZmZzZXRQYXJlbnQiLCJjbGllbnRTaXplIiwiY2xpZW50SGVpZ2h0IiwiY2xpZW50V2lkdGgiLCJjZW50ZXJUb1JlZmVyZW5jZSIsImNlbnRlciIsIm9mZnNldCIsImF4aXNQcm9wIiwiY2VudGVyT2Zmc2V0IiwiX29wdGlvbnMkZWxlbWVudCIsInJlcXVpcmVzSWZFeGlzdHMiLCJnZXRWYXJpYXRpb24iLCJ1bnNldFNpZGVzIiwibWFwVG9TdHlsZXMiLCJfT2JqZWN0JGFzc2lnbjIiLCJwb3BwZXJSZWN0IiwidmFyaWF0aW9uIiwib2Zmc2V0cyIsImdwdUFjY2VsZXJhdGlvbiIsImFkYXB0aXZlIiwicm91bmRPZmZzZXRzIiwiaXNGaXhlZCIsIl9vZmZzZXRzJHgiLCJfb2Zmc2V0cyR5IiwiX3JlZjMiLCJoYXNYIiwiaGFzWSIsInNpZGVYIiwic2lkZVkiLCJ3aW4iLCJoZWlnaHRQcm9wIiwid2lkdGhQcm9wIiwiX09iamVjdCRhc3NpZ24iLCJjb21tb25TdHlsZXMiLCJfcmVmNCIsImRwciIsImRldmljZVBpeGVsUmF0aW8iLCJyb3VuZE9mZnNldHNCeURQUiIsIl9yZWY1IiwiX29wdGlvbnMkZ3B1QWNjZWxlcmF0IiwiX29wdGlvbnMkYWRhcHRpdmUiLCJfb3B0aW9ucyRyb3VuZE9mZnNldHMiLCJwYXNzaXZlIiwiX29wdGlvbnMkc2Nyb2xsIiwic2Nyb2xsIiwiX29wdGlvbnMkcmVzaXplIiwicmVzaXplIiwic2Nyb2xsUGFyZW50cyIsInNjcm9sbFBhcmVudCIsInVwZGF0ZSIsImhhc2giLCJnZXRPcHBvc2l0ZVBsYWNlbWVudCIsIm1hdGNoZWQiLCJnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudCIsImdldFdpbmRvd1Njcm9sbCIsInNjcm9sbExlZnQiLCJwYWdlWE9mZnNldCIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiZ2V0V2luZG93U2Nyb2xsQmFyWCIsImlzU2Nyb2xsUGFyZW50IiwiX2dldENvbXB1dGVkU3R5bGUiLCJvdmVyZmxvdyIsIm92ZXJmbG93WCIsIm92ZXJmbG93WSIsImdldFNjcm9sbFBhcmVudCIsImxpc3RTY3JvbGxQYXJlbnRzIiwiX2VsZW1lbnQkb3duZXJEb2N1bWVuIiwiaXNCb2R5IiwidXBkYXRlZExpc3QiLCJyZWN0VG9DbGllbnRSZWN0IiwicmVjdCIsImdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlIiwiY2xpcHBpbmdQYXJlbnQiLCJodG1sIiwibGF5b3V0Vmlld3BvcnQiLCJnZXRWaWV3cG9ydFJlY3QiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0IiwiZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aW5TY3JvbGwiLCJzY3JvbGxXaWR0aCIsInNjcm9sbEhlaWdodCIsImdldERvY3VtZW50UmVjdCIsImNvbXB1dGVPZmZzZXRzIiwiY29tbW9uWCIsImNvbW1vblkiLCJtYWluQXhpcyIsImRldGVjdE92ZXJmbG93IiwiX29wdGlvbnMiLCJfb3B0aW9ucyRwbGFjZW1lbnQiLCJfb3B0aW9ucyRzdHJhdGVneSIsIl9vcHRpb25zJGJvdW5kYXJ5IiwiYm91bmRhcnkiLCJfb3B0aW9ucyRyb290Qm91bmRhcnkiLCJyb290Qm91bmRhcnkiLCJfb3B0aW9ucyRlbGVtZW50Q29udGUiLCJlbGVtZW50Q29udGV4dCIsIl9vcHRpb25zJGFsdEJvdW5kYXJ5IiwiYWx0Qm91bmRhcnkiLCJfb3B0aW9ucyRwYWRkaW5nIiwiYWx0Q29udGV4dCIsImNsaXBwaW5nQ2xpZW50UmVjdCIsIm1haW5DbGlwcGluZ1BhcmVudHMiLCJjbGlwcGVyRWxlbWVudCIsImdldENsaXBwaW5nUGFyZW50cyIsImZpcnN0Q2xpcHBpbmdQYXJlbnQiLCJjbGlwcGluZ1JlY3QiLCJhY2NSZWN0IiwiZ2V0Q2xpcHBpbmdSZWN0IiwiY29udGV4dEVsZW1lbnQiLCJyZWZlcmVuY2VDbGllbnRSZWN0IiwicG9wcGVyQ2xpZW50UmVjdCIsImVsZW1lbnRDbGllbnRSZWN0Iiwib3ZlcmZsb3dPZmZzZXRzIiwib2Zmc2V0RGF0YSIsIm11bHRpcGx5IiwiY29tcHV0ZUF1dG9QbGFjZW1lbnQiLCJmbGlwVmFyaWF0aW9ucyIsIl9vcHRpb25zJGFsbG93ZWRBdXRvUCIsImFsbG93ZWRBdXRvUGxhY2VtZW50cyIsImFsbFBsYWNlbWVudHMiLCJhbGxvd2VkUGxhY2VtZW50cyIsIm92ZXJmbG93cyIsInNvcnQiLCJhIiwiYiIsIl9za2lwIiwiX29wdGlvbnMkbWFpbkF4aXMiLCJjaGVja01haW5BeGlzIiwiX29wdGlvbnMkYWx0QXhpcyIsImFsdEF4aXMiLCJjaGVja0FsdEF4aXMiLCJzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMiLCJmYWxsYmFja1BsYWNlbWVudHMiLCJfb3B0aW9ucyRmbGlwVmFyaWF0aW8iLCJwcmVmZXJyZWRQbGFjZW1lbnQiLCJvcHBvc2l0ZVBsYWNlbWVudCIsImdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzIiwicmVmZXJlbmNlUmVjdCIsImNoZWNrc01hcCIsIm1ha2VGYWxsYmFja0NoZWNrcyIsImZpcnN0Rml0dGluZ1BsYWNlbWVudCIsImkiLCJfYmFzZVBsYWNlbWVudCIsImlzU3RhcnRWYXJpYXRpb24iLCJpc1ZlcnRpY2FsIiwibWFpblZhcmlhdGlvblNpZGUiLCJhbHRWYXJpYXRpb25TaWRlIiwiY2hlY2tzIiwiZXZlcnkiLCJjaGVjayIsIl9sb29wIiwiX2kiLCJmaXR0aW5nUGxhY2VtZW50IiwicmVzZXQiLCJnZXRTaWRlT2Zmc2V0cyIsInByZXZlbnRlZE9mZnNldHMiLCJpc0FueVNpZGVGdWxseUNsaXBwZWQiLCJzb21lIiwic2lkZSIsInByZXZlbnRPdmVyZmxvdyIsInJlZmVyZW5jZU92ZXJmbG93IiwicG9wcGVyQWx0T3ZlcmZsb3ciLCJyZWZlcmVuY2VDbGlwcGluZ09mZnNldHMiLCJwb3BwZXJFc2NhcGVPZmZzZXRzIiwiaXNSZWZlcmVuY2VIaWRkZW4iLCJoYXNQb3BwZXJFc2NhcGVkIiwib2Zmc2V0JDEiLCJfb3B0aW9ucyRvZmZzZXQiLCJpbnZlcnREaXN0YW5jZSIsInNraWRkaW5nIiwiZGlzdGFuY2UiLCJkaXN0YW5jZUFuZFNraWRkaW5nVG9YWSIsIl9kYXRhJHN0YXRlJHBsYWNlbWVudCIsInBvcHBlck9mZnNldHMkMSIsInByZXZlbnRPdmVyZmxvdyQxIiwiX29wdGlvbnMkdGV0aGVyIiwidGV0aGVyIiwiX29wdGlvbnMkdGV0aGVyT2Zmc2V0IiwidGV0aGVyT2Zmc2V0IiwiaXNCYXNlUGxhY2VtZW50IiwidGV0aGVyT2Zmc2V0VmFsdWUiLCJub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUiLCJvZmZzZXRNb2RpZmllclN0YXRlIiwiX29mZnNldE1vZGlmaWVyU3RhdGUkIiwibWFpblNpZGUiLCJhbHRTaWRlIiwiYWRkaXRpdmUiLCJtaW5MZW4iLCJtYXhMZW4iLCJhcnJvd1BhZGRpbmdPYmplY3QiLCJhcnJvd1BhZGRpbmdNaW4iLCJhcnJvd1BhZGRpbmdNYXgiLCJhcnJvd0xlbiIsIm1pbk9mZnNldCIsIm1heE9mZnNldCIsImNsaWVudE9mZnNldCIsIm9mZnNldE1vZGlmaWVyVmFsdWUiLCJ0ZXRoZXJNYXgiLCJwcmV2ZW50ZWRPZmZzZXQiLCJfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyIiwiX21haW5TaWRlIiwiX2FsdFNpZGUiLCJfb2Zmc2V0IiwiX2xlbiIsIl9taW4iLCJfbWF4IiwiaXNPcmlnaW5TaWRlIiwiX29mZnNldE1vZGlmaWVyVmFsdWUiLCJfdGV0aGVyTWluIiwiX3RldGhlck1heCIsIl9wcmV2ZW50ZWRPZmZzZXQiLCJ2Iiwid2l0aGluTWF4Q2xhbXAiLCJnZXRDb21wb3NpdGVSZWN0IiwiZWxlbWVudE9yVmlydHVhbEVsZW1lbnQiLCJpc09mZnNldFBhcmVudEFuRWxlbWVudCIsIm9mZnNldFBhcmVudElzU2NhbGVkIiwiaXNFbGVtZW50U2NhbGVkIiwibW9kaWZpZXJzIiwidmlzaXRlZCIsInJlc3VsdCIsIm1vZGlmaWVyIiwiZGVwIiwiZGVwTW9kaWZpZXIiLCJERUZBVUxUX09QVElPTlMiLCJhcmVWYWxpZEVsZW1lbnRzIiwiYXJndW1lbnRzIiwiX2tleSIsInBvcHBlckdlbmVyYXRvciIsImdlbmVyYXRvck9wdGlvbnMiLCJfZ2VuZXJhdG9yT3B0aW9ucyIsIl9nZW5lcmF0b3JPcHRpb25zJGRlZiIsImRlZmF1bHRNb2RpZmllcnMiLCJfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyIiwiZGVmYXVsdE9wdGlvbnMiLCJwZW5kaW5nIiwib3JkZXJlZE1vZGlmaWVycyIsImVmZmVjdENsZWFudXBGbnMiLCJpc0Rlc3Ryb3llZCIsInNldE9wdGlvbnMiLCJzZXRPcHRpb25zQWN0aW9uIiwiY2xlYW51cE1vZGlmaWVyRWZmZWN0cyIsIm1lcmdlZCIsIm9yZGVyTW9kaWZpZXJzIiwiY3VycmVudCIsImV4aXN0aW5nIiwibSIsIl9yZWYkb3B0aW9ucyIsImNsZWFudXBGbiIsImZvcmNlVXBkYXRlIiwiX3N0YXRlJGVsZW1lbnRzIiwiX3N0YXRlJG9yZGVyZWRNb2RpZmllIiwiX3N0YXRlJG9yZGVyZWRNb2RpZmllMiIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsImRlc3Ryb3kiLCJvbkZpcnN0VXBkYXRlIiwiY3JlYXRlUG9wcGVyIiwiZXZlbnRMaXN0ZW5lcnMiLCJjb21wdXRlU3R5bGVzIiwiYXBwbHlTdHlsZXMiLCJmbGlwIiwiQVJST1dfVVBfS0VZIiwiQVJST1dfRE9XTl9LRVkiLCJFVkVOVF9LRVlET1dOX0RBVEFfQVBJIiwiRVZFTlRfS0VZVVBfREFUQV9BUEkiLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TSE9XTiIsIlNFTEVDVE9SX01FTlUiLCJQTEFDRU1FTlRfVE9QIiwiUExBQ0VNRU5UX1RPUEVORCIsIlBMQUNFTUVOVF9CT1RUT00iLCJQTEFDRU1FTlRfQk9UVE9NRU5EIiwiUExBQ0VNRU5UX1JJR0hUIiwiUExBQ0VNRU5UX0xFRlQiLCJhdXRvQ2xvc2UiLCJkaXNwbGF5IiwicG9wcGVyQ29uZmlnIiwiRHJvcGRvd24iLCJfcG9wcGVyIiwiX3BhcmVudCIsIl9tZW51IiwiX2luTmF2YmFyIiwiX2RldGVjdE5hdmJhciIsIl9jcmVhdGVQb3BwZXIiLCJmb2N1cyIsIl9jb21wbGV0ZUhpZGUiLCJQb3BwZXIiLCJyZWZlcmVuY2VFbGVtZW50IiwiX2dldFBvcHBlckNvbmZpZyIsIl9nZXRQbGFjZW1lbnQiLCJwYXJlbnREcm9wZG93biIsImlzRW5kIiwiX2dldE9mZnNldCIsInBvcHBlckRhdGEiLCJkZWZhdWx0QnNQb3BwZXJDb25maWciLCJfc2VsZWN0TWVudUl0ZW0iLCJjbGVhck1lbnVzIiwib3BlblRvZ2dsZXMiLCJjb250ZXh0IiwiY29tcG9zZWRQYXRoIiwiaXNNZW51VGFyZ2V0IiwiZGF0YUFwaUtleWRvd25IYW5kbGVyIiwiaXNJbnB1dCIsImlzRXNjYXBlRXZlbnQiLCJpc1VwT3JEb3duRXZlbnQiLCJnZXRUb2dnbGVCdXR0b24iLCJzdG9wUHJvcGFnYXRpb24iLCJFVkVOVF9NT1VTRURPV04iLCJjbGFzc05hbWUiLCJjbGlja0NhbGxiYWNrIiwicm9vdEVsZW1lbnQiLCJCYWNrZHJvcCIsIl9pc0FwcGVuZGVkIiwiX2FwcGVuZCIsIl9nZXRFbGVtZW50IiwiX2VtdWxhdGVBbmltYXRpb24iLCJiYWNrZHJvcCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmQiLCJFVkVOVF9GT0NVU0lOIiwiRVZFTlRfS0VZRE9XTl9UQUIiLCJUQUJfTkFWX0JBQ0tXQVJEIiwiYXV0b2ZvY3VzIiwidHJhcEVsZW1lbnQiLCJGb2N1c1RyYXAiLCJfaXNBY3RpdmUiLCJfbGFzdFRhYk5hdkRpcmVjdGlvbiIsImFjdGl2YXRlIiwiX2hhbmRsZUZvY3VzaW4iLCJfaGFuZGxlS2V5ZG93biIsImRlYWN0aXZhdGUiLCJzaGlmdEtleSIsIlNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQiLCJTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCIsIlBST1BFUlRZX1BBRERJTkciLCJQUk9QRVJUWV9NQVJHSU4iLCJTY3JvbGxCYXJIZWxwZXIiLCJnZXRXaWR0aCIsImRvY3VtZW50V2lkdGgiLCJpbm5lcldpZHRoIiwiX2Rpc2FibGVPdmVyRmxvdyIsIl9zZXRFbGVtZW50QXR0cmlidXRlcyIsImNhbGN1bGF0ZWRWYWx1ZSIsIl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzIiwiaXNPdmVyZmxvd2luZyIsIl9zYXZlSW5pdGlhbEF0dHJpYnV0ZSIsInN0eWxlUHJvcGVydHkiLCJzY3JvbGxiYXJXaWR0aCIsIl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrIiwic2V0UHJvcGVydHkiLCJhY3R1YWxWYWx1ZSIsInJlbW92ZVByb3BlcnR5IiwiY2FsbEJhY2siLCJzZWwiLCJFVkVOVF9ISURFX1BSRVZFTlRFRCIsIkVWRU5UX1JFU0laRSIsIkVWRU5UX0NMSUNLX0RJU01JU1MiLCJFVkVOVF9NT1VTRURPV05fRElTTUlTUyIsIkVWRU5UX0tFWURPV05fRElTTUlTUyIsIkNMQVNTX05BTUVfT1BFTiIsIkNMQVNTX05BTUVfU1RBVElDIiwiTW9kYWwiLCJfZGlhbG9nIiwiX2JhY2tkcm9wIiwiX2luaXRpYWxpemVCYWNrRHJvcCIsIl9mb2N1c3RyYXAiLCJfaW5pdGlhbGl6ZUZvY3VzVHJhcCIsIl9zY3JvbGxCYXIiLCJfYWRqdXN0RGlhbG9nIiwiX3Nob3dFbGVtZW50IiwiX2hpZGVNb2RhbCIsImhhbmRsZVVwZGF0ZSIsIm1vZGFsQm9keSIsInRyYW5zaXRpb25Db21wbGV0ZSIsIl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uIiwiZXZlbnQyIiwiX3Jlc2V0QWRqdXN0bWVudHMiLCJpc01vZGFsT3ZlcmZsb3dpbmciLCJpbml0aWFsT3ZlcmZsb3dZIiwiaXNCb2R5T3ZlcmZsb3dpbmciLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInNob3dFdmVudCIsImFscmVhZHlPcGVuIiwiQ0xBU1NfTkFNRV9TSE9XSU5HIiwiQ0xBU1NfTkFNRV9ISURJTkciLCJPUEVOX1NFTEVDVE9SIiwiT2ZmY2FudmFzIiwiYmx1ciIsImNvbXBsZXRlQ2FsbGJhY2siLCJEZWZhdWx0QWxsb3dsaXN0IiwiYXJlYSIsImJyIiwiY29sIiwiY29kZSIsImRpdiIsImVtIiwiaHIiLCJoMSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJsaSIsIm9sIiwicCIsInByZSIsInMiLCJzbWFsbCIsInNwYW4iLCJzdWIiLCJzdXAiLCJzdHJvbmciLCJ1IiwidWwiLCJ1cmlBdHRyaWJ1dGVzIiwiU0FGRV9VUkxfUEFUVEVSTiIsImFsbG93ZWRBdHRyaWJ1dGUiLCJhbGxvd2VkQXR0cmlidXRlTGlzdCIsImF0dHJpYnV0ZU5hbWUiLCJub2RlVmFsdWUiLCJhdHRyaWJ1dGVSZWdleCIsInJlZ2V4IiwiYWxsb3dMaXN0IiwiY29udGVudCIsImV4dHJhQ2xhc3MiLCJzYW5pdGl6ZSIsInNhbml0aXplRm4iLCJ0ZW1wbGF0ZSIsIkRlZmF1bHRDb250ZW50VHlwZSIsImVudHJ5IiwiVGVtcGxhdGVGYWN0b3J5IiwiZ2V0Q29udGVudCIsIl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbiIsImhhc0NvbnRlbnQiLCJjaGFuZ2VDb250ZW50IiwiX2NoZWNrQ29udGVudCIsInRvSHRtbCIsInRlbXBsYXRlV3JhcHBlciIsImlubmVySFRNTCIsIl9tYXliZVNhbml0aXplIiwidGV4dCIsIl9zZXRDb250ZW50IiwiYXJnIiwidGVtcGxhdGVFbGVtZW50IiwiX3B1dEVsZW1lbnRJblRlbXBsYXRlIiwidGV4dENvbnRlbnQiLCJ1bnNhZmVIdG1sIiwic2FuaXRpemVGdW5jdGlvbiIsImNyZWF0ZWREb2N1bWVudCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsImVsZW1lbnROYW1lIiwiYXR0cmlidXRlTGlzdCIsImFsbG93ZWRBdHRyaWJ1dGVzIiwic2FuaXRpemVIdG1sIiwiRElTQUxMT1dFRF9BVFRSSUJVVEVTIiwiQ0xBU1NfTkFNRV9GQURFIiwiU0VMRUNUT1JfTU9EQUwiLCJFVkVOVF9NT0RBTF9ISURFIiwiVFJJR0dFUl9IT1ZFUiIsIlRSSUdHRVJfRk9DVVMiLCJBdHRhY2htZW50TWFwIiwiQVVUTyIsIlRPUCIsIlJJR0hUIiwiQk9UVE9NIiwiTEVGVCIsImFuaW1hdGlvbiIsImNvbnRhaW5lciIsImN1c3RvbUNsYXNzIiwiZGVsYXkiLCJ0aXRsZSIsIlRvb2x0aXAiLCJfaXNFbmFibGVkIiwiX3RpbWVvdXQiLCJfaXNIb3ZlcmVkIiwiX2FjdGl2ZVRyaWdnZXIiLCJfdGVtcGxhdGVGYWN0b3J5IiwiX25ld0NvbnRlbnQiLCJ0aXAiLCJfc2V0TGlzdGVuZXJzIiwiX2ZpeFRpdGxlIiwiZW5hYmxlIiwiZGlzYWJsZSIsInRvZ2dsZUVuYWJsZWQiLCJjbGljayIsIl9sZWF2ZSIsIl9lbnRlciIsIl9oaWRlTW9kYWxIYW5kbGVyIiwiX2Rpc3Bvc2VQb3BwZXIiLCJfaXNXaXRoQ29udGVudCIsImlzSW5UaGVEb20iLCJfZ2V0VGlwRWxlbWVudCIsIl9pc1dpdGhBY3RpdmVUcmlnZ2VyIiwiX2dldFRpdGxlIiwiX2NyZWF0ZVRpcEVsZW1lbnQiLCJfZ2V0Q29udGVudEZvclRlbXBsYXRlIiwiX2dldFRlbXBsYXRlRmFjdG9yeSIsInRpcElkIiwicHJlZml4IiwiZmxvb3IiLCJyYW5kb20iLCJnZXRFbGVtZW50QnlJZCIsInNldENvbnRlbnQiLCJfaW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0IiwiX2dldERlbGVnYXRlQ29uZmlnIiwiYXR0YWNobWVudCIsInRyaWdnZXJzIiwiZXZlbnRJbiIsImV2ZW50T3V0IiwiX3NldFRpbWVvdXQiLCJ0aW1lb3V0IiwiZGF0YUF0dHJpYnV0ZXMiLCJkYXRhQXR0cmlidXRlIiwiUG9wb3ZlciIsIl9nZXRDb250ZW50IiwiRVZFTlRfQUNUSVZBVEUiLCJFVkVOVF9DTElDSyIsIlNFTEVDVE9SX1RBUkdFVF9MSU5LUyIsIlNFTEVDVE9SX05BVl9MSU5LUyIsIlNFTEVDVE9SX0xJTktfSVRFTVMiLCJyb290TWFyZ2luIiwic21vb3RoU2Nyb2xsIiwidGhyZXNob2xkIiwiU2Nyb2xsU3B5IiwiX3RhcmdldExpbmtzIiwiX29ic2VydmFibGVTZWN0aW9ucyIsIl9yb290RWxlbWVudCIsIl9hY3RpdmVUYXJnZXQiLCJfb2JzZXJ2ZXIiLCJfcHJldmlvdXNTY3JvbGxEYXRhIiwidmlzaWJsZUVudHJ5VG9wIiwicGFyZW50U2Nyb2xsVG9wIiwicmVmcmVzaCIsIl9pbml0aWFsaXplVGFyZ2V0c0FuZE9ic2VydmFibGVzIiwiX21heWJlRW5hYmxlU21vb3RoU2Nyb2xsIiwiZGlzY29ubmVjdCIsIl9nZXROZXdPYnNlcnZlciIsInNlY3Rpb24iLCJvYnNlcnZlIiwib2JzZXJ2YWJsZVNlY3Rpb24iLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJfb2JzZXJ2ZXJDYWxsYmFjayIsInRhcmdldEVsZW1lbnQiLCJfcHJvY2VzcyIsInVzZXJTY3JvbGxzRG93biIsImlzSW50ZXJzZWN0aW5nIiwiX2NsZWFyQWN0aXZlQ2xhc3MiLCJlbnRyeUlzTG93ZXJUaGFuUHJldmlvdXMiLCJ0YXJnZXRMaW5rcyIsImFuY2hvciIsImRlY29kZVVSSSIsIl9hY3RpdmF0ZVBhcmVudHMiLCJsaXN0R3JvdXAiLCJhY3RpdmVOb2RlcyIsInNweSIsIkFSUk9XX0xFRlRfS0VZIiwiQVJST1dfUklHSFRfS0VZIiwiSE9NRV9LRVkiLCJFTkRfS0VZIiwiU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFIiwiTk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRSIsIlNFTEVDVE9SX0lOTkVSX0VMRU0iLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRV9BQ1RJVkUiLCJUYWIiLCJfc2V0SW5pdGlhbEF0dHJpYnV0ZXMiLCJfZ2V0Q2hpbGRyZW4iLCJpbm5lckVsZW0iLCJfZWxlbUlzQWN0aXZlIiwiYWN0aXZlIiwiX2dldEFjdGl2ZUVsZW0iLCJoaWRlRXZlbnQiLCJfZGVhY3RpdmF0ZSIsIl9hY3RpdmF0ZSIsInJlbGF0ZWRFbGVtIiwiX3RvZ2dsZURyb3BEb3duIiwibmV4dEFjdGl2ZUVsZW1lbnQiLCJwcmV2ZW50U2Nyb2xsIiwiX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzIiwiX3NldEluaXRpYWxBdHRyaWJ1dGVzT25DaGlsZCIsIl9nZXRJbm5lckVsZW1lbnQiLCJpc0FjdGl2ZSIsIm91dGVyRWxlbSIsIl9nZXRPdXRlckVsZW1lbnQiLCJfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPblRhcmdldFBhbmVsIiwib3BlbiIsIkVWRU5UX01PVVNFT1ZFUiIsIkVWRU5UX01PVVNFT1VUIiwiRVZFTlRfRk9DVVNPVVQiLCJDTEFTU19OQU1FX0hJREUiLCJhdXRvaGlkZSIsIlRvYXN0IiwiX2hhc01vdXNlSW50ZXJhY3Rpb24iLCJfaGFzS2V5Ym9hcmRJbnRlcmFjdGlvbiIsIl9jbGVhclRpbWVvdXQiLCJfbWF5YmVTY2hlZHVsZUhpZGUiLCJpc1Nob3duIiwiX29uSW50ZXJhY3Rpb24iLCJpc0ludGVyYWN0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdBLFFBQU1BLElBQWEsSUFBSUMsR0FBSixFQUFuQjtBQUFBLFFBRUFDLElBQWU7QUFDYkMsUUFBSUMsQ0FBSkQsRUFBYUUsQ0FBYkYsRUFBa0JHLENBQWxCSCxFQUFrQkc7QUFDWE4sUUFBV08sR0FBWFAsQ0FBZUksQ0FBZkosS0FDSEEsRUFBV0csR0FBWEgsQ0FBZUksQ0FBZkosRUFBd0IsSUFBSUMsR0FBSixFQUF4QkQsQ0FER0E7QUFJTCxZQUFNUSxJQUFjUixFQUFXUyxHQUFYVCxDQUFlSSxDQUFmSixDQUFwQjtBQUlLUSxRQUFZRCxHQUFaQyxDQUFnQkgsQ0FBaEJHLEtBQTZDLE1BQXJCQSxFQUFZRSxJQUFwQ0YsR0FNTEEsRUFBWUwsR0FBWkssQ0FBZ0JILENBQWhCRyxFQUFxQkYsQ0FBckJFLENBTktBLEdBRUhHLFFBQVFDLEtBQVJELENBQWUsK0VBQThFRSxNQUFNQyxJQUFORCxDQUFXTCxFQUFZTyxJQUFaUCxFQUFYSyxFQUErQixDQUEvQkEsQ0FBK0IsR0FBNUhGLENBRkdIO0tBVk07O0FBbUJiQyxTQUFHQSxDQUFDTCxDQUFESyxFQUFVSixDQUFWSSxLQUNHVCxFQUFXTyxHQUFYUCxDQUFlSSxDQUFmSixLQUNLQSxFQUFXUyxHQUFYVCxDQUFlSSxDQUFmSixFQUF3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QUFQO0FBV0Y7O0FBL0prQnNGOztTQXNLcEJ3QyxFQUFxQjQyQixFQUFyQjUyQixHQU1BNU0sRUFBbUJ3akMsRUFBbkJ4akMsQ0FOQTRNLEVDcE1lO0FBQ2JPLFlBRGE7QUFFYk8sYUFGYTtBQUdiMEQsZ0JBSGE7QUFJYjJELGdCQUphO0FBS2IyYSxnQkFMYTtBQU1ib0YsYUFOYTtBQU9iMEIsaUJBUGE7QUFRYmlJLGVBUmE7QUFTYlUsaUJBVGE7QUFVYjBDLFdBVmE7QUFXYjJCLGFBWGE7QUFZYnpIO0FBWmEsRyIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGRvbS9kYXRhLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBlbGVtZW50TWFwID0gbmV3IE1hcCgpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0KGVsZW1lbnQsIGtleSwgaW5zdGFuY2UpIHtcbiAgICBpZiAoIWVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICBlbGVtZW50TWFwLnNldChlbGVtZW50LCBuZXcgTWFwKCkpXG4gICAgfVxuXG4gICAgY29uc3QgaW5zdGFuY2VNYXAgPSBlbGVtZW50TWFwLmdldChlbGVtZW50KVxuXG4gICAgLy8gbWFrZSBpdCBjbGVhciB3ZSBvbmx5IHdhbnQgb25lIGluc3RhbmNlIHBlciBlbGVtZW50XG4gICAgLy8gY2FuIGJlIHJlbW92ZWQgbGF0ZXIgd2hlbiBtdWx0aXBsZSBrZXkvaW5zdGFuY2VzIGFyZSBmaW5lIHRvIGJlIHVzZWRcbiAgICBpZiAoIWluc3RhbmNlTWFwLmhhcyhrZXkpICYmIGluc3RhbmNlTWFwLnNpemUgIT09IDApIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKGBCb290c3RyYXAgZG9lc24ndCBhbGxvdyBtb3JlIHRoYW4gb25lIGluc3RhbmNlIHBlciBlbGVtZW50LiBCb3VuZCBpbnN0YW5jZTogJHtBcnJheS5mcm9tKGluc3RhbmNlTWFwLmtleXMoKSlbMF19LmApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpbnN0YW5jZU1hcC5zZXQoa2V5LCBpbnN0YW5jZSlcbiAgfSxcblxuICBnZXQoZWxlbWVudCwga2V5KSB7XG4gICAgaWYgKGVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm4gZWxlbWVudE1hcC5nZXQoZWxlbWVudCkuZ2V0KGtleSkgfHwgbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH0sXG5cbiAgcmVtb3ZlKGVsZW1lbnQsIGtleSkge1xuICAgIGlmICghZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGluc3RhbmNlTWFwID0gZWxlbWVudE1hcC5nZXQoZWxlbWVudClcblxuICAgIGluc3RhbmNlTWFwLmRlbGV0ZShrZXkpXG5cbiAgICAvLyBmcmVlIHVwIGVsZW1lbnQgcmVmZXJlbmNlcyBpZiB0aGVyZSBhcmUgbm8gaW5zdGFuY2VzIGxlZnQgZm9yIGFuIGVsZW1lbnRcbiAgICBpZiAoaW5zdGFuY2VNYXAuc2l6ZSA9PT0gMCkge1xuICAgICAgZWxlbWVudE1hcC5kZWxldGUoZWxlbWVudClcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL2luZGV4LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTUFYX1VJRCA9IDFfMDAwXzAwMFxuY29uc3QgTUlMTElTRUNPTkRTX01VTFRJUExJRVIgPSAxMDAwXG5jb25zdCBUUkFOU0lUSU9OX0VORCA9ICd0cmFuc2l0aW9uZW5kJ1xuXG4vKipcbiAqIFByb3Blcmx5IGVzY2FwZSBJRHMgc2VsZWN0b3JzIHRvIGhhbmRsZSB3ZWlyZCBJRHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuY29uc3QgcGFyc2VTZWxlY3RvciA9IHNlbGVjdG9yID0+IHtcbiAgaWYgKHNlbGVjdG9yICYmIHdpbmRvdy5DU1MgJiYgd2luZG93LkNTUy5lc2NhcGUpIHtcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yIG5lZWRzIGVzY2FwaW5nIHRvIGhhbmRsZSBJRHMgKGh0bWw1KykgY29udGFpbmluZyBmb3IgaW5zdGFuY2UgL1xuICAgIHNlbGVjdG9yID0gc2VsZWN0b3IucmVwbGFjZSgvIyhbXlxcc1wiIyddKykvZywgKG1hdGNoLCBpZCkgPT4gYCMke0NTUy5lc2NhcGUoaWQpfWApXG4gIH1cblxuICByZXR1cm4gc2VsZWN0b3Jcbn1cblxuLy8gU2hvdXQtb3V0IEFuZ3VzIENyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXG5jb25zdCB0b1R5cGUgPSBvYmplY3QgPT4ge1xuICBpZiAob2JqZWN0ID09PSBudWxsIHx8IG9iamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGAke29iamVjdH1gXG4gIH1cblxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkubWF0Y2goL1xccyhbYS16XSspL2kpWzFdLnRvTG93ZXJDYXNlKClcbn1cblxuLyoqXG4gKiBQdWJsaWMgVXRpbCBBUElcbiAqL1xuXG5jb25zdCBnZXRVSUQgPSBwcmVmaXggPT4ge1xuICBkbyB7XG4gICAgcHJlZml4ICs9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpXG4gIH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpXG5cbiAgcmV0dXJuIHByZWZpeFxufVxuXG5jb25zdCBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgLy8gR2V0IHRyYW5zaXRpb24tZHVyYXRpb24gb2YgdGhlIGVsZW1lbnRcbiAgbGV0IHsgdHJhbnNpdGlvbkR1cmF0aW9uLCB0cmFuc2l0aW9uRGVsYXkgfSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpXG5cbiAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gPSBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkRlbGF5ID0gTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KVxuXG4gIC8vIFJldHVybiAwIGlmIGVsZW1lbnQgb3IgdHJhbnNpdGlvbiBkdXJhdGlvbiBpcyBub3QgZm91bmRcbiAgaWYgKCFmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiAmJiAhZmxvYXRUcmFuc2l0aW9uRGVsYXkpIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgLy8gSWYgbXVsdGlwbGUgZHVyYXRpb25zIGFyZSBkZWZpbmVkLCB0YWtlIHRoZSBmaXJzdFxuICB0cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24uc3BsaXQoJywnKVswXVxuICB0cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXkuc3BsaXQoJywnKVswXVxuXG4gIHJldHVybiAoTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKSArIE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSkpICogTUlMTElTRUNPTkRTX01VTFRJUExJRVJcbn1cblxuY29uc3QgdHJpZ2dlclRyYW5zaXRpb25FbmQgPSBlbGVtZW50ID0+IHtcbiAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChUUkFOU0lUSU9OX0VORCkpXG59XG5cbmNvbnN0IGlzRWxlbWVudCA9IG9iamVjdCA9PiB7XG4gIGlmICghb2JqZWN0IHx8IHR5cGVvZiBvYmplY3QgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAodHlwZW9mIG9iamVjdC5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgb2JqZWN0ID0gb2JqZWN0WzBdXG4gIH1cblxuICByZXR1cm4gdHlwZW9mIG9iamVjdC5ub2RlVHlwZSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuY29uc3QgZ2V0RWxlbWVudCA9IG9iamVjdCA9PiB7XG4gIC8vIGl0J3MgYSBqUXVlcnkgb2JqZWN0IG9yIGEgbm9kZSBlbGVtZW50XG4gIGlmIChpc0VsZW1lbnQob2JqZWN0KSkge1xuICAgIHJldHVybiBvYmplY3QuanF1ZXJ5ID8gb2JqZWN0WzBdIDogb2JqZWN0XG4gIH1cblxuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ3N0cmluZycgJiYgb2JqZWN0Lmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJzZVNlbGVjdG9yKG9iamVjdCkpXG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5jb25zdCBpc1Zpc2libGUgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFpc0VsZW1lbnQoZWxlbWVudCkgfHwgZWxlbWVudC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudElzVmlzaWJsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgndmlzaWJpbGl0eScpID09PSAndmlzaWJsZSdcbiAgLy8gSGFuZGxlIGBkZXRhaWxzYCBlbGVtZW50IGFzIGl0cyBjb250ZW50IG1heSBmYWxzaWUgYXBwZWFyIHZpc2libGUgd2hlbiBpdCBpcyBjbG9zZWRcbiAgY29uc3QgY2xvc2VkRGV0YWlscyA9IGVsZW1lbnQuY2xvc2VzdCgnZGV0YWlsczpub3QoW29wZW5dKScpXG5cbiAgaWYgKCFjbG9zZWREZXRhaWxzKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRJc1Zpc2libGVcbiAgfVxuXG4gIGlmIChjbG9zZWREZXRhaWxzICE9PSBlbGVtZW50KSB7XG4gICAgY29uc3Qgc3VtbWFyeSA9IGVsZW1lbnQuY2xvc2VzdCgnc3VtbWFyeScpXG4gICAgaWYgKHN1bW1hcnkgJiYgc3VtbWFyeS5wYXJlbnROb2RlICE9PSBjbG9zZWREZXRhaWxzKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoc3VtbWFyeSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRJc1Zpc2libGVcbn1cblxuY29uc3QgaXNEaXNhYmxlZCA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWVsZW1lbnQgfHwgZWxlbWVudC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmICh0eXBlb2YgZWxlbWVudC5kaXNhYmxlZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZWxlbWVudC5kaXNhYmxlZFxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpICYmIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpICE9PSAnZmFsc2UnXG59XG5cbmNvbnN0IGZpbmRTaGFkb3dSb290ID0gZWxlbWVudCA9PiB7XG4gIGlmICghZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmF0dGFjaFNoYWRvdykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBDYW4gZmluZCB0aGUgc2hhZG93IHJvb3Qgb3RoZXJ3aXNlIGl0J2xsIHJldHVybiB0aGUgZG9jdW1lbnRcbiAgaWYgKHR5cGVvZiBlbGVtZW50LmdldFJvb3ROb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3Qgcm9vdCA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKVxuICAgIHJldHVybiByb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IHJvb3QgOiBudWxsXG4gIH1cblxuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG5cbiAgLy8gd2hlbiB3ZSBkb24ndCBmaW5kIGEgc2hhZG93IHJvb3RcbiAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIGZpbmRTaGFkb3dSb290KGVsZW1lbnQucGFyZW50Tm9kZSlcbn1cblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbi8qKlxuICogVHJpY2sgdG8gcmVzdGFydCBhbiBlbGVtZW50J3MgYW5pbWF0aW9uXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybiB2b2lkXG4gKlxuICogQHNlZSBodHRwczovL3d3dy5jaGFyaXN0aGVvLmlvL2Jsb2cvMjAyMS8wMi9yZXN0YXJ0LWEtY3NzLWFuaW1hdGlvbi13aXRoLWphdmFzY3JpcHQvI3Jlc3RhcnRpbmctYS1jc3MtYW5pbWF0aW9uXG4gKi9cbmNvbnN0IHJlZmxvdyA9IGVsZW1lbnQgPT4ge1xuICBlbGVtZW50Lm9mZnNldEhlaWdodCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xufVxuXG5jb25zdCBnZXRqUXVlcnkgPSAoKSA9PiB7XG4gIGlmICh3aW5kb3cualF1ZXJ5ICYmICFkb2N1bWVudC5ib2R5Lmhhc0F0dHJpYnV0ZSgnZGF0YS1icy1uby1qcXVlcnknKSkge1xuICAgIHJldHVybiB3aW5kb3cualF1ZXJ5XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5jb25zdCBET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzID0gW11cblxuY29uc3Qgb25ET01Db250ZW50TG9hZGVkID0gY2FsbGJhY2sgPT4ge1xuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgLy8gYWRkIGxpc3RlbmVyIG9uIHRoZSBmaXJzdCBjYWxsIHdoZW4gdGhlIGRvY3VtZW50IGlzIGluIGxvYWRpbmcgc3RhdGVcbiAgICBpZiAoIURPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIERPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MpIHtcbiAgICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgRE9NQ29udGVudExvYWRlZENhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKVxuICB9IGVsc2Uge1xuICAgIGNhbGxiYWNrKClcbiAgfVxufVxuXG5jb25zdCBpc1JUTCA9ICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kaXIgPT09ICdydGwnXG5cbmNvbnN0IGRlZmluZUpRdWVyeVBsdWdpbiA9IHBsdWdpbiA9PiB7XG4gIG9uRE9NQ29udGVudExvYWRlZCgoKSA9PiB7XG4gICAgY29uc3QgJCA9IGdldGpRdWVyeSgpXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCQpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBwbHVnaW4uTkFNRVxuICAgICAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltuYW1lXVxuICAgICAgJC5mbltuYW1lXSA9IHBsdWdpbi5qUXVlcnlJbnRlcmZhY2VcbiAgICAgICQuZm5bbmFtZV0uQ29uc3RydWN0b3IgPSBwbHVnaW5cbiAgICAgICQuZm5bbmFtZV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgICAgICAgJC5mbltuYW1lXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgICAgICByZXR1cm4gcGx1Z2luLmpRdWVyeUludGVyZmFjZVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgZXhlY3V0ZSA9IChwb3NzaWJsZUNhbGxiYWNrLCBhcmdzID0gW10sIGRlZmF1bHRWYWx1ZSA9IHBvc3NpYmxlQ2FsbGJhY2spID0+IHtcbiAgcmV0dXJuIHR5cGVvZiBwb3NzaWJsZUNhbGxiYWNrID09PSAnZnVuY3Rpb24nID8gcG9zc2libGVDYWxsYmFjayguLi5hcmdzKSA6IGRlZmF1bHRWYWx1ZVxufVxuXG5jb25zdCBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uID0gKGNhbGxiYWNrLCB0cmFuc2l0aW9uRWxlbWVudCwgd2FpdEZvclRyYW5zaXRpb24gPSB0cnVlKSA9PiB7XG4gIGlmICghd2FpdEZvclRyYW5zaXRpb24pIHtcbiAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgZHVyYXRpb25QYWRkaW5nID0gNVxuICBjb25zdCBlbXVsYXRlZER1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodHJhbnNpdGlvbkVsZW1lbnQpICsgZHVyYXRpb25QYWRkaW5nXG5cbiAgbGV0IGNhbGxlZCA9IGZhbHNlXG5cbiAgY29uc3QgaGFuZGxlciA9ICh7IHRhcmdldCB9KSA9PiB7XG4gICAgaWYgKHRhcmdldCAhPT0gdHJhbnNpdGlvbkVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNhbGxlZCA9IHRydWVcbiAgICB0cmFuc2l0aW9uRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFRSQU5TSVRJT05fRU5ELCBoYW5kbGVyKVxuICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gIH1cblxuICB0cmFuc2l0aW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFRSQU5TSVRJT05fRU5ELCBoYW5kbGVyKVxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgdHJpZ2dlclRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkVsZW1lbnQpXG4gICAgfVxuICB9LCBlbXVsYXRlZER1cmF0aW9uKVxufVxuXG4vKipcbiAqIFJldHVybiB0aGUgcHJldmlvdXMvbmV4dCBlbGVtZW50IG9mIGEgbGlzdC5cbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBsaXN0ICAgIFRoZSBsaXN0IG9mIGVsZW1lbnRzXG4gKiBAcGFyYW0gYWN0aXZlRWxlbWVudCAgIFRoZSBhY3RpdmUgZWxlbWVudFxuICogQHBhcmFtIHNob3VsZEdldE5leHQgICBDaG9vc2UgdG8gZ2V0IG5leHQgb3IgcHJldmlvdXMgZWxlbWVudFxuICogQHBhcmFtIGlzQ3ljbGVBbGxvd2VkXG4gKiBAcmV0dXJuIHtFbGVtZW50fGVsZW19IFRoZSBwcm9wZXIgZWxlbWVudFxuICovXG5jb25zdCBnZXROZXh0QWN0aXZlRWxlbWVudCA9IChsaXN0LCBhY3RpdmVFbGVtZW50LCBzaG91bGRHZXROZXh0LCBpc0N5Y2xlQWxsb3dlZCkgPT4ge1xuICBjb25zdCBsaXN0TGVuZ3RoID0gbGlzdC5sZW5ndGhcbiAgbGV0IGluZGV4ID0gbGlzdC5pbmRleE9mKGFjdGl2ZUVsZW1lbnQpXG5cbiAgLy8gaWYgdGhlIGVsZW1lbnQgZG9lcyBub3QgZXhpc3QgaW4gdGhlIGxpc3QgcmV0dXJuIGFuIGVsZW1lbnRcbiAgLy8gZGVwZW5kaW5nIG9uIHRoZSBkaXJlY3Rpb24gYW5kIGlmIGN5Y2xlIGlzIGFsbG93ZWRcbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIHJldHVybiAhc2hvdWxkR2V0TmV4dCAmJiBpc0N5Y2xlQWxsb3dlZCA/IGxpc3RbbGlzdExlbmd0aCAtIDFdIDogbGlzdFswXVxuICB9XG5cbiAgaW5kZXggKz0gc2hvdWxkR2V0TmV4dCA/IDEgOiAtMVxuXG4gIGlmIChpc0N5Y2xlQWxsb3dlZCkge1xuICAgIGluZGV4ID0gKGluZGV4ICsgbGlzdExlbmd0aCkgJSBsaXN0TGVuZ3RoXG4gIH1cblxuICByZXR1cm4gbGlzdFtNYXRoLm1heCgwLCBNYXRoLm1pbihpbmRleCwgbGlzdExlbmd0aCAtIDEpKV1cbn1cblxuZXhwb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBleGVjdXRlLFxuICBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uLFxuICBmaW5kU2hhZG93Um9vdCxcbiAgZ2V0RWxlbWVudCxcbiAgZ2V0alF1ZXJ5LFxuICBnZXROZXh0QWN0aXZlRWxlbWVudCxcbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQsXG4gIGdldFVJRCxcbiAgaXNEaXNhYmxlZCxcbiAgaXNFbGVtZW50LFxuICBpc1JUTCxcbiAgaXNWaXNpYmxlLFxuICBub29wLFxuICBvbkRPTUNvbnRlbnRMb2FkZWQsXG4gIHBhcnNlU2VsZWN0b3IsXG4gIHJlZmxvdyxcbiAgdHJpZ2dlclRyYW5zaXRpb25FbmQsXG4gIHRvVHlwZVxufVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGRvbS9ldmVudC1oYW5kbGVyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgZ2V0alF1ZXJ5IH0gZnJvbSAnLi4vdXRpbC9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBuYW1lc3BhY2VSZWdleCA9IC9bXi5dKig/PVxcLi4qKVxcLnwuKi9cbmNvbnN0IHN0cmlwTmFtZVJlZ2V4ID0gL1xcLi4qL1xuY29uc3Qgc3RyaXBVaWRSZWdleCA9IC86OlxcZCskL1xuY29uc3QgZXZlbnRSZWdpc3RyeSA9IHt9IC8vIEV2ZW50cyBzdG9yYWdlXG5sZXQgdWlkRXZlbnQgPSAxXG5jb25zdCBjdXN0b21FdmVudHMgPSB7XG4gIG1vdXNlZW50ZXI6ICdtb3VzZW92ZXInLFxuICBtb3VzZWxlYXZlOiAnbW91c2VvdXQnXG59XG5cbmNvbnN0IG5hdGl2ZUV2ZW50cyA9IG5ldyBTZXQoW1xuICAnY2xpY2snLFxuICAnZGJsY2xpY2snLFxuICAnbW91c2V1cCcsXG4gICdtb3VzZWRvd24nLFxuICAnY29udGV4dG1lbnUnLFxuICAnbW91c2V3aGVlbCcsXG4gICdET01Nb3VzZVNjcm9sbCcsXG4gICdtb3VzZW92ZXInLFxuICAnbW91c2VvdXQnLFxuICAnbW91c2Vtb3ZlJyxcbiAgJ3NlbGVjdHN0YXJ0JyxcbiAgJ3NlbGVjdGVuZCcsXG4gICdrZXlkb3duJyxcbiAgJ2tleXByZXNzJyxcbiAgJ2tleXVwJyxcbiAgJ29yaWVudGF0aW9uY2hhbmdlJyxcbiAgJ3RvdWNoc3RhcnQnLFxuICAndG91Y2htb3ZlJyxcbiAgJ3RvdWNoZW5kJyxcbiAgJ3RvdWNoY2FuY2VsJyxcbiAgJ3BvaW50ZXJkb3duJyxcbiAgJ3BvaW50ZXJtb3ZlJyxcbiAgJ3BvaW50ZXJ1cCcsXG4gICdwb2ludGVybGVhdmUnLFxuICAncG9pbnRlcmNhbmNlbCcsXG4gICdnZXN0dXJlc3RhcnQnLFxuICAnZ2VzdHVyZWNoYW5nZScsXG4gICdnZXN0dXJlZW5kJyxcbiAgJ2ZvY3VzJyxcbiAgJ2JsdXInLFxuICAnY2hhbmdlJyxcbiAgJ3Jlc2V0JyxcbiAgJ3NlbGVjdCcsXG4gICdzdWJtaXQnLFxuICAnZm9jdXNpbicsXG4gICdmb2N1c291dCcsXG4gICdsb2FkJyxcbiAgJ3VubG9hZCcsXG4gICdiZWZvcmV1bmxvYWQnLFxuICAncmVzaXplJyxcbiAgJ21vdmUnLFxuICAnRE9NQ29udGVudExvYWRlZCcsXG4gICdyZWFkeXN0YXRlY2hhbmdlJyxcbiAgJ2Vycm9yJyxcbiAgJ2Fib3J0JyxcbiAgJ3Njcm9sbCdcbl0pXG5cbi8qKlxuICogUHJpdmF0ZSBtZXRob2RzXG4gKi9cblxuZnVuY3Rpb24gbWFrZUV2ZW50VWlkKGVsZW1lbnQsIHVpZCkge1xuICByZXR1cm4gKHVpZCAmJiBgJHt1aWR9Ojoke3VpZEV2ZW50Kyt9YCkgfHwgZWxlbWVudC51aWRFdmVudCB8fCB1aWRFdmVudCsrXG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRFdmVudHMoZWxlbWVudCkge1xuICBjb25zdCB1aWQgPSBtYWtlRXZlbnRVaWQoZWxlbWVudClcblxuICBlbGVtZW50LnVpZEV2ZW50ID0gdWlkXG4gIGV2ZW50UmVnaXN0cnlbdWlkXSA9IGV2ZW50UmVnaXN0cnlbdWlkXSB8fCB7fVxuXG4gIHJldHVybiBldmVudFJlZ2lzdHJ5W3VpZF1cbn1cblxuZnVuY3Rpb24gYm9vdHN0cmFwSGFuZGxlcihlbGVtZW50LCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgIGh5ZHJhdGVPYmooZXZlbnQsIHsgZGVsZWdhdGVUYXJnZXQ6IGVsZW1lbnQgfSlcblxuICAgIGlmIChoYW5kbGVyLm9uZU9mZikge1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCBldmVudC50eXBlLCBmbilcbiAgICB9XG5cbiAgICByZXR1cm4gZm4uYXBwbHkoZWxlbWVudCwgW2V2ZW50XSlcbiAgfVxufVxuXG5mdW5jdGlvbiBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBzZWxlY3RvciwgZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcblxuICAgIGZvciAobGV0IHsgdGFyZ2V0IH0gPSBldmVudDsgdGFyZ2V0ICYmIHRhcmdldCAhPT0gdGhpczsgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGUpIHtcbiAgICAgIGZvciAoY29uc3QgZG9tRWxlbWVudCBvZiBkb21FbGVtZW50cykge1xuICAgICAgICBpZiAoZG9tRWxlbWVudCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGh5ZHJhdGVPYmooZXZlbnQsIHsgZGVsZWdhdGVUYXJnZXQ6IHRhcmdldCB9KVxuXG4gICAgICAgIGlmIChoYW5kbGVyLm9uZU9mZikge1xuICAgICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgZXZlbnQudHlwZSwgc2VsZWN0b3IsIGZuKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRhcmdldCwgW2V2ZW50XSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEhhbmRsZXIoZXZlbnRzLCBjYWxsYWJsZSwgZGVsZWdhdGlvblNlbGVjdG9yID0gbnVsbCkge1xuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhldmVudHMpXG4gICAgLmZpbmQoZXZlbnQgPT4gZXZlbnQuY2FsbGFibGUgPT09IGNhbGxhYmxlICYmIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvciA9PT0gZGVsZWdhdGlvblNlbGVjdG9yKVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQYXJhbWV0ZXJzKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgY29uc3QgaXNEZWxlZ2F0ZWQgPSB0eXBlb2YgaGFuZGxlciA9PT0gJ3N0cmluZydcbiAgLy8gVE9ETzogdG9vbHRpcCBwYXNzZXMgYGZhbHNlYCBpbnN0ZWFkIG9mIHNlbGVjdG9yLCBzbyB3ZSBuZWVkIHRvIGNoZWNrXG4gIGNvbnN0IGNhbGxhYmxlID0gaXNEZWxlZ2F0ZWQgPyBkZWxlZ2F0aW9uRnVuY3Rpb24gOiAoaGFuZGxlciB8fCBkZWxlZ2F0aW9uRnVuY3Rpb24pXG4gIGxldCB0eXBlRXZlbnQgPSBnZXRUeXBlRXZlbnQob3JpZ2luYWxUeXBlRXZlbnQpXG5cbiAgaWYgKCFuYXRpdmVFdmVudHMuaGFzKHR5cGVFdmVudCkpIHtcbiAgICB0eXBlRXZlbnQgPSBvcmlnaW5hbFR5cGVFdmVudFxuICB9XG5cbiAgcmV0dXJuIFtpc0RlbGVnYXRlZCwgY2FsbGFibGUsIHR5cGVFdmVudF1cbn1cblxuZnVuY3Rpb24gYWRkSGFuZGxlcihlbGVtZW50LCBvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uLCBvbmVPZmYpIHtcbiAgaWYgKHR5cGVvZiBvcmlnaW5hbFR5cGVFdmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGxldCBbaXNEZWxlZ2F0ZWQsIGNhbGxhYmxlLCB0eXBlRXZlbnRdID0gbm9ybWFsaXplUGFyYW1ldGVycyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKVxuXG4gIC8vIGluIGNhc2Ugb2YgbW91c2VlbnRlciBvciBtb3VzZWxlYXZlIHdyYXAgdGhlIGhhbmRsZXIgd2l0aGluIGEgZnVuY3Rpb24gdGhhdCBjaGVja3MgZm9yIGl0cyBET00gcG9zaXRpb25cbiAgLy8gdGhpcyBwcmV2ZW50cyB0aGUgaGFuZGxlciBmcm9tIGJlaW5nIGRpc3BhdGNoZWQgdGhlIHNhbWUgd2F5IGFzIG1vdXNlb3ZlciBvciBtb3VzZW91dCBkb2VzXG4gIGlmIChvcmlnaW5hbFR5cGVFdmVudCBpbiBjdXN0b21FdmVudHMpIHtcbiAgICBjb25zdCB3cmFwRnVuY3Rpb24gPSBmbiA9PiB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICghZXZlbnQucmVsYXRlZFRhcmdldCB8fCAoZXZlbnQucmVsYXRlZFRhcmdldCAhPT0gZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgIWV2ZW50LmRlbGVnYXRlVGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpKSkge1xuICAgICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FsbGFibGUgPSB3cmFwRnVuY3Rpb24oY2FsbGFibGUpXG4gIH1cblxuICBjb25zdCBldmVudHMgPSBnZXRFbGVtZW50RXZlbnRzKGVsZW1lbnQpXG4gIGNvbnN0IGhhbmRsZXJzID0gZXZlbnRzW3R5cGVFdmVudF0gfHwgKGV2ZW50c1t0eXBlRXZlbnRdID0ge30pXG4gIGNvbnN0IHByZXZpb3VzRnVuY3Rpb24gPSBmaW5kSGFuZGxlcihoYW5kbGVycywgY2FsbGFibGUsIGlzRGVsZWdhdGVkID8gaGFuZGxlciA6IG51bGwpXG5cbiAgaWYgKHByZXZpb3VzRnVuY3Rpb24pIHtcbiAgICBwcmV2aW91c0Z1bmN0aW9uLm9uZU9mZiA9IHByZXZpb3VzRnVuY3Rpb24ub25lT2ZmICYmIG9uZU9mZlxuXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCB1aWQgPSBtYWtlRXZlbnRVaWQoY2FsbGFibGUsIG9yaWdpbmFsVHlwZUV2ZW50LnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSlcbiAgY29uc3QgZm4gPSBpc0RlbGVnYXRlZCA/XG4gICAgYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIoZWxlbWVudCwgaGFuZGxlciwgY2FsbGFibGUpIDpcbiAgICBib290c3RyYXBIYW5kbGVyKGVsZW1lbnQsIGNhbGxhYmxlKVxuXG4gIGZuLmRlbGVnYXRpb25TZWxlY3RvciA9IGlzRGVsZWdhdGVkID8gaGFuZGxlciA6IG51bGxcbiAgZm4uY2FsbGFibGUgPSBjYWxsYWJsZVxuICBmbi5vbmVPZmYgPSBvbmVPZmZcbiAgZm4udWlkRXZlbnQgPSB1aWRcbiAgaGFuZGxlcnNbdWlkXSA9IGZuXG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIGlzRGVsZWdhdGVkKVxufVxuXG5mdW5jdGlvbiByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IpIHtcbiAgY29uc3QgZm4gPSBmaW5kSGFuZGxlcihldmVudHNbdHlwZUV2ZW50XSwgaGFuZGxlciwgZGVsZWdhdGlvblNlbGVjdG9yKVxuXG4gIGlmICghZm4pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlRXZlbnQsIGZuLCBCb29sZWFuKGRlbGVnYXRpb25TZWxlY3RvcikpXG4gIGRlbGV0ZSBldmVudHNbdHlwZUV2ZW50XVtmbi51aWRFdmVudF1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBuYW1lc3BhY2UpIHtcbiAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fVxuXG4gIGZvciAoY29uc3QgW2hhbmRsZXJLZXksIGV2ZW50XSBvZiBPYmplY3QuZW50cmllcyhzdG9yZUVsZW1lbnRFdmVudCkpIHtcbiAgICBpZiAoaGFuZGxlcktleS5pbmNsdWRlcyhuYW1lc3BhY2UpKSB7XG4gICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBldmVudC5jYWxsYWJsZSwgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUeXBlRXZlbnQoZXZlbnQpIHtcbiAgLy8gYWxsb3cgdG8gZ2V0IHRoZSBuYXRpdmUgZXZlbnRzIGZyb20gbmFtZXNwYWNlZCBldmVudHMgKCdjbGljay5icy5idXR0b24nIC0tPiAnY2xpY2snKVxuICBldmVudCA9IGV2ZW50LnJlcGxhY2Uoc3RyaXBOYW1lUmVnZXgsICcnKVxuICByZXR1cm4gY3VzdG9tRXZlbnRzW2V2ZW50XSB8fCBldmVudFxufVxuXG5jb25zdCBFdmVudEhhbmRsZXIgPSB7XG4gIG9uKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIGZhbHNlKVxuICB9LFxuXG4gIG9uZShlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKSB7XG4gICAgYWRkSGFuZGxlcihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uLCB0cnVlKVxuICB9LFxuXG4gIG9mZihlbGVtZW50LCBvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiBvcmlnaW5hbFR5cGVFdmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IFtpc0RlbGVnYXRlZCwgY2FsbGFibGUsIHR5cGVFdmVudF0gPSBub3JtYWxpemVQYXJhbWV0ZXJzKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pXG4gICAgY29uc3QgaW5OYW1lc3BhY2UgPSB0eXBlRXZlbnQgIT09IG9yaWdpbmFsVHlwZUV2ZW50XG4gICAgY29uc3QgZXZlbnRzID0gZ2V0RWxlbWVudEV2ZW50cyhlbGVtZW50KVxuICAgIGNvbnN0IHN0b3JlRWxlbWVudEV2ZW50ID0gZXZlbnRzW3R5cGVFdmVudF0gfHwge31cbiAgICBjb25zdCBpc05hbWVzcGFjZSA9IG9yaWdpbmFsVHlwZUV2ZW50LnN0YXJ0c1dpdGgoJy4nKVxuXG4gICAgaWYgKHR5cGVvZiBjYWxsYWJsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFNpbXBsZXN0IGNhc2U6IGhhbmRsZXIgaXMgcGFzc2VkLCByZW1vdmUgdGhhdCBsaXN0ZW5lciBPTkxZLlxuICAgICAgaWYgKCFPYmplY3Qua2V5cyhzdG9yZUVsZW1lbnRFdmVudCkubGVuZ3RoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBjYWxsYWJsZSwgaXNEZWxlZ2F0ZWQgPyBoYW5kbGVyIDogbnVsbClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc05hbWVzcGFjZSkge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50RXZlbnQgb2YgT2JqZWN0LmtleXMoZXZlbnRzKSkge1xuICAgICAgICByZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMoZWxlbWVudCwgZXZlbnRzLCBlbGVtZW50RXZlbnQsIG9yaWdpbmFsVHlwZUV2ZW50LnNsaWNlKDEpKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgW2tleUhhbmRsZXJzLCBldmVudF0gb2YgT2JqZWN0LmVudHJpZXMoc3RvcmVFbGVtZW50RXZlbnQpKSB7XG4gICAgICBjb25zdCBoYW5kbGVyS2V5ID0ga2V5SGFuZGxlcnMucmVwbGFjZShzdHJpcFVpZFJlZ2V4LCAnJylcblxuICAgICAgaWYgKCFpbk5hbWVzcGFjZSB8fCBvcmlnaW5hbFR5cGVFdmVudC5pbmNsdWRlcyhoYW5kbGVyS2V5KSkge1xuICAgICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBldmVudC5jYWxsYWJsZSwgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yKVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICB0cmlnZ2VyKGVsZW1lbnQsIGV2ZW50LCBhcmdzKSB7XG4gICAgaWYgKHR5cGVvZiBldmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgJCA9IGdldGpRdWVyeSgpXG4gICAgY29uc3QgdHlwZUV2ZW50ID0gZ2V0VHlwZUV2ZW50KGV2ZW50KVxuICAgIGNvbnN0IGluTmFtZXNwYWNlID0gZXZlbnQgIT09IHR5cGVFdmVudFxuXG4gICAgbGV0IGpRdWVyeUV2ZW50ID0gbnVsbFxuICAgIGxldCBidWJibGVzID0gdHJ1ZVxuICAgIGxldCBuYXRpdmVEaXNwYXRjaCA9IHRydWVcbiAgICBsZXQgZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlXG5cbiAgICBpZiAoaW5OYW1lc3BhY2UgJiYgJCkge1xuICAgICAgalF1ZXJ5RXZlbnQgPSAkLkV2ZW50KGV2ZW50LCBhcmdzKVxuXG4gICAgICAkKGVsZW1lbnQpLnRyaWdnZXIoalF1ZXJ5RXZlbnQpXG4gICAgICBidWJibGVzID0gIWpRdWVyeUV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKClcbiAgICAgIG5hdGl2ZURpc3BhdGNoID0gIWpRdWVyeUV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKClcbiAgICAgIGRlZmF1bHRQcmV2ZW50ZWQgPSBqUXVlcnlFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKVxuICAgIH1cblxuICAgIGNvbnN0IGV2dCA9IGh5ZHJhdGVPYmoobmV3IEV2ZW50KGV2ZW50LCB7IGJ1YmJsZXMsIGNhbmNlbGFibGU6IHRydWUgfSksIGFyZ3MpXG5cbiAgICBpZiAoZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAobmF0aXZlRGlzcGF0Y2gpIHtcbiAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldnQpXG4gICAgfVxuXG4gICAgaWYgKGV2dC5kZWZhdWx0UHJldmVudGVkICYmIGpRdWVyeUV2ZW50KSB7XG4gICAgICBqUXVlcnlFdmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgcmV0dXJuIGV2dFxuICB9XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVPYmoob2JqLCBtZXRhID0ge30pIHtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobWV0YSkpIHtcbiAgICB0cnkge1xuICAgICAgb2JqW2tleV0gPSB2YWx1ZVxuICAgIH0gY2F0Y2gge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmpcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRIYW5kbGVyXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgZG9tL21hbmlwdWxhdG9yLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplRGF0YSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09ICd0cnVlJykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAodmFsdWUgPT09ICdmYWxzZScpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gTnVtYmVyKHZhbHVlKS50b1N0cmluZygpKSB7XG4gICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09ICdudWxsJykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVEYXRhS2V5KGtleSkge1xuICByZXR1cm4ga2V5LnJlcGxhY2UoL1tBLVpdL2csIGNociA9PiBgLSR7Y2hyLnRvTG93ZXJDYXNlKCl9YClcbn1cblxuY29uc3QgTWFuaXB1bGF0b3IgPSB7XG4gIHNldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWAsIHZhbHVlKVxuICB9LFxuXG4gIHJlbW92ZURhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5KSB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YClcbiAgfSxcblxuICBnZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9XG5cbiAgICBjb25zdCBhdHRyaWJ1dGVzID0ge31cbiAgICBjb25zdCBic0tleXMgPSBPYmplY3Qua2V5cyhlbGVtZW50LmRhdGFzZXQpLmZpbHRlcihrZXkgPT4ga2V5LnN0YXJ0c1dpdGgoJ2JzJykgJiYgIWtleS5zdGFydHNXaXRoKCdic0NvbmZpZycpKVxuXG4gICAgZm9yIChjb25zdCBrZXkgb2YgYnNLZXlzKSB7XG4gICAgICBsZXQgcHVyZUtleSA9IGtleS5yZXBsYWNlKC9eYnMvLCAnJylcbiAgICAgIHB1cmVLZXkgPSBwdXJlS2V5LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgcHVyZUtleS5zbGljZSgxLCBwdXJlS2V5Lmxlbmd0aClcbiAgICAgIGF0dHJpYnV0ZXNbcHVyZUtleV0gPSBub3JtYWxpemVEYXRhKGVsZW1lbnQuZGF0YXNldFtrZXldKVxuICAgIH1cblxuICAgIHJldHVybiBhdHRyaWJ1dGVzXG4gIH0sXG5cbiAgZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXkpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplRGF0YShlbGVtZW50LmdldEF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYW5pcHVsYXRvclxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvY29uZmlnLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4uL2RvbS9tYW5pcHVsYXRvci5qcydcbmltcG9ydCB7IGlzRWxlbWVudCwgdG9UeXBlIH0gZnJvbSAnLi9pbmRleC5qcydcblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQ29uZmlnIHtcbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiB7fVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignWW91IGhhdmUgdG8gaW1wbGVtZW50IHRoZSBzdGF0aWMgbWV0aG9kIFwiTkFNRVwiLCBmb3IgZWFjaCBjb21wb25lbnQhJylcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0gdGhpcy5fbWVyZ2VDb25maWdPYmooY29uZmlnKVxuICAgIGNvbmZpZyA9IHRoaXMuX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKVxuICAgIHRoaXMuX3R5cGVDaGVja0NvbmZpZyhjb25maWcpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX21lcmdlQ29uZmlnT2JqKGNvbmZpZywgZWxlbWVudCkge1xuICAgIGNvbnN0IGpzb25Db25maWcgPSBpc0VsZW1lbnQoZWxlbWVudCkgPyBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsICdjb25maWcnKSA6IHt9IC8vIHRyeSB0byBwYXJzZVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCxcbiAgICAgIC4uLih0eXBlb2YganNvbkNvbmZpZyA9PT0gJ29iamVjdCcgPyBqc29uQ29uZmlnIDoge30pLFxuICAgICAgLi4uKGlzRWxlbWVudChlbGVtZW50KSA/IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKGVsZW1lbnQpIDoge30pLFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDoge30pXG4gICAgfVxuICB9XG5cbiAgX3R5cGVDaGVja0NvbmZpZyhjb25maWcsIGNvbmZpZ1R5cGVzID0gdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZSkge1xuICAgIGZvciAoY29uc3QgW3Byb3BlcnR5LCBleHBlY3RlZFR5cGVzXSBvZiBPYmplY3QuZW50cmllcyhjb25maWdUeXBlcykpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gY29uZmlnW3Byb3BlcnR5XVxuICAgICAgY29uc3QgdmFsdWVUeXBlID0gaXNFbGVtZW50KHZhbHVlKSA/ICdlbGVtZW50JyA6IHRvVHlwZSh2YWx1ZSlcblxuICAgICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIGAke3RoaXMuY29uc3RydWN0b3IuTkFNRS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwiJHtwcm9wZXJ0eX1cIiBwcm92aWRlZCB0eXBlIFwiJHt2YWx1ZVR5cGV9XCIgYnV0IGV4cGVjdGVkIHR5cGUgXCIke2V4cGVjdGVkVHlwZXN9XCIuYFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZ1xuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGJhc2UtY29tcG9uZW50LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YS5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBDb25maWcgZnJvbSAnLi91dGlsL2NvbmZpZy5qcydcbmltcG9ydCB7IGV4ZWN1dGVBZnRlclRyYW5zaXRpb24sIGdldEVsZW1lbnQgfSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgVkVSU0lPTiA9ICc1LjMuMidcblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQmFzZUNvbXBvbmVudCBleHRlbmRzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKClcblxuICAgIGVsZW1lbnQgPSBnZXRFbGVtZW50KGVsZW1lbnQpXG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG5cbiAgICBEYXRhLnNldCh0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGRpc3Bvc2UoKSB7XG4gICAgRGF0YS5yZW1vdmUodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSlcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRVZFTlRfS0VZKVxuXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eU5hbWUgb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcbiAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IG51bGxcbiAgICB9XG4gIH1cblxuICBfcXVldWVDYWxsYmFjayhjYWxsYmFjaywgZWxlbWVudCwgaXNBbmltYXRlZCA9IHRydWUpIHtcbiAgICBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uKGNhbGxiYWNrLCBlbGVtZW50LCBpc0FuaW1hdGVkKVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB0aGlzLl9tZXJnZUNvbmZpZ09iaihjb25maWcsIHRoaXMuX2VsZW1lbnQpXG4gICAgY29uZmlnID0gdGhpcy5fY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpXG4gICAgdGhpcy5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZylcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGdldEluc3RhbmNlKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRGF0YS5nZXQoZ2V0RWxlbWVudChlbGVtZW50KSwgdGhpcy5EQVRBX0tFWSlcbiAgfVxuXG4gIHN0YXRpYyBnZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIGNvbmZpZyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2UoZWxlbWVudCkgfHwgbmV3IHRoaXMoZWxlbWVudCwgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBudWxsKVxuICB9XG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgIHJldHVybiBgYnMuJHt0aGlzLk5BTUV9YFxuICB9XG5cbiAgc3RhdGljIGdldCBFVkVOVF9LRVkoKSB7XG4gICAgcmV0dXJuIGAuJHt0aGlzLkRBVEFfS0VZfWBcbiAgfVxuXG4gIHN0YXRpYyBldmVudE5hbWUobmFtZSkge1xuICAgIHJldHVybiBgJHtuYW1lfSR7dGhpcy5FVkVOVF9LRVl9YFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VDb21wb25lbnRcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBkb20vc2VsZWN0b3ItZW5naW5lLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgaXNEaXNhYmxlZCwgaXNWaXNpYmxlLCBwYXJzZVNlbGVjdG9yIH0gZnJvbSAnLi4vdXRpbC9pbmRleC5qcydcblxuY29uc3QgZ2V0U2VsZWN0b3IgPSBlbGVtZW50ID0+IHtcbiAgbGV0IHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0JylcblxuICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSAnIycpIHtcbiAgICBsZXQgaHJlZkF0dHJpYnV0ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJylcblxuICAgIC8vIFRoZSBvbmx5IHZhbGlkIGNvbnRlbnQgdGhhdCBjb3VsZCBkb3VibGUgYXMgYSBzZWxlY3RvciBhcmUgSURzIG9yIGNsYXNzZXMsXG4gICAgLy8gc28gZXZlcnl0aGluZyBzdGFydGluZyB3aXRoIGAjYCBvciBgLmAuIElmIGEgXCJyZWFsXCIgVVJMIGlzIHVzZWQgYXMgdGhlIHNlbGVjdG9yLFxuICAgIC8vIGBkb2N1bWVudC5xdWVyeVNlbGVjdG9yYCB3aWxsIHJpZ2h0ZnVsbHkgY29tcGxhaW4gaXQgaXMgaW52YWxpZC5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8zMjI3M1xuICAgIGlmICghaHJlZkF0dHJpYnV0ZSB8fCAoIWhyZWZBdHRyaWJ1dGUuaW5jbHVkZXMoJyMnKSAmJiAhaHJlZkF0dHJpYnV0ZS5zdGFydHNXaXRoKCcuJykpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8vIEp1c3QgaW4gY2FzZSBzb21lIENNUyBwdXRzIG91dCBhIGZ1bGwgVVJMIHdpdGggdGhlIGFuY2hvciBhcHBlbmRlZFxuICAgIGlmIChocmVmQXR0cmlidXRlLmluY2x1ZGVzKCcjJykgJiYgIWhyZWZBdHRyaWJ1dGUuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICBocmVmQXR0cmlidXRlID0gYCMke2hyZWZBdHRyaWJ1dGUuc3BsaXQoJyMnKVsxXX1gXG4gICAgfVxuXG4gICAgc2VsZWN0b3IgPSBocmVmQXR0cmlidXRlICYmIGhyZWZBdHRyaWJ1dGUgIT09ICcjJyA/IHBhcnNlU2VsZWN0b3IoaHJlZkF0dHJpYnV0ZS50cmltKCkpIDogbnVsbFxuICB9XG5cbiAgcmV0dXJuIHNlbGVjdG9yXG59XG5cbmNvbnN0IFNlbGVjdG9yRW5naW5lID0ge1xuICBmaW5kKHNlbGVjdG9yLCBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCguLi5FbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yQWxsLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpKVxuICB9LFxuXG4gIGZpbmRPbmUoc2VsZWN0b3IsIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3Rvci5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKVxuICB9LFxuXG4gIGNoaWxkcmVuKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCguLi5lbGVtZW50LmNoaWxkcmVuKS5maWx0ZXIoY2hpbGQgPT4gY2hpbGQubWF0Y2hlcyhzZWxlY3RvcikpXG4gIH0sXG5cbiAgcGFyZW50cyhlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGNvbnN0IHBhcmVudHMgPSBbXVxuICAgIGxldCBhbmNlc3RvciA9IGVsZW1lbnQucGFyZW50Tm9kZS5jbG9zZXN0KHNlbGVjdG9yKVxuXG4gICAgd2hpbGUgKGFuY2VzdG9yKSB7XG4gICAgICBwYXJlbnRzLnB1c2goYW5jZXN0b3IpXG4gICAgICBhbmNlc3RvciA9IGFuY2VzdG9yLnBhcmVudE5vZGUuY2xvc2VzdChzZWxlY3RvcilcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50c1xuICB9LFxuXG4gIHByZXYoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBsZXQgcHJldmlvdXMgPSBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmdcblxuICAgIHdoaWxlIChwcmV2aW91cykge1xuICAgICAgaWYgKHByZXZpb3VzLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBbcHJldmlvdXNdXG4gICAgICB9XG5cbiAgICAgIHByZXZpb3VzID0gcHJldmlvdXMucHJldmlvdXNFbGVtZW50U2libGluZ1xuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9LFxuICAvLyBUT0RPOiB0aGlzIGlzIG5vdyB1bnVzZWQ7IHJlbW92ZSBsYXRlciBhbG9uZyB3aXRoIHByZXYoKVxuICBuZXh0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgbGV0IG5leHQgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZ1xuXG4gICAgd2hpbGUgKG5leHQpIHtcbiAgICAgIGlmIChuZXh0Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBbbmV4dF1cbiAgICAgIH1cblxuICAgICAgbmV4dCA9IG5leHQubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH0sXG5cbiAgZm9jdXNhYmxlQ2hpbGRyZW4oZWxlbWVudCkge1xuICAgIGNvbnN0IGZvY3VzYWJsZXMgPSBbXG4gICAgICAnYScsXG4gICAgICAnYnV0dG9uJyxcbiAgICAgICdpbnB1dCcsXG4gICAgICAndGV4dGFyZWEnLFxuICAgICAgJ3NlbGVjdCcsXG4gICAgICAnZGV0YWlscycsXG4gICAgICAnW3RhYmluZGV4XScsXG4gICAgICAnW2NvbnRlbnRlZGl0YWJsZT1cInRydWVcIl0nXG4gICAgXS5tYXAoc2VsZWN0b3IgPT4gYCR7c2VsZWN0b3J9Om5vdChbdGFiaW5kZXhePVwiLVwiXSlgKS5qb2luKCcsJylcblxuICAgIHJldHVybiB0aGlzLmZpbmQoZm9jdXNhYmxlcywgZWxlbWVudCkuZmlsdGVyKGVsID0+ICFpc0Rpc2FibGVkKGVsKSAmJiBpc1Zpc2libGUoZWwpKVxuICB9LFxuXG4gIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudClcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfSxcblxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgICByZXR1cm4gc2VsZWN0b3IgPyBTZWxlY3RvckVuZ2luZS5maW5kT25lKHNlbGVjdG9yKSA6IG51bGxcbiAgfSxcblxuICBnZXRNdWx0aXBsZUVsZW1lbnRzRnJvbVNlbGVjdG9yKGVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgICByZXR1cm4gc2VsZWN0b3IgPyBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yKSA6IFtdXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0b3JFbmdpbmVcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL2NvbXBvbmVudC1mdW5jdGlvbnMuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4uL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgeyBpc0Rpc2FibGVkIH0gZnJvbSAnLi9pbmRleC5qcydcblxuY29uc3QgZW5hYmxlRGlzbWlzc1RyaWdnZXIgPSAoY29tcG9uZW50LCBtZXRob2QgPSAnaGlkZScpID0+IHtcbiAgY29uc3QgY2xpY2tFdmVudCA9IGBjbGljay5kaXNtaXNzJHtjb21wb25lbnQuRVZFTlRfS0VZfWBcbiAgY29uc3QgbmFtZSA9IGNvbXBvbmVudC5OQU1FXG5cbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBjbGlja0V2ZW50LCBgW2RhdGEtYnMtZGlzbWlzcz1cIiR7bmFtZX1cIl1gLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcykgfHwgdGhpcy5jbG9zZXN0KGAuJHtuYW1lfWApXG4gICAgY29uc3QgaW5zdGFuY2UgPSBjb21wb25lbnQuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpXG5cbiAgICAvLyBNZXRob2QgYXJndW1lbnQgaXMgbGVmdCwgZm9yIEFsZXJ0IGFuZCBvbmx5LCBhcyBpdCBkb2Vzbid0IGltcGxlbWVudCB0aGUgJ2hpZGUnIG1ldGhvZFxuICAgIGluc3RhbmNlW21ldGhvZF0oKVxuICB9KVxufVxuXG5leHBvcnQge1xuICBlbmFibGVEaXNtaXNzVHJpZ2dlclxufVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGFsZXJ0LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCB7IGVuYWJsZURpc21pc3NUcmlnZ2VyIH0gZnJvbSAnLi91dGlsL2NvbXBvbmVudC1mdW5jdGlvbnMuanMnXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4gfSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdhbGVydCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmFsZXJ0J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcblxuY29uc3QgRVZFTlRfQ0xPU0UgPSBgY2xvc2Uke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTE9TRUQgPSBgY2xvc2VkJHtFVkVOVF9LRVl9YFxuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQWxlcnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBjbG9zZSgpIHtcbiAgICBjb25zdCBjbG9zZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xPU0UpXG5cbiAgICBpZiAoY2xvc2VFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgY29uc3QgaXNBbmltYXRlZCA9IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSlcbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHRoaXMuX2Rlc3Ryb3lFbGVtZW50KCksIHRoaXMuX2VsZW1lbnQsIGlzQW5pbWF0ZWQpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9kZXN0cm95RWxlbWVudCgpIHtcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xPU0VEKVxuICAgIHRoaXMuZGlzcG9zZSgpXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBBbGVydC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKHRoaXMpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuZW5hYmxlRGlzbWlzc1RyaWdnZXIoQWxlcnQsICdjbG9zZScpXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKEFsZXJ0KVxuXG5leHBvcnQgZGVmYXVsdCBBbGVydFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGJ1dHRvbi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4gfSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdidXR0b24nXG5jb25zdCBEQVRBX0tFWSA9ICdicy5idXR0b24nXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiYnV0dG9uXCJdJ1xuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHRvZ2dsZSgpIHtcbiAgICAvLyBUb2dnbGUgY2xhc3MgYW5kIHN5bmMgdGhlIGBhcmlhLXByZXNzZWRgIGF0dHJpYnV0ZSB3aXRoIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGAudG9nZ2xlKClgIG1ldGhvZFxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gQnV0dG9uLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcylcblxuICAgICAgaWYgKGNvbmZpZyA9PT0gJ3RvZ2dsZScpIHtcbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZXZlbnQgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgY29uc3QgYnV0dG9uID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoU0VMRUNUT1JfREFUQV9UT0dHTEUpXG4gIGNvbnN0IGRhdGEgPSBCdXR0b24uZ2V0T3JDcmVhdGVJbnN0YW5jZShidXR0b24pXG5cbiAgZGF0YS50b2dnbGUoKVxufSlcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQnV0dG9uKVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL3N3aXBlLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBDb25maWcgZnJvbSAnLi9jb25maWcuanMnXG5pbXBvcnQgeyBleGVjdXRlIH0gZnJvbSAnLi9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ3N3aXBlJ1xuY29uc3QgRVZFTlRfS0VZID0gJy5icy5zd2lwZSdcbmNvbnN0IEVWRU5UX1RPVUNIU1RBUlQgPSBgdG91Y2hzdGFydCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNITU9WRSA9IGB0b3VjaG1vdmUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9UT1VDSEVORCA9IGB0b3VjaGVuZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1BPSU5URVJET1dOID0gYHBvaW50ZXJkb3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUE9JTlRFUlVQID0gYHBvaW50ZXJ1cCR7RVZFTlRfS0VZfWBcbmNvbnN0IFBPSU5URVJfVFlQRV9UT1VDSCA9ICd0b3VjaCdcbmNvbnN0IFBPSU5URVJfVFlQRV9QRU4gPSAncGVuJ1xuY29uc3QgQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UID0gJ3BvaW50ZXItZXZlbnQnXG5jb25zdCBTV0lQRV9USFJFU0hPTEQgPSA0MFxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBlbmRDYWxsYmFjazogbnVsbCxcbiAgbGVmdENhbGxiYWNrOiBudWxsLFxuICByaWdodENhbGxiYWNrOiBudWxsXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBlbmRDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKScsXG4gIGxlZnRDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKScsXG4gIHJpZ2h0Q2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFN3aXBlIGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG5cbiAgICBpZiAoIWVsZW1lbnQgfHwgIVN3aXBlLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fZGVsdGFYID0gMFxuICAgIHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzID0gQm9vbGVhbih3aW5kb3cuUG9pbnRlckV2ZW50KVxuICAgIHRoaXMuX2luaXRFdmVudHMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBkaXNwb3NlKCkge1xuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfc3RhcnQoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzKSB7XG4gICAgICB0aGlzLl9kZWx0YVggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFhcblxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V2ZW50SXNQb2ludGVyUGVuVG91Y2goZXZlbnQpKSB7XG4gICAgICB0aGlzLl9kZWx0YVggPSBldmVudC5jbGllbnRYXG4gICAgfVxuICB9XG5cbiAgX2VuZChldmVudCkge1xuICAgIGlmICh0aGlzLl9ldmVudElzUG9pbnRlclBlblRvdWNoKGV2ZW50KSkge1xuICAgICAgdGhpcy5fZGVsdGFYID0gZXZlbnQuY2xpZW50WCAtIHRoaXMuX2RlbHRhWFxuICAgIH1cblxuICAgIHRoaXMuX2hhbmRsZVN3aXBlKClcbiAgICBleGVjdXRlKHRoaXMuX2NvbmZpZy5lbmRDYWxsYmFjaylcbiAgfVxuXG4gIF9tb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5fZGVsdGFYID0gZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA+IDEgP1xuICAgICAgMCA6XG4gICAgICBldmVudC50b3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLl9kZWx0YVhcbiAgfVxuXG4gIF9oYW5kbGVTd2lwZSgpIHtcbiAgICBjb25zdCBhYnNEZWx0YVggPSBNYXRoLmFicyh0aGlzLl9kZWx0YVgpXG5cbiAgICBpZiAoYWJzRGVsdGFYIDw9IFNXSVBFX1RIUkVTSE9MRCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGlyZWN0aW9uID0gYWJzRGVsdGFYIC8gdGhpcy5fZGVsdGFYXG5cbiAgICB0aGlzLl9kZWx0YVggPSAwXG5cbiAgICBpZiAoIWRpcmVjdGlvbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXhlY3V0ZShkaXJlY3Rpb24gPiAwID8gdGhpcy5fY29uZmlnLnJpZ2h0Q2FsbGJhY2sgOiB0aGlzLl9jb25maWcubGVmdENhbGxiYWNrKVxuICB9XG5cbiAgX2luaXRFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfUE9JTlRFUkRPV04sIGV2ZW50ID0+IHRoaXMuX3N0YXJ0KGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9QT0lOVEVSVVAsIGV2ZW50ID0+IHRoaXMuX2VuZChldmVudCkpXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQpXG4gICAgfSBlbHNlIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSFNUQVJULCBldmVudCA9PiB0aGlzLl9zdGFydChldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hNT1ZFLCBldmVudCA9PiB0aGlzLl9tb3ZlKGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSEVORCwgZXZlbnQgPT4gdGhpcy5fZW5kKGV2ZW50KSlcbiAgICB9XG4gIH1cblxuICBfZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaChldmVudCkge1xuICAgIHJldHVybiB0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cyAmJiAoZXZlbnQucG9pbnRlclR5cGUgPT09IFBPSU5URVJfVFlQRV9QRU4gfHwgZXZlbnQucG9pbnRlclR5cGUgPT09IFBPSU5URVJfVFlQRV9UT1VDSClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgaXNTdXBwb3J0ZWQoKSB7XG4gICAgcmV0dXJuICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dpcGVcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBjYXJvdXNlbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3IuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXROZXh0QWN0aXZlRWxlbWVudCxcbiAgaXNSVEwsXG4gIGlzVmlzaWJsZSxcbiAgcmVmbG93LFxuICB0cmlnZ2VyVHJhbnNpdGlvbkVuZFxufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5pbXBvcnQgU3dpcGUgZnJvbSAnLi91dGlsL3N3aXBlLmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnY2Fyb3VzZWwnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5jYXJvdXNlbCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBBUlJPV19MRUZUX0tFWSA9ICdBcnJvd0xlZnQnXG5jb25zdCBBUlJPV19SSUdIVF9LRVkgPSAnQXJyb3dSaWdodCdcbmNvbnN0IFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgPSA1MDAgLy8gVGltZSBmb3IgbW91c2UgY29tcGF0IGV2ZW50cyB0byBmaXJlIGFmdGVyIHRvdWNoXG5cbmNvbnN0IE9SREVSX05FWFQgPSAnbmV4dCdcbmNvbnN0IE9SREVSX1BSRVYgPSAncHJldidcbmNvbnN0IERJUkVDVElPTl9MRUZUID0gJ2xlZnQnXG5jb25zdCBESVJFQ1RJT05fUklHSFQgPSAncmlnaHQnXG5cbmNvbnN0IEVWRU5UX1NMSURFID0gYHNsaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0xJRCA9IGBzbGlkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTiA9IGBrZXlkb3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VFTlRFUiA9IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VMRUFWRSA9IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRFJBR19TVEFSVCA9IGBkcmFnc3RhcnQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9DQVJPVVNFTCA9ICdjYXJvdXNlbCdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfU0xJREUgPSAnc2xpZGUnXG5jb25zdCBDTEFTU19OQU1FX0VORCA9ICdjYXJvdXNlbC1pdGVtLWVuZCdcbmNvbnN0IENMQVNTX05BTUVfU1RBUlQgPSAnY2Fyb3VzZWwtaXRlbS1zdGFydCdcbmNvbnN0IENMQVNTX05BTUVfTkVYVCA9ICdjYXJvdXNlbC1pdGVtLW5leHQnXG5jb25zdCBDTEFTU19OQU1FX1BSRVYgPSAnY2Fyb3VzZWwtaXRlbS1wcmV2J1xuXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkUgPSAnLmFjdGl2ZSdcbmNvbnN0IFNFTEVDVE9SX0lURU0gPSAnLmNhcm91c2VsLWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkVfSVRFTSA9IFNFTEVDVE9SX0FDVElWRSArIFNFTEVDVE9SX0lURU1cbmNvbnN0IFNFTEVDVE9SX0lURU1fSU1HID0gJy5jYXJvdXNlbC1pdGVtIGltZydcbmNvbnN0IFNFTEVDVE9SX0lORElDQVRPUlMgPSAnLmNhcm91c2VsLWluZGljYXRvcnMnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1NMSURFID0gJ1tkYXRhLWJzLXNsaWRlXSwgW2RhdGEtYnMtc2xpZGUtdG9dJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9SSURFID0gJ1tkYXRhLWJzLXJpZGU9XCJjYXJvdXNlbFwiXSdcblxuY29uc3QgS0VZX1RPX0RJUkVDVElPTiA9IHtcbiAgW0FSUk9XX0xFRlRfS0VZXTogRElSRUNUSU9OX1JJR0hULFxuICBbQVJST1dfUklHSFRfS0VZXTogRElSRUNUSU9OX0xFRlRcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgaW50ZXJ2YWw6IDUwMDAsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBwYXVzZTogJ2hvdmVyJyxcbiAgcmlkZTogZmFsc2UsXG4gIHRvdWNoOiB0cnVlLFxuICB3cmFwOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBpbnRlcnZhbDogJyhudW1iZXJ8Ym9vbGVhbiknLCAvLyBUT0RPOnY2IHJlbW92ZSBib29sZWFuIHN1cHBvcnRcbiAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgcGF1c2U6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgcmlkZTogJyhib29sZWFufHN0cmluZyknLFxuICB0b3VjaDogJ2Jvb2xlYW4nLFxuICB3cmFwOiAnYm9vbGVhbidcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQ2Fyb3VzZWwgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gbnVsbFxuICAgIHRoaXMuX3N3aXBlSGVscGVyID0gbnVsbFxuXG4gICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0lORElDQVRPUlMsIHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5yaWRlID09PSBDTEFTU19OQU1FX0NBUk9VU0VMKSB7XG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICB9XG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIG5leHQoKSB7XG4gICAgdGhpcy5fc2xpZGUoT1JERVJfTkVYVClcbiAgfVxuXG4gIG5leHRXaGVuVmlzaWJsZSgpIHtcbiAgICAvLyBGSVhNRSBUT0RPIHVzZSBgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlYFxuICAgIC8vIERvbid0IGNhbGwgbmV4dCB3aGVuIHRoZSBwYWdlIGlzbid0IHZpc2libGVcbiAgICAvLyBvciB0aGUgY2Fyb3VzZWwgb3IgaXRzIHBhcmVudCBpc24ndCB2aXNpYmxlXG4gICAgaWYgKCFkb2N1bWVudC5oaWRkZW4gJiYgaXNWaXNpYmxlKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgIH1cbiAgfVxuXG4gIHByZXYoKSB7XG4gICAgdGhpcy5fc2xpZGUoT1JERVJfUFJFVilcbiAgfVxuXG4gIHBhdXNlKCkge1xuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5fY2xlYXJJbnRlcnZhbCgpXG4gIH1cblxuICBjeWNsZSgpIHtcbiAgICB0aGlzLl9jbGVhckludGVydmFsKClcbiAgICB0aGlzLl91cGRhdGVJbnRlcnZhbCgpXG5cbiAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHRoaXMubmV4dFdoZW5WaXNpYmxlKCksIHRoaXMuX2NvbmZpZy5pbnRlcnZhbClcbiAgfVxuXG4gIF9tYXliZUVuYWJsZUN5Y2xlKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnLnJpZGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJRCwgKCkgPT4gdGhpcy5jeWNsZSgpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jeWNsZSgpXG4gIH1cblxuICB0byhpbmRleCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5fZ2V0SXRlbXMoKVxuICAgIGlmIChpbmRleCA+IGl0ZW1zLmxlbmd0aCAtIDEgfHwgaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSUQsICgpID0+IHRoaXMudG8oaW5kZXgpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgodGhpcy5fZ2V0QWN0aXZlKCkpXG4gICAgaWYgKGFjdGl2ZUluZGV4ID09PSBpbmRleCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgb3JkZXIgPSBpbmRleCA+IGFjdGl2ZUluZGV4ID8gT1JERVJfTkVYVCA6IE9SREVSX1BSRVZcblxuICAgIHRoaXMuX3NsaWRlKG9yZGVyLCBpdGVtc1tpbmRleF0pXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGlmICh0aGlzLl9zd2lwZUhlbHBlcikge1xuICAgICAgdGhpcy5fc3dpcGVIZWxwZXIuZGlzcG9zZSgpXG4gICAgfVxuXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIGNvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgPSBjb25maWcuaW50ZXJ2YWxcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV04sIGV2ZW50ID0+IHRoaXMuX2tleWRvd24oZXZlbnQpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRUVOVEVSLCAoKSA9PiB0aGlzLnBhdXNlKCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VMRUFWRSwgKCkgPT4gdGhpcy5fbWF5YmVFbmFibGVDeWNsZSgpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG91Y2ggJiYgU3dpcGUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgdGhpcy5fYWRkVG91Y2hFdmVudExpc3RlbmVycygpXG4gICAgfVxuICB9XG5cbiAgX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgZm9yIChjb25zdCBpbWcgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JVEVNX0lNRywgdGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbihpbWcsIEVWRU5UX0RSQUdfU1RBUlQsIGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpXG4gICAgfVxuXG4gICAgY29uc3QgZW5kQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlICE9PSAnaG92ZXInKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCdzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2UsIG1vdXNlZW50ZXIvbGVhdmUgYXJlIGZpcmVkIGFzXG4gICAgICAvLyBwYXJ0IG9mIHRoZSBtb3VzZSBjb21wYXRpYmlsaXR5IGV2ZW50cyBvbiBmaXJzdCB0YXAgLSB0aGUgY2Fyb3VzZWxcbiAgICAgIC8vIHdvdWxkIHN0b3AgY3ljbGluZyB1bnRpbCB1c2VyIHRhcHBlZCBvdXQgb2YgaXQ7XG4gICAgICAvLyBoZXJlLCB3ZSBsaXN0ZW4gZm9yIHRvdWNoZW5kLCBleHBsaWNpdGx5IHBhdXNlIHRoZSBjYXJvdXNlbFxuICAgICAgLy8gKGFzIGlmIGl0J3MgdGhlIHNlY29uZCB0aW1lIHdlIHRhcCBvbiBpdCwgbW91c2VlbnRlciBjb21wYXQgZXZlbnRcbiAgICAgIC8vIGlzIE5PVCBmaXJlZCkgYW5kIGFmdGVyIGEgdGltZW91dCAodG8gYWxsb3cgZm9yIG1vdXNlIGNvbXBhdGliaWxpdHlcbiAgICAgIC8vIGV2ZW50cyB0byBmaXJlKSB3ZSBleHBsaWNpdGx5IHJlc3RhcnQgY3ljbGluZ1xuXG4gICAgICB0aGlzLnBhdXNlKClcbiAgICAgIGlmICh0aGlzLnRvdWNoVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50b3VjaFRpbWVvdXQpXG4gICAgICB9XG5cbiAgICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLl9tYXliZUVuYWJsZUN5Y2xlKCksIFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgKyB0aGlzLl9jb25maWcuaW50ZXJ2YWwpXG4gICAgfVxuXG4gICAgY29uc3Qgc3dpcGVDb25maWcgPSB7XG4gICAgICBsZWZ0Q2FsbGJhY2s6ICgpID0+IHRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoRElSRUNUSU9OX0xFRlQpKSxcbiAgICAgIHJpZ2h0Q2FsbGJhY2s6ICgpID0+IHRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoRElSRUNUSU9OX1JJR0hUKSksXG4gICAgICBlbmRDYWxsYmFjazogZW5kQ2FsbEJhY2tcbiAgICB9XG5cbiAgICB0aGlzLl9zd2lwZUhlbHBlciA9IG5ldyBTd2lwZSh0aGlzLl9lbGVtZW50LCBzd2lwZUNvbmZpZylcbiAgfVxuXG4gIF9rZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBLRVlfVE9fRElSRUNUSU9OW2V2ZW50LmtleV1cbiAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLl9zbGlkZSh0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKGRpcmVjdGlvbikpXG4gICAgfVxuICB9XG5cbiAgX2dldEl0ZW1JbmRleChlbGVtZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldEl0ZW1zKCkuaW5kZXhPZihlbGVtZW50KVxuICB9XG5cbiAgX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQoaW5kZXgpIHtcbiAgICBpZiAoIXRoaXMuX2luZGljYXRvcnNFbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVJbmRpY2F0b3IgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRSwgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpXG5cbiAgICBhY3RpdmVJbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICBhY3RpdmVJbmRpY2F0b3IucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKVxuXG4gICAgY29uc3QgbmV3QWN0aXZlSW5kaWNhdG9yID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShgW2RhdGEtYnMtc2xpZGUtdG89XCIke2luZGV4fVwiXWAsIHRoaXMuX2luZGljYXRvcnNFbGVtZW50KVxuXG4gICAgaWYgKG5ld0FjdGl2ZUluZGljYXRvcikge1xuICAgICAgbmV3QWN0aXZlSW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICBuZXdBY3RpdmVJbmRpY2F0b3Iuc2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnLCAndHJ1ZScpXG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZUludGVydmFsKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9hY3RpdmVFbGVtZW50IHx8IHRoaXMuX2dldEFjdGl2ZSgpXG5cbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRJbnRlcnZhbCA9IE51bWJlci5wYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1pbnRlcnZhbCcpLCAxMClcblxuICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCA9IGVsZW1lbnRJbnRlcnZhbCB8fCB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsXG4gIH1cblxuICBfc2xpZGUob3JkZXIsIGVsZW1lbnQgPSBudWxsKSB7XG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IHRoaXMuX2dldEFjdGl2ZSgpXG4gICAgY29uc3QgaXNOZXh0ID0gb3JkZXIgPT09IE9SREVSX05FWFRcbiAgICBjb25zdCBuZXh0RWxlbWVudCA9IGVsZW1lbnQgfHwgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQodGhpcy5fZ2V0SXRlbXMoKSwgYWN0aXZlRWxlbWVudCwgaXNOZXh0LCB0aGlzLl9jb25maWcud3JhcClcblxuICAgIGlmIChuZXh0RWxlbWVudCA9PT0gYWN0aXZlRWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgbmV4dEVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChuZXh0RWxlbWVudClcblxuICAgIGNvbnN0IHRyaWdnZXJFdmVudCA9IGV2ZW50TmFtZSA9PiB7XG4gICAgICByZXR1cm4gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgZXZlbnROYW1lLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IG5leHRFbGVtZW50LFxuICAgICAgICBkaXJlY3Rpb246IHRoaXMuX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpLFxuICAgICAgICBmcm9tOiB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudCksXG4gICAgICAgIHRvOiBuZXh0RWxlbWVudEluZGV4XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHNsaWRlRXZlbnQgPSB0cmlnZ2VyRXZlbnQoRVZFTlRfU0xJREUpXG5cbiAgICBpZiAoc2xpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWFjdGl2ZUVsZW1lbnQgfHwgIW5leHRFbGVtZW50KSB7XG4gICAgICAvLyBTb21lIHdlaXJkbmVzcyBpcyBoYXBwZW5pbmcsIHNvIHdlIGJhaWxcbiAgICAgIC8vIFRPRE86IGNoYW5nZSB0ZXN0cyB0aGF0IHVzZSBlbXB0eSBkaXZzIHRvIGF2b2lkIHRoaXMgY2hlY2tcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzQ3ljbGluZyA9IEJvb2xlYW4odGhpcy5faW50ZXJ2YWwpXG4gICAgdGhpcy5wYXVzZSgpXG5cbiAgICB0aGlzLl9pc1NsaWRpbmcgPSB0cnVlXG5cbiAgICB0aGlzLl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KG5leHRFbGVtZW50SW5kZXgpXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG5leHRFbGVtZW50XG5cbiAgICBjb25zdCBkaXJlY3Rpb25hbENsYXNzTmFtZSA9IGlzTmV4dCA/IENMQVNTX05BTUVfU1RBUlQgOiBDTEFTU19OQU1FX0VORFxuICAgIGNvbnN0IG9yZGVyQ2xhc3NOYW1lID0gaXNOZXh0ID8gQ0xBU1NfTkFNRV9ORVhUIDogQ0xBU1NfTkFNRV9QUkVWXG5cbiAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKG9yZGVyQ2xhc3NOYW1lKVxuXG4gICAgcmVmbG93KG5leHRFbGVtZW50KVxuXG4gICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG5cbiAgICBjb25zdCBjb21wbGV0ZUNhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShkaXJlY3Rpb25hbENsYXNzTmFtZSwgb3JkZXJDbGFzc05hbWUpXG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUsIG9yZGVyQ2xhc3NOYW1lLCBkaXJlY3Rpb25hbENsYXNzTmFtZSlcblxuICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcblxuICAgICAgdHJpZ2dlckV2ZW50KEVWRU5UX1NMSUQpXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxCYWNrLCBhY3RpdmVFbGVtZW50LCB0aGlzLl9pc0FuaW1hdGVkKCkpXG5cbiAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICB9XG4gIH1cblxuICBfaXNBbmltYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TTElERSlcbiAgfVxuXG4gIF9nZXRBY3RpdmUoKSB7XG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpXG4gIH1cblxuICBfZ2V0SXRlbXMoKSB7XG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSVRFTSwgdGhpcy5fZWxlbWVudClcbiAgfVxuXG4gIF9jbGVhckludGVydmFsKCkge1xuICAgIGlmICh0aGlzLl9pbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbClcbiAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIF9kaXJlY3Rpb25Ub09yZGVyKGRpcmVjdGlvbikge1xuICAgIGlmIChpc1JUTCgpKSB7XG4gICAgICByZXR1cm4gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTEVGVCA/IE9SREVSX1BSRVYgOiBPUkRFUl9ORVhUXG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX0xFRlQgPyBPUkRFUl9ORVhUIDogT1JERVJfUFJFVlxuICB9XG5cbiAgX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpIHtcbiAgICBpZiAoaXNSVEwoKSkge1xuICAgICAgcmV0dXJuIG9yZGVyID09PSBPUkRFUl9QUkVWID8gRElSRUNUSU9OX0xFRlQgOiBESVJFQ1RJT05fUklHSFRcbiAgICB9XG5cbiAgICByZXR1cm4gb3JkZXIgPT09IE9SREVSX1BSRVYgPyBESVJFQ1RJT05fUklHSFQgOiBESVJFQ1RJT05fTEVGVFxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gQ2Fyb3VzZWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnbnVtYmVyJykge1xuICAgICAgICBkYXRhLnRvKGNvbmZpZylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfU0xJREUsIGZ1bmN0aW9uIChldmVudCkge1xuICBjb25zdCB0YXJnZXQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpXG5cbiAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9DQVJPVVNFTCkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICBjb25zdCBjYXJvdXNlbCA9IENhcm91c2VsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KVxuICBjb25zdCBzbGlkZUluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtc2xpZGUtdG8nKVxuXG4gIGlmIChzbGlkZUluZGV4KSB7XG4gICAgY2Fyb3VzZWwudG8oc2xpZGVJbmRleClcbiAgICBjYXJvdXNlbC5fbWF5YmVFbmFibGVDeWNsZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZSh0aGlzLCAnc2xpZGUnKSA9PT0gJ25leHQnKSB7XG4gICAgY2Fyb3VzZWwubmV4dCgpXG4gICAgY2Fyb3VzZWwuX21heWJlRW5hYmxlQ3ljbGUoKVxuICAgIHJldHVyblxuICB9XG5cbiAgY2Fyb3VzZWwucHJldigpXG4gIGNhcm91c2VsLl9tYXliZUVuYWJsZUN5Y2xlKClcbn0pXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgY29uc3QgY2Fyb3VzZWxzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1JJREUpXG5cbiAgZm9yIChjb25zdCBjYXJvdXNlbCBvZiBjYXJvdXNlbHMpIHtcbiAgICBDYXJvdXNlbC5nZXRPckNyZWF0ZUluc3RhbmNlKGNhcm91c2VsKVxuICB9XG59KVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihDYXJvdXNlbClcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBjb2xsYXBzZS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXRFbGVtZW50LFxuICByZWZsb3dcbn0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnY29sbGFwc2UnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5jb2xsYXBzZSdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNFID0gJ2NvbGxhcHNlJ1xuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTSU5HID0gJ2NvbGxhcHNpbmcnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNFRCA9ICdjb2xsYXBzZWQnXG5jb25zdCBDTEFTU19OQU1FX0RFRVBFUl9DSElMRFJFTiA9IGA6c2NvcGUgLiR7Q0xBU1NfTkFNRV9DT0xMQVBTRX0gLiR7Q0xBU1NfTkFNRV9DT0xMQVBTRX1gXG5jb25zdCBDTEFTU19OQU1FX0hPUklaT05UQUwgPSAnY29sbGFwc2UtaG9yaXpvbnRhbCdcblxuY29uc3QgV0lEVEggPSAnd2lkdGgnXG5jb25zdCBIRUlHSFQgPSAnaGVpZ2h0J1xuXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkVTID0gJy5jb2xsYXBzZS5zaG93LCAuY29sbGFwc2UuY29sbGFwc2luZydcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJdJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBwYXJlbnQ6IG51bGwsXG4gIHRvZ2dsZTogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgcGFyZW50OiAnKG51bGx8ZWxlbWVudCknLFxuICB0b2dnbGU6ICdib29sZWFuJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBDb2xsYXBzZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb25maWcpXG5cbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgIHRoaXMuX3RyaWdnZXJBcnJheSA9IFtdXG5cbiAgICBjb25zdCB0b2dnbGVMaXN0ID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcblxuICAgIGZvciAoY29uc3QgZWxlbSBvZiB0b2dnbGVMaXN0KSB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IFNlbGVjdG9yRW5naW5lLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbSlcbiAgICAgIGNvbnN0IGZpbHRlckVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yKVxuICAgICAgICAuZmlsdGVyKGZvdW5kRWxlbWVudCA9PiBmb3VuZEVsZW1lbnQgPT09IHRoaXMuX2VsZW1lbnQpXG5cbiAgICAgIGlmIChzZWxlY3RvciAhPT0gbnVsbCAmJiBmaWx0ZXJFbGVtZW50Lmxlbmd0aCkge1xuICAgICAgICB0aGlzLl90cmlnZ2VyQXJyYXkucHVzaChlbGVtKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2luaXRpYWxpemVDaGlsZHJlbigpXG5cbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLl90cmlnZ2VyQXJyYXksIHRoaXMuX2lzU2hvd24oKSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnRvZ2dsZSkge1xuICAgICAgdGhpcy50b2dnbGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdygpXG4gICAgfVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8IHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGFjdGl2ZUNoaWxkcmVuID0gW11cblxuICAgIC8vIGZpbmQgYWN0aXZlIGNoaWxkcmVuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgIGFjdGl2ZUNoaWxkcmVuID0gdGhpcy5fZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKFNFTEVDVE9SX0FDVElWRVMpXG4gICAgICAgIC5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50ICE9PSB0aGlzLl9lbGVtZW50KVxuICAgICAgICAubWFwKGVsZW1lbnQgPT4gQ29sbGFwc2UuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50LCB7IHRvZ2dsZTogZmFsc2UgfSkpXG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZUNoaWxkcmVuLmxlbmd0aCAmJiBhY3RpdmVDaGlsZHJlblswXS5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVylcbiAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGFjdGl2ZUluc3RhbmNlIG9mIGFjdGl2ZUNoaWxkcmVuKSB7XG4gICAgICBhY3RpdmVJbnN0YW5jZS5oaWRlKClcbiAgICB9XG5cbiAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0lORylcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IDBcblxuICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLl90cmlnZ2VyQXJyYXksIHRydWUpXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UsIENMQVNTX05BTUVfU0hPVylcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcblxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04pXG4gICAgfVxuXG4gICAgY29uc3QgY2FwaXRhbGl6ZWREaW1lbnNpb24gPSBkaW1lbnNpb25bMF0udG9VcHBlckNhc2UoKSArIGRpbWVuc2lvbi5zbGljZSgxKVxuICAgIGNvbnN0IHNjcm9sbFNpemUgPSBgc2Nyb2xsJHtjYXBpdGFsaXplZERpbWVuc2lvbn1gXG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnRbc2Nyb2xsU2l6ZV19cHhgXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgIXRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpXG4gICAgaWYgKHN0YXJ0RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKClcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbZGltZW5zaW9uXX1weGBcblxuICAgIHJlZmxvdyh0aGlzLl9lbGVtZW50KVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0lORylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRSwgQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgZm9yIChjb25zdCB0cmlnZ2VyIG9mIHRoaXMuX3RyaWdnZXJBcnJheSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodHJpZ2dlcilcblxuICAgICAgaWYgKGVsZW1lbnQgJiYgIXRoaXMuX2lzU2hvd24oZWxlbWVudCkpIHtcbiAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFt0cmlnZ2VyXSwgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0lORylcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNFKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnXG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0cnVlKVxuICB9XG5cbiAgX2lzU2hvd24oZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICBjb25maWcudG9nZ2xlID0gQm9vbGVhbihjb25maWcudG9nZ2xlKSAvLyBDb2VyY2Ugc3RyaW5nIHZhbHVlc1xuICAgIGNvbmZpZy5wYXJlbnQgPSBnZXRFbGVtZW50KGNvbmZpZy5wYXJlbnQpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldERpbWVuc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9IT1JJWk9OVEFMKSA/IFdJRFRIIDogSEVJR0hUXG4gIH1cblxuICBfaW5pdGlhbGl6ZUNoaWxkcmVuKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLl9nZXRGaXJzdExldmVsQ2hpbGRyZW4oU0VMRUNUT1JfREFUQV9UT0dHTEUpXG5cbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgY2hpbGRyZW4pIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KVxuXG4gICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFtlbGVtZW50XSwgdGhpcy5faXNTaG93bihzZWxlY3RlZCkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2dldEZpcnN0TGV2ZWxDaGlsZHJlbihzZWxlY3Rvcikge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gU2VsZWN0b3JFbmdpbmUuZmluZChDTEFTU19OQU1FX0RFRVBFUl9DSElMRFJFTiwgdGhpcy5fY29uZmlnLnBhcmVudClcbiAgICAvLyByZW1vdmUgY2hpbGRyZW4gaWYgZ3JlYXRlciBkZXB0aFxuICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yLCB0aGlzLl9jb25maWcucGFyZW50KS5maWx0ZXIoZWxlbWVudCA9PiAhY2hpbGRyZW4uaW5jbHVkZXMoZWxlbWVudCkpXG4gIH1cblxuICBfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRyaWdnZXJBcnJheSwgaXNPcGVuKSB7XG4gICAgaWYgKCF0cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgdHJpZ2dlckFycmF5KSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoQ0xBU1NfTkFNRV9DT0xMQVBTRUQsICFpc09wZW4pXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGlzT3BlbilcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICBjb25zdCBfY29uZmlnID0ge31cbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycgJiYgL3Nob3d8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICBfY29uZmlnLnRvZ2dsZSA9IGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gQ29sbGFwc2UuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBfY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIC8vIHByZXZlbnREZWZhdWx0IG9ubHkgZm9yIDxhPiBlbGVtZW50cyAod2hpY2ggY2hhbmdlIHRoZSBVUkwpIG5vdCBpbnNpZGUgdGhlIGNvbGxhcHNpYmxlIGVsZW1lbnRcbiAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnQScgfHwgKGV2ZW50LmRlbGVnYXRlVGFyZ2V0ICYmIGV2ZW50LmRlbGVnYXRlVGFyZ2V0LnRhZ05hbWUgPT09ICdBJykpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgU2VsZWN0b3JFbmdpbmUuZ2V0TXVsdGlwbGVFbGVtZW50c0Zyb21TZWxlY3Rvcih0aGlzKSkge1xuICAgIENvbGxhcHNlLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgeyB0b2dnbGU6IGZhbHNlIH0pLnRvZ2dsZSgpXG4gIH1cbn0pXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKENvbGxhcHNlKVxuXG5leHBvcnQgZGVmYXVsdCBDb2xsYXBzZVxuIiwiZXhwb3J0IHZhciB0b3AgPSAndG9wJztcbmV4cG9ydCB2YXIgYm90dG9tID0gJ2JvdHRvbSc7XG5leHBvcnQgdmFyIHJpZ2h0ID0gJ3JpZ2h0JztcbmV4cG9ydCB2YXIgbGVmdCA9ICdsZWZ0JztcbmV4cG9ydCB2YXIgYXV0byA9ICdhdXRvJztcbmV4cG9ydCB2YXIgYmFzZVBsYWNlbWVudHMgPSBbdG9wLCBib3R0b20sIHJpZ2h0LCBsZWZ0XTtcbmV4cG9ydCB2YXIgc3RhcnQgPSAnc3RhcnQnO1xuZXhwb3J0IHZhciBlbmQgPSAnZW5kJztcbmV4cG9ydCB2YXIgY2xpcHBpbmdQYXJlbnRzID0gJ2NsaXBwaW5nUGFyZW50cyc7XG5leHBvcnQgdmFyIHZpZXdwb3J0ID0gJ3ZpZXdwb3J0JztcbmV4cG9ydCB2YXIgcG9wcGVyID0gJ3BvcHBlcic7XG5leHBvcnQgdmFyIHJlZmVyZW5jZSA9ICdyZWZlcmVuY2UnO1xuZXhwb3J0IHZhciB2YXJpYXRpb25QbGFjZW1lbnRzID0gLyojX19QVVJFX18qL2Jhc2VQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIGFjYy5jb25jYXQoW3BsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG59LCBbXSk7XG5leHBvcnQgdmFyIHBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovW10uY29uY2F0KGJhc2VQbGFjZW1lbnRzLCBbYXV0b10pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIGFjYy5jb25jYXQoW3BsYWNlbWVudCwgcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTsgLy8gbW9kaWZpZXJzIHRoYXQgbmVlZCB0byByZWFkIHRoZSBET01cblxuZXhwb3J0IHZhciBiZWZvcmVSZWFkID0gJ2JlZm9yZVJlYWQnO1xuZXhwb3J0IHZhciByZWFkID0gJ3JlYWQnO1xuZXhwb3J0IHZhciBhZnRlclJlYWQgPSAnYWZ0ZXJSZWFkJzsgLy8gcHVyZS1sb2dpYyBtb2RpZmllcnNcblxuZXhwb3J0IHZhciBiZWZvcmVNYWluID0gJ2JlZm9yZU1haW4nO1xuZXhwb3J0IHZhciBtYWluID0gJ21haW4nO1xuZXhwb3J0IHZhciBhZnRlck1haW4gPSAnYWZ0ZXJNYWluJzsgLy8gbW9kaWZpZXIgd2l0aCB0aGUgcHVycG9zZSB0byB3cml0ZSB0byB0aGUgRE9NIChvciB3cml0ZSBpbnRvIGEgZnJhbWV3b3JrIHN0YXRlKVxuXG5leHBvcnQgdmFyIGJlZm9yZVdyaXRlID0gJ2JlZm9yZVdyaXRlJztcbmV4cG9ydCB2YXIgd3JpdGUgPSAnd3JpdGUnO1xuZXhwb3J0IHZhciBhZnRlcldyaXRlID0gJ2FmdGVyV3JpdGUnO1xuZXhwb3J0IHZhciBtb2RpZmllclBoYXNlcyA9IFtiZWZvcmVSZWFkLCByZWFkLCBhZnRlclJlYWQsIGJlZm9yZU1haW4sIG1haW4sIGFmdGVyTWFpbiwgYmVmb3JlV3JpdGUsIHdyaXRlLCBhZnRlcldyaXRlXTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXROb2RlTmFtZShlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50ID8gKGVsZW1lbnQubm9kZU5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gIGlmIChub2RlID09IG51bGwpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgaWYgKG5vZGUudG9TdHJpbmcoKSAhPT0gJ1tvYmplY3QgV2luZG93XScpIHtcbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICByZXR1cm4gb3duZXJEb2N1bWVudCA/IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93IDogd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcblxuZnVuY3Rpb24gaXNFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc0hUTUxFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuSFRNTEVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzU2hhZG93Um9vdChub2RlKSB7XG4gIC8vIElFIDExIGhhcyBubyBTaGFkb3dSb290XG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5TaGFkb3dSb290O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q7XG59XG5cbmV4cG9ydCB7IGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCwgaXNTaGFkb3dSb290IH07IiwiaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjsgLy8gVGhpcyBtb2RpZmllciB0YWtlcyB0aGUgc3R5bGVzIHByZXBhcmVkIGJ5IHRoZSBgY29tcHV0ZVN0eWxlc2AgbW9kaWZpZXJcbi8vIGFuZCBhcHBsaWVzIHRoZW0gdG8gdGhlIEhUTUxFbGVtZW50cyBzdWNoIGFzIHBvcHBlciBhbmQgYXJyb3dcblxuZnVuY3Rpb24gYXBwbHlTdHlsZXMoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBzdHlsZSA9IHN0YXRlLnN0eWxlc1tuYW1lXSB8fCB7fTtcbiAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBGbG93IGRvZXNuJ3Qgc3VwcG9ydCB0byBleHRlbmQgdGhpcyBwcm9wZXJ0eSwgYnV0IGl0J3MgdGhlIG1vc3RcbiAgICAvLyBlZmZlY3RpdmUgd2F5IHRvIGFwcGx5IHN0eWxlcyB0byBhbiBIVE1MRWxlbWVudFxuICAgIC8vICRGbG93Rml4TWVbY2Fubm90LXdyaXRlXVxuXG5cbiAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xuXG4gICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUgPT09IHRydWUgPyAnJyA6IHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZTtcbiAgdmFyIGluaXRpYWxTdHlsZXMgPSB7XG4gICAgcG9wcGVyOiB7XG4gICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgIGxlZnQ6ICcwJyxcbiAgICAgIHRvcDogJzAnLFxuICAgICAgbWFyZ2luOiAnMCdcbiAgICB9LFxuICAgIGFycm93OiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgIH0sXG4gICAgcmVmZXJlbmNlOiB7fVxuICB9O1xuICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLnBvcHBlci5zdHlsZSwgaW5pdGlhbFN0eWxlcy5wb3BwZXIpO1xuICBzdGF0ZS5zdHlsZXMgPSBpbml0aWFsU3R5bGVzO1xuXG4gIGlmIChzdGF0ZS5lbGVtZW50cy5hcnJvdykge1xuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMuYXJyb3cuc3R5bGUsIGluaXRpYWxTdHlsZXMuYXJyb3cpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTtcbiAgICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICAgIHZhciBzdHlsZVByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhzdGF0ZS5zdHlsZXMuaGFzT3duUHJvcGVydHkobmFtZSkgPyBzdGF0ZS5zdHlsZXNbbmFtZV0gOiBpbml0aWFsU3R5bGVzW25hbWVdKTsgLy8gU2V0IGFsbCB2YWx1ZXMgdG8gYW4gZW1wdHkgc3RyaW5nIHRvIHVuc2V0IHRoZW1cblxuICAgICAgdmFyIHN0eWxlID0gc3R5bGVQcm9wZXJ0aWVzLnJlZHVjZShmdW5jdGlvbiAoc3R5bGUsIHByb3BlcnR5KSB7XG4gICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9ICcnO1xuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICB9LCB7fSk7IC8vIGFycm93IGlzIG9wdGlvbmFsICsgdmlydHVhbCBlbGVtZW50c1xuXG4gICAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XG4gICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3dyaXRlJyxcbiAgZm46IGFwcGx5U3R5bGVzLFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgcmVxdWlyZXM6IFsnY29tcHV0ZVN0eWxlcyddXG59OyIsImltcG9ydCB7IGF1dG8gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbn0iLCJleHBvcnQgdmFyIG1heCA9IE1hdGgubWF4O1xuZXhwb3J0IHZhciBtaW4gPSBNYXRoLm1pbjtcbmV4cG9ydCB2YXIgcm91bmQgPSBNYXRoLnJvdW5kOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVBU3RyaW5nKCkge1xuICB2YXIgdWFEYXRhID0gbmF2aWdhdG9yLnVzZXJBZ2VudERhdGE7XG5cbiAgaWYgKHVhRGF0YSAhPSBudWxsICYmIHVhRGF0YS5icmFuZHMgJiYgQXJyYXkuaXNBcnJheSh1YURhdGEuYnJhbmRzKSkge1xuICAgIHJldHVybiB1YURhdGEuYnJhbmRzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0uYnJhbmQgKyBcIi9cIiArIGl0ZW0udmVyc2lvbjtcbiAgICB9KS5qb2luKCcgJyk7XG4gIH1cblxuICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbn0iLCJpbXBvcnQgZ2V0VUFTdHJpbmcgZnJvbSBcIi4uL3V0aWxzL3VzZXJBZ2VudC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNMYXlvdXRWaWV3cG9ydCgpIHtcbiAgcmV0dXJuICEvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KGdldFVBU3RyaW5nKCkpO1xufSIsImltcG9ydCB7IGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCB7IHJvdW5kIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgaXNMYXlvdXRWaWV3cG9ydCBmcm9tIFwiLi9pc0xheW91dFZpZXdwb3J0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgaW5jbHVkZVNjYWxlLCBpc0ZpeGVkU3RyYXRlZ3kpIHtcbiAgaWYgKGluY2x1ZGVTY2FsZSA9PT0gdm9pZCAwKSB7XG4gICAgaW5jbHVkZVNjYWxlID0gZmFsc2U7XG4gIH1cblxuICBpZiAoaXNGaXhlZFN0cmF0ZWd5ID09PSB2b2lkIDApIHtcbiAgICBpc0ZpeGVkU3RyYXRlZ3kgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBjbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIHNjYWxlWCA9IDE7XG4gIHZhciBzY2FsZVkgPSAxO1xuXG4gIGlmIChpbmNsdWRlU2NhbGUgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuICAgIHNjYWxlWCA9IGVsZW1lbnQub2Zmc2V0V2lkdGggPiAwID8gcm91bmQoY2xpZW50UmVjdC53aWR0aCkgLyBlbGVtZW50Lm9mZnNldFdpZHRoIHx8IDEgOiAxO1xuICAgIHNjYWxlWSA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0ID4gMCA/IHJvdW5kKGNsaWVudFJlY3QuaGVpZ2h0KSAvIGVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8IDEgOiAxO1xuICB9XG5cbiAgdmFyIF9yZWYgPSBpc0VsZW1lbnQoZWxlbWVudCkgPyBnZXRXaW5kb3coZWxlbWVudCkgOiB3aW5kb3csXG4gICAgICB2aXN1YWxWaWV3cG9ydCA9IF9yZWYudmlzdWFsVmlld3BvcnQ7XG5cbiAgdmFyIGFkZFZpc3VhbE9mZnNldHMgPSAhaXNMYXlvdXRWaWV3cG9ydCgpICYmIGlzRml4ZWRTdHJhdGVneTtcbiAgdmFyIHggPSAoY2xpZW50UmVjdC5sZWZ0ICsgKGFkZFZpc3VhbE9mZnNldHMgJiYgdmlzdWFsVmlld3BvcnQgPyB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0IDogMCkpIC8gc2NhbGVYO1xuICB2YXIgeSA9IChjbGllbnRSZWN0LnRvcCArIChhZGRWaXN1YWxPZmZzZXRzICYmIHZpc3VhbFZpZXdwb3J0ID8gdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wIDogMCkpIC8gc2NhbGVZO1xuICB2YXIgd2lkdGggPSBjbGllbnRSZWN0LndpZHRoIC8gc2NhbGVYO1xuICB2YXIgaGVpZ2h0ID0gY2xpZW50UmVjdC5oZWlnaHQgLyBzY2FsZVk7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHRvcDogeSxcbiAgICByaWdodDogeCArIHdpZHRoLFxuICAgIGJvdHRvbTogeSArIGhlaWdodCxcbiAgICBsZWZ0OiB4LFxuICAgIHg6IHgsXG4gICAgeTogeVxuICB9O1xufSIsImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7IC8vIFJldHVybnMgdGhlIGxheW91dCByZWN0IG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gaXRzIG9mZnNldFBhcmVudC4gTGF5b3V0XG4vLyBtZWFucyBpdCBkb2Vzbid0IHRha2UgaW50byBhY2NvdW50IHRyYW5zZm9ybXMuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldExheW91dFJlY3QoZWxlbWVudCkge1xuICB2YXIgY2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTsgLy8gVXNlIHRoZSBjbGllbnRSZWN0IHNpemVzIGlmIGl0J3Mgbm90IGJlZW4gdHJhbnNmb3JtZWQuXG4gIC8vIEZpeGVzIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTIyM1xuXG4gIHZhciB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIHZhciBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC53aWR0aCAtIHdpZHRoKSA8PSAxKSB7XG4gICAgd2lkdGggPSBjbGllbnRSZWN0LndpZHRoO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3QuaGVpZ2h0IC0gaGVpZ2h0KSA8PSAxKSB7XG4gICAgaGVpZ2h0ID0gY2xpZW50UmVjdC5oZWlnaHQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IGVsZW1lbnQub2Zmc2V0TGVmdCxcbiAgICB5OiBlbGVtZW50Lm9mZnNldFRvcCxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHRcbiAgfTtcbn0iLCJpbXBvcnQgeyBpc1NoYWRvd1Jvb3QgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWlucyhwYXJlbnQsIGNoaWxkKSB7XG4gIHZhciByb290Tm9kZSA9IGNoaWxkLmdldFJvb3ROb2RlICYmIGNoaWxkLmdldFJvb3ROb2RlKCk7IC8vIEZpcnN0LCBhdHRlbXB0IHdpdGggZmFzdGVyIG5hdGl2ZSBtZXRob2RcblxuICBpZiAocGFyZW50LmNvbnRhaW5zKGNoaWxkKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIHRoZW4gZmFsbGJhY2sgdG8gY3VzdG9tIGltcGxlbWVudGF0aW9uIHdpdGggU2hhZG93IERPTSBzdXBwb3J0XG4gIGVsc2UgaWYgKHJvb3ROb2RlICYmIGlzU2hhZG93Um9vdChyb290Tm9kZSkpIHtcbiAgICAgIHZhciBuZXh0ID0gY2hpbGQ7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKG5leHQgJiYgcGFyZW50LmlzU2FtZU5vZGUobmV4dCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ106IG5lZWQgYSBiZXR0ZXIgd2F5IHRvIGhhbmRsZSB0aGlzLi4uXG5cblxuICAgICAgICBuZXh0ID0gbmV4dC5wYXJlbnROb2RlIHx8IG5leHQuaG9zdDtcbiAgICAgIH0gd2hpbGUgKG5leHQpO1xuICAgIH0gLy8gR2l2ZSB1cCwgdGhlIHJlc3VsdCBpcyBmYWxzZVxuXG5cbiAgcmV0dXJuIGZhbHNlO1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGdldFdpbmRvdyhlbGVtZW50KS5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xufSIsImltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUYWJsZUVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gWyd0YWJsZScsICd0ZCcsICd0aCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoZWxlbWVudCkpID49IDA7XG59IiwiaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICByZXR1cm4gKChpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50Lm93bmVyRG9jdW1lbnQgOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgZWxlbWVudC5kb2N1bWVudCkgfHwgd2luZG93LmRvY3VtZW50KS5kb2N1bWVudEVsZW1lbnQ7XG59IiwiaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IHsgaXNTaGFkb3dSb290IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSB7XG4gIGlmIChnZXROb2RlTmFtZShlbGVtZW50KSA9PT0gJ2h0bWwnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gKC8vIHRoaXMgaXMgYSBxdWlja2VyIChidXQgbGVzcyB0eXBlIHNhZmUpIHdheSB0byBzYXZlIHF1aXRlIHNvbWUgYnl0ZXMgZnJvbSB0aGUgYnVuZGxlXG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXVxuICAgIC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgIGVsZW1lbnQuYXNzaWduZWRTbG90IHx8IC8vIHN0ZXAgaW50byB0aGUgc2hhZG93IERPTSBvZiB0aGUgcGFyZW50IG9mIGEgc2xvdHRlZCBub2RlXG4gICAgZWxlbWVudC5wYXJlbnROb2RlIHx8ICggLy8gRE9NIEVsZW1lbnQgZGV0ZWN0ZWRcbiAgICBpc1NoYWRvd1Jvb3QoZWxlbWVudCkgPyBlbGVtZW50Lmhvc3QgOiBudWxsKSB8fCAvLyBTaGFkb3dSb290IGRldGVjdGVkXG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IEhUTUxFbGVtZW50IGlzIGEgTm9kZVxuICAgIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSAvLyBmYWxsYmFja1xuXG4gICk7XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCwgaXNTaGFkb3dSb290IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGlzVGFibGVFbGVtZW50IGZyb20gXCIuL2lzVGFibGVFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgZ2V0VUFTdHJpbmcgZnJvbSBcIi4uL3V0aWxzL3VzZXJBZ2VudC5qc1wiO1xuXG5mdW5jdGlvbiBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvODM3XG4gIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50Lm9mZnNldFBhcmVudDtcbn0gLy8gYC5vZmZzZXRQYXJlbnRgIHJlcG9ydHMgYG51bGxgIGZvciBmaXhlZCBlbGVtZW50cywgd2hpbGUgYWJzb2x1dGUgZWxlbWVudHNcbi8vIHJldHVybiB0aGUgY29udGFpbmluZyBibG9ja1xuXG5cbmZ1bmN0aW9uIGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB7XG4gIHZhciBpc0ZpcmVmb3ggPSAvZmlyZWZveC9pLnRlc3QoZ2V0VUFTdHJpbmcoKSk7XG4gIHZhciBpc0lFID0gL1RyaWRlbnQvaS50ZXN0KGdldFVBU3RyaW5nKCkpO1xuXG4gIGlmIChpc0lFICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAvLyBJbiBJRSA5LCAxMCBhbmQgMTEgZml4ZWQgZWxlbWVudHMgY29udGFpbmluZyBibG9jayBpcyBhbHdheXMgZXN0YWJsaXNoZWQgYnkgdGhlIHZpZXdwb3J0XG4gICAgdmFyIGVsZW1lbnRDc3MgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXG4gICAgaWYgKGVsZW1lbnRDc3MucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG5cbiAgaWYgKGlzU2hhZG93Um9vdChjdXJyZW50Tm9kZSkpIHtcbiAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLmhvc3Q7XG4gIH1cblxuICB3aGlsZSAoaXNIVE1MRWxlbWVudChjdXJyZW50Tm9kZSkgJiYgWydodG1sJywgJ2JvZHknXS5pbmRleE9mKGdldE5vZGVOYW1lKGN1cnJlbnROb2RlKSkgPCAwKSB7XG4gICAgdmFyIGNzcyA9IGdldENvbXB1dGVkU3R5bGUoY3VycmVudE5vZGUpOyAvLyBUaGlzIGlzIG5vbi1leGhhdXN0aXZlIGJ1dCBjb3ZlcnMgdGhlIG1vc3QgY29tbW9uIENTUyBwcm9wZXJ0aWVzIHRoYXRcbiAgICAvLyBjcmVhdGUgYSBjb250YWluaW5nIGJsb2NrLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Db250YWluaW5nX2Jsb2NrI2lkZW50aWZ5aW5nX3RoZV9jb250YWluaW5nX2Jsb2NrXG5cbiAgICBpZiAoY3NzLnRyYW5zZm9ybSAhPT0gJ25vbmUnIHx8IGNzcy5wZXJzcGVjdGl2ZSAhPT0gJ25vbmUnIHx8IGNzcy5jb250YWluID09PSAncGFpbnQnIHx8IFsndHJhbnNmb3JtJywgJ3BlcnNwZWN0aXZlJ10uaW5kZXhPZihjc3Mud2lsbENoYW5nZSkgIT09IC0xIHx8IGlzRmlyZWZveCAmJiBjc3Mud2lsbENoYW5nZSA9PT0gJ2ZpbHRlcicgfHwgaXNGaXJlZm94ICYmIGNzcy5maWx0ZXIgJiYgY3NzLmZpbHRlciAhPT0gJ25vbmUnKSB7XG4gICAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn0gLy8gR2V0cyB0aGUgY2xvc2VzdCBhbmNlc3RvciBwb3NpdGlvbmVkIGVsZW1lbnQuIEhhbmRsZXMgc29tZSBlZGdlIGNhc2VzLFxuLy8gc3VjaCBhcyB0YWJsZSBhbmNlc3RvcnMgYW5kIGNyb3NzIGJyb3dzZXIgYnVncy5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50KTtcblxuICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIGlzVGFibGVFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50KTtcbiAgfVxuXG4gIGlmIChvZmZzZXRQYXJlbnQgJiYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdodG1sJyB8fCBnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnYm9keScgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkgfHwgd2luZG93O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSA+PSAwID8gJ3gnIDogJ3knO1xufSIsImltcG9ydCB7IG1heCBhcyBtYXRoTWF4LCBtaW4gYXMgbWF0aE1pbiB9IGZyb20gXCIuL21hdGguanNcIjtcbmV4cG9ydCBmdW5jdGlvbiB3aXRoaW4obWluLCB2YWx1ZSwgbWF4KSB7XG4gIHJldHVybiBtYXRoTWF4KG1pbiwgbWF0aE1pbih2YWx1ZSwgbWF4KSk7XG59XG5leHBvcnQgZnVuY3Rpb24gd2l0aGluTWF4Q2xhbXAobWluLCB2YWx1ZSwgbWF4KSB7XG4gIHZhciB2ID0gd2l0aGluKG1pbiwgdmFsdWUsIG1heCk7XG4gIHJldHVybiB2ID4gbWF4ID8gbWF4IDogdjtcbn0iLCJpbXBvcnQgZ2V0RnJlc2hTaWRlT2JqZWN0IGZyb20gXCIuL2dldEZyZXNoU2lkZU9iamVjdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VQYWRkaW5nT2JqZWN0KHBhZGRpbmdPYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGdldEZyZXNoU2lkZU9iamVjdCgpLCBwYWRkaW5nT2JqZWN0KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRGcmVzaFNpZGVPYmplY3QoKSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwXG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhwYW5kVG9IYXNoTWFwKHZhbHVlLCBrZXlzKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAoaGFzaE1hcCwga2V5KSB7XG4gICAgaGFzaE1hcFtrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIGhhc2hNYXA7XG4gIH0sIHt9KTtcbn0iLCJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgY29udGFpbnMgZnJvbSBcIi4uL2RvbS11dGlscy9jb250YWlucy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyB3aXRoaW4gfSBmcm9tIFwiLi4vdXRpbHMvd2l0aGluLmpzXCI7XG5pbXBvcnQgbWVyZ2VQYWRkaW5nT2JqZWN0IGZyb20gXCIuLi91dGlscy9tZXJnZVBhZGRpbmdPYmplY3QuanNcIjtcbmltcG9ydCBleHBhbmRUb0hhc2hNYXAgZnJvbSBcIi4uL3V0aWxzL2V4cGFuZFRvSGFzaE1hcC5qc1wiO1xuaW1wb3J0IHsgbGVmdCwgcmlnaHQsIGJhc2VQbGFjZW1lbnRzLCB0b3AsIGJvdHRvbSB9IGZyb20gXCIuLi9lbnVtcy5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciB0b1BhZGRpbmdPYmplY3QgPSBmdW5jdGlvbiB0b1BhZGRpbmdPYmplY3QocGFkZGluZywgc3RhdGUpIHtcbiAgcGFkZGluZyA9IHR5cGVvZiBwYWRkaW5nID09PSAnZnVuY3Rpb24nID8gcGFkZGluZyhPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pKSA6IHBhZGRpbmc7XG4gIHJldHVybiBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xufTtcblxuZnVuY3Rpb24gYXJyb3coX3JlZikge1xuICB2YXIgX3N0YXRlJG1vZGlmaWVyc0RhdGEkO1xuXG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBheGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgaXNWZXJ0aWNhbCA9IFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwO1xuICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICBpZiAoIWFycm93RWxlbWVudCB8fCAhcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gdG9QYWRkaW5nT2JqZWN0KG9wdGlvbnMucGFkZGluZywgc3RhdGUpO1xuICB2YXIgYXJyb3dSZWN0ID0gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpO1xuICB2YXIgbWluUHJvcCA9IGF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gIHZhciBtYXhQcm9wID0gYXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gIHZhciBlbmREaWZmID0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2xlbl0gKyBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc10gLSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucG9wcGVyW2xlbl07XG4gIHZhciBzdGFydERpZmYgPSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdO1xuICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoYXJyb3dFbGVtZW50KTtcbiAgdmFyIGNsaWVudFNpemUgPSBhcnJvd09mZnNldFBhcmVudCA/IGF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50V2lkdGggfHwgMCA6IDA7XG4gIHZhciBjZW50ZXJUb1JlZmVyZW5jZSA9IGVuZERpZmYgLyAyIC0gc3RhcnREaWZmIC8gMjsgLy8gTWFrZSBzdXJlIHRoZSBhcnJvdyBkb2Vzbid0IG92ZXJmbG93IHRoZSBwb3BwZXIgaWYgdGhlIGNlbnRlciBwb2ludCBpc1xuICAvLyBvdXRzaWRlIG9mIHRoZSBwb3BwZXIgYm91bmRzXG5cbiAgdmFyIG1pbiA9IHBhZGRpbmdPYmplY3RbbWluUHJvcF07XG4gIHZhciBtYXggPSBjbGllbnRTaXplIC0gYXJyb3dSZWN0W2xlbl0gLSBwYWRkaW5nT2JqZWN0W21heFByb3BdO1xuICB2YXIgY2VudGVyID0gY2xpZW50U2l6ZSAvIDIgLSBhcnJvd1JlY3RbbGVuXSAvIDIgKyBjZW50ZXJUb1JlZmVyZW5jZTtcbiAgdmFyIG9mZnNldCA9IHdpdGhpbihtaW4sIGNlbnRlciwgbWF4KTsgLy8gUHJldmVudHMgYnJlYWtpbmcgc3ludGF4IGhpZ2hsaWdodGluZy4uLlxuXG4gIHZhciBheGlzUHJvcCA9IGF4aXM7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSAoX3N0YXRlJG1vZGlmaWVyc0RhdGEkID0ge30sIF9zdGF0ZSRtb2RpZmllcnNEYXRhJFtheGlzUHJvcF0gPSBvZmZzZXQsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJC5jZW50ZXJPZmZzZXQgPSBvZmZzZXQgLSBjZW50ZXIsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJCk7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCxcbiAgICAgIGFycm93RWxlbWVudCA9IF9vcHRpb25zJGVsZW1lbnQgPT09IHZvaWQgMCA/ICdbZGF0YS1wb3BwZXItYXJyb3ddJyA6IF9vcHRpb25zJGVsZW1lbnQ7XG5cbiAgaWYgKGFycm93RWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIENTUyBzZWxlY3RvclxuXG5cbiAgaWYgKHR5cGVvZiBhcnJvd0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMucG9wcGVyLnF1ZXJ5U2VsZWN0b3IoYXJyb3dFbGVtZW50KTtcblxuICAgIGlmICghYXJyb3dFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb250YWlucyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIsIGFycm93RWxlbWVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzdGF0ZS5lbGVtZW50cy5hcnJvdyA9IGFycm93RWxlbWVudDtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2Fycm93JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IGFycm93LFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddXG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xufSIsImltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgZW5kIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuLi91dGlscy9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCB7IHJvdW5kIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgdW5zZXRTaWRlcyA9IHtcbiAgdG9wOiAnYXV0bycsXG4gIHJpZ2h0OiAnYXV0bycsXG4gIGJvdHRvbTogJ2F1dG8nLFxuICBsZWZ0OiAnYXV0bydcbn07IC8vIFJvdW5kIHRoZSBvZmZzZXRzIHRvIHRoZSBuZWFyZXN0IHN1aXRhYmxlIHN1YnBpeGVsIGJhc2VkIG9uIHRoZSBEUFIuXG4vLyBab29taW5nIGNhbiBjaGFuZ2UgdGhlIERQUiwgYnV0IGl0IHNlZW1zIHRvIHJlcG9ydCBhIHZhbHVlIHRoYXQgd2lsbFxuLy8gY2xlYW5seSBkaXZpZGUgdGhlIHZhbHVlcyBpbnRvIHRoZSBhcHByb3ByaWF0ZSBzdWJwaXhlbHMuXG5cbmZ1bmN0aW9uIHJvdW5kT2Zmc2V0c0J5RFBSKF9yZWYsIHdpbikge1xuICB2YXIgeCA9IF9yZWYueCxcbiAgICAgIHkgPSBfcmVmLnk7XG4gIHZhciBkcHIgPSB3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICByZXR1cm4ge1xuICAgIHg6IHJvdW5kKHggKiBkcHIpIC8gZHByIHx8IDAsXG4gICAgeTogcm91bmQoeSAqIGRwcikgLyBkcHIgfHwgMFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwVG9TdHlsZXMoX3JlZjIpIHtcbiAgdmFyIF9PYmplY3QkYXNzaWduMjtcblxuICB2YXIgcG9wcGVyID0gX3JlZjIucG9wcGVyLFxuICAgICAgcG9wcGVyUmVjdCA9IF9yZWYyLnBvcHBlclJlY3QsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmMi5wbGFjZW1lbnQsXG4gICAgICB2YXJpYXRpb24gPSBfcmVmMi52YXJpYXRpb24sXG4gICAgICBvZmZzZXRzID0gX3JlZjIub2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uID0gX3JlZjIucG9zaXRpb24sXG4gICAgICBncHVBY2NlbGVyYXRpb24gPSBfcmVmMi5ncHVBY2NlbGVyYXRpb24sXG4gICAgICBhZGFwdGl2ZSA9IF9yZWYyLmFkYXB0aXZlLFxuICAgICAgcm91bmRPZmZzZXRzID0gX3JlZjIucm91bmRPZmZzZXRzLFxuICAgICAgaXNGaXhlZCA9IF9yZWYyLmlzRml4ZWQ7XG4gIHZhciBfb2Zmc2V0cyR4ID0gb2Zmc2V0cy54LFxuICAgICAgeCA9IF9vZmZzZXRzJHggPT09IHZvaWQgMCA/IDAgOiBfb2Zmc2V0cyR4LFxuICAgICAgX29mZnNldHMkeSA9IG9mZnNldHMueSxcbiAgICAgIHkgPSBfb2Zmc2V0cyR5ID09PSB2b2lkIDAgPyAwIDogX29mZnNldHMkeTtcblxuICB2YXIgX3JlZjMgPSB0eXBlb2Ygcm91bmRPZmZzZXRzID09PSAnZnVuY3Rpb24nID8gcm91bmRPZmZzZXRzKHtcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfSkgOiB7XG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH07XG5cbiAgeCA9IF9yZWYzLng7XG4gIHkgPSBfcmVmMy55O1xuICB2YXIgaGFzWCA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3gnKTtcbiAgdmFyIGhhc1kgPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd5Jyk7XG4gIHZhciBzaWRlWCA9IGxlZnQ7XG4gIHZhciBzaWRlWSA9IHRvcDtcbiAgdmFyIHdpbiA9IHdpbmRvdztcblxuICBpZiAoYWRhcHRpdmUpIHtcbiAgICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KHBvcHBlcik7XG4gICAgdmFyIGhlaWdodFByb3AgPSAnY2xpZW50SGVpZ2h0JztcbiAgICB2YXIgd2lkdGhQcm9wID0gJ2NsaWVudFdpZHRoJztcblxuICAgIGlmIChvZmZzZXRQYXJlbnQgPT09IGdldFdpbmRvdyhwb3BwZXIpKSB7XG4gICAgICBvZmZzZXRQYXJlbnQgPSBnZXREb2N1bWVudEVsZW1lbnQocG9wcGVyKTtcblxuICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiAhPT0gJ3N0YXRpYycgJiYgcG9zaXRpb24gPT09ICdhYnNvbHV0ZScpIHtcbiAgICAgICAgaGVpZ2h0UHJvcCA9ICdzY3JvbGxIZWlnaHQnO1xuICAgICAgICB3aWR0aFByb3AgPSAnc2Nyb2xsV2lkdGgnO1xuICAgICAgfVxuICAgIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FzdF06IGZvcmNlIHR5cGUgcmVmaW5lbWVudCwgd2UgY29tcGFyZSBvZmZzZXRQYXJlbnQgd2l0aCB3aW5kb3cgYWJvdmUsIGJ1dCBGbG93IGRvZXNuJ3QgZGV0ZWN0IGl0XG5cblxuICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudDtcblxuICAgIGlmIChwbGFjZW1lbnQgPT09IHRvcCB8fCAocGxhY2VtZW50ID09PSBsZWZ0IHx8IHBsYWNlbWVudCA9PT0gcmlnaHQpICYmIHZhcmlhdGlvbiA9PT0gZW5kKSB7XG4gICAgICBzaWRlWSA9IGJvdHRvbTtcbiAgICAgIHZhciBvZmZzZXRZID0gaXNGaXhlZCAmJiBvZmZzZXRQYXJlbnQgPT09IHdpbiAmJiB3aW4udmlzdWFsVmlld3BvcnQgPyB3aW4udmlzdWFsVmlld3BvcnQuaGVpZ2h0IDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgICBvZmZzZXRQYXJlbnRbaGVpZ2h0UHJvcF07XG4gICAgICB5IC09IG9mZnNldFkgLSBwb3BwZXJSZWN0LmhlaWdodDtcbiAgICAgIHkgKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgIH1cblxuICAgIGlmIChwbGFjZW1lbnQgPT09IGxlZnQgfHwgKHBsYWNlbWVudCA9PT0gdG9wIHx8IHBsYWNlbWVudCA9PT0gYm90dG9tKSAmJiB2YXJpYXRpb24gPT09IGVuZCkge1xuICAgICAgc2lkZVggPSByaWdodDtcbiAgICAgIHZhciBvZmZzZXRYID0gaXNGaXhlZCAmJiBvZmZzZXRQYXJlbnQgPT09IHdpbiAmJiB3aW4udmlzdWFsVmlld3BvcnQgPyB3aW4udmlzdWFsVmlld3BvcnQud2lkdGggOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICAgIG9mZnNldFBhcmVudFt3aWR0aFByb3BdO1xuICAgICAgeCAtPSBvZmZzZXRYIC0gcG9wcGVyUmVjdC53aWR0aDtcbiAgICAgIHggKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb21tb25TdHlsZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBwb3NpdGlvbjogcG9zaXRpb25cbiAgfSwgYWRhcHRpdmUgJiYgdW5zZXRTaWRlcyk7XG5cbiAgdmFyIF9yZWY0ID0gcm91bmRPZmZzZXRzID09PSB0cnVlID8gcm91bmRPZmZzZXRzQnlEUFIoe1xuICAgIHg6IHgsXG4gICAgeTogeVxuICB9LCBnZXRXaW5kb3cocG9wcGVyKSkgOiB7XG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH07XG5cbiAgeCA9IF9yZWY0Lng7XG4gIHkgPSBfcmVmNC55O1xuXG4gIGlmIChncHVBY2NlbGVyYXRpb24pIHtcbiAgICB2YXIgX09iamVjdCRhc3NpZ247XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24gPSB7fSwgX09iamVjdCRhc3NpZ25bc2lkZVldID0gaGFzWSA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbltzaWRlWF0gPSBoYXNYID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduLnRyYW5zZm9ybSA9ICh3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSA8PSAxID8gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweClcIiA6IFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweCwgMClcIiwgX09iamVjdCRhc3NpZ24pKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbjIgPSB7fSwgX09iamVjdCRhc3NpZ24yW3NpZGVZXSA9IGhhc1kgPyB5ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMltzaWRlWF0gPSBoYXNYID8geCArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjIudHJhbnNmb3JtID0gJycsIF9PYmplY3QkYXNzaWduMikpO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlU3R5bGVzKF9yZWY1KSB7XG4gIHZhciBzdGF0ZSA9IF9yZWY1LnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWY1Lm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPSBvcHRpb25zLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGdwdUFjY2VsZXJhdCxcbiAgICAgIF9vcHRpb25zJGFkYXB0aXZlID0gb3B0aW9ucy5hZGFwdGl2ZSxcbiAgICAgIGFkYXB0aXZlID0gX29wdGlvbnMkYWRhcHRpdmUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhZGFwdGl2ZSxcbiAgICAgIF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9IG9wdGlvbnMucm91bmRPZmZzZXRzLFxuICAgICAgcm91bmRPZmZzZXRzID0gX29wdGlvbnMkcm91bmRPZmZzZXRzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcm91bmRPZmZzZXRzO1xuICB2YXIgY29tbW9uU3R5bGVzID0ge1xuICAgIHBsYWNlbWVudDogZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpLFxuICAgIHZhcmlhdGlvbjogZ2V0VmFyaWF0aW9uKHN0YXRlLnBsYWNlbWVudCksXG4gICAgcG9wcGVyOiBzdGF0ZS5lbGVtZW50cy5wb3BwZXIsXG4gICAgcG9wcGVyUmVjdDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIGdwdUFjY2VsZXJhdGlvbjogZ3B1QWNjZWxlcmF0aW9uLFxuICAgIGlzRml4ZWQ6IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3kgPT09ICdmaXhlZCdcbiAgfTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLnBvcHBlciwgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMsXG4gICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgIGFkYXB0aXZlOiBhZGFwdGl2ZSxcbiAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgfSkpKTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93ICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMuYXJyb3cgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMuYXJyb3csIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYWRhcHRpdmU6IGZhbHNlLFxuICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICB9KSkpO1xuICB9XG5cbiAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICdkYXRhLXBvcHBlci1wbGFjZW1lbnQnOiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdjb21wdXRlU3R5bGVzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdiZWZvcmVXcml0ZScsXG4gIGZuOiBjb21wdXRlU3R5bGVzLFxuICBkYXRhOiB7fVxufTsiLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0V2luZG93LmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHBhc3NpdmUgPSB7XG4gIHBhc3NpdmU6IHRydWVcbn07XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2UsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwsXG4gICAgICBzY3JvbGwgPSBfb3B0aW9ucyRzY3JvbGwgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRzY3JvbGwsXG4gICAgICBfb3B0aW9ucyRyZXNpemUgPSBvcHRpb25zLnJlc2l6ZSxcbiAgICAgIHJlc2l6ZSA9IF9vcHRpb25zJHJlc2l6ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJlc2l6ZTtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIpO1xuICB2YXIgc2Nyb2xsUGFyZW50cyA9IFtdLmNvbmNhdChzdGF0ZS5zY3JvbGxQYXJlbnRzLnJlZmVyZW5jZSwgc3RhdGUuc2Nyb2xsUGFyZW50cy5wb3BwZXIpO1xuXG4gIGlmIChzY3JvbGwpIHtcbiAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgc2Nyb2xsUGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAocmVzaXplKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICAgIHNjcm9sbFBhcmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlc2l6ZSkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfVxuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnZXZlbnRMaXN0ZW5lcnMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3dyaXRlJyxcbiAgZm46IGZ1bmN0aW9uIGZuKCkge30sXG4gIGVmZmVjdDogZWZmZWN0LFxuICBkYXRhOiB7fVxufTsiLCJ2YXIgaGFzaCA9IHtcbiAgbGVmdDogJ3JpZ2h0JyxcbiAgcmlnaHQ6ICdsZWZ0JyxcbiAgYm90dG9tOiAndG9wJyxcbiAgdG9wOiAnYm90dG9tJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn0iLCJ2YXIgaGFzaCA9IHtcbiAgc3RhcnQ6ICdlbmQnLFxuICBlbmQ6ICdzdGFydCdcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9zdGFydHxlbmQvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgfSk7XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbChub2RlKSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3cobm9kZSk7XG4gIHZhciBzY3JvbGxMZWZ0ID0gd2luLnBhZ2VYT2Zmc2V0O1xuICB2YXIgc2Nyb2xsVG9wID0gd2luLnBhZ2VZT2Zmc2V0O1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IHNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wOiBzY3JvbGxUb3BcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpIHtcbiAgLy8gSWYgPGh0bWw+IGhhcyBhIENTUyB3aWR0aCBncmVhdGVyIHRoYW4gdGhlIHZpZXdwb3J0LCB0aGVuIHRoaXMgd2lsbCBiZVxuICAvLyBpbmNvcnJlY3QgZm9yIFJUTC5cbiAgLy8gUG9wcGVyIDEgaXMgYnJva2VuIGluIHRoaXMgY2FzZSBhbmQgbmV2ZXIgaGFkIGEgYnVnIHJlcG9ydCBzbyBsZXQncyBhc3N1bWVcbiAgLy8gaXQncyBub3QgYW4gaXNzdWUuIEkgZG9uJ3QgdGhpbmsgYW55b25lIGV2ZXIgc3BlY2lmaWVzIHdpZHRoIG9uIDxodG1sPlxuICAvLyBhbnl3YXkuXG4gIC8vIEJyb3dzZXJzIHdoZXJlIHRoZSBsZWZ0IHNjcm9sbGJhciBkb2Vzbid0IGNhdXNlIGFuIGlzc3VlIHJlcG9ydCBgMGAgZm9yXG4gIC8vIHRoaXMgKGUuZy4gRWRnZSAyMDE5LCBJRTExLCBTYWZhcmkpXG4gIHJldHVybiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKS5sZWZ0ICsgZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpLnNjcm9sbExlZnQ7XG59IiwiaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICAvLyBGaXJlZm94IHdhbnRzIHVzIHRvIGNoZWNrIGAteGAgYW5kIGAteWAgdmFyaWF0aW9ucyBhcyB3ZWxsXG4gIHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCksXG4gICAgICBvdmVyZmxvdyA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93LFxuICAgICAgb3ZlcmZsb3dYID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dYLFxuICAgICAgb3ZlcmZsb3dZID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dZO1xuXG4gIHJldHVybiAvYXV0b3xzY3JvbGx8b3ZlcmxheXxoaWRkZW4vLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpO1xufSIsImltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KG5vZGUpIHtcbiAgaWYgKFsnaHRtbCcsICdib2R5JywgJyNkb2N1bWVudCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUobm9kZSkpID49IDApIHtcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgaWYgKGlzSFRNTEVsZW1lbnQobm9kZSkgJiYgaXNTY3JvbGxQYXJlbnQobm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShub2RlKSk7XG59IiwiaW1wb3J0IGdldFNjcm9sbFBhcmVudCBmcm9tIFwiLi9nZXRTY3JvbGxQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjtcbi8qXG5naXZlbiBhIERPTSBlbGVtZW50LCByZXR1cm4gdGhlIGxpc3Qgb2YgYWxsIHNjcm9sbCBwYXJlbnRzLCB1cCB0aGUgbGlzdCBvZiBhbmNlc29yc1xudW50aWwgd2UgZ2V0IHRvIHRoZSB0b3Agd2luZG93IG9iamVjdC4gVGhpcyBsaXN0IGlzIHdoYXQgd2UgYXR0YWNoIHNjcm9sbCBsaXN0ZW5lcnNcbnRvLCBiZWNhdXNlIGlmIGFueSBvZiB0aGVzZSBwYXJlbnQgZWxlbWVudHMgc2Nyb2xsLCB3ZSdsbCBuZWVkIHRvIHJlLWNhbGN1bGF0ZSB0aGVcbnJlZmVyZW5jZSBlbGVtZW50J3MgcG9zaXRpb24uXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0U2Nyb2xsUGFyZW50cyhlbGVtZW50LCBsaXN0KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgaWYgKGxpc3QgPT09IHZvaWQgMCkge1xuICAgIGxpc3QgPSBbXTtcbiAgfVxuXG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCk7XG4gIHZhciBpc0JvZHkgPSBzY3JvbGxQYXJlbnQgPT09ICgoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHkpO1xuICB2YXIgd2luID0gZ2V0V2luZG93KHNjcm9sbFBhcmVudCk7XG4gIHZhciB0YXJnZXQgPSBpc0JvZHkgPyBbd2luXS5jb25jYXQod2luLnZpc3VhbFZpZXdwb3J0IHx8IFtdLCBpc1Njcm9sbFBhcmVudChzY3JvbGxQYXJlbnQpID8gc2Nyb2xsUGFyZW50IDogW10pIDogc2Nyb2xsUGFyZW50O1xuICB2YXIgdXBkYXRlZExpc3QgPSBsaXN0LmNvbmNhdCh0YXJnZXQpO1xuICByZXR1cm4gaXNCb2R5ID8gdXBkYXRlZExpc3QgOiAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogaXNCb2R5IHRlbGxzIHVzIHRhcmdldCB3aWxsIGJlIGFuIEhUTUxFbGVtZW50IGhlcmVcbiAgdXBkYXRlZExpc3QuY29uY2F0KGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUodGFyZ2V0KSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlY3RUb0NsaWVudFJlY3QocmVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcmVjdCwge1xuICAgIGxlZnQ6IHJlY3QueCxcbiAgICB0b3A6IHJlY3QueSxcbiAgICByaWdodDogcmVjdC54ICsgcmVjdC53aWR0aCxcbiAgICBib3R0b206IHJlY3QueSArIHJlY3QuaGVpZ2h0XG4gIH0pO1xufSIsImltcG9ydCB7IHZpZXdwb3J0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0Vmlld3BvcnRSZWN0IGZyb20gXCIuL2dldFZpZXdwb3J0UmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50UmVjdCBmcm9tIFwiLi9nZXREb2N1bWVudFJlY3QuanNcIjtcbmltcG9ydCBsaXN0U2Nyb2xsUGFyZW50cyBmcm9tIFwiLi9saXN0U2Nyb2xsUGFyZW50cy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gXCIuL2NvbnRhaW5zLmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCByZWN0VG9DbGllbnRSZWN0IGZyb20gXCIuLi91dGlscy9yZWN0VG9DbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgeyBtYXgsIG1pbiB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5cbmZ1bmN0aW9uIGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KSB7XG4gIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIGZhbHNlLCBzdHJhdGVneSA9PT0gJ2ZpeGVkJyk7XG4gIHJlY3QudG9wID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudFRvcDtcbiAgcmVjdC5sZWZ0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRMZWZ0O1xuICByZWN0LmJvdHRvbSA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIHJlY3QucmlnaHQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LndpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgcmVjdC5oZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC54ID0gcmVjdC5sZWZ0O1xuICByZWN0LnkgPSByZWN0LnRvcDtcbiAgcmV0dXJuIHJlY3Q7XG59XG5cbmZ1bmN0aW9uIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50LCBzdHJhdGVneSkge1xuICByZXR1cm4gY2xpcHBpbmdQYXJlbnQgPT09IHZpZXdwb3J0ID8gcmVjdFRvQ2xpZW50UmVjdChnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpKSA6IGlzRWxlbWVudChjbGlwcGluZ1BhcmVudCkgPyBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChjbGlwcGluZ1BhcmVudCwgc3RyYXRlZ3kpIDogcmVjdFRvQ2xpZW50UmVjdChnZXREb2N1bWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKSk7XG59IC8vIEEgXCJjbGlwcGluZyBwYXJlbnRcIiBpcyBhbiBvdmVyZmxvd2FibGUgY29udGFpbmVyIHdpdGggdGhlIGNoYXJhY3RlcmlzdGljIG9mXG4vLyBjbGlwcGluZyAob3IgaGlkaW5nKSBvdmVyZmxvd2luZyBlbGVtZW50cyB3aXRoIGEgcG9zaXRpb24gZGlmZmVyZW50IGZyb21cbi8vIGBpbml0aWFsYFxuXG5cbmZ1bmN0aW9uIGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSB7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSBsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKGVsZW1lbnQpKTtcbiAgdmFyIGNhbkVzY2FwZUNsaXBwaW5nID0gWydhYnNvbHV0ZScsICdmaXhlZCddLmluZGV4T2YoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbikgPj0gMDtcbiAgdmFyIGNsaXBwZXJFbGVtZW50ID0gY2FuRXNjYXBlQ2xpcHBpbmcgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSA/IGdldE9mZnNldFBhcmVudChlbGVtZW50KSA6IGVsZW1lbnQ7XG5cbiAgaWYgKCFpc0VsZW1lbnQoY2xpcHBlckVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy8xNDE0XG5cblxuICByZXR1cm4gY2xpcHBpbmdQYXJlbnRzLmZpbHRlcihmdW5jdGlvbiAoY2xpcHBpbmdQYXJlbnQpIHtcbiAgICByZXR1cm4gaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSAmJiBjb250YWlucyhjbGlwcGluZ1BhcmVudCwgY2xpcHBlckVsZW1lbnQpICYmIGdldE5vZGVOYW1lKGNsaXBwaW5nUGFyZW50KSAhPT0gJ2JvZHknO1xuICB9KTtcbn0gLy8gR2V0cyB0aGUgbWF4aW11bSBhcmVhIHRoYXQgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZSBpbiBkdWUgdG8gYW55IG51bWJlciBvZlxuLy8gY2xpcHBpbmcgcGFyZW50c1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENsaXBwaW5nUmVjdChlbGVtZW50LCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5LCBzdHJhdGVneSkge1xuICB2YXIgbWFpbkNsaXBwaW5nUGFyZW50cyA9IGJvdW5kYXJ5ID09PSAnY2xpcHBpbmdQYXJlbnRzJyA/IGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSA6IFtdLmNvbmNhdChib3VuZGFyeSk7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSBbXS5jb25jYXQobWFpbkNsaXBwaW5nUGFyZW50cywgW3Jvb3RCb3VuZGFyeV0pO1xuICB2YXIgZmlyc3RDbGlwcGluZ1BhcmVudCA9IGNsaXBwaW5nUGFyZW50c1swXTtcbiAgdmFyIGNsaXBwaW5nUmVjdCA9IGNsaXBwaW5nUGFyZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjY1JlY3QsIGNsaXBwaW5nUGFyZW50KSB7XG4gICAgdmFyIHJlY3QgPSBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCwgc3RyYXRlZ3kpO1xuICAgIGFjY1JlY3QudG9wID0gbWF4KHJlY3QudG9wLCBhY2NSZWN0LnRvcCk7XG4gICAgYWNjUmVjdC5yaWdodCA9IG1pbihyZWN0LnJpZ2h0LCBhY2NSZWN0LnJpZ2h0KTtcbiAgICBhY2NSZWN0LmJvdHRvbSA9IG1pbihyZWN0LmJvdHRvbSwgYWNjUmVjdC5ib3R0b20pO1xuICAgIGFjY1JlY3QubGVmdCA9IG1heChyZWN0LmxlZnQsIGFjY1JlY3QubGVmdCk7XG4gICAgcmV0dXJuIGFjY1JlY3Q7XG4gIH0sIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGZpcnN0Q2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KSk7XG4gIGNsaXBwaW5nUmVjdC53aWR0aCA9IGNsaXBwaW5nUmVjdC5yaWdodCAtIGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QuaGVpZ2h0ID0gY2xpcHBpbmdSZWN0LmJvdHRvbSAtIGNsaXBwaW5nUmVjdC50b3A7XG4gIGNsaXBwaW5nUmVjdC54ID0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC55ID0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgcmV0dXJuIGNsaXBwaW5nUmVjdDtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBpc0xheW91dFZpZXdwb3J0IGZyb20gXCIuL2lzTGF5b3V0Vmlld3BvcnQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZpZXdwb3J0UmVjdChlbGVtZW50LCBzdHJhdGVneSkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIHZpc3VhbFZpZXdwb3J0ID0gd2luLnZpc3VhbFZpZXdwb3J0O1xuICB2YXIgd2lkdGggPSBodG1sLmNsaWVudFdpZHRoO1xuICB2YXIgaGVpZ2h0ID0gaHRtbC5jbGllbnRIZWlnaHQ7XG4gIHZhciB4ID0gMDtcbiAgdmFyIHkgPSAwO1xuXG4gIGlmICh2aXN1YWxWaWV3cG9ydCkge1xuICAgIHdpZHRoID0gdmlzdWFsVmlld3BvcnQud2lkdGg7XG4gICAgaGVpZ2h0ID0gdmlzdWFsVmlld3BvcnQuaGVpZ2h0O1xuICAgIHZhciBsYXlvdXRWaWV3cG9ydCA9IGlzTGF5b3V0Vmlld3BvcnQoKTtcblxuICAgIGlmIChsYXlvdXRWaWV3cG9ydCB8fCAhbGF5b3V0Vmlld3BvcnQgJiYgc3RyYXRlZ3kgPT09ICdmaXhlZCcpIHtcbiAgICAgIHggPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0O1xuICAgICAgeSA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSxcbiAgICB5OiB5XG4gIH07XG59IiwiaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XG5pbXBvcnQgeyBtYXggfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiOyAvLyBHZXRzIHRoZSBlbnRpcmUgc2l6ZSBvZiB0aGUgc2Nyb2xsYWJsZSBkb2N1bWVudCBhcmVhLCBldmVuIGV4dGVuZGluZyBvdXRzaWRlXG4vLyBvZiB0aGUgYDxodG1sPmAgYW5kIGA8Ym9keT5gIHJlY3QgYm91bmRzIGlmIGhvcml6b250YWxseSBzY3JvbGxhYmxlXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvY3VtZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciB3aW5TY3JvbGwgPSBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCk7XG4gIHZhciBib2R5ID0gKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5O1xuICB2YXIgd2lkdGggPSBtYXgoaHRtbC5zY3JvbGxXaWR0aCwgaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuc2Nyb2xsV2lkdGggOiAwLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApO1xuICB2YXIgaGVpZ2h0ID0gbWF4KGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLmNsaWVudEhlaWdodCwgYm9keSA/IGJvZHkuc2Nyb2xsSGVpZ2h0IDogMCwgYm9keSA/IGJvZHkuY2xpZW50SGVpZ2h0IDogMCk7XG4gIHZhciB4ID0gLXdpblNjcm9sbC5zY3JvbGxMZWZ0ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KTtcbiAgdmFyIHkgPSAtd2luU2Nyb2xsLnNjcm9sbFRvcDtcblxuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShib2R5IHx8IGh0bWwpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICB4ICs9IG1heChodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApIC0gd2lkdGg7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudCBmcm9tIFwiLi9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCwgc3RhcnQsIGVuZCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZU9mZnNldHMoX3JlZikge1xuICB2YXIgcmVmZXJlbmNlID0gX3JlZi5yZWZlcmVuY2UsXG4gICAgICBlbGVtZW50ID0gX3JlZi5lbGVtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50ID8gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIDogbnVsbDtcbiAgdmFyIHZhcmlhdGlvbiA9IHBsYWNlbWVudCA/IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIDogbnVsbDtcbiAgdmFyIGNvbW1vblggPSByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCAvIDIgLSBlbGVtZW50LndpZHRoIC8gMjtcbiAgdmFyIGNvbW1vblkgPSByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHQgLyAyIC0gZWxlbWVudC5oZWlnaHQgLyAyO1xuICB2YXIgb2Zmc2V0cztcblxuICBzd2l0Y2ggKGJhc2VQbGFjZW1lbnQpIHtcbiAgICBjYXNlIHRvcDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55IC0gZWxlbWVudC5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgYm90dG9tOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHJpZ2h0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgbGVmdDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54IC0gZWxlbWVudC53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54LFxuICAgICAgICB5OiByZWZlcmVuY2UueVxuICAgICAgfTtcbiAgfVxuXG4gIHZhciBtYWluQXhpcyA9IGJhc2VQbGFjZW1lbnQgPyBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCkgOiBudWxsO1xuXG4gIGlmIChtYWluQXhpcyAhPSBudWxsKSB7XG4gICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgICBzd2l0Y2ggKHZhcmlhdGlvbikge1xuICAgICAgY2FzZSBzdGFydDpcbiAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSAtIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgZW5kOlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdICsgKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0cztcbn0iLCJpbXBvcnQgZ2V0Q2xpcHBpbmdSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Q2xpcHBpbmdSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgY29tcHV0ZU9mZnNldHMgZnJvbSBcIi4vY29tcHV0ZU9mZnNldHMuanNcIjtcbmltcG9ydCByZWN0VG9DbGllbnRSZWN0IGZyb20gXCIuL3JlY3RUb0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCB7IGNsaXBwaW5nUGFyZW50cywgcmVmZXJlbmNlLCBwb3BwZXIsIGJvdHRvbSwgdG9wLCByaWdodCwgYmFzZVBsYWNlbWVudHMsIHZpZXdwb3J0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBtZXJnZVBhZGRpbmdPYmplY3QgZnJvbSBcIi4vbWVyZ2VQYWRkaW5nT2JqZWN0LmpzXCI7XG5pbXBvcnQgZXhwYW5kVG9IYXNoTWFwIGZyb20gXCIuL2V4cGFuZFRvSGFzaE1hcC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGVjdE92ZXJmbG93KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgX29wdGlvbnMkcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMkcGxhY2VtZW50ID09PSB2b2lkIDAgPyBzdGF0ZS5wbGFjZW1lbnQgOiBfb3B0aW9ucyRwbGFjZW1lbnQsXG4gICAgICBfb3B0aW9ucyRzdHJhdGVneSA9IF9vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgc3RyYXRlZ3kgPSBfb3B0aW9ucyRzdHJhdGVneSA9PT0gdm9pZCAwID8gc3RhdGUuc3RyYXRlZ3kgOiBfb3B0aW9ucyRzdHJhdGVneSxcbiAgICAgIF9vcHRpb25zJGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICBib3VuZGFyeSA9IF9vcHRpb25zJGJvdW5kYXJ5ID09PSB2b2lkIDAgPyBjbGlwcGluZ1BhcmVudHMgOiBfb3B0aW9ucyRib3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9PT0gdm9pZCAwID8gdmlld3BvcnQgOiBfb3B0aW9ucyRyb290Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRlbGVtZW50Q29udGUgPSBfb3B0aW9ucy5lbGVtZW50Q29udGV4dCxcbiAgICAgIGVsZW1lbnRDb250ZXh0ID0gX29wdGlvbnMkZWxlbWVudENvbnRlID09PSB2b2lkIDAgPyBwb3BwZXIgOiBfb3B0aW9ucyRlbGVtZW50Q29udGUsXG4gICAgICBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9IF9vcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgcGFkZGluZyA9IF9vcHRpb25zJHBhZGRpbmcgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyRwYWRkaW5nO1xuICB2YXIgcGFkZGluZ09iamVjdCA9IG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG4gIHZhciBhbHRDb250ZXh0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHJlZmVyZW5jZSA6IHBvcHBlcjtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbYWx0Qm91bmRhcnkgPyBhbHRDb250ZXh0IDogZWxlbWVudENvbnRleHRdO1xuICB2YXIgY2xpcHBpbmdDbGllbnRSZWN0ID0gZ2V0Q2xpcHBpbmdSZWN0KGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQgOiBlbGVtZW50LmNvbnRleHRFbGVtZW50IHx8IGdldERvY3VtZW50RWxlbWVudChzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5LCBzdHJhdGVneSk7XG4gIHZhciByZWZlcmVuY2VDbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHN0YXRlLmVsZW1lbnRzLnJlZmVyZW5jZSk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlQ2xpZW50UmVjdCxcbiAgICBlbGVtZW50OiBwb3BwZXJSZWN0LFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pO1xuICB2YXIgcG9wcGVyQ2xpZW50UmVjdCA9IHJlY3RUb0NsaWVudFJlY3QoT2JqZWN0LmFzc2lnbih7fSwgcG9wcGVyUmVjdCwgcG9wcGVyT2Zmc2V0cykpO1xuICB2YXIgZWxlbWVudENsaWVudFJlY3QgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcG9wcGVyQ2xpZW50UmVjdCA6IHJlZmVyZW5jZUNsaWVudFJlY3Q7IC8vIHBvc2l0aXZlID0gb3ZlcmZsb3dpbmcgdGhlIGNsaXBwaW5nIHJlY3RcbiAgLy8gMCBvciBuZWdhdGl2ZSA9IHdpdGhpbiB0aGUgY2xpcHBpbmcgcmVjdFxuXG4gIHZhciBvdmVyZmxvd09mZnNldHMgPSB7XG4gICAgdG9wOiBjbGlwcGluZ0NsaWVudFJlY3QudG9wIC0gZWxlbWVudENsaWVudFJlY3QudG9wICsgcGFkZGluZ09iamVjdC50b3AsXG4gICAgYm90dG9tOiBlbGVtZW50Q2xpZW50UmVjdC5ib3R0b20gLSBjbGlwcGluZ0NsaWVudFJlY3QuYm90dG9tICsgcGFkZGluZ09iamVjdC5ib3R0b20sXG4gICAgbGVmdDogY2xpcHBpbmdDbGllbnRSZWN0LmxlZnQgLSBlbGVtZW50Q2xpZW50UmVjdC5sZWZ0ICsgcGFkZGluZ09iamVjdC5sZWZ0LFxuICAgIHJpZ2h0OiBlbGVtZW50Q2xpZW50UmVjdC5yaWdodCAtIGNsaXBwaW5nQ2xpZW50UmVjdC5yaWdodCArIHBhZGRpbmdPYmplY3QucmlnaHRcbiAgfTtcbiAgdmFyIG9mZnNldERhdGEgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldDsgLy8gT2Zmc2V0cyBjYW4gYmUgYXBwbGllZCBvbmx5IHRvIHRoZSBwb3BwZXIgZWxlbWVudFxuXG4gIGlmIChlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyICYmIG9mZnNldERhdGEpIHtcbiAgICB2YXIgb2Zmc2V0ID0gb2Zmc2V0RGF0YVtwbGFjZW1lbnRdO1xuICAgIE9iamVjdC5rZXlzKG92ZXJmbG93T2Zmc2V0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbXVsdGlwbHkgPSBbcmlnaHQsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAxIDogLTE7XG4gICAgICB2YXIgYXhpcyA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAneScgOiAneCc7XG4gICAgICBvdmVyZmxvd09mZnNldHNba2V5XSArPSBvZmZzZXRbYXhpc10gKiBtdWx0aXBseTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBvdmVyZmxvd09mZnNldHM7XG59IiwiaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCB7IHZhcmlhdGlvblBsYWNlbWVudHMsIGJhc2VQbGFjZW1lbnRzLCBwbGFjZW1lbnRzIGFzIGFsbFBsYWNlbWVudHMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4vZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgX29wdGlvbnMkYWxsb3dlZEF1dG9QID0gX29wdGlvbnMuYWxsb3dlZEF1dG9QbGFjZW1lbnRzLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gX29wdGlvbnMkYWxsb3dlZEF1dG9QID09PSB2b2lkIDAgPyBhbGxQbGFjZW1lbnRzIDogX29wdGlvbnMkYWxsb3dlZEF1dG9QO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCk7XG4gIHZhciBwbGFjZW1lbnRzID0gdmFyaWF0aW9uID8gZmxpcFZhcmlhdGlvbnMgPyB2YXJpYXRpb25QbGFjZW1lbnRzIDogdmFyaWF0aW9uUGxhY2VtZW50cy5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHJldHVybiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gdmFyaWF0aW9uO1xuICB9KSA6IGJhc2VQbGFjZW1lbnRzO1xuICB2YXIgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFsbG93ZWRBdXRvUGxhY2VtZW50cy5pbmRleE9mKHBsYWNlbWVudCkgPj0gMDtcbiAgfSk7XG5cbiAgaWYgKGFsbG93ZWRQbGFjZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cztcbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXTogRmxvdyBzZWVtcyB0byBoYXZlIHByb2JsZW1zIHdpdGggdHdvIGFycmF5IHVuaW9ucy4uLlxuXG5cbiAgdmFyIG92ZXJmbG93cyA9IGFsbG93ZWRQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pW2dldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KV07XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICByZXR1cm4gT2JqZWN0LmtleXMob3ZlcmZsb3dzKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93c1thXSAtIG92ZXJmbG93c1tiXTtcbiAgfSk7XG59IiwiaW1wb3J0IGdldE9wcG9zaXRlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBjb21wdXRlQXV0b1BsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IGJvdHRvbSwgdG9wLCBzdGFydCwgcmlnaHQsIGxlZnQsIGF1dG8gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4uL3V0aWxzL2dldFZhcmlhdGlvbi5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmZ1bmN0aW9uIGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHBsYWNlbWVudCkge1xuICBpZiAoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgcmV0dXJuIFtnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpLCBvcHBvc2l0ZVBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQob3Bwb3NpdGVQbGFjZW1lbnQpXTtcbn1cblxuZnVuY3Rpb24gZmxpcChfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyA9IG9wdGlvbnMuZmFsbGJhY2tQbGFjZW1lbnRzLFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZmxpcFZhcmlhdGlvID0gb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMkZmxpcFZhcmlhdGlvID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZmxpcFZhcmlhdGlvLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHM7XG4gIHZhciBwcmVmZXJyZWRQbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSBiYXNlUGxhY2VtZW50ID09PSBwcmVmZXJyZWRQbGFjZW1lbnQ7XG4gIHZhciBmYWxsYmFja1BsYWNlbWVudHMgPSBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgfHwgKGlzQmFzZVBsYWNlbWVudCB8fCAhZmxpcFZhcmlhdGlvbnMgPyBbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KV0gOiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwcmVmZXJyZWRQbGFjZW1lbnQpKTtcbiAgdmFyIHBsYWNlbWVudHMgPSBbcHJlZmVycmVkUGxhY2VtZW50XS5jb25jYXQoZmFsbGJhY2tQbGFjZW1lbnRzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvID8gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnM6IGZsaXBWYXJpYXRpb25zLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzOiBhbGxvd2VkQXV0b1BsYWNlbWVudHNcbiAgICB9KSA6IHBsYWNlbWVudCk7XG4gIH0sIFtdKTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgY2hlY2tzTWFwID0gbmV3IE1hcCgpO1xuICB2YXIgbWFrZUZhbGxiYWNrQ2hlY2tzID0gdHJ1ZTtcbiAgdmFyIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHNbMF07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFjZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBsYWNlbWVudCA9IHBsYWNlbWVudHNbaV07XG5cbiAgICB2YXIgX2Jhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cbiAgICB2YXIgaXNTdGFydFZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSBzdGFydDtcbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihfYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcbiAgICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KTtcbiAgICB2YXIgbWFpblZhcmlhdGlvblNpZGUgPSBpc1ZlcnRpY2FsID8gaXNTdGFydFZhcmlhdGlvbiA/IHJpZ2h0IDogbGVmdCA6IGlzU3RhcnRWYXJpYXRpb24gPyBib3R0b20gOiB0b3A7XG5cbiAgICBpZiAocmVmZXJlbmNlUmVjdFtsZW5dID4gcG9wcGVyUmVjdFtsZW5dKSB7XG4gICAgICBtYWluVmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB9XG5cbiAgICB2YXIgYWx0VmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB2YXIgY2hlY2tzID0gW107XG5cbiAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbX2Jhc2VQbGFjZW1lbnRdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W21haW5WYXJpYXRpb25TaWRlXSA8PSAwLCBvdmVyZmxvd1thbHRWYXJpYXRpb25TaWRlXSA8PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tzLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH0pKSB7XG4gICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgICBtYWtlRmFsbGJhY2tDaGVja3MgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNoZWNrc01hcC5zZXQocGxhY2VtZW50LCBjaGVja3MpO1xuICB9XG5cbiAgaWYgKG1ha2VGYWxsYmFja0NoZWNrcykge1xuICAgIC8vIGAyYCBtYXkgYmUgZGVzaXJlZCBpbiBzb21lIGNhc2VzIOKAkyByZXNlYXJjaCBsYXRlclxuICAgIHZhciBudW1iZXJPZkNoZWNrcyA9IGZsaXBWYXJpYXRpb25zID8gMyA6IDE7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChfaSkge1xuICAgICAgdmFyIGZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzLmZpbmQoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgICAgICB2YXIgY2hlY2tzID0gY2hlY2tzTWFwLmdldChwbGFjZW1lbnQpO1xuXG4gICAgICAgIGlmIChjaGVja3MpIHtcbiAgICAgICAgICByZXR1cm4gY2hlY2tzLnNsaWNlKDAsIF9pKS5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChmaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IGZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgICAgIHJldHVybiBcImJyZWFrXCI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAodmFyIF9pID0gbnVtYmVyT2ZDaGVja3M7IF9pID4gMDsgX2ktLSkge1xuICAgICAgdmFyIF9yZXQgPSBfbG9vcChfaSk7XG5cbiAgICAgIGlmIChfcmV0ID09PSBcImJyZWFrXCIpIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGF0ZS5wbGFjZW1lbnQgIT09IGZpcnN0Rml0dGluZ1BsYWNlbWVudCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXAgPSB0cnVlO1xuICAgIHN0YXRlLnBsYWNlbWVudCA9IGZpcnN0Rml0dGluZ1BsYWNlbWVudDtcbiAgICBzdGF0ZS5yZXNldCA9IHRydWU7XG4gIH1cbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2ZsaXAnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogZmxpcCxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXSxcbiAgZGF0YToge1xuICAgIF9za2lwOiBmYWxzZVxuICB9XG59OyIsImltcG9ydCB7IHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuXG5mdW5jdGlvbiBnZXRTaWRlT2Zmc2V0cyhvdmVyZmxvdywgcmVjdCwgcHJldmVudGVkT2Zmc2V0cykge1xuICBpZiAocHJldmVudGVkT2Zmc2V0cyA9PT0gdm9pZCAwKSB7XG4gICAgcHJldmVudGVkT2Zmc2V0cyA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9wOiBvdmVyZmxvdy50b3AgLSByZWN0LmhlaWdodCAtIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICByaWdodDogb3ZlcmZsb3cucmlnaHQgLSByZWN0LndpZHRoICsgcHJldmVudGVkT2Zmc2V0cy54LFxuICAgIGJvdHRvbTogb3ZlcmZsb3cuYm90dG9tIC0gcmVjdC5oZWlnaHQgKyBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgbGVmdDogb3ZlcmZsb3cubGVmdCAtIHJlY3Qud2lkdGggLSBwcmV2ZW50ZWRPZmZzZXRzLnhcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKG92ZXJmbG93KSB7XG4gIHJldHVybiBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5zb21lKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93W3NpZGVdID49IDA7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoaWRlKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIHByZXZlbnRlZE9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnByZXZlbnRPdmVyZmxvdztcbiAgdmFyIHJlZmVyZW5jZU92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBlbGVtZW50Q29udGV4dDogJ3JlZmVyZW5jZSdcbiAgfSk7XG4gIHZhciBwb3BwZXJBbHRPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYWx0Qm91bmRhcnk6IHRydWVcbiAgfSk7XG4gIHZhciByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhyZWZlcmVuY2VPdmVyZmxvdywgcmVmZXJlbmNlUmVjdCk7XG4gIHZhciBwb3BwZXJFc2NhcGVPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocG9wcGVyQWx0T3ZlcmZsb3csIHBvcHBlclJlY3QsIHByZXZlbnRlZE9mZnNldHMpO1xuICB2YXIgaXNSZWZlcmVuY2VIaWRkZW4gPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzKTtcbiAgdmFyIGhhc1BvcHBlckVzY2FwZWQgPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocG9wcGVyRXNjYXBlT2Zmc2V0cyk7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSB7XG4gICAgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzOiByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMsXG4gICAgcG9wcGVyRXNjYXBlT2Zmc2V0czogcG9wcGVyRXNjYXBlT2Zmc2V0cyxcbiAgICBpc1JlZmVyZW5jZUhpZGRlbjogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgaGFzUG9wcGVyRXNjYXBlZDogaGFzUG9wcGVyRXNjYXBlZFxuICB9O1xuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXJlZmVyZW5jZS1oaWRkZW4nOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICAnZGF0YS1wb3BwZXItZXNjYXBlZCc6IGhhc1BvcHBlckVzY2FwZWRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdoaWRlJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXSxcbiAgZm46IGhpZGVcbn07IiwiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIHBsYWNlbWVudHMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCByZWN0cywgb2Zmc2V0KSB7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICB2YXIgaW52ZXJ0RGlzdGFuY2UgPSBbbGVmdCwgdG9wXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyAtMSA6IDE7XG5cbiAgdmFyIF9yZWYgPSB0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gb2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgfSkpIDogb2Zmc2V0LFxuICAgICAgc2tpZGRpbmcgPSBfcmVmWzBdLFxuICAgICAgZGlzdGFuY2UgPSBfcmVmWzFdO1xuXG4gIHNraWRkaW5nID0gc2tpZGRpbmcgfHwgMDtcbiAgZGlzdGFuY2UgPSAoZGlzdGFuY2UgfHwgMCkgKiBpbnZlcnREaXN0YW5jZTtcbiAgcmV0dXJuIFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8ge1xuICAgIHg6IGRpc3RhbmNlLFxuICAgIHk6IHNraWRkaW5nXG4gIH0gOiB7XG4gICAgeDogc2tpZGRpbmcsXG4gICAgeTogZGlzdGFuY2VcbiAgfTtcbn1cblxuZnVuY3Rpb24gb2Zmc2V0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZjIubmFtZTtcbiAgdmFyIF9vcHRpb25zJG9mZnNldCA9IG9wdGlvbnMub2Zmc2V0LFxuICAgICAgb2Zmc2V0ID0gX29wdGlvbnMkb2Zmc2V0ID09PSB2b2lkIDAgPyBbMCwgMF0gOiBfb3B0aW9ucyRvZmZzZXQ7XG4gIHZhciBkYXRhID0gcGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgYWNjW3BsYWNlbWVudF0gPSBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHN0YXRlLnJlY3RzLCBvZmZzZXQpO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgdmFyIF9kYXRhJHN0YXRlJHBsYWNlbWVudCA9IGRhdGFbc3RhdGUucGxhY2VtZW50XSxcbiAgICAgIHggPSBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQueCxcbiAgICAgIHkgPSBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQueTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzICE9IG51bGwpIHtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueCArPSB4O1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy55ICs9IHk7XG4gIH1cblxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ29mZnNldCcsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgZm46IG9mZnNldFxufTsiLCJpbXBvcnQgY29tcHV0ZU9mZnNldHMgZnJvbSBcIi4uL3V0aWxzL2NvbXB1dGVPZmZzZXRzLmpzXCI7XG5cbmZ1bmN0aW9uIHBvcHBlck9mZnNldHMoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgLy8gT2Zmc2V0cyBhcmUgdGhlIGFjdHVhbCBwb3NpdGlvbiB0aGUgcG9wcGVyIG5lZWRzIHRvIGhhdmUgdG8gYmVcbiAgLy8gcHJvcGVybHkgcG9zaXRpb25lZCBuZWFyIGl0cyByZWZlcmVuY2UgZWxlbWVudFxuICAvLyBUaGlzIGlzIHRoZSBtb3N0IGJhc2ljIHBsYWNlbWVudCwgYW5kIHdpbGwgYmUgYWRqdXN0ZWQgYnlcbiAgLy8gdGhlIG1vZGlmaWVycyBpbiB0aGUgbmV4dCBzdGVwXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiBzdGF0ZS5yZWN0cy5yZWZlcmVuY2UsXG4gICAgZWxlbWVudDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncG9wcGVyT2Zmc2V0cycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAncmVhZCcsXG4gIGZuOiBwb3BwZXJPZmZzZXRzLFxuICBkYXRhOiB7fVxufTsiLCJpbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHN0YXJ0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0QWx0QXhpcyBmcm9tIFwiLi4vdXRpbHMvZ2V0QWx0QXhpcy5qc1wiO1xuaW1wb3J0IHsgd2l0aGluLCB3aXRoaW5NYXhDbGFtcCB9IGZyb20gXCIuLi91dGlscy93aXRoaW4uanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgZ2V0RnJlc2hTaWRlT2JqZWN0IGZyb20gXCIuLi91dGlscy9nZXRGcmVzaFNpZGVPYmplY3QuanNcIjtcbmltcG9ydCB7IG1pbiBhcyBtYXRoTWluLCBtYXggYXMgbWF0aE1heCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5cbmZ1bmN0aW9uIHByZXZlbnRPdmVyZmxvdyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIF9vcHRpb25zJHRldGhlciA9IG9wdGlvbnMudGV0aGVyLFxuICAgICAgdGV0aGVyID0gX29wdGlvbnMkdGV0aGVyID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkdGV0aGVyLFxuICAgICAgX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID0gb3B0aW9ucy50ZXRoZXJPZmZzZXQsXG4gICAgICB0ZXRoZXJPZmZzZXQgPSBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQ7XG4gIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5XG4gIH0pO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gIXZhcmlhdGlvbjtcbiAgdmFyIG1haW5BeGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgYWx0QXhpcyA9IGdldEFsdEF4aXMobWFpbkF4aXMpO1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgdGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gdGV0aGVyT2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogdGV0aGVyT2Zmc2V0O1xuICB2YXIgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlID0gdHlwZW9mIHRldGhlck9mZnNldFZhbHVlID09PSAnbnVtYmVyJyA/IHtcbiAgICBtYWluQXhpczogdGV0aGVyT2Zmc2V0VmFsdWUsXG4gICAgYWx0QXhpczogdGV0aGVyT2Zmc2V0VmFsdWVcbiAgfSA6IE9iamVjdC5hc3NpZ24oe1xuICAgIG1haW5BeGlzOiAwLFxuICAgIGFsdEF4aXM6IDBcbiAgfSwgdGV0aGVyT2Zmc2V0VmFsdWUpO1xuICB2YXIgb2Zmc2V0TW9kaWZpZXJTdGF0ZSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0ID8gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXRbc3RhdGUucGxhY2VtZW50XSA6IG51bGw7XG4gIHZhciBkYXRhID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIGlmICghcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgdmFyIF9vZmZzZXRNb2RpZmllclN0YXRlJDtcblxuICAgIHZhciBtYWluU2lkZSA9IG1haW5BeGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICAgIHZhciBhbHRTaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgIHZhciBvZmZzZXQgPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXTtcbiAgICB2YXIgbWluID0gb2Zmc2V0ICsgb3ZlcmZsb3dbbWFpblNpZGVdO1xuICAgIHZhciBtYXggPSBvZmZzZXQgLSBvdmVyZmxvd1thbHRTaWRlXTtcbiAgICB2YXIgYWRkaXRpdmUgPSB0ZXRoZXIgPyAtcG9wcGVyUmVjdFtsZW5dIC8gMiA6IDA7XG4gICAgdmFyIG1pbkxlbiA9IHZhcmlhdGlvbiA9PT0gc3RhcnQgPyByZWZlcmVuY2VSZWN0W2xlbl0gOiBwb3BwZXJSZWN0W2xlbl07XG4gICAgdmFyIG1heExlbiA9IHZhcmlhdGlvbiA9PT0gc3RhcnQgPyAtcG9wcGVyUmVjdFtsZW5dIDogLXJlZmVyZW5jZVJlY3RbbGVuXTsgLy8gV2UgbmVlZCB0byBpbmNsdWRlIHRoZSBhcnJvdyBpbiB0aGUgY2FsY3VsYXRpb24gc28gdGhlIGFycm93IGRvZXNuJ3QgZ29cbiAgICAvLyBvdXRzaWRlIHRoZSByZWZlcmVuY2UgYm91bmRzXG5cbiAgICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gICAgdmFyIGFycm93UmVjdCA9IHRldGhlciAmJiBhcnJvd0VsZW1lbnQgPyBnZXRMYXlvdXRSZWN0KGFycm93RWxlbWVudCkgOiB7XG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMFxuICAgIH07XG4gICAgdmFyIGFycm93UGFkZGluZ09iamVjdCA9IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXSA/IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXS5wYWRkaW5nIDogZ2V0RnJlc2hTaWRlT2JqZWN0KCk7XG4gICAgdmFyIGFycm93UGFkZGluZ01pbiA9IGFycm93UGFkZGluZ09iamVjdFttYWluU2lkZV07XG4gICAgdmFyIGFycm93UGFkZGluZ01heCA9IGFycm93UGFkZGluZ09iamVjdFthbHRTaWRlXTsgLy8gSWYgdGhlIHJlZmVyZW5jZSBsZW5ndGggaXMgc21hbGxlciB0aGFuIHRoZSBhcnJvdyBsZW5ndGgsIHdlIGRvbid0IHdhbnRcbiAgICAvLyB0byBpbmNsdWRlIGl0cyBmdWxsIHNpemUgaW4gdGhlIGNhbGN1bGF0aW9uLiBJZiB0aGUgcmVmZXJlbmNlIGlzIHNtYWxsXG4gICAgLy8gYW5kIG5lYXIgdGhlIGVkZ2Ugb2YgYSBib3VuZGFyeSwgdGhlIHBvcHBlciBjYW4gb3ZlcmZsb3cgZXZlbiBpZiB0aGVcbiAgICAvLyByZWZlcmVuY2UgaXMgbm90IG92ZXJmbG93aW5nIGFzIHdlbGwgKGUuZy4gdmlydHVhbCBlbGVtZW50cyB3aXRoIG5vXG4gICAgLy8gd2lkdGggb3IgaGVpZ2h0KVxuXG4gICAgdmFyIGFycm93TGVuID0gd2l0aGluKDAsIHJlZmVyZW5jZVJlY3RbbGVuXSwgYXJyb3dSZWN0W2xlbl0pO1xuICAgIHZhciBtaW5PZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyByZWZlcmVuY2VSZWN0W2xlbl0gLyAyIC0gYWRkaXRpdmUgLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcyA6IG1pbkxlbiAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzO1xuICAgIHZhciBtYXhPZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyAtcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiArIGFkZGl0aXZlICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXMgOiBtYXhMZW4gKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcztcbiAgICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdyAmJiBnZXRPZmZzZXRQYXJlbnQoc3RhdGUuZWxlbWVudHMuYXJyb3cpO1xuICAgIHZhciBjbGllbnRPZmZzZXQgPSBhcnJvd09mZnNldFBhcmVudCA/IG1haW5BeGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRUb3AgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudExlZnQgfHwgMCA6IDA7XG4gICAgdmFyIG9mZnNldE1vZGlmaWVyVmFsdWUgPSAoX29mZnNldE1vZGlmaWVyU3RhdGUkID0gb2Zmc2V0TW9kaWZpZXJTdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogb2Zmc2V0TW9kaWZpZXJTdGF0ZVttYWluQXhpc10pICE9IG51bGwgPyBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQgOiAwO1xuICAgIHZhciB0ZXRoZXJNaW4gPSBvZmZzZXQgKyBtaW5PZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlIC0gY2xpZW50T2Zmc2V0O1xuICAgIHZhciB0ZXRoZXJNYXggPSBvZmZzZXQgKyBtYXhPZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlO1xuICAgIHZhciBwcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4odGV0aGVyID8gbWF0aE1pbihtaW4sIHRldGhlck1pbikgOiBtaW4sIG9mZnNldCwgdGV0aGVyID8gbWF0aE1heChtYXgsIHRldGhlck1heCkgOiBtYXgpO1xuICAgIHBvcHBlck9mZnNldHNbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0O1xuICAgIGRhdGFbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0IC0gb2Zmc2V0O1xuICB9XG5cbiAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgIHZhciBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyO1xuXG4gICAgdmFyIF9tYWluU2lkZSA9IG1haW5BeGlzID09PSAneCcgPyB0b3AgOiBsZWZ0O1xuXG4gICAgdmFyIF9hbHRTaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IGJvdHRvbSA6IHJpZ2h0O1xuXG4gICAgdmFyIF9vZmZzZXQgPSBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdO1xuXG4gICAgdmFyIF9sZW4gPSBhbHRBeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgICB2YXIgX21pbiA9IF9vZmZzZXQgKyBvdmVyZmxvd1tfbWFpblNpZGVdO1xuXG4gICAgdmFyIF9tYXggPSBfb2Zmc2V0IC0gb3ZlcmZsb3dbX2FsdFNpZGVdO1xuXG4gICAgdmFyIGlzT3JpZ2luU2lkZSA9IFt0b3AsIGxlZnRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuXG4gICAgdmFyIF9vZmZzZXRNb2RpZmllclZhbHVlID0gKF9vZmZzZXRNb2RpZmllclN0YXRlJDIgPSBvZmZzZXRNb2RpZmllclN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBvZmZzZXRNb2RpZmllclN0YXRlW2FsdEF4aXNdKSAhPSBudWxsID8gX29mZnNldE1vZGlmaWVyU3RhdGUkMiA6IDA7XG5cbiAgICB2YXIgX3RldGhlck1pbiA9IGlzT3JpZ2luU2lkZSA/IF9taW4gOiBfb2Zmc2V0IC0gcmVmZXJlbmNlUmVjdFtfbGVuXSAtIHBvcHBlclJlY3RbX2xlbl0gLSBfb2Zmc2V0TW9kaWZpZXJWYWx1ZSArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5hbHRBeGlzO1xuXG4gICAgdmFyIF90ZXRoZXJNYXggPSBpc09yaWdpblNpZGUgPyBfb2Zmc2V0ICsgcmVmZXJlbmNlUmVjdFtfbGVuXSArIHBvcHBlclJlY3RbX2xlbl0gLSBfb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5hbHRBeGlzIDogX21heDtcblxuICAgIHZhciBfcHJldmVudGVkT2Zmc2V0ID0gdGV0aGVyICYmIGlzT3JpZ2luU2lkZSA/IHdpdGhpbk1heENsYW1wKF90ZXRoZXJNaW4sIF9vZmZzZXQsIF90ZXRoZXJNYXgpIDogd2l0aGluKHRldGhlciA/IF90ZXRoZXJNaW4gOiBfbWluLCBfb2Zmc2V0LCB0ZXRoZXIgPyBfdGV0aGVyTWF4IDogX21heCk7XG5cbiAgICBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldDtcbiAgICBkYXRhW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldCAtIF9vZmZzZXQ7XG4gIH1cblxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBwcmV2ZW50T3ZlcmZsb3csXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J11cbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QWx0QXhpcyhheGlzKSB7XG4gIHJldHVybiBheGlzID09PSAneCcgPyAneScgOiAneCc7XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXROb2RlU2Nyb2xsIGZyb20gXCIuL2dldE5vZGVTY3JvbGwuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjtcbmltcG9ydCB7IHJvdW5kIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcblxuZnVuY3Rpb24gaXNFbGVtZW50U2NhbGVkKGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgc2NhbGVYID0gcm91bmQocmVjdC53aWR0aCkgLyBlbGVtZW50Lm9mZnNldFdpZHRoIHx8IDE7XG4gIHZhciBzY2FsZVkgPSByb3VuZChyZWN0LmhlaWdodCkgLyBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAxO1xuICByZXR1cm4gc2NhbGVYICE9PSAxIHx8IHNjYWxlWSAhPT0gMTtcbn0gLy8gUmV0dXJucyB0aGUgY29tcG9zaXRlIHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LlxuLy8gQ29tcG9zaXRlIG1lYW5zIGl0IHRha2VzIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zIGFzIHdlbGwgYXMgbGF5b3V0LlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbXBvc2l0ZVJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudCwgaXNGaXhlZCkge1xuICBpZiAoaXNGaXhlZCA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgb2Zmc2V0UGFyZW50SXNTY2FsZWQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgaXNFbGVtZW50U2NhbGVkKG9mZnNldFBhcmVudCk7XG4gIHZhciBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudElzU2NhbGVkLCBpc0ZpeGVkKTtcbiAgdmFyIHNjcm9sbCA9IHtcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIHNjcm9sbFRvcDogMFxuICB9O1xuICB2YXIgb2Zmc2V0cyA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgfHwgIWlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ICYmICFpc0ZpeGVkKSB7XG4gICAgaWYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgIT09ICdib2R5JyB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEwNzhcbiAgICBpc1Njcm9sbFBhcmVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgb2Zmc2V0cyA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQsIHRydWUpO1xuICAgICAgb2Zmc2V0cy54ICs9IG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgb2Zmc2V0cy55ICs9IG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IHJlY3QubGVmdCArIHNjcm9sbC5zY3JvbGxMZWZ0IC0gb2Zmc2V0cy54LFxuICAgIHk6IHJlY3QudG9wICsgc2Nyb2xsLnNjcm9sbFRvcCAtIG9mZnNldHMueSxcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gIH07XG59IiwiaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldEhUTUxFbGVtZW50U2Nyb2xsIGZyb20gXCIuL2dldEhUTUxFbGVtZW50U2Nyb2xsLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXROb2RlU2Nyb2xsKG5vZGUpIHtcbiAgaWYgKG5vZGUgPT09IGdldFdpbmRvdyhub2RlKSB8fCAhaXNIVE1MRWxlbWVudChub2RlKSkge1xuICAgIHJldHVybiBnZXRXaW5kb3dTY3JvbGwobm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdldEhUTUxFbGVtZW50U2Nyb2xsKG5vZGUpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRTY3JvbGwoZWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IGVsZW1lbnQuc2Nyb2xsVG9wXG4gIH07XG59IiwiaW1wb3J0IHsgbW9kaWZpZXJQaGFzZXMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjsgLy8gc291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTg3NTI1NVxuXG5mdW5jdGlvbiBvcmRlcihtb2RpZmllcnMpIHtcbiAgdmFyIG1hcCA9IG5ldyBNYXAoKTtcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgbWFwLnNldChtb2RpZmllci5uYW1lLCBtb2RpZmllcik7XG4gIH0pOyAvLyBPbiB2aXNpdGluZyBvYmplY3QsIGNoZWNrIGZvciBpdHMgZGVwZW5kZW5jaWVzIGFuZCB2aXNpdCB0aGVtIHJlY3Vyc2l2ZWx5XG5cbiAgZnVuY3Rpb24gc29ydChtb2RpZmllcikge1xuICAgIHZpc2l0ZWQuYWRkKG1vZGlmaWVyLm5hbWUpO1xuICAgIHZhciByZXF1aXJlcyA9IFtdLmNvbmNhdChtb2RpZmllci5yZXF1aXJlcyB8fCBbXSwgbW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cyB8fCBbXSk7XG4gICAgcmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICBpZiAoIXZpc2l0ZWQuaGFzKGRlcCkpIHtcbiAgICAgICAgdmFyIGRlcE1vZGlmaWVyID0gbWFwLmdldChkZXApO1xuXG4gICAgICAgIGlmIChkZXBNb2RpZmllcikge1xuICAgICAgICAgIHNvcnQoZGVwTW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmVzdWx0LnB1c2gobW9kaWZpZXIpO1xuICB9XG5cbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgaWYgKCF2aXNpdGVkLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgLy8gY2hlY2sgZm9yIHZpc2l0ZWQgb2JqZWN0XG4gICAgICBzb3J0KG1vZGlmaWVyKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcmRlck1vZGlmaWVycyhtb2RpZmllcnMpIHtcbiAgLy8gb3JkZXIgYmFzZWQgb24gZGVwZW5kZW5jaWVzXG4gIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXIobW9kaWZpZXJzKTsgLy8gb3JkZXIgYmFzZWQgb24gcGhhc2VcblxuICByZXR1cm4gbW9kaWZpZXJQaGFzZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBoYXNlKSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQob3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICByZXR1cm4gbW9kaWZpZXIucGhhc2UgPT09IHBoYXNlO1xuICAgIH0pKTtcbiAgfSwgW10pO1xufSIsImltcG9ydCBnZXRDb21wb3NpdGVSZWN0IGZyb20gXCIuL2RvbS11dGlscy9nZXRDb21wb3NpdGVSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGxpc3RTY3JvbGxQYXJlbnRzIGZyb20gXCIuL2RvbS11dGlscy9saXN0U2Nyb2xsUGFyZW50cy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgb3JkZXJNb2RpZmllcnMgZnJvbSBcIi4vdXRpbHMvb3JkZXJNb2RpZmllcnMuanNcIjtcbmltcG9ydCBkZWJvdW5jZSBmcm9tIFwiLi91dGlscy9kZWJvdW5jZS5qc1wiO1xuaW1wb3J0IG1lcmdlQnlOYW1lIGZyb20gXCIuL3V0aWxzL21lcmdlQnlOYW1lLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7XG52YXIgREVGQVVMVF9PUFRJT05TID0ge1xuICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICBtb2RpZmllcnM6IFtdLFxuICBzdHJhdGVneTogJ2Fic29sdXRlJ1xufTtcblxuZnVuY3Rpb24gYXJlVmFsaWRFbGVtZW50cygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiAhYXJncy5zb21lKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuICEoZWxlbWVudCAmJiB0eXBlb2YgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPT09ICdmdW5jdGlvbicpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHBlckdlbmVyYXRvcihnZW5lcmF0b3JPcHRpb25zKSB7XG4gIGlmIChnZW5lcmF0b3JPcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBnZW5lcmF0b3JPcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX2dlbmVyYXRvck9wdGlvbnMgPSBnZW5lcmF0b3JPcHRpb25zLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE1vZGlmaWVycyxcbiAgICAgIGRlZmF1bHRNb2RpZmllcnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPT09IHZvaWQgMCA/IFtdIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRPcHRpb25zLFxuICAgICAgZGVmYXVsdE9wdGlvbnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID09PSB2b2lkIDAgPyBERUZBVUxUX09QVElPTlMgOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyO1xuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlUG9wcGVyKHJlZmVyZW5jZSwgcG9wcGVyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuICAgIH1cblxuICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICBvcmRlcmVkTW9kaWZpZXJzOiBbXSxcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgZGVmYXVsdE9wdGlvbnMpLFxuICAgICAgbW9kaWZpZXJzRGF0YToge30sXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICByZWZlcmVuY2U6IHJlZmVyZW5jZSxcbiAgICAgICAgcG9wcGVyOiBwb3BwZXJcbiAgICAgIH0sXG4gICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9O1xuICAgIHZhciBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgdmFyIGlzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdmFyIGluc3RhbmNlID0ge1xuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgc2V0T3B0aW9uczogZnVuY3Rpb24gc2V0T3B0aW9ucyhzZXRPcHRpb25zQWN0aW9uKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gdHlwZW9mIHNldE9wdGlvbnNBY3Rpb24gPT09ICdmdW5jdGlvbicgPyBzZXRPcHRpb25zQWN0aW9uKHN0YXRlLm9wdGlvbnMpIDogc2V0T3B0aW9uc0FjdGlvbjtcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICBzdGF0ZS5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIHN0YXRlLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICBzdGF0ZS5zY3JvbGxQYXJlbnRzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogaXNFbGVtZW50KHJlZmVyZW5jZSkgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UpIDogcmVmZXJlbmNlLmNvbnRleHRFbGVtZW50ID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlLmNvbnRleHRFbGVtZW50KSA6IFtdLFxuICAgICAgICAgIHBvcHBlcjogbGlzdFNjcm9sbFBhcmVudHMocG9wcGVyKVxuICAgICAgICB9OyAvLyBPcmRlcnMgdGhlIG1vZGlmaWVycyBiYXNlZCBvbiB0aGVpciBkZXBlbmRlbmNpZXMgYW5kIGBwaGFzZWBcbiAgICAgICAgLy8gcHJvcGVydGllc1xuXG4gICAgICAgIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJNb2RpZmllcnMobWVyZ2VCeU5hbWUoW10uY29uY2F0KGRlZmF1bHRNb2RpZmllcnMsIHN0YXRlLm9wdGlvbnMubW9kaWZpZXJzKSkpOyAvLyBTdHJpcCBvdXQgZGlzYWJsZWQgbW9kaWZpZXJzXG5cbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgcmV0dXJuIG0uZW5hYmxlZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJ1bk1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2UudXBkYXRlKCk7XG4gICAgICB9LFxuICAgICAgLy8gU3luYyB1cGRhdGUg4oCTIGl0IHdpbGwgYWx3YXlzIGJlIGV4ZWN1dGVkLCBldmVuIGlmIG5vdCBuZWNlc3NhcnkuIFRoaXNcbiAgICAgIC8vIGlzIHVzZWZ1bCBmb3IgbG93IGZyZXF1ZW5jeSB1cGRhdGVzIHdoZXJlIHN5bmMgYmVoYXZpb3Igc2ltcGxpZmllcyB0aGVcbiAgICAgIC8vIGxvZ2ljLlxuICAgICAgLy8gRm9yIGhpZ2ggZnJlcXVlbmN5IHVwZGF0ZXMgKGUuZy4gYHJlc2l6ZWAgYW5kIGBzY3JvbGxgIGV2ZW50cyksIGFsd2F5c1xuICAgICAgLy8gcHJlZmVyIHRoZSBhc3luYyBQb3BwZXIjdXBkYXRlIG1ldGhvZFxuICAgICAgZm9yY2VVcGRhdGU6IGZ1bmN0aW9uIGZvcmNlVXBkYXRlKCkge1xuICAgICAgICBpZiAoaXNEZXN0cm95ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3N0YXRlJGVsZW1lbnRzID0gc3RhdGUuZWxlbWVudHMsXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBfc3RhdGUkZWxlbWVudHMucmVmZXJlbmNlLFxuICAgICAgICAgICAgcG9wcGVyID0gX3N0YXRlJGVsZW1lbnRzLnBvcHBlcjsgLy8gRG9uJ3QgcHJvY2VlZCBpZiBgcmVmZXJlbmNlYCBvciBgcG9wcGVyYCBhcmUgbm90IHZhbGlkIGVsZW1lbnRzXG4gICAgICAgIC8vIGFueW1vcmVcblxuICAgICAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIFN0b3JlIHRoZSByZWZlcmVuY2UgYW5kIHBvcHBlciByZWN0cyB0byBiZSByZWFkIGJ5IG1vZGlmaWVyc1xuXG5cbiAgICAgICAgc3RhdGUucmVjdHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBnZXRDb21wb3NpdGVSZWN0KHJlZmVyZW5jZSwgZ2V0T2Zmc2V0UGFyZW50KHBvcHBlciksIHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3kgPT09ICdmaXhlZCcpLFxuICAgICAgICAgIHBvcHBlcjogZ2V0TGF5b3V0UmVjdChwb3BwZXIpXG4gICAgICAgIH07IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIHJlc2V0IHRoZSBjdXJyZW50IHVwZGF0ZSBjeWNsZS4gVGhlXG4gICAgICAgIC8vIG1vc3QgY29tbW9uIHVzZSBjYXNlIGZvciB0aGlzIGlzIHRoZSBgZmxpcGAgbW9kaWZpZXIgY2hhbmdpbmcgdGhlXG4gICAgICAgIC8vIHBsYWNlbWVudCwgd2hpY2ggdGhlbiBuZWVkcyB0byByZS1ydW4gYWxsIHRoZSBtb2RpZmllcnMsIGJlY2F1c2UgdGhlXG4gICAgICAgIC8vIGxvZ2ljIHdhcyBwcmV2aW91c2x5IHJhbiBmb3IgdGhlIHByZXZpb3VzIHBsYWNlbWVudCBhbmQgaXMgdGhlcmVmb3JlXG4gICAgICAgIC8vIHN0YWxlL2luY29ycmVjdFxuXG4gICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50OyAvLyBPbiBlYWNoIHVwZGF0ZSBjeWNsZSwgdGhlIGBtb2RpZmllcnNEYXRhYCBwcm9wZXJ0eSBmb3IgZWFjaCBtb2RpZmllclxuICAgICAgICAvLyBpcyBmaWxsZWQgd2l0aCB0aGUgaW5pdGlhbCBkYXRhIHNwZWNpZmllZCBieSB0aGUgbW9kaWZpZXIuIFRoaXMgbWVhbnNcbiAgICAgICAgLy8gaXQgZG9lc24ndCBwZXJzaXN0IGFuZCBpcyBmcmVzaCBvbiBlYWNoIHVwZGF0ZS5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHBlcnNpc3RlbnQgZGF0YSwgdXNlIGAke25hbWV9I3BlcnNpc3RlbnRgXG5cbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgICAgIHJldHVybiBzdGF0ZS5tb2RpZmllcnNEYXRhW21vZGlmaWVyLm5hbWVdID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kaWZpZXIuZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGlmIChzdGF0ZS5yZXNldCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIGluZGV4ID0gLTE7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX3N0YXRlJG9yZGVyZWRNb2RpZmllID0gc3RhdGUub3JkZXJlZE1vZGlmaWVyc1tpbmRleF0sXG4gICAgICAgICAgICAgIGZuID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLmZuLFxuICAgICAgICAgICAgICBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm9wdGlvbnMsXG4gICAgICAgICAgICAgIF9vcHRpb25zID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9PT0gdm9pZCAwID8ge30gOiBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyLFxuICAgICAgICAgICAgICBuYW1lID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm5hbWU7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IGZuKHtcbiAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgICBvcHRpb25zOiBfb3B0aW9ucyxcbiAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlXG4gICAgICAgICAgICB9KSB8fCBzdGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBBc3luYyBhbmQgb3B0aW1pc3RpY2FsbHkgb3B0aW1pemVkIHVwZGF0ZSDigJMgaXQgd2lsbCBub3QgYmUgZXhlY3V0ZWQgaWZcbiAgICAgIC8vIG5vdCBuZWNlc3NhcnkgKGRlYm91bmNlZCB0byBydW4gYXQgbW9zdCBvbmNlLXBlci10aWNrKVxuICAgICAgdXBkYXRlOiBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgIGluc3RhbmNlLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgcmVzb2x2ZShzdGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSksXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIGlzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIGluc3RhbmNlLnNldE9wdGlvbnMob3B0aW9ucykudGhlbihmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIGlmICghaXNEZXN0cm95ZWQgJiYgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKSB7XG4gICAgICAgIG9wdGlvbnMub25GaXJzdFVwZGF0ZShzdGF0ZSk7XG4gICAgICB9XG4gICAgfSk7IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvZGUgYmVmb3JlIHRoZSBmaXJzdFxuICAgIC8vIHVwZGF0ZSBjeWNsZSBydW5zLiBUaGV5IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIHVwZGF0ZVxuICAgIC8vIGN5Y2xlLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGEgbW9kaWZpZXIgYWRkcyBzb21lIHBlcnNpc3RlbnQgZGF0YSB0aGF0XG4gICAgLy8gb3RoZXIgbW9kaWZpZXJzIG5lZWQgdG8gdXNlLCBidXQgdGhlIG1vZGlmaWVyIGlzIHJ1biBhZnRlciB0aGUgZGVwZW5kZW50XG4gICAgLy8gb25lLlxuXG4gICAgZnVuY3Rpb24gcnVuTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgICAgICAgX3JlZiRvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgICAgICAgb3B0aW9ucyA9IF9yZWYkb3B0aW9ucyA9PT0gdm9pZCAwID8ge30gOiBfcmVmJG9wdGlvbnMsXG4gICAgICAgICAgICBlZmZlY3QgPSBfcmVmLmVmZmVjdDtcblxuICAgICAgICBpZiAodHlwZW9mIGVmZmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhciBjbGVhbnVwRm4gPSBlZmZlY3Qoe1xuICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBub29wRm4gPSBmdW5jdGlvbiBub29wRm4oKSB7fTtcblxuICAgICAgICAgIGVmZmVjdENsZWFudXBGbnMucHVzaChjbGVhbnVwRm4gfHwgbm9vcEZuKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgICB9KTtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH07XG59XG5leHBvcnQgdmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3IoKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBkZXRlY3RPdmVyZmxvdyB9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlKGZuKSB7XG4gIHZhciBwZW5kaW5nO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghcGVuZGluZykge1xuICAgICAgcGVuZGluZyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBlbmRpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgcmVzb2x2ZShmbigpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGVuZGluZztcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZUJ5TmFtZShtb2RpZmllcnMpIHtcbiAgdmFyIG1lcmdlZCA9IG1vZGlmaWVycy5yZWR1Y2UoZnVuY3Rpb24gKG1lcmdlZCwgY3VycmVudCkge1xuICAgIHZhciBleGlzdGluZyA9IG1lcmdlZFtjdXJyZW50Lm5hbWVdO1xuICAgIG1lcmdlZFtjdXJyZW50Lm5hbWVdID0gZXhpc3RpbmcgPyBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZywgY3VycmVudCwge1xuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3Rpbmcub3B0aW9ucywgY3VycmVudC5vcHRpb25zKSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLmRhdGEsIGN1cnJlbnQuZGF0YSlcbiAgICB9KSA6IGN1cnJlbnQ7XG4gICAgcmV0dXJuIG1lcmdlZDtcbiAgfSwge30pOyAvLyBJRTExIGRvZXMgbm90IHN1cHBvcnQgT2JqZWN0LnZhbHVlc1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyhtZXJnZWQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIG1lcmdlZFtrZXldO1xuICB9KTtcbn0iLCJpbXBvcnQgeyBwb3BwZXJHZW5lcmF0b3IsIGRldGVjdE92ZXJmbG93IH0gZnJvbSBcIi4vY3JlYXRlUG9wcGVyLmpzXCI7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vbW9kaWZpZXJzL2V2ZW50TGlzdGVuZXJzLmpzXCI7XG5pbXBvcnQgcG9wcGVyT2Zmc2V0cyBmcm9tIFwiLi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanNcIjtcbmltcG9ydCBhcHBseVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanNcIjtcbnZhciBkZWZhdWx0TW9kaWZpZXJzID0gW2V2ZW50TGlzdGVuZXJzLCBwb3BwZXJPZmZzZXRzLCBjb21wdXRlU3R5bGVzLCBhcHBseVN0eWxlc107XG52YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XG4gIGRlZmF1bHRNb2RpZmllcnM6IGRlZmF1bHRNb2RpZmllcnNcbn0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciwgcG9wcGVyR2VuZXJhdG9yLCBkZWZhdWx0TW9kaWZpZXJzLCBkZXRlY3RPdmVyZmxvdyB9OyIsImltcG9ydCB7IHBvcHBlckdlbmVyYXRvciwgZGV0ZWN0T3ZlcmZsb3cgfSBmcm9tIFwiLi9jcmVhdGVQb3BwZXIuanNcIjtcbmltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9tb2RpZmllcnMvZXZlbnRMaXN0ZW5lcnMuanNcIjtcbmltcG9ydCBwb3BwZXJPZmZzZXRzIGZyb20gXCIuL21vZGlmaWVycy9wb3BwZXJPZmZzZXRzLmpzXCI7XG5pbXBvcnQgY29tcHV0ZVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvY29tcHV0ZVN0eWxlcy5qc1wiO1xuaW1wb3J0IGFwcGx5U3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9hcHBseVN0eWxlcy5qc1wiO1xuaW1wb3J0IG9mZnNldCBmcm9tIFwiLi9tb2RpZmllcnMvb2Zmc2V0LmpzXCI7XG5pbXBvcnQgZmxpcCBmcm9tIFwiLi9tb2RpZmllcnMvZmxpcC5qc1wiO1xuaW1wb3J0IHByZXZlbnRPdmVyZmxvdyBmcm9tIFwiLi9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgYXJyb3cgZnJvbSBcIi4vbW9kaWZpZXJzL2Fycm93LmpzXCI7XG5pbXBvcnQgaGlkZSBmcm9tIFwiLi9tb2RpZmllcnMvaGlkZS5qc1wiO1xudmFyIGRlZmF1bHRNb2RpZmllcnMgPSBbZXZlbnRMaXN0ZW5lcnMsIHBvcHBlck9mZnNldHMsIGNvbXB1dGVTdHlsZXMsIGFwcGx5U3R5bGVzLCBvZmZzZXQsIGZsaXAsIHByZXZlbnRPdmVyZmxvdywgYXJyb3csIGhpZGVdO1xudmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3Ioe1xuICBkZWZhdWx0TW9kaWZpZXJzOiBkZWZhdWx0TW9kaWZpZXJzXG59KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIsIHBvcHBlckdlbmVyYXRvciwgZGVmYXVsdE1vZGlmaWVycywgZGV0ZWN0T3ZlcmZsb3cgfTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIgYXMgY3JlYXRlUG9wcGVyTGl0ZSB9IGZyb20gXCIuL3BvcHBlci1saXRlLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0ICogZnJvbSBcIi4vbW9kaWZpZXJzL2luZGV4LmpzXCI7IiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGRyb3Bkb3duLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICogYXMgUG9wcGVyIGZyb20gJ0Bwb3BwZXJqcy9jb3JlJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGV4ZWN1dGUsXG4gIGdldEVsZW1lbnQsXG4gIGdldE5leHRBY3RpdmVFbGVtZW50LFxuICBpc0Rpc2FibGVkLFxuICBpc0VsZW1lbnQsXG4gIGlzUlRMLFxuICBpc1Zpc2libGUsXG4gIG5vb3Bcbn0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnZHJvcGRvd24nXG5jb25zdCBEQVRBX0tFWSA9ICdicy5kcm9wZG93bidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBFU0NBUEVfS0VZID0gJ0VzY2FwZSdcbmNvbnN0IFRBQl9LRVkgPSAnVGFiJ1xuY29uc3QgQVJST1dfVVBfS0VZID0gJ0Fycm93VXAnXG5jb25zdCBBUlJPV19ET1dOX0tFWSA9ICdBcnJvd0Rvd24nXG5jb25zdCBSSUdIVF9NT1VTRV9CVVRUT04gPSAyIC8vIE1vdXNlRXZlbnQuYnV0dG9uIHZhbHVlIGZvciB0aGUgc2Vjb25kYXJ5IGJ1dHRvbiwgdXN1YWxseSB0aGUgcmlnaHQgYnV0dG9uXG5cbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSA9IGBrZXlkb3duJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfS0VZVVBfREFUQV9BUEkgPSBga2V5dXAke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QVVAgPSAnZHJvcHVwJ1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QRU5EID0gJ2Ryb3BlbmQnXG5jb25zdCBDTEFTU19OQU1FX0RST1BTVEFSVCA9ICdkcm9wc3RhcnQnXG5jb25zdCBDTEFTU19OQU1FX0RST1BVUF9DRU5URVIgPSAnZHJvcHVwLWNlbnRlcidcbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fQ0VOVEVSID0gJ2Ryb3Bkb3duLWNlbnRlcidcblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIl06bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCknXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TSE9XTiA9IGAke1NFTEVDVE9SX0RBVEFfVE9HR0xFfS4ke0NMQVNTX05BTUVfU0hPV31gXG5jb25zdCBTRUxFQ1RPUl9NRU5VID0gJy5kcm9wZG93bi1tZW51J1xuY29uc3QgU0VMRUNUT1JfTkFWQkFSID0gJy5uYXZiYXInXG5jb25zdCBTRUxFQ1RPUl9OQVZCQVJfTkFWID0gJy5uYXZiYXItbmF2J1xuY29uc3QgU0VMRUNUT1JfVklTSUJMRV9JVEVNUyA9ICcuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSdcblxuY29uc3QgUExBQ0VNRU5UX1RPUCA9IGlzUlRMKCkgPyAndG9wLWVuZCcgOiAndG9wLXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX1RPUEVORCA9IGlzUlRMKCkgPyAndG9wLXN0YXJ0JyA6ICd0b3AtZW5kJ1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTSA9IGlzUlRMKCkgPyAnYm90dG9tLWVuZCcgOiAnYm90dG9tLXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTUVORCA9IGlzUlRMKCkgPyAnYm90dG9tLXN0YXJ0JyA6ICdib3R0b20tZW5kJ1xuY29uc3QgUExBQ0VNRU5UX1JJR0hUID0gaXNSVEwoKSA/ICdsZWZ0LXN0YXJ0JyA6ICdyaWdodC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9MRUZUID0gaXNSVEwoKSA/ICdyaWdodC1zdGFydCcgOiAnbGVmdC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9UT1BDRU5URVIgPSAndG9wJ1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTUNFTlRFUiA9ICdib3R0b20nXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGF1dG9DbG9zZTogdHJ1ZSxcbiAgYm91bmRhcnk6ICdjbGlwcGluZ1BhcmVudHMnLFxuICBkaXNwbGF5OiAnZHluYW1pYycsXG4gIG9mZnNldDogWzAsIDJdLFxuICBwb3BwZXJDb25maWc6IG51bGwsXG4gIHJlZmVyZW5jZTogJ3RvZ2dsZSdcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGF1dG9DbG9zZTogJyhib29sZWFufHN0cmluZyknLFxuICBib3VuZGFyeTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICBkaXNwbGF5OiAnc3RyaW5nJyxcbiAgb2Zmc2V0OiAnKGFycmF5fHN0cmluZ3xmdW5jdGlvbiknLFxuICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3R8ZnVuY3Rpb24pJyxcbiAgcmVmZXJlbmNlOiAnKHN0cmluZ3xlbGVtZW50fG9iamVjdCknXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIERyb3Bkb3duIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgLy8gZHJvcGRvd24gd3JhcHBlclxuICAgIC8vIFRPRE86IHY2IHJldmVydCAjMzcwMTEgJiBjaGFuZ2UgbWFya3VwIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzUuMy9mb3Jtcy9pbnB1dC1ncm91cC9cbiAgICB0aGlzLl9tZW51ID0gU2VsZWN0b3JFbmdpbmUubmV4dCh0aGlzLl9lbGVtZW50LCBTRUxFQ1RPUl9NRU5VKVswXSB8fFxuICAgICAgU2VsZWN0b3JFbmdpbmUucHJldih0aGlzLl9lbGVtZW50LCBTRUxFQ1RPUl9NRU5VKVswXSB8fFxuICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9NRU5VLCB0aGlzLl9wYXJlbnQpXG4gICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICB0b2dnbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24oKSA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KClcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkgfHwgdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHJlbGF0ZWRUYXJnZXQpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2NyZWF0ZVBvcHBlcigpXG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgIXRoaXMuX3BhcmVudC5jbG9zZXN0KFNFTEVDVE9SX05BVkJBUl9OQVYpKSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICB0aGlzLl9tZW51LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmIChpc0Rpc2FibGVkKHRoaXMuX2VsZW1lbnQpIHx8ICF0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuXG4gICAgdGhpcy5fY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFLCByZWxhdGVkVGFyZ2V0KVxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgdGhpcy5fbWVudS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcbiAgICBNYW5pcHVsYXRvci5yZW1vdmVEYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInKVxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTiwgcmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0gc3VwZXIuX2dldENvbmZpZyhjb25maWcpXG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWZlcmVuY2UgPT09ICdvYmplY3QnICYmICFpc0VsZW1lbnQoY29uZmlnLnJlZmVyZW5jZSkgJiZcbiAgICAgIHR5cGVvZiBjb25maWcucmVmZXJlbmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gJ2Z1bmN0aW9uJ1xuICAgICkge1xuICAgICAgLy8gUG9wcGVyIHZpcnR1YWwgZWxlbWVudHMgcmVxdWlyZSBhIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBtZXRob2RcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7TkFNRS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwicmVmZXJlbmNlXCIgcHJvdmlkZWQgdHlwZSBcIm9iamVjdFwiIHdpdGhvdXQgYSByZXF1aXJlZCBcImdldEJvdW5kaW5nQ2xpZW50UmVjdFwiIG1ldGhvZC5gKVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9jcmVhdGVQb3BwZXIoKSB7XG4gICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIGRyb3Bkb3ducyByZXF1aXJlIFBvcHBlciAoaHR0cHM6Ly9wb3BwZXIuanMub3JnKScpXG4gICAgfVxuXG4gICAgbGV0IHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ3BhcmVudCcpIHtcbiAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9wYXJlbnRcbiAgICB9IGVsc2UgaWYgKGlzRWxlbWVudCh0aGlzLl9jb25maWcucmVmZXJlbmNlKSkge1xuICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IGdldEVsZW1lbnQodGhpcy5fY29uZmlnLnJlZmVyZW5jZSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2VcbiAgICB9XG5cbiAgICBjb25zdCBwb3BwZXJDb25maWcgPSB0aGlzLl9nZXRQb3BwZXJDb25maWcoKVxuICAgIHRoaXMuX3BvcHBlciA9IFBvcHBlci5jcmVhdGVQb3BwZXIocmVmZXJlbmNlRWxlbWVudCwgdGhpcy5fbWVudSwgcG9wcGVyQ29uZmlnKVxuICB9XG5cbiAgX2lzU2hvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX21lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVylcbiAgfVxuXG4gIF9nZXRQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgcGFyZW50RHJvcGRvd24gPSB0aGlzLl9wYXJlbnRcblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRU5EKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9SSUdIVFxuICAgIH1cblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QU1RBUlQpKSB7XG4gICAgICByZXR1cm4gUExBQ0VNRU5UX0xFRlRcbiAgICB9XG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUFVQX0NFTlRFUikpIHtcbiAgICAgIHJldHVybiBQTEFDRU1FTlRfVE9QQ0VOVEVSXG4gICAgfVxuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BET1dOX0NFTlRFUikpIHtcbiAgICAgIHJldHVybiBQTEFDRU1FTlRfQk9UVE9NQ0VOVEVSXG4gICAgfVxuXG4gICAgLy8gV2UgbmVlZCB0byB0cmltIHRoZSB2YWx1ZSBiZWNhdXNlIGN1c3RvbSBwcm9wZXJ0aWVzIGNhbiBhbHNvIGluY2x1ZGUgc3BhY2VzXG4gICAgY29uc3QgaXNFbmQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX21lbnUpLmdldFByb3BlcnR5VmFsdWUoJy0tYnMtcG9zaXRpb24nKS50cmltKCkgPT09ICdlbmQnXG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUFVQKSkge1xuICAgICAgcmV0dXJuIGlzRW5kID8gUExBQ0VNRU5UX1RPUEVORCA6IFBMQUNFTUVOVF9UT1BcbiAgICB9XG5cbiAgICByZXR1cm4gaXNFbmQgPyBQTEFDRU1FTlRfQk9UVE9NRU5EIDogUExBQ0VNRU5UX0JPVFRPTVxuICB9XG5cbiAgX2RldGVjdE5hdmJhcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX05BVkJBUikgIT09IG51bGxcbiAgfVxuXG4gIF9nZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgeyBvZmZzZXQgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gb2Zmc2V0LnNwbGl0KCcsJykubWFwKHZhbHVlID0+IE51bWJlci5wYXJzZUludCh2YWx1ZSwgMTApKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gcG9wcGVyRGF0YSA9PiBvZmZzZXQocG9wcGVyRGF0YSwgdGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfZ2V0UG9wcGVyQ29uZmlnKCkge1xuICAgIGNvbnN0IGRlZmF1bHRCc1BvcHBlckNvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogdGhpcy5fZ2V0UGxhY2VtZW50KCksXG4gICAgICBtb2RpZmllcnM6IFt7XG4gICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgYm91bmRhcnk6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KClcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIFBvcHBlciBpZiB3ZSBoYXZlIGEgc3RhdGljIGRpc3BsYXkgb3IgRHJvcGRvd24gaXMgaW4gTmF2YmFyXG4gICAgaWYgKHRoaXMuX2luTmF2YmFyIHx8IHRoaXMuX2NvbmZpZy5kaXNwbGF5ID09PSAnc3RhdGljJykge1xuICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZSh0aGlzLl9tZW51LCAncG9wcGVyJywgJ3N0YXRpYycpIC8vIFRPRE86IHY2IHJlbW92ZVxuICAgICAgZGVmYXVsdEJzUG9wcGVyQ29uZmlnLm1vZGlmaWVycyA9IFt7XG4gICAgICAgIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICB9XVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5kZWZhdWx0QnNQb3BwZXJDb25maWcsXG4gICAgICAuLi5leGVjdXRlKHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcsIFtkZWZhdWx0QnNQb3BwZXJDb25maWddKVxuICAgIH1cbiAgfVxuXG4gIF9zZWxlY3RNZW51SXRlbSh7IGtleSwgdGFyZ2V0IH0pIHtcbiAgICBjb25zdCBpdGVtcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfVklTSUJMRV9JVEVNUywgdGhpcy5fbWVudSkuZmlsdGVyKGVsZW1lbnQgPT4gaXNWaXNpYmxlKGVsZW1lbnQpKVxuXG4gICAgaWYgKCFpdGVtcy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIGlmIHRhcmdldCBpc24ndCBpbmNsdWRlZCBpbiBpdGVtcyAoZS5nLiB3aGVuIGV4cGFuZGluZyB0aGUgZHJvcGRvd24pXG4gICAgLy8gYWxsb3cgY3ljbGluZyB0byBnZXQgdGhlIGxhc3QgaXRlbSBpbiBjYXNlIGtleSBlcXVhbHMgQVJST1dfVVBfS0VZXG4gICAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQoaXRlbXMsIHRhcmdldCwga2V5ID09PSBBUlJPV19ET1dOX0tFWSwgIWl0ZW1zLmluY2x1ZGVzKHRhcmdldCkpLmZvY3VzKClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBjbGVhck1lbnVzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gUklHSFRfTU9VU0VfQlVUVE9OIHx8IChldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LmtleSAhPT0gVEFCX0tFWSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG9wZW5Ub2dnbGVzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TSE9XTilcblxuICAgIGZvciAoY29uc3QgdG9nZ2xlIG9mIG9wZW5Ub2dnbGVzKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gRHJvcGRvd24uZ2V0SW5zdGFuY2UodG9nZ2xlKVxuICAgICAgaWYgKCFjb250ZXh0IHx8IGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpXG4gICAgICBjb25zdCBpc01lbnVUYXJnZXQgPSBjb21wb3NlZFBhdGguaW5jbHVkZXMoY29udGV4dC5fbWVudSlcbiAgICAgIGlmIChcbiAgICAgICAgY29tcG9zZWRQYXRoLmluY2x1ZGVzKGNvbnRleHQuX2VsZW1lbnQpIHx8XG4gICAgICAgIChjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSAnaW5zaWRlJyAmJiAhaXNNZW51VGFyZ2V0KSB8fFxuICAgICAgICAoY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gJ291dHNpZGUnICYmIGlzTWVudVRhcmdldClcbiAgICAgICkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyBUYWIgbmF2aWdhdGlvbiB0aHJvdWdoIHRoZSBkcm9wZG93biBtZW51IG9yIGV2ZW50cyBmcm9tIGNvbnRhaW5lZCBpbnB1dHMgc2hvdWxkbid0IGNsb3NlIHRoZSBtZW51XG4gICAgICBpZiAoY29udGV4dC5fbWVudS5jb250YWlucyhldmVudC50YXJnZXQpICYmICgoZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC5rZXkgPT09IFRBQl9LRVkpIHx8IC9pbnB1dHxzZWxlY3R8b3B0aW9ufHRleHRhcmVhfGZvcm0vaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHsgcmVsYXRlZFRhcmdldDogY29udGV4dC5fZWxlbWVudCB9XG5cbiAgICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQuY2xpY2tFdmVudCA9IGV2ZW50XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBkYXRhQXBpS2V5ZG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICAvLyBJZiBub3QgYW4gVVAgfCBET1dOIHwgRVNDQVBFIGtleSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gSWYgaW5wdXQvdGV4dGFyZWEgJiYgaWYga2V5IGlzIG90aGVyIHRoYW4gRVNDQVBFID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcblxuICAgIGNvbnN0IGlzSW5wdXQgPSAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKVxuICAgIGNvbnN0IGlzRXNjYXBlRXZlbnQgPSBldmVudC5rZXkgPT09IEVTQ0FQRV9LRVlcbiAgICBjb25zdCBpc1VwT3JEb3duRXZlbnQgPSBbQVJST1dfVVBfS0VZLCBBUlJPV19ET1dOX0tFWV0uaW5jbHVkZXMoZXZlbnQua2V5KVxuXG4gICAgaWYgKCFpc1VwT3JEb3duRXZlbnQgJiYgIWlzRXNjYXBlRXZlbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc0lucHV0ICYmICFpc0VzY2FwZUV2ZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyBUT0RPOiB2NiByZXZlcnQgIzM3MDExICYgY2hhbmdlIG1hcmt1cCBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy81LjMvZm9ybXMvaW5wdXQtZ3JvdXAvXG4gICAgY29uc3QgZ2V0VG9nZ2xlQnV0dG9uID0gdGhpcy5tYXRjaGVzKFNFTEVDVE9SX0RBVEFfVE9HR0xFKSA/XG4gICAgICB0aGlzIDpcbiAgICAgIChTZWxlY3RvckVuZ2luZS5wcmV2KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFKVswXSB8fFxuICAgICAgICBTZWxlY3RvckVuZ2luZS5uZXh0KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFKVswXSB8fFxuICAgICAgICBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBldmVudC5kZWxlZ2F0ZVRhcmdldC5wYXJlbnROb2RlKSlcblxuICAgIGNvbnN0IGluc3RhbmNlID0gRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZShnZXRUb2dnbGVCdXR0b24pXG5cbiAgICBpZiAoaXNVcE9yRG93bkV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgaW5zdGFuY2Uuc2hvdygpXG4gICAgICBpbnN0YW5jZS5fc2VsZWN0TWVudUl0ZW0oZXZlbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2UuX2lzU2hvd24oKSkgeyAvLyBlbHNlIGlzIGVzY2FwZSBhbmQgd2UgY2hlY2sgaWYgaXQgaXMgc2hvd25cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBpbnN0YW5jZS5oaWRlKClcbiAgICAgIGdldFRvZ2dsZUJ1dHRvbi5mb2N1cygpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBEcm9wZG93bi5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX01FTlUsIERyb3Bkb3duLmRhdGFBcGlLZXlkb3duSGFuZGxlcilcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIERyb3Bkb3duLmNsZWFyTWVudXMpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWVVQX0RBVEFfQVBJLCBEcm9wZG93bi5jbGVhck1lbnVzKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcykudG9nZ2xlKClcbn0pXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKERyb3Bkb3duKVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvYmFja2Ryb3AuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL2NvbmZpZy5qcydcbmltcG9ydCB7IGV4ZWN1dGUsIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24sIGdldEVsZW1lbnQsIHJlZmxvdyB9IGZyb20gJy4vaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdiYWNrZHJvcCdcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBFVkVOVF9NT1VTRURPV04gPSBgbW91c2Vkb3duLmJzLiR7TkFNRX1gXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGNsYXNzTmFtZTogJ21vZGFsLWJhY2tkcm9wJyxcbiAgY2xpY2tDYWxsYmFjazogbnVsbCxcbiAgaXNBbmltYXRlZDogZmFsc2UsXG4gIGlzVmlzaWJsZTogdHJ1ZSwgLy8gaWYgZmFsc2UsIHdlIHVzZSB0aGUgYmFja2Ryb3AgaGVscGVyIHdpdGhvdXQgYWRkaW5nIGFueSBlbGVtZW50IHRvIHRoZSBkb21cbiAgcm9vdEVsZW1lbnQ6ICdib2R5JyAvLyBnaXZlIHRoZSBjaG9pY2UgdG8gcGxhY2UgYmFja2Ryb3AgdW5kZXIgZGlmZmVyZW50IGVsZW1lbnRzXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICBjbGlja0NhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJyxcbiAgaXNBbmltYXRlZDogJ2Jvb2xlYW4nLFxuICBpc1Zpc2libGU6ICdib29sZWFuJyxcbiAgcm9vdEVsZW1lbnQ6ICcoZWxlbWVudHxzdHJpbmcpJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBCYWNrZHJvcCBleHRlbmRzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2lzQXBwZW5kZWQgPSBmYWxzZVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHNob3coY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5pc1Zpc2libGUpIHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9hcHBlbmQoKVxuXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2dldEVsZW1lbnQoKVxuICAgIGlmICh0aGlzLl9jb25maWcuaXNBbmltYXRlZCkge1xuICAgICAgcmVmbG93KGVsZW1lbnQpXG4gICAgfVxuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgIHRoaXMuX2VtdWxhdGVBbmltYXRpb24oKCkgPT4ge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICB9KVxuICB9XG5cbiAgaGlkZShjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5fY29uZmlnLmlzVmlzaWJsZSkge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2dldEVsZW1lbnQoKS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIHRoaXMuX2VtdWxhdGVBbmltYXRpb24oKCkgPT4ge1xuICAgICAgdGhpcy5kaXNwb3NlKClcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgfSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0FwcGVuZGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFRE9XTilcblxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKClcbiAgICB0aGlzLl9pc0FwcGVuZGVkID0gZmFsc2VcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2dldEVsZW1lbnQoKSB7XG4gICAgaWYgKCF0aGlzLl9lbGVtZW50KSB7XG4gICAgICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBiYWNrZHJvcC5jbGFzc05hbWUgPSB0aGlzLl9jb25maWcuY2xhc3NOYW1lXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpIHtcbiAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBiYWNrZHJvcFxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50XG4gIH1cblxuICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICAvLyB1c2UgZ2V0RWxlbWVudCgpIHdpdGggdGhlIGRlZmF1bHQgXCJib2R5XCIgdG8gZ2V0IGEgZnJlc2ggRWxlbWVudCBvbiBlYWNoIGluc3RhbnRpYXRpb25cbiAgICBjb25maWcucm9vdEVsZW1lbnQgPSBnZXRFbGVtZW50KGNvbmZpZy5yb290RWxlbWVudClcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfYXBwZW5kKCkge1xuICAgIGlmICh0aGlzLl9pc0FwcGVuZGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fZ2V0RWxlbWVudCgpXG4gICAgdGhpcy5fY29uZmlnLnJvb3RFbGVtZW50LmFwcGVuZChlbGVtZW50KVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKGVsZW1lbnQsIEVWRU5UX01PVVNFRE9XTiwgKCkgPT4ge1xuICAgICAgZXhlY3V0ZSh0aGlzLl9jb25maWcuY2xpY2tDYWxsYmFjaylcbiAgICB9KVxuXG4gICAgdGhpcy5faXNBcHBlbmRlZCA9IHRydWVcbiAgfVxuXG4gIF9lbXVsYXRlQW5pbWF0aW9uKGNhbGxiYWNrKSB7XG4gICAgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbihjYWxsYmFjaywgdGhpcy5fZ2V0RWxlbWVudCgpLCB0aGlzLl9jb25maWcuaXNBbmltYXRlZClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZHJvcFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvZm9jdXN0cmFwLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL2NvbmZpZy5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ2ZvY3VzdHJhcCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmZvY3VzdHJhcCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBFVkVOVF9GT0NVU0lOID0gYGZvY3VzaW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX1RBQiA9IGBrZXlkb3duLnRhYiR7RVZFTlRfS0VZfWBcblxuY29uc3QgVEFCX0tFWSA9ICdUYWInXG5jb25zdCBUQUJfTkFWX0ZPUldBUkQgPSAnZm9yd2FyZCdcbmNvbnN0IFRBQl9OQVZfQkFDS1dBUkQgPSAnYmFja3dhcmQnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGF1dG9mb2N1czogdHJ1ZSxcbiAgdHJhcEVsZW1lbnQ6IG51bGwgLy8gVGhlIGVsZW1lbnQgdG8gdHJhcCBmb2N1cyBpbnNpZGUgb2Zcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGF1dG9mb2N1czogJ2Jvb2xlYW4nLFxuICB0cmFwRWxlbWVudDogJ2VsZW1lbnQnXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIEZvY3VzVHJhcCBleHRlbmRzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2VcbiAgICB0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uID0gbnVsbFxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBhY3RpdmF0ZSgpIHtcbiAgICBpZiAodGhpcy5faXNBY3RpdmUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcuYXV0b2ZvY3VzKSB7XG4gICAgICB0aGlzLl9jb25maWcudHJhcEVsZW1lbnQuZm9jdXMoKVxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0tFWSkgLy8gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBmb2N1cyBsb29wXG4gICAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOLCBldmVudCA9PiB0aGlzLl9oYW5kbGVGb2N1c2luKGV2ZW50KSlcbiAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fVEFCLCBldmVudCA9PiB0aGlzLl9oYW5kbGVLZXlkb3duKGV2ZW50KSlcblxuICAgIHRoaXMuX2lzQWN0aXZlID0gdHJ1ZVxuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzQWN0aXZlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfS0VZKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfaGFuZGxlRm9jdXNpbihldmVudCkge1xuICAgIGNvbnN0IHsgdHJhcEVsZW1lbnQgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gZG9jdW1lbnQgfHwgZXZlbnQudGFyZ2V0ID09PSB0cmFwRWxlbWVudCB8fCB0cmFwRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50cyA9IFNlbGVjdG9yRW5naW5lLmZvY3VzYWJsZUNoaWxkcmVuKHRyYXBFbGVtZW50KVxuXG4gICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdHJhcEVsZW1lbnQuZm9jdXMoKVxuICAgIH0gZWxzZSBpZiAodGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbiA9PT0gVEFCX05BVl9CQUNLV0FSRCkge1xuICAgICAgZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoIC0gMV0uZm9jdXMoKVxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50c1swXS5mb2N1cygpXG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUtleWRvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ICE9PSBUQUJfS0VZKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uID0gZXZlbnQuc2hpZnRLZXkgPyBUQUJfTkFWX0JBQ0tXQVJEIDogVEFCX05BVl9GT1JXQVJEXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9jdXNUcmFwXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9zY3JvbGxCYXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi4vZG9tL21hbmlwdWxhdG9yLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4uL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tICcuL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQgPSAnLmZpeGVkLXRvcCwgLmZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkLCAuc3RpY2t5LXRvcCdcbmNvbnN0IFNFTEVDVE9SX1NUSUNLWV9DT05URU5UID0gJy5zdGlja3ktdG9wJ1xuY29uc3QgUFJPUEVSVFlfUEFERElORyA9ICdwYWRkaW5nLXJpZ2h0J1xuY29uc3QgUFJPUEVSVFlfTUFSR0lOID0gJ21hcmdpbi1yaWdodCdcblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgU2Nyb2xsQmFySGVscGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LmJvZHlcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBnZXRXaWR0aCgpIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L2lubmVyV2lkdGgjdXNhZ2Vfbm90ZXNcbiAgICBjb25zdCBkb2N1bWVudFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgcmV0dXJuIE1hdGguYWJzKHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnRXaWR0aClcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKClcbiAgICB0aGlzLl9kaXNhYmxlT3ZlckZsb3coKVxuICAgIC8vIGdpdmUgcGFkZGluZyB0byBlbGVtZW50IHRvIGJhbGFuY2UgdGhlIGhpZGRlbiBzY3JvbGxiYXIgd2lkdGhcbiAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLl9lbGVtZW50LCBQUk9QRVJUWV9QQURESU5HLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlICsgd2lkdGgpXG4gICAgLy8gdHJpY2s6IFdlIGFkanVzdCBwb3NpdGl2ZSBwYWRkaW5nUmlnaHQgYW5kIG5lZ2F0aXZlIG1hcmdpblJpZ2h0IHRvIHN0aWNreS10b3AgZWxlbWVudHMgdG8ga2VlcCBzaG93aW5nIGZ1bGx3aWR0aFxuICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQsIFBST1BFUlRZX1BBRERJTkcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgKyB3aWR0aClcbiAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCwgUFJPUEVSVFlfTUFSR0lOLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlIC0gd2lkdGgpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsICdvdmVyZmxvdycpXG4gICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLl9lbGVtZW50LCBQUk9QRVJUWV9QQURESU5HKVxuICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfRklYRURfQ09OVEVOVCwgUFJPUEVSVFlfUEFERElORylcbiAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX1NUSUNLWV9DT05URU5ULCBQUk9QRVJUWV9NQVJHSU4pXG4gIH1cblxuICBpc092ZXJmbG93aW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldFdpZHRoKCkgPiAwXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9kaXNhYmxlT3ZlckZsb3coKSB7XG4gICAgdGhpcy5fc2F2ZUluaXRpYWxBdHRyaWJ1dGUodGhpcy5fZWxlbWVudCwgJ292ZXJmbG93JylcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgfVxuXG4gIF9zZXRFbGVtZW50QXR0cmlidXRlcyhzZWxlY3Rvciwgc3R5bGVQcm9wZXJ0eSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHRoaXMuZ2V0V2lkdGgoKVxuICAgIGNvbnN0IG1hbmlwdWxhdGlvbkNhbGxCYWNrID0gZWxlbWVudCA9PiB7XG4gICAgICBpZiAoZWxlbWVudCAhPT0gdGhpcy5fZWxlbWVudCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IGVsZW1lbnQuY2xpZW50V2lkdGggKyBzY3JvbGxiYXJXaWR0aCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2F2ZUluaXRpYWxBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSlcbiAgICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoc3R5bGVQcm9wZXJ0eSlcbiAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoc3R5bGVQcm9wZXJ0eSwgYCR7Y2FsbGJhY2soTnVtYmVyLnBhcnNlRmxvYXQoY2FsY3VsYXRlZFZhbHVlKSl9cHhgKVxuICAgIH1cblxuICAgIHRoaXMuX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2soc2VsZWN0b3IsIG1hbmlwdWxhdGlvbkNhbGxCYWNrKVxuICB9XG5cbiAgX3NhdmVJbml0aWFsQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpIHtcbiAgICBjb25zdCBhY3R1YWxWYWx1ZSA9IGVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShzdHlsZVByb3BlcnR5KVxuICAgIGlmIChhY3R1YWxWYWx1ZSkge1xuICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5LCBhY3R1YWxWYWx1ZSlcbiAgICB9XG4gIH1cblxuICBfcmVzZXRFbGVtZW50QXR0cmlidXRlcyhzZWxlY3Rvciwgc3R5bGVQcm9wZXJ0eSkge1xuICAgIGNvbnN0IG1hbmlwdWxhdGlvbkNhbGxCYWNrID0gZWxlbWVudCA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSlcbiAgICAgIC8vIFdlIG9ubHkgd2FudCB0byByZW1vdmUgdGhlIHByb3BlcnR5IGlmIHRoZSB2YWx1ZSBpcyBgbnVsbGA7IHRoZSB2YWx1ZSBjYW4gYWxzbyBiZSB6ZXJvXG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShzdHlsZVByb3BlcnR5KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgTWFuaXB1bGF0b3IucmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KVxuICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShzdHlsZVByb3BlcnR5LCB2YWx1ZSlcbiAgICB9XG5cbiAgICB0aGlzLl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHNlbGVjdG9yLCBtYW5pcHVsYXRpb25DYWxsQmFjaylcbiAgfVxuXG4gIF9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHNlbGVjdG9yLCBjYWxsQmFjaykge1xuICAgIGlmIChpc0VsZW1lbnQoc2VsZWN0b3IpKSB7XG4gICAgICBjYWxsQmFjayhzZWxlY3RvcilcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3Qgc2VsIG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICBjYWxsQmFjayhzZWwpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbEJhckhlbHBlclxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIG1vZGFsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnLi91dGlsL2JhY2tkcm9wLmpzJ1xuaW1wb3J0IHsgZW5hYmxlRGlzbWlzc1RyaWdnZXIgfSBmcm9tICcuL3V0aWwvY29tcG9uZW50LWZ1bmN0aW9ucy5qcydcbmltcG9ydCBGb2N1c1RyYXAgZnJvbSAnLi91dGlsL2ZvY3VzdHJhcC5qcydcbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiwgaXNSVEwsIGlzVmlzaWJsZSwgcmVmbG93IH0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuaW1wb3J0IFNjcm9sbEJhckhlbHBlciBmcm9tICcuL3V0aWwvc2Nyb2xsYmFyLmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnbW9kYWwnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5tb2RhbCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnXG5cbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREVfUFJFVkVOVEVEID0gYGhpZGVQcmV2ZW50ZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9SRVNJWkUgPSBgcmVzaXplJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfRElTTUlTUyA9IGBjbGljay5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VET1dOX0RJU01JU1MgPSBgbW91c2Vkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RJU01JU1MgPSBga2V5ZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfT1BFTiA9ICdtb2RhbC1vcGVuJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfU1RBVElDID0gJ21vZGFsLXN0YXRpYydcblxuY29uc3QgT1BFTl9TRUxFQ1RPUiA9ICcubW9kYWwuc2hvdydcbmNvbnN0IFNFTEVDVE9SX0RJQUxPRyA9ICcubW9kYWwtZGlhbG9nJ1xuY29uc3QgU0VMRUNUT1JfTU9EQUxfQk9EWSA9ICcubW9kYWwtYm9keSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCJdJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBiYWNrZHJvcDogdHJ1ZSxcbiAgZm9jdXM6IHRydWUsXG4gIGtleWJvYXJkOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBiYWNrZHJvcDogJyhib29sZWFufHN0cmluZyknLFxuICBmb2N1czogJ2Jvb2xlYW4nLFxuICBrZXlib2FyZDogJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIE1vZGFsIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX2RpYWxvZyA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfRElBTE9HLCB0aGlzLl9lbGVtZW50KVxuICAgIHRoaXMuX2JhY2tkcm9wID0gdGhpcy5faW5pdGlhbGl6ZUJhY2tEcm9wKClcbiAgICB0aGlzLl9mb2N1c3RyYXAgPSB0aGlzLl9pbml0aWFsaXplRm9jdXNUcmFwKClcbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgIHRoaXMuX3Njcm9sbEJhciA9IG5ldyBTY3JvbGxCYXJIZWxwZXIoKVxuXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywge1xuICAgICAgcmVsYXRlZFRhcmdldFxuICAgIH0pXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSB0cnVlXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZVxuXG4gICAgdGhpcy5fc2Nyb2xsQmFyLmhpZGUoKVxuXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfT1BFTilcblxuICAgIHRoaXMuX2FkanVzdERpYWxvZygpXG5cbiAgICB0aGlzLl9iYWNrZHJvcC5zaG93KCgpID0+IHRoaXMuX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG4gICAgdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCkgPT4gdGhpcy5faGlkZU1vZGFsKCksIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2lzQW5pbWF0ZWQoKSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9mZih3aW5kb3csIEVWRU5UX0tFWSlcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2RpYWxvZywgRVZFTlRfS0VZKVxuXG4gICAgdGhpcy5fYmFja2Ryb3AuZGlzcG9zZSgpXG4gICAgdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKVxuXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICBoYW5kbGVVcGRhdGUoKSB7XG4gICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2luaXRpYWxpemVCYWNrRHJvcCgpIHtcbiAgICByZXR1cm4gbmV3IEJhY2tkcm9wKHtcbiAgICAgIGlzVmlzaWJsZTogQm9vbGVhbih0aGlzLl9jb25maWcuYmFja2Ryb3ApLCAvLyAnc3RhdGljJyBvcHRpb24gd2lsbCBiZSB0cmFuc2xhdGVkIHRvIHRydWUsIGFuZCBib29sZWFucyB3aWxsIGtlZXAgdGhlaXIgdmFsdWUsXG4gICAgICBpc0FuaW1hdGVkOiB0aGlzLl9pc0FuaW1hdGVkKClcbiAgICB9KVxuICB9XG5cbiAgX2luaXRpYWxpemVGb2N1c1RyYXAoKSB7XG4gICAgcmV0dXJuIG5ldyBGb2N1c1RyYXAoe1xuICAgICAgdHJhcEVsZW1lbnQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9KVxuICB9XG5cbiAgX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAvLyB0cnkgdG8gYXBwZW5kIGR5bmFtaWMgbW9kYWxcbiAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpXG4gICAgdGhpcy5fZWxlbWVudC5zY3JvbGxUb3AgPSAwXG5cbiAgICBjb25zdCBtb2RhbEJvZHkgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX01PREFMX0JPRFksIHRoaXMuX2RpYWxvZylcbiAgICBpZiAobW9kYWxCb2R5KSB7XG4gICAgICBtb2RhbEJvZHkuc2Nyb2xsVG9wID0gMFxuICAgIH1cblxuICAgIHJlZmxvdyh0aGlzLl9lbGVtZW50KVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgIGNvbnN0IHRyYW5zaXRpb25Db21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuZm9jdXMpIHtcbiAgICAgICAgdGhpcy5fZm9jdXN0cmFwLmFjdGl2YXRlKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayh0cmFuc2l0aW9uQ29tcGxldGUsIHRoaXMuX2RpYWxvZywgdGhpcy5faXNBbmltYXRlZCgpKVxuICB9XG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOX0RJU01JU1MsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgIT09IEVTQ0FQRV9LRVkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKVxuICAgIH0pXG5cbiAgICBFdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9SRVNJWkUsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9pc1Nob3duICYmICF0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICAvLyBhIGJhZCB0cmljayB0byBzZWdyZWdhdGUgY2xpY2tzIHRoYXQgbWF5IHN0YXJ0IGluc2lkZSBkaWFsb2cgYnV0IGVuZCBvdXRzaWRlLCBhbmQgYXZvaWQgbGlzdGVuIHRvIHNjcm9sbGJhciBjbGlja3NcbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0tfRElTTUlTUywgZXZlbnQyID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2VsZW1lbnQgIT09IGV2ZW50LnRhcmdldCB8fCB0aGlzLl9lbGVtZW50ICE9PSBldmVudDIudGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgICAgIHRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIF9oaWRlTW9kYWwoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKVxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG5cbiAgICB0aGlzLl9iYWNrZHJvcC5oaWRlKCgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX09QRU4pXG4gICAgICB0aGlzLl9yZXNldEFkanVzdG1lbnRzKClcbiAgICAgIHRoaXMuX3Njcm9sbEJhci5yZXNldCgpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfSlcbiAgfVxuXG4gIF9pc0FuaW1hdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpXG4gIH1cblxuICBfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpIHtcbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFX1BSRVZFTlRFRClcbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzTW9kYWxPdmVyZmxvd2luZyA9IHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIGNvbnN0IGluaXRpYWxPdmVyZmxvd1kgPSB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WVxuICAgIC8vIHJldHVybiBpZiB0aGUgZm9sbG93aW5nIGJhY2tncm91bmQgdHJhbnNpdGlvbiBoYXNuJ3QgeWV0IGNvbXBsZXRlZFxuICAgIGlmIChpbml0aWFsT3ZlcmZsb3dZID09PSAnaGlkZGVuJyB8fCB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NUQVRJQykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU1RBVElDKVxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU1RBVElDKVxuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZID0gaW5pdGlhbE92ZXJmbG93WVxuICAgICAgfSwgdGhpcy5fZGlhbG9nKVxuICAgIH0sIHRoaXMuX2RpYWxvZylcblxuICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBmb2xsb3dpbmcgbWV0aG9kcyBhcmUgdXNlZCB0byBoYW5kbGUgb3ZlcmZsb3dpbmcgbW9kYWxzXG4gICAqL1xuXG4gIF9hZGp1c3REaWFsb2coKSB7XG4gICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID0gdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSB0aGlzLl9zY3JvbGxCYXIuZ2V0V2lkdGgoKVxuICAgIGNvbnN0IGlzQm9keU92ZXJmbG93aW5nID0gc2Nyb2xsYmFyV2lkdGggPiAwXG5cbiAgICBpZiAoaXNCb2R5T3ZlcmZsb3dpbmcgJiYgIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSBpc1JUTCgpID8gJ3BhZGRpbmdMZWZ0JyA6ICdwYWRkaW5nUmlnaHQnXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IGAke3Njcm9sbGJhcldpZHRofXB4YFxuICAgIH1cblxuICAgIGlmICghaXNCb2R5T3ZlcmZsb3dpbmcgJiYgaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IGlzUlRMKCkgPyAncGFkZGluZ1JpZ2h0JyA6ICdwYWRkaW5nTGVmdCdcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbcHJvcGVydHldID0gYCR7c2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgfVxuICB9XG5cbiAgX3Jlc2V0QWRqdXN0bWVudHMoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9ICcnXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJ1xuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnLCByZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gTW9kYWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKHJlbGF0ZWRUYXJnZXQpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBjb25zdCB0YXJnZXQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpXG5cbiAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9TSE9XLCBzaG93RXZlbnQgPT4ge1xuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgLy8gb25seSByZWdpc3RlciBmb2N1cyByZXN0b3JlciBpZiBtb2RhbCB3aWxsIGFjdHVhbGx5IGdldCBzaG93blxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX0hJRERFTiwgKCkgPT4ge1xuICAgICAgaWYgKGlzVmlzaWJsZSh0aGlzKSkge1xuICAgICAgICB0aGlzLmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIC8vIGF2b2lkIGNvbmZsaWN0IHdoZW4gY2xpY2tpbmcgbW9kYWwgdG9nZ2xlciB3aGlsZSBhbm90aGVyIG9uZSBpcyBvcGVuXG4gIGNvbnN0IGFscmVhZHlPcGVuID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShPUEVOX1NFTEVDVE9SKVxuICBpZiAoYWxyZWFkeU9wZW4pIHtcbiAgICBNb2RhbC5nZXRJbnN0YW5jZShhbHJlYWR5T3BlbikuaGlkZSgpXG4gIH1cblxuICBjb25zdCBkYXRhID0gTW9kYWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpXG5cbiAgZGF0YS50b2dnbGUodGhpcylcbn0pXG5cbmVuYWJsZURpc21pc3NUcmlnZ2VyKE1vZGFsKVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihNb2RhbClcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBvZmZjYW52YXMuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50LmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCBCYWNrZHJvcCBmcm9tICcuL3V0aWwvYmFja2Ryb3AuanMnXG5pbXBvcnQgeyBlbmFibGVEaXNtaXNzVHJpZ2dlciB9IGZyb20gJy4vdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zLmpzJ1xuaW1wb3J0IEZvY3VzVHJhcCBmcm9tICcuL3V0aWwvZm9jdXN0cmFwLmpzJ1xuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBpc0Rpc2FibGVkLFxuICBpc1Zpc2libGVcbn0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuaW1wb3J0IFNjcm9sbEJhckhlbHBlciBmcm9tICcuL3V0aWwvc2Nyb2xsYmFyLmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnb2ZmY2FudmFzJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMub2ZmY2FudmFzJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFU0NBUEVfS0VZID0gJ0VzY2FwZSdcblxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX1NIT1dJTkcgPSAnc2hvd2luZydcbmNvbnN0IENMQVNTX05BTUVfSElESU5HID0gJ2hpZGluZydcbmNvbnN0IENMQVNTX05BTUVfQkFDS0RST1AgPSAnb2ZmY2FudmFzLWJhY2tkcm9wJ1xuY29uc3QgT1BFTl9TRUxFQ1RPUiA9ICcub2ZmY2FudmFzLnNob3cnXG5cbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERV9QUkVWRU5URUQgPSBgaGlkZVByZXZlbnRlZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9SRVNJWkUgPSBgcmVzaXplJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RJU01JU1MgPSBga2V5ZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJvZmZjYW52YXNcIl0nXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGJhY2tkcm9wOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgc2Nyb2xsOiBmYWxzZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYmFja2Ryb3A6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgc2Nyb2xsOiAnYm9vbGVhbidcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgT2ZmY2FudmFzIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIHRoaXMuX2JhY2tkcm9wID0gdGhpcy5faW5pdGlhbGl6ZUJhY2tEcm9wKClcbiAgICB0aGlzLl9mb2N1c3RyYXAgPSB0aGlzLl9pbml0aWFsaXplRm9jdXNUcmFwKClcbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHRvZ2dsZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgc2hvdyhyZWxhdGVkVGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHsgcmVsYXRlZFRhcmdldCB9KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZVxuICAgIHRoaXMuX2JhY2tkcm9wLnNob3coKVxuXG4gICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsKSB7XG4gICAgICBuZXcgU2Nyb2xsQmFySGVscGVyKCkuaGlkZSgpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPV0lORylcblxuICAgIGNvbnN0IGNvbXBsZXRlQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwgfHwgdGhpcy5fY29uZmlnLmJhY2tkcm9wKSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzdHJhcC5hY3RpdmF0ZSgpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XSU5HKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHsgcmVsYXRlZFRhcmdldCB9KVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGVDYWxsQmFjaywgdGhpcy5fZWxlbWVudCwgdHJ1ZSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1Nob3duKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpXG4gICAgdGhpcy5fZWxlbWVudC5ibHVyKClcbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9ISURJTkcpXG4gICAgdGhpcy5fYmFja2Ryb3AuaGlkZSgpXG5cbiAgICBjb25zdCBjb21wbGV0ZUNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVywgQ0xBU1NfTkFNRV9ISURJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpXG5cbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnNjcm9sbCkge1xuICAgICAgICBuZXcgU2Nyb2xsQmFySGVscGVyKCkucmVzZXQoKVxuICAgICAgfVxuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxiYWNrLCB0aGlzLl9lbGVtZW50LCB0cnVlKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl9iYWNrZHJvcC5kaXNwb3NlKClcbiAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9pbml0aWFsaXplQmFja0Ryb3AoKSB7XG4gICAgY29uc3QgY2xpY2tDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREVfUFJFVkVOVEVEKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5oaWRlKClcbiAgICB9XG5cbiAgICAvLyAnc3RhdGljJyBvcHRpb24gd2lsbCBiZSB0cmFuc2xhdGVkIHRvIHRydWUsIGFuZCBib29sZWFucyB3aWxsIGtlZXAgdGhlaXIgdmFsdWVcbiAgICBjb25zdCBpc1Zpc2libGUgPSBCb29sZWFuKHRoaXMuX2NvbmZpZy5iYWNrZHJvcClcblxuICAgIHJldHVybiBuZXcgQmFja2Ryb3Aoe1xuICAgICAgY2xhc3NOYW1lOiBDTEFTU19OQU1FX0JBQ0tEUk9QLFxuICAgICAgaXNWaXNpYmxlLFxuICAgICAgaXNBbmltYXRlZDogdHJ1ZSxcbiAgICAgIHJvb3RFbGVtZW50OiB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICBjbGlja0NhbGxiYWNrOiBpc1Zpc2libGUgPyBjbGlja0NhbGxiYWNrIDogbnVsbFxuICAgIH0pXG4gIH1cblxuICBfaW5pdGlhbGl6ZUZvY3VzVHJhcCgpIHtcbiAgICByZXR1cm4gbmV3IEZvY3VzVHJhcCh7XG4gICAgICB0cmFwRWxlbWVudDogdGhpcy5fZWxlbWVudFxuICAgIH0pXG4gIH1cblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV05fRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSAhPT0gRVNDQVBFX0tFWSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQpXG4gICAgfSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcylcblxuICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9ISURERU4sICgpID0+IHtcbiAgICAvLyBmb2N1cyBvbiB0cmlnZ2VyIHdoZW4gaXQgaXMgY2xvc2VkXG4gICAgaWYgKGlzVmlzaWJsZSh0aGlzKSkge1xuICAgICAgdGhpcy5mb2N1cygpXG4gICAgfVxuICB9KVxuXG4gIC8vIGF2b2lkIGNvbmZsaWN0IHdoZW4gY2xpY2tpbmcgYSB0b2dnbGVyIG9mIGFuIG9mZmNhbnZhcywgd2hpbGUgYW5vdGhlciBpcyBvcGVuXG4gIGNvbnN0IGFscmVhZHlPcGVuID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShPUEVOX1NFTEVDVE9SKVxuICBpZiAoYWxyZWFkeU9wZW4gJiYgYWxyZWFkeU9wZW4gIT09IHRhcmdldCkge1xuICAgIE9mZmNhbnZhcy5nZXRJbnN0YW5jZShhbHJlYWR5T3BlbikuaGlkZSgpXG4gIH1cblxuICBjb25zdCBkYXRhID0gT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KVxuICBkYXRhLnRvZ2dsZSh0aGlzKVxufSlcblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoT1BFTl9TRUxFQ1RPUikpIHtcbiAgICBPZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZShzZWxlY3Rvcikuc2hvdygpXG4gIH1cbn0pXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX1JFU0laRSwgKCkgPT4ge1xuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgU2VsZWN0b3JFbmdpbmUuZmluZCgnW2FyaWEtbW9kYWxdW2NsYXNzKj1zaG93XVtjbGFzcyo9b2ZmY2FudmFzLV0nKSkge1xuICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uICE9PSAnZml4ZWQnKSB7XG4gICAgICBPZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50KS5oaWRlKClcbiAgICB9XG4gIH1cbn0pXG5cbmVuYWJsZURpc21pc3NUcmlnZ2VyKE9mZmNhbnZhcylcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oT2ZmY2FudmFzKVxuXG5leHBvcnQgZGVmYXVsdCBPZmZjYW52YXNcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL3Nhbml0aXplci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi8vIGpzLWRvY3Mtc3RhcnQgYWxsb3ctbGlzdFxuY29uc3QgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiA9IC9eYXJpYS1bXFx3LV0qJC9pXG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0QWxsb3dsaXN0ID0ge1xuICAvLyBHbG9iYWwgYXR0cmlidXRlcyBhbGxvd2VkIG9uIGFueSBzdXBwbGllZCBlbGVtZW50IGJlbG93LlxuICAnKic6IFsnY2xhc3MnLCAnZGlyJywgJ2lkJywgJ2xhbmcnLCAncm9sZScsIEFSSUFfQVRUUklCVVRFX1BBVFRFUk5dLFxuICBhOiBbJ3RhcmdldCcsICdocmVmJywgJ3RpdGxlJywgJ3JlbCddLFxuICBhcmVhOiBbXSxcbiAgYjogW10sXG4gIGJyOiBbXSxcbiAgY29sOiBbXSxcbiAgY29kZTogW10sXG4gIGRpdjogW10sXG4gIGVtOiBbXSxcbiAgaHI6IFtdLFxuICBoMTogW10sXG4gIGgyOiBbXSxcbiAgaDM6IFtdLFxuICBoNDogW10sXG4gIGg1OiBbXSxcbiAgaDY6IFtdLFxuICBpOiBbXSxcbiAgaW1nOiBbJ3NyYycsICdzcmNzZXQnLCAnYWx0JywgJ3RpdGxlJywgJ3dpZHRoJywgJ2hlaWdodCddLFxuICBsaTogW10sXG4gIG9sOiBbXSxcbiAgcDogW10sXG4gIHByZTogW10sXG4gIHM6IFtdLFxuICBzbWFsbDogW10sXG4gIHNwYW46IFtdLFxuICBzdWI6IFtdLFxuICBzdXA6IFtdLFxuICBzdHJvbmc6IFtdLFxuICB1OiBbXSxcbiAgdWw6IFtdXG59XG4vLyBqcy1kb2NzLWVuZCBhbGxvdy1saXN0XG5cbmNvbnN0IHVyaUF0dHJpYnV0ZXMgPSBuZXcgU2V0KFtcbiAgJ2JhY2tncm91bmQnLFxuICAnY2l0ZScsXG4gICdocmVmJyxcbiAgJ2l0ZW10eXBlJyxcbiAgJ2xvbmdkZXNjJyxcbiAgJ3Bvc3RlcicsXG4gICdzcmMnLFxuICAneGxpbms6aHJlZidcbl0pXG5cbi8qKlxuICogQSBwYXR0ZXJuIHRoYXQgcmVjb2duaXplcyBVUkxzIHRoYXQgYXJlIHNhZmUgd3J0LiBYU1MgaW4gVVJMIG5hdmlnYXRpb25cbiAqIGNvbnRleHRzLlxuICpcbiAqIFNob3V0LW91dCB0byBBbmd1bGFyIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi8xNS4yLjgvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHMjTDM4XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL2JldHRlci1yZWdleFxuY29uc3QgU0FGRV9VUkxfUEFUVEVSTiA9IC9eKD8hamF2YXNjcmlwdDopKD86W2EtejAtOSsuLV0rOnxbXiY6Lz8jXSooPzpbLz8jXXwkKSkvaVxuXG5jb25zdCBhbGxvd2VkQXR0cmlidXRlID0gKGF0dHJpYnV0ZSwgYWxsb3dlZEF0dHJpYnV0ZUxpc3QpID0+IHtcbiAgY29uc3QgYXR0cmlidXRlTmFtZSA9IGF0dHJpYnV0ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXG5cbiAgaWYgKGFsbG93ZWRBdHRyaWJ1dGVMaXN0LmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgaWYgKHVyaUF0dHJpYnV0ZXMuaGFzKGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbihTQUZFX1VSTF9QQVRURVJOLnRlc3QoYXR0cmlidXRlLm5vZGVWYWx1ZSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIC8vIENoZWNrIGlmIGEgcmVndWxhciBleHByZXNzaW9uIHZhbGlkYXRlcyB0aGUgYXR0cmlidXRlLlxuICByZXR1cm4gYWxsb3dlZEF0dHJpYnV0ZUxpc3QuZmlsdGVyKGF0dHJpYnV0ZVJlZ2V4ID0+IGF0dHJpYnV0ZVJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwKVxuICAgIC5zb21lKHJlZ2V4ID0+IHJlZ2V4LnRlc3QoYXR0cmlidXRlTmFtZSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZUh0bWwodW5zYWZlSHRtbCwgYWxsb3dMaXN0LCBzYW5pdGl6ZUZ1bmN0aW9uKSB7XG4gIGlmICghdW5zYWZlSHRtbC5sZW5ndGgpIHtcbiAgICByZXR1cm4gdW5zYWZlSHRtbFxuICB9XG5cbiAgaWYgKHNhbml0aXplRnVuY3Rpb24gJiYgdHlwZW9mIHNhbml0aXplRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gc2FuaXRpemVGdW5jdGlvbih1bnNhZmVIdG1sKVxuICB9XG5cbiAgY29uc3QgZG9tUGFyc2VyID0gbmV3IHdpbmRvdy5ET01QYXJzZXIoKVxuICBjb25zdCBjcmVhdGVkRG9jdW1lbnQgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKHVuc2FmZUh0bWwsICd0ZXh0L2h0bWwnKVxuICBjb25zdCBlbGVtZW50cyA9IFtdLmNvbmNhdCguLi5jcmVhdGVkRG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCcqJykpXG5cbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgY29uc3QgZWxlbWVudE5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcblxuICAgIGlmICghT2JqZWN0LmtleXMoYWxsb3dMaXN0KS5pbmNsdWRlcyhlbGVtZW50TmFtZSkpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlKClcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3QgYXR0cmlidXRlTGlzdCA9IFtdLmNvbmNhdCguLi5lbGVtZW50LmF0dHJpYnV0ZXMpXG4gICAgY29uc3QgYWxsb3dlZEF0dHJpYnV0ZXMgPSBbXS5jb25jYXQoYWxsb3dMaXN0WycqJ10gfHwgW10sIGFsbG93TGlzdFtlbGVtZW50TmFtZV0gfHwgW10pXG5cbiAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiBhdHRyaWJ1dGVMaXN0KSB7XG4gICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhbGxvd2VkQXR0cmlidXRlcykpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlLm5vZGVOYW1lKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjcmVhdGVkRG9jdW1lbnQuYm9keS5pbm5lckhUTUxcbn1cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL3RlbXBsYXRlLWZhY3RvcnkuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCBDb25maWcgZnJvbSAnLi9jb25maWcuanMnXG5pbXBvcnQgeyBEZWZhdWx0QWxsb3dsaXN0LCBzYW5pdGl6ZUh0bWwgfSBmcm9tICcuL3Nhbml0aXplci5qcydcbmltcG9ydCB7IGV4ZWN1dGUsIGdldEVsZW1lbnQsIGlzRWxlbWVudCB9IGZyb20gJy4vaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdUZW1wbGF0ZUZhY3RvcnknXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGFsbG93TGlzdDogRGVmYXVsdEFsbG93bGlzdCxcbiAgY29udGVudDoge30sIC8vIHsgc2VsZWN0b3IgOiB0ZXh0ICwgIHNlbGVjdG9yMiA6IHRleHQyICwgfVxuICBleHRyYUNsYXNzOiAnJyxcbiAgaHRtbDogZmFsc2UsXG4gIHNhbml0aXplOiB0cnVlLFxuICBzYW5pdGl6ZUZuOiBudWxsLFxuICB0ZW1wbGF0ZTogJzxkaXY+PC9kaXY+J1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYWxsb3dMaXN0OiAnb2JqZWN0JyxcbiAgY29udGVudDogJ29iamVjdCcsXG4gIGV4dHJhQ2xhc3M6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gIGh0bWw6ICdib29sZWFuJyxcbiAgc2FuaXRpemU6ICdib29sZWFuJyxcbiAgc2FuaXRpemVGbjogJyhudWxsfGZ1bmN0aW9uKScsXG4gIHRlbXBsYXRlOiAnc3RyaW5nJ1xufVxuXG5jb25zdCBEZWZhdWx0Q29udGVudFR5cGUgPSB7XG4gIGVudHJ5OiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9ufG51bGwpJyxcbiAgc2VsZWN0b3I6ICcoc3RyaW5nfGVsZW1lbnQpJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBUZW1wbGF0ZUZhY3RvcnkgZXh0ZW5kcyBDb25maWcge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLl9jb25maWcuY29udGVudClcbiAgICAgIC5tYXAoY29uZmlnID0+IHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKGNvbmZpZykpXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gIH1cblxuICBoYXNDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldENvbnRlbnQoKS5sZW5ndGggPiAwXG4gIH1cblxuICBjaGFuZ2VDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLl9jaGVja0NvbnRlbnQoY29udGVudClcbiAgICB0aGlzLl9jb25maWcuY29udGVudCA9IHsgLi4udGhpcy5fY29uZmlnLmNvbnRlbnQsIC4uLmNvbnRlbnQgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB0b0h0bWwoKSB7XG4gICAgY29uc3QgdGVtcGxhdGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0ZW1wbGF0ZVdyYXBwZXIuaW5uZXJIVE1MID0gdGhpcy5fbWF5YmVTYW5pdGl6ZSh0aGlzLl9jb25maWcudGVtcGxhdGUpXG5cbiAgICBmb3IgKGNvbnN0IFtzZWxlY3RvciwgdGV4dF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5fY29uZmlnLmNvbnRlbnQpKSB7XG4gICAgICB0aGlzLl9zZXRDb250ZW50KHRlbXBsYXRlV3JhcHBlciwgdGV4dCwgc2VsZWN0b3IpXG4gICAgfVxuXG4gICAgY29uc3QgdGVtcGxhdGUgPSB0ZW1wbGF0ZVdyYXBwZXIuY2hpbGRyZW5bMF1cbiAgICBjb25zdCBleHRyYUNsYXNzID0gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odGhpcy5fY29uZmlnLmV4dHJhQ2xhc3MpXG5cbiAgICBpZiAoZXh0cmFDbGFzcykge1xuICAgICAgdGVtcGxhdGUuY2xhc3NMaXN0LmFkZCguLi5leHRyYUNsYXNzLnNwbGl0KCcgJykpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRlbXBsYXRlXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF90eXBlQ2hlY2tDb25maWcoY29uZmlnKSB7XG4gICAgc3VwZXIuX3R5cGVDaGVja0NvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fY2hlY2tDb250ZW50KGNvbmZpZy5jb250ZW50KVxuICB9XG5cbiAgX2NoZWNrQ29udGVudChhcmcpIHtcbiAgICBmb3IgKGNvbnN0IFtzZWxlY3RvciwgY29udGVudF0gb2YgT2JqZWN0LmVudHJpZXMoYXJnKSkge1xuICAgICAgc3VwZXIuX3R5cGVDaGVja0NvbmZpZyh7IHNlbGVjdG9yLCBlbnRyeTogY29udGVudCB9LCBEZWZhdWx0Q29udGVudFR5cGUpXG4gICAgfVxuICB9XG5cbiAgX3NldENvbnRlbnQodGVtcGxhdGUsIGNvbnRlbnQsIHNlbGVjdG9yKSB7XG4gICAgY29uc3QgdGVtcGxhdGVFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShzZWxlY3RvciwgdGVtcGxhdGUpXG5cbiAgICBpZiAoIXRlbXBsYXRlRWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29udGVudCA9IHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKGNvbnRlbnQpXG5cbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIHRlbXBsYXRlRWxlbWVudC5yZW1vdmUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzRWxlbWVudChjb250ZW50KSkge1xuICAgICAgdGhpcy5fcHV0RWxlbWVudEluVGVtcGxhdGUoZ2V0RWxlbWVudChjb250ZW50KSwgdGVtcGxhdGVFbGVtZW50KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5odG1sKSB7XG4gICAgICB0ZW1wbGF0ZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5fbWF5YmVTYW5pdGl6ZShjb250ZW50KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGVtcGxhdGVFbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudFxuICB9XG5cbiAgX21heWJlU2FuaXRpemUoYXJnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5zYW5pdGl6ZSA/IHNhbml0aXplSHRtbChhcmcsIHRoaXMuX2NvbmZpZy5hbGxvd0xpc3QsIHRoaXMuX2NvbmZpZy5zYW5pdGl6ZUZuKSA6IGFyZ1xuICB9XG5cbiAgX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBleGVjdXRlKGFyZywgW3RoaXNdKVxuICB9XG5cbiAgX3B1dEVsZW1lbnRJblRlbXBsYXRlKGVsZW1lbnQsIHRlbXBsYXRlRWxlbWVudCkge1xuICAgIGlmICh0aGlzLl9jb25maWcuaHRtbCkge1xuICAgICAgdGVtcGxhdGVFbGVtZW50LmlubmVySFRNTCA9ICcnXG4gICAgICB0ZW1wbGF0ZUVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0ZW1wbGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50LnRleHRDb250ZW50XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVtcGxhdGVGYWN0b3J5XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdG9vbHRpcC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAqIGFzIFBvcHBlciBmcm9tICdAcG9wcGVyanMvY29yZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3IuanMnXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4sIGV4ZWN1dGUsIGZpbmRTaGFkb3dSb290LCBnZXRFbGVtZW50LCBnZXRVSUQsIGlzUlRMLCBub29wIH0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuaW1wb3J0IHsgRGVmYXVsdEFsbG93bGlzdCB9IGZyb20gJy4vdXRpbC9zYW5pdGl6ZXIuanMnXG5pbXBvcnQgVGVtcGxhdGVGYWN0b3J5IGZyb20gJy4vdXRpbC90ZW1wbGF0ZS1mYWN0b3J5LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAndG9vbHRpcCdcbmNvbnN0IERJU0FMTE9XRURfQVRUUklCVVRFUyA9IG5ldyBTZXQoWydzYW5pdGl6ZScsICdhbGxvd0xpc3QnLCAnc2FuaXRpemVGbiddKVxuXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfTU9EQUwgPSAnbW9kYWwnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuY29uc3QgU0VMRUNUT1JfVE9PTFRJUF9JTk5FUiA9ICcudG9vbHRpcC1pbm5lcidcbmNvbnN0IFNFTEVDVE9SX01PREFMID0gYC4ke0NMQVNTX05BTUVfTU9EQUx9YFxuXG5jb25zdCBFVkVOVF9NT0RBTF9ISURFID0gJ2hpZGUuYnMubW9kYWwnXG5cbmNvbnN0IFRSSUdHRVJfSE9WRVIgPSAnaG92ZXInXG5jb25zdCBUUklHR0VSX0ZPQ1VTID0gJ2ZvY3VzJ1xuY29uc3QgVFJJR0dFUl9DTElDSyA9ICdjbGljaydcbmNvbnN0IFRSSUdHRVJfTUFOVUFMID0gJ21hbnVhbCdcblxuY29uc3QgRVZFTlRfSElERSA9ICdoaWRlJ1xuY29uc3QgRVZFTlRfSElEREVOID0gJ2hpZGRlbidcbmNvbnN0IEVWRU5UX1NIT1cgPSAnc2hvdydcbmNvbnN0IEVWRU5UX1NIT1dOID0gJ3Nob3duJ1xuY29uc3QgRVZFTlRfSU5TRVJURUQgPSAnaW5zZXJ0ZWQnXG5jb25zdCBFVkVOVF9DTElDSyA9ICdjbGljaydcbmNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSAnZm9jdXNpbidcbmNvbnN0IEVWRU5UX0ZPQ1VTT1VUID0gJ2ZvY3Vzb3V0J1xuY29uc3QgRVZFTlRfTU9VU0VFTlRFUiA9ICdtb3VzZWVudGVyJ1xuY29uc3QgRVZFTlRfTU9VU0VMRUFWRSA9ICdtb3VzZWxlYXZlJ1xuXG5jb25zdCBBdHRhY2htZW50TWFwID0ge1xuICBBVVRPOiAnYXV0bycsXG4gIFRPUDogJ3RvcCcsXG4gIFJJR0hUOiBpc1JUTCgpID8gJ2xlZnQnIDogJ3JpZ2h0JyxcbiAgQk9UVE9NOiAnYm90dG9tJyxcbiAgTEVGVDogaXNSVEwoKSA/ICdyaWdodCcgOiAnbGVmdCdcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYWxsb3dMaXN0OiBEZWZhdWx0QWxsb3dsaXN0LFxuICBhbmltYXRpb246IHRydWUsXG4gIGJvdW5kYXJ5OiAnY2xpcHBpbmdQYXJlbnRzJyxcbiAgY29udGFpbmVyOiBmYWxzZSxcbiAgY3VzdG9tQ2xhc3M6ICcnLFxuICBkZWxheTogMCxcbiAgZmFsbGJhY2tQbGFjZW1lbnRzOiBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLFxuICBodG1sOiBmYWxzZSxcbiAgb2Zmc2V0OiBbMCwgNl0sXG4gIHBsYWNlbWVudDogJ3RvcCcsXG4gIHBvcHBlckNvbmZpZzogbnVsbCxcbiAgc2FuaXRpemU6IHRydWUsXG4gIHNhbml0aXplRm46IG51bGwsXG4gIHNlbGVjdG9yOiBmYWxzZSxcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwidG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+JyArXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PicgK1xuICAgICAgICAgICAgJzwvZGl2PicsXG4gIHRpdGxlOiAnJyxcbiAgdHJpZ2dlcjogJ2hvdmVyIGZvY3VzJ1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYWxsb3dMaXN0OiAnb2JqZWN0JyxcbiAgYW5pbWF0aW9uOiAnYm9vbGVhbicsXG4gIGJvdW5kYXJ5OiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIGNvbnRhaW5lcjogJyhzdHJpbmd8ZWxlbWVudHxib29sZWFuKScsXG4gIGN1c3RvbUNsYXNzOiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICBkZWxheTogJyhudW1iZXJ8b2JqZWN0KScsXG4gIGZhbGxiYWNrUGxhY2VtZW50czogJ2FycmF5JyxcbiAgaHRtbDogJ2Jvb2xlYW4nLFxuICBvZmZzZXQ6ICcoYXJyYXl8c3RyaW5nfGZ1bmN0aW9uKScsXG4gIHBsYWNlbWVudDogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgcG9wcGVyQ29uZmlnOiAnKG51bGx8b2JqZWN0fGZ1bmN0aW9uKScsXG4gIHNhbml0aXplOiAnYm9vbGVhbicsXG4gIHNhbml0aXplRm46ICcobnVsbHxmdW5jdGlvbiknLFxuICBzZWxlY3RvcjogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICB0ZW1wbGF0ZTogJ3N0cmluZycsXG4gIHRpdGxlOiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKScsXG4gIHRyaWdnZXI6ICdzdHJpbmcnXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIHRvb2x0aXBzIHJlcXVpcmUgUG9wcGVyIChodHRwczovL3BvcHBlci5qcy5vcmcpJylcbiAgICB9XG5cbiAgICBzdXBlcihlbGVtZW50LCBjb25maWcpXG5cbiAgICAvLyBQcml2YXRlXG4gICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZVxuICAgIHRoaXMuX3RpbWVvdXQgPSAwXG4gICAgdGhpcy5faXNIb3ZlcmVkID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSB7fVxuICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICB0aGlzLl90ZW1wbGF0ZUZhY3RvcnkgPSBudWxsXG4gICAgdGhpcy5fbmV3Q29udGVudCA9IG51bGxcblxuICAgIC8vIFByb3RlY3RlZFxuICAgIHRoaXMudGlwID0gbnVsbFxuXG4gICAgdGhpcy5fc2V0TGlzdGVuZXJzKClcblxuICAgIGlmICghdGhpcy5fY29uZmlnLnNlbGVjdG9yKSB7XG4gICAgICB0aGlzLl9maXhUaXRsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBlbmFibGUoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZVxuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSBmYWxzZVxuICB9XG5cbiAgdG9nZ2xlRW5hYmxlZCgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSAhdGhpcy5faXNFbmFibGVkXG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIuY2xpY2sgPSAhdGhpcy5fYWN0aXZlVHJpZ2dlci5jbGlja1xuICAgIGlmICh0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHRoaXMuX2xlYXZlKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2VudGVyKClcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpXG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9NT0RBTCksIEVWRU5UX01PREFMX0hJREUsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpXG5cbiAgICBpZiAodGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnKSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnKSlcbiAgICB9XG5cbiAgICB0aGlzLl9kaXNwb3NlUG9wcGVyKClcbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSB1c2Ugc2hvdyBvbiB2aXNpYmxlIGVsZW1lbnRzJylcbiAgICB9XG5cbiAgICBpZiAoISh0aGlzLl9pc1dpdGhDb250ZW50KCkgJiYgdGhpcy5faXNFbmFibGVkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfU0hPVykpXG4gICAgY29uc3Qgc2hhZG93Um9vdCA9IGZpbmRTaGFkb3dSb290KHRoaXMuX2VsZW1lbnQpXG4gICAgY29uc3QgaXNJblRoZURvbSA9IChzaGFkb3dSb290IHx8IHRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmNvbnRhaW5zKHRoaXMuX2VsZW1lbnQpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgfHwgIWlzSW5UaGVEb20pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIFRPRE86IHY2IHJlbW92ZSB0aGlzIG9yIG1ha2UgaXQgb3B0aW9uYWxcbiAgICB0aGlzLl9kaXNwb3NlUG9wcGVyKClcblxuICAgIGNvbnN0IHRpcCA9IHRoaXMuX2dldFRpcEVsZW1lbnQoKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCB0aXAuZ2V0QXR0cmlidXRlKCdpZCcpKVxuXG4gICAgY29uc3QgeyBjb250YWluZXIgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKHRoaXMudGlwKSkge1xuICAgICAgY29udGFpbmVyLmFwcGVuZCh0aXApXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9JTlNFUlRFRCkpXG4gICAgfVxuXG4gICAgdGhpcy5fcG9wcGVyID0gdGhpcy5fY3JlYXRlUG9wcGVyKHRpcClcblxuICAgIHRpcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuICAgICAgICBFdmVudEhhbmRsZXIub24oZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9TSE9XTikpXG5cbiAgICAgIGlmICh0aGlzLl9pc0hvdmVyZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuX2xlYXZlKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNIb3ZlcmVkID0gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLnRpcCwgdGhpcy5faXNBbmltYXRlZCgpKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfSElERSkpXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0aXAgPSB0aGlzLl9nZXRUaXBFbGVtZW50KClcbiAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9DTElDS10gPSBmYWxzZVxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9GT0NVU10gPSBmYWxzZVxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9IT1ZFUl0gPSBmYWxzZVxuICAgIHRoaXMuX2lzSG92ZXJlZCA9IG51bGwgLy8gaXQgaXMgYSB0cmljayB0byBzdXBwb3J0IG1hbnVhbCB0cmlnZ2VyaW5nXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9ISURERU4pKVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMudGlwLCB0aGlzLl9pc0FuaW1hdGVkKCkpXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJvdGVjdGVkXG4gIF9pc1dpdGhDb250ZW50KCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuX2dldFRpdGxlKCkpXG4gIH1cblxuICBfZ2V0VGlwRWxlbWVudCgpIHtcbiAgICBpZiAoIXRoaXMudGlwKSB7XG4gICAgICB0aGlzLnRpcCA9IHRoaXMuX2NyZWF0ZVRpcEVsZW1lbnQodGhpcy5fbmV3Q29udGVudCB8fCB0aGlzLl9nZXRDb250ZW50Rm9yVGVtcGxhdGUoKSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy50aXBcbiAgfVxuXG4gIF9jcmVhdGVUaXBFbGVtZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCB0aXAgPSB0aGlzLl9nZXRUZW1wbGF0ZUZhY3RvcnkoY29udGVudCkudG9IdG1sKClcblxuICAgIC8vIFRPRE86IHJlbW92ZSB0aGlzIGNoZWNrIGluIHY2XG4gICAgaWYgKCF0aXApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgdGlwLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9GQURFLCBDTEFTU19OQU1FX1NIT1cpXG4gICAgLy8gVE9ETzogdjYgdGhlIGZvbGxvd2luZyBjYW4gYmUgYWNoaWV2ZWQgd2l0aCBDU1Mgb25seVxuICAgIHRpcC5jbGFzc0xpc3QuYWRkKGBicy0ke3RoaXMuY29uc3RydWN0b3IuTkFNRX0tYXV0b2ApXG5cbiAgICBjb25zdCB0aXBJZCA9IGdldFVJRCh0aGlzLmNvbnN0cnVjdG9yLk5BTUUpLnRvU3RyaW5nKClcblxuICAgIHRpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGlwSWQpXG5cbiAgICBpZiAodGhpcy5faXNBbmltYXRlZCgpKSB7XG4gICAgICB0aXAuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRpcFxuICB9XG5cbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5fbmV3Q29udGVudCA9IGNvbnRlbnRcbiAgICBpZiAodGhpcy5faXNTaG93bigpKSB7XG4gICAgICB0aGlzLl9kaXNwb3NlUG9wcGVyKClcbiAgICAgIHRoaXMuc2hvdygpXG4gICAgfVxuICB9XG5cbiAgX2dldFRlbXBsYXRlRmFjdG9yeShjb250ZW50KSB7XG4gICAgaWYgKHRoaXMuX3RlbXBsYXRlRmFjdG9yeSkge1xuICAgICAgdGhpcy5fdGVtcGxhdGVGYWN0b3J5LmNoYW5nZUNvbnRlbnQoY29udGVudClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdGVtcGxhdGVGYWN0b3J5ID0gbmV3IFRlbXBsYXRlRmFjdG9yeSh7XG4gICAgICAgIC4uLnRoaXMuX2NvbmZpZyxcbiAgICAgICAgLy8gdGhlIGBjb250ZW50YCB2YXIgaGFzIHRvIGJlIGFmdGVyIGB0aGlzLl9jb25maWdgXG4gICAgICAgIC8vIHRvIG92ZXJyaWRlIGNvbmZpZy5jb250ZW50IGluIGNhc2Ugb2YgcG9wb3ZlclxuICAgICAgICBjb250ZW50LFxuICAgICAgICBleHRyYUNsYXNzOiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuY3VzdG9tQ2xhc3MpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZUZhY3RvcnlcbiAgfVxuXG4gIF9nZXRDb250ZW50Rm9yVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtTRUxFQ1RPUl9UT09MVElQX0lOTkVSXTogdGhpcy5fZ2V0VGl0bGUoKVxuICAgIH1cbiAgfVxuXG4gIF9nZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odGhpcy5fY29uZmlnLnRpdGxlKSB8fCB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5nZXRPckNyZWF0ZUluc3RhbmNlKGV2ZW50LmRlbGVnYXRlVGFyZ2V0LCB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpKVxuICB9XG5cbiAgX2lzQW5pbWF0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5hbmltYXRpb24gfHwgKHRoaXMudGlwICYmIHRoaXMudGlwLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpKVxuICB9XG5cbiAgX2lzU2hvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMudGlwICYmIHRoaXMudGlwLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG4gIH1cblxuICBfY3JlYXRlUG9wcGVyKHRpcCkge1xuICAgIGNvbnN0IHBsYWNlbWVudCA9IGV4ZWN1dGUodGhpcy5fY29uZmlnLnBsYWNlbWVudCwgW3RoaXMsIHRpcCwgdGhpcy5fZWxlbWVudF0pXG4gICAgY29uc3QgYXR0YWNobWVudCA9IEF0dGFjaG1lbnRNYXBbcGxhY2VtZW50LnRvVXBwZXJDYXNlKCldXG4gICAgcmV0dXJuIFBvcHBlci5jcmVhdGVQb3BwZXIodGhpcy5fZWxlbWVudCwgdGlwLCB0aGlzLl9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkpXG4gIH1cblxuICBfZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHsgb2Zmc2V0IH0gPSB0aGlzLl9jb25maWdcblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG9mZnNldC5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiBOdW1iZXIucGFyc2VJbnQodmFsdWUsIDEwKSlcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHBvcHBlckRhdGEgPT4gb2Zmc2V0KHBvcHBlckRhdGEsIHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldFxuICB9XG5cbiAgX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBleGVjdXRlKGFyZywgW3RoaXMuX2VsZW1lbnRdKVxuICB9XG5cbiAgX2dldFBvcHBlckNvbmZpZyhhdHRhY2htZW50KSB7XG4gICAgY29uc3QgZGVmYXVsdEJzUG9wcGVyQ29uZmlnID0ge1xuICAgICAgcGxhY2VtZW50OiBhdHRhY2htZW50LFxuICAgICAgbW9kaWZpZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnZmxpcCcsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgZmFsbGJhY2tQbGFjZW1lbnRzOiB0aGlzLl9jb25maWcuZmFsbGJhY2tQbGFjZW1lbnRzXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGJvdW5kYXJ5OiB0aGlzLl9jb25maWcuYm91bmRhcnlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnYXJyb3cnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGAuJHt0aGlzLmNvbnN0cnVjdG9yLk5BTUV9LWFycm93YFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdwcmVTZXRQbGFjZW1lbnQnLFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgcGhhc2U6ICdiZWZvcmVNYWluJyxcbiAgICAgICAgICBmbjogZGF0YSA9PiB7XG4gICAgICAgICAgICAvLyBQcmUtc2V0IFBvcHBlcidzIHBsYWNlbWVudCBhdHRyaWJ1dGUgaW4gb3JkZXIgdG8gcmVhZCB0aGUgYXJyb3cgc2l6ZXMgcHJvcGVybHkuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIFBvcHBlciBtaXhlcyB1cCB0aGUgd2lkdGggYW5kIGhlaWdodCBkaW1lbnNpb25zIHNpbmNlIHRoZSBpbml0aWFsIGFycm93IHN0eWxlIGlzIGZvciB0b3AgcGxhY2VtZW50XG4gICAgICAgICAgICB0aGlzLl9nZXRUaXBFbGVtZW50KCkuc2V0QXR0cmlidXRlKCdkYXRhLXBvcHBlci1wbGFjZW1lbnQnLCBkYXRhLnN0YXRlLnBsYWNlbWVudClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZGVmYXVsdEJzUG9wcGVyQ29uZmlnLFxuICAgICAgLi4uZXhlY3V0ZSh0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnLCBbZGVmYXVsdEJzUG9wcGVyQ29uZmlnXSlcbiAgICB9XG4gIH1cblxuICBfc2V0TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IHRyaWdnZXJzID0gdGhpcy5fY29uZmlnLnRyaWdnZXIuc3BsaXQoJyAnKVxuXG4gICAgZm9yIChjb25zdCB0cmlnZ2VyIG9mIHRyaWdnZXJzKSB7XG4gICAgICBpZiAodHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfQ0xJQ0spLCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHtcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KVxuICAgICAgICAgIGNvbnRleHQudG9nZ2xlKClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAodHJpZ2dlciAhPT0gVFJJR0dFUl9NQU5VQUwpIHtcbiAgICAgICAgY29uc3QgZXZlbnRJbiA9IHRyaWdnZXIgPT09IFRSSUdHRVJfSE9WRVIgP1xuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX01PVVNFRU5URVIpIDpcbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9GT0NVU0lOKVxuICAgICAgICBjb25zdCBldmVudE91dCA9IHRyaWdnZXIgPT09IFRSSUdHRVJfSE9WRVIgP1xuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX01PVVNFTEVBVkUpIDpcbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9GT0NVU09VVClcblxuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgZXZlbnRJbiwgdGhpcy5fY29uZmlnLnNlbGVjdG9yLCBldmVudCA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudClcbiAgICAgICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW2V2ZW50LnR5cGUgPT09ICdmb2N1c2luJyA/IFRSSUdHRVJfRk9DVVMgOiBUUklHR0VSX0hPVkVSXSA9IHRydWVcbiAgICAgICAgICBjb250ZXh0Ll9lbnRlcigpXG4gICAgICAgIH0pXG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBldmVudE91dCwgdGhpcy5fY29uZmlnLnNlbGVjdG9yLCBldmVudCA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudClcbiAgICAgICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW2V2ZW50LnR5cGUgPT09ICdmb2N1c291dCcgPyBUUklHR0VSX0ZPQ1VTIDogVFJJR0dFUl9IT1ZFUl0gPVxuICAgICAgICAgICAgY29udGV4dC5fZWxlbWVudC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KVxuXG4gICAgICAgICAgY29udGV4dC5fbGVhdmUoKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fZWxlbWVudCkge1xuICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfTU9EQUwpLCBFVkVOVF9NT0RBTF9ISURFLCB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKVxuICB9XG5cbiAgX2ZpeFRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcblxuICAgIGlmICghdGl0bGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSAmJiAhdGhpcy5fZWxlbWVudC50ZXh0Q29udGVudC50cmltKCkpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgdGl0bGUpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnLCB0aXRsZSkgLy8gRE8gTk9UIFVTRSBJVC4gSXMgb25seSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGl0bGUnKVxuICB9XG5cbiAgX2VudGVyKCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKCkgfHwgdGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICB0aGlzLl9pc0hvdmVyZWQgPSB0cnVlXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc0hvdmVyZWQgPSB0cnVlXG5cbiAgICB0aGlzLl9zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9pc0hvdmVyZWQpIHtcbiAgICAgICAgdGhpcy5zaG93KClcbiAgICAgIH1cbiAgICB9LCB0aGlzLl9jb25maWcuZGVsYXkuc2hvdylcbiAgfVxuXG4gIF9sZWF2ZSgpIHtcbiAgICBpZiAodGhpcy5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc0hvdmVyZWQgPSBmYWxzZVxuXG4gICAgdGhpcy5fc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX2lzSG92ZXJlZCkge1xuICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgfVxuICAgIH0sIHRoaXMuX2NvbmZpZy5kZWxheS5oaWRlKVxuICB9XG5cbiAgX3NldFRpbWVvdXQoaGFuZGxlciwgdGltZW91dCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxuICAgIHRoaXMuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KGhhbmRsZXIsIHRpbWVvdXQpXG4gIH1cblxuICBfaXNXaXRoQWN0aXZlVHJpZ2dlcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLl9hY3RpdmVUcmlnZ2VyKS5pbmNsdWRlcyh0cnVlKVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25zdCBkYXRhQXR0cmlidXRlcyA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpXG5cbiAgICBmb3IgKGNvbnN0IGRhdGFBdHRyaWJ1dGUgb2YgT2JqZWN0LmtleXMoZGF0YUF0dHJpYnV0ZXMpKSB7XG4gICAgICBpZiAoRElTQUxMT1dFRF9BVFRSSUJVVEVTLmhhcyhkYXRhQXR0cmlidXRlKSkge1xuICAgICAgICBkZWxldGUgZGF0YUF0dHJpYnV0ZXNbZGF0YUF0dHJpYnV0ZV1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5kYXRhQXR0cmlidXRlcyxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSlcbiAgICB9XG4gICAgY29uZmlnID0gdGhpcy5fbWVyZ2VDb25maWdPYmooY29uZmlnKVxuICAgIGNvbmZpZyA9IHRoaXMuX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKVxuICAgIHRoaXMuX3R5cGVDaGVja0NvbmZpZyhjb25maWcpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgY29uZmlnLmNvbnRhaW5lciA9IGNvbmZpZy5jb250YWluZXIgPT09IGZhbHNlID8gZG9jdW1lbnQuYm9keSA6IGdldEVsZW1lbnQoY29uZmlnLmNvbnRhaW5lcilcblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmRlbGF5ID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLmRlbGF5ID0ge1xuICAgICAgICBzaG93OiBjb25maWcuZGVsYXksXG4gICAgICAgIGhpZGU6IGNvbmZpZy5kZWxheVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnRpdGxlID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLnRpdGxlID0gY29uZmlnLnRpdGxlLnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5jb250ZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLmNvbnRlbnQgPSBjb25maWcuY29udGVudC50b1N0cmluZygpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldERlbGVnYXRlQ29uZmlnKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHt9XG5cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLl9jb25maWcpKSB7XG4gICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0W2tleV0gIT09IHZhbHVlKSB7XG4gICAgICAgIGNvbmZpZ1trZXldID0gdmFsdWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25maWcuc2VsZWN0b3IgPSBmYWxzZVxuICAgIGNvbmZpZy50cmlnZ2VyID0gJ21hbnVhbCdcblxuICAgIC8vIEluIHRoZSBmdXR1cmUgY2FuIGJlIHJlcGxhY2VkIHdpdGg6XG4gICAgLy8gY29uc3Qga2V5c1dpdGhEaWZmZXJlbnRWYWx1ZXMgPSBPYmplY3QuZW50cmllcyh0aGlzLl9jb25maWcpLmZpbHRlcihlbnRyeSA9PiB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRbZW50cnlbMF1dICE9PSB0aGlzLl9jb25maWdbZW50cnlbMF1dKVxuICAgIC8vIGBPYmplY3QuZnJvbUVudHJpZXMoa2V5c1dpdGhEaWZmZXJlbnRWYWx1ZXMpYFxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9kaXNwb3NlUG9wcGVyKCkge1xuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAodGhpcy50aXApIHtcbiAgICAgIHRoaXMudGlwLnJlbW92ZSgpXG4gICAgICB0aGlzLnRpcCA9IG51bGxcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBUb29sdGlwLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihUb29sdGlwKVxuXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgcG9wb3Zlci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcC5qcydcbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiB9IGZyb20gJy4vdXRpbC9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ3BvcG92ZXInXG5cbmNvbnN0IFNFTEVDVE9SX1RJVExFID0gJy5wb3BvdmVyLWhlYWRlcidcbmNvbnN0IFNFTEVDVE9SX0NPTlRFTlQgPSAnLnBvcG92ZXItYm9keSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgLi4uVG9vbHRpcC5EZWZhdWx0LFxuICBjb250ZW50OiAnJyxcbiAgb2Zmc2V0OiBbMCwgOF0sXG4gIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIHJvbGU9XCJ0b29sdGlwXCI+JyArXG4gICAgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWFycm93XCI+PC9kaXY+JyArXG4gICAgJzxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PC9oMz4nICtcbiAgICAnPGRpdiBjbGFzcz1cInBvcG92ZXItYm9keVwiPjwvZGl2PicgK1xuICAgICc8L2Rpdj4nLFxuICB0cmlnZ2VyOiAnY2xpY2snXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICAuLi5Ub29sdGlwLkRlZmF1bHRUeXBlLFxuICBjb250ZW50OiAnKG51bGx8c3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBQb3BvdmVyIGV4dGVuZHMgVG9vbHRpcCB7XG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBPdmVycmlkZXNcbiAgX2lzV2l0aENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldFRpdGxlKCkgfHwgdGhpcy5fZ2V0Q29udGVudCgpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9nZXRDb250ZW50Rm9yVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtTRUxFQ1RPUl9USVRMRV06IHRoaXMuX2dldFRpdGxlKCksXG4gICAgICBbU0VMRUNUT1JfQ09OVEVOVF06IHRoaXMuX2dldENvbnRlbnQoKVxuICAgIH1cbiAgfVxuXG4gIF9nZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuY29udGVudClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFBvcG92ZXIuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFBvcG92ZXIpXG5cbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXJcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBzY3JvbGxzcHkuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50LmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiwgZ2V0RWxlbWVudCwgaXNEaXNhYmxlZCwgaXNWaXNpYmxlIH0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnc2Nyb2xsc3B5J1xuY29uc3QgREFUQV9LRVkgPSAnYnMuc2Nyb2xsc3B5J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVWRU5UX0FDVElWQVRFID0gYGFjdGl2YXRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0sgPSBgY2xpY2ske0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fSVRFTSA9ICdkcm9wZG93bi1pdGVtJ1xuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1NQWSA9ICdbZGF0YS1icy1zcHk9XCJzY3JvbGxcIl0nXG5jb25zdCBTRUxFQ1RPUl9UQVJHRVRfTElOS1MgPSAnW2hyZWZdJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAgPSAnLm5hdiwgLmxpc3QtZ3JvdXAnXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElOS1MgPSAnLm5hdi1saW5rJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0lURU1TID0gJy5uYXYtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0xJU1RfSVRFTVMgPSAnLmxpc3QtZ3JvdXAtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0xJTktfSVRFTVMgPSBgJHtTRUxFQ1RPUl9OQVZfTElOS1N9LCAke1NFTEVDVE9SX05BVl9JVEVNU30gPiAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7U0VMRUNUT1JfTElTVF9JVEVNU31gXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTiA9ICcuZHJvcGRvd24nXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSAnLmRyb3Bkb3duLXRvZ2dsZSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgb2Zmc2V0OiBudWxsLCAvLyBUT0RPOiB2NiBAZGVwcmVjYXRlZCwga2VlcCBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgcmVhc29uc1xuICByb290TWFyZ2luOiAnMHB4IDBweCAtMjUlJyxcbiAgc21vb3RoU2Nyb2xsOiBmYWxzZSxcbiAgdGFyZ2V0OiBudWxsLFxuICB0aHJlc2hvbGQ6IFswLjEsIDAuNSwgMV1cbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIG9mZnNldDogJyhudW1iZXJ8bnVsbCknLCAvLyBUT0RPIHY2IEBkZXByZWNhdGVkLCBrZWVwIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSByZWFzb25zXG4gIHJvb3RNYXJnaW46ICdzdHJpbmcnLFxuICBzbW9vdGhTY3JvbGw6ICdib29sZWFuJyxcbiAgdGFyZ2V0OiAnZWxlbWVudCcsXG4gIHRocmVzaG9sZDogJ2FycmF5J1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBTY3JvbGxTcHkgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgLy8gdGhpcy5fZWxlbWVudCBpcyB0aGUgb2JzZXJ2YWJsZXNDb250YWluZXIgYW5kIGNvbmZpZy50YXJnZXQgdGhlIG1lbnUgbGlua3Mgd3JhcHBlclxuICAgIHRoaXMuX3RhcmdldExpbmtzID0gbmV3IE1hcCgpXG4gICAgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zID0gbmV3IE1hcCgpXG4gICAgdGhpcy5fcm9vdEVsZW1lbnQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsZW1lbnQpLm92ZXJmbG93WSA9PT0gJ3Zpc2libGUnID8gbnVsbCA6IHRoaXMuX2VsZW1lbnRcbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsXG4gICAgdGhpcy5fb2JzZXJ2ZXIgPSBudWxsXG4gICAgdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhID0ge1xuICAgICAgdmlzaWJsZUVudHJ5VG9wOiAwLFxuICAgICAgcGFyZW50U2Nyb2xsVG9wOiAwXG4gICAgfVxuICAgIHRoaXMucmVmcmVzaCgpIC8vIGluaXRpYWxpemVcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLl9pbml0aWFsaXplVGFyZ2V0c0FuZE9ic2VydmFibGVzKClcbiAgICB0aGlzLl9tYXliZUVuYWJsZVNtb290aFNjcm9sbCgpXG5cbiAgICBpZiAodGhpcy5fb2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vYnNlcnZlciA9IHRoaXMuX2dldE5ld09ic2VydmVyKClcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHNlY3Rpb24gb2YgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLnZhbHVlcygpKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHNlY3Rpb24pXG4gICAgfVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgLy8gVE9ETzogb24gdjYgdGFyZ2V0IHNob3VsZCBiZSBnaXZlbiBleHBsaWNpdGx5ICYgcmVtb3ZlIHRoZSB7dGFyZ2V0OiAnc3MtdGFyZ2V0J30gY2FzZVxuICAgIGNvbmZpZy50YXJnZXQgPSBnZXRFbGVtZW50KGNvbmZpZy50YXJnZXQpIHx8IGRvY3VtZW50LmJvZHlcblxuICAgIC8vIFRPRE86IHY2IE9ubHkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHJlYXNvbnMuIFVzZSByb290TWFyZ2luIG9ubHlcbiAgICBjb25maWcucm9vdE1hcmdpbiA9IGNvbmZpZy5vZmZzZXQgPyBgJHtjb25maWcub2Zmc2V0fXB4IDBweCAtMzAlYCA6IGNvbmZpZy5yb290TWFyZ2luXG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50aHJlc2hvbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25maWcudGhyZXNob2xkID0gY29uZmlnLnRocmVzaG9sZC5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX21heWJlRW5hYmxlU21vb3RoU2Nyb2xsKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnLnNtb290aFNjcm9sbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gdW5yZWdpc3RlciBhbnkgcHJldmlvdXMgbGlzdGVuZXJzXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9jb25maWcudGFyZ2V0LCBFVkVOVF9DTElDSylcblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9jb25maWcudGFyZ2V0LCBFVkVOVF9DTElDSywgU0VMRUNUT1JfVEFSR0VUX0xJTktTLCBldmVudCA9PiB7XG4gICAgICBjb25zdCBvYnNlcnZhYmxlU2VjdGlvbiA9IHRoaXMuX29ic2VydmFibGVTZWN0aW9ucy5nZXQoZXZlbnQudGFyZ2V0Lmhhc2gpXG4gICAgICBpZiAob2JzZXJ2YWJsZVNlY3Rpb24pIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCByb290ID0gdGhpcy5fcm9vdEVsZW1lbnQgfHwgd2luZG93XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IG9ic2VydmFibGVTZWN0aW9uLm9mZnNldFRvcCAtIHRoaXMuX2VsZW1lbnQub2Zmc2V0VG9wXG4gICAgICAgIGlmIChyb290LnNjcm9sbFRvKSB7XG4gICAgICAgICAgcm9vdC5zY3JvbGxUbyh7IHRvcDogaGVpZ2h0LCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENocm9tZSA2MCBkb2Vzbid0IHN1cHBvcnQgYHNjcm9sbFRvYFxuICAgICAgICByb290LnNjcm9sbFRvcCA9IGhlaWdodFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBfZ2V0TmV3T2JzZXJ2ZXIoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHJvb3Q6IHRoaXMuX3Jvb3RFbGVtZW50LFxuICAgICAgdGhyZXNob2xkOiB0aGlzLl9jb25maWcudGhyZXNob2xkLFxuICAgICAgcm9vdE1hcmdpbjogdGhpcy5fY29uZmlnLnJvb3RNYXJnaW5cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4gdGhpcy5fb2JzZXJ2ZXJDYWxsYmFjayhlbnRyaWVzKSwgb3B0aW9ucylcbiAgfVxuXG4gIC8vIFRoZSBsb2dpYyBvZiBzZWxlY3Rpb25cbiAgX29ic2VydmVyQ2FsbGJhY2soZW50cmllcykge1xuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBlbnRyeSA9PiB0aGlzLl90YXJnZXRMaW5rcy5nZXQoYCMke2VudHJ5LnRhcmdldC5pZH1gKVxuICAgIGNvbnN0IGFjdGl2YXRlID0gZW50cnkgPT4ge1xuICAgICAgdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnZpc2libGVFbnRyeVRvcCA9IGVudHJ5LnRhcmdldC5vZmZzZXRUb3BcbiAgICAgIHRoaXMuX3Byb2Nlc3ModGFyZ2V0RWxlbWVudChlbnRyeSkpXG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50U2Nyb2xsVG9wID0gKHRoaXMuX3Jvb3RFbGVtZW50IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuc2Nyb2xsVG9wXG4gICAgY29uc3QgdXNlclNjcm9sbHNEb3duID0gcGFyZW50U2Nyb2xsVG9wID49IHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS5wYXJlbnRTY3JvbGxUb3BcbiAgICB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEucGFyZW50U2Nyb2xsVG9wID0gcGFyZW50U2Nyb2xsVG9wXG5cbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgIGlmICghZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbFxuICAgICAgICB0aGlzLl9jbGVhckFjdGl2ZUNsYXNzKHRhcmdldEVsZW1lbnQoZW50cnkpKVxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVudHJ5SXNMb3dlclRoYW5QcmV2aW91cyA9IGVudHJ5LnRhcmdldC5vZmZzZXRUb3AgPj0gdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnZpc2libGVFbnRyeVRvcFxuICAgICAgLy8gaWYgd2UgYXJlIHNjcm9sbGluZyBkb3duLCBwaWNrIHRoZSBiaWdnZXIgb2Zmc2V0VG9wXG4gICAgICBpZiAodXNlclNjcm9sbHNEb3duICYmIGVudHJ5SXNMb3dlclRoYW5QcmV2aW91cykge1xuICAgICAgICBhY3RpdmF0ZShlbnRyeSlcbiAgICAgICAgLy8gaWYgcGFyZW50IGlzbid0IHNjcm9sbGVkLCBsZXQncyBrZWVwIHRoZSBmaXJzdCB2aXNpYmxlIGl0ZW0sIGJyZWFraW5nIHRoZSBpdGVyYXRpb25cbiAgICAgICAgaWYgKCFwYXJlbnRTY3JvbGxUb3ApIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHdlIGFyZSBzY3JvbGxpbmcgdXAsIHBpY2sgdGhlIHNtYWxsZXN0IG9mZnNldFRvcFxuICAgICAgaWYgKCF1c2VyU2Nyb2xsc0Rvd24gJiYgIWVudHJ5SXNMb3dlclRoYW5QcmV2aW91cykge1xuICAgICAgICBhY3RpdmF0ZShlbnRyeSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfaW5pdGlhbGl6ZVRhcmdldHNBbmRPYnNlcnZhYmxlcygpIHtcbiAgICB0aGlzLl90YXJnZXRMaW5rcyA9IG5ldyBNYXAoKVxuICAgIHRoaXMuX29ic2VydmFibGVTZWN0aW9ucyA9IG5ldyBNYXAoKVxuXG4gICAgY29uc3QgdGFyZ2V0TGlua3MgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX1RBUkdFVF9MSU5LUywgdGhpcy5fY29uZmlnLnRhcmdldClcblxuICAgIGZvciAoY29uc3QgYW5jaG9yIG9mIHRhcmdldExpbmtzKSB7XG4gICAgICAvLyBlbnN1cmUgdGhhdCB0aGUgYW5jaG9yIGhhcyBhbiBpZCBhbmQgaXMgbm90IGRpc2FibGVkXG4gICAgICBpZiAoIWFuY2hvci5oYXNoIHx8IGlzRGlzYWJsZWQoYW5jaG9yKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBvYnNlcnZhYmxlU2VjdGlvbiA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoZGVjb2RlVVJJKGFuY2hvci5oYXNoKSwgdGhpcy5fZWxlbWVudClcblxuICAgICAgLy8gZW5zdXJlIHRoYXQgdGhlIG9ic2VydmFibGVTZWN0aW9uIGV4aXN0cyAmIGlzIHZpc2libGVcbiAgICAgIGlmIChpc1Zpc2libGUob2JzZXJ2YWJsZVNlY3Rpb24pKSB7XG4gICAgICAgIHRoaXMuX3RhcmdldExpbmtzLnNldChkZWNvZGVVUkkoYW5jaG9yLmhhc2gpLCBhbmNob3IpXG4gICAgICAgIHRoaXMuX29ic2VydmFibGVTZWN0aW9ucy5zZXQoYW5jaG9yLmhhc2gsIG9ic2VydmFibGVTZWN0aW9uKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9wcm9jZXNzKHRhcmdldCkge1xuICAgIGlmICh0aGlzLl9hY3RpdmVUYXJnZXQgPT09IHRhcmdldCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY2xlYXJBY3RpdmVDbGFzcyh0aGlzLl9jb25maWcudGFyZ2V0KVxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IHRhcmdldFxuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIHRoaXMuX2FjdGl2YXRlUGFyZW50cyh0YXJnZXQpXG5cbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9BQ1RJVkFURSwgeyByZWxhdGVkVGFyZ2V0OiB0YXJnZXQgfSlcbiAgfVxuXG4gIF9hY3RpdmF0ZVBhcmVudHModGFyZ2V0KSB7XG4gICAgLy8gQWN0aXZhdGUgZHJvcGRvd24gcGFyZW50c1xuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUERPV05fSVRFTSkpIHtcbiAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFLCB0YXJnZXQuY2xvc2VzdChTRUxFQ1RPUl9EUk9QRE9XTikpXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBsaXN0R3JvdXAgb2YgU2VsZWN0b3JFbmdpbmUucGFyZW50cyh0YXJnZXQsIFNFTEVDVE9SX05BVl9MSVNUX0dST1VQKSkge1xuICAgICAgLy8gU2V0IHRyaWdnZXJlZCBsaW5rcyBwYXJlbnRzIGFzIGFjdGl2ZVxuICAgICAgLy8gV2l0aCBib3RoIDx1bD4gYW5kIDxuYXY+IG1hcmt1cCBhIHBhcmVudCBpcyB0aGUgcHJldmlvdXMgc2libGluZyBvZiBhbnkgbmF2IGFuY2VzdG9yXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgU2VsZWN0b3JFbmdpbmUucHJldihsaXN0R3JvdXAsIFNFTEVDVE9SX0xJTktfSVRFTVMpKSB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfY2xlYXJBY3RpdmVDbGFzcyhwYXJlbnQpIHtcbiAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcblxuICAgIGNvbnN0IGFjdGl2ZU5vZGVzID0gU2VsZWN0b3JFbmdpbmUuZmluZChgJHtTRUxFQ1RPUl9UQVJHRVRfTElOS1N9LiR7Q0xBU1NfTkFNRV9BQ1RJVkV9YCwgcGFyZW50KVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBhY3RpdmVOb2Rlcykge1xuICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFNjcm9sbFNweS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgZm9yIChjb25zdCBzcHkgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1NQWSkpIHtcbiAgICBTY3JvbGxTcHkuZ2V0T3JDcmVhdGVJbnN0YW5jZShzcHkpXG4gIH1cbn0pXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFNjcm9sbFNweSlcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsU3B5XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdGFiLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4sIGdldE5leHRBY3RpdmVFbGVtZW50LCBpc0Rpc2FibGVkIH0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAndGFiJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMudGFiJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOID0gYGtleWRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX1gXG5cbmNvbnN0IEFSUk9XX0xFRlRfS0VZID0gJ0Fycm93TGVmdCdcbmNvbnN0IEFSUk9XX1JJR0hUX0tFWSA9ICdBcnJvd1JpZ2h0J1xuY29uc3QgQVJST1dfVVBfS0VZID0gJ0Fycm93VXAnXG5jb25zdCBBUlJPV19ET1dOX0tFWSA9ICdBcnJvd0Rvd24nXG5jb25zdCBIT01FX0tFWSA9ICdIb21lJ1xuY29uc3QgRU5EX0tFWSA9ICdFbmQnXG5cbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19EUk9QRE9XTiA9ICdkcm9wZG93bidcblxuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJy5kcm9wZG93bi10b2dnbGUnXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VID0gJy5kcm9wZG93bi1tZW51J1xuY29uc3QgTk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9IGA6bm90KCR7U0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfSlgXG5cbmNvbnN0IFNFTEVDVE9SX1RBQl9QQU5FTCA9ICcubGlzdC1ncm91cCwgLm5hdiwgW3JvbGU9XCJ0YWJsaXN0XCJdJ1xuY29uc3QgU0VMRUNUT1JfT1VURVIgPSAnLm5hdi1pdGVtLCAubGlzdC1ncm91cC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfSU5ORVIgPSBgLm5hdi1saW5rJHtOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfSwgLmxpc3QtZ3JvdXAtaXRlbSR7Tk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX0sIFtyb2xlPVwidGFiXCJdJHtOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfWBcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cInRhYlwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwicGlsbFwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwibGlzdFwiXScgLy8gVE9ETzogY291bGQgb25seSBiZSBgdGFiYCBpbiB2NlxuY29uc3QgU0VMRUNUT1JfSU5ORVJfRUxFTSA9IGAke1NFTEVDVE9SX0lOTkVSfSwgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRX1gXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFX0FDVElWRSA9IGAuJHtDTEFTU19OQU1FX0FDVElWRX1bZGF0YS1icy10b2dnbGU9XCJ0YWJcIl0sIC4ke0NMQVNTX05BTUVfQUNUSVZFfVtkYXRhLWJzLXRvZ2dsZT1cInBpbGxcIl0sIC4ke0NMQVNTX05BTUVfQUNUSVZFfVtkYXRhLWJzLXRvZ2dsZT1cImxpc3RcIl1gXG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFRhYiBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgc3VwZXIoZWxlbWVudClcbiAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfVEFCX1BBTkVMKVxuXG4gICAgaWYgKCF0aGlzLl9wYXJlbnQpIHtcbiAgICAgIHJldHVyblxuICAgICAgLy8gVE9ETzogc2hvdWxkIHRocm93IGV4Y2VwdGlvbiBpbiB2NlxuICAgICAgLy8gdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtlbGVtZW50Lm91dGVySFRNTH0gaGFzIG5vdCBhIHZhbGlkIHBhcmVudCAke1NFTEVDVE9SX0lOTkVSX0VMRU19YClcbiAgICB9XG5cbiAgICAvLyBTZXQgdXAgaW5pdGlhbCBhcmlhIGF0dHJpYnV0ZXNcbiAgICB0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlcyh0aGlzLl9wYXJlbnQsIHRoaXMuX2dldENoaWxkcmVuKCkpXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTiwgZXZlbnQgPT4gdGhpcy5fa2V5ZG93bihldmVudCkpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHNob3coKSB7IC8vIFNob3dzIHRoaXMgZWxlbSBhbmQgZGVhY3RpdmF0ZSB0aGUgYWN0aXZlIHNpYmxpbmcgaWYgZXhpc3RzXG4gICAgY29uc3QgaW5uZXJFbGVtID0gdGhpcy5fZWxlbWVudFxuICAgIGlmICh0aGlzLl9lbGVtSXNBY3RpdmUoaW5uZXJFbGVtKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gU2VhcmNoIGZvciBhY3RpdmUgdGFiIG9uIHNhbWUgcGFyZW50IHRvIGRlYWN0aXZhdGUgaXRcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLl9nZXRBY3RpdmVFbGVtKClcblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IGFjdGl2ZSA/XG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihhY3RpdmUsIEVWRU5UX0hJREUsIHsgcmVsYXRlZFRhcmdldDogaW5uZXJFbGVtIH0pIDpcbiAgICAgIG51bGxcblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKGlubmVyRWxlbSwgRVZFTlRfU0hPVywgeyByZWxhdGVkVGFyZ2V0OiBhY3RpdmUgfSlcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCAoaGlkZUV2ZW50ICYmIGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZGVhY3RpdmF0ZShhY3RpdmUsIGlubmVyRWxlbSlcbiAgICB0aGlzLl9hY3RpdmF0ZShpbm5lckVsZW0sIGFjdGl2ZSlcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2FjdGl2YXRlKGVsZW1lbnQsIHJlbGF0ZWRFbGVtKSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICB0aGlzLl9hY3RpdmF0ZShTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpKSAvLyBTZWFyY2ggYW5kIGFjdGl2YXRlL3Nob3cgdGhlIHByb3BlciBzZWN0aW9uXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpICE9PSAndGFiJykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4JylcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSlcbiAgICAgIHRoaXMuX3RvZ2dsZURyb3BEb3duKGVsZW1lbnQsIHRydWUpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihlbGVtZW50LCBFVkVOVF9TSE9XTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiByZWxhdGVkRWxlbVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCBlbGVtZW50LCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpKVxuICB9XG5cbiAgX2RlYWN0aXZhdGUoZWxlbWVudCwgcmVsYXRlZEVsZW0pIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICBlbGVtZW50LmJsdXIoKVxuXG4gICAgdGhpcy5fZGVhY3RpdmF0ZShTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpKSAvLyBTZWFyY2ggYW5kIGRlYWN0aXZhdGUgdGhlIHNob3duIHNlY3Rpb24gdG9vXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpICE9PSAndGFiJykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSlcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpXG4gICAgICB0aGlzLl90b2dnbGVEcm9wRG93bihlbGVtZW50LCBmYWxzZSlcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKGVsZW1lbnQsIEVWRU5UX0hJRERFTiwgeyByZWxhdGVkVGFyZ2V0OiByZWxhdGVkRWxlbSB9KVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIGVsZW1lbnQsIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpXG4gIH1cblxuICBfa2V5ZG93bihldmVudCkge1xuICAgIGlmICghKFtBUlJPV19MRUZUX0tFWSwgQVJST1dfUklHSFRfS0VZLCBBUlJPV19VUF9LRVksIEFSUk9XX0RPV05fS0VZLCBIT01FX0tFWSwgRU5EX0tFWV0uaW5jbHVkZXMoZXZlbnQua2V5KSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpLy8gc3RvcFByb3BhZ2F0aW9uL3ByZXZlbnREZWZhdWx0IGJvdGggYWRkZWQgdG8gc3VwcG9ydCB1cC9kb3duIGtleXMgd2l0aG91dCBzY3JvbGxpbmcgdGhlIHBhZ2VcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX2dldENoaWxkcmVuKCkuZmlsdGVyKGVsZW1lbnQgPT4gIWlzRGlzYWJsZWQoZWxlbWVudCkpXG4gICAgbGV0IG5leHRBY3RpdmVFbGVtZW50XG5cbiAgICBpZiAoW0hPTUVfS0VZLCBFTkRfS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpKSB7XG4gICAgICBuZXh0QWN0aXZlRWxlbWVudCA9IGNoaWxkcmVuW2V2ZW50LmtleSA9PT0gSE9NRV9LRVkgPyAwIDogY2hpbGRyZW4ubGVuZ3RoIC0gMV1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaXNOZXh0ID0gW0FSUk9XX1JJR0hUX0tFWSwgQVJST1dfRE9XTl9LRVldLmluY2x1ZGVzKGV2ZW50LmtleSlcbiAgICAgIG5leHRBY3RpdmVFbGVtZW50ID0gZ2V0TmV4dEFjdGl2ZUVsZW1lbnQoY2hpbGRyZW4sIGV2ZW50LnRhcmdldCwgaXNOZXh0LCB0cnVlKVxuICAgIH1cblxuICAgIGlmIChuZXh0QWN0aXZlRWxlbWVudCkge1xuICAgICAgbmV4dEFjdGl2ZUVsZW1lbnQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pXG4gICAgICBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZShuZXh0QWN0aXZlRWxlbWVudCkuc2hvdygpXG4gICAgfVxuICB9XG5cbiAgX2dldENoaWxkcmVuKCkgeyAvLyBjb2xsZWN0aW9uIG9mIGlubmVyIGVsZW1lbnRzXG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSU5ORVJfRUxFTSwgdGhpcy5fcGFyZW50KVxuICB9XG5cbiAgX2dldEFjdGl2ZUVsZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldENoaWxkcmVuKCkuZmluZChjaGlsZCA9PiB0aGlzLl9lbGVtSXNBY3RpdmUoY2hpbGQpKSB8fCBudWxsXG4gIH1cblxuICBfc2V0SW5pdGlhbEF0dHJpYnV0ZXMocGFyZW50LCBjaGlsZHJlbikge1xuICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKHBhcmVudCwgJ3JvbGUnLCAndGFibGlzdCcpXG5cbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICB0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlc09uQ2hpbGQoY2hpbGQpXG4gICAgfVxuICB9XG5cbiAgX3NldEluaXRpYWxBdHRyaWJ1dGVzT25DaGlsZChjaGlsZCkge1xuICAgIGNoaWxkID0gdGhpcy5fZ2V0SW5uZXJFbGVtZW50KGNoaWxkKVxuICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5fZWxlbUlzQWN0aXZlKGNoaWxkKVxuICAgIGNvbnN0IG91dGVyRWxlbSA9IHRoaXMuX2dldE91dGVyRWxlbWVudChjaGlsZClcbiAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBpc0FjdGl2ZSlcblxuICAgIGlmIChvdXRlckVsZW0gIT09IGNoaWxkKSB7XG4gICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhvdXRlckVsZW0sICdyb2xlJywgJ3ByZXNlbnRhdGlvbicpXG4gICAgfVxuXG4gICAgaWYgKCFpc0FjdGl2ZSkge1xuICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMoY2hpbGQsICdyb2xlJywgJ3RhYicpXG5cbiAgICAvLyBzZXQgYXR0cmlidXRlcyB0byB0aGUgcmVsYXRlZCBwYW5lbCB0b29cbiAgICB0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlc09uVGFyZ2V0UGFuZWwoY2hpbGQpXG4gIH1cblxuICBfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPblRhcmdldFBhbmVsKGNoaWxkKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3RvcihjaGlsZClcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyh0YXJnZXQsICdyb2xlJywgJ3RhYnBhbmVsJylcblxuICAgIGlmIChjaGlsZC5pZCkge1xuICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHModGFyZ2V0LCAnYXJpYS1sYWJlbGxlZGJ5JywgYCR7Y2hpbGQuaWR9YClcbiAgICB9XG4gIH1cblxuICBfdG9nZ2xlRHJvcERvd24oZWxlbWVudCwgb3Blbikge1xuICAgIGNvbnN0IG91dGVyRWxlbSA9IHRoaXMuX2dldE91dGVyRWxlbWVudChlbGVtZW50KVxuICAgIGlmICghb3V0ZXJFbGVtLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19EUk9QRE9XTikpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZSA9IChzZWxlY3RvciwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShzZWxlY3Rvciwgb3V0ZXJFbGVtKVxuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSwgb3BlbilcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGUoU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFLCBDTEFTU19OQU1FX0FDVElWRSlcbiAgICB0b2dnbGUoU0VMRUNUT1JfRFJPUERPV05fTUVOVSwgQ0xBU1NfTkFNRV9TSE9XKVxuICAgIG91dGVyRWxlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBvcGVuKVxuICB9XG5cbiAgX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKGVsZW1lbnQsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZSkpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpXG4gICAgfVxuICB9XG5cbiAgX2VsZW1Jc0FjdGl2ZShlbGVtKSB7XG4gICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQUNUSVZFKVxuICB9XG5cbiAgLy8gVHJ5IHRvIGdldCB0aGUgaW5uZXIgZWxlbWVudCAodXN1YWxseSB0aGUgLm5hdi1saW5rKVxuICBfZ2V0SW5uZXJFbGVtZW50KGVsZW0pIHtcbiAgICByZXR1cm4gZWxlbS5tYXRjaGVzKFNFTEVDVE9SX0lOTkVSX0VMRU0pID8gZWxlbSA6IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfSU5ORVJfRUxFTSwgZWxlbSlcbiAgfVxuXG4gIC8vIFRyeSB0byBnZXQgdGhlIG91dGVyIGVsZW1lbnQgKHVzdWFsbHkgdGhlIC5uYXYtaXRlbSlcbiAgX2dldE91dGVyRWxlbWVudChlbGVtKSB7XG4gICAgcmV0dXJuIGVsZW0uY2xvc2VzdChTRUxFQ1RPUl9PVVRFUikgfHwgZWxlbVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGlmIChpc0Rpc2FibGVkKHRoaXMpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKS5zaG93KClcbn0pXG5cbi8qKlxuICogSW5pdGlhbGl6ZSBvbiBmb2N1c1xuICovXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFX0FDVElWRSkpIHtcbiAgICBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50KVxuICB9XG59KVxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oVGFiKVxuXG5leHBvcnQgZGVmYXVsdCBUYWJcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB0b2FzdC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgeyBlbmFibGVEaXNtaXNzVHJpZ2dlciB9IGZyb20gJy4vdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zLmpzJ1xuaW1wb3J0IHsgZGVmaW5lSlF1ZXJ5UGx1Z2luLCByZWZsb3cgfSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICd0b2FzdCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnRvYXN0J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcblxuY29uc3QgRVZFTlRfTU9VU0VPVkVSID0gYG1vdXNlb3ZlciR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFT1VUID0gYG1vdXNlb3V0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRk9DVVNJTiA9IGBmb2N1c2luJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRk9DVVNPVVQgPSBgZm9jdXNvdXQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9ISURFID0gJ2hpZGUnIC8vIEBkZXByZWNhdGVkIC0ga2VwdCBoZXJlIG9ubHkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfU0hPV0lORyA9ICdzaG93aW5nJ1xuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYW5pbWF0aW9uOiAnYm9vbGVhbicsXG4gIGF1dG9oaWRlOiAnYm9vbGVhbicsXG4gIGRlbGF5OiAnbnVtYmVyJ1xufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhbmltYXRpb246IHRydWUsXG4gIGF1dG9oaWRlOiB0cnVlLFxuICBkZWxheTogNTAwMFxufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBUb2FzdCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb25maWcpXG5cbiAgICB0aGlzLl90aW1lb3V0ID0gbnVsbFxuICAgIHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb24gPSBmYWxzZVxuICAgIHRoaXMuX2hhc0tleWJvYXJkSW50ZXJhY3Rpb24gPSBmYWxzZVxuICAgIHRoaXMuX3NldExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHNob3coKSB7XG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVylcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY2xlYXJUaW1lb3V0KClcblxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFKVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPV0lORylcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOKVxuXG4gICAgICB0aGlzLl9tYXliZVNjaGVkdWxlSGlkZSgpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfSElERSkgLy8gQGRlcHJlY2F0ZWRcbiAgICByZWZsb3codGhpcy5fZWxlbWVudClcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XLCBDTEFTU19OQU1FX1NIT1dJTkcpXG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0aGlzLl9jb25maWcuYW5pbWF0aW9uKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0hJREUpIC8vIEBkZXByZWNhdGVkXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XSU5HLCBDTEFTU19OQU1FX1NIT1cpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPV0lORylcbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0aGlzLl9jb25maWcuYW5pbWF0aW9uKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl9jbGVhclRpbWVvdXQoKVxuXG4gICAgaWYgKHRoaXMuaXNTaG93bigpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIH1cblxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgaXNTaG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9tYXliZVNjaGVkdWxlSGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5hdXRvaGlkZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb24gfHwgdGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9LCB0aGlzLl9jb25maWcuZGVsYXkpXG4gIH1cblxuICBfb25JbnRlcmFjdGlvbihldmVudCwgaXNJbnRlcmFjdGluZykge1xuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSAnbW91c2VvdmVyJzpcbiAgICAgIGNhc2UgJ21vdXNlb3V0Jzoge1xuICAgICAgICB0aGlzLl9oYXNNb3VzZUludGVyYWN0aW9uID0gaXNJbnRlcmFjdGluZ1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjYXNlICdmb2N1c2luJzpcbiAgICAgIGNhc2UgJ2ZvY3Vzb3V0Jzoge1xuICAgICAgICB0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uID0gaXNJbnRlcmFjdGluZ1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzSW50ZXJhY3RpbmcpIHtcbiAgICAgIHRoaXMuX2NsZWFyVGltZW91dCgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBuZXh0RWxlbWVudCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXRcbiAgICBpZiAodGhpcy5fZWxlbWVudCA9PT0gbmV4dEVsZW1lbnQgfHwgdGhpcy5fZWxlbWVudC5jb250YWlucyhuZXh0RWxlbWVudCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX21heWJlU2NoZWR1bGVIaWRlKClcbiAgfVxuXG4gIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFT1ZFUiwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgdHJ1ZSkpXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFT1VULCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCBmYWxzZSkpXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0ZPQ1VTSU4sIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIHRydWUpKVxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9GT0NVU09VVCwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgZmFsc2UpKVxuICB9XG5cbiAgX2NsZWFyVGltZW91dCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcbiAgICB0aGlzLl90aW1lb3V0ID0gbnVsbFxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gVG9hc3QuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5lbmFibGVEaXNtaXNzVHJpZ2dlcihUb2FzdClcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oVG9hc3QpXG5cbmV4cG9ydCBkZWZhdWx0IFRvYXN0XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgaW5kZXgudW1kLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEFsZXJ0IGZyb20gJy4vc3JjL2FsZXJ0LmpzJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL3NyYy9idXR0b24uanMnXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9zcmMvY2Fyb3VzZWwuanMnXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAnLi9zcmMvY29sbGFwc2UuanMnXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9zcmMvZHJvcGRvd24uanMnXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9zcmMvbW9kYWwuanMnXG5pbXBvcnQgT2ZmY2FudmFzIGZyb20gJy4vc3JjL29mZmNhbnZhcy5qcydcbmltcG9ydCBQb3BvdmVyIGZyb20gJy4vc3JjL3BvcG92ZXIuanMnXG5pbXBvcnQgU2Nyb2xsU3B5IGZyb20gJy4vc3JjL3Njcm9sbHNweS5qcydcbmltcG9ydCBUYWIgZnJvbSAnLi9zcmMvdGFiLmpzJ1xuaW1wb3J0IFRvYXN0IGZyb20gJy4vc3JjL3RvYXN0LmpzJ1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi9zcmMvdG9vbHRpcC5qcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBBbGVydCxcbiAgQnV0dG9uLFxuICBDYXJvdXNlbCxcbiAgQ29sbGFwc2UsXG4gIERyb3Bkb3duLFxuICBNb2RhbCxcbiAgT2ZmY2FudmFzLFxuICBQb3BvdmVyLFxuICBTY3JvbGxTcHksXG4gIFRhYixcbiAgVG9hc3QsXG4gIFRvb2x0aXBcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=