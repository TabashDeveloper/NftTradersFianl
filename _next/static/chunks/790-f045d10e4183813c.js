(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [790],
  {
    27164: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/X.17606240.svg",
        height: 24,
        width: 24,
      };
    },
    72273: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/X_blue.6aeb22e2.svg",
        height: 24,
        width: 24,
      };
    },
    27536: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/completed.e4c035a9.svg",
        height: 24,
        width: 24,
      };
    },
    68714: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/default.938c2728.svg",
        height: 40,
        width: 40,
      };
    },
    15654: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/hover.246b1db1.svg",
        height: 40,
        width: 40,
      };
    },
    15199: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/default.02785968.svg",
        height: 40,
        width: 40,
      };
    },
    39963: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/hover.7582544b.svg",
        height: 40,
        width: 40,
      };
    },
    41708: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/logo_negative.75c9307e.svg",
        height: 150,
        width: 640,
      };
    },
    42662: function (e, t, n) {
      "use strict";
      var r = n(8014),
        a = n(33990),
        i = n.n(a),
        s = n(39700),
        o = n.n(s),
        l = n(56168),
        c = n(47777),
        u = n(79327),
        d = n(29562),
        p = n(73468),
        m = n(97968),
        f = n(8138),
        x = n(62044);
      t.Z = function (e) {
        var t = e.username,
          n = e.address,
          s = e.displayInfo,
          h = void 0 !== s && s,
          y = e.src,
          v = void 0 === y ? "" : y,
          g = e.isNFT,
          b = void 0 === g ? 0 : g,
          w = e.className,
          j = e.sizesClassNames,
          N = e.jazziconSize,
          k = e.isReversed,
          _ = void 0 !== k && k,
          S = e.displayInfoClassName,
          T = void 0 === S ? "" : S,
          C = e.addressInfoClassName,
          M = void 0 === C ? "" : C,
          L = e.usernameNotSetClassName,
          I = void 0 === L ? "" : L,
          A = e.avatarCustomColorAddress,
          E = void 0 === A ? "#979dac" : A,
          O = (0, x.Z)("common").t,
          D = N,
          Z = [];
        D.sizes.length !== D.breakpoints.length &&
          (D.sizes.length < D.breakpoints.length
            ? (D.breakpoints = D.breakpoints.splice(0, D.sizes.length))
            : (D.sizes = D.sizes.splice(0, D.breakpoints.length)));
        var z = 0;
        for (Z.push((0, u.Z)()); z < D.breakpoints.length; )
          Z.push((0, u.Z)()), z++;
        var P = (0, l.useState)(D)[0],
          F = (0, l.useState)(Z)[0],
          B = (0, l.useState)(!1),
          R = B[0],
          U = B[1],
          H = (0, l.useState)(""),
          V = H[0],
          Y = H[1],
          W = (0, m.C)(function (e) {
            return e;
          }).waccount.currentNetworkId;
        return (
          (0, l.useEffect)(function () {
            if ("number" !== typeof P) {
              var e = "\n        .jazzicon-container-"
                .concat(F[0], " {\n          width: ")
                .concat(P.defaultSize, "px;\n          height: ")
                .concat(P.defaultSize, "px;\n        }\n\n        ")
                .concat(
                  P.sizes.map(function (e, t) {
                    return ".jazzicon-container-".concat(
                      F[t + 1],
                      " {\n            display: none\n          }"
                    );
                  }),
                  "\n\n        "
                )
                .concat(
                  P.breakpoints.map(function (e, t) {
                    return 0 === t
                      ? "@media(min-width : "
                          .concat(
                            e,
                            "px) {\n              .jazzicon-container-"
                          )
                          .concat(
                            F[0],
                            " {\n                display: none;\n              }\n\n              .jazzicon-container-"
                          )
                          .concat(
                            F[1],
                            " {\n                display: flex;\n              }\n            }"
                          )
                      : "@media(min-width : "
                          .concat(
                            e,
                            "px) {\n              .jazzicon-container-"
                          )
                          .concat(
                            F[t],
                            " {\n                display: none;\n              }\n\n              .jazzicon-container-"
                          )
                          .concat(
                            F[t + 1],
                            " {\n                display: flex;\n              }\n            }"
                          );
                  }),
                  "\n      "
                );
              Y(e), U(!0);
            }
          }, []),
          (0, r.jsxs)("div", {
            className: ""
              .concat(o().pfpwrapper, " ")
              .concat(null !== w && void 0 !== w ? w : "", " flex ")
              .concat(
                _ ? "flex-row-reverse" : "",
                " items-center justify-start gap-4"
              ),
            children: [
              (0, r.jsxs)("div", {
                className: "rounded-full flex items-center ".concat(j),
                children: [
                  (0, r.jsx)("div", {
                    className: "".concat(
                      (null === v || void 0 === v ? void 0 : v.length)
                        ? "hidden"
                        : "block",
                      " w-full h-full"
                    ),
                    children:
                      0 === P.breakpoints.length && 0 === P.sizes.length
                        ? (0, r.jsx)(i(), {
                            seed: (0, a.jsNumberForAddress)(
                              "" !== n && n ? n : (0, c.z)("ADDRESS_ZERO")
                            ),
                            diameter: P.defaultSize,
                          })
                        : (0, r.jsx)(r.Fragment, {
                            children:
                              R &&
                              (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)("style", {
                                    dangerouslySetInnerHTML: { __html: V },
                                  }),
                                  (0, r.jsx)("div", {
                                    className: "jazzicon-container-".concat(
                                      F[0]
                                    ),
                                    children: (0, r.jsx)(i(), {
                                      seed: (0, a.jsNumberForAddress)(
                                        "" !== n && n
                                          ? n
                                          : (0, c.z)("ADDRESS_ZERO")
                                      ),
                                      diameter: P.defaultSize,
                                    }),
                                  }),
                                  P.sizes.map(function (e, t) {
                                    return (0,
                                    r.jsx)("div", { className: "jazzicon-container-".concat(F[t + 1]), children: (0, r.jsx)(i(), { seed: (0, a.jsNumberForAddress)("" !== n && n ? n : (0, c.z)("ADDRESS_ZERO")), diameter: e }) }, "jazz-cont-".concat(F[t + 1]));
                                  }),
                                ],
                              }),
                          }),
                  }),
                  (0, r.jsx)("div", {
                    className: ""
                      .concat(
                        (null === v || void 0 === v ? void 0 : v.length)
                          ? "block"
                          : "hidden",
                        "  "
                      )
                      .concat(1 === b ? o().nft : "rounded-full", " ")
                      .concat(j),
                    style: {
                      backgroundImage: "url(".concat(v, ")"),
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    },
                  }),
                ],
              }),
              h &&
                (0, r.jsxs)("div", {
                  className: "flex flex-col items-stretch justify-evenly",
                  children: [
                    (0, r.jsx)("span", {
                      className: "font-semibold ".concat(T),
                      children: (null === t || void 0 === t ? void 0 : t.length)
                        ? "@".concat(t)
                        : (0, r.jsx)("span", {
                            className: "".concat(I || "text-primary-gray"),
                            children: O("usernameNotSetLabel"),
                          }),
                    }),
                    (0, r.jsx)("span", {
                      className: "".concat(M),
                      children:
                        W && null != n
                          ? (0, r.jsx)(f.Z, {
                              text: (0, d.x)(n),
                              url: (0, p.x)(W, n),
                              isCustom: !0,
                              customColor: E,
                              weight: "font-regular",
                              isTargetBlank: !0,
                            })
                          : (0, r.jsx)(r.Fragment, {
                              children: null != n && (0, d.x)(n),
                            }),
                    }),
                  ],
                }),
            ],
          })
        );
      };
    },
    3621: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var r,
        a,
        i,
        s = n(8014),
        o = n(56168);
      !(function (e) {
        (e.PRIMARY = "primary"), (e.SECONDARY = "secondary");
      })(r || (r = {})),
        (function (e) {
          (e.SMALL = "small"), (e.LARGE = "large");
        })(a || (a = {})),
        (function (e) {
          (e.DEFAULT = "default"),
            (e.DISABLED = "disabled"),
            (e.LOADING = "loading");
        })(i || (i = {}));
      var l = n(61948),
        c = n.n(l),
        u = function (e) {
          var t = e.type,
            n = "";
          return (
            (t.class === r.PRIMARY && t.hasColoredBg) ||
            (t.class === r.SECONDARY && !t.hasColoredBg)
              ? (n = "bg-primary-blue")
              : ((t.class === r.PRIMARY && !t.hasColoredBg) ||
                  (t.class === r.SECONDARY && t.hasColoredBg)) &&
                (n = "bg-primary-white"),
            (0, s.jsx)(s.Fragment, {
              children: (0, s.jsxs)("div", {
                className:
                  "flex items-center justify-center absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]",
                children: [
                  (0, s.jsx)("div", {
                    className: "w-[6px] h-[6px] rounded-full "
                      .concat(n, " ")
                      .concat(c().fade60),
                  }),
                  (0, s.jsx)("div", {
                    className: "w-[8px] h-[8px] mx-[10px] rounded-full "
                      .concat(n, " ")
                      .concat(c().fade80),
                  }),
                  (0, s.jsx)("div", {
                    className: "w-[10px] h-[10px] rounded-full "
                      .concat(n, " ")
                      .concat(c().fade100),
                  }),
                ],
              }),
            })
          );
        },
        d = n(64572),
        p = n.n(d),
        m = function (e, t, n) {
          var s = "";
          if (e.class === r.PRIMARY && !0 === e.hasColoredBg) {
            var o = "";
            n === i.DEFAULT
              ? (o =
                  "bg-primary-white text-primary-blue transition-colors ease-in-out duration-500 hover:bg-primary-yellow active:bg-primary-white")
              : n === i.DISABLED
              ? (o = e.icon
                  ? "bg-primary-gray text-primary-white"
                  : "bg-gray-300 text-primary-gray")
              : n === i.LOADING && (o = "bg-primary-white"),
              t === a.LARGE
                ? (s = "".concat(o, " rounded-[100px] px-8 py-4"))
                : t === a.SMALL &&
                  (s = "".concat(o, " rounded-[100px] px-4 py-2"));
          } else if (e.class === r.PRIMARY && !1 === e.hasColoredBg) {
            var l = "";
            n === i.DEFAULT
              ? (l =
                  "bg-primary-blue text-primary-white transition-colors ease-in-out duration-500 hover:bg-primary-dark-blue active:bg-primary-blue")
              : n === i.DISABLED
              ? (l = e.icon
                  ? "bg-primary-gray text-primary-white"
                  : "bg-gray-300 text-primary-gray")
              : n === i.LOADING && (l = "bg-primary-blue"),
              t === a.LARGE
                ? (s = "".concat(l, " rounded-[100px] px-8 py-4"))
                : t === a.SMALL &&
                  (s = "".concat(l, " rounded-[100px] px-4 py-2"));
          } else if (e.class === r.SECONDARY && !0 === e.hasColoredBg) {
            var c = "";
            n === i.DEFAULT
              ? (c =
                  "bg-primary-blue text-primary-white border border-solid border-primary-white transition-colors ease-in-out duration-500 hover:text-primary-yellow hover:border-primary-yellow active:text-primary-white active:border-primary-white")
              : n === i.DISABLED
              ? (c =
                  "bg-primary-blue border border-solid border-primary-gray text-primary-gray")
              : n === i.LOADING &&
                (c =
                  "bg-primary-blue border border-solid border-primary-white"),
              t === a.LARGE
                ? (s = "".concat(c, " rounded-[100px] px-8 py-4"))
                : t === a.SMALL &&
                  (s = "".concat(c, " rounded-[100px] px-4 py-2"));
          } else if (e.class === r.SECONDARY && !1 === e.hasColoredBg) {
            var u = "";
            n === i.DEFAULT
              ? (u =
                  "bg-primary-white text-primary-blue border border-solid border-primary-blue transition-colors ease-in-out duration-500 hover:text-primary-dark-blue hover:border-primary-dark-blue active:text-primary-blue active:border-primary-blue")
              : n === i.DISABLED
              ? (u =
                  "bg-primary-white border border-solid border-primary-gray text-primary-gray")
              : n === i.LOADING &&
                (u =
                  "bg-primary-white border border-solid border-primary-blue"),
              t === a.LARGE
                ? (s = "".concat(u, " rounded-[100px] px-8 py-4"))
                : t === a.SMALL &&
                  (s = "".concat(u, " rounded-[100px] px-4 py-2"));
          }
          return s;
        },
        f = function (e) {
          var t = e.text,
            n = void 0 === t ? "" : t,
            r = e.type,
            a = e.size,
            i = e.initialState,
            l = e.iconSrc,
            c = e.className,
            d = e.onClick,
            f = e.reverseIconText,
            x = void 0 !== f && f,
            h = e.showNotifications,
            y = void 0 !== h && h,
            v = e.notificationsNumber,
            g = void 0 === v ? 0 : v;
          if (r.icon && !l) throw new Error("Provide an icon to the button.");
          if (!r.icon && l) throw new Error("Remove the icon from the button.");
          var b = (0, o.useState)(i.state),
            w = b[0],
            j = b[1],
            N = m(r, a, w);
          return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsxs)("div", {
              className:
                "flex select-none justify-center items-center text-center "
                  .concat(
                    "disabled" === w || "loading" === w
                      ? "cursor-default"
                      : "cursor-pointer",
                    " "
                  )
                  .concat(x ? "flex-row-reverse" : "", " ")
                  .concat(N, " ")
                  .concat(c, " ")
                  .concat("loading" === w && "relative"),
              onClick: function (e) {
                e.stopPropagation(),
                  "disabled" !== w && "loading" !== w && d && d(j);
              },
              children: [
                (0, s.jsx)("span", {
                  className: "".concat(
                    "loading" === w && "invisible",
                    " text-sm font-semibold"
                  ),
                  children: n,
                }),
                "loading" !== w &&
                  l &&
                  !y &&
                  (0, s.jsx)("span", {
                    className: "flex w-[24px] h-[24px] ".concat(
                      "large" === a
                        ? !1 === x
                          ? "ml-[16px]"
                          : "mr-[16px]"
                        : !1 === x
                        ? "ml-[8px]"
                        : "mr-[8px]"
                    ),
                    children: (0, s.jsx)("img", {
                      src: l,
                      className: "w-[24px] h-[24px] ".concat(
                        "disabled" === w ? "".concat(p().disabled) : ""
                      ),
                    }),
                  }),
                "loading" !== w &&
                  l &&
                  y &&
                  (0, s.jsx)("span", {
                    className: "flex w-[24px] h-[24px] ".concat(
                      "large" === a
                        ? !1 === x
                          ? "ml-[8.5px] mr-[8.5px]"
                          : "mr-[8.5px] ml-[8.5px]"
                        : !1 === x
                        ? "ml-[8px] mr-[8px]"
                        : "mr-[8px] ml-[8px]"
                    ),
                    children: (0, s.jsx)("img", {
                      src: l,
                      className: "w-[24px] h-[24px] ".concat(
                        "disabled" === w ? "".concat(p().disabled) : ""
                      ),
                    }),
                  }),
                "loading" !== w &&
                  y &&
                  (0, s.jsx)("div", {
                    className:
                      "rounded-full flex items-center justify-center bg-primary-white w-[16px] h-[16px]",
                    children: (0, s.jsx)("span", {
                      className: "text-xxs font-semibold text-primary-blue",
                      children: g,
                    }),
                  }),
                "loading" === w && (0, s.jsx)(u, { type: r }),
              ],
            }),
          });
        };
    },
    45501: function (e, t, n) {
      "use strict";
      var r = n(8014),
        a = n(78703);
      t.Z = function () {
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(a.default, {
              src: "https://www.googletagmanager.com/gtag/js?id=G-MV9N5204BT",
            }),
            (0, r.jsx)(a.default, {
              id: "google-analytics",
              strategy: "afterInteractive",
              children:
                "\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n\n        gtag('config', 'G-MV9N5204BT');\n    ",
            }),
          ],
        });
      };
    },
    8138: function (e, t, n) {
      "use strict";
      var r = n(8014),
        a = n(75657),
        i = n(56168),
        s = n(54222),
        o = n.n(s),
        l = n(79327);
      t.Z = function (e) {
        var t = e.text,
          n = void 0 === t ? "" : t,
          s = e.url,
          c = e.isBlue,
          u = void 0 === c || c,
          d = e.isCustom,
          p = void 0 !== d && d,
          m = e.isTargetBlank,
          f = void 0 !== m && m,
          x = e.weight,
          h = void 0 === x ? "font-semibold" : x,
          y = e.customColor,
          v = void 0 === y ? "" : y,
          g = e.className,
          b = void 0 === g ? "" : g,
          w = (0, i.useState)((0, l.Z)())[0];
        return (0, r.jsxs)(r.Fragment, {
          children: [
            p &&
              (0, r.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html: ".link-custom-"
                    .concat(w, " {\n            color: ")
                    .concat(v, ";\n          }\n          .link-custom-")
                    .concat(w, "::before {\n            background-color: ")
                    .concat(v, ";\n          }\n          "),
                },
              }),
            (0, r.jsx)(a.default, {
              href: s,
              children: (0, r.jsx)("a", {
                className: ""
                  .concat(p ? "link-custom-".concat(w) : "", " ")
                  .concat(o().link, " ")
                  .concat(p ? "" : u ? o().blue : o().white, " ")
                  .concat(h, " cursor-pointer ")
                  .concat(b),
                target: f ? "_blank" : "",
                children: n,
              }),
            }),
          ],
        });
      };
    },
    64607: function (e, t, n) {
      "use strict";
      var r = n(8014),
        a = n(69784),
        i = n.n(a);
      t.Z = function (e) {
        var t = e.isWhite,
          n = void 0 === t || t,
          a = e.className,
          s = void 0 === a ? "w-[40px] h-[40px]" : a;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)("div", {
            className: "".concat(i().skChase, " ").concat(s),
            children: [
              (0, r.jsx)("div", {
                className: ""
                  .concat(i().skChaseDot, " ")
                  .concat(n ? i().skChaseDotWhite : i().skChaseDotBlue),
              }),
              (0, r.jsx)("div", {
                className: ""
                  .concat(i().skChaseDot, " ")
                  .concat(n ? i().skChaseDotWhite : i().skChaseDotBlue),
              }),
              (0, r.jsx)("div", {
                className: ""
                  .concat(i().skChaseDot, " ")
                  .concat(n ? i().skChaseDotWhite : i().skChaseDotBlue),
              }),
              (0, r.jsx)("div", {
                className: ""
                  .concat(i().skChaseDot, " ")
                  .concat(n ? i().skChaseDotWhite : i().skChaseDotBlue),
              }),
              (0, r.jsx)("div", {
                className: ""
                  .concat(i().skChaseDot, " ")
                  .concat(n ? i().skChaseDotWhite : i().skChaseDotBlue),
              }),
              (0, r.jsx)("div", {
                className: ""
                  .concat(i().skChaseDot, " ")
                  .concat(n ? i().skChaseDotWhite : i().skChaseDotBlue),
              }),
            ],
          }),
        });
      };
    },
    93699: function (e, t, n) {
      "use strict";
      var r = n(8014),
        a = n(56168),
        i = n(79327);
      t.Z = function (e) {
        var t = e.text,
          n = e.className,
          s = e.animationSpeed,
          o = void 0 === s ? "4" : s,
          l = e.isHoverable,
          c = void 0 !== l && l,
          u = (0, a.useState)(0),
          d = u[0],
          p = u[1],
          m = (0, a.useRef)(null),
          f = (0, a.useRef)(null),
          x = (0, i.Z)();
        return (
          (0, a.useEffect)(
            function () {
              if (m.current && f.current) {
                var e = new ResizeObserver(function (e) {
                  if (e.length > 0) {
                    var t = m.current,
                      n = f.current;
                    if (t && n) {
                      var r = t.offsetWidth,
                        a = n.offsetWidth;
                      p(a > r ? a - r : 0);
                    }
                  }
                });
                return (
                  e.observe(m.current),
                  function () {
                    m.current && (e.unobserve(m.current), e.disconnect());
                  }
                );
              }
            },
            [m.current, f.current]
          ),
          (0, r.jsxs)("div", {
            className:
              "relative w-full overflow-hidden text-clip whitespace-nowrap ".concat(
                n
              ),
            ref: m,
            children: [
              (0, r.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html: "\n            .marquee-"
                    .concat(
                      x,
                      " {\n                -webkit-animation: marquee_text_"
                    )
                    .concat(x, " ")
                    .concat(
                      o ? "".concat(o, "s") : "4s",
                      " linear infinite;\n                -moz-animation: marquee_text_"
                    )
                    .concat(x, " ")
                    .concat(
                      o ? "".concat(o, "s") : "4s",
                      " linear infinite;\n                -ms-animation: marquee_text_"
                    )
                    .concat(x, " ")
                    .concat(
                      o ? "".concat(o, "s") : "4s",
                      " linear infinite;\n                -o-animation: marquee_text_"
                    )
                    .concat(x, " ")
                    .concat(
                      o ? "".concat(o, "s") : "4s",
                      " linear infinite;\n                animation: marquee_text_"
                    )
                    .concat(x, " ")
                    .concat(
                      o ? "".concat(o, "s") : "4s",
                      " linear infinite;\n              will-change: transform;\n            }\n\n            @keyframes marquee_text_"
                    )
                    .concat(
                      x,
                      " {\n                to {\n                    transform: translateX(-"
                    )
                    .concat(
                      d,
                      "px)\n                }\n            }\n\n            @-moz-keyframes marquee_text_"
                    )
                    .concat(
                      x,
                      " {\n                to {\n                    transform: translateX(-"
                    )
                    .concat(
                      d,
                      "px)\n                }\n            }\n\n            @-webkit-keyframes marquee_text_"
                    )
                    .concat(
                      x,
                      " {\n                to {\n                    transform: translateX(-"
                    )
                    .concat(
                      d,
                      "px)\n                }\n            }\n        "
                    ),
                },
              }),
              (0, r.jsx)("div", {
                className: "absolute marquee-"
                  .concat(x, " ")
                  .concat(c ? "hover:underline" : ""),
                ref: f,
                title: "string" === typeof t ? t : "",
                children: t,
              }),
            ],
          })
        );
      };
    },
    25025: function (e, t, n) {
      "use strict";
      var r = n(8014),
        a = n(56168);
      t.Z = function (e) {
        var t = e.className,
          n = e.defaultPath,
          i = e.hoverPath,
          s = e.link,
          o = e.width,
          l = e.height,
          c = (0, a.useState)(!1),
          u = c[0],
          d = c[1];
        return u
          ? (0, r.jsx)(r.Fragment, {
              children: (0, r.jsx)("a", {
                href: s,
                target: "_blank",
                children: (0, r.jsx)("img", {
                  className: t,
                  src: i,
                  width: o,
                  height: l,
                  onMouseEnter: function () {
                    d(!u);
                  },
                  onMouseLeave: function () {
                    d(!u);
                  },
                }),
              }),
            })
          : (0, r.jsx)(r.Fragment, {
              children: (0, r.jsx)("a", {
                href: s,
                target: "_blank",
                children: (0, r.jsx)("img", {
                  className: t,
                  src: n,
                  width: o,
                  height: l,
                  onMouseEnter: function () {
                    d(!u);
                  },
                  onMouseLeave: function () {
                    d(!u);
                  },
                }),
              }),
            });
      };
    },
    80998: function (e, t, n) {
      "use strict";
      var r = n(8014);
      t.Z = function (e) {
        var t = e.metaTitle,
          n = e.metaDescription,
          a = e.metaOgUrl,
          i = e.metaOgTitle,
          s = e.metaOgDescription,
          o = e.metaOgImage,
          l = e.twitterImageCard,
          c = e.twitterUrl,
          u = e.twitterTitle,
          d = e.twitterDescription,
          p = e.twitterImage;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("meta", { name: "title", content: t }),
            (0, r.jsx)("meta", { name: "description", content: n }),
            (0, r.jsx)("meta", { property: "og:type", content: "website" }),
            (0, r.jsx)("meta", { property: "og:url", content: a }),
            (0, r.jsx)("meta", { property: "og:title", content: i }),
            (0, r.jsx)("meta", { property: "og:description", content: s }),
            (0, r.jsx)("meta", { property: "og:image", content: o }),
            (0, r.jsx)("meta", { property: "twitter:card", content: l }),
            (0, r.jsx)("meta", { property: "twitter:url", content: c }),
            (0, r.jsx)("meta", { property: "twitter:title", content: u }),
            (0, r.jsx)("meta", { property: "twitter:description", content: d }),
            (0, r.jsx)("meta", { property: "twitter:image", content: p }),
          ],
        });
      };
    },
    79838: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var r = n(8014),
        a = n(56168),
        i = "/_next/static/media/default.f8920bcb.svg",
        s = "/_next/static/media/search_white.5c0051ee.svg",
        o = "/_next/static/media/clear_search.95b7a990.svg",
        l = n(3621),
        c = n(11200),
        u = n.n(c),
        d = n(62044);
      function p(e, t) {
        return null != t &&
          "undefined" !== typeof Symbol &&
          t[Symbol.hasInstance]
          ? t[Symbol.hasInstance](e)
          : e instanceof t;
      }
      var m = function (e) {
        var t = e.setFilter,
          n = e.currentSearchState,
          c = void 0 === n ? "default" : n,
          m = e.onClear,
          f = e.placeholder,
          x = void 0 === f ? "" : f,
          h = e.hideIcon,
          y = void 0 !== h && h,
          v = e.hideText,
          g = void 0 !== v && v,
          b = e.hideButtons,
          w = void 0 !== b && b,
          j = e.refClear,
          N = e.isErrored,
          k = void 0 !== N && N,
          _ = e.regex,
          S = e.regexFailed,
          T = e.className,
          C = ((0, d.Z)("common").t, (0, a.useRef)(!1)),
          M = (0, a.useState)(c),
          L = M[0],
          I = M[1],
          A = (0, a.useState)(""),
          E = A[0],
          O = A[1],
          D = (0, a.useState)(!1),
          Z = D[0],
          z = D[1],
          P = (0, a.useRef)(null),
          F = function () {
            if ("filled" !== L) {
              C.current && (t(""), O(""), I("default"));
              var e = P.current;
              e && (e.value = "");
            } else {
              C.current && (z(!1), t(""), O(""));
              var n = P.current;
              n && (n.value = "");
            }
          };
        return (
          j && (j.current.clearInput = F),
          (0, a.useEffect)(function () {
            return (
              (C.current = !0),
              function () {
                C.current = !1;
              }
            );
          }, []),
          (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)("div", {
              className: ""
                .concat(
                  k ? u().insideBorderErroed : u().insideBorder,
                  " flex items-center justify-between px-[3px] rounded-[100px] h-[56px] "
                )
                .concat(T),
              children: [
                (0, r.jsx)("input", {
                  type: "text",
                  ref: P,
                  className: "".concat(
                    "filled" === L || "active" === L
                      ? w
                        ? ""
                        : "pr-[4px]"
                      : "",
                    " text-base font-semibold text-primary-dark-blue w-[100%] outline-0 h-[50px] rounded-[100px] pl-[8px] py-[8px] sm:pl-[24px]"
                  ),
                  placeholder: x,
                  value: E,
                  onChange: function (e) {
                    "filled" !== L
                      ? (0 === e.target.value.length
                          ? I("default")
                          : I("active"),
                        _
                          ? _.test(e.target.value) ||
                            0 === e.target.value.length
                            ? (p(t, Function) && t(e.target.value),
                              O(e.target.value))
                            : S && S()
                          : (p(t, Function) && t(e.target.value),
                            O(e.target.value)))
                      : _
                      ? _.test(e.target.value) || 0 === e.target.value.length
                        ? O(e.target.value)
                        : S && S()
                      : O(e.target.value);
                  },
                }),
                "default" === L &&
                  !y &&
                  (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("img", {
                      src: i,
                      className: "".concat("default" === L ? "mr-[12px]" : ""),
                    }),
                  }),
                "filled" === L &&
                  !w &&
                  !g &&
                  (0, r.jsx)(r.Fragment, {
                    children:
                      E && 0 !== E.length
                        ? (0, r.jsx)(l.Z, {
                            text: "Search",
                            type: {
                              class: "primary",
                              icon: !0,
                              hasColoredBg: !1,
                            },
                            size: "small",
                            initialState: { state: "default" },
                            iconSrc: s,
                            className: "h-[50px] sm:px-6 sm:py-4",
                            reverseIconText: !0,
                            onClick: function () {
                              z(!0), p(t, Function) && t(E);
                            },
                          })
                        : (0, r.jsx)(r.Fragment, {
                            children: Z
                              ? (0, r.jsx)(r.Fragment, {
                                  children: (0, r.jsx)(l.Z, {
                                    text: "Search",
                                    type: {
                                      class: "primary",
                                      icon: !0,
                                      hasColoredBg: !1,
                                    },
                                    size: "small",
                                    initialState: { state: "default" },
                                    iconSrc: s,
                                    className: "h-[50px] sm:px-6 sm:py-4",
                                    reverseIconText: !0,
                                    onClick: function () {
                                      z(!1), p(t, Function) && t(E);
                                    },
                                  }),
                                })
                              : (0, r.jsx)("img", {
                                  src: i,
                                  className: "mr-[12px]",
                                }),
                          }),
                  }),
                "filled" === L &&
                  !w &&
                  g &&
                  (0, r.jsx)(r.Fragment, {
                    children:
                      E && 0 !== E.length
                        ? (0, r.jsx)("div", {
                            onClick: function () {
                              z(!0), p(t, Function) && t(E);
                            },
                          })
                        : (0, r.jsx)(r.Fragment, {
                            children: Z
                              ? (0, r.jsx)(r.Fragment, {
                                  children: (0, r.jsx)("div", {
                                    className:
                                      "flex items-center justify-center flex-none relative w-[50px] h-[50px] bg-primary-blue cursor-pointer rounded-full transition-colors ease-in-out duration-500 hover:bg-primary-dark-blue",
                                    onClick: function () {
                                      z(!1), p(t, Function) && t(E);
                                    },
                                    children: (0, r.jsx)("img", {
                                      src: s,
                                      className: "w-[24px] h-[24px]",
                                    }),
                                  }),
                                })
                              : (0, r.jsx)("img", {
                                  src: i,
                                  className: "mr-[12px]",
                                }),
                          }),
                  }),
                "active" === L &&
                  !g &&
                  !w &&
                  (0, r.jsx)(l.Z, {
                    text: "Clear",
                    type: { class: "primary", icon: !1, hasColoredBg: !1 },
                    size: "small",
                    initialState: { state: "default" },
                    className:
                      "h-[50px] bg-primary-gray text-primary-white sm:px-8 sm:py-4",
                    onClick: function () {
                      F(), m && m();
                    },
                  }),
                "active" === L &&
                  g &&
                  !w &&
                  (0, r.jsx)("div", {
                    className:
                      "flex items-center justify-center flex-none relative w-[50px] h-[50px] bg-primary-gray cursor-pointer rounded-full transition-colors ease-in-out duration-500 hover:bg-primary-dark-blue",
                    onClick: function () {
                      F(), m && m();
                    },
                    children: (0, r.jsx)("img", {
                      src: o,
                      className: "w-[24px] h-[24px]",
                    }),
                  }),
              ],
            }),
          })
        );
      };
      m.defaultProps = { refClear: { current: {} } };
      var f = m;
    },
    36180: function (e, t, n) {
      "use strict";
      var r = n(8014),
        a = n(8138),
        i = n(62044);
      t.Z = function () {
        var e = (0, i.Z)("common").t;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)("footer", {
            className:
              "flex flex-col w-full h-[auto] px-[24px] bg-primary-blue justify-between items-center text-primary-white text-xs font-semibold sm:flex-row sm:h-[64px] ",
            children: [
              (0, r.jsx)("div", {
                className: "mt-[20px] sm:mt-[0px]",
                children: (0, r.jsx)("span", {
                  children: "Salad Labs Inc. \xa9 2022",
                }),
              }),
              (0, r.jsxs)("div", {
                className: "my-[20px] sm:my-[0px]",
                children: [
                  (0, r.jsx)("span", {
                    className: "cursor-pointer",
                    children: (0, r.jsx)(a.Z, {
                      url: "#",
                      text: e("privacyPolicyLabel"),
                      isBlue: !1,
                    }),
                  }),
                  (0, r.jsx)("span", {
                    className: "px-[16px] text-[16px] text-primary-yellow",
                    children: "\u2022",
                  }),
                  (0, r.jsx)("span", {
                    className: "cursor-pointer",
                    children: (0, r.jsx)(a.Z, {
                      url: "#",
                      text: e("auditReportLabel"),
                      isBlue: !1,
                      isTargetBlank: !0,
                    }),
                  }),
                  (0, r.jsx)("span", {
                    className: "px-[16px] text-[16px] text-primary-yellow",
                    children: "\u2022",
                  }),
                  (0, r.jsx)("span", {
                    className: "cursor-pointer",
                    children: (0, r.jsx)(a.Z, {
                      url: "#",
                      text: e("termsOfServiceLabel"),
                      isBlue: !1,
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    62305: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return tt;
        },
      });
      var r = n(8014),
        a = n(41708),
        i = "/_next/static/media/default.ecd133d1.svg",
        s = "/_next/static/media/hover.a62ce3b8.svg",
        o = n(15199),
        l = n(39963),
        c = n(68714),
        u = n(15654),
        d = n(8138),
        p = n(3621),
        m = n(56168),
        f = n(25025),
        x = n(97968),
        h = n(13713),
        y = n(42662),
        v = n(62044),
        g = "/_next/static/media/wallet.64a7740f.svg",
        b = n(75657),
        w = n(75332),
        j = n(63135),
        N = n(1795),
        k = n.n(N),
        _ = ["HOME", "TRADING CENTER", "MORE"],
        S = function (e) {
          var t = e.openBalanceModal,
            n = e.openAccountModal,
            N = e.openMoonPayModal,
            S = (e.closeModals, (0, v.Z)("common").t),
            T = (0, m.useState)(""),
            C = T[0],
            M = T[1],
            L = (0, m.useRef)(null),
            I = (0, m.useRef)(null),
            A = (0, m.useState)(_[0]),
            E = A[0],
            O = A[1],
            D = (0, m.useState)(""),
            Z = D[0],
            z = D[1],
            P = (0, m.useState)(!1),
            F = P[0],
            B = P[1],
            R = (0, m.useRef)(null),
            U = (0, x.T)(),
            H = (0, x.C)(function (e) {
              return e;
            }).waccount,
            V = H.account,
            Y = H.username,
            W = H.isNFT,
            G = H.isConnected,
            q = H.avatarUrl,
            K = function (e) {
              M(0 != e ? "transition-all delay-500 rounded-b-[40px]" : ""),
                O(_[e]);
            },
            Q = (0, w.useRouter)();
          return (
            (0, m.useEffect)(
              function () {
                var e, t;
                if (E !== _[0])
                  return (
                    E === _[1]
                      ? (t = L.current)
                      : E === _[2] && (t = I.current),
                    (((Z === _[1] && E === _[2]) ||
                      (Z === _[2] && E === _[1])) &&
                      F) ||
                      ((e = t.animate(
                        [
                          { transform: "translateY(-100%)" },
                          { transform: "translateY(88px)" },
                        ],
                        { duration: 500, fill: "forwards" }
                      )).onfinish = function () {
                        B(!0);
                      }),
                    z(E),
                    function () {
                      e && e.cancel();
                    }
                  );
                B(!1);
              },
              [E]
            ),
            (0, r.jsx)(r.Fragment, {
              children: (0, r.jsxs)("header", {
                ref: R,
                className:
                  "hidden bg-primary-white md:block sticky top-0 w-full z-[9999]",
                onMouseLeave: function () {
                  K(0);
                },
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "flex bg-primary-blue relative z-10 px-[24px] h-[88px] justify-between items-center ".concat(
                        C
                      ),
                    children: [
                      (0, r.jsx)("div", {
                        children: (0, r.jsx)(b.default, {
                          href: "/",
                          children: (0, r.jsx)("img", {
                            src: a.Z.src,
                            className: "w-[192px] cursor-pointer",
                          }),
                        }),
                      }),
                      (0, r.jsx)("nav", {
                        className: "flex h-[100%]",
                        children: (0, r.jsxs)("ul", {
                          className:
                            "flex h-[100%] text-primary-white font-semibold hover:cursor-pointer",
                          children: [
                            (0, r.jsxs)("li", {
                              className:
                                "inline flex h-[100%] items-center relative",
                              onMouseEnter: function () {
                                K(0);
                              },
                              children: [
                                "/" === Q.pathname &&
                                  (0, r.jsx)("div", {
                                    className:
                                      "absolute top-[0px] w-[72px] h-[8px] bg-primary-yellow rounded-b-[100px] ".concat(
                                        k().menuOutlineHome
                                      ),
                                  }),
                                (0, r.jsx)("span", {
                                  className:
                                    "flex h-[100%] items-center hover:text-primary-yellow ".concat(
                                      k().menuFontSmall
                                    ),
                                  children: (0, r.jsx)(b.default, {
                                    href: "/",
                                    children: S("homeLabel"),
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsxs)("li", {
                              className:
                                "inline flex h-[100%] items-center md:mx-[28px] lg:mx-[48px] relative",
                              onMouseEnter: function () {
                                K(1);
                              },
                              children: [
                                ("/mytrades" === Q.pathname ||
                                  "/globaldeals" === Q.pathname ||
                                  "/how-to-trade" === Q.pathname ||
                                  "/tradesquads" === Q.pathname) &&
                                  (0, r.jsx)("div", {
                                    className:
                                      "absolute top-[0px] w-[72px] h-[8px] bg-primary-yellow rounded-b-[100px] ".concat(
                                        k().menuOutlineTradingCenter
                                      ),
                                  }),
                                (0, r.jsx)("span", {
                                  children: (0, r.jsxs)("span", {
                                    className:
                                      "flex h-[100%] items-center hover:text-primary-yellow\n                      "
                                        .concat(
                                          E == _[1]
                                            ? "text-primary-yellow"
                                            : "text-primary-white",
                                          " "
                                        )
                                        .concat(k().menuFontSmall),
                                    children: [
                                      S("tradingCenterLabel"),
                                      E != _[1] &&
                                        (0, r.jsx)("svg", {
                                          width: "8.66",
                                          height: "5",
                                          viewBox: "0 0 25 20",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          className: "ml-[4px]",
                                          children: (0, r.jsx)("path", {
                                            d: "M12.6699 19.8564L0.669922 6L24.6699 6L12.6699 19.8564Z",
                                            fill: "white",
                                          }),
                                        }),
                                      E == _[1] &&
                                        (0, r.jsx)("svg", {
                                          width: "8.66",
                                          height: "5",
                                          viewBox: "0 0 25 20",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          className: "ml-[4px]",
                                          children: (0, r.jsx)("path", {
                                            d: "M12.6699 6L24.6699 19.8564H0.669922L12.6699 6Z",
                                            fill: "white",
                                          }),
                                        }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsxs)("li", {
                              className:
                                "inline flex h-[100%] items-center relative",
                              onMouseEnter: function () {
                                K(2);
                              },
                              children: [
                                ("/about" === Q.pathname ||
                                  "/faq" === Q.pathname) &&
                                  (0, r.jsx)("div", {
                                    className:
                                      "absolute top-[0px] w-[72px] h-[8px] bg-primary-yellow rounded-b-[100px] ".concat(
                                        k().menuOutlineMore
                                      ),
                                  }),
                                (0, r.jsx)("span", {
                                  children: (0, r.jsxs)("span", {
                                    className:
                                      "flex h-[100%] items-center hover:text-primary-yellow\n                      "
                                        .concat(
                                          E == _[2]
                                            ? "text-primary-yellow"
                                            : "text-primary-white",
                                          " "
                                        )
                                        .concat(k().menuFontSmall),
                                    children: [
                                      S("moreLabel"),
                                      E != _[2] &&
                                        (0, r.jsx)("svg", {
                                          width: "8.66",
                                          height: "5",
                                          viewBox: "0 0 25 20",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          className: "ml-[4px]",
                                          children: (0, r.jsx)("path", {
                                            d: "M12.6699 19.8564L0.669922 6L24.6699 6L12.6699 19.8564Z",
                                            fill: "white",
                                          }),
                                        }),
                                      E == _[2] &&
                                        (0, r.jsx)("svg", {
                                          width: "8.66",
                                          height: "5",
                                          viewBox: "0 0 25 20",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          className: "ml-[4px]",
                                          children: (0, r.jsx)("path", {
                                            d: "M12.6699 6L24.6699 19.8564H0.669922L12.6699 6Z",
                                            fill: "white",
                                          }),
                                        }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsx)("div", {
                        children: G
                          ? (0, r.jsxs)("div", {
                              className: "flex items-center gap-3 max-h-[40px]",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "px-2 py-1 border border-[2px] rounded-full cursor-pointer hover:border-primary-yellow",
                                  onClick: function () {
                                    return n();
                                  },
                                  children: (0, r.jsx)(y.Z, {
                                    address: V,
                                    username: Y,
                                    displayInfo: !0,
                                    displayInfoClassName:
                                      "text-xs font-semibold text-primary-yellow",
                                    addressInfoClassName:
                                      "rubik text-xxs font-light text-primary-white",
                                    usernameNotSetClassName:
                                      "text-primary-yellow",
                                    src:
                                      null !== q && void 0 !== q ? q : void 0,
                                    isNFT: W,
                                    className: "mr-5",
                                    sizesClassNames: "w-[32px] h-[32px]",
                                    jazziconSize: {
                                      defaultSize: 32,
                                      breakpoints: [],
                                      sizes: [],
                                    },
                                    avatarCustomColorAddress: "#fff",
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "w-[40px] h-[40px] flex items-center justify-center bg-white hover:bg-primary-yellow hover:cursor-pointer rounded-full",
                                  onClick: function () {
                                    t();
                                  },
                                  children: (0, r.jsx)("img", { src: g }),
                                }),
                              ],
                            })
                          : (0, r.jsxs)("div", {
                              className: "flex justify-between",
                              children: [
                                (0, r.jsx)(p.Z, {
                                  text: S("buyCryptoLabel"),
                                  type: {
                                    class: "primary",
                                    icon: !1,
                                    hasColoredBg: !0,
                                  },
                                  initialState: { state: "default" },
                                  size: "small",
                                  className: "py-3 mr-[10px]",
                                  onClick: function () {
                                    N();
                                  },
                                }),
                                (0, r.jsx)(p.Z, {
                                  text: S("connectWalletLabel"),
                                  type: {
                                    class: "primary",
                                    icon: !1,
                                    hasColoredBg: !0,
                                  },
                                  initialState: { state: "default" },
                                  size: "small",
                                  className: "py-3",
                                  onClick: function () {
                                    U((0, h.$e)(!0)), U((0, j.KE)(!0));
                                  },
                                }),
                              ],
                            }),
                      }),
                    ],
                  }),
                  E == _[1] &&
                    (0, r.jsx)("div", {
                      className:
                        "absolute flex inset-0 h-[120px] -translate-y-[100%] bg-primary-white items-center justify-center cursor-default shadow-[0px_4px_5px_-3px_rgba(0,0,0,0.12)] ".concat(
                          F ? "translate-y-[88px]" : ""
                        ),
                      ref: L,
                      children: (0, r.jsx)("nav", {
                        children: (0, r.jsxs)("ul", {
                          children: [
                            (0, r.jsx)("li", {
                              className: "inline",
                              children: (0, r.jsx)(d.Z, {
                                text: S("yourHubTradeLabel"),
                                url: "/mytrades.html",
                              }),
                            }),
                            (0, r.jsx)("li", {
                              className: "inline md:mx-[28px] lg:mx-[48px]",
                              children: (0, r.jsx)(d.Z, {
                                text: S("globalDealsLabel"),
                                url: "/globaldeals.html",
                              }),
                            }),
                            (0, r.jsx)("li", {
                              className: "inline md:mr-[28px] lg:mr-[48px]",
                              children: (0, r.jsx)(d.Z, {
                                text: S("howToTradeLabel"),
                                url: "./how-to-trade.html",
                              }),
                            }),
                            (0, r.jsx)("li", {
                              className: "inline",
                              children: (0, r.jsx)(d.Z, {
                                text: S("tradeSquadLabel"),
                                url: "./tradesquads.html",
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  E == _[2] &&
                    (0, r.jsx)("div", {
                      className:
                        "absolute flex inset-0 h-[120px] -translate-y-[100%] bg-primary-white items-center justify-center cursor-default shadow shadow-dark-shadow ".concat(
                          F ? "translate-y-[88px]" : ""
                        ),
                      ref: I,
                      children: (0, r.jsx)("nav", {
                        children: (0, r.jsxs)("ul", {
                          children: [
                            (0, r.jsx)("li", {
                              className: "inline md:mr-[28px] lg:mr-[48px]",
                              children: (0, r.jsx)(d.Z, {
                                text: S("aboutUsLabel"),
                                url: "./about.html",
                              }),
                            }),
                            (0, r.jsx)("li", {
                              className: "inline md:mr-[28px] lg:mr-[48px]",
                              children: (0, r.jsx)("a", {
                                // target: "_blank",
                                href: "#",
                                className: "".concat(
                                  k().linkPrimary,
                                  " font-semibold text-primary-blue cursor-pointer"
                                ),
                                children: S("SDK"),
                              }),
                            }),
                            (0, r.jsx)("li", {
                              className: "inline md:mr-[28px] lg:mr-[48px]",
                              children: (0, r.jsx)(d.Z, {
                                text: S("FAQ"),
                                url: "#",
                              }),
                            }),
                            (0, r.jsxs)("li", {
                              className:
                                "inline font-semibold text-primary-blue",
                              children: [
                                (0, r.jsxs)("span", {
                                  children: [S("connectWithUsLabel"), ":"],
                                }),
                                (0, r.jsx)(f.Z, {
                                  className: "inline cursor-pointer ml-[24px]",
                                  defaultPath: i,
                                  hoverPath: s,
                                  link: "#",
                                  width: 40,
                                  height: 40,
                                }),
                                (0, r.jsx)(f.Z, {
                                  className:
                                    "inline cursor-pointer md:ml-[4px] lg:ml-[8px]",
                                  defaultPath: o.Z.src,
                                  hoverPath: l.Z.src,
                                  link: "#",
                                  width: 40,
                                  height: 40,
                                }),
                                (0, r.jsx)(f.Z, {
                                  className:
                                    "inline cursor-pointer md:ml-[4px] lg:ml-[8px]",
                                  defaultPath: c.Z.src,
                                  hoverPath: u.Z.src,
                                  link: "#",
                                  width: 40,
                                  height: 40,
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
        },
        T = n(77653),
        C = n.n(T),
        M = ["HOME", "TRADING CENTER", "MORE"],
        L = function (e) {
          var t = e.openBalanceModal,
            n = e.openModals,
            g = e.openMoonPayModal,
            w = e.closeModals,
            N = e.onOpen,
            k = e.onClose,
            _ = (0, v.Z)("common").t,
            S = (0, m.useState)(""),
            T = S[0],
            L = S[1],
            I = (0, m.useRef)(null),
            A = (0, m.useState)(!1),
            E = A[0],
            O = A[1],
            D = (0, m.useState)(M[0]),
            Z = D[0],
            z = D[1],
            P = (0, m.useState)(0),
            F = P[0],
            B = P[1],
            R = (0, m.useState)(!1),
            U = R[0],
            H = R[1],
            V = (0, m.useState)(!1),
            Y = (V[0], V[1]),
            W = (0, x.T)(),
            G = (0, x.C)(function (e) {
              return e;
            }),
            q = G.waccount,
            K = G.headermobile,
            Q = q.account,
            X = q.avatarUrl,
            J = q.isConnected,
            $ = K.isWalletModalOpen,
            ee = function () {
              L(E ? "" : "transition-all delay-500 rounded-b-[32px]"), O(!E);
            },
            te = function (e) {
              z(M[e]);
            };
          return (
            (0, m.useEffect)(
              function () {
                var e = function () {
                  window.innerHeight > window.innerWidth
                    ? B(window.innerHeight)
                    : B(window.innerWidth);
                };
                return (
                  e(),
                  window.addEventListener("resize", e),
                  function () {
                    window.removeEventListener("resize", e);
                  }
                );
              },
              [F]
            ),
            (0, m.useEffect)(
              function () {
                E
                  ? ((I.current.animate(
                      [
                        { transform: "translateY(-100%)" },
                        { transform: "translateY(0%)" },
                      ],
                      { duration: 500, fill: "forwards" }
                    ).onfinish = function () {
                      H(!0);
                    }),
                    N && N(Y))
                  : k && k(Y);
              },
              [E]
            ),
            (0, r.jsx)(r.Fragment, {
              children: (0, r.jsxs)("header", {
                className:
                  "block bg-primary-white sticky select-none top-0 w-full z-[9999] md:hidden",
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "flex relative z-10 justify-between items-center bg-primary-blue h-[72px] px-[16px] ".concat(
                        $ ? "" : T
                      ),
                    children: [
                      (0, r.jsx)(b.default, {
                        href: "/",
                        children: (0, r.jsx)("img", {
                          src: a.Z.src,
                          className: "w-[170px] h-[40px] cursor-pointer",
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex items-center justify-center gap-2",
                        children: [
                          J &&
                            !n &&
                            !E &&
                            (0, r.jsx)("div", {
                              className: "w-[40px] h-[40px] cursor-pointer",
                              onClick: function () {
                                return t();
                              },
                              children: (0, r.jsx)(y.Z, {
                                address: Q,
                                src: X,
                                sizesClassNames: "w-[40px] h-[40px]",
                                jazziconSize: {
                                  defaultSize: 40,
                                  breakpoints: [],
                                  sizes: [],
                                },
                              }),
                            }),
                          !E &&
                            !n &&
                            (0, r.jsxs)("svg", {
                              className: "cursor-pointer",
                              onClick: function () {
                                return ee();
                              },
                              width: "40",
                              height: "40",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: [
                                (0, r.jsx)("path", {
                                  d: "M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z",
                                  fill: "white",
                                }),
                                (0, r.jsxs)("g", {
                                  clipPath: "url(#clip0_357_110)",
                                  children: [
                                    (0, r.jsx)("path", {
                                      d: "M7.79993 9H16.1999V10.05H7.79993V9Z",
                                      fill: "#2D00F7",
                                    }),
                                    (0, r.jsx)("path", {
                                      d: "M7.79993 11.4502H16.1999V12.5002H7.79993V11.4502Z",
                                      fill: "#2D00F7",
                                    }),
                                    (0, r.jsx)("path", {
                                      d: "M16.1999 13.8998H7.79993V14.9498H16.1999V13.8998Z",
                                      fill: "#2D00F7",
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("path", {
                                  fillRule: "evenodd",
                                  clipRule: "evenodd",
                                  d: "M12 23.4C18.296 23.4 23.4 18.296 23.4 12C23.4 5.70395 18.296 0.6 12 0.6C5.70395 0.6 0.6 5.70395 0.6 12C0.6 18.296 5.70395 23.4 12 23.4ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z",
                                  fill: "#2D00F7",
                                }),
                                (0, r.jsx)("defs", {
                                  children: (0, r.jsx)("clipPath", {
                                    id: "clip0_357_110",
                                    children: (0, r.jsx)("rect", {
                                      width: "9.6",
                                      height: "9.6",
                                      fill: "white",
                                      transform: "translate(7.19995 7.20001)",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          (E || n) &&
                            (0, r.jsxs)("svg", {
                              className: "cursor-pointer",
                              onClick: function () {
                                n ? w() : ee();
                              },
                              width: "40",
                              height: "40",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: [
                                (0, r.jsx)("path", {
                                  d: "M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z",
                                  fill: "white",
                                }),
                                (0, r.jsx)("g", {
                                  clipPath: "url(#clip0_360_99)",
                                  children: (0, r.jsx)("path", {
                                    d: "M12.732 11.9897L16.1793 8.54245L15.4368 7.79999L11.9896 11.2472L8.54252 7.80016L7.80006 8.54262L11.2471 11.9897L7.80005 15.4367L8.54251 16.1792L11.9896 12.7321L15.4368 16.1794L16.1793 15.4369L12.732 11.9897Z",
                                    fill: "#2D00F7",
                                  }),
                                }),
                                (0, r.jsx)("path", {
                                  fillRule: "evenodd",
                                  clipRule: "evenodd",
                                  d: "M12 23.4C18.296 23.4 23.4 18.296 23.4 12C23.4 5.70395 18.296 0.6 12 0.6C5.70395 0.6 0.6 5.70395 0.6 12C0.6 18.296 5.70395 23.4 12 23.4ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z",
                                  fill: "#2D00F7",
                                }),
                                (0, r.jsx)("defs", {
                                  children: (0, r.jsx)("clipPath", {
                                    id: "clip0_360_99",
                                    children: (0, r.jsx)("rect", {
                                      width: "9.6",
                                      height: "9.6",
                                      fill: "white",
                                      transform: "translate(7.19995 7.20001)",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  E &&
                    (0, r.jsx)("div", {
                      className:
                        "fixed z-0 w-full px-[28px] bg-primary-white text-primary-blue font-semibold cursor-pointer h-full overflow-y-scroll ".concat(
                          U ? "top-[72px]" : ""
                        ),
                      ref: I,
                      children: (0, r.jsxs)("div", {
                        className: "flex flex-col relative",
                        style: { minHeight: "".concat(F, "px") },
                        children: [
                          (0, r.jsx)("span", {
                            className:
                              "pt-[44px] pb-[44px] hover:text-primary-dark-blue",
                            onMouseEnter: function () {
                              te(0);
                            },
                            children: _("homeLabel"),
                          }),
                          (0, r.jsxs)("span", {
                            className:
                              "pb-[44px] hover:text-primary-dark-blue " +
                              (Z == M[1]
                                ? "text-primary-dark-blue"
                                : "text-primary-blue"),
                            onMouseEnter: function () {
                              te(1);
                            },
                            children: [
                              _("tradingCenterLabel"),
                              Z != M[1] &&
                                (0, r.jsx)("svg", {
                                  width: "8.66",
                                  height: "5",
                                  viewBox: "0 0 25 20",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "inline ml-[20px]",
                                  children: (0, r.jsx)("path", {
                                    d: "M12.6699 19.8564L0.669922 6L24.6699 6L12.6699 19.8564Z",
                                    fill: "#2D00F7",
                                  }),
                                }),
                              Z == M[1] &&
                                (0, r.jsx)("svg", {
                                  width: "8.66",
                                  height: "5",
                                  viewBox: "0 0 25 20",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "inline ml-[20px]",
                                  children: (0, r.jsx)("path", {
                                    d: "M12.6699 6L24.6699 19.8564H0.669922L12.6699 6Z",
                                    fill: "#2D00F7",
                                  }),
                                }),
                              Z == M[1] &&
                                (0, r.jsx)("div", {
                                  children: (0, r.jsx)("nav", {
                                    children: (0, r.jsxs)("ul", {
                                      children: [
                                        (0, r.jsx)("li", {
                                          className: "pl-[12px] pt-[16px]",
                                          children: (0, r.jsx)(d.Z, {
                                            text: _("yourHubTradeLabel"),
                                            url: "/mytrades.html",
                                          }),
                                        }),
                                        (0, r.jsx)("li", {
                                          className: "pl-[12px] pt-[16px]",
                                          children: (0, r.jsx)(d.Z, {
                                            text: _("globalDealsLabel"),
                                            url: "/globaldeals.html",
                                          }),
                                        }),
                                        (0, r.jsx)("li", {
                                          className: "pl-[12px] pt-[16px]",
                                          children: (0, r.jsx)(d.Z, {
                                            text: _("howToTradeLabel"),
                                            url: "/how-to-trade.html",
                                          }),
                                        }),
                                        (0, r.jsx)("li", {
                                          className: "pl-[12px] pt-[16px]",
                                          children: (0, r.jsx)(d.Z, {
                                            text: _("tradeSquadLabel"),
                                            url: "/tradesquads.html",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                            ],
                          }),
                          (0, r.jsxs)("span", {
                            className:
                              "pb-[44px] hover:text-primary-dark-blue " +
                              (Z == M[2]
                                ? "text-primary-dark-blue"
                                : "text-primary-blue"),
                            onMouseEnter: function () {
                              te(2);
                            },
                            children: [
                              "More",
                              Z != M[2] &&
                                (0, r.jsx)("svg", {
                                  width: "8.66",
                                  height: "5",
                                  viewBox: "0 0 25 20",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "inline ml-[20px]",
                                  children: (0, r.jsx)("path", {
                                    d: "M12.6699 19.8564L0.669922 6L24.6699 6L12.6699 19.8564Z",
                                    fill: "#2D00F7",
                                  }),
                                }),
                              Z == M[2] &&
                                (0, r.jsx)("svg", {
                                  width: "8.66",
                                  height: "5",
                                  viewBox: "0 0 25 20",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "inline ml-[20px]",
                                  children: (0, r.jsx)("path", {
                                    d: "M12.6699 6L24.6699 19.8564H0.669922L12.6699 6Z",
                                    fill: "#2D00F7",
                                  }),
                                }),
                              Z == M[2] &&
                                (0, r.jsx)("div", {
                                  children: (0, r.jsx)("nav", {
                                    children: (0, r.jsxs)("ul", {
                                      children: [
                                        (0, r.jsx)("li", {
                                          className: "pl-[12px] pt-[16px]",
                                          children: (0, r.jsx)(d.Z, {
                                            text: _("aboutUsLabel"),
                                            url: "#" //"/about",
                                          }),
                                        }),
                                        (0, r.jsx)("li", {
                                          className: "pl-[12px] pt-[16px]",
                                          children: (0, r.jsx)("a", {
                                            // target: "_blank",
                                            href: "#", //"https://github.com/nfttrader-io/sdk-js",
                                            className: "".concat(
                                              C().linkPrimary,
                                              " font-semibold text-primary-blue cursor-pointer"
                                            ),
                                            children: _("SDK"),
                                          }),
                                        }),
                                        (0, r.jsx)("li", {
                                          className: "pl-[12px] pt-[16px]",
                                          children: (0, r.jsx)(d.Z, {
                                            text: _("FAQ"),
                                            url: "#" //"/faq",
                                          }),
                                        }),
                                        (0, r.jsxs)("li", {
                                          className:
                                            "pl-[12px] pt-[16px] font-regular text-primary-blue",
                                          children: [
                                            (0, r.jsxs)("span", {
                                              children: [
                                                _("connectWithUsLabel"),
                                                ":",
                                              ],
                                            }),
                                            (0, r.jsx)(f.Z, {
                                              className:
                                                "inline cursor-pointer ml-[24px]",
                                              defaultPath: i,
                                              hoverPath: s,
                                              link: "#", //"https://discord.gg/q4gK9sqt6r",
                                              width: 40,
                                              height: 40,
                                            }),
                                            (0, r.jsx)(f.Z, {
                                              className:
                                                "inline cursor-pointer md:ml-[4px] lg:ml-[8px]",
                                              defaultPath: o.Z.src,
                                              hoverPath: l.Z.src,
                                              link: "#" ,//"https://twitter.com/NftTrader",
                                              width: 40,
                                              height: 40,
                                            }),
                                            (0, r.jsx)(f.Z, {
                                              className:
                                                "inline cursor-pointer md:ml-[4px] lg:ml-[8px]",
                                              defaultPath: c.Z.src,
                                              hoverPath: u.Z.src,
                                              link: "#" ,//https://nfttrader.medium.com/",
                                              width: 40,
                                              height: 40,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                            ],
                          }),
                          (0, r.jsx)(p.Z, {
                            text: _("buyCryptoLabel"),
                            type: {
                              class: "primary",
                              icon: !1,
                              hasColoredBg: !1,
                            },
                            initialState: { state: "default" },
                            size: "large",
                            className: "py-3 w-full absolute bottom-[160px]",
                            onClick: function () {
                              ee(), g();
                            },
                          }),
                          (0, r.jsx)(p.Z, {
                            text: _("connectWalletLabel"),
                            type: {
                              class: "primary",
                              icon: !1,
                              hasColoredBg: !1,
                            },
                            initialState: { state: "default" },
                            size: "large",
                            className: "py-3 w-full absolute bottom-[100px]",
                            onClick: function () {
                              W((0, h.$e)(!0)), W((0, j.KE)(!0));
                            },
                          }),
                        ],
                      }),
                    }),
                ],
              }),
            })
          );
        },
        I = n(44453),
        A = n.n(I),
        E = "/_next/static/media/retry_wallet.1d9e7746.svg",
        O = "/_next/static/media/retry_wallet_dark_blue.e3e35829.svg",
        D = n(64607),
        Z = n(99022),
        z = n.n(Z),
        P = function (e) {
          var t = e.name,
            n = e.description,
            a = e.iconURL,
            i = e.iconSize,
            s = e.isPending,
            o = void 0 !== s && s,
            l = e.isError,
            c = void 0 !== l && l,
            u = e.isOtherOptionSelected,
            d = void 0 !== u && u,
            p = e.onClick,
            m = e.className,
            f = void 0 === m ? null : m,
            x = (0, v.Z)("common").t;
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)("article", {
              className:
                "flex items-center select-none shadow-sm shadow-nfttrader-black-transparent bg-white rounded-[80px] mb-[16px] h-[68px] px-[32px] md:h-[80px] "
                  .concat(
                    o || c
                      ? ""
                      : "transition-colors duration-500 hover:bg-gray-200 cursor-pointer",
                    " "
                  )
                  .concat(
                    !o && d && "".concat(z().disabled, " cursor-default"),
                    " "
                  )
                  .concat(f),
              onClick: function () {
                c || d || !p || p();
              },
              children: [
                (0, r.jsx)("div", {
                  children: (0, r.jsx)("img", {
                    src: a,
                    style: {
                      width: "".concat(i.width, "px"),
                      height: "".concat(i.height, "px"),
                    },
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: "ml-[24px] flex-1",
                  children: [
                    !o &&
                      !c &&
                      (0, r.jsxs)("div", {
                        className: "flex flex-col items-start",
                        children: [
                          (0, r.jsx)("span", {
                            className:
                              "text-primary-blue text-base font-semibold md:text-lg",
                            children: t,
                          }),
                          (0, r.jsx)("span", {
                            className:
                              "rubik text-primary-blue text-sm font-light",
                            children: n,
                          }),
                        ],
                      }),
                    o &&
                      !c &&
                      (0, r.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                          (0, r.jsxs)("div", {
                            className: "flex flex-col items-start",
                            children: [
                              (0, r.jsx)("span", {
                                className:
                                  "text-primary-blue text-base font-semibold md:text-lg",
                                children: x("initializingLabel"),
                              }),
                              (0, r.jsxs)("span", {
                                className:
                                  "rubik text-primary-blue text-sm font-light",
                                children: [
                                  x("youreTryingInitializeLabel"),
                                  " ",
                                  t,
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsx)(D.Z, {
                            isWhite: !1,
                            className: "w-[32px] h-[32px]",
                          }),
                        ],
                      }),
                    !o &&
                      c &&
                      (0, r.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                          (0, r.jsxs)("div", {
                            className: "flex flex-col items-start",
                            children: [
                              (0, r.jsx)("span", {
                                className:
                                  "text-state-warning text-base font-semibold md:text-lg",
                                children: x("errorLabel"),
                              }),
                              (0, r.jsx)("span", {
                                className:
                                  "rubik text-primary-blue text-sm font-light",
                                children: x("connectionErrorLabel"),
                              }),
                            ],
                          }),
                          (0, r.jsx)("img", {
                            src: E,
                            className:
                              "w-[40px] h-[40px] ml-[46px] cursor-pointer transition-opacity duration-500",
                            onClick: function () {
                              p && p();
                            },
                            onMouseEnter: function (e) {
                              e.target.src = O;
                            },
                            onMouseLeave: function (e) {
                              e.target.src = E;
                            },
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          });
        },
        F = n(31249),
        B = {
          INJECTED: {
            connector: F.Lj,
            name: "Injected",
            description: "Connect your wallet to trade",
            iconURL: "/_next/static/media/injected.ba3aef6e.svg",
            iconSize: { width: 40, height: 40 },
            href: null,
            primary: !0,
          },
          METAMASK: {
            connector: F.Lj,
            name: "MetaMask",
            description: "Connect your wallet to trade",
            iconURL: "/_next/static/media/metamask.54d72e65.svg",
            iconSize: { width: 40, height: 40 },
            href: null,
          },
          WALLET_CONNECT: {
            connector: F.Lw,
            name: "WalletConnect",
            description: "Scan with your mobile wallet",
            iconURL: "/_next/static/media/wallet_connect.dd2e7175.svg",
            iconSize: { width: 40, height: 40 },
            href: null,
            mobile: !0,
          },
          WALLET_LINK: {
            connector: F.H5,
            name: "Coinbase Wallet",
            description: "Connect your wallet to trade",
            iconURL: "/_next/static/media/coinbase_wallet.706d5503.svg",
            iconSize: { width: 40, height: 40 },
            href: null,
          },
          UNSTOPPABLE_DOMAINS: {
            connector: F.FT,
            name: "Unstoppable Domains",
            description: "Login with your domain",
            iconURL: "/_next/static/media/unstoppable_domains.64c2dc20.png",
            iconSize: { width: 40, height: 40 },
            href: null,
          },
        },
        R = n(54633),
        U = n.n(R),
        H = n(27164),
        V = n(83516),
        Y = n(24789),
        W = n(93442),
        G = n(25689),
        q = n(10208),
        K = n(96269),
        Q = n(31672),
        X = n(10327),
        J = n(4632),
        $ = n(47190),
        ee = n(66986),
        te = n(24061),
        ne = n(65588),
        re = n(95479);
      function ae(e, t, n, r, a, i, s) {
        try {
          var o = e[i](s),
            l = o.value;
        } catch (c) {
          return void n(c);
        }
        o.done ? t(l) : Promise.resolve(l).then(r, a);
      }
      function ie(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var i = e.apply(t, n);
            function s(e) {
              ae(i, r, a, s, o, "next", e);
            }
            function o(e) {
              ae(i, r, a, s, o, "throw", e);
            }
            s(void 0);
          });
        };
      }
      function se(e, t) {
        return null != t &&
          "undefined" !== typeof Symbol &&
          t[Symbol.hasInstance]
          ? t[Symbol.hasInstance](e)
          : e instanceof t;
      }
      var oe = function (e, t) {
          var n = {};
          return (
            Object.keys(B).map(function (r) {
              "string" == typeof e && e == r
                ? "undefined" == typeof t ||
                  ("string" == typeof t && "pending" == t)
                  ? (n[r] = { isPending: !0, isError: !1 })
                  : "error" == t && (n[r] = { isPending: !1, isError: !0 })
                : (n[r] = { isPending: !1, isError: !1 });
            }),
            n
          );
        },
        le = function () {
          (0, ne.uM)({
            account: null,
            isConnected: !1,
            currentNetworkId: null,
            currentNetworkName: null,
            nonce: null,
            username: null,
            email: null,
            firstLogin: null,
            createdAt: null,
            updatedAt: null,
            jwtToken: null,
            walletProviderName: null,
            walletProviderIconURL: null,
            avatarUrl: null,
            isNFT: 0,
            isVerified: 0,
            sessionExpired: !1,
          });
        },
        ce = function (e) {
          var t,
            n = e.isOpen,
            a = (0, v.Z)("common").t,
            i = (0, Y.Ge)().activate,
            s = (0, m.useRef)(!1),
            o = (0, m.useState)(0),
            l = o[0],
            c = o[1],
            u = (0, m.useState)(n),
            d = (u[0], u[1]),
            p = (0, m.useState)(!1),
            f = p[0],
            y = p[1],
            g = (0, m.useState)(!1),
            b = g[0],
            w = g[1],
            N = (0, m.useState)(!1),
            k = N[0],
            _ = N[1],
            S = (0, m.useState)({}),
            T = S[0],
            C = S[1],
            M = (0, x.T)(),
            L = (function () {
              var e = ie(
                A().mark(function e(t, n, r, a) {
                  var o;
                  return A().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          se(t, V.zw) && (t.walletConnectProvider = void 0),
                            s.current && _(!0),
                            (o = oe(n, "pending")),
                            s.current && C(o),
                            t &&
                              i(t, void 0, !0)
                                .then(
                                  ie(
                                    A().mark(function e() {
                                      var i, o, l, c;
                                      return A().wrap(
                                        function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  (e.prev = 0),
                                                  (e.next = 4),
                                                  t.getAccount()
                                                );
                                              case 4:
                                                if (
                                                  ((e.t1 = i = e.sent),
                                                  (e.t0 = null === e.t1),
                                                  e.t0)
                                                ) {
                                                  e.next = 8;
                                                  break;
                                                }
                                                e.t0 = void 0 === i;
                                              case 8:
                                                if (!e.t0) {
                                                  e.next = 12;
                                                  break;
                                                }
                                                (e.t2 = void 0), (e.next = 13);
                                                break;
                                              case 12:
                                                e.t2 = i.toLowerCase();
                                              case 13:
                                                return (
                                                  (o = e.t2),
                                                  (e.next = 16),
                                                  new K.Q(window.ethereum)
                                                );
                                              case 16:
                                                return (
                                                  (l = e.sent),
                                                  (e.next = 19),
                                                  l.getNetwork()
                                                );
                                              case 19:
                                                return (
                                                  (c = e.sent),
                                                  (e.next = 22),
                                                  D(n, o, l, c, t, r, a)
                                                );
                                              case 22:
                                                e.next = 27;
                                                break;
                                              case 24:
                                                (e.prev = 24),
                                                  (e.t3 = e.catch(0)),
                                                  s.current && _(!1);
                                              case 27:
                                              case "end":
                                                return e.stop();
                                            }
                                        },
                                        e,
                                        null,
                                        [[0, 24]]
                                      );
                                    })
                                  )
                                )
                                .catch(function (e) {
                                  se(e, Y.Uu)
                                    ? (console.log(e),
                                      s.current && (_(!1), C(oe(n, "error"))),
                                      le())
                                    : ((o = oe(n, "error")), s.current && C(o)),
                                    s.current && _(!1),
                                    le();
                                });
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n, r, a) {
                return e.apply(this, arguments);
              };
            })(),
            I = (function () {
              var e = ie(
                A().mark(function e(n) {
                  var r, a, i, s, o, l, c, u, d, p, m;
                  return A().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              (0, X.VZ)((0, J.f)("nonce"), { address: n })
                            );
                          case 3:
                            (r = e.sent),
                              (a = r[0]),
                              (i = a.nonce),
                              (s = a.username),
                              (o = a.email),
                              (l = a.firstLogin),
                              (c = a.avatarUrl),
                              (u = a.isVerified),
                              (d = a.isNft),
                              (p = a.createdAt),
                              (m = a.updatedAt),
                              M((0, Q.nT)(i)),
                              M((0, Q.b6)(s)),
                              M((0, Q.vV)(o)),
                              M((0, Q.AB)(l)),
                              M((0, Q.nd)(c)),
                              M((0, Q.Ls)(u)),
                              M((0, Q.xg)(d)),
                              M((0, Q.mh)(p)),
                              M((0, Q.tp)(m)),
                              (t = i),
                              (0, ne.qQ)(i),
                              (0, ne.YI)(s),
                              (0, ne.iZ)(o),
                              (0, ne.jO)(l),
                              (0, ne.UI)(c),
                              (0, ne.AP)(u),
                              (0, ne.iG)(d),
                              (0, ne.MX)(p),
                              (0, ne.Mc)(m),
                              (e.next = 30);
                            break;
                          case 26:
                            return (
                              (e.prev = 26),
                              (e.t0 = e.catch(0)),
                              le(),
                              e.abrupt("return", !1)
                            );
                          case 30:
                            return e.abrupt("return", !0);
                          case 31:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 26]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            E = (function () {
              var e = ie(
                A().mark(function e(n) {
                  var r, a;
                  return A().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              (0, X.VZ)((0, J.f)("signup"), { address: n })
                            );
                          case 3:
                            (r = e.sent),
                              (a = r.nonce),
                              M((0, Q.nT)(a)),
                              (0, ne.qQ)(a),
                              (t = a),
                              (e.next = 14);
                            break;
                          case 10:
                            return (
                              (e.prev = 10),
                              (e.t0 = e.catch(0)),
                              le(),
                              e.abrupt("return", !1)
                            );
                          case 14:
                            return e.abrupt("return", !0);
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 10]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            O = (function () {
              var e = ie(
                A().mark(function e(n, r, a, i, s, o) {
                  var l, c, u, d, p, m, f, x, h, y;
                  return A().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((e.prev = 0), !se(a, V.zw))) {
                              e.next = 16;
                              break;
                            }
                            return (
                              (p = G.Dv(
                                q.Y0(
                                  "I am signing my one-time nonce: ".concat(t)
                                )
                              )),
                              (e.next = 8),
                              null === (d = a.walletConnectProvider) ||
                              void 0 === d
                                ? void 0
                                : d.connector.signPersonalMessage([p, n])
                            );
                          case 8:
                            return (l = e.sent), (e.next = 11), a.getProvider();
                          case 11:
                            (m = e.sent),
                              (c = m.chainId),
                              (u = (0, re.qe)(c)),
                              (e.next = 31);
                            break;
                          case 16:
                            if (!se(a, ee.J) && !se(a, te.o)) {
                              e.next = 26;
                              break;
                            }
                            return (e.next = 19), a.getProvider();
                          case 19:
                            return (
                              (f = e.sent),
                              (e.next = 22),
                              f.send("personal_sign", [
                                G.Dv(
                                  q.Y0(
                                    "I am signing my one-time nonce: ".concat(t)
                                  )
                                ),
                                n,
                              ])
                            );
                          case 22:
                            (l = e.sent),
                              se(a, ee.J)
                                ? ((c = W.O$.from(f.chainId).toNumber()),
                                  (u = (0, re.qe)(c)))
                                : ((c = 1), (u = (0, re.qe)(c))),
                              (e.next = 31);
                            break;
                          case 26:
                            return (
                              (e.next = 28),
                              r.send("personal_sign", [
                                G.Dv(
                                  q.Y0(
                                    "I am signing my one-time nonce: ".concat(t)
                                  )
                                ),
                                n,
                              ])
                            );
                          case 28:
                            (l = e.sent), (c = i.chainId), (u = i.name);
                          case 31:
                            return (
                              (e.next = 33),
                              (0, X.VZ)((0, J.f)("signin"), {
                                address: n,
                                signature: l,
                              })
                            );
                          case 33:
                            (x = e.sent),
                              (h = x.firstLogin),
                              (y = x.token),
                              M((0, Q.Yf)(s)),
                              M((0, Q.cT)(o)),
                              M((0, Q.eO)(y)),
                              M((0, Q.AB)(h)),
                              M((0, Q.hv)(n)),
                              M((0, Q.fc)(c)),
                              M((0, Q.DC)(u)),
                              (0, ne.hE)(s),
                              (0, ne.MB)(o),
                              (0, ne.PT)(y),
                              (0, ne.jO)(h),
                              (0, ne.sh)(n),
                              (0, ne.yA)(c),
                              (0, ne.jL)(u),
                              (e.next = 56);
                            break;
                          case 51:
                            return (
                              (e.prev = 51),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0),
                              le(),
                              e.abrupt("return", !1)
                            );
                          case 56:
                            return e.abrupt("return", !0);
                          case 57:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 51]]
                  );
                })
              );
              return function (t, n, r, a, i, s) {
                return e.apply(this, arguments);
              };
            })(),
            D = (function () {
              var e = ie(
                A().mark(function e(t, n, r, a, i, o, l) {
                  return A().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!(0, $.c)(n)) {
                            e.next = 8;
                            break;
                          }
                          return (
                            M(
                              (0, Q.kw)({
                                account: n,
                                isConnected: !0,
                                currentNetworkId: (0, ne.pw)(),
                                currentNetworkName: (0, ne.p7)(),
                                nonce: (0, ne.Nv)(),
                                username: (0, ne.XU)(),
                                email: (0, ne.Xe)(),
                                firstLogin: (0, ne.lN)(),
                                createdAt: (0, ne.wX)(),
                                updatedAt: (0, ne.js)(),
                                jwtToken: (0, ne.SM)(),
                                walletProviderName: (0, ne.Yi)(),
                                walletProviderIconURL: (0, ne.Dw)(),
                                avatarUrl: (0, ne.Ns)(),
                                isVerified: (0, ne.JP)(),
                                isNFT: (0, ne.a8)(),
                                sessionExpired: (0, ne.Ij)(),
                              })
                            ),
                            M((0, Q.M5)(!0)),
                            (0, ne.Cz)(!0),
                            s.current && (_(!1), C(oe()), d(!1)),
                            M((0, h.$e)(!1)),
                            e.abrupt("return")
                          );
                        case 8:
                          return (e.next = 10), I(n);
                        case 10:
                          if (e.sent) {
                            e.next = 18;
                            break;
                          }
                          return (e.next = 14), E(n);
                        case 14:
                          if (e.sent) {
                            e.next = 18;
                            break;
                          }
                          return (
                            s.current && (_(!1), C(oe(t, "error"))),
                            e.abrupt("return")
                          );
                        case 18:
                          return (e.next = 20), O(n, r, i, a, o, l);
                        case 20:
                          if (e.sent) {
                            e.next = 24;
                            break;
                          }
                          return (
                            s.current && (_(!1), C(oe(t, "error"))),
                            e.abrupt("return")
                          );
                        case 24:
                          M((0, Q.M5)(!0)),
                            (0, ne.Cz)(!0),
                            s.current && (_(!1), C(oe()), d(!1)),
                            M((0, h.$e)(!1));
                        case 28:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n, r, a, i, s, o) {
                return e.apply(this, arguments);
              };
            })();
          return (
            (0, m.useEffect)(function () {
              return (
                (s.current = !0),
                function () {
                  s.current = !1;
                }
              );
            }, []),
            (0, m.useEffect)(function () {
              s.current &&
                (window.ethereum && window.ethereum.isMetaMask ? w(!0) : w(!1),
                y(!0),
                C(oe()));
            }, []),
            (0, m.useEffect)(
              function () {
                var e = function () {
                  window.innerWidth < 768 &&
                  window.innerHeight > window.innerWidth &&
                  s.current
                    ? c(window.innerHeight - 72)
                    : window.innerWidth < 768 &&
                      window.innerWidth > window.innerHeight
                    ? s.current && c(window.innerWidth - 72)
                    : window.innerWidth >= 768 && s.current && c("");
                };
                return (
                  e(),
                  window.addEventListener("resize", e),
                  function () {
                    window.removeEventListener("resize", e);
                  }
                );
              },
              [l]
            ),
            (0, r.jsx)(r.Fragment, {
              children:
                f &&
                (0, r.jsx)("div", {
                  className:
                    "bg-primary-blue md:bg-black/30 fixed w-full md:flex md:justify-center md:items-center md:top-0 md:left-0 md:h-full z-[20000]",
                  style: {
                    height: "".concat(
                      "" != l ? "".concat(l, "px") : "".concat(l)
                    ),
                  },
                  children: (0, r.jsxs)("div", {
                    className: "".concat(
                      U().walletModal,
                      " fixed flex flex-col w-full h-auto bg-primary-blue z-[20000] p-3 shadow-nfttrader-black-transparent px-[24px] py-[24px] text-center md:relative md:w-[520px] md:rounded-[16px] md:h-[auto]"
                    ),
                    children: [
                      (0, r.jsxs)("div", {
                        className: "flex flex-col justify-center items-center",
                        children: [
                          (0, r.jsx)("img", {
                            className:
                              "cursor-pointer select-none w-[32px] h-[32px] mb-[16px]",
                            src: H.Z.src,
                            onClick: function () {
                              d(!1), M((0, h.$e)(!1)), M((0, j.KE)(!1));
                            },
                          }),
                          (0, r.jsx)("h3", {
                            className:
                              "text-xl text-center text-white font-semibold",
                            children: a("connectYourWalletTitleLabel"),
                          }),
                        ],
                      }),
                      (0, r.jsx)("section", {
                        className: "mt-[25px]",
                        children: Object.keys(B).map(function (e, t) {
                          var n = B[e];
                          if (n.connector === F.Lj) {
                            if (!window.web3 && !window.ethereum)
                              return "MetaMask" === n.name
                                ? (0, r.jsx)(
                                    P,
                                    {
                                      name: a("Install Metamask"),
                                      description: "",
                                      iconURL: n.iconURL,
                                      iconSize: n.iconSize,
                                      onClick: function () {
                                        window.open(
                                          "https://metamask.io/",
                                          "_blank"
                                        );
                                      },
                                    },
                                    "option-".concat(t)
                                  )
                                : null;
                            if ("MetaMask" === n.name && !b) return null;
                            if ("Injected" === n.name && b) return null;
                          }
                          return (0, r.jsx)(
                            P,
                            {
                              name: n.name,
                              description: n.description,
                              isPending: T[e].isPending,
                              isError: T[e].isError,
                              isOtherOptionSelected: k,
                              iconURL: n.iconURL,
                              iconSize: n.iconSize,
                              onClick: function () {
                                L(n.connector, e, n.name, n.iconURL);
                              },
                            },
                            "option-".concat(t)
                          );
                        }),
                      }),
                    ],
                  }),
                }),
            })
          );
        },
        ue = n(52229),
        de = n(5996),
        pe = n(17781),
        me = n(73468),
        fe = n(33240),
        xe = n.n(fe);
      function he(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function ye(e, t, n, r, a, i, s) {
        try {
          var o = e[i](s),
            l = o.value;
        } catch (c) {
          return void n(c);
        }
        o.done ? t(l) : Promise.resolve(l).then(r, a);
      }
      function ve(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return he(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return he(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return he(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var ge = function (e) {
          var t,
            n,
            a = e.onClose,
            i = e.openMoonPayModal,
            s = e.openAccountModal,
            o = (0, v.Z)("common").t,
            l = (0, m.useRef)(!1),
            c = (0, Y.Ge)().library,
            u = (0, x.T)(),
            f = (0, x.C)(function (e) {
              return e;
            }).waccount,
            h = f.account,
            g = f.currentNetworkId,
            b = f.avatarUrl,
            w = f.username,
            j = f.isConnected,
            N = (0, m.useState)([]),
            k = N[0],
            _ = N[1],
            S = (0, m.useState)(null),
            T = S[0],
            C = S[1],
            M = function () {
              u((0, Q.eO)(null)),
                u((0, Q.nT)(null)),
                u((0, Q.b6)(null)),
                u((0, Q.mh)(null)),
                u((0, Q.tp)(null)),
                u((0, Q.hv)(null)),
                u((0, Q.fc)(null)),
                u((0, Q.DC)(null)),
                u((0, Q.cT)(null)),
                u((0, Q.Yf)(null)),
                u((0, Q.AB)(null)),
                u((0, Q.M5)(!1)),
                (0, ue.k)();
            },
            L = (function () {
              var e,
                t =
                  ((e = A().mark(function e() {
                    var t, n, r, a, i, s, o, u, d, p, m, f, x, y, v, b;
                    return A().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (g) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt("return");
                            case 3:
                              return (
                                (e.next = 5),
                                (0, X.bf)(
                                  (0, J.f)("getAssets", [g, "TKN", 0, 10])
                                )
                              );
                            case 5:
                              (n = e.sent),
                                (r = n.data),
                                (a = ve(
                                  (null === (t = r[0]) || void 0 === t
                                    ? void 0
                                    : t.rows) || []
                                )),
                                (i = []),
                                (s = !0),
                                (o = !1),
                                (u = void 0),
                                (e.prev = 10),
                                (d = a[Symbol.iterator]());
                            case 12:
                              if ((s = (p = d.next()).done)) {
                                e.next = 62;
                                break;
                              }
                              if ("ERC20" !== (m = p.value).type) {
                                e.next = 40;
                                break;
                              }
                              return (
                                (e.prev = 15),
                                (f = new de.CH(m.address, m.abi, c)),
                                (e.t0 = pe),
                                (e.next = 20),
                                f.balanceOf(h)
                              );
                            case 20:
                              return (
                                (e.t1 = e.sent), (e.next = 23), f.decimals()
                              );
                            case 23:
                              return (
                                (e.t2 = e.sent),
                                (x = e.t0.formatUnits.call(e.t0, e.t1, e.t2)),
                                (e.t3 = Number),
                                (e.next = 28),
                                (0, X.bf)(
                                  (0, J.f)("getPairValue", [
                                    "".concat(m.symbol, "-USD"),
                                  ])
                                )
                              );
                            case 28:
                              (e.t4 = e.sent.data[0].amount),
                                (e.t5 = (0, e.t3)(e.t4)),
                                (e.t6 = Number(x)),
                                (y = e.t5 * e.t6),
                                i.push({
                                  imageUrl: m.imageUrl,
                                  token: m.symbol,
                                  amount: x,
                                  change: "".concat(
                                    new Intl.NumberFormat("en-US", {
                                      style: "currency",
                                      currency: "USD",
                                    }).format(y),
                                    " USD"
                                  ),
                                }),
                                (e.next = 38);
                              break;
                            case 35:
                              (e.prev = 35),
                                (e.t7 = e.catch(15)),
                                console.error(e.t7);
                            case 38:
                              e.next = 59;
                              break;
                            case 40:
                              return (
                                (e.prev = 40),
                                (e.t8 = pe),
                                (e.next = 44),
                                c.getBalance(h)
                              );
                            case 44:
                              return (
                                (e.t9 = e.sent),
                                (v = e.t8.formatEther.call(e.t8, e.t9)),
                                (e.t10 = Number),
                                (e.next = 49),
                                (0, X.bf)(
                                  (0, J.f)("getPairValue", [
                                    "".concat(m.symbol, "-USD"),
                                  ])
                                )
                              );
                            case 49:
                              (e.t11 = e.sent.data[0].amount),
                                (e.t12 = (0, e.t10)(e.t11)),
                                (e.t13 = Number(v)),
                                (b = e.t12 * e.t13),
                                i.push({
                                  imageUrl: m.imageUrl,
                                  token: m.symbol,
                                  amount: v,
                                  change: "".concat(
                                    new Intl.NumberFormat("en-US", {
                                      style: "currency",
                                      currency: "USD",
                                    }).format(b),
                                    " USD"
                                  ),
                                }),
                                (e.next = 59);
                              break;
                            case 56:
                              (e.prev = 56),
                                (e.t14 = e.catch(40)),
                                console.error(e.t14);
                            case 59:
                              (s = !0), (e.next = 12);
                              break;
                            case 62:
                              e.next = 68;
                              break;
                            case 64:
                              (e.prev = 64),
                                (e.t15 = e.catch(10)),
                                (o = !0),
                                (u = e.t15);
                            case 68:
                              (e.prev = 68),
                                (e.prev = 69),
                                s || null == d.return || d.return();
                            case 71:
                              if (((e.prev = 71), !o)) {
                                e.next = 74;
                                break;
                              }
                              throw u;
                            case 74:
                              return e.finish(71);
                            case 75:
                              return e.finish(68);
                            case 76:
                              l.current && _(i);
                            case 77:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [
                        [10, 64, 68, 76],
                        [15, 35],
                        [40, 56],
                        [69, , 71, 75],
                      ]
                    );
                  })),
                  function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (r, a) {
                      var i = e.apply(t, n);
                      function s(e) {
                        ye(i, r, a, s, o, "next", e);
                      }
                      function o(e) {
                        ye(i, r, a, s, o, "throw", e);
                      }
                      s(void 0);
                    });
                  });
              return function () {
                return t.apply(this, arguments);
              };
            })();
          return (
            (0, m.useEffect)(function () {
              return (
                (l.current = !0),
                L(),
                function () {
                  l.current = !1;
                }
              );
            }, []),
            (0, m.useEffect)(
              function () {
                j || a();
              },
              [j]
            ),
            (0, m.useEffect)(
              function () {
                null !== T ? g != T && (C(g), a()) : C(g);
              },
              [g]
            ),
            (0, r.jsxs)("div", {
              className: "".concat(
                xe().balanceModal,
                " w-full fixed top-[72px] md:top-[112px] md:right-[24px] flex flex-col justify-start overflow-y-scroll gap-12 bg-primary-blue py-10 px-4 z-50 md:gap-6 md:w-[300px] md:p-6 md:rounded md:shadow-2xl md:shadow-primary-dark-blue md:overflow-y-initial"
              ),
              onClick: function (e) {
                return e.stopPropagation();
              },
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "flex md:hidden items-center justify-start gap-4 w-full p-2 border border-white rounded-full",
                  children: [
                    (0, r.jsx)(y.Z, {
                      address: h,
                      src: b,
                      sizesClassNames: "w-[60px] h-[60px]",
                      jazziconSize: {
                        defaultSize: 60,
                        breakpoints: [],
                        sizes: [],
                      },
                    }),
                    (0, r.jsxs)("div", {
                      className: "flex flex-col items-start justify-center",
                      children: [
                        w &&
                          (0, r.jsxs)("span", {
                            className: "font-semibold text-lg text-white",
                            children: ["@", w],
                          }),
                        !w &&
                          (0, r.jsx)("span", {
                            className:
                              "font-semibold text-lg text-primary-gray",
                            children: o("usernameNotSetLabel"),
                          }),
                        (0, r.jsx)("span", {
                          className: "text-sm text-white cursor-pointer",
                          onClick: function () {
                            a(), s();
                          },
                          children: (0, r.jsx)(d.Z, {
                            text: o("editProfileLabel"),
                            url: "",
                            isBlue: !1,
                            weight: "font-regular",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className:
                    "flex flex-col justify-center items-center md:items-end",
                  children: [
                    (0, r.jsx)("p", {
                      className:
                        "text-base font-semibold text-white md:text-xs",
                      children: o("connectedWalletLabel"),
                    }),
                    (0, r.jsx)("p", {
                      className:
                        "rubik text-base font-light text-white mt-[8px] md:mt-[8px]",
                      children:
                        g && h
                          ? (0, r.jsx)(d.Z, {
                              text: (
                                null ===
                                  (t =
                                    null === h || void 0 === h
                                      ? void 0
                                      : h.match(/^.{12}|.{12}$/g)) ||
                                void 0 === t
                                  ? void 0
                                  : t.join("...")
                              )
                                ? h.match(/^.{12}|.{12}$/g).join("...")
                                : "",
                              url: (0, me.x)(g, h),
                              isTargetBlank: !0,
                              isBlue: !1,
                              weight: "font-light",
                            })
                          : null ===
                              (n =
                                null === h || void 0 === h
                                  ? void 0
                                  : h.match(/^.{12}|.{12}$/g)) || void 0 === n
                          ? void 0
                          : n.join("..."),
                    }),
                  ],
                }),
                (0, r.jsx)("hr", {}),
                (0, r.jsxs)("div", {
                  className:
                    "flex flex-col justify-center items-start md:items-end gap-4",
                  children: [
                    (0, r.jsx)("p", {
                      className:
                        "self-center md:self-end text-base font-semibold text-white md:text-xs",
                      children: o("balanceLabel"),
                    }),
                    k.length
                      ? k.map(function (e, t) {
                          var n,
                            a,
                            i = e.amount,
                            s = e.amount.split(".");
                          return (
                            s[1].length > 2 &&
                              (i = [
                                s[0],
                                null ===
                                  (a =
                                    null === (n = s[1].match(/^.{2}/g)) ||
                                    void 0 === n
                                      ? void 0
                                      : n.concat("...")) || void 0 === a
                                  ? void 0
                                  : a.join(""),
                              ].join(".")),
                            (0, r.jsxs)(
                              "div",
                              {
                                className:
                                  "flex flex-row-reverse md:flex-row items-center justify-center gap-4",
                                children: [
                                  (0, r.jsxs)("div", {
                                    className:
                                      "flex flex-col items-start md:items-end justify-center",
                                    children: [
                                      (0, r.jsxs)("p", {
                                        className:
                                          "flex items-center justify-end gap-2",
                                        children: [
                                          (0, r.jsx)("span", {
                                            className: "".concat(
                                              s[0].length > 10
                                                ? s[0].length > 15
                                                  ? "text-xs"
                                                  : "text-sm"
                                                : "text-lg",
                                              " font-semibold text-white"
                                            ),
                                            title: e.amount,
                                            children: i,
                                          }),
                                          (0, r.jsx)("span", {
                                            className:
                                              "text-base font-semibold text-white",
                                            children: e.token,
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)("p", {
                                        className:
                                          "text-base font-semibold text-primary-gray",
                                        children: e.change,
                                      }),
                                    ],
                                  }),
                                  (0, r.jsx)("img", {
                                    src: e.imageUrl,
                                    className: "w-8 h-8",
                                  }),
                                ],
                              },
                              t
                            )
                          );
                        })
                      : (0, r.jsx)("div", {
                          className: "w-full flex items-center justify-center",
                          children: (0, r.jsx)(D.Z, {
                            className: "w-[30px] h-[30px]",
                          }),
                        }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "flex flex-col justify-center gap-3 mt-auto",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "md:hidden",
                      children: [
                        (0, r.jsx)(p.Z, {
                          text: o("buyCryptoLabel"),
                          type: {
                            class: "primary",
                            icon: !1,
                            hasColoredBg: !0,
                          },
                          initialState: { state: "default" },
                          size: "large",
                          className: "w-full",
                          onClick: function () {
                            a(), i();
                          },
                        }),
                        (0, r.jsx)(p.Z, {
                          text: o("disconnectLabel"),
                          type: {
                            class: "secondary",
                            icon: !1,
                            hasColoredBg: !0,
                          },
                          initialState: { state: "default" },
                          size: "large",
                          className: "w-full mt-[48px]",
                          onClick: function () {
                            a(), M();
                          },
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "hidden md:block",
                      children: [
                        (0, r.jsx)(p.Z, {
                          text: o("buyCryptoLabel"),
                          type: {
                            class: "primary",
                            icon: !1,
                            hasColoredBg: !0,
                          },
                          initialState: { state: "default" },
                          size: "small",
                          className: "w-full",
                          onClick: function () {
                            a(), i();
                          },
                        }),
                        (0, r.jsx)(p.Z, {
                          text: o("disconnectLabel"),
                          type: {
                            class: "secondary",
                            icon: !1,
                            hasColoredBg: !0,
                          },
                          initialState: { state: "default" },
                          size: "small",
                          className: "w-full mt-[48px]",
                          onClick: function () {
                            a(), M();
                          },
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        be = n(27536),
        we = "/_next/static/media/nft-upload.2e41b91f.svg",
        je = n(21631),
        Ne = n.n(je),
        ke = n(43376),
        _e = n(79838);
      function Se(e, t, n, r, a, i, s) {
        try {
          var o = e[i](s),
            l = o.value;
        } catch (c) {
          return void n(c);
        }
        o.done ? t(l) : Promise.resolve(l).then(r, a);
      }
      function Te(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var i = e.apply(t, n);
            function s(e) {
              Se(i, r, a, s, o, "next", e);
            }
            function o(e) {
              Se(i, r, a, s, o, "throw", e);
            }
            s(void 0);
          });
        };
      }
      function Ce(e, t, n) {
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
      function Me(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              Ce(e, t, n[t]);
            });
        }
        return e;
      }
      var Le = function (e) {
          var t = e.onClose,
            n = e.openNFTModal,
            a = (0, v.Z)("common").t,
            i = (0, x.T)(),
            s = (0, x.C)(function (e) {
              return e;
            }).waccount,
            o = s.username,
            l = s.avatarUrl,
            c = s.jwtToken,
            u = s.currentNetworkId,
            d = s.isConnected,
            f = (0, m.useState)([]),
            h = f[0],
            y = f[1],
            g = (0, m.useState)({
              avatarUrl: null !== l && void 0 !== l ? l : void 0,
              username: null !== o && void 0 !== o ? o : void 0,
            }),
            b = g[0],
            w = g[1],
            j = (0, m.useState)(null),
            N = j[0],
            k = j[1],
            _ = (0, m.useState)(null),
            S = _[0],
            T = _[1],
            C = (0, m.useRef)(!1),
            M = null,
            L = (function () {
              var e = Te(
                A().mark(function e() {
                  var n, r, a, s, l, d, p, m, f;
                  return A().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((e.prev = 1), (a = (0, ke.h)(u)))) {
                              e.next = 6;
                              break;
                            }
                            return e.abrupt("return", t());
                          case 6:
                            return (
                              (l = {
                                isNft: 0,
                                avatarUrl:
                                  null !== (s = b.avatarUrl) && void 0 !== s
                                    ? s
                                    : null,
                                network: a,
                              }),
                              (null === (r = b.username) || void 0 === r
                                ? void 0
                                : r.length) &&
                                b.username !== o &&
                                (l.username = b.username),
                              (e.next = 11),
                              (0, X.$Y)((0, J.f)("updateUserData"), l, c)
                            );
                          case 11:
                            e.next = 18;
                            break;
                          case 13:
                            return (
                              (e.prev = 13),
                              (e.t0 = e.catch(1)),
                              console.error(e.t0),
                              t(),
                              e.abrupt("return")
                            );
                          case 18:
                            i((0, Q.xg)(0)),
                              (0, ne.iG)(0),
                              i(
                                (0, Q.nd)(
                                  null !== (d = b.avatarUrl) && void 0 !== d
                                    ? d
                                    : null
                                )
                              ),
                              (0, ne.UI)(
                                null !== (p = b.avatarUrl) && void 0 !== p
                                  ? p
                                  : null
                              ),
                              (null === (n = b.username) || void 0 === n
                                ? void 0
                                : n.length) &&
                                (i(
                                  (0, Q.b6)(
                                    null !== (m = b.username) && void 0 !== m
                                      ? m
                                      : null
                                  )
                                ),
                                (0, ne.YI)(
                                  null !== (f = b.username) && void 0 !== f
                                    ? f
                                    : null
                                )),
                              t();
                          case 26:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 13]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            I = (function () {
              var e = Te(
                A().mark(function e() {
                  var t, n;
                  return A().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            document.body.classList.add("no-scroll"),
                            (e.next = 3),
                            (0, X.bf)((0, J.f)("getAvatar"))
                          );
                        case 3:
                          (t = e.sent),
                            (n = t.data),
                            C.current &&
                              (y(n),
                              w({
                                avatarUrl:
                                  null !== l && void 0 !== l ? l : void 0,
                                username:
                                  null !== o && void 0 !== o ? o : void 0,
                              }));
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            (0, m.useEffect)(function () {
              return (
                (C.current = !0),
                I(),
                function () {
                  document.body.classList.remove("no-scroll"), (C.current = !1);
                }
              );
            }, []),
            (0, m.useEffect)(
              function () {
                d || t();
              },
              [d]
            ),
            (0, m.useEffect)(
              function () {
                null !== S ? u != S && (T(u), t()) : T(u);
              },
              [u]
            ),
            (0, r.jsx)("div", {
              className:
                "flex justify-center items-center fixed top-0 left-0 w-full h-full",
              children: (0, r.jsxs)("div", {
                className: "\n        "
                  .concat(Ne().height, "\n        ")
                  .concat(
                    Ne().accountModal,
                    " \n        relative\n        flex\n        flex-col\n        w-full\n        items-center\n        justify-start\n        gap-10\n        bg-primary-blue\n        py-10\n        px-4\n        overflow-y-scroll\n        md:p-8\n        md:rounded-2xl\n        md:shadow-2xl\n        md:shadow-primary-dark-blue\n        md:w-[520px]"
                  ),
                onClick: function (e) {
                  return e.stopPropagation();
                },
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "flex flex-col items-center justify-center gap-4",
                    children: [
                      (0, r.jsx)("img", {
                        src: H.Z.src,
                        className: "hidden md:block cursor-pointer",
                        onClick: function () {
                          return t();
                        },
                      }),
                      (0, r.jsx)("p", {
                        className: "text-xl font-semibold text-white",
                        children: a("personalizeProfileLabel"),
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "flex flex-col items-center justify-center gap-4 w-full",
                    children: [
                      (0, r.jsx)("p", {
                        className: "text-base font-semibold text-white",
                        children: a("chooseUsernameLabel"),
                      }),
                      (0, r.jsx)(_e.Z, {
                        setFilter: function (e) {
                          return (
                            (t = e),
                            M && clearTimeout(M),
                            w(Me({}, b, { username: void 0 })),
                            k(null),
                            void (
                              0 !== t.length &&
                              (M = setTimeout(
                                Te(
                                  A().mark(function e() {
                                    var n, r;
                                    return A().wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (e.prev = 0),
                                                (e.next = 3),
                                                (0, X.bf)(
                                                  (0, J.f)("verifyUser", [t])
                                                )
                                              );
                                            case 3:
                                              (n = e.sent),
                                                (r = n.data),
                                                k(
                                                  r
                                                    ? {
                                                        message:
                                                          a(
                                                            "usernameTakenLabel"
                                                          ),
                                                      }
                                                    : null
                                                ),
                                                w(
                                                  Me({}, b, {
                                                    username: r ? void 0 : t,
                                                  })
                                                ),
                                                (e.next = 13);
                                              break;
                                            case 9:
                                              (e.prev = 9),
                                                (e.t0 = e.catch(0)),
                                                console.error(e.t0),
                                                k({
                                                  message:
                                                    a("usernameErrorLabel"),
                                                });
                                            case 13:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      null,
                                      [[0, 9]]
                                    );
                                  })
                                ),
                                500
                              ))
                            )
                          );
                          var t;
                        },
                        hideIcon: !0,
                        hideButtons: !0,
                        isErrored: !!N,
                        placeholder: a("username"),
                        className: "w-full bg-white",
                        regex: /^[a-zA-Z0-9.]+$/,
                        regexFailed: function () {
                          w(Me({}, b, { username: void 0 })),
                            k({ message: a("usernameErrorLettersLabel") });
                        },
                      }),
                      N &&
                        (0, r.jsx)("p", {
                          className: "text-sm font-semibold text-state-warning",
                          children: N.message,
                        }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "flex flex-col items-center justify-center gap-4 w-full",
                    children: [
                      (0, r.jsx)("p", {
                        className: "text-base font-semibold text-white",
                        children: a("customizeAvatarLabel"),
                      }),
                      h.length
                        ? (0, r.jsxs)("div", {
                            className:
                              "grid grid-cols-5 place-items-center gap-y-4 w-full flex-wrap",
                            children: [
                              h.map(function (e) {
                                return (0, r.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "relative w-[48px] h-[48px] md:w-[64px] md:h-[64px] bg-primary-yellow rounded-full ".concat(
                                        b.avatarUrl === e.url
                                          ? "border-[3px] border-white"
                                          : "border-0",
                                        " cursor-pointer"
                                      ),
                                    children: [
                                      (0, r.jsx)("img", {
                                        src: e.url,
                                        className: "w-full h-full",
                                        onClick: function () {
                                          w(
                                            Me({}, b, {
                                              avatarUrl:
                                                b.avatarUrl === e.url
                                                  ? void 0
                                                  : e.url,
                                            })
                                          );
                                        },
                                      }),
                                      (0, r.jsx)("span", {
                                        className:
                                          "absolute -bottom-[4px] -right-[4px] md:-bottom-[8px] md:-right-[8px] ".concat(
                                            b.avatarUrl === e.url
                                              ? "flex"
                                              : "hidden",
                                            " items-center justify-center w-[18px] h-[18px] md:w-[24px] md:h-[24px] bg-white rounded-full"
                                          ),
                                        children: (0, r.jsx)("img", {
                                          src: be.Z.src,
                                          className:
                                            "w-[8px] h-[8px] md:w-[14px] md:h-[14px]",
                                        }),
                                      }),
                                    ],
                                  },
                                  e.id
                                );
                              }),
                              u !== re.HL.POLYGON &&
                                u !== re.HL.POLYGON_MUMBAI &&
                                (0, r.jsx)("div", {
                                  className: "".concat(
                                    Ne().nft,
                                    " w-[48px] h-[48px] md:w-[64px] md:h-[64px] bg-white p-2 cursor-pointer"
                                  ),
                                  onClick: function () {
                                    t(), n();
                                  },
                                  children: (0, r.jsx)("img", {
                                    src: we,
                                    className: "w-full h-full",
                                    onDragStart: function (e) {
                                      return e.preventDefault();
                                    },
                                  }),
                                }),
                            ],
                          })
                        : (0, r.jsx)(D.Z, {}),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "self-stretch flex flex-col gap-3 mt-auto",
                    children: [
                      (!b.username && !b.avatarUrl) ||
                      (b.username === o && b.avatarUrl === l) ||
                      N
                        ? (0, r.jsx)(
                            p.Z,
                            {
                              text: a("saveCustomizationLabel"),
                              type: {
                                class: "primary",
                                icon: !1,
                                hasColoredBg: !0,
                              },
                              initialState: { state: "disabled" },
                              size: "large",
                              className: "w-full md:w-auto md:self-end",
                            },
                            "button-1"
                          )
                        : (0, r.jsx)(
                            p.Z,
                            {
                              text: a("saveCustomizationLabel"),
                              type: {
                                class: "primary",
                                icon: !1,
                                hasColoredBg: !0,
                              },
                              initialState: { state: "default" },
                              size: "large",
                              className: "w-full md:w-auto md:self-end",
                              onClick: function (e) {
                                e("loading"), L();
                              },
                            },
                            "button-2"
                          ),
                      (0, r.jsx)(
                        p.Z,
                        {
                          text: a("customizeLaterLabel"),
                          type: {
                            class: "secondary",
                            icon: !1,
                            hasColoredBg: !0,
                          },
                          initialState: { state: "default" },
                          size: "large",
                          className: "block w-full md:hidden",
                          onClick: function () {
                            return t();
                          },
                        },
                        "button-3"
                      ),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        Ie = n(72273),
        Ae = n(29709),
        Ee = n.n(Ae);
      function Oe(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function De(e, t, n, r, a, i, s) {
        try {
          var o = e[i](s),
            l = o.value;
        } catch (c) {
          return void n(c);
        }
        o.done ? t(l) : Promise.resolve(l).then(r, a);
      }
      function Ze(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var i = e.apply(t, n);
            function s(e) {
              De(i, r, a, s, o, "next", e);
            }
            function o(e) {
              De(i, r, a, s, o, "throw", e);
            }
            s(void 0);
          });
        };
      }
      function ze(e, t, n) {
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
      function Pe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              ze(e, t, n[t]);
            });
        }
        return e;
      }
      function Fe(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                i = [],
                s = !0,
                o = !1;
              try {
                for (
                  n = n.call(e);
                  !(s = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  s = !0
                );
              } catch (l) {
                (o = !0), (a = l);
              } finally {
                try {
                  s || null == n.return || n.return();
                } finally {
                  if (o) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          Re(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Be(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Oe(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          Re(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Re(e, t) {
        if (e) {
          if ("string" === typeof e) return Oe(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(n)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Oe(e, t)
              : void 0
          );
        }
      }
      var Ue,
        He = function (e) {
          var t = e.onClose,
            n = e.openAccountModal,
            a = (0, v.Z)("common").t,
            i = (0, x.T)(),
            s = (0, x.C)(function (e) {
              return e;
            }).waccount,
            o = s.account,
            l = s.jwtToken,
            c = s.currentNetworkId,
            u = s.isConnected,
            d = (0, m.useRef)(!1),
            f = (0, m.useState)(null),
            h = f[0],
            y = f[1],
            g = (0, m.useState)(null),
            b = g[0],
            w = g[1],
            j = (0, m.useState)(null),
            N = j[0],
            k = j[1],
            _ = (0, m.useState)(null),
            S = _[0],
            T = _[1],
            C = (0, m.useState)(null),
            M = C[0],
            L = C[1],
            I = (function () {
              var e = Ze(
                A().mark(function e() {
                  var n, r, a, s, o;
                  return A().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (S) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            if ((n = (0, ke.h)(c))) {
                              e.next = 5;
                              break;
                            }
                            return e.abrupt("return", t());
                          case 5:
                            return (
                              (a = {
                                isNft: 1,
                                collectionAddress: S.contractAddress,
                                tokenId: S.tokenId,
                                avatarUrl:
                                  null !==
                                    (r =
                                      null === S || void 0 === S
                                        ? void 0
                                        : S.cachedFileUrl) && void 0 !== r
                                    ? r
                                    : null,
                                network: n,
                              }),
                              (e.prev = 7),
                              (e.next = 10),
                              (0, X.$Y)((0, J.f)("updateUserData"), a, l)
                            );
                          case 10:
                            i((0, Q.xg)(1)),
                              (0, ne.iG)(1),
                              i(
                                (0, Q.nd)(
                                  null !== (s = S.cachedFileUrl) && void 0 !== s
                                    ? s
                                    : null
                                )
                              ),
                              (0, ne.UI)(
                                null !== (o = S.cachedFileUrl) && void 0 !== o
                                  ? o
                                  : null
                              ),
                              (e.next = 21);
                            break;
                          case 18:
                            (e.prev = 18),
                              (e.t0 = e.catch(7)),
                              console.error(e.t0);
                          case 21:
                            return (e.prev = 21), t(), e.finish(21);
                          case 24:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[7, 18, 21, 24]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            E = (function () {
              var e = Ze(
                A().mark(function e(t) {
                  var n, r, a, i;
                  return A().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return t && t("loading"), (e.next = 3), O(N);
                        case 3:
                          (n = e.sent),
                            (r = n.nfts),
                            (a = n.continuation),
                            (i = h ? Be(h).concat(Be(r)) : Be(r)),
                            y(i),
                            w(i),
                            k(a),
                            t && t("default");
                        case 11:
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
            O = (function () {
              var e = Ze(
                A().mark(function e(t) {
                  var n, r, a, i, s, l, u, d, p, m;
                  return A().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((r = { nfts: [], continuation: null }), o)) {
                            e.next = 4;
                            break;
                          }
                          return e.abrupt("return", Pe({}, r));
                        case 4:
                          if (c) {
                            e.next = 6;
                            break;
                          }
                          return e.abrupt("return", Pe({}, r));
                        case 6:
                          if (
                            (a = (0, J.f)("getNftCollectionAssetsByOwnerOS", [
                              c,
                              "0x0000000000000000000000000000000000000000",
                              o,
                              40,
                              null !== t && void 0 !== t ? t : "null",
                            ]))
                          ) {
                            e.next = 9;
                            break;
                          }
                          return e.abrupt("return", Pe({}, r));
                        case 9:
                          return (e.t0 = Fe), (e.next = 12), (0, X.bf)(a);
                        case 12:
                          if (
                            ((e.t3 = n = e.sent), (e.t2 = null === e.t3), e.t2)
                          ) {
                            e.next = 16;
                            break;
                          }
                          e.t2 = void 0 === n;
                        case 16:
                          if (!e.t2) {
                            e.next = 20;
                            break;
                          }
                          (e.t4 = void 0), (e.next = 21);
                          break;
                        case 20:
                          e.t4 = n.data;
                        case 21:
                          if (((e.t1 = e.t4), e.t1)) {
                            e.next = 24;
                            break;
                          }
                          e.t1 = [];
                        case 24:
                          return (
                            (e.t5 = e.t1),
                            (i = (0, e.t0)(e.t5, 1)),
                            (s = i[0]),
                            (u = (l = s || {}).nfts),
                            (d = void 0 === u ? [] : u),
                            (p = l.continuation),
                            (m = void 0 === p ? null : p),
                            e.abrupt("return", { nfts: d, continuation: m })
                          );
                        case 29:
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
            Z = (function () {
              var e = Ze(
                A().mark(function e() {
                  var t, n, r;
                  return A().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              document.body.classList.add("no-scroll"),
                              (e.prev = 1),
                              (e.next = 4),
                              O(null)
                            );
                          case 4:
                            (t = e.sent),
                              (n = t.nfts),
                              (r = t.continuation),
                              d.current && (y(n), w(n), k(r)),
                              (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(1)),
                              console.error(e.t0);
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 10]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            (0, m.useEffect)(function () {
              return (
                (d.current = !0),
                Z(),
                function () {
                  document.body.classList.remove("no-scroll"), (d.current = !1);
                }
              );
            }, []),
            (0, m.useEffect)(
              function () {
                u || t();
              },
              [u]
            ),
            (0, m.useEffect)(
              function () {
                null !== M ? c != M && (L(c), t()) : L(c);
              },
              [c]
            ),
            (0, r.jsxs)("div", {
              className: "".concat(
                Ee().height,
                " fixed top-[72px] md:top-[112px] md:left-1/2 md:-translate-x-1/2 flex flex-col items-center justify-start gap-10 w-full md:w-[520px] bg-white py-10 px-4 md:p-8 md:rounded-2xl md:shadow-2xl md:shadow-primary-dark-blue z-50 overflow-y-auto"
              ),
              onClick: function (e) {
                return e.stopPropagation();
              },
              children: [
                (0, r.jsxs)("div", {
                  className: "flex flex-col items-center justify-center gap-4",
                  children: [
                    (0, r.jsx)("img", {
                      src: Ie.Z.src,
                      className: "hidden md:block cursor-pointer",
                      onClick: function () {
                        t(), n();
                      },
                    }),
                    (0, r.jsx)("p", {
                      className: "text-xl font-semibold text-primary-blue",
                      children: a("Select NFT as Your PFP"),
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className:
                    "flex flex-col items-center justify-center gap-4 w-full",
                  children: (0, r.jsx)(_e.Z, {
                    setFilter: function (e) {
                      return (function (e) {
                        if (!e) return w(h);
                        w(
                          (null === h || void 0 === h
                            ? void 0
                            : h.filter(function (t) {
                                return t.tokenId.startsWith(e);
                              })) || []
                        );
                      })(e);
                    },
                    placeholder: a("searchNFTLabel"),
                    className: "w-full bg-white",
                  }),
                }),
                (0, r.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center gap-4 w-full",
                  children: [
                    (0, r.jsx)("p", {
                      className:
                        "text-base font-semibold text-primary-dark-blue",
                      children: a("yourNFTCollectionLabel"),
                    }),
                    b
                      ? b.length &&
                        b.some(function (e) {
                          return e.cachedFileUrl;
                        })
                        ? (0, r.jsxs)("div", {
                            className:
                              "grid grid-cols-4 place-items-center gap-2 w-full max-h-[278px] md:max-h-[164px] pr-2 overflow-y-auto ".concat(
                                Ee().customScrollbar
                              ),
                            children: [
                              b.map(function (e, t) {
                                return (
                                  e.cachedFileUrl &&
                                  (0, r.jsxs)(
                                    "div",
                                    {
                                      className: "relative ".concat(
                                        (null === S || void 0 === S
                                          ? void 0
                                          : S.contractAddress) ===
                                          e.contractAddress &&
                                          S.tokenId === e.tokenId
                                          ? "border-[3px] border-primary-blue"
                                          : "border-none",
                                        " w-[62px] h-[62px] md:w-[104px] md:h-[104px] rounded-lg cursor-pointer overflow-hidden"
                                      ),
                                      onClick: function () {
                                        return T(
                                          (null === S || void 0 === S
                                            ? void 0
                                            : S.contractAddress) ===
                                            e.contractAddress &&
                                            S.tokenId === e.tokenId
                                            ? null
                                            : e
                                        );
                                      },
                                      children: [
                                        (0, r.jsx)("img", {
                                          src: e.cachedFileUrl,
                                          onError: function (e) {
                                            var t;
                                            return null ===
                                              (t = e.target.parentElement) ||
                                              void 0 === t
                                              ? void 0
                                              : t.remove();
                                          },
                                          className: "w-full h-full",
                                          onDragStart: function (e) {
                                            return e.preventDefault();
                                          },
                                        }),
                                        (0, r.jsx)("span", {
                                          className:
                                            "absolute bottom-[4px] right-[4px] md:bottom-[8px] md:right-[8px] ".concat(
                                              (null === S || void 0 === S
                                                ? void 0
                                                : S.contractAddress) ===
                                                e.contractAddress &&
                                                S.tokenId === e.tokenId
                                                ? "flex"
                                                : "hidden",
                                              " items-center justify-center w-[18px] h-[18px] md:w-[24px] md:h-[24px] bg-white rounded-full"
                                            ),
                                          children: (0, r.jsx)("img", {
                                            src: be.Z.src,
                                            className:
                                              "w-[8px] h-[8px] md:w-[14px] md:h-[14px]",
                                          }),
                                        }),
                                      ],
                                    },
                                    t
                                  )
                                );
                              }),
                              N &&
                                (0, r.jsx)(p.Z, {
                                  text: a("loadMoreLabel"),
                                  type: {
                                    class: "primary",
                                    icon: !1,
                                    hasColoredBg: !1,
                                  },
                                  initialState: { state: "default" },
                                  size: "small",
                                  className: "col-start-2 col-span-2 w-full",
                                  onClick: E,
                                }),
                            ],
                          })
                        : (0, r.jsx)("div", {
                            children: a("No NFTs Available"),
                          })
                      : (0, r.jsx)(D.Z, { isWhite: !1 }),
                  ],
                }),
                S
                  ? (0, r.jsx)(
                      p.Z,
                      {
                        text: a("confirmLabel"),
                        type: { class: "primary", icon: !1, hasColoredBg: !1 },
                        initialState: { state: "default" },
                        size: "large",
                        className: "self-stretch md:self-end mt-auto",
                        onClick: function (e) {
                          e("loading"), I();
                        },
                      },
                      "button-3"
                    )
                  : (0, r.jsx)(
                      p.Z,
                      {
                        text: a("confirmLabel"),
                        type: { class: "primary", icon: !1, hasColoredBg: !1 },
                        initialState: { state: "disabled" },
                        size: "large",
                        className: "self-stretch md:self-end mt-auto",
                      },
                      "button-4"
                    ),
              ],
            })
          );
        },
        Ve = n(19),
        Ye = n.n(Ve),
        We = function (e) {
          var t = e.onClose,
            n = e.forceOpen,
            a = void 0 !== n && n,
            i = (0, x.C)(function (e) {
              return e;
            }).waccount,
            s = i.currentNetworkId,
            o = i.isConnected,
            l = (0, m.useState)(null),
            c = l[0],
            u = l[1],
            d = (0, m.useState)(
              "https://buy.moonpay.com?apiKey=pk_live_nSyHoHwN4nlx43Yxa3WG6gYwpkSdsx"
            ),
            p = d[0],
            f = d[1];
          return (
            (0, m.useEffect)(function () {
              return (
                document.body.classList.add("no-scroll"),
                function () {
                  return document.body.classList.remove("no-scroll");
                }
              );
            }, []),
            (0, m.useEffect)(
              function () {
                o || a || t();
              },
              [o]
            ),
            (0, m.useEffect)(
              function () {
                null !== c ? s != c && (u(s), t()) : u(s);
              },
              [s]
            ),
            (0, m.useEffect)(
              function () {
                s && s !== re.HL.MAINNET && s !== re.HL.POLYGON
                  ? f(
                      "https://buy-sandbox.moonpay.com/?apiKey=pk_test_Zvr0cUeT9fKZJWrTohT8zh3MbZ6M9"
                    )
                  : f(
                      "https://buy.moonpay.com?apiKey=pk_live_nSyHoHwN4nlx43Yxa3WG6gYwpkSdsx"
                    );
              },
              [s]
            ),
            (0, r.jsx)("div", {
              className:
                "flex justify-center items-center fixed top-0 left-0 w-full h-full",
              children: (0, r.jsxs)("div", {
                className: "\n        "
                  .concat(Ye().height, "\n        ")
                  .concat(
                    Ye().moonpayModal,
                    " \n        relative\n        flex\n        flex-col\n        w-full\n        items-center\n        justify-center\n        gap-10\n        py-10\n        px-4\n        overflow-y-scroll\n        bg-primary-white\n        sm:bg-[rgb(247,247,247)]\n        md:bg-primary-white\n        md:p-8\n        md:rounded-2xl\n        md:shadow-2xl\n        md:shadow-primary-dark-blue\n        md:w-[520px]"
                  ),
                onClick: function (e) {
                  return e.stopPropagation();
                },
                children: [
                  (0, r.jsx)("img", {
                    src: Ie.Z.src,
                    className: "hidden md:block cursor-pointer",
                    onClick: function () {
                      return t();
                    },
                  }),
                  (0, r.jsx)("iframe", {
                    src: p,
                    allow:
                      "accelerometer; autoplay; camera; gyroscope; payment",
                    width: "100%",
                    height: "90%",
                    frameBorder: "0",
                  }),
                ],
              }),
            })
          );
        },
        Ge = "/_next/static/media/close_white.ffb37162.svg",
        qe = "/_next/static/media/close_dark_blue.42ab920d.svg",
        Ke = "/_next/static/media/close_yellow.a75aec09.svg",
        Qe = n(93699);
      function Xe(e, t, n) {
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
      var Je =
          (Xe((Ue = {}), 1, "NONE"),
          Xe(Ue, 2, "INFO"),
          Xe(Ue, 3, "IMPORTANT_INFO"),
          Xe(Ue, 4, "VERY_IMPORTANT_INFO"),
          Xe(Ue, 5, "MOST_IMPORTANT_INFO"),
          Ue),
        $e = function () {
          var e,
            t = (0, m.useRef)(!1),
            n = (0, m.useState)(!1),
            a = n[0],
            i = n[1],
            s = (0, m.useState)(),
            o = s[0],
            l = s[1],
            c = (0, m.useState)(),
            u = c[0],
            d = c[1],
            p = (0, m.useState)("30"),
            f = p[0],
            x = p[1];
          return (
            (0, m.useEffect)(function () {
              (0, X.bf)((0, J.f)("getHeaderMessage"))
                .then(function (e) {
                  var n = e[0],
                    r = n.headerMessage,
                    a = n.statusId,
                    s = n.version;
                  try {
                    if ("NONE" === Je[a])
                      return (
                        localStorage.removeItem("HM_VERSION"),
                        localStorage.removeItem("HM_STATUS"),
                        void (t.current && i(!1))
                      );
                    if (null === localStorage.getItem("HM_VERSION"))
                      return (
                        localStorage.setItem("HM_VERSION", s.toString()),
                        localStorage.setItem("HM_STATUS", "OPENED"),
                        t.current && l(r),
                        t.current && d(Je[a]),
                        void (t.current && i(!0))
                      );
                    if (s > Number(localStorage.getItem("HM_VERSION")))
                      return (
                        localStorage.setItem("HM_VERSION", s.toString()),
                        localStorage.setItem("HM_STATUS", "OPENED"),
                        t.current && l(r),
                        t.current && d(Je[a]),
                        void (t.current && i(!0))
                      );
                    if (!("OPENED" == localStorage.getItem("HM_STATUS")))
                      return void (t.current && i(!1));
                    t.current && l(r),
                      t.current && d(Je[a]),
                      t.current && i(!0);
                  } catch (o) {
                    console.error(o), t.current && i(!1);
                  }
                })
                .catch(function (e) {
                  console.error(e), t.current && i(!1);
                });
            }, []),
            (0, m.useEffect)(function () {
              t.current = !0;
              var e = function () {
                window.innerWidth >= 914
                  ? t.current && x("5")
                  : window.innerWidth >= 610
                  ? t.current && x("10")
                  : t.current && x("30");
              };
              return (
                e(),
                window.addEventListener("resize", e),
                function () {
                  window.removeEventListener("resize", e), (t.current = !1);
                }
              );
            }, []),
            (0, r.jsx)(r.Fragment, {
              children:
                a &&
                o &&
                (0, r.jsx)("div", {
                  className:
                    "flex items-center justify-center w-full h-[48px] relative z-[10000] "
                      .concat("INFO" === u && "bg-primary-dark-blue", " ")
                      .concat("IMPORTANT_INFO" === u && "bg-primary-white", " ")
                      .concat(
                        "VERY_IMPORTANT_INFO" === u && "bg-primary-dark-blue",
                        " "
                      )
                      .concat(
                        "MOST_IMPORTANT_INFO" === u && "bg-primary-yellow"
                      ),
                  children: (0, r.jsxs)("div", {
                    className: "flex justify-between items-center",
                    children: [
                      (0, r.jsxs)("div", {
                        className: ""
                          .concat("INFO" === u && "text-primary-white", " ")
                          .concat(
                            "IMPORTANT_INFO" === u && "text-primary-dark-blue",
                            " "
                          )
                          .concat(
                            "VERY_IMPORTANT_INFO" === u &&
                              "text-primary-yellow",
                            " "
                          )
                          .concat(
                            "MOST_IMPORTANT_INFO" === u &&
                              "text-primary-dark-blue"
                          ),
                        children: [
                          "VERY_IMPORTANT_INFO" === u ||
                          "MOST_IMPORTANT_INFO" === u
                            ? (0, r.jsx)("span", {
                                className: "mr-[16px]",
                                children: "!!!!!!!",
                              })
                            : "",
                          " ",
                          (0, r.jsx)(Qe.Z, {
                            className:
                              "flex items-center text-sm font-semibold w-[270px] h-[48px] sm:w-[610px] lg:w-[914px] xl:w-[1124px]",
                            text: o,
                            animationSpeed: f,
                          }),
                          " ",
                          "VERY_IMPORTANT_INFO" === u ||
                          "MOST_IMPORTANT_INFO" === u
                            ? (0, r.jsx)("span", {
                                className: "ml-[16px]",
                                children: "!!!!!!!",
                              })
                            : "",
                        ],
                      }),
                      (0, r.jsx)("img", {
                        src:
                          ((e = u),
                          "INFO" === e
                            ? Ge
                            : "IMPORTANT_INFO" === e
                            ? qe
                            : "VERY_IMPORTANT_INFO" === e
                            ? Ke
                            : qe),
                        className:
                          "w-[12px] h-[12px] absolute right-[24px] cursor-pointer",
                        onClick: function () {
                          i(!1), localStorage.setItem("HM_STATUS", "CLOSED");
                        },
                      }),
                    ],
                  }),
                }),
            })
          );
        },
        et = n(14647),
        tt = function () {
          var e = (0, m.useState)(!1),
            t = e[0],
            n = e[1],
            a = (0, m.useState)(!1),
            i = a[0],
            s = a[1],
            o = (0, m.useState)(!1),
            l = o[0],
            c = o[1],
            u = (0, m.useState)(!1),
            d = u[0],
            p = u[1],
            f = (0, m.useState)(!1),
            h = f[0],
            y = f[1],
            v = (0, x.T)(),
            g = (0, x.C)(function (e) {
              return e;
            }),
            b = g.walletmodal,
            w = g.waccount,
            j = g.moonpaymodal,
            N = b.isOpen,
            k = w.firstLogin,
            _ = j.isOpen,
            T = function () {
              t && n(!1),
                i && s(!1),
                l && c(!1),
                y(!1),
                v((0, et.gj)(!1)),
                document.body.classList.remove("no-scroll");
            };
          return (
            (0, m.useEffect)(
              function () {
                k &&
                  !N &&
                  1 === (0, ne.lN)() &&
                  (s(!0), (0, ne.jO)(0), v((0, Q.AB)(0)));
              },
              [k, N]
            ),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("div", {
                  className: "".concat(
                    (t || i || l || _ || d) && "hidden md:block"
                  ),
                  children: (0, r.jsx)($e, {}),
                }),
                (0, r.jsx)(S, {
                  openBalanceModal: function () {
                    return !t && n(!0);
                  },
                  openAccountModal: function () {
                    return !i && s(!0);
                  },
                  closeModals: function () {
                    T();
                  },
                  openMoonPayModal: function () {
                    y(!0), v((0, et.gj)(!0));
                  },
                }),
                (0, r.jsx)(L, {
                  openBalanceModal: function () {
                    t || (document.body.classList.add("no-scroll"), n(!0));
                  },
                  openMoonPayModal: function () {
                    y(!0), v((0, et.gj)(!0));
                  },
                  openModals: t || i || l || _,
                  closeModals: function () {
                    return T();
                  },
                  onOpen: function () {
                    document.body.classList.add("no-scroll"), p(!0);
                  },
                  onClose: function () {
                    document.body.classList.remove("no-scroll"), p(!1);
                  },
                }),
                N && (0, r.jsx)(ce, { isOpen: !0 }),
                (t || i || l || _) &&
                  (0, r.jsxs)("div", {
                    className:
                      "fixed top-0 left-0 w-screen h-screen z-[100] md:z-[40000] md:bg-black/30",
                    onClick: function () {
                      T();
                    },
                    children: [
                      t &&
                        (0, r.jsx)(ge, {
                          onClose: function () {
                            t &&
                              (document.body.classList.remove("no-scroll"),
                              n(!1));
                          },
                          openMoonPayModal: function () {
                            y(!1), v((0, et.gj)(!0));
                          },
                          openAccountModal: function () {
                            return !i && s(!0);
                          },
                        }),
                      i &&
                        (0, r.jsx)(Le, {
                          onClose: function () {
                            return i && s(!1);
                          },
                          openNFTModal: function () {
                            return !l && c(!0);
                          },
                        }),
                      l &&
                        (0, r.jsx)(He, {
                          onClose: function () {
                            return l && c(!1);
                          },
                          openAccountModal: function () {
                            return !i && s(!0);
                          },
                        }),
                      _ &&
                        (0, r.jsx)(We, {
                          onClose: function () {
                            return v((0, et.gj)(!1));
                          },
                          forceOpen: h,
                        }),
                    ],
                  }),
              ],
            })
          );
        };
    },
    4632: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return a;
        },
      });
      var r = {
          nonce: "auth/userNonce",
          signup: "auth/userSignup",
          signin: "auth/userSignin",
          getFAQ: "pages/getFAQ",
          getTOS: "pages/getTOS",
          getAssets: "collections/getAssets/{networkId}/{type}/{skip}/{take}",
          getAssetsQueryString:
            "collections/getAssets/{networkId}/{type}/{skip}/{take}/{queryString}",
          getAvatar: "avatar/getAvatar",
          insertCollection: "collections/insertCollection",
          getNftCollectionAssetsByOwnerOS:
            "os/getNftCollectionAssetsByOwnerOs/{networkId}/{collection}/{address}/{take}/{continuation}",
          getNftCollectionAssetsByOwner:
            "nftport/getNftCollectionAssetsByOwner/{networkId}/{collection}/{address}/{take}/{continuation}",
          getNftCollection: "nftport/getNftCollection/{networkId}/{collection}",
          getPairValue: "coinbase/getPairValue/{pair}",
          verifyUser: "users/verifyUser/{username}",
          searchUser: "users/searchUser/{networkId}/{searchParam}",
          updateUserData: "users/updateUserData",
          addFavouriteUser: "users/addFavouriteUser",
          deleteFavouriteUser: "users/deleteFavouriteUser",
          getFavouriteUsers:
            "users/getFavouriteUsers/{networkId}/{skip}/{take}",
          getPastCollectors: "users/getPastCollectors/{networkId}",
          getSwapList:
            "tradelist/getSwapList/{networkId}/{address}/{status}/{skip}/{take}",
          getSwapDetails: "tradelist/getSwapDetail/{networkId}/{swapId}",
          getPlatformData: "data/getPlatformData/{networkId}",
          getFullList:
            "tradelist/getFullList/{networkId}/{status}/{skip}/{take}",
          getSwapListByAddress:
            "tradelist/getFullList/{networkId}/{status}/{skip}/{take}/null/null/{searchAddress}",
          getPersonalSwapList:
            "tradelist/getSwapList/{networkId}/{address}/{status}/{skip}/{take}",
          searchPersonalSwapList:
            "tradelist/getSwapList/{networkId}/{address}/{status}/{skip}/{take}/null/null/{searchAddress}",
          getMintedNFT: "nft/{tokenId}",
          getHeaderMessage: "message/getHeaderMessage",
          getNftReported: "nftReported/{networkId}/{collection}/{tokenId}",
          getReportsList: "report/getReportStatus",
          reportCollection: "report/reportCollection",
        },
        a = function (e, t) {
          if (
            ((i = t),
            (null != (s = Array) &&
            "undefined" !== typeof Symbol &&
            s[Symbol.hasInstance]
              ? s[Symbol.hasInstance](i)
              : i instanceof s) && t.length > 0)
          ) {
            var n = r[e].match(/{(.*?)}/g);
            if ((null === n || void 0 === n ? void 0 : n.length) === t.length) {
              var a = "".concat(r[e]);
              return (
                n.forEach(function (e, n) {
                  a = a.replace(e, t[n].toString());
                }),
                "".concat("https://cors-anywhere-thud.herokuapp.com/https://api.nfttrader.io", "/").concat(a)
              );
             
            }
          }
          var i, s;
          return "".concat("https://cors-anywhere-thud.herokuapp.com/https://api.nfttrader.io", "/").concat(r[e]);
        };
    },
    47777: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return a;
        },
      });
      var r = {
        ETHEREUM_ADDRESS_LENGTH: 42,
        MIN_DAY_DURATION_DEAL: 1,
        ETHEREUM_DECIMALS_NUMBER: 18,
        STATUSES_FOR_NAVSTATE: { all: -1, confirmed: 1, canceled: 2 },
        ADDRESS_ZERO: "0x0000000000000000000000000000000000000000",
        HOMEPAGE_UL_IMAGES: [
          "https://lh3.googleusercontent.com/8A--1cS8DLvndmBl7RVfKpqNGSSN6kg5GMsL3XyJO5CjyjgEQ4zVF35K362Nm1v5QuqZW-NMmeh1pGI9KMg0xqdBHMFoS9W3Ztvr=w600",
          "https://lh3.googleusercontent.com/56u1MB4VVyoqXsOTbe9_BWQzmAANW_u3v9Qvxlkm8aT_hi5_OusmZ1gCitsZOsnmi1-BsV4dmyU-JTG2OGZv4tuNAYtLv1Hv7pVx9w=w600",
          "https://lh3.googleusercontent.com/erV3lbCuBf7agaCje6LrHNv1eBdeoUFuAZj6JrQhGzxbFXr_yLIy9ehSd6Jf-eLBA5YPPLH0IJcAixggPERSgNLapWo_fusnQXHxBg=w600",
          "https://lh3.googleusercontent.com/bG3_DxBzMKJaQrwoUo0vmUDcvtSDebt2npRE4H2iqrx_I3fZBdnr6eskkLx7OPt2N0LwybIfDrtGCy-XsTB9sxest_Q4GvhDGRZZ=w600",
          "https://lh3.googleusercontent.com/HVoCZ3nojYlPGcK1NDTQaWky2jn2k9CCk1KriiD0WDihP-mqUxN3tGSCYkXgNZSrrONGfcF8diHyHtMyItfJCPid5U_mTC-D03Bv4g=w600",
        ],
        TRADESQUAD_ADDRESS: "0xdbD4264248e2f814838702E0CB3015AC3a7157a1",
        TRADESQUAD_ABI: [
          {
            inputs: [
              { internalType: "string", name: "_endpoint", type: "string" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "approved",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "operator",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "bool",
                name: "approved",
                type: "bool",
              },
            ],
            name: "ApprovalForAll",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "uint256",
                name: "_series",
                type: "uint256",
              },
              {
                indexed: !0,
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "_owner",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "_time",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "_rnd",
                type: "uint256",
              },
            ],
            name: "nftMinted",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "_payer",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "_value",
                type: "uint256",
              },
            ],
            name: "paymentReceived",
            type: "event",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_maxSupply", type: "uint256" },
            ],
            name: "addSeries",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "tokenId", type: "uint256" },
            ],
            name: "approve",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_tokenId", type: "uint256" },
            ],
            name: "assetTrait",
            outputs: [
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "tokenSeriesIndex",
                    type: "uint256",
                  },
                  { internalType: "string", name: "tokenName", type: "string" },
                  { internalType: "uint256", name: "rNumber", type: "uint256" },
                  { internalType: "uint256", name: "delta", type: "uint256" },
                  { internalType: "uint256", name: "rangeN", type: "uint256" },
                  { internalType: "uint256", name: "traitN", type: "uint256" },
                  {
                    internalType: "uint256",
                    name: "difficulty",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "timestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "hierarchySerial",
                    type: "uint256",
                  },
                  { internalType: "uint256", name: "tokenId", type: "uint256" },
                ],
                internalType: "struct TradeSquads.TokenDetail",
                name: "",
                type: "tuple",
              },
              { internalType: "uint256[7]", name: "", type: "uint256[7]" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_series", type: "uint256" },
              { internalType: "bool", name: "_unique", type: "bool" },
            ],
            name: "awardItem",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "baseURI",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "claimVal",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "deltaHierarchy",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "endpoint",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "tokenId", type: "uint256" },
            ],
            name: "getApproved",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getVaultBalance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_seriesIndex",
                type: "uint256",
              },
              { internalType: "bool", name: "_enabled", type: "bool" },
            ],
            name: "handleSeries",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_hierarchyId",
                type: "uint256",
              },
            ],
            name: "hierarchyCount",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "operator", type: "address" },
            ],
            name: "isApprovedForAll",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "tokenId", type: "uint256" },
            ],
            name: "ownerOf",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "pause",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "rangeNumber",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "tokenId", type: "uint256" },
            ],
            name: "safeTransferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "tokenId", type: "uint256" },
              { internalType: "bytes", name: "_data", type: "bytes" },
            ],
            name: "safeTransferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_amount", type: "uint256" },
              {
                internalType: "address payable",
                name: "_receiver",
                type: "address",
              },
            ],
            name: "sendVaultBalance",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            name: "series",
            outputs: [
              {
                components: [
                  { internalType: "uint256", name: "_value", type: "uint256" },
                ],
                internalType: "struct Counters.Counter",
                name: "currentSupply",
                type: "tuple",
              },
              { internalType: "uint256", name: "maxSupply", type: "uint256" },
              { internalType: "bool", name: "enabled", type: "bool" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_index", type: "uint256" },
            ],
            name: "seriesByIndex",
            outputs: [
              {
                components: [
                  {
                    components: [
                      {
                        internalType: "uint256",
                        name: "_value",
                        type: "uint256",
                      },
                    ],
                    internalType: "struct Counters.Counter",
                    name: "currentSupply",
                    type: "tuple",
                  },
                  {
                    internalType: "uint256",
                    name: "maxSupply",
                    type: "uint256",
                  },
                  { internalType: "bool", name: "enabled", type: "bool" },
                ],
                internalType: "struct TradeSquads.Series",
                name: "",
                type: "tuple",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "seriesCount",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "operator", type: "address" },
              { internalType: "bool", name: "approved", type: "bool" },
            ],
            name: "setApprovalForAll",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_value", type: "uint256" },
            ],
            name: "setClaimVal",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_claimer", type: "address" },
            ],
            name: "setClaimer",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_delta", type: "uint256" },
            ],
            name: "setDeltaHierarchy",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_tokenId", type: "uint256" },
              { internalType: "string", name: "_name", type: "string" },
            ],
            name: "setName",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bool", name: "_pauseStatus", type: "bool" },
            ],
            name: "setPauseStatus",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_range", type: "uint256" },
              { internalType: "uint256", name: "_rangeVal", type: "uint256" },
              { internalType: "uint256", name: "_type", type: "uint256" },
            ],
            name: "setRange",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_rangeNumber",
                type: "uint256",
              },
            ],
            name: "setRangeNumber",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_series", type: "uint256" },
              { internalType: "uint256", name: "_supply", type: "uint256" },
            ],
            name: "setSupply",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_trait", type: "uint256" },
              { internalType: "uint256", name: "_type", type: "uint256" },
            ],
            name: "setTrait",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_traitNumber",
                type: "uint256",
              },
            ],
            name: "setTraitNumber",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes4", name: "interfaceId", type: "bytes4" },
            ],
            name: "supportsInterface",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "index", type: "uint256" },
            ],
            name: "tokenByIndex",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "uint256", name: "index", type: "uint256" },
            ],
            name: "tokenOfOwnerByIndex",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "tokenId", type: "uint256" },
            ],
            name: "tokenURI",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "traitNumber",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            name: "traitRange",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "tokenId", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "uniqueClaimerA",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          { stateMutability: "payable", type: "receive" },
        ],
      };
      function a(e) {
        return r[e];
      }
    },
    29562: function (e, t, n) {
      "use strict";
      n.d(t, {
        N: function () {
          return a;
        },
        x: function () {
          return i;
        },
      });
      var r = n(47777);
      function a(e) {
        return e.length == (0, r.z)("ETHEREUM_ADDRESS_LENGTH")
          ? e.substring(0, 5).toLowerCase() +
              "..." +
              e.substring(38, 42).toLowerCase()
          : e;
      }
      function i(e) {
        return e.length == (0, r.z)("ETHEREUM_ADDRESS_LENGTH")
          ? e.substring(0, 10).toLowerCase() +
              "..." +
              e.substring(32, 42).toLowerCase()
          : e;
      }
    },
    73468: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return a;
        },
      });
      var r = n(95479),
        a = function (e, t) {
          var n = "";
          switch (e) {
            case r.HL.MAINNET:
              n = "https://etherscan.io/address/".concat(t);
              break;
            case r.HL.RINKEBY:
              n = "https://rinkeby.etherscan.io/address/".concat(t);
              break;
            case r.HL.POLYGON:
              n = "https://polygonscan.com/address/".concat(t);
              break;
            case r.HL.POLYGON_MUMBAI:
              n = "https://mumbai.polygonscan.com/address/".concat(t);
              break;
            default:
              n = "https://etherscan.io/address/".concat(t);
          }
          return n;
        };
    },
    43376: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return a;
        },
      });
      var r = [
          {
            evmNetworkId: 1,
            name: "ETHEREUM",
            evmLogo: "",
            endpoint: "ethereum",
          },
          {
            evmNetworkId: 4,
            name: "RINKEBY",
            evmLogo: "",
            endpoint: "rinkeby",
          },
          {
            evmNetworkId: 137,
            name: "POLYGON",
            evmLogo: "",
            endpoint: "polygon",
          },
          {
            evmNetworkId: 80001,
            name: "MUMBAI",
            evmLogo: "",
            endpoint: "mumbai",
          },
        ],
        a = function (e) {
          if (e) {
            var t = r.find(function (t) {
              return t.evmNetworkId === e;
            });
            if (t) return t.endpoint;
          }
          return null;
        };
    },
    10327: function (e, t, n) {
      "use strict";
      n.d(t, {
        bf: function () {
          return u;
        },
        Vd: function () {
          return d;
        },
        VZ: function () {
          return p;
        },
        jl: function () {
          return m;
        },
        U3: function () {
          return c;
        },
        $Y: function () {
          return f;
        },
      });
      var r = n(44453),
        a = n.n(r),
        i = n(63024),
        s = n.n(i);
      n(44743);
      function o(e, t, n, r, a, i, s) {
        try {
          var o = e[i](s),
            l = o.value;
        } catch (c) {
          return void n(c);
        }
        o.done ? t(l) : Promise.resolve(l).then(r, a);
      }
      function l(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var i = e.apply(t, n);
            function s(e) {
              o(i, r, a, s, l, "next", e);
            }
            function l(e) {
              o(i, r, a, s, l, "throw", e);
            }
            s(void 0);
          });
        };
      }
      var c = function (e, t, n) {
          var r = t;
          if ("string" != typeof t)
            try {
              r = JSON.stringify(t);
            } catch (i) {
              throw new Error(i);
            }
          var a = {
            method: "DELETE",
            url: e,
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer ".concat(n),
            },
            data: r,
          };
          return s()(a).then(function (e) {
            return e.data;
          });
        },
        u = function (e) {
          return s()
            .get(e)
            .then(function (e) {
              return e.data;
            });
        },
        d = function (e, t) {
          return s()
            .get(e, { headers: { Authorization: "Bearer ".concat(t) } })
            .then(function (e) {
              return e.data;
            });
        },
        p = (function () {
          var e = l(
            a().mark(function e(t, n) {
              var r, i;
              return a().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((r = n), "string" == typeof n)) {
                          e.next = 9;
                          break;
                        }
                        (e.prev = 2), (r = JSON.stringify(n)), (e.next = 9);
                        break;
                      case 6:
                        throw (
                          ((e.prev = 6), (e.t0 = e.catch(2)), new Error(e.t0))
                        );
                      case 9:
                        return (
                          (i = {
                            method: "POST",
                            url: t,
                            headers: { "Content-Type": "application/json" },
                            data: r,
                          }),
                          e.abrupt(
                            "return",
                            s()(i).then(function (e) {
                              return e.data;
                            })
                          )
                        );
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[2, 6]]
              );
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        m = (function () {
          var e = l(
            a().mark(function e(t, n, r) {
              var i, o;
              return a().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((i = n), "string" == typeof n)) {
                          e.next = 9;
                          break;
                        }
                        (e.prev = 2), (i = JSON.stringify(n)), (e.next = 9);
                        break;
                      case 6:
                        throw (
                          ((e.prev = 6), (e.t0 = e.catch(2)), new Error(e.t0))
                        );
                      case 9:
                        return (
                          (o = {
                            method: "POST",
                            url: t,
                            headers: {
                              "Content-Type": "application/json",
                              Authorization: "Bearer ".concat(r),
                            },
                            data: i,
                          }),
                          e.abrupt(
                            "return",
                            s()(o).then(function (e) {
                              return e.data;
                            })
                          )
                        );
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[2, 6]]
              );
            })
          );
          return function (t, n, r) {
            return e.apply(this, arguments);
          };
        })(),
        f =
          ((function () {
            var e = l(
              a().mark(function e(t, n) {
                var r, i;
                return a().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((r = n), "string" == typeof n)) {
                            e.next = 9;
                            break;
                          }
                          (e.prev = 2), (r = JSON.stringify(n)), (e.next = 9);
                          break;
                        case 6:
                          throw (
                            ((e.prev = 6), (e.t0 = e.catch(2)), new Error(e.t0))
                          );
                        case 9:
                          return (
                            (i = {
                              method: "PUT",
                              url: t,
                              headers: { "Content-Type": "application/json" },
                              data: r,
                            }),
                            e.abrupt(
                              "return",
                              s()(i).then(function (e) {
                                return e.data;
                              })
                            )
                          );
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 6]]
                );
              })
            );
          })(),
          (function () {
            var e = l(
              a().mark(function e(t, n, r) {
                var i, o;
                return a().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((i = n), "string" == typeof n)) {
                            e.next = 9;
                            break;
                          }
                          (e.prev = 2), (i = JSON.stringify(n)), (e.next = 9);
                          break;
                        case 6:
                          throw (
                            ((e.prev = 6), (e.t0 = e.catch(2)), new Error(e.t0))
                          );
                        case 9:
                          return (
                            (o = {
                              method: "PUT",
                              url: t,
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(r),
                              },
                              data: i,
                            }),
                            e.abrupt(
                              "return",
                              s()(o).then(function (e) {
                                return e.data;
                              })
                            )
                          );
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 6]]
                );
              })
            );
            return function (t, n, r) {
              return e.apply(this, arguments);
            };
          })());
    },
    39700: function (e) {
      e.exports = {
        pfpwrapper: "Avatar_pfpwrapper__d_Hfu",
        nft: "Avatar_nft__RMapi",
        check: "Avatar_check__ZBv_z",
      };
    },
    64572: function (e) {
      e.exports = { disabled: "Button_disabled___OmjN" };
    },
    61948: function (e) {
      e.exports = {
        fade60: "ButtonLoader_fade60__j64w4",
        fade80: "ButtonLoader_fade80__sxDG9",
        fade100: "ButtonLoader_fade100__1v13r",
      };
    },
    54222: function (e) {
      e.exports = {
        blue: "LinkComponent_blue__vKzQ0",
        link: "LinkComponent_link__B8Cf5",
        white: "LinkComponent_white__wctmo",
      };
    },
    69784: function (e) {
      e.exports = {
        skChase: "Loader_skChase__nzV11",
        "sk-chase": "Loader_sk-chase__3ZHbF",
        skChaseDot: "Loader_skChaseDot__QfnXt",
        "sk-chase-dot": "Loader_sk-chase-dot__5OuxY",
        "sk-chase-dot-before": "Loader_sk-chase-dot-before__pReGj",
        skChaseDotWhite: "Loader_skChaseDotWhite__4EZSc",
        skChaseDotBlue: "Loader_skChaseDotBlue__WsiUl",
      };
    },
    99022: function (e) {
      e.exports = { disabled: "WalletModalOption_disabled__eB4SY" };
    },
    21631: function (e) {
      e.exports = {
        nft: "AccountModal_nft__U_A0R",
        accountModal: "AccountModal_accountModal__qYlIk",
        zoom: "AccountModal_zoom__bmgWt",
        height: "AccountModal_height__5YeLj",
      };
    },
    33240: function (e) {
      e.exports = { balanceModal: "BalanceModal_balanceModal__GS5Ol" };
    },
    19: function (e) {
      e.exports = {
        moonpayModal: "MoonPayModal_moonpayModal__a1xBH",
        zoom: "MoonPayModal_zoom__xeSEH",
        height: "MoonPayModal_height__ReL4T",
      };
    },
    29709: function (e) {
      e.exports = {
        customScrollbar: "NFTModal_customScrollbar__lTI3N",
        rotating: "NFTModal_rotating__FB3KH",
        rotate: "NFTModal_rotate__SVBVm",
        height: "NFTModal_height__djUew",
      };
    },
    11200: function (e) {
      e.exports = {
        insideBorder: "SearchBar_insideBorder__vTNXm",
        insideBorderErroed: "SearchBar_insideBorderErroed__B6grM",
      };
    },
    54633: function (e) {
      e.exports = {
        overlay: "WalletModal_overlay__kXLCB",
        walletModal: "WalletModal_walletModal__NVDj1",
        zoom: "WalletModal_zoom__VVpdD",
      };
    },
    1795: function (e) {
      e.exports = {
        linkPrimary: "HeaderDesktop_linkPrimary__qmdzk",
        linkSecondary: "HeaderDesktop_linkSecondary__lIUQO",
        menuFontSmall: "HeaderDesktop_menuFontSmall__age8u",
        menuOutlineHome: "HeaderDesktop_menuOutlineHome__Os2DT",
        menuOutlineTradingCenter:
          "HeaderDesktop_menuOutlineTradingCenter__WiqyC",
        menuOutlineMore: "HeaderDesktop_menuOutlineMore__v6sGv",
      };
    },
    77653: function (e) {
      e.exports = {
        linkPrimary: "HeaderMobile_linkPrimary__isKga",
        linkSecondary: "HeaderMobile_linkSecondary__HSC0u",
      };
    },
  },
]);
