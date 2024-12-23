(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [617],
  {
    6648: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return r.a;
        },
      });
      var i = n(5601),
        r = n.n(i);
    },
    7138: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return r.a;
        },
      });
      var i = n(231),
        r = n.n(i);
    },
    844: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "addLocale", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }),
        n(8157);
      let i = function (e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
          i < t;
          i++
        )
          n[i - 1] = arguments[i];
        return e;
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5944: function (e, t, n) {
      "use strict";
      function i(e, t, n, i) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }),
        n(8157),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    8173: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return _;
          },
        });
      let i = n(9920),
        r = n(1452),
        s = n(7437),
        o = r._(n(2265)),
        a = i._(n(4887)),
        l = i._(n(8321)),
        u = n(497),
        c = n(7103),
        d = n(3938);
      n(2301);
      let h = n(291),
        f = i._(n(1241)),
        p = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function g(e, t, n, i, r, s, o) {
        let a = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== a &&
          ((e["data-loaded-src"] = a),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && r(!0), null == n ? void 0 : n.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let i = !1,
                    r = !1;
                  n.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => i,
                    isPropagationStopped: () => r,
                    persist: () => {},
                    preventDefault: () => {
                      (i = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (r = !0), t.stopPropagation();
                    },
                  });
                }
                (null == i ? void 0 : i.current) && i.current(e);
              }
            }));
      }
      function v(e) {
        return o.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let m = (0, o.forwardRef)((e, t) => {
        let {
          src: n,
          srcSet: i,
          sizes: r,
          height: a,
          width: l,
          decoding: u,
          className: c,
          style: d,
          fetchPriority: h,
          placeholder: f,
          loading: p,
          unoptimized: m,
          fill: y,
          onLoadRef: _,
          onLoadingCompleteRef: b,
          setBlurComplete: w,
          setShowAltText: x,
          sizesInput: k,
          onLoad: P,
          onError: S,
          ...E
        } = e;
        return (0, s.jsx)("img", {
          ...E,
          ...v(h),
          loading: p,
          width: l,
          height: a,
          decoding: u,
          "data-nimg": y ? "fill" : "1",
          className: c,
          style: d,
          sizes: r,
          srcSet: i,
          src: n,
          ref: (0, o.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e &&
                  (S && (e.src = e.src), e.complete && g(e, f, _, b, w, m, k));
            },
            [n, f, _, b, w, S, m, k, t]
          ),
          onLoad: (e) => {
            g(e.currentTarget, f, _, b, w, m, k);
          },
          onError: (e) => {
            x(!0), "empty" !== f && w(!0), S && S(e);
          },
        });
      });
      function y(e) {
        let { isAppRouter: t, imgAttributes: n } = e,
          i = {
            as: "image",
            imageSrcSet: n.srcSet,
            imageSizes: n.sizes,
            crossOrigin: n.crossOrigin,
            referrerPolicy: n.referrerPolicy,
            ...v(n.fetchPriority),
          };
        return t && a.default.preload
          ? (a.default.preload(n.src, i), null)
          : (0, s.jsx)(l.default, {
              children: (0, s.jsx)(
                "link",
                { rel: "preload", href: n.srcSet ? void 0 : n.src, ...i },
                "__nimg-" + n.src + n.srcSet + n.sizes
              ),
            });
      }
      let _ = (0, o.forwardRef)((e, t) => {
        let n = (0, o.useContext)(h.RouterContext),
          i = (0, o.useContext)(d.ImageConfigContext),
          r = (0, o.useMemo)(() => {
            let e = p || i || c.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              n = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: n };
          }, [i]),
          { onLoad: a, onLoadingComplete: l } = e,
          g = (0, o.useRef)(a);
        (0, o.useEffect)(() => {
          g.current = a;
        }, [a]);
        let v = (0, o.useRef)(l);
        (0, o.useEffect)(() => {
          v.current = l;
        }, [l]);
        let [_, b] = (0, o.useState)(!1),
          [w, x] = (0, o.useState)(!1),
          { props: k, meta: P } = (0, u.getImgProps)(e, {
            defaultLoader: f.default,
            imgConf: r,
            blurComplete: _,
            showAltText: w,
          });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(m, {
              ...k,
              unoptimized: P.unoptimized,
              placeholder: P.placeholder,
              fill: P.fill,
              onLoadRef: g,
              onLoadingCompleteRef: v,
              setBlurComplete: b,
              setShowAltText: x,
              sizesInput: e.sizes,
              ref: t,
            }),
            P.priority
              ? (0, s.jsx)(y, { isAppRouter: !n, imgAttributes: k })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    231: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let i = n(9920),
        r = n(7437),
        s = i._(n(2265)),
        o = n(8016),
        a = n(8029),
        l = n(1142),
        u = n(3461),
        c = n(844),
        d = n(291),
        h = n(4467),
        f = n(3106),
        p = n(5944),
        g = n(4897),
        v = n(1507),
        m = new Set();
      function y(e, t, n, i, r, s) {
        if ("undefined" != typeof window && (s || (0, a.isLocalURL)(t))) {
          if (!i.bypassPrefetchedCheck) {
            let r =
              t +
              "%" +
              n +
              "%" +
              (void 0 !== i.locale
                ? i.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (m.has(r)) return;
            m.add(r);
          }
          (async () => (s ? e.prefetch(t, r) : e.prefetch(t, n, i)))().catch(
            (e) => {}
          );
        }
      }
      function _(e) {
        return "string" == typeof e ? e : (0, l.formatUrl)(e);
      }
      let b = s.default.forwardRef(function (e, t) {
        let n, i;
        let {
          href: l,
          as: m,
          children: b,
          prefetch: w = null,
          passHref: x,
          replace: k,
          shallow: P,
          scroll: S,
          locale: E,
          onClick: R,
          onMouseEnter: T,
          onTouchStart: C,
          legacyBehavior: A = !1,
          ...F
        } = e;
        (n = b),
          A &&
            ("string" == typeof n || "number" == typeof n) &&
            (n = (0, r.jsx)("a", { children: n }));
        let M = s.default.useContext(d.RouterContext),
          I = s.default.useContext(h.AppRouterContext),
          O = null != M ? M : I,
          j = !M,
          D = !1 !== w,
          L = null === w ? v.PrefetchKind.AUTO : v.PrefetchKind.FULL,
          { href: $, as: N } = s.default.useMemo(() => {
            if (!M) {
              let e = _(l);
              return { href: e, as: m ? _(m) : e };
            }
            let [e, t] = (0, o.resolveHref)(M, l, !0);
            return { href: e, as: m ? (0, o.resolveHref)(M, m) : t || e };
          }, [M, l, m]),
          V = s.default.useRef($),
          B = s.default.useRef(N);
        A && (i = s.default.Children.only(n));
        let q = A ? i && "object" == typeof i && i.ref : t,
          [z, U, W] = (0, f.useIntersection)({ rootMargin: "200px" }),
          H = s.default.useCallback(
            (e) => {
              (B.current !== N || V.current !== $) &&
                (W(), (B.current = N), (V.current = $)),
                z(e),
                q &&
                  ("function" == typeof q
                    ? q(e)
                    : "object" == typeof q && (q.current = e));
            },
            [N, q, $, W, z]
          );
        s.default.useEffect(() => {
          O && U && D && y(O, $, N, { locale: E }, { kind: L }, j);
        }, [N, $, U, E, D, null == M ? void 0 : M.locale, O, j, L]);
        let G = {
          ref: H,
          onClick(e) {
            A || "function" != typeof R || R(e),
              A &&
                i.props &&
                "function" == typeof i.props.onClick &&
                i.props.onClick(e),
              O &&
                !e.defaultPrevented &&
                (function (e, t, n, i, r, o, l, u, c) {
                  let { nodeName: d } = e.currentTarget;
                  if (
                    "A" === d.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!c && !(0, a.isLocalURL)(n)))
                  )
                    return;
                  e.preventDefault();
                  let h = () => {
                    let e = null == l || l;
                    "beforePopState" in t
                      ? t[r ? "replace" : "push"](n, i, {
                          shallow: o,
                          locale: u,
                          scroll: e,
                        })
                      : t[r ? "replace" : "push"](i || n, { scroll: e });
                  };
                  c ? s.default.startTransition(h) : h();
                })(e, O, $, N, k, P, S, E, j);
          },
          onMouseEnter(e) {
            A || "function" != typeof T || T(e),
              A &&
                i.props &&
                "function" == typeof i.props.onMouseEnter &&
                i.props.onMouseEnter(e),
              O &&
                (D || !j) &&
                y(
                  O,
                  $,
                  N,
                  { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: L },
                  j
                );
          },
          onTouchStart: function (e) {
            A || "function" != typeof C || C(e),
              A &&
                i.props &&
                "function" == typeof i.props.onTouchStart &&
                i.props.onTouchStart(e),
              O &&
                (D || !j) &&
                y(
                  O,
                  $,
                  N,
                  { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: L },
                  j
                );
          },
        };
        if ((0, u.isAbsoluteUrl)(N)) G.href = N;
        else if (!A || x || ("a" === i.type && !("href" in i.props))) {
          let e = void 0 !== E ? E : null == M ? void 0 : M.locale,
            t =
              (null == M ? void 0 : M.isLocaleDomain) &&
              (0, p.getDomainLocale)(
                N,
                e,
                null == M ? void 0 : M.locales,
                null == M ? void 0 : M.domainLocales
              );
          G.href =
            t ||
            (0, g.addBasePath)(
              (0, c.addLocale)(N, e, null == M ? void 0 : M.defaultLocale)
            );
        }
        return A
          ? s.default.cloneElement(i, G)
          : (0, r.jsx)("a", { ...F, ...G, children: n });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    9189: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          cancelIdleCallback: function () {
            return i;
          },
          requestIdleCallback: function () {
            return n;
          },
        });
      let n =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        i =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8016: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "resolveHref", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let i = n(8323),
        r = n(1142),
        s = n(5519),
        o = n(3461),
        a = n(8157),
        l = n(8029),
        u = n(9195),
        c = n(20);
      function d(e, t, n) {
        let d;
        let h = "string" == typeof t ? t : (0, r.formatWithValidation)(t),
          f = h.match(/^[a-zA-Z]{1,}:\/\//),
          p = f ? h.slice(f[0].length) : h;
        if ((p.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              h +
              "' passed to next/router in page: '" +
              e.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href."
          );
          let t = (0, o.normalizeRepeatedSlashes)(p);
          h = (f ? f[0] : "") + t;
        }
        if (!(0, l.isLocalURL)(h)) return n ? [h] : h;
        try {
          d = new URL(h.startsWith("#") ? e.asPath : e.pathname, "http://n");
        } catch (e) {
          d = new URL("/", "http://n");
        }
        try {
          let e = new URL(h, d);
          e.pathname = (0, a.normalizePathTrailingSlash)(e.pathname);
          let t = "";
          if ((0, u.isDynamicRoute)(e.pathname) && e.searchParams && n) {
            let n = (0, i.searchParamsToUrlQuery)(e.searchParams),
              { result: o, params: a } = (0, c.interpolateAs)(
                e.pathname,
                e.pathname,
                n
              );
            o &&
              (t = (0, r.formatWithValidation)({
                pathname: o,
                hash: e.hash,
                query: (0, s.omit)(n, a),
              }));
          }
          let o =
            e.origin === d.origin ? e.href.slice(e.origin.length) : e.href;
          return n ? [o, t || o] : o;
        } catch (e) {
          return n ? [h] : h;
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3106: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let i = n(2265),
        r = n(9189),
        s = "function" == typeof IntersectionObserver,
        o = new Map(),
        a = [];
      function l(e) {
        let { rootRef: t, rootMargin: n, disabled: l } = e,
          u = l || !s,
          [c, d] = (0, i.useState)(!1),
          h = (0, i.useRef)(null),
          f = (0, i.useCallback)((e) => {
            h.current = e;
          }, []);
        return (
          (0, i.useEffect)(() => {
            if (s) {
              if (u || c) return;
              let e = h.current;
              if (e && e.tagName)
                return (function (e, t, n) {
                  let {
                    id: i,
                    observer: r,
                    elements: s,
                  } = (function (e) {
                    let t;
                    let n = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      i = a.find(
                        (e) => e.root === n.root && e.margin === n.margin
                      );
                    if (i && (t = o.get(i))) return t;
                    let r = new Map();
                    return (
                      (t = {
                        id: n,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = r.get(e.target),
                              n = e.isIntersecting || e.intersectionRatio > 0;
                            t && n && t(n);
                          });
                        }, e),
                        elements: r,
                      }),
                      a.push(n),
                      o.set(n, t),
                      t
                    );
                  })(n);
                  return (
                    s.set(e, t),
                    r.observe(e),
                    function () {
                      if ((s.delete(e), r.unobserve(e), 0 === s.size)) {
                        r.disconnect(), o.delete(i);
                        let e = a.findIndex(
                          (e) => e.root === i.root && e.margin === i.margin
                        );
                        e > -1 && a.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && d(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: n,
                });
            } else if (!c) {
              let e = (0, r.requestIdleCallback)(() => d(!0));
              return () => (0, r.cancelIdleCallback)(e);
            }
          }, [u, n, t, c, h.current]),
          [
            f,
            c,
            (0, i.useCallback)(() => {
              d(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2901: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let i = n(9920)._(n(2265)).default.createContext({});
    },
    687: function (e, t) {
      "use strict";
      function n(e) {
        let {
          ampFirst: t = !1,
          hybrid: n = !1,
          hasQuery: i = !1,
        } = void 0 === e ? {} : e;
        return t || (n && i);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    1943: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let n = /[|\\{}()[\]^$+*?.-]/,
        i = /[|\\{}()[\]^$+*?.-]/g;
      function r(e) {
        return n.test(e) ? e.replace(i, "\\$&") : e;
      }
    },
    497: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        n(2301);
      let i = n(1564),
        r = n(7103);
      function s(e) {
        return void 0 !== e.default;
      }
      function o(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function a(e, t) {
        var n;
        let a,
          l,
          u,
          {
            src: c,
            sizes: d,
            unoptimized: h = !1,
            priority: f = !1,
            loading: p,
            className: g,
            quality: v,
            width: m,
            height: y,
            fill: _ = !1,
            style: b,
            overrideSrc: w,
            onLoad: x,
            onLoadingComplete: k,
            placeholder: P = "empty",
            blurDataURL: S,
            fetchPriority: E,
            layout: R,
            objectFit: T,
            objectPosition: C,
            lazyBoundary: A,
            lazyRoot: F,
            ...M
          } = e,
          { imgConf: I, showAltText: O, blurComplete: j, defaultLoader: D } = t,
          L = I || r.imageConfigDefault;
        if ("allSizes" in L) a = L;
        else {
          let e = [...L.deviceSizes, ...L.imageSizes].sort((e, t) => e - t),
            t = L.deviceSizes.sort((e, t) => e - t);
          a = { ...L, allSizes: e, deviceSizes: t };
        }
        if (void 0 === D)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let $ = M.loader || D;
        delete M.loader, delete M.srcSet;
        let N = "__next_img_default" in $;
        if (N) {
          if ("custom" === a.loader)
            throw Error(
              'Image with src "' +
                c +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = $;
          $ = (t) => {
            let { config: n, ...i } = t;
            return e(i);
          };
        }
        if (R) {
          "fill" === R && (_ = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[R];
          e && (b = { ...b, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[R];
          t && !d && (d = t);
        }
        let V = "",
          B = o(m),
          q = o(y);
        if ("object" == typeof (n = c) && (s(n) || void 0 !== n.src)) {
          let e = s(c) ? c.default : c;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((l = e.blurWidth),
            (u = e.blurHeight),
            (S = S || e.blurDataURL),
            (V = e.src),
            !_)
          ) {
            if (B || q) {
              if (B && !q) {
                let t = B / e.width;
                q = Math.round(e.height * t);
              } else if (!B && q) {
                let t = q / e.height;
                B = Math.round(e.width * t);
              }
            } else (B = e.width), (q = e.height);
          }
        }
        let z = !f && ("lazy" === p || void 0 === p);
        (!(c = "string" == typeof c ? c : V) ||
          c.startsWith("data:") ||
          c.startsWith("blob:")) &&
          ((h = !0), (z = !1)),
          a.unoptimized && (h = !0),
          N && c.endsWith(".svg") && !a.dangerouslyAllowSVG && (h = !0),
          f && (E = "high");
        let U = o(v),
          W = Object.assign(
            _
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: T,
                  objectPosition: C,
                }
              : {},
            O ? {} : { color: "transparent" },
            b
          ),
          H =
            j || "empty" === P
              ? null
              : "blur" === P
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, i.getImageBlurSvg)({
                  widthInt: B,
                  heightInt: q,
                  blurWidth: l,
                  blurHeight: u,
                  blurDataURL: S || "",
                  objectFit: W.objectFit,
                }) +
                '")'
              : 'url("' + P + '")',
          G = H
            ? {
                backgroundSize: W.objectFit || "cover",
                backgroundPosition: W.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: H,
              }
            : {},
          X = (function (e) {
            let {
              config: t,
              src: n,
              unoptimized: i,
              width: r,
              quality: s,
              sizes: o,
              loader: a,
            } = e;
            if (i) return { src: n, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: u } = (function (e, t, n) {
                let { deviceSizes: i, allSizes: r } = e;
                if (n) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let i; (i = e.exec(n)); i) t.push(parseInt(i[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: r.filter((t) => t >= i[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: r, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: i, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => r.find((t) => t >= e) || r[r.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, r, o),
              c = l.length - 1;
            return {
              sizes: o || "w" !== u ? o : "100vw",
              srcSet: l
                .map(
                  (e, i) =>
                    a({ config: t, src: n, quality: s, width: e }) +
                    " " +
                    ("w" === u ? e : i + 1) +
                    u
                )
                .join(", "),
              src: a({ config: t, src: n, quality: s, width: l[c] }),
            };
          })({
            config: a,
            src: c,
            unoptimized: h,
            width: B,
            quality: U,
            sizes: d,
            loader: $,
          });
        return {
          props: {
            ...M,
            loading: z ? "lazy" : p,
            fetchPriority: E,
            width: B,
            height: q,
            decoding: "async",
            className: g,
            style: { ...W, ...G },
            sizes: X.sizes,
            srcSet: X.srcSet,
            src: w || X.src,
          },
          meta: { unoptimized: h, priority: f, placeholder: P, fill: _ },
        };
      }
    },
    8321: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return g;
          },
          defaultHead: function () {
            return d;
          },
        });
      let i = n(9920),
        r = n(1452),
        s = n(7437),
        o = r._(n(2265)),
        a = i._(n(5960)),
        l = n(2901),
        u = n(6590),
        c = n(687);
      function d(e) {
        void 0 === e && (e = !1);
        let t = [(0, s.jsx)("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              (0, s.jsx)("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function h(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === o.default.Fragment
          ? e.concat(
              o.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      n(2301);
      let f = ["name", "httpEquiv", "charSet", "itemProp"];
      function p(e, t) {
        let { inAmpMode: n } = t;
        return e
          .reduce(h, [])
          .reverse()
          .concat(d(n).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                n = new Set(),
                i = {};
              return (r) => {
                let s = !0,
                  o = !1;
                if (
                  r.key &&
                  "number" != typeof r.key &&
                  r.key.indexOf("$") > 0
                ) {
                  o = !0;
                  let t = r.key.slice(r.key.indexOf("$") + 1);
                  e.has(t) ? (s = !1) : e.add(t);
                }
                switch (r.type) {
                  case "title":
                  case "base":
                    t.has(r.type) ? (s = !1) : t.add(r.type);
                    break;
                  case "meta":
                    for (let e = 0, t = f.length; e < t; e++) {
                      let t = f[e];
                      if (r.props.hasOwnProperty(t)) {
                        if ("charSet" === t) n.has(t) ? (s = !1) : n.add(t);
                        else {
                          let e = r.props[t],
                            n = i[t] || new Set();
                          ("name" !== t || !o) && n.has(e)
                            ? (s = !1)
                            : (n.add(e), (i[t] = n));
                        }
                      }
                    }
                }
                return s;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let i = e.key || t;
            if (
              !n &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                o.default.cloneElement(e, t)
              );
            }
            return o.default.cloneElement(e, { key: i });
          });
      }
      let g = function (e) {
        let { children: t } = e,
          n = (0, o.useContext)(l.AmpStateContext),
          i = (0, o.useContext)(u.HeadManagerContext);
        return (0, s.jsx)(a.default, {
          reduceComponentsToState: p,
          headManager: i,
          inAmpMode: (0, c.isInAmpMode)(n),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1564: function (e, t) {
      "use strict";
      function n(e) {
        let {
            widthInt: t,
            heightInt: n,
            blurWidth: i,
            blurHeight: r,
            blurDataURL: s,
            objectFit: o,
          } = e,
          a = i ? 40 * i : t,
          l = r ? 40 * r : n,
          u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === o
            ? "xMidYMid"
            : "cover" === o
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          s +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    3938: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let i = n(9920)._(n(2265)),
        r = n(7103),
        s = i.default.createContext(r.imageConfigDefault);
    },
    7103: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          VALID_LOADERS: function () {
            return n;
          },
          imageConfigDefault: function () {
            return i;
          },
        });
      let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
        i = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    5601: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return a;
          },
        });
      let i = n(9920),
        r = n(497),
        s = n(8173),
        o = i._(n(1241));
      function a(e) {
        let { props: t } = (0, r.getImgProps)(e, {
          defaultLoader: o.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
        return { props: t };
      }
      let l = s.Image;
    },
    1241: function (e, t) {
      "use strict";
      function n(e) {
        let { config: t, src: n, width: i, quality: r } = e;
        return n;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }),
        (n.__next_img_default = !0);
      let i = n;
    },
    291: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let i = n(9920)._(n(2265)).default.createContext(null);
    },
    1142: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          formatUrl: function () {
            return s;
          },
          formatWithValidation: function () {
            return a;
          },
          urlObjectKeys: function () {
            return o;
          },
        });
      let i = n(1452)._(n(8323)),
        r = /https?|ftp|gopher|file/;
      function s(e) {
        let { auth: t, hostname: n } = e,
          s = e.protocol || "",
          o = e.pathname || "",
          a = e.hash || "",
          l = e.query || "",
          u = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (u = t + e.host)
            : n &&
              ((u = t + (~n.indexOf(":") ? "[" + n + "]" : n)),
              e.port && (u += ":" + e.port)),
          l &&
            "object" == typeof l &&
            (l = String(i.urlQueryToSearchParams(l)));
        let c = e.search || (l && "?" + l) || "";
        return (
          s && !s.endsWith(":") && (s += ":"),
          e.slashes || ((!s || r.test(s)) && !1 !== u)
            ? ((u = "//" + (u || "")), o && "/" !== o[0] && (o = "/" + o))
            : u || (u = ""),
          a && "#" !== a[0] && (a = "#" + a),
          c && "?" !== c[0] && (c = "?" + c),
          "" +
            s +
            u +
            (o = o.replace(/[?#]/g, encodeURIComponent)) +
            (c = c.replace("#", "%23")) +
            a
        );
      }
      let o = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function a(e) {
        return s(e);
      }
    },
    9195: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getSortedRoutes: function () {
            return i.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return r.isDynamicRoute;
          },
        });
      let i = n(9089),
        r = n(8083);
    },
    20: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let i = n(1533),
        r = n(3169);
      function s(e, t, n) {
        let s = "",
          o = (0, r.getRouteRegex)(e),
          a = o.groups,
          l = (t !== e ? (0, i.getRouteMatcher)(o)(t) : "") || n;
        s = e;
        let u = Object.keys(a);
        return (
          u.every((e) => {
            let t = l[e] || "",
              { repeat: n, optional: i } = a[e],
              r = "[" + (n ? "..." : "") + e + "]";
            return (
              i && (r = (t ? "" : "/") + "[" + r + "]"),
              n && !Array.isArray(t) && (t = [t]),
              (i || e in l) &&
                (s =
                  s.replace(
                    r,
                    n
                      ? t.map((e) => encodeURIComponent(e)).join("/")
                      : encodeURIComponent(t)
                  ) || "/")
            );
          }) || (s = ""),
          { params: u, result: s }
        );
      }
    },
    8083: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let i = n(2269),
        r = /\/\[[^/]+?\](?=\/|$)/;
      function s(e) {
        return (
          (0, i.isInterceptionRouteAppPath)(e) &&
            (e = (0, i.extractInterceptionRouteInformation)(
              e
            ).interceptedRoute),
          r.test(e)
        );
      }
    },
    8029: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let i = n(3461),
        r = n(9404);
      function s(e) {
        if (!(0, i.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, i.getLocationOrigin)(),
            n = new URL(e, t);
          return n.origin === t && (0, r.hasBasePath)(n.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    5519: function (e, t) {
      "use strict";
      function n(e, t) {
        let n = {};
        return (
          Object.keys(e).forEach((i) => {
            t.includes(i) || (n[i] = e[i]);
          }),
          n
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "omit", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    8323: function (e, t) {
      "use strict";
      function n(e) {
        let t = {};
        return (
          e.forEach((e, n) => {
            void 0 === t[n]
              ? (t[n] = e)
              : Array.isArray(t[n])
              ? t[n].push(e)
              : (t[n] = [t[n], e]);
          }),
          t
        );
      }
      function i(e) {
        return "string" != typeof e &&
          ("number" != typeof e || isNaN(e)) &&
          "boolean" != typeof e
          ? ""
          : String(e);
      }
      function r(e) {
        let t = new URLSearchParams();
        return (
          Object.entries(e).forEach((e) => {
            let [n, r] = e;
            Array.isArray(r)
              ? r.forEach((e) => t.append(n, i(e)))
              : t.set(n, i(r));
          }),
          t
        );
      }
      function s(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
          i < t;
          i++
        )
          n[i - 1] = arguments[i];
        return (
          n.forEach((t) => {
            Array.from(t.keys()).forEach((t) => e.delete(t)),
              t.forEach((t, n) => e.append(n, t));
          }),
          e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          assign: function () {
            return s;
          },
          searchParamsToUrlQuery: function () {
            return n;
          },
          urlQueryToSearchParams: function () {
            return r;
          },
        });
    },
    1533: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let i = n(3461);
      function r(e) {
        let { re: t, groups: n } = e;
        return (e) => {
          let r = t.exec(e);
          if (!r) return !1;
          let s = (e) => {
              try {
                return decodeURIComponent(e);
              } catch (e) {
                throw new i.DecodeError("failed to decode param");
              }
            },
            o = {};
          return (
            Object.keys(n).forEach((e) => {
              let t = n[e],
                i = r[t.pos];
              void 0 !== i &&
                (o[e] = ~i.indexOf("/")
                  ? i.split("/").map((e) => s(e))
                  : t.repeat
                  ? [s(i)]
                  : s(i));
            }),
            o
          );
        };
      }
    },
    3169: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getNamedMiddlewareRegex: function () {
            return h;
          },
          getNamedRouteRegex: function () {
            return d;
          },
          getRouteRegex: function () {
            return l;
          },
        });
      let i = n(2269),
        r = n(1943),
        s = n(7741);
      function o(e) {
        let t = e.startsWith("[") && e.endsWith("]");
        t && (e = e.slice(1, -1));
        let n = e.startsWith("...");
        return n && (e = e.slice(3)), { key: e, repeat: n, optional: t };
      }
      function a(e) {
        let t = (0, s.removeTrailingSlash)(e).slice(1).split("/"),
          n = {},
          a = 1;
        return {
          parameterizedRoute: t
            .map((e) => {
              let t = i.INTERCEPTION_ROUTE_MARKERS.find((t) => e.startsWith(t)),
                s = e.match(/\[((?:\[.*\])|.+)\]/);
              if (t && s) {
                let { key: e, optional: i, repeat: l } = o(s[1]);
                return (
                  (n[e] = { pos: a++, repeat: l, optional: i }),
                  "/" + (0, r.escapeStringRegexp)(t) + "([^/]+?)"
                );
              }
              if (!s) return "/" + (0, r.escapeStringRegexp)(e);
              {
                let { key: e, repeat: t, optional: i } = o(s[1]);
                return (
                  (n[e] = { pos: a++, repeat: t, optional: i }),
                  t ? (i ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: n,
        };
      }
      function l(e) {
        let { parameterizedRoute: t, groups: n } = a(e);
        return { re: RegExp("^" + t + "(?:/)?$"), groups: n };
      }
      function u(e) {
        let {
            interceptionMarker: t,
            getSafeRouteKey: n,
            segment: i,
            routeKeys: s,
            keyPrefix: a,
          } = e,
          { key: l, optional: u, repeat: c } = o(i),
          d = l.replace(/\W/g, "");
        a && (d = "" + a + d);
        let h = !1;
        (0 === d.length || d.length > 30) && (h = !0),
          isNaN(parseInt(d.slice(0, 1))) || (h = !0),
          h && (d = n()),
          a ? (s[d] = "" + a + l) : (s[d] = l);
        let f = t ? (0, r.escapeStringRegexp)(t) : "";
        return c
          ? u
            ? "(?:/" + f + "(?<" + d + ">.+?))?"
            : "/" + f + "(?<" + d + ">.+?)"
          : "/" + f + "(?<" + d + ">[^/]+?)";
      }
      function c(e, t) {
        let n;
        let o = (0, s.removeTrailingSlash)(e).slice(1).split("/"),
          a =
            ((n = 0),
            () => {
              let e = "",
                t = ++n;
              for (; t > 0; )
                (e += String.fromCharCode(97 + ((t - 1) % 26))),
                  (t = Math.floor((t - 1) / 26));
              return e;
            }),
          l = {};
        return {
          namedParameterizedRoute: o
            .map((e) => {
              let n = i.INTERCEPTION_ROUTE_MARKERS.some((t) => e.startsWith(t)),
                s = e.match(/\[((?:\[.*\])|.+)\]/);
              if (n && s) {
                let [n] = e.split(s[0]);
                return u({
                  getSafeRouteKey: a,
                  interceptionMarker: n,
                  segment: s[1],
                  routeKeys: l,
                  keyPrefix: t ? "nxtI" : void 0,
                });
              }
              return s
                ? u({
                    getSafeRouteKey: a,
                    segment: s[1],
                    routeKeys: l,
                    keyPrefix: t ? "nxtP" : void 0,
                  })
                : "/" + (0, r.escapeStringRegexp)(e);
            })
            .join(""),
          routeKeys: l,
        };
      }
      function d(e, t) {
        let n = c(e, t);
        return {
          ...l(e),
          namedRegex: "^" + n.namedParameterizedRoute + "(?:/)?$",
          routeKeys: n.routeKeys,
        };
      }
      function h(e, t) {
        let { parameterizedRoute: n } = a(e),
          { catchAll: i = !0 } = t;
        if ("/" === n) return { namedRegex: "^/" + (i ? ".*" : "") + "$" };
        let { namedParameterizedRoute: r } = c(e, !1);
        return { namedRegex: "^" + r + (i ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    9089: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getSortedRoutes", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      class n {
        insert(e) {
          this._insert(e.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(e) {
          void 0 === e && (e = "/");
          let t = [...this.children.keys()].sort();
          null !== this.slugName && t.splice(t.indexOf("[]"), 1),
            null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName &&
              t.splice(t.indexOf("[[...]]"), 1);
          let n = t
            .map((t) => this.children.get(t)._smoosh("" + e + t + "/"))
            .reduce((e, t) => [...e, ...t], []);
          if (
            (null !== this.slugName &&
              n.push(
                ...this.children
                  .get("[]")
                  ._smoosh(e + "[" + this.slugName + "]/")
              ),
            !this.placeholder)
          ) {
            let t = "/" === e ? "/" : e.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  t +
                  '" and "' +
                  t +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").'
              );
            n.unshift(t);
          }
          return (
            null !== this.restSlugName &&
              n.push(
                ...this.children
                  .get("[...]")
                  ._smoosh(e + "[..." + this.restSlugName + "]/")
              ),
            null !== this.optionalRestSlugName &&
              n.push(
                ...this.children
                  .get("[[...]]")
                  ._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/")
              ),
            n
          );
        }
        _insert(e, t, i) {
          if (0 === e.length) {
            this.placeholder = !1;
            return;
          }
          if (i) throw Error("Catch-all must be the last part of the URL.");
          let r = e[0];
          if (r.startsWith("[") && r.endsWith("]")) {
            let n = r.slice(1, -1),
              o = !1;
            if (
              (n.startsWith("[") &&
                n.endsWith("]") &&
                ((n = n.slice(1, -1)), (o = !0)),
              n.startsWith("...") && ((n = n.substring(3)), (i = !0)),
              n.startsWith("[") || n.endsWith("]"))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  n +
                  "')."
              );
            if (n.startsWith("."))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  n +
                  "')."
              );
            function s(e, n) {
              if (null !== e && e !== n)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    e +
                    "' !== '" +
                    n +
                    "')."
                );
              t.forEach((e) => {
                if (e === n)
                  throw Error(
                    'You cannot have the same slug name "' +
                      n +
                      '" repeat within a single dynamic path'
                  );
                if (e.replace(/\W/g, "") === r.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      e +
                      '" and "' +
                      n +
                      '" differ only by non-word symbols within a single dynamic path'
                  );
              }),
                t.push(n);
            }
            if (i) {
              if (o) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      e[0] +
                      '" ).'
                  );
                s(this.optionalRestSlugName, n),
                  (this.optionalRestSlugName = n),
                  (r = "[[...]]");
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      e[0] +
                      '").'
                  );
                s(this.restSlugName, n), (this.restSlugName = n), (r = "[...]");
              }
            } else {
              if (o)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    e[0] +
                    '").'
                );
              s(this.slugName, n), (this.slugName = n), (r = "[]");
            }
          }
          this.children.has(r) || this.children.set(r, new n()),
            this.children.get(r)._insert(e.slice(1), t, i);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function i(e) {
        let t = new n();
        return e.forEach((e) => t.insert(e)), t.smoosh();
      }
    },
    5960: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let i = n(2265),
        r = "undefined" == typeof window,
        s = r ? () => {} : i.useLayoutEffect,
        o = r ? () => {} : i.useEffect;
      function a(e) {
        let { headManager: t, reduceComponentsToState: n } = e;
        function a() {
          if (t && t.mountedInstances) {
            let r = i.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(n(r, e));
          }
        }
        if (r) {
          var l;
          null == t || null == (l = t.mountedInstances) || l.add(e.children),
            a();
        }
        return (
          s(() => {
            var n;
            return (
              null == t ||
                null == (n = t.mountedInstances) ||
                n.add(e.children),
              () => {
                var n;
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.delete(e.children);
              }
            );
          }),
          s(
            () => (
              t && (t._pendingUpdate = a),
              () => {
                t && (t._pendingUpdate = a);
              }
            )
          ),
          o(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    3461: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          DecodeError: function () {
            return p;
          },
          MiddlewareNotFoundError: function () {
            return y;
          },
          MissingStaticPage: function () {
            return m;
          },
          NormalizeError: function () {
            return g;
          },
          PageNotFoundError: function () {
            return v;
          },
          SP: function () {
            return h;
          },
          ST: function () {
            return f;
          },
          WEB_VITALS: function () {
            return n;
          },
          execOnce: function () {
            return i;
          },
          getDisplayName: function () {
            return l;
          },
          getLocationOrigin: function () {
            return o;
          },
          getURL: function () {
            return a;
          },
          isAbsoluteUrl: function () {
            return s;
          },
          isResSent: function () {
            return u;
          },
          loadGetInitialProps: function () {
            return d;
          },
          normalizeRepeatedSlashes: function () {
            return c;
          },
          stringifyError: function () {
            return _;
          },
        });
      let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function i(e) {
        let t,
          n = !1;
        return function () {
          for (var i = arguments.length, r = Array(i), s = 0; s < i; s++)
            r[s] = arguments[s];
          return n || ((n = !0), (t = e(...r))), t;
        };
      }
      let r = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        s = (e) => r.test(e);
      function o() {
        let { protocol: e, hostname: t, port: n } = window.location;
        return e + "//" + t + (n ? ":" + n : "");
      }
      function a() {
        let { href: e } = window.location,
          t = o();
        return e.substring(t.length);
      }
      function l(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function u(e) {
        return e.finished || e.headersSent;
      }
      function c(e) {
        let t = e.split("?");
        return (
          t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (t[1] ? "?" + t.slice(1).join("?") : "")
        );
      }
      async function d(e, t) {
        let n = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await d(t.Component, t.ctx) }
            : {};
        let i = await e.getInitialProps(t);
        if (n && u(n)) return i;
        if (!i)
          throw Error(
            '"' +
              l(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              i +
              '" instead.'
          );
        return i;
      }
      let h = "undefined" != typeof performance,
        f =
          h &&
          ["mark", "measure", "getEntriesByName"].every(
            (e) => "function" == typeof performance[e]
          );
      class p extends Error {}
      class g extends Error {}
      class v extends Error {
        constructor(e) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e);
        }
      }
      class m extends Error {
        constructor(e, t) {
          super(),
            (this.message =
              "Failed to load static file for page: " + e + " " + t);
        }
      }
      class y extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function _(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    82: function (e, t, n) {
      "use strict";
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function r(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                u(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function s(e) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw TypeError("Cannot call a class as a function");
      }
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function l(e, t, n) {
        return (
          t && a(e.prototype, t),
          n && a(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function u(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function c(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var i,
                r,
                s = [],
                o = !0,
                a = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (i = n.next()).done) &&
                  (s.push(i.value), !t || s.length !== t);
                  o = !0
                );
              } catch (e) {
                (a = !0), (r = e);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (a) throw r;
                }
              }
              return s;
            }
          })(e, t) ||
          h(e, t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function d(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return f(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          h(e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function h(e, t) {
        if (e) {
          if ("string" == typeof e) return f(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? f(e, t)
              : void 0
          );
        }
      }
      function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function p(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = h(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[i++] };
              },
              e: function (e) {
                throw e;
              },
              f: r,
            };
          }
          throw TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var s,
          o = !0,
          a = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (o = e.done), e;
          },
          e: function (e) {
            (a = !0), (s = e);
          },
          f: function () {
            try {
              o || null == n.return || n.return();
            } finally {
              if (a) throw s;
            }
          },
        };
      }
      n.d(t, {
        ZP: function () {
          return rt;
        },
      });
      var g = { DEBUG: !1, LIB_VERSION: "1.139.6" },
        v = Array.isArray,
        m = Object.prototype,
        y = m.hasOwnProperty,
        _ = m.toString,
        b =
          v ||
          function (e) {
            return "[object Array]" === _.call(e);
          },
        w = function (e) {
          return "function" == typeof e;
        },
        x = function (e) {
          return e === Object(e) && !b(e);
        },
        k = function (e) {
          if (x(e)) {
            for (var t in e) if (y.call(e, t)) return !1;
            return !0;
          }
          return !1;
        },
        P = function (e) {
          return void 0 === e;
        },
        S = function (e) {
          return "[object String]" == _.call(e);
        },
        E = function (e) {
          return null === e;
        },
        R = function (e) {
          return P(e) || E(e);
        },
        T = function (e) {
          return "[object Number]" == _.call(e);
        },
        C = function (e) {
          return "[object Boolean]" === _.call(e);
        },
        A = "undefined" != typeof window ? window : void 0,
        F = "undefined" != typeof globalThis ? globalThis : A,
        M = Array.prototype,
        I = M.forEach,
        O = M.indexOf,
        j = null == F ? void 0 : F.navigator,
        D = null == F ? void 0 : F.document,
        L = null == F ? void 0 : F.location,
        $ = null == F ? void 0 : F.fetch,
        N =
          null != F &&
          F.XMLHttpRequest &&
          "withCredentials" in new F.XMLHttpRequest()
            ? F.XMLHttpRequest
            : void 0,
        V = null == F ? void 0 : F.AbortController,
        B = null == j ? void 0 : j.userAgent,
        q = null != A ? A : {},
        z = "[PostHog.js]",
        U = {
          _log: function (e) {
            if (
              A &&
              (g.DEBUG || q.POSTHOG_DEBUG) &&
              !P(A.console) &&
              A.console
            ) {
              for (
                var t =
                    ("__rrweb_original__" in A.console[e])
                      ? A.console[e].__rrweb_original__
                      : A.console[e],
                  n = arguments.length,
                  i = Array(n > 1 ? n - 1 : 0),
                  r = 1;
                r < n;
                r++
              )
                i[r - 1] = arguments[r];
              t.apply(void 0, [z].concat(i));
            }
          },
          info: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            U._log.apply(U, ["log"].concat(t));
          },
          warn: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            U._log.apply(U, ["warn"].concat(t));
          },
          error: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            U._log.apply(U, ["error"].concat(t));
          },
          critical: function () {
            for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++)
              n[i] = arguments[i];
            (e = console).error.apply(e, [z].concat(n));
          },
          uninitializedWarning: function (e) {
            U.error("You must initialize PostHog before calling ".concat(e));
          },
        },
        W = {},
        H = function (e) {
          return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        };
      function G(e, t, n) {
        if (b(e)) {
          if (I && e.forEach === I) e.forEach(t, n);
          else if ("length" in e && e.length === +e.length) {
            for (var i = 0, r = e.length; i < r; i++)
              if (i in e && t.call(n, e[i], i) === W) return;
          }
        }
      }
      function X(e, t, n) {
        if (!R(e)) {
          if (b(e)) return G(e, t, n);
          if (e instanceof FormData) {
            var i,
              r = p(e.entries());
            try {
              for (r.s(); !(i = r.n()).done; ) {
                var s = i.value;
                if (t.call(n, s[1], s[0]) === W) return;
              }
            } catch (e) {
              r.e(e);
            } finally {
              r.f();
            }
          } else
            for (var o in e)
              if (y.call(e, o) && t.call(n, e[o], o) === W) return;
        }
      }
      var Y = function (e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
          i < t;
          i++
        )
          n[i - 1] = arguments[i];
        return (
          G(n, function (t) {
            for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
          }),
          e
        );
      };
      function K(e, t) {
        return -1 !== e.indexOf(t);
      }
      function Z(e) {
        for (var t = Object.keys(e), n = t.length, i = Array(n); n--; )
          i[n] = [t[n], e[t[n]]];
        return i;
      }
      var Q,
        J = function () {
          return (
            (Date.now =
              Date.now ||
              function () {
                return +new Date();
              }),
            Date.now()
          );
        },
        ee = function (e) {
          try {
            return e();
          } catch (e) {
            return;
          }
        },
        et = function (e) {
          return function () {
            try {
              for (var t = arguments.length, n = Array(t), i = 0; i < t; i++)
                n[i] = arguments[i];
              return e.apply(this, n);
            } catch (e) {
              U.critical(
                "Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."
              ),
                U.critical(e);
            }
          };
        },
        en = function (e) {
          var t = {};
          return (
            X(e, function (e, n) {
              S(e) && e.length > 0 && (t[n] = e);
            }),
            t
          );
        },
        ei = function (e) {
          return e.replace(/^\$/, "");
        },
        er = function (e) {
          var t,
            n,
            i,
            r,
            s = "";
          for (
            t = n = 0,
              i = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n"))
                .length,
              r = 0;
            r < i;
            r++
          ) {
            var o = e.charCodeAt(r),
              a = null;
            o < 128
              ? n++
              : (a =
                  o > 127 && o < 2048
                    ? String.fromCharCode((o >> 6) | 192, (63 & o) | 128)
                    : String.fromCharCode(
                        (o >> 12) | 224,
                        ((o >> 6) & 63) | 128,
                        (63 & o) | 128
                      )),
              E(a) ||
                (n > t && (s += e.substring(t, n)), (s += a), (t = n = r + 1));
          }
          return n > t && (s += e.substring(t, e.length)), s;
        },
        es = (function () {
          function e(t) {
            return (
              t &&
                ((t.preventDefault = e.preventDefault),
                (t.stopPropagation = e.stopPropagation)),
              t
            );
          }
          return (
            (e.preventDefault = function () {
              this.returnValue = !1;
            }),
            (e.stopPropagation = function () {
              this.cancelBubble = !0;
            }),
            function (t, n, i, r, s) {
              if (t) {
                if (t.addEventListener && !r) t.addEventListener(n, i, !!s);
                else {
                  var o = "on" + n,
                    a = t[o];
                  t[o] = function (n) {
                    if ((n = n || e(null == A ? void 0 : A.event))) {
                      var r,
                        s = !0;
                      w(a) && (r = a(n));
                      var o = i.call(t, n);
                      return (!1 !== r && !1 !== o) || (s = !1), s;
                    }
                  };
                }
              } else U.error("No valid element provided to register_event");
            }
          );
        })();
      function eo(e, t) {
        var n = function () {
          if (!D) return t("document not found");
          var n = D.createElement("script");
          (n.type = "text/javascript"),
            (n.src = e),
            (n.onload = function (e) {
              return t(void 0, e);
            }),
            (n.onerror = function (e) {
              return t(e);
            });
          var i,
            r = D.querySelectorAll("body > script");
          r.length > 0
            ? null === (i = r[0].parentNode) ||
              void 0 === i ||
              i.insertBefore(n, r[0])
            : D.body.appendChild(n);
        };
        null != D && D.body
          ? n()
          : null == D || D.addEventListener("DOMContentLoaded", n);
      }
      function ea(e, t) {
        for (var n = 0; n < e.length; n++) if (t(e[n])) return e[n];
      }
      ((eH = Q || (Q = {})).GZipJS = "gzip-js"), (eH.Base64 = "base64");
      var el = "$people_distinct_id",
        eu = "__alias",
        ec = "__timers",
        ed = "$autocapture_disabled_server_side",
        eh = "$heatmaps_enabled_server_side",
        ef = "$session_recording_enabled_server_side",
        ep = "$console_log_recording_enabled_server_side",
        eg = "$session_recording_network_payload_capture",
        ev = "$session_recording_canvas_recording",
        em = "$replay_sample_rate",
        ey = "$replay_minimum_duration",
        e_ = "$sesid",
        eb = "$session_is_sampled",
        ew = "$enabled_feature_flags",
        ex = "$early_access_features",
        ek = "$stored_person_properties",
        eP = "$stored_group_properties",
        eS = "$surveys",
        eE = "$surveys_activated",
        eR = "$flag_call_reported",
        eT = "$user_state",
        eC = "$client_session_props",
        eA = "$capture_rate_limit",
        eF = "$initial_campaign_params",
        eM = "$initial_referrer_info",
        eI = "$initial_person_info",
        eO = "$epp",
        ej = "__POSTHOG_TOOLBAR__",
        eD = [
          el,
          eu,
          "__cmpns",
          ec,
          ef,
          eh,
          e_,
          ew,
          eT,
          ex,
          eP,
          ek,
          eS,
          eR,
          eC,
          eA,
          eF,
          eM,
          eO,
        ],
        eL = "$active_feature_flags",
        e$ = "$override_feature_flags",
        eN = "$feature_flag_payloads",
        eV = function (e) {
          var t,
            n = {},
            i = p(Z(e || {}));
          try {
            for (i.s(); !(t = i.n()).done; ) {
              var r = c(t.value, 2),
                s = r[0],
                o = r[1];
              o && (n[s] = o);
            }
          } catch (e) {
            i.e(e);
          } finally {
            i.f();
          }
          return n;
        },
        eB = (function () {
          function e(t) {
            o(this, e),
              (this.instance = t),
              (this._override_warning = !1),
              (this.featureFlagEventHandlers = []),
              (this.reloadFeatureFlagsQueued = !1),
              (this.reloadFeatureFlagsInAction = !1);
          }
          return (
            l(e, [
              {
                key: "getFlags",
                value: function () {
                  return Object.keys(this.getFlagVariants());
                },
              },
              {
                key: "getFlagVariants",
                value: function () {
                  var e = this.instance.get_property(ew),
                    t = this.instance.get_property(e$);
                  if (!t) return e || {};
                  for (
                    var n = Y({}, e), i = Object.keys(t), r = 0;
                    r < i.length;
                    r++
                  )
                    n[i[r]] = t[i[r]];
                  return (
                    this._override_warning ||
                      (U.warn(" Overriding feature flags!", {
                        enabledFlags: e,
                        overriddenFlags: t,
                        finalFlags: n,
                      }),
                      (this._override_warning = !0)),
                    n
                  );
                },
              },
              {
                key: "getFlagPayloads",
                value: function () {
                  return this.instance.get_property(eN) || {};
                },
              },
              {
                key: "reloadFeatureFlags",
                value: function () {
                  this.reloadFeatureFlagsQueued ||
                    ((this.reloadFeatureFlagsQueued = !0),
                    this._startReloadTimer());
                },
              },
              {
                key: "setAnonymousDistinctId",
                value: function (e) {
                  this.$anon_distinct_id = e;
                },
              },
              {
                key: "setReloadingPaused",
                value: function (e) {
                  this.reloadFeatureFlagsInAction = e;
                },
              },
              {
                key: "resetRequestQueue",
                value: function () {
                  this.reloadFeatureFlagsQueued = !1;
                },
              },
              {
                key: "_startReloadTimer",
                value: function () {
                  var e = this;
                  this.reloadFeatureFlagsQueued &&
                    !this.reloadFeatureFlagsInAction &&
                    setTimeout(function () {
                      !e.reloadFeatureFlagsInAction &&
                        e.reloadFeatureFlagsQueued &&
                        ((e.reloadFeatureFlagsQueued = !1),
                        e._reloadFeatureFlagsRequest());
                    }, 5);
                },
              },
              {
                key: "_reloadFeatureFlagsRequest",
                value: function () {
                  var e = this;
                  if (!this.instance.config.advanced_disable_feature_flags) {
                    this.setReloadingPaused(!0);
                    var t = this.instance.config.token,
                      n = this.instance.get_property(ek),
                      i = this.instance.get_property(eP),
                      r = {
                        token: t,
                        distinct_id: this.instance.get_distinct_id(),
                        groups: this.instance.getGroups(),
                        $anon_distinct_id: this.$anon_distinct_id,
                        person_properties: n,
                        group_properties: i,
                        disable_flags:
                          this.instance.config.advanced_disable_feature_flags ||
                          void 0,
                      };
                    this.instance._send_request({
                      method: "POST",
                      url: this.instance.requestRouter.endpointFor(
                        "api",
                        "/decide/?v=3"
                      ),
                      data: r,
                      compression: this.instance.config.disable_compression
                        ? void 0
                        : Q.Base64,
                      timeout:
                        this.instance.config.feature_flag_request_timeout_ms,
                      callback: function (t) {
                        e.setReloadingPaused(!1);
                        var n,
                          i = !0;
                        200 === t.statusCode &&
                          ((e.$anon_distinct_id = void 0), (i = !1)),
                          e.receivedFeatureFlags(
                            null !== (n = t.json) && void 0 !== n ? n : {},
                            i
                          ),
                          e._startReloadTimer();
                      },
                    });
                  }
                },
              },
              {
                key: "getFeatureFlag",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  if (
                    this.instance.decideEndpointWasHit ||
                    (this.getFlags() && this.getFlags().length > 0)
                  ) {
                    var n,
                      i = this.getFlagVariants()[e],
                      r = "".concat(i),
                      s = this.instance.get_property(eR) || {};
                    return (
                      (!t.send_event && "send_event" in t) ||
                        (e in s && s[e].includes(r)) ||
                        (b(s[e]) ? s[e].push(r) : (s[e] = [r]),
                        null === (n = this.instance.persistence) ||
                          void 0 === n ||
                          n.register(u({}, eR, s)),
                        this.instance.capture("$feature_flag_called", {
                          $feature_flag: e,
                          $feature_flag_response: i,
                        })),
                      i
                    );
                  }
                  U.warn(
                    'getFeatureFlag for key "' +
                      e +
                      "\" failed. Feature flags didn't load in time."
                  );
                },
              },
              {
                key: "getFeatureFlagPayload",
                value: function (e) {
                  return this.getFlagPayloads()[e];
                },
              },
              {
                key: "isFeatureEnabled",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  if (
                    this.instance.decideEndpointWasHit ||
                    (this.getFlags() && this.getFlags().length > 0)
                  )
                    return !!this.getFeatureFlag(e, t);
                  U.warn(
                    'isFeatureEnabled for key "' +
                      e +
                      "\" failed. Feature flags didn't load in time."
                  );
                },
              },
              {
                key: "addFeatureFlagsHandler",
                value: function (e) {
                  this.featureFlagEventHandlers.push(e);
                },
              },
              {
                key: "removeFeatureFlagsHandler",
                value: function (e) {
                  this.featureFlagEventHandlers =
                    this.featureFlagEventHandlers.filter(function (t) {
                      return t !== e;
                    });
                },
              },
              {
                key: "receivedFeatureFlags",
                value: function (e, t) {
                  if (this.instance.persistence) {
                    this.instance.decideEndpointWasHit = !0;
                    var n = this.getFlagVariants(),
                      i = this.getFlagPayloads();
                    (function (e, t) {
                      var n,
                        i =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {},
                        s =
                          arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : {},
                        o = e.featureFlags,
                        a = e.featureFlagPayloads;
                      if (o) {
                        if (b(o)) {
                          var l,
                            c = {};
                          if (o)
                            for (var d = 0; d < o.length; d++) c[o[d]] = !0;
                          t && t.register((u((l = {}), eL, o), u(l, ew, c), l));
                        } else {
                          var h = o,
                            f = a;
                          e.errorsWhileComputingFlags &&
                            ((h = r(r({}, i), h)), (f = r(r({}, s), f))),
                            t &&
                              t.register(
                                (u((n = {}), eL, Object.keys(eV(h))),
                                u(n, ew, h || {}),
                                u(n, eN, f || {}),
                                n)
                              );
                        }
                      }
                    })(e, this.instance.persistence, n, i),
                      this._fireFeatureFlagsCallbacks(t);
                  }
                },
              },
              {
                key: "override",
                value: function (e) {
                  if (!this.instance.__loaded || !this.instance.persistence)
                    return U.uninitializedWarning(
                      "posthog.feature_flags.override"
                    );
                  if (((this._override_warning = !1), !1 === e))
                    this.instance.persistence.unregister(e$);
                  else if (b(e)) {
                    for (var t = {}, n = 0; n < e.length; n++) t[e[n]] = !0;
                    this.instance.persistence.register(u({}, e$, t));
                  } else this.instance.persistence.register(u({}, e$, e));
                },
              },
              {
                key: "onFeatureFlags",
                value: function (e) {
                  var t = this;
                  if (
                    (this.addFeatureFlagsHandler(e),
                    this.instance.decideEndpointWasHit)
                  ) {
                    var n = this._prepareFeatureFlagsForCallbacks();
                    e(n.flags, n.flagVariants);
                  }
                  return function () {
                    return t.removeFeatureFlagsHandler(e);
                  };
                },
              },
              {
                key: "updateEarlyAccessFeatureEnrollment",
                value: function (e, t) {
                  var n,
                    i,
                    s = u({}, "$feature_enrollment/".concat(e), t);
                  this.instance.capture("$feature_enrollment_update", {
                    $feature_flag: e,
                    $feature_enrollment: t,
                    $set: s,
                  }),
                    this.setPersonPropertiesForFlags(s, !1);
                  var o = r(r({}, this.getFlagVariants()), {}, u({}, e, t));
                  null === (n = this.instance.persistence) ||
                    void 0 === n ||
                    n.register(
                      (u((i = {}), eL, Object.keys(eV(o))), u(i, ew, o), i)
                    ),
                    this._fireFeatureFlagsCallbacks();
                },
              },
              {
                key: "getEarlyAccessFeatures",
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    i = this.instance.get_property(ex);
                  if (i && !n) return e(i);
                  this.instance._send_request({
                    transport: "XHR",
                    url: this.instance.requestRouter.endpointFor(
                      "api",
                      "/api/early_access_features/?token=".concat(
                        this.instance.config.token
                      )
                    ),
                    method: "GET",
                    callback: function (n) {
                      var i;
                      if (n.json) {
                        var r = n.json.earlyAccessFeatures;
                        return (
                          null === (i = t.instance.persistence) ||
                            void 0 === i ||
                            i.register(u({}, ex, r)),
                          e(r)
                        );
                      }
                    },
                  });
                },
              },
              {
                key: "_prepareFeatureFlagsForCallbacks",
                value: function () {
                  var e = this.getFlags(),
                    t = this.getFlagVariants();
                  return {
                    flags: e.filter(function (e) {
                      return t[e];
                    }),
                    flagVariants: Object.keys(t)
                      .filter(function (e) {
                        return t[e];
                      })
                      .reduce(function (e, n) {
                        return (e[n] = t[n]), e;
                      }, {}),
                  };
                },
              },
              {
                key: "_fireFeatureFlagsCallbacks",
                value: function (e) {
                  var t = this._prepareFeatureFlagsForCallbacks(),
                    n = t.flags,
                    i = t.flagVariants;
                  this.featureFlagEventHandlers.forEach(function (t) {
                    return t(n, i, { errorsLoading: e });
                  });
                },
              },
              {
                key: "setPersonPropertiesForFlags",
                value: function (e) {
                  var t =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    n = this.instance.get_property(ek) || {};
                  this.instance.register(u({}, ek, r(r({}, n), e))),
                    t && this.instance.reloadFeatureFlags();
                },
              },
              {
                key: "resetPersonPropertiesForFlags",
                value: function () {
                  this.instance.unregister(ek);
                },
              },
              {
                key: "setGroupPropertiesForFlags",
                value: function (e) {
                  var t =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    n = this.instance.get_property(eP) || {};
                  0 !== Object.keys(n).length &&
                    Object.keys(n).forEach(function (t) {
                      (n[t] = r(r({}, n[t]), e[t])), delete e[t];
                    }),
                    this.instance.register(u({}, eP, r(r({}, n), e))),
                    t && this.instance.reloadFeatureFlags();
                },
              },
              {
                key: "resetGroupPropertiesForFlags",
                value: function (e) {
                  if (e) {
                    var t = this.instance.get_property(eP) || {};
                    this.instance.register(
                      u({}, eP, r(r({}, t), {}, u({}, e, {})))
                    );
                  } else this.instance.unregister(eP);
                },
              },
            ]),
            e
          );
        })();
      Math.trunc ||
        (Math.trunc = function (e) {
          return e < 0 ? Math.ceil(e) : Math.floor(e);
        }),
        Number.isInteger ||
          (Number.isInteger = function (e) {
            return T(e) && isFinite(e) && Math.floor(e) === e;
          });
      var eq = "0123456789abcdef",
        ez = (function () {
          function e(t) {
            if ((o(this, e), (this.bytes = t), 16 !== t.length))
              throw TypeError("not 128-bit length");
          }
          return (
            l(
              e,
              [
                {
                  key: "toString",
                  value: function () {
                    for (var e = "", t = 0; t < this.bytes.length; t++)
                      (e =
                        e +
                        eq.charAt(this.bytes[t] >>> 4) +
                        eq.charAt(15 & this.bytes[t])),
                        (3 !== t && 5 !== t && 7 !== t && 9 !== t) ||
                          (e += "-");
                    if (36 !== e.length)
                      throw Error("Invalid UUIDv7 was generated");
                    return e;
                  },
                },
                {
                  key: "clone",
                  value: function () {
                    return new e(this.bytes.slice(0));
                  },
                },
                {
                  key: "equals",
                  value: function (e) {
                    return 0 === this.compareTo(e);
                  },
                },
                {
                  key: "compareTo",
                  value: function (e) {
                    for (var t = 0; t < 16; t++) {
                      var n = this.bytes[t] - e.bytes[t];
                      if (0 !== n) return Math.sign(n);
                    }
                    return 0;
                  },
                },
              ],
              [
                {
                  key: "fromFieldsV7",
                  value: function (t, n, i, r) {
                    if (
                      !Number.isInteger(t) ||
                      !Number.isInteger(n) ||
                      !Number.isInteger(i) ||
                      !Number.isInteger(r) ||
                      t < 0 ||
                      n < 0 ||
                      i < 0 ||
                      r < 0 ||
                      t > 0xffffffffffff ||
                      n > 4095 ||
                      i > 1073741823 ||
                      r > 4294967295
                    )
                      throw RangeError("invalid field value");
                    var s = new Uint8Array(16);
                    return (
                      (s[0] = t / 1099511627776),
                      (s[1] = t / 4294967296),
                      (s[2] = t / 16777216),
                      (s[3] = t / 65536),
                      (s[4] = t / 256),
                      (s[5] = t),
                      (s[6] = 112 | (n >>> 8)),
                      (s[7] = n),
                      (s[8] = 128 | (i >>> 24)),
                      (s[9] = i >>> 16),
                      (s[10] = i >>> 8),
                      (s[11] = i),
                      (s[12] = r >>> 24),
                      (s[13] = r >>> 16),
                      (s[14] = r >>> 8),
                      (s[15] = r),
                      new e(s)
                    );
                  },
                },
              ]
            ),
            e
          );
        })(),
        eU = (function () {
          function e() {
            o(this, e),
              u(this, "timestamp", 0),
              u(this, "counter", 0),
              u(this, "random", new eY());
          }
          return (
            l(e, [
              {
                key: "generate",
                value: function () {
                  var e = this.generateOrAbort();
                  if (P(e)) {
                    this.timestamp = 0;
                    var t = this.generateOrAbort();
                    if (P(t))
                      throw Error(
                        "Could not generate UUID after timestamp reset"
                      );
                    return t;
                  }
                  return e;
                },
              },
              {
                key: "generateOrAbort",
                value: function () {
                  var e = Date.now();
                  if (e > this.timestamp)
                    (this.timestamp = e), this.resetCounter();
                  else {
                    if (!(e + 1e4 > this.timestamp)) return;
                    this.counter++,
                      this.counter > 4398046511103 &&
                        (this.timestamp++, this.resetCounter());
                  }
                  return ez.fromFieldsV7(
                    this.timestamp,
                    Math.trunc(this.counter / 1073741824),
                    1073741823 & this.counter,
                    this.random.nextUint32()
                  );
                },
              },
              {
                key: "resetCounter",
                value: function () {
                  this.counter =
                    1024 * this.random.nextUint32() +
                    (1023 & this.random.nextUint32());
                },
              },
            ]),
            e
          );
        })(),
        eW = function (e) {
          if (
            "undefined" != typeof UUIDV7_DENY_WEAK_RNG &&
            UUIDV7_DENY_WEAK_RNG
          )
            throw Error("no cryptographically strong RNG available");
          for (var t = 0; t < e.length; t++)
            e[t] =
              65536 * Math.trunc(65536 * Math.random()) +
              Math.trunc(65536 * Math.random());
          return e;
        };
      A &&
        !P(A.crypto) &&
        crypto.getRandomValues &&
        (eW = function (e) {
          return crypto.getRandomValues(e);
        });
      var eH,
        eG,
        eX,
        eY = (function () {
          function e() {
            o(this, e),
              u(this, "buffer", new Uint32Array(8)),
              u(this, "cursor", 1 / 0);
          }
          return (
            l(e, [
              {
                key: "nextUint32",
                value: function () {
                  return (
                    this.cursor >= this.buffer.length &&
                      (eW(this.buffer), (this.cursor = 0)),
                    this.buffer[this.cursor++]
                  );
                },
              },
            ]),
            e
          );
        })(),
        eK = function () {
          return eZ().toString();
        },
        eZ = function () {
          return (eG || (eG = new eU())).generate();
        },
        eQ = "",
        eJ = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i,
        e0 = {
          is_supported: function () {
            return !!D;
          },
          error: function (e) {
            U.error("cookieStore error: " + e);
          },
          get: function (e) {
            if (D) {
              try {
                for (
                  var t = e + "=",
                    n = D.cookie.split(";").filter(function (e) {
                      return e.length;
                    }),
                    i = 0;
                  i < n.length;
                  i++
                ) {
                  for (var r = n[i]; " " == r.charAt(0); )
                    r = r.substring(1, r.length);
                  if (0 === r.indexOf(t))
                    return decodeURIComponent(r.substring(t.length, r.length));
                }
              } catch (e) {}
              return null;
            }
          },
          parse: function (e) {
            var t;
            try {
              t = JSON.parse(e0.get(e)) || {};
            } catch (e) {}
            return t;
          },
          set: function (e, t, n, i, r) {
            if (D)
              try {
                var s = "",
                  o = "",
                  a = (function (e, t) {
                    if (t) {
                      var n = (function (e) {
                        var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : D;
                        if (eQ) return eQ;
                        if (!t || ["localhost", "127.0.0.1"].includes(e))
                          return "";
                        for (
                          var n = e.split("."),
                            i = Math.min(n.length, 8),
                            r = "dmn_chk_" + eK(),
                            s = RegExp("(^|;)\\s*" + r + "=1");
                          !eQ && i--;

                        ) {
                          var o = n.slice(i).join("."),
                            a = r + "=1;domain=." + o;
                          (t.cookie = a),
                            s.test(t.cookie) &&
                              ((t.cookie =
                                a + ";expires=Thu, 01 Jan 1970 00:00:00 GMT"),
                              (eQ = o));
                        }
                        return eQ;
                      })(e);
                      if (!n) {
                        var i,
                          r = (i = e.match(eJ)) ? i[0] : "";
                        r !== n &&
                          U.info(
                            "Warning: cookie subdomain discovery mismatch",
                            r,
                            n
                          ),
                          (n = r);
                      }
                      return n ? "; domain=." + n : "";
                    }
                    return "";
                  })(D.location.hostname, i);
                if (n) {
                  var l = new Date();
                  l.setTime(l.getTime() + 24 * n * 36e5),
                    (s = "; expires=" + l.toUTCString());
                }
                r && (o = "; secure");
                var u =
                  e +
                  "=" +
                  encodeURIComponent(JSON.stringify(t)) +
                  s +
                  "; SameSite=Lax; path=/" +
                  a +
                  o;
                return (
                  u.length > 3686.4 &&
                    U.warn(
                      "cookieStore warning: large cookie, len=" + u.length
                    ),
                  (D.cookie = u),
                  u
                );
              } catch (e) {
                return;
              }
          },
          remove: function (e, t) {
            try {
              e0.set(e, "", -1, t);
            } catch (e) {
              return;
            }
          },
        },
        e1 = null,
        e2 = {
          is_supported: function () {
            if (!E(e1)) return e1;
            var e = !0;
            if (P(A)) e = !1;
            else
              try {
                var t = "__mplssupport__";
                e2.set(t, "xyz"),
                  '"xyz"' !== e2.get(t) && (e = !1),
                  e2.remove(t);
              } catch (t) {
                e = !1;
              }
            return (
              e ||
                U.error(
                  "localStorage unsupported; falling back to cookie store"
                ),
              (e1 = e),
              e
            );
          },
          error: function (e) {
            U.error("localStorage error: " + e);
          },
          get: function (e) {
            try {
              return null == A ? void 0 : A.localStorage.getItem(e);
            } catch (e) {
              e2.error(e);
            }
            return null;
          },
          parse: function (e) {
            try {
              return JSON.parse(e2.get(e)) || {};
            } catch (e) {}
            return null;
          },
          set: function (e, t) {
            try {
              null == A || A.localStorage.setItem(e, JSON.stringify(t));
            } catch (e) {
              e2.error(e);
            }
          },
          remove: function (e) {
            try {
              null == A || A.localStorage.removeItem(e);
            } catch (e) {
              e2.error(e);
            }
          },
        },
        e3 = ["distinct_id", e_, eb, eO],
        e5 = r(
          r({}, e2),
          {},
          {
            parse: function (e) {
              try {
                var t = {};
                try {
                  t = e0.parse(e) || {};
                } catch (e) {}
                var n = Y(t, JSON.parse(e2.get(e) || "{}"));
                return e2.set(e, n), n;
              } catch (e) {}
              return null;
            },
            set: function (e, t, n, i, r) {
              try {
                e2.set(e, t);
                var s = {};
                e3.forEach(function (e) {
                  t[e] && (s[e] = t[e]);
                }),
                  Object.keys(s).length && e0.set(e, s, n, i, r);
              } catch (e) {
                e2.error(e);
              }
            },
            remove: function (e, t) {
              try {
                null == A || A.localStorage.removeItem(e), e0.remove(e, t);
              } catch (e) {
                e2.error(e);
              }
            },
          }
        ),
        e6 = {},
        e8 = {
          is_supported: function () {
            return !0;
          },
          error: function (e) {
            U.error("memoryStorage error: " + e);
          },
          get: function (e) {
            return e6[e] || null;
          },
          parse: function (e) {
            return e6[e] || null;
          },
          set: function (e, t) {
            e6[e] = t;
          },
          remove: function (e) {
            delete e6[e];
          },
        },
        e4 = null,
        e9 = {
          is_supported: function () {
            if (!E(e4)) return e4;
            if (((e4 = !0), P(A))) e4 = !1;
            else
              try {
                var e = "__support__";
                e9.set(e, "xyz"),
                  '"xyz"' !== e9.get(e) && (e4 = !1),
                  e9.remove(e);
              } catch (e) {
                e4 = !1;
              }
            return e4;
          },
          error: function (e) {
            U.error("sessionStorage error: ", e);
          },
          get: function (e) {
            try {
              return null == A ? void 0 : A.sessionStorage.getItem(e);
            } catch (e) {
              e9.error(e);
            }
            return null;
          },
          parse: function (e) {
            try {
              return JSON.parse(e9.get(e)) || null;
            } catch (e) {}
            return null;
          },
          set: function (e, t) {
            try {
              null == A || A.sessionStorage.setItem(e, JSON.stringify(t));
            } catch (e) {
              e9.error(e);
            }
          },
          remove: function (e) {
            try {
              null == A || A.sessionStorage.removeItem(e);
            } catch (e) {
              e9.error(e);
            }
          },
        },
        e7 = ["localhost", "127.0.0.1"],
        te = function (e) {
          var t = null == D ? void 0 : D.createElement("a");
          return P(t) ? null : ((t.href = e), t);
        },
        tt = function (e, t) {
          return (
            !!(function (e) {
              try {
                new RegExp(e);
              } catch (e) {
                return !1;
              }
              return !0;
            })(t) && new RegExp(t).test(e)
          );
        },
        tn = function (e) {
          var t,
            n,
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "&",
            r = [];
          return (
            X(e, function (e, i) {
              P(e) ||
                P(i) ||
                "undefined" === i ||
                ((t = encodeURIComponent(
                  e instanceof File ? e.name : e.toString()
                )),
                (n = encodeURIComponent(i)),
                (r[r.length] = n + "=" + t));
            }),
            r.join(i)
          );
        },
        ti = function (e, t) {
          for (
            var n,
              i = ((e.split("#")[0] || "").split("?")[1] || "").split("&"),
              r = 0;
            r < i.length;
            r++
          ) {
            var s = i[r].split("=");
            if (s[0] === t) {
              n = s;
              break;
            }
          }
          if (!b(n) || n.length < 2) return "";
          var o = n[1];
          try {
            o = decodeURIComponent(o);
          } catch (e) {
            U.error("Skipping decoding for malformed query param: " + o);
          }
          return o.replace(/\+/g, " ");
        },
        tr = function (e, t) {
          var n = e.match(RegExp(t + "=([^&]*)"));
          return n ? n[1] : null;
        },
        ts = "Mobile",
        to = "Android",
        ta = "Tablet",
        tl = to + " " + ta,
        tu = "iPad",
        tc = "Apple",
        td = tc + " Watch",
        th = "Safari",
        tf = "BlackBerry",
        tp = "Samsung",
        tg = tp + "Browser",
        tv = tp + " Internet",
        tm = "Chrome",
        ty = tm + " OS",
        t_ = tm + " iOS",
        tb = "Internet Explorer",
        tw = tb + " " + ts,
        tx = "Opera",
        tk = tx + " Mini",
        tP = "Edge",
        tS = "Microsoft " + tP,
        tE = "Firefox",
        tR = tE + " iOS",
        tT = "Nintendo",
        tC = "PlayStation",
        tA = "Xbox",
        tF = to + " " + ts,
        tM = ts + " " + th,
        tI = "Windows",
        tO = tI + " Phone",
        tj = "Nokia",
        tD = "Ouya",
        tL = "Generic",
        t$ = tL + " " + ts.toLowerCase(),
        tN = tL + " " + ta.toLowerCase(),
        tV = "Konqueror",
        tB = "(\\d+(\\.\\d+)?)",
        tq = RegExp("Version/" + tB),
        tz = RegExp(tA, "i"),
        tU = RegExp(tC + " \\w+", "i"),
        tW = RegExp(tT + " \\w+", "i"),
        tH = RegExp(tf + "|PlayBook|BB10", "i"),
        tG = {
          "NT3.51": "NT 3.11",
          "NT4.0": "NT 4.0",
          "5.0": "2000",
          5.1: "XP",
          5.2: "XP",
          "6.0": "Vista",
          6.1: "7",
          6.2: "8",
          6.3: "8.1",
          6.4: "10",
          "10.0": "10",
        },
        tX = function (e, t) {
          var n, i;
          return (
            (t = t || ""),
            K(e, " OPR/") && K(e, "Mini")
              ? tk
              : K(e, " OPR/")
              ? tx
              : tH.test(e)
              ? tf
              : K(e, "IE" + ts) || K(e, "WPDesktop")
              ? tw
              : K(e, tg)
              ? tv
              : K(e, tP) || K(e, "Edg/")
              ? tS
              : K(e, "FBIOS")
              ? "Facebook " + ts
              : K(e, "UCWEB") || K(e, "UCBrowser")
              ? "UC Browser"
              : K(e, "CriOS")
              ? t_
              : K(e, "CrMo")
              ? tm
              : K(e, to) && K(e, th)
              ? tF
              : K(e, tm)
              ? tm
              : K(e, "FxiOS")
              ? tR
              : K(e.toLowerCase(), tV.toLowerCase())
              ? tV
              : ((n = e),
                ((i = t) && K(i, tc)) || (K(n, th) && !K(n, tm) && !K(n, to)))
              ? K(e, ts)
                ? tM
                : th
              : K(e, tE)
              ? tE
              : K(e, "MSIE") || K(e, "Trident/")
              ? tb
              : K(e, "Gecko")
              ? tE
              : ""
          );
        },
        tY =
          (u((eX = {}), tw, [RegExp("rv:" + tB)]),
          u(eX, tS, [RegExp(tP + "?\\/" + tB)]),
          u(eX, tm, [RegExp("(" + tm + "|CrMo)\\/" + tB)]),
          u(eX, t_, [RegExp("CriOS\\/" + tB)]),
          u(eX, "UC Browser", [RegExp("(UCBrowser|UCWEB)\\/" + tB)]),
          u(eX, th, [tq]),
          u(eX, tM, [tq]),
          u(eX, tx, [RegExp("(Opera|OPR)\\/" + tB)]),
          u(eX, tE, [RegExp(tE + "\\/" + tB)]),
          u(eX, tR, [RegExp("FxiOS\\/" + tB)]),
          u(eX, tV, [RegExp("Konqueror[:/]?" + tB, "i")]),
          u(eX, tf, [RegExp(tf + " " + tB), tq]),
          u(eX, tF, [RegExp("android\\s" + tB, "i")]),
          u(eX, tv, [RegExp(tg + "\\/" + tB)]),
          u(eX, tb, [RegExp("(rv:|MSIE )" + tB)]),
          u(eX, "Mozilla", [RegExp("rv:" + tB)]),
          eX),
        tK = [
          [
            RegExp(tA + "; " + tA + " (.*?)[);]", "i"),
            function (e) {
              return [tA, (e && e[1]) || ""];
            },
          ],
          [RegExp(tT, "i"), [tT, ""]],
          [RegExp(tC, "i"), [tC, ""]],
          [tH, [tf, ""]],
          [
            RegExp(tI, "i"),
            function (e, t) {
              if (/Phone/.test(t) || /WPDesktop/.test(t)) return [tO, ""];
              if (new RegExp(ts).test(t) && !/IEMobile\b/.test(t))
                return [tI + " " + ts, ""];
              var n = /Windows NT ([0-9.]+)/i.exec(t);
              if (n && n[1]) {
                var i = tG[n[1]] || "";
                return /arm/i.test(t) && (i = "RT"), [tI, i];
              }
              return [tI, ""];
            },
          ],
          [
            /((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,
            function (e) {
              return e && e[3]
                ? ["iOS", [e[3], e[4], e[5] || "0"].join(".")]
                : ["iOS", ""];
            },
          ],
          [
            /(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,
            function (e) {
              var t = "";
              return (
                e && e.length >= 3 && (t = P(e[2]) ? e[3] : e[2]),
                ["watchOS", t]
              );
            },
          ],
          [
            RegExp("(" + to + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + to + ")", "i"),
            function (e) {
              return e && e[2]
                ? [to, [e[2], e[3], e[4] || "0"].join(".")]
                : [to, ""];
            },
          ],
          [
            /Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,
            function (e) {
              var t = ["Mac OS X", ""];
              if (e && e[1]) {
                var n = [e[1], e[2], e[3] || "0"];
                t[1] = n.join(".");
              }
              return t;
            },
          ],
          [/Mac/i, ["Mac OS X", ""]],
          [/CrOS/, [ty, ""]],
          [/Linux|debian/i, ["Linux", ""]],
        ],
        tZ = function (e) {
          return tW.test(e)
            ? tT
            : tU.test(e)
            ? tC
            : tz.test(e)
            ? tA
            : RegExp(tD, "i").test(e)
            ? tD
            : RegExp("(" + tO + "|WPDesktop)", "i").test(e)
            ? tO
            : /iPad/.test(e)
            ? tu
            : /iPod/.test(e)
            ? "iPod Touch"
            : /iPhone/.test(e)
            ? "iPhone"
            : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e)
            ? td
            : tH.test(e)
            ? tf
            : /(kobo)\s(ereader|touch)/i.test(e)
            ? "Kobo"
            : RegExp(tj, "i").test(e)
            ? tj
            : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e) ||
              /(kf[a-z]+)( bui|\)).+silk\//i.test(e)
            ? "Kindle Fire"
            : /(Android|ZTE)/i.test(e)
            ? !new RegExp(ts).test(e) ||
              /(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(
                e
              )
              ? (/pixel[\daxl ]{1,6}/i.test(e) && !/pixel c/i.test(e)) ||
                /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e) ||
                (/lmy47v/i.test(e) && !/QTAQZ3/i.test(e))
                ? to
                : tl
              : to
            : RegExp("(pda|" + ts + ")", "i").test(e)
            ? t$
            : RegExp(ta, "i").test(e) && !RegExp(ta + " pc", "i").test(e)
            ? tN
            : "";
        },
        tQ = "https?://(.*)",
        tJ = [
          "utm_source",
          "utm_medium",
          "utm_campaign",
          "utm_content",
          "utm_term",
          "gclid",
          "gad_source",
          "gclsrc",
          "dclid",
          "gbraid",
          "wbraid",
          "fbclid",
          "msclkid",
          "twclid",
          "li_fat_id",
          "mc_cid",
          "igshid",
          "ttclid",
        ],
        t0 = {
          campaignParams: function (e) {
            return D ? this._campaignParamsFromUrl(D.URL, e) : {};
          },
          _campaignParamsFromUrl: function (e, t) {
            var n = tJ.concat(t || []),
              i = {};
            return (
              X(n, function (t) {
                var n = ti(e, t);
                n && (i[t] = n);
              }),
              i
            );
          },
          _searchEngine: function (e) {
            return e
              ? 0 === e.search(tQ + "google.([^/?]*)")
                ? "google"
                : 0 === e.search(tQ + "bing.com")
                ? "bing"
                : 0 === e.search(tQ + "yahoo.com")
                ? "yahoo"
                : 0 === e.search(tQ + "duckduckgo.com")
                ? "duckduckgo"
                : null
              : null;
          },
          _searchInfoFromReferrer: function (e) {
            var t = t0._searchEngine(e),
              n = {};
            if (!E(t)) {
              n.$search_engine = t;
              var i = D ? ti(D.referrer, "yahoo" != t ? "q" : "p") : "";
              i.length && (n.ph_keyword = i);
            }
            return n;
          },
          searchInfo: function () {
            var e = null == D ? void 0 : D.referrer;
            return e ? this._searchInfoFromReferrer(e) : {};
          },
          browser: tX,
          browserVersion: function (e, t) {
            var n = tY[tX(e, t)];
            if (P(n)) return null;
            for (var i = 0; i < n.length; i++) {
              var r = n[i],
                s = e.match(r);
              if (s) return parseFloat(s[s.length - 2]);
            }
            return null;
          },
          browserLanguage: function () {
            return navigator.language || navigator.userLanguage;
          },
          os: function (e) {
            for (var t = 0; t < tK.length; t++) {
              var n = c(tK[t], 2),
                i = n[0],
                r = n[1],
                s = i.exec(e),
                o = s && (w(r) ? r(s, e) : r);
              if (o) return o;
            }
            return ["", ""];
          },
          device: tZ,
          deviceType: function (e) {
            var t = tZ(e);
            return t === tu ||
              t === tl ||
              "Kobo" === t ||
              "Kindle Fire" === t ||
              t === tN
              ? ta
              : t === tT || t === tA || t === tC || t === tD
              ? "Console"
              : t === td
              ? "Wearable"
              : t
              ? ts
              : "Desktop";
          },
          referrer: function () {
            return (null == D ? void 0 : D.referrer) || "$direct";
          },
          referringDomain: function () {
            var e;
            return (
              (null != D &&
                D.referrer &&
                (null === (e = te(D.referrer)) || void 0 === e
                  ? void 0
                  : e.host)) ||
              "$direct"
            );
          },
          referrerInfo: function () {
            return {
              $referrer: this.referrer(),
              $referring_domain: this.referringDomain(),
            };
          },
          initialPersonInfo: function () {
            return { r: this.referrer(), u: null == L ? void 0 : L.href };
          },
          initialPersonPropsFromInfo: function (e) {
            var t,
              n = e.r,
              i = e.u,
              r = {
                $initial_referrer: n,
                $initial_referring_domain:
                  null == n
                    ? void 0
                    : "$direct" == n
                    ? "$direct"
                    : null === (t = te(n)) || void 0 === t
                    ? void 0
                    : t.host,
              };
            if (i) {
              r.$initial_current_url = i;
              var s = te(i);
              (r.$initial_host = null == s ? void 0 : s.host),
                (r.$initial_pathname = null == s ? void 0 : s.pathname),
                X(this._campaignParamsFromUrl(i), function (e, t) {
                  r["$initial_" + ei(t)] = e;
                });
            }
            return (
              n &&
                X(this._searchInfoFromReferrer(n), function (e, t) {
                  r["$initial_" + ei(t)] = e;
                }),
              r
            );
          },
          properties: function () {
            if (!B) return {};
            var e = c(t0.os(B), 2);
            return Y(
              en({
                $os: e[0],
                $os_version: e[1],
                $browser: t0.browser(B, navigator.vendor),
                $device: t0.device(B),
                $device_type: t0.deviceType(B),
              }),
              {
                $current_url: null == L ? void 0 : L.href,
                $host: null == L ? void 0 : L.host,
                $pathname: null == L ? void 0 : L.pathname,
                $raw_user_agent:
                  B.length > 1e3 ? B.substring(0, 997) + "..." : B,
                $browser_version: t0.browserVersion(B, navigator.vendor),
                $browser_language: t0.browserLanguage(),
                $screen_height: null == A ? void 0 : A.screen.height,
                $screen_width: null == A ? void 0 : A.screen.width,
                $viewport_height: null == A ? void 0 : A.innerHeight,
                $viewport_width: null == A ? void 0 : A.innerWidth,
                $lib: "web",
                $lib_version: g.LIB_VERSION,
                $insert_id:
                  Math.random().toString(36).substring(2, 10) +
                  Math.random().toString(36).substring(2, 10),
                $time: J() / 1e3,
              }
            );
          },
          people_properties: function () {
            if (!B) return {};
            var e = c(t0.os(B), 2);
            return Y(
              en({
                $os: e[0],
                $os_version: e[1],
                $browser: t0.browser(B, navigator.vendor),
              }),
              { $browser_version: t0.browserVersion(B, navigator.vendor) }
            );
          },
        },
        t1 = [
          "cookie",
          "localstorage",
          "localstorage+cookie",
          "sessionstorage",
          "memory",
        ],
        t2 = (function () {
          function e(t) {
            var n;
            o(this, e),
              (this.config = t),
              (this.props = {}),
              (this.campaign_params_saved = !1),
              (this.name =
                ((n = ""),
                t.token &&
                  (n = t.token
                    .replace(/\+/g, "PL")
                    .replace(/\//g, "SL")
                    .replace(/=/g, "EQ")),
                t.persistence_name
                  ? "ph_" + t.persistence_name
                  : "ph_" + n + "_posthog")),
              (this.storage = this.buildStorage(t)),
              this.load(),
              this.update_config(t, t),
              this.save();
          }
          return (
            l(e, [
              {
                key: "buildStorage",
                value: function (e) {
                  -1 === t1.indexOf(e.persistence.toLowerCase()) &&
                    (U.critical(
                      "Unknown persistence type " +
                        e.persistence +
                        "; falling back to localStorage+cookie"
                    ),
                    (e.persistence = "localStorage+cookie"));
                  var t = e.persistence.toLowerCase();
                  return "localstorage" === t && e2.is_supported()
                    ? e2
                    : "localstorage+cookie" === t && e5.is_supported()
                    ? e5
                    : "sessionstorage" === t && e9.is_supported()
                    ? e9
                    : "memory" === t
                    ? e8
                    : "cookie" === t
                    ? e0
                    : e5.is_supported()
                    ? e5
                    : e0;
                },
              },
              {
                key: "properties",
                value: function () {
                  var e = {};
                  return (
                    X(this.props, function (t, n) {
                      if (n === ew && x(t))
                        for (
                          var i, r = Object.keys(t), s = 0;
                          s < r.length;
                          s++
                        )
                          e["$feature/".concat(r[s])] = t[r[s]];
                      else
                        (i = !1),
                          (E(eD)
                            ? i
                            : O && eD.indexOf === O
                            ? -1 != eD.indexOf(n)
                            : (X(eD, function (e) {
                                if (i || (i = e === n)) return W;
                              }),
                              i)) || (e[n] = t);
                    }),
                    e
                  );
                },
              },
              {
                key: "load",
                value: function () {
                  if (!this.disabled) {
                    var e = this.storage.parse(this.name);
                    e && (this.props = Y({}, e));
                  }
                },
              },
              {
                key: "save",
                value: function () {
                  this.disabled ||
                    this.storage.set(
                      this.name,
                      this.props,
                      this.expire_days,
                      this.cross_subdomain,
                      this.secure
                    );
                },
              },
              {
                key: "remove",
                value: function () {
                  this.storage.remove(this.name, !1),
                    this.storage.remove(this.name, !0);
                },
              },
              {
                key: "clear",
                value: function () {
                  this.remove(), (this.props = {});
                },
              },
              {
                key: "register_once",
                value: function (e, t, n) {
                  var i = this;
                  if (x(e)) {
                    P(t) && (t = "None"),
                      (this.expire_days = P(n) ? this.default_expiry : n);
                    var r = !1;
                    if (
                      (X(e, function (e, n) {
                        (i.props.hasOwnProperty(n) && i.props[n] !== t) ||
                          ((i.props[n] = e), (r = !0));
                      }),
                      r)
                    )
                      return this.save(), !0;
                  }
                  return !1;
                },
              },
              {
                key: "register",
                value: function (e, t) {
                  var n = this;
                  if (x(e)) {
                    this.expire_days = P(t) ? this.default_expiry : t;
                    var i = !1;
                    if (
                      (X(e, function (t, r) {
                        e.hasOwnProperty(r) &&
                          n.props[r] !== t &&
                          ((n.props[r] = t), (i = !0));
                      }),
                      i)
                    )
                      return this.save(), !0;
                  }
                  return !1;
                },
              },
              {
                key: "unregister",
                value: function (e) {
                  e in this.props && (delete this.props[e], this.save());
                },
              },
              {
                key: "update_campaign_params",
                value: function () {
                  this.campaign_params_saved ||
                    (this.register(
                      t0.campaignParams(this.config.custom_campaign_params)
                    ),
                    (this.campaign_params_saved = !0));
                },
              },
              {
                key: "update_search_keyword",
                value: function () {
                  this.register(t0.searchInfo());
                },
              },
              {
                key: "update_referrer_info",
                value: function () {
                  this.register(t0.referrerInfo());
                },
              },
              {
                key: "set_initial_person_info",
                value: function () {
                  this.props[eF] ||
                    this.props[eM] ||
                    this.register_once(
                      u({}, eI, t0.initialPersonInfo()),
                      void 0
                    );
                },
              },
              {
                key: "get_referrer_info",
                value: function () {
                  return en({
                    $referrer: this.props.$referrer,
                    $referring_domain: this.props.$referring_domain,
                  });
                },
              },
              {
                key: "get_initial_props",
                value: function () {
                  var e = this,
                    t = {};
                  X([eM, eF], function (n) {
                    var i = e.props[n];
                    i &&
                      X(i, function (e, n) {
                        t["$initial_" + ei(n)] = e;
                      });
                  });
                  var n = this.props[eI];
                  return n && Y(t, t0.initialPersonPropsFromInfo(n)), t;
                },
              },
              {
                key: "safe_merge",
                value: function (e) {
                  return (
                    X(this.props, function (t, n) {
                      n in e || (e[n] = t);
                    }),
                    e
                  );
                },
              },
              {
                key: "update_config",
                value: function (e, t) {
                  if (
                    ((this.default_expiry = this.expire_days =
                      e.cookie_expiration),
                    this.set_disabled(e.disable_persistence),
                    this.set_cross_subdomain(e.cross_subdomain_cookie),
                    this.set_secure(e.secure_cookie),
                    e.persistence !== t.persistence)
                  ) {
                    var n = this.buildStorage(e),
                      i = this.props;
                    this.clear(),
                      (this.storage = n),
                      (this.props = i),
                      this.save();
                  }
                },
              },
              {
                key: "set_disabled",
                value: function (e) {
                  (this.disabled = e),
                    this.disabled ? this.remove() : this.save();
                },
              },
              {
                key: "set_cross_subdomain",
                value: function (e) {
                  e !== this.cross_subdomain &&
                    ((this.cross_subdomain = e), this.remove(), this.save());
                },
              },
              {
                key: "get_cross_subdomain",
                value: function () {
                  return !!this.cross_subdomain;
                },
              },
              {
                key: "set_secure",
                value: function (e) {
                  e !== this.secure &&
                    ((this.secure = e), this.remove(), this.save());
                },
              },
              {
                key: "set_event_timer",
                value: function (e, t) {
                  var n = this.props[ec] || {};
                  (n[e] = t), (this.props[ec] = n), this.save();
                },
              },
              {
                key: "remove_event_timer",
                value: function (e) {
                  var t = (this.props[ec] || {})[e];
                  return P(t) || (delete this.props[ec][e], this.save()), t;
                },
              },
              {
                key: "get_property",
                value: function (e) {
                  return this.props[e];
                },
              },
              {
                key: "set_property",
                value: function (e, t) {
                  (this.props[e] = t), this.save();
                },
              },
            ]),
            e
          );
        })(),
        t3 =
          (((nP = t3 || {})[(nP.DomContentLoaded = 0)] = "DomContentLoaded"),
          (nP[(nP.Load = 1)] = "Load"),
          (nP[(nP.FullSnapshot = 2)] = "FullSnapshot"),
          (nP[(nP.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
          (nP[(nP.Meta = 4)] = "Meta"),
          (nP[(nP.Custom = 5)] = "Custom"),
          (nP[(nP.Plugin = 6)] = "Plugin"),
          nP),
        t5 =
          (((nS = t5 || {})[(nS.Mutation = 0)] = "Mutation"),
          (nS[(nS.MouseMove = 1)] = "MouseMove"),
          (nS[(nS.MouseInteraction = 2)] = "MouseInteraction"),
          (nS[(nS.Scroll = 3)] = "Scroll"),
          (nS[(nS.ViewportResize = 4)] = "ViewportResize"),
          (nS[(nS.Input = 5)] = "Input"),
          (nS[(nS.TouchMove = 6)] = "TouchMove"),
          (nS[(nS.MediaInteraction = 7)] = "MediaInteraction"),
          (nS[(nS.StyleSheetRule = 8)] = "StyleSheetRule"),
          (nS[(nS.CanvasMutation = 9)] = "CanvasMutation"),
          (nS[(nS.Font = 10)] = "Font"),
          (nS[(nS.Log = 11)] = "Log"),
          (nS[(nS.Drag = 12)] = "Drag"),
          (nS[(nS.StyleDeclaration = 13)] = "StyleDeclaration"),
          (nS[(nS.Selection = 14)] = "Selection"),
          (nS[(nS.AdoptedStyleSheet = 15)] = "AdoptedStyleSheet"),
          (nS[(nS.CustomElement = 16)] = "CustomElement"),
          nS);
      function t6(e) {
        return e ? H(e).split(/\s+/) : [];
      }
      function t8(e) {
        var t = "";
        switch (s(e.className)) {
          case "string":
            t = e.className;
            break;
          case "object":
            t =
              ("baseVal" in e.className ? e.className.baseVal : null) ||
              e.getAttribute("class") ||
              "";
            break;
          default:
            t = "";
        }
        return t6(t);
      }
      function t4(e) {
        return R(e)
          ? null
          : H(e)
              .split(/(\s+)/)
              .filter(function (e) {
                return nf(e);
              })
              .join("")
              .replace(/[\r\n]/g, " ")
              .replace(/[ ]+/g, " ")
              .substring(0, 255);
      }
      function t9(e) {
        var t = "";
        return (
          ns(e) &&
            !no(e) &&
            e.childNodes &&
            e.childNodes.length &&
            X(e.childNodes, function (e) {
              var n;
              nt(e) &&
                e.textContent &&
                (t +=
                  null !== (n = t4(e.textContent)) && void 0 !== n ? n : "");
            }),
          H(t)
        );
      }
      function t7(e) {
        return !!e && 1 === e.nodeType;
      }
      function ne(e, t) {
        return (
          !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase()
        );
      }
      function nt(e) {
        return !!e && 3 === e.nodeType;
      }
      function nn(e) {
        return !!e && 11 === e.nodeType;
      }
      var ni = ["a", "button", "form", "input", "select", "textarea", "label"];
      function nr(e) {
        var t = e.parentNode;
        return !(!t || !t7(t)) && t;
      }
      function ns(e) {
        for (var t = e; t.parentNode && !ne(t, "body"); t = t.parentNode) {
          var n = t8(t);
          if (K(n, "ph-sensitive") || K(n, "ph-no-capture")) return !1;
        }
        if (K(t8(e), "ph-include")) return !0;
        var i = e.type || "";
        if (S(i))
          switch (i.toLowerCase()) {
            case "hidden":
            case "password":
              return !1;
          }
        var r = e.name || e.id || "";
        return !(
          S(r) &&
          /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(
            r.replace(/[^a-zA-Z0-9]/g, "")
          )
        );
      }
      function no(e) {
        return !!(
          (ne(e, "input") &&
            !["button", "checkbox", "submit", "reset"].includes(e.type)) ||
          ne(e, "select") ||
          ne(e, "textarea") ||
          "true" === e.getAttribute("contenteditable")
        );
      }
      var na =
          "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",
        nl = new RegExp("^(?:".concat(na, ")$")),
        nu = new RegExp(na),
        nc = "\\d{3}-?\\d{2}-?\\d{4}",
        nd = new RegExp("^(".concat(nc, ")$")),
        nh = new RegExp("(".concat(nc, ")"));
      function nf(e) {
        var t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return !(
          R(e) ||
          (S(e) &&
            ((e = H(e)),
            (t ? nl : nu).test((e || "").replace(/[- ]/g, "")) ||
              (t ? nd : nh).test(e)))
        );
      }
      function np(e) {
        var t = t9(e);
        return nf(
          (t = ""
            .concat(t, " ")
            .concat(
              (function e(t) {
                var n = "";
                return (
                  t &&
                    t.childNodes &&
                    t.childNodes.length &&
                    X(t.childNodes, function (t) {
                      var i;
                      if (
                        t &&
                        "span" ===
                          (null === (i = t.tagName) || void 0 === i
                            ? void 0
                            : i.toLowerCase())
                      )
                        try {
                          var r = t9(t);
                          (n = "".concat(n, " ").concat(r).trim()),
                            t.childNodes &&
                              t.childNodes.length &&
                              (n = "".concat(n, " ").concat(e(t)).trim());
                        } catch (e) {
                          U.error(e);
                        }
                    }),
                  n
                );
              })(e)
            )
            .trim())
        )
          ? t
          : "";
      }
      function ng(e) {
        return e.replace(/"|\\"/g, '\\"');
      }
      var nv = "[SessionRecording]",
        nm = "redacted",
        ny = {
          initiatorTypes: [
            "audio",
            "beacon",
            "body",
            "css",
            "early-hint",
            "embed",
            "fetch",
            "frame",
            "iframe",
            "icon",
            "image",
            "img",
            "input",
            "link",
            "navigation",
            "object",
            "ping",
            "script",
            "track",
            "video",
            "xmlhttprequest",
          ],
          maskRequestFn: function (e) {
            return e;
          },
          recordHeaders: !1,
          recordBody: !1,
          recordInitialRequests: !1,
          recordPerformance: !1,
          performanceEntryTypeToObserve: [
            "first-input",
            "navigation",
            "paint",
            "resource",
          ],
          payloadSizeLimitBytes: 1e6,
        },
        n_ = [
          "authorization",
          "x-forwarded-for",
          "authorization",
          "cookie",
          "set-cookie",
          "x-api-key",
          "x-real-ip",
          "remote-addr",
          "forwarded",
          "proxy-authorization",
          "x-csrf-token",
          "x-csrftoken",
          "x-xsrf-token",
        ],
        nb = [
          "password",
          "secret",
          "passwd",
          "api_key",
          "apikey",
          "auth",
          "credentials",
          "mysql_pwd",
          "privatekey",
          "private_key",
          "token",
        ],
        nw = ["/s/", "/e/", "/i/"];
      function nx(e, t, n, i) {
        if (R(e)) return e;
        var r =
          (null == t ? void 0 : t["content-length"]) || new Blob([e]).size;
        return (
          S(r) && (r = parseInt(r)),
          r > n
            ? nv +
              " ".concat(i, " body too large to record (").concat(r, " bytes)")
            : e
        );
      }
      function nk(e, t) {
        if (R(e)) return e;
        var n = e;
        return (
          nf(n, !1) || (n = nv + " " + t + " body " + nm),
          X(nb, function (e) {
            var i, r;
            null !== (i = n) &&
              void 0 !== i &&
              i.length &&
              -1 !==
                (null === (r = n) || void 0 === r ? void 0 : r.indexOf(e)) &&
              (n = nv + " " + t + " body " + nm + " as might contain: " + e);
          }),
          n
        );
      }
      var nP,
        nS,
        nE,
        nR = function (e, t) {
          var n,
            i,
            s = {
              payloadSizeLimitBytes: ny.payloadSizeLimitBytes,
              performanceEntryTypeToObserve: d(
                ny.performanceEntryTypeToObserve
              ),
            },
            o = !1 !== e.session_recording.recordHeaders && t.recordHeaders,
            a = !1 !== e.session_recording.recordBody && t.recordBody,
            l = !1 !== e.capture_performance && t.recordPerformance,
            u =
              ((i = Math.min(
                1e6,
                null !== (n = s.payloadSizeLimitBytes) && void 0 !== n ? n : 1e6
              )),
              function (e) {
                return (
                  null != e &&
                    e.requestBody &&
                    (e.requestBody = nx(
                      e.requestBody,
                      e.requestHeaders,
                      i,
                      "Request"
                    )),
                  null != e &&
                    e.responseBody &&
                    (e.responseBody = nx(
                      e.responseBody,
                      e.responseHeaders,
                      i,
                      "Response"
                    )),
                  e
                );
              }),
            c = function (e) {
              var t;
              return u(
                (function (e) {
                  var t = te(e.name);
                  if (
                    !(
                      t &&
                      t.pathname &&
                      nw.some(function (e) {
                        return 0 === t.pathname.indexOf(e);
                      })
                    )
                  )
                    return e;
                })(
                  (R((t = e.requestHeaders)) ||
                    X(Object.keys(null != t ? t : {}), function (e) {
                      n_.includes(e.toLowerCase()) && (t[e] = nm);
                    }),
                  e)
                )
              );
            },
            h = w(e.session_recording.maskNetworkRequestFn);
          return (
            h &&
              w(e.session_recording.maskCapturedNetworkRequestFn) &&
              U.warn(
                "Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."
              ),
            h &&
              (e.session_recording.maskCapturedNetworkRequestFn = function (t) {
                var n = e.session_recording.maskNetworkRequestFn({
                  url: t.name,
                });
                return r(r({}, t), {}, { name: null == n ? void 0 : n.url });
              }),
            (s.maskRequestFn = w(
              e.session_recording.maskCapturedNetworkRequestFn
            )
              ? function (t) {
                  var n,
                    i,
                    r,
                    s = c(t);
                  return s &&
                    null !==
                      (n =
                        null ===
                          (i = (r = e.session_recording)
                            .maskCapturedNetworkRequestFn) || void 0 === i
                          ? void 0
                          : i.call(r, s)) &&
                    void 0 !== n
                    ? n
                    : void 0;
                }
              : function (e) {
                  return (function (e) {
                    if (!P(e))
                      return (
                        (e.requestBody = nk(e.requestBody, "Request")),
                        (e.responseBody = nk(e.responseBody, "Response")),
                        e
                      );
                  })(c(e));
                }),
            r(
              r(r({}, ny), s),
              {},
              {
                recordHeaders: o,
                recordBody: a,
                recordPerformance: l,
                recordInitialRequests: l,
              }
            )
          );
        },
        nT = l(function e(t) {
          var n,
            i,
            r = this,
            s =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          o(this, e),
            u(this, "bucketSize", 100),
            u(this, "refillRate", 10),
            u(this, "mutationBuckets", {}),
            u(this, "loggedTracker", {}),
            u(this, "refillBuckets", function () {
              Object.keys(r.mutationBuckets).forEach(function (e) {
                (r.mutationBuckets[e] = r.mutationBuckets[e] + r.refillRate),
                  r.mutationBuckets[e] >= r.bucketSize &&
                    delete r.mutationBuckets[e];
              });
            }),
            u(this, "getNodeOrRelevantParent", function (e) {
              var t = r.rrweb.mirror.getNode(e);
              if (
                "svg" !== (null == t ? void 0 : t.nodeName) &&
                t instanceof Element
              ) {
                var n = t.closest("svg");
                if (n) return [r.rrweb.mirror.getId(n), n];
              }
              return [e, t];
            }),
            u(this, "numberOfChanges", function (e) {
              var t, n, i, r, s, o, a, l;
              return (
                (null !==
                  (t =
                    null === (n = e.removes) || void 0 === n
                      ? void 0
                      : n.length) && void 0 !== t
                  ? t
                  : 0) +
                (null !==
                  (i =
                    null === (r = e.attributes) || void 0 === r
                      ? void 0
                      : r.length) && void 0 !== i
                  ? i
                  : 0) +
                (null !==
                  (s =
                    null === (o = e.texts) || void 0 === o
                      ? void 0
                      : o.length) && void 0 !== s
                  ? s
                  : 0) +
                (null !==
                  (a =
                    null === (l = e.adds) || void 0 === l
                      ? void 0
                      : l.length) && void 0 !== a
                  ? a
                  : 0)
              );
            }),
            u(this, "throttleMutations", function (e) {
              if (3 !== e.type || 0 !== e.data.source) return e;
              var t = e.data,
                n = r.numberOfChanges(t);
              t.attributes &&
                (t.attributes = t.attributes.filter(function (e) {
                  var t,
                    n,
                    i,
                    s = c(r.getNodeOrRelevantParent(e.id), 2),
                    o = s[0],
                    a = s[1];
                  return (
                    0 !== r.mutationBuckets[o] &&
                    ((r.mutationBuckets[o] =
                      null !== (t = r.mutationBuckets[o]) && void 0 !== t
                        ? t
                        : r.bucketSize),
                    (r.mutationBuckets[o] = Math.max(
                      r.mutationBuckets[o] - 1,
                      0
                    )),
                    0 === r.mutationBuckets[o] &&
                      (r.loggedTracker[o] ||
                        ((r.loggedTracker[o] = !0),
                        null === (n = (i = r.options).onBlockedNode) ||
                          void 0 === n ||
                          n.call(i, o, a))),
                    e)
                  );
                }));
              var i = r.numberOfChanges(t);
              return 0 !== i || n === i ? e : void 0;
            }),
            (this.rrweb = t),
            (this.options = s),
            (this.refillRate =
              null !== (n = this.options.refillRate) && void 0 !== n
                ? n
                : this.refillRate),
            (this.bucketSize =
              null !== (i = this.options.bucketSize) && void 0 !== i
                ? i
                : this.bucketSize),
            setInterval(function () {
              r.refillBuckets();
            }, 1e3);
        }),
        nC = [
          t5.MouseMove,
          t5.MouseInteraction,
          t5.Scroll,
          t5.ViewportResize,
          t5.Input,
          t5.TouchMove,
          t5.MediaInteraction,
          t5.Drag,
        ],
        nA = [
          t5.StyleSheetRule,
          t5.StyleDeclaration,
          t5.AdoptedStyleSheet,
          t5.Font,
        ],
        nF = [t3.Custom, t3.Meta, t3.FullSnapshot],
        nM = (function () {
          function e(t, n) {
            o(this, e),
              (this.size = 0),
              (this.data = []),
              (this.sessionId = t),
              (this.windowId = n);
          }
          return (
            l(e, [
              {
                key: "mostRecentSnapshotTimestamp",
                get: function () {
                  return this.data.length
                    ? this.data[this.data.length - 1].timestamp
                    : null;
                },
              },
              {
                key: "add",
                value: function (e) {
                  (this.size += e.$snapshot_bytes),
                    this.data.push(e.$snapshot_data);
                },
              },
            ]),
            e
          );
        })(),
        nI = function (e) {
          return { rrwebMethod: e, enqueuedAt: Date.now(), attempt: 1 };
        },
        nO = "[SessionRecording]",
        nj = (function () {
          function e(t) {
            var n = this;
            if (
              (o(this, e),
              u(this, "queuedRRWebEvents", []),
              u(this, "isIdle", !1),
              u(this, "_linkedFlagSeen", !1),
              u(this, "_lastActivityTimestamp", Date.now()),
              u(this, "_linkedFlag", null),
              u(this, "_forceAllowLocalhostNetworkCapture", !1),
              u(this, "_samplingSessionListener", null),
              (this.instance = t),
              (this._captureStarted = !1),
              (this._endpoint = "/s/"),
              (this.stopRrweb = void 0),
              (this.receivedDecide = !1),
              null == A ||
                A.addEventListener("beforeunload", function () {
                  n._flushBuffer();
                }),
              null == A ||
                A.addEventListener("offline", function () {
                  n._tryAddCustomEvent("browser offline", {});
                }),
              null == A ||
                A.addEventListener("online", function () {
                  n._tryAddCustomEvent("browser online", {});
                }),
              null == A ||
                A.addEventListener("visibilitychange", function () {
                  if (null != D && D.visibilityState) {
                    var e = "window " + D.visibilityState;
                    n._tryAddCustomEvent(e, {});
                  }
                }),
              !this.instance.sessionManager)
            )
              throw (
                (U.error(nO + " started without valid sessionManager"),
                Error(
                  nO + " started without valid sessionManager. This is a bug."
                ))
              );
            var i = this.sessionManager.checkAndGetSessionAndWindowId(),
              r = i.sessionId,
              s = i.windowId;
            (this.sessionId = r),
              (this.windowId = s),
              (this.buffer = new nM(this.sessionId, this.windowId)),
              this._setupSampling();
          }
          return (
            l(e, [
              {
                key: "rrwebRecord",
                get: function () {
                  var e;
                  return null == q || null === (e = q.rrweb) || void 0 === e
                    ? void 0
                    : e.record;
                },
              },
              {
                key: "started",
                get: function () {
                  return this._captureStarted;
                },
              },
              {
                key: "sessionManager",
                get: function () {
                  if (!this.instance.sessionManager)
                    throw Error(
                      nO +
                        " started without valid sessionManager. This is a bug."
                    );
                  return this.instance.sessionManager;
                },
              },
              {
                key: "fullSnapshotIntervalMillis",
                get: function () {
                  var e;
                  return (
                    (null === (e = this.instance.config.session_recording) ||
                    void 0 === e
                      ? void 0
                      : e.full_snapshot_interval_millis) || 3e5
                  );
                },
              },
              {
                key: "isSampled",
                get: function () {
                  var e = this.instance.get_property(eb);
                  return C(e) ? e : null;
                },
              },
              {
                key: "sessionDuration",
                get: function () {
                  var e = this.buffer.mostRecentSnapshotTimestamp,
                    t = this.sessionManager.checkAndGetSessionAndWindowId(
                      !0
                    ).sessionStartTimestamp;
                  return e ? e - t : null;
                },
              },
              {
                key: "isRecordingEnabled",
                get: function () {
                  var e = !!this.instance.get_property(ef),
                    t = !this.instance.config.disable_session_recording;
                  return A && e && t;
                },
              },
              {
                key: "isConsoleLogCaptureEnabled",
                get: function () {
                  var e = !!this.instance.get_property(ep),
                    t = this.instance.config.enable_recording_console_log;
                  return null != t ? t : e;
                },
              },
              {
                key: "canvasRecording",
                get: function () {
                  var e = this.instance.get_property(ev);
                  return e && e.fps && e.quality
                    ? { enabled: e.enabled, fps: e.fps, quality: e.quality }
                    : void 0;
                },
              },
              {
                key: "networkPayloadCapture",
                get: function () {
                  var e,
                    t,
                    n = this.instance.get_property(eg),
                    i = {
                      recordHeaders:
                        null === (e = this.instance.config.session_recording) ||
                        void 0 === e
                          ? void 0
                          : e.recordHeaders,
                      recordBody:
                        null === (t = this.instance.config.session_recording) ||
                        void 0 === t
                          ? void 0
                          : t.recordBody,
                    },
                    r =
                      (null == i ? void 0 : i.recordHeaders) ||
                      (null == n ? void 0 : n.recordHeaders),
                    s =
                      (null == i ? void 0 : i.recordBody) ||
                      (null == n ? void 0 : n.recordBody),
                    o =
                      this.instance.config.capture_performance ||
                      (null == n ? void 0 : n.capturePerformance);
                  return r || s || o
                    ? { recordHeaders: r, recordBody: s, recordPerformance: o }
                    : void 0;
                },
              },
              {
                key: "sampleRate",
                get: function () {
                  var e = this.instance.get_property(em);
                  return T(e) ? e : null;
                },
              },
              {
                key: "minimumDuration",
                get: function () {
                  var e = this.instance.get_property(ey);
                  return T(e) ? e : null;
                },
              },
              {
                key: "status",
                get: function () {
                  return this.receivedDecide
                    ? this.isRecordingEnabled
                      ? R(this._linkedFlag) || this._linkedFlagSeen
                        ? C(this.isSampled)
                          ? this.isSampled
                            ? "sampled"
                            : "disabled"
                          : "active"
                        : "buffering"
                      : "disabled"
                    : "buffering";
                },
              },
              {
                key: "startIfEnabledOrStop",
                value: function () {
                  this.isRecordingEnabled
                    ? (this._startCapture(), U.info(nO + " started"))
                    : (this.stopRecording(), this.clearBuffer());
                },
              },
              {
                key: "stopRecording",
                value: function () {
                  this._captureStarted &&
                    this.stopRrweb &&
                    (this.stopRrweb(),
                    (this.stopRrweb = void 0),
                    (this._captureStarted = !1),
                    U.info(nO + " stopped"));
                },
              },
              {
                key: "makeSamplingDecision",
                value: function (e) {
                  var t,
                    n,
                    i = this.sessionId !== e,
                    r = this.sampleRate;
                  if (T(r)) {
                    var s,
                      o = this.isSampled,
                      a = i || !C(o);
                    (s = a ? Math.random() < r : o) ||
                      !a ||
                      U.warn(
                        nO +
                          " Sample rate ("
                            .concat(r, ") has determined that this sessionId (")
                            .concat(e, ") will not be sent to the server.")
                      ),
                      this._tryAddCustomEvent("samplingDecisionMade", {
                        sampleRate: r,
                      }),
                      null === (n = this.instance.persistence) ||
                        void 0 === n ||
                        n.register(u({}, eb, s));
                  } else
                    null === (t = this.instance.persistence) ||
                      void 0 === t ||
                      t.register(u({}, eb, null));
                },
              },
              {
                key: "afterDecideResponse",
                value: function (e) {
                  var t,
                    n,
                    i,
                    r = this;
                  if (
                    (this._persistDecideResponse(e),
                    (this._linkedFlag =
                      (null === (t = e.sessionRecording) || void 0 === t
                        ? void 0
                        : t.linkedFlag) || null),
                    null !== (n = e.sessionRecording) &&
                      void 0 !== n &&
                      n.endpoint &&
                      (this._endpoint =
                        null === (i = e.sessionRecording) || void 0 === i
                          ? void 0
                          : i.endpoint),
                    this._setupSampling(),
                    !R(this._linkedFlag))
                  ) {
                    var s = S(this._linkedFlag)
                        ? this._linkedFlag
                        : this._linkedFlag.flag,
                      o = S(this._linkedFlag) ? null : this._linkedFlag.variant;
                    this.instance.onFeatureFlags(function (e, t) {
                      var n = x(t) && s in t,
                        i = o ? t[s] === o : n;
                      if (i) {
                        var a = { linkedFlag: s, linkedVariant: o },
                          l = "linked flag matched";
                        U.info(nO + " " + l, a), r._tryAddCustomEvent(l, a);
                      }
                      r._linkedFlagSeen = i;
                    });
                  }
                  (this.receivedDecide = !0), this.startIfEnabledOrStop();
                },
              },
              {
                key: "_setupSampling",
                value: function () {
                  var e = this;
                  T(this.sampleRate) &&
                    E(this._samplingSessionListener) &&
                    (this._samplingSessionListener =
                      this.sessionManager.onSessionId(function (t) {
                        e.makeSamplingDecision(t);
                      }));
                },
              },
              {
                key: "_persistDecideResponse",
                value: function (e) {
                  if (this.instance.persistence) {
                    var t = this.instance.persistence,
                      n = function () {
                        var n,
                          i,
                          s,
                          o,
                          a,
                          l,
                          c,
                          d,
                          h =
                            null === (n = e.sessionRecording) || void 0 === n
                              ? void 0
                              : n.sampleRate,
                          f = R(h) ? null : parseFloat(h),
                          p =
                            null === (i = e.sessionRecording) || void 0 === i
                              ? void 0
                              : i.minimumDurationMilliseconds;
                        t.register(
                          (u((d = {}), ef, !!e.sessionRecording),
                          u(
                            d,
                            ep,
                            null === (s = e.sessionRecording) || void 0 === s
                              ? void 0
                              : s.consoleLogRecordingEnabled
                          ),
                          u(
                            d,
                            eg,
                            r(
                              { capturePerformance: e.capturePerformance },
                              null === (o = e.sessionRecording) || void 0 === o
                                ? void 0
                                : o.networkPayloadCapture
                            )
                          ),
                          u(d, ev, {
                            enabled:
                              null === (a = e.sessionRecording) || void 0 === a
                                ? void 0
                                : a.recordCanvas,
                            fps:
                              null === (l = e.sessionRecording) || void 0 === l
                                ? void 0
                                : l.canvasFps,
                            quality:
                              null === (c = e.sessionRecording) || void 0 === c
                                ? void 0
                                : c.canvasQuality,
                          }),
                          u(d, em, f),
                          u(d, ey, P(p) ? null : p),
                          d)
                        );
                      };
                    n(), this.sessionManager.onSessionId(n);
                  }
                },
              },
              {
                key: "log",
                value: function (e) {
                  var t,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "log";
                  null === (t = this.instance.sessionRecording) ||
                    void 0 === t ||
                    t.onRRwebEmit({
                      type: 6,
                      data: {
                        plugin: "rrweb/console@1",
                        payload: {
                          level: n,
                          trace: [],
                          payload: [JSON.stringify(e)],
                        },
                      },
                      timestamp: J(),
                    });
                },
              },
              {
                key: "_startCapture",
                value: function () {
                  var e = this;
                  P(Object.assign) ||
                    this._captureStarted ||
                    this.instance.config.disable_session_recording ||
                    this.instance.consent.isOptedOut() ||
                    ((this._captureStarted = !0),
                    this.sessionManager.checkAndGetSessionAndWindowId(),
                    this.rrwebRecord
                      ? this._onScriptLoaded()
                      : eo(
                          this.instance.requestRouter.endpointFor(
                            "assets",
                            "/static/recorder.js?v=".concat(g.LIB_VERSION)
                          ),
                          function (t) {
                            if (t)
                              return U.error(
                                nO + " could not load recorder.js",
                                t
                              );
                            e._onScriptLoaded();
                          }
                        ));
                },
              },
              {
                key: "isInteractiveEvent",
                value: function (e) {
                  var t;
                  return (
                    3 === e.type &&
                    -1 !==
                      nC.indexOf(
                        null === (t = e.data) || void 0 === t
                          ? void 0
                          : t.source
                      )
                  );
                },
              },
              {
                key: "_updateWindowAndSessionIds",
                value: function (e) {
                  var t = this.isInteractiveEvent(e);
                  t ||
                    this.isIdle ||
                    (e.timestamp - this._lastActivityTimestamp > 3e5 &&
                      ((this.isIdle = !0),
                      clearTimeout(this._fullSnapshotTimer),
                      this._flushBuffer()));
                  var n = !1;
                  if (
                    (t &&
                      ((this._lastActivityTimestamp = e.timestamp),
                      this.isIdle &&
                        ((this.isIdle = !1),
                        this._tryAddCustomEvent("sessionNoLongerIdle", {
                          reason: "user activity",
                          type: e.type,
                        }),
                        (n = !0))),
                    !this.isIdle)
                  ) {
                    var i = this.sessionManager.checkAndGetSessionAndWindowId(
                        !t,
                        e.timestamp
                      ),
                      r = i.windowId,
                      s = i.sessionId,
                      o = this.sessionId !== s,
                      a = this.windowId !== r;
                    (this.windowId = r),
                      (this.sessionId = s),
                      (n ||
                        (-1 === [2, 4].indexOf(e.type) &&
                          (a || o || P(this._fullSnapshotTimer)))) &&
                        this._tryTakeFullSnapshot();
                  }
                },
              },
              {
                key: "_tryRRWebMethod",
                value: function (e) {
                  try {
                    return e.rrwebMethod(), !0;
                  } catch (t) {
                    return (
                      this.queuedRRWebEvents.length < 10
                        ? this.queuedRRWebEvents.push({
                            enqueuedAt: e.enqueuedAt || Date.now(),
                            attempt: e.attempt++,
                            rrwebMethod: e.rrwebMethod,
                          })
                        : U.warn(
                            nO + " could not emit queued rrweb event.",
                            t,
                            e
                          ),
                      !1
                    );
                  }
                },
              },
              {
                key: "_tryAddCustomEvent",
                value: function (e, t) {
                  var n = this;
                  return this._tryRRWebMethod(
                    nI(function () {
                      return n.rrwebRecord.addCustomEvent(e, t);
                    })
                  );
                },
              },
              {
                key: "_tryTakeFullSnapshot",
                value: function () {
                  var e = this;
                  return this._tryRRWebMethod(
                    nI(function () {
                      return e.rrwebRecord.takeFullSnapshot();
                    })
                  );
                },
              },
              {
                key: "_onScriptLoaded",
                value: function () {
                  for (
                    var e,
                      t = this,
                      n = {
                        blockClass: "ph-no-capture",
                        blockSelector: void 0,
                        ignoreClass: "ph-ignore-input",
                        maskTextClass: "ph-mask",
                        maskTextSelector: void 0,
                        maskTextFn: void 0,
                        maskAllInputs: !0,
                        maskInputOptions: {},
                        maskInputFn: void 0,
                        slimDOMOptions: {},
                        collectFonts: !1,
                        inlineStylesheet: !0,
                        recordCrossOriginIframes: !1,
                      },
                      i = this.instance.config.session_recording,
                      s = 0,
                      o = Object.entries(i || {});
                    s < o.length;
                    s++
                  ) {
                    var a = c(o[s], 2),
                      l = a[0],
                      u = a[1];
                    l in n && (n[l] = u);
                  }
                  if (
                    (this.canvasRecording &&
                      this.canvasRecording.enabled &&
                      ((n.recordCanvas = !0),
                      (n.sampling = { canvas: this.canvasRecording.fps }),
                      (n.dataURLOptions = {
                        type: "image/webp",
                        quality: this.canvasRecording.quality,
                      })),
                    this.rrwebRecord)
                  ) {
                    this.mutationRateLimiter =
                      null !== (e = this.mutationRateLimiter) && void 0 !== e
                        ? e
                        : new nT(this.rrwebRecord, {
                            onBlockedNode: function (e, n) {
                              var i = "Too many mutations on node '".concat(
                                e,
                                "'. Rate limiting. This could be due to SVG animations or something similar"
                              );
                              U.info(i, { node: n }),
                                t.log(nO + " " + i, "warn");
                            },
                          });
                    var d = this._gatherRRWebPlugins();
                    (this.stopRrweb = this.rrwebRecord(
                      r(
                        {
                          emit: function (e) {
                            t.onRRwebEmit(e);
                          },
                          plugins: d,
                        },
                        n
                      )
                    )),
                      this.instance._addCaptureHook(function (e) {
                        try {
                          if ("$pageview" === e) {
                            var n = A ? t._maskUrl(A.location.href) : "";
                            if (!n) return;
                            t._tryAddCustomEvent("$pageview", { href: n }),
                              t._tryTakeFullSnapshot();
                          }
                        } catch (e) {
                          U.error(
                            "Could not add $pageview to rrweb session",
                            e
                          );
                        }
                      }),
                      (this._lastActivityTimestamp = Date.now()),
                      (this.isIdle = !1),
                      this._tryAddCustomEvent("$session_options", {
                        sessionRecordingOptions: n,
                        activePlugins: d.map(function (e) {
                          return null == e ? void 0 : e.name;
                        }),
                      }),
                      this._tryAddCustomEvent("$posthog_config", {
                        config: this.instance.config,
                      });
                  } else
                    U.error(
                      nO +
                        "onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong."
                    );
                },
              },
              {
                key: "_scheduleFullSnapshot",
                value: function () {
                  var e = this;
                  if (
                    (this._fullSnapshotTimer &&
                      clearInterval(this._fullSnapshotTimer),
                    !this.isIdle)
                  ) {
                    var t = this.fullSnapshotIntervalMillis;
                    t &&
                      (this._fullSnapshotTimer = setInterval(function () {
                        e._tryTakeFullSnapshot();
                      }, t));
                  }
                },
              },
              {
                key: "_gatherRRWebPlugins",
                value: function () {
                  var e = [];
                  return (
                    q.rrwebConsoleRecord &&
                      this.isConsoleLogCaptureEnabled &&
                      e.push(q.rrwebConsoleRecord.getRecordConsolePlugin()),
                    this.networkPayloadCapture &&
                      w(q.getRecordNetworkPlugin) &&
                      (!e7.includes(location.hostname) ||
                      this._forceAllowLocalhostNetworkCapture
                        ? e.push(
                            q.getRecordNetworkPlugin(
                              nR(
                                this.instance.config,
                                this.networkPayloadCapture
                              )
                            )
                          )
                        : U.info(
                            nO +
                              " NetworkCapture not started because we are on localhost."
                          )),
                    e
                  );
                },
              },
              {
                key: "onRRwebEmit",
                value: function (e) {
                  if ((this._processQueuedEvents(), e && x(e))) {
                    if (e.type === t3.Meta) {
                      var t = this._maskUrl(e.data.href);
                      if (((this._lastHref = t), !t)) return;
                      e.data.href = t;
                    } else this._pageViewFallBack();
                    e.type === t3.FullSnapshot && this._scheduleFullSnapshot();
                    var n = this.mutationRateLimiter
                      ? this.mutationRateLimiter.throttleMutations(e)
                      : e;
                    if (n) {
                      var i,
                        r,
                        s = (function (e) {
                          if (
                            e &&
                            x(e) &&
                            6 === e.type &&
                            x(e.data) &&
                            "rrweb/console@1" === e.data.plugin
                          ) {
                            e.data.payload.payload.length > 10 &&
                              ((e.data.payload.payload =
                                e.data.payload.payload.slice(0, 10)),
                              e.data.payload.payload.push("...[truncated]"));
                            for (
                              var t = [], n = 0;
                              n < e.data.payload.payload.length;
                              n++
                            )
                              e.data.payload.payload[n] &&
                              e.data.payload.payload[n].length > 2e3
                                ? t.push(
                                    e.data.payload.payload[n].slice(0, 2e3) +
                                      "...[truncated]"
                                  )
                                : t.push(e.data.payload.payload[n]);
                            return (e.data.payload.payload = t), e;
                          }
                          return e;
                        })(n),
                        o = JSON.stringify(
                          s,
                          ((i = []),
                          function (e, t) {
                            if (x(t)) {
                              for (; i.length > 0 && i.at(-1) !== this; )
                                i.pop();
                              return i.includes(t)
                                ? "[Circular]"
                                : (i.push(t), t);
                            }
                            return t;
                          })
                        ).length;
                      if (
                        (this._updateWindowAndSessionIds(s),
                        !this.isIdle ||
                          ((r =
                            s.type === t3.IncrementalSnapshot &&
                            !R(s.data.source) &&
                            nA.includes(s.data.source)),
                          nF.includes(s.type) || r))
                      ) {
                        var a = {
                          $snapshot_bytes: o,
                          $snapshot_data: s,
                          $session_id: this.sessionId,
                          $window_id: this.windowId,
                        };
                        "disabled" !== this.status
                          ? this._captureSnapshotBuffered(a)
                          : this.clearBuffer();
                      }
                    }
                  }
                },
              },
              {
                key: "_pageViewFallBack",
                value: function () {
                  if (!this.instance.config.capture_pageview && A) {
                    var e = this._maskUrl(A.location.href);
                    this._lastHref !== e &&
                      (this._tryAddCustomEvent("$url_changed", { href: e }),
                      (this._lastHref = e));
                  }
                },
              },
              {
                key: "_processQueuedEvents",
                value: function () {
                  var e = this;
                  if (this.queuedRRWebEvents.length) {
                    var t = d(this.queuedRRWebEvents);
                    (this.queuedRRWebEvents = []),
                      t.forEach(function (t) {
                        Date.now() - t.enqueuedAt <= 2e3 &&
                          e._tryRRWebMethod(t);
                      });
                  }
                },
              },
              {
                key: "_maskUrl",
                value: function (e) {
                  var t = this.instance.config.session_recording;
                  if (t.maskNetworkRequestFn) {
                    var n,
                      i = { url: e };
                    return null === (n = i = t.maskNetworkRequestFn(i)) ||
                      void 0 === n
                      ? void 0
                      : n.url;
                  }
                  return e;
                },
              },
              {
                key: "clearBuffer",
                value: function () {
                  this.buffer = new nM(this.sessionId, this.windowId);
                },
              },
              {
                key: "_flushBuffer",
                value: function () {
                  var e = this;
                  this.flushBufferTimer &&
                    (clearTimeout(this.flushBufferTimer),
                    (this.flushBufferTimer = void 0));
                  var t = this.minimumDuration,
                    n = this.sessionDuration,
                    i = T(n) && n >= 0,
                    r = T(t) && i && n < t;
                  "buffering" === this.status || r
                    ? (this.flushBufferTimer = setTimeout(function () {
                        e._flushBuffer();
                      }, 2e3))
                    : (this.buffer.data.length > 0 &&
                        this._captureSnapshot({
                          $snapshot_bytes: this.buffer.size,
                          $snapshot_data: this.buffer.data,
                          $session_id: this.buffer.sessionId,
                          $window_id: this.buffer.windowId,
                        }),
                      this.clearBuffer());
                },
              },
              {
                key: "_captureSnapshotBuffered",
                value: function (e) {
                  var t,
                    n = this,
                    i =
                      2 +
                      ((null === (t = this.buffer) || void 0 === t
                        ? void 0
                        : t.data.length) || 0);
                  (this.buffer.size + e.$snapshot_bytes + i > 943718.4 ||
                    this.buffer.sessionId !== this.sessionId) &&
                    this._flushBuffer(),
                    this.buffer.add(e),
                    this.flushBufferTimer ||
                      (this.flushBufferTimer = setTimeout(function () {
                        n._flushBuffer();
                      }, 2e3));
                },
              },
              {
                key: "_captureSnapshot",
                value: function (e) {
                  this.instance.capture("$snapshot", e, {
                    _url: this.instance.requestRouter.endpointFor(
                      "api",
                      this._endpoint
                    ),
                    _noTruncate: !0,
                    _batchKey: "recordings",
                    _noHeatmaps: !0,
                  });
                },
              },
            ]),
            e
          );
        })(),
        nD = (function () {
          function e(t) {
            o(this, e),
              (this.instance = t),
              (this.instance.decideEndpointWasHit =
                this.instance._hasBootstrappedFeatureFlags());
          }
          return (
            l(e, [
              {
                key: "call",
                value: function () {
                  var e = this,
                    t = {
                      token: this.instance.config.token,
                      distinct_id: this.instance.get_distinct_id(),
                      groups: this.instance.getGroups(),
                      person_properties: this.instance.get_property(ek),
                      group_properties: this.instance.get_property(eP),
                      disable_flags:
                        this.instance.config.advanced_disable_feature_flags ||
                        this.instance.config
                          .advanced_disable_feature_flags_on_first_load ||
                        void 0,
                    };
                  this.instance._send_request({
                    method: "POST",
                    url: this.instance.requestRouter.endpointFor(
                      "api",
                      "/decide/?v=3"
                    ),
                    data: t,
                    compression: this.instance.config.disable_compression
                      ? void 0
                      : Q.Base64,
                    timeout:
                      this.instance.config.feature_flag_request_timeout_ms,
                    callback: function (t) {
                      return e.parseDecideResponse(t.json);
                    },
                  });
                },
              },
              {
                key: "parseDecideResponse",
                value: function (e) {
                  var t = this;
                  this.instance.featureFlags.setReloadingPaused(!1),
                    this.instance.featureFlags._startReloadTimer();
                  var n = !e;
                  if (
                    (this.instance.config
                      .advanced_disable_feature_flags_on_first_load ||
                      this.instance.config.advanced_disable_feature_flags ||
                      this.instance.featureFlags.receivedFeatureFlags(
                        null != e ? e : {},
                        n
                      ),
                    n)
                  )
                    U.error("Failed to fetch feature flags from PostHog.");
                  else {
                    if (!D || !D.body)
                      return (
                        U.info(
                          "document not ready yet, trying again in 500 milliseconds..."
                        ),
                        void setTimeout(function () {
                          t.parseDecideResponse(e);
                        }, 500)
                      );
                    this.instance._afterDecideResponse(e);
                    var i =
                      null == A
                        ? void 0
                        : A.extendPostHogWithExceptionAutoCapture;
                    if (
                      (e.autocaptureExceptions &&
                        e.autocaptureExceptions &&
                        P(i) &&
                        eo(
                          this.instance.requestRouter.endpointFor(
                            "assets",
                            "/static/exception-autocapture.js"
                          ),
                          function (n) {
                            if (n)
                              return U.error(
                                "Could not load exception autocapture script",
                                n
                              );
                            A.extendPostHogWithExceptionAutocapture(
                              t.instance,
                              e
                            );
                          }
                        ),
                      e.siteApps)
                    ) {
                      if (this.instance.config.opt_in_site_apps) {
                        var r,
                          s = p(e.siteApps);
                        try {
                          for (s.s(); !(r = s.n()).done; )
                            (function () {
                              var e = r.value,
                                n = e.id,
                                i = e.url,
                                s = t.instance.requestRouter.endpointFor(
                                  "api",
                                  i
                                );
                              (q["__$$ph_site_app_".concat(n)] = t.instance),
                                eo(s, function (e) {
                                  e &&
                                    U.error(
                                      "Error while initializing PostHog app with config id ".concat(
                                        n
                                      ),
                                      e
                                    );
                                });
                            })();
                        } catch (e) {
                          s.e(e);
                        } finally {
                          s.f();
                        }
                      } else
                        e.siteApps.length > 0 &&
                          U.error(
                            'PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.'
                          );
                    }
                  }
                },
              },
            ]),
            e
          );
        })(),
        nL =
          null != A && A.location
            ? tr(A.location.hash, "__posthog") || tr(location.hash, "state")
            : null,
        n$ = "_postHogToolbarParams";
      ((im = nE || (nE = {}))[(im.UNINITIALIZED = 0)] = "UNINITIALIZED"),
        (im[(im.LOADING = 1)] = "LOADING"),
        (im[(im.LOADED = 2)] = "LOADED");
      var nN = (function () {
          function e(t) {
            o(this, e), (this.instance = t);
          }
          return (
            l(e, [
              {
                key: "setToolbarState",
                value: function (e) {
                  q.ph_toolbar_state = e;
                },
              },
              {
                key: "getToolbarState",
                value: function () {
                  var e;
                  return null !== (e = q.ph_toolbar_state) && void 0 !== e
                    ? e
                    : nE.UNINITIALIZED;
                },
              },
              {
                key: "maybeLoadToolbar",
                value: function () {
                  var e,
                    t,
                    n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : void 0,
                    i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : void 0,
                    r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : void 0;
                  if (!A || !D) return !1;
                  (n = null !== (e = n) && void 0 !== e ? e : A.location),
                    (r = null !== (t = r) && void 0 !== t ? t : A.history);
                  try {
                    if (!i) {
                      try {
                        A.localStorage.setItem("test", "test"),
                          A.localStorage.removeItem("test");
                      } catch (e) {
                        return !1;
                      }
                      i = null == A ? void 0 : A.localStorage;
                    }
                    var s,
                      o = nL || tr(n.hash, "__posthog") || tr(n.hash, "state"),
                      a = o
                        ? ee(function () {
                            return JSON.parse(atob(decodeURIComponent(o)));
                          }) ||
                          ee(function () {
                            return JSON.parse(decodeURIComponent(o));
                          })
                        : null;
                    return (
                      a && "ph_authorize" === a.action
                        ? (((s = a).source = "url"),
                          s &&
                            Object.keys(s).length > 0 &&
                            (a.desiredHash
                              ? (n.hash = a.desiredHash)
                              : r
                              ? r.replaceState(
                                  r.state,
                                  "",
                                  n.pathname + n.search
                                )
                              : (n.hash = "")))
                        : (((s = JSON.parse(i.getItem(n$) || "{}")).source =
                            "localstorage"),
                          delete s.userIntent),
                      !(!s.token || this.instance.config.token !== s.token) &&
                        (this.loadToolbar(s), !0)
                    );
                  } catch (e) {
                    return !1;
                  }
                },
              },
              {
                key: "_callLoadToolbar",
                value: function (e) {
                  (q.ph_load_toolbar || q.ph_load_editor)(e, this.instance);
                },
              },
              {
                key: "loadToolbar",
                value: function (e) {
                  var t = this,
                    n = !(null == D || !D.getElementById(ej));
                  if (!A || n) return !1;
                  var i =
                      "custom" === this.instance.requestRouter.region &&
                      this.instance.config.advanced_disable_toolbar_metrics,
                    s = r(
                      r({ token: this.instance.config.token }, e),
                      {},
                      { apiURL: this.instance.requestRouter.endpointFor("ui") },
                      i ? { instrument: !1 } : {}
                    );
                  if (
                    (A.localStorage.setItem(
                      n$,
                      JSON.stringify(r(r({}, s), {}, { source: void 0 }))
                    ),
                    this.getToolbarState() === nE.LOADED)
                  )
                    this._callLoadToolbar(s);
                  else if (this.getToolbarState() === nE.UNINITIALIZED) {
                    this.setToolbarState(nE.LOADING);
                    var o = 3e5 * Math.floor(Date.now() / 3e5);
                    eo(
                      this.instance.requestRouter.endpointFor(
                        "assets",
                        "/static/toolbar.js?t=".concat(o)
                      ),
                      function (e) {
                        if (e)
                          return (
                            U.error("Failed to load toolbar", e),
                            void t.setToolbarState(nE.UNINITIALIZED)
                          );
                        t.setToolbarState(nE.LOADED), t._callLoadToolbar(s);
                      }
                    ),
                      es(A, "turbolinks:load", function () {
                        t.setToolbarState(nE.UNINITIALIZED), t.loadToolbar(s);
                      });
                  }
                  return !0;
                },
              },
              {
                key: "_loadEditor",
                value: function (e) {
                  return this.loadToolbar(e);
                },
              },
              {
                key: "maybeLoadEditor",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : void 0,
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : void 0,
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : void 0;
                  return this.maybeLoadToolbar(e, t, n);
                },
              },
            ]),
            e
          );
        })(),
        nV = (function () {
          function e(t) {
            o(this, e),
              u(this, "isPaused", !0),
              u(this, "queue", []),
              u(this, "flushTimeoutMs", 3e3),
              (this.sendRequest = t);
          }
          return (
            l(e, [
              {
                key: "enqueue",
                value: function (e) {
                  this.queue.push(e),
                    this.flushTimeout || this.setFlushTimeout();
                },
              },
              {
                key: "unload",
                value: function () {
                  var e = this;
                  this.clearFlushTimeout();
                  var t = Object.values(
                    this.queue.length > 0 ? this.formatQueue() : {}
                  );
                  []
                    .concat(
                      d(
                        t.filter(function (e) {
                          return 0 === e.url.indexOf("/e");
                        })
                      ),
                      d(
                        t.filter(function (e) {
                          return 0 !== e.url.indexOf("/e");
                        })
                      )
                    )
                    .map(function (t) {
                      e.sendRequest(
                        r(r({}, t), {}, { transport: "sendBeacon" })
                      );
                    });
                },
              },
              {
                key: "enable",
                value: function () {
                  (this.isPaused = !1), this.setFlushTimeout();
                },
              },
              {
                key: "setFlushTimeout",
                value: function () {
                  var e = this;
                  this.isPaused ||
                    (this.flushTimeout = setTimeout(function () {
                      if ((e.clearFlushTimeout(), e.queue.length > 0)) {
                        var t = e.formatQueue();
                        for (var n in t)
                          (function (n) {
                            var i = t[n],
                              r = new Date().getTime();
                            i.data &&
                              b(i.data) &&
                              X(i.data, function (e) {
                                (e.offset = Math.abs(e.timestamp - r)),
                                  delete e.timestamp;
                              }),
                              e.sendRequest(i);
                          })(n);
                      }
                    }, this.flushTimeoutMs));
                },
              },
              {
                key: "clearFlushTimeout",
                value: function () {
                  clearTimeout(this.flushTimeout), (this.flushTimeout = void 0);
                },
              },
              {
                key: "formatQueue",
                value: function () {
                  var e = {};
                  return (
                    X(this.queue, function (t) {
                      var n,
                        i = (t ? t.batchKey : null) || t.url;
                      P(e[i]) && (e[i] = r(r({}, t), {}, { data: [] })),
                        null === (n = e[i].data) ||
                          void 0 === n ||
                          n.push(t.data);
                    }),
                    (this.queue = []),
                    e
                  );
                },
              },
            ]),
            e
          );
        })(),
        nB = Uint8Array,
        nq = Uint16Array,
        nz = Uint32Array,
        nU = new nB([
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
          4, 5, 5, 5, 5, 0, 0, 0, 0,
        ]),
        nW = new nB([
          0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
          10, 11, 11, 12, 12, 13, 13, 0, 0,
        ]),
        nH = new nB([
          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
        ]),
        nG = function (e, t) {
          for (var n = new nq(31), i = 0; i < 31; ++i)
            n[i] = t += 1 << e[i - 1];
          var r = new nz(n[30]);
          for (i = 1; i < 30; ++i)
            for (var s = n[i]; s < n[i + 1]; ++s) r[s] = ((s - n[i]) << 5) | i;
          return [n, r];
        },
        nX = nG(nU, 2),
        nY = nX[0],
        nK = nX[1];
      (nY[28] = 258), (nK[258] = 28);
      for (
        var nZ = nG(nW, 0)[1], nQ = new nq(32768), nJ = 0;
        nJ < 32768;
        ++nJ
      ) {
        var n0 = ((43690 & nJ) >>> 1) | ((21845 & nJ) << 1);
        (n0 =
          ((61680 & (n0 = ((52428 & n0) >>> 2) | ((13107 & n0) << 2))) >>> 4) |
          ((3855 & n0) << 4)),
          (nQ[nJ] = (((65280 & n0) >>> 8) | ((255 & n0) << 8)) >>> 1);
      }
      var n1 = function (e, t, n) {
          for (var i = e.length, r = 0, s = new nq(t); r < i; ++r)
            ++s[e[r] - 1];
          var o,
            a = new nq(t);
          for (r = 0; r < t; ++r) a[r] = (a[r - 1] + s[r - 1]) << 1;
          if (n) {
            o = new nq(1 << t);
            var l = 15 - t;
            for (r = 0; r < i; ++r)
              if (e[r])
                for (
                  var u = (r << 4) | e[r],
                    c = t - e[r],
                    d = a[e[r] - 1]++ << c,
                    h = d | ((1 << c) - 1);
                  d <= h;
                  ++d
                )
                  o[nQ[d] >>> l] = u;
          } else
            for (o = new nq(i), r = 0; r < i; ++r)
              o[r] = nQ[a[e[r] - 1]++] >>> (15 - e[r]);
          return o;
        },
        n2 = new nB(288);
      for (nJ = 0; nJ < 144; ++nJ) n2[nJ] = 8;
      for (nJ = 144; nJ < 256; ++nJ) n2[nJ] = 9;
      for (nJ = 256; nJ < 280; ++nJ) n2[nJ] = 7;
      for (nJ = 280; nJ < 288; ++nJ) n2[nJ] = 8;
      var n3 = new nB(32);
      for (nJ = 0; nJ < 32; ++nJ) n3[nJ] = 5;
      var n5 = n1(n2, 9, 0),
        n6 = n1(n3, 5, 0),
        n8 = function (e) {
          return ((e / 8) >> 0) + (7 & e && 1);
        },
        n4 = function (e, t, n) {
          (null == t || t < 0) && (t = 0),
            (null == n || n > e.length) && (n = e.length);
          var i = new (e instanceof nq ? nq : e instanceof nz ? nz : nB)(n - t);
          return i.set(e.subarray(t, n)), i;
        },
        n9 = function (e, t, n) {
          n <<= 7 & t;
          var i = (t / 8) >> 0;
          (e[i] |= n), (e[i + 1] |= n >>> 8);
        },
        n7 = function (e, t, n) {
          n <<= 7 & t;
          var i = (t / 8) >> 0;
          (e[i] |= n), (e[i + 1] |= n >>> 8), (e[i + 2] |= n >>> 16);
        },
        ie = function (e, t) {
          for (var n = [], i = 0; i < e.length; ++i)
            e[i] && n.push({ s: i, f: e[i] });
          var r = n.length,
            s = n.slice();
          if (!r) return [new nB(0), 0];
          if (1 == r) {
            var o = new nB(n[0].s + 1);
            return (o[n[0].s] = 1), [o, 1];
          }
          n.sort(function (e, t) {
            return e.f - t.f;
          }),
            n.push({ s: -1, f: 25001 });
          var a = n[0],
            l = n[1],
            u = 0,
            c = 1,
            d = 2;
          for (n[0] = { s: -1, f: a.f + l.f, l: a, r: l }; c != r - 1; )
            (a = n[n[u].f < n[d].f ? u++ : d++]),
              (l = n[u != c && n[u].f < n[d].f ? u++ : d++]),
              (n[c++] = { s: -1, f: a.f + l.f, l: a, r: l });
          var h = s[0].s;
          for (i = 1; i < r; ++i) s[i].s > h && (h = s[i].s);
          var f = new nq(h + 1),
            p = it(n[c - 1], f, 0);
          if (p > t) {
            i = 0;
            var g = 0,
              v = p - t,
              m = 1 << v;
            for (
              s.sort(function (e, t) {
                return f[t.s] - f[e.s] || e.f - t.f;
              });
              i < r;
              ++i
            ) {
              var y = s[i].s;
              if (!(f[y] > t)) break;
              (g += m - (1 << (p - f[y]))), (f[y] = t);
            }
            for (g >>>= v; g > 0; ) {
              var _ = s[i].s;
              f[_] < t ? (g -= 1 << (t - f[_]++ - 1)) : ++i;
            }
            for (; i >= 0 && g; --i) {
              var b = s[i].s;
              f[b] == t && (--f[b], ++g);
            }
            p = t;
          }
          return [new nB(f), p];
        },
        it = function e(t, n, i) {
          return -1 == t.s
            ? Math.max(e(t.l, n, i + 1), e(t.r, n, i + 1))
            : (n[t.s] = i);
        },
        ii = function (e) {
          for (var t = e.length; t && !e[--t]; );
          for (
            var n = new nq(++t),
              i = 0,
              r = e[0],
              s = 1,
              o = function (e) {
                n[i++] = e;
              },
              a = 1;
            a <= t;
            ++a
          )
            if (e[a] == r && a != t) ++s;
            else {
              if (!r && s > 2) {
                for (; s > 138; s -= 138) o(32754);
                s > 2 &&
                  (o(s > 10 ? ((s - 11) << 5) | 28690 : ((s - 3) << 5) | 12305),
                  (s = 0));
              } else if (s > 3) {
                for (o(r), --s; s > 6; s -= 6) o(8304);
                s > 2 && (o(((s - 3) << 5) | 8208), (s = 0));
              }
              for (; s--; ) o(r);
              (s = 1), (r = e[a]);
            }
          return [n.subarray(0, i), t];
        },
        ir = function (e, t) {
          for (var n = 0, i = 0; i < t.length; ++i) n += e[i] * t[i];
          return n;
        },
        is = function (e, t, n) {
          var i = n.length,
            r = n8(t + 2);
          (e[r] = 255 & i),
            (e[r + 1] = i >>> 8),
            (e[r + 2] = 255 ^ e[r]),
            (e[r + 3] = 255 ^ e[r + 1]);
          for (var s = 0; s < i; ++s) e[r + s + 4] = n[s];
          return 8 * (r + 4 + i);
        },
        io = function (e, t, n, i, r, s, o, a, l, u, c) {
          n9(t, c++, n), ++r[256];
          for (
            var d = ie(r, 15),
              h = d[0],
              f = d[1],
              p = ie(s, 15),
              g = p[0],
              v = p[1],
              m = ii(h),
              y = m[0],
              _ = m[1],
              b = ii(g),
              w = b[0],
              x = b[1],
              k = new nq(19),
              P = 0;
            P < y.length;
            ++P
          )
            k[31 & y[P]]++;
          for (P = 0; P < w.length; ++P) k[31 & w[P]]++;
          for (
            var S = ie(k, 7), E = S[0], R = S[1], T = 19;
            T > 4 && !E[nH[T - 1]];
            --T
          );
          var C,
            A,
            F,
            M,
            I = (u + 5) << 3,
            O = ir(r, n2) + ir(s, n3) + o,
            j =
              ir(r, h) +
              ir(s, g) +
              o +
              14 +
              3 * T +
              ir(k, E) +
              (2 * k[16] + 3 * k[17] + 7 * k[18]);
          if (I <= O && I <= j) return is(t, c, e.subarray(l, l + u));
          if ((n9(t, c, 1 + (j < O)), (c += 2), j < O)) {
            (C = n1(h, f, 0)), (A = h), (F = n1(g, v, 0)), (M = g);
            var D = n1(E, R, 0);
            for (
              n9(t, c, _ - 257),
                n9(t, c + 5, x - 1),
                n9(t, c + 10, T - 4),
                c += 14,
                P = 0;
              P < T;
              ++P
            )
              n9(t, c + 3 * P, E[nH[P]]);
            c += 3 * T;
            for (var L = [y, w], $ = 0; $ < 2; ++$) {
              var N = L[$];
              for (P = 0; P < N.length; ++P) {
                var V = 31 & N[P];
                n9(t, c, D[V]),
                  (c += E[V]),
                  V > 15 && (n9(t, c, (N[P] >>> 5) & 127), (c += N[P] >>> 12));
              }
            }
          } else (C = n5), (A = n2), (F = n6), (M = n3);
          for (P = 0; P < a; ++P)
            if (i[P] > 255) {
              n7(t, c, C[(V = (i[P] >>> 18) & 31) + 257]),
                (c += A[V + 257]),
                V > 7 && (n9(t, c, (i[P] >>> 23) & 31), (c += nU[V]));
              var B = 31 & i[P];
              n7(t, c, F[B]),
                (c += M[B]),
                B > 3 && (n7(t, c, (i[P] >>> 5) & 8191), (c += nW[B]));
            } else n7(t, c, C[i[P]]), (c += A[i[P]]);
          return n7(t, c, C[256]), c + A[256];
        },
        ia = new nz([
          65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560,
          2117632,
        ]),
        il = new nB(0),
        iu = (function () {
          for (var e = new nz(256), t = 0; t < 256; ++t) {
            for (var n = t, i = 9; --i; ) n = (1 & n && 3988292384) ^ (n >>> 1);
            e[t] = n;
          }
          return e;
        })(),
        ic = function (e, t, n) {
          for (; n; ++t) (e[t] = n), (n >>>= 8);
        },
        id = !!N || !!$,
        ih = "text/plain",
        ip = function (e, t) {
          var n = c(e.split("?"), 2),
            i = n[0],
            s = n[1],
            o = r({}, t);
          null == s ||
            s.split("&").forEach(function (e) {
              var t = c(e.split("="), 1)[0];
              delete o[t];
            });
          var a = tn(o);
          return (
            (a = a ? (s ? s + "&" : "") + a : s), "".concat(i, "?").concat(a)
          );
        },
        ig = function (e) {
          var t,
            n,
            i,
            r,
            s,
            o,
            a,
            l,
            u,
            c = e.data,
            d = e.compression;
          if (c)
            return d === Q.GZipJS
              ? {
                  contentType: ih,
                  body: new Blob(
                    [
                      ((t = (function (e, t) {
                        var n = e.length;
                        if ("undefined" != typeof TextEncoder)
                          return new TextEncoder().encode(e);
                        for (
                          var i = new nB(e.length + (e.length >>> 1)),
                            r = 0,
                            s = function (e) {
                              i[r++] = e;
                            },
                            o = 0;
                          o < n;
                          ++o
                        ) {
                          if (r + 5 > i.length) {
                            var a = new nB(r + 8 + ((n - o) << 1));
                            a.set(i), (i = a);
                          }
                          var l = e.charCodeAt(o);
                          l < 128
                            ? s(l)
                            : (l < 2048
                                ? s(192 | (l >>> 6))
                                : (l > 55295 && l < 57344
                                    ? (s(
                                        240 |
                                          ((l =
                                            (65536 + (1047552 & l)) |
                                            (1023 & e.charCodeAt(++o))) >>>
                                            18)
                                      ),
                                      s(128 | ((l >>> 12) & 63)))
                                    : s(224 | (l >>> 12)),
                                  s(128 | ((l >>> 6) & 63))),
                              s(128 | (63 & l)));
                        }
                        return n4(i, 0, r);
                      })(JSON.stringify(c))),
                      (n = { mtime: 0 }),
                      (i = 4294967295),
                      (r = {
                        p: function (e) {
                          for (var t = i, n = 0; n < e.length; ++n)
                            t = iu[(255 & t) ^ e[n]] ^ (t >>> 8);
                          i = t;
                        },
                        d: function () {
                          return 4294967295 ^ i;
                        },
                      }),
                      (s = t.length),
                      r.p(t),
                      (l = ((o =
                        10 + ((n.filename && n.filename.length + 1) || 0)),
                      (a = (function (e, t, n, i, r, s) {
                        var o = e.length,
                          a = new nB(i + o + 5 * (1 + Math.floor(o / 7e3)) + 8),
                          l = a.subarray(i, a.length - 8),
                          u = 0;
                        if (!t || o < 8)
                          for (var c = 0; c <= o; c += 65535) {
                            var d = c + 65535;
                            d < o
                              ? (u = is(l, u, e.subarray(c, d)))
                              : ((l[c] = s), (u = is(l, u, e.subarray(c, o))));
                          }
                        else {
                          for (
                            var h = ia[t - 1],
                              f = h >>> 13,
                              p = 8191 & h,
                              g = (1 << n) - 1,
                              v = new nq(32768),
                              m = new nq(g + 1),
                              y = Math.ceil(n / 3),
                              _ = 2 * y,
                              b = function (t) {
                                return (
                                  (e[t] ^ (e[t + 1] << y) ^ (e[t + 2] << _)) & g
                                );
                              },
                              w = new nz(25e3),
                              x = new nq(288),
                              k = new nq(32),
                              P = 0,
                              S = 0,
                              E = ((c = 0), 0),
                              R = 0,
                              T = 0;
                            c < o;
                            ++c
                          ) {
                            var C = b(c),
                              A = 32767 & c,
                              F = m[C];
                            if (((v[A] = F), (m[C] = A), R <= c)) {
                              var M = o - c;
                              if ((P > 7e3 || E > 24576) && M > 423) {
                                (u = io(e, l, 0, w, x, k, S, E, T, c - T, u)),
                                  (E = P = S = 0),
                                  (T = c);
                                for (var I = 0; I < 286; ++I) x[I] = 0;
                                for (I = 0; I < 30; ++I) k[I] = 0;
                              }
                              var O = 2,
                                j = 0,
                                D = p,
                                L = (A - F) & 32767;
                              if (M > 2 && C == b(c - L))
                                for (
                                  var $ = Math.min(f, M) - 1,
                                    N = Math.min(32767, c),
                                    V = Math.min(258, M);
                                  L <= N && --D && A != F;

                                ) {
                                  if (e[c + O] == e[c + O - L]) {
                                    for (
                                      var B = 0;
                                      B < V && e[c + B] == e[c + B - L];
                                      ++B
                                    );
                                    if (B > O) {
                                      if (((O = B), (j = L), B > $)) break;
                                      var q = Math.min(L, B - 2),
                                        z = 0;
                                      for (I = 0; I < q; ++I) {
                                        var U = (c - L + I + 32768) & 32767,
                                          W = (U - v[U] + 32768) & 32767;
                                        W > z && ((z = W), (F = U));
                                      }
                                    }
                                  }
                                  L += ((A = F) - (F = v[A]) + 32768) & 32767;
                                }
                              if (j) {
                                w[E++] = 268435456 | (nK[O] << 18) | nZ[j];
                                var H = 31 & nK[O],
                                  G = 31 & nZ[j];
                                (S += nU[H] + nW[G]),
                                  ++x[257 + H],
                                  ++k[G],
                                  (R = c + O),
                                  ++P;
                              } else (w[E++] = e[c]), ++x[e[c]];
                            }
                          }
                          (u = io(e, l, s, w, x, k, S, E, T, c - T, u)),
                            s || (u = is(l, u, il));
                        }
                        return n4(a, 0, i + n8(u) + r);
                      })(
                        t,
                        null == n.level ? 6 : n.level,
                        null == n.mem
                          ? Math.ceil(
                              1.5 *
                                Math.max(8, Math.min(13, Math.log(t.length)))
                            )
                          : 12 + n.mem,
                        o,
                        8,
                        !0
                      ))).length),
                      (function (e, t) {
                        var n = t.filename;
                        if (
                          ((e[0] = 31),
                          (e[1] = 139),
                          (e[2] = 8),
                          (e[8] = t.level < 2 ? 4 : 9 == t.level ? 2 : 0),
                          (e[9] = 3),
                          0 != t.mtime &&
                            ic(
                              e,
                              4,
                              Math.floor(new Date(t.mtime || Date.now()) / 1e3)
                            ),
                          n)
                        ) {
                          e[3] = 8;
                          for (var i = 0; i <= n.length; ++i)
                            e[i + 10] = n.charCodeAt(i);
                        }
                      })(a, n),
                      ic(a, l - 8, r.d()),
                      ic(a, l - 4, s),
                      a),
                    ],
                    { type: ih }
                  ),
                }
              : d === Q.Base64
              ? {
                  contentType: "application/x-www-form-urlencoded",
                  body:
                    "data=" +
                    encodeURIComponent(
                      "string" ==
                        typeof (u = (function (e) {
                          var t,
                            n,
                            i,
                            r,
                            s,
                            o =
                              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                            a = 0,
                            l = 0,
                            u = "",
                            c = [];
                          if (!e) return e;
                          e = er(e);
                          do
                            (t =
                              ((s =
                                (e.charCodeAt(a++) << 16) |
                                (e.charCodeAt(a++) << 8) |
                                e.charCodeAt(a++)) >>
                                18) &
                              63),
                              (n = (s >> 12) & 63),
                              (i = (s >> 6) & 63),
                              (r = 63 & s),
                              (c[l++] =
                                o.charAt(t) +
                                o.charAt(n) +
                                o.charAt(i) +
                                o.charAt(r));
                          while (a < e.length);
                          switch (((u = c.join("")), e.length % 3)) {
                            case 1:
                              u = u.slice(0, -2) + "==";
                              break;
                            case 2:
                              u = u.slice(0, -1) + "=";
                          }
                          return u;
                        })(JSON.stringify(c)))
                        ? u
                        : JSON.stringify(u)
                    ),
                }
              : { contentType: "application/json", body: JSON.stringify(c) };
        },
        iv = [];
      N &&
        iv.push({
          transport: "XHR",
          method: function (e) {
            var t,
              n = new N();
            n.open(e.method || "GET", e.url, !0);
            var i = null !== (t = ig(e)) && void 0 !== t ? t : {},
              r = i.contentType,
              s = i.body;
            X(e.headers, function (e, t) {
              n.setRequestHeader(t, e);
            }),
              r && n.setRequestHeader("Content-Type", r),
              e.timeout && (n.timeout = e.timeout),
              (n.withCredentials = !0),
              (n.onreadystatechange = function () {
                if (4 === n.readyState) {
                  var t,
                    i = { statusCode: n.status, text: n.responseText };
                  if (200 === n.status)
                    try {
                      i.json = JSON.parse(n.responseText);
                    } catch (e) {}
                  null === (t = e.callback) || void 0 === t || t.call(e, i);
                }
              }),
              n.send(s);
          },
        }),
        $ &&
          iv.push({
            transport: "fetch",
            method: function (e) {
              var t,
                n,
                i = null !== (t = ig(e)) && void 0 !== t ? t : {},
                r = i.contentType,
                s = i.body,
                o = new Headers();
              X(o, function (e, t) {
                o.append(t, e);
              }),
                r && o.append("Content-Type", r);
              var a = e.url,
                l = null;
              if (V) {
                var u = new V();
                l = {
                  signal: u.signal,
                  timeout: setTimeout(function () {
                    return u.abort();
                  }, e.timeout),
                };
              }
              $(a, {
                method: (null == e ? void 0 : e.method) || "GET",
                headers: o,
                keepalive: "POST" === e.method,
                body: s,
                signal: null === (n = l) || void 0 === n ? void 0 : n.signal,
              })
                .then(function (t) {
                  return t.text().then(function (n) {
                    var i,
                      r = { statusCode: t.status, text: n };
                    if (200 === t.status)
                      try {
                        r.json = JSON.parse(n);
                      } catch (e) {
                        U.error(e);
                      }
                    null === (i = e.callback) || void 0 === i || i.call(e, r);
                  });
                })
                .catch(function (t) {
                  var n;
                  U.error(t),
                    null === (n = e.callback) ||
                      void 0 === n ||
                      n.call(e, { statusCode: 0, text: t });
                })
                .finally(function () {
                  return l ? clearTimeout(l.timeout) : null;
                });
            },
          }),
        null != j &&
          j.sendBeacon &&
          iv.push({
            transport: "sendBeacon",
            method: function (e) {
              var t = ip(e.url, { beacon: "1" });
              try {
                var n,
                  i = null !== (n = ig(e)) && void 0 !== n ? n : {},
                  r = i.contentType,
                  s = i.body,
                  o = "string" == typeof s ? new Blob([s], { type: r }) : s;
                j.sendBeacon(t, o);
              } catch (e) {}
            },
          });
      var im,
        iy,
        i_ = ["retriesPerformedSoFar"],
        ib = (function () {
          function e(t) {
            var n = this;
            o(this, e),
              u(this, "isPolling", !1),
              u(this, "pollIntervalMs", 3e3),
              u(this, "queue", []),
              (this.instance = t),
              (this.queue = []),
              (this.areWeOnline = !0),
              !P(A) &&
                "onLine" in A.navigator &&
                ((this.areWeOnline = A.navigator.onLine),
                A.addEventListener("online", function () {
                  (n.areWeOnline = !0), n.flush();
                }),
                A.addEventListener("offline", function () {
                  n.areWeOnline = !1;
                }));
          }
          return (
            l(e, [
              {
                key: "retriableRequest",
                value: function (e) {
                  var t = this,
                    n = e.retriesPerformedSoFar,
                    i = (function (e, t) {
                      if (null == e) return {};
                      var n,
                        i,
                        r = (function (e, t) {
                          if (null == e) return {};
                          var n,
                            i,
                            r = {},
                            s = Object.keys(e);
                          for (i = 0; i < s.length; i++)
                            (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                          return r;
                        })(e, t);
                      if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        for (i = 0; i < s.length; i++)
                          (n = s[i]),
                            t.indexOf(n) >= 0 ||
                              (Object.prototype.propertyIsEnumerable.call(
                                e,
                                n
                              ) &&
                                (r[n] = e[n]));
                      }
                      return r;
                    })(e, i_);
                  T(n) && n > 0 && (i.url = ip(i.url, { retry_count: n })),
                    this.instance._send_request(
                      r(
                        r({}, i),
                        {},
                        {
                          callback: function (e) {
                            var s;
                            200 !== e.statusCode &&
                            (e.statusCode < 400 || e.statusCode >= 500) &&
                            (null != n ? n : 0) < 10
                              ? t.enqueue(r({ retriesPerformedSoFar: n }, i))
                              : null === (s = i.callback) ||
                                void 0 === s ||
                                s.call(i, e);
                          },
                        }
                      )
                    );
                },
              },
              {
                key: "enqueue",
                value: function (e) {
                  var t,
                    n,
                    i,
                    r = e.retriesPerformedSoFar || 0;
                  e.retriesPerformedSoFar = r + 1;
                  var s =
                      ((i =
                        (Math.random() - 0.5) *
                        ((n = Math.min(18e5, (t = 3e3 * Math.pow(2, r)))) -
                          t / 2)),
                      Math.ceil(n + i)),
                    o = Date.now() + s;
                  this.queue.push({ retryAt: o, requestOptions: e });
                  var a = "Enqueued failed request for retry in ".concat(s);
                  navigator.onLine || (a += " (Browser is offline)"),
                    U.warn(a),
                    this.isPolling || ((this.isPolling = !0), this.poll());
                },
              },
              {
                key: "poll",
                value: function () {
                  var e = this;
                  this.poller && clearTimeout(this.poller),
                    (this.poller = setTimeout(function () {
                      e.areWeOnline && e.queue.length > 0 && e.flush(),
                        e.poll();
                    }, this.pollIntervalMs));
                },
              },
              {
                key: "flush",
                value: function () {
                  var e = Date.now(),
                    t = [],
                    n = this.queue.filter(function (n) {
                      return n.retryAt < e || (t.push(n), !1);
                    });
                  if (((this.queue = t), n.length > 0)) {
                    var i,
                      r = p(n);
                    try {
                      for (r.s(); !(i = r.n()).done; ) {
                        var s = i.value.requestOptions;
                        this.retriableRequest(s);
                      }
                    } catch (e) {
                      r.e(e);
                    } finally {
                      r.f();
                    }
                  }
                },
              },
              {
                key: "unload",
                value: function () {
                  this.poller &&
                    (clearTimeout(this.poller), (this.poller = void 0));
                  var e,
                    t = p(this.queue);
                  try {
                    for (t.s(); !(e = t.n()).done; ) {
                      var n = e.value.requestOptions;
                      try {
                        this.instance._send_request(
                          r(r({}, n), {}, { transport: "sendBeacon" })
                        );
                      } catch (e) {
                        U.error(e);
                      }
                    }
                  } catch (e) {
                    t.e(e);
                  } finally {
                    t.f();
                  }
                  this.queue = [];
                },
              },
            ]),
            e
          );
        })(),
        iw = (function () {
          function e(t, n, i, r) {
            o(this, e),
              u(this, "_sessionIdChangedHandlers", []),
              (this.config = t),
              (this.persistence = n),
              (this._windowId = void 0),
              (this._sessionId = void 0),
              (this._sessionStartTimestamp = null),
              (this._sessionActivityTimestamp = null),
              (this._sessionIdGenerator = i || eK),
              (this._windowIdGenerator = r || eK);
            var s,
              a = t.persistence_name || t.token,
              l = t.session_idle_timeout_seconds || 1800;
            if (
              (T(l)
                ? l > 1800
                  ? U.warn(
                      "session_idle_timeout_seconds cannot be  greater than 30 minutes. Using 30 minutes instead."
                    )
                  : l < 60 &&
                    U.warn(
                      "session_idle_timeout_seconds cannot be less than 60 seconds. Using 60 seconds instead."
                    )
                : (U.warn(
                    "session_idle_timeout_seconds must be a number. Defaulting to 30 minutes."
                  ),
                  (l = 1800)),
              (this._sessionTimeoutMs = 1e3 * Math.min(Math.max(l, 60), 1800)),
              (this._window_id_storage_key = "ph_" + a + "_window_id"),
              (this._primary_window_exists_storage_key =
                "ph_" + a + "_primary_window_exists"),
              this._canUseSessionStorage())
            ) {
              var c = e9.parse(this._window_id_storage_key),
                d = e9.parse(this._primary_window_exists_storage_key);
              c && !d
                ? (this._windowId = c)
                : e9.remove(this._window_id_storage_key),
                e9.set(this._primary_window_exists_storage_key, !0);
            }
            if (
              null !== (s = this.config.bootstrap) &&
              void 0 !== s &&
              s.sessionID
            )
              try {
                var h = (function (e) {
                  var t = e.replace(/-/g, "");
                  if (32 !== t.length) throw Error("Not a valid UUID");
                  if ("7" !== t[12]) throw Error("Not a UUIDv7");
                  return parseInt(t.substring(0, 12), 16);
                })(this.config.bootstrap.sessionID);
                this._setSessionId(
                  this.config.bootstrap.sessionID,
                  new Date().getTime(),
                  h
                );
              } catch (e) {
                U.error("Invalid sessionID in bootstrap", e);
              }
            this._listenToReloadWindow();
          }
          return (
            l(e, [
              {
                key: "onSessionId",
                value: function (e) {
                  var t = this;
                  return (
                    P(this._sessionIdChangedHandlers) &&
                      (this._sessionIdChangedHandlers = []),
                    this._sessionIdChangedHandlers.push(e),
                    this._sessionId && e(this._sessionId, this._windowId),
                    function () {
                      t._sessionIdChangedHandlers =
                        t._sessionIdChangedHandlers.filter(function (t) {
                          return t !== e;
                        });
                    }
                  );
                },
              },
              {
                key: "_canUseSessionStorage",
                value: function () {
                  return (
                    "memory" !== this.config.persistence &&
                    !this.persistence.disabled &&
                    e9.is_supported()
                  );
                },
              },
              {
                key: "_setWindowId",
                value: function (e) {
                  e !== this._windowId &&
                    ((this._windowId = e),
                    this._canUseSessionStorage() &&
                      e9.set(this._window_id_storage_key, e));
                },
              },
              {
                key: "_getWindowId",
                value: function () {
                  return this._windowId
                    ? this._windowId
                    : this._canUseSessionStorage()
                    ? e9.parse(this._window_id_storage_key)
                    : null;
                },
              },
              {
                key: "_setSessionId",
                value: function (e, t, n) {
                  (e === this._sessionId &&
                    t === this._sessionActivityTimestamp &&
                    n === this._sessionStartTimestamp) ||
                    ((this._sessionStartTimestamp = n),
                    (this._sessionActivityTimestamp = t),
                    (this._sessionId = e),
                    this.persistence.register(u({}, e_, [t, e, n])));
                },
              },
              {
                key: "_getSessionId",
                value: function () {
                  if (
                    this._sessionId &&
                    this._sessionActivityTimestamp &&
                    this._sessionStartTimestamp
                  )
                    return [
                      this._sessionActivityTimestamp,
                      this._sessionId,
                      this._sessionStartTimestamp,
                    ];
                  var e = this.persistence.props[e_];
                  return (
                    b(e) && 2 === e.length && e.push(e[0]), e || [0, null, 0]
                  );
                },
              },
              {
                key: "resetSessionId",
                value: function () {
                  this._setSessionId(null, null, null);
                },
              },
              {
                key: "_listenToReloadWindow",
                value: function () {
                  var e = this;
                  null == A ||
                    A.addEventListener("beforeunload", function () {
                      e._canUseSessionStorage() &&
                        e9.remove(e._primary_window_exists_storage_key);
                    });
                },
              },
              {
                key: "checkAndGetSessionAndWindowId",
                value: function () {
                  var e =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0],
                    t =
                      (arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null) || new Date().getTime(),
                    n = c(this._getSessionId(), 3),
                    i = n[0],
                    r = n[1],
                    s = n[2],
                    o = this._getWindowId(),
                    a = s && s > 0 && Math.abs(t - s) > 864e5,
                    l = !1,
                    u = !r,
                    d = !e && Math.abs(t - i) > this._sessionTimeoutMs;
                  u || d || a
                    ? ((r = this._sessionIdGenerator()),
                      (o = this._windowIdGenerator()),
                      U.info("[SessionId] new session ID generated", {
                        sessionId: r,
                        windowId: o,
                        changeReason: {
                          noSessionId: u,
                          activityTimeout: d,
                          sessionPastMaximumLength: a,
                        },
                      }),
                      (s = t),
                      (l = !0))
                    : o || ((o = this._windowIdGenerator()), (l = !0));
                  var h = 0 === i || !e || a ? t : i,
                    f = 0 === s ? new Date().getTime() : s;
                  return (
                    this._setWindowId(o),
                    this._setSessionId(r, h, f),
                    l &&
                      this._sessionIdChangedHandlers.forEach(function (e) {
                        return e(r, o);
                      }),
                    { sessionId: r, windowId: o, sessionStartTimestamp: f }
                  );
                },
              },
            ]),
            e
          );
        })();
      ((iE = iy || (iy = {})).US = "us"),
        (iE.EU = "eu"),
        (iE.CUSTOM = "custom");
      var ix = "i.posthog.com",
        ik = (function () {
          function e(t) {
            o(this, e), u(this, "_regionCache", {}), (this.instance = t);
          }
          return (
            l(e, [
              {
                key: "apiHost",
                get: function () {
                  return this.instance.config.api_host
                    .trim()
                    .replace(/\/$/, "");
                },
              },
              {
                key: "uiHost",
                get: function () {
                  var e,
                    t =
                      null === (e = this.instance.config.ui_host) ||
                      void 0 === e
                        ? void 0
                        : e.replace(/\/$/, "");
                  return "https://app.posthog.com" === t
                    ? "https://us.posthog.com"
                    : t;
                },
              },
              {
                key: "region",
                get: function () {
                  return (
                    this._regionCache[this.apiHost] ||
                      (/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(
                        this.apiHost
                      )
                        ? (this._regionCache[this.apiHost] = iy.US)
                        : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(
                            this.apiHost
                          )
                        ? (this._regionCache[this.apiHost] = iy.EU)
                        : (this._regionCache[this.apiHost] = iy.CUSTOM)),
                    this._regionCache[this.apiHost]
                  );
                },
              },
              {
                key: "endpointFor",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "";
                  if ((t && (t = "/" === t[0] ? t : "/".concat(t)), "ui" === e))
                    return (
                      (this.uiHost ||
                        this.apiHost.replace(".".concat(ix), ".posthog.com")) +
                      t
                    );
                  if (this.region === iy.CUSTOM) return this.apiHost + t;
                  var n = ix + t;
                  switch (e) {
                    case "assets":
                      return "https://"
                        .concat(this.region, "-assets.")
                        .concat(n);
                    case "api":
                      return "https://".concat(this.region, ".").concat(n);
                  }
                },
              },
            ]),
            e
          );
        })(),
        iP = "posthog-js";
      function iS(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.organization,
          i = t.projectId,
          r = t.prefix,
          s = t.severityAllowList,
          o = void 0 === s ? ["error"] : s;
        return function (t) {
          if (!("*" === o || o.includes(t.level)) || !e.__loaded) return t;
          t.tags || (t.tags = {});
          var s,
            a,
            l,
            u,
            c,
            d = e.requestRouter.endpointFor(
              "ui",
              "/project/"
                .concat(e.config.token, "/person/")
                .concat(e.get_distinct_id())
            );
          (t.tags["PostHog Person URL"] = d),
            e.sessionRecordingStarted() &&
              (t.tags["PostHog Recording URL"] = e.get_session_replay_url({
                withTimestamp: !0,
              }));
          var h =
              (null === (s = t.exception) || void 0 === s
                ? void 0
                : s.values) || [],
            f = {
              $exception_message:
                (null === (a = h[0]) || void 0 === a ? void 0 : a.value) ||
                t.message,
              $exception_type:
                null === (l = h[0]) || void 0 === l ? void 0 : l.type,
              $exception_personURL: d,
              $sentry_event_id: t.event_id,
              $sentry_exception: t.exception,
              $sentry_exception_message:
                (null === (u = h[0]) || void 0 === u ? void 0 : u.value) ||
                t.message,
              $sentry_exception_type:
                null === (c = h[0]) || void 0 === c ? void 0 : c.type,
              $sentry_tags: t.tags,
              $level: t.level,
            };
          return (
            n &&
              i &&
              (f.$sentry_url =
                (r || "https://sentry.io/organizations/") +
                n +
                "/issues/?project=" +
                i +
                "&query=" +
                t.event_id),
            e.capture("$exception", f),
            t
          );
        };
      }
      var iE,
        iR,
        iT,
        iC,
        iA = l(function e(t, n, i, r, s) {
          o(this, e),
            (this.name = iP),
            (this.setupOnce = function (e) {
              e(
                iS(t, {
                  organization: n,
                  projectId: i,
                  prefix: r,
                  severityAllowList: s,
                })
              );
            });
        }),
        iF = (function () {
          function e(t) {
            o(this, e), (this._instance = t);
          }
          return (
            l(e, [
              {
                key: "doPageView",
                value: function () {
                  var e,
                    t = this._previousScrollProperties();
                  return (
                    (this._currentPath =
                      null !== (e = null == A ? void 0 : A.location.pathname) &&
                      void 0 !== e
                        ? e
                        : ""),
                    this._instance.scrollManager.resetContext(),
                    t
                  );
                },
              },
              {
                key: "doPageLeave",
                value: function () {
                  return this._previousScrollProperties();
                },
              },
              {
                key: "_previousScrollProperties",
                value: function () {
                  var e = this._currentPath,
                    t = this._instance.scrollManager.getContext();
                  if (!e || !t) return {};
                  var n = t.maxScrollHeight,
                    i = t.lastScrollY,
                    r = t.maxScrollY,
                    s = t.maxContentHeight,
                    o = t.lastContentY,
                    a = t.maxContentY;
                  return P(n) || P(i) || P(r) || P(s) || P(o) || P(a)
                    ? {}
                    : ((n = Math.ceil(n)),
                      (i = Math.ceil(i)),
                      (r = Math.ceil(r)),
                      (s = Math.ceil(s)),
                      (o = Math.ceil(o)),
                      (a = Math.ceil(a)),
                      {
                        $prev_pageview_pathname: e,
                        $prev_pageview_last_scroll: i,
                        $prev_pageview_last_scroll_percentage:
                          n <= 1 ? 1 : iM(i / n, 0, 1),
                        $prev_pageview_max_scroll: r,
                        $prev_pageview_max_scroll_percentage:
                          n <= 1 ? 1 : iM(r / n, 0, 1),
                        $prev_pageview_last_content: o,
                        $prev_pageview_last_content_percentage:
                          s <= 1 ? 1 : iM(o / s, 0, 1),
                        $prev_pageview_max_content: a,
                        $prev_pageview_max_content_percentage:
                          s <= 1 ? 1 : iM(a / s, 0, 1),
                      });
                },
              },
            ]),
            e
          );
        })();
      function iM(e, t, n) {
        return Math.max(t, Math.min(e, n));
      }
      ((iX = iR || (iR = {})).Popover = "popover"),
        (iX.API = "api"),
        (iX.Widget = "widget"),
        ((iY = iT || (iT = {})).Open = "open"),
        (iY.MultipleChoice = "multiple_choice"),
        (iY.SingleChoice = "single_choice"),
        (iY.Rating = "rating"),
        (iY.Link = "link"),
        ((iK = iC || (iC = {})).NextQuestion = "next_question"),
        (iK.ConfirmationMessage = "confirmation_message"),
        (iK.ResponseBased = "response_based"),
        (iK.SpecificQuestion = "specific_question");
      var iI = (function () {
          function e(t) {
            o(this, e),
              (this.persistence = t),
              (this.eventRegistry = new Map());
          }
          return (
            l(e, [
              {
                key: "register",
                value: function (e) {
                  var t = this;
                  e.forEach(function (e) {
                    var n, i, r, s, o;
                    null !== (n = e.conditions) &&
                      void 0 !== n &&
                      n.events &&
                      null !== (i = e.conditions) &&
                      void 0 !== i &&
                      null !== (r = i.events) &&
                      void 0 !== r &&
                      r.values &&
                      (null === (s = e.conditions) || void 0 === s
                        ? void 0
                        : s.events.values.length) > 0 &&
                      t.eventRegistry.set(
                        e.id,
                        null === (o = e.conditions) || void 0 === o
                          ? void 0
                          : o.events.values.map(function (e) {
                              return e.name;
                            })
                      );
                  });
                },
              },
              {
                key: "on",
                value: function (e) {
                  var t,
                    n = [];
                  this.eventRegistry.forEach(function (t, i) {
                    t.includes(e) && n.push(i);
                  });
                  var i = (
                    (null === (t = this.persistence) || void 0 === t
                      ? void 0
                      : t.props[eE]) || []
                  ).concat(n);
                  this._saveSurveysToStorage(i);
                },
              },
              {
                key: "getSurveys",
                value: function () {
                  var e;
                  return (
                    (null === (e = this.persistence) || void 0 === e
                      ? void 0
                      : e.props[eE]) || []
                  );
                },
              },
              {
                key: "getEventRegistry",
                value: function () {
                  return this.eventRegistry;
                },
              },
              {
                key: "_saveSurveysToStorage",
                value: function (e) {
                  var t;
                  null === (t = this.persistence) ||
                    void 0 === t ||
                    t.register(u({}, eE, d(new Set(e))));
                },
              },
            ]),
            e
          );
        })(),
        iO = {
          icontains: function (e) {
            return (
              !!A && A.location.href.toLowerCase().indexOf(e.toLowerCase()) > -1
            );
          },
          not_icontains: function (e) {
            return (
              !!A &&
              -1 === A.location.href.toLowerCase().indexOf(e.toLowerCase())
            );
          },
          regex: function (e) {
            return !!A && tt(A.location.href, e);
          },
          not_regex: function (e) {
            return !!A && !tt(A.location.href, e);
          },
          exact: function (e) {
            return (null == A ? void 0 : A.location.href) === e;
          },
          is_not: function (e) {
            return (null == A ? void 0 : A.location.href) !== e;
          },
        },
        ij = (function () {
          function e(t) {
            o(this, e), (this.instance = t), (this._surveyEventReceiver = null);
          }
          return (
            l(e, [
              {
                key: "afterDecideResponse",
                value: function (e) {
                  (this._decideServerResponse = !!e.surveys),
                    this.loadIfEnabled();
                },
              },
              {
                key: "loadIfEnabled",
                value: function () {
                  var e = this,
                    t = null == q ? void 0 : q.extendPostHogWithSurveys;
                  this.instance.config.disable_surveys ||
                    !this._decideServerResponse ||
                    t ||
                    (null == this._surveyEventReceiver &&
                      (this._surveyEventReceiver = new iI(
                        this.instance.persistence
                      )),
                    eo(
                      this.instance.requestRouter.endpointFor(
                        "assets",
                        "/static/surveys.js"
                      ),
                      function (t) {
                        if (t)
                          return U.error("Could not load surveys script", t);
                        q.extendPostHogWithSurveys(e.instance);
                      }
                    ));
                },
              },
              {
                key: "getSurveys",
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  if (this.instance.config.disable_surveys) return e([]);
                  null == this._surveyEventReceiver &&
                    (this._surveyEventReceiver = new iI(
                      this.instance.persistence
                    ));
                  var i = this.instance.get_property(eS);
                  if (i && !n) return e(i);
                  this.instance._send_request({
                    url: this.instance.requestRouter.endpointFor(
                      "api",
                      "/api/surveys/?token=".concat(this.instance.config.token)
                    ),
                    method: "GET",
                    transport: "XHR",
                    callback: function (n) {
                      if (200 !== n.statusCode || !n.json) return e([]);
                      var i,
                        r,
                        s = n.json.surveys || [],
                        o = s.filter(function (e) {
                          var t, n, i, r, s, o;
                          return (
                            (null === (t = e.conditions) || void 0 === t
                              ? void 0
                              : t.events) &&
                            (null === (n = e.conditions) ||
                            void 0 === n ||
                            null === (i = n.events) ||
                            void 0 === i
                              ? void 0
                              : i.values) &&
                            (null === (r = e.conditions) ||
                            void 0 === r ||
                            null === (s = r.events) ||
                            void 0 === s ||
                            null === (o = s.values) ||
                            void 0 === o
                              ? void 0
                              : o.length) > 0
                          );
                        });
                      return (
                        o.length > 0 &&
                          !P(t.instance._addCaptureHook) &&
                          (null === (r = t._surveyEventReceiver) ||
                            void 0 === r ||
                            r.register(o),
                          t.instance._addCaptureHook(function (e) {
                            var n;
                            null === (n = t._surveyEventReceiver) ||
                              void 0 === n ||
                              n.on(e);
                          })),
                        null === (i = t.instance.persistence) ||
                          void 0 === i ||
                          i.register(u({}, eS, s)),
                        e(s)
                      );
                    },
                  });
                },
              },
              {
                key: "getActiveMatchingSurveys",
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  this.getSurveys(function (n) {
                    var i,
                      r = n
                        .filter(function (e) {
                          return !(!e.start_date || e.end_date);
                        })
                        .filter(function (e) {
                          if (!e.conditions) return !0;
                          var t,
                            n,
                            i,
                            r,
                            s =
                              null === (t = e.conditions) ||
                              void 0 === t ||
                              !t.url ||
                              iO[
                                null !==
                                  (n =
                                    null === (i = e.conditions) || void 0 === i
                                      ? void 0
                                      : i.urlMatchType) && void 0 !== n
                                  ? n
                                  : "icontains"
                              ](e.conditions.url),
                            o =
                              null === (r = e.conditions) ||
                              void 0 === r ||
                              !r.selector ||
                              (null == D
                                ? void 0
                                : D.querySelector(e.conditions.selector));
                          return s && o;
                        }),
                      s =
                        null === (i = t._surveyEventReceiver) || void 0 === i
                          ? void 0
                          : i.getSurveys();
                    return e(
                      r.filter(function (e) {
                        if (
                          !e.linked_flag_key &&
                          !e.targeting_flag_key &&
                          !e.internal_targeting_flag_key
                        )
                          return !0;
                        var n,
                          i,
                          r,
                          o,
                          a,
                          l =
                            !e.linked_flag_key ||
                            t.instance.featureFlags.isFeatureEnabled(
                              e.linked_flag_key
                            ),
                          u =
                            !e.targeting_flag_key ||
                            t.instance.featureFlags.isFeatureEnabled(
                              e.targeting_flag_key
                            ),
                          c =
                            !e.internal_targeting_flag_key ||
                            t.instance.featureFlags.isFeatureEnabled(
                              e.internal_targeting_flag_key
                            ),
                          d =
                            !(
                              (null === (n = e.conditions) || void 0 === n
                                ? void 0
                                : n.events) &&
                              (null === (i = e.conditions) ||
                              void 0 === i ||
                              null === (r = i.events) ||
                              void 0 === r
                                ? void 0
                                : r.values) &&
                              (null === (o = e.conditions) ||
                              void 0 === o ||
                              null === (a = o.events) ||
                              void 0 === a
                                ? void 0
                                : a.values.length) > 0
                            ) || (null == s ? void 0 : s.includes(e.id));
                        return l && u && c && d;
                      })
                    );
                  }, n);
                },
              },
              {
                key: "getNextSurveyStep",
                value: function (e, t, n) {
                  var i,
                    r = e.questions[t],
                    s = t + 1;
                  if (null === (i = r.branching) || void 0 === i || !i.type)
                    return t === e.questions.length - 1
                      ? iC.ConfirmationMessage
                      : s;
                  if (r.branching.type === iC.ConfirmationMessage)
                    return iC.ConfirmationMessage;
                  if (r.branching.type === iC.SpecificQuestion) {
                    if (Number.isInteger(r.branching.index))
                      return r.branching.index;
                  } else if (r.branching.type === iC.ResponseBased) {
                    if (r.type === iT.SingleChoice) {
                      var o,
                        a,
                        l = r.choices.indexOf("".concat(n));
                      if (
                        null !== (o = r.branching) &&
                        void 0 !== o &&
                        null !== (a = o.responseValues) &&
                        void 0 !== a &&
                        a.hasOwnProperty(l)
                      ) {
                        var u = r.branching.responseValues[l];
                        return Number.isInteger(u)
                          ? u
                          : u === iC.ConfirmationMessage
                          ? iC.ConfirmationMessage
                          : s;
                      }
                    } else if (r.type === iT.Rating) {
                      if ("number" != typeof n || !Number.isInteger(n))
                        throw Error("The response type must be an integer");
                      var c,
                        d,
                        h = (function (e, t) {
                          if (3 === t) {
                            if (e < 1 || e > 3)
                              throw Error("The response must be in range 1-3");
                            return 1 === e
                              ? "negative"
                              : 2 === e
                              ? "neutral"
                              : "positive";
                          }
                          if (5 === t) {
                            if (e < 1 || e > 5)
                              throw Error("The response must be in range 1-5");
                            return e <= 2
                              ? "negative"
                              : 3 === e
                              ? "neutral"
                              : "positive";
                          }
                          if (10 === t) {
                            if (e < 0 || e > 10)
                              throw Error("The response must be in range 0-10");
                            return e <= 6
                              ? "detractors"
                              : e <= 8
                              ? "passives"
                              : "promoters";
                          }
                          throw Error("The scale must be one of: 3, 5, 10");
                        })(n, r.scale);
                      if (
                        null !== (c = r.branching) &&
                        void 0 !== c &&
                        null !== (d = c.responseValues) &&
                        void 0 !== d &&
                        d.hasOwnProperty(h)
                      ) {
                        var f = r.branching.responseValues[h];
                        return Number.isInteger(f)
                          ? f
                          : f === iC.ConfirmationMessage
                          ? iC.ConfirmationMessage
                          : s;
                      }
                    }
                    return s;
                  }
                  return (
                    console.warn(
                      "Falling back to next question index due to unexpected branching type"
                    ),
                    s
                  );
                },
              },
            ]),
            e
          );
        })(),
        iD = (function () {
          function e(t) {
            var n,
              i,
              r = this;
            o(this, e),
              u(this, "serverLimits", {}),
              u(this, "lastEventRateLimited", !1),
              u(this, "checkForLimiting", function (e) {
                var t = e.text;
                if (t && t.length)
                  try {
                    (JSON.parse(t).quota_limited || []).forEach(function (e) {
                      U.info(
                        "[RateLimiter] ".concat(
                          e || "events",
                          " is quota limited."
                        )
                      ),
                        (r.serverLimits[e] = new Date().getTime() + 6e4);
                    });
                  } catch (e) {
                    return void U.warn(
                      '[RateLimiter] could not rate limit - continuing. Error: "'.concat(
                        null == e ? void 0 : e.message,
                        '"'
                      ),
                      { text: t }
                    );
                  }
              }),
              (this.instance = t),
              (this.captureEventsPerSecond =
                (null === (n = t.config.rate_limiting) || void 0 === n
                  ? void 0
                  : n.events_per_second) || 10),
              (this.captureEventsBurstLimit = Math.max(
                (null === (i = t.config.rate_limiting) || void 0 === i
                  ? void 0
                  : i.events_burst_limit) || 10 * this.captureEventsPerSecond,
                this.captureEventsPerSecond
              )),
              (this.lastEventRateLimited = this.clientRateLimitContext(
                !0
              ).isRateLimited);
          }
          return (
            l(e, [
              {
                key: "clientRateLimitContext",
                value: function () {
                  var e,
                    t,
                    n,
                    i =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0],
                    r = new Date().getTime(),
                    s =
                      null !==
                        (e =
                          null === (t = this.instance.persistence) ||
                          void 0 === t
                            ? void 0
                            : t.get_property(eA)) && void 0 !== e
                        ? e
                        : { tokens: this.captureEventsBurstLimit, last: r };
                  (s.tokens +=
                    ((r - s.last) / 1e3) * this.captureEventsPerSecond),
                    (s.last = r),
                    s.tokens > this.captureEventsBurstLimit &&
                      (s.tokens = this.captureEventsBurstLimit);
                  var o = s.tokens < 1;
                  return (
                    o || i || (s.tokens = Math.max(0, s.tokens - 1)),
                    !o ||
                      this.lastEventRateLimited ||
                      i ||
                      this.instance.capture(
                        "$$client_ingestion_warning",
                        {
                          $$client_ingestion_warning_message:
                            "posthog-js client rate limited. Config is set to "
                              .concat(
                                this.captureEventsPerSecond,
                                " events per second and "
                              )
                              .concat(
                                this.captureEventsBurstLimit,
                                " events burst limit."
                              ),
                        },
                        { skip_client_rate_limiting: !0 }
                      ),
                    (this.lastEventRateLimited = o),
                    null === (n = this.instance.persistence) ||
                      void 0 === n ||
                      n.set_property(eA, s),
                    { isRateLimited: o, remainingTokens: s.tokens }
                  );
                },
              },
              {
                key: "isServerRateLimited",
                value: function (e) {
                  var t = this.serverLimits[e || "events"] || !1;
                  return !1 !== t && new Date().getTime() < t;
                },
              },
            ]),
            e
          );
        })(),
        iL = function () {
          return r(
            {
              initialPathName: (null == L ? void 0 : L.pathname) || "",
              referringDomain: t0.referringDomain(),
            },
            t0.campaignParams()
          );
        },
        i$ = (function () {
          function e(t, n, i) {
            var r = this;
            o(this, e),
              u(this, "_onSessionIdCallback", function (e) {
                var t = r._getStoredProps();
                if (!t || t.sessionId !== e) {
                  var n = {
                    sessionId: e,
                    props: r._sessionSourceParamGenerator(),
                  };
                  r._persistence.register(u({}, eC, n));
                }
              }),
              (this._sessionIdManager = t),
              (this._persistence = n),
              (this._sessionSourceParamGenerator = i || iL),
              this._sessionIdManager.onSessionId(this._onSessionIdCallback);
          }
          return (
            l(e, [
              {
                key: "_getStoredProps",
                value: function () {
                  return this._persistence.props[eC];
                },
              },
              {
                key: "getSessionProps",
                value: function () {
                  var e,
                    t =
                      null === (e = this._getStoredProps()) || void 0 === e
                        ? void 0
                        : e.props;
                  return t
                    ? {
                        $client_session_initial_referring_host:
                          t.referringDomain,
                        $client_session_initial_pathname: t.initialPathName,
                        $client_session_initial_utm_source: t.utm_source,
                        $client_session_initial_utm_campaign: t.utm_campaign,
                        $client_session_initial_utm_medium: t.utm_medium,
                        $client_session_initial_utm_content: t.utm_content,
                        $client_session_initial_utm_term: t.utm_term,
                      }
                    : {};
                },
              },
            ]),
            e
          );
        })(),
        iN = [
          "ahrefsbot",
          "ahrefssiteaudit",
          "applebot",
          "baiduspider",
          "bingbot",
          "bingpreview",
          "bot.htm",
          "bot.php",
          "crawler",
          "deepscan",
          "duckduckbot",
          "facebookexternal",
          "facebookcatalog",
          "gptbot",
          "http://yandex.com/bots",
          "hubspot",
          "ia_archiver",
          "linkedinbot",
          "mj12bot",
          "msnbot",
          "nessus",
          "petalbot",
          "pinterest",
          "prerender",
          "rogerbot",
          "screaming frog",
          "semrushbot",
          "sitebulb",
          "slurp",
          "turnitin",
          "twitterbot",
          "vercelbot",
          "yahoo! slurp",
          "yandexbot",
          "adsbot-google",
          "apis-google",
          "duplexweb-google",
          "feedfetcher-google",
          "google favicon",
          "google web preview",
          "google-read-aloud",
          "googlebot",
          "googleweblight",
          "mediapartners-google",
          "storebot-google",
          "Bytespider;",
        ],
        iV = function (e, t) {
          if (!e) return !1;
          var n = e.toLowerCase();
          return iN.concat(t || []).some(function (e) {
            var t = e.toLowerCase();
            return -1 !== n.indexOf(t);
          });
        },
        iB = (function () {
          function e() {
            o(this, e), (this.clicks = []);
          }
          return (
            l(e, [
              {
                key: "isRageClick",
                value: function (e, t, n) {
                  var i = this.clicks[this.clicks.length - 1];
                  if (
                    i &&
                    Math.abs(e - i.x) + Math.abs(t - i.y) < 30 &&
                    n - i.timestamp < 1e3
                  ) {
                    if (
                      (this.clicks.push({ x: e, y: t, timestamp: n }),
                      3 === this.clicks.length)
                    )
                      return !0;
                  } else this.clicks = [{ x: e, y: t, timestamp: n }];
                  return !1;
                },
              },
            ]),
            e
          );
        })();
      function iq(e) {
        var t;
        return (
          e.id === ej ||
          !(null === (t = e.closest) || void 0 === t || !t.call(e, "#" + ej))
        );
      }
      var iz = (function () {
          function e(t) {
            var n;
            o(this, e),
              u(this, "rageclicks", new iB()),
              u(this, "_enabledServerSide", !1),
              u(this, "_initialized", !1),
              (this.instance = t),
              (this._enabledServerSide = !(
                null === (n = this.instance.persistence) ||
                void 0 === n ||
                !n.props[eh]
              ));
          }
          return (
            l(e, [
              {
                key: "startIfEnabled",
                value: function () {
                  this.isEnabled &&
                    !this._initialized &&
                    (U.info("[heatmaps] Heatmaps enabled, starting..."),
                    this._setupListeners());
                },
              },
              {
                key: "isEnabled",
                get: function () {
                  return P(this.instance.config.enable_heatmaps)
                    ? this._enabledServerSide
                    : this.instance.config.enable_heatmaps;
                },
              },
              {
                key: "afterDecideResponse",
                value: function (e) {
                  var t = !!e.heatmaps;
                  this.instance.persistence &&
                    this.instance.persistence.register(u({}, eh, t)),
                    (this._enabledServerSide = t),
                    this.startIfEnabled();
                },
              },
              {
                key: "getAndClearBuffer",
                value: function () {
                  var e = this.buffer;
                  return (this.buffer = void 0), e;
                },
              },
              {
                key: "_setupListeners",
                value: function () {
                  var e = this;
                  A &&
                    D &&
                    (es(
                      D,
                      "click",
                      function (t) {
                        return e._onClick(t || (null == A ? void 0 : A.event));
                      },
                      !1,
                      !0
                    ),
                    es(
                      D,
                      "mousemove",
                      function (t) {
                        return e._onMouseMove(
                          t || (null == A ? void 0 : A.event)
                        );
                      },
                      !1,
                      !0
                    ),
                    (this._initialized = !0));
                },
              },
              {
                key: "_getProperties",
                value: function (e, t) {
                  var n = this.instance.scrollManager.scrollY(),
                    i = this.instance.scrollManager.scrollX(),
                    r = this.instance.scrollManager.scrollElement(),
                    s = (function (e, t, n) {
                      for (var i = e; i && !ne(i, "body") && i !== n; ) {
                        if (
                          K(
                            t,
                            null == A ? void 0 : A.getComputedStyle(i).position
                          )
                        )
                          return !0;
                        i = nr(i);
                      }
                      return !1;
                    })(e.target, ["fixed", "sticky"], r);
                  return {
                    x: e.clientX + (s ? 0 : i),
                    y: e.clientY + (s ? 0 : n),
                    target_fixed: s,
                    type: t,
                  };
                },
              },
              {
                key: "_onClick",
                value: function (e) {
                  var t;
                  if (!iq(e.target)) {
                    var n = this._getProperties(e, "click");
                    null !== (t = this.rageclicks) &&
                      void 0 !== t &&
                      t.isRageClick(
                        e.clientX,
                        e.clientY,
                        new Date().getTime()
                      ) &&
                      this._capture(r(r({}, n), {}, { type: "rageclick" })),
                      this._capture(n);
                  }
                },
              },
              {
                key: "_onMouseMove",
                value: function (e) {
                  var t = this;
                  iq(e.target) ||
                    (clearTimeout(this._mouseMoveTimeout),
                    (this._mouseMoveTimeout = setTimeout(function () {
                      t._capture(t._getProperties(e, "mousemove"));
                    }, 500)));
                },
              },
              {
                key: "_capture",
                value: function (e) {
                  if (A) {
                    var t = A.location.href;
                    (this.buffer = this.buffer || {}),
                      this.buffer[t] || (this.buffer[t] = []),
                      this.buffer[t].push(e);
                  }
                },
              },
            ]),
            e
          );
        })(),
        iU = (function () {
          function e(t) {
            var n = this;
            o(this, e),
              u(this, "_updateScrollData", function () {
                n.context || (n.context = {});
                var e,
                  t,
                  i,
                  r,
                  s = n.scrollElement(),
                  o = n.scrollY(),
                  a = s ? Math.max(0, s.scrollHeight - s.clientHeight) : 0,
                  l = o + ((null == s ? void 0 : s.clientHeight) || 0),
                  u = (null == s ? void 0 : s.scrollHeight) || 0;
                (n.context.lastScrollY = Math.ceil(o)),
                  (n.context.maxScrollY = Math.max(
                    o,
                    null !== (e = n.context.maxScrollY) && void 0 !== e ? e : 0
                  )),
                  (n.context.maxScrollHeight = Math.max(
                    a,
                    null !== (t = n.context.maxScrollHeight) && void 0 !== t
                      ? t
                      : 0
                  )),
                  (n.context.lastContentY = l),
                  (n.context.maxContentY = Math.max(
                    l,
                    null !== (i = n.context.maxContentY) && void 0 !== i ? i : 0
                  )),
                  (n.context.maxContentHeight = Math.max(
                    u,
                    null !== (r = n.context.maxContentHeight) && void 0 !== r
                      ? r
                      : 0
                  ));
              }),
              (this.instance = t);
          }
          return (
            l(e, [
              {
                key: "getContext",
                value: function () {
                  return this.context;
                },
              },
              {
                key: "resetContext",
                value: function () {
                  var e = this.context;
                  return setTimeout(this._updateScrollData, 0), e;
                },
              },
              {
                key: "startMeasuringScrollPosition",
                value: function () {
                  null == A ||
                    A.addEventListener("scroll", this._updateScrollData, !0),
                    null == A ||
                      A.addEventListener(
                        "scrollend",
                        this._updateScrollData,
                        !0
                      ),
                    null == A ||
                      A.addEventListener("resize", this._updateScrollData);
                },
              },
              {
                key: "scrollElement",
                value: function () {
                  if (!this.instance.config.scroll_root_selector)
                    return null == A ? void 0 : A.document.documentElement;
                  var e,
                    t = p(
                      b(this.instance.config.scroll_root_selector)
                        ? this.instance.config.scroll_root_selector
                        : [this.instance.config.scroll_root_selector]
                    );
                  try {
                    for (t.s(); !(e = t.n()).done; ) {
                      var n = e.value,
                        i = null == A ? void 0 : A.document.querySelector(n);
                      if (i) return i;
                    }
                  } catch (e) {
                    t.e(e);
                  } finally {
                    t.f();
                  }
                },
              },
              {
                key: "scrollY",
                value: function () {
                  if (this.instance.config.scroll_root_selector) {
                    var e = this.scrollElement();
                    return (e && e.scrollTop) || 0;
                  }
                  return (
                    (A &&
                      (A.scrollY ||
                        A.pageYOffset ||
                        A.document.documentElement.scrollTop)) ||
                    0
                  );
                },
              },
              {
                key: "scrollX",
                value: function () {
                  if (this.instance.config.scroll_root_selector) {
                    var e = this.scrollElement();
                    return (e && e.scrollLeft) || 0;
                  }
                  return (
                    (A &&
                      (A.scrollX ||
                        A.pageXOffset ||
                        A.document.documentElement.scrollLeft)) ||
                    0
                  );
                },
              },
            ]),
            e
          );
        })(),
        iW = (function () {
          function e() {
            o(this, e), u(this, "events", {}), (this.events = {});
          }
          return (
            l(e, [
              {
                key: "on",
                value: function (e, t) {
                  var n = this;
                  return (
                    this.events[e] || (this.events[e] = []),
                    this.events[e].push(t),
                    function () {
                      n.events[e] = n.events[e].filter(function (e) {
                        return e !== t;
                      });
                    }
                  );
                },
              },
              {
                key: "emit",
                value: function (e, t) {
                  var n,
                    i = p(this.events[e] || []);
                  try {
                    for (i.s(); !(n = i.n()).done; ) (0, n.value)(t);
                  } catch (e) {
                    i.e(e);
                  } finally {
                    i.f();
                  }
                  var r,
                    s = p(this.events["*"] || []);
                  try {
                    for (s.s(); !(r = s.n()).done; ) (0, r.value)(e, t);
                  } catch (e) {
                    s.e(e);
                  } finally {
                    s.f();
                  }
                },
              },
            ]),
            e
          );
        })(),
        iH = "$copy_autocapture";
      function iG(e, t) {
        return t.length > e ? t.slice(0, e) + "..." : t;
      }
      var iX,
        iY,
        iK,
        iZ,
        iQ = (function () {
          function e(t) {
            o(this, e),
              u(this, "_initialized", !1),
              u(this, "_isDisabledServerSide", null),
              u(this, "rageclicks", new iB()),
              u(this, "_elementsChainAsString", !1),
              (this.instance = t);
          }
          return (
            l(e, [
              {
                key: "config",
                get: function () {
                  var e,
                    t = x(this.instance.config.autocapture)
                      ? this.instance.config.autocapture
                      : {};
                  return (
                    (t.url_allowlist =
                      null === (e = t.url_allowlist) || void 0 === e
                        ? void 0
                        : e.map(function (e) {
                            return new RegExp(e);
                          })),
                    t
                  );
                },
              },
              {
                key: "_addDomEventHandlers",
                value: function () {
                  var e = this;
                  if (this.isBrowserSupported()) {
                    if (A && D) {
                      var t = function (t) {
                          t = t || (null == A ? void 0 : A.event);
                          try {
                            e._captureEvent(t);
                          } catch (e) {
                            U.error("Failed to capture event", e);
                          }
                        },
                        n = function (t) {
                          (t = t || (null == A ? void 0 : A.event)),
                            e._captureEvent(t, iH);
                        };
                      es(D, "submit", t, !1, !0),
                        es(D, "change", t, !1, !0),
                        es(D, "click", t, !1, !0),
                        this.config.capture_copied_text &&
                          (es(D, "copy", n, !1, !0), es(D, "cut", n, !1, !0));
                    }
                  } else
                    U.info(
                      "Disabling Automatic Event Collection because this browser is not supported"
                    );
                },
              },
              {
                key: "startIfEnabled",
                value: function () {
                  this.isEnabled &&
                    !this._initialized &&
                    (this._addDomEventHandlers(), (this._initialized = !0));
                },
              },
              {
                key: "afterDecideResponse",
                value: function (e) {
                  e.elementsChainAsString &&
                    (this._elementsChainAsString = e.elementsChainAsString),
                    this.instance.persistence &&
                      this.instance.persistence.register(
                        u({}, ed, !!e.autocapture_opt_out)
                      ),
                    (this._isDisabledServerSide = !!e.autocapture_opt_out),
                    this.startIfEnabled();
                },
              },
              {
                key: "isEnabled",
                get: function () {
                  var e,
                    t,
                    n =
                      null === (e = this.instance.persistence) || void 0 === e
                        ? void 0
                        : e.props[ed];
                  if (
                    E(this._isDisabledServerSide) &&
                    !C(n) &&
                    !this.instance.config.advanced_disable_decide
                  )
                    return !1;
                  var i =
                    null !== (t = this._isDisabledServerSide) && void 0 !== t
                      ? t
                      : !!n;
                  return !!this.instance.config.autocapture && !i;
                },
              },
              {
                key: "_previousElementSibling",
                value: function (e) {
                  if (e.previousElementSibling) return e.previousElementSibling;
                  var t = e;
                  do t = t.previousSibling;
                  while (t && !t7(t));
                  return t;
                },
              },
              {
                key: "_getAugmentPropertiesFromElement",
                value: function (e) {
                  if (!ns(e)) return {};
                  var t = {};
                  return (
                    X(e.attributes, function (e) {
                      if (
                        e.name &&
                        0 === e.name.indexOf("data-ph-capture-attribute")
                      ) {
                        var n = e.name.replace(
                            "data-ph-capture-attribute-",
                            ""
                          ),
                          i = e.value;
                        n && i && nf(i) && (t[n] = i);
                      }
                    }),
                    t
                  );
                },
              },
              {
                key: "_getPropertiesFromElement",
                value: function (e, t, n) {
                  var i,
                    r = e.tagName.toLowerCase(),
                    s = { tag_name: r };
                  ni.indexOf(r) > -1 &&
                    !n &&
                    ("a" === r.toLowerCase() || "button" === r.toLowerCase()
                      ? (s.$el_text = iG(1024, np(e)))
                      : (s.$el_text = iG(1024, t9(e))));
                  var o = t8(e);
                  o.length > 0 &&
                    (s.classes = o.filter(function (e) {
                      return "" !== e;
                    }));
                  var a =
                    null === (i = this.config) || void 0 === i
                      ? void 0
                      : i.element_attribute_ignorelist;
                  X(e.attributes, function (n) {
                    var i;
                    if (
                      (!no(e) ||
                        -1 !==
                          ["name", "id", "class", "aria-label"].indexOf(
                            n.name
                          )) &&
                      (null == a || !a.includes(n.name)) &&
                      !t &&
                      nf(n.value) &&
                      (!S((i = n.name)) ||
                        ("_ngcontent" !== i.substring(0, 10) &&
                          "_nghost" !== i.substring(0, 7)))
                    ) {
                      var r = n.value;
                      "class" === n.name && (r = t6(r).join(" ")),
                        (s["attr__" + n.name] = iG(1024, r));
                    }
                  });
                  for (
                    var l = 1, u = 1, c = e;
                    (c = this._previousElementSibling(c));

                  )
                    l++, c.tagName === e.tagName && u++;
                  return (s.nth_child = l), (s.nth_of_type = u), s;
                },
              },
              {
                key: "_getDefaultProperties",
                value: function (e) {
                  return { $event_type: e, $ce_version: 1 };
                },
              },
              {
                key: "_getEventTarget",
                value: function (e) {
                  var t;
                  return P(e.target)
                    ? e.srcElement || null
                    : null !== (t = e.target) && void 0 !== t && t.shadowRoot
                    ? e.composedPath()[0] || null
                    : e.target || null;
                },
              },
              {
                key: "_captureEvent",
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "$autocapture";
                  if (this.isEnabled) {
                    var i,
                      o = this._getEventTarget(e);
                    nt(o) && (o = o.parentNode || null),
                      "$autocapture" === n &&
                        "click" === e.type &&
                        e instanceof MouseEvent &&
                        this.instance.config.rageclick &&
                        null !== (i = this.rageclicks) &&
                        void 0 !== i &&
                        i.isRageClick(
                          e.clientX,
                          e.clientY,
                          new Date().getTime()
                        ) &&
                        this._captureEvent(e, "$rageclick");
                    var a = n === iH;
                    if (
                      o &&
                      (function (e, t) {
                        var n =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : void 0,
                          i = arguments.length > 3 ? arguments[3] : void 0,
                          r = arguments.length > 4 ? arguments[4] : void 0;
                        if (!A || !e || ne(e, "html") || !t7(e)) return !1;
                        if (null != n && n.url_allowlist) {
                          var o = A.location.href,
                            a = n.url_allowlist;
                          if (
                            a &&
                            !a.some(function (e) {
                              return o.match(e);
                            })
                          )
                            return !1;
                        }
                        if (null != n && n.dom_event_allowlist) {
                          var l = n.dom_event_allowlist;
                          if (
                            l &&
                            !l.some(function (e) {
                              return t.type === e;
                            })
                          )
                            return !1;
                        }
                        for (
                          var u = !1, c = [e], d = !0, h = e;
                          h.parentNode && !ne(h, "body");

                        )
                          if (nn(h.parentNode))
                            c.push(h.parentNode.host), (h = h.parentNode.host);
                          else {
                            if (!(d = nr(h))) break;
                            if (i || ni.indexOf(d.tagName.toLowerCase()) > -1)
                              u = !0;
                            else {
                              var f = A.getComputedStyle(d);
                              f &&
                                "pointer" === f.getPropertyValue("cursor") &&
                                (u = !0);
                            }
                            c.push(d), (h = d);
                          }
                        if (
                          !(function (e, t) {
                            var n = null == t ? void 0 : t.element_allowlist;
                            if (P(n)) return !0;
                            var i,
                              r = p(e);
                            try {
                              for (r.s(); !(i = r.n()).done; ) {
                                var o = (function () {
                                  var e = i.value;
                                  if (
                                    n.some(function (t) {
                                      return e.tagName.toLowerCase() === t;
                                    })
                                  )
                                    return { v: !0 };
                                })();
                                if ("object" === s(o)) return o.v;
                              }
                            } catch (e) {
                              r.e(e);
                            } finally {
                              r.f();
                            }
                            return !1;
                          })(c, n) ||
                          !(function (e, t) {
                            var n =
                              null == t ? void 0 : t.css_selector_allowlist;
                            if (P(n)) return !0;
                            var i,
                              r = p(e);
                            try {
                              for (r.s(); !(i = r.n()).done; ) {
                                var o = (function () {
                                  var e = i.value;
                                  if (
                                    n.some(function (t) {
                                      return e.matches(t);
                                    })
                                  )
                                    return { v: !0 };
                                })();
                                if ("object" === s(o)) return o.v;
                              }
                            } catch (e) {
                              r.e(e);
                            } finally {
                              r.f();
                            }
                            return !1;
                          })(c, n)
                        )
                          return !1;
                        var g = A.getComputedStyle(e);
                        if (
                          g &&
                          "pointer" === g.getPropertyValue("cursor") &&
                          "click" === t.type
                        )
                          return !0;
                        var v = e.tagName.toLowerCase();
                        switch (v) {
                          case "html":
                            return !1;
                          case "form":
                            return (r || ["submit"]).indexOf(t.type) >= 0;
                          case "input":
                          case "select":
                          case "textarea":
                            return (
                              (r || ["change", "click"]).indexOf(t.type) >= 0
                            );
                          default:
                            return u
                              ? (r || ["click"]).indexOf(t.type) >= 0
                              : (r || ["click"]).indexOf(t.type) >= 0 &&
                                  (ni.indexOf(v) > -1 ||
                                    "true" ===
                                      e.getAttribute("contenteditable"));
                        }
                      })(o, e, this.config, a, a ? ["copy", "cut"] : void 0)
                    ) {
                      for (
                        var l, u, d = [o], h = o;
                        h.parentNode && !ne(h, "body");

                      )
                        nn(h.parentNode)
                          ? (d.push(h.parentNode.host), (h = h.parentNode.host))
                          : (d.push(h.parentNode), (h = h.parentNode));
                      var f,
                        g = [],
                        v = {},
                        m = !1;
                      if (
                        (X(d, function (e) {
                          var n = ns(e);
                          "a" === e.tagName.toLowerCase() &&
                            ((f = e.getAttribute("href")),
                            (f = n && nf(f) && f)),
                            K(t8(e), "ph-no-capture") && (m = !0),
                            g.push(
                              t._getPropertiesFromElement(
                                e,
                                t.instance.config.mask_all_element_attributes,
                                t.instance.config.mask_all_text
                              )
                            ),
                            Y(v, t._getAugmentPropertiesFromElement(e));
                        }),
                        this.instance.config.mask_all_text ||
                          ("a" === o.tagName.toLowerCase() ||
                          "button" === o.tagName.toLowerCase()
                            ? (g[0].$el_text = np(o))
                            : (g[0].$el_text = t9(o))),
                        f && (g[0].attr__href = f),
                        m)
                      )
                        return !1;
                      var y = Y(
                        this._getDefaultProperties(e.type),
                        this._elementsChainAsString
                          ? {
                              $elements_chain: g
                                .map(function (e) {
                                  var t,
                                    n,
                                    i,
                                    r = {
                                      text:
                                        null === (n = e.$el_text) ||
                                        void 0 === n
                                          ? void 0
                                          : n.slice(0, 400),
                                      tag_name: e.tag_name,
                                      href:
                                        null === (i = e.attr__href) ||
                                        void 0 === i
                                          ? void 0
                                          : i.slice(0, 2048),
                                      attr_class: (t = e.attr__class)
                                        ? b(t)
                                          ? t
                                          : t6(t)
                                        : void 0,
                                      attr_id: e.attr__id,
                                      nth_child: e.nth_child,
                                      nth_of_type: e.nth_of_type,
                                      attributes: {},
                                    };
                                  return (
                                    Z(e)
                                      .filter(function (e) {
                                        return (
                                          0 === c(e, 1)[0].indexOf("attr__")
                                        );
                                      })
                                      .forEach(function (e) {
                                        var t = c(e, 2),
                                          n = t[0],
                                          i = t[1];
                                        return (r.attributes[n] = i);
                                      }),
                                    r
                                  );
                                })
                                .map(function (e) {
                                  var t,
                                    n,
                                    i = "";
                                  if (
                                    (e.tag_name && (i += e.tag_name),
                                    e.attr_class)
                                  ) {
                                    e.attr_class.sort();
                                    var s,
                                      o = p(e.attr_class);
                                    try {
                                      for (o.s(); !(s = o.n()).done; ) {
                                        var a = s.value;
                                        i += ".".concat(a.replace(/"/g, ""));
                                      }
                                    } catch (e) {
                                      o.e(e);
                                    } finally {
                                      o.f();
                                    }
                                  }
                                  var l = r(
                                      r(
                                        r(
                                          r({}, e.text ? { text: e.text } : {}),
                                          {},
                                          {
                                            "nth-child":
                                              null !== (t = e.nth_child) &&
                                              void 0 !== t
                                                ? t
                                                : 0,
                                            "nth-of-type":
                                              null !== (n = e.nth_of_type) &&
                                              void 0 !== n
                                                ? n
                                                : 0,
                                          },
                                          e.href ? { href: e.href } : {}
                                        ),
                                        e.attr_id ? { attr_id: e.attr_id } : {}
                                      ),
                                      e.attributes
                                    ),
                                    u = {};
                                  return (
                                    Z(l)
                                      .sort(function (e, t) {
                                        var n = c(e, 1)[0],
                                          i = c(t, 1)[0];
                                        return n.localeCompare(i);
                                      })
                                      .forEach(function (e) {
                                        var t = c(e, 2),
                                          n = t[0],
                                          i = t[1];
                                        return (u[ng(n.toString())] = ng(
                                          i.toString()
                                        ));
                                      }),
                                    (i +=
                                      ":" +
                                      Z(l)
                                        .map(function (e) {
                                          var t = c(e, 2),
                                            n = t[0],
                                            i = t[1];
                                          return ""
                                            .concat(n, '="')
                                            .concat(i, '"');
                                        })
                                        .join(""))
                                  );
                                })
                                .join(";"),
                            }
                          : { $elements: g },
                        null !== (l = g[0]) && void 0 !== l && l.$el_text
                          ? {
                              $el_text:
                                null === (u = g[0]) || void 0 === u
                                  ? void 0
                                  : u.$el_text,
                            }
                          : {},
                        v
                      );
                      if (n === iH) {
                        var _,
                          w = t4(
                            null == A ||
                              null === (_ = A.getSelection()) ||
                              void 0 === _
                              ? void 0
                              : _.toString()
                          ),
                          x = e.type || "clipboard";
                        if (!w) return !1;
                        (y.$selected_content = w), (y.$copy_type = x);
                      }
                      return this.instance.capture(n, y), !0;
                    }
                  }
                },
              },
              {
                key: "isBrowserSupported",
                value: function () {
                  return w(null == D ? void 0 : D.querySelectorAll);
                },
              },
            ]),
            e
          );
        })(),
        iJ = (function () {
          function e(t) {
            var n = this;
            o(this, e),
              u(this, "_restoreXHRPatch", void 0),
              u(this, "_restoreFetchPatch", void 0),
              u(this, "_startCapturing", function () {
                P(n._restoreXHRPatch) &&
                  q.postHogTracingHeadersPatchFns._patchXHR(
                    n.instance.sessionManager
                  ),
                  P(n._restoreFetchPatch) &&
                    q.postHogTracingHeadersPatchFns._patchFetch(
                      n.instance.sessionManager
                    );
              }),
              (this.instance = t);
          }
          return (
            l(e, [
              {
                key: "_loadScript",
                value: function (e) {
                  q.postHogTracingHeadersPatchFns && e(),
                    eo(
                      this.instance.requestRouter.endpointFor(
                        "assets",
                        "/static/tracing-headers.js?v=".concat(g.LIB_VERSION)
                      ),
                      function (t) {
                        t &&
                          U.error("[TRACING-HEADERS] failed to load script", t),
                          e();
                      }
                    );
                },
              },
              {
                key: "startIfEnabledOrStop",
                value: function () {
                  var e, t;
                  this.instance.config.__add_tracing_headers
                    ? this._loadScript(this._startCapturing)
                    : (null === (e = this._restoreXHRPatch) ||
                        void 0 === e ||
                        e.call(this),
                      null === (t = this._restoreFetchPatch) ||
                        void 0 === t ||
                        t.call(this),
                      (this._restoreXHRPatch = void 0),
                      (this._restoreFetchPatch = void 0));
                },
              },
            ]),
            e
          );
        })();
      ((i7 = iZ || (iZ = {}))[(i7.PENDING = -1)] = "PENDING"),
        (i7[(i7.DENIED = 0)] = "DENIED"),
        (i7[(i7.GRANTED = 1)] = "GRANTED");
      var i0 = (function () {
          function e(t) {
            o(this, e), (this.instance = t);
          }
          return (
            l(e, [
              {
                key: "config",
                get: function () {
                  return this.instance.config;
                },
              },
              {
                key: "consent",
                get: function () {
                  return this.getDnt() ? iZ.DENIED : this.storedConsent;
                },
              },
              {
                key: "isOptedOut",
                value: function () {
                  return (
                    this.consent === iZ.DENIED ||
                    (this.consent === iZ.PENDING &&
                      this.config.opt_out_capturing_by_default)
                  );
                },
              },
              {
                key: "isOptedIn",
                value: function () {
                  return !this.isOptedOut();
                },
              },
              {
                key: "optInOut",
                value: function (e) {
                  this.storage.set(
                    this.storageKey,
                    e ? 1 : 0,
                    this.config.cookie_expiration,
                    this.config.cross_subdomain_cookie,
                    this.config.secure_cookie
                  );
                },
              },
              {
                key: "reset",
                value: function () {
                  this.storage.remove(
                    this.storageKey,
                    this.config.cross_subdomain_cookie
                  );
                },
              },
              {
                key: "storageKey",
                get: function () {
                  var e = this.instance.config,
                    t = e.token;
                  return (
                    (e.opt_out_capturing_cookie_prefix || "__ph_opt_in_out_") +
                    t
                  );
                },
              },
              {
                key: "storedConsent",
                get: function () {
                  var e = this.storage.get(this.storageKey);
                  return "1" === e
                    ? iZ.GRANTED
                    : "0" === e
                    ? iZ.DENIED
                    : iZ.PENDING;
                },
              },
              {
                key: "storage",
                get: function () {
                  if (!this._storage) {
                    var e = this.config.opt_out_capturing_persistence_type;
                    this._storage = "localStorage" === e ? e2 : e0;
                    var t = "localStorage" === e ? e0 : e2;
                    t.get(this.storageKey) &&
                      (this._storage.get(this.storageKey) ||
                        this.optInOut("1" === t.get(this.storageKey)),
                      t.remove(
                        this.storageKey,
                        this.config.cross_subdomain_cookie
                      ));
                  }
                  return this._storage;
                },
              },
              {
                key: "getDnt",
                value: function () {
                  return (
                    !!this.config.respect_dnt &&
                    !!ea(
                      [
                        null == j ? void 0 : j.doNotTrack,
                        null == j ? void 0 : j.msDoNotTrack,
                        q.doNotTrack,
                      ],
                      function (e) {
                        return K([!0, 1, "1", "yes"], e);
                      }
                    )
                  );
                },
              },
            ]),
            e
          );
        })(),
        i1 = {},
        i2 = function () {},
        i3 = "posthog",
        i5 =
          !id &&
          -1 === (null == B ? void 0 : B.indexOf("MSIE")) &&
          -1 === (null == B ? void 0 : B.indexOf("Mozilla")),
        i6 = function () {
          var e, t, n;
          return {
            api_host: "https://us.i.posthog.com",
            ui_host: null,
            token: "",
            autocapture: !0,
            rageclick: !0,
            cross_subdomain_cookie:
              !!S(
                (n =
                  null == (t = null == D ? void 0 : D.location)
                    ? void 0
                    : t.hostname)
              ) && "herokuapp.com" !== n.split(".").slice(-2).join("."),
            persistence: "localStorage+cookie",
            persistence_name: "",
            loaded: i2,
            store_google: !0,
            custom_campaign_params: [],
            custom_blocked_useragents: [],
            save_referrer: !0,
            capture_pageview: !0,
            capture_pageleave: "if_capture_pageview",
            debug:
              (L &&
                S(null == L ? void 0 : L.search) &&
                -1 !== L.search.indexOf("__posthog_debug=true")) ||
              !1,
            verbose: !1,
            cookie_expiration: 365,
            upgrade: !1,
            disable_session_recording: !1,
            disable_persistence: !1,
            disable_surveys: !1,
            enable_recording_console_log: void 0,
            secure_cookie:
              "https:" ===
              (null == A || null === (e = A.location) || void 0 === e
                ? void 0
                : e.protocol),
            ip: !0,
            opt_out_capturing_by_default: !1,
            opt_out_persistence_by_default: !1,
            opt_out_useragent_filter: !1,
            opt_out_capturing_persistence_type: "localStorage",
            opt_out_capturing_cookie_prefix: null,
            opt_in_site_apps: !1,
            property_denylist: [],
            respect_dnt: !1,
            sanitize_properties: null,
            request_headers: {},
            inapp_protocol: "//",
            inapp_link_new_window: !1,
            request_batching: !0,
            properties_string_max_length: 65535,
            session_recording: {},
            mask_all_element_attributes: !1,
            mask_all_text: !1,
            advanced_disable_decide: !1,
            advanced_disable_feature_flags: !1,
            advanced_disable_feature_flags_on_first_load: !1,
            advanced_disable_toolbar_metrics: !1,
            feature_flag_request_timeout_ms: 3e3,
            on_request_error: function (e) {
              var t = "Bad HTTP status: " + e.statusCode + " " + e.text;
              U.error(t);
            },
            get_device_id: function (e) {
              return e;
            },
            _onCapture: i2,
            capture_performance: void 0,
            name: "posthog",
            bootstrap: {},
            disable_compression: !1,
            session_idle_timeout_seconds: 1800,
            person_profiles: "always",
            __add_tracing_headers: !1,
          };
        },
        i8 = function (e) {
          var t = {};
          P(e.process_person) || (t.person_profiles = e.process_person),
            P(e.xhr_headers) || (t.request_headers = e.xhr_headers),
            P(e.cookie_name) || (t.persistence_name = e.cookie_name),
            P(e.disable_cookie) || (t.disable_persistence = e.disable_cookie);
          var n = Y({}, t, e);
          return (
            b(e.property_blacklist) &&
              (P(e.property_denylist)
                ? (n.property_denylist = e.property_blacklist)
                : b(e.property_denylist)
                ? (n.property_denylist = [].concat(
                    d(e.property_blacklist),
                    d(e.property_denylist)
                  ))
                : U.error(
                    "Invalid value for property_denylist config: " +
                      e.property_denylist
                  )),
            n
          );
        },
        i4 = (function () {
          function e() {
            o(this, e), u(this, "__forceAllowLocalhost", !1);
          }
          return (
            l(e, [
              {
                key: "_forceAllowLocalhost",
                get: function () {
                  return this.__forceAllowLocalhost;
                },
                set: function (e) {
                  U.error(
                    "WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"
                  ),
                    (this.__forceAllowLocalhost = e);
                },
              },
            ]),
            e
          );
        })(),
        i9 = (function () {
          function e() {
            var t = this;
            o(this, e),
              u(this, "webPerformance", new i4()),
              u(this, "_debugEventEmitter", new iW()),
              (this.config = i6()),
              (this.decideEndpointWasHit = !1),
              (this.SentryIntegration = iA),
              (this.sentryIntegration = function (e) {
                var n;
                return (
                  (n = iS(t, e)),
                  {
                    name: iP,
                    processEvent: function (e) {
                      return n(e);
                    },
                  }
                );
              }),
              (this.__request_queue = []),
              (this.__loaded = !1),
              (this.analyticsDefaultEndpoint = "/e/"),
              (this.featureFlags = new eB(this)),
              (this.toolbar = new nN(this)),
              (this.scrollManager = new iU(this)),
              (this.pageViewManager = new iF(this)),
              (this.surveys = new ij(this)),
              (this.rateLimiter = new iD(this)),
              (this.requestRouter = new ik(this)),
              (this.consent = new i0(this)),
              (this.people = {
                set: function (e, n, i) {
                  var r = S(e) ? u({}, e, n) : e;
                  t.setPersonProperties(r), null == i || i({});
                },
                set_once: function (e, n, i) {
                  var r = S(e) ? u({}, e, n) : e;
                  t.setPersonProperties(void 0, r), null == i || i({});
                },
              }),
              this.on("eventCaptured", function (e) {
                return U.info("send", e);
              });
          }
          return (
            l(e, [
              {
                key: "init",
                value: function (t, n, i) {
                  if (i && i !== i3) {
                    var r,
                      s = null !== (r = i1[i]) && void 0 !== r ? r : new e();
                    return s._init(t, n, i), (i1[i] = s), (i1[i3][i] = s), s;
                  }
                  return this._init(t, n, i);
                },
              },
              {
                key: "_init",
                value: function (e) {
                  var t,
                    n,
                    i = this,
                    s =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    o = arguments.length > 2 ? arguments[2] : void 0;
                  if (P(e) || (S(e) && 0 === e.trim().length))
                    return (
                      U.critical(
                        "PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"
                      ),
                      this
                    );
                  if (this.__loaded)
                    return (
                      U.warn(
                        "You have already initialized PostHog! Re-initializing is a no-op"
                      ),
                      this
                    );
                  if (
                    ((this.__loaded = !0),
                    (this.config = {}),
                    (this._triggered_notifs = []),
                    this.set_config(Y({}, i6(), i8(s), { name: o, token: e })),
                    (this.compression = s.disable_compression
                      ? void 0
                      : Q.Base64),
                    (this.persistence = new t2(this.config)),
                    (this.sessionPersistence =
                      "sessionStorage" === this.config.persistence
                        ? this.persistence
                        : new t2(
                            r(
                              r({}, this.config),
                              {},
                              { persistence: "sessionStorage" }
                            )
                          )),
                    (this._requestQueue = new nV(function (e) {
                      return i._send_retriable_request(e);
                    })),
                    (this._retryQueue = new ib(this)),
                    (this.__request_queue = []),
                    (this.sessionManager = new iw(
                      this.config,
                      this.persistence
                    )),
                    (this.sessionPropsManager = new i$(
                      this.sessionManager,
                      this.persistence
                    )),
                    new iJ(this).startIfEnabledOrStop(),
                    (this.sessionRecording = new nj(this)),
                    this.sessionRecording.startIfEnabledOrStop(),
                    this.config.disable_scroll_properties ||
                      this.scrollManager.startMeasuringScrollPosition(),
                    (this.autocapture = new iQ(this)),
                    this.autocapture.startIfEnabled(),
                    this.surveys.loadIfEnabled(),
                    (this.heatmaps = new iz(this)),
                    this.heatmaps.startIfEnabled(),
                    (g.DEBUG = g.DEBUG || this.config.debug),
                    this._sync_opt_out_with_persistence(),
                    void 0 !==
                      (null === (t = s.bootstrap) || void 0 === t
                        ? void 0
                        : t.distinctID))
                  ) {
                    var a,
                      l,
                      u = this.config.get_device_id(eK()),
                      c =
                        null !== (a = s.bootstrap) &&
                        void 0 !== a &&
                        a.isIdentifiedID
                          ? u
                          : s.bootstrap.distinctID;
                    this.persistence.set_property(
                      eT,
                      null !== (l = s.bootstrap) &&
                        void 0 !== l &&
                        l.isIdentifiedID
                        ? "identified"
                        : "anonymous"
                    ),
                      this.register({
                        distinct_id: s.bootstrap.distinctID,
                        $device_id: c,
                      });
                  }
                  if (this._hasBootstrappedFeatureFlags()) {
                    var d,
                      h,
                      f = Object.keys(
                        (null === (d = s.bootstrap) || void 0 === d
                          ? void 0
                          : d.featureFlags) || {}
                      )
                        .filter(function (e) {
                          var t, n;
                          return !(
                            null === (t = s.bootstrap) ||
                            void 0 === t ||
                            null === (n = t.featureFlags) ||
                            void 0 === n ||
                            !n[e]
                          );
                        })
                        .reduce(function (e, t) {
                          var n, i;
                          return (
                            (e[t] =
                              (null === (n = s.bootstrap) ||
                              void 0 === n ||
                              null === (i = n.featureFlags) ||
                              void 0 === i
                                ? void 0
                                : i[t]) || !1),
                            e
                          );
                        }, {}),
                      p = Object.keys(
                        (null === (h = s.bootstrap) || void 0 === h
                          ? void 0
                          : h.featureFlagPayloads) || {}
                      )
                        .filter(function (e) {
                          return f[e];
                        })
                        .reduce(function (e, t) {
                          var n, i, r, o;
                          return (
                            null !== (n = s.bootstrap) &&
                              void 0 !== n &&
                              null !== (i = n.featureFlagPayloads) &&
                              void 0 !== i &&
                              i[t] &&
                              (e[t] =
                                null === (r = s.bootstrap) ||
                                void 0 === r ||
                                null === (o = r.featureFlagPayloads) ||
                                void 0 === o
                                  ? void 0
                                  : o[t]),
                            e
                          );
                        }, {});
                    this.featureFlags.receivedFeatureFlags({
                      featureFlags: f,
                      featureFlagPayloads: p,
                    });
                  }
                  if (!this.get_distinct_id()) {
                    var v = this.config.get_device_id(eK());
                    this.register_once({ distinct_id: v, $device_id: v }, ""),
                      this.persistence.set_property(eT, "anonymous");
                  }
                  return (
                    null == A ||
                      null === (n = A.addEventListener) ||
                      void 0 === n ||
                      n.call(
                        A,
                        "onpagehide" in self ? "pagehide" : "unload",
                        this._handle_unload.bind(this)
                      ),
                    this.toolbar.maybeLoadToolbar(),
                    s.segment
                      ? (function (e, t) {
                          var n = e.config.segment;
                          if (!n) return t();
                          !(function (e, t) {
                            var n = e.config.segment;
                            if (!n) return t();
                            var i = function (n) {
                                var i = function () {
                                  return n.anonymousId() || eK();
                                };
                                (e.config.get_device_id = i),
                                  n.id() &&
                                    (e.register({
                                      distinct_id: n.id(),
                                      $device_id: i(),
                                    }),
                                    e.persistence.set_property(
                                      eT,
                                      "identified"
                                    )),
                                  t();
                              },
                              r = n.user();
                            "then" in r && w(r.then)
                              ? r.then(function (e) {
                                  return i(e);
                                })
                              : i(r);
                          })(e, function () {
                            var i;
                            n.register(
                              ((Promise && Promise.resolve) ||
                                U.warn(
                                  "This browser does not have Promise support, and can not use the segment integration"
                                ),
                              (i = function (t, n) {
                                if (!n) return t;
                                t.event.userId ||
                                  t.event.anonymousId === e.get_distinct_id() ||
                                  e.reset(),
                                  t.event.userId &&
                                    t.event.userId !== e.get_distinct_id() &&
                                    (e.register({
                                      distinct_id: t.event.userId,
                                    }),
                                    e.reloadFeatureFlags());
                                var i,
                                  r = e._calculate_event_properties(
                                    n,
                                    null !== (i = t.event.properties) &&
                                      void 0 !== i
                                      ? i
                                      : {}
                                  );
                                return (
                                  (t.event.properties = Object.assign(
                                    {},
                                    r,
                                    t.event.properties
                                  )),
                                  t
                                );
                              }),
                              {
                                name: "PostHog JS",
                                type: "enrichment",
                                version: "1.0.0",
                                isLoaded: function () {
                                  return !0;
                                },
                                load: function () {
                                  return Promise.resolve();
                                },
                                track: function (e) {
                                  return i(e, e.event.event);
                                },
                                page: function (e) {
                                  return i(e, "$pageview");
                                },
                                identify: function (e) {
                                  return i(e, "$identify");
                                },
                                screen: function (e) {
                                  return i(e, "$screen");
                                },
                              })
                            ).then(function () {
                              t();
                            });
                          });
                        })(this, function () {
                          return i._loaded();
                        })
                      : this._loaded(),
                    w(this.config._onCapture) &&
                      this.on("eventCaptured", function (e) {
                        return i.config._onCapture(e.event, e);
                      }),
                    this
                  );
                },
              },
              {
                key: "_afterDecideResponse",
                value: function (e) {
                  var t, n, i, r, s;
                  (this.compression = void 0),
                    e.supportedCompression &&
                      !this.config.disable_compression &&
                      (this.compression = K(e.supportedCompression, Q.GZipJS)
                        ? Q.GZipJS
                        : K(e.supportedCompression, Q.Base64)
                        ? Q.Base64
                        : void 0),
                    null !== (t = e.analytics) &&
                      void 0 !== t &&
                      t.endpoint &&
                      (this.analyticsDefaultEndpoint = e.analytics.endpoint),
                    null === (n = this.sessionRecording) ||
                      void 0 === n ||
                      n.afterDecideResponse(e),
                    null === (i = this.autocapture) ||
                      void 0 === i ||
                      i.afterDecideResponse(e),
                    null === (r = this.heatmaps) ||
                      void 0 === r ||
                      r.afterDecideResponse(e),
                    null === (s = this.surveys) ||
                      void 0 === s ||
                      s.afterDecideResponse(e);
                },
              },
              {
                key: "_loaded",
                value: function () {
                  var e = this,
                    t = this.config.advanced_disable_decide;
                  t || this.featureFlags.setReloadingPaused(!0);
                  try {
                    this.config.loaded(this);
                  } catch (e) {
                    U.critical("`loaded` function failed", e);
                  }
                  this._start_queue_if_opted_in(),
                    this.config.capture_pageview &&
                      setTimeout(function () {
                        D &&
                          e.capture(
                            "$pageview",
                            { title: D.title },
                            { send_instantly: !0 }
                          );
                      }, 1),
                    t ||
                      (new nD(this).call(),
                      this.featureFlags.resetRequestQueue());
                },
              },
              {
                key: "_start_queue_if_opted_in",
                value: function () {
                  var e;
                  this.has_opted_out_capturing() ||
                    (this.config.request_batching &&
                      (null === (e = this._requestQueue) ||
                        void 0 === e ||
                        e.enable()));
                },
              },
              {
                key: "_dom_loaded",
                value: function () {
                  var e = this;
                  this.has_opted_out_capturing() ||
                    G(this.__request_queue, function (t) {
                      return e._send_retriable_request(t);
                    }),
                    (this.__request_queue = []),
                    this._start_queue_if_opted_in();
                },
              },
              {
                key: "_handle_unload",
                value: function () {
                  var e, t;
                  this.config.request_batching
                    ? (this._shouldCapturePageleave() &&
                        this.capture("$pageleave"),
                      null === (e = this._requestQueue) ||
                        void 0 === e ||
                        e.unload(),
                      null === (t = this._retryQueue) ||
                        void 0 === t ||
                        t.unload())
                    : this._shouldCapturePageleave() &&
                      this.capture("$pageleave", null, {
                        transport: "sendBeacon",
                      });
                },
              },
              {
                key: "_send_request",
                value: function (e) {
                  var t = this;
                  this.__loaded &&
                    (i5
                      ? this.__request_queue.push(e)
                      : this.rateLimiter.isServerRateLimited(e.batchKey) ||
                        ((e.transport =
                          e.transport || this.config.api_transport),
                        (e.url = ip(e.url, { ip: this.config.ip ? 1 : 0 })),
                        (e.headers = this.config.request_headers),
                        (e.compression =
                          "best-available" === e.compression
                            ? this.compression
                            : e.compression),
                        (function (e) {
                          var t,
                            n,
                            i,
                            s = r({}, e);
                          (s.timeout = s.timeout || 6e4),
                            (s.url = ip(s.url, {
                              _: new Date().getTime().toString(),
                              ver: g.LIB_VERSION,
                              compression: s.compression,
                            }));
                          var o =
                              null !== (t = s.transport) && void 0 !== t
                                ? t
                                : "XHR",
                            a =
                              null !==
                                (n =
                                  null ===
                                    (i = ea(iv, function (e) {
                                      return e.transport === o;
                                    })) || void 0 === i
                                    ? void 0
                                    : i.method) && void 0 !== n
                                ? n
                                : iv[0].method;
                          if (!a) throw Error("No available transport method");
                          a(s);
                        })(
                          r(
                            r({}, e),
                            {},
                            {
                              callback: function (n) {
                                var i, r, s;
                                t.rateLimiter.checkForLimiting(n),
                                  n.statusCode >= 400 &&
                                    (null ===
                                      (r = (s = t.config).on_request_error) ||
                                      void 0 === r ||
                                      r.call(s, n)),
                                  null === (i = e.callback) ||
                                    void 0 === i ||
                                    i.call(e, n);
                              },
                            }
                          )
                        )));
                },
              },
              {
                key: "_send_retriable_request",
                value: function (e) {
                  this._retryQueue
                    ? this._retryQueue.retriableRequest(e)
                    : this._send_request(e);
                },
              },
              {
                key: "_execute_array",
                value: function (e) {
                  var t,
                    n = this,
                    i = [],
                    r = [],
                    s = [];
                  G(e, function (e) {
                    e &&
                      (b((t = e[0]))
                        ? s.push(e)
                        : w(e)
                        ? e.call(n)
                        : b(e) && "alias" === t
                        ? i.push(e)
                        : b(e) && -1 !== t.indexOf("capture") && w(n[t])
                        ? s.push(e)
                        : r.push(e));
                  });
                  var o = function (e, t) {
                    G(
                      e,
                      function (e) {
                        if (b(e[0])) {
                          var n = t;
                          X(e, function (e) {
                            n = n[e[0]].apply(n, e.slice(1));
                          });
                        } else this[e[0]].apply(this, e.slice(1));
                      },
                      t
                    );
                  };
                  o(i, this), o(r, this), o(s, this);
                },
              },
              {
                key: "_hasBootstrappedFeatureFlags",
                value: function () {
                  var e, t;
                  return (
                    ((null === (e = this.config.bootstrap) || void 0 === e
                      ? void 0
                      : e.featureFlags) &&
                      Object.keys(
                        null === (t = this.config.bootstrap) || void 0 === t
                          ? void 0
                          : t.featureFlags
                      ).length > 0) ||
                    !1
                  );
                },
              },
              {
                key: "push",
                value: function (e) {
                  this._execute_array([e]);
                },
              },
              {
                key: "capture",
                value: function (e, t, n) {
                  var i;
                  if (
                    !(
                      this.__loaded &&
                      this.persistence &&
                      this.sessionPersistence &&
                      this._requestQueue
                    )
                  )
                    return U.uninitializedWarning("posthog.capture");
                  if (!this.consent.isOptedOut()) {
                    if (!P(e) && S(e)) {
                      if (
                        !B ||
                        this.config.opt_out_useragent_filter ||
                        !iV(B, this.config.custom_blocked_useragents)
                      ) {
                        var s =
                          null != n && n.skip_client_rate_limiting
                            ? void 0
                            : this.rateLimiter.clientRateLimitContext();
                        if (null == s || !s.isRateLimited) {
                          this.sessionPersistence.update_search_keyword(),
                            this.config.store_google &&
                              this.sessionPersistence.update_campaign_params(),
                            this.config.save_referrer &&
                              this.sessionPersistence.update_referrer_info(),
                            (this.config.store_google ||
                              this.config.save_referrer) &&
                              this.persistence.set_initial_person_info();
                          var o,
                            a,
                            l,
                            u,
                            c = {
                              uuid: eK(),
                              event: e,
                              properties: this._calculate_event_properties(
                                e,
                                t || {},
                                n
                              ),
                            };
                          s &&
                            (c.properties.$lib_rate_limit_remaining_tokens =
                              s.remainingTokens),
                            (null == n ? void 0 : n.$set) &&
                              (c.$set = null == n ? void 0 : n.$set);
                          var d = this._calculate_set_once_properties(
                            null == n ? void 0 : n.$set_once
                          );
                          d && (c.$set_once = d),
                            (((o = c),
                            (a =
                              null != n && n._noTruncate
                                ? null
                                : this.config.properties_string_max_length),
                            (l = function (e) {
                              return S(e) && !E(a) ? e.slice(0, a) : e;
                            }),
                            (u = new Set()),
                            (c = (function e(t, n) {
                              var i;
                              return t !== Object(t)
                                ? l
                                  ? l(t, n)
                                  : t
                                : u.has(t)
                                ? void 0
                                : (u.add(t),
                                  b(t)
                                    ? ((i = []),
                                      G(t, function (t) {
                                        i.push(e(t));
                                      }))
                                    : ((i = {}),
                                      X(t, function (t, n) {
                                        u.has(t) || (i[n] = e(t, n));
                                      })),
                                  i);
                            })(o))).timestamp =
                              (null == n ? void 0 : n.timestamp) || new Date()),
                            P(null == n ? void 0 : n.timestamp) ||
                              ((c.properties.$event_time_override_provided =
                                !0),
                              (c.properties.$event_time_override_system_time =
                                new Date()));
                          var h = r(r({}, c.properties.$set), c.$set);
                          k(h) || this.setPersonPropertiesForFlags(h),
                            this._debugEventEmitter.emit("eventCaptured", c);
                          var f = {
                            method: "POST",
                            url:
                              null !== (i = null == n ? void 0 : n._url) &&
                              void 0 !== i
                                ? i
                                : this.requestRouter.endpointFor(
                                    "api",
                                    this.analyticsDefaultEndpoint
                                  ),
                            data: c,
                            compression: "best-available",
                            batchKey: null == n ? void 0 : n._batchKey,
                          };
                          return (
                            !this.config.request_batching ||
                            (n && (null == n || !n._batchKey)) ||
                            (null != n && n.send_instantly)
                              ? this._send_retriable_request(f)
                              : this._requestQueue.enqueue(f),
                            c
                          );
                        }
                        U.critical(
                          "This capture call is ignored due to client rate limiting."
                        );
                      }
                    } else U.error("No event name provided to posthog.capture");
                  }
                },
              },
              {
                key: "_addCaptureHook",
                value: function (e) {
                  this.on("eventCaptured", function (t) {
                    return e(t.event);
                  });
                },
              },
              {
                key: "_calculate_event_properties",
                value: function (e, t, n) {
                  if (!this.persistence || !this.sessionPersistence) return t;
                  var i = this.persistence.remove_event_timer(e),
                    s = r({}, t);
                  if (((s.token = this.config.token), "$snapshot" === e)) {
                    var o = r(
                      r({}, this.persistence.properties()),
                      this.sessionPersistence.properties()
                    );
                    return (s.distinct_id = o.distinct_id), s;
                  }
                  var a = t0.properties();
                  if (this.sessionManager) {
                    var l = this.sessionManager.checkAndGetSessionAndWindowId(),
                      u = l.sessionId,
                      c = l.windowId;
                    (s.$session_id = u), (s.$window_id = c);
                  }
                  if (
                    (this.requestRouter.region === iy.CUSTOM &&
                      (s.$lib_custom_api_host = this.config.api_host),
                    this.sessionPropsManager &&
                      this.config.__preview_send_client_session_params &&
                      ("$pageview" === e ||
                        "$pageleave" === e ||
                        "$autocapture" === e))
                  ) {
                    var d = this.sessionPropsManager.getSessionProps();
                    s = Y(s, d);
                  }
                  if (!this.config.disable_scroll_properties) {
                    var h = {};
                    "$pageview" === e
                      ? (h = this.pageViewManager.doPageView())
                      : "$pageleave" === e &&
                        (h = this.pageViewManager.doPageLeave()),
                      (s = Y(s, h));
                  }
                  if (("$pageview" === e && D && (s.title = D.title), !P(i))) {
                    var f = new Date().getTime() - i;
                    s.$duration = parseFloat((f / 1e3).toFixed(3));
                  }
                  if (
                    (B &&
                      this.config.opt_out_useragent_filter &&
                      (s.$browser_type = iV(
                        B,
                        this.config.custom_blocked_useragents
                      )
                        ? "bot"
                        : "browser"),
                    ((s = Y(
                      {},
                      a,
                      this.persistence.properties(),
                      this.sessionPersistence.properties(),
                      s
                    )).$is_identified = this._isIdentified()),
                    null == n || !n._noHeatmaps)
                  ) {
                    var p,
                      g =
                        null === (p = this.heatmaps) || void 0 === p
                          ? void 0
                          : p.getAndClearBuffer();
                    g && (s.$heatmap_data = g);
                  }
                  b(this.config.property_denylist)
                    ? X(this.config.property_denylist, function (e) {
                        delete s[e];
                      })
                    : U.error(
                        "Invalid value for property_denylist config: " +
                          this.config.property_denylist +
                          " or property_blacklist config: " +
                          this.config.property_blacklist
                      );
                  var v = this.config.sanitize_properties;
                  return (
                    v && (s = v(s, e)),
                    (s.$process_person_profile = this._hasPersonProcessing()),
                    s
                  );
                },
              },
              {
                key: "_calculate_set_once_properties",
                value: function (e) {
                  if (!this.persistence || !this._hasPersonProcessing())
                    return e;
                  var t = Y({}, this.persistence.get_initial_props(), e || {});
                  return k(t) ? void 0 : t;
                },
              },
              {
                key: "register",
                value: function (e, t) {
                  var n;
                  null === (n = this.persistence) ||
                    void 0 === n ||
                    n.register(e, t);
                },
              },
              {
                key: "register_once",
                value: function (e, t, n) {
                  var i;
                  null === (i = this.persistence) ||
                    void 0 === i ||
                    i.register_once(e, t, n);
                },
              },
              {
                key: "register_for_session",
                value: function (e) {
                  var t;
                  null === (t = this.sessionPersistence) ||
                    void 0 === t ||
                    t.register(e);
                },
              },
              {
                key: "unregister",
                value: function (e) {
                  var t;
                  null === (t = this.persistence) ||
                    void 0 === t ||
                    t.unregister(e);
                },
              },
              {
                key: "unregister_for_session",
                value: function (e) {
                  var t;
                  null === (t = this.sessionPersistence) ||
                    void 0 === t ||
                    t.unregister(e);
                },
              },
              {
                key: "_register_single",
                value: function (e, t) {
                  this.register(u({}, e, t));
                },
              },
              {
                key: "getFeatureFlag",
                value: function (e, t) {
                  return this.featureFlags.getFeatureFlag(e, t);
                },
              },
              {
                key: "getFeatureFlagPayload",
                value: function (e) {
                  var t = this.featureFlags.getFeatureFlagPayload(e);
                  try {
                    return JSON.parse(t);
                  } catch (e) {
                    return t;
                  }
                },
              },
              {
                key: "isFeatureEnabled",
                value: function (e, t) {
                  return this.featureFlags.isFeatureEnabled(e, t);
                },
              },
              {
                key: "reloadFeatureFlags",
                value: function () {
                  this.featureFlags.reloadFeatureFlags();
                },
              },
              {
                key: "updateEarlyAccessFeatureEnrollment",
                value: function (e, t) {
                  this.featureFlags.updateEarlyAccessFeatureEnrollment(e, t);
                },
              },
              {
                key: "getEarlyAccessFeatures",
                value: function (e) {
                  var t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  return this.featureFlags.getEarlyAccessFeatures(e, t);
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  return this._debugEventEmitter.on(e, t);
                },
              },
              {
                key: "onFeatureFlags",
                value: function (e) {
                  return this.featureFlags.onFeatureFlags(e);
                },
              },
              {
                key: "onSessionId",
                value: function (e) {
                  var t, n;
                  return null !==
                    (t =
                      null === (n = this.sessionManager) || void 0 === n
                        ? void 0
                        : n.onSessionId(e)) && void 0 !== t
                    ? t
                    : function () {};
                },
              },
              {
                key: "getSurveys",
                value: function (e) {
                  var t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  this.surveys.getSurveys(e, t);
                },
              },
              {
                key: "getActiveMatchingSurveys",
                value: function (e) {
                  var t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  this.surveys.getActiveMatchingSurveys(e, t);
                },
              },
              {
                key: "getNextSurveyStep",
                value: function (e, t, n) {
                  return this.surveys.getNextSurveyStep(e, t, n);
                },
              },
              {
                key: "identify",
                value: function (e, t, n) {
                  if (!this.__loaded || !this.persistence)
                    return U.uninitializedWarning("posthog.identify");
                  if (
                    (T(e) &&
                      ((e = e.toString()),
                      U.warn(
                        "The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string."
                      )),
                    e)
                  ) {
                    if (["distinct_id", "distinctid"].includes(e.toLowerCase()))
                      U.critical(
                        'The string "'.concat(
                          e,
                          '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'
                        )
                      );
                    else if (
                      this._requirePersonProcessing("posthog.identify")
                    ) {
                      var i = this.get_distinct_id();
                      this.register({ $user_id: e }),
                        this.get_property("$device_id") ||
                          this.register_once(
                            { $had_persisted_distinct_id: !0, $device_id: i },
                            ""
                          ),
                        e !== i &&
                          e !== this.get_property(eu) &&
                          (this.unregister(eu),
                          this.register({ distinct_id: e }));
                      var r =
                        "anonymous" ===
                        (this.persistence.get_property(eT) || "anonymous");
                      e !== i && r
                        ? (this.persistence.set_property(eT, "identified"),
                          this.setPersonPropertiesForFlags(t || {}, !1),
                          this.capture(
                            "$identify",
                            { distinct_id: e, $anon_distinct_id: i },
                            { $set: t || {}, $set_once: n || {} }
                          ),
                          this.featureFlags.setAnonymousDistinctId(i))
                        : (t || n) && this.setPersonProperties(t, n),
                        e !== i &&
                          (this.reloadFeatureFlags(), this.unregister(eR));
                    }
                  } else
                    U.error(
                      "Unique user id has not been set in posthog.identify"
                    );
                },
              },
              {
                key: "setPersonProperties",
                value: function (e, t) {
                  (e || t) &&
                    this._requirePersonProcessing(
                      "posthog.setPersonProperties"
                    ) &&
                    (this.setPersonPropertiesForFlags(e || {}),
                    this.capture("$set", {
                      $set: e || {},
                      $set_once: t || {},
                    }));
                },
              },
              {
                key: "group",
                value: function (e, t, n) {
                  if (e && t) {
                    if (this._requirePersonProcessing("posthog.group")) {
                      var i = this.getGroups();
                      i[e] !== t && this.resetGroupPropertiesForFlags(e),
                        this.register({
                          $groups: r(r({}, i), {}, u({}, e, t)),
                        }),
                        n &&
                          (this.capture("$groupidentify", {
                            $group_type: e,
                            $group_key: t,
                            $group_set: n,
                          }),
                          this.setGroupPropertiesForFlags(u({}, e, n))),
                        i[e] === t || n || this.reloadFeatureFlags();
                    }
                  } else
                    U.error(
                      "posthog.group requires a group type and group key"
                    );
                },
              },
              {
                key: "resetGroups",
                value: function () {
                  this.register({ $groups: {} }),
                    this.resetGroupPropertiesForFlags(),
                    this.reloadFeatureFlags();
                },
              },
              {
                key: "setPersonPropertiesForFlags",
                value: function (e) {
                  var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  this._requirePersonProcessing(
                    "posthog.setPersonPropertiesForFlags"
                  ) && this.featureFlags.setPersonPropertiesForFlags(e, t);
                },
              },
              {
                key: "resetPersonPropertiesForFlags",
                value: function () {
                  this.featureFlags.resetPersonPropertiesForFlags();
                },
              },
              {
                key: "setGroupPropertiesForFlags",
                value: function (e) {
                  var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  this._requirePersonProcessing(
                    "posthog.setGroupPropertiesForFlags"
                  ) && this.featureFlags.setGroupPropertiesForFlags(e, t);
                },
              },
              {
                key: "resetGroupPropertiesForFlags",
                value: function (e) {
                  this.featureFlags.resetGroupPropertiesForFlags(e);
                },
              },
              {
                key: "reset",
                value: function (e) {
                  if (!this.__loaded)
                    return U.uninitializedWarning("posthog.reset");
                  var t,
                    n,
                    i,
                    r,
                    s = this.get_property("$device_id");
                  this.consent.reset(),
                    null === (t = this.persistence) ||
                      void 0 === t ||
                      t.clear(),
                    null === (n = this.sessionPersistence) ||
                      void 0 === n ||
                      n.clear(),
                    null === (i = this.persistence) ||
                      void 0 === i ||
                      i.set_property(eT, "anonymous"),
                    null === (r = this.sessionManager) ||
                      void 0 === r ||
                      r.resetSessionId();
                  var o = this.config.get_device_id(eK());
                  this.register_once(
                    { distinct_id: o, $device_id: e ? o : s },
                    ""
                  );
                },
              },
              {
                key: "get_distinct_id",
                value: function () {
                  return this.get_property("distinct_id");
                },
              },
              {
                key: "getGroups",
                value: function () {
                  return this.get_property("$groups") || {};
                },
              },
              {
                key: "get_session_id",
                value: function () {
                  var e, t;
                  return null !==
                    (e =
                      null === (t = this.sessionManager) || void 0 === t
                        ? void 0
                        : t.checkAndGetSessionAndWindowId(!0).sessionId) &&
                    void 0 !== e
                    ? e
                    : "";
                },
              },
              {
                key: "get_session_replay_url",
                value: function (e) {
                  if (!this.sessionManager) return "";
                  var t = this.sessionManager.checkAndGetSessionAndWindowId(!0),
                    n = t.sessionId,
                    i = t.sessionStartTimestamp,
                    r = this.requestRouter.endpointFor(
                      "ui",
                      "/project/"
                        .concat(this.config.token, "/replay/")
                        .concat(n)
                    );
                  if (null != e && e.withTimestamp && i) {
                    var s,
                      o =
                        null !== (s = e.timestampLookBack) && void 0 !== s
                          ? s
                          : 10;
                    if (!i) return r;
                    var a = Math.max(
                      Math.floor((new Date().getTime() - i) / 1e3) - o,
                      0
                    );
                    r += "?t=".concat(a);
                  }
                  return r;
                },
              },
              {
                key: "alias",
                value: function (e, t) {
                  return e === this.get_property(el)
                    ? (U.critical(
                        "Attempting to create alias for existing People user - aborting."
                      ),
                      -2)
                    : this._requirePersonProcessing("posthog.alias")
                    ? (P(t) && (t = this.get_distinct_id()),
                      e !== t
                        ? (this._register_single(eu, e),
                          this.capture("$create_alias", {
                            alias: e,
                            distinct_id: t,
                          }))
                        : (U.warn(
                            "alias matches current distinct_id - skipping api call."
                          ),
                          this.identify(e),
                          -1))
                    : void 0;
                },
              },
              {
                key: "set_config",
                value: function (e) {
                  var t,
                    n,
                    i,
                    s,
                    o = r({}, this.config);
                  x(e) &&
                    (Y(this.config, i8(e)),
                    null === (t = this.persistence) ||
                      void 0 === t ||
                      t.update_config(this.config, o),
                    (this.sessionPersistence =
                      "sessionStorage" === this.config.persistence
                        ? this.persistence
                        : new t2(
                            r(
                              r({}, this.config),
                              {},
                              { persistence: "sessionStorage" }
                            )
                          )),
                    e2.is_supported() &&
                      "true" === e2.get("ph_debug") &&
                      (this.config.debug = !0),
                    this.config.debug && (g.DEBUG = !0),
                    null === (n = this.sessionRecording) ||
                      void 0 === n ||
                      n.startIfEnabledOrStop(),
                    null === (i = this.autocapture) ||
                      void 0 === i ||
                      i.startIfEnabled(),
                    null === (s = this.heatmaps) ||
                      void 0 === s ||
                      s.startIfEnabled(),
                    this.surveys.loadIfEnabled(),
                    this._sync_opt_out_with_persistence());
                },
              },
              {
                key: "startSessionRecording",
                value: function (e) {
                  if (null != e && e.sampling) {
                    var t,
                      n,
                      i =
                        null === (t = this.sessionManager) || void 0 === t
                          ? void 0
                          : t.checkAndGetSessionAndWindowId();
                    null === (n = this.persistence) ||
                      void 0 === n ||
                      n.register(u({}, eb, !0)),
                      U.info(
                        "Session recording started with sampling override for session: ",
                        null == i ? void 0 : i.sessionId
                      );
                  }
                  this.set_config({ disable_session_recording: !1 });
                },
              },
              {
                key: "stopSessionRecording",
                value: function () {
                  this.set_config({ disable_session_recording: !0 });
                },
              },
              {
                key: "sessionRecordingStarted",
                value: function () {
                  var e;
                  return !(
                    null === (e = this.sessionRecording) ||
                    void 0 === e ||
                    !e.started
                  );
                },
              },
              {
                key: "loadToolbar",
                value: function (e) {
                  return this.toolbar.loadToolbar(e);
                },
              },
              {
                key: "get_property",
                value: function (e) {
                  var t;
                  return null === (t = this.persistence) || void 0 === t
                    ? void 0
                    : t.props[e];
                },
              },
              {
                key: "getSessionProperty",
                value: function (e) {
                  var t;
                  return null === (t = this.sessionPersistence) || void 0 === t
                    ? void 0
                    : t.props[e];
                },
              },
              {
                key: "toString",
                value: function () {
                  var e,
                    t =
                      null !== (e = this.config.name) && void 0 !== e ? e : i3;
                  return t !== i3 && (t = i3 + "." + t), t;
                },
              },
              {
                key: "_isIdentified",
                value: function () {
                  var e, t;
                  return (
                    "identified" ===
                      (null === (e = this.persistence) || void 0 === e
                        ? void 0
                        : e.get_property(eT)) ||
                    "identified" ===
                      (null === (t = this.sessionPersistence) || void 0 === t
                        ? void 0
                        : t.get_property(eT))
                  );
                },
              },
              {
                key: "_hasPersonProcessing",
                value: function () {
                  var e, t, n, i;
                  return !(
                    "never" === this.config.person_profiles ||
                    ("identified_only" === this.config.person_profiles &&
                      !this._isIdentified() &&
                      k(this.getGroups()) &&
                      (null === (e = this.persistence) ||
                        void 0 === e ||
                        null === (t = e.props) ||
                        void 0 === t ||
                        !t[eu]) &&
                      (null === (n = this.persistence) ||
                        void 0 === n ||
                        null === (i = n.props) ||
                        void 0 === i ||
                        !i[eO]))
                  );
                },
              },
              {
                key: "_shouldCapturePageleave",
                value: function () {
                  return (
                    !0 === this.config.capture_pageleave ||
                    ("if_capture_pageview" === this.config.capture_pageleave &&
                      this.config.capture_pageview)
                  );
                },
              },
              {
                key: "createPersonProfile",
                value: function () {
                  this._hasPersonProcessing() ||
                    (this._requirePersonProcessing(
                      "posthog.createPersonProfile"
                    ) &&
                      this.setPersonProperties({}, {}));
                },
              },
              {
                key: "_requirePersonProcessing",
                value: function (e) {
                  return "never" === this.config.person_profiles
                    ? (U.error(
                        e +
                          ' was called, but process_person is set to "never". This call will be ignored.'
                      ),
                      !1)
                    : (this._register_single(eO, !0), !0);
                },
              },
              {
                key: "_sync_opt_out_with_persistence",
                value: function () {
                  var e,
                    t,
                    n,
                    i,
                    r = this.consent.isOptedOut(),
                    s = this.config.opt_out_persistence_by_default,
                    o = this.config.disable_persistence || (r && !!s);
                  (null === (e = this.persistence) || void 0 === e
                    ? void 0
                    : e.disabled) !== o &&
                    (null === (n = this.persistence) ||
                      void 0 === n ||
                      n.set_disabled(o)),
                    (null === (t = this.sessionPersistence) || void 0 === t
                      ? void 0
                      : t.disabled) !== o &&
                      (null === (i = this.sessionPersistence) ||
                        void 0 === i ||
                        i.set_disabled(o));
                },
              },
              {
                key: "opt_in_capturing",
                value: function (e) {
                  var t;
                  this.consent.optInOut(!0),
                    this._sync_opt_out_with_persistence(),
                    (P(null == e ? void 0 : e.captureEventName) ||
                      (null != e && e.captureEventName)) &&
                      this.capture(
                        null !==
                          (t = null == e ? void 0 : e.captureEventName) &&
                          void 0 !== t
                          ? t
                          : "$opt_in",
                        null == e ? void 0 : e.captureProperties,
                        { send_instantly: !0 }
                      );
                },
              },
              {
                key: "opt_out_capturing",
                value: function () {
                  this.consent.optInOut(!1),
                    this._sync_opt_out_with_persistence();
                },
              },
              {
                key: "has_opted_in_capturing",
                value: function () {
                  return this.consent.isOptedIn();
                },
              },
              {
                key: "has_opted_out_capturing",
                value: function () {
                  return this.consent.isOptedOut();
                },
              },
              {
                key: "clear_opt_in_out_capturing",
                value: function () {
                  this.consent.reset(), this._sync_opt_out_with_persistence();
                },
              },
              {
                key: "debug",
                value: function (e) {
                  !1 === e
                    ? (null == A ||
                        A.console.log("You've disabled debug mode."),
                      localStorage && localStorage.removeItem("ph_debug"),
                      this.set_config({ debug: !1 }))
                    : (null == A ||
                        A.console.log(
                          "You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."
                        ),
                      localStorage && localStorage.setItem("ph_debug", "true"),
                      this.set_config({ debug: !0 }));
                },
              },
            ]),
            e
          );
        })();
      !(function (e, t) {
        for (var n = 0; n < t.length; n++)
          e.prototype[t[n]] = et(e.prototype[t[n]]);
      })(i9, ["identify"]);
      var i7,
        re,
        rt =
          ((re = i1[i3] = new i9()),
          (function () {
            function e() {
              e.done ||
                ((e.done = !0),
                (i5 = !1),
                X(i1, function (e) {
                  e._dom_loaded();
                }));
            }
            null != D &&
              D.addEventListener &&
              ("complete" === D.readyState
                ? e()
                : D.addEventListener("DOMContentLoaded", e, !1)),
              A && es(A, "load", e, !0);
          })(),
          re);
    },
    3226: function (e, t, n) {
      "use strict";
      n.d(t, {
        U0: function () {
          return a;
        },
        zf: function () {
          return o;
        },
      });
      var i = n(82),
        r = n(2265),
        s = (0, r.createContext)({ client: i.ZP });
      function o(e) {
        var t = e.children,
          n = e.client,
          o = e.apiKey,
          a = e.options,
          l = (0, r.useMemo)(
            function () {
              return (n &&
                o &&
                console.warn(
                  "[PostHog.js] You have provided both a client and an apiKey to PostHogProvider. The apiKey will be ignored in favour of the client."
                ),
              n &&
                a &&
                console.warn(
                  "[PostHog.js] You have provided both a client and options to PostHogProvider. The options will be ignored in favour of the client."
                ),
              n)
                ? n
                : (o &&
                    (i.ZP.__loaded &&
                      console.warn(
                        "[PostHog.js] was already loaded elsewhere. This may cause issues."
                      ),
                    i.ZP.init(o, a)),
                  i.ZP);
            },
            [n, o]
          );
        return r.createElement(s.Provider, { value: { client: l } }, t);
      }
      var a = function () {
        return (0, r.useContext)(s).client;
      };
    },
    6974: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Orbitron_f8a07c', '__Orbitron_Fallback_f8a07c'",
          fontStyle: "normal",
        },
        className: "__className_f8a07c",
        variable: "__variable_f8a07c",
      };
    },
    4839: function (e, t, n) {
      "use strict";
      function i() {
        for (var e, t, n = 0, i = "", r = arguments.length; n < r; n++)
          (e = arguments[n]) &&
            (t = (function e(t) {
              var n,
                i,
                r = "";
              if ("string" == typeof t || "number" == typeof t) r += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var s = t.length;
                  for (n = 0; n < s; n++)
                    t[n] && (i = e(t[n])) && (r && (r += " "), (r += i));
                } else for (i in t) t[i] && (r && (r += " "), (r += i));
              }
              return r;
            })(e)) &&
            (i && (i += " "), (i += t));
        return i;
      }
      n.d(t, {
        W: function () {
          return i;
        },
      }),
        (t.Z = i);
    },
    1298: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return eF;
        },
      });
      var i = n(557),
        r = n(6019);
      let s = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        o = (e) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        a = { type: "keyframes", duration: 0.8 },
        l = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        u = (e, { keyframes: t }) =>
          t.length > 2
            ? a
            : r.G.has(e)
            ? e.startsWith("scale")
              ? o(t[1])
              : s
            : l;
      var c = n(9792),
        d = n(565);
      let h = { current: !1 },
        f = (e) => null !== e;
      function p(e, { repeat: t, repeatType: n = "loop" }, i) {
        let r = e.filter(f),
          s = t && "loop" !== n && t % 2 == 1 ? 0 : r.length - 1;
        return s && void 0 !== i ? i : r[s];
      }
      var g = n(6219),
        v = n(9993),
        m = n(3078);
      function y(e) {
        let t;
        return () => (void 0 === t && (t = e()), t);
      }
      var _ = n(9276),
        b = n(3653),
        w = n(9047),
        x = n(3646);
      let k = (e, t) =>
        "zIndex" !== t &&
        !!(
          "number" == typeof e ||
          Array.isArray(e) ||
          ("string" == typeof e &&
            (x.P.test(e) || "0" === e) &&
            !e.startsWith("url("))
        );
      class P {
        constructor({
          autoplay: e = !0,
          delay: t = 0,
          type: n = "keyframes",
          repeat: i = 0,
          repeatDelay: r = 0,
          repeatType: s = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.options = {
              autoplay: e,
              delay: t,
              type: n,
              repeat: i,
              repeatDelay: r,
              repeatType: s,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (0, b.m)(),
            this._resolved
          );
        }
        onKeyframesResolved(e, t) {
          this.hasAttemptedResolve = !0;
          let {
            name: n,
            type: i,
            velocity: r,
            delay: s,
            onComplete: o,
            onUpdate: a,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (e, t, n, i) {
              let r = e[0];
              if (null === r) return !1;
              if ("display" === t || "visibility" === t) return !0;
              let s = e[e.length - 1],
                o = k(r, t),
                a = k(s, t);
              return (
                (0, w.K)(
                  o === a,
                  `You are trying to animate ${t} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`
                ),
                !!o &&
                  !!a &&
                  ((function (e) {
                    let t = e[0];
                    if (1 === e.length) return !0;
                    for (let n = 0; n < e.length; n++)
                      if (e[n] !== t) return !0;
                  })(e) ||
                    ("spring" === n && i))
              );
            })(e, n, i, r)
          ) {
            if (h.current || !s) {
              null == a || a(p(e, this.options, t)),
                null == o || o(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(e, t);
          !1 !== u &&
            ((this._resolved = { keyframes: e, finalKeyframe: t, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(e, t) {
          return this.currentFinishedPromise.then(e, t);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((e) => {
            this.resolveFinishedPromise = e;
          });
        }
      }
      var S = n(3476);
      function E(e, t, n) {
        let i = Math.max(t - 5, 0);
        return (0, S.R)(n - e(i), t - i);
      }
      var R = n(1506);
      function T(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      let C = ["duration", "bounce"],
        A = ["stiffness", "damping", "mass"];
      function F(e, t) {
        return t.some((t) => void 0 !== e[t]);
      }
      function M({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
        let s;
        let o = e[0],
          a = e[e.length - 1],
          l = { done: !1, value: o },
          {
            stiffness: u,
            damping: c,
            mass: d,
            duration: h,
            velocity: f,
            isResolvedFromDuration: p,
          } = (function (e) {
            let t = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...e,
            };
            if (!F(e, A) && F(e, C)) {
              let n = (function ({
                duration: e = 800,
                bounce: t = 0.25,
                velocity: n = 0,
                mass: r = 1,
              }) {
                let s, o;
                (0, w.K)(
                  e <= (0, i.w)(10),
                  "Spring duration must be 10 seconds or less"
                );
                let a = 1 - t;
                (a = (0, R.u)(0.05, 1, a)),
                  (e = (0, R.u)(0.01, 10, (0, i.X)(e))),
                  a < 1
                    ? ((s = (t) => {
                        let i = t * a,
                          r = i * e;
                        return 0.001 - ((i - n) / T(t, a)) * Math.exp(-r);
                      }),
                      (o = (t) => {
                        let i = t * a * e,
                          r = Math.pow(a, 2) * Math.pow(t, 2) * e,
                          o = Math.exp(-i),
                          l = T(Math.pow(t, 2), a);
                        return (
                          ((i * n + n - r) * o * (-s(t) + 0.001 > 0 ? -1 : 1)) /
                          l
                        );
                      }))
                    : ((s = (t) =>
                        -0.001 + Math.exp(-t * e) * ((t - n) * e + 1)),
                      (o = (t) => e * e * (n - t) * Math.exp(-t * e)));
                let l = (function (e, t, n) {
                  let i = n;
                  for (let n = 1; n < 12; n++) i -= e(i) / t(i);
                  return i;
                })(s, o, 5 / e);
                if (((e = (0, i.w)(e)), isNaN(l)))
                  return { stiffness: 100, damping: 10, duration: e };
                {
                  let t = Math.pow(l, 2) * r;
                  return {
                    stiffness: t,
                    damping: 2 * a * Math.sqrt(r * t),
                    duration: e,
                  };
                }
              })(e);
              (t = { ...t, ...n, mass: 1 }).isResolvedFromDuration = !0;
            }
            return t;
          })({ ...r, velocity: -(0, i.X)(r.velocity || 0) }),
          g = f || 0,
          v = c / (2 * Math.sqrt(u * d)),
          m = a - o,
          y = (0, i.X)(Math.sqrt(u / d)),
          _ = 5 > Math.abs(m);
        if ((n || (n = _ ? 0.01 : 2), t || (t = _ ? 0.005 : 0.5), v < 1)) {
          let e = T(y, v);
          s = (t) =>
            a -
            Math.exp(-v * y * t) *
              (((g + v * y * m) / e) * Math.sin(e * t) + m * Math.cos(e * t));
        } else if (1 === v)
          s = (e) => a - Math.exp(-y * e) * (m + (g + y * m) * e);
        else {
          let e = y * Math.sqrt(v * v - 1);
          s = (t) => {
            let n = Math.exp(-v * y * t),
              i = Math.min(e * t, 300);
            return (
              a -
              (n * ((g + v * y * m) * Math.sinh(i) + e * m * Math.cosh(i))) / e
            );
          };
        }
        return {
          calculatedDuration: (p && h) || null,
          next: (e) => {
            let i = s(e);
            if (p) l.done = e >= h;
            else {
              let r = g;
              0 !== e && (r = v < 1 ? E(s, e, i) : 0);
              let o = Math.abs(r) <= n,
                u = Math.abs(a - i) <= t;
              l.done = o && u;
            }
            return (l.value = l.done ? a : i), l;
          },
        };
      }
      function I({
        keyframes: e,
        velocity: t = 0,
        power: n = 0.8,
        timeConstant: i = 325,
        bounceDamping: r = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: c,
      }) {
        let d, h;
        let f = e[0],
          p = { done: !1, value: f },
          g = (e) => (void 0 !== a && e < a) || (void 0 !== l && e > l),
          v = (e) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - e) < Math.abs(l - e)
              ? a
              : l,
          m = n * t,
          y = f + m,
          _ = void 0 === o ? y : o(y);
        _ !== y && (m = _ - f);
        let b = (e) => -m * Math.exp(-e / i),
          w = (e) => _ + b(e),
          x = (e) => {
            let t = b(e),
              n = w(e);
            (p.done = Math.abs(t) <= u), (p.value = p.done ? _ : n);
          },
          k = (e) => {
            g(p.value) &&
              ((d = e),
              (h = M({
                keyframes: [p.value, v(p.value)],
                velocity: E(w, e, p.value),
                damping: r,
                stiffness: s,
                restDelta: u,
                restSpeed: c,
              })));
          };
        return (
          k(0),
          {
            calculatedDuration: null,
            next: (e) => {
              let t = !1;
              return (h || void 0 !== d || ((t = !0), x(e), k(e)),
              void 0 !== d && e >= d)
                ? h.next(e - d)
                : (t || x(e), p);
            },
          }
        );
      }
      let O = (e, t, n) =>
        (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
      function j(e, t, n, i) {
        if (e === t && n === i) return _.Z;
        let r = (t) =>
          (function (e, t, n, i, r) {
            let s, o;
            let a = 0;
            do (s = O((o = t + (n - t) / 2), i, r) - e) > 0 ? (n = o) : (t = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(t, 0, 1, e, n);
        return (e) => (0 === e || 1 === e ? e : O(r(e), t, i));
      }
      let D = j(0.42, 0, 1, 1),
        L = j(0, 0, 0.58, 1),
        $ = j(0.42, 0, 0.58, 1),
        N = (e) => Array.isArray(e) && "number" != typeof e[0];
      var V = n(8536),
        B = n(3108),
        q = n(2718);
      let z = j(0.33, 1.53, 0.69, 0.99),
        U = (0, q.M)(z),
        W = (0, B.o)(U),
        H = {
          linear: _.Z,
          easeIn: D,
          easeInOut: $,
          easeOut: L,
          circIn: V.Z7,
          circInOut: V.X7,
          circOut: V.Bn,
          backIn: U,
          backInOut: W,
          backOut: z,
          anticipate: (e) =>
            (e *= 2) < 1 ? 0.5 * U(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
        },
        G = (e) => {
          if (Array.isArray(e)) {
            (0, w.k)(
              4 === e.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [t, n, i, r] = e;
            return j(t, n, i, r);
          }
          return "string" == typeof e
            ? ((0, w.k)(void 0 !== H[e], `Invalid easing type '${e}'`), H[e])
            : e;
        };
      var X = n(9654),
        Y = n(3217),
        K = n(5004);
      function Z(e, t, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
          ? e + (t - e) * 6 * n
          : n < 0.5
          ? t
          : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e;
      }
      var Q = n(5778),
        J = n(1583),
        ee = n(598);
      function et(e, t) {
        return (n) => (n > 0 ? t : e);
      }
      let en = (e, t, n) => {
          let i = e * e,
            r = n * (t * t - i) + i;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        ei = [Q.$, J.m, ee.J],
        er = (e) => ei.find((t) => t.test(e));
      function es(e) {
        let t = er(e);
        if (
          ((0, w.K)(
            !!t,
            `'${e}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !t)
        )
          return !1;
        let n = t.parse(e);
        return (
          t === ee.J &&
            (n = (function ({ hue: e, saturation: t, lightness: n, alpha: i }) {
              (e /= 360), (n /= 100);
              let r = 0,
                s = 0,
                o = 0;
              if ((t /= 100)) {
                let i = n < 0.5 ? n * (1 + t) : n + t - n * t,
                  a = 2 * n - i;
                (r = Z(a, i, e + 1 / 3)),
                  (s = Z(a, i, e)),
                  (o = Z(a, i, e - 1 / 3));
              } else r = s = o = n;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: i,
              };
            })(n)),
          n
        );
      }
      let eo = (e, t) => {
        let n = es(e),
          i = es(t);
        if (!n || !i) return et(e, t);
        let r = { ...n };
        return (e) => (
          (r.red = en(n.red, i.red, e)),
          (r.green = en(n.green, i.green, e)),
          (r.blue = en(n.blue, i.blue, e)),
          (r.alpha = (0, K.t)(n.alpha, i.alpha, e)),
          J.m.transform(r)
        );
      };
      var ea = n(146),
        el = n(1534);
      let eu = new Set(["none", "hidden"]);
      function ec(e, t) {
        return (n) => (0, K.t)(e, t, n);
      }
      function ed(e) {
        return "number" == typeof e
          ? ec
          : "string" == typeof e
          ? (0, el.t)(e)
            ? et
            : ea.$.test(e)
            ? eo
            : ep
          : Array.isArray(e)
          ? eh
          : "object" == typeof e
          ? ea.$.test(e)
            ? eo
            : ef
          : et;
      }
      function eh(e, t) {
        let n = [...e],
          i = n.length,
          r = e.map((e, n) => ed(e)(e, t[n]));
        return (e) => {
          for (let t = 0; t < i; t++) n[t] = r[t](e);
          return n;
        };
      }
      function ef(e, t) {
        let n = { ...e, ...t },
          i = {};
        for (let r in n)
          void 0 !== e[r] && void 0 !== t[r] && (i[r] = ed(e[r])(e[r], t[r]));
        return (e) => {
          for (let t in i) n[t] = i[t](e);
          return n;
        };
      }
      let ep = (e, t) => {
        let n = x.P.createTransformer(t),
          i = (0, x.V)(e),
          r = (0, x.V)(t);
        return i.indexes.var.length === r.indexes.var.length &&
          i.indexes.color.length === r.indexes.color.length &&
          i.indexes.number.length >= r.indexes.number.length
          ? (eu.has(e) && !r.values.length) || (eu.has(t) && !i.values.length)
            ? eu.has(e)
              ? (n) => (n <= 0 ? e : t)
              : (n) => (n >= 1 ? t : e)
            : (0, X.z)(
                eh(
                  (function (e, t) {
                    var n;
                    let i = [],
                      r = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < t.values.length; s++) {
                      let o = t.types[s],
                        a = e.indexes[o][r[o]],
                        l = null !== (n = e.values[a]) && void 0 !== n ? n : 0;
                      (i[s] = l), r[o]++;
                    }
                    return i;
                  })(i, r),
                  r.values
                ),
                n
              )
          : ((0, w.K)(
              !0,
              `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            et(e, t));
      };
      function eg(e, t, n) {
        return "number" == typeof e &&
          "number" == typeof t &&
          "number" == typeof n
          ? (0, K.t)(e, t, n)
          : ed(e)(e, t);
      }
      function ev({
        duration: e = 300,
        keyframes: t,
        times: n,
        ease: i = "easeInOut",
      }) {
        let r = N(i) ? i.map(G) : G(i),
          s = { done: !1, value: t[0] },
          o = (function (e, t, { clamp: n = !0, ease: i, mixer: r } = {}) {
            let s = e.length;
            if (
              ((0, w.k)(
                s === t.length,
                "Both input and output ranges must be the same length"
              ),
              1 === s)
            )
              return () => t[0];
            if (2 === s && e[0] === e[1]) return () => t[1];
            e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
            let o = (function (e, t, n) {
                let i = [],
                  r = n || eg,
                  s = e.length - 1;
                for (let n = 0; n < s; n++) {
                  let s = r(e[n], e[n + 1]);
                  if (t) {
                    let e = Array.isArray(t) ? t[n] || _.Z : t;
                    s = (0, X.z)(e, s);
                  }
                  i.push(s);
                }
                return i;
              })(t, i, r),
              a = o.length,
              l = (t) => {
                let n = 0;
                if (a > 1) for (; n < e.length - 2 && !(t < e[n + 1]); n++);
                let i = (0, Y.Y)(e[n], e[n + 1], t);
                return o[n](i);
              };
            return n ? (t) => l((0, R.u)(e[0], e[s - 1], t)) : l;
          })(
            (n && n.length === t.length
              ? n
              : (function (e) {
                  let t = [0];
                  return (
                    (function (e, t) {
                      let n = e[e.length - 1];
                      for (let i = 1; i <= t; i++) {
                        let r = (0, Y.Y)(0, t, i);
                        e.push((0, K.t)(n, 1, r));
                      }
                    })(t, e.length - 1),
                    t
                  );
                })(t)
            ).map((t) => t * e),
            t,
            {
              ease: Array.isArray(r)
                ? r
                : t.map(() => r || $).splice(0, t.length - 1),
            }
          );
        return {
          calculatedDuration: e,
          next: (t) => ((s.value = o(t)), (s.done = t >= e), s),
        };
      }
      let em = (e) => {
          let t = ({ timestamp: t }) => e(t);
          return {
            start: () => g.Wi.update(t, !0),
            stop: () => (0, g.Pn)(t),
            now: () =>
              g.frameData.isProcessing ? g.frameData.timestamp : v.X.now(),
          };
        },
        ey = { decay: I, inertia: I, tween: ev, keyframes: ev, spring: M },
        e_ = (e) => e / 100;
      class eb extends P {
        constructor({ KeyframeResolver: e = b.e, ...t }) {
          super(t),
            (this.holdTime = null),
            (this.startTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: e } = this.options;
              e && e();
            });
          let { name: n, motionValue: i, keyframes: r } = this.options,
            s = (e, t) => this.onKeyframesResolved(e, t);
          n && i && i.owner
            ? (this.resolver = i.owner.resolveKeyframes(r, s, n, i))
            : (this.resolver = new e(r, s, n, i)),
            this.resolver.scheduleResolve();
        }
        initPlayback(e) {
          let t, n;
          let {
              type: i = "keyframes",
              repeat: r = 0,
              repeatDelay: s = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = ey[i] || ev;
          l !== ev &&
            "number" != typeof e[0] &&
            ((t = (0, X.z)(e_, eg(e[0], e[1]))), (e = [0, 100]));
          let u = l({ ...this.options, keyframes: e });
          "mirror" === o &&
            (n = l({
              ...this.options,
              keyframes: [...e].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (function (e) {
                let t = 0,
                  n = e.next(t);
                for (; !n.done && t < 2e4; ) (t += 50), (n = e.next(t));
                return t >= 2e4 ? 1 / 0 : t;
              })(u));
          let { calculatedDuration: c } = u,
            d = c + s;
          return {
            generator: u,
            mirroredGenerator: n,
            mapPercentToKeyframes: t,
            calculatedDuration: c,
            resolvedDuration: d,
            totalDuration: d * (r + 1) - s,
          };
        }
        onPostResolved() {
          let { autoplay: e = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && e
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(e, t = !1) {
          let { resolved: n } = this;
          if (!n) {
            let { keyframes: e } = this.options;
            return { done: !0, value: e[e.length - 1] };
          }
          let {
            finalKeyframe: i,
            generator: r,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: c,
          } = n;
          if (null === this.startTime) return r.next(0);
          let {
            delay: d,
            repeat: h,
            repeatType: f,
            repeatDelay: g,
            onUpdate: v,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, e))
            : this.speed < 0 &&
              (this.startTime = Math.min(e - u / this.speed, this.startTime)),
            t
              ? (this.currentTime = e)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(e - this.startTime) * this.speed);
          let m = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? m < 0 : m > u;
          (this.currentTime = Math.max(m, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let _ = this.currentTime,
            b = r;
          if (h) {
            let e = Math.min(this.currentTime, u) / c,
              t = Math.floor(e),
              n = e % 1;
            !n && e >= 1 && (n = 1),
              1 === n && t--,
              (t = Math.min(t, h + 1)) % 2 &&
                ("reverse" === f
                  ? ((n = 1 - n), g && (n -= g / c))
                  : "mirror" === f && (b = s)),
              (_ = (0, R.u)(0, 1, n) * c);
          }
          let w = y ? { done: !1, value: a[0] } : b.next(_);
          o && (w.value = o(w.value));
          let { done: x } = w;
          y ||
            null === l ||
            (x =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let k =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && x));
          return (
            k && void 0 !== i && (w.value = p(a, this.options, i)),
            v && v(w.value),
            k && this.finish(),
            w
          );
        }
        get duration() {
          let { resolved: e } = this;
          return e ? (0, i.X)(e.calculatedDuration) : 0;
        }
        get time() {
          return (0, i.X)(this.currentTime);
        }
        set time(e) {
          (e = (0, i.w)(e)),
            (this.currentTime = e),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = e)
              : this.driver &&
                (this.startTime = this.driver.now() - e / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(e) {
          let t = this.playbackSpeed !== e;
          (this.playbackSpeed = e),
            t && (this.time = (0, i.X)(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: e = em, onPlay: t } = this.options;
          this.driver || (this.driver = e((e) => this.tick(e))), t && t();
          let n = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = n - this.holdTime)
            : (this.startTime && "finished" !== this.state) ||
              (this.startTime = n),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var e;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (e = this.currentTime) && void 0 !== e ? e : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: e } = this.options;
          e && e();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(e) {
          return (this.startTime = 0), this.tick(e, !0);
        }
      }
      let ew = (e) => Array.isArray(e) && "number" == typeof e[0],
        ex = ([e, t, n, i]) => `cubic-bezier(${e}, ${t}, ${n}, ${i})`,
        ek = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: ex([0, 0.65, 0.55, 1]),
          circOut: ex([0.55, 0, 1, 0.45]),
          backIn: ex([0.31, 0.01, 0.66, -0.59]),
          backOut: ex([0.33, 1.53, 0.69, 0.99]),
        };
      function eP(e) {
        return eS(e) || ek.easeOut;
      }
      function eS(e) {
        if (e) return ew(e) ? ex(e) : Array.isArray(e) ? e.map(eP) : ek[e];
      }
      let eE = y(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        eR = new Set(["opacity", "clipPath", "filter", "transform"]);
      class eT extends P {
        constructor(e) {
          super(e);
          let { name: t, motionValue: n, keyframes: i } = this.options;
          (this.resolver = new m.s(
            i,
            (e, t) => this.onKeyframesResolved(e, t),
            t,
            n
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(e, t) {
          var n, i;
          let {
            duration: r = 300,
            times: s,
            ease: o,
            type: a,
            motionValue: l,
            name: u,
          } = this.options;
          if (!(null === (n = l.owner) || void 0 === n ? void 0 : n.current))
            return !1;
          if (
            "spring" === (i = this.options).type ||
            "backgroundColor" === i.name ||
            !(function e(t) {
              return !!(
                !t ||
                ("string" == typeof t && t in ek) ||
                ew(t) ||
                (Array.isArray(t) && t.every(e))
              );
            })(i.ease)
          ) {
            let {
                onComplete: t,
                onUpdate: n,
                motionValue: i,
                ...l
              } = this.options,
              u = (function (e, t) {
                let n = new eb({
                    ...t,
                    keyframes: e,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  i = { done: !1, value: e[0] },
                  r = [],
                  s = 0;
                for (; !i.done && s < 2e4; )
                  r.push((i = n.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: r,
                  duration: s - 10,
                  ease: "linear",
                };
              })(e, l);
            1 === (e = u.keyframes).length && (e[1] = e[0]),
              (r = u.duration),
              (s = u.times),
              (o = u.ease),
              (a = "keyframes");
          }
          let c = (function (
            e,
            t,
            n,
            {
              delay: i = 0,
              duration: r = 300,
              repeat: s = 0,
              repeatType: o = "loop",
              ease: a,
              times: l,
            } = {}
          ) {
            let u = { [t]: n };
            l && (u.offset = l);
            let c = eS(a);
            return (
              Array.isArray(c) && (u.easing = c),
              e.animate(u, {
                delay: i,
                duration: r,
                easing: Array.isArray(c) ? "linear" : c,
                fill: "both",
                iterations: s + 1,
                direction: "reverse" === o ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, e, {
            ...this.options,
            duration: r,
            times: s,
            ease: o,
          });
          return (
            (c.startTime = v.X.now()),
            this.pendingTimeline
              ? ((c.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (c.onfinish = () => {
                  let { onComplete: n } = this.options;
                  l.set(p(e, this.options, t)),
                    n && n(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: c,
              duration: r,
              times: s,
              type: a,
              ease: o,
              keyframes: e,
            }
          );
        }
        get duration() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { duration: t } = e;
          return (0, i.X)(t);
        }
        get time() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { animation: t } = e;
          return (0, i.X)(t.currentTime || 0);
        }
        set time(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: n } = t;
          n.currentTime = (0, i.w)(e);
        }
        get speed() {
          let { resolved: e } = this;
          if (!e) return 1;
          let { animation: t } = e;
          return t.playbackRate;
        }
        set speed(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: n } = t;
          n.playbackRate = e;
        }
        get state() {
          let { resolved: e } = this;
          if (!e) return "idle";
          let { animation: t } = e;
          return t.playState;
        }
        attachTimeline(e) {
          if (this._resolved) {
            let { resolved: t } = this;
            if (!t) return _.Z;
            let { animation: n } = t;
            (n.timeline = e), (n.onfinish = null);
          } else this.pendingTimeline = e;
          return _.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          "finished" === t.playState && this.updateFinishedPromise(), t.play();
        }
        pause() {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          t.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          let { resolved: e } = this;
          if (!e) return;
          let {
            animation: t,
            keyframes: n,
            duration: r,
            type: s,
            ease: o,
            times: a,
          } = e;
          if ("idle" !== t.playState && "finished" !== t.playState) {
            if (this.time) {
              let {
                  motionValue: e,
                  onUpdate: t,
                  onComplete: l,
                  ...u
                } = this.options,
                c = new eb({
                  ...u,
                  keyframes: n,
                  duration: r,
                  type: s,
                  ease: o,
                  times: a,
                  isGenerator: !0,
                }),
                d = (0, i.w)(this.time);
              e.setWithVelocity(c.sample(d - 10).value, c.sample(d).value, 10);
            }
            this.cancel();
          }
        }
        complete() {
          let { resolved: e } = this;
          e && e.animation.finish();
        }
        cancel() {
          let { resolved: e } = this;
          e && e.animation.cancel();
        }
        static supports(e) {
          let {
            motionValue: t,
            name: n,
            repeatDelay: i,
            repeatType: r,
            damping: s,
            type: o,
          } = e;
          return (
            eE() &&
            n &&
            eR.has(n) &&
            t &&
            t.owner &&
            t.owner.current instanceof HTMLElement &&
            !t.owner.getProps().onUpdate &&
            !i &&
            "mirror" !== r &&
            0 !== s &&
            "inertia" !== o
          );
        }
      }
      let eC = y(() => void 0 !== window.ScrollTimeline);
      class eA {
        constructor(e) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = e.filter(Boolean));
        }
        then(e, t) {
          return Promise.all(this.animations).then(e).catch(t);
        }
        getAll(e) {
          return this.animations[0][e];
        }
        setAll(e, t) {
          for (let n = 0; n < this.animations.length; n++)
            this.animations[n][e] = t;
        }
        attachTimeline(e) {
          let t = this.animations.map((t) => {
            if (!eC() || !t.attachTimeline)
              return (
                t.pause(),
                (function (e, t) {
                  let n;
                  let i = () => {
                    let { currentTime: i } = t,
                      r = (null === i ? 0 : i.value) / 100;
                    n !== r && e(r), (n = r);
                  };
                  return g.Wi.update(i, !0), () => (0, g.Pn)(i);
                })((e) => {
                  t.time = t.duration * e;
                }, e)
              );
            t.attachTimeline(e);
          });
          return () => {
            t.forEach((e, t) => {
              e && e(), this.animations[t].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(e) {
          this.setAll("time", e);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(e) {
          this.setAll("speed", e);
        }
        get duration() {
          let e = 0;
          for (let t = 0; t < this.animations.length; t++)
            e = Math.max(e, this.animations[t].duration);
          return e;
        }
        runAll(e) {
          this.animations.forEach((t) => t[e]());
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      let eF =
        (e, t, n, r = {}, s, o) =>
        (a) => {
          let l = (0, c.e)(r, e) || {},
            f = l.delay || r.delay || 0,
            { elapsed: v = 0 } = r;
          v -= (0, i.w)(f);
          let m = {
            keyframes: Array.isArray(n) ? n : [null, n],
            ease: "easeOut",
            velocity: t.getVelocity(),
            ...l,
            delay: -v,
            onUpdate: (e) => {
              t.set(e), l.onUpdate && l.onUpdate(e);
            },
            onComplete: () => {
              a(), l.onComplete && l.onComplete();
            },
            name: e,
            motionValue: t,
            element: o ? void 0 : s,
          };
          (0, c.r)(l) || (m = { ...m, ...u(e, m) }),
            m.duration && (m.duration = (0, i.w)(m.duration)),
            m.repeatDelay && (m.repeatDelay = (0, i.w)(m.repeatDelay)),
            void 0 !== m.from && (m.keyframes[0] = m.from);
          let y = !1;
          if (
            ((!1 !== m.type && (0 !== m.duration || m.repeatDelay)) ||
              ((m.duration = 0), 0 !== m.delay || (y = !0)),
            (h.current || d.c.skipAnimations) &&
              ((y = !0), (m.duration = 0), (m.delay = 0)),
            y && !o && void 0 !== t.get())
          ) {
            let e = p(m.keyframes, l);
            if (void 0 !== e)
              return (
                g.Wi.update(() => {
                  m.onUpdate(e), m.onComplete();
                }),
                new eA([])
              );
          }
          return !o && eT.supports(m) ? new eT(m) : new eb(m);
        };
    },
    3153: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return p;
        },
      });
      var i = n(352),
        r = n(6019),
        s = n(1298),
        o = n(4894),
        a = n(6159),
        l = n(9792),
        u = n(2087),
        c = n(6219);
      function d(e, t, { delay: n = 0, transitionOverride: i, type: d } = {}) {
        var h;
        let {
            transition: f = e.getDefaultTransition(),
            transitionEnd: p,
            ...g
          } = t,
          v = e.getValue("willChange");
        i && (f = i);
        let m = [],
          y = d && e.animationState && e.animationState.getState()[d];
        for (let t in g) {
          let i = e.getValue(
              t,
              null !== (h = e.latestValues[t]) && void 0 !== h ? h : null
            ),
            a = g[t];
          if (
            void 0 === a ||
            (y &&
              (function ({ protectedKeys: e, needsAnimating: t }, n) {
                let i = e.hasOwnProperty(n) && !0 !== t[n];
                return (t[n] = !1), i;
              })(y, t))
          )
            continue;
          let d = { delay: n, elapsed: 0, ...(0, l.e)(f || {}, t) },
            p = !1;
          if (window.HandoffAppearAnimations) {
            let n = (0, u.s)(e);
            if (n) {
              let e = window.HandoffAppearAnimations(n, t, i, c.Wi);
              null !== e && ((d.elapsed = e), (p = !0));
            }
          }
          i.start(
            (0, s.v)(
              t,
              i,
              a,
              e.shouldReduceMotion && r.G.has(t) ? { type: !1 } : d,
              e,
              p
            )
          );
          let _ = i.animation;
          _ &&
            ((0, o.L)(v) && (v.add(t), _.then(() => v.remove(t))), m.push(_));
        }
        return (
          p &&
            Promise.all(m).then(() => {
              c.Wi.update(() => {
                p && (0, a.C)(e, p);
              });
            }),
          m
        );
      }
      function h(e, t, n = {}) {
        var r;
        let s = (0, i.x)(
            e,
            t,
            "exit" === n.type
              ? null === (r = e.presenceContext) || void 0 === r
                ? void 0
                : r.custom
              : void 0
          ),
          { transition: o = e.getDefaultTransition() || {} } = s || {};
        n.transitionOverride && (o = n.transitionOverride);
        let a = s ? () => Promise.all(d(e, s, n)) : () => Promise.resolve(),
          l =
            e.variantChildren && e.variantChildren.size
              ? (i = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: s,
                    staggerDirection: a,
                  } = o;
                  return (function (e, t, n = 0, i = 0, r = 1, s) {
                    let o = [],
                      a = (e.variantChildren.size - 1) * i,
                      l = 1 === r ? (e = 0) => e * i : (e = 0) => a - e * i;
                    return (
                      Array.from(e.variantChildren)
                        .sort(f)
                        .forEach((e, i) => {
                          e.notify("AnimationStart", t),
                            o.push(
                              h(e, t, { ...s, delay: n + l(i) }).then(() =>
                                e.notify("AnimationComplete", t)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(e, t, r + i, s, a, n);
                }
              : () => Promise.resolve(),
          { when: u } = o;
        if (!u) return Promise.all([a(), l(n.delay)]);
        {
          let [e, t] = "beforeChildren" === u ? [a, l] : [l, a];
          return e().then(() => t());
        }
      }
      function f(e, t) {
        return e.sortNodePosition(t);
      }
      function p(e, t, n = {}) {
        let r;
        if ((e.notify("AnimationStart", t), Array.isArray(t)))
          r = Promise.all(t.map((t) => h(e, t, n)));
        else if ("string" == typeof t) r = h(e, t, n);
        else {
          let s = "function" == typeof t ? (0, i.x)(e, t, n.custom) : t;
          r = Promise.all(d(e, s, n));
        }
        return r.then(() => {
          c.Wi.postRender(() => {
            e.notify("AnimationComplete", t);
          });
        });
      }
    },
    5908: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return i;
        },
      });
      let i = "data-" + (0, n(1580).D)("framerAppearId");
    },
    2087: function (e, t, n) {
      "use strict";
      n.d(t, {
        s: function () {
          return r;
        },
      });
      var i = n(5908);
      function r(e) {
        return e.getProps()[i.M];
      }
    },
    6925: function (e, t, n) {
      "use strict";
      n.d(t, {
        C: function () {
          return i;
        },
      });
      let i = (e) => Array.isArray(e);
    },
    9792: function (e, t, n) {
      "use strict";
      function i({
        when: e,
        delay: t,
        delayChildren: n,
        staggerChildren: i,
        staggerDirection: r,
        repeat: s,
        repeatType: o,
        repeatDelay: a,
        from: l,
        elapsed: u,
        ...c
      }) {
        return !!Object.keys(c).length;
      }
      function r(e, t) {
        return e[t] || e.default || e;
      }
      n.d(t, {
        e: function () {
          return r;
        },
        r: function () {
          return i;
        },
      });
    },
    5127: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return y;
        },
      });
      var i = n(7437),
        r = n(2265),
        s = n(9033);
      function o() {
        let e = (0, r.useRef)(!1);
        return (
          (0, s.L)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
      var a = n(6219),
        l = n(7797),
        u = n(458),
        c = n(9791);
      class d extends r.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function h({ children: e, isPresent: t }) {
        let n = (0, r.useId)(),
          s = (0, r.useRef)(null),
          o = (0, r.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: a } = (0, r.useContext)(c._);
        return (
          (0, r.useInsertionEffect)(() => {
            let { width: e, height: i, top: r, left: l } = o.current;
            if (t || !s.current || !e || !i) return;
            s.current.dataset.motionPopId = n;
            let u = document.createElement("style");
            return (
              a && (u.nonce = a),
              document.head.appendChild(u),
              u.sheet &&
                u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${i}px !important;
            top: ${r}px !important;
            left: ${l}px !important;
          }
        `),
              () => {
                document.head.removeChild(u);
              }
            );
          }, [t]),
          (0, i.jsx)(d, {
            isPresent: t,
            childRef: s,
            sizeRef: o,
            children: r.cloneElement(e, { ref: s }),
          })
        );
      }
      let f = ({
        children: e,
        initial: t,
        isPresent: n,
        onExitComplete: s,
        custom: o,
        presenceAffectsLayout: a,
        mode: c,
      }) => {
        let d = (0, u.h)(p),
          f = (0, r.useId)(),
          g = (0, r.useMemo)(
            () => ({
              id: f,
              initial: t,
              isPresent: n,
              custom: o,
              onExitComplete: (e) => {
                for (let t of (d.set(e, !0), d.values())) if (!t) return;
                s && s();
              },
              register: (e) => (d.set(e, !1), () => d.delete(e)),
            }),
            a ? [Math.random()] : [n]
          );
        return (
          (0, r.useMemo)(() => {
            d.forEach((e, t) => d.set(t, !1));
          }, [n]),
          r.useEffect(() => {
            n || d.size || !s || s();
          }, [n]),
          "popLayout" === c &&
            (e = (0, i.jsx)(h, { isPresent: n, children: e })),
          (0, i.jsx)(l.O.Provider, { value: g, children: e })
        );
      };
      function p() {
        return new Map();
      }
      var g = n(5050),
        v = n(9047);
      let m = (e) => e.key || "",
        y = ({
          children: e,
          custom: t,
          initial: n = !0,
          onExitComplete: l,
          exitBeforeEnter: u,
          presenceAffectsLayout: c = !0,
          mode: d = "sync",
        }) => {
          var h;
          (0, v.k)(!u, "Replace exitBeforeEnter with mode='wait'");
          let p =
              (0, r.useContext)(g.p).forceRender ||
              (function () {
                let e = o(),
                  [t, n] = (0, r.useState)(0),
                  i = (0, r.useCallback)(() => {
                    e.current && n(t + 1);
                  }, [t]);
                return [(0, r.useCallback)(() => a.Wi.postRender(i), [i]), t];
              })()[0],
            y = o(),
            _ = (function (e) {
              let t = [];
              return (
                r.Children.forEach(e, (e) => {
                  (0, r.isValidElement)(e) && t.push(e);
                }),
                t
              );
            })(e),
            b = _,
            w = (0, r.useRef)(new Map()).current,
            x = (0, r.useRef)(b),
            k = (0, r.useRef)(new Map()).current,
            P = (0, r.useRef)(!0);
          if (
            ((0, s.L)(() => {
              (P.current = !1),
                (function (e, t) {
                  e.forEach((e) => {
                    let n = m(e);
                    t.set(n, e);
                  });
                })(_, k),
                (x.current = b);
            }),
            (h = () => {
              (P.current = !0), k.clear(), w.clear();
            }),
            (0, r.useEffect)(() => () => h(), []),
            P.current)
          )
            return (0, i.jsx)(i.Fragment, {
              children: b.map((e) =>
                (0, i.jsx)(
                  f,
                  {
                    isPresent: !0,
                    initial: !!n && void 0,
                    presenceAffectsLayout: c,
                    mode: d,
                    children: e,
                  },
                  m(e)
                )
              ),
            });
          b = [...b];
          let S = x.current.map(m),
            E = _.map(m),
            R = S.length;
          for (let e = 0; e < R; e++) {
            let t = S[e];
            -1 !== E.indexOf(t) || w.has(t) || w.set(t, void 0);
          }
          return (
            "wait" === d && w.size && (b = []),
            w.forEach((e, n) => {
              if (-1 !== E.indexOf(n)) return;
              let r = k.get(n);
              if (!r) return;
              let s = S.indexOf(n),
                o = e;
              o ||
                ((o = (0, i.jsx)(
                  f,
                  {
                    isPresent: !1,
                    onExitComplete: () => {
                      w.delete(n);
                      let e = Array.from(k.keys()).filter(
                        (e) => !E.includes(e)
                      );
                      if (
                        (e.forEach((e) => k.delete(e)),
                        (x.current = _.filter((t) => {
                          let i = m(t);
                          return i === n || e.includes(i);
                        })),
                        !w.size)
                      ) {
                        if (!1 === y.current) return;
                        p(), l && l();
                      }
                    },
                    custom: t,
                    presenceAffectsLayout: c,
                    mode: d,
                    children: r,
                  },
                  m(r)
                )),
                w.set(n, o)),
                b.splice(s, 0, o);
            }),
            (b = b.map((e) => {
              let t = e.key;
              return w.has(t)
                ? e
                : (0, i.jsx)(
                    f,
                    {
                      isPresent: !0,
                      presenceAffectsLayout: c,
                      mode: d,
                      children: e,
                    },
                    m(e)
                  );
            })),
            (0, i.jsx)(i.Fragment, {
              children: w.size ? b : b.map((e) => (0, r.cloneElement)(e)),
            })
          );
        };
    },
    5050: function (e, t, n) {
      "use strict";
      n.d(t, {
        p: function () {
          return i;
        },
      });
      let i = (0, n(2265).createContext)({});
    },
    9791: function (e, t, n) {
      "use strict";
      n.d(t, {
        _: function () {
          return i;
        },
      });
      let i = (0, n(2265).createContext)({
        transformPagePoint: (e) => e,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    7797: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return i;
        },
      });
      let i = (0, n(2265).createContext)(null);
    },
    8536: function (e, t, n) {
      "use strict";
      n.d(t, {
        Bn: function () {
          return o;
        },
        X7: function () {
          return a;
        },
        Z7: function () {
          return s;
        },
      });
      var i = n(3108),
        r = n(2718);
      let s = (e) => 1 - Math.sin(Math.acos(e)),
        o = (0, r.M)(s),
        a = (0, i.o)(s);
    },
    3108: function (e, t, n) {
      "use strict";
      n.d(t, {
        o: function () {
          return i;
        },
      });
      let i = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
    },
    2718: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return i;
        },
      });
      let i = (e) => (t) => 1 - e(1 - t);
    },
    2981: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(565);
      class r {
        constructor() {
          (this.order = []), (this.scheduled = new Set());
        }
        add(e) {
          if (!this.scheduled.has(e))
            return this.scheduled.add(e), this.order.push(e), !0;
        }
        remove(e) {
          let t = this.order.indexOf(e);
          -1 !== t && (this.order.splice(t, 1), this.scheduled.delete(e));
        }
        clear() {
          (this.order.length = 0), this.scheduled.clear();
        }
      }
      let s = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function o(e, t) {
        let n = !1,
          o = !0,
          a = { delta: 0, timestamp: 0, isProcessing: !1 },
          l = s.reduce(
            (e, t) => (
              (e[t] = (function (e) {
                let t = new r(),
                  n = new r(),
                  i = 0,
                  s = !1,
                  o = !1,
                  a = new WeakSet(),
                  l = {
                    schedule: (e, r = !1, o = !1) => {
                      let l = o && s,
                        u = l ? t : n;
                      return (
                        r && a.add(e),
                        u.add(e) && l && s && (i = t.order.length),
                        e
                      );
                    },
                    cancel: (e) => {
                      n.remove(e), a.delete(e);
                    },
                    process: (r) => {
                      if (s) {
                        o = !0;
                        return;
                      }
                      if (
                        ((s = !0),
                        ([t, n] = [n, t]),
                        n.clear(),
                        (i = t.order.length))
                      )
                        for (let n = 0; n < i; n++) {
                          let i = t.order[n];
                          a.has(i) && (l.schedule(i), e()), i(r);
                        }
                      (s = !1), o && ((o = !1), l.process(r));
                    },
                  };
                return l;
              })(() => (n = !0))),
              e
            ),
            {}
          ),
          u = (e) => {
            l[e].process(a);
          },
          c = () => {
            let r = i.c.useManualTiming ? a.timestamp : performance.now();
            (n = !1),
              (a.delta = o
                ? 1e3 / 60
                : Math.max(Math.min(r - a.timestamp, 40), 1)),
              (a.timestamp = r),
              (a.isProcessing = !0),
              s.forEach(u),
              (a.isProcessing = !1),
              n && t && ((o = !1), e(c));
          },
          d = () => {
            (n = !0), (o = !0), a.isProcessing || e(c);
          };
        return {
          schedule: s.reduce((e, t) => {
            let i = l[t];
            return (
              (e[t] = (e, t = !1, r = !1) => (n || d(), i.schedule(e, t, r))), e
            );
          }, {}),
          cancel: (e) => s.forEach((t) => l[t].cancel(e)),
          state: a,
          steps: l,
        };
      }
    },
    6219: function (e, t, n) {
      "use strict";
      n.d(t, {
        Pn: function () {
          return s;
        },
        S6: function () {
          return a;
        },
        Wi: function () {
          return r;
        },
        frameData: function () {
          return o;
        },
      });
      var i = n(9276);
      let {
        schedule: r,
        cancel: s,
        state: o,
        steps: a,
      } = (0, n(2981).Z)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : i.Z,
        !0
      );
    },
    9993: function (e, t, n) {
      "use strict";
      let i;
      n.d(t, {
        X: function () {
          return a;
        },
      });
      var r = n(565),
        s = n(6219);
      function o() {
        i = void 0;
      }
      let a = {
        now: () => (
          void 0 === i &&
            a.set(
              s.frameData.isProcessing || r.c.useManualTiming
                ? s.frameData.timestamp
                : performance.now()
            ),
          i
        ),
        set: (e) => {
          (i = e), queueMicrotask(o);
        },
      };
    },
    3078: function (e, t, n) {
      "use strict";
      n.d(t, {
        s: function () {
          return p;
        },
      });
      var i = n(9102),
        r = n(9047),
        s = n(4386),
        o = n(1534);
      let a = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var l = n(5014),
        u = n(3769),
        c = n(3653),
        d = n(3646),
        h = n(6450);
      let f = new Set(["auto", "none", "0"]);
      class p extends c.e {
        constructor(e, t, n, i) {
          super(e, t, n, i, null == i ? void 0 : i.owner, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: e, element: t, name: n } = this;
          if (!t.current) return;
          super.readKeyframes();
          for (let n = 0; n < e.length; n++) {
            let i = e[n];
            if ("string" == typeof i && ((i = i.trim()), (0, o.t)(i))) {
              let l = (function e(t, n, i = 1) {
                (0, r.k)(
                  i <= 4,
                  `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
                );
                let [l, u] = (function (e) {
                  let t = a.exec(e);
                  if (!t) return [,];
                  let [, n, i, r] = t;
                  return [`--${null != n ? n : i}`, r];
                })(t);
                if (!l) return;
                let c = window.getComputedStyle(n).getPropertyValue(l);
                if (c) {
                  let e = c.trim();
                  return (0, s.P)(e) ? parseFloat(e) : e;
                }
                return (0, o.t)(u) ? e(u, n, i + 1) : u;
              })(i, t.current);
              void 0 !== l && (e[n] = l),
                n === e.length - 1 && (this.finalKeyframe = i);
            }
          }
          if ((this.resolveNoneKeyframes(), !l.z2.has(n) || 2 !== e.length))
            return;
          let [i, c] = e,
            d = (0, u.C)(i),
            h = (0, u.C)(c);
          if (d !== h) {
            if ((0, l.mP)(d) && (0, l.mP)(h))
              for (let t = 0; t < e.length; t++) {
                let n = e[t];
                "string" == typeof n && (e[t] = parseFloat(n));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: e, name: t } = this,
            n = [];
          for (let t = 0; t < e.length; t++) {
            var r;
            ("number" == typeof (r = e[t])
              ? 0 === r
              : null === r || "none" === r || "0" === r || (0, i.W)(r)) &&
              n.push(t);
          }
          n.length &&
            (function (e, t, n) {
              let i,
                r = 0;
              for (; r < e.length && !i; ) {
                let t = e[r];
                "string" == typeof t &&
                  !f.has(t) &&
                  (0, d.V)(t).values.length &&
                  (i = e[r]),
                  r++;
              }
              if (i && n) for (let r of t) e[r] = (0, h.T)(n, i);
            })(e, n, t);
        }
        measureInitialState() {
          let { element: e, unresolvedKeyframes: t, name: n } = this;
          if (!e.current) return;
          "height" === n && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = l.lw[n](
              e.measureViewportBox(),
              window.getComputedStyle(e.current)
            )),
            (t[0] = this.measuredOrigin);
          let i = t[t.length - 1];
          void 0 !== i && e.getValue(n, i).jump(i, !1);
        }
        measureEndState() {
          var e;
          let { element: t, name: n, unresolvedKeyframes: i } = this;
          if (!t.current) return;
          let r = t.getValue(n);
          r && r.jump(this.measuredOrigin, !1);
          let s = i.length - 1,
            o = i[s];
          (i[s] = l.lw[n](
            t.measureViewportBox(),
            window.getComputedStyle(t.current)
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (e = this.removedTransforms) || void 0 === e
              ? void 0
              : e.length) &&
              this.removedTransforms.forEach(([e, n]) => {
                t.getValue(e).set(n);
              }),
            this.resolveNoneKeyframes();
        }
      }
    },
    1419: function (e, t, n) {
      "use strict";
      n.d(t, {
        E: function () {
          return n4;
        },
      });
      var i,
        r = n(7437),
        s = n(2265),
        o = n(9791);
      let a = (0, s.createContext)({});
      var l = n(7797),
        u = n(9033);
      let c = (0, s.createContext)({ strict: !1 });
      var d = n(5908);
      let { schedule: h, cancel: f } = (0, n(2981).Z)(queueMicrotask, !1);
      function p(e) {
        return (
          e &&
          "object" == typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      function g(e) {
        return "string" == typeof e || Array.isArray(e);
      }
      function v(e) {
        return (
          null !== e && "object" == typeof e && "function" == typeof e.start
        );
      }
      let m = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        y = ["initial", ...m];
      function _(e) {
        return v(e.animate) || y.some((t) => g(e[t]));
      }
      function b(e) {
        return !!(_(e) || e.variants);
      }
      function w(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      let x = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        k = {};
      for (let e in x) k[e] = { isEnabled: (t) => x[e].some((e) => !!t[e]) };
      var P = n(7282),
        S = n(5050);
      let E = (0, s.createContext)({}),
        R = Symbol.for("motionComponentSymbol"),
        T = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function C(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (T.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
        return !1;
      }
      let A = {};
      var F = n(6019);
      function M(e, { layout: t, layoutId: n }) {
        return (
          F.G.has(e) ||
          e.startsWith("origin") ||
          ((t || void 0 !== n) && (!!A[e] || "opacity" === e))
        );
      }
      var I = n(8322);
      let O = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        j = F._.length;
      var D = n(1534);
      let L = (e, t) => (t && "number" == typeof e ? t.transform(e) : e);
      var $ = n(7755);
      function N(e, t, n, i) {
        let { style: r, vars: s, transform: o, transformOrigin: a } = e,
          l = !1,
          u = !1,
          c = !0;
        for (let e in t) {
          let n = t[e];
          if ((0, D.f)(e)) {
            s[e] = n;
            continue;
          }
          let i = $.j[e],
            d = L(n, i);
          if (F.G.has(e)) {
            if (((l = !0), (o[e] = d), !c)) continue;
            n !== (i.default || 0) && (c = !1);
          } else e.startsWith("origin") ? ((u = !0), (a[e] = d)) : (r[e] = d);
        }
        if (
          (!t.transform &&
            (l || i
              ? (r.transform = (function (
                  e,
                  {
                    enableHardwareAcceleration: t = !0,
                    allowTransformNone: n = !0,
                  },
                  i,
                  r
                ) {
                  let s = "";
                  for (let t = 0; t < j; t++) {
                    let n = F._[t];
                    if (void 0 !== e[n]) {
                      let t = O[n] || n;
                      s += `${t}(${e[n]}) `;
                    }
                  }
                  return (
                    t && !e.z && (s += "translateZ(0)"),
                    (s = s.trim()),
                    r ? (s = r(e, i ? "" : s)) : n && i && (s = "none"),
                    s
                  );
                })(e.transform, n, c, i))
              : r.transform && (r.transform = "none")),
          u)
        ) {
          let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = a;
          r.transformOrigin = `${e} ${t} ${n}`;
        }
      }
      let V = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function B(e, t, n) {
        for (let i in t) (0, I.i)(t[i]) || M(i, n) || (e[i] = t[i]);
      }
      let q = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function z(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          e.startsWith("onLayout") ||
          q.has(e)
        );
      }
      let U = (e) => !z(e);
      try {
        (i = require("@emotion/is-prop-valid").default) &&
          (U = (e) => (e.startsWith("on") ? !z(e) : i(e)));
      } catch (e) {}
      var W = n(5480);
      function H(e, t, n) {
        return "string" == typeof e ? e : W.px.transform(t + n * e);
      }
      let G = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        X = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function Y(
        e,
        {
          attrX: t,
          attrY: n,
          attrScale: i,
          originX: r,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        c,
        d,
        h
      ) {
        if ((N(e, u, c, h), d)) {
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
          return;
        }
        (e.attrs = e.style), (e.style = {});
        let { attrs: f, style: p, dimensions: g } = e;
        f.transform && (g && (p.transform = f.transform), delete f.transform),
          g &&
            (void 0 !== r || void 0 !== s || p.transform) &&
            (p.transformOrigin = (function (e, t, n) {
              let i = H(t, e.x, e.width),
                r = H(n, e.y, e.height);
              return `${i} ${r}`;
            })(g, void 0 !== r ? r : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== t && (f.x = t),
          void 0 !== n && (f.y = n),
          void 0 !== i && (f.scale = i),
          void 0 !== o &&
            (function (e, t, n = 1, i = 0, r = !0) {
              e.pathLength = 1;
              let s = r ? G : X;
              e[s.offset] = W.px.transform(-i);
              let o = W.px.transform(t),
                a = W.px.transform(n);
              e[s.array] = `${o} ${a}`;
            })(f, o, a, l, !1);
      }
      let K = () => ({ ...V(), attrs: {} }),
        Z = (e) => "string" == typeof e && "svg" === e.toLowerCase();
      var Q = n(1580);
      function J(e, { style: t, vars: n }, i, r) {
        for (let s in (Object.assign(e.style, t, r && r.getProjectionStyles(i)),
        n))
          e.style.setProperty(s, n[s]);
      }
      let ee = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function et(e, t, n, i) {
        for (let n in (J(e, t, void 0, i), t.attrs))
          e.setAttribute(ee.has(n) ? n : (0, Q.D)(n), t.attrs[n]);
      }
      function en(e, t, n) {
        var i;
        let { style: r } = e,
          s = {};
        for (let o in r)
          ((0, I.i)(r[o]) ||
            (t.style && (0, I.i)(t.style[o])) ||
            M(o, e) ||
            (null === (i = null == n ? void 0 : n.getValue(o)) || void 0 === i
              ? void 0
              : i.liveStyle) !== void 0) &&
            (s[o] = r[o]);
        return s;
      }
      function ei(e, t, n) {
        let i = en(e, t, n);
        for (let n in e)
          ((0, I.i)(e[n]) || (0, I.i)(t[n])) &&
            (i[
              -1 !== F._.indexOf(n)
                ? "attr" + n.charAt(0).toUpperCase() + n.substring(1)
                : n
            ] = e[n]);
        return i;
      }
      var er = n(8595),
        es = n(458),
        eo = n(9155);
      function ea(e) {
        let t = (0, I.i)(e) ? e.get() : e;
        return (0, eo.p)(t) ? t.toValue() : t;
      }
      let el = (e) => (t, n) => {
        let i = (0, s.useContext)(a),
          r = (0, s.useContext)(l.O),
          o = () =>
            (function (
              {
                scrapeMotionValuesFromProps: e,
                createRenderState: t,
                onMount: n,
              },
              i,
              r,
              s
            ) {
              let o = {
                latestValues: (function (e, t, n, i) {
                  let r = {},
                    s = i(e, {});
                  for (let e in s) r[e] = ea(s[e]);
                  let { initial: o, animate: a } = e,
                    l = _(e),
                    u = b(e);
                  t &&
                    u &&
                    !l &&
                    !1 !== e.inherit &&
                    (void 0 === o && (o = t.initial),
                    void 0 === a && (a = t.animate));
                  let c = !!n && !1 === n.initial,
                    d = (c = c || !1 === o) ? a : o;
                  return (
                    d &&
                      "boolean" != typeof d &&
                      !v(d) &&
                      (Array.isArray(d) ? d : [d]).forEach((t) => {
                        let n = (0, er.o)(e, t);
                        if (!n) return;
                        let { transitionEnd: i, transition: s, ...o } = n;
                        for (let e in o) {
                          let t = o[e];
                          if (Array.isArray(t)) {
                            let e = c ? t.length - 1 : 0;
                            t = t[e];
                          }
                          null !== t && (r[e] = t);
                        }
                        for (let e in i) r[e] = i[e];
                      }),
                    r
                  );
                })(i, r, s, e),
                renderState: t(),
              };
              return n && (o.mount = (e) => n(i, e, o)), o;
            })(e, t, i, r);
        return n ? o() : (0, es.h)(o);
      };
      var eu = n(6219);
      let ec = {
          useVisualState: el({
            scrapeMotionValuesFromProps: ei,
            createRenderState: K,
            onMount: (e, t, { renderState: n, latestValues: i }) => {
              eu.Wi.read(() => {
                try {
                  n.dimensions =
                    "function" == typeof t.getBBox
                      ? t.getBBox()
                      : t.getBoundingClientRect();
                } catch (e) {
                  n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                eu.Wi.render(() => {
                  Y(
                    n,
                    i,
                    { enableHardwareAcceleration: !1 },
                    Z(t.tagName),
                    e.transformTemplate
                  ),
                    et(t, n);
                });
            },
          }),
        },
        ed = {
          useVisualState: el({
            scrapeMotionValuesFromProps: en,
            createRenderState: V,
          }),
        };
      function eh(e, t, n, i = { passive: !0 }) {
        return e.addEventListener(t, n, i), () => e.removeEventListener(t, n);
      }
      let ef = (e) =>
        "mouse" === e.pointerType
          ? "number" != typeof e.button || e.button <= 0
          : !1 !== e.isPrimary;
      function ep(e, t = "page") {
        return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
      }
      let eg = (e) => (t) => ef(t) && e(t, ep(t));
      function ev(e, t, n, i) {
        return eh(e, t, eg(n), i);
      }
      var em = n(9654);
      function ey(e) {
        let t = null;
        return () =>
          null === t &&
          ((t = e),
          () => {
            t = null;
          });
      }
      let e_ = ey("dragHorizontal"),
        eb = ey("dragVertical");
      function ew(e) {
        let t = !1;
        if ("y" === e) t = eb();
        else if ("x" === e) t = e_();
        else {
          let e = e_(),
            n = eb();
          e && n
            ? (t = () => {
                e(), n();
              })
            : (e && e(), n && n());
        }
        return t;
      }
      function ex() {
        let e = ew(!0);
        return !e || (e(), !1);
      }
      class ek {
        constructor(e) {
          (this.isMounted = !1), (this.node = e);
        }
        update() {}
      }
      function eP(e, t) {
        let n = t ? "onHoverStart" : "onHoverEnd";
        return ev(
          e.current,
          t ? "pointerenter" : "pointerleave",
          (i, r) => {
            if ("touch" === i.pointerType || ex()) return;
            let s = e.getProps();
            e.animationState &&
              s.whileHover &&
              e.animationState.setActive("whileHover", t);
            let o = s[n];
            o && eu.Wi.postRender(() => o(i, r));
          },
          { passive: !e.getProps()[n] }
        );
      }
      class eS extends ek {
        mount() {
          this.unmount = (0, em.z)(eP(this.node, !0), eP(this.node, !1));
        }
        unmount() {}
      }
      class eE extends ek {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let e = !1;
          try {
            e = this.node.current.matches(":focus-visible");
          } catch (t) {
            e = !0;
          }
          e &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, em.z)(
            eh(this.node.current, "focus", () => this.onFocus()),
            eh(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let eR = (e, t) => !!t && (e === t || eR(e, t.parentElement));
      var eT = n(9276);
      function eC(e, t) {
        if (!t) return;
        let n = new PointerEvent("pointer" + e);
        t(n, ep(n));
      }
      class eA extends ek {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = eT.Z),
            (this.removeEndListeners = eT.Z),
            (this.removeAccessibleListeners = eT.Z),
            (this.startPointerPress = (e, t) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let n = this.node.getProps(),
                i = ev(
                  window,
                  "pointerup",
                  (e, t) => {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTap: n,
                        onTapCancel: i,
                        globalTapTarget: r,
                      } = this.node.getProps(),
                      s = r || eR(this.node.current, e.target) ? n : i;
                    s && eu.Wi.update(() => s(e, t));
                  },
                  { passive: !(n.onTap || n.onPointerUp) }
                ),
                r = ev(
                  window,
                  "pointercancel",
                  (e, t) => this.cancelPress(e, t),
                  { passive: !(n.onTapCancel || n.onPointerCancel) }
                );
              (this.removeEndListeners = (0, em.z)(i, r)),
                this.startPress(e, t);
            }),
            (this.startAccessiblePress = () => {
              let e = eh(this.node.current, "keydown", (e) => {
                  "Enter" !== e.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = eh(
                      this.node.current,
                      "keyup",
                      (e) => {
                        "Enter" === e.key &&
                          this.checkPressEnd() &&
                          eC("up", (e, t) => {
                            let { onTap: n } = this.node.getProps();
                            n && eu.Wi.postRender(() => n(e, t));
                          });
                      }
                    )),
                    eC("down", (e, t) => {
                      this.startPress(e, t);
                    }));
                }),
                t = eh(this.node.current, "blur", () => {
                  this.isPressing &&
                    eC("cancel", (e, t) => this.cancelPress(e, t));
                });
              this.removeAccessibleListeners = (0, em.z)(e, t);
            });
        }
        startPress(e, t) {
          this.isPressing = !0;
          let { onTapStart: n, whileTap: i } = this.node.getProps();
          i &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            n && eu.Wi.postRender(() => n(e, t));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !ex()
          );
        }
        cancelPress(e, t) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: n } = this.node.getProps();
          n && eu.Wi.postRender(() => n(e, t));
        }
        mount() {
          let e = this.node.getProps(),
            t = ev(
              e.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(e.onTapStart || e.onPointerStart) }
            ),
            n = eh(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = (0, em.z)(t, n);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let eF = new WeakMap(),
        eM = new WeakMap(),
        eI = (e) => {
          let t = eF.get(e.target);
          t && t(e);
        },
        eO = (e) => {
          e.forEach(eI);
        },
        ej = { some: 0, all: 1 };
      class eD extends ek {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: e = {} } = this.node.getProps(),
            { root: t, margin: n, amount: i = "some", once: r } = e,
            s = {
              root: t ? t.current : void 0,
              rootMargin: n,
              threshold: "number" == typeof i ? i : ej[i],
            };
          return (function (e, t, n) {
            let i = (function ({ root: e, ...t }) {
              let n = e || document;
              eM.has(n) || eM.set(n, {});
              let i = eM.get(n),
                r = JSON.stringify(t);
              return (
                i[r] ||
                  (i[r] = new IntersectionObserver(eO, { root: e, ...t })),
                i[r]
              );
            })(t);
            return (
              eF.set(e, n),
              i.observe(e),
              () => {
                eF.delete(e), i.unobserve(e);
              }
            );
          })(this.node.current, s, (e) => {
            let { isIntersecting: t } = e;
            if (
              this.isInView === t ||
              ((this.isInView = t), r && !t && this.hasEnteredView)
            )
              return;
            t && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", t);
            let { onViewportEnter: n, onViewportLeave: i } =
                this.node.getProps(),
              s = t ? n : i;
            s && s(e);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: e, prevProps: t } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: e = {} }, { viewport: t = {} } = {}) {
              return (n) => e[n] !== t[n];
            })(e, t)
          ) && this.startObserver();
        }
        unmount() {}
      }
      var eL = n(6925);
      function e$(e, t) {
        if (!Array.isArray(t)) return !1;
        let n = t.length;
        if (n !== e.length) return !1;
        for (let i = 0; i < n; i++) if (t[i] !== e[i]) return !1;
        return !0;
      }
      var eN = n(352),
        eV = n(3153);
      let eB = [...m].reverse(),
        eq = m.length;
      function ez(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      class eU extends ek {
        constructor(e) {
          super(e),
            e.animationState ||
              (e.animationState = (function (e) {
                let t = (t) =>
                    Promise.all(
                      t.map(({ animation: t, options: n }) =>
                        (0, eV.d)(e, t, n)
                      )
                    ),
                  n = {
                    animate: ez(!0),
                    whileInView: ez(),
                    whileHover: ez(),
                    whileTap: ez(),
                    whileDrag: ez(),
                    whileFocus: ez(),
                    exit: ez(),
                  },
                  i = !0,
                  r = (t) => (n, i) => {
                    var r;
                    let s = (0, eN.x)(
                      e,
                      i,
                      "exit" === t
                        ? null === (r = e.presenceContext) || void 0 === r
                          ? void 0
                          : r.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: e, transitionEnd: t, ...i } = s;
                      n = { ...n, ...i, ...t };
                    }
                    return n;
                  };
                function s(s) {
                  let o = e.getProps(),
                    a = e.getVariantContext(!0) || {},
                    l = [],
                    u = new Set(),
                    c = {},
                    d = 1 / 0;
                  for (let t = 0; t < eq; t++) {
                    var h;
                    let f = eB[t],
                      p = n[f],
                      m = void 0 !== o[f] ? o[f] : a[f],
                      y = g(m),
                      _ = f === s ? p.isActive : null;
                    !1 === _ && (d = t);
                    let b = m === a[f] && m !== o[f] && y;
                    if (
                      (b && i && e.manuallyAnimateOnMount && (b = !1),
                      (p.protectedKeys = { ...c }),
                      (!p.isActive && null === _) ||
                        (!m && !p.prevProp) ||
                        v(m) ||
                        "boolean" == typeof m)
                    )
                      continue;
                    let w =
                        ((h = p.prevProp),
                        ("string" == typeof m
                          ? m !== h
                          : !!Array.isArray(m) && !e$(m, h)) ||
                          (f === s && p.isActive && !b && y) ||
                          (t > d && y)),
                      x = !1,
                      k = Array.isArray(m) ? m : [m],
                      P = k.reduce(r(f), {});
                    !1 === _ && (P = {});
                    let { prevResolvedValues: S = {} } = p,
                      E = { ...S, ...P },
                      R = (t) => {
                        (w = !0),
                          u.has(t) && ((x = !0), u.delete(t)),
                          (p.needsAnimating[t] = !0);
                        let n = e.getValue(t);
                        n && (n.liveStyle = !1);
                      };
                    for (let e in E) {
                      let t = P[e],
                        n = S[e];
                      if (!c.hasOwnProperty(e))
                        ((0, eL.C)(t) && (0, eL.C)(n) ? e$(t, n) : t === n)
                          ? void 0 !== t && u.has(e)
                            ? R(e)
                            : (p.protectedKeys[e] = !0)
                          : null != t
                          ? R(e)
                          : u.add(e);
                    }
                    (p.prevProp = m),
                      (p.prevResolvedValues = P),
                      p.isActive && (c = { ...c, ...P }),
                      i && e.blockInitialAnimation && (w = !1),
                      w &&
                        (!b || x) &&
                        l.push(
                          ...k.map((e) => ({
                            animation: e,
                            options: { type: f },
                          }))
                        );
                  }
                  if (u.size) {
                    let t = {};
                    u.forEach((n) => {
                      let i = e.getBaseTarget(n),
                        r = e.getValue(n);
                      r && (r.liveStyle = !0), (t[n] = null != i ? i : null);
                    }),
                      l.push({ animation: t });
                  }
                  let f = !!l.length;
                  return (
                    i &&
                      (!1 === o.initial || o.initial === o.animate) &&
                      !e.manuallyAnimateOnMount &&
                      (f = !1),
                    (i = !1),
                    f ? t(l) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: s,
                  setActive: function (t, i) {
                    var r;
                    if (n[t].isActive === i) return Promise.resolve();
                    null === (r = e.variantChildren) ||
                      void 0 === r ||
                      r.forEach((e) => {
                        var n;
                        return null === (n = e.animationState) || void 0 === n
                          ? void 0
                          : n.setActive(t, i);
                      }),
                      (n[t].isActive = i);
                    let o = s(t);
                    for (let e in n) n[e].protectedKeys = {};
                    return o;
                  },
                  setAnimateFunction: function (n) {
                    t = n(e);
                  },
                  getState: () => n,
                };
              })(e));
        }
        updateAnimationControlsSubscription() {
          let { animate: e } = this.node.getProps();
          this.unmount(), v(e) && (this.unmount = e.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: e } = this.node.getProps(),
            { animate: t } = this.node.prevProps || {};
          e !== t && this.updateAnimationControlsSubscription();
        }
        unmount() {}
      }
      let eW = 0;
      class eH extends ek {
        constructor() {
          super(...arguments), (this.id = eW++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === n) return;
          let i = this.node.animationState.setActive("exit", !e);
          t && !e && i.then(() => t(this.id));
        }
        mount() {
          let { register: e } = this.node.presenceContext || {};
          e && (this.unmount = e(this.id));
        }
        unmount() {}
      }
      var eG = n(9047),
        eX = n(557);
      let eY = (e, t) => Math.abs(e - t);
      class eK {
        constructor(
          e,
          t,
          {
            transformPagePoint: n,
            contextWindow: i,
            dragSnapToOrigin: r = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var e, t;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let n = eJ(this.lastMoveEventInfo, this.history),
                i = null !== this.startEvent,
                r =
                  ((e = n.offset),
                  (t = { x: 0, y: 0 }),
                  Math.sqrt(eY(e.x, t.x) ** 2 + eY(e.y, t.y) ** 2) >= 3);
              if (!i && !r) return;
              let { point: s } = n,
                { timestamp: o } = eu.frameData;
              this.history.push({ ...s, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              i ||
                (a && a(this.lastMoveEvent, n),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, n);
            }),
            (this.handlePointerMove = (e, t) => {
              (this.lastMoveEvent = e),
                (this.lastMoveEventInfo = eZ(t, this.transformPagePoint)),
                eu.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (e, t) => {
              this.end();
              let {
                onEnd: n,
                onSessionEnd: i,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = eJ(
                "pointercancel" === e.type
                  ? this.lastMoveEventInfo
                  : eZ(t, this.transformPagePoint),
                this.history
              );
              this.startEvent && n && n(e, s), i && i(e, s);
            }),
            !ef(e))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = t),
            (this.transformPagePoint = n),
            (this.contextWindow = i || window);
          let s = eZ(ep(e), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = eu.frameData;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = t;
          l && l(e, eJ(s, this.history)),
            (this.removeListeners = (0, em.z)(
              ev(this.contextWindow, "pointermove", this.handlePointerMove),
              ev(this.contextWindow, "pointerup", this.handlePointerUp),
              ev(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(e) {
          this.handlers = e;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, eu.Pn)(this.updatePoint);
        }
      }
      function eZ(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function eQ(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function eJ({ point: e }, t) {
        return {
          point: e,
          delta: eQ(e, e0(t)),
          offset: eQ(e, t[0]),
          velocity: (function (e, t) {
            if (e.length < 2) return { x: 0, y: 0 };
            let n = e.length - 1,
              i = null,
              r = e0(e);
            for (
              ;
              n >= 0 &&
              ((i = e[n]), !(r.timestamp - i.timestamp > (0, eX.w)(0.1)));

            )
              n--;
            if (!i) return { x: 0, y: 0 };
            let s = (0, eX.X)(r.timestamp - i.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - i.x) / s, y: (r.y - i.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(t, 0),
        };
      }
      function e0(e) {
        return e[e.length - 1];
      }
      var e1 = n(3217),
        e2 = n(5004);
      function e3(e) {
        return e.max - e.min;
      }
      function e5(e, t = 0, n = 0.01) {
        return Math.abs(e - t) <= n;
      }
      function e6(e, t, n, i = 0.5) {
        (e.origin = i),
          (e.originPoint = (0, e2.t)(t.min, t.max, e.origin)),
          (e.scale = e3(n) / e3(t)),
          (e5(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
          (e.translate = (0, e2.t)(n.min, n.max, e.origin) - e.originPoint),
          (e5(e.translate) || isNaN(e.translate)) && (e.translate = 0);
      }
      function e8(e, t, n, i) {
        e6(e.x, t.x, n.x, i ? i.originX : void 0),
          e6(e.y, t.y, n.y, i ? i.originY : void 0);
      }
      function e4(e, t, n) {
        (e.min = n.min + t.min), (e.max = e.min + e3(t));
      }
      function e9(e, t, n) {
        (e.min = t.min - n.min), (e.max = e.min + e3(t));
      }
      function e7(e, t, n) {
        e9(e.x, t.x, n.x), e9(e.y, t.y, n.y);
      }
      var te = n(1506);
      function tt(e, t, n) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
        };
      }
      function tn(e, t) {
        let n = t.min - e.min,
          i = t.max - e.max;
        return (
          t.max - t.min < e.max - e.min && ([n, i] = [i, n]), { min: n, max: i }
        );
      }
      function ti(e, t, n) {
        return { min: tr(e, t), max: tr(e, n) };
      }
      function tr(e, t) {
        return "number" == typeof e ? e : e[t] || 0;
      }
      let ts = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        to = () => ({ x: ts(), y: ts() }),
        ta = () => ({ min: 0, max: 0 }),
        tl = () => ({ x: ta(), y: ta() });
      function tu(e) {
        return [e("x"), e("y")];
      }
      function tc({ top: e, left: t, right: n, bottom: i }) {
        return { x: { min: t, max: n }, y: { min: e, max: i } };
      }
      function td(e) {
        return void 0 === e || 1 === e;
      }
      function th({ scale: e, scaleX: t, scaleY: n }) {
        return !td(e) || !td(t) || !td(n);
      }
      function tf(e) {
        return (
          th(e) ||
          tp(e) ||
          e.z ||
          e.rotate ||
          e.rotateX ||
          e.rotateY ||
          e.skewX ||
          e.skewY
        );
      }
      function tp(e) {
        var t, n;
        return ((t = e.x) && "0%" !== t) || ((n = e.y) && "0%" !== n);
      }
      function tg(e, t, n, i, r) {
        return void 0 !== r && (e = i + r * (e - i)), i + n * (e - i) + t;
      }
      function tv(e, t = 0, n = 1, i, r) {
        (e.min = tg(e.min, t, n, i, r)), (e.max = tg(e.max, t, n, i, r));
      }
      function tm(e, { x: t, y: n }) {
        tv(e.x, t.translate, t.scale, t.originPoint),
          tv(e.y, n.translate, n.scale, n.originPoint);
      }
      function ty(e) {
        return Number.isInteger(e)
          ? e
          : e > 1.0000000000001 || e < 0.999999999999
          ? e
          : 1;
      }
      function t_(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
      }
      function tb(e, t, [n, i, r]) {
        let s = void 0 !== t[r] ? t[r] : 0.5,
          o = (0, e2.t)(e.min, e.max, s);
        tv(e, t[n], t[i], o, t.scale);
      }
      let tw = ["x", "scaleX", "originX"],
        tx = ["y", "scaleY", "originY"];
      function tk(e, t) {
        tb(e.x, t, tw), tb(e.y, t, tx);
      }
      function tP(e, t) {
        return tc(
          (function (e, t) {
            if (!t) return e;
            let n = t({ x: e.left, y: e.top }),
              i = t({ x: e.right, y: e.bottom });
            return { top: n.y, left: n.x, bottom: i.y, right: i.x };
          })(e.getBoundingClientRect(), t)
        );
      }
      var tS = n(1298);
      let tE = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
        tR = new WeakMap();
      class tT {
        constructor(e) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = tl()),
            (this.visualElement = e);
        }
        start(e, { snapToCursor: t = !1 } = {}) {
          let { presenceContext: n } = this.visualElement;
          if (n && !1 === n.isPresent) return;
          let { dragSnapToOrigin: i } = this.getProps();
          this.panSession = new eK(
            e,
            {
              onSessionStart: (e) => {
                let { dragSnapToOrigin: n } = this.getProps();
                n ? this.pauseAnimation() : this.stopAnimation(),
                  t && this.snapToCursor(ep(e, "page").point);
              },
              onStart: (e, t) => {
                let {
                  drag: n,
                  dragPropagation: i,
                  onDragStart: r,
                } = this.getProps();
                if (
                  n &&
                  !i &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = ew(n)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  tu((e) => {
                    let t = this.getAxisMotionValue(e).get() || 0;
                    if (W.aQ.test(t)) {
                      let { projection: n } = this.visualElement;
                      if (n && n.layout) {
                        let i = n.layout.layoutBox[e];
                        if (i) {
                          let e = e3(i);
                          t = (parseFloat(t) / 100) * e;
                        }
                      }
                    }
                    this.originPoint[e] = t;
                  }),
                  r && eu.Wi.postRender(() => r(e, t));
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (e, t) => {
                let {
                  dragPropagation: n,
                  dragDirectionLock: i,
                  onDirectionLock: r,
                  onDrag: s,
                } = this.getProps();
                if (!n && !this.openGlobalLock) return;
                let { offset: o } = t;
                if (i && null === this.currentDirection) {
                  (this.currentDirection = (function (e, t = 10) {
                    let n = null;
                    return (
                      Math.abs(e.y) > t
                        ? (n = "y")
                        : Math.abs(e.x) > t && (n = "x"),
                      n
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      r &&
                      r(this.currentDirection);
                  return;
                }
                this.updateAxis("x", t.point, o),
                  this.updateAxis("y", t.point, o),
                  this.visualElement.render(),
                  s && s(e, t);
              },
              onSessionEnd: (e, t) => this.stop(e, t),
              resumeAnimation: () =>
                tu((e) => {
                  var t;
                  return (
                    "paused" === this.getAnimationState(e) &&
                    (null === (t = this.getAxisMotionValue(e).animation) ||
                    void 0 === t
                      ? void 0
                      : t.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: i,
              contextWindow: tE(this.visualElement),
            }
          );
        }
        stop(e, t) {
          let n = this.isDragging;
          if ((this.cancel(), !n)) return;
          let { velocity: i } = t;
          this.startAnimation(i);
          let { onDragEnd: r } = this.getProps();
          r && eu.Wi.postRender(() => r(e, t));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: e, animationState: t } = this.visualElement;
          e && (e.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: n } = this.getProps();
          !n &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            t && t.setActive("whileDrag", !1);
        }
        updateAxis(e, t, n) {
          let { drag: i } = this.getProps();
          if (!n || !tC(e, i, this.currentDirection)) return;
          let r = this.getAxisMotionValue(e),
            s = this.originPoint[e] + n[e];
          this.constraints &&
            this.constraints[e] &&
            (s = (function (e, { min: t, max: n }, i) {
              return (
                void 0 !== t && e < t
                  ? (e = i ? (0, e2.t)(t, e, i.min) : Math.max(e, t))
                  : void 0 !== n &&
                    e > n &&
                    (e = i ? (0, e2.t)(n, e, i.max) : Math.min(e, n)),
                e
              );
            })(s, this.constraints[e], this.elastic[e])),
            r.set(s);
        }
        resolveConstraints() {
          var e;
          let { dragConstraints: t, dragElastic: n } = this.getProps(),
            i =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (e = this.visualElement.projection) || void 0 === e
                ? void 0
                : e.layout,
            r = this.constraints;
          t && p(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && i
            ? (this.constraints = (function (
                e,
                { top: t, left: n, bottom: i, right: r }
              ) {
                return { x: tt(e.x, n, r), y: tt(e.y, t, i) };
              })(i.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = (function (e = 0.35) {
              return (
                !1 === e ? (e = 0) : !0 === e && (e = 0.35),
                { x: ti(e, "left", "right"), y: ti(e, "top", "bottom") }
              );
            })(n)),
            r !== this.constraints &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              tu((e) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(e) &&
                  (this.constraints[e] = (function (e, t) {
                    let n = {};
                    return (
                      void 0 !== t.min && (n.min = t.min - e.min),
                      void 0 !== t.max && (n.max = t.max - e.min),
                      n
                    );
                  })(i.layoutBox[e], this.constraints[e]));
              });
        }
        resolveRefConstraints() {
          var e;
          let { dragConstraints: t, onMeasureDragConstraints: n } =
            this.getProps();
          if (!t || !p(t)) return !1;
          let i = t.current;
          (0, eG.k)(
            null !== i,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (function (e, t, n) {
              let i = tP(e, n),
                { scroll: r } = t;
              return r && (t_(i.x, r.offset.x), t_(i.y, r.offset.y)), i;
            })(i, r.root, this.visualElement.getTransformPagePoint()),
            o = { x: tn((e = r.layout.layoutBox).x, s.x), y: tn(e.y, s.y) };
          if (n) {
            let e = n(
              (function ({ x: e, y: t }) {
                return { top: t.min, right: e.max, bottom: t.max, left: e.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!e), e && (o = tc(e));
          }
          return o;
        }
        startAnimation(e) {
          let {
              drag: t,
              dragMomentum: n,
              dragElastic: i,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            tu((o) => {
              if (!tC(o, t, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: n ? e[o] : 0,
                bounceStiffness: i ? 200 : 1e6,
                bounceDamping: i ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(e, t) {
          let n = this.getAxisMotionValue(e);
          return n.start((0, tS.v)(e, n, 0, t, this.visualElement));
        }
        stopAnimation() {
          tu((e) => this.getAxisMotionValue(e).stop());
        }
        pauseAnimation() {
          tu((e) => {
            var t;
            return null === (t = this.getAxisMotionValue(e).animation) ||
              void 0 === t
              ? void 0
              : t.pause();
          });
        }
        getAnimationState(e) {
          var t;
          return null === (t = this.getAxisMotionValue(e).animation) ||
            void 0 === t
            ? void 0
            : t.state;
        }
        getAxisMotionValue(e) {
          let t = `_drag${e.toUpperCase()}`,
            n = this.visualElement.getProps();
          return (
            n[t] ||
            this.visualElement.getValue(
              e,
              (n.initial ? n.initial[e] : void 0) || 0
            )
          );
        }
        snapToCursor(e) {
          tu((t) => {
            let { drag: n } = this.getProps();
            if (!tC(t, n, this.currentDirection)) return;
            let { projection: i } = this.visualElement,
              r = this.getAxisMotionValue(t);
            if (i && i.layout) {
              let { min: n, max: s } = i.layout.layoutBox[t];
              r.set(e[t] - (0, e2.t)(n, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: e, dragConstraints: t } = this.getProps(),
            { projection: n } = this.visualElement;
          if (!p(t) || !n || !this.constraints) return;
          this.stopAnimation();
          let i = { x: 0, y: 0 };
          tu((e) => {
            let t = this.getAxisMotionValue(e);
            if (t && !1 !== this.constraints) {
              let n = t.get();
              i[e] = (function (e, t) {
                let n = 0.5,
                  i = e3(e),
                  r = e3(t);
                return (
                  r > i
                    ? (n = (0, e1.Y)(t.min, t.max - i, e.min))
                    : i > r && (n = (0, e1.Y)(e.min, e.max - r, t.min)),
                  (0, te.u)(0, 1, n)
                );
              })({ min: n, max: n }, this.constraints[e]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            n.root && n.root.updateScroll(),
            n.updateLayout(),
            this.resolveConstraints(),
            tu((t) => {
              if (!tC(t, e, null)) return;
              let n = this.getAxisMotionValue(t),
                { min: r, max: s } = this.constraints[t];
              n.set((0, e2.t)(r, s, i[t]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          tR.set(this.visualElement, this);
          let e = ev(this.visualElement.current, "pointerdown", (e) => {
              let { drag: t, dragListener: n = !0 } = this.getProps();
              t && n && this.start(e);
            }),
            t = () => {
              let { dragConstraints: e } = this.getProps();
              p(e) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: n } = this.visualElement,
            i = n.addEventListener("measure", t);
          n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
            t();
          let r = eh(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = n.addEventListener(
              "didUpdate",
              ({ delta: e, hasLayoutChanged: t }) => {
                this.isDragging &&
                  t &&
                  (tu((t) => {
                    let n = this.getAxisMotionValue(t);
                    n &&
                      ((this.originPoint[t] += e[t].translate),
                      n.set(n.get() + e[t].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            r(), e(), i(), s && s();
          };
        }
        getProps() {
          let e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: n = !1,
              dragPropagation: i = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = e;
          return {
            ...e,
            drag: t,
            dragDirectionLock: n,
            dragPropagation: i,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function tC(e, t, n) {
        return (!0 === t || t === e) && (null === n || n === e);
      }
      class tA extends ek {
        constructor(e) {
          super(e),
            (this.removeGroupControls = eT.Z),
            (this.removeListeners = eT.Z),
            (this.controls = new tT(e));
        }
        mount() {
          let { dragControls: e } = this.node.getProps();
          e && (this.removeGroupControls = e.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || eT.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let tF = (e) => (t, n) => {
        e && eu.Wi.postRender(() => e(t, n));
      };
      class tM extends ek {
        constructor() {
          super(...arguments), (this.removePointerDownListener = eT.Z);
        }
        onPointerDown(e) {
          this.session = new eK(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: tE(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: e,
            onPanStart: t,
            onPan: n,
            onPanEnd: i,
          } = this.node.getProps();
          return {
            onSessionStart: tF(e),
            onStart: tF(t),
            onMove: n,
            onEnd: (e, t) => {
              delete this.session, i && eu.Wi.postRender(() => i(e, t));
            },
          };
        }
        mount() {
          this.removePointerDownListener = ev(
            this.node.current,
            "pointerdown",
            (e) => this.onPointerDown(e)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      let tI = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function tO(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      let tj = {
        correct: (e, t) => {
          if (!t.target) return e;
          if ("string" == typeof e) {
            if (!W.px.test(e)) return e;
            e = parseFloat(e);
          }
          let n = tO(e, t.target.x),
            i = tO(e, t.target.y);
          return `${n}% ${i}%`;
        },
      };
      var tD = n(3646);
      class tL extends s.Component {
        componentDidMount() {
          let {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: n,
              layoutId: i,
            } = this.props,
            { projection: r } = e;
          Object.assign(A, tN),
            r &&
              (t.group && t.group.add(r),
              n && n.register && i && n.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (tI.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(e) {
          let {
              layoutDependency: t,
              visualElement: n,
              drag: i,
              isPresent: r,
            } = this.props,
            s = n.projection;
          return (
            s &&
              ((s.isPresent = r),
              i || e.layoutDependency !== t || void 0 === t
                ? s.willUpdate()
                : this.safeToRemove(),
              e.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    eu.Wi.postRender(() => {
                      let e = s.getStack();
                      (e && e.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: e } = this.props.visualElement;
          e &&
            (e.root.didUpdate(),
            h.postRender(() => {
              !e.currentAnimation && e.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: n,
            } = this.props,
            { projection: i } = e;
          i &&
            (i.scheduleCheckAfterUnmount(),
            t && t.group && t.group.remove(i),
            n && n.deregister && n.deregister(i));
        }
        safeToRemove() {
          let { safeToRemove: e } = this.props;
          e && e();
        }
        render() {
          return null;
        }
      }
      function t$(e) {
        let [t, n] = (function () {
            let e = (0, s.useContext)(l.O);
            if (null === e) return [!0, null];
            let { isPresent: t, onExitComplete: n, register: i } = e,
              r = (0, s.useId)();
            return (
              (0, s.useEffect)(() => i(r), []),
              !t && n ? [!1, () => n && n(r)] : [!0]
            );
          })(),
          i = (0, s.useContext)(S.p);
        return (0, r.jsx)(tL, {
          ...e,
          layoutGroup: i,
          switchLayoutGroup: (0, s.useContext)(E),
          isPresent: t,
          safeToRemove: n,
        });
      }
      let tN = {
        borderRadius: {
          ...tj,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: tj,
        borderTopRightRadius: tj,
        borderBottomLeftRadius: tj,
        borderBottomRightRadius: tj,
        boxShadow: {
          correct: (e, { treeScale: t, projectionDelta: n }) => {
            let i = tD.P.parse(e);
            if (i.length > 5) return e;
            let r = tD.P.createTransformer(e),
              s = "number" != typeof i[0] ? 1 : 0,
              o = n.x.scale * t.x,
              a = n.y.scale * t.y;
            (i[0 + s] /= o), (i[1 + s] /= a);
            let l = (0, e2.t)(o, a, 0.5);
            return (
              "number" == typeof i[2 + s] && (i[2 + s] /= l),
              "number" == typeof i[3 + s] && (i[3 + s] /= l),
              r(i)
            );
          },
        },
      };
      var tV = n(2428),
        tB = n(8536);
      let tq = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        tz = tq.length,
        tU = (e) => ("string" == typeof e ? parseFloat(e) : e),
        tW = (e) => "number" == typeof e || W.px.test(e);
      function tH(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius;
      }
      let tG = tY(0, 0.5, tB.Bn),
        tX = tY(0.5, 0.95, eT.Z);
      function tY(e, t, n) {
        return (i) => (i < e ? 0 : i > t ? 1 : n((0, e1.Y)(e, t, i)));
      }
      function tK(e, t) {
        (e.min = t.min), (e.max = t.max);
      }
      function tZ(e, t) {
        tK(e.x, t.x), tK(e.y, t.y);
      }
      function tQ(e, t, n, i, r) {
        return (
          (e -= t),
          (e = i + (1 / n) * (e - i)),
          void 0 !== r && (e = i + (1 / r) * (e - i)),
          e
        );
      }
      function tJ(e, t, [n, i, r], s, o) {
        !(function (e, t = 0, n = 1, i = 0.5, r, s = e, o = e) {
          if (
            (W.aQ.test(t) &&
              ((t = parseFloat(t)),
              (t = (0, e2.t)(o.min, o.max, t / 100) - o.min)),
            "number" != typeof t)
          )
            return;
          let a = (0, e2.t)(s.min, s.max, i);
          e === s && (a -= t),
            (e.min = tQ(e.min, t, n, a, r)),
            (e.max = tQ(e.max, t, n, a, r));
        })(e, t[n], t[i], t[r], t.scale, s, o);
      }
      let t0 = ["x", "scaleX", "originX"],
        t1 = ["y", "scaleY", "originY"];
      function t2(e, t, n, i) {
        tJ(e.x, t, t0, n ? n.x : void 0, i ? i.x : void 0),
          tJ(e.y, t, t1, n ? n.y : void 0, i ? i.y : void 0);
      }
      var t3 = n(9792);
      function t5(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function t6(e) {
        return t5(e.x) && t5(e.y);
      }
      function t8(e, t) {
        return (
          Math.round(e.x.min) === Math.round(t.x.min) &&
          Math.round(e.x.max) === Math.round(t.x.max) &&
          Math.round(e.y.min) === Math.round(t.y.min) &&
          Math.round(e.y.max) === Math.round(t.y.max)
        );
      }
      function t4(e) {
        return e3(e.x) / e3(e.y);
      }
      var t9 = n(8746);
      class t7 {
        constructor() {
          this.members = [];
        }
        add(e) {
          (0, t9.y4)(this.members, e), e.scheduleRender();
        }
        remove(e) {
          if (
            ((0, t9.cl)(this.members, e),
            e === this.prevLead && (this.prevLead = void 0),
            e === this.lead)
          ) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e);
          }
        }
        relegate(e) {
          let t;
          let n = this.members.findIndex((t) => e === t);
          if (0 === n) return !1;
          for (let e = n; e >= 0; e--) {
            let n = this.members[e];
            if (!1 !== n.isPresent) {
              t = n;
              break;
            }
          }
          return !!t && (this.promote(t), !0);
        }
        promote(e, t) {
          let n = this.lead;
          if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
            n.instance && n.scheduleRender(),
              e.scheduleRender(),
              (e.resumeFrom = n),
              t && (e.resumeFrom.preserveOpacity = !0),
              n.snapshot &&
                ((e.snapshot = n.snapshot),
                (e.snapshot.latestValues =
                  n.animationValues || n.latestValues)),
              e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            let { crossfade: i } = e.options;
            !1 === i && n.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e) => {
            let { options: t, resumingFrom: n } = e;
            t.onExitComplete && t.onExitComplete(),
              n && n.options.onExitComplete && n.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((e) => {
            e.instance && e.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function ne(e, t, n) {
        let i = "",
          r = e.x.translate / t.x,
          s = e.y.translate / t.y,
          o = (null == n ? void 0 : n.z) || 0;
        if (
          ((r || s || o) && (i = `translate3d(${r}px, ${s}px, ${o}px) `),
          (1 !== t.x || 1 !== t.y) && (i += `scale(${1 / t.x}, ${1 / t.y}) `),
          n)
        ) {
          let {
            transformPerspective: e,
            rotate: t,
            rotateX: r,
            rotateY: s,
            skewX: o,
            skewY: a,
          } = n;
          e && (i = `perspective(${e}px) ${i}`),
            t && (i += `rotate(${t}deg) `),
            r && (i += `rotateX(${r}deg) `),
            s && (i += `rotateY(${s}deg) `),
            o && (i += `skewX(${o}deg) `),
            a && (i += `skewY(${a}deg) `);
        }
        let a = e.x.scale * t.x,
          l = e.y.scale * t.y;
        return (1 !== a || 1 !== l) && (i += `scale(${a}, ${l})`), i || "none";
      }
      let nt = (e, t) => e.depth - t.depth;
      class nn {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(e) {
          (0, t9.y4)(this.children, e), (this.isDirty = !0);
        }
        remove(e) {
          (0, t9.cl)(this.children, e), (this.isDirty = !0);
        }
        forEach(e) {
          this.isDirty && this.children.sort(nt),
            (this.isDirty = !1),
            this.children.forEach(e);
        }
      }
      var ni = n(9993),
        nr = n(804),
        ns = n(2087);
      let no = ["", "X", "Y", "Z"],
        na = { visibility: "hidden" },
        nl = 0,
        nu = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function nc(e, t, n, i) {
        let { latestValues: r } = t;
        r[e] && ((n[e] = r[e]), t.setStaticValue(e, 0), i && (i[e] = 0));
      }
      function nd({
        attachResizeListener: e,
        defaultParent: t,
        measureScroll: n,
        checkIsScrollRoot: i,
        resetTransform: r,
      }) {
        return class {
          constructor(e = {}, n = null == t ? void 0 : t()) {
            (this.id = nl++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  (nu.totalNodes =
                    nu.resolvedTargetDeltas =
                    nu.recalculatedProjection =
                      0),
                  this.nodes.forEach(np),
                  this.nodes.forEach(nw),
                  this.nodes.forEach(nx),
                  this.nodes.forEach(ng),
                  window.MotionDebug && window.MotionDebug.record(nu);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = e),
              (this.root = n ? n.root || n : this),
              (this.path = n ? [...n.path, n] : []),
              (this.parent = n),
              (this.depth = n ? n.depth + 1 : 0);
            for (let e = 0; e < this.path.length; e++)
              this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new nn());
          }
          addEventListener(e, t) {
            return (
              this.eventHandlers.has(e) ||
                this.eventHandlers.set(e, new tV.L()),
              this.eventHandlers.get(e).add(t)
            );
          }
          notifyListeners(e, ...t) {
            let n = this.eventHandlers.get(e);
            n && n.notify(...t);
          }
          hasListeners(e) {
            return this.eventHandlers.has(e);
          }
          mount(t, n = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = t instanceof SVGElement && "svg" !== t.tagName),
              (this.instance = t);
            let { layoutId: i, layout: r, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(t),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              n && (r || i) && (this.isLayoutDirty = !0),
              e)
            ) {
              let n;
              let i = () => (this.root.updateBlockedByResize = !1);
              e(t, () => {
                (this.root.updateBlockedByResize = !0),
                  n && n(),
                  (n = (function (e, t) {
                    let n = ni.X.now(),
                      i = ({ timestamp: t }) => {
                        let r = t - n;
                        r >= 250 && ((0, eu.Pn)(i), e(r - 250));
                      };
                    return eu.Wi.read(i, !0), () => (0, eu.Pn)(i);
                  })(i, 0)),
                  tI.hasAnimatedSinceResize &&
                    ((tI.hasAnimatedSinceResize = !1), this.nodes.forEach(nb));
              });
            }
            i && this.root.registerSharedNode(i, this),
              !1 !== this.options.animate &&
                s &&
                (i || r) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: e,
                    hasLayoutChanged: t,
                    hasRelativeTargetChanged: n,
                    layout: i,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        nT,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !t8(this.targetLayout, i) || n,
                      u = !t && n;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (t && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(e, u);
                      let t = {
                        ...(0, t3.e)(r, "layout"),
                        onPlay: o,
                        onComplete: a,
                      };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((t.delay = 0), (t.type = !1)),
                        this.startAnimation(t);
                    } else
                      t || nb(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = i;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let e = this.getStack();
            e && e.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, eu.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(nk),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: e } = this.options;
            return e && e.getProps().transformTemplate;
          }
          willUpdate(e = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.HandoffCancelAllAnimations &&
                (function e(t) {
                  if (((t.hasCheckedOptimisedAppear = !0), t.root === t))
                    return !1;
                  let { visualElement: n } = t.options;
                  return (
                    !!n &&
                    (!!(0, ns.s)(n) ||
                      (!!t.parent &&
                        !t.parent.hasCheckedOptimisedAppear &&
                        e(t.parent)))
                  );
                })(this) &&
                window.HandoffCancelAllAnimations(),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
              let t = this.path[e];
              (t.shouldResetTransform = !0),
                t.updateScroll("snapshot"),
                t.options.layoutRoot && t.willUpdate(!1);
            }
            let { layoutId: t, layout: n } = this.options;
            if (void 0 === t && !n) return;
            let i = this.getTransformTemplate();
            (this.prevTransformTemplateValue = i
              ? i(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              e && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(nm);
              return;
            }
            this.isUpdating || this.nodes.forEach(ny),
              (this.isUpdating = !1),
              this.nodes.forEach(n_),
              this.nodes.forEach(nh),
              this.nodes.forEach(nf),
              this.clearAllSnapshots();
            let e = ni.X.now();
            (eu.frameData.delta = (0, te.u)(
              0,
              1e3 / 60,
              e - eu.frameData.timestamp
            )),
              (eu.frameData.timestamp = e),
              (eu.frameData.isProcessing = !0),
              eu.S6.update.process(eu.frameData),
              eu.S6.preRender.process(eu.frameData),
              eu.S6.render.process(eu.frameData),
              (eu.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), h.read(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(nv), this.sharedNodes.forEach(nP);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              eu.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            eu.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let e = 0; e < this.path.length; e++)
                this.path[e].updateScroll();
            let e = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = tl()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: t } = this.options;
            t &&
              t.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                e ? e.layoutBox : void 0
              );
          }
          updateScroll(e = "measure") {
            let t = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === e &&
              (t = !1),
              t &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: e,
                  isRoot: i(this.instance),
                  offset: n(this.instance),
                });
          }
          resetTransform() {
            if (!r) return;
            let e = this.isLayoutDirty || this.shouldResetTransform,
              t = this.projectionDelta && !t6(this.projectionDelta),
              n = this.getTransformTemplate(),
              i = n ? n(this.latestValues, "") : void 0,
              s = i !== this.prevTransformTemplateValue;
            e &&
              (t || tf(this.latestValues) || s) &&
              (r(this.instance, i),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(e = !0) {
            var t;
            let n = this.measurePageBox(),
              i = this.removeElementScroll(n);
            return (
              e && (i = this.removeTransform(i)),
              nF((t = i).x),
              nF(t.y),
              {
                animationId: this.root.animationId,
                measuredBox: n,
                layoutBox: i,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: e } = this.options;
            if (!e) return tl();
            let t = e.measureViewportBox(),
              { scroll: n } = this.root;
            return n && (t_(t.x, n.offset.x), t_(t.y, n.offset.y)), t;
          }
          removeElementScroll(e) {
            let t = tl();
            tZ(t, e);
            for (let n = 0; n < this.path.length; n++) {
              let i = this.path[n],
                { scroll: r, options: s } = i;
              if (i !== this.root && r && s.layoutScroll) {
                if (r.isRoot) {
                  tZ(t, e);
                  let { scroll: n } = this.root;
                  n && (t_(t.x, -n.offset.x), t_(t.y, -n.offset.y));
                }
                t_(t.x, r.offset.x), t_(t.y, r.offset.y);
              }
            }
            return t;
          }
          applyTransform(e, t = !1) {
            let n = tl();
            tZ(n, e);
            for (let e = 0; e < this.path.length; e++) {
              let i = this.path[e];
              !t &&
                i.options.layoutScroll &&
                i.scroll &&
                i !== i.root &&
                tk(n, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                tf(i.latestValues) && tk(n, i.latestValues);
            }
            return tf(this.latestValues) && tk(n, this.latestValues), n;
          }
          removeTransform(e) {
            let t = tl();
            tZ(t, e);
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e];
              if (!n.instance || !tf(n.latestValues)) continue;
              th(n.latestValues) && n.updateSnapshot();
              let i = tl();
              tZ(i, n.measurePageBox()),
                t2(
                  t,
                  n.latestValues,
                  n.snapshot ? n.snapshot.layoutBox : void 0,
                  i
                );
            }
            return tf(this.latestValues) && t2(t, this.latestValues), t;
          }
          setTargetDelta(e) {
            (this.targetDelta = e),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(e) {
            this.options = {
              ...this.options,
              ...e,
              crossfade: void 0 === e.crossfade || e.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                eu.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(e = !1) {
            var t, n, i, r;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                e ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = eu.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let e = this.getClosestProjectingParent();
                e && e.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = e),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = tl()),
                    (this.relativeTargetOrigin = tl()),
                    e7(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      e.layout.layoutBox
                    ),
                    tZ(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = tl()), (this.targetWithTransforms = tl())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (n = this.target),
                      (i = this.relativeTarget),
                      (r = this.relativeParent.target),
                      e4(n.x, i.x, r.x),
                      e4(n.y, i.y, r.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : tZ(this.target, this.layout.layoutBox),
                      tm(this.target, this.targetDelta))
                    : tZ(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let e = this.getClosestProjectingParent();
                  e &&
                  !!e.resumingFrom == !!this.resumingFrom &&
                  !e.options.layoutScroll &&
                  e.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = e),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = tl()),
                      (this.relativeTargetOrigin = tl()),
                      e7(this.relativeTargetOrigin, this.target, e.target),
                      tZ(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                nu.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              th(this.parent.latestValues) ||
              tp(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var e;
            let t = this.getLead(),
              n = !!this.resumingFrom || this !== t,
              i = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty)) &&
                (i = !1),
              n &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (i = !1),
              this.resolvedRelativeTargetAt === eu.frameData.timestamp &&
                (i = !1),
              i)
            )
              return;
            let { layout: r, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || s))
            )
              return;
            tZ(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (e, t, n, i = !1) {
              let r, s;
              let o = n.length;
              if (o) {
                t.x = t.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (r = n[a]).projectionDelta;
                  let o = r.instance;
                  (!o || !o.style || "contents" !== o.style.display) &&
                    (i &&
                      r.options.layoutScroll &&
                      r.scroll &&
                      r !== r.root &&
                      tk(e, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                    s && ((t.x *= s.x.scale), (t.y *= s.y.scale), tm(e, s)),
                    i && tf(r.latestValues) && tk(e, r.latestValues));
                }
                (t.x = ty(t.x)), (t.y = ty(t.y));
              }
            })(this.layoutCorrected, this.treeScale, this.path, n),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((t.target = t.layout.layoutBox),
                (t.targetWithTransforms = tl()));
            let { target: l } = t;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = to()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = to()),
              (this.projectionDeltaWithTransform = to()));
            let u = this.projectionTransform;
            e8(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = ne(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== u ||
                this.treeScale.x !== o ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              nu.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(e = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), e)
            ) {
              let e = this.getStack();
              e && e.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(e, t = !1) {
            let n;
            let i = this.snapshot,
              r = i ? i.latestValues : {},
              s = { ...this.latestValues },
              o = to();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !t);
            let a = tl(),
              l =
                (i ? i.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              c = !u || u.members.length <= 1,
              d = !!(
                l &&
                !c &&
                !0 === this.options.crossfade &&
                !this.path.some(nR)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (t) => {
                let i = t / 1e3;
                if (
                  (nS(o.x, e.x, i),
                  nS(o.y, e.y, i),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, h, f, p;
                  e7(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (f = this.relativeTarget),
                    (p = this.relativeTargetOrigin),
                    nE(f.x, p.x, a.x, i),
                    nE(f.y, p.y, a.y, i),
                    n &&
                      ((u = this.relativeTarget),
                      (h = n),
                      u.x.min === h.x.min &&
                        u.x.max === h.x.max &&
                        u.y.min === h.y.min &&
                        u.y.max === h.y.max) &&
                      (this.isProjectionDirty = !1),
                    n || (n = tl()),
                    tZ(n, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (e, t, n, i, r, s) {
                    r
                      ? ((e.opacity = (0, e2.t)(
                          0,
                          void 0 !== n.opacity ? n.opacity : 1,
                          tG(i)
                        )),
                        (e.opacityExit = (0, e2.t)(
                          void 0 !== t.opacity ? t.opacity : 1,
                          0,
                          tX(i)
                        )))
                      : s &&
                        (e.opacity = (0, e2.t)(
                          void 0 !== t.opacity ? t.opacity : 1,
                          void 0 !== n.opacity ? n.opacity : 1,
                          i
                        ));
                    for (let r = 0; r < tz; r++) {
                      let s = `border${tq[r]}Radius`,
                        o = tH(t, s),
                        a = tH(n, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || tW(o) === tW(a)
                          ? ((e[s] = Math.max((0, e2.t)(tU(o), tU(a), i), 0)),
                            (W.aQ.test(a) || W.aQ.test(o)) && (e[s] += "%"))
                          : (e[s] = a));
                    }
                    (t.rotate || n.rotate) &&
                      (e.rotate = (0, e2.t)(t.rotate || 0, n.rotate || 0, i));
                  })(s, r, this.latestValues, i, d, c)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = i);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(e) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, eu.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = eu.Wi.update(() => {
                (tI.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (e, t, n) {
                    let i = (0, I.i)(0) ? 0 : (0, nr.BX)(0);
                    return i.start((0, tS.v)("", i, 1e3, n)), i.animation;
                  })(0, 0, {
                    ...e,
                    onUpdate: (t) => {
                      this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
                    },
                    onComplete: () => {
                      e.onComplete && e.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let e = this.getStack();
            e && e.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let e = this.getLead(),
              {
                targetWithTransforms: t,
                target: n,
                layout: i,
                latestValues: r,
              } = e;
            if (t && n && i) {
              if (
                this !== e &&
                this.layout &&
                i &&
                nM(
                  this.options.animationType,
                  this.layout.layoutBox,
                  i.layoutBox
                )
              ) {
                n = this.target || tl();
                let t = e3(this.layout.layoutBox.x);
                (n.x.min = e.target.x.min), (n.x.max = n.x.min + t);
                let i = e3(this.layout.layoutBox.y);
                (n.y.min = e.target.y.min), (n.y.max = n.y.min + i);
              }
              tZ(t, n),
                tk(t, r),
                e8(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  t,
                  r
                );
            }
          }
          registerSharedNode(e, t) {
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new t7()),
              this.sharedNodes.get(e).add(t);
            let n = t.options.initialPromotionConfig;
            t.promote({
              transition: n ? n.transition : void 0,
              preserveFollowOpacity:
                n && n.shouldPreserveFollowOpacity
                  ? n.shouldPreserveFollowOpacity(t)
                  : void 0,
            });
          }
          isLead() {
            let e = this.getStack();
            return !e || e.lead === this;
          }
          getLead() {
            var e;
            let { layoutId: t } = this.options;
            return (
              (t &&
                (null === (e = this.getStack()) || void 0 === e
                  ? void 0
                  : e.lead)) ||
              this
            );
          }
          getPrevLead() {
            var e;
            let { layoutId: t } = this.options;
            return t
              ? null === (e = this.getStack()) || void 0 === e
                ? void 0
                : e.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: e } = this.options;
            if (e) return this.root.sharedNodes.get(e);
          }
          promote({
            needsReset: e,
            transition: t,
            preserveFollowOpacity: n,
          } = {}) {
            let i = this.getStack();
            i && i.promote(this, n),
              e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              t && this.setOptions({ transition: t });
          }
          relegate() {
            let e = this.getStack();
            return !!e && e.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: e } = this.options;
            if (!e) return;
            let t = !1,
              { latestValues: n } = e;
            if (
              ((n.z ||
                n.rotate ||
                n.rotateX ||
                n.rotateY ||
                n.rotateZ ||
                n.skewX ||
                n.skewY) &&
                (t = !0),
              !t)
            )
              return;
            let i = {};
            n.z && nc("z", e, i, this.animationValues);
            for (let t = 0; t < no.length; t++)
              nc(`rotate${no[t]}`, e, i, this.animationValues),
                nc(`skew${no[t]}`, e, i, this.animationValues);
            for (let t in (e.render(), i))
              e.setStaticValue(t, i[t]),
                this.animationValues && (this.animationValues[t] = i[t]);
            e.scheduleRender();
          }
          getProjectionStyles(e) {
            var t, n;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return na;
            let i = { visibility: "" },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (i.opacity = ""),
                (i.pointerEvents =
                  ea(null == e ? void 0 : e.pointerEvents) || ""),
                (i.transform = r ? r(this.latestValues, "") : "none"),
                i
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let t = {};
              return (
                this.options.layoutId &&
                  ((t.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (t.pointerEvents =
                    ea(null == e ? void 0 : e.pointerEvents) || "")),
                this.hasProjected &&
                  !tf(this.latestValues) &&
                  ((t.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                t
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (i.transform = ne(
                this.projectionDeltaWithTransform,
                this.treeScale,
                o
              )),
              r && (i.transform = r(o, i.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let e in ((i.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (i.opacity =
                  s === this
                    ? null !==
                        (n =
                          null !== (t = o.opacity) && void 0 !== t
                            ? t
                            : this.latestValues.opacity) && void 0 !== n
                      ? n
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (i.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            A)) {
              if (void 0 === o[e]) continue;
              let { correct: t, applyTo: n } = A[e],
                r = "none" === i.transform ? o[e] : t(o[e], s);
              if (n) {
                let e = n.length;
                for (let t = 0; t < e; t++) i[n[t]] = r;
              } else i[e] = r;
            }
            return (
              this.options.layoutId &&
                (i.pointerEvents =
                  s === this
                    ? ea(null == e ? void 0 : e.pointerEvents) || ""
                    : "none"),
              i
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((e) => {
              var t;
              return null === (t = e.currentAnimation) || void 0 === t
                ? void 0
                : t.stop();
            }),
              this.root.nodes.forEach(nm),
              this.root.sharedNodes.clear();
          }
        };
      }
      function nh(e) {
        e.updateLayout();
      }
      function nf(e) {
        var t;
        let n =
          (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) ||
          e.snapshot;
        if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
          let { layoutBox: t, measuredBox: i } = e.layout,
            { animationType: r } = e.options,
            s = n.source !== e.layout.source;
          "size" === r
            ? tu((e) => {
                let i = s ? n.measuredBox[e] : n.layoutBox[e],
                  r = e3(i);
                (i.min = t[e].min), (i.max = i.min + r);
              })
            : nM(r, n.layoutBox, t) &&
              tu((i) => {
                let r = s ? n.measuredBox[i] : n.layoutBox[i],
                  o = e3(t[i]);
                (r.max = r.min + o),
                  e.relativeTarget &&
                    !e.currentAnimation &&
                    ((e.isProjectionDirty = !0),
                    (e.relativeTarget[i].max = e.relativeTarget[i].min + o));
              });
          let o = to();
          e8(o, t, n.layoutBox);
          let a = to();
          s
            ? e8(a, e.applyTransform(i, !0), n.measuredBox)
            : e8(a, t, n.layoutBox);
          let l = !t6(o),
            u = !1;
          if (!e.resumeFrom) {
            let i = e.getClosestProjectingParent();
            if (i && !i.resumeFrom) {
              let { snapshot: r, layout: s } = i;
              if (r && s) {
                let o = tl();
                e7(o, n.layoutBox, r.layoutBox);
                let a = tl();
                e7(a, t, s.layoutBox),
                  t8(o, a) || (u = !0),
                  i.options.layoutRoot &&
                    ((e.relativeTarget = a),
                    (e.relativeTargetOrigin = o),
                    (e.relativeParent = i));
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: t,
            snapshot: n,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (e.isLead()) {
          let { onExitComplete: t } = e.options;
          t && t();
        }
        e.options.transition = void 0;
      }
      function np(e) {
        nu.totalNodes++,
          e.parent &&
            (e.isProjecting() ||
              (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty ||
              (e.isSharedProjectionDirty = !!(
                e.isProjectionDirty ||
                e.parent.isProjectionDirty ||
                e.parent.isSharedProjectionDirty
              )),
            e.isTransformDirty ||
              (e.isTransformDirty = e.parent.isTransformDirty));
      }
      function ng(e) {
        e.isProjectionDirty =
          e.isSharedProjectionDirty =
          e.isTransformDirty =
            !1;
      }
      function nv(e) {
        e.clearSnapshot();
      }
      function nm(e) {
        e.clearMeasurements();
      }
      function ny(e) {
        e.isLayoutDirty = !1;
      }
      function n_(e) {
        let { visualElement: t } = e.options;
        t &&
          t.getProps().onBeforeLayoutMeasure &&
          t.notify("BeforeLayoutMeasure"),
          e.resetTransform();
      }
      function nb(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0),
          (e.isProjectionDirty = !0);
      }
      function nw(e) {
        e.resolveTargetDelta();
      }
      function nx(e) {
        e.calcProjection();
      }
      function nk(e) {
        e.resetSkewAndRotation();
      }
      function nP(e) {
        e.removeLeadSnapshot();
      }
      function nS(e, t, n) {
        (e.translate = (0, e2.t)(t.translate, 0, n)),
          (e.scale = (0, e2.t)(t.scale, 1, n)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint);
      }
      function nE(e, t, n, i) {
        (e.min = (0, e2.t)(t.min, n.min, i)),
          (e.max = (0, e2.t)(t.max, n.max, i));
      }
      function nR(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      let nT = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        nC = (e) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(e),
        nA = nC("applewebkit/") && !nC("chrome/") ? Math.round : eT.Z;
      function nF(e) {
        (e.min = nA(e.min)), (e.max = nA(e.max));
      }
      function nM(e, t, n) {
        return (
          "position" === e ||
          ("preserve-aspect" === e && !e5(t4(t), t4(n), 0.2))
        );
      }
      let nI = nd({
          attachResizeListener: (e, t) => eh(e, "resize", t),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        nO = { current: void 0 },
        nj = nd({
          measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
          defaultParent: () => {
            if (!nO.current) {
              let e = new nI({});
              e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (nO.current = e);
            }
            return nO.current;
          },
          resetTransform: (e, t) => {
            e.style.transform = void 0 !== t ? t : "none";
          },
          checkIsScrollRoot: (e) =>
            "fixed" === window.getComputedStyle(e).position,
        });
      var nD = n(781);
      let nL = { current: null },
        n$ = { current: !1 };
      var nN = n(4894);
      let nV = new WeakMap();
      var nB = n(3653),
        nq = n(4386),
        nz = n(9102),
        nU = n(146),
        nW = n(3769),
        nH = n(2649);
      let nG = [...nW.$, nU.$, tD.P],
        nX = (e) => nG.find((0, nH.l)(e));
      var nY = n(6450);
      let nK = Object.keys(k),
        nZ = nK.length,
        nQ = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        nJ = y.length;
      class n0 {
        scrapeMotionValuesFromProps(e, t, n) {
          return {};
        }
        constructor(
          {
            parent: e,
            props: t,
            presenceContext: n,
            reducedMotionConfig: i,
            blockInitialAnimation: r,
            visualState: s,
          },
          o = {}
        ) {
          (this.resolveKeyframes = (e, t, n, i) =>
            new this.KeyframeResolver(e, t, n, i, this)),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = nB.e),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => eu.Wi.render(this.render, !1, !0));
          let { latestValues: a, renderState: l } = s;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = t.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = e),
            (this.props = t),
            (this.presenceContext = n),
            (this.depth = e ? e.depth + 1 : 0),
            (this.reducedMotionConfig = i),
            (this.options = o),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = _(t)),
            (this.isVariantNode = b(t)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(e && e.current));
          let { willChange: u, ...c } = this.scrapeMotionValuesFromProps(
            t,
            {},
            this
          );
          for (let e in c) {
            let t = c[e];
            void 0 !== a[e] &&
              (0, I.i)(t) &&
              (t.set(a[e], !1), (0, nN.L)(u) && u.add(e));
          }
        }
        mount(e) {
          (this.current = e),
            nV.set(e, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(e),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
            n$.current ||
              (function () {
                if (((n$.current = !0), P.j)) {
                  if (window.matchMedia) {
                    let e = window.matchMedia("(prefers-reduced-motion)"),
                      t = () => (nL.current = e.matches);
                    e.addListener(t), t();
                  } else nL.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || nL.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          var e;
          for (let e in (nV.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, eu.Pn)(this.notifyUpdate),
          (0, eu.Pn)(this.render),
          this.valueSubscriptions.forEach((e) => e()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[e].clear();
          for (let t in this.features)
            null === (e = this.features[t]) || void 0 === e || e.unmount();
          this.current = null;
        }
        bindToMotionValue(e, t) {
          let n = F.G.has(e),
            i = t.on("change", (t) => {
              (this.latestValues[e] = t),
                this.props.onUpdate && eu.Wi.preRender(this.notifyUpdate),
                n && this.projection && (this.projection.isTransformDirty = !0);
            }),
            r = t.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(e, () => {
            i(), r(), t.owner && t.stop();
          });
        }
        sortNodePosition(e) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === e.type
            ? this.sortInstanceNodePosition(this.current, e.current)
            : 0;
        }
        loadFeatures({ children: e, ...t }, n, i, r) {
          let s, o;
          for (let e = 0; e < nZ; e++) {
            let n = nK[e],
              {
                isEnabled: i,
                Feature: r,
                ProjectionNode: a,
                MeasureLayout: l,
              } = k[n];
            a && (s = a),
              i(t) &&
                (!this.features[n] && r && (this.features[n] = new r(this)),
                l && (o = l));
          }
          if (
            ("html" === this.type || "svg" === this.type) &&
            !this.projection &&
            s
          ) {
            let {
              layoutId: e,
              layout: n,
              drag: i,
              dragConstraints: o,
              layoutScroll: a,
              layoutRoot: l,
            } = t;
            (this.projection = new s(
              this.latestValues,
              t["data-framer-portal-id"]
                ? void 0
                : (function e(t) {
                    if (t)
                      return !1 !== t.options.allowProjection
                        ? t.projection
                        : e(t.parent);
                  })(this.parent)
            )),
              this.projection.setOptions({
                layoutId: e,
                layout: n,
                alwaysMeasureLayout: !!i || (o && p(o)),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: "string" == typeof n ? n : "both",
                initialPromotionConfig: r,
                layoutScroll: a,
                layoutRoot: l,
              });
          }
          return o;
        }
        updateFeatures() {
          for (let e in this.features) {
            let t = this.features[e];
            t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : tl();
        }
        getStaticValue(e) {
          return this.latestValues[e];
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t;
        }
        update(e, t) {
          (e.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = e),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = t);
          for (let t = 0; t < nQ.length; t++) {
            let n = nQ[t];
            this.propEventSubscriptions[n] &&
              (this.propEventSubscriptions[n](),
              delete this.propEventSubscriptions[n]);
            let i = e["on" + n];
            i && (this.propEventSubscriptions[n] = this.on(n, i));
          }
          (this.prevMotionValues = (function (e, t, n) {
            let { willChange: i } = t;
            for (let r in t) {
              let s = t[r],
                o = n[r];
              if ((0, I.i)(s)) e.addValue(r, s), (0, nN.L)(i) && i.add(r);
              else if ((0, I.i)(o))
                e.addValue(r, (0, nr.BX)(s, { owner: e })),
                  (0, nN.L)(i) && i.remove(r);
              else if (o !== s) {
                if (e.hasValue(r)) {
                  let t = e.getValue(r);
                  !0 === t.liveStyle ? t.jump(s) : t.hasAnimated || t.set(s);
                } else {
                  let t = e.getStaticValue(r);
                  e.addValue(r, (0, nr.BX)(void 0 !== t ? t : s, { owner: e }));
                }
              }
            }
            for (let i in n) void 0 === t[i] && e.removeValue(i);
            return t;
          })(
            this,
            this.scrapeMotionValuesFromProps(e, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(e = !1) {
          if (e) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let e = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (e.initial = this.props.initial),
              e
            );
          }
          let t = {};
          for (let e = 0; e < nJ; e++) {
            let n = y[e],
              i = this.props[n];
            (g(i) || !1 === i) && (t[n] = i);
          }
          return t;
        }
        addVariantChild(e) {
          let t = this.getClosestVariantNode();
          if (t)
            return (
              t.variantChildren && t.variantChildren.add(e),
              () => t.variantChildren.delete(e)
            );
        }
        addValue(e, t) {
          let n = this.values.get(e);
          t !== n &&
            (n && this.removeValue(e),
            this.bindToMotionValue(e, t),
            this.values.set(e, t),
            (this.latestValues[e] = t.get()));
        }
        removeValue(e) {
          this.values.delete(e);
          let t = this.valueSubscriptions.get(e);
          t && (t(), this.valueSubscriptions.delete(e)),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState);
        }
        hasValue(e) {
          return this.values.has(e);
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e])
            return this.props.values[e];
          let n = this.values.get(e);
          return (
            void 0 === n &&
              void 0 !== t &&
              ((n = (0, nr.BX)(null === t ? void 0 : t, { owner: this })),
              this.addValue(e, n)),
            n
          );
        }
        readValue(e, t) {
          var n;
          let i =
            void 0 === this.latestValues[e] && this.current
              ? null !== (n = this.getBaseTargetFromProps(this.props, e)) &&
                void 0 !== n
                ? n
                : this.readValueFromInstance(this.current, e, this.options)
              : this.latestValues[e];
          return (
            null != i &&
              ("string" == typeof i && ((0, nq.P)(i) || (0, nz.W)(i))
                ? (i = parseFloat(i))
                : !nX(i) && tD.P.test(t) && (i = (0, nY.T)(e, t)),
              this.setBaseTarget(e, (0, I.i)(i) ? i.get() : i)),
            (0, I.i)(i) ? i.get() : i
          );
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t;
        }
        getBaseTarget(e) {
          var t;
          let n;
          let { initial: i } = this.props;
          if ("string" == typeof i || "object" == typeof i) {
            let r = (0, er.o)(
              this.props,
              i,
              null === (t = this.presenceContext) || void 0 === t
                ? void 0
                : t.custom
            );
            r && (n = r[e]);
          }
          if (i && void 0 !== n) return n;
          let r = this.getBaseTargetFromProps(this.props, e);
          return void 0 === r || (0, I.i)(r)
            ? void 0 !== this.initialValues[e] && void 0 === n
              ? void 0
              : this.baseTarget[e]
            : r;
        }
        on(e, t) {
          return (
            this.events[e] || (this.events[e] = new tV.L()),
            this.events[e].add(t)
          );
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t);
        }
      }
      var n1 = n(3078);
      class n2 extends n0 {
        constructor() {
          super(...arguments), (this.KeyframeResolver = n1.s);
        }
        sortInstanceNodePosition(e, t) {
          return 2 & e.compareDocumentPosition(t) ? 1 : -1;
        }
        getBaseTargetFromProps(e, t) {
          return e.style ? e.style[t] : void 0;
        }
        removeValueFromRenderState(e, { vars: t, style: n }) {
          delete t[e], delete n[e];
        }
      }
      class n3 extends n2 {
        constructor() {
          super(...arguments), (this.type = "html");
        }
        readValueFromInstance(e, t) {
          if (F.G.has(t)) {
            let e = (0, nD.A)(t);
            return (e && e.default) || 0;
          }
          {
            let n = window.getComputedStyle(e),
              i = ((0, D.f)(t) ? n.getPropertyValue(t) : n[t]) || 0;
            return "string" == typeof i ? i.trim() : i;
          }
        }
        measureInstanceViewportBox(e, { transformPagePoint: t }) {
          return tP(e, t);
        }
        build(e, t, n, i) {
          N(e, t, n, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, t, n) {
          return en(e, t, n);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: e } = this.props;
          (0, I.i)(e) &&
            (this.childSubscription = e.on("change", (e) => {
              this.current && (this.current.textContent = `${e}`);
            }));
        }
        renderInstance(e, t, n, i) {
          J(e, t, n, i);
        }
      }
      class n5 extends n2 {
        constructor() {
          super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(e, t) {
          return e[t];
        }
        readValueFromInstance(e, t) {
          if (F.G.has(t)) {
            let e = (0, nD.A)(t);
            return (e && e.default) || 0;
          }
          return (t = ee.has(t) ? t : (0, Q.D)(t)), e.getAttribute(t);
        }
        measureInstanceViewportBox() {
          return tl();
        }
        scrapeMotionValuesFromProps(e, t, n) {
          return ei(e, t, n);
        }
        build(e, t, n, i) {
          Y(e, t, n, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(e, t, n, i) {
          et(e, t, n, i);
        }
        mount(e) {
          (this.isSVGTag = Z(e.tagName)), super.mount(e);
        }
      }
      let n6 = (e, t) =>
          C(e)
            ? new n5(t, { enableHardwareAcceleration: !1 })
            : new n3(t, {
                allowProjection: e !== s.Fragment,
                enableHardwareAcceleration: !0,
              }),
        n8 = {
          animation: { Feature: eU },
          exit: { Feature: eH },
          inView: { Feature: eD },
          tap: { Feature: eA },
          focus: { Feature: eE },
          hover: { Feature: eS },
          pan: { Feature: tM },
          drag: { Feature: tA, ProjectionNode: nj, MeasureLayout: t$ },
          layout: { ProjectionNode: nj, MeasureLayout: t$ },
        },
        n4 = (function (e) {
          function t(t, n = {}) {
            return (function ({
              preloadedFeatures: e,
              createVisualElement: t,
              useRender: n,
              useVisualState: i,
              Component: f,
            }) {
              e &&
                (function (e) {
                  for (let t in e) k[t] = { ...k[t], ...e[t] };
                })(e);
              let v = (0, s.forwardRef)(function (v, m) {
                var y;
                let b;
                let x = {
                    ...(0, s.useContext)(o._),
                    ...v,
                    layoutId: (function ({ layoutId: e }) {
                      let t = (0, s.useContext)(S.p).id;
                      return t && void 0 !== e ? t + "-" + e : e;
                    })(v),
                  },
                  { isStatic: k } = x,
                  R = (function (e) {
                    let { initial: t, animate: n } = (function (e, t) {
                      if (_(e)) {
                        let { initial: t, animate: n } = e;
                        return {
                          initial: !1 === t || g(t) ? t : void 0,
                          animate: g(n) ? n : void 0,
                        };
                      }
                      return !1 !== e.inherit ? t : {};
                    })(e, (0, s.useContext)(a));
                    return (0, s.useMemo)(
                      () => ({ initial: t, animate: n }),
                      [w(t), w(n)]
                    );
                  })(v),
                  T = i(v, k);
                if (!k && P.j) {
                  R.visualElement = (function (e, t, n, i) {
                    let { visualElement: r } = (0, s.useContext)(a),
                      f = (0, s.useContext)(c),
                      p = (0, s.useContext)(l.O),
                      g = (0, s.useContext)(o._).reducedMotion,
                      v = (0, s.useRef)();
                    (i = i || f.renderer),
                      !v.current &&
                        i &&
                        (v.current = i(e, {
                          visualState: t,
                          parent: r,
                          props: n,
                          presenceContext: p,
                          blockInitialAnimation: !!p && !1 === p.initial,
                          reducedMotionConfig: g,
                        }));
                    let m = v.current;
                    (0, s.useInsertionEffect)(() => {
                      m && m.update(n, p);
                    });
                    let y = (0, s.useRef)(
                      !!(n[d.M] && !window.HandoffComplete)
                    );
                    return (
                      (0, u.L)(() => {
                        m &&
                          (h.render(m.render),
                          y.current &&
                            m.animationState &&
                            m.animationState.animateChanges());
                      }),
                      (0, s.useEffect)(() => {
                        m &&
                          (m.updateFeatures(),
                          !y.current &&
                            m.animationState &&
                            m.animationState.animateChanges(),
                          y.current &&
                            ((y.current = !1), (window.HandoffComplete = !0)));
                      }),
                      m
                    );
                  })(f, T, x, t);
                  let n = (0, s.useContext)(E),
                    i = (0, s.useContext)(c).strict;
                  R.visualElement &&
                    (b = R.visualElement.loadFeatures(x, i, e, n));
                }
                return (0, r.jsxs)(a.Provider, {
                  value: R,
                  children: [
                    b && R.visualElement
                      ? (0, r.jsx)(b, { visualElement: R.visualElement, ...x })
                      : null,
                    n(
                      f,
                      v,
                      ((y = R.visualElement),
                      (0, s.useCallback)(
                        (e) => {
                          e && T.mount && T.mount(e),
                            y && (e ? y.mount(e) : y.unmount()),
                            m &&
                              ("function" == typeof m
                                ? m(e)
                                : p(m) && (m.current = e));
                        },
                        [y]
                      )),
                      T,
                      k,
                      R.visualElement
                    ),
                  ],
                });
              });
              return (v[R] = f), v;
            })(e(t, n));
          }
          if ("undefined" == typeof Proxy) return t;
          let n = new Map();
          return new Proxy(t, {
            get: (e, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
          });
        })((e, t) =>
          (function (e, { forwardMotionProps: t = !1 }, n, i) {
            return {
              ...(C(e) ? ec : ed),
              preloadedFeatures: n,
              useRender: (function (e = !1) {
                return (t, n, i, { latestValues: r }, o) => {
                  let a = (
                      C(t)
                        ? function (e, t, n, i) {
                            let r = (0, s.useMemo)(() => {
                              let n = K();
                              return (
                                Y(
                                  n,
                                  t,
                                  { enableHardwareAcceleration: !1 },
                                  Z(i),
                                  e.transformTemplate
                                ),
                                { ...n.attrs, style: { ...n.style } }
                              );
                            }, [t]);
                            if (e.style) {
                              let t = {};
                              B(t, e.style, e),
                                (r.style = { ...t, ...r.style });
                            }
                            return r;
                          }
                        : function (e, t, n) {
                            let i = {},
                              r = (function (e, t, n) {
                                let i = e.style || {},
                                  r = {};
                                return (
                                  B(r, i, e),
                                  Object.assign(
                                    r,
                                    (function ({ transformTemplate: e }, t, n) {
                                      return (0, s.useMemo)(() => {
                                        let i = V();
                                        return (
                                          N(
                                            i,
                                            t,
                                            { enableHardwareAcceleration: !n },
                                            e
                                          ),
                                          Object.assign({}, i.vars, i.style)
                                        );
                                      }, [t]);
                                    })(e, t, n)
                                  ),
                                  r
                                );
                              })(e, t, n);
                            return (
                              e.drag &&
                                !1 !== e.dragListener &&
                                ((i.draggable = !1),
                                (r.userSelect =
                                  r.WebkitUserSelect =
                                  r.WebkitTouchCallout =
                                    "none"),
                                (r.touchAction =
                                  !0 === e.drag
                                    ? "none"
                                    : `pan-${"x" === e.drag ? "y" : "x"}`)),
                              void 0 === e.tabIndex &&
                                (e.onTap || e.onTapStart || e.whileTap) &&
                                (i.tabIndex = 0),
                              (i.style = r),
                              i
                            );
                          }
                    )(n, r, o, t),
                    l = (function (e, t, n) {
                      let i = {};
                      for (let r in e)
                        ("values" !== r || "object" != typeof e.values) &&
                          (U(r) ||
                            (!0 === n && z(r)) ||
                            (!t && !z(r)) ||
                            (e.draggable && r.startsWith("onDrag"))) &&
                          (i[r] = e[r]);
                      return i;
                    })(n, "string" == typeof t, e),
                    u = t !== s.Fragment ? { ...l, ...a, ref: i } : {},
                    { children: c } = n,
                    d = (0, s.useMemo)(() => ((0, I.i)(c) ? c.get() : c), [c]);
                  return (0, s.createElement)(t, { ...u, children: d });
                };
              })(t),
              createVisualElement: i,
              Component: e,
            };
          })(e, t, n8, n6)
        );
    },
    1580: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return i;
        },
      });
      let i = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    1534: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return r;
        },
        t: function () {
          return o;
        },
      });
      let i = (e) => (t) => "string" == typeof t && t.startsWith(e),
        r = i("--"),
        s = i("var(--"),
        o = (e) => !!s(e) && a.test(e.split("/*")[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    5014: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ei: function () {
          return h;
        },
        lw: function () {
          return f;
        },
        mP: function () {
          return a;
        },
        z2: function () {
          return o;
        },
      });
      var i = n(6019),
        r = n(783),
        s = n(5480);
      let o = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        a = (e) => e === r.Rx || e === s.px,
        l = (e, t) => parseFloat(e.split(", ")[t]),
        u =
          (e, t) =>
          (n, { transform: i }) => {
            if ("none" === i || !i) return 0;
            let r = i.match(/^matrix3d\((.+)\)$/u);
            if (r) return l(r[1], t);
            {
              let t = i.match(/^matrix\((.+)\)$/u);
              return t ? l(t[1], e) : 0;
            }
          },
        c = new Set(["x", "y", "z"]),
        d = i._.filter((e) => !c.has(e));
      function h(e) {
        let t = [];
        return (
          d.forEach((n) => {
            let i = e.getValue(n);
            void 0 !== i &&
              (t.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0));
          }),
          t
        );
      }
      let f = {
        width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
          e.max - e.min - parseFloat(t) - parseFloat(n),
        height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
          e.max - e.min - parseFloat(t) - parseFloat(n),
        top: (e, { top: t }) => parseFloat(t),
        left: (e, { left: t }) => parseFloat(t),
        bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
        right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
        x: u(4, 13),
        y: u(5, 14),
      };
      (f.translateX = f.x), (f.translateY = f.y);
    },
    6450: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return o;
        },
      });
      var i = n(3646),
        r = n(4913),
        s = n(781);
      function o(e, t) {
        let n = (0, s.A)(e);
        return (
          n !== r.h && (n = i.P),
          n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
        );
      }
    },
    781: function (e, t, n) {
      "use strict";
      n.d(t, {
        A: function () {
          return o;
        },
      });
      var i = n(146),
        r = n(4913);
      let s = {
          ...n(7755).j,
          color: i.$,
          backgroundColor: i.$,
          outlineColor: i.$,
          fill: i.$,
          stroke: i.$,
          borderColor: i.$,
          borderTopColor: i.$,
          borderRightColor: i.$,
          borderBottomColor: i.$,
          borderLeftColor: i.$,
          filter: r.h,
          WebkitFilter: r.h,
        },
        o = (e) => s[e];
    },
    3769: function (e, t, n) {
      "use strict";
      n.d(t, {
        $: function () {
          return o;
        },
        C: function () {
          return a;
        },
      });
      var i = n(783),
        r = n(5480),
        s = n(2649);
      let o = [
          i.Rx,
          r.px,
          r.aQ,
          r.RW,
          r.vw,
          r.vh,
          { test: (e) => "auto" === e, parse: (e) => e },
        ],
        a = (e) => o.find((0, s.l)(e));
    },
    7755: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return o;
        },
      });
      var i = n(783),
        r = n(5480);
      let s = { ...i.Rx, transform: Math.round },
        o = {
          borderWidth: r.px,
          borderTopWidth: r.px,
          borderRightWidth: r.px,
          borderBottomWidth: r.px,
          borderLeftWidth: r.px,
          borderRadius: r.px,
          radius: r.px,
          borderTopLeftRadius: r.px,
          borderTopRightRadius: r.px,
          borderBottomRightRadius: r.px,
          borderBottomLeftRadius: r.px,
          width: r.px,
          maxWidth: r.px,
          height: r.px,
          maxHeight: r.px,
          size: r.px,
          top: r.px,
          right: r.px,
          bottom: r.px,
          left: r.px,
          padding: r.px,
          paddingTop: r.px,
          paddingRight: r.px,
          paddingBottom: r.px,
          paddingLeft: r.px,
          margin: r.px,
          marginTop: r.px,
          marginRight: r.px,
          marginBottom: r.px,
          marginLeft: r.px,
          rotate: r.RW,
          rotateX: r.RW,
          rotateY: r.RW,
          rotateZ: r.RW,
          scale: i.bA,
          scaleX: i.bA,
          scaleY: i.bA,
          scaleZ: i.bA,
          skew: r.RW,
          skewX: r.RW,
          skewY: r.RW,
          distance: r.px,
          translateX: r.px,
          translateY: r.px,
          translateZ: r.px,
          x: r.px,
          y: r.px,
          z: r.px,
          perspective: r.px,
          transformPerspective: r.px,
          opacity: i.Fq,
          originX: r.$C,
          originY: r.$C,
          originZ: r.px,
          zIndex: s,
          backgroundPositionX: r.px,
          backgroundPositionY: r.px,
          fillOpacity: i.Fq,
          strokeOpacity: i.Fq,
          numOctaves: s,
        };
    },
    2649: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return i;
        },
      });
      let i = (e) => (t) => t.test(e);
    },
    6019: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return r;
        },
        _: function () {
          return i;
        },
      });
      let i = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        r = new Set(i);
    },
    3653: function (e, t, n) {
      "use strict";
      n.d(t, {
        e: function () {
          return d;
        },
        m: function () {
          return c;
        },
      });
      var i = n(5014),
        r = n(6219);
      let s = new Set(),
        o = !1,
        a = !1;
      function l() {
        if (a) {
          let e = Array.from(s).filter((e) => e.needsMeasurement),
            t = new Set(e.map((e) => e.element)),
            n = new Map();
          t.forEach((e) => {
            let t = (0, i.Ei)(e);
            t.length && (n.set(e, t), e.render());
          }),
            e.forEach((e) => e.measureInitialState()),
            t.forEach((e) => {
              e.render();
              let t = n.get(e);
              t &&
                t.forEach(([t, n]) => {
                  var i;
                  null === (i = e.getValue(t)) || void 0 === i || i.set(n);
                });
            }),
            e.forEach((e) => e.measureEndState()),
            e.forEach((e) => {
              void 0 !== e.suspendedScrollY &&
                window.scrollTo(0, e.suspendedScrollY);
            });
        }
        (a = !1), (o = !1), s.forEach((e) => e.complete()), s.clear();
      }
      function u() {
        s.forEach((e) => {
          e.readKeyframes(), e.needsMeasurement && (a = !0);
        });
      }
      function c() {
        u(), l();
      }
      class d {
        constructor(e, t, n, i, r, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...e]),
            (this.onComplete = t),
            (this.name = n),
            (this.motionValue = i),
            (this.element = r),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (s.add(this),
                o || ((o = !0), r.Wi.read(u), r.Wi.resolveKeyframes(l)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: e,
            name: t,
            element: n,
            motionValue: i,
          } = this;
          for (let r = 0; r < e.length; r++)
            if (null === e[r]) {
              if (0 === r) {
                let r = null == i ? void 0 : i.get(),
                  s = e[e.length - 1];
                if (void 0 !== r) e[0] = r;
                else if (n && t) {
                  let i = n.readValue(t, s);
                  null != i && (e[0] = i);
                }
                void 0 === e[0] && (e[0] = s), i && void 0 === r && i.set(e[0]);
              } else e[r] = e[r - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            s.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), s.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    352: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return r;
        },
      });
      var i = n(8595);
      function r(e, t, n) {
        let r = e.getProps();
        return (0, i.o)(r, t, void 0 !== n ? n : r.custom, e);
      }
    },
    8595: function (e, t, n) {
      "use strict";
      function i(e) {
        let t = [{}, {}];
        return (
          null == e ||
            e.values.forEach((e, n) => {
              (t[0][n] = e.get()), (t[1][n] = e.getVelocity());
            }),
          t
        );
      }
      function r(e, t, n, r) {
        if ("function" == typeof t) {
          let [s, o] = i(r);
          t = t(void 0 !== n ? n : e.custom, s, o);
        }
        if (
          ("string" == typeof t && (t = e.variants && e.variants[t]),
          "function" == typeof t)
        ) {
          let [s, o] = i(r);
          t = t(void 0 !== n ? n : e.custom, s, o);
        }
        return t;
      }
      n.d(t, {
        o: function () {
          return r;
        },
      });
    },
    6159: function (e, t, n) {
      "use strict";
      n.d(t, {
        C: function () {
          return o;
        },
      });
      var i = n(9155),
        r = n(804),
        s = n(352);
      function o(e, t) {
        let {
          transitionEnd: n = {},
          transition: o = {},
          ...a
        } = (0, s.x)(e, t) || {};
        for (let t in (a = { ...a, ...n })) {
          let n = (0, i.Y)(a[t]);
          e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, (0, r.BX)(n));
        }
      }
    },
    565: function (e, t, n) {
      "use strict";
      n.d(t, {
        c: function () {
          return i;
        },
      });
      let i = { skipAnimations: !1, useManualTiming: !1 };
    },
    8746: function (e, t, n) {
      "use strict";
      function i(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function r(e, t) {
        let n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      n.d(t, {
        cl: function () {
          return r;
        },
        y4: function () {
          return i;
        },
      });
    },
    1506: function (e, t, n) {
      "use strict";
      n.d(t, {
        u: function () {
          return i;
        },
      });
      let i = (e, t, n) => (n > t ? t : n < e ? e : n);
    },
    9047: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return r;
        },
        k: function () {
          return s;
        },
      });
      var i = n(9276);
      let r = i.Z,
        s = i.Z;
    },
    7282: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return i;
        },
      });
      let i = "undefined" != typeof document;
    },
    4386: function (e, t, n) {
      "use strict";
      n.d(t, {
        P: function () {
          return i;
        },
      });
      let i = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
    },
    9102: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return i;
        },
      });
      let i = (e) => /^0[^.\s]+$/u.test(e);
    },
    5004: function (e, t, n) {
      "use strict";
      n.d(t, {
        t: function () {
          return i;
        },
      });
      let i = (e, t, n) => e + (t - e) * n;
    },
    9276: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      let i = (e) => e;
    },
    9654: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return r;
        },
      });
      let i = (e, t) => (n) => t(e(n)),
        r = (...e) => e.reduce(i);
    },
    3217: function (e, t, n) {
      "use strict";
      n.d(t, {
        Y: function () {
          return i;
        },
      });
      let i = (e, t, n) => {
        let i = t - e;
        return 0 === i ? 1 : (n - e) / i;
      };
    },
    9155: function (e, t, n) {
      "use strict";
      n.d(t, {
        Y: function () {
          return s;
        },
        p: function () {
          return r;
        },
      });
      var i = n(6925);
      let r = (e) => !!(e && "object" == typeof e && e.mix && e.toValue),
        s = (e) => ((0, i.C)(e) ? e[e.length - 1] || 0 : e);
    },
    2428: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return r;
        },
      });
      var i = n(8746);
      class r {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          return (
            (0, i.y4)(this.subscriptions, e),
            () => (0, i.cl)(this.subscriptions, e)
          );
        }
        notify(e, t, n) {
          let i = this.subscriptions.length;
          if (i) {
            if (1 === i) this.subscriptions[0](e, t, n);
            else
              for (let r = 0; r < i; r++) {
                let i = this.subscriptions[r];
                i && i(e, t, n);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    557: function (e, t, n) {
      "use strict";
      n.d(t, {
        X: function () {
          return r;
        },
        w: function () {
          return i;
        },
      });
      let i = (e) => 1e3 * e,
        r = (e) => e / 1e3;
    },
    458: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return r;
        },
      });
      var i = n(2265);
      function r(e) {
        let t = (0, i.useRef)(null);
        return null === t.current && (t.current = e()), t.current;
      }
    },
    9033: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return r;
        },
      });
      var i = n(2265);
      let r = n(7282).j ? i.useLayoutEffect : i.useEffect;
    },
    3476: function (e, t, n) {
      "use strict";
      function i(e, t) {
        return t ? (1e3 / t) * e : 0;
      }
      n.d(t, {
        R: function () {
          return i;
        },
      });
    },
    804: function (e, t, n) {
      "use strict";
      n.d(t, {
        BX: function () {
          return c;
        },
      });
      var i = n(2428),
        r = n(3476),
        s = n(9993),
        o = n(6219);
      let a = (e) => !isNaN(parseFloat(e)),
        l = { current: void 0 };
      class u {
        constructor(e, t = {}) {
          (this.version = "11.2.10"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (e, t = !0) => {
              let n = s.X.now();
              this.updatedAt !== n && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(e),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                t &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(e),
            (this.owner = t.owner);
        }
        setCurrent(e) {
          (this.current = e),
            (this.updatedAt = s.X.now()),
            null === this.canTrackVelocity &&
              void 0 !== e &&
              (this.canTrackVelocity = a(this.current));
        }
        setPrevFrameValue(e = this.current) {
          (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(e) {
          return this.on("change", e);
        }
        on(e, t) {
          this.events[e] || (this.events[e] = new i.L());
          let n = this.events[e].add(t);
          return "change" === e
            ? () => {
                n(),
                  o.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : n;
        }
        clearListeners() {
          for (let e in this.events) this.events[e].clear();
        }
        attach(e, t) {
          (this.passiveEffect = e), (this.stopPassiveEffect = t);
        }
        set(e, t = !0) {
          t && this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e, t);
        }
        setWithVelocity(e, t, n) {
          this.set(t),
            (this.prev = void 0),
            (this.prevFrameValue = e),
            (this.prevUpdatedAt = this.updatedAt - n);
        }
        jump(e, t = !0) {
          this.updateAndNotify(e),
            (this.prev = e),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            t && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let e = s.X.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          let t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, r.R)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            t
          );
        }
        start(e) {
          return (
            this.stop(),
            new Promise((t) => {
              (this.hasAnimated = !0),
                (this.animation = e(t)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function c(e, t) {
        return new u(e, t);
      }
    },
    5778: function (e, t, n) {
      "use strict";
      n.d(t, {
        $: function () {
          return r;
        },
      });
      var i = n(1583);
      let r = {
        test: (0, n(3338).i)("#"),
        parse: function (e) {
          let t = "",
            n = "",
            i = "",
            r = "";
          return (
            e.length > 5
              ? ((t = e.substring(1, 3)),
                (n = e.substring(3, 5)),
                (i = e.substring(5, 7)),
                (r = e.substring(7, 9)))
              : ((t = e.substring(1, 2)),
                (n = e.substring(2, 3)),
                (i = e.substring(3, 4)),
                (r = e.substring(4, 5)),
                (t += t),
                (n += n),
                (i += i),
                (r += r)),
            {
              red: parseInt(t, 16),
              green: parseInt(n, 16),
              blue: parseInt(i, 16),
              alpha: r ? parseInt(r, 16) / 255 : 1,
            }
          );
        },
        transform: i.m.transform,
      };
    },
    598: function (e, t, n) {
      "use strict";
      n.d(t, {
        J: function () {
          return a;
        },
      });
      var i = n(783),
        r = n(5480),
        s = n(7292),
        o = n(3338);
      let a = {
        test: (0, o.i)("hsl", "hue"),
        parse: (0, o.d)("hue", "saturation", "lightness"),
        transform: ({ hue: e, saturation: t, lightness: n, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(e) +
          ", " +
          r.aQ.transform((0, s.Nw)(t)) +
          ", " +
          r.aQ.transform((0, s.Nw)(n)) +
          ", " +
          (0, s.Nw)(i.Fq.transform(o)) +
          ")",
      };
    },
    146: function (e, t, n) {
      "use strict";
      n.d(t, {
        $: function () {
          return a;
        },
      });
      var i = n(7292),
        r = n(5778),
        s = n(598),
        o = n(1583);
      let a = {
        test: (e) => o.m.test(e) || r.$.test(e) || s.J.test(e),
        parse: (e) =>
          o.m.test(e)
            ? o.m.parse(e)
            : s.J.test(e)
            ? s.J.parse(e)
            : r.$.parse(e),
        transform: (e) =>
          (0, i.HD)(e)
            ? e
            : e.hasOwnProperty("red")
            ? o.m.transform(e)
            : s.J.transform(e),
      };
    },
    1583: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return u;
        },
      });
      var i = n(1506),
        r = n(783),
        s = n(7292),
        o = n(3338);
      let a = (e) => (0, i.u)(0, 255, e),
        l = { ...r.Rx, transform: (e) => Math.round(a(e)) },
        u = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: ({ red: e, green: t, blue: n, alpha: i = 1 }) =>
            "rgba(" +
            l.transform(e) +
            ", " +
            l.transform(t) +
            ", " +
            l.transform(n) +
            ", " +
            (0, s.Nw)(r.Fq.transform(i)) +
            ")",
        };
    },
    3338: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return s;
        },
        i: function () {
          return r;
        },
      });
      var i = n(7292);
      let r = (e, t) => (n) =>
          !!(
            ((0, i.HD)(n) && i.mj.test(n) && n.startsWith(e)) ||
            (t && Object.prototype.hasOwnProperty.call(n, t))
          ),
        s = (e, t, n) => (r) => {
          if (!(0, i.HD)(r)) return r;
          let [s, o, a, l] = r.match(i.KP);
          return {
            [e]: parseFloat(s),
            [t]: parseFloat(o),
            [n]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    4913: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return l;
        },
      });
      var i = n(3646),
        r = n(7292);
      let s = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function o(e) {
        let [t, n] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        let [i] = n.match(r.KP) || [];
        if (!i) return e;
        let o = n.replace(i, ""),
          a = s.has(t) ? 1 : 0;
        return i !== n && (a *= 100), t + "(" + a + o + ")";
      }
      let a = /\b([a-z-]*)\(.*?\)/gu,
        l = {
          ...i.P,
          getAnimatableNone: (e) => {
            let t = e.match(a);
            return t ? t.map(o).join(" ") : e;
          },
        };
    },
    3646: function (e, t, n) {
      "use strict";
      n.d(t, {
        P: function () {
          return h;
        },
        V: function () {
          return l;
        },
      });
      var i = n(146),
        r = n(7292);
      let s = "number",
        o = "color",
        a =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function l(e) {
        let t = e.toString(),
          n = [],
          r = { color: [], number: [], var: [] },
          l = [],
          u = 0,
          c = t
            .replace(
              a,
              (e) => (
                i.$.test(e)
                  ? (r.color.push(u), l.push(o), n.push(i.$.parse(e)))
                  : e.startsWith("var(")
                  ? (r.var.push(u), l.push("var"), n.push(e))
                  : (r.number.push(u), l.push(s), n.push(parseFloat(e))),
                ++u,
                "${}"
              )
            )
            .split("${}");
        return { values: n, split: c, indexes: r, types: l };
      }
      function u(e) {
        return l(e).values;
      }
      function c(e) {
        let { split: t, types: n } = l(e),
          a = t.length;
        return (e) => {
          let l = "";
          for (let u = 0; u < a; u++)
            if (((l += t[u]), void 0 !== e[u])) {
              let t = n[u];
              t === s
                ? (l += (0, r.Nw)(e[u]))
                : t === o
                ? (l += i.$.transform(e[u]))
                : (l += e[u]);
            }
          return l;
        };
      }
      let d = (e) => ("number" == typeof e ? 0 : e),
        h = {
          test: function (e) {
            var t, n;
            return (
              isNaN(e) &&
              (0, r.HD)(e) &&
              ((null === (t = e.match(r.KP)) || void 0 === t
                ? void 0
                : t.length) || 0) +
                ((null === (n = e.match(r.dA)) || void 0 === n
                  ? void 0
                  : n.length) || 0) >
                0
            );
          },
          parse: u,
          createTransformer: c,
          getAnimatableNone: function (e) {
            let t = u(e);
            return c(e)(t.map(d));
          },
        };
    },
    783: function (e, t, n) {
      "use strict";
      n.d(t, {
        Fq: function () {
          return s;
        },
        Rx: function () {
          return r;
        },
        bA: function () {
          return o;
        },
      });
      var i = n(1506);
      let r = {
          test: (e) => "number" == typeof e,
          parse: parseFloat,
          transform: (e) => e,
        },
        s = { ...r, transform: (e) => (0, i.u)(0, 1, e) },
        o = { ...r, default: 1 };
    },
    5480: function (e, t, n) {
      "use strict";
      n.d(t, {
        $C: function () {
          return c;
        },
        RW: function () {
          return s;
        },
        aQ: function () {
          return o;
        },
        px: function () {
          return a;
        },
        vh: function () {
          return l;
        },
        vw: function () {
          return u;
        },
      });
      var i = n(7292);
      let r = (e) => ({
          test: (t) =>
            (0, i.HD)(t) && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: (t) => `${t}${e}`,
        }),
        s = r("deg"),
        o = r("%"),
        a = r("px"),
        l = r("vh"),
        u = r("vw"),
        c = {
          ...o,
          parse: (e) => o.parse(e) / 100,
          transform: (e) => o.transform(100 * e),
        };
    },
    7292: function (e, t, n) {
      "use strict";
      n.d(t, {
        HD: function () {
          return a;
        },
        KP: function () {
          return r;
        },
        Nw: function () {
          return i;
        },
        dA: function () {
          return s;
        },
        mj: function () {
          return o;
        },
      });
      let i = (e) => Math.round(1e5 * e) / 1e5,
        r = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        s =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        o =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function a(e) {
        return "string" == typeof e;
      }
    },
    4894: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return r;
        },
      });
      var i = n(8322);
      function r(e) {
        return !!((0, i.i)(e) && e.add);
      }
    },
    8322: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return i;
        },
      });
      let i = (e) => !!(e && e.getVelocity);
    },
    1810: function (e, t, n) {
      "use strict";
      n.d(t, {
        w_: function () {
          return c;
        },
      });
      var i = n(2265),
        r = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        s = i.createContext && i.createContext(r),
        o = ["attr", "size", "title"];
      function a() {
        return (a = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            }).apply(this, arguments);
      }
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                var i, r;
                (i = t),
                  (r = n[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var n = e[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var i = n.call(e, t || "default");
                        if ("object" != typeof i) return i;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in e
                    ? Object.defineProperty(e, i, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[i] = r);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function c(e) {
        return (t) =>
          i.createElement(
            d,
            a({ attr: u({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map((t, n) =>
                  i.createElement(t.tag, u({ key: n }, t.attr), e(t.child))
                )
              );
            })(e.child)
          );
      }
      function d(e) {
        var t = (t) => {
          var n,
            { attr: r, size: s, title: l } = e,
            c = (function (e, t) {
              if (null == e) return {};
              var n,
                i,
                r = (function (e, t) {
                  if (null == e) return {};
                  var n = {};
                  for (var i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i)) {
                      if (t.indexOf(i) >= 0) continue;
                      n[i] = e[i];
                    }
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++)
                  (n = s[i]),
                    !(t.indexOf(n) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, n) &&
                      (r[n] = e[n]);
              }
              return r;
            })(e, o),
            d = s || t.size || "1em";
          return (
            t.className && (n = t.className),
            e.className && (n = (n ? n + " " : "") + e.className),
            i.createElement(
              "svg",
              a(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                r,
                c,
                {
                  className: n,
                  style: u(u({ color: e.color || t.color }, t.style), e.style),
                  height: d,
                  width: d,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              l && i.createElement("title", null, l),
              e.children
            )
          );
        };
        return void 0 !== s
          ? i.createElement(s.Consumer, null, (e) => t(e))
          : t(r);
      }
    },
    6164: function (e, t, n) {
      "use strict";
      n.d(t, {
        m6: function () {
          return D;
        },
      });
      let i = /^\[(.+)\]$/;
      function r(e, t) {
        let n = e;
        return (
          t.split("-").forEach((e) => {
            n.nextPart.has(e) ||
              n.nextPart.set(e, { nextPart: new Map(), validators: [] }),
              (n = n.nextPart.get(e));
          }),
          n
        );
      }
      let s = /\s+/;
      function o() {
        let e,
          t,
          n = 0,
          i = "";
        for (; n < arguments.length; )
          (e = arguments[n++]) &&
            (t = (function e(t) {
              let n;
              if ("string" == typeof t) return t;
              let i = "";
              for (let r = 0; r < t.length; r++)
                t[r] && (n = e(t[r])) && (i && (i += " "), (i += n));
              return i;
            })(e)) &&
            (i && (i += " "), (i += t));
        return i;
      }
      function a(e) {
        let t = (t) => t[e] || [];
        return (t.isThemeGetter = !0), t;
      }
      let l = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        u = /^\d+\/\d+$/,
        c = new Set(["px", "full", "screen"]),
        d = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        h =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        f = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        p = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        g =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
      function v(e) {
        return y(e) || c.has(e) || u.test(e);
      }
      function m(e) {
        return F(e, "length", M);
      }
      function y(e) {
        return !!e && !Number.isNaN(Number(e));
      }
      function _(e) {
        return F(e, "number", y);
      }
      function b(e) {
        return !!e && Number.isInteger(Number(e));
      }
      function w(e) {
        return e.endsWith("%") && y(e.slice(0, -1));
      }
      function x(e) {
        return l.test(e);
      }
      function k(e) {
        return d.test(e);
      }
      let P = new Set(["length", "size", "percentage"]);
      function S(e) {
        return F(e, P, I);
      }
      function E(e) {
        return F(e, "position", I);
      }
      let R = new Set(["image", "url"]);
      function T(e) {
        return F(e, R, j);
      }
      function C(e) {
        return F(e, "", O);
      }
      function A() {
        return !0;
      }
      function F(e, t, n) {
        let i = l.exec(e);
        return (
          !!i &&
          (i[1] ? ("string" == typeof t ? i[1] === t : t.has(i[1])) : n(i[2]))
        );
      }
      function M(e) {
        return h.test(e) && !f.test(e);
      }
      function I() {
        return !1;
      }
      function O(e) {
        return p.test(e);
      }
      function j(e) {
        return g.test(e);
      }
      let D = (function (e, ...t) {
        let n, a, l;
        let u = function (s) {
          var o;
          return (
            (a = (n = {
              cache: (function (e) {
                if (e < 1) return { get: () => void 0, set: () => {} };
                let t = 0,
                  n = new Map(),
                  i = new Map();
                function r(r, s) {
                  n.set(r, s), ++t > e && ((t = 0), (i = n), (n = new Map()));
                }
                return {
                  get(e) {
                    let t = n.get(e);
                    return void 0 !== t
                      ? t
                      : void 0 !== (t = i.get(e))
                      ? (r(e, t), t)
                      : void 0;
                  },
                  set(e, t) {
                    n.has(e) ? n.set(e, t) : r(e, t);
                  },
                };
              })((o = t.reduce((e, t) => t(e), e())).cacheSize),
              splitModifiers: (function (e) {
                let t = e.separator,
                  n = 1 === t.length,
                  i = t[0],
                  r = t.length;
                return function (e) {
                  let s;
                  let o = [],
                    a = 0,
                    l = 0;
                  for (let u = 0; u < e.length; u++) {
                    let c = e[u];
                    if (0 === a) {
                      if (c === i && (n || e.slice(u, u + r) === t)) {
                        o.push(e.slice(l, u)), (l = u + r);
                        continue;
                      }
                      if ("/" === c) {
                        s = u;
                        continue;
                      }
                    }
                    "[" === c ? a++ : "]" === c && a--;
                  }
                  let u = 0 === o.length ? e : e.substring(l),
                    c = u.startsWith("!"),
                    d = c ? u.substring(1) : u;
                  return {
                    modifiers: o,
                    hasImportantModifier: c,
                    baseClassName: d,
                    maybePostfixModifierPosition: s && s > l ? s - l : void 0,
                  };
                };
              })(o),
              ...(function (e) {
                let t = (function (e) {
                    var t;
                    let { theme: n, prefix: i } = e,
                      s = { nextPart: new Map(), validators: [] };
                    return (
                      ((t = Object.entries(e.classGroups)),
                      i
                        ? t.map(([e, t]) => [
                            e,
                            t.map((e) =>
                              "string" == typeof e
                                ? i + e
                                : "object" == typeof e
                                ? Object.fromEntries(
                                    Object.entries(e).map(([e, t]) => [
                                      i + e,
                                      t,
                                    ])
                                  )
                                : e
                            ),
                          ])
                        : t).forEach(([e, t]) => {
                        (function e(t, n, i, s) {
                          t.forEach((t) => {
                            if ("string" == typeof t) {
                              ("" === t ? n : r(n, t)).classGroupId = i;
                              return;
                            }
                            if ("function" == typeof t) {
                              if (t.isThemeGetter) {
                                e(t(s), n, i, s);
                                return;
                              }
                              n.validators.push({
                                validator: t,
                                classGroupId: i,
                              });
                              return;
                            }
                            Object.entries(t).forEach(([t, o]) => {
                              e(o, r(n, t), i, s);
                            });
                          });
                        })(t, s, e, n);
                      }),
                      s
                    );
                  })(e),
                  {
                    conflictingClassGroups: n,
                    conflictingClassGroupModifiers: s,
                  } = e;
                return {
                  getClassGroupId: function (e) {
                    let n = e.split("-");
                    return (
                      "" === n[0] && 1 !== n.length && n.shift(),
                      (function e(t, n) {
                        if (0 === t.length) return n.classGroupId;
                        let i = t[0],
                          r = n.nextPart.get(i),
                          s = r ? e(t.slice(1), r) : void 0;
                        if (s) return s;
                        if (0 === n.validators.length) return;
                        let o = t.join("-");
                        return n.validators.find(({ validator: e }) => e(o))
                          ?.classGroupId;
                      })(n, t) ||
                        (function (e) {
                          if (i.test(e)) {
                            let t = i.exec(e)[1],
                              n = t?.substring(0, t.indexOf(":"));
                            if (n) return "arbitrary.." + n;
                          }
                        })(e)
                    );
                  },
                  getConflictingClassGroupIds: function (e, t) {
                    let i = n[e] || [];
                    return t && s[e] ? [...i, ...s[e]] : i;
                  },
                };
              })(o),
            }).cache.get),
            (l = n.cache.set),
            (u = c),
            c(s)
          );
        };
        function c(e) {
          let t = a(e);
          if (t) return t;
          let i = (function (e, t) {
            let {
                splitModifiers: n,
                getClassGroupId: i,
                getConflictingClassGroupIds: r,
              } = t,
              o = new Set();
            return e
              .trim()
              .split(s)
              .map((e) => {
                let {
                    modifiers: t,
                    hasImportantModifier: r,
                    baseClassName: s,
                    maybePostfixModifierPosition: o,
                  } = n(e),
                  a = i(o ? s.substring(0, o) : s),
                  l = !!o;
                if (!a) {
                  if (!o || !(a = i(s)))
                    return { isTailwindClass: !1, originalClassName: e };
                  l = !1;
                }
                let u = (function (e) {
                  if (e.length <= 1) return e;
                  let t = [],
                    n = [];
                  return (
                    e.forEach((e) => {
                      "[" === e[0]
                        ? (t.push(...n.sort(), e), (n = []))
                        : n.push(e);
                    }),
                    t.push(...n.sort()),
                    t
                  );
                })(t).join(":");
                return {
                  isTailwindClass: !0,
                  modifierId: r ? u + "!" : u,
                  classGroupId: a,
                  originalClassName: e,
                  hasPostfixModifier: l,
                };
              })
              .reverse()
              .filter((e) => {
                if (!e.isTailwindClass) return !0;
                let {
                    modifierId: t,
                    classGroupId: n,
                    hasPostfixModifier: i,
                  } = e,
                  s = t + n;
                return (
                  !o.has(s) &&
                  (o.add(s), r(n, i).forEach((e) => o.add(t + e)), !0)
                );
              })
              .reverse()
              .map((e) => e.originalClassName)
              .join(" ");
          })(e, n);
          return l(e, i), i;
        }
        return function () {
          return u(o.apply(null, arguments));
        };
      })(function () {
        let e = a("colors"),
          t = a("spacing"),
          n = a("blur"),
          i = a("brightness"),
          r = a("borderColor"),
          s = a("borderRadius"),
          o = a("borderSpacing"),
          l = a("borderWidth"),
          u = a("contrast"),
          c = a("grayscale"),
          d = a("hueRotate"),
          h = a("invert"),
          f = a("gap"),
          p = a("gradientColorStops"),
          g = a("gradientColorStopPositions"),
          P = a("inset"),
          R = a("margin"),
          F = a("opacity"),
          M = a("padding"),
          I = a("saturate"),
          O = a("scale"),
          j = a("sepia"),
          D = a("skew"),
          L = a("space"),
          $ = a("translate"),
          N = () => ["auto", "contain", "none"],
          V = () => ["auto", "hidden", "clip", "visible", "scroll"],
          B = () => ["auto", x, t],
          q = () => [x, t],
          z = () => ["", v, m],
          U = () => ["auto", y, x],
          W = () => [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
          ],
          H = () => ["solid", "dashed", "dotted", "double", "none"],
          G = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          X = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
          ],
          Y = () => ["", "0", x],
          K = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          Z = () => [y, _],
          Q = () => [y, x];
        return {
          cacheSize: 500,
          separator: ":",
          theme: {
            colors: [A],
            spacing: [v, m],
            blur: ["none", "", k, x],
            brightness: Z(),
            borderColor: [e],
            borderRadius: ["none", "", "full", k, x],
            borderSpacing: q(),
            borderWidth: z(),
            contrast: Z(),
            grayscale: Y(),
            hueRotate: Q(),
            invert: Y(),
            gap: q(),
            gradientColorStops: [e],
            gradientColorStopPositions: [w, m],
            inset: B(),
            margin: B(),
            opacity: Z(),
            padding: q(),
            saturate: Z(),
            scale: Z(),
            sepia: Y(),
            skew: Q(),
            space: q(),
            translate: q(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", x] }],
            container: ["container"],
            columns: [{ columns: [k] }],
            "break-after": [{ "break-after": K() }],
            "break-before": [{ "break-before": K() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [...W(), x] }],
            overflow: [{ overflow: V() }],
            "overflow-x": [{ "overflow-x": V() }],
            "overflow-y": [{ "overflow-y": V() }],
            overscroll: [{ overscroll: N() }],
            "overscroll-x": [{ "overscroll-x": N() }],
            "overscroll-y": [{ "overscroll-y": N() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [P] }],
            "inset-x": [{ "inset-x": [P] }],
            "inset-y": [{ "inset-y": [P] }],
            start: [{ start: [P] }],
            end: [{ end: [P] }],
            top: [{ top: [P] }],
            right: [{ right: [P] }],
            bottom: [{ bottom: [P] }],
            left: [{ left: [P] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", b, x] }],
            basis: [{ basis: B() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", x] }],
            grow: [{ grow: Y() }],
            shrink: [{ shrink: Y() }],
            order: [{ order: ["first", "last", "none", b, x] }],
            "grid-cols": [{ "grid-cols": [A] }],
            "col-start-end": [{ col: ["auto", { span: ["full", b, x] }, x] }],
            "col-start": [{ "col-start": U() }],
            "col-end": [{ "col-end": U() }],
            "grid-rows": [{ "grid-rows": [A] }],
            "row-start-end": [{ row: ["auto", { span: [b, x] }, x] }],
            "row-start": [{ "row-start": U() }],
            "row-end": [{ "row-end": U() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", x] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", x] }],
            gap: [{ gap: [f] }],
            "gap-x": [{ "gap-x": [f] }],
            "gap-y": [{ "gap-y": [f] }],
            "justify-content": [{ justify: ["normal", ...X()] }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [{ content: ["normal", ...X(), "baseline"] }],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [{ "place-content": [...X(), "baseline"] }],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [M] }],
            px: [{ px: [M] }],
            py: [{ py: [M] }],
            ps: [{ ps: [M] }],
            pe: [{ pe: [M] }],
            pt: [{ pt: [M] }],
            pr: [{ pr: [M] }],
            pb: [{ pb: [M] }],
            pl: [{ pl: [M] }],
            m: [{ m: [R] }],
            mx: [{ mx: [R] }],
            my: [{ my: [R] }],
            ms: [{ ms: [R] }],
            me: [{ me: [R] }],
            mt: [{ mt: [R] }],
            mr: [{ mr: [R] }],
            mb: [{ mb: [R] }],
            ml: [{ ml: [R] }],
            "space-x": [{ "space-x": [L] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [L] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [
              { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", x, t] },
            ],
            "min-w": [{ "min-w": [x, t, "min", "max", "fit"] }],
            "max-w": [
              {
                "max-w": [
                  x,
                  t,
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [k] },
                  k,
                ],
              },
            ],
            h: [
              { h: [x, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "min-h": [
              { "min-h": [x, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "max-h": [
              { "max-h": [x, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            size: [{ size: [x, t, "auto", "min", "max", "fit"] }],
            "font-size": [{ text: ["base", k, m] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  _,
                ],
              },
            ],
            "font-family": [{ font: [A] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  x,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", y, _] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  v,
                  x,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", x] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", x] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [F] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [F] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...H(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", v, m] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", v, x] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: q() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  x,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", x] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [F] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [...W(), E] }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", S] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  T,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from-pos": [{ from: [g] }],
            "gradient-via-pos": [{ via: [g] }],
            "gradient-to-pos": [{ to: [g] }],
            "gradient-from": [{ from: [p] }],
            "gradient-via": [{ via: [p] }],
            "gradient-to": [{ to: [p] }],
            rounded: [{ rounded: [s] }],
            "rounded-s": [{ "rounded-s": [s] }],
            "rounded-e": [{ "rounded-e": [s] }],
            "rounded-t": [{ "rounded-t": [s] }],
            "rounded-r": [{ "rounded-r": [s] }],
            "rounded-b": [{ "rounded-b": [s] }],
            "rounded-l": [{ "rounded-l": [s] }],
            "rounded-ss": [{ "rounded-ss": [s] }],
            "rounded-se": [{ "rounded-se": [s] }],
            "rounded-ee": [{ "rounded-ee": [s] }],
            "rounded-es": [{ "rounded-es": [s] }],
            "rounded-tl": [{ "rounded-tl": [s] }],
            "rounded-tr": [{ "rounded-tr": [s] }],
            "rounded-br": [{ "rounded-br": [s] }],
            "rounded-bl": [{ "rounded-bl": [s] }],
            "border-w": [{ border: [l] }],
            "border-w-x": [{ "border-x": [l] }],
            "border-w-y": [{ "border-y": [l] }],
            "border-w-s": [{ "border-s": [l] }],
            "border-w-e": [{ "border-e": [l] }],
            "border-w-t": [{ "border-t": [l] }],
            "border-w-r": [{ "border-r": [l] }],
            "border-w-b": [{ "border-b": [l] }],
            "border-w-l": [{ "border-l": [l] }],
            "border-opacity": [{ "border-opacity": [F] }],
            "border-style": [{ border: [...H(), "hidden"] }],
            "divide-x": [{ "divide-x": [l] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [l] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [F] }],
            "divide-style": [{ divide: H() }],
            "border-color": [{ border: [r] }],
            "border-color-x": [{ "border-x": [r] }],
            "border-color-y": [{ "border-y": [r] }],
            "border-color-t": [{ "border-t": [r] }],
            "border-color-r": [{ "border-r": [r] }],
            "border-color-b": [{ "border-b": [r] }],
            "border-color-l": [{ "border-l": [r] }],
            "divide-color": [{ divide: [r] }],
            "outline-style": [{ outline: ["", ...H()] }],
            "outline-offset": [{ "outline-offset": [v, x] }],
            "outline-w": [{ outline: [v, m] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: z() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [F] }],
            "ring-offset-w": [{ "ring-offset": [v, m] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", k, C] }],
            "shadow-color": [{ shadow: [A] }],
            opacity: [{ opacity: [F] }],
            "mix-blend": [
              { "mix-blend": [...G(), "plus-lighter", "plus-darker"] },
            ],
            "bg-blend": [{ "bg-blend": G() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [n] }],
            brightness: [{ brightness: [i] }],
            contrast: [{ contrast: [u] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", k, x] }],
            grayscale: [{ grayscale: [c] }],
            "hue-rotate": [{ "hue-rotate": [d] }],
            invert: [{ invert: [h] }],
            saturate: [{ saturate: [I] }],
            sepia: [{ sepia: [j] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [n] }],
            "backdrop-brightness": [{ "backdrop-brightness": [i] }],
            "backdrop-contrast": [{ "backdrop-contrast": [u] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
            "backdrop-invert": [{ "backdrop-invert": [h] }],
            "backdrop-opacity": [{ "backdrop-opacity": [F] }],
            "backdrop-saturate": [{ "backdrop-saturate": [I] }],
            "backdrop-sepia": [{ "backdrop-sepia": [j] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [o] }],
            "border-spacing-x": [{ "border-spacing-x": [o] }],
            "border-spacing-y": [{ "border-spacing-y": [o] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  x,
                ],
              },
            ],
            duration: [{ duration: Q() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", x] }],
            delay: [{ delay: Q() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", x] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [O] }],
            "scale-x": [{ "scale-x": [O] }],
            "scale-y": [{ "scale-y": [O] }],
            rotate: [{ rotate: [b, x] }],
            "translate-x": [{ "translate-x": [$] }],
            "translate-y": [{ "translate-y": [$] }],
            "skew-x": [{ "skew-x": [D] }],
            "skew-y": [{ "skew-y": [D] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  x,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: [{ appearance: ["none", "auto"] }],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  x,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": q() }],
            "scroll-mx": [{ "scroll-mx": q() }],
            "scroll-my": [{ "scroll-my": q() }],
            "scroll-ms": [{ "scroll-ms": q() }],
            "scroll-me": [{ "scroll-me": q() }],
            "scroll-mt": [{ "scroll-mt": q() }],
            "scroll-mr": [{ "scroll-mr": q() }],
            "scroll-mb": [{ "scroll-mb": q() }],
            "scroll-ml": [{ "scroll-ml": q() }],
            "scroll-p": [{ "scroll-p": q() }],
            "scroll-px": [{ "scroll-px": q() }],
            "scroll-py": [{ "scroll-py": q() }],
            "scroll-ps": [{ "scroll-ps": q() }],
            "scroll-pe": [{ "scroll-pe": q() }],
            "scroll-pt": [{ "scroll-pt": q() }],
            "scroll-pr": [{ "scroll-pr": q() }],
            "scroll-pb": [{ "scroll-pb": q() }],
            "scroll-pl": [{ "scroll-pl": q() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", x] },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [v, m, _] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      });
    },
  },
]);
