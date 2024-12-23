(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    7062: function (e, t, i) {
      Promise.resolve().then(i.t.bind(i, 8173, 23)),
        Promise.resolve().then(i.t.bind(i, 231, 23)),
        Promise.resolve().then(i.bind(i, 5195)),
        Promise.resolve().then(i.bind(i, 2467)),
        Promise.resolve().then(i.bind(i, 8054)),
        Promise.resolve().then(i.bind(i, 2878)),
        Promise.resolve().then(i.bind(i, 7717)),
        Promise.resolve().then(i.bind(i, 469));
    },
    5195: function (e, t, i) {
      "use strict";
      i.d(t, {
        PrimaryButton: function () {
          return p;
        },
        SecondaryButton: function () {
          return u;
        },
      });
      var s = i(7437),
        n = i(2265),
        r = i(762),
        a = i(7138),
        o = i(4748),
        l = i(6974),
        c = i.n(l),
        d = i(6648),
        m = i(4008);
      function h(e) {
        let { isOpen: t, onClose: i } = e,
          [l, h] = (0, n.useState)(!1);
        return (0, s.jsx)(o.Z, {
          isOpen: t,
          onClose: i,
          children: (0, s.jsxs)("div", {
            className: "xs:p-4 p-6 max-w-md w-full overflow-hidden",
            children: [
              (0, s.jsx)("h2", {
                className: (0, r.cn)(
                  c().className,
                  "text-fluid-h4 font-bold text-center mb-6"
                ),
                children: "NUBAI Token",
              }),
              (0, s.jsx)("p", {
                className: "text-center text-lg mb-4",
                children: "Utility Token of the NUBAIConomy",
              }),
              (0, s.jsx)("p", {
                className: "text-center text-primary text-lg mb-6",
                children: "Buy Now At",
              }),
              (0, s.jsxs)("div", {
                className: "flex justify-center items-center mb-6 gap-3",
                children: [
                  (0, s.jsx)(a.default, {
                    href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x00000000000000000000000000000000000000",
                    target: "_blank",
                    className:
                      "w-20 h-20 flex justify-center items-center overflow-hidden mb-3",
                    children: (0, s.jsx)(d.default, {
                      width: 90,
                      height: 90,
                      priority: !0,
                      src: "/buy-giga-2.svg",
                      alt: "Buy NUBAI on UniSwap",
                    }),
                  }),
                  (0, s.jsx)(a.default, {
                    href: "https://www.dextools.io/app/en/ether/pool-explorer/0x00000000000000000000000000000000000000",
                    target: "_blank",
                    className:
                      "w-20 h-20 flex justify-center items-center overflow-hidden",
                    children: (0, s.jsx)(d.default, {
                      width: 53,
                      height: 60,
                      priority: !0,
                      src: "/buy-giga-3.svg",
                      alt: "Buy NUBAI on Dextools",
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "flex items-center justify-center  mb-2 gap-2",
                children: [
                  (0, s.jsx)("p", {
                    className: "text-center text-sm text-gray-400",
                    children: "Contract Address:",
                  }),
                  (0, s.jsx)("button", {
                    onClick: () => {
                      navigator.clipboard.writeText(
                        "0x00000000000000000000000000000000000000"
                      ),
                        h(!0),
                        setTimeout(() => h(!1), 2e3);
                    },
                    className: "text-primary",
                    children: (0, s.jsx)(m.zFu, { size: 20 }),
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "flex justify-center items-center mb-6 gap-2",
                children: (0, s.jsx)("p", {
                  className: "text-center text-sm text-primary",
                  children: "0x00000000000000000000000000000000000000",
                }),
              }),
              l &&
                (0, s.jsx)("p", {
                  className: "text-center text-sm text-green-500 mb-6",
                  children: "Address copied!",
                }),
              (0, s.jsxs)("p", {
                className: "text-center text-sm text-gray-400",
                children: [
                  "Join",
                  " ",
                  (0, s.jsx)(a.default, {
                    className: "text-primary",
                    href: "https://t.me/",
                    target: "_blank",
                    children: "Community",
                  }),
                  " ",
                  "and be the first to get updates.",
                ],
              }),
            ],
          }),
        });
      }
      var x = i(3226);
      function p(e) {
        let { children: t, className: i, ...a } = e,
          [o, l] = (0, n.useState)(!1),
          c = (0, x.U0)();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("button", {
              className: (0, r.cn)(i, "relative"),
              onClick: () => {
                l(!0), null == c || c.capture("buy_giga_clicked");
              },
              ...a,
              children: [
                (0, s.jsx)("div", {
                  className:
                    "px-7 py-3 border font-medium border-primary bg-black text-white rounded-none z-10 transition-all duration-300 ease-in-out hover:translate-x-[5px] hover:translate-y-[5px]",
                  children: t,
                }),
                (0, s.jsx)("div", {
                  className:
                    "absolute w-full h-full bg-primary left-[5px] top-[5px] -z-10",
                }),
              ],
            }),
            (0, s.jsx)(h, {
              isOpen: o,
              onClose: () => {
                l(!1);
              },
            }),
          ],
        });
      }
      function u(e) {
        let { children: t, className: i, ...n } = e;
        return (0, s.jsx)(a.default, {
          href: "https://t.me/OfficialGigaTraderBot?start=site",
          target: "_blank",
          children: (0, s.jsxs)("button", {
            className: (0, r.cn)(i, "relative"),
            ...n,
            children: [
              (0, s.jsx)("div", {
                className:
                  "px-5 py-3 border font-medium border-primary bg-black text-white rounded-none z-10 transition-all duration-300 ease-in-out hover:translate-x-[5px] hover:translate-y-[5px]",
                children: t,
              }),
              (0, s.jsx)("div", {
                className:
                  "absolute w-full h-full bg-black border border-primary left-[5px] top-[5px] -z-10",
              }),
            ],
          }),
        });
      }
    },
    4748: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return l;
        },
      });
      var s = i(7437),
        n = i(2265),
        r = i(5127),
        a = i(1419),
        o = i(6356);
      function l(e) {
        let { isOpen: t, onClose: i, children: l } = e;
        return (
          (0, n.useEffect)(
            () => (
              t
                ? (document.body.style.overflow = "hidden")
                : (document.body.style.overflow = "auto"),
              () => {
                document.body.style.overflow = "auto";
              }
            ),
            [t]
          ),
          (0, s.jsx)(r.M, {
            children:
              t &&
              (0, s.jsx)(a.E.div, {
                className:
                  "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 0.3 },
                onClick: (e) => {
                  e.target === e.currentTarget && i();
                },
                children: (0, s.jsxs)(a.E.div, {
                  initial: { opacity: 0, y: 50 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: 50 },
                  transition: { duration: 0.3 },
                  className:
                    "bg-black border border-secondary rounded-lg shadow-lg p-6 pt-8 max-w-md w-full relative mx-8 overflow-hidden xs:mx-6",
                  children: [
                    (0, s.jsx)("button", {
                      className: "absolute top-4 right-4 text-white",
                      onClick: i,
                      children: (0, s.jsx)(o.FU5, {
                        className: "text-secondary",
                        size: 24,
                      }),
                    }),
                    l,
                  ],
                }),
              }),
          })
        );
      }
    },
    2467: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return u;
          },
        });
      var s = i(7437),
        n = i(2265),
        r = i(762),
        a = i(4839),
        o = i(6974),
        l = i.n(o),
        c = i(7439),
        d = i(5351),
        m = i(9805),
        h = i(1419),
        x = i(3473);
      let p = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      };
      function u(e) {
        let {
            title: t,
            description: i,
            children: o,
            className: u,
            titleClassName: g,
            descriptionClassName: f,
            contentClassName: b,
            vector: y,
            vectorPosition: j = "top-0 right-0",
            resetBreakpoint: v,
          } = e,
          k = (0, c.Z)(v || 0),
          w = (0, m._)(),
          { ref: N, inView: L } = (0, x.YD)({
            triggerOnce: !0,
            threshold: 0.1,
          });
        return (
          n.useEffect(() => {
            L && w.start("visible");
          }, [w, L]),
          (0, s.jsx)("section", {
            className: (0, r.cn)("py-24 lg:py-20 sm:py-16", u),
            ref: N,
            children: (0, s.jsxs)(h.E.div, {
              className: "container mx-auto text-center relative",
              variants: p,
              initial: "hidden",
              animate: w,
              children: [
                (0, s.jsxs)("h2", {
                  className: (0, a.Z)(
                    l().className,
                    "text-fluid-h2 font-bold text-white inline-block relative leading-[120%]",
                    g
                  ),
                  children: [
                    (0, d.R)(t, k),
                    (0, s.jsx)("span", {
                      className: "text-primary",
                      children: ".",
                    }),
                    y &&
                      (0, s.jsx)("span", {
                        className: "absolute -z-10 ".concat(j),
                        children: y,
                      }),
                  ],
                }),
                i &&
                  (0, s.jsx)("p", {
                    className: (0, r.cn)(
                      "mt-6 text-lg text-offWhite mx-auto tracking-wider",
                      f
                    ),
                    children: i.split("{.n}").map((e, t) =>
                      (0, s.jsxs)(
                        n.Fragment,
                        {
                          children: [
                            e,
                            t !== i.split("{.n}").length - 1 &&
                              (0, s.jsx)("br", {}),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                (0, s.jsx)("div", {
                  className: (0, r.cn)("mt-14", b),
                  children: o,
                }),
              ],
            }),
          })
        );
      }
    },
    8054: function (e, t, i) {
      "use strict";
      i.d(t, {
        default: function () {
          return p;
        },
      });
      var s = i(7437),
        n = i(789),
        r = i(4839),
        a = i(5195),
        o = i(6974),
        l = i.n(o),
        c = i(6648),
        d = i(1419);
      let m = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
        h = {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1, delay: 0.3 } },
        },
        x = (e) => ({
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: e,
            },
          },
        });
      function p() {
        return (0, s.jsx)("section", {
          className: "py-24",
          children: (0, s.jsxs)("div", {
            className: "flex items-center justify-between gap-16",
            children: [
              (0, s.jsxs)("div", {
                className: "sm:w-full",
                children: [
                  (0, s.jsxs)(d.E.h1, {
                    className: (0, r.Z)(
                      l().className,
                      "text-fluid-h1 font-bold text-white inline-block relative max-w-2xl leading-[111%] tracking-[4px] xs:w-full uppercase"
                    ),
                    variants: m,
                    initial: "hidden",
                    animate: "visible",
                    children: [
                      "UNLOCK ON-CHAIN TRADING ",
                      (0, s.jsx)("br", {}),
                      " SUPER POWERS",
                      (0, s.jsx)("span", {
                        className: "text-primary",
                        children: ".",
                      }),
                      (0, s.jsx)("span", {
                        className:
                          "absolute bottom-0 right-[50%] -z-10 xl:right-[45%] lg:-bottom-2 lg:right-[55%] sm:right-[45%]",
                        children: (0, s.jsx)(n.NH, {}),
                      }),
                    ],
                  }),
                  (0, s.jsx)(d.E.p, {
                    className:
                      "mt-7 text-xl text-offWhite max-w-[600px] tracking-wider",
                    variants: h,
                    initial: "hidden",
                    animate: "visible",
                    children:
                      "NeuroBlock AI combines advanced AI signals and powerful trading features to give you the edge you need to succeed in on-chain markets.",
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex mt-14 gap-6 xs:flex-col",
                    children: [
                      (0, s.jsx)(d.E.div, {
                        variants: x(0.9),
                        initial: "hidden",
                        animate: "visible",
                        children: (0, s.jsx)(a.PrimaryButton, {
                          className: "lg:w-full",
                          children: "Buy NUBAI",
                        }),
                      }),
                      
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(d.E.div, {
                variants: x(1.2),
                initial: "hidden",
                animate: "visible",
                className: "mr-20 xl:mr-0 lg:hidden",
                children: (0, s.jsx)(c.default, {
                  src: "/gigabots-hero.png",
                  width: 409,
                  height: 590,
                  alt: "NeuroBlock AI Hero",
                }),
              }),
            ],
          }),
        });
      }
    },
    2878: function (e, t, i) {
      "use strict";
      i.d(t, {
        default: function () {
          return v;
        },
      });
      var s = i(7437),
        n = i(2265),
        r = i(789),
        a = i(2467),
        o = i(7327),
        l = i(1109),
        c = i(6974),
        d = i.n(c),
        m = i(4839),
        h = i(1419),
        x = i(762);
      let p = (e) => {
        let { number: t, className: i } = e,
          n = Array(t || 20).fill(!0);
        return (0, s.jsx)(s.Fragment, {
          children: n.map((e, t) =>
            (0, s.jsx)(
              "span",
              {
                className: (0, x.cn)(
                  "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
                  "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
                  i
                ),
                style: {
                  top: 0,
                  left: Math.floor(800 * Math.random() + -400) + "px",
                  animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
                  animationDuration: Math.floor(8 * Math.random() + 2) + "s",
                },
              },
              "meteor" + t
            )
          ),
        });
      };
      var u = i(3267);
      function g(e) {
        let { className: t } = e;
        return (0, s.jsxs)("svg", {
          className: t,
          width: "42",
          height: "27",
          viewBox: "0 0 42 27",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, s.jsxs)("g", {
              clipPath: "url(#clip0_8511_1764)",
              children: [
                (0, s.jsx)("path", {
                  opacity: "0.5",
                  d: "M15.0511 27.2224L28.6623 13.6112L15.0511 0L13.5 1.91749L25.38 13.2575L13.5 25.1375L15.0511 27.2224Z",
                  fill: "#5AE3EA",
                }),
                (0, s.jsx)("path", {
                  opacity: "0.5",
                  d: "M24.5511 27.2224L38.1623 13.6112L24.5511 0L23 1.91749L34.88 13.2575L23 25.1375L24.5511 27.2224Z",
                  fill: "#5AE3EA",
                }),
              ],
            }),
            (0, s.jsx)("defs", {
              children: (0, s.jsx)("clipPath", {
                id: "clip0_8511_1764",
                children: (0, s.jsx)("rect", {
                  width: "41.04",
                  height: "27",
                  fill: "#5AE3EA",
                }),
              }),
            }),
          ],
        });
      }
      function f(e) {
        let { className: t } = e;
        return (0, s.jsxs)("svg", {
          width: "42",
          className: t,
          height: "27",
          viewBox: "0 0 42 27",
          fill: "#5AE3EA",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, s.jsxs)("g", {
              opacity: "0.5",
              clipPath: "url(#clip0_8511_1750)",
              children: [
                (0, s.jsx)("path", {
                  d: "M27.111 27.2224L13.4998 13.6112L27.111 0L28.6621 1.91749L16.7821 13.2575L28.6621 25.1375L27.111 27.2224Z",
                  fill: "#5AE3EA",
                }),
                (0, s.jsx)("path", {
                  d: "M16.611 27.2224L2.99984 13.6112L16.611 0L18.1621 1.91749L6.28211 13.2575L18.1621 25.1375L16.611 27.2224Z",
                  fill: "#5AE3EA",
                }),
              ],
            }),
            (0, s.jsx)("defs", {
              children: (0, s.jsx)("clipPath", {
                id: "clip0_8511_1750",
                children: (0, s.jsx)("rect", {
                  width: "41.04",
                  height: "27",
                  fill: "#5AE3EA",
                  transform: "matrix(-1 0 0 1 41.04 0)",
                }),
              }),
            }),
          ],
        });
      }
      i(3034), i(4885);
      var b = i(7439),
        y = i(6341),
        j = i(4748);
      function v() {
        let [e, t] = (0, n.useState)(0),
          [i, c] = (0, n.useState)(!1),
          x = (0, b.Z)(1024),
          v = () => {
            c(!0);
          },
          k = (t, i) => {
            let n = i === e;
            return (0, s.jsx)(
              u.o5,
              {
                className: "group self-end",
                onClick: n ? v : void 0,
                children: (0, s.jsx)(h.E.div, {
                  initial: { scale: 0.8, y: 30, opacity: 0.5 },
                  animate: {
                    scale: n ? 1 : 0.8,
                    y: n ? 0 : 30,
                    opacity: n ? 1 : 0.5,
                  },
                  transition: { duration: 0.3 },
                  className: (0, m.Z)(
                    "border border-primary p-10 relative overflow-hidden h-full cursor-pointer transition-colors duration-300",
                    n
                      ? "bg-[#050313] border-primary group-hover:border-primary"
                      : "opacity-50 scale-90"
                  ),
                  children: (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsxs)("span", {
                        className:
                          "block text-primary mb-3 uppercase tracking-[0.4em]",
                        children: ["Tier ", t.tier, "*"],
                      }),
                      (0, s.jsx)(h.E.h2, {
                        className: (0, m.Z)(
                          d().className,
                          "text-fluid-h2 font-bold mb-8 leading-[1.1]"
                        ),
                        children: t.name,
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "flex items-center text-primary font-medium transition-colors duration-300",
                        children: [
                          (0, s.jsx)("span", {
                            className: "mr-2",
                            children: "Learn More",
                          }),
                          (0, s.jsx)(l.yoF, {
                            size: 20,
                            className:
                              "transition-transform duration-300 group-hover:translate-x-1",
                            style: { color: "inherit" },
                          }),
                        ],
                      }),
                      n && (0, s.jsx)(p, { number: 10 }),
                    ],
                  }),
                }),
              },
              i
            );
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(a.default, {
              title: "Discover the Power {.n} of AI Signals",
              resetBreakpoint: 600,
              descriptionClassName: "max-w-[650px]",
              description:
                "Signals with high predictive power are discovered from enormous data sets using advanced AI/ML. Combine signals to create your own powerful alpha strategies.",
              vector: (0, s.jsx)(r.gV, {}),
              vectorPosition: "top-[6%] right-[20%]",
              children: (0, s.jsx)("div", {
                className: "mx-auto text-center",
                children: (0, s.jsxs)(u.tq, {
                  modules: [y.W_],
                  slidesPerView: x ? 3 : 1,
                  speed: 600,
                  centeredSlides: !0,
                  onSlideChange: (e) => t(e.activeIndex),
                  navigation: {
                    nextEl: ".xswiper-button-next",
                    prevEl: ".xswiper-button-prev",
                  },
                  className:
                    "relative mx-auto text-white text-left flex items-end",
                  style: { overflow: x ? "hidden" : "visible" },
                  children: [
                    o.pp.map((e, t) => k(e, t)),
                    (0, s.jsxs)("div", {
                      className: "flex mx-auto justify-center gap-8 mt-12",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "xswiper-button-prev hover:-translate-x-1 transition-all duration-300",
                          children: (0, s.jsx)(f, {
                            className: "cursor-pointer !w-10 !h-10",
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "xswiper-button-next hover:translate-x-1 transition-all duration-300",
                          children: (0, s.jsx)(g, {
                            className: "cursor-pointer !w-10 !h-10",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            (0, s.jsxs)(j.Z, {
              isOpen: i,
              onClose: () => c(!1),
              children: [
                (0, s.jsx)("p", {
                  className: "mt-2 text-offWhite text-primary",
                  children:
                    "*Higher tiers have access to all signals from lower tiers. Tiers 3 and 4 have access to all signals and filters.",
                }),
                (0, s.jsx)("p", {
                  className: "mt-4 text-offWhite",
                  children:
                    "Documentation and more information about signals are coming soon.",
                }),
              ],
            }),
          ],
        });
      }
    },
    7717: function (e, t, i) {
      "use strict";
      i.d(t, {
        default: function () {
          return m;
        },
      });
      var s = i(7437);
      i(2265);
      var n = i(2467),
        r = i(6648),
        a = i(7327),
        o = i(789),
        l = i(1997),
        c = i(7138);
      let d = { default: 3, 1100: 2, 700: 1 };
      function m() {
        return (0, s.jsx)(n.default, {
          title: "Our next provide?",
          titleClassName: "sm:max-w-[300px]",
          description:
            "We are going to let users get our service via Telegram Bots soon.",
          descriptionClassName: "max-w-[500px] text-center",
          vector: (0, s.jsx)(o.gV, {}),
          vectorPosition: "bottom-[2%] right-[20%]",
          children: (0, s.jsx)(l.Z, {}),
        });
      }
    },
    469: function (e, t, i) {
      "use strict";
      i.d(t, {
        default: function () {
          return f;
        },
      });
      var s = i(7437),
        n = i(2265),
        r = i(2467),
        a = i(789),
        o = i(7439),
        l = i(6974),
        c = i.n(l),
        d = i(762),
        m = i(7327),
        h = i(7138),
        x = i(7261);
      function p() {
        return (0, s.jsxs)("div", {
          className: "overflow-x-auto",
          children: [
            (0, s.jsxs)("div", {
              className: "grid grid-cols-5 min-w-[800px] border-collapse",
              children: [
                (0, s.jsx)("div", {}),
                m.Ps.map((e, t) =>
                  (0, s.jsx)(
                    "div",
                    {
                      className: (0, d.cn)(
                        "p-6 border-t-0 text-left border-b-0 border-l border-secondary self-end",
                        e.isHighlighted &&
                          "border-t-primary !border-t-2 border-2 border-b-0 border-l-2 border-l-primary border-r-primary rounded-t-xl pt-6"
                      ),
                      children: (0, s.jsxs)("div", {
                        className: "flex flex-col h-full relative z-10",
                        children: [
                          e.isHighlighted &&
                            (0, s.jsx)("span", {
                              className:
                                "text-xs border border-primary font-bold text-primary py-2 px-4 rounded-full tracking-widest uppercase self-start mb-8",
                              children: "Most exclusive",
                            }),
                          (0, s.jsxs)("span", {
                            className: (0, d.cn)(
                              "text-sm text-primary mb-2 uppercase font-normal tracking-[0.3em]"
                            ),
                            children: ["Tier ", e.rank],
                          }),
                          (0, s.jsx)("span", {
                            className: (0, d.cn)(
                              c().className,
                              "text-fluid-h4 font-bold"
                            ),
                            children: e.title,
                          }),
                          (0, s.jsx)("p", {
                            className: "text-offWhite font-normal mt-4",
                            children: e.description.split("{.n}").map((t, i) =>
                              (0, s.jsxs)(
                                n.Fragment,
                                {
                                  children: [
                                    t,
                                    i !==
                                      e.description.split("{.n}").length - 1 &&
                                      (0, s.jsx)("br", {}),
                                  ],
                                },
                                i
                              )
                            ),
                          }),
                        ],
                      }),
                    },
                    t
                  )
                ),
                m.HY.map((e, t) =>
                  (0, s.jsxs)(
                    n.Fragment,
                    {
                      children: [
                        (0, s.jsxs)("div", {
                          className: (0, d.cn)(
                            "p-4 border-t border-b-0 border-secondary text-left"
                          ),
                          children: [
                            e.label,
                            e.comingSoon &&
                              (0, s.jsx)("span", {
                                className: "text-primary",
                                children: "*",
                              }),
                          ],
                        }),
                        m.Ps.map((i, r) => {
                          var a;
                          return (0, s.jsx)(
                            "div",
                            {
                              className: (0, d.cn)(
                                "p-4 border-t border-l border-secondary text-center",
                                i.isHighlighted &&
                                  "border-r-primary border-r-2 border-l-2 border-l-primary",
                                m.Ps.length - 1 === r &&
                                  t === m.HY.length - 1 &&
                                  " !border-b-primary border-b-2 rounded-b-xl pb-8",
                                t === m.HY.length - 1 &&
                                  m.Ps.length - 1 !== r &&
                                  "h-3/4"
                              ),
                              children: (0, s.jsx)("div", {
                                className: "relative z-10 bg-black",
                                children:
                                  "boolean" == typeof i[e.key]
                                    ? i[e.key]
                                      ? (0, s.jsx)(x.Nhk, {
                                          className: "mx-auto",
                                          color: "#5AE3EA",
                                          size: 22,
                                        })
                                      : null
                                    : "string" == typeof i[e.key]
                                    ? null === (a = i[e.key]) || void 0 === a
                                      ? void 0
                                      : a.split("{.n}").map((t, r) =>
                                          (0, s.jsxs)(
                                            n.Fragment,
                                            {
                                              children: [
                                                t,
                                                r !==
                                                  i[e.key].split("{.n}")
                                                    .length -
                                                    1 && (0, s.jsx)("br", {}),
                                              ],
                                            },
                                            r
                                          )
                                        )
                                    : "number" == typeof i[e.key]
                                    ? i[e.key]
                                    : null,
                              }),
                            },
                            r
                          );
                        }),
                      ],
                    },
                    t
                  )
                ),
              ],
            }),
            (0, s.jsx)("p", {
              className: "mt-6 text-gray-400 text-sm italic text-left",
              children: "Features marked with * are coming soon.",
            }),
          ],
        });
      }
      var u = i(5351);
      function g() {
        let [e, t] = (0, n.useState)(1);
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)("div", {
              className: "flex justify-center mt-8",
              children: m.Ps.map((i, n) =>
                (0, s.jsxs)(
                  "button",
                  {
                    onClick: () => t(i.rank),
                    className: (0, d.cn)(
                      "transition-colors duration-300 border-b border-gray-700 px-7 py-4 uppercase tracking-[0.3em] xs:p-3 xs:text-sm xxs:p-2 xxs:text-[13px]",
                      e === i.rank
                        ? "text-primary border-b-primary border-b-2 bg-[#050313]"
                        : "text-white"
                    ),
                    children: ["Tier ", i.rank],
                  },
                  n
                )
              ),
            }),
            (0, s.jsxs)("div", {
              className: "mt-12 max-w-2xl mx-auto",
              children: [
                m.Ps.filter((t) => t.rank === e).map((e, t) =>
                  (0, s.jsxs)(
                    "div",
                    {
                      className: (0, d.cn)(
                        "border border-secondary p-8 text-left",
                        e.isHighlighted && "border-primary"
                      ),
                      children: [
                        (0, s.jsxs)("div", {
                          className: "flex flex-col h-full relative z-10",
                          children: [
                            e.isHighlighted &&
                              (0, s.jsx)("span", {
                                className:
                                  "text-xs border border-primary font-bold text-primary py-2 px-4 rounded-full tracking-widest uppercase self-start mb-8",
                                children: "Most exclusive",
                              }),
                            (0, s.jsxs)("span", {
                              className: (0, d.cn)(
                                "text-sm text-primary mb-2 uppercase font-normal tracking-[0.3em]"
                              ),
                              children: ["Tier ", e.rank],
                            }),
                            (0, s.jsx)("span", {
                              className: (0, d.cn)(
                                c().className,
                                "text-fluid-h4 font-bold"
                              ),
                              children: e.title,
                            }),
                            (0, s.jsx)("p", {
                              className: "text-offWhite font-normal mt-4",
                              children: (0, u.R)(e.description, !1),
                            }),
                            (0, s.jsx)(h.default, {
                              href: "https://t.me/OfficialGigaTraderBot",
                              target: "_blank",
                              className: (0, d.cn)(
                                "mt-4 px-4 py-3 font-normal border hover:bg-primary hover:text-black transition-colors duration-300 text-center border-primary",
                                e.isHighlighted &&
                                  "!bg-primary !text-black  !font-bold"
                              ),
                              children: "Get Access",
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: "mt-8",
                          children: m.HY.map((t, i) => {
                            var r;
                            return (0, s.jsxs)(
                              "div",
                              {
                                className:
                                  "py-5 border-t border-secondary flex items-center justify-between",
                                children: [
                                  (0, s.jsxs)("div", {
                                    children: [
                                      (0, s.jsx)("span", { children: t.label }),
                                      t.comingSoon &&
                                        (0, s.jsx)("span", {
                                          className: "text-primary",
                                          children: "*",
                                        }),
                                    ],
                                  }),
                                  (0, s.jsx)("span", {
                                    className: "text-right",
                                    children:
                                      "boolean" == typeof e[t.key]
                                        ? e[t.key]
                                          ? (0, s.jsx)(x.Nhk, {
                                              className: "mx-auto",
                                              color: "#5AE3EA",
                                              size: 22,
                                            })
                                          : null
                                        : "string" == typeof e[t.key]
                                        ? null === (r = e[t.key]) ||
                                          void 0 === r
                                          ? void 0
                                          : r.split("{.n}").map((i, r) =>
                                              (0, s.jsxs)(
                                                n.Fragment,
                                                {
                                                  children: [
                                                    i,
                                                    r !==
                                                      e[t.key].split("{.n}")
                                                        .length -
                                                        1 &&
                                                      (0, s.jsx)("br", {}),
                                                  ],
                                                },
                                                r
                                              )
                                            )
                                        : "number" == typeof e[t.key]
                                        ? e[t.key]
                                        : null,
                                  }),
                                ],
                              },
                              i
                            );
                          }),
                        }),
                      ],
                    },
                    t
                  )
                ),
                (0, s.jsx)("p", {
                  className: "mt-6 text-gray-400 text-sm italic text-left",
                  children: "Features marked with * are coming soon.",
                }),
              ],
            }),
          ],
        });
      }
      function f() {
        let e = (0, o.Z)(1090);
        return (0, s.jsx)(r.default, {
          title: "Exclusive Access {.n} for NUBAI Holders",
          description:
            "NUBAI Token unlocks access to exclusive Signals and Features. {.n} By restricting access, we ensure NUBAI holders will be able to maintain an ongoing advantage in the market.",
          vector: (0, s.jsx)(a.SI, {}),
          vectorPosition: "bottom-[2%] left-[25%]",
          descriptionClassName: "max-w-[680px]",
          contentClassName: "mt-16",
          children: e ? (0, s.jsx)(p, {}) : (0, s.jsx)(g, {}),
        });
      }
    },
    789: function (e, t, i) {
      "use strict";
      i.d(t, {
        NH: function () {
          return n;
        },
        SI: function () {
          return r;
        },
        gV: function () {
          return a;
        },
      });
      var s = i(7437);
      function n() {
        return (0, s.jsxs)("svg", {
          width: "78",
          height: "63",
          viewBox: "0 0 78 63",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            " ",
            (0, s.jsx)("path", {
              d: "M63.2723 3.47909C60.7831 6.23834 58.3202 9.00902 55.581 11.5287C53.5617 13.3862 46.7807 17.2099 46.1316 20.0751C45.8659 21.2483 76.1863 23.9355 75.4222 24.3819C69.5218 27.8292 61.2677 28.7036 54.8437 30.769C42.0763 34.874 29.974 40.6237 18.7337 47.9459C13.2851 51.4952 8.64314 55.8547 3.46644 59.7042C1.85492 60.9026 4.94773 57.821 5.10071 57.6785",
              stroke: "#5AE3EA",
              strokeWidth: "5",
              strokeLinecap: "round",
            }),
            " ",
          ],
        });
      }
      function r() {
        return (0, s.jsx)("svg", {
          width: "30",
          height: "37",
          viewBox: "0 0 30 37",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, s.jsx)("path", {
            d: "M15.3607 2.66187C14.3404 4.93098 13.3392 7.20198 12.1104 9.36969C11.2045 10.9677 7.66746 14.7957 7.84162 16.7548C7.91293 17.557 27.7873 13.0494 27.3919 13.4907C24.3388 16.898 19.2579 19.1486 15.5876 21.7828C8.29312 27.018 9.13904 26.6112 3.47772 33.5835M3.47772 33.5835C0.733505 36.9632 7.55446 28.4845 5.04508 31.9998C1.9106 33.5834 17.5487 16.4467 3.47772 33.5835Z",
            stroke: "#5AE3EA",
            strokeWidth: "5",
            strokeLinecap: "round",
          }),
        });
      }
      function a() {
        return (0, s.jsx)("svg", {
          width: "32",
          height: "49",
          viewBox: "0 0 32 49",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, s.jsx)("path", {
            d: "M21.1554 3C20.649 11.1589 16.837 17.865 11.1434 23.6209C9.15873 25.6272 7.02479 27.5004 4.72503 29.1375C2.10737 31.0009 10.946 27.4756 13.9414 26.3129C16.1958 25.4377 18.4277 24.5048 20.6515 23.5546C22.4109 22.8028 24.1259 21.9491 25.8896 21.2074C26.7972 20.8257 27.697 19.9868 28.6612 20.1863C29.1732 20.2922 28.4933 21.2539 28.197 21.6848C27.2117 23.118 26.0489 24.4255 24.8685 25.7029C21.3292 29.5328 16.464 34.1035 12.6153 37.5847C9.69855 40.2231 5.55646 42.857 3.01436 45.9922C2.98205 46.0321 3.01436 45.8145 3.01436 45.727",
            stroke: "#5AE3EA",
            strokeWidth: "5",
            strokeLinecap: "round",
          }),
        });
      }
    },
    7439: function (e, t, i) {
      "use strict";
      var s = i(2265);
      t.Z = (e) => {
        let [t, i] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            let t = window.matchMedia("(min-width: ".concat(e, "px)")),
              s = (e) => {
                i(e.matches);
              };
            return (
              i(t.matches),
              t.addEventListener("change", s),
              () => {
                t.removeEventListener("change", s);
              }
            );
          }, [e]),
          t
        );
      };
    },
    7327: function (e, t, i) {
      "use strict";
      i.d(t, {
        pp: function () {
          return d;
        },
        pb: function () {
          return c;
        },
        HY: function () {
          return l;
        },
        Ps: function () {
          return o;
        },
      });
      var s = i(7437);
      function n() {
        return (0, s.jsx)("svg", {
          width: "20",
          height: "19",
          viewBox: "0 0 20 19",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, s.jsx)("path", {
            d: "M15.7512 0.892212H18.818L12.1179 8.46695L20 18.7746H13.8284L8.99456 12.5231L3.46359 18.7746H0.394933L7.5613 10.6725L0 0.892212H6.32828L10.6977 6.60632L15.7512 0.892212ZM14.6748 16.9588H16.3742L5.4049 2.61258H3.58133L14.6748 16.9588Z",
            fill: "#5AE3EA",
          }),
        });
      }
      var r = i(3872),
        a = i(7692);
      let o = [
          {
            title: "Rookie",
            rank: 1,
            description: "Entry-level access to {.n} NeuroBlock AI.",
            access: "10,000 NUBAI",
            smartOrders: !0,
            signals: 5,
            customStrategies: !0,
            smartSniping: !1,
            automaticTrading: !1,
            backtesting: !1,
            revenueShare: !1,
            href: "#",
          },
          {
            title: "Skilled",
            rank: 2,
            description: "Enhanced signals and {.n} custom strategies.",
            access: "100,000 NUBAI",
            smartOrders: !0,
            signals: 14,
            customStrategies: !0,
            smartSniping: !1,
            automaticTrading: !1,
            backtesting: !1,
            revenueShare: !1,
            href: "#",
            className: "border-l border-r border-secondary",
          },
          {
            title: "Chad",
            rank: 3,
            description: "Full access to all {.n} signals and features",
            access: "250,000 NUBAI",
            smartOrders: !0,
            signals: 25,
            customStrategies: !0,
            preTrainedStrategies: "Standard {.n} Advanced {.n} Degen",
            smartSniping: !0,
            automaticTrading: !1,
            backtesting: !1,
            revenueShare: !1,
            href: "#",
          },
          {
            title: "Whale",
            rank: 4,
            description:
              "Full access to all {.n} signals and features + {.n} revenue share",
            access: "500,000 NUBAI",
            smartOrders: !0,
            signals: 25,
            customStrategies: !0,
            preTrainedStrategies: "Standard {.n} Advanced {.n} Degen",
            smartSniping: !0,
            automaticTrading: !0,
            backtesting: !0,
            revenueShare: !0,
            href: "#",
            isHighlighted: !0,
          },
        ],
        l = [
          { label: "Access", key: "access", comingSoon: !1 },
          { label: "Signals & Filters", key: "signals", comingSoon: !1 },
          { label: "Smart Orders", key: "smartOrders", comingSoon: !1 },
          {
            label: "Pre-Trained Strategies",
            key: "preTrainedStrategies",
            comingSoon: !0,
          },
          {
            label: "Custom Strategies",
            key: "customStrategies",
            comingSoon: !0,
          },
          { label: "Smart Sniping", key: "smartSniping", comingSoon: !0 },
          {
            label: "Automatic Trading",
            key: "automaticTrading",
            comingSoon: !0,
          },
          { label: "Backtesting", key: "backtesting", comingSoon: !0 },
          { label: "Revenue Share", key: "revenueShare", comingSoon: !0 },
        ],
        c = [
          {
            text: "What if you combined Unibot with Prophet and Robotrade while sprinkling some gamification on top? … frankly, this one is a lot better than Unibot in all aspects. I love Maestro, but Giga is definitely more intriguing when it comes to features…. For fresh users entering the tg bot game I do know I'll be recommending Giga above the competition.",
            name: "Useless trading journal",
            username: "@uselesstrades",
            link: "https://t.me/uselesstrades",
            image: { width: 320, height: 320, src: "testimonial-1.jpg" },
            icon: function () {
              return (0, s.jsx)("svg", {
                width: "25",
                height: "25",
                viewBox: "0 0 25 25",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, s.jsx)("path", {
                  d: "M22.902 2.69288C22.8082 2.61186 22.6941 2.558 22.5719 2.53709C22.4498 2.51619 22.3242 2.52904 22.2088 2.57427L2.50576 10.285C2.26611 10.3787 2.06335 10.5477 1.92794 10.7666C1.79252 10.9854 1.73175 11.2423 1.75476 11.4986C1.77778 11.7549 1.88332 11.9968 2.05556 12.188C2.22779 12.3792 2.45741 12.5094 2.70993 12.559L7.9716 13.5925V19.4443C7.97171 19.7156 8.05288 19.9806 8.20471 20.2055C8.35653 20.4303 8.57208 20.6046 8.82368 20.7061C9.07528 20.8075 9.35147 20.8315 9.61678 20.7749C9.8821 20.7182 10.1244 20.5836 10.3127 20.3883L12.9027 17.702L16.9452 21.2458C17.192 21.4642 17.5101 21.5848 17.8397 21.5851C17.9836 21.5848 18.1266 21.5621 18.2635 21.518C18.4881 21.447 18.6901 21.3183 18.8495 21.1448C19.0088 20.9713 19.1199 20.7591 19.1716 20.5293L23.1208 3.36079C23.1485 3.2401 23.1428 3.11411 23.1043 2.99641C23.0657 2.87871 22.9958 2.77377 22.902 2.69288ZM2.9209 11.4108C2.91718 11.4008 2.91718 11.3897 2.9209 11.3797C2.92529 11.3763 2.93022 11.3737 2.93549 11.3719L18.4628 5.29357L8.41979 12.488L2.93549 11.4147L2.9209 11.4108ZM9.47271 19.5775C9.44591 19.6053 9.41144 19.6245 9.3737 19.6326C9.33595 19.6407 9.29663 19.6375 9.26076 19.6232C9.22488 19.6089 9.19407 19.5842 9.17226 19.5524C9.15044 19.5205 9.13861 19.4829 9.13826 19.4443V14.3994L12.0248 16.9272L9.47271 19.5775ZM18.0351 20.2658C18.0279 20.2987 18.012 20.329 17.9891 20.3536C17.9662 20.3783 17.9371 20.3963 17.9048 20.4058C17.8719 20.4174 17.8365 20.4198 17.8022 20.413C17.768 20.4062 17.7363 20.3902 17.7103 20.3669L9.49215 13.1579L21.6799 4.42343L18.0351 20.2658Z",
                  fill: "#5AE3EA",
                }),
              });
            },
          },
          {
            text: "NeuroBlock AI speed up the finding, checking, and buying of tokens. I would say it is 10x faster and easier than manually searching for a token to then …. buying on DEX, with so many wallet interactions in between.",
            name: "Rauzas",
            username: "@0xRauzas",
            link: "https://x.com/",
            icon: n,
            image: { width: 400, height: 400, src: "testimonial-6.jpg" },
          },
          {
            text: "I urge all to try @NeuroBlock AI_ai. The trader bot really is game changer for me, I love it - makes trading on the go so much easier… and GigaDev just keeps making improvements, it gets better every single day!",
            name: "Kezz \uD83D\uDD2E\uD83D\uDC8E",
            username: "@Alephkezz",
            link: "https://x.com/",
            icon: n,
            image: { width: 400, height: 400, src: "testimonial-3.jpg" },
          },
          {
            text: "Personally, I’ve used other bots and so far @NeuroBlock AI_ai is my favorite! Accurate, systematic and efficient. A trial should convince you.",
            name: "GoddessWriter✨",
            username: "@Goddesswriter1",
            link: "https://x.com/",
            icon: n,
            image: { width: 400, height: 400, src: "testimonial-4.jpg" },
          },
          {
            text: "What sets #NeuroBlock AI apart is their ability to automate strategies, set smart entry and exit conditions, constantly scan the chain for opportunities, and test strategies for success.",
            name: "Sunny crown \uD83D\uDC51\uD83D\uDCCA",
            username: "@Samuelsimonsun1",
            link: "https://x.com/",
            icon: n,
            image: { width: 400, height: 400, src: "testimonial-5.jpg" },
          },
          {
            text: "Proven Performance … a call of x600 and a consistency rate over 51%, Giga Signals outperforms the competition….In Just 7 days my on-chain trades have Skyrocketed.",
            name: "Defi Shinobi\uD83E\uDD77",
            username: "@DefiShino",
            link: "https://x.com/",
            image: { width: 400, height: 400, src: "testimonial-2.jpg" },
            icon: n,
          },
        ];
      a.kO8, a.kO8, r.LCd;
      let d = [
        {
          name: "Specified Meta",
          tier: "3/4",
          description:
            "Project team sends payment to Dextools Wallet for Social Links Listing.",
          link: "#",
        },
        {
          name: "Trending Meta",
          tier: "3/4",
          description:
            "Project team sends payment to Dextools Wallet for Social Links Listing.",
          link: "#",
        },
        {
          name: "Non-Botted Swap Count",
          tier: "3/4",
          description:
            "Project team sends payment to Dextools Wallet for Social Links Listing.",
          link: "#",
        },
        {
          name: "Top Followed Call Chanel",
          tier: "3/4",
          description:
            "Project team sends payment to Dextools Wallet for Social Links Listing.",
          link: "#",
        },
        {
          name: "Snipers Exited",
          tier: "3/4",
          description:
            "Project team sends payment to Dextools Wallet for Social Links Listing.",
          link: "#",
        },
        {
          name: "Mooner Early Bird",
          tier: "3/4",
          description:
            "Project team sends payment to Dextools Wallet for Social Links Listing.",
          link: "#",
        },
        {
          name: "Mooner Top Trader",
          tier: "3/4",
          description:
            "Project team sends payment to Dextools Wallet for Social Links Listing.",
          link: "#",
        },
        {
          name: "Whale Trade",
          tier: "3/4",
          description:
            "Project team sends payment to Dextools Wallet for Social Links Listing.",
          link: "#",
        },
        {
          name: "Hot Block",
          tier: "3/4",
          description:
            "Project team sends payment to Dextools Wallet for Social Links Listing.",
          link: "#",
        },
        {
          name: "Gas Price Spike",
          tier: "3/4",
          description:
            "Project team sends payment to Dextools Wallet for Social Links Listing.",
          link: "#",
        },
        {
          name: "Global Volume Spike",
          tier: "3/4",
          description:
            "Project team sends payment to Dextools Wallet for Social Links Listing.",
          link: "#",
        },
        {
          name: "Seller’s Domination",
          tier: "3/4",
          description:
            "Project team sends payment to Dextools Wallet for Social Links Listing.",
          link: "#",
        },
        {
          name: "Buyer’s Domination",
          tier: "3/4",
          description:
            "Project team sends payment to Dextools Wallet for Social Links Listing.",
          link: "#",
        },
        {
          name: "Dextools Socials",
          tier: "2",
          description:
            "Project team sends payment to Dextools Wallet for Social Links Listing.",
          link: "#",
        },
        {
          name: "Taxes",
          tier: "2",
          description:
            "Project team sends payment to Dextools Wallet for Social Links Listing.",
          link: "#",
        },
        {
          name: "Strict HP Detection",
          tier: "2",
          description:
            "Project team sends payment to Dextools Wallet for Social Links Listing.",
          link: "#",
        },
        {
          name: "Pct Liquidity Locked",
          tier: "2",
          description:
            "Project team sends payment to Dextools Wallet for Social Links Listing.",
          link: "#",
        },
        {
          name: "Pool Age",
          tier: "2",
          description:
            "Project team sends payment to Dextools Wallet for Social Links Listing.",
          link: "#",
        },
        {
          name: "Min 24 Hr Vol",
          tier: "2",
          description:
            "Project team sends payment to Dextools Wallet for Social Links Listing.",
          link: "#",
        },
        {
          name: "Call Channel List",
          tier: "2",
          description:
            "Project team sends payment to Dextools Wallet for Social Links Listing.",
          link: "#",
        },
        {
          name: "Buy/Sell Ratio",
          tier: "2",
          description:
            "Project team sends payment to Dextools Wallet for Social Links Listing.",
          link: "#",
        },
        {
          name: "High Swap Volume",
          tier: "2",
          description:
            "Project team sends payment to Dextools Wallet for Social Links Listing.",
          link: "#",
        },
        {
          name: "Min MC",
          tier: "1",
          description:
            "Project team sends payment to Dextools Wallet for Social Links Listing.",
          link: "#",
        },
        {
          name: "Max MC",
          tier: "1",
          description:
            "Project team sends payment to Dextools Wallet for Social Links Listing.",
          link: "#",
        },
        {
          name: "Min Liquidity",
          tier: "1",
          description:
            "Project team sends payment to Dextools Wallet for Social Links Listing.",
          link: "#",
        },
        {
          name: "Max Liquidity",
          tier: "1",
          description:
            "Project team sends payment to Dextools Wallet for Social Links Listing.",
          link: "#",
        },
        {
          name: "Trading Launched",
          tier: "1",
          description:
            "Project team sends payment to Dextools Wallet for Social Links Listing.",
          link: "#",
        },
        {
          name: "High Swap Count",
          tier: "1",
          description:
            "Project team sends payment to Dextools Wallet for Social Links Listing.",
          link: "#",
        },
      ];
    },
    5351: function (e, t, i) {
      "use strict";
      i.d(t, {
        R: function () {
          return r;
        },
      });
      var s = i(7437),
        n = i(2265);
      function r(e, t) {
        return t
          ? e.split("{.n}").map((t, i) =>
              (0, s.jsxs)(
                n.Fragment,
                {
                  children: [
                    t,
                    i !== e.split("{.n}").length - 1 && (0, s.jsx)("br", {}),
                  ],
                },
                i
              )
            )
          : e.replace(/{\.n}/g, " ");
      }
    },
    762: function (e, t, i) {
      "use strict";
      i.d(t, {
        cn: function () {
          return r;
        },
      });
      var s = i(4839),
        n = i(6164);
      function r() {
        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        return (0, n.m6)((0, s.W)(t));
      }
    },
  },
  function (e) {
    e.O(
      0,
      [822, 51, 212, 422, 665, 516, 240, 617, 7, 971, 23, 744],
      function () {
        return e((e.s = 7062));
      }
    ),
      (_N_E = e.O());
  },
]);
