(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [144],
  {
    61719: function (e, s, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/how-to-trade",
        function () {
          return a(17344);
        },
      ]);
    },
    57417: function (e, s, a) {
      "use strict";
      var t = a(8014);
      a(56168);
      s.Z = function (e) {
        var s = e.mainText,
          a = void 0 === s ? "" : s,
          r = e.subText,
          l = void 0 === r ? "" : r,
          i = e.button;
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)("div", {
            className:
              "bg-primary-blue rounded-br-[88px] md:rounded-br-[264px]",
            children: (0, t.jsx)("div", {
              className: "m-auto max-w-[95%] px-[48px]",
              children: (0, t.jsxs)("div", {
                className:
                  "flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center",
                children: [
                  (0, t.jsxs)("div", {
                    children: [
                      (0, t.jsx)("p", {
                        className:
                          "text-3xl md:text-5xl pt-[80px] pb-[16px] text-primary-white font-semibold",
                        children: a,
                      }),
                      (0, t.jsx)("p", {
                        className:
                          "rubik text-base font-light text-primary-white pb-[40px] md:pb-[80px]",
                        children: l,
                      }),
                    ],
                  }),
                  i
                    ? (0, t.jsx)("div", {
                        className: "mb-[31px] md:mb-[0px]",
                        children: i,
                      })
                    : (0, t.jsx)(t.Fragment, {}),
                ],
              }),
            }),
          }),
        });
      };
    },
    64576: function (e, s, a) {
      "use strict";
      a.d(s, {
        Z: function () {
          return o;
        },
      });
      var t = a(8014),
        r = a(3621),
        l = a(62044),
        i = "/_next/static/media/guide.50057452.svg",
        d = "/_next/static/media/discord.3afcd57c.svg",
        x = "/_next/static/media/faq.ead89cb7.svg",
        c = a(75657),
        n = function (e) {
          var s = e.type,
            a = (0, l.Z)("common").t,
            n = {
              "how-to-trade": {
                icon: i,
                title: a("howToTradeLabel"),
                subtitle: a("learnHowLabel"),
                button: a("readMoreLabel"),
                href: "/how-to-trade",
              },
              discord: {
                icon: d,
                title: a("joinDiscordLabel"),
                subtitle: a("comeBestCommunityLabel"),
                button: a("joinUsLabel"),
                href: "https://discord.gg/q4gK9sqt6r",
              },
              faq: {
                icon: x,
                title: a("faqLabel"),
                subtitle: a("findAnswersLabel"),
                button: a("readMoreLabel"),
                href: "/faq",
              },
            }[s];
          return (0, t.jsxs)("div", {
            className: "flex flex-col items-center justify-center gap-10",
            children: [
              (0, t.jsx)("img", { src: n.icon, className: "w-20 h-20" }),
              (0, t.jsxs)("div", {
                className: "flex flex-col items-stretch justify-center gap-2",
                children: [
                  (0, t.jsx)("p", {
                    className:
                      "text-2xl text-center text-primary-blue font-semibold",
                    children: n.title,
                  }),
                  (0, t.jsx)("p", {
                    className:
                      "rubik text-primary-dark-blue text-base text-center font-light",
                    children: n.subtitle,
                  }),
                ],
              }),
              (0, t.jsx)(c.default, {
                href: n.href,
                children: (0, t.jsx)("a", {
                  target: "discord" === s ? "_blank" : "",
                  children: (0, t.jsx)(r.Z, {
                    text: n.button,
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
        o = function () {
          var e = (0, l.Z)("common").t;
          return (0, t.jsx)("section", {
            className: "w-full",
            children: (0, t.jsx)("div", {
              className:
                "w-full max-w-[1280px] h-full px-[12px] pt-[40px] pb-[60px] md:pt-[88px] md:pb-[84px] m-auto",
              children: (0, t.jsxs)("div", {
                className: "flex flex-col items-stretch justify-center gap-20",
                children: [
                  (0, t.jsx)("h1", {
                    className:
                      "text-center text-3xl text-primary-dark-blue font-semibold",
                    children: e("wantMoreLabel"),
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "flex flex-col md:flex-row items-stretch justify-evenly gap-8",
                    children: [
                      (0, t.jsx)(n, { type: "how-to-trade" }),
                      (0, t.jsx)(n, { type: "discord" }),
                      (0, t.jsx)(n, { type: "faq" }),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
    },
    17344: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          __N_SSG: function () {
            return j;
          },
          default: function () {
            return g;
          },
        });
      var t = a(8014),
        r = a(56168),
        l = a(57417),
        i = a(36180),
        d = a(62305),
        x = a(64576),
        c = "/_next/static/media/make_it.1e984a74.svg",
        n = "/_next/static/media/discord_empty.e7825c1a.svg",
        o = a(45501),
        m = a(1984),
        p = a(80998),
        h = "/_next/static/media/icon_player_video.5db7f976.svg",
        b = "/_next/static/media/icon_player_video_hover.bc6ab1bb.svg",
        u = "/_next/static/media/how_to_trade.a5d575f2.svg",
        f = a(62044),
        j = !0,
        g = function () {
          var e = (0, f.Z)("common").t,
            s = (0, r.useState)(!1),
            a = s[0],
            j = s[1],
            g = (0, r.useState)(!1),
            y = g[0],
            N = g[1];
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(o.Z, {}),
              (0, t.jsxs)(m.default, {
                children: [
                  (0, t.jsx)("title", { children: e("titleLabel") }),
                  (0, t.jsx)(p.Z, {
                    metaTitle: e("titleLabel"),
                    metaDescription: e("metaDescriptionLabel"),
                    metaOgTitle: e("titleLabel"),
                    metaOgDescription: e("metaDescriptionLabel"),
                    metaOgImage:
                      "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/meta-logo.png",
                    metaOgUrl: "https://www.nfttrader.io/how-to-trade",
                    twitterImageCard:
                      "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/meta-logo.png",
                    twitterImage:
                      "https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/meta-logo.png",
                    twitterUrl: "https://www.nfttrader.io/how-to-trade",
                    twitterTitle: e("titleLabel"),
                    twitterDescription: e("metaDescriptionLabel"),
                  }),
                  (0, t.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
                  (0, t.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/apple-touch-icon.png",
                  }),
                  (0, t.jsx)("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: "/favicon-32x32.png",
                  }),
                  (0, t.jsx)("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: "/favicon-16x16.png",
                  }),
                  (0, t.jsx)("link", {
                    rel: "manifest",
                    href: "/site.webmanifest",
                  }),
                ],
              }),
              (0, t.jsx)(d.Z, {}),
              (0, t.jsx)("div", {
                className: "bg-primary-yellow",
                children: (0, t.jsx)(l.Z, {
                  mainText: e("howToTradeLabel"),
                  subText: e("howToTradeSubHeaderLabel"),
                }),
              }),
              (0, t.jsx)("section", {
                className:
                  "flex items-center justify-center max-w-[1024px] w-full m-auto",
                children: (0, t.jsxs)("div", {
                  className:
                    "relative flex justify-center items-center w-full h-[400px] shadow-lg shadow-light-shadow mt-[30px] bg-primary-blue lg:w-[928px] lg:h-[591px] lg:mt-[0px] lg:border-[1px] lg:border-[#fff] lg:border-solid lg:relative lg:-top-[30px]",
                  style: {
                    backgroundImage: "url(".concat(u, ")"),
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                  },
                  children: [
                    !y &&
                      (0, t.jsx)("h3", {
                        className:
                          "text-primary-white text-[40px] font-semibold absolute bottom-[50px] left-[50px] lg:bottom-[100px] lg:left-[100px]",
                        children: !1 === a ? "Create Trade" : "Close Trade",
                      }),
                    y &&
                      (0, t.jsx)("iframe", {
                        className: "w-full h-full bg-primary-blue",
                        title: e("iframeYoutubeDealLabel"),
                        allow:
                          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                        allowFullScreen: !0,
                        src:
                          !1 === a
                            ? "https://www.youtube.com/embed/5q2HlcFoDtM"
                            : "https://www.youtube.com/embed/hePQkPxW2Xc",
                      }),
                    !y &&
                      (0, t.jsx)("div", {
                        className:
                          "flex justify-center items-center border-[2px] border-primary-white border-solid rounded-full hover:border-primary-yellow cursor-pointer",
                        onClick: function () {
                          N(!0);
                        },
                        onMouseEnter: function () {
                          var e = document.getElementById("player-icon-video");
                          e && (e.src = b);
                        },
                        onMouseLeave: function () {
                          var e = document.getElementById("player-icon-video");
                          e && (e.src = h);
                        },
                        children: (0, t.jsx)("img", {
                          id: "player-icon-video",
                          src: h,
                          className: "w-[128px] h-[128px]",
                        }),
                      }),
                  ],
                }),
              }),
              (0, t.jsxs)("main", {
                className:
                  "max-w-[1024px] m-auto px-[16px] md:px-[48px] mt-[88px] mb-[32px]",
                children: [
                  (0, t.jsx)("div", {
                    className: "md:px-[48px] text-center mb-[60px]",
                    children: (0, t.jsx)("span", {
                      className:
                        "text-4xl text-primary-dark-blue font-semibold",
                      children: e("areYouCreatingDealLabel"),
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: "text-lg text-center font-semibold mb-[88px]",
                    children: [
                      (0, t.jsx)("span", {
                        className:
                          "cursor-pointer px-[8px] md:px-[20px] hover:underline underline-offset-4 " +
                          (0 == a
                            ? "text-primary-blue underline"
                            : "text-primary-gray"),
                        onClick: function () {
                          j(!1), N(!1);
                        },
                        children: e("createTradeLabel"),
                      }),
                      (0, t.jsx)("span", {
                        className:
                          "cursor-pointer px-[8px] md:px-[20px] hover:underline underline-offset-4 " +
                          (0 == a
                            ? "text-primary-gray"
                            : "text-primary-blue underline"),
                        onClick: function () {
                          j(!0), N(!1);
                        },
                        children: e("closeTradeLabel"),
                      }),
                    ],
                  }),
                  0 == a &&
                    (0, t.jsx)("section", {
                      children: (0, t.jsxs)("div", {
                        className: "grid grid-cols-12",
                        children: [
                          (0, t.jsxs)("div", {
                            className:
                              "grid grid-cols-12 col-span-12 border-b-[1px] border-b-gray-200 py-[40px]",
                            children: [
                              (0, t.jsx)("div", {
                                className: "col-span-1",
                                children: (0, t.jsx)("span", {
                                  className:
                                    "text-xl md:text-5xl text-primary-blue font-semibold",
                                  children: "1",
                                }),
                              }),
                              (0, t.jsxs)("div", {
                                className: "col-span-11",
                                children: [
                                  (0, t.jsx)("div", {
                                    className:
                                      "text-xl text-primary-blue font-semibold mb-[16px]",
                                    children: e("howToCreateTradeTitle1"),
                                  }),
                                  (0, t.jsx)("div", {
                                    className:
                                      "rubik text-primary-dark-blue font-light",
                                    children: e("howToCreateTradeParagraph1"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "grid grid-cols-12 col-span-12 border-b-[1px] border-b-gray-200 py-[40px]",
                            children: [
                              (0, t.jsx)("div", {
                                className: "col-span-1",
                                children: (0, t.jsx)("span", {
                                  className:
                                    "text-xl md:text-5xl text-primary-blue font-semibold",
                                  children: "2",
                                }),
                              }),
                              (0, t.jsxs)("div", {
                                className: "col-span-11",
                                children: [
                                  (0, t.jsx)("div", {
                                    className:
                                      "text-xl text-primary-blue font-semibold mb-[16px]",
                                    children: e("howToCreateTradeTitle2"),
                                  }),
                                  (0, t.jsx)("div", {
                                    className:
                                      "rubik text-primary-dark-blue font-light",
                                    children: e("howToCreateTradeParagraph2"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "grid grid-cols-12 col-span-12 border-b-[1px] border-b-gray-200 py-[40px]",
                            children: [
                              (0, t.jsx)("div", {
                                className: "col-span-1",
                                children: (0, t.jsx)("span", {
                                  className:
                                    "text-xl md:text-5xl text-primary-blue font-semibold",
                                  children: "3",
                                }),
                              }),
                              (0, t.jsxs)("div", {
                                className: "col-span-11",
                                children: [
                                  (0, t.jsx)("div", {
                                    className:
                                      "text-xl text-primary-blue font-semibold mb-[16px]",
                                    children: e("howToCreateTradeTitle3"),
                                  }),
                                  (0, t.jsx)("div", {
                                    className:
                                      "rubik text-primary-dark-blue font-light",
                                    children: e("howToCreateTradeParagraph3"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "grid grid-cols-12 col-span-12 border-b-[1px] border-b-gray-200 py-[40px]",
                            children: [
                              (0, t.jsx)("div", {
                                className: "col-span-1",
                                children: (0, t.jsx)("span", {
                                  className:
                                    "text-xl md:text-5xl text-primary-blue font-semibold",
                                  children: "4",
                                }),
                              }),
                              (0, t.jsxs)("div", {
                                className: "col-span-11",
                                children: [
                                  (0, t.jsx)("div", {
                                    className:
                                      "text-xl text-primary-blue font-semibold mb-[16px]",
                                    children: e("howToCreateTradeTitle4"),
                                  }),
                                  (0, t.jsx)("div", {
                                    className:
                                      "rubik text-primary-dark-blue font-light",
                                    children: e("howToCreateTradeParagraph4"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "grid grid-cols-12 col-span-12 border-b-[1px] border-b-gray-200 py-[40px]",
                            children: [
                              (0, t.jsx)("div", {
                                className: "col-span-1",
                                children: (0, t.jsx)("span", {
                                  className:
                                    "text-xl md:text-5xl text-primary-blue font-semibold",
                                  children: "5",
                                }),
                              }),
                              (0, t.jsxs)("div", {
                                className: "col-span-11",
                                children: [
                                  (0, t.jsx)("div", {
                                    className:
                                      "text-xl text-primary-blue font-semibold mb-[16px]",
                                    children: e("howToCreateTradeTitle5"),
                                  }),
                                  (0, t.jsx)("div", {
                                    className:
                                      "rubik text-primary-dark-blue font-light",
                                    children: e("howToCreateTradeParagraph5"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "grid grid-cols-12 col-span-12 border-b-[1px] border-b-gray-200 py-[40px]",
                            children: [
                              (0, t.jsx)("div", {
                                className: "col-span-1",
                                children: (0, t.jsx)("span", {
                                  className:
                                    "text-xl md:text-5xl text-primary-blue font-semibold",
                                  children: "6",
                                }),
                              }),
                              (0, t.jsxs)("div", {
                                className: "col-span-11",
                                children: [
                                  (0, t.jsx)("div", {
                                    className:
                                      "text-xl text-primary-blue font-semibold mb-[16px]",
                                    children: e("howToCreateTradeTitle6"),
                                  }),
                                  (0, t.jsx)("div", {
                                    className:
                                      "rubik text-primary-dark-blue font-light",
                                    children: e("howToCreateTradeParagraph6"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  1 == a &&
                    (0, t.jsx)("section", {
                      children: (0, t.jsxs)("div", {
                        className: "grid grid-cols-12",
                        children: [
                          (0, t.jsxs)("div", {
                            className:
                              "grid grid-cols-12 col-span-12 border-b-[1px] border-b-gray-200 py-[40px]",
                            children: [
                              (0, t.jsx)("div", {
                                className: "col-span-1",
                                children: (0, t.jsx)("span", {
                                  className:
                                    "text-xl md:text-5xl text-primary-blue font-semibold",
                                  children: "1",
                                }),
                              }),
                              (0, t.jsxs)("div", {
                                className: "col-span-11",
                                children: [
                                  (0, t.jsx)("div", {
                                    className:
                                      "text-xl text-primary-blue font-semibold mb-[16px]",
                                    children: e("howToCloseTradeTitle1"),
                                  }),
                                  (0, t.jsx)("div", {
                                    className:
                                      "rubik text-primary-dark-blue font-light",
                                    children: e("howToCloseTradeParagraph1"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "grid grid-cols-12 col-span-12 border-b-[1px] border-b-gray-200 py-[40px]",
                            children: [
                              (0, t.jsx)("div", {
                                className: "col-span-1",
                                children: (0, t.jsx)("span", {
                                  className:
                                    "text-xl md:text-5xl text-primary-blue font-semibold",
                                  children: "2",
                                }),
                              }),
                              (0, t.jsxs)("div", {
                                className: "col-span-11",
                                children: [
                                  (0, t.jsx)("div", {
                                    className:
                                      "text-xl text-primary-blue font-semibold mb-[16px]",
                                    children: e("howToCloseTradeTitle2"),
                                  }),
                                  (0, t.jsx)("div", {
                                    className:
                                      "rubik text-primary-dark-blue font-light",
                                    children: e("howToCloseTradeParagraph2"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "grid grid-cols-12 col-span-12 border-b-[1px] border-b-gray-200 py-[40px]",
                            children: [
                              (0, t.jsx)("div", {
                                className: "col-span-1",
                                children: (0, t.jsx)("span", {
                                  className:
                                    "text-xl md:text-5xl text-primary-blue font-semibold",
                                  children: "3",
                                }),
                              }),
                              (0, t.jsxs)("div", {
                                className: "col-span-11",
                                children: [
                                  (0, t.jsx)("div", {
                                    className:
                                      "text-xl text-primary-blue font-semibold mb-[16px]",
                                    children: e("howToCloseTradeTitle3"),
                                  }),
                                  (0, t.jsx)("div", {
                                    className:
                                      "rubik text-primary-dark-blue font-light",
                                    children: e("howToCloseTradeParagraph3"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "grid grid-cols-12 col-span-12 border-b-[1px] border-b-gray-200 py-[40px]",
                            children: [
                              (0, t.jsx)("div", {
                                className: "col-span-1",
                                children: (0, t.jsx)("span", {
                                  className:
                                    "text-xl md:text-5xl text-primary-blue font-semibold",
                                  children: "4",
                                }),
                              }),
                              (0, t.jsxs)("div", {
                                className: "col-span-11",
                                children: [
                                  (0, t.jsx)("div", {
                                    className:
                                      "text-xl text-primary-blue font-semibold mb-[16px]",
                                    children: e("howToCloseTradeTitle4"),
                                  }),
                                  (0, t.jsx)("div", {
                                    className:
                                      "rubik text-primary-dark-blue font-light",
                                    children: e("howToCloseTradeParagraph4"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "grid grid-cols-12 col-span-12 border-b-[1px] border-b-gray-200 py-[40px]",
                            children: [
                              (0, t.jsx)("div", {
                                className: "col-span-1",
                                children: (0, t.jsx)("span", {
                                  className:
                                    "text-xl md:text-5xl text-primary-blue font-semibold",
                                  children: "5",
                                }),
                              }),
                              (0, t.jsxs)("div", {
                                className: "col-span-11",
                                children: [
                                  (0, t.jsx)("div", {
                                    className:
                                      "text-xl text-primary-blue font-semibold mb-[16px]",
                                    children: e("howToCloseTradeTitle5"),
                                  }),
                                  (0, t.jsx)("div", {
                                    className:
                                      "rubik text-primary-dark-blue font-light",
                                    children: e("howToCloseTradeParagraph5"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  (0, t.jsx)("section", {
                    className:
                      "my-[32px] pt-[40px] px-[24px] pb-[24px] mb-[104px]",
                    children: (0, t.jsxs)("div", {
                      className: "grid grid-cols-12 justify-items-center",
                      children: [
                        (0, t.jsx)("div", {
                          className: "col-span-12",
                          children: (0, t.jsx)("img", { src: c }),
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "col-span-12 text-lg text-primary-blue font-semibold mt-[24px]",
                          children: e("congratsLabel"),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, t.jsx)("section", {
                className:
                  "flex justify-center items-center w-full bg-primary-blue",
                children: (0, t.jsx)("div", {
                  className: "max-w-[1280px] w-full flex items-center",
                  children: (0, t.jsxs)("div", {
                    className:
                      "flex flex-col justify-between items-center w-full px-[16px] pt-[40px] pb-[44px] md:py-[52px] md:px-[48px] md:flex-row",
                    children: [
                      (0, t.jsx)("div", {
                        className:
                          "text-2xl text-primary-white text-center font-semibold",
                        children: e("connectTradersLabel"),
                      }),
                      (0, t.jsx)("div", {
                        className: "mt-[40px] md:mt-[0px]",
                        children: (0, t.jsx)("a", {
                          href: "https://discord.gg/q4gK9sqt6r",
                          target: "_blank",
                          children: (0, t.jsxs)("div", {
                            className:
                              "flex justify-center items-center bg-primary-white w-[185px] h-[52px] rounded-[100px] cursor-pointer hover:bg-primary-yellow ",
                            children: [
                              (0, t.jsx)("span", {
                                className:
                                  "text-primary-blue text-sm font-semibold",
                                children: e("joinDiscordButtonLabel"),
                              }),
                              (0, t.jsx)("img", {
                                src: n,
                                className: "ml-[8px] w-[16px] h-[16px]",
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, t.jsx)("section", {
                className:
                  "flex justify-center w-full bg-gray-200 px-[16px] py-[32px] md:px-[0px] md:py-[92px]",
                children: (0, t.jsx)("div", {
                  className: "max-w-[1024px] p-[8px] md:py-[0px] md:px-[48px]",
                  children: (0, t.jsx)("div", {
                    className: "grid grid-cols-12",
                    children: (0, t.jsx)("div", {
                      className:
                        "col-span-12 rounded-tl-[40px] rounded-b-[40px] text-primary-dark-blue font-light text-center m-auto bg-state-warning shadow shadow-md",
                      children: (0, t.jsxs)("div", {
                        className:
                          "flex flex-col items-center gap-[8px] bg-primary-white rounded-tl-[16px] rounded-b-[16px] rounded-tr-[40px] py-[32px] px-[16px]",
                        children: [
                          (0, t.jsx)("div", {
                            className:
                              "text-xl text-primary-blue font-semibold mb-[32px]",
                            children: e("thingsToKnowParagraph1"),
                          }),
                          (0, t.jsx)("div", {
                            className: "rubik",
                            children: e("thingsToKnowParagraph2"),
                          }),
                          (0, t.jsx)("div", {
                            className: "rubik",
                            children: e("thingsToKnowParagraph3"),
                          }),
                          (0, t.jsx)("div", {
                            className: "rubik",
                            children: e("thingsToKnowParagraph4"),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
              (0, t.jsx)("section", {
                className:
                  "flex justify-center items-center w-full bg-primary-blue",
                children: (0, t.jsx)("div", {
                  className: "max-w-[1280px] w-full flex items-center",
                  children: (0, t.jsxs)("div", {
                    className:
                      "flex flex-col justify-between items-center w-full px-[16px] pt-[40px] pb-[56px] md:py-[52px] md:px-[48px] md:flex-row",
                    children: [
                      (0, t.jsx)("div", {
                        className:
                          "text-2xl text-primary-white text-center font-semibold",
                        children: e("ourSmartContractLabel"),
                      }),
                      (0, t.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                          (0, t.jsxs)("div", {
                            className:
                              "flex justify-start mt-[40px] md:mt-[0px]",
                            children: [
                              (0, t.jsx)("div", {
                                className:
                                  "flex items-center justify-center w-[32px] h-[32px] mr-[10px]",
                                children: (0, t.jsx)("div", {
                                  className:
                                    "w-[8px] h-[8px] bg-primary-yellow rounded-full",
                                }),
                              }),
                              (0, t.jsxs)("div", {
                                className: "flex flex-col justify-start",
                                children: [
                                  (0, t.jsx)("span", {
                                    className:
                                      "text-xl font-semibold text-primary-white",
                                    children: e("ethereumContractAddressLabel"),
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "break-all",
                                    children: (0, t.jsx)("a", {
                                      className:
                                        "rubik text-sm text-primary-white font-regular hover:underline",
                                      href: "https://etherscan.io/address/0x657E383EdB9A7407E468acBCc9Fe4C9730c7C275#code",
                                      target: "_blank",
                                      children:
                                        "https://etherscan.io/address/0x657E383EdB9A7407E468acBCc9Fe4C9730c7C275#code",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "bg-primary-dark-blue h-[1px] w-full my-[32px]",
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex justify-start",
                            children: [
                              (0, t.jsx)("div", {
                                className:
                                  "flex items-center justify-center w-[32px] h-[32px] mr-[10px]",
                                children: (0, t.jsx)("div", {
                                  className:
                                    "w-[8px] h-[8px] bg-primary-yellow rounded-full",
                                }),
                              }),
                              (0, t.jsxs)("div", {
                                className: "flex flex-col justify-start",
                                children: [
                                  (0, t.jsx)("span", {
                                    className:
                                      "text-xl font-semibold text-primary-white",
                                    children: e("polygonContractAddressLabel"),
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "break-all",
                                    children: (0, t.jsx)("a", {
                                      className:
                                        "rubik text-sm text-primary-white font-regular hover:underline",
                                      href: "https://polygonscan.com/address/0x4ee6e8885b684a3de405a3dca83b8823a5acf216#code",
                                      target: "_blank",
                                      children:
                                        "https://polygonscan.com/address/0x4ee6e8885b684a3de405a3dca83b8823a5acf216#code",
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
                }),
              }),
              (0, t.jsx)(x.Z, {}),
              (0, t.jsx)(i.Z, {}),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [421, 946, 790, 774, 888, 179], function () {
      return (s = 61719), e((e.s = s));
      var s;
    });
    var s = e.O();
    _N_E = s;
  },
]);
