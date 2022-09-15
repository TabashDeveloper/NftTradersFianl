(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [506],
  {
    22424: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/mytrades",
        function () {
          return r(58101);
        },
      ]);
    },
    58101: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSG: function () {
            return ue;
          },
          default: function () {
            return de;
          },
        });
      var a = r(8014),
        s = r(56168),
        n = r(62305),
        c = r(57417),
        l = r(79838),
        i = r(36180),
        o = r(4492),
        u = r(10327),
        d = r(4632),
        m = r(97968),
        p = r(27171),
        x = r(48377),
        f = r(3621),
        h = r(44453),
        b = r.n(h),
        g = "/_next/static/media/loader_state_success.a7f41697.svg",
        w = r(63097),
        y = r.n(w),
        v = function (e) {
          var t = e.text,
            r = e.secondaryText,
            n = e.intervalTimeMs,
            c = e.loader,
            l = void 0 !== c && c,
            i = e.isExpired,
            o = void 0 !== i && i,
            u = (0, s.useState)(!1),
            d = u[0],
            m = u[1];
          return (
            (0, s.useEffect)(
              function () {
                var e = setInterval(function () {
                  m(!d);
                }, n);
                return function () {
                  clearInterval(e);
                };
              },
              [d]
            ),
            (0, a.jsxs)("div", {
              className: "flex items-center "
                .concat(
                  o
                    ? "justify-center"
                    : l
                    ? "justify-between"
                    : "justify-center",
                  " px-[16px] py-[4px] border-[1px] "
                )
                .concat(
                  o ? "border-primary-gray" : "border-state-success",
                  " border-solid rounded-[36px]"
                ),
              children: [
                d &&
                  (0, a.jsx)("span", {
                    className: "text-sm font-semibold ".concat(
                      o ? "text-primary-gray" : "text-state-success"
                    ),
                    children: t,
                  }),
                !d &&
                  (0, a.jsx)("span", {
                    className: "text-sm font-semibold ".concat(
                      o ? "text-primary-gray" : "text-state-success"
                    ),
                    children: r,
                  }),
                l &&
                  (0, a.jsx)("img", {
                    src: g,
                    className: "".concat(
                      y().rotating,
                      " w-[12px] h-[12px] ml-[8px]"
                    ),
                  }),
              ],
            })
          );
        },
        k = "/_next/static/media/eye_white.cfde6143.svg",
        j = "/_next/static/media/vertical_dots_white.06151f7e.svg",
        N = r(42662),
        L = r(64978),
        C = r(25900),
        S = r(64228),
        T = r(24730),
        E = r.n(T),
        _ = r(13713),
        I = r(36226),
        A = r(5996),
        R = r(91936),
        z = r(24789),
        Z = r(47777),
        M = r(53957),
        U = r(63780),
        D = r.n(U),
        V = r(95479),
        F = r(73468),
        P = r(8138),
        O = r(62044);
      function H(e, t, r, a, s, n, c) {
        try {
          var l = e[n](c),
            i = l.value;
        } catch (o) {
          return void r(o);
        }
        l.done ? t(i) : Promise.resolve(i).then(a, s);
      }
      function B(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (a, s) {
            var n = e.apply(t, r);
            function c(e) {
              H(n, a, s, c, l, "next", e);
            }
            function l(e) {
              H(n, a, s, c, l, "throw", e);
            }
            c(void 0);
          });
        };
      }
      var W = function (e) {
          var t = e.trade,
            r = e.currentAccount,
            n = e.minElementsPlaceholder,
            c = void 0 === n ? 3 : n,
            l = (0, O.Z)("common").t,
            i = (0, s.useState)(
              t.addressMaker.toLowerCase() === r.toLowerCase()
            )[0],
            o = (0, s.useState)(!1),
            x = o[0],
            h = o[1],
            g = (0, s.useState)(!1),
            w = g[0],
            y = g[1],
            T = (0, s.useState)(),
            U = T[0],
            H = T[1],
            W = (0, m.T)(),
            $ = (0, m.C)(function (e) {
              return e;
            }).waccount,
            q = $.isConnected,
            K = $.currentNetworkId,
            X = (0, z.Ge)().library,
            G = function (e) {
              var t = e.weekdays,
                r = e.days,
                a = e.hours,
                s = e.minutes;
              return ""
                .concat(t > 0 ? "".concat(t, "w ") : "")
                .concat(r > 0 ? "".concat(r, "d ") : "")
                .concat(a > 0 ? "".concat(a, "h ") : "")
                .concat(s > 0 ? "".concat(s, "m ") : "", " left");
            },
            Y = function (e, r) {
              q && K
                ? (W((0, p.eV)("taker")),
                  (0, u.bf)((0, d.f)("getSwapDetails", [K, e.swapId]))
                    .then(
                      (function () {
                        var a = B(
                          b().mark(function a(s) {
                            var n, c, l, i;
                            return b().wrap(function (a) {
                              for (;;)
                                switch ((a.prev = a.next)) {
                                  case 0:
                                    return (
                                      (n = s.data),
                                      (c = n[0]),
                                      (l = c.master),
                                      (i = c.detail),
                                      W((0, p.vg)(Number(e.swapId))),
                                      (a.next = 5),
                                      J(t, i, l[0])
                                    );
                                  case 5:
                                    return (a.next = 7), Q(t, i, l[0]);
                                  case 7:
                                    W((0, p.dC)(t.swapStart)),
                                      W((0, p.J7)(t.swapEnd)),
                                      W((0, p.M7)(ee(t))),
                                      W((0, p.D0)()),
                                      W((0, p.r$)(!0)),
                                      document.body.classList.add("no-scroll"),
                                      r && r("default");
                                  case 14:
                                  case "end":
                                    return a.stop();
                                }
                            }, a);
                          })
                        );
                        return function (e) {
                          return a.apply(this, arguments);
                        };
                      })()
                    )
                    .catch(function (e) {
                      console.error(e), r && r("default");
                    }))
                : (W((0, _.$e)(!0)), r && r("default"));
            },
            J = (function () {
              var e = B(
                b().mark(function e(t, r, a) {
                  var s, n, c, l, i, o, u, d, m, x;
                  return b().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (s = []),
                              (n = !0),
                              (c = !1),
                              (l = void 0),
                              (e.prev = 2),
                              (i = t.collections
                                .filter(function (e) {
                                  return 1 === e.creator;
                                })
                                [Symbol.iterator]());
                          case 4:
                            if ((n = (o = i.next()).done)) {
                              e.next = 27;
                              break;
                            }
                            if (
                              "ERC1155" !== (u = o.value).type &&
                              "ERC721" !== u.type
                            ) {
                              e.next = 10;
                              break;
                            }
                            [],
                              ("ERC1155" === u.type
                                ? r.filter(function (e) {
                                    var t;
                                    return (
                                      "ERC1155" === e.type &&
                                      (null === (t = e.collectionAddress) ||
                                      void 0 === t
                                        ? void 0
                                        : t.toLowerCase()) ===
                                        u.collectionAddress.toLowerCase() &&
                                      1 === e.creator
                                    );
                                  })
                                : r.filter(function (e) {
                                    var t;
                                    return (
                                      "ERC721" === e.type &&
                                      (null === (t = e.collectionAddress) ||
                                      void 0 === t
                                        ? void 0
                                        : t.toLowerCase()) ===
                                        u.collectionAddress.toLowerCase() &&
                                      1 === e.creator
                                    );
                                  })
                              ).forEach(function (e) {
                                s.push({
                                  id: e.tokenId,
                                  amount: "ERC1155" === e.type ? e.blc : null,
                                  amountHumanReadable:
                                    "ERC1155" === e.type ? e.blc : null,
                                  type: e.type,
                                  owner: t.addressMaker,
                                  collection: {
                                    name: u.name,
                                    statusVerification: u.statusVerification,
                                    address: u.collectionAddress.toLowerCase(),
                                    imageUrl: u.assetLogo ? u.assetLogo : "",
                                    abi: u.abi,
                                    networkId: u.evmNetworkId,
                                    type: u.type,
                                    symbol: u.symbol ? u.symbol : "",
                                    createdAt: null,
                                  },
                                  imageSrc: e.imageUrl,
                                  isApproved: !1,
                                  hasPlaceholder: !1,
                                });
                              }),
                              (e.next = 24);
                            break;
                          case 10:
                            if ("ERC20" !== u.type) {
                              e.next = 24;
                              break;
                            }
                            if (
                              !(d = r.find(function (e) {
                                var t;
                                return (
                                  (null === (t = e.collectionAddress) ||
                                  void 0 === t
                                    ? void 0
                                    : t.toLowerCase()) ===
                                    u.collectionAddress.toLowerCase() &&
                                  "ERC20" === e.type &&
                                  1 === e.creator
                                );
                              })) ||
                              !d.collectionAddress
                            ) {
                              e.next = 24;
                              break;
                            }
                            return (
                              (m = new A.CH(d.collectionAddress, u.abi, X)),
                              (e.prev = 14),
                              (e.next = 17),
                              m.decimals()
                            );
                          case 17:
                            (x = e.sent),
                              s.push({
                                id: null,
                                amount: d.blc ? d.blc : null,
                                amountHumanReadable: R.bM(d.blc, x),
                                type: d.type,
                                owner: t.addressMaker,
                                collection: {
                                  name: u.name,
                                  statusVerification: u.statusVerification,
                                  address: u.collectionAddress.toLowerCase(),
                                  imageUrl: u.assetLogo ? u.assetLogo : "",
                                  abi: u.abi,
                                  networkId: u.evmNetworkId,
                                  type: u.type,
                                  symbol: u.symbol ? u.symbol : "",
                                  createdAt: null,
                                },
                                imageSrc: d.imgURL,
                                isApproved: !1,
                                hasPlaceholder: !1,
                              }),
                              (e.next = 24);
                            break;
                          case 21:
                            (e.prev = 21),
                              (e.t0 = e.catch(14)),
                              console.log(e.t0);
                          case 24:
                            (n = !0), (e.next = 4);
                            break;
                          case 27:
                            e.next = 33;
                            break;
                          case 29:
                            (e.prev = 29),
                              (e.t1 = e.catch(2)),
                              (c = !0),
                              (l = e.t1);
                          case 33:
                            (e.prev = 33),
                              (e.prev = 34),
                              n || null == i.return || i.return();
                          case 36:
                            if (((e.prev = 36), !c)) {
                              e.next = 39;
                              break;
                            }
                            throw l;
                          case 39:
                            return e.finish(36);
                          case 40:
                            return e.finish(33);
                          case 41:
                            "0" !== a.valueMaker &&
                              s.push({
                                id: null,
                                amount: a.valueMaker,
                                amountHumanReadable: R.bM(
                                  a.valueMaker,
                                  (0, Z.z)("ETHEREUM_DECIMALS_NUMBER")
                                ),
                                type: "NATIVE",
                                owner: t.addressMaker,
                                collection: {
                                  name: a.name,
                                  statusVerification: 1,
                                  address: "",
                                  imageUrl: a.imageUrl,
                                  abi: [],
                                  networkId: t.evmNetworkId,
                                  type: "NATIVE",
                                  symbol: a.symbol,
                                  createdAt: null,
                                },
                                imageSrc: a.imageUrl,
                                isApproved: !1,
                                hasPlaceholder: !1,
                              }),
                              s.forEach(function (e) {
                                W((0, p.TG)(e));
                              });
                          case 43:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [
                      [2, 29, 33, 41],
                      [14, 21],
                      [34, , 36, 40],
                    ]
                  );
                })
              );
              return function (t, r, a) {
                return e.apply(this, arguments);
              };
            })(),
            Q = (function () {
              var e = B(
                b().mark(function e(t, r, a) {
                  var s, n, c, l, i, o, u, d, m, x;
                  return b().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (s = []),
                              (n = !0),
                              (c = !1),
                              (l = void 0),
                              (e.prev = 2),
                              (i = t.collections
                                .filter(function (e) {
                                  return 0 === e.creator;
                                })
                                [Symbol.iterator]());
                          case 4:
                            if ((n = (o = i.next()).done)) {
                              e.next = 27;
                              break;
                            }
                            if (
                              "ERC1155" !== (u = o.value).type &&
                              "ERC721" !== u.type
                            ) {
                              e.next = 10;
                              break;
                            }
                            [],
                              ("ERC1155" === u.type
                                ? r.filter(function (e) {
                                    var t;
                                    return (
                                      "ERC1155" === e.type &&
                                      (null === (t = e.collectionAddress) ||
                                      void 0 === t
                                        ? void 0
                                        : t.toLowerCase()) ===
                                        u.collectionAddress.toLowerCase() &&
                                      0 === e.creator
                                    );
                                  })
                                : r.filter(function (e) {
                                    var t;
                                    return (
                                      "ERC721" === e.type &&
                                      (null === (t = e.collectionAddress) ||
                                      void 0 === t
                                        ? void 0
                                        : t.toLowerCase()) ===
                                        u.collectionAddress.toLowerCase() &&
                                      0 === e.creator
                                    );
                                  })
                              ).forEach(function (e) {
                                s.push({
                                  id: e.tokenId,
                                  amount: "ERC1155" === e.type ? e.blc : null,
                                  amountHumanReadable:
                                    "ERC1155" === e.type ? e.blc : null,
                                  type: e.type,
                                  owner: t.addressMaker,
                                  collection: {
                                    name: u.name,
                                    statusVerification: u.statusVerification,
                                    address: u.collectionAddress.toLowerCase(),
                                    imageUrl: u.assetLogo ? u.assetLogo : "",
                                    abi: u.abi,
                                    networkId: u.evmNetworkId,
                                    type: u.type,
                                    symbol: u.symbol ? u.symbol : "",
                                    createdAt: null,
                                  },
                                  imageSrc: e.imageUrl,
                                  isApproved: !1,
                                  hasPlaceholder: !1,
                                });
                              }),
                              (e.next = 24);
                            break;
                          case 10:
                            if ("ERC20" !== u.type) {
                              e.next = 24;
                              break;
                            }
                            if (
                              !(d = r.find(function (e) {
                                var t;
                                return (
                                  (null === (t = e.collectionAddress) ||
                                  void 0 === t
                                    ? void 0
                                    : t.toLowerCase()) ===
                                    u.collectionAddress.toLowerCase() &&
                                  "ERC20" === e.type &&
                                  0 === e.creator
                                );
                              })) ||
                              !d.collectionAddress
                            ) {
                              e.next = 24;
                              break;
                            }
                            return (
                              (m = new A.CH(d.collectionAddress, u.abi, X)),
                              (e.prev = 14),
                              (e.next = 17),
                              m.decimals()
                            );
                          case 17:
                            (x = e.sent),
                              s.push({
                                id: null,
                                amount: d.blc ? d.blc : null,
                                amountHumanReadable: R.bM(d.blc, x),
                                type: d.type,
                                owner: t.addressTaker,
                                collection: {
                                  name: u.name,
                                  statusVerification: u.statusVerification,
                                  address: u.collectionAddress.toLowerCase(),
                                  imageUrl: u.assetLogo ? u.assetLogo : "",
                                  abi: u.abi,
                                  networkId: u.evmNetworkId,
                                  type: u.type,
                                  symbol: u.symbol ? u.symbol : "",
                                  createdAt: null,
                                },
                                imageSrc: d.imgURL,
                                isApproved: !1,
                                hasPlaceholder: !1,
                              }),
                              (e.next = 24);
                            break;
                          case 21:
                            (e.prev = 21),
                              (e.t0 = e.catch(14)),
                              console.log(e.t0);
                          case 24:
                            (n = !0), (e.next = 4);
                            break;
                          case 27:
                            e.next = 33;
                            break;
                          case 29:
                            (e.prev = 29),
                              (e.t1 = e.catch(2)),
                              (c = !0),
                              (l = e.t1);
                          case 33:
                            (e.prev = 33),
                              (e.prev = 34),
                              n || null == i.return || i.return();
                          case 36:
                            if (((e.prev = 36), !c)) {
                              e.next = 39;
                              break;
                            }
                            throw l;
                          case 39:
                            return e.finish(36);
                          case 40:
                            return e.finish(33);
                          case 41:
                            "0" !== a.valueTaker &&
                              s.push({
                                id: null,
                                amount: a.valueTaker,
                                amountHumanReadable: R.bM(
                                  a.valueTaker,
                                  (0, Z.z)("ETHEREUM_DECIMALS_NUMBER")
                                ),
                                type: "NATIVE",
                                owner: t.addressTaker,
                                collection: {
                                  name: a.name,
                                  statusVerification: 1,
                                  address: "",
                                  imageUrl: a.imageUrl,
                                  abi: [],
                                  networkId: t.evmNetworkId,
                                  type: "NATIVE",
                                  symbol: a.symbol,
                                  createdAt: null,
                                },
                                imageSrc: a.imageUrl,
                                isApproved: !1,
                                hasPlaceholder: !1,
                              }),
                              s.forEach(function (e) {
                                W((0, p.c6)(e));
                              });
                          case 43:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [
                      [2, 29, 33, 41],
                      [14, 21],
                      [34, , 36, 40],
                    ]
                  );
                })
              );
              return function (t, r, a) {
                return e.apply(this, arguments);
              };
            })(),
            ee = function (e) {
              return {
                evmNetworkId: e.evmNetworkId,
                username: e.maker[0].username,
                address: e.addressMaker,
                imageUrl: e.maker[0].imageUrl,
                isVerified: e.maker[0].isVerified,
                isNft: e.maker[0].isNft,
              };
            },
            te = function (e) {
              return {
                evmNetworkId: e.evmNetworkId,
                username: e.taker[0].username,
                address: e.addressTaker,
                imageUrl: e.taker[0].imageUrl,
                isVerified: e.taker[0].isVerified,
                isNft: e.taker[0].isNft,
              };
            };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("section", {
                className:
                  "flex flex-col items-start mt-[24px] md:mt-[32px] lg:flex-row-reverse",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "flex justify-between items-center w-full lg:mt-[auto] lg:ml-[16px] relative",
                    children: [
                      i
                        ? (0, a.jsx)(a.Fragment, {
                            children:
                              Date.parse(new Date().toString()) <
                              Date.parse(t.swapEnd.toString())
                                ? (0, a.jsx)(v, {
                                    text: l("Waiting on Counterpart"),
                                    secondaryText: G(
                                      (0, L.t)(
                                        new Date().toString(),
                                        t.swapEnd.toString()
                                      )
                                    ),
                                    intervalTimeMs: 3e3,
                                    loader: !0,
                                  })
                                : (0, a.jsx)(v, {
                                    text: l("expiredLabel"),
                                    secondaryText: l("expiredLabel"),
                                    intervalTimeMs: 3e3,
                                    loader: !1,
                                    isExpired: !0,
                                  }),
                          })
                        : (0, a.jsx)(a.Fragment, {
                            children:
                              Date.parse(new Date().toString()) <
                              Date.parse(t.swapEnd.toString())
                                ? (0, a.jsx)(v, {
                                    text: l("newRequestLabel"),
                                    secondaryText: G(
                                      (0, L.t)(
                                        new Date().toString(),
                                        t.swapEnd.toString()
                                      )
                                    ),
                                    intervalTimeMs: 3e3,
                                    loader: !1,
                                  })
                                : (0, a.jsx)(v, {
                                    text: l("expiredLabel"),
                                    secondaryText: l("expiredLabel"),
                                    intervalTimeMs: 3e3,
                                    loader: !1,
                                    isExpired: !0,
                                  }),
                          }),
                      (0, a.jsxs)("div", {
                        className:
                          "rounded-full bg-primary-blue flex items-center w-[36px] h-[36px] justify-center cursor-pointer hover:bg-primary-dark-blue select-none ".concat(
                            !i && "md:hidden"
                          ),
                        onClick: function () {
                          i ? h(!x) : Y(t, null);
                        },
                        children: [
                          !i &&
                            (0, a.jsx)("img", {
                              src: k,
                              className: "w-[16px] h-[16px]",
                            }),
                          i &&
                            (0, a.jsx)("img", {
                              src: j,
                              className: "w-[16px] h-[16px]",
                            }),
                        ],
                      }),
                      (0, a.jsx)(f.Z, {
                        text: l("checkDealLabel"),
                        type: { class: "primary", hasColoredBg: !1, icon: !0 },
                        initialState: { state: "default" },
                        size: "small",
                        iconSrc: k,
                        className: "hidden ".concat(!i && "md:flex"),
                        onClick: function (e) {
                          e("loading"), Y(t, e);
                        },
                      }),
                      x &&
                        (0, a.jsxs)("div", {
                          className:
                            "flex flex-col items-center justify-center w-[215px] h-[88px] absolute top-[40px] right-0 bg-primary-white z-[999] rounded-[8px] shadow shadow-md",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "flex items-center justify-center w-full h-[76px] text-sm font-semibold text-primary-blue cursor-pointer rounded-t-[8px] hover:bg-[#f0f0f0]",
                              onClick: function () {
                                var e;
                                (e = t),
                                  W((0, p.Ky)("EDIT_TAKER")),
                                  W((0, p.vg)(Number(e.swapId))),
                                  W((0, p.r$)(!0)),
                                  W(
                                    (0, p.dL)({
                                      collector: {
                                        evmNetworkId: e.evmNetworkId,
                                        username:
                                          e.taker.length > 0
                                            ? e.taker[0].username
                                            : "",
                                        address: e.addressTaker,
                                        imageUrl:
                                          e.taker.length > 0
                                            ? e.taker[0].imageUrl
                                            : "",
                                        isVerified:
                                          e.taker.length > 0
                                            ? e.taker[0].isVerified
                                            : 0,
                                        isNft:
                                          e.taker.length > 0
                                            ? e.taker[0].isNft
                                            : 0,
                                        isRegistered:
                                          e.taker.length > 0 ? 1 : 0,
                                        isFavourite:
                                          e.taker.length > 0
                                            ? e.taker[0].isFavourite
                                            : 0,
                                      },
                                      assets: [],
                                    })
                                  ),
                                  h(!x);
                              },
                              children: (0, a.jsx)("span", {
                                children: l("changeCounterpartyTraderLabel"),
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "flex items-center justify-center w-full h-[76px] text-sm font-semibold text-primary-blue cursor-pointer rounded-b-[8px] hover:bg-[#f0f0f0]",
                              onClick: function () {
                                H(Number(t.swapId)), y(!0), h(!x);
                              },
                              children: (0, a.jsx)("span", {
                                children: l("cancelDealLabel"),
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "flex items-center justify-center w-full h-[76px] text-sm font-semibold text-primary-blue cursor-pointer rounded-b-[8px] hover:bg-[#f0f0f0]",
                              onClick: function () {
                                var e;
                                h(!x),
                                  (e = t),
                                  q && K
                                    ? (W((0, p.eV)("maker")),
                                      W((0, p.Ky)("VIEW_MAKER")),
                                      (0, u.bf)(
                                        (0, d.f)("getSwapDetails", [
                                          K,
                                          e.swapId,
                                        ])
                                      )
                                        .then(
                                          (function () {
                                            var r = B(
                                              b().mark(function r(a) {
                                                var s, n, c, l;
                                                return b().wrap(function (r) {
                                                  for (;;)
                                                    switch ((r.prev = r.next)) {
                                                      case 0:
                                                        return (
                                                          (s = a.data),
                                                          (n = s[0]),
                                                          (c = n.master),
                                                          (l = n.detail),
                                                          W(
                                                            (0, p.vg)(
                                                              Number(e.swapId)
                                                            )
                                                          ),
                                                          (r.next = 5),
                                                          J(t, l, c[0])
                                                        );
                                                      case 5:
                                                        return (
                                                          (r.next = 7),
                                                          Q(t, l, c[0])
                                                        );
                                                      case 7:
                                                        W(
                                                          (0, p.dC)(t.swapStart)
                                                        ),
                                                          W(
                                                            (0, p.J7)(t.swapEnd)
                                                          ),
                                                          W((0, p.M7)(ee(t))),
                                                          W((0, p.Bu)(te(t))),
                                                          W((0, p.r$)(!0)),
                                                          document.body.classList.add(
                                                            "no-scroll"
                                                          );
                                                      case 13:
                                                      case "end":
                                                        return r.stop();
                                                    }
                                                }, r);
                                              })
                                            );
                                            return function (e) {
                                              return r.apply(this, arguments);
                                            };
                                          })()
                                        )
                                        .catch(function (e) {
                                          console.error(e);
                                        }))
                                    : W((0, _.$e)(!0));
                              },
                              children: (0, a.jsx)("span", {
                                children: l("checkDigitalLabel"),
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "mt-[20px] flex justify-start items-center lg:mt-[0px] lg:h-[40px] lg:min-w-[210px]",
                    children: [
                      !i &&
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsxs)("span", {
                              className:
                                "rubik text-sm font-light text-primary-dark-blue",
                              children: [l("fromLabel"), ":"],
                            }),
                            (0, a.jsx)(N.Z, {
                              address: t.addressMaker,
                              src:
                                t.maker.length > 0 ? t.maker[0].imageUrl : "",
                              isNFT: t.maker.length > 0 ? t.maker[0].isNft : 0,
                              className: "w-[24px] h-[24px] ml-[8px] mr-[8px]",
                              sizesClassNames: "w-[24px] h-[24px]",
                              jazziconSize: {
                                defaultSize: 24,
                                breakpoints: [],
                                sizes: [],
                              },
                            }),
                            t.maker.length > 0 && t.maker[0].username
                              ? (0, a.jsx)("span", {
                                  className:
                                    "text-primary-dark-blue text-sm font-semibold",
                                  children: (0, a.jsx)(P.Z, {
                                    url: (0, F.x)(K, t.addressMaker),
                                    isTargetBlank: !0,
                                    isCustom: !0,
                                    customColor: "#03045e",
                                    text: "@".concat(t.maker[0].username),
                                    className: "text-sm",
                                  }),
                                })
                              : (0, a.jsx)("span", {
                                  className: "text-primary-gray text-sm",
                                  children: (0, a.jsx)(P.Z, {
                                    url: (0, F.x)(K, t.addressMaker),
                                    isTargetBlank: !0,
                                    isCustom: !0,
                                    customColor: "#979dac",
                                    text: l("usernameNotSetLabel"),
                                    weight: "font-light",
                                    className: "text-sm",
                                  }),
                                }),
                          ],
                        }),
                      i &&
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsxs)("span", {
                              className:
                                "rubik text-sm font-light text-primary-dark-blue",
                              children: [l("toLabel"), ":"],
                            }),
                            (0, a.jsx)(N.Z, {
                              address: t.addressTaker,
                              src:
                                t.taker.length > 0 ? t.taker[0].imageUrl : "",
                              isNFT: t.taker.length > 0 ? t.taker[0].isNft : 0,
                              className: "w-[24px] h-[24px] ml-[8px] mr-[8px]",
                              sizesClassNames: "w-[24px] h-[24px]",
                              jazziconSize: {
                                defaultSize: 24,
                                breakpoints: [],
                                sizes: [],
                              },
                            }),
                            t.taker.length > 0 && t.taker[0].username
                              ? (0, a.jsx)("span", {
                                  className:
                                    "text-primary-dark-blue text-sm font-semibold",
                                  children: (0, a.jsx)(P.Z, {
                                    url: (0, F.x)(K, t.addressTaker),
                                    isTargetBlank: !0,
                                    isCustom: !0,
                                    customColor: "#03045e",
                                    text: "@".concat(t.taker[0].username),
                                    className: "text-sm",
                                  }),
                                })
                              : (0, a.jsx)("span", {
                                  className: "text-primary-gray text-sm",
                                  children: (0, a.jsx)(P.Z, {
                                    url: (0, F.x)(K, t.addressTaker),
                                    isTargetBlank: !0,
                                    isCustom: !0,
                                    customColor: "#979dac",
                                    text: l("usernameNotSetLabel"),
                                    weight: "font-light",
                                    className: "text-sm",
                                  }),
                                }),
                          ],
                        }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "mt-[24px] flex justify-start items-center w-full lg:w-[280px] lg:mt-[auto] lg:flex-none",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "relative",
                        style: { minWidth: "50px" },
                        children: [
                          t.collections.filter(function (e) {
                            return 1 === e.creator;
                          }).length <= c &&
                            t.collections
                              .filter(function (e) {
                                return 1 === e.creator;
                              })
                              .map(function (e, r) {
                                return (0,
                                a.jsx)(C.Z, { src: e.assetLogo ? e.assetLogo : "", className: "w-[40px] h-[40px] absolute", style: { top: "-20px", left: "".concat(11 * r, "px"), position: "absolute" } }, "avatar-collection-maker-".concat(t.addressMaker, "-").concat(t.swapId, "-").concat(r));
                              }),
                          t.collections.filter(function (e) {
                            return 1 === e.creator;
                          }).length > c &&
                            t.collections
                              .filter(function (e, t) {
                                return 1 === e.creator && t <= c;
                              })
                              .map(function (e, r) {
                                return (0,
                                a.jsx)(C.Z, { src: e.assetLogo ? e.assetLogo : "", className: "w-[40px] h-[40px]", style: { top: "-20px", left: "".concat(11 * r, "px"), position: "absolute" } }, "avatar-collection-maker-".concat(t.addressMaker, "-").concat(t.swapId, "-").concat(r));
                              }),
                          t.collections.filter(function (e) {
                            return 1 === e.creator;
                          }).length > c &&
                            (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "rounded-full bg-primary-dark-blue flex justify-center items-center w-[40px] h-[40px] rounded-full text-primary-white absolute ".concat(
                                      E().collectionPlaceholder,
                                      " cursor-pointer"
                                    ),
                                  style: {
                                    top: "-20px",
                                    left: "".concat(11 * c, "px"),
                                  },
                                  children: (0, a.jsxs)("span", {
                                    className:
                                      "text-primary-white text-lg font-semibold",
                                    children: [
                                      "+",
                                      t.collections.filter(function (e, t) {
                                        return 1 === e.creator && t > c;
                                      }).length,
                                    ],
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className: "".concat(
                                    E().list,
                                    " flex-col p-[5px] rounded-[4px] bg-primary-dark-blue min-w-[130px] absolute z-[10]"
                                  ),
                                  style: { top: "10px", left: "60px" },
                                  children: t.collections
                                    .filter(function (e, t) {
                                      return 1 === e.creator && t > c;
                                    })
                                    .map(function (e, r) {
                                      return (0,
                                      a.jsx)("div", { className: "text-sm font-regular text-primary-white", children: e.name }, "".concat(e.symbol, "-").concat(r, "-").concat(t.swapId, "-maker"));
                                    }),
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "flex justify-between items-center mx-[16px]",
                        children: [
                          (0, a.jsx)(N.Z, {
                            address: t.addressMaker,
                            src: t.maker.length > 0 ? t.maker[0].imageUrl : "",
                            isNFT: t.maker.length > 0 ? t.maker[0].isNft : 0,
                            className: "w-[16px] h-[16px]",
                            sizesClassNames: "w-[16px] h-[16px]",
                            jazziconSize: {
                              defaultSize: 16,
                              breakpoints: [],
                              sizes: [],
                            },
                          }),
                          (0, a.jsx)("img", {
                            src: S.Z.src,
                            className: "w-[40px] h-[40px] ml-[8px] mr-[8px]",
                          }),
                          (0, a.jsx)(N.Z, {
                            address: t.addressTaker,
                            src: t.taker.length > 0 ? t.taker[0].imageUrl : "",
                            isNFT: t.taker.length > 0 ? t.taker[0].isNft : 0,
                            className: "w-[16px] h-[16px]",
                            sizesClassNames: "w-[16px] h-[16px]",
                            jazziconSize: {
                              defaultSize: 16,
                              breakpoints: [],
                              sizes: [],
                            },
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "relative",
                        children: [
                          t.collections.filter(function (e) {
                            return 0 === e.creator;
                          }).length <= c &&
                            t.collections
                              .filter(function (e) {
                                return 0 === e.creator;
                              })
                              .map(function (e, r) {
                                return (0,
                                a.jsx)(C.Z, { src: e.assetLogo ? e.assetLogo : "", className: "w-[40px] h-[40px]", style: { top: "-20px", left: "".concat(11 * r, "px"), position: "absolute" } }, "avatar-collection-taker-".concat(t.addressTaker, "-").concat(t.swapId, "-").concat(r));
                              }),
                          t.collections.filter(function (e) {
                            return 0 === e.creator;
                          }).length > c &&
                            t.collections
                              .filter(function (e, t) {
                                return 0 === e.creator && t <= c;
                              })
                              .map(function (e, r) {
                                return (0,
                                a.jsx)(C.Z, { src: e.assetLogo ? e.assetLogo : "", className: "w-[40px] h-[40px] absolute", style: { top: "-20px", left: "".concat(11 * r, "px"), position: "absolute" } }, "avatar-collection-taker-".concat(t.addressTaker, "-").concat(t.swapId, "-").concat(r));
                              }),
                          t.collections.filter(function (e) {
                            return 0 === e.creator;
                          }).length > c &&
                            (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "rounded-full bg-primary-dark-blue flex justify-center items-center w-[40px] h-[40px] rounded-full text-primary-white absolute ".concat(
                                      E().collectionPlaceholder,
                                      " cursor-pointer"
                                    ),
                                  style: {
                                    top: "-20px",
                                    left: "".concat(11 * c, "px"),
                                  },
                                  children: (0, a.jsxs)("span", {
                                    className:
                                      "text-primary-white text-lg font-semibold",
                                    children: [
                                      "+",
                                      t.collections.filter(function (e, t) {
                                        return 0 === e.creator && t > c;
                                      }).length,
                                    ],
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className: "".concat(
                                    E().list,
                                    " flex-col p-[5px] rounded-[4px] min-w-[130px] bg-primary-dark-blue absolute z-[10]"
                                  ),
                                  style: { top: "10px", left: "60px" },
                                  children: t.collections
                                    .filter(function (e, t) {
                                      return 0 === e.creator && t > c;
                                    })
                                    .map(function (e, r) {
                                      return (0,
                                      a.jsx)("div", { className: "text-sm font-regular text-primary-white", children: e.name }, "".concat(e.symbol, "-").concat(r, "-").concat(t.swapId, "-taker"));
                                    }),
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              w &&
                (0, a.jsx)(M.Z, {
                  modalTitle: l("cancelDealLabel"),
                  modalDescription: l(
                    "alertRemoveDealCounterpartyTradeRequestLabel"
                  ),
                  action: function (e, t) {
                    e("disabled"),
                      (function (e, t) {
                        if (K) {
                          var r = new (D())({
                            ethers: I,
                            web3Provider: X,
                            network: (0, V.qe)(K).toUpperCase(),
                          });
                          console.log((0, V.qe)(K).toUpperCase()),
                            r.on("cancelSwapTransactionCreated", function () {
                              e("loading");
                            }),
                            r.on("cancelSwapTransactionMined", function () {
                              e("default"), t(!1);
                            }),
                            r.on("cancelSwapTransactionError", function () {
                              e("default");
                            }),
                            console.log(U),
                            r.cancelSwap(U);
                        }
                      })(e, t);
                  },
                  actionClose: function () {
                    y(!1);
                  },
                  buttonsText: [l("yesCancelItLabel"), l("dismissLabel")],
                  isOpen: !0,
                  closeOnAction: !1,
                }),
            ],
          });
        },
        $ = "/_next/static/media/refresh.fbdcb619.svg",
        q = r(98448),
        K = r(1333),
        X = r(87344),
        G = r.n(X),
        Y = r(64607),
        J = function () {
          var e = (0, O.Z)("common").t,
            t = (0, s.useRef)(!1),
            r = (0, s.useState)(0),
            n = r[0],
            c = r[1],
            l = (0, s.useState)(5)[0],
            i = (0, s.useState)(!1),
            o = i[0],
            p = i[1],
            x = (0, s.useState)(!1),
            h = x[0],
            b = x[1],
            g = (0, s.useState)(0),
            w = g[0],
            y = g[1],
            v = (0, s.useState)(!1),
            k = v[0],
            j = v[1],
            N = (0, s.useState)([]),
            L = N[0],
            C = N[1],
            S = (0, s.useState)(null),
            T = S[0],
            E = S[1],
            _ = (0, m.C)(function (e) {
              return e;
            }).waccount,
            I = _.account,
            A = _.currentNetworkId,
            R = function (e) {
              A &&
                I &&
                (t.current && b(!0),
                (0, u.bf)((0, d.f)("getSwapList", [A, I, 0, n, l]))
                  .then(function (r) {
                    var a = r.data[0],
                      s = a.swapList,
                      n = a.count;
                    t.current && (b(!1), y(n), e && e("default")),
                      0 === L.length
                        ? t.current && C(s)
                        : A === T
                        ? t.current && C(L.concat(s))
                        : t.current && (c(0), C(s));
                  })
                  .catch(function (r) {
                    t.current && (b(!1), e && e("default")), console.error(r);
                  }));
            };
          return (
            (0, s.useEffect)(function () {
              return (
                (t.current = !0),
                function () {
                  t.current = !1;
                }
              );
            }, []),
            (0, s.useEffect)(
              function () {
                o
                  ? t.current && p(!1)
                  : w > L.length
                  ? t.current && (c(n + l), j(!0))
                  : t.current && j(!1);
              },
              [L]
            ),
            (0, s.useEffect)(
              function () {
                R(null), t.current && E(A);
              },
              [A, I]
            ),
            (0, a.jsx)(a.Fragment, {
              children: (0, a.jsxs)("section", {
                className:
                  "flex flex-col justify-start p-[24px] md:pt-[32px] md:pb-[40px] md:pl-[40px] md:pr-[40px] bg-primary-white rounded-2xl shadow-3xl",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex justify-between items-center",
                    children: [
                      (0, a.jsx)("h3", {
                        className:
                          "text-lg font-semibold text-primary-dark-blue md:text-xl",
                        children: e("activeTradesLabel"),
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "flex justify-center items-center w-[30px] h-[30px] select-none bg-primary-blue rounded-full cursor-pointer hover:bg-primary-dark-blue",
                        onClick: function () {
                          !(function () {
                            if ((t.current && p(!0), A && I)) {
                              var e = (n / l) * l;
                              0 === e && (e = l),
                                (0, u.bf)(
                                  (0, d.f)("getSwapList", [A, I, 0, 0, e])
                                )
                                  .then(function (e) {
                                    var r = e.data[0],
                                      a = r.swapList,
                                      s = r.count;
                                    t.current && (y(s), C(a)),
                                      s > a.length && t.current && j(!0),
                                      t.current && p(!1);
                                  })
                                  .catch(function (e) {
                                    console.error(e), p(!1);
                                  });
                            }
                          })();
                        },
                        children: o
                          ? (0, a.jsx)("img", {
                              src: q.Z.src,
                              className: "".concat(
                                G().rotating,
                                " w-[16px] h-[16px]"
                              ),
                            })
                          : (0, a.jsx)("img", {
                              src: $,
                              className: "w-[16px] h-[16px]",
                            }),
                      }),
                    ],
                  }),
                  L.length > 0
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)("div", {
                            className: "w-full mt-[24px]",
                            children: L.map(function (e, t) {
                              return (0,
                              a.jsx)(W, { trade: e, currentAccount: I || "", minElementsPlaceholder: 3 }, "trade-".concat(e.swapId, "-").concat(e.addressMaker, "-").concat(e.addressTaker));
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "flex justify-center items-center mt-[60px]",
                            children:
                              k &&
                              (0, a.jsx)(f.Z, {
                                text: e("loadMoreLabel"),
                                type: {
                                  class: "primary",
                                  hasColoredBg: !1,
                                  icon: !1,
                                },
                                initialState: { state: "default" },
                                size: "small",
                                onClick: function (e) {
                                  e("loading"), R(e);
                                },
                              }),
                          }),
                        ],
                      })
                    : (0, a.jsx)(a.Fragment, {
                        children: h
                          ? (0, a.jsx)(a.Fragment, {
                              children: (0, a.jsx)("div", {
                                className:
                                  "flex flex-col items-center justify-center gap-4 w-full h-[200px] mt-[24px]",
                                children: (0, a.jsx)(Y.Z, {
                                  isWhite: !1,
                                  className: "w-[30px] h-[30px]",
                                }),
                              }),
                            })
                          : (0, a.jsx)(a.Fragment, {
                              children: (0, a.jsxs)("div", {
                                className:
                                  "flex flex-col items-center justify-center gap-4 w-full h-[200px] mt-[24px]",
                                children: [
                                  (0, a.jsx)("img", {
                                    src: K.Z.src,
                                    className: "w-[52px] h-[52px]",
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "text-sm text-primary-blue",
                                    children: e("activeTradeShownHereLabel"),
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
        Q = r(21259),
        ee = r(34543),
        te = r(73801),
        re = r.n(te),
        ae = r(12683),
        se = r(45501),
        ne = r(1984),
        ce = r(80998),
        le = r(50647);
      function ie(e, t, r) {
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
      function oe(e) {
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
              ie(e, t, r[t]);
            });
        }
        return e;
      }
      var ue = !0,
        de = function () {
          var e = (0, O.Z)("common").t,
            t = (0, Z.z)("STATUSES_FOR_NAVSTATE"),
            r = (0, s.useRef)(!1),
            h = (0, s.useRef)({ clearInput: null }),
            b = (0, s.useState)("all"),
            g = b[0],
            w = b[1],
            y = (0, s.useState)({ source: "api", swaps: [] }),
            v = y[0],
            k = y[1],
            j = (0, s.useState)(!1),
            N = j[0],
            L = j[1],
            C = (0, s.useState)(!1),
            S = C[0],
            T = C[1],
            E = (0, s.useState)(!1),
            I = E[0],
            A = E[1],
            R = (0, s.useState)(""),
            z = R[0],
            M = R[1],
            U = (0, s.useState)(0),
            D = U[0],
            V = U[1],
            F = (0, s.useState)(10)[0],
            P = (0, s.useState)(!1),
            H = P[0],
            B = P[1],
            W = (0, s.useState)(0),
            $ = W[0],
            q = W[1],
            K = (0, s.useState)(null),
            X = K[0],
            G = K[1],
            te = (0, s.useState)(!1),
            ie = te[0],
            ue = te[1],
            de = (0, m.T)(),
            me = (0, m.C)(function (e) {
              return e;
            }),
            pe = me.waccount,
            xe = me.trademodal,
            fe = me.reportmodal,
            he = xe.isOpen,
            be = xe.mode,
            ge = fe.isOpen,
            we = pe.currentNetworkId,
            ye = pe.account,
            ve = pe.isConnected,
            ke = function (e) {
              g !== e &&
                (V(0), w(e), A(!0), k({ source: v.source, swaps: [] }));
            },
            je = function (e) {
              r.current &&
                (M(e), L(!0), T(!0), V(0), k({ source: "search", swaps: [] }));
            },
            Ne = function (e, t) {
              if ((r.current && L(!0), we && ye)) {
                var a = [];
                (a =
                  t && 0 !== t.length
                    ? [we, ye, e, D, F, t]
                    : [we, ye, e, D, F]),
                  (0, u.bf)(
                    (0, d.f)(
                      t && 0 !== t.length
                        ? "searchPersonalSwapList"
                        : "getPersonalSwapList",
                      a
                    )
                  )
                    .then(function (e) {
                      var a = e.data[0],
                        s = a.swapList,
                        n = a.count;
                      r.current && A(!1),
                        r.current && T(!1),
                        r.current && q(n),
                        0 === v.swaps.length
                          ? r.current &&
                            k({
                              source: t && 0 !== t.length ? "search" : "api",
                              swaps: s,
                            })
                          : r.current &&
                            (we === X
                              ? k({
                                  source:
                                    t && 0 !== t.length ? "search" : "api",
                                  swaps: v.swaps.concat(s),
                                })
                              : (V(0), k({ source: "api", swaps: s }))),
                        r.current && L(!1);
                    })
                    .catch(function (e) {
                      console.error(e),
                        r.current && A(!1),
                        r.current && L(!1),
                        r.current && T(!1);
                    });
              }
            };
          return (
            (0, s.useEffect)(
              function () {
                I ||
                  S ||
                  ($ > v.swaps.length
                    ? (r.current && V(D + F), r.current && B(!0))
                    : r.current && B(!1));
              },
              [v.swaps]
            ),
            (0, s.useEffect)(
              function () {
                I && 0 === v.swaps.length && Ne(t[g]);
              },
              [I, v.swaps, g]
            ),
            (0, s.useEffect)(
              function () {
                "search" === v.source &&
                  0 === v.swaps.length &&
                  !0 === S &&
                  0 === D &&
                  Ne(t[g], z);
              },
              [z, S, D, v]
            ),
            (0, s.useEffect)(
              function () {
                ve || (q(0), V(0), k({ source: "api", swaps: [] }));
              },
              [ve, we]
            ),
            (0, s.useEffect)(
              function () {
                if (we && ye)
                  return (
                    (r.current = !0),
                    Ne(t[g]),
                    G(we),
                    function () {
                      r.current = !1;
                    }
                  );
              },
              [we, ye]
            ),
            (0, a.jsxs)("div", {
              children: [
                (0, a.jsx)(se.Z, {}),
                (0, a.jsxs)(ne.default, {
                  children: [
                    (0, a.jsx)("title", { children: e("titleLabel") }),
                    (0, a.jsx)(ce.Z, {
                      metaTitle: e("titleLabel"),
                      metaDescription: e("metaDescriptionLabel"),
                      metaOgTitle: e("titleLabel"),
                      metaOgDescription: e("metaDescriptionLabel"),
                      metaOgImage:
                        "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/meta-logo.png",
                      metaOgUrl: "https://www.nfttrader.io/mytrades",
                      twitterImageCard:
                        "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/meta-logo.png",
                      twitterImage:
                        "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/meta-logo.png",
                      twitterUrl: "https://www.nfttrader.io/mytrades",
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
                (0, a.jsx)(n.Z, {}),
                (0, a.jsxs)("main", {
                  children: [
                    (0, a.jsx)("div", {
                      className: "bg-primary-yellow",
                      children: (0, a.jsx)(c.Z, {
                        mainText: e("yourHubTradeLabel"),
                        subText: e("personalTradeHubLabel"),
                        button: (0, a.jsx)(f.Z, {
                          text: e("createTradeLabel"),
                          type: {
                            class: "primary",
                            icon: !1,
                            hasColoredBg: !0,
                          },
                          size: "large",
                          initialState: { state: "default" },
                          onClick: function () {
                            ve
                              ? (ue(!0),
                                de((0, p.eV)("maker")),
                                de((0, p.r$)(!0)),
                                document.body.classList.add("no-scroll"))
                              : de((0, _.$e)(!0));
                          },
                        }),
                      }),
                    }),
                    ve &&
                      (0, a.jsx)("div", {
                        className:
                          "max-w-[1280px] px-4 m-auto mt-4 md:mt-12 md:px-10 xl:px-0",
                        children: (0, a.jsx)(J, {}),
                      }),
                    (0, a.jsxs)("nav", {
                      className:
                        "flex flex-col justify-between gap-4 mt-[20px] max-w-[1280px] m-[auto] p-4 md:flex-row md:p-12 md:gap-0 md:items-center",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex items-center justify-center gap-10",
                          children: [
                            (0, a.jsx)("span", {
                              className:
                                "all" === g
                                  ? "text-primary-blue border-b-2 border-primary-blue cursor-default"
                                  : "text-primary-gray cursor-pointer",
                              onClick: function () {
                                return ke("all");
                              },
                              children: e("allLabel"),
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "confirmed" === g
                                  ? "text-primary-blue border-b-2 border-primary-blue cursor-default"
                                  : "text-primary-gray cursor-pointer",
                              onClick: function () {
                                return ke("confirmed");
                              },
                              children: e("closedLabel"),
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "canceled" === g
                                  ? "text-primary-blue border-b-2 border-primary-blue cursor-default"
                                  : "text-primary-gray cursor-pointer",
                              onClick: function () {
                                return ke("canceled");
                              },
                              children: e("canceledLabel"),
                            }),
                          ],
                        }),
                        (0, a.jsx)(l.Z, {
                          currentSearchState: "filled",
                          setFilter: je,
                          placeholder: e("searchLabel"),
                          refClear: h,
                          className: "mt-[16px] md:mt-[0px]",
                        }),
                      ],
                    }),
                    v.swaps.length
                      ? (0, a.jsx)("div", {
                          className:
                            "w-full flex flex-col justify-center items-center pb-[40px] px-4 md:px-10 xl:px-0 m-auto ".concat(
                              re().scrollableTrades
                            ),
                          children: (0, a.jsx)(ee.Z, {
                            dataLength: v.swaps.length,
                            hasMore: H,
                            next: function () {
                              Ne(t[g]);
                            },
                            loader: (0, a.jsx)("div", {
                              className: "flex justify-center items-center",
                              children: (0, a.jsx)("img", {
                                src: ae.Z.src,
                                className: "".concat(
                                  re().rotating,
                                  " w-[24px] h-[24px]"
                                ),
                              }),
                            }),
                            className:
                              "flex flex-col justify-center items-center gap-8 py-[30px]",
                            children: v.swaps.map(function (e, t) {
                              return (0, a.jsx)(
                                o.Z,
                                {
                                  maker: oe({}, e.maker[0], {
                                    collections: e.collections.filter(function (
                                      e
                                    ) {
                                      return 1 === e.creator;
                                    }),
                                  }),
                                  taker: oe({}, e.taker[0], {
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
                      : "search" === v.source
                      ? (0, a.jsx)(a.Fragment, {
                          children: N
                            ? (0, a.jsx)("div", {
                                className:
                                  "flex justify-center items-center pb-[50px]",
                                children: (0, a.jsx)("img", {
                                  src: ae.Z.src,
                                  className: "".concat(
                                    re().rotating,
                                    " w-[36px] h-[36px]"
                                  ),
                                }),
                              })
                            : (0, a.jsxs)("div", {
                                className:
                                  "flex flex-col items-center justify-center mt-[40px] gap-10 pb-[50px] md:mt-[0px]",
                                children: [
                                  (0, a.jsx)("img", { src: x.Z.src }),
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
                                      null === (e = h.current) ||
                                        void 0 === e ||
                                        null === (t = e.clearInput) ||
                                        void 0 === t ||
                                        t.call(e),
                                        V(0),
                                        je("");
                                    },
                                    className: "px-[32px] py-[10px] md:py-2",
                                  }),
                                ],
                              }),
                        })
                      : (0, a.jsx)(a.Fragment, {
                          children: N
                            ? (0, a.jsx)("div", {
                                className:
                                  "flex justify-center items-center pb-[50px]",
                                children: (0, a.jsx)(Y.Z, {
                                  isWhite: !1,
                                  className: "w-[36px] h-[36px]",
                                }),
                              })
                            : (0, a.jsx)(a.Fragment, {
                                children: ve
                                  ? (0, a.jsxs)("div", {
                                      className:
                                        "flex flex-col items-center justify-center gap-10 pb-[50px]",
                                      children: [
                                        (0, a.jsx)("img", { src: x.Z.src }),
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
                                          (0, a.jsx)("img", { src: x.Z.src }),
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
                he &&
                  (0, a.jsx)(Q.Z, {
                    onOpen: function () {
                      ie ||
                        (null !== be && "VIEW_MAKER" !== be) ||
                        de((0, p.Um)(3));
                    },
                    onClose: function () {
                      ie && ue(!1);
                    },
                  }),
                ge && (0, a.jsx)(le.Z, {}),
                (0, a.jsx)(i.Z, {}),
              ],
            })
          );
        };
    },
    63097: function (e) {
      e.exports = {
        rotating: "TagStatus_rotating__NS_yT",
        rotate: "TagStatus_rotate__6P50Q",
      };
    },
    24730: function (e) {
      e.exports = {
        list: "ActiveTradeRow_list__iNP9X",
        collectionPlaceholder: "ActiveTradeRow_collectionPlaceholder__CFMl7",
      };
    },
    87344: function (e) {
      e.exports = {
        rotating: "ActiveTradeList_rotating___psUc",
        rotate: "ActiveTradeList_rotate__Rhpqd",
      };
    },
    73801: function (e) {
      e.exports = {
        rotating: "mytrades_rotating__7d5TD",
        rotate: "mytrades_rotate__nbXE_",
        scrollableTrades: "mytrades_scrollableTrades__STq9Y",
      };
    },
  },
  function (e) {
    e.O(0, [421, 946, 878, 790, 616, 66, 774, 888, 179], function () {
      return (t = 22424), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
