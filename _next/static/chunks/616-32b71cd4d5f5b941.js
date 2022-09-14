(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [616],
  {
    12683: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/loader_wallet.f7553063.svg",
        height: 30,
        width: 30,
      };
    },
    98448: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/loader_white.cc701072.svg",
        height: 24,
        width: 24,
      };
    },
    70687: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/not_verified.ba7e7e9e.svg",
        height: 25,
        width: 25,
      };
    },
    153: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/placeholder_smile.a0246c80.svg",
        height: 120,
        width: 120,
      };
    },
    1333: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/smile_favourites.603eeae6.svg",
        height: 24,
        width: 24,
      };
    },
    98353: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/smile_nfts_gray.b70dd16b.svg",
        height: 72,
        width: 72,
      };
    },
    25900: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return y;
        },
      });
      var n = s(8014),
        r = "/_next/static/media/verified.f4b22063.svg",
        a = s(70687),
        l = "/_next/static/media/blacklist.860861bb.svg",
        i = s(44105),
        c = s(98353),
        o = s(85429),
        d = s(56168),
        u = s(79327),
        x = s(62044),
        m = s(22387),
        p = s.n(m),
        f = s(97968),
        h = s(54646);
      function g(e, t, s) {
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
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(s);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(s).filter(function (e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              g(e, t, s[t]);
            });
        }
        return e;
      }
      var y = function (e) {
        var t = e.src,
          s = e.statusVerification,
          m = e.className,
          g = void 0 === m ? "" : m,
          y = e.badgeClassName,
          j = void 0 === y ? "" : y,
          v = e.showCollectionTooltip,
          N = void 0 !== v && v,
          w = e.collection,
          k = e.canReport,
          C = void 0 !== k && k,
          S = e.style,
          _ = (0, x.Z)("common").t,
          E = (0, d.useState)(N)[0],
          L = (0, u.Z)(),
          T = (0, d.useState)(
            null === w || void 0 === w ? void 0 : w.createdAt
          )[0],
          F = (0, d.useState)(),
          M = F[0],
          I = F[1],
          A = (0, f.C)(function (e) {
            return e;
          }).reportmodal.isOpen,
          R = (0, f.T)();
        return (
          (0, d.useEffect)(
            function () {
              T && I(new Date(T));
            },
            [T]
          ),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("div", {
                className: "rounded-full relative ".concat(g),
                style: b(
                  {
                    backgroundImage: "url(".concat((0, i.i)(t || c.Z.src), ")"),
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                  },
                  S
                ),
                "data-for": "".concat(L),
                "data-tip": !0,
                children:
                  "undefined" !== typeof s &&
                  null != s &&
                  s >= 0 &&
                  (0, n.jsx)("img", {
                    className: "absolute -bottom-[1px] -right-[3px] "
                      .concat(j, " ")
                      .concat("undefined" === typeof s ? "hidden" : ""),
                    src: 1 === s ? r : 0 === s ? a.Z.src : l,
                  }),
              }),
              E &&
                (0, n.jsx)(o.Z, {
                  id: L,
                  type: "light",
                  effect: "solid",
                  className: "".concat(p().tooltip),
                  offset: { top: -10 },
                  children: (0, n.jsxs)("div", {
                    className: "flex flex-col py-[5px]",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex justify-between items-center",
                        children: [
                          (0, n.jsx)("div", {
                            className:
                              "rounded-full relative w-[44px] h-[44px] mr-[15px]",
                            style: {
                              backgroundImage: "url(".concat(
                                (0, i.i)(t || c.Z.src),
                                ")"
                              ),
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center center",
                            },
                            children:
                              "undefined" !== typeof s &&
                              null != s &&
                              s >= 0 &&
                              (0, n.jsx)("img", {
                                className:
                                  "absolute -bottom-[1px] -right-[3px] w-[16px] h-[16px] ".concat(
                                    "undefined" === typeof s ? "hidden" : ""
                                  ),
                                src: 1 === s ? r : 0 === s ? a.Z.src : l,
                              }),
                          }),
                          (0, n.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                              (0, n.jsx)("h3", {
                                className:
                                  "text-base font-bold text-primary-dark-blue",
                                children:
                                  null === w || void 0 === w ? void 0 : w.name,
                              }),
                              (0, n.jsxs)("div", {
                                className: "flex",
                                children: [
                                  (0, n.jsx)("a", {
                                    target: "_blank",
                                    href: "https://docs.nfttrader.io/documentation/collection-verification-process",
                                    className: "hover:underline",
                                    children: (0, n.jsxs)("span", {
                                      className:
                                        "text-primary-blue text-xs font-semibold",
                                      children: [
                                        0 === s &&
                                          _("collectionIsUnverifiedLabel"),
                                        1 === s &&
                                          _("collectionIsVerifiedLabel"),
                                        2 === s && _("collectionIsBannedLabel"),
                                      ],
                                    }),
                                  }),
                                  (0, n.jsx)("img", {
                                    className:
                                      "w-[16px] h-[16px] ml-[5px] ".concat(
                                        "undefined" === typeof s ? "hidden" : ""
                                      ),
                                    src: 1 === s ? r : 0 === s ? a.Z.src : l,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      M &&
                        (0, n.jsx)("div", {
                          className: "mt-[12.5px]",
                          children: (0, n.jsxs)("span", {
                            className: "rubik text-primary-gray font-regular",
                            children: [
                              _("collectionCreatedAtLabel"),
                              " ",
                              ""
                                .concat(
                                  M.getDate() < 10
                                    ? "0".concat(M.getDate())
                                    : "".concat(M.getDate()),
                                  "/"
                                )
                                .concat(
                                  M.getMonth() < 9
                                    ? "0".concat(M.getMonth() + 1)
                                    : "".concat(M.getMonth() + 1),
                                  "/"
                                )
                                .concat(M.getFullYear()),
                            ],
                          }),
                        }),
                      C &&
                        (0, n.jsx)("div", {
                          className: "flex justify-start mt-[34px]",
                          children: (0, n.jsx)("div", {
                            className:
                              "flex items-center justify-center bg-state-warning hover:bg-state-warning/80 py-[4px] px-8 rounded-full cursor-pointer transition-colors",
                            onClick: function () {
                              w && R((0, h.dp)(w)), R((0, h.nr)(!A));
                            },
                            children: (0, n.jsx)("span", {
                              className:
                                "font-semibold text-primary-white text-sm",
                              children: _("reportCollectionLabel"),
                            }),
                          }),
                        }),
                    ],
                  }),
                }),
            ],
          })
        );
      };
    },
    53957: function (e, t, s) {
      "use strict";
      var n = s(8014),
        r = s(56168),
        a = s(3621),
        l = s(77832),
        i = s.n(l);
      function c(e, t) {
        return null != t &&
          "undefined" !== typeof Symbol &&
          t[Symbol.hasInstance]
          ? t[Symbol.hasInstance](e)
          : e instanceof t;
      }
      t.Z = function (e) {
        var t = e.modalTitle,
          s = e.modalDescription,
          l = e.action,
          o = e.actionClose,
          d = e.buttonsText,
          u = e.isOpen,
          x = void 0 !== u && u,
          m = e.closeOnAction,
          p = void 0 === m || m,
          f = (0, r.useState)(x),
          h = f[0],
          g = f[1];
        return (0, n.jsx)(n.Fragment, {
          children:
            h &&
            (0, n.jsx)("div", {
              className: "".concat(
                i().overlay,
                " lg:flex lg:justify-center lg:items-center lg:fixed lg:top-0 lg:left-0 lg:w-full lg:h-full z-[20000]"
              ),
              children: (0, n.jsxs)("div", {
                className: "".concat(
                  i().actionModal,
                  " fixed flex flex-col w-full bg-primary-blue z-[20000] rounded-t-[32px] py-[40px] px-[16px] w-full h-[304px] text-center lg:relative lg:w-[520px] lg:rounded-[16px] lg:h-[auto] lg:p-[32px]"
                ),
                children: [
                  (0, n.jsxs)("div", {
                    className: "mb-[40px] text-primary-white",
                    children: [
                      (0, n.jsx)("h3", {
                        className: "text-2xl font-semibold",
                        children: t,
                      }),
                      (0, n.jsx)("p", {
                        className: "rubik text-base font-light",
                        children: s,
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "flex flex-col lg:flex-row-reverse lg:justify-between",
                    children: [
                      (0, n.jsx)(a.Z, {
                        text: d[0],
                        type: { class: "primary", icon: !1, hasColoredBg: !0 },
                        size: "large",
                        initialState: { state: "default" },
                        className: "mb-[16px] lg:mb-[auto]",
                        onClick: function (e) {
                          c(l, Function) && l(e, g), p && g(!1);
                        },
                      }),
                      (0, n.jsx)(a.Z, {
                        text: d[1],
                        type: {
                          class: "secondary",
                          icon: !1,
                          hasColoredBg: !0,
                        },
                        size: "large",
                        initialState: { state: "default" },
                        onClick: function () {
                          c(o, Function) && o(), g(!1);
                        },
                      }),
                    ],
                  }),
                ],
              }),
            }),
        });
      };
    },
    50647: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return L;
        },
      });
      var n = s(44453),
        r = s.n(n),
        a = s(8014),
        l = s(97968),
        i = s(3621),
        c = s(33289),
        o = s.n(c),
        d = s(62044),
        u = s(54646),
        x = s(72273),
        m = s(25900),
        p = s(37011),
        f = s(56168),
        h = s(21020),
        g = s.n(h),
        b = function (e) {
          var t = e.initialStatus,
            s = void 0 === t ? "uninitialized" : t,
            n = e.options,
            r = void 0 === n ? [] : n,
            l = e.onSelect,
            i = void 0 === l ? null : l,
            c = e.fireOnOption,
            o = void 0 === c ? null : c,
            u = (0, f.useState)(s),
            x = u[0],
            m = u[1],
            p = (0, f.useState)("closed"),
            h = p[0],
            b = p[1],
            y = (0, f.useState)(),
            j = y[0],
            v = y[1],
            N = (0, d.Z)("common").t,
            w = (0, f.useCallback)(
              function () {
                b(function () {
                  return "closed" === h ? "opened" : "closed";
                });
              },
              [h]
            ),
            k = (0, f.useCallback)(function (e) {
              return (
                !!o &&
                (("first" === o.optionNumber && e.id === r[0].id) ||
                  ("last" === o.optionNumber && e.id === r[r.length - 1].id) ||
                  ("number" === typeof o.optionNumber &&
                    e.id === r[o.optionNumber].id))
              );
            }, []);
          return (0, a.jsxs)("div", {
            className: "relative",
            children: [
              (0, a.jsxs)("div", {
                className: ""
                  .concat(g().selectBox, " ")
                  .concat(
                    "uninitialized" === x
                      ? "border-primary-gray/40 hover:border-primary-blue"
                      : "",
                    " "
                  )
                  .concat("disabled" === x ? "border-primary-gray/40" : "", " ")
                  .concat(
                    "filled" === x
                      ? "border-primary-blue"
                      : "hover:border-primary-dark-blue",
                    " flex justify-between items-center h-[55px] w-full border-[1px] border-solid rounded-full cursor-pointer px-[24px]"
                  ),
                onClick: w,
                children: [
                  "uninitialized" === x &&
                    (0, a.jsx)("span", {
                      className: ""
                        .concat(g().initialLabel, " text-base font-semibold ")
                        .concat(
                          "uninitialized" === x
                            ? "".concat(g().uninitialized)
                            : ""
                        ),
                      children: N("selectReasonLabel"),
                    }),
                  j &&
                    (0, a.jsx)("span", {
                      className: ""
                        .concat(g().initialLabel, " text-base font-semibold ")
                        .concat(
                          "disabled" === x ? "text-primary-gray/80" : "",
                          " "
                        )
                        .concat("filled" === x ? "text-primary-blue" : ""),
                      children: j.description,
                    }),
                  (0, a.jsx)("div", { className: g().triangle }),
                ],
              }),
              "opened" === h &&
                (0, a.jsx)("div", {
                  className: "".concat(
                    g().options,
                    " w-full rounded-[12px] absolute shadow shadow-md max-h-[159px] overflow-y-scroll"
                  ),
                  children: r.map(function (e, t) {
                    return (0, a.jsx)(
                      "div",
                      {
                        className: ""
                          .concat(0 === t ? "rounded-t-[12px]" : "")
                          .concat(
                            t === r.length - 1 ? "rounded-b-[12px]" : "",
                            " "
                          )
                          .concat(
                            g().option,
                            " bg-primary-white hover:bg-primary-blue flex items-center justify-start cursor-pointer h-[53px] w-full px-[23px]"
                          ),
                        onClick: function () {
                          !(function (e) {
                            m("filled"),
                              v(e),
                              i && i(e, k(e), o ? o.message : void 0),
                              w();
                          })(e);
                        },
                        children: (0, a.jsx)("span", {
                          className: "".concat(g().optionLabel),
                          children: e.description,
                        }),
                      },
                      "select-box-index-".concat(t)
                    );
                  }),
                }),
            ],
          });
        },
        y = s(10327),
        j = s(4632),
        v = s(24789),
        N = s(83516),
        w = s(25689),
        k = s(10208),
        C = s(96269),
        S = s(66986);
      function _(e, t, s, n, r, a, l) {
        try {
          var i = e[a](l),
            c = i.value;
        } catch (o) {
          return void s(o);
        }
        i.done ? t(c) : Promise.resolve(c).then(n, r);
      }
      function E(e, t) {
        return null != t &&
          "undefined" !== typeof Symbol &&
          t[Symbol.hasInstance]
          ? t[Symbol.hasInstance](e)
          : e instanceof t;
      }
      var L = function () {
        var e,
          t = (0, f.useRef)(!1),
          s = (0, d.Z)("common").t,
          n = (0, l.C)(function (e) {
            return e;
          }),
          c = n.reportmodal,
          h = n.waccount,
          g = c.collection,
          L = h.account,
          T = h.jwtToken,
          F = h.currentNetworkId,
          M = (0, l.T)(),
          I = (0, v.Ge)().connector,
          A = (0, f.useState)("disabled"),
          R = A[0],
          z = A[1],
          O = (0, f.useState)(),
          Z = O[0],
          B = O[1],
          U = (0, f.useState)(),
          P = U[0],
          D = U[1],
          H = (0, f.useState)(!1),
          V = H[0],
          W = H[1],
          Y = (0, f.useState)(),
          J = Y[0],
          G = Y[1],
          K = (0, f.useCallback)(function () {
            M((0, u.dp)(null)), M((0, u.nr)(!1));
          }, []),
          $ = (0, f.useCallback)(function () {
            (0, y.bf)((0, j.f)("getReportsList"))
              .then(function (e) {
                var s = e.data;
                t.current && D(s);
              })
              .catch(function (e) {
                console.log(e);
              });
          }, []),
          q = (0, f.useCallback)(
            ((e = r().mark(function e() {
              var t, s, n, a, l;
              return r().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((t = w.Dv(
                          k.Y0(
                            "report collection ".concat(
                              null === g || void 0 === g ? void 0 : g.address
                            )
                          )
                        )),
                        !E(I, N.zw))
                      ) {
                        e.next = 6;
                        break;
                      }
                      (s =
                        null === (n = I.walletConnectProvider) || void 0 === n
                          ? void 0
                          : n.connector.signPersonalMessage([t, L])),
                        (e.next = 21);
                      break;
                    case 6:
                      if (!E(I, S.J)) {
                        e.next = 15;
                        break;
                      }
                      return (e.next = 9), I.getProvider();
                    case 9:
                      return (
                        (a = e.sent),
                        (e.next = 12),
                        a.send("personal_sign", [t, L])
                      );
                    case 12:
                      (s = e.sent), (e.next = 21);
                      break;
                    case 15:
                      return (e.next = 17), new C.Q(window.ethereum);
                    case 17:
                      return (
                        (l = e.sent),
                        (e.next = 20),
                        l.send("personal_sign", [t, L])
                      );
                    case 20:
                      s = e.sent;
                    case 21:
                      return e.abrupt("return", s);
                    case 22:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })),
            function () {
              var t = this,
                s = arguments;
              return new Promise(function (n, r) {
                var a = e.apply(t, s);
                function l(e) {
                  _(a, n, r, l, i, "next", e);
                }
                function i(e) {
                  _(a, n, r, l, i, "throw", e);
                }
                l(void 0);
              });
            }),
            []
          );
        return (
          (0, f.useEffect)(function () {
            return (
              (t.current = !0),
              $(),
              function () {
                t.current = !1;
              }
            );
          }, []),
          (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)("div", {
              className: "".concat(
                o().overlay,
                " lg:flex lg:justify-center lg:items-center lg:fixed lg:top-0 lg:left-0 lg:w-full lg:h-full z-[30000]"
              ),
              children: (0, a.jsxs)("div", {
                className: "".concat(
                  o().reportModal,
                  " w-full h-[404px] fixed flex flex-col w-full bg-primary-white z-[20000] overflow-y-scroll rounded-t-[32px] py-[40px] px-[16px] text-center lg:relative lg:w-[520px] lg:rounded-[16px] lg:h-[auto] lg:p-[32px] lg:overflow-y-visible"
                ),
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "flex flex-col justify-center items-center mb-[27px] text-primary-blue",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "flex items-center justify-center w-[32px] h-[32px] mb-[16px]",
                        children: (0, a.jsx)("img", {
                          src: x.Z.src,
                          className: "w-[26px] h-[26px] cursor-pointer",
                          onClick: K,
                        }),
                      }),
                      (0, a.jsx)("h3", {
                        className: "text-xl font-semibold",
                        children: s("reportCollectionTitleLabel"),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex flex-col items-center justify-center",
                    children: [
                      g &&
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(m.Z, {
                              src: g.imageUrl ? g.imageUrl : p.Z.src,
                              statusVerification: g.statusVerification,
                              className: "w-[72px] h-[72px]",
                              badgeClassName: "w-[24px] h-[24px]",
                            }),
                            (0, a.jsx)("p", {
                              className:
                                "text-sm text-primary-dark-blue font-semibold text-center mt-[14px]",
                              children: g.name,
                            }),
                          ],
                        }),
                      (0, a.jsx)("p", {
                        className:
                          "text-xs font-semibold text-primary-dark-blue text-left mt-[46px]",
                        children: s("reportCollectionDescriptionLabel"),
                      }),
                      (0, a.jsxs)("div", {
                        className: "w-full mt-[24px]",
                        children: [
                          P &&
                            (0, a.jsx)(b, {
                              initialStatus: "uninitialized",
                              options: P,
                              onSelect: function (e, s, n) {
                                t.current && B(e),
                                  s
                                    ? t.current && (W(!0), G(n), z("disabled"))
                                    : t.current &&
                                      (W(!1), G(null), z("enabled"));
                              },
                              fireOnOption: {
                                message: (0, a.jsxs)("p", {
                                  children: [
                                    s("pleaseContactUsOneLabel"),
                                    " ",
                                    (0, a.jsx)("a", {
                                      href: "mailto:info@nfttrader.io",
                                      className: "hover:underline",
                                      target: "_blank",
                                      children: "info@nfttrader.io",
                                    }),
                                    " ",
                                    s("pleaseContactUsTwoLabel"),
                                    ".",
                                  ],
                                }),
                                optionNumber: "last",
                              },
                            }),
                          V &&
                            J &&
                            (0, a.jsx)("div", {
                              className:
                                "w-full text-left mt-[24px] text-xs font-semibold text-primary-dark-blue",
                              children: J,
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "flex flex-col mt-[56px] lg:flex-row-reverse lg:justify-between",
                    children:
                      "disabled" === R
                        ? (0, a.jsx)(i.Z, {
                            text: s("sendLabel"),
                            type: {
                              class: "primary",
                              icon: !1,
                              hasColoredBg: !1,
                            },
                            size: "large",
                            initialState: { state: "disabled" },
                            className: "capitalize",
                          })
                        : (0, a.jsx)("div", {
                            children: (0, a.jsx)(i.Z, {
                              text: s("sendLabel"),
                              type: {
                                class: "primary",
                                icon: !1,
                                hasColoredBg: !1,
                              },
                              size: "large",
                              initialState: { state: "default" },
                              onClick: function (e) {
                                !(function (e) {
                                  F &&
                                    g &&
                                    Z &&
                                    T &&
                                    (e("loading"),
                                    q()
                                      .then(function (t) {
                                        var s = {
                                          networkId: F,
                                          collectionAddress: g.address,
                                          reportId: Number(Z.id),
                                          rawSignature: t,
                                        };
                                        (0, y.jl)(
                                          (0, j.f)("reportCollection"),
                                          s,
                                          T
                                        )
                                          .then(function () {
                                            e("default"), K();
                                          })
                                          .catch(function (t) {
                                            console.log(t), e("default");
                                          });
                                      })
                                      .catch(function (t) {
                                        console.log(t), e("default");
                                      }));
                                })(e);
                              },
                              className: "capitalize",
                            }),
                          }),
                  }),
                ],
              }),
            }),
          })
        );
      };
    },
    21259: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return As;
        },
      });
      var n = s(8014),
        r = s(56168),
        a = s(27171),
        l = s(97968),
        i = s(53957),
        c = "/_next/static/media/chevron_down_white.9cf40c52.svg",
        o = "/_next/static/media/chevron_left.a1ae6c89.svg",
        d = s(27164),
        u = s(3621),
        x = "/_next/static/media/chevron_up.2a67ef90.svg",
        m = s(27536),
        p = s(62044),
        f = function (e) {
          var t = e.stepDescription,
            s = e.isClickable,
            r = void 0 !== s && s,
            a = e.isCurrent,
            l = void 0 !== a && a,
            i = e.isCompleted,
            c = void 0 !== i && i,
            o = e.index,
            d = e.onClick,
            u = e.className,
            x = (0, p.Z)("common").t;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)("span", {
                className: "flex justify-between items-center",
                children: [
                  (0, n.jsx)("span", {
                    className: ""
                      .concat(l ? "text-primary-dark-blue" : "", " ")
                      .concat(l || c ? "" : "text-primary-gray", " ")
                      .concat(
                        c && !l ? "text-primary-blue" : "",
                        " text-xl font-semibold mr-[18px]"
                      ),
                    children: "0".concat(o + 1),
                  }),
                  (0, n.jsx)("span", {
                    className: "text-base font-semibold "
                      .concat(l ? "text-primary-dark-blue" : "", " ")
                      .concat(r ? "cursor-pointer" : "", " ")
                      .concat(c && !l ? "text-primary-blue" : "", " ")
                      .concat(l || c ? "" : "text-primary-gray", " ")
                      .concat(u || ""),
                    onClick: d,
                    children: t,
                  }),
                ],
              }),
              c &&
                !l &&
                (0, n.jsxs)("span", {
                  className: "flex items-center",
                  children: [
                    (0, n.jsx)("span", {
                      className: "text-xxs text-primary-blue mr-[8px]",
                      children: x("completeLabel"),
                    }),
                    (0, n.jsx)("img", {
                      src: m.Z.src,
                      className: "w-[16px] h-[16px]",
                    }),
                  ],
                }),
            ],
          });
        },
        h = s(1259),
        g = s.n(h),
        b = function (e) {
          var t = e.stepperItems,
            s = (0, p.Z)("common").t,
            c = (0, l.C)(function (e) {
              return e;
            }).trademodal,
            o = (0, l.T)(),
            d = c.currentStepMenu,
            m = c.isStepperMenuListOpen,
            h = c.isDeleteTradeModalOpen,
            b = function () {
              o((0, a.tj)(!1));
            };
          return (
            (0, r.useEffect)(
              function () {
                if (m) {
                  var e = function () {
                    window.innerWidth > 1023 && b();
                  };
                  return (
                    e(),
                    window.addEventListener("resize", e),
                    function () {
                      window.removeEventListener("resize", e);
                    }
                  );
                }
              },
              [m]
            ),
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsxs)("section", {
                  className: "".concat(
                    g().stepperMenuList,
                    " fixed w-full h-full overflow-y-scroll z-10 bg-primary-white px-[16px]"
                  ),
                  children: [
                    (0, n.jsxs)("div", {
                      className: "".concat(g().mainContent),
                      children: [
                        (0, n.jsx)("div", {
                          className: "flex items-center w-full h-[72px]",
                          children: (0, n.jsx)("div", {
                            className:
                              "flex items-center justify-center rounded-full bg-primary-blue w-[40px] h-[40px] cursor-pointer hover:bg-primary-dark-blue",
                            onClick: b,
                            children: (0, n.jsx)("img", {
                              src: x,
                              className: "w-[16px] h-[16px]",
                            }),
                          }),
                        }),
                        (0, n.jsxs)("div", {
                          className: "w-full mt-[30px]",
                          children: [
                            (0, n.jsx)("h3", {
                              className:
                                "text-2xl font-semibold text-primary-blue",
                              children: s("completeStepLabel"),
                            }),
                            (0, n.jsx)("nav", {
                              className: "mt-[55px]",
                              children: (0, n.jsx)("ul", {
                                children: t.map(function (e, t) {
                                  return (0, n.jsx)(
                                    "li",
                                    {
                                      className:
                                        "flex items-center cursor-pointer mb-[32px]",
                                      children: (0, n.jsx)("div", {
                                        onClick: function (s) {
                                          t <= d &&
                                            d !== t &&
                                            (!(function (e) {
                                              0 === e
                                                ? (o((0, a.Bu)(null)),
                                                  o((0, a.bW)()),
                                                  o((0, a.C$)()),
                                                  o((0, a.MW)(!1)),
                                                  o((0, a.eF)(7)),
                                                  o((0, a.y4)(0)),
                                                  o((0, a.YM)(0)),
                                                  o((0, a.$J)(0)),
                                                  o((0, a.P$)(!1)),
                                                  o((0, a.sP)(!1)),
                                                  o((0, a.s7)(!0)),
                                                  o((0, a.JW)(!1)),
                                                  o((0, a.NL)(0)),
                                                  o((0, a.Dh)(!1)))
                                                : 1 === e
                                                ? (o((0, a.C$)()),
                                                  o((0, a.eF)(7)),
                                                  o((0, a.y4)(0)),
                                                  o((0, a.YM)(0)),
                                                  o((0, a.$J)(0)),
                                                  o((0, a.P$)(!1)),
                                                  o((0, a.sP)(!1)),
                                                  o((0, a.s7)(!0)),
                                                  o((0, a.JW)(!1)),
                                                  o((0, a.NL)(0)),
                                                  o((0, a.Dh)(!1)))
                                                : 2 === e &&
                                                  (o((0, a.eF)(7)),
                                                  o((0, a.y4)(0)),
                                                  o((0, a.YM)(0)),
                                                  o((0, a.$J)(0)),
                                                  o((0, a.P$)(!1)),
                                                  o((0, a.KC)()),
                                                  o((0, a.sP)(!1)),
                                                  o((0, a.s7)(!0)),
                                                  o((0, a.JW)(!1)),
                                                  o((0, a.NL)(0)),
                                                  o((0, a.Dh)(!1)));
                                            })(t),
                                            o((0, a.Um)(t)),
                                            e.onClick(s));
                                        },
                                        className:
                                          "flex justify-between w-full",
                                        children: (0, n.jsx)(
                                          f,
                                          {
                                            index: t,
                                            stepDescription: e.stepDescription,
                                            isClickable: t <= d,
                                            isCurrent: d === t,
                                            isCompleted: t <= d,
                                          },
                                          t
                                        ),
                                      }),
                                    },
                                    t
                                  );
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      children: (0, n.jsx)(u.Z, {
                        text: s("cancelTradeLabel"),
                        type: { class: "primary", icon: !1, hasColoredBg: !1 },
                        size: "large",
                        initialState: { state: "default" },
                        className: "relative bottom-[30px]",
                        onClick: function () {
                          o((0, a.xI)(!0));
                        },
                      }),
                    }),
                  ],
                }),
                h &&
                  (0, n.jsx)(i.Z, {
                    modalTitle: s("cancelTradeLabel"),
                    modalDescription: s(
                      "This will cancel all your current choices"
                    ),
                    action: function () {
                      document.body.classList.remove("no-scroll"),
                        o((0, a.r$)(!1)),
                        o((0, a.jO)()),
                        o((0, a.eV)(null)),
                        o((0, a.vg)(null)),
                        o((0, a.xI)(!1));
                    },
                    actionClose: function () {
                      o((0, a.xI)(!1));
                    },
                    buttonsText: [s("yesCancelItLabel"), s("dismissLabel")],
                    isOpen: !0,
                  }),
              ],
            })
          );
        },
        y = function (e) {
          var t = e.isClickable,
            s = void 0 !== t && t,
            r = e.isCurrent,
            a = void 0 !== r && r,
            l = e.onClick,
            i = e.className;
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsx)("div", {
              className: "w-[24px] h-[4px] md:w-[36px] "
                .concat(
                  s
                    ? "bg-primary-white cursor-pointer ".concat(
                        !a &&
                          "hover:shadow hover:shadow-sm hover:shadow-primary-white"
                      )
                    : "bg-primary-gray opacity-80",
                  " "
                )
                .concat(a ? "cursor-default" : "", " ")
                .concat(i || ""),
              onClick: function (e) {
                s && !a && l && l(e);
              },
            }),
          });
        },
        j = function (e) {
          var t = e.stepperItems,
            s = (0, l.C)(function (e) {
              return e;
            }).trademodal,
            r = (0, l.T)(),
            i = s.currentStepMenu,
            c = s.isApproving;
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                (0, n.jsx)("div", {
                  className: "flex items-center justify-center mr-[24px]",
                  children: t.map(function (e, t) {
                    return (0, n.jsx)(
                      y,
                      {
                        isClickable: t <= i,
                        isCurrent: i === t,
                        onClick: function (s) {
                          c ||
                            (!(function (e) {
                              0 === e
                                ? (r((0, a.Bu)(null)),
                                  r((0, a.bW)()),
                                  r((0, a.C$)()),
                                  r((0, a.MW)(!1)),
                                  r((0, a.eF)(7)),
                                  r((0, a.y4)(0)),
                                  r((0, a.YM)(0)),
                                  r((0, a.$J)(0)),
                                  r((0, a.P$)(!1)),
                                  r((0, a.sP)(!1)),
                                  r((0, a.s7)(!0)),
                                  r((0, a.JW)(!1)),
                                  r((0, a.NL)(0)),
                                  r((0, a.Dh)(!1)))
                                : 1 === e
                                ? (r((0, a.C$)()),
                                  r((0, a.eF)(7)),
                                  r((0, a.y4)(0)),
                                  r((0, a.YM)(0)),
                                  r((0, a.$J)(0)),
                                  r((0, a.P$)(!1)),
                                  r((0, a.sP)(!1)),
                                  r((0, a.s7)(!0)),
                                  r((0, a.JW)(!1)),
                                  r((0, a.NL)(0)),
                                  r((0, a.Dh)(!1)))
                                : 2 === e &&
                                  (r((0, a.eF)(7)),
                                  r((0, a.y4)(0)),
                                  r((0, a.YM)(0)),
                                  r((0, a.$J)(0)),
                                  r((0, a.P$)(!1)),
                                  r((0, a.KC)()),
                                  r((0, a.sP)(!1)),
                                  r((0, a.s7)(!0)),
                                  r((0, a.JW)(!1)),
                                  r((0, a.NL)(0)),
                                  r((0, a.Dh)(!1)));
                            })(t),
                            r((0, a.Um)(t)),
                            e.onClick(s));
                        },
                        className: "".concat(t > 0 ? "mx-[4px]" : "mr-[4px]"),
                      },
                      t
                    );
                  }),
                }),
                (0, n.jsxs)("div", {
                  className:
                    "hidden items-center lg:flex text-primary-white text-base font-semibold",
                  children: [
                    (0, n.jsx)("span", {
                      className: "text-xl font-semibold mr-[16px]",
                      children: "0".concat(i + 1),
                    }),
                    " ",
                    (0, n.jsx)("span", { children: t[i].stepDescription }),
                  ],
                }),
              ],
            }),
          });
        },
        v = s(5995),
        N = s.n(v),
        w = s(36226),
        k = s(5996),
        C = s(24789),
        S = s(95479),
        _ = s(63780),
        E = s.n(_),
        L = s(12683),
        T = s(41708),
        F = s(14647),
        M = function (e, t) {
          return (
            e.findIndex(function (e) {
              return 0 === e.collection.statusVerification;
            }) > -1 ||
            t.findIndex(function (e) {
              return 0 === e.collection.statusVerification;
            }) > -1
          );
        },
        I = function (e, t) {
          return (
            e.findIndex(function (e) {
              return 2 === e.collection.statusVerification;
            }) > -1 ||
            t.findIndex(function (e) {
              return 2 === e.collection.statusVerification;
            }) > -1
          );
        },
        A = function (e) {
          var t = e.stepperItems,
            s = e.mode,
            i = void 0 === s ? null : s,
            x = (0, p.Z)("common").t,
            m = (0, r.useRef)(!1),
            f = (0, r.useState)(!1),
            h = f[0],
            g = f[1],
            y = (0, r.useState)(!1),
            v = y[0],
            _ = y[1],
            A = (0, r.useState)(!1),
            R = A[0],
            z = A[1],
            O = (0, r.useState)(!1),
            Z = O[0],
            B = O[1],
            U = (0, l.C)(function (e) {
              return e;
            }),
            P = U.trademodal,
            D = U.waccount,
            H = (0, l.T)(),
            V = P.isStepperMenuListOpen,
            W = P.isDeleteTradeModalOpen,
            Y = P.canProceed,
            J = P.currentStepMenu,
            G = P.assetsCurrentlyApproved,
            K = P.assetsToApprove,
            $ = P.assetsAttemptsToApprove,
            q = P.who,
            Q = P.maker,
            X = P.taker,
            ee = (P.mode, P.replaceCollectorAddress),
            te = P.swapId,
            se = P.isErrorToCheckReportedAssets,
            ne = P.hasFinishedToCheckReportedAssets,
            re = P.existsReportedAsset,
            ae = D.currentNetworkId,
            le = D.account,
            ie = (0, C.Ge)().library,
            ce = function () {
              H((0, a.tj)(!0));
            },
            oe = function () {
              H((0, a._1)(!0));
            },
            de = function () {
              H((0, a._1)(!1));
            },
            ue = function (e, t) {
              if (ae) {
                var s = new (E())({
                  ethers: w,
                  web3Provider: ie,
                  network: (0, S.qe)(ae).toUpperCase(),
                });
                s.on("cancelSwapTransactionCreated", function () {
                  e("loading");
                }),
                  s.on("cancelSwapTransactionMined", function () {
                    e("default"),
                      document.body.classList.remove("no-scroll"),
                      H((0, a.r$)(!1)),
                      H((0, a.jO)()),
                      H((0, a.eV)(null)),
                      H((0, a.vg)(null));
                  }),
                  s.on("cancelSwapTransactionError", function () {
                    e("default");
                  }),
                  s.cancelSwap(t);
              }
            },
            xe = function (e) {
              if (!($ < K) && Q && Q.assets && X && X.assets && ae) {
                oe();
                var t = new (E())({
                    ethers: w,
                    web3Provider: ie,
                    network: (0, S.qe)(ae).toUpperCase(),
                  }).getNetworksAvailable()[(0, S.qe)(ae).toUpperCase()],
                  s = [],
                  n = ("maker" === e ? Q : X).assets;
                H(
                  (0, a.YM)(
                    n.filter(function (e) {
                      return e.isApproved;
                    }).length
                  )
                ),
                  H((0, a.P$)(!0)),
                  n
                    .filter(function (e) {
                      return !1 === e.isApproved;
                    })
                    .forEach(function (e) {
                      if (
                        -1 === s.indexOf(e.collection.address.toLowerCase())
                      ) {
                        s.push(e.collection.address.toLowerCase());
                        var n = new k.CH(
                          e.collection.address,
                          e.collection.abi,
                          ie
                        );
                        (n = n.connect(ie.getSigner(le))),
                          "ERC721" === e.type || "ERC1155" === e.type
                            ? n
                                .setApprovalForAll(t, !0)
                                .then(function (t) {
                                  t.wait()
                                    .then(function (t) {
                                      H(
                                        (0, a.cP)({
                                          id: void 0,
                                          contractAddress: e.collection.address,
                                          type: e.type,
                                          approved: !0,
                                        })
                                      );
                                    })
                                    .catch(function (t) {
                                      console.log("[wait tx error]"),
                                        console.error(t),
                                        H(
                                          (0, a.cP)({
                                            id: void 0,
                                            contractAddress:
                                              e.collection.address,
                                            type: e.type,
                                            approved: !1,
                                          })
                                        ),
                                        de();
                                    });
                                })
                                .catch(function (t) {
                                  console.log("[setApprovalForAll tx error]"),
                                    console.error(t),
                                    H(
                                      (0, a.cP)({
                                        id: void 0,
                                        contractAddress: e.collection.address,
                                        type: e.type,
                                        approved: !1,
                                      })
                                    ),
                                    de();
                                })
                            : n
                                .approve(t, e.amount)
                                .then(function (t) {
                                  t.wait()
                                    .then(function () {
                                      H(
                                        (0, a.cP)({
                                          id: void 0,
                                          contractAddress: e.collection.address,
                                          type: e.type,
                                          approved: !0,
                                        })
                                      );
                                    })
                                    .catch(function (t) {
                                      console.log("[wait tx error]"),
                                        console.error(t),
                                        H(
                                          (0, a.cP)({
                                            id: void 0,
                                            contractAddress:
                                              e.collection.address,
                                            type: e.type,
                                            approved: !1,
                                          })
                                        ),
                                        de();
                                    });
                                })
                                .catch(function (t) {
                                  console.log("[approve tx error]"),
                                    console.error(t),
                                    H(
                                      (0, a.cP)({
                                        id: void 0,
                                        contractAddress: e.collection.address,
                                        type: e.type,
                                        approved: !1,
                                      })
                                    ),
                                    de();
                                });
                      }
                    });
              }
            };
          return (
            (0, r.useEffect)(function () {
              return (
                (m.current = !0),
                function () {
                  m.current = !1;
                }
              );
            }, []),
            (0, r.useEffect)(
              function () {
                if (!V || W) {
                  var e = function () {
                    window.innerWidth < 1024 && W && ce();
                  };
                  return (
                    e(),
                    window.addEventListener("resize", e),
                    function () {
                      window.removeEventListener("resize", e);
                    }
                  );
                }
              },
              [V, W]
            ),
            (0, r.useEffect)(
              function () {
                3 === J &&
                  (G === K ? m.current && _(!0) : m.current && _(!1),
                  $ === K && (m.current && g(!1), H((0, a.P$)(!1))));
              },
              [G, J, K, $]
            ),
            (0, r.useEffect)(
              function () {
                J < 3 && H((0, a.Gu)());
              },
              [J]
            ),
            (0, r.useEffect)(
              function () {
                ee &&
                  "string" === typeof ee &&
                  ee.length > 0 &&
                  m.current &&
                  z(!0);
              },
              [ee]
            ),
            (0, r.useEffect)(
              function () {
                "number" === typeof te && m.current && B(!0);
              },
              [te]
            ),
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)("div", {
                  className: "".concat(
                    N().stepperMenu,
                    " flex justify-between items-center flex-w-full h-[72px] bg-primary-blue rounded-b-[40px] px-[16px] lg:h-[88px]"
                  ),
                  children:
                    J <= 3
                      ? (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsxs)("div", {
                              className: "flex",
                              children: [
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex items-center justify-center w-[40px] h-[40px] mr-[10px]",
                                  children: [
                                    "maker" === q &&
                                      (0, n.jsx)("img", {
                                        src: c,
                                        className:
                                          "w-[16px] h-[16px] cursor-pointer lg:hidden",
                                        onClick: ce,
                                      }),
                                    (0, n.jsx)("img", {
                                      src: d.Z.src,
                                      className:
                                        "w-[26px] h-[26px] cursor-pointer ".concat(
                                          "maker" === q ? "hidden lg:block" : ""
                                        ),
                                      onClick: function () {
                                        H((0, a.xI)(!0));
                                      },
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className: "flex items-center justify-center",
                                  children: [
                                    "maker" === q &&
                                      t &&
                                      null === i &&
                                      (0, n.jsx)(j, { stepperItems: t }),
                                    "maker" === q &&
                                      "VIEW_MAKER" === i &&
                                      (0, n.jsx)("h3", {
                                        className:
                                          "text-lg ml-[40px] text-primary-white font-semibold lg:text-xl",
                                        children: x("checkYourAssetsLabel"),
                                      }),
                                    "taker" === q &&
                                      (0, n.jsx)("h3", {
                                        className:
                                          "text-lg ml-[40px] text-primary-white font-semibold lg:text-xl",
                                        children: x(
                                          "doYouAcceptThisTradeLabel"
                                        ),
                                      }),
                                    "EDIT_TAKER" === i &&
                                      (0, n.jsx)("h3", {
                                        className:
                                          "text-lg ml-[40px] text-primary-white font-semibold lg:text-xl",
                                        children: x(
                                          "changeCounterpartyTraderLabel"
                                        ),
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              className: "flex items-center",
                              children:
                                null === i
                                  ? (0, n.jsxs)(n.Fragment, {
                                      children: [
                                        2 === J &&
                                          (0, n.jsx)(n.Fragment, {
                                            children: (0, n.jsx)(u.Z, {
                                              text: x("buyCryptoLabel"),
                                              initialState: {
                                                state: "default",
                                              },
                                              type: {
                                                class: "primary",
                                                hasColoredBg: !0,
                                                icon: !1,
                                              },
                                              size: "small",
                                              className:
                                                "lg:px-8 lg:py-4 mr-[15px] hidden sm:block",
                                              onClick: function () {
                                                H((0, F.gj)(!0));
                                              },
                                            }),
                                          }),
                                        J < 3
                                          ? (0, n.jsx)(n.Fragment, {
                                              children:
                                                !0 === Y
                                                  ? (0, n.jsx)(u.Z, {
                                                      text: x("proceedLabel"),
                                                      type: {
                                                        class: "primary",
                                                        hasColoredBg: !0,
                                                        icon: !0,
                                                      },
                                                      size: "small",
                                                      onClick: function () {
                                                        H((0, a.Um)(J + 1)),
                                                          H((0, a.MW)(!1));
                                                      },
                                                      initialState: {
                                                        state: "default",
                                                      },
                                                      iconSrc: o,
                                                      className:
                                                        "lg:px-8 lg:py-4",
                                                    })
                                                  : (0, n.jsx)("div", {
                                                      children: (0, n.jsx)(
                                                        u.Z,
                                                        {
                                                          text: x(
                                                            "proceedLabel"
                                                          ),
                                                          type: {
                                                            class: "primary",
                                                            hasColoredBg: !0,
                                                            icon: !0,
                                                          },
                                                          size: "small",
                                                          initialState: {
                                                            state: "disabled",
                                                          },
                                                          iconSrc: o,
                                                          className:
                                                            "lg:px-8 lg:py-4",
                                                        }
                                                      ),
                                                    }),
                                            })
                                          : (0, n.jsx)(n.Fragment, {
                                              children: v
                                                ? (0, n.jsx)(n.Fragment, {
                                                    children: ne
                                                      ? (0, n.jsx)("div", {
                                                          children: se
                                                            ? (0, n.jsx)(u.Z, {
                                                                text: x(
                                                                  "errorLabel"
                                                                ),
                                                                type: {
                                                                  class:
                                                                    "primary",
                                                                  hasColoredBg:
                                                                    !0,
                                                                  icon: !1,
                                                                },
                                                                size: "small",
                                                                initialState: {
                                                                  state:
                                                                    "disabled",
                                                                },
                                                                className:
                                                                  "lg:px-8 lg:py-4",
                                                              })
                                                            : (0, n.jsx)(
                                                                n.Fragment,
                                                                {
                                                                  children: re
                                                                    ? (0,
                                                                      n.jsx)(
                                                                        u.Z,
                                                                        {
                                                                          text: x(
                                                                            "tradeDisabledLabel"
                                                                          ),
                                                                          type: {
                                                                            class:
                                                                              "primary",
                                                                            hasColoredBg:
                                                                              !0,
                                                                            icon: !1,
                                                                          },
                                                                          size: "small",
                                                                          initialState:
                                                                            {
                                                                              state:
                                                                                "disabled",
                                                                            },
                                                                          className:
                                                                            "lg:px-8 lg:py-4",
                                                                        }
                                                                      )
                                                                    : (0,
                                                                      n.jsx)(
                                                                        u.Z,
                                                                        {
                                                                          text: x(
                                                                            "confirmLabel"
                                                                          ),
                                                                          type: {
                                                                            class:
                                                                              "primary",
                                                                            hasColoredBg:
                                                                              !0,
                                                                            icon: !1,
                                                                          },
                                                                          size: "small",
                                                                          onClick:
                                                                            function (
                                                                              e
                                                                            ) {
                                                                              if (
                                                                                (de(),
                                                                                (null ===
                                                                                  Q ||
                                                                                void 0 ===
                                                                                  Q
                                                                                  ? void 0
                                                                                  : Q.assets) &&
                                                                                  (null ===
                                                                                    X ||
                                                                                  void 0 ===
                                                                                    X
                                                                                    ? void 0
                                                                                    : X.assets))
                                                                              )
                                                                                if (
                                                                                  I(
                                                                                    Q.assets,
                                                                                    X.assets
                                                                                  )
                                                                                )
                                                                                  e(
                                                                                    "disabled"
                                                                                  );
                                                                                else {
                                                                                  var t =
                                                                                    M(
                                                                                      Q.assets,
                                                                                      X.assets
                                                                                    );
                                                                                  H(
                                                                                    t
                                                                                      ? (0,
                                                                                        a.AW)(
                                                                                          !0
                                                                                        )
                                                                                      : (0,
                                                                                        a.Um)(
                                                                                          J +
                                                                                            1
                                                                                        )
                                                                                  );
                                                                                }
                                                                            },
                                                                          initialState:
                                                                            {
                                                                              state:
                                                                                "default",
                                                                            },
                                                                          className:
                                                                            "lg:px-8 lg:py-4",
                                                                        }
                                                                      ),
                                                                }
                                                              ),
                                                        })
                                                      : (0, n.jsx)(u.Z, {
                                                          text: "filler",
                                                          type: {
                                                            class: "primary",
                                                            hasColoredBg: !0,
                                                            icon: !1,
                                                          },
                                                          size: "large",
                                                          initialState: {
                                                            state: "loading",
                                                          },
                                                          className:
                                                            "lg:px-8 lg:py-4",
                                                        }),
                                                  })
                                                : (0, n.jsx)(n.Fragment, {
                                                    children: h
                                                      ? (0, n.jsx)(n.Fragment, {
                                                          children: (0, n.jsx)(
                                                            "div",
                                                            {
                                                              children: (0,
                                                              n.jsx)(u.Z, {
                                                                text: (0,
                                                                n.jsxs)("div", {
                                                                  className:
                                                                    "flex items-center justify-center",
                                                                  children: [
                                                                    (0, n.jsx)(
                                                                      "span",
                                                                      {
                                                                        children:
                                                                          x(
                                                                            "approvingLabel"
                                                                          ),
                                                                      }
                                                                    ),
                                                                    (0, n.jsx)(
                                                                      "img",
                                                                      {
                                                                        src: L.Z
                                                                          .src,
                                                                        className:
                                                                          "".concat(
                                                                            N()
                                                                              .rotating,
                                                                            " w-[16px] h-[16px] ml-[9px]"
                                                                          ),
                                                                      }
                                                                    ),
                                                                  ],
                                                                }),
                                                                type: {
                                                                  class:
                                                                    "primary",
                                                                  hasColoredBg:
                                                                    !0,
                                                                  icon: !1,
                                                                },
                                                                size: "small",
                                                                onClick:
                                                                  function () {
                                                                    oe();
                                                                  },
                                                                initialState: {
                                                                  state:
                                                                    "default",
                                                                },
                                                                className:
                                                                  "lg:px-8 lg:py-4",
                                                              }),
                                                            }
                                                          ),
                                                        })
                                                      : (0, n.jsx)(n.Fragment, {
                                                          children: (0, n.jsx)(
                                                            u.Z,
                                                            {
                                                              text: x(
                                                                "approveLabel"
                                                              ),
                                                              type: {
                                                                class:
                                                                  "primary",
                                                                hasColoredBg:
                                                                  !0,
                                                                icon: !1,
                                                              },
                                                              size: "small",
                                                              onClick:
                                                                function () {
                                                                  "maker" === q
                                                                    ? (g(!0),
                                                                      xe(
                                                                        "maker"
                                                                      ))
                                                                    : "taker" ===
                                                                        q &&
                                                                      (g(!0),
                                                                      xe(
                                                                        "taker"
                                                                      ));
                                                                },
                                                              initialState: {
                                                                state:
                                                                  "default",
                                                              },
                                                              className:
                                                                "lg:px-8 lg:py-4",
                                                            }
                                                          ),
                                                        }),
                                                  }),
                                            }),
                                      ],
                                    })
                                  : (0, n.jsxs)(n.Fragment, {
                                      children: [
                                        "EDIT_TAKER" === i &&
                                          (0, n.jsx)(n.Fragment, {
                                            children: R
                                              ? (0, n.jsx)("div", {
                                                  children: (0, n.jsx)(u.Z, {
                                                    text: x("replaceLabel"),
                                                    type: {
                                                      class: "primary",
                                                      hasColoredBg: !0,
                                                      icon: !1,
                                                    },
                                                    size: "small",
                                                    onClick: function (e) {
                                                      e("disabled"),
                                                        (function (e) {
                                                          if (ae) {
                                                            var t = new (E())({
                                                              ethers: w,
                                                              web3Provider: ie,
                                                              network: (0,
                                                              S.qe)(
                                                                ae
                                                              ).toUpperCase(),
                                                            });
                                                            t.on(
                                                              "editTakerTransactionCreated",
                                                              function () {
                                                                m.current &&
                                                                  e("loading");
                                                              }
                                                            ),
                                                              t.on(
                                                                "editTakerTransactionMined",
                                                                function () {
                                                                  m.current &&
                                                                    e(
                                                                      "default"
                                                                    ),
                                                                    H(
                                                                      (0, a.Ky)(
                                                                        "TAKER_UPDATED"
                                                                      )
                                                                    );
                                                                }
                                                              ),
                                                              t.on(
                                                                "editTakerTransactionError",
                                                                function () {
                                                                  m.current &&
                                                                    e(
                                                                      "default"
                                                                    );
                                                                }
                                                              ),
                                                              t.editTaker(
                                                                te,
                                                                ee
                                                              );
                                                          }
                                                        })(e);
                                                    },
                                                    initialState: {
                                                      state: "default",
                                                    },
                                                    className:
                                                      "lg:px-8 lg:py-4",
                                                  }),
                                                })
                                              : (0, n.jsx)(u.Z, {
                                                  text: x("replaceLabel"),
                                                  type: {
                                                    class: "primary",
                                                    hasColoredBg: !0,
                                                    icon: !1,
                                                  },
                                                  size: "small",
                                                  initialState: {
                                                    state: "disabled",
                                                  },
                                                  className: "lg:px-8 lg:py-4",
                                                }),
                                          }),
                                        "VIEW_MAKER" === i &&
                                          (0, n.jsx)(n.Fragment, {
                                            children: Z
                                              ? (0, n.jsx)("div", {
                                                  children: (0, n.jsx)(u.Z, {
                                                    text: x("cancelDealLabel"),
                                                    type: {
                                                      class: "primary",
                                                      hasColoredBg: !0,
                                                      icon: !1,
                                                    },
                                                    size: "small",
                                                    onClick: function (e) {
                                                      te &&
                                                        (e("disabled"),
                                                        ue(e, te));
                                                    },
                                                    initialState: {
                                                      state: "default",
                                                    },
                                                    className:
                                                      "lg:px-8 lg:py-4",
                                                  }),
                                                })
                                              : (0, n.jsx)(u.Z, {
                                                  text: x("cancelDealLabel"),
                                                  type: {
                                                    class: "primary",
                                                    hasColoredBg: !0,
                                                    icon: !1,
                                                  },
                                                  size: "small",
                                                  initialState: {
                                                    state: "disabled",
                                                  },
                                                  className: "lg:px-8 lg:py-4",
                                                }),
                                          }),
                                      ],
                                    }),
                            }),
                          ],
                        })
                      : (0, n.jsx)(n.Fragment, {
                          children: (0, n.jsx)("div", {
                            className: "w-full flex justify-center",
                            children: (0, n.jsx)("img", {
                              src: T.Z.src,
                              className: "w-[170px] h-[auto] lg:w-[187px]",
                            }),
                          }),
                        }),
                }),
                V && t && (0, n.jsx)(b, { stepperItems: t }),
              ],
            })
          );
        },
        R = s(79838),
        z = s(66599),
        O = s.n(z),
        Z = s(72273);
      var B = function (e) {
          var t = e.isOpen,
            s = e.children,
            a = e.actionClose,
            l = (0, r.useState)(t),
            i = l[0],
            c = l[1];
          return (0, n.jsx)(n.Fragment, {
            children:
              i &&
              (0, n.jsxs)("section", {
                id: "scrollable-modal",
                className: "".concat(
                  O().mobileModal,
                  " fixed left-0 w-full h-full bg-primary-white px-[16px] py-[24px] z-[20] overflow-y-scroll lg:hidden"
                ),
                children: [
                  (0, n.jsx)("div", {
                    className: "flex items-center justify-center",
                    children: (0, n.jsx)("img", {
                      src: Z.Z.src,
                      className: "w-[32px] h-[32px] cursor-pointer",
                      onClick: function () {
                        var e, t;
                        c(!1),
                          (e = a),
                          (null != (t = Function) &&
                          "undefined" !== typeof Symbol &&
                          t[Symbol.hasInstance]
                            ? t[Symbol.hasInstance](e)
                            : e instanceof t) && a();
                      },
                    }),
                  }),
                  (0, n.jsx)("div", { className: "mt-[40px]", children: s }),
                ],
              }),
          });
        },
        U = s(1333),
        P = "/_next/static/media/smile_sad.b477c751.svg",
        D = "/_next/static/media/selected.26e5aed0.svg",
        H = "/_next/static/media/default.03e06f08.svg",
        V = "/_next/static/media/selected_hover.be6fee38.svg",
        W = "/_next/static/media/default_hover.0dfd2284.svg",
        Y = s(42662),
        J = s(29562),
        G = s(78561),
        K = s.n(G),
        $ = s(10327),
        q = s(4632),
        Q = s(34543),
        X = s(31672),
        ee = s(65588),
        te = s(64607),
        se = function (e) {
          var t = e.isModalOpen,
            s = e.actionClose,
            i = (0, p.Z)("common").t,
            c = (0, r.useRef)(!1),
            o = (0, r.useState)([]),
            d = o[0],
            u = o[1],
            x = (0, r.useState)([]),
            m = x[0],
            f = x[1],
            h = (0, r.useState)(0),
            g = h[0],
            b = h[1],
            y = (0, r.useState)(10),
            j = y[0],
            v = (y[1], (0, r.useState)(!1)),
            N = v[0],
            w = v[1],
            k = (0, r.useState)(0),
            C = k[0],
            S = k[1],
            _ = (0, r.useState)([]),
            E = _[0],
            L = _[1],
            T = (0, r.useState)([]),
            F = T[0],
            M = T[1],
            I = (0, r.useState)([]),
            A = I[0],
            R = I[1],
            z = (0, r.useState)([]),
            O = z[0],
            Z = z[1],
            G = (0, r.useState)(!1),
            se = G[0],
            ne = G[1],
            re = (0, r.useState)(!1),
            ae = re[0],
            le = re[1],
            ie = (0, l.C)(function (e) {
              return e;
            }),
            ce = ie.trademodal,
            oe = ie.waccount,
            de = (0, l.T)(),
            ue = ce.currentStepMenu,
            xe = ce.mode,
            me = oe.currentNetworkId,
            pe = oe.account,
            fe = oe.jwtToken,
            he = function (e) {
              if (e && "response" in e && "undefined" !== typeof e.response) {
                var t = e.response.status;
                401 === t
                  ? (de((0, a.jO)()),
                    de((0, a.r$)(!1)),
                    de((0, X.up)(!0)),
                    de((0, X.kt)()),
                    (0, ee.uM)({
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
                    }))
                  : 500 === t &&
                    (console.log("backend error.."), console.error(e));
              } else console.error(e);
            },
            ge = function (e, t) {
              F.indexOf(e.address) > -1 ||
                (me &&
                  fe &&
                  (c.current && M(F.concat([e.address])),
                  (0, $.U3)(
                    (0, q.f)("deleteFavouriteUser"),
                    { networkId: me.toString(), userFavourite: e.address },
                    fe
                  )
                    .then(function (s) {
                      var n = JSON.parse(JSON.stringify(F));
                      (n = n.splice(n.indexOf(e.address), 1)),
                        c.current && M(n);
                      var r = t
                        ? JSON.parse(JSON.stringify(A))
                        : JSON.parse(JSON.stringify(O));
                      (r[
                        r.findIndex(function (t) {
                          return t.id.toLowerCase() === e.address.toLowerCase();
                        })
                      ].selected = !1),
                        c.current && (t ? R(r) : Z(r));
                    })
                    .catch(function (t) {
                      var s = JSON.parse(JSON.stringify(F));
                      (s = s.splice(s.indexOf(e.address), 1)),
                        c.current && M(s),
                        he(t);
                    })));
            },
            be = function (e, t) {
              E.indexOf(e.address) > -1 ||
                (me &&
                  fe &&
                  (c.current && L(E.concat([e.address])),
                  (0, $.jl)(
                    (0, q.f)("addFavouriteUser"),
                    { networkId: me.toString(), userFavourite: e.address },
                    fe
                  )
                    .then(function (s) {
                      var n = JSON.parse(JSON.stringify(E));
                      (n = n.splice(n.indexOf(e.address), 1)),
                        c.current && L(n);
                      var r = t
                        ? JSON.parse(JSON.stringify(A))
                        : JSON.parse(JSON.stringify(O));
                      (r[
                        r.findIndex(function (t) {
                          return t.id.toLowerCase() === e.address.toLowerCase();
                        })
                      ].selected = !0),
                        c.current && (t ? R(r) : Z(r));
                    })
                    .catch(function (t) {
                      var s = JSON.parse(JSON.stringify(E));
                      (s = s.splice(s.indexOf(e.address), 1)),
                        c.current && L(s),
                        he(t);
                    })));
            },
            ye = function (e, t) {
              var s = t.find(function (t) {
                return t.id.toLowerCase() === e.toLowerCase();
              });
              return !!s && s.selected;
            },
            je = function () {
              var e = [];
              c.current && ne(!0),
                me && pe && (e = [me.toString(), g.toString(), j.toString()]),
                fe
                  ? (0, $.Vd)((0, q.f)("getFavouriteUsers", e), fe)
                      .then(function (e) {
                        var t = e.data[0],
                          s = t.count,
                          n = t.rows,
                          r = new Array();
                        n.forEach(function (e) {
                          r.push({ id: e.address, selected: !0 });
                        }),
                          c.current && S(s),
                          0 === d.length
                            ? c.current && (u(n), R(r))
                            : c.current && (u(d.concat(n)), R(A.concat(r))),
                          c.current && ne(!1);
                      })
                      .catch(function (e) {
                        he(e), c.current && ne(!1);
                      })
                  : c.current && ne(!1);
            };
          return (
            (0, r.useEffect)(function () {
              return (
                (c.current = !0),
                function () {
                  c.current = !1;
                }
              );
            }, []),
            (0, r.useEffect)(
              function () {
                C > d.length
                  ? c.current && (b(g + 10), w(!0))
                  : c.current && w(!1);
              },
              [d]
            ),
            (0, r.useEffect)(function () {
              je(),
                (function () {
                  var e = [];
                  c.current && le(!0),
                    me && (e = [me.toString()]),
                    fe
                      ? (0, $.Vd)((0, q.f)("getPastCollectors", e), fe)
                          .then(function (e) {
                            var t = e.data,
                              s = new Array();
                            t.forEach(function (e) {
                              s.push({ id: e.address, selected: !1 });
                            }),
                              0 === m.length
                                ? c.current && (f(t), Z(s))
                                : c.current && (f(m.concat(t)), Z(O.concat(s))),
                              c.current && le(!1);
                          })
                          .catch(function (e) {
                            he(e), c.current && le(!1);
                          })
                      : c.current && le(!1);
                })();
            }, []),
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(B, {
                  isOpen: t,
                  actionClose: s,
                  children: (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("h4", {
                        className:
                          "text-lg font-semibold text-primary-dark-blue",
                        children: i("favouriteTradersLabel"),
                      }),
                      (0, n.jsxs)("div", {
                        className: "mt-[24px]",
                        children: [
                          d &&
                            0 === d.length &&
                            !se &&
                            (0, n.jsx)(n.Fragment, {
                              children: (0, n.jsxs)("div", {
                                className:
                                  "flex flex-col justify-center items-center p-[16px]",
                                children: [
                                  (0, n.jsx)("img", {
                                    src: U.Z.src,
                                    className: "w-[64px] h-[64px]",
                                  }),
                                  (0, n.jsx)("p", {
                                    className:
                                      "rubik text-base font-light text-center text-primary-dark-blue w-[256px] mt-[16px]",
                                    children: i("favouriteBookmarkedLabel"),
                                  }),
                                ],
                              }),
                            }),
                          (0, n.jsx)(n.Fragment, {
                            children:
                              se &&
                              (0, n.jsx)(n.Fragment, {
                                children: (0, n.jsx)("div", {
                                  className:
                                    "flex items-center justify-center w-full h-full",
                                  children: (0, n.jsx)(te.Z, {
                                    isWhite: !1,
                                    className: "w-[30px] h-[30px]",
                                  }),
                                }),
                              }),
                          }),
                          d &&
                            d.length > 0 &&
                            (0, n.jsx)(n.Fragment, {
                              children: (0, n.jsx)("div", {
                                id: "favorites-scrollable",
                                children: (0, n.jsx)("ul", {
                                  children: (0, n.jsx)(Q.Z, {
                                    dataLength: d.length,
                                    next: je,
                                    hasMore: N,
                                    loader: (0, n.jsx)("div", {
                                      className:
                                        "flex justify-center items-center",
                                      children: (0, n.jsx)(te.Z, {
                                        isWhite: !1,
                                        className: "w-[24px] h-[24px]",
                                      }),
                                    }),
                                    scrollableTarget: "favorites-scrollable",
                                    style: { overflow: "initial" },
                                    children: d.map(function (e, t) {
                                      return (0, n.jsx)(
                                        "li",
                                        {
                                          className:
                                            "block cursor-pointer h-[36px] ".concat(
                                              t < d.length - 1
                                                ? "mb-[22px]"
                                                : "",
                                              " hover:bg-[#f3f3f3] hover:rounded-[3px]"
                                            ),
                                          onClick: function () {
                                            null === xe
                                              ? (de((0, a.Bu)(e)),
                                                de((0, a.Um)(ue + 1)),
                                                de((0, a.MW)(!1)))
                                              : de((0, a.N0)(e.address));
                                          },
                                          children: (0, n.jsxs)("div", {
                                            className:
                                              "flex h-full justify-between",
                                            children: [
                                              (0, n.jsxs)("div", {
                                                className:
                                                  "flex items-center h-full",
                                                children: [
                                                  (0, n.jsx)(Y.Z, {
                                                    address: e.address,
                                                    src: e.imageUrl
                                                      ? e.imageUrl
                                                      : "",
                                                    isNFT: e.isNft,
                                                    className: "mr-[16px]",
                                                    sizesClassNames:
                                                      "w-[32px] h-[32px]",
                                                    jazziconSize: {
                                                      defaultSize: 32,
                                                      breakpoints: [],
                                                      sizes: [],
                                                    },
                                                  }),
                                                  (0, n.jsxs)("div", {
                                                    className:
                                                      "flex flex-col justify-center",
                                                    children: [
                                                      (0, n.jsx)("span", {
                                                        className:
                                                          "text-sm font-semibold text-primary-dark-blue",
                                                        children: e.username
                                                          ? "@".concat(
                                                              e.username
                                                            )
                                                          : (0, n.jsx)(
                                                              n.Fragment,
                                                              {
                                                                children: (0,
                                                                n.jsx)("span", {
                                                                  className:
                                                                    "text-primary-gray rubik text-xs",
                                                                  children: i(
                                                                    "usernameNotSetLabel"
                                                                  ),
                                                                }),
                                                              }
                                                            ),
                                                      }),
                                                      (0, n.jsx)("span", {
                                                        className:
                                                          "rubik text-xs font-regular text-primary-gray",
                                                        children: (0, J.N)(
                                                          e.address
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, n.jsx)("div", {
                                                className:
                                                  "flex justify-center items-center h-full",
                                                children: (0, n.jsx)("div", {
                                                  className:
                                                    "flex justify-center items-center w-[24px] h-[24px]",
                                                  children: ye(e.address, A)
                                                    ? (0, n.jsx)("img", {
                                                        src: D,
                                                        className:
                                                          "w-[16px] h-[16px] cursor-pointer",
                                                        onClick: function (t) {
                                                          t.stopPropagation(),
                                                            ge(e, !0);
                                                        },
                                                        onMouseEnter: function (
                                                          e
                                                        ) {
                                                          e.target.src = V;
                                                        },
                                                        onMouseLeave: function (
                                                          e
                                                        ) {
                                                          e.target.src = D;
                                                        },
                                                      })
                                                    : (0, n.jsx)("img", {
                                                        src: H,
                                                        className:
                                                          "w-[16px] h-[16px] cursor-pointer",
                                                        onClick: function (t) {
                                                          t.stopPropagation(),
                                                            be(e, !0);
                                                        },
                                                        onMouseEnter: function (
                                                          e
                                                        ) {
                                                          e.target.src = W;
                                                        },
                                                        onMouseLeave: function (
                                                          e
                                                        ) {
                                                          e.target.src = H;
                                                        },
                                                      }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        },
                                        "favourite-item-".concat(t)
                                      );
                                    }),
                                  }),
                                }),
                              }),
                            }),
                        ],
                      }),
                      (0, n.jsx)("h4", {
                        className:
                          "text-lg font-semibold text-primary-dark-blue mt-[52px]",
                        children: i("previousTradersLabel"),
                      }),
                      (0, n.jsxs)("div", {
                        className: "mt-[24px]",
                        children: [
                          m &&
                            0 === m.length &&
                            !ae &&
                            (0, n.jsx)(n.Fragment, {
                              children: (0, n.jsxs)("div", {
                                className:
                                  "flex flex-col justify-center items-center p-[16px]",
                                children: [
                                  (0, n.jsx)("img", {
                                    src: P,
                                    className: "w-[64px] h-[64px]",
                                  }),
                                  (0, n.jsx)("p", {
                                    className:
                                      "rubik text-base font-light text-center text-primary-dark-blue w-[256px] mt-[16px]",
                                    children: i("notTradeCreatedYetLabel"),
                                  }),
                                ],
                              }),
                            }),
                          (0, n.jsx)(n.Fragment, {
                            children:
                              ae &&
                              (0, n.jsx)(n.Fragment, {
                                children: (0, n.jsx)("div", {
                                  className:
                                    "flex items-center justify-center w-full h-full",
                                  children: (0, n.jsx)(te.Z, {
                                    isWhite: !1,
                                    className: "w-[30px] h-[30px]",
                                  }),
                                }),
                              }),
                          }),
                          m &&
                            m.length > 0 &&
                            (0, n.jsx)(n.Fragment, {
                              children: (0, n.jsx)("div", {
                                children: (0, n.jsx)("ul", {
                                  children: m.map(function (e, t) {
                                    return (0, n.jsx)(
                                      "li",
                                      {
                                        className:
                                          "block cursor-pointer h-[36px] ".concat(
                                            t < m.length - 1 ? "mb-[22px]" : "",
                                            " hover:bg-[#f3f3f3] hover:rounded-[3px]"
                                          ),
                                        onClick: function () {
                                          null === xe
                                            ? (de((0, a.Bu)(e)),
                                              de((0, a.Um)(ue + 1)),
                                              de((0, a.MW)(!1)))
                                            : de((0, a.N0)(e.address));
                                        },
                                        children: (0, n.jsxs)("div", {
                                          className:
                                            "flex h-full justify-between",
                                          children: [
                                            (0, n.jsxs)("div", {
                                              className:
                                                "flex items-center h-full",
                                              children: [
                                                (0, n.jsx)(Y.Z, {
                                                  address: e.address,
                                                  src: e.imageUrl
                                                    ? e.imageUrl
                                                    : "",
                                                  isNFT: e.isNft,
                                                  className: "mr-[16px]",
                                                  sizesClassNames:
                                                    "w-[32px] h-[32px]",
                                                  jazziconSize: {
                                                    defaultSize: 32,
                                                    breakpoints: [],
                                                    sizes: [],
                                                  },
                                                }),
                                                (0, n.jsxs)("div", {
                                                  className:
                                                    "flex flex-col justify-center",
                                                  children: [
                                                    (0, n.jsx)("span", {
                                                      className:
                                                        "text-sm font-semibold text-primary-dark-blue",
                                                      children: e.username
                                                        ? "@".concat(e.username)
                                                        : (0, n.jsx)(
                                                            n.Fragment,
                                                            {
                                                              children: (0,
                                                              n.jsx)("span", {
                                                                className:
                                                                  "text-primary-gray rubik text-xs",
                                                                children: i(
                                                                  "usernameNotSetLabel"
                                                                ),
                                                              }),
                                                            }
                                                          ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className:
                                                        "rubik text-xs font-regular text-primary-gray",
                                                      children: (0, J.N)(
                                                        e.address
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, n.jsx)("div", {
                                              className:
                                                "flex justify-center items-center h-full",
                                              children: (0, n.jsx)("div", {
                                                className:
                                                  "flex justify-center items-center w-[24px] h-[24px]",
                                                children: ye(e.address, O)
                                                  ? (0, n.jsx)("img", {
                                                      src: D,
                                                      className:
                                                        "w-[16px] h-[16px] cursor-pointer",
                                                      onClick: function (t) {
                                                        t.stopPropagation(),
                                                          ge(e, !1);
                                                      },
                                                      onMouseEnter: function (
                                                        e
                                                      ) {
                                                        e.target.src = V;
                                                      },
                                                      onMouseLeave: function (
                                                        e
                                                      ) {
                                                        e.target.src = D;
                                                      },
                                                    })
                                                  : (0, n.jsx)("img", {
                                                      src: H,
                                                      className:
                                                        "w-[16px] h-[16px] cursor-pointer",
                                                      onClick: function (t) {
                                                        t.stopPropagation(),
                                                          be(e, !1);
                                                      },
                                                      onMouseEnter: function (
                                                        e
                                                      ) {
                                                        e.target.src = W;
                                                      },
                                                      onMouseLeave: function (
                                                        e
                                                      ) {
                                                        e.target.src = H;
                                                      },
                                                    }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      },
                                      "favourite-item-".concat(t)
                                    );
                                  }),
                                }),
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, n.jsxs)("section", {
                  className: "hidden lg:block",
                  children: [
                    (0, n.jsx)("h4", {
                      className:
                        "text-base font-semibold text-primary-dark-blue",
                      children: i("favouriteTradersLabel"),
                    }),
                    (0, n.jsxs)("div", {
                      className: "mt-[24px]",
                      children: [
                        d &&
                          0 === d.length &&
                          !se &&
                          (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsxs)("div", {
                              className:
                                "flex flex-col justify-center items-center p-[16px]",
                              children: [
                                (0, n.jsx)("img", {
                                  src: U.Z.src,
                                  className: "w-[64px] h-[64px]",
                                }),
                                (0, n.jsx)("p", {
                                  className:
                                    "rubik text-base font-light text-center text-primary-dark-blue mt-[16px]",
                                  children: i("favouriteBookmarkedLabel"),
                                }),
                              ],
                            }),
                          }),
                        (0, n.jsx)(n.Fragment, {
                          children:
                            se &&
                            (0, n.jsx)(n.Fragment, {
                              children: (0, n.jsx)("div", {
                                className:
                                  "flex items-center justify-center w-full h-[250px]",
                                children: (0, n.jsx)(te.Z, {
                                  isWhite: !1,
                                  className: "w-[30px] h-[30px]",
                                }),
                              }),
                            }),
                        }),
                        d &&
                          d.length > 0 &&
                          (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsx)("div", {
                              className: "".concat(
                                K().scrollbar,
                                " h-[268px] overflow-y-scroll"
                              ),
                              children: (0, n.jsx)("ul", {
                                children: (0, n.jsx)(Q.Z, {
                                  dataLength: d.length,
                                  next: je,
                                  hasMore: N,
                                  loader: (0, n.jsx)("div", {
                                    className:
                                      "flex justify-center items-center",
                                    children: (0, n.jsx)(te.Z, {
                                      isWhite: !1,
                                      className: "w-[24px] h-[24px]",
                                    }),
                                  }),
                                  scrollableTarget: "favorites-scrollable",
                                  style: { overflow: "initial" },
                                  children: d.map(function (e, t) {
                                    return (0, n.jsx)(
                                      "li",
                                      {
                                        className:
                                          "block cursor-pointer h-[36px] ".concat(
                                            t < d.length - 1 ? "mb-[22px]" : "",
                                            " hover:bg-[#f3f3f3] hover:rounded-[3px]"
                                          ),
                                        onClick: function () {
                                          null === xe
                                            ? (de((0, a.Bu)(e)),
                                              de((0, a.Um)(ue + 1)),
                                              de((0, a.MW)(!1)))
                                            : de((0, a.N0)(e.address));
                                        },
                                        children: (0, n.jsxs)("div", {
                                          className:
                                            "flex h-full justify-between",
                                          children: [
                                            (0, n.jsxs)("div", {
                                              className:
                                                "flex items-center h-full",
                                              children: [
                                                (0, n.jsx)(Y.Z, {
                                                  address: e.address,
                                                  src: e.imageUrl
                                                    ? e.imageUrl
                                                    : "",
                                                  isNFT: e.isNft,
                                                  className: "mr-[16px]",
                                                  sizesClassNames:
                                                    "w-[32px] h-[32px]",
                                                  jazziconSize: {
                                                    defaultSize: 32,
                                                    breakpoints: [],
                                                    sizes: [],
                                                  },
                                                }),
                                                (0, n.jsxs)("div", {
                                                  className:
                                                    "flex flex-col justify-center",
                                                  children: [
                                                    (0, n.jsx)("span", {
                                                      className:
                                                        "text-sm font-semibold text-primary-dark-blue",
                                                      children: e.username
                                                        ? "@".concat(e.username)
                                                        : (0, n.jsx)(
                                                            n.Fragment,
                                                            {
                                                              children: (0,
                                                              n.jsx)("span", {
                                                                className:
                                                                  "text-primary-gray rubik text-xs",
                                                                children: i(
                                                                  "usernameNotSetLabel"
                                                                ),
                                                              }),
                                                            }
                                                          ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className:
                                                        "rubik text-xs font-regular text-primary-gray",
                                                      children: (0, J.N)(
                                                        e.address
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, n.jsx)("div", {
                                              className:
                                                "flex justify-center items-center h-full",
                                              children: (0, n.jsx)("div", {
                                                className:
                                                  "flex justify-center items-center w-[24px] h-[24px]",
                                                children: ye(e.address, A)
                                                  ? (0, n.jsx)("img", {
                                                      src: D,
                                                      className:
                                                        "w-[16px] h-[16px] cursor-pointer",
                                                      onClick: function (t) {
                                                        t.stopPropagation(),
                                                          ge(e, !0);
                                                      },
                                                      onMouseEnter: function (
                                                        e
                                                      ) {
                                                        e.target.src = V;
                                                      },
                                                      onMouseLeave: function (
                                                        e
                                                      ) {
                                                        e.target.src = D;
                                                      },
                                                    })
                                                  : (0, n.jsx)("img", {
                                                      src: H,
                                                      className:
                                                        "w-[16px] h-[16px] cursor-pointer",
                                                      onClick: function (t) {
                                                        t.stopPropagation(),
                                                          be(e, !0);
                                                      },
                                                      onMouseEnter: function (
                                                        e
                                                      ) {
                                                        e.target.src = W;
                                                      },
                                                      onMouseLeave: function (
                                                        e
                                                      ) {
                                                        e.target.src = H;
                                                      },
                                                    }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      },
                                      "favourite-item-".concat(t)
                                    );
                                  }),
                                }),
                              }),
                            }),
                          }),
                      ],
                    }),
                    (0, n.jsx)("h4", {
                      className:
                        "text-base font-semibold text-primary-dark-blue mt-[52px]",
                      children: i("previousTradersLabel"),
                    }),
                    (0, n.jsxs)("div", {
                      className: "mt-[24px]",
                      children: [
                        m &&
                          0 === m.length &&
                          !ae &&
                          (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsxs)("div", {
                              className:
                                "flex flex-col justify-center items-center p-[16px]",
                              children: [
                                (0, n.jsx)("img", {
                                  src: P,
                                  className: "w-[64px] h-[64px]",
                                }),
                                (0, n.jsx)("p", {
                                  className:
                                    "rubik text-base font-light text-center text-primary-dark-blue mt-[16px]",
                                  children: i("notTradeCreatedYetLabel"),
                                }),
                              ],
                            }),
                          }),
                        (0, n.jsx)(n.Fragment, {
                          children:
                            ae &&
                            (0, n.jsx)(n.Fragment, {
                              children: (0, n.jsx)("div", {
                                className:
                                  "flex items-center justify-center w-full h-[250px]",
                                children: (0, n.jsx)(te.Z, {
                                  isWhite: !1,
                                  className: "w-[30px] h-[30px]",
                                }),
                              }),
                            }),
                        }),
                        m &&
                          m.length > 0 &&
                          (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsx)("div", {
                              className: "".concat(
                                K().scrollbar,
                                " h-[268px] overflow-y-scroll"
                              ),
                              children: (0, n.jsx)("ul", {
                                children: m.map(function (e, t) {
                                  return (0, n.jsx)(
                                    "li",
                                    {
                                      className:
                                        "block cursor-pointer h-[36px] ".concat(
                                          t < m.length - 1 ? "mb-[22px]" : "",
                                          " hover:bg-[#f3f3f3] hover:rounded-[3px]"
                                        ),
                                      onClick: function () {
                                        null === xe
                                          ? (de((0, a.Bu)(e)),
                                            de((0, a.Um)(ue + 1)),
                                            de((0, a.MW)(!1)))
                                          : de((0, a.N0)(e.address));
                                      },
                                      children: (0, n.jsxs)("div", {
                                        className:
                                          "flex h-full justify-between",
                                        children: [
                                          (0, n.jsxs)("div", {
                                            className:
                                              "flex items-center h-full",
                                            children: [
                                              (0, n.jsx)(Y.Z, {
                                                address: e.address,
                                                src: e.imageUrl
                                                  ? e.imageUrl
                                                  : "",
                                                isNFT: e.isNft,
                                                className: "mr-[16px]",
                                                sizesClassNames:
                                                  "w-[32px] h-[32px]",
                                                jazziconSize: {
                                                  defaultSize: 32,
                                                  breakpoints: [],
                                                  sizes: [],
                                                },
                                              }),
                                              (0, n.jsxs)("div", {
                                                className:
                                                  "flex flex-col justify-center",
                                                children: [
                                                  (0, n.jsx)("span", {
                                                    className:
                                                      "text-sm font-semibold text-primary-dark-blue",
                                                    children: e.username
                                                      ? "@".concat(e.username)
                                                      : (0, n.jsx)(n.Fragment, {
                                                          children: (0, n.jsx)(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-primary-gray rubik text-xs",
                                                              children: i(
                                                                "usernameNotSetLabel"
                                                              ),
                                                            }
                                                          ),
                                                        }),
                                                  }),
                                                  (0, n.jsx)("span", {
                                                    className:
                                                      "rubik text-xs font-regular text-primary-gray",
                                                    children: (0, J.N)(
                                                      e.address
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, n.jsx)("div", {
                                            className:
                                              "flex justify-center items-center h-full",
                                            children: (0, n.jsx)("div", {
                                              className:
                                                "flex justify-center items-center w-[24px] h-[24px]",
                                              children: ye(e.address, O)
                                                ? (0, n.jsx)("img", {
                                                    src: D,
                                                    className:
                                                      "w-[16px] h-[16px] cursor-pointer",
                                                    onClick: function (t) {
                                                      t.stopPropagation(),
                                                        ge(e, !1);
                                                    },
                                                    onMouseEnter: function (e) {
                                                      e.target.src = V;
                                                    },
                                                    onMouseLeave: function (e) {
                                                      e.target.src = D;
                                                    },
                                                  })
                                                : (0, n.jsx)("img", {
                                                    src: H,
                                                    className:
                                                      "w-[16px] h-[16px] cursor-pointer",
                                                    onClick: function (t) {
                                                      t.stopPropagation(),
                                                        be(e, !1);
                                                    },
                                                    onMouseEnter: function (e) {
                                                      e.target.src = W;
                                                    },
                                                    onMouseLeave: function (e) {
                                                      e.target.src = H;
                                                    },
                                                  }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    },
                                    "favourite-item-".concat(t)
                                  );
                                }),
                              }),
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        ne = function (e) {
          var t = e.isCurrent,
            s = e.children;
          return (0, n.jsx)(n.Fragment, { children: t && s });
        },
        re = function (e) {
          var t = e.address,
            s = e.username,
            i = e.avatar,
            c = e.isFavourite,
            o = e.isRegistered,
            d = e.className,
            u = e.onClick,
            x = (e.onChange, e.isSelected),
            m = void 0 !== x && x,
            f = e.onFavourite,
            h = (0, p.Z)("common").t,
            g = (0, r.useRef)(!1),
            b = (0, r.useState)(c),
            y = b[0],
            j = b[1],
            v = (0, r.useState)([]),
            N = v[0],
            w = v[1],
            k = (0, r.useState)([]),
            C = k[0],
            S = k[1],
            _ = (0, l.T)(),
            E = (0, l.C)(function (e) {
              return e;
            }).waccount,
            L = E.jwtToken,
            T = E.currentNetworkId,
            F = function (e) {
              if (e && "response" in e && "undefined" !== typeof e.response) {
                var t = e.response.status;
                401 === t
                  ? (_((0, a.jO)()),
                    _((0, a.r$)(!1)),
                    _((0, X.up)(!0)),
                    _((0, X.kt)()),
                    (0, ee.uM)({
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
                    }))
                  : 500 === t &&
                    (console.log("backend error.."), console.error(e));
              } else console.error(e);
            };
          return (
            (0, r.useEffect)(function () {
              return (
                (g.current = !0),
                function () {
                  g.current = !1;
                }
              );
            }, []),
            (0, n.jsx)(n.Fragment, {
              children: (0, n.jsxs)("article", {
                className:
                  "flex items-center justify-between w-full h-[80px] rounded-[80px] border-[1px] border-solid cursor-pointer px-[32px] hover:border-primary-blue "
                    .concat(
                      m
                        ? "border-primary-blue"
                        : "border-[rgba(151, 157, 172, 0.4)]",
                      " "
                    )
                    .concat(d),
                onClick: function (e) {
                  u && u(e);
                },
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex flex-col justify-center",
                    children: [
                      (0, n.jsxs)("span", {
                        className:
                          "text-primary-dark-blue text-base font-semibold",
                        children: [
                          (0, n.jsx)("span", {
                            className: "lg:hidden",
                            children: (0, J.x)(t),
                          }),
                          (0, n.jsx)("span", {
                            className: "hidden lg:inline",
                            children: t,
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex justify-start items-center",
                        children: [
                          (0, n.jsx)(Y.Z, {
                            address: t,
                            src: i.imageSrc,
                            isNFT: i.isNFT,
                            className: "mr-[8px]",
                            sizesClassNames: "w-[24px] h-[24px]",
                            jazziconSize: {
                              defaultSize: 24,
                              breakpoints: [],
                              sizes: [],
                            },
                          }),
                          (0, n.jsx)("span", {
                            className:
                              "mr-[8px] text-base font-semibold text-primary-dark-blue",
                            children:
                              1 === o
                                ? (0, n.jsx)(n.Fragment, {
                                    children: s
                                      ? "@".concat(s)
                                      : (0, n.jsx)(n.Fragment, {
                                          children: (0, n.jsx)("span", {
                                            className:
                                              "text-primary-gray rubik text-xs",
                                            children: h("usernameNotSetLabel"),
                                          }),
                                        }),
                                  })
                                : (0, n.jsx)("span", {
                                    className: "text-primary-gray",
                                    children: h("notRegisteredUserLabel"),
                                  }),
                          }),
                          (0, n.jsxs)("div", {
                            className:
                              "w-[24px] h-[24px] flex items-center justify-center",
                            children: [
                              1 === y &&
                                (0, n.jsx)("img", {
                                  src: D,
                                  className: "w-[16px] h-[16px]",
                                  onClick: function (e) {
                                    var s;
                                    e.stopPropagation(),
                                      (s = t),
                                      C.indexOf(s) > -1 ||
                                        (T &&
                                          L &&
                                          (S(C.concat([s])),
                                          (0, $.U3)(
                                            (0, q.f)("deleteFavouriteUser"),
                                            {
                                              networkId: T.toString(),
                                              userFavourite: s,
                                            },
                                            L
                                          )
                                            .then(function (e) {
                                              var t = JSON.parse(
                                                JSON.stringify(C)
                                              );
                                              (t = t.splice(t.indexOf(s), 1)),
                                                g.current && (S(t), j(0)),
                                                f && f(0);
                                            })
                                            .catch(function (e) {
                                              var t = JSON.parse(
                                                JSON.stringify(C)
                                              );
                                              (t = t.splice(t.indexOf(s), 1)),
                                                g.current && S(t),
                                                F(e);
                                            })));
                                  },
                                  onMouseEnter: function (e) {
                                    e.target.src = V;
                                  },
                                  onMouseLeave: function (e) {
                                    e.target.src = D;
                                  },
                                }),
                              0 === y &&
                                (0, n.jsx)("img", {
                                  src: H,
                                  className: "w-[16px] h-[16px] hover",
                                  onClick: function (e) {
                                    var s;
                                    e.stopPropagation(),
                                      (s = t),
                                      N.indexOf(s) > -1 ||
                                        (T &&
                                          L &&
                                          (w(N.concat([s])),
                                          (0, $.jl)(
                                            (0, q.f)("addFavouriteUser"),
                                            {
                                              networkId: T.toString(),
                                              userFavourite: s,
                                            },
                                            L
                                          )
                                            .then(function (e) {
                                              var t = JSON.parse(
                                                JSON.stringify(N)
                                              );
                                              (t = t.splice(t.indexOf(s), 1)),
                                                g.current && (w(t), j(1)),
                                                f && f(1);
                                            })
                                            .catch(function (e) {
                                              var t = JSON.parse(
                                                JSON.stringify(N)
                                              );
                                              (t = t.splice(t.indexOf(s), 1)),
                                                g.current && w(t),
                                                F(e);
                                            })));
                                  },
                                  onMouseEnter: function (e) {
                                    e.target.src = W;
                                  },
                                  onMouseLeave: function (e) {
                                    e.target.src = H;
                                  },
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "w-[32px] h-[32px] flex justify-center items-center",
                    children: (0, n.jsx)("div", {
                      className: "".concat(
                        m ? "border-primary-blue" : "border-primary-gray",
                        " w-[24px] h-[24px] flex justify-center items-center border-[1px] border-solid rounded-full hover:border-primary-blue"
                      ),
                      children: (0, n.jsx)("div", {
                        className: "".concat(
                          m ? "bg-primary-blue" : "",
                          " w-[10.5px] h-[10.5px] rounded-full"
                        ),
                      }),
                    }),
                  }),
                ],
              }),
            })
          );
        },
        ae = "/_next/static/media/avatars.165e0fdb.svg";
      function le(e, t) {
        return null != t &&
          "undefined" !== typeof Symbol &&
          t[Symbol.hasInstance]
          ? t[Symbol.hasInstance](e)
          : e instanceof t;
      }
      var ie = function (e) {
          var t = e.isCurrent,
            s = (0, p.Z)("common").t,
            i = (0, r.useRef)(!1),
            c = (0, r.useState)(!1),
            o = c[0],
            d = c[1],
            u = (0, r.useState)(""),
            x = u[0],
            m = u[1],
            f = (0, r.useState)(),
            h = f[0],
            g = f[1],
            b = (0, r.useState)(""),
            y = b[0],
            j = b[1],
            v = (0, r.useState)(!1),
            N = v[0],
            w = v[1],
            k = (0, r.useRef)({ clearInput: null }),
            C = (0, l.C)(function (e) {
              return e;
            }),
            S = C.trademodal,
            _ = C.waccount,
            E = (0, l.T)(),
            L = S.taker,
            T = _.currentNetworkId,
            F = _.jwtToken,
            M = (0, r.useState)(!1),
            I = M[0],
            A = M[1],
            z = function (e) {
              if (0 === e.length)
                return (
                  i.current && (w(!1), A(!1)),
                  void setTimeout(function () {
                    i.current && g([]);
                  }, 500)
                );
              T && F
                ? (i.current && A(!0),
                  (0, $.Vd)((0, q.f)("searchUser", [T, e]), F)
                    .then(function (t) {
                      var s = t.data;
                      if (le(s, Array) && s.length > 0) {
                        var n = s[0],
                          r = [];
                        "isAddress" in n && !0 === n.isAddress
                          ? s.forEach(function (t) {
                              r.push({
                                evmNetworkId: T,
                                username: "",
                                address: e,
                                imageUrl: "",
                                isVerified: 0,
                                isNft: 0,
                                isRegistered: 0,
                              });
                            })
                          : "evmNetworkId" in n &&
                            s.forEach(function (e) {
                              r.push({
                                evmNetworkId: e.currentNetworkId,
                                username: e.username,
                                address: e.address,
                                imageUrl: e.imageUrl,
                                isVerified: e.isVerified,
                                isNft: e.isNft,
                                isRegistered: e.isRegistered,
                                isFavourite: e.isFavourite,
                              });
                            }),
                          i.current && (g(r), A(!1));
                      }
                    })
                    .catch(function (e) {
                      !(function (e) {
                        if (
                          e &&
                          "response" in e &&
                          "undefined" !== typeof e.response
                        ) {
                          var t = e.response.status;
                          401 === t
                            ? (E((0, a.jO)()),
                              E((0, a.r$)(!1)),
                              E((0, X.up)(!0)),
                              E((0, X.kt)()),
                              (0, ee.uM)({
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
                              }))
                            : 500 === t &&
                              (console.log("backend error.."),
                              console.error(e));
                        } else console.error(e);
                      })(e),
                        i.current && A(!1);
                    }),
                  i.current && w(!1))
                : i.current && A(!1);
            };
          return (
            (0, r.useEffect)(function () {
              return (
                (i.current = !0),
                function () {
                  i.current = !1;
                }
              );
            }, []),
            (0, r.useEffect)(
              function () {
                if (o) {
                  var e = function () {
                    window.innerWidth > 1023 && i.current && d(!1);
                  };
                  return (
                    e(),
                    window.addEventListener("resize", e),
                    function () {
                      window.removeEventListener("resize", e);
                    }
                  );
                }
              },
              [o]
            ),
            (0, r.useEffect)(
              function () {
                i.current && (g([]), w(!0));
              },
              [x]
            ),
            (0, r.useEffect)(
              function () {
                N && z(x);
              },
              [N]
            ),
            (0, n.jsx)(ne, {
              isCurrent: t,
              children: (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsxs)("section", {
                    className: "grid grid-cols-12",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "hidden bg-primary-white rounded-[16px] p-[24px] lg:shadow-sm lg:shadow-light-shadow lg:block lg:col-span-3 lg:max-h-[732px]",
                        children: (0, n.jsx)(se, {
                          isModalOpen: !1,
                          actionClose: function () {},
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "col-span-12 pt-[30px] lg:pt-0 lg:rounded-[16px] lg:col-span-9 lg:pl-[48px] lg:min-h-[732px]",
                        children: (0, n.jsx)("div", {
                          className:
                            "w-full lg:bg-primary-yellow lg:rounded-[16px] lg:rounded-tr-[0px] lg:min-h-[732px]",
                          children: (0, n.jsxs)("div", {
                            className:
                              "w-full bg-primary-white lg:pt-[40px] lg:px-[112px] lg:shadow-sm lg:shadow-light-shadow lg:rounded-[16px] lg:rounded-tr-[40px] lg:min-h-[732px]",
                            children: [
                              (0, n.jsx)("h3", {
                                className:
                                  "text-center text-primary-dark-blue text-2xl font-semibold",
                                children: s("whoProposeTradeLabel"),
                              }),
                              (0, n.jsxs)("div", {
                                className:
                                  "flex flex-col mt-[40px] text-center lg:items-center lg:pt-[0px]",
                                children: [
                                  (0, n.jsx)("span", {
                                    className:
                                      "mb-[16px] text-base font-regular text-primary-dark-blue lg:mb-[24px]",
                                    children: s("searchForCounterpartyLabel"),
                                  }),
                                  (0, n.jsx)(R.Z, {
                                    setFilter: function (e) {
                                      m(e), j(""), E((0, a.N0)(null));
                                    },
                                    onClear: function () {
                                      E((0, a.N0)(null));
                                    },
                                    placeholder: s(
                                      "searchUsernamePlaceholderLabel"
                                    ),
                                    refClear: k,
                                    className: "lg:w-[600px]",
                                  }),
                                  (0, n.jsx)("div", {
                                    className:
                                      "flex items-center justify-center mt-[16px] lg:hidden",
                                    children: (0, n.jsxs)("span", {
                                      className:
                                        "flex cursor-pointer text-primary-blue w-max hover:underline",
                                      onClick: function () {
                                        d(!0);
                                      },
                                      children: [
                                        (0, n.jsx)("span", {
                                          className:
                                            "text-base font-semibold mr-[8px]",
                                          children: s(
                                            "selectFromFavouriteLabel"
                                          ),
                                        }),
                                        (0, n.jsx)("img", { src: D }),
                                      ],
                                    }),
                                  }),
                                  (0, n.jsxs)("div", {
                                    className:
                                      "flex flex-col items-center justify-center mt-[56px] lg:w-[600px]",
                                    children: [
                                      (0, n.jsx)("span", {
                                        className:
                                          "text-base font-regular text-primary-dark-blue",
                                        children: s(
                                          "currentCounterpartyTraderLabel"
                                        ),
                                      }),
                                      (0, n.jsx)("ul", {
                                        className: "w-full mt-[24px]",
                                        children: (0, n.jsx)("li", {
                                          children: (0, n.jsx)(re, {
                                            address:
                                              L && L.collector
                                                ? L.collector.address
                                                : "",
                                            username:
                                              L && L.collector
                                                ? L.collector.username
                                                : "",
                                            avatar: {
                                              imageSrc:
                                                L && L.collector
                                                  ? L.collector.imageUrl
                                                  : "",
                                              isNFT:
                                                L && L.collector
                                                  ? L.collector.isNft
                                                  : 0,
                                              isVerified: 0,
                                            },
                                            isFavourite:
                                              L &&
                                              L.collector &&
                                              L.collector.isFavourite
                                                ? L.collector.isFavourite
                                                : 0,
                                            isRegistered:
                                              L &&
                                              L.collector &&
                                              L.collector.isRegistered
                                                ? L.collector.isRegistered
                                                : 0,
                                            isSelected: !0,
                                            onChange: function () {},
                                          }),
                                        }),
                                      }),
                                      (0, n.jsx)(n.Fragment, {
                                        children:
                                          I &&
                                          (0, n.jsx)(n.Fragment, {
                                            children: (0, n.jsx)("div", {
                                              className:
                                                "flex items-center justify-center w-full h-full mt-[30px]",
                                              children: (0, n.jsx)(te.Z, {
                                                isWhite: !1,
                                                className: "w-[30px] h-[30px]",
                                              }),
                                            }),
                                          }),
                                      }),
                                      h &&
                                        h.length > 0 &&
                                        (0, n.jsxs)(n.Fragment, {
                                          children: [
                                            (0, n.jsx)("span", {
                                              className:
                                                "text-base font-regular text-primary-dark-blue mt-[48px]",
                                              children: s("selectAddressLabel"),
                                            }),
                                            (0, n.jsx)("ul", {
                                              className: "w-full mt-[24px]",
                                              children: h.map(function (e, t) {
                                                return (0, n.jsx)(
                                                  "li",
                                                  {
                                                    className: "mb-[8px]",
                                                    children: (0, n.jsx)(
                                                      re,
                                                      {
                                                        address: e.address,
                                                        username: e.username,
                                                        avatar: {
                                                          imageSrc: e.imageUrl,
                                                          isNFT: e.isNft,
                                                          isVerified: 0,
                                                        },
                                                        isFavourite:
                                                          e.isFavourite
                                                            ? e.isFavourite
                                                            : 0,
                                                        isRegistered:
                                                          e.isRegistered
                                                            ? e.isRegistered
                                                            : 0,
                                                        onClick: function () {
                                                          j(e.address),
                                                            E(
                                                              (0, a.N0)(
                                                                e.address
                                                              )
                                                            );
                                                        },
                                                        onChange:
                                                          function () {},
                                                        isSelected:
                                                          y === e.address,
                                                      },
                                                      "selectable-user-".concat(
                                                        e.address
                                                      )
                                                    ),
                                                  },
                                                  "collector-"
                                                    .concat(e.address, "-")
                                                    .concat(t)
                                                );
                                              }),
                                            }),
                                          ],
                                        }),
                                      0 ===
                                        (null === h || void 0 === h
                                          ? void 0
                                          : h.length) &&
                                        x.length > 0 &&
                                        !I &&
                                        (0, n.jsxs)("div", {
                                          className:
                                            "flex flex-col items-center justify-center mt-[30px]",
                                          children: [
                                            (0, n.jsx)("img", {
                                              src: ae,
                                              className: "w-[40px] h-[40px]",
                                            }),
                                            (0, n.jsxs)("div", {
                                              className:
                                                "mt-[24px] text-center flex flex-col items-center",
                                              children: [
                                                (0, n.jsx)("span", {
                                                  className:
                                                    "text-base font-regular text-primary-dark-blue",
                                                  children: s(
                                                    "noAddressFoundLabel"
                                                  ),
                                                }),
                                                (0, n.jsx)("span", {
                                                  className:
                                                    "text-primary-blue text-sm font-regular underline cursor-pointer mt-[8px]",
                                                  onClick: function () {
                                                    k.current &&
                                                      k.current.clearInput &&
                                                      le(
                                                        k.current.clearInput,
                                                        Function
                                                      ) &&
                                                      k.current.clearInput(),
                                                      E((0, a.N0)(null));
                                                  },
                                                  children:
                                                    s("clearSearchLabel"),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                  o &&
                    (0, n.jsx)(se, {
                      isModalOpen: o,
                      actionClose: function () {
                        d(!1);
                      },
                    }),
                ],
              }),
            })
          );
        },
        ce = s(28023),
        oe = s.n(ce),
        de = s(37011),
        ue = function (e) {
          var t = e.isOpen,
            s = void 0 !== t && t,
            i = (e.actionClose, (0, p.Z)("common").t),
            c = (0, r.useState)(s),
            o = c[0],
            d = (c[1], (0, l.T)()),
            x = function () {
              d((0, a.aj)(!1));
            };
          return (
            (0, r.useEffect)(
              function () {
                o || x();
              },
              [o]
            ),
            (0, n.jsx)(n.Fragment, {
              children:
                o &&
                (0, n.jsx)("div", {
                  className: "".concat(
                    oe().overlay,
                    " lg:flex lg:justify-center lg:items-center lg:fixed lg:top-0 lg:left-0 lg:w-full lg:h-full z-[20000]"
                  ),
                  onClick: function () {
                    d((0, a.aj)(!1));
                  },
                  children: (0, n.jsx)("div", {
                    className: "".concat(
                      oe().paymentModal,
                      " fixed flex flex-col w-full bg-primary-blue z-[20000] rounded-t-[32px] py-[40px] px-[16px] w-full h-full text-center lg:relative lg:w-[520px] lg:rounded-[16px] lg:h-[auto] lg:p-[32px]"
                    ),
                    onClick: function (e) {
                      e.stopPropagation();
                    },
                    children: (0, n.jsxs)("div", {
                      className:
                        "flex flex-col items-center justify-center text-primary-white",
                      children: [
                        (0, n.jsx)("img", {
                          src: de.Z.src,
                          className: "w-[72px] h-[72px] ".concat(oe().rotating),
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "flex flex-col justify-center items-center mt-[40px] text-center",
                          children: [
                            (0, n.jsxs)("h2", {
                              className:
                                "text-primary-white text-3xl font-semibold",
                              children: [i("loadingLabel"), " .."],
                            }),
                            (0, n.jsx)("div", {
                              className: "mt-[8px] mb-[40px]",
                              children: i("waitConfirmTxLabel"),
                            }),
                            (0, n.jsx)(u.Z, {
                              text: i("cancelLabel"),
                              type: {
                                class: "secondary",
                                hasColoredBg: !0,
                                icon: !1,
                              },
                              size: "large",
                              onClick: function () {
                                x();
                              },
                              initialState: { state: "default" },
                              className: "w-full lg:w-[123px]",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
            })
          );
        },
        xe = s(93442),
        me = s(91936),
        pe = s(47606),
        fe = s.n(pe),
        he = s(47777),
        ge = [
          {
            constant: !1,
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "tokenId", type: "uint256" },
            ],
            name: "approve",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "tokenId", type: "uint256" },
            ],
            name: "mint",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "tokenId", type: "uint256" },
            ],
            name: "safeTransferFrom",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "tokenId", type: "uint256" },
              { internalType: "bytes", name: "_data", type: "bytes" },
            ],
            name: "safeTransferFrom",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "bool", name: "approved", type: "bool" },
            ],
            name: "setApprovalForAll",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "tokenId", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "constructor",
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
            constant: !0,
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [
              { internalType: "uint256", name: "tokenId", type: "uint256" },
            ],
            name: "getApproved",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "operator", type: "address" },
            ],
            name: "isApprovedForAll",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [
              { internalType: "uint256", name: "tokenId", type: "uint256" },
            ],
            name: "ownerOf",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [
              { internalType: "bytes4", name: "interfaceId", type: "bytes4" },
            ],
            name: "supportsInterface",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
        ],
        be = s(25900),
        ye = "/_next/static/media/down_blue.faa765b9.svg",
        je = "/_next/static/media/info.ea4bf384.svg",
        ve = s(73602),
        Ne = s.n(ve),
        we = function (e) {
          var t = e.className,
            s = void 0 === t ? "" : t,
            r = e.children;
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsx)("div", {
              className: ""
                .concat(Ne().bubbleMessage, " ")
                .concat(
                  s,
                  " absolute pt-[20px] pl-[16px] pr-[20px] pb-[8] shadow shadow-md rounded-[16px] bg-primary-white absolute"
                ),
              children: (0, n.jsx)("div", {
                className: "h-[80%] overflow-y-scroll pr-[20px]",
                children: (0, n.jsx)("div", {
                  className: "rubik text-xs font-light",
                  children: r,
                }),
              }),
            }),
          });
        },
        ke = s(8138),
        Ce = function (e) {
          var t = e.isCurrent,
            s = (0, p.Z)("common").t,
            i = (0, r.useRef)(!1),
            c = (0, r.useState)(),
            o = c[0],
            d = c[1],
            x = (0, r.useState)(),
            m = x[0],
            f = x[1],
            h = (0, r.useState)(),
            g = h[0],
            b = h[1],
            y = (0, r.useState)([]),
            j = y[0],
            v = y[1],
            N = (0, r.useState)(),
            _ = N[0],
            T = N[1],
            F = (0, r.useState)(!1),
            M = F[0],
            I = F[1],
            A = (0, r.useState)(!1),
            R = (A[0], A[1]),
            z = (0, r.useState)(!1),
            O = (z[0], z[1]),
            Z = (0, r.useState)(),
            B = Z[0],
            U = Z[1],
            P = (0, r.useState)(),
            D = P[0],
            H = P[1],
            V = (0, r.useState)(),
            W = V[0],
            Y = V[1],
            J = (0, r.useState)(),
            G = J[0],
            K = J[1],
            Q = (0, r.useState)(),
            X = Q[0],
            ee = Q[1],
            te = (0, r.useState)(),
            se = te[0],
            re = te[1],
            ae = (0, r.useState)(!1),
            le = ae[0],
            ie = ae[1],
            ce = (0, r.useState)(!1),
            oe = ce[0],
            de = ce[1],
            pe = (0, r.useState)(""),
            ve = (pe[0], pe[1]),
            Ne = (0, l.T)(),
            Ce = (0, l.C)(function (e) {
              return e;
            }),
            Se = Ce.trademodal,
            _e = Ce.waccount,
            Ee = Se.isPaymentModalOpen,
            Le = Se.currentStepMenu,
            Te = Se.who,
            Fe = Se.maker,
            Me = Se.taker,
            Ie = Se.dayDuration,
            Ae = Se.swapId,
            Re = _e.currentNetworkId,
            ze = _e.account,
            Oe = (0, C.Ge)().library,
            Ze = function (e) {
              if (
                !e.find(function (e) {
                  return "ERC721" === e.type || "ERC1155" === e.type;
                })
              )
                return !1;
              var t = !1,
                s = !1;
              if (
                (e
                  .filter(function (e) {
                    return "ERC1155" === e.type || "ERC721" === e.type;
                  })
                  .forEach(function (e) {
                    "ERC1155" === e.type
                      ? (s = !0)
                      : "ERC721" === e.type && (t = !0);
                  }),
                s && t)
              )
                return !1;
              var n = [];
              return (
                e
                  .filter(function (e) {
                    return "ERC1155" === e.type || "ERC721" === e.type;
                  })
                  .forEach(function (e) {
                    -1 === n.indexOf(e.collection.address.toLowerCase()) &&
                      n.push(e.collection.address.toLowerCase());
                  }),
                1 === n.length
              );
            },
            Be = function (e) {
              if (Me && Me.collector && Me.assets && Fe && Fe.assets) {
                var t = "0",
                  s = Me.collector.address,
                  n = "0",
                  r = Ie,
                  a = Fe.assets.find(function (e) {
                    return "NATIVE" === e.type;
                  });
                a && (t = a.amount ? a.amount : "0");
                var l = Me.assets.find(function (e) {
                  return "NATIVE" === e.type;
                });
                l && (n = l.amount ? l.amount : "0");
                var i = new e.AssetsArray(),
                  c = {},
                  o = {};
                Fe.assets
                  .filter(function (e) {
                    return "NATIVE" !== e.type;
                  })
                  .forEach(function (e) {
                    "ERC721" === e.type
                      ? e.collection.address.toLowerCase() in c
                        ? c[e.collection.address.toLowerCase()].push(e.id)
                        : (c[e.collection.address.toLowerCase()] = [e.id])
                      : "ERC1155" === e.type
                      ? e.collection.address.toLowerCase() in o
                        ? (o[
                            e.collection.address.toLowerCase()
                          ].tokenAmounts.push(e.amount),
                          o[e.collection.address.toLowerCase()].tokenIds.push(
                            e.id
                          ))
                        : (o[e.collection.address.toLowerCase()] = {
                            tokenAmounts: [e.amount],
                            tokenIds: [e.id],
                          })
                      : "ERC20" === e.type &&
                        i.addERC20Asset(
                          e.collection.address.toLowerCase(),
                          e.amount
                        );
                  }),
                  Object.keys(c).forEach(function (e) {
                    c[e].forEach(function (t) {
                      i.addERC721Asset(e, t);
                    });
                  }),
                  Object.keys(o).forEach(function (e) {
                    i.addERC1155Asset(e, o[e].tokenIds, o[e].tokenAmounts);
                  });
                var d = new e.AssetsArray(),
                  u = {},
                  x = {};
                return (
                  Me.assets
                    .filter(function (e) {
                      return "NATIVE" !== e.type;
                    })
                    .forEach(function (e) {
                      "ERC721" === e.type
                        ? e.collection.address.toLowerCase() in u
                          ? u[e.collection.address.toLowerCase()].push(e.id)
                          : (u[e.collection.address.toLowerCase()] = [e.id])
                        : "ERC1155" === e.type
                        ? e.collection.address.toLowerCase() in x
                          ? (x[
                              e.collection.address.toLowerCase()
                            ].tokenAmounts.push(e.amount),
                            x[e.collection.address.toLowerCase()].tokenIds.push(
                              e.id
                            ))
                          : (x[e.collection.address.toLowerCase()] = {
                              tokenAmounts: [e.amount],
                              tokenIds: [e.id],
                            })
                        : "ERC20" === e.type &&
                          d.addERC20Asset(
                            e.collection.address.toLowerCase(),
                            e.amount
                          );
                    }),
                  Object.keys(u).forEach(function (e) {
                    u[e].forEach(function (t) {
                      d.addERC721Asset(e, t);
                    });
                  }),
                  Object.keys(x).forEach(function (e) {
                    d.addERC1155Asset(e, x[e].tokenIds, x[e].tokenAmounts);
                  }),
                  {
                    ethMaker: t,
                    taker: s,
                    ethTaker: n,
                    assetsMaker: i.getAssetsArray(),
                    assetsTaker: d.getAssetsArray(),
                    swapEnd: r,
                    referralAddress:
                      "0x0000000000000000000000000000000000000000",
                  }
                );
              }
              return null;
            },
            Ue = function (e, t) {
              e.getReferenceAddress()
                .then(function (e) {
                  var s = e.TRADESQUAD,
                    n = e.PARTNERSQUAD,
                    r = new k.CH(s, ge, Oe),
                    a = new k.CH(n, ge, Oe);
                  r
                    .balanceOf(ze)
                    .then(function (e) {
                      e.gt(0) ? i.current && U(!0) : i.current && U(!1);
                    })
                    .catch(function (e) {
                      i.current && U(!1), console.error(e);
                    }),
                    a
                      .balanceOf(ze)
                      .then(function (e) {
                        e.gt(0)
                          ? (function (e, t) {
                              e &&
                                (0, $.bf)((0, q.f)("getNftCollection", [e, t]))
                                  .then(function (e) {
                                    var t = e.data[0];
                                    i.current && (Y(t), H(!0));
                                  })
                                  .catch(function (e) {
                                    console.error(e), i.current && H(!1);
                                  });
                            })(t, n)
                          : i.current && H(!1);
                      })
                      .catch(function (e) {
                        i.current && H(!1), console.error(e);
                      });
                })
                .catch(function (e) {
                  console.error(e);
                });
            },
            Pe = function (e, t, s, n, r, a) {
              var l = new k.CH(t, e, Oe),
                c = s.collection.address.toLowerCase(),
                o = s.id;
              if (c && o) {
                var d = n.assets.filter(function (e) {
                    return "ERC20" === e.type || "NATIVE" === e.type;
                  }),
                  u = [],
                  x = d.length;
                d.forEach(function (e) {
                  l.getRoyaltyView(c, o, e.amount)
                    .then(function (t) {
                      var s,
                        n = t.amounts;
                      t.recipients.length > 0 && n.length > 0
                        ? (n.forEach(function (e, t) {
                            0 === t ? (s = e) : s.add(e);
                          }),
                          "NATIVE" === e.type
                            ? (u.push({
                                amount: me.bM(
                                  s ? s.toString() : "0",
                                  (0, he.z)("ETHEREUM_DECIMALS_NUMBER")
                                ),
                                currency: e.collection.symbol,
                                visible: !0,
                              }),
                              u.length === x &&
                                i.current &&
                                (v(u), r && ("maker" === a ? R(!0) : O(!0))))
                            : new k.CH(
                                e.collection.address,
                                e.collection.abi,
                                Oe
                              )
                                .decimals()
                                .then(function (t) {
                                  u.push({
                                    amount: me.bM(s ? s.toString() : "0", t),
                                    currency: e.collection.symbol,
                                    visible: !0,
                                  }),
                                    u.length === x &&
                                      i.current &&
                                      (v(u),
                                      r && ("maker" === a ? R(!0) : O(!0)));
                                })
                                .catch(function (e) {
                                  console.error(e),
                                    u.push({
                                      amount: "",
                                      currency: "",
                                      visible: !1,
                                    }),
                                    u.length === x &&
                                      i.current &&
                                      (v(u),
                                      r && ("maker" === a ? R(!0) : O(!0)));
                                }))
                        : i.current && T(!1);
                    })
                    .catch(function (e) {
                      console.error(e),
                        u.push({ amount: "", currency: "", visible: !1 }),
                        u.length === x &&
                          i.current &&
                          (v(u), r && ("maker" === a ? R(!0) : O(!0)));
                    });
                });
              }
            };
          return (
            (0, r.useEffect)(function () {
              return (
                (i.current = !0),
                function () {
                  i.current = !1;
                }
              );
            }),
            (0, r.useEffect)(function () {
              if (Re && Te && Fe && Fe.assets && Me && Me.assets) {
                var e = new (E())({
                  ethers: w,
                  web3Provider: Oe,
                  network: (0, S.qe)(Re).toUpperCase(),
                });
                i.current && K((0, S.dW)(Re)),
                  "maker" === Te
                    ? (function (e) {
                        var t = Be(e);
                        t &&
                          e
                            .estimateGasCreateSwap(t, null)
                            .then(function (e) {
                              i.current && e ? d(e.toString()) : e || de(!0);
                            })
                            .catch(function (e) {
                              de(!0), ve(e), console.log(e), console.error(e);
                            });
                      })(e)
                    : (function (e) {
                        if ("number" === typeof Ae && Ae >= 0) {
                          var t = {
                            swapId: Ae,
                            referralAddress:
                              "0x0000000000000000000000000000000000000000",
                          };
                          e.estimateGasCloseSwap(t, null)
                            .then(function (e) {
                              i.current && e ? d(e.toString()) : e || de(!0);
                            })
                            .catch(function (e) {
                              de(!0), ve(e), console.log(e), console.error(e);
                            });
                        }
                      })(e),
                  (function (e, t) {
                    e.getPayment()
                      .then(function (e) {
                        var s = e.flagFlatFee,
                          n = e.flagRoyalties,
                          r = e.flatFee,
                          a = e.bps,
                          l = e.scalePercent;
                        if (Fe && Fe.assets && Me && Me.assets)
                          if ((i.current && T(n), !1 === s)) {
                            var c = a.mul(100).toNumber() / l.toNumber();
                            if (r.eq(0))
                              i.current &&
                                (b("0"), f("".concat(c.toString(), "%")));
                            else {
                              var o = ("maker" === Te ? Fe : Me).assets;
                              i.current && b(r.toString()),
                                o.findIndex(function (e) {
                                  return (
                                    "NATIVE" === e.type || "ERC20" === e.type
                                  );
                                }) > -1
                                  ? i.current &&
                                    f(
                                      ""
                                        .concat(
                                          me.bM(
                                            r.toString(),
                                            (0, he.z)(
                                              "ETHEREUM_DECIMALS_NUMBER"
                                            )
                                          ),
                                          " "
                                        )
                                        .concat((0, S.dW)(t), " + ")
                                        .concat(c.toString(), "%")
                                    )
                                  : i.current &&
                                    f(
                                      ""
                                        .concat(
                                          me.bM(
                                            r.toString(),
                                            (0, he.z)(
                                              "ETHEREUM_DECIMALS_NUMBER"
                                            )
                                          ),
                                          " "
                                        )
                                        .concat((0, S.dW)(t))
                                    );
                            }
                          } else
                            i.current &&
                              (b(r.toString()),
                              f(
                                ""
                                  .concat(
                                    me.bM(
                                      r.toString(),
                                      (0, he.z)("ETHEREUM_DECIMALS_NUMBER")
                                    ),
                                    " "
                                  )
                                  .concat((0, S.dW)(t))
                              ));
                      })
                      .catch(function (e) {
                        console.error(e);
                      });
                  })(e, Re),
                  Ue(e, Re);
              }
            }, []),
            (0, r.useEffect)(
              function () {
                if (_ && Te && Fe && Fe.assets && Me && Me.assets && Re) {
                  var e = new (E())({
                      ethers: w,
                      web3Provider: Oe,
                      network: (0, S.qe)(Re).toUpperCase(),
                    }),
                    t = e.getRoyaltyRegistriesEngines(),
                    s = e.getRoyaltyRegistryEngineABI(),
                    n = t[(0, S.qe)(Re).toUpperCase()];
                  if ("maker" === Te)
                    if (
                      -1 ===
                      Fe.assets.findIndex(function (e) {
                        return "NATIVE" === e.type || "ERC20" === e.type;
                      })
                    )
                      if (Ze(Fe.assets))
                        if (
                          -1 !==
                          Me.assets.findIndex(function (e) {
                            return "NATIVE" === e.type || "ERC20" === e.type;
                          })
                        ) {
                          var r = Fe.assets.find(function (e) {
                            return "ERC721" === e.type || "ERC1155" === e.type;
                          });
                          if (!r) return void (i.current && T(!1));
                          Pe(s, n, r, Me, !0, "maker");
                        } else i.current && T(!1);
                      else i.current && T(!1);
                    else if (Ze(Me.assets)) {
                      var a = Me.assets.find(function (e) {
                        return "ERC721" === e.type || "ERC1155" === e.type;
                      });
                      a && Pe(s, n, a, Fe);
                    } else T(!1);
                  else if (
                    -1 ===
                    Me.assets.findIndex(function (e) {
                      return "NATIVE" === e.type || "ERC20" === e.type;
                    })
                  )
                    if (Ze(Me.assets))
                      if (
                        -1 !==
                        Fe.assets.findIndex(function (e) {
                          return "NATIVE" === e.type || "ERC20" === e.type;
                        })
                      ) {
                        var l = Me.assets.find(function (e) {
                          return "ERC721" === e.type || "ERC1155" === e.type;
                        });
                        if (!l) return void (i.current && T(!1));
                        Pe(s, n, l, Fe, !0, "taker");
                      } else i.current && T(!1);
                    else i.current && T(!1);
                  else if (Ze(Fe.assets)) {
                    var c = Fe.assets.find(function (e) {
                      return "ERC721" === e.type || "ERC1155" === e.type;
                    });
                    c && Pe(s, n, c, Me);
                  } else T(!1);
                }
              },
              [_]
            ),
            (0, r.useEffect)(
              function () {
                if (g && o && Re && Te && Fe && Fe.assets && Me && Me.assets) {
                  var e,
                    t = xe.O$.from(g),
                    s = xe.O$.from(o);
                  if (D || B) {
                    var n = ("maker" === Te ? Fe : Me).assets.find(function (
                      e
                    ) {
                      return "NATIVE" === e.type;
                    });
                    e = n ? s.add(xe.O$.from(n.amount)) : s;
                  } else e = s.add(t);
                  i.current &&
                    ee(
                      ""
                        .concat(
                          me.bM(
                            e.toString(),
                            (0, he.z)("ETHEREUM_DECIMALS_NUMBER")
                          ),
                          " "
                        )
                        .concat((0, S.dW)(Re))
                    );
                }
              },
              [g, o]
            ),
            (0, n.jsx)(ne, {
              isCurrent: t,
              children: (0, n.jsxs)("section", {
                className: "mt-[32px] lg:mt-[16px]",
                children: [
                  (0, n.jsx)("div", {
                    className: "text-center",
                    children: (0, n.jsx)("h3", {
                      className: "text-primary-blue text-2xl font-semibold",
                      children: s("proceedWithPaymentLabel"),
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: "mt-[40px] text-center",
                    children: (0, n.jsx)("h4", {
                      className: "text-primary-dark-blue font-semibold text-xl",
                      children: s("transactionCalculationLabel"),
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: "mt-[32px] flex justify-center",
                    children: (0, n.jsxs)("div", {
                      className:
                        "w-[343px] flex flex-col justify-center items-center md:w-[464px]",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "w-[95%] flex justify-between",
                          children: [
                            (0, n.jsx)("span", {
                              className:
                                "text-primary-dark-blue text-sm font-semibold",
                              children: s("estimatedGasPriceLabel"),
                            }),
                            o
                              ? (0, n.jsxs)("span", {
                                  className:
                                    "text-primary-dark-blue text-base font-semibold text-right",
                                  children: [
                                    me.bM(
                                      o,
                                      (0, he.z)("ETHEREUM_DECIMALS_NUMBER")
                                    ),
                                    " ",
                                    G,
                                  ],
                                })
                              : (0, n.jsx)("img", {
                                  src: L.Z.src,
                                  className: "w-[12px] h-[auto] ".concat(
                                    fe().rotating
                                  ),
                                }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "w-[95%] flex justify-between mt-[16px] relative",
                          children: [
                            (0, n.jsxs)("span", {
                              className:
                                "flex justify-between items-center text-primary-dark-blue text-sm font-semibold",
                              children: [
                                (0, n.jsx)("span", {
                                  className: "mr-[4px]",
                                  children: s("platformFeeLabel"),
                                }),
                                (0, n.jsx)("img", {
                                  src: je,
                                  className: "w-[16px] h-[16px] cursor-pointer",
                                  onClick: function () {
                                    ie(!le);
                                  },
                                }),
                                le &&
                                  (0, n.jsx)(we, {
                                    className:
                                      "w-[296px] h-[120px] bottom-[45px] right-[60px]",
                                    children: s("platformFeeDescriptionIcon"),
                                  }),
                              ],
                            }),
                            m
                              ? (0, n.jsx)("span", {
                                  className:
                                    "text-primary-dark-blue text-base font-semibold text-right",
                                  children: m,
                                })
                              : (0, n.jsx)("img", {
                                  src: L.Z.src,
                                  className: "w-[12px] h-[auto] ".concat(
                                    fe().rotating
                                  ),
                                }),
                          ],
                        }),
                        _ &&
                          (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsxs)("div", {
                                className:
                                  "w-[95%] flex justify-between mt-[16px]",
                                children: [
                                  (0, n.jsx)("span", {
                                    className:
                                      "text-primary-dark-blue text-sm font-semibold",
                                    children: s("royaltiesLabel"),
                                  }),
                                  j.length > 0
                                    ? (0, n.jsxs)("span", {
                                        className:
                                          "flex justify-between items-center text-primary-blue text-sm font-semibold select-none cursor-pointer hover:underline",
                                        onClick: function () {
                                          I(!M);
                                        },
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: "mr-[4px]",
                                            children: M ? "Hide" : "Show",
                                          }),
                                          (0, n.jsx)("img", {
                                            src: ye,
                                            className: "w-auto h-[5px]",
                                          }),
                                        ],
                                      })
                                    : (0, n.jsx)("img", {
                                        src: L.Z.src,
                                        className: "w-[12px] h-[auto] ".concat(
                                          fe().rotating
                                        ),
                                      }),
                                ],
                              }),
                              (0, n.jsx)(n.Fragment, {
                                children:
                                  M &&
                                  (0, n.jsx)(n.Fragment, {
                                    children: j.map(function (e, t) {
                                      return (0,
                                      n.jsx)(r.Fragment, { children: (0, n.jsxs)("div", { className: "w-[95%] flex items-center justify-between mt-[16px] px-[5px] py-[5px] rounded-[4px] bg-gray-200", children: [(0, n.jsx)("span", { className: "text-primary-dark-blue text-xs font-semibold hover:underline", children: (0, n.jsxs)("a", { href: "https://royaltyregistry.xyz/lookup", target: "_blank", children: [s("royaltyLabel"), " #", t + 1] }) }), (0, n.jsxs)("span", { className: "text-sm font-semibold", children: [e.amount, " ", e.currency] })] }) }, "royalty-".concat(t));
                                    }),
                                  }),
                              }),
                            ],
                          }),
                        (B || D) &&
                          (0, n.jsxs)("div", {
                            className: "w-[95%] flex justify-between mt-[16px]",
                            children: [
                              B &&
                                !D &&
                                (0, n.jsx)("span", {
                                  className:
                                    "text-primary-blue text-sm font-semibold",
                                  children: s("tradeSquadFeeRemoval"),
                                }),
                              D &&
                                !B &&
                                (0, n.jsx)("div", {
                                  className: "flex items-center",
                                  children:
                                    W &&
                                    (0, n.jsxs)(n.Fragment, {
                                      children: [
                                        (0, n.jsx)(be.Z, {
                                          src: W.image ? W.image : "",
                                          className:
                                            "w-[25px] h-[25px] mr-[5px]",
                                        }),
                                        (0, n.jsxs)("span", {
                                          className:
                                            "text-primary-blue text-sm font-semibold",
                                          children: [
                                            W.name,
                                            " ",
                                            s("zeroFeeLabel"),
                                          ],
                                        }),
                                      ],
                                    }),
                                }),
                              D &&
                                B &&
                                (0, n.jsx)("span", {
                                  className:
                                    "text-primary-blue text-sm font-semibold",
                                  children: s("tradeSquadFeeRemoval"),
                                }),
                              m
                                ? (0, n.jsxs)("span", {
                                    className:
                                      "text-primary-blue text-base font-semibold text-right",
                                    children: ["-(", m, ")"],
                                  })
                                : (0, n.jsx)("img", {
                                    src: L.Z.src,
                                    className: "w-[12px] h-[auto] ".concat(
                                      fe().rotating
                                    ),
                                  }),
                            ],
                          }),
                        !B &&
                          !D &&
                          (0, n.jsxs)("div", {
                            className:
                              "flex justify-between items-center mt-[16px] w-full px-[10px] h-[50px] border-[1px] border-primary-blue border-solid rounded-[16px]",
                            children: [
                              (0, n.jsx)("span", {
                                className:
                                  "text-primary-blue text-sm font-semibold",
                                children: s("zeroFeeForeverLabel"),
                              }),
                              (0, n.jsx)("span", {
                                className: "text-primary-blue text-right",
                                children: (0, n.jsx)(ke.Z, {
                                  text: s("mintTradeSquadButtonLabel"),
                                  url: "/tradesquads",
                                  isBlue: !0,
                                  isTargetBlank: !0,
                                  weight: "font-regular",
                                }),
                              }),
                            ],
                          }),
                        (0, n.jsx)("div", {
                          className:
                            "mt-[32px] w-full h-[1px] bg-[#D5D8DE] lg:mt-[28px]",
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "flex justify-between items-center mt-[34px] w-[95%] lg:mt-[30px]",
                          children: [
                            (0, n.jsx)("span", {
                              className:
                                "text-primary-dark-blue text-base font-semibold",
                              children: s("totalYouWillPayLabel"),
                            }),
                            X
                              ? (0, n.jsxs)("span", {
                                  className:
                                    "text-primary-dark-blue font-semibold ".concat(
                                      X.length > 6
                                        ? "text-base lg:text-base"
                                        : "text-lg lg:text-xl"
                                    ),
                                  children: ["~", X],
                                })
                              : (0, n.jsx)("img", {
                                  src: L.Z.src,
                                  className: "w-[16px] h-[auto] ".concat(
                                    fe().rotating
                                  ),
                                }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "flex flex-col justify-center items-center w-full mt-[64px] mb-[97px]",
                          children: [
                            oe
                              ? (0, n.jsx)(n.Fragment, {
                                  children: (0, n.jsx)("div", {
                                    children: (0, n.jsx)("span", {
                                      className:
                                        "text-state-warning text-sm font-semibold",
                                      children: s("errorLabel"),
                                    }),
                                  }),
                                })
                              : (0, n.jsx)(u.Z, {
                                  text: "Proceed with payment",
                                  type: {
                                    class: "primary",
                                    hasColoredBg: !1,
                                    icon: !1,
                                  },
                                  size: "large",
                                  onClick: function (e) {
                                    "maker" === Te
                                      ? (function (e) {
                                          if (Oe && Re) {
                                            i.current && (e("loading"), re(!0));
                                            var t = new (E())({
                                                ethers: w,
                                                web3Provider: Oe,
                                                network: (0, S.qe)(
                                                  Re
                                                ).toUpperCase(),
                                              }),
                                              s = Be(t);
                                            if (!s) return;
                                            t.on(
                                              "createSwapTransactionError",
                                              function (t) {
                                                var s = t.error;
                                                t.typeError,
                                                  4001 === s.code &&
                                                    i.current &&
                                                    (re(!1), e("default"));
                                              }
                                            ),
                                              t.on(
                                                "createSwapTransactionCreated",
                                                function () {
                                                  Ne((0, a.aj)(!0));
                                                }
                                              ),
                                              t.on(
                                                "createSwapTransactionMined",
                                                function (e) {
                                                  e.receipt,
                                                    Ne((0, a.Um)(Le + 1));
                                                }
                                              ),
                                              t.createSwap(s, null);
                                          }
                                        })(e)
                                      : "taker" === Te &&
                                        (function (e) {
                                          if (
                                            Oe &&
                                            Re &&
                                            "number" === typeof Ae &&
                                            Ae >= 0
                                          ) {
                                            i.current && (e("loading"), re(!0));
                                            var t = new (E())({
                                                ethers: w,
                                                web3Provider: Oe,
                                                network: (0, S.qe)(
                                                  Re
                                                ).toUpperCase(),
                                              }),
                                              s = {
                                                swapId: Ae,
                                                referralAddress:
                                                  "0x0000000000000000000000000000000000000000",
                                              };
                                            t.on(
                                              "closeSwapTransactionError",
                                              function (t) {
                                                var s = t.error;
                                                t.typeError,
                                                  4001 === s.code &&
                                                    i.current &&
                                                    (re(!1), e("default"));
                                              }
                                            ),
                                              t.on(
                                                "closeSwapTransactionCreated",
                                                function () {
                                                  Ne((0, a.aj)(!0));
                                                }
                                              ),
                                              t.on(
                                                "closeSwapTransactionMined",
                                                function (e) {
                                                  e.receipt,
                                                    Ne((0, a.Um)(Le + 1));
                                                }
                                              ),
                                              t.closeSwap(s, null);
                                          }
                                        })(e);
                                  },
                                  initialState: { state: "default" },
                                  className: "w-full",
                                }),
                            se
                              ? (0, n.jsx)("div", {
                                  className: "w-full",
                                  children: (0, n.jsx)(u.Z, {
                                    text: s(
                                      "maker" === Te
                                        ? "cancelTradeLabel"
                                        : "closeLabel"
                                    ),
                                    type: {
                                      class: "secondary",
                                      hasColoredBg: !1,
                                      icon: !1,
                                    },
                                    size: "large",
                                    onClick: function () {},
                                    initialState: { state: "disabled" },
                                    className: "w-full mt-[16px]",
                                  }),
                                })
                              : (0, n.jsx)(u.Z, {
                                  text: s(
                                    "maker" === Te
                                      ? "cancelTradeLabel"
                                      : "closeLabel"
                                  ),
                                  type: {
                                    class: "secondary",
                                    hasColoredBg: !1,
                                    icon: !1,
                                  },
                                  size: "large",
                                  onClick: function () {
                                    Ne((0, a.xI)(!0));
                                  },
                                  initialState: { state: "default" },
                                  className: "w-full mt-[16px]",
                                }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  Ee &&
                    (0, n.jsx)(ue, { isOpen: !0, actionClose: function () {} }),
                ],
              }),
            })
          );
        },
        Se = s(55559),
        _e = s.n(Se),
        Ee = "/_next/static/media/minus_mini.70ee0c6a.svg",
        Le = "/_next/static/media/minus_mini_dark_blue.156deb45.svg",
        Te = "/_next/static/media/plus_mini.0dfa11e6.svg",
        Fe = "/_next/static/media/plus_mini_dark_blue.d4a5e5a8.svg",
        Me = s(64978),
        Ie = function (e) {
          var t = e.days,
            s = e.onChange,
            a = e.editable,
            l = void 0 === a || a,
            i = e.pastDate,
            c = e.expiredDate,
            o = e.expired,
            d = void 0 !== o && o,
            u = e.className,
            x = e.who,
            m = (0, p.Z)("common").t,
            f = (0, r.useRef)(!1),
            h = (0, r.useState)(!1),
            g = h[0],
            b = h[1],
            y = (0, r.useState)(!0),
            j = y[0],
            v = y[1],
            N = (0, r.useState)(t),
            w = N[0],
            k = N[1],
            C = (0, r.useState)(0),
            S = C[0],
            _ = C[1],
            E = (0, r.useState)(new Date()),
            L = E[0],
            T = E[1],
            F = (0, r.useState)(c)[0],
            M = (0, r.useState)(d)[0],
            I = (0, r.useRef)(null),
            A = function (e) {
              return ""
                .concat(e.getDate(), "/")
                .concat(e.getMonth() + 1, "/")
                .concat(e.getFullYear());
            };
          return (
            (0, r.useEffect)(function () {
              return (
                (f.current = !0),
                function () {
                  f.current = !1;
                }
              );
            }, []),
            (0, r.useEffect)(
              function () {
                if (I.current) {
                  f.current && v(!1);
                  var e = I.current;
                  (g
                    ? e.animate([{ width: "90%" }], {
                        duration: 300,
                        fill: "forwards",
                      })
                    : e.animate([{ width: "100%" }], {
                        duration: 300,
                        fill: "forwards",
                      })
                  ).onfinish = function () {
                    f.current && v(!0);
                  };
                }
              },
              [g]
            ),
            (0, r.useEffect)(
              function () {
                if (!M) {
                  s && s(w);
                  var e = null;
                  (e = i ? new Date(i) : new Date()).setDate(e.getDate() + w),
                    f.current && T(e);
                }
              },
              [w]
            ),
            (0, r.useEffect)(
              function () {
                if (!M && F) {
                  var e = new Date();
                  console.log(
                    F,
                    "undefined" === typeof F
                      ? "undefined"
                      : (a = F) &&
                        "undefined" !== typeof Symbol &&
                        a.constructor === Symbol
                      ? "symbol"
                      : typeof a,
                    new Date(F)
                  );
                  var t = (0, Me.t)(e.toString(), new Date(F).toString()),
                    s = t.weekdays,
                    n = t.days,
                    r = 0;
                  if (s > 0) r = 7 * s;
                  (r += n), f.current && _(r);
                }
                var a;
              },
              [w]
            ),
            (0, n.jsx)(n.Fragment, {
              children: (0, n.jsxs)("div", {
                className: "flex flex-col items-center ".concat(u),
                children: [
                  (0, n.jsx)("div", {
                    className: "".concat(
                      "maker" === x
                        ? g
                          ? "cursor-default"
                          : "cursor-pointer"
                        : "cursor-default",
                      " w-full flex justify-center items-center select-none"
                    ),
                    onClick: function () {
                      j && l && !M && b(!g);
                    },
                    children: (0, n.jsx)("div", {
                      className: "".concat(
                        _e().insideBorder,
                        " px-[24px] py-[12px] rounded-[100px] flex justify-center items-center"
                      ),
                      ref: I,
                      style: { width: "100%" },
                      children: g
                        ? (0, n.jsx)("div", {
                            className:
                              "flex justify-between items-center w-full ".concat(
                                _e().fade
                              ),
                            onClick: function (e) {
                              e.stopPropagation();
                            },
                            children:
                              j && !M
                                ? (0, n.jsxs)(n.Fragment, {
                                    children: [
                                      (0, n.jsxs)("div", {
                                        className:
                                          "flex justify-between items-center text-primary-blue text-lg font-semibold mr-[24px]",
                                        children: [
                                          (0, n.jsx)("img", {
                                            src: Ee,
                                            className: "cursor-pointer",
                                            onClick: function (e) {
                                              w >
                                                (0, he.z)(
                                                  "MIN_DAY_DURATION_DEAL"
                                                ) &&
                                                f.current &&
                                                k(w - 1);
                                            },
                                            onMouseEnter: function (e) {
                                              e.target.src = Le;
                                            },
                                            onMouseLeave: function (e) {
                                              e.target.src = Ee;
                                            },
                                          }),
                                          (0, n.jsx)("div", {
                                            className:
                                              "mx-[16px] w-[100px] text-center ".concat(
                                                w > 99 ? "text-xs" : "text-base"
                                              ),
                                            children: "".concat(
                                              0 === w
                                                ? "\u221e"
                                                : ""
                                                    .concat(w, " day")
                                                    .concat(1 === w ? "" : "s")
                                            ),
                                          }),
                                          (0, n.jsx)("img", {
                                            src: Te,
                                            className: "cursor-pointer",
                                            onClick: function (e) {
                                              f.current && k(w + 1);
                                            },
                                            onMouseEnter: function (e) {
                                              e.target.src = Fe;
                                            },
                                            onMouseLeave: function (e) {
                                              e.target.src = Te;
                                            },
                                          }),
                                        ],
                                      }),
                                      (0, n.jsx)("div", {
                                        className:
                                          "text-primary-blue text-lg font-semibold cursor-pointer hover:underline",
                                        onClick: function () {
                                          b(!g);
                                        },
                                        children: m("saveLabel"),
                                      }),
                                    ],
                                  })
                                : (0, n.jsx)(n.Fragment, {
                                    children: (0, n.jsx)("div", {
                                      className: "h-[27px]",
                                    }),
                                  }),
                          })
                        : (0, n.jsxs)("div", {
                            className:
                              "flex justify-center items-center w-full ".concat(
                                _e().fade
                              ),
                            children: [
                              M &&
                                (0, n.jsx)(n.Fragment, {
                                  children: (0, n.jsx)("div", {
                                    className:
                                      "text-primary-dark-blue text-sm font-semibold mr-[8px]",
                                    children: m("tradeExpiredLabel"),
                                  }),
                                }),
                              j && !M
                                ? (0, n.jsxs)(n.Fragment, {
                                    children: [
                                      (0, n.jsx)("div", {
                                        className:
                                          "text-primary-dark-blue text-sm font-semibold mr-[8px]",
                                        children: m("tradeWillExpireLabel"),
                                      }),
                                      (0, n.jsx)("div", {
                                        className:
                                          "text-primary-blue text-lg font-semibold ".concat(
                                            "maker" === x && "hover:underline"
                                          ),
                                        children:
                                          "maker" === x
                                            ? ""
                                                .concat(w, " day")
                                                .concat(
                                                  0 === w || w > 1 ? "s" : ""
                                                )
                                            : ""
                                                .concat(S, " day")
                                                .concat(
                                                  0 === S || S > 1 ? "s" : ""
                                                ),
                                      }),
                                    ],
                                  })
                                : (0, n.jsx)(n.Fragment, {
                                    children: (0, n.jsx)("div", {
                                      className: "h-[27px]",
                                    }),
                                  }),
                            ],
                          }),
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: "flex justify-center items-center mt-[12px]",
                    children: (0, n.jsx)("span", {
                      className: "rubik text-primary-gray text-xs font-regular",
                      children: M
                        ? (0, n.jsx)(n.Fragment, {
                            children:
                              F &&
                              (0, n.jsxs)(n.Fragment, {
                                children: [
                                  m("expiredOnLabel"),
                                  ":",
                                  " ",
                                  F && A(new Date(F)),
                                ],
                              }),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                            children: [
                              m("expiryDateLabel"),
                              ":",
                              " ",
                              "maker" === x ? L && A(L) : F && A(new Date(F)),
                            ],
                          }),
                    }),
                  }),
                ],
              }),
            })
          );
        },
        Ae = "/_next/static/media/plus_white.3ed5ae31.svg",
        Re = "/_next/static/media/arrow_down.a03378a1.svg",
        ze = s(57232),
        Oe = s.n(ze),
        Ze = function (e) {
          var t = e.actionButtonText,
            s = void 0 === t ? "" : t,
            a = e.textEmptyContainer,
            l = void 0 === a ? "" : a,
            i = e.onClick,
            c = e.children,
            o = e.actionHasIcon,
            d = void 0 === o || o,
            u = e.hasShowMore,
            x = void 0 !== u && u,
            m = e.who,
            f = void 0 === m ? null : m,
            h = e.isLeft,
            g = void 0 === h || h,
            b = e.className,
            y = void 0 === b ? "" : b,
            j = (0, p.Z)("common").t,
            v = (0, r.useRef)(!1),
            N = (0, r.useState)(!0),
            w = N[0],
            k = N[1],
            C = (0, r.useRef)(null),
            S = (0, r.useRef)(null);
          return (
            (0, r.useEffect)(function () {
              return (
                (v.current = !0),
                function () {
                  v.current = !1;
                }
              );
            }, []),
            (0, r.useEffect)(
              function () {
                if (null != C.current) {
                  var e = new ResizeObserver(function (e) {
                    if (e.length > 0) {
                      var t,
                        s = e[0];
                      (t = Array.isArray(s.borderBoxSize)
                        ? s.borderBoxSize[0]
                        : s.borderBoxSize).blockSize > 80 && !0 === w
                        ? v.current && k(!1)
                        : t.blockSize <= 80 && !1 === w && v.current && k(!0);
                    }
                  });
                  return (
                    e.observe(C.current),
                    function () {
                      C.current && (e.unobserve(C.current), e.disconnect());
                    }
                  );
                }
              },
              [C.current, w]
            ),
            (0, r.useEffect)(function () {
              var e = function () {
                if (S.current) {
                  var e = S.current,
                    t = e.querySelector("div#badge-content"),
                    s = e.querySelectorAll(
                      "#badge-content > div:first-child > div"
                    ),
                    n = t.offsetWidth,
                    r = 0,
                    a = !0,
                    l = !1,
                    i = void 0;
                  try {
                    for (
                      var c, o = s[Symbol.iterator]();
                      !(a = (c = o.next()).done);
                      a = !0
                    ) {
                      r += c.value.offsetWidth + 8 * s.length;
                    }
                  } catch (d) {
                    (l = !0), (i = d);
                  } finally {
                    try {
                      a || null == o.return || o.return();
                    } finally {
                      if (l) throw i;
                    }
                  }
                  n > r && v.current && k(!0);
                }
              };
              return (
                window.addEventListener("resize", e),
                function () {
                  window.removeEventListener("resize", e);
                }
              );
            }, []),
            (0, n.jsx)(n.Fragment, {
              children: (0, n.jsx)("div", {
                className: ""
                  .concat(w ? "rounded-[100px]" : "rounded-[24px]", " ")
                  .concat(
                    c ? "py-[13px] px-[22px]" : "p-[22px]",
                    " flex items-center border-[1px] border-gary-200 select-none cursor-default border-solid bg-gray-100 "
                  )
                  .concat(y),
                ref: C,
                children: (0, n.jsxs)("div", {
                  className: "flex flex-col justify-center w-full",
                  ref: S,
                  children: [
                    (0, n.jsxs)("div", {
                      id: "badge-content",
                      className: "flex justify-between",
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "flex flex-wrap justify-start items-center ".concat(
                              w
                                ? Oe().keepHozDistance
                                : Oe().keepVerDistance +
                                    " " +
                                    Oe().keepHozDistance
                            ),
                          children:
                            c ||
                            (0, n.jsx)("span", {
                              className:
                                "rubik text-sm font-regular text-primary-dark-blue",
                              children: l,
                            }),
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "flex justify-end items-center cursor-pointer select-none ".concat(
                              w ? "" : "hidden"
                            ),
                          onClick: function (e) {
                            ("maker" !== f && null !== f) ||
                              (i && (!x || c.length <= 2) && i(e));
                          },
                          children: [
                            (0, n.jsx)("span", {
                              className:
                                "text-primary-blue hover:underline text-sm font-semibold mr-[8px] hover:text-primary-dark-blue",
                              children: x
                                ? (0, n.jsx)(n.Fragment, {
                                    children: (0, n.jsx)("div", {
                                      className:
                                        "flex justify-between items-center",
                                      children:
                                        c.length >= 3
                                          ? (0, n.jsx)(n.Fragment, {
                                              children: (0, n.jsxs)("div", {
                                                className:
                                                  "flex justify-between items-center",
                                                onClick: function (e) {
                                                  e.stopPropagation();
                                                  var t = !1;
                                                  if (
                                                    (Array.prototype.forEach.call(
                                                      window.document.getElementsByClassName(
                                                        g
                                                          ? "badge-left"
                                                          : "badge-right"
                                                      ),
                                                      function (e) {
                                                        e.classList.contains(
                                                          "badge-is-shown"
                                                        ) && (t = !0);
                                                      }
                                                    ),
                                                    t)
                                                  )
                                                    i && i(e);
                                                  else {
                                                    var s;
                                                    Array.prototype.forEach.call(
                                                      window.document.getElementsByClassName(
                                                        g
                                                          ? "badge-left"
                                                          : "badge-right"
                                                      ),
                                                      function (e) {
                                                        e.classList.remove(
                                                          "hidden"
                                                        ),
                                                          e.classList.add(
                                                            "badge-is-shown"
                                                          );
                                                      }
                                                    );
                                                    var n =
                                                      window.document.getElementById(
                                                        "badge-show-more-".concat(
                                                          g ? "left" : "right"
                                                        )
                                                      );
                                                    n &&
                                                      (n.innerHTML =
                                                        j("editOfferLabel")),
                                                      null ===
                                                        (s =
                                                          window.document.getElementById(
                                                            "badge-img-show-more-".concat(
                                                              g
                                                                ? "left"
                                                                : "right"
                                                            )
                                                          )) ||
                                                        void 0 === s ||
                                                        s.remove();
                                                  }
                                                },
                                                children: [
                                                  (0, n.jsx)("span", {
                                                    id: "badge-show-more-".concat(
                                                      g ? "left" : "right"
                                                    ),
                                                    className:
                                                      "hover:underline",
                                                    children: ""
                                                      .concat(
                                                        c.length - 2,
                                                        " more item"
                                                      )
                                                      .concat(
                                                        c.length - 2 > 1
                                                          ? "s"
                                                          : ""
                                                      ),
                                                  }),
                                                  (0, n.jsx)("img", {
                                                    id: "badge-img-show-more-".concat(
                                                      g ? "left" : "right"
                                                    ),
                                                    src: Re,
                                                    className:
                                                      "w-[16px] h-[16px]",
                                                  }),
                                                ],
                                              }),
                                            })
                                          : (0, n.jsx)(n.Fragment, {
                                              children:
                                                "maker" === f
                                                  ? j("editOfferLabel")
                                                  : "",
                                            }),
                                    }),
                                  })
                                : s,
                            }),
                            d &&
                              (0, n.jsx)("div", {
                                className:
                                  "rounded-full bg-primary-blue flex items-center justify-center cursor-pointer w-[24px] h-[24px] hover:bg-primary-dark-blue",
                                children: (0, n.jsx)("img", {
                                  src: Ae,
                                  className: "w-[8px] h-[8px]",
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: "flex justify-end mt-[26px] mb-[10px] ".concat(
                        w ? "hidden" : "",
                        " "
                      ),
                      children: (0, n.jsxs)("div", {
                        className:
                          "flex justify-end items-center w-[150px] cursor-pointer select-none",
                        onClick: function (e) {
                          ("maker" !== f && null !== f) ||
                            (i && (!x || c.length <= 2) && i(e));
                        },
                        children: [
                          (0, n.jsx)("span", {
                            className:
                              "text-primary-blue text-sm font-semibold hover:underline mr-[8px]",
                            children: x
                              ? (0, n.jsx)(n.Fragment, {
                                  children: (0, n.jsx)("div", {
                                    className:
                                      "flex justify-between items-center",
                                    children:
                                      c.length >= 3
                                        ? (0, n.jsx)(n.Fragment, {
                                            children: (0, n.jsxs)("div", {
                                              className:
                                                "flex justify-between items-center",
                                              onClick: function (e) {
                                                e.stopPropagation();
                                                var t = !1;
                                                if (
                                                  (Array.prototype.forEach.call(
                                                    window.document.getElementsByClassName(
                                                      g
                                                        ? "badge-left"
                                                        : "badge-right"
                                                    ),
                                                    function (e) {
                                                      e.classList.contains(
                                                        "badge-is-shown"
                                                      ) && (t = !0);
                                                    }
                                                  ),
                                                  t)
                                                )
                                                  i && i(e);
                                                else {
                                                  var s;
                                                  Array.prototype.forEach.call(
                                                    window.document.getElementsByClassName(
                                                      g
                                                        ? "badge-left"
                                                        : "badge-right"
                                                    ),
                                                    function (e) {
                                                      e.classList.remove(
                                                        "hidden"
                                                      ),
                                                        e.classList.add(
                                                          "badge-is-shown"
                                                        );
                                                    }
                                                  );
                                                  var n =
                                                    window.document.getElementById(
                                                      "badge-show-more-".concat(
                                                        g ? "left" : "right",
                                                        "-2"
                                                      )
                                                    );
                                                  n &&
                                                    (n.innerHTML =
                                                      "edit offer"),
                                                    null ===
                                                      (s =
                                                        window.document.getElementById(
                                                          "badge-img-show-more-".concat(
                                                            g
                                                              ? "left"
                                                              : "right",
                                                            "-2"
                                                          )
                                                        )) ||
                                                      void 0 === s ||
                                                      s.remove();
                                                }
                                              },
                                              children: [
                                                (0, n.jsx)("span", {
                                                  id: "badge-show-more-".concat(
                                                    g ? "left" : "right",
                                                    "-2"
                                                  ),
                                                  className: "hover:underline",
                                                  children: ""
                                                    .concat(
                                                      c.length - 2,
                                                      " more item"
                                                    )
                                                    .concat(
                                                      c.length - 2 > 1
                                                        ? "s"
                                                        : ""
                                                    ),
                                                }),
                                                (0, n.jsx)("img", {
                                                  id: "badge-img-show-more-".concat(
                                                    g ? "left" : "right",
                                                    "-2"
                                                  ),
                                                  src: Re,
                                                  className:
                                                    "w-[16px] h-[16px]",
                                                }),
                                              ],
                                            }),
                                          })
                                        : (0, n.jsx)(n.Fragment, {
                                            children:
                                              "maker" === f ? "edit offer" : "",
                                          }),
                                  }),
                                })
                              : s,
                          }),
                          d &&
                            (0, n.jsx)("div", {
                              className:
                                "rounded-full bg-primary-blue flex items-center justify-center cursor-pointer w-[24px] h-[24px]",
                              children: (0, n.jsx)("img", {
                                src: Ae,
                                className: "w-[8px] h-[8px]",
                              }),
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        },
        Be = "/_next/static/media/nfts.d023cf62.svg",
        Ue = s(19028),
        Pe = s.n(Ue),
        De = s(98448),
        He = "/_next/static/media/check_white.9085fb03.svg",
        Ve = "/_next/static/media/edit.73af6ed2.svg",
        We = s(79327),
        Ye = function (e) {
          var t,
            s = e.text,
            i = e.isDisabled,
            c = e.isEditable,
            o = e.isHidden,
            d = void 0 !== o && o,
            u = e.isSummary,
            x = void 0 !== u && u,
            m = e.isShrinked,
            p = void 0 !== m && m,
            f = e.tokenSymbol,
            h = e.icon,
            g = e.asset,
            b = void 0 === g ? null : g,
            y = e.isNFTsSummary,
            j = void 0 !== y && y,
            v = e.checkApprove,
            N = void 0 !== v && v,
            _ = e.onClick,
            L = e.className,
            T = (0, We.Z)(),
            F = (0, r.useRef)(!1),
            M = (0, r.useState)(!1),
            I = M[0],
            A = M[1],
            R = (0, r.useState)(!1),
            z = R[0],
            O = R[1],
            Z = (0, r.useState)(N),
            B = Z[0],
            U = (Z[1], (0, l.T)()),
            P = (0, l.C)(function (e) {
              return e;
            }),
            D = P.waccount,
            H = P.trademodal,
            V = D.currentNetworkId,
            W = D.account,
            Y = H.assetsAttemptsToApprove,
            J = H.assetsToApprove,
            G = (H.assetsCurrentlyApproved, H.isApproving),
            K = H.who,
            $ = H.maker,
            q = H.taker,
            Q = (0, C.Ge)().library;
          return (
            (0, r.useEffect)(function () {
              return (
                (F.current = !0),
                function () {
                  F.current = !1;
                }
              );
            }, []),
            (0, r.useEffect)(function () {
              if (B && V && b && "ERC20" === b.type) {
                var e = new (E())({
                    ethers: w,
                    web3Provider: Q,
                    network: (0, S.qe)(V).toUpperCase(),
                  }).getNetworksAvailable()[(0, S.qe)(V).toUpperCase()],
                  t = new k.CH(b.collection.address, b.collection.abi, Q);
                F.current && A(!0),
                  t
                    .allowance(W, e)
                    .then(function (e) {
                      var t = xe.O$.from(b.amount);
                      F.current && (A(!1), O(e.gte(t))),
                        U(
                          (0, a.cP)({
                            id: void 0,
                            contractAddress: b.collection.address,
                            type: b.type,
                            approved: e.gte(t),
                          })
                        );
                    })
                    .catch(function (e) {
                      console.error(e), F.current && (A(!1), O(!1));
                    });
              } else
                B &&
                  V &&
                  b &&
                  "NATIVE" === b.type &&
                  (U(
                    (0, a.cP)({
                      id: void 0,
                      contractAddress: b.collection.address,
                      type: b.type,
                      approved: !0,
                    })
                  ),
                  F.current && O(!0));
            }, []),
            (0, r.useEffect)(
              function () {
                if (B && $ && $.assets && q && q.assets && b)
                  ("maker" === K ? $ : q).assets
                    .filter(function (e) {
                      return "ERC20" === e.type;
                    })
                    .forEach(function (e) {
                      e.collection.address.toLowerCase() ===
                        b.collection.address.toLowerCase() &&
                        e.isApproved &&
                        F.current &&
                        (A(!1), O(!0));
                    }),
                    Y === J && I && F.current && A(!1);
                else if (B && $ && $.assets && q && q.assets && j && Y === J) {
                  I && F.current && A(!1);
                  var e = ("maker" === K ? $ : q).assets,
                    t = e.filter(function (e) {
                      return "ERC1155" === e.type || "ERC721" === e.type;
                    }).length;
                  e.filter(function (e) {
                    return (
                      ("ERC1155" === e.type || "ERC721" === e.type) &&
                      e.isApproved
                    );
                  }).length === t &&
                    F.current &&
                    (A(!1), O(!0));
                }
              },
              [Y]
            ),
            (0, r.useEffect)(
              function () {
                !z && G && B && F.current
                  ? A(!0)
                  : !G && B && F.current && A(!1);
              },
              [G]
            ),
            (0, n.jsx)(n.Fragment, {
              children: (0, n.jsxs)("div", {
                title: "".concat(s).concat(f ? " ".concat(f) : ""),
                className: ""
                  .concat(
                    x
                      ? "border-slate-200"
                      : i
                      ? "border-primary-gray"
                      : "border-primary-blue",
                    " "
                  )
                  .concat(
                    c
                      ? "hover:shadow hover:shadow-lg hover:shadow-indigo-200"
                      : "",
                    " "
                  )
                  .concat(
                    _ &&
                      !i &&
                      "cursor-pointer select-none ".concat(
                        !c && Pe().clickableBadge
                      ),
                    " "
                  )
                  .concat(
                    d ? "hidden" : "",
                    " flex justify-center items-center px-[16px] py-[8px] border-[1px] border-solid rounded-[40px] bg-primary-white text-center w-max "
                  )
                  .concat(L),
                onClick: _,
                onMouseEnter: function () {
                  if (_) {
                    var e = document.getElementById("img-".concat(T));
                    e && (e.src = Ve);
                  }
                },
                onMouseLeave: function (e) {
                  if (_) {
                    var t = document.getElementById("img-".concat(T));
                    t && (t.src = h);
                  }
                },
                children: [
                  (0, n.jsxs)("span", {
                    id: T,
                    className: "".concat(
                      x
                        ? "text-primary-blue"
                        : i
                        ? "text-primary-gray"
                        : "text-primary-blue ".concat(
                            _ && "hover:text-primary-dark-blue"
                          ),
                      " text-sm font-semibold"
                    ),
                    children: [
                      p
                        ? ((t = s), t.length > 5 ? t.substring(0, 4) + ".." : t)
                        : s,
                      " ",
                      h &&
                        f &&
                        (0, n.jsx)("span", {
                          className: "text-primary-dark-blue",
                          children: f,
                        }),
                    ],
                  }),
                  !h || b || j
                    ? (0, n.jsx)(n.Fragment, {
                        children:
                          b || j
                            ? (0, n.jsx)(n.Fragment, {
                                children:
                                  I && !z
                                    ? (0, n.jsx)(n.Fragment, {
                                        children: (0, n.jsx)("div", {
                                          className:
                                            "flex items-center justify-center w-[24px] h-[24px] bg-primary-blue rounded-full relative left-[10px]",
                                          children: (0, n.jsx)("img", {
                                            src: De.Z.src,
                                            className:
                                              "w-[15px] h-[15px] ".concat(
                                                Pe().rotating
                                              ),
                                          }),
                                        }),
                                      })
                                    : (0, n.jsx)(n.Fragment, {
                                        children: z
                                          ? (0, n.jsx)(n.Fragment, {
                                              children: (0, n.jsx)("div", {
                                                className:
                                                  "flex items-center justify-center w-[24px] h-[24px] bg-primary-blue rounded-full relative left-[10px]",
                                                children: (0, n.jsx)("img", {
                                                  src: He,
                                                  className:
                                                    "w-[15px] h-[15px]",
                                                }),
                                              }),
                                            })
                                          : (0, n.jsx)("img", {
                                              className:
                                                "w-[24px] h-[24px] relative left-[10px]",
                                              src:
                                                "string" === typeof h ? h : "",
                                            }),
                                      }),
                              })
                            : (0, n.jsx)(n.Fragment, {}),
                      })
                    : (0, n.jsx)(n.Fragment, {
                        children:
                          "string" === typeof h
                            ? (0, n.jsx)("img", {
                                className:
                                  "w-[24px] h-[24px] relative left-[10px]",
                                src: h,
                                id: "img-".concat(T),
                              })
                            : (0, n.jsx)(n.Fragment, { children: h }),
                      }),
                ],
              }),
            })
          );
        },
        Je = "/_next/static/media/swap.ef7d87e4.svg",
        Ge = "/_next/static/media/check_empty.e4c035a9.svg",
        Ke = s(81538),
        $e = s.n(Ke),
        qe = s(93699),
        Qe = s(83885),
        Xe = s.n(Qe),
        et = "/_next/static/media/plus_circle.7e1dd773.svg",
        tt = "/_next/static/media/plus_circle_dark_blue.f9195683.svg",
        st = "/_next/static/media/minus_circle.7fa4d760.svg",
        nt = "/_next/static/media/minus_circle_dark_blue.d47d605a.svg";
      function rt(e, t) {
        return null != t &&
          "undefined" !== typeof Symbol &&
          t[Symbol.hasInstance]
          ? t[Symbol.hasInstance](e)
          : e instanceof t;
      }
      var at = function (e) {
          var t = e.NFTSrc,
            s = e.NFTId,
            a = e.NFTCollection,
            l = e.owner,
            i = e.isOpen,
            c = void 0 !== i && i,
            o = e.NFTAmount,
            d = void 0 === o ? "0" : o,
            x = e.isUpdating,
            m = void 0 !== x && x,
            f = e.action,
            h = e.actionClose,
            g = (0, p.Z)("common").t,
            b = (0, r.useState)(c),
            y = b[0],
            j = b[1],
            v = (0, r.useState)(d),
            N = v[0],
            w = v[1],
            S = (0, r.useState)(),
            _ = S[0],
            E = S[1],
            L = (0, r.useState)(),
            T = L[0],
            F = L[1],
            M = (0, C.Ge)().library;
          return (
            (0, r.useEffect)(function () {
              T || F(new k.CH(a.address, a.abi, M));
            }, []),
            (0, r.useEffect)(
              function () {
                T &&
                  T["balanceOf(address,uint256)"](l, s)
                    .then(function (e) {
                      E(e);
                    })
                    .catch(function (e) {
                      console.log(e), E(xe.O$.from("0"));
                    });
              },
              [T]
            ),
            (0, n.jsx)(n.Fragment, {
              children:
                y &&
                (0, n.jsx)("div", {
                  className: "".concat(
                    Xe().overlay,
                    " lg:flex lg:justify-center lg:items-center lg:fixed lg:top-0 lg:left-0 lg:w-full lg:h-full z-[20000]"
                  ),
                  children: (0, n.jsxs)("div", {
                    className: "".concat(
                      Xe().erc1155AmountModal,
                      " fixed flex flex-col w-full bg-primary-white z-[20000] rounded-t-[32px] py-[32px] px-[16px] w-full h-full text-center overflow-y-scroll lg:relative lg:w-[520px] lg:rounded-[16px] lg:h-[auto] lg:p-[32px]"
                    ),
                    children: [
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-col items-center justify-center mt-[16px]",
                        children: [
                          (0, n.jsx)("div", {
                            className: "w-[176px] h-[176px] rounded-[8px]",
                            style: {
                              backgroundImage: "url(".concat(t, ")"),
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center center",
                            },
                          }),
                          (0, n.jsxs)("div", {
                            className:
                              "m-[16px] flex flex-col items-center justify-center w-full",
                            children: [
                              (0, n.jsxs)("span", {
                                className:
                                  "text-lg font-semibold text-primary-blue w-[150px] overflow-ellipsis overflow-hidden whitespace-nowrap",
                                title: "#".concat(s),
                                children: ["#", s],
                              }),
                              (0, n.jsxs)("div", {
                                className:
                                  "flex justify-center items-center mt-[8px]",
                                children: [
                                  (0, n.jsx)(be.Z, {
                                    src: a.imageUrl,
                                    statusVerification: a.statusVerification,
                                    className: "mr-[4px] w-[32px] h-[32px]",
                                    badgeClassName: "w-[16px] h-[16px]",
                                  }),
                                  (0, n.jsx)("span", {
                                    className:
                                      "text-xs font-semibold text-primary-dark-blue",
                                    children: a.name,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-col items-center justify-center mt-[24px]",
                        children: [
                          (0, n.jsx)("span", {
                            className:
                              "text-xl font-semibold text-primary-dark-blue",
                            children: g("selectDesiredAmountLabel"),
                          }),
                          (0, n.jsxs)("div", {
                            className:
                              "flex justify-center items-center mt-[16px] w-full",
                            children: [
                              (0, n.jsx)("img", {
                                src: st,
                                className:
                                  "w-[24px] h-[24px] mr-[16px] cursor-pointer",
                                onClick: function () {
                                  "undefined" === typeof N
                                    ? w("0")
                                    : Number(N) > 0 &&
                                      w((Number(N) - 1).toString());
                                },
                                onMouseEnter: function (e) {
                                  e.target.src = nt;
                                },
                                onMouseLeave: function (e) {
                                  e.target.src = st;
                                },
                              }),
                              (0, n.jsxs)("div", {
                                className:
                                  "text-primary-blue flex justify-center text-xl font-semibold text-center w-[55px]",
                                children: [
                                  (0, n.jsx)("div", { children: N }),
                                  (0, n.jsx)("div", {
                                    className:
                                      "text-xl font-light text-primary-gray w-[8px] mx-[8px]",
                                    children: "/",
                                  }),
                                  (0, n.jsx)("div", {
                                    children: _ && _.toString(),
                                  }),
                                ],
                              }),
                              (0, n.jsx)("img", {
                                src: et,
                                className:
                                  "w-[24px] h-[24px] cursor-pointer ml-[16px]",
                                onClick: function () {
                                  "undefined" === typeof N
                                    ? w("0")
                                    : Number(N) <
                                        Number(
                                          null === _ || void 0 === _
                                            ? void 0
                                            : _.toString()
                                        ) && w((Number(N) + 1).toString());
                                },
                                onMouseEnter: function (e) {
                                  e.target.src = tt;
                                },
                                onMouseLeave: function (e) {
                                  e.target.src = et;
                                },
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-col mt-[40px] lg:flex-row-reverse lg:justify-between",
                        children: [
                          (0, n.jsx)(u.Z, {
                            text: g(
                              m ? "saveCapitalizedLabel" : "addCapitalizedLabel"
                            ),
                            type: {
                              class: "primary",
                              icon: !1,
                              hasColoredBg: !1,
                            },
                            size: "large",
                            initialState: { state: "default" },
                            className: "mb-[16px] lg:mb-[auto]",
                            onClick: function () {
                              rt(f, Function) && f(N), j(!1);
                            },
                          }),
                          (0, n.jsx)(u.Z, {
                            text: g("cancelLabel"),
                            type: {
                              class: "secondary",
                              icon: !1,
                              hasColoredBg: !1,
                            },
                            size: "large",
                            initialState: { state: "default" },
                            onClick: function () {
                              rt(h, Function) && h(), j(!1);
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
            })
          );
        },
        lt = s(153),
        it = function (e, t, s) {
          switch (e) {
            case 1:
              return "https://opensea.io/assets/".concat(t, "/").concat(s);
            case 4:
              return "https://testnets.opensea.io/assets/"
                .concat(t, "/")
                .concat(s);
            case 137:
              return "https://opensea.io/assets/matic/"
                .concat(t, "/")
                .concat(s);
            case 80001:
              return "https://testnets.opensea.io/assets/matic/"
                .concat(t, "/")
                .concat(s);
            default:
              return "https://opensea.io/assets/".concat(t, "/").concat(s);
          }
        },
        ct = "/_next/static/media/suspicious.a17fc4e9.svg",
        ot = s(68532),
        dt = s.n(ot),
        ut = function (e) {
          e.className;
          var t = (0, p.Z)("common").t,
            s = (0, r.useState)(!1),
            a = s[0],
            l = s[1];
          return (0, n.jsxs)("div", {
            className: "relative",
            onMouseEnter: function () {
              l(!0);
            },
            onMouseLeave: function () {
              l(!1);
            },
            children: [
              (0, n.jsx)("div", {
                className: "flex justify-center items-center w-[40px] h-[40px]",
                children: (0, n.jsx)("div", {
                  className:
                    "flex justify-center items-center rounded-full w-[28px] h-[28px] bg-state-warning",
                  children: (0, n.jsx)("img", {
                    src: ct,
                    className: "w-[16px] h-[16px]",
                  }),
                }),
              }),
              a &&
                (0, n.jsx)("div", {
                  className: "".concat(
                    dt().bubble,
                    " absolute bg-state-warning whitespace-nowrap rounded-[5px] flex items-center shadow shadow-sm"
                  ),
                  children: (0, n.jsx)("span", {
                    className:
                      "rubik text-xs font-semibold p-[5px] text-primary-white",
                    children: t("suspiciousAssetLabel"),
                  }),
                }),
            ],
          });
        },
        xt = function (e) {
          var t = e.NFTSrc,
            s = e.NFTId,
            i = e.standard,
            c = e.collection,
            o = e.address,
            d = e.isSelected,
            u = void 0 !== d && d,
            x = e.isShrinked,
            m = void 0 !== x && x,
            p = e.checkApprove,
            f = void 0 !== p && p,
            h = e.checkReported,
            g = void 0 !== h && h,
            b = e.isTaker,
            y = void 0 !== b && b,
            j = e.amount,
            v = e.hasPlaceholder,
            N = void 0 !== v && v,
            _ = e.className,
            L = e.onClick,
            T = (0, r.useRef)(!1),
            F = (0, r.useState)(!1),
            M = F[0],
            I = F[1],
            A = (0, r.useState)(u),
            R = A[0],
            z = A[1],
            O = (0, r.useState)(!1),
            Z = O[0],
            B = O[1],
            U = (0, r.useState)(!1),
            P = U[0],
            D = U[1],
            H = (0, r.useState)(j),
            V = H[0],
            W = H[1],
            Y = (0, r.useState)(t),
            J = Y[0],
            G = Y[1],
            K = (0, r.useState)(N),
            Q = K[0],
            X = K[1],
            ee = (0, r.useState)(f)[0],
            te = (0, r.useState)(g)[0],
            se = (0, r.useState)(!1),
            ne = se[0],
            re = se[1],
            ae = (0, l.T)(),
            le = (0, l.C)(function (e) {
              return e;
            }),
            ie = le.waccount,
            ce = le.trademodal,
            oe = ie.currentNetworkId,
            de = ce.assetsAttemptsToApprove,
            ue = ce.assetsToApprove,
            xe = ce.isApproving,
            me = ce.who,
            pe = ce.maker,
            fe = ce.taker,
            he = (0, C.Ge)().library;
          return (
            (0, r.useEffect)(function () {
              return (
                (T.current = !0),
                function () {
                  T.current = !1;
                }
              );
            }, []),
            (0, r.useEffect)(
              function () {
                if (ee && oe) {
                  var e = new (E())({
                      ethers: w,
                      web3Provider: he,
                      network: (0, S.qe)(oe).toUpperCase(),
                    }).getNetworksAvailable()[(0, S.qe)(oe).toUpperCase()],
                    t = new k.CH(c.address, c.abi, he);
                  T.current && B(!0),
                    t
                      .isApprovedForAll(o, e)
                      .then(function (e) {
                        T.current && (B(!1), D(e)),
                          ae(
                            (0, a.cP)({
                              id: s,
                              contractAddress: c.address,
                              type: i,
                              approved: e,
                            })
                          );
                      })
                      .catch(function (e) {
                        console.error(e), T.current && (B(!1), D(!1));
                      });
                }
              },
              [ee]
            ),
            (0, r.useEffect)(
              function () {
                ee &&
                  pe &&
                  pe.assets &&
                  fe &&
                  fe.assets &&
                  (("maker" === me ? pe : fe).assets.forEach(function (e) {
                    e.type === i &&
                      e.collection.address.toLowerCase() ===
                        c.address.toLowerCase() &&
                      e.id === s &&
                      e.isApproved &&
                      T.current &&
                      (B(!1), D(!0));
                  }),
                  de === ue && Z && T.current && B(!1));
              },
              [de]
            ),
            (0, r.useEffect)(
              function () {
                !P && xe && ee
                  ? T.current && B(!0)
                  : !xe && ee && T.current && B(!1);
              },
              [xe]
            ),
            (0, r.useEffect)(
              function () {
                te &&
                  oe &&
                  (0, $.bf)((0, q.f)("getNftReported", [oe, c.address, s]))
                    .then(function (e) {
                      var t = e.data[0].isCompromised;
                      T.current && re(t),
                        ae((0, a.Nu)({ isReported: t, isError: !1 }));
                    })
                    .catch(function (e) {
                      console.error(e),
                        ae((0, a.Nu)({ isReported: !1, isError: !0 }));
                    });
              },
              [te]
            ),
            (0, r.useEffect)(
              function () {
                var e, t;
                R &&
                  ((null === pe || void 0 === pe ? void 0 : pe.assets) &&
                    (e = pe.assets.find(function (e) {
                      return (
                        e.collection.address.toLowerCase() ===
                          c.address.toLowerCase() && e.id === s
                      );
                    })),
                  (null === fe || void 0 === fe ? void 0 : fe.assets) &&
                    (t = fe.assets.find(function (e) {
                      return (
                        e.collection.address.toLowerCase() ===
                          c.address.toLowerCase() && e.id === s
                      );
                    })),
                  e || t || (T.current && z(!1)));
              },
              [fe, pe]
            ),
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsxs)("div", {
                  className: ""
                    .concat(
                      R ? "border-primary-blue" : "border-[transparent]",
                      " "
                    )
                    .concat(
                      m ? "" : "cursor-pointer",
                      " border-solid border-[1px] rounded-[16px] shadow-light-shadow select-none shadow-md bg-primary-white w-[163.5px] h-[224px] p-[12px]\n          flex flex-col items-center hover:shadow-lg "
                    )
                    .concat(
                      m
                        ? "lg:w-[170px] lg:h-[222px] xl:w-[184px] xl:h-[232px]"
                        : "lg:w-[208px] lg:h-[284px]",
                      "  lg:p-[16px] "
                    )
                    .concat(_),
                  onClick: function (e) {
                    m ||
                      (L && L(e, !R),
                      Z || P || ("ERC1155" === i ? I(!0) : z(!R)));
                  },
                  children: [
                    (0, n.jsxs)("div", {
                      className:
                        "rounded-[8px] relative w-full h-[140px] ".concat(
                          m ? "lg:h-[152px]" : "lg:h-[176px]"
                        ),
                      style: {
                        backgroundImage: "url(".concat(J, ")"),
                        backgroundSize: "".concat(Q ? "50% auto" : "cover"),
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundColor: "".concat(Q ? "rgb(243,244,246)" : ""),
                        border: "".concat(N ? "1px solid #e5e7eb" : ""),
                      },
                      children: [
                        (0, n.jsx)("img", {
                          className: "hidden",
                          src: "".concat(J),
                          onError: function () {
                            G(lt.Z.src), X(!0);
                          },
                        }),
                        R &&
                          "ERC721" === i &&
                          (0, n.jsx)("div", {
                            className:
                              "absolute -top-[15px] -right-[15px] flex justify-center items-center w-[40px] h-[40px]",
                            children: (0, n.jsx)("div", {
                              className:
                                "flex justify-center items-center rounded-full w-[27px] h-[27px] bg-primary-white border-primary-blue border-solid border-[1px]",
                              children: (0, n.jsx)("img", {
                                src: Ge,
                                className: "w-[16px] h-[16px]",
                              }),
                            }),
                          }),
                        R &&
                          "ERC1155" === i &&
                          (0, n.jsx)("div", {
                            className:
                              "absolute -top-[15px] -right-[15px] flex justify-center items-center w-[40px] h-[40px]",
                            children: (0, n.jsx)("div", {
                              className:
                                "flex justify-center items-center rounded-full w-[27px] h-[27px] bg-primary-white border-primary-blue border-solid border-[1px]",
                              children: (0, n.jsx)("span", {
                                className:
                                  "text-primary-blue text-[16px] font-semibold",
                                children: V,
                              }),
                            }),
                          }),
                        m &&
                          "ERC1155" === i &&
                          (0, n.jsx)("div", {
                            className:
                              "absolute -top-[15px] -right-[15px] flex justify-center items-center w-[40px] h-[40px]",
                            children: (0, n.jsx)("div", {
                              className:
                                "flex justify-center items-center rounded-full w-[27px] h-[27px] bg-primary-white border-primary-gray border-solid border-[1px]",
                              children: (0, n.jsx)("span", {
                                className:
                                  "text-primary-gray text-[16px] font-semibold",
                                children: V,
                              }),
                            }),
                          }),
                        Z &&
                          (0, n.jsx)("div", {
                            className:
                              "absolute -top-[15px] -right-[15px] flex justify-center items-center w-[40px] h-[40px]",
                            children: (0, n.jsx)("div", {
                              className:
                                "flex justify-center items-center rounded-full w-[28px] h-[28px] bg-primary-blue",
                              children: (0, n.jsx)("img", {
                                src: De.Z.src,
                                className: "".concat(
                                  $e().rotating,
                                  " w-[16px] h-[16px]"
                                ),
                              }),
                            }),
                          }),
                        P &&
                          (0, n.jsx)("div", {
                            className:
                              "absolute -top-[15px] -right-[15px] flex justify-center items-center w-[40px] h-[40px]",
                            children: (0, n.jsx)("div", {
                              className:
                                "flex justify-center items-center rounded-full w-[28px] h-[28px] bg-primary-blue",
                              children: (0, n.jsx)("img", {
                                src: He,
                                className: "w-[16px] h-[16px]",
                              }),
                            }),
                          }),
                        ne &&
                          (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsx)("div", {
                              className: "absolute -top-[15px] -left-[15px]",
                              children: (0, n.jsx)(ut, {}),
                            }),
                          }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: "mt-[8px] text-left w-full",
                      children: (0, n.jsx)("span", {
                        className: "text-base "
                          .concat(
                            R ? "text-primary-blue" : "text-primary-dark-blue",
                            " "
                          )
                          .concat(
                            m ? "lg:text-sm" : "lg:text-lg",
                            " font-semibold"
                          ),
                        children: (0, n.jsx)("a", {
                          href: oe ? it(oe, c.address, Number(s)) : "",
                          target: "_blank",
                          onClick: function (e) {
                            e.stopPropagation();
                          },
                          children: (0, n.jsx)(qe.Z, {
                            text: "#".concat(s),
                            className: "h-[28.5px]",
                            animationSpeed: "20",
                            isHoverable: !0,
                          }),
                        }),
                      }),
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "flex justify-center items-center mt-[4px] w-full ".concat(
                          m && "lg:mt-[8px]"
                        ),
                      children: [
                        (0, n.jsx)(be.Z, {
                          src: c.imageUrl,
                          statusVerification: c.statusVerification,
                          className: "mr-[10px] w-[30px] h-[30px]",
                          badgeClassName: "w-[15px] h-[15px]",
                          showCollectionTooltip: !0,
                          collection: c,
                        }),
                        (0, n.jsx)("div", {
                          className: "flex-1 h-full",
                          children: (0, n.jsx)("a", {
                            href: oe ? it(oe, c.address, Number(s)) : "",
                            target: "_blank",
                            onClick: function (e) {
                              e.stopPropagation();
                            },
                            children: (0, n.jsx)(qe.Z, {
                              text: c.name,
                              className:
                                "h-full text-xxs font-semibold text-primary-dark-blue flex items-center",
                              isHoverable: !0,
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                M &&
                  (0, n.jsx)(at, {
                    NFTSrc: t,
                    NFTId: s,
                    NFTCollection: c,
                    NFTAmount: V,
                    isUpdating: Number(V) > 0,
                    owner: o,
                    isOpen: !0,
                    action: function (e) {
                      W(e),
                        I(!1),
                        0 === Number(e)
                          ? (z(!1),
                            ae(
                              y
                                ? (0, a.E4)({
                                    id: s,
                                    type: i,
                                    amount: "0",
                                    amountHumanReadable: "0",
                                    owner: o,
                                    collection: c,
                                    imageSrc: t,
                                    isApproved: !1,
                                    hasPlaceholder: N,
                                  })
                                : (0, a.iB)({
                                    id: s,
                                    type: i,
                                    amount: "0",
                                    amountHumanReadable: "0",
                                    owner: o,
                                    collection: c,
                                    imageSrc: t,
                                    isApproved: !1,
                                    hasPlaceholder: N,
                                  })
                            ),
                            ae((0, a.Gu)()))
                          : (z(!0),
                            y
                              ? (ae(
                                  (0, a.E4)({
                                    id: s,
                                    type: i,
                                    amount: e,
                                    amountHumanReadable: e,
                                    owner: o,
                                    collection: c,
                                    imageSrc: t,
                                    isApproved: !1,
                                    hasPlaceholder: N,
                                  })
                                ),
                                ae(
                                  (0, a.c6)({
                                    id: s,
                                    type: i,
                                    amount: e,
                                    amountHumanReadable: e,
                                    owner: o,
                                    collection: c,
                                    imageSrc: t,
                                    isApproved: !1,
                                    hasPlaceholder: N,
                                  })
                                ))
                              : (ae(
                                  (0, a.iB)({
                                    id: s,
                                    type: i,
                                    amount: e,
                                    amountHumanReadable: e,
                                    owner: o,
                                    collection: c,
                                    imageSrc: t,
                                    isApproved: !1,
                                    hasPlaceholder: N,
                                  })
                                ),
                                ae(
                                  (0, a.TG)({
                                    id: s,
                                    type: i,
                                    amount: e,
                                    amountHumanReadable: e,
                                    owner: o,
                                    collection: c,
                                    imageSrc: t,
                                    isApproved: !1,
                                    hasPlaceholder: N,
                                  })
                                )),
                            ae((0, a.Gu)()));
                    },
                    actionClose: function () {
                      I(!1);
                    },
                  }),
              ],
            })
          );
        },
        mt = s(73468),
        pt = s(306),
        ft = s.n(pt),
        ht = function () {
          var e = (0, p.Z)("common").t,
            t = (0, r.useRef)(!1),
            s = (0, r.useState)(0),
            a = s[0],
            i = s[1],
            c = (0, l.C)(function (e) {
              return e;
            }).trademodal,
            o = c.assetsCurrentlyApproved,
            d = c.assetsToApprove,
            u = 100 / d;
          return (
            (0, r.useEffect)(function () {
              return (
                (t.current = !0),
                function () {
                  t.current = !1;
                }
              );
            }, []),
            (0, r.useEffect)(
              function () {
                o > 0 && t.current && i(a + u), o === d && t.current && i(100);
              },
              [o]
            ),
            (0, n.jsx)(n.Fragment, {
              children: (0, n.jsxs)("div", {
                className: "flex flex-col items-center w-full",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "flex items-center h-[15px] w-full border-primary-white border-[1px] border-solid rounded-[16px] px-[4px]",
                    children: (0, n.jsx)("div", {
                      className: "bg-primary-white h-[8px] rounded-[8px]",
                      style: { width: "".concat(a, "%") },
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "mt-[16px] text-primary-white text-lg font-semibold",
                    children: [o, " / ", d, " ", e("approvedLabel")],
                  }),
                ],
              }),
            })
          );
        },
        gt = function (e) {
          var t = e.isOpen,
            s = void 0 !== t && t,
            i = (e.actionClose, (0, p.Z)("common").t),
            c = (0, r.useState)(s),
            o = c[0],
            d = (c[1], (0, l.T)()),
            x = (0, l.C)(function (e) {
              return e;
            }).trademodal,
            m = x.assetsCurrentlyApproved,
            f = x.assetsToApprove,
            h = x.currentStepMenu,
            g = x.taker,
            b = x.maker,
            y = x.isErrorToCheckReportedAssets,
            j = x.hasFinishedToCheckReportedAssets,
            v = x.existsReportedAsset,
            N = function () {
              d((0, a._1)(!1));
            };
          return (
            (0, r.useEffect)(
              function () {
                o || N();
              },
              [o]
            ),
            (0, n.jsx)(n.Fragment, {
              children:
                o &&
                (0, n.jsx)("div", {
                  className: "".concat(
                    ft().overlay,
                    " lg:flex lg:justify-center lg:items-center lg:fixed lg:top-0 lg:left-0 lg:w-full lg:h-full z-[20000]"
                  ),
                  onClick: function () {
                    d((0, a._1)(!1));
                  },
                  children: (0, n.jsxs)("div", {
                    className: ""
                      .concat(
                        ft().approvingModal,
                        " fixed flex flex-col w-full bg-primary-blue z-[20000] rounded-t-[32px] py-[40px] px-[16px] w-full h-full text-center lg:relative lg:w-[520px] lg:rounded-[16px] lg:h-[auto] lg:p-[32px] "
                      )
                      .concat(m === f ? "".concat(ft().goUpButton) : ""),
                    onClick: function (e) {
                      e.stopPropagation();
                    },
                    children: [
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-col items-center justify-center text-primary-white",
                        children: [
                          (0, n.jsx)("h3", {
                            className:
                              "text-2xl font-semibold text-primary-white mb-[8px]",
                            children: i("assetsBeingApprovedLabel"),
                          }),
                          (0, n.jsx)("span", {
                            className: "rubik text-base font-light",
                            children: i("pleaseWaitConfirmTxLabel"),
                          }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "flex flex-col items-center justify-center mt-[40px]",
                        children: (0, n.jsx)(ht, {}),
                      }),
                      m === f &&
                        (0, n.jsxs)("div", {
                          className:
                            "flex flex-col justify-center items-center mt-[40px] lg:flex-row-reverse lg:justify-between",
                          children: [
                            j
                              ? (0, n.jsx)(n.Fragment, {
                                  children: y
                                    ? (0, n.jsx)(u.Z, {
                                        text: i("errorLabel"),
                                        type: {
                                          class: "primary",
                                          hasColoredBg: !0,
                                          icon: !1,
                                        },
                                        size: "small",
                                        initialState: { state: "disabled" },
                                        className:
                                          "w-full mb-[16px] lg:mb-[0] lg:w-[auto]",
                                      })
                                    : (0, n.jsx)(n.Fragment, {
                                        children: v
                                          ? (0, n.jsx)(u.Z, {
                                              text: i("tradeDisabledLabel"),
                                              type: {
                                                class: "primary",
                                                hasColoredBg: !0,
                                                icon: !1,
                                              },
                                              size: "small",
                                              initialState: {
                                                state: "disabled",
                                              },
                                              className:
                                                "w-full mb-[16px] lg:mb-[0] lg:w-[auto]",
                                            })
                                          : (0, n.jsx)(u.Z, {
                                              text: i("confirmLabel"),
                                              type: {
                                                class: "primary",
                                                hasColoredBg: !0,
                                                icon: !1,
                                              },
                                              size: "large",
                                              onClick: function (e) {
                                                if (
                                                  (N(),
                                                  (null === b || void 0 === b
                                                    ? void 0
                                                    : b.assets) &&
                                                    (null === g || void 0 === g
                                                      ? void 0
                                                      : g.assets))
                                                )
                                                  if (I(b.assets, g.assets))
                                                    e("disabled");
                                                  else {
                                                    var t = M(
                                                      b.assets,
                                                      g.assets
                                                    );
                                                    d(
                                                      t
                                                        ? (0, a.AW)(!0)
                                                        : (0, a.Um)(h + 1)
                                                    );
                                                  }
                                              },
                                              initialState: {
                                                state: "default",
                                              },
                                              className:
                                                "w-full mb-[16px] lg:mb-[0] lg:w-[auto]",
                                            }),
                                      }),
                                })
                              : (0, n.jsx)(u.Z, {
                                  text: "filler",
                                  type: {
                                    class: "primary",
                                    hasColoredBg: !0,
                                    icon: !1,
                                  },
                                  size: "small",
                                  initialState: { state: "loading" },
                                  className:
                                    "w-full mb-[16px] lg:mb-[0] lg:w-[auto]",
                                }),
                            (0, n.jsx)(u.Z, {
                              text: i("cancelLabel"),
                              type: {
                                class: "secondary",
                                hasColoredBg: !0,
                                icon: !1,
                              },
                              size: "large",
                              onClick: function () {
                                N();
                              },
                              initialState: { state: "default" },
                              className: "w-full lg:w-[auto]",
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
            })
          );
        },
        bt = s(40692),
        yt = s.n(bt),
        jt = function (e) {
          var t = e.NFTSrc,
            s = e.hasPlaceholder,
            a = e.className,
            l = (0, r.useState)(t),
            i = l[0],
            c = l[1],
            o = (0, r.useState)(s),
            d = o[0],
            u = o[1];
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsx)("div", {
              className:
                "rounded-[8px] relative w-[64px] h-[64px] border-[2px] border-solid ".concat(
                  a
                ),
              style: {
                backgroundImage: "url(".concat(i, ")"),
                backgroundSize: "".concat(d ? "50% auto" : "cover"),
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundColor: "".concat(d ? "rgb(243,244,246)" : ""),
              },
              children: (0, n.jsx)("img", {
                className: "hidden",
                src: "".concat(i),
                onError: function () {
                  c(lt.Z.src), u(!0);
                },
              }),
            }),
          });
        },
        vt = "/_next/static/media/etherscan_small_icon.958d93d1.svg",
        Nt = "/_next/static/media/polygonscan_icon.a735e994.svg",
        wt = "/_next/static/media/opensea_white_icon.efe0043e.svg",
        kt = s(70687),
        Ct = function (e) {
          var t = e.isOpen,
            s = void 0 !== t && t,
            i = (e.actionClose, (0, p.Z)("common").t),
            c = (0, r.useState)(s)[0],
            o = (0, l.T)(),
            d = (0, l.C)(function (e) {
              return e;
            }),
            x = d.trademodal,
            m = d.waccount,
            f = x.currentStepMenu,
            h = x.taker,
            g = x.maker,
            b = m.currentNetworkId,
            y = function () {
              o((0, a.AW)(!1));
            };
          return (
            (0, r.useEffect)(
              function () {
                c || y();
              },
              [c]
            ),
            (0, n.jsx)(n.Fragment, {
              children:
                c &&
                (0, n.jsx)("div", {
                  className: "".concat(
                    yt().overlay,
                    " lg:flex lg:justify-center lg:items-center lg:fixed lg:top-0 lg:left-0 lg:w-full lg:h-full z-[20000]"
                  ),
                  onClick: function () {
                    o((0, a.AW)(!1));
                  },
                  children: (0, n.jsxs)("div", {
                    className: "".concat(
                      yt().unverifiedCollectionModal,
                      " fixed flex flex-col w-full bg-primary-white z-[20000] rounded-t-[32px] py-[40px] px-[16px] w-full h-full overflow-y-scroll text-center lg:relative lg:w-[520px] lg:h-full lg:rounded-[16px] lg:h-[auto] lg:p-[32px]"
                    ),
                    onClick: function (e) {
                      e.stopPropagation();
                    },
                    children: [
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-col items-center justify-center text-primary-blue",
                        children: [
                          (0, n.jsx)("h3", {
                            className: "text-2xl font-semibold mb-[8px]",
                            children: i("takeCautionTitleLabel"),
                          }),
                          (0, n.jsx)("span", {
                            className:
                              "rubik text-base text-primary-blue font-light",
                            children: b
                              ? b === S.HL.MAINNET || S.HL.RINKEBY
                                ? (0, n.jsxs)("span", {
                                    children: [
                                      i("takeCautionLabelOne"),
                                      " ",
                                      (0, n.jsxs)("a", {
                                        className: "hover:underline",
                                        href: "https://docs.nfttrader.io/documentation/collection-verification-process",
                                        target: "_blank",
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: "font-semibold",
                                            children: i("takeCautionLabelTwo"),
                                          }),
                                          " (",
                                          (0, n.jsx)("img", {
                                            src: kt.Z.src,
                                            className:
                                              "w-[16px] h-[16px] inline-block",
                                          }),
                                          ").",
                                        ],
                                      }),
                                      " ",
                                      i("takeCautionLabelThree"),
                                      " ",
                                      (0, n.jsx)("span", {
                                        className:
                                          "font-semibold text-primary-blue",
                                        children: i("takeCautionLabelFour"),
                                      }),
                                      " ",
                                      i("takeCautionLabelFive"),
                                    ],
                                  })
                                : (0, n.jsxs)("span", {
                                    children: [
                                      i("takeCautionPolygonLabelOne"),
                                      " ",
                                      (0, n.jsxs)("a", {
                                        className: "hover:underline",
                                        href: "https://docs.nfttrader.io/documentation/collection-verification-process",
                                        target: "_blank",
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: "font-semibold",
                                            children: i(
                                              "takeCautionPolygonLabelTwo"
                                            ),
                                          }),
                                          " (",
                                          (0, n.jsx)("img", {
                                            src: kt.Z.src,
                                            className:
                                              "w-[16px] h-[16px] inline-block",
                                          }),
                                          ").",
                                        ],
                                      }),
                                      " ",
                                      i("takeCautionPolygonLabelThree"),
                                      " ",
                                      (0, n.jsx)("span", {
                                        className:
                                          "font-semibold text-primary-blue",
                                        children: i(
                                          "takeCautionPolygonLabelFour"
                                        ),
                                      }),
                                      " ",
                                      i("takeCautionPolygonLabelFive"),
                                    ],
                                  })
                              : "",
                          }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "w-full flex-none py-[25px] h-[230px] overflow-y-scroll overflow-x-none lg:flex lg:justify-center",
                        children: (0, n.jsxs)("ul", {
                          className: "w-[95%]",
                          children: [
                            g &&
                              g.assets &&
                              g.assets
                                .filter(function (e) {
                                  return 0 === e.collection.statusVerification;
                                })
                                .map(function (e, t) {
                                  return (0,
                                  n.jsxs)("li", { className: "flex items-center justify-between w-full ".concat(t > 0 ? "my-[15px]" : "mb-[15px]"), children: [(0, n.jsxs)("div", { className: "flex", children: [(0, n.jsx)(jt, { NFTSrc: e.imageSrc ? e.imageSrc : "", hasPlaceholder: e.hasPlaceholder, className: "mr-[18px]" }), (0, n.jsxs)("div", { className: "flex flex-col justify-center items-start", children: [(0, n.jsx)("span", { className: "w-[200px] h-[30px] text-sm font-semibold text-primary-blue", children: (0, n.jsx)(qe.Z, { text: "#".concat(e.id), className: "h-full" }) }), (0, n.jsxs)("div", { className: "flex justify-start items-center", children: [(0, n.jsx)(be.Z, { src: e.collection.imageUrl, statusVerification: e.collection.statusVerification, className: "w-[24px] h-[24px]", badgeClassName: "w-[12px] h-[12px]" }), (0, n.jsx)("span", { className: "w-[200px] h-[30px] ml-[18px] text-sm font-semibold text-primary-blue relative top-[5px]", children: (0, n.jsx)(qe.Z, { text: e.collection.name, className: "h-full" }) })] })] })] }), (0, n.jsxs)("div", { className: "flex-none justify-between md:flex", children: [(0, n.jsx)("a", { href: (0, mt.x)(b, e.collection.address), target: "_blank", className: "mr-[11px]", children: (0, n.jsx)("img", { src: b === S.HL.MAINNET || S.HL.RINKEBY ? vt : Nt, className: "w-[32px] h-[32px] hover:opacity-60" }) }), (0, n.jsx)("a", { href: it(b, e.collection.address, e.id ? Number(e.id) : null), target: "_blank", children: (0, n.jsx)("img", { src: wt, className: "w-[32px] h-[32px] hover:opacity-60" }) })] })] }, "".concat(e.collection.address, "-").concat(e.id));
                                }),
                            h &&
                              h.assets &&
                              h.assets
                                .filter(function (e) {
                                  return 0 === e.collection.statusVerification;
                                })
                                .map(function (e, t) {
                                  return (0,
                                  n.jsxs)("li", { className: "flex items-center justify-between w-full ".concat(t > 0 ? "my-[15px]" : "mb-[15px]"), children: [(0, n.jsxs)("div", { className: "flex", children: [(0, n.jsx)(jt, { NFTSrc: e.imageSrc ? e.imageSrc : "", hasPlaceholder: e.hasPlaceholder, className: "mr-[18px]" }), (0, n.jsxs)("div", { className: "flex flex-col justify-center items-start", children: [(0, n.jsx)("span", { className: "w-[200px] h-[30px] text-sm font-semibold text-primary-blue", children: (0, n.jsx)(qe.Z, { text: "#".concat(e.id), className: "h-full" }) }), (0, n.jsxs)("div", { className: "flex justify-start items-center", children: [(0, n.jsx)(be.Z, { src: e.collection.imageUrl, statusVerification: e.collection.statusVerification, className: "w-[24px] h-[24px]", badgeClassName: "w-[12px] h-[12px]" }), (0, n.jsx)("span", { className: "w-[200px] h-[30px] ml-[18px] text-sm font-semibold text-primary-blue relative top-[5px]", children: (0, n.jsx)(qe.Z, { text: e.collection.name, className: "h-full" }) })] })] })] }), (0, n.jsxs)("div", { className: "flex-none justify-between sm:flex", children: [(0, n.jsx)("a", { href: (0, mt.x)(b, e.collection.address), target: "_blank", className: "mr-[11px]", children: (0, n.jsx)("img", { src: b === S.HL.MAINNET || S.HL.RINKEBY ? vt : Nt, className: "w-[32px] h-[32px] hover:opacity-60" }) }), (0, n.jsx)("a", { href: it(b, e.collection.address, e.id ? Number(e.id) : null), target: "_blank", children: (0, n.jsx)("img", { src: wt, className: "w-[32px] h-[32px] hover:opacity-60" }) })] })] }, "".concat(e.collection.address, "-").concat(e.id));
                                }),
                          ],
                        }),
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-col justify-center items-center mt-[40px] lg:flex-row-reverse lg:justify-between",
                        children: [
                          (0, n.jsx)(u.Z, {
                            text: i("confirmLabel"),
                            type: {
                              class: "primary",
                              hasColoredBg: !1,
                              icon: !1,
                            },
                            size: "large",
                            onClick: function () {
                              y(), o((0, a.Um)(f + 1));
                            },
                            initialState: { state: "default" },
                            className: "w-full mb-[16px] lg:mb-[0] lg:w-[auto]",
                          }),
                          (0, n.jsx)(u.Z, {
                            text: i("dismissLabel"),
                            type: {
                              class: "secondary",
                              hasColoredBg: !1,
                              icon: !1,
                            },
                            size: "large",
                            onClick: function () {
                              y();
                            },
                            initialState: { state: "default" },
                            className: "w-full lg:w-[auto]",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
            })
          );
        },
        St = function (e) {
          var t = e.isCurrent,
            s = e.left,
            i = e.right,
            c = (0, p.Z)("common").t,
            o = (0, r.useRef)(!1),
            d = (0, r.useState)([]),
            u = d[0],
            x = d[1],
            m = (0, r.useState)([]),
            f = m[0],
            h = m[1],
            g = (0, l.T)(),
            b = (0, l.C)(function (e) {
              return e;
            }),
            y = b.trademodal,
            j = b.waccount,
            v = y.dayDuration,
            N = y.isApprovingModalOpen,
            w = y.isUnverifiedCollectionModalOpen,
            k = y.who,
            C = y.tradeCreationDate,
            S = y.tradeExpirationDate,
            _ = y.mode,
            E = j.currentNetworkId;
          return (
            (0, r.useEffect)(function () {
              return (
                (o.current = !0),
                function () {
                  o.current = !1;
                }
              );
            }, []),
            (0, r.useEffect)(function () {
              if (0 === u.length) {
                var e = s.assets.filter(function (e) {
                    return "ERC1155" === e.type || "ERC721" === e.type;
                  }),
                  t = s.assets.filter(function (e) {
                    return "ERC20" === e.type || "NATIVE" === e.type;
                  }),
                  n = [];
                e.length > 0 &&
                  n.push({
                    text: ""
                      .concat(e.length, " NFT")
                      .concat(e.length > 1 ? "s" : ""),
                    isDisabled: !0,
                    isEditable: !1,
                    isSummary: !0,
                    isShrinked: !1,
                    isHidden: !1,
                    tokenSymbol: null,
                    asset: null,
                    isNFTsSummary: !0,
                    icon: Be,
                  }),
                  t.forEach(function (e) {
                    n.push({
                      text: e.amountHumanReadable ? e.amountHumanReadable : "",
                      isDisabled: !0,
                      isEditable: !1,
                      isSummary: !0,
                      isHidden: !1,
                      isShrinked: !0,
                      tokenSymbol: e.collection.symbol,
                      isNFTsSummary: !1,
                      asset: e,
                      icon: e.collection.imageUrl,
                    });
                  }),
                  n.length > 2 &&
                    n.forEach(function (e, t) {
                      t > 1 && (e.isHidden = !0);
                    }),
                  o.current && x(n);
              }
              if (0 === f.length) {
                var r = i.assets.filter(function (e) {
                    return "ERC1155" === e.type || "ERC721" === e.type;
                  }),
                  a = i.assets.filter(function (e) {
                    return "ERC20" === e.type || "NATIVE" === e.type;
                  }),
                  l = [];
                r.length > 0 &&
                  l.push({
                    text: ""
                      .concat(r.length, " NFT")
                      .concat(r.length > 1 ? "s" : ""),
                    isDisabled: !0,
                    isEditable: !1,
                    isSummary: !0,
                    isHidden: !1,
                    isShrinked: !1,
                    tokenSymbol: null,
                    isNFTsSummary: !0,
                    asset: null,
                    icon: Be,
                  }),
                  a.forEach(function (e) {
                    l.push({
                      text: e.amountHumanReadable ? e.amountHumanReadable : "",
                      isDisabled: !0,
                      isEditable: !1,
                      isSummary: !0,
                      isHidden: !1,
                      isShrinked: !0,
                      tokenSymbol: e.collection.symbol,
                      isNFTsSummary: !1,
                      asset: e,
                      icon: e.collection.imageUrl,
                    });
                  }),
                  l.length > 2 &&
                    l.forEach(function (e, t) {
                      t > 1 && (e.isHidden = !0);
                    }),
                  o.current && h(l);
              }
            }, []),
            (0, n.jsx)(ne, {
              isCurrent: t,
              children:
                s && s.collector && i && i.collector
                  ? (0, n.jsxs)("section", {
                      className: "w-full",
                      children: [
                        (0, n.jsx)("div", {
                          className: "w-full",
                          children: (0, n.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                              (0, n.jsxs)("div", {
                                className:
                                  "hidden lg:flex lg:justify-between lg:items-start",
                                children: [
                                  (0, n.jsx)("div", {
                                    className:
                                      "flex justify-start h-[40px] w-[226px]",
                                    children: (0, n.jsx)("div", {
                                      className: "flex h-full justify-between",
                                      children: (0, n.jsxs)("div", {
                                        className: "flex items-center h-full",
                                        children: [
                                          (0, n.jsx)(Y.Z, {
                                            address: s.collector.address,
                                            src: s.collector.imageUrl,
                                            isNFT: s.collector.isNft,
                                            className: "mr-[16px]",
                                            sizesClassNames:
                                              "w-[32px] h-[32px]",
                                            jazziconSize: {
                                              defaultSize: 32,
                                              breakpoints: [],
                                              sizes: [],
                                            },
                                          }),
                                          (0, n.jsxs)("div", {
                                            className:
                                              "flex flex-col justify-center",
                                            children: [
                                              (0, n.jsx)("span", {
                                                className:
                                                  "text-sm font-semibold text-primary-dark-blue",
                                                children: c("yourWalletLabel"),
                                              }),
                                              (0, n.jsx)("span", {
                                                className:
                                                  "rubik text-xs font-regular text-primary-gray cursor-pointer xl:hidden hover:underline",
                                                children: (0, n.jsx)("a", {
                                                  href: (0, mt.x)(
                                                    E,
                                                    s.collector.address
                                                  ),
                                                  target: "_blank",
                                                  children: (0, J.N)(
                                                    s.collector.address
                                                  ),
                                                }),
                                              }),
                                              (0, n.jsx)("span", {
                                                className:
                                                  "hidden rubik text-xs font-regular cursor-pointer text-primary-gray xl:inline hover:underline",
                                                children: (0, n.jsx)("a", {
                                                  href: (0, mt.x)(
                                                    E,
                                                    s.collector.address
                                                  ),
                                                  target: "_blank",
                                                  children: (0, J.x)(
                                                    s.collector.address
                                                  ),
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  (0, n.jsxs)("div", {
                                    className:
                                      "flex justify-between items-center",
                                    children: [
                                      (0, n.jsx)("div", {
                                        className: "mr-[26px]",
                                        children: (0, n.jsx)("h3", {
                                          className:
                                            "text-primary-blue text-lg font-bold text-right",
                                          children: c("whatYouAreTradingLabel"),
                                        }),
                                      }),
                                      (0, n.jsx)("div", {
                                        className:
                                          "rounded-full flex items-center justify-center w-[40px] h-[40px] mr-[32px] xl:bg-primary-blue",
                                        children: (0, n.jsx)("span", {
                                          className:
                                            "text-primary-dark-blue text-sm font-bold xl:text-primary-white",
                                          children: c("outLabel"),
                                        }),
                                      }),
                                      (0, n.jsx)("img", {
                                        src: Je,
                                        className: "w-[40px] h-[40px]",
                                      }),
                                      (0, n.jsx)("div", {
                                        className:
                                          "rounded-full flex items-center justify-center w-[40px] h-[40px] ml-[32px] xl:bg-primary-blue",
                                        children: (0, n.jsx)("span", {
                                          className:
                                            "text-primary-dark-blue text-sm font-bold xl:text-primary-white",
                                          children: c("inLabel"),
                                        }),
                                      }),
                                      (0, n.jsx)("div", {
                                        className: "ml-[26px]",
                                        children: (0, n.jsx)("h3", {
                                          className:
                                            "text-primary-blue text-lg font-bold",
                                          children: c(
                                            "whatYouWillReceiveLabel"
                                          ),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, n.jsx)("div", {
                                    className:
                                      "flex justify-end h-[40px] w-[226px]",
                                    children: (0, n.jsx)("div", {
                                      className: "flex h-full justify-between",
                                      children: (0, n.jsxs)("div", {
                                        className:
                                          "flex flex-row-reverse items-center h-full",
                                        children: [
                                          (0, n.jsx)(Y.Z, {
                                            address: i.collector.address,
                                            src: i.collector.imageUrl,
                                            isNFT: i.collector.isNft,
                                            className: "ml-[16px] justify-end",
                                            sizesClassNames:
                                              "w-[32px] h-[32px]",
                                            jazziconSize: {
                                              defaultSize: 32,
                                              breakpoints: [],
                                              sizes: [],
                                            },
                                          }),
                                          (0, n.jsxs)("div", {
                                            className:
                                              "flex flex-col justify-start text-right",
                                            children: [
                                              (0, n.jsx)("span", {
                                                className:
                                                  "text-sm font-semibold text-primary-dark-blue",
                                                children: i.collector.username
                                                  ? "@" + i.collector.username
                                                  : (0, n.jsx)(n.Fragment, {
                                                      children: (0, n.jsx)(
                                                        "span",
                                                        {
                                                          className:
                                                            "text-primary-gray rubik text-xs",
                                                          children: c(
                                                            "usernameNotSetLabel"
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                              }),
                                              (0, n.jsx)("span", {
                                                className:
                                                  "rubik text-xs font-regular text-primary-gray cursor-pointer xl:hidden hover:underline",
                                                children: (0, n.jsx)("a", {
                                                  href: (0, mt.x)(
                                                    E,
                                                    i.collector.address
                                                  ),
                                                  target: "_blank",
                                                  children: (0, J.N)(
                                                    i.collector.address
                                                  ),
                                                }),
                                              }),
                                              (0, n.jsx)("span", {
                                                className:
                                                  "hidden rubik text-xs font-regular text-primary-gray cursor-pointer xl:inline hover:underline",
                                                children: (0, n.jsx)("a", {
                                                  href: (0, mt.x)(
                                                    E,
                                                    i.collector.address
                                                  ),
                                                  target: "_blank",
                                                  children: (0, J.x)(
                                                    i.collector.address
                                                  ),
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("div", {
                                className:
                                  "w-full mt-[24px] px-[16px] lg:flex lg:justify-center lg:items-center lg:px-[auto] lg:mt-[32px]",
                                children: [
                                  (0, n.jsx)("h1", {
                                    className:
                                      "text-2xl font-semibold text-primary-dark-blue text-center mb-[16px] lg:hidden",
                                    children: c("verifyConfirmLabel"),
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "lg:w-[294px]",
                                    children: [
                                      null === _ &&
                                        (0, n.jsx)(Ie, {
                                          days: v,
                                          onChange: function (e) {
                                            g((0, a.eF)(e));
                                          },
                                          pastDate: C,
                                          expiredDate: S,
                                          editable: "maker" === k,
                                          expired:
                                            !!S &&
                                            new Date().getTime() >
                                              new Date(S).getTime(),
                                          who: k,
                                        }),
                                      "VIEW_MAKER" === _ &&
                                        (0, n.jsx)(Ie, {
                                          days: v,
                                          onChange: function (e) {
                                            g((0, a.eF)(e));
                                          },
                                          pastDate: C,
                                          expiredDate: S,
                                          editable: !1,
                                          expired:
                                            !!S &&
                                            new Date().getTime() >
                                              new Date(S).getTime(),
                                          who: "taker",
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("div", {
                                className:
                                  "flex flex-col mt-[32px] lg:flex-row lg:justify-between",
                                children: [
                                  (0, n.jsxs)("div", {
                                    className: "flex justify-between lg:hidden",
                                    children: [
                                      (0, n.jsx)("div", {
                                        children: (0, n.jsx)("h3", {
                                          className:
                                            "text-primary-blue text-lg font-bold",
                                          children: c("whatYouAreTradingLabel"),
                                        }),
                                      }),
                                      (0, n.jsx)("div", {
                                        className:
                                          "flex items-center justify-center bg-primary-blue w-[40px] h-[40px] rounded-full",
                                        children: (0, n.jsx)("span", {
                                          className:
                                            "text-sm font-bold text-primary-white",
                                          children: c("outLabel"),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, n.jsx)("div", {
                                    className: "flex mt-[8px] lg:hidden",
                                    children: (0, n.jsxs)("div", {
                                      className: "flex items-center h-full",
                                      children: [
                                        (0, n.jsx)(Y.Z, {
                                          address: s.collector.address,
                                          src: s.collector.imageUrl,
                                          isNFT: s.collector.isNft,
                                          className: "mr-[16px]",
                                          sizesClassNames: "w-[32px] h-[32px]",
                                          jazziconSize: {
                                            defaultSize: 32,
                                            breakpoints: [],
                                            sizes: [],
                                          },
                                        }),
                                        (0, n.jsxs)("div", {
                                          className:
                                            "flex flex-col justify-center",
                                          children: [
                                            (0, n.jsx)("span", {
                                              className:
                                                "text-base font-semibold text-primary-dark-blue",
                                              children: c("yourWalletLabel"),
                                            }),
                                            (0, n.jsx)("span", {
                                              className:
                                                "rubik text-xs font-regular text-primary-gray cursor-pointer hover:underline",
                                              children: (0, n.jsx)("a", {
                                                href: (0, mt.x)(
                                                  E,
                                                  s.collector.address
                                                ),
                                                target: "_blank",
                                                children: (0, J.x)(
                                                  s.collector.address
                                                ),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, n.jsxs)("div", {
                                    className:
                                      "mt-[24px] lg:flex lg:flex-col lg:justify-start lg:items-center lg:w-[48%]",
                                    children: [
                                      (0, n.jsx)("div", {
                                        className: "badges-left w-full",
                                        children:
                                          u.length > 0 &&
                                          (0, n.jsx)(n.Fragment, {
                                            children: (0, n.jsx)(Ze, {
                                              textEmptyContainer: "",
                                              actionButtonText: "",
                                              onClick: function () {
                                                g((0, a.KC)()),
                                                  g((0, a.Um)(2)),
                                                  g((0, a.MW)(!0)),
                                                  g((0, a.sP)(!1)),
                                                  g((0, a.s7)(!0)),
                                                  g((0, a.JW)(!1)),
                                                  g((0, a.NL)(0)),
                                                  g((0, a.Dh)(!1));
                                              },
                                              actionHasIcon: !1,
                                              hasShowMore: !0,
                                              who:
                                                "VIEW_MAKER" === _
                                                  ? "taker"
                                                  : k,
                                              children: u.map(function (e, t) {
                                                return (0,
                                                n.jsx)(Ye, { text: e.text, isDisabled: e.isDisabled, isEditable: e.isEditable, isHidden: e.isHidden, isShrinked: e.isShrinked, isSummary: e.isSummary, tokenSymbol: e.tokenSymbol, asset: e.asset, isNFTsSummary: e.isNFTsSummary, checkApprove: !0, icon: e.icon, className: "badge-left" }, "badge-left-more-".concat(t));
                                              }),
                                            }),
                                          }),
                                      }),
                                      (0, n.jsx)("div", {
                                        className:
                                          "mt-[24px] -mx-[16px] flex py-[10px] overflow-y-scroll lg:pb-[10px] lg:py-[0] lg:overflow-auto lg:w-full lg:min-h-[400px] lg:mt-[32px] lg:mx-[auto] lg:grid lg:justify-items-center lg:gap-x-[10px] lg:gap-y-[24px] lg:grid-cols-2 x2l:grid-cols-3",
                                        children: s.assets
                                          .filter(function (e) {
                                            return (
                                              "ERC721" === e.type ||
                                              "ERC1155" === e.type
                                            );
                                          })
                                          .map(function (e, t, r) {
                                            return (0,
                                            n.jsx)(xt, { NFTSrc: e.imageSrc ? e.imageSrc : "", NFTId: e.id ? e.id : "", standard: e.type, collection: e.collection, address: s.collector && s.collector.address ? s.collector.address : "", isSelected: !1, isShrinked: !0, checkApprove: !0, checkReported: !0, hasPlaceholder: e.hasPlaceholder, amount: e.amount ? e.amount : "", className: "".concat(0 === t ? "ml-[16px] mr-[8px] lg:ml-[0] lg:mr-[0]" : t < r.length - 1 ? "mr-[8px] lg:mr-[0]" : "mr-[16px] lg:mr-[0]", " flex-none lg:flex-auto") }, "".concat(e.collection.address, "-").concat(e.id, "-left"));
                                          }),
                                      }),
                                    ],
                                  }),
                                  (0, n.jsx)("div", {
                                    className:
                                      "my-[32px] flex items-center justify-center lg:hidden",
                                    children: (0, n.jsx)("div", {
                                      className: "w-full h-[1px] bg-[#D5D8DE]",
                                    }),
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "flex justify-between lg:hidden",
                                    children: [
                                      (0, n.jsx)("div", {
                                        children: (0, n.jsx)("h3", {
                                          className:
                                            "text-primary-blue text-lg font-bold",
                                          children: c(
                                            "whatYouWillReceiveLabel"
                                          ),
                                        }),
                                      }),
                                      (0, n.jsx)("div", {
                                        className:
                                          "flex items-center justify-center bg-primary-blue w-[40px] h-[40px] rounded-full",
                                        children: (0, n.jsx)("span", {
                                          className:
                                            "text-sm font-bold text-primary-white",
                                          children: c("inLabel"),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, n.jsx)("div", {
                                    className: "flex mt-[8px] lg:hidden",
                                    children: (0, n.jsxs)("div", {
                                      className: "flex items-center h-full",
                                      children: [
                                        (0, n.jsx)(Y.Z, {
                                          address: i.collector.address,
                                          src: i.collector.imageUrl,
                                          isNFT: i.collector.isNft,
                                          className: "mr-[16px]",
                                          sizesClassNames: "w-[32px] h-[32px]",
                                          jazziconSize: {
                                            defaultSize: 32,
                                            breakpoints: [],
                                            sizes: [],
                                          },
                                        }),
                                        (0, n.jsxs)("div", {
                                          className:
                                            "flex flex-col justify-center",
                                          children: [
                                            (0, n.jsx)("span", {
                                              className:
                                                "text-base font-semibold text-primary-dark-blue",
                                              children: i.collector.username
                                                ? "@" + i.collector.username
                                                : (0, n.jsx)(n.Fragment, {
                                                    children: (0, n.jsx)(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-primary-gray rubik text-xs",
                                                        children: c(
                                                          "usernameNotSetLabel"
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                            }),
                                            (0, n.jsx)("span", {
                                              className:
                                                "rubik text-xs font-regular cursor-pointer text-primary-gray hover:underline",
                                              children: (0, n.jsx)("a", {
                                                href: (0, mt.x)(
                                                  E,
                                                  i.collector.address
                                                ),
                                                target: "_blank",
                                                children: (0, J.x)(
                                                  i.collector.address
                                                ),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, n.jsx)("div", {
                                    className:
                                      "mt-[24px] hidden divider lg:flex lg:justify-center lg:w-[4%]",
                                    children: (0, n.jsx)("div", {
                                      className: "h-full w-[1px] bg-[#D3D6DC]",
                                    }),
                                  }),
                                  (0, n.jsxs)("div", {
                                    className:
                                      "mt-[24px] lg:flex lg:flex-col lg:justify-start lg:items-center lg:w-[48%]",
                                    children: [
                                      (0, n.jsx)("div", {
                                        className: "badges-right w-full",
                                        children:
                                          f.length > 0 &&
                                          (0, n.jsx)(n.Fragment, {
                                            children: (0, n.jsx)(Ze, {
                                              textEmptyContainer: "",
                                              actionButtonText: "",
                                              onClick: function () {
                                                g((0, a.KC)()),
                                                  g((0, a.Um)(1)),
                                                  g((0, a.MW)(!0)),
                                                  g((0, a.sP)(!1)),
                                                  g((0, a.s7)(!0)),
                                                  g((0, a.JW)(!1)),
                                                  g((0, a.NL)(0)),
                                                  g((0, a.Dh)(!1));
                                              },
                                              actionHasIcon: !1,
                                              hasShowMore: !0,
                                              who:
                                                "VIEW_MAKER" === _
                                                  ? "taker"
                                                  : k,
                                              isLeft: !1,
                                              children: f.map(function (e, t) {
                                                return (0,
                                                n.jsx)(Ye, { text: e.text, isDisabled: e.isDisabled, isEditable: e.isEditable, isHidden: e.isHidden, isShrinked: e.isShrinked, isSummary: e.isSummary, tokenSymbol: e.tokenSymbol, icon: e.icon, className: "badge-right" }, "badge-right-more-".concat(t));
                                              }),
                                            }),
                                          }),
                                      }),
                                      (0, n.jsx)("div", {
                                        className:
                                          "mt-[24px] -mx-[16px] flex py-[10px] overflow-y-scroll lg:pb-[10px] lg:py-[0] lg:overflow-auto lg:w-full lg:min-h-[400px] lg:mt-[32px] lg:mx-[auto] lg:grid lg:justify-items-center lg:gap-x-[10px] lg:gap-y-[24px] lg:grid-cols-2 x2l:grid-cols-3",
                                        children: i.assets
                                          .filter(function (e) {
                                            return (
                                              "ERC721" === e.type ||
                                              "ERC1155" === e.type
                                            );
                                          })
                                          .map(function (e, t, s) {
                                            return (0,
                                            n.jsx)(xt, { NFTSrc: e.imageSrc ? e.imageSrc : "", NFTId: e.id ? e.id : "", standard: e.type, collection: e.collection, address: i.collector && i.collector.address ? i.collector.address : "", isSelected: !1, isShrinked: !0, hasPlaceholder: e.hasPlaceholder, checkReported: !0, amount: e.amount ? e.amount : "", className: "".concat(0 === t ? "ml-[16px] mr-[8px] lg:ml-[0] lg:mr-[0]" : t < s.length - 1 ? "mr-[8px] lg:mr-[0]" : "mr-[16px] lg:mr-[0]", " flex-none lg:flex-auto") }, "".concat(e.collection.address, "-").concat(e.id, "-right-desktop"));
                                          }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        N &&
                          (0, n.jsx)(gt, {
                            isOpen: !0,
                            actionClose: function () {},
                          }),
                        w &&
                          (0, n.jsx)(Ct, {
                            isOpen: !0,
                            actionClose: function () {},
                          }),
                      ],
                    })
                  : (0, n.jsx)(n.Fragment, {}),
            })
          );
        },
        _t = "/_next/static/media/smile_sad_gray.d6b22d46.svg";
      function Et(e, t) {
        return null != t &&
          "undefined" !== typeof Symbol &&
          t[Symbol.hasInstance]
          ? t[Symbol.hasInstance](e)
          : e instanceof t;
      }
      var Lt = function (e) {
          var t = e.isCurrent,
            s = (0, p.Z)("common").t,
            i = (0, r.useRef)(!1),
            c = (0, r.useState)(!1),
            o = c[0],
            d = c[1],
            x = (0, r.useState)(""),
            m = x[0],
            f = x[1],
            h = (0, r.useState)(),
            g = h[0],
            b = h[1],
            y = (0, r.useState)(""),
            j = y[0],
            v = y[1],
            N = (0, r.useState)(!1),
            w = N[0],
            k = N[1],
            C = (0, r.useRef)({ clearInput: null }),
            S = (0, l.C)(function (e) {
              return e;
            }),
            _ = S.trademodal,
            E = S.waccount,
            L = (0, l.T)(),
            T = _.taker,
            F = E.currentNetworkId,
            M = E.jwtToken,
            I = (0, r.useState)(!1),
            A = I[0],
            z = I[1],
            O = function (e) {
              if (0 === e.length)
                return (
                  i.current && k(!1),
                  i.current && z(!1),
                  void setTimeout(function () {
                    i.current && b([]);
                  }, 500)
                );
              F && M
                ? (i.current && z(!0),
                  (0, $.Vd)((0, q.f)("searchUser", [F, e]), M)
                    .then(function (t) {
                      var s = t.data;
                      if (Et(s, Array) && s.length > 0) {
                        var n = s[0],
                          r = [];
                        "isAddress" in n && !0 === n.isAddress
                          ? s.forEach(function (t) {
                              r.push({
                                evmNetworkId: F,
                                username: "",
                                address: e,
                                imageUrl: "",
                                isVerified: 0,
                                isNft: 0,
                                isRegistered: 0,
                              });
                            })
                          : "evmNetworkId" in n &&
                            s.forEach(function (e) {
                              r.push({
                                evmNetworkId: e.currentNetworkId,
                                username: e.username,
                                address: e.address,
                                imageUrl: e.imageUrl,
                                isVerified: e.isVerified,
                                isNft: e.isNft,
                                isRegistered: e.isRegistered,
                                isFavourite: e.isFavourite,
                              });
                            }),
                          i.current && b(r),
                          i.current && z(!1);
                      }
                    })
                    .catch(function (e) {
                      !(function (e) {
                        if (
                          e &&
                          "response" in e &&
                          "undefined" !== typeof e.response
                        ) {
                          var t = e.response.status;
                          401 === t
                            ? (L((0, a.jO)()),
                              L((0, a.r$)(!1)),
                              L((0, X.up)(!0)),
                              L((0, X.kt)()),
                              (0, ee.uM)({
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
                              }))
                            : 500 === t &&
                              (console.log("backend error.."),
                              console.error(e));
                        } else console.error(e);
                      })(e),
                        i.current && z(!1);
                    }),
                  i.current && k(!1))
                : i.current && z(!1);
            };
          return (
            (0, r.useEffect)(function () {
              return (
                (i.current = !0),
                function () {
                  i.current = !1;
                }
              );
            }, []),
            (0, r.useEffect)(
              function () {
                if (o) {
                  var e = function () {
                    window.innerWidth > 1023 && i.current && d(!1);
                  };
                  return (
                    e(),
                    window.addEventListener("resize", e),
                    function () {
                      window.removeEventListener("resize", e);
                    }
                  );
                }
              },
              [o]
            ),
            (0, r.useEffect)(
              function () {
                i.current && (b([]), k(!0));
              },
              [m]
            ),
            (0, r.useEffect)(
              function () {
                w && O(m);
              },
              [w]
            ),
            (0, n.jsx)(ne, {
              isCurrent: t,
              children: (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsxs)("section", {
                    className: "grid grid-cols-12",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "hidden bg-primary-white rounded-[16px] lg:block lg:col-span-3 lg:max-h-[732px]",
                        children: (0, n.jsx)(se, {
                          isModalOpen: !1,
                          actionClose: function () {},
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "col-span-12 pt-[30px] lg:pt-0 lg:rounded-[16px] lg:col-span-9 lg:pl-[48px] lg:min-h-[732px]",
                        children: (0, n.jsx)("div", {
                          className: "w-full lg:min-h-[732px]",
                          children: (0, n.jsxs)("div", {
                            className:
                              "w-full bg-primary-white lg:px-[112px] lg:rounded-[16px] lg:rounded-tr-[40px] lg:min-h-[732px]",
                            children: [
                              (0, n.jsx)("h3", {
                                className:
                                  "text-center text-primary-dark-blue text-2xl font-semibold",
                                children: s("whoDoYouToMakeTradeLabel"),
                              }),
                              (0, n.jsxs)("div", {
                                className:
                                  "flex flex-col mt-[40px] text-center lg:items-center lg:pt-[0px]",
                                children: [
                                  (0, n.jsx)("span", {
                                    className:
                                      "mb-[16px] text-base font-regular text-primary-dark-blue lg:mb-[24px]",
                                    children: s(
                                      "searchForAndSelectCounterpartyTraderLabel"
                                    ),
                                  }),
                                  (0, n.jsx)(R.Z, {
                                    setFilter: function (e) {
                                      f(e),
                                        v(""),
                                        L((0, a.MW)(!1)),
                                        T && L((0, a.FI)());
                                    },
                                    onClear: function () {
                                      L((0, a.MW)(!1)), T && L((0, a.FI)());
                                    },
                                    placeholder: s(
                                      "searchUsernameAddressLabel"
                                    ),
                                    refClear: C,
                                    className: "lg:w-[600px]",
                                  }),
                                  (0, n.jsx)("div", {
                                    className:
                                      "flex items-center justify-center mt-[16px] lg:hidden",
                                    children: (0, n.jsxs)("span", {
                                      className:
                                        "flex cursor-pointer text-primary-blue w-max hover:underline",
                                      onClick: function () {
                                        d(!0);
                                      },
                                      children: [
                                        (0, n.jsx)("span", {
                                          className:
                                            "text-base font-semibold mr-[8px]",
                                          children: s(
                                            "selectFromFavouriteLabel"
                                          ),
                                        }),
                                        (0, n.jsx)("img", { src: D }),
                                      ],
                                    }),
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "mt-[56px] lg:w-[600px]",
                                    children: [
                                      (0, n.jsx)(n.Fragment, {
                                        children:
                                          A &&
                                          (0, n.jsx)(n.Fragment, {
                                            children: (0, n.jsx)("div", {
                                              className:
                                                "flex items-center justify-center w-full h-full",
                                              children: (0, n.jsx)(te.Z, {
                                                isWhite: !1,
                                                className: "w-[30px] h-[30px]",
                                              }),
                                            }),
                                          }),
                                      }),
                                      g &&
                                        g.length > 0 &&
                                        (0, n.jsx)("ul", {
                                          children: g.map(function (e, t) {
                                            return (0, n.jsx)(
                                              "li",
                                              {
                                                className: "mb-[8px]",
                                                children: (0, n.jsx)(
                                                  re,
                                                  {
                                                    address: e.address,
                                                    username: e.username,
                                                    avatar: {
                                                      imageSrc: e.imageUrl,
                                                      isNFT: e.isNft,
                                                      isVerified: 0,
                                                    },
                                                    isFavourite: e.isFavourite
                                                      ? e.isFavourite
                                                      : 0,
                                                    isRegistered: e.isRegistered
                                                      ? e.isRegistered
                                                      : 0,
                                                    onClick: function () {
                                                      v(e.address),
                                                        L((0, a.Bu)(e)),
                                                        L((0, a.Gu)());
                                                    },
                                                    onChange: function () {},
                                                    isSelected: j === e.address,
                                                    onFavourite: function (t) {
                                                      var s = JSON.parse(
                                                          JSON.stringify(g)
                                                        ),
                                                        n = s.find(function (
                                                          t
                                                        ) {
                                                          return (
                                                            t.address.toLowerCase() ===
                                                            e.address.toLowerCase()
                                                          );
                                                        });
                                                      (n.isFavourite = t),
                                                        b(s),
                                                        j === e.address &&
                                                          (L((0, a.Bu)(n)),
                                                          L((0, a.Gu)()));
                                                    },
                                                  },
                                                  "selectable-user-".concat(
                                                    e.address
                                                  )
                                                ),
                                              },
                                              "collector-"
                                                .concat(e.address, "-")
                                                .concat(t, "-")
                                                .concat(new Date().getTime())
                                            );
                                          }),
                                        }),
                                      0 ===
                                        (null === g || void 0 === g
                                          ? void 0
                                          : g.length) &&
                                        m.length > 0 &&
                                        !A &&
                                        (0, n.jsxs)("div", {
                                          className:
                                            "flex flex-col items-center justify-center",
                                          children: [
                                            (0, n.jsx)("img", {
                                              src: _t,
                                              className: "w-[88px] h-[88px]",
                                            }),
                                            (0, n.jsxs)("div", {
                                              className:
                                                "mt-[24px] text-center flex flex-col items-center",
                                              children: [
                                                (0, n.jsx)("span", {
                                                  className:
                                                    "text-base font-regular text-primary-dark-blue",
                                                  children: s(
                                                    "noAddressFoundLabel"
                                                  ),
                                                }),
                                                (0, n.jsx)(u.Z, {
                                                  text: s("clearSearchLabel"),
                                                  type: {
                                                    class: "primary",
                                                    hasColoredBg: !1,
                                                    icon: !1,
                                                  },
                                                  initialState: {
                                                    state: "default",
                                                  },
                                                  size: "large",
                                                  onClick: function () {
                                                    C.current &&
                                                      C.current.clearInput &&
                                                      Et(
                                                        C.current.clearInput,
                                                        Function
                                                      ) &&
                                                      C.current.clearInput(),
                                                      L((0, a.MW)(!1)),
                                                      T && L((0, a.FI)());
                                                  },
                                                  className: "mt-[40px] py-3",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                  o &&
                    (0, n.jsx)(se, {
                      isModalOpen: o,
                      actionClose: function () {
                        d(!1);
                      },
                    }),
                ],
              }),
            })
          );
        },
        Tt = "/_next/static/media/comics_balloon_svg.13f4873b.svg",
        Ft = s(75657),
        Mt = function (e) {
          var t = e.isCurrent,
            s = (0, p.Z)("common").t,
            r = (0, l.T)(),
            i = (0, l.C)(function (e) {
              return e;
            }).trademodal.who;
          return (0, n.jsx)(ne, {
            isCurrent: t,
            children: (0, n.jsx)("section", {
              className: "flex justify-center items-center",
              children: (0, n.jsxs)("div", {
                className: "flex flex-col items-center justify-center ".concat(
                  "maker" === i ? "h-[506px]" : "h-[526px]"
                ),
                children: [
                  (0, n.jsx)("img", {
                    src: Tt,
                    className: "w-[170px] h-[auto] lg:w-[204px]",
                  }),
                  (0, n.jsx)("img", {
                    src: de.Z.src,
                    className: "mt-[8px] w-[103px] h-[auto] lg:w-[160px]",
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "mt-[40px] text-center text-primary-white lg:mt-[48px]",
                    children: [
                      (0, n.jsx)("h3", {
                        className:
                          "text-primary-white text-2xl font-semibold lg:text-3xl",
                        children: s(
                          "maker" === i
                            ? "yourDealHasBeenDeliveredLabel"
                            : "yourTradeWasSuccessfulLabel"
                        ),
                      }),
                      (0, n.jsx)("div", {
                        className: "text-center mt-[32px] lg:mt-[40px]",
                        children: (0, n.jsx)("span", {
                          className: "text-primary-white",
                          children:
                            "maker" === i
                              ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                    (0, n.jsx)("span", {
                                      className: "rubik text-base font-light",
                                      children: s(
                                        "yourCounterpartyFindDealLabel"
                                      ),
                                    }),
                                    " ",
                                    (0, n.jsx)(Ft.default, {
                                      href: "/mytrades",
                                      children: (0, n.jsx)("a", {
                                        className:
                                          "text-base font-semibold hover:underline",
                                        target: "_blank",
                                        children: s("hubTradesPageLabel"),
                                      }),
                                    }),
                                  ],
                                })
                              : (0, n.jsx)(n.Fragment, {
                                  children: (0, n.jsx)("span", {
                                    className: "rubik text-base font-light",
                                    children: s(
                                      "yourNewAssetsCanBeFoundWalletLabel"
                                    ),
                                  }),
                                }),
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: "mt-[16px] text-center text-primary-white",
                        children:
                          "maker" === i
                            ? (0, n.jsxs)(n.Fragment, {
                                children: [
                                  (0, n.jsx)("span", {
                                    className: "rubik text-base font-light",
                                    children: s("forMoreInfoReadLabel"),
                                  }),
                                  " ",
                                  (0, n.jsx)(Ft.default, {
                                    href: "/faq",
                                    children: (0, n.jsx)("a", {
                                      className:
                                        "text-base font-semibold hover:underline",
                                      target: "_blank",
                                      children: s("FAQ"),
                                    }),
                                  }),
                                ],
                              })
                            : (0, n.jsx)(n.Fragment, {}),
                      }),
                      (0, n.jsx)("div", {
                        className: "mt-[48px]",
                        children: (0, n.jsx)(u.Z, {
                          text: s(
                            "maker" === i ? "backToHomeLabel" : "backToHubLabel"
                          ),
                          type: {
                            class: "primary",
                            hasColoredBg: !0,
                            icon: !1,
                          },
                          size: "large",
                          onClick: function () {
                            document.body.classList.remove("no-scroll"),
                              r((0, a.r$)(!1)),
                              r((0, a.jO)()),
                              r((0, a.eV)(null)),
                              r((0, a.vg)(null));
                          },
                          initialState: { state: "default" },
                          className: "w-full",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        It = function (e) {
          var t = e.isCurrent,
            s = (0, l.T)(),
            r = (0, p.Z)("common").t;
          return (0, n.jsx)(ne, {
            isCurrent: t,
            children: (0, n.jsx)("section", {
              className: "flex justify-center items-center",
              children: (0, n.jsxs)("div", {
                className:
                  "flex flex-col items-center justify-center h-[506px]\n          }",
                children: [
                  (0, n.jsx)("img", {
                    src: Tt,
                    className: "w-[170px] h-[auto] lg:w-[204px]",
                  }),
                  (0, n.jsx)("img", {
                    src: de.Z.src,
                    className: "mt-[8px] w-[103px] h-[auto] lg:w-[160px]",
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "mt-[40px] text-center text-primary-white lg:mt-[48px]",
                    children: [
                      (0, n.jsx)("h3", {
                        className:
                          "text-primary-white text-2xl font-semibold lg:text-3xl",
                        children: r("theTakerAddressIsUpdatedLabel"),
                      }),
                      (0, n.jsx)("div", {
                        className: "text-center mt-[32px] lg:mt-[40px]",
                        children: (0, n.jsx)("span", {
                          className: "text-primary-white",
                          children: r("theTakerOfTheSwapIsNowChangedLabel"),
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: "mt-[16px] text-center text-primary-white",
                        children: (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)("span", {
                              className: "rubik text-base font-light",
                              children: r("moreInfoLabel"),
                            }),
                            " ",
                            (0, n.jsx)("a", {
                              className:
                                "text-base font-semibold hover:underline",
                              href: "",
                              target: "_blank",
                              children: r("FAQ"),
                            }),
                          ],
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: "mt-[48px]",
                        children: (0, n.jsx)(u.Z, {
                          text: r("backLabel"),
                          type: {
                            class: "primary",
                            hasColoredBg: !0,
                            icon: !1,
                          },
                          size: "large",
                          onClick: function () {
                            document.body.classList.remove("no-scroll"),
                              s((0, a.r$)(!1)),
                              s((0, a.jO)()),
                              s((0, a.eV)(null)),
                              s((0, a.vg)(null));
                          },
                          initialState: { state: "default" },
                          className: "w-full",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        At = s(7637),
        Rt = s.n(At),
        zt = s(24491),
        Ot = s.n(zt),
        Zt = s(98353),
        Bt = function (e) {
          var t = e.collection,
            s = e.className,
            r = void 0 === s ? "" : s,
            a = e.isSelected,
            l = void 0 !== a && a,
            i = e.onClick;
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)("div", {
              className: ""
                .concat(
                  Ot().collectionRow,
                  " flex justify-between items-center h-[36px] mb-[16px] cursor-pointer "
                )
                .concat(r),
              onClick: i,
              children: [
                (0, n.jsxs)("div", {
                  className: "flex justify-start flex-1 items-center mr-[16px]",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "w-[32px] h-[32px] flex items-center justify-center mr-[12px]",
                      children: (0, n.jsx)("div", {
                        className: ""
                          .concat(Ot().radio, " ")
                          .concat(
                            l ? "border-primary-blue" : "border-primary-gray",
                            " flex items-center justify-center h-[24px] w-[24px] rounded-full border-[1px] border-solid hover:border-primary-blue"
                          ),
                        children:
                          l &&
                          (0, n.jsx)("div", {
                            className:
                              "w-[10.5px] h-[10.5px] bg-primary-blue rounded-full",
                          }),
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className: "w-full h-[40px]",
                      children: (0, n.jsx)("span", {
                        className:
                          "text-sm font-semibold text-primary-dark-blue flex items-center h-full",
                        children: t.name,
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)(be.Z, {
                  src:
                    "imageUrl" in t && null != t.imageUrl
                      ? t.imageUrl
                      : Zt.Z.src,
                  className: "w-[32px] h-[32px]",
                  badgeClassName: "w-[16px] h-[16px]",
                  statusVerification: t.statusVerification,
                  showCollectionTooltip: !0,
                  collection: t,
                  canReport: !0,
                }),
              ],
            }),
          });
        },
        Ut = s(35017),
        Pt = s.n(Ut),
        Dt = "/_next/static/media/mascotte_teacher.4723f651.svg",
        Ht = s(44105),
        Vt = s(84165),
        Wt = s.n(Vt),
        Yt = function (e) {
          var t = e.src,
            s = e.size,
            a = e.url,
            l = (0, r.useRef)(!1),
            i = (0, r.useRef)(null),
            c = (0, r.useState)(!1),
            o = c[0],
            d = c[1];
          return (
            (0, r.useEffect)(function () {
              return (
                (l.current = !0),
                function () {
                  l.current = !1;
                }
              );
            }, []),
            (0, r.useEffect)(
              function () {
                var e = (0, Ht.i)(t);
                if (o) {
                  i.current.src = e;
                } else {
                  var s = new Image();
                  (s.onload = function () {
                    l.current && d(!0);
                  }),
                    (s.onerror = function () {
                      l.current && d(!1);
                    }),
                    (s.src = e);
                }
              },
              [o]
            ),
            (0, n.jsx)(n.Fragment, {
              children: (0, n.jsxs)("div", {
                className: "".concat(
                  o ? "" : "bg-black",
                  " rounded-full flex justify-center items-center overflow-hidden"
                ),
                style: {
                  width: "".concat(s, "px"),
                  height: "".concat(s, "px"),
                },
                children: [
                  o &&
                    (0, n.jsx)("a", {
                      href: a,
                      target: "_blank",
                      children: (0, n.jsx)("img", {
                        ref: i,
                        className: "object-cover",
                      }),
                    }),
                  !o &&
                    (0, n.jsx)("img", {
                      src: De.Z.src,
                      className: "".concat(Wt().rotating, " w-[24px] h-[24px]"),
                    }),
                ],
              }),
            })
          );
        },
        Jt = function (e, t) {
          if (!e) return "";
          if (!(t > 0)) return e;
          try {
            if (e.split(" ").length >= t) {
              var s = "",
                n = 0,
                r = !0,
                a = !1,
                l = void 0;
              try {
                for (
                  var i, c = e.split(" ")[Symbol.iterator]();
                  !(r = (i = c.next()).done);
                  r = !0
                ) {
                  if (
                    ((s += i.value + (n === t - 1 ? "..." : " ")), n === t - 1)
                  )
                    break;
                  n++;
                }
              } catch (o) {
                (a = !0), (l = o);
              } finally {
                try {
                  r || null == c.return || c.return();
                } finally {
                  if (a) throw l;
                }
              }
              return s;
            }
            return e;
          } catch (d) {
            return e;
          }
        },
        Gt = s(43376);
      function Kt(e, t) {
        return null != t &&
          "undefined" !== typeof Symbol &&
          t[Symbol.hasInstance]
          ? t[Symbol.hasInstance](e)
          : e instanceof t;
      }
      var $t = function (e) {
          var t = e.isOpen,
            s = void 0 !== t && t,
            i = e.actionClose,
            c = (0, p.Z)("common").t,
            o = (0, r.useRef)(!1),
            d = (0, r.useState)(s),
            x = d[0],
            m = d[1],
            f = (0, r.useState)(!1),
            h = f[0],
            g = f[1],
            b = (0, r.useState)(),
            y = b[0],
            j = b[1],
            v = (0, r.useState)(!1),
            N = v[0],
            w = v[1],
            k = (0, l.T)(),
            C = (0, l.C)(function (e) {
              return e;
            }).waccount.currentNetworkId;
          return (
            (0, r.useEffect)(function () {
              return (
                (o.current = !0),
                function () {
                  o.current = !1;
                }
              );
            }, []),
            (0, r.useEffect)(
              function () {
                x || k((0, a.Dc)(!1));
              },
              [x]
            ),
            (0, n.jsx)(n.Fragment, {
              children:
                x &&
                (0, n.jsx)("div", {
                  className: "".concat(
                    Pt().overlay,
                    " lg:flex lg:justify-center lg:items-center lg:fixed lg:top-0 lg:left-0 lg:w-full lg:h-full z-[20000]"
                  ),
                  children: (0, n.jsxs)("div", {
                    className: "".concat(
                      Pt().customCollectionModal,
                      " fixed flex flex-col w-full bg-primary-white z-[20000] rounded-t-[32px] py-[32px] px-[16px] w-full h-full text-center overflow-y-scroll lg:relative lg:w-[520px] lg:rounded-[16px] lg:h-[auto] lg:p-[32px]"
                    ),
                    children: [
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-col items-center justify-center text-primary-white",
                        children: [
                          (0, n.jsx)("div", {
                            className:
                              "flex items-center justify-center w-[32px] h-[32px]",
                            children: (0, n.jsx)("img", {
                              src: Z.Z.src,
                              className: "w-[26px] h-[26px] cursor-pointer",
                              onClick: function () {
                                Kt(i, Function) && i(), m(!1);
                              },
                            }),
                          }),
                          (0, n.jsx)("h3", {
                            className:
                              "text-xl font-semibold text-primary-blue mt-[16px]",
                            children: c("addNFTCollectionLabel"),
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-col items-center justify-center mt-[40px]",
                        children: [
                          (0, n.jsx)("span", {
                            className:
                              "text-base font-semibold text-primary-dark-blue mb-[16px]",
                            children: c("collectionAddressLabel"),
                          }),
                          (0, n.jsx)(R.Z, {
                            placeholder: "0x....",
                            setFilter: function (e) {
                              var t;
                              42 === (t = e).length &&
                              null != t.match(/^0x[a-fA-F0-9]{40}$/g) &&
                              C
                                ? (0, $.bf)(
                                    (0, q.f)("getNftCollection", [C, t])
                                  )
                                    .then(function (e) {
                                      var t = e.data[0];
                                      o.current && j(t);
                                    })
                                    .catch(function (e) {
                                      console.error(e);
                                    })
                                : o.current && j(void 0),
                                o.current && g(!0),
                                0 === t.length && o.current && g(!1);
                            },
                            hideIcon: !0,
                            hideButtons: !0,
                            className: "w-full",
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-col justify-center items-center mt-[40px] px-[24px] py-[16px]",
                        children: [
                          y &&
                            (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)(
                                  Yt,
                                  {
                                    src: y.image ? y.image : Zt.Z.src,
                                    url: y.externalUrl ? y.externalUrl : "",
                                    size: 72,
                                  },
                                  y.symbol + new Date().getTime()
                                ),
                                (0, n.jsxs)("div", {
                                  className: "text-center w-full mt-[18px]",
                                  children: [
                                    (0, n.jsx)("span", {
                                      className:
                                        "text-xl font-semibold text-primary-dark-blue",
                                      children: y.name ? y.name : "",
                                    }),
                                    (0, n.jsx)("p", {
                                      className: "mt-[8px]",
                                      children: Jt(y.description, 15),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          !y &&
                            (0, n.jsxs)(n.Fragment, {
                              children: [
                                h &&
                                  (0, n.jsxs)(n.Fragment, {
                                    children: [
                                      (0, n.jsx)("img", {
                                        src: _t,
                                        className: "w-[72px] h-[72px]",
                                      }),
                                      (0, n.jsx)("span", {
                                        className:
                                          "text-base font-semibold text-primary-dark-blue mt-[16px]",
                                        children: c("noSuchCollectionLabel"),
                                      }),
                                    ],
                                  }),
                                !h &&
                                  (0, n.jsxs)(n.Fragment, {
                                    children: [
                                      (0, n.jsx)("img", {
                                        src: Dt,
                                        className: "w-[130px]",
                                      }),
                                      (0, n.jsx)("span", {
                                        className:
                                          "text-base font-semibold text-primary-dark-blue mt-[16px]",
                                        children: c("pasteCollectionLabel"),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-col mt-[40px] lg:flex-row-reverse lg:justify-between",
                        children: [
                          y
                            ? (0, n.jsx)(n.Fragment, {
                                children: N
                                  ? (0, n.jsx)("div", {
                                      children: (0, n.jsx)(u.Z, {
                                        text: c("addCapitalizedLabel"),
                                        type: {
                                          class: "primary",
                                          icon: !1,
                                          hasColoredBg: !1,
                                        },
                                        size: "large",
                                        initialState: { state: "loading" },
                                        className: "mb-[16px] lg:mb-[auto]",
                                        onClick: function () {},
                                      }),
                                    })
                                  : (0, n.jsx)(u.Z, {
                                      text: c("addCapitalizedLabel"),
                                      type: {
                                        class: "primary",
                                        icon: !1,
                                        hasColoredBg: !1,
                                      },
                                      size: "large",
                                      initialState: { state: "default" },
                                      className: "mb-[16px] lg:mb-[auto]",
                                      onClick: function () {
                                        var e;
                                        w(!0),
                                          (e = y),
                                          (0, $.VZ)(
                                            (0, q.f)("insertCollection"),
                                            {
                                              network: (0, Gt.h)(C),
                                              collection: e.collectionAddress,
                                              networkId: C,
                                            }
                                          )
                                            .then(function (e) {
                                              o.current && (w(!1), m(!1));
                                            })
                                            .catch(function (e) {
                                              o.current && w(!1),
                                                console.error(e);
                                            });
                                      },
                                    }),
                              })
                            : (0, n.jsx)("div", {
                                children: (0, n.jsx)(u.Z, {
                                  text: c("addCapitalizedLabel"),
                                  type: {
                                    class: "primary",
                                    icon: !1,
                                    hasColoredBg: !1,
                                  },
                                  size: "large",
                                  initialState: { state: "disabled" },
                                  className: "mb-[16px] lg:mb-[auto]",
                                }),
                              }),
                          (0, n.jsx)(u.Z, {
                            text: c("closeLabel"),
                            type: {
                              class: "secondary",
                              icon: !1,
                              hasColoredBg: !1,
                            },
                            size: "large",
                            initialState: { state: "default" },
                            onClick: function () {
                              Kt(i, Function) && i(), m(!1);
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
            })
          );
        },
        qt = function (e) {
          var t = e.isModalOpen,
            s = e.actionClose,
            i = e.onClickItem,
            c = (0, p.Z)("common").t,
            o = (0, r.useRef)(!1),
            d = (0, r.useState)([]),
            u = d[0],
            x = d[1],
            m = (0, r.useState)(""),
            f = m[0],
            h = m[1],
            g = (0, r.useState)(""),
            b = g[0],
            y = g[1],
            j = (0, r.useState)(0),
            v = j[0],
            N = j[1],
            w = (0, r.useState)(0),
            k = w[0],
            C = w[1],
            S = (0, r.useState)(10),
            _ = S[0],
            E = (S[1], (0, r.useState)(!1)),
            L = E[0],
            T = E[1],
            F = (0, r.useState)(!1),
            M = F[0],
            I = F[1],
            A = (0, r.useState)(!1),
            z = A[0],
            O = A[1],
            Z = (0, l.T)(),
            U = (0, l.C)(function (e) {
              return e;
            }),
            P = U.trademodal,
            D = U.waccount,
            H = P.isCustomCollectionModalOpen,
            V = D.currentNetworkId,
            W = function (e) {
              var t = null;
              0 === u.length ? o.current && O(!0) : o.current && O(!1),
                (t =
                  e && e.length > 0
                    ? [V || "1", "NFT", k, _, e]
                    : [V || "1", "NFT", k, _]),
                (0, $.bf)((0, q.f)(e ? "getAssetsQueryString" : "getAssets", t))
                  .then(function (e) {
                    var t = e.data[0],
                      s = t.rows,
                      n = t.count;
                    o.current && N(n),
                      0 === u.length
                        ? o.current && x(s)
                        : o.current && x(u.concat(s)),
                      o.current && O(!1);
                  })
                  .catch(function (e) {
                    console.log(e), o.current && O(!1);
                  }),
                o.current && T(!1);
            };
          return (
            (0, r.useEffect)(function () {
              return (
                (o.current = !0),
                function () {
                  o.current = !1;
                }
              );
            }, []),
            (0, r.useEffect)(
              function () {
                o.current && (N(0), C(0), x([]), T(!0));
              },
              [b]
            ),
            (0, r.useEffect)(
              function () {
                v > u.length
                  ? o.current && (C(k + 10), I(!0))
                  : o.current && I(!1);
              },
              [u]
            ),
            (0, r.useEffect)(
              function () {
                L && W(b);
              },
              [L]
            ),
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(B, {
                  isOpen: t,
                  actionClose: s,
                  children: (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("h4", {
                        className:
                          "text-lg font-semibold text-center text-primary-dark-blue",
                        children: c("filterCollectionsLabel"),
                      }),
                      (0, n.jsxs)("div", {
                        className: "mt-[24px] text-center",
                        children: [
                          (0, n.jsx)(R.Z, {
                            placeholder: c("filterCollectionOrAddressLabel"),
                            setFilter: function (e) {
                              y(e);
                            },
                            hideText: !0,
                          }),
                          (0, n.jsx)("div", {
                            className: "mt-[16px] text-center",
                            children: (0, n.jsx)("span", {
                              onClick: function () {
                                Z((0, a.Dc)(!0));
                              },
                              className:
                                "mt-[16px] text-sm font-regular text-primary-blue cursor-pointer hover:underline",
                              children: c("addNftCollectionLabel"),
                            }),
                          }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className: "mt-[48px]",
                        children: (0, n.jsxs)(Q.Z, {
                          dataLength: u.length,
                          next: W,
                          scrollThreshold: 0.99,
                          hasMore: M,
                          loader: (0, n.jsx)("div", {
                            className: "flex justify-center items-center",
                            children: (0, n.jsx)(te.Z, {
                              isWhite: !1,
                              className: "w-[24px] h-[24px]",
                            }),
                          }),
                          scrollableTarget: "scrollable-modal",
                          style: { overflow: "initial" },
                          children: [
                            (0, n.jsx)(n.Fragment, {
                              children:
                                z &&
                                (0, n.jsx)(n.Fragment, {
                                  children: (0, n.jsx)("div", {
                                    className:
                                      "flex items-center justify-center w-full h-full",
                                    children: (0, n.jsx)(te.Z, {
                                      isWhite: !1,
                                      className: "w-[30px] h-[30px]",
                                    }),
                                  }),
                                }),
                            }),
                            u.map(function (e) {
                              return (0, n.jsx)(
                                Bt,
                                {
                                  collection: e,
                                  isSelected: f === e.address,
                                  onClick: function () {
                                    e.address !== f
                                      ? (h(e.address), i && i(e))
                                      : i && i(e);
                                  },
                                },
                                "collection-".concat(e.address)
                              );
                            }),
                          ],
                        }),
                      }),
                      H &&
                        (0, n.jsx)($t, {
                          isOpen: !0,
                          actionClose: function () {
                            Z((0, a.Dc)(!1));
                          },
                        }),
                    ],
                  }),
                }),
                (0, n.jsxs)("section", {
                  className: "hidden lg:block",
                  children: [
                    (0, n.jsx)("h4", {
                      className:
                        "text-base font-semibold text-primary-dark-blue",
                      children: c("filterCollectionOrAddressLabel"),
                    }),
                    (0, n.jsxs)("div", {
                      className: "mt-[24px]",
                      children: [
                        (0, n.jsx)(R.Z, {
                          placeholder: c("filterCollectionOrAddressLabel"),
                          setFilter: function (e) {
                            y(e);
                          },
                          hideText: !0,
                        }),
                        (0, n.jsx)("div", {
                          className: "mt-[16px]",
                          children: (0, n.jsx)("span", {
                            className:
                              "mt-[16px] text-sm font-regular text-primary-blue cursor-pointer hover:underline",
                            onClick: function () {
                              Z((0, a.Dc)(!0));
                            },
                            children: c("addNftCollectionLabel"),
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: "mt-[48px] max-h-[504px] ".concat(
                        Rt().scrollbar,
                        " overflow-y-scroll overflow-x-hidden px-[3px]"
                      ),
                      id: "collections-scrollable",
                      children: (0, n.jsxs)(Q.Z, {
                        dataLength: u.length,
                        next: W,
                        scrollThreshold: 0.99,
                        hasMore: M,
                        loader: (0, n.jsx)("div", {
                          className: "flex justify-center items-center",
                          children: (0, n.jsx)(te.Z, {
                            isWhite: !1,
                            className: "w-[24px] h-[24px]",
                          }),
                        }),
                        scrollableTarget: "collections-scrollable",
                        style: { overflow: "initial" },
                        children: [
                          (0, n.jsx)(n.Fragment, {
                            children:
                              z &&
                              (0, n.jsx)(n.Fragment, {
                                children: (0, n.jsx)("div", {
                                  className:
                                    "flex items-center justify-center w-full h-[250px]",
                                  children: (0, n.jsx)(te.Z, {
                                    isWhite: !1,
                                    className: "w-[30px] h-[30px]",
                                  }),
                                }),
                              }),
                          }),
                          u.map(function (e) {
                            return (0, n.jsx)(
                              Bt,
                              {
                                collection: e,
                                isSelected: f === e.address,
                                onClick: function () {
                                  e.address !== f
                                    ? (h(e.address), i && i(e))
                                    : i && i(e);
                                },
                              },
                              "desktop-collection-"
                                .concat(e.address, "-")
                                .concat(new Date().getTime())
                            );
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                H &&
                  (0, n.jsx)($t, {
                    isOpen: !0,
                    actionClose: function () {
                      Z((0, a.Dc)(!1));
                    },
                  }),
              ],
            })
          );
        },
        Qt = "/_next/static/media/filter_white.f68e6f90.svg",
        Xt = s(65643),
        es = s.n(Xt),
        ts = function (e) {
          var t = e.tokenName,
            s = e.tokenImageSrc,
            r = e.onClick,
            a = e.className;
          return (0, n.jsxs)("div", {
            className: ""
              .concat(
                es().erc20Row,
                " flex items-center justify-between w-full h-[48px] border-solid border-[1px] border-[rgb(213,216,222)] pl-[24px] pr-[16px] py-[12px] cursor-pointer rounded-[100px] select-none hover:bg-gray-100 "
              )
              .concat(a),
            onClick: r,
            children: [
              (0, n.jsx)("span", {
                className: "text-sm font-semibold text-primary-blue",
                children: t,
              }),
              (0, n.jsx)("img", { src: s, className: "w-[24px]" }),
            ],
          });
        },
        ss = s(76293),
        ns = s.n(ss),
        rs = s(18255),
        as = s.n(rs),
        ls = function (e) {
          var t = e.items,
            s = e.currentItemIndex,
            a = e.onChange,
            l = e.className,
            i = (0, r.useState)(!1),
            c = i[0],
            o = i[1];
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)("div", {
              className: ""
                .concat(as().selectableBadge, " ")
                .concat(
                  c ? "" : "hover:opacity-90",
                  " flex items-center justify-between relative h-[40px] rounded-[44px] pl-[16px] py-[8px] pr-[8px] cursor-pointer "
                )
                .concat(l),
              onClick: function () {
                o(!0);
              },
              children: [
                (0, n.jsxs)("div", {
                  className: "flex justify-between items-center",
                  children: [
                    (0, n.jsx)("span", {
                      className:
                        "text-primary-blue text-sm font-semibold mr-[8px]",
                      children: t[s].name,
                    }),
                    (0, n.jsx)("img", { src: ye, className: "w-[8px]" }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "flex items-center",
                  children: (0, n.jsx)("img", {
                    src: t[s].icon,
                    className: "w-[16px]",
                  }),
                }),
                (0, n.jsx)("ul", {
                  className: "".concat(
                    c ? "" : "hidden",
                    " absolute p-[8px] bg-primary-white shadow shadow-md shadow-light-shadow w-[140px] top-0 right-0 rounded-[4px]"
                  ),
                  children: t.map(function (e, s) {
                    return (0, n.jsxs)(
                      "li",
                      {
                        className:
                          "p-[8px] flex justify-between items-center rounded-[4px] hover:bg-gray-100",
                        onClick: function (e) {
                          e.stopPropagation(), a && a(s), o(!1);
                        },
                        children: [
                          (0, n.jsx)("span", {
                            className:
                              "text-sm font-semibold text-primary-blue",
                            children: e.name,
                          }),
                          (0, n.jsx)("img", {
                            src: t[s].icon,
                            className: "w-[24px]",
                          }),
                        ],
                      },
                      "selectable-badge-item-".concat(s)
                    );
                  }),
                }),
              ],
            }),
          });
        },
        is = s(83536),
        cs = s.n(is);
      var os = RegExp("^\\d*(?:\\\\[.])?\\d*$"),
        ds = function (e) {
          var t,
            s = e.tokenAmount,
            a = e.tokens,
            i = e.tokenSelectedIndex,
            c = e.userAddress,
            o = e.onValueChange,
            d = e.onTokenChange,
            u = e.placeholder,
            x = void 0 === u ? "0.00" : u,
            m = e.showBalance,
            f = void 0 === m || m,
            h = e.alreadyFocused,
            g = void 0 !== h && h,
            b = e.onInsufficientFunds,
            y = e.className,
            j = (0, p.Z)("common").t,
            v = (0, r.useRef)(null),
            N = (0, r.useRef)(!1),
            w = (0, r.useState)(s),
            S = w[0],
            _ = w[1],
            E = (0, r.useState)(a),
            L = E[0],
            T = (E[1], (0, r.useState)(i)),
            F = T[0],
            M = T[1],
            I = (0, r.useState)(),
            A = I[0],
            R = I[1],
            z = (0, r.useState)(),
            O = z[0],
            Z = z[1],
            B = (0, r.useState)(!1),
            U = B[0],
            P = B[1],
            D = (0, r.useState)(c),
            H = D[0],
            V = (D[1], (0, r.useState)("0")),
            W = V[0],
            Y = V[1],
            J = (0, r.useState)(),
            G = J[0],
            K = J[1],
            Q = (0, r.useState)(!1),
            X = Q[0],
            ee = Q[1],
            te = (0, r.useState)(null),
            se = te[0],
            ne = te[1],
            re = (0, r.useState)(!1),
            ae = re[0],
            le = re[1],
            ie = (0, r.useState)(),
            ce = ie[0],
            oe = ie[1],
            de = (0, r.useState)(!1),
            ue = de[0],
            pe = de[1],
            fe = (0, C.Ge)().library,
            he = (0, l.C)(function (e) {
              return e;
            }).waccount.currentNetworkName,
            ge = function (e) {
              !(function (e) {
                if (
                  "" === e ||
                  os.test(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
                )
                  if (e.indexOf(".") > -1) {
                    var t = e.substring(e.indexOf(".") + 1).length;
                    O && t <= O && N.current && _(e);
                  } else N.current && _(e);
              })(e.target.value.replace(/,/g, "."));
            },
            be = function () {
              (0, $.bf)(
                (0, q.f)("getPairValue", ["".concat(a[F].symbol, "-USD")])
              )
                .then(function (e) {
                  var t = e.data[0].amount;
                  N.current && oe(t);
                })
                .catch(function (e) {
                  console.log(e), N.current && oe("0");
                });
            },
            ye = function (e) {
              if (ce) {
                var t;
                if (e.indexOf(".") > -1 && e.indexOf(".") !== e.length - 1) {
                  var s = e.substring(e.indexOf(".") + 1).length;
                  t = xe.O$.from(
                    null === e || void 0 === e ? void 0 : e.replace(".", "")
                  ).mul(O ? Math.pow(10, O - s).toString() : "0");
                } else
                  t =
                    -1 === e.indexOf(".") ||
                    (e.indexOf(".") > -1 && e.indexOf(".") === e.length - 1)
                      ? xe.O$.from(
                          null === e || void 0 === e
                            ? void 0
                            : e.replace(".", "")
                        ).mul(O ? Math.pow(10, O).toString() : "0")
                      : xe.O$.from("0");
                var n = xe.O$.from(Number(ce).toFixed(0)),
                  r = me.bM(t.mul(n), O);
                N.current && Y(r.toString());
              }
            };
          return (
            (0, r.useEffect)(function () {
              return (
                (N.current = !0),
                function () {
                  N.current = !1;
                }
              );
            }, []),
            (0, r.useEffect)(
              function () {
                if (L.length > 0) {
                  var e = [];
                  L.forEach(function (t, s) {
                    e.push({ name: t.symbol, icon: t.imageUrl });
                  }),
                    N.current && K(e);
                }
              },
              [L]
            ),
            (0, r.useEffect)(function () {
              se || "NATIVE" === a[i].type
                ? "NATIVE" === a[i].type && N.current && le(!0)
                : N.current &&
                  (ne(new k.CH(a[i].address, a[i].abi, fe)), le(!1)),
                N.current && P(!0);
            }, []),
            (0, r.useEffect)(function () {
              be();
            }, []),
            (0, r.useEffect)(
              function () {
                se &&
                  se
                    .decimals()
                    .then(function (e) {
                      se.balanceOf(H).then(function (t) {
                        N.current && (Z(e), R(t));
                      });
                    })
                    .catch(function (e) {
                      console.error(e);
                    });
              },
              [se]
            ),
            (0, r.useEffect)(
              function () {
                var e, t;
                S
                  ? (ye(S),
                    (e = me.vz(S, O)),
                    o &&
                      o({
                        value: S,
                        amountBase: e,
                        balance: A,
                        currentTokenIndex: F,
                      }))
                  : ((t = me.vz("0.0", O)),
                    o &&
                      o({
                        value: S,
                        amountBase: t,
                        balance: A,
                        currentTokenIndex: F,
                      }));
              },
              [S]
            ),
            (0, r.useEffect)(
              function () {
                ae &&
                  he &&
                  fe
                    .getBalance(H)
                    .then(function (e) {
                      N.current && (Z(18), R(e));
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
              },
              [ae]
            ),
            (0, r.useEffect)(
              function () {
                U &&
                  (be(),
                  "NATIVE" === a[F].type && N.current
                    ? (le(!0), ne(null))
                    : "ERC20" === a[F].type &&
                      N.current &&
                      (le(!1), ne(new k.CH(a[F].address, a[F].abi, fe))));
              },
              [F]
            ),
            (0, r.useEffect)(function () {
              g && N.current && ee(!0);
            }, []),
            (0, r.useEffect)(
              function () {
                S && ce && O && ye(S);
              },
              [ce, S, O]
            ),
            (0, r.useEffect)(
              function () {
                A && b && "function" === typeof b && A.isZero() && b();
              },
              [A]
            ),
            (0, n.jsx)(n.Fragment, {
              children:
                L &&
                L.length > 0 &&
                (0, n.jsxs)("div", {
                  className: "flex flex-col ".concat(
                    X ? "".concat(cs().cryptoBarFocus) : "w-[80%]"
                  ),
                  children: [
                    (0, n.jsxs)("div", {
                      className: ""
                        .concat(cs().cryptoBar, " ")
                        .concat(
                          ue ? "border-primary-blue" : "border-primary-gray",
                          " flex w-full justify-between items-center pl-[16px] py-[8px] pr-[8px] border-[1px] border-solid text-lg font-semibold text-primary-blue rounded-[100px] h-[56px] hover:border-primary-blue "
                        )
                        .concat(y),
                      onClick: function () {
                        v.current && (ee(!0), pe(!0), v.current.focus());
                      },
                      children: [
                        (0, n.jsxs)("div", {
                          className: "flex flex-1 items-center",
                          children: [
                            (0, n.jsx)("div", {
                              onClick: function (e) {
                                e.stopPropagation(), ee(!0), pe(!0);
                                var t,
                                  s = v.current;
                                A &&
                                  ((t = A),
                                  new Promise(
                                    ae
                                      ? function (e, s) {
                                          try {
                                            e(me.bM(t, O));
                                          } catch (n) {
                                            s(n);
                                          }
                                        }
                                      : function (e, s) {
                                          try {
                                            null === se ||
                                              void 0 === se ||
                                              se.decimals().then(function (s) {
                                                var n = me.bM(t, s);
                                                e(n);
                                              });
                                          } catch (n) {
                                            s(n);
                                          }
                                        }
                                  )).then(function (e) {
                                    _(e),
                                      setTimeout(function () {
                                        s.focus();
                                      });
                                  });
                              },
                              className:
                                "flex items-center justify-center bg-primary-blue cursor-pointer rounded-[3px] w-[24px] h-[16px] mr-[8px] hover:bg-primary-dark-blue",
                              children: (0, n.jsx)("span", {
                                className:
                                  "rubik text-xxs font-semibold text-primary-white select-none",
                                children: j("maxLabel"),
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className: "flex flex-1 items-center",
                              children:
                                O &&
                                (0, n.jsx)("input", {
                                  className: "text-lg font-semibold",
                                  ref: v,
                                  inputMode: "decimal",
                                  autoComplete: "off",
                                  autoCorrect: "off",
                                  type: "text",
                                  pattern: "^[0-9]*[.,]?[0-9]*$",
                                  placeholder: x,
                                  minLength: 1,
                                  maxLength: 79,
                                  spellCheck: "false",
                                  value: S,
                                  onChange: ge,
                                  onFocus: ge,
                                  onBlur: function () {
                                    pe(!1);
                                  },
                                }),
                            }),
                          ],
                        }),
                        G &&
                          (0, n.jsx)(ls, {
                            items: G,
                            currentItemIndex: F,
                            className: "min-w-[107px]",
                            onChange: function (e) {
                              e !== F &&
                                (_("0"), R(void 0), Z(void 0), M(e), d && d());
                            },
                          }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "flex items-center justify-between mt-[4px] px-[20px]",
                      children: [
                        Number(S) > 0
                          ? (0, n.jsxs)("div", {
                              className: "flex flex-col items-start",
                              children: [
                                (0, n.jsx)("div", {
                                  className:
                                    "rubik text-xxs font-regular text-primary-dark-blue text-left",
                                  children: "~ ".concat(
                                    (function (e) {
                                      var t = new Intl.NumberFormat("en-US", {
                                        style: "currency",
                                        currency: "USD",
                                      }).format(Number(e));
                                      return t.length > 35
                                        ? "".concat(t.substring(0, 35), "..")
                                        : t;
                                    })(W)
                                  ),
                                }),
                                (0, n.jsxs)("div", {
                                  className:
                                    "rubik text-xxs font-regular text-primary-dark-blue text-left",
                                  children: [
                                    j("convertionRateLabel"),
                                    " ",
                                    (0, n.jsx)("a", {
                                      href: "https://coinbase.com",
                                      target: "_blank",
                                      className: "text-primary-blue underline",
                                      children: "coinbase.com",
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : (0, n.jsx)("span", {}),
                        f
                          ? (0, n.jsxs)("span", {
                              className:
                                "rubik text-xxs font-regular text-primary-gray text-right ".concat(
                                  (
                                    null === A || void 0 === A
                                      ? void 0
                                      : A.isZero()
                                  )
                                    ? "flex flex-col"
                                    : ""
                                ),
                              children: [
                                (0, n.jsxs)("span", {
                                  children: [
                                    j("balanceLabel"),
                                    " ",
                                    ((t = A), t ? me.bM(t, O) : ""),
                                    " ",
                                    L[F].symbol,
                                  ],
                                }),
                                (null === A || void 0 === A
                                  ? void 0
                                  : A.isZero()) &&
                                  (0, n.jsx)("span", {
                                    className: "text-state-warning",
                                    children: j("insufficientFundsLabel"),
                                  }),
                              ],
                            })
                          : (0, n.jsx)(n.Fragment, {}),
                      ],
                    }),
                  ],
                }),
            })
          );
        },
        us = "/_next/static/media/trash.b08f6964.svg",
        xs = "/_next/static/media/trash_hover.08f54799.svg",
        ms = "/_next/static/media/moonpay_circles_logo.e911c55c.svg";
      function ps(e, t) {
        return null != t &&
          "undefined" !== typeof Symbol &&
          t[Symbol.hasInstance]
          ? t[Symbol.hasInstance](e)
          : e instanceof t;
      }
      var fs = function (e) {
          var t = e.tokens,
            s = e.tokenSelectedIndex,
            i = e.tokenAmount,
            c = e.isOpen,
            o = void 0 !== c && c,
            d = e.isEditingAmount,
            x = void 0 !== d && d,
            m = e.isTaker,
            f = void 0 !== m && m,
            h = e.isMoonpayVisible,
            g = void 0 !== h && h,
            b = e.action,
            y = e.actionClose,
            j = e.onRemove,
            v = (0, p.Z)("common").t,
            N = (0, r.useRef)(!1),
            w = (0, r.useState)(o),
            k = w[0],
            C = w[1],
            S = (0, r.useState)(i),
            _ = S[0],
            E = S[1],
            L = (0, r.useState)(""),
            T = L[0],
            M = L[1],
            I = (0, r.useState)(!1),
            A = I[0],
            R = I[1],
            z = (0, r.useState)(!1),
            O = z[0],
            Z = z[1],
            B = (0, r.useState)(),
            U = B[0],
            P = B[1],
            D = (0, r.useState)(s),
            H = D[0],
            V = D[1],
            W = (0, r.useState)(!1),
            Y = W[0],
            J = W[1],
            G = (0, l.T)(),
            K = (0, l.C)(function (e) {
              return e;
            }).trademodal,
            $ = K.taker,
            q = K.maker;
          return (
            (0, r.useEffect)(function () {
              return (
                (N.current = !0),
                function () {
                  N.current = !1;
                }
              );
            }, []),
            (0, r.useEffect)(function () {
              $ &&
                q &&
                (f && $.collector && N.current
                  ? M($.collector.address)
                  : q.collector && N.current && M(q.collector.address));
            }, []),
            (0, n.jsx)(n.Fragment, {
              children:
                k &&
                (0, n.jsx)("div", {
                  className: "".concat(
                    ns().overlay,
                    " lg:flex lg:justify-center lg:items-center lg:fixed lg:top-0 lg:left-0 lg:w-full lg:h-full z-[20000]"
                  ),
                  children: (0, n.jsxs)("div", {
                    className: "".concat(
                      ns().cryptoTokenModal,
                      " fixed flex flex-col w-full bg-primary-white z-[20000] rounded-t-[32px] py-[32px] px-[16px] w-full text-center overflow-y-scroll lg:relative lg:w-[520px] lg:rounded-[16px] lg:h-[auto] lg:p-[32px]"
                    ),
                    children: [
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-col items-center justify-center text-primary-white",
                        children: [
                          (0, n.jsx)("h3", {
                            className:
                              "text-lg font-semibold text-primary-blue lg:text-xl",
                            children: x
                              ? (0, n.jsx)(n.Fragment, {
                                  children: v("editAmountLabel"),
                                })
                              : (0, n.jsx)(n.Fragment, {
                                  children: v("selectedDesiredLabel"),
                                }),
                          }),
                          (0, n.jsx)("div", {
                            className:
                              "flex w-full justify-center items-center mt-[24px]",
                            children:
                              T &&
                              T.length > 0 &&
                              (0, n.jsx)(ds, {
                                tokenAmount: _,
                                tokens: t,
                                tokenSelectedIndex: H,
                                userAddress: T,
                                placeholder: "0.00",
                                showBalance: !f,
                                onInsufficientFunds: function () {
                                  J(!0);
                                },
                                onValueChange: function (e) {
                                  var t = e.value,
                                    s = e.amountBase,
                                    n = e.balance,
                                    r = e.currentTokenIndex;
                                  if ((R(!1), s && n && t)) {
                                    if (f) {
                                      if (0 === parseFloat(t))
                                        return void Z(!1);
                                    } else if (0 === parseFloat(t) || s.gt(n))
                                      return void Z(!1);
                                    E(t), V(r), P(s), Z(!0);
                                  } else E("0"), Z(!1);
                                },
                                alreadyFocused: x,
                                onTokenChange: function () {
                                  R(!0);
                                },
                              }),
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-col mt-[40px] lg:flex-row-reverse lg:justify-between",
                        children: [
                          A
                            ? (0, n.jsx)(u.Z, {
                                text: v(
                                  x
                                    ? "saveCapitalizedLabel"
                                    : "addCapitalizedLabel"
                                ),
                                type: {
                                  class: "primary",
                                  icon: !1,
                                  hasColoredBg: !1,
                                },
                                size: "large",
                                initialState: { state: "disabled" },
                                className: "mb-[16px] lg:mb-[auto]",
                              })
                            : (0, n.jsx)(n.Fragment, {
                                children: O
                                  ? (0, n.jsx)(u.Z, {
                                      text: v(
                                        x
                                          ? "saveCapitalizedLabel"
                                          : "addCapitalizedLabel"
                                      ),
                                      type: {
                                        class: "primary",
                                        icon: !1,
                                        hasColoredBg: !1,
                                      },
                                      size: "large",
                                      initialState: { state: "default" },
                                      className: "mb-[16px] lg:mb-[auto]",
                                      onClick: function () {
                                        ps(b, Function) && b(),
                                          x
                                            ? f
                                              ? ("ERC20" === t[H].type
                                                  ? G(
                                                      (0, a.xp)({
                                                        tokenAddress:
                                                          t[H].address,
                                                        amount: U
                                                          ? U.toString()
                                                          : "",
                                                        amountHumanReadable: _,
                                                      })
                                                    )
                                                  : G(
                                                      (0, a.CO)({
                                                        type: t[H].type,
                                                        amount: U
                                                          ? U.toString()
                                                          : "",
                                                        amountHumanReadable: _,
                                                      })
                                                    ),
                                                G((0, a.Gu)()))
                                              : ("ERC20" === t[H].type
                                                  ? G(
                                                      (0, a.$N)({
                                                        tokenAddress:
                                                          t[H].address,
                                                        amount: U
                                                          ? U.toString()
                                                          : "",
                                                        amountHumanReadable: _,
                                                      })
                                                    )
                                                  : G(
                                                      (0, a.Qw)({
                                                        type: t[H].type,
                                                        amount: U
                                                          ? U.toString()
                                                          : "",
                                                        amountHumanReadable: _,
                                                      })
                                                    ),
                                                G((0, a.Gu)()))
                                            : (G(
                                                f
                                                  ? (0, a.c6)({
                                                      id: "",
                                                      type: t[H].type,
                                                      amount: U
                                                        ? U.toString()
                                                        : "",
                                                      amountHumanReadable: _,
                                                      owner: T,
                                                      collection: {
                                                        name: t[H].name,
                                                        statusVerification:
                                                          t[H]
                                                            .statusVerification,
                                                        address: t[H].address,
                                                        imageUrl: t[H].imageUrl,
                                                        networkId:
                                                          t[H].networkId,
                                                        abi: t[H].abi,
                                                        type: t[H].type,
                                                        symbol: t[H].symbol,
                                                        createdAt:
                                                          t[H].createdAt,
                                                      },
                                                      imageSrc: t[H].imageUrl,
                                                      isApproved: !1,
                                                      hasPlaceholder: !1,
                                                    })
                                                  : (0, a.TG)({
                                                      id: "",
                                                      type: t[H].type,
                                                      amount: U
                                                        ? U.toString()
                                                        : "",
                                                      amountHumanReadable: _,
                                                      owner: T,
                                                      collection: {
                                                        name: t[H].name,
                                                        statusVerification:
                                                          t[H]
                                                            .statusVerification,
                                                        address: t[H].address,
                                                        imageUrl: t[H].imageUrl,
                                                        networkId:
                                                          t[H].networkId,
                                                        abi: t[H].abi,
                                                        type: t[H].type,
                                                        symbol: t[H].symbol,
                                                        createdAt:
                                                          t[H].createdAt,
                                                      },
                                                      imageSrc: t[H].imageUrl,
                                                      isApproved: !1,
                                                      hasPlaceholder: !1,
                                                    })
                                              ),
                                              G((0, a.Gu)())),
                                          C(!1);
                                      },
                                    })
                                  : (0, n.jsx)("div", {
                                      children: (0, n.jsx)(u.Z, {
                                        text: v(
                                          x
                                            ? "saveCapitalizedLabel"
                                            : "addCapitalizedLabel"
                                        ),
                                        type: {
                                          class: "primary",
                                          icon: !1,
                                          hasColoredBg: !1,
                                        },
                                        size: "large",
                                        initialState: { state: "disabled" },
                                        className: "mb-[16px] lg:mb-[auto]",
                                      }),
                                    }),
                              }),
                          !x &&
                            !0 === g &&
                            Y &&
                            (0, n.jsx)("div", {
                              children: (0, n.jsx)(u.Z, {
                                text: v("topUpMoonpayLabel"),
                                type: {
                                  class: "primary",
                                  icon: !0,
                                  hasColoredBg: !1,
                                },
                                iconSrc: ms,
                                size: "large",
                                initialState: { state: "default" },
                                className: "ml-[2px] px-[28px]",
                                onClick: function () {
                                  G((0, F.gj)(!0));
                                },
                              }),
                            }),
                          (0, n.jsxs)("div", {
                            className: "flex justify-between items-start",
                            children: [
                              (0, n.jsx)(u.Z, {
                                text: v(x ? "cancelLabel" : "closeLabel"),
                                type: {
                                  class: "secondary",
                                  icon: !1,
                                  hasColoredBg: !1,
                                },
                                size: "large",
                                initialState: { state: "default" },
                                onClick: function () {
                                  ps(y, Function) && y(), C(!1);
                                },
                              }),
                              x &&
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex items-center justify-center mt-[15px] ml-[24px] cursor-pointer",
                                  onClick: function () {
                                    j && j(), G((0, a.Gu)());
                                  },
                                  onMouseEnter: function (e) {
                                    document.getElementById("trash-icon").src =
                                      xs;
                                    var t =
                                      document.getElementById("remove-label");
                                    t.classList.add("text-primary-dark-blue"),
                                      t.classList.add("underline"),
                                      t.classList.remove("text-primary-blue");
                                  },
                                  onMouseLeave: function (e) {
                                    document.getElementById("trash-icon").src =
                                      us;
                                    var t =
                                      document.getElementById("remove-label");
                                    t.classList.remove(
                                      "text-primary-dark-blue"
                                    ),
                                      t.classList.remove("underline"),
                                      t.classList.add("text-primary-blue");
                                  },
                                  children: [
                                    (0, n.jsx)("img", {
                                      id: "trash-icon",
                                      src: us,
                                      className: "w-[16px] mr-[4px]",
                                      onMouseEnter: function (e) {
                                        document.getElementById(
                                          "trash-icon"
                                        ).src = xs;
                                        var t =
                                          document.getElementById(
                                            "remove-label"
                                          );
                                        t.classList.add(
                                          "text-primary-dark-blue"
                                        ),
                                          t.classList.add("underline"),
                                          t.classList.remove(
                                            "text-primary-blue"
                                          );
                                      },
                                      onMouseLeave: function (e) {
                                        document.getElementById(
                                          "trash-icon"
                                        ).src = us;
                                        var t =
                                          document.getElementById(
                                            "remove-label"
                                          );
                                        t.classList.remove(
                                          "text-primary-dark-blue"
                                        ),
                                          t.classList.remove("underline"),
                                          t.classList.add("text-primary-blue");
                                      },
                                    }),
                                    (0, n.jsx)("span", {
                                      id: "remove-label",
                                      className:
                                        "text-primary-blue text-base font-semibold hover:underline hover:text-primary-dark-blue",
                                      onMouseEnter: function (e) {
                                        document.getElementById(
                                          "trash-icon"
                                        ).src = xs;
                                        var t =
                                          document.getElementById(
                                            "remove-label"
                                          );
                                        t.classList.add(
                                          "text-primary-dark-blue"
                                        ),
                                          t.classList.add("underline"),
                                          t.classList.remove(
                                            "text-primary-blue"
                                          );
                                      },
                                      onMouseLeave: function (e) {
                                        document.getElementById(
                                          "trash-icon"
                                        ).src = us;
                                        var t =
                                          document.getElementById(
                                            "remove-label"
                                          );
                                        t.classList.remove(
                                          "text-primary-dark-blue"
                                        ),
                                          t.classList.remove("underline"),
                                          t.classList.add("text-primary-blue");
                                      },
                                      children: v("removeLabel"),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
            })
          );
        },
        hs = s(78505),
        gs = s.n(hs);
      var bs = function (e) {
          var t = e.isModalOpen,
            s = e.actionClose,
            i = e.isTaker,
            c = void 0 !== i && i,
            o = e.isMoonpayVisible,
            d = void 0 !== o && o,
            u = (0, p.Z)("common").t,
            x = (0, r.useRef)(!1),
            m = (0, r.useState)([]),
            f = m[0],
            h = m[1],
            g = (0, r.useState)(""),
            b = g[0],
            y = g[1],
            j = (0, r.useState)(!1),
            v = j[0],
            N = j[1],
            w = (0, r.useState)(0),
            k = w[0],
            C = w[1],
            S = (0, r.useState)(!1),
            _ = S[0],
            E = S[1],
            T = (0, r.useState)(0),
            F = T[0],
            M = T[1],
            I = (0, r.useState)(10),
            A = I[0],
            z = (I[1], (0, r.useState)(0)),
            O = z[0],
            U = z[1],
            P = (0, r.useState)(!1),
            D = P[0],
            H = P[1],
            V = (0, r.useState)(!1),
            W = V[0],
            Y = V[1],
            J = (0, l.T)(),
            G = (0, l.C)(function (e) {
              return e;
            }).waccount.currentNetworkId,
            K = function (e) {
              var t = null;
              (t =
                e && e.length > 0
                  ? [G || "1", "TKN", F, A, e]
                  : [G || "1", "TKN", F, A]),
                (0, $.bf)((0, q.f)(e ? "getAssetsQueryString" : "getAssets", t))
                  .then(function (e) {
                    var t = e.data[0],
                      s = t.rows,
                      n = t.count;
                    x.current && U(n),
                      0 === f.length
                        ? x.current && h(s)
                        : x.current && h(f.concat(s));
                  })
                  .catch(function (e) {
                    console.log(e);
                  }),
                x.current && E(!1);
            };
          return (
            (0, r.useEffect)(function () {
              return (
                (x.current = !0),
                function () {
                  x.current = !1;
                }
              );
            }, []),
            (0, r.useEffect)(
              function () {
                x.current && (U(0), M(0), h([]), E(!0));
              },
              [b]
            ),
            (0, r.useEffect)(
              function () {
                O > f.length
                  ? x.current && (M(F + 10), H(!0))
                  : x.current && H(!1);
              },
              [f]
            ),
            (0, r.useEffect)(
              function () {
                _ && K(b);
              },
              [_]
            ),
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(B, {
                  isOpen: t,
                  actionClose: s,
                  children: (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("h4", {
                        className:
                          "text-lg font-semibold text-center text-primary-blue",
                        children: u("selectDesiredTokenLabel"),
                      }),
                      (0, n.jsx)("div", {
                        className: "mt-[24px] text-center",
                        children: (0, n.jsx)(R.Z, {
                          placeholder: "Search token name or address",
                          setFilter: function (e) {
                            y(e);
                          },
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: "mt-[48px]",
                        children: (0, n.jsx)(Q.Z, {
                          dataLength: f.length,
                          next: K,
                          hasMore: D,
                          loader: (0, n.jsx)("div", {
                            className: "flex justify-center items-center",
                            children: (0, n.jsx)("img", {
                              src: L.Z.src,
                              className: "".concat(
                                gs().rotating,
                                " w-[24px] h-[24px]"
                              ),
                            }),
                          }),
                          scrollableTarget: "scrollable-modal",
                          style: { overflow: "initial" },
                          children: f.map(function (e, t) {
                            return (0, n.jsx)(
                              ts,
                              {
                                tokenName: e.name,
                                tokenImageSrc: e.imageUrl,
                                onClick: function () {
                                  C(t), N(!0);
                                },
                                className: "mt-[8px]",
                              },
                              "token-item-".concat(t)
                            );
                          }),
                        }),
                      }),
                      v &&
                        (0, n.jsx)(fs, {
                          tokens: f,
                          tokenSelectedIndex: k,
                          tokenAmount: "0",
                          isEditingAmount: !1,
                          isTaker: c,
                          isOpen: !0,
                          action: function () {
                            N(!1), J((0, a.eY)(!1));
                          },
                          actionClose: function () {
                            N(!1), J((0, a.eY)(!1));
                          },
                        }),
                    ],
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: "".concat(
                    !1 === W ? "".concat(gs().overlay) : "",
                    " lg:flex lg:justify-center lg:items-center lg:fixed lg:top-0 lg:left-0 lg:w-full lg:h-full z-[20000]"
                  ),
                  children: [
                    (0, n.jsx)("div", {
                      className: ""
                        .concat(!0 === W && "hidden", " ")
                        .concat(
                          gs().erc20Tokens,
                          " fixed flex flex-col w-full bg-primary-white z-[20000] rounded-t-[32px] py-[40px] px-[16px] w-full h-[304px] text-center lg:relative lg:w-[520px] lg:rounded-[16px] lg:h-[auto] lg:p-[32px]"
                        ),
                      children: (0, n.jsxs)("section", {
                        className: "hidden lg:block",
                        children: [
                          (0, n.jsxs)("div", {
                            className:
                              "flex flex-col items-center justify-center w-full",
                            children: [
                              (0, n.jsx)("div", {
                                className:
                                  "flex items-center justify-center w-full w-[32px] h-[32px]",
                                children: (0, n.jsx)("img", {
                                  src: Z.Z.src,
                                  className: "w-[26px] h-[26px] cursor-pointer",
                                  onClick: function () {
                                    var e, t;
                                    (e = s),
                                      (null != (t = Function) &&
                                      "undefined" !== typeof Symbol &&
                                      t[Symbol.hasInstance]
                                        ? t[Symbol.hasInstance](e)
                                        : e instanceof t) && s();
                                  },
                                }),
                              }),
                              (0, n.jsx)("h4", {
                                className:
                                  "text-xl font-semibold text-primary-blue mt-[16px]",
                                children: u("selectDesiredTokenLabel"),
                              }),
                            ],
                          }),
                          (0, n.jsx)("div", {
                            className: "mt-[40px]",
                            children: (0, n.jsx)(R.Z, {
                              placeholder: u("searchTokenNameAddressLabel"),
                              setFilter: function (e) {
                                y(e);
                              },
                            }),
                          }),
                          (0, n.jsx)("div", {
                            className: "mt-[40px] max-h-[504px] ".concat(
                              gs().scrollbar,
                              " overflow-y-scroll overflow-x-hidden px-[3px]"
                            ),
                            id: "collections-scrollable",
                            children: (0, n.jsx)(Q.Z, {
                              dataLength: f.length,
                              next: K,
                              hasMore: !0,
                              loader: (0, n.jsx)("div", {
                                className: "flex justify-center items-center",
                                children: (0, n.jsx)("img", {
                                  src: L.Z.src,
                                  className: "".concat(
                                    gs().rotating,
                                    " w-[24px] h-[24px]"
                                  ),
                                }),
                              }),
                              scrollableTarget: "collections-scrollable",
                              style: { overflow: "initial" },
                              children: f.map(function (e, t) {
                                return (0, n.jsx)(
                                  ts,
                                  {
                                    tokenName: e.name,
                                    tokenImageSrc: e.imageUrl,
                                    onClick: function () {
                                      C(t), N(!0), Y(!0);
                                    },
                                    className: "mt-[8px]",
                                  },
                                  "token-item-".concat(t)
                                );
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    v &&
                      (0, n.jsx)(fs, {
                        tokens: f,
                        tokenSelectedIndex: k,
                        tokenAmount: "0",
                        isEditingAmount: !1,
                        isTaker: c,
                        isMoonpayVisible: d,
                        isOpen: !0,
                        action: function () {
                          N(!1), J((0, a.eY)(!1));
                        },
                        actionClose: function () {
                          N(!1), J((0, a.eY)(!1));
                        },
                      }),
                  ],
                }),
              ],
            })
          );
        },
        ys = "/_next/static/media/mascotte.b765c862.svg",
        js = "/_next/static/media/mascotte_points_up.d981d52d.svg",
        vs = function (e) {
          return e || lt.Z.src;
        },
        Ns = function (e) {
          return !e;
        },
        ws = function (e) {
          var t = e.isCurrent,
            s = (0, p.Z)("common").t,
            i = (0, r.useRef)(!1),
            c = (0, r.useState)(!1),
            o = c[0],
            d = c[1],
            x = (0, r.useState)([]),
            m = x[0],
            f = x[1],
            h = (0, r.useState)(),
            g = h[0],
            b = h[1],
            y = (0, r.useState)("null"),
            j = y[0],
            v = y[1],
            N = (0, r.useState)(1),
            w = N[0],
            k = N[1],
            C = (0, r.useState)(0),
            _ = C[0],
            E = C[1],
            L = (0, r.useState)(!1),
            T = L[0],
            F = L[1],
            M = (0, r.useState)(!1),
            I = M[0],
            A = M[1],
            R = (0, r.useState)(),
            z = R[0],
            O = R[1],
            Z = (0, r.useState)([]),
            B = Z[0],
            U = Z[1],
            D = (0, r.useState)(!1),
            H = D[0],
            V = D[1],
            W = (0, r.useState)([]),
            G = W[0],
            K = W[1],
            Q = (0, l.C)(function (e) {
              return e;
            }),
            X = Q.trademodal,
            ee = Q.waccount,
            se = (0, l.T)(),
            re = X.isERC20ModalOpen,
            ae = X.maker,
            le = ee.currentNetworkId,
            ie = function (e, t) {
              var s,
                n = ae && ae.collector ? ae.collector.address : "";
              le &&
                ((s = (0, q.f)("getNftCollectionAssetsByOwnerOS", [
                  le,
                  e.address,
                  n,
                  "50",
                  j,
                ])),
                (0, $.bf)(s)
                  .then(function (e) {
                    var s = e.data[0],
                      n = (s.response, s.nfts),
                      r = s.continuation,
                      a = s.total;
                    i.current && (E(a), F(!1)),
                      0 === n.length
                        ? i.current && U(n)
                        : i.current && U(B.concat(n)),
                      !le || (le !== S.HL.MAINNET && le !== S.HL.RINKEBY)
                        ? !le ||
                          (le !== S.HL.POLYGON && le !== S.HL.POLYGON_MUMBAI) ||
                          (a > B.length && i.current && k(w + 1))
                        : r
                        ? i.current && v(r)
                        : i.current && v("null"),
                      t && i.current && t("default");
                  })
                  .catch(function (e) {
                    i.current && F(!1),
                      t && i.current && t("default"),
                      console.log(e);
                  }));
            },
            ce = function (e, t) {
              return e > 0 && t > 0
                ? ""
                    .concat(e, " NFT")
                    .concat(e > 1 ? "s" : "", " + ")
                    .concat(t, " ")
                    .concat(s("cryptoSelectedLabel"))
                : e > 0
                ? "".concat(e, " NFT").concat(e > 1 ? "s" : "", " selected")
                : t > 0
                ? "".concat(t, " ").concat(s("crypto selected"))
                : "0 NFTs ".concat(s("selectedLabel"));
            },
            oe = function (e, t) {
              if (
                ae &&
                ae.assets.find(function (s) {
                  var n;
                  return (
                    s.collection.address.toLowerCase() ===
                      t.address.toLowerCase() &&
                    e.tokenId.toLowerCase() ===
                      (null === (n = s.id) || void 0 === n
                        ? void 0
                        : n.toLowerCase())
                  );
                })
              )
                return !0;
              return !1;
            },
            de = function (e, t) {
              if (ae) {
                var s = ae.assets.find(function (s) {
                  var n;
                  return (
                    s.collection.address.toLowerCase() ===
                      t.address.toLowerCase() &&
                    e.tokenId.toLowerCase() ===
                      (null === (n = s.id) || void 0 === n
                        ? void 0
                        : n.toLowerCase())
                  );
                });
                if (s && s.amount) return s.amount;
              }
              return "0";
            };
          return (
            (0, r.useEffect)(function () {
              return (
                (i.current = !0),
                function () {
                  i.current = !1;
                }
              );
            }, []),
            (0, r.useEffect)(
              function () {
                if (o) {
                  var e = function () {
                    window.innerWidth > 1023 && i.current && d(!1);
                  };
                  return (
                    e(),
                    window.addEventListener("resize", e),
                    function () {
                      window.removeEventListener("resize", e);
                    }
                  );
                }
              },
              [o]
            ),
            (0, r.useEffect)(
              function () {
                !le || (le !== S.HL.MAINNET && le !== S.HL.RINKEBY)
                  ? !le ||
                    (le !== S.HL.POLYGON && le !== S.HL.POLYGON_MUMBAI) ||
                    (B.length < _ ? i.current && A(!0) : i.current && A(!1))
                  : "null" !== j
                  ? i.current && A(!0)
                  : i.current && A(!1);
              },
              [j, w]
            ),
            (0, r.useEffect)(
              function () {
                z && ie(z);
              },
              [z]
            ),
            (0, r.useEffect)(
              function () {
                if (ae && ae.assets) {
                  var e = new Array(),
                    t = 0;
                  ae.assets.forEach(function (s) {
                    "ERC20" === s.type || "NATIVE" === s.type
                      ? e.push({
                          text: s.amountHumanReadable
                            ? s.amountHumanReadable
                            : "",
                          isDisabled: !1,
                          isEditable: !0,
                          tokenSymbol: s.collection.symbol,
                          icon: s.imageSrc ? s.imageSrc : "",
                          asset: s,
                        })
                      : t++;
                  }),
                    i.current &&
                      (b({
                        text: ce(t, e.length),
                        isDisabled: !(t > 0 || e.length > 0),
                        isEditable: !1,
                        tokenSymbol: "",
                        icon: "",
                        asset: null,
                      }),
                      f(e));
                }
              },
              [null === ae || void 0 === ae ? void 0 : ae.assets]
            ),
            (0, n.jsx)(ne, {
              isCurrent: t,
              children: (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsxs)("section", {
                    className: "grid grid-cols-12",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "hidden bg-primary-white rounded-[16px] lg:block lg:col-span-3 lg:max-h-[732px]",
                        children: (0, n.jsx)(qt, {
                          isModalOpen: !1,
                          actionClose: function () {},
                          onClickItem: function (e) {
                            e.address !=
                              (null === z || void 0 === z
                                ? void 0
                                : z.address) &&
                              (U([]),
                              !le ||
                              (le !== S.HL.MAINNET && le !== S.HL.RINKEBY)
                                ? !le ||
                                  (le !== S.HL.POLYGON &&
                                    le !== S.HL.POLYGON_MUMBAI) ||
                                  k(1)
                                : v("null"),
                              F(!0),
                              O(e));
                          },
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "col-span-12 pt-[30px] lg:pt-0 lg:col-span-9 lg:pl-[32px] lg:min-h-[732px]",
                        children: (0, n.jsx)("div", {
                          className: "w-full lg:min-h-[732px]",
                          children: (0, n.jsxs)("div", {
                            className: "w-full lg:min-h-[732px]",
                            children: [
                              (0, n.jsxs)("div", {
                                className: "flex flex-col lg:flex-row-reverse",
                                children: [
                                  ae &&
                                    (0, n.jsxs)("div", {
                                      className:
                                        "flex items-center justify-between lg:items-start lg:flex-row-reverse",
                                      children: [
                                        (0, n.jsxs)("div", {
                                          className:
                                            "flex items-center lg:flex-row-reverse",
                                          children: [
                                            (0, n.jsx)("div", {
                                              className:
                                                "flex items-center mr-[16px] lg:ml-[16px] lg:mr-[auto]",
                                              children:
                                                ae &&
                                                ae.collector &&
                                                (0, n.jsx)(n.Fragment, {
                                                  children: (0, n.jsx)(Y.Z, {
                                                    address:
                                                      ae.collector.address,
                                                    src: ae.collector.imageUrl,
                                                    isNFT: ae.collector.isNft,
                                                    sizesClassNames:
                                                      "w-[24px] h-[24px]",
                                                    jazziconSize: {
                                                      defaultSize: 24,
                                                      breakpoints: [],
                                                      sizes: [],
                                                    },
                                                  }),
                                                }),
                                            }),
                                            (0, n.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, n.jsx)("span", {
                                                  className:
                                                    "text-base font-semibold text-primary-dark-blue",
                                                  children:
                                                    s("yourWalletLabel"),
                                                }),
                                                (0, n.jsx)("span", {
                                                  className:
                                                    "rubik text-xs font-regular cursor-pointer text-primary-gray",
                                                  children:
                                                    ae &&
                                                    ae.collector &&
                                                    (0, n.jsx)(ke.Z, {
                                                      text: (0, J.x)(
                                                        ae.collector.address
                                                      ),
                                                      url: (0, mt.x)(
                                                        le,
                                                        ae.collector.address
                                                      ),
                                                      isCustom: !0,
                                                      isTargetBlank: !0,
                                                      customColor: "#979dac",
                                                      weight: "font-regular",
                                                      className: "text-xs",
                                                    }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, n.jsx)("div", {
                                          className:
                                            "flex items-center justify-center lg:mr-[16px] lg:h-[44px]",
                                        }),
                                      ],
                                    }),
                                  (0, n.jsx)("div", {
                                    className:
                                      "mt-[24px] lg:flex-1 lg:mt-[auto]",
                                    children: (0, n.jsx)("h3", {
                                      className:
                                        "text-left text-primary-dark-blue text-2xl font-semibold lg:pr-[30px]",
                                      children: s(
                                        "selectWhatYouWantToOfferLabel"
                                      ),
                                    }),
                                  }),
                                ],
                              }),
                              (0, n.jsx)("div", {
                                className: "mt-[24px]",
                                children:
                                  g &&
                                  (0, n.jsx)(Ye, {
                                    text: g.text,
                                    isDisabled: g.isDisabled,
                                    isEditable: g.isEditable,
                                    onClick: function () {
                                      g.isDisabled || se((0, a.Rd)(!0));
                                    },
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                className: "mt-[20px]",
                                children: (0, n.jsx)(Ze, {
                                  actionButtonText: s("addTokensLabel"),
                                  textEmptyContainer: s("includeCryptoLabel"),
                                  onClick: function () {
                                    se((0, a.eY)(!0));
                                  },
                                  children:
                                    m.length > 0 &&
                                    m.map(function (e, t) {
                                      return (0, n.jsx)(
                                        Ye,
                                        {
                                          text: e.text,
                                          isDisabled: e.isDisabled,
                                          isEditable: e.isEditable,
                                          tokenSymbol: e.tokenSymbol,
                                          icon: e.icon,
                                          onClick: function () {
                                            K(new Array(e.asset)), V(!0);
                                          },
                                        },
                                        "badge-token-".concat(t)
                                      );
                                    }),
                                }),
                              }),
                              (0, n.jsx)("div", {
                                className: "mt-[32px] lg:hidden",
                                children: (0, n.jsx)(u.Z, {
                                  text: s("filterCollectionsLabel"),
                                  type: {
                                    class: "primary",
                                    icon: !0,
                                    hasColoredBg: !1,
                                  },
                                  size: "large",
                                  initialState: { state: "default" },
                                  iconSrc: Qt,
                                  showNotifications: !0,
                                  notificationsNumber: (function () {
                                    if (ae) {
                                      var e = ae.assets,
                                        t = 0;
                                      return (
                                        e.forEach(function (e) {
                                          ("ERC721" !== e.type &&
                                            "ERC1155" !== e.type) ||
                                            t++;
                                        }),
                                        t
                                      );
                                    }
                                    return 0;
                                  })(),
                                  onClick: function () {
                                    d(!0);
                                  },
                                }),
                              }),
                              (0, n.jsx)("div", {
                                className: "mt-[28px]",
                                children:
                                  !1 === T
                                    ? (0, n.jsx)(n.Fragment, {
                                        children:
                                          B.length > 0
                                            ? (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                  (0, n.jsx)("div", {
                                                    className:
                                                      "grid justify-items-center gap-x-[16px] gap-y-[16px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-3 x2l:grid-cols-4",
                                                    children:
                                                      z &&
                                                      B.map(function (e, t) {
                                                        var s, r;
                                                        return (0, n.jsx)(
                                                          xt,
                                                          {
                                                            NFTSrc: vs(
                                                              e.cachedFileUrl
                                                            ),
                                                            NFTId: e.tokenId,
                                                            standard: z.type,
                                                            collection: z,
                                                            address: (
                                                              null === ae ||
                                                              void 0 === ae ||
                                                              null ===
                                                                (s =
                                                                  ae.collector) ||
                                                              void 0 === s
                                                                ? void 0
                                                                : s.address
                                                            )
                                                              ? null === ae ||
                                                                void 0 === ae ||
                                                                null ===
                                                                  (r =
                                                                    ae.collector) ||
                                                                void 0 === r
                                                                ? void 0
                                                                : r.address
                                                              : "",
                                                            isSelected: oe(
                                                              e,
                                                              z
                                                            ),
                                                            isTaker: !1,
                                                            amount: de(e, z),
                                                            hasPlaceholder: Ns(
                                                              e.cachedFileUrl
                                                            ),
                                                            onClick: function (
                                                              t,
                                                              s
                                                            ) {
                                                              var n, r;
                                                              s
                                                                ? "ERC721" ===
                                                                    z.type &&
                                                                  (se(
                                                                    (0, a.TG)({
                                                                      id: e.tokenId,
                                                                      type: z.type,
                                                                      amount:
                                                                        null,
                                                                      amountHumanReadable:
                                                                        null,
                                                                      owner:
                                                                        (null ===
                                                                          ae ||
                                                                        void 0 ===
                                                                          ae ||
                                                                        null ===
                                                                          (n =
                                                                            ae.collector) ||
                                                                        void 0 ===
                                                                          n
                                                                          ? void 0
                                                                          : n.address) ||
                                                                        "",
                                                                      collection:
                                                                        z,
                                                                      imageSrc:
                                                                        vs(
                                                                          e.cachedFileUrl
                                                                        ),
                                                                      isApproved:
                                                                        !1,
                                                                      hasPlaceholder:
                                                                        Ns(
                                                                          e.cachedFileUrl
                                                                        ),
                                                                    })
                                                                  ),
                                                                  se(
                                                                    (0, a.Gu)()
                                                                  ))
                                                                : "ERC721" ===
                                                                    z.type &&
                                                                  (se(
                                                                    (0, a.iB)({
                                                                      id: e.tokenId,
                                                                      type: z.type,
                                                                      amount:
                                                                        null,
                                                                      amountHumanReadable:
                                                                        null,
                                                                      owner:
                                                                        (null ===
                                                                          ae ||
                                                                        void 0 ===
                                                                          ae ||
                                                                        null ===
                                                                          (r =
                                                                            ae.collector) ||
                                                                        void 0 ===
                                                                          r
                                                                          ? void 0
                                                                          : r.address) ||
                                                                        "",
                                                                      collection:
                                                                        z,
                                                                      imageSrc:
                                                                        vs(
                                                                          e.cachedFileUrl
                                                                        ),
                                                                      isApproved:
                                                                        !1,
                                                                      hasPlaceholder:
                                                                        Ns(
                                                                          e.cachedFileUrl
                                                                        ),
                                                                    })
                                                                  ),
                                                                  se(
                                                                    (0, a.Gu)()
                                                                  ));
                                                            },
                                                          },
                                                          "nft-item-".concat(t)
                                                        );
                                                      }),
                                                  }),
                                                  I &&
                                                    (0, n.jsx)("div", {
                                                      className:
                                                        "flex justify-center items-center w-full h-[80px]",
                                                      children: (0, n.jsx)(
                                                        u.Z,
                                                        {
                                                          text: s(
                                                            "loadMoreLabel"
                                                          ),
                                                          type: {
                                                            class: "primary",
                                                            icon: !1,
                                                            hasColoredBg: !1,
                                                          },
                                                          size: "small",
                                                          initialState: {
                                                            state: "default",
                                                          },
                                                          onClick: function (
                                                            e
                                                          ) {
                                                            z && ie(z, e),
                                                              e && e("loading");
                                                          },
                                                        }
                                                      ),
                                                    }),
                                                ],
                                              })
                                            : (0, n.jsx)("div", {
                                                className:
                                                  "flex items-center justify-center w-full h-[500px]",
                                                children: (0, n.jsx)("div", {
                                                  className:
                                                    "flex flex-col items-center justify-center h-full w-full",
                                                  children: z
                                                    ? (0, n.jsxs)(n.Fragment, {
                                                        children: [
                                                          (0, n.jsx)("img", {
                                                            src: P,
                                                            className:
                                                              "w-[88px] h-[88px]",
                                                          }),
                                                          (0, n.jsx)("div", {
                                                            className:
                                                              "text-xl font-semibold text-primary-dark-blue mt-[24px]",
                                                            children:
                                                              s("sorryLabel"),
                                                          }),
                                                          (0, n.jsx)("div", {
                                                            className:
                                                              "rubik text-base font-light text-primary-dark-blue mt-[8px]",
                                                            children:
                                                              s(
                                                                "noAssetsFoundLabel"
                                                              ),
                                                          }),
                                                        ],
                                                      })
                                                    : (0, n.jsxs)(n.Fragment, {
                                                        children: [
                                                          (0, n.jsx)("img", {
                                                            src: ys,
                                                            className:
                                                              "w-[173px] hidden lg:block",
                                                          }),
                                                          (0, n.jsx)("img", {
                                                            src: js,
                                                            className:
                                                              "w-[173px] block lg:hidden",
                                                          }),
                                                          (0, n.jsx)("span", {
                                                            className:
                                                              "text-base font-regular text-primary-dark-blue text-center mt-[16px]",
                                                            children: s(
                                                              "selectCollectionShowNFTsLabel"
                                                            ),
                                                          }),
                                                        ],
                                                      }),
                                                }),
                                              }),
                                      })
                                    : (0, n.jsx)(n.Fragment, {
                                        children: (0, n.jsx)("div", {
                                          className:
                                            "flex items-center justify-center w-full h-[500px]",
                                          children: (0, n.jsx)(te.Z, {
                                            isWhite: !1,
                                            className: "w-[30px] h-[30px]",
                                          }),
                                        }),
                                      }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                  o &&
                    (0, n.jsx)(qt, {
                      isModalOpen: o,
                      actionClose: function () {
                        d(!1);
                      },
                      onClickItem: function (e) {
                        e.address !=
                          (null === z || void 0 === z ? void 0 : z.address) &&
                          (U([]),
                          !le || (le !== S.HL.MAINNET && le !== S.HL.RINKEBY)
                            ? !le ||
                              (le !== S.HL.POLYGON &&
                                le !== S.HL.POLYGON_MUMBAI) ||
                              k(1)
                            : v("null"),
                          F(!0),
                          O(e));
                      },
                    }),
                  re &&
                    (0, n.jsx)(bs, {
                      isModalOpen: !0,
                      actionClose: function () {
                        se((0, a.eY)(!1));
                      },
                      isTaker: !1,
                      isMoonpayVisible: !0,
                    }),
                  H &&
                    (0, n.jsx)(fs, {
                      tokens: new Array(G[0].collection),
                      tokenSelectedIndex: 0,
                      tokenAmount: G[0].amountHumanReadable
                        ? G[0].amountHumanReadable
                        : "0",
                      isEditingAmount: !0,
                      isTaker: !1,
                      isOpen: !0,
                      action: function () {
                        V(!1);
                      },
                      actionClose: function () {
                        V(!1);
                      },
                      onRemove: function () {
                        "NATIVE" === G[0].type
                          ? se((0, a.Bd)(G[0]))
                          : se((0, a.TJ)(G[0])),
                          V(!1);
                      },
                    }),
                ],
              }),
            })
          );
        },
        ks = function (e) {
          var t,
            s = e.isCurrent,
            i = (0, p.Z)("common").t,
            c = (0, r.useRef)(!1),
            o = (0, r.useState)(!1),
            d = o[0],
            x = o[1],
            m = (0, r.useState)([]),
            f = m[0],
            h = m[1],
            g = (0, r.useState)(),
            b = g[0],
            y = g[1],
            j = (0, r.useState)("null"),
            v = j[0],
            N = j[1],
            w = (0, r.useState)(1),
            k = w[0],
            C = w[1],
            _ = (0, r.useState)(0),
            E = _[0],
            L = _[1],
            T = (0, r.useState)(!1),
            F = T[0],
            M = T[1],
            I = (0, r.useState)(!1),
            A = I[0],
            R = I[1],
            z = (0, r.useState)(),
            O = z[0],
            Z = z[1],
            B = (0, r.useState)([]),
            U = B[0],
            G = B[1],
            K = (0, r.useState)(!1),
            Q = K[0],
            se = K[1],
            re = (0, r.useState)([]),
            ae = re[0],
            le = re[1],
            ie = (0, r.useState)([]),
            ce = ie[0],
            oe = ie[1],
            de = (0, r.useState)([]),
            ue = de[0],
            xe = de[1],
            me = (0, l.C)(function (e) {
              return e;
            }),
            pe = me.trademodal,
            fe = me.waccount,
            he = (0, l.T)(),
            ge = pe.isERC20ModalOpen,
            be = pe.taker,
            ye = fe.jwtToken,
            je = fe.currentNetworkId,
            ve = (0, r.useState)(
              (null === be ||
              void 0 === be ||
              null === (t = be.collector) ||
              void 0 === t
                ? void 0
                : t.isFavourite) || 0
            ),
            Ne = (ve[0], ve[1]),
            we = function (e) {
              if (e && "response" in e && "undefined" !== typeof e.response) {
                var t = e.response.status;
                401 === t
                  ? (he((0, a.jO)()),
                    he((0, a.r$)(!1)),
                    he((0, X.up)(!0)),
                    he((0, X.kt)()),
                    (0, ee.uM)({
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
                    }))
                  : 500 === t &&
                    (console.log("backend error.."), console.error(e));
              } else console.error(e);
            },
            Ce = function (e, t) {
              var s,
                n = be && be.collector ? be.collector.address : "";
              je &&
                ((s = (0, q.f)("getNftCollectionAssetsByOwnerOS", [
                  je,
                  e.address,
                  n,
                  "50",
                  v,
                ])),
                (0, $.bf)(s)
                  .then(function (e) {
                    var s = e.data[0],
                      n = (s.response, s.nfts),
                      r = s.continuation,
                      a = s.total;
                    c.current && (L(a), M(!1)),
                      0 === n.length
                        ? c.current && G(n)
                        : c.current && G(U.concat(n)),
                      !je || (je !== S.HL.MAINNET && je !== S.HL.RINKEBY)
                        ? !je ||
                          (je !== S.HL.POLYGON && je !== S.HL.POLYGON_MUMBAI) ||
                          (a > U.length && c.current && C(k + 1))
                        : r
                        ? c.current && N(r)
                        : c.current && N("null"),
                      t && c.current && t("default");
                  })
                  .catch(function (e) {
                    c.current && M(!1),
                      t && c.current && t("default"),
                      console.log(e);
                  }));
            },
            Se = function (e, t) {
              return e > 0 && t > 0
                ? ""
                    .concat(e, " NFT")
                    .concat(e > 1 ? "s" : "", " + ")
                    .concat(t, " ")
                    .concat(i("cryptoSelectedLabel"))
                : e > 0
                ? "".concat(e, " NFT").concat(e > 1 ? "s" : "", " selected")
                : t > 0
                ? "".concat(t, " ").concat(i("cryptoSelectedLabel"))
                : "0 NFTs ".concat(i("selectedLabel"));
            },
            _e = function (e, t) {
              if (
                be &&
                be.assets.find(function (s) {
                  var n;
                  return (
                    s.collection.address.toLowerCase() ===
                      t.address.toLowerCase() &&
                    e.tokenId.toLowerCase() ===
                      (null === (n = s.id) || void 0 === n
                        ? void 0
                        : n.toLowerCase())
                  );
                })
              )
                return !0;
              return !1;
            },
            Ee = function (e, t) {
              if (be) {
                var s = be.assets.find(function (s) {
                  var n;
                  return (
                    s.collection.address.toLowerCase() ===
                      t.address.toLowerCase() &&
                    e.tokenId.toLowerCase() ===
                      (null === (n = s.id) || void 0 === n
                        ? void 0
                        : n.toLowerCase())
                  );
                });
                if (s && s.amount) return s.amount;
              }
              return "0";
            };
          return (
            (0, r.useEffect)(function () {
              return (
                (c.current = !0),
                function () {
                  c.current = !1;
                }
              );
            }, []),
            (0, r.useEffect)(
              function () {
                if (d) {
                  var e = function () {
                    window.innerWidth > 1023 && c.current && x(!1);
                  };
                  return (
                    e(),
                    window.addEventListener("resize", e),
                    function () {
                      window.removeEventListener("resize", e);
                    }
                  );
                }
              },
              [d]
            ),
            (0, r.useEffect)(
              function () {
                !je || (je !== S.HL.MAINNET && je !== S.HL.RINKEBY)
                  ? !je ||
                    (je !== S.HL.POLYGON && je !== S.HL.POLYGON_MUMBAI) ||
                    (U.length < E ? c.current && R(!0) : c.current && R(!1))
                  : "null" !== v
                  ? c.current && R(!0)
                  : c.current && R(!1);
              },
              [v, k]
            ),
            (0, r.useEffect)(
              function () {
                O && Ce(O);
              },
              [O]
            ),
            (0, r.useEffect)(
              function () {
                if (be && be.assets) {
                  var e = new Array(),
                    t = 0;
                  be.assets.forEach(function (s) {
                    "ERC20" === s.type || "NATIVE" === s.type
                      ? e.push({
                          text: s.amountHumanReadable
                            ? s.amountHumanReadable
                            : "",
                          isDisabled: !1,
                          isEditable: !0,
                          tokenSymbol: s.collection.symbol,
                          icon: s.imageSrc ? s.imageSrc : "",
                          asset: s,
                        })
                      : t++;
                  }),
                    c.current &&
                      (y({
                        text: Se(t, e.length),
                        isDisabled: !(t > 0 || e.length > 0),
                        isEditable: !1,
                        tokenSymbol: "",
                        icon: "",
                        asset: null,
                      }),
                      h(e));
                }
              },
              [null === be || void 0 === be ? void 0 : be.assets]
            ),
            (0, n.jsx)(ne, {
              isCurrent: s,
              children: (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsxs)("section", {
                    className: "grid grid-cols-12",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "hidden bg-primary-white rounded-[16px] lg:block lg:col-span-3 lg:max-h-[732px]",
                        children: (0, n.jsx)(qt, {
                          isModalOpen: !1,
                          actionClose: function () {},
                          onClickItem: function (e) {
                            e.address !=
                              (null === O || void 0 === O
                                ? void 0
                                : O.address) &&
                              (G([]),
                              !je ||
                              (je !== S.HL.MAINNET && je !== S.HL.RINKEBY)
                                ? !je ||
                                  (je !== S.HL.POLYGON &&
                                    je !== S.HL.POLYGON_MUMBAI) ||
                                  C(1)
                                : N("null"),
                              M(!0),
                              Z(e));
                          },
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "col-span-12 pt-[30px] lg:pt-0 lg:col-span-9 lg:pl-[32px] lg:min-h-[732px]",
                        children: (0, n.jsx)("div", {
                          className: "w-full lg:min-h-[732px]",
                          children: (0, n.jsxs)("div", {
                            className:
                              "w-full bg-primary-white lg:min-h-[732px]",
                            children: [
                              (0, n.jsxs)("div", {
                                className: "flex flex-col lg:flex-row-reverse",
                                children: [
                                  be &&
                                    (0, n.jsxs)("div", {
                                      className:
                                        "flex items-center justify-between lg:items-start lg:flex-row-reverse",
                                      children: [
                                        (0, n.jsxs)("div", {
                                          className:
                                            "flex items-center lg:flex-row-reverse",
                                          children: [
                                            (0, n.jsx)("div", {
                                              className:
                                                "flex items-center mr-[16px] lg:ml-[16px] lg:mr-[auto]",
                                              children:
                                                be &&
                                                be.collector &&
                                                (0, n.jsx)(n.Fragment, {
                                                  children: (0, n.jsx)(Y.Z, {
                                                    address:
                                                      be.collector.address,
                                                    src: be.collector.imageUrl,
                                                    isNFT: be.collector.isNft,
                                                    sizesClassNames:
                                                      "w-[24px] h-[24px]",
                                                    jazziconSize: {
                                                      defaultSize: 24,
                                                      breakpoints: [],
                                                      sizes: [],
                                                    },
                                                  }),
                                                }),
                                            }),
                                            (0, n.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, n.jsx)("span", {
                                                  className:
                                                    "text-base font-semibold text-primary-dark-blue",
                                                  children:
                                                    be &&
                                                    be.collector &&
                                                    (0, n.jsx)(n.Fragment, {
                                                      children: be.collector
                                                        .username
                                                        ? "@".concat(
                                                            be.collector
                                                              .username
                                                          )
                                                        : (0, n.jsx)("span", {
                                                            className:
                                                              "text-primary-gray rubik text-xs",
                                                            children: i(
                                                              "usernameNotSetLabel"
                                                            ),
                                                          }),
                                                    }),
                                                }),
                                                (0, n.jsx)("span", {
                                                  className:
                                                    "rubik text-xs font-regular cursor-pointer",
                                                  children:
                                                    be &&
                                                    be.collector &&
                                                    (0, n.jsx)(ke.Z, {
                                                      text: (0, J.x)(
                                                        be.collector.address
                                                      ),
                                                      url: (0, mt.x)(
                                                        je,
                                                        be.collector.address
                                                      ),
                                                      isCustom: !0,
                                                      isTargetBlank: !0,
                                                      customColor: "#979dac",
                                                      weight: "font-regular",
                                                      className: "text-xs",
                                                    }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, n.jsx)("div", {
                                          className:
                                            "flex items-center justify-center lg:mr-[16px] lg:h-[44px]",
                                          children: (0, n.jsx)("div", {
                                            className:
                                              "flex items-center justify-center w-[24px] h-[24px]",
                                            children:
                                              be &&
                                              be.collector &&
                                              (0, n.jsx)(n.Fragment, {
                                                children:
                                                  1 === be.collector.isFavourite
                                                    ? (0, n.jsx)("img", {
                                                        src: D,
                                                        className:
                                                          "w-[16px] h-[16px] cursor-pointer",
                                                        onClick: function (e) {
                                                          var t, s;
                                                          e.stopPropagation(),
                                                            (s =
                                                              (null ===
                                                                (t =
                                                                  be.collector) ||
                                                              void 0 === t
                                                                ? void 0
                                                                : t.address) ||
                                                              ""),
                                                            ue.indexOf(s) >
                                                              -1 ||
                                                              (je &&
                                                                ye &&
                                                                (xe(
                                                                  ue.concat([s])
                                                                ),
                                                                (0, $.U3)(
                                                                  (0, q.f)(
                                                                    "deleteFavouriteUser"
                                                                  ),
                                                                  {
                                                                    networkId:
                                                                      je.toString(),
                                                                    userFavourite:
                                                                      s,
                                                                  },
                                                                  ye
                                                                )
                                                                  .then(
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      var t =
                                                                        JSON.parse(
                                                                          JSON.stringify(
                                                                            ue
                                                                          )
                                                                        );
                                                                      (t =
                                                                        t.splice(
                                                                          t.indexOf(
                                                                            s
                                                                          ),
                                                                          1
                                                                        )),
                                                                        c.current &&
                                                                          (xe(
                                                                            t
                                                                          ),
                                                                          Ne(
                                                                            0
                                                                          )),
                                                                        he(
                                                                          (0,
                                                                          a.YB)(
                                                                            0
                                                                          )
                                                                        );
                                                                    }
                                                                  )
                                                                  .catch(
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      var t =
                                                                        JSON.parse(
                                                                          JSON.stringify(
                                                                            ue
                                                                          )
                                                                        );
                                                                      (t =
                                                                        t.splice(
                                                                          t.indexOf(
                                                                            s
                                                                          ),
                                                                          1
                                                                        )),
                                                                        c.current &&
                                                                          xe(t),
                                                                        we(e);
                                                                    }
                                                                  )));
                                                        },
                                                        onMouseEnter: function (
                                                          e
                                                        ) {
                                                          e.target.src = V;
                                                        },
                                                        onMouseLeave: function (
                                                          e
                                                        ) {
                                                          e.target.src = D;
                                                        },
                                                      })
                                                    : (0, n.jsx)("img", {
                                                        src: H,
                                                        className:
                                                          "w-[16px] h-[16px] cursor-pointer",
                                                        onClick: function (e) {
                                                          var t, s;
                                                          e.stopPropagation(),
                                                            (s =
                                                              (null ===
                                                                (t =
                                                                  be.collector) ||
                                                              void 0 === t
                                                                ? void 0
                                                                : t.address) ||
                                                              ""),
                                                            ce.indexOf(s) >
                                                              -1 ||
                                                              (je &&
                                                                ye &&
                                                                (oe(
                                                                  ce.concat([s])
                                                                ),
                                                                (0, $.jl)(
                                                                  (0, q.f)(
                                                                    "addFavouriteUser"
                                                                  ),
                                                                  {
                                                                    networkId:
                                                                      je.toString(),
                                                                    userFavourite:
                                                                      s,
                                                                  },
                                                                  ye
                                                                )
                                                                  .then(
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      var t =
                                                                        JSON.parse(
                                                                          JSON.stringify(
                                                                            ce
                                                                          )
                                                                        );
                                                                      (t =
                                                                        t.splice(
                                                                          t.indexOf(
                                                                            s
                                                                          ),
                                                                          1
                                                                        )),
                                                                        c.current &&
                                                                          (oe(
                                                                            t
                                                                          ),
                                                                          Ne(
                                                                            1
                                                                          )),
                                                                        he(
                                                                          (0,
                                                                          a.YB)(
                                                                            1
                                                                          )
                                                                        );
                                                                    }
                                                                  )
                                                                  .catch(
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      var t =
                                                                        JSON.parse(
                                                                          JSON.stringify(
                                                                            ce
                                                                          )
                                                                        );
                                                                      (t =
                                                                        t.splice(
                                                                          t.indexOf(
                                                                            s
                                                                          ),
                                                                          1
                                                                        )),
                                                                        c.current &&
                                                                          oe(t),
                                                                        we(e);
                                                                    }
                                                                  )));
                                                        },
                                                        onMouseEnter: function (
                                                          e
                                                        ) {
                                                          e.target.src = W;
                                                        },
                                                        onMouseLeave: function (
                                                          e
                                                        ) {
                                                          e.target.src = H;
                                                        },
                                                      }),
                                              }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  (0, n.jsx)("div", {
                                    className:
                                      "mt-[24px] lg:flex-1 lg:mt-[auto]",
                                    children: (0, n.jsx)("h3", {
                                      className:
                                        "text-primary-dark-blue text-2xl font-semibold lg:pr-[30px] lg:w-[500px] lg:text-left ",
                                      children: i(
                                        "selectNFTsFromCounterpartyCollectionLabel"
                                      ),
                                    }),
                                  }),
                                ],
                              }),
                              (0, n.jsx)("div", {
                                className: "mt-[24px]",
                                children:
                                  b &&
                                  (0, n.jsx)(Ye, {
                                    text: b.text,
                                    isDisabled: b.isDisabled,
                                    isEditable: b.isEditable,
                                    onClick: function () {
                                      b.isDisabled || he((0, a.Rd)(!0));
                                    },
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                className: "mt-[20px]",
                                children: (0, n.jsx)(Ze, {
                                  actionButtonText: i("addTokensLabel"),
                                  textEmptyContainer: i("includeCryptoLabel"),
                                  onClick: function () {
                                    he((0, a.eY)(!0));
                                  },
                                  children:
                                    f.length > 0 &&
                                    f.map(function (e, t) {
                                      return (0, n.jsx)(
                                        Ye,
                                        {
                                          text: e.text,
                                          isDisabled: e.isDisabled,
                                          isEditable: e.isEditable,
                                          tokenSymbol: e.tokenSymbol,
                                          icon: e.icon,
                                          onClick: function () {
                                            le(new Array(e.asset)), se(!0);
                                          },
                                        },
                                        "badge-token-".concat(t)
                                      );
                                    }),
                                }),
                              }),
                              (0, n.jsx)("div", {
                                className: "mt-[32px] lg:hidden",
                                children: (0, n.jsx)(u.Z, {
                                  text: i("filterCollectionsLabel"),
                                  type: {
                                    class: "primary",
                                    icon: !0,
                                    hasColoredBg: !1,
                                  },
                                  size: "large",
                                  initialState: { state: "default" },
                                  iconSrc: Qt,
                                  showNotifications: !0,
                                  notificationsNumber: (function () {
                                    if (be) {
                                      var e = be.assets,
                                        t = 0;
                                      return (
                                        e.forEach(function (e) {
                                          ("ERC721" !== e.type &&
                                            "ERC1155" !== e.type) ||
                                            t++;
                                        }),
                                        t
                                      );
                                    }
                                    return 0;
                                  })(),
                                  onClick: function () {
                                    x(!0);
                                  },
                                }),
                              }),
                              (0, n.jsx)("div", {
                                className: "mt-[28px]",
                                children:
                                  !1 === F
                                    ? (0, n.jsx)(n.Fragment, {
                                        children:
                                          U.length > 0
                                            ? (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                  (0, n.jsx)("div", {
                                                    className:
                                                      "grid justify-items-center gap-x-[16px] gap-y-[16px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-3 x2l:grid-cols-4",
                                                    children:
                                                      O &&
                                                      U.map(function (e, t) {
                                                        var s, r;
                                                        return (0, n.jsx)(
                                                          xt,
                                                          {
                                                            NFTSrc: vs(
                                                              e.cachedFileUrl
                                                            ),
                                                            NFTId: e.tokenId,
                                                            standard: O.type,
                                                            collection: O,
                                                            address: (
                                                              null === be ||
                                                              void 0 === be ||
                                                              null ===
                                                                (s =
                                                                  be.collector) ||
                                                              void 0 === s
                                                                ? void 0
                                                                : s.address
                                                            )
                                                              ? null === be ||
                                                                void 0 === be ||
                                                                null ===
                                                                  (r =
                                                                    be.collector) ||
                                                                void 0 === r
                                                                ? void 0
                                                                : r.address
                                                              : "",
                                                            isSelected: _e(
                                                              e,
                                                              O
                                                            ),
                                                            isTaker: !0,
                                                            amount: Ee(e, O),
                                                            hasPlaceholder: Ns(
                                                              e.cachedFileUrl
                                                            ),
                                                            onClick: function (
                                                              t,
                                                              s
                                                            ) {
                                                              var n, r;
                                                              s
                                                                ? "ERC721" ===
                                                                    O.type &&
                                                                  (he(
                                                                    (0, a.c6)({
                                                                      id: e.tokenId,
                                                                      type: O.type,
                                                                      amount:
                                                                        null,
                                                                      amountHumanReadable:
                                                                        null,
                                                                      owner:
                                                                        (null ===
                                                                          be ||
                                                                        void 0 ===
                                                                          be ||
                                                                        null ===
                                                                          (n =
                                                                            be.collector) ||
                                                                        void 0 ===
                                                                          n
                                                                          ? void 0
                                                                          : n.address) ||
                                                                        "",
                                                                      collection:
                                                                        O,
                                                                      imageSrc:
                                                                        vs(
                                                                          e.cachedFileUrl
                                                                        ),
                                                                      isApproved:
                                                                        !1,
                                                                      hasPlaceholder:
                                                                        Ns(
                                                                          e.cachedFileUrl
                                                                        ),
                                                                    })
                                                                  ),
                                                                  he(
                                                                    (0, a.Gu)()
                                                                  ))
                                                                : "ERC721" ===
                                                                    O.type &&
                                                                  (he(
                                                                    (0, a.E4)({
                                                                      id: e.tokenId,
                                                                      type: O.type,
                                                                      amount:
                                                                        null,
                                                                      amountHumanReadable:
                                                                        null,
                                                                      owner:
                                                                        (null ===
                                                                          be ||
                                                                        void 0 ===
                                                                          be ||
                                                                        null ===
                                                                          (r =
                                                                            be.collector) ||
                                                                        void 0 ===
                                                                          r
                                                                          ? void 0
                                                                          : r.address) ||
                                                                        "",
                                                                      collection:
                                                                        O,
                                                                      imageSrc:
                                                                        vs(
                                                                          e.cachedFileUrl
                                                                        ),
                                                                      isApproved:
                                                                        !1,
                                                                      hasPlaceholder:
                                                                        Ns(
                                                                          e.cachedFileUrl
                                                                        ),
                                                                    })
                                                                  ),
                                                                  he(
                                                                    (0, a.Gu)()
                                                                  ));
                                                            },
                                                          },
                                                          "nft-item-".concat(t)
                                                        );
                                                      }),
                                                  }),
                                                  A &&
                                                    (0, n.jsx)("div", {
                                                      className:
                                                        "flex justify-center items-center w-full h-[80px]",
                                                      children: (0, n.jsx)(
                                                        u.Z,
                                                        {
                                                          text: i(
                                                            "loadMoreLabel"
                                                          ),
                                                          type: {
                                                            class: "primary",
                                                            icon: !1,
                                                            hasColoredBg: !1,
                                                          },
                                                          size: "small",
                                                          initialState: {
                                                            state: "default",
                                                          },
                                                          onClick: function (
                                                            e
                                                          ) {
                                                            O && Ce(O, e),
                                                              e && e("loading");
                                                          },
                                                        }
                                                      ),
                                                    }),
                                                ],
                                              })
                                            : (0, n.jsx)("div", {
                                                className:
                                                  "flex items-center justify-center w-full h-[500px]",
                                                children: (0, n.jsx)("div", {
                                                  className:
                                                    "flex flex-col items-center justify-center h-full w-full",
                                                  children: O
                                                    ? (0, n.jsxs)(n.Fragment, {
                                                        children: [
                                                          (0, n.jsx)("img", {
                                                            src: P,
                                                            className:
                                                              "w-[88px] h-[88px]",
                                                          }),
                                                          (0, n.jsx)("div", {
                                                            className:
                                                              "text-xl font-semibold text-primary-dark-blue mt-[24px]",
                                                            children:
                                                              i("sorryLabel"),
                                                          }),
                                                          (0, n.jsx)("div", {
                                                            className:
                                                              "rubik text-base font-light text-primary-dark-blue mt-[8px]",
                                                            children:
                                                              i(
                                                                "noAssetsFoundLabel"
                                                              ),
                                                          }),
                                                        ],
                                                      })
                                                    : (0, n.jsxs)(n.Fragment, {
                                                        children: [
                                                          (0, n.jsx)("img", {
                                                            src: ys,
                                                            className:
                                                              "w-[173px] hidden lg:block",
                                                          }),
                                                          (0, n.jsx)("img", {
                                                            src: js,
                                                            className:
                                                              "w-[173px] block lg:hidden",
                                                          }),
                                                          (0, n.jsx)("span", {
                                                            className:
                                                              "text-base font-regular text-primary-dark-blue text-center mt-[16px]",
                                                            children: i(
                                                              "selectCollectionShowCounterpartyNFTsLabel"
                                                            ),
                                                          }),
                                                        ],
                                                      }),
                                                }),
                                              }),
                                      })
                                    : (0, n.jsx)(n.Fragment, {
                                        children: (0, n.jsx)("div", {
                                          className:
                                            "flex items-center justify-center w-full h-[500px]",
                                          children: (0, n.jsx)(te.Z, {
                                            isWhite: !1,
                                            className: "w-[30px] h-[30px]",
                                          }),
                                        }),
                                      }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                  d &&
                    (0, n.jsx)(qt, {
                      isModalOpen: d,
                      actionClose: function () {
                        x(!1);
                      },
                      onClickItem: function (e) {
                        e.address !=
                          (null === O || void 0 === O ? void 0 : O.address) &&
                          (G([]),
                          !je || (je !== S.HL.MAINNET && je !== S.HL.RINKEBY)
                            ? !je ||
                              (je !== S.HL.POLYGON &&
                                je !== S.HL.POLYGON_MUMBAI) ||
                              C(1)
                            : N("null"),
                          M(!0),
                          Z(e));
                      },
                    }),
                  ge &&
                    (0, n.jsx)(bs, {
                      isModalOpen: !0,
                      actionClose: function () {
                        he((0, a.eY)(!1));
                      },
                      isTaker: !0,
                    }),
                  Q &&
                    (0, n.jsx)(fs, {
                      tokens: new Array(ae[0].collection),
                      tokenSelectedIndex: 0,
                      tokenAmount: ae[0].amountHumanReadable
                        ? ae[0].amountHumanReadable
                        : "0",
                      isEditingAmount: !0,
                      isTaker: !0,
                      isOpen: !0,
                      action: function () {
                        se(!1);
                      },
                      actionClose: function () {
                        se(!1);
                      },
                      onRemove: function () {
                        "NATIVE" === ae[0].type
                          ? he((0, a.sX)(ae[0]))
                          : he((0, a.zs)(ae[0])),
                          se(!1);
                      },
                    }),
                ],
              }),
            })
          );
        },
        Cs = s(56355),
        Ss = s.n(Cs),
        _s = s(51322),
        Es = s.n(_s),
        Ls = "/_next/static/media/edit_gray.e9438d81.svg",
        Ts = "/_next/static/media/trash_gray.e811ff64.svg",
        Fs = function (e) {
          var t = e.asset,
            s = e.className,
            a = void 0 === s ? "" : s,
            l = e.onClick,
            i = (0, p.Z)("common").t,
            c = (0, r.useState)(null),
            o = c[0],
            d = c[1],
            u = (0, C.Ge)().library,
            x = function (e, t) {
              return new Promise(function (s, n) {
                e
                  ? s((0, he.z)("ETHEREUM_DECIMALS_NUMBER"))
                  : new k.CH(t.collection.address, t.collection.abi, u)
                      .decimals()
                      .then(function (e) {
                        s(e);
                      })
                      .catch(function (e) {
                        console.log(e), n(null);
                      });
              });
            };
          return (
            (0, r.useEffect)(function () {
              var e;
              ("NATIVE" !== t.type && "ERC20" !== t.type) ||
                ((e = t),
                (0, $.bf)(
                  (0, q.f)("getPairValue", [
                    "".concat(e.collection.symbol, "-USD"),
                  ])
                )
                  .then(function (t) {
                    var s = t.data[0].amount,
                      n = xe.O$.from(Number(s).toFixed(0)),
                      r = xe.O$.from(e.amount);
                    x("NATIVE" === e.type, e).then(function (e) {
                      var t = me.bM(r.mul(n), e);
                      d(
                        "(~ ".concat(
                          new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                          }).format(Number(t)),
                          ")"
                        )
                      );
                    });
                  })
                  .catch(function (e) {
                    console.log(e);
                  }));
            }, []),
            (0, n.jsxs)("div", {
              className: "flex items-center justify-between ".concat(a),
              children: [
                (0, n.jsx)("div", {
                  className: "flex items-center justify-between",
                  children:
                    "ERC20" === t.collection.type ||
                    "NATIVE" === t.collection.type
                      ? (0, n.jsx)(be.Z, {
                          src: t.collection.imageUrl
                            ? t.collection.imageUrl
                            : lt.Z.src,
                          className: "w-[40px] h-[40px]",
                        })
                      : (0, n.jsx)("div", {
                          className: "w-[40px] h-[40px] rounded-full",
                          style: {
                            backgroundImage: "url(".concat(
                              t.imageSrc ? t.imageSrc : lt.Z.src,
                              ")"
                            ),
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                          },
                        }),
                }),
                (0, n.jsxs)("div", {
                  className: "flex flex-col flex-1 ml-[20px]",
                  children: [
                    (0, n.jsxs)("span", {
                      className: "flex items-center text-lg font-semibold",
                      children: [
                        (0, n.jsx)(qe.Z, {
                          text:
                            "ERC20" === t.type || "NATIVE" === t.type
                              ? ""
                                  .concat(t.amountHumanReadable, " ")
                                  .concat(t.collection.symbol)
                              : "#".concat(t.id),
                          className: "w-[200px] h-[30px]",
                        }),
                        "ERC1155" === t.collection.type &&
                          (0, n.jsxs)("span", {
                            className: "rubik text-xs",
                            children: ["x", "(".concat(t.amount, ")")],
                          }),
                      ],
                    }),
                    "NATIVE" === t.type || "ERC20" === t.type
                      ? (0, n.jsxs)("span", {
                          className: "text-primary-gray text-xs font-semibold",
                          children: [!o && i("calculatingLabel"), o && o],
                        })
                      : (0, n.jsxs)("div", {
                          className: "flex items-center gap-x-1",
                          children: [
                            (0, n.jsx)(be.Z, {
                              src: t.collection.imageUrl
                                ? t.collection.imageUrl
                                : lt.Z.src,
                              className: "w-[16px] h-[16px]",
                              badgeClassName: "w-[10px] h-[10px]",
                              statusVerification:
                                t.collection.statusVerification,
                            }),
                            (0, n.jsx)("span", {
                              className:
                                "text-xxs font-semibold relative top-[2px]",
                              children: (0, n.jsx)(qe.Z, {
                                text: t.collection.name,
                                className: "w-[180px] h-[20px]",
                              }),
                            }),
                          ],
                        }),
                  ],
                }),
                "ERC20" === t.collection.type || "NATIVE" === t.collection.type
                  ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "flex items-center justify-center w-[32px] h-[32px] lg:hidden",
                          children: (0, n.jsx)("img", {
                            src: Ve,
                            className: "w-[16px] h-[16px] cursor-pointer",
                            onClick: function () {
                              l && l();
                            },
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className:
                            "hidden flex justify-center items-center w-[32px] h-[32px] lg:flex",
                          children: (0, n.jsx)("img", {
                            src: Ls,
                            className: "w-[16px] h-[16px] cursor-pointer",
                            onMouseEnter: function (e) {
                              e.target.src = Ve;
                            },
                            onMouseLeave: function (e) {
                              e.target.src = Ls;
                            },
                            onClick: function () {
                              l && l();
                            },
                          }),
                        }),
                      ],
                    })
                  : (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "flex items-center justify-center w-[32px] h-[32px] lg:hidden",
                          children: (0, n.jsx)("img", {
                            src: us,
                            className: "w-[16px] h-[16px] cursor-pointer",
                            onClick: function () {
                              l && l();
                            },
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className:
                            "hidden flex items-center justify-center w-[32px] h-[32px] lg:flex",
                          children: (0, n.jsx)("img", {
                            src: Ts,
                            className: "w-[16px] h-[16px] cursor-pointer",
                            onMouseEnter: function (e) {
                              e.target.src = us;
                            },
                            onMouseLeave: function (e) {
                              e.target.src = Ts;
                            },
                            onClick: function () {
                              l && l();
                            },
                          }),
                        }),
                      ],
                    }),
              ],
            })
          );
        },
        Ms = "/_next/static/media/X_dark_blue.a30043c0.svg",
        Is = function () {
          var e = (0, r.useRef)(!1),
            t = (0, l.C)(function (e) {
              return e;
            }).trademodal,
            s = t.maker,
            i = t.taker,
            c = t.currentStepMenu,
            o = (0, r.useState)(!0),
            d = o[0],
            u = o[1],
            x = (0, r.useState)(!0),
            m = x[0],
            f = x[1],
            h = (0, r.useState)([]),
            g = h[0],
            b = h[1],
            y = (0, r.useState)([]),
            j = y[0],
            v = y[1],
            N = (0, r.useState)([]),
            w = N[0],
            k = N[1],
            C = (0, r.useState)(!1),
            S = C[0],
            _ = C[1],
            E = (0, p.Z)("common").t,
            L = (0, r.useState)(!0),
            T = L[0],
            F = L[1],
            M = (0, l.T)(),
            I = function () {
              M((0, a.Rd)(!1));
            };
          return (
            (0, r.useEffect)(function () {
              return (
                (e.current = !0),
                function () {
                  e.current = !1;
                }
              );
            }, []),
            (0, r.useEffect)(
              function () {
                if (
                  i &&
                  s &&
                  i.assets &&
                  s.assets &&
                  c &&
                  (1 === c || 2 === c)
                ) {
                  var t = [];
                  1 === c ? (t = i.assets) : 2 === c && (t = s.assets);
                  var n =
                    t.findIndex(function (e) {
                      return (
                        "NATIVE" === e.collection.type ||
                        "ERC20" === e.collection.type
                      );
                    }) > -1;
                  e.current && u(n),
                    n &&
                      e.current &&
                      b(
                        t.filter(function (e) {
                          return (
                            "NATIVE" === e.collection.type ||
                            "ERC20" === e.collection.type
                          );
                        })
                      );
                  var r =
                    t.findIndex(function (e) {
                      return (
                        "ERC721" === e.collection.type ||
                        "ERC1155" === e.collection.type
                      );
                    }) > -1;
                  e.current && f(r),
                    r &&
                      e.current &&
                      v(
                        t.filter(function (e) {
                          return (
                            "ERC721" === e.collection.type ||
                            "ERC1155" === e.collection.type
                          );
                        })
                      );
                }
              },
              [c, i, s]
            ),
            (0, r.useEffect)(
              function () {
                d || m || I();
              },
              [d, m]
            ),
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)("div", {
                  className:
                    "fixed w-full h-full flex flex-col-reverse z-[10500] bg-primary-gray/50 top-[0] left-[0] ".concat(
                      !T && "invisible",
                      " lg:flex-row-reverse"
                    ),
                  children: (0, n.jsxs)("div", {
                    className: "".concat(
                      Es().cart,
                      " h-[500px] w-full bg-primary-white rounded-t-[24px] px-[24px] pt-[24px] overflow-y-scroll lg:rounded-t-[0px] lg:h-full lg:w-[400px] lg:pt-[28px]"
                    ),
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "flex items-center justify-center w-full h-[4px] lg:hidden",
                        children: (0, n.jsx)("div", {
                          className:
                            "w-[30px] h-[4px] bg-primary-gray/40 rounded-[2px] cursor-pointer hover:bg-primary-blue",
                          onClick: function () {
                            I();
                          },
                        }),
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "lg:flex lg:items-center lg:justify-between mt-[24px] lg:mt-[0px]",
                        children: [
                          (0, n.jsx)("h3", {
                            className:
                              "w-full text-center text-primary-dark-blue text-xl font-semibold lg:text-left",
                            children: E("selectionPreviewLabel"),
                          }),
                          (0, n.jsx)("div", {
                            className:
                              "flex justify-center items-center w-[36px] h-[36px]",
                            children: (0, n.jsx)("img", {
                              src: Z.Z.src,
                              className:
                                "w-[24px] h-[24px] hidden lg:block cursor-pointer",
                              onMouseEnter: function (e) {
                                e.target.src = Ms;
                              },
                              onMouseLeave: function (e) {
                                e.target.src = Z.Z.src;
                              },
                              onClick: function () {
                                I();
                              },
                            }),
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex flex-col lg:mt-[32px]",
                        children: [
                          d &&
                            g.map(function (e, t) {
                              return (0, n.jsx)(
                                Fs,
                                {
                                  asset: e,
                                  className: "".concat(
                                    0 === t
                                      ? "mb-[12px]"
                                      : "mt-[12px] mb-[12px]"
                                  ),
                                  onClick: function () {
                                    F(!1), k(new Array(e)), _(!0);
                                  },
                                },
                                "crypto-"
                                  .concat(t, "-")
                                  .concat(e.collection.symbol)
                                  .concat(
                                    "-".concat(
                                      "ERC20" === e.collection.type &&
                                        e.collection.address
                                    )
                                  )
                              );
                            }),
                          d &&
                            m &&
                            (0, n.jsx)("div", {
                              className:
                                "w-full h-[1px] mt-[12px] mb-[12px] bg-primary-gray/40",
                            }),
                          m &&
                            j.map(function (e, t) {
                              return (0, n.jsx)(
                                Fs,
                                {
                                  asset: e,
                                  className: "".concat(
                                    0 === t
                                      ? "mb-[12px] ".concat(
                                          d && m && "mt-[12px]"
                                        )
                                      : "mt-[12px] mb-[12px]"
                                  ),
                                  onClick: function () {
                                    var t, n;
                                    1 === c
                                      ? M(
                                          (0, a.E4)({
                                            id: e.id,
                                            type: e.collection.type,
                                            amount: null,
                                            amountHumanReadable: null,
                                            owner:
                                              (null === i ||
                                              void 0 === i ||
                                              null === (t = i.collector) ||
                                              void 0 === t
                                                ? void 0
                                                : t.address) || "",
                                            collection: e.collection,
                                            imageSrc: vs(e.imageSrc),
                                            isApproved: !1,
                                            hasPlaceholder: Ns(e.imageSrc),
                                          })
                                        )
                                      : 2 === c &&
                                        M(
                                          (0, a.iB)({
                                            id: e.id,
                                            type: e.collection.type,
                                            amount: null,
                                            amountHumanReadable: null,
                                            owner:
                                              (null === s ||
                                              void 0 === s ||
                                              null === (n = s.collector) ||
                                              void 0 === n
                                                ? void 0
                                                : n.address) || "",
                                            collection: e.collection,
                                            imageSrc: vs(e.imageSrc),
                                            isApproved: !1,
                                            hasPlaceholder: Ns(e.imageSrc),
                                          })
                                        ),
                                      M((0, a.Gu)());
                                  },
                                },
                                "nft-"
                                  .concat(t, "-")
                                  .concat(e.collection.address, "-")
                              );
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
                S &&
                  (0, n.jsx)(fs, {
                    tokens: new Array(w[0].collection),
                    tokenSelectedIndex: 0,
                    tokenAmount: w[0].amountHumanReadable
                      ? w[0].amountHumanReadable
                      : "0",
                    isEditingAmount: !0,
                    isTaker: 1 === c,
                    isOpen: !0,
                    action: function () {
                      _(!1), I();
                    },
                    actionClose: function () {
                      _(!1), I();
                    },
                    onRemove: function () {
                      "NATIVE" === w[0].type
                        ? M((0, a.sX)(w[0]))
                        : M((0, a.zs)(w[0])),
                        _(!1),
                        I();
                    },
                  }),
              ],
            })
          );
        },
        As = function (e) {
          var t = e.onOpen,
            s = e.onClose,
            c = (0, p.Z)("common").t,
            o = (0, l.C)(function (e) {
              return e;
            }),
            d = o.trademodal,
            u = o.waccount,
            x = (0, l.T)(),
            m = d.stepperMenuSteps,
            f = d.currentStepMenu,
            h = d.isDeleteTradeModalOpen,
            g = d.isCartOpen,
            b = d.maker,
            y = d.taker,
            j = d.who,
            v = d.mode,
            N = d.swapId,
            k = u.isConnected,
            _ = u.currentNetworkId,
            L = m.map(function (e) {
              return {
                stepDescription: e.stepDescription,
                isCompleted: e.isCompleted,
                isCurrent: e.isCurrent,
                onClick: function () {},
              };
            }),
            T = (0, C.Ge)().library,
            F = function () {
              document.body.classList.remove("no-scroll"),
                x((0, a.jO)()),
                x((0, a.r$)(!1));
            };
          return (
            (0, r.useEffect)(
              function () {
                k || F();
              },
              [k]
            ),
            (0, r.useEffect)(function () {
              if (null !== j || null !== v)
                if (null !== j || "EDIT_TAKER" !== v) {
                  if ("VIEW_MAKER" !== v) {
                    var e = u.account,
                      n = u.username,
                      r = u.avatarUrl,
                      l = u.isNFT,
                      i = u.isVerified,
                      c = {
                        evmNetworkId: _ || 1,
                        username: n || "",
                        address: e || "",
                        imageUrl: r || "",
                        isNft: l,
                        isVerified: i,
                      };
                    return (
                      "maker" === j && x((0, a.jO)()),
                      x("maker" === j ? (0, a.M7)(c) : (0, a.Bu)(c)),
                      t && t(),
                      function () {
                        s && s();
                      }
                    );
                  }
                  t && t();
                } else t && t();
            }, []),
            (0, r.useEffect)(
              function () {
                N &&
                  _ &&
                  new (E())({
                    ethers: w,
                    web3Provider: T,
                    network: (0, S.qe)(_).toUpperCase(),
                  })
                    .getSwapDetails(N)
                    .then(function (e) {
                      var t = e.status;
                      (2 !== t && 1 !== t) ||
                        (F(), x((0, a.vg)(null)), x((0, a.eV)(null)));
                    })
                    .catch(function (e) {
                      console.error(e);
                    });
              },
              [N, _]
            ),
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)("div", {
                  className:
                    "flex justify-center items-center fixed top-0 left-0 w-full h-full z-[10000]",
                  children: (0, n.jsxs)("div", {
                    className: ""
                      .concat(Ss().tradeModal, " relative w-full h-full ")
                      .concat(
                        f < 4
                          ? "bg-primary-white"
                          : 4 === f
                          ? "bg-primary-white lg:bg-primary-white"
                          : "bg-primary-blue lg:bg-primary-blue",
                        " "
                      )
                      .concat(
                        "TAKER_UPDATED" === v &&
                          "bg-primary-blue lg:bg-primary-blue"
                      ),
                    children: [
                      f <= 4 &&
                        null === v &&
                        (0, n.jsx)(A, { stepperItems: L }),
                      "EDIT_TAKER" === v &&
                        (0, n.jsx)(A, { mode: "EDIT_TAKER" }),
                      "VIEW_MAKER" === v &&
                        (0, n.jsx)(A, { mode: "VIEW_MAKER" }),
                      (0, n.jsx)("section", {
                        className: ""
                          .concat(
                            f <= 4 ? Ss().mainSection : Ss().fullSection,
                            " "
                          )
                          .concat(
                            f < 4
                              ? "bg-primary-white"
                              : 4 === f
                              ? "bg-primary-white lg:bg-primary-white"
                              : "bg-primary-blue lg:bg-primary-blue",
                            " overflow-y-scroll "
                          )
                          .concat(
                            "TAKER_UPDATED" === v &&
                              "bg-primary-blue lg:bg-primary-blue"
                          ),
                        children: (0, n.jsxs)("div", {
                          className: "".concat(
                            f < 5
                              ? "px-[16px] lg:p-[48px]"
                              : "flex items-center justify-center h-full"
                          ),
                          children: [
                            0 === f &&
                              null === v &&
                              (0, n.jsx)(Lt, { isCurrent: !0 }),
                            1 === f &&
                              null === v &&
                              (0, n.jsx)(ks, { isCurrent: !0 }),
                            2 === f &&
                              null === v &&
                              (0, n.jsx)(ws, { isCurrent: !0 }),
                            3 === f &&
                              null === v &&
                              b &&
                              y &&
                              (0, n.jsx)(n.Fragment, {
                                children:
                                  "maker" === j
                                    ? (0, n.jsx)(St, {
                                        isCurrent: !0,
                                        left: b,
                                        right: y,
                                      })
                                    : (0, n.jsx)(St, {
                                        isCurrent: !0,
                                        left: y,
                                        right: b,
                                      }),
                              }),
                            3 === f &&
                              "VIEW_MAKER" === v &&
                              b &&
                              y &&
                              (0, n.jsx)(n.Fragment, {
                                children: (0, n.jsx)(St, {
                                  isCurrent: !0,
                                  left: b,
                                  right: y,
                                }),
                              }),
                            4 === f &&
                              null === v &&
                              b &&
                              y &&
                              (0, n.jsx)(Ce, { isCurrent: !0 }),
                            5 === f &&
                              null === v &&
                              (0, n.jsx)(Mt, { isCurrent: !0 }),
                            "EDIT_TAKER" === v &&
                              (0, n.jsx)(ie, { isCurrent: !0 }),
                            "TAKER_UPDATED" === v &&
                              (0, n.jsx)(It, { isCurrent: !0 }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                g && (0, n.jsx)(Is, {}),
                h &&
                  (0, n.jsx)(i.Z, {
                    modalTitle:
                      "maker" === j
                        ? null === v
                          ? c("cancelTradeLabel")
                          : "".concat(c("goBackTradeHubLabel"), "?")
                        : null === v
                        ? "".concat(c("goBackTradeHubLabel"), "?")
                        : c("closeWindowLabel"),
                    modalDescription: c(
                      "maker" === j
                        ? null === v
                          ? "cancelCurrentChoiceLabel"
                          : "youCanReturnLaterLabel"
                        : null === v
                        ? "youCanReturnLaterLabel"
                        : "youCanChangeCounterpartyLabel"
                    ),
                    action: function () {
                      F(),
                        x((0, a.xI)(!1)),
                        x((0, a.eV)(null)),
                        x((0, a.vg)(null));
                    },
                    actionClose: function () {
                      x((0, a.xI)(!1));
                    },
                    buttonsText: [
                      c(
                        "maker" === j && null === v
                          ? "yesCancelItLabel"
                          : "goBackTradeHubLabel"
                      ),
                      c("dismissLabel"),
                    ],
                    isOpen: !0,
                  }),
              ],
            })
          );
        };
    },
    64978: function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      function differenceBetweenDates(pastDateTimestamp, futureDateTimestamp) {
        var d =
            new Date(futureDateTimestamp).valueOf() -
            new Date(pastDateTimestamp).valueOf(),
          weekdays = Math.floor(d / 1e3 / 60 / 60 / 24 / 7),
          days = Math.floor(d / 1e3 / 60 / 60 / 24 - 7 * weekdays),
          hours = Math.floor(d / 1e3 / 60 / 60 - 7 * weekdays * 24 - 24 * days),
          minutes = Math.floor(
            d / 1e3 / 60 - 7 * weekdays * 24 * 60 - 24 * days * 60 - 60 * hours
          ),
          seconds = Math.floor(
            d / 1e3 -
              7 * weekdays * 24 * 60 * 60 -
              24 * days * 60 * 60 -
              60 * hours * 60 -
              60 * minutes
          ),
          milliseconds = Math.floor(
            d -
              7 * weekdays * 24 * 60 * 60 * 1e3 -
              24 * days * 60 * 60 * 1e3 -
              60 * hours * 60 * 1e3 -
              60 * minutes * 1e3 -
              1e3 * seconds
          ),
          t = {};
        return (
          [
            "weekdays",
            "days",
            "hours",
            "minutes",
            "seconds",
            "milliseconds",
          ].forEach(function (q) {
            eval(q) > 0 && (t[q] = eval(q));
          }),
          t
        );
      }
      __webpack_require__.d(__webpack_exports__, {
        t: function () {
          return differenceBetweenDates;
        },
      });
    },
    44105: function (e, t, s) {
      "use strict";
      s.d(t, {
        i: function () {
          return n;
        },
      });
      var n = function (e) {
        return -1 === e.indexOf("https://") && -1 === e.indexOf("http://")
          ? e.indexOf("ipfs://") > -1
            ? "https://ipfs.io/ipfs/".concat(e.replace("ipfs://", ""))
            : -1 === e.indexOf("_next/static")
            ? "https://ipfs.io/ipfs/".concat(e)
            : e
          : e;
      };
    },
    22387: function (e) {
      e.exports = { tooltip: "AvatarCollection_tooltip__HK8lM" };
    },
    73602: function (e) {
      e.exports = { bubbleMessage: "BubbleMessage_bubbleMessage__MssRj" };
    },
    68532: function (e) {
      e.exports = { bubble: "CompromisedAssetIcon_bubble__tfeP6" };
    },
    66599: function (e) {
      e.exports = {
        mobileModal: "MobileModal_mobileModal__9TCKt",
        goUp: "MobileModal_goUp__MU_zd",
      };
    },
    21020: function (e) {
      e.exports = {
        selectBox: "SelectBox_selectBox__G2NRn",
        triangle: "SelectBox_triangle__63_lZ",
        initialLabel: "SelectBox_initialLabel__vLgPe",
        uninitialized: "SelectBox_uninitialized__4wDwz",
        options: "SelectBox_options__NwheD",
        opening: "SelectBox_opening__ycCay",
        option: "SelectBox_option__zhLaR",
        optionLabel: "SelectBox_optionLabel__UJrea",
      };
    },
    19028: function (e) {
      e.exports = {
        clickableBadge: "Badge_clickableBadge__FLagv",
        rotating: "Badge_rotating__BZ31M",
        rotate: "Badge_rotate__VZGaR",
      };
    },
    65643: function (e) {
      e.exports = { erc20Row: "ERC20ListItem_erc20Row__ioYL2" };
    },
    84165: function (e) {
      e.exports = {
        rotating: "ImageCollection_rotating__1yoTQ",
        rotate: "ImageCollection_rotate__uKYaf",
      };
    },
    55559: function (e) {
      e.exports = {
        insideBorder: "TimeCursor_insideBorder__sdpYE",
        fade: "TimeCursor_fade__QH9ne",
      };
    },
    77832: function (e) {
      e.exports = {
        actionModal: "ActionModal_actionModal__rLL29",
        goUp: "ActionModal_goUp__bu19u",
        overlay: "ActionModal_overlay__uWRIX",
        zoom: "ActionModal_zoom__qBUeK",
      };
    },
    83536: function (e) {
      e.exports = {
        cryptoBar: "CryptoInputBar_cryptoBar__b6Cg0",
        cryptoBarFocus: "CryptoInputBar_cryptoBarFocus__3eazR",
        full_width: "CryptoInputBar_full_width__JTjvL",
      };
    },
    83885: function (e) {
      e.exports = {
        erc1155AmountModal: "ERC1155AmountModal_erc1155AmountModal__uOZ_e",
        goUp: "ERC1155AmountModal_goUp__8_IIl",
        overlay: "ERC1155AmountModal_overlay__hVAt2",
        zoom: "ERC1155AmountModal_zoom__ys3EV",
      };
    },
    81538: function (e) {
      e.exports = {
        rotating: "NFTItem_rotating__6PHBK",
        rotate: "NFTItem_rotate___FbFN",
      };
    },
    33289: function (e) {
      e.exports = {
        reportModal: "ReportModal_reportModal__3IzAv",
        goUp: "ReportModal_goUp__iqhWg",
        overlay: "ReportModal_overlay__F5T6v",
        zoom: "ReportModal_zoom__LL0e8",
      };
    },
    18255: function (e) {
      e.exports = { selectableBadge: "SelectableBadge_selectableBadge__7PjPs" };
    },
    306: function (e) {
      e.exports = {
        approvingModal: "ApprovingModal_approvingModal__gcZyi",
        goUp: "ApprovingModal_goUp__e_33K",
        goUpButton: "ApprovingModal_goUpButton__b4Fqw",
        overlay: "ApprovingModal_overlay__w7Ge3",
        zoom: "ApprovingModal_zoom__x3dlv",
      };
    },
    57232: function (e) {
      e.exports = {
        keepVerDistance: "BadgeContainer_keepVerDistance__RW0Tz",
        keepHozDistance: "BadgeContainer_keepHozDistance__8PlPr",
      };
    },
    24491: function (e) {
      e.exports = {
        collectionRow: "CollectionRow_collectionRow__bJuZz",
        radio: "CollectionRow_radio__FvgyJ",
      };
    },
    76293: function (e) {
      e.exports = {
        cryptoTokenModal: "CryptoTokenModal_cryptoTokenModal__18BV7",
        goUp: "CryptoTokenModal_goUp__HW9PO",
        overlay: "CryptoTokenModal_overlay__EBuzr",
        zoom: "CryptoTokenModal_zoom__BSgZf",
      };
    },
    35017: function (e) {
      e.exports = {
        customCollectionModal:
          "CustomCollectionModal_customCollectionModal__mdwx_",
        goUp: "CustomCollectionModal_goUp__HaAeT",
        overlay: "CustomCollectionModal_overlay__cMIBg",
        zoom: "CustomCollectionModal_zoom___fvs_",
      };
    },
    28023: function (e) {
      e.exports = {
        paymentModal: "PaymentModal_paymentModal__XGzY3",
        goUp: "PaymentModal_goUp__NNrfU",
        rotating: "PaymentModal_rotating__BTaYA",
        rotate: "PaymentModal_rotate__ZtGvE",
        overlay: "PaymentModal_overlay__XgFnn",
        zoom: "PaymentModal_zoom__PRRfC",
      };
    },
    5995: function (e) {
      e.exports = {
        stepperMenu: "StepperMenu_stepperMenu__tNMDj",
        translate: "StepperMenu_translate__e_s81",
        rotating: "StepperMenu_rotating__FYV7e",
        rotate: "StepperMenu_rotate__LCKpj",
      };
    },
    1259: function (e) {
      e.exports = {
        stepperMenuList: "StepperMenuList_stepperMenuList__brjD2",
        goUp: "StepperMenuList_goUp__Flw4m",
        mainContent: "StepperMenuList_mainContent__Esq9f",
      };
    },
    40692: function (e) {
      e.exports = {
        unverifiedCollectionModal:
          "UnverifiedCollectionModal_unverifiedCollectionModal__0jw1d",
        goUp: "UnverifiedCollectionModal_goUp__R7j8I",
        goUpButton: "UnverifiedCollectionModal_goUpButton__TZnUk",
        overlay: "UnverifiedCollectionModal_overlay__RkTr_",
        zoom: "UnverifiedCollectionModal_zoom__ODnTJ",
      };
    },
    51322: function (e) {
      e.exports = {
        cart: "Cart_cart__cIMhf",
        slideTop: "Cart_slideTop__dCnQK",
        slideLeft: "Cart_slideLeft__INmgd",
      };
    },
    7637: function (e) {
      e.exports = {
        scrollbar: "Collections_scrollbar__Qpc8Y",
        rotating: "Collections_rotating__V7RpZ",
        rotate: "Collections_rotate__lSfOw",
      };
    },
    78505: function (e) {
      e.exports = {
        scrollbar: "ERC20Tokens_scrollbar__fv_IJ",
        rotating: "ERC20Tokens_rotating__7KqBj",
        rotate: "ERC20Tokens_rotate__HCDOR",
        overlay: "ERC20Tokens_overlay__HNZQS",
        erc20Tokens: "ERC20Tokens_erc20Tokens__VsVZ_",
        zoom: "ERC20Tokens_zoom__b6JS_",
      };
    },
    78561: function (e) {
      e.exports = {
        scrollbar: "Favourites_scrollbar__16Y8i",
        rotating: "Favourites_rotating__eMdHE",
        rotate: "Favourites_rotate__NqsLO",
      };
    },
    47606: function (e) {
      e.exports = {
        rotating: "PageFive_rotating__Ay2Lf",
        rotate: "PageFive_rotate__wfnLb",
      };
    },
    56355: function (e) {
      e.exports = {
        overlay: "TradeModal_overlay__swD2E",
        tradeModal: "TradeModal_tradeModal__W1lDh",
        zoom: "TradeModal_zoom__2ue_S",
        fullSection: "TradeModal_fullSection__NO59U",
        mainSection: "TradeModal_mainSection__FOzBg",
      };
    },
  },
]);
