(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    45301: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return a(3357);
        },
      ]);
    },
    64576: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return d;
        },
      });
      var s = a(8014),
        i = a(3621),
        o = a(62044),
        n = "/_next/static/media/guide.50057452.svg",
        l = "/_next/static/media/discord.3afcd57c.svg",
        r = "/_next/static/media/faq.ead89cb7.svg",
        c = a(75657),
        m = function (e) {
          var t = e.type,
            a = (0, o.Z)("common").t,
            m = {
              "how-to-trade": {
                icon: n,
                title: a("howToTradeLabel"),
                subtitle: a("learnHowLabel"),
                button: a("readMoreLabel"),
                href: "#" //"/how-to-trade",
              },
              discord: {
                icon: l,
                title: a("joinDiscordLabel"),
                subtitle: a("comeBestCommunityLabel"),
                button: a("joinUsLabel"),
                href:"#"// "https://discord.gg/q4gK9sqt6r",
              },
              faq: {
                icon: r,
                title: a("faqLabel"),
                subtitle: a("findAnswersLabel"),
                button: a("readMoreLabel"),
                href: "#"//"/faq",
              },
            }[t];
          return (0, s.jsxs)("div", {
            className: "flex flex-col items-center justify-center gap-10",
            children: [
              (0, s.jsx)("img", { src: m.icon, className: "w-20 h-20" }),
              (0, s.jsxs)("div", {
                className: "flex flex-col items-stretch justify-center gap-2",
                children: [
                  (0, s.jsx)("p", {
                    className:
                      "text-2xl text-center text-primary-blue font-semibold",
                    children: m.title,
                  }),
                  (0, s.jsx)("p", {
                    className:
                      "rubik text-primary-dark-blue text-base text-center font-light",
                    children: m.subtitle,
                  }),
                ],
              }),
              (0, s.jsx)(c.default, {
                href: m.href,
                children: (0, s.jsx)("a", {
                  target: "discord" === t ? "_blank" : "",
                  children: (0, s.jsx)(i.Z, {
                    text: m.button,
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
          var e = (0, o.Z)("common").t;
          return (0, s.jsx)("section", {
            className: "w-full",
            children: (0, s.jsx)("div", {
              className:
                "w-full max-w-[1280px] h-full px-[12px] pt-[40px] pb-[60px] md:pt-[88px] md:pb-[84px] m-auto",
              children: (0, s.jsxs)("div", {
                className: "flex flex-col items-stretch justify-center gap-20",
                children: [
                  (0, s.jsx)("h1", {
                    className:
                      "text-center text-3xl text-primary-dark-blue font-semibold",
                    children: e("wantMoreLabel"),
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "flex flex-col md:flex-row items-stretch justify-evenly gap-8",
                    children: [
                      (0, s.jsx)(m, { type: "how-to-trade" }),
                      (0, s.jsx)(m, { type: "discord" }),
                      (0, s.jsx)(m, { type: "faq" }),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
    },
    3357: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          __N_SSG: function () {
            return H;
          },
          default: function () {
            return G;
          },
        });
      var s = a(8014),
        i = a(56168),
        o = a(1984),
        n = a(62305),
        l = a(36180),
        r = a(3621),
        c = "/_next/static/media/grey_sphere.e9741642.svg",
        m = a(64607),
        d = a(3086),
        u = a.n(d),
        p = function (e) {
          var t = e.src,
            a = e.time,
            o = void 0 === a ? 2 : a,
            n = e.sizes,
            l = e.className,
            r = e.enableResetLoader,
            d = void 0 !== r && r,
            p = e.floatingEffect,
            f = void 0 === p || p,
            g = (0, i.useRef)(!1),
            h = (0, i.useState)(0),
            x = h[0],
            b = h[1],
            y = (0, i.useState)("number" === typeof n ? n : 0),
            w = y[0],
            C = y[1],
            v = (0, i.useState)(d)[0],
            z = (0, i.useState)(!1),
            j = z[0],
            k = z[1];
          Array.isArray(t) || (t = [t]);
          var E = (0, i.useCallback)(function () {
              if (Array.isArray(t) && !(t.length <= 1)) {
                var e = 0,
                  a = -1,
                  s = setInterval(function () {
                    (e += w * a),
                      g.current && b(e),
                      ((1 === a && 0 === e) ||
                        Math.abs(e / w) === t.length - 1) &&
                        (a *= -1),
                      v && g.current && k(!1);
                  }, 1e3 * o);
                return function () {
                  return clearInterval(s);
                };
              }
            }, []),
            A = (0, i.useCallback)(function (e) {
              return e >= 1600
                ? "2xl"
                : e >= 1280
                ? "xl"
                : e >= 1024
                ? "lg"
                : e >= 768
                ? "md"
                : "sm";
            }, []),
            T = (0, i.useCallback)(function () {
              var e,
                t,
                a =
                  ((e = 0),
                  (t = 4),
                  (e = Math.ceil(e)),
                  (t = Math.floor(t)),
                  Math.floor(Math.random() * (t - e + 1)) + e);
              return "".concat(a, "s");
            }, []);
          return (
            (0, i.useEffect)(
              function () {
                (g.current = !0),
                  "number" !== typeof n &&
                    g.current &&
                    C(n[A(window.innerWidth)]);
                var e = null;
                window.addEventListener("resize", function () {
                  e && clearTimeout(e),
                    v &&
                      "string" !== typeof t &&
                      Array.isArray(t) &&
                      t.length > 1 &&
                      g.current &&
                      k(!0),
                    (e = setTimeout(function () {
                      var e = A(window.innerWidth),
                        t = n[e];
                      "number" !== typeof n && t !== w && g.current && C(t);
                    }, 0));
                });
                var a = E();
                return function () {
                  (g.current = !1), a && a();
                };
              },
              [w]
            ),
            (0, s.jsxs)("div", {
              className: ""
                .concat(null !== l && void 0 !== l ? l : "", " ")
                .concat(
                  f ? u().float : "",
                  " relative inline-flex items-center justify-center rounded-full overflow-hidden"
                ),
              style: {
                width: "".concat(w, "px"),
                height: "".concat(w, "px"),
                animationDelay: "".concat(T()),
              },
              children: [
                (0, s.jsx)("div", {
                  className:
                    "absolute top-0 flex items-center justify-start w-full h-full transition-all",
                  style: {
                    transform: "translateX(".concat(x, "px)"),
                    willChange: "transform",
                  },
                  children: t.map(function (e, t) {
                    return (0,
                    s.jsx)("img", { src: e, className: "h-auto z-0", style: { width: "".concat(w, "px") } }, t);
                  }),
                }),
                v &&
                  j &&
                  (0, s.jsx)("div", {
                    className:
                      "absolute top-0 flex items-center justify-center w-full h-full transition-all bg-primary-dark-blue z-[10]",
                    children: (0, s.jsx)(m.Z, {
                      isWhite: !0,
                      className: "w-[30px] h-[30px]",
                    }),
                  }),
                (0, s.jsx)("img", {
                  src: c,
                  className:
                    "absolute top-0 left-0 w-full h-auto mix-blend-hard-light z-50",
                  onDragStart: function (e) {
                    return e.preventDefault();
                  },
                }),
              ],
            })
          );
        },
        f = a(64576),
        g = "/_next/static/media/logo.96d10b69.svg",
        h = "/_next/static/media/moments_row_small.039a1a40.png",
        x = "/_next/static/media/moments_row.9f579032.png",
        b = "/_next/static/media/SDK_logo_rotating.dff5c730.gif",
        y = a(97968),
        w = a(27171),
        C = a(21259),
        v = {
          "/api/mock/chart": {
            data: [
              {
                percentage: 100,
                color: "#aabbcc",
                volume: "24k ETH",
                dapp: { image: "", name: "Bored Ape Yacht Club" },
              },
              {
                percentage: 80,
                color: "#aabbcc",
                volume: "12k ETH",
                dapp: { image: "", name: "CyberKongz" },
              },
              {
                percentage: 60,
                color: "#aabbcc",
                volume: "5.5k ETH",
                dapp: { image: "", name: "The Sandbox" },
              },
              {
                percentage: 40,
                color: "#aabbcc",
                volume: "5k ETH",
                dapp: { image: "", name: "Mutant Ape Yacht Club" },
              },
              {
                percentage: 25,
                color: "#aabbcc",
                volume: "2k ETH",
                dapp: { image: "", name: "Doodles" },
              },
              {
                percentage: 10,
                color: "#aabbcc",
                volume: "1k ETH",
                dapp: { image: "", name: "Cool Cats" },
              },
            ],
          },
          "/api/mock/volume/chart": {
            data: [
              { daily_volume: "123.43", currency: "ETH", total_volume: "56k" },
            ],
          },
          "": { data: [] },
          "/api/mock/home/trades": {
            data: [
              {
                creator: {
                  address: "0x39F7fc333C56D8b8a42F55EC9212C99F07DcbC91",
                  imageUrl: null,
                },
                taker: {
                  address: "0xf7184D6187885e92Ee290533f8E00521Ef3fFA2d",
                  imageUrl: null,
                },
                timestamp: "2022-02-21T07:36:17Z",
                swapId: null,
                type: "DIRECT_DEAL",
                collections: [
                  {
                    name: "Bored Ape Yacht Club",
                    imageUrl:
                      "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s0",
                    isVerified: !0,
                  },
                  {
                    name: "Doodles",
                    imageUrl:
                      "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
                    isVerified: !0,
                  },
                ],
              },
              {
                creator: {
                  address: "0x39F7fc333C56D8b8a42F55EC9212C99F07DcbC91",
                  imageUrl: null,
                },
                taker: {
                  address: "0xf7184D6187885e92Ee290533f8E00521Ef3fFA2d",
                  imageUrl: null,
                },
                timestamp: "2022-02-21T07:36:17Z",
                swapId: null,
                type: "DIRECT_DEAL",
                collections: [
                  {
                    name: "Bored Ape Yacht Club",
                    imageUrl:
                      "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s0",
                    isVerified: !0,
                  },
                  {
                    name: "Doodles",
                    imageUrl:
                      "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
                    isVerified: !0,
                  },
                ],
              },
              {
                creator: {
                  address: "0x39F7fc333C56D8b8a42F55EC9212C99F07DcbC91",
                  imageUrl: null,
                },
                taker: {
                  address: "0xf7184D6187885e92Ee290533f8E00521Ef3fFA2d",
                  imageUrl: null,
                },
                timestamp: "2022-02-23T07:36:17Z",
                swapId: null,
                type: "DIRECT_DEAL",
                collections: [
                  {
                    name: "Bored Ape Yacht Club",
                    imageUrl:
                      "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s0",
                    isVerified: !0,
                  },
                  {
                    name: "Doodles",
                    imageUrl:
                      "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
                    isVerified: !0,
                  },
                ],
              },
              {
                creator: {
                  address: "0x39F7fc333C56D8b8a42F55EC9212C99F07DcbC91",
                  imageUrl: null,
                },
                taker: {
                  address: "0xf7184D6187885e92Ee290533f8E00521Ef3fFA2d",
                  imageUrl: null,
                },
                timestamp: "2022-02-21T07:36:17Z",
                swapId: null,
                type: "DIRECT_DEAL",
                collections: [
                  {
                    name: "Bored Ape Yacht Club",
                    imageUrl:
                      "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s0",
                    isVerified: !0,
                  },
                  {
                    name: "Doodles",
                    imageUrl:
                      "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
                    isVerified: !0,
                  },
                ],
              },
              {
                creator: {
                  address: "0x39F7fc333C56D8b8a42F55EC9212C99F07DcbC91",
                  imageUrl: null,
                },
                taker: {
                  address: "0xf7184D6187885e92Ee290533f8E00521Ef3fFA2d",
                  imageUrl: null,
                },
                timestamp: "2022-02-21T07:36:17Z",
                swapId: null,
                type: "DIRECT_DEAL",
                collections: [
                  {
                    name: "Bored Ape Yacht Club",
                    imageUrl:
                      "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s0",
                    isVerified: !0,
                  },
                  {
                    name: "Doodles",
                    imageUrl:
                      "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
                    isVerified: !0,
                  },
                ],
              },
              {
                creator: {
                  address: "0x39F7fc333C56D8b8a42F55EC9212C99F07DcbC91",
                  imageUrl: null,
                },
                taker: {
                  address: "0xf7184D6187885e92Ee290533f8E00521Ef3fFA2d",
                  imageUrl: null,
                },
                timestamp: "2022-02-21T07:36:17Z",
                swapId: null,
                type: "DIRECT_DEAL",
                collections: [
                  {
                    name: "Bored Ape Yacht Club",
                    imageUrl:
                      "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s0",
                    isVerified: !0,
                  },
                  {
                    name: "Doodles",
                    imageUrl:
                      "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
                    isVerified: !0,
                  },
                ],
              },
            ],
          },
          "/api/mock/trades": {
            data: [
              {
                creator: {
                  username: "bogo404",
                  address: "0x39F7fc333C56D8b8a42F55EC9212C99F07DcbC91",
                  imageUrl:
                    "https://blogs.airdropalert.com/wp-content/uploads/2021/12/Lazy-Lion-NFT-1005x1024.png",
                  collections: [
                    {
                      name: "Bored Ape Yacht Club",
                      imageUrl:
                        "https://lh3.googleusercontent.com/LqAzBhkWob1IQrODvz4QsFko4bfBGOezuQ2m_FLH-Ysyht0tfQoR2FnAVkgmseDOXY7l00gLQhO_HsoijzlZXTr5QkCzHvCVnz3jlp0=s120",
                      isVerified: !0,
                    },
                    {
                      name: "Doodles",
                      imageUrl:
                        "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
                      isVerified: !0,
                    },
                    {
                      name: "Bored Ape Yacht Club",
                      imageUrl:
                        "https://lh3.googleusercontent.com/LqAzBhkWob1IQrODvz4QsFko4bfBGOezuQ2m_FLH-Ysyht0tfQoR2FnAVkgmseDOXY7l00gLQhO_HsoijzlZXTr5QkCzHvCVnz3jlp0=s120",
                      isVerified: !0,
                    },
                    {
                      name: "Doodles",
                      imageUrl:
                        "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
                      isVerified: !0,
                    },
                  ],
                },
                taker: {
                  username: "the_mastermaind",
                  address: "0xf7184D6187885e92Ee290533f8E00521Ef3fFA2d",
                  imageUrl:
                    "https://itp.live/cloud/2021/12/14/SH2a0coo-nftmonkey_2.png",
                  collections: [
                    {
                      name: "Bored Ape Yacht Club",
                      imageUrl:
                        "https://lh3.googleusercontent.com/LqAzBhkWob1IQrODvz4QsFko4bfBGOezuQ2m_FLH-Ysyht0tfQoR2FnAVkgmseDOXY7l00gLQhO_HsoijzlZXTr5QkCzHvCVnz3jlp0=s120",
                      isVerified: !0,
                    },
                    {
                      name: "Doodles",
                      imageUrl:
                        "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
                      isVerified: !0,
                    },
                  ],
                },
                timestamp: "2022-02-21T07:36:17Z",
                swapId: null,
                type: "DIRECT_DEAL",
              },
              {
                creator: {
                  username: "molestie666",
                  address: "0x39F7fc333C56D8b8a42F55EC9212C99F07DcbC91",
                  imageUrl:
                    "https://itp.live/cloud/2021/12/14/SH2a0coo-nftmonkey_2.png",
                  collections: [
                    {
                      name: "Bored Ape Yacht Club",
                      imageUrl:
                        "https://lh3.googleusercontent.com/LqAzBhkWob1IQrODvz4QsFko4bfBGOezuQ2m_FLH-Ysyht0tfQoR2FnAVkgmseDOXY7l00gLQhO_HsoijzlZXTr5QkCzHvCVnz3jlp0=s120",
                      isVerified: !0,
                    },
                    {
                      name: "Doodles",
                      imageUrl:
                        "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
                      isVerified: !0,
                    },
                  ],
                },
                taker: {
                  username: "ventago",
                  address: "0xf7184D6187885e92Ee290533f8E00521Ef3fFA2d",
                  imageUrl:
                    "https://blogs.airdropalert.com/wp-content/uploads/2021/12/Lazy-Lion-NFT-1005x1024.png",
                  collections: [
                    {
                      name: "Bored Ape Yacht Club",
                      imageUrl:
                        "https://lh3.googleusercontent.com/LqAzBhkWob1IQrODvz4QsFko4bfBGOezuQ2m_FLH-Ysyht0tfQoR2FnAVkgmseDOXY7l00gLQhO_HsoijzlZXTr5QkCzHvCVnz3jlp0=s120",
                      isVerified: !0,
                    },
                    {
                      name: "Doodles",
                      imageUrl:
                        "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
                      isVerified: !0,
                    },
                    {
                      name: "Bored Ape Yacht Club",
                      imageUrl:
                        "https://lh3.googleusercontent.com/LqAzBhkWob1IQrODvz4QsFko4bfBGOezuQ2m_FLH-Ysyht0tfQoR2FnAVkgmseDOXY7l00gLQhO_HsoijzlZXTr5QkCzHvCVnz3jlp0=s120",
                      isVerified: !0,
                    },
                    {
                      name: "Doodles",
                      imageUrl:
                        "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
                      isVerified: !0,
                    },
                  ],
                },
                timestamp: "2022-02-21T07:36:17Z",
                swapId: null,
                type: "DIRECT_DEAL",
              },
              {
                creator: {
                  username: "woman_hi",
                  address: "0x39F7fc333C56D8b8a42F55EC9212C99F07DcbC91",
                  imageUrl:
                    "https://blogs.airdropalert.com/wp-content/uploads/2021/12/Lazy-Lion-NFT-1005x1024.png",
                  collections: [
                    {
                      name: "Bored Ape Yacht Club",
                      imageUrl:
                        "https://lh3.googleusercontent.com/LqAzBhkWob1IQrODvz4QsFko4bfBGOezuQ2m_FLH-Ysyht0tfQoR2FnAVkgmseDOXY7l00gLQhO_HsoijzlZXTr5QkCzHvCVnz3jlp0=s120",
                      isVerified: !0,
                    },
                    {
                      name: "Doodles",
                      imageUrl:
                        "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
                      isVerified: !0,
                    },
                    {
                      name: "Bored Ape Yacht Club",
                      imageUrl:
                        "https://lh3.googleusercontent.com/LqAzBhkWob1IQrODvz4QsFko4bfBGOezuQ2m_FLH-Ysyht0tfQoR2FnAVkgmseDOXY7l00gLQhO_HsoijzlZXTr5QkCzHvCVnz3jlp0=s120",
                      isVerified: !0,
                    },
                    {
                      name: "Doodles",
                      imageUrl:
                        "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
                      isVerified: !0,
                    },
                  ],
                },
                taker: {
                  username: "the_mastermaind",
                  address: "0xf7184D6187885e92Ee290533f8E00521Ef3fFA2d",
                  imageUrl:
                    "https://itp.live/cloud/2021/12/14/SH2a0coo-nftmonkey_2.png",
                  collections: [
                    {
                      name: "Bored Ape Yacht Club",
                      imageUrl:
                        "https://lh3.googleusercontent.com/LqAzBhkWob1IQrODvz4QsFko4bfBGOezuQ2m_FLH-Ysyht0tfQoR2FnAVkgmseDOXY7l00gLQhO_HsoijzlZXTr5QkCzHvCVnz3jlp0=s120",
                      isVerified: !0,
                    },
                    {
                      name: "Doodles",
                      imageUrl:
                        "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
                      isVerified: !0,
                    },
                    {
                      name: "Bored Ape Yacht Club",
                      imageUrl:
                        "https://lh3.googleusercontent.com/LqAzBhkWob1IQrODvz4QsFko4bfBGOezuQ2m_FLH-Ysyht0tfQoR2FnAVkgmseDOXY7l00gLQhO_HsoijzlZXTr5QkCzHvCVnz3jlp0=s120",
                      isVerified: !0,
                    },
                    {
                      name: "Doodles",
                      imageUrl:
                        "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
                      isVerified: !0,
                    },
                  ],
                },
                timestamp: "2022-02-23T07:36:17Z",
                swapId: null,
                type: "DIRECT_DEAL",
              },
              {
                creator: {
                  username: "rich_pie404",
                  address: "0x39F7fc333C56D8b8a42F55EC9212C99F07DcbC91",
                  imageUrl:
                    "https://itp.live/cloud/2021/12/14/SH2a0coo-nftmonkey_2.png",
                  collections: [
                    {
                      name: "Bored Ape Yacht Club",
                      imageUrl:
                        "https://lh3.googleusercontent.com/LqAzBhkWob1IQrODvz4QsFko4bfBGOezuQ2m_FLH-Ysyht0tfQoR2FnAVkgmseDOXY7l00gLQhO_HsoijzlZXTr5QkCzHvCVnz3jlp0=s120",
                      isVerified: !0,
                    },
                    {
                      name: "Doodles",
                      imageUrl:
                        "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
                      isVerified: !0,
                    },
                    {
                      name: "Bored Ape Yacht Club",
                      imageUrl:
                        "https://lh3.googleusercontent.com/LqAzBhkWob1IQrODvz4QsFko4bfBGOezuQ2m_FLH-Ysyht0tfQoR2FnAVkgmseDOXY7l00gLQhO_HsoijzlZXTr5QkCzHvCVnz3jlp0=s120",
                      isVerified: !0,
                    },
                    {
                      name: "Doodles",
                      imageUrl:
                        "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
                      isVerified: !0,
                    },
                    {
                      name: "Bored Ape Yacht Club",
                      imageUrl:
                        "https://lh3.googleusercontent.com/LqAzBhkWob1IQrODvz4QsFko4bfBGOezuQ2m_FLH-Ysyht0tfQoR2FnAVkgmseDOXY7l00gLQhO_HsoijzlZXTr5QkCzHvCVnz3jlp0=s120",
                      isVerified: !0,
                    },
                    {
                      name: "Doodles",
                      imageUrl:
                        "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
                      isVerified: !0,
                    },
                  ],
                },
                taker: {
                  username: "bohdolor7",
                  address: "0xf7184D6187885e92Ee290533f8E00521Ef3fFA2d",
                  imageUrl:
                    "https://blogs.airdropalert.com/wp-content/uploads/2021/12/Lazy-Lion-NFT-1005x1024.png",
                  collections: [
                    {
                      name: "Bored Ape Yacht Club",
                      imageUrl:
                        "https://lh3.googleusercontent.com/LqAzBhkWob1IQrODvz4QsFko4bfBGOezuQ2m_FLH-Ysyht0tfQoR2FnAVkgmseDOXY7l00gLQhO_HsoijzlZXTr5QkCzHvCVnz3jlp0=s120",
                      isVerified: !0,
                    },
                    {
                      name: "Doodles",
                      imageUrl:
                        "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
                      isVerified: !0,
                    },
                    {
                      name: "Bored Ape Yacht Club",
                      imageUrl:
                        "https://lh3.googleusercontent.com/LqAzBhkWob1IQrODvz4QsFko4bfBGOezuQ2m_FLH-Ysyht0tfQoR2FnAVkgmseDOXY7l00gLQhO_HsoijzlZXTr5QkCzHvCVnz3jlp0=s120",
                      isVerified: !0,
                    },
                    {
                      name: "Doodles",
                      imageUrl:
                        "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
                      isVerified: !0,
                    },
                  ],
                },
                timestamp: "2022-02-21T07:36:17Z",
                swapId: null,
                type: "DIRECT_DEAL",
              },
              {
                creator: {
                  username: "sappy_seal",
                  address: "0x39F7fc333C56D8b8a42F55EC9212C99F07DcbC91",
                  imageUrl:
                    "https://blogs.airdropalert.com/wp-content/uploads/2021/12/Lazy-Lion-NFT-1005x1024.png",
                  collections: [
                    {
                      name: "Bored Ape Yacht Club",
                      imageUrl:
                        "https://lh3.googleusercontent.com/LqAzBhkWob1IQrODvz4QsFko4bfBGOezuQ2m_FLH-Ysyht0tfQoR2FnAVkgmseDOXY7l00gLQhO_HsoijzlZXTr5QkCzHvCVnz3jlp0=s120",
                      isVerified: !0,
                    },
                    {
                      name: "Doodles",
                      imageUrl:
                        "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
                      isVerified: !0,
                    },
                  ],
                },
                taker: {
                  username: "dourdarcel",
                  address: "0xf7184D6187885e92Ee290533f8E00521Ef3fFA2d",
                  imageUrl:
                    "https://itp.live/cloud/2021/12/14/SH2a0coo-nftmonkey_2.png",
                  collections: [
                    {
                      name: "Bored Ape Yacht Club",
                      imageUrl:
                        "https://lh3.googleusercontent.com/LqAzBhkWob1IQrODvz4QsFko4bfBGOezuQ2m_FLH-Ysyht0tfQoR2FnAVkgmseDOXY7l00gLQhO_HsoijzlZXTr5QkCzHvCVnz3jlp0=s120",
                      isVerified: !0,
                    },
                    {
                      name: "Doodles",
                      imageUrl:
                        "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
                      isVerified: !0,
                    },
                  ],
                },
                timestamp: "2022-02-21T07:36:17Z",
                swapId: null,
                type: "DIRECT_DEAL",
              },
              {
                creator: {
                  username: "fartechinch",
                  address: "0x39F7fc333C56D8b8a42F55EC9212C99F07DcbC91",
                  imageUrl:
                    "https://itp.live/cloud/2021/12/14/SH2a0coo-nftmonkey_2.png",
                  collections: [
                    {
                      name: "Bored Ape Yacht Club",
                      imageUrl:
                        "https://lh3.googleusercontent.com/LqAzBhkWob1IQrODvz4QsFko4bfBGOezuQ2m_FLH-Ysyht0tfQoR2FnAVkgmseDOXY7l00gLQhO_HsoijzlZXTr5QkCzHvCVnz3jlp0=s120",
                      isVerified: !0,
                    },
                    {
                      name: "Doodles",
                      imageUrl:
                        "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
                      isVerified: !0,
                    },
                  ],
                },
                taker: {
                  username: "bold_guy",
                  address: "0xf7184D6187885e92Ee290533f8E00521Ef3fFA2d",
                  imageUrl:
                    "https://blogs.airdropalert.com/wp-content/uploads/2021/12/Lazy-Lion-NFT-1005x1024.png",
                  collections: [
                    {
                      name: "Bored Ape Yacht Club",
                      imageUrl:
                        "https://lh3.googleusercontent.com/LqAzBhkWob1IQrODvz4QsFko4bfBGOezuQ2m_FLH-Ysyht0tfQoR2FnAVkgmseDOXY7l00gLQhO_HsoijzlZXTr5QkCzHvCVnz3jlp0=s120",
                      isVerified: !0,
                    },
                    {
                      name: "Doodles",
                      imageUrl:
                        "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
                      isVerified: !0,
                    },
                  ],
                },
                timestamp: "2022-02-21T07:36:17Z",
                swapId: null,
                type: "DIRECT_DEAL",
              },
            ],
          },
          "/api/mock/singleTrade": {
            data: [
              {
                creator: {
                  address: "0x39F7fc333C56D8b8a42F55EC9212C99F07DcbC91",
                  imageUrl:
                    "https://blogs.airdropalert.com/wp-content/uploads/2021/12/Lazy-Lion-NFT-1005x1024.png",
                },
                taker: {
                  address: "0xf7184D6187885e92Ee290533f8E00521Ef3fFA2d",
                  imageUrl:
                    "https://itp.live/cloud/2021/12/14/SH2a0coo-nftmonkey_2.png",
                },
                timestamp: "2022-02-21T07:36:17Z",
                swapId: null,
                type: "DIRECT_DEAL",
                collections: [
                  {
                    name: "Bored Ape Yacht Club",
                    imageUrl:
                      "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s0",
                    isVerified: !0,
                  },
                  {
                    name: "Doodles",
                    imageUrl:
                      "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
                    isVerified: !0,
                  },
                ],
              },
            ],
          },
          "/api/mock/singleTrade/detail": {
            data: [
              {
                maker: {
                  collections: [
                    {
                      name: "Bored Ape Yacht Club",
                      imageUrl:
                        "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s0",
                      isVerified: !0,
                      tokenId: "#7894",
                      tokenImageURL:
                        "https://lh3.googleusercontent.com/PmEaLtImJTLlgbJKgYenuMAo6e4UTM791ckWPx_zPixAEX6tDzcf5toRwYaRcXzY70W32JEgQjK14MFZZW16lZnbjEwHYN8kAI3GXQ=w60",
                      amount: "0",
                      isCurrency: !1,
                    },
                    {
                      name: "Bored Ape Yacht Club",
                      imageUrl:
                        "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s0",
                      isVerified: !0,
                      tokenId: "#7894",
                      tokenImageURL:
                        "https://lh3.googleusercontent.com/PmEaLtImJTLlgbJKgYenuMAo6e4UTM791ckWPx_zPixAEX6tDzcf5toRwYaRcXzY70W32JEgQjK14MFZZW16lZnbjEwHYN8kAI3GXQ=w60",
                      amount: "0",
                      isCurrency: !1,
                    },
                    {
                      name: "Bored Ape Yacht Club 1155",
                      imageUrl:
                        "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s0",
                      isVerified: !1,
                      tokenId: "#7894",
                      tokenImageURL:
                        "https://lh3.googleusercontent.com/PmEaLtImJTLlgbJKgYenuMAo6e4UTM791ckWPx_zPixAEX6tDzcf5toRwYaRcXzY70W32JEgQjK14MFZZW16lZnbjEwHYN8kAI3GXQ=w60",
                      amount: "8",
                      isCurrency: !1,
                    },
                    {
                      name: "Ethereum",
                      imageUrl:
                        "https://m.media-amazon.com/images/I/51fqZW7YPfL._AC_SX425_.jpg",
                      isVerified: !0,
                      tokenId: null,
                      tokenImageURL:
                        "https://lh3.googleusercontent.com/PmEaLtImJTLlgbJKgYenuMAo6e4UTM791ckWPx_zPixAEX6tDzcf5toRwYaRcXzY70W32JEgQjK14MFZZW16lZnbjEwHYN8kAI3GXQ=w60",
                      amount: "100 ETH",
                      isCurrency: !0,
                    },
                  ],
                  address: "0x39F7fc333C56D8b8a42F55EC9212C99F07DcbC91",
                },
                taker: {
                  collections: [
                    {
                      name: "Bored Ape Yacht Club",
                      imageUrl:
                        "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s0",
                      isVerified: !0,
                      tokenId: "#7894",
                      tokenImageURL:
                        "https://lh3.googleusercontent.com/PmEaLtImJTLlgbJKgYenuMAo6e4UTM791ckWPx_zPixAEX6tDzcf5toRwYaRcXzY70W32JEgQjK14MFZZW16lZnbjEwHYN8kAI3GXQ=w60",
                      amount: "0",
                      isCurrency: !1,
                    },
                    {
                      name: "Bored Ape Yacht Club",
                      imageUrl:
                        "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s0",
                      isVerified: !0,
                      tokenId: "#7894",
                      tokenImageURL:
                        "https://lh3.googleusercontent.com/PmEaLtImJTLlgbJKgYenuMAo6e4UTM791ckWPx_zPixAEX6tDzcf5toRwYaRcXzY70W32JEgQjK14MFZZW16lZnbjEwHYN8kAI3GXQ=w60",
                      amount: "0",
                      isCurrency: !1,
                    },
                    {
                      name: "Bored Ape Yacht Club 1155",
                      imageUrl:
                        "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s0",
                      isVerified: !0,
                      tokenId: "#7894",
                      tokenImageURL:
                        "https://lh3.googleusercontent.com/PmEaLtImJTLlgbJKgYenuMAo6e4UTM791ckWPx_zPixAEX6tDzcf5toRwYaRcXzY70W32JEgQjK14MFZZW16lZnbjEwHYN8kAI3GXQ=w60",
                      amount: "8",
                      isCurrency: !1,
                    },
                    {
                      name: "Ethereum",
                      imageUrl:
                        "https://m.media-amazon.com/images/I/51fqZW7YPfL._AC_SX425_.jpg",
                      isVerified: !0,
                      tokenId: null,
                      tokenImageURL:
                        "https://lh3.googleusercontent.com/PmEaLtImJTLlgbJKgYenuMAo6e4UTM791ckWPx_zPixAEX6tDzcf5toRwYaRcXzY70W32JEgQjK14MFZZW16lZnbjEwHYN8kAI3GXQ=w60",
                      amount: "100 ETH",
                      isCurrency: !0,
                    },
                  ],
                  address: "0xf7184D6187885e92Ee290533f8E00521Ef3fFA2d",
                },
                status: 0,
              },
            ],
          },
          "/api/mock/faq/accordion": {
            data: [
              {
                title: "Lorem ipsum dolor sit amet?",
                detail:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              },
              {
                title: "Lorem ipsum dolor sit amet?",
                detail:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              },
              {
                title: "Lorem ipsum dolor sit amet?",
                detail:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              },
              {
                title: "Lorem ipsum dolor sit amet?",
                detail:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              },
              {
                title: "Lorem ipsum dolor sit amet?",
                detail:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              },
              {
                title: "Lorem ipsum dolor sit amet?",
                detail:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              },
              {
                title: "Lorem ipsum dolor sit amet?",
                detail:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              },
            ],
          },
          "/api/mock/collectibles/top": {
            data: [
              {
                imgSrc: "https://images.wsj.net/im-491399?width=800&height=800",
                name: "Bored Ape Yacht Club",
                price: "24k ETH",
              },
              {
                imgSrc: "https://images.wsj.net/im-491399?width=800&height=800",
                name: "CyberKongz",
                price: "12k ETH",
              },
              {
                imgSrc: "https://images.wsj.net/im-491399?width=800&height=800",
                name: "Doodles",
                price: "5.5k ETH",
              },
              {
                imgSrc: "https://images.wsj.net/im-491399?width=800&height=800",
                name: "Mutant Ape Yacht Club",
                price: "5k ETH",
              },
              {
                imgSrc: "https://images.wsj.net/im-491399?width=800&height=800",
                name: "Invisible Friends",
                price: "2k ETH",
              },
            ],
          },
          "/api/mock/favouritesCollectors": {
            data: [
              {
                username: "@the_mastermaind",
                address: "0x07B4dCe021c66e25640EC56F529A64cCA88633E6",
                imageUrl:
                  "https://lh3.googleusercontent.com/lNG3A8G2rfVdHKu2ArsNENWDVXwBsNrLiUZLphY2BNFKBqoodSHMdDKf7kUh0HaJrE21ul_ujN_57yTpQPu_9tflMOzeDmRJSMdvJA=w600",
                isVerified: 0,
                isNFT: 1,
                isFavourite: 1,
                isRegistered: 1,
              },
              {
                username: "@pransky",
                address: "0xD387A6E4e84a6C86bd90C158C6028A58CC8Ac459",
                imageUrl:
                  "https://lh3.googleusercontent.com/TGQuK5B46NboEXf3mQdjnOyh3Co6kesCvLGWtNTBte6SmJBqBPfxNzkLJrncPZStBr8D5eaE8CpGpuIZ7QZX8Fv_5bufJ_Wo8ItvgA=s96",
                isVerified: 0,
                isNFT: 0,
                isFavourite: 1,
                isRegistered: 1,
              },
              {
                username: "@prettynfts",
                address: "0x39F7fc333C56D8b8a42F55EC9212C99F07DcbC91",
                imageUrl:
                  "https://lh3.googleusercontent.com/nJe1T4MmoJ_iGdsn7h20X03brYglYuAin8zSMz_-_A0AYdxW5hEP6XZfd3Lkj-RGOKkKvgT2cPjDSThyw9sIrZ8GZX-7_cPGZHAHJg=w308",
                isVerified: 0,
                isNFT: 1,
                isFavourite: 1,
                isRegistered: 1,
              },
              {
                username: "@marco",
                address: "0xC803a8BaEb83aaeC5aDE5093FB034b6b2Fa13e3d",
                imageUrl:
                  "https://res.cloudinary.com/nfttrader-image-host/image/upload/v1649686392/06_xs5bjd.svg",
                isVerified: 0,
                isNFT: 0,
                isFavourite: 1,
                isRegistered: 1,
              },
              {
                username: "@genious124",
                address: "0xd5bd3639979FeB70B1eCFEB4796e7ba067C7A89F",
                imageUrl:
                  "https://res.cloudinary.com/nfttrader-image-host/image/upload/v1649686394/11_hjy4q6.svg",
                isVerified: 0,
                isNFT: 0,
                isFavourite: 1,
                isRegistered: 1,
              },
            ],
          },
          "/api/mock/pastCollectors": {
            data: [
              {
                username: "@magnus",
                address: "0x6610910904D10ec9354beA3433f0BA08c672e5c3",
                imageUrl:
                  "https://res.cloudinary.com/nfttrader-image-host/image/upload/v1649686396/18_mmg5g8.svg",
                isVerified: 0,
                isNFT: 0,
                isFavourite: 0,
                isRegistered: 1,
              },
              {
                username: "@magnus83",
                address: "0xd1AaDa9CaB6e4F1e30e1aea0EfCE3bb0Fe33f554",
                imageUrl:
                  "https://lh3.googleusercontent.com/gozI54f8B6UxVkhI3_F68iTrwlcTRJYc1s_7lGe6hQFbnOev7wVzxOd4z9RxJs5okvdlMqUfS3DUBxixK-Z-lvoGWuYw-jfs6lVst0Q=w308",
                isVerified: 0,
                isNFT: 1,
                isFavourite: 0,
                isRegistered: 1,
              },
              {
                username: "@macheneso",
                address: "0x8C4752c5116E4CCA8DEaC01Ad8773f75a5E26268",
                imageUrl:
                  "https://lh3.googleusercontent.com/DWlZq8EKNtDt3sM1tfByVe5rolmpagYt3D76TRRySSrT5PbTYn_47Cgv64aTeAO_3kYntq9SEyJT_YUZVbgQvCuU7Yt7X4zvjv3z=w308",
                isVerified: 0,
                isNFT: 0,
                isFavourite: 0,
                isRegistered: 1,
              },
              {
                username: "@paratta",
                address: "0xAfCEDdC6EC666E22d3e7C5fBCeD33D6A9635D21D",
                imageUrl:
                  "https://lh3.googleusercontent.com/FRnlWx5imjOJm4OHODCbi_LzzpGxAGnXGduQCoEDvCQfDwGZTFJ7FG-fz7D5z0MKSqCPNtGMpRCEiB8zeVymYVKI0EKu7JXRV9jeIlA=w308",
                isVerified: 0,
                isNFT: 1,
                isFavourite: 0,
                isRegistered: 1,
              },
              {
                username: "@the_genesys",
                address: "0xE0502F1F1392efDb4582014C0CADdeC9B6f0469a",
                imageUrl:
                  "https://lh3.googleusercontent.com/vxPRqRqF5XXXiKcY2WmySxPph8n8DIT4-9lUcGPOOf5FDxzODslqcSy5kr5gt8gEI6c20fDmWTMi9CH86GlPo5wuTMbiuFmCPV2q=w308",
                isVerified: 0,
                isNFT: 0,
                isFavourite: 0,
                isRegistered: 1,
              },
            ],
          },
          "/api/mock/searchCollectors": {
            data: [
              {
                username: "@magnus",
                address: "0x6610910904D10ec9354beA3433f0BA08c672e5c3",
                imageUrl:
                  "https://res.cloudinary.com/nfttrader-image-host/image/upload/v1649686396/18_mmg5g8.svg",
                isVerified: 0,
                isNFT: 0,
                isFavourite: 0,
                isRegistered: 1,
              },
              {
                username: "@magnus83",
                address: "0xd1AaDa9CaB6e4F1e30e1aea0EfCE3bb0Fe33f554",
                imageUrl:
                  "https://lh3.googleusercontent.com/gozI54f8B6UxVkhI3_F68iTrwlcTRJYc1s_7lGe6hQFbnOev7wVzxOd4z9RxJs5okvdlMqUfS3DUBxixK-Z-lvoGWuYw-jfs6lVst0Q=w308",
                isVerified: 0,
                isNFT: 1,
                isFavourite: 1,
                isRegistered: 1,
              },
              {
                username: "@macheneso",
                address: "0x8C4752c5116E4CCA8DEaC01Ad8773f75a5E26268",
                imageUrl:
                  "https://lh3.googleusercontent.com/DWlZq8EKNtDt3sM1tfByVe5rolmpagYt3D76TRRySSrT5PbTYn_47Cgv64aTeAO_3kYntq9SEyJT_YUZVbgQvCuU7Yt7X4zvjv3z=w308",
                isVerified: 0,
                isNFT: 0,
                isFavourite: 0,
                isRegistered: 1,
              },
              {
                username: "@paratta",
                address: "0xAfCEDdC6EC666E22d3e7C5fBCeD33D6A9635D21D",
                imageUrl:
                  "https://lh3.googleusercontent.com/FRnlWx5imjOJm4OHODCbi_LzzpGxAGnXGduQCoEDvCQfDwGZTFJ7FG-fz7D5z0MKSqCPNtGMpRCEiB8zeVymYVKI0EKu7JXRV9jeIlA=w308",
                isVerified: 0,
                isNFT: 1,
                isFavourite: 1,
                isRegistered: 1,
              },
              {
                username: "@the_genesys",
                address: "0xE0502F1F1392efDb4582014C0CADdeC9B6f0469a",
                imageUrl:
                  "https://lh3.googleusercontent.com/vxPRqRqF5XXXiKcY2WmySxPph8n8DIT4-9lUcGPOOf5FDxzODslqcSy5kr5gt8gEI6c20fDmWTMi9CH86GlPo5wuTMbiuFmCPV2q=w308",
                isVerified: 0,
                isNFT: 0,
                isFavourite: 0,
                isRegistered: 1,
              },
              {
                username: "",
                address: "0xfa502F1F1392efDb4582014C0CADdeC9B6f0469a",
                imageUrl: null,
                isVerified: 0,
                isNFT: 0,
                isFavourite: 0,
                isRegistered: 1,
              },
              {
                username: "",
                address: "0xaa502F1F1392efDb4582014C0CADdeC9B2f0469b",
                imageUrl: null,
                isVerified: 0,
                isNFT: 0,
                isFavourite: 0,
                isRegistered: 0,
              },
            ],
          },
          "/api/mock/searchCollections": {
            data: [
              {
                name: "World of Women Galaxy",
                statusVerification: 1,
                address: "0xf61f24c2d93bf2de187546b14425bf631f28d6dc",
                imageUrl:
                  "https://lh3.googleusercontent.com/hP4JJhiY5yXu1mCvNycTke2O_xbtgIFfkLTjfT7C9TNKinkGpP2COikt7cwn0xqzoATRNC21wsiwy_Fe-MQ3PPTgRjkbbCfJf__L=s130",
                networkId: 1,
                abi: [],
                type: "ERC721",
                symbol: "",
              },
              {
                name: "Azuki",
                statusVerification: 1,
                address: "0xed5af388653567af2f388e6224dc7c4b3241c544",
                imageUrl:
                  "https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s0",
                networkId: 1,
                abi: [],
                type: "ERC1155",
                symbol: "",
              },
              {
                name: "Bored Ape Yacht Club",
                statusVerification: 1,
                address: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
                imageUrl:
                  "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s130",
                networkId: 1,
                abi: [],
                type: "ERC721",
                symbol: "",
              },
              {
                name: "Mutant Ape Tacht Club",
                statusVerification: 1,
                address: "0x60e4d786628fea6478f785a6d7e704777c86a7c6",
                imageUrl:
                  "https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s130",
                networkId: 1,
                abi: [],
                type: "ERC721",
                symbol: "",
              },
              {
                name: "CyberKongz",
                statusVerification: 1,
                address: "0x57a204aa1042f6e66dd7730813f4024114d74f37",
                imageUrl:
                  "https://lh3.googleusercontent.com/LIpf9z6Ux8uxn69auBME9FCTXpXqSYFo8ZLO1GaM8T7S3hiKScHaClXe0ZdhTv5br6FE2g5i-J5SobhKFsYfe6CIMCv-UfnrlYFWOM4=s130",
                networkId: 1,
                abi: [],
                type: "ERC721",
                symbol: "",
              },
              {
                name: "Impostor Genesis Aliens",
                statusVerification: 1,
                address: "0x3110ef5f612208724ca51f5761a69081809f03b7",
                imageUrl:
                  "https://lh3.googleusercontent.com/oyEO1RajjrJuCYtbXX9Oa3FhoRvX5BO_TkFc8PTUkN5egJwFG2mlM0lRl7zuOvBj_HciCY35D4exJm0b3DZya6qxpyhk0aBN7oCH=s130",
                networkId: 1,
                abi: [],
                type: "ERC721",
                symbol: "",
              },
              {
                name: "CryptoPunks",
                statusVerification: 1,
                address: "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
                imageUrl:
                  "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s130",
                networkId: 1,
                abi: [],
                type: "ERC721",
                symbol: "",
              },
              {
                name: "ZombieClub Token",
                statusVerification: 1,
                address: "0x9c80777cae192e5031c38a0d951c55730ecc3f5e",
                imageUrl:
                  "https://lh3.googleusercontent.com/fIMi-xohZrCuA16mfi4ZbP013HbTkz-p6bkLraFtJPved2gBDovkQa91LmwULp0tUX2RpjUYl4aYjcTC2AQyt2q8TERofZsH39kx=s130",
                networkId: 1,
                abi: [],
                type: "ERC721",
                symbol: "",
              },
              {
                name: "Trippy Toadz NFT",
                statusVerification: 1,
                address: "0x19cb5b009bdad0dad0404dd860b0bea75465e678",
                imageUrl:
                  "https://lh3.googleusercontent.com/mhHqco_bu5oRx1TftVg36aztvlsk44FT_RSzHv0MC0erh6_jwJSjdA-dvZumhTLaBo8-HDzTh5xVRGVExLeNbBK4oYK3N9xJxR2CHg=s130",
                networkId: 1,
                abi: [],
                type: "ERC721",
                symbol: "",
              },
              {
                name: "alien frens",
                statusVerification: 1,
                address: "0x123b30e25973fecd8354dd5f41cc45a3065ef88c",
                imageUrl:
                  "https://lh3.googleusercontent.com/_zidXBb2QsMBD6OYdjED63tczeXDUr1ah7zvhSSLHQjU4BF-H-lUexkLJ76_ahmbkkItEiH738jVPG88DOFVdt4GX377cvNNgCyzFT4=s130",
                networkId: 1,
                abi: [],
                type: "ERC721",
                symbol: "",
              },
            ],
          },
          "/api/mock/counterparty": {
            data: [
              {
                username: "@macheneso",
                address: "0x8C4752c5116E4CCA8DEaC01Ad8773f75a5E26268",
                avatar: {
                  imageUrl:
                    "https://lh3.googleusercontent.com/DWlZq8EKNtDt3sM1tfByVe5rolmpagYt3D76TRRySSrT5PbTYn_47Cgv64aTeAO_3kYntq9SEyJT_YUZVbgQvCuU7Yt7X4zvjv3z=w308",
                  isVerified: 0,
                  isNFT: 0,
                },
                isFavourite: 0,
                isRegistered: 1,
              },
            ],
          },
          "/api/mock/ournumbers": {
            data: [
              { label: "Daily Volume", value: "123.43 ETH" },
              { label: "Total Volume", value: "56k ETH" },
              { label: "Swapped", value: "25k NFTs" },
              { label: "Lorem ipsum dolor", value: "56k ETH" },
              { label: "Amet est consecutir", value: "56k ETH" },
            ],
          },
          "/api/mock/nft/bubbles": {
            data: [
              {
                src: "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/homepage/1.png",
                sizes: { "2xl": 117, xl: 117, lg: 100, md: 100, sm: 72 },
                classes: "Bubble",
              },
              {
                src: [
                  "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/homepage/2.png",
                  "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/homepage/3.png",
                ],
                time: 3,
                sizes: 278,
                classes: "Bubble",
              },
              {
                src: [
                  "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/homepage/4.png",
                  "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/homepage/5.gif",
                ],
                time: 4,
                sizes: { "2xl": 170, xl: 170, lg: 170, md: 170, sm: 90 },
                classes: "Bubble",
              },
              {
                src: [
                  "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/homepage/6.png",
                  "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/homepage/7.png",
                ],
                time: 3,
                sizes: 160,
                classes: "Bubble",
              },
              {
                src: "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/homepage/8.png",
                sizes: 278,
                classes: "Bubble",
              },
              {
                src: [
                  "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/homepage/9.png",
                  "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/homepage/10.png",
                ],
                time: 6,
                sizes: { "2xl": 203, xl: 203, lg: 203, md: 150, sm: 100 },
                classes: "Bubble",
              },
              {
                src: [
                  "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/homepage/11.gif",
                  "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/homepage/12.png",
                ],
                time: 3,
                sizes: { "2xl": 309, xl: 309, lg: 250, md: 230, sm: 140 },
                classes: "Bubble",
              },
              {
                src: [
                  "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/homepage/13.png",
                  "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/homepage/14.png",
                ],
                time: 4,
                sizes: 235,
                classes: "Bubble",
              },
              {
                src: "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/homepage/15.png",
                sizes: 118,
                classes: "Bubble",
              },
              {
                src: [
                  "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/homepage/16.png",
                  "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/homepage/17.png",
                ],
                time: 3,
                sizes: 150,
                classes: "Bubble",
              },
              {
                src: [
                  "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/homepage/18.jpg",
                  "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/homepage/19.png",
                ],
                time: 5,
                sizes: 214,
                classes: "Bubble",
              },
            ],
          },
          "/api/mock/findCollection": {
            data: [
              {
                id: "0xdbd4264248e2f814838702e0cb3015ac3a7157a1",
                type: "ERC721",
                owner: "0x83db44123e76503203fdf83d2be58be60c15b894",
                name: "TradeSquad",
                symbol: "TS",
                features: ["APPROVE_FOR_ALL"],
                supportsLazyMint: !1,
                minters: [],
                meta: {
                  name: "TradeSquad",
                  description:
                    "TradeSquads is an Ethereum based collectible game developed with care by the NFT Trader team. Because we love everything about NFTs and want to create some fun around them, the team has developed this unique decentralized game. Our goal by adding this gamification system is to extend the potential of the Trade Squads NFTs with added utility for the future.\n\nAs a tribute to blockchain technology and the P2P protocol on which NFT Trader is based, this batch will take the name as the \u201cAtomic Collection.\"\n\nThe key fascinating feature for this collection is represented by the element for their randomness. Each NFT belonging to this collection will be mintable and can take on a set of characteristics that will make it truly unique and therefore increase its intrinsic value.\n\nThe NFT Trader team will also not know the nature of each NFT Trade Squads that will be generated. They're mintable here: https://www.nfttrader.io/tradesquads/marketplace/mint",
                  image: {
                    url: {
                      ORIGINAL:
                        "https://lh3.googleusercontent.com/LqAzBhkWob1IQrODvz4QsFko4bfBGOezuQ2m_FLH-Ysyht0tfQoR2FnAVkgmseDOXY7l00gLQhO_HsoijzlZXTr5QkCzHvCVnz3jlp0=s120",
                    },
                    meta: {
                      ORIGINAL: { type: "image/png", width: 120, height: 120 },
                    },
                  },
                  external_link: "https://www.nfttrader.io/",
                  seller_fee_basis_points: 250,
                  fee_recipient: "0x4bc2f1e9bf517cd944e8ffe0047c80c5b574d532",
                },
              },
            ],
          },
          "/api/mock/assets/tokens": {
            data: [
              {
                name: "DAI",
                symbol: "DAI",
                address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
                type: "ERC20",
                imageUrl:
                  "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png",
                networkId: 1,
                statusVerification: 0,
                abi: [
                  {
                    name: "name",
                    type: "function",
                    inputs: [],
                    outputs: [{ name: "", type: "string" }],
                    payable: !1,
                    constant: !0,
                    stateMutability: "view",
                  },
                  {
                    name: "approve",
                    type: "function",
                    inputs: [
                      { name: "guy", type: "address" },
                      { name: "wad", type: "uint256" },
                    ],
                    outputs: [{ name: "", type: "bool" }],
                    payable: !1,
                    constant: !1,
                    stateMutability: "nonpayable",
                  },
                  {
                    name: "totalSupply",
                    type: "function",
                    inputs: [],
                    outputs: [{ name: "", type: "uint256" }],
                    payable: !1,
                    constant: !0,
                    stateMutability: "view",
                  },
                  {
                    name: "transferFrom",
                    type: "function",
                    inputs: [
                      { name: "src", type: "address" },
                      { name: "dst", type: "address" },
                      { name: "wad", type: "uint256" },
                    ],
                    outputs: [{ name: "", type: "bool" }],
                    payable: !1,
                    constant: !1,
                    stateMutability: "nonpayable",
                  },
                  {
                    name: "withdraw",
                    type: "function",
                    inputs: [{ name: "wad", type: "uint256" }],
                    outputs: [],
                    payable: !1,
                    constant: !1,
                    stateMutability: "nonpayable",
                  },
                  {
                    name: "decimals",
                    type: "function",
                    inputs: [],
                    outputs: [{ name: "", type: "uint8" }],
                    payable: !1,
                    constant: !0,
                    stateMutability: "view",
                  },
                  {
                    name: "balanceOf",
                    type: "function",
                    inputs: [{ name: "", type: "address" }],
                    outputs: [{ name: "", type: "uint256" }],
                    payable: !1,
                    constant: !0,
                    stateMutability: "view",
                  },
                  {
                    name: "symbol",
                    type: "function",
                    inputs: [],
                    outputs: [{ name: "", type: "string" }],
                    payable: !1,
                    constant: !0,
                    stateMutability: "view",
                  },
                  {
                    name: "transfer",
                    type: "function",
                    inputs: [
                      { name: "dst", type: "address" },
                      { name: "wad", type: "uint256" },
                    ],
                    outputs: [{ name: "", type: "bool" }],
                    payable: !1,
                    constant: !1,
                    stateMutability: "nonpayable",
                  },
                  {
                    name: "deposit",
                    type: "function",
                    inputs: [],
                    outputs: [],
                    payable: !0,
                    constant: !1,
                    stateMutability: "payable",
                  },
                  {
                    name: "allowance",
                    type: "function",
                    inputs: [
                      { name: "", type: "address" },
                      { name: "", type: "address" },
                    ],
                    outputs: [{ name: "", type: "uint256" }],
                    payable: !1,
                    constant: !0,
                    stateMutability: "view",
                  },
                  { type: "fallback", payable: !0, stateMutability: "payable" },
                  {
                    name: "Approval",
                    type: "event",
                    inputs: [
                      { name: "src", type: "address", indexed: !0 },
                      { name: "guy", type: "address", indexed: !0 },
                      { name: "wad", type: "uint256", indexed: !1 },
                    ],
                    anonymous: !1,
                  },
                  {
                    name: "Transfer",
                    type: "event",
                    inputs: [
                      { name: "src", type: "address", indexed: !0 },
                      { name: "dst", type: "address", indexed: !0 },
                      { name: "wad", type: "uint256", indexed: !1 },
                    ],
                    anonymous: !1,
                  },
                  {
                    name: "Deposit",
                    type: "event",
                    inputs: [
                      { name: "dst", type: "address", indexed: !0 },
                      { name: "wad", type: "uint256", indexed: !1 },
                    ],
                    anonymous: !1,
                  },
                  {
                    name: "Withdrawal",
                    type: "event",
                    inputs: [
                      { name: "src", type: "address", indexed: !0 },
                      { name: "wad", type: "uint256", indexed: !1 },
                    ],
                    anonymous: !1,
                  },
                ],
              },
              {
                name: "Wrapped Ethereum",
                symbol: "WETH",
                address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                type: "ERC20",
                imageUrl:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQw7Buq_PtFiiEXSDd2uAXgwUGC2JovoGY1zxW8nTI3g&s",
                networkId: 1,
                statusVerification: 0,
                abi: [
                  {
                    name: "name",
                    type: "function",
                    inputs: [],
                    outputs: [{ name: "", type: "string" }],
                    payable: !1,
                    constant: !0,
                    stateMutability: "view",
                  },
                  {
                    name: "approve",
                    type: "function",
                    inputs: [
                      { name: "guy", type: "address" },
                      { name: "wad", type: "uint256" },
                    ],
                    outputs: [{ name: "", type: "bool" }],
                    payable: !1,
                    constant: !1,
                    stateMutability: "nonpayable",
                  },
                  {
                    name: "totalSupply",
                    type: "function",
                    inputs: [],
                    outputs: [{ name: "", type: "uint256" }],
                    payable: !1,
                    constant: !0,
                    stateMutability: "view",
                  },
                  {
                    name: "transferFrom",
                    type: "function",
                    inputs: [
                      { name: "src", type: "address" },
                      { name: "dst", type: "address" },
                      { name: "wad", type: "uint256" },
                    ],
                    outputs: [{ name: "", type: "bool" }],
                    payable: !1,
                    constant: !1,
                    stateMutability: "nonpayable",
                  },
                  {
                    name: "withdraw",
                    type: "function",
                    inputs: [{ name: "wad", type: "uint256" }],
                    outputs: [],
                    payable: !1,
                    constant: !1,
                    stateMutability: "nonpayable",
                  },
                  {
                    name: "decimals",
                    type: "function",
                    inputs: [],
                    outputs: [{ name: "", type: "uint8" }],
                    payable: !1,
                    constant: !0,
                    stateMutability: "view",
                  },
                  {
                    name: "balanceOf",
                    type: "function",
                    inputs: [{ name: "", type: "address" }],
                    outputs: [{ name: "", type: "uint256" }],
                    payable: !1,
                    constant: !0,
                    stateMutability: "view",
                  },
                  {
                    name: "symbol",
                    type: "function",
                    inputs: [],
                    outputs: [{ name: "", type: "string" }],
                    payable: !1,
                    constant: !0,
                    stateMutability: "view",
                  },
                  {
                    name: "transfer",
                    type: "function",
                    inputs: [
                      { name: "dst", type: "address" },
                      { name: "wad", type: "uint256" },
                    ],
                    outputs: [{ name: "", type: "bool" }],
                    payable: !1,
                    constant: !1,
                    stateMutability: "nonpayable",
                  },
                  {
                    name: "deposit",
                    type: "function",
                    inputs: [],
                    outputs: [],
                    payable: !0,
                    constant: !1,
                    stateMutability: "payable",
                  },
                  {
                    name: "allowance",
                    type: "function",
                    inputs: [
                      { name: "", type: "address" },
                      { name: "", type: "address" },
                    ],
                    outputs: [{ name: "", type: "uint256" }],
                    payable: !1,
                    constant: !0,
                    stateMutability: "view",
                  },
                  { type: "fallback", payable: !0, stateMutability: "payable" },
                  {
                    name: "Approval",
                    type: "event",
                    inputs: [
                      { name: "src", type: "address", indexed: !0 },
                      { name: "guy", type: "address", indexed: !0 },
                      { name: "wad", type: "uint256", indexed: !1 },
                    ],
                    anonymous: !1,
                  },
                  {
                    name: "Transfer",
                    type: "event",
                    inputs: [
                      { name: "src", type: "address", indexed: !0 },
                      { name: "dst", type: "address", indexed: !0 },
                      { name: "wad", type: "uint256", indexed: !1 },
                    ],
                    anonymous: !1,
                  },
                  {
                    name: "Deposit",
                    type: "event",
                    inputs: [
                      { name: "dst", type: "address", indexed: !0 },
                      { name: "wad", type: "uint256", indexed: !1 },
                    ],
                    anonymous: !1,
                  },
                  {
                    name: "Withdrawal",
                    type: "event",
                    inputs: [
                      { name: "src", type: "address", indexed: !0 },
                      { name: "wad", type: "uint256", indexed: !1 },
                    ],
                    anonymous: !1,
                  },
                ],
              },
            ],
          },
        },
        z = function (e) {
          return v[e];
        },
        j = a(13713),
        k = a(10327),
        E = a(4632),
        A = a(25900),
        T = a(16724),
        D = a.n(T),
        _ = a(47777),
        F = a(75657),
        O = function (e) {
          var t = e.container,
            a = (0, i.useRef)(null),
            o = function (e, t) {
              var a = e.getContext("2d"),
                s = (e.width = t.offsetWidth),
                i = (e.height = t.offsetHeight),
                o = 80,
                n = 1,
                l = 3,
                r = 18,
                c = 9.5 * Math.PI,
                m = o * (2 * l + n),
                d = new Array(o).fill(null).map(function (e, t) {
                  return {
                    a: (c / o) * t,
                    x: (2 * l + n) * t,
                    c: "rgb(45,0,247)",
                  };
                });
              !(function e() {
                (a.fillStyle = "#fff"),
                  a.fillRect(0, 0, s, i),
                  d.forEach(function (e) {
                    (e.a += (Math.PI / 180) * 4),
                      a.beginPath(),
                      a.fillRect(
                        e.x - m / 2 + s / 2,
                        Math.sin(e.a) * r + i / 2,
                        2,
                        2
                      ),
                      a.fillRect(
                        e.x - m / 2 + s / 2,
                        Math.sin(e.a) * r +
                          i / (window.innerWidth < 800 ? 2.2 : 2.1),
                        2,
                        2
                      ),
                      a.closePath(),
                      (a.fillStyle = "rgb(45,0,247)"),
                      a.fill();
                  }),
                  requestAnimationFrame(e);
              })();
            };
          return (
            (0, i.useEffect)(function () {
              var e,
                s = document.getElementById(t),
                i = setTimeout(function () {
                  o(a.current, s);
                }, 200),
                n = function () {
                  e && clearTimeout(e),
                    s &&
                      (e = setTimeout(function () {
                        (a.current.width = s.offsetWidth),
                          (a.current.height = s.offsetHeight),
                          (a.current.getContext("2d").fillStyle = "#fff"),
                          a.current
                            .getContext("2d")
                            .fillRect(0, 0, s.offsetWidth, s.offsetHeight),
                          o(a.current, s);
                      }, 200));
                };
              return (
                window.addEventListener("resize", n),
                function () {
                  clearTimeout(i), window.removeEventListener("resize", n);
                }
              );
            }, []),
            (0, s.jsx)(s.Fragment, {
              children: (0, s.jsx)("canvas", {
                className: "absolute top-0 left-0",
                ref: a,
              }),
            })
          );
        },
        Q = a(8138),
        V = a(26801),
        U = a.n(V),
        R = a(79327),
        L = a(62044),
        I = function () {
          var e,
            t = (0, L.Z)("common").t,
            a = (0, R.Z)(),
            o = function (s) {
              var i,
                n,
                l = document.getElementById("status-".concat(a));
              0 === s
                ? ((i = document.getElementById("icon-success-".concat(a))),
                  (n = document.getElementById("icon-banned-".concat(a))))
                : 1 === s
                ? ((i = document.getElementById("icon-verify-".concat(a))),
                  (n = document.getElementById("icon-success-".concat(a))))
                : ((i = document.getElementById("icon-banned-".concat(a))),
                  (n = document.getElementById("icon-verify-".concat(a))));
              var r =
                null === n || void 0 === n
                  ? void 0
                  : n.animate([{ opacity: 0 }], {
                      duration: 500,
                      fill: "forwards",
                    });
              r &&
                (r.onfinish = function () {
                  (n.style.display = "none"),
                    (i.style.display = "block"),
                    (i.animate([{ opacity: 1 }], {
                      duration: 500,
                      fill: "forwards",
                    }).onfinish = function () {
                      (l.innerText = t(
                        0 === s
                          ? "verifiedLabel"
                          : 1 === s
                          ? "notVerifiedLabel"
                          : "bannedLabel"
                      )),
                        e && clearTimeout(),
                        (e = setTimeout(function () {
                          o(2 === s ? 0 : s + 1);
                        }, 3500));
                    });
                });
            };
          return (
            (0, i.useEffect)(
              function () {
                o(1);
              },
              [a]
            ),
            (0, s.jsx)(s.Fragment, {
              children:
                a &&
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "absolute top-[90px] left-[90px] icon-container",
                      children: [
                        (0, s.jsx)("div", {
                          className: ""
                            .concat(U().verificationStatusIcon, " ")
                            .concat(U().verificationStatusIconSuccess),
                          id: "icon-success-".concat(a),
                        }),
                        (0, s.jsx)("div", {
                          className: ""
                            .concat(U().verificationStatusIcon, " ")
                            .concat(U().verificationStatusIconVerify),
                          id: "icon-verify-".concat(a),
                          style: { display: "none", opacity: 0 },
                        }),
                        (0, s.jsx)("div", {
                          className: ""
                            .concat(U().verificationStatusIcon, " ")
                            .concat(U().verificationStatusIconBanned),
                          id: "icon-banned-".concat(a),
                          style: { display: "none", opacity: 0 },
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "absolute bg-primary-dark-blue rounded-[100px] px-[20px] py-[8px] transition-all bottom-[220px] right-[90px]",
                      children: (0, s.jsx)("span", {
                        className: "text-lg font-semibold text-primary-white",
                        id: "status-".concat(a),
                        children: t("verifiedLabel"),
                      }),
                    }),
                  ],
                }),
            })
          );
        },
        B = a(45501),
        W = a(80998),
        N = "/_next/static/media/dune_logo.399c9743.png",
        q = a(50647),
        H = !0,
        G = function () {
          var e = (0, L.Z)("common").t,
            t = (0, y.T)(),
            a = (0, y.C)(function (e) {
              return e;
            }),
            c = a.trademodal,
            m = a.waccount,
            d = a.reportmodal,
            u = (0, i.useState)([]),
            v = u[0],
            T = u[1],
            V = (0, i.useState)([]),
            U = V[0],
            R = V[1],
            H = c.isOpen,
            G = d.isOpen,
            P = m.isConnected,
            Y = z("/api/mock/nft/bubbles").data,
            Z = (0, i.useRef)(null),
            J = (0, _.z)("HOMEPAGE_UL_IMAGES"),
            K = J.concat(J),
            S = function () {
              P
                ? (t((0, w.eV)("maker")),
                  t((0, w.r$)(!0)),
                  document.body.classList.add("no-scroll"))
                : t((0, j.$e)(!0));
            };
          return (
            (0, i.useEffect)(function () {
              (0, k.bf)((0, E.f)("getPlatformData", [1])).then(function (t) {
                var a = t.data[0],
                  s = a.swapAmount,
                  i = a.totalNtv,
                  o = a.dailyNtv,
                  n = a.totalNft,
                  l = a.topCollectionVolume;
                T([
                  { label: e("dailyVolumeLabel"), value: o },
                  { label: e("totalVolumeLabel"), value: i },
                  { label: e("swappedLabel"), value: "".concat(n, " NFTs") },
                  {
                    label: e("totalSwapLabel"),
                    value: "".concat(s, " ").concat(e("swapsLabel")),
                  },
                ]),
                  R(
                    l.map(function (e) {
                      var t = e.assetLogo,
                        a = e.name,
                        s = e.statusId;
                      return {
                        imgSrc: t,
                        name: a,
                        price: e.volumeLabel,
                        statusVerification: s,
                      };
                    })
                  );
              });
            }, []),
            (0, i.useEffect)(function () {
              var e = document.querySelector(":root"),
                t =
                  window.innerWidth >= 1024
                    ? { ulGap: 70, bubbleSize: 285 }
                    : window.innerWidth >= 768
                    ? {
                        ulGap: (window.innerWidth - 437.5) / 2,
                        bubbleSize: 175,
                      }
                    : { ulGap: (window.innerWidth - 250) / 2, bubbleSize: 100 };
              null === e ||
                void 0 === e ||
                e.style.setProperty("--home-ul-gap", "".concat(t.ulGap, "px")),
                null === e ||
                  void 0 === e ||
                  e.style.setProperty(
                    "--home-bubble-size",
                    "".concat(t.bubbleSize, "px")
                  );
              var a = null;
              window.addEventListener("resize", function () {
                a && clearTimeout(a),
                  (a = setTimeout(function () {
                    var t =
                      window.innerWidth >= 1024
                        ? { ulGap: 70, bubbleSize: 285 }
                        : window.innerWidth >= 768
                        ? {
                            ulGap: (window.innerWidth - 437.5) / 2,
                            bubbleSize: 175,
                          }
                        : {
                            ulGap: (window.innerWidth - 250) / 2,
                            bubbleSize: 100,
                          };
                    null === e ||
                      void 0 === e ||
                      e.style.setProperty(
                        "--home-ul-gap",
                        "".concat(t.ulGap, "px")
                      ),
                      null === e ||
                        void 0 === e ||
                        e.style.setProperty(
                          "--home-bubble-size",
                          "".concat(t.bubbleSize, "px")
                        );
                  }, 100));
              });
            }, []),
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)(B.Z, {}),
                (0, s.jsxs)(o.default, {
                  children: [
                    (0, s.jsx)("title", { children: e("titleLabel") }),
                    (0, s.jsx)(W.Z, {
                      metaTitle: e("titleLabel"),
                      metaDescription: e("metaDescriptionLabel"),
                      metaOgTitle: e("titleLabel"),
                      metaOgDescription: e("metaDescriptionLabel"),
                      metaOgImage:
                        "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/meta-logo.png",
                      metaOgUrl: "https://www.nfttrader.io/",
                      twitterImageCard:
                        "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/meta-logo.png",
                      twitterImage:
                        "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/meta-logo.png",
                      twitterUrl: "https://www.nfttrader.io/",
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
                      href: "#",//"/site.webmanifest",
                    }),
                  ],
                }),
                (0, s.jsx)(n.Z, {}),
                (0, s.jsxs)("main", {
                  children: [
                    (0, s.jsxs)("section", {
                      className:
                        "relative flex items-center justify-center w-full h-[464px] md:h-[768px] bg-primary-blue overflow-hidden",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "absolute top-0 w-[1195px] h-[1195px] rounded-full bg-primary-dark-blue shadow shadow-dark-shadow opacity-30 z-0",
                        }),
                        (0, s.jsx)("div", {
                          className: "absolute w-full h-full z-10",
                          children: Y.map(function (e, t) {
                            return (0,
                            s.jsx)(p, { src: e.src, time: e.time, sizes: e.sizes, className: e.classes, enableResetLoader: !0, floatingEffect: !1 }, t);
                          }),
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "flex flex-col items-center justify-center gap-8 z-30",
                          children: [
                            (0, s.jsx)("h1", {
                              className:
                                "w-[343px] drop-shadow shadow-dark-shadow text-gray-50 text-center text-3xl px-4 font-semibold sm:w-[500px] md:px-0 lg:text-5xl lg:w-[619px] lg:leading-[56px]",
                              children: e("mottoLabel"),
                            }),
                            (0, s.jsx)(r.Z, {
                              text: e("createTradeLabel"),
                              type: {
                                class: "primary",
                                icon: !1,
                                hasColoredBg: !0,
                              },
                              initialState: { state: "default" },
                              size: "large",
                              onClick: S,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("section", {
                      className: "w-full",
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "flex flex-col w-full justify-center gap-5 sm:gap-10 max-w-[1280px] h-full m-auto",
                          children: [
                            (0, s.jsxs)("div", {
                              className:
                                "flex flex-col items-center justify-center gap-5 lg:gap-0 px-5 pt-[40px] sm:px-20 md:pt-[80px] lg:pt-[20px]",
                              children: [
                                (0, s.jsx)("h1", {
                                  className:
                                    "lg:relative top-[65px] md:max-w-[416px] text-2xl lg:text-4xl font-semibold text-center text-primary-blue z-[1]",
                                  children: e("likeBossLabel"),
                                }),
                                (0, s.jsx)("p", {
                                  className:
                                    "block text-center text-sm rubik font-light sm:hidden",
                                  children: e("protocolOnChainLabel"),
                                }),
                                (0, s.jsxs)("div", {
                                  className:
                                    "self-stretch flex items-center justify-between",
                                  children: [
                                    (0, s.jsx)(p, {
                                      src: [
                                        "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/homepage/5.gif",
                                        "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/homepage/22.gif",
                                      ],
                                      time: 2,
                                      sizes: {
                                        "2xl": 352,
                                        xl: 300,
                                        lg: 250,
                                        md: 150,
                                        sm: 100,
                                      },
                                      enableResetLoader: !0,
                                    }),
                                    (0, s.jsxs)("div", {
                                      id: "sinewave-container",
                                      className:
                                        "flex justify-center items-center flex-1 relative self-stretch",
                                      children: [
                                        (0, s.jsx)(O, {
                                          container: "sinewave-container",
                                        }),
                                        (0, s.jsx)("img", {
                                          src: g,
                                          className:
                                            "NFTTraderProtocol relative -top-[3px] w-[56px] h-[56px] z-10",
                                        }),
                                        (0, s.jsx)("p", {
                                          className:
                                            "NFTTraderProtocol absolute top-[90px] md:top-[125px] lg:top-2/3 left-1/2 translate-y-[-50%] translate-x-[-50%] text-primary-blue text-xs text-center rubik w-full",
                                          children: e("protocolLabel"),
                                        }),
                                      ],
                                    }),
                                    (0, s.jsx)(p, {
                                      src: [
                                        "",
                                        "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/homepage/22.gif",
                                        "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/homepage/5.gif",
                                      ],
                                      time: 2,
                                      sizes: {
                                        "2xl": 352,
                                        xl: 300,
                                        lg: 250,
                                        md: 150,
                                        sm: 100,
                                      },
                                      enableResetLoader: !0,
                                    }),
                                  ],
                                }),
                                (0, s.jsx)("p", {
                                  className:
                                    "hidden sm:block bottom-[35px] text-center rubik text-base font-light md:max-w-[416px] lg:relative",
                                  children: e("protocolOnChainLabel"),
                                }),
                                (0, s.jsxs)("div", {
                                  className:
                                    "NFTTraderProtocol-mobile flex items-center justify-center gap-4",
                                  children: [
                                    (0, s.jsx)("img", {
                                      src: g,
                                      className: "w-[28px] h-[28px] z-10",
                                    }),
                                    (0, s.jsx)("p", {
                                      className:
                                        "text-primary-blue text-xs rubik font-regular",
                                      children: e("protocolLabel"),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "flex flex-col lg:flex-row items-stretch justify-between gap-10 pb-0 pt-[56px] px-5 sm:gap-20 sm:px-10 md:pb-[80px] lg:gap-10",
                              children: [
                                (0, s.jsxs)("div", {
                                  className:
                                    "flex-1 flex flex-col items-stretch justify-start",
                                  children: [
                                    (0, s.jsx)("h1", {
                                      className:
                                        "text-lg sm:text-2xl font-semibold text-primary-blue",
                                      children: e("top5CollectibleLabel"),
                                    }),
                                    (0, s.jsx)("ul", {
                                      className:
                                        "flex flex-col items-stretch justify-start mt-[32px]",
                                      children: (
                                        null === U || void 0 === U
                                          ? void 0
                                          : U.length
                                      )
                                        ? U.map(function (e, t) {
                                            return (0,
                                            s.jsxs)("li", { className: "flex items-center justify-between ".concat(t > 0 ? "mt-[32px] lg:mt-[28px]" : "", " h-12 sm:h-16"), children: [(0, s.jsxs)("div", { className: "flex items-center justify-start gap-4", children: [e.imgSrc && (0, s.jsx)(A.Z, { src: e.imgSrc, statusVerification: e.statusVerification, className: "w-[48px] h-[48px] md:w-[64px] md:h-[64px]", badgeClassName: "w-[16px] h-[16px] md:w-[24px] md:h-[24px]", showCollectionTooltip: !0, collection: { name: e.name, statusVerification: e.statusVerification, address: "", imageUrl: e.imgSrc, networkId: 1, abi: [], type: "ERC721", symbol: "", createdAt: null } }), (0, s.jsx)("p", { className: "text-sm sm:text-base text-primary-dark-blue font-semibold", children: e.name })] }), (0, s.jsx)("p", { className: "text-lg sm:text-3xl text-center text-primary-blue font-semibold", children: e.price })] }, t);
                                          })
                                        : null,
                                    }),
                                  ],
                                }),
                                (0, s.jsx)("div", {
                                  className:
                                    "w-full h-[1px] bg-primary-gray/40 my-[48px] sm:my-[24px] md:my-[0px] md:mx-[20px] lg:w-[1px] lg:h-[inherit]",
                                }),
                                (0, s.jsxs)("div", {
                                  className:
                                    "flex-1 flex flex-col mb-[50px] items-stretch justify-start",
                                  children: [
                                    (0, s.jsx)("h1", {
                                      className:
                                        "text-lg sm:text-2xl font-semibold text-primary-blue",
                                      children: e("numbersLabel"),
                                    }),
                                    (0, s.jsx)("ul", {
                                      className:
                                        "flex flex-col items-stretch justify-start mt-[32px]",
                                      children: (
                                        null === v || void 0 === v
                                          ? void 0
                                          : v.length
                                      )
                                        ? v.map(function (e, t) {
                                            return (0,
                                            s.jsxs)("li", { className: "flex items-center justify-between ".concat(t > 0 ? "mt-[32px] lg:mt-[28px]" : "", " lg:h-[63.5px]"), children: [(0, s.jsx)("p", { className: "text-sm sm:text-base text-primary-dark-blue font-semibold", children: e.label }), (0, s.jsx)("p", { className: "text-lg sm:text-3xl text-primary-blue font-semibold", children: e.value })] }, t);
                                          })
                                        : null,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "flex justify-center items-center w-full max-w-[1280px] mt-[15px] mb-[60px] m-[0] mx-[auto] px-[16px] lg:px-[48px]",
                          children: [
                            (0, s.jsx)("span", {
                              className: "rubik text-primary-blue",
                              children: (0, s.jsx)(Q.Z, {
                                text: e("looksDuneLabel"),
                                url:"#",// "https://dune.com/cryptuschrist/nft-trader-io",
                                isTargetBlank: !0,
                                weight: "font-regular",
                              }),
                            }),
                            (0, s.jsx)("img", {
                              src: N,
                              className: "ml-[10px] w-[24px] h-[auto]",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("section", {
                      className:
                        "flex flex-col justify-center w-full bg-primary-dark-blue py-[48px] lg:relative",
                      children: [
                        (0, s.jsx)("div", {
                          className: ""
                            .concat(D().momentsRow, " ")
                            .concat(
                              D().momentsRowSmall,
                              " w-full h-[64px] lg:hidden"
                            ),
                          style: { backgroundImage: "url(".concat(h, ")") },
                        }),
                        (0, s.jsx)("div", {
                          className: ""
                            .concat(D().momentsRow, " ")
                            .concat(
                              D().momentsRowBig,
                              " w-full h-[121px] hidden lg:block"
                            ),
                          style: { backgroundImage: "url(".concat(x, ")") },
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "flex flex-col justify-center items-center bg-primary-dark-blue lg:py-[15px] lg:w-[622px] lg:absolute lg:top-[50%] lg:left-[50%] lg:-translate-y-[50%] lg:-translate-x-[50%]",
                          children: [
                            (0, s.jsx)("span", {
                              className:
                                "text-2xl font-semibold text-center text-primary-white mt-[32px] lg:mt-[0]",
                              children: e("shareCommunityLabel"),
                            }),
                            (0, s.jsx)("span", {
                              className:
                                "rubik text-base font-light mt-[16px] text-primary-white",
                              children: e("configureDiscordLabel"),
                            }),
                            (0, s.jsx)(Q.Z, {
                              text: e("readMoreLabel"),
                              url: "#",//"https://docs.nfttrader.io/documentation/discord-bot",
                              isTargetBlank: !0,
                              isBlue: !1,
                              className: "text-base font-semibold mt-[16px]",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("section", {
                      className: "".concat(
                        D().verificationSection,
                        " w-full flex flex-col lg:pl-[40px] xl:pl-[80px] lg:flex-row lg:items-center lg:justify-center lg:h-[584px]"
                      ),
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "max-w-[1280px] w-full flex justify-between",
                          children: [
                            (0, s.jsxs)("div", {
                              className:
                                "flex flex-col pt-[48px] pb-[44px] px-[16.5px] text-left bg-[#f3f4f6] lg:w-[500px] sm:items-center lg:items-start lg:bg-[transparent]",
                              children: [
                                (0, s.jsx)("span", {
                                  className:
                                    "text-base text-primary-dark-blue font-semibold",
                                  children: e("freshEyesScamLabel"),
                                }),
                                (0, s.jsx)("span", {
                                  className:
                                    "text-primary-blue text-2xl font-semibold mt-[16px] lg:text-4xl lg:leading-[45px]",
                                  children: e("takeComfortLabel"),
                                }),
                                (0, s.jsx)("p", {
                                  className:
                                    "mt-[16px] rubik text-base font-light text-left sm:text-center lg:text-left",
                                  children: e("layerSecurityLabel"),
                                }),
                                (0, s.jsx)(r.Z, {
                                  text: e("discoverHowLabel"),
                                  type: {
                                    class: "primary",
                                    hasColoredBg: !1,
                                    icon: !1,
                                  },
                                  initialState: { state: "default" },
                                  size: "small",
                                  onClick: function () {
                                    // window.open(
                                    //   "https://docs.nfttrader.io/documentation/collection-verification-process",
                                    //   "_blank"
                                    // );
                                  },
                                  className: "mt-[40px] w-[172px] h-[52px]",
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "relative hidden lg:flex lg:w-[548px] lg:h-[400px]",
                              children: [
                                (0, s.jsx)("div", {
                                  className: "".concat(
                                    D().mascotteBaloonVerification
                                  ),
                                }),
                                (0, s.jsx)(I, {}),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: "".concat(
                            D().verificationMascotte,
                            " w-full flex relative h-[500px] pb-[80px]"
                          ),
                          children: (0, s.jsx)("div", {
                            className: "".concat(
                              D().mascotteBaloonVerificationMobile
                            ),
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsx)("section", {
                      className:
                        "w-full h-[536px] lg:h-[856px] bg-primary-yellow",
                      children: (0, s.jsxs)("div", {
                        className:
                          "relative w-full h-full bg-primary-blue lg:px-20 rounded-br-[88px] md:rounded-br-[176px] lg:rounded-br-[352px] overflow-hidden",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "absolute top-0 left-0 w-full h-[128px] bg-gradient-to-b from-black to-transparent opacity-30 z-0",
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "absolute bottom-0 left-0 w-full h-[128px] bg-gradient-to-t from-black to-transparent opacity-30 z-0",
                          }),
                          (0, s.jsxs)("div", {
                            className:
                              "flex flex-col lg:flex-row items-center lg:items-stretch justify-center lg:justify-between gap-5 lg:gap-10 w-full h-full max-w-[1280px] m-auto",
                            children: [
                              (0, s.jsx)("ul", {
                                ref: Z,
                                className: "".concat(
                                  D().animatedUl,
                                  " self-start flex flex-row lg:flex-col items-center justify-start"
                                ),
                                children: K.map(function (e, t) {
                                  return (0,
                                  s.jsx)("li", { className: "w-[100px] md:w-[175px] lg:w-[285px] h-[100px] md:h-[175px] lg:h-[285px]", children: (0, s.jsx)(p, { src: e, sizes: { "2xl": 285, xl: 285, lg: 285, md: 175, sm: 100 }, floatingEffect: !1 }) }, "animated-".concat(t));
                                }),
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "flex flex-col items-start justify-center gap-4 lg:gap-8 px-10 z-10",
                                children: [
                                  (0, s.jsx)("h1", {
                                    className:
                                      "text-2xl md:text-4xl lg:text-5xl font-semibold text-white max-w-[632px]",
                                    children: e("checkOtherTraderLabel"),
                                  }),
                                  (0, s.jsx)("p", {
                                    className:
                                      "text-base font-light text-white max-w-[632px]",
                                    children: e("reviewCompareLabel"),
                                  }),
                                  (0, s.jsxs)("div", {
                                    className:
                                      "flex flex-col lg:flex-row items-start lg:items-center justify-start gap-2 lg:gap-6",
                                    children: [
                                      (0, s.jsx)(F.default, {
                                        href: "#",//"/globaldeals",
                                        children: (0, s.jsx)("a", {
                                          children: (0, s.jsx)(r.Z, {
                                            text: e("viewGlobalTradeLabel"),
                                            type: {
                                              class: "primary",
                                              icon: !1,
                                              hasColoredBg: !0,
                                            },
                                            initialState: { state: "default" },
                                            size: "large",
                                          }),
                                        }),
                                      }),
                                      (0, s.jsx)(r.Z, {
                                        text: e("createYourTradeLabel"),
                                        type: {
                                          class: "primary",
                                          icon: !1,
                                          hasColoredBg: !0,
                                        },
                                        initialState: { state: "default" },
                                        size: "large",
                                        onClick: S,
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
                    (0, s.jsx)("section", {
                      className:
                        "flex flex-col items-center justify-center w-full bg-primary-yellow pt-[40px] pb-[48px] px-[16px]",
                      children: (0, s.jsx)("div", {
                        className: "max-w-[1280px] px-[48px]",
                        children: (0, s.jsxs)("div", {
                          className:
                            "flex flex-col gap-10 items-center mt-[16px] text-center lg:flex-row lg:justify-between",
                          children: [
                            (0, s.jsx)("img", {
                              src: b,
                              className: "w-[60px] h-[60px]",
                            }),
                            (0, s.jsx)("span", {
                              className:
                                "text-2xl font-semibold text-primary-blue lg:text-left",
                              children: e("buildApplicationLabel"),
                            }),
                            (0, s.jsx)("p", {
                              className:
                                "rubik text-primary-dark-blue font-light text-base mt-[16px] lg:w-[550px]",
                              children: e("sdkLabel"),
                            }),
                            (0, s.jsx)(r.Z, {
                              text: e("discoverSdkLabel"),
                              type: {
                                class: "primary",
                                hasColoredBg: !1,
                                icon: !1,
                              },
                              initialState: { state: "default" },
                              size: "small",
                              onClick: function () {
                                // window.open(
                                //   "https://github.com/nfttrader-io/sdk-js",
                                //   "_blank"
                                // );
                              },
                              className: "w-[179px] h-[40px] mt-[24px]",
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, s.jsx)(f.Z, {}),
                  ],
                }),
                (0, s.jsx)(l.Z, {}),
                H && (0, s.jsx)(C.Z, {}),
                G && (0, s.jsx)(q.Z, {}),
              ],
            })
          );
        };
    },
    3086: function (e) {
      e.exports = { float: "Bubble_float__k_P_n" };
    },
    26801: function (e) {
      e.exports = {
        verificationStatusIcon:
          "VerificationStatusRotation_verificationStatusIcon__pR4Mj",
        verificationStatusIconSuccess:
          "VerificationStatusRotation_verificationStatusIconSuccess__KRwkx",
        verificationStatusIconVerify:
          "VerificationStatusRotation_verificationStatusIconVerify__xtl3p",
        verificationStatusIconBanned:
          "VerificationStatusRotation_verificationStatusIconBanned__8eRMj",
      };
    },
    16724: function (e) {
      e.exports = {
        rotating: "index_rotating__n57CK",
        rotate: "index_rotate__e5_FG",
        animatedUl: "index_animatedUl__vs0hX",
        momentsRow: "index_momentsRow__EXPA_",
        slideHoz: "index_slideHoz__9ofG0",
        momentRowSmall: "index_momentRowSmall__ETZ7W",
        momentRowBig: "index_momentRowBig__Z0Gm7",
        verificationSection: "index_verificationSection__X10EL",
        verificationMascotte: "index_verificationMascotte__Oyqsv",
        mascotteBaloonVerification: "index_mascotteBaloonVerification__2cKX9",
        mascotteBaloonVerificationMobile:
          "index_mascotteBaloonVerificationMobile__uprz4",
        vertical: "index_vertical__xY8UY",
        horizontal: "index_horizontal__cQcfI",
      };
    },
  },
  function (e) {
    e.O(0, [421, 946, 878, 790, 616, 774, 888, 179], function () {
      return (t = 45301), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
