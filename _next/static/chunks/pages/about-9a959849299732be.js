(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [521],
  {
    74613: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/about",
        function () {
          return s(74610);
        },
      ]);
    },
    57417: function (e, t, s) {
      "use strict";
      var i = s(8014);
      s(56168);
      t.Z = function (e) {
        var t = e.mainText,
          s = void 0 === t ? "" : t,
          a = e.subText,
          l = void 0 === a ? "" : a,
          r = e.button;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("div", {
            className:
              "bg-primary-blue rounded-br-[88px] md:rounded-br-[264px]",
            children: (0, i.jsx)("div", {
              className: "m-auto max-w-[95%] px-[48px]",
              children: (0, i.jsxs)("div", {
                className:
                  "flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center",
                children: [
                  (0, i.jsxs)("div", {
                    children: [
                      (0, i.jsx)("p", {
                        className:
                          "text-3xl md:text-5xl pt-[80px] pb-[16px] text-primary-white font-semibold",
                        children: s,
                      }),
                      (0, i.jsx)("p", {
                        className:
                          "rubik text-base font-light text-primary-white pb-[40px] md:pb-[80px]",
                        children: l,
                      }),
                    ],
                  }),
                  r
                    ? (0, i.jsx)("div", {
                        className: "mb-[31px] md:mb-[0px]",
                        children: r,
                      })
                    : (0, i.jsx)(i.Fragment, {}),
                ],
              }),
            }),
          }),
        });
      };
    },
    64576: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = s(8014),
        a = s(3621),
        l = s(62044),
        r = "/_next/static/media/guide.50057452.svg",
        c = "/_next/static/media/discord.3afcd57c.svg",
        x = "/_next/static/media/faq.ead89cb7.svg",
        n = s(75657),
        m = function (e) {
          var t = e.type,
            s = (0, l.Z)("common").t,
            m = {
              "how-to-trade": {
                icon: r,
                title: s("howToTradeLabel"),
                subtitle: s("learnHowLabel"),
                button: s("readMoreLabel"),
                href: "/how-to-trade",
              },
              discord: {
                icon: c,
                title: s("joinDiscordLabel"),
                subtitle: s("comeBestCommunityLabel"),
                button: s("joinUsLabel"),
                href: "https://discord.gg/q4gK9sqt6r",
              },
              faq: {
                icon: x,
                title: s("faqLabel"),
                subtitle: s("findAnswersLabel"),
                button: s("readMoreLabel"),
                href: "/faq",
              },
            }[t];
          return (0, i.jsxs)("div", {
            className: "flex flex-col items-center justify-center gap-10",
            children: [
              (0, i.jsx)("img", { src: m.icon, className: "w-20 h-20" }),
              (0, i.jsxs)("div", {
                className: "flex flex-col items-stretch justify-center gap-2",
                children: [
                  (0, i.jsx)("p", {
                    className:
                      "text-2xl text-center text-primary-blue font-semibold",
                    children: m.title,
                  }),
                  (0, i.jsx)("p", {
                    className:
                      "rubik text-primary-dark-blue text-base text-center font-light",
                    children: m.subtitle,
                  }),
                ],
              }),
              (0, i.jsx)(n.default, {
                href: m.href,
                children: (0, i.jsx)("a", {
                  target: "discord" === t ? "_blank" : "",
                  children: (0, i.jsx)(a.Z, {
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
          var e = (0, l.Z)("common").t;
          return (0, i.jsx)("section", {
            className: "w-full",
            children: (0, i.jsx)("div", {
              className:
                "w-full max-w-[1280px] h-full px-[12px] pt-[40px] pb-[60px] md:pt-[88px] md:pb-[84px] m-auto",
              children: (0, i.jsxs)("div", {
                className: "flex flex-col items-stretch justify-center gap-20",
                children: [
                  (0, i.jsx)("h1", {
                    className:
                      "text-center text-3xl text-primary-dark-blue font-semibold",
                    children: e("wantMoreLabel"),
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "flex flex-col md:flex-row items-stretch justify-evenly gap-8",
                    children: [
                      (0, i.jsx)(m, { type: "how-to-trade" }),
                      (0, i.jsx)(m, { type: "discord" }),
                      (0, i.jsx)(m, { type: "faq" }),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
    },
    74610: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          __N_SSG: function () {
            return I;
          },
          default: function () {
            return R;
          },
        });
      var i = s(8014),
        a = s(25025),
        l = s(15199),
        r = s(39963),
        c = "/_next/static/media/default.b8f2d4b3.svg",
        x = "/_next/static/media/hover.3148bb3d.svg",
        n = s(68714),
        m = s(15654),
        d = "/_next/static/media/about-us.e191e05a.svg",
        p = "/_next/static/media/mogo.265df2c9.svg",
        o = "/_next/static/media/xdefi.ac62f99b.svg",
        h = "/_next/static/media/polygon.039d2b50.svg",
        u = "/_next/static/media/chargedparticles.ecb402e9.svg",
        j = "/_next/static/media/kernel.98c06089.svg",
        b = "/_next/static/media/nftport.1be24145.svg",
        f = "/_next/static/media/bagubits.635778ce.png",
        g = "/_next/static/media/nft20.dd4cd1eb.svg",
        w = "/_next/static/media/trustlook.8383e612.png",
        v = "/_next/static/media/moonpay.75c6f798.svg",
        N = "/_next/static/media/manifold.1251c4a4.svg",
        y = "/_next/static/media/bayc.3317a095.svg",
        k = "/_next/static/media/guttercatgang.8200596f.svg",
        _ = "/_next/static/media/sandbox.52d024e8.svg",
        L = "/_next/static/media/cyberkongz.fd627115.svg",
        Z = s(57417),
        P = s(36180),
        z = s(62305),
        D = (s(56168), "/_next/static/media/smile.1bd28c72.svg"),
        T = function (e) {
          var t = e.image,
            s = void 0 === t ? D : t,
            a = e.name,
            l = void 0 === a ? "" : a,
            r = e.job,
            c = void 0 === r ? "" : r,
            x = e.jobDetail,
            n = void 0 === x ? "" : x;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)("div", {
                className: "flex content-start mt-[80px]",
                children: [
                  (0, i.jsx)("img", {
                    src: s,
                    height: "88px",
                    width: "88px",
                    className: "rounded-full",
                  }),
                  (0, i.jsxs)("div", {
                    className: "flex flex-col ml-[40px]",
                    children: [
                      (0, i.jsx)("span", {
                        className: "text-xl font-semibold text-primary-blue",
                        children: l,
                      }),
                      (0, i.jsx)("span", {
                        className:
                          "text-sm font-semibold text-primary-dark-blue",
                        children: c,
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "mt-[16px] md:mt-[0px] md:ml-[128px]",
                children: n,
              }),
            ],
          });
        },
        U = s(3621),
        J = s(64576),
        q = s(80479),
        B = s.n(q),
        C = "/_next/static/media/john-pak.758d22ac.jpeg",
        F = "/_next/static/media/mattia-migliore.92522418.jpeg",
        O = s(45501),
        S = s(1984),
        E = s(80998),
        M = s(62044),
        I = !0,
        R = function () {
          var e = (0, M.Z)("common").t;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(O.Z, {}),
              (0, i.jsxs)(S.default, {
                children: [
                  (0, i.jsx)("title", { children: e("titleLabel") }),
                  (0, i.jsx)(E.Z, {
                    metaTitle: e("titleLabel"),
                    metaDescription: e("metaDescriptionLabel"),
                    metaOgTitle: e("titleLabel"),
                    metaOgDescription: e("metaDescriptionLabel"),
                    metaOgImage:
                      "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/meta-logo.png",
                    metaOgUrl: "https://www.nfttrader.io/about",
                    twitterImageCard:
                      "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/meta-logo.png",
                    twitterImage:
                      "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/meta-logo.png",
                    twitterUrl: "https://www.nfttrader.io/about",
                    twitterTitle: e("titleLabel"),
                    twitterDescription: e("metaDescriptionLabel"),
                  }),
                  (0, i.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
                  (0, i.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/apple-touch-icon.png",
                  }),
                  (0, i.jsx)("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: "/favicon-32x32.png",
                  }),
                  (0, i.jsx)("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: "/favicon-16x16.png",
                  }),
                  (0, i.jsx)("link", {
                    rel: "manifest",
                    href: "/site.webmanifest",
                  }),
                ],
              }),
              (0, i.jsx)(z.Z, {}),
              (0, i.jsx)("div", {
                className: "bg-primary-yellow",
                children: (0, i.jsx)(Z.Z, {
                  mainText: e("aboutUsLabel"),
                  subText: e("aboutUsSubHeaderLabel"),
                }),
              }),
              (0, i.jsx)("div", {
                className:
                  "relative m-auto max-w-[1280px] pt-[88px] px-[16px] md:px-[48px] bg-primary-white",
                children: (0, i.jsxs)("div", {
                  className: "md:px-[16px] pb-[84px]",
                  children: [
                    (0, i.jsx)("p", {
                      className:
                        "rubik text-primary-dark-blue font-regular pb-[16px]",
                      children: e("aboutUsParagraph1"),
                    }),
                    (0, i.jsxs)("p", {
                      className: "rubik text-primary-dark-blue font-light",
                      children: [
                        e("aboutUsParagraph2"),
                        (0, i.jsx)("br", {}),
                        (0, i.jsx)("br", {}),
                        e("aboutUsParagraph3"),
                      ],
                    }),
                  ],
                }),
              }),
              (0, i.jsx)("div", {
                className: "w-full",
                children: (0, i.jsx)("div", {
                  style: {
                    backgroundImage: "url(".concat(d, ")"),
                    backgroundSize: "870px auto",
                    backgroundRepeat: "repeat-x",
                  },
                  className: "w-full h-[120px] ".concat(B().animationRepeat),
                }),
              }),
              (0, i.jsx)("div", {
                className:
                  "relative m-auto max-w-[1024px] pt-[88px] px-[16px] md:px-[48px] bg-primary-white",
                children: (0, i.jsxs)("div", {
                  className: "md:px-[48px] pb-[84px]",
                  children: [
                    (0, i.jsx)("div", {
                      className: "flex",
                      children: (0, i.jsx)("span", {
                        className:
                          "text-primary-blue text-2xl md:text-4xl font-semibold",
                        children: e("createdWithPassionLabel"),
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)(T, {
                          image: C,
                          name: "John Pak",
                          job: e("johnJobLabel"),
                          jobDetail: e("johnJobDescriptionLabel"),
                        }),
                        (0, i.jsxs)("div", {
                          className: "flex md:ml-[128px] mt-[36px]",
                          children: [
                            (0, i.jsx)(a.Z, {
                              className: "inline cursor-pointer",
                              defaultPath: l.Z.src,
                              hoverPath: r.Z.src,
                              link: "https://twitter.com/NftTrader",
                              width: 40,
                              height: 40,
                            }),
                            (0, i.jsx)(a.Z, {
                              className: "inline cursor-pointer",
                              defaultPath: n.Z.src,
                              hoverPath: m.Z.src,
                              link: "https://nfttrader.medium.com/",
                              width: 40,
                              height: 40,
                            }),
                            (0, i.jsx)(a.Z, {
                              className: "inline cursor-pointer",
                              defaultPath: c,
                              hoverPath: x,
                              link: "https://www.linkedin.com/in/john-p-93a4a71b/",
                              width: 40,
                              height: 40,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)(T, {
                          name: "Bruckzr",
                          job: e("bruckzrJobLabel"),
                          jobDetail: e("bruckzrJobDescriptionLabel"),
                        }),
                        (0, i.jsx)("div", {
                          className: "flex md:ml-[128px] mt-[36px]",
                          children: (0, i.jsx)(a.Z, {
                            className: "inline cursor-pointer",
                            defaultPath: l.Z.src,
                            hoverPath: r.Z.src,
                            link: "https://twitter.com/Bruckzr",
                            width: 40,
                            height: 40,
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)(T, {
                          image: F,
                          name: "Mattia Migliore",
                          job: e("mattiaJobLabel"),
                          jobDetail: e("mattiaJobDescriptionLabel"),
                        }),
                        (0, i.jsxs)("div", {
                          className: "flex md:ml-[128px] mt-[36px]",
                          children: [
                            (0, i.jsx)(a.Z, {
                              className: "inline cursor-pointer",
                              defaultPath: l.Z.src,
                              hoverPath: r.Z.src,
                              link: "https://twitter.com/iamNFTia",
                              width: 40,
                              height: 40,
                            }),
                            (0, i.jsx)(a.Z, {
                              className: "inline cursor-pointer",
                              defaultPath: c,
                              hoverPath: x,
                              link: "https://www.linkedin.com/in/mattia-migliore-44886090/",
                              width: 40,
                              height: 40,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, i.jsx)("div", {
                className: "w-full bg-primary-blue",
                children: (0, i.jsx)("div", {
                  className: "max-w-[1280px] m-auto md:px-[48px]",
                  children: (0, i.jsxs)("div", {
                    className: "md:px-[48px]",
                    children: [
                      (0, i.jsx)("div", {
                        className: "flex justify-center",
                        children: (0, i.jsx)("div", {
                          className:
                            "text-primary-white text-2xl md:text-4xl font-semibold my-[88px]",
                          children: e("partnersLabel"),
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className:
                          "grid grid-cols-1 grid-rows-4 gap-5 gap-y-20 justify-items-center items-center mb-[5px] sm:gap-y-10 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-4 md:grid-rows-1 md:mb-[88px]",
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              "flex justify-center items-center w-full",
                            children: (0, i.jsx)("a", {
                              href: "https://www.moonpay.com/",
                              target: "_blank",
                              children: (0, i.jsx)("img", {
                                className:
                                  "cursor-pointer w-[200px] sm:w-[160px] md:w-[150px]",
                                src: v,
                              }),
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "flex justify-center items-center w-full",
                            children: (0, i.jsx)("a", {
                              href: "https://www.xdefi.io/",
                              target: "_blank",
                              children: (0, i.jsx)("img", {
                                className:
                                  "cursor-pointer w-[200px] sm:w-[160px] md:w-[150px]",
                                src: o,
                              }),
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "flex justify-center items-center w-full",
                            children: (0, i.jsx)("a", {
                              href: "https://polygon.technology/",
                              target: "_blank",
                              children: (0, i.jsx)("img", {
                                className:
                                  "cursor-pointer w-[200px] sm:w-[160px] md:w-[150px]",
                                src: h,
                              }),
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "flex justify-center items-center w-full",
                            children: (0, i.jsx)("a", {
                              href: "https://www.charged.fi/",
                              target: "_blank",
                              children: (0, i.jsx)("img", {
                                className:
                                  "cursor-pointer w-[200px] sm:w-[160px] md:w-[150px]",
                                src: u,
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className:
                          "grid grid-cols-1 grid-rows-4 gap-5 gap-y-20 items-center mb-[15px] mt-[80px] sm:gap-y-10 sm:mt-[40px] sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-4 md:grid-rows-1 justify-items-center md:justify-items-start md:mb-[88px]",
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              "flex justify-center items-center w-full",
                            children: (0, i.jsx)("a", {
                              href: "https://www.mogo.ca/",
                              target: "_blank",
                              children: (0, i.jsx)("img", {
                                className:
                                  "cursor-pointer w-[200px] sm:w-[160px] md:w-[150px]",
                                src: p,
                              }),
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "flex justify-center items-center w-full",
                            children: (0, i.jsx)("a", {
                              href: "https://www.nftport.xyz/",
                              target: "_blank",
                              children: (0, i.jsx)("img", {
                                className:
                                  "cursor-pointer w-[200px] sm:w-[160px] md:w-[150px]",
                                src: b,
                              }),
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "flex justify-center items-center w-full",
                            children: (0, i.jsx)("a", {
                              href: "https://nft20.io/",
                              target: "_blank",
                              children: (0, i.jsx)("img", {
                                className:
                                  "cursor-pointer w-[200px] sm:w-[160px] md:w-[150px]",
                                src: g,
                              }),
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "flex justify-center items-center w-full",
                            children: (0, i.jsx)("a", {
                              href: "https://www.manifold.xyz/",
                              target: "_blank",
                              children: (0, i.jsx)("img", {
                                className:
                                  "cursor-pointer w-[200px] sm:w-[160px] md:w-[150px]",
                                src: N,
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className:
                          "grid grid-cols-1 grid-rows-3 items-center justify-items-center pb-[88px] mt-[80px] gap-5 gap-y-20 sm:gap-y-10 sm:mt-[50px] sm:grid-cols-3 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-1 md:justify-items-start md:pb-[88px]",
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              "flex justify-center items-center w-full",
                            children: (0, i.jsx)("a", {
                              href: "https://www.trustlook.com",
                              target: "_blank",
                              children: (0, i.jsx)("img", {
                                className:
                                  "cursor-pointer w-[200px] sm:w-[160px] md:w-[150px]",
                                src: w,
                              }),
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "flex justify-center items-center w-full",
                            children: (0, i.jsx)("a", {
                              href: "https://bagubits.it/",
                              target: "_blank",
                              children: (0, i.jsx)("img", {
                                className:
                                  "cursor-pointer w-[200px] sm:w-[160px] md:w-[150px]",
                                src: f,
                              }),
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "flex justify-center items-center w-full",
                            children: (0, i.jsx)("a", {
                              href: "https://www.kernel.community/en/",
                              target: "_blank",
                              children: (0, i.jsx)("img", {
                                className:
                                  "cursor-pointer w-[200px] sm:w-[160px] md:w-[150px]",
                                src: j,
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, i.jsx)("div", {
                className: "w-full bg-primary-dark-blue",
                children: (0, i.jsx)("div", {
                  className: "max-w-[1024px] m-auto md:px-[48px] md:py-[84px]",
                  children: (0, i.jsx)("div", {
                    className:
                      "grid grid-cols-12 grid-rows-1 items-center md:px-[48px]",
                    children: (0, i.jsxs)("div", {
                      className:
                        "grid grid-cols-2 grid-rows-3 md:flex justify-between items-center col-span-12 py-[40px] md:py-[0px]",
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "col-span-2 text-2xl font-semibold text-primary-white text-center",
                          children: e("trustedByLabel"),
                        }),
                        (0, i.jsx)("a", {
                          href: "https://boredapeyachtclub.com/#/",
                          target: "_blank",
                          children: (0, i.jsx)("img", {
                            className:
                              "col-span-1 pl-[35px] w-[160px] cursor-pointer",
                            src: y,
                          }),
                        }),
                        (0, i.jsx)("a", {
                          href: "https://boredapeyachtclub.com/#/",
                          target: "_blank",
                          children: (0, i.jsx)("img", {
                            className:
                              "col-span-1 pl-[35px] w-[160px] cursor-pointer",
                            src: k,
                          }),
                        }),
                        (0, i.jsx)("a", {
                          href: "https://www.sandbox.game/en/",
                          target: "_blank",
                          children: (0, i.jsx)("img", {
                            className:
                              "col-span-1 pl-[35px] w-[160px] cursor-pointer",
                            src: _,
                          }),
                        }),
                        (0, i.jsx)("a", {
                          href: "https://www.cyberkongz.com/",
                          target: "_blank",
                          children: (0, i.jsx)("img", {
                            className:
                              "col-span-1 pl-[35px] w-[160px] cursor-pointer",
                            src: L,
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              (0, i.jsx)("div", {
                className:
                  "w-full bg-primary-primary-white py-[48px] md:py-[0px]",
                children: (0, i.jsx)("div", {
                  className: "max-w-[1024px] m-auto md:px-[48px] md:py-[84px]",
                  children: (0, i.jsxs)("div", {
                    className: "md:px-[48px]",
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "text-primary-blue text-2xl md:text-4xl text-center font-semibold",
                        children: e("upcomingBlueprintLabel"),
                      }),
                      (0, i.jsxs)("div", {
                        className: "grid grid-cols-12 md:px-[48px] mt-[97px]",
                        children: [
                          (0, i.jsxs)("div", {
                            className:
                              "flex flex-col md:flex-row col-span-12 px-[16px] md:px-[0px]",
                            children: [
                              (0, i.jsx)("div", {
                                className:
                                  "text-primary-blue text-2xl md:text-3xl font-semibold",
                                children: "2022",
                              }),
                              (0, i.jsxs)("div", {
                                className: "flex mt-[40px] md:mt-[0px]",
                                children: [
                                  (0, i.jsx)("div", {
                                    className:
                                      "text-primary-dark-blue text-lg font-semibold w-[130px] md:ml-[60px]",
                                    children: e("febAprLabel"),
                                  }),
                                  (0, i.jsx)("nav", {
                                    className: "ml-[32px]",
                                    children: (0, i.jsxs)("ul", {
                                      className:
                                        "list-disc rubik text-primary-dark-blue font-light",
                                      children: [
                                        (0, i.jsx)("li", {
                                          children: e("blueprint1"),
                                        }),
                                        (0, i.jsx)("li", {
                                          children: e("blueprint2"),
                                        }),
                                        (0, i.jsx)("li", {
                                          children: e("blueprint3"),
                                        }),
                                        (0, i.jsx)("li", {
                                          children: e("blueprint4"),
                                        }),
                                        (0, i.jsx)("li", {
                                          children: e("blueprint5"),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "flex col-span-12 mt-[40px] px-[16px] md:px-[0px]",
                            children: (0, i.jsxs)("div", {
                              className: "flex",
                              children: [
                                (0, i.jsx)("div", {
                                  className:
                                    "text-primary-dark-blue text-lg font-semibold w-[130px] md:ml-[130px]",
                                  children: e("mayLabel"),
                                }),
                                (0, i.jsx)("nav", {
                                  className: "ml-[32px]",
                                  children: (0, i.jsx)("ul", {
                                    className:
                                      "list-disc rubik text-primary-dark-blue font-light",
                                    children: (0, i.jsx)("li", {
                                      children: e("blueprint6"),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "flex col-span-12 mt-[40px] px-[16px] md:px-[0px]",
                            children: (0, i.jsxs)("div", {
                              className: "flex",
                              children: [
                                (0, i.jsx)("div", {
                                  className:
                                    "text-primary-dark-blue text-lg font-semibold w-[130px] md:ml-[130px]",
                                  children: e("junJulLabel"),
                                }),
                                (0, i.jsx)("nav", {
                                  className: "ml-[32px]",
                                  children: (0, i.jsxs)("ul", {
                                    className:
                                      "list-disc rubik text-primary-dark-blue font-light",
                                    children: [
                                      (0, i.jsx)("li", {
                                        children: e("blueprint7"),
                                      }),
                                      (0, i.jsx)("li", {
                                        children: e("blueprint8"),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "flex col-span-12 mt-[40px] px-[16px] md:px-[0px]",
                            children: (0, i.jsxs)("div", {
                              className: "flex",
                              children: [
                                (0, i.jsx)("div", {
                                  className:
                                    "text-primary-dark-blue text-lg font-semibold w-[130px] md:ml-[130px]",
                                  children: e("augDecLabel"),
                                }),
                                (0, i.jsx)("nav", {
                                  className: "ml-[32px]",
                                  children: (0, i.jsxs)("ul", {
                                    className:
                                      "list-disc rubik text-primary-dark-blue font-light",
                                    children: [
                                      (0, i.jsx)("li", {
                                        children: e("blueprint9"),
                                      }),
                                      (0, i.jsx)("li", {
                                        children: e("blueprint10"),
                                      }),
                                      (0, i.jsx)("li", {
                                        children: e("blueprint11"),
                                      }),
                                      (0, i.jsx)("li", {
                                        children: e("blueprint12"),
                                      }),
                                    ],
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
              }),
              (0, i.jsxs)("div", {
                className: "w-full bg-primary-blue",
                children: [
                  (0, i.jsx)("div", {
                    className:
                      "text-primary-white text-2xl md:text-4xl text-center font-semibold pt-[88px]",
                    children: e("interestedProjectLabel"),
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "rubik text-primary-white font-light text-center",
                    children: e("interestedProjectDescriptionLabel"),
                  }),
                  (0, i.jsx)("div", {
                    className: "flex justify-center",
                    children: (0, i.jsx)("a", {
                      href: "mailto:info@nfttrader.io",
                      target: "_blank",
                      children: (0, i.jsx)(U.Z, {
                        text: e("emailUsLabel"),
                        type: { class: "primary", icon: !1, hasColoredBg: !0 },
                        initialState: { state: "default" },
                        size: "small",
                        className: "w-[142px] mt-[60px] mb-[60px]",
                      }),
                    }),
                  }),
                ],
              }),
              (0, i.jsx)(J.Z, {}),
              (0, i.jsx)(P.Z, {}),
            ],
          });
        };
    },
    80479: function (e) {
      e.exports = {
        animationRepeat: "about_animationRepeat__e9DZF",
        slide: "about_slide__hjAfw",
      };
    },
  },
  function (e) {
    e.O(0, [421, 946, 790, 774, 888, 179], function () {
      return (t = 74613), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
