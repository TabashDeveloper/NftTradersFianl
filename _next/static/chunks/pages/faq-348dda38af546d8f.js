(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [746],
  {
    84160: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/faq",
        function () {
          return i(97979);
        },
      ]);
    },
    48377: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/smile_sad.bf2edabd.svg",
        height: 152,
        width: 152,
      };
    },
    57417: function (e, t, i) {
      "use strict";
      var s = i(8014);
      i(56168);
      t.Z = function (e) {
        var t = e.mainText,
          i = void 0 === t ? "" : t,
          n = e.subText,
          r = void 0 === n ? "" : n,
          a = e.button;
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)("div", {
            className:
              "bg-primary-blue rounded-br-[88px] md:rounded-br-[264px]",
            children: (0, s.jsx)("div", {
              className: "m-auto max-w-[95%] px-[48px]",
              children: (0, s.jsxs)("div", {
                className:
                  "flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center",
                children: [
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("p", {
                        className:
                          "text-3xl md:text-5xl pt-[80px] pb-[16px] text-primary-white font-semibold",
                        children: i,
                      }),
                      (0, s.jsx)("p", {
                        className:
                          "rubik text-base font-light text-primary-white pb-[40px] md:pb-[80px]",
                        children: r,
                      }),
                    ],
                  }),
                  a
                    ? (0, s.jsx)("div", {
                        className: "mb-[31px] md:mb-[0px]",
                        children: a,
                      })
                    : (0, s.jsx)(s.Fragment, {}),
                ],
              }),
            }),
          }),
        });
      };
    },
    82949: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return f;
        },
      });
      var s = i(8014),
        n = i(56168),
        r = i(4632),
        a = i(10327),
        c = i(64607),
        l = "/_next/static/media/open.4900abe5.svg",
        o = "/_next/static/media/close.690e3d7b.svg",
        x = function (e) {
          var t = e.toggled,
            i = void 0 !== t && t,
            n = e.width,
            r = void 0 === n ? "w-[22px]" : n,
            a = e.height,
            c = void 0 === a ? "h-[22px]" : a,
            x = e.onClick;
          return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)("div", {
              className:
                "flex justify-center items-center cursor-pointer select-none mr-[17px] "
                  .concat(r, " ")
                  .concat(c),
              onClick: function () {
                x && x();
              },
              children: i
                ? (0, s.jsx)("img", { src: o })
                : (0, s.jsx)("img", { src: l }),
            }),
          });
        },
        m = function (e) {
          var t = e.text,
            i = e.bodyText,
            r = e.opened,
            a = void 0 !== r && r,
            c = (0, n.useState)(a),
            l = c[0],
            o = c[1];
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("hr", { className: "my-[8px] bg-primary-gray" }),
              (0, s.jsxs)("div", {
                className: "flex flex-col my-[32px]",
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex justify-between items-center",
                    children: [
                      (0, s.jsx)("h4", {
                        className: "text-primary-blue text-lg font-semibold",
                        children: t,
                      }),
                      (0, s.jsx)(x, {
                        toggled: l,
                        onClick: function () {
                          o(!l);
                        },
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "".concat(l ? "block mt-[24px]" : "hidden"),
                    children: (0, s.jsx)("p", {
                      className:
                        "rubik text-primary-dark-blue text-base font-light",
                      children: i,
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        d = i(48377),
        u = i(62044),
        f = function (e) {
          var t = e.api,
            i = e.filter,
            l = void 0 === i ? "" : i,
            o = e.firstOpen,
            x = void 0 !== o && o,
            f = (0, u.Z)("common").t,
            p = (0, n.useRef)(!1),
            h = (0, n.useState)(),
            j = h[0],
            b = h[1],
            g = (0, n.useState)(!1),
            w = g[0],
            v = g[1];
          return (
            (0, n.useEffect)(function () {
              return (
                (p.current = !0),
                function () {
                  p.current = !1;
                }
              );
            }, []),
            (0, n.useEffect)(function () {
              p.current && v(!0),
                (0, a.bf)((0, r.f)(t))
                  .then(function (e) {
                    p.current && (b(e), v(!1));
                  })
                  .catch(function (e) {
                    console.error(e), p.current && v(!1);
                  });
            }, []),
            (0, s.jsx)(s.Fragment, {
              children: (0, s.jsxs)("section", {
                children: [
                  !w &&
                    j &&
                    j
                      .filter(function (e) {
                        return l.length > 0
                          ? e.detail.toLowerCase().includes(l.toLowerCase())
                          : e;
                      })
                      .map(function (e, t) {
                        return (0,
                        s.jsx)(m, { text: e.title, bodyText: e.detail, opened: !!x && 0 == t }, "accordion-".concat(t));
                      }),
                  ((!w && !j) ||
                    (j &&
                      0 ===
                        j.filter(function (e) {
                          return l.length > 0
                            ? e.detail.toLowerCase().includes(l.toLowerCase())
                            : e;
                        }).length)) &&
                    (0, s.jsx)(s.Fragment, {
                      children: (0, s.jsxs)("div", {
                        className:
                          "flex flex-col items-center justify-center gap-10 pb-[50px]",
                        children: [
                          (0, s.jsx)("img", { src: d.Z.src }),
                          (0, s.jsxs)("div", {
                            className:
                              "flex flex-col items-center justify-center",
                            children: [
                              (0, s.jsx)("h1", {
                                className:
                                  "text-3xl text-primary-dark-blue font-semibold",
                                children: f("noResultsLabel"),
                              }),
                              (0, s.jsx)("h3", {
                                className:
                                  "text-base font-light text-primary-dark-blue",
                                children: f("tryAgainLabel"),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  w &&
                    (0, s.jsx)(s.Fragment, {
                      children: (0, s.jsx)("div", {
                        className:
                          "flex items-center justify-center w-full h-[200px]",
                        children: (0, s.jsx)(c.Z, {
                          isWhite: !1,
                          className: "w-[32px] h-[32px]",
                        }),
                      }),
                    }),
                ],
              }),
            })
          );
        };
    },
    97979: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          __N_SSG: function () {
            return f;
          },
        });
      var s = i(8014),
        n = i(1984),
        r = i(56168),
        a = i(45501),
        c = i(80998),
        l = i(57417),
        o = i(79838),
        x = i(82949),
        m = i(36180),
        d = i(62305),
        u = i(62044),
        f = !0;
      t.default = function () {
        var e = (0, r.useState)(""),
          t = e[0],
          i = e[1],
          f = (0, u.Z)("common").t;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(a.Z, {}),
            (0, s.jsxs)(n.default, {
              children: [
                (0, s.jsx)("title", { children: f("titleLabel") }),
                (0, s.jsx)(c.Z, {
                  metaTitle: f("titleLabel"),
                  metaDescription: f("metaDescriptionLabel"),
                  metaOgTitle: f("titleLabel"),
                  metaOgDescription: f("metaDescriptionLabel"),
                  metaOgImage:
                    "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/meta-logo.png",
                  metaOgUrl: "https://www.nfttrader.io/faq",
                  twitterImageCard:
                    "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/meta-logo.png",
                  twitterImage:
                    "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/meta-logo.png",
                  twitterUrl: "https://www.nfttrader.io/faq",
                  twitterTitle: f("titleLabel"),
                  twitterDescription: f("metaDescriptionLabel"),
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
            (0, s.jsx)(d.Z, {}),
            (0, s.jsx)("div", {
              className: "bg-primary-yellow",
              children: (0, s.jsx)(l.Z, {
                mainText: f("FAQ"),
                subText: f("faqSubHeaderLabel"),
              }),
            }),
            (0, s.jsxs)("main", {
              className: "max-w-[1280px] px-[16px] m-auto md:px-[48px]",
              children: [
                (0, s.jsx)(o.Z, {
                  setFilter: i,
                  className: "my-[40px] sm:my-[64px]",
                  placeholder: f("searchFAQLabel"),
                }),
                (0, s.jsx)("div", {
                  className: "mb-[45px] md:px-[48px] md:mb-[119px]",
                  children: (0, s.jsx)(x.Z, { api: "getFAQ", filter: t }),
                }),
              ],
            }),
            (0, s.jsx)(m.Z, {}),
          ],
        });
      };
    },
  },
  function (e) {
    e.O(0, [421, 946, 790, 774, 888, 179], function () {
      return (t = 84160), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
