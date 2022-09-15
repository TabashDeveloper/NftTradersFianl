(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [749],
  {
    47592: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/tradesquads",
        function () {
          return r(90506);
        },
      ]);
    },
    82933: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/opensea.db900e48.svg",
        height: 24,
        width: 24,
      };
    },
    57417: function (e, t, r) {
      "use strict";
      var a = r(8014);
      r(56168);
      t.Z = function (e) {
        var t = e.mainText,
          r = void 0 === t ? "" : t,
          n = e.subText,
          s = void 0 === n ? "" : n,
          i = e.button;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)("div", {
            className:
              "bg-primary-blue rounded-br-[88px] md:rounded-br-[264px]",
            children: (0, a.jsx)("div", {
              className: "m-auto max-w-[95%] px-[48px]",
              children: (0, a.jsxs)("div", {
                className:
                  "flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center",
                children: [
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("p", {
                        className:
                          "text-3xl md:text-5xl pt-[80px] pb-[16px] text-primary-white font-semibold",
                        children: r,
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "rubik text-base font-light text-primary-white pb-[40px] md:pb-[80px]",
                        children: s,
                      }),
                    ],
                  }),
                  i
                    ? (0, a.jsx)("div", {
                        className: "mb-[31px] md:mb-[0px]",
                        children: i,
                      })
                    : (0, a.jsx)(a.Fragment, {}),
                ],
              }),
            }),
          }),
        });
      };
    },
    64576: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return d;
        },
      });
      var a = r(8014),
        n = r(3621),
        s = r(62044),
        i = "/_next/static/media/guide.50057452.svg",
        l = "/_next/static/media/discord.3afcd57c.svg",
        c = "/_next/static/media/faq.ead89cb7.svg",
        x = r(75657),
        o = function (e) {
          var t = e.type,
            r = (0, s.Z)("common").t,
            o = {
              "how-to-trade": {
                icon: i,
                title: r("howToTradeLabel"),
                subtitle: r("learnHowLabel"),
                button: r("readMoreLabel"),
                href: "/how-to-trade",
              },
              discord: {
                icon: l,
                title: r("joinDiscordLabel"),
                subtitle: r("comeBestCommunityLabel"),
                button: r("joinUsLabel"),
                href: "https://discord.gg/q4gK9sqt6r",
              },
              faq: {
                icon: c,
                title: r("faqLabel"),
                subtitle: r("findAnswersLabel"),
                button: r("readMoreLabel"),
                href: "/faq",
              },
            }[t];
          return (0, a.jsxs)("div", {
            className: "flex flex-col items-center justify-center gap-10",
            children: [
              (0, a.jsx)("img", { src: o.icon, className: "w-20 h-20" }),
              (0, a.jsxs)("div", {
                className: "flex flex-col items-stretch justify-center gap-2",
                children: [
                  (0, a.jsx)("p", {
                    className:
                      "text-2xl text-center text-primary-blue font-semibold",
                    children: o.title,
                  }),
                  (0, a.jsx)("p", {
                    className:
                      "rubik text-primary-dark-blue text-base text-center font-light",
                    children: o.subtitle,
                  }),
                ],
              }),
              (0, a.jsx)(x.default, {
                href: o.href,
                children: (0, a.jsx)("a", {
                  target: "discord" === t ? "_blank" : "",
                  children: (0, a.jsx)(n.Z, {
                    text: o.button,
                    type: { class: "primary", icon: !1, hasColoredBg: !1 },
                    initialState: { state: "default" },
                    size: "small",
                    className: "px-[32px] py-[10px]",
                  }),
                }),
              }),
            ],
          });
        },
        d = function () {
          var e = (0, s.Z)("common").t;
          return (0, a.jsx)("section", {
            className: "w-full",
            children: (0, a.jsx)("div", {
              className:
                "w-full max-w-[1280px] h-full px-[12px] pt-[40px] pb-[60px] md:pt-[88px] md:pb-[84px] m-auto",
              children: (0, a.jsxs)("div", {
                className: "flex flex-col items-stretch justify-center gap-20",
                children: [
                  (0, a.jsx)("h1", {
                    className:
                      "text-center text-3xl text-primary-dark-blue font-semibold",
                    children: e("wantMoreLabel"),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex flex-col md:flex-row items-stretch justify-evenly gap-8",
                    children: [
                      (0, a.jsx)(o, { type: "how-to-trade" }),
                      (0, a.jsx)(o, { type: "discord" }),
                      (0, a.jsx)(o, { type: "faq" }),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
    },
    90506: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return E;
          },
        });
      var a = r(44453),
        n = r.n(a),
        s = r(8014),
        i = r(57919),
        l = r.n(i),
        c = r(44138),
        x = r(56168),
        o = r(3621),
        d = r(57417),
        m = r(36180),
        u = r(62305),
        p = r(64576),
        f = r(82933),
        h = "/_next/static/media/preview-nft.e9e342d0.svg",
        b = r(47777),
        v = r(24789),
        j = r(5996),
        g = r(17781),
        w = r(62044),
        y = r(97968),
        N = r(10327),
        k = r(4632),
        S = r(64607),
        L = r(45501),
        _ = r(1984),
        T = r(80998);
      function q(e, t, r, a, n, s, i) {
        try {
          var l = e[s](i),
            c = l.value;
        } catch (x) {
          return void r(x);
        }
        l.done ? t(c) : Promise.resolve(c).then(a, n);
      }
      function D(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (a, n) {
            var s = e.apply(t, r);
            function i(e) {
              q(s, a, n, i, l, "next", e);
            }
            function l(e) {
              q(s, a, n, i, l, "throw", e);
            }
            i(void 0);
          });
        };
      }
      function O(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var Z = {
          INSUFFICIENT_FUNDS: "Insufficent Funds",
          CALL_EXCEPTION: "Transaction Failed",
        },
        I = function () {
          var e = (0, w.Z)("common").t,
            t = (0, v.Ge)().library,
            r = (0, y.C)(function (e) {
              return e;
            }).waccount,
            a = r.account,
            i = r.jwtToken,
            l = r.currentNetworkId,
            c = (0, b.z)("TRADESQUAD_ADDRESS"),
            q = (0, b.z)("TRADESQUAD_ABI"),
            O = (0, x.useRef)(!1),
            I = (0, x.useState)(null),
            E = I[0],
            P = I[1],
            C = (0, x.useState)(null),
            F = C[0],
            z = C[1],
            A = (0, x.useState)(null),
            U = A[0],
            M = A[1],
            B = (function () {
              var e = D(
                n().mark(function e() {
                  var r, a, s, i, x, o, d, m;
                  return n().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (1 === l) {
                            e.next = 4;
                            break;
                          }
                          return P(null), e.abrupt("return");
                        case 4:
                          if (t) {
                            e.next = 6;
                            break;
                          }
                          return e.abrupt("return");
                        case 6:
                          return (
                            (s = new j.CH(c, q, t)),
                            (e.t0 = g),
                            (e.next = 10),
                            s.claimVal()
                          );
                        case 10:
                          return (
                            (e.t1 = e.sent),
                            (i = e.t0.formatUnits.call(e.t0, e.t1)),
                            (e.next = 14),
                            s.series(1)
                          );
                        case 14:
                          (x = e.sent),
                            (o =
                              Number(
                                null === (r = x.currentSupply[0]) ||
                                  void 0 === r
                                  ? void 0
                                  : r.toString()
                              ) || 0),
                            (d =
                              Number(
                                null === (a = x.maxSupply) || void 0 === a
                                  ? void 0
                                  : a.toString()
                              ) || 0),
                            (m = x.enabled || !1),
                            O.current &&
                              P({ amount: i, current: o, max: d, enabled: m });
                        case 19:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            R = (function () {
              var e = D(
                n().mark(function e() {
                  var r, s, l, x, o, d, m, u, p, f, h, b, v, g, w;
                  return n().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (t && a && i) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            return (
                              (r = new j.CH(c, q, t.getSigner(a))),
                              (e.next = 5),
                              r.claimVal()
                            );
                          case 5:
                            return (
                              (s = e.sent.toString()),
                              (e.prev = 6),
                              (e.next = 10),
                              r.awardItem(1, !1, { value: s })
                            );
                          case 10:
                            return (d = e.sent), (e.next = 13), d.wait();
                          case 13:
                            if (
                              ((m = e.sent.events),
                              (u =
                                null ===
                                  (l = m.find(function (e) {
                                    return "nftMinted" === e.event;
                                  })) ||
                                void 0 === l ||
                                null === (x = l.args) ||
                                void 0 === x ||
                                null === (o = x._tokenId) ||
                                void 0 === o
                                  ? void 0
                                  : o.toString()))
                            ) {
                              e.next = 17;
                              break;
                            }
                            throw { code: "NO_TOKEN_ID" };
                          case 17:
                            return (e.next = 19), B();
                          case 19:
                            p = { image: null, value: "0" };
                          case 20:
                            return (
                              (e.next = 23),
                              (0, N.bf)((0, k.f)("getMintedNFT", [u]))
                            );
                          case 23:
                            (h = e.sent),
                              (b = h.image),
                              (v = h.attributes),
                              (p.value =
                                null !==
                                  (g =
                                    null ===
                                      (f = v.find(function (e) {
                                        return "Random Number" === e.trait_type;
                                      })) || void 0 === f
                                      ? void 0
                                      : f.value) && void 0 !== g
                                  ? g
                                  : "0"),
                              (p.image = b);
                          case 29:
                            if ("0" === p.value) {
                              e.next = 20;
                              break;
                            }
                          case 30:
                            z(p.image), (e.next = 39);
                            break;
                          case 33:
                            if (
                              ((e.prev = 33), (e.t0 = e.catch(6)), e.t0.code)
                            ) {
                              e.next = 37;
                              break;
                            }
                            return e.abrupt("return", console.error(e.t0));
                          case 37:
                            (w = Z[e.t0.code.toString().replace("-", "")])
                              ? M(w)
                              : console.error(e.t0);
                          case 39:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[6, 33]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            (0, x.useEffect)(
              function () {
                if (((O.current = !0), 1 === l)) {
                  var e = null;
                  return (
                    B()
                      .then(function () {
                        e = setInterval(function () {
                          return B();
                        }, 2e4);
                      })
                      .catch(function (e) {
                        console.error(e), P(null);
                      }),
                    function () {
                      e && clearInterval(e), (O.current = !1);
                    }
                  );
                }
                P(null);
              },
              [t, l]
            ),
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(L.Z, {}),
                (0, s.jsxs)(_.default, {
                  children: [
                    (0, s.jsx)("title", { children: e("titleLabel") }),
                    (0, s.jsx)(T.Z, {
                      metaTitle: e("titleLabel"),
                      metaDescription: e("metaDescriptionLabel"),
                      metaOgTitle: e("titleLabel"),
                      metaOgDescription: e("metaDescriptionLabel"),
                      metaOgImage:
                        "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/meta-logo.png",
                      metaOgUrl: "https://www.nfttrader.io/tradesquads",
                      twitterImageCard:
                        "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/meta-logo.png",
                      twitterImage:
                        "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/meta-logo.png",
                      twitterUrl: "https://www.nfttrader.io/tradesquads",
                      twitterTitle: e("titleLabel"),
                      twitterDescription: e("metaDescriptionLabel"),
                    }),
                    (0, s.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
                    (0, s.jsx)("link", {
                      rel: "apple-touch-icon",
                      sizes: "180x180",
                      href: "/apple-touch-icon.png",
                    }),
                    (0, s.jsx)("link", {
                      rel: "icon",
                      type: "image/png",
                      sizes: "32x32",
                      href: "/favicon-32x32.png",
                    }),
                    (0, s.jsx)("link", {
                      rel: "icon",
                      type: "image/png",
                      sizes: "16x16",
                      href: "/favicon-16x16.png",
                    }),
                    (0, s.jsx)("link", {
                      rel: "manifest",
                      href: "/site.webmanifest",
                    }),
                  ],
                }),
                (0, s.jsx)(u.Z, {}),
                (0, s.jsx)("div", {
                  className: "bg-primary-yellow",
                  children: (0, s.jsx)(d.Z, {
                    mainText: e("mintTradeSquadLabel"),
                    subText: "",
                  }),
                }),
                (0, s.jsx)("main", {
                  className:
                    "max-w-[1280px] m-auto px-[16px] mt-[40px] md:px-[48px] md:my-[88px]",
                  children: (0, s.jsxs)("div", {
                    className: "flex justify-between md:px-[48px]",
                    children: [
                      (0, s.jsx)("div", {
                        className: "mr-[64px] hidden md:block",
                        children: F
                          ? (0, s.jsx)("img", {
                              src: F,
                              className: "w-[320px] h-[400px]",
                            })
                          : (0, s.jsx)("img", {
                              src: h,
                              className: "w-[320px] h-[400px]",
                            }),
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                          (0, s.jsxs)("div", {
                            className:
                              "text-center md:text-left md:max-w-[620px]",
                            children: [
                              (0, s.jsx)("p", {
                                className:
                                  "text-2xl text-primary-dark-blue font-semibold md:text-4xl",
                                children: e("bypassPlatformLabel"),
                              }),
                              (0, s.jsx)("p", {
                                className:
                                  "text-base text-primary-dark-blue font-semibold my-[16px] md:text-lg",
                                children: e("mintTradeSquadDescriptionLabel"),
                              }),
                            ],
                          }),
                          (0, s.jsx)("hr", {
                            className:
                              "w-full bg-primary-gray my-[48px] md:my-[56px]",
                          }),
                          E
                            ? (0, s.jsxs)(s.Fragment, {
                                children: [
                                  (0, s.jsxs)("div", {
                                    className:
                                      "flex flex-col-reverse text-center justify-between items-center md:text-left md:flex-row",
                                    children: [
                                      (0, s.jsxs)("div", {
                                        children: [
                                          (0, s.jsx)("div", {
                                            className:
                                              "text-lg text-primary-dark-blue font-semibold my-[6px]",
                                            children: e(
                                              "tradeSquadMintedLabel"
                                            ),
                                          }),
                                          (0, s.jsxs)("div", {
                                            className:
                                              "rubik text-primary-dark-blue font-light my-[8px] md:my-[8px]",
                                            children: [
                                              e("priceMintLabel"),
                                              " ",
                                              E.amount,
                                              "ETH",
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, s.jsxs)("div", {
                                        className:
                                          "text-4xl text-primary-blue font-semibold my-[6px] md:my-0 md:text-5xl",
                                        children: [E.current, "/630"],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className:
                                      "m-auto my-[48px] md:my-0 md:m-0",
                                    children: [
                                      (0, s.jsx)(o.Z, {
                                        text: e("mintTradeSquadButtonLabel"),
                                        type: {
                                          class: "primary",
                                          icon: !1,
                                          hasColoredBg: !1,
                                        },
                                        initialState: { state: "disabled" },
                                        size: "small",
                                        onClick: (function () {
                                          var e = D(
                                            n().mark(function e(t) {
                                              return n().wrap(function (e) {
                                                for (;;)
                                                  switch ((e.prev = e.next)) {
                                                    case 0:
                                                      return (
                                                        t("loading"),
                                                        (e.next = 3),
                                                        R()
                                                      );
                                                    case 3:
                                                      t("default");
                                                    case 4:
                                                    case "end":
                                                      return e.stop();
                                                  }
                                              }, e);
                                            })
                                          );
                                          return function (t) {
                                            return e.apply(this, arguments);
                                          };
                                        })(),
                                        className:
                                          "px-[40px] py-[16px] md:w-[230px] md:mt-[40px]",
                                      }),
                                      U &&
                                        (0, s.jsx)("p", {
                                          className:
                                            "text-center mt-4 text-state-warning",
                                          children: U,
                                        }),
                                    ],
                                  }),
                                ],
                              })
                            : (0, s.jsx)(s.Fragment, {
                                children:
                                  1 === l
                                    ? (0, s.jsx)("div", {
                                        className:
                                          "flex items-center justify-center w-full h-[150px]",
                                        children: (0, s.jsx)(S.Z, {
                                          isWhite: !1,
                                          className: "w-[40px] h-[40px]",
                                        }),
                                      })
                                    : (0, s.jsx)(s.Fragment, {
                                        children: (0, s.jsx)("div", {
                                          className:
                                            "flex items-center justify-center w-full h-[100px]",
                                          children: (0, s.jsx)("span", {
                                            className:
                                              "rubik text-base text-primary-blue font-regular",
                                            children: e("mintAvailableLabel"),
                                          }),
                                        }),
                                      }),
                              }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)("section", {
                  className: "w-full bg-primary-blue",
                  children: (0, s.jsx)("div", {
                    className:
                      "flex flex-col max-w-[1280px] m-auto px-[16px] md:px-[48px] text-center",
                    children: (0, s.jsx)("div", {
                      className: "md:grid md:grid-cols-12",
                      children: (0, s.jsxs)("div", {
                        className: "md:col-start-3 md:col-span-8",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "text-2xl text-primary-white font-semibold pt-[40px] mb-[40px] md:text-4xl md:pt-[88px]",
                            children: e("tradeSquadParagraph1"),
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "rubik text-primary-white text-base font-light mb-[24px]",
                            children: e("tradeSquadParagraph2"),
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "rubik text-primary-white text-base font-light mb-[56px]",
                            children: e("tradeSquadParagraph3"),
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "flex mb-[56px] justify-center md:mb-[96px]",
                            children: (0, s.jsx)("a", {
                              href: "https://opensea.io/collection/tradesquads",
                              target: "_blank",
                              children: (0, s.jsxs)("div", {
                                className:
                                  "flex justify-between items-center w-full h-[72px] bg-primary-white rounded-[72px] p-[16px] pl-[40px] hover:bg-primary-yellow cursor-pointer sm:w-[455px]",
                                children: [
                                  (0, s.jsx)("div", {
                                    className:
                                      "text-base font-semibold text-left text-primary-blue mr-[32px]",
                                    children: e("tradeSquadParagraph4"),
                                  }),
                                  (0, s.jsx)("img", {
                                    src: f.Z.src,
                                    className: "w-[40px] h-[40px]",
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
                (0, s.jsx)(p.Z, {}),
                (0, s.jsx)(m.Z, {}),
              ],
            })
          );
        },
        E = (0, c.Z)(
          I,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {},
                a = Object.keys(r);
              "function" === typeof Object.getOwnPropertySymbols &&
                (a = a.concat(
                  Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                  })
                )),
                a.forEach(function (t) {
                  O(e, t, r[t]);
                });
            }
            return e;
          })({}, l(), {
            isLoader: !0,
            skipInitialProps: !1,
            loadLocaleFrom: function (e, t) {
              return r(30242)("./".concat(e, "/").concat(t)).then(function (e) {
                return e.default;
              });
            },
          })
        );
    },
  },
  function (e) {
    e.O(0, [421, 946, 790, 774, 888, 179], function () {
      return (t = 47592), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
