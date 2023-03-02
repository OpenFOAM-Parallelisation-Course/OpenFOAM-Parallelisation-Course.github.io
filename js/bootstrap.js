(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/bootstrap/dist/js/bootstrap.bundle.min.js
  var require_bootstrap_bundle_min = __commonJS({
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"(exports, module) {
      !function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e();
      }(exports, function() {
        "use strict";
        const t = "transitionend", e = (t2) => {
          let e2 = t2.getAttribute("data-bs-target");
          if (!e2 || "#" === e2) {
            let i2 = t2.getAttribute("href");
            if (!i2 || !i2.includes("#") && !i2.startsWith("."))
              return null;
            i2.includes("#") && !i2.startsWith("#") && (i2 = `#${i2.split("#")[1]}`), e2 = i2 && "#" !== i2 ? i2.trim() : null;
          }
          return e2;
        }, i = (t2) => {
          const i2 = e(t2);
          return i2 && document.querySelector(i2) ? i2 : null;
        }, n = (t2) => {
          const i2 = e(t2);
          return i2 ? document.querySelector(i2) : null;
        }, s = (e2) => {
          e2.dispatchEvent(new Event(t));
        }, o = (t2) => !(!t2 || "object" != typeof t2) && (void 0 !== t2.jquery && (t2 = t2[0]), void 0 !== t2.nodeType), r = (t2) => o(t2) ? t2.jquery ? t2[0] : t2 : "string" == typeof t2 && t2.length > 0 ? document.querySelector(t2) : null, a = (t2) => {
          if (!o(t2) || 0 === t2.getClientRects().length)
            return false;
          const e2 = "visible" === getComputedStyle(t2).getPropertyValue("visibility"), i2 = t2.closest("details:not([open])");
          if (!i2)
            return e2;
          if (i2 !== t2) {
            const e3 = t2.closest("summary");
            if (e3 && e3.parentNode !== i2)
              return false;
            if (null === e3)
              return false;
          }
          return e2;
        }, l = (t2) => !t2 || t2.nodeType !== Node.ELEMENT_NODE || !!t2.classList.contains("disabled") || (void 0 !== t2.disabled ? t2.disabled : t2.hasAttribute("disabled") && "false" !== t2.getAttribute("disabled")), c = (t2) => {
          if (!document.documentElement.attachShadow)
            return null;
          if ("function" == typeof t2.getRootNode) {
            const e2 = t2.getRootNode();
            return e2 instanceof ShadowRoot ? e2 : null;
          }
          return t2 instanceof ShadowRoot ? t2 : t2.parentNode ? c(t2.parentNode) : null;
        }, h = () => {
        }, d = (t2) => {
          t2.offsetHeight;
        }, u = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, f = [], p = () => "rtl" === document.documentElement.dir, g = (t2) => {
          var e2;
          e2 = () => {
            const e3 = u();
            if (e3) {
              const i2 = t2.NAME, n2 = e3.fn[i2];
              e3.fn[i2] = t2.jQueryInterface, e3.fn[i2].Constructor = t2, e3.fn[i2].noConflict = () => (e3.fn[i2] = n2, t2.jQueryInterface);
            }
          }, "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", () => {
            for (const t3 of f)
              t3();
          }), f.push(e2)) : e2();
        }, m = (t2) => {
          "function" == typeof t2 && t2();
        }, _ = (e2, i2, n2 = true) => {
          if (!n2)
            return void m(e2);
          const o2 = ((t2) => {
            if (!t2)
              return 0;
            let { transitionDuration: e3, transitionDelay: i3 } = window.getComputedStyle(t2);
            const n3 = Number.parseFloat(e3), s2 = Number.parseFloat(i3);
            return n3 || s2 ? (e3 = e3.split(",")[0], i3 = i3.split(",")[0], 1e3 * (Number.parseFloat(e3) + Number.parseFloat(i3))) : 0;
          })(i2) + 5;
          let r2 = false;
          const a2 = ({ target: n3 }) => {
            n3 === i2 && (r2 = true, i2.removeEventListener(t, a2), m(e2));
          };
          i2.addEventListener(t, a2), setTimeout(() => {
            r2 || s(i2);
          }, o2);
        }, b = (t2, e2, i2, n2) => {
          const s2 = t2.length;
          let o2 = t2.indexOf(e2);
          return -1 === o2 ? !i2 && n2 ? t2[s2 - 1] : t2[0] : (o2 += i2 ? 1 : -1, n2 && (o2 = (o2 + s2) % s2), t2[Math.max(0, Math.min(o2, s2 - 1))]);
        }, v = /[^.]*(?=\..*)\.|.*/, y = /\..*/, w = /::\d+$/, A = {};
        let E = 1;
        const T = { mouseenter: "mouseover", mouseleave: "mouseout" }, C = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
        function O(t2, e2) {
          return e2 && `${e2}::${E++}` || t2.uidEvent || E++;
        }
        function x(t2) {
          const e2 = O(t2);
          return t2.uidEvent = e2, A[e2] = A[e2] || {}, A[e2];
        }
        function k(t2, e2, i2 = null) {
          return Object.values(t2).find((t3) => t3.originalHandler === e2 && t3.delegationSelector === i2);
        }
        function L(t2, e2, i2) {
          const n2 = "string" == typeof e2, s2 = n2 ? i2 : e2;
          let o2 = N(t2);
          return C.has(o2) || (o2 = t2), [n2, s2, o2];
        }
        function D(t2, e2, i2, n2, s2) {
          if ("string" != typeof e2 || !t2)
            return;
          if (i2 || (i2 = n2, n2 = null), e2 in T) {
            const t3 = (t4) => function(e3) {
              if (!e3.relatedTarget || e3.relatedTarget !== e3.delegateTarget && !e3.delegateTarget.contains(e3.relatedTarget))
                return t4.call(this, e3);
            };
            n2 ? n2 = t3(n2) : i2 = t3(i2);
          }
          const [o2, r2, a2] = L(e2, i2, n2), l2 = x(t2), c2 = l2[a2] || (l2[a2] = {}), h2 = k(c2, r2, o2 ? i2 : null);
          if (h2)
            return void (h2.oneOff = h2.oneOff && s2);
          const d2 = O(r2, e2.replace(v, "")), u2 = o2 ? function(t3, e3, i3) {
            return function n3(s3) {
              const o3 = t3.querySelectorAll(e3);
              for (let { target: r3 } = s3; r3 && r3 !== this; r3 = r3.parentNode)
                for (const a3 of o3)
                  if (a3 === r3)
                    return s3.delegateTarget = r3, n3.oneOff && P.off(t3, s3.type, e3, i3), i3.apply(r3, [s3]);
            };
          }(t2, i2, n2) : function(t3, e3) {
            return function i3(n3) {
              return n3.delegateTarget = t3, i3.oneOff && P.off(t3, n3.type, e3), e3.apply(t3, [n3]);
            };
          }(t2, i2);
          u2.delegationSelector = o2 ? i2 : null, u2.originalHandler = r2, u2.oneOff = s2, u2.uidEvent = d2, c2[d2] = u2, t2.addEventListener(a2, u2, o2);
        }
        function S(t2, e2, i2, n2, s2) {
          const o2 = k(e2[i2], n2, s2);
          o2 && (t2.removeEventListener(i2, o2, Boolean(s2)), delete e2[i2][o2.uidEvent]);
        }
        function I(t2, e2, i2, n2) {
          const s2 = e2[i2] || {};
          for (const o2 of Object.keys(s2))
            if (o2.includes(n2)) {
              const n3 = s2[o2];
              S(t2, e2, i2, n3.originalHandler, n3.delegationSelector);
            }
        }
        function N(t2) {
          return t2 = t2.replace(y, ""), T[t2] || t2;
        }
        const P = { on(t2, e2, i2, n2) {
          D(t2, e2, i2, n2, false);
        }, one(t2, e2, i2, n2) {
          D(t2, e2, i2, n2, true);
        }, off(t2, e2, i2, n2) {
          if ("string" != typeof e2 || !t2)
            return;
          const [s2, o2, r2] = L(e2, i2, n2), a2 = r2 !== e2, l2 = x(t2), c2 = e2.startsWith(".");
          if (void 0 !== o2) {
            if (!l2 || !l2[r2])
              return;
            return void S(t2, l2, r2, o2, s2 ? i2 : null);
          }
          if (c2)
            for (const i3 of Object.keys(l2))
              I(t2, l2, i3, e2.slice(1));
          const h2 = l2[r2] || {};
          for (const i3 of Object.keys(h2)) {
            const n3 = i3.replace(w, "");
            if (!a2 || e2.includes(n3)) {
              const e3 = h2[i3];
              S(t2, l2, r2, e3.originalHandler, e3.delegationSelector);
            }
          }
        }, trigger(t2, e2, i2) {
          if ("string" != typeof e2 || !t2)
            return null;
          const n2 = u();
          let s2 = null, o2 = true, r2 = true, a2 = false;
          e2 !== N(e2) && n2 && (s2 = n2.Event(e2, i2), n2(t2).trigger(s2), o2 = !s2.isPropagationStopped(), r2 = !s2.isImmediatePropagationStopped(), a2 = s2.isDefaultPrevented());
          const l2 = new Event(e2, { bubbles: o2, cancelable: true });
          if (void 0 !== i2)
            for (const t3 of Object.keys(i2))
              Object.defineProperty(l2, t3, { get: () => i2[t3] });
          return a2 && l2.preventDefault(), r2 && t2.dispatchEvent(l2), l2.defaultPrevented && s2 && s2.preventDefault(), l2;
        } }, M = /* @__PURE__ */ new Map(), j = { set(t2, e2, i2) {
          M.has(t2) || M.set(t2, /* @__PURE__ */ new Map());
          const n2 = M.get(t2);
          n2.has(e2) || 0 === n2.size ? n2.set(e2, i2) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n2.keys())[0]}.`);
        }, get: (t2, e2) => M.has(t2) && M.get(t2).get(e2) || null, remove(t2, e2) {
          if (!M.has(t2))
            return;
          const i2 = M.get(t2);
          i2.delete(e2), 0 === i2.size && M.delete(t2);
        } };
        function H(t2) {
          if ("true" === t2)
            return true;
          if ("false" === t2)
            return false;
          if (t2 === Number(t2).toString())
            return Number(t2);
          if ("" === t2 || "null" === t2)
            return null;
          if ("string" != typeof t2)
            return t2;
          try {
            return JSON.parse(decodeURIComponent(t2));
          } catch (e2) {
            return t2;
          }
        }
        function $(t2) {
          return t2.replace(/[A-Z]/g, (t3) => `-${t3.toLowerCase()}`);
        }
        const W = { setDataAttribute(t2, e2, i2) {
          t2.setAttribute(`data-bs-${$(e2)}`, i2);
        }, removeDataAttribute(t2, e2) {
          t2.removeAttribute(`data-bs-${$(e2)}`);
        }, getDataAttributes(t2) {
          if (!t2)
            return {};
          const e2 = {}, i2 = Object.keys(t2.dataset).filter((t3) => t3.startsWith("bs") && !t3.startsWith("bsConfig"));
          for (const n2 of i2) {
            let i3 = n2.replace(/^bs/, "");
            i3 = i3.charAt(0).toLowerCase() + i3.slice(1, i3.length), e2[i3] = H(t2.dataset[n2]);
          }
          return e2;
        }, getDataAttribute: (t2, e2) => H(t2.getAttribute(`data-bs-${$(e2)}`)) };
        class B {
          static get Default() {
            return {};
          }
          static get DefaultType() {
            return {};
          }
          static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
          }
          _getConfig(t2) {
            return t2 = this._mergeConfigObj(t2), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
          }
          _configAfterMerge(t2) {
            return t2;
          }
          _mergeConfigObj(t2, e2) {
            const i2 = o(e2) ? W.getDataAttribute(e2, "config") : {};
            return { ...this.constructor.Default, ..."object" == typeof i2 ? i2 : {}, ...o(e2) ? W.getDataAttributes(e2) : {}, ..."object" == typeof t2 ? t2 : {} };
          }
          _typeCheckConfig(t2, e2 = this.constructor.DefaultType) {
            for (const n2 of Object.keys(e2)) {
              const s2 = e2[n2], r2 = t2[n2], a2 = o(r2) ? "element" : null == (i2 = r2) ? `${i2}` : Object.prototype.toString.call(i2).match(/\s([a-z]+)/i)[1].toLowerCase();
              if (!new RegExp(s2).test(a2))
                throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n2}" provided type "${a2}" but expected type "${s2}".`);
            }
            var i2;
          }
        }
        class F extends B {
          constructor(t2, e2) {
            super(), (t2 = r(t2)) && (this._element = t2, this._config = this._getConfig(e2), j.set(this._element, this.constructor.DATA_KEY, this));
          }
          dispose() {
            j.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, this.constructor.EVENT_KEY);
            for (const t2 of Object.getOwnPropertyNames(this))
              this[t2] = null;
          }
          _queueCallback(t2, e2, i2 = true) {
            _(t2, e2, i2);
          }
          _getConfig(t2) {
            return t2 = this._mergeConfigObj(t2, this._element), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
          }
          static getInstance(t2) {
            return j.get(r(t2), this.DATA_KEY);
          }
          static getOrCreateInstance(t2, e2 = {}) {
            return this.getInstance(t2) || new this(t2, "object" == typeof e2 ? e2 : null);
          }
          static get VERSION() {
            return "5.2.0-beta1";
          }
          static get DATA_KEY() {
            return `bs.${this.NAME}`;
          }
          static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
          }
          static eventName(t2) {
            return `${t2}${this.EVENT_KEY}`;
          }
        }
        const z = (t2, e2 = "hide") => {
          const i2 = `click.dismiss${t2.EVENT_KEY}`, s2 = t2.NAME;
          P.on(document, i2, `[data-bs-dismiss="${s2}"]`, function(i3) {
            if (["A", "AREA"].includes(this.tagName) && i3.preventDefault(), l(this))
              return;
            const o2 = n(this) || this.closest(`.${s2}`);
            t2.getOrCreateInstance(o2)[e2]();
          });
        };
        class R extends F {
          static get NAME() {
            return "alert";
          }
          close() {
            if (P.trigger(this._element, "close.bs.alert").defaultPrevented)
              return;
            this._element.classList.remove("show");
            const t2 = this._element.classList.contains("fade");
            this._queueCallback(() => this._destroyElement(), this._element, t2);
          }
          _destroyElement() {
            this._element.remove(), P.trigger(this._element, "closed.bs.alert"), this.dispose();
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = R.getOrCreateInstance(this);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2](this);
              }
            });
          }
        }
        z(R, "close"), g(R);
        const q = '[data-bs-toggle="button"]';
        class V extends F {
          static get NAME() {
            return "button";
          }
          toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = V.getOrCreateInstance(this);
              "toggle" === t2 && e2[t2]();
            });
          }
        }
        P.on(document, "click.bs.button.data-api", q, (t2) => {
          t2.preventDefault();
          const e2 = t2.target.closest(q);
          V.getOrCreateInstance(e2).toggle();
        }), g(V);
        const K = { find: (t2, e2 = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e2, t2)), findOne: (t2, e2 = document.documentElement) => Element.prototype.querySelector.call(e2, t2), children: (t2, e2) => [].concat(...t2.children).filter((t3) => t3.matches(e2)), parents(t2, e2) {
          const i2 = [];
          let n2 = t2.parentNode.closest(e2);
          for (; n2; )
            i2.push(n2), n2 = n2.parentNode.closest(e2);
          return i2;
        }, prev(t2, e2) {
          let i2 = t2.previousElementSibling;
          for (; i2; ) {
            if (i2.matches(e2))
              return [i2];
            i2 = i2.previousElementSibling;
          }
          return [];
        }, next(t2, e2) {
          let i2 = t2.nextElementSibling;
          for (; i2; ) {
            if (i2.matches(e2))
              return [i2];
            i2 = i2.nextElementSibling;
          }
          return [];
        }, focusableChildren(t2) {
          const e2 = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t3) => `${t3}:not([tabindex^="-"])`).join(",");
          return this.find(e2, t2).filter((t3) => !l(t3) && a(t3));
        } }, Q = { leftCallback: null, rightCallback: null, endCallback: null }, X = { leftCallback: "(function|null)", rightCallback: "(function|null)", endCallback: "(function|null)" };
        class Y extends B {
          constructor(t2, e2) {
            super(), this._element = t2, t2 && Y.isSupported() && (this._config = this._getConfig(e2), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents());
          }
          static get Default() {
            return Q;
          }
          static get DefaultType() {
            return X;
          }
          static get NAME() {
            return "swipe";
          }
          dispose() {
            P.off(this._element, ".bs.swipe");
          }
          _start(t2) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(t2) && (this._deltaX = t2.clientX) : this._deltaX = t2.touches[0].clientX;
          }
          _end(t2) {
            this._eventIsPointerPenTouch(t2) && (this._deltaX = t2.clientX - this._deltaX), this._handleSwipe(), m(this._config.endCallback);
          }
          _move(t2) {
            this._deltaX = t2.touches && t2.touches.length > 1 ? 0 : t2.touches[0].clientX - this._deltaX;
          }
          _handleSwipe() {
            const t2 = Math.abs(this._deltaX);
            if (t2 <= 40)
              return;
            const e2 = t2 / this._deltaX;
            this._deltaX = 0, e2 && m(e2 > 0 ? this._config.rightCallback : this._config.leftCallback);
          }
          _initEvents() {
            this._supportPointerEvents ? (P.on(this._element, "pointerdown.bs.swipe", (t2) => this._start(t2)), P.on(this._element, "pointerup.bs.swipe", (t2) => this._end(t2)), this._element.classList.add("pointer-event")) : (P.on(this._element, "touchstart.bs.swipe", (t2) => this._start(t2)), P.on(this._element, "touchmove.bs.swipe", (t2) => this._move(t2)), P.on(this._element, "touchend.bs.swipe", (t2) => this._end(t2)));
          }
          _eventIsPointerPenTouch(t2) {
            return this._supportPointerEvents && ("pen" === t2.pointerType || "touch" === t2.pointerType);
          }
          static isSupported() {
            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
          }
        }
        const U = "next", G = "prev", J = "left", Z = "right", tt = "slid.bs.carousel", et = "carousel", it = "active", nt = { ArrowLeft: Z, ArrowRight: J }, st = { interval: 5e3, keyboard: true, pause: "hover", ride: false, touch: true, wrap: true }, ot = { interval: "(number|boolean)", keyboard: "boolean", ride: "(boolean|string)", pause: "(string|boolean)", touch: "boolean", wrap: "boolean" };
        class rt extends F {
          constructor(t2, e2) {
            super(t2, e2), this._interval = null, this._activeElement = null, this._isSliding = false, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = K.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === et && this.cycle();
          }
          static get Default() {
            return st;
          }
          static get DefaultType() {
            return ot;
          }
          static get NAME() {
            return "carousel";
          }
          next() {
            this._slide(U);
          }
          nextWhenVisible() {
            !document.hidden && a(this._element) && this.next();
          }
          prev() {
            this._slide(G);
          }
          pause() {
            this._isSliding && s(this._element), this._clearInterval();
          }
          cycle() {
            this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
          }
          _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? P.one(this._element, tt, () => this.cycle()) : this.cycle());
          }
          to(t2) {
            const e2 = this._getItems();
            if (t2 > e2.length - 1 || t2 < 0)
              return;
            if (this._isSliding)
              return void P.one(this._element, tt, () => this.to(t2));
            const i2 = this._getItemIndex(this._getActive());
            if (i2 === t2)
              return;
            const n2 = t2 > i2 ? U : G;
            this._slide(n2, e2[t2]);
          }
          dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
          }
          _configAfterMerge(t2) {
            return t2.defaultInterval = t2.interval, t2;
          }
          _addEventListeners() {
            this._config.keyboard && P.on(this._element, "keydown.bs.carousel", (t2) => this._keydown(t2)), "hover" === this._config.pause && (P.on(this._element, "mouseenter.bs.carousel", () => this.pause()), P.on(this._element, "mouseleave.bs.carousel", () => this._maybeEnableCycle())), this._config.touch && Y.isSupported() && this._addTouchEventListeners();
          }
          _addTouchEventListeners() {
            for (const t3 of K.find(".carousel-item img", this._element))
              P.on(t3, "dragstart.bs.carousel", (t4) => t4.preventDefault());
            const t2 = { leftCallback: () => this._slide(this._directionToOrder(J)), rightCallback: () => this._slide(this._directionToOrder(Z)), endCallback: () => {
              "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval));
            } };
            this._swipeHelper = new Y(this._element, t2);
          }
          _keydown(t2) {
            if (/input|textarea/i.test(t2.target.tagName))
              return;
            const e2 = nt[t2.key];
            e2 && (t2.preventDefault(), this._slide(this._directionToOrder(e2)));
          }
          _getItemIndex(t2) {
            return this._getItems().indexOf(t2);
          }
          _setActiveIndicatorElement(t2) {
            if (!this._indicatorsElement)
              return;
            const e2 = K.findOne(".active", this._indicatorsElement);
            e2.classList.remove(it), e2.removeAttribute("aria-current");
            const i2 = K.findOne(`[data-bs-slide-to="${t2}"]`, this._indicatorsElement);
            i2 && (i2.classList.add(it), i2.setAttribute("aria-current", "true"));
          }
          _updateInterval() {
            const t2 = this._activeElement || this._getActive();
            if (!t2)
              return;
            const e2 = Number.parseInt(t2.getAttribute("data-bs-interval"), 10);
            this._config.interval = e2 || this._config.defaultInterval;
          }
          _slide(t2, e2 = null) {
            if (this._isSliding)
              return;
            const i2 = this._getActive(), n2 = t2 === U, s2 = e2 || b(this._getItems(), i2, n2, this._config.wrap);
            if (s2 === i2)
              return;
            const o2 = this._getItemIndex(s2), r2 = (e3) => P.trigger(this._element, e3, { relatedTarget: s2, direction: this._orderToDirection(t2), from: this._getItemIndex(i2), to: o2 });
            if (r2("slide.bs.carousel").defaultPrevented)
              return;
            if (!i2 || !s2)
              return;
            const a2 = Boolean(this._interval);
            this.pause(), this._isSliding = true, this._setActiveIndicatorElement(o2), this._activeElement = s2;
            const l2 = n2 ? "carousel-item-start" : "carousel-item-end", c2 = n2 ? "carousel-item-next" : "carousel-item-prev";
            s2.classList.add(c2), d(s2), i2.classList.add(l2), s2.classList.add(l2), this._queueCallback(() => {
              s2.classList.remove(l2, c2), s2.classList.add(it), i2.classList.remove(it, c2, l2), this._isSliding = false, r2(tt);
            }, i2, this._isAnimated()), a2 && this.cycle();
          }
          _isAnimated() {
            return this._element.classList.contains("slide");
          }
          _getActive() {
            return K.findOne(".active.carousel-item", this._element);
          }
          _getItems() {
            return K.find(".carousel-item", this._element);
          }
          _clearInterval() {
            this._interval && (clearInterval(this._interval), this._interval = null);
          }
          _directionToOrder(t2) {
            return p() ? t2 === J ? G : U : t2 === J ? U : G;
          }
          _orderToDirection(t2) {
            return p() ? t2 === G ? J : Z : t2 === G ? Z : J;
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = rt.getOrCreateInstance(this, t2);
              if ("number" != typeof t2) {
                if ("string" == typeof t2) {
                  if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
                    throw new TypeError(`No method named "${t2}"`);
                  e2[t2]();
                }
              } else
                e2.to(t2);
            });
          }
        }
        P.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", function(t2) {
          const e2 = n(this);
          if (!e2 || !e2.classList.contains(et))
            return;
          t2.preventDefault();
          const i2 = rt.getOrCreateInstance(e2), s2 = this.getAttribute("data-bs-slide-to");
          return s2 ? (i2.to(s2), void i2._maybeEnableCycle()) : "next" === W.getDataAttribute(this, "slide") ? (i2.next(), void i2._maybeEnableCycle()) : (i2.prev(), void i2._maybeEnableCycle());
        }), P.on(window, "load.bs.carousel.data-api", () => {
          const t2 = K.find('[data-bs-ride="carousel"]');
          for (const e2 of t2)
            rt.getOrCreateInstance(e2);
        }), g(rt);
        const at = "show", lt = "collapse", ct = "collapsing", ht = '[data-bs-toggle="collapse"]', dt = { toggle: true, parent: null }, ut = { toggle: "boolean", parent: "(null|element)" };
        class ft extends F {
          constructor(t2, e2) {
            super(t2, e2), this._isTransitioning = false, this._triggerArray = [];
            const n2 = K.find(ht);
            for (const t3 of n2) {
              const e3 = i(t3), n3 = K.find(e3).filter((t4) => t4 === this._element);
              null !== e3 && n3.length && this._triggerArray.push(t3);
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
          }
          static get Default() {
            return dt;
          }
          static get DefaultType() {
            return ut;
          }
          static get NAME() {
            return "collapse";
          }
          toggle() {
            this._isShown() ? this.hide() : this.show();
          }
          show() {
            if (this._isTransitioning || this._isShown())
              return;
            let t2 = [];
            if (this._config.parent && (t2 = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t3) => t3 !== this._element).map((t3) => ft.getOrCreateInstance(t3, { toggle: false }))), t2.length && t2[0]._isTransitioning)
              return;
            if (P.trigger(this._element, "show.bs.collapse").defaultPrevented)
              return;
            for (const e3 of t2)
              e3.hide();
            const e2 = this._getDimension();
            this._element.classList.remove(lt), this._element.classList.add(ct), this._element.style[e2] = 0, this._addAriaAndCollapsedClass(this._triggerArray, true), this._isTransitioning = true;
            const i2 = `scroll${e2[0].toUpperCase() + e2.slice(1)}`;
            this._queueCallback(() => {
              this._isTransitioning = false, this._element.classList.remove(ct), this._element.classList.add(lt, at), this._element.style[e2] = "", P.trigger(this._element, "shown.bs.collapse");
            }, this._element, true), this._element.style[e2] = `${this._element[i2]}px`;
          }
          hide() {
            if (this._isTransitioning || !this._isShown())
              return;
            if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented)
              return;
            const t2 = this._getDimension();
            this._element.style[t2] = `${this._element.getBoundingClientRect()[t2]}px`, d(this._element), this._element.classList.add(ct), this._element.classList.remove(lt, at);
            for (const t3 of this._triggerArray) {
              const e2 = n(t3);
              e2 && !this._isShown(e2) && this._addAriaAndCollapsedClass([t3], false);
            }
            this._isTransitioning = true, this._element.style[t2] = "", this._queueCallback(() => {
              this._isTransitioning = false, this._element.classList.remove(ct), this._element.classList.add(lt), P.trigger(this._element, "hidden.bs.collapse");
            }, this._element, true);
          }
          _isShown(t2 = this._element) {
            return t2.classList.contains(at);
          }
          _configAfterMerge(t2) {
            return t2.toggle = Boolean(t2.toggle), t2.parent = r(t2.parent), t2;
          }
          _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
          }
          _initializeChildren() {
            if (!this._config.parent)
              return;
            const t2 = this._getFirstLevelChildren(ht);
            for (const e2 of t2) {
              const t3 = n(e2);
              t3 && this._addAriaAndCollapsedClass([e2], this._isShown(t3));
            }
          }
          _getFirstLevelChildren(t2) {
            const e2 = K.find(":scope .collapse .collapse", this._config.parent);
            return K.find(t2, this._config.parent).filter((t3) => !e2.includes(t3));
          }
          _addAriaAndCollapsedClass(t2, e2) {
            if (t2.length)
              for (const i2 of t2)
                i2.classList.toggle("collapsed", !e2), i2.setAttribute("aria-expanded", e2);
          }
          static jQueryInterface(t2) {
            const e2 = {};
            return "string" == typeof t2 && /show|hide/.test(t2) && (e2.toggle = false), this.each(function() {
              const i2 = ft.getOrCreateInstance(this, e2);
              if ("string" == typeof t2) {
                if (void 0 === i2[t2])
                  throw new TypeError(`No method named "${t2}"`);
                i2[t2]();
              }
            });
          }
        }
        P.on(document, "click.bs.collapse.data-api", ht, function(t2) {
          ("A" === t2.target.tagName || t2.delegateTarget && "A" === t2.delegateTarget.tagName) && t2.preventDefault();
          const e2 = i(this), n2 = K.find(e2);
          for (const t3 of n2)
            ft.getOrCreateInstance(t3, { toggle: false }).toggle();
        }), g(ft);
        var pt = "top", gt = "bottom", mt = "right", _t = "left", bt = "auto", vt = [pt, gt, mt, _t], yt = "start", wt = "end", At = "clippingParents", Et = "viewport", Tt = "popper", Ct = "reference", Ot = vt.reduce(function(t2, e2) {
          return t2.concat([e2 + "-" + yt, e2 + "-" + wt]);
        }, []), xt = [].concat(vt, [bt]).reduce(function(t2, e2) {
          return t2.concat([e2, e2 + "-" + yt, e2 + "-" + wt]);
        }, []), kt = "beforeRead", Lt = "read", Dt = "afterRead", St = "beforeMain", It = "main", Nt = "afterMain", Pt = "beforeWrite", Mt = "write", jt = "afterWrite", Ht = [kt, Lt, Dt, St, It, Nt, Pt, Mt, jt];
        function $t(t2) {
          return t2 ? (t2.nodeName || "").toLowerCase() : null;
        }
        function Wt(t2) {
          if (null == t2)
            return window;
          if ("[object Window]" !== t2.toString()) {
            var e2 = t2.ownerDocument;
            return e2 && e2.defaultView || window;
          }
          return t2;
        }
        function Bt(t2) {
          return t2 instanceof Wt(t2).Element || t2 instanceof Element;
        }
        function Ft(t2) {
          return t2 instanceof Wt(t2).HTMLElement || t2 instanceof HTMLElement;
        }
        function zt(t2) {
          return "undefined" != typeof ShadowRoot && (t2 instanceof Wt(t2).ShadowRoot || t2 instanceof ShadowRoot);
        }
        const Rt = { name: "applyStyles", enabled: true, phase: "write", fn: function(t2) {
          var e2 = t2.state;
          Object.keys(e2.elements).forEach(function(t3) {
            var i2 = e2.styles[t3] || {}, n2 = e2.attributes[t3] || {}, s2 = e2.elements[t3];
            Ft(s2) && $t(s2) && (Object.assign(s2.style, i2), Object.keys(n2).forEach(function(t4) {
              var e3 = n2[t4];
              false === e3 ? s2.removeAttribute(t4) : s2.setAttribute(t4, true === e3 ? "" : e3);
            }));
          });
        }, effect: function(t2) {
          var e2 = t2.state, i2 = { popper: { position: e2.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
          return Object.assign(e2.elements.popper.style, i2.popper), e2.styles = i2, e2.elements.arrow && Object.assign(e2.elements.arrow.style, i2.arrow), function() {
            Object.keys(e2.elements).forEach(function(t3) {
              var n2 = e2.elements[t3], s2 = e2.attributes[t3] || {}, o2 = Object.keys(e2.styles.hasOwnProperty(t3) ? e2.styles[t3] : i2[t3]).reduce(function(t4, e3) {
                return t4[e3] = "", t4;
              }, {});
              Ft(n2) && $t(n2) && (Object.assign(n2.style, o2), Object.keys(s2).forEach(function(t4) {
                n2.removeAttribute(t4);
              }));
            });
          };
        }, requires: ["computeStyles"] };
        function qt(t2) {
          return t2.split("-")[0];
        }
        var Vt = Math.max, Kt = Math.min, Qt = Math.round;
        function Xt(t2, e2) {
          void 0 === e2 && (e2 = false);
          var i2 = t2.getBoundingClientRect(), n2 = 1, s2 = 1;
          if (Ft(t2) && e2) {
            var o2 = t2.offsetHeight, r2 = t2.offsetWidth;
            r2 > 0 && (n2 = Qt(i2.width) / r2 || 1), o2 > 0 && (s2 = Qt(i2.height) / o2 || 1);
          }
          return { width: i2.width / n2, height: i2.height / s2, top: i2.top / s2, right: i2.right / n2, bottom: i2.bottom / s2, left: i2.left / n2, x: i2.left / n2, y: i2.top / s2 };
        }
        function Yt(t2) {
          var e2 = Xt(t2), i2 = t2.offsetWidth, n2 = t2.offsetHeight;
          return Math.abs(e2.width - i2) <= 1 && (i2 = e2.width), Math.abs(e2.height - n2) <= 1 && (n2 = e2.height), { x: t2.offsetLeft, y: t2.offsetTop, width: i2, height: n2 };
        }
        function Ut(t2, e2) {
          var i2 = e2.getRootNode && e2.getRootNode();
          if (t2.contains(e2))
            return true;
          if (i2 && zt(i2)) {
            var n2 = e2;
            do {
              if (n2 && t2.isSameNode(n2))
                return true;
              n2 = n2.parentNode || n2.host;
            } while (n2);
          }
          return false;
        }
        function Gt(t2) {
          return Wt(t2).getComputedStyle(t2);
        }
        function Jt(t2) {
          return ["table", "td", "th"].indexOf($t(t2)) >= 0;
        }
        function Zt(t2) {
          return ((Bt(t2) ? t2.ownerDocument : t2.document) || window.document).documentElement;
        }
        function te(t2) {
          return "html" === $t(t2) ? t2 : t2.assignedSlot || t2.parentNode || (zt(t2) ? t2.host : null) || Zt(t2);
        }
        function ee(t2) {
          return Ft(t2) && "fixed" !== Gt(t2).position ? t2.offsetParent : null;
        }
        function ie(t2) {
          for (var e2 = Wt(t2), i2 = ee(t2); i2 && Jt(i2) && "static" === Gt(i2).position; )
            i2 = ee(i2);
          return i2 && ("html" === $t(i2) || "body" === $t(i2) && "static" === Gt(i2).position) ? e2 : i2 || function(t3) {
            var e3 = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (-1 !== navigator.userAgent.indexOf("Trident") && Ft(t3) && "fixed" === Gt(t3).position)
              return null;
            var i3 = te(t3);
            for (zt(i3) && (i3 = i3.host); Ft(i3) && ["html", "body"].indexOf($t(i3)) < 0; ) {
              var n2 = Gt(i3);
              if ("none" !== n2.transform || "none" !== n2.perspective || "paint" === n2.contain || -1 !== ["transform", "perspective"].indexOf(n2.willChange) || e3 && "filter" === n2.willChange || e3 && n2.filter && "none" !== n2.filter)
                return i3;
              i3 = i3.parentNode;
            }
            return null;
          }(t2) || e2;
        }
        function ne(t2) {
          return ["top", "bottom"].indexOf(t2) >= 0 ? "x" : "y";
        }
        function se(t2, e2, i2) {
          return Vt(t2, Kt(e2, i2));
        }
        function oe(t2) {
          return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t2);
        }
        function re(t2, e2) {
          return e2.reduce(function(e3, i2) {
            return e3[i2] = t2, e3;
          }, {});
        }
        const ae = { name: "arrow", enabled: true, phase: "main", fn: function(t2) {
          var e2, i2 = t2.state, n2 = t2.name, s2 = t2.options, o2 = i2.elements.arrow, r2 = i2.modifiersData.popperOffsets, a2 = qt(i2.placement), l2 = ne(a2), c2 = [_t, mt].indexOf(a2) >= 0 ? "height" : "width";
          if (o2 && r2) {
            var h2 = function(t3, e3) {
              return oe("number" != typeof (t3 = "function" == typeof t3 ? t3(Object.assign({}, e3.rects, { placement: e3.placement })) : t3) ? t3 : re(t3, vt));
            }(s2.padding, i2), d2 = Yt(o2), u2 = "y" === l2 ? pt : _t, f2 = "y" === l2 ? gt : mt, p2 = i2.rects.reference[c2] + i2.rects.reference[l2] - r2[l2] - i2.rects.popper[c2], g2 = r2[l2] - i2.rects.reference[l2], m2 = ie(o2), _2 = m2 ? "y" === l2 ? m2.clientHeight || 0 : m2.clientWidth || 0 : 0, b2 = p2 / 2 - g2 / 2, v2 = h2[u2], y2 = _2 - d2[c2] - h2[f2], w2 = _2 / 2 - d2[c2] / 2 + b2, A2 = se(v2, w2, y2), E2 = l2;
            i2.modifiersData[n2] = ((e2 = {})[E2] = A2, e2.centerOffset = A2 - w2, e2);
          }
        }, effect: function(t2) {
          var e2 = t2.state, i2 = t2.options.element, n2 = void 0 === i2 ? "[data-popper-arrow]" : i2;
          null != n2 && ("string" != typeof n2 || (n2 = e2.elements.popper.querySelector(n2))) && Ut(e2.elements.popper, n2) && (e2.elements.arrow = n2);
        }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
        function le(t2) {
          return t2.split("-")[1];
        }
        var ce = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
        function he(t2) {
          var e2, i2 = t2.popper, n2 = t2.popperRect, s2 = t2.placement, o2 = t2.variation, r2 = t2.offsets, a2 = t2.position, l2 = t2.gpuAcceleration, c2 = t2.adaptive, h2 = t2.roundOffsets, d2 = t2.isFixed, u2 = r2.x, f2 = void 0 === u2 ? 0 : u2, p2 = r2.y, g2 = void 0 === p2 ? 0 : p2, m2 = "function" == typeof h2 ? h2({ x: f2, y: g2 }) : { x: f2, y: g2 };
          f2 = m2.x, g2 = m2.y;
          var _2 = r2.hasOwnProperty("x"), b2 = r2.hasOwnProperty("y"), v2 = _t, y2 = pt, w2 = window;
          if (c2) {
            var A2 = ie(i2), E2 = "clientHeight", T2 = "clientWidth";
            A2 === Wt(i2) && "static" !== Gt(A2 = Zt(i2)).position && "absolute" === a2 && (E2 = "scrollHeight", T2 = "scrollWidth"), (s2 === pt || (s2 === _t || s2 === mt) && o2 === wt) && (y2 = gt, g2 -= (d2 && A2 === w2 && w2.visualViewport ? w2.visualViewport.height : A2[E2]) - n2.height, g2 *= l2 ? 1 : -1), s2 !== _t && (s2 !== pt && s2 !== gt || o2 !== wt) || (v2 = mt, f2 -= (d2 && A2 === w2 && w2.visualViewport ? w2.visualViewport.width : A2[T2]) - n2.width, f2 *= l2 ? 1 : -1);
          }
          var C2, O2 = Object.assign({ position: a2 }, c2 && ce), x2 = true === h2 ? function(t3) {
            var e3 = t3.x, i3 = t3.y, n3 = window.devicePixelRatio || 1;
            return { x: Qt(e3 * n3) / n3 || 0, y: Qt(i3 * n3) / n3 || 0 };
          }({ x: f2, y: g2 }) : { x: f2, y: g2 };
          return f2 = x2.x, g2 = x2.y, l2 ? Object.assign({}, O2, ((C2 = {})[y2] = b2 ? "0" : "", C2[v2] = _2 ? "0" : "", C2.transform = (w2.devicePixelRatio || 1) <= 1 ? "translate(" + f2 + "px, " + g2 + "px)" : "translate3d(" + f2 + "px, " + g2 + "px, 0)", C2)) : Object.assign({}, O2, ((e2 = {})[y2] = b2 ? g2 + "px" : "", e2[v2] = _2 ? f2 + "px" : "", e2.transform = "", e2));
        }
        const de = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(t2) {
          var e2 = t2.state, i2 = t2.options, n2 = i2.gpuAcceleration, s2 = void 0 === n2 || n2, o2 = i2.adaptive, r2 = void 0 === o2 || o2, a2 = i2.roundOffsets, l2 = void 0 === a2 || a2, c2 = { placement: qt(e2.placement), variation: le(e2.placement), popper: e2.elements.popper, popperRect: e2.rects.popper, gpuAcceleration: s2, isFixed: "fixed" === e2.options.strategy };
          null != e2.modifiersData.popperOffsets && (e2.styles.popper = Object.assign({}, e2.styles.popper, he(Object.assign({}, c2, { offsets: e2.modifiersData.popperOffsets, position: e2.options.strategy, adaptive: r2, roundOffsets: l2 })))), null != e2.modifiersData.arrow && (e2.styles.arrow = Object.assign({}, e2.styles.arrow, he(Object.assign({}, c2, { offsets: e2.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: l2 })))), e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-placement": e2.placement });
        }, data: {} };
        var ue = { passive: true };
        const fe = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
        }, effect: function(t2) {
          var e2 = t2.state, i2 = t2.instance, n2 = t2.options, s2 = n2.scroll, o2 = void 0 === s2 || s2, r2 = n2.resize, a2 = void 0 === r2 || r2, l2 = Wt(e2.elements.popper), c2 = [].concat(e2.scrollParents.reference, e2.scrollParents.popper);
          return o2 && c2.forEach(function(t3) {
            t3.addEventListener("scroll", i2.update, ue);
          }), a2 && l2.addEventListener("resize", i2.update, ue), function() {
            o2 && c2.forEach(function(t3) {
              t3.removeEventListener("scroll", i2.update, ue);
            }), a2 && l2.removeEventListener("resize", i2.update, ue);
          };
        }, data: {} };
        var pe = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function ge(t2) {
          return t2.replace(/left|right|bottom|top/g, function(t3) {
            return pe[t3];
          });
        }
        var me = { start: "end", end: "start" };
        function _e(t2) {
          return t2.replace(/start|end/g, function(t3) {
            return me[t3];
          });
        }
        function be(t2) {
          var e2 = Wt(t2);
          return { scrollLeft: e2.pageXOffset, scrollTop: e2.pageYOffset };
        }
        function ve(t2) {
          return Xt(Zt(t2)).left + be(t2).scrollLeft;
        }
        function ye(t2) {
          var e2 = Gt(t2), i2 = e2.overflow, n2 = e2.overflowX, s2 = e2.overflowY;
          return /auto|scroll|overlay|hidden/.test(i2 + s2 + n2);
        }
        function we(t2) {
          return ["html", "body", "#document"].indexOf($t(t2)) >= 0 ? t2.ownerDocument.body : Ft(t2) && ye(t2) ? t2 : we(te(t2));
        }
        function Ae(t2, e2) {
          var i2;
          void 0 === e2 && (e2 = []);
          var n2 = we(t2), s2 = n2 === (null == (i2 = t2.ownerDocument) ? void 0 : i2.body), o2 = Wt(n2), r2 = s2 ? [o2].concat(o2.visualViewport || [], ye(n2) ? n2 : []) : n2, a2 = e2.concat(r2);
          return s2 ? a2 : a2.concat(Ae(te(r2)));
        }
        function Ee(t2) {
          return Object.assign({}, t2, { left: t2.x, top: t2.y, right: t2.x + t2.width, bottom: t2.y + t2.height });
        }
        function Te(t2, e2) {
          return e2 === Et ? Ee(function(t3) {
            var e3 = Wt(t3), i2 = Zt(t3), n2 = e3.visualViewport, s2 = i2.clientWidth, o2 = i2.clientHeight, r2 = 0, a2 = 0;
            return n2 && (s2 = n2.width, o2 = n2.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r2 = n2.offsetLeft, a2 = n2.offsetTop)), { width: s2, height: o2, x: r2 + ve(t3), y: a2 };
          }(t2)) : Bt(e2) ? function(t3) {
            var e3 = Xt(t3);
            return e3.top = e3.top + t3.clientTop, e3.left = e3.left + t3.clientLeft, e3.bottom = e3.top + t3.clientHeight, e3.right = e3.left + t3.clientWidth, e3.width = t3.clientWidth, e3.height = t3.clientHeight, e3.x = e3.left, e3.y = e3.top, e3;
          }(e2) : Ee(function(t3) {
            var e3, i2 = Zt(t3), n2 = be(t3), s2 = null == (e3 = t3.ownerDocument) ? void 0 : e3.body, o2 = Vt(i2.scrollWidth, i2.clientWidth, s2 ? s2.scrollWidth : 0, s2 ? s2.clientWidth : 0), r2 = Vt(i2.scrollHeight, i2.clientHeight, s2 ? s2.scrollHeight : 0, s2 ? s2.clientHeight : 0), a2 = -n2.scrollLeft + ve(t3), l2 = -n2.scrollTop;
            return "rtl" === Gt(s2 || i2).direction && (a2 += Vt(i2.clientWidth, s2 ? s2.clientWidth : 0) - o2), { width: o2, height: r2, x: a2, y: l2 };
          }(Zt(t2)));
        }
        function Ce(t2) {
          var e2, i2 = t2.reference, n2 = t2.element, s2 = t2.placement, o2 = s2 ? qt(s2) : null, r2 = s2 ? le(s2) : null, a2 = i2.x + i2.width / 2 - n2.width / 2, l2 = i2.y + i2.height / 2 - n2.height / 2;
          switch (o2) {
            case pt:
              e2 = { x: a2, y: i2.y - n2.height };
              break;
            case gt:
              e2 = { x: a2, y: i2.y + i2.height };
              break;
            case mt:
              e2 = { x: i2.x + i2.width, y: l2 };
              break;
            case _t:
              e2 = { x: i2.x - n2.width, y: l2 };
              break;
            default:
              e2 = { x: i2.x, y: i2.y };
          }
          var c2 = o2 ? ne(o2) : null;
          if (null != c2) {
            var h2 = "y" === c2 ? "height" : "width";
            switch (r2) {
              case yt:
                e2[c2] = e2[c2] - (i2[h2] / 2 - n2[h2] / 2);
                break;
              case wt:
                e2[c2] = e2[c2] + (i2[h2] / 2 - n2[h2] / 2);
            }
          }
          return e2;
        }
        function Oe(t2, e2) {
          void 0 === e2 && (e2 = {});
          var i2 = e2, n2 = i2.placement, s2 = void 0 === n2 ? t2.placement : n2, o2 = i2.boundary, r2 = void 0 === o2 ? At : o2, a2 = i2.rootBoundary, l2 = void 0 === a2 ? Et : a2, c2 = i2.elementContext, h2 = void 0 === c2 ? Tt : c2, d2 = i2.altBoundary, u2 = void 0 !== d2 && d2, f2 = i2.padding, p2 = void 0 === f2 ? 0 : f2, g2 = oe("number" != typeof p2 ? p2 : re(p2, vt)), m2 = h2 === Tt ? Ct : Tt, _2 = t2.rects.popper, b2 = t2.elements[u2 ? m2 : h2], v2 = function(t3, e3, i3) {
            var n3 = "clippingParents" === e3 ? function(t4) {
              var e4 = Ae(te(t4)), i4 = ["absolute", "fixed"].indexOf(Gt(t4).position) >= 0 && Ft(t4) ? ie(t4) : t4;
              return Bt(i4) ? e4.filter(function(t5) {
                return Bt(t5) && Ut(t5, i4) && "body" !== $t(t5);
              }) : [];
            }(t3) : [].concat(e3), s3 = [].concat(n3, [i3]), o3 = s3[0], r3 = s3.reduce(function(e4, i4) {
              var n4 = Te(t3, i4);
              return e4.top = Vt(n4.top, e4.top), e4.right = Kt(n4.right, e4.right), e4.bottom = Kt(n4.bottom, e4.bottom), e4.left = Vt(n4.left, e4.left), e4;
            }, Te(t3, o3));
            return r3.width = r3.right - r3.left, r3.height = r3.bottom - r3.top, r3.x = r3.left, r3.y = r3.top, r3;
          }(Bt(b2) ? b2 : b2.contextElement || Zt(t2.elements.popper), r2, l2), y2 = Xt(t2.elements.reference), w2 = Ce({ reference: y2, element: _2, strategy: "absolute", placement: s2 }), A2 = Ee(Object.assign({}, _2, w2)), E2 = h2 === Tt ? A2 : y2, T2 = { top: v2.top - E2.top + g2.top, bottom: E2.bottom - v2.bottom + g2.bottom, left: v2.left - E2.left + g2.left, right: E2.right - v2.right + g2.right }, C2 = t2.modifiersData.offset;
          if (h2 === Tt && C2) {
            var O2 = C2[s2];
            Object.keys(T2).forEach(function(t3) {
              var e3 = [mt, gt].indexOf(t3) >= 0 ? 1 : -1, i3 = [pt, gt].indexOf(t3) >= 0 ? "y" : "x";
              T2[t3] += O2[i3] * e3;
            });
          }
          return T2;
        }
        function xe(t2, e2) {
          void 0 === e2 && (e2 = {});
          var i2 = e2, n2 = i2.placement, s2 = i2.boundary, o2 = i2.rootBoundary, r2 = i2.padding, a2 = i2.flipVariations, l2 = i2.allowedAutoPlacements, c2 = void 0 === l2 ? xt : l2, h2 = le(n2), d2 = h2 ? a2 ? Ot : Ot.filter(function(t3) {
            return le(t3) === h2;
          }) : vt, u2 = d2.filter(function(t3) {
            return c2.indexOf(t3) >= 0;
          });
          0 === u2.length && (u2 = d2);
          var f2 = u2.reduce(function(e3, i3) {
            return e3[i3] = Oe(t2, { placement: i3, boundary: s2, rootBoundary: o2, padding: r2 })[qt(i3)], e3;
          }, {});
          return Object.keys(f2).sort(function(t3, e3) {
            return f2[t3] - f2[e3];
          });
        }
        const ke = { name: "flip", enabled: true, phase: "main", fn: function(t2) {
          var e2 = t2.state, i2 = t2.options, n2 = t2.name;
          if (!e2.modifiersData[n2]._skip) {
            for (var s2 = i2.mainAxis, o2 = void 0 === s2 || s2, r2 = i2.altAxis, a2 = void 0 === r2 || r2, l2 = i2.fallbackPlacements, c2 = i2.padding, h2 = i2.boundary, d2 = i2.rootBoundary, u2 = i2.altBoundary, f2 = i2.flipVariations, p2 = void 0 === f2 || f2, g2 = i2.allowedAutoPlacements, m2 = e2.options.placement, _2 = qt(m2), b2 = l2 || (_2 !== m2 && p2 ? function(t3) {
              if (qt(t3) === bt)
                return [];
              var e3 = ge(t3);
              return [_e(t3), e3, _e(e3)];
            }(m2) : [ge(m2)]), v2 = [m2].concat(b2).reduce(function(t3, i3) {
              return t3.concat(qt(i3) === bt ? xe(e2, { placement: i3, boundary: h2, rootBoundary: d2, padding: c2, flipVariations: p2, allowedAutoPlacements: g2 }) : i3);
            }, []), y2 = e2.rects.reference, w2 = e2.rects.popper, A2 = /* @__PURE__ */ new Map(), E2 = true, T2 = v2[0], C2 = 0; C2 < v2.length; C2++) {
              var O2 = v2[C2], x2 = qt(O2), k2 = le(O2) === yt, L2 = [pt, gt].indexOf(x2) >= 0, D2 = L2 ? "width" : "height", S2 = Oe(e2, { placement: O2, boundary: h2, rootBoundary: d2, altBoundary: u2, padding: c2 }), I2 = L2 ? k2 ? mt : _t : k2 ? gt : pt;
              y2[D2] > w2[D2] && (I2 = ge(I2));
              var N2 = ge(I2), P2 = [];
              if (o2 && P2.push(S2[x2] <= 0), a2 && P2.push(S2[I2] <= 0, S2[N2] <= 0), P2.every(function(t3) {
                return t3;
              })) {
                T2 = O2, E2 = false;
                break;
              }
              A2.set(O2, P2);
            }
            if (E2)
              for (var M2 = function(t3) {
                var e3 = v2.find(function(e4) {
                  var i3 = A2.get(e4);
                  if (i3)
                    return i3.slice(0, t3).every(function(t4) {
                      return t4;
                    });
                });
                if (e3)
                  return T2 = e3, "break";
              }, j2 = p2 ? 3 : 1; j2 > 0 && "break" !== M2(j2); j2--)
                ;
            e2.placement !== T2 && (e2.modifiersData[n2]._skip = true, e2.placement = T2, e2.reset = true);
          }
        }, requiresIfExists: ["offset"], data: { _skip: false } };
        function Le(t2, e2, i2) {
          return void 0 === i2 && (i2 = { x: 0, y: 0 }), { top: t2.top - e2.height - i2.y, right: t2.right - e2.width + i2.x, bottom: t2.bottom - e2.height + i2.y, left: t2.left - e2.width - i2.x };
        }
        function De(t2) {
          return [pt, mt, gt, _t].some(function(e2) {
            return t2[e2] >= 0;
          });
        }
        const Se = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(t2) {
          var e2 = t2.state, i2 = t2.name, n2 = e2.rects.reference, s2 = e2.rects.popper, o2 = e2.modifiersData.preventOverflow, r2 = Oe(e2, { elementContext: "reference" }), a2 = Oe(e2, { altBoundary: true }), l2 = Le(r2, n2), c2 = Le(a2, s2, o2), h2 = De(l2), d2 = De(c2);
          e2.modifiersData[i2] = { referenceClippingOffsets: l2, popperEscapeOffsets: c2, isReferenceHidden: h2, hasPopperEscaped: d2 }, e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-reference-hidden": h2, "data-popper-escaped": d2 });
        } }, Ie = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: function(t2) {
          var e2 = t2.state, i2 = t2.options, n2 = t2.name, s2 = i2.offset, o2 = void 0 === s2 ? [0, 0] : s2, r2 = xt.reduce(function(t3, i3) {
            return t3[i3] = function(t4, e3, i4) {
              var n3 = qt(t4), s3 = [_t, pt].indexOf(n3) >= 0 ? -1 : 1, o3 = "function" == typeof i4 ? i4(Object.assign({}, e3, { placement: t4 })) : i4, r3 = o3[0], a3 = o3[1];
              return r3 = r3 || 0, a3 = (a3 || 0) * s3, [_t, mt].indexOf(n3) >= 0 ? { x: a3, y: r3 } : { x: r3, y: a3 };
            }(i3, e2.rects, o2), t3;
          }, {}), a2 = r2[e2.placement], l2 = a2.x, c2 = a2.y;
          null != e2.modifiersData.popperOffsets && (e2.modifiersData.popperOffsets.x += l2, e2.modifiersData.popperOffsets.y += c2), e2.modifiersData[n2] = r2;
        } }, Ne = { name: "popperOffsets", enabled: true, phase: "read", fn: function(t2) {
          var e2 = t2.state, i2 = t2.name;
          e2.modifiersData[i2] = Ce({ reference: e2.rects.reference, element: e2.rects.popper, strategy: "absolute", placement: e2.placement });
        }, data: {} }, Pe = { name: "preventOverflow", enabled: true, phase: "main", fn: function(t2) {
          var e2 = t2.state, i2 = t2.options, n2 = t2.name, s2 = i2.mainAxis, o2 = void 0 === s2 || s2, r2 = i2.altAxis, a2 = void 0 !== r2 && r2, l2 = i2.boundary, c2 = i2.rootBoundary, h2 = i2.altBoundary, d2 = i2.padding, u2 = i2.tether, f2 = void 0 === u2 || u2, p2 = i2.tetherOffset, g2 = void 0 === p2 ? 0 : p2, m2 = Oe(e2, { boundary: l2, rootBoundary: c2, padding: d2, altBoundary: h2 }), _2 = qt(e2.placement), b2 = le(e2.placement), v2 = !b2, y2 = ne(_2), w2 = "x" === y2 ? "y" : "x", A2 = e2.modifiersData.popperOffsets, E2 = e2.rects.reference, T2 = e2.rects.popper, C2 = "function" == typeof g2 ? g2(Object.assign({}, e2.rects, { placement: e2.placement })) : g2, O2 = "number" == typeof C2 ? { mainAxis: C2, altAxis: C2 } : Object.assign({ mainAxis: 0, altAxis: 0 }, C2), x2 = e2.modifiersData.offset ? e2.modifiersData.offset[e2.placement] : null, k2 = { x: 0, y: 0 };
          if (A2) {
            if (o2) {
              var L2, D2 = "y" === y2 ? pt : _t, S2 = "y" === y2 ? gt : mt, I2 = "y" === y2 ? "height" : "width", N2 = A2[y2], P2 = N2 + m2[D2], M2 = N2 - m2[S2], j2 = f2 ? -T2[I2] / 2 : 0, H2 = b2 === yt ? E2[I2] : T2[I2], $2 = b2 === yt ? -T2[I2] : -E2[I2], W2 = e2.elements.arrow, B2 = f2 && W2 ? Yt(W2) : { width: 0, height: 0 }, F2 = e2.modifiersData["arrow#persistent"] ? e2.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, z2 = F2[D2], R2 = F2[S2], q2 = se(0, E2[I2], B2[I2]), V2 = v2 ? E2[I2] / 2 - j2 - q2 - z2 - O2.mainAxis : H2 - q2 - z2 - O2.mainAxis, K2 = v2 ? -E2[I2] / 2 + j2 + q2 + R2 + O2.mainAxis : $2 + q2 + R2 + O2.mainAxis, Q2 = e2.elements.arrow && ie(e2.elements.arrow), X2 = Q2 ? "y" === y2 ? Q2.clientTop || 0 : Q2.clientLeft || 0 : 0, Y2 = null != (L2 = null == x2 ? void 0 : x2[y2]) ? L2 : 0, U2 = N2 + K2 - Y2, G2 = se(f2 ? Kt(P2, N2 + V2 - Y2 - X2) : P2, N2, f2 ? Vt(M2, U2) : M2);
              A2[y2] = G2, k2[y2] = G2 - N2;
            }
            if (a2) {
              var J2, Z2 = "x" === y2 ? pt : _t, tt2 = "x" === y2 ? gt : mt, et2 = A2[w2], it2 = "y" === w2 ? "height" : "width", nt2 = et2 + m2[Z2], st2 = et2 - m2[tt2], ot2 = -1 !== [pt, _t].indexOf(_2), rt2 = null != (J2 = null == x2 ? void 0 : x2[w2]) ? J2 : 0, at2 = ot2 ? nt2 : et2 - E2[it2] - T2[it2] - rt2 + O2.altAxis, lt2 = ot2 ? et2 + E2[it2] + T2[it2] - rt2 - O2.altAxis : st2, ct2 = f2 && ot2 ? function(t3, e3, i3) {
                var n3 = se(t3, e3, i3);
                return n3 > i3 ? i3 : n3;
              }(at2, et2, lt2) : se(f2 ? at2 : nt2, et2, f2 ? lt2 : st2);
              A2[w2] = ct2, k2[w2] = ct2 - et2;
            }
            e2.modifiersData[n2] = k2;
          }
        }, requiresIfExists: ["offset"] };
        function Me(t2, e2, i2) {
          void 0 === i2 && (i2 = false);
          var n2, s2, o2 = Ft(e2), r2 = Ft(e2) && function(t3) {
            var e3 = t3.getBoundingClientRect(), i3 = Qt(e3.width) / t3.offsetWidth || 1, n3 = Qt(e3.height) / t3.offsetHeight || 1;
            return 1 !== i3 || 1 !== n3;
          }(e2), a2 = Zt(e2), l2 = Xt(t2, r2), c2 = { scrollLeft: 0, scrollTop: 0 }, h2 = { x: 0, y: 0 };
          return (o2 || !o2 && !i2) && (("body" !== $t(e2) || ye(a2)) && (c2 = (n2 = e2) !== Wt(n2) && Ft(n2) ? { scrollLeft: (s2 = n2).scrollLeft, scrollTop: s2.scrollTop } : be(n2)), Ft(e2) ? ((h2 = Xt(e2, true)).x += e2.clientLeft, h2.y += e2.clientTop) : a2 && (h2.x = ve(a2))), { x: l2.left + c2.scrollLeft - h2.x, y: l2.top + c2.scrollTop - h2.y, width: l2.width, height: l2.height };
        }
        function je(t2) {
          var e2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Set(), n2 = [];
          function s2(t3) {
            i2.add(t3.name), [].concat(t3.requires || [], t3.requiresIfExists || []).forEach(function(t4) {
              if (!i2.has(t4)) {
                var n3 = e2.get(t4);
                n3 && s2(n3);
              }
            }), n2.push(t3);
          }
          return t2.forEach(function(t3) {
            e2.set(t3.name, t3);
          }), t2.forEach(function(t3) {
            i2.has(t3.name) || s2(t3);
          }), n2;
        }
        var He = { placement: "bottom", modifiers: [], strategy: "absolute" };
        function $e() {
          for (var t2 = arguments.length, e2 = new Array(t2), i2 = 0; i2 < t2; i2++)
            e2[i2] = arguments[i2];
          return !e2.some(function(t3) {
            return !(t3 && "function" == typeof t3.getBoundingClientRect);
          });
        }
        function We(t2) {
          void 0 === t2 && (t2 = {});
          var e2 = t2, i2 = e2.defaultModifiers, n2 = void 0 === i2 ? [] : i2, s2 = e2.defaultOptions, o2 = void 0 === s2 ? He : s2;
          return function(t3, e3, i3) {
            void 0 === i3 && (i3 = o2);
            var s3, r2, a2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, He, o2), modifiersData: {}, elements: { reference: t3, popper: e3 }, attributes: {}, styles: {} }, l2 = [], c2 = false, h2 = { state: a2, setOptions: function(i4) {
              var s4 = "function" == typeof i4 ? i4(a2.options) : i4;
              d2(), a2.options = Object.assign({}, o2, a2.options, s4), a2.scrollParents = { reference: Bt(t3) ? Ae(t3) : t3.contextElement ? Ae(t3.contextElement) : [], popper: Ae(e3) };
              var r3, c3, u2 = function(t4) {
                var e4 = je(t4);
                return Ht.reduce(function(t5, i5) {
                  return t5.concat(e4.filter(function(t6) {
                    return t6.phase === i5;
                  }));
                }, []);
              }((r3 = [].concat(n2, a2.options.modifiers), c3 = r3.reduce(function(t4, e4) {
                var i5 = t4[e4.name];
                return t4[e4.name] = i5 ? Object.assign({}, i5, e4, { options: Object.assign({}, i5.options, e4.options), data: Object.assign({}, i5.data, e4.data) }) : e4, t4;
              }, {}), Object.keys(c3).map(function(t4) {
                return c3[t4];
              })));
              return a2.orderedModifiers = u2.filter(function(t4) {
                return t4.enabled;
              }), a2.orderedModifiers.forEach(function(t4) {
                var e4 = t4.name, i5 = t4.options, n3 = void 0 === i5 ? {} : i5, s5 = t4.effect;
                if ("function" == typeof s5) {
                  var o3 = s5({ state: a2, name: e4, instance: h2, options: n3 });
                  l2.push(o3 || function() {
                  });
                }
              }), h2.update();
            }, forceUpdate: function() {
              if (!c2) {
                var t4 = a2.elements, e4 = t4.reference, i4 = t4.popper;
                if ($e(e4, i4)) {
                  a2.rects = { reference: Me(e4, ie(i4), "fixed" === a2.options.strategy), popper: Yt(i4) }, a2.reset = false, a2.placement = a2.options.placement, a2.orderedModifiers.forEach(function(t5) {
                    return a2.modifiersData[t5.name] = Object.assign({}, t5.data);
                  });
                  for (var n3 = 0; n3 < a2.orderedModifiers.length; n3++)
                    if (true !== a2.reset) {
                      var s4 = a2.orderedModifiers[n3], o3 = s4.fn, r3 = s4.options, l3 = void 0 === r3 ? {} : r3, d3 = s4.name;
                      "function" == typeof o3 && (a2 = o3({ state: a2, options: l3, name: d3, instance: h2 }) || a2);
                    } else
                      a2.reset = false, n3 = -1;
                }
              }
            }, update: (s3 = function() {
              return new Promise(function(t4) {
                h2.forceUpdate(), t4(a2);
              });
            }, function() {
              return r2 || (r2 = new Promise(function(t4) {
                Promise.resolve().then(function() {
                  r2 = void 0, t4(s3());
                });
              })), r2;
            }), destroy: function() {
              d2(), c2 = true;
            } };
            if (!$e(t3, e3))
              return h2;
            function d2() {
              l2.forEach(function(t4) {
                return t4();
              }), l2 = [];
            }
            return h2.setOptions(i3).then(function(t4) {
              !c2 && i3.onFirstUpdate && i3.onFirstUpdate(t4);
            }), h2;
          };
        }
        var Be = We(), Fe = We({ defaultModifiers: [fe, Ne, de, Rt] }), ze = We({ defaultModifiers: [fe, Ne, de, Rt, Ie, ke, Pe, ae, Se] });
        const Re = Object.freeze(Object.defineProperty({ __proto__: null, popperGenerator: We, detectOverflow: Oe, createPopperBase: Be, createPopper: ze, createPopperLite: Fe, top: pt, bottom: gt, right: mt, left: _t, auto: bt, basePlacements: vt, start: yt, end: wt, clippingParents: At, viewport: Et, popper: Tt, reference: Ct, variationPlacements: Ot, placements: xt, beforeRead: kt, read: Lt, afterRead: Dt, beforeMain: St, main: It, afterMain: Nt, beforeWrite: Pt, write: Mt, afterWrite: jt, modifierPhases: Ht, applyStyles: Rt, arrow: ae, computeStyles: de, eventListeners: fe, flip: ke, hide: Se, offset: Ie, popperOffsets: Ne, preventOverflow: Pe }, Symbol.toStringTag, { value: "Module" })), qe = "dropdown", Ve = "ArrowUp", Ke = "ArrowDown", Qe = "click.bs.dropdown.data-api", Xe = "keydown.bs.dropdown.data-api", Ye = "show", Ue = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', Ge = `${Ue}.show`, Je = ".dropdown-menu", Ze = p() ? "top-end" : "top-start", ti = p() ? "top-start" : "top-end", ei = p() ? "bottom-end" : "bottom-start", ii = p() ? "bottom-start" : "bottom-end", ni = p() ? "left-start" : "right-start", si = p() ? "right-start" : "left-start", oi = { offset: [0, 2], boundary: "clippingParents", reference: "toggle", display: "dynamic", popperConfig: null, autoClose: true }, ri = { offset: "(array|string|function)", boundary: "(string|element)", reference: "(string|element|object)", display: "string", popperConfig: "(null|object|function)", autoClose: "(boolean|string)" };
        class ai extends F {
          constructor(t2, e2) {
            super(t2, e2), this._popper = null, this._parent = this._element.parentNode, this._menu = K.findOne(Je, this._parent), this._inNavbar = this._detectNavbar();
          }
          static get Default() {
            return oi;
          }
          static get DefaultType() {
            return ri;
          }
          static get NAME() {
            return qe;
          }
          toggle() {
            return this._isShown() ? this.hide() : this.show();
          }
          show() {
            if (l(this._element) || this._isShown())
              return;
            const t2 = { relatedTarget: this._element };
            if (!P.trigger(this._element, "show.bs.dropdown", t2).defaultPrevented) {
              if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
                for (const t3 of [].concat(...document.body.children))
                  P.on(t3, "mouseover", h);
              this._element.focus(), this._element.setAttribute("aria-expanded", true), this._menu.classList.add(Ye), this._element.classList.add(Ye), P.trigger(this._element, "shown.bs.dropdown", t2);
            }
          }
          hide() {
            if (l(this._element) || !this._isShown())
              return;
            const t2 = { relatedTarget: this._element };
            this._completeHide(t2);
          }
          dispose() {
            this._popper && this._popper.destroy(), super.dispose();
          }
          update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
          }
          _completeHide(t2) {
            if (!P.trigger(this._element, "hide.bs.dropdown", t2).defaultPrevented) {
              if ("ontouchstart" in document.documentElement)
                for (const t3 of [].concat(...document.body.children))
                  P.off(t3, "mouseover", h);
              this._popper && this._popper.destroy(), this._menu.classList.remove(Ye), this._element.classList.remove(Ye), this._element.setAttribute("aria-expanded", "false"), W.removeDataAttribute(this._menu, "popper"), P.trigger(this._element, "hidden.bs.dropdown", t2);
            }
          }
          _getConfig(t2) {
            if ("object" == typeof (t2 = super._getConfig(t2)).reference && !o(t2.reference) && "function" != typeof t2.reference.getBoundingClientRect)
              throw new TypeError(`${qe.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t2;
          }
          _createPopper() {
            if (void 0 === Re)
              throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let t2 = this._element;
            "parent" === this._config.reference ? t2 = this._parent : o(this._config.reference) ? t2 = r(this._config.reference) : "object" == typeof this._config.reference && (t2 = this._config.reference);
            const e2 = this._getPopperConfig();
            this._popper = ze(t2, this._menu, e2);
          }
          _isShown() {
            return this._menu.classList.contains(Ye);
          }
          _getPlacement() {
            const t2 = this._parent;
            if (t2.classList.contains("dropend"))
              return ni;
            if (t2.classList.contains("dropstart"))
              return si;
            if (t2.classList.contains("dropup-center"))
              return "top";
            if (t2.classList.contains("dropdown-center"))
              return "bottom";
            const e2 = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t2.classList.contains("dropup") ? e2 ? ti : Ze : e2 ? ii : ei;
          }
          _detectNavbar() {
            return null !== this._element.closest(".navbar");
          }
          _getOffset() {
            const { offset: t2 } = this._config;
            return "string" == typeof t2 ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
          }
          _getPopperConfig() {
            const t2 = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] };
            return (this._inNavbar || "static" === this._config.display) && (W.setDataAttribute(this._menu, "popper", "static"), t2.modifiers = [{ name: "applyStyles", enabled: false }]), { ...t2, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t2) : this._config.popperConfig };
          }
          _selectMenuItem({ key: t2, target: e2 }) {
            const i2 = K.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t3) => a(t3));
            i2.length && b(i2, e2, t2 === Ke, !i2.includes(e2)).focus();
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = ai.getOrCreateInstance(this, t2);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2])
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
          static clearMenus(t2) {
            if (2 === t2.button || "keyup" === t2.type && "Tab" !== t2.key)
              return;
            const e2 = K.find(Ge);
            for (const i2 of e2) {
              const e3 = ai.getInstance(i2);
              if (!e3 || false === e3._config.autoClose)
                continue;
              const n2 = t2.composedPath(), s2 = n2.includes(e3._menu);
              if (n2.includes(e3._element) || "inside" === e3._config.autoClose && !s2 || "outside" === e3._config.autoClose && s2)
                continue;
              if (e3._menu.contains(t2.target) && ("keyup" === t2.type && "Tab" === t2.key || /input|select|option|textarea|form/i.test(t2.target.tagName)))
                continue;
              const o2 = { relatedTarget: e3._element };
              "click" === t2.type && (o2.clickEvent = t2), e3._completeHide(o2);
            }
          }
          static dataApiKeydownHandler(t2) {
            const e2 = /input|textarea/i.test(t2.target.tagName), i2 = "Escape" === t2.key, n2 = [Ve, Ke].includes(t2.key);
            if (!n2 && !i2)
              return;
            if (e2 && !i2)
              return;
            t2.preventDefault();
            const s2 = K.findOne(Ue, t2.delegateTarget.parentNode), o2 = ai.getOrCreateInstance(s2);
            if (n2)
              return t2.stopPropagation(), o2.show(), void o2._selectMenuItem(t2);
            o2._isShown() && (t2.stopPropagation(), o2.hide(), s2.focus());
          }
        }
        P.on(document, Xe, Ue, ai.dataApiKeydownHandler), P.on(document, Xe, Je, ai.dataApiKeydownHandler), P.on(document, Qe, ai.clearMenus), P.on(document, "keyup.bs.dropdown.data-api", ai.clearMenus), P.on(document, Qe, Ue, function(t2) {
          t2.preventDefault(), ai.getOrCreateInstance(this).toggle();
        }), g(ai);
        const li = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", ci = ".sticky-top", hi = "padding-right", di = "margin-right";
        class ui {
          constructor() {
            this._element = document.body;
          }
          getWidth() {
            const t2 = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t2);
          }
          hide() {
            const t2 = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, hi, (e2) => e2 + t2), this._setElementAttributes(li, hi, (e2) => e2 + t2), this._setElementAttributes(ci, di, (e2) => e2 - t2);
          }
          reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, hi), this._resetElementAttributes(li, hi), this._resetElementAttributes(ci, di);
          }
          isOverflowing() {
            return this.getWidth() > 0;
          }
          _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
          }
          _setElementAttributes(t2, e2, i2) {
            const n2 = this.getWidth();
            this._applyManipulationCallback(t2, (t3) => {
              if (t3 !== this._element && window.innerWidth > t3.clientWidth + n2)
                return;
              this._saveInitialAttribute(t3, e2);
              const s2 = window.getComputedStyle(t3).getPropertyValue(e2);
              t3.style.setProperty(e2, `${i2(Number.parseFloat(s2))}px`);
            });
          }
          _saveInitialAttribute(t2, e2) {
            const i2 = t2.style.getPropertyValue(e2);
            i2 && W.setDataAttribute(t2, e2, i2);
          }
          _resetElementAttributes(t2, e2) {
            this._applyManipulationCallback(t2, (t3) => {
              const i2 = W.getDataAttribute(t3, e2);
              null !== i2 ? (W.removeDataAttribute(t3, e2), t3.style.setProperty(e2, i2)) : t3.style.removeProperty(e2);
            });
          }
          _applyManipulationCallback(t2, e2) {
            if (o(t2))
              e2(t2);
            else
              for (const i2 of K.find(t2, this._element))
                e2(i2);
          }
        }
        const fi = "show", pi = "mousedown.bs.backdrop", gi = { className: "modal-backdrop", isVisible: true, isAnimated: false, rootElement: "body", clickCallback: null }, mi = { className: "string", isVisible: "boolean", isAnimated: "boolean", rootElement: "(element|string)", clickCallback: "(function|null)" };
        class _i extends B {
          constructor(t2) {
            super(), this._config = this._getConfig(t2), this._isAppended = false, this._element = null;
          }
          static get Default() {
            return gi;
          }
          static get DefaultType() {
            return mi;
          }
          static get NAME() {
            return "backdrop";
          }
          show(t2) {
            if (!this._config.isVisible)
              return void m(t2);
            this._append();
            const e2 = this._getElement();
            this._config.isAnimated && d(e2), e2.classList.add(fi), this._emulateAnimation(() => {
              m(t2);
            });
          }
          hide(t2) {
            this._config.isVisible ? (this._getElement().classList.remove(fi), this._emulateAnimation(() => {
              this.dispose(), m(t2);
            })) : m(t2);
          }
          dispose() {
            this._isAppended && (P.off(this._element, pi), this._element.remove(), this._isAppended = false);
          }
          _getElement() {
            if (!this._element) {
              const t2 = document.createElement("div");
              t2.className = this._config.className, this._config.isAnimated && t2.classList.add("fade"), this._element = t2;
            }
            return this._element;
          }
          _configAfterMerge(t2) {
            return t2.rootElement = r(t2.rootElement), t2;
          }
          _append() {
            if (this._isAppended)
              return;
            const t2 = this._getElement();
            this._config.rootElement.append(t2), P.on(t2, pi, () => {
              m(this._config.clickCallback);
            }), this._isAppended = true;
          }
          _emulateAnimation(t2) {
            _(t2, this._getElement(), this._config.isAnimated);
          }
        }
        const bi = ".bs.focustrap", vi = "backward", yi = { trapElement: null, autofocus: true }, wi = { trapElement: "element", autofocus: "boolean" };
        class Ai extends B {
          constructor(t2) {
            super(), this._config = this._getConfig(t2), this._isActive = false, this._lastTabNavDirection = null;
          }
          static get Default() {
            return yi;
          }
          static get DefaultType() {
            return wi;
          }
          static get NAME() {
            return "focustrap";
          }
          activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(), P.off(document, bi), P.on(document, "focusin.bs.focustrap", (t2) => this._handleFocusin(t2)), P.on(document, "keydown.tab.bs.focustrap", (t2) => this._handleKeydown(t2)), this._isActive = true);
          }
          deactivate() {
            this._isActive && (this._isActive = false, P.off(document, bi));
          }
          _handleFocusin(t2) {
            const { trapElement: e2 } = this._config;
            if (t2.target === document || t2.target === e2 || e2.contains(t2.target))
              return;
            const i2 = K.focusableChildren(e2);
            0 === i2.length ? e2.focus() : this._lastTabNavDirection === vi ? i2[i2.length - 1].focus() : i2[0].focus();
          }
          _handleKeydown(t2) {
            "Tab" === t2.key && (this._lastTabNavDirection = t2.shiftKey ? vi : "forward");
          }
        }
        const Ei = "hidden.bs.modal", Ti = "show.bs.modal", Ci = "modal-open", Oi = "show", xi = "modal-static", ki = { backdrop: true, keyboard: true, focus: true }, Li = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean" };
        class Di extends F {
          constructor(t2, e2) {
            super(t2, e2), this._dialog = K.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = false, this._isTransitioning = false, this._scrollBar = new ui(), this._addEventListeners();
          }
          static get Default() {
            return ki;
          }
          static get DefaultType() {
            return Li;
          }
          static get NAME() {
            return "modal";
          }
          toggle(t2) {
            return this._isShown ? this.hide() : this.show(t2);
          }
          show(t2) {
            this._isShown || this._isTransitioning || P.trigger(this._element, Ti, { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._isTransitioning = true, this._scrollBar.hide(), document.body.classList.add(Ci), this._adjustDialog(), this._backdrop.show(() => this._showElement(t2)));
          }
          hide() {
            this._isShown && !this._isTransitioning && (P.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = false, this._isTransitioning = true, this._focustrap.deactivate(), this._element.classList.remove(Oi), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())));
          }
          dispose() {
            for (const t2 of [window, this._dialog])
              P.off(t2, ".bs.modal");
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
          }
          handleUpdate() {
            this._adjustDialog();
          }
          _initializeBackDrop() {
            return new _i({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
          }
          _initializeFocusTrap() {
            return new Ai({ trapElement: this._element });
          }
          _showElement(t2) {
            document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
            const e2 = K.findOne(".modal-body", this._dialog);
            e2 && (e2.scrollTop = 0), d(this._element), this._element.classList.add(Oi), this._queueCallback(() => {
              this._config.focus && this._focustrap.activate(), this._isTransitioning = false, P.trigger(this._element, "shown.bs.modal", { relatedTarget: t2 });
            }, this._dialog, this._isAnimated());
          }
          _addEventListeners() {
            P.on(this._element, "keydown.dismiss.bs.modal", (t2) => {
              if ("Escape" === t2.key)
                return this._config.keyboard ? (t2.preventDefault(), void this.hide()) : void this._triggerBackdropTransition();
            }), P.on(window, "resize.bs.modal", () => {
              this._isShown && !this._isTransitioning && this._adjustDialog();
            }), P.on(this._element, "click.dismiss.bs.modal", (t2) => {
              t2.target === t2.currentTarget && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
            });
          }
          _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._backdrop.hide(() => {
              document.body.classList.remove(Ci), this._resetAdjustments(), this._scrollBar.reset(), P.trigger(this._element, Ei);
            });
          }
          _isAnimated() {
            return this._element.classList.contains("fade");
          }
          _triggerBackdropTransition() {
            if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
              return;
            const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._element.style.overflowY;
            "hidden" === e2 || this._element.classList.contains(xi) || (t2 || (this._element.style.overflowY = "hidden"), this._element.classList.add(xi), this._queueCallback(() => {
              this._element.classList.remove(xi), this._queueCallback(() => {
                this._element.style.overflowY = e2;
              }, this._dialog);
            }, this._dialog), this._element.focus());
          }
          _adjustDialog() {
            const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._scrollBar.getWidth(), i2 = e2 > 0;
            if (i2 && !t2) {
              const t3 = p() ? "paddingLeft" : "paddingRight";
              this._element.style[t3] = `${e2}px`;
            }
            if (!i2 && t2) {
              const t3 = p() ? "paddingRight" : "paddingLeft";
              this._element.style[t3] = `${e2}px`;
            }
          }
          _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
          }
          static jQueryInterface(t2, e2) {
            return this.each(function() {
              const i2 = Di.getOrCreateInstance(this, t2);
              if ("string" == typeof t2) {
                if (void 0 === i2[t2])
                  throw new TypeError(`No method named "${t2}"`);
                i2[t2](e2);
              }
            });
          }
        }
        P.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(t2) {
          const e2 = n(this);
          ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), P.one(e2, Ti, (t3) => {
            t3.defaultPrevented || P.one(e2, Ei, () => {
              a(this) && this.focus();
            });
          });
          const i2 = K.findOne(".modal.show");
          i2 && Di.getInstance(i2).hide(), Di.getOrCreateInstance(e2).toggle(this);
        }), z(Di), g(Di);
        const Si = "show", Ii = "showing", Ni = "hiding", Pi = ".offcanvas.show", Mi = "hidePrevented.bs.offcanvas", ji = "hidden.bs.offcanvas", Hi = { backdrop: true, keyboard: true, scroll: false }, $i = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
        class Wi extends F {
          constructor(t2, e2) {
            super(t2, e2), this._isShown = false, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
          }
          static get Default() {
            return Hi;
          }
          static get DefaultType() {
            return $i;
          }
          static get NAME() {
            return "offcanvas";
          }
          toggle(t2) {
            return this._isShown ? this.hide() : this.show(t2);
          }
          show(t2) {
            this._isShown || P.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._backdrop.show(), this._config.scroll || new ui().hide(), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.classList.add(Ii), this._queueCallback(() => {
              this._config.scroll || this._focustrap.activate(), this._element.classList.add(Si), this._element.classList.remove(Ii), P.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: t2 });
            }, this._element, true));
          }
          hide() {
            this._isShown && (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = false, this._element.classList.add(Ni), this._backdrop.hide(), this._queueCallback(() => {
              this._element.classList.remove(Si, Ni), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new ui().reset(), P.trigger(this._element, ji);
            }, this._element, true)));
          }
          dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
          }
          _initializeBackDrop() {
            const t2 = Boolean(this._config.backdrop);
            return new _i({ className: "offcanvas-backdrop", isVisible: t2, isAnimated: true, rootElement: this._element.parentNode, clickCallback: t2 ? () => {
              "static" !== this._config.backdrop ? this.hide() : P.trigger(this._element, Mi);
            } : null });
          }
          _initializeFocusTrap() {
            return new Ai({ trapElement: this._element });
          }
          _addEventListeners() {
            P.on(this._element, "keydown.dismiss.bs.offcanvas", (t2) => {
              "Escape" === t2.key && (this._config.keyboard ? this.hide() : P.trigger(this._element, Mi));
            });
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = Wi.getOrCreateInstance(this, t2);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2](this);
              }
            });
          }
        }
        P.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(t2) {
          const e2 = n(this);
          if (["A", "AREA"].includes(this.tagName) && t2.preventDefault(), l(this))
            return;
          P.one(e2, ji, () => {
            a(this) && this.focus();
          });
          const i2 = K.findOne(Pi);
          i2 && i2 !== e2 && Wi.getInstance(i2).hide(), Wi.getOrCreateInstance(e2).toggle(this);
        }), P.on(window, "load.bs.offcanvas.data-api", () => {
          for (const t2 of K.find(Pi))
            Wi.getOrCreateInstance(t2).show();
        }), P.on(window, "resize.bs.offcanvas", () => {
          for (const t2 of K.find("[aria-modal][class*=show][class*=offcanvas-]"))
            "fixed" !== getComputedStyle(t2).position && Wi.getOrCreateInstance(t2).hide();
        }), z(Wi), g(Wi);
        const Bi = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), Fi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, zi = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, Ri = (t2, e2) => {
          const i2 = t2.nodeName.toLowerCase();
          return e2.includes(i2) ? !Bi.has(i2) || Boolean(Fi.test(t2.nodeValue) || zi.test(t2.nodeValue)) : e2.filter((t3) => t3 instanceof RegExp).some((t3) => t3.test(i2));
        }, qi = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, Vi = { extraClass: "", template: "<div></div>", content: {}, html: false, sanitize: true, sanitizeFn: null, allowList: qi }, Ki = { extraClass: "(string|function)", template: "string", content: "object", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", allowList: "object" }, Qi = { selector: "(string|element)", entry: "(string|element|function|null)" };
        class Xi extends B {
          constructor(t2) {
            super(), this._config = this._getConfig(t2);
          }
          static get Default() {
            return Vi;
          }
          static get DefaultType() {
            return Ki;
          }
          static get NAME() {
            return "TemplateFactory";
          }
          getContent() {
            return Object.values(this._config.content).map((t2) => this._resolvePossibleFunction(t2)).filter(Boolean);
          }
          hasContent() {
            return this.getContent().length > 0;
          }
          changeContent(t2) {
            return this._checkContent(t2), this._config.content = { ...this._config.content, ...t2 }, this;
          }
          toHtml() {
            const t2 = document.createElement("div");
            t2.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e3, i3] of Object.entries(this._config.content))
              this._setContent(t2, i3, e3);
            const e2 = t2.children[0], i2 = this._resolvePossibleFunction(this._config.extraClass);
            return i2 && e2.classList.add(...i2.split(" ")), e2;
          }
          _typeCheckConfig(t2) {
            super._typeCheckConfig(t2), this._checkContent(t2.content);
          }
          _checkContent(t2) {
            for (const [e2, i2] of Object.entries(t2))
              super._typeCheckConfig({ selector: e2, entry: i2 }, Qi);
          }
          _setContent(t2, e2, i2) {
            const n2 = K.findOne(i2, t2);
            n2 && ((e2 = this._resolvePossibleFunction(e2)) ? o(e2) ? this._putElementInTemplate(r(e2), n2) : this._config.html ? n2.innerHTML = this._maybeSanitize(e2) : n2.textContent = e2 : n2.remove());
          }
          _maybeSanitize(t2) {
            return this._config.sanitize ? function(t3, e2, i2) {
              if (!t3.length)
                return t3;
              if (i2 && "function" == typeof i2)
                return i2(t3);
              const n2 = new window.DOMParser().parseFromString(t3, "text/html"), s2 = [].concat(...n2.body.querySelectorAll("*"));
              for (const t4 of s2) {
                const i3 = t4.nodeName.toLowerCase();
                if (!Object.keys(e2).includes(i3)) {
                  t4.remove();
                  continue;
                }
                const n3 = [].concat(...t4.attributes), s3 = [].concat(e2["*"] || [], e2[i3] || []);
                for (const e3 of n3)
                  Ri(e3, s3) || t4.removeAttribute(e3.nodeName);
              }
              return n2.body.innerHTML;
            }(t2, this._config.allowList, this._config.sanitizeFn) : t2;
          }
          _resolvePossibleFunction(t2) {
            return "function" == typeof t2 ? t2(this) : t2;
          }
          _putElementInTemplate(t2, e2) {
            if (this._config.html)
              return e2.innerHTML = "", void e2.append(t2);
            e2.textContent = t2.textContent;
          }
        }
        const Yi = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), Ui = "fade", Gi = "show", Ji = ".modal", Zi = "hide.bs.modal", tn = "hover", en = "focus", nn = { AUTO: "auto", TOP: "top", RIGHT: p() ? "left" : "right", BOTTOM: "bottom", LEFT: p() ? "right" : "left" }, sn = { animation: true, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: false, selector: false, placement: "top", offset: [0, 0], container: false, fallbackPlacements: ["top", "right", "bottom", "left"], boundary: "clippingParents", customClass: "", sanitize: true, sanitizeFn: null, allowList: qi, popperConfig: null }, on = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(array|string|function)", container: "(string|element|boolean)", fallbackPlacements: "array", boundary: "(string|element)", customClass: "(string|function)", sanitize: "boolean", sanitizeFn: "(null|function)", allowList: "object", popperConfig: "(null|object|function)" };
        class rn extends F {
          constructor(t2, e2) {
            if (void 0 === Re)
              throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t2, e2), this._isEnabled = true, this._timeout = 0, this._isHovered = false, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this.tip = null, this._setListeners();
          }
          static get Default() {
            return sn;
          }
          static get DefaultType() {
            return on;
          }
          static get NAME() {
            return "tooltip";
          }
          enable() {
            this._isEnabled = true;
          }
          disable() {
            this._isEnabled = false;
          }
          toggleEnabled() {
            this._isEnabled = !this._isEnabled;
          }
          toggle(t2) {
            if (this._isEnabled) {
              if (t2) {
                const e2 = this._initializeOnDelegatedTarget(t2);
                return e2._activeTrigger.click = !e2._activeTrigger.click, void (e2._isWithActiveTrigger() ? e2._enter() : e2._leave());
              }
              this._isShown() ? this._leave() : this._enter();
            }
          }
          dispose() {
            clearTimeout(this._timeout), P.off(this._element.closest(Ji), Zi, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose();
          }
          show() {
            if ("none" === this._element.style.display)
              throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled)
              return;
            const t2 = P.trigger(this._element, this.constructor.eventName("show")), e2 = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (t2.defaultPrevented || !e2)
              return;
            const i2 = this._getTipElement();
            this._element.setAttribute("aria-describedby", i2.getAttribute("id"));
            const { container: n2 } = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (n2.append(i2), P.trigger(this._element, this.constructor.eventName("inserted"))), this._popper ? this._popper.update() : this._createPopper(i2), i2.classList.add(Gi), "ontouchstart" in document.documentElement)
              for (const t3 of [].concat(...document.body.children))
                P.on(t3, "mouseover", h);
            this._queueCallback(() => {
              const t3 = this._isHovered;
              this._isHovered = false, P.trigger(this._element, this.constructor.eventName("shown")), t3 && this._leave();
            }, this.tip, this._isAnimated());
          }
          hide() {
            if (!this._isShown())
              return;
            if (P.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented)
              return;
            const t2 = this._getTipElement();
            if (t2.classList.remove(Gi), "ontouchstart" in document.documentElement)
              for (const t3 of [].concat(...document.body.children))
                P.off(t3, "mouseover", h);
            this._activeTrigger.click = false, this._activeTrigger.focus = false, this._activeTrigger.hover = false, this._isHovered = false, this._queueCallback(() => {
              this._isWithActiveTrigger() || (this._isHovered || t2.remove(), this._element.removeAttribute("aria-describedby"), P.trigger(this._element, this.constructor.eventName("hidden")), this._disposePopper());
            }, this.tip, this._isAnimated());
          }
          update() {
            this._popper && this._popper.update();
          }
          _isWithContent() {
            return Boolean(this._getTitle());
          }
          _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._getContentForTemplate())), this.tip;
          }
          _createTipElement(t2) {
            const e2 = this._getTemplateFactory(t2).toHtml();
            if (!e2)
              return null;
            e2.classList.remove(Ui, Gi), e2.classList.add(`bs-${this.constructor.NAME}-auto`);
            const i2 = ((t3) => {
              do {
                t3 += Math.floor(1e6 * Math.random());
              } while (document.getElementById(t3));
              return t3;
            })(this.constructor.NAME).toString();
            return e2.setAttribute("id", i2), this._isAnimated() && e2.classList.add(Ui), e2;
          }
          setContent(t2) {
            let e2 = false;
            this.tip && (e2 = this._isShown(), this.tip.remove(), this.tip = null), this._disposePopper(), this.tip = this._createTipElement(t2), e2 && this.show();
          }
          _getTemplateFactory(t2) {
            return this._templateFactory ? this._templateFactory.changeContent(t2) : this._templateFactory = new Xi({ ...this._config, content: t2, extraClass: this._resolvePossibleFunction(this._config.customClass) }), this._templateFactory;
          }
          _getContentForTemplate() {
            return { ".tooltip-inner": this._getTitle() };
          }
          _getTitle() {
            return this._config.title;
          }
          _initializeOnDelegatedTarget(t2) {
            return this.constructor.getOrCreateInstance(t2.delegateTarget, this._getDelegateConfig());
          }
          _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(Ui);
          }
          _isShown() {
            return this.tip && this.tip.classList.contains(Gi);
          }
          _createPopper(t2) {
            const e2 = "function" == typeof this._config.placement ? this._config.placement.call(this, t2, this._element) : this._config.placement, i2 = nn[e2.toUpperCase()];
            this._popper = ze(this._element, t2, this._getPopperConfig(i2));
          }
          _getOffset() {
            const { offset: t2 } = this._config;
            return "string" == typeof t2 ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
          }
          _resolvePossibleFunction(t2) {
            return "function" == typeof t2 ? t2.call(this._element) : t2;
          }
          _getPopperConfig(t2) {
            const e2 = { placement: t2, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "preSetPlacement", enabled: true, phase: "beforeMain", fn: (t3) => {
              this._getTipElement().setAttribute("data-popper-placement", t3.state.placement);
            } }] };
            return { ...e2, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e2) : this._config.popperConfig };
          }
          _setListeners() {
            const t2 = this._config.trigger.split(" ");
            for (const e2 of t2)
              if ("click" === e2)
                P.on(this._element, this.constructor.eventName("click"), this._config.selector, (t3) => this.toggle(t3));
              else if ("manual" !== e2) {
                const t3 = e2 === tn ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), i2 = e2 === tn ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                P.on(this._element, t3, this._config.selector, (t4) => {
                  const e3 = this._initializeOnDelegatedTarget(t4);
                  e3._activeTrigger["focusin" === t4.type ? en : tn] = true, e3._enter();
                }), P.on(this._element, i2, this._config.selector, (t4) => {
                  const e3 = this._initializeOnDelegatedTarget(t4);
                  e3._activeTrigger["focusout" === t4.type ? en : tn] = e3._element.contains(t4.relatedTarget), e3._leave();
                });
              }
            this._hideModalHandler = () => {
              this._element && this.hide();
            }, P.on(this._element.closest(Ji), Zi, this._hideModalHandler), this._config.selector ? this._config = { ...this._config, trigger: "manual", selector: "" } : this._fixTitle();
          }
          _fixTitle() {
            const t2 = this._config.originalTitle;
            t2 && (this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t2), this._element.removeAttribute("title"));
          }
          _enter() {
            this._isShown() || this._isHovered ? this._isHovered = true : (this._isHovered = true, this._setTimeout(() => {
              this._isHovered && this.show();
            }, this._config.delay.show));
          }
          _leave() {
            this._isWithActiveTrigger() || (this._isHovered = false, this._setTimeout(() => {
              this._isHovered || this.hide();
            }, this._config.delay.hide));
          }
          _setTimeout(t2, e2) {
            clearTimeout(this._timeout), this._timeout = setTimeout(t2, e2);
          }
          _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(true);
          }
          _getConfig(t2) {
            const e2 = W.getDataAttributes(this._element);
            for (const t3 of Object.keys(e2))
              Yi.has(t3) && delete e2[t3];
            return t2 = { ...e2, ..."object" == typeof t2 && t2 ? t2 : {} }, t2 = this._mergeConfigObj(t2), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
          }
          _configAfterMerge(t2) {
            return t2.container = false === t2.container ? document.body : r(t2.container), "number" == typeof t2.delay && (t2.delay = { show: t2.delay, hide: t2.delay }), t2.originalTitle = this._element.getAttribute("title") || "", t2.title = this._resolvePossibleFunction(t2.title) || t2.originalTitle, "number" == typeof t2.title && (t2.title = t2.title.toString()), "number" == typeof t2.content && (t2.content = t2.content.toString()), t2;
          }
          _getDelegateConfig() {
            const t2 = {};
            for (const e2 in this._config)
              this.constructor.Default[e2] !== this._config[e2] && (t2[e2] = this._config[e2]);
            return t2;
          }
          _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null);
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = rn.getOrCreateInstance(this, t2);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2])
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
        }
        g(rn);
        const an = { ...rn.Default, placement: "right", offset: [0, 8], trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }, ln = { ...rn.DefaultType, content: "(null|string|element|function)" };
        class cn extends rn {
          static get Default() {
            return an;
          }
          static get DefaultType() {
            return ln;
          }
          static get NAME() {
            return "popover";
          }
          _isWithContent() {
            return this._getTitle() || this._getContent();
          }
          _getContentForTemplate() {
            return { ".popover-header": this._getTitle(), ".popover-body": this._getContent() };
          }
          _getContent() {
            return this._resolvePossibleFunction(this._config.content);
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = cn.getOrCreateInstance(this, t2);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2])
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
        }
        g(cn);
        const hn = "click.bs.scrollspy", dn = "active", un = "[href]", fn = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: false, target: null }, pn = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element" };
        class gn extends F {
          constructor(t2, e2) {
            super(t2, e2), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }, this.refresh();
          }
          static get Default() {
            return fn;
          }
          static get DefaultType() {
            return pn;
          }
          static get NAME() {
            return "scrollspy";
          }
          refresh() {
            this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const t2 of this._observableSections.values())
              this._observer.observe(t2);
          }
          dispose() {
            this._observer.disconnect(), super.dispose();
          }
          _configAfterMerge(t2) {
            return t2.target = r(t2.target) || document.body, t2;
          }
          _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (P.off(this._config.target, hn), P.on(this._config.target, hn, un, (t2) => {
              const e2 = this._observableSections.get(t2.target.hash);
              if (e2) {
                t2.preventDefault();
                const i2 = this._rootElement || window, n2 = e2.offsetTop - this._element.offsetTop;
                if (i2.scrollTo)
                  return void i2.scrollTo({ top: n2 });
                i2.scrollTop = n2;
              }
            }));
          }
          _getNewObserver() {
            const t2 = { root: this._rootElement, threshold: [0.1, 0.5, 1], rootMargin: this._getRootMargin() };
            return new IntersectionObserver((t3) => this._observerCallback(t3), t2);
          }
          _observerCallback(t2) {
            const e2 = (t3) => this._targetLinks.get(`#${t3.target.id}`), i2 = (t3) => {
              this._previousScrollData.visibleEntryTop = t3.target.offsetTop, this._process(e2(t3));
            }, n2 = (this._rootElement || document.documentElement).scrollTop, s2 = n2 >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = n2;
            for (const o2 of t2) {
              if (!o2.isIntersecting) {
                this._activeTarget = null, this._clearActiveClass(e2(o2));
                continue;
              }
              const t3 = o2.target.offsetTop >= this._previousScrollData.visibleEntryTop;
              if (s2 && t3) {
                if (i2(o2), !n2)
                  return;
              } else
                s2 || t3 || i2(o2);
            }
          }
          _getRootMargin() {
            return this._config.offset ? `${this._config.offset}px 0px -30%` : this._config.rootMargin;
          }
          _initializeTargetsAndObservables() {
            this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
            const t2 = K.find(un, this._config.target);
            for (const e2 of t2) {
              if (!e2.hash || l(e2))
                continue;
              const t3 = K.findOne(e2.hash, this._element);
              a(t3) && (this._targetLinks.set(e2.hash, e2), this._observableSections.set(e2.hash, t3));
            }
          }
          _process(t2) {
            this._activeTarget !== t2 && (this._clearActiveClass(this._config.target), this._activeTarget = t2, t2.classList.add(dn), this._activateParents(t2), P.trigger(this._element, "activate.bs.scrollspy", { relatedTarget: t2 }));
          }
          _activateParents(t2) {
            if (t2.classList.contains("dropdown-item"))
              K.findOne(".dropdown-toggle", t2.closest(".dropdown")).classList.add(dn);
            else
              for (const e2 of K.parents(t2, ".nav, .list-group"))
                for (const t3 of K.prev(e2, ".nav-link, .nav-item > .nav-link, .list-group-item"))
                  t3.classList.add(dn);
          }
          _clearActiveClass(t2) {
            t2.classList.remove(dn);
            const e2 = K.find("[href].active", t2);
            for (const t3 of e2)
              t3.classList.remove(dn);
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = gn.getOrCreateInstance(this, t2);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
        }
        P.on(window, "load.bs.scrollspy.data-api", () => {
          for (const t2 of K.find('[data-bs-spy="scroll"]'))
            gn.getOrCreateInstance(t2);
        }), g(gn);
        const mn = "ArrowLeft", _n = "ArrowRight", bn = "ArrowUp", vn = "ArrowDown", yn = "active", wn = "fade", An = "show", En = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', Tn = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${En}`;
        class Cn extends F {
          constructor(t2) {
            super(t2), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), P.on(this._element, "keydown.bs.tab", (t3) => this._keydown(t3)));
          }
          static get NAME() {
            return "tab";
          }
          show() {
            const t2 = this._element;
            if (this._elemIsActive(t2))
              return;
            const e2 = this._getActiveElem(), i2 = e2 ? P.trigger(e2, "hide.bs.tab", { relatedTarget: t2 }) : null;
            P.trigger(t2, "show.bs.tab", { relatedTarget: e2 }).defaultPrevented || i2 && i2.defaultPrevented || (this._deactivate(e2, t2), this._activate(t2, e2));
          }
          _activate(t2, e2) {
            if (!t2)
              return;
            t2.classList.add(yn), this._activate(n(t2));
            const i2 = t2.classList.contains(wn);
            this._queueCallback(() => {
              i2 && t2.classList.add(An), "tab" === t2.getAttribute("role") && (t2.focus(), t2.removeAttribute("tabindex"), t2.setAttribute("aria-selected", true), this._toggleDropDown(t2, true), P.trigger(t2, "shown.bs.tab", { relatedTarget: e2 }));
            }, t2, i2);
          }
          _deactivate(t2, e2) {
            if (!t2)
              return;
            t2.classList.remove(yn), t2.blur(), this._deactivate(n(t2));
            const i2 = t2.classList.contains(wn);
            this._queueCallback(() => {
              i2 && t2.classList.remove(An), "tab" === t2.getAttribute("role") && (t2.setAttribute("aria-selected", false), t2.setAttribute("tabindex", "-1"), this._toggleDropDown(t2, false), P.trigger(t2, "hidden.bs.tab", { relatedTarget: e2 }));
            }, t2, i2);
          }
          _keydown(t2) {
            if (![mn, _n, bn, vn].includes(t2.key))
              return;
            t2.stopPropagation(), t2.preventDefault();
            const e2 = [_n, vn].includes(t2.key), i2 = b(this._getChildren().filter((t3) => !l(t3)), t2.target, e2, true);
            i2 && Cn.getOrCreateInstance(i2).show();
          }
          _getChildren() {
            return K.find(Tn, this._parent);
          }
          _getActiveElem() {
            return this._getChildren().find((t2) => this._elemIsActive(t2)) || null;
          }
          _setInitialAttributes(t2, e2) {
            this._setAttributeIfNotExists(t2, "role", "tablist");
            for (const t3 of e2)
              this._setInitialAttributesOnChild(t3);
          }
          _setInitialAttributesOnChild(t2) {
            t2 = this._getInnerElement(t2);
            const e2 = this._elemIsActive(t2), i2 = this._getOuterElement(t2);
            t2.setAttribute("aria-selected", e2), i2 !== t2 && this._setAttributeIfNotExists(i2, "role", "presentation"), e2 || t2.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t2, "role", "tab"), this._setInitialAttributesOnTargetPanel(t2);
          }
          _setInitialAttributesOnTargetPanel(t2) {
            const e2 = n(t2);
            e2 && (this._setAttributeIfNotExists(e2, "role", "tabpanel"), t2.id && this._setAttributeIfNotExists(e2, "aria-labelledby", `#${t2.id}`));
          }
          _toggleDropDown(t2, e2) {
            const i2 = this._getOuterElement(t2);
            if (!i2.classList.contains("dropdown"))
              return;
            const n2 = (t3, n3) => {
              const s2 = K.findOne(t3, i2);
              s2 && s2.classList.toggle(n3, e2);
            };
            n2(".dropdown-toggle", yn), n2(".dropdown-menu", An), n2(".dropdown-item", yn), i2.setAttribute("aria-expanded", e2);
          }
          _setAttributeIfNotExists(t2, e2, i2) {
            t2.hasAttribute(e2) || t2.setAttribute(e2, i2);
          }
          _elemIsActive(t2) {
            return t2.classList.contains(yn);
          }
          _getInnerElement(t2) {
            return t2.matches(Tn) ? t2 : K.findOne(Tn, t2);
          }
          _getOuterElement(t2) {
            return t2.closest(".nav-item, .list-group-item") || t2;
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = Cn.getOrCreateInstance(this);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
        }
        P.on(document, "click.bs.tab", En, function(t2) {
          ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), l(this) || Cn.getOrCreateInstance(this).show();
        }), P.on(window, "load.bs.tab", () => {
          for (const t2 of K.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))
            Cn.getOrCreateInstance(t2);
        }), g(Cn);
        const On = "hide", xn = "show", kn = "showing", Ln = { animation: "boolean", autohide: "boolean", delay: "number" }, Dn = { animation: true, autohide: true, delay: 5e3 };
        class Sn extends F {
          constructor(t2, e2) {
            super(t2, e2), this._timeout = null, this._hasMouseInteraction = false, this._hasKeyboardInteraction = false, this._setListeners();
          }
          static get Default() {
            return Dn;
          }
          static get DefaultType() {
            return Ln;
          }
          static get NAME() {
            return "toast";
          }
          show() {
            P.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(On), d(this._element), this._element.classList.add(xn, kn), this._queueCallback(() => {
              this._element.classList.remove(kn), P.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide();
            }, this._element, this._config.animation));
          }
          hide() {
            this.isShown() && (P.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(kn), this._queueCallback(() => {
              this._element.classList.add(On), this._element.classList.remove(kn, xn), P.trigger(this._element, "hidden.bs.toast");
            }, this._element, this._config.animation)));
          }
          dispose() {
            this._clearTimeout(), this.isShown() && this._element.classList.remove(xn), super.dispose();
          }
          isShown() {
            return this._element.classList.contains(xn);
          }
          _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
              this.hide();
            }, this._config.delay)));
          }
          _onInteraction(t2, e2) {
            switch (t2.type) {
              case "mouseover":
              case "mouseout":
                this._hasMouseInteraction = e2;
                break;
              case "focusin":
              case "focusout":
                this._hasKeyboardInteraction = e2;
            }
            if (e2)
              return void this._clearTimeout();
            const i2 = t2.relatedTarget;
            this._element === i2 || this._element.contains(i2) || this._maybeScheduleHide();
          }
          _setListeners() {
            P.on(this._element, "mouseover.bs.toast", (t2) => this._onInteraction(t2, true)), P.on(this._element, "mouseout.bs.toast", (t2) => this._onInteraction(t2, false)), P.on(this._element, "focusin.bs.toast", (t2) => this._onInteraction(t2, true)), P.on(this._element, "focusout.bs.toast", (t2) => this._onInteraction(t2, false));
          }
          _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null;
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = Sn.getOrCreateInstance(this, t2);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2])
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2](this);
              }
            });
          }
        }
        return z(Sn), g(Sn), { Alert: R, Button: V, Carousel: rt, Collapse: ft, Dropdown: ai, Modal: Di, Offcanvas: Wi, Popover: cn, ScrollSpy: gn, Tab: Cn, Toast: Sn, Tooltip: rn };
      });
    }
  });

  // <stdin>
  var import_bootstrap_bundle_min = __toESM(require_bootstrap_bundle_min());
})();
/*! Bundled license information:

bootstrap/dist/js/bootstrap.bundle.min.js:
  (*!
    * Bootstrap v5.2.0-beta1 (https://getbootstrap.com/)
    * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)
*/
