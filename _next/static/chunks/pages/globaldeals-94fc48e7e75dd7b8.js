(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [118],
  {
    8358: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/globaldeals",
        function () {
          return s(5133);
        },
      ]);
    },
    5133: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          __N_SSG: function () {
            return T;
          },
        });
      var a = s(8014),
        r = s(56168),
        l = s(62305),
        n = s(57417),
        c = s(79838),
        i = s(36180),
        o = s(4492),
        u = s(10327),
        p = s(4632),
        x = s(97968),
        m = s(48377),
        f = s(3621),
        d = s(34543),
        h = s(23291),
        g = s.n(h),
        b = s(12683),
        j = s(64607),
        w = s(27171),
        y = s(21259),
        N = s(13713),
        v = s(45501),
        k = s(1984),
        _ = s(80998),
        L = s(62044),
        S = s(50647);
      function Z(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(s);
          "function" === typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
              Object.getOwnPropertySymbols(s).filter(function (e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable;
              })
            )),
            a.forEach(function (t) {
              Z(e, t, s[t]);
            });
        }
        return e;
      }
      var T = !0;
      t.default = function () {
        var e = (0, L.Z)("common").t,
          t = (0, r.useState)(!1),
          s = t[0],
          h = t[1],
          Z = (0, r.useState)(!1),
          T = Z[0],
          C = Z[1],
          E = (0, r.useState)(!1),
          I = E[0],
          z = E[1],
          D = (0, r.useState)("all"),
          F = D[0],
          P = D[1],
          B = (0, r.useState)({ source: "api", swaps: [] }),
          A = B[0],
          R = B[1],
          W = (0, r.useState)(""),
          H = W[0],
          U = W[1],
          X = (0, r.useState)(0),
          Y = X[0],
          $ = X[1],
          G = (0, r.useState)(10)[0],
          M = (0, r.useState)(!1),
          V = M[0],
          q = M[1],
          J = (0, r.useState)(0),
          K = J[0],
          Q = J[1],
          ee = (0, r.useState)(null),
          te = ee[0],
          se = ee[1],
          ae = (0, r.useRef)(!1),
          re = (0, r.useRef)({ clearInput: null }),
          le = (0, x.T)(),
          ne = (0, x.C)(function (e) {
            return e;
          }),
          ce = ne.waccount,
          ie = ne.trademodal,
          oe = ne.reportmodal,
          ue = ce.currentNetworkId,
          pe = ce.isConnected,
          xe = ie.isOpen,
          me = (ie.mode, oe.isOpen),
          fe = function (e) {
            ae.current &&
              (U(e), C(!0), z(!0), $(0), R({ source: "search", swaps: [] }));
          },
          de = function (e, t) {
            if ((ae.current && C(!0), ue)) {
              var s = [];
              (s = t && 0 !== t.length ? [ue, e, Y, G, t] : [ue, e, Y, G]),
                (0, u.bf)(
                  (0, p.f)(
                    t && 0 !== t.length
                      ? "getSwapListByAddress"
                      : "getFullList",
                    s
                  )
                )
                  .then(function (e) {
                    var s = e.data[0],
                      a = s.swapList,
                      r = s.count;
                    ae.current && h(!1),
                      ae.current && z(!1),
                      ae.current && Q(r),
                      0 === A.swaps.length
                        ? ae.current &&
                          R({
                            source: t && 0 !== t.length ? "search" : "api",
                            swaps: a,
                          })
                        : ae.current &&
                          (ue === te
                            ? R({
                                source: t && 0 !== t.length ? "search" : "api",
                                swaps: A.swaps.concat(a),
                              })
                            : ($(0), R({ source: "api", swaps: a }))),
                      ae.current && C(!1);
                  })
                  .catch(function (e) {
                    console.error(e),
                      ae.current && h(!1),
                      ae.current && C(!1),
                      ae.current && z(!1);
                  });
            }
          };
        return (
          (0, r.useEffect)(
            function () {
              s ||
                I ||
                (K > A.swaps.length
                  ? (ae.current && $(Y + G), ae.current && q(!0))
                  : ae.current && q(!1));
            },
            [A.swaps]
          ),
          (0, r.useEffect)(
            function () {
              s && 0 === A.swaps.length && de(1);
            },
            [s, A.swaps, F]
          ),
          (0, r.useEffect)(
            function () {
              "search" === A.source &&
                0 === A.swaps.length &&
                !0 === I &&
                0 === Y &&
                de(1, H);
            },
            [H, I, Y, A]
          ),
          (0, r.useEffect)(
            function () {
              pe || (Q(0), $(0), R({ source: "api", swaps: [] }));
            },
            [pe, ue]
          ),
          (0, r.useEffect)(
            function () {
              if (ue)
                return (
                  (ae.current = !0),
                  de(1),
                  se(ue),
                  function () {
                    ae.current = !1;
                  }
                );
            },
            [ue]
          ),
          (0, a.jsxs)("div", {
            children: [
              (0, a.jsx)(v.Z, {}),
              (0, a.jsxs)(k.default, {
                children: [
                  (0, a.jsx)("title", { children: e("titleLabel") }),
                  (0, a.jsx)(_.Z, {
                    metaTitle: e("titleLabel"),
                    metaDescription: e("metaDescriptionLabel"),
                    metaOgTitle: e("titleLabel"),
                    metaOgDescription: e("metaDescriptionLabel"),
                    metaOgImage:
                      "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/meta-logo.png",
                    metaOgUrl: "https://www.nfttrader.io/globaldeals",
                    twitterImageCard:
                      "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/meta-logo.png",
                    twitterImage:
                      "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/meta-logo.png",
                    twitterUrl: "https://www.nfttrader.io/globaldeals",
                    twitterTitle: e("titleLabel"),
                    twitterDescription: e("metaDescriptionLabel"),
                  }),
                  (0, a.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
                  (0, a.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/apple-touch-icon.png",
                  }),
                  (0, a.jsx)("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: "/favicon-32x32.png",
                  }),
                  (0, a.jsx)("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: "/favicon-16x16.png",
                  }),
                  (0, a.jsx)("link", {
                    rel: "manifest",
                    href: "/site.webmanifest",
                  }),
                ],
              }),
              (0, a.jsx)(l.Z, {}),
              (0, a.jsxs)("main", {
                children: [
                  (0, a.jsx)("div", {
                    className: "bg-primary-yellow",
                    children: (0, a.jsx)(n.Z, {
                      mainText: e("globalDealsLabel"),
                      subText: e("checkOtherTradersLabel"),
                      button: (0, a.jsx)(f.Z, {
                        text: e("createTradeLabel"),
                        type: { class: "primary", icon: !1, hasColoredBg: !0 },
                        size: "large",
                        initialState: { state: "default" },
                        onClick: function () {
                          pe
                            ? (le((0, w.eV)("maker")),
                              le((0, w.r$)(!0)),
                              document.body.classList.add("no-scroll"))
                            : le((0, N.$e)(!0));
                        },
                      }),
                    }),
                  }),
                  (0, a.jsxs)("nav", {
                    className:
                      "flex flex-col justify-between mt-[20px] gap-4 max-w-[1280px] m-[auto] p-4 md:gap-0 md:p-12 md:flex-row md:items-center ",
                    children: [
                      (0, a.jsx)("div", {
                        className: "flex items-center justify-center gap-4",
                        children: (0, a.jsx)("span", {
                          className:
                            "all" === F
                              ? "text-primary-blue border-b-2 border-primary-blue cursor-default"
                              : "text-primary-gray cursor-pointer",
                          onClick: function () {
                            var e;
                            F !== (e = "all") &&
                              (P(e), h(!0), R({ source: A.source, swaps: [] }));
                          },
                          children: e("allLabel"),
                        }),
                      }),
                      (0, a.jsx)(c.Z, {
                        currentSearchState: "filled",
                        setFilter: fe,
                        placeholder: e("searchLabel"),
                        refClear: re,
                        className: "mt-[16px] md:mt-[0px]",
                      }),
                    ],
                  }),
                  A.swaps.length
                    ? (0, a.jsx)("div", {
                        className:
                          "w-full flex flex-col justify-center items-center pb-[40px] px-4 md:px-10 xl:px-0 m-auto ".concat(
                            g().scrollableTrades
                          ),
                        children: (0, a.jsx)(d.Z, {
                          dataLength: A.swaps.length,
                          hasMore: V,
                          next: function () {
                            de(1);
                          },
                          loader: (0, a.jsx)("div", {
                            className: "flex justify-center items-center",
                            children: (0, a.jsx)("img", {
                              src: b.Z.src,
                              className: "".concat(
                                g().rotating,
                                " w-[24px] h-[24px]"
                              ),
                            }),
                          }),
                          className:
                            "flex flex-col justify-center items-center gap-8 py-[30px]",
                          children: A.swaps.map(function (e, t) {
                            return (0, a.jsx)(
                              o.Z,
                              {
                                maker: O({}, e.maker[0], {
                                  collections: e.collections.filter(function (
                                    e
                                  ) {
                                    return 1 === e.creator;
                                  }),
                                }),
                                taker: O({}, e.taker[0], {
                                  collections: e.collections.filter(function (
                                    e
                                  ) {
                                    return 0 === e.creator;
                                  }),
                                }),
                                timestamp: e.swapEnd,
                                swapId: e.swapId,
                                type: e.type,
                                txHash: e.txHash,
                                status: e.swapStatus,
                                className: "max-w-[1280px] w-full",
                              },
                              "trade-".concat(e.swapId)
                            );
                          }),
                        }),
                      })
                    : "search" === A.source
                    ? (0, a.jsx)(a.Fragment, {
                        children: T
                          ? (0, a.jsx)("div", {
                              className:
                                "flex justify-center items-center pb-[50px]",
                              children: (0, a.jsx)("img", {
                                src: b.Z.src,
                                className: "".concat(
                                  g().rotating,
                                  " w-[36px] h-[36px]"
                                ),
                              }),
                            })
                          : (0, a.jsxs)("div", {
                              className:
                                "flex flex-col items-center justify-center mt-[40px] gap-10 pb-[50px] md:mt-[0px]",
                              children: [
                                (0, a.jsx)("img", { src: m.Z.src }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "flex flex-col items-center justify-center",
                                  children: [
                                    (0, a.jsx)("h1", {
                                      className:
                                        "text-3xl text-primary-dark-blue font-semibold text-center",
                                      children: e("sorryLabel"),
                                    }),
                                    (0, a.jsx)("h3", {
                                      className:
                                        "rubik text-base font-light text-primary-dark-blue mt-[8px]",
                                      children: e("tryAgainLabel"),
                                    }),
                                  ],
                                }),
                                (0, a.jsx)(f.Z, {
                                  text: e("clearSearchLabel"),
                                  type: {
                                    class: "primary",
                                    icon: !1,
                                    hasColoredBg: !1,
                                  },
                                  initialState: { state: "default" },
                                  size: "small",
                                  onClick: function () {
                                    var e, t;
                                    null === (e = re.current) ||
                                      void 0 === e ||
                                      null === (t = e.clearInput) ||
                                      void 0 === t ||
                                      t.call(e),
                                      $(0),
                                      fe("");
                                  },
                                  className: "px-[32px] py-[10px] md:py-2",
                                }),
                              ],
                            }),
                      })
                    : (0, a.jsx)(a.Fragment, {
                        children: T
                          ? (0, a.jsx)("div", {
                              className:
                                "flex justify-center items-center pb-[50px]",
                              children: (0, a.jsx)(j.Z, {
                                isWhite: !1,
                                className: "w-[36px] h-[36px]",
                              }),
                            })
                          : (0, a.jsx)(a.Fragment, {
                              children: pe
                                ? (0, a.jsxs)("div", {
                                    className:
                                      "flex flex-col items-center justify-center gap-10 pb-[50px]",
                                    children: [
                                      (0, a.jsx)("img", { src: m.Z.src }),
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex flex-col items-center justify-center",
                                        children: [
                                          (0, a.jsx)("h1", {
                                            className:
                                              "text-3xl text-primary-dark-blue font-semibold",
                                            children: e("noResultsLabel"),
                                          }),
                                          (0, a.jsx)("h3", {
                                            className:
                                              "text-base font-light text-primary-dark-blue",
                                            children: e("tryAgainLabel"),
                                          }),
                                        ],
                                      }),
                                    ],
                                  })
                                : (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsxs)("div", {
                                      className:
                                        "flex flex-col items-center justify-center gap-10 pb-[50px]",
                                      children: [
                                        (0, a.jsx)("img", { src: m.Z.src }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "flex flex-col items-center justify-center",
                                          children: [
                                            (0, a.jsx)("h1", {
                                              className:
                                                "text-3xl text-primary-dark-blue font-semibold",
                                              children: e(
                                                "connectYourWalletLabel"
                                              ),
                                            }),
                                            (0, a.jsx)("h3", {
                                              className:
                                                "text-base font-light text-primary-dark-blue",
                                              children: e(
                                                "connectYourWalletBrowserLabel"
                                              ),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                            }),
                      }),
                ],
              }),
              xe && (0, a.jsx)(y.Z, {}),
              me && (0, a.jsx)(S.Z, {}),
              (0, a.jsx)(i.Z, {}),
            ],
          })
        );
      };
    },
    23291: function (e) {
      e.exports = {
        rotating: "globaldeals_rotating__oothh",
        rotate: "globaldeals_rotate__88_yc",
        scrollableTrades: "globaldeals_scrollableTrades__5ZutC",
      };
    },
  },
  function (e) {
    e.O(0, [421, 946, 878, 790, 616, 66, 774, 888, 179], function () {
      return (t = 8358), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
