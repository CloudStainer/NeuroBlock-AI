(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    6850: function (e, t, i) {
      Promise.resolve().then(i.t.bind(i, 8307, 23)),
        Promise.resolve().then(i.t.bind(i, 6974, 23)),
        Promise.resolve().then(i.bind(i, 2760)),
        Promise.resolve().then(i.bind(i, 9522)),
        Promise.resolve().then(i.bind(i, 1173)),
        Promise.resolve().then(i.bind(i, 4297)),
        Promise.resolve().then(i.bind(i, 2650)),
        Promise.resolve().then(i.t.bind(i, 5204, 23));
    },
    2760: function (e, t, i) {
      "use strict";
      i.d(t, {
        default: function () {
          return r;
        },
      });
      var s = i(7437);
      function r() {
        return (0, s.jsx)("div", {
          className: "w-full bg-primary font-bold text-black py-2 text-center",
          children: (0, s.jsx)("span", {
            children: "Introducing GIGABOTS Version 2 \uD83C\uDF89 ",
          }),
        });
      }
      i(2265);
    },
    5195: function (e, t, i) {
      "use strict";
      i.d(t, {
        PrimaryButton: function () {
          return f;
        },
        SecondaryButton: function () {
          return p;
        },
      });
      var s = i(7437),
        r = i(2265),
        a = i(762),
        n = i(7138),
        o = i(4748),
        l = i(6974),
        c = i.n(l),
        d = i(6648),
        h = i(4008);
      function u(e) {
        let { isOpen: t, onClose: i } = e,
          [l, u] = (0, r.useState)(!1);
        return (0, s.jsx)(o.Z, {
          isOpen: t,
          onClose: i,
          children: (0, s.jsxs)("div", {
            className: "xs:p-4 p-6 max-w-md w-full overflow-hidden",
            children: [
              (0, s.jsx)("h2", {
                className: (0, a.cn)(
                  c().className,
                  "text-fluid-h4 font-bold text-center mb-6"
                ),
                children: "GIGA TOKEN",
              }),
              (0, s.jsx)("p", {
                className: "text-center text-lg mb-4",
                children: "Utility Token of the GIGACONOMY",
              }),
              (0, s.jsx)("p", {
                className: "text-center text-primary text-lg mb-6",
                children: "Buy Now At",
              }),
              (0, s.jsxs)("div", {
                className: "flex justify-center items-center mb-6 gap-3",
                children: [
                  (0, s.jsx)(n.default, {
                    href: "https://t.me/OfficialGigaTraderBot?start=site_0xcB2B9B5b136Dc29fEB0548dFF315021B9b6c2bA0",
                    target: "_blank",
                    className:
                      "w-20 h-20 flex justify-center items-center overflow-hidden",
                    children: (0, s.jsx)(d.default, {
                      width: 90,
                      height: 90,
                      priority: !0,
                      src: "/buy-giga-1.svg",
                      alt: "Buy Giga on Telegram",
                    }),
                  }),
                  (0, s.jsx)(n.default, {
                    href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xcB2B9B5b136Dc29fEB0548dFF315021B9b6c2bA0",
                    target: "_blank",
                    className:
                      "w-20 h-20 flex justify-center items-center overflow-hidden mb-3",
                    children: (0, s.jsx)(d.default, {
                      width: 90,
                      height: 90,
                      priority: !0,
                      src: "/buy-giga-2.svg",
                      alt: "Buy Giga on UniSwap",
                    }),
                  }),
                  (0, s.jsx)(n.default, {
                    href: "https://www.dextools.io/app/en/ether/pair-explorer/0x0936ff9f14ecdda584478d06c50f8493cbb7a4c5?t=1718732005319",
                    target: "_blank",
                    className:
                      "w-20 h-20 flex justify-center items-center overflow-hidden",
                    children: (0, s.jsx)(d.default, {
                      width: 53,
                      height: 60,
                      priority: !0,
                      src: "/buy-giga-3.svg",
                      alt: "Buy Giga on Dextools",
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
                        "0xcB2B9B5b136Dc29fEB0548dFF315021B9b6c2bA0"
                      ),
                        u(!0),
                        setTimeout(() => u(!1), 2e3);
                    },
                    className: "text-primary",
                    children: (0, s.jsx)(h.zFu, { size: 20 }),
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "flex justify-center items-center mb-6 gap-2",
                children: (0, s.jsx)("p", {
                  className: "text-center text-sm text-primary",
                  children: "0xcB2B9B5b136Dc29fEB0548dFF315021B9b6c2bA0",
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
                  (0, s.jsx)(n.default, {
                    className: "text-primary",
                    href: "https://t.me/GigaBotsCommunity",
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
      var m = i(3226);
      function f(e) {
        let { children: t, className: i, ...n } = e,
          [o, l] = (0, r.useState)(!1),
          c = (0, m.U0)();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("button", {
              className: (0, a.cn)(i, "relative"),
              onClick: () => {
                l(!0), null == c || c.capture("buy_giga_clicked");
              },
              ...n,
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
            (0, s.jsx)(u, {
              isOpen: o,
              onClose: () => {
                l(!1);
              },
            }),
          ],
        });
      }
      function p(e) {
        let { children: t, className: i, ...r } = e;
        return (0, s.jsx)(n.default, {
          href: "https://t.me/OfficialGigaTraderBot?start=site",
          target: "_blank",
          children: (0, s.jsxs)("button", {
            className: (0, a.cn)(i, "relative"),
            ...r,
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
        r = i(2265),
        a = i(5127),
        n = i(1419),
        o = i(6356);
      function l(e) {
        let { isOpen: t, onClose: i, children: l } = e;
        return (
          (0, r.useEffect)(
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
          (0, s.jsx)(a.M, {
            children:
              t &&
              (0, s.jsx)(n.E.div, {
                className:
                  "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 0.3 },
                onClick: (e) => {
                  e.target === e.currentTarget && i();
                },
                children: (0, s.jsxs)(n.E.div, {
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
    9522: function (e, t, i) {
      "use strict";
      i.d(t, {
        default: function () {
          return m;
        },
      });
      var s = i(7437),
        r = i(2265),
        a = i(6648),
        n = i(6974),
        o = i.n(n),
        l = i(7138),
        c = i(762),
        d = i(4748);
      function h() {
        return (0, s.jsxs)("div", {
          className: "overflow-y-auto",
          children: [
            'This Agreement, known as the GIGABOT Services Agreement, establishes a legally binding contract between you and Gigabot. It governs your usage of the GIGABOT online products and services, collectively referred to as "GIGABOT Services." The parties involved in this Agreement are GIGABOT and the services they provide, including web applications, web dapps, Telegram applications, Telegram channels, and any applications created and distributed by GIGABOT, referred to as "GIGABOT Services." The users of these services and applications in web, Telegram, and other platforms are referred to as "users." By utilizing the GIGABOT Services, you agree to adhere to the terms and conditions outlined in this Agreement, as well as the disclaimers provided herein. It is advisable to carefully review this Agreement before engaging in any GIGABOT Services. ',
            (0, s.jsx)("br", {}),
            "‍",
            (0, s.jsx)("br", {}),
            "DISCLAIMER OF WARRANTIES AND REPRESENTATIONS",
            (0, s.jsx)("br", {}),
            'The GIGABOT Services and all of its contents are provided on an "as is" and "as available" basis, without any warranties or representations of any kind, whether express or implied. GIGABOT acts solely as a distributor and not a publisher of content supplied by third parties. Therefore, GIGABOT does not exercise any editorial control over such content and makes no warranty or representation as to its accuracy, reliability, or currency. This includes any information, content, service, or merchandise provided through or accessible via the GIGABOT Services. Specifically, GIGABOT disclaims all warranties and representations relating to any content transmitted on or in connection with the GIGABOT Services or on sites that may appear as links on the GIGABOT Services, or in the products provided as a part of, or otherwise in connection with, the GIGABOT Services. This includes any warranties of merchantability, fitness for a particular purpose, or non-infringement of third-party rights. No advice or information provided by GIGABOT, its affiliates, employees, officers, directors, agents, or similar parties, whether oral or written, shall create any warranty. The price and availability of any products or services offered on the GIGABOT Services are subject to change without notice. Additionally, GIGABOT does not warrant that the GIGABOT Services will be uninterrupted, uncorrupted, timely, or error-free. By utilizing the GIGABOT Services, you agree that GIGABOT, its affiliates, employees, officers, directors, agents, or similar parties, shall not be liable for any damages whatsoever arising out of or relating to your use of the GIGABOT Services. These damages include, without limitation, direct, indirect, incidental, special, consequential, or punitive damages, whether under a contract, tort, or any other theory of liability, even if GIGABOT has been advised of the possibility of such damages. ',
            (0, s.jsx)("br", {}),
            "‍",
            (0, s.jsx)("br", {}),
            "LIMITED LIABILITY",
            (0, s.jsx)("br", {}),
            'The use of GIGABOT services is solely at the user\'s own risk. GIGABOT provides materials on its services on an "as is" and "as available" basis, without any express or implied representation or warranty, including but not limited to the implied warranties of merchantability and fitness for a particular purpose. GIGABOT does not guarantee the accuracy, completeness, reliability, suitability, or availability of any information or materials on its services or related to such information or materials through external sites or channels. The materials and information provided may contain errors or inaccuracies and are subject to change or update without notice. GIGABOT shall not be held liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from or in any way related to the use of its services. This includes, but is not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of using any content (or product) posted, transmitted, or otherwise made available through the GIGABOT service, even if the possibility of such damages has been advised. Such damages may include, but are not limited to, loss of use, loss of profits, or loss of data. The user acknowledges and agrees that GIGABOT is not responsible for the content or services of third-party sites or channels. Links to such sites or channels are provided for convenience only, and the user accesses them at their own risk. GIGABOT does not provide any representation or warranty regarding the accuracy or reliability of information or materials found on such sites or channels. Unless otherwise mandated by applicable law, GIGABOT, its affiliates, officers, directors, employees, agents, or licensors shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from or in connection with the use of its services or materials. The limitations and exclusions of liability stated herein shall apply regardless of whether GIGABOT was aware of or should have been aware of the possibility of such damages, and irrespective of the form of action, whether in contract, tort, or otherwise. By using GIGABOT services, the user agrees to release and indemnify GIGABOT, its affiliates, officers, directors, employees, agents, and licensors from any and all claims, demands, damages, liabilities, and expenses (including reasonable attorneys\' fees) arising from or in connection with the use of its services. ',
            (0, s.jsx)("br", {}),
            (0, s.jsx)("br", {}),
            "RISKS ASSOCIATED WITH OUR SOFTWARE USAGE",
            (0, s.jsx)("br", {}),
            "GIGABOT offers software and services that facilitate cryptocurrency transactions. However, it is important for users to understand that certain risks are inherent in using such technology. By accessing and utilizing GIGABOT's services, users acknowledge and agree that GIGABOT cannot be held responsible for any losses, damages, or claims arising from events falling under the following categories: User mistakes: Users are solely responsible for their actions and are expected to exercise caution and diligence when using GIGABOT-related software and services. GIGABOT will not be held liable for losses resulting from user mistakes, including forgotten passwords, payments sent to incorrect GIGABOT addresses, or accidental deletion of wallets. Software issues: Despite our efforts to provide reliable and secure software and services, technical glitches and software problems can occur. GIGABOT will not be responsible for losses resulting from software issues on the website or any GIGABOT-related software, such as corrupted wallet files, incorrectly executed transactions, vulnerabilities in cryptographic libraries, or malware affecting the website or software. Technical failures: Users are responsible for maintaining the security and integrity of their hardware and storage devices. GIGABOT will not be liable for losses caused by technical failures in user hardware or storage devices, such as data loss due to faulty or damaged devices. Security vulnerabilities: While GIGABOT takes measures to safeguard the security and integrity of its services, security breaches and unauthorized access may occur. GIGABOT will not be held accountable for losses resulting from security vulnerabilities experienced by users, such as unauthorized access to wallets or accounts. Third-party actions or omissions: GIGABOT may rely on third-party service providers for certain services, and incidents such as bankruptcy, information security breaches, or fraudulent activities by third parties can happen. GIGABOT will not be liable for losses arising from the actions or omissions of third parties or events involving third parties. By using GIGABOT's services, users acknowledge and accept the inherent risks associated with cryptocurrency transactions. Users release GIGABOT from any liability related to such risks. COPYRIGHT DISCLAIMER This Copyright Disclaimer (referred to as the \"Disclaimer\") outlines the terms and conditions governing the usage of materials owned by GIGABOT. All intellectual property rights pertaining to the materials are exclusively held by GIGABOT. Unauthorized copying, distribution, or any other use of the materials without express written permission from GIGABOT is strictly prohibited unless otherwise permitted by mandatory law (such as the right to quote) or expressly stated for specific materials. ",
            (0, s.jsx)("br", {}),
            "‍",
            (0, s.jsx)("br", {}),
            "ERRORS AND OMISSIONS DISCLAIMER",
            (0, s.jsx)("br", {}),
            'This Errors and Omissions Disclaimer (referred to as the "Disclaimer") establishes the terms and conditions for using the Service provided by GIGABOT. We do not provide any warranties or guarantees, and we are not responsible for any inaccuracies, errors, or omissions in the Service. Under no circumstances shall GIGABOT be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in contract, negligence, or any other tort, arising from or in connection with the use of the Service or its contents. We reserve the right to add, delete, or modify the contents of the Service at any time without prior notice. ',
            (0, s.jsx)("br", {}),
            (0, s.jsx)("br", {}),
            "LINKS TO OTHER WEBSITES/CHANNELS DISCLAIMER",
            (0, s.jsx)("br", {}),
            'This Links to Other Websites/Channels Disclaimer (referred to as the "Disclaimer") applies to the Service provided by GIGABOT. The Service may include links to websites, channels, and groups that are not operated or controlled by GIGABOT. We are not responsible for the content, accuracy, or opinions expressed in such websites, channels, and groups, and they are not investigated, monitored, or verified for accuracy or completeness by GIGABOT. When you navigate to another website, channel, or group through a link on the Service, our Privacy Policy no longer applies. Your browsing and interaction on any other website, including those linked on our platform, are subject to the rules and policies of that website. These third parties may use their own cookies or other methods to collect information about you. If you click on a third-party link, you will be directed to that third party\'s site. We strongly advise you to review the Privacy Policy and Terms of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. AMENDMENT OF DISCLAIMER GIGABOT reserves the right to modify, amend, or update this Disclaimer at any time to accurately reflect our Service and policies. Such changes will be prominently posted on our website, and your continued use of the Service constitutes your acceptance of the updated Disclaimer. If you do not wish to be bound by any updated terms, you may delete your account.',
            " ",
            (0, s.jsx)("br", {}),
            (0, s.jsx)("br", {}),
            "YOUR CONSENT TO DISCLAIMER",
            (0, s.jsx)("br", {}),
            "By accessing or registering an account with GIGABOT, you acknowledge that you have read, understood, and agree to the terms of this Disclaimer. You also consent to the collection, use, and disclosure of your personal information in accordance with our Privacy Policy, as outlined in this Disclaimer. If you do not agree to any provisions of this Disclaimer, you should not access or use our Service. ",
            (0, s.jsx)("br", {}),
            (0, s.jsx)("br", {}),
            "COMPLIANCE WITH TAX OBLIGATIONS",
            (0, s.jsx)("br", {}),
            "The users of GIGABOT are solely responsible for determining their tax obligations with respect to any transactions conducted through GIGABOT. The owners and contributors of GIGABOT shall not be held responsible for determining the tax implications or obligations associated with the use of GIGABOT's services. ",
            (0, s.jsx)("br", {}),
            (0, s.jsx)("br", {}),
            "ARBITRATION ",
            (0, s.jsx)("br", {}),
            "By using GIGABOT's services, the user agrees to resolve any dispute arising from or related to GIGABOT or this disclaimer through binding arbitration, except for disputes arising from copyrights, logos, trademarks, trade names, trade secrets, or patents. The arbitration shall be conducted in accordance with the rules of the American Arbitration Association, and the award rendered by the arbitrator(s) shall be binding and final. Each party shall bear their own expenses, costs, and attorney's fees incurred in the arbitration, unless otherwise provided by applicable law.",
          ],
        });
      }
      let u = [
        {
          title: "Products",
          links: [
            { name: "GigaTrader", url: "https://t.me/OfficialGigaTraderBot" },
            { name: "GigaSignals", url: "https://t.me/GigaSignalsBot" },
            { name: "GigaLeague", url: "https://t.me/OfficialGigaLeagueBot" },
          ],
        },
        {
          title: "Connect",
          links: [
            { name: "Telegram", url: "https://t.me/GigaBotsCommunity" },
            { name: "Twitter", url: "https://x.com/Gigabots_ai" },
          ],
        },
        {
          title: "Learn",
          links: [
            { name: "Docs", url: "https://docs.gigabots.ai" },
            { name: "Medium", url: "https://medium.com/gigabots" },
          ],
        },
      ];
      function m() {
        let [e, t] = (0, r.useState)(!1);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("footer", {
              className: "border-t border-secondary mt-4 pt-16 pb-20",
              children: (0, s.jsx)("div", {
                className:
                  "container mx-auto px-32 max-w-[1900px] xl:px-16 sm:px-6",
                children: (0, s.jsx)("div", {
                  className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                  children: (0, s.jsxs)("div", {
                    className:
                      "grid sm:grid-cols-1 lg:grid-cols-2 grid-cols-5 gap-22 lg:gap-30 wrap",
                    children: [
                      u.map((e, t) =>
                        (0, s.jsxs)(
                          "div",
                          {
                            className: "lg:mb-20",
                            children: [
                              (0, s.jsx)("h4", {
                                className: (0, c.cn)(
                                  "text-xl text-white font-bold mb-6",
                                  o().className
                                ),
                                children: e.title,
                              }),
                              (0, s.jsx)("ul", {
                                className: "space-y-4 mt-4",
                                children: e.links.map((e, t) =>
                                  (0, s.jsx)(
                                    "li",
                                    {
                                      className:
                                        "text-gray-400 hover:text-primary transition-colors",
                                      children: (0, s.jsx)(l.default, {
                                        href: e.url,
                                        target: "_blank",
                                        className:
                                          "text-gray-400 hover:text-primary transition-colors",
                                        children: e.name,
                                      }),
                                    },
                                    t
                                  )
                                ),
                              }),
                            ],
                          },
                          t
                        )
                      ),
                      (0, s.jsxs)("div", {
                        className:
                          "flex flex-col text-left items-start col-span-2 sm:col-span-1 ml-20 lg:ml-0 lg:max-w-sm",
                        children: [
                          (0, s.jsx)(a.default, {
                            src: "/footer-logo.svg",
                            alt: "GigaBots Icon",
                            width: 66,
                            height: 66,
                          }),
                          (0, s.jsxs)("p", {
                            className: "text-gray-400 mt-4 md:text-left",
                            children: [
                              "By accessing our services, you accept our",
                              " ",
                              (0, s.jsx)("span", {
                                onClick: () => t(!0),
                                className:
                                  "text-primary underline cursor-pointer",
                                children:
                                  "Terms of Service and Privacy Policy.",
                              }),
                              " ",
                              "While our tools are provided free of charge, please note that each transaction incurs a 0.5-1% fee.",
                            ],
                          }),
                          (0, s.jsx)("p", {
                            className: "mt-20 text-gray-400",
                            children:
                              "\xa9 2024 GIGABOTS. All rights reserved.",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
            (0, s.jsx)(d.Z, {
              isOpen: e,
              onClose: () => t(!1),
              children: (0, s.jsxs)("div", {
                className: "max-h-96 overflow-y-auto",
                children: [
                  (0, s.jsx)("h2", {
                    className: (0, c.cn)(
                      "text-fluid-h4 font-bold mb-8",
                      o().className
                    ),
                    children: "Terms & Conditions",
                  }),
                  (0, s.jsx)(h, {}),
                ],
              }),
            }),
          ],
        });
      }
    },
    1173: function (e, t, i) {
      "use strict";
      i.d(t, {
        default: function () {
          return p;
        },
      });
      var s = i(7437),
        r = i(2265),
        a = i(7138),
        n = i(5195),
        o = i(6648),
        l = i(7261);
      function c(e) {
        let { title: t, links: i, nestedDropdown: n } = e,
          [o, c] = (0, r.useState)(!1),
          [d, h] = (0, r.useState)(!1),
          u = i.filter((e) => !e.comingSoon),
          m = i.filter((e) => e.comingSoon);
        return (0, s.jsxs)("div", {
          className: "relative group z-10",
          onMouseEnter: () => c(!0),
          onMouseLeave: () => c(!1),
          children: [
            (0, s.jsxs)("button", {
              className:
                "flex items-center gap-2 font-medium focus:outline-none group-hover:text-primary transition-colors duration-300",
              children: [
                t,
                (0, s.jsx)(l.gPZ, {
                  className: "transition-transform duration-300 ".concat(
                    o ? "rotate-180" : "",
                    " group-hover:text-primary"
                  ),
                  style: { color: o ? "#5AE3EA" : "inherit" },
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className:
                "absolute shadow-navDropdown py-3 px-8 left-1/2 transform -translate-x-1/2 mt-2 bg-black border border-secondary rounded-xl transition-all duration-300 ".concat(
                  o ? "opacity-100 visible" : "opacity-0 invisible"
                ),
              children: [
                u.map((e, t) =>
                  (0, s.jsx)(
                    "div",
                    {
                      className:
                        "block py-3 text-white transition-colors duration-300 hover:text-primary",
                      children: (0, s.jsx)(a.default, {
                        href: e.href,
                        target: "_blank",
                        className: "flex items-center gap-2",
                        children: e.label,
                      }),
                    },
                    t
                  )
                ),
                n &&
                  (0, s.jsxs)("div", {
                    className: "relative group w-[135px]",
                    onMouseEnter: () => h(!0),
                    onMouseLeave: () => h(!1),
                    children: [
                      (0, s.jsxs)("div", {
                        className:
                          "flex items-center gap-2 py-3 text-white transition-colors duration-300 hover:text-primary",
                        children: [
                          n.label,
                          (0, s.jsx)(l.gPZ, {
                            className:
                              "transition-transform duration-300 ".concat(
                                d ? "rotate-180" : "",
                                " group-hover:text-primary"
                              ),
                            style: { color: d ? "#5AE3EA" : "inherit" },
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "absolute left-[95%] top-0 ml-2 shadow-navDropdown py-3 px-6 bg-black border border-secondary rounded-xl transition-all duration-300 ".concat(
                            d ? "opacity-100 visible" : "opacity-0 invisible"
                          ),
                        children: n.links.map((e, t) =>
                          (0, s.jsx)(
                            a.default,
                            {
                              target: "_blank",
                              className:
                                "block py-2 text-white transition-colors duration-300 hover:text-primary",
                              href: e.href,
                              children: e.label,
                            },
                            t
                          )
                        ),
                      }),
                    ],
                  }),
                m.map((e, t) =>
                  (0, s.jsx)(
                    "div",
                    {
                      className: "block py-3 text-white",
                      children: (0, s.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [
                          (0, s.jsx)("span", {
                            className:
                              "block text-primary uppercase tracking-widest text-xs",
                            children: "coming soon",
                          }),
                          (0, s.jsx)("span", {
                            className: "flex items-center gap-2 text-offWhite",
                            children: e.label,
                          }),
                        ],
                      }),
                    },
                    t
                  )
                ),
              ],
            }),
          ],
        });
      }
      var d = i(4008),
        h = i(1419);
      function u(e) {
        let { title: t, links: i, nestedDropdown: n } = e,
          [o, c] = (0, r.useState)(!1),
          [d, u] = (0, r.useState)(!1),
          m = i.filter((e) => !e.comingSoon),
          f = i.filter((e) => e.comingSoon),
          p = {
            hidden: { height: 0, opacity: 0 },
            visible: { height: "auto", opacity: 1 },
          };
        return (0, s.jsxs)("div", {
          className: "mb-4",
          children: [
            (0, s.jsxs)("button", {
              onClick: () => c(!o),
              className:
                "flex justify-between items-center w-full py-3 text-left focus:outline-none transition-colors duration-300 ".concat(
                  o ? "text-primary" : "text-white"
                ),
              children: [
                t,
                (0, s.jsx)(l.gPZ, {
                  className: "transition-transform duration-300 ".concat(
                    o ? "rotate-180" : ""
                  ),
                  style: { color: o ? "#5AE3EA" : "inherit" },
                }),
              ],
            }),
            (0, s.jsxs)(h.E.div, {
              initial: "hidden",
              animate: o ? "visible" : "hidden",
              variants: p,
              transition: { duration: 0.3 },
              className: "overflow-hidden pl-4",
              children: [
                m.map((e, t) =>
                  (0, s.jsx)(
                    "div",
                    {
                      className:
                        "py-2 transition-colors duration-300 hover:text-primary",
                      children: (0, s.jsx)(a.default, {
                        href: e.href,
                        className: "text-white",
                        children: e.label,
                      }),
                    },
                    t
                  )
                ),
                n &&
                  (0, s.jsxs)("div", {
                    className: "mt-4",
                    children: [
                      (0, s.jsxs)("button", {
                        onClick: () => u(!d),
                        className:
                          "flex justify-between items-center w-full py-3 text-left focus:outline-none transition-colors duration-300 ".concat(
                            d ? "text-primary" : "text-white"
                          ),
                        children: [
                          n.label,
                          (0, s.jsx)(l.gPZ, {
                            className:
                              "transition-transform duration-300 ".concat(
                                d ? "rotate-180" : ""
                              ),
                            style: { color: d ? "#5AE3EA" : "inherit" },
                          }),
                        ],
                      }),
                      (0, s.jsx)(h.E.div, {
                        initial: "hidden",
                        animate: d ? "visible" : "hidden",
                        variants: p,
                        transition: { duration: 0.3 },
                        className: "overflow-hidden pl-4",
                        children: n.links.map((e, t) =>
                          (0, s.jsx)(
                            "div",
                            {
                              className:
                                "py-2 transition-colors duration-300 hover:text-primary",
                              children: (0, s.jsx)(a.default, {
                                href: e.href,
                                className: "text-white",
                                children: e.label,
                              }),
                            },
                            t
                          )
                        ),
                      }),
                    ],
                  }),
                f.map((e, t) =>
                  (0, s.jsxs)(
                    "div",
                    {
                      className: "py-2",
                      children: [
                        (0, s.jsx)("span", {
                          className:
                            "block text-primary uppercase tracking-widest text-xs",
                          children: "coming soon",
                        }),
                        (0, s.jsx)("span", {
                          className: "text-offWhite",
                          children: e.label,
                        }),
                      ],
                    },
                    t
                  )
                ),
              ],
            }),
          ],
        });
      }
      var m = i(5127),
        f = i(7439);
      function p() {
        let [e, t] = (0, r.useState)(!1),
          i = (0, f.Z)(1024);
        return (
          (0, r.useEffect)(() => {
            i && t(!1);
          }, [i]),
          (0, r.useEffect)(() => {
            e
              ? document.body.classList.add("overflow-hidden")
              : document.body.classList.remove("overflow-hidden");
          }, [e]),
          (0, s.jsx)("header", {
            className: "relative mt-6 z-50",
            children: (0, s.jsxs)("div", {
              className:
                "container mx-auto px-32 max-w-[1900px] xl:px-16 sm:px-6",
              children: [
                (0, s.jsxs)("nav", {
                  className: "flex justify-between items-center",
                  children: [
                    (0, s.jsx)(a.default, {
                      href: "/",
                      children: (0, s.jsx)(o.default, {
                        src: "/logo.svg",
                        width: 145,
                        height: 16,
                        alt: "GIGABOTS",
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "flex-grow flex items-center justify-center space-x-8 lg:hidden",
                      children: [
                        (0, s.jsx)(c, {
                          title: "Products",
                          links: [
                            {
                              href: "https://t.me/OfficialGigaTraderBot",
                              label: "GigaTrader",
                            },
                            {
                              href: "https://t.me/GigaSignalsBot",
                              label: "GigaSignals",
                            },
                            { href: "#", label: "GigaVault", comingSoon: !0 },
                          ],
                          nestedDropdown: {
                            href: "#",
                            label: "GigaLeague",
                            links: [
                              {
                                href: "https://gigabot.webflow.io/league",
                                label: "About",
                              },
                              {
                                href: "https://gigabot.webflow.io/league/rankings",
                                label: "Rankings",
                              },
                            ],
                          },
                        }),
                        (0, s.jsx)(c, {
                          title: "Connect",
                          links: [
                            {
                              href: "https://t.me/GigaBotsCommunity",
                              label: "Telegram",
                            },
                            {
                              href: "https://x.com/Gigabots_ai",
                              label: "Twitter",
                            },
                          ],
                        }),
                        (0, s.jsx)(c, {
                          title: "Learn",
                          links: [
                            { href: "https://docs.gigabots.ai", label: "Docs" },
                            {
                              href: "https://medium.com/gigabots",
                              label: "Medium",
                            },
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "flex gap-6 lg:hidden",
                      children: [
                        (0, s.jsx)(n.PrimaryButton, { children: "Buy GIGA" }),
                        (0, s.jsx)(n.SecondaryButton, {
                          children: "Start Trading",
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "hidden lg:flex items-center",
                      children: (0, s.jsx)("button", {
                        onClick: () => t(!e),
                        children: e
                          ? (0, s.jsx)(h.E.div, {
                              initial: { rotate: 0 },
                              animate: { rotate: 180 },
                              children: (0, s.jsx)(d.fMW, { size: 30 }),
                            })
                          : (0, s.jsx)(h.E.div, {
                              initial: { rotate: 180 },
                              animate: { rotate: 0 },
                              children: (0, s.jsx)(d.otZ, { size: 30 }),
                            }),
                      }),
                    }),
                  ],
                }),
                (0, s.jsx)(m.M, {
                  children:
                    e &&
                    (0, s.jsx)(h.E.div, {
                      initial: "hidden",
                      animate: "visible",
                      exit: "hidden",
                      variants: {
                        hidden: { height: 0, opacity: 0 },
                        visible: { height: "100vh", opacity: 1 },
                      },
                      transition: { duration: 0.2 },
                      className:
                        "absolute top-16 inset-0 bg-black lg:px-16 sm:p-6 z-100 h-full",
                      children: (0, s.jsxs)("div", {
                        className: "z-50 h-full flex flex-col",
                        children: [
                          (0, s.jsx)(u, {
                            title: "Products",
                            links: [
                              {
                                href: "https://t.me/OfficialGigaTraderBot",
                                label: "GigaTrader",
                              },
                              {
                                href: "https://t.me/GigaSignalsBot",
                                label: "GigaSignals",
                              },
                              { href: "#", label: "GigaVault", comingSoon: !0 },
                            ],
                            nestedDropdown: {
                              href: "/giga-league",
                              label: "GigaLeague",
                              links: [
                                {
                                  href: "https://gigabot.webflow.io/league",
                                  label: "About",
                                },
                                {
                                  href: "https://gigabot.webflow.io/league/rankings",
                                  label: "Rankings",
                                },
                              ],
                            },
                          }),
                          (0, s.jsx)(u, {
                            title: "Connect",
                            links: [
                              {
                                href: "https://t.me/GigaBotsCommunity",
                                label: "Telegram",
                              },
                              {
                                href: "https://x.com/Gigabots_ai",
                                label: "Twitter",
                              },
                            ],
                          }),
                          (0, s.jsx)(u, {
                            title: "Learn",
                            links: [
                              {
                                href: "https://docs.gigabots.ai",
                                label: "Docs",
                              },
                              {
                                href: "https://medium.com/gigabots",
                                label: "Medium",
                              },
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className: "mt-4 flex flex-col gap-4",
                            children: [
                              (0, s.jsx)(n.PrimaryButton, {
                                className: "lg:w-full",
                                children: "Buy GIGA",
                              }),
                              (0, s.jsx)(n.SecondaryButton, {
                                className: "lg:w-full",
                                children: "Start Trading",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                }),
              ],
            }),
          })
        );
      }
    },
    4297: function (e, t, i) {
      "use strict";
      i.d(t, {
        default: function () {
          return n;
        },
      });
      var s = i(1169),
        r = i(2265),
        a = i(3226);
      function n() {
        let e = (0, s.usePathname)(),
          t = (0, s.useSearchParams)(),
          i = (0, a.U0)();
        return (
          (0, r.useEffect)(() => {
            if (e && i) {
              let s = window.origin + e;
              t.toString() && (s += "?".concat(t.toString())),
                i.capture("$pageview", { $current_url: s });
            }
          }, [e, t, i]),
          null
        );
      }
    },
    2650: function (e, t, i) {
      "use strict";
      i.d(t, {
        PHProvider: function () {
          return n;
        },
      });
      var s = i(7437),
        r = i(82),
        a = i(3226);
      function n(e) {
        let { children: t } = e;
        return (0, s.jsx)(a.zf, { client: r.ZP, children: t });
      }
      r.ZP.init("phc_SWHmVwbpPAsh2fFk1HmFht7tQHhsDMLXcZmuWyS6nFy", {
        api_host: "/ingest",
        ui_host: "https://eu.posthog.com",
        person_profiles: "identified_only",
        capture_pageview: !1,
      });
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
    762: function (e, t, i) {
      "use strict";
      i.d(t, {
        cn: function () {
          return a;
        },
      });
      var s = i(4839),
        r = i(6164);
      function a() {
        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        return (0, r.m6)((0, s.W)(t));
      }
    },
    5204: function () {},
    8307: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Inter_aaf875', '__Inter_Fallback_aaf875'",
          fontStyle: "normal",
        },
        className: "__className_aaf875",
        variable: "__variable_aaf875",
      };
    },
  },
  function (e) {
    e.O(0, [822, 51, 212, 422, 617, 971, 23, 744], function () {
      return e((e.s = 6850));
    }),
      (_N_E = e.O());
  },
]);
