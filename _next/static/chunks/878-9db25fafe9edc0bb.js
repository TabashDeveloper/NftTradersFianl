(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [878],
  {
    63780: function (e) {
      e.exports = (function () {
        return (
          (e = {
            926: (e) => {
              function t(e, t, r, n, o, i, a) {
                try {
                  var s = e[i](a),
                    c = s.value;
                } catch (e) {
                  return void r(e);
                }
                s.done ? t(c) : Promise.resolve(c).then(n, o);
              }
              (e.exports = function (e) {
                return function () {
                  var r = this,
                    n = arguments;
                  return new Promise(function (o, i) {
                    var a = e.apply(r, n);
                    function s(e) {
                      t(a, o, i, s, c, "next", e);
                    }
                    function c(e) {
                      t(a, o, i, s, c, "throw", e);
                    }
                    s(void 0);
                  });
                };
              }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            713: (e) => {
              (e.exports = function (e, t, r) {
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
              }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            757: (e, t, r) => {
              e.exports = r(666);
            },
            714: (e) => {
              e.exports = {
                swap: {
                  ETHEREUM: "0x657E383EdB9A7407E468acBCc9Fe4C9730c7C275",
                  RINKEBY: "0x4275f11887a9eA761A2dcF8aa9cc3d7A2Db9924A",
                  POLYGON: "0x4ee6e8885b684a3de405a3dca83b8823a5acf216",
                  MUMBAI: "0x42B7a2f083f05De5C231Ac15C440A01Ce26e2F5B",
                },
                royaltyRegistriesEngines: {
                  ETHEREUM: "0x0385603ab55642cb4Dd5De3aE9e306809991804f",
                  RINKEBY: "0x8d17687ea9a6bb6efA24ec11DcFab01661b2ddcd",
                  POLYGON: "0x28EdFcF0Be7E86b07493466e7631a213bDe8eEF2",
                  MUMBAI: "0x0a01E11887f727D1b1Cd81251eeEE9BEE4262D07",
                  XDAI: "",
                },
                contractAbi: [
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
                        indexed: !1,
                        internalType: "address",
                        name: "account",
                        type: "address",
                      },
                    ],
                    name: "Paused",
                    type: "event",
                  },
                  {
                    anonymous: !1,
                    inputs: [
                      {
                        indexed: !1,
                        internalType: "address",
                        name: "account",
                        type: "address",
                      },
                    ],
                    name: "Unpaused",
                    type: "event",
                  },
                  {
                    anonymous: !1,
                    inputs: [
                      {
                        indexed: !0,
                        internalType: "uint256",
                        name: "_swapId",
                        type: "uint256",
                      },
                      {
                        indexed: !0,
                        internalType: "address",
                        name: "_counterpart",
                        type: "address",
                      },
                    ],
                    name: "counterpartEvent",
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
                    anonymous: !1,
                    inputs: [
                      {
                        indexed: !1,
                        internalType: "bool",
                        name: "_flagFlatFee",
                        type: "bool",
                      },
                      {
                        indexed: !1,
                        internalType: "uint256",
                        name: "_flatFee",
                        type: "uint256",
                      },
                      {
                        indexed: !1,
                        internalType: "bool",
                        name: "_flagRoyalties",
                        type: "bool",
                      },
                      {
                        indexed: !1,
                        internalType: "uint256",
                        name: "_bps",
                        type: "uint256",
                      },
                      {
                        indexed: !1,
                        internalType: "uint256",
                        name: "_scalePercent",
                        type: "uint256",
                      },
                    ],
                    name: "paymentStructEvent",
                    type: "event",
                  },
                  {
                    anonymous: !1,
                    inputs: [
                      {
                        indexed: !1,
                        internalType: "address",
                        name: "_engineAddress",
                        type: "address",
                      },
                      {
                        indexed: !1,
                        internalType: "address",
                        name: "_tradeSquad",
                        type: "address",
                      },
                      {
                        indexed: !1,
                        internalType: "address",
                        name: "_partnerSquad",
                        type: "address",
                      },
                      {
                        indexed: !1,
                        internalType: "address",
                        name: "_vault",
                        type: "address",
                      },
                    ],
                    name: "referenceAddressEvent",
                    type: "event",
                  },
                  {
                    anonymous: !1,
                    inputs: [
                      {
                        indexed: !0,
                        internalType: "address",
                        name: "_creator",
                        type: "address",
                      },
                      {
                        indexed: !0,
                        internalType: "uint256",
                        name: "_time",
                        type: "uint256",
                      },
                      {
                        indexed: !0,
                        internalType:
                          "enum NFTTraderSwapRoyaltiesV1.swapStatus",
                        name: "_status",
                        type: "uint8",
                      },
                      {
                        indexed: !1,
                        internalType: "uint256",
                        name: "_swapId",
                        type: "uint256",
                      },
                      {
                        indexed: !1,
                        internalType: "address",
                        name: "_counterpart",
                        type: "address",
                      },
                      {
                        indexed: !1,
                        internalType: "address",
                        name: "_referral",
                        type: "address",
                      },
                    ],
                    name: "swapEvent",
                    type: "event",
                  },
                  {
                    inputs: [
                      { internalType: "address", name: "", type: "address" },
                    ],
                    name: "bannedAddress",
                    outputs: [{ internalType: "bool", name: "", type: "bool" }],
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "uint256",
                        name: "_swapId",
                        type: "uint256",
                      },
                    ],
                    name: "cancelSwapIntent",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "uint256",
                        name: "_swapId",
                        type: "uint256",
                      },
                      {
                        internalType: "address",
                        name: "_referral",
                        type: "address",
                      },
                    ],
                    name: "closeSwapIntent",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        components: [
                          {
                            internalType: "address payable",
                            name: "addressMaker",
                            type: "address",
                          },
                          {
                            internalType: "bool",
                            name: "discountMaker",
                            type: "bool",
                          },
                          {
                            internalType: "uint256",
                            name: "valueMaker",
                            type: "uint256",
                          },
                          {
                            internalType: "uint256",
                            name: "flatFeeMaker",
                            type: "uint256",
                          },
                          {
                            internalType: "address payable",
                            name: "addressTaker",
                            type: "address",
                          },
                          {
                            internalType: "bool",
                            name: "discountTaker",
                            type: "bool",
                          },
                          {
                            internalType: "uint256",
                            name: "valueTaker",
                            type: "uint256",
                          },
                          {
                            internalType: "uint256",
                            name: "flatFeeTaker",
                            type: "uint256",
                          },
                          {
                            internalType: "uint256",
                            name: "swapStart",
                            type: "uint256",
                          },
                          {
                            internalType: "uint256",
                            name: "swapEnd",
                            type: "uint256",
                          },
                          {
                            internalType: "bool",
                            name: "flagFlatFee",
                            type: "bool",
                          },
                          {
                            internalType: "bool",
                            name: "flagRoyalties",
                            type: "bool",
                          },
                          {
                            internalType:
                              "enum NFTTraderSwapRoyaltiesV1.swapStatus",
                            name: "status",
                            type: "uint8",
                          },
                          {
                            internalType: "uint256",
                            name: "royaltiesMaker",
                            type: "uint256",
                          },
                          {
                            internalType: "uint256",
                            name: "royaltiesTaker",
                            type: "uint256",
                          },
                        ],
                        internalType:
                          "struct NFTTraderSwapRoyaltiesV1.swapIntent",
                        name: "_swapIntent",
                        type: "tuple",
                      },
                      {
                        components: [
                          {
                            internalType: "address",
                            name: "dapp",
                            type: "address",
                          },
                          {
                            internalType:
                              "enum NFTTraderSwapRoyaltiesV1.typeStd",
                            name: "typeStd",
                            type: "uint8",
                          },
                          {
                            internalType: "uint256[]",
                            name: "tokenId",
                            type: "uint256[]",
                          },
                          {
                            internalType: "uint256[]",
                            name: "blc",
                            type: "uint256[]",
                          },
                          {
                            internalType: "uint256[]",
                            name: "roy",
                            type: "uint256[]",
                          },
                          {
                            internalType: "bytes",
                            name: "data",
                            type: "bytes",
                          },
                        ],
                        internalType:
                          "struct NFTTraderSwapRoyaltiesV1.swapStruct[]",
                        name: "_nftsMaker",
                        type: "tuple[]",
                      },
                      {
                        components: [
                          {
                            internalType: "address",
                            name: "dapp",
                            type: "address",
                          },
                          {
                            internalType:
                              "enum NFTTraderSwapRoyaltiesV1.typeStd",
                            name: "typeStd",
                            type: "uint8",
                          },
                          {
                            internalType: "uint256[]",
                            name: "tokenId",
                            type: "uint256[]",
                          },
                          {
                            internalType: "uint256[]",
                            name: "blc",
                            type: "uint256[]",
                          },
                          {
                            internalType: "uint256[]",
                            name: "roy",
                            type: "uint256[]",
                          },
                          {
                            internalType: "bytes",
                            name: "data",
                            type: "bytes",
                          },
                        ],
                        internalType:
                          "struct NFTTraderSwapRoyaltiesV1.swapStruct[]",
                        name: "_nftsTaker",
                        type: "tuple[]",
                      },
                      {
                        internalType: "address",
                        name: "_referral",
                        type: "address",
                      },
                    ],
                    name: "createSwapIntent",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "uint256",
                        name: "_swapId",
                        type: "uint256",
                      },
                      {
                        internalType: "address payable",
                        name: "_counterPart",
                        type: "address",
                      },
                    ],
                    name: "editCounterPart",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "_address",
                        type: "address",
                      },
                    ],
                    name: "flipBannedAddressState",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                  {
                    inputs: [],
                    name: "flipRoyaltiesState",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "_address",
                        type: "address",
                      },
                    ],
                    name: "getERC20WhiteList",
                    outputs: [{ internalType: "bool", name: "", type: "bool" }],
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "_address",
                        type: "address",
                      },
                    ],
                    name: "getNFTBlacklist",
                    outputs: [{ internalType: "bool", name: "", type: "bool" }],
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "uint256",
                        name: "_swapId",
                        type: "uint256",
                      },
                    ],
                    name: "getSwapIntentById",
                    outputs: [
                      {
                        components: [
                          {
                            internalType: "address payable",
                            name: "addressMaker",
                            type: "address",
                          },
                          {
                            internalType: "bool",
                            name: "discountMaker",
                            type: "bool",
                          },
                          {
                            internalType: "uint256",
                            name: "valueMaker",
                            type: "uint256",
                          },
                          {
                            internalType: "uint256",
                            name: "flatFeeMaker",
                            type: "uint256",
                          },
                          {
                            internalType: "address payable",
                            name: "addressTaker",
                            type: "address",
                          },
                          {
                            internalType: "bool",
                            name: "discountTaker",
                            type: "bool",
                          },
                          {
                            internalType: "uint256",
                            name: "valueTaker",
                            type: "uint256",
                          },
                          {
                            internalType: "uint256",
                            name: "flatFeeTaker",
                            type: "uint256",
                          },
                          {
                            internalType: "uint256",
                            name: "swapStart",
                            type: "uint256",
                          },
                          {
                            internalType: "uint256",
                            name: "swapEnd",
                            type: "uint256",
                          },
                          {
                            internalType: "bool",
                            name: "flagFlatFee",
                            type: "bool",
                          },
                          {
                            internalType: "bool",
                            name: "flagRoyalties",
                            type: "bool",
                          },
                          {
                            internalType:
                              "enum NFTTraderSwapRoyaltiesV1.swapStatus",
                            name: "status",
                            type: "uint8",
                          },
                          {
                            internalType: "uint256",
                            name: "royaltiesMaker",
                            type: "uint256",
                          },
                          {
                            internalType: "uint256",
                            name: "royaltiesTaker",
                            type: "uint256",
                          },
                        ],
                        internalType:
                          "struct NFTTraderSwapRoyaltiesV1.swapIntent",
                        name: "",
                        type: "tuple",
                      },
                    ],
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "uint256",
                        name: "_swapId",
                        type: "uint256",
                      },
                      { internalType: "bool", name: "_nfts", type: "bool" },
                      {
                        internalType: "uint256",
                        name: "_index",
                        type: "uint256",
                      },
                    ],
                    name: "getSwapStruct",
                    outputs: [
                      {
                        components: [
                          {
                            internalType: "address",
                            name: "dapp",
                            type: "address",
                          },
                          {
                            internalType:
                              "enum NFTTraderSwapRoyaltiesV1.typeStd",
                            name: "typeStd",
                            type: "uint8",
                          },
                          {
                            internalType: "uint256[]",
                            name: "tokenId",
                            type: "uint256[]",
                          },
                          {
                            internalType: "uint256[]",
                            name: "blc",
                            type: "uint256[]",
                          },
                          {
                            internalType: "uint256[]",
                            name: "roy",
                            type: "uint256[]",
                          },
                          {
                            internalType: "bytes",
                            name: "data",
                            type: "bytes",
                          },
                        ],
                        internalType:
                          "struct NFTTraderSwapRoyaltiesV1.swapStruct",
                        name: "",
                        type: "tuple",
                      },
                    ],
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "uint256",
                        name: "_swapId",
                        type: "uint256",
                      },
                      { internalType: "bool", name: "_nfts", type: "bool" },
                    ],
                    name: "getSwapStructSize",
                    outputs: [
                      { internalType: "uint256", name: "", type: "uint256" },
                    ],
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    inputs: [],
                    name: "owner",
                    outputs: [
                      { internalType: "address", name: "", type: "address" },
                    ],
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    inputs: [
                      { internalType: "bool", name: "_paused", type: "bool" },
                    ],
                    name: "pauseContract",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                  {
                    inputs: [],
                    name: "paused",
                    outputs: [{ internalType: "bool", name: "", type: "bool" }],
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    inputs: [],
                    name: "payment",
                    outputs: [
                      {
                        internalType: "bool",
                        name: "flagFlatFee",
                        type: "bool",
                      },
                      {
                        internalType: "bool",
                        name: "flagRoyalties",
                        type: "bool",
                      },
                      {
                        internalType: "uint256",
                        name: "flatFee",
                        type: "uint256",
                      },
                      { internalType: "uint256", name: "bps", type: "uint256" },
                      {
                        internalType: "uint256",
                        name: "scalePercent",
                        type: "uint256",
                      },
                    ],
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    inputs: [],
                    name: "referenceAddress",
                    outputs: [
                      {
                        internalType: "address",
                        name: "ROYALTYENGINEADDRESS",
                        type: "address",
                      },
                      {
                        internalType: "address",
                        name: "TRADESQUAD",
                        type: "address",
                      },
                      {
                        internalType: "address",
                        name: "PARTNERSQUAD",
                        type: "address",
                      },
                      {
                        internalType: "address payable",
                        name: "VAULT",
                        type: "address",
                      },
                    ],
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
                      {
                        internalType: "address",
                        name: "_dapp",
                        type: "address",
                      },
                      { internalType: "bool", name: "_status", type: "bool" },
                    ],
                    name: "setERC20Whitelist",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "_dapp",
                        type: "address",
                      },
                      { internalType: "bool", name: "_status", type: "bool" },
                    ],
                    name: "setNFTBlacklist",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "bool",
                        name: "_flagFlatFee",
                        type: "bool",
                      },
                      {
                        internalType: "uint256",
                        name: "_flatFee",
                        type: "uint256",
                      },
                      {
                        internalType: "bool",
                        name: "_flagRoyalties",
                        type: "bool",
                      },
                      {
                        internalType: "uint256",
                        name: "_bps",
                        type: "uint256",
                      },
                      {
                        internalType: "uint256",
                        name: "_scalePercent",
                        type: "uint256",
                      },
                    ],
                    name: "setPaymentStruct",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "_engineAddress",
                        type: "address",
                      },
                      {
                        internalType: "address",
                        name: "_tradeSquad",
                        type: "address",
                      },
                      {
                        internalType: "address",
                        name: "_partnerSquad",
                        type: "address",
                      },
                      {
                        internalType: "address payable",
                        name: "_vault",
                        type: "address",
                      },
                    ],
                    name: "setReferenceAddresses",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "newOwner",
                        type: "address",
                      },
                    ],
                    name: "transferOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                  { stateMutability: "payable", type: "receive" },
                ],
                erc721Abi: [
                  {
                    constant: !1,
                    inputs: [
                      { internalType: "address", name: "to", type: "address" },
                      {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                      },
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
                      {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                      },
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
                      {
                        internalType: "address",
                        name: "from",
                        type: "address",
                      },
                      { internalType: "address", name: "to", type: "address" },
                      {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                      },
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
                      {
                        internalType: "address",
                        name: "from",
                        type: "address",
                      },
                      { internalType: "address", name: "to", type: "address" },
                      {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                      },
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
                      {
                        internalType: "address",
                        name: "from",
                        type: "address",
                      },
                      { internalType: "address", name: "to", type: "address" },
                      {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                      },
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
                      {
                        internalType: "address",
                        name: "owner",
                        type: "address",
                      },
                    ],
                    name: "balanceOf",
                    outputs: [
                      { internalType: "uint256", name: "", type: "uint256" },
                    ],
                    payable: !1,
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    constant: !0,
                    inputs: [
                      {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                      },
                    ],
                    name: "getApproved",
                    outputs: [
                      { internalType: "address", name: "", type: "address" },
                    ],
                    payable: !1,
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    constant: !0,
                    inputs: [
                      {
                        internalType: "address",
                        name: "owner",
                        type: "address",
                      },
                      {
                        internalType: "address",
                        name: "operator",
                        type: "address",
                      },
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
                      {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                      },
                    ],
                    name: "ownerOf",
                    outputs: [
                      { internalType: "address", name: "", type: "address" },
                    ],
                    payable: !1,
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    constant: !0,
                    inputs: [
                      {
                        internalType: "bytes4",
                        name: "interfaceId",
                        type: "bytes4",
                      },
                    ],
                    name: "supportsInterface",
                    outputs: [{ internalType: "bool", name: "", type: "bool" }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function",
                  },
                ],
                erc20Abi: [
                  {
                    inputs: [
                      {
                        internalType: "uint256",
                        name: "chainId_",
                        type: "uint256",
                      },
                    ],
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
                        name: "src",
                        type: "address",
                      },
                      {
                        indexed: !0,
                        internalType: "address",
                        name: "guy",
                        type: "address",
                      },
                      {
                        indexed: !1,
                        internalType: "uint256",
                        name: "wad",
                        type: "uint256",
                      },
                    ],
                    name: "Approval",
                    type: "event",
                  },
                  {
                    anonymous: !0,
                    inputs: [
                      {
                        indexed: !0,
                        internalType: "bytes4",
                        name: "sig",
                        type: "bytes4",
                      },
                      {
                        indexed: !0,
                        internalType: "address",
                        name: "usr",
                        type: "address",
                      },
                      {
                        indexed: !0,
                        internalType: "bytes32",
                        name: "arg1",
                        type: "bytes32",
                      },
                      {
                        indexed: !0,
                        internalType: "bytes32",
                        name: "arg2",
                        type: "bytes32",
                      },
                      {
                        indexed: !1,
                        internalType: "bytes",
                        name: "data",
                        type: "bytes",
                      },
                    ],
                    name: "LogNote",
                    type: "event",
                  },
                  {
                    anonymous: !1,
                    inputs: [
                      {
                        indexed: !0,
                        internalType: "address",
                        name: "src",
                        type: "address",
                      },
                      {
                        indexed: !0,
                        internalType: "address",
                        name: "dst",
                        type: "address",
                      },
                      {
                        indexed: !1,
                        internalType: "uint256",
                        name: "wad",
                        type: "uint256",
                      },
                    ],
                    name: "Transfer",
                    type: "event",
                  },
                  {
                    constant: !0,
                    inputs: [],
                    name: "DOMAIN_SEPARATOR",
                    outputs: [
                      { internalType: "bytes32", name: "", type: "bytes32" },
                    ],
                    payable: !1,
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    constant: !0,
                    inputs: [],
                    name: "PERMIT_TYPEHASH",
                    outputs: [
                      { internalType: "bytes32", name: "", type: "bytes32" },
                    ],
                    payable: !1,
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    constant: !0,
                    inputs: [
                      { internalType: "address", name: "", type: "address" },
                      { internalType: "address", name: "", type: "address" },
                    ],
                    name: "allowance",
                    outputs: [
                      { internalType: "uint256", name: "", type: "uint256" },
                    ],
                    payable: !1,
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    constant: !1,
                    inputs: [
                      { internalType: "address", name: "usr", type: "address" },
                      { internalType: "uint256", name: "wad", type: "uint256" },
                    ],
                    name: "approve",
                    outputs: [{ internalType: "bool", name: "", type: "bool" }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                  {
                    constant: !0,
                    inputs: [
                      { internalType: "address", name: "", type: "address" },
                    ],
                    name: "balanceOf",
                    outputs: [
                      { internalType: "uint256", name: "", type: "uint256" },
                    ],
                    payable: !1,
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    constant: !1,
                    inputs: [
                      { internalType: "address", name: "usr", type: "address" },
                      { internalType: "uint256", name: "wad", type: "uint256" },
                    ],
                    name: "burn",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                  {
                    constant: !0,
                    inputs: [],
                    name: "decimals",
                    outputs: [
                      { internalType: "uint8", name: "", type: "uint8" },
                    ],
                    payable: !1,
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    constant: !1,
                    inputs: [
                      { internalType: "address", name: "guy", type: "address" },
                    ],
                    name: "deny",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                  {
                    constant: !1,
                    inputs: [
                      { internalType: "address", name: "usr", type: "address" },
                      { internalType: "uint256", name: "wad", type: "uint256" },
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
                      { internalType: "address", name: "src", type: "address" },
                      { internalType: "address", name: "dst", type: "address" },
                      { internalType: "uint256", name: "wad", type: "uint256" },
                    ],
                    name: "move",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                  {
                    constant: !0,
                    inputs: [],
                    name: "name",
                    outputs: [
                      { internalType: "string", name: "", type: "string" },
                    ],
                    payable: !1,
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    constant: !0,
                    inputs: [
                      { internalType: "address", name: "", type: "address" },
                    ],
                    name: "nonces",
                    outputs: [
                      { internalType: "uint256", name: "", type: "uint256" },
                    ],
                    payable: !1,
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    constant: !1,
                    inputs: [
                      {
                        internalType: "address",
                        name: "holder",
                        type: "address",
                      },
                      {
                        internalType: "address",
                        name: "spender",
                        type: "address",
                      },
                      {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256",
                      },
                      {
                        internalType: "uint256",
                        name: "expiry",
                        type: "uint256",
                      },
                      { internalType: "bool", name: "allowed", type: "bool" },
                      { internalType: "uint8", name: "v", type: "uint8" },
                      { internalType: "bytes32", name: "r", type: "bytes32" },
                      { internalType: "bytes32", name: "s", type: "bytes32" },
                    ],
                    name: "permit",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                  {
                    constant: !1,
                    inputs: [
                      { internalType: "address", name: "usr", type: "address" },
                      { internalType: "uint256", name: "wad", type: "uint256" },
                    ],
                    name: "pull",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                  {
                    constant: !1,
                    inputs: [
                      { internalType: "address", name: "usr", type: "address" },
                      { internalType: "uint256", name: "wad", type: "uint256" },
                    ],
                    name: "push",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                  {
                    constant: !1,
                    inputs: [
                      { internalType: "address", name: "guy", type: "address" },
                    ],
                    name: "rely",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                  {
                    constant: !0,
                    inputs: [],
                    name: "symbol",
                    outputs: [
                      { internalType: "string", name: "", type: "string" },
                    ],
                    payable: !1,
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    constant: !0,
                    inputs: [],
                    name: "totalSupply",
                    outputs: [
                      { internalType: "uint256", name: "", type: "uint256" },
                    ],
                    payable: !1,
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    constant: !1,
                    inputs: [
                      { internalType: "address", name: "dst", type: "address" },
                      { internalType: "uint256", name: "wad", type: "uint256" },
                    ],
                    name: "transfer",
                    outputs: [{ internalType: "bool", name: "", type: "bool" }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                  {
                    constant: !1,
                    inputs: [
                      { internalType: "address", name: "src", type: "address" },
                      { internalType: "address", name: "dst", type: "address" },
                      { internalType: "uint256", name: "wad", type: "uint256" },
                    ],
                    name: "transferFrom",
                    outputs: [{ internalType: "bool", name: "", type: "bool" }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                  {
                    constant: !0,
                    inputs: [],
                    name: "version",
                    outputs: [
                      { internalType: "string", name: "", type: "string" },
                    ],
                    payable: !1,
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    constant: !0,
                    inputs: [
                      { internalType: "address", name: "", type: "address" },
                    ],
                    name: "wards",
                    outputs: [
                      { internalType: "uint256", name: "", type: "uint256" },
                    ],
                    payable: !1,
                    stateMutability: "view",
                    type: "function",
                  },
                ],
                royaltyRegistryEngineAbi: [
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
                    inputs: [],
                    name: "owner",
                    outputs: [
                      { internalType: "address", name: "", type: "address" },
                    ],
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
                    inputs: [],
                    name: "royaltyRegistry",
                    outputs: [
                      { internalType: "address", name: "", type: "address" },
                    ],
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "newOwner",
                        type: "address",
                      },
                    ],
                    name: "transferOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "royaltyRegistry_",
                        type: "address",
                      },
                    ],
                    name: "initialize",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "bytes4",
                        name: "interfaceId",
                        type: "bytes4",
                      },
                    ],
                    name: "supportsInterface",
                    outputs: [{ internalType: "bool", name: "", type: "bool" }],
                    stateMutability: "view",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "tokenAddress",
                        type: "address",
                      },
                      {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                      },
                      {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256",
                      },
                    ],
                    name: "getRoyalty",
                    outputs: [
                      {
                        internalType: "address payable[]",
                        name: "recipients",
                        type: "address[]",
                      },
                      {
                        internalType: "uint256[]",
                        name: "amounts",
                        type: "uint256[]",
                      },
                    ],
                    stateMutability: "nonpayable",
                    type: "function",
                  },
                  {
                    inputs: [
                      {
                        internalType: "address",
                        name: "tokenAddress",
                        type: "address",
                      },
                      {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                      },
                      {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256",
                      },
                    ],
                    name: "getRoyaltyView",
                    outputs: [
                      {
                        internalType: "address payable[]",
                        name: "recipients",
                        type: "address[]",
                      },
                      {
                        internalType: "uint256[]",
                        name: "amounts",
                        type: "uint256[]",
                      },
                    ],
                    stateMutability: "view",
                    type: "function",
                  },
                ],
              };
            },
            319: (e) => {
              e.exports = {
                events: [
                  "createSwapTransactionCreated",
                  "createSwapTransactionMined",
                  "createSwapTransactionError",
                  "cancelSwapTransactionCreated",
                  "cancelSwapTransactionMined",
                  "cancelSwapTransactionError",
                  "closeSwapTransactionCreated",
                  "closeSwapTransactionMined",
                  "closeSwapTransactionError",
                  "editTakerTransactionCreated",
                  "editTakerTransactionMined",
                  "editTakerTransactionError",
                ],
              };
            },
            579: (e, t, r) => {
              var n = r(57);
              e.exports = n;
            },
            57: (e, t, r) => {
              var n = r(757),
                o = r(713),
                i = r(926);
              function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(e);
                  t &&
                    (n = n.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
                }
                return r;
              }
              function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? a(Object(r), !0).forEach(function (t) {
                        o(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(r)
                      )
                    : a(Object(r)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(r, t)
                        );
                      });
                }
                return e;
              }
              var c = r(714),
                u = c.swap,
                l = c.royaltyRegistriesEngines,
                p = c.contractAbi,
                d = c.erc721Abi,
                h = c.royaltyRegistryEngineAbi,
                f = r(319).events;
              function y(e) {
                var t = this,
                  r = e.ethers,
                  n = e.web3Provider,
                  o = e.jsonRpcProvider,
                  i = e.network,
                  a = e.signer,
                  s = void 0 === a ? null : a,
                  c = e.avoidPrivateKeySigner,
                  l = void 0 !== c && c;
                if (!r)
                  throw new Error(
                    "You must provide an ethers instance to the SDK."
                  );
                if (
                  ((this.ethers = r),
                  (this.provider = null),
                  (this.contractAddress = null),
                  (this.contract = null),
                  (this.signer = null),
                  (this.isJsonRpcProvider = !1),
                  (this.isWeb3Provider = !1),
                  (this.blocksNumberConfirmationRequired = 3),
                  (this.avoidPrivateKeySigner = l),
                  (this.events = f),
                  (this.eventsCollectorCallbacks = []),
                  this.events.forEach(function (e) {
                    t.eventsCollectorCallbacks.push({ name: e, callbacks: [] });
                  }),
                  n && o)
                )
                  throw new Error("just one provider at a time is supported.");
                if ("string" != typeof o && void 0 !== o)
                  throw new Error(
                    "jsonRpcProvider must be a string -> Eg. https://rinkeby.infura.io/v3/..."
                  );
                if ("string" == typeof n && void 0 !== n)
                  throw new Error(
                    "web3Provider must be an object -> Eg. window.ethereum"
                  );
                if (void 0 === u[i]) throw new Error("network not supported.");
                if ("string" == typeof o) {
                  if (!1 === this.avoidPrivateKeySigner) {
                    if (null == s)
                      throw new Error(
                        "signer is mandatory if you use a JSON RPC Provider."
                      );
                    if (void 0 === s.privateKey)
                      throw new Error(
                        "signer object must have a privateKey property."
                      );
                  }
                  this.isJsonRpcProvider = !0;
                }
                null != n && (this.isWeb3Provider = !0);
                try {
                  if (this.isJsonRpcProvider) {
                    if (
                      ((this.provider =
                        new this.ethers.providers.JsonRpcProvider(o)),
                      !1 === this.avoidPrivateKeySigner)
                    )
                      try {
                        this.signer = new this.ethers.Wallet(
                          s.privateKey,
                          this.provider
                        );
                      } catch (e) {
                        throw new Error(
                          "provide a valid private key for the signer."
                        );
                      }
                  } else
                    this.isWeb3Provider &&
                      (n instanceof this.ethers.providers.Web3Provider
                        ? (this.provider = n)
                        : (this.provider =
                            new this.ethers.providers.Web3Provider(n)));
                  (this.contractAddress = u[i]),
                    (this.contract = new this.ethers.Contract(
                      this.contractAddress,
                      p,
                      this.provider
                    )),
                    this.isJsonRpcProvider &&
                      !1 === this.avoidPrivateKeySigner &&
                      (this.contract = this.contract.connect(this.signer));
                } catch (e) {
                  throw new Error(e);
                }
              }
              (y.prototype.on = function (e, t) {
                var r = this.eventsCollectorCallbacks.find(function (t) {
                  return t.name === e;
                });
                if (!r) throw new Error("event not supported.");
                r.callbacks.push(t);
              }),
                (y.prototype.off = function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null,
                    r = this.eventsCollectorCallbacks.find(function (t) {
                      return t.name === e;
                    });
                  if (!r) throw new Error("event not supported.");
                  if (null !== t && "function" != typeof t && void 0 !== t)
                    throw new Error("callback must be a Function.");
                  if (t) {
                    var n = r.callbacks.findIndex(function (e) {
                      return e.toString() === t.toString();
                    });
                    r.callbacks.splice(n, 1);
                  } else r.callbacks = [];
                }),
                (y.prototype.__emit = function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r = this.eventsCollectorCallbacks.find(function (t) {
                      return t.name === e;
                    });
                  if (!r) throw new Error(error);
                  r.callbacks.forEach(function (e) {
                    e(t);
                  });
                }),
                (y.prototype.setBlocksNumberConfirmationRequired = function (
                  e
                ) {
                  if (e < 1)
                    throw new Error(
                      "blocksNumberConfirmationRequired cannot be lower than one."
                    );
                  this.blocksNumberConfirmationRequired = e;
                }),
                (y.prototype.createSwap = (function () {
                  var e = i(
                    n.mark(function e(t) {
                      var r,
                        o,
                        i,
                        a,
                        c,
                        u,
                        l,
                        p,
                        h,
                        f,
                        y,
                        m,
                        b,
                        v,
                        g,
                        w,
                        T,
                        k,
                        E,
                        S,
                        x,
                        P,
                        _,
                        A,
                        R,
                        O,
                        C,
                        I,
                        N,
                        L,
                        M,
                        j,
                        D,
                        B,
                        F,
                        U,
                        Y,
                        W,
                        K,
                        H,
                        G,
                        z,
                        q,
                        J,
                        V = arguments;
                      return n.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((r = t.ethMaker),
                                  (o = t.taker),
                                  (i = t.ethTaker),
                                  (a = t.swapEnd),
                                  (c = void 0 === a ? 0 : a),
                                  (u = t.assetsMaker),
                                  (l = void 0 === u ? [] : u),
                                  (p = t.assetsTaker),
                                  (h = void 0 === p ? [] : p),
                                  (f = t.referralAddress),
                                  (y =
                                    void 0 === f
                                      ? "0x0000000000000000000000000000000000000000"
                                      : f),
                                  (m =
                                    V.length > 1 && void 0 !== V[1]
                                      ? V[1]
                                      : 2e6),
                                  (b =
                                    V.length > 2 && void 0 !== V[2]
                                      ? V[2]
                                      : null),
                                  !this.avoidPrivateKeySigner ||
                                    !this.isJsonRpcProvider)
                                ) {
                                  e.next = 5;
                                  break;
                                }
                                throw new Error(
                                  "you cannot create a swap when you're in jsonRpcProvider mode with avoidPrivateKeySigner param set to true. In this mode you should just read data from the blockchain, not write a transaction."
                                );
                              case 5:
                                if (!(c < 0)) {
                                  e.next = 7;
                                  break;
                                }
                                throw new Error(
                                  "swapEnd cannot be lower than zero."
                                );
                              case 7:
                                if ("string" == typeof r) {
                                  e.next = 9;
                                  break;
                                }
                                throw new Error("ethMaker must be a string.");
                              case 9:
                                if ("string" == typeof i) {
                                  e.next = 11;
                                  break;
                                }
                                throw new Error("ethTaker must be a string.");
                              case 11:
                                if (!this.isJsonRpcProvider) {
                                  e.next = 15;
                                  break;
                                }
                                (e.t0 = this.signer.address), (e.next = 18);
                                break;
                              case 15:
                                return (
                                  (e.next = 17), this.provider.listAccounts()
                                );
                              case 17:
                                e.t0 = e.sent[0];
                              case 18:
                                return (
                                  (v = e.t0),
                                  (g = !1),
                                  (w = this.ethers.BigNumber.from(r)),
                                  (T = 0),
                                  (k = o),
                                  (E = !1),
                                  (S = this.ethers.BigNumber.from(i)),
                                  (x = 0),
                                  (P = 0),
                                  (_ = !1),
                                  (A = !1),
                                  (R = 0),
                                  (O = 0),
                                  (C = 0),
                                  (I = [
                                    v,
                                    g,
                                    w.toString(),
                                    T,
                                    k,
                                    E,
                                    S.toString(),
                                    x,
                                    P,
                                    c,
                                    _,
                                    A,
                                    R,
                                    O,
                                    C,
                                  ]),
                                  (N = !1),
                                  (e.prev = 34),
                                  (e.next = 37),
                                  this.getPayment()
                                );
                              case 37:
                                return (
                                  (M = e.sent),
                                  (j = M.flatFee),
                                  (L = j),
                                  (e.next = 42),
                                  this.getReferenceAddress()
                                );
                              case 42:
                                return (
                                  (D = e.sent),
                                  (B = D.TRADESQUAD),
                                  (F = D.PARTNERSQUAD),
                                  (U = new this.ethers.Contract(
                                    B,
                                    d,
                                    this.provider
                                  )),
                                  (Y = new this.ethers.Contract(
                                    F,
                                    d,
                                    this.provider
                                  )),
                                  (e.next = 49),
                                  U.balanceOf(v)
                                );
                              case 49:
                                return (
                                  (W = e.sent), (e.next = 52), Y.balanceOf(v)
                                );
                              case 52:
                                (K = e.sent),
                                  (W.gt(0) || K.gt(0)) && (N = !0),
                                  (e.next = 59);
                                break;
                              case 56:
                                throw (
                                  ((e.prev = 56),
                                  (e.t1 = e.catch(34)),
                                  new Error(e.t1))
                                );
                              case 59:
                                return (
                                  ((H = {}).value = N
                                    ? w.toString()
                                    : w.add(L).toString()),
                                  m && (H.gasLimit = m),
                                  b && (H.gasPrice = b),
                                  (z = this.contract),
                                  this.isWeb3Provider &&
                                    ((G = this.provider.getSigner(v)),
                                    (z = this.contract.connect(G))),
                                  (e.prev = 65),
                                  (e.next = 68),
                                  z.createSwapIntent(I, l, h, y, s({}, H))
                                );
                              case 68:
                                return (
                                  (q = e.sent),
                                  this.__emit("createSwapTransactionCreated", {
                                    tx: q,
                                  }),
                                  (e.prev = 70),
                                  (e.next = 73),
                                  q.wait(this.blocksNumberConfirmationRequired)
                                );
                              case 73:
                                (J = e.sent),
                                  this.__emit("createSwapTransactionMined", {
                                    receipt: J,
                                  }),
                                  (e.next = 80);
                                break;
                              case 77:
                                (e.prev = 77),
                                  (e.t2 = e.catch(70)),
                                  this.__emit("createSwapTransactionError", {
                                    error: e.t2,
                                    typeError: "waitError",
                                  });
                              case 80:
                                e.next = 85;
                                break;
                              case 82:
                                (e.prev = 82),
                                  (e.t3 = e.catch(65)),
                                  this.__emit("createSwapTransactionError", {
                                    error: e.t3,
                                    typeError: "createSwapIntentError",
                                  });
                              case 85:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [
                          [34, 56],
                          [65, 82],
                          [70, 77],
                        ]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()),
                (y.prototype.estimateGasCreateSwap = (function () {
                  var e = i(
                    n.mark(function e(t) {
                      var r,
                        o,
                        i,
                        a,
                        c,
                        u,
                        l,
                        p,
                        h,
                        f,
                        y,
                        m,
                        b,
                        v,
                        g,
                        w,
                        T,
                        k,
                        E,
                        S,
                        x,
                        P,
                        _,
                        A,
                        R,
                        O,
                        C,
                        I,
                        N,
                        L,
                        M,
                        j,
                        D,
                        B,
                        F,
                        U,
                        Y,
                        W,
                        K,
                        H,
                        G,
                        z,
                        q,
                        J = arguments;
                      return n.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((r = t.ethMaker),
                                  (o = t.taker),
                                  (i = t.ethTaker),
                                  (a = t.swapEnd),
                                  (c = void 0 === a ? 0 : a),
                                  (u = t.assetsMaker),
                                  (l = void 0 === u ? [] : u),
                                  (p = t.assetsTaker),
                                  (h = void 0 === p ? [] : p),
                                  (f = t.referralAddress),
                                  (y =
                                    void 0 === f
                                      ? "0x0000000000000000000000000000000000000000"
                                      : f),
                                  (m =
                                    J.length > 1 && void 0 !== J[1]
                                      ? J[1]
                                      : 2e6),
                                  (b =
                                    J.length > 2 && void 0 !== J[2]
                                      ? J[2]
                                      : null),
                                  !this.avoidPrivateKeySigner ||
                                    !this.isJsonRpcProvider)
                                ) {
                                  e.next = 5;
                                  break;
                                }
                                throw new Error(
                                  "you cannot create a swap when you're in jsonRpcProvider mode with avoidPrivateKeySigner param set to true. In this mode you should just read data from the blockchain, not write a transaction."
                                );
                              case 5:
                                if (!(c < 0)) {
                                  e.next = 7;
                                  break;
                                }
                                throw new Error(
                                  "swapEnd cannot be lower than zero."
                                );
                              case 7:
                                if ("string" == typeof r) {
                                  e.next = 9;
                                  break;
                                }
                                throw new Error("ethMaker must be a string.");
                              case 9:
                                if ("string" == typeof i) {
                                  e.next = 11;
                                  break;
                                }
                                throw new Error("ethTaker must be a string.");
                              case 11:
                                if (!this.isJsonRpcProvider) {
                                  e.next = 15;
                                  break;
                                }
                                (e.t0 = this.signer.address), (e.next = 18);
                                break;
                              case 15:
                                return (
                                  (e.next = 17), this.provider.listAccounts()
                                );
                              case 17:
                                e.t0 = e.sent[0];
                              case 18:
                                return (
                                  (v = e.t0),
                                  (g = !1),
                                  (w = this.ethers.BigNumber.from(r)),
                                  (T = 0),
                                  (k = o),
                                  (E = !1),
                                  (S = this.ethers.BigNumber.from(i)),
                                  (x = 0),
                                  (P = 0),
                                  (_ = !1),
                                  (A = !1),
                                  (R = 0),
                                  (O = 0),
                                  (C = 0),
                                  (I = [
                                    v,
                                    g,
                                    w.toString(),
                                    T,
                                    k,
                                    E,
                                    S.toString(),
                                    x,
                                    P,
                                    c,
                                    _,
                                    A,
                                    R,
                                    O,
                                    C,
                                  ]),
                                  (N = !1),
                                  (e.prev = 34),
                                  (e.next = 37),
                                  this.getPayment()
                                );
                              case 37:
                                return (
                                  (M = e.sent),
                                  (j = M.flatFee),
                                  (L = j),
                                  (e.next = 42),
                                  this.getReferenceAddress()
                                );
                              case 42:
                                return (
                                  (D = e.sent),
                                  (B = D.TRADESQUAD),
                                  (F = D.PARTNERSQUAD),
                                  (U = new this.ethers.Contract(
                                    B,
                                    d,
                                    this.provider
                                  )),
                                  (Y = new this.ethers.Contract(
                                    F,
                                    d,
                                    this.provider
                                  )),
                                  (e.next = 49),
                                  U.balanceOf(v)
                                );
                              case 49:
                                return (
                                  (W = e.sent), (e.next = 52), Y.balanceOf(v)
                                );
                              case 52:
                                (K = e.sent),
                                  (W.gt(0) || K.gt(0)) && (N = !0),
                                  (e.next = 59);
                                break;
                              case 56:
                                throw (
                                  ((e.prev = 56),
                                  (e.t1 = e.catch(34)),
                                  new Error(e.t1))
                                );
                              case 59:
                                return (
                                  ((H = {}).value = N
                                    ? w.toString()
                                    : w.add(L).toString()),
                                  m && (H.gasLimit = m),
                                  b && (H.gasPrice = b),
                                  (z = this.contract),
                                  this.isWeb3Provider &&
                                    ((G = this.provider.getSigner(v)),
                                    (z = this.contract.connect(G))),
                                  (e.prev = 65),
                                  (e.next = 68),
                                  z.estimateGas.createSwapIntent(
                                    I,
                                    l,
                                    h,
                                    y,
                                    s({}, H)
                                  )
                                );
                              case 68:
                                return (q = e.sent), e.abrupt("return", q);
                              case 72:
                                return (
                                  (e.prev = 72),
                                  (e.t2 = e.catch(65)),
                                  console.error(e.t2),
                                  e.abrupt("return", null)
                                );
                              case 76:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [
                          [34, 56],
                          [65, 72],
                        ]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()),
                (y.prototype.closeSwap = (function () {
                  var e = i(
                    n.mark(function e(t) {
                      var r,
                        o,
                        i,
                        a,
                        c,
                        u,
                        l,
                        p,
                        h,
                        f,
                        y,
                        m,
                        b,
                        v,
                        g,
                        w,
                        T,
                        k,
                        E,
                        S,
                        x,
                        P,
                        _,
                        A,
                        R,
                        O = arguments;
                      return n.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((r = t.swapId),
                                  (o = t.referralAddress),
                                  (i =
                                    void 0 === o
                                      ? "0x0000000000000000000000000000000000000000"
                                      : o),
                                  (a =
                                    O.length > 1 && void 0 !== O[1]
                                      ? O[1]
                                      : 2e6),
                                  (c =
                                    O.length > 2 && void 0 !== O[2]
                                      ? O[2]
                                      : null),
                                  !this.avoidPrivateKeySigner ||
                                    !this.isJsonRpcProvider)
                                ) {
                                  e.next = 5;
                                  break;
                                }
                                throw new Error(
                                  "you cannot close a swap when you're in jsonRpcProvider mode with avoidPrivateKeySigner param set to true. In this mode you should just read data from the blockchain, not write a transaction."
                                );
                              case 5:
                                return (
                                  (e.prev = 5),
                                  (u = !1),
                                  (e.next = 9),
                                  this.getPayment()
                                );
                              case 9:
                                if (
                                  ((l = e.sent),
                                  (p = l.flatFee),
                                  (h = p),
                                  !this.isJsonRpcProvider)
                                ) {
                                  e.next = 16;
                                  break;
                                }
                                (e.t0 = this.signer.address), (e.next = 19);
                                break;
                              case 16:
                                return (
                                  (e.next = 18), this.provider.listAccounts()
                                );
                              case 18:
                                e.t0 = e.sent[0];
                              case 19:
                                return (
                                  (f = e.t0),
                                  (e.next = 22),
                                  this.getSwapDetails(r)
                                );
                              case 22:
                                return (
                                  (y = e.sent),
                                  (m = y.valueTaker),
                                  (e.next = 26),
                                  this.getReferenceAddress()
                                );
                              case 26:
                                return (
                                  (b = e.sent),
                                  (v = b.TRADESQUAD),
                                  (g = b.PARTNERSQUAD),
                                  (w = new this.ethers.Contract(
                                    v,
                                    d,
                                    this.provider
                                  )),
                                  (T = new this.ethers.Contract(
                                    g,
                                    d,
                                    this.provider
                                  )),
                                  (e.next = 33),
                                  w.balanceOf(f)
                                );
                              case 33:
                                return (
                                  (k = e.sent), (e.next = 36), T.balanceOf(f)
                                );
                              case 36:
                                if (
                                  ((E = e.sent),
                                  (k.gt(0) || E.gt(0)) && (u = !0),
                                  ((S = {}).value = u
                                    ? m.toString()
                                    : m.add(h).toString()),
                                  a && (S.gasLimit = a),
                                  c && (S.gasPrice = c),
                                  (_ = this.contract),
                                  !this.isWeb3Provider)
                                ) {
                                  e.next = 49;
                                  break;
                                }
                                return (
                                  (e.next = 46), this.provider.listAccounts()
                                );
                              case 46:
                                (x = e.sent[0]),
                                  (P = this.provider.getSigner(x)),
                                  (_ = this.contract.connect(P));
                              case 49:
                                return (
                                  (e.prev = 49),
                                  (e.next = 52),
                                  _.closeSwapIntent(r, i, s({}, S))
                                );
                              case 52:
                                return (
                                  (A = e.sent),
                                  this.__emit("closeSwapTransactionCreated", {
                                    tx: A,
                                  }),
                                  (e.prev = 54),
                                  (e.next = 57),
                                  A.wait(this.blocksNumberConfirmationRequired)
                                );
                              case 57:
                                (R = e.sent),
                                  this.__emit("closeSwapTransactionMined", {
                                    receipt: R,
                                  }),
                                  (e.next = 64);
                                break;
                              case 61:
                                (e.prev = 61),
                                  (e.t1 = e.catch(54)),
                                  this.__emit("closeSwapTransactionError", {
                                    error: e.t1,
                                    typeError: "waitError",
                                  });
                              case 64:
                                e.next = 69;
                                break;
                              case 66:
                                (e.prev = 66),
                                  (e.t2 = e.catch(49)),
                                  this.__emit("closeSwapTransactionError", {
                                    error: e.t2,
                                    typeError: "closeSwapIntentError",
                                  });
                              case 69:
                                e.next = 74;
                                break;
                              case 71:
                                throw (
                                  ((e.prev = 71),
                                  (e.t3 = e.catch(5)),
                                  new Error(e.t3))
                                );
                              case 74:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [
                          [5, 71],
                          [49, 66],
                          [54, 61],
                        ]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()),
                (y.prototype.estimateGasCloseSwap = (function () {
                  var e = i(
                    n.mark(function e(t) {
                      var r,
                        o,
                        i,
                        a,
                        c,
                        u,
                        l,
                        p,
                        h,
                        f,
                        y,
                        m,
                        b,
                        v,
                        g,
                        w,
                        T,
                        k,
                        E,
                        S,
                        x,
                        P,
                        _,
                        A,
                        R = arguments;
                      return n.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((r = t.swapId),
                                  (o = t.referralAddress),
                                  (i =
                                    void 0 === o
                                      ? "0x0000000000000000000000000000000000000000"
                                      : o),
                                  (a =
                                    R.length > 1 && void 0 !== R[1]
                                      ? R[1]
                                      : 2e6),
                                  (c =
                                    R.length > 2 && void 0 !== R[2]
                                      ? R[2]
                                      : null),
                                  !this.avoidPrivateKeySigner ||
                                    !this.isJsonRpcProvider)
                                ) {
                                  e.next = 5;
                                  break;
                                }
                                throw new Error(
                                  "you cannot close a swap when you're in jsonRpcProvider mode with avoidPrivateKeySigner param set to true. In this mode you should just read data from the blockchain, not write a transaction."
                                );
                              case 5:
                                return (
                                  (e.prev = 5),
                                  (u = !1),
                                  (e.next = 9),
                                  this.getPayment()
                                );
                              case 9:
                                if (
                                  ((l = e.sent),
                                  (p = l.flatFee),
                                  (h = p),
                                  !this.isJsonRpcProvider)
                                ) {
                                  e.next = 16;
                                  break;
                                }
                                (e.t0 = this.signer.address), (e.next = 19);
                                break;
                              case 16:
                                return (
                                  (e.next = 18), this.provider.listAccounts()
                                );
                              case 18:
                                e.t0 = e.sent[0];
                              case 19:
                                return (
                                  (f = e.t0),
                                  (e.next = 22),
                                  this.getSwapDetails(r)
                                );
                              case 22:
                                return (
                                  (y = e.sent),
                                  (m = y.valueTaker),
                                  (e.next = 26),
                                  this.getReferenceAddress()
                                );
                              case 26:
                                return (
                                  (b = e.sent),
                                  (v = b.TRADESQUAD),
                                  (g = b.PARTNERSQUAD),
                                  (w = new this.ethers.Contract(
                                    v,
                                    d,
                                    this.provider
                                  )),
                                  (T = new this.ethers.Contract(
                                    g,
                                    d,
                                    this.provider
                                  )),
                                  (e.next = 33),
                                  w.balanceOf(f)
                                );
                              case 33:
                                return (
                                  (k = e.sent), (e.next = 36), T.balanceOf(f)
                                );
                              case 36:
                                if (
                                  ((E = e.sent),
                                  (k.gt(0) || E.gt(0)) && (u = !0),
                                  ((S = {}).value = u
                                    ? m.toString()
                                    : m.add(h).toString()),
                                  a && (S.gasLimit = a),
                                  c && (S.gasPrice = c),
                                  (_ = this.contract),
                                  !this.isWeb3Provider)
                                ) {
                                  e.next = 49;
                                  break;
                                }
                                return (
                                  (e.next = 46), this.provider.listAccounts()
                                );
                              case 46:
                                (x = e.sent[0]),
                                  (P = this.provider.getSigner(x)),
                                  (_ = this.contract.connect(P));
                              case 49:
                                return (
                                  (e.prev = 49),
                                  (e.next = 52),
                                  _.estimateGas.closeSwapIntent(r, i, s({}, S))
                                );
                              case 52:
                                return (A = e.sent), e.abrupt("return", A);
                              case 56:
                                return (
                                  (e.prev = 56),
                                  (e.t1 = e.catch(49)),
                                  console.error(e.t1),
                                  e.abrupt("return", null)
                                );
                              case 60:
                                e.next = 65;
                                break;
                              case 62:
                                throw (
                                  ((e.prev = 62),
                                  (e.t2 = e.catch(5)),
                                  new Error(e.t2))
                                );
                              case 65:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [
                          [5, 62],
                          [49, 56],
                        ]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()),
                (y.prototype.cancelSwap = (function () {
                  var e = i(
                    n.mark(function e(t) {
                      var r,
                        o,
                        i,
                        a,
                        c,
                        u,
                        l,
                        p,
                        d = arguments;
                      return n.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((r =
                                    d.length > 1 && void 0 !== d[1]
                                      ? d[1]
                                      : 2e6),
                                  (o =
                                    d.length > 2 && void 0 !== d[2]
                                      ? d[2]
                                      : null),
                                  !this.avoidPrivateKeySigner ||
                                    !this.isJsonRpcProvider)
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                throw new Error(
                                  "you cannot cancel a swap when you're in jsonRpcProvider mode with avoidPrivateKeySigner param set to true. In this mode you should just read data from the blockchain, not write a transaction."
                                );
                              case 4:
                                if (
                                  ((i = {}),
                                  r && (i.gasLimit = r),
                                  o && (i.gasPrice = o),
                                  (u = this.contract),
                                  !this.isWeb3Provider)
                                ) {
                                  e.next = 14;
                                  break;
                                }
                                return (
                                  (e.next = 11), this.provider.listAccounts()
                                );
                              case 11:
                                (a = e.sent[0]),
                                  (c = this.provider.getSigner(a)),
                                  (u = this.contract.connect(c));
                              case 14:
                                return (
                                  (e.prev = 14),
                                  (e.next = 17),
                                  u.cancelSwapIntent(t, s({}, i))
                                );
                              case 17:
                                return (
                                  (l = e.sent),
                                  this.__emit("cancelSwapTransactionCreated", {
                                    tx: l,
                                  }),
                                  (e.prev = 19),
                                  (e.next = 22),
                                  l.wait(this.blocksNumberConfirmationRequired)
                                );
                              case 22:
                                (p = e.sent),
                                  this.__emit("cancelSwapTransactionMined", {
                                    receipt: p,
                                  }),
                                  (e.next = 29);
                                break;
                              case 26:
                                (e.prev = 26),
                                  (e.t0 = e.catch(19)),
                                  this.__emit("cancelSwapTransactionError", {
                                    error: e.t0,
                                    typeError: "waitError",
                                  });
                              case 29:
                                e.next = 34;
                                break;
                              case 31:
                                (e.prev = 31),
                                  (e.t1 = e.catch(14)),
                                  this.__emit("cancelSwapTransactionError", {
                                    error: e.t1,
                                    typeError: "cancelSwapIntentError",
                                  });
                              case 34:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [
                          [14, 31],
                          [19, 26],
                        ]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()),
                (y.prototype.estimateGasCancelSwap = (function () {
                  var e = i(
                    n.mark(function e(t) {
                      var r,
                        o,
                        i,
                        a,
                        c,
                        u,
                        l,
                        p = arguments;
                      return n.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((r =
                                    p.length > 1 && void 0 !== p[1]
                                      ? p[1]
                                      : 2e6),
                                  (o =
                                    p.length > 2 && void 0 !== p[2]
                                      ? p[2]
                                      : null),
                                  !this.avoidPrivateKeySigner ||
                                    !this.isJsonRpcProvider)
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                throw new Error(
                                  "you cannot cancel a swap when you're in jsonRpcProvider mode with avoidPrivateKeySigner param set to true. In this mode you should just read data from the blockchain, not write a transaction."
                                );
                              case 4:
                                if (
                                  ((i = {}),
                                  r && (i.gasLimit = r),
                                  o && (i.gasPrice = o),
                                  (u = this.contract),
                                  !this.isWeb3Provider)
                                ) {
                                  e.next = 14;
                                  break;
                                }
                                return (
                                  (e.next = 11), this.provider.listAccounts()
                                );
                              case 11:
                                (a = e.sent[0]),
                                  (c = this.provider.getSigner(a)),
                                  (u = this.contract.connect(c));
                              case 14:
                                return (
                                  (e.prev = 14),
                                  (e.next = 17),
                                  u.estimateGas.cancelSwapIntent(t, s({}, i))
                                );
                              case 17:
                                return (l = e.sent), e.abrupt("return", l);
                              case 21:
                                return (
                                  (e.prev = 21),
                                  (e.t0 = e.catch(14)),
                                  console.error(e.t0),
                                  e.abrupt("return", null)
                                );
                              case 25:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[14, 21]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()),
                (y.prototype.editTaker = (function () {
                  var e = i(
                    n.mark(function e(t, r) {
                      var o,
                        i,
                        a,
                        c,
                        u,
                        l,
                        p,
                        d,
                        h = arguments;
                      return n.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((o =
                                    h.length > 2 && void 0 !== h[2]
                                      ? h[2]
                                      : 2e6),
                                  (i =
                                    h.length > 3 && void 0 !== h[3]
                                      ? h[3]
                                      : null),
                                  !this.avoidPrivateKeySigner ||
                                    !this.isJsonRpcProvider)
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                throw new Error(
                                  "you cannot edit the taker of a swap when you're in jsonRpcProvider mode with avoidPrivateKeySigner param set to true. In this mode you should just read data from the blockchain, not write a transaction."
                                );
                              case 4:
                                if (
                                  ((a = {}),
                                  o && (a.gasLimit = o),
                                  i && (a.gasPrice = i),
                                  (l = this.contract),
                                  !this.isWeb3Provider)
                                ) {
                                  e.next = 14;
                                  break;
                                }
                                return (
                                  (e.next = 11), this.provider.listAccounts()
                                );
                              case 11:
                                (c = e.sent[0]),
                                  (u = this.provider.getSigner(c)),
                                  (l = this.contract.connect(u));
                              case 14:
                                return (
                                  (e.prev = 14),
                                  (e.next = 17),
                                  l.editCounterPart(t, r, s({}, a))
                                );
                              case 17:
                                return (
                                  (p = e.sent),
                                  this.__emit("editTakerTransactionCreated", {
                                    tx: p,
                                  }),
                                  (e.prev = 19),
                                  (e.next = 22),
                                  p.wait(this.blocksNumberConfirmationRequired)
                                );
                              case 22:
                                (d = e.sent),
                                  this.__emit("editTakerTransactionMined", {
                                    receipt: d,
                                  }),
                                  (e.next = 29);
                                break;
                              case 26:
                                (e.prev = 26),
                                  (e.t0 = e.catch(19)),
                                  this.__emit("editTakerTransactionError", {
                                    error: e.t0,
                                    typeError: "waitError",
                                  });
                              case 29:
                                e.next = 34;
                                break;
                              case 31:
                                (e.prev = 31),
                                  (e.t1 = e.catch(14)),
                                  this.__emit("editTakerTransactionError", {
                                    error: e.t1,
                                    typeError: "editCounterpartError",
                                  });
                              case 34:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [
                          [14, 31],
                          [19, 26],
                        ]
                      );
                    })
                  );
                  return function (t, r) {
                    return e.apply(this, arguments);
                  };
                })()),
                (y.prototype.estimateGasEditTaker = (function () {
                  var e = i(
                    n.mark(function e(t, r) {
                      var o,
                        i,
                        a,
                        c,
                        u,
                        l,
                        p,
                        d = arguments;
                      return n.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((o =
                                    d.length > 2 && void 0 !== d[2]
                                      ? d[2]
                                      : 2e6),
                                  (i =
                                    d.length > 3 && void 0 !== d[3]
                                      ? d[3]
                                      : null),
                                  !this.avoidPrivateKeySigner ||
                                    !this.isJsonRpcProvider)
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                throw new Error(
                                  "you cannot edit the taker of a swap when you're in jsonRpcProvider mode with avoidPrivateKeySigner param set to true. In this mode you should just read data from the blockchain, not write a transaction."
                                );
                              case 4:
                                if (
                                  ((a = {}),
                                  o && (a.gasLimit = o),
                                  i && (a.gasPrice = i),
                                  (l = this.contract),
                                  !this.isWeb3Provider)
                                ) {
                                  e.next = 14;
                                  break;
                                }
                                return (
                                  (e.next = 11), this.provider.listAccounts()
                                );
                              case 11:
                                (c = e.sent[0]),
                                  (u = this.provider.getSigner(c)),
                                  (l = this.contract.connect(u));
                              case 14:
                                return (
                                  (e.prev = 14),
                                  (e.next = 17),
                                  l.estimateGas.editCounterPart(t, r, s({}, a))
                                );
                              case 17:
                                return (p = e.sent), e.abrupt("return", p);
                              case 21:
                                return (
                                  (e.prev = 21),
                                  (e.t0 = e.catch(14)),
                                  console.error(e.t0),
                                  e.abrupt("return", null)
                                );
                              case 25:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[14, 21]]
                      );
                    })
                  );
                  return function (t, r) {
                    return e.apply(this, arguments);
                  };
                })()),
                (y.prototype.getSwapDetails = (function () {
                  var e = i(
                    n.mark(function e(t) {
                      var r;
                      return n.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  this.contract.getSwapIntentById(t)
                                );
                              case 3:
                                return (
                                  (r = e.sent),
                                  (addressMaker = r.addressMaker),
                                  (discountMaker = r.discountMaker),
                                  (valueMaker = r.valueMaker),
                                  (flatFeeMaker = r.flatFeeMaker),
                                  (addressTaker = r.addressTaker),
                                  (discountTaker = r.discountTaker),
                                  (valueTaker = r.valueTaker),
                                  (flatFeeTaker = r.flatFeeTaker),
                                  (swapStart = r.swapStart),
                                  (swapEnd = r.swapEnd),
                                  (flagFlatFee = r.flagFlatFee),
                                  (flagRoyalties = r.flagRoyalties),
                                  (status = r.status),
                                  (royaltiesMaker = r.royaltiesMaker),
                                  (royaltiesTaker = r.royaltiesTaker),
                                  e.abrupt("return", r)
                                );
                              case 22:
                                throw (
                                  ((e.prev = 22),
                                  (e.t0 = e.catch(0)),
                                  new Error(e.t0))
                                );
                              case 25:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 22]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()),
                (y.prototype.getSwapAssets = (function () {
                  var e = i(
                    n.mark(function e(t) {
                      var r, o, i, a, s, c;
                      return n.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  this.contract.getSwapStructSize(t, !0)
                                );
                              case 3:
                                return (
                                  (r = e.sent),
                                  (e.next = 6),
                                  this.contract.getSwapStructSize(t, !1)
                                );
                              case 6:
                                (o = e.sent), (i = []), (a = []), (s = 0);
                              case 10:
                                if (!(s < r)) {
                                  e.next = 19;
                                  break;
                                }
                                return (
                                  (e.t0 = i),
                                  (e.next = 14),
                                  this.contract.getSwapStruct(t, !0, s)
                                );
                              case 14:
                                (e.t1 = e.sent), e.t0.push.call(e.t0, e.t1);
                              case 16:
                                s++, (e.next = 10);
                                break;
                              case 19:
                                c = 0;
                              case 20:
                                if (!(c < o)) {
                                  e.next = 29;
                                  break;
                                }
                                return (
                                  (e.t2 = a),
                                  (e.next = 24),
                                  this.contract.getSwapStruct(t, !1, c)
                                );
                              case 24:
                                (e.t3 = e.sent), e.t2.push.call(e.t2, e.t3);
                              case 26:
                                c++, (e.next = 20);
                                break;
                              case 29:
                                return e.abrupt("return", {
                                  assetsMaker: i,
                                  assetsTaker: a,
                                });
                              case 32:
                                throw (
                                  ((e.prev = 32),
                                  (e.t4 = e.catch(0)),
                                  new Error(e.t4))
                                );
                              case 35:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 32]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()),
                (y.prototype.isERC20WhiteListed = (function () {
                  var e = i(
                    n.mark(function e(t) {
                      return n.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  this.contract.getERC20WhiteList(t)
                                );
                              case 3:
                                return e.abrupt("return", e.sent);
                              case 6:
                                throw (
                                  ((e.prev = 6),
                                  (e.t0 = e.catch(0)),
                                  new Error(e.t0))
                                );
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 6]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()),
                (y.prototype.isNFTBlacklisted = (function () {
                  var e = i(
                    n.mark(function e(t) {
                      return n.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  this.contract.getNFTBlacklist(t)
                                );
                              case 3:
                                return e.abrupt("return", e.sent);
                              case 6:
                                throw (
                                  ((e.prev = 6),
                                  (e.t0 = e.catch(0)),
                                  new Error(e.t0))
                                );
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 6]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()),
                (y.prototype.getPayment = i(
                  n.mark(function e() {
                    var t;
                    return n.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                this.contract.payment()
                              );
                            case 3:
                              return (
                                (t = e.sent),
                                (flagFlatFee = t.flagFlatFee),
                                (flagRoyalties = t.flagRoyalties),
                                (flatFee = t.flatFee),
                                (bps = t.bps),
                                (scalePercent = t.scalePercent),
                                e.abrupt("return", t)
                              );
                            case 12:
                              throw (
                                ((e.prev = 12),
                                (e.t0 = e.catch(0)),
                                new Error(e.t0))
                              );
                            case 15:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[0, 12]]
                    );
                  })
                )),
                (y.prototype.getReferenceAddress = i(
                  n.mark(function e() {
                    var t;
                    return n.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                this.contract.referenceAddress()
                              );
                            case 3:
                              return (
                                (t = e.sent),
                                (ROYALTYENGINEADDRESS = t.ROYALTYENGINEADDRESS),
                                (TRADESQUAD = t.TRADESQUAD),
                                (PARTNERSQUAD = t.PARTNERSQUAD),
                                (VAULT = t.VAULT),
                                e.abrupt("return", t)
                              );
                            case 11:
                              throw (
                                ((e.prev = 11),
                                (e.t0 = e.catch(0)),
                                new Error(e.t0))
                              );
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[0, 11]]
                    );
                  })
                )),
                (y.prototype.isBannedAddress = (function () {
                  var e = i(
                    n.mark(function e(t) {
                      return n.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  this.contract.bannedAddress(t)
                                );
                              case 3:
                                return e.abrupt("return", e.sent);
                              case 6:
                                throw (
                                  ((e.prev = 6),
                                  (e.t0 = e.catch(0)),
                                  new Error(e.t0))
                                );
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 6]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()),
                (y.prototype.getEthersJSInstance = function () {
                  return this.ethers;
                }),
                (y.prototype.getNetworksAvailable = function () {
                  return u;
                }),
                (y.prototype.getRoyaltyRegistriesEngines = function () {
                  return l;
                }),
                (y.prototype.getRoyaltyRegistryEngineABI = function () {
                  return h;
                }),
                (y.prototype.AssetsArray = function () {
                  (this.assetsArrayEthers = this.ethers),
                    (this.assetsArray = []),
                    (this.tokenConstants = { ERC20: 0, ERC721: 1, ERC1155: 2 });
                }),
                (y.prototype.AssetsArray.prototype.addERC20Asset = function (
                  e,
                  t
                ) {
                  if (isNaN(t))
                    throw new Error("tokenAmount must be a numeric value.");
                  this.assetsArray.push([
                    e,
                    this.tokenConstants.ERC20,
                    [],
                    [t],
                    [0],
                    [],
                  ]);
                }),
                (y.prototype.AssetsArray.prototype.addERC721Asset = function (
                  e,
                  t
                ) {
                  if ("string" != typeof t)
                    throw new Error("tokenId must be a string.");
                  this.assetsArray.push([
                    e,
                    this.tokenConstants.ERC721,
                    [t],
                    [],
                    [],
                    [],
                  ]);
                }),
                (y.prototype.AssetsArray.prototype.addERC1155Asset = function (
                  e
                ) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : [],
                    r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : [];
                  if (!(t instanceof Array))
                    throw new Error("tokenIds must be an array.");
                  if (!(r instanceof Array))
                    throw new Error("tokenAmounts must be an array.");
                  if (t.length !== r.length)
                    throw new Error(
                      "tokenIds array must have the same size of tokenAmounts array."
                    );
                  if (0 === t.length)
                    throw new Error("tokenIds must have at least one element.");
                  if (0 === r.length)
                    throw new Error(
                      "tokenAmounts must have at least one element."
                    );
                  this.assetsArray.push([
                    e,
                    this.tokenConstants.ERC1155,
                    t,
                    r,
                    [],
                    [],
                  ]);
                }),
                (y.prototype.AssetsArray.prototype.clearAssetsArray =
                  function () {
                    this.assetsArray = [];
                  }),
                (y.prototype.AssetsArray.prototype.getAssetsArray =
                  function () {
                    return this.assetsArray;
                  }),
                (y.prototype.WebSocketProvider = function (e) {
                  var t = e.wssUrl,
                    r = e.network,
                    n = void 0 === r ? null : r;
                  if ("string" != typeof t)
                    throw new Error("wssUrl must be a string.");
                  this.webSocketProviderEthers = this.ethers;
                  try {
                    (this.webSocketProvider = n
                      ? new this.webSocketProviderEthers.providers.WebSocketProvider(
                          t
                        )
                      : new this.webSocketProviderEthers.providers.WebSocketProvider(
                          t,
                          n
                        )),
                      (this.contractAddressWebSocketProvider =
                        this.contractAddress);
                  } catch (e) {
                    throw new Error(e);
                  }
                }),
                (y.prototype.WebSocketProvider.prototype.onSwapEvent =
                  function (e, t) {
                    var r = t.creator,
                      n = void 0 === r ? null : r,
                      o = t.time,
                      i = void 0 === o ? null : o,
                      a = t.status,
                      s = void 0 === a ? null : a;
                    if (null == e) throw new Error("callback must be provided");
                    if ("function" != typeof e)
                      throw new Error("callback must be a Function.");
                    var c = {
                      address: this.contractAddressWebSocketProvider,
                      topics: [
                        this.webSocketProviderEthers.utils.id(
                          "swapEvent(address,uint256,uint8,uint256,address,address)"
                        ),
                        n || null,
                        i || null,
                        s || null,
                      ],
                    };
                    this.webSocketProvider.on(c, function (t) {
                      e(t);
                    });
                  }),
                (y.prototype.WebSocketProvider.prototype.onCounterpartEvent =
                  function (e, t) {
                    var r = t.swapId,
                      n = void 0 === r ? null : r,
                      o = t.counterpart,
                      i = void 0 === o ? null : o;
                    if (null == e) throw new Error("callback must be provided");
                    if ("function" != typeof e)
                      throw new Error("callback must be a Function.");
                    var a = {
                      address: this.contractAddressWebSocketProvider,
                      topics: [
                        this.webSocketProviderEthers.utils.id(
                          "counterpartEvent(uint256,address)"
                        ),
                        n || null,
                        i || null,
                      ],
                    };
                    this.webSocketProvider.on(a, function (t) {
                      e(t);
                    });
                  }),
                (y.prototype.WebSocketProvider.prototype.onPaymentReceived =
                  function (e, t) {
                    var r = t.payer,
                      n = void 0 === r ? null : r;
                    if (null == e) throw new Error("callback must be provided");
                    if ("function" != typeof e)
                      throw new Error("callback must be a Function.");
                    var o = {
                      address: this.contractAddressWebSocketProvider,
                      topics: [
                        this.webSocketProviderEthers.utils.id(
                          "paymentReceived(address,uint256)"
                        ),
                        n || null,
                      ],
                    };
                    this.webSocketProvider.on(o, function (t) {
                      e(t);
                    });
                  }),
                (e.exports = y);
            },
            666: (e) => {
              var t = (function (e) {
                "use strict";
                var t,
                  r = Object.prototype,
                  n = r.hasOwnProperty,
                  o = "function" == typeof Symbol ? Symbol : {},
                  i = o.iterator || "@@iterator",
                  a = o.asyncIterator || "@@asyncIterator",
                  s = o.toStringTag || "@@toStringTag";
                function c(e, t, r) {
                  return (
                    Object.defineProperty(e, t, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    }),
                    e[t]
                  );
                }
                try {
                  c({}, "");
                } catch (e) {
                  c = function (e, t, r) {
                    return (e[t] = r);
                  };
                }
                function u(e, t, r, n) {
                  var o = t && t.prototype instanceof m ? t : m,
                    i = Object.create(o.prototype),
                    a = new A(n || []);
                  return (
                    (i._invoke = (function (e, t, r) {
                      var n = p;
                      return function (o, i) {
                        if (n === h)
                          throw new Error("Generator is already running");
                        if (n === f) {
                          if ("throw" === o) throw i;
                          return O();
                        }
                        for (r.method = o, r.arg = i; ; ) {
                          var a = r.delegate;
                          if (a) {
                            var s = x(a, r);
                            if (s) {
                              if (s === y) continue;
                              return s;
                            }
                          }
                          if ("next" === r.method) r.sent = r._sent = r.arg;
                          else if ("throw" === r.method) {
                            if (n === p) throw ((n = f), r.arg);
                            r.dispatchException(r.arg);
                          } else
                            "return" === r.method && r.abrupt("return", r.arg);
                          n = h;
                          var c = l(e, t, r);
                          if ("normal" === c.type) {
                            if (((n = r.done ? f : d), c.arg === y)) continue;
                            return { value: c.arg, done: r.done };
                          }
                          "throw" === c.type &&
                            ((n = f), (r.method = "throw"), (r.arg = c.arg));
                        }
                      };
                    })(e, r, a)),
                    i
                  );
                }
                function l(e, t, r) {
                  try {
                    return { type: "normal", arg: e.call(t, r) };
                  } catch (e) {
                    return { type: "throw", arg: e };
                  }
                }
                e.wrap = u;
                var p = "suspendedStart",
                  d = "suspendedYield",
                  h = "executing",
                  f = "completed",
                  y = {};
                function m() {}
                function b() {}
                function v() {}
                var g = {};
                c(g, i, function () {
                  return this;
                });
                var w = Object.getPrototypeOf,
                  T = w && w(w(R([])));
                T && T !== r && n.call(T, i) && (g = T);
                var k = (v.prototype = m.prototype = Object.create(g));
                function E(e) {
                  ["next", "throw", "return"].forEach(function (t) {
                    c(e, t, function (e) {
                      return this._invoke(t, e);
                    });
                  });
                }
                function S(e, t) {
                  function r(o, i, a, s) {
                    var c = l(e[o], e, i);
                    if ("throw" !== c.type) {
                      var u = c.arg,
                        p = u.value;
                      return p && "object" == typeof p && n.call(p, "__await")
                        ? t.resolve(p.__await).then(
                            function (e) {
                              r("next", e, a, s);
                            },
                            function (e) {
                              r("throw", e, a, s);
                            }
                          )
                        : t.resolve(p).then(
                            function (e) {
                              (u.value = e), a(u);
                            },
                            function (e) {
                              return r("throw", e, a, s);
                            }
                          );
                    }
                    s(c.arg);
                  }
                  var o;
                  this._invoke = function (e, n) {
                    function i() {
                      return new t(function (t, o) {
                        r(e, n, t, o);
                      });
                    }
                    return (o = o ? o.then(i, i) : i());
                  };
                }
                function x(e, r) {
                  var n = e.iterator[r.method];
                  if (n === t) {
                    if (((r.delegate = null), "throw" === r.method)) {
                      if (
                        e.iterator.return &&
                        ((r.method = "return"),
                        (r.arg = t),
                        x(e, r),
                        "throw" === r.method)
                      )
                        return y;
                      (r.method = "throw"),
                        (r.arg = new TypeError(
                          "The iterator does not provide a 'throw' method"
                        ));
                    }
                    return y;
                  }
                  var o = l(n, e.iterator, r.arg);
                  if ("throw" === o.type)
                    return (
                      (r.method = "throw"),
                      (r.arg = o.arg),
                      (r.delegate = null),
                      y
                    );
                  var i = o.arg;
                  return i
                    ? i.done
                      ? ((r[e.resultName] = i.value),
                        (r.next = e.nextLoc),
                        "return" !== r.method &&
                          ((r.method = "next"), (r.arg = t)),
                        (r.delegate = null),
                        y)
                      : i
                    : ((r.method = "throw"),
                      (r.arg = new TypeError(
                        "iterator result is not an object"
                      )),
                      (r.delegate = null),
                      y);
                }
                function P(e) {
                  var t = { tryLoc: e[0] };
                  1 in e && (t.catchLoc = e[1]),
                    2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                    this.tryEntries.push(t);
                }
                function _(e) {
                  var t = e.completion || {};
                  (t.type = "normal"), delete t.arg, (e.completion = t);
                }
                function A(e) {
                  (this.tryEntries = [{ tryLoc: "root" }]),
                    e.forEach(P, this),
                    this.reset(!0);
                }
                function R(e) {
                  if (e) {
                    var r = e[i];
                    if (r) return r.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                      var o = -1,
                        a = function r() {
                          for (; ++o < e.length; )
                            if (n.call(e, o))
                              return (r.value = e[o]), (r.done = !1), r;
                          return (r.value = t), (r.done = !0), r;
                        };
                      return (a.next = a);
                    }
                  }
                  return { next: O };
                }
                function O() {
                  return { value: t, done: !0 };
                }
                return (
                  (b.prototype = v),
                  c(k, "constructor", v),
                  c(v, "constructor", b),
                  (b.displayName = c(v, s, "GeneratorFunction")),
                  (e.isGeneratorFunction = function (e) {
                    var t = "function" == typeof e && e.constructor;
                    return (
                      !!t &&
                      (t === b ||
                        "GeneratorFunction" === (t.displayName || t.name))
                    );
                  }),
                  (e.mark = function (e) {
                    return (
                      Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, v)
                        : ((e.__proto__ = v), c(e, s, "GeneratorFunction")),
                      (e.prototype = Object.create(k)),
                      e
                    );
                  }),
                  (e.awrap = function (e) {
                    return { __await: e };
                  }),
                  E(S.prototype),
                  c(S.prototype, a, function () {
                    return this;
                  }),
                  (e.AsyncIterator = S),
                  (e.async = function (t, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new S(u(t, r, n, o), i);
                    return e.isGeneratorFunction(r)
                      ? a
                      : a.next().then(function (e) {
                          return e.done ? e.value : a.next();
                        });
                  }),
                  E(k),
                  c(k, s, "Generator"),
                  c(k, i, function () {
                    return this;
                  }),
                  c(k, "toString", function () {
                    return "[object Generator]";
                  }),
                  (e.keys = function (e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return (
                      t.reverse(),
                      function r() {
                        for (; t.length; ) {
                          var n = t.pop();
                          if (n in e) return (r.value = n), (r.done = !1), r;
                        }
                        return (r.done = !0), r;
                      }
                    );
                  }),
                  (e.values = R),
                  (A.prototype = {
                    constructor: A,
                    reset: function (e) {
                      if (
                        ((this.prev = 0),
                        (this.next = 0),
                        (this.sent = this._sent = t),
                        (this.done = !1),
                        (this.delegate = null),
                        (this.method = "next"),
                        (this.arg = t),
                        this.tryEntries.forEach(_),
                        !e)
                      )
                        for (var r in this)
                          "t" === r.charAt(0) &&
                            n.call(this, r) &&
                            !isNaN(+r.slice(1)) &&
                            (this[r] = t);
                    },
                    stop: function () {
                      this.done = !0;
                      var e = this.tryEntries[0].completion;
                      if ("throw" === e.type) throw e.arg;
                      return this.rval;
                    },
                    dispatchException: function (e) {
                      if (this.done) throw e;
                      var r = this;
                      function o(n, o) {
                        return (
                          (s.type = "throw"),
                          (s.arg = e),
                          (r.next = n),
                          o && ((r.method = "next"), (r.arg = t)),
                          !!o
                        );
                      }
                      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                          s = a.completion;
                        if ("root" === a.tryLoc) return o("end");
                        if (a.tryLoc <= this.prev) {
                          var c = n.call(a, "catchLoc"),
                            u = n.call(a, "finallyLoc");
                          if (c && u) {
                            if (this.prev < a.catchLoc)
                              return o(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc)
                              return o(a.finallyLoc);
                          } else if (c) {
                            if (this.prev < a.catchLoc)
                              return o(a.catchLoc, !0);
                          } else {
                            if (!u)
                              throw new Error(
                                "try statement without catch or finally"
                              );
                            if (this.prev < a.finallyLoc)
                              return o(a.finallyLoc);
                          }
                        }
                      }
                    },
                    abrupt: function (e, t) {
                      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (
                          o.tryLoc <= this.prev &&
                          n.call(o, "finallyLoc") &&
                          this.prev < o.finallyLoc
                        ) {
                          var i = o;
                          break;
                        }
                      }
                      i &&
                        ("break" === e || "continue" === e) &&
                        i.tryLoc <= t &&
                        t <= i.finallyLoc &&
                        (i = null);
                      var a = i ? i.completion : {};
                      return (
                        (a.type = e),
                        (a.arg = t),
                        i
                          ? ((this.method = "next"),
                            (this.next = i.finallyLoc),
                            y)
                          : this.complete(a)
                      );
                    },
                    complete: function (e, t) {
                      if ("throw" === e.type) throw e.arg;
                      return (
                        "break" === e.type || "continue" === e.type
                          ? (this.next = e.arg)
                          : "return" === e.type
                          ? ((this.rval = this.arg = e.arg),
                            (this.method = "return"),
                            (this.next = "end"))
                          : "normal" === e.type && t && (this.next = t),
                        y
                      );
                    },
                    finish: function (e) {
                      for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e)
                          return (
                            this.complete(r.completion, r.afterLoc), _(r), y
                          );
                      }
                    },
                    catch: function (e) {
                      for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.tryLoc === e) {
                          var n = r.completion;
                          if ("throw" === n.type) {
                            var o = n.arg;
                            _(r);
                          }
                          return o;
                        }
                      }
                      throw new Error("illegal catch attempt");
                    },
                    delegateYield: function (e, r, n) {
                      return (
                        (this.delegate = {
                          iterator: R(e),
                          resultName: r,
                          nextLoc: n,
                        }),
                        "next" === this.method && (this.arg = t),
                        y
                      );
                    },
                  }),
                  e
                );
              })(e.exports);
              try {
                regeneratorRuntime = t;
              } catch (e) {
                "object" == typeof globalThis
                  ? (globalThis.regeneratorRuntime = t)
                  : Function("r", "regeneratorRuntime = r")(t);
              }
            },
          }),
          (t = {}),
          (function r(n) {
            var o = t[n];
            if (void 0 !== o) return o.exports;
            var i = (t[n] = { exports: {} });
            return e[n](i, i.exports, r), i.exports;
          })(579)
        );
        var e, t;
      })();
    },
    36226: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          BaseContract: function () {
            return i.VZ;
          },
          BigNumber: function () {
            return a.O$;
          },
          Contract: function () {
            return i.CH;
          },
          ContractFactory: function () {
            return i.lV;
          },
          FixedNumber: function () {
            return s.xs;
          },
          Signer: function () {
            return c.E;
          },
          VoidSigner: function () {
            return c.b;
          },
          Wallet: function () {
            return u.w5;
          },
          Wordlist: function () {
            return Oe.D;
          },
          constants: function () {
            return n;
          },
          errors: function () {
            return w.jK;
          },
          getDefaultProvider: function () {
            return Ae;
          },
          logger: function () {
            return Ne;
          },
          providers: function () {
            return o;
          },
          utils: function () {
            return Ce;
          },
          version: function () {
            return Ie;
          },
          wordlists: function () {
            return Re.E;
          },
        });
      var n = {};
      r.r(n),
        r.d(n, {
          AddressZero: function () {
            return l.d;
          },
          EtherSymbol: function () {
            return h;
          },
          HashZero: function () {
            return d.R;
          },
          MaxInt256: function () {
            return p.PS;
          },
          MaxUint256: function () {
            return p.Bz;
          },
          MinInt256: function () {
            return p.$B;
          },
          NegativeOne: function () {
            return p.tL;
          },
          One: function () {
            return p.fh;
          },
          Two: function () {
            return p.Py;
          },
          WeiPerEther: function () {
            return p.Ce;
          },
          Zero: function () {
            return p._Y;
          },
        });
      var o = {};
      r.r(o),
        r.d(o, {
          AlchemyProvider: function () {
            return L;
          },
          AlchemyWebSocketProvider: function () {
            return N;
          },
          AnkrProvider: function () {
            return B;
          },
          BaseProvider: function () {
            return m.Zk;
          },
          CloudflareProvider: function () {
            return Y;
          },
          EtherscanProvider: function () {
            return X;
          },
          FallbackProvider: function () {
            return fe;
          },
          Formatter: function () {
            return v.Mb;
          },
          InfuraProvider: function () {
            return ge;
          },
          InfuraWebSocketProvider: function () {
            return ve;
          },
          IpcProvider: function () {
            return ye;
          },
          JsonRpcBatchProvider: function () {
            return we;
          },
          JsonRpcProvider: function () {
            return g.r;
          },
          JsonRpcSigner: function () {
            return g.C;
          },
          NodesmithProvider: function () {
            return ke;
          },
          PocketProvider: function () {
            return xe;
          },
          Provider: function () {
            return f.zt;
          },
          Resolver: function () {
            return m.H2;
          },
          StaticJsonRpcProvider: function () {
            return R;
          },
          UrlJsonRpcProvider: function () {
            return O;
          },
          Web3Provider: function () {
            return Pe.Q;
          },
          WebSocketProvider: function () {
            return P;
          },
          getDefaultProvider: function () {
            return Ae;
          },
          getNetwork: function () {
            return y.H;
          },
          isCommunityResourcable: function () {
            return v.Ed;
          },
          isCommunityResource: function () {
            return v.Gp;
          },
          showThrottleMessage: function () {
            return v.vh;
          },
        });
      var i = r(5996),
        a = r(93442),
        s = r(52671),
        c = r(48986),
        u = r(40825),
        l = r(82729),
        p = r(94069),
        d = r(11314);
      const h = "\u039e";
      var f = r(9133),
        y = r(40426),
        m = r(81586),
        b = r(98690),
        v = r(12648),
        g = r(28999),
        w = r(87898),
        T = r(32565);
      let k = null;
      try {
        if (((k = WebSocket), null == k)) throw new Error("inject please");
      } catch (error) {
        const t = new w.Yd(T.i);
        k = function () {
          t.throwError(
            "WebSockets not supported in this environment",
            w.Yd.errors.UNSUPPORTED_OPERATION,
            { operation: "new WebSocket()" }
          );
        };
      }
      var E = function (e, t, r, n) {
        return new (r || (r = Promise))(function (o, i) {
          function a(e) {
            try {
              c(n.next(e));
            } catch (t) {
              i(t);
            }
          }
          function s(e) {
            try {
              c(n.throw(e));
            } catch (t) {
              i(t);
            }
          }
          function c(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(a, s);
          }
          c((n = n.apply(e, t || [])).next());
        });
      };
      const S = new w.Yd(T.i);
      let x = 1;
      class P extends g.r {
        constructor(e, t) {
          "any" === t &&
            S.throwError(
              "WebSocketProvider does not support 'any' network yet",
              w.Yd.errors.UNSUPPORTED_OPERATION,
              { operation: "network:any" }
            ),
            super("string" === typeof e ? e : "_websocket", t),
            (this._pollingInterval = -1),
            (this._wsReady = !1),
            "string" === typeof e
              ? (0, b.zG)(this, "_websocket", new k(this.connection.url))
              : (0, b.zG)(this, "_websocket", e),
            (0, b.zG)(this, "_requests", {}),
            (0, b.zG)(this, "_subs", {}),
            (0, b.zG)(this, "_subIds", {}),
            (0, b.zG)(this, "_detectNetwork", super.detectNetwork()),
            (this.websocket.onopen = () => {
              (this._wsReady = !0),
                Object.keys(this._requests).forEach((e) => {
                  this.websocket.send(this._requests[e].payload);
                });
            }),
            (this.websocket.onmessage = (e) => {
              const t = e.data,
                r = JSON.parse(t);
              if (null != r.id) {
                const e = String(r.id),
                  n = this._requests[e];
                if ((delete this._requests[e], void 0 !== r.result))
                  n.callback(null, r.result),
                    this.emit("debug", {
                      action: "response",
                      request: JSON.parse(n.payload),
                      response: r.result,
                      provider: this,
                    });
                else {
                  let e = null;
                  r.error
                    ? ((e = new Error(r.error.message || "unknown error")),
                      (0, b.zG)(e, "code", r.error.code || null),
                      (0, b.zG)(e, "response", t))
                    : (e = new Error("unknown error")),
                    n.callback(e, void 0),
                    this.emit("debug", {
                      action: "response",
                      error: e,
                      request: JSON.parse(n.payload),
                      provider: this,
                    });
                }
              } else if ("eth_subscription" === r.method) {
                const e = this._subs[r.params.subscription];
                e && e.processFunc(r.params.result);
              } else console.warn("this should not happen");
            });
          const r = setInterval(() => {
            this.emit("poll");
          }, 1e3);
          r.unref && r.unref();
        }
        get websocket() {
          return this._websocket;
        }
        detectNetwork() {
          return this._detectNetwork;
        }
        get pollingInterval() {
          return 0;
        }
        resetEventsBlock(e) {
          S.throwError(
            "cannot reset events block on WebSocketProvider",
            w.Yd.errors.UNSUPPORTED_OPERATION,
            { operation: "resetEventBlock" }
          );
        }
        set pollingInterval(e) {
          S.throwError(
            "cannot set polling interval on WebSocketProvider",
            w.Yd.errors.UNSUPPORTED_OPERATION,
            { operation: "setPollingInterval" }
          );
        }
        poll() {
          return E(this, void 0, void 0, function* () {
            return null;
          });
        }
        set polling(e) {
          e &&
            S.throwError(
              "cannot set polling on WebSocketProvider",
              w.Yd.errors.UNSUPPORTED_OPERATION,
              { operation: "setPolling" }
            );
        }
        send(e, t) {
          const r = x++;
          return new Promise((n, o) => {
            const i = JSON.stringify({
              method: e,
              params: t,
              id: r,
              jsonrpc: "2.0",
            });
            this.emit("debug", {
              action: "request",
              request: JSON.parse(i),
              provider: this,
            }),
              (this._requests[String(r)] = {
                callback: function (e, t) {
                  return e ? o(e) : n(t);
                },
                payload: i,
              }),
              this._wsReady && this.websocket.send(i);
          });
        }
        static defaultUrl() {
          return "ws://localhost:8546";
        }
        _subscribe(e, t, r) {
          return E(this, void 0, void 0, function* () {
            let n = this._subIds[e];
            null == n &&
              ((n = Promise.all(t).then((e) => this.send("eth_subscribe", e))),
              (this._subIds[e] = n));
            const o = yield n;
            this._subs[o] = { tag: e, processFunc: r };
          });
        }
        _startEvent(e) {
          switch (e.type) {
            case "block":
              this._subscribe("block", ["newHeads"], (e) => {
                const t = a.O$.from(e.number).toNumber();
                (this._emitted.block = t), this.emit("block", t);
              });
              break;
            case "pending":
              this._subscribe("pending", ["newPendingTransactions"], (e) => {
                this.emit("pending", e);
              });
              break;
            case "filter":
              this._subscribe(
                e.tag,
                ["logs", this._getFilter(e.filter)],
                (t) => {
                  null == t.removed && (t.removed = !1),
                    this.emit(e.filter, this.formatter.filterLog(t));
                }
              );
              break;
            case "tx": {
              const t = (e) => {
                const t = e.hash;
                this.getTransactionReceipt(t).then((e) => {
                  e && this.emit(t, e);
                });
              };
              t(e),
                this._subscribe("tx", ["newHeads"], (e) => {
                  this._events.filter((e) => "tx" === e.type).forEach(t);
                });
              break;
            }
            case "debug":
            case "poll":
            case "willPoll":
            case "didPoll":
            case "error":
              break;
            default:
              console.log("unhandled:", e);
          }
        }
        _stopEvent(e) {
          let t = e.tag;
          if ("tx" === e.type) {
            if (this._events.filter((e) => "tx" === e.type).length) return;
            t = "tx";
          } else if (this.listenerCount(e.event)) return;
          const r = this._subIds[t];
          r &&
            (delete this._subIds[t],
            r.then((e) => {
              this._subs[e] &&
                (delete this._subs[e], this.send("eth_unsubscribe", [e]));
            }));
        }
        destroy() {
          return E(this, void 0, void 0, function* () {
            this.websocket.readyState === k.CONNECTING &&
              (yield new Promise((e) => {
                (this.websocket.onopen = function () {
                  e(!0);
                }),
                  (this.websocket.onerror = function () {
                    e(!1);
                  });
              })),
              this.websocket.close(1e3);
          });
        }
      }
      var _ = function (e, t, r, n) {
        return new (r || (r = Promise))(function (o, i) {
          function a(e) {
            try {
              c(n.next(e));
            } catch (t) {
              i(t);
            }
          }
          function s(e) {
            try {
              c(n.throw(e));
            } catch (t) {
              i(t);
            }
          }
          function c(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(a, s);
          }
          c((n = n.apply(e, t || [])).next());
        });
      };
      const A = new w.Yd(T.i);
      class R extends g.r {
        detectNetwork() {
          const e = Object.create(null, {
            detectNetwork: { get: () => super.detectNetwork },
          });
          return _(this, void 0, void 0, function* () {
            let t = this.network;
            return (
              null == t &&
                ((t = yield e.detectNetwork.call(this)),
                t ||
                  A.throwError(
                    "no network detected",
                    w.Yd.errors.UNKNOWN_ERROR,
                    {}
                  ),
                null == this._network &&
                  ((0, b.zG)(this, "_network", t),
                  this.emit("network", t, null))),
              t
            );
          });
        }
      }
      class O extends R {
        constructor(e, t) {
          A.checkAbstract(new.target, O),
            (e = (0, b.tu)(new.target, "getNetwork")(e)),
            (t = (0, b.tu)(new.target, "getApiKey")(t));
          super((0, b.tu)(new.target, "getUrl")(e, t), e),
            "string" === typeof t
              ? (0, b.zG)(this, "apiKey", t)
              : null != t &&
                Object.keys(t).forEach((e) => {
                  (0, b.zG)(this, e, t[e]);
                });
        }
        _startPending() {
          A.warn("WARNING: API provider does not support pending filters");
        }
        isCommunityResource() {
          return !1;
        }
        getSigner(e) {
          return A.throwError(
            "API provider does not support signing",
            w.Yd.errors.UNSUPPORTED_OPERATION,
            { operation: "getSigner" }
          );
        }
        listAccounts() {
          return Promise.resolve([]);
        }
        static getApiKey(e) {
          return e;
        }
        static getUrl(e, t) {
          return A.throwError(
            "not implemented; sub-classes must override getUrl",
            w.Yd.errors.NOT_IMPLEMENTED,
            { operation: "getUrl" }
          );
        }
      }
      const C = new w.Yd(T.i),
        I = "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";
      class N extends P {
        constructor(e, t) {
          const r = new L(e, t);
          super(
            r.connection.url
              .replace(/^http/i, "ws")
              .replace(".alchemyapi.", ".ws.alchemyapi."),
            r.network
          ),
            (0, b.zG)(this, "apiKey", r.apiKey);
        }
        isCommunityResource() {
          return this.apiKey === I;
        }
      }
      class L extends O {
        static getWebSocketProvider(e, t) {
          return new N(e, t);
        }
        static getApiKey(e) {
          return null == e
            ? I
            : (e &&
                "string" !== typeof e &&
                C.throwArgumentError("invalid apiKey", "apiKey", e),
              e);
        }
        static getUrl(e, t) {
          let r = null;
          switch (e.name) {
            case "homestead":
              r = "eth-mainnet.alchemyapi.io/v2/";
              break;
            case "ropsten":
              r = "eth-ropsten.alchemyapi.io/v2/";
              break;
            case "rinkeby":
              r = "eth-rinkeby.alchemyapi.io/v2/";
              break;
            case "goerli":
              r = "eth-goerli.alchemyapi.io/v2/";
              break;
            case "kovan":
              r = "eth-kovan.alchemyapi.io/v2/";
              break;
            case "matic":
              r = "polygon-mainnet.g.alchemy.com/v2/";
              break;
            case "maticmum":
              r = "polygon-mumbai.g.alchemy.com/v2/";
              break;
            case "arbitrum":
              r = "arb-mainnet.g.alchemy.com/v2/";
              break;
            case "arbitrum-rinkeby":
              r = "arb-rinkeby.g.alchemy.com/v2/";
              break;
            case "arbitrum-goerli":
              r = "arb-goerli.g.alchemy.com/v2/";
              break;
            case "optimism":
              r = "opt-mainnet.g.alchemy.com/v2/";
              break;
            case "optimism-kovan":
              r = "opt-kovan.g.alchemy.com/v2/";
              break;
            case "optimism-goerli":
              r = "opt-goerli.g.alchemy.com/v2/";
              break;
            default:
              C.throwArgumentError(
                "unsupported network",
                "network",
                arguments[0]
              );
          }
          return {
            allowGzip: !0,
            url: "https://" + r + t,
            throttleCallback: (e, r) => (
              t === I && (0, v.vh)(), Promise.resolve(!0)
            ),
          };
        }
        isCommunityResource() {
          return this.apiKey === I;
        }
      }
      const M = new w.Yd(T.i),
        j = "9f7d929b018cdffb338517efa06f58359e86ff1ffd350bc889738523659e7972";
      function D(e) {
        switch (e) {
          case "homestead":
            return "rpc.ankr.com/eth/";
          case "ropsten":
            return "rpc.ankr.com/eth_ropsten/";
          case "rinkeby":
            return "rpc.ankr.com/eth_rinkeby/";
          case "goerli":
            return "rpc.ankr.com/eth_goerli/";
          case "matic":
            return "rpc.ankr.com/polygon/";
          case "arbitrum":
            return "rpc.ankr.com/arbitrum/";
        }
        return M.throwArgumentError("unsupported network", "name", e);
      }
      class B extends O {
        isCommunityResource() {
          return this.apiKey === j;
        }
        static getApiKey(e) {
          return null == e ? j : e;
        }
        static getUrl(e, t) {
          null == t && (t = j);
          const r = {
            allowGzip: !0,
            url: "https://" + D(e.name) + t,
            throttleCallback: (e, r) => (
              t.apiKey === j && (0, v.vh)(), Promise.resolve(!0)
            ),
          };
          return (
            null != t.projectSecret &&
              ((r.user = ""), (r.password = t.projectSecret)),
            r
          );
        }
      }
      var F = function (e, t, r, n) {
        return new (r || (r = Promise))(function (o, i) {
          function a(e) {
            try {
              c(n.next(e));
            } catch (t) {
              i(t);
            }
          }
          function s(e) {
            try {
              c(n.throw(e));
            } catch (t) {
              i(t);
            }
          }
          function c(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(a, s);
          }
          c((n = n.apply(e, t || [])).next());
        });
      };
      const U = new w.Yd(T.i);
      class Y extends O {
        static getApiKey(e) {
          return (
            null != e &&
              U.throwArgumentError(
                "apiKey not supported for cloudflare",
                "apiKey",
                e
              ),
            null
          );
        }
        static getUrl(e, t) {
          let r = null;
          switch (e.name) {
            case "homestead":
              r = "https://cloudflare-eth.com/";
              break;
            default:
              U.throwArgumentError(
                "unsupported network",
                "network",
                arguments[0]
              );
          }
          return r;
        }
        perform(e, t) {
          const r = Object.create(null, {
            perform: { get: () => super.perform },
          });
          return F(this, void 0, void 0, function* () {
            if ("getBlockNumber" === e) {
              return (yield r.perform.call(this, "getBlock", {
                blockTag: "latest",
              })).number;
            }
            return r.perform.call(this, e, t);
          });
        }
      }
      var W = r(25689),
        K = r(25567),
        H = r(28676),
        G = function (e, t, r, n) {
          return new (r || (r = Promise))(function (o, i) {
            function a(e) {
              try {
                c(n.next(e));
              } catch (t) {
                i(t);
              }
            }
            function s(e) {
              try {
                c(n.throw(e));
              } catch (t) {
                i(t);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(a, s);
            }
            c((n = n.apply(e, t || [])).next());
          });
        };
      const z = new w.Yd(T.i);
      function q(e) {
        const t = {};
        for (let r in e) {
          if (null == e[r]) continue;
          let n = e[r];
          ("type" === r && 0 === n) ||
            ((n = {
              type: !0,
              gasLimit: !0,
              gasPrice: !0,
              maxFeePerGs: !0,
              maxPriorityFeePerGas: !0,
              nonce: !0,
              value: !0,
            }[r]
              ? (0, W.$P)((0, W.Dv)(n))
              : "accessList" === r
              ? "[" +
                (0, K.z7)(n)
                  .map(
                    (e) =>
                      `{address:"${
                        e.address
                      }",storageKeys:["${e.storageKeys.join('","')}"]}`
                  )
                  .join(",") +
                "]"
              : (0, W.Dv)(n)),
            (t[r] = n));
        }
        return t;
      }
      function J(e) {
        if (
          0 == e.status &&
          ("No records found" === e.message ||
            "No transactions found" === e.message)
        )
          return e.result;
        if (
          1 != e.status ||
          "string" !== typeof e.message ||
          !e.message.match(/^OK/)
        ) {
          const t = new Error("invalid response");
          throw (
            ((t.result = JSON.stringify(e)),
            (e.result || "").toLowerCase().indexOf("rate limit") >= 0 &&
              (t.throttleRetry = !0),
            t)
          );
        }
        return e.result;
      }
      function V(e) {
        if (
          e &&
          0 == e.status &&
          "NOTOK" == e.message &&
          (e.result || "").toLowerCase().indexOf("rate limit") >= 0
        ) {
          const t = new Error("throttled response");
          throw ((t.result = JSON.stringify(e)), (t.throttleRetry = !0), t);
        }
        if ("2.0" != e.jsonrpc) {
          const t = new Error("invalid response");
          throw ((t.result = JSON.stringify(e)), t);
        }
        if (e.error) {
          const t = new Error(e.error.message || "unknown error");
          throw (
            (e.error.code && (t.code = e.error.code),
            e.error.data && (t.data = e.error.data),
            t)
          );
        }
        return e.result;
      }
      function $(e) {
        if ("pending" === e) throw new Error("pending not supported");
        return "latest" === e ? e : parseInt(e.substring(2), 16);
      }
      function Q(e, t, r) {
        if ("call" === e && t.code === w.Yd.errors.SERVER_ERROR) {
          const e = t.error;
          if (
            e &&
            (e.message.match(/reverted/i) ||
              e.message.match(/VM execution error/i))
          ) {
            let r = e.data;
            if ((r && (r = "0x" + r.replace(/^.*0x/i, "")), (0, W.A7)(r)))
              return r;
            z.throwError(
              "missing revert data in call exception",
              w.Yd.errors.CALL_EXCEPTION,
              { error: t, data: "0x" }
            );
          }
        }
        let n = t.message;
        throw (
          (t.code === w.Yd.errors.SERVER_ERROR &&
            (t.error && "string" === typeof t.error.message
              ? (n = t.error.message)
              : "string" === typeof t.body
              ? (n = t.body)
              : "string" === typeof t.responseText && (n = t.responseText)),
          (n = (n || "").toLowerCase()),
          n.match(/insufficient funds/) &&
            z.throwError(
              "insufficient funds for intrinsic transaction cost",
              w.Yd.errors.INSUFFICIENT_FUNDS,
              { error: t, method: e, transaction: r }
            ),
          n.match(
            /same hash was already imported|transaction nonce is too low|nonce too low/
          ) &&
            z.throwError(
              "nonce has already been used",
              w.Yd.errors.NONCE_EXPIRED,
              { error: t, method: e, transaction: r }
            ),
          n.match(/another transaction with same nonce/) &&
            z.throwError(
              "replacement fee too low",
              w.Yd.errors.REPLACEMENT_UNDERPRICED,
              { error: t, method: e, transaction: r }
            ),
          n.match(/execution failed due to an exception|execution reverted/) &&
            z.throwError(
              "cannot estimate gas; transaction may fail or may require manual gas limit",
              w.Yd.errors.UNPREDICTABLE_GAS_LIMIT,
              { error: t, method: e, transaction: r }
            ),
          t)
        );
      }
      class X extends m.Zk {
        constructor(e, t) {
          super(e),
            (0, b.zG)(this, "baseUrl", this.getBaseUrl()),
            (0, b.zG)(this, "apiKey", t || null);
        }
        getBaseUrl() {
          switch (this.network ? this.network.name : "invalid") {
            case "homestead":
              return "https://api.etherscan.io";
            case "ropsten":
              return "https://api-ropsten.etherscan.io";
            case "rinkeby":
              return "https://api-rinkeby.etherscan.io";
            case "kovan":
              return "https://api-kovan.etherscan.io";
            case "goerli":
              return "https://api-goerli.etherscan.io";
            case "optimism":
              return "https://api-optimistic.etherscan.io";
            case "optimism-kovan":
              return "https://api-kovan-optimistic.etherscan.io";
          }
          return z.throwArgumentError(
            "unsupported network",
            "network",
            this.network.name
          );
        }
        getUrl(e, t) {
          const r = Object.keys(t).reduce((e, r) => {
              const n = t[r];
              return null != n && (e += `&${r}=${n}`), e;
            }, ""),
            n = this.apiKey ? `&apikey=${this.apiKey}` : "";
          return `${this.baseUrl}/api?module=${e}${r}${n}`;
        }
        getPostUrl() {
          return `${this.baseUrl}/api`;
        }
        getPostData(e, t) {
          return (t.module = e), (t.apikey = this.apiKey), t;
        }
        fetch(e, t, r) {
          return G(this, void 0, void 0, function* () {
            const n = r ? this.getPostUrl() : this.getUrl(e, t),
              o = r ? this.getPostData(e, t) : null,
              i = "proxy" === e ? V : J;
            this.emit("debug", {
              action: "request",
              request: n,
              provider: this,
            });
            const a = {
              url: n,
              throttleSlotInterval: 1e3,
              throttleCallback: (e, t) => (
                this.isCommunityResource() && (0, v.vh)(), Promise.resolve(!0)
              ),
            };
            let s = null;
            o &&
              ((a.headers = {
                "content-type":
                  "application/x-www-form-urlencoded; charset=UTF-8",
              }),
              (s = Object.keys(o)
                .map((e) => `${e}=${o[e]}`)
                .join("&")));
            const c = yield (0, H.rd)(a, s, i || V);
            return (
              this.emit("debug", {
                action: "response",
                request: n,
                response: (0, b.p$)(c),
                provider: this,
              }),
              c
            );
          });
        }
        detectNetwork() {
          return G(this, void 0, void 0, function* () {
            return this.network;
          });
        }
        perform(e, t) {
          const r = Object.create(null, {
            perform: { get: () => super.perform },
          });
          return G(this, void 0, void 0, function* () {
            switch (e) {
              case "getBlockNumber":
                return this.fetch("proxy", { action: "eth_blockNumber" });
              case "getGasPrice":
                return this.fetch("proxy", { action: "eth_gasPrice" });
              case "getBalance":
                return this.fetch("account", {
                  action: "balance",
                  address: t.address,
                  tag: t.blockTag,
                });
              case "getTransactionCount":
                return this.fetch("proxy", {
                  action: "eth_getTransactionCount",
                  address: t.address,
                  tag: t.blockTag,
                });
              case "getCode":
                return this.fetch("proxy", {
                  action: "eth_getCode",
                  address: t.address,
                  tag: t.blockTag,
                });
              case "getStorageAt":
                return this.fetch("proxy", {
                  action: "eth_getStorageAt",
                  address: t.address,
                  position: t.position,
                  tag: t.blockTag,
                });
              case "sendTransaction":
                return this.fetch(
                  "proxy",
                  {
                    action: "eth_sendRawTransaction",
                    hex: t.signedTransaction,
                  },
                  !0
                ).catch((e) => Q("sendTransaction", e, t.signedTransaction));
              case "getBlock":
                if (t.blockTag)
                  return this.fetch("proxy", {
                    action: "eth_getBlockByNumber",
                    tag: t.blockTag,
                    boolean: t.includeTransactions ? "true" : "false",
                  });
                throw new Error("getBlock by blockHash not implemented");
              case "getTransaction":
                return this.fetch("proxy", {
                  action: "eth_getTransactionByHash",
                  txhash: t.transactionHash,
                });
              case "getTransactionReceipt":
                return this.fetch("proxy", {
                  action: "eth_getTransactionReceipt",
                  txhash: t.transactionHash,
                });
              case "call": {
                if ("latest" !== t.blockTag)
                  throw new Error(
                    "EtherscanProvider does not support blockTag for call"
                  );
                const e = q(t.transaction);
                (e.module = "proxy"), (e.action = "eth_call");
                try {
                  return yield this.fetch("proxy", e, !0);
                } catch (error) {
                  return Q("call", error, t.transaction);
                }
              }
              case "estimateGas": {
                const e = q(t.transaction);
                (e.module = "proxy"), (e.action = "eth_estimateGas");
                try {
                  return yield this.fetch("proxy", e, !0);
                } catch (error) {
                  return Q("estimateGas", error, t.transaction);
                }
              }
              case "getLogs": {
                const e = { action: "getLogs" };
                if (
                  (t.filter.fromBlock && (e.fromBlock = $(t.filter.fromBlock)),
                  t.filter.toBlock && (e.toBlock = $(t.filter.toBlock)),
                  t.filter.address && (e.address = t.filter.address),
                  t.filter.topics &&
                    t.filter.topics.length > 0 &&
                    (t.filter.topics.length > 1 &&
                      z.throwError(
                        "unsupported topic count",
                        w.Yd.errors.UNSUPPORTED_OPERATION,
                        { topics: t.filter.topics }
                      ),
                    1 === t.filter.topics.length))
                ) {
                  const r = t.filter.topics[0];
                  ("string" === typeof r && 66 === r.length) ||
                    z.throwError(
                      "unsupported topic format",
                      w.Yd.errors.UNSUPPORTED_OPERATION,
                      { topic0: r }
                    ),
                    (e.topic0 = r);
                }
                const r = yield this.fetch("logs", e);
                let n = {};
                for (let t = 0; t < r.length; t++) {
                  const e = r[t];
                  if (null == e.blockHash) {
                    if (null == n[e.blockNumber]) {
                      const t = yield this.getBlock(e.blockNumber);
                      t && (n[e.blockNumber] = t.hash);
                    }
                    e.blockHash = n[e.blockNumber];
                  }
                }
                return r;
              }
              case "getEtherPrice":
                return "homestead" !== this.network.name
                  ? 0
                  : parseFloat(
                      (yield this.fetch("stats", { action: "ethprice" })).ethusd
                    );
            }
            return r.perform.call(this, e, t);
          });
        }
        getHistory(e, t, r) {
          return G(this, void 0, void 0, function* () {
            const n = {
              action: "txlist",
              address: yield this.resolveName(e),
              startblock: null == t ? 0 : t,
              endblock: null == r ? 99999999 : r,
              sort: "asc",
            };
            return (yield this.fetch("account", n)).map((e) => {
              ["contractAddress", "to"].forEach(function (t) {
                "" == e[t] && delete e[t];
              }),
                null == e.creates &&
                  null != e.contractAddress &&
                  (e.creates = e.contractAddress);
              const t = this.formatter.transactionResponse(e);
              return e.timeStamp && (t.timestamp = parseInt(e.timeStamp)), t;
            });
          });
        }
        isCommunityResource() {
          return null == this.apiKey;
        }
      }
      var Z = r(2087),
        ee = function (e, t, r, n) {
          return new (r || (r = Promise))(function (o, i) {
            function a(e) {
              try {
                c(n.next(e));
              } catch (t) {
                i(t);
              }
            }
            function s(e) {
              try {
                c(n.throw(e));
              } catch (t) {
                i(t);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(a, s);
            }
            c((n = n.apply(e, t || [])).next());
          });
        };
      const te = new w.Yd(T.i);
      function re() {
        return new Date().getTime();
      }
      function ne(e) {
        let t = null;
        for (let r = 0; r < e.length; r++) {
          const n = e[r];
          if (null == n) return null;
          t
            ? (t.name === n.name &&
                t.chainId === n.chainId &&
                (t.ensAddress === n.ensAddress ||
                  (null == t.ensAddress && null == n.ensAddress))) ||
              te.throwArgumentError("provider mismatch", "networks", e)
            : (t = n);
        }
        return t;
      }
      function oe(e, t) {
        e = e.slice().sort();
        const r = Math.floor(e.length / 2);
        if (e.length % 2) return e[r];
        const n = e[r - 1],
          o = e[r];
        return null != t && Math.abs(n - o) > t ? null : (n + o) / 2;
      }
      function ie(e) {
        if (null === e) return "null";
        if ("number" === typeof e || "boolean" === typeof e)
          return JSON.stringify(e);
        if ("string" === typeof e) return e;
        if (a.O$.isBigNumber(e)) return e.toString();
        if (Array.isArray(e)) return JSON.stringify(e.map((e) => ie(e)));
        if ("object" === typeof e) {
          const t = Object.keys(e);
          return (
            t.sort(),
            "{" +
              t
                .map((t) => {
                  let r = e[t];
                  return (
                    (r = "function" === typeof r ? "[function]" : ie(r)),
                    JSON.stringify(t) + ":" + r
                  );
                })
                .join(",") +
              "}"
          );
        }
        throw new Error("unknown value type: " + typeof e);
      }
      let ae = 1;
      function se(e) {
        let t = null,
          r = null,
          n = new Promise((n) => {
            (t = function () {
              r && (clearTimeout(r), (r = null)), n();
            }),
              (r = setTimeout(t, e));
          });
        return {
          cancel: t,
          getPromise: function () {
            return n;
          },
          wait: (e) => ((n = n.then(e)), n),
        };
      }
      const ce = [
          w.Yd.errors.CALL_EXCEPTION,
          w.Yd.errors.INSUFFICIENT_FUNDS,
          w.Yd.errors.NONCE_EXPIRED,
          w.Yd.errors.REPLACEMENT_UNDERPRICED,
          w.Yd.errors.UNPREDICTABLE_GAS_LIMIT,
        ],
        ue = [
          "address",
          "args",
          "errorArgs",
          "errorSignature",
          "method",
          "transaction",
        ];
      function le(e, t) {
        const r = { weight: e.weight };
        return (
          Object.defineProperty(r, "provider", { get: () => e.provider }),
          e.start && (r.start = e.start),
          t && (r.duration = t - e.start),
          e.done &&
            (e.error ? (r.error = e.error) : (r.result = e.result || null)),
          r
        );
      }
      function pe(e, t, r) {
        let n = ie;
        switch (t) {
          case "getBlockNumber":
            return function (t) {
              const r = t.map((e) => e.result);
              let n = oe(
                t.map((e) => e.result),
                2
              );
              if (null != n)
                return (
                  (n = Math.ceil(n)),
                  r.indexOf(n + 1) >= 0 && n++,
                  n >= e._highestBlockNumber && (e._highestBlockNumber = n),
                  e._highestBlockNumber
                );
            };
          case "getGasPrice":
            return function (e) {
              const t = e.map((e) => e.result);
              return t.sort(), t[Math.floor(t.length / 2)];
            };
          case "getEtherPrice":
            return function (e) {
              return oe(e.map((e) => e.result));
            };
          case "getBalance":
          case "getTransactionCount":
          case "getCode":
          case "getStorageAt":
          case "call":
          case "estimateGas":
          case "getLogs":
            break;
          case "getTransaction":
          case "getTransactionReceipt":
            n = function (e) {
              return null == e
                ? null
                : (((e = (0, b.DC)(e)).confirmations = -1), ie(e));
            };
            break;
          case "getBlock":
            n = r.includeTransactions
              ? function (e) {
                  return null == e
                    ? null
                    : (((e = (0, b.DC)(e)).transactions = e.transactions.map(
                        (e) => (((e = (0, b.DC)(e)).confirmations = -1), e)
                      )),
                      ie(e));
                }
              : function (e) {
                  return null == e ? null : ie(e);
                };
            break;
          default:
            throw new Error("unknown method: " + t);
        }
        return (function (e, t) {
          return function (r) {
            const n = {};
            r.forEach((t) => {
              const r = e(t.result);
              n[r] || (n[r] = { count: 0, result: t.result }), n[r].count++;
            });
            const o = Object.keys(n);
            for (let e = 0; e < o.length; e++) {
              const r = n[o[e]];
              if (r.count >= t) return r.result;
            }
          };
        })(n, e.quorum);
      }
      function de(e, t) {
        return ee(this, void 0, void 0, function* () {
          const r = e.provider;
          return (null != r.blockNumber && r.blockNumber >= t) || -1 === t
            ? r
            : (0, H.$l)(
                () =>
                  new Promise((n, o) => {
                    setTimeout(function () {
                      return r.blockNumber >= t
                        ? n(r)
                        : e.cancelled
                        ? n(null)
                        : n(void 0);
                    }, 0);
                  }),
                { oncePoll: r }
              );
        });
      }
      function he(e, t, r, n) {
        return ee(this, void 0, void 0, function* () {
          let o = e.provider;
          switch (r) {
            case "getBlockNumber":
            case "getGasPrice":
              return o[r]();
            case "getEtherPrice":
              if (o.getEtherPrice) return o.getEtherPrice();
              break;
            case "getBalance":
            case "getTransactionCount":
            case "getCode":
              return (
                n.blockTag && (0, W.A7)(n.blockTag) && (o = yield de(e, t)),
                o[r](n.address, n.blockTag || "latest")
              );
            case "getStorageAt":
              return (
                n.blockTag && (0, W.A7)(n.blockTag) && (o = yield de(e, t)),
                o.getStorageAt(n.address, n.position, n.blockTag || "latest")
              );
            case "getBlock":
              return (
                n.blockTag && (0, W.A7)(n.blockTag) && (o = yield de(e, t)),
                o[
                  n.includeTransactions
                    ? "getBlockWithTransactions"
                    : "getBlock"
                ](n.blockTag || n.blockHash)
              );
            case "call":
            case "estimateGas":
              return (
                n.blockTag && (0, W.A7)(n.blockTag) && (o = yield de(e, t)),
                "call" === r && n.blockTag
                  ? o[r](n.transaction, n.blockTag)
                  : o[r](n.transaction)
              );
            case "getTransaction":
            case "getTransactionReceipt":
              return o[r](n.transactionHash);
            case "getLogs": {
              let r = n.filter;
              return (
                ((r.fromBlock && (0, W.A7)(r.fromBlock)) ||
                  (r.toBlock && (0, W.A7)(r.toBlock))) &&
                  (o = yield de(e, t)),
                o.getLogs(r)
              );
            }
          }
          return te.throwError(
            "unknown method error",
            w.Yd.errors.UNKNOWN_ERROR,
            { method: r, params: n }
          );
        });
      }
      class fe extends m.Zk {
        constructor(e, t) {
          0 === e.length &&
            te.throwArgumentError("missing providers", "providers", e);
          const r = e.map((e, t) => {
              if (f.zt.isProvider(e)) {
                const t = (0, v.Gp)(e) ? 2e3 : 750,
                  r = 1;
                return Object.freeze({
                  provider: e,
                  weight: 1,
                  stallTimeout: t,
                  priority: r,
                });
              }
              const r = (0, b.DC)(e);
              null == r.priority && (r.priority = 1),
                null == r.stallTimeout &&
                  (r.stallTimeout = (0, v.Gp)(e) ? 2e3 : 750),
                null == r.weight && (r.weight = 1);
              const n = r.weight;
              return (
                (n % 1 || n > 512 || n < 1) &&
                  te.throwArgumentError(
                    "invalid weight; must be integer in [1, 512]",
                    `providers[${t}].weight`,
                    n
                  ),
                Object.freeze(r)
              );
            }),
            n = r.reduce((e, t) => e + t.weight, 0);
          null == t
            ? (t = n / 2)
            : t > n &&
              te.throwArgumentError(
                "quorum will always fail; larger than total weight",
                "quorum",
                t
              );
          let o = ne(r.map((e) => e.provider.network));
          null == o &&
            (o = new Promise((e, t) => {
              setTimeout(() => {
                this.detectNetwork().then(e, t);
              }, 0);
            })),
            super(o),
            (0, b.zG)(this, "providerConfigs", Object.freeze(r)),
            (0, b.zG)(this, "quorum", t),
            (this._highestBlockNumber = -1);
        }
        detectNetwork() {
          return ee(this, void 0, void 0, function* () {
            return ne(
              yield Promise.all(
                this.providerConfigs.map((e) => e.provider.getNetwork())
              )
            );
          });
        }
        perform(e, t) {
          return ee(this, void 0, void 0, function* () {
            if ("sendTransaction" === e) {
              const e = yield Promise.all(
                this.providerConfigs.map((e) =>
                  e.provider.sendTransaction(t.signedTransaction).then(
                    (e) => e.hash,
                    (e) => e
                  )
                )
              );
              for (let t = 0; t < e.length; t++) {
                const r = e[t];
                if ("string" === typeof r) return r;
              }
              throw e[0];
            }
            -1 === this._highestBlockNumber &&
              "getBlockNumber" !== e &&
              (yield this.getBlockNumber());
            const r = pe(this, e, t),
              n = (0, Z.y)(this.providerConfigs.map(b.DC));
            n.sort((e, t) => e.priority - t.priority);
            const o = this._highestBlockNumber;
            let i = 0,
              a = !0;
            for (;;) {
              const s = re();
              let c = n
                .filter((e) => e.runner && s - e.start < e.stallTimeout)
                .reduce((e, t) => e + t.weight, 0);
              for (; c < this.quorum && i < n.length; ) {
                const r = n[i++],
                  a = ae++;
                (r.start = re()),
                  (r.staller = se(r.stallTimeout)),
                  r.staller.wait(() => {
                    r.staller = null;
                  }),
                  (r.runner = he(r, o, e, t).then(
                    (n) => {
                      (r.done = !0),
                        (r.result = n),
                        this.listenerCount("debug") &&
                          this.emit("debug", {
                            action: "request",
                            rid: a,
                            backend: le(r, re()),
                            request: { method: e, params: (0, b.p$)(t) },
                            provider: this,
                          });
                    },
                    (n) => {
                      (r.done = !0),
                        (r.error = n),
                        this.listenerCount("debug") &&
                          this.emit("debug", {
                            action: "request",
                            rid: a,
                            backend: le(r, re()),
                            request: { method: e, params: (0, b.p$)(t) },
                            provider: this,
                          });
                    }
                  )),
                  this.listenerCount("debug") &&
                    this.emit("debug", {
                      action: "request",
                      rid: a,
                      backend: le(r, null),
                      request: { method: e, params: (0, b.p$)(t) },
                      provider: this,
                    }),
                  (c += r.weight);
              }
              const u = [];
              n.forEach((e) => {
                !e.done &&
                  e.runner &&
                  (u.push(e.runner),
                  e.staller && u.push(e.staller.getPromise()));
              }),
                u.length && (yield Promise.race(u));
              const l = n.filter((e) => e.done && null == e.error);
              if (l.length >= this.quorum) {
                const e = r(l);
                if (void 0 !== e)
                  return (
                    n.forEach((e) => {
                      e.staller && e.staller.cancel(), (e.cancelled = !0);
                    }),
                    e
                  );
                a || (yield se(100).getPromise()), (a = !1);
              }
              const p = n.reduce((e, t) => {
                if (!t.done || null == t.error) return e;
                const r = t.error.code;
                return (
                  ce.indexOf(r) >= 0 &&
                    (e[r] || (e[r] = { error: t.error, weight: 0 }),
                    (e[r].weight += t.weight)),
                  e
                );
              }, {});
              if (
                (Object.keys(p).forEach((e) => {
                  const t = p[e];
                  if (t.weight < this.quorum) return;
                  n.forEach((e) => {
                    e.staller && e.staller.cancel(), (e.cancelled = !0);
                  });
                  const r = t.error,
                    o = {};
                  ue.forEach((e) => {
                    null != r[e] && (o[e] = r[e]);
                  }),
                    te.throwError(r.reason || r.message, e, o);
                }),
                0 === n.filter((e) => !e.done).length)
              )
                break;
            }
            return (
              n.forEach((e) => {
                e.staller && e.staller.cancel(), (e.cancelled = !0);
              }),
              te.throwError("failed to meet quorum", w.Yd.errors.SERVER_ERROR, {
                method: e,
                params: t,
                results: n.map((e) => le(e)),
                provider: this,
              })
            );
          });
        }
      }
      const ye = null,
        me = new w.Yd(T.i),
        be = "84842078b09946638c03157f83405213";
      class ve extends P {
        constructor(e, t) {
          const r = new ge(e, t),
            n = r.connection;
          n.password &&
            me.throwError(
              "INFURA WebSocket project secrets unsupported",
              w.Yd.errors.UNSUPPORTED_OPERATION,
              { operation: "InfuraProvider.getWebSocketProvider()" }
            );
          super(n.url.replace(/^http/i, "ws").replace("/v3/", "/ws/v3/"), e),
            (0, b.zG)(this, "apiKey", r.projectId),
            (0, b.zG)(this, "projectId", r.projectId),
            (0, b.zG)(this, "projectSecret", r.projectSecret);
        }
        isCommunityResource() {
          return this.projectId === be;
        }
      }
      class ge extends O {
        static getWebSocketProvider(e, t) {
          return new ve(e, t);
        }
        static getApiKey(e) {
          const t = { apiKey: be, projectId: be, projectSecret: null };
          return (
            null == e ||
              ("string" === typeof e
                ? (t.projectId = e)
                : null != e.projectSecret
                ? (me.assertArgument(
                    "string" === typeof e.projectId,
                    "projectSecret requires a projectId",
                    "projectId",
                    e.projectId
                  ),
                  me.assertArgument(
                    "string" === typeof e.projectSecret,
                    "invalid projectSecret",
                    "projectSecret",
                    "[REDACTED]"
                  ),
                  (t.projectId = e.projectId),
                  (t.projectSecret = e.projectSecret))
                : e.projectId && (t.projectId = e.projectId),
              (t.apiKey = t.projectId)),
            t
          );
        }
        static getUrl(e, t) {
          let r = null;
          switch (e ? e.name : "unknown") {
            case "homestead":
              r = "mainnet.infura.io";
              break;
            case "ropsten":
              r = "ropsten.infura.io";
              break;
            case "rinkeby":
              r = "rinkeby.infura.io";
              break;
            case "kovan":
              r = "kovan.infura.io";
              break;
            case "goerli":
              r = "goerli.infura.io";
              break;
            case "matic":
              r = "polygon-mainnet.infura.io";
              break;
            case "maticmum":
              r = "polygon-mumbai.infura.io";
              break;
            case "optimism":
              r = "optimism-mainnet.infura.io";
              break;
            case "optimism-kovan":
              r = "optimism-kovan.infura.io";
              break;
            case "arbitrum":
              r = "arbitrum-mainnet.infura.io";
              break;
            case "arbitrum-rinkeby":
              r = "arbitrum-rinkeby.infura.io";
              break;
            default:
              me.throwError(
                "unsupported network",
                w.Yd.errors.INVALID_ARGUMENT,
                { argument: "network", value: e }
              );
          }
          const n = {
            allowGzip: !0,
            url: "https://" + r + "/v3/" + t.projectId,
            throttleCallback: (e, r) => (
              t.projectId === be && (0, v.vh)(), Promise.resolve(!0)
            ),
          };
          return (
            null != t.projectSecret &&
              ((n.user = ""), (n.password = t.projectSecret)),
            n
          );
        }
        isCommunityResource() {
          return this.projectId === be;
        }
      }
      class we extends g.r {
        send(e, t) {
          const r = {
            method: e,
            params: t,
            id: this._nextId++,
            jsonrpc: "2.0",
          };
          null == this._pendingBatch && (this._pendingBatch = []);
          const n = { request: r, resolve: null, reject: null },
            o = new Promise((e, t) => {
              (n.resolve = e), (n.reject = t);
            });
          return (
            this._pendingBatch.push(n),
            this._pendingBatchAggregator ||
              (this._pendingBatchAggregator = setTimeout(() => {
                const e = this._pendingBatch;
                (this._pendingBatch = null),
                  (this._pendingBatchAggregator = null);
                const t = e.map((e) => e.request);
                return (
                  this.emit("debug", {
                    action: "requestBatch",
                    request: (0, b.p$)(t),
                    provider: this,
                  }),
                  (0, H.rd)(this.connection, JSON.stringify(t)).then(
                    (r) => {
                      this.emit("debug", {
                        action: "response",
                        request: t,
                        response: r,
                        provider: this,
                      }),
                        e.forEach((e, t) => {
                          const n = r[t];
                          if (n.error) {
                            const t = new Error(n.error.message);
                            (t.code = n.error.code),
                              (t.data = n.error.data),
                              e.reject(t);
                          } else e.resolve(n.result);
                        });
                    },
                    (r) => {
                      this.emit("debug", {
                        action: "response",
                        error: r,
                        request: t,
                        provider: this,
                      }),
                        e.forEach((e) => {
                          e.reject(r);
                        });
                    }
                  )
                );
              }, 10)),
            o
          );
        }
      }
      const Te = new w.Yd(T.i);
      class ke extends O {
        static getApiKey(e) {
          return (
            e &&
              "string" !== typeof e &&
              Te.throwArgumentError("invalid apiKey", "apiKey", e),
            e || "ETHERS_JS_SHARED"
          );
        }
        static getUrl(e, t) {
          Te.warn(
            "NodeSmith will be discontinued on 2019-12-20; please migrate to another platform."
          );
          let r = null;
          switch (e.name) {
            case "homestead":
              r = "https://ethereum.api.nodesmith.io/v1/mainnet/jsonrpc";
              break;
            case "ropsten":
              r = "https://ethereum.api.nodesmith.io/v1/ropsten/jsonrpc";
              break;
            case "rinkeby":
              r = "https://ethereum.api.nodesmith.io/v1/rinkeby/jsonrpc";
              break;
            case "goerli":
              r = "https://ethereum.api.nodesmith.io/v1/goerli/jsonrpc";
              break;
            case "kovan":
              r = "https://ethereum.api.nodesmith.io/v1/kovan/jsonrpc";
              break;
            default:
              Te.throwArgumentError(
                "unsupported network",
                "network",
                arguments[0]
              );
          }
          return r + "?apiKey=" + t;
        }
      }
      const Ee = new w.Yd(T.i),
        Se = "62e1ad51b37b8e00394bda3b";
      class xe extends O {
        static getApiKey(e) {
          const t = {
            applicationId: null,
            loadBalancer: !0,
            applicationSecretKey: null,
          };
          return (
            null == e
              ? (t.applicationId = Se)
              : "string" === typeof e
              ? (t.applicationId = e)
              : null != e.applicationSecretKey
              ? ((t.applicationId = e.applicationId),
                (t.applicationSecretKey = e.applicationSecretKey))
              : e.applicationId
              ? (t.applicationId = e.applicationId)
              : Ee.throwArgumentError(
                  "unsupported PocketProvider apiKey",
                  "apiKey",
                  e
                ),
            t
          );
        }
        static getUrl(e, t) {
          let r = null;
          switch (e ? e.name : "unknown") {
            case "goerli":
              r = "eth-goerli.gateway.pokt.network";
              break;
            case "homestead":
              r = "eth-mainnet.gateway.pokt.network";
              break;
            case "kovan":
              r = "poa-kovan.gateway.pokt.network";
              break;
            case "matic":
              r = "poly-mainnet.gateway.pokt.network";
              break;
            case "maticmum":
              r = "polygon-mumbai-rpc.gateway.pokt.network";
              break;
            case "rinkeby":
              r = "eth-rinkeby.gateway.pokt.network";
              break;
            case "ropsten":
              r = "eth-ropsten.gateway.pokt.network";
              break;
            default:
              Ee.throwError(
                "unsupported network",
                w.Yd.errors.INVALID_ARGUMENT,
                { argument: "network", value: e }
              );
          }
          const n = {
            headers: {},
            url: `https://${r}/v1/lb/${t.applicationId}`,
          };
          return (
            null != t.applicationSecretKey &&
              ((n.user = ""), (n.password = t.applicationSecretKey)),
            n
          );
        }
        isCommunityResource() {
          return this.applicationId === Se;
        }
      }
      var Pe = r(96269);
      const _e = new w.Yd(T.i);
      function Ae(e, t) {
        if ((null == e && (e = "homestead"), "string" === typeof e)) {
          const t = e.match(/^(ws|http)s?:/i);
          if (t)
            switch (t[1].toLowerCase()) {
              case "http":
              case "https":
                return new g.r(e);
              case "ws":
              case "wss":
                return new P(e);
              default:
                _e.throwArgumentError("unsupported URL scheme", "network", e);
            }
        }
        const r = (0, y.H)(e);
        return (
          (r && r._defaultProvider) ||
            _e.throwError(
              "unsupported getDefaultProvider network",
              w.Yd.errors.NETWORK_ERROR,
              { operation: "getDefaultProvider", network: e }
            ),
          r._defaultProvider(
            {
              FallbackProvider: fe,
              AlchemyProvider: L,
              AnkrProvider: B,
              CloudflareProvider: Y,
              EtherscanProvider: X,
              InfuraProvider: ge,
              JsonRpcProvider: g.r,
              NodesmithProvider: ke,
              PocketProvider: xe,
              Web3Provider: Pe.Q,
              IpcProvider: ye,
            },
            t
          )
        );
      }
      var Re = r(28634),
        Oe = r(98460),
        Ce = r(17781);
      const Ie = "ethers/5.7.0",
        Ne = new w.Yd(Ie);
    },
    63171: function (e, t, r) {
      "use strict";
      var n = r(56454);
      function o() {}
      function i() {}
      (i.resetWarningCache = o),
        (e.exports = function () {
          function e(e, t, r, o, i, a) {
            if (a !== n) {
              var s = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((s.name = "Invariant Violation"), s);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var r = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: o,
          };
          return (r.PropTypes = r), r;
        });
    },
    50862: function (e, t, r) {
      e.exports = r(63171)();
    },
    56454: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    34543: function (e, t, r) {
      "use strict";
      var n = r(56168),
        o = function (e, t) {
          return (o =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        };
      var i = function () {
        return (i =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var o in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      var a = "Pixel",
        s = "Percent",
        c = { unit: s, value: 0.8 };
      function u(e) {
        return "number" === typeof e
          ? { unit: s, value: 100 * e }
          : "string" === typeof e
          ? e.match(/^(\d*(\.\d+)?)px$/)
            ? { unit: a, value: parseFloat(e) }
            : e.match(/^(\d*(\.\d+)?)%$/)
            ? { unit: s, value: parseFloat(e) }
            : (console.warn(
                'scrollThreshold format is invalid. Valid formats: "120px", "50%"...'
              ),
              c)
          : (console.warn("scrollThreshold should be string or number"), c);
      }
      var l = (function (e) {
        function t(t) {
          var r = e.call(this, t) || this;
          return (
            (r.lastScrollTop = 0),
            (r.actionTriggered = !1),
            (r.startY = 0),
            (r.currentY = 0),
            (r.dragging = !1),
            (r.maxPullDownDistance = 0),
            (r.getScrollableTarget = function () {
              return r.props.scrollableTarget instanceof HTMLElement
                ? r.props.scrollableTarget
                : "string" === typeof r.props.scrollableTarget
                ? document.getElementById(r.props.scrollableTarget)
                : (null === r.props.scrollableTarget &&
                    console.warn(
                      "You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "
                    ),
                  null);
            }),
            (r.onStart = function (e) {
              r.lastScrollTop ||
                ((r.dragging = !0),
                e instanceof MouseEvent
                  ? (r.startY = e.pageY)
                  : e instanceof TouchEvent && (r.startY = e.touches[0].pageY),
                (r.currentY = r.startY),
                r._infScroll &&
                  ((r._infScroll.style.willChange = "transform"),
                  (r._infScroll.style.transition =
                    "transform 0.2s cubic-bezier(0,0,0.31,1)")));
            }),
            (r.onMove = function (e) {
              r.dragging &&
                (e instanceof MouseEvent
                  ? (r.currentY = e.pageY)
                  : e instanceof TouchEvent &&
                    (r.currentY = e.touches[0].pageY),
                r.currentY < r.startY ||
                  (r.currentY - r.startY >=
                    Number(r.props.pullDownToRefreshThreshold) &&
                    r.setState({ pullToRefreshThresholdBreached: !0 }),
                  r.currentY - r.startY > 1.5 * r.maxPullDownDistance ||
                    (r._infScroll &&
                      ((r._infScroll.style.overflow = "visible"),
                      (r._infScroll.style.transform =
                        "translate3d(0px, " +
                        (r.currentY - r.startY) +
                        "px, 0px)")))));
            }),
            (r.onEnd = function () {
              (r.startY = 0),
                (r.currentY = 0),
                (r.dragging = !1),
                r.state.pullToRefreshThresholdBreached &&
                  (r.props.refreshFunction && r.props.refreshFunction(),
                  r.setState({ pullToRefreshThresholdBreached: !1 })),
                requestAnimationFrame(function () {
                  r._infScroll &&
                    ((r._infScroll.style.overflow = "auto"),
                    (r._infScroll.style.transform = "none"),
                    (r._infScroll.style.willChange = "unset"));
                });
            }),
            (r.onScrollListener = function (e) {
              "function" === typeof r.props.onScroll &&
                setTimeout(function () {
                  return r.props.onScroll && r.props.onScroll(e);
                }, 0);
              var t =
                r.props.height || r._scrollableNode
                  ? e.target
                  : document.documentElement.scrollTop
                  ? document.documentElement
                  : document.body;
              r.actionTriggered ||
                ((r.props.inverse
                  ? r.isElementAtTop(t, r.props.scrollThreshold)
                  : r.isElementAtBottom(t, r.props.scrollThreshold)) &&
                  r.props.hasMore &&
                  ((r.actionTriggered = !0),
                  r.setState({ showLoader: !0 }),
                  r.props.next && r.props.next()),
                (r.lastScrollTop = t.scrollTop));
            }),
            (r.state = {
              showLoader: !1,
              pullToRefreshThresholdBreached: !1,
              prevDataLength: t.dataLength,
            }),
            (r.throttledOnScrollListener = (function (e, t, r, n) {
              var o,
                i = !1,
                a = 0;
              function s() {
                o && clearTimeout(o);
              }
              function c() {
                var c = this,
                  u = Date.now() - a,
                  l = arguments;
                function p() {
                  (a = Date.now()), r.apply(c, l);
                }
                function d() {
                  o = void 0;
                }
                i ||
                  (n && !o && p(),
                  s(),
                  void 0 === n && u > e
                    ? p()
                    : !0 !== t &&
                      (o = setTimeout(n ? d : p, void 0 === n ? e - u : e)));
              }
              return (
                "boolean" !== typeof t && ((n = r), (r = t), (t = void 0)),
                (c.cancel = function () {
                  s(), (i = !0);
                }),
                c
              );
            })(150, r.onScrollListener).bind(r)),
            (r.onStart = r.onStart.bind(r)),
            (r.onMove = r.onMove.bind(r)),
            (r.onEnd = r.onEnd.bind(r)),
            r
          );
        }
        return (
          (function (e, t) {
            function r() {
              this.constructor = e;
            }
            o(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          })(t, e),
          (t.prototype.componentDidMount = function () {
            if ("undefined" === typeof this.props.dataLength)
              throw new Error(
                'mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage'
              );
            if (
              ((this._scrollableNode = this.getScrollableTarget()),
              (this.el = this.props.height
                ? this._infScroll
                : this._scrollableNode || window),
              this.el &&
                this.el.addEventListener(
                  "scroll",
                  this.throttledOnScrollListener
                ),
              "number" === typeof this.props.initialScrollY &&
                this.el &&
                this.el instanceof HTMLElement &&
                this.el.scrollHeight > this.props.initialScrollY &&
                this.el.scrollTo(0, this.props.initialScrollY),
              this.props.pullDownToRefresh &&
                this.el &&
                (this.el.addEventListener("touchstart", this.onStart),
                this.el.addEventListener("touchmove", this.onMove),
                this.el.addEventListener("touchend", this.onEnd),
                this.el.addEventListener("mousedown", this.onStart),
                this.el.addEventListener("mousemove", this.onMove),
                this.el.addEventListener("mouseup", this.onEnd),
                (this.maxPullDownDistance =
                  (this._pullDown &&
                    this._pullDown.firstChild &&
                    this._pullDown.firstChild.getBoundingClientRect().height) ||
                  0),
                this.forceUpdate(),
                "function" !== typeof this.props.refreshFunction))
            )
              throw new Error(
                'Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\''
              );
          }),
          (t.prototype.componentWillUnmount = function () {
            this.el &&
              (this.el.removeEventListener(
                "scroll",
                this.throttledOnScrollListener
              ),
              this.props.pullDownToRefresh &&
                (this.el.removeEventListener("touchstart", this.onStart),
                this.el.removeEventListener("touchmove", this.onMove),
                this.el.removeEventListener("touchend", this.onEnd),
                this.el.removeEventListener("mousedown", this.onStart),
                this.el.removeEventListener("mousemove", this.onMove),
                this.el.removeEventListener("mouseup", this.onEnd)));
          }),
          (t.prototype.componentDidUpdate = function (e) {
            this.props.dataLength !== e.dataLength &&
              ((this.actionTriggered = !1), this.setState({ showLoader: !1 }));
          }),
          (t.getDerivedStateFromProps = function (e, t) {
            return e.dataLength !== t.prevDataLength
              ? i(i({}, t), { prevDataLength: e.dataLength })
              : null;
          }),
          (t.prototype.isElementAtTop = function (e, t) {
            void 0 === t && (t = 0.8);
            var r =
                e === document.body || e === document.documentElement
                  ? window.screen.availHeight
                  : e.clientHeight,
              n = u(t);
            return n.unit === a
              ? e.scrollTop <= n.value + r - e.scrollHeight + 1
              : e.scrollTop <= n.value / 100 + r - e.scrollHeight + 1;
          }),
          (t.prototype.isElementAtBottom = function (e, t) {
            void 0 === t && (t = 0.8);
            var r =
                e === document.body || e === document.documentElement
                  ? window.screen.availHeight
                  : e.clientHeight,
              n = u(t);
            return n.unit === a
              ? e.scrollTop + r >= e.scrollHeight - n.value
              : e.scrollTop + r >= (n.value / 100) * e.scrollHeight;
          }),
          (t.prototype.render = function () {
            var e = this,
              t = i(
                {
                  height: this.props.height || "auto",
                  overflow: "auto",
                  WebkitOverflowScrolling: "touch",
                },
                this.props.style
              ),
              r =
                this.props.hasChildren ||
                !!(
                  this.props.children &&
                  this.props.children instanceof Array &&
                  this.props.children.length
                ),
              o =
                this.props.pullDownToRefresh && this.props.height
                  ? { overflow: "auto" }
                  : {};
            return n.createElement(
              "div",
              { style: o, className: "infinite-scroll-component__outerdiv" },
              n.createElement(
                "div",
                {
                  className:
                    "infinite-scroll-component " + (this.props.className || ""),
                  ref: function (t) {
                    return (e._infScroll = t);
                  },
                  style: t,
                },
                this.props.pullDownToRefresh &&
                  n.createElement(
                    "div",
                    {
                      style: { position: "relative" },
                      ref: function (t) {
                        return (e._pullDown = t);
                      },
                    },
                    n.createElement(
                      "div",
                      {
                        style: {
                          position: "absolute",
                          left: 0,
                          right: 0,
                          top: -1 * this.maxPullDownDistance,
                        },
                      },
                      this.state.pullToRefreshThresholdBreached
                        ? this.props.releaseToRefreshContent
                        : this.props.pullDownToRefreshContent
                    )
                  ),
                this.props.children,
                !this.state.showLoader &&
                  !r &&
                  this.props.hasMore &&
                  this.props.loader,
                this.state.showLoader &&
                  this.props.hasMore &&
                  this.props.loader,
                !this.props.hasMore && this.props.endMessage
              )
            );
          }),
          t
        );
      })(n.Component);
      t.Z = l;
    },
    85429: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return rr;
        },
      });
      var n = r(56168),
        o = r(50862),
        i = r.n(o),
        a =
          ("undefined" != typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto)) ||
          ("undefined" != typeof msCrypto &&
            "function" == typeof msCrypto.getRandomValues &&
            msCrypto.getRandomValues.bind(msCrypto)),
        s = new Uint8Array(16);
      function c() {
        if (!a)
          throw new Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
          );
        return a(s);
      }
      for (var u = [], l = 0; l < 256; ++l)
        u[l] = (l + 256).toString(16).substr(1);
      var p = function (e, t) {
        var r = t || 0,
          n = u;
        return [
          n[e[r++]],
          n[e[r++]],
          n[e[r++]],
          n[e[r++]],
          "-",
          n[e[r++]],
          n[e[r++]],
          "-",
          n[e[r++]],
          n[e[r++]],
          "-",
          n[e[r++]],
          n[e[r++]],
          "-",
          n[e[r++]],
          n[e[r++]],
          n[e[r++]],
          n[e[r++]],
          n[e[r++]],
          n[e[r++]],
        ].join("");
      };
      var d = function (e, t, r) {
        var n = (t && r) || 0;
        "string" == typeof e &&
          ((t = "binary" === e ? new Array(16) : null), (e = null));
        var o = (e = e || {}).random || (e.rng || c)();
        if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), t))
          for (var i = 0; i < 16; ++i) t[n + i] = o[i];
        return t || p(o);
      };
      function h(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function f(e, t, r) {
        return t && h(e.prototype, t), r && h(e, r), e;
      }
      function y(e, t, r) {
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
      function m() {
        return (m =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function b(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(Object(r), !0).forEach(function (t) {
                y(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : b(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function g(e) {
        return (g = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function w(e, t) {
        return (w =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function T(e, t) {
        return !t || ("object" !== typeof t && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      var k = {
          HIDE: "__react_tooltip_hide_event",
          REBUILD: "__react_tooltip_rebuild_event",
          SHOW: "__react_tooltip_show_event",
        },
        E = function (e, t) {
          var r;
          "function" === typeof window.CustomEvent
            ? (r = new window.CustomEvent(e, { detail: t }))
            : (r = document.createEvent("Event")).initEvent(e, !1, !0, t),
            window.dispatchEvent(r);
        };
      var S = function (e, t) {
          var r = this.state.show,
            n = this.props.id,
            o = this.isCapture(t.currentTarget),
            i = t.currentTarget.getAttribute("currentItem");
          o || t.stopPropagation(),
            r && "true" === i
              ? e || this.hideTooltip(t)
              : (t.currentTarget.setAttribute("currentItem", "true"),
                x(t.currentTarget, this.getTargetArray(n)),
                this.showTooltip(t));
        },
        x = function (e, t) {
          for (var r = 0; r < t.length; r++)
            e !== t[r]
              ? t[r].setAttribute("currentItem", "false")
              : t[r].setAttribute("currentItem", "true");
        },
        P = {
          id: "9b69f92e-d3fe-498b-b1b4-c5e63a51b0cf",
          set: function (e, t, r) {
            this.id in e
              ? (e[this.id][t] = r)
              : Object.defineProperty(e, this.id, {
                  configurable: !0,
                  value: y({}, t, r),
                });
          },
          get: function (e, t) {
            var r = e[this.id];
            if (void 0 !== r) return r[t];
          },
        };
      var _ = function (e, t, r) {
          var n = t.respectEffect,
            o = void 0 !== n && n,
            i = t.customEvent,
            a = void 0 !== i && i,
            s = this.props.id,
            c = r.target.getAttribute("data-tip") || null,
            u = r.target.getAttribute("data-for") || null,
            l = r.target;
          if (!this.isCustomEvent(l) || a) {
            var p = (null == s && null == u) || u === s;
            if (null != c && (!o || "float" === this.getEffect(l)) && p) {
              var d = (function (e) {
                var t = {};
                for (var r in e)
                  "function" === typeof e[r]
                    ? (t[r] = e[r].bind(e))
                    : (t[r] = e[r]);
                return t;
              })(r);
              (d.currentTarget = l), e(d);
            }
          }
        },
        A = function (e, t) {
          var r = {};
          return (
            e.forEach(function (e) {
              var n = e.getAttribute(t);
              n &&
                n.split(" ").forEach(function (e) {
                  return (r[e] = !0);
                });
            }),
            r
          );
        },
        R = function () {
          return document.getElementsByTagName("body")[0];
        };
      function O(e, t, r, n, o, i, a) {
        for (
          var s = C(r),
            c = s.width,
            u = s.height,
            l = C(t),
            p = l.width,
            d = l.height,
            h = I(e, t, i),
            f = h.mouseX,
            y = h.mouseY,
            m = N(i, p, d, c, u),
            b = L(a),
            v = b.extraOffsetX,
            g = b.extraOffsetY,
            w = window.innerWidth,
            T = window.innerHeight,
            k = M(r),
            E = k.parentTop,
            S = k.parentLeft,
            x = function (e) {
              var t = m[e].l;
              return f + t + v;
            },
            P = function (e) {
              var t = m[e].t;
              return y + t + g;
            },
            _ = function (e) {
              return (
                (function (e) {
                  var t = m[e].r;
                  return f + t + v;
                })(e) > w
              );
            },
            A = function (e) {
              return (
                (function (e) {
                  var t = m[e].b;
                  return y + t + g;
                })(e) > T
              );
            },
            R = function (e) {
              return (
                (function (e) {
                  return x(e) < 0;
                })(e) ||
                _(e) ||
                (function (e) {
                  return P(e) < 0;
                })(e) ||
                A(e)
              );
            },
            O = function (e) {
              return !R(e);
            },
            j = ["top", "bottom", "left", "right"],
            D = [],
            B = 0;
          B < 4;
          B++
        ) {
          var F = j[B];
          O(F) && D.push(F);
        }
        var U,
          Y = !1,
          W = o !== n;
        return (
          O(o) && W
            ? ((Y = !0), (U = o))
            : D.length > 0 && R(o) && R(n) && ((Y = !0), (U = D[0])),
          Y
            ? { isNewState: !0, newState: { place: U } }
            : {
                isNewState: !1,
                position: {
                  left: parseInt(x(n) - S, 10),
                  top: parseInt(P(n) - E, 10),
                },
              }
        );
      }
      var C = function (e) {
          var t = e.getBoundingClientRect(),
            r = t.height,
            n = t.width;
          return { height: parseInt(r, 10), width: parseInt(n, 10) };
        },
        I = function (e, t, r) {
          var n = t.getBoundingClientRect(),
            o = n.top,
            i = n.left,
            a = C(t),
            s = a.width,
            c = a.height;
          return "float" === r
            ? { mouseX: e.clientX, mouseY: e.clientY }
            : { mouseX: i + s / 2, mouseY: o + c / 2 };
        },
        N = function (e, t, r, n, o) {
          var i, a, s, c;
          return (
            "float" === e
              ? ((i = { l: -n / 2, r: n / 2, t: -(o + 3 + 2), b: -3 }),
                (s = { l: -n / 2, r: n / 2, t: 15, b: o + 3 + 2 + 12 }),
                (c = { l: -(n + 3 + 2), r: -3, t: -o / 2, b: o / 2 }),
                (a = { l: 3, r: n + 3 + 2, t: -o / 2, b: o / 2 }))
              : "solid" === e &&
                ((i = { l: -n / 2, r: n / 2, t: -(r / 2 + o + 2), b: -r / 2 }),
                (s = { l: -n / 2, r: n / 2, t: r / 2, b: r / 2 + o + 2 }),
                (c = { l: -(n + t / 2 + 2), r: -t / 2, t: -o / 2, b: o / 2 }),
                (a = { l: t / 2, r: n + t / 2 + 2, t: -o / 2, b: o / 2 })),
            { top: i, bottom: s, left: c, right: a }
          );
        },
        L = function (e) {
          var t = 0,
            r = 0;
          for (var n in ("[object String]" ===
            Object.prototype.toString.apply(e) &&
            (e = JSON.parse(e.toString().replace(/'/g, '"'))),
          e))
            "top" === n
              ? (r -= parseInt(e[n], 10))
              : "bottom" === n
              ? (r += parseInt(e[n], 10))
              : "left" === n
              ? (t -= parseInt(e[n], 10))
              : "right" === n && (t += parseInt(e[n], 10));
          return { extraOffsetX: t, extraOffsetY: r };
        },
        M = function (e) {
          for (var t = e; t; ) {
            var r = window.getComputedStyle(t);
            if (
              "none" !== r.getPropertyValue("transform") ||
              "transform" === r.getPropertyValue("will-change")
            )
              break;
            t = t.parentElement;
          }
          return {
            parentTop: (t && t.getBoundingClientRect().top) || 0,
            parentLeft: (t && t.getBoundingClientRect().left) || 0,
          };
        };
      function j(e, t, r, o) {
        if (t) return t;
        if (void 0 !== r && null !== r) return r;
        if (null === r) return null;
        var i = /<br\s*\/?>/;
        return o && "false" !== o && i.test(e)
          ? e.split(i).map(function (e, t) {
              return n.createElement(
                "span",
                { key: t, className: "multi-line" },
                e
              );
            })
          : e;
      }
      function D(e) {
        var t = {};
        return (
          Object.keys(e)
            .filter(function (e) {
              return /(^aria-\w+$|^role$)/.test(e);
            })
            .forEach(function (r) {
              t[r] = e[r];
            }),
          t
        );
      }
      function B(e) {
        var t = e.length;
        return e.hasOwnProperty
          ? Array.prototype.slice.call(e)
          : new Array(t).fill().map(function (t) {
              return e[t];
            });
      }
      var F = {
        dark: {
          text: "#fff",
          background: "#222",
          border: "transparent",
          arrow: "#222",
        },
        success: {
          text: "#fff",
          background: "#8DC572",
          border: "transparent",
          arrow: "#8DC572",
        },
        warning: {
          text: "#fff",
          background: "#F0AD4E",
          border: "transparent",
          arrow: "#F0AD4E",
        },
        error: {
          text: "#fff",
          background: "#BE6464",
          border: "transparent",
          arrow: "#BE6464",
        },
        info: {
          text: "#fff",
          background: "#337AB7",
          border: "transparent",
          arrow: "#337AB7",
        },
        light: {
          text: "#222",
          background: "#fff",
          border: "transparent",
          arrow: "#fff",
        },
      };
      function U(e, t, r, n) {
        return (function (e, t) {
          var r = t.text,
            n = t.background,
            o = t.border,
            i = t.arrow;
          return "\n  \t."
            .concat(e, " {\n\t    color: ")
            .concat(r, ";\n\t    background: ")
            .concat(n, ";\n\t    border: 1px solid ")
            .concat(o, ";\n  \t}\n\n  \t.")
            .concat(e, ".place-top {\n        margin-top: -10px;\n    }\n    .")
            .concat(e, ".place-top::before {\n        border-top: 8px solid ")
            .concat(o, ";\n    }\n    .")
            .concat(
              e,
              ".place-top::after {\n        border-left: 8px solid transparent;\n        border-right: 8px solid transparent;\n        bottom: -6px;\n        left: 50%;\n        margin-left: -8px;\n        border-top-color: "
            )
            .concat(
              i,
              ";\n        border-top-style: solid;\n        border-top-width: 6px;\n    }\n\n    ."
            )
            .concat(
              e,
              ".place-bottom {\n        margin-top: 10px;\n    }\n    ."
            )
            .concat(
              e,
              ".place-bottom::before {\n        border-bottom: 8px solid "
            )
            .concat(o, ";\n    }\n    .")
            .concat(
              e,
              ".place-bottom::after {\n        border-left: 8px solid transparent;\n        border-right: 8px solid transparent;\n        top: -6px;\n        left: 50%;\n        margin-left: -8px;\n        border-bottom-color: "
            )
            .concat(
              i,
              ";\n        border-bottom-style: solid;\n        border-bottom-width: 6px;\n    }\n\n    ."
            )
            .concat(
              e,
              ".place-left {\n        margin-left: -10px;\n    }\n    ."
            )
            .concat(e, ".place-left::before {\n        border-left: 8px solid ")
            .concat(o, ";\n    }\n    .")
            .concat(
              e,
              ".place-left::after {\n        border-top: 5px solid transparent;\n        border-bottom: 5px solid transparent;\n        right: -6px;\n        top: 50%;\n        margin-top: -4px;\n        border-left-color: "
            )
            .concat(
              i,
              ";\n        border-left-style: solid;\n        border-left-width: 6px;\n    }\n\n    ."
            )
            .concat(
              e,
              ".place-right {\n        margin-left: 10px;\n    }\n    ."
            )
            .concat(
              e,
              ".place-right::before {\n        border-right: 8px solid "
            )
            .concat(o, ";\n    }\n    .")
            .concat(
              e,
              ".place-right::after {\n        border-top: 5px solid transparent;\n        border-bottom: 5px solid transparent;\n        left: -6px;\n        top: 50%;\n        margin-top: -4px;\n        border-right-color: "
            )
            .concat(
              i,
              ";\n        border-right-style: solid;\n        border-right-width: 6px;\n    }\n  "
            );
        })(
          e,
          (function (e, t, r) {
            var n = e.text,
              o = e.background,
              i = e.border,
              a = e.arrow ? e.arrow : e.background,
              s = (function (e) {
                return F[e] ? v({}, F[e]) : void 0;
              })(t);
            n && (s.text = n);
            o && (s.background = o);
            r && (s.border = i || ("light" === t ? "black" : "white"));
            a && (s.arrow = a);
            return s;
          })(t, r, n)
        );
      }
      var Y =
        "undefined" !== typeof globalThis
          ? globalThis
          : "undefined" !== typeof window
          ? window
          : "undefined" !== typeof r.g
          ? r.g
          : "undefined" !== typeof self
          ? self
          : {};
      function W(e, t) {
        return e((t = { exports: {} }), t.exports), t.exports;
      }
      var K = function (e) {
          return e && e.Math == Math && e;
        },
        H =
          K("object" == typeof globalThis && globalThis) ||
          K("object" == typeof window && window) ||
          K("object" == typeof self && self) ||
          K("object" == typeof Y && Y) ||
          (function () {
            return this;
          })() ||
          Function("return this")(),
        G = function (e) {
          try {
            return !!e();
          } catch (error) {
            return !0;
          }
        },
        z = !G(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1]
          );
        }),
        q = {}.propertyIsEnumerable,
        J = Object.getOwnPropertyDescriptor,
        V = {
          f:
            J && !q.call({ 1: 2 }, 1)
              ? function (e) {
                  var t = J(this, e);
                  return !!t && t.enumerable;
                }
              : q,
        },
        $ = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          };
        },
        Q = {}.toString,
        X = function (e) {
          return Q.call(e).slice(8, -1);
        },
        Z = "".split,
        ee = G(function () {
          return !Object("z").propertyIsEnumerable(0);
        })
          ? function (e) {
              return "String" == X(e) ? Z.call(e, "") : Object(e);
            }
          : Object,
        te = function (e) {
          if (void 0 == e) throw TypeError("Can't call method on " + e);
          return e;
        },
        re = function (e) {
          return ee(te(e));
        },
        ne = function (e) {
          return "object" === typeof e ? null !== e : "function" === typeof e;
        },
        oe = function (e, t) {
          if (!ne(e)) return e;
          var r, n;
          if (
            t &&
            "function" == typeof (r = e.toString) &&
            !ne((n = r.call(e)))
          )
            return n;
          if ("function" == typeof (r = e.valueOf) && !ne((n = r.call(e))))
            return n;
          if (
            !t &&
            "function" == typeof (r = e.toString) &&
            !ne((n = r.call(e)))
          )
            return n;
          throw TypeError("Can't convert object to primitive value");
        },
        ie = function (e) {
          return Object(te(e));
        },
        ae = {}.hasOwnProperty,
        se = function (e, t) {
          return ae.call(ie(e), t);
        },
        ce = H.document,
        ue = ne(ce) && ne(ce.createElement),
        le = function (e) {
          return ue ? ce.createElement(e) : {};
        },
        pe =
          !z &&
          !G(function () {
            return (
              7 !=
              Object.defineProperty(le("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          }),
        de = Object.getOwnPropertyDescriptor,
        he = {
          f: z
            ? de
            : function (e, t) {
                if (((e = re(e)), (t = oe(t, !0)), pe))
                  try {
                    return de(e, t);
                  } catch (error) {}
                if (se(e, t)) return $(!V.f.call(e, t), e[t]);
              },
        },
        fe = function (e) {
          if (!ne(e)) throw TypeError(String(e) + " is not an object");
          return e;
        },
        ye = Object.defineProperty,
        me = {
          f: z
            ? ye
            : function (e, t, r) {
                if ((fe(e), (t = oe(t, !0)), fe(r), pe))
                  try {
                    return ye(e, t, r);
                  } catch (error) {}
                if ("get" in r || "set" in r)
                  throw TypeError("Accessors not supported");
                return "value" in r && (e[t] = r.value), e;
              },
        },
        be = z
          ? function (e, t, r) {
              return me.f(e, t, $(1, r));
            }
          : function (e, t, r) {
              return (e[t] = r), e;
            },
        ve = function (e, t) {
          try {
            be(H, e, t);
          } catch (error) {
            H[e] = t;
          }
          return t;
        },
        ge = "__core-js_shared__",
        we = H[ge] || ve(ge, {}),
        Te = Function.toString;
      "function" != typeof we.inspectSource &&
        (we.inspectSource = function (e) {
          return Te.call(e);
        });
      var ke,
        Ee,
        Se,
        xe = we.inspectSource,
        Pe = H.WeakMap,
        _e = "function" === typeof Pe && /native code/.test(xe(Pe)),
        Ae = W(function (e) {
          (e.exports = function (e, t) {
            return we[e] || (we[e] = void 0 !== t ? t : {});
          })("versions", []).push({
            version: "3.12.1",
            mode: "global",
            copyright: "\xa9 2021 Denis Pushkarev (zloirock.ru)",
          });
        }),
        Re = 0,
        Oe = Math.random(),
        Ce = function (e) {
          return (
            "Symbol(" +
            String(void 0 === e ? "" : e) +
            ")_" +
            (++Re + Oe).toString(36)
          );
        },
        Ie = Ae("keys"),
        Ne = function (e) {
          return Ie[e] || (Ie[e] = Ce(e));
        },
        Le = {},
        Me = "Object already initialized",
        je = H.WeakMap;
      if (_e || we.state) {
        var De = we.state || (we.state = new je()),
          Be = De.get,
          Fe = De.has,
          Ue = De.set;
        (ke = function (e, t) {
          if (Fe.call(De, e)) throw new TypeError(Me);
          return (t.facade = e), Ue.call(De, e, t), t;
        }),
          (Ee = function (e) {
            return Be.call(De, e) || {};
          }),
          (Se = function (e) {
            return Fe.call(De, e);
          });
      } else {
        var Ye = Ne("state");
        (Le[Ye] = !0),
          (ke = function (e, t) {
            if (se(e, Ye)) throw new TypeError(Me);
            return (t.facade = e), be(e, Ye, t), t;
          }),
          (Ee = function (e) {
            return se(e, Ye) ? e[Ye] : {};
          }),
          (Se = function (e) {
            return se(e, Ye);
          });
      }
      var We,
        Ke,
        He = {
          set: ke,
          get: Ee,
          has: Se,
          enforce: function (e) {
            return Se(e) ? Ee(e) : ke(e, {});
          },
          getterFor: function (e) {
            return function (t) {
              var r;
              if (!ne(t) || (r = Ee(t)).type !== e)
                throw TypeError("Incompatible receiver, " + e + " required");
              return r;
            };
          },
        },
        Ge = W(function (e) {
          var t = He.get,
            r = He.enforce,
            n = String(String).split("String");
          (e.exports = function (e, t, o, i) {
            var a,
              s = !!i && !!i.unsafe,
              c = !!i && !!i.enumerable,
              u = !!i && !!i.noTargetGet;
            "function" == typeof o &&
              ("string" != typeof t || se(o, "name") || be(o, "name", t),
              (a = r(o)).source ||
                (a.source = n.join("string" == typeof t ? t : ""))),
              e !== H
                ? (s ? !u && e[t] && (c = !0) : delete e[t],
                  c ? (e[t] = o) : be(e, t, o))
                : c
                ? (e[t] = o)
                : ve(t, o);
          })(Function.prototype, "toString", function () {
            return ("function" == typeof this && t(this).source) || xe(this);
          });
        }),
        ze = H,
        qe = function (e) {
          return "function" == typeof e ? e : void 0;
        },
        Je = function (e, t) {
          return arguments.length < 2
            ? qe(ze[e]) || qe(H[e])
            : (ze[e] && ze[e][t]) || (H[e] && H[e][t]);
        },
        Ve = Math.ceil,
        $e = Math.floor,
        Qe = function (e) {
          return isNaN((e = +e)) ? 0 : (e > 0 ? $e : Ve)(e);
        },
        Xe = Math.min,
        Ze = function (e) {
          return e > 0 ? Xe(Qe(e), 9007199254740991) : 0;
        },
        et = Math.max,
        tt = Math.min,
        rt = function (e) {
          return function (t, r, n) {
            var o,
              i = re(t),
              a = Ze(i.length),
              s = (function (e, t) {
                var r = Qe(e);
                return r < 0 ? et(r + t, 0) : tt(r, t);
              })(n, a);
            if (e && r != r) {
              for (; a > s; ) if ((o = i[s++]) != o) return !0;
            } else
              for (; a > s; s++)
                if ((e || s in i) && i[s] === r) return e || s || 0;
            return !e && -1;
          };
        },
        nt = { includes: rt(!0), indexOf: rt(!1) }.indexOf,
        ot = function (e, t) {
          var r,
            n = re(e),
            o = 0,
            i = [];
          for (r in n) !se(Le, r) && se(n, r) && i.push(r);
          for (; t.length > o; )
            se(n, (r = t[o++])) && (~nt(i, r) || i.push(r));
          return i;
        },
        it = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ],
        at = it.concat("length", "prototype"),
        st = {
          f:
            Object.getOwnPropertyNames ||
            function (e) {
              return ot(e, at);
            },
        },
        ct = { f: Object.getOwnPropertySymbols },
        ut =
          Je("Reflect", "ownKeys") ||
          function (e) {
            var t = st.f(fe(e)),
              r = ct.f;
            return r ? t.concat(r(e)) : t;
          },
        lt = function (e, t) {
          for (var r = ut(t), n = me.f, o = he.f, i = 0; i < r.length; i++) {
            var a = r[i];
            se(e, a) || n(e, a, o(t, a));
          }
        },
        pt = /#|\.prototype\./,
        dt = function (e, t) {
          var r = ft[ht(e)];
          return r == mt || (r != yt && ("function" == typeof t ? G(t) : !!t));
        },
        ht = (dt.normalize = function (e) {
          return String(e).replace(pt, ".").toLowerCase();
        }),
        ft = (dt.data = {}),
        yt = (dt.NATIVE = "N"),
        mt = (dt.POLYFILL = "P"),
        bt = dt,
        vt = he.f,
        gt = function (e, t, r) {
          if (
            ((function (e) {
              if ("function" != typeof e)
                throw TypeError(String(e) + " is not a function");
            })(e),
            void 0 === t)
          )
            return e;
          switch (r) {
            case 0:
              return function () {
                return e.call(t);
              };
            case 1:
              return function (r) {
                return e.call(t, r);
              };
            case 2:
              return function (r, n) {
                return e.call(t, r, n);
              };
            case 3:
              return function (r, n, o) {
                return e.call(t, r, n, o);
              };
          }
          return function () {
            return e.apply(t, arguments);
          };
        },
        wt =
          Array.isArray ||
          function (e) {
            return "Array" == X(e);
          },
        Tt = Je("navigator", "userAgent") || "",
        kt = H.process,
        Et = kt && kt.versions,
        St = Et && Et.v8;
      St
        ? (Ke = (We = St.split("."))[0] < 4 ? 1 : We[0] + We[1])
        : Tt &&
          (!(We = Tt.match(/Edge\/(\d+)/)) || We[1] >= 74) &&
          (We = Tt.match(/Chrome\/(\d+)/)) &&
          (Ke = We[1]);
      var xt,
        Pt = Ke && +Ke,
        _t =
          !!Object.getOwnPropertySymbols &&
          !G(function () {
            return !String(Symbol()) || (!Symbol.sham && Pt && Pt < 41);
          }),
        At = _t && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        Rt = Ae("wks"),
        Ot = H.Symbol,
        Ct = At ? Ot : (Ot && Ot.withoutSetter) || Ce,
        It = function (e) {
          return (
            (se(Rt, e) && (_t || "string" == typeof Rt[e])) ||
              (_t && se(Ot, e) ? (Rt[e] = Ot[e]) : (Rt[e] = Ct("Symbol." + e))),
            Rt[e]
          );
        },
        Nt = It("species"),
        Lt = function (e, t) {
          var r;
          return (
            wt(e) &&
              ("function" != typeof (r = e.constructor) ||
              (r !== Array && !wt(r.prototype))
                ? ne(r) && null === (r = r[Nt]) && (r = void 0)
                : (r = void 0)),
            new (void 0 === r ? Array : r)(0 === t ? 0 : t)
          );
        },
        Mt = [].push,
        jt = function (e) {
          var t = 1 == e,
            r = 2 == e,
            n = 3 == e,
            o = 4 == e,
            i = 6 == e,
            a = 7 == e,
            s = 5 == e || i;
          return function (c, u, l, p) {
            for (
              var d,
                h,
                f = ie(c),
                y = ee(f),
                m = gt(u, l, 3),
                b = Ze(y.length),
                v = 0,
                g = p || Lt,
                w = t ? g(c, b) : r || a ? g(c, 0) : void 0;
              b > v;
              v++
            )
              if ((s || v in y) && ((h = m((d = y[v]), v, f)), e))
                if (t) w[v] = h;
                else if (h)
                  switch (e) {
                    case 3:
                      return !0;
                    case 5:
                      return d;
                    case 6:
                      return v;
                    case 2:
                      Mt.call(w, d);
                  }
                else
                  switch (e) {
                    case 4:
                      return !1;
                    case 7:
                      Mt.call(w, d);
                  }
            return i ? -1 : n || o ? o : w;
          };
        },
        Dt = {
          forEach: jt(0),
          map: jt(1),
          filter: jt(2),
          some: jt(3),
          every: jt(4),
          find: jt(5),
          findIndex: jt(6),
          filterOut: jt(7),
        },
        Bt =
          Object.keys ||
          function (e) {
            return ot(e, it);
          },
        Ft = z
          ? Object.defineProperties
          : function (e, t) {
              fe(e);
              for (var r, n = Bt(t), o = n.length, i = 0; o > i; )
                me.f(e, (r = n[i++]), t[r]);
              return e;
            },
        Ut = Je("document", "documentElement"),
        Yt = Ne("IE_PROTO"),
        Wt = function () {},
        Kt = function (e) {
          return "<script>" + e + "</" + "script>";
        },
        Ht = function () {
          try {
            xt = document.domain && new ActiveXObject("htmlfile");
          } catch (error) {}
          Ht = xt
            ? (function (e) {
                e.write(Kt("")), e.close();
                var t = e.parentWindow.Object;
                return (e = null), t;
              })(xt)
            : (function () {
                var e,
                  t = le("iframe");
                return (
                  (t.style.display = "none"),
                  Ut.appendChild(t),
                  (t.src = String("javascript:")),
                  (e = t.contentWindow.document).open(),
                  e.write(Kt("document.F=Object")),
                  e.close(),
                  e.F
                );
              })();
          for (var e = it.length; e--; ) delete Ht.prototype[it[e]];
          return Ht();
        };
      Le[Yt] = !0;
      var Gt =
          Object.create ||
          function (e, t) {
            var r;
            return (
              null !== e
                ? ((Wt.prototype = fe(e)),
                  (r = new Wt()),
                  (Wt.prototype = null),
                  (r[Yt] = e))
                : (r = Ht()),
              void 0 === t ? r : Ft(r, t)
            );
          },
        zt = It("unscopables"),
        qt = Array.prototype;
      void 0 == qt[zt] && me.f(qt, zt, { configurable: !0, value: Gt(null) });
      var Jt,
        Vt,
        $t,
        Qt,
        Xt = Dt.find,
        Zt = "find",
        er = !0;
      Zt in [] &&
        Array(1).find(function () {
          er = !1;
        }),
        (function (e, t) {
          var r,
            n,
            o,
            i,
            a,
            s = e.target,
            c = e.global,
            u = e.stat;
          if ((r = c ? H : u ? H[s] || ve(s, {}) : (H[s] || {}).prototype))
            for (n in t) {
              if (
                ((i = t[n]),
                (o = e.noTargetGet ? (a = vt(r, n)) && a.value : r[n]),
                !bt(c ? n : s + (u ? "." : "#") + n, e.forced) && void 0 !== o)
              ) {
                if (typeof i === typeof o) continue;
                lt(i, o);
              }
              (e.sham || (o && o.sham)) && be(i, "sham", !0), Ge(r, n, i, e);
            }
        })(
          { target: "Array", proto: !0, forced: er },
          {
            find: function (e) {
              return Xt(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        ),
        (Jt = Zt),
        (qt[zt][Jt] = !0);
      var tr,
        rr =
          (function (e) {
            (e.hide = function (e) {
              E(k.HIDE, { target: e });
            }),
              (e.rebuild = function () {
                E(k.REBUILD);
              }),
              (e.show = function (e) {
                E(k.SHOW, { target: e });
              }),
              (e.prototype.globalRebuild = function () {
                this.mount && (this.unbindListener(), this.bindListener());
              }),
              (e.prototype.globalShow = function (e) {
                if (this.mount) {
                  var t = !!(e && e.detail && e.detail.target);
                  this.showTooltip({ currentTarget: t && e.detail.target }, !0);
                }
              }),
              (e.prototype.globalHide = function (e) {
                if (this.mount) {
                  var t = !!(e && e.detail && e.detail.target);
                  this.hideTooltip({ currentTarget: t && e.detail.target }, t);
                }
              });
          })(
            (Vt =
              (function (e) {
                (e.prototype.bindWindowEvents = function (e) {
                  window.removeEventListener(k.HIDE, this.globalHide),
                    window.addEventListener(k.HIDE, this.globalHide, !1),
                    window.removeEventListener(k.REBUILD, this.globalRebuild),
                    window.addEventListener(k.REBUILD, this.globalRebuild, !1),
                    window.removeEventListener(k.SHOW, this.globalShow),
                    window.addEventListener(k.SHOW, this.globalShow, !1),
                    e &&
                      (window.removeEventListener(
                        "resize",
                        this.onWindowResize
                      ),
                      window.addEventListener(
                        "resize",
                        this.onWindowResize,
                        !1
                      ));
                }),
                  (e.prototype.unbindWindowEvents = function () {
                    window.removeEventListener(k.HIDE, this.globalHide),
                      window.removeEventListener(k.REBUILD, this.globalRebuild),
                      window.removeEventListener(k.SHOW, this.globalShow),
                      window.removeEventListener("resize", this.onWindowResize);
                  }),
                  (e.prototype.onWindowResize = function () {
                    this.mount && this.hideTooltip();
                  });
              })(
                (Vt =
                  (function (e) {
                    (e.prototype.isCustomEvent = function (e) {
                      return this.state.event || !!e.getAttribute("data-event");
                    }),
                      (e.prototype.customBindListener = function (e) {
                        var t = this,
                          r = this.state,
                          n = r.event,
                          o = r.eventOff,
                          i = e.getAttribute("data-event") || n,
                          a = e.getAttribute("data-event-off") || o;
                        i.split(" ").forEach(function (r) {
                          e.removeEventListener(r, P.get(e, r));
                          var n = S.bind(t, a);
                          P.set(e, r, n), e.addEventListener(r, n, !1);
                        }),
                          a &&
                            a.split(" ").forEach(function (r) {
                              e.removeEventListener(r, t.hideTooltip),
                                e.addEventListener(r, t.hideTooltip, !1);
                            });
                      }),
                      (e.prototype.customUnbindListener = function (e) {
                        var t = this.state,
                          r = t.event,
                          n = t.eventOff,
                          o = r || e.getAttribute("data-event"),
                          i = n || e.getAttribute("data-event-off");
                        e.removeEventListener(o, P.get(e, r)),
                          i && e.removeEventListener(i, this.hideTooltip);
                      });
                  })(
                    (Vt =
                      (function (e) {
                        e.prototype.isCapture = function (e) {
                          return (
                            (e &&
                              "true" === e.getAttribute("data-iscapture")) ||
                            this.props.isCapture ||
                            !1
                          );
                        };
                      })(
                        (Vt =
                          (function (e) {
                            e.prototype.getEffect = function (e) {
                              return (
                                e.getAttribute("data-effect") ||
                                this.props.effect ||
                                "float"
                              );
                            };
                          })(
                            (Vt =
                              (function (e) {
                                (e.prototype.isBodyMode = function () {
                                  return !!this.props.bodyMode;
                                }),
                                  (e.prototype.bindBodyListener = function (e) {
                                    var t = this,
                                      r = this.state,
                                      n = r.event,
                                      o = r.eventOff,
                                      i = r.possibleCustomEvents,
                                      a = r.possibleCustomEventsOff,
                                      s = R(),
                                      c = A(e, "data-event"),
                                      u = A(e, "data-event-off");
                                    null != n && (c[n] = !0),
                                      null != o && (u[o] = !0),
                                      i.split(" ").forEach(function (e) {
                                        return (c[e] = !0);
                                      }),
                                      a.split(" ").forEach(function (e) {
                                        return (u[e] = !0);
                                      }),
                                      this.unbindBodyListener(s);
                                    var l = (this.bodyModeListeners = {});
                                    for (var p in (null == n &&
                                      ((l.mouseover = _.bind(
                                        this,
                                        this.showTooltip,
                                        {}
                                      )),
                                      (l.mousemove = _.bind(
                                        this,
                                        this.updateTooltip,
                                        { respectEffect: !0 }
                                      )),
                                      (l.mouseout = _.bind(
                                        this,
                                        this.hideTooltip,
                                        {}
                                      ))),
                                    c))
                                      l[p] = _.bind(
                                        this,
                                        function (e) {
                                          var r =
                                            e.currentTarget.getAttribute(
                                              "data-event-off"
                                            ) || o;
                                          S.call(t, r, e);
                                        },
                                        { customEvent: !0 }
                                      );
                                    for (var d in u)
                                      l[d] = _.bind(this, this.hideTooltip, {
                                        customEvent: !0,
                                      });
                                    for (var h in l)
                                      s.addEventListener(h, l[h]);
                                  }),
                                  (e.prototype.unbindBodyListener = function (
                                    e
                                  ) {
                                    e = e || R();
                                    var t = this.bodyModeListeners;
                                    for (var r in t)
                                      e.removeEventListener(r, t[r]);
                                  });
                              })(
                                ((Qt = $t =
                                  (function (e) {
                                    function t(e) {
                                      var r;
                                      return (
                                        (function (e, t) {
                                          if (!(e instanceof t))
                                            throw new TypeError(
                                              "Cannot call a class as a function"
                                            );
                                        })(this, t),
                                        ((r = T(
                                          this,
                                          g(t).call(this, e)
                                        )).state = {
                                          uuid: e.uuid || "t" + d(),
                                          place: e.place || "top",
                                          desiredPlace: e.place || "top",
                                          type: "dark",
                                          effect: "float",
                                          show: !1,
                                          border: !1,
                                          customColors: {},
                                          offset: {},
                                          extraClass: "",
                                          html: !1,
                                          delayHide: 0,
                                          delayShow: 0,
                                          event: e.event || null,
                                          eventOff: e.eventOff || null,
                                          currentEvent: null,
                                          currentTarget: null,
                                          ariaProps: D(e),
                                          isEmptyTip: !1,
                                          disable: !1,
                                          possibleCustomEvents:
                                            e.possibleCustomEvents || "",
                                          possibleCustomEventsOff:
                                            e.possibleCustomEventsOff || "",
                                          originTooltip: null,
                                          isMultiline: !1,
                                        }),
                                        r.bind([
                                          "showTooltip",
                                          "updateTooltip",
                                          "hideTooltip",
                                          "hideTooltipOnScroll",
                                          "getTooltipContent",
                                          "globalRebuild",
                                          "globalShow",
                                          "globalHide",
                                          "onWindowResize",
                                          "mouseOnToolTip",
                                        ]),
                                        (r.mount = !0),
                                        (r.delayShowLoop = null),
                                        (r.delayHideLoop = null),
                                        (r.delayReshow = null),
                                        (r.intervalUpdateContent = null),
                                        r
                                      );
                                    }
                                    return (
                                      (function (e, t) {
                                        if (
                                          "function" !== typeof t &&
                                          null !== t
                                        )
                                          throw new TypeError(
                                            "Super expression must either be null or a function"
                                          );
                                        (e.prototype = Object.create(
                                          t && t.prototype,
                                          {
                                            constructor: {
                                              value: e,
                                              writable: !0,
                                              configurable: !0,
                                            },
                                          }
                                        )),
                                          t && w(e, t);
                                      })(t, e),
                                      f(t, null, [
                                        {
                                          key: "propTypes",
                                          get: function () {
                                            return {
                                              uuid: i().string,
                                              children: i().any,
                                              place: i().string,
                                              type: i().string,
                                              effect: i().string,
                                              offset: i().object,
                                              multiline: i().bool,
                                              border: i().bool,
                                              textColor: i().string,
                                              backgroundColor: i().string,
                                              borderColor: i().string,
                                              arrowColor: i().string,
                                              insecure: i().bool,
                                              class: i().string,
                                              className: i().string,
                                              id: i().string,
                                              html: i().bool,
                                              delayHide: i().number,
                                              delayUpdate: i().number,
                                              delayShow: i().number,
                                              event: i().string,
                                              eventOff: i().string,
                                              isCapture: i().bool,
                                              globalEventOff: i().string,
                                              getContent: i().any,
                                              afterShow: i().func,
                                              afterHide: i().func,
                                              overridePosition: i().func,
                                              disable: i().bool,
                                              scrollHide: i().bool,
                                              resizeHide: i().bool,
                                              wrapper: i().string,
                                              bodyMode: i().bool,
                                              possibleCustomEvents: i().string,
                                              possibleCustomEventsOff:
                                                i().string,
                                              clickable: i().bool,
                                            };
                                          },
                                        },
                                      ]),
                                      f(
                                        t,
                                        [
                                          {
                                            key: "bind",
                                            value: function (e) {
                                              var t = this;
                                              e.forEach(function (e) {
                                                t[e] = t[e].bind(t);
                                              });
                                            },
                                          },
                                          {
                                            key: "componentDidMount",
                                            value: function () {
                                              var e = this.props,
                                                t = (e.insecure, e.resizeHide);
                                              this.bindListener(),
                                                this.bindWindowEvents(t),
                                                this.injectStyles();
                                            },
                                          },
                                          {
                                            key: "componentWillUnmount",
                                            value: function () {
                                              (this.mount = !1),
                                                this.clearTimer(),
                                                this.unbindListener(),
                                                this.removeScrollListener(
                                                  this.state.currentTarget
                                                ),
                                                this.unbindWindowEvents();
                                            },
                                          },
                                          {
                                            key: "injectStyles",
                                            value: function () {
                                              var e = this.tooltipRef;
                                              if (e) {
                                                for (
                                                  var t, r = e.parentNode;
                                                  r.parentNode;

                                                )
                                                  r = r.parentNode;
                                                switch (r.constructor.name) {
                                                  case "Document":
                                                  case "HTMLDocument":
                                                  case void 0:
                                                    t = r.head;
                                                    break;
                                                  case "ShadowRoot":
                                                  default:
                                                    t = r;
                                                }
                                                if (
                                                  !t.querySelector(
                                                    "style[data-react-tooltip]"
                                                  )
                                                ) {
                                                  var n =
                                                    document.createElement(
                                                      "style"
                                                    );
                                                  (n.textContent =
                                                    '.__react_component_tooltip {\n  border-radius: 3px;\n  display: inline-block;\n  font-size: 13px;\n  left: -999em;\n  opacity: 0;\n  padding: 8px 21px;\n  position: fixed;\n  pointer-events: none;\n  transition: opacity 0.3s ease-out;\n  top: -999em;\n  visibility: hidden;\n  z-index: 999;\n}\n.__react_component_tooltip.allow_hover, .__react_component_tooltip.allow_click {\n  pointer-events: auto;\n}\n.__react_component_tooltip::before, .__react_component_tooltip::after {\n  content: "";\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.__react_component_tooltip.show {\n  opacity: 0.9;\n  margin-top: 0;\n  margin-left: 0;\n  visibility: visible;\n}\n.__react_component_tooltip.place-top::before {\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  bottom: -8px;\n  left: 50%;\n  margin-left: -10px;\n}\n.__react_component_tooltip.place-bottom::before {\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  top: -8px;\n  left: 50%;\n  margin-left: -10px;\n}\n.__react_component_tooltip.place-left::before {\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  right: -8px;\n  top: 50%;\n  margin-top: -5px;\n}\n.__react_component_tooltip.place-right::before {\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  left: -8px;\n  top: 50%;\n  margin-top: -5px;\n}\n.__react_component_tooltip .multi-line {\n  display: block;\n  padding: 2px 0;\n  text-align: center;\n}'),
                                                    n.setAttribute(
                                                      "data-react-tooltip",
                                                      "true"
                                                    ),
                                                    t.appendChild(n);
                                                }
                                              }
                                            },
                                          },
                                          {
                                            key: "mouseOnToolTip",
                                            value: function () {
                                              return (
                                                !(
                                                  !this.state.show ||
                                                  !this.tooltipRef
                                                ) &&
                                                (this.tooltipRef.matches ||
                                                  (this.tooltipRef
                                                    .msMatchesSelector
                                                    ? (this.tooltipRef.matches =
                                                        this.tooltipRef.msMatchesSelector)
                                                    : (this.tooltipRef.matches =
                                                        this.tooltipRef.mozMatchesSelector)),
                                                this.tooltipRef.matches(
                                                  ":hover"
                                                ))
                                              );
                                            },
                                          },
                                          {
                                            key: "getTargetArray",
                                            value: function (e) {
                                              var t,
                                                r = [];
                                              if (e) {
                                                var n = e
                                                  .replace(/\\/g, "\\\\")
                                                  .replace(/"/g, '\\"');
                                                t =
                                                  '[data-tip][data-for="'.concat(
                                                    n,
                                                    '"]'
                                                  );
                                              } else
                                                t =
                                                  "[data-tip]:not([data-for])";
                                              return (
                                                B(
                                                  document.getElementsByTagName(
                                                    "*"
                                                  )
                                                )
                                                  .filter(function (e) {
                                                    return e.shadowRoot;
                                                  })
                                                  .forEach(function (e) {
                                                    r = r.concat(
                                                      B(
                                                        e.shadowRoot.querySelectorAll(
                                                          t
                                                        )
                                                      )
                                                    );
                                                  }),
                                                r.concat(
                                                  B(
                                                    document.querySelectorAll(t)
                                                  )
                                                )
                                              );
                                            },
                                          },
                                          {
                                            key: "bindListener",
                                            value: function () {
                                              var e = this,
                                                t = this.props,
                                                r = t.id,
                                                n = t.globalEventOff,
                                                o = t.isCapture,
                                                i = this.getTargetArray(r);
                                              i.forEach(function (t) {
                                                null ===
                                                  t.getAttribute(
                                                    "currentItem"
                                                  ) &&
                                                  t.setAttribute(
                                                    "currentItem",
                                                    "false"
                                                  ),
                                                  e.unbindBasicListener(t),
                                                  e.isCustomEvent(t) &&
                                                    e.customUnbindListener(t);
                                              }),
                                                this.isBodyMode()
                                                  ? this.bindBodyListener(i)
                                                  : i.forEach(function (t) {
                                                      var r = e.isCapture(t),
                                                        n = e.getEffect(t);
                                                      e.isCustomEvent(t)
                                                        ? e.customBindListener(
                                                            t
                                                          )
                                                        : (t.addEventListener(
                                                            "mouseenter",
                                                            e.showTooltip,
                                                            r
                                                          ),
                                                          t.addEventListener(
                                                            "focus",
                                                            e.showTooltip,
                                                            r
                                                          ),
                                                          "float" === n &&
                                                            t.addEventListener(
                                                              "mousemove",
                                                              e.updateTooltip,
                                                              r
                                                            ),
                                                          t.addEventListener(
                                                            "mouseleave",
                                                            e.hideTooltip,
                                                            r
                                                          ),
                                                          t.addEventListener(
                                                            "blur",
                                                            e.hideTooltip,
                                                            r
                                                          ));
                                                    }),
                                                n &&
                                                  (window.removeEventListener(
                                                    n,
                                                    this.hideTooltip
                                                  ),
                                                  window.addEventListener(
                                                    n,
                                                    this.hideTooltip,
                                                    o
                                                  )),
                                                this.bindRemovalTracker();
                                            },
                                          },
                                          {
                                            key: "unbindListener",
                                            value: function () {
                                              var e = this,
                                                t = this.props,
                                                r = t.id,
                                                n = t.globalEventOff;
                                              this.isBodyMode()
                                                ? this.unbindBodyListener()
                                                : this.getTargetArray(
                                                    r
                                                  ).forEach(function (t) {
                                                    e.unbindBasicListener(t),
                                                      e.isCustomEvent(t) &&
                                                        e.customUnbindListener(
                                                          t
                                                        );
                                                  }),
                                                n &&
                                                  window.removeEventListener(
                                                    n,
                                                    this.hideTooltip
                                                  ),
                                                this.unbindRemovalTracker();
                                            },
                                          },
                                          {
                                            key: "unbindBasicListener",
                                            value: function (e) {
                                              var t = this.isCapture(e);
                                              e.removeEventListener(
                                                "mouseenter",
                                                this.showTooltip,
                                                t
                                              ),
                                                e.removeEventListener(
                                                  "mousemove",
                                                  this.updateTooltip,
                                                  t
                                                ),
                                                e.removeEventListener(
                                                  "mouseleave",
                                                  this.hideTooltip,
                                                  t
                                                );
                                            },
                                          },
                                          {
                                            key: "getTooltipContent",
                                            value: function () {
                                              var e,
                                                t = this.props,
                                                r = t.getContent,
                                                n = t.children;
                                              return (
                                                r &&
                                                  (e = Array.isArray(r)
                                                    ? r[0] &&
                                                      r[0](
                                                        this.state.originTooltip
                                                      )
                                                    : r(
                                                        this.state.originTooltip
                                                      )),
                                                j(
                                                  this.state.originTooltip,
                                                  n,
                                                  e,
                                                  this.state.isMultiline
                                                )
                                              );
                                            },
                                          },
                                          {
                                            key: "isEmptyTip",
                                            value: function (e) {
                                              return (
                                                ("string" === typeof e &&
                                                  "" === e) ||
                                                null === e
                                              );
                                            },
                                          },
                                          {
                                            key: "showTooltip",
                                            value: function (e, t) {
                                              if (this.tooltipRef) {
                                                if (
                                                  t &&
                                                  !this.getTargetArray(
                                                    this.props.id
                                                  ).some(function (t) {
                                                    return (
                                                      t === e.currentTarget
                                                    );
                                                  })
                                                )
                                                  return;
                                                var r = this.props,
                                                  n = r.multiline,
                                                  o = r.getContent,
                                                  i =
                                                    e.currentTarget.getAttribute(
                                                      "data-tip"
                                                    ),
                                                  a =
                                                    e.currentTarget.getAttribute(
                                                      "data-multiline"
                                                    ) ||
                                                    n ||
                                                    !1,
                                                  s =
                                                    e instanceof
                                                      window.FocusEvent || t,
                                                  c = !0;
                                                e.currentTarget.getAttribute(
                                                  "data-scroll-hide"
                                                )
                                                  ? (c =
                                                      "true" ===
                                                      e.currentTarget.getAttribute(
                                                        "data-scroll-hide"
                                                      ))
                                                  : null !=
                                                      this.props.scrollHide &&
                                                    (c = this.props.scrollHide),
                                                  e &&
                                                    e.currentTarget &&
                                                    e.currentTarget
                                                      .setAttribute &&
                                                    e.currentTarget.setAttribute(
                                                      "aria-describedby",
                                                      this.state.uuid
                                                    );
                                                var u =
                                                    e.currentTarget.getAttribute(
                                                      "data-place"
                                                    ) ||
                                                    this.props.place ||
                                                    "top",
                                                  l = s
                                                    ? "solid"
                                                    : this.getEffect(
                                                        e.currentTarget
                                                      ),
                                                  p =
                                                    e.currentTarget.getAttribute(
                                                      "data-offset"
                                                    ) ||
                                                    this.props.offset ||
                                                    {},
                                                  d = O(
                                                    e,
                                                    e.currentTarget,
                                                    this.tooltipRef,
                                                    u,
                                                    u,
                                                    l,
                                                    p
                                                  );
                                                d.position &&
                                                  this.props.overridePosition &&
                                                  (d.position =
                                                    this.props.overridePosition(
                                                      d.position,
                                                      e,
                                                      e.currentTarget,
                                                      this.tooltipRef,
                                                      u,
                                                      u,
                                                      l,
                                                      p
                                                    ));
                                                var h = d.isNewState
                                                  ? d.newState.place
                                                  : u;
                                                this.clearTimer();
                                                var f = e.currentTarget,
                                                  y = this.state.show
                                                    ? f.getAttribute(
                                                        "data-delay-update"
                                                      ) ||
                                                      this.props.delayUpdate
                                                    : 0,
                                                  m = this,
                                                  b = function () {
                                                    m.setState(
                                                      {
                                                        originTooltip: i,
                                                        isMultiline: a,
                                                        desiredPlace: u,
                                                        place: h,
                                                        type:
                                                          f.getAttribute(
                                                            "data-type"
                                                          ) ||
                                                          m.props.type ||
                                                          "dark",
                                                        customColors: {
                                                          text:
                                                            f.getAttribute(
                                                              "data-text-color"
                                                            ) ||
                                                            m.props.textColor ||
                                                            null,
                                                          background:
                                                            f.getAttribute(
                                                              "data-background-color"
                                                            ) ||
                                                            m.props
                                                              .backgroundColor ||
                                                            null,
                                                          border:
                                                            f.getAttribute(
                                                              "data-border-color"
                                                            ) ||
                                                            m.props
                                                              .borderColor ||
                                                            null,
                                                          arrow:
                                                            f.getAttribute(
                                                              "data-arrow-color"
                                                            ) ||
                                                            m.props
                                                              .arrowColor ||
                                                            null,
                                                        },
                                                        effect: l,
                                                        offset: p,
                                                        html:
                                                          (f.getAttribute(
                                                            "data-html"
                                                          )
                                                            ? "true" ===
                                                              f.getAttribute(
                                                                "data-html"
                                                              )
                                                            : m.props.html) ||
                                                          !1,
                                                        delayShow:
                                                          f.getAttribute(
                                                            "data-delay-show"
                                                          ) ||
                                                          m.props.delayShow ||
                                                          0,
                                                        delayHide:
                                                          f.getAttribute(
                                                            "data-delay-hide"
                                                          ) ||
                                                          m.props.delayHide ||
                                                          0,
                                                        delayUpdate:
                                                          f.getAttribute(
                                                            "data-delay-update"
                                                          ) ||
                                                          m.props.delayUpdate ||
                                                          0,
                                                        border:
                                                          (f.getAttribute(
                                                            "data-border"
                                                          )
                                                            ? "true" ===
                                                              f.getAttribute(
                                                                "data-border"
                                                              )
                                                            : m.props.border) ||
                                                          !1,
                                                        extraClass:
                                                          f.getAttribute(
                                                            "data-class"
                                                          ) ||
                                                          m.props.class ||
                                                          m.props.className ||
                                                          "",
                                                        disable:
                                                          (f.getAttribute(
                                                            "data-tip-disable"
                                                          )
                                                            ? "true" ===
                                                              f.getAttribute(
                                                                "data-tip-disable"
                                                              )
                                                            : m.props
                                                                .disable) || !1,
                                                        currentTarget: f,
                                                      },
                                                      function () {
                                                        c &&
                                                          m.addScrollListener(
                                                            m.state
                                                              .currentTarget
                                                          ),
                                                          m.updateTooltip(e),
                                                          o &&
                                                            Array.isArray(o) &&
                                                            (m.intervalUpdateContent =
                                                              setInterval(
                                                                function () {
                                                                  if (m.mount) {
                                                                    var e =
                                                                        m.props
                                                                          .getContent,
                                                                      t = j(
                                                                        i,
                                                                        "",
                                                                        e[0](),
                                                                        a
                                                                      ),
                                                                      r =
                                                                        m.isEmptyTip(
                                                                          t
                                                                        );
                                                                    m.setState({
                                                                      isEmptyTip:
                                                                        r,
                                                                    }),
                                                                      m.updatePosition();
                                                                  }
                                                                },
                                                                o[1]
                                                              ));
                                                      }
                                                    );
                                                  };
                                                y
                                                  ? (this.delayReshow =
                                                      setTimeout(b, y))
                                                  : b();
                                              }
                                            },
                                          },
                                          {
                                            key: "updateTooltip",
                                            value: function (e) {
                                              var t = this,
                                                r = this.state,
                                                n = r.delayShow,
                                                o = r.disable,
                                                i = this.props.afterShow,
                                                a = this.getTooltipContent(),
                                                s = e.currentTarget || e.target;
                                              if (
                                                !this.mouseOnToolTip() &&
                                                !this.isEmptyTip(a) &&
                                                !o
                                              ) {
                                                var c = this.state.show
                                                    ? 0
                                                    : parseInt(n, 10),
                                                  u = function () {
                                                    if (
                                                      (Array.isArray(a) &&
                                                        a.length > 0) ||
                                                      a
                                                    ) {
                                                      var r = !t.state.show;
                                                      t.setState(
                                                        {
                                                          currentEvent: e,
                                                          currentTarget: s,
                                                          show: !0,
                                                        },
                                                        function () {
                                                          t.updatePosition(),
                                                            r && i && i(e);
                                                        }
                                                      );
                                                    }
                                                  };
                                                clearTimeout(
                                                  this.delayShowLoop
                                                ),
                                                  c
                                                    ? (this.delayShowLoop =
                                                        setTimeout(u, c))
                                                    : u();
                                              }
                                            },
                                          },
                                          {
                                            key: "listenForTooltipExit",
                                            value: function () {
                                              this.state.show &&
                                                this.tooltipRef &&
                                                this.tooltipRef.addEventListener(
                                                  "mouseleave",
                                                  this.hideTooltip
                                                );
                                            },
                                          },
                                          {
                                            key: "removeListenerForTooltipExit",
                                            value: function () {
                                              this.state.show &&
                                                this.tooltipRef &&
                                                this.tooltipRef.removeEventListener(
                                                  "mouseleave",
                                                  this.hideTooltip
                                                );
                                            },
                                          },
                                          {
                                            key: "hideTooltip",
                                            value: function (e, t) {
                                              var r = this,
                                                n =
                                                  arguments.length > 2 &&
                                                  void 0 !== arguments[2]
                                                    ? arguments[2]
                                                    : { isScroll: !1 },
                                                o = this.state.disable,
                                                i = n.isScroll,
                                                a = i
                                                  ? 0
                                                  : this.state.delayHide,
                                                s = this.props.afterHide,
                                                c = this.getTooltipContent();
                                              if (
                                                this.mount &&
                                                !this.isEmptyTip(c) &&
                                                !o
                                              ) {
                                                if (t) {
                                                  var u = this.getTargetArray(
                                                      this.props.id
                                                    ),
                                                    l = u.some(function (t) {
                                                      return (
                                                        t === e.currentTarget
                                                      );
                                                    });
                                                  if (!l || !this.state.show)
                                                    return;
                                                }
                                                e &&
                                                  e.currentTarget &&
                                                  e.currentTarget
                                                    .removeAttribute &&
                                                  e.currentTarget.removeAttribute(
                                                    "aria-describedby"
                                                  );
                                                var p = function () {
                                                  var t = r.state.show;
                                                  r.mouseOnToolTip()
                                                    ? r.listenForTooltipExit()
                                                    : (r.removeListenerForTooltipExit(),
                                                      r.setState(
                                                        { show: !1 },
                                                        function () {
                                                          r.removeScrollListener(
                                                            r.state
                                                              .currentTarget
                                                          ),
                                                            t && s && s(e);
                                                        }
                                                      ));
                                                };
                                                this.clearTimer(),
                                                  a
                                                    ? (this.delayHideLoop =
                                                        setTimeout(
                                                          p,
                                                          parseInt(a, 10)
                                                        ))
                                                    : p();
                                              }
                                            },
                                          },
                                          {
                                            key: "hideTooltipOnScroll",
                                            value: function (e, t) {
                                              this.hideTooltip(e, t, {
                                                isScroll: !0,
                                              });
                                            },
                                          },
                                          {
                                            key: "addScrollListener",
                                            value: function (e) {
                                              var t = this.isCapture(e);
                                              window.addEventListener(
                                                "scroll",
                                                this.hideTooltipOnScroll,
                                                t
                                              );
                                            },
                                          },
                                          {
                                            key: "removeScrollListener",
                                            value: function (e) {
                                              var t = this.isCapture(e);
                                              window.removeEventListener(
                                                "scroll",
                                                this.hideTooltipOnScroll,
                                                t
                                              );
                                            },
                                          },
                                          {
                                            key: "updatePosition",
                                            value: function () {
                                              var e = this,
                                                t = this.state,
                                                r = t.currentEvent,
                                                n = t.currentTarget,
                                                o = t.place,
                                                i = t.desiredPlace,
                                                a = t.effect,
                                                s = t.offset,
                                                c = this.tooltipRef,
                                                u = O(r, n, c, o, i, a, s);
                                              if (
                                                (u.position &&
                                                  this.props.overridePosition &&
                                                  (u.position =
                                                    this.props.overridePosition(
                                                      u.position,
                                                      r,
                                                      n,
                                                      c,
                                                      o,
                                                      i,
                                                      a,
                                                      s
                                                    )),
                                                u.isNewState)
                                              )
                                                return this.setState(
                                                  u.newState,
                                                  function () {
                                                    e.updatePosition();
                                                  }
                                                );
                                              (c.style.left =
                                                u.position.left + "px"),
                                                (c.style.top =
                                                  u.position.top + "px");
                                            },
                                          },
                                          {
                                            key: "clearTimer",
                                            value: function () {
                                              clearTimeout(this.delayShowLoop),
                                                clearTimeout(
                                                  this.delayHideLoop
                                                ),
                                                clearTimeout(this.delayReshow),
                                                clearInterval(
                                                  this.intervalUpdateContent
                                                );
                                            },
                                          },
                                          {
                                            key: "hasCustomColors",
                                            value: function () {
                                              var e = this;
                                              return Boolean(
                                                Object.keys(
                                                  this.state.customColors
                                                ).find(function (t) {
                                                  return (
                                                    "border" !== t &&
                                                    e.state.customColors[t]
                                                  );
                                                }) ||
                                                  (this.state.border &&
                                                    this.state.customColors
                                                      .border)
                                              );
                                            },
                                          },
                                          {
                                            key: "render",
                                            value: function () {
                                              var e = this,
                                                r = this.state,
                                                o = r.extraClass,
                                                i = r.html,
                                                a = r.ariaProps,
                                                s = r.disable,
                                                c = r.uuid,
                                                u = this.getTooltipContent(),
                                                l = this.isEmptyTip(u),
                                                p = U(
                                                  this.state.uuid,
                                                  this.state.customColors,
                                                  this.state.type,
                                                  this.state.border
                                                ),
                                                d =
                                                  "__react_component_tooltip" +
                                                  " ".concat(this.state.uuid) +
                                                  (!this.state.show || s || l
                                                    ? ""
                                                    : " show") +
                                                  (this.state.border
                                                    ? " border"
                                                    : "") +
                                                  " place-".concat(
                                                    this.state.place
                                                  ) +
                                                  " type-".concat(
                                                    this.hasCustomColors()
                                                      ? "custom"
                                                      : this.state.type
                                                  ) +
                                                  (this.props.delayUpdate
                                                    ? " allow_hover"
                                                    : "") +
                                                  (this.props.clickable
                                                    ? " allow_click"
                                                    : ""),
                                                h = this.props.wrapper;
                                              t.supportedWrappers.indexOf(h) <
                                                0 &&
                                                (h = t.defaultProps.wrapper);
                                              var f = [d, o]
                                                .filter(Boolean)
                                                .join(" ");
                                              if (i) {
                                                var y = ""
                                                  .concat(
                                                    u,
                                                    '\n<style aria-hidden="true">'
                                                  )
                                                  .concat(p, "</style>");
                                                return n.createElement(
                                                  h,
                                                  m(
                                                    {
                                                      className: "".concat(f),
                                                      id: this.props.id || c,
                                                      ref: function (t) {
                                                        return (e.tooltipRef =
                                                          t);
                                                      },
                                                    },
                                                    a,
                                                    {
                                                      "data-id": "tooltip",
                                                      dangerouslySetInnerHTML: {
                                                        __html: y,
                                                      },
                                                    }
                                                  )
                                                );
                                              }
                                              return n.createElement(
                                                h,
                                                m(
                                                  {
                                                    className: "".concat(f),
                                                    id: this.props.id || c,
                                                  },
                                                  a,
                                                  {
                                                    ref: function (t) {
                                                      return (e.tooltipRef = t);
                                                    },
                                                    "data-id": "tooltip",
                                                  }
                                                ),
                                                n.createElement("style", {
                                                  dangerouslySetInnerHTML: {
                                                    __html: p,
                                                  },
                                                  "aria-hidden": "true",
                                                }),
                                                u
                                              );
                                            },
                                          },
                                        ],
                                        [
                                          {
                                            key: "getDerivedStateFromProps",
                                            value: function (e, t) {
                                              var r = t.ariaProps,
                                                n = D(e);
                                              return Object.keys(n).some(
                                                function (e) {
                                                  return n[e] !== r[e];
                                                }
                                              )
                                                ? v({}, t, { ariaProps: n })
                                                : null;
                                            },
                                          },
                                        ]
                                      ),
                                      t
                                    );
                                  })(n.Component)),
                                y($t, "defaultProps", {
                                  insecure: !0,
                                  resizeHide: !0,
                                  wrapper: "div",
                                  clickable: !1,
                                }),
                                y($t, "supportedWrappers", ["div", "span"]),
                                y($t, "displayName", "ReactTooltip"),
                                ((tr = Vt = Qt).prototype.bindRemovalTracker =
                                  function () {
                                    var e = this,
                                      t =
                                        window.MutationObserver ||
                                        window.WebKitMutationObserver ||
                                        window.MozMutationObserver;
                                    if (null != t) {
                                      var r = new t(function (t) {
                                        for (var r = 0; r < t.length; r++)
                                          for (
                                            var n = t[r], o = 0;
                                            o < n.removedNodes.length;
                                            o++
                                          )
                                            if (
                                              n.removedNodes[o] ===
                                              e.state.currentTarget
                                            )
                                              return void e.hideTooltip();
                                      });
                                      r.observe(window.document, {
                                        childList: !0,
                                        subtree: !0,
                                      }),
                                        (this.removalTracker = r);
                                    }
                                  }),
                                (Vt =
                                  void (tr.prototype.unbindRemovalTracker =
                                    function () {
                                      this.removalTracker &&
                                        (this.removalTracker.disconnect(),
                                        (this.removalTracker = null));
                                    }) || Vt))
                              ) || Vt)
                          ) || Vt)
                      ) || Vt)
                  ) || Vt)
              ) || Vt)
          ) || Vt;
    },
  },
]);
