(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [66],
  {
    64228: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/collection-swap-arrows.63e91421.svg",
        height: 23,
        width: 31,
      };
    },
    48377: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/smile_sad.bf2edabd.svg",
        height: 152,
        width: 152,
      };
    },
    82933: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/opensea.db900e48.svg",
        height: 24,
        width: 24,
      };
    },
    57417: function (e, t, s) {
      "use strict";
      var r = s(8014);
      s(56168);
      t.Z = function (e) {
        var t = e.mainText,
          s = void 0 === t ? "" : t,
          a = e.subText,
          n = void 0 === a ? "" : a,
          i = e.button;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("div", {
            className:
              "bg-primary-blue rounded-br-[88px] md:rounded-br-[264px]",
            children: (0, r.jsx)("div", {
              className: "m-auto max-w-[95%] px-[48px]",
              children: (0, r.jsxs)("div", {
                className:
                  "flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center",
                children: [
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)("p", {
                        className:
                          "text-3xl md:text-5xl pt-[80px] pb-[16px] text-primary-white font-semibold",
                        children: s,
                      }),
                      (0, r.jsx)("p", {
                        className:
                          "rubik text-base font-light text-primary-white pb-[40px] md:pb-[80px]",
                        children: n,
                      }),
                    ],
                  }),
                  i
                    ? (0, r.jsx)("div", {
                        className: "mb-[31px] md:mb-[0px]",
                        children: i,
                      })
                    : (0, r.jsx)(r.Fragment, {}),
                ],
              }),
            }),
          }),
        });
      };
    },
    4492: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return O;
        },
      });
      var r = s(8014),
        a = s(56168),
        n = s(42662);
      function i(e, t, s) {
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
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(s);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(s).filter(function (e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              i(e, t, s[t]);
            });
        }
        return e;
      }
      var l = function (e) {
          var t = e.src,
            s = e.size,
            a = e.className,
            n = e.style,
            i = void 0 === n ? {} : n;
          return (0, r.jsx)("div", {
            className: "".concat(
              null !== a && void 0 !== a ? a : "",
              " rounded-full"
            ),
            style: c(
              {},
              {
                width: "".concat(s, "px"),
                height: "".concat(s, "px"),
                backgroundImage: "url(".concat(t, ")"),
                backgroundPosition: "center",
                backgroundSize: "cover",
              },
              i
            ),
          });
        },
        o = s(64228);
      function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var s = 0, r = new Array(t); s < t; s++) r[s] = e[s];
        return r;
      }
      function d(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return m(e);
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
            if ("string" === typeof e) return m(e, t);
            var s = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === s && e.constructor && (s = e.constructor.name);
            if ("Map" === s || "Set" === s) return Array.from(s);
            if (
              "Arguments" === s ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
            )
              return m(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var u = function (e) {
          var t = e.left,
            s = e.right,
            n = e.itemsSize,
            i = (0, a.useRef)(!1),
            c = (0, a.useState)(n),
            m = c[0],
            u = c[1],
            x = t.length <= 3 ? d(t) : t.slice(0, 3),
            p = t.length > 3 ? t.slice(3) : [],
            f = s.length <= 3 ? d(s) : s.slice(0, 3),
            h = s.length > 3 ? s.slice(3) : [];
          return (
            (0, a.useEffect)(function () {
              return (
                (i.current = !0),
                u(window.innerWidth >= 768 ? n : (n / 100) * 70),
                window.addEventListener("resize", function () {
                  i.current && u(window.innerWidth >= 768 ? n : (n / 100) * 70);
                }),
                function () {
                  i.current = !1;
                }
              );
            }, []),
            (0, r.jsxs)("div", {
              className: "flex items-center justify-center gap-2 sm:gap-6",
              children: [
                (0, r.jsxs)("div", {
                  className: "flex items-center justify-center",
                  children: [
                    (0, r.jsx)("div", {
                      style: {
                        width: "".concat((m / 3) * (x.length + 2), "px"),
                      },
                      children: x.map(function (e, t) {
                        return (0,
                        r.jsx)("div", { className: "inline-block", style: { width: "".concat(m / 3, "px") }, children: (0, r.jsx)(l, { src: e.imageUrl, size: m }) }, t);
                      }),
                    }),
                    p.length
                      ? (0, r.jsxs)("div", {
                          className:
                            "flex flex-col items-center justify-center",
                          style: {
                            width: "".concat(m / 2, "px"),
                            height: "".concat(m / 2, "px"),
                          },
                          children: [
                            (0, r.jsx)("span", {
                              className:
                                "rubik text-xxs text-primary-dark-blue",
                              children: p.length,
                            }),
                            (0, r.jsxs)("span", {
                              className:
                                "rubik text-xxs text-primary-dark-blue",
                              children: ["NFT", p.length > 1 ? "s" : ""],
                            }),
                          ],
                        })
                      : null,
                  ],
                }),
                (0, r.jsx)("img", { src: o.Z.src }),
                (0, r.jsxs)("div", {
                  className: "flex items-center justify-center",
                  children: [
                    h.length
                      ? (0, r.jsxs)("div", {
                          className:
                            "flex flex-col items-center justify-center",
                          style: {
                            width: "".concat(m / 2, "px"),
                            height: "".concat(m / 2, "px"),
                          },
                          children: [
                            (0, r.jsx)("span", {
                              className:
                                "rubik text-xxs text-primary-dark-blue",
                              children: h.length,
                            }),
                            (0, r.jsxs)("span", {
                              className:
                                "rubik text-xxs text-primary-dark-blue",
                              children: ["NFT", h.length > 1 ? "s" : ""],
                            }),
                          ],
                        })
                      : null,
                    (0, r.jsx)("div", {
                      style: {
                        width: "".concat((m / 3) * (f.length + 2), "px"),
                      },
                      children: f.map(function (e, t) {
                        return (0,
                        r.jsx)("div", { className: "inline-block", style: { width: "".concat(m / 3, "px") }, children: (0, r.jsx)(l, { src: e.imageUrl, size: m }) }, t);
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        x = "/_next/static/media/dashed-line.108c130c.svg",
        p = s(82933),
        f = "/_next/static/media/external-link.138689a9.svg",
        h = s(72273),
        g = "/_next/static/media/loader.3511e1ca.svg",
        y = s(25900),
        b = s(93699),
        j = s(153),
        N = function (e) {
          var t = e.imgSrc,
            s = e.text,
            a = e.collection,
            n = e.amount,
            i = e.size,
            c = void 0 === i ? 40 : i,
            l = e.type;
          return (0, r.jsxs)("div", {
            className: "flex items-center justify-start gap-2 lg:gap-6",
            children: [
              (0, r.jsx)("img", {
                src: t || j.Z.src,
                className: "rounded-full",
                style: {
                  width: "".concat(c, "px"),
                  height: "".concat(c, "px"),
                },
              }),
              (0, r.jsxs)("div", {
                className:
                  "flex flex-col lg:flex-row items-start lg:items-center justify-center gap-0 lg:gap-2",
                children: [
                  (0, r.jsx)(b.Z, {
                    text: s || "",
                    className:
                      "w-[150px] h-[32px] text-lg md:text-2xl font-semibold text-primary-dark-blue",
                  }),
                  a
                    ? (0, r.jsxs)("div", {
                        className:
                          "flex-1 flex items-center justify-start gap-4",
                        children: [
                          "ERC1155" === l &&
                            (0, r.jsxs)("div", {
                              className:
                                "flex items-center justify-center rubik font-base bg-primary-dark-blue text-primary-white text-sm w-[30px] h-[30px] rounded-full",
                              children: ["x", n],
                            }),
                          "ERC721" === l || "ERC1155" === l
                            ? (0, r.jsx)(y.Z, {
                                src: a.imgSrc ? a.imgSrc : "",
                                statusVerification: a.statusVerification,
                                className:
                                  "w-[24px] sm:w-[32px] h-[24px] sm:h-[32px]",
                                badgeClassName:
                                  "w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]",
                                showCollectionTooltip: !0,
                                collection: {
                                  name: a.name ? a.name : "",
                                  imageUrl: a.imgSrc ? a.imgSrc : j.Z.src,
                                  statusVerification: a.statusVerification
                                    ? a.statusVerification
                                    : 0,
                                  address: "",
                                  networkId: 1,
                                  abi: [],
                                  type: l,
                                  symbol: "",
                                  createdAt: null,
                                },
                                canReport: !0,
                              })
                            : (0, r.jsx)(y.Z, {
                                src: a.imgSrc ? a.imgSrc : "",
                                statusVerification: a.statusVerification,
                                className:
                                  "w-[24px] sm:w-[32px] h-[24px] sm:h-[32px]",
                                badgeClassName:
                                  "w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]",
                              }),
                          (0, r.jsx)("span", {
                            className:
                              "text-xs md:text-base font-semibold text-primary-dark-blue",
                            children: a.name,
                          }),
                        ],
                      })
                    : (0, r.jsx)("div", {
                        className:
                          "flex-1 flex items-center justify-start gap-4",
                        children: (0, r.jsx)("span", {
                          className:
                            "text-sm md:text-base font-semibold text-primary-dark-blue",
                          children: null !== n && void 0 !== n ? n : "",
                        }),
                      }),
                ],
              }),
            ],
          });
        },
        v = s(10327),
        w = s(4632),
        k = s(97968),
        C = s(91936),
        S = s(55008),
        z = s.n(S),
        I = s(95479),
        A = function (e) {
          switch (e) {
            case 1:
              return "Etherscan";
            case 4:
              return "Rinkeby Etherscan";
            case 137:
              return "PolygonScan";
            case 80001:
              return "PolygonMumbaiScan";
            default:
              return "Etherscan";
          }
        },
        U = s(8138),
        Z = function (e, t) {
          switch (e) {
            case 1:
              return "https://etherscan.io/tx/".concat(t);
            case 4:
              return "https://rinkeby.etherscan.io/tx/".concat(t);
            case 137:
              return "https://polygonscan.com/tx/".concat(t);
            case 80001:
              return "https://mumbai.polygonscan.com/tx/".concat(t);
            default:
              return "https://etherscan.io/tx/".concat(t);
          }
        },
        E = s(62044);
      function T(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var s = 0, r = new Array(t); s < t; s++) r[s] = e[s];
        return r;
      }
      function L(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return T(e);
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
            if ("string" === typeof e) return T(e, t);
            var s = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === s && e.constructor && (s = e.constructor.name);
            if ("Map" === s || "Set" === s) return Array.from(s);
            if (
              "Arguments" === s ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
            )
              return T(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var O = function (e) {
        var t = e.maker,
          s = e.taker,
          i = e.timestamp,
          c = e.swapId,
          l = e.type,
          m = e.txHash,
          d = e.status,
          y = e.className,
          b = (0, E.Z)("common").t,
          j = (0, a.useRef)(!1),
          S = (0, a.useState)(!1),
          T = S[0],
          O = S[1],
          _ = (0, a.useState)(!1),
          R = _[0],
          V = _[1],
          F = (0, a.useState)(null),
          P = F[0],
          D = F[1],
          M = (0, k.C)(function (e) {
            return e;
          }).waccount.currentNetworkId,
          B = function (e) {
            return {
              amount: "".concat(
                "ERC1155" === e.type
                  ? "".concat(e.blc)
                  : "".concat(e.blcNative, " ").concat(e.symbol)
              ),
              imageUrl: e.collectionLogo,
              isCurrency: ["ERC20"].includes(e.type),
              statusVerification: e.statusVerification,
              name: e.name,
              type: e.type,
              tokenId: "#".concat(e.tokenId),
              tokenImageURL: e.imageUrl,
              collectionAddress: e.collectionAddress,
            };
          },
          H = function (e, t) {
            return M && t && e
              ? (function (e, t, s) {
                  var r = "";
                  switch (e) {
                    case I.HL.MAINNET:
                      r = "https://opensea.io/assets/ethereum/"
                        .concat(t, "/")
                        .concat(s);
                      break;
                    case I.HL.RINKEBY:
                      r = "https://testnets.opensea.io/assets/ethereum/"
                        .concat(t, "/")
                        .concat(s);
                      break;
                    case I.HL.POLYGON:
                      r = "https://opensea.io/assets/matic/"
                        .concat(t, "/")
                        .concat(s);
                      break;
                    case I.HL.POLYGON_MUMBAI:
                      r = "https://testnets.opensea.io/assets/matic/"
                        .concat(t, "/")
                        .concat(s);
                      break;
                    default:
                      r = "https://opensea.io/assets/ethereum/"
                        .concat(t, "/")
                        .concat(s);
                  }
                  return r;
                })(M, t, e)
              : "";
          };
        return (
          (0, a.useEffect)(
            function () {
              return (
                (j.current = !0),
                O(!!P),
                function () {
                  j.current = !1;
                }
              );
            },
            [P]
          ),
          (0, r.jsxs)("div", {
            className:
              "rounded-2xl rounded-tr-[0px] shadow-xl hover:shadow-2xl ".concat(
                y
              ),
            children: [
              (0, r.jsx)("div", {
                className: "bg-primary-yellow rounded-2xl rounded-tr-[0px]",
                children: (0, r.jsxs)("div", {
                  className: "flex flex-col justify-start gap-[40px] ".concat(
                    T
                      ? "rounded-b-0 cursor-default"
                      : "rounded-b-2xl cursor-pointer",
                    " rounded-tl-2xl rounded-tr-[40px] bg-primary-white p-6 md:p-[40px] md:pr-[48px] md:pb-[48px]"
                  ),
                  onClick: function () {
                    return (
                      !T &&
                      (j.current && V(!0),
                      void (
                        M &&
                        (0, v.bf)((0, w.f)("getSwapDetails", [M, c]))
                          .then(function (e) {
                            var r = e.data,
                              a = r[0].detail,
                              n = r[0].master[0];
                            j.current && V(!1);
                            var i = L(
                                a
                                  .filter(function (e) {
                                    return 1 === e.creator;
                                  })
                                  .map(function (e) {
                                    return B(e);
                                  })
                              ),
                              c = L(
                                a
                                  .filter(function (e) {
                                    return 0 === e.creator;
                                  })
                                  .map(function (e) {
                                    return B(e);
                                  })
                              );
                            Number(n.valueMaker) > 0 &&
                              i.push({
                                amount: ""
                                  .concat(C.dF(n.valueMaker), " ")
                                  .concat(n.symbol),
                                type: "NATIVE",
                                imageUrl: n.imageUrl,
                                isCurrency: !0,
                                name: n.name,
                              }),
                              Number(n.valueTaker) > 0 &&
                                c.push({
                                  amount: ""
                                    .concat(C.dF(n.valueTaker), " ")
                                    .concat(n.symbol),
                                  type: "NATIVE",
                                  imageUrl: n.imageUrl,
                                  isCurrency: !0,
                                  name: n.name,
                                });
                            var l = {
                              maker: {
                                collections: i,
                                address: t.address,
                                isNft: t.isNft,
                              },
                              taker: {
                                collections: c,
                                address: s.address,
                                isNft: s.isNft,
                              },
                            };
                            j.current && D(l);
                          })
                          .catch(function (e) {
                            console.error(e), j.current && V(!1);
                          })
                      ))
                    );
                  },
                  children: [
                    (0, r.jsxs)("div", {
                      className: "".concat(
                        T ? "flex" : "hidden",
                        " items-start md:items-center justify-between"
                      ),
                      children: [
                        (0, r.jsxs)("div", {
                          className:
                            "flex flex-col items-start justify-center gap-4 sm:flex-row sm:items-center",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "flex items-center justify-center gap-4",
                              children: [
                                (0, r.jsx)(n.Z, {
                                  address: t.address,
                                  src: t.imageUrl,
                                  isNFT: t.isNft,
                                  sizesClassNames:
                                    "w-[24px] h-[24px] sm:w-[40px] sm:h-[40px]",
                                  jazziconSize: {
                                    defaultSize: 24,
                                    breakpoints: [640],
                                    sizes: [40],
                                  },
                                }),
                                (0, r.jsx)("img", {
                                  src: o.Z.src,
                                  className:
                                    "w-[24px] h-[24px] sm:w-auto sm:h-auto",
                                }),
                                (0, r.jsx)(n.Z, {
                                  address: s.address,
                                  src: s.imageUrl,
                                  isNFT: s.isNft,
                                  sizesClassNames:
                                    "w-[24px] h-[24px] sm:w-[40px] sm:h-[40px]",
                                  jazziconSize: {
                                    defaultSize: 24,
                                    breakpoints: [640],
                                    sizes: [40],
                                  },
                                }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className:
                                "flex items-center justify-center gap-1",
                              children: [
                                M &&
                                  (0, r.jsx)(U.Z, {
                                    text: ""
                                      .concat(b("viewOnLabel"), " ")
                                      .concat(A(M)),
                                    url: Z(M, m),
                                    isBlue: !0,
                                    isTargetBlank: !0,
                                    weight: "font-regular",
                                    className: "text-sm",
                                  }),
                                (0, r.jsx)("img", { src: f }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsx)("img", {
                          src: h.Z.src,
                          className:
                            "w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] cursor-pointer",
                          onClick: function () {
                            j.current && D(null);
                          },
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "flex items-center justify-between",
                      children: [
                        (0, r.jsx)("div", {
                          className: "flex items-center justify-start gap-4",
                          children: (0, r.jsxs)("div", {
                            className:
                              "flex flex-col items-start justify-center sm:flex-row sm:items-center",
                            children: [
                              (0, r.jsxs)("div", {
                                className:
                                  "flex items-center justify-center mb-[16px] sm:mb-[0px] sm:mr-[16px]",
                                children: [
                                  (0, r.jsx)("span", {
                                    className:
                                      "text-sm font-semibold text-white bg-primary-blue py-1 px-4 rounded-full mr-[8px]",
                                    children:
                                      "DIRECT_DEAL" === l
                                        ? "Direct Deal"
                                        : "Public Deal",
                                  }),
                                  (0, r.jsx)("span", {
                                    className:
                                      "text-sm font-semibold py-1 px-4 rounded-full border-[1px] sm:ml-[8px] ".concat(
                                        1 === d
                                          ? "text-primary-blue border-primary-blue"
                                          : "text-primary-gray border-primary-gray"
                                      ),
                                    children: b(
                                      1 === d ? "closedLabel" : "canceledLabel"
                                    ),
                                  }),
                                ],
                              }),
                              (0, r.jsx)("span", {
                                className:
                                  "text-sm font-light text-primary-dark-blue rubik",
                                children: new Date(i)
                                  .toString()
                                  .replace(/:\d{2} .+$/, ""),
                              }),
                            ],
                          }),
                        }),
                        R &&
                          (0, r.jsx)("img", {
                            src: g,
                            className: "".concat(
                              z().rotating,
                              " w-[24px] h-[24px]"
                            ),
                          }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "".concat(
                        T ? "hidden" : "flex",
                        " flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-0"
                      ),
                      children: [
                        (0, r.jsxs)("div", {
                          className:
                            "flex flex-col lg:flex-row justify-center gap-[20px] xl:gap-[40px]",
                          children: [
                            (0, r.jsx)(n.Z, {
                              username: t.username,
                              address: t.address,
                              isNFT: t.isNft,
                              displayInfo: !0,
                              displayInfoClassName:
                                "text-base font-semibold text-primary-dark-blue sm:text-lg",
                              addressInfoClassName:
                                "rubik text-sm font-regular text-primary-gray",
                              src: t.imageUrl,
                              sizesClassNames:
                                "w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]",
                              jazziconSize: {
                                defaultSize: 32,
                                breakpoints: [640],
                                sizes: [40],
                              },
                            }),
                            (0, r.jsx)("img", {
                              src: x,
                              className: "hidden lg:block",
                            }),
                            (0, r.jsx)(n.Z, {
                              username: s.username,
                              address: s.address,
                              isNFT: s.isNft,
                              displayInfo: !0,
                              displayInfoClassName:
                                "text-base font-semibold text-primary-dark-blue sm:text-lg",
                              addressInfoClassName:
                                "rubik text-sm font-regular text-primary-gray",
                              src: s.imageUrl,
                              sizesClassNames:
                                "w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]",
                              jazziconSize: {
                                defaultSize: 32,
                                breakpoints: [640],
                                sizes: [40],
                              },
                            }),
                          ],
                        }),
                        (0, r.jsx)(u, {
                          left: t.collections.map(function (e) {
                            return { imageUrl: e.assetLogo };
                          }),
                          right: s.collections.map(function (e) {
                            return { imageUrl: e.assetLogo };
                          }),
                          itemsSize: 80,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, r.jsxs)("div", {
                className: "".concat(
                  T ? "flex" : "hidden",
                  " flex-col justify-start gap-8 px-6 md:px-[40px] md:pr-[48px] md:pb-[48px] pb-8 bg-primary-white rounded-b-2xl"
                ),
                children: [
                  (0, r.jsx)("hr", {
                    className:
                      "w-full h-[1px] bg-primary-gray opacity-40 border-0",
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-0",
                    children: [
                      (0, r.jsx)("p", {
                        className:
                          "text-lg font-semibold text-primary-dark-blue m-0",
                        children: b("initiatorLabel"),
                      }),
                      (0, r.jsx)(n.Z, {
                        username: t.username,
                        address: t.address,
                        displayInfo: !0,
                        isNFT: t.isNft,
                        displayInfoClassName:
                          "text-base font-semibold text-primary-dark-blue text-right sm:text-lg",
                        addressInfoClassName:
                          "rubik text-sm font-regular text-primary-gray",
                        src: t.imageUrl,
                        sizesClassNames:
                          "w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]",
                        isReversed: !0,
                        jazziconSize: {
                          defaultSize: 32,
                          breakpoints: [640],
                          sizes: [40],
                        },
                      }),
                    ],
                  }),
                  (0, r.jsx)("ul", {
                    className: "flex flex-col justify-start gap-7",
                    children: P
                      ? P.maker.collections.map(function (e, t) {
                          var s, a;
                          return (0,
                          r.jsxs)("li", { className: "flex items-center justify-between", children: [(0, r.jsx)(N, { imgSrc: e.isCurrency ? e.imageUrl : e.tokenImageURL, text: e.isCurrency ? e.name : e.tokenId, collection: e.isCurrency ? void 0 : { name: e.name, imgSrc: e.imageUrl, statusVerification: e.statusVerification }, amount: e.isCurrency || "ERC1155" === e.type ? e.amount : void 0, type: e.type }), e.isCurrency ? null : (0, r.jsxs)("div", { className: "flex items-center justify-start", children: [(0, r.jsx)(U.Z, { text: b("viewOnOpenSeaLabel"), url: H(null === (s = e.tokenId) || void 0 === s ? void 0 : s.replace("#", ""), e.collectionAddress), isCustom: !0, isTargetBlank: !0, customColor: "#03045e", weight: "font-regular", className: "text-sm" }), (0, r.jsx)("a", { className: "text-sm font-regular text-primary-dark-blue hover:underline", target: "_blank", href: H(null === (a = e.tokenId) || void 0 === a ? void 0 : a.replace("#", ""), e.collectionAddress), children: (0, r.jsx)("img", { src: p.Z.src, className: "inline-block ml-0 md:ml-4" }) })] })] }, t);
                        })
                      : null,
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                      (0, r.jsx)("hr", {
                        className:
                          "w-full h-[1px] bg-primary-gray opacity-40 border-0",
                      }),
                      (0, r.jsx)("img", {
                        src: o.Z.src,
                        className: "rotate-90",
                      }),
                      (0, r.jsx)("hr", {
                        className:
                          "w-full h-[1px] bg-primary-gray opacity-40 border-0",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-0",
                    children: [
                      (0, r.jsx)("p", {
                        className:
                          "text-lg font-semibold text-primary-dark-blue m-0",
                        children: b("counterpartyAssetsLabel"),
                      }),
                      (0, r.jsx)(n.Z, {
                        username: s.username,
                        address: s.address,
                        displayInfo: !0,
                        isNFT: s.isNft,
                        displayInfoClassName:
                          "text-base font-semibold text-primary-dark-blue text-right sm:text-lg",
                        addressInfoClassName:
                          "rubik text-sm font-regular text-primary-gray",
                        src: s.imageUrl,
                        sizesClassNames:
                          "w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]",
                        isReversed: !0,
                        jazziconSize: {
                          defaultSize: 32,
                          breakpoints: [640],
                          sizes: [40],
                        },
                      }),
                    ],
                  }),
                  (0, r.jsx)("ul", {
                    className: "flex flex-col justify-start gap-7",
                    children: P
                      ? P.taker.collections.map(function (e, t) {
                          var s, a;
                          return (0,
                          r.jsxs)("li", { className: "flex items-center justify-between", children: [(0, r.jsx)(N, { imgSrc: e.isCurrency ? e.imageUrl : e.tokenImageURL, text: e.isCurrency ? e.name : e.tokenId, collection: e.isCurrency ? void 0 : { name: e.name, imgSrc: e.imageUrl, statusVerification: e.statusVerification }, amount: e.isCurrency || "ERC1155" === e.type ? e.amount : void 0, type: e.type }), e.isCurrency ? null : (0, r.jsxs)("div", { className: "flex items-center justify-start", children: [(0, r.jsx)(U.Z, { text: b("viewOnOpenSeaLabel"), url: H(null === (s = e.tokenId) || void 0 === s ? void 0 : s.replace("#", ""), e.collectionAddress), isCustom: !0, customColor: "#03045e", weight: "font-regular", className: "text-sm", isTargetBlank: !0 }), (0, r.jsx)("a", { className: "text-sm font-regular text-primary-dark-blue hover:underline", target: "_blank", href: H(null === (a = e.tokenId) || void 0 === a ? void 0 : a.replace("#", ""), e.collectionAddress), children: (0, r.jsx)("img", { src: p.Z.src, className: "inline-block ml-0 md:ml-4" }) })] })] }, t);
                        })
                      : null,
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    55008: function (e) {
      e.exports = {
        rotating: "TradeRow_rotating__FEQlp",
        rotate: "TradeRow_rotate__BmJAX",
      };
    },
  },
]);
