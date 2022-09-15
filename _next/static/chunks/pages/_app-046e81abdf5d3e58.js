(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    30242: function (t, e, r) {
      var n = {
        "./en/common": [40464, 464],
        "./en/common.json": [40464, 464],
        "./jp/common": [59650, 650],
        "./jp/common.json": [59650, 650],
      };
      function i(t) {
        if (!r.o(n, t))
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + t + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          });
        var e = n[t],
          i = e[0];
        return r.e(e[1]).then(function () {
          return r.t(i, 19);
        });
      }
      (i.keys = function () {
        return Object.keys(n);
      }),
        (i.id = 30242),
        (t.exports = i);
    },
    9133: function (t, e, r) {
      "use strict";
      r.d(e, {
        Sg: function () {
          return u;
        },
        zt: function () {
          return c;
        },
      });
      var n = r(93442),
        i = r(98690),
        o = r(87898);
      var s = function (t, e, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(t) {
            try {
              u(n.next(t));
            } catch (e) {
              o(e);
            }
          }
          function a(t) {
            try {
              u(n.throw(t));
            } catch (e) {
              o(e);
            }
          }
          function u(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })).then(s, a);
          }
          u((n = n.apply(t, e || [])).next());
        });
      };
      const a = new o.Yd("abstract-provider/5.7.0");
      class u extends i.dk {
        static isForkEvent(t) {
          return !(!t || !t._isForkEvent);
        }
      }
      class c {
        constructor() {
          a.checkAbstract(new.target, c), (0, i.zG)(this, "_isProvider", !0);
        }
        getFeeData() {
          return s(this, void 0, void 0, function* () {
            const { block: t, gasPrice: e } = yield (0, i.mE)({
              block: this.getBlock("latest"),
              gasPrice: this.getGasPrice().catch((t) => null),
            });
            let r = null,
              o = null,
              s = null;
            return (
              t &&
                t.baseFeePerGas &&
                ((r = t.baseFeePerGas),
                (s = n.O$.from("1500000000")),
                (o = t.baseFeePerGas.mul(2).add(s))),
              {
                lastBaseFeePerGas: r,
                maxFeePerGas: o,
                maxPriorityFeePerGas: s,
                gasPrice: e,
              }
            );
          });
        }
        addListener(t, e) {
          return this.on(t, e);
        }
        removeListener(t, e) {
          return this.off(t, e);
        }
        static isProvider(t) {
          return !(!t || !t._isProvider);
        }
      }
    },
    48986: function (t, e, r) {
      "use strict";
      r.d(e, {
        E: function () {
          return c;
        },
        b: function () {
          return l;
        },
      });
      var n = r(98690),
        i = r(87898);
      var o = function (t, e, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(t) {
            try {
              u(n.next(t));
            } catch (e) {
              o(e);
            }
          }
          function a(t) {
            try {
              u(n.throw(t));
            } catch (e) {
              o(e);
            }
          }
          function u(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })).then(s, a);
          }
          u((n = n.apply(t, e || [])).next());
        });
      };
      const s = new i.Yd("abstract-signer/5.7.0"),
        a = [
          "accessList",
          "ccipReadEnabled",
          "chainId",
          "customData",
          "data",
          "from",
          "gasLimit",
          "gasPrice",
          "maxFeePerGas",
          "maxPriorityFeePerGas",
          "nonce",
          "to",
          "type",
          "value",
        ],
        u = [
          i.Yd.errors.INSUFFICIENT_FUNDS,
          i.Yd.errors.NONCE_EXPIRED,
          i.Yd.errors.REPLACEMENT_UNDERPRICED,
        ];
      class c {
        constructor() {
          s.checkAbstract(new.target, c), (0, n.zG)(this, "_isSigner", !0);
        }
        getBalance(t) {
          return o(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getBalance"),
              yield this.provider.getBalance(this.getAddress(), t)
            );
          });
        }
        getTransactionCount(t) {
          return o(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getTransactionCount"),
              yield this.provider.getTransactionCount(this.getAddress(), t)
            );
          });
        }
        estimateGas(t) {
          return o(this, void 0, void 0, function* () {
            this._checkProvider("estimateGas");
            const e = yield (0, n.mE)(this.checkTransaction(t));
            return yield this.provider.estimateGas(e);
          });
        }
        call(t, e) {
          return o(this, void 0, void 0, function* () {
            this._checkProvider("call");
            const r = yield (0, n.mE)(this.checkTransaction(t));
            return yield this.provider.call(r, e);
          });
        }
        sendTransaction(t) {
          return o(this, void 0, void 0, function* () {
            this._checkProvider("sendTransaction");
            const e = yield this.populateTransaction(t),
              r = yield this.signTransaction(e);
            return yield this.provider.sendTransaction(r);
          });
        }
        getChainId() {
          return o(this, void 0, void 0, function* () {
            this._checkProvider("getChainId");
            return (yield this.provider.getNetwork()).chainId;
          });
        }
        getGasPrice() {
          return o(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getGasPrice"),
              yield this.provider.getGasPrice()
            );
          });
        }
        getFeeData() {
          return o(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getFeeData"),
              yield this.provider.getFeeData()
            );
          });
        }
        resolveName(t) {
          return o(this, void 0, void 0, function* () {
            return (
              this._checkProvider("resolveName"),
              yield this.provider.resolveName(t)
            );
          });
        }
        checkTransaction(t) {
          for (const r in t)
            -1 === a.indexOf(r) &&
              s.throwArgumentError(
                "invalid transaction key: " + r,
                "transaction",
                t
              );
          const e = (0, n.DC)(t);
          return (
            null == e.from
              ? (e.from = this.getAddress())
              : (e.from = Promise.all([
                  Promise.resolve(e.from),
                  this.getAddress(),
                ]).then(
                  (e) => (
                    e[0].toLowerCase() !== e[1].toLowerCase() &&
                      s.throwArgumentError(
                        "from address mismatch",
                        "transaction",
                        t
                      ),
                    e[0]
                  )
                )),
            e
          );
        }
        populateTransaction(t) {
          return o(this, void 0, void 0, function* () {
            const e = yield (0, n.mE)(this.checkTransaction(t));
            null != e.to &&
              ((e.to = Promise.resolve(e.to).then((t) =>
                o(this, void 0, void 0, function* () {
                  if (null == t) return null;
                  const e = yield this.resolveName(t);
                  return (
                    null == e &&
                      s.throwArgumentError(
                        "provided ENS name resolves to null",
                        "tx.to",
                        t
                      ),
                    e
                  );
                })
              )),
              e.to.catch((t) => {}));
            const r = null != e.maxFeePerGas || null != e.maxPriorityFeePerGas;
            if (
              (null == e.gasPrice || (2 !== e.type && !r)
                ? (0 !== e.type && 1 !== e.type) ||
                  !r ||
                  s.throwArgumentError(
                    "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas",
                    "transaction",
                    t
                  )
                : s.throwArgumentError(
                    "eip-1559 transaction do not support gasPrice",
                    "transaction",
                    t
                  ),
              (2 !== e.type && null != e.type) ||
                null == e.maxFeePerGas ||
                null == e.maxPriorityFeePerGas)
            )
              if (0 === e.type || 1 === e.type)
                null == e.gasPrice && (e.gasPrice = this.getGasPrice());
              else {
                const t = yield this.getFeeData();
                if (null == e.type)
                  if (null != t.maxFeePerGas && null != t.maxPriorityFeePerGas)
                    if (((e.type = 2), null != e.gasPrice)) {
                      const t = e.gasPrice;
                      delete e.gasPrice,
                        (e.maxFeePerGas = t),
                        (e.maxPriorityFeePerGas = t);
                    } else
                      null == e.maxFeePerGas &&
                        (e.maxFeePerGas = t.maxFeePerGas),
                        null == e.maxPriorityFeePerGas &&
                          (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas);
                  else
                    null != t.gasPrice
                      ? (r &&
                          s.throwError(
                            "network does not support EIP-1559",
                            i.Yd.errors.UNSUPPORTED_OPERATION,
                            { operation: "populateTransaction" }
                          ),
                        null == e.gasPrice && (e.gasPrice = t.gasPrice),
                        (e.type = 0))
                      : s.throwError(
                          "failed to get consistent fee data",
                          i.Yd.errors.UNSUPPORTED_OPERATION,
                          { operation: "signer.getFeeData" }
                        );
                else
                  2 === e.type &&
                    (null == e.maxFeePerGas &&
                      (e.maxFeePerGas = t.maxFeePerGas),
                    null == e.maxPriorityFeePerGas &&
                      (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas));
              }
            else e.type = 2;
            return (
              null == e.nonce &&
                (e.nonce = this.getTransactionCount("pending")),
              null == e.gasLimit &&
                (e.gasLimit = this.estimateGas(e).catch((t) => {
                  if (u.indexOf(t.code) >= 0) throw t;
                  return s.throwError(
                    "cannot estimate gas; transaction may fail or may require manual gas limit",
                    i.Yd.errors.UNPREDICTABLE_GAS_LIMIT,
                    { error: t, tx: e }
                  );
                })),
              null == e.chainId
                ? (e.chainId = this.getChainId())
                : (e.chainId = Promise.all([
                    Promise.resolve(e.chainId),
                    this.getChainId(),
                  ]).then(
                    (e) => (
                      0 !== e[1] &&
                        e[0] !== e[1] &&
                        s.throwArgumentError(
                          "chainId address mismatch",
                          "transaction",
                          t
                        ),
                      e[0]
                    )
                  )),
              yield (0, n.mE)(e)
            );
          });
        }
        _checkProvider(t) {
          this.provider ||
            s.throwError(
              "missing provider",
              i.Yd.errors.UNSUPPORTED_OPERATION,
              { operation: t || "_checkProvider" }
            );
        }
        static isSigner(t) {
          return !(!t || !t._isSigner);
        }
      }
      class l extends c {
        constructor(t, e) {
          super(),
            (0, n.zG)(this, "address", t),
            (0, n.zG)(this, "provider", e || null);
        }
        getAddress() {
          return Promise.resolve(this.address);
        }
        _fail(t, e) {
          return Promise.resolve().then(() => {
            s.throwError(t, i.Yd.errors.UNSUPPORTED_OPERATION, {
              operation: e,
            });
          });
        }
        signMessage(t) {
          return this._fail("VoidSigner cannot sign messages", "signMessage");
        }
        signTransaction(t) {
          return this._fail(
            "VoidSigner cannot sign transactions",
            "signTransaction"
          );
        }
        _signTypedData(t, e, r) {
          return this._fail(
            "VoidSigner cannot sign typed data",
            "signTypedData"
          );
        }
        connect(t) {
          return new l(this.address, t);
        }
      }
    },
    91426: function (t, e, r) {
      "use strict";
      r.d(e, {
        Kn: function () {
          return d;
        },
        CR: function () {
          return g;
        },
        hB: function () {
          return v;
        },
        vU: function () {
          return m;
        },
        UJ: function () {
          return p;
        },
      });
      var n = r(25689),
        i = r(93442),
        o = r(82119),
        s = r(83239);
      const a = new (r(87898).Yd)("address/5.7.0");
      function u(t) {
        (0, n.A7)(t, 20) ||
          a.throwArgumentError("invalid address", "address", t);
        const e = (t = t.toLowerCase()).substring(2).split(""),
          r = new Uint8Array(40);
        for (let n = 0; n < 40; n++) r[n] = e[n].charCodeAt(0);
        const i = (0, n.lE)((0, o.w)(r));
        for (let n = 0; n < 40; n += 2)
          i[n >> 1] >> 4 >= 8 && (e[n] = e[n].toUpperCase()),
            (15 & i[n >> 1]) >= 8 && (e[n + 1] = e[n + 1].toUpperCase());
        return "0x" + e.join("");
      }
      const c = {};
      for (let y = 0; y < 10; y++) c[String(y)] = String(y);
      for (let y = 0; y < 26; y++)
        c[String.fromCharCode(65 + y)] = String(10 + y);
      const l = Math.floor(
        ((h = 9007199254740991),
        Math.log10 ? Math.log10(h) : Math.log(h) / Math.LN10)
      );
      var h;
      function f(t) {
        let e = (t =
          (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + "00")
          .split("")
          .map((t) => c[t])
          .join("");
        for (; e.length >= l; ) {
          let t = e.substring(0, l);
          e = (parseInt(t, 10) % 97) + e.substring(t.length);
        }
        let r = String(98 - (parseInt(e, 10) % 97));
        for (; r.length < 2; ) r = "0" + r;
        return r;
      }
      function d(t) {
        let e = null;
        if (
          ("string" !== typeof t &&
            a.throwArgumentError("invalid address", "address", t),
          t.match(/^(0x)?[0-9a-fA-F]{40}$/))
        )
          "0x" !== t.substring(0, 2) && (t = "0x" + t),
            (e = u(t)),
            t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
              e !== t &&
              a.throwArgumentError("bad address checksum", "address", t);
        else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          for (
            t.substring(2, 4) !== f(t) &&
              a.throwArgumentError("bad icap checksum", "address", t),
              e = (0, i.g$)(t.substring(4));
            e.length < 40;

          )
            e = "0" + e;
          e = u("0x" + e);
        } else a.throwArgumentError("invalid address", "address", t);
        return e;
      }
      function p(t) {
        try {
          return d(t), !0;
        } catch (e) {}
        return !1;
      }
      function m(t) {
        let e = (0, i.t2)(d(t).substring(2)).toUpperCase();
        for (; e.length < 30; ) e = "0" + e;
        return "XE" + f("XE00" + e) + e;
      }
      function g(t) {
        let e = null;
        try {
          e = d(t.from);
        } catch (u) {
          a.throwArgumentError("missing from address", "transaction", t);
        }
        const r = (0, n.G1)((0, n.lE)(i.O$.from(t.nonce).toHexString()));
        return d((0, n.p3)((0, o.w)((0, s.encode)([e, r])), 12));
      }
      function v(t, e, r) {
        return (
          32 !== (0, n.E1)(e) &&
            a.throwArgumentError("salt must be 32 bytes", "salt", e),
          32 !== (0, n.E1)(r) &&
            a.throwArgumentError(
              "initCodeHash must be 32 bytes",
              "initCodeHash",
              r
            ),
          d((0, n.p3)((0, o.w)((0, n.zo)(["0xff", d(t), e, r])), 12))
        );
      }
    },
    91156: function (t, e, r) {
      "use strict";
      r.d(e, {
        J: function () {
          return i;
        },
        c: function () {
          return o;
        },
      });
      var n = r(25689);
      function i(t) {
        t = atob(t);
        const e = [];
        for (let r = 0; r < t.length; r++) e.push(t.charCodeAt(r));
        return (0, n.lE)(e);
      }
      function o(t) {
        t = (0, n.lE)(t);
        let e = "";
        for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
        return btoa(e);
      }
    },
    96048: function (t, e, r) {
      "use strict";
      r.d(e, {
        eU: function () {
          return s;
        },
      });
      var n = r(25689),
        i = r(98690);
      class o {
        constructor(t) {
          (0, i.zG)(this, "alphabet", t),
            (0, i.zG)(this, "base", t.length),
            (0, i.zG)(this, "_alphabetMap", {}),
            (0, i.zG)(this, "_leader", t.charAt(0));
          for (let e = 0; e < t.length; e++) this._alphabetMap[t.charAt(e)] = e;
        }
        encode(t) {
          let e = (0, n.lE)(t);
          if (0 === e.length) return "";
          let r = [0];
          for (let n = 0; n < e.length; ++n) {
            let t = e[n];
            for (let e = 0; e < r.length; ++e)
              (t += r[e] << 8),
                (r[e] = t % this.base),
                (t = (t / this.base) | 0);
            for (; t > 0; ) r.push(t % this.base), (t = (t / this.base) | 0);
          }
          let i = "";
          for (let n = 0; 0 === e[n] && n < e.length - 1; ++n)
            i += this._leader;
          for (let n = r.length - 1; n >= 0; --n) i += this.alphabet[r[n]];
          return i;
        }
        decode(t) {
          if ("string" !== typeof t) throw new TypeError("Expected String");
          let e = [];
          if (0 === t.length) return new Uint8Array(e);
          e.push(0);
          for (let r = 0; r < t.length; r++) {
            let n = this._alphabetMap[t[r]];
            if (void 0 === n)
              throw new Error("Non-base" + this.base + " character");
            let i = n;
            for (let t = 0; t < e.length; ++t)
              (i += e[t] * this.base), (e[t] = 255 & i), (i >>= 8);
            for (; i > 0; ) e.push(255 & i), (i >>= 8);
          }
          for (let r = 0; t[r] === this._leader && r < t.length - 1; ++r)
            e.push(0);
          return (0, n.lE)(new Uint8Array(e.reverse()));
        }
      }
      new o("abcdefghijklmnopqrstuvwxyz234567");
      const s = new o(
        "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
      );
    },
    40288: function (t, e, r) {
      "use strict";
      r.d(e, {
        i: function () {
          return n;
        },
      });
      const n = "bignumber/5.7.0";
    },
    93442: function (t, e, r) {
      "use strict";
      r.d(e, {
        Zm: function () {
          return f;
        },
        O$: function () {
          return p;
        },
        g$: function () {
          return w;
        },
        t2: function () {
          return b;
        },
      });
      var n = r(65326),
        i = r.n(n),
        o = r(25689),
        s = r(87898),
        a = r(40288),
        u = i().BN;
      const c = new s.Yd(a.i),
        l = {},
        h = 9007199254740991;
      function f(t) {
        return (
          null != t &&
          (p.isBigNumber(t) ||
            ("number" === typeof t && t % 1 === 0) ||
            ("string" === typeof t && !!t.match(/^-?[0-9]+$/)) ||
            (0, o.A7)(t) ||
            "bigint" === typeof t ||
            (0, o._t)(t))
        );
      }
      let d = !1;
      class p {
        constructor(t, e) {
          t !== l &&
            c.throwError(
              "cannot call constructor directly; use BigNumber.from",
              s.Yd.errors.UNSUPPORTED_OPERATION,
              { operation: "new (BigNumber)" }
            ),
            (this._hex = e),
            (this._isBigNumber = !0),
            Object.freeze(this);
        }
        fromTwos(t) {
          return g(v(this).fromTwos(t));
        }
        toTwos(t) {
          return g(v(this).toTwos(t));
        }
        abs() {
          return "-" === this._hex[0] ? p.from(this._hex.substring(1)) : this;
        }
        add(t) {
          return g(v(this).add(v(t)));
        }
        sub(t) {
          return g(v(this).sub(v(t)));
        }
        div(t) {
          return (
            p.from(t).isZero() && y("division-by-zero", "div"),
            g(v(this).div(v(t)))
          );
        }
        mul(t) {
          return g(v(this).mul(v(t)));
        }
        mod(t) {
          const e = v(t);
          return e.isNeg() && y("division-by-zero", "mod"), g(v(this).umod(e));
        }
        pow(t) {
          const e = v(t);
          return e.isNeg() && y("negative-power", "pow"), g(v(this).pow(e));
        }
        and(t) {
          const e = v(t);
          return (
            (this.isNegative() || e.isNeg()) &&
              y("unbound-bitwise-result", "and"),
            g(v(this).and(e))
          );
        }
        or(t) {
          const e = v(t);
          return (
            (this.isNegative() || e.isNeg()) &&
              y("unbound-bitwise-result", "or"),
            g(v(this).or(e))
          );
        }
        xor(t) {
          const e = v(t);
          return (
            (this.isNegative() || e.isNeg()) &&
              y("unbound-bitwise-result", "xor"),
            g(v(this).xor(e))
          );
        }
        mask(t) {
          return (
            (this.isNegative() || t < 0) && y("negative-width", "mask"),
            g(v(this).maskn(t))
          );
        }
        shl(t) {
          return (
            (this.isNegative() || t < 0) && y("negative-width", "shl"),
            g(v(this).shln(t))
          );
        }
        shr(t) {
          return (
            (this.isNegative() || t < 0) && y("negative-width", "shr"),
            g(v(this).shrn(t))
          );
        }
        eq(t) {
          return v(this).eq(v(t));
        }
        lt(t) {
          return v(this).lt(v(t));
        }
        lte(t) {
          return v(this).lte(v(t));
        }
        gt(t) {
          return v(this).gt(v(t));
        }
        gte(t) {
          return v(this).gte(v(t));
        }
        isNegative() {
          return "-" === this._hex[0];
        }
        isZero() {
          return v(this).isZero();
        }
        toNumber() {
          try {
            return v(this).toNumber();
          } catch (t) {
            y("overflow", "toNumber", this.toString());
          }
          return null;
        }
        toBigInt() {
          try {
            return BigInt(this.toString());
          } catch (t) {}
          return c.throwError(
            "this platform does not support BigInt",
            s.Yd.errors.UNSUPPORTED_OPERATION,
            { value: this.toString() }
          );
        }
        toString() {
          return (
            arguments.length > 0 &&
              (10 === arguments[0]
                ? d ||
                  ((d = !0),
                  c.warn(
                    "BigNumber.toString does not accept any parameters; base-10 is assumed"
                  ))
                : 16 === arguments[0]
                ? c.throwError(
                    "BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",
                    s.Yd.errors.UNEXPECTED_ARGUMENT,
                    {}
                  )
                : c.throwError(
                    "BigNumber.toString does not accept parameters",
                    s.Yd.errors.UNEXPECTED_ARGUMENT,
                    {}
                  )),
            v(this).toString(10)
          );
        }
        toHexString() {
          return this._hex;
        }
        toJSON(t) {
          return { type: "BigNumber", hex: this.toHexString() };
        }
        static from(t) {
          if (t instanceof p) return t;
          if ("string" === typeof t)
            return t.match(/^-?0x[0-9a-f]+$/i)
              ? new p(l, m(t))
              : t.match(/^-?[0-9]+$/)
              ? new p(l, m(new u(t)))
              : c.throwArgumentError("invalid BigNumber string", "value", t);
          if ("number" === typeof t)
            return (
              t % 1 && y("underflow", "BigNumber.from", t),
              (t >= h || t <= -h) && y("overflow", "BigNumber.from", t),
              p.from(String(t))
            );
          const e = t;
          if ("bigint" === typeof e) return p.from(e.toString());
          if ((0, o._t)(e)) return p.from((0, o.Dv)(e));
          if (e)
            if (e.toHexString) {
              const t = e.toHexString();
              if ("string" === typeof t) return p.from(t);
            } else {
              let t = e._hex;
              if (
                (null == t && "BigNumber" === e.type && (t = e.hex),
                "string" === typeof t &&
                  ((0, o.A7)(t) || ("-" === t[0] && (0, o.A7)(t.substring(1)))))
              )
                return p.from(t);
            }
          return c.throwArgumentError("invalid BigNumber value", "value", t);
        }
        static isBigNumber(t) {
          return !(!t || !t._isBigNumber);
        }
      }
      function m(t) {
        if ("string" !== typeof t) return m(t.toString(16));
        if ("-" === t[0])
          return (
            "-" === (t = t.substring(1))[0] &&
              c.throwArgumentError("invalid hex", "value", t),
            "0x00" === (t = m(t)) ? t : "-" + t
          );
        if (("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t))
          return "0x00";
        for (
          t.length % 2 && (t = "0x0" + t.substring(2));
          t.length > 4 && "0x00" === t.substring(0, 4);

        )
          t = "0x" + t.substring(4);
        return t;
      }
      function g(t) {
        return p.from(m(t));
      }
      function v(t) {
        const e = p.from(t).toHexString();
        return "-" === e[0]
          ? new u("-" + e.substring(3), 16)
          : new u(e.substring(2), 16);
      }
      function y(t, e, r) {
        const n = { fault: t, operation: e };
        return (
          null != r && (n.value = r),
          c.throwError(t, s.Yd.errors.NUMERIC_FAULT, n)
        );
      }
      function w(t) {
        return new u(t, 36).toString(16);
      }
      function b(t) {
        return new u(t, 16).toString(36);
      }
    },
    65326: function (t, e, r) {
      !(function (t, e) {
        "use strict";
        function n(t, e) {
          if (!t) throw new Error(e || "Assertion failed");
        }
        function i(t, e) {
          t.super_ = e;
          var r = function () {};
          (r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.prototype.constructor = t);
        }
        function o(t, e, r) {
          if (o.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (("le" !== e && "be" !== e) || ((r = e), (e = 10)),
              this._init(t || 0, e || 10, r || "be"));
        }
        var s;
        "object" === typeof t ? (t.exports = o) : (e.BN = o),
          (o.BN = o),
          (o.wordSize = 26);
        try {
          s =
            "undefined" !== typeof window &&
            "undefined" !== typeof window.Buffer
              ? window.Buffer
              : r(88677).Buffer;
        } catch (I) {}
        function a(t, e) {
          var r = t.charCodeAt(e);
          return r >= 48 && r <= 57
            ? r - 48
            : r >= 65 && r <= 70
            ? r - 55
            : r >= 97 && r <= 102
            ? r - 87
            : void n(!1, "Invalid character in " + t);
        }
        function u(t, e, r) {
          var n = a(t, r);
          return r - 1 >= e && (n |= a(t, r - 1) << 4), n;
        }
        function c(t, e, r, i) {
          for (var o = 0, s = 0, a = Math.min(t.length, r), u = e; u < a; u++) {
            var c = t.charCodeAt(u) - 48;
            (o *= i),
              (s = c >= 49 ? c - 49 + 10 : c >= 17 ? c - 17 + 10 : c),
              n(c >= 0 && s < i, "Invalid character"),
              (o += s);
          }
          return o;
        }
        function l(t, e) {
          (t.words = e.words),
            (t.length = e.length),
            (t.negative = e.negative),
            (t.red = e.red);
        }
        if (
          ((o.isBN = function (t) {
            return (
              t instanceof o ||
              (null !== t &&
                "object" === typeof t &&
                t.constructor.wordSize === o.wordSize &&
                Array.isArray(t.words))
            );
          }),
          (o.max = function (t, e) {
            return t.cmp(e) > 0 ? t : e;
          }),
          (o.min = function (t, e) {
            return t.cmp(e) < 0 ? t : e;
          }),
          (o.prototype._init = function (t, e, r) {
            if ("number" === typeof t) return this._initNumber(t, e, r);
            if ("object" === typeof t) return this._initArray(t, e, r);
            "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
            var i = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] &&
              (i++, (this.negative = 1)),
              i < t.length &&
                (16 === e
                  ? this._parseHex(t, i, r)
                  : (this._parseBase(t, e, i),
                    "le" === r && this._initArray(this.toArray(), e, r)));
          }),
          (o.prototype._initNumber = function (t, e, r) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                  (this.length = 2))
                : (n(t < 9007199254740992),
                  (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === r && this._initArray(this.toArray(), e, r);
          }),
          (o.prototype._initArray = function (t, e, r) {
            if ((n("number" === typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)),
              (this.words = new Array(this.length));
            for (var i = 0; i < this.length; i++) this.words[i] = 0;
            var o,
              s,
              a = 0;
            if ("be" === r)
              for (i = t.length - 1, o = 0; i >= 0; i -= 3)
                (s = t[i] | (t[i - 1] << 8) | (t[i - 2] << 16)),
                  (this.words[o] |= (s << a) & 67108863),
                  (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), o++);
            else if ("le" === r)
              for (i = 0, o = 0; i < t.length; i += 3)
                (s = t[i] | (t[i + 1] << 8) | (t[i + 2] << 16)),
                  (this.words[o] |= (s << a) & 67108863),
                  (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), o++);
            return this._strip();
          }),
          (o.prototype._parseHex = function (t, e, r) {
            (this.length = Math.ceil((t.length - e) / 6)),
              (this.words = new Array(this.length));
            for (var n = 0; n < this.length; n++) this.words[n] = 0;
            var i,
              o = 0,
              s = 0;
            if ("be" === r)
              for (n = t.length - 1; n >= e; n -= 2)
                (i = u(t, e, n) << o),
                  (this.words[s] |= 67108863 & i),
                  o >= 18
                    ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26))
                    : (o += 8);
            else
              for (
                n = (t.length - e) % 2 === 0 ? e + 1 : e;
                n < t.length;
                n += 2
              )
                (i = u(t, e, n) << o),
                  (this.words[s] |= 67108863 & i),
                  o >= 18
                    ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26))
                    : (o += 8);
            this._strip();
          }),
          (o.prototype._parseBase = function (t, e, r) {
            (this.words = [0]), (this.length = 1);
            for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
            n--, (i = (i / e) | 0);
            for (
              var o = t.length - r,
                s = o % n,
                a = Math.min(o, o - s) + r,
                u = 0,
                l = r;
              l < a;
              l += n
            )
              (u = c(t, l, l + n, e)),
                this.imuln(i),
                this.words[0] + u < 67108864
                  ? (this.words[0] += u)
                  : this._iaddn(u);
            if (0 !== s) {
              var h = 1;
              for (u = c(t, l, t.length, e), l = 0; l < s; l++) h *= e;
              this.imuln(h),
                this.words[0] + u < 67108864
                  ? (this.words[0] += u)
                  : this._iaddn(u);
            }
            this._strip();
          }),
          (o.prototype.copy = function (t) {
            t.words = new Array(this.length);
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
            (t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red);
          }),
          (o.prototype._move = function (t) {
            l(t, this);
          }),
          (o.prototype.clone = function () {
            var t = new o(null);
            return this.copy(t), t;
          }),
          (o.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (o.prototype._strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (o.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          "undefined" !== typeof Symbol && "function" === typeof Symbol.for)
        )
          try {
            o.prototype[Symbol.for("nodejs.util.inspect.custom")] = h;
          } catch (I) {
            o.prototype.inspect = h;
          }
        else o.prototype.inspect = h;
        function h() {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        }
        var f = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          d = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          p = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176,
          ];
        (o.prototype.toString = function (t, e) {
          var r;
          if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
            r = "";
            for (var i = 0, o = 0, s = 0; s < this.length; s++) {
              var a = this.words[s],
                u = (16777215 & ((a << i) | o)).toString(16);
              (o = (a >>> (24 - i)) & 16777215),
                (i += 2) >= 26 && ((i -= 26), s--),
                (r =
                  0 !== o || s !== this.length - 1
                    ? f[6 - u.length] + u + r
                    : u + r);
            }
            for (0 !== o && (r = o.toString(16) + r); r.length % e !== 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var c = d[t],
              l = p[t];
            r = "";
            var h = this.clone();
            for (h.negative = 0; !h.isZero(); ) {
              var m = h.modrn(l).toString(t);
              r = (h = h.idivn(l)).isZero() ? m + r : f[c - m.length] + m + r;
            }
            for (this.isZero() && (r = "0" + r); r.length % e !== 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          n(!1, "Base should be between 2 and 36");
        }),
          (o.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  n(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -t : t
            );
          }),
          (o.prototype.toJSON = function () {
            return this.toString(16, 2);
          }),
          s &&
            (o.prototype.toBuffer = function (t, e) {
              return this.toArrayLike(s, t, e);
            }),
          (o.prototype.toArray = function (t, e) {
            return this.toArrayLike(Array, t, e);
          });
        function m(t, e, r) {
          r.negative = e.negative ^ t.negative;
          var n = (t.length + e.length) | 0;
          (r.length = n), (n = (n - 1) | 0);
          var i = 0 | t.words[0],
            o = 0 | e.words[0],
            s = i * o,
            a = 67108863 & s,
            u = (s / 67108864) | 0;
          r.words[0] = a;
          for (var c = 1; c < n; c++) {
            for (
              var l = u >>> 26,
                h = 67108863 & u,
                f = Math.min(c, e.length - 1),
                d = Math.max(0, c - t.length + 1);
              d <= f;
              d++
            ) {
              var p = (c - d) | 0;
              (l +=
                ((s = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + h) /
                  67108864) |
                0),
                (h = 67108863 & s);
            }
            (r.words[c] = 0 | h), (u = 0 | l);
          }
          return 0 !== u ? (r.words[c] = 0 | u) : r.length--, r._strip();
        }
        (o.prototype.toArrayLike = function (t, e, r) {
          this._strip();
          var i = this.byteLength(),
            o = r || Math.max(1, i);
          n(i <= o, "byte array longer than desired length"),
            n(o > 0, "Requested array length <= 0");
          var s = (function (t, e) {
            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e);
          })(t, o);
          return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](s, i), s;
        }),
          (o.prototype._toArrayLikeLE = function (t, e) {
            for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
              var s = (this.words[i] << o) | n;
              (t[r++] = 255 & s),
                r < t.length && (t[r++] = (s >> 8) & 255),
                r < t.length && (t[r++] = (s >> 16) & 255),
                6 === o
                  ? (r < t.length && (t[r++] = (s >> 24) & 255),
                    (n = 0),
                    (o = 0))
                  : ((n = s >>> 24), (o += 2));
            }
            if (r < t.length) for (t[r++] = n; r < t.length; ) t[r++] = 0;
          }),
          (o.prototype._toArrayLikeBE = function (t, e) {
            for (
              var r = t.length - 1, n = 0, i = 0, o = 0;
              i < this.length;
              i++
            ) {
              var s = (this.words[i] << o) | n;
              (t[r--] = 255 & s),
                r >= 0 && (t[r--] = (s >> 8) & 255),
                r >= 0 && (t[r--] = (s >> 16) & 255),
                6 === o
                  ? (r >= 0 && (t[r--] = (s >> 24) & 255), (n = 0), (o = 0))
                  : ((n = s >>> 24), (o += 2));
            }
            if (r >= 0) for (t[r--] = n; r >= 0; ) t[r--] = 0;
          }),
          Math.clz32
            ? (o.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (o.prototype._countBits = function (t) {
                var e = t,
                  r = 0;
                return (
                  e >= 4096 && ((r += 13), (e >>>= 13)),
                  e >= 64 && ((r += 7), (e >>>= 7)),
                  e >= 8 && ((r += 4), (e >>>= 4)),
                  e >= 2 && ((r += 2), (e >>>= 2)),
                  r + e
                );
              }),
          (o.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var e = t,
              r = 0;
            return (
              0 === (8191 & e) && ((r += 13), (e >>>= 13)),
              0 === (127 & e) && ((r += 7), (e >>>= 7)),
              0 === (15 & e) && ((r += 4), (e >>>= 4)),
              0 === (3 & e) && ((r += 2), (e >>>= 2)),
              0 === (1 & e) && r++,
              r
            );
          }),
          (o.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              e = this._countBits(t);
            return 26 * (this.length - 1) + e;
          }),
          (o.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, e = 0; e < this.length; e++) {
              var r = this._zeroBits(this.words[e]);
              if (((t += r), 26 !== r)) break;
            }
            return t;
          }),
          (o.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (o.prototype.toTwos = function (t) {
            return 0 !== this.negative
              ? this.abs().inotn(t).iaddn(1)
              : this.clone();
          }),
          (o.prototype.fromTwos = function (t) {
            return this.testn(t - 1)
              ? this.notn(t).iaddn(1).ineg()
              : this.clone();
          }),
          (o.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (o.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (o.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (o.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var e = 0; e < t.length; e++)
              this.words[e] = this.words[e] | t.words[e];
            return this._strip();
          }),
          (o.prototype.ior = function (t) {
            return n(0 === (this.negative | t.negative)), this.iuor(t);
          }),
          (o.prototype.or = function (t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this);
          }),
          (o.prototype.uor = function (t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this);
          }),
          (o.prototype.iuand = function (t) {
            var e;
            e = this.length > t.length ? t : this;
            for (var r = 0; r < e.length; r++)
              this.words[r] = this.words[r] & t.words[r];
            return (this.length = e.length), this._strip();
          }),
          (o.prototype.iand = function (t) {
            return n(0 === (this.negative | t.negative)), this.iuand(t);
          }),
          (o.prototype.and = function (t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this);
          }),
          (o.prototype.uand = function (t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this);
          }),
          (o.prototype.iuxor = function (t) {
            var e, r;
            this.length > t.length
              ? ((e = this), (r = t))
              : ((e = t), (r = this));
            for (var n = 0; n < r.length; n++)
              this.words[n] = e.words[n] ^ r.words[n];
            if (this !== e)
              for (; n < e.length; n++) this.words[n] = e.words[n];
            return (this.length = e.length), this._strip();
          }),
          (o.prototype.ixor = function (t) {
            return n(0 === (this.negative | t.negative)), this.iuxor(t);
          }),
          (o.prototype.xor = function (t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this);
          }),
          (o.prototype.uxor = function (t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this);
          }),
          (o.prototype.inotn = function (t) {
            n("number" === typeof t && t >= 0);
            var e = 0 | Math.ceil(t / 26),
              r = t % 26;
            this._expand(e), r > 0 && e--;
            for (var i = 0; i < e; i++)
              this.words[i] = 67108863 & ~this.words[i];
            return (
              r > 0 &&
                (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
              this._strip()
            );
          }),
          (o.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (o.prototype.setn = function (t, e) {
            n("number" === typeof t && t >= 0);
            var r = (t / 26) | 0,
              i = t % 26;
            return (
              this._expand(r + 1),
              (this.words[r] = e
                ? this.words[r] | (1 << i)
                : this.words[r] & ~(1 << i)),
              this._strip()
            );
          }),
          (o.prototype.iadd = function (t) {
            var e, r, n;
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (e = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (e = this.isub(t)),
                (t.negative = 1),
                e._normSign()
              );
            this.length > t.length
              ? ((r = this), (n = t))
              : ((r = t), (n = this));
            for (var i = 0, o = 0; o < n.length; o++)
              (e = (0 | r.words[o]) + (0 | n.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26);
            for (; 0 !== i && o < r.length; o++)
              (e = (0 | r.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26);
            if (((this.length = r.length), 0 !== i))
              (this.words[this.length] = i), this.length++;
            else if (r !== this)
              for (; o < r.length; o++) this.words[o] = r.words[o];
            return this;
          }),
          (o.prototype.add = function (t) {
            var e;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this);
          }),
          (o.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var e = this.iadd(t);
              return (t.negative = 1), e._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              );
            var r,
              n,
              i = this.cmp(t);
            if (0 === i)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            i > 0 ? ((r = this), (n = t)) : ((r = t), (n = this));
            for (var o = 0, s = 0; s < n.length; s++)
              (o = (e = (0 | r.words[s]) - (0 | n.words[s]) + o) >> 26),
                (this.words[s] = 67108863 & e);
            for (; 0 !== o && s < r.length; s++)
              (o = (e = (0 | r.words[s]) + o) >> 26),
                (this.words[s] = 67108863 & e);
            if (0 === o && s < r.length && r !== this)
              for (; s < r.length; s++) this.words[s] = r.words[s];
            return (
              (this.length = Math.max(this.length, s)),
              r !== this && (this.negative = 1),
              this._strip()
            );
          }),
          (o.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var g = function (t, e, r) {
          var n,
            i,
            o,
            s = t.words,
            a = e.words,
            u = r.words,
            c = 0,
            l = 0 | s[0],
            h = 8191 & l,
            f = l >>> 13,
            d = 0 | s[1],
            p = 8191 & d,
            m = d >>> 13,
            g = 0 | s[2],
            v = 8191 & g,
            y = g >>> 13,
            w = 0 | s[3],
            b = 8191 & w,
            A = w >>> 13,
            E = 0 | s[4],
            M = 8191 & E,
            k = E >>> 13,
            _ = 0 | s[5],
            C = 8191 & _,
            N = _ >>> 13,
            I = 0 | s[6],
            O = 8191 & I,
            P = I >>> 13,
            S = 0 | s[7],
            x = 8191 & S,
            R = S >>> 13,
            T = 0 | s[8],
            B = 8191 & T,
            L = T >>> 13,
            U = 0 | s[9],
            D = 8191 & U,
            j = U >>> 13,
            F = 0 | a[0],
            z = 8191 & F,
            q = F >>> 13,
            G = 0 | a[1],
            Y = 8191 & G,
            J = G >>> 13,
            H = 0 | a[2],
            K = 8191 & H,
            Q = H >>> 13,
            W = 0 | a[3],
            V = 8191 & W,
            Z = W >>> 13,
            X = 0 | a[4],
            $ = 8191 & X,
            tt = X >>> 13,
            et = 0 | a[5],
            rt = 8191 & et,
            nt = et >>> 13,
            it = 0 | a[6],
            ot = 8191 & it,
            st = it >>> 13,
            at = 0 | a[7],
            ut = 8191 & at,
            ct = at >>> 13,
            lt = 0 | a[8],
            ht = 8191 & lt,
            ft = lt >>> 13,
            dt = 0 | a[9],
            pt = 8191 & dt,
            mt = dt >>> 13;
          (r.negative = t.negative ^ e.negative), (r.length = 19);
          var gt =
            (((c + (n = Math.imul(h, z))) | 0) +
              ((8191 & (i = ((i = Math.imul(h, q)) + Math.imul(f, z)) | 0)) <<
                13)) |
            0;
          (c = ((((o = Math.imul(f, q)) + (i >>> 13)) | 0) + (gt >>> 26)) | 0),
            (gt &= 67108863),
            (n = Math.imul(p, z)),
            (i = ((i = Math.imul(p, q)) + Math.imul(m, z)) | 0),
            (o = Math.imul(m, q));
          var vt =
            (((c + (n = (n + Math.imul(h, Y)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, J)) | 0) + Math.imul(f, Y)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(f, J)) | 0) + (i >>> 13)) | 0) +
              (vt >>> 26)) |
            0),
            (vt &= 67108863),
            (n = Math.imul(v, z)),
            (i = ((i = Math.imul(v, q)) + Math.imul(y, z)) | 0),
            (o = Math.imul(y, q)),
            (n = (n + Math.imul(p, Y)) | 0),
            (i = ((i = (i + Math.imul(p, J)) | 0) + Math.imul(m, Y)) | 0),
            (o = (o + Math.imul(m, J)) | 0);
          var yt =
            (((c + (n = (n + Math.imul(h, K)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, Q)) | 0) + Math.imul(f, K)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(f, Q)) | 0) + (i >>> 13)) | 0) +
              (yt >>> 26)) |
            0),
            (yt &= 67108863),
            (n = Math.imul(b, z)),
            (i = ((i = Math.imul(b, q)) + Math.imul(A, z)) | 0),
            (o = Math.imul(A, q)),
            (n = (n + Math.imul(v, Y)) | 0),
            (i = ((i = (i + Math.imul(v, J)) | 0) + Math.imul(y, Y)) | 0),
            (o = (o + Math.imul(y, J)) | 0),
            (n = (n + Math.imul(p, K)) | 0),
            (i = ((i = (i + Math.imul(p, Q)) | 0) + Math.imul(m, K)) | 0),
            (o = (o + Math.imul(m, Q)) | 0);
          var wt =
            (((c + (n = (n + Math.imul(h, V)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, Z)) | 0) + Math.imul(f, V)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(f, Z)) | 0) + (i >>> 13)) | 0) +
              (wt >>> 26)) |
            0),
            (wt &= 67108863),
            (n = Math.imul(M, z)),
            (i = ((i = Math.imul(M, q)) + Math.imul(k, z)) | 0),
            (o = Math.imul(k, q)),
            (n = (n + Math.imul(b, Y)) | 0),
            (i = ((i = (i + Math.imul(b, J)) | 0) + Math.imul(A, Y)) | 0),
            (o = (o + Math.imul(A, J)) | 0),
            (n = (n + Math.imul(v, K)) | 0),
            (i = ((i = (i + Math.imul(v, Q)) | 0) + Math.imul(y, K)) | 0),
            (o = (o + Math.imul(y, Q)) | 0),
            (n = (n + Math.imul(p, V)) | 0),
            (i = ((i = (i + Math.imul(p, Z)) | 0) + Math.imul(m, V)) | 0),
            (o = (o + Math.imul(m, Z)) | 0);
          var bt =
            (((c + (n = (n + Math.imul(h, $)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, tt)) | 0) + Math.imul(f, $)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(f, tt)) | 0) + (i >>> 13)) | 0) +
              (bt >>> 26)) |
            0),
            (bt &= 67108863),
            (n = Math.imul(C, z)),
            (i = ((i = Math.imul(C, q)) + Math.imul(N, z)) | 0),
            (o = Math.imul(N, q)),
            (n = (n + Math.imul(M, Y)) | 0),
            (i = ((i = (i + Math.imul(M, J)) | 0) + Math.imul(k, Y)) | 0),
            (o = (o + Math.imul(k, J)) | 0),
            (n = (n + Math.imul(b, K)) | 0),
            (i = ((i = (i + Math.imul(b, Q)) | 0) + Math.imul(A, K)) | 0),
            (o = (o + Math.imul(A, Q)) | 0),
            (n = (n + Math.imul(v, V)) | 0),
            (i = ((i = (i + Math.imul(v, Z)) | 0) + Math.imul(y, V)) | 0),
            (o = (o + Math.imul(y, Z)) | 0),
            (n = (n + Math.imul(p, $)) | 0),
            (i = ((i = (i + Math.imul(p, tt)) | 0) + Math.imul(m, $)) | 0),
            (o = (o + Math.imul(m, tt)) | 0);
          var At =
            (((c + (n = (n + Math.imul(h, rt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, nt)) | 0) + Math.imul(f, rt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(f, nt)) | 0) + (i >>> 13)) | 0) +
              (At >>> 26)) |
            0),
            (At &= 67108863),
            (n = Math.imul(O, z)),
            (i = ((i = Math.imul(O, q)) + Math.imul(P, z)) | 0),
            (o = Math.imul(P, q)),
            (n = (n + Math.imul(C, Y)) | 0),
            (i = ((i = (i + Math.imul(C, J)) | 0) + Math.imul(N, Y)) | 0),
            (o = (o + Math.imul(N, J)) | 0),
            (n = (n + Math.imul(M, K)) | 0),
            (i = ((i = (i + Math.imul(M, Q)) | 0) + Math.imul(k, K)) | 0),
            (o = (o + Math.imul(k, Q)) | 0),
            (n = (n + Math.imul(b, V)) | 0),
            (i = ((i = (i + Math.imul(b, Z)) | 0) + Math.imul(A, V)) | 0),
            (o = (o + Math.imul(A, Z)) | 0),
            (n = (n + Math.imul(v, $)) | 0),
            (i = ((i = (i + Math.imul(v, tt)) | 0) + Math.imul(y, $)) | 0),
            (o = (o + Math.imul(y, tt)) | 0),
            (n = (n + Math.imul(p, rt)) | 0),
            (i = ((i = (i + Math.imul(p, nt)) | 0) + Math.imul(m, rt)) | 0),
            (o = (o + Math.imul(m, nt)) | 0);
          var Et =
            (((c + (n = (n + Math.imul(h, ot)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, st)) | 0) + Math.imul(f, ot)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(f, st)) | 0) + (i >>> 13)) | 0) +
              (Et >>> 26)) |
            0),
            (Et &= 67108863),
            (n = Math.imul(x, z)),
            (i = ((i = Math.imul(x, q)) + Math.imul(R, z)) | 0),
            (o = Math.imul(R, q)),
            (n = (n + Math.imul(O, Y)) | 0),
            (i = ((i = (i + Math.imul(O, J)) | 0) + Math.imul(P, Y)) | 0),
            (o = (o + Math.imul(P, J)) | 0),
            (n = (n + Math.imul(C, K)) | 0),
            (i = ((i = (i + Math.imul(C, Q)) | 0) + Math.imul(N, K)) | 0),
            (o = (o + Math.imul(N, Q)) | 0),
            (n = (n + Math.imul(M, V)) | 0),
            (i = ((i = (i + Math.imul(M, Z)) | 0) + Math.imul(k, V)) | 0),
            (o = (o + Math.imul(k, Z)) | 0),
            (n = (n + Math.imul(b, $)) | 0),
            (i = ((i = (i + Math.imul(b, tt)) | 0) + Math.imul(A, $)) | 0),
            (o = (o + Math.imul(A, tt)) | 0),
            (n = (n + Math.imul(v, rt)) | 0),
            (i = ((i = (i + Math.imul(v, nt)) | 0) + Math.imul(y, rt)) | 0),
            (o = (o + Math.imul(y, nt)) | 0),
            (n = (n + Math.imul(p, ot)) | 0),
            (i = ((i = (i + Math.imul(p, st)) | 0) + Math.imul(m, ot)) | 0),
            (o = (o + Math.imul(m, st)) | 0);
          var Mt =
            (((c + (n = (n + Math.imul(h, ut)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, ct)) | 0) + Math.imul(f, ut)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(f, ct)) | 0) + (i >>> 13)) | 0) +
              (Mt >>> 26)) |
            0),
            (Mt &= 67108863),
            (n = Math.imul(B, z)),
            (i = ((i = Math.imul(B, q)) + Math.imul(L, z)) | 0),
            (o = Math.imul(L, q)),
            (n = (n + Math.imul(x, Y)) | 0),
            (i = ((i = (i + Math.imul(x, J)) | 0) + Math.imul(R, Y)) | 0),
            (o = (o + Math.imul(R, J)) | 0),
            (n = (n + Math.imul(O, K)) | 0),
            (i = ((i = (i + Math.imul(O, Q)) | 0) + Math.imul(P, K)) | 0),
            (o = (o + Math.imul(P, Q)) | 0),
            (n = (n + Math.imul(C, V)) | 0),
            (i = ((i = (i + Math.imul(C, Z)) | 0) + Math.imul(N, V)) | 0),
            (o = (o + Math.imul(N, Z)) | 0),
            (n = (n + Math.imul(M, $)) | 0),
            (i = ((i = (i + Math.imul(M, tt)) | 0) + Math.imul(k, $)) | 0),
            (o = (o + Math.imul(k, tt)) | 0),
            (n = (n + Math.imul(b, rt)) | 0),
            (i = ((i = (i + Math.imul(b, nt)) | 0) + Math.imul(A, rt)) | 0),
            (o = (o + Math.imul(A, nt)) | 0),
            (n = (n + Math.imul(v, ot)) | 0),
            (i = ((i = (i + Math.imul(v, st)) | 0) + Math.imul(y, ot)) | 0),
            (o = (o + Math.imul(y, st)) | 0),
            (n = (n + Math.imul(p, ut)) | 0),
            (i = ((i = (i + Math.imul(p, ct)) | 0) + Math.imul(m, ut)) | 0),
            (o = (o + Math.imul(m, ct)) | 0);
          var kt =
            (((c + (n = (n + Math.imul(h, ht)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, ft)) | 0) + Math.imul(f, ht)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(f, ft)) | 0) + (i >>> 13)) | 0) +
              (kt >>> 26)) |
            0),
            (kt &= 67108863),
            (n = Math.imul(D, z)),
            (i = ((i = Math.imul(D, q)) + Math.imul(j, z)) | 0),
            (o = Math.imul(j, q)),
            (n = (n + Math.imul(B, Y)) | 0),
            (i = ((i = (i + Math.imul(B, J)) | 0) + Math.imul(L, Y)) | 0),
            (o = (o + Math.imul(L, J)) | 0),
            (n = (n + Math.imul(x, K)) | 0),
            (i = ((i = (i + Math.imul(x, Q)) | 0) + Math.imul(R, K)) | 0),
            (o = (o + Math.imul(R, Q)) | 0),
            (n = (n + Math.imul(O, V)) | 0),
            (i = ((i = (i + Math.imul(O, Z)) | 0) + Math.imul(P, V)) | 0),
            (o = (o + Math.imul(P, Z)) | 0),
            (n = (n + Math.imul(C, $)) | 0),
            (i = ((i = (i + Math.imul(C, tt)) | 0) + Math.imul(N, $)) | 0),
            (o = (o + Math.imul(N, tt)) | 0),
            (n = (n + Math.imul(M, rt)) | 0),
            (i = ((i = (i + Math.imul(M, nt)) | 0) + Math.imul(k, rt)) | 0),
            (o = (o + Math.imul(k, nt)) | 0),
            (n = (n + Math.imul(b, ot)) | 0),
            (i = ((i = (i + Math.imul(b, st)) | 0) + Math.imul(A, ot)) | 0),
            (o = (o + Math.imul(A, st)) | 0),
            (n = (n + Math.imul(v, ut)) | 0),
            (i = ((i = (i + Math.imul(v, ct)) | 0) + Math.imul(y, ut)) | 0),
            (o = (o + Math.imul(y, ct)) | 0),
            (n = (n + Math.imul(p, ht)) | 0),
            (i = ((i = (i + Math.imul(p, ft)) | 0) + Math.imul(m, ht)) | 0),
            (o = (o + Math.imul(m, ft)) | 0);
          var _t =
            (((c + (n = (n + Math.imul(h, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, mt)) | 0) + Math.imul(f, pt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(f, mt)) | 0) + (i >>> 13)) | 0) +
              (_t >>> 26)) |
            0),
            (_t &= 67108863),
            (n = Math.imul(D, Y)),
            (i = ((i = Math.imul(D, J)) + Math.imul(j, Y)) | 0),
            (o = Math.imul(j, J)),
            (n = (n + Math.imul(B, K)) | 0),
            (i = ((i = (i + Math.imul(B, Q)) | 0) + Math.imul(L, K)) | 0),
            (o = (o + Math.imul(L, Q)) | 0),
            (n = (n + Math.imul(x, V)) | 0),
            (i = ((i = (i + Math.imul(x, Z)) | 0) + Math.imul(R, V)) | 0),
            (o = (o + Math.imul(R, Z)) | 0),
            (n = (n + Math.imul(O, $)) | 0),
            (i = ((i = (i + Math.imul(O, tt)) | 0) + Math.imul(P, $)) | 0),
            (o = (o + Math.imul(P, tt)) | 0),
            (n = (n + Math.imul(C, rt)) | 0),
            (i = ((i = (i + Math.imul(C, nt)) | 0) + Math.imul(N, rt)) | 0),
            (o = (o + Math.imul(N, nt)) | 0),
            (n = (n + Math.imul(M, ot)) | 0),
            (i = ((i = (i + Math.imul(M, st)) | 0) + Math.imul(k, ot)) | 0),
            (o = (o + Math.imul(k, st)) | 0),
            (n = (n + Math.imul(b, ut)) | 0),
            (i = ((i = (i + Math.imul(b, ct)) | 0) + Math.imul(A, ut)) | 0),
            (o = (o + Math.imul(A, ct)) | 0),
            (n = (n + Math.imul(v, ht)) | 0),
            (i = ((i = (i + Math.imul(v, ft)) | 0) + Math.imul(y, ht)) | 0),
            (o = (o + Math.imul(y, ft)) | 0);
          var Ct =
            (((c + (n = (n + Math.imul(p, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(p, mt)) | 0) + Math.imul(m, pt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(m, mt)) | 0) + (i >>> 13)) | 0) +
              (Ct >>> 26)) |
            0),
            (Ct &= 67108863),
            (n = Math.imul(D, K)),
            (i = ((i = Math.imul(D, Q)) + Math.imul(j, K)) | 0),
            (o = Math.imul(j, Q)),
            (n = (n + Math.imul(B, V)) | 0),
            (i = ((i = (i + Math.imul(B, Z)) | 0) + Math.imul(L, V)) | 0),
            (o = (o + Math.imul(L, Z)) | 0),
            (n = (n + Math.imul(x, $)) | 0),
            (i = ((i = (i + Math.imul(x, tt)) | 0) + Math.imul(R, $)) | 0),
            (o = (o + Math.imul(R, tt)) | 0),
            (n = (n + Math.imul(O, rt)) | 0),
            (i = ((i = (i + Math.imul(O, nt)) | 0) + Math.imul(P, rt)) | 0),
            (o = (o + Math.imul(P, nt)) | 0),
            (n = (n + Math.imul(C, ot)) | 0),
            (i = ((i = (i + Math.imul(C, st)) | 0) + Math.imul(N, ot)) | 0),
            (o = (o + Math.imul(N, st)) | 0),
            (n = (n + Math.imul(M, ut)) | 0),
            (i = ((i = (i + Math.imul(M, ct)) | 0) + Math.imul(k, ut)) | 0),
            (o = (o + Math.imul(k, ct)) | 0),
            (n = (n + Math.imul(b, ht)) | 0),
            (i = ((i = (i + Math.imul(b, ft)) | 0) + Math.imul(A, ht)) | 0),
            (o = (o + Math.imul(A, ft)) | 0);
          var Nt =
            (((c + (n = (n + Math.imul(v, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(v, mt)) | 0) + Math.imul(y, pt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(y, mt)) | 0) + (i >>> 13)) | 0) +
              (Nt >>> 26)) |
            0),
            (Nt &= 67108863),
            (n = Math.imul(D, V)),
            (i = ((i = Math.imul(D, Z)) + Math.imul(j, V)) | 0),
            (o = Math.imul(j, Z)),
            (n = (n + Math.imul(B, $)) | 0),
            (i = ((i = (i + Math.imul(B, tt)) | 0) + Math.imul(L, $)) | 0),
            (o = (o + Math.imul(L, tt)) | 0),
            (n = (n + Math.imul(x, rt)) | 0),
            (i = ((i = (i + Math.imul(x, nt)) | 0) + Math.imul(R, rt)) | 0),
            (o = (o + Math.imul(R, nt)) | 0),
            (n = (n + Math.imul(O, ot)) | 0),
            (i = ((i = (i + Math.imul(O, st)) | 0) + Math.imul(P, ot)) | 0),
            (o = (o + Math.imul(P, st)) | 0),
            (n = (n + Math.imul(C, ut)) | 0),
            (i = ((i = (i + Math.imul(C, ct)) | 0) + Math.imul(N, ut)) | 0),
            (o = (o + Math.imul(N, ct)) | 0),
            (n = (n + Math.imul(M, ht)) | 0),
            (i = ((i = (i + Math.imul(M, ft)) | 0) + Math.imul(k, ht)) | 0),
            (o = (o + Math.imul(k, ft)) | 0);
          var It =
            (((c + (n = (n + Math.imul(b, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(b, mt)) | 0) + Math.imul(A, pt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(A, mt)) | 0) + (i >>> 13)) | 0) +
              (It >>> 26)) |
            0),
            (It &= 67108863),
            (n = Math.imul(D, $)),
            (i = ((i = Math.imul(D, tt)) + Math.imul(j, $)) | 0),
            (o = Math.imul(j, tt)),
            (n = (n + Math.imul(B, rt)) | 0),
            (i = ((i = (i + Math.imul(B, nt)) | 0) + Math.imul(L, rt)) | 0),
            (o = (o + Math.imul(L, nt)) | 0),
            (n = (n + Math.imul(x, ot)) | 0),
            (i = ((i = (i + Math.imul(x, st)) | 0) + Math.imul(R, ot)) | 0),
            (o = (o + Math.imul(R, st)) | 0),
            (n = (n + Math.imul(O, ut)) | 0),
            (i = ((i = (i + Math.imul(O, ct)) | 0) + Math.imul(P, ut)) | 0),
            (o = (o + Math.imul(P, ct)) | 0),
            (n = (n + Math.imul(C, ht)) | 0),
            (i = ((i = (i + Math.imul(C, ft)) | 0) + Math.imul(N, ht)) | 0),
            (o = (o + Math.imul(N, ft)) | 0);
          var Ot =
            (((c + (n = (n + Math.imul(M, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(M, mt)) | 0) + Math.imul(k, pt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(k, mt)) | 0) + (i >>> 13)) | 0) +
              (Ot >>> 26)) |
            0),
            (Ot &= 67108863),
            (n = Math.imul(D, rt)),
            (i = ((i = Math.imul(D, nt)) + Math.imul(j, rt)) | 0),
            (o = Math.imul(j, nt)),
            (n = (n + Math.imul(B, ot)) | 0),
            (i = ((i = (i + Math.imul(B, st)) | 0) + Math.imul(L, ot)) | 0),
            (o = (o + Math.imul(L, st)) | 0),
            (n = (n + Math.imul(x, ut)) | 0),
            (i = ((i = (i + Math.imul(x, ct)) | 0) + Math.imul(R, ut)) | 0),
            (o = (o + Math.imul(R, ct)) | 0),
            (n = (n + Math.imul(O, ht)) | 0),
            (i = ((i = (i + Math.imul(O, ft)) | 0) + Math.imul(P, ht)) | 0),
            (o = (o + Math.imul(P, ft)) | 0);
          var Pt =
            (((c + (n = (n + Math.imul(C, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(C, mt)) | 0) + Math.imul(N, pt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(N, mt)) | 0) + (i >>> 13)) | 0) +
              (Pt >>> 26)) |
            0),
            (Pt &= 67108863),
            (n = Math.imul(D, ot)),
            (i = ((i = Math.imul(D, st)) + Math.imul(j, ot)) | 0),
            (o = Math.imul(j, st)),
            (n = (n + Math.imul(B, ut)) | 0),
            (i = ((i = (i + Math.imul(B, ct)) | 0) + Math.imul(L, ut)) | 0),
            (o = (o + Math.imul(L, ct)) | 0),
            (n = (n + Math.imul(x, ht)) | 0),
            (i = ((i = (i + Math.imul(x, ft)) | 0) + Math.imul(R, ht)) | 0),
            (o = (o + Math.imul(R, ft)) | 0);
          var St =
            (((c + (n = (n + Math.imul(O, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(O, mt)) | 0) + Math.imul(P, pt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(P, mt)) | 0) + (i >>> 13)) | 0) +
              (St >>> 26)) |
            0),
            (St &= 67108863),
            (n = Math.imul(D, ut)),
            (i = ((i = Math.imul(D, ct)) + Math.imul(j, ut)) | 0),
            (o = Math.imul(j, ct)),
            (n = (n + Math.imul(B, ht)) | 0),
            (i = ((i = (i + Math.imul(B, ft)) | 0) + Math.imul(L, ht)) | 0),
            (o = (o + Math.imul(L, ft)) | 0);
          var xt =
            (((c + (n = (n + Math.imul(x, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(x, mt)) | 0) + Math.imul(R, pt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(R, mt)) | 0) + (i >>> 13)) | 0) +
              (xt >>> 26)) |
            0),
            (xt &= 67108863),
            (n = Math.imul(D, ht)),
            (i = ((i = Math.imul(D, ft)) + Math.imul(j, ht)) | 0),
            (o = Math.imul(j, ft));
          var Rt =
            (((c + (n = (n + Math.imul(B, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(B, mt)) | 0) + Math.imul(L, pt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(L, mt)) | 0) + (i >>> 13)) | 0) +
              (Rt >>> 26)) |
            0),
            (Rt &= 67108863);
          var Tt =
            (((c + (n = Math.imul(D, pt))) | 0) +
              ((8191 & (i = ((i = Math.imul(D, mt)) + Math.imul(j, pt)) | 0)) <<
                13)) |
            0;
          return (
            (c =
              ((((o = Math.imul(j, mt)) + (i >>> 13)) | 0) + (Tt >>> 26)) | 0),
            (Tt &= 67108863),
            (u[0] = gt),
            (u[1] = vt),
            (u[2] = yt),
            (u[3] = wt),
            (u[4] = bt),
            (u[5] = At),
            (u[6] = Et),
            (u[7] = Mt),
            (u[8] = kt),
            (u[9] = _t),
            (u[10] = Ct),
            (u[11] = Nt),
            (u[12] = It),
            (u[13] = Ot),
            (u[14] = Pt),
            (u[15] = St),
            (u[16] = xt),
            (u[17] = Rt),
            (u[18] = Tt),
            0 !== c && ((u[19] = c), r.length++),
            r
          );
        };
        function v(t, e, r) {
          (r.negative = e.negative ^ t.negative),
            (r.length = t.length + e.length);
          for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
            var s = i;
            i = 0;
            for (
              var a = 67108863 & n,
                u = Math.min(o, e.length - 1),
                c = Math.max(0, o - t.length + 1);
              c <= u;
              c++
            ) {
              var l = o - c,
                h = (0 | t.words[l]) * (0 | e.words[c]),
                f = 67108863 & h;
              (a = 67108863 & (f = (f + a) | 0)),
                (i +=
                  (s =
                    ((s = (s + ((h / 67108864) | 0)) | 0) + (f >>> 26)) | 0) >>>
                  26),
                (s &= 67108863);
            }
            (r.words[o] = a), (n = s), (s = i);
          }
          return 0 !== n ? (r.words[o] = n) : r.length--, r._strip();
        }
        function y(t, e, r) {
          return v(t, e, r);
        }
        function w(t, e) {
          (this.x = t), (this.y = e);
        }
        Math.imul || (g = m),
          (o.prototype.mulTo = function (t, e) {
            var r = this.length + t.length;
            return 10 === this.length && 10 === t.length
              ? g(this, t, e)
              : r < 63
              ? m(this, t, e)
              : r < 1024
              ? v(this, t, e)
              : y(this, t, e);
          }),
          (w.prototype.makeRBT = function (t) {
            for (
              var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0;
              n < t;
              n++
            )
              e[n] = this.revBin(n, r, t);
            return e;
          }),
          (w.prototype.revBin = function (t, e, r) {
            if (0 === t || t === r - 1) return t;
            for (var n = 0, i = 0; i < e; i++)
              (n |= (1 & t) << (e - i - 1)), (t >>= 1);
            return n;
          }),
          (w.prototype.permute = function (t, e, r, n, i, o) {
            for (var s = 0; s < o; s++) (n[s] = e[t[s]]), (i[s] = r[t[s]]);
          }),
          (w.prototype.transform = function (t, e, r, n, i, o) {
            this.permute(o, t, e, r, n, i);
            for (var s = 1; s < i; s <<= 1)
              for (
                var a = s << 1,
                  u = Math.cos((2 * Math.PI) / a),
                  c = Math.sin((2 * Math.PI) / a),
                  l = 0;
                l < i;
                l += a
              )
                for (var h = u, f = c, d = 0; d < s; d++) {
                  var p = r[l + d],
                    m = n[l + d],
                    g = r[l + d + s],
                    v = n[l + d + s],
                    y = h * g - f * v;
                  (v = h * v + f * g),
                    (g = y),
                    (r[l + d] = p + g),
                    (n[l + d] = m + v),
                    (r[l + d + s] = p - g),
                    (n[l + d + s] = m - v),
                    d !== a &&
                      ((y = u * h - c * f), (f = u * f + c * h), (h = y));
                }
          }),
          (w.prototype.guessLen13b = function (t, e) {
            var r = 1 | Math.max(e, t),
              n = 1 & r,
              i = 0;
            for (r = (r / 2) | 0; r; r >>>= 1) i++;
            return 1 << (i + 1 + n);
          }),
          (w.prototype.conjugate = function (t, e, r) {
            if (!(r <= 1))
              for (var n = 0; n < r / 2; n++) {
                var i = t[n];
                (t[n] = t[r - n - 1]),
                  (t[r - n - 1] = i),
                  (i = e[n]),
                  (e[n] = -e[r - n - 1]),
                  (e[r - n - 1] = -i);
              }
          }),
          (w.prototype.normalize13b = function (t, e) {
            for (var r = 0, n = 0; n < e / 2; n++) {
              var i =
                8192 * Math.round(t[2 * n + 1] / e) +
                Math.round(t[2 * n] / e) +
                r;
              (t[n] = 67108863 & i),
                (r = i < 67108864 ? 0 : (i / 67108864) | 0);
            }
            return t;
          }),
          (w.prototype.convert13b = function (t, e, r, i) {
            for (var o = 0, s = 0; s < e; s++)
              (o += 0 | t[s]),
                (r[2 * s] = 8191 & o),
                (o >>>= 13),
                (r[2 * s + 1] = 8191 & o),
                (o >>>= 13);
            for (s = 2 * e; s < i; ++s) r[s] = 0;
            n(0 === o), n(0 === (-8192 & o));
          }),
          (w.prototype.stub = function (t) {
            for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
            return e;
          }),
          (w.prototype.mulp = function (t, e, r) {
            var n = 2 * this.guessLen13b(t.length, e.length),
              i = this.makeRBT(n),
              o = this.stub(n),
              s = new Array(n),
              a = new Array(n),
              u = new Array(n),
              c = new Array(n),
              l = new Array(n),
              h = new Array(n),
              f = r.words;
            (f.length = n),
              this.convert13b(t.words, t.length, s, n),
              this.convert13b(e.words, e.length, c, n),
              this.transform(s, o, a, u, n, i),
              this.transform(c, o, l, h, n, i);
            for (var d = 0; d < n; d++) {
              var p = a[d] * l[d] - u[d] * h[d];
              (u[d] = a[d] * h[d] + u[d] * l[d]), (a[d] = p);
            }
            return (
              this.conjugate(a, u, n),
              this.transform(a, u, f, o, n, i),
              this.conjugate(f, o, n),
              this.normalize13b(f, n),
              (r.negative = t.negative ^ e.negative),
              (r.length = t.length + e.length),
              r._strip()
            );
          }),
          (o.prototype.mul = function (t) {
            var e = new o(null);
            return (
              (e.words = new Array(this.length + t.length)), this.mulTo(t, e)
            );
          }),
          (o.prototype.mulf = function (t) {
            var e = new o(null);
            return (e.words = new Array(this.length + t.length)), y(this, t, e);
          }),
          (o.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (o.prototype.imuln = function (t) {
            var e = t < 0;
            e && (t = -t), n("number" === typeof t), n(t < 67108864);
            for (var r = 0, i = 0; i < this.length; i++) {
              var o = (0 | this.words[i]) * t,
                s = (67108863 & o) + (67108863 & r);
              (r >>= 26),
                (r += (o / 67108864) | 0),
                (r += s >>> 26),
                (this.words[i] = 67108863 & s);
            }
            return (
              0 !== r && ((this.words[i] = r), this.length++),
              e ? this.ineg() : this
            );
          }),
          (o.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (o.prototype.sqr = function () {
            return this.mul(this);
          }),
          (o.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (o.prototype.pow = function (t) {
            var e = (function (t) {
              for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                var n = (r / 26) | 0,
                  i = r % 26;
                e[r] = (t.words[n] >>> i) & 1;
              }
              return e;
            })(t);
            if (0 === e.length) return new o(1);
            for (
              var r = this, n = 0;
              n < e.length && 0 === e[n];
              n++, r = r.sqr()
            );
            if (++n < e.length)
              for (var i = r.sqr(); n < e.length; n++, i = i.sqr())
                0 !== e[n] && (r = r.mul(i));
            return r;
          }),
          (o.prototype.iushln = function (t) {
            n("number" === typeof t && t >= 0);
            var e,
              r = t % 26,
              i = (t - r) / 26,
              o = (67108863 >>> (26 - r)) << (26 - r);
            if (0 !== r) {
              var s = 0;
              for (e = 0; e < this.length; e++) {
                var a = this.words[e] & o,
                  u = ((0 | this.words[e]) - a) << r;
                (this.words[e] = u | s), (s = a >>> (26 - r));
              }
              s && ((this.words[e] = s), this.length++);
            }
            if (0 !== i) {
              for (e = this.length - 1; e >= 0; e--)
                this.words[e + i] = this.words[e];
              for (e = 0; e < i; e++) this.words[e] = 0;
              this.length += i;
            }
            return this._strip();
          }),
          (o.prototype.ishln = function (t) {
            return n(0 === this.negative), this.iushln(t);
          }),
          (o.prototype.iushrn = function (t, e, r) {
            var i;
            n("number" === typeof t && t >= 0),
              (i = e ? (e - (e % 26)) / 26 : 0);
            var o = t % 26,
              s = Math.min((t - o) / 26, this.length),
              a = 67108863 ^ ((67108863 >>> o) << o),
              u = r;
            if (((i -= s), (i = Math.max(0, i)), u)) {
              for (var c = 0; c < s; c++) u.words[c] = this.words[c];
              u.length = s;
            }
            if (0 === s);
            else if (this.length > s)
              for (this.length -= s, c = 0; c < this.length; c++)
                this.words[c] = this.words[c + s];
            else (this.words[0] = 0), (this.length = 1);
            var l = 0;
            for (c = this.length - 1; c >= 0 && (0 !== l || c >= i); c--) {
              var h = 0 | this.words[c];
              (this.words[c] = (l << (26 - o)) | (h >>> o)), (l = h & a);
            }
            return (
              u && 0 !== l && (u.words[u.length++] = l),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this._strip()
            );
          }),
          (o.prototype.ishrn = function (t, e, r) {
            return n(0 === this.negative), this.iushrn(t, e, r);
          }),
          (o.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (o.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (o.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (o.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (o.prototype.testn = function (t) {
            n("number" === typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e;
            return !(this.length <= r) && !!(this.words[r] & i);
          }),
          (o.prototype.imaskn = function (t) {
            n("number" === typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            if (
              (n(
                0 === this.negative,
                "imaskn works only with positive numbers"
              ),
              this.length <= r)
            )
              return this;
            if (
              (0 !== e && r++,
              (this.length = Math.min(r, this.length)),
              0 !== e)
            ) {
              var i = 67108863 ^ ((67108863 >>> e) << e);
              this.words[this.length - 1] &= i;
            }
            return this._strip();
          }),
          (o.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (o.prototype.iaddn = function (t) {
            return (
              n("number" === typeof t),
              n(t < 67108864),
              t < 0
                ? this.isubn(-t)
                : 0 !== this.negative
                ? 1 === this.length && (0 | this.words[0]) <= t
                  ? ((this.words[0] = t - (0 | this.words[0])),
                    (this.negative = 0),
                    this)
                  : ((this.negative = 0),
                    this.isubn(t),
                    (this.negative = 1),
                    this)
                : this._iaddn(t)
            );
          }),
          (o.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
              (this.words[e] -= 67108864),
                e === this.length - 1
                  ? (this.words[e + 1] = 1)
                  : this.words[e + 1]++;
            return (this.length = Math.max(this.length, e + 1)), this;
          }),
          (o.prototype.isubn = function (t) {
            if ((n("number" === typeof t), n(t < 67108864), t < 0))
              return this.iaddn(-t);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              );
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var e = 0; e < this.length && this.words[e] < 0; e++)
                (this.words[e] += 67108864), (this.words[e + 1] -= 1);
            return this._strip();
          }),
          (o.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (o.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (o.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (o.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (o.prototype._ishlnsubmul = function (t, e, r) {
            var i,
              o,
              s = t.length + r;
            this._expand(s);
            var a = 0;
            for (i = 0; i < t.length; i++) {
              o = (0 | this.words[i + r]) + a;
              var u = (0 | t.words[i]) * e;
              (a = ((o -= 67108863 & u) >> 26) - ((u / 67108864) | 0)),
                (this.words[i + r] = 67108863 & o);
            }
            for (; i < this.length - r; i++)
              (a = (o = (0 | this.words[i + r]) + a) >> 26),
                (this.words[i + r] = 67108863 & o);
            if (0 === a) return this._strip();
            for (n(-1 === a), a = 0, i = 0; i < this.length; i++)
              (a = (o = -(0 | this.words[i]) + a) >> 26),
                (this.words[i] = 67108863 & o);
            return (this.negative = 1), this._strip();
          }),
          (o.prototype._wordDiv = function (t, e) {
            var r = (this.length, t.length),
              n = this.clone(),
              i = t,
              s = 0 | i.words[i.length - 1];
            0 !== (r = 26 - this._countBits(s)) &&
              ((i = i.ushln(r)), n.iushln(r), (s = 0 | i.words[i.length - 1]));
            var a,
              u = n.length - i.length;
            if ("mod" !== e) {
              ((a = new o(null)).length = u + 1),
                (a.words = new Array(a.length));
              for (var c = 0; c < a.length; c++) a.words[c] = 0;
            }
            var l = n.clone()._ishlnsubmul(i, 1, u);
            0 === l.negative && ((n = l), a && (a.words[u] = 1));
            for (var h = u - 1; h >= 0; h--) {
              var f =
                67108864 * (0 | n.words[i.length + h]) +
                (0 | n.words[i.length + h - 1]);
              for (
                f = Math.min((f / s) | 0, 67108863), n._ishlnsubmul(i, f, h);
                0 !== n.negative;

              )
                f--,
                  (n.negative = 0),
                  n._ishlnsubmul(i, 1, h),
                  n.isZero() || (n.negative ^= 1);
              a && (a.words[h] = f);
            }
            return (
              a && a._strip(),
              n._strip(),
              "div" !== e && 0 !== r && n.iushrn(r),
              { div: a || null, mod: n }
            );
          }),
          (o.prototype.divmod = function (t, e, r) {
            return (
              n(!t.isZero()),
              this.isZero()
                ? { div: new o(0), mod: new o(0) }
                : 0 !== this.negative && 0 === t.negative
                ? ((a = this.neg().divmod(t, e)),
                  "mod" !== e && (i = a.div.neg()),
                  "div" !== e &&
                    ((s = a.mod.neg()), r && 0 !== s.negative && s.iadd(t)),
                  { div: i, mod: s })
                : 0 === this.negative && 0 !== t.negative
                ? ((a = this.divmod(t.neg(), e)),
                  "mod" !== e && (i = a.div.neg()),
                  { div: i, mod: a.mod })
                : 0 !== (this.negative & t.negative)
                ? ((a = this.neg().divmod(t.neg(), e)),
                  "div" !== e &&
                    ((s = a.mod.neg()), r && 0 !== s.negative && s.isub(t)),
                  { div: a.div, mod: s })
                : t.length > this.length || this.cmp(t) < 0
                ? { div: new o(0), mod: this }
                : 1 === t.length
                ? "div" === e
                  ? { div: this.divn(t.words[0]), mod: null }
                  : "mod" === e
                  ? { div: null, mod: new o(this.modrn(t.words[0])) }
                  : {
                      div: this.divn(t.words[0]),
                      mod: new o(this.modrn(t.words[0])),
                    }
                : this._wordDiv(t, e)
            );
            var i, s, a;
          }),
          (o.prototype.div = function (t) {
            return this.divmod(t, "div", !1).div;
          }),
          (o.prototype.mod = function (t) {
            return this.divmod(t, "mod", !1).mod;
          }),
          (o.prototype.umod = function (t) {
            return this.divmod(t, "mod", !0).mod;
          }),
          (o.prototype.divRound = function (t) {
            var e = this.divmod(t);
            if (e.mod.isZero()) return e.div;
            var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              n = t.ushrn(1),
              i = t.andln(1),
              o = r.cmp(n);
            return o < 0 || (1 === i && 0 === o)
              ? e.div
              : 0 !== e.div.negative
              ? e.div.isubn(1)
              : e.div.iaddn(1);
          }),
          (o.prototype.modrn = function (t) {
            var e = t < 0;
            e && (t = -t), n(t <= 67108863);
            for (var r = (1 << 26) % t, i = 0, o = this.length - 1; o >= 0; o--)
              i = (r * i + (0 | this.words[o])) % t;
            return e ? -i : i;
          }),
          (o.prototype.modn = function (t) {
            return this.modrn(t);
          }),
          (o.prototype.idivn = function (t) {
            var e = t < 0;
            e && (t = -t), n(t <= 67108863);
            for (var r = 0, i = this.length - 1; i >= 0; i--) {
              var o = (0 | this.words[i]) + 67108864 * r;
              (this.words[i] = (o / t) | 0), (r = o % t);
            }
            return this._strip(), e ? this.ineg() : this;
          }),
          (o.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (o.prototype.egcd = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e = this,
              r = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var i = new o(1), s = new o(0), a = new o(0), u = new o(1), c = 0;
              e.isEven() && r.isEven();

            )
              e.iushrn(1), r.iushrn(1), ++c;
            for (var l = r.clone(), h = e.clone(); !e.isZero(); ) {
              for (
                var f = 0, d = 1;
                0 === (e.words[0] & d) && f < 26;
                ++f, d <<= 1
              );
              if (f > 0)
                for (e.iushrn(f); f-- > 0; )
                  (i.isOdd() || s.isOdd()) && (i.iadd(l), s.isub(h)),
                    i.iushrn(1),
                    s.iushrn(1);
              for (
                var p = 0, m = 1;
                0 === (r.words[0] & m) && p < 26;
                ++p, m <<= 1
              );
              if (p > 0)
                for (r.iushrn(p); p-- > 0; )
                  (a.isOdd() || u.isOdd()) && (a.iadd(l), u.isub(h)),
                    a.iushrn(1),
                    u.iushrn(1);
              e.cmp(r) >= 0
                ? (e.isub(r), i.isub(a), s.isub(u))
                : (r.isub(e), a.isub(i), u.isub(s));
            }
            return { a: a, b: u, gcd: r.iushln(c) };
          }),
          (o.prototype._invmp = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e = this,
              r = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var i, s = new o(1), a = new o(0), u = r.clone();
              e.cmpn(1) > 0 && r.cmpn(1) > 0;

            ) {
              for (
                var c = 0, l = 1;
                0 === (e.words[0] & l) && c < 26;
                ++c, l <<= 1
              );
              if (c > 0)
                for (e.iushrn(c); c-- > 0; )
                  s.isOdd() && s.iadd(u), s.iushrn(1);
              for (
                var h = 0, f = 1;
                0 === (r.words[0] & f) && h < 26;
                ++h, f <<= 1
              );
              if (h > 0)
                for (r.iushrn(h); h-- > 0; )
                  a.isOdd() && a.iadd(u), a.iushrn(1);
              e.cmp(r) >= 0 ? (e.isub(r), s.isub(a)) : (r.isub(e), a.isub(s));
            }
            return (i = 0 === e.cmpn(1) ? s : a).cmpn(0) < 0 && i.iadd(t), i;
          }),
          (o.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var e = this.clone(),
              r = t.clone();
            (e.negative = 0), (r.negative = 0);
            for (var n = 0; e.isEven() && r.isEven(); n++)
              e.iushrn(1), r.iushrn(1);
            for (;;) {
              for (; e.isEven(); ) e.iushrn(1);
              for (; r.isEven(); ) r.iushrn(1);
              var i = e.cmp(r);
              if (i < 0) {
                var o = e;
                (e = r), (r = o);
              } else if (0 === i || 0 === r.cmpn(1)) break;
              e.isub(r);
            }
            return r.iushln(n);
          }),
          (o.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (o.prototype.isEven = function () {
            return 0 === (1 & this.words[0]);
          }),
          (o.prototype.isOdd = function () {
            return 1 === (1 & this.words[0]);
          }),
          (o.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (o.prototype.bincn = function (t) {
            n("number" === typeof t);
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e;
            if (this.length <= r)
              return this._expand(r + 1), (this.words[r] |= i), this;
            for (var o = i, s = r; 0 !== o && s < this.length; s++) {
              var a = 0 | this.words[s];
              (o = (a += o) >>> 26), (a &= 67108863), (this.words[s] = a);
            }
            return 0 !== o && ((this.words[s] = o), this.length++), this;
          }),
          (o.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (o.prototype.cmpn = function (t) {
            var e,
              r = t < 0;
            if (0 !== this.negative && !r) return -1;
            if (0 === this.negative && r) return 1;
            if ((this._strip(), this.length > 1)) e = 1;
            else {
              r && (t = -t), n(t <= 67108863, "Number is too big");
              var i = 0 | this.words[0];
              e = i === t ? 0 : i < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var e = this.ucmp(t);
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var n = 0 | this.words[r],
                i = 0 | t.words[r];
              if (n !== i) {
                n < i ? (e = -1) : n > i && (e = 1);
                break;
              }
            }
            return e;
          }),
          (o.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (o.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (o.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (o.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (o.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (o.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (o.prototype.lten = function (t) {
            return this.cmpn(t) <= 0;
          }),
          (o.prototype.lte = function (t) {
            return this.cmp(t) <= 0;
          }),
          (o.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (o.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (o.red = function (t) {
            return new C(t);
          }),
          (o.prototype.toRed = function (t) {
            return (
              n(!this.red, "Already a number in reduction context"),
              n(0 === this.negative, "red works only with positives"),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (o.prototype.fromRed = function () {
            return (
              n(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (o.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (o.prototype.forceRed = function (t) {
            return (
              n(!this.red, "Already a number in reduction context"),
              this._forceRed(t)
            );
          }),
          (o.prototype.redAdd = function (t) {
            return (
              n(this.red, "redAdd works only with red numbers"),
              this.red.add(this, t)
            );
          }),
          (o.prototype.redIAdd = function (t) {
            return (
              n(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, t)
            );
          }),
          (o.prototype.redSub = function (t) {
            return (
              n(this.red, "redSub works only with red numbers"),
              this.red.sub(this, t)
            );
          }),
          (o.prototype.redISub = function (t) {
            return (
              n(this.red, "redISub works only with red numbers"),
              this.red.isub(this, t)
            );
          }),
          (o.prototype.redShl = function (t) {
            return (
              n(this.red, "redShl works only with red numbers"),
              this.red.shl(this, t)
            );
          }),
          (o.prototype.redMul = function (t) {
            return (
              n(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            );
          }),
          (o.prototype.redIMul = function (t) {
            return (
              n(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            );
          }),
          (o.prototype.redSqr = function () {
            return (
              n(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (o.prototype.redISqr = function () {
            return (
              n(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (o.prototype.redSqrt = function () {
            return (
              n(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (o.prototype.redInvm = function () {
            return (
              n(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (o.prototype.redNeg = function () {
            return (
              n(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (o.prototype.redPow = function (t) {
            return (
              n(this.red && !t.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, t)
            );
          });
        var b = { k256: null, p224: null, p192: null, p25519: null };
        function A(t, e) {
          (this.name = t),
            (this.p = new o(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function E() {
          A.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function M() {
          A.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function k() {
          A.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function _() {
          A.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function C(t) {
          if ("string" === typeof t) {
            var e = o._prime(t);
            (this.m = e.p), (this.prime = e);
          } else
            n(t.gtn(1), "modulus must be greater than 1"),
              (this.m = t),
              (this.prime = null);
        }
        function N(t) {
          C.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (A.prototype._tmp = function () {
          var t = new o(null);
          return (t.words = new Array(Math.ceil(this.n / 13))), t;
        }),
          (A.prototype.ireduce = function (t) {
            var e,
              r = t;
            do {
              this.split(r, this.tmp),
                (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
            } while (e > this.n);
            var n = e < this.n ? -1 : r.ucmp(this.p);
            return (
              0 === n
                ? ((r.words[0] = 0), (r.length = 1))
                : n > 0
                ? r.isub(this.p)
                : void 0 !== r.strip
                ? r.strip()
                : r._strip(),
              r
            );
          }),
          (A.prototype.split = function (t, e) {
            t.iushrn(this.n, 0, e);
          }),
          (A.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          i(E, A),
          (E.prototype.split = function (t, e) {
            for (var r = 4194303, n = Math.min(t.length, 9), i = 0; i < n; i++)
              e.words[i] = t.words[i];
            if (((e.length = n), t.length <= 9))
              return (t.words[0] = 0), void (t.length = 1);
            var o = t.words[9];
            for (e.words[e.length++] = o & r, i = 10; i < t.length; i++) {
              var s = 0 | t.words[i];
              (t.words[i - 10] = ((s & r) << 4) | (o >>> 22)), (o = s);
            }
            (o >>>= 22),
              (t.words[i - 10] = o),
              0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (E.prototype.imulK = function (t) {
            (t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2);
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 0 | t.words[r];
              (e += 977 * n),
                (t.words[r] = 67108863 & e),
                (e = 64 * n + ((e / 67108864) | 0));
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            );
          }),
          i(M, A),
          i(k, A),
          i(_, A),
          (_.prototype.imulK = function (t) {
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 19 * (0 | t.words[r]) + e,
                i = 67108863 & n;
              (n >>>= 26), (t.words[r] = i), (e = n);
            }
            return 0 !== e && (t.words[t.length++] = e), t;
          }),
          (o._prime = function (t) {
            if (b[t]) return b[t];
            var e;
            if ("k256" === t) e = new E();
            else if ("p224" === t) e = new M();
            else if ("p192" === t) e = new k();
            else {
              if ("p25519" !== t) throw new Error("Unknown prime " + t);
              e = new _();
            }
            return (b[t] = e), e;
          }),
          (C.prototype._verify1 = function (t) {
            n(0 === t.negative, "red works only with positives"),
              n(t.red, "red works only with red numbers");
          }),
          (C.prototype._verify2 = function (t, e) {
            n(0 === (t.negative | e.negative), "red works only with positives"),
              n(t.red && t.red === e.red, "red works only with red numbers");
          }),
          (C.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : (l(t, t.umod(this.m)._forceRed(this)), t);
          }),
          (C.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (C.prototype.add = function (t, e) {
            this._verify2(t, e);
            var r = t.add(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
          }),
          (C.prototype.iadd = function (t, e) {
            this._verify2(t, e);
            var r = t.iadd(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
          }),
          (C.prototype.sub = function (t, e) {
            this._verify2(t, e);
            var r = t.sub(e);
            return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
          }),
          (C.prototype.isub = function (t, e) {
            this._verify2(t, e);
            var r = t.isub(e);
            return r.cmpn(0) < 0 && r.iadd(this.m), r;
          }),
          (C.prototype.shl = function (t, e) {
            return this._verify1(t), this.imod(t.ushln(e));
          }),
          (C.prototype.imul = function (t, e) {
            return this._verify2(t, e), this.imod(t.imul(e));
          }),
          (C.prototype.mul = function (t, e) {
            return this._verify2(t, e), this.imod(t.mul(e));
          }),
          (C.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (C.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (C.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var e = this.m.andln(3);
            if ((n(e % 2 === 1), 3 === e)) {
              var r = this.m.add(new o(1)).iushrn(2);
              return this.pow(t, r);
            }
            for (
              var i = this.m.subn(1), s = 0;
              !i.isZero() && 0 === i.andln(1);

            )
              s++, i.iushrn(1);
            n(!i.isZero());
            var a = new o(1).toRed(this),
              u = a.redNeg(),
              c = this.m.subn(1).iushrn(1),
              l = this.m.bitLength();
            for (
              l = new o(2 * l * l).toRed(this);
              0 !== this.pow(l, c).cmp(u);

            )
              l.redIAdd(u);
            for (
              var h = this.pow(l, i),
                f = this.pow(t, i.addn(1).iushrn(1)),
                d = this.pow(t, i),
                p = s;
              0 !== d.cmp(a);

            ) {
              for (var m = d, g = 0; 0 !== m.cmp(a); g++) m = m.redSqr();
              n(g < p);
              var v = this.pow(h, new o(1).iushln(p - g - 1));
              (f = f.redMul(v)), (h = v.redSqr()), (d = d.redMul(h)), (p = g);
            }
            return f;
          }),
          (C.prototype.invm = function (t) {
            var e = t._invmp(this.m);
            return 0 !== e.negative
              ? ((e.negative = 0), this.imod(e).redNeg())
              : this.imod(e);
          }),
          (C.prototype.pow = function (t, e) {
            if (e.isZero()) return new o(1).toRed(this);
            if (0 === e.cmpn(1)) return t.clone();
            var r = new Array(16);
            (r[0] = new o(1).toRed(this)), (r[1] = t);
            for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
            var i = r[0],
              s = 0,
              a = 0,
              u = e.bitLength() % 26;
            for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
              for (var c = e.words[n], l = u - 1; l >= 0; l--) {
                var h = (c >> l) & 1;
                i !== r[0] && (i = this.sqr(i)),
                  0 !== h || 0 !== s
                    ? ((s <<= 1),
                      (s |= h),
                      (4 === ++a || (0 === n && 0 === l)) &&
                        ((i = this.mul(i, r[s])), (a = 0), (s = 0)))
                    : (a = 0);
              }
              u = 26;
            }
            return i;
          }),
          (C.prototype.convertTo = function (t) {
            var e = t.umod(this.m);
            return e === t ? e.clone() : e;
          }),
          (C.prototype.convertFrom = function (t) {
            var e = t.clone();
            return (e.red = null), e;
          }),
          (o.mont = function (t) {
            return new N(t);
          }),
          i(N, C),
          (N.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (N.prototype.convertFrom = function (t) {
            var e = this.imod(t.mul(this.rinv));
            return (e.red = null), e;
          }),
          (N.prototype.imul = function (t, e) {
            if (t.isZero() || e.isZero())
              return (t.words[0] = 0), (t.length = 1), t;
            var r = t.imul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              o = i;
            return (
              i.cmp(this.m) >= 0
                ? (o = i.isub(this.m))
                : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (N.prototype.mul = function (t, e) {
            if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
            var r = t.mul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              s = i;
            return (
              i.cmp(this.m) >= 0
                ? (s = i.isub(this.m))
                : i.cmpn(0) < 0 && (s = i.iadd(this.m)),
              s._forceRed(this)
            );
          }),
          (N.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((t = r.nmd(t)), this);
    },
    25689: function (t, e, r) {
      "use strict";
      r.d(e, {
        lE: function () {
          return c;
        },
        zo: function () {
          return l;
        },
        xs: function () {
          return y;
        },
        E1: function () {
          return g;
        },
        p3: function () {
          return v;
        },
        Ou: function () {
          return b;
        },
        $P: function () {
          return w;
        },
        $m: function () {
          return A;
        },
        Dv: function () {
          return m;
        },
        _t: function () {
          return u;
        },
        Zq: function () {
          return s;
        },
        A7: function () {
          return d;
        },
        gV: function () {
          return M;
        },
        N: function () {
          return E;
        },
        G1: function () {
          return h;
        },
        Bu: function () {
          return f;
        },
      });
      const n = new (r(87898).Yd)("bytes/5.7.0");
      function i(t) {
        return !!t.toHexString;
      }
      function o(t) {
        return (
          t.slice ||
            (t.slice = function () {
              const e = Array.prototype.slice.call(arguments);
              return o(new Uint8Array(Array.prototype.slice.apply(t, e)));
            }),
          t
        );
      }
      function s(t) {
        return (d(t) && !(t.length % 2)) || u(t);
      }
      function a(t) {
        return "number" === typeof t && t == t && t % 1 === 0;
      }
      function u(t) {
        if (null == t) return !1;
        if (t.constructor === Uint8Array) return !0;
        if ("string" === typeof t) return !1;
        if (!a(t.length) || t.length < 0) return !1;
        for (let e = 0; e < t.length; e++) {
          const r = t[e];
          if (!a(r) || r < 0 || r >= 256) return !1;
        }
        return !0;
      }
      function c(t, e) {
        if ((e || (e = {}), "number" === typeof t)) {
          n.checkSafeUint53(t, "invalid arrayify value");
          const e = [];
          for (; t; ) e.unshift(255 & t), (t = parseInt(String(t / 256)));
          return 0 === e.length && e.push(0), o(new Uint8Array(e));
        }
        if (
          (e.allowMissingPrefix &&
            "string" === typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          i(t) && (t = t.toHexString()),
          d(t))
        ) {
          let r = t.substring(2);
          r.length % 2 &&
            ("left" === e.hexPad
              ? (r = "0" + r)
              : "right" === e.hexPad
              ? (r += "0")
              : n.throwArgumentError("hex data is odd-length", "value", t));
          const i = [];
          for (let t = 0; t < r.length; t += 2)
            i.push(parseInt(r.substring(t, t + 2), 16));
          return o(new Uint8Array(i));
        }
        return u(t)
          ? o(new Uint8Array(t))
          : n.throwArgumentError("invalid arrayify value", "value", t);
      }
      function l(t) {
        const e = t.map((t) => c(t)),
          r = e.reduce((t, e) => t + e.length, 0),
          n = new Uint8Array(r);
        return e.reduce((t, e) => (n.set(e, t), t + e.length), 0), o(n);
      }
      function h(t) {
        let e = c(t);
        if (0 === e.length) return e;
        let r = 0;
        for (; r < e.length && 0 === e[r]; ) r++;
        return r && (e = e.slice(r)), e;
      }
      function f(t, e) {
        (t = c(t)).length > e &&
          n.throwArgumentError("value out of range", "value", arguments[0]);
        const r = new Uint8Array(e);
        return r.set(t, e - t.length), o(r);
      }
      function d(t, e) {
        return (
          !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!e || t.length === 2 + 2 * e)
        );
      }
      const p = "0123456789abcdef";
      function m(t, e) {
        if ((e || (e = {}), "number" === typeof t)) {
          n.checkSafeUint53(t, "invalid hexlify value");
          let e = "";
          for (; t; ) (e = p[15 & t] + e), (t = Math.floor(t / 16));
          return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00";
        }
        if ("bigint" === typeof t)
          return (t = t.toString(16)).length % 2 ? "0x0" + t : "0x" + t;
        if (
          (e.allowMissingPrefix &&
            "string" === typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          i(t))
        )
          return t.toHexString();
        if (d(t))
          return (
            t.length % 2 &&
              ("left" === e.hexPad
                ? (t = "0x0" + t.substring(2))
                : "right" === e.hexPad
                ? (t += "0")
                : n.throwArgumentError("hex data is odd-length", "value", t)),
            t.toLowerCase()
          );
        if (u(t)) {
          let e = "0x";
          for (let r = 0; r < t.length; r++) {
            let n = t[r];
            e += p[(240 & n) >> 4] + p[15 & n];
          }
          return e;
        }
        return n.throwArgumentError("invalid hexlify value", "value", t);
      }
      function g(t) {
        if ("string" !== typeof t) t = m(t);
        else if (!d(t) || t.length % 2) return null;
        return (t.length - 2) / 2;
      }
      function v(t, e, r) {
        return (
          "string" !== typeof t
            ? (t = m(t))
            : (!d(t) || t.length % 2) &&
              n.throwArgumentError("invalid hexData", "value", t),
          (e = 2 + 2 * e),
          null != r ? "0x" + t.substring(e, 2 + 2 * r) : "0x" + t.substring(e)
        );
      }
      function y(t) {
        let e = "0x";
        return (
          t.forEach((t) => {
            e += m(t).substring(2);
          }),
          e
        );
      }
      function w(t) {
        const e = b(m(t, { hexPad: "left" }));
        return "0x" === e ? "0x0" : e;
      }
      function b(t) {
        "string" !== typeof t && (t = m(t)),
          d(t) || n.throwArgumentError("invalid hex string", "value", t),
          (t = t.substring(2));
        let e = 0;
        for (; e < t.length && "0" === t[e]; ) e++;
        return "0x" + t.substring(e);
      }
      function A(t, e) {
        for (
          "string" !== typeof t
            ? (t = m(t))
            : d(t) || n.throwArgumentError("invalid hex string", "value", t),
            t.length > 2 * e + 2 &&
              n.throwArgumentError("value out of range", "value", arguments[1]);
          t.length < 2 * e + 2;

        )
          t = "0x0" + t.substring(2);
        return t;
      }
      function E(t) {
        const e = {
          r: "0x",
          s: "0x",
          _vs: "0x",
          recoveryParam: 0,
          v: 0,
          yParityAndS: "0x",
          compact: "0x",
        };
        if (s(t)) {
          let r = c(t);
          64 === r.length
            ? ((e.v = 27 + (r[32] >> 7)),
              (r[32] &= 127),
              (e.r = m(r.slice(0, 32))),
              (e.s = m(r.slice(32, 64))))
            : 65 === r.length
            ? ((e.r = m(r.slice(0, 32))),
              (e.s = m(r.slice(32, 64))),
              (e.v = r[64]))
            : n.throwArgumentError("invalid signature string", "signature", t),
            e.v < 27 &&
              (0 === e.v || 1 === e.v
                ? (e.v += 27)
                : n.throwArgumentError(
                    "signature invalid v byte",
                    "signature",
                    t
                  )),
            (e.recoveryParam = 1 - (e.v % 2)),
            e.recoveryParam && (r[32] |= 128),
            (e._vs = m(r.slice(32, 64)));
        } else {
          if (
            ((e.r = t.r),
            (e.s = t.s),
            (e.v = t.v),
            (e.recoveryParam = t.recoveryParam),
            (e._vs = t._vs),
            null != e._vs)
          ) {
            const r = f(c(e._vs), 32);
            e._vs = m(r);
            const i = r[0] >= 128 ? 1 : 0;
            null == e.recoveryParam
              ? (e.recoveryParam = i)
              : e.recoveryParam !== i &&
                n.throwArgumentError(
                  "signature recoveryParam mismatch _vs",
                  "signature",
                  t
                ),
              (r[0] &= 127);
            const o = m(r);
            null == e.s
              ? (e.s = o)
              : e.s !== o &&
                n.throwArgumentError(
                  "signature v mismatch _vs",
                  "signature",
                  t
                );
          }
          if (null == e.recoveryParam)
            null == e.v
              ? n.throwArgumentError(
                  "signature missing v and recoveryParam",
                  "signature",
                  t
                )
              : 0 === e.v || 1 === e.v
              ? (e.recoveryParam = e.v)
              : (e.recoveryParam = 1 - (e.v % 2));
          else if (null == e.v) e.v = 27 + e.recoveryParam;
          else {
            const r = 0 === e.v || 1 === e.v ? e.v : 1 - (e.v % 2);
            e.recoveryParam !== r &&
              n.throwArgumentError(
                "signature recoveryParam mismatch v",
                "signature",
                t
              );
          }
          null != e.r && d(e.r)
            ? (e.r = A(e.r, 32))
            : n.throwArgumentError(
                "signature missing or invalid r",
                "signature",
                t
              ),
            null != e.s && d(e.s)
              ? (e.s = A(e.s, 32))
              : n.throwArgumentError(
                  "signature missing or invalid s",
                  "signature",
                  t
                );
          const r = c(e.s);
          r[0] >= 128 &&
            n.throwArgumentError("signature s out of range", "signature", t),
            e.recoveryParam && (r[0] |= 128);
          const i = m(r);
          e._vs &&
            (d(e._vs) ||
              n.throwArgumentError("signature invalid _vs", "signature", t),
            (e._vs = A(e._vs, 32))),
            null == e._vs
              ? (e._vs = i)
              : e._vs !== i &&
                n.throwArgumentError(
                  "signature _vs mismatch v and s",
                  "signature",
                  t
                );
        }
        return (
          (e.yParityAndS = e._vs),
          (e.compact = e.r + e.yParityAndS.substring(2)),
          e
        );
      }
      function M(t) {
        return m(l([(t = E(t)).r, t.s, t.recoveryParam ? "0x1c" : "0x1b"]));
      }
    },
    82729: function (t, e, r) {
      "use strict";
      r.d(e, {
        d: function () {
          return n;
        },
      });
      const n = "0x0000000000000000000000000000000000000000";
    },
    94069: function (t, e, r) {
      "use strict";
      r.d(e, {
        tL: function () {
          return i;
        },
        _Y: function () {
          return o;
        },
        fh: function () {
          return s;
        },
        Py: function () {
          return a;
        },
        Ce: function () {
          return u;
        },
        Bz: function () {
          return c;
        },
        $B: function () {
          return l;
        },
        PS: function () {
          return h;
        },
      });
      var n = r(93442);
      const i = n.O$.from(-1),
        o = n.O$.from(0),
        s = n.O$.from(1),
        a = n.O$.from(2),
        u = n.O$.from("1000000000000000000"),
        c = n.O$.from(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        ),
        l = n.O$.from(
          "-0x8000000000000000000000000000000000000000000000000000000000000000"
        ),
        h = n.O$.from(
          "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        );
    },
    11314: function (t, e, r) {
      "use strict";
      r.d(e, {
        R: function () {
          return n;
        },
      });
      const n =
        "0x0000000000000000000000000000000000000000000000000000000000000000";
    },
    41104: function (t, e, r) {
      "use strict";
      r.d(e, {
        i: function () {
          return n;
        },
      });
      const n = "hash/5.7.0";
    },
    33139: function (t, e, r) {
      "use strict";
      r.d(e, {
        id: function () {
          return o;
        },
      });
      var n = r(82119),
        i = r(10208);
      function o(t) {
        return (0, n.w)((0, i.Y0)(t));
      }
    },
    22806: function (t, e, r) {
      "use strict";
      r.d(e, {
        Kn: function () {
          return R;
        },
        r1: function () {
          return S;
        },
        VM: function () {
          return x;
        },
      });
      var n = r(25689),
        i = r(10208),
        o = r(82119),
        s = r(87898),
        a = r(41104);
      function u(t, e) {
        null == e && (e = 1);
        const r = [],
          n = r.forEach,
          i = function (t, e) {
            n.call(t, function (t) {
              e > 0 && Array.isArray(t) ? i(t, e - 1) : r.push(t);
            });
          };
        return i(t, e), r;
      }
      function c(t) {
        return (function (t) {
          let e = 0;
          return () => t[e++];
        })(
          (function (t) {
            let e = 0;
            function r() {
              return (t[e++] << 8) | t[e++];
            }
            let n = r(),
              i = 1,
              o = [0, 1];
            for (let b = 1; b < n; b++) o.push((i += r()));
            let s = r(),
              a = e;
            e += s;
            let u = 0,
              c = 0;
            function l() {
              return (
                0 == u && ((c = (c << 8) | t[e++]), (u = 8)), (c >> --u) & 1
              );
            }
            const h = Math.pow(2, 31),
              f = h >>> 1,
              d = f >> 1,
              p = h - 1;
            let m = 0;
            for (let b = 0; b < 31; b++) m = (m << 1) | l();
            let g = [],
              v = 0,
              y = h;
            for (;;) {
              let t = Math.floor(((m - v + 1) * i - 1) / y),
                e = 0,
                r = n;
              for (; r - e > 1; ) {
                let n = (e + r) >>> 1;
                t < o[n] ? (r = n) : (e = n);
              }
              if (0 == e) break;
              g.push(e);
              let s = v + Math.floor((y * o[e]) / i),
                a = v + Math.floor((y * o[e + 1]) / i) - 1;
              for (; 0 == ((s ^ a) & f); )
                (m = ((m << 1) & p) | l()),
                  (s = (s << 1) & p),
                  (a = ((a << 1) & p) | 1);
              for (; s & ~a & d; )
                (m = (m & f) | ((m << 1) & (p >>> 1)) | l()),
                  (s = (s << 1) ^ f),
                  (a = ((a ^ f) << 1) | f | 1);
              (v = s), (y = 1 + a - s);
            }
            let w = n - 4;
            return g.map((e) => {
              switch (e - w) {
                case 3:
                  return w + 65792 + ((t[a++] << 16) | (t[a++] << 8) | t[a++]);
                case 2:
                  return w + 256 + ((t[a++] << 8) | t[a++]);
                case 1:
                  return w + t[a++];
                default:
                  return e - 1;
              }
            });
          })(t)
        );
      }
      function l(t) {
        return 1 & t ? ~t >> 1 : t >> 1;
      }
      function h(t, e) {
        let r = Array(t);
        for (let n = 0, i = -1; n < t; n++) r[n] = i += 1 + e();
        return r;
      }
      function f(t, e) {
        let r = Array(t);
        for (let n = 0, i = 0; n < t; n++) r[n] = i += l(e());
        return r;
      }
      function d(t, e) {
        let r = h(t(), t),
          n = t(),
          i = h(n, t),
          o = (function (t, e) {
            let r = Array(t);
            for (let n = 0; n < t; n++) r[n] = 1 + e();
            return r;
          })(n, t);
        for (let s = 0; s < n; s++)
          for (let t = 0; t < o[s]; t++) r.push(i[s] + t);
        return e ? r.map((t) => e[t]) : r;
      }
      function p(t, e, r) {
        let n = Array(t)
          .fill(void 0)
          .map(() => []);
        for (let i = 0; i < e; i++) f(t, r).forEach((t, e) => n[e].push(t));
        return n;
      }
      function m(t, e) {
        let r = 1 + e(),
          n = e(),
          i = (function (t) {
            let e = [];
            for (;;) {
              let r = t();
              if (0 == r) break;
              e.push(r);
            }
            return e;
          })(e);
        return u(
          p(i.length, 1 + t, e).map((t, e) => {
            const o = t[0],
              s = t.slice(1);
            return Array(i[e])
              .fill(void 0)
              .map((t, e) => {
                let i = e * n;
                return [o + e * r, s.map((t) => t + i)];
              });
          })
        );
      }
      function g(t, e) {
        return p(1 + e(), 1 + t, e).map((t) => [t[0], t.slice(1)]);
      }
      const v = c(
          (0, r(91156).J)(
            "AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="
          )
        ),
        y = new Set(d(v)),
        w = new Set(d(v)),
        b = (function (t) {
          let e = [];
          for (;;) {
            let r = t();
            if (0 == r) break;
            e.push(m(r, t));
          }
          for (;;) {
            let r = t() - 1;
            if (r < 0) break;
            e.push(g(r, t));
          }
          return (function (t) {
            const e = {};
            for (let r = 0; r < t.length; r++) {
              const n = t[r];
              e[n[0]] = n[1];
            }
            return e;
          })(u(e));
        })(v),
        A = (function (t) {
          let e = d(t).sort((t, e) => t - e);
          return (function r() {
            let n = [];
            for (;;) {
              let i = d(t, e);
              if (0 == i.length) break;
              n.push({ set: new Set(i), node: r() });
            }
            n.sort((t, e) => e.set.size - t.set.size);
            let i = t(),
              o = i % 3;
            i = (i / 3) | 0;
            let s = !!(1 & i);
            return (
              (i >>= 1),
              { branches: n, valid: o, fe0f: s, save: 1 == i, check: 2 == i }
            );
          })();
        })(v);
      function E(t) {
        return (0, i.XL)(t);
      }
      function M(t) {
        return t.filter((t) => 65039 != t);
      }
      function k(t) {
        for (let r of t.split(".")) {
          let t = E(r);
          try {
            for (let e = t.lastIndexOf(95) - 1; e >= 0; e--)
              if (95 !== t[e])
                throw new Error("underscore only allowed at start");
            if (
              t.length >= 4 &&
              t.every((t) => t < 128) &&
              45 === t[2] &&
              45 === t[3]
            )
              throw new Error("invalid label extension");
          } catch (e) {
            throw new Error(`Invalid label "${r}": ${e.message}`);
          }
        }
        return t;
      }
      function _(t) {
        return k(
          (function (t, e) {
            let r = E(t).reverse(),
              n = [];
            for (; r.length; ) {
              let t = C(r);
              if (t) {
                n.push(...e(t));
                continue;
              }
              let i = r.pop();
              if (y.has(i)) {
                n.push(i);
                continue;
              }
              if (w.has(i)) continue;
              let o = b[i];
              if (!o)
                throw new Error(
                  `Disallowed codepoint: 0x${i.toString(16).toUpperCase()}`
                );
              n.push(...o);
            }
            return k(((i = String.fromCodePoint(...n)), i.normalize("NFC")));
            var i;
          })(t, M)
        );
      }
      function C(t, e) {
        var r;
        let n,
          i,
          o = A,
          s = [],
          a = t.length;
        for (e && (e.length = 0); a; ) {
          let u = t[--a];
          if (
            ((o =
              null === (r = o.branches.find((t) => t.set.has(u))) ||
              void 0 === r
                ? void 0
                : r.node),
            !o)
          )
            break;
          if (o.save) i = u;
          else if (o.check && u === i) break;
          s.push(u),
            o.fe0f && (s.push(65039), a > 0 && 65039 == t[a - 1] && a--),
            o.valid &&
              ((n = s.slice()),
              2 == o.valid && n.splice(1, 1),
              e && e.push(...t.slice(a).reverse()),
              (t.length = a));
        }
        return n;
      }
      const N = new s.Yd(a.i),
        I = new Uint8Array(32);
      function O(t) {
        if (0 === t.length)
          throw new Error("invalid ENS name; empty component");
        return t;
      }
      function P(t) {
        const e = (0, i.Y0)(_(t)),
          r = [];
        if (0 === t.length) return r;
        let n = 0;
        for (let i = 0; i < e.length; i++) {
          46 === e[i] && (r.push(O(e.slice(n, i))), (n = i + 1));
        }
        if (n >= e.length) throw new Error("invalid ENS name; empty component");
        return r.push(O(e.slice(n))), r;
      }
      function S(t) {
        try {
          return 0 !== P(t).length;
        } catch (e) {}
        return !1;
      }
      function x(t) {
        "string" !== typeof t &&
          N.throwArgumentError("invalid ENS name; not a string", "name", t);
        let e = I;
        const r = P(t);
        for (; r.length; ) e = (0, o.w)((0, n.zo)([e, (0, o.w)(r.pop())]));
        return (0, n.Dv)(e);
      }
      function R(t) {
        return (
          (0, n.Dv)(
            (0, n.zo)(
              P(t).map((t) => {
                if (t.length > 63)
                  throw new Error(
                    "invalid DNS encoded entry; length exceeds 63 bytes"
                  );
                const e = new Uint8Array(t.length + 1);
                return e.set(t, 1), (e[0] = e.length - 1), e;
              })
            )
          ) + "00"
        );
      }
      I.fill(0);
    },
    27454: function (t, e, r) {
      "use strict";
      r.d(e, {
        E: function () {
          return C;
        },
      });
      var n = r(91426),
        i = r(93442),
        o = r(25689),
        s = r(82119),
        a = r(98690),
        u = r(87898),
        c = r(41104),
        l = r(33139),
        h = function (t, e, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function s(t) {
              try {
                u(n.next(t));
              } catch (e) {
                o(e);
              }
            }
            function a(t) {
              try {
                u(n.throw(t));
              } catch (e) {
                o(e);
              }
            }
            function u(t) {
              var e;
              t.done
                ? i(t.value)
                : ((e = t.value),
                  e instanceof r
                    ? e
                    : new r(function (t) {
                        t(e);
                      })).then(s, a);
            }
            u((n = n.apply(t, e || [])).next());
          });
        };
      const f = new u.Yd(c.i),
        d = new Uint8Array(32);
      d.fill(0);
      const p = i.O$.from(-1),
        m = i.O$.from(0),
        g = i.O$.from(1),
        v = i.O$.from(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        );
      const y = (0, o.$m)(g.toHexString(), 32),
        w = (0, o.$m)(m.toHexString(), 32),
        b = {
          name: "string",
          version: "string",
          chainId: "uint256",
          verifyingContract: "address",
          salt: "bytes32",
        },
        A = ["name", "version", "chainId", "verifyingContract", "salt"];
      function E(t) {
        return function (e) {
          return (
            "string" !== typeof e &&
              f.throwArgumentError(
                `invalid domain value for ${JSON.stringify(t)}`,
                `domain.${t}`,
                e
              ),
            e
          );
        };
      }
      const M = {
        name: E("name"),
        version: E("version"),
        chainId: function (t) {
          try {
            return i.O$.from(t).toString();
          } catch (e) {}
          return f.throwArgumentError(
            'invalid domain value for "chainId"',
            "domain.chainId",
            t
          );
        },
        verifyingContract: function (t) {
          try {
            return (0, n.Kn)(t).toLowerCase();
          } catch (e) {}
          return f.throwArgumentError(
            'invalid domain value "verifyingContract"',
            "domain.verifyingContract",
            t
          );
        },
        salt: function (t) {
          try {
            const e = (0, o.lE)(t);
            if (32 !== e.length) throw new Error("bad length");
            return (0, o.Dv)(e);
          } catch (e) {}
          return f.throwArgumentError(
            'invalid domain value "salt"',
            "domain.salt",
            t
          );
        },
      };
      function k(t) {
        {
          const e = t.match(/^(u?)int(\d*)$/);
          if (e) {
            const r = "" === e[1],
              n = parseInt(e[2] || "256");
            (n % 8 !== 0 || n > 256 || (e[2] && e[2] !== String(n))) &&
              f.throwArgumentError("invalid numeric width", "type", t);
            const s = v.mask(r ? n - 1 : n),
              a = r ? s.add(g).mul(p) : m;
            return function (e) {
              const r = i.O$.from(e);
              return (
                (r.lt(a) || r.gt(s)) &&
                  f.throwArgumentError(
                    `value out-of-bounds for ${t}`,
                    "value",
                    e
                  ),
                (0, o.$m)(r.toTwos(256).toHexString(), 32)
              );
            };
          }
        }
        {
          const e = t.match(/^bytes(\d+)$/);
          if (e) {
            const r = parseInt(e[1]);
            return (
              (0 === r || r > 32 || e[1] !== String(r)) &&
                f.throwArgumentError("invalid bytes width", "type", t),
              function (e) {
                return (
                  (0, o.lE)(e).length !== r &&
                    f.throwArgumentError(`invalid length for ${t}`, "value", e),
                  (function (t) {
                    const e = (0, o.lE)(t),
                      r = e.length % 32;
                    return r ? (0, o.xs)([e, d.slice(r)]) : (0, o.Dv)(e);
                  })(e)
                );
              }
            );
          }
        }
        switch (t) {
          case "address":
            return function (t) {
              return (0, o.$m)((0, n.Kn)(t), 32);
            };
          case "bool":
            return function (t) {
              return t ? y : w;
            };
          case "bytes":
            return function (t) {
              return (0, s.w)(t);
            };
          case "string":
            return function (t) {
              return (0, l.id)(t);
            };
        }
        return null;
      }
      function _(t, e) {
        return `${t}(${e
          .map(({ name: t, type: e }) => e + " " + t)
          .join(",")})`;
      }
      class C {
        constructor(t) {
          (0, a.zG)(this, "types", Object.freeze((0, a.p$)(t))),
            (0, a.zG)(this, "_encoderCache", {}),
            (0, a.zG)(this, "_types", {});
          const e = {},
            r = {},
            n = {};
          Object.keys(t).forEach((t) => {
            (e[t] = {}), (r[t] = []), (n[t] = {});
          });
          for (const o in t) {
            const n = {};
            t[o].forEach((i) => {
              n[i.name] &&
                f.throwArgumentError(
                  `duplicate variable name ${JSON.stringify(
                    i.name
                  )} in ${JSON.stringify(o)}`,
                  "types",
                  t
                ),
                (n[i.name] = !0);
              const s = i.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
              s === o &&
                f.throwArgumentError(
                  `circular type reference to ${JSON.stringify(s)}`,
                  "types",
                  t
                );
              k(s) ||
                (r[s] ||
                  f.throwArgumentError(
                    `unknown type ${JSON.stringify(s)}`,
                    "types",
                    t
                  ),
                r[s].push(o),
                (e[o][s] = !0));
            });
          }
          const i = Object.keys(r).filter((t) => 0 === r[t].length);
          0 === i.length
            ? f.throwArgumentError("missing primary type", "types", t)
            : i.length > 1 &&
              f.throwArgumentError(
                `ambiguous primary types or unused types: ${i
                  .map((t) => JSON.stringify(t))
                  .join(", ")}`,
                "types",
                t
              ),
            (0, a.zG)(this, "primaryType", i[0]),
            (function i(o, s) {
              s[o] &&
                f.throwArgumentError(
                  `circular type reference to ${JSON.stringify(o)}`,
                  "types",
                  t
                ),
                (s[o] = !0),
                Object.keys(e[o]).forEach((t) => {
                  r[t] &&
                    (i(t, s),
                    Object.keys(s).forEach((e) => {
                      n[e][t] = !0;
                    }));
                }),
                delete s[o];
            })(this.primaryType, {});
          for (const o in n) {
            const e = Object.keys(n[o]);
            e.sort(),
              (this._types[o] = _(o, t[o]) + e.map((e) => _(e, t[e])).join(""));
          }
        }
        getEncoder(t) {
          let e = this._encoderCache[t];
          return e || (e = this._encoderCache[t] = this._getEncoder(t)), e;
        }
        _getEncoder(t) {
          {
            const e = k(t);
            if (e) return e;
          }
          const e = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
          if (e) {
            const t = e[1],
              r = this.getEncoder(t),
              n = parseInt(e[3]);
            return (e) => {
              n >= 0 &&
                e.length !== n &&
                f.throwArgumentError(
                  "array length mismatch; expected length ${ arrayLength }",
                  "value",
                  e
                );
              let i = e.map(r);
              return this._types[t] && (i = i.map(s.w)), (0, s.w)((0, o.xs)(i));
            };
          }
          const r = this.types[t];
          if (r) {
            const e = (0, l.id)(this._types[t]);
            return (t) => {
              const n = r.map(({ name: e, type: r }) => {
                const n = this.getEncoder(r)(t[e]);
                return this._types[r] ? (0, s.w)(n) : n;
              });
              return n.unshift(e), (0, o.xs)(n);
            };
          }
          return f.throwArgumentError(`unknown type: ${t}`, "type", t);
        }
        encodeType(t) {
          const e = this._types[t];
          return (
            e ||
              f.throwArgumentError(
                `unknown type: ${JSON.stringify(t)}`,
                "name",
                t
              ),
            e
          );
        }
        encodeData(t, e) {
          return this.getEncoder(t)(e);
        }
        hashStruct(t, e) {
          return (0, s.w)(this.encodeData(t, e));
        }
        encode(t) {
          return this.encodeData(this.primaryType, t);
        }
        hash(t) {
          return this.hashStruct(this.primaryType, t);
        }
        _visit(t, e, r) {
          if (k(t)) return r(t, e);
          const n = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
          if (n) {
            const t = n[1],
              i = parseInt(n[3]);
            return (
              i >= 0 &&
                e.length !== i &&
                f.throwArgumentError(
                  "array length mismatch; expected length ${ arrayLength }",
                  "value",
                  e
                ),
              e.map((e) => this._visit(t, e, r))
            );
          }
          const i = this.types[t];
          return i
            ? i.reduce(
                (t, { name: n, type: i }) => (
                  (t[n] = this._visit(i, e[n], r)), t
                ),
                {}
              )
            : f.throwArgumentError(`unknown type: ${t}`, "type", t);
        }
        visit(t, e) {
          return this._visit(this.primaryType, t, e);
        }
        static from(t) {
          return new C(t);
        }
        static getPrimaryType(t) {
          return C.from(t).primaryType;
        }
        static hashStruct(t, e, r) {
          return C.from(e).hashStruct(t, r);
        }
        static hashDomain(t) {
          const e = [];
          for (const r in t) {
            const n = b[r];
            n ||
              f.throwArgumentError(
                `invalid typed-data domain key: ${JSON.stringify(r)}`,
                "domain",
                t
              ),
              e.push({ name: r, type: n });
          }
          return (
            e.sort((t, e) => A.indexOf(t.name) - A.indexOf(e.name)),
            C.hashStruct("EIP712Domain", { EIP712Domain: e }, t)
          );
        }
        static encode(t, e, r) {
          return (0, o.xs)(["0x1901", C.hashDomain(t), C.from(e).hash(r)]);
        }
        static hash(t, e, r) {
          return (0, s.w)(C.encode(t, e, r));
        }
        static resolveNames(t, e, r, n) {
          return h(this, void 0, void 0, function* () {
            t = (0, a.DC)(t);
            const i = {};
            t.verifyingContract &&
              !(0, o.A7)(t.verifyingContract, 20) &&
              (i[t.verifyingContract] = "0x");
            const s = C.from(e);
            s.visit(
              r,
              (t, e) => (
                "address" !== t || (0, o.A7)(e, 20) || (i[e] = "0x"), e
              )
            );
            for (const t in i) i[t] = yield n(t);
            return (
              t.verifyingContract &&
                i[t.verifyingContract] &&
                (t.verifyingContract = i[t.verifyingContract]),
              (r = s.visit(r, (t, e) => ("address" === t && i[e] ? i[e] : e))),
              { domain: t, value: r }
            );
          });
        }
        static getPayload(t, e, r) {
          C.hashDomain(t);
          const n = {},
            s = [];
          A.forEach((e) => {
            const r = t[e];
            null != r && ((n[e] = M[e](r)), s.push({ name: e, type: b[e] }));
          });
          const u = C.from(e),
            c = (0, a.DC)(e);
          return (
            c.EIP712Domain
              ? f.throwArgumentError(
                  "types must not contain EIP712Domain type",
                  "types.EIP712Domain",
                  e
                )
              : (c.EIP712Domain = s),
            u.encode(r),
            {
              types: c,
              domain: n,
              primaryType: u.primaryType,
              message: u.visit(r, (t, e) => {
                if (t.match(/^bytes(\d*)/)) return (0, o.Dv)((0, o.lE)(e));
                if (t.match(/^u?int/)) return i.O$.from(e).toString();
                switch (t) {
                  case "address":
                    return e.toLowerCase();
                  case "bool":
                    return !!e;
                  case "string":
                    return (
                      "string" !== typeof e &&
                        f.throwArgumentError("invalid string", "value", e),
                      e
                    );
                }
                return f.throwArgumentError("unsupported type", "type", t);
              }),
            }
          );
        }
      }
    },
    82119: function (t, e, r) {
      "use strict";
      r.d(e, {
        w: function () {
          return s;
        },
      });
      var n = r(93535),
        i = r.n(n),
        o = r(25689);
      function s(t) {
        return "0x" + i().keccak_256((0, o.lE)(t));
      }
    },
    87898: function (t, e, r) {
      "use strict";
      r.d(e, {
        jK: function () {
          return l;
        },
        Yd: function () {
          return f;
        },
      });
      let n = !1,
        i = !1;
      const o = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let s = o.default,
        a = null;
      const u = (function () {
        try {
          const t = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((e) => {
              try {
                if ("test" !== "test".normalize(e))
                  throw new Error("bad normalize");
              } catch (r) {
                t.push(e);
              }
            }),
            t.length)
          )
            throw new Error("missing " + t.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (t) {
          return t.message;
        }
        return null;
      })();
      var c, l;
      !(function (t) {
        (t.DEBUG = "DEBUG"),
          (t.INFO = "INFO"),
          (t.WARNING = "WARNING"),
          (t.ERROR = "ERROR"),
          (t.OFF = "OFF");
      })(c || (c = {})),
        (function (t) {
          (t.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (t.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
            (t.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
            (t.NETWORK_ERROR = "NETWORK_ERROR"),
            (t.SERVER_ERROR = "SERVER_ERROR"),
            (t.TIMEOUT = "TIMEOUT"),
            (t.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
            (t.NUMERIC_FAULT = "NUMERIC_FAULT"),
            (t.MISSING_NEW = "MISSING_NEW"),
            (t.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
            (t.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
            (t.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
            (t.CALL_EXCEPTION = "CALL_EXCEPTION"),
            (t.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
            (t.NONCE_EXPIRED = "NONCE_EXPIRED"),
            (t.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
            (t.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
            (t.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
            (t.ACTION_REJECTED = "ACTION_REJECTED");
        })(l || (l = {}));
      const h = "0123456789abcdef";
      class f {
        constructor(t) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: t,
            writable: !1,
          });
        }
        _log(t, e) {
          const r = t.toLowerCase();
          null == o[r] &&
            this.throwArgumentError("invalid log level name", "logLevel", t),
            s > o[r] || console.log.apply(console, e);
        }
        debug(...t) {
          this._log(f.levels.DEBUG, t);
        }
        info(...t) {
          this._log(f.levels.INFO, t);
        }
        warn(...t) {
          this._log(f.levels.WARNING, t);
        }
        makeError(t, e, r) {
          if (i) return this.makeError("censored error", e, {});
          e || (e = f.errors.UNKNOWN_ERROR), r || (r = {});
          const n = [];
          Object.keys(r).forEach((t) => {
            const e = r[t];
            try {
              if (e instanceof Uint8Array) {
                let r = "";
                for (let t = 0; t < e.length; t++)
                  (r += h[e[t] >> 4]), (r += h[15 & e[t]]);
                n.push(t + "=Uint8Array(0x" + r + ")");
              } else n.push(t + "=" + JSON.stringify(e));
            } catch (a) {
              n.push(t + "=" + JSON.stringify(r[t].toString()));
            }
          }),
            n.push(`code=${e}`),
            n.push(`version=${this.version}`);
          const o = t;
          let s = "";
          switch (e) {
            case l.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              const e = t;
              switch (e) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + e;
                  break;
                case "negative-power":
                case "negative-width":
                  s += "-unsupported";
                  break;
                case "unbound-bitwise-result":
                  s += "-unbound-result";
              }
              break;
            }
            case l.CALL_EXCEPTION:
            case l.INSUFFICIENT_FUNDS:
            case l.MISSING_NEW:
            case l.NONCE_EXPIRED:
            case l.REPLACEMENT_UNDERPRICED:
            case l.TRANSACTION_REPLACED:
            case l.UNPREDICTABLE_GAS_LIMIT:
              s = e;
          }
          s && (t += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            n.length && (t += " (" + n.join(", ") + ")");
          const a = new Error(t);
          return (
            (a.reason = o),
            (a.code = e),
            Object.keys(r).forEach(function (t) {
              a[t] = r[t];
            }),
            a
          );
        }
        throwError(t, e, r) {
          throw this.makeError(t, e, r);
        }
        throwArgumentError(t, e, r) {
          return this.throwError(t, f.errors.INVALID_ARGUMENT, {
            argument: e,
            value: r,
          });
        }
        assert(t, e, r, n) {
          t || this.throwError(e, r, n);
        }
        assertArgument(t, e, r, n) {
          t || this.throwArgumentError(e, r, n);
        }
        checkNormalize(t) {
          null == t && (t = "platform missing String.prototype.normalize"),
            u &&
              this.throwError(
                "platform missing String.prototype.normalize",
                f.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: u }
              );
        }
        checkSafeUint53(t, e) {
          "number" === typeof t &&
            (null == e && (e = "value not safe"),
            (t < 0 || t >= 9007199254740991) &&
              this.throwError(e, f.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: t,
              }),
            t % 1 &&
              this.throwError(e, f.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: t,
              }));
        }
        checkArgumentCount(t, e, r) {
          (r = r ? ": " + r : ""),
            t < e &&
              this.throwError(
                "missing argument" + r,
                f.errors.MISSING_ARGUMENT,
                { count: t, expectedCount: e }
              ),
            t > e &&
              this.throwError(
                "too many arguments" + r,
                f.errors.UNEXPECTED_ARGUMENT,
                { count: t, expectedCount: e }
              );
        }
        checkNew(t, e) {
          (t !== Object && null != t) ||
            this.throwError("missing new", f.errors.MISSING_NEW, {
              name: e.name,
            });
        }
        checkAbstract(t, e) {
          t === e
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(e.name) +
                  " directly; use a sub-class",
                f.errors.UNSUPPORTED_OPERATION,
                { name: t.name, operation: "new" }
              )
            : (t !== Object && null != t) ||
              this.throwError("missing new", f.errors.MISSING_NEW, {
                name: e.name,
              });
        }
        static globalLogger() {
          return a || (a = new f("logger/5.7.0")), a;
        }
        static setCensorship(t, e) {
          if (
            (!t &&
              e &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                f.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" }
              ),
            n)
          ) {
            if (!t) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              f.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" }
            );
          }
          (i = !!t), (n = !!e);
        }
        static setLogLevel(t) {
          const e = o[t.toLowerCase()];
          null != e
            ? (s = e)
            : f.globalLogger().warn("invalid log level - " + t);
        }
        static from(t) {
          return new f(t);
        }
      }
      (f.errors = l), (f.levels = c);
    },
    40426: function (t, e, r) {
      "use strict";
      r.d(e, {
        H: function () {
          return l;
        },
      });
      const n = new (r(87898).Yd)("networks/5.7.0");
      function i(t) {
        const e = function (e, r) {
          null == r && (r = {});
          const n = [];
          if (e.InfuraProvider && "-" !== r.infura)
            try {
              n.push(new e.InfuraProvider(t, r.infura));
            } catch (i) {}
          if (e.EtherscanProvider && "-" !== r.etherscan)
            try {
              n.push(new e.EtherscanProvider(t, r.etherscan));
            } catch (i) {}
          if (e.AlchemyProvider && "-" !== r.alchemy)
            try {
              n.push(new e.AlchemyProvider(t, r.alchemy));
            } catch (i) {}
          if (e.PocketProvider && "-" !== r.pocket) {
            const o = ["goerli", "ropsten", "rinkeby"];
            try {
              const i = new e.PocketProvider(t, r.pocket);
              i.network && -1 === o.indexOf(i.network.name) && n.push(i);
            } catch (i) {}
          }
          if (e.CloudflareProvider && "-" !== r.cloudflare)
            try {
              n.push(new e.CloudflareProvider(t));
            } catch (i) {}
          if (e.AnkrProvider && "-" !== r.ankr)
            try {
              const i = ["ropsten"],
                o = new e.AnkrProvider(t, r.ankr);
              o.network && -1 === i.indexOf(o.network.name) && n.push(o);
            } catch (i) {}
          if (0 === n.length) return null;
          if (e.FallbackProvider) {
            let i = 1;
            return (
              null != r.quorum ? (i = r.quorum) : "homestead" === t && (i = 2),
              new e.FallbackProvider(n, i)
            );
          }
          return n[0];
        };
        return (
          (e.renetwork = function (t) {
            return i(t);
          }),
          e
        );
      }
      function o(t, e) {
        const r = function (r, n) {
          return r.JsonRpcProvider ? new r.JsonRpcProvider(t, e) : null;
        };
        return (
          (r.renetwork = function (e) {
            return o(t, e);
          }),
          r
        );
      }
      const s = {
          chainId: 1,
          ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          name: "homestead",
          _defaultProvider: i("homestead"),
        },
        a = {
          chainId: 3,
          ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          name: "ropsten",
          _defaultProvider: i("ropsten"),
        },
        u = {
          chainId: 63,
          name: "classicMordor",
          _defaultProvider: o(
            "https://www.ethercluster.com/mordor",
            "classicMordor"
          ),
        },
        c = {
          unspecified: { chainId: 0, name: "unspecified" },
          homestead: s,
          mainnet: s,
          morden: { chainId: 2, name: "morden" },
          ropsten: a,
          testnet: a,
          rinkeby: {
            chainId: 4,
            ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            name: "rinkeby",
            _defaultProvider: i("rinkeby"),
          },
          kovan: { chainId: 42, name: "kovan", _defaultProvider: i("kovan") },
          goerli: {
            chainId: 5,
            ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            name: "goerli",
            _defaultProvider: i("goerli"),
          },
          kintsugi: { chainId: 1337702, name: "kintsugi" },
          classic: {
            chainId: 61,
            name: "classic",
            _defaultProvider: o("https://www.ethercluster.com/etc", "classic"),
          },
          classicMorden: { chainId: 62, name: "classicMorden" },
          classicMordor: u,
          classicTestnet: u,
          classicKotti: {
            chainId: 6,
            name: "classicKotti",
            _defaultProvider: o(
              "https://www.ethercluster.com/kotti",
              "classicKotti"
            ),
          },
          xdai: { chainId: 100, name: "xdai" },
          matic: { chainId: 137, name: "matic", _defaultProvider: i("matic") },
          maticmum: { chainId: 80001, name: "maticmum" },
          optimism: {
            chainId: 10,
            name: "optimism",
            _defaultProvider: i("optimism"),
          },
          "optimism-kovan": { chainId: 69, name: "optimism-kovan" },
          "optimism-goerli": { chainId: 420, name: "optimism-goerli" },
          arbitrum: { chainId: 42161, name: "arbitrum" },
          "arbitrum-rinkeby": { chainId: 421611, name: "arbitrum-rinkeby" },
          "arbitrum-goerli": { chainId: 421613, name: "arbitrum-goerli" },
          bnb: { chainId: 56, name: "bnb" },
          bnbt: { chainId: 97, name: "bnbt" },
        };
      function l(t) {
        if (null == t) return null;
        if ("number" === typeof t) {
          for (const e in c) {
            const r = c[e];
            if (r.chainId === t)
              return {
                name: r.name,
                chainId: r.chainId,
                ensAddress: r.ensAddress || null,
                _defaultProvider: r._defaultProvider || null,
              };
          }
          return { chainId: t, name: "unknown" };
        }
        if ("string" === typeof t) {
          const e = c[t];
          return null == e
            ? null
            : {
                name: e.name,
                chainId: e.chainId,
                ensAddress: e.ensAddress,
                _defaultProvider: e._defaultProvider || null,
              };
        }
        const e = c[t.name];
        if (!e)
          return (
            "number" !== typeof t.chainId &&
              n.throwArgumentError("invalid network chainId", "network", t),
            t
          );
        0 !== t.chainId &&
          t.chainId !== e.chainId &&
          n.throwArgumentError("network chainId mismatch", "network", t);
        let r = t._defaultProvider || null;
        var i;
        return (
          null == r &&
            e._defaultProvider &&
            (r =
              (i = e._defaultProvider) && "function" === typeof i.renetwork
                ? e._defaultProvider.renetwork(t)
                : e._defaultProvider),
          {
            name: t.name,
            chainId: e.chainId,
            ensAddress: t.ensAddress || e.ensAddress || null,
            _defaultProvider: r,
          }
        );
      }
    },
    98690: function (t, e, r) {
      "use strict";
      r.d(e, {
        dk: function () {
          return m;
        },
        uj: function () {
          return c;
        },
        p$: function () {
          return p;
        },
        zG: function () {
          return s;
        },
        tu: function () {
          return a;
        },
        mE: function () {
          return u;
        },
        DC: function () {
          return l;
        },
      });
      var n = r(87898);
      var i = function (t, e, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(t) {
            try {
              u(n.next(t));
            } catch (e) {
              o(e);
            }
          }
          function a(t) {
            try {
              u(n.throw(t));
            } catch (e) {
              o(e);
            }
          }
          function u(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })).then(s, a);
          }
          u((n = n.apply(t, e || [])).next());
        });
      };
      const o = new n.Yd("properties/5.7.0");
      function s(t, e, r) {
        Object.defineProperty(t, e, { enumerable: !0, value: r, writable: !1 });
      }
      function a(t, e) {
        for (let r = 0; r < 32; r++) {
          if (t[e]) return t[e];
          if (!t.prototype || "object" !== typeof t.prototype) break;
          t = Object.getPrototypeOf(t.prototype).constructor;
        }
        return null;
      }
      function u(t) {
        return i(this, void 0, void 0, function* () {
          const e = Object.keys(t).map((e) => {
            const r = t[e];
            return Promise.resolve(r).then((t) => ({ key: e, value: t }));
          });
          return (yield Promise.all(e)).reduce(
            (t, e) => ((t[e.key] = e.value), t),
            {}
          );
        });
      }
      function c(t, e) {
        (t && "object" === typeof t) ||
          o.throwArgumentError("invalid object", "object", t),
          Object.keys(t).forEach((r) => {
            e[r] ||
              o.throwArgumentError(
                "invalid object key - " + r,
                "transaction:" + r,
                t
              );
          });
      }
      function l(t) {
        const e = {};
        for (const r in t) e[r] = t[r];
        return e;
      }
      const h = {
        bigint: !0,
        boolean: !0,
        function: !0,
        number: !0,
        string: !0,
      };
      function f(t) {
        if (void 0 === t || null === t || h[typeof t]) return !0;
        if (Array.isArray(t) || "object" === typeof t) {
          if (!Object.isFrozen(t)) return !1;
          const r = Object.keys(t);
          for (let n = 0; n < r.length; n++) {
            let i = null;
            try {
              i = t[r[n]];
            } catch (e) {
              continue;
            }
            if (!f(i)) return !1;
          }
          return !0;
        }
        return o.throwArgumentError("Cannot deepCopy " + typeof t, "object", t);
      }
      function d(t) {
        if (f(t)) return t;
        if (Array.isArray(t)) return Object.freeze(t.map((t) => p(t)));
        if ("object" === typeof t) {
          const e = {};
          for (const r in t) {
            const n = t[r];
            void 0 !== n && s(e, r, p(n));
          }
          return e;
        }
        return o.throwArgumentError("Cannot deepCopy " + typeof t, "object", t);
      }
      function p(t) {
        return d(t);
      }
      class m {
        constructor(t) {
          for (const e in t) this[e] = p(t[e]);
        }
      }
    },
    32565: function (t, e, r) {
      "use strict";
      r.d(e, {
        i: function () {
          return n;
        },
      });
      const n = "providers/5.7.0";
    },
    81586: function (t, e, r) {
      "use strict";
      r.d(e, {
        H2: function () {
          return F;
        },
        Zk: function () {
          return G;
        },
      });
      var n = r(9133),
        i = r(91156),
        o = r(96048),
        s = r(93442),
        a = r(25689),
        u = r(11314),
        c = r(22806),
        l = r(40426),
        h = r(98690),
        f = r(14956),
        d = r(10208),
        p = r(28676),
        m = r(83428),
        g = r.n(m),
        v = r(87898),
        y = r(32565),
        w = r(12648),
        b = function (t, e, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function s(t) {
              try {
                u(n.next(t));
              } catch (e) {
                o(e);
              }
            }
            function a(t) {
              try {
                u(n.throw(t));
              } catch (e) {
                o(e);
              }
            }
            function u(t) {
              var e;
              t.done
                ? i(t.value)
                : ((e = t.value),
                  e instanceof r
                    ? e
                    : new r(function (t) {
                        t(e);
                      })).then(s, a);
            }
            u((n = n.apply(t, e || [])).next());
          });
        };
      const A = new v.Yd(y.i);
      function E(t) {
        return null == t
          ? "null"
          : (32 !== (0, a.E1)(t) &&
              A.throwArgumentError("invalid topic", "topic", t),
            t.toLowerCase());
      }
      function M(t) {
        for (t = t.slice(); t.length > 0 && null == t[t.length - 1]; ) t.pop();
        return t
          .map((t) => {
            if (Array.isArray(t)) {
              const e = {};
              t.forEach((t) => {
                e[E(t)] = !0;
              });
              const r = Object.keys(e);
              return r.sort(), r.join("|");
            }
            return E(t);
          })
          .join("&");
      }
      function k(t) {
        if ("string" === typeof t) {
          if (((t = t.toLowerCase()), 32 === (0, a.E1)(t))) return "tx:" + t;
          if (-1 === t.indexOf(":")) return t;
        } else {
          if (Array.isArray(t)) return "filter:*:" + M(t);
          if (n.Sg.isForkEvent(t))
            throw (A.warn("not implemented"), new Error("not implemented"));
          if (t && "object" === typeof t)
            return "filter:" + (t.address || "*") + ":" + M(t.topics || []);
        }
        throw new Error("invalid event - " + t);
      }
      function _() {
        return new Date().getTime();
      }
      function C(t) {
        return new Promise((e) => {
          setTimeout(e, t);
        });
      }
      const N = ["block", "network", "pending", "poll"];
      class I {
        constructor(t, e, r) {
          (0, h.zG)(this, "tag", t),
            (0, h.zG)(this, "listener", e),
            (0, h.zG)(this, "once", r),
            (this._lastBlockNumber = -2),
            (this._inflight = !1);
        }
        get event() {
          switch (this.type) {
            case "tx":
              return this.hash;
            case "filter":
              return this.filter;
          }
          return this.tag;
        }
        get type() {
          return this.tag.split(":")[0];
        }
        get hash() {
          const t = this.tag.split(":");
          return "tx" !== t[0] ? null : t[1];
        }
        get filter() {
          const t = this.tag.split(":");
          if ("filter" !== t[0]) return null;
          const e = t[1],
            r =
              "" === (n = t[2])
                ? []
                : n.split(/&/g).map((t) => {
                    if ("" === t) return [];
                    const e = t
                      .split("|")
                      .map((t) => ("null" === t ? null : t));
                    return 1 === e.length ? e[0] : e;
                  });
          var n;
          const i = {};
          return (
            r.length > 0 && (i.topics = r), e && "*" !== e && (i.address = e), i
          );
        }
        pollable() {
          return this.tag.indexOf(":") >= 0 || N.indexOf(this.tag) >= 0;
        }
      }
      const O = {
        0: { symbol: "btc", p2pkh: 0, p2sh: 5, prefix: "bc" },
        2: { symbol: "ltc", p2pkh: 48, p2sh: 50, prefix: "ltc" },
        3: { symbol: "doge", p2pkh: 30, p2sh: 22 },
        60: { symbol: "eth", ilk: "eth" },
        61: { symbol: "etc", ilk: "eth" },
        700: { symbol: "xdai", ilk: "eth" },
      };
      function P(t) {
        return (0, a.$m)(s.O$.from(t).toHexString(), 32);
      }
      function S(t) {
        return o.eU.encode(
          (0, a.zo)([t, (0, a.p3)((0, f.JQ)((0, f.JQ)(t)), 0, 4)])
        );
      }
      const x = new RegExp("^(ipfs)://(.*)$", "i"),
        R = [
          new RegExp("^(https)://(.*)$", "i"),
          new RegExp("^(data):(.*)$", "i"),
          x,
          new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i"),
        ];
      function T(t, e) {
        try {
          return (0, d.ZN)(B(t, e));
        } catch (r) {}
        return null;
      }
      function B(t, e) {
        if ("0x" === t) return null;
        const r = s.O$.from((0, a.p3)(t, e, e + 32)).toNumber(),
          n = s.O$.from((0, a.p3)(t, r, r + 32)).toNumber();
        return (0, a.p3)(t, r + 32, r + 32 + n);
      }
      function L(t) {
        return (
          t.match(/^ipfs:\/\/ipfs\//i)
            ? (t = t.substring(12))
            : t.match(/^ipfs:\/\//i)
            ? (t = t.substring(7))
            : A.throwArgumentError("unsupported IPFS format", "link", t),
          `https://gateway.ipfs.io/ipfs/${t}`
        );
      }
      function U(t) {
        const e = (0, a.lE)(t);
        if (e.length > 32) throw new Error("internal; should not happen");
        const r = new Uint8Array(32);
        return r.set(e, 32 - e.length), r;
      }
      function D(t) {
        if (t.length % 32 === 0) return t;
        const e = new Uint8Array(32 * Math.ceil(t.length / 32));
        return e.set(t), e;
      }
      function j(t) {
        const e = [];
        let r = 0;
        for (let n = 0; n < t.length; n++) e.push(null), (r += 32);
        for (let n = 0; n < t.length; n++) {
          const i = (0, a.lE)(t[n]);
          (e[n] = U(r)),
            e.push(U(i.length)),
            e.push(D(i)),
            (r += 32 + 32 * Math.ceil(i.length / 32));
        }
        return (0, a.xs)(e);
      }
      class F {
        constructor(t, e, r, n) {
          (0, h.zG)(this, "provider", t),
            (0, h.zG)(this, "name", r),
            (0, h.zG)(this, "address", t.formatter.address(e)),
            (0, h.zG)(this, "_resolvedAddress", n);
        }
        supportsWildcard() {
          return (
            this._supportsEip2544 ||
              (this._supportsEip2544 = this.provider
                .call({
                  to: this.address,
                  data: "0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000",
                })
                .then((t) => s.O$.from(t).eq(1))
                .catch((t) => {
                  if (t.code === v.Yd.errors.CALL_EXCEPTION) return !1;
                  throw ((this._supportsEip2544 = null), t);
                })),
            this._supportsEip2544
          );
        }
        _fetch(t, e) {
          return b(this, void 0, void 0, function* () {
            const r = {
              to: this.address,
              ccipReadEnabled: !0,
              data: (0, a.xs)([t, (0, c.VM)(this.name), e || "0x"]),
            };
            let n = !1;
            (yield this.supportsWildcard()) &&
              ((n = !0),
              (r.data = (0, a.xs)([
                "0x9061b923",
                j([(0, c.Kn)(this.name), r.data]),
              ])));
            try {
              let t = yield this.provider.call(r);
              return (
                (0, a.lE)(t).length % 32 === 4 &&
                  A.throwError(
                    "resolver threw error",
                    v.Yd.errors.CALL_EXCEPTION,
                    { transaction: r, data: t }
                  ),
                n && (t = B(t, 0)),
                t
              );
            } catch (i) {
              if (i.code === v.Yd.errors.CALL_EXCEPTION) return null;
              throw i;
            }
          });
        }
        _fetchBytes(t, e) {
          return b(this, void 0, void 0, function* () {
            const r = yield this._fetch(t, e);
            return null != r ? B(r, 0) : null;
          });
        }
        _getAddress(t, e) {
          const r = O[String(t)];
          if (
            (null == r &&
              A.throwError(
                `unsupported coin type: ${t}`,
                v.Yd.errors.UNSUPPORTED_OPERATION,
                { operation: `getAddress(${t})` }
              ),
            "eth" === r.ilk)
          )
            return this.provider.formatter.address(e);
          const n = (0, a.lE)(e);
          if (null != r.p2pkh) {
            const t = e.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
            if (t) {
              const e = parseInt(t[1], 16);
              if (t[2].length === 2 * e && e >= 1 && e <= 75)
                return S((0, a.zo)([[r.p2pkh], "0x" + t[2]]));
            }
          }
          if (null != r.p2sh) {
            const t = e.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
            if (t) {
              const e = parseInt(t[1], 16);
              if (t[2].length === 2 * e && e >= 1 && e <= 75)
                return S((0, a.zo)([[r.p2sh], "0x" + t[2]]));
            }
          }
          if (null != r.prefix) {
            const t = n[1];
            let e = n[0];
            if (
              (0 === e ? 20 !== t && 32 !== t && (e = -1) : (e = -1),
              e >= 0 && n.length === 2 + t && t >= 1 && t <= 75)
            ) {
              const t = g().toWords(n.slice(2));
              return t.unshift(e), g().encode(r.prefix, t);
            }
          }
          return null;
        }
        getAddress(t) {
          return b(this, void 0, void 0, function* () {
            if ((null == t && (t = 60), 60 === t))
              try {
                const t = yield this._fetch("0x3b3b57de");
                return "0x" === t || t === u.R
                  ? null
                  : this.provider.formatter.callAddress(t);
              } catch (n) {
                if (n.code === v.Yd.errors.CALL_EXCEPTION) return null;
                throw n;
              }
            const e = yield this._fetchBytes("0xf1cb7e06", P(t));
            if (null == e || "0x" === e) return null;
            const r = this._getAddress(t, e);
            return (
              null == r &&
                A.throwError(
                  "invalid or unsupported coin data",
                  v.Yd.errors.UNSUPPORTED_OPERATION,
                  { operation: `getAddress(${t})`, coinType: t, data: e }
                ),
              r
            );
          });
        }
        getAvatar() {
          return b(this, void 0, void 0, function* () {
            const t = [{ type: "name", content: this.name }];
            try {
              const e = yield this.getText("avatar");
              if (null == e) return null;
              for (let r = 0; r < R.length; r++) {
                const n = e.match(R[r]);
                if (null == n) continue;
                const i = n[1].toLowerCase();
                switch (i) {
                  case "https":
                    return (
                      t.push({ type: "url", content: e }),
                      { linkage: t, url: e }
                    );
                  case "data":
                    return (
                      t.push({ type: "data", content: e }),
                      { linkage: t, url: e }
                    );
                  case "ipfs":
                    return (
                      t.push({ type: "ipfs", content: e }),
                      { linkage: t, url: L(e) }
                    );
                  case "erc721":
                  case "erc1155": {
                    const r = "erc721" === i ? "0xc87b56dd" : "0x0e89341c";
                    t.push({ type: i, content: e });
                    const o =
                        this._resolvedAddress || (yield this.getAddress()),
                      u = (n[2] || "").split("/");
                    if (2 !== u.length) return null;
                    const c = yield this.provider.formatter.address(u[0]),
                      l = (0, a.$m)(s.O$.from(u[1]).toHexString(), 32);
                    if ("erc721" === i) {
                      const e = this.provider.formatter.callAddress(
                        yield this.provider.call({
                          to: c,
                          data: (0, a.xs)(["0x6352211e", l]),
                        })
                      );
                      if (o !== e) return null;
                      t.push({ type: "owner", content: e });
                    } else if ("erc1155" === i) {
                      const e = s.O$.from(
                        yield this.provider.call({
                          to: c,
                          data: (0, a.xs)(["0x00fdd58e", (0, a.$m)(o, 32), l]),
                        })
                      );
                      if (e.isZero()) return null;
                      t.push({ type: "balance", content: e.toString() });
                    }
                    const h = {
                      to: this.provider.formatter.address(u[0]),
                      data: (0, a.xs)([r, l]),
                    };
                    let f = T(yield this.provider.call(h), 0);
                    if (null == f) return null;
                    t.push({ type: "metadata-url-base", content: f }),
                      "erc1155" === i &&
                        ((f = f.replace("{id}", l.substring(2))),
                        t.push({ type: "metadata-url-expanded", content: f })),
                      f.match(/^ipfs:/i) && (f = L(f)),
                      t.push({ type: "metadata-url", content: f });
                    const d = yield (0, p.rd)(f);
                    if (!d) return null;
                    t.push({ type: "metadata", content: JSON.stringify(d) });
                    let m = d.image;
                    if ("string" !== typeof m) return null;
                    if (m.match(/^(https:\/\/|data:)/i));
                    else {
                      if (null == m.match(x)) return null;
                      t.push({ type: "url-ipfs", content: m }), (m = L(m));
                    }
                    return (
                      t.push({ type: "url", content: m }),
                      { linkage: t, url: m }
                    );
                  }
                }
              }
            } catch (e) {}
            return null;
          });
        }
        getContentHash() {
          return b(this, void 0, void 0, function* () {
            const t = yield this._fetchBytes("0xbc1c58d1");
            if (null == t || "0x" === t) return null;
            const e = t.match(
              /^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/
            );
            if (e) {
              const t = parseInt(e[3], 16);
              if (e[4].length === 2 * t)
                return "ipfs://" + o.eU.encode("0x" + e[1]);
            }
            const r = t.match(
              /^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/
            );
            if (r) {
              const t = parseInt(r[3], 16);
              if (r[4].length === 2 * t)
                return "ipns://" + o.eU.encode("0x" + r[1]);
            }
            const n = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
            if (n && 64 === n[1].length) return "bzz://" + n[1];
            const s = t.match(/^0x90b2c605([0-9a-f]*)$/);
            if (s && 68 === s[1].length) {
              const t = { "=": "", "+": "-", "/": "_" };
              return (
                "sia://" + (0, i.c)("0x" + s[1]).replace(/[=+\/]/g, (e) => t[e])
              );
            }
            return A.throwError(
              "invalid or unsupported content hash data",
              v.Yd.errors.UNSUPPORTED_OPERATION,
              { operation: "getContentHash()", data: t }
            );
          });
        }
        getText(t) {
          return b(this, void 0, void 0, function* () {
            let e = (0, d.Y0)(t);
            (e = (0, a.zo)([P(64), P(e.length), e])),
              e.length % 32 !== 0 &&
                (e = (0, a.zo)([e, (0, a.$m)("0x", 32 - (t.length % 32))]));
            const r = yield this._fetchBytes("0x59d1d43c", (0, a.Dv)(e));
            return null == r || "0x" === r ? null : (0, d.ZN)(r);
          });
        }
      }
      let z = null,
        q = 1;
      class G extends n.zt {
        constructor(t) {
          if (
            (super(),
            (this._events = []),
            (this._emitted = { block: -2 }),
            (this.disableCcipRead = !1),
            (this.formatter = new.target.getFormatter()),
            (0, h.zG)(this, "anyNetwork", "any" === t),
            this.anyNetwork && (t = this.detectNetwork()),
            t instanceof Promise)
          )
            (this._networkPromise = t),
              t.catch((t) => {}),
              this._ready().catch((t) => {});
          else {
            const e = (0, h.tu)(new.target, "getNetwork")(t);
            e
              ? ((0, h.zG)(this, "_network", e), this.emit("network", e, null))
              : A.throwArgumentError("invalid network", "network", t);
          }
          (this._maxInternalBlockNumber = -1024),
            (this._lastBlockNumber = -2),
            (this._maxFilterBlockRange = 10),
            (this._pollingInterval = 4e3),
            (this._fastQueryDate = 0);
        }
        _ready() {
          return b(this, void 0, void 0, function* () {
            if (null == this._network) {
              let e = null;
              if (this._networkPromise)
                try {
                  e = yield this._networkPromise;
                } catch (t) {}
              null == e && (e = yield this.detectNetwork()),
                e ||
                  A.throwError(
                    "no network detected",
                    v.Yd.errors.UNKNOWN_ERROR,
                    {}
                  ),
                null == this._network &&
                  (this.anyNetwork
                    ? (this._network = e)
                    : (0, h.zG)(this, "_network", e),
                  this.emit("network", e, null));
            }
            return this._network;
          });
        }
        get ready() {
          return (0, p.$l)(() =>
            this._ready().then(
              (t) => t,
              (t) => {
                if (
                  t.code !== v.Yd.errors.NETWORK_ERROR ||
                  "noNetwork" !== t.event
                )
                  throw t;
              }
            )
          );
        }
        static getFormatter() {
          return null == z && (z = new w.Mb()), z;
        }
        static getNetwork(t) {
          return (0, l.H)(null == t ? "homestead" : t);
        }
        ccipReadFetch(t, e, r) {
          return b(this, void 0, void 0, function* () {
            if (this.disableCcipRead || 0 === r.length) return null;
            const n = t.to.toLowerCase(),
              i = e.toLowerCase(),
              o = [];
            for (let t = 0; t < r.length; t++) {
              const e = r[t],
                s = e.replace("{sender}", n).replace("{data}", i),
                a =
                  e.indexOf("{data}") >= 0
                    ? null
                    : JSON.stringify({ data: i, sender: n }),
                u = yield (0, p.rd)(
                  { url: s, errorPassThrough: !0 },
                  a,
                  (t, e) => ((t.status = e.statusCode), t)
                );
              if (u.data) return u.data;
              const c = u.message || "unknown error";
              if (u.status >= 400 && u.status < 500)
                return A.throwError(
                  `response not found during CCIP fetch: ${c}`,
                  v.Yd.errors.SERVER_ERROR,
                  { url: e, errorMessage: c }
                );
              o.push(c);
            }
            return A.throwError(
              `error encountered during CCIP fetch: ${o
                .map((t) => JSON.stringify(t))
                .join(", ")}`,
              v.Yd.errors.SERVER_ERROR,
              { urls: r, errorMessages: o }
            );
          });
        }
        _getInternalBlockNumber(t) {
          return b(this, void 0, void 0, function* () {
            if ((yield this._ready(), t > 0))
              for (; this._internalBlockNumber; ) {
                const e = this._internalBlockNumber;
                try {
                  const r = yield e;
                  if (_() - r.respTime <= t) return r.blockNumber;
                  break;
                } catch (n) {
                  if (this._internalBlockNumber === e) break;
                }
              }
            const e = _(),
              r = (0, h.mE)({
                blockNumber: this.perform("getBlockNumber", {}),
                networkError: this.getNetwork().then(
                  (t) => null,
                  (t) => t
                ),
              }).then(({ blockNumber: t, networkError: n }) => {
                if (n)
                  throw (
                    (this._internalBlockNumber === r &&
                      (this._internalBlockNumber = null),
                    n)
                  );
                const i = _();
                return (
                  (t = s.O$.from(t).toNumber()) <
                    this._maxInternalBlockNumber &&
                    (t = this._maxInternalBlockNumber),
                  (this._maxInternalBlockNumber = t),
                  this._setFastBlockNumber(t),
                  { blockNumber: t, reqTime: e, respTime: i }
                );
              });
            return (
              (this._internalBlockNumber = r),
              r.catch((t) => {
                this._internalBlockNumber === r &&
                  (this._internalBlockNumber = null);
              }),
              (yield r).blockNumber
            );
          });
        }
        poll() {
          return b(this, void 0, void 0, function* () {
            const t = q++,
              e = [];
            let r = null;
            try {
              r = yield this._getInternalBlockNumber(
                100 + this.pollingInterval / 2
              );
            } catch (n) {
              return void this.emit("error", n);
            }
            if (
              (this._setFastBlockNumber(r),
              this.emit("poll", t, r),
              r !== this._lastBlockNumber)
            ) {
              if (
                (-2 === this._emitted.block && (this._emitted.block = r - 1),
                Math.abs(this._emitted.block - r) > 1e3)
              )
                A.warn(
                  `network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${r})`
                ),
                  this.emit(
                    "error",
                    A.makeError(
                      "network block skew detected",
                      v.Yd.errors.NETWORK_ERROR,
                      {
                        blockNumber: r,
                        event: "blockSkew",
                        previousBlockNumber: this._emitted.block,
                      }
                    )
                  ),
                  this.emit("block", r);
              else
                for (let t = this._emitted.block + 1; t <= r; t++)
                  this.emit("block", t);
              this._emitted.block !== r &&
                ((this._emitted.block = r),
                Object.keys(this._emitted).forEach((t) => {
                  if ("block" === t) return;
                  const e = this._emitted[t];
                  "pending" !== e && r - e > 12 && delete this._emitted[t];
                })),
                -2 === this._lastBlockNumber && (this._lastBlockNumber = r - 1),
                this._events.forEach((t) => {
                  switch (t.type) {
                    case "tx": {
                      const r = t.hash;
                      let n = this.getTransactionReceipt(r)
                        .then((t) =>
                          t && null != t.blockNumber
                            ? ((this._emitted["t:" + r] = t.blockNumber),
                              this.emit(r, t),
                              null)
                            : null
                        )
                        .catch((t) => {
                          this.emit("error", t);
                        });
                      e.push(n);
                      break;
                    }
                    case "filter":
                      if (!t._inflight) {
                        (t._inflight = !0),
                          -2 === t._lastBlockNumber &&
                            (t._lastBlockNumber = r - 1);
                        const n = t.filter;
                        (n.fromBlock = t._lastBlockNumber + 1), (n.toBlock = r);
                        const i = n.toBlock - this._maxFilterBlockRange;
                        i > n.fromBlock && (n.fromBlock = i),
                          n.fromBlock < 0 && (n.fromBlock = 0);
                        const o = this.getLogs(n)
                          .then((e) => {
                            (t._inflight = !1),
                              0 !== e.length &&
                                e.forEach((e) => {
                                  e.blockNumber > t._lastBlockNumber &&
                                    (t._lastBlockNumber = e.blockNumber),
                                    (this._emitted["b:" + e.blockHash] =
                                      e.blockNumber),
                                    (this._emitted["t:" + e.transactionHash] =
                                      e.blockNumber),
                                    this.emit(n, e);
                                });
                          })
                          .catch((e) => {
                            this.emit("error", e), (t._inflight = !1);
                          });
                        e.push(o);
                      }
                  }
                }),
                (this._lastBlockNumber = r),
                Promise.all(e)
                  .then(() => {
                    this.emit("didPoll", t);
                  })
                  .catch((t) => {
                    this.emit("error", t);
                  });
            } else this.emit("didPoll", t);
          });
        }
        resetEventsBlock(t) {
          (this._lastBlockNumber = t - 1), this.polling && this.poll();
        }
        get network() {
          return this._network;
        }
        detectNetwork() {
          return b(this, void 0, void 0, function* () {
            return A.throwError(
              "provider does not support network detection",
              v.Yd.errors.UNSUPPORTED_OPERATION,
              { operation: "provider.detectNetwork" }
            );
          });
        }
        getNetwork() {
          return b(this, void 0, void 0, function* () {
            const t = yield this._ready(),
              e = yield this.detectNetwork();
            if (t.chainId !== e.chainId) {
              if (this.anyNetwork)
                return (
                  (this._network = e),
                  (this._lastBlockNumber = -2),
                  (this._fastBlockNumber = null),
                  (this._fastBlockNumberPromise = null),
                  (this._fastQueryDate = 0),
                  (this._emitted.block = -2),
                  (this._maxInternalBlockNumber = -1024),
                  (this._internalBlockNumber = null),
                  this.emit("network", e, t),
                  yield C(0),
                  this._network
                );
              const r = A.makeError(
                "underlying network changed",
                v.Yd.errors.NETWORK_ERROR,
                { event: "changed", network: t, detectedNetwork: e }
              );
              throw (this.emit("error", r), r);
            }
            return t;
          });
        }
        get blockNumber() {
          return (
            this._getInternalBlockNumber(100 + this.pollingInterval / 2).then(
              (t) => {
                this._setFastBlockNumber(t);
              },
              (t) => {}
            ),
            null != this._fastBlockNumber ? this._fastBlockNumber : -1
          );
        }
        get polling() {
          return null != this._poller;
        }
        set polling(t) {
          t && !this._poller
            ? ((this._poller = setInterval(() => {
                this.poll();
              }, this.pollingInterval)),
              this._bootstrapPoll ||
                (this._bootstrapPoll = setTimeout(() => {
                  this.poll(),
                    (this._bootstrapPoll = setTimeout(() => {
                      this._poller || this.poll(), (this._bootstrapPoll = null);
                    }, this.pollingInterval));
                }, 0)))
            : !t &&
              this._poller &&
              (clearInterval(this._poller), (this._poller = null));
        }
        get pollingInterval() {
          return this._pollingInterval;
        }
        set pollingInterval(t) {
          if ("number" !== typeof t || t <= 0 || parseInt(String(t)) != t)
            throw new Error("invalid polling interval");
          (this._pollingInterval = t),
            this._poller &&
              (clearInterval(this._poller),
              (this._poller = setInterval(() => {
                this.poll();
              }, this._pollingInterval)));
        }
        _getFastBlockNumber() {
          const t = _();
          return (
            t - this._fastQueryDate > 2 * this._pollingInterval &&
              ((this._fastQueryDate = t),
              (this._fastBlockNumberPromise = this.getBlockNumber().then(
                (t) => (
                  (null == this._fastBlockNumber ||
                    t > this._fastBlockNumber) &&
                    (this._fastBlockNumber = t),
                  this._fastBlockNumber
                )
              ))),
            this._fastBlockNumberPromise
          );
        }
        _setFastBlockNumber(t) {
          (null != this._fastBlockNumber && t < this._fastBlockNumber) ||
            ((this._fastQueryDate = _()),
            (null == this._fastBlockNumber || t > this._fastBlockNumber) &&
              ((this._fastBlockNumber = t),
              (this._fastBlockNumberPromise = Promise.resolve(t))));
        }
        waitForTransaction(t, e, r) {
          return b(this, void 0, void 0, function* () {
            return this._waitForTransaction(t, null == e ? 1 : e, r || 0, null);
          });
        }
        _waitForTransaction(t, e, r, n) {
          return b(this, void 0, void 0, function* () {
            const i = yield this.getTransactionReceipt(t);
            return (i ? i.confirmations : 0) >= e
              ? i
              : new Promise((i, o) => {
                  const s = [];
                  let a = !1;
                  const u = function () {
                      return (
                        !!a ||
                        ((a = !0),
                        s.forEach((t) => {
                          t();
                        }),
                        !1)
                      );
                    },
                    c = (t) => {
                      t.confirmations < e || u() || i(t);
                    };
                  if (
                    (this.on(t, c),
                    s.push(() => {
                      this.removeListener(t, c);
                    }),
                    n)
                  ) {
                    let r = n.startBlock,
                      i = null;
                    const c = (s) =>
                      b(this, void 0, void 0, function* () {
                        a ||
                          (yield C(1e3),
                          this.getTransactionCount(n.from).then(
                            (l) =>
                              b(this, void 0, void 0, function* () {
                                if (!a) {
                                  if (l <= n.nonce) r = s;
                                  else {
                                    {
                                      const e = yield this.getTransaction(t);
                                      if (e && null != e.blockNumber) return;
                                    }
                                    for (
                                      null == i &&
                                      ((i = r - 3),
                                      i < n.startBlock && (i = n.startBlock));
                                      i <= s;

                                    ) {
                                      if (a) return;
                                      const r =
                                        yield this.getBlockWithTransactions(i);
                                      for (
                                        let i = 0;
                                        i < r.transactions.length;
                                        i++
                                      ) {
                                        const s = r.transactions[i];
                                        if (s.hash === t) return;
                                        if (
                                          s.from === n.from &&
                                          s.nonce === n.nonce
                                        ) {
                                          if (a) return;
                                          const r =
                                            yield this.waitForTransaction(
                                              s.hash,
                                              e
                                            );
                                          if (u()) return;
                                          let i = "replaced";
                                          return (
                                            s.data === n.data &&
                                            s.to === n.to &&
                                            s.value.eq(n.value)
                                              ? (i = "repriced")
                                              : "0x" === s.data &&
                                                s.from === s.to &&
                                                s.value.isZero() &&
                                                (i = "cancelled"),
                                            void o(
                                              A.makeError(
                                                "transaction was replaced",
                                                v.Yd.errors
                                                  .TRANSACTION_REPLACED,
                                                {
                                                  cancelled:
                                                    "replaced" === i ||
                                                    "cancelled" === i,
                                                  reason: i,
                                                  replacement:
                                                    this._wrapTransaction(s),
                                                  hash: t,
                                                  receipt: r,
                                                }
                                              )
                                            )
                                          );
                                        }
                                      }
                                      i++;
                                    }
                                  }
                                  a || this.once("block", c);
                                }
                              }),
                            (t) => {
                              a || this.once("block", c);
                            }
                          ));
                      });
                    if (a) return;
                    this.once("block", c),
                      s.push(() => {
                        this.removeListener("block", c);
                      });
                  }
                  if ("number" === typeof r && r > 0) {
                    const t = setTimeout(() => {
                      u() ||
                        o(
                          A.makeError("timeout exceeded", v.Yd.errors.TIMEOUT, {
                            timeout: r,
                          })
                        );
                    }, r);
                    t.unref && t.unref(),
                      s.push(() => {
                        clearTimeout(t);
                      });
                  }
                });
          });
        }
        getBlockNumber() {
          return b(this, void 0, void 0, function* () {
            return this._getInternalBlockNumber(0);
          });
        }
        getGasPrice() {
          return b(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const t = yield this.perform("getGasPrice", {});
            try {
              return s.O$.from(t);
            } catch (e) {
              return A.throwError(
                "bad result from backend",
                v.Yd.errors.SERVER_ERROR,
                { method: "getGasPrice", result: t, error: e }
              );
            }
          });
        }
        getBalance(t, e) {
          return b(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const r = yield (0, h.mE)({
                address: this._getAddress(t),
                blockTag: this._getBlockTag(e),
              }),
              n = yield this.perform("getBalance", r);
            try {
              return s.O$.from(n);
            } catch (i) {
              return A.throwError(
                "bad result from backend",
                v.Yd.errors.SERVER_ERROR,
                { method: "getBalance", params: r, result: n, error: i }
              );
            }
          });
        }
        getTransactionCount(t, e) {
          return b(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const r = yield (0, h.mE)({
                address: this._getAddress(t),
                blockTag: this._getBlockTag(e),
              }),
              n = yield this.perform("getTransactionCount", r);
            try {
              return s.O$.from(n).toNumber();
            } catch (i) {
              return A.throwError(
                "bad result from backend",
                v.Yd.errors.SERVER_ERROR,
                {
                  method: "getTransactionCount",
                  params: r,
                  result: n,
                  error: i,
                }
              );
            }
          });
        }
        getCode(t, e) {
          return b(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const r = yield (0, h.mE)({
                address: this._getAddress(t),
                blockTag: this._getBlockTag(e),
              }),
              n = yield this.perform("getCode", r);
            try {
              return (0, a.Dv)(n);
            } catch (i) {
              return A.throwError(
                "bad result from backend",
                v.Yd.errors.SERVER_ERROR,
                { method: "getCode", params: r, result: n, error: i }
              );
            }
          });
        }
        getStorageAt(t, e, r) {
          return b(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const n = yield (0, h.mE)({
                address: this._getAddress(t),
                blockTag: this._getBlockTag(r),
                position: Promise.resolve(e).then((t) => (0, a.$P)(t)),
              }),
              i = yield this.perform("getStorageAt", n);
            try {
              return (0, a.Dv)(i);
            } catch (o) {
              return A.throwError(
                "bad result from backend",
                v.Yd.errors.SERVER_ERROR,
                { method: "getStorageAt", params: n, result: i, error: o }
              );
            }
          });
        }
        _wrapTransaction(t, e, r) {
          if (null != e && 32 !== (0, a.E1)(e))
            throw new Error("invalid response - sendTransaction");
          const n = t;
          return (
            null != e &&
              t.hash !== e &&
              A.throwError(
                "Transaction hash mismatch from Provider.sendTransaction.",
                v.Yd.errors.UNKNOWN_ERROR,
                { expectedHash: t.hash, returnedHash: e }
              ),
            (n.wait = (e, n) =>
              b(this, void 0, void 0, function* () {
                let i;
                null == e && (e = 1),
                  null == n && (n = 0),
                  0 !== e &&
                    null != r &&
                    (i = {
                      data: t.data,
                      from: t.from,
                      nonce: t.nonce,
                      to: t.to,
                      value: t.value,
                      startBlock: r,
                    });
                const o = yield this._waitForTransaction(t.hash, e, n, i);
                return null == o && 0 === e
                  ? null
                  : ((this._emitted["t:" + t.hash] = o.blockNumber),
                    0 === o.status &&
                      A.throwError(
                        "transaction failed",
                        v.Yd.errors.CALL_EXCEPTION,
                        { transactionHash: t.hash, transaction: t, receipt: o }
                      ),
                    o);
              })),
            n
          );
        }
        sendTransaction(t) {
          return b(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const e = yield Promise.resolve(t).then((t) => (0, a.Dv)(t)),
              r = this.formatter.transaction(t);
            null == r.confirmations && (r.confirmations = 0);
            const n = yield this._getInternalBlockNumber(
              100 + 2 * this.pollingInterval
            );
            try {
              const t = yield this.perform("sendTransaction", {
                signedTransaction: e,
              });
              return this._wrapTransaction(r, t, n);
            } catch (i) {
              throw ((i.transaction = r), (i.transactionHash = r.hash), i);
            }
          });
        }
        _getTransactionRequest(t) {
          return b(this, void 0, void 0, function* () {
            const e = yield t,
              r = {};
            return (
              ["from", "to"].forEach((t) => {
                null != e[t] &&
                  (r[t] = Promise.resolve(e[t]).then((t) =>
                    t ? this._getAddress(t) : null
                  ));
              }),
              [
                "gasLimit",
                "gasPrice",
                "maxFeePerGas",
                "maxPriorityFeePerGas",
                "value",
              ].forEach((t) => {
                null != e[t] &&
                  (r[t] = Promise.resolve(e[t]).then((t) =>
                    t ? s.O$.from(t) : null
                  ));
              }),
              ["type"].forEach((t) => {
                null != e[t] &&
                  (r[t] = Promise.resolve(e[t]).then((t) =>
                    null != t ? t : null
                  ));
              }),
              e.accessList &&
                (r.accessList = this.formatter.accessList(e.accessList)),
              ["data"].forEach((t) => {
                null != e[t] &&
                  (r[t] = Promise.resolve(e[t]).then((t) =>
                    t ? (0, a.Dv)(t) : null
                  ));
              }),
              this.formatter.transactionRequest(yield (0, h.mE)(r))
            );
          });
        }
        _getFilter(t) {
          return b(this, void 0, void 0, function* () {
            t = yield t;
            const e = {};
            return (
              null != t.address && (e.address = this._getAddress(t.address)),
              ["blockHash", "topics"].forEach((r) => {
                null != t[r] && (e[r] = t[r]);
              }),
              ["fromBlock", "toBlock"].forEach((r) => {
                null != t[r] && (e[r] = this._getBlockTag(t[r]));
              }),
              this.formatter.filter(yield (0, h.mE)(e))
            );
          });
        }
        _call(t, e, r) {
          return b(this, void 0, void 0, function* () {
            r >= 10 &&
              A.throwError(
                "CCIP read exceeded maximum redirections",
                v.Yd.errors.SERVER_ERROR,
                { redirects: r, transaction: t }
              );
            const n = t.to,
              i = yield this.perform("call", { transaction: t, blockTag: e });
            if (
              r >= 0 &&
              "latest" === e &&
              null != n &&
              "0x556f1830" === i.substring(0, 10) &&
              (0, a.E1)(i) % 32 === 4
            )
              try {
                const o = (0, a.p3)(i, 4),
                  u = (0, a.p3)(o, 0, 32);
                s.O$.from(u).eq(n) ||
                  A.throwError(
                    "CCIP Read sender did not match",
                    v.Yd.errors.CALL_EXCEPTION,
                    {
                      name: "OffchainLookup",
                      signature:
                        "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                      transaction: t,
                      data: i,
                    }
                  );
                const c = [],
                  l = s.O$.from((0, a.p3)(o, 32, 64)).toNumber(),
                  h = s.O$.from((0, a.p3)(o, l, l + 32)).toNumber(),
                  f = (0, a.p3)(o, l + 32);
                for (let e = 0; e < h; e++) {
                  const r = T(f, 32 * e);
                  null == r &&
                    A.throwError(
                      "CCIP Read contained corrupt URL string",
                      v.Yd.errors.CALL_EXCEPTION,
                      {
                        name: "OffchainLookup",
                        signature:
                          "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                        transaction: t,
                        data: i,
                      }
                    ),
                    c.push(r);
                }
                const d = B(o, 64);
                s.O$.from((0, a.p3)(o, 100, 128)).isZero() ||
                  A.throwError(
                    "CCIP Read callback selector included junk",
                    v.Yd.errors.CALL_EXCEPTION,
                    {
                      name: "OffchainLookup",
                      signature:
                        "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                      transaction: t,
                      data: i,
                    }
                  );
                const p = (0, a.p3)(o, 96, 100),
                  m = B(o, 128),
                  g = yield this.ccipReadFetch(t, d, c);
                null == g &&
                  A.throwError(
                    "CCIP Read disabled or provided no URLs",
                    v.Yd.errors.CALL_EXCEPTION,
                    {
                      name: "OffchainLookup",
                      signature:
                        "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                      transaction: t,
                      data: i,
                    }
                  );
                const y = { to: n, data: (0, a.xs)([p, j([g, m])]) };
                return this._call(y, e, r + 1);
              } catch (o) {
                if (o.code === v.Yd.errors.SERVER_ERROR) throw o;
              }
            try {
              return (0, a.Dv)(i);
            } catch (o) {
              return A.throwError(
                "bad result from backend",
                v.Yd.errors.SERVER_ERROR,
                {
                  method: "call",
                  params: { transaction: t, blockTag: e },
                  result: i,
                  error: o,
                }
              );
            }
          });
        }
        call(t, e) {
          return b(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const r = yield (0, h.mE)({
              transaction: this._getTransactionRequest(t),
              blockTag: this._getBlockTag(e),
              ccipReadEnabled: Promise.resolve(t.ccipReadEnabled),
            });
            return this._call(
              r.transaction,
              r.blockTag,
              r.ccipReadEnabled ? 0 : -1
            );
          });
        }
        estimateGas(t) {
          return b(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const e = yield (0, h.mE)({
                transaction: this._getTransactionRequest(t),
              }),
              r = yield this.perform("estimateGas", e);
            try {
              return s.O$.from(r);
            } catch (n) {
              return A.throwError(
                "bad result from backend",
                v.Yd.errors.SERVER_ERROR,
                { method: "estimateGas", params: e, result: r, error: n }
              );
            }
          });
        }
        _getAddress(t) {
          return b(this, void 0, void 0, function* () {
            "string" !== typeof (t = yield t) &&
              A.throwArgumentError("invalid address or ENS name", "name", t);
            const e = yield this.resolveName(t);
            return (
              null == e &&
                A.throwError(
                  "ENS name not configured",
                  v.Yd.errors.UNSUPPORTED_OPERATION,
                  { operation: `resolveName(${JSON.stringify(t)})` }
                ),
              e
            );
          });
        }
        _getBlock(t, e) {
          return b(this, void 0, void 0, function* () {
            yield this.getNetwork(), (t = yield t);
            let r = -128;
            const n = { includeTransactions: !!e };
            if ((0, a.A7)(t, 32)) n.blockHash = t;
            else
              try {
                (n.blockTag = yield this._getBlockTag(t)),
                  (0, a.A7)(n.blockTag) &&
                    (r = parseInt(n.blockTag.substring(2), 16));
              } catch (i) {
                A.throwArgumentError(
                  "invalid block hash or block tag",
                  "blockHashOrBlockTag",
                  t
                );
              }
            return (0, p.$l)(
              () =>
                b(this, void 0, void 0, function* () {
                  const t = yield this.perform("getBlock", n);
                  if (null == t)
                    return (null != n.blockHash &&
                      null == this._emitted["b:" + n.blockHash]) ||
                      (null != n.blockTag && r > this._emitted.block)
                      ? null
                      : void 0;
                  if (e) {
                    let e = null;
                    for (let n = 0; n < t.transactions.length; n++) {
                      const r = t.transactions[n];
                      if (null == r.blockNumber) r.confirmations = 0;
                      else if (null == r.confirmations) {
                        null == e &&
                          (e = yield this._getInternalBlockNumber(
                            100 + 2 * this.pollingInterval
                          ));
                        let t = e - r.blockNumber + 1;
                        t <= 0 && (t = 1), (r.confirmations = t);
                      }
                    }
                    const r = this.formatter.blockWithTransactions(t);
                    return (
                      (r.transactions = r.transactions.map((t) =>
                        this._wrapTransaction(t)
                      )),
                      r
                    );
                  }
                  return this.formatter.block(t);
                }),
              { oncePoll: this }
            );
          });
        }
        getBlock(t) {
          return this._getBlock(t, !1);
        }
        getBlockWithTransactions(t) {
          return this._getBlock(t, !0);
        }
        getTransaction(t) {
          return b(this, void 0, void 0, function* () {
            yield this.getNetwork(), (t = yield t);
            const e = { transactionHash: this.formatter.hash(t, !0) };
            return (0, p.$l)(
              () =>
                b(this, void 0, void 0, function* () {
                  const r = yield this.perform("getTransaction", e);
                  if (null == r)
                    return null == this._emitted["t:" + t] ? null : void 0;
                  const n = this.formatter.transactionResponse(r);
                  if (null == n.blockNumber) n.confirmations = 0;
                  else if (null == n.confirmations) {
                    let t =
                      (yield this._getInternalBlockNumber(
                        100 + 2 * this.pollingInterval
                      )) -
                      n.blockNumber +
                      1;
                    t <= 0 && (t = 1), (n.confirmations = t);
                  }
                  return this._wrapTransaction(n);
                }),
              { oncePoll: this }
            );
          });
        }
        getTransactionReceipt(t) {
          return b(this, void 0, void 0, function* () {
            yield this.getNetwork(), (t = yield t);
            const e = { transactionHash: this.formatter.hash(t, !0) };
            return (0, p.$l)(
              () =>
                b(this, void 0, void 0, function* () {
                  const r = yield this.perform("getTransactionReceipt", e);
                  if (null == r)
                    return null == this._emitted["t:" + t] ? null : void 0;
                  if (null == r.blockHash) return;
                  const n = this.formatter.receipt(r);
                  if (null == n.blockNumber) n.confirmations = 0;
                  else if (null == n.confirmations) {
                    let t =
                      (yield this._getInternalBlockNumber(
                        100 + 2 * this.pollingInterval
                      )) -
                      n.blockNumber +
                      1;
                    t <= 0 && (t = 1), (n.confirmations = t);
                  }
                  return n;
                }),
              { oncePoll: this }
            );
          });
        }
        getLogs(t) {
          return b(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const e = yield (0, h.mE)({ filter: this._getFilter(t) }),
              r = yield this.perform("getLogs", e);
            return (
              r.forEach((t) => {
                null == t.removed && (t.removed = !1);
              }),
              w.Mb.arrayOf(this.formatter.filterLog.bind(this.formatter))(r)
            );
          });
        }
        getEtherPrice() {
          return b(this, void 0, void 0, function* () {
            return yield this.getNetwork(), this.perform("getEtherPrice", {});
          });
        }
        _getBlockTag(t) {
          return b(this, void 0, void 0, function* () {
            if ("number" === typeof (t = yield t) && t < 0) {
              t % 1 && A.throwArgumentError("invalid BlockTag", "blockTag", t);
              let e = yield this._getInternalBlockNumber(
                100 + 2 * this.pollingInterval
              );
              return (e += t), e < 0 && (e = 0), this.formatter.blockTag(e);
            }
            return this.formatter.blockTag(t);
          });
        }
        getResolver(t) {
          return b(this, void 0, void 0, function* () {
            let e = t;
            for (;;) {
              if ("" === e || "." === e) return null;
              if ("eth" !== t && "eth" === e) return null;
              const r = yield this._getResolver(e, "getResolver");
              if (null != r) {
                const n = new F(this, r, t);
                return e === t || (yield n.supportsWildcard()) ? n : null;
              }
              e = e.split(".").slice(1).join(".");
            }
          });
        }
        _getResolver(t, e) {
          return b(this, void 0, void 0, function* () {
            null == e && (e = "ENS");
            const r = yield this.getNetwork();
            r.ensAddress ||
              A.throwError(
                "network does not support ENS",
                v.Yd.errors.UNSUPPORTED_OPERATION,
                { operation: e, network: r.name }
              );
            try {
              const e = yield this.call({
                to: r.ensAddress,
                data: "0x0178b8bf" + (0, c.VM)(t).substring(2),
              });
              return this.formatter.callAddress(e);
            } catch (n) {}
            return null;
          });
        }
        resolveName(t) {
          return b(this, void 0, void 0, function* () {
            t = yield t;
            try {
              return Promise.resolve(this.formatter.address(t));
            } catch (r) {
              if ((0, a.A7)(t)) throw r;
            }
            "string" !== typeof t &&
              A.throwArgumentError("invalid ENS name", "name", t);
            const e = yield this.getResolver(t);
            return e ? yield e.getAddress() : null;
          });
        }
        lookupAddress(t) {
          return b(this, void 0, void 0, function* () {
            t = yield t;
            const e =
                (t = this.formatter.address(t)).substring(2).toLowerCase() +
                ".addr.reverse",
              r = yield this._getResolver(e, "lookupAddress");
            if (null == r) return null;
            const n = T(
              yield this.call({
                to: r,
                data: "0x691f3431" + (0, c.VM)(e).substring(2),
              }),
              0
            );
            return (yield this.resolveName(n)) != t ? null : n;
          });
        }
        getAvatar(t) {
          return b(this, void 0, void 0, function* () {
            let e = null;
            if ((0, a.A7)(t)) {
              const r =
                  this.formatter.address(t).substring(2).toLowerCase() +
                  ".addr.reverse",
                i = yield this._getResolver(r, "getAvatar");
              if (!i) return null;
              e = new F(this, i, r);
              try {
                const t = yield e.getAvatar();
                if (t) return t.url;
              } catch (n) {
                if (n.code !== v.Yd.errors.CALL_EXCEPTION) throw n;
              }
              try {
                const t = T(
                  yield this.call({
                    to: i,
                    data: "0x691f3431" + (0, c.VM)(r).substring(2),
                  }),
                  0
                );
                e = yield this.getResolver(t);
              } catch (n) {
                if (n.code !== v.Yd.errors.CALL_EXCEPTION) throw n;
                return null;
              }
            } else if (((e = yield this.getResolver(t)), !e)) return null;
            const r = yield e.getAvatar();
            return null == r ? null : r.url;
          });
        }
        perform(t, e) {
          return A.throwError(
            t + " not implemented",
            v.Yd.errors.NOT_IMPLEMENTED,
            { operation: t }
          );
        }
        _startEvent(t) {
          this.polling = this._events.filter((t) => t.pollable()).length > 0;
        }
        _stopEvent(t) {
          this.polling = this._events.filter((t) => t.pollable()).length > 0;
        }
        _addEventListener(t, e, r) {
          const n = new I(k(t), e, r);
          return this._events.push(n), this._startEvent(n), this;
        }
        on(t, e) {
          return this._addEventListener(t, e, !1);
        }
        once(t, e) {
          return this._addEventListener(t, e, !0);
        }
        emit(t, ...e) {
          let r = !1,
            n = [],
            i = k(t);
          return (
            (this._events = this._events.filter(
              (t) =>
                t.tag !== i ||
                (setTimeout(() => {
                  t.listener.apply(this, e);
                }, 0),
                (r = !0),
                !t.once || (n.push(t), !1))
            )),
            n.forEach((t) => {
              this._stopEvent(t);
            }),
            r
          );
        }
        listenerCount(t) {
          if (!t) return this._events.length;
          let e = k(t);
          return this._events.filter((t) => t.tag === e).length;
        }
        listeners(t) {
          if (null == t) return this._events.map((t) => t.listener);
          let e = k(t);
          return this._events.filter((t) => t.tag === e).map((t) => t.listener);
        }
        off(t, e) {
          if (null == e) return this.removeAllListeners(t);
          const r = [];
          let n = !1,
            i = k(t);
          return (
            (this._events = this._events.filter(
              (t) =>
                t.tag !== i ||
                t.listener != e ||
                !!n ||
                ((n = !0), r.push(t), !1)
            )),
            r.forEach((t) => {
              this._stopEvent(t);
            }),
            this
          );
        }
        removeAllListeners(t) {
          let e = [];
          if (null == t) (e = this._events), (this._events = []);
          else {
            const r = k(t);
            this._events = this._events.filter(
              (t) => t.tag !== r || (e.push(t), !1)
            );
          }
          return (
            e.forEach((t) => {
              this._stopEvent(t);
            }),
            this
          );
        }
      }
    },
    12648: function (t, e, r) {
      "use strict";
      r.d(e, {
        Mb: function () {
          return f;
        },
        Ed: function () {
          return d;
        },
        Gp: function () {
          return p;
        },
        vh: function () {
          return g;
        },
      });
      var n = r(91426),
        i = r(93442),
        o = r(25689),
        s = r(82729),
        a = r(98690),
        u = r(25567),
        c = r(87898),
        l = r(32565);
      const h = new c.Yd(l.i);
      class f {
        constructor() {
          this.formats = this.getDefaultFormats();
        }
        getDefaultFormats() {
          const t = {},
            e = this.address.bind(this),
            r = this.bigNumber.bind(this),
            n = this.blockTag.bind(this),
            i = this.data.bind(this),
            o = this.hash.bind(this),
            s = this.hex.bind(this),
            u = this.number.bind(this),
            c = this.type.bind(this);
          return (
            (t.transaction = {
              hash: o,
              type: c,
              accessList: f.allowNull(this.accessList.bind(this), null),
              blockHash: f.allowNull(o, null),
              blockNumber: f.allowNull(u, null),
              transactionIndex: f.allowNull(u, null),
              confirmations: f.allowNull(u, null),
              from: e,
              gasPrice: f.allowNull(r),
              maxPriorityFeePerGas: f.allowNull(r),
              maxFeePerGas: f.allowNull(r),
              gasLimit: r,
              to: f.allowNull(e, null),
              value: r,
              nonce: u,
              data: i,
              r: f.allowNull(this.uint256),
              s: f.allowNull(this.uint256),
              v: f.allowNull(u),
              creates: f.allowNull(e, null),
              raw: f.allowNull(i),
            }),
            (t.transactionRequest = {
              from: f.allowNull(e),
              nonce: f.allowNull(u),
              gasLimit: f.allowNull(r),
              gasPrice: f.allowNull(r),
              maxPriorityFeePerGas: f.allowNull(r),
              maxFeePerGas: f.allowNull(r),
              to: f.allowNull(e),
              value: f.allowNull(r),
              data: f.allowNull((t) => this.data(t, !0)),
              type: f.allowNull(u),
              accessList: f.allowNull(this.accessList.bind(this), null),
            }),
            (t.receiptLog = {
              transactionIndex: u,
              blockNumber: u,
              transactionHash: o,
              address: e,
              topics: f.arrayOf(o),
              data: i,
              logIndex: u,
              blockHash: o,
            }),
            (t.receipt = {
              to: f.allowNull(this.address, null),
              from: f.allowNull(this.address, null),
              contractAddress: f.allowNull(e, null),
              transactionIndex: u,
              root: f.allowNull(s),
              gasUsed: r,
              logsBloom: f.allowNull(i),
              blockHash: o,
              transactionHash: o,
              logs: f.arrayOf(this.receiptLog.bind(this)),
              blockNumber: u,
              confirmations: f.allowNull(u, null),
              cumulativeGasUsed: r,
              effectiveGasPrice: f.allowNull(r),
              status: f.allowNull(u),
              type: c,
            }),
            (t.block = {
              hash: f.allowNull(o),
              parentHash: o,
              number: u,
              timestamp: u,
              nonce: f.allowNull(s),
              difficulty: this.difficulty.bind(this),
              gasLimit: r,
              gasUsed: r,
              miner: f.allowNull(e),
              extraData: i,
              transactions: f.allowNull(f.arrayOf(o)),
              baseFeePerGas: f.allowNull(r),
            }),
            (t.blockWithTransactions = (0, a.DC)(t.block)),
            (t.blockWithTransactions.transactions = f.allowNull(
              f.arrayOf(this.transactionResponse.bind(this))
            )),
            (t.filter = {
              fromBlock: f.allowNull(n, void 0),
              toBlock: f.allowNull(n, void 0),
              blockHash: f.allowNull(o, void 0),
              address: f.allowNull(e, void 0),
              topics: f.allowNull(this.topics.bind(this), void 0),
            }),
            (t.filterLog = {
              blockNumber: f.allowNull(u),
              blockHash: f.allowNull(o),
              transactionIndex: u,
              removed: f.allowNull(this.boolean.bind(this)),
              address: e,
              data: f.allowFalsish(i, "0x"),
              topics: f.arrayOf(o),
              transactionHash: o,
              logIndex: u,
            }),
            t
          );
        }
        accessList(t) {
          return (0, u.z7)(t || []);
        }
        number(t) {
          return "0x" === t ? 0 : i.O$.from(t).toNumber();
        }
        type(t) {
          return "0x" === t || null == t ? 0 : i.O$.from(t).toNumber();
        }
        bigNumber(t) {
          return i.O$.from(t);
        }
        boolean(t) {
          if ("boolean" === typeof t) return t;
          if ("string" === typeof t) {
            if ("true" === (t = t.toLowerCase())) return !0;
            if ("false" === t) return !1;
          }
          throw new Error("invalid boolean - " + t);
        }
        hex(t, e) {
          return "string" === typeof t &&
            (e || "0x" === t.substring(0, 2) || (t = "0x" + t), (0, o.A7)(t))
            ? t.toLowerCase()
            : h.throwArgumentError("invalid hash", "value", t);
        }
        data(t, e) {
          const r = this.hex(t, e);
          if (r.length % 2 !== 0)
            throw new Error("invalid data; odd-length - " + t);
          return r;
        }
        address(t) {
          return (0, n.Kn)(t);
        }
        callAddress(t) {
          if (!(0, o.A7)(t, 32)) return null;
          const e = (0, n.Kn)((0, o.p3)(t, 12));
          return e === s.d ? null : e;
        }
        contractAddress(t) {
          return (0, n.CR)(t);
        }
        blockTag(t) {
          if (null == t) return "latest";
          if ("earliest" === t) return "0x0";
          switch (t) {
            case "earliest":
              return "0x0";
            case "latest":
            case "pending":
            case "safe":
            case "finalized":
              return t;
          }
          if ("number" === typeof t || (0, o.A7)(t)) return (0, o.$P)(t);
          throw new Error("invalid blockTag");
        }
        hash(t, e) {
          const r = this.hex(t, e);
          return 32 !== (0, o.E1)(r)
            ? h.throwArgumentError("invalid hash", "value", t)
            : r;
        }
        difficulty(t) {
          if (null == t) return null;
          const e = i.O$.from(t);
          try {
            return e.toNumber();
          } catch (r) {}
          return null;
        }
        uint256(t) {
          if (!(0, o.A7)(t)) throw new Error("invalid uint256");
          return (0, o.$m)(t, 32);
        }
        _block(t, e) {
          null != t.author && null == t.miner && (t.miner = t.author);
          const r = null != t._difficulty ? t._difficulty : t.difficulty,
            n = f.check(e, t);
          return (n._difficulty = null == r ? null : i.O$.from(r)), n;
        }
        block(t) {
          return this._block(t, this.formats.block);
        }
        blockWithTransactions(t) {
          return this._block(t, this.formats.blockWithTransactions);
        }
        transactionRequest(t) {
          return f.check(this.formats.transactionRequest, t);
        }
        transactionResponse(t) {
          null != t.gas && null == t.gasLimit && (t.gasLimit = t.gas),
            t.to &&
              i.O$.from(t.to).isZero() &&
              (t.to = "0x0000000000000000000000000000000000000000"),
            null != t.input && null == t.data && (t.data = t.input),
            null == t.to &&
              null == t.creates &&
              (t.creates = this.contractAddress(t)),
            (1 !== t.type && 2 !== t.type) ||
              null != t.accessList ||
              (t.accessList = []);
          const e = f.check(this.formats.transaction, t);
          if (null != t.chainId) {
            let r = t.chainId;
            (0, o.A7)(r) && (r = i.O$.from(r).toNumber()), (e.chainId = r);
          } else {
            let r = t.networkId;
            null == r && null == e.v && (r = t.chainId),
              (0, o.A7)(r) && (r = i.O$.from(r).toNumber()),
              "number" !== typeof r &&
                null != e.v &&
                ((r = (e.v - 35) / 2), r < 0 && (r = 0), (r = parseInt(r))),
              "number" !== typeof r && (r = 0),
              (e.chainId = r);
          }
          return (
            e.blockHash &&
              "x" === e.blockHash.replace(/0/g, "") &&
              (e.blockHash = null),
            e
          );
        }
        transaction(t) {
          return (0, u.Qc)(t);
        }
        receiptLog(t) {
          return f.check(this.formats.receiptLog, t);
        }
        receipt(t) {
          const e = f.check(this.formats.receipt, t);
          if (null != e.root)
            if (e.root.length <= 4) {
              const t = i.O$.from(e.root).toNumber();
              0 === t || 1 === t
                ? (null != e.status &&
                    e.status !== t &&
                    h.throwArgumentError(
                      "alt-root-status/status mismatch",
                      "value",
                      { root: e.root, status: e.status }
                    ),
                  (e.status = t),
                  delete e.root)
                : h.throwArgumentError(
                    "invalid alt-root-status",
                    "value.root",
                    e.root
                  );
            } else
              66 !== e.root.length &&
                h.throwArgumentError("invalid root hash", "value.root", e.root);
          return null != e.status && (e.byzantium = !0), e;
        }
        topics(t) {
          return Array.isArray(t)
            ? t.map((t) => this.topics(t))
            : null != t
            ? this.hash(t, !0)
            : null;
        }
        filter(t) {
          return f.check(this.formats.filter, t);
        }
        filterLog(t) {
          return f.check(this.formats.filterLog, t);
        }
        static check(t, e) {
          const r = {};
          for (const i in t)
            try {
              const n = t[i](e[i]);
              void 0 !== n && (r[i] = n);
            } catch (n) {
              throw ((n.checkKey = i), (n.checkValue = e[i]), n);
            }
          return r;
        }
        static allowNull(t, e) {
          return function (r) {
            return null == r ? e : t(r);
          };
        }
        static allowFalsish(t, e) {
          return function (r) {
            return r ? t(r) : e;
          };
        }
        static arrayOf(t) {
          return function (e) {
            if (!Array.isArray(e)) throw new Error("not an array");
            const r = [];
            return (
              e.forEach(function (e) {
                r.push(t(e));
              }),
              r
            );
          };
        }
      }
      function d(t) {
        return t && "function" === typeof t.isCommunityResource;
      }
      function p(t) {
        return d(t) && t.isCommunityResource();
      }
      let m = !1;
      function g() {
        m ||
          ((m = !0),
          console.log("========= NOTICE ========="),
          console.log(
            "Request-Rate Exceeded  (this message will not be repeated)"
          ),
          console.log(""),
          console.log(
            "The default API keys for each service are provided as a highly-throttled,"
          ),
          console.log(
            "community resource for low-traffic projects and early prototyping."
          ),
          console.log(""),
          console.log(
            "While your application will continue to function, we highly recommended"
          ),
          console.log(
            "signing up for your own API keys to improve performance, increase your"
          ),
          console.log(
            "request rate/limit and enable other perks, such as metrics and advanced APIs."
          ),
          console.log(""),
          console.log("For more details: https://docs.ethers.io/api-keys/"),
          console.log("=========================="));
      }
    },
    28999: function (t, e, r) {
      "use strict";
      r.d(e, {
        C: function () {
          return M;
        },
        r: function () {
          return C;
        },
      });
      var n = r(48986),
        i = r(93442),
        o = r(25689),
        s = r(27454),
        a = r(98690),
        u = r(10208),
        c = r(25567),
        l = r(28676),
        h = r(87898),
        f = r(32565),
        d = r(81586),
        p = function (t, e, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function s(t) {
              try {
                u(n.next(t));
              } catch (e) {
                o(e);
              }
            }
            function a(t) {
              try {
                u(n.throw(t));
              } catch (e) {
                o(e);
              }
            }
            function u(t) {
              var e;
              t.done
                ? i(t.value)
                : ((e = t.value),
                  e instanceof r
                    ? e
                    : new r(function (t) {
                        t(e);
                      })).then(s, a);
            }
            u((n = n.apply(t, e || [])).next());
          });
        };
      const m = new h.Yd(f.i),
        g = ["call", "estimateGas"];
      function v(t, e) {
        if (null == t) return null;
        if ("string" === typeof t.message && t.message.match("reverted")) {
          const r = (0, o.A7)(t.data) ? t.data : null;
          if (!e || r) return { message: t.message, data: r };
        }
        if ("object" === typeof t) {
          for (const r in t) {
            const n = v(t[r], e);
            if (n) return n;
          }
          return null;
        }
        if ("string" === typeof t)
          try {
            return v(JSON.parse(t), e);
          } catch (r) {}
        return null;
      }
      function y(t, e, r) {
        const n = r.transaction || r.signedTransaction;
        if ("call" === t) {
          const t = v(e, !0);
          if (t) return t.data;
          m.throwError(
            "missing revert data in call exception; Transaction reverted without a reason string",
            h.Yd.errors.CALL_EXCEPTION,
            { data: "0x", transaction: n, error: e }
          );
        }
        if ("estimateGas" === t) {
          let r = v(e.body, !1);
          null == r && (r = v(e, !1)),
            r &&
              m.throwError(
                "cannot estimate gas; transaction may fail or may require manual gas limit",
                h.Yd.errors.UNPREDICTABLE_GAS_LIMIT,
                { reason: r.message, method: t, transaction: n, error: e }
              );
        }
        let i = e.message;
        throw (
          (e.code === h.Yd.errors.SERVER_ERROR &&
          e.error &&
          "string" === typeof e.error.message
            ? (i = e.error.message)
            : "string" === typeof e.body
            ? (i = e.body)
            : "string" === typeof e.responseText && (i = e.responseText),
          (i = (i || "").toLowerCase()),
          i.match(/insufficient funds|base fee exceeds gas limit/i) &&
            m.throwError(
              "insufficient funds for intrinsic transaction cost",
              h.Yd.errors.INSUFFICIENT_FUNDS,
              { error: e, method: t, transaction: n }
            ),
          i.match(/nonce (is )?too low/i) &&
            m.throwError(
              "nonce has already been used",
              h.Yd.errors.NONCE_EXPIRED,
              { error: e, method: t, transaction: n }
            ),
          i.match(
            /replacement transaction underpriced|transaction gas price.*too low/i
          ) &&
            m.throwError(
              "replacement fee too low",
              h.Yd.errors.REPLACEMENT_UNDERPRICED,
              { error: e, method: t, transaction: n }
            ),
          i.match(/only replay-protected/i) &&
            m.throwError(
              "legacy pre-eip-155 transactions not supported",
              h.Yd.errors.UNSUPPORTED_OPERATION,
              { error: e, method: t, transaction: n }
            ),
          g.indexOf(t) >= 0 &&
            i.match(
              /gas required exceeds allowance|always failing transaction|execution reverted/
            ) &&
            m.throwError(
              "cannot estimate gas; transaction may fail or may require manual gas limit",
              h.Yd.errors.UNPREDICTABLE_GAS_LIMIT,
              { error: e, method: t, transaction: n }
            ),
          e)
        );
      }
      function w(t) {
        return new Promise(function (e) {
          setTimeout(e, t);
        });
      }
      function b(t) {
        if (t.error) {
          const e = new Error(t.error.message);
          throw ((e.code = t.error.code), (e.data = t.error.data), e);
        }
        return t.result;
      }
      function A(t) {
        return t ? t.toLowerCase() : t;
      }
      const E = {};
      class M extends n.E {
        constructor(t, e, r) {
          if ((super(), t !== E))
            throw new Error(
              "do not call the JsonRpcSigner constructor directly; use provider.getSigner"
            );
          (0, a.zG)(this, "provider", e),
            null == r && (r = 0),
            "string" === typeof r
              ? ((0, a.zG)(
                  this,
                  "_address",
                  this.provider.formatter.address(r)
                ),
                (0, a.zG)(this, "_index", null))
              : "number" === typeof r
              ? ((0, a.zG)(this, "_index", r),
                (0, a.zG)(this, "_address", null))
              : m.throwArgumentError(
                  "invalid address or index",
                  "addressOrIndex",
                  r
                );
        }
        connect(t) {
          return m.throwError(
            "cannot alter JSON-RPC Signer connection",
            h.Yd.errors.UNSUPPORTED_OPERATION,
            { operation: "connect" }
          );
        }
        connectUnchecked() {
          return new k(E, this.provider, this._address || this._index);
        }
        getAddress() {
          return this._address
            ? Promise.resolve(this._address)
            : this.provider
                .send("eth_accounts", [])
                .then(
                  (t) => (
                    t.length <= this._index &&
                      m.throwError(
                        "unknown account #" + this._index,
                        h.Yd.errors.UNSUPPORTED_OPERATION,
                        { operation: "getAddress" }
                      ),
                    this.provider.formatter.address(t[this._index])
                  )
                );
        }
        sendUncheckedTransaction(t) {
          t = (0, a.DC)(t);
          const e = this.getAddress().then(
            (t) => (t && (t = t.toLowerCase()), t)
          );
          if (null == t.gasLimit) {
            const r = (0, a.DC)(t);
            (r.from = e), (t.gasLimit = this.provider.estimateGas(r));
          }
          return (
            null != t.to &&
              (t.to = Promise.resolve(t.to).then((t) =>
                p(this, void 0, void 0, function* () {
                  if (null == t) return null;
                  const e = yield this.provider.resolveName(t);
                  return (
                    null == e &&
                      m.throwArgumentError(
                        "provided ENS name resolves to null",
                        "tx.to",
                        t
                      ),
                    e
                  );
                })
              )),
            (0, a.mE)({ tx: (0, a.mE)(t), sender: e }).then(
              ({ tx: e, sender: r }) => {
                null != e.from
                  ? e.from.toLowerCase() !== r &&
                    m.throwArgumentError(
                      "from address mismatch",
                      "transaction",
                      t
                    )
                  : (e.from = r);
                const n = this.provider.constructor.hexlifyTransaction(e, {
                  from: !0,
                });
                return this.provider.send("eth_sendTransaction", [n]).then(
                  (t) => t,
                  (t) => (
                    "string" === typeof t.message &&
                      t.message.match(/user denied/i) &&
                      m.throwError(
                        "user rejected transaction",
                        h.Yd.errors.ACTION_REJECTED,
                        { action: "sendTransaction", transaction: e }
                      ),
                    y("sendTransaction", t, n)
                  )
                );
              }
            )
          );
        }
        signTransaction(t) {
          return m.throwError(
            "signing transactions is unsupported",
            h.Yd.errors.UNSUPPORTED_OPERATION,
            { operation: "signTransaction" }
          );
        }
        sendTransaction(t) {
          return p(this, void 0, void 0, function* () {
            const e = yield this.provider._getInternalBlockNumber(
                100 + 2 * this.provider.pollingInterval
              ),
              r = yield this.sendUncheckedTransaction(t);
            try {
              return yield (0, l.$l)(
                () =>
                  p(this, void 0, void 0, function* () {
                    const t = yield this.provider.getTransaction(r);
                    if (null !== t)
                      return this.provider._wrapTransaction(t, r, e);
                  }),
                { oncePoll: this.provider }
              );
            } catch (n) {
              throw ((n.transactionHash = r), n);
            }
          });
        }
        signMessage(t) {
          return p(this, void 0, void 0, function* () {
            const e = "string" === typeof t ? (0, u.Y0)(t) : t,
              r = yield this.getAddress();
            try {
              return yield this.provider.send("personal_sign", [
                (0, o.Dv)(e),
                r.toLowerCase(),
              ]);
            } catch (n) {
              throw (
                ("string" === typeof n.message &&
                  n.message.match(/user denied/i) &&
                  m.throwError(
                    "user rejected signing",
                    h.Yd.errors.ACTION_REJECTED,
                    { action: "signMessage", from: r, message: e }
                  ),
                n)
              );
            }
          });
        }
        _legacySignMessage(t) {
          return p(this, void 0, void 0, function* () {
            const e = "string" === typeof t ? (0, u.Y0)(t) : t,
              r = yield this.getAddress();
            try {
              return yield this.provider.send("eth_sign", [
                r.toLowerCase(),
                (0, o.Dv)(e),
              ]);
            } catch (n) {
              throw (
                ("string" === typeof n.message &&
                  n.message.match(/user denied/i) &&
                  m.throwError(
                    "user rejected signing",
                    h.Yd.errors.ACTION_REJECTED,
                    { action: "_legacySignMessage", from: r, message: e }
                  ),
                n)
              );
            }
          });
        }
        _signTypedData(t, e, r) {
          return p(this, void 0, void 0, function* () {
            const n = yield s.E.resolveNames(t, e, r, (t) =>
                this.provider.resolveName(t)
              ),
              i = yield this.getAddress();
            try {
              return yield this.provider.send("eth_signTypedData_v4", [
                i.toLowerCase(),
                JSON.stringify(s.E.getPayload(n.domain, e, n.value)),
              ]);
            } catch (o) {
              throw (
                ("string" === typeof o.message &&
                  o.message.match(/user denied/i) &&
                  m.throwError(
                    "user rejected signing",
                    h.Yd.errors.ACTION_REJECTED,
                    {
                      action: "_signTypedData",
                      from: i,
                      message: { domain: n.domain, types: e, value: n.value },
                    }
                  ),
                o)
              );
            }
          });
        }
        unlock(t) {
          return p(this, void 0, void 0, function* () {
            const e = this.provider,
              r = yield this.getAddress();
            return e.send("personal_unlockAccount", [r.toLowerCase(), t, null]);
          });
        }
      }
      class k extends M {
        sendTransaction(t) {
          return this.sendUncheckedTransaction(t).then((t) => ({
            hash: t,
            nonce: null,
            gasLimit: null,
            gasPrice: null,
            data: null,
            value: null,
            chainId: null,
            confirmations: 0,
            from: null,
            wait: (e) => this.provider.waitForTransaction(t, e),
          }));
        }
      }
      const _ = {
        chainId: !0,
        data: !0,
        gasLimit: !0,
        gasPrice: !0,
        nonce: !0,
        to: !0,
        value: !0,
        type: !0,
        accessList: !0,
        maxFeePerGas: !0,
        maxPriorityFeePerGas: !0,
      };
      class C extends d.Zk {
        constructor(t, e) {
          let r = e;
          null == r &&
            (r = new Promise((t, e) => {
              setTimeout(() => {
                this.detectNetwork().then(
                  (e) => {
                    t(e);
                  },
                  (t) => {
                    e(t);
                  }
                );
              }, 0);
            })),
            super(r),
            t || (t = (0, a.tu)(this.constructor, "defaultUrl")()),
            "string" === typeof t
              ? (0, a.zG)(this, "connection", Object.freeze({ url: t }))
              : (0, a.zG)(this, "connection", Object.freeze((0, a.DC)(t))),
            (this._nextId = 42);
        }
        get _cache() {
          return (
            null == this._eventLoopCache && (this._eventLoopCache = {}),
            this._eventLoopCache
          );
        }
        static defaultUrl() {
          return "http://localhost:8545";
        }
        detectNetwork() {
          return (
            this._cache.detectNetwork ||
              ((this._cache.detectNetwork = this._uncachedDetectNetwork()),
              setTimeout(() => {
                this._cache.detectNetwork = null;
              }, 0)),
            this._cache.detectNetwork
          );
        }
        _uncachedDetectNetwork() {
          return p(this, void 0, void 0, function* () {
            yield w(0);
            let t = null;
            try {
              t = yield this.send("eth_chainId", []);
            } catch (e) {
              try {
                t = yield this.send("net_version", []);
              } catch (e) {}
            }
            if (null != t) {
              const r = (0, a.tu)(this.constructor, "getNetwork");
              try {
                return r(i.O$.from(t).toNumber());
              } catch (e) {
                return m.throwError(
                  "could not detect network",
                  h.Yd.errors.NETWORK_ERROR,
                  { chainId: t, event: "invalidNetwork", serverError: e }
                );
              }
            }
            return m.throwError(
              "could not detect network",
              h.Yd.errors.NETWORK_ERROR,
              { event: "noNetwork" }
            );
          });
        }
        getSigner(t) {
          return new M(E, this, t);
        }
        getUncheckedSigner(t) {
          return this.getSigner(t).connectUnchecked();
        }
        listAccounts() {
          return this.send("eth_accounts", []).then((t) =>
            t.map((t) => this.formatter.address(t))
          );
        }
        send(t, e) {
          const r = {
            method: t,
            params: e,
            id: this._nextId++,
            jsonrpc: "2.0",
          };
          this.emit("debug", {
            action: "request",
            request: (0, a.p$)(r),
            provider: this,
          });
          const n = ["eth_chainId", "eth_blockNumber"].indexOf(t) >= 0;
          if (n && this._cache[t]) return this._cache[t];
          const i = (0, l.rd)(this.connection, JSON.stringify(r), b).then(
            (t) => (
              this.emit("debug", {
                action: "response",
                request: r,
                response: t,
                provider: this,
              }),
              t
            ),
            (t) => {
              throw (
                (this.emit("debug", {
                  action: "response",
                  error: t,
                  request: r,
                  provider: this,
                }),
                t)
              );
            }
          );
          return (
            n &&
              ((this._cache[t] = i),
              setTimeout(() => {
                this._cache[t] = null;
              }, 0)),
            i
          );
        }
        prepareRequest(t, e) {
          switch (t) {
            case "getBlockNumber":
              return ["eth_blockNumber", []];
            case "getGasPrice":
              return ["eth_gasPrice", []];
            case "getBalance":
              return ["eth_getBalance", [A(e.address), e.blockTag]];
            case "getTransactionCount":
              return ["eth_getTransactionCount", [A(e.address), e.blockTag]];
            case "getCode":
              return ["eth_getCode", [A(e.address), e.blockTag]];
            case "getStorageAt":
              return [
                "eth_getStorageAt",
                [A(e.address), (0, o.$m)(e.position, 32), e.blockTag],
              ];
            case "sendTransaction":
              return ["eth_sendRawTransaction", [e.signedTransaction]];
            case "getBlock":
              return e.blockTag
                ? [
                    "eth_getBlockByNumber",
                    [e.blockTag, !!e.includeTransactions],
                  ]
                : e.blockHash
                ? ["eth_getBlockByHash", [e.blockHash, !!e.includeTransactions]]
                : null;
            case "getTransaction":
              return ["eth_getTransactionByHash", [e.transactionHash]];
            case "getTransactionReceipt":
              return ["eth_getTransactionReceipt", [e.transactionHash]];
            case "call":
              return [
                "eth_call",
                [
                  (0, a.tu)(this.constructor, "hexlifyTransaction")(
                    e.transaction,
                    { from: !0 }
                  ),
                  e.blockTag,
                ],
              ];
            case "estimateGas":
              return [
                "eth_estimateGas",
                [
                  (0, a.tu)(this.constructor, "hexlifyTransaction")(
                    e.transaction,
                    { from: !0 }
                  ),
                ],
              ];
            case "getLogs":
              return (
                e.filter &&
                  null != e.filter.address &&
                  (e.filter.address = A(e.filter.address)),
                ["eth_getLogs", [e.filter]]
              );
          }
          return null;
        }
        perform(t, e) {
          return p(this, void 0, void 0, function* () {
            if ("call" === t || "estimateGas" === t) {
              const t = e.transaction;
              if (
                t &&
                null != t.type &&
                i.O$.from(t.type).isZero() &&
                null == t.maxFeePerGas &&
                null == t.maxPriorityFeePerGas
              ) {
                const r = yield this.getFeeData();
                null == r.maxFeePerGas &&
                  null == r.maxPriorityFeePerGas &&
                  (((e = (0, a.DC)(e)).transaction = (0, a.DC)(t)),
                  delete e.transaction.type);
              }
            }
            const r = this.prepareRequest(t, e);
            null == r &&
              m.throwError(
                t + " not implemented",
                h.Yd.errors.NOT_IMPLEMENTED,
                { operation: t }
              );
            try {
              return yield this.send(r[0], r[1]);
            } catch (n) {
              return y(t, n, e);
            }
          });
        }
        _startEvent(t) {
          "pending" === t.tag && this._startPending(), super._startEvent(t);
        }
        _startPending() {
          if (null != this._pendingFilter) return;
          const t = this,
            e = this.send("eth_newPendingTransactionFilter", []);
          (this._pendingFilter = e),
            e
              .then(function (r) {
                return (
                  (function n() {
                    t.send("eth_getFilterChanges", [r])
                      .then(function (r) {
                        if (t._pendingFilter != e) return null;
                        let n = Promise.resolve();
                        return (
                          r.forEach(function (e) {
                            (t._emitted["t:" + e.toLowerCase()] = "pending"),
                              (n = n.then(function () {
                                return t.getTransaction(e).then(function (e) {
                                  return t.emit("pending", e), null;
                                });
                              }));
                          }),
                          n.then(function () {
                            return w(1e3);
                          })
                        );
                      })
                      .then(function () {
                        if (t._pendingFilter == e)
                          return (
                            setTimeout(function () {
                              n();
                            }, 0),
                            null
                          );
                        t.send("eth_uninstallFilter", [r]);
                      })
                      .catch((t) => {});
                  })(),
                  r
                );
              })
              .catch((t) => {});
        }
        _stopEvent(t) {
          "pending" === t.tag &&
            0 === this.listenerCount("pending") &&
            (this._pendingFilter = null),
            super._stopEvent(t);
        }
        static hexlifyTransaction(t, e) {
          const r = (0, a.DC)(_);
          if (e) for (const i in e) e[i] && (r[i] = !0);
          (0, a.uj)(t, r);
          const n = {};
          return (
            [
              "chainId",
              "gasLimit",
              "gasPrice",
              "type",
              "maxFeePerGas",
              "maxPriorityFeePerGas",
              "nonce",
              "value",
            ].forEach(function (e) {
              if (null == t[e]) return;
              const r = (0, o.$P)(i.O$.from(t[e]));
              "gasLimit" === e && (e = "gas"), (n[e] = r);
            }),
            ["from", "to", "data"].forEach(function (e) {
              null != t[e] && (n[e] = (0, o.Dv)(t[e]));
            }),
            t.accessList && (n.accessList = (0, c.z7)(t.accessList)),
            n
          );
        }
      }
    },
    96269: function (t, e, r) {
      "use strict";
      r.d(e, {
        Q: function () {
          return l;
        },
      });
      var n = r(98690),
        i = r(87898),
        o = r(32565),
        s = r(28999);
      const a = new i.Yd(o.i);
      let u = 1;
      function c(t, e) {
        const r = "Web3LegacyFetcher";
        return function (t, i) {
          const o = { method: t, params: i, id: u++, jsonrpc: "2.0" };
          return new Promise((t, i) => {
            this.emit("debug", {
              action: "request",
              fetcher: r,
              request: (0, n.p$)(o),
              provider: this,
            }),
              e(o, (e, n) => {
                if (e)
                  return (
                    this.emit("debug", {
                      action: "response",
                      fetcher: r,
                      error: e,
                      request: o,
                      provider: this,
                    }),
                    i(e)
                  );
                if (
                  (this.emit("debug", {
                    action: "response",
                    fetcher: r,
                    request: o,
                    response: n,
                    provider: this,
                  }),
                  n.error)
                ) {
                  const t = new Error(n.error.message);
                  return (t.code = n.error.code), (t.data = n.error.data), i(t);
                }
                t(n.result);
              });
          });
        };
      }
      class l extends s.r {
        constructor(t, e) {
          null == t && a.throwArgumentError("missing provider", "provider", t);
          let r = null,
            i = null,
            o = null;
          "function" === typeof t
            ? ((r = "unknown:"), (i = t))
            : ((r = t.host || t.path || ""),
              !r && t.isMetaMask && (r = "metamask"),
              (o = t),
              t.request
                ? ("" === r && (r = "eip-1193:"),
                  (i = (function (t) {
                    return function (e, r) {
                      null == r && (r = []);
                      const i = { method: e, params: r };
                      return (
                        this.emit("debug", {
                          action: "request",
                          fetcher: "Eip1193Fetcher",
                          request: (0, n.p$)(i),
                          provider: this,
                        }),
                        t.request(i).then(
                          (t) => (
                            this.emit("debug", {
                              action: "response",
                              fetcher: "Eip1193Fetcher",
                              request: i,
                              response: t,
                              provider: this,
                            }),
                            t
                          ),
                          (t) => {
                            throw (
                              (this.emit("debug", {
                                action: "response",
                                fetcher: "Eip1193Fetcher",
                                request: i,
                                error: t,
                                provider: this,
                              }),
                              t)
                            );
                          }
                        )
                      );
                    };
                  })(t)))
                : t.sendAsync
                ? (i = c(0, t.sendAsync.bind(t)))
                : t.send
                ? (i = c(0, t.send.bind(t)))
                : a.throwArgumentError("unsupported provider", "provider", t),
              r || (r = "unknown:")),
            super(r, e),
            (0, n.zG)(this, "jsonRpcFetchFunc", i),
            (0, n.zG)(this, "provider", o);
        }
        send(t, e) {
          return this.jsonRpcFetchFunc(t, e);
        }
      }
    },
    83239: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          decode: function () {
            return f;
          },
          encode: function () {
            return c;
          },
        });
      var n = r(25689),
        i = r(87898);
      const o = new i.Yd("rlp/5.7.0");
      function s(t) {
        const e = [];
        for (; t; ) e.unshift(255 & t), (t >>= 8);
        return e;
      }
      function a(t, e, r) {
        let n = 0;
        for (let i = 0; i < r; i++) n = 256 * n + t[e + i];
        return n;
      }
      function u(t) {
        if (Array.isArray(t)) {
          let e = [];
          if (
            (t.forEach(function (t) {
              e = e.concat(u(t));
            }),
            e.length <= 55)
          )
            return e.unshift(192 + e.length), e;
          const r = s(e.length);
          return r.unshift(247 + r.length), r.concat(e);
        }
        (0, n.Zq)(t) ||
          o.throwArgumentError("RLP object must be BytesLike", "object", t);
        const e = Array.prototype.slice.call((0, n.lE)(t));
        if (1 === e.length && e[0] <= 127) return e;
        if (e.length <= 55) return e.unshift(128 + e.length), e;
        const r = s(e.length);
        return r.unshift(183 + r.length), r.concat(e);
      }
      function c(t) {
        return (0, n.Dv)(u(t));
      }
      function l(t, e, r, n) {
        const s = [];
        for (; r < e + 1 + n; ) {
          const a = h(t, r);
          s.push(a.result),
            (r += a.consumed) > e + 1 + n &&
              o.throwError(
                "child data too short",
                i.Yd.errors.BUFFER_OVERRUN,
                {}
              );
        }
        return { consumed: 1 + n, result: s };
      }
      function h(t, e) {
        if (
          (0 === t.length &&
            o.throwError("data too short", i.Yd.errors.BUFFER_OVERRUN, {}),
          t[e] >= 248)
        ) {
          const r = t[e] - 247;
          e + 1 + r > t.length &&
            o.throwError(
              "data short segment too short",
              i.Yd.errors.BUFFER_OVERRUN,
              {}
            );
          const n = a(t, e + 1, r);
          return (
            e + 1 + r + n > t.length &&
              o.throwError(
                "data long segment too short",
                i.Yd.errors.BUFFER_OVERRUN,
                {}
              ),
            l(t, e, e + 1 + r, r + n)
          );
        }
        if (t[e] >= 192) {
          const r = t[e] - 192;
          return (
            e + 1 + r > t.length &&
              o.throwError(
                "data array too short",
                i.Yd.errors.BUFFER_OVERRUN,
                {}
              ),
            l(t, e, e + 1, r)
          );
        }
        if (t[e] >= 184) {
          const r = t[e] - 183;
          e + 1 + r > t.length &&
            o.throwError(
              "data array too short",
              i.Yd.errors.BUFFER_OVERRUN,
              {}
            );
          const s = a(t, e + 1, r);
          e + 1 + r + s > t.length &&
            o.throwError(
              "data array too short",
              i.Yd.errors.BUFFER_OVERRUN,
              {}
            );
          return {
            consumed: 1 + r + s,
            result: (0, n.Dv)(t.slice(e + 1 + r, e + 1 + r + s)),
          };
        }
        if (t[e] >= 128) {
          const r = t[e] - 128;
          e + 1 + r > t.length &&
            o.throwError("data too short", i.Yd.errors.BUFFER_OVERRUN, {});
          return {
            consumed: 1 + r,
            result: (0, n.Dv)(t.slice(e + 1, e + 1 + r)),
          };
        }
        return { consumed: 1, result: (0, n.Dv)(t[e]) };
      }
      function f(t) {
        const e = (0, n.lE)(t),
          r = h(e, 0);
        return (
          r.consumed !== e.length &&
            o.throwArgumentError("invalid rlp data", "data", t),
          r.result
        );
      }
    },
    14956: function (t, e, r) {
      "use strict";
      r.d(e, {
        Gy: function () {
          return f;
        },
        bP: function () {
          return c;
        },
        JQ: function () {
          return l;
        },
        o: function () {
          return h;
        },
      });
      var n = r(31206),
        i = r.n(n),
        o = r(25689),
        s = r(39497),
        a = r(87898);
      const u = new a.Yd("sha2/5.7.0");
      function c(t) {
        return (
          "0x" +
          i()
            .ripemd160()
            .update((0, o.lE)(t))
            .digest("hex")
        );
      }
      function l(t) {
        return (
          "0x" +
          i()
            .sha256()
            .update((0, o.lE)(t))
            .digest("hex")
        );
      }
      function h(t) {
        return (
          "0x" +
          i()
            .sha512()
            .update((0, o.lE)(t))
            .digest("hex")
        );
      }
      function f(t, e, r) {
        return (
          s.p[t] ||
            u.throwError(
              "unsupported algorithm " + t,
              a.Yd.errors.UNSUPPORTED_OPERATION,
              { operation: "hmac", algorithm: t }
            ),
          "0x" +
            i()
              .hmac(i()[t], (0, o.lE)(e))
              .update((0, o.lE)(r))
              .digest("hex")
        );
      }
    },
    39497: function (t, e, r) {
      "use strict";
      var n;
      r.d(e, {
        p: function () {
          return n;
        },
      }),
        (function (t) {
          (t.sha256 = "sha256"), (t.sha512 = "sha512");
        })(n || (n = {}));
    },
    58979: function (t, e, r) {
      "use strict";
      r.d(e, {
        Et: function () {
          return Q;
        },
        VW: function () {
          return V;
        },
        LO: function () {
          return W;
        },
      });
      var n = r(95973),
        i = r.n(n),
        o = r(31206),
        s = r.n(o);
      "undefined" !== typeof globalThis
        ? globalThis
        : "undefined" !== typeof window
        ? window
        : "undefined" !== typeof r.g
        ? r.g
        : "undefined" !== typeof self && self;
      function a(t, e, r) {
        return (
          t(
            (r = {
              path: e,
              exports: {},
              require: function (t, e) {
                return (function () {
                  throw new Error(
                    "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
                  );
                })((void 0 === e || null === e) && r.path);
              },
            }),
            r.exports
          ),
          r.exports
        );
      }
      var u = c;
      function c(t, e) {
        if (!t) throw new Error(e || "Assertion failed");
      }
      c.equal = function (t, e, r) {
        if (t != e) throw new Error(r || "Assertion failed: " + t + " != " + e);
      };
      var l = a(function (t, e) {
          var r = e;
          function n(t) {
            return 1 === t.length ? "0" + t : t;
          }
          function i(t) {
            for (var e = "", r = 0; r < t.length; r++)
              e += n(t[r].toString(16));
            return e;
          }
          (r.toArray = function (t, e) {
            if (Array.isArray(t)) return t.slice();
            if (!t) return [];
            var r = [];
            if ("string" !== typeof t) {
              for (var n = 0; n < t.length; n++) r[n] = 0 | t[n];
              return r;
            }
            if ("hex" === e) {
              (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 !== 0 &&
                (t = "0" + t);
              for (n = 0; n < t.length; n += 2)
                r.push(parseInt(t[n] + t[n + 1], 16));
            } else
              for (n = 0; n < t.length; n++) {
                var i = t.charCodeAt(n),
                  o = i >> 8,
                  s = 255 & i;
                o ? r.push(o, s) : r.push(s);
              }
            return r;
          }),
            (r.zero2 = n),
            (r.toHex = i),
            (r.encode = function (t, e) {
              return "hex" === e ? i(t) : t;
            });
        }),
        h = a(function (t, e) {
          var r = e;
          (r.assert = u),
            (r.toArray = l.toArray),
            (r.zero2 = l.zero2),
            (r.toHex = l.toHex),
            (r.encode = l.encode),
            (r.getNAF = function (t, e, r) {
              var n = new Array(Math.max(t.bitLength(), r) + 1);
              n.fill(0);
              for (
                var i = 1 << (e + 1), o = t.clone(), s = 0;
                s < n.length;
                s++
              ) {
                var a,
                  u = o.andln(i - 1);
                o.isOdd()
                  ? ((a = u > (i >> 1) - 1 ? (i >> 1) - u : u), o.isubn(a))
                  : (a = 0),
                  (n[s] = a),
                  o.iushrn(1);
              }
              return n;
            }),
            (r.getJSF = function (t, e) {
              var r = [[], []];
              (t = t.clone()), (e = e.clone());
              for (var n, i = 0, o = 0; t.cmpn(-i) > 0 || e.cmpn(-o) > 0; ) {
                var s,
                  a,
                  u = (t.andln(3) + i) & 3,
                  c = (e.andln(3) + o) & 3;
                3 === u && (u = -1),
                  3 === c && (c = -1),
                  (s =
                    0 === (1 & u)
                      ? 0
                      : (3 !== (n = (t.andln(7) + i) & 7) && 5 !== n) || 2 !== c
                      ? u
                      : -u),
                  r[0].push(s),
                  (a =
                    0 === (1 & c)
                      ? 0
                      : (3 !== (n = (e.andln(7) + o) & 7) && 5 !== n) || 2 !== u
                      ? c
                      : -c),
                  r[1].push(a),
                  2 * i === s + 1 && (i = 1 - i),
                  2 * o === a + 1 && (o = 1 - o),
                  t.iushrn(1),
                  e.iushrn(1);
              }
              return r;
            }),
            (r.cachedProperty = function (t, e, r) {
              var n = "_" + e;
              t.prototype[e] = function () {
                return void 0 !== this[n] ? this[n] : (this[n] = r.call(this));
              };
            }),
            (r.parseBytes = function (t) {
              return "string" === typeof t ? r.toArray(t, "hex") : t;
            }),
            (r.intFromLE = function (t) {
              return new (i())(t, "hex", "le");
            });
        }),
        f = h.getNAF,
        d = h.getJSF,
        p = h.assert;
      function m(t, e) {
        (this.type = t),
          (this.p = new (i())(e.p, 16)),
          (this.red = e.prime ? i().red(e.prime) : i().mont(this.p)),
          (this.zero = new (i())(0).toRed(this.red)),
          (this.one = new (i())(1).toRed(this.red)),
          (this.two = new (i())(2).toRed(this.red)),
          (this.n = e.n && new (i())(e.n, 16)),
          (this.g = e.g && this.pointFromJSON(e.g, e.gRed)),
          (this._wnafT1 = new Array(4)),
          (this._wnafT2 = new Array(4)),
          (this._wnafT3 = new Array(4)),
          (this._wnafT4 = new Array(4)),
          (this._bitLength = this.n ? this.n.bitLength() : 0);
        var r = this.n && this.p.div(this.n);
        !r || r.cmpn(100) > 0
          ? (this.redN = null)
          : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
      }
      var g = m;
      function v(t, e) {
        (this.curve = t), (this.type = e), (this.precomputed = null);
      }
      (m.prototype.point = function () {
        throw new Error("Not implemented");
      }),
        (m.prototype.validate = function () {
          throw new Error("Not implemented");
        }),
        (m.prototype._fixedNafMul = function (t, e) {
          p(t.precomputed);
          var r = t._getDoubles(),
            n = f(e, 1, this._bitLength),
            i = (1 << (r.step + 1)) - (r.step % 2 === 0 ? 2 : 1);
          i /= 3;
          var o,
            s,
            a = [];
          for (o = 0; o < n.length; o += r.step) {
            s = 0;
            for (var u = o + r.step - 1; u >= o; u--) s = (s << 1) + n[u];
            a.push(s);
          }
          for (
            var c = this.jpoint(null, null, null),
              l = this.jpoint(null, null, null),
              h = i;
            h > 0;
            h--
          ) {
            for (o = 0; o < a.length; o++)
              (s = a[o]) === h
                ? (l = l.mixedAdd(r.points[o]))
                : s === -h && (l = l.mixedAdd(r.points[o].neg()));
            c = c.add(l);
          }
          return c.toP();
        }),
        (m.prototype._wnafMul = function (t, e) {
          var r = 4,
            n = t._getNAFPoints(r);
          r = n.wnd;
          for (
            var i = n.points,
              o = f(e, r, this._bitLength),
              s = this.jpoint(null, null, null),
              a = o.length - 1;
            a >= 0;
            a--
          ) {
            for (var u = 0; a >= 0 && 0 === o[a]; a--) u++;
            if ((a >= 0 && u++, (s = s.dblp(u)), a < 0)) break;
            var c = o[a];
            p(0 !== c),
              (s =
                "affine" === t.type
                  ? c > 0
                    ? s.mixedAdd(i[(c - 1) >> 1])
                    : s.mixedAdd(i[(-c - 1) >> 1].neg())
                  : c > 0
                  ? s.add(i[(c - 1) >> 1])
                  : s.add(i[(-c - 1) >> 1].neg()));
          }
          return "affine" === t.type ? s.toP() : s;
        }),
        (m.prototype._wnafMulAdd = function (t, e, r, n, i) {
          var o,
            s,
            a,
            u = this._wnafT1,
            c = this._wnafT2,
            l = this._wnafT3,
            h = 0;
          for (o = 0; o < n; o++) {
            var p = (a = e[o])._getNAFPoints(t);
            (u[o] = p.wnd), (c[o] = p.points);
          }
          for (o = n - 1; o >= 1; o -= 2) {
            var m = o - 1,
              g = o;
            if (1 === u[m] && 1 === u[g]) {
              var v = [e[m], null, null, e[g]];
              0 === e[m].y.cmp(e[g].y)
                ? ((v[1] = e[m].add(e[g])),
                  (v[2] = e[m].toJ().mixedAdd(e[g].neg())))
                : 0 === e[m].y.cmp(e[g].y.redNeg())
                ? ((v[1] = e[m].toJ().mixedAdd(e[g])),
                  (v[2] = e[m].add(e[g].neg())))
                : ((v[1] = e[m].toJ().mixedAdd(e[g])),
                  (v[2] = e[m].toJ().mixedAdd(e[g].neg())));
              var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                w = d(r[m], r[g]);
              for (
                h = Math.max(w[0].length, h),
                  l[m] = new Array(h),
                  l[g] = new Array(h),
                  s = 0;
                s < h;
                s++
              ) {
                var b = 0 | w[0][s],
                  A = 0 | w[1][s];
                (l[m][s] = y[3 * (b + 1) + (A + 1)]), (l[g][s] = 0), (c[m] = v);
              }
            } else
              (l[m] = f(r[m], u[m], this._bitLength)),
                (l[g] = f(r[g], u[g], this._bitLength)),
                (h = Math.max(l[m].length, h)),
                (h = Math.max(l[g].length, h));
          }
          var E = this.jpoint(null, null, null),
            M = this._wnafT4;
          for (o = h; o >= 0; o--) {
            for (var k = 0; o >= 0; ) {
              var _ = !0;
              for (s = 0; s < n; s++)
                (M[s] = 0 | l[s][o]), 0 !== M[s] && (_ = !1);
              if (!_) break;
              k++, o--;
            }
            if ((o >= 0 && k++, (E = E.dblp(k)), o < 0)) break;
            for (s = 0; s < n; s++) {
              var C = M[s];
              0 !== C &&
                (C > 0
                  ? (a = c[s][(C - 1) >> 1])
                  : C < 0 && (a = c[s][(-C - 1) >> 1].neg()),
                (E = "affine" === a.type ? E.mixedAdd(a) : E.add(a)));
            }
          }
          for (o = 0; o < n; o++) c[o] = null;
          return i ? E : E.toP();
        }),
        (m.BasePoint = v),
        (v.prototype.eq = function () {
          throw new Error("Not implemented");
        }),
        (v.prototype.validate = function () {
          return this.curve.validate(this);
        }),
        (m.prototype.decodePoint = function (t, e) {
          t = h.toArray(t, e);
          var r = this.p.byteLength();
          if (
            (4 === t[0] || 6 === t[0] || 7 === t[0]) &&
            t.length - 1 === 2 * r
          )
            return (
              6 === t[0]
                ? p(t[t.length - 1] % 2 === 0)
                : 7 === t[0] && p(t[t.length - 1] % 2 === 1),
              this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r))
            );
          if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r)
            return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
          throw new Error("Unknown point format");
        }),
        (v.prototype.encodeCompressed = function (t) {
          return this.encode(t, !0);
        }),
        (v.prototype._encode = function (t) {
          var e = this.curve.p.byteLength(),
            r = this.getX().toArray("be", e);
          return t
            ? [this.getY().isEven() ? 2 : 3].concat(r)
            : [4].concat(r, this.getY().toArray("be", e));
        }),
        (v.prototype.encode = function (t, e) {
          return h.encode(this._encode(e), t);
        }),
        (v.prototype.precompute = function (t) {
          if (this.precomputed) return this;
          var e = { doubles: null, naf: null, beta: null };
          return (
            (e.naf = this._getNAFPoints(8)),
            (e.doubles = this._getDoubles(4, t)),
            (e.beta = this._getBeta()),
            (this.precomputed = e),
            this
          );
        }),
        (v.prototype._hasDoubles = function (t) {
          if (!this.precomputed) return !1;
          var e = this.precomputed.doubles;
          return (
            !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
          );
        }),
        (v.prototype._getDoubles = function (t, e) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
          for (var r = [this], n = this, i = 0; i < e; i += t) {
            for (var o = 0; o < t; o++) n = n.dbl();
            r.push(n);
          }
          return { step: t, points: r };
        }),
        (v.prototype._getNAFPoints = function (t) {
          if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf;
          for (
            var e = [this],
              r = (1 << t) - 1,
              n = 1 === r ? null : this.dbl(),
              i = 1;
            i < r;
            i++
          )
            e[i] = e[i - 1].add(n);
          return { wnd: t, points: e };
        }),
        (v.prototype._getBeta = function () {
          return null;
        }),
        (v.prototype.dblp = function (t) {
          for (var e = this, r = 0; r < t; r++) e = e.dbl();
          return e;
        });
      var y = a(function (t) {
          "function" === typeof Object.create
            ? (t.exports = function (t, e) {
                e &&
                  ((t.super_ = e),
                  (t.prototype = Object.create(e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })));
              })
            : (t.exports = function (t, e) {
                if (e) {
                  t.super_ = e;
                  var r = function () {};
                  (r.prototype = e.prototype),
                    (t.prototype = new r()),
                    (t.prototype.constructor = t);
                }
              });
        }),
        w = h.assert;
      function b(t) {
        g.call(this, "short", t),
          (this.a = new (i())(t.a, 16).toRed(this.red)),
          (this.b = new (i())(t.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
          (this.endo = this._getEndomorphism(t)),
          (this._endoWnafT1 = new Array(4)),
          (this._endoWnafT2 = new Array(4));
      }
      y(b, g);
      var A = b;
      function E(t, e, r, n) {
        g.BasePoint.call(this, t, "affine"),
          null === e && null === r
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new (i())(e, 16)),
              (this.y = new (i())(r, 16)),
              n &&
                (this.x.forceRed(this.curve.red),
                this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1));
      }
      function M(t, e, r, n) {
        g.BasePoint.call(this, t, "jacobian"),
          null === e && null === r && null === n
            ? ((this.x = this.curve.one),
              (this.y = this.curve.one),
              (this.z = new (i())(0)))
            : ((this.x = new (i())(e, 16)),
              (this.y = new (i())(r, 16)),
              (this.z = new (i())(n, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one);
      }
      (b.prototype._getEndomorphism = function (t) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
          var e, r;
          if (t.beta) e = new (i())(t.beta, 16).toRed(this.red);
          else {
            var n = this._getEndoRoots(this.p);
            e = (e = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red);
          }
          if (t.lambda) r = new (i())(t.lambda, 16);
          else {
            var o = this._getEndoRoots(this.n);
            0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(e))
              ? (r = o[0])
              : ((r = o[1]), w(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))));
          }
          return {
            beta: e,
            lambda: r,
            basis: t.basis
              ? t.basis.map(function (t) {
                  return { a: new (i())(t.a, 16), b: new (i())(t.b, 16) };
                })
              : this._getEndoBasis(r),
          };
        }
      }),
        (b.prototype._getEndoRoots = function (t) {
          var e = t === this.p ? this.red : i().mont(t),
            r = new (i())(2).toRed(e).redInvm(),
            n = r.redNeg(),
            o = new (i())(3).toRed(e).redNeg().redSqrt().redMul(r);
          return [n.redAdd(o).fromRed(), n.redSub(o).fromRed()];
        }),
        (b.prototype._getEndoBasis = function (t) {
          for (
            var e,
              r,
              n,
              o,
              s,
              a,
              u,
              c,
              l,
              h = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              f = t,
              d = this.n.clone(),
              p = new (i())(1),
              m = new (i())(0),
              g = new (i())(0),
              v = new (i())(1),
              y = 0;
            0 !== f.cmpn(0);

          ) {
            var w = d.div(f);
            (c = d.sub(w.mul(f))), (l = g.sub(w.mul(p)));
            var b = v.sub(w.mul(m));
            if (!n && c.cmp(h) < 0)
              (e = u.neg()), (r = p), (n = c.neg()), (o = l);
            else if (n && 2 === ++y) break;
            (u = c), (d = f), (f = c), (g = p), (p = l), (v = m), (m = b);
          }
          (s = c.neg()), (a = l);
          var A = n.sqr().add(o.sqr());
          return (
            s.sqr().add(a.sqr()).cmp(A) >= 0 && ((s = e), (a = r)),
            n.negative && ((n = n.neg()), (o = o.neg())),
            s.negative && ((s = s.neg()), (a = a.neg())),
            [
              { a: n, b: o },
              { a: s, b: a },
            ]
          );
        }),
        (b.prototype._endoSplit = function (t) {
          var e = this.endo.basis,
            r = e[0],
            n = e[1],
            i = n.b.mul(t).divRound(this.n),
            o = r.b.neg().mul(t).divRound(this.n),
            s = i.mul(r.a),
            a = o.mul(n.a),
            u = i.mul(r.b),
            c = o.mul(n.b);
          return { k1: t.sub(s).sub(a), k2: u.add(c).neg() };
        }),
        (b.prototype.pointFromX = function (t, e) {
          (t = new (i())(t, 16)).red || (t = t.toRed(this.red));
          var r = t
              .redSqr()
              .redMul(t)
              .redIAdd(t.redMul(this.a))
              .redIAdd(this.b),
            n = r.redSqrt();
          if (0 !== n.redSqr().redSub(r).cmp(this.zero))
            throw new Error("invalid point");
          var o = n.fromRed().isOdd();
          return ((e && !o) || (!e && o)) && (n = n.redNeg()), this.point(t, n);
        }),
        (b.prototype.validate = function (t) {
          if (t.inf) return !0;
          var e = t.x,
            r = t.y,
            n = this.a.redMul(e),
            i = e.redSqr().redMul(e).redIAdd(n).redIAdd(this.b);
          return 0 === r.redSqr().redISub(i).cmpn(0);
        }),
        (b.prototype._endoWnafMulAdd = function (t, e, r) {
          for (
            var n = this._endoWnafT1, i = this._endoWnafT2, o = 0;
            o < t.length;
            o++
          ) {
            var s = this._endoSplit(e[o]),
              a = t[o],
              u = a._getBeta();
            s.k1.negative && (s.k1.ineg(), (a = a.neg(!0))),
              s.k2.negative && (s.k2.ineg(), (u = u.neg(!0))),
              (n[2 * o] = a),
              (n[2 * o + 1] = u),
              (i[2 * o] = s.k1),
              (i[2 * o + 1] = s.k2);
          }
          for (
            var c = this._wnafMulAdd(1, n, i, 2 * o, r), l = 0;
            l < 2 * o;
            l++
          )
            (n[l] = null), (i[l] = null);
          return c;
        }),
        y(E, g.BasePoint),
        (b.prototype.point = function (t, e, r) {
          return new E(this, t, e, r);
        }),
        (b.prototype.pointFromJSON = function (t, e) {
          return E.fromJSON(this, t, e);
        }),
        (E.prototype._getBeta = function () {
          if (this.curve.endo) {
            var t = this.precomputed;
            if (t && t.beta) return t.beta;
            var e = this.curve.point(
              this.x.redMul(this.curve.endo.beta),
              this.y
            );
            if (t) {
              var r = this.curve,
                n = function (t) {
                  return r.point(t.x.redMul(r.endo.beta), t.y);
                };
              (t.beta = e),
                (e.precomputed = {
                  beta: null,
                  naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(n) },
                  doubles: t.doubles && {
                    step: t.doubles.step,
                    points: t.doubles.points.map(n),
                  },
                });
            }
            return e;
          }
        }),
        (E.prototype.toJSON = function () {
          return this.precomputed
            ? [
                this.x,
                this.y,
                this.precomputed && {
                  doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1),
                  },
                  naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1),
                  },
                },
              ]
            : [this.x, this.y];
        }),
        (E.fromJSON = function (t, e, r) {
          "string" === typeof e && (e = JSON.parse(e));
          var n = t.point(e[0], e[1], r);
          if (!e[2]) return n;
          function i(e) {
            return t.point(e[0], e[1], r);
          }
          var o = e[2];
          return (
            (n.precomputed = {
              beta: null,
              doubles: o.doubles && {
                step: o.doubles.step,
                points: [n].concat(o.doubles.points.map(i)),
              },
              naf: o.naf && {
                wnd: o.naf.wnd,
                points: [n].concat(o.naf.points.map(i)),
              },
            }),
            n
          );
        }),
        (E.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                ">";
        }),
        (E.prototype.isInfinity = function () {
          return this.inf;
        }),
        (E.prototype.add = function (t) {
          if (this.inf) return t;
          if (t.inf) return this;
          if (this.eq(t)) return this.dbl();
          if (this.neg().eq(t)) return this.curve.point(null, null);
          if (0 === this.x.cmp(t.x)) return this.curve.point(null, null);
          var e = this.y.redSub(t.y);
          0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
          var r = e.redSqr().redISub(this.x).redISub(t.x),
            n = e.redMul(this.x.redSub(r)).redISub(this.y);
          return this.curve.point(r, n);
        }),
        (E.prototype.dbl = function () {
          if (this.inf) return this;
          var t = this.y.redAdd(this.y);
          if (0 === t.cmpn(0)) return this.curve.point(null, null);
          var e = this.curve.a,
            r = this.x.redSqr(),
            n = t.redInvm(),
            i = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(n),
            o = i.redSqr().redISub(this.x.redAdd(this.x)),
            s = i.redMul(this.x.redSub(o)).redISub(this.y);
          return this.curve.point(o, s);
        }),
        (E.prototype.getX = function () {
          return this.x.fromRed();
        }),
        (E.prototype.getY = function () {
          return this.y.fromRed();
        }),
        (E.prototype.mul = function (t) {
          return (
            (t = new (i())(t, 16)),
            this.isInfinity()
              ? this
              : this._hasDoubles(t)
              ? this.curve._fixedNafMul(this, t)
              : this.curve.endo
              ? this.curve._endoWnafMulAdd([this], [t])
              : this.curve._wnafMul(this, t)
          );
        }),
        (E.prototype.mulAdd = function (t, e, r) {
          var n = [this, e],
            i = [t, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, i)
            : this.curve._wnafMulAdd(1, n, i, 2);
        }),
        (E.prototype.jmulAdd = function (t, e, r) {
          var n = [this, e],
            i = [t, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, i, !0)
            : this.curve._wnafMulAdd(1, n, i, 2, !0);
        }),
        (E.prototype.eq = function (t) {
          return (
            this === t ||
            (this.inf === t.inf &&
              (this.inf || (0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))))
          );
        }),
        (E.prototype.neg = function (t) {
          if (this.inf) return this;
          var e = this.curve.point(this.x, this.y.redNeg());
          if (t && this.precomputed) {
            var r = this.precomputed,
              n = function (t) {
                return t.neg();
              };
            e.precomputed = {
              naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(n) },
              doubles: r.doubles && {
                step: r.doubles.step,
                points: r.doubles.points.map(n),
              },
            };
          }
          return e;
        }),
        (E.prototype.toJ = function () {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one);
        }),
        y(M, g.BasePoint),
        (b.prototype.jpoint = function (t, e, r) {
          return new M(this, t, e, r);
        }),
        (M.prototype.toP = function () {
          if (this.isInfinity()) return this.curve.point(null, null);
          var t = this.z.redInvm(),
            e = t.redSqr(),
            r = this.x.redMul(e),
            n = this.y.redMul(e).redMul(t);
          return this.curve.point(r, n);
        }),
        (M.prototype.neg = function () {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }),
        (M.prototype.add = function (t) {
          if (this.isInfinity()) return t;
          if (t.isInfinity()) return this;
          var e = t.z.redSqr(),
            r = this.z.redSqr(),
            n = this.x.redMul(e),
            i = t.x.redMul(r),
            o = this.y.redMul(e.redMul(t.z)),
            s = t.y.redMul(r.redMul(this.z)),
            a = n.redSub(i),
            u = o.redSub(s);
          if (0 === a.cmpn(0))
            return 0 !== u.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var c = a.redSqr(),
            l = c.redMul(a),
            h = n.redMul(c),
            f = u.redSqr().redIAdd(l).redISub(h).redISub(h),
            d = u.redMul(h.redISub(f)).redISub(o.redMul(l)),
            p = this.z.redMul(t.z).redMul(a);
          return this.curve.jpoint(f, d, p);
        }),
        (M.prototype.mixedAdd = function (t) {
          if (this.isInfinity()) return t.toJ();
          if (t.isInfinity()) return this;
          var e = this.z.redSqr(),
            r = this.x,
            n = t.x.redMul(e),
            i = this.y,
            o = t.y.redMul(e).redMul(this.z),
            s = r.redSub(n),
            a = i.redSub(o);
          if (0 === s.cmpn(0))
            return 0 !== a.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var u = s.redSqr(),
            c = u.redMul(s),
            l = r.redMul(u),
            h = a.redSqr().redIAdd(c).redISub(l).redISub(l),
            f = a.redMul(l.redISub(h)).redISub(i.redMul(c)),
            d = this.z.redMul(s);
          return this.curve.jpoint(h, f, d);
        }),
        (M.prototype.dblp = function (t) {
          if (0 === t) return this;
          if (this.isInfinity()) return this;
          if (!t) return this.dbl();
          var e;
          if (this.curve.zeroA || this.curve.threeA) {
            var r = this;
            for (e = 0; e < t; e++) r = r.dbl();
            return r;
          }
          var n = this.curve.a,
            i = this.curve.tinv,
            o = this.x,
            s = this.y,
            a = this.z,
            u = a.redSqr().redSqr(),
            c = s.redAdd(s);
          for (e = 0; e < t; e++) {
            var l = o.redSqr(),
              h = c.redSqr(),
              f = h.redSqr(),
              d = l.redAdd(l).redIAdd(l).redIAdd(n.redMul(u)),
              p = o.redMul(h),
              m = d.redSqr().redISub(p.redAdd(p)),
              g = p.redISub(m),
              v = d.redMul(g);
            v = v.redIAdd(v).redISub(f);
            var y = c.redMul(a);
            e + 1 < t && (u = u.redMul(f)), (o = m), (a = y), (c = v);
          }
          return this.curve.jpoint(o, c.redMul(i), a);
        }),
        (M.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
            ? this._zeroDbl()
            : this.curve.threeA
            ? this._threeDbl()
            : this._dbl();
        }),
        (M.prototype._zeroDbl = function () {
          var t, e, r;
          if (this.zOne) {
            var n = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
            s = s.redIAdd(s);
            var a = n.redAdd(n).redIAdd(n),
              u = a.redSqr().redISub(s).redISub(s),
              c = o.redIAdd(o);
            (c = (c = c.redIAdd(c)).redIAdd(c)),
              (t = u),
              (e = a.redMul(s.redISub(u)).redISub(c)),
              (r = this.y.redAdd(this.y));
          } else {
            var l = this.x.redSqr(),
              h = this.y.redSqr(),
              f = h.redSqr(),
              d = this.x.redAdd(h).redSqr().redISub(l).redISub(f);
            d = d.redIAdd(d);
            var p = l.redAdd(l).redIAdd(l),
              m = p.redSqr(),
              g = f.redIAdd(f);
            (g = (g = g.redIAdd(g)).redIAdd(g)),
              (t = m.redISub(d).redISub(d)),
              (e = p.redMul(d.redISub(t)).redISub(g)),
              (r = (r = this.y.redMul(this.z)).redIAdd(r));
          }
          return this.curve.jpoint(t, e, r);
        }),
        (M.prototype._threeDbl = function () {
          var t, e, r;
          if (this.zOne) {
            var n = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
            s = s.redIAdd(s);
            var a = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
              u = a.redSqr().redISub(s).redISub(s);
            t = u;
            var c = o.redIAdd(o);
            (c = (c = c.redIAdd(c)).redIAdd(c)),
              (e = a.redMul(s.redISub(u)).redISub(c)),
              (r = this.y.redAdd(this.y));
          } else {
            var l = this.z.redSqr(),
              h = this.y.redSqr(),
              f = this.x.redMul(h),
              d = this.x.redSub(l).redMul(this.x.redAdd(l));
            d = d.redAdd(d).redIAdd(d);
            var p = f.redIAdd(f),
              m = (p = p.redIAdd(p)).redAdd(p);
            (t = d.redSqr().redISub(m)),
              (r = this.y.redAdd(this.z).redSqr().redISub(h).redISub(l));
            var g = h.redSqr();
            (g = (g = (g = g.redIAdd(g)).redIAdd(g)).redIAdd(g)),
              (e = d.redMul(p.redISub(t)).redISub(g));
          }
          return this.curve.jpoint(t, e, r);
        }),
        (M.prototype._dbl = function () {
          var t = this.curve.a,
            e = this.x,
            r = this.y,
            n = this.z,
            i = n.redSqr().redSqr(),
            o = e.redSqr(),
            s = r.redSqr(),
            a = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(i)),
            u = e.redAdd(e),
            c = (u = u.redIAdd(u)).redMul(s),
            l = a.redSqr().redISub(c.redAdd(c)),
            h = c.redISub(l),
            f = s.redSqr();
          f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
          var d = a.redMul(h).redISub(f),
            p = r.redAdd(r).redMul(n);
          return this.curve.jpoint(l, d, p);
        }),
        (M.prototype.trpl = function () {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var t = this.x.redSqr(),
            e = this.y.redSqr(),
            r = this.z.redSqr(),
            n = e.redSqr(),
            i = t.redAdd(t).redIAdd(t),
            o = i.redSqr(),
            s = this.x.redAdd(e).redSqr().redISub(t).redISub(n),
            a = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(
              o
            )).redSqr(),
            u = n.redIAdd(n);
          u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
          var c = i.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(u),
            l = e.redMul(c);
          l = (l = l.redIAdd(l)).redIAdd(l);
          var h = this.x.redMul(a).redISub(l);
          h = (h = h.redIAdd(h)).redIAdd(h);
          var f = this.y.redMul(c.redMul(u.redISub(c)).redISub(s.redMul(a)));
          f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
          var d = this.z.redAdd(s).redSqr().redISub(r).redISub(a);
          return this.curve.jpoint(h, f, d);
        }),
        (M.prototype.mul = function (t, e) {
          return (t = new (i())(t, e)), this.curve._wnafMul(this, t);
        }),
        (M.prototype.eq = function (t) {
          if ("affine" === t.type) return this.eq(t.toJ());
          if (this === t) return !0;
          var e = this.z.redSqr(),
            r = t.z.redSqr();
          if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0)) return !1;
          var n = e.redMul(this.z),
            i = r.redMul(t.z);
          return 0 === this.y.redMul(i).redISub(t.y.redMul(n)).cmpn(0);
        }),
        (M.prototype.eqXToP = function (t) {
          var e = this.z.redSqr(),
            r = t.toRed(this.curve.red).redMul(e);
          if (0 === this.x.cmp(r)) return !0;
          for (var n = t.clone(), i = this.curve.redN.redMul(e); ; ) {
            if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)) return !1;
            if ((r.redIAdd(i), 0 === this.x.cmp(r))) return !0;
          }
        }),
        (M.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC JPoint Infinity>"
            : "<EC JPoint x: " +
                this.x.toString(16, 2) +
                " y: " +
                this.y.toString(16, 2) +
                " z: " +
                this.z.toString(16, 2) +
                ">";
        }),
        (M.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        });
      var k = a(function (t, e) {
          var r = e;
          (r.base = g), (r.short = A), (r.mont = null), (r.edwards = null);
        }),
        _ = a(function (t, e) {
          var r,
            n = e,
            i = h.assert;
          function o(t) {
            "short" === t.type
              ? (this.curve = new k.short(t))
              : "edwards" === t.type
              ? (this.curve = new k.edwards(t))
              : (this.curve = new k.mont(t)),
              (this.g = this.curve.g),
              (this.n = this.curve.n),
              (this.hash = t.hash),
              i(this.g.validate(), "Invalid curve"),
              i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
          }
          function a(t, e) {
            Object.defineProperty(n, t, {
              configurable: !0,
              enumerable: !0,
              get: function () {
                var r = new o(e);
                return (
                  Object.defineProperty(n, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: r,
                  }),
                  r
                );
              },
            });
          }
          (n.PresetCurve = o),
            a("p192", {
              type: "short",
              prime: "p192",
              p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
              a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
              b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
              n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
              hash: s().sha256,
              gRed: !1,
              g: [
                "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
                "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
              ],
            }),
            a("p224", {
              type: "short",
              prime: "p224",
              p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
              a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
              b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
              n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
              hash: s().sha256,
              gRed: !1,
              g: [
                "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
                "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
              ],
            }),
            a("p256", {
              type: "short",
              prime: null,
              p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
              a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
              b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
              n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
              hash: s().sha256,
              gRed: !1,
              g: [
                "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
                "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
              ],
            }),
            a("p384", {
              type: "short",
              prime: null,
              p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
              a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
              b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
              n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
              hash: s().sha384,
              gRed: !1,
              g: [
                "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
                "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
              ],
            }),
            a("p521", {
              type: "short",
              prime: null,
              p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
              a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
              b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
              n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
              hash: s().sha512,
              gRed: !1,
              g: [
                "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
                "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
              ],
            }),
            a("curve25519", {
              type: "mont",
              prime: "p25519",
              p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
              a: "76d06",
              b: "1",
              n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
              hash: s().sha256,
              gRed: !1,
              g: ["9"],
            }),
            a("ed25519", {
              type: "edwards",
              prime: "p25519",
              p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
              a: "-1",
              c: "1",
              d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
              n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
              hash: s().sha256,
              gRed: !1,
              g: [
                "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
                "6666666666666666666666666666666666666666666666666666666666666658",
              ],
            });
          try {
            r = null.crash();
          } catch (u) {
            r = void 0;
          }
          a("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: s().sha256,
            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            lambda:
              "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
            basis: [
              {
                a: "3086d221a7d46bcde86c90e49284eb15",
                b: "-e4437ed6010e88286f547fa90abfe4c3",
              },
              {
                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                b: "3086d221a7d46bcde86c90e49284eb15",
              },
            ],
            gRed: !1,
            g: [
              "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
              "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
              r,
            ],
          });
        });
      function C(t) {
        if (!(this instanceof C)) return new C(t);
        (this.hash = t.hash),
          (this.predResist = !!t.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = t.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null);
        var e = l.toArray(t.entropy, t.entropyEnc || "hex"),
          r = l.toArray(t.nonce, t.nonceEnc || "hex"),
          n = l.toArray(t.pers, t.persEnc || "hex");
        u(
          e.length >= this.minEntropy / 8,
          "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
        ),
          this._init(e, r, n);
      }
      var N = C;
      (C.prototype._init = function (t, e, r) {
        var n = t.concat(e).concat(r);
        (this.K = new Array(this.outLen / 8)),
          (this.V = new Array(this.outLen / 8));
        for (var i = 0; i < this.V.length; i++)
          (this.K[i] = 0), (this.V[i] = 1);
        this._update(n),
          (this._reseed = 1),
          (this.reseedInterval = 281474976710656);
      }),
        (C.prototype._hmac = function () {
          return new (s().hmac)(this.hash, this.K);
        }),
        (C.prototype._update = function (t) {
          var e = this._hmac().update(this.V).update([0]);
          t && (e = e.update(t)),
            (this.K = e.digest()),
            (this.V = this._hmac().update(this.V).digest()),
            t &&
              ((this.K = this._hmac()
                .update(this.V)
                .update([1])
                .update(t)
                .digest()),
              (this.V = this._hmac().update(this.V).digest()));
        }),
        (C.prototype.reseed = function (t, e, r, n) {
          "string" !== typeof e && ((n = r), (r = e), (e = null)),
            (t = l.toArray(t, e)),
            (r = l.toArray(r, n)),
            u(
              t.length >= this.minEntropy / 8,
              "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
            ),
            this._update(t.concat(r || [])),
            (this._reseed = 1);
        }),
        (C.prototype.generate = function (t, e, r, n) {
          if (this._reseed > this.reseedInterval)
            throw new Error("Reseed is required");
          "string" !== typeof e && ((n = r), (r = e), (e = null)),
            r && ((r = l.toArray(r, n || "hex")), this._update(r));
          for (var i = []; i.length < t; )
            (this.V = this._hmac().update(this.V).digest()),
              (i = i.concat(this.V));
          var o = i.slice(0, t);
          return this._update(r), this._reseed++, l.encode(o, e);
        });
      var I = h.assert;
      function O(t, e) {
        (this.ec = t),
          (this.priv = null),
          (this.pub = null),
          e.priv && this._importPrivate(e.priv, e.privEnc),
          e.pub && this._importPublic(e.pub, e.pubEnc);
      }
      var P = O;
      (O.fromPublic = function (t, e, r) {
        return e instanceof O ? e : new O(t, { pub: e, pubEnc: r });
      }),
        (O.fromPrivate = function (t, e, r) {
          return e instanceof O ? e : new O(t, { priv: e, privEnc: r });
        }),
        (O.prototype.validate = function () {
          var t = this.getPublic();
          return t.isInfinity()
            ? { result: !1, reason: "Invalid public key" }
            : t.validate()
            ? t.mul(this.ec.curve.n).isInfinity()
              ? { result: !0, reason: null }
              : { result: !1, reason: "Public key * N != O" }
            : { result: !1, reason: "Public key is not a point" };
        }),
        (O.prototype.getPublic = function (t, e) {
          return (
            "string" === typeof t && ((e = t), (t = null)),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            e ? this.pub.encode(e, t) : this.pub
          );
        }),
        (O.prototype.getPrivate = function (t) {
          return "hex" === t ? this.priv.toString(16, 2) : this.priv;
        }),
        (O.prototype._importPrivate = function (t, e) {
          (this.priv = new (i())(t, e || 16)),
            (this.priv = this.priv.umod(this.ec.curve.n));
        }),
        (O.prototype._importPublic = function (t, e) {
          if (t.x || t.y)
            return (
              "mont" === this.ec.curve.type
                ? I(t.x, "Need x coordinate")
                : ("short" !== this.ec.curve.type &&
                    "edwards" !== this.ec.curve.type) ||
                  I(t.x && t.y, "Need both x and y coordinate"),
              void (this.pub = this.ec.curve.point(t.x, t.y))
            );
          this.pub = this.ec.curve.decodePoint(t, e);
        }),
        (O.prototype.derive = function (t) {
          return (
            t.validate() || I(t.validate(), "public point not validated"),
            t.mul(this.priv).getX()
          );
        }),
        (O.prototype.sign = function (t, e, r) {
          return this.ec.sign(t, this, e, r);
        }),
        (O.prototype.verify = function (t, e) {
          return this.ec.verify(t, e, this);
        }),
        (O.prototype.inspect = function () {
          return (
            "<Key priv: " +
            (this.priv && this.priv.toString(16, 2)) +
            " pub: " +
            (this.pub && this.pub.inspect()) +
            " >"
          );
        });
      var S = h.assert;
      function x(t, e) {
        if (t instanceof x) return t;
        this._importDER(t, e) ||
          (S(t.r && t.s, "Signature without r or s"),
          (this.r = new (i())(t.r, 16)),
          (this.s = new (i())(t.s, 16)),
          void 0 === t.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = t.recoveryParam));
      }
      var R = x;
      function T() {
        this.place = 0;
      }
      function B(t, e) {
        var r = t[e.place++];
        if (!(128 & r)) return r;
        var n = 15 & r;
        if (0 === n || n > 4) return !1;
        for (var i = 0, o = 0, s = e.place; o < n; o++, s++)
          (i <<= 8), (i |= t[s]), (i >>>= 0);
        return !(i <= 127) && ((e.place = s), i);
      }
      function L(t) {
        for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r; )
          e++;
        return 0 === e ? t : t.slice(e);
      }
      function U(t, e) {
        if (e < 128) t.push(e);
        else {
          var r = 1 + ((Math.log(e) / Math.LN2) >>> 3);
          for (t.push(128 | r); --r; ) t.push((e >>> (r << 3)) & 255);
          t.push(e);
        }
      }
      (x.prototype._importDER = function (t, e) {
        t = h.toArray(t, e);
        var r = new T();
        if (48 !== t[r.place++]) return !1;
        var n = B(t, r);
        if (!1 === n) return !1;
        if (n + r.place !== t.length) return !1;
        if (2 !== t[r.place++]) return !1;
        var o = B(t, r);
        if (!1 === o) return !1;
        var s = t.slice(r.place, o + r.place);
        if (((r.place += o), 2 !== t[r.place++])) return !1;
        var a = B(t, r);
        if (!1 === a) return !1;
        if (t.length !== a + r.place) return !1;
        var u = t.slice(r.place, a + r.place);
        if (0 === s[0]) {
          if (!(128 & s[1])) return !1;
          s = s.slice(1);
        }
        if (0 === u[0]) {
          if (!(128 & u[1])) return !1;
          u = u.slice(1);
        }
        return (
          (this.r = new (i())(s)),
          (this.s = new (i())(u)),
          (this.recoveryParam = null),
          !0
        );
      }),
        (x.prototype.toDER = function (t) {
          var e = this.r.toArray(),
            r = this.s.toArray();
          for (
            128 & e[0] && (e = [0].concat(e)),
              128 & r[0] && (r = [0].concat(r)),
              e = L(e),
              r = L(r);
            !r[0] && !(128 & r[1]);

          )
            r = r.slice(1);
          var n = [2];
          U(n, e.length), (n = n.concat(e)).push(2), U(n, r.length);
          var i = n.concat(r),
            o = [48];
          return U(o, i.length), (o = o.concat(i)), h.encode(o, t);
        });
      var D = function () {
          throw new Error("unsupported");
        },
        j = h.assert;
      function F(t) {
        if (!(this instanceof F)) return new F(t);
        "string" === typeof t &&
          (j(Object.prototype.hasOwnProperty.call(_, t), "Unknown curve " + t),
          (t = _[t])),
          t instanceof _.PresetCurve && (t = { curve: t }),
          (this.curve = t.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = t.curve.g),
          this.g.precompute(t.curve.n.bitLength() + 1),
          (this.hash = t.hash || t.curve.hash);
      }
      var z = F;
      (F.prototype.keyPair = function (t) {
        return new P(this, t);
      }),
        (F.prototype.keyFromPrivate = function (t, e) {
          return P.fromPrivate(this, t, e);
        }),
        (F.prototype.keyFromPublic = function (t, e) {
          return P.fromPublic(this, t, e);
        }),
        (F.prototype.genKeyPair = function (t) {
          t || (t = {});
          for (
            var e = new N({
                hash: this.hash,
                pers: t.pers,
                persEnc: t.persEnc || "utf8",
                entropy: t.entropy || D(this.hash.hmacStrength),
                entropyEnc: (t.entropy && t.entropyEnc) || "utf8",
                nonce: this.n.toArray(),
              }),
              r = this.n.byteLength(),
              n = this.n.sub(new (i())(2));
            ;

          ) {
            var o = new (i())(e.generate(r));
            if (!(o.cmp(n) > 0)) return o.iaddn(1), this.keyFromPrivate(o);
          }
        }),
        (F.prototype._truncateToN = function (t, e) {
          var r = 8 * t.byteLength() - this.n.bitLength();
          return (
            r > 0 && (t = t.ushrn(r)),
            !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
          );
        }),
        (F.prototype.sign = function (t, e, r, n) {
          "object" === typeof r && ((n = r), (r = null)),
            n || (n = {}),
            (e = this.keyFromPrivate(e, r)),
            (t = this._truncateToN(new (i())(t, 16)));
          for (
            var o = this.n.byteLength(),
              s = e.getPrivate().toArray("be", o),
              a = t.toArray("be", o),
              u = new N({
                hash: this.hash,
                entropy: s,
                nonce: a,
                pers: n.pers,
                persEnc: n.persEnc || "utf8",
              }),
              c = this.n.sub(new (i())(1)),
              l = 0;
            ;
            l++
          ) {
            var h = n.k ? n.k(l) : new (i())(u.generate(this.n.byteLength()));
            if (
              !((h = this._truncateToN(h, !0)).cmpn(1) <= 0 || h.cmp(c) >= 0)
            ) {
              var f = this.g.mul(h);
              if (!f.isInfinity()) {
                var d = f.getX(),
                  p = d.umod(this.n);
                if (0 !== p.cmpn(0)) {
                  var m = h.invm(this.n).mul(p.mul(e.getPrivate()).iadd(t));
                  if (0 !== (m = m.umod(this.n)).cmpn(0)) {
                    var g =
                      (f.getY().isOdd() ? 1 : 0) | (0 !== d.cmp(p) ? 2 : 0);
                    return (
                      n.canonical &&
                        m.cmp(this.nh) > 0 &&
                        ((m = this.n.sub(m)), (g ^= 1)),
                      new R({ r: p, s: m, recoveryParam: g })
                    );
                  }
                }
              }
            }
          }
        }),
        (F.prototype.verify = function (t, e, r, n) {
          (t = this._truncateToN(new (i())(t, 16))),
            (r = this.keyFromPublic(r, n));
          var o = (e = new R(e, "hex")).r,
            s = e.s;
          if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
          if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
          var a,
            u = s.invm(this.n),
            c = u.mul(t).umod(this.n),
            l = u.mul(o).umod(this.n);
          return this.curve._maxwellTrick
            ? !(a = this.g.jmulAdd(c, r.getPublic(), l)).isInfinity() &&
                a.eqXToP(o)
            : !(a = this.g.mulAdd(c, r.getPublic(), l)).isInfinity() &&
                0 === a.getX().umod(this.n).cmp(o);
        }),
        (F.prototype.recoverPubKey = function (t, e, r, n) {
          j((3 & r) === r, "The recovery param is more than two bits"),
            (e = new R(e, n));
          var o = this.n,
            s = new (i())(t),
            a = e.r,
            u = e.s,
            c = 1 & r,
            l = r >> 1;
          if (a.cmp(this.curve.p.umod(this.curve.n)) >= 0 && l)
            throw new Error("Unable to find sencond key candinate");
          a = l
            ? this.curve.pointFromX(a.add(this.curve.n), c)
            : this.curve.pointFromX(a, c);
          var h = e.r.invm(o),
            f = o.sub(s).mul(h).umod(o),
            d = u.mul(h).umod(o);
          return this.g.mulAdd(f, a, d);
        }),
        (F.prototype.getKeyRecoveryParam = function (t, e, r, n) {
          if (null !== (e = new R(e, n)).recoveryParam) return e.recoveryParam;
          for (var i = 0; i < 4; i++) {
            var o;
            try {
              o = this.recoverPubKey(t, e, i);
            } catch (t) {
              continue;
            }
            if (o.eq(r)) return i;
          }
          throw new Error("Unable to find valid recovery factor");
        });
      var q = a(function (t, e) {
          var r = e;
          (r.version = "6.5.4"),
            (r.utils = h),
            (r.rand = function () {
              throw new Error("unsupported");
            }),
            (r.curve = k),
            (r.curves = _),
            (r.ec = z),
            (r.eddsa = null);
        }).ec,
        G = r(25689),
        Y = r(98690);
      const J = new (r(87898).Yd)("signing-key/5.7.0");
      let H = null;
      function K() {
        return H || (H = new q("secp256k1")), H;
      }
      class Q {
        constructor(t) {
          (0, Y.zG)(this, "curve", "secp256k1"),
            (0, Y.zG)(this, "privateKey", (0, G.Dv)(t)),
            32 !== (0, G.E1)(this.privateKey) &&
              J.throwArgumentError(
                "invalid private key",
                "privateKey",
                "[[ REDACTED ]]"
              );
          const e = K().keyFromPrivate((0, G.lE)(this.privateKey));
          (0, Y.zG)(this, "publicKey", "0x" + e.getPublic(!1, "hex")),
            (0, Y.zG)(
              this,
              "compressedPublicKey",
              "0x" + e.getPublic(!0, "hex")
            ),
            (0, Y.zG)(this, "_isSigningKey", !0);
        }
        _addPoint(t) {
          const e = K().keyFromPublic((0, G.lE)(this.publicKey)),
            r = K().keyFromPublic((0, G.lE)(t));
          return "0x" + e.pub.add(r.pub).encodeCompressed("hex");
        }
        signDigest(t) {
          const e = K().keyFromPrivate((0, G.lE)(this.privateKey)),
            r = (0, G.lE)(t);
          32 !== r.length &&
            J.throwArgumentError("bad digest length", "digest", t);
          const n = e.sign(r, { canonical: !0 });
          return (0, G.N)({
            recoveryParam: n.recoveryParam,
            r: (0, G.$m)("0x" + n.r.toString(16), 32),
            s: (0, G.$m)("0x" + n.s.toString(16), 32),
          });
        }
        computeSharedSecret(t) {
          const e = K().keyFromPrivate((0, G.lE)(this.privateKey)),
            r = K().keyFromPublic((0, G.lE)(V(t)));
          return (0, G.$m)("0x" + e.derive(r.getPublic()).toString(16), 32);
        }
        static isSigningKey(t) {
          return !(!t || !t._isSigningKey);
        }
      }
      function W(t, e) {
        const r = (0, G.N)(e),
          n = { r: (0, G.lE)(r.r), s: (0, G.lE)(r.s) };
        return (
          "0x" +
          K()
            .recoverPubKey((0, G.lE)(t), n, r.recoveryParam)
            .encode("hex", !1)
        );
      }
      function V(t, e) {
        const r = (0, G.lE)(t);
        if (32 === r.length) {
          const t = new Q(r);
          return e
            ? "0x" + K().keyFromPrivate(r).getPublic(!0, "hex")
            : t.publicKey;
        }
        return 33 === r.length
          ? e
            ? (0, G.Dv)(r)
            : "0x" + K().keyFromPublic(r).getPublic(!1, "hex")
          : 65 === r.length
          ? e
            ? "0x" + K().keyFromPublic(r).getPublic(!0, "hex")
            : (0, G.Dv)(r)
          : J.throwArgumentError(
              "invalid public or private key",
              "key",
              "[REDACTED]"
            );
      }
    },
    95973: function (t, e, r) {
      !(function (t, e) {
        "use strict";
        function n(t, e) {
          if (!t) throw new Error(e || "Assertion failed");
        }
        function i(t, e) {
          t.super_ = e;
          var r = function () {};
          (r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.prototype.constructor = t);
        }
        function o(t, e, r) {
          if (o.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (("le" !== e && "be" !== e) || ((r = e), (e = 10)),
              this._init(t || 0, e || 10, r || "be"));
        }
        var s;
        "object" === typeof t ? (t.exports = o) : (e.BN = o),
          (o.BN = o),
          (o.wordSize = 26);
        try {
          s =
            "undefined" !== typeof window &&
            "undefined" !== typeof window.Buffer
              ? window.Buffer
              : r(62808).Buffer;
        } catch (I) {}
        function a(t, e) {
          var r = t.charCodeAt(e);
          return r >= 48 && r <= 57
            ? r - 48
            : r >= 65 && r <= 70
            ? r - 55
            : r >= 97 && r <= 102
            ? r - 87
            : void n(!1, "Invalid character in " + t);
        }
        function u(t, e, r) {
          var n = a(t, r);
          return r - 1 >= e && (n |= a(t, r - 1) << 4), n;
        }
        function c(t, e, r, i) {
          for (var o = 0, s = 0, a = Math.min(t.length, r), u = e; u < a; u++) {
            var c = t.charCodeAt(u) - 48;
            (o *= i),
              (s = c >= 49 ? c - 49 + 10 : c >= 17 ? c - 17 + 10 : c),
              n(c >= 0 && s < i, "Invalid character"),
              (o += s);
          }
          return o;
        }
        function l(t, e) {
          (t.words = e.words),
            (t.length = e.length),
            (t.negative = e.negative),
            (t.red = e.red);
        }
        if (
          ((o.isBN = function (t) {
            return (
              t instanceof o ||
              (null !== t &&
                "object" === typeof t &&
                t.constructor.wordSize === o.wordSize &&
                Array.isArray(t.words))
            );
          }),
          (o.max = function (t, e) {
            return t.cmp(e) > 0 ? t : e;
          }),
          (o.min = function (t, e) {
            return t.cmp(e) < 0 ? t : e;
          }),
          (o.prototype._init = function (t, e, r) {
            if ("number" === typeof t) return this._initNumber(t, e, r);
            if ("object" === typeof t) return this._initArray(t, e, r);
            "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
            var i = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] &&
              (i++, (this.negative = 1)),
              i < t.length &&
                (16 === e
                  ? this._parseHex(t, i, r)
                  : (this._parseBase(t, e, i),
                    "le" === r && this._initArray(this.toArray(), e, r)));
          }),
          (o.prototype._initNumber = function (t, e, r) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                  (this.length = 2))
                : (n(t < 9007199254740992),
                  (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === r && this._initArray(this.toArray(), e, r);
          }),
          (o.prototype._initArray = function (t, e, r) {
            if ((n("number" === typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)),
              (this.words = new Array(this.length));
            for (var i = 0; i < this.length; i++) this.words[i] = 0;
            var o,
              s,
              a = 0;
            if ("be" === r)
              for (i = t.length - 1, o = 0; i >= 0; i -= 3)
                (s = t[i] | (t[i - 1] << 8) | (t[i - 2] << 16)),
                  (this.words[o] |= (s << a) & 67108863),
                  (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), o++);
            else if ("le" === r)
              for (i = 0, o = 0; i < t.length; i += 3)
                (s = t[i] | (t[i + 1] << 8) | (t[i + 2] << 16)),
                  (this.words[o] |= (s << a) & 67108863),
                  (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), o++);
            return this._strip();
          }),
          (o.prototype._parseHex = function (t, e, r) {
            (this.length = Math.ceil((t.length - e) / 6)),
              (this.words = new Array(this.length));
            for (var n = 0; n < this.length; n++) this.words[n] = 0;
            var i,
              o = 0,
              s = 0;
            if ("be" === r)
              for (n = t.length - 1; n >= e; n -= 2)
                (i = u(t, e, n) << o),
                  (this.words[s] |= 67108863 & i),
                  o >= 18
                    ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26))
                    : (o += 8);
            else
              for (
                n = (t.length - e) % 2 === 0 ? e + 1 : e;
                n < t.length;
                n += 2
              )
                (i = u(t, e, n) << o),
                  (this.words[s] |= 67108863 & i),
                  o >= 18
                    ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26))
                    : (o += 8);
            this._strip();
          }),
          (o.prototype._parseBase = function (t, e, r) {
            (this.words = [0]), (this.length = 1);
            for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
            n--, (i = (i / e) | 0);
            for (
              var o = t.length - r,
                s = o % n,
                a = Math.min(o, o - s) + r,
                u = 0,
                l = r;
              l < a;
              l += n
            )
              (u = c(t, l, l + n, e)),
                this.imuln(i),
                this.words[0] + u < 67108864
                  ? (this.words[0] += u)
                  : this._iaddn(u);
            if (0 !== s) {
              var h = 1;
              for (u = c(t, l, t.length, e), l = 0; l < s; l++) h *= e;
              this.imuln(h),
                this.words[0] + u < 67108864
                  ? (this.words[0] += u)
                  : this._iaddn(u);
            }
            this._strip();
          }),
          (o.prototype.copy = function (t) {
            t.words = new Array(this.length);
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
            (t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red);
          }),
          (o.prototype._move = function (t) {
            l(t, this);
          }),
          (o.prototype.clone = function () {
            var t = new o(null);
            return this.copy(t), t;
          }),
          (o.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (o.prototype._strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (o.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          "undefined" !== typeof Symbol && "function" === typeof Symbol.for)
        )
          try {
            o.prototype[Symbol.for("nodejs.util.inspect.custom")] = h;
          } catch (I) {
            o.prototype.inspect = h;
          }
        else o.prototype.inspect = h;
        function h() {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        }
        var f = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          d = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          p = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176,
          ];
        (o.prototype.toString = function (t, e) {
          var r;
          if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
            r = "";
            for (var i = 0, o = 0, s = 0; s < this.length; s++) {
              var a = this.words[s],
                u = (16777215 & ((a << i) | o)).toString(16);
              (o = (a >>> (24 - i)) & 16777215),
                (i += 2) >= 26 && ((i -= 26), s--),
                (r =
                  0 !== o || s !== this.length - 1
                    ? f[6 - u.length] + u + r
                    : u + r);
            }
            for (0 !== o && (r = o.toString(16) + r); r.length % e !== 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var c = d[t],
              l = p[t];
            r = "";
            var h = this.clone();
            for (h.negative = 0; !h.isZero(); ) {
              var m = h.modrn(l).toString(t);
              r = (h = h.idivn(l)).isZero() ? m + r : f[c - m.length] + m + r;
            }
            for (this.isZero() && (r = "0" + r); r.length % e !== 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          n(!1, "Base should be between 2 and 36");
        }),
          (o.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  n(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -t : t
            );
          }),
          (o.prototype.toJSON = function () {
            return this.toString(16, 2);
          }),
          s &&
            (o.prototype.toBuffer = function (t, e) {
              return this.toArrayLike(s, t, e);
            }),
          (o.prototype.toArray = function (t, e) {
            return this.toArrayLike(Array, t, e);
          });
        function m(t, e, r) {
          r.negative = e.negative ^ t.negative;
          var n = (t.length + e.length) | 0;
          (r.length = n), (n = (n - 1) | 0);
          var i = 0 | t.words[0],
            o = 0 | e.words[0],
            s = i * o,
            a = 67108863 & s,
            u = (s / 67108864) | 0;
          r.words[0] = a;
          for (var c = 1; c < n; c++) {
            for (
              var l = u >>> 26,
                h = 67108863 & u,
                f = Math.min(c, e.length - 1),
                d = Math.max(0, c - t.length + 1);
              d <= f;
              d++
            ) {
              var p = (c - d) | 0;
              (l +=
                ((s = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + h) /
                  67108864) |
                0),
                (h = 67108863 & s);
            }
            (r.words[c] = 0 | h), (u = 0 | l);
          }
          return 0 !== u ? (r.words[c] = 0 | u) : r.length--, r._strip();
        }
        (o.prototype.toArrayLike = function (t, e, r) {
          this._strip();
          var i = this.byteLength(),
            o = r || Math.max(1, i);
          n(i <= o, "byte array longer than desired length"),
            n(o > 0, "Requested array length <= 0");
          var s = (function (t, e) {
            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e);
          })(t, o);
          return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](s, i), s;
        }),
          (o.prototype._toArrayLikeLE = function (t, e) {
            for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
              var s = (this.words[i] << o) | n;
              (t[r++] = 255 & s),
                r < t.length && (t[r++] = (s >> 8) & 255),
                r < t.length && (t[r++] = (s >> 16) & 255),
                6 === o
                  ? (r < t.length && (t[r++] = (s >> 24) & 255),
                    (n = 0),
                    (o = 0))
                  : ((n = s >>> 24), (o += 2));
            }
            if (r < t.length) for (t[r++] = n; r < t.length; ) t[r++] = 0;
          }),
          (o.prototype._toArrayLikeBE = function (t, e) {
            for (
              var r = t.length - 1, n = 0, i = 0, o = 0;
              i < this.length;
              i++
            ) {
              var s = (this.words[i] << o) | n;
              (t[r--] = 255 & s),
                r >= 0 && (t[r--] = (s >> 8) & 255),
                r >= 0 && (t[r--] = (s >> 16) & 255),
                6 === o
                  ? (r >= 0 && (t[r--] = (s >> 24) & 255), (n = 0), (o = 0))
                  : ((n = s >>> 24), (o += 2));
            }
            if (r >= 0) for (t[r--] = n; r >= 0; ) t[r--] = 0;
          }),
          Math.clz32
            ? (o.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (o.prototype._countBits = function (t) {
                var e = t,
                  r = 0;
                return (
                  e >= 4096 && ((r += 13), (e >>>= 13)),
                  e >= 64 && ((r += 7), (e >>>= 7)),
                  e >= 8 && ((r += 4), (e >>>= 4)),
                  e >= 2 && ((r += 2), (e >>>= 2)),
                  r + e
                );
              }),
          (o.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var e = t,
              r = 0;
            return (
              0 === (8191 & e) && ((r += 13), (e >>>= 13)),
              0 === (127 & e) && ((r += 7), (e >>>= 7)),
              0 === (15 & e) && ((r += 4), (e >>>= 4)),
              0 === (3 & e) && ((r += 2), (e >>>= 2)),
              0 === (1 & e) && r++,
              r
            );
          }),
          (o.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              e = this._countBits(t);
            return 26 * (this.length - 1) + e;
          }),
          (o.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, e = 0; e < this.length; e++) {
              var r = this._zeroBits(this.words[e]);
              if (((t += r), 26 !== r)) break;
            }
            return t;
          }),
          (o.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (o.prototype.toTwos = function (t) {
            return 0 !== this.negative
              ? this.abs().inotn(t).iaddn(1)
              : this.clone();
          }),
          (o.prototype.fromTwos = function (t) {
            return this.testn(t - 1)
              ? this.notn(t).iaddn(1).ineg()
              : this.clone();
          }),
          (o.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (o.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (o.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (o.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var e = 0; e < t.length; e++)
              this.words[e] = this.words[e] | t.words[e];
            return this._strip();
          }),
          (o.prototype.ior = function (t) {
            return n(0 === (this.negative | t.negative)), this.iuor(t);
          }),
          (o.prototype.or = function (t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this);
          }),
          (o.prototype.uor = function (t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this);
          }),
          (o.prototype.iuand = function (t) {
            var e;
            e = this.length > t.length ? t : this;
            for (var r = 0; r < e.length; r++)
              this.words[r] = this.words[r] & t.words[r];
            return (this.length = e.length), this._strip();
          }),
          (o.prototype.iand = function (t) {
            return n(0 === (this.negative | t.negative)), this.iuand(t);
          }),
          (o.prototype.and = function (t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this);
          }),
          (o.prototype.uand = function (t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this);
          }),
          (o.prototype.iuxor = function (t) {
            var e, r;
            this.length > t.length
              ? ((e = this), (r = t))
              : ((e = t), (r = this));
            for (var n = 0; n < r.length; n++)
              this.words[n] = e.words[n] ^ r.words[n];
            if (this !== e)
              for (; n < e.length; n++) this.words[n] = e.words[n];
            return (this.length = e.length), this._strip();
          }),
          (o.prototype.ixor = function (t) {
            return n(0 === (this.negative | t.negative)), this.iuxor(t);
          }),
          (o.prototype.xor = function (t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this);
          }),
          (o.prototype.uxor = function (t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this);
          }),
          (o.prototype.inotn = function (t) {
            n("number" === typeof t && t >= 0);
            var e = 0 | Math.ceil(t / 26),
              r = t % 26;
            this._expand(e), r > 0 && e--;
            for (var i = 0; i < e; i++)
              this.words[i] = 67108863 & ~this.words[i];
            return (
              r > 0 &&
                (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
              this._strip()
            );
          }),
          (o.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (o.prototype.setn = function (t, e) {
            n("number" === typeof t && t >= 0);
            var r = (t / 26) | 0,
              i = t % 26;
            return (
              this._expand(r + 1),
              (this.words[r] = e
                ? this.words[r] | (1 << i)
                : this.words[r] & ~(1 << i)),
              this._strip()
            );
          }),
          (o.prototype.iadd = function (t) {
            var e, r, n;
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (e = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (e = this.isub(t)),
                (t.negative = 1),
                e._normSign()
              );
            this.length > t.length
              ? ((r = this), (n = t))
              : ((r = t), (n = this));
            for (var i = 0, o = 0; o < n.length; o++)
              (e = (0 | r.words[o]) + (0 | n.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26);
            for (; 0 !== i && o < r.length; o++)
              (e = (0 | r.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26);
            if (((this.length = r.length), 0 !== i))
              (this.words[this.length] = i), this.length++;
            else if (r !== this)
              for (; o < r.length; o++) this.words[o] = r.words[o];
            return this;
          }),
          (o.prototype.add = function (t) {
            var e;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this);
          }),
          (o.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var e = this.iadd(t);
              return (t.negative = 1), e._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              );
            var r,
              n,
              i = this.cmp(t);
            if (0 === i)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            i > 0 ? ((r = this), (n = t)) : ((r = t), (n = this));
            for (var o = 0, s = 0; s < n.length; s++)
              (o = (e = (0 | r.words[s]) - (0 | n.words[s]) + o) >> 26),
                (this.words[s] = 67108863 & e);
            for (; 0 !== o && s < r.length; s++)
              (o = (e = (0 | r.words[s]) + o) >> 26),
                (this.words[s] = 67108863 & e);
            if (0 === o && s < r.length && r !== this)
              for (; s < r.length; s++) this.words[s] = r.words[s];
            return (
              (this.length = Math.max(this.length, s)),
              r !== this && (this.negative = 1),
              this._strip()
            );
          }),
          (o.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var g = function (t, e, r) {
          var n,
            i,
            o,
            s = t.words,
            a = e.words,
            u = r.words,
            c = 0,
            l = 0 | s[0],
            h = 8191 & l,
            f = l >>> 13,
            d = 0 | s[1],
            p = 8191 & d,
            m = d >>> 13,
            g = 0 | s[2],
            v = 8191 & g,
            y = g >>> 13,
            w = 0 | s[3],
            b = 8191 & w,
            A = w >>> 13,
            E = 0 | s[4],
            M = 8191 & E,
            k = E >>> 13,
            _ = 0 | s[5],
            C = 8191 & _,
            N = _ >>> 13,
            I = 0 | s[6],
            O = 8191 & I,
            P = I >>> 13,
            S = 0 | s[7],
            x = 8191 & S,
            R = S >>> 13,
            T = 0 | s[8],
            B = 8191 & T,
            L = T >>> 13,
            U = 0 | s[9],
            D = 8191 & U,
            j = U >>> 13,
            F = 0 | a[0],
            z = 8191 & F,
            q = F >>> 13,
            G = 0 | a[1],
            Y = 8191 & G,
            J = G >>> 13,
            H = 0 | a[2],
            K = 8191 & H,
            Q = H >>> 13,
            W = 0 | a[3],
            V = 8191 & W,
            Z = W >>> 13,
            X = 0 | a[4],
            $ = 8191 & X,
            tt = X >>> 13,
            et = 0 | a[5],
            rt = 8191 & et,
            nt = et >>> 13,
            it = 0 | a[6],
            ot = 8191 & it,
            st = it >>> 13,
            at = 0 | a[7],
            ut = 8191 & at,
            ct = at >>> 13,
            lt = 0 | a[8],
            ht = 8191 & lt,
            ft = lt >>> 13,
            dt = 0 | a[9],
            pt = 8191 & dt,
            mt = dt >>> 13;
          (r.negative = t.negative ^ e.negative), (r.length = 19);
          var gt =
            (((c + (n = Math.imul(h, z))) | 0) +
              ((8191 & (i = ((i = Math.imul(h, q)) + Math.imul(f, z)) | 0)) <<
                13)) |
            0;
          (c = ((((o = Math.imul(f, q)) + (i >>> 13)) | 0) + (gt >>> 26)) | 0),
            (gt &= 67108863),
            (n = Math.imul(p, z)),
            (i = ((i = Math.imul(p, q)) + Math.imul(m, z)) | 0),
            (o = Math.imul(m, q));
          var vt =
            (((c + (n = (n + Math.imul(h, Y)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, J)) | 0) + Math.imul(f, Y)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(f, J)) | 0) + (i >>> 13)) | 0) +
              (vt >>> 26)) |
            0),
            (vt &= 67108863),
            (n = Math.imul(v, z)),
            (i = ((i = Math.imul(v, q)) + Math.imul(y, z)) | 0),
            (o = Math.imul(y, q)),
            (n = (n + Math.imul(p, Y)) | 0),
            (i = ((i = (i + Math.imul(p, J)) | 0) + Math.imul(m, Y)) | 0),
            (o = (o + Math.imul(m, J)) | 0);
          var yt =
            (((c + (n = (n + Math.imul(h, K)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, Q)) | 0) + Math.imul(f, K)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(f, Q)) | 0) + (i >>> 13)) | 0) +
              (yt >>> 26)) |
            0),
            (yt &= 67108863),
            (n = Math.imul(b, z)),
            (i = ((i = Math.imul(b, q)) + Math.imul(A, z)) | 0),
            (o = Math.imul(A, q)),
            (n = (n + Math.imul(v, Y)) | 0),
            (i = ((i = (i + Math.imul(v, J)) | 0) + Math.imul(y, Y)) | 0),
            (o = (o + Math.imul(y, J)) | 0),
            (n = (n + Math.imul(p, K)) | 0),
            (i = ((i = (i + Math.imul(p, Q)) | 0) + Math.imul(m, K)) | 0),
            (o = (o + Math.imul(m, Q)) | 0);
          var wt =
            (((c + (n = (n + Math.imul(h, V)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, Z)) | 0) + Math.imul(f, V)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(f, Z)) | 0) + (i >>> 13)) | 0) +
              (wt >>> 26)) |
            0),
            (wt &= 67108863),
            (n = Math.imul(M, z)),
            (i = ((i = Math.imul(M, q)) + Math.imul(k, z)) | 0),
            (o = Math.imul(k, q)),
            (n = (n + Math.imul(b, Y)) | 0),
            (i = ((i = (i + Math.imul(b, J)) | 0) + Math.imul(A, Y)) | 0),
            (o = (o + Math.imul(A, J)) | 0),
            (n = (n + Math.imul(v, K)) | 0),
            (i = ((i = (i + Math.imul(v, Q)) | 0) + Math.imul(y, K)) | 0),
            (o = (o + Math.imul(y, Q)) | 0),
            (n = (n + Math.imul(p, V)) | 0),
            (i = ((i = (i + Math.imul(p, Z)) | 0) + Math.imul(m, V)) | 0),
            (o = (o + Math.imul(m, Z)) | 0);
          var bt =
            (((c + (n = (n + Math.imul(h, $)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, tt)) | 0) + Math.imul(f, $)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(f, tt)) | 0) + (i >>> 13)) | 0) +
              (bt >>> 26)) |
            0),
            (bt &= 67108863),
            (n = Math.imul(C, z)),
            (i = ((i = Math.imul(C, q)) + Math.imul(N, z)) | 0),
            (o = Math.imul(N, q)),
            (n = (n + Math.imul(M, Y)) | 0),
            (i = ((i = (i + Math.imul(M, J)) | 0) + Math.imul(k, Y)) | 0),
            (o = (o + Math.imul(k, J)) | 0),
            (n = (n + Math.imul(b, K)) | 0),
            (i = ((i = (i + Math.imul(b, Q)) | 0) + Math.imul(A, K)) | 0),
            (o = (o + Math.imul(A, Q)) | 0),
            (n = (n + Math.imul(v, V)) | 0),
            (i = ((i = (i + Math.imul(v, Z)) | 0) + Math.imul(y, V)) | 0),
            (o = (o + Math.imul(y, Z)) | 0),
            (n = (n + Math.imul(p, $)) | 0),
            (i = ((i = (i + Math.imul(p, tt)) | 0) + Math.imul(m, $)) | 0),
            (o = (o + Math.imul(m, tt)) | 0);
          var At =
            (((c + (n = (n + Math.imul(h, rt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, nt)) | 0) + Math.imul(f, rt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(f, nt)) | 0) + (i >>> 13)) | 0) +
              (At >>> 26)) |
            0),
            (At &= 67108863),
            (n = Math.imul(O, z)),
            (i = ((i = Math.imul(O, q)) + Math.imul(P, z)) | 0),
            (o = Math.imul(P, q)),
            (n = (n + Math.imul(C, Y)) | 0),
            (i = ((i = (i + Math.imul(C, J)) | 0) + Math.imul(N, Y)) | 0),
            (o = (o + Math.imul(N, J)) | 0),
            (n = (n + Math.imul(M, K)) | 0),
            (i = ((i = (i + Math.imul(M, Q)) | 0) + Math.imul(k, K)) | 0),
            (o = (o + Math.imul(k, Q)) | 0),
            (n = (n + Math.imul(b, V)) | 0),
            (i = ((i = (i + Math.imul(b, Z)) | 0) + Math.imul(A, V)) | 0),
            (o = (o + Math.imul(A, Z)) | 0),
            (n = (n + Math.imul(v, $)) | 0),
            (i = ((i = (i + Math.imul(v, tt)) | 0) + Math.imul(y, $)) | 0),
            (o = (o + Math.imul(y, tt)) | 0),
            (n = (n + Math.imul(p, rt)) | 0),
            (i = ((i = (i + Math.imul(p, nt)) | 0) + Math.imul(m, rt)) | 0),
            (o = (o + Math.imul(m, nt)) | 0);
          var Et =
            (((c + (n = (n + Math.imul(h, ot)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, st)) | 0) + Math.imul(f, ot)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(f, st)) | 0) + (i >>> 13)) | 0) +
              (Et >>> 26)) |
            0),
            (Et &= 67108863),
            (n = Math.imul(x, z)),
            (i = ((i = Math.imul(x, q)) + Math.imul(R, z)) | 0),
            (o = Math.imul(R, q)),
            (n = (n + Math.imul(O, Y)) | 0),
            (i = ((i = (i + Math.imul(O, J)) | 0) + Math.imul(P, Y)) | 0),
            (o = (o + Math.imul(P, J)) | 0),
            (n = (n + Math.imul(C, K)) | 0),
            (i = ((i = (i + Math.imul(C, Q)) | 0) + Math.imul(N, K)) | 0),
            (o = (o + Math.imul(N, Q)) | 0),
            (n = (n + Math.imul(M, V)) | 0),
            (i = ((i = (i + Math.imul(M, Z)) | 0) + Math.imul(k, V)) | 0),
            (o = (o + Math.imul(k, Z)) | 0),
            (n = (n + Math.imul(b, $)) | 0),
            (i = ((i = (i + Math.imul(b, tt)) | 0) + Math.imul(A, $)) | 0),
            (o = (o + Math.imul(A, tt)) | 0),
            (n = (n + Math.imul(v, rt)) | 0),
            (i = ((i = (i + Math.imul(v, nt)) | 0) + Math.imul(y, rt)) | 0),
            (o = (o + Math.imul(y, nt)) | 0),
            (n = (n + Math.imul(p, ot)) | 0),
            (i = ((i = (i + Math.imul(p, st)) | 0) + Math.imul(m, ot)) | 0),
            (o = (o + Math.imul(m, st)) | 0);
          var Mt =
            (((c + (n = (n + Math.imul(h, ut)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, ct)) | 0) + Math.imul(f, ut)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(f, ct)) | 0) + (i >>> 13)) | 0) +
              (Mt >>> 26)) |
            0),
            (Mt &= 67108863),
            (n = Math.imul(B, z)),
            (i = ((i = Math.imul(B, q)) + Math.imul(L, z)) | 0),
            (o = Math.imul(L, q)),
            (n = (n + Math.imul(x, Y)) | 0),
            (i = ((i = (i + Math.imul(x, J)) | 0) + Math.imul(R, Y)) | 0),
            (o = (o + Math.imul(R, J)) | 0),
            (n = (n + Math.imul(O, K)) | 0),
            (i = ((i = (i + Math.imul(O, Q)) | 0) + Math.imul(P, K)) | 0),
            (o = (o + Math.imul(P, Q)) | 0),
            (n = (n + Math.imul(C, V)) | 0),
            (i = ((i = (i + Math.imul(C, Z)) | 0) + Math.imul(N, V)) | 0),
            (o = (o + Math.imul(N, Z)) | 0),
            (n = (n + Math.imul(M, $)) | 0),
            (i = ((i = (i + Math.imul(M, tt)) | 0) + Math.imul(k, $)) | 0),
            (o = (o + Math.imul(k, tt)) | 0),
            (n = (n + Math.imul(b, rt)) | 0),
            (i = ((i = (i + Math.imul(b, nt)) | 0) + Math.imul(A, rt)) | 0),
            (o = (o + Math.imul(A, nt)) | 0),
            (n = (n + Math.imul(v, ot)) | 0),
            (i = ((i = (i + Math.imul(v, st)) | 0) + Math.imul(y, ot)) | 0),
            (o = (o + Math.imul(y, st)) | 0),
            (n = (n + Math.imul(p, ut)) | 0),
            (i = ((i = (i + Math.imul(p, ct)) | 0) + Math.imul(m, ut)) | 0),
            (o = (o + Math.imul(m, ct)) | 0);
          var kt =
            (((c + (n = (n + Math.imul(h, ht)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, ft)) | 0) + Math.imul(f, ht)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(f, ft)) | 0) + (i >>> 13)) | 0) +
              (kt >>> 26)) |
            0),
            (kt &= 67108863),
            (n = Math.imul(D, z)),
            (i = ((i = Math.imul(D, q)) + Math.imul(j, z)) | 0),
            (o = Math.imul(j, q)),
            (n = (n + Math.imul(B, Y)) | 0),
            (i = ((i = (i + Math.imul(B, J)) | 0) + Math.imul(L, Y)) | 0),
            (o = (o + Math.imul(L, J)) | 0),
            (n = (n + Math.imul(x, K)) | 0),
            (i = ((i = (i + Math.imul(x, Q)) | 0) + Math.imul(R, K)) | 0),
            (o = (o + Math.imul(R, Q)) | 0),
            (n = (n + Math.imul(O, V)) | 0),
            (i = ((i = (i + Math.imul(O, Z)) | 0) + Math.imul(P, V)) | 0),
            (o = (o + Math.imul(P, Z)) | 0),
            (n = (n + Math.imul(C, $)) | 0),
            (i = ((i = (i + Math.imul(C, tt)) | 0) + Math.imul(N, $)) | 0),
            (o = (o + Math.imul(N, tt)) | 0),
            (n = (n + Math.imul(M, rt)) | 0),
            (i = ((i = (i + Math.imul(M, nt)) | 0) + Math.imul(k, rt)) | 0),
            (o = (o + Math.imul(k, nt)) | 0),
            (n = (n + Math.imul(b, ot)) | 0),
            (i = ((i = (i + Math.imul(b, st)) | 0) + Math.imul(A, ot)) | 0),
            (o = (o + Math.imul(A, st)) | 0),
            (n = (n + Math.imul(v, ut)) | 0),
            (i = ((i = (i + Math.imul(v, ct)) | 0) + Math.imul(y, ut)) | 0),
            (o = (o + Math.imul(y, ct)) | 0),
            (n = (n + Math.imul(p, ht)) | 0),
            (i = ((i = (i + Math.imul(p, ft)) | 0) + Math.imul(m, ht)) | 0),
            (o = (o + Math.imul(m, ft)) | 0);
          var _t =
            (((c + (n = (n + Math.imul(h, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, mt)) | 0) + Math.imul(f, pt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(f, mt)) | 0) + (i >>> 13)) | 0) +
              (_t >>> 26)) |
            0),
            (_t &= 67108863),
            (n = Math.imul(D, Y)),
            (i = ((i = Math.imul(D, J)) + Math.imul(j, Y)) | 0),
            (o = Math.imul(j, J)),
            (n = (n + Math.imul(B, K)) | 0),
            (i = ((i = (i + Math.imul(B, Q)) | 0) + Math.imul(L, K)) | 0),
            (o = (o + Math.imul(L, Q)) | 0),
            (n = (n + Math.imul(x, V)) | 0),
            (i = ((i = (i + Math.imul(x, Z)) | 0) + Math.imul(R, V)) | 0),
            (o = (o + Math.imul(R, Z)) | 0),
            (n = (n + Math.imul(O, $)) | 0),
            (i = ((i = (i + Math.imul(O, tt)) | 0) + Math.imul(P, $)) | 0),
            (o = (o + Math.imul(P, tt)) | 0),
            (n = (n + Math.imul(C, rt)) | 0),
            (i = ((i = (i + Math.imul(C, nt)) | 0) + Math.imul(N, rt)) | 0),
            (o = (o + Math.imul(N, nt)) | 0),
            (n = (n + Math.imul(M, ot)) | 0),
            (i = ((i = (i + Math.imul(M, st)) | 0) + Math.imul(k, ot)) | 0),
            (o = (o + Math.imul(k, st)) | 0),
            (n = (n + Math.imul(b, ut)) | 0),
            (i = ((i = (i + Math.imul(b, ct)) | 0) + Math.imul(A, ut)) | 0),
            (o = (o + Math.imul(A, ct)) | 0),
            (n = (n + Math.imul(v, ht)) | 0),
            (i = ((i = (i + Math.imul(v, ft)) | 0) + Math.imul(y, ht)) | 0),
            (o = (o + Math.imul(y, ft)) | 0);
          var Ct =
            (((c + (n = (n + Math.imul(p, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(p, mt)) | 0) + Math.imul(m, pt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(m, mt)) | 0) + (i >>> 13)) | 0) +
              (Ct >>> 26)) |
            0),
            (Ct &= 67108863),
            (n = Math.imul(D, K)),
            (i = ((i = Math.imul(D, Q)) + Math.imul(j, K)) | 0),
            (o = Math.imul(j, Q)),
            (n = (n + Math.imul(B, V)) | 0),
            (i = ((i = (i + Math.imul(B, Z)) | 0) + Math.imul(L, V)) | 0),
            (o = (o + Math.imul(L, Z)) | 0),
            (n = (n + Math.imul(x, $)) | 0),
            (i = ((i = (i + Math.imul(x, tt)) | 0) + Math.imul(R, $)) | 0),
            (o = (o + Math.imul(R, tt)) | 0),
            (n = (n + Math.imul(O, rt)) | 0),
            (i = ((i = (i + Math.imul(O, nt)) | 0) + Math.imul(P, rt)) | 0),
            (o = (o + Math.imul(P, nt)) | 0),
            (n = (n + Math.imul(C, ot)) | 0),
            (i = ((i = (i + Math.imul(C, st)) | 0) + Math.imul(N, ot)) | 0),
            (o = (o + Math.imul(N, st)) | 0),
            (n = (n + Math.imul(M, ut)) | 0),
            (i = ((i = (i + Math.imul(M, ct)) | 0) + Math.imul(k, ut)) | 0),
            (o = (o + Math.imul(k, ct)) | 0),
            (n = (n + Math.imul(b, ht)) | 0),
            (i = ((i = (i + Math.imul(b, ft)) | 0) + Math.imul(A, ht)) | 0),
            (o = (o + Math.imul(A, ft)) | 0);
          var Nt =
            (((c + (n = (n + Math.imul(v, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(v, mt)) | 0) + Math.imul(y, pt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(y, mt)) | 0) + (i >>> 13)) | 0) +
              (Nt >>> 26)) |
            0),
            (Nt &= 67108863),
            (n = Math.imul(D, V)),
            (i = ((i = Math.imul(D, Z)) + Math.imul(j, V)) | 0),
            (o = Math.imul(j, Z)),
            (n = (n + Math.imul(B, $)) | 0),
            (i = ((i = (i + Math.imul(B, tt)) | 0) + Math.imul(L, $)) | 0),
            (o = (o + Math.imul(L, tt)) | 0),
            (n = (n + Math.imul(x, rt)) | 0),
            (i = ((i = (i + Math.imul(x, nt)) | 0) + Math.imul(R, rt)) | 0),
            (o = (o + Math.imul(R, nt)) | 0),
            (n = (n + Math.imul(O, ot)) | 0),
            (i = ((i = (i + Math.imul(O, st)) | 0) + Math.imul(P, ot)) | 0),
            (o = (o + Math.imul(P, st)) | 0),
            (n = (n + Math.imul(C, ut)) | 0),
            (i = ((i = (i + Math.imul(C, ct)) | 0) + Math.imul(N, ut)) | 0),
            (o = (o + Math.imul(N, ct)) | 0),
            (n = (n + Math.imul(M, ht)) | 0),
            (i = ((i = (i + Math.imul(M, ft)) | 0) + Math.imul(k, ht)) | 0),
            (o = (o + Math.imul(k, ft)) | 0);
          var It =
            (((c + (n = (n + Math.imul(b, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(b, mt)) | 0) + Math.imul(A, pt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(A, mt)) | 0) + (i >>> 13)) | 0) +
              (It >>> 26)) |
            0),
            (It &= 67108863),
            (n = Math.imul(D, $)),
            (i = ((i = Math.imul(D, tt)) + Math.imul(j, $)) | 0),
            (o = Math.imul(j, tt)),
            (n = (n + Math.imul(B, rt)) | 0),
            (i = ((i = (i + Math.imul(B, nt)) | 0) + Math.imul(L, rt)) | 0),
            (o = (o + Math.imul(L, nt)) | 0),
            (n = (n + Math.imul(x, ot)) | 0),
            (i = ((i = (i + Math.imul(x, st)) | 0) + Math.imul(R, ot)) | 0),
            (o = (o + Math.imul(R, st)) | 0),
            (n = (n + Math.imul(O, ut)) | 0),
            (i = ((i = (i + Math.imul(O, ct)) | 0) + Math.imul(P, ut)) | 0),
            (o = (o + Math.imul(P, ct)) | 0),
            (n = (n + Math.imul(C, ht)) | 0),
            (i = ((i = (i + Math.imul(C, ft)) | 0) + Math.imul(N, ht)) | 0),
            (o = (o + Math.imul(N, ft)) | 0);
          var Ot =
            (((c + (n = (n + Math.imul(M, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(M, mt)) | 0) + Math.imul(k, pt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(k, mt)) | 0) + (i >>> 13)) | 0) +
              (Ot >>> 26)) |
            0),
            (Ot &= 67108863),
            (n = Math.imul(D, rt)),
            (i = ((i = Math.imul(D, nt)) + Math.imul(j, rt)) | 0),
            (o = Math.imul(j, nt)),
            (n = (n + Math.imul(B, ot)) | 0),
            (i = ((i = (i + Math.imul(B, st)) | 0) + Math.imul(L, ot)) | 0),
            (o = (o + Math.imul(L, st)) | 0),
            (n = (n + Math.imul(x, ut)) | 0),
            (i = ((i = (i + Math.imul(x, ct)) | 0) + Math.imul(R, ut)) | 0),
            (o = (o + Math.imul(R, ct)) | 0),
            (n = (n + Math.imul(O, ht)) | 0),
            (i = ((i = (i + Math.imul(O, ft)) | 0) + Math.imul(P, ht)) | 0),
            (o = (o + Math.imul(P, ft)) | 0);
          var Pt =
            (((c + (n = (n + Math.imul(C, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(C, mt)) | 0) + Math.imul(N, pt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(N, mt)) | 0) + (i >>> 13)) | 0) +
              (Pt >>> 26)) |
            0),
            (Pt &= 67108863),
            (n = Math.imul(D, ot)),
            (i = ((i = Math.imul(D, st)) + Math.imul(j, ot)) | 0),
            (o = Math.imul(j, st)),
            (n = (n + Math.imul(B, ut)) | 0),
            (i = ((i = (i + Math.imul(B, ct)) | 0) + Math.imul(L, ut)) | 0),
            (o = (o + Math.imul(L, ct)) | 0),
            (n = (n + Math.imul(x, ht)) | 0),
            (i = ((i = (i + Math.imul(x, ft)) | 0) + Math.imul(R, ht)) | 0),
            (o = (o + Math.imul(R, ft)) | 0);
          var St =
            (((c + (n = (n + Math.imul(O, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(O, mt)) | 0) + Math.imul(P, pt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(P, mt)) | 0) + (i >>> 13)) | 0) +
              (St >>> 26)) |
            0),
            (St &= 67108863),
            (n = Math.imul(D, ut)),
            (i = ((i = Math.imul(D, ct)) + Math.imul(j, ut)) | 0),
            (o = Math.imul(j, ct)),
            (n = (n + Math.imul(B, ht)) | 0),
            (i = ((i = (i + Math.imul(B, ft)) | 0) + Math.imul(L, ht)) | 0),
            (o = (o + Math.imul(L, ft)) | 0);
          var xt =
            (((c + (n = (n + Math.imul(x, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(x, mt)) | 0) + Math.imul(R, pt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(R, mt)) | 0) + (i >>> 13)) | 0) +
              (xt >>> 26)) |
            0),
            (xt &= 67108863),
            (n = Math.imul(D, ht)),
            (i = ((i = Math.imul(D, ft)) + Math.imul(j, ht)) | 0),
            (o = Math.imul(j, ft));
          var Rt =
            (((c + (n = (n + Math.imul(B, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(B, mt)) | 0) + Math.imul(L, pt)) | 0)) <<
                13)) |
            0;
          (c =
            ((((o = (o + Math.imul(L, mt)) | 0) + (i >>> 13)) | 0) +
              (Rt >>> 26)) |
            0),
            (Rt &= 67108863);
          var Tt =
            (((c + (n = Math.imul(D, pt))) | 0) +
              ((8191 & (i = ((i = Math.imul(D, mt)) + Math.imul(j, pt)) | 0)) <<
                13)) |
            0;
          return (
            (c =
              ((((o = Math.imul(j, mt)) + (i >>> 13)) | 0) + (Tt >>> 26)) | 0),
            (Tt &= 67108863),
            (u[0] = gt),
            (u[1] = vt),
            (u[2] = yt),
            (u[3] = wt),
            (u[4] = bt),
            (u[5] = At),
            (u[6] = Et),
            (u[7] = Mt),
            (u[8] = kt),
            (u[9] = _t),
            (u[10] = Ct),
            (u[11] = Nt),
            (u[12] = It),
            (u[13] = Ot),
            (u[14] = Pt),
            (u[15] = St),
            (u[16] = xt),
            (u[17] = Rt),
            (u[18] = Tt),
            0 !== c && ((u[19] = c), r.length++),
            r
          );
        };
        function v(t, e, r) {
          (r.negative = e.negative ^ t.negative),
            (r.length = t.length + e.length);
          for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
            var s = i;
            i = 0;
            for (
              var a = 67108863 & n,
                u = Math.min(o, e.length - 1),
                c = Math.max(0, o - t.length + 1);
              c <= u;
              c++
            ) {
              var l = o - c,
                h = (0 | t.words[l]) * (0 | e.words[c]),
                f = 67108863 & h;
              (a = 67108863 & (f = (f + a) | 0)),
                (i +=
                  (s =
                    ((s = (s + ((h / 67108864) | 0)) | 0) + (f >>> 26)) | 0) >>>
                  26),
                (s &= 67108863);
            }
            (r.words[o] = a), (n = s), (s = i);
          }
          return 0 !== n ? (r.words[o] = n) : r.length--, r._strip();
        }
        function y(t, e, r) {
          return v(t, e, r);
        }
        function w(t, e) {
          (this.x = t), (this.y = e);
        }
        Math.imul || (g = m),
          (o.prototype.mulTo = function (t, e) {
            var r = this.length + t.length;
            return 10 === this.length && 10 === t.length
              ? g(this, t, e)
              : r < 63
              ? m(this, t, e)
              : r < 1024
              ? v(this, t, e)
              : y(this, t, e);
          }),
          (w.prototype.makeRBT = function (t) {
            for (
              var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0;
              n < t;
              n++
            )
              e[n] = this.revBin(n, r, t);
            return e;
          }),
          (w.prototype.revBin = function (t, e, r) {
            if (0 === t || t === r - 1) return t;
            for (var n = 0, i = 0; i < e; i++)
              (n |= (1 & t) << (e - i - 1)), (t >>= 1);
            return n;
          }),
          (w.prototype.permute = function (t, e, r, n, i, o) {
            for (var s = 0; s < o; s++) (n[s] = e[t[s]]), (i[s] = r[t[s]]);
          }),
          (w.prototype.transform = function (t, e, r, n, i, o) {
            this.permute(o, t, e, r, n, i);
            for (var s = 1; s < i; s <<= 1)
              for (
                var a = s << 1,
                  u = Math.cos((2 * Math.PI) / a),
                  c = Math.sin((2 * Math.PI) / a),
                  l = 0;
                l < i;
                l += a
              )
                for (var h = u, f = c, d = 0; d < s; d++) {
                  var p = r[l + d],
                    m = n[l + d],
                    g = r[l + d + s],
                    v = n[l + d + s],
                    y = h * g - f * v;
                  (v = h * v + f * g),
                    (g = y),
                    (r[l + d] = p + g),
                    (n[l + d] = m + v),
                    (r[l + d + s] = p - g),
                    (n[l + d + s] = m - v),
                    d !== a &&
                      ((y = u * h - c * f), (f = u * f + c * h), (h = y));
                }
          }),
          (w.prototype.guessLen13b = function (t, e) {
            var r = 1 | Math.max(e, t),
              n = 1 & r,
              i = 0;
            for (r = (r / 2) | 0; r; r >>>= 1) i++;
            return 1 << (i + 1 + n);
          }),
          (w.prototype.conjugate = function (t, e, r) {
            if (!(r <= 1))
              for (var n = 0; n < r / 2; n++) {
                var i = t[n];
                (t[n] = t[r - n - 1]),
                  (t[r - n - 1] = i),
                  (i = e[n]),
                  (e[n] = -e[r - n - 1]),
                  (e[r - n - 1] = -i);
              }
          }),
          (w.prototype.normalize13b = function (t, e) {
            for (var r = 0, n = 0; n < e / 2; n++) {
              var i =
                8192 * Math.round(t[2 * n + 1] / e) +
                Math.round(t[2 * n] / e) +
                r;
              (t[n] = 67108863 & i),
                (r = i < 67108864 ? 0 : (i / 67108864) | 0);
            }
            return t;
          }),
          (w.prototype.convert13b = function (t, e, r, i) {
            for (var o = 0, s = 0; s < e; s++)
              (o += 0 | t[s]),
                (r[2 * s] = 8191 & o),
                (o >>>= 13),
                (r[2 * s + 1] = 8191 & o),
                (o >>>= 13);
            for (s = 2 * e; s < i; ++s) r[s] = 0;
            n(0 === o), n(0 === (-8192 & o));
          }),
          (w.prototype.stub = function (t) {
            for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
            return e;
          }),
          (w.prototype.mulp = function (t, e, r) {
            var n = 2 * this.guessLen13b(t.length, e.length),
              i = this.makeRBT(n),
              o = this.stub(n),
              s = new Array(n),
              a = new Array(n),
              u = new Array(n),
              c = new Array(n),
              l = new Array(n),
              h = new Array(n),
              f = r.words;
            (f.length = n),
              this.convert13b(t.words, t.length, s, n),
              this.convert13b(e.words, e.length, c, n),
              this.transform(s, o, a, u, n, i),
              this.transform(c, o, l, h, n, i);
            for (var d = 0; d < n; d++) {
              var p = a[d] * l[d] - u[d] * h[d];
              (u[d] = a[d] * h[d] + u[d] * l[d]), (a[d] = p);
            }
            return (
              this.conjugate(a, u, n),
              this.transform(a, u, f, o, n, i),
              this.conjugate(f, o, n),
              this.normalize13b(f, n),
              (r.negative = t.negative ^ e.negative),
              (r.length = t.length + e.length),
              r._strip()
            );
          }),
          (o.prototype.mul = function (t) {
            var e = new o(null);
            return (
              (e.words = new Array(this.length + t.length)), this.mulTo(t, e)
            );
          }),
          (o.prototype.mulf = function (t) {
            var e = new o(null);
            return (e.words = new Array(this.length + t.length)), y(this, t, e);
          }),
          (o.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (o.prototype.imuln = function (t) {
            var e = t < 0;
            e && (t = -t), n("number" === typeof t), n(t < 67108864);
            for (var r = 0, i = 0; i < this.length; i++) {
              var o = (0 | this.words[i]) * t,
                s = (67108863 & o) + (67108863 & r);
              (r >>= 26),
                (r += (o / 67108864) | 0),
                (r += s >>> 26),
                (this.words[i] = 67108863 & s);
            }
            return (
              0 !== r && ((this.words[i] = r), this.length++),
              e ? this.ineg() : this
            );
          }),
          (o.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (o.prototype.sqr = function () {
            return this.mul(this);
          }),
          (o.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (o.prototype.pow = function (t) {
            var e = (function (t) {
              for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                var n = (r / 26) | 0,
                  i = r % 26;
                e[r] = (t.words[n] >>> i) & 1;
              }
              return e;
            })(t);
            if (0 === e.length) return new o(1);
            for (
              var r = this, n = 0;
              n < e.length && 0 === e[n];
              n++, r = r.sqr()
            );
            if (++n < e.length)
              for (var i = r.sqr(); n < e.length; n++, i = i.sqr())
                0 !== e[n] && (r = r.mul(i));
            return r;
          }),
          (o.prototype.iushln = function (t) {
            n("number" === typeof t && t >= 0);
            var e,
              r = t % 26,
              i = (t - r) / 26,
              o = (67108863 >>> (26 - r)) << (26 - r);
            if (0 !== r) {
              var s = 0;
              for (e = 0; e < this.length; e++) {
                var a = this.words[e] & o,
                  u = ((0 | this.words[e]) - a) << r;
                (this.words[e] = u | s), (s = a >>> (26 - r));
              }
              s && ((this.words[e] = s), this.length++);
            }
            if (0 !== i) {
              for (e = this.length - 1; e >= 0; e--)
                this.words[e + i] = this.words[e];
              for (e = 0; e < i; e++) this.words[e] = 0;
              this.length += i;
            }
            return this._strip();
          }),
          (o.prototype.ishln = function (t) {
            return n(0 === this.negative), this.iushln(t);
          }),
          (o.prototype.iushrn = function (t, e, r) {
            var i;
            n("number" === typeof t && t >= 0),
              (i = e ? (e - (e % 26)) / 26 : 0);
            var o = t % 26,
              s = Math.min((t - o) / 26, this.length),
              a = 67108863 ^ ((67108863 >>> o) << o),
              u = r;
            if (((i -= s), (i = Math.max(0, i)), u)) {
              for (var c = 0; c < s; c++) u.words[c] = this.words[c];
              u.length = s;
            }
            if (0 === s);
            else if (this.length > s)
              for (this.length -= s, c = 0; c < this.length; c++)
                this.words[c] = this.words[c + s];
            else (this.words[0] = 0), (this.length = 1);
            var l = 0;
            for (c = this.length - 1; c >= 0 && (0 !== l || c >= i); c--) {
              var h = 0 | this.words[c];
              (this.words[c] = (l << (26 - o)) | (h >>> o)), (l = h & a);
            }
            return (
              u && 0 !== l && (u.words[u.length++] = l),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this._strip()
            );
          }),
          (o.prototype.ishrn = function (t, e, r) {
            return n(0 === this.negative), this.iushrn(t, e, r);
          }),
          (o.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (o.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (o.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (o.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (o.prototype.testn = function (t) {
            n("number" === typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e;
            return !(this.length <= r) && !!(this.words[r] & i);
          }),
          (o.prototype.imaskn = function (t) {
            n("number" === typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            if (
              (n(
                0 === this.negative,
                "imaskn works only with positive numbers"
              ),
              this.length <= r)
            )
              return this;
            if (
              (0 !== e && r++,
              (this.length = Math.min(r, this.length)),
              0 !== e)
            ) {
              var i = 67108863 ^ ((67108863 >>> e) << e);
              this.words[this.length - 1] &= i;
            }
            return this._strip();
          }),
          (o.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (o.prototype.iaddn = function (t) {
            return (
              n("number" === typeof t),
              n(t < 67108864),
              t < 0
                ? this.isubn(-t)
                : 0 !== this.negative
                ? 1 === this.length && (0 | this.words[0]) <= t
                  ? ((this.words[0] = t - (0 | this.words[0])),
                    (this.negative = 0),
                    this)
                  : ((this.negative = 0),
                    this.isubn(t),
                    (this.negative = 1),
                    this)
                : this._iaddn(t)
            );
          }),
          (o.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
              (this.words[e] -= 67108864),
                e === this.length - 1
                  ? (this.words[e + 1] = 1)
                  : this.words[e + 1]++;
            return (this.length = Math.max(this.length, e + 1)), this;
          }),
          (o.prototype.isubn = function (t) {
            if ((n("number" === typeof t), n(t < 67108864), t < 0))
              return this.iaddn(-t);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              );
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var e = 0; e < this.length && this.words[e] < 0; e++)
                (this.words[e] += 67108864), (this.words[e + 1] -= 1);
            return this._strip();
          }),
          (o.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (o.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (o.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (o.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (o.prototype._ishlnsubmul = function (t, e, r) {
            var i,
              o,
              s = t.length + r;
            this._expand(s);
            var a = 0;
            for (i = 0; i < t.length; i++) {
              o = (0 | this.words[i + r]) + a;
              var u = (0 | t.words[i]) * e;
              (a = ((o -= 67108863 & u) >> 26) - ((u / 67108864) | 0)),
                (this.words[i + r] = 67108863 & o);
            }
            for (; i < this.length - r; i++)
              (a = (o = (0 | this.words[i + r]) + a) >> 26),
                (this.words[i + r] = 67108863 & o);
            if (0 === a) return this._strip();
            for (n(-1 === a), a = 0, i = 0; i < this.length; i++)
              (a = (o = -(0 | this.words[i]) + a) >> 26),
                (this.words[i] = 67108863 & o);
            return (this.negative = 1), this._strip();
          }),
          (o.prototype._wordDiv = function (t, e) {
            var r = (this.length, t.length),
              n = this.clone(),
              i = t,
              s = 0 | i.words[i.length - 1];
            0 !== (r = 26 - this._countBits(s)) &&
              ((i = i.ushln(r)), n.iushln(r), (s = 0 | i.words[i.length - 1]));
            var a,
              u = n.length - i.length;
            if ("mod" !== e) {
              ((a = new o(null)).length = u + 1),
                (a.words = new Array(a.length));
              for (var c = 0; c < a.length; c++) a.words[c] = 0;
            }
            var l = n.clone()._ishlnsubmul(i, 1, u);
            0 === l.negative && ((n = l), a && (a.words[u] = 1));
            for (var h = u - 1; h >= 0; h--) {
              var f =
                67108864 * (0 | n.words[i.length + h]) +
                (0 | n.words[i.length + h - 1]);
              for (
                f = Math.min((f / s) | 0, 67108863), n._ishlnsubmul(i, f, h);
                0 !== n.negative;

              )
                f--,
                  (n.negative = 0),
                  n._ishlnsubmul(i, 1, h),
                  n.isZero() || (n.negative ^= 1);
              a && (a.words[h] = f);
            }
            return (
              a && a._strip(),
              n._strip(),
              "div" !== e && 0 !== r && n.iushrn(r),
              { div: a || null, mod: n }
            );
          }),
          (o.prototype.divmod = function (t, e, r) {
            return (
              n(!t.isZero()),
              this.isZero()
                ? { div: new o(0), mod: new o(0) }
                : 0 !== this.negative && 0 === t.negative
                ? ((a = this.neg().divmod(t, e)),
                  "mod" !== e && (i = a.div.neg()),
                  "div" !== e &&
                    ((s = a.mod.neg()), r && 0 !== s.negative && s.iadd(t)),
                  { div: i, mod: s })
                : 0 === this.negative && 0 !== t.negative
                ? ((a = this.divmod(t.neg(), e)),
                  "mod" !== e && (i = a.div.neg()),
                  { div: i, mod: a.mod })
                : 0 !== (this.negative & t.negative)
                ? ((a = this.neg().divmod(t.neg(), e)),
                  "div" !== e &&
                    ((s = a.mod.neg()), r && 0 !== s.negative && s.isub(t)),
                  { div: a.div, mod: s })
                : t.length > this.length || this.cmp(t) < 0
                ? { div: new o(0), mod: this }
                : 1 === t.length
                ? "div" === e
                  ? { div: this.divn(t.words[0]), mod: null }
                  : "mod" === e
                  ? { div: null, mod: new o(this.modrn(t.words[0])) }
                  : {
                      div: this.divn(t.words[0]),
                      mod: new o(this.modrn(t.words[0])),
                    }
                : this._wordDiv(t, e)
            );
            var i, s, a;
          }),
          (o.prototype.div = function (t) {
            return this.divmod(t, "div", !1).div;
          }),
          (o.prototype.mod = function (t) {
            return this.divmod(t, "mod", !1).mod;
          }),
          (o.prototype.umod = function (t) {
            return this.divmod(t, "mod", !0).mod;
          }),
          (o.prototype.divRound = function (t) {
            var e = this.divmod(t);
            if (e.mod.isZero()) return e.div;
            var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              n = t.ushrn(1),
              i = t.andln(1),
              o = r.cmp(n);
            return o < 0 || (1 === i && 0 === o)
              ? e.div
              : 0 !== e.div.negative
              ? e.div.isubn(1)
              : e.div.iaddn(1);
          }),
          (o.prototype.modrn = function (t) {
            var e = t < 0;
            e && (t = -t), n(t <= 67108863);
            for (var r = (1 << 26) % t, i = 0, o = this.length - 1; o >= 0; o--)
              i = (r * i + (0 | this.words[o])) % t;
            return e ? -i : i;
          }),
          (o.prototype.modn = function (t) {
            return this.modrn(t);
          }),
          (o.prototype.idivn = function (t) {
            var e = t < 0;
            e && (t = -t), n(t <= 67108863);
            for (var r = 0, i = this.length - 1; i >= 0; i--) {
              var o = (0 | this.words[i]) + 67108864 * r;
              (this.words[i] = (o / t) | 0), (r = o % t);
            }
            return this._strip(), e ? this.ineg() : this;
          }),
          (o.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (o.prototype.egcd = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e = this,
              r = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var i = new o(1), s = new o(0), a = new o(0), u = new o(1), c = 0;
              e.isEven() && r.isEven();

            )
              e.iushrn(1), r.iushrn(1), ++c;
            for (var l = r.clone(), h = e.clone(); !e.isZero(); ) {
              for (
                var f = 0, d = 1;
                0 === (e.words[0] & d) && f < 26;
                ++f, d <<= 1
              );
              if (f > 0)
                for (e.iushrn(f); f-- > 0; )
                  (i.isOdd() || s.isOdd()) && (i.iadd(l), s.isub(h)),
                    i.iushrn(1),
                    s.iushrn(1);
              for (
                var p = 0, m = 1;
                0 === (r.words[0] & m) && p < 26;
                ++p, m <<= 1
              );
              if (p > 0)
                for (r.iushrn(p); p-- > 0; )
                  (a.isOdd() || u.isOdd()) && (a.iadd(l), u.isub(h)),
                    a.iushrn(1),
                    u.iushrn(1);
              e.cmp(r) >= 0
                ? (e.isub(r), i.isub(a), s.isub(u))
                : (r.isub(e), a.isub(i), u.isub(s));
            }
            return { a: a, b: u, gcd: r.iushln(c) };
          }),
          (o.prototype._invmp = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e = this,
              r = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var i, s = new o(1), a = new o(0), u = r.clone();
              e.cmpn(1) > 0 && r.cmpn(1) > 0;

            ) {
              for (
                var c = 0, l = 1;
                0 === (e.words[0] & l) && c < 26;
                ++c, l <<= 1
              );
              if (c > 0)
                for (e.iushrn(c); c-- > 0; )
                  s.isOdd() && s.iadd(u), s.iushrn(1);
              for (
                var h = 0, f = 1;
                0 === (r.words[0] & f) && h < 26;
                ++h, f <<= 1
              );
              if (h > 0)
                for (r.iushrn(h); h-- > 0; )
                  a.isOdd() && a.iadd(u), a.iushrn(1);
              e.cmp(r) >= 0 ? (e.isub(r), s.isub(a)) : (r.isub(e), a.isub(s));
            }
            return (i = 0 === e.cmpn(1) ? s : a).cmpn(0) < 0 && i.iadd(t), i;
          }),
          (o.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var e = this.clone(),
              r = t.clone();
            (e.negative = 0), (r.negative = 0);
            for (var n = 0; e.isEven() && r.isEven(); n++)
              e.iushrn(1), r.iushrn(1);
            for (;;) {
              for (; e.isEven(); ) e.iushrn(1);
              for (; r.isEven(); ) r.iushrn(1);
              var i = e.cmp(r);
              if (i < 0) {
                var o = e;
                (e = r), (r = o);
              } else if (0 === i || 0 === r.cmpn(1)) break;
              e.isub(r);
            }
            return r.iushln(n);
          }),
          (o.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (o.prototype.isEven = function () {
            return 0 === (1 & this.words[0]);
          }),
          (o.prototype.isOdd = function () {
            return 1 === (1 & this.words[0]);
          }),
          (o.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (o.prototype.bincn = function (t) {
            n("number" === typeof t);
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e;
            if (this.length <= r)
              return this._expand(r + 1), (this.words[r] |= i), this;
            for (var o = i, s = r; 0 !== o && s < this.length; s++) {
              var a = 0 | this.words[s];
              (o = (a += o) >>> 26), (a &= 67108863), (this.words[s] = a);
            }
            return 0 !== o && ((this.words[s] = o), this.length++), this;
          }),
          (o.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (o.prototype.cmpn = function (t) {
            var e,
              r = t < 0;
            if (0 !== this.negative && !r) return -1;
            if (0 === this.negative && r) return 1;
            if ((this._strip(), this.length > 1)) e = 1;
            else {
              r && (t = -t), n(t <= 67108863, "Number is too big");
              var i = 0 | this.words[0];
              e = i === t ? 0 : i < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var e = this.ucmp(t);
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var n = 0 | this.words[r],
                i = 0 | t.words[r];
              if (n !== i) {
                n < i ? (e = -1) : n > i && (e = 1);
                break;
              }
            }
            return e;
          }),
          (o.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (o.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (o.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (o.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (o.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (o.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (o.prototype.lten = function (t) {
            return this.cmpn(t) <= 0;
          }),
          (o.prototype.lte = function (t) {
            return this.cmp(t) <= 0;
          }),
          (o.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (o.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (o.red = function (t) {
            return new C(t);
          }),
          (o.prototype.toRed = function (t) {
            return (
              n(!this.red, "Already a number in reduction context"),
              n(0 === this.negative, "red works only with positives"),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (o.prototype.fromRed = function () {
            return (
              n(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (o.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (o.prototype.forceRed = function (t) {
            return (
              n(!this.red, "Already a number in reduction context"),
              this._forceRed(t)
            );
          }),
          (o.prototype.redAdd = function (t) {
            return (
              n(this.red, "redAdd works only with red numbers"),
              this.red.add(this, t)
            );
          }),
          (o.prototype.redIAdd = function (t) {
            return (
              n(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, t)
            );
          }),
          (o.prototype.redSub = function (t) {
            return (
              n(this.red, "redSub works only with red numbers"),
              this.red.sub(this, t)
            );
          }),
          (o.prototype.redISub = function (t) {
            return (
              n(this.red, "redISub works only with red numbers"),
              this.red.isub(this, t)
            );
          }),
          (o.prototype.redShl = function (t) {
            return (
              n(this.red, "redShl works only with red numbers"),
              this.red.shl(this, t)
            );
          }),
          (o.prototype.redMul = function (t) {
            return (
              n(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            );
          }),
          (o.prototype.redIMul = function (t) {
            return (
              n(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            );
          }),
          (o.prototype.redSqr = function () {
            return (
              n(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (o.prototype.redISqr = function () {
            return (
              n(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (o.prototype.redSqrt = function () {
            return (
              n(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (o.prototype.redInvm = function () {
            return (
              n(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (o.prototype.redNeg = function () {
            return (
              n(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (o.prototype.redPow = function (t) {
            return (
              n(this.red && !t.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, t)
            );
          });
        var b = { k256: null, p224: null, p192: null, p25519: null };
        function A(t, e) {
          (this.name = t),
            (this.p = new o(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function E() {
          A.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function M() {
          A.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function k() {
          A.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function _() {
          A.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function C(t) {
          if ("string" === typeof t) {
            var e = o._prime(t);
            (this.m = e.p), (this.prime = e);
          } else
            n(t.gtn(1), "modulus must be greater than 1"),
              (this.m = t),
              (this.prime = null);
        }
        function N(t) {
          C.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (A.prototype._tmp = function () {
          var t = new o(null);
          return (t.words = new Array(Math.ceil(this.n / 13))), t;
        }),
          (A.prototype.ireduce = function (t) {
            var e,
              r = t;
            do {
              this.split(r, this.tmp),
                (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
            } while (e > this.n);
            var n = e < this.n ? -1 : r.ucmp(this.p);
            return (
              0 === n
                ? ((r.words[0] = 0), (r.length = 1))
                : n > 0
                ? r.isub(this.p)
                : void 0 !== r.strip
                ? r.strip()
                : r._strip(),
              r
            );
          }),
          (A.prototype.split = function (t, e) {
            t.iushrn(this.n, 0, e);
          }),
          (A.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          i(E, A),
          (E.prototype.split = function (t, e) {
            for (var r = 4194303, n = Math.min(t.length, 9), i = 0; i < n; i++)
              e.words[i] = t.words[i];
            if (((e.length = n), t.length <= 9))
              return (t.words[0] = 0), void (t.length = 1);
            var o = t.words[9];
            for (e.words[e.length++] = o & r, i = 10; i < t.length; i++) {
              var s = 0 | t.words[i];
              (t.words[i - 10] = ((s & r) << 4) | (o >>> 22)), (o = s);
            }
            (o >>>= 22),
              (t.words[i - 10] = o),
              0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (E.prototype.imulK = function (t) {
            (t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2);
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 0 | t.words[r];
              (e += 977 * n),
                (t.words[r] = 67108863 & e),
                (e = 64 * n + ((e / 67108864) | 0));
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            );
          }),
          i(M, A),
          i(k, A),
          i(_, A),
          (_.prototype.imulK = function (t) {
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 19 * (0 | t.words[r]) + e,
                i = 67108863 & n;
              (n >>>= 26), (t.words[r] = i), (e = n);
            }
            return 0 !== e && (t.words[t.length++] = e), t;
          }),
          (o._prime = function (t) {
            if (b[t]) return b[t];
            var e;
            if ("k256" === t) e = new E();
            else if ("p224" === t) e = new M();
            else if ("p192" === t) e = new k();
            else {
              if ("p25519" !== t) throw new Error("Unknown prime " + t);
              e = new _();
            }
            return (b[t] = e), e;
          }),
          (C.prototype._verify1 = function (t) {
            n(0 === t.negative, "red works only with positives"),
              n(t.red, "red works only with red numbers");
          }),
          (C.prototype._verify2 = function (t, e) {
            n(0 === (t.negative | e.negative), "red works only with positives"),
              n(t.red && t.red === e.red, "red works only with red numbers");
          }),
          (C.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : (l(t, t.umod(this.m)._forceRed(this)), t);
          }),
          (C.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (C.prototype.add = function (t, e) {
            this._verify2(t, e);
            var r = t.add(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
          }),
          (C.prototype.iadd = function (t, e) {
            this._verify2(t, e);
            var r = t.iadd(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
          }),
          (C.prototype.sub = function (t, e) {
            this._verify2(t, e);
            var r = t.sub(e);
            return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
          }),
          (C.prototype.isub = function (t, e) {
            this._verify2(t, e);
            var r = t.isub(e);
            return r.cmpn(0) < 0 && r.iadd(this.m), r;
          }),
          (C.prototype.shl = function (t, e) {
            return this._verify1(t), this.imod(t.ushln(e));
          }),
          (C.prototype.imul = function (t, e) {
            return this._verify2(t, e), this.imod(t.imul(e));
          }),
          (C.prototype.mul = function (t, e) {
            return this._verify2(t, e), this.imod(t.mul(e));
          }),
          (C.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (C.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (C.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var e = this.m.andln(3);
            if ((n(e % 2 === 1), 3 === e)) {
              var r = this.m.add(new o(1)).iushrn(2);
              return this.pow(t, r);
            }
            for (
              var i = this.m.subn(1), s = 0;
              !i.isZero() && 0 === i.andln(1);

            )
              s++, i.iushrn(1);
            n(!i.isZero());
            var a = new o(1).toRed(this),
              u = a.redNeg(),
              c = this.m.subn(1).iushrn(1),
              l = this.m.bitLength();
            for (
              l = new o(2 * l * l).toRed(this);
              0 !== this.pow(l, c).cmp(u);

            )
              l.redIAdd(u);
            for (
              var h = this.pow(l, i),
                f = this.pow(t, i.addn(1).iushrn(1)),
                d = this.pow(t, i),
                p = s;
              0 !== d.cmp(a);

            ) {
              for (var m = d, g = 0; 0 !== m.cmp(a); g++) m = m.redSqr();
              n(g < p);
              var v = this.pow(h, new o(1).iushln(p - g - 1));
              (f = f.redMul(v)), (h = v.redSqr()), (d = d.redMul(h)), (p = g);
            }
            return f;
          }),
          (C.prototype.invm = function (t) {
            var e = t._invmp(this.m);
            return 0 !== e.negative
              ? ((e.negative = 0), this.imod(e).redNeg())
              : this.imod(e);
          }),
          (C.prototype.pow = function (t, e) {
            if (e.isZero()) return new o(1).toRed(this);
            if (0 === e.cmpn(1)) return t.clone();
            var r = new Array(16);
            (r[0] = new o(1).toRed(this)), (r[1] = t);
            for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
            var i = r[0],
              s = 0,
              a = 0,
              u = e.bitLength() % 26;
            for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
              for (var c = e.words[n], l = u - 1; l >= 0; l--) {
                var h = (c >> l) & 1;
                i !== r[0] && (i = this.sqr(i)),
                  0 !== h || 0 !== s
                    ? ((s <<= 1),
                      (s |= h),
                      (4 === ++a || (0 === n && 0 === l)) &&
                        ((i = this.mul(i, r[s])), (a = 0), (s = 0)))
                    : (a = 0);
              }
              u = 26;
            }
            return i;
          }),
          (C.prototype.convertTo = function (t) {
            var e = t.umod(this.m);
            return e === t ? e.clone() : e;
          }),
          (C.prototype.convertFrom = function (t) {
            var e = t.clone();
            return (e.red = null), e;
          }),
          (o.mont = function (t) {
            return new N(t);
          }),
          i(N, C),
          (N.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (N.prototype.convertFrom = function (t) {
            var e = this.imod(t.mul(this.rinv));
            return (e.red = null), e;
          }),
          (N.prototype.imul = function (t, e) {
            if (t.isZero() || e.isZero())
              return (t.words[0] = 0), (t.length = 1), t;
            var r = t.imul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              o = i;
            return (
              i.cmp(this.m) >= 0
                ? (o = i.isub(this.m))
                : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (N.prototype.mul = function (t, e) {
            if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
            var r = t.mul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              s = i;
            return (
              i.cmp(this.m) >= 0
                ? (s = i.isub(this.m))
                : i.cmpn(0) < 0 && (s = i.iadd(this.m)),
              s._forceRed(this)
            );
          }),
          (N.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((t = r.nmd(t)), this);
    },
    10208: function (t, e, r) {
      "use strict";
      r.d(e, {
        Uj: function () {
          return o;
        },
        te: function () {
          return u;
        },
        Uw: function () {
          return s;
        },
        U$: function () {
          return f;
        },
        uu: function () {
          return d;
        },
        Y0: function () {
          return l;
        },
        XL: function () {
          return m;
        },
        ZN: function () {
          return p;
        },
      });
      var n = r(25689);
      const i = new (r(87898).Yd)("strings/5.7.0");
      var o, s;
      function a(t, e, r, n, i) {
        if (t === s.BAD_PREFIX || t === s.UNEXPECTED_CONTINUE) {
          let t = 0;
          for (let n = e + 1; n < r.length && r[n] >> 6 === 2; n++) t++;
          return t;
        }
        return t === s.OVERRUN ? r.length - e - 1 : 0;
      }
      !(function (t) {
        (t.current = ""),
          (t.NFC = "NFC"),
          (t.NFD = "NFD"),
          (t.NFKC = "NFKC"),
          (t.NFKD = "NFKD");
      })(o || (o = {})),
        (function (t) {
          (t.UNEXPECTED_CONTINUE = "unexpected continuation byte"),
            (t.BAD_PREFIX = "bad codepoint prefix"),
            (t.OVERRUN = "string overrun"),
            (t.MISSING_CONTINUE = "missing continuation byte"),
            (t.OUT_OF_RANGE = "out of UTF-8 range"),
            (t.UTF16_SURROGATE = "UTF-16 surrogate"),
            (t.OVERLONG = "overlong representation");
        })(s || (s = {}));
      const u = Object.freeze({
        error: function (t, e, r, n, o) {
          return i.throwArgumentError(
            `invalid codepoint at offset ${e}; ${t}`,
            "bytes",
            r
          );
        },
        ignore: a,
        replace: function (t, e, r, n, i) {
          return t === s.OVERLONG
            ? (n.push(i), 0)
            : (n.push(65533), a(t, e, r));
        },
      });
      function c(t, e) {
        null == e && (e = u.error), (t = (0, n.lE)(t));
        const r = [];
        let i = 0;
        for (; i < t.length; ) {
          const n = t[i++];
          if (n >> 7 === 0) {
            r.push(n);
            continue;
          }
          let o = null,
            a = null;
          if (192 === (224 & n)) (o = 1), (a = 127);
          else if (224 === (240 & n)) (o = 2), (a = 2047);
          else {
            if (240 !== (248 & n)) {
              i += e(
                128 === (192 & n) ? s.UNEXPECTED_CONTINUE : s.BAD_PREFIX,
                i - 1,
                t,
                r
              );
              continue;
            }
            (o = 3), (a = 65535);
          }
          if (i - 1 + o >= t.length) {
            i += e(s.OVERRUN, i - 1, t, r);
            continue;
          }
          let u = n & ((1 << (8 - o - 1)) - 1);
          for (let c = 0; c < o; c++) {
            let n = t[i];
            if (128 != (192 & n)) {
              (i += e(s.MISSING_CONTINUE, i, t, r)), (u = null);
              break;
            }
            (u = (u << 6) | (63 & n)), i++;
          }
          null !== u &&
            (u > 1114111
              ? (i += e(s.OUT_OF_RANGE, i - 1 - o, t, r, u))
              : u >= 55296 && u <= 57343
              ? (i += e(s.UTF16_SURROGATE, i - 1 - o, t, r, u))
              : u <= a
              ? (i += e(s.OVERLONG, i - 1 - o, t, r, u))
              : r.push(u));
        }
        return r;
      }
      function l(t, e = o.current) {
        e != o.current && (i.checkNormalize(), (t = t.normalize(e)));
        let r = [];
        for (let n = 0; n < t.length; n++) {
          const e = t.charCodeAt(n);
          if (e < 128) r.push(e);
          else if (e < 2048) r.push((e >> 6) | 192), r.push((63 & e) | 128);
          else if (55296 == (64512 & e)) {
            n++;
            const i = t.charCodeAt(n);
            if (n >= t.length || 56320 !== (64512 & i))
              throw new Error("invalid utf-8 string");
            const o = 65536 + ((1023 & e) << 10) + (1023 & i);
            r.push((o >> 18) | 240),
              r.push(((o >> 12) & 63) | 128),
              r.push(((o >> 6) & 63) | 128),
              r.push((63 & o) | 128);
          } else
            r.push((e >> 12) | 224),
              r.push(((e >> 6) & 63) | 128),
              r.push((63 & e) | 128);
        }
        return (0, n.lE)(r);
      }
      function h(t) {
        const e = "0000" + t.toString(16);
        return "\\u" + e.substring(e.length - 4);
      }
      function f(t, e) {
        return (
          '"' +
          c(t, e)
            .map((t) => {
              if (t < 256) {
                switch (t) {
                  case 8:
                    return "\\b";
                  case 9:
                    return "\\t";
                  case 10:
                    return "\\n";
                  case 13:
                    return "\\r";
                  case 34:
                    return '\\"';
                  case 92:
                    return "\\\\";
                }
                if (t >= 32 && t < 127) return String.fromCharCode(t);
              }
              return t <= 65535
                ? h(t)
                : h(55296 + (((t -= 65536) >> 10) & 1023)) +
                    h(56320 + (1023 & t));
            })
            .join("") +
          '"'
        );
      }
      function d(t) {
        return t
          .map((t) =>
            t <= 65535
              ? String.fromCharCode(t)
              : ((t -= 65536),
                String.fromCharCode(
                  55296 + ((t >> 10) & 1023),
                  56320 + (1023 & t)
                ))
          )
          .join("");
      }
      function p(t, e) {
        return d(c(t, e));
      }
      function m(t, e = o.current) {
        return c(l(t, e));
      }
    },
    25567: function (t, e, r) {
      "use strict";
      r.d(e, {
        em: function () {
          return d;
        },
        z7: function () {
          return E;
        },
        db: function () {
          return y;
        },
        Qc: function () {
          return I;
        },
        RJ: function () {
          return w;
        },
        qC: function () {
          return C;
        },
      });
      var n = r(91426),
        i = r(93442),
        o = r(25689),
        s = r(94069),
        a = r(82119),
        u = r(98690),
        c = r(83239),
        l = r(58979),
        h = r(87898);
      const f = new h.Yd("transactions/5.7.0");
      var d;
      function p(t) {
        return "0x" === t ? null : (0, n.Kn)(t);
      }
      function m(t) {
        return "0x" === t ? s._Y : i.O$.from(t);
      }
      !(function (t) {
        (t[(t.legacy = 0)] = "legacy"),
          (t[(t.eip2930 = 1)] = "eip2930"),
          (t[(t.eip1559 = 2)] = "eip1559");
      })(d || (d = {}));
      const g = [
          { name: "nonce", maxLength: 32, numeric: !0 },
          { name: "gasPrice", maxLength: 32, numeric: !0 },
          { name: "gasLimit", maxLength: 32, numeric: !0 },
          { name: "to", length: 20 },
          { name: "value", maxLength: 32, numeric: !0 },
          { name: "data" },
        ],
        v = {
          chainId: !0,
          data: !0,
          gasLimit: !0,
          gasPrice: !0,
          nonce: !0,
          to: !0,
          type: !0,
          value: !0,
        };
      function y(t) {
        const e = (0, l.VW)(t);
        return (0, n.Kn)((0, o.p3)((0, a.w)((0, o.p3)(e, 1)), 12));
      }
      function w(t, e) {
        return y((0, l.LO)((0, o.lE)(t), e));
      }
      function b(t, e) {
        const r = (0, o.G1)(i.O$.from(t).toHexString());
        return (
          r.length > 32 &&
            f.throwArgumentError(
              "invalid length for " + e,
              "transaction:" + e,
              t
            ),
          r
        );
      }
      function A(t, e) {
        return {
          address: (0, n.Kn)(t),
          storageKeys: (e || []).map(
            (e, r) => (
              32 !== (0, o.E1)(e) &&
                f.throwArgumentError(
                  "invalid access list storageKey",
                  `accessList[${t}:${r}]`,
                  e
                ),
              e.toLowerCase()
            )
          ),
        };
      }
      function E(t) {
        if (Array.isArray(t))
          return t.map((t, e) =>
            Array.isArray(t)
              ? (t.length > 2 &&
                  f.throwArgumentError(
                    "access list expected to be [ address, storageKeys[] ]",
                    `value[${e}]`,
                    t
                  ),
                A(t[0], t[1]))
              : A(t.address, t.storageKeys)
          );
        const e = Object.keys(t).map((e) => {
          const r = t[e].reduce((t, e) => ((t[e] = !0), t), {});
          return A(e, Object.keys(r).sort());
        });
        return e.sort((t, e) => t.address.localeCompare(e.address)), e;
      }
      function M(t) {
        return E(t).map((t) => [t.address, t.storageKeys]);
      }
      function k(t, e) {
        if (null != t.gasPrice) {
          const e = i.O$.from(t.gasPrice),
            r = i.O$.from(t.maxFeePerGas || 0);
          e.eq(r) ||
            f.throwArgumentError(
              "mismatch EIP-1559 gasPrice != maxFeePerGas",
              "tx",
              { gasPrice: e, maxFeePerGas: r }
            );
        }
        const r = [
          b(t.chainId || 0, "chainId"),
          b(t.nonce || 0, "nonce"),
          b(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
          b(t.maxFeePerGas || 0, "maxFeePerGas"),
          b(t.gasLimit || 0, "gasLimit"),
          null != t.to ? (0, n.Kn)(t.to) : "0x",
          b(t.value || 0, "value"),
          t.data || "0x",
          M(t.accessList || []),
        ];
        if (e) {
          const t = (0, o.N)(e);
          r.push(b(t.recoveryParam, "recoveryParam")),
            r.push((0, o.G1)(t.r)),
            r.push((0, o.G1)(t.s));
        }
        return (0, o.xs)(["0x02", c.encode(r)]);
      }
      function _(t, e) {
        const r = [
          b(t.chainId || 0, "chainId"),
          b(t.nonce || 0, "nonce"),
          b(t.gasPrice || 0, "gasPrice"),
          b(t.gasLimit || 0, "gasLimit"),
          null != t.to ? (0, n.Kn)(t.to) : "0x",
          b(t.value || 0, "value"),
          t.data || "0x",
          M(t.accessList || []),
        ];
        if (e) {
          const t = (0, o.N)(e);
          r.push(b(t.recoveryParam, "recoveryParam")),
            r.push((0, o.G1)(t.r)),
            r.push((0, o.G1)(t.s));
        }
        return (0, o.xs)(["0x01", c.encode(r)]);
      }
      function C(t, e) {
        if (null == t.type || 0 === t.type)
          return (
            null != t.accessList &&
              f.throwArgumentError(
                "untyped transactions do not support accessList; include type: 1",
                "transaction",
                t
              ),
            (function (t, e) {
              (0, u.uj)(t, v);
              const r = [];
              g.forEach(function (e) {
                let n = t[e.name] || [];
                const i = {};
                e.numeric && (i.hexPad = "left"),
                  (n = (0, o.lE)((0, o.Dv)(n, i))),
                  e.length &&
                    n.length !== e.length &&
                    n.length > 0 &&
                    f.throwArgumentError(
                      "invalid length for " + e.name,
                      "transaction:" + e.name,
                      n
                    ),
                  e.maxLength &&
                    ((n = (0, o.G1)(n)),
                    n.length > e.maxLength &&
                      f.throwArgumentError(
                        "invalid length for " + e.name,
                        "transaction:" + e.name,
                        n
                      )),
                  r.push((0, o.Dv)(n));
              });
              let n = 0;
              if (
                (null != t.chainId
                  ? ((n = t.chainId),
                    "number" !== typeof n &&
                      f.throwArgumentError(
                        "invalid transaction.chainId",
                        "transaction",
                        t
                      ))
                  : e &&
                    !(0, o.Zq)(e) &&
                    e.v > 28 &&
                    (n = Math.floor((e.v - 35) / 2)),
                0 !== n && (r.push((0, o.Dv)(n)), r.push("0x"), r.push("0x")),
                !e)
              )
                return c.encode(r);
              const i = (0, o.N)(e);
              let s = 27 + i.recoveryParam;
              return (
                0 !== n
                  ? (r.pop(),
                    r.pop(),
                    r.pop(),
                    (s += 2 * n + 8),
                    i.v > 28 &&
                      i.v !== s &&
                      f.throwArgumentError(
                        "transaction.chainId/signature.v mismatch",
                        "signature",
                        e
                      ))
                  : i.v !== s &&
                    f.throwArgumentError(
                      "transaction.chainId/signature.v mismatch",
                      "signature",
                      e
                    ),
                r.push((0, o.Dv)(s)),
                r.push((0, o.G1)((0, o.lE)(i.r))),
                r.push((0, o.G1)((0, o.lE)(i.s))),
                c.encode(r)
              );
            })(t, e)
          );
        switch (t.type) {
          case 1:
            return _(t, e);
          case 2:
            return k(t, e);
        }
        return f.throwError(
          `unsupported transaction type: ${t.type}`,
          h.Yd.errors.UNSUPPORTED_OPERATION,
          { operation: "serializeTransaction", transactionType: t.type }
        );
      }
      function N(t, e, r) {
        try {
          const r = m(e[0]).toNumber();
          if (0 !== r && 1 !== r) throw new Error("bad recid");
          t.v = r;
        } catch (n) {
          f.throwArgumentError("invalid v for transaction type: 1", "v", e[0]);
        }
        (t.r = (0, o.$m)(e[1], 32)), (t.s = (0, o.$m)(e[2], 32));
        try {
          const e = (0, a.w)(r(t));
          t.from = w(e, { r: t.r, s: t.s, recoveryParam: t.v });
        } catch (n) {}
      }
      function I(t) {
        const e = (0, o.lE)(t);
        if (e[0] > 127)
          return (function (t) {
            const e = c.decode(t);
            9 !== e.length &&
              6 !== e.length &&
              f.throwArgumentError(
                "invalid raw transaction",
                "rawTransaction",
                t
              );
            const r = {
              nonce: m(e[0]).toNumber(),
              gasPrice: m(e[1]),
              gasLimit: m(e[2]),
              to: p(e[3]),
              value: m(e[4]),
              data: e[5],
              chainId: 0,
            };
            if (6 === e.length) return r;
            try {
              r.v = i.O$.from(e[6]).toNumber();
            } catch (n) {
              return r;
            }
            if (
              ((r.r = (0, o.$m)(e[7], 32)),
              (r.s = (0, o.$m)(e[8], 32)),
              i.O$.from(r.r).isZero() && i.O$.from(r.s).isZero())
            )
              (r.chainId = r.v), (r.v = 0);
            else {
              (r.chainId = Math.floor((r.v - 35) / 2)),
                r.chainId < 0 && (r.chainId = 0);
              let i = r.v - 27;
              const s = e.slice(0, 6);
              0 !== r.chainId &&
                (s.push((0, o.Dv)(r.chainId)),
                s.push("0x"),
                s.push("0x"),
                (i -= 2 * r.chainId + 8));
              const u = (0, a.w)(c.encode(s));
              try {
                r.from = w(u, {
                  r: (0, o.Dv)(r.r),
                  s: (0, o.Dv)(r.s),
                  recoveryParam: i,
                });
              } catch (n) {}
              r.hash = (0, a.w)(t);
            }
            return (r.type = null), r;
          })(e);
        switch (e[0]) {
          case 1:
            return (function (t) {
              const e = c.decode(t.slice(1));
              8 !== e.length &&
                11 !== e.length &&
                f.throwArgumentError(
                  "invalid component count for transaction type: 1",
                  "payload",
                  (0, o.Dv)(t)
                );
              const r = {
                type: 1,
                chainId: m(e[0]).toNumber(),
                nonce: m(e[1]).toNumber(),
                gasPrice: m(e[2]),
                gasLimit: m(e[3]),
                to: p(e[4]),
                value: m(e[5]),
                data: e[6],
                accessList: E(e[7]),
              };
              return (
                8 === e.length || ((r.hash = (0, a.w)(t)), N(r, e.slice(8), _)),
                r
              );
            })(e);
          case 2:
            return (function (t) {
              const e = c.decode(t.slice(1));
              9 !== e.length &&
                12 !== e.length &&
                f.throwArgumentError(
                  "invalid component count for transaction type: 2",
                  "payload",
                  (0, o.Dv)(t)
                );
              const r = m(e[2]),
                n = m(e[3]),
                i = {
                  type: 2,
                  chainId: m(e[0]).toNumber(),
                  nonce: m(e[1]).toNumber(),
                  maxPriorityFeePerGas: r,
                  maxFeePerGas: n,
                  gasPrice: null,
                  gasLimit: m(e[4]),
                  to: p(e[5]),
                  value: m(e[6]),
                  data: e[7],
                  accessList: E(e[8]),
                };
              return (
                9 === e.length || ((i.hash = (0, a.w)(t)), N(i, e.slice(9), k)),
                i
              );
            })(e);
        }
        return f.throwError(
          `unsupported transaction type: ${e[0]}`,
          h.Yd.errors.UNSUPPORTED_OPERATION,
          { operation: "parseTransaction", transactionType: e[0] }
        );
      }
    },
    28676: function (t, e, r) {
      "use strict";
      r.d(e, {
        MY: function () {
          return p;
        },
        rd: function () {
          return m;
        },
        $l: function () {
          return g;
        },
      });
      var n = r(91156),
        i = r(25689),
        o = r(98690),
        s = r(10208),
        a = r(87898);
      var u = function (t, e, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(t) {
            try {
              u(n.next(t));
            } catch (e) {
              o(e);
            }
          }
          function a(t) {
            try {
              u(n.throw(t));
            } catch (e) {
              o(e);
            }
          }
          function u(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })).then(s, a);
          }
          u((n = n.apply(t, e || [])).next());
        });
      };
      function c(t, e) {
        return u(this, void 0, void 0, function* () {
          null == e && (e = {});
          const r = {
            method: e.method || "GET",
            headers: e.headers || {},
            body: e.body || void 0,
          };
          if (
            (!0 !== e.skipFetchSetup &&
              ((r.mode = "cors"),
              (r.cache = "no-cache"),
              (r.credentials = "same-origin"),
              (r.redirect = "follow"),
              (r.referrer = "client")),
            null != e.fetchOptions)
          ) {
            const t = e.fetchOptions;
            t.mode && (r.mode = t.mode),
              t.cache && (r.cache = t.cache),
              t.credentials && (r.credentials = t.credentials),
              t.redirect && (r.redirect = t.redirect),
              t.referrer && (r.referrer = t.referrer);
          }
          const n = yield fetch(t, r),
            o = yield n.arrayBuffer(),
            s = {};
          return (
            n.headers.forEach
              ? n.headers.forEach((t, e) => {
                  s[e.toLowerCase()] = t;
                })
              : n.headers.keys().forEach((t) => {
                  s[t.toLowerCase()] = n.headers.get(t);
                }),
            {
              headers: s,
              statusCode: n.status,
              statusMessage: n.statusText,
              body: (0, i.lE)(new Uint8Array(o)),
            }
          );
        });
      }
      var l = function (t, e, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(t) {
            try {
              u(n.next(t));
            } catch (e) {
              o(e);
            }
          }
          function a(t) {
            try {
              u(n.throw(t));
            } catch (e) {
              o(e);
            }
          }
          function u(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })).then(s, a);
          }
          u((n = n.apply(t, e || [])).next());
        });
      };
      const h = new a.Yd("web/5.7.0");
      function f(t) {
        return new Promise((e) => {
          setTimeout(e, t);
        });
      }
      function d(t, e) {
        if (null == t) return null;
        if ("string" === typeof t) return t;
        if ((0, i.Zq)(t)) {
          if (
            e &&
            ("text" === e.split("/")[0] ||
              "application/json" === e.split(";")[0].trim())
          )
            try {
              return (0, s.ZN)(t);
            } catch (r) {}
          return (0, i.Dv)(t);
        }
        return t;
      }
      function p(t, e, r) {
        const i =
          "object" === typeof t && null != t.throttleLimit
            ? t.throttleLimit
            : 12;
        h.assertArgument(
          i > 0 && i % 1 === 0,
          "invalid connection throttle limit",
          "connection.throttleLimit",
          i
        );
        const u = "object" === typeof t ? t.throttleCallback : null,
          p =
            "object" === typeof t && "number" === typeof t.throttleSlotInterval
              ? t.throttleSlotInterval
              : 100;
        h.assertArgument(
          p > 0 && p % 1 === 0,
          "invalid connection throttle slot interval",
          "connection.throttleSlotInterval",
          p
        );
        const m = "object" === typeof t && !!t.errorPassThrough,
          g = {};
        let v = null;
        const y = { method: "GET" };
        let w = !1,
          b = 12e4;
        if ("string" === typeof t) v = t;
        else if ("object" === typeof t) {
          if (
            ((null != t && null != t.url) ||
              h.throwArgumentError("missing URL", "connection.url", t),
            (v = t.url),
            "number" === typeof t.timeout && t.timeout > 0 && (b = t.timeout),
            t.headers)
          )
            for (const e in t.headers)
              (g[e.toLowerCase()] = { key: e, value: String(t.headers[e]) }),
                ["if-none-match", "if-modified-since"].indexOf(
                  e.toLowerCase()
                ) >= 0 && (w = !0);
          if (
            ((y.allowGzip = !!t.allowGzip),
            null != t.user && null != t.password)
          ) {
            "https:" !== v.substring(0, 6) &&
              !0 !== t.allowInsecureAuthentication &&
              h.throwError(
                "basic authentication requires a secure https url",
                a.Yd.errors.INVALID_ARGUMENT,
                {
                  argument: "url",
                  url: v,
                  user: t.user,
                  password: "[REDACTED]",
                }
              );
            const e = t.user + ":" + t.password;
            g.authorization = {
              key: "Authorization",
              value: "Basic " + (0, n.c)((0, s.Y0)(e)),
            };
          }
          null != t.skipFetchSetup && (y.skipFetchSetup = !!t.skipFetchSetup),
            null != t.fetchOptions &&
              (y.fetchOptions = (0, o.DC)(t.fetchOptions));
        }
        const A = new RegExp("^data:([a-z0-9-]+/[a-z0-9-]+);base64,(.*)$", "i"),
          E = v ? v.match(A) : null;
        if (E)
          try {
            const t = {
              statusCode: 200,
              statusMessage: "OK",
              headers: { "content-type": E[1] },
              body: (0, n.J)(E[2]),
            };
            let e = t.body;
            return r && (e = r(t.body, t)), Promise.resolve(e);
          } catch (C) {
            h.throwError(
              "processing response error",
              a.Yd.errors.SERVER_ERROR,
              {
                body: d(E[1], E[2]),
                error: C,
                requestBody: null,
                requestMethod: "GET",
                url: v,
              }
            );
          }
        e &&
          ((y.method = "POST"),
          (y.body = e),
          null == g["content-type"] &&
            (g["content-type"] = {
              key: "Content-Type",
              value: "application/octet-stream",
            }),
          null == g["content-length"] &&
            (g["content-length"] = {
              key: "Content-Length",
              value: String(e.length),
            }));
        const M = {};
        Object.keys(g).forEach((t) => {
          const e = g[t];
          M[e.key] = e.value;
        }),
          (y.headers = M);
        const k = (function () {
            let t = null;
            return {
              promise: new Promise(function (e, r) {
                b &&
                  (t = setTimeout(() => {
                    null != t &&
                      ((t = null),
                      r(
                        h.makeError("timeout", a.Yd.errors.TIMEOUT, {
                          requestBody: d(y.body, M["content-type"]),
                          requestMethod: y.method,
                          timeout: b,
                          url: v,
                        })
                      ));
                  }, b));
              }),
              cancel: function () {
                null != t && (clearTimeout(t), (t = null));
              },
            };
          })(),
          _ = (function () {
            return l(this, void 0, void 0, function* () {
              for (let t = 0; t < i; t++) {
                let e = null;
                try {
                  if (((e = yield c(v, y)), t < i))
                    if (301 === e.statusCode || 302 === e.statusCode) {
                      const t = e.headers.location || "";
                      if ("GET" === y.method && t.match(/^https:/)) {
                        v = e.headers.location;
                        continue;
                      }
                    } else if (429 === e.statusCode) {
                      let r = !0;
                      if ((u && (r = yield u(t, v)), r)) {
                        let r = 0;
                        const n = e.headers["retry-after"];
                        (r =
                          "string" === typeof n && n.match(/^[1-9][0-9]*$/)
                            ? 1e3 * parseInt(n)
                            : p *
                              parseInt(String(Math.random() * Math.pow(2, t)))),
                          yield f(r);
                        continue;
                      }
                    }
                } catch (C) {
                  (e = C.response),
                    null == e &&
                      (k.cancel(),
                      h.throwError(
                        "missing response",
                        a.Yd.errors.SERVER_ERROR,
                        {
                          requestBody: d(y.body, M["content-type"]),
                          requestMethod: y.method,
                          serverError: C,
                          url: v,
                        }
                      ));
                }
                let n = e.body;
                if (
                  (w && 304 === e.statusCode
                    ? (n = null)
                    : !m &&
                      (e.statusCode < 200 || e.statusCode >= 300) &&
                      (k.cancel(),
                      h.throwError("bad response", a.Yd.errors.SERVER_ERROR, {
                        status: e.statusCode,
                        headers: e.headers,
                        body: d(
                          n,
                          e.headers ? e.headers["content-type"] : null
                        ),
                        requestBody: d(y.body, M["content-type"]),
                        requestMethod: y.method,
                        url: v,
                      })),
                  r)
                )
                  try {
                    const t = yield r(n, e);
                    return k.cancel(), t;
                  } catch (C) {
                    if (C.throttleRetry && t < i) {
                      let e = !0;
                      if ((u && (e = yield u(t, v)), e)) {
                        const e =
                          p * parseInt(String(Math.random() * Math.pow(2, t)));
                        yield f(e);
                        continue;
                      }
                    }
                    k.cancel(),
                      h.throwError(
                        "processing response error",
                        a.Yd.errors.SERVER_ERROR,
                        {
                          body: d(
                            n,
                            e.headers ? e.headers["content-type"] : null
                          ),
                          error: C,
                          requestBody: d(y.body, M["content-type"]),
                          requestMethod: y.method,
                          url: v,
                        }
                      );
                  }
                return k.cancel(), n;
              }
              return h.throwError("failed response", a.Yd.errors.SERVER_ERROR, {
                requestBody: d(y.body, M["content-type"]),
                requestMethod: y.method,
                url: v,
              });
            });
          })();
        return Promise.race([k.promise, _]);
      }
      function m(t, e, r) {
        let n = null;
        if (null != e) {
          n = (0, s.Y0)(e);
          const r = "string" === typeof t ? { url: t } : (0, o.DC)(t);
          if (r.headers) {
            0 !==
              Object.keys(r.headers).filter(
                (t) => "content-type" === t.toLowerCase()
              ).length ||
              ((r.headers = (0, o.DC)(r.headers)),
              (r.headers["content-type"] = "application/json"));
          } else r.headers = { "content-type": "application/json" };
          t = r;
        }
        return p(t, n, (t, e) => {
          let n = null;
          if (null != t)
            try {
              n = JSON.parse((0, s.ZN)(t));
            } catch (i) {
              h.throwError("invalid JSON", a.Yd.errors.SERVER_ERROR, {
                body: t,
                error: i,
              });
            }
          return r && (n = r(n, e)), n;
        });
      }
      function g(t, e) {
        return (
          e || (e = {}),
          null == (e = (0, o.DC)(e)).floor && (e.floor = 0),
          null == e.ceiling && (e.ceiling = 1e4),
          null == e.interval && (e.interval = 250),
          new Promise(function (r, n) {
            let i = null,
              o = !1;
            const s = () => !o && ((o = !0), i && clearTimeout(i), !0);
            e.timeout &&
              (i = setTimeout(() => {
                s() && n(new Error("timeout"));
              }, e.timeout));
            const a = e.retryLimit;
            let u = 0;
            !(function i() {
              return t().then(
                function (t) {
                  if (void 0 !== t) s() && r(t);
                  else if (e.oncePoll) e.oncePoll.once("poll", i);
                  else if (e.onceBlock) e.onceBlock.once("block", i);
                  else if (!o) {
                    if ((u++, u > a))
                      return void (s() && n(new Error("retry limit reached")));
                    let t =
                      e.interval *
                      parseInt(String(Math.random() * Math.pow(2, u)));
                    t < e.floor && (t = e.floor),
                      t > e.ceiling && (t = e.ceiling),
                      setTimeout(i, t);
                  }
                  return null;
                },
                function (t) {
                  s() && n(t);
                }
              );
            })();
          })
        );
      }
    },
    66072: function (t, e, r) {
      "use strict";
      function n(t) {
        for (
          var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1;
          n < e;
          n++
        )
          r[n - 1] = arguments[n];
        throw Error(
          "[Immer] minified error nr: " +
            t +
            (r.length
              ? " " +
                r
                  .map(function (t) {
                    return "'" + t + "'";
                  })
                  .join(",")
              : "") +
            ". Find the full error at: https://bit.ly/3cXEKWf"
        );
      }
      function i(t) {
        return !!t && !!t[K];
      }
      function o(t) {
        return (
          !!t &&
          ((function (t) {
            if (!t || "object" != typeof t) return !1;
            var e = Object.getPrototypeOf(t);
            if (null === e) return !0;
            var r =
              Object.hasOwnProperty.call(e, "constructor") && e.constructor;
            return (
              r === Object ||
              ("function" == typeof r && Function.toString.call(r) === Q)
            );
          })(t) ||
            Array.isArray(t) ||
            !!t[H] ||
            !!t.constructor[H] ||
            f(t) ||
            d(t))
        );
      }
      function s(t, e, r) {
        void 0 === r && (r = !1),
          0 === a(t)
            ? (r ? Object.keys : W)(t).forEach(function (n) {
                (r && "symbol" == typeof n) || e(n, t[n], t);
              })
            : t.forEach(function (r, n) {
                return e(n, r, t);
              });
      }
      function a(t) {
        var e = t[K];
        return e
          ? e.i > 3
            ? e.i - 4
            : e.i
          : Array.isArray(t)
          ? 1
          : f(t)
          ? 2
          : d(t)
          ? 3
          : 0;
      }
      function u(t, e) {
        return 2 === a(t)
          ? t.has(e)
          : Object.prototype.hasOwnProperty.call(t, e);
      }
      function c(t, e) {
        return 2 === a(t) ? t.get(e) : t[e];
      }
      function l(t, e, r) {
        var n = a(t);
        2 === n ? t.set(e, r) : 3 === n ? (t.delete(e), t.add(r)) : (t[e] = r);
      }
      function h(t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
      }
      function f(t) {
        return q && t instanceof Map;
      }
      function d(t) {
        return G && t instanceof Set;
      }
      function p(t) {
        return t.o || t.t;
      }
      function m(t) {
        if (Array.isArray(t)) return Array.prototype.slice.call(t);
        var e = V(t);
        delete e[K];
        for (var r = W(e), n = 0; n < r.length; n++) {
          var i = r[n],
            o = e[i];
          !1 === o.writable && ((o.writable = !0), (o.configurable = !0)),
            (o.get || o.set) &&
              (e[i] = {
                configurable: !0,
                writable: !0,
                enumerable: o.enumerable,
                value: t[i],
              });
        }
        return Object.create(Object.getPrototypeOf(t), e);
      }
      function g(t, e) {
        return (
          void 0 === e && (e = !1),
          y(t) ||
            i(t) ||
            !o(t) ||
            (a(t) > 1 && (t.set = t.add = t.clear = t.delete = v),
            Object.freeze(t),
            e &&
              s(
                t,
                function (t, e) {
                  return g(e, !0);
                },
                !0
              )),
          t
        );
      }
      function v() {
        n(2);
      }
      function y(t) {
        return null == t || "object" != typeof t || Object.isFrozen(t);
      }
      function w(t) {
        var e = Z[t];
        return e || n(18, t), e;
      }
      function b(t, e) {
        Z[t] || (Z[t] = e);
      }
      function A() {
        return F;
      }
      function E(t, e) {
        e && (w("Patches"), (t.u = []), (t.s = []), (t.v = e));
      }
      function M(t) {
        k(t), t.p.forEach(C), (t.p = null);
      }
      function k(t) {
        t === F && (F = t.l);
      }
      function _(t) {
        return (F = { p: [], l: F, h: t, m: !0, _: 0 });
      }
      function C(t) {
        var e = t[K];
        0 === e.i || 1 === e.i ? e.j() : (e.O = !0);
      }
      function N(t, e) {
        e._ = e.p.length;
        var r = e.p[0],
          i = void 0 !== t && t !== r;
        return (
          e.h.g || w("ES5").S(e, t, i),
          i
            ? (r[K].P && (M(e), n(4)),
              o(t) && ((t = I(e, t)), e.l || P(e, t)),
              e.u && w("Patches").M(r[K].t, t, e.u, e.s))
            : (t = I(e, r, [])),
          M(e),
          e.u && e.v(e.u, e.s),
          t !== J ? t : void 0
        );
      }
      function I(t, e, r) {
        if (y(e)) return e;
        var n = e[K];
        if (!n)
          return (
            s(
              e,
              function (i, o) {
                return O(t, n, e, i, o, r);
              },
              !0
            ),
            e
          );
        if (n.A !== t) return e;
        if (!n.P) return P(t, n.t, !0), n.t;
        if (!n.I) {
          (n.I = !0), n.A._--;
          var i = 4 === n.i || 5 === n.i ? (n.o = m(n.k)) : n.o;
          s(3 === n.i ? new Set(i) : i, function (e, o) {
            return O(t, n, i, e, o, r);
          }),
            P(t, i, !1),
            r && t.u && w("Patches").R(n, r, t.u, t.s);
        }
        return n.o;
      }
      function O(t, e, r, n, s, a) {
        if (i(s)) {
          var c = I(
            t,
            s,
            a && e && 3 !== e.i && !u(e.D, n) ? a.concat(n) : void 0
          );
          if ((l(r, n, c), !i(c))) return;
          t.m = !1;
        }
        if (o(s) && !y(s)) {
          if (!t.h.F && t._ < 1) return;
          I(t, s), (e && e.A.l) || P(t, s);
        }
      }
      function P(t, e, r) {
        void 0 === r && (r = !1), t.h.F && t.m && g(e, r);
      }
      function S(t, e) {
        var r = t[K];
        return (r ? p(r) : t)[e];
      }
      function x(t, e) {
        if (e in t)
          for (var r = Object.getPrototypeOf(t); r; ) {
            var n = Object.getOwnPropertyDescriptor(r, e);
            if (n) return n;
            r = Object.getPrototypeOf(r);
          }
      }
      function R(t) {
        t.P || ((t.P = !0), t.l && R(t.l));
      }
      function T(t) {
        t.o || (t.o = m(t.t));
      }
      function B(t, e, r) {
        var n = f(e)
          ? w("MapSet").N(e, r)
          : d(e)
          ? w("MapSet").T(e, r)
          : t.g
          ? (function (t, e) {
              var r = Array.isArray(t),
                n = {
                  i: r ? 1 : 0,
                  A: e ? e.A : A(),
                  P: !1,
                  I: !1,
                  D: {},
                  l: e,
                  t: t,
                  k: null,
                  o: null,
                  j: null,
                  C: !1,
                },
                i = n,
                o = X;
              r && ((i = [n]), (o = $));
              var s = Proxy.revocable(i, o),
                a = s.revoke,
                u = s.proxy;
              return (n.k = u), (n.j = a), u;
            })(e, r)
          : w("ES5").J(e, r);
        return (r ? r.A : A()).p.push(n), n;
      }
      function L(t) {
        return (
          i(t) || n(22, t),
          (function t(e) {
            if (!o(e)) return e;
            var r,
              n = e[K],
              i = a(e);
            if (n) {
              if (!n.P && (n.i < 4 || !w("ES5").K(n))) return n.t;
              (n.I = !0), (r = U(e, i)), (n.I = !1);
            } else r = U(e, i);
            return (
              s(r, function (e, i) {
                (n && c(n.t, e) === i) || l(r, e, t(i));
              }),
              3 === i ? new Set(r) : r
            );
          })(t)
        );
      }
      function U(t, e) {
        switch (e) {
          case 2:
            return new Map(t);
          case 3:
            return Array.from(t);
        }
        return m(t);
      }
      function D() {
        function t(t, e) {
          var r = o[t];
          return (
            r
              ? (r.enumerable = e)
              : (o[t] = r =
                  {
                    configurable: !0,
                    enumerable: e,
                    get: function () {
                      var e = this[K];
                      return X.get(e, t);
                    },
                    set: function (e) {
                      var r = this[K];
                      X.set(r, t, e);
                    },
                  }),
            r
          );
        }
        function e(t) {
          for (var e = t.length - 1; e >= 0; e--) {
            var i = t[e][K];
            if (!i.P)
              switch (i.i) {
                case 5:
                  n(i) && R(i);
                  break;
                case 4:
                  r(i) && R(i);
              }
          }
        }
        function r(t) {
          for (var e = t.t, r = t.k, n = W(r), i = n.length - 1; i >= 0; i--) {
            var o = n[i];
            if (o !== K) {
              var s = e[o];
              if (void 0 === s && !u(e, o)) return !0;
              var a = r[o],
                c = a && a[K];
              if (c ? c.t !== s : !h(a, s)) return !0;
            }
          }
          var l = !!e[K];
          return n.length !== W(e).length + (l ? 0 : 1);
        }
        function n(t) {
          var e = t.k;
          if (e.length !== t.t.length) return !0;
          var r = Object.getOwnPropertyDescriptor(e, e.length - 1);
          if (r && !r.get) return !0;
          for (var n = 0; n < e.length; n++)
            if (!e.hasOwnProperty(n)) return !0;
          return !1;
        }
        var o = {};
        b("ES5", {
          J: function (e, r) {
            var n = Array.isArray(e),
              i = (function (e, r) {
                if (e) {
                  for (var n = Array(r.length), i = 0; i < r.length; i++)
                    Object.defineProperty(n, "" + i, t(i, !0));
                  return n;
                }
                var o = V(r);
                delete o[K];
                for (var s = W(o), a = 0; a < s.length; a++) {
                  var u = s[a];
                  o[u] = t(u, e || !!o[u].enumerable);
                }
                return Object.create(Object.getPrototypeOf(r), o);
              })(n, e),
              o = {
                i: n ? 5 : 4,
                A: r ? r.A : A(),
                P: !1,
                I: !1,
                D: {},
                l: r,
                t: e,
                k: i,
                o: null,
                O: !1,
                C: !1,
              };
            return Object.defineProperty(i, K, { value: o, writable: !0 }), i;
          },
          S: function (t, r, o) {
            o
              ? i(r) && r[K].A === t && e(t.p)
              : (t.u &&
                  (function t(e) {
                    if (e && "object" == typeof e) {
                      var r = e[K];
                      if (r) {
                        var i = r.t,
                          o = r.k,
                          a = r.D,
                          c = r.i;
                        if (4 === c)
                          s(o, function (e) {
                            e !== K &&
                              (void 0 !== i[e] || u(i, e)
                                ? a[e] || t(o[e])
                                : ((a[e] = !0), R(r)));
                          }),
                            s(i, function (t) {
                              void 0 !== o[t] || u(o, t) || ((a[t] = !1), R(r));
                            });
                        else if (5 === c) {
                          if (
                            (n(r) && (R(r), (a.length = !0)),
                            o.length < i.length)
                          )
                            for (var l = o.length; l < i.length; l++) a[l] = !1;
                          else
                            for (var h = i.length; h < o.length; h++) a[h] = !0;
                          for (
                            var f = Math.min(o.length, i.length), d = 0;
                            d < f;
                            d++
                          )
                            o.hasOwnProperty(d) || (a[d] = !0),
                              void 0 === a[d] && t(o[d]);
                        }
                      }
                    }
                  })(t.p[0]),
                e(t.p));
          },
          K: function (t) {
            return 4 === t.i ? r(t) : n(t);
          },
        });
      }
      r.d(e, {
        xC: function () {
          return St;
        },
        oM: function () {
          return Tt;
        },
      });
      var j,
        F,
        z = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
        q = "undefined" != typeof Map,
        G = "undefined" != typeof Set,
        Y =
          "undefined" != typeof Proxy &&
          void 0 !== Proxy.revocable &&
          "undefined" != typeof Reflect,
        J = z
          ? Symbol.for("immer-nothing")
          : (((j = {})["immer-nothing"] = !0), j),
        H = z ? Symbol.for("immer-draftable") : "__$immer_draftable",
        K = z ? Symbol.for("immer-state") : "__$immer_state",
        Q =
          ("undefined" != typeof Symbol && Symbol.iterator,
          "" + Object.prototype.constructor),
        W =
          "undefined" != typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
            ? function (t) {
                return Object.getOwnPropertyNames(t).concat(
                  Object.getOwnPropertySymbols(t)
                );
              }
            : Object.getOwnPropertyNames,
        V =
          Object.getOwnPropertyDescriptors ||
          function (t) {
            var e = {};
            return (
              W(t).forEach(function (r) {
                e[r] = Object.getOwnPropertyDescriptor(t, r);
              }),
              e
            );
          },
        Z = {},
        X = {
          get: function (t, e) {
            if (e === K) return t;
            var r = p(t);
            if (!u(r, e))
              return (function (t, e, r) {
                var n,
                  i = x(e, r);
                return i
                  ? "value" in i
                    ? i.value
                    : null === (n = i.get) || void 0 === n
                    ? void 0
                    : n.call(t.k)
                  : void 0;
              })(t, r, e);
            var n = r[e];
            return t.I || !o(n)
              ? n
              : n === S(t.t, e)
              ? (T(t), (t.o[e] = B(t.A.h, n, t)))
              : n;
          },
          has: function (t, e) {
            return e in p(t);
          },
          ownKeys: function (t) {
            return Reflect.ownKeys(p(t));
          },
          set: function (t, e, r) {
            var n = x(p(t), e);
            if (null == n ? void 0 : n.set) return n.set.call(t.k, r), !0;
            if (!t.P) {
              var i = S(p(t), e),
                o = null == i ? void 0 : i[K];
              if (o && o.t === r) return (t.o[e] = r), (t.D[e] = !1), !0;
              if (h(r, i) && (void 0 !== r || u(t.t, e))) return !0;
              T(t), R(t);
            }
            return (
              (t.o[e] === r &&
                "number" != typeof r &&
                (void 0 !== r || e in t.o)) ||
              ((t.o[e] = r), (t.D[e] = !0), !0)
            );
          },
          deleteProperty: function (t, e) {
            return (
              void 0 !== S(t.t, e) || e in t.t
                ? ((t.D[e] = !1), T(t), R(t))
                : delete t.D[e],
              t.o && delete t.o[e],
              !0
            );
          },
          getOwnPropertyDescriptor: function (t, e) {
            var r = p(t),
              n = Reflect.getOwnPropertyDescriptor(r, e);
            return n
              ? {
                  writable: !0,
                  configurable: 1 !== t.i || "length" !== e,
                  enumerable: n.enumerable,
                  value: r[e],
                }
              : n;
          },
          defineProperty: function () {
            n(11);
          },
          getPrototypeOf: function (t) {
            return Object.getPrototypeOf(t.t);
          },
          setPrototypeOf: function () {
            n(12);
          },
        },
        $ = {};
      s(X, function (t, e) {
        $[t] = function () {
          return (arguments[0] = arguments[0][0]), e.apply(this, arguments);
        };
      }),
        ($.deleteProperty = function (t, e) {
          return $.set.call(this, t, e, void 0);
        }),
        ($.set = function (t, e, r) {
          return X.set.call(this, t[0], e, r, t[0]);
        });
      var tt = new ((function () {
          function t(t) {
            var e = this;
            (this.g = Y),
              (this.F = !0),
              (this.produce = function (t, r, i) {
                if ("function" == typeof t && "function" != typeof r) {
                  var s = r;
                  r = t;
                  var a = e;
                  return function (t) {
                    var e = this;
                    void 0 === t && (t = s);
                    for (
                      var n = arguments.length,
                        i = Array(n > 1 ? n - 1 : 0),
                        o = 1;
                      o < n;
                      o++
                    )
                      i[o - 1] = arguments[o];
                    return a.produce(t, function (t) {
                      var n;
                      return (n = r).call.apply(n, [e, t].concat(i));
                    });
                  };
                }
                var u;
                if (
                  ("function" != typeof r && n(6),
                  void 0 !== i && "function" != typeof i && n(7),
                  o(t))
                ) {
                  var c = _(e),
                    l = B(e, t, void 0),
                    h = !0;
                  try {
                    (u = r(l)), (h = !1);
                  } finally {
                    h ? M(c) : k(c);
                  }
                  return "undefined" != typeof Promise && u instanceof Promise
                    ? u.then(
                        function (t) {
                          return E(c, i), N(t, c);
                        },
                        function (t) {
                          throw (M(c), t);
                        }
                      )
                    : (E(c, i), N(u, c));
                }
                if (!t || "object" != typeof t) {
                  if (
                    (void 0 === (u = r(t)) && (u = t),
                    u === J && (u = void 0),
                    e.F && g(u, !0),
                    i)
                  ) {
                    var f = [],
                      d = [];
                    w("Patches").M(t, u, f, d), i(f, d);
                  }
                  return u;
                }
                n(21, t);
              }),
              (this.produceWithPatches = function (t, r) {
                if ("function" == typeof t)
                  return function (r) {
                    for (
                      var n = arguments.length,
                        i = Array(n > 1 ? n - 1 : 0),
                        o = 1;
                      o < n;
                      o++
                    )
                      i[o - 1] = arguments[o];
                    return e.produceWithPatches(r, function (e) {
                      return t.apply(void 0, [e].concat(i));
                    });
                  };
                var n,
                  i,
                  o = e.produce(t, r, function (t, e) {
                    (n = t), (i = e);
                  });
                return "undefined" != typeof Promise && o instanceof Promise
                  ? o.then(function (t) {
                      return [t, n, i];
                    })
                  : [o, n, i];
              }),
              "boolean" == typeof (null == t ? void 0 : t.useProxies) &&
                this.setUseProxies(t.useProxies),
              "boolean" == typeof (null == t ? void 0 : t.autoFreeze) &&
                this.setAutoFreeze(t.autoFreeze);
          }
          var e = t.prototype;
          return (
            (e.createDraft = function (t) {
              o(t) || n(8), i(t) && (t = L(t));
              var e = _(this),
                r = B(this, t, void 0);
              return (r[K].C = !0), k(e), r;
            }),
            (e.finishDraft = function (t, e) {
              var r = (t && t[K]).A;
              return E(r, e), N(void 0, r);
            }),
            (e.setAutoFreeze = function (t) {
              this.F = t;
            }),
            (e.setUseProxies = function (t) {
              t && !Y && n(20), (this.g = t);
            }),
            (e.applyPatches = function (t, e) {
              var r;
              for (r = e.length - 1; r >= 0; r--) {
                var n = e[r];
                if (0 === n.path.length && "replace" === n.op) {
                  t = n.value;
                  break;
                }
              }
              r > -1 && (e = e.slice(r + 1));
              var o = w("Patches").$;
              return i(t)
                ? o(t, e)
                : this.produce(t, function (t) {
                    return o(t, e);
                  });
            }),
            t
          );
        })())(),
        et = tt.produce,
        rt =
          (tt.produceWithPatches.bind(tt),
          tt.setAutoFreeze.bind(tt),
          tt.setUseProxies.bind(tt),
          tt.applyPatches.bind(tt),
          tt.createDraft.bind(tt),
          tt.finishDraft.bind(tt),
          et);
      function nt(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function it(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ot(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? it(Object(r), !0).forEach(function (e) {
                nt(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : it(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function st(t) {
        return (
          "Minified Redux error #" +
          t +
          "; visit https://redux.js.org/Errors?code=" +
          t +
          " for the full message or use the non-minified dev environment for full errors. "
        );
      }
      var at =
          ("function" === typeof Symbol && Symbol.observable) || "@@observable",
        ut = function () {
          return Math.random().toString(36).substring(7).split("").join(".");
        },
        ct = {
          INIT: "@@redux/INIT" + ut(),
          REPLACE: "@@redux/REPLACE" + ut(),
          PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + ut();
          },
        };
      function lt(t) {
        if ("object" !== typeof t || null === t) return !1;
        for (var e = t; null !== Object.getPrototypeOf(e); )
          e = Object.getPrototypeOf(e);
        return Object.getPrototypeOf(t) === e;
      }
      function ht(t, e, r) {
        var n;
        if (
          ("function" === typeof e && "function" === typeof r) ||
          ("function" === typeof r && "function" === typeof arguments[3])
        )
          throw new Error(st(0));
        if (
          ("function" === typeof e &&
            "undefined" === typeof r &&
            ((r = e), (e = void 0)),
          "undefined" !== typeof r)
        ) {
          if ("function" !== typeof r) throw new Error(st(1));
          return r(ht)(t, e);
        }
        if ("function" !== typeof t) throw new Error(st(2));
        var i = t,
          o = e,
          s = [],
          a = s,
          u = !1;
        function c() {
          a === s && (a = s.slice());
        }
        function l() {
          if (u) throw new Error(st(3));
          return o;
        }
        function h(t) {
          if ("function" !== typeof t) throw new Error(st(4));
          if (u) throw new Error(st(5));
          var e = !0;
          return (
            c(),
            a.push(t),
            function () {
              if (e) {
                if (u) throw new Error(st(6));
                (e = !1), c();
                var r = a.indexOf(t);
                a.splice(r, 1), (s = null);
              }
            }
          );
        }
        function f(t) {
          if (!lt(t)) throw new Error(st(7));
          if ("undefined" === typeof t.type) throw new Error(st(8));
          if (u) throw new Error(st(9));
          try {
            (u = !0), (o = i(o, t));
          } finally {
            u = !1;
          }
          for (var e = (s = a), r = 0; r < e.length; r++) {
            (0, e[r])();
          }
          return t;
        }
        function d(t) {
          if ("function" !== typeof t) throw new Error(st(10));
          (i = t), f({ type: ct.REPLACE });
        }
        function p() {
          var t,
            e = h;
          return (
            ((t = {
              subscribe: function (t) {
                if ("object" !== typeof t || null === t)
                  throw new Error(st(11));
                function r() {
                  t.next && t.next(l());
                }
                return r(), { unsubscribe: e(r) };
              },
            })[at] = function () {
              return this;
            }),
            t
          );
        }
        return (
          f({ type: ct.INIT }),
          ((n = { dispatch: f, subscribe: h, getState: l, replaceReducer: d })[
            at
          ] = p),
          n
        );
      }
      function ft(t) {
        for (var e = Object.keys(t), r = {}, n = 0; n < e.length; n++) {
          var i = e[n];
          0, "function" === typeof t[i] && (r[i] = t[i]);
        }
        var o,
          s = Object.keys(r);
        try {
          !(function (t) {
            Object.keys(t).forEach(function (e) {
              var r = t[e];
              if ("undefined" === typeof r(void 0, { type: ct.INIT }))
                throw new Error(st(12));
              if (
                "undefined" ===
                typeof r(void 0, { type: ct.PROBE_UNKNOWN_ACTION() })
              )
                throw new Error(st(13));
            });
          })(r);
        } catch (a) {
          o = a;
        }
        return function (t, e) {
          if ((void 0 === t && (t = {}), o)) throw o;
          for (var n = !1, i = {}, a = 0; a < s.length; a++) {
            var u = s[a],
              c = r[u],
              l = t[u],
              h = c(l, e);
            if ("undefined" === typeof h) {
              e && e.type;
              throw new Error(st(14));
            }
            (i[u] = h), (n = n || h !== l);
          }
          return (n = n || s.length !== Object.keys(t).length) ? i : t;
        };
      }
      function dt() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return 0 === e.length
          ? function (t) {
              return t;
            }
          : 1 === e.length
          ? e[0]
          : e.reduce(function (t, e) {
              return function () {
                return t(e.apply(void 0, arguments));
              };
            });
      }
      function pt() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return function (t) {
          return function () {
            var r = t.apply(void 0, arguments),
              n = function () {
                throw new Error(st(15));
              },
              i = {
                getState: r.getState,
                dispatch: function () {
                  return n.apply(void 0, arguments);
                },
              },
              o = e.map(function (t) {
                return t(i);
              });
            return (
              (n = dt.apply(void 0, o)(r.dispatch)),
              ot(ot({}, r), {}, { dispatch: n })
            );
          };
        };
      }
      function mt(t) {
        return function (e) {
          var r = e.dispatch,
            n = e.getState;
          return function (e) {
            return function (i) {
              return "function" === typeof i ? i(r, n, t) : e(i);
            };
          };
        };
      }
      var gt = mt();
      gt.withExtraArgument = mt;
      var vt = gt,
        yt =
          (r(4444),
          (function () {
            var t = function (e, r) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(e, r);
            };
            return function (e, r) {
              if ("function" !== typeof r && null !== r)
                throw new TypeError(
                  "Class extends value " +
                    String(r) +
                    " is not a constructor or null"
                );
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })()),
        wt = function (t, e) {
          for (var r = 0, n = e.length, i = t.length; r < n; r++, i++)
            t[i] = e[r];
          return t;
        },
        bt = Object.defineProperty,
        At =
          (Object.defineProperties,
          Object.getOwnPropertyDescriptors,
          Object.getOwnPropertySymbols),
        Et = Object.prototype.hasOwnProperty,
        Mt = Object.prototype.propertyIsEnumerable,
        kt = function (t, e, r) {
          return e in t
            ? bt(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r);
        },
        _t = function (t, e) {
          for (var r in e || (e = {})) Et.call(e, r) && kt(t, r, e[r]);
          if (At)
            for (var n = 0, i = At(e); n < i.length; n++) {
              r = i[n];
              Mt.call(e, r) && kt(t, r, e[r]);
            }
          return t;
        },
        Ct =
          "undefined" !== typeof window &&
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            : function () {
                if (0 !== arguments.length)
                  return "object" === typeof arguments[0]
                    ? dt
                    : dt.apply(null, arguments);
              };
      "undefined" !== typeof window &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__;
      function Nt(t) {
        if ("object" !== typeof t || null === t) return !1;
        var e = Object.getPrototypeOf(t);
        if (null === e) return !0;
        for (var r = e; null !== Object.getPrototypeOf(r); )
          r = Object.getPrototypeOf(r);
        return e === r;
      }
      var It = (function (t) {
        function e() {
          for (var r = [], n = 0; n < arguments.length; n++)
            r[n] = arguments[n];
          var i = t.apply(this, r) || this;
          return Object.setPrototypeOf(i, e.prototype), i;
        }
        return (
          yt(e, t),
          Object.defineProperty(e, Symbol.species, {
            get: function () {
              return e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.concat = function () {
            for (var e = [], r = 0; r < arguments.length; r++)
              e[r] = arguments[r];
            return t.prototype.concat.apply(this, e);
          }),
          (e.prototype.prepend = function () {
            for (var t = [], r = 0; r < arguments.length; r++)
              t[r] = arguments[r];
            return 1 === t.length && Array.isArray(t[0])
              ? new (e.bind.apply(e, wt([void 0], t[0].concat(this))))()
              : new (e.bind.apply(e, wt([void 0], t.concat(this))))();
          }),
          e
        );
      })(Array);
      function Ot(t) {
        return o(t) ? rt(t, function () {}) : t;
      }
      function Pt() {
        return function (t) {
          return (function (t) {
            void 0 === t && (t = {});
            var e = t.thunk,
              r = void 0 === e || e,
              n = (t.immutableCheck, t.serializableCheck, new It());
            r &&
              (!(function (t) {
                return "boolean" === typeof t;
              })(r)
                ? n.push(vt.withExtraArgument(r.extraArgument))
                : n.push(vt));
            0;
            return n;
          })(t);
        };
      }
      function St(t) {
        var e,
          r = Pt(),
          n = t || {},
          i = n.reducer,
          o = void 0 === i ? void 0 : i,
          s = n.middleware,
          a = void 0 === s ? r() : s,
          u = n.devTools,
          c = void 0 === u || u,
          l = n.preloadedState,
          h = void 0 === l ? void 0 : l,
          f = n.enhancers,
          d = void 0 === f ? void 0 : f;
        if ("function" === typeof o) e = o;
        else {
          if (!Nt(o))
            throw new Error(
              '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
            );
          e = ft(o);
        }
        var p = a;
        "function" === typeof p && (p = p(r));
        var m = pt.apply(void 0, p),
          g = dt;
        c && (g = Ct(_t({ trace: !1 }, "object" === typeof c && c)));
        var v = [m];
        return (
          Array.isArray(d)
            ? (v = wt([m], d))
            : "function" === typeof d && (v = d(v)),
          ht(e, h, g.apply(void 0, v))
        );
      }
      function xt(t, e) {
        function r() {
          for (var r = [], n = 0; n < arguments.length; n++)
            r[n] = arguments[n];
          if (e) {
            var i = e.apply(void 0, r);
            if (!i) throw new Error("prepareAction did not return an object");
            return _t(
              _t(
                { type: t, payload: i.payload },
                "meta" in i && { meta: i.meta }
              ),
              "error" in i && { error: i.error }
            );
          }
          return { type: t, payload: r[0] };
        }
        return (
          (r.toString = function () {
            return "" + t;
          }),
          (r.type = t),
          (r.match = function (e) {
            return e.type === t;
          }),
          r
        );
      }
      function Rt(t) {
        var e,
          r = {},
          n = [],
          i = {
            addCase: function (t, e) {
              var n = "string" === typeof t ? t : t.type;
              if (n in r)
                throw new Error(
                  "addCase cannot be called with two reducers for the same action type"
                );
              return (r[n] = e), i;
            },
            addMatcher: function (t, e) {
              return n.push({ matcher: t, reducer: e }), i;
            },
            addDefaultCase: function (t) {
              return (e = t), i;
            },
          };
        return t(i), [r, n, e];
      }
      function Tt(t) {
        var e = t.name;
        if (!e) throw new Error("`name` is a required option for createSlice");
        var r,
          n =
            "function" == typeof t.initialState
              ? t.initialState
              : Ot(t.initialState),
          s = t.reducers || {},
          a = Object.keys(s),
          u = {},
          c = {},
          l = {};
        function h() {
          var e =
              "function" === typeof t.extraReducers
                ? Rt(t.extraReducers)
                : [t.extraReducers],
            r = e[0],
            s = void 0 === r ? {} : r,
            a = e[1],
            u = void 0 === a ? [] : a,
            l = e[2],
            h = void 0 === l ? void 0 : l,
            f = _t(_t({}, s), c);
          return (function (t, e, r, n) {
            void 0 === r && (r = []);
            var s,
              a = "function" === typeof e ? Rt(e) : [e, r, n],
              u = a[0],
              c = a[1],
              l = a[2];
            if (
              (function (t) {
                return "function" === typeof t;
              })(t)
            )
              s = function () {
                return Ot(t());
              };
            else {
              var h = Ot(t);
              s = function () {
                return h;
              };
            }
            function f(t, e) {
              void 0 === t && (t = s());
              var r = wt(
                [u[e.type]],
                c
                  .filter(function (t) {
                    return (0, t.matcher)(e);
                  })
                  .map(function (t) {
                    return t.reducer;
                  })
              );
              return (
                0 ===
                  r.filter(function (t) {
                    return !!t;
                  }).length && (r = [l]),
                r.reduce(function (t, r) {
                  if (r) {
                    var n;
                    if (i(t)) return void 0 === (n = r(t, e)) ? t : n;
                    if (o(t))
                      return rt(t, function (t) {
                        return r(t, e);
                      });
                    if (void 0 === (n = r(t, e))) {
                      if (null === t) return t;
                      throw Error(
                        "A case reducer on a non-draftable value must not return undefined"
                      );
                    }
                    return n;
                  }
                  return t;
                }, t)
              );
            }
            return (f.getInitialState = s), f;
          })(n, f, u, h);
        }
        return (
          a.forEach(function (t) {
            var r,
              n,
              i = s[t],
              o = e + "/" + t;
            "reducer" in i ? ((r = i.reducer), (n = i.prepare)) : (r = i),
              (u[t] = r),
              (c[o] = r),
              (l[t] = n ? xt(o, n) : xt(o));
          }),
          {
            name: e,
            reducer: function (t, e) {
              return r || (r = h()), r(t, e);
            },
            actions: l,
            caseReducers: u,
            getInitialState: function () {
              return r || (r = h()), r.getInitialState();
            },
          }
        );
      }
      Object.assign;
      var Bt = "listenerMiddleware";
      xt(Bt + "/add"), xt(Bt + "/removeAll"), xt(Bt + "/remove");
      D();
    },
    43718: function (t, e, r) {
      "use strict";
      r.d(e, {
        Q: function () {
          return o;
        },
      });
      var n = r(38867),
        i = r(64269);
      var o = (function (t) {
        var e, r;
        function n(e) {
          var r,
            n = (void 0 === e ? {} : e).supportedChainIds;
          return ((r = t.call(this) || this).supportedChainIds = n), r;
        }
        (r = t),
          ((e = n).prototype = Object.create(r.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = r);
        var o = n.prototype;
        return (
          (o.emitUpdate = function (t) {
            this.emit(i._.Update, t);
          }),
          (o.emitError = function (t) {
            this.emit(i._.Error, t);
          }),
          (o.emitDeactivate = function () {
            this.emit(i._.Deactivate);
          }),
          n
        );
      })(n.EventEmitter);
    },
    24789: function (t, e, r) {
      "use strict";
      r.d(e, {
        Uu: function () {
          return A;
        },
        Ht: function () {
          return C;
        },
        Ge: function () {
          return N;
        },
      });
      var n = r(56168),
        i = r(27856),
        o = r(64269),
        s = r(25689),
        a = r(82119);
      function u() {
        return (u =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      function c(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          h(t, e);
      }
      function l(t) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function h(t, e) {
        return (h =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function f() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      function d(t, e, r) {
        return (d = f()
          ? Reflect.construct
          : function (t, e, r) {
              var n = [null];
              n.push.apply(n, e);
              var i = new (Function.bind.apply(t, n))();
              return r && h(i, r.prototype), i;
            }).apply(null, arguments);
      }
      function p(t) {
        var e = "function" === typeof Map ? new Map() : void 0;
        return (p = function (t) {
          if (
            null === t ||
            ((r = t), -1 === Function.toString.call(r).indexOf("[native code]"))
          )
            return t;
          var r;
          if ("function" !== typeof t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if ("undefined" !== typeof e) {
            if (e.has(t)) return e.get(t);
            e.set(t, n);
          }
          function n() {
            return d(t, arguments, l(this).constructor);
          }
          return (
            (n.prototype = Object.create(t.prototype, {
              constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            h(n, t)
          );
        })(t);
      }
      "undefined" !== typeof Symbol &&
        (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
        "undefined" !== typeof Symbol &&
          (Symbol.asyncIterator ||
            (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
      function m(t, e) {
        try {
          var r = t();
        } catch (n) {
          return e(n);
        }
        return r && r.then ? r.then(void 0, e) : r;
      }
      function g(t) {
        if ("string" === typeof t) {
          t = t.replace(/^Ox/, "0x");
          var e = Number.parseInt(
            t,
            "0x" === t.trim().substring(0, 2) ? 16 : 10
          );
          return Number.isNaN(e) && (0, i.Z)(!1), e;
        }
        return Number.isInteger(t) || (0, i.Z)(!1), t;
      }
      function v(t) {
        ("string" === typeof t && t.match(/^(0x)?[0-9a-fA-F]{40}$/)) ||
          (0, i.Z)(!1);
        for (
          var e = "0x" === t.substring(0, 2) ? t : "0x" + t,
            r = e.toLowerCase().substring(2).split(""),
            n = new Uint8Array(40),
            o = 0;
          o < 40;
          o++
        )
          n[o] = r[o].charCodeAt(0);
        for (var u = (0, s.lE)((0, a.w)(n)), c = 0; c < 40; c += 2)
          u[c >> 1] >> 4 >= 8 && (r[c] = r[c].toUpperCase()),
            (15 & u[c >> 1]) >= 8 && (r[c + 1] = r[c + 1].toUpperCase());
        var l = "0x" + r.join("");
        return (
          e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && e !== l && (0, i.Z)(!1), l
        );
      }
      var y,
        w = function (t, e) {
          try {
            var r = function (r) {
                return Promise.resolve(
                  Promise.all([
                    void 0 === e.chainId ? t.getChainId() : e.chainId,
                    void 0 === e.account ? t.getAccount() : e.account,
                  ])
                ).then(function (e) {
                  var n = e[0],
                    i = e[1],
                    o = g(n);
                  if (t.supportedChainIds && !t.supportedChainIds.includes(o))
                    throw new A(o, t.supportedChainIds);
                  var s = null === i ? i : v(i);
                  return { provider: r, chainId: o, account: s };
                });
              },
              n = void 0 === e.provider;
            return Promise.resolve(
              n ? Promise.resolve(t.getProvider()).then(r) : r(e.provider)
            );
          } catch (i) {
            return Promise.reject(i);
          }
        },
        b = (function (t) {
          function e() {
            var e;
            return ((e = t.call(this) || this).name = e.constructor.name), e;
          }
          return c(e, t), e;
        })(p(Error)),
        A = (function (t) {
          function e(e, r) {
            var n;
            return (
              ((n = t.call(this) || this).name = n.constructor.name),
              (n.message =
                "Unsupported chain id: " +
                e +
                ". Supported chain ids are: " +
                r +
                "."),
              n
            );
          }
          return c(e, t), e;
        })(p(Error));
      function E(t, e) {
        var r = e.type,
          n = e.payload;
        switch (r) {
          case y.ACTIVATE_CONNECTOR:
            return {
              connector: n.connector,
              provider: n.provider,
              chainId: n.chainId,
              account: n.account,
              onError: n.onError,
            };
          case y.UPDATE:
            var i = n.provider,
              o = n.chainId,
              s = n.account;
            return u(
              {},
              t,
              void 0 === i ? {} : { provider: i },
              void 0 === o ? {} : { chainId: o },
              void 0 === s ? {} : { account: s }
            );
          case y.UPDATE_FROM_ERROR:
            var a = n.provider,
              c = n.chainId,
              l = n.account;
            return u(
              {},
              t,
              void 0 === a ? {} : { provider: a },
              void 0 === c ? {} : { chainId: c },
              void 0 === l ? {} : { account: l },
              { error: void 0 }
            );
          case y.ERROR:
            var h = n.error;
            return { connector: t.connector, error: h, onError: t.onError };
          case y.ERROR_FROM_ACTIVATION:
            return { connector: n.connector, error: n.error };
          case y.DEACTIVATE_CONNECTOR:
            return {};
        }
      }
      !(function (t) {
        (t[(t.ACTIVATE_CONNECTOR = 0)] = "ACTIVATE_CONNECTOR"),
          (t[(t.UPDATE = 1)] = "UPDATE"),
          (t[(t.UPDATE_FROM_ERROR = 2)] = "UPDATE_FROM_ERROR"),
          (t[(t.ERROR = 3)] = "ERROR"),
          (t[(t.ERROR_FROM_ACTIVATION = 4)] = "ERROR_FROM_ACTIVATION"),
          (t[(t.DEACTIVATE_CONNECTOR = 5)] = "DEACTIVATE_CONNECTOR");
      })(y || (y = {}));
      var M = "primary",
        k = {};
      function _(t) {
        k[t] && (0, i.Z)(!1),
          (k[t] = (0, n.createContext)({
            activate: function () {
              try {
                return (0, i.Z)(!1), Promise.resolve();
              } catch (t) {
                return Promise.reject(t);
              }
            },
            setError: function () {
              (0, i.Z)(!1);
            },
            deactivate: function () {
              (0, i.Z)(!1);
            },
            active: !1,
          })),
          (k[t].displayName = "Web3ReactContext - " + t);
        var e = k[t].Provider;
        return function (t) {
          var r = t.getLibrary,
            i = t.children,
            s = (function () {
              var t = (0, n.useReducer)(E, {}),
                e = t[0],
                r = t[1],
                i = e.connector,
                s = e.provider,
                a = e.chainId,
                c = e.account,
                l = e.onError,
                h = e.error,
                f = (0, n.useRef)(-1);
              f.current += 1;
              var d = (0, n.useCallback)(function (t, e, n) {
                  void 0 === n && (n = !1);
                  try {
                    var i = f.current,
                      o = !1;
                    return Promise.resolve(
                      m(
                        function () {
                          return Promise.resolve(
                            t.activate().then(function (t) {
                              return (o = !0), t;
                            })
                          ).then(function (n) {
                            return Promise.resolve(w(t, n)).then(function (n) {
                              if (f.current > i) throw new b();
                              r({
                                type: y.ACTIVATE_CONNECTOR,
                                payload: u({ connector: t }, n, { onError: e }),
                              });
                            });
                          });
                        },
                        function (i) {
                          if (i instanceof b) o && t.deactivate();
                          else {
                            if (n) throw (o && t.deactivate(), i);
                            e
                              ? (o && t.deactivate(), e(i))
                              : r({
                                  type: y.ERROR_FROM_ACTIVATION,
                                  payload: { connector: t, error: i },
                                });
                          }
                        }
                      )
                    );
                  } catch (s) {
                    return Promise.reject(s);
                  }
                }, []),
                p = (0, n.useCallback)(function (t) {
                  r({ type: y.ERROR, payload: { error: t } });
                }, []),
                M = (0, n.useCallback)(function () {
                  r({ type: y.DEACTIVATE_CONNECTOR });
                }, []),
                k = (0, n.useCallback)(
                  function (t) {
                    try {
                      if (!i)
                        throw Error(
                          "This should never happen, it's just so Typescript stops complaining"
                        );
                      var e = f.current;
                      return Promise.resolve(
                        (function () {
                          if (h)
                            return m(
                              function () {
                                return Promise.resolve(w(i, t)).then(function (
                                  t
                                ) {
                                  if (f.current > e) throw new b();
                                  r({ type: y.UPDATE_FROM_ERROR, payload: t });
                                });
                              },
                              function (t) {
                                t instanceof b ||
                                  (l
                                    ? l(t)
                                    : r({
                                        type: y.ERROR,
                                        payload: { error: t },
                                      }));
                              }
                            );
                          var n = void 0 === t.chainId ? void 0 : g(t.chainId);
                          if (
                            void 0 !== n &&
                            i.supportedChainIds &&
                            !i.supportedChainIds.includes(n)
                          ) {
                            var o = new A(n, i.supportedChainIds);
                            l
                              ? l(o)
                              : r({ type: y.ERROR, payload: { error: o } });
                          } else {
                            var s =
                              "string" === typeof t.account
                                ? v(t.account)
                                : t.account;
                            r({
                              type: y.UPDATE,
                              payload: {
                                provider: t.provider,
                                chainId: n,
                                account: s,
                              },
                            });
                          }
                        })()
                      );
                    } catch (n) {
                      return Promise.reject(n);
                    }
                  },
                  [i, h, l]
                ),
                _ = (0, n.useCallback)(
                  function (t) {
                    l ? l(t) : r({ type: y.ERROR, payload: { error: t } });
                  },
                  [l]
                ),
                C = (0, n.useCallback)(function () {
                  r({ type: y.DEACTIVATE_CONNECTOR });
                }, []);
              return (
                (0, n.useEffect)(
                  function () {
                    return function () {
                      i && i.deactivate();
                    };
                  },
                  [i]
                ),
                (0, n.useEffect)(
                  function () {
                    return (
                      i &&
                        i
                          .on(o._.Update, k)
                          .on(o._.Error, _)
                          .on(o._.Deactivate, C),
                      function () {
                        i &&
                          i
                            .off(o._.Update, k)
                            .off(o._.Error, _)
                            .off(o._.Deactivate, C);
                      }
                    );
                  },
                  [i, k, _, C]
                ),
                {
                  connector: i,
                  provider: s,
                  chainId: a,
                  account: c,
                  activate: d,
                  setError: p,
                  deactivate: M,
                  error: h,
                }
              );
            })(),
            a = s.connector,
            c = s.provider,
            l = s.chainId,
            h = s.account,
            f = s.activate,
            d = s.setError,
            p = s.deactivate,
            M = s.error,
            k = void 0 !== a && void 0 !== l && void 0 !== h && !M,
            _ = (0, n.useMemo)(
              function () {
                return k && void 0 !== l && Number.isInteger(l) && a
                  ? r(c, a)
                  : void 0;
              },
              [k, r, c, a, l]
            ),
            C = {
              connector: a,
              library: _,
              chainId: l,
              account: h,
              activate: f,
              setError: d,
              deactivate: p,
              active: k,
              error: M,
            };
          return n.createElement(e, { value: C }, i);
        };
      }
      var C = _(M);
      function N(t) {
        return (0, n.useContext)(
          (function (t) {
            return (
              void 0 === t && (t = M),
              Object.keys(k).includes(t) || (0, i.Z)(!1),
              k[t]
            );
          })(t)
        );
      }
    },
    64269: function (t, e, r) {
      "use strict";
      var n;
      r.d(e, {
        _: function () {
          return n;
        },
      }),
        (function (t) {
          (t.Update = "Web3ReactUpdate"),
            (t.Error = "Web3ReactError"),
            (t.Deactivate = "Web3ReactDeactivate");
        })(n || (n = {}));
    },
    83516: function (t, e, r) {
      "use strict";
      r.d(e, {
        zw: function () {
          return d;
        },
      });
      var n = r(43718);
      function i(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          s(t, e);
      }
      function o(t) {
        return (o = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function s(t, e) {
        return (s =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function a() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      function u(t, e, r) {
        return (u = a()
          ? Reflect.construct
          : function (t, e, r) {
              var n = [null];
              n.push.apply(n, e);
              var i = new (Function.bind.apply(t, n))();
              return r && s(i, r.prototype), i;
            }).apply(null, arguments);
      }
      function c(t) {
        var e = "function" === typeof Map ? new Map() : void 0;
        return (c = function (t) {
          if (
            null === t ||
            ((r = t), -1 === Function.toString.call(r).indexOf("[native code]"))
          )
            return t;
          var r;
          if ("function" !== typeof t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if ("undefined" !== typeof e) {
            if (e.has(t)) return e.get(t);
            e.set(t, n);
          }
          function n() {
            return u(t, arguments, o(this).constructor);
          }
          return (
            (n.prototype = Object.create(t.prototype, {
              constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            s(n, t)
          );
        })(t);
      }
      function l(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      var h = (function (t) {
        function e() {
          var e;
          return (
            ((e = t.call(this) || this).name = e.constructor.name),
            (e.message = "The user rejected the request."),
            e
          );
        }
        return i(e, t), e;
      })(c(Error));
      function f(t) {
        var e = t.supportedChainIds,
          r = t.rpc;
        return (
          e ||
          (r
            ? Object.keys(r).map(function (t) {
                return Number(t);
              })
            : void 0)
        );
      }
      var d = (function (t) {
        function e(e) {
          var r;
          return (
            ((r = t.call(this, { supportedChainIds: f(e) }) || this).config =
              e),
            (r.handleChainChanged = r.handleChainChanged.bind(l(r))),
            (r.handleAccountsChanged = r.handleAccountsChanged.bind(l(r))),
            (r.handleDisconnect = r.handleDisconnect.bind(l(r))),
            r
          );
        }
        i(e, t);
        var n = e.prototype;
        return (
          (n.handleChainChanged = function (t) {
            this.emitUpdate({ chainId: t });
          }),
          (n.handleAccountsChanged = function (t) {
            this.emitUpdate({ account: t[0] });
          }),
          (n.handleDisconnect = function () {
            this.walletConnectProvider &&
              (this.walletConnectProvider.removeListener(
                "chainChanged",
                this.handleChainChanged
              ),
              this.walletConnectProvider.removeListener(
                "accountsChanged",
                this.handleAccountsChanged
              ),
              (this.walletConnectProvider = void 0)),
              this.emitDeactivate();
          }),
          (n.activate = function () {
            try {
              var t = this,
                e = function () {
                  function e() {
                    var e;
                    return Promise.resolve(
                      new Promise(function (r, n) {
                        var i = function () {
                          (t.walletConnectProvider = void 0), n(new h());
                        };
                        t.walletConnectProvider.connector.on(
                          "disconnect",
                          function () {
                            e || i();
                          }
                        ),
                          t.walletConnectProvider
                            .enable()
                            .then(function (t) {
                              return r(t[0]);
                            })
                            .catch(function (t) {
                              "User closed modal" !== t.message ? n(t) : i();
                            });
                      }).catch(function (t) {
                        throw t;
                      })
                    ).then(function (r) {
                      return (
                        (e = r),
                        t.walletConnectProvider.on(
                          "disconnect",
                          t.handleDisconnect
                        ),
                        t.walletConnectProvider.on(
                          "chainChanged",
                          t.handleChainChanged
                        ),
                        t.walletConnectProvider.on(
                          "accountsChanged",
                          t.handleAccountsChanged
                        ),
                        { provider: t.walletConnectProvider, account: e }
                      );
                    });
                  }
                  var r = (function () {
                    if (!t.walletConnectProvider.connector.connected)
                      return Promise.resolve(
                        t.walletConnectProvider.connector.createSession(
                          t.config.chainId
                            ? { chainId: t.config.chainId }
                            : void 0
                        )
                      ).then(function () {
                        t.emit(
                          "URI_AVAILABLE",
                          t.walletConnectProvider.connector.uri
                        );
                      });
                  })();
                  return r && r.then ? r.then(e) : e();
                },
                n = (function () {
                  if (!t.walletConnectProvider)
                    return Promise.resolve(
                      Promise.all([r.e(171), r.e(563)])
                        .then(r.bind(r, 22171))
                        .then(function (t) {
                          var e;
                          return null != (e = null == t ? void 0 : t.default)
                            ? e
                            : t;
                        })
                    ).then(function (e) {
                      t.walletConnectProvider = new e(t.config);
                    });
                })();
              return Promise.resolve(n && n.then ? n.then(e) : e());
            } catch (i) {
              return Promise.reject(i);
            }
          }),
          (n.getProvider = function () {
            try {
              return Promise.resolve(this.walletConnectProvider);
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (n.getChainId = function () {
            try {
              return Promise.resolve(this.walletConnectProvider.chainId);
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (n.getAccount = function () {
            try {
              return Promise.resolve(this.walletConnectProvider.accounts).then(
                function (t) {
                  return t[0];
                }
              );
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (n.deactivate = function () {
            this.walletConnectProvider &&
              (this.walletConnectProvider.removeListener(
                "disconnect",
                this.handleDisconnect
              ),
              this.walletConnectProvider.removeListener(
                "chainChanged",
                this.handleChainChanged
              ),
              this.walletConnectProvider.removeListener(
                "accountsChanged",
                this.handleAccountsChanged
              ),
              this.walletConnectProvider.disconnect());
          }),
          (n.close = function () {
            try {
              return this.emitDeactivate(), Promise.resolve();
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          e
        );
      })(n.Q);
    },
    66986: function (t, e, r) {
      "use strict";
      r.d(e, {
        J: function () {
          return a;
        },
      });
      var n = r(43718);
      function i() {
        return (i =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      function o(t, e) {
        return (o =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function s(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      var a = (function (t) {
        var e, n;
        function a(e) {
          var r,
            n = e.url,
            i = e.appName,
            o = e.appLogoUrl,
            a = e.darkMode,
            u = e.supportedChainIds;
          return (
            ((r = t.call(this, { supportedChainIds: u }) || this).url = n),
            (r.appName = i),
            (r.appLogoUrl = o),
            (r.darkMode = a || !1),
            (r.handleChainChanged = r.handleChainChanged.bind(s(r))),
            (r.handleAccountsChanged = r.handleAccountsChanged.bind(s(r))),
            r
          );
        }
        (n = t),
          ((e = a).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          o(e, n);
        var u = a.prototype;
        return (
          (u.activate = function () {
            try {
              var t = this,
                e = function () {
                  return Promise.resolve(
                    t.provider.request({ method: "eth_requestAccounts" })
                  ).then(function (e) {
                    var r = e[0];
                    return (
                      t.provider.on("chainChanged", t.handleChainChanged),
                      t.provider.on("accountsChanged", t.handleAccountsChanged),
                      { provider: t.provider, account: r }
                    );
                  });
                },
                n = (function () {
                  if (
                    window.ethereum &&
                    !0 === window.ethereum.isCoinbaseWallet
                  )
                    t.provider = window.ethereum;
                  else {
                    var e = (function () {
                      if (!t.walletLink)
                        return Promise.resolve(
                          Promise.all([r.e(870), r.e(27)])
                            .then(r.bind(r, 50870))
                            .then(function (t) {
                              var e;
                              return null !=
                                (e = null == t ? void 0 : t.default)
                                ? e
                                : t;
                            })
                        ).then(function (e) {
                          (t.walletLink = new e(
                            i(
                              { appName: t.appName, darkMode: t.darkMode },
                              t.appLogoUrl ? { appLogoUrl: t.appLogoUrl } : {}
                            )
                          )),
                            (t.provider = t.walletLink.makeWeb3Provider(
                              t.url,
                              1
                            ));
                        });
                    })();
                    if (e && e.then) return e.then(function () {});
                  }
                })();
              return Promise.resolve(n && n.then ? n.then(e) : e());
            } catch (o) {
              return Promise.reject(o);
            }
          }),
          (u.getProvider = function () {
            try {
              return Promise.resolve(this.provider);
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (u.getChainId = function () {
            try {
              return Promise.resolve(this.provider.chainId);
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (u.getAccount = function () {
            try {
              return Promise.resolve(
                this.provider.request({ method: "eth_requestAccounts" })
              ).then(function (t) {
                return t[0];
              });
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (u.deactivate = function () {
            this.provider.removeListener(
              "chainChanged",
              this.handleChainChanged
            ),
              this.provider.removeListener(
                "accountsChanged",
                this.handleAccountsChanged
              );
          }),
          (u.close = function () {
            try {
              return (
                this.provider.close(), this.emitDeactivate(), Promise.resolve()
              );
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (u.handleChainChanged = function (t) {
            this.emitUpdate({ chainId: t });
          }),
          (u.handleAccountsChanged = function (t) {
            this.emitUpdate({ account: t[0] });
          }),
          a
        );
      })(n.Q);
    },
    67503: function (t, e) {
      "use strict";
      (e.byteLength = function (t) {
        var e = u(t),
          r = e[0],
          n = e[1];
        return (3 * (r + n)) / 4 - n;
      }),
        (e.toByteArray = function (t) {
          var e,
            r,
            o = u(t),
            s = o[0],
            a = o[1],
            c = new i(
              (function (t, e, r) {
                return (3 * (e + r)) / 4 - r;
              })(0, s, a)
            ),
            l = 0,
            h = a > 0 ? s - 4 : s;
          for (r = 0; r < h; r += 4)
            (e =
              (n[t.charCodeAt(r)] << 18) |
              (n[t.charCodeAt(r + 1)] << 12) |
              (n[t.charCodeAt(r + 2)] << 6) |
              n[t.charCodeAt(r + 3)]),
              (c[l++] = (e >> 16) & 255),
              (c[l++] = (e >> 8) & 255),
              (c[l++] = 255 & e);
          2 === a &&
            ((e = (n[t.charCodeAt(r)] << 2) | (n[t.charCodeAt(r + 1)] >> 4)),
            (c[l++] = 255 & e));
          1 === a &&
            ((e =
              (n[t.charCodeAt(r)] << 10) |
              (n[t.charCodeAt(r + 1)] << 4) |
              (n[t.charCodeAt(r + 2)] >> 2)),
            (c[l++] = (e >> 8) & 255),
            (c[l++] = 255 & e));
          return c;
        }),
        (e.fromByteArray = function (t) {
          for (
            var e, n = t.length, i = n % 3, o = [], s = 16383, a = 0, u = n - i;
            a < u;
            a += s
          )
            o.push(c(t, a, a + s > u ? u : a + s));
          1 === i
            ? ((e = t[n - 1]), o.push(r[e >> 2] + r[(e << 4) & 63] + "=="))
            : 2 === i &&
              ((e = (t[n - 2] << 8) + t[n - 1]),
              o.push(r[e >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + "="));
          return o.join("");
        });
      for (
        var r = [],
          n = [],
          i = "undefined" !== typeof Uint8Array ? Uint8Array : Array,
          o =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          s = 0,
          a = o.length;
        s < a;
        ++s
      )
        (r[s] = o[s]), (n[o.charCodeAt(s)] = s);
      function u(t) {
        var e = t.length;
        if (e % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var r = t.indexOf("=");
        return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
      }
      function c(t, e, n) {
        for (var i, o, s = [], a = e; a < n; a += 3)
          (i =
            ((t[a] << 16) & 16711680) +
            ((t[a + 1] << 8) & 65280) +
            (255 & t[a + 2])),
            s.push(
              r[((o = i) >> 18) & 63] +
                r[(o >> 12) & 63] +
                r[(o >> 6) & 63] +
                r[63 & o]
            );
        return s.join("");
      }
      (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
    },
    83428: function (t) {
      "use strict";
      for (
        var e = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", r = {}, n = 0;
        n < e.length;
        n++
      ) {
        var i = e.charAt(n);
        if (void 0 !== r[i]) throw new TypeError(i + " is ambiguous");
        r[i] = n;
      }
      function o(t) {
        var e = t >> 25;
        return (
          ((33554431 & t) << 5) ^
          (996825010 & -((e >> 0) & 1)) ^
          (642813549 & -((e >> 1) & 1)) ^
          (513874426 & -((e >> 2) & 1)) ^
          (1027748829 & -((e >> 3) & 1)) ^
          (705979059 & -((e >> 4) & 1))
        );
      }
      function s(t) {
        for (var e = 1, r = 0; r < t.length; ++r) {
          var n = t.charCodeAt(r);
          if (n < 33 || n > 126) return "Invalid prefix (" + t + ")";
          e = o(e) ^ (n >> 5);
        }
        for (e = o(e), r = 0; r < t.length; ++r) {
          var i = t.charCodeAt(r);
          e = o(e) ^ (31 & i);
        }
        return e;
      }
      function a(t, e) {
        if (((e = e || 90), t.length < 8)) return t + " too short";
        if (t.length > e) return "Exceeds length limit";
        var n = t.toLowerCase(),
          i = t.toUpperCase();
        if (t !== n && t !== i) return "Mixed-case string " + t;
        var a = (t = n).lastIndexOf("1");
        if (-1 === a) return "No separator character for " + t;
        if (0 === a) return "Missing prefix for " + t;
        var u = t.slice(0, a),
          c = t.slice(a + 1);
        if (c.length < 6) return "Data too short";
        var l = s(u);
        if ("string" === typeof l) return l;
        for (var h = [], f = 0; f < c.length; ++f) {
          var d = c.charAt(f),
            p = r[d];
          if (void 0 === p) return "Unknown character " + d;
          (l = o(l) ^ p), f + 6 >= c.length || h.push(p);
        }
        return 1 !== l ? "Invalid checksum for " + t : { prefix: u, words: h };
      }
      function u(t, e, r, n) {
        for (
          var i = 0, o = 0, s = (1 << r) - 1, a = [], u = 0;
          u < t.length;
          ++u
        )
          for (i = (i << e) | t[u], o += e; o >= r; )
            (o -= r), a.push((i >> o) & s);
        if (n) o > 0 && a.push((i << (r - o)) & s);
        else {
          if (o >= e) return "Excess padding";
          if ((i << (r - o)) & s) return "Non-zero padding";
        }
        return a;
      }
      t.exports = {
        decodeUnsafe: function () {
          var t = a.apply(null, arguments);
          if ("object" === typeof t) return t;
        },
        decode: function (t) {
          var e = a.apply(null, arguments);
          if ("object" === typeof e) return e;
          throw new Error(e);
        },
        encode: function (t, r, n) {
          if (((n = n || 90), t.length + 7 + r.length > n))
            throw new TypeError("Exceeds length limit");
          var i = s((t = t.toLowerCase()));
          if ("string" === typeof i) throw new Error(i);
          for (var a = t + "1", u = 0; u < r.length; ++u) {
            var c = r[u];
            if (c >> 5 !== 0) throw new Error("Non 5-bit word");
            (i = o(i) ^ c), (a += e.charAt(c));
          }
          for (u = 0; u < 6; ++u) i = o(i);
          for (i ^= 1, u = 0; u < 6; ++u) {
            a += e.charAt((i >> (5 * (5 - u))) & 31);
          }
          return a;
        },
        toWordsUnsafe: function (t) {
          var e = u(t, 8, 5, !0);
          if (Array.isArray(e)) return e;
        },
        toWords: function (t) {
          var e = u(t, 8, 5, !0);
          if (Array.isArray(e)) return e;
          throw new Error(e);
        },
        fromWordsUnsafe: function (t) {
          var e = u(t, 5, 8, !1);
          if (Array.isArray(e)) return e;
        },
        fromWords: function (t) {
          var e = u(t, 5, 8, !1);
          if (Array.isArray(e)) return e;
          throw new Error(e);
        },
      };
    },
    45613: function (t, e, r) {
      "use strict";
      const n = r(67503),
        i = r(79976),
        o =
          "function" === typeof Symbol && "function" === typeof Symbol.for
            ? Symbol.for("nodejs.util.inspect.custom")
            : null;
      (e.Buffer = u),
        (e.SlowBuffer = function (t) {
          +t != t && (t = 0);
          return u.alloc(+t);
        }),
        (e.INSPECT_MAX_BYTES = 50);
      const s = 2147483647;
      function a(t) {
        if (t > s)
          throw new RangeError(
            'The value "' + t + '" is invalid for option "size"'
          );
        const e = new Uint8Array(t);
        return Object.setPrototypeOf(e, u.prototype), e;
      }
      function u(t, e, r) {
        if ("number" === typeof t) {
          if ("string" === typeof e)
            throw new TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          return h(t);
        }
        return c(t, e, r);
      }
      function c(t, e, r) {
        if ("string" === typeof t)
          return (function (t, e) {
            ("string" === typeof e && "" !== e) || (e = "utf8");
            if (!u.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
            const r = 0 | m(t, e);
            let n = a(r);
            const i = n.write(t, e);
            i !== r && (n = n.slice(0, i));
            return n;
          })(t, e);
        if (ArrayBuffer.isView(t))
          return (function (t) {
            if (W(t, Uint8Array)) {
              const e = new Uint8Array(t);
              return d(e.buffer, e.byteOffset, e.byteLength);
            }
            return f(t);
          })(t);
        if (null == t)
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof t
          );
        if (W(t, ArrayBuffer) || (t && W(t.buffer, ArrayBuffer)))
          return d(t, e, r);
        if (
          "undefined" !== typeof SharedArrayBuffer &&
          (W(t, SharedArrayBuffer) || (t && W(t.buffer, SharedArrayBuffer)))
        )
          return d(t, e, r);
        if ("number" === typeof t)
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        const n = t.valueOf && t.valueOf();
        if (null != n && n !== t) return u.from(n, e, r);
        const i = (function (t) {
          if (u.isBuffer(t)) {
            const e = 0 | p(t.length),
              r = a(e);
            return 0 === r.length || t.copy(r, 0, 0, e), r;
          }
          if (void 0 !== t.length)
            return "number" !== typeof t.length || V(t.length) ? a(0) : f(t);
          if ("Buffer" === t.type && Array.isArray(t.data)) return f(t.data);
        })(t);
        if (i) return i;
        if (
          "undefined" !== typeof Symbol &&
          null != Symbol.toPrimitive &&
          "function" === typeof t[Symbol.toPrimitive]
        )
          return u.from(t[Symbol.toPrimitive]("string"), e, r);
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof t
        );
      }
      function l(t) {
        if ("number" !== typeof t)
          throw new TypeError('"size" argument must be of type number');
        if (t < 0)
          throw new RangeError(
            'The value "' + t + '" is invalid for option "size"'
          );
      }
      function h(t) {
        return l(t), a(t < 0 ? 0 : 0 | p(t));
      }
      function f(t) {
        const e = t.length < 0 ? 0 : 0 | p(t.length),
          r = a(e);
        for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
        return r;
      }
      function d(t, e, r) {
        if (e < 0 || t.byteLength < e)
          throw new RangeError('"offset" is outside of buffer bounds');
        if (t.byteLength < e + (r || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        let n;
        return (
          (n =
            void 0 === e && void 0 === r
              ? new Uint8Array(t)
              : void 0 === r
              ? new Uint8Array(t, e)
              : new Uint8Array(t, e, r)),
          Object.setPrototypeOf(n, u.prototype),
          n
        );
      }
      function p(t) {
        if (t >= s)
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              s.toString(16) +
              " bytes"
          );
        return 0 | t;
      }
      function m(t, e) {
        if (u.isBuffer(t)) return t.length;
        if (ArrayBuffer.isView(t) || W(t, ArrayBuffer)) return t.byteLength;
        if ("string" !== typeof t)
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof t
          );
        const r = t.length,
          n = arguments.length > 2 && !0 === arguments[2];
        if (!n && 0 === r) return 0;
        let i = !1;
        for (;;)
          switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
              return H(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;
            case "hex":
              return r >>> 1;
            case "base64":
              return K(t).length;
            default:
              if (i) return n ? -1 : H(t).length;
              (e = ("" + e).toLowerCase()), (i = !0);
          }
      }
      function g(t, e, r) {
        let n = !1;
        if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
        if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
          return "";
        if ((r >>>= 0) <= (e >>>= 0)) return "";
        for (t || (t = "utf8"); ; )
          switch (t) {
            case "hex":
              return P(this, e, r);
            case "utf8":
            case "utf-8":
              return C(this, e, r);
            case "ascii":
              return I(this, e, r);
            case "latin1":
            case "binary":
              return O(this, e, r);
            case "base64":
              return _(this, e, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return S(this, e, r);
            default:
              if (n) throw new TypeError("Unknown encoding: " + t);
              (t = (t + "").toLowerCase()), (n = !0);
          }
      }
      function v(t, e, r) {
        const n = t[e];
        (t[e] = t[r]), (t[r] = n);
      }
      function y(t, e, r, n, i) {
        if (0 === t.length) return -1;
        if (
          ("string" === typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          V((r = +r)) && (r = i ? 0 : t.length - 1),
          r < 0 && (r = t.length + r),
          r >= t.length)
        ) {
          if (i) return -1;
          r = t.length - 1;
        } else if (r < 0) {
          if (!i) return -1;
          r = 0;
        }
        if (("string" === typeof e && (e = u.from(e, n)), u.isBuffer(e)))
          return 0 === e.length ? -1 : w(t, e, r, n, i);
        if ("number" === typeof e)
          return (
            (e &= 255),
            "function" === typeof Uint8Array.prototype.indexOf
              ? i
                ? Uint8Array.prototype.indexOf.call(t, e, r)
                : Uint8Array.prototype.lastIndexOf.call(t, e, r)
              : w(t, [e], r, n, i)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function w(t, e, r, n, i) {
        let o,
          s = 1,
          a = t.length,
          u = e.length;
        if (
          void 0 !== n &&
          ("ucs2" === (n = String(n).toLowerCase()) ||
            "ucs-2" === n ||
            "utf16le" === n ||
            "utf-16le" === n)
        ) {
          if (t.length < 2 || e.length < 2) return -1;
          (s = 2), (a /= 2), (u /= 2), (r /= 2);
        }
        function c(t, e) {
          return 1 === s ? t[e] : t.readUInt16BE(e * s);
        }
        if (i) {
          let n = -1;
          for (o = r; o < a; o++)
            if (c(t, o) === c(e, -1 === n ? 0 : o - n)) {
              if ((-1 === n && (n = o), o - n + 1 === u)) return n * s;
            } else -1 !== n && (o -= o - n), (n = -1);
        } else
          for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
            let r = !0;
            for (let n = 0; n < u; n++)
              if (c(t, o + n) !== c(e, n)) {
                r = !1;
                break;
              }
            if (r) return o;
          }
        return -1;
      }
      function b(t, e, r, n) {
        r = Number(r) || 0;
        const i = t.length - r;
        n ? (n = Number(n)) > i && (n = i) : (n = i);
        const o = e.length;
        let s;
        for (n > o / 2 && (n = o / 2), s = 0; s < n; ++s) {
          const n = parseInt(e.substr(2 * s, 2), 16);
          if (V(n)) return s;
          t[r + s] = n;
        }
        return s;
      }
      function A(t, e, r, n) {
        return Q(H(e, t.length - r), t, r, n);
      }
      function E(t, e, r, n) {
        return Q(
          (function (t) {
            const e = [];
            for (let r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
            return e;
          })(e),
          t,
          r,
          n
        );
      }
      function M(t, e, r, n) {
        return Q(K(e), t, r, n);
      }
      function k(t, e, r, n) {
        return Q(
          (function (t, e) {
            let r, n, i;
            const o = [];
            for (let s = 0; s < t.length && !((e -= 2) < 0); ++s)
              (r = t.charCodeAt(s)),
                (n = r >> 8),
                (i = r % 256),
                o.push(i),
                o.push(n);
            return o;
          })(e, t.length - r),
          t,
          r,
          n
        );
      }
      function _(t, e, r) {
        return 0 === e && r === t.length
          ? n.fromByteArray(t)
          : n.fromByteArray(t.slice(e, r));
      }
      function C(t, e, r) {
        r = Math.min(t.length, r);
        const n = [];
        let i = e;
        for (; i < r; ) {
          const e = t[i];
          let o = null,
            s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
          if (i + s <= r) {
            let r, n, a, u;
            switch (s) {
              case 1:
                e < 128 && (o = e);
                break;
              case 2:
                (r = t[i + 1]),
                  128 === (192 & r) &&
                    ((u = ((31 & e) << 6) | (63 & r)), u > 127 && (o = u));
                break;
              case 3:
                (r = t[i + 1]),
                  (n = t[i + 2]),
                  128 === (192 & r) &&
                    128 === (192 & n) &&
                    ((u = ((15 & e) << 12) | ((63 & r) << 6) | (63 & n)),
                    u > 2047 && (u < 55296 || u > 57343) && (o = u));
                break;
              case 4:
                (r = t[i + 1]),
                  (n = t[i + 2]),
                  (a = t[i + 3]),
                  128 === (192 & r) &&
                    128 === (192 & n) &&
                    128 === (192 & a) &&
                    ((u =
                      ((15 & e) << 18) |
                      ((63 & r) << 12) |
                      ((63 & n) << 6) |
                      (63 & a)),
                    u > 65535 && u < 1114112 && (o = u));
            }
          }
          null === o
            ? ((o = 65533), (s = 1))
            : o > 65535 &&
              ((o -= 65536),
              n.push(((o >>> 10) & 1023) | 55296),
              (o = 56320 | (1023 & o))),
            n.push(o),
            (i += s);
        }
        return (function (t) {
          const e = t.length;
          if (e <= N) return String.fromCharCode.apply(String, t);
          let r = "",
            n = 0;
          for (; n < e; )
            r += String.fromCharCode.apply(String, t.slice(n, (n += N)));
          return r;
        })(n);
      }
      (e.kMaxLength = s),
        (u.TYPED_ARRAY_SUPPORT = (function () {
          try {
            const t = new Uint8Array(1),
              e = {
                foo: function () {
                  return 42;
                },
              };
            return (
              Object.setPrototypeOf(e, Uint8Array.prototype),
              Object.setPrototypeOf(t, e),
              42 === t.foo()
            );
          } catch (t) {
            return !1;
          }
        })()),
        u.TYPED_ARRAY_SUPPORT ||
          "undefined" === typeof console ||
          "function" !== typeof console.error ||
          console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
          ),
        Object.defineProperty(u.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (u.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(u.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (u.isBuffer(this)) return this.byteOffset;
          },
        }),
        (u.poolSize = 8192),
        (u.from = function (t, e, r) {
          return c(t, e, r);
        }),
        Object.setPrototypeOf(u.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(u, Uint8Array),
        (u.alloc = function (t, e, r) {
          return (function (t, e, r) {
            return (
              l(t),
              t <= 0
                ? a(t)
                : void 0 !== e
                ? "string" === typeof r
                  ? a(t).fill(e, r)
                  : a(t).fill(e)
                : a(t)
            );
          })(t, e, r);
        }),
        (u.allocUnsafe = function (t) {
          return h(t);
        }),
        (u.allocUnsafeSlow = function (t) {
          return h(t);
        }),
        (u.isBuffer = function (t) {
          return null != t && !0 === t._isBuffer && t !== u.prototype;
        }),
        (u.compare = function (t, e) {
          if (
            (W(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
            W(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)),
            !u.isBuffer(t) || !u.isBuffer(e))
          )
            throw new TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            );
          if (t === e) return 0;
          let r = t.length,
            n = e.length;
          for (let i = 0, o = Math.min(r, n); i < o; ++i)
            if (t[i] !== e[i]) {
              (r = t[i]), (n = e[i]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }),
        (u.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (u.concat = function (t, e) {
          if (!Array.isArray(t))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return u.alloc(0);
          let r;
          if (void 0 === e)
            for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
          const n = u.allocUnsafe(e);
          let i = 0;
          for (r = 0; r < t.length; ++r) {
            let e = t[r];
            if (W(e, Uint8Array))
              i + e.length > n.length
                ? (u.isBuffer(e) || (e = u.from(e)), e.copy(n, i))
                : Uint8Array.prototype.set.call(n, e, i);
            else {
              if (!u.isBuffer(e))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              e.copy(n, i);
            }
            i += e.length;
          }
          return n;
        }),
        (u.byteLength = m),
        (u.prototype._isBuffer = !0),
        (u.prototype.swap16 = function () {
          const t = this.length;
          if (t % 2 !== 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (let e = 0; e < t; e += 2) v(this, e, e + 1);
          return this;
        }),
        (u.prototype.swap32 = function () {
          const t = this.length;
          if (t % 4 !== 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (let e = 0; e < t; e += 4)
            v(this, e, e + 3), v(this, e + 1, e + 2);
          return this;
        }),
        (u.prototype.swap64 = function () {
          const t = this.length;
          if (t % 8 !== 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (let e = 0; e < t; e += 8)
            v(this, e, e + 7),
              v(this, e + 1, e + 6),
              v(this, e + 2, e + 5),
              v(this, e + 3, e + 4);
          return this;
        }),
        (u.prototype.toString = function () {
          const t = this.length;
          return 0 === t
            ? ""
            : 0 === arguments.length
            ? C(this, 0, t)
            : g.apply(this, arguments);
        }),
        (u.prototype.toLocaleString = u.prototype.toString),
        (u.prototype.equals = function (t) {
          if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
          return this === t || 0 === u.compare(this, t);
        }),
        (u.prototype.inspect = function () {
          let t = "";
          const r = e.INSPECT_MAX_BYTES;
          return (
            (t = this.toString("hex", 0, r)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > r && (t += " ... "),
            "<Buffer " + t + ">"
          );
        }),
        o && (u.prototype[o] = u.prototype.inspect),
        (u.prototype.compare = function (t, e, r, n, i) {
          if (
            (W(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
            !u.isBuffer(t))
          )
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof t
            );
          if (
            (void 0 === e && (e = 0),
            void 0 === r && (r = t ? t.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            e < 0 || r > t.length || n < 0 || i > this.length)
          )
            throw new RangeError("out of range index");
          if (n >= i && e >= r) return 0;
          if (n >= i) return -1;
          if (e >= r) return 1;
          if (this === t) return 0;
          let o = (i >>>= 0) - (n >>>= 0),
            s = (r >>>= 0) - (e >>>= 0);
          const a = Math.min(o, s),
            c = this.slice(n, i),
            l = t.slice(e, r);
          for (let u = 0; u < a; ++u)
            if (c[u] !== l[u]) {
              (o = c[u]), (s = l[u]);
              break;
            }
          return o < s ? -1 : s < o ? 1 : 0;
        }),
        (u.prototype.includes = function (t, e, r) {
          return -1 !== this.indexOf(t, e, r);
        }),
        (u.prototype.indexOf = function (t, e, r) {
          return y(this, t, e, r, !0);
        }),
        (u.prototype.lastIndexOf = function (t, e, r) {
          return y(this, t, e, r, !1);
        }),
        (u.prototype.write = function (t, e, r, n) {
          if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
          else if (void 0 === r && "string" === typeof e)
            (n = e), (r = this.length), (e = 0);
          else {
            if (!isFinite(e))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            (e >>>= 0),
              isFinite(r)
                ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                : ((n = r), (r = void 0));
          }
          const i = this.length - e;
          if (
            ((void 0 === r || r > i) && (r = i),
            (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          n || (n = "utf8");
          let o = !1;
          for (;;)
            switch (n) {
              case "hex":
                return b(this, t, e, r);
              case "utf8":
              case "utf-8":
                return A(this, t, e, r);
              case "ascii":
              case "latin1":
              case "binary":
                return E(this, t, e, r);
              case "base64":
                return M(this, t, e, r);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return k(this, t, e, r);
              default:
                if (o) throw new TypeError("Unknown encoding: " + n);
                (n = ("" + n).toLowerCase()), (o = !0);
            }
        }),
        (u.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      const N = 4096;
      function I(t, e, r) {
        let n = "";
        r = Math.min(t.length, r);
        for (let i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
        return n;
      }
      function O(t, e, r) {
        let n = "";
        r = Math.min(t.length, r);
        for (let i = e; i < r; ++i) n += String.fromCharCode(t[i]);
        return n;
      }
      function P(t, e, r) {
        const n = t.length;
        (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
        let i = "";
        for (let o = e; o < r; ++o) i += Z[t[o]];
        return i;
      }
      function S(t, e, r) {
        const n = t.slice(e, r);
        let i = "";
        for (let o = 0; o < n.length - 1; o += 2)
          i += String.fromCharCode(n[o] + 256 * n[o + 1]);
        return i;
      }
      function x(t, e, r) {
        if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");
        if (t + e > r)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function R(t, e, r, n, i, o) {
        if (!u.isBuffer(t))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e > i || e < o)
          throw new RangeError('"value" argument is out of bounds');
        if (r + n > t.length) throw new RangeError("Index out of range");
      }
      function T(t, e, r, n, i) {
        q(e, n, i, t, r, 7);
        let o = Number(e & BigInt(4294967295));
        (t[r++] = o),
          (o >>= 8),
          (t[r++] = o),
          (o >>= 8),
          (t[r++] = o),
          (o >>= 8),
          (t[r++] = o);
        let s = Number((e >> BigInt(32)) & BigInt(4294967295));
        return (
          (t[r++] = s),
          (s >>= 8),
          (t[r++] = s),
          (s >>= 8),
          (t[r++] = s),
          (s >>= 8),
          (t[r++] = s),
          r
        );
      }
      function B(t, e, r, n, i) {
        q(e, n, i, t, r, 7);
        let o = Number(e & BigInt(4294967295));
        (t[r + 7] = o),
          (o >>= 8),
          (t[r + 6] = o),
          (o >>= 8),
          (t[r + 5] = o),
          (o >>= 8),
          (t[r + 4] = o);
        let s = Number((e >> BigInt(32)) & BigInt(4294967295));
        return (
          (t[r + 3] = s),
          (s >>= 8),
          (t[r + 2] = s),
          (s >>= 8),
          (t[r + 1] = s),
          (s >>= 8),
          (t[r] = s),
          r + 8
        );
      }
      function L(t, e, r, n, i, o) {
        if (r + n > t.length) throw new RangeError("Index out of range");
        if (r < 0) throw new RangeError("Index out of range");
      }
      function U(t, e, r, n, o) {
        return (
          (e = +e),
          (r >>>= 0),
          o || L(t, 0, r, 4),
          i.write(t, e, r, n, 23, 4),
          r + 4
        );
      }
      function D(t, e, r, n, o) {
        return (
          (e = +e),
          (r >>>= 0),
          o || L(t, 0, r, 8),
          i.write(t, e, r, n, 52, 8),
          r + 8
        );
      }
      (u.prototype.slice = function (t, e) {
        const r = this.length;
        (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
          (e = void 0 === e ? r : ~~e) < 0
            ? (e += r) < 0 && (e = 0)
            : e > r && (e = r),
          e < t && (e = t);
        const n = this.subarray(t, e);
        return Object.setPrototypeOf(n, u.prototype), n;
      }),
        (u.prototype.readUintLE = u.prototype.readUIntLE =
          function (t, e, r) {
            (t >>>= 0), (e >>>= 0), r || x(t, e, this.length);
            let n = this[t],
              i = 1,
              o = 0;
            for (; ++o < e && (i *= 256); ) n += this[t + o] * i;
            return n;
          }),
        (u.prototype.readUintBE = u.prototype.readUIntBE =
          function (t, e, r) {
            (t >>>= 0), (e >>>= 0), r || x(t, e, this.length);
            let n = this[t + --e],
              i = 1;
            for (; e > 0 && (i *= 256); ) n += this[t + --e] * i;
            return n;
          }),
        (u.prototype.readUint8 = u.prototype.readUInt8 =
          function (t, e) {
            return (t >>>= 0), e || x(t, 1, this.length), this[t];
          }),
        (u.prototype.readUint16LE = u.prototype.readUInt16LE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || x(t, 2, this.length),
              this[t] | (this[t + 1] << 8)
            );
          }),
        (u.prototype.readUint16BE = u.prototype.readUInt16BE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || x(t, 2, this.length),
              (this[t] << 8) | this[t + 1]
            );
          }),
        (u.prototype.readUint32LE = u.prototype.readUInt32LE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || x(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                16777216 * this[t + 3]
            );
          }),
        (u.prototype.readUint32BE = u.prototype.readUInt32BE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || x(t, 4, this.length),
              16777216 * this[t] +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
        (u.prototype.readBigUInt64LE = X(function (t) {
          G((t >>>= 0), "offset");
          const e = this[t],
            r = this[t + 7];
          (void 0 !== e && void 0 !== r) || Y(t, this.length - 8);
          const n =
              e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
            i = this[++t] + 256 * this[++t] + 65536 * this[++t] + r * 2 ** 24;
          return BigInt(n) + (BigInt(i) << BigInt(32));
        })),
        (u.prototype.readBigUInt64BE = X(function (t) {
          G((t >>>= 0), "offset");
          const e = this[t],
            r = this[t + 7];
          (void 0 !== e && void 0 !== r) || Y(t, this.length - 8);
          const n =
              e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
            i = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r;
          return (BigInt(n) << BigInt(32)) + BigInt(i);
        })),
        (u.prototype.readIntLE = function (t, e, r) {
          (t >>>= 0), (e >>>= 0), r || x(t, e, this.length);
          let n = this[t],
            i = 1,
            o = 0;
          for (; ++o < e && (i *= 256); ) n += this[t + o] * i;
          return (i *= 128), n >= i && (n -= Math.pow(2, 8 * e)), n;
        }),
        (u.prototype.readIntBE = function (t, e, r) {
          (t >>>= 0), (e >>>= 0), r || x(t, e, this.length);
          let n = e,
            i = 1,
            o = this[t + --n];
          for (; n > 0 && (i *= 256); ) o += this[t + --n] * i;
          return (i *= 128), o >= i && (o -= Math.pow(2, 8 * e)), o;
        }),
        (u.prototype.readInt8 = function (t, e) {
          return (
            (t >>>= 0),
            e || x(t, 1, this.length),
            128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
          );
        }),
        (u.prototype.readInt16LE = function (t, e) {
          (t >>>= 0), e || x(t, 2, this.length);
          const r = this[t] | (this[t + 1] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (u.prototype.readInt16BE = function (t, e) {
          (t >>>= 0), e || x(t, 2, this.length);
          const r = this[t + 1] | (this[t] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (u.prototype.readInt32LE = function (t, e) {
          return (
            (t >>>= 0),
            e || x(t, 4, this.length),
            this[t] |
              (this[t + 1] << 8) |
              (this[t + 2] << 16) |
              (this[t + 3] << 24)
          );
        }),
        (u.prototype.readInt32BE = function (t, e) {
          return (
            (t >>>= 0),
            e || x(t, 4, this.length),
            (this[t] << 24) |
              (this[t + 1] << 16) |
              (this[t + 2] << 8) |
              this[t + 3]
          );
        }),
        (u.prototype.readBigInt64LE = X(function (t) {
          G((t >>>= 0), "offset");
          const e = this[t],
            r = this[t + 7];
          (void 0 !== e && void 0 !== r) || Y(t, this.length - 8);
          const n =
            this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24);
          return (
            (BigInt(n) << BigInt(32)) +
            BigInt(
              e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24
            )
          );
        })),
        (u.prototype.readBigInt64BE = X(function (t) {
          G((t >>>= 0), "offset");
          const e = this[t],
            r = this[t + 7];
          (void 0 !== e && void 0 !== r) || Y(t, this.length - 8);
          const n = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
          return (
            (BigInt(n) << BigInt(32)) +
            BigInt(
              this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r
            )
          );
        })),
        (u.prototype.readFloatLE = function (t, e) {
          return (
            (t >>>= 0), e || x(t, 4, this.length), i.read(this, t, !0, 23, 4)
          );
        }),
        (u.prototype.readFloatBE = function (t, e) {
          return (
            (t >>>= 0), e || x(t, 4, this.length), i.read(this, t, !1, 23, 4)
          );
        }),
        (u.prototype.readDoubleLE = function (t, e) {
          return (
            (t >>>= 0), e || x(t, 8, this.length), i.read(this, t, !0, 52, 8)
          );
        }),
        (u.prototype.readDoubleBE = function (t, e) {
          return (
            (t >>>= 0), e || x(t, 8, this.length), i.read(this, t, !1, 52, 8)
          );
        }),
        (u.prototype.writeUintLE = u.prototype.writeUIntLE =
          function (t, e, r, n) {
            if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
              R(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            }
            let i = 1,
              o = 0;
            for (this[e] = 255 & t; ++o < r && (i *= 256); )
              this[e + o] = (t / i) & 255;
            return e + r;
          }),
        (u.prototype.writeUintBE = u.prototype.writeUIntBE =
          function (t, e, r, n) {
            if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
              R(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            }
            let i = r - 1,
              o = 1;
            for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
              this[e + i] = (t / o) & 255;
            return e + r;
          }),
        (u.prototype.writeUint8 = u.prototype.writeUInt8 =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || R(this, t, e, 1, 255, 0),
              (this[e] = 255 & t),
              e + 1
            );
          }),
        (u.prototype.writeUint16LE = u.prototype.writeUInt16LE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || R(this, t, e, 2, 65535, 0),
              (this[e] = 255 & t),
              (this[e + 1] = t >>> 8),
              e + 2
            );
          }),
        (u.prototype.writeUint16BE = u.prototype.writeUInt16BE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || R(this, t, e, 2, 65535, 0),
              (this[e] = t >>> 8),
              (this[e + 1] = 255 & t),
              e + 2
            );
          }),
        (u.prototype.writeUint32LE = u.prototype.writeUInt32LE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || R(this, t, e, 4, 4294967295, 0),
              (this[e + 3] = t >>> 24),
              (this[e + 2] = t >>> 16),
              (this[e + 1] = t >>> 8),
              (this[e] = 255 & t),
              e + 4
            );
          }),
        (u.prototype.writeUint32BE = u.prototype.writeUInt32BE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || R(this, t, e, 4, 4294967295, 0),
              (this[e] = t >>> 24),
              (this[e + 1] = t >>> 16),
              (this[e + 2] = t >>> 8),
              (this[e + 3] = 255 & t),
              e + 4
            );
          }),
        (u.prototype.writeBigUInt64LE = X(function (t, e = 0) {
          return T(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (u.prototype.writeBigUInt64BE = X(function (t, e = 0) {
          return B(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (u.prototype.writeIntLE = function (t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            const n = Math.pow(2, 8 * r - 1);
            R(this, t, e, r, n - 1, -n);
          }
          let i = 0,
            o = 1,
            s = 0;
          for (this[e] = 255 & t; ++i < r && (o *= 256); )
            t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1),
              (this[e + i] = (((t / o) >> 0) - s) & 255);
          return e + r;
        }),
        (u.prototype.writeIntBE = function (t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            const n = Math.pow(2, 8 * r - 1);
            R(this, t, e, r, n - 1, -n);
          }
          let i = r - 1,
            o = 1,
            s = 0;
          for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
            t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1),
              (this[e + i] = (((t / o) >> 0) - s) & 255);
          return e + r;
        }),
        (u.prototype.writeInt8 = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || R(this, t, e, 1, 127, -128),
            t < 0 && (t = 255 + t + 1),
            (this[e] = 255 & t),
            e + 1
          );
        }),
        (u.prototype.writeInt16LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || R(this, t, e, 2, 32767, -32768),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            e + 2
          );
        }),
        (u.prototype.writeInt16BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || R(this, t, e, 2, 32767, -32768),
            (this[e] = t >>> 8),
            (this[e + 1] = 255 & t),
            e + 2
          );
        }),
        (u.prototype.writeInt32LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || R(this, t, e, 4, 2147483647, -2147483648),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            (this[e + 2] = t >>> 16),
            (this[e + 3] = t >>> 24),
            e + 4
          );
        }),
        (u.prototype.writeInt32BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || R(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          );
        }),
        (u.prototype.writeBigInt64LE = X(function (t, e = 0) {
          return T(
            this,
            t,
            e,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff")
          );
        })),
        (u.prototype.writeBigInt64BE = X(function (t, e = 0) {
          return B(
            this,
            t,
            e,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff")
          );
        })),
        (u.prototype.writeFloatLE = function (t, e, r) {
          return U(this, t, e, !0, r);
        }),
        (u.prototype.writeFloatBE = function (t, e, r) {
          return U(this, t, e, !1, r);
        }),
        (u.prototype.writeDoubleLE = function (t, e, r) {
          return D(this, t, e, !0, r);
        }),
        (u.prototype.writeDoubleBE = function (t, e, r) {
          return D(this, t, e, !1, r);
        }),
        (u.prototype.copy = function (t, e, r, n) {
          if (!u.isBuffer(t))
            throw new TypeError("argument should be a Buffer");
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            n > 0 && n < r && (n = r),
            n === r)
          )
            return 0;
          if (0 === t.length || 0 === this.length) return 0;
          if (e < 0) throw new RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length)
            throw new RangeError("Index out of range");
          if (n < 0) throw new RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length),
            t.length - e < n - r && (n = t.length - e + r);
          const i = n - r;
          return (
            this === t && "function" === typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(e, r, n)
              : Uint8Array.prototype.set.call(t, this.subarray(r, n), e),
            i
          );
        }),
        (u.prototype.fill = function (t, e, r, n) {
          if ("string" === typeof t) {
            if (
              ("string" === typeof e
                ? ((n = e), (e = 0), (r = this.length))
                : "string" === typeof r && ((n = r), (r = this.length)),
              void 0 !== n && "string" !== typeof n)
            )
              throw new TypeError("encoding must be a string");
            if ("string" === typeof n && !u.isEncoding(n))
              throw new TypeError("Unknown encoding: " + n);
            if (1 === t.length) {
              const e = t.charCodeAt(0);
              (("utf8" === n && e < 128) || "latin1" === n) && (t = e);
            }
          } else
            "number" === typeof t
              ? (t &= 255)
              : "boolean" === typeof t && (t = Number(t));
          if (e < 0 || this.length < e || this.length < r)
            throw new RangeError("Out of range index");
          if (r <= e) return this;
          let i;
          if (
            ((e >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            t || (t = 0),
            "number" === typeof t)
          )
            for (i = e; i < r; ++i) this[i] = t;
          else {
            const o = u.isBuffer(t) ? t : u.from(t, n),
              s = o.length;
            if (0 === s)
              throw new TypeError(
                'The value "' + t + '" is invalid for argument "value"'
              );
            for (i = 0; i < r - e; ++i) this[i + e] = o[i % s];
          }
          return this;
        });
      const j = {};
      function F(t, e, r) {
        j[t] = class extends r {
          constructor() {
            super(),
              Object.defineProperty(this, "message", {
                value: e.apply(this, arguments),
                writable: !0,
                configurable: !0,
              }),
              (this.name = `${this.name} [${t}]`),
              this.stack,
              delete this.name;
          }
          get code() {
            return t;
          }
          set code(t) {
            Object.defineProperty(this, "code", {
              configurable: !0,
              enumerable: !0,
              value: t,
              writable: !0,
            });
          }
          toString() {
            return `${this.name} [${t}]: ${this.message}`;
          }
        };
      }
      function z(t) {
        let e = "",
          r = t.length;
        const n = "-" === t[0] ? 1 : 0;
        for (; r >= n + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
        return `${t.slice(0, r)}${e}`;
      }
      function q(t, e, r, n, i, o) {
        if (t > r || t < e) {
          const n = "bigint" === typeof e ? "n" : "";
          let i;
          throw (
            ((i =
              o > 3
                ? 0 === e || e === BigInt(0)
                  ? `>= 0${n} and < 2${n} ** ${8 * (o + 1)}${n}`
                  : `>= -(2${n} ** ${8 * (o + 1) - 1}${n}) and < 2 ** ${
                      8 * (o + 1) - 1
                    }${n}`
                : `>= ${e}${n} and <= ${r}${n}`),
            new j.ERR_OUT_OF_RANGE("value", i, t))
          );
        }
        !(function (t, e, r) {
          G(e, "offset"),
            (void 0 !== t[e] && void 0 !== t[e + r]) ||
              Y(e, t.length - (r + 1));
        })(n, i, o);
      }
      function G(t, e) {
        if ("number" !== typeof t)
          throw new j.ERR_INVALID_ARG_TYPE(e, "number", t);
      }
      function Y(t, e, r) {
        if (Math.floor(t) !== t)
          throw (
            (G(t, r), new j.ERR_OUT_OF_RANGE(r || "offset", "an integer", t))
          );
        if (e < 0) throw new j.ERR_BUFFER_OUT_OF_BOUNDS();
        throw new j.ERR_OUT_OF_RANGE(
          r || "offset",
          `>= ${r ? 1 : 0} and <= ${e}`,
          t
        );
      }
      F(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function (t) {
          return t
            ? `${t} is outside of buffer bounds`
            : "Attempt to access memory outside buffer bounds";
        },
        RangeError
      ),
        F(
          "ERR_INVALID_ARG_TYPE",
          function (t, e) {
            return `The "${t}" argument must be of type number. Received type ${typeof e}`;
          },
          TypeError
        ),
        F(
          "ERR_OUT_OF_RANGE",
          function (t, e, r) {
            let n = `The value of "${t}" is out of range.`,
              i = r;
            return (
              Number.isInteger(r) && Math.abs(r) > 2 ** 32
                ? (i = z(String(r)))
                : "bigint" === typeof r &&
                  ((i = String(r)),
                  (r > BigInt(2) ** BigInt(32) ||
                    r < -(BigInt(2) ** BigInt(32))) &&
                    (i = z(i)),
                  (i += "n")),
              (n += ` It must be ${e}. Received ${i}`),
              n
            );
          },
          RangeError
        );
      const J = /[^+/0-9A-Za-z-_]/g;
      function H(t, e) {
        let r;
        e = e || 1 / 0;
        const n = t.length;
        let i = null;
        const o = [];
        for (let s = 0; s < n; ++s) {
          if (((r = t.charCodeAt(s)), r > 55295 && r < 57344)) {
            if (!i) {
              if (r > 56319) {
                (e -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              if (s + 1 === n) {
                (e -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              (e -= 3) > -1 && o.push(239, 191, 189), (i = r);
              continue;
            }
            r = 65536 + (((i - 55296) << 10) | (r - 56320));
          } else i && (e -= 3) > -1 && o.push(239, 191, 189);
          if (((i = null), r < 128)) {
            if ((e -= 1) < 0) break;
            o.push(r);
          } else if (r < 2048) {
            if ((e -= 2) < 0) break;
            o.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((e -= 3) < 0) break;
            o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else {
            if (!(r < 1114112)) throw new Error("Invalid code point");
            if ((e -= 4) < 0) break;
            o.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          }
        }
        return o;
      }
      function K(t) {
        return n.toByteArray(
          (function (t) {
            if ((t = (t = t.split("=")[0]).trim().replace(J, "")).length < 2)
              return "";
            for (; t.length % 4 !== 0; ) t += "=";
            return t;
          })(t)
        );
      }
      function Q(t, e, r, n) {
        let i;
        for (i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i)
          e[i + r] = t[i];
        return i;
      }
      function W(t, e) {
        return (
          t instanceof e ||
          (null != t &&
            null != t.constructor &&
            null != t.constructor.name &&
            t.constructor.name === e.name)
        );
      }
      function V(t) {
        return t !== t;
      }
      const Z = (function () {
        const t = "0123456789abcdef",
          e = new Array(256);
        for (let r = 0; r < 16; ++r) {
          const n = 16 * r;
          for (let i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
        }
        return e;
      })();
      function X(t) {
        return "undefined" === typeof BigInt ? $ : t;
      }
      function $() {
        throw new Error("BigInt not supported");
      }
    },
    38867: function (t) {
      "use strict";
      var e,
        r = "object" === typeof Reflect ? Reflect : null,
        n =
          r && "function" === typeof r.apply
            ? r.apply
            : function (t, e, r) {
                return Function.prototype.apply.call(t, e, r);
              };
      e =
        r && "function" === typeof r.ownKeys
          ? r.ownKeys
          : Object.getOwnPropertySymbols
          ? function (t) {
              return Object.getOwnPropertyNames(t).concat(
                Object.getOwnPropertySymbols(t)
              );
            }
          : function (t) {
              return Object.getOwnPropertyNames(t);
            };
      var i =
        Number.isNaN ||
        function (t) {
          return t !== t;
        };
      function o() {
        o.init.call(this);
      }
      (t.exports = o),
        (t.exports.once = function (t, e) {
          return new Promise(function (r, n) {
            function i(r) {
              t.removeListener(e, o), n(r);
            }
            function o() {
              "function" === typeof t.removeListener &&
                t.removeListener("error", i),
                r([].slice.call(arguments));
            }
            m(t, e, o, { once: !0 }),
              "error" !== e &&
                (function (t, e, r) {
                  "function" === typeof t.on && m(t, "error", e, r);
                })(t, i, { once: !0 });
          });
        }),
        (o.EventEmitter = o),
        (o.prototype._events = void 0),
        (o.prototype._eventsCount = 0),
        (o.prototype._maxListeners = void 0);
      var s = 10;
      function a(t) {
        if ("function" !== typeof t)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof t
          );
      }
      function u(t) {
        return void 0 === t._maxListeners
          ? o.defaultMaxListeners
          : t._maxListeners;
      }
      function c(t, e, r, n) {
        var i, o, s, c;
        if (
          (a(r),
          void 0 === (o = t._events)
            ? ((o = t._events = Object.create(null)), (t._eventsCount = 0))
            : (void 0 !== o.newListener &&
                (t.emit("newListener", e, r.listener ? r.listener : r),
                (o = t._events)),
              (s = o[e])),
          void 0 === s)
        )
          (s = o[e] = r), ++t._eventsCount;
        else if (
          ("function" === typeof s
            ? (s = o[e] = n ? [r, s] : [s, r])
            : n
            ? s.unshift(r)
            : s.push(r),
          (i = u(t)) > 0 && s.length > i && !s.warned)
        ) {
          s.warned = !0;
          var l = new Error(
            "Possible EventEmitter memory leak detected. " +
              s.length +
              " " +
              String(e) +
              " listeners added. Use emitter.setMaxListeners() to increase limit"
          );
          (l.name = "MaxListenersExceededWarning"),
            (l.emitter = t),
            (l.type = e),
            (l.count = s.length),
            (c = l),
            console && console.warn && console.warn(c);
        }
        return t;
      }
      function l() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function h(t, e, r) {
        var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r },
          i = l.bind(n);
        return (i.listener = r), (n.wrapFn = i), i;
      }
      function f(t, e, r) {
        var n = t._events;
        if (void 0 === n) return [];
        var i = n[e];
        return void 0 === i
          ? []
          : "function" === typeof i
          ? r
            ? [i.listener || i]
            : [i]
          : r
          ? (function (t) {
              for (var e = new Array(t.length), r = 0; r < e.length; ++r)
                e[r] = t[r].listener || t[r];
              return e;
            })(i)
          : p(i, i.length);
      }
      function d(t) {
        var e = this._events;
        if (void 0 !== e) {
          var r = e[t];
          if ("function" === typeof r) return 1;
          if (void 0 !== r) return r.length;
        }
        return 0;
      }
      function p(t, e) {
        for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
        return r;
      }
      function m(t, e, r, n) {
        if ("function" === typeof t.on) n.once ? t.once(e, r) : t.on(e, r);
        else {
          if ("function" !== typeof t.addEventListener)
            throw new TypeError(
              'The "emitter" argument must be of type EventEmitter. Received type ' +
                typeof t
            );
          t.addEventListener(e, function i(o) {
            n.once && t.removeEventListener(e, i), r(o);
          });
        }
      }
      Object.defineProperty(o, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return s;
        },
        set: function (t) {
          if ("number" !== typeof t || t < 0 || i(t))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                t +
                "."
            );
          s = t;
        },
      }),
        (o.init = function () {
          (void 0 !== this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (o.prototype.setMaxListeners = function (t) {
          if ("number" !== typeof t || t < 0 || i(t))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                t +
                "."
            );
          return (this._maxListeners = t), this;
        }),
        (o.prototype.getMaxListeners = function () {
          return u(this);
        }),
        (o.prototype.emit = function (t) {
          for (var e = [], r = 1; r < arguments.length; r++)
            e.push(arguments[r]);
          var i = "error" === t,
            o = this._events;
          if (void 0 !== o) i = i && void 0 === o.error;
          else if (!i) return !1;
          if (i) {
            var s;
            if ((e.length > 0 && (s = e[0]), s instanceof Error)) throw s;
            var a = new Error(
              "Unhandled error." + (s ? " (" + s.message + ")" : "")
            );
            throw ((a.context = s), a);
          }
          var u = o[t];
          if (void 0 === u) return !1;
          if ("function" === typeof u) n(u, this, e);
          else {
            var c = u.length,
              l = p(u, c);
            for (r = 0; r < c; ++r) n(l[r], this, e);
          }
          return !0;
        }),
        (o.prototype.addListener = function (t, e) {
          return c(this, t, e, !1);
        }),
        (o.prototype.on = o.prototype.addListener),
        (o.prototype.prependListener = function (t, e) {
          return c(this, t, e, !0);
        }),
        (o.prototype.once = function (t, e) {
          return a(e), this.on(t, h(this, t, e)), this;
        }),
        (o.prototype.prependOnceListener = function (t, e) {
          return a(e), this.prependListener(t, h(this, t, e)), this;
        }),
        (o.prototype.removeListener = function (t, e) {
          var r, n, i, o, s;
          if ((a(e), void 0 === (n = this._events))) return this;
          if (void 0 === (r = n[t])) return this;
          if (r === e || r.listener === e)
            0 === --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete n[t],
                n.removeListener &&
                  this.emit("removeListener", t, r.listener || e));
          else if ("function" !== typeof r) {
            for (i = -1, o = r.length - 1; o >= 0; o--)
              if (r[o] === e || r[o].listener === e) {
                (s = r[o].listener), (i = o);
                break;
              }
            if (i < 0) return this;
            0 === i
              ? r.shift()
              : (function (t, e) {
                  for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                  t.pop();
                })(r, i),
              1 === r.length && (n[t] = r[0]),
              void 0 !== n.removeListener &&
                this.emit("removeListener", t, s || e);
          }
          return this;
        }),
        (o.prototype.off = o.prototype.removeListener),
        (o.prototype.removeAllListeners = function (t) {
          var e, r, n;
          if (void 0 === (r = this._events)) return this;
          if (void 0 === r.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== r[t] &&
                  (0 === --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete r[t]),
              this
            );
          if (0 === arguments.length) {
            var i,
              o = Object.keys(r);
            for (n = 0; n < o.length; ++n)
              "removeListener" !== (i = o[n]) && this.removeAllListeners(i);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" === typeof (e = r[t])) this.removeListener(t, e);
          else if (void 0 !== e)
            for (n = e.length - 1; n >= 0; n--) this.removeListener(t, e[n]);
          return this;
        }),
        (o.prototype.listeners = function (t) {
          return f(this, t, !0);
        }),
        (o.prototype.rawListeners = function (t) {
          return f(this, t, !1);
        }),
        (o.listenerCount = function (t, e) {
          return "function" === typeof t.listenerCount
            ? t.listenerCount(e)
            : d.call(t, e);
        }),
        (o.prototype.listenerCount = d),
        (o.prototype.eventNames = function () {
          return this._eventsCount > 0 ? e(this._events) : [];
        });
    },
    31206: function (t, e, r) {
      var n = e;
      (n.utils = r(45753)),
        (n.common = r(5975)),
        (n.sha = r(58673)),
        (n.ripemd = r(59941)),
        (n.hmac = r(43019)),
        (n.sha1 = n.sha.sha1),
        (n.sha256 = n.sha.sha256),
        (n.sha224 = n.sha.sha224),
        (n.sha384 = n.sha.sha384),
        (n.sha512 = n.sha.sha512),
        (n.ripemd160 = n.ripemd.ripemd160);
    },
    5975: function (t, e, r) {
      "use strict";
      var n = r(45753),
        i = r(78718);
      function o() {
        (this.pending = null),
          (this.pendingTotal = 0),
          (this.blockSize = this.constructor.blockSize),
          (this.outSize = this.constructor.outSize),
          (this.hmacStrength = this.constructor.hmacStrength),
          (this.padLength = this.constructor.padLength / 8),
          (this.endian = "big"),
          (this._delta8 = this.blockSize / 8),
          (this._delta32 = this.blockSize / 32);
      }
      (e.BlockHash = o),
        (o.prototype.update = function (t, e) {
          if (
            ((t = n.toArray(t, e)),
            this.pending
              ? (this.pending = this.pending.concat(t))
              : (this.pending = t),
            (this.pendingTotal += t.length),
            this.pending.length >= this._delta8)
          ) {
            var r = (t = this.pending).length % this._delta8;
            (this.pending = t.slice(t.length - r, t.length)),
              0 === this.pending.length && (this.pending = null),
              (t = n.join32(t, 0, t.length - r, this.endian));
            for (var i = 0; i < t.length; i += this._delta32)
              this._update(t, i, i + this._delta32);
          }
          return this;
        }),
        (o.prototype.digest = function (t) {
          return (
            this.update(this._pad()), i(null === this.pending), this._digest(t)
          );
        }),
        (o.prototype._pad = function () {
          var t = this.pendingTotal,
            e = this._delta8,
            r = e - ((t + this.padLength) % e),
            n = new Array(r + this.padLength);
          n[0] = 128;
          for (var i = 1; i < r; i++) n[i] = 0;
          if (((t <<= 3), "big" === this.endian)) {
            for (var o = 8; o < this.padLength; o++) n[i++] = 0;
            (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = (t >>> 24) & 255),
              (n[i++] = (t >>> 16) & 255),
              (n[i++] = (t >>> 8) & 255),
              (n[i++] = 255 & t);
          } else
            for (
              n[i++] = 255 & t,
                n[i++] = (t >>> 8) & 255,
                n[i++] = (t >>> 16) & 255,
                n[i++] = (t >>> 24) & 255,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                o = 8;
              o < this.padLength;
              o++
            )
              n[i++] = 0;
          return n;
        });
    },
    43019: function (t, e, r) {
      "use strict";
      var n = r(45753),
        i = r(78718);
      function o(t, e, r) {
        if (!(this instanceof o)) return new o(t, e, r);
        (this.Hash = t),
          (this.blockSize = t.blockSize / 8),
          (this.outSize = t.outSize / 8),
          (this.inner = null),
          (this.outer = null),
          this._init(n.toArray(e, r));
      }
      (t.exports = o),
        (o.prototype._init = function (t) {
          t.length > this.blockSize && (t = new this.Hash().update(t).digest()),
            i(t.length <= this.blockSize);
          for (var e = t.length; e < this.blockSize; e++) t.push(0);
          for (e = 0; e < t.length; e++) t[e] ^= 54;
          for (this.inner = new this.Hash().update(t), e = 0; e < t.length; e++)
            t[e] ^= 106;
          this.outer = new this.Hash().update(t);
        }),
        (o.prototype.update = function (t, e) {
          return this.inner.update(t, e), this;
        }),
        (o.prototype.digest = function (t) {
          return this.outer.update(this.inner.digest()), this.outer.digest(t);
        });
    },
    59941: function (t, e, r) {
      "use strict";
      var n = r(45753),
        i = r(5975),
        o = n.rotl32,
        s = n.sum32,
        a = n.sum32_3,
        u = n.sum32_4,
        c = i.BlockHash;
      function l() {
        if (!(this instanceof l)) return new l();
        c.call(this),
          (this.h = [
            1732584193, 4023233417, 2562383102, 271733878, 3285377520,
          ]),
          (this.endian = "little");
      }
      function h(t, e, r, n) {
        return t <= 15
          ? e ^ r ^ n
          : t <= 31
          ? (e & r) | (~e & n)
          : t <= 47
          ? (e | ~r) ^ n
          : t <= 63
          ? (e & n) | (r & ~n)
          : e ^ (r | ~n);
      }
      function f(t) {
        return t <= 15
          ? 0
          : t <= 31
          ? 1518500249
          : t <= 47
          ? 1859775393
          : t <= 63
          ? 2400959708
          : 2840853838;
      }
      function d(t) {
        return t <= 15
          ? 1352829926
          : t <= 31
          ? 1548603684
          : t <= 47
          ? 1836072691
          : t <= 63
          ? 2053994217
          : 0;
      }
      n.inherits(l, c),
        (e.ripemd160 = l),
        (l.blockSize = 512),
        (l.outSize = 160),
        (l.hmacStrength = 192),
        (l.padLength = 64),
        (l.prototype._update = function (t, e) {
          for (
            var r = this.h[0],
              n = this.h[1],
              i = this.h[2],
              c = this.h[3],
              l = this.h[4],
              y = r,
              w = n,
              b = i,
              A = c,
              E = l,
              M = 0;
            M < 80;
            M++
          ) {
            var k = s(o(u(r, h(M, n, i, c), t[p[M] + e], f(M)), g[M]), l);
            (r = l),
              (l = c),
              (c = o(i, 10)),
              (i = n),
              (n = k),
              (k = s(o(u(y, h(79 - M, w, b, A), t[m[M] + e], d(M)), v[M]), E)),
              (y = E),
              (E = A),
              (A = o(b, 10)),
              (b = w),
              (w = k);
          }
          (k = a(this.h[1], i, A)),
            (this.h[1] = a(this.h[2], c, E)),
            (this.h[2] = a(this.h[3], l, y)),
            (this.h[3] = a(this.h[4], r, w)),
            (this.h[4] = a(this.h[0], n, b)),
            (this.h[0] = k);
        }),
        (l.prototype._digest = function (t) {
          return "hex" === t
            ? n.toHex32(this.h, "little")
            : n.split32(this.h, "little");
        });
      var p = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10,
          6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7,
          0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5,
          6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
        ],
        m = [
          5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0,
          13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8,
          12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10,
          14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
        ],
        g = [
          11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13,
          11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13,
          15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5,
          6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5,
          6,
        ],
        v = [
          8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7,
          12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14,
          12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9,
          12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
        ];
    },
    58673: function (t, e, r) {
      "use strict";
      (e.sha1 = r(90734)),
        (e.sha224 = r(22249)),
        (e.sha256 = r(91498)),
        (e.sha384 = r(71131)),
        (e.sha512 = r(42145));
    },
    90734: function (t, e, r) {
      "use strict";
      var n = r(45753),
        i = r(5975),
        o = r(19579),
        s = n.rotl32,
        a = n.sum32,
        u = n.sum32_5,
        c = o.ft_1,
        l = i.BlockHash,
        h = [1518500249, 1859775393, 2400959708, 3395469782];
      function f() {
        if (!(this instanceof f)) return new f();
        l.call(this),
          (this.h = [
            1732584193, 4023233417, 2562383102, 271733878, 3285377520,
          ]),
          (this.W = new Array(80));
      }
      n.inherits(f, l),
        (t.exports = f),
        (f.blockSize = 512),
        (f.outSize = 160),
        (f.hmacStrength = 80),
        (f.padLength = 64),
        (f.prototype._update = function (t, e) {
          for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n];
          for (; n < r.length; n++)
            r[n] = s(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
          var i = this.h[0],
            o = this.h[1],
            l = this.h[2],
            f = this.h[3],
            d = this.h[4];
          for (n = 0; n < r.length; n++) {
            var p = ~~(n / 20),
              m = u(s(i, 5), c(p, o, l, f), d, r[n], h[p]);
            (d = f), (f = l), (l = s(o, 30)), (o = i), (i = m);
          }
          (this.h[0] = a(this.h[0], i)),
            (this.h[1] = a(this.h[1], o)),
            (this.h[2] = a(this.h[2], l)),
            (this.h[3] = a(this.h[3], f)),
            (this.h[4] = a(this.h[4], d));
        }),
        (f.prototype._digest = function (t) {
          return "hex" === t
            ? n.toHex32(this.h, "big")
            : n.split32(this.h, "big");
        });
    },
    22249: function (t, e, r) {
      "use strict";
      var n = r(45753),
        i = r(91498);
      function o() {
        if (!(this instanceof o)) return new o();
        i.call(this),
          (this.h = [
            3238371032, 914150663, 812702999, 4144912697, 4290775857,
            1750603025, 1694076839, 3204075428,
          ]);
      }
      n.inherits(o, i),
        (t.exports = o),
        (o.blockSize = 512),
        (o.outSize = 224),
        (o.hmacStrength = 192),
        (o.padLength = 64),
        (o.prototype._digest = function (t) {
          return "hex" === t
            ? n.toHex32(this.h.slice(0, 7), "big")
            : n.split32(this.h.slice(0, 7), "big");
        });
    },
    91498: function (t, e, r) {
      "use strict";
      var n = r(45753),
        i = r(5975),
        o = r(19579),
        s = r(78718),
        a = n.sum32,
        u = n.sum32_4,
        c = n.sum32_5,
        l = o.ch32,
        h = o.maj32,
        f = o.s0_256,
        d = o.s1_256,
        p = o.g0_256,
        m = o.g1_256,
        g = i.BlockHash,
        v = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ];
      function y() {
        if (!(this instanceof y)) return new y();
        g.call(this),
          (this.h = [
            1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
            2600822924, 528734635, 1541459225,
          ]),
          (this.k = v),
          (this.W = new Array(64));
      }
      n.inherits(y, g),
        (t.exports = y),
        (y.blockSize = 512),
        (y.outSize = 256),
        (y.hmacStrength = 192),
        (y.padLength = 64),
        (y.prototype._update = function (t, e) {
          for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n];
          for (; n < r.length; n++)
            r[n] = u(m(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
          var i = this.h[0],
            o = this.h[1],
            g = this.h[2],
            v = this.h[3],
            y = this.h[4],
            w = this.h[5],
            b = this.h[6],
            A = this.h[7];
          for (s(this.k.length === r.length), n = 0; n < r.length; n++) {
            var E = c(A, d(y), l(y, w, b), this.k[n], r[n]),
              M = a(f(i), h(i, o, g));
            (A = b),
              (b = w),
              (w = y),
              (y = a(v, E)),
              (v = g),
              (g = o),
              (o = i),
              (i = a(E, M));
          }
          (this.h[0] = a(this.h[0], i)),
            (this.h[1] = a(this.h[1], o)),
            (this.h[2] = a(this.h[2], g)),
            (this.h[3] = a(this.h[3], v)),
            (this.h[4] = a(this.h[4], y)),
            (this.h[5] = a(this.h[5], w)),
            (this.h[6] = a(this.h[6], b)),
            (this.h[7] = a(this.h[7], A));
        }),
        (y.prototype._digest = function (t) {
          return "hex" === t
            ? n.toHex32(this.h, "big")
            : n.split32(this.h, "big");
        });
    },
    71131: function (t, e, r) {
      "use strict";
      var n = r(45753),
        i = r(42145);
      function o() {
        if (!(this instanceof o)) return new o();
        i.call(this),
          (this.h = [
            3418070365, 3238371032, 1654270250, 914150663, 2438529370,
            812702999, 355462360, 4144912697, 1731405415, 4290775857,
            2394180231, 1750603025, 3675008525, 1694076839, 1203062813,
            3204075428,
          ]);
      }
      n.inherits(o, i),
        (t.exports = o),
        (o.blockSize = 1024),
        (o.outSize = 384),
        (o.hmacStrength = 192),
        (o.padLength = 128),
        (o.prototype._digest = function (t) {
          return "hex" === t
            ? n.toHex32(this.h.slice(0, 12), "big")
            : n.split32(this.h.slice(0, 12), "big");
        });
    },
    42145: function (t, e, r) {
      "use strict";
      var n = r(45753),
        i = r(5975),
        o = r(78718),
        s = n.rotr64_hi,
        a = n.rotr64_lo,
        u = n.shr64_hi,
        c = n.shr64_lo,
        l = n.sum64,
        h = n.sum64_hi,
        f = n.sum64_lo,
        d = n.sum64_4_hi,
        p = n.sum64_4_lo,
        m = n.sum64_5_hi,
        g = n.sum64_5_lo,
        v = i.BlockHash,
        y = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
          3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
          2453635748, 2937671579, 2870763221, 3664609560, 3624381080,
          2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987,
          3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103,
          633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
          1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
          1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016,
          2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
          1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
          1522805485, 1396182291, 2643833823, 1695183700, 2343527390,
          1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
          2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
          3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
          3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
          3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
          2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
          2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
          2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
          3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
          174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
          1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591,
        ];
      function w() {
        if (!(this instanceof w)) return new w();
        v.call(this),
          (this.h = [
            1779033703, 4089235720, 3144134277, 2227873595, 1013904242,
            4271175723, 2773480762, 1595750129, 1359893119, 2917565137,
            2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209,
          ]),
          (this.k = y),
          (this.W = new Array(160));
      }
      function b(t, e, r, n, i) {
        var o = (t & r) ^ (~t & i);
        return o < 0 && (o += 4294967296), o;
      }
      function A(t, e, r, n, i, o) {
        var s = (e & n) ^ (~e & o);
        return s < 0 && (s += 4294967296), s;
      }
      function E(t, e, r, n, i) {
        var o = (t & r) ^ (t & i) ^ (r & i);
        return o < 0 && (o += 4294967296), o;
      }
      function M(t, e, r, n, i, o) {
        var s = (e & n) ^ (e & o) ^ (n & o);
        return s < 0 && (s += 4294967296), s;
      }
      function k(t, e) {
        var r = s(t, e, 28) ^ s(e, t, 2) ^ s(e, t, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function _(t, e) {
        var r = a(t, e, 28) ^ a(e, t, 2) ^ a(e, t, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function C(t, e) {
        var r = s(t, e, 14) ^ s(t, e, 18) ^ s(e, t, 9);
        return r < 0 && (r += 4294967296), r;
      }
      function N(t, e) {
        var r = a(t, e, 14) ^ a(t, e, 18) ^ a(e, t, 9);
        return r < 0 && (r += 4294967296), r;
      }
      function I(t, e) {
        var r = s(t, e, 1) ^ s(t, e, 8) ^ u(t, e, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function O(t, e) {
        var r = a(t, e, 1) ^ a(t, e, 8) ^ c(t, e, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function P(t, e) {
        var r = s(t, e, 19) ^ s(e, t, 29) ^ u(t, e, 6);
        return r < 0 && (r += 4294967296), r;
      }
      function S(t, e) {
        var r = a(t, e, 19) ^ a(e, t, 29) ^ c(t, e, 6);
        return r < 0 && (r += 4294967296), r;
      }
      n.inherits(w, v),
        (t.exports = w),
        (w.blockSize = 1024),
        (w.outSize = 512),
        (w.hmacStrength = 192),
        (w.padLength = 128),
        (w.prototype._prepareBlock = function (t, e) {
          for (var r = this.W, n = 0; n < 32; n++) r[n] = t[e + n];
          for (; n < r.length; n += 2) {
            var i = P(r[n - 4], r[n - 3]),
              o = S(r[n - 4], r[n - 3]),
              s = r[n - 14],
              a = r[n - 13],
              u = I(r[n - 30], r[n - 29]),
              c = O(r[n - 30], r[n - 29]),
              l = r[n - 32],
              h = r[n - 31];
            (r[n] = d(i, o, s, a, u, c, l, h)),
              (r[n + 1] = p(i, o, s, a, u, c, l, h));
          }
        }),
        (w.prototype._update = function (t, e) {
          this._prepareBlock(t, e);
          var r = this.W,
            n = this.h[0],
            i = this.h[1],
            s = this.h[2],
            a = this.h[3],
            u = this.h[4],
            c = this.h[5],
            d = this.h[6],
            p = this.h[7],
            v = this.h[8],
            y = this.h[9],
            w = this.h[10],
            I = this.h[11],
            O = this.h[12],
            P = this.h[13],
            S = this.h[14],
            x = this.h[15];
          o(this.k.length === r.length);
          for (var R = 0; R < r.length; R += 2) {
            var T = S,
              B = x,
              L = C(v, y),
              U = N(v, y),
              D = b(v, y, w, I, O),
              j = A(v, y, w, I, O, P),
              F = this.k[R],
              z = this.k[R + 1],
              q = r[R],
              G = r[R + 1],
              Y = m(T, B, L, U, D, j, F, z, q, G),
              J = g(T, B, L, U, D, j, F, z, q, G);
            (T = k(n, i)),
              (B = _(n, i)),
              (L = E(n, i, s, a, u)),
              (U = M(n, i, s, a, u, c));
            var H = h(T, B, L, U),
              K = f(T, B, L, U);
            (S = O),
              (x = P),
              (O = w),
              (P = I),
              (w = v),
              (I = y),
              (v = h(d, p, Y, J)),
              (y = f(p, p, Y, J)),
              (d = u),
              (p = c),
              (u = s),
              (c = a),
              (s = n),
              (a = i),
              (n = h(Y, J, H, K)),
              (i = f(Y, J, H, K));
          }
          l(this.h, 0, n, i),
            l(this.h, 2, s, a),
            l(this.h, 4, u, c),
            l(this.h, 6, d, p),
            l(this.h, 8, v, y),
            l(this.h, 10, w, I),
            l(this.h, 12, O, P),
            l(this.h, 14, S, x);
        }),
        (w.prototype._digest = function (t) {
          return "hex" === t
            ? n.toHex32(this.h, "big")
            : n.split32(this.h, "big");
        });
    },
    19579: function (t, e, r) {
      "use strict";
      var n = r(45753).rotr32;
      function i(t, e, r) {
        return (t & e) ^ (~t & r);
      }
      function o(t, e, r) {
        return (t & e) ^ (t & r) ^ (e & r);
      }
      function s(t, e, r) {
        return t ^ e ^ r;
      }
      (e.ft_1 = function (t, e, r, n) {
        return 0 === t
          ? i(e, r, n)
          : 1 === t || 3 === t
          ? s(e, r, n)
          : 2 === t
          ? o(e, r, n)
          : void 0;
      }),
        (e.ch32 = i),
        (e.maj32 = o),
        (e.p32 = s),
        (e.s0_256 = function (t) {
          return n(t, 2) ^ n(t, 13) ^ n(t, 22);
        }),
        (e.s1_256 = function (t) {
          return n(t, 6) ^ n(t, 11) ^ n(t, 25);
        }),
        (e.g0_256 = function (t) {
          return n(t, 7) ^ n(t, 18) ^ (t >>> 3);
        }),
        (e.g1_256 = function (t) {
          return n(t, 17) ^ n(t, 19) ^ (t >>> 10);
        });
    },
    45753: function (t, e, r) {
      "use strict";
      var n = r(78718),
        i = r(77082);
      function o(t, e) {
        return (
          55296 === (64512 & t.charCodeAt(e)) &&
          !(e < 0 || e + 1 >= t.length) &&
          56320 === (64512 & t.charCodeAt(e + 1))
        );
      }
      function s(t) {
        return (
          ((t >>> 24) |
            ((t >>> 8) & 65280) |
            ((t << 8) & 16711680) |
            ((255 & t) << 24)) >>>
          0
        );
      }
      function a(t) {
        return 1 === t.length ? "0" + t : t;
      }
      function u(t) {
        return 7 === t.length
          ? "0" + t
          : 6 === t.length
          ? "00" + t
          : 5 === t.length
          ? "000" + t
          : 4 === t.length
          ? "0000" + t
          : 3 === t.length
          ? "00000" + t
          : 2 === t.length
          ? "000000" + t
          : 1 === t.length
          ? "0000000" + t
          : t;
      }
      (e.inherits = i),
        (e.toArray = function (t, e) {
          if (Array.isArray(t)) return t.slice();
          if (!t) return [];
          var r = [];
          if ("string" === typeof t)
            if (e) {
              if ("hex" === e)
                for (
                  (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 !== 0 &&
                    (t = "0" + t),
                    i = 0;
                  i < t.length;
                  i += 2
                )
                  r.push(parseInt(t[i] + t[i + 1], 16));
            } else
              for (var n = 0, i = 0; i < t.length; i++) {
                var s = t.charCodeAt(i);
                s < 128
                  ? (r[n++] = s)
                  : s < 2048
                  ? ((r[n++] = (s >> 6) | 192), (r[n++] = (63 & s) | 128))
                  : o(t, i)
                  ? ((s =
                      65536 + ((1023 & s) << 10) + (1023 & t.charCodeAt(++i))),
                    (r[n++] = (s >> 18) | 240),
                    (r[n++] = ((s >> 12) & 63) | 128),
                    (r[n++] = ((s >> 6) & 63) | 128),
                    (r[n++] = (63 & s) | 128))
                  : ((r[n++] = (s >> 12) | 224),
                    (r[n++] = ((s >> 6) & 63) | 128),
                    (r[n++] = (63 & s) | 128));
              }
          else for (i = 0; i < t.length; i++) r[i] = 0 | t[i];
          return r;
        }),
        (e.toHex = function (t) {
          for (var e = "", r = 0; r < t.length; r++) e += a(t[r].toString(16));
          return e;
        }),
        (e.htonl = s),
        (e.toHex32 = function (t, e) {
          for (var r = "", n = 0; n < t.length; n++) {
            var i = t[n];
            "little" === e && (i = s(i)), (r += u(i.toString(16)));
          }
          return r;
        }),
        (e.zero2 = a),
        (e.zero8 = u),
        (e.join32 = function (t, e, r, i) {
          var o = r - e;
          n(o % 4 === 0);
          for (
            var s = new Array(o / 4), a = 0, u = e;
            a < s.length;
            a++, u += 4
          ) {
            var c;
            (c =
              "big" === i
                ? (t[u] << 24) | (t[u + 1] << 16) | (t[u + 2] << 8) | t[u + 3]
                : (t[u + 3] << 24) | (t[u + 2] << 16) | (t[u + 1] << 8) | t[u]),
              (s[a] = c >>> 0);
          }
          return s;
        }),
        (e.split32 = function (t, e) {
          for (
            var r = new Array(4 * t.length), n = 0, i = 0;
            n < t.length;
            n++, i += 4
          ) {
            var o = t[n];
            "big" === e
              ? ((r[i] = o >>> 24),
                (r[i + 1] = (o >>> 16) & 255),
                (r[i + 2] = (o >>> 8) & 255),
                (r[i + 3] = 255 & o))
              : ((r[i + 3] = o >>> 24),
                (r[i + 2] = (o >>> 16) & 255),
                (r[i + 1] = (o >>> 8) & 255),
                (r[i] = 255 & o));
          }
          return r;
        }),
        (e.rotr32 = function (t, e) {
          return (t >>> e) | (t << (32 - e));
        }),
        (e.rotl32 = function (t, e) {
          return (t << e) | (t >>> (32 - e));
        }),
        (e.sum32 = function (t, e) {
          return (t + e) >>> 0;
        }),
        (e.sum32_3 = function (t, e, r) {
          return (t + e + r) >>> 0;
        }),
        (e.sum32_4 = function (t, e, r, n) {
          return (t + e + r + n) >>> 0;
        }),
        (e.sum32_5 = function (t, e, r, n, i) {
          return (t + e + r + n + i) >>> 0;
        }),
        (e.sum64 = function (t, e, r, n) {
          var i = t[e],
            o = (n + t[e + 1]) >>> 0,
            s = (o < n ? 1 : 0) + r + i;
          (t[e] = s >>> 0), (t[e + 1] = o);
        }),
        (e.sum64_hi = function (t, e, r, n) {
          return (((e + n) >>> 0 < e ? 1 : 0) + t + r) >>> 0;
        }),
        (e.sum64_lo = function (t, e, r, n) {
          return (e + n) >>> 0;
        }),
        (e.sum64_4_hi = function (t, e, r, n, i, o, s, a) {
          var u = 0,
            c = e;
          return (
            (u += (c = (c + n) >>> 0) < e ? 1 : 0),
            (u += (c = (c + o) >>> 0) < o ? 1 : 0),
            (t + r + i + s + (u += (c = (c + a) >>> 0) < a ? 1 : 0)) >>> 0
          );
        }),
        (e.sum64_4_lo = function (t, e, r, n, i, o, s, a) {
          return (e + n + o + a) >>> 0;
        }),
        (e.sum64_5_hi = function (t, e, r, n, i, o, s, a, u, c) {
          var l = 0,
            h = e;
          return (
            (l += (h = (h + n) >>> 0) < e ? 1 : 0),
            (l += (h = (h + o) >>> 0) < o ? 1 : 0),
            (l += (h = (h + a) >>> 0) < a ? 1 : 0),
            (t + r + i + s + u + (l += (h = (h + c) >>> 0) < c ? 1 : 0)) >>> 0
          );
        }),
        (e.sum64_5_lo = function (t, e, r, n, i, o, s, a, u, c) {
          return (e + n + o + a + c) >>> 0;
        }),
        (e.rotr64_hi = function (t, e, r) {
          return ((e << (32 - r)) | (t >>> r)) >>> 0;
        }),
        (e.rotr64_lo = function (t, e, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0;
        }),
        (e.shr64_hi = function (t, e, r) {
          return t >>> r;
        }),
        (e.shr64_lo = function (t, e, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0;
        });
    },
    25011: function (t, e, r) {
      "use strict";
      var n = r(2258),
        i = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        o = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        s = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        a = {};
      function u(t) {
        return n.isMemo(t) ? s : a[t.$$typeof] || i;
      }
      (a[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (a[n.Memo] = s);
      var c = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        h = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        d = Object.getPrototypeOf,
        p = Object.prototype;
      t.exports = function t(e, r, n) {
        if ("string" !== typeof r) {
          if (p) {
            var i = d(r);
            i && i !== p && t(e, i, n);
          }
          var s = l(r);
          h && (s = s.concat(h(r)));
          for (var a = u(e), m = u(r), g = 0; g < s.length; ++g) {
            var v = s[g];
            if (!o[v] && (!n || !n[v]) && (!m || !m[v]) && (!a || !a[v])) {
              var y = f(r, v);
              try {
                c(e, v, y);
              } catch (w) {}
            }
          }
        }
        return e;
      };
    },
    79976: function (t, e) {
      (e.read = function (t, e, r, n, i) {
        var o,
          s,
          a = 8 * i - n - 1,
          u = (1 << a) - 1,
          c = u >> 1,
          l = -7,
          h = r ? i - 1 : 0,
          f = r ? -1 : 1,
          d = t[e + h];
        for (
          h += f, o = d & ((1 << -l) - 1), d >>= -l, l += a;
          l > 0;
          o = 256 * o + t[e + h], h += f, l -= 8
        );
        for (
          s = o & ((1 << -l) - 1), o >>= -l, l += n;
          l > 0;
          s = 256 * s + t[e + h], h += f, l -= 8
        );
        if (0 === o) o = 1 - c;
        else {
          if (o === u) return s ? NaN : (1 / 0) * (d ? -1 : 1);
          (s += Math.pow(2, n)), (o -= c);
        }
        return (d ? -1 : 1) * s * Math.pow(2, o - n);
      }),
        (e.write = function (t, e, r, n, i, o) {
          var s,
            a,
            u,
            c = 8 * o - i - 1,
            l = (1 << c) - 1,
            h = l >> 1,
            f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            d = n ? 0 : o - 1,
            p = n ? 1 : -1,
            m = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            e = Math.abs(e),
              isNaN(e) || e === 1 / 0
                ? ((a = isNaN(e) ? 1 : 0), (s = l))
                : ((s = Math.floor(Math.log(e) / Math.LN2)),
                  e * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                  (e += s + h >= 1 ? f / u : f * Math.pow(2, 1 - h)) * u >= 2 &&
                    (s++, (u /= 2)),
                  s + h >= l
                    ? ((a = 0), (s = l))
                    : s + h >= 1
                    ? ((a = (e * u - 1) * Math.pow(2, i)), (s += h))
                    : ((a = e * Math.pow(2, h - 1) * Math.pow(2, i)), (s = 0)));
            i >= 8;
            t[r + d] = 255 & a, d += p, a /= 256, i -= 8
          );
          for (
            s = (s << i) | a, c += i;
            c > 0;
            t[r + d] = 255 & s, d += p, s /= 256, c -= 8
          );
          t[r + d - p] |= 128 * m;
        });
    },
    77082: function (t) {
      "function" === typeof Object.create
        ? (t.exports = function (t, e) {
            e &&
              ((t.super_ = e),
              (t.prototype = Object.create(e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })));
          })
        : (t.exports = function (t, e) {
            if (e) {
              t.super_ = e;
              var r = function () {};
              (r.prototype = e.prototype),
                (t.prototype = new r()),
                (t.prototype.constructor = t);
            }
          });
    },
    93535: function (t, e, r) {
      var n,
        i = r(4444);
      !(function () {
        "use strict";
        var o = "input is invalid type",
          s = "object" === typeof window,
          a = s ? window : {};
        a.JS_SHA3_NO_WINDOW && (s = !1);
        var u = !s && "object" === typeof self;
        !a.JS_SHA3_NO_NODE_JS &&
        "object" === typeof i &&
        i.versions &&
        i.versions.node
          ? (a = r.g)
          : u && (a = self);
        var c = !a.JS_SHA3_NO_COMMON_JS && t.exports,
          l = r.amdO,
          h = !a.JS_SHA3_NO_ARRAY_BUFFER && "undefined" !== typeof ArrayBuffer,
          f = "0123456789abcdef".split(""),
          d = [4, 1024, 262144, 67108864],
          p = [0, 8, 16, 24],
          m = [
            1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
            2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0,
            136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139,
            2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648,
            128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545,
            2147483648, 32896, 2147483648, 2147483649, 0, 2147516424,
            2147483648,
          ],
          g = [224, 256, 384, 512],
          v = [128, 256],
          y = ["hex", "buffer", "arrayBuffer", "array", "digest"],
          w = { 128: 168, 256: 136 };
        (!a.JS_SHA3_NO_NODE_JS && Array.isArray) ||
          (Array.isArray = function (t) {
            return "[object Array]" === Object.prototype.toString.call(t);
          }),
          !h ||
            (!a.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView) ||
            (ArrayBuffer.isView = function (t) {
              return (
                "object" === typeof t &&
                t.buffer &&
                t.buffer.constructor === ArrayBuffer
              );
            });
        for (
          var b = function (t, e, r) {
              return function (n) {
                return new B(t, e, t).update(n)[r]();
              };
            },
            A = function (t, e, r) {
              return function (n, i) {
                return new B(t, e, i).update(n)[r]();
              };
            },
            E = function (t, e, r) {
              return function (e, n, i, o) {
                return N["cshake" + t].update(e, n, i, o)[r]();
              };
            },
            M = function (t, e, r) {
              return function (e, n, i, o) {
                return N["kmac" + t].update(e, n, i, o)[r]();
              };
            },
            k = function (t, e, r, n) {
              for (var i = 0; i < y.length; ++i) {
                var o = y[i];
                t[o] = e(r, n, o);
              }
              return t;
            },
            _ = function (t, e) {
              var r = b(t, e, "hex");
              return (
                (r.create = function () {
                  return new B(t, e, t);
                }),
                (r.update = function (t) {
                  return r.create().update(t);
                }),
                k(r, b, t, e)
              );
            },
            C = [
              {
                name: "keccak",
                padding: [1, 256, 65536, 16777216],
                bits: g,
                createMethod: _,
              },
              {
                name: "sha3",
                padding: [6, 1536, 393216, 100663296],
                bits: g,
                createMethod: _,
              },
              {
                name: "shake",
                padding: [31, 7936, 2031616, 520093696],
                bits: v,
                createMethod: function (t, e) {
                  var r = A(t, e, "hex");
                  return (
                    (r.create = function (r) {
                      return new B(t, e, r);
                    }),
                    (r.update = function (t, e) {
                      return r.create(e).update(t);
                    }),
                    k(r, A, t, e)
                  );
                },
              },
              {
                name: "cshake",
                padding: d,
                bits: v,
                createMethod: function (t, e) {
                  var r = w[t],
                    n = E(t, 0, "hex");
                  return (
                    (n.create = function (n, i, o) {
                      return i || o
                        ? new B(t, e, n).bytepad([i, o], r)
                        : N["shake" + t].create(n);
                    }),
                    (n.update = function (t, e, r, i) {
                      return n.create(e, r, i).update(t);
                    }),
                    k(n, E, t, e)
                  );
                },
              },
              {
                name: "kmac",
                padding: d,
                bits: v,
                createMethod: function (t, e) {
                  var r = w[t],
                    n = M(t, 0, "hex");
                  return (
                    (n.create = function (n, i, o) {
                      return new L(t, e, i)
                        .bytepad(["KMAC", o], r)
                        .bytepad([n], r);
                    }),
                    (n.update = function (t, e, r, i) {
                      return n.create(t, r, i).update(e);
                    }),
                    k(n, M, t, e)
                  );
                },
              },
            ],
            N = {},
            I = [],
            O = 0;
          O < C.length;
          ++O
        )
          for (var P = C[O], S = P.bits, x = 0; x < S.length; ++x) {
            var R = P.name + "_" + S[x];
            if (
              (I.push(R),
              (N[R] = P.createMethod(S[x], P.padding)),
              "sha3" !== P.name)
            ) {
              var T = P.name + S[x];
              I.push(T), (N[T] = N[R]);
            }
          }
        function B(t, e, r) {
          (this.blocks = []),
            (this.s = []),
            (this.padding = e),
            (this.outputBits = r),
            (this.reset = !0),
            (this.finalized = !1),
            (this.block = 0),
            (this.start = 0),
            (this.blockCount = (1600 - (t << 1)) >> 5),
            (this.byteCount = this.blockCount << 2),
            (this.outputBlocks = r >> 5),
            (this.extraBytes = (31 & r) >> 3);
          for (var n = 0; n < 50; ++n) this.s[n] = 0;
        }
        function L(t, e, r) {
          B.call(this, t, e, r);
        }
        (B.prototype.update = function (t) {
          if (this.finalized) throw new Error("finalize already called");
          var e,
            r = typeof t;
          if ("string" !== r) {
            if ("object" !== r) throw new Error(o);
            if (null === t) throw new Error(o);
            if (h && t.constructor === ArrayBuffer) t = new Uint8Array(t);
            else if (!Array.isArray(t) && (!h || !ArrayBuffer.isView(t)))
              throw new Error(o);
            e = !0;
          }
          for (
            var n,
              i,
              s = this.blocks,
              a = this.byteCount,
              u = t.length,
              c = this.blockCount,
              l = 0,
              f = this.s;
            l < u;

          ) {
            if (this.reset)
              for (this.reset = !1, s[0] = this.block, n = 1; n < c + 1; ++n)
                s[n] = 0;
            if (e)
              for (n = this.start; l < u && n < a; ++l)
                s[n >> 2] |= t[l] << p[3 & n++];
            else
              for (n = this.start; l < u && n < a; ++l)
                (i = t.charCodeAt(l)) < 128
                  ? (s[n >> 2] |= i << p[3 & n++])
                  : i < 2048
                  ? ((s[n >> 2] |= (192 | (i >> 6)) << p[3 & n++]),
                    (s[n >> 2] |= (128 | (63 & i)) << p[3 & n++]))
                  : i < 55296 || i >= 57344
                  ? ((s[n >> 2] |= (224 | (i >> 12)) << p[3 & n++]),
                    (s[n >> 2] |= (128 | ((i >> 6) & 63)) << p[3 & n++]),
                    (s[n >> 2] |= (128 | (63 & i)) << p[3 & n++]))
                  : ((i =
                      65536 +
                      (((1023 & i) << 10) | (1023 & t.charCodeAt(++l)))),
                    (s[n >> 2] |= (240 | (i >> 18)) << p[3 & n++]),
                    (s[n >> 2] |= (128 | ((i >> 12) & 63)) << p[3 & n++]),
                    (s[n >> 2] |= (128 | ((i >> 6) & 63)) << p[3 & n++]),
                    (s[n >> 2] |= (128 | (63 & i)) << p[3 & n++]));
            if (((this.lastByteIndex = n), n >= a)) {
              for (this.start = n - a, this.block = s[c], n = 0; n < c; ++n)
                f[n] ^= s[n];
              U(f), (this.reset = !0);
            } else this.start = n;
          }
          return this;
        }),
          (B.prototype.encode = function (t, e) {
            var r = 255 & t,
              n = 1,
              i = [r];
            for (r = 255 & (t >>= 8); r > 0; )
              i.unshift(r), (r = 255 & (t >>= 8)), ++n;
            return e ? i.push(n) : i.unshift(n), this.update(i), i.length;
          }),
          (B.prototype.encodeString = function (t) {
            var e,
              r = typeof t;
            if ("string" !== r) {
              if ("object" !== r) throw new Error(o);
              if (null === t) throw new Error(o);
              if (h && t.constructor === ArrayBuffer) t = new Uint8Array(t);
              else if (!Array.isArray(t) && (!h || !ArrayBuffer.isView(t)))
                throw new Error(o);
              e = !0;
            }
            var n = 0,
              i = t.length;
            if (e) n = i;
            else
              for (var s = 0; s < t.length; ++s) {
                var a = t.charCodeAt(s);
                a < 128
                  ? (n += 1)
                  : a < 2048
                  ? (n += 2)
                  : a < 55296 || a >= 57344
                  ? (n += 3)
                  : ((a =
                      65536 +
                      (((1023 & a) << 10) | (1023 & t.charCodeAt(++s)))),
                    (n += 4));
              }
            return (n += this.encode(8 * n)), this.update(t), n;
          }),
          (B.prototype.bytepad = function (t, e) {
            for (var r = this.encode(e), n = 0; n < t.length; ++n)
              r += this.encodeString(t[n]);
            var i = e - (r % e),
              o = [];
            return (o.length = i), this.update(o), this;
          }),
          (B.prototype.finalize = function () {
            if (!this.finalized) {
              this.finalized = !0;
              var t = this.blocks,
                e = this.lastByteIndex,
                r = this.blockCount,
                n = this.s;
              if (
                ((t[e >> 2] |= this.padding[3 & e]),
                this.lastByteIndex === this.byteCount)
              )
                for (t[0] = t[r], e = 1; e < r + 1; ++e) t[e] = 0;
              for (t[r - 1] |= 2147483648, e = 0; e < r; ++e) n[e] ^= t[e];
              U(n);
            }
          }),
          (B.prototype.toString = B.prototype.hex =
            function () {
              this.finalize();
              for (
                var t,
                  e = this.blockCount,
                  r = this.s,
                  n = this.outputBlocks,
                  i = this.extraBytes,
                  o = 0,
                  s = 0,
                  a = "";
                s < n;

              ) {
                for (o = 0; o < e && s < n; ++o, ++s)
                  (t = r[o]),
                    (a +=
                      f[(t >> 4) & 15] +
                      f[15 & t] +
                      f[(t >> 12) & 15] +
                      f[(t >> 8) & 15] +
                      f[(t >> 20) & 15] +
                      f[(t >> 16) & 15] +
                      f[(t >> 28) & 15] +
                      f[(t >> 24) & 15]);
                s % e === 0 && (U(r), (o = 0));
              }
              return (
                i &&
                  ((t = r[o]),
                  (a += f[(t >> 4) & 15] + f[15 & t]),
                  i > 1 && (a += f[(t >> 12) & 15] + f[(t >> 8) & 15]),
                  i > 2 && (a += f[(t >> 20) & 15] + f[(t >> 16) & 15])),
                a
              );
            }),
          (B.prototype.arrayBuffer = function () {
            this.finalize();
            var t,
              e = this.blockCount,
              r = this.s,
              n = this.outputBlocks,
              i = this.extraBytes,
              o = 0,
              s = 0,
              a = this.outputBits >> 3;
            t = i ? new ArrayBuffer((n + 1) << 2) : new ArrayBuffer(a);
            for (var u = new Uint32Array(t); s < n; ) {
              for (o = 0; o < e && s < n; ++o, ++s) u[s] = r[o];
              s % e === 0 && U(r);
            }
            return i && ((u[o] = r[o]), (t = t.slice(0, a))), t;
          }),
          (B.prototype.buffer = B.prototype.arrayBuffer),
          (B.prototype.digest = B.prototype.array =
            function () {
              this.finalize();
              for (
                var t,
                  e,
                  r = this.blockCount,
                  n = this.s,
                  i = this.outputBlocks,
                  o = this.extraBytes,
                  s = 0,
                  a = 0,
                  u = [];
                a < i;

              ) {
                for (s = 0; s < r && a < i; ++s, ++a)
                  (t = a << 2),
                    (e = n[s]),
                    (u[t] = 255 & e),
                    (u[t + 1] = (e >> 8) & 255),
                    (u[t + 2] = (e >> 16) & 255),
                    (u[t + 3] = (e >> 24) & 255);
                a % r === 0 && U(n);
              }
              return (
                o &&
                  ((t = a << 2),
                  (e = n[s]),
                  (u[t] = 255 & e),
                  o > 1 && (u[t + 1] = (e >> 8) & 255),
                  o > 2 && (u[t + 2] = (e >> 16) & 255)),
                u
              );
            }),
          (L.prototype = new B()),
          (L.prototype.finalize = function () {
            return (
              this.encode(this.outputBits, !0), B.prototype.finalize.call(this)
            );
          });
        var U = function (t) {
          var e,
            r,
            n,
            i,
            o,
            s,
            a,
            u,
            c,
            l,
            h,
            f,
            d,
            p,
            g,
            v,
            y,
            w,
            b,
            A,
            E,
            M,
            k,
            _,
            C,
            N,
            I,
            O,
            P,
            S,
            x,
            R,
            T,
            B,
            L,
            U,
            D,
            j,
            F,
            z,
            q,
            G,
            Y,
            J,
            H,
            K,
            Q,
            W,
            V,
            Z,
            X,
            $,
            tt,
            et,
            rt,
            nt,
            it,
            ot,
            st,
            at,
            ut,
            ct,
            lt;
          for (n = 0; n < 48; n += 2)
            (i = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40]),
              (o = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41]),
              (s = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42]),
              (a = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43]),
              (u = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44]),
              (c = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45]),
              (l = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46]),
              (h = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47]),
              (e =
                (f = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]) ^
                ((s << 1) | (a >>> 31))),
              (r =
                (d = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]) ^
                ((a << 1) | (s >>> 31))),
              (t[0] ^= e),
              (t[1] ^= r),
              (t[10] ^= e),
              (t[11] ^= r),
              (t[20] ^= e),
              (t[21] ^= r),
              (t[30] ^= e),
              (t[31] ^= r),
              (t[40] ^= e),
              (t[41] ^= r),
              (e = i ^ ((u << 1) | (c >>> 31))),
              (r = o ^ ((c << 1) | (u >>> 31))),
              (t[2] ^= e),
              (t[3] ^= r),
              (t[12] ^= e),
              (t[13] ^= r),
              (t[22] ^= e),
              (t[23] ^= r),
              (t[32] ^= e),
              (t[33] ^= r),
              (t[42] ^= e),
              (t[43] ^= r),
              (e = s ^ ((l << 1) | (h >>> 31))),
              (r = a ^ ((h << 1) | (l >>> 31))),
              (t[4] ^= e),
              (t[5] ^= r),
              (t[14] ^= e),
              (t[15] ^= r),
              (t[24] ^= e),
              (t[25] ^= r),
              (t[34] ^= e),
              (t[35] ^= r),
              (t[44] ^= e),
              (t[45] ^= r),
              (e = u ^ ((f << 1) | (d >>> 31))),
              (r = c ^ ((d << 1) | (f >>> 31))),
              (t[6] ^= e),
              (t[7] ^= r),
              (t[16] ^= e),
              (t[17] ^= r),
              (t[26] ^= e),
              (t[27] ^= r),
              (t[36] ^= e),
              (t[37] ^= r),
              (t[46] ^= e),
              (t[47] ^= r),
              (e = l ^ ((i << 1) | (o >>> 31))),
              (r = h ^ ((o << 1) | (i >>> 31))),
              (t[8] ^= e),
              (t[9] ^= r),
              (t[18] ^= e),
              (t[19] ^= r),
              (t[28] ^= e),
              (t[29] ^= r),
              (t[38] ^= e),
              (t[39] ^= r),
              (t[48] ^= e),
              (t[49] ^= r),
              (p = t[0]),
              (g = t[1]),
              (K = (t[11] << 4) | (t[10] >>> 28)),
              (Q = (t[10] << 4) | (t[11] >>> 28)),
              (O = (t[20] << 3) | (t[21] >>> 29)),
              (P = (t[21] << 3) | (t[20] >>> 29)),
              (at = (t[31] << 9) | (t[30] >>> 23)),
              (ut = (t[30] << 9) | (t[31] >>> 23)),
              (G = (t[40] << 18) | (t[41] >>> 14)),
              (Y = (t[41] << 18) | (t[40] >>> 14)),
              (B = (t[2] << 1) | (t[3] >>> 31)),
              (L = (t[3] << 1) | (t[2] >>> 31)),
              (v = (t[13] << 12) | (t[12] >>> 20)),
              (y = (t[12] << 12) | (t[13] >>> 20)),
              (W = (t[22] << 10) | (t[23] >>> 22)),
              (V = (t[23] << 10) | (t[22] >>> 22)),
              (S = (t[33] << 13) | (t[32] >>> 19)),
              (x = (t[32] << 13) | (t[33] >>> 19)),
              (ct = (t[42] << 2) | (t[43] >>> 30)),
              (lt = (t[43] << 2) | (t[42] >>> 30)),
              (et = (t[5] << 30) | (t[4] >>> 2)),
              (rt = (t[4] << 30) | (t[5] >>> 2)),
              (U = (t[14] << 6) | (t[15] >>> 26)),
              (D = (t[15] << 6) | (t[14] >>> 26)),
              (w = (t[25] << 11) | (t[24] >>> 21)),
              (b = (t[24] << 11) | (t[25] >>> 21)),
              (Z = (t[34] << 15) | (t[35] >>> 17)),
              (X = (t[35] << 15) | (t[34] >>> 17)),
              (R = (t[45] << 29) | (t[44] >>> 3)),
              (T = (t[44] << 29) | (t[45] >>> 3)),
              (_ = (t[6] << 28) | (t[7] >>> 4)),
              (C = (t[7] << 28) | (t[6] >>> 4)),
              (nt = (t[17] << 23) | (t[16] >>> 9)),
              (it = (t[16] << 23) | (t[17] >>> 9)),
              (j = (t[26] << 25) | (t[27] >>> 7)),
              (F = (t[27] << 25) | (t[26] >>> 7)),
              (A = (t[36] << 21) | (t[37] >>> 11)),
              (E = (t[37] << 21) | (t[36] >>> 11)),
              ($ = (t[47] << 24) | (t[46] >>> 8)),
              (tt = (t[46] << 24) | (t[47] >>> 8)),
              (J = (t[8] << 27) | (t[9] >>> 5)),
              (H = (t[9] << 27) | (t[8] >>> 5)),
              (N = (t[18] << 20) | (t[19] >>> 12)),
              (I = (t[19] << 20) | (t[18] >>> 12)),
              (ot = (t[29] << 7) | (t[28] >>> 25)),
              (st = (t[28] << 7) | (t[29] >>> 25)),
              (z = (t[38] << 8) | (t[39] >>> 24)),
              (q = (t[39] << 8) | (t[38] >>> 24)),
              (M = (t[48] << 14) | (t[49] >>> 18)),
              (k = (t[49] << 14) | (t[48] >>> 18)),
              (t[0] = p ^ (~v & w)),
              (t[1] = g ^ (~y & b)),
              (t[10] = _ ^ (~N & O)),
              (t[11] = C ^ (~I & P)),
              (t[20] = B ^ (~U & j)),
              (t[21] = L ^ (~D & F)),
              (t[30] = J ^ (~K & W)),
              (t[31] = H ^ (~Q & V)),
              (t[40] = et ^ (~nt & ot)),
              (t[41] = rt ^ (~it & st)),
              (t[2] = v ^ (~w & A)),
              (t[3] = y ^ (~b & E)),
              (t[12] = N ^ (~O & S)),
              (t[13] = I ^ (~P & x)),
              (t[22] = U ^ (~j & z)),
              (t[23] = D ^ (~F & q)),
              (t[32] = K ^ (~W & Z)),
              (t[33] = Q ^ (~V & X)),
              (t[42] = nt ^ (~ot & at)),
              (t[43] = it ^ (~st & ut)),
              (t[4] = w ^ (~A & M)),
              (t[5] = b ^ (~E & k)),
              (t[14] = O ^ (~S & R)),
              (t[15] = P ^ (~x & T)),
              (t[24] = j ^ (~z & G)),
              (t[25] = F ^ (~q & Y)),
              (t[34] = W ^ (~Z & $)),
              (t[35] = V ^ (~X & tt)),
              (t[44] = ot ^ (~at & ct)),
              (t[45] = st ^ (~ut & lt)),
              (t[6] = A ^ (~M & p)),
              (t[7] = E ^ (~k & g)),
              (t[16] = S ^ (~R & _)),
              (t[17] = x ^ (~T & C)),
              (t[26] = z ^ (~G & B)),
              (t[27] = q ^ (~Y & L)),
              (t[36] = Z ^ (~$ & J)),
              (t[37] = X ^ (~tt & H)),
              (t[46] = at ^ (~ct & et)),
              (t[47] = ut ^ (~lt & rt)),
              (t[8] = M ^ (~p & v)),
              (t[9] = k ^ (~g & y)),
              (t[18] = R ^ (~_ & N)),
              (t[19] = T ^ (~C & I)),
              (t[28] = G ^ (~B & U)),
              (t[29] = Y ^ (~L & D)),
              (t[38] = $ ^ (~J & K)),
              (t[39] = tt ^ (~H & Q)),
              (t[48] = ct ^ (~et & nt)),
              (t[49] = lt ^ (~rt & it)),
              (t[0] ^= m[n]),
              (t[1] ^= m[n + 1]);
        };
        if (c) t.exports = N;
        else {
          for (O = 0; O < I.length; ++O) a[I[O]] = N[I[O]];
          l &&
            (void 0 ===
              (n = function () {
                return N;
              }.call(e, r, e, t)) ||
              (t.exports = n));
        }
      })();
    },
    78718: function (t) {
      function e(t, e) {
        if (!t) throw new Error(e || "Assertion failed");
      }
      (t.exports = e),
        (e.equal = function (t, e, r) {
          if (t != e)
            throw new Error(r || "Assertion failed: " + t + " != " + e);
        });
    },
    86632: function (t, e, r) {
      "use strict";
      var n = r(56168);
      e.Z = (0, n.createContext)({
        t: function (t) {
          return Array.isArray(t) ? t[0] : t;
        },
        lang: "",
      });
    },
    44138: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return P;
        },
      });
      var n = r(56168),
        i = r(75332),
        o = r(86632),
        s = function () {
          return (s =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var i in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }).apply(this, arguments);
        };
      function a(t) {
        var e = t.config,
          r = t.allNamespaces,
          n = t.pluralRules,
          i = t.lang,
          o = e.logger,
          a = void 0 === o ? h : o,
          f = function (t, o, h) {
            var d;
            void 0 === t && (t = "");
            var p = Array.isArray(t) ? t[0] : t,
              m = e.nsSeparator,
              g = void 0 === m ? ":" : m,
              v = e.loggerEnvironment,
              y = void 0 === v ? "browser" : v,
              w = (function (t, e) {
                if (!e) return { i18nKey: t };
                var r = t.indexOf(e);
                return r < 0
                  ? { i18nKey: t }
                  : {
                      namespace: t.slice(0, r),
                      i18nKey: t.slice(r + e.length),
                    };
              })(p, g),
              b = w.i18nKey,
              A = w.namespace,
              E =
                void 0 === A
                  ? null !== (d = null === h || void 0 === h ? void 0 : h.ns) &&
                    void 0 !== d
                    ? d
                    : e.defaultNS
                  : A,
              M = (E && r[E]) || {},
              k = (function (t, e, r, n, i) {
                if (!i || "number" !== typeof i.count) return r;
                var o = "".concat(r, "_").concat(i.count);
                if (void 0 !== u(e, o, n)) return o;
                var s = "".concat(r, "_").concat(t.select(i.count));
                if (void 0 !== u(e, s, n)) return s;
                var a = "".concat(r, ".").concat(i.count);
                if (void 0 !== u(e, a, n)) return a;
                var c = "".concat(r, ".").concat(t.select(i.count));
                return void 0 !== u(e, c, n) ? c : r;
              })(n, M, b, e, o),
              _ = u(M, k, e, h),
              C =
                "undefined" === typeof _ ||
                ("object" === typeof _ && !Object.keys(_).length),
              N =
                "string" ===
                typeof (null === h || void 0 === h ? void 0 : h.fallback)
                  ? [h.fallback]
                  : (null === h || void 0 === h ? void 0 : h.fallback) || [];
            if (
              (!C ||
                ("both" !== y &&
                  y !== ("undefined" === typeof window ? "node" : "browser")) ||
                a({ namespace: E, i18nKey: b }),
              C && Array.isArray(N) && N.length)
            ) {
              var I = N[0],
                O = N.slice(1);
              if ("string" === typeof I)
                return f(I, o, s(s({}, h), { fallback: O }));
            }
            return C &&
              (null === h || void 0 === h ? void 0 : h.default) &&
              0 == (null === N || void 0 === N ? void 0 : N.length)
              ? c({
                  text: null === h || void 0 === h ? void 0 : h.default,
                  query: o,
                  config: e,
                  lang: i,
                })
              : C
              ? p
              : _ instanceof Object
              ? l({ obj: _, query: o, config: e, lang: i })
              : c({ text: _, query: o, config: e, lang: i });
          };
        return f;
      }
      function u(t, e, r, n) {
        void 0 === e && (e = ""), void 0 === n && (n = { returnObjects: !1 });
        var i = (r || {}).keySeparator,
          o = void 0 === i ? "." : i,
          s = o ? e.split(o) : [e];
        if (e === o && n.returnObjects) return t;
        var a = s.reduce(function (t, e) {
          if ("string" === typeof t) return {};
          var r = t[e];
          return r || ("string" === typeof r ? r : {});
        }, t);
        return "string" === typeof a || (a instanceof Object && n.returnObjects)
          ? a
          : void 0;
      }
      function c(t) {
        var e = t.text,
          r = t.query,
          n = t.config,
          i = t.lang;
        if (!e || !r) return e || "";
        var o = function (t) {
            return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
          },
          s = n.interpolation || {},
          a = s.format,
          u = void 0 === a ? null : a,
          c = s.prefix,
          l = void 0 === c ? "{{" : c,
          h = s.suffix,
          f = void 0 === h ? "}}" : h,
          d = "" === f ? "" : "(?:[\\s,]+([\\w-]*))?\\s*".concat(o(f));
        return Object.keys(r).reduce(function (t, e) {
          if ("string" !== typeof t) return t;
          var n = new RegExp("".concat(o(l), "\\s*").concat(e).concat(d), "gm");
          return t.replace(n, function (t, n) {
            return n && u ? u(r[e], n, i) : r[e];
          });
        }, e);
      }
      function l(t) {
        var e = t.obj,
          r = t.query,
          n = t.config,
          i = t.lang;
        return r && 0 !== Object.keys(r).length
          ? (Object.keys(e).forEach(function (t) {
              e[t] instanceof Object &&
                l({ obj: e[t], query: r, config: n, lang: i }),
                "string" === typeof e[t] &&
                  (e[t] = c({ text: e[t], query: r, config: n, lang: i }));
            }),
            e)
          : e;
      }
      function h(t) {
        t.namespace, t.i18nKey;
      }
      var f = r(62044),
        d = function () {
          return (d =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var i in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }).apply(this, arguments);
        },
        p = (0, n.createContext)({ ns: {}, config: {} });
      function m(t) {
        var e = t.lang,
          r = t.namespaces,
          s = void 0 === r ? {} : r,
          u = t.children,
          c = t.config,
          l = void 0 === c ? {} : c,
          h = (0, f.Z)().lang,
          m = (0, i.useRouter)() || {},
          g = m.locale,
          v = m.defaultLocale,
          y = (0, n.useContext)(p),
          w = d(
            d(
              d(
                {},
                (function () {
                  var t, e;
                  return "undefined" === typeof window
                    ? {}
                    : (null ===
                        (e =
                          null === (t = window.__NEXT_DATA__) || void 0 === t
                            ? void 0
                            : t.props) || void 0 === e
                        ? void 0
                        : e.__namespaces) || {};
                })()
              ),
              y.ns
            ),
            s
          ),
          b = e || h || g || v || "",
          A = d(d({}, y.config), l),
          E = (A.localesToIgnore || ["default"]).includes(b),
          M = a({
            config: A,
            allNamespaces: w,
            pluralRules: new Intl.PluralRules(E ? void 0 : b),
            lang: b,
          });
        return n.createElement(
          o.Z.Provider,
          { value: { lang: b, t: M } },
          n.createElement(p.Provider, { value: { ns: w, config: A } }, u)
        );
      }
      var g = function (t, e, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function s(t) {
              try {
                u(n.next(t));
              } catch (e) {
                o(e);
              }
            }
            function a(t) {
              try {
                u(n.throw(t));
              } catch (e) {
                o(e);
              }
            }
            function u(t) {
              var e;
              t.done
                ? i(t.value)
                : ((e = t.value),
                  e instanceof r
                    ? e
                    : new r(function (t) {
                        t(e);
                      })).then(s, a);
            }
            u((n = n.apply(t, e || [])).next());
          });
        },
        v = function (t, e) {
          var r,
            n,
            i,
            o,
            s = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: a(0), throw: a(1), return: a(2) }),
            "function" === typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function a(o) {
            return function (a) {
              return (function (o) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (i =
                          2 & o[0]
                            ? n.return
                            : o[0]
                            ? n.throw || ((i = n.return) && i.call(n), 0)
                            : n.next) &&
                        !(i = i.call(n, o[1])).done)
                    )
                      return i;
                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return s.label++, { value: o[1], done: !1 };
                      case 5:
                        s.label++, (n = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                          (6 === o[0] || 2 === o[0])
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          s.label = o[1];
                          break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                          (s.label = i[1]), (i = o);
                          break;
                        }
                        if (i && s.label < i[2]) {
                          (s.label = i[2]), s.ops.push(o);
                          break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    o = e.call(t, s);
                  } catch (a) {
                    (o = [6, a]), (n = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, a]);
            };
          }
        },
        y = function (t, e, r) {
          if (r || 2 === arguments.length)
            for (var n, i = 0, o = e.length; i < o; i++)
              (!n && i in e) ||
                (n || (n = Array.prototype.slice.call(e, 0, i)), (n[i] = e[i]));
          return t.concat(n || Array.prototype.slice.call(e));
        };
      function w(t) {
        return t.reduce(function (t, e) {
          return t.concat(e);
        }, []);
      }
      function b(t, e, r) {
        var n = t.pages,
          i = void 0 === n ? {} : n;
        return g(this, void 0, void 0, function () {
          var t,
            n,
            o,
            s,
            a,
            u,
            c,
            l = this;
          return v(this, function (h) {
            switch (h.label) {
              case 0:
                return (
                  (t = "rgx:"),
                  (n = function (t) {
                    return g(l, void 0, void 0, function () {
                      return v(this, function (e) {
                        return [2, "function" === typeof t ? t(r) : t || []];
                      });
                    });
                  }),
                  (o = Object.keys(i).reduce(function (r, o) {
                    return (
                      o.substring(0, t.length) === t &&
                        new RegExp(o.replace(t, "")).test(e) &&
                        r.push(n(i[o])),
                      r
                    );
                  }, [])),
                  (s = [[]]),
                  [4, n(i["*"])]
                );
              case 1:
                return (
                  (a = [y.apply(void 0, s.concat([h.sent(), !0]))]),
                  [4, n(i[e])]
                );
              case 2:
                return (
                  (u = [y.apply(void 0, a.concat([h.sent(), !0]))]),
                  (c = w),
                  [4, Promise.all(o)]
                );
              case 3:
                return [
                  2,
                  y.apply(void 0, u.concat([c.apply(void 0, [h.sent()]), !0])),
                ];
            }
          });
        });
      }
      var A = r(4444),
        E = function () {
          return (E =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var i in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }).apply(this, arguments);
        },
        M = function (t, e, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function s(t) {
              try {
                u(n.next(t));
              } catch (e) {
                o(e);
              }
            }
            function a(t) {
              try {
                u(n.throw(t));
              } catch (e) {
                o(e);
              }
            }
            function u(t) {
              var e;
              t.done
                ? i(t.value)
                : ((e = t.value),
                  e instanceof r
                    ? e
                    : new r(function (t) {
                        t(e);
                      })).then(s, a);
            }
            u((n = n.apply(t, e || [])).next());
          });
        },
        k = function (t, e) {
          var r,
            n,
            i,
            o,
            s = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: a(0), throw: a(1), return: a(2) }),
            "function" === typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function a(o) {
            return function (a) {
              return (function (o) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (i =
                          2 & o[0]
                            ? n.return
                            : o[0]
                            ? n.throw || ((i = n.return) && i.call(n), 0)
                            : n.next) &&
                        !(i = i.call(n, o[1])).done)
                    )
                      return i;
                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return s.label++, { value: o[1], done: !1 };
                      case 5:
                        s.label++, (n = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                          (6 === o[0] || 2 === o[0])
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          s.label = o[1];
                          break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                          (s.label = i[1]), (i = o);
                          break;
                        }
                        if (i && s.label < i[2]) {
                          (s.label = i[2]), s.ops.push(o);
                          break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    o = e.call(t, s);
                  } catch (a) {
                    (o = [6, a]), (n = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, a]);
            };
          }
        },
        _ =
          null == A.env.NODE_DISABLE_COLORS &&
          null == A.env.NO_COLOR &&
          "dumb" !== A.env.TERM &&
          "0" !== A.env.FORCE_COLOR;
      function C(t) {
        var e, n;
        return (
          void 0 === t && (t = {}),
          M(this, void 0, void 0, function () {
            var i, o, s, a, u, c, l, h;
            return k(this, function (f) {
              switch (f.label) {
                case 0:
                  return (
                    (i = E(
                      E(
                        {},
                        ("undefined" === typeof window ? r.g : window)
                          .i18nConfig
                      ),
                      t
                    )),
                    (o = i.localesToIgnore || ["default"]),
                    (s =
                      (null === (e = i.req) || void 0 === e
                        ? void 0
                        : e.locale) ||
                      i.locale ||
                      (null === (n = i.router) || void 0 === n
                        ? void 0
                        : n.locale) ||
                      i.defaultLocale ||
                      ""),
                    i.pathname
                      ? o.includes(s)
                        ? [2, { __lang: s }]
                        : (i.loaderName ||
                            !1 === i.loader ||
                            console.warn(
                              '\ud83d\udea8 [next-translate] You can remove the "loadNamespaces" helper, unless you set "loader: false" in your i18n config file.'
                            ),
                          (a =
                            (function (t) {
                              void 0 === t && (t = "");
                              return t.length > 1 && t.endsWith("/")
                                ? t.slice(0, -1)
                                : t;
                            })(i.pathname.replace(/\/index$/, "")) || "/"),
                          [4, b(i, a, i)])
                      : (console.warn(
                          '\ud83d\udea8 [next-translate] You forgot to pass the "pathname" inside "loadNamespaces" configuration'
                        ),
                        [2, { __lang: s }])
                  );
                case 1:
                  return (
                    (u = f.sent()),
                    (c = function () {
                      return Promise.resolve({});
                    }),
                    [
                      4,
                      Promise.all(
                        u.map(function (t) {
                          return "function" === typeof i.loadLocaleFrom
                            ? i.loadLocaleFrom(s, t).catch(function () {
                                return {};
                              })
                            : c();
                        })
                      ),
                    ]
                  );
                case 2:
                  return (
                    (l = f.sent() || []),
                    !1 !== i.logBuild &&
                      "undefined" === typeof window &&
                      ((h = function (t) {
                        return _ ? "\x1b[36m".concat(t, "\x1b[0m") : t;
                      }),
                      console.log(
                        h("next-translate"),
                        "- compiled page:",
                        h(a),
                        "- locale:",
                        h(s),
                        "- namespaces:",
                        h(u.join(", ")),
                        "- used loader:",
                        h(i.loaderName || "-")
                      )),
                    [
                      2,
                      {
                        __lang: s,
                        __namespaces: u.reduce(function (t, e, r) {
                          return (t[e] = l[r] || null), t;
                        }, {}),
                      },
                    ]
                  );
              }
            });
          })
        );
      }
      var N = function () {
          return (N =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var i in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }).apply(this, arguments);
        },
        I = function (t, e, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function s(t) {
              try {
                u(n.next(t));
              } catch (e) {
                o(e);
              }
            }
            function a(t) {
              try {
                u(n.throw(t));
              } catch (e) {
                o(e);
              }
            }
            function u(t) {
              var e;
              t.done
                ? i(t.value)
                : ((e = t.value),
                  e instanceof r
                    ? e
                    : new r(function (t) {
                        t(e);
                      })).then(s, a);
            }
            u((n = n.apply(t, e || [])).next());
          });
        },
        O = function (t, e) {
          var r,
            n,
            i,
            o,
            s = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: a(0), throw: a(1), return: a(2) }),
            "function" === typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function a(o) {
            return function (a) {
              return (function (o) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (i =
                          2 & o[0]
                            ? n.return
                            : o[0]
                            ? n.throw || ((i = n.return) && i.call(n), 0)
                            : n.next) &&
                        !(i = i.call(n, o[1])).done)
                    )
                      return i;
                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return s.label++, { value: o[1], done: !1 };
                      case 5:
                        s.label++, (n = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                          (6 === o[0] || 2 === o[0])
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          s.label = o[1];
                          break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                          (s.label = i[1]), (i = o);
                          break;
                        }
                        if (i && s.label < i[2]) {
                          (s.label = i[2]), s.ops.push(o);
                          break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    o = e.call(t, s);
                  } catch (a) {
                    (o = [6, a]), (n = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, a]);
            };
          }
        };
      function P(t, e) {
        var i = this;
        function o(r) {
          var i,
            o,
            s = e.defaultLocale;
          return n.createElement(
            m,
            {
              lang:
                (null === (i = r.pageProps) || void 0 === i
                  ? void 0
                  : i.__lang) ||
                r.__lang ||
                s,
              namespaces:
                (null === (o = r.pageProps) || void 0 === o
                  ? void 0
                  : o.__namespaces) || r.__namespaces,
              config: e,
            },
            n.createElement(t, N({}, r))
          );
        }
        return (
          void 0 === e && (e = {}),
          e.isLoader ||
            !1 === e.loader ||
            console.warn(
              '\ud83d\udea8 [next-translate] You can remove the "appWithI18n" HoC on the _app.js, unless you set "loader: false" in your i18n config file.'
            ),
          "function" === typeof e.staticsHoc && e.staticsHoc(o, t),
          "undefined" === typeof window
            ? (r.g.i18nConfig = e)
            : (window.i18nConfig = e),
          e.skipInitialProps ||
            (o.getInitialProps = function (r) {
              return I(i, void 0, void 0, function () {
                var n, i, o;
                return O(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return (
                        (n = N(N({}, r.ctx || {}), r || {})),
                        (i = { pageProps: {} }),
                        t.getInitialProps ? [4, t.getInitialProps(r)] : [3, 2]
                      );
                    case 1:
                      (i = s.sent() || {}), (s.label = 2);
                    case 2:
                      return (
                        (o = [N({}, i)]),
                        [
                          4,
                          C(
                            N(N(N({}, n), e), { loaderName: "getInitialProps" })
                          ),
                        ]
                      );
                    case 3:
                      return [2, N.apply(void 0, o.concat([s.sent()]))];
                  }
                });
              });
            }),
          o
        );
      }
    },
    62044: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return u;
        },
      });
      var n = r(56168),
        i = function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var i in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }).apply(this, arguments);
        };
      function o(t, e) {
        if ("string" !== typeof e) return t;
        return function (r, n, o) {
          return t(r, n, i({ ns: e }, o));
        };
      }
      var s = r(86632),
        a = function () {
          return (a =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var i in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }).apply(this, arguments);
        };
      function u(t) {
        var e = (0, n.useContext)(s.Z);
        return (0, n.useMemo)(
          function () {
            return a(a({}, e), { t: o(e.t, t) });
          },
          [e, t]
        );
      }
    },
    75332: function (t, e, r) {
      t.exports = r(25948);
    },
    4444: function (t) {
      var e,
        r,
        n = (t.exports = {});
      function i() {
        throw new Error("setTimeout has not been defined");
      }
      function o() {
        throw new Error("clearTimeout has not been defined");
      }
      function s(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === i || !e) && setTimeout)
          return (e = setTimeout), setTimeout(t, 0);
        try {
          return e(t, 0);
        } catch (r) {
          try {
            return e.call(null, t, 0);
          } catch (r) {
            return e.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          e = "function" === typeof setTimeout ? setTimeout : i;
        } catch (t) {
          e = i;
        }
        try {
          r = "function" === typeof clearTimeout ? clearTimeout : o;
        } catch (t) {
          r = o;
        }
      })();
      var a,
        u = [],
        c = !1,
        l = -1;
      function h() {
        c &&
          a &&
          ((c = !1), a.length ? (u = a.concat(u)) : (l = -1), u.length && f());
      }
      function f() {
        if (!c) {
          var t = s(h);
          c = !0;
          for (var e = u.length; e; ) {
            for (a = u, u = []; ++l < e; ) a && a[l].run();
            (l = -1), (e = u.length);
          }
          (a = null),
            (c = !1),
            (function (t) {
              if (r === clearTimeout) return clearTimeout(t);
              if ((r === o || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(t);
              try {
                r(t);
              } catch (e) {
                try {
                  return r.call(null, t);
                } catch (e) {
                  return r.call(this, t);
                }
              }
            })(t);
        }
      }
      function d(t, e) {
        (this.fun = t), (this.array = e);
      }
      function p() {}
      (n.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        u.push(new d(t, e)), 1 !== u.length || c || s(f);
      }),
        (d.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (n.title = "browser"),
        (n.browser = !0),
        (n.env = {}),
        (n.argv = []),
        (n.version = ""),
        (n.versions = {}),
        (n.on = p),
        (n.addListener = p),
        (n.once = p),
        (n.off = p),
        (n.removeListener = p),
        (n.removeAllListeners = p),
        (n.emit = p),
        (n.prependListener = p),
        (n.prependOnceListener = p),
        (n.listeners = function (t) {
          return [];
        }),
        (n.binding = function (t) {
          throw new Error("process.binding is not supported");
        }),
        (n.cwd = function () {
          return "/";
        }),
        (n.chdir = function (t) {
          throw new Error("process.chdir is not supported");
        }),
        (n.umask = function () {
          return 0;
        });
    },
    7202: function (t, e) {
      "use strict";
      var r = "function" === typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        i = r ? Symbol.for("react.portal") : 60106,
        o = r ? Symbol.for("react.fragment") : 60107,
        s = r ? Symbol.for("react.strict_mode") : 60108,
        a = r ? Symbol.for("react.profiler") : 60114,
        u = r ? Symbol.for("react.provider") : 60109,
        c = r ? Symbol.for("react.context") : 60110,
        l = r ? Symbol.for("react.async_mode") : 60111,
        h = r ? Symbol.for("react.concurrent_mode") : 60111,
        f = r ? Symbol.for("react.forward_ref") : 60112,
        d = r ? Symbol.for("react.suspense") : 60113,
        p = r ? Symbol.for("react.suspense_list") : 60120,
        m = r ? Symbol.for("react.memo") : 60115,
        g = r ? Symbol.for("react.lazy") : 60116,
        v = r ? Symbol.for("react.block") : 60121,
        y = r ? Symbol.for("react.fundamental") : 60117,
        w = r ? Symbol.for("react.responder") : 60118,
        b = r ? Symbol.for("react.scope") : 60119;
      function A(t) {
        if ("object" === typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case n:
              switch ((t = t.type)) {
                case l:
                case h:
                case o:
                case a:
                case s:
                case d:
                  return t;
                default:
                  switch ((t = t && t.$$typeof)) {
                    case c:
                    case f:
                    case g:
                    case m:
                    case u:
                      return t;
                    default:
                      return e;
                  }
              }
            case i:
              return e;
          }
        }
      }
      function E(t) {
        return A(t) === h;
      }
      (e.AsyncMode = l),
        (e.ConcurrentMode = h),
        (e.ContextConsumer = c),
        (e.ContextProvider = u),
        (e.Element = n),
        (e.ForwardRef = f),
        (e.Fragment = o),
        (e.Lazy = g),
        (e.Memo = m),
        (e.Portal = i),
        (e.Profiler = a),
        (e.StrictMode = s),
        (e.Suspense = d),
        (e.isAsyncMode = function (t) {
          return E(t) || A(t) === l;
        }),
        (e.isConcurrentMode = E),
        (e.isContextConsumer = function (t) {
          return A(t) === c;
        }),
        (e.isContextProvider = function (t) {
          return A(t) === u;
        }),
        (e.isElement = function (t) {
          return "object" === typeof t && null !== t && t.$$typeof === n;
        }),
        (e.isForwardRef = function (t) {
          return A(t) === f;
        }),
        (e.isFragment = function (t) {
          return A(t) === o;
        }),
        (e.isLazy = function (t) {
          return A(t) === g;
        }),
        (e.isMemo = function (t) {
          return A(t) === m;
        }),
        (e.isPortal = function (t) {
          return A(t) === i;
        }),
        (e.isProfiler = function (t) {
          return A(t) === a;
        }),
        (e.isStrictMode = function (t) {
          return A(t) === s;
        }),
        (e.isSuspense = function (t) {
          return A(t) === d;
        }),
        (e.isValidElementType = function (t) {
          return (
            "string" === typeof t ||
            "function" === typeof t ||
            t === o ||
            t === h ||
            t === a ||
            t === s ||
            t === d ||
            t === p ||
            ("object" === typeof t &&
              null !== t &&
              (t.$$typeof === g ||
                t.$$typeof === m ||
                t.$$typeof === u ||
                t.$$typeof === c ||
                t.$$typeof === f ||
                t.$$typeof === y ||
                t.$$typeof === w ||
                t.$$typeof === b ||
                t.$$typeof === v))
          );
        }),
        (e.typeOf = A);
    },
    2258: function (t, e, r) {
      "use strict";
      t.exports = r(7202);
    },
    32061: function (t, e, r) {
      "use strict";
      r.d(e, {
        zt: function () {
          return l;
        },
        I0: function () {
          return m;
        },
        v9: function () {
          return w;
        },
      });
      var n = r(56168),
        i = n.createContext(null);
      var o = function (t) {
          t();
        },
        s = function () {
          return o;
        };
      var a = {
        notify: function () {},
        get: function () {
          return [];
        },
      };
      function u(t, e) {
        var r,
          n = a;
        function i() {
          u.onStateChange && u.onStateChange();
        }
        function o() {
          r ||
            ((r = e ? e.addNestedSub(i) : t.subscribe(i)),
            (n = (function () {
              var t = s(),
                e = null,
                r = null;
              return {
                clear: function () {
                  (e = null), (r = null);
                },
                notify: function () {
                  t(function () {
                    for (var t = e; t; ) t.callback(), (t = t.next);
                  });
                },
                get: function () {
                  for (var t = [], r = e; r; ) t.push(r), (r = r.next);
                  return t;
                },
                subscribe: function (t) {
                  var n = !0,
                    i = (r = { callback: t, next: null, prev: r });
                  return (
                    i.prev ? (i.prev.next = i) : (e = i),
                    function () {
                      n &&
                        null !== e &&
                        ((n = !1),
                        i.next ? (i.next.prev = i.prev) : (r = i.prev),
                        i.prev ? (i.prev.next = i.next) : (e = i.next));
                    }
                  );
                },
              };
            })()));
        }
        var u = {
          addNestedSub: function (t) {
            return o(), n.subscribe(t);
          },
          notifyNestedSubs: function () {
            n.notify();
          },
          handleChangeWrapper: i,
          isSubscribed: function () {
            return Boolean(r);
          },
          trySubscribe: o,
          tryUnsubscribe: function () {
            r && (r(), (r = void 0), n.clear(), (n = a));
          },
          getListeners: function () {
            return n;
          },
        };
        return u;
      }
      var c =
        "undefined" !== typeof window &&
        "undefined" !== typeof window.document &&
        "undefined" !== typeof window.document.createElement
          ? n.useLayoutEffect
          : n.useEffect;
      var l = function (t) {
        var e = t.store,
          r = t.context,
          o = t.children,
          s = (0, n.useMemo)(
            function () {
              var t = u(e);
              return { store: e, subscription: t };
            },
            [e]
          ),
          a = (0, n.useMemo)(
            function () {
              return e.getState();
            },
            [e]
          );
        c(
          function () {
            var t = s.subscription;
            return (
              (t.onStateChange = t.notifyNestedSubs),
              t.trySubscribe(),
              a !== e.getState() && t.notifyNestedSubs(),
              function () {
                t.tryUnsubscribe(), (t.onStateChange = null);
              }
            );
          },
          [s, a]
        );
        var l = r || i;
        return n.createElement(l.Provider, { value: s }, o);
      };
      r(25011), r(70368);
      function h() {
        return (0, n.useContext)(i);
      }
      function f(t) {
        void 0 === t && (t = i);
        var e =
          t === i
            ? h
            : function () {
                return (0, n.useContext)(t);
              };
        return function () {
          return e().store;
        };
      }
      var d = f();
      function p(t) {
        void 0 === t && (t = i);
        var e = t === i ? d : f(t);
        return function () {
          return e().dispatch;
        };
      }
      var m = p(),
        g = function (t, e) {
          return t === e;
        };
      function v(t) {
        void 0 === t && (t = i);
        var e =
          t === i
            ? h
            : function () {
                return (0, n.useContext)(t);
              };
        return function (t, r) {
          void 0 === r && (r = g);
          var i = e(),
            o = (function (t, e, r, i) {
              var o,
                s = (0, n.useReducer)(function (t) {
                  return t + 1;
                }, 0)[1],
                a = (0, n.useMemo)(
                  function () {
                    return u(r, i);
                  },
                  [r, i]
                ),
                l = (0, n.useRef)(),
                h = (0, n.useRef)(),
                f = (0, n.useRef)(),
                d = (0, n.useRef)(),
                p = r.getState();
              try {
                if (t !== h.current || p !== f.current || l.current) {
                  var m = t(p);
                  o = void 0 !== d.current && e(m, d.current) ? d.current : m;
                } else o = d.current;
              } catch (g) {
                throw (
                  (l.current &&
                    (g.message +=
                      "\nThe error may be correlated with this previous error:\n" +
                      l.current.stack +
                      "\n\n"),
                  g)
                );
              }
              return (
                c(function () {
                  (h.current = t),
                    (f.current = p),
                    (d.current = o),
                    (l.current = void 0);
                }),
                c(
                  function () {
                    function t() {
                      try {
                        var t = r.getState();
                        if (t === f.current) return;
                        var n = h.current(t);
                        if (e(n, d.current)) return;
                        (d.current = n), (f.current = t);
                      } catch (g) {
                        l.current = g;
                      }
                      s();
                    }
                    return (
                      (a.onStateChange = t),
                      a.trySubscribe(),
                      t(),
                      function () {
                        return a.tryUnsubscribe();
                      }
                    );
                  },
                  [r, a]
                ),
                o
              );
            })(t, r, i.store, i.subscription);
          return (0, n.useDebugValue)(o), o;
        };
      }
      var y,
        w = v(),
        b = r(34323);
      (y = b.unstable_batchedUpdates), (o = y);
    },
    45303: function (t, e) {
      "use strict";
      var r = 60103,
        n = 60106,
        i = 60107,
        o = 60108,
        s = 60114,
        a = 60109,
        u = 60110,
        c = 60112,
        l = 60113,
        h = 60120,
        f = 60115,
        d = 60116,
        p = 60121,
        m = 60122,
        g = 60117,
        v = 60129,
        y = 60131;
      if ("function" === typeof Symbol && Symbol.for) {
        var w = Symbol.for;
        (r = w("react.element")),
          (n = w("react.portal")),
          (i = w("react.fragment")),
          (o = w("react.strict_mode")),
          (s = w("react.profiler")),
          (a = w("react.provider")),
          (u = w("react.context")),
          (c = w("react.forward_ref")),
          (l = w("react.suspense")),
          (h = w("react.suspense_list")),
          (f = w("react.memo")),
          (d = w("react.lazy")),
          (p = w("react.block")),
          (m = w("react.server.block")),
          (g = w("react.fundamental")),
          (v = w("react.debug_trace_mode")),
          (y = w("react.legacy_hidden"));
      }
      function b(t) {
        if ("object" === typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case r:
              switch ((t = t.type)) {
                case i:
                case s:
                case o:
                case l:
                case h:
                  return t;
                default:
                  switch ((t = t && t.$$typeof)) {
                    case u:
                    case c:
                    case d:
                    case f:
                    case a:
                      return t;
                    default:
                      return e;
                  }
              }
            case n:
              return e;
          }
        }
      }
    },
    70368: function (t, e, r) {
      "use strict";
      r(45303);
    },
    27856: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return i;
        },
      });
      var n = "Invariant failed";
      function i(t, e) {
        if (!t) throw new Error(n);
      }
    },
    76363: function (t, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return r(52588);
        },
      ]);
    },
    37011: function (t, e) {
      "use strict";
      e.Z = {
        src: "/_next/static/media/smile.36134bf6.svg",
        height: 136,
        width: 137,
      };
    },
    31249: function (t, e, r) {
      "use strict";
      r.d(e, {
        Lj: function () {
          return U;
        },
        FT: function () {
          return j;
        },
        Lw: function () {
          return D;
        },
        H5: function () {
          return F;
        },
      });
      var n = r(43718);
      function i() {
        return (i =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      function o(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      function s(t) {
        return (s = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function a(t, e) {
        return (a =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function u() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      function c(t, e, r) {
        return (c = u()
          ? Reflect.construct
          : function (t, e, r) {
              var n = [null];
              n.push.apply(n, e);
              var i = new (Function.bind.apply(t, n))();
              return r && a(i, r.prototype), i;
            }).apply(null, arguments);
      }
      function l(t) {
        var e = "function" === typeof Map ? new Map() : void 0;
        return (l = function (t) {
          if (
            null === t ||
            ((r = t), -1 === Function.toString.call(r).indexOf("[native code]"))
          )
            return t;
          var r;
          if ("function" !== typeof t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if ("undefined" !== typeof e) {
            if (e.has(t)) return e.get(t);
            e.set(t, n);
          }
          function n() {
            return c(t, arguments, s(this).constructor);
          }
          return (
            (n.prototype = Object.create(t.prototype, {
              constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            a(n, t)
          );
        })(t);
      }
      function h(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      "undefined" !== typeof Symbol &&
        (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
        "undefined" !== typeof Symbol &&
          (Symbol.asyncIterator ||
            (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
      function f(t, e) {
        try {
          var r = t();
        } catch (n) {
          return e(n);
        }
        return r && r.then ? r.then(void 0, e) : r;
      }
      function d(t) {
        return t.hasOwnProperty("result") ? t.result : t;
      }
      var p = (function (t) {
          function e() {
            var e;
            return (
              ((e = t.call(this) || this).name = e.constructor.name),
              (e.message =
                "No Ethereum provider was found on window.ethereum."),
              e
            );
          }
          return o(e, t), e;
        })(l(Error)),
        m = (function (t) {
          function e() {
            var e;
            return (
              ((e = t.call(this) || this).name = e.constructor.name),
              (e.message = "The user rejected the request."),
              e
            );
          }
          return o(e, t), e;
        })(l(Error)),
        g = (function (t) {
          function e(e) {
            var r;
            return (
              ((r = t.call(this, e) || this).handleNetworkChanged =
                r.handleNetworkChanged.bind(h(r))),
              (r.handleChainChanged = r.handleChainChanged.bind(h(r))),
              (r.handleAccountsChanged = r.handleAccountsChanged.bind(h(r))),
              (r.handleClose = r.handleClose.bind(h(r))),
              r
            );
          }
          o(e, t);
          var r = e.prototype;
          return (
            (r.handleChainChanged = function (t) {
              this.emitUpdate({ chainId: t, provider: window.ethereum });
            }),
            (r.handleAccountsChanged = function (t) {
              0 === t.length
                ? this.emitDeactivate()
                : this.emitUpdate({ account: t[0] });
            }),
            (r.handleClose = function (t, e) {
              this.emitDeactivate();
            }),
            (r.handleNetworkChanged = function (t) {
              this.emitUpdate({ chainId: t, provider: window.ethereum });
            }),
            (r.activate = function () {
              try {
                var t,
                  e = function (e) {
                    if (r) return e;
                    function n() {
                      return i(
                        { provider: window.ethereum },
                        t ? { account: t } : {}
                      );
                    }
                    var o = (function () {
                      if (!t)
                        return Promise.resolve(
                          window.ethereum.enable().then(function (t) {
                            return t && d(t)[0];
                          })
                        ).then(function (e) {
                          t = e;
                        });
                    })();
                    return o && o.then ? o.then(n) : n();
                  },
                  r = !1,
                  n = this;
                if (!window.ethereum) throw new p();
                window.ethereum.on &&
                  (window.ethereum.on("chainChanged", n.handleChainChanged),
                  window.ethereum.on(
                    "accountsChanged",
                    n.handleAccountsChanged
                  ),
                  window.ethereum.on("close", n.handleClose),
                  window.ethereum.on("networkChanged", n.handleNetworkChanged)),
                  window.ethereum.isMetaMask &&
                    (window.ethereum.autoRefreshOnNetworkChange = !1);
                var o = f(
                  function () {
                    return Promise.resolve(
                      window.ethereum
                        .send("eth_requestAccounts")
                        .then(function (t) {
                          return d(t)[0];
                        })
                    ).then(function (e) {
                      t = e;
                    });
                  },
                  function (t) {
                    if (4001 === t.code) throw new m();
                  }
                );
                return Promise.resolve(o && o.then ? o.then(e) : e(o));
              } catch (s) {
                return Promise.reject(s);
              }
            }),
            (r.getProvider = function () {
              try {
                return Promise.resolve(window.ethereum);
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (r.getChainId = function () {
              try {
                var t,
                  e = function () {
                    function e() {
                      if (!t)
                        try {
                          t = d(
                            window.ethereum.send({ method: "net_version" })
                          );
                        } catch (e) {}
                      return (
                        t ||
                          (t = window.ethereum.isDapper
                            ? d(window.ethereum.cachedResults.net_version)
                            : window.ethereum.chainId ||
                              window.ethereum.netVersion ||
                              window.ethereum.networkVersion ||
                              window.ethereum._chainId),
                        t
                      );
                    }
                    var r = (function () {
                      if (!t) {
                        var e = f(
                          function () {
                            return Promise.resolve(
                              window.ethereum.send("net_version").then(d)
                            ).then(function (e) {
                              t = e;
                            });
                          },
                          function () {}
                        );
                        if (e && e.then) return e.then(function () {});
                      }
                    })();
                    return r && r.then ? r.then(e) : e();
                  };
                if (!window.ethereum) throw new p();
                var r = f(
                  function () {
                    return Promise.resolve(
                      window.ethereum.send("eth_chainId").then(d)
                    ).then(function (e) {
                      t = e;
                    });
                  },
                  function () {}
                );
                return Promise.resolve(r && r.then ? r.then(e) : e());
              } catch (n) {
                return Promise.reject(n);
              }
            }),
            (r.getAccount = function () {
              try {
                var t,
                  e = function () {
                    function e() {
                      return (
                        t ||
                          (t = d(
                            window.ethereum.send({ method: "eth_accounts" })
                          )[0]),
                        t
                      );
                    }
                    var r = (function () {
                      if (!t) {
                        var e = f(
                          function () {
                            return Promise.resolve(
                              window.ethereum.enable().then(function (t) {
                                return d(t)[0];
                              })
                            ).then(function (e) {
                              t = e;
                            });
                          },
                          function () {}
                        );
                        if (e && e.then) return e.then(function () {});
                      }
                    })();
                    return r && r.then ? r.then(e) : e();
                  };
                if (!window.ethereum) throw new p();
                var r = f(
                  function () {
                    return Promise.resolve(
                      window.ethereum.send("eth_accounts").then(function (t) {
                        return d(t)[0];
                      })
                    ).then(function (e) {
                      t = e;
                    });
                  },
                  function () {}
                );
                return Promise.resolve(r && r.then ? r.then(e) : e());
              } catch (n) {
                return Promise.reject(n);
              }
            }),
            (r.deactivate = function () {
              window.ethereum &&
                window.ethereum.removeListener &&
                (window.ethereum.removeListener(
                  "chainChanged",
                  this.handleChainChanged
                ),
                window.ethereum.removeListener(
                  "accountsChanged",
                  this.handleAccountsChanged
                ),
                window.ethereum.removeListener("close", this.handleClose),
                window.ethereum.removeListener(
                  "networkChanged",
                  this.handleNetworkChanged
                ));
            }),
            (r.isAuthorized = function () {
              try {
                return window.ethereum
                  ? Promise.resolve(
                      f(
                        function () {
                          return Promise.resolve(
                            window.ethereum
                              .send("eth_accounts")
                              .then(function (t) {
                                return d(t).length > 0;
                              })
                          );
                        },
                        function () {
                          return !1;
                        }
                      )
                    )
                  : Promise.resolve(!1);
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            e
          );
        })(n.Q),
        v = r(83516),
        y = r(66986),
        w = r(27856);
      function b(t, e) {
        return (b =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function A(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      var E = {
          1: "mainnet",
          3: "ropsten",
          4: "rinkeby",
          5: "goerli",
          42: "kovan",
          100: "xdai",
          30: "orchid",
          31: "orchidTestnet",
          99: "core",
          77: "sokol",
          61: "classic",
          8: "ubiq",
          108: "thundercore",
          18: "thundercoreTestnet",
          163: "lightstreams",
          122: "fuse",
          1337: "devChain",
          31337: "hardhat",
          137: "matic",
          80001: "maticMumbai",
        },
        M = (function (t) {
          var e, n;
          function i(e) {
            var r,
              n = e.dAppId,
              i = e.networks,
              o = e.config,
              s = void 0 === o ? {} : o,
              a = i.map(function (t) {
                return "number" === typeof t ? t : Number(t.chainId);
              });
            return (
              a.every(function (t) {
                return !!E[t];
              }) || (0, w.Z)(!1),
              ((r = t.call(this, { supportedChainIds: a }) || this).dAppId = n),
              (r.networks = i),
              (r.config = s),
              (r.handleOnLogout = r.handleOnLogout.bind(A(r))),
              (r.handleOnActiveWalletChanged =
                r.handleOnActiveWalletChanged.bind(A(r))),
              (r.handleOnError = r.handleOnError.bind(A(r))),
              r
            );
          }
          (n = t),
            ((e = i).prototype = Object.create(n.prototype)),
            (e.prototype.constructor = e),
            b(e, n);
          var o = i.prototype;
          return (
            (o.handleOnLogout = function () {
              this.emitDeactivate();
            }),
            (o.handleOnActiveWalletChanged = function (t) {
              this.emitUpdate({ account: t });
            }),
            (o.handleOnError = function (t) {
              this.emitError(t);
            }),
            (o.activate = function () {
              try {
                var t = this,
                  e = function () {
                    return (
                      t.portis.onLogout(t.handleOnLogout),
                      t.portis.onActiveWalletChanged(
                        t.handleOnActiveWalletChanged
                      ),
                      t.portis.onError(t.handleOnError),
                      Promise.resolve(
                        t.portis.provider.enable().then(function (t) {
                          return t[0];
                        })
                      ).then(function (e) {
                        return { provider: t.portis.provider, account: e };
                      })
                    );
                  },
                  n = (function () {
                    if (!t.portis)
                      return Promise.resolve(
                        r
                          .e(872)
                          .then(r.t.bind(r, 40079, 23))
                          .then(function (t) {
                            var e;
                            return null != (e = null == t ? void 0 : t.default)
                              ? e
                              : t;
                          })
                      ).then(function (e) {
                        t.portis = new e(
                          t.dAppId,
                          "number" === typeof t.networks[0]
                            ? E[t.networks[0]]
                            : t.networks[0],
                          t.config
                        );
                      });
                  })();
                return Promise.resolve(n && n.then ? n.then(e) : e());
              } catch (i) {
                return Promise.reject(i);
              }
            }),
            (o.getProvider = function () {
              try {
                return Promise.resolve(this.portis.provider);
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (o.getChainId = function () {
              try {
                return Promise.resolve(
                  this.portis.provider.send("eth_chainId")
                );
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (o.getAccount = function () {
              try {
                return Promise.resolve(
                  this.portis.provider.send("eth_accounts").then(function (t) {
                    return t[0];
                  })
                );
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (o.deactivate = function () {
              this.portis.onLogout(function () {}),
                this.portis.onActiveWalletChanged(function () {}),
                this.portis.onError(function () {});
            }),
            (o.changeNetwork = function (t, e) {
              try {
                var r = this;
                return (
                  "number" === typeof t
                    ? (E[t] || (0, w.Z)(!1),
                      r.portis.changeNetwork(E[t], e),
                      r.emitUpdate({ chainId: t }))
                    : (r.portis.changeNetwork(t, e),
                      r.emitUpdate({ chainId: Number(t.chainId) })),
                  Promise.resolve()
                );
              } catch (n) {
                return Promise.reject(n);
              }
            }),
            (o.close = function () {
              try {
                var t = this;
                return Promise.resolve(t.portis.logout()).then(function () {
                  t.emitDeactivate();
                });
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            i
          );
        })(n.Q),
        k = r(64269);
      function _(t, e) {
        return (_ =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function C(t, e) {
        if (null == t) return {};
        var r,
          n,
          i = {},
          o = Object.keys(t);
        for (n = 0; n < o.length; n++)
          e.indexOf((r = o[n])) >= 0 || (i[r] = t[r]);
        return i;
      }
      var N = ["activate", "onError", "throwErrors"],
        I = [
          "supportedChainIds",
          "connectors",
          "uauth",
          "shouldLoginWithRedirect",
        ];
      if ("undefined" != typeof window) {
        var O = window;
        (O.UAUTH_VERSION = O.UAUTH_VERSION || {}),
          (O.UAUTH_VERSION.WEB3_REACT = "2.2.0");
      }
      var P = (function (t) {
        var e, n;
        function i(e) {
          var r;
          return (
            ((r =
              t.call(this, { supportedChainIds: e.supportedChainIds }) ||
              this).options = void 0),
            (r._subConnector = void 0),
            (r._uauth = void 0),
            (r.handleUpdate = function (t) {
              return r.emitUpdate(t);
            }),
            (r.handleDeactivate = function () {
              return r.emitDeactivate();
            }),
            (r.handleError = function (t) {
              return r.emitError(t);
            }),
            (r.options = e),
            r
          );
        }
        (n = t),
          ((e = i).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          _(e, n),
          (i.registerUAuth = function (t) {
            i.UAuth = t;
          }),
          (i.importUAuth = function () {
            try {
              var t = (function () {
                if (null == i.UAuth)
                  return Promise.resolve(
                    Promise.all([r.e(421), r.e(419), r.e(376)])
                      .then(r.bind(r, 26419))
                      .then(function (t) {
                        var e;
                        return null != (e = null == t ? void 0 : t.default)
                          ? e
                          : t;
                      })
                  ).then(function (t) {
                    i.UAuth = t;
                  });
              })();
              return Promise.resolve(
                t && t.then ? t.then(function () {}) : void 0
              );
            } catch (t) {
              return Promise.reject(t);
            }
          });
        var o,
          s,
          a = i.prototype;
        return (
          (a.callbackAndActivate = function (t) {
            try {
              var e = this;
              return Promise.resolve(i.importUAuth()).then(function () {
                function r() {
                  return n(e, i, o);
                }
                var n = t.activate,
                  i = t.onError,
                  o = t.throwErrors,
                  s = C(t, N),
                  a = s.url
                    ? Promise.resolve(e.uauth.loginCallback(s)).then(
                        function () {}
                      )
                    : Promise.resolve(e.uauth.loginCallback()).then(
                        function () {}
                      );
                return a && a.then ? a.then(r) : r();
              });
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (a.activate = function () {
            try {
              var t = this;
              return Promise.resolve(i.importUAuth()).then(function () {
                var e;
                function r(r) {
                  var n;
                  if (null == e.wallet_type_hint)
                    throw new Error("no wallet type present");
                  if (["web3", "injected"].includes(e.wallet_type_hint))
                    t._subConnector = t.options.connectors.injected;
                  else {
                    if ("walletconnect" !== e.wallet_type_hint)
                      throw new Error("Connector not supported");
                    t._subConnector = t.options.connectors.walletconnect;
                  }
                  return (
                    null != t &&
                      null != (n = t._subConnector) &&
                      n.on &&
                      (t._subConnector.on(k._.Update, t.handleUpdate),
                      t._subConnector.on(k._.Deactivate, t.handleDeactivate),
                      t._subConnector.on(k._.Error, t.handleError)),
                    Promise.resolve(t._subConnector.activate())
                  );
                }
                var n = (function (r, n) {
                  try {
                    var i = Promise.resolve(t.uauth.user()).then(function (t) {
                      e = t;
                    });
                  } catch (t) {
                    return n();
                  }
                  return i && i.then ? i.then(void 0, n) : i;
                })(0, function () {
                  if (!t.uauth.fallbackLoginOptions.scope.includes("wallet"))
                    throw new Error(
                      'Must request the "wallet" scope for connector to work.'
                    );
                  return t.options.shouldLoginWithRedirect
                    ? Promise.resolve(
                        t.uauth.login({
                          packageName: "@uauth/web3-react",
                          packageVersion: "2.2.0",
                        })
                      ).then(function () {
                        return Promise.resolve(
                          new Promise(function () {})
                        ).then(function () {
                          throw new Error("Should never get here.");
                        });
                      })
                    : Promise.resolve(
                        t.uauth.loginWithPopup({
                          packageName: "@uauth/web3-react",
                          packageVersion: "2.2.0",
                        })
                      ).then(function () {
                        return Promise.resolve(t.uauth.user()).then(function (
                          t
                        ) {
                          e = t;
                        });
                      });
                });
                return n && n.then ? n.then(r) : r();
              });
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (a.deactivate = function () {
            var t;
            this._subConnector &&
              (this.uauth.fallbackLogoutOptions.rpInitiatedLogout ||
                this.uauth.logout({ rpInitiatedLogout: !1 }),
              null != this &&
                null != (t = this._subConnector) &&
                t.removeListener &&
                (this._subConnector.removeListener(
                  k._.Update,
                  this.handleUpdate
                ),
                this._subConnector.removeListener(
                  k._.Deactivate,
                  this.handleDeactivate
                ),
                this._subConnector.removeListener(k._.Error, this.handleError)),
              this.uauth.logout(),
              this._subConnector.deactivate());
          }),
          (a.isAuthorized = function () {
            try {
              var t = this;
              return Promise.resolve(t.uauth.user()).then(function (e) {
                var r;
                return (
                  !(
                    !e ||
                    "function" !=
                      typeof (null == (r = t.subConnector)
                        ? void 0
                        : r.isAuthorized)
                  ) && t.subConnector.isAuthorized()
                );
              });
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (a.getProvider = function () {
            return this.subConnector.getProvider();
          }),
          (a.getChainId = function () {
            return this.subConnector.getChainId();
          }),
          (a.getAccount = function () {
            return this.subConnector.getAccount();
          }),
          (o = i),
          (s = [
            {
              key: "uauth",
              get: function () {
                var t = this.options,
                  e = t.uauth,
                  r = C(t, I);
                if (e) return e;
                if (this._uauth) return this._uauth;
                if (null == i.UAuth)
                  throw new Error(
                    "Must import UAuth before constructing a UAuth Object"
                  );
                if (!r.clientID || !r.redirectUri)
                  throw new Error("Incomplete constructor options");
                return (this._uauth = new i.UAuth(r)), this._uauth;
              },
            },
            {
              key: "subConnector",
              get: function () {
                if (null == this._subConnector)
                  throw new Error("no subconnector");
                return this._subConnector;
              },
            },
          ]) &&
            (function (t, e) {
              for (var r = 0; r < e.length; r++) {
                var n = e[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(t, n.key, n);
              }
            })(o.prototype, s),
          Object.defineProperty(o, "prototype", { writable: !1 }),
          i
        );
      })(n.Q);
      P.UAuth = void 0;
      var S = r(95479);
      function x(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var R,
        T = "731d9dfe299a449fbbcb0e6fc8f888ec";
      var B,
        L =
          (x((R = {}), S.HL.MAINNET, "https://mainnet.infura.io/v3/".concat(T)),
          x(R, S.HL.RINKEBY, "https://rinkeby.infura.io/v3/".concat(T)),
          x(R, S.HL.POLYGON, "https://polygon-mainnet.infura.io/v3/".concat(T)),
          x(
            R,
            S.HL.POLYGON_MUMBAI,
            "https://polygon-mumbai.infura.io/v3/".concat(T)
          ),
          R),
        U = new g({ supportedChainIds: S.$C }),
        D = new v.zw({ supportedChainIds: S.$C, rpc: L, qrcode: !0 }),
        j = new P({
          clientID: "9c6611b3-ed21-4858-abda-e20cf2209457",
          redirectUri: "https://www.nfttrader.io",
          postLogoutRedirectUri: "https://www.nfttrader.io",
          scope: "openid wallet",
          connectors: { injected: U, walletconnect: D },
        }),
        F =
          (new M({ dAppId: null !== (B = "value") ? B : "", networks: [1] }),
          new y.J({
            url: L[S.HL.MAINNET],
            appName: "NFTTrader",
            appLogoUrl: "",
            supportedChainIds: S.$C,
          }));
    },
    63135: function (t, e, r) {
      "use strict";
      r.d(e, {
        Fm: function () {
          return n;
        },
        KE: function () {
          return i;
        },
      });
      var n = (0, r(66072).oM)({
          name: "headermobile",
          initialState: { isWalletModalOpen: !1 },
          reducers: {
            setIsWalletModalOpen: function (t, e) {
              t.isWalletModalOpen = e.payload;
            },
          },
        }),
        i = n.actions.setIsWalletModalOpen;
      n.reducer;
    },
    14647: function (t, e, r) {
      "use strict";
      r.d(e, {
        Ou: function () {
          return n;
        },
        gj: function () {
          return i;
        },
      });
      var n = (0, r(66072).oM)({
          name: "moonpaymodal",
          initialState: { isOpen: !1 },
          reducers: {
            setMoonPayModalOpen: function (t, e) {
              t.isOpen = e.payload;
            },
          },
        }),
        i = n.actions.setMoonPayModalOpen;
      n.reducer;
    },
    54646: function (t, e, r) {
      "use strict";
      r.d(e, {
        Pw: function () {
          return n;
        },
        nr: function () {
          return o;
        },
        dp: function () {
          return s;
        },
      });
      var n = (0, r(66072).oM)({
          name: "reportmodal",
          initialState: { isOpen: !1, collection: null },
          reducers: {
            setReportModalOpen: function (t, e) {
              t.isOpen = e.payload;
            },
            setCollection: function (t, e) {
              t.collection = e.payload;
            },
          },
        }),
        i = n.actions,
        o = i.setReportModalOpen,
        s = i.setCollection;
      n.reducer;
    },
    27171: function (t, e, r) {
      "use strict";
      r.d(e, {
        _B: function () {
          return s;
        },
        r$: function () {
          return d;
        },
        tj: function () {
          return p;
        },
        Um: function () {
          return m;
        },
        xI: function () {
          return g;
        },
        Dc: function () {
          return v;
        },
        eY: function () {
          return y;
        },
        dL: function () {
          return w;
        },
        M7: function () {
          return b;
        },
        Bu: function () {
          return A;
        },
        FI: function () {
          return E;
        },
        YB: function () {
          return M;
        },
        TG: function () {
          return k;
        },
        c6: function () {
          return _;
        },
        iB: function () {
          return C;
        },
        E4: function () {
          return N;
        },
        TJ: function () {
          return I;
        },
        zs: function () {
          return O;
        },
        Bd: function () {
          return P;
        },
        sX: function () {
          return S;
        },
        $N: function () {
          return x;
        },
        xp: function () {
          return R;
        },
        Qw: function () {
          return T;
        },
        CO: function () {
          return B;
        },
        Gu: function () {
          return L;
        },
        MW: function () {
          return U;
        },
        jO: function () {
          return D;
        },
        eF: function () {
          return j;
        },
        _1: function () {
          return F;
        },
        AW: function () {
          return z;
        },
        cP: function () {
          return q;
        },
        eV: function () {
          return G;
        },
        y4: function () {
          return Y;
        },
        YM: function () {
          return J;
        },
        P$: function () {
          return H;
        },
        aj: function () {
          return K;
        },
        vg: function () {
          return Q;
        },
        C$: function () {
          return W;
        },
        bW: function () {
          return V;
        },
        $J: function () {
          return Z;
        },
        KC: function () {
          return X;
        },
        D0: function () {
          return $;
        },
        dC: function () {
          return tt;
        },
        J7: function () {
          return et;
        },
        Ky: function () {
          return rt;
        },
        N0: function () {
          return nt;
        },
        Rd: function () {
          return it;
        },
        sP: function () {
          return ot;
        },
        s7: function () {
          return st;
        },
        JW: function () {
          return at;
        },
        NL: function () {
          return ut;
        },
        Dh: function () {
          return ct;
        },
        Nu: function () {
          return lt;
        },
      });
      var n = r(66072),
        i = [];
      i.push(
        {
          stepDescription: "Find A Counterparty Trader",
          isCurrent: !0,
          isCompleted: !1,
        },
        {
          stepDescription: "Digital Assets You Desire",
          isCurrent: !1,
          isCompleted: !1,
        },
        { stepDescription: "Your Offer", isCurrent: !1, isCompleted: !1 },
        {
          stepDescription: "Verify & Confirm This Trade",
          isCurrent: !1,
          isCompleted: !1,
        }
      );
      var o = {
          isOpen: !1,
          isStepperMenuListOpen: !1,
          isDeleteTradeModalOpen: !1,
          isCustomCollectionModalOpen: !1,
          isERC20ModalOpen: !1,
          isApprovingModalOpen: !1,
          isUnverifiedCollectionModalOpen: !1,
          isCartOpen: !1,
          isPaymentModalOpen: !1,
          stepperMenuSteps: i,
          currentStepMenu: 0,
          maker: { collector: null, assets: [] },
          taker: { collector: null, assets: [] },
          canProceed: !1,
          dayDuration: 7,
          who: null,
          assetsToApprove: 0,
          assetsCurrentlyApproved: 0,
          assetsAttemptsToApprove: 0,
          isApproving: !1,
          swapId: null,
          tradeCreationDate: null,
          tradeExpirationDate: null,
          mode: null,
          replaceCollectorAddress: null,
          isStartToCheckReportedAssets: !0,
          isErrorToCheckReportedAssets: !1,
          hasFinishedToCheckReportedAssets: !1,
          countCheckedReportedAssets: 0,
          existsReportedAsset: !1,
        },
        s = (0, n.oM)({
          name: "trademodal",
          initialState: o,
          reducers: {
            clearTradeModalState: function (t) {
              (t.isStepperMenuListOpen = !1),
                (t.isDeleteTradeModalOpen = !1),
                (t.isCustomCollectionModalOpen = !1),
                (t.isERC20ModalOpen = !1),
                (t.stepperMenuSteps = i),
                (t.currentStepMenu = 0),
                (t.maker = { collector: null, assets: [] }),
                (t.taker = { collector: null, assets: [] }),
                (t.canProceed = !1),
                (t.dayDuration = 7),
                (t.isApprovingModalOpen = !1),
                (t.isUnverifiedCollectionModalOpen = !1),
                (t.isCartOpen = !1),
                (t.isPaymentModalOpen = !1),
                (t.assetsToApprove = 0),
                (t.assetsCurrentlyApproved = 0),
                (t.assetsAttemptsToApprove = 0),
                (t.isApproving = !1),
                (t.tradeCreationDate = null),
                (t.tradeExpirationDate = null),
                (t.replaceCollectorAddress = null),
                (t.mode = null),
                (t.isStartToCheckReportedAssets = !0),
                (t.isErrorToCheckReportedAssets = !1),
                (t.hasFinishedToCheckReportedAssets = !1),
                (t.countCheckedReportedAssets = 0),
                (t.existsReportedAsset = !1);
            },
            setTradeModalOpen: function (t, e) {
              t.isOpen = e.payload;
            },
            setStepperMenuListOpen: function (t, e) {
              t.isStepperMenuListOpen = e.payload;
            },
            setCurrentStepMenu: function (t, e) {
              t.currentStepMenu = e.payload;
            },
            setDeleteTradeModalOpen: function (t, e) {
              t.isDeleteTradeModalOpen = e.payload;
            },
            setCustomCollectionModalOpen: function (t, e) {
              t.isCustomCollectionModalOpen = e.payload;
            },
            setERC20ModalOpen: function (t, e) {
              t.isERC20ModalOpen = e.payload;
            },
            setMaker: function (t, e) {
              t.maker = e.payload;
            },
            setTaker: function (t, e) {
              t.taker = e.payload;
            },
            addMakerCollector: function (t, e) {
              t.maker && (t.maker.collector = e.payload);
            },
            addTakerCollector: function (t, e) {
              t.taker && (t.taker.collector = e.payload);
            },
            removeMakerCollector: function (t) {
              var e;
              (null === (e = t.maker) || void 0 === e ? void 0 : e.collector) &&
                (t.maker.collector = null);
            },
            removeTakerCollector: function (t) {
              var e;
              (null === (e = t.taker) || void 0 === e ? void 0 : e.collector) &&
                (t.taker.collector = null);
            },
            updateTakerCollectorFavourite: function (t, e) {
              var r;
              (null === (r = t.taker) || void 0 === r ? void 0 : r.collector) &&
                (t.taker.collector.isFavourite = e.payload);
            },
            clearMakerAssets: function (t) {
              t.maker && t.maker.assets && (t.maker.assets = []);
            },
            clearTakerAssets: function (t) {
              t.taker && t.taker.assets && (t.taker.assets = []);
            },
            addMakerAsset: function (t, e) {
              if (t.maker && t.maker.assets) {
                var r = e.payload;
                -1 ===
                  t.maker.assets.findIndex(function (t) {
                    var e, n;
                    return "ERC721" === t.type || "ERC1155" === t.type
                      ? t.collection.address.toLowerCase() ===
                          r.collection.address.toLowerCase() &&
                          (null === (e = t.id) || void 0 === e
                            ? void 0
                            : e.toLowerCase()) ===
                            (null === (n = r.id) || void 0 === n
                              ? void 0
                              : n.toLowerCase())
                      : "ERC20" === t.type
                      ? t.collection.address.toLowerCase() ===
                        r.collection.address.toLowerCase()
                      : "NATIVE" === t.type
                      ? t.type.toLowerCase() === r.type.toLowerCase()
                      : void 0;
                  }) && t.maker.assets.push(e.payload);
              }
            },
            addTakerAsset: function (t, e) {
              if (t.taker && t.taker.assets) {
                var r = e.payload;
                -1 ===
                  t.taker.assets.findIndex(function (t) {
                    var e, n;
                    return "ERC721" === t.type || "ERC1155" === t.type
                      ? t.collection.address.toLowerCase() ===
                          r.collection.address.toLowerCase() &&
                          (null === (e = t.id) || void 0 === e
                            ? void 0
                            : e.toLowerCase()) ===
                            (null === (n = r.id) || void 0 === n
                              ? void 0
                              : n.toLowerCase())
                      : "ERC20" === t.type
                      ? t.collection.address.toLowerCase() ===
                        r.collection.address.toLowerCase()
                      : "NATIVE" === t.type
                      ? t.type.toLowerCase() === r.type.toLowerCase()
                      : void 0;
                  }) && t.taker.assets.push(e.payload);
              }
            },
            removeMakerNFTAsset: function (t, e) {
              if (t.maker && t.maker.assets) {
                var r = e.payload,
                  n = t.maker.assets.findIndex(function (t) {
                    var e, n;
                    return (
                      t.collection.address.toLowerCase() ===
                        r.collection.address.toLowerCase() &&
                      (null === (e = t.id) || void 0 === e
                        ? void 0
                        : e.toLowerCase()) ===
                        (null === (n = r.id) || void 0 === n
                          ? void 0
                          : n.toLowerCase())
                    );
                  });
                n > -1 && t.maker.assets.splice(n, 1);
              }
            },
            removeTakerNFTAsset: function (t, e) {
              if (t.taker && t.taker.assets) {
                var r = e.payload,
                  n = t.taker.assets.findIndex(function (t) {
                    var e, n;
                    return (
                      t.collection.address.toLowerCase() ===
                        r.collection.address.toLowerCase() &&
                      (null === (e = t.id) || void 0 === e
                        ? void 0
                        : e.toLowerCase()) ===
                        (null === (n = r.id) || void 0 === n
                          ? void 0
                          : n.toLowerCase())
                    );
                  });
                n > -1 && t.taker.assets.splice(n, 1);
              }
            },
            removeMakerERC20Asset: function (t, e) {
              if (t.maker && t.maker.assets) {
                var r = e.payload,
                  n = t.maker.assets.findIndex(function (t) {
                    return (
                      t.collection.address.toLowerCase() ===
                      r.collection.address.toLowerCase()
                    );
                  });
                n > -1 && t.maker.assets.splice(n, 1);
              }
            },
            removeTakerERC20Asset: function (t, e) {
              if (t.taker && t.taker.assets) {
                var r = e.payload,
                  n = t.taker.assets.findIndex(function (t) {
                    return (
                      t.collection.address.toLowerCase() ===
                      r.collection.address.toLowerCase()
                    );
                  });
                n > -1 && t.taker.assets.splice(n, 1);
              }
            },
            removeMakerNativeAsset: function (t, e) {
              if (t.maker && t.maker.assets) {
                var r = e.payload,
                  n = t.maker.assets.findIndex(function (t) {
                    return t.type.toLowerCase() === r.type.toLowerCase();
                  });
                n > -1 && t.maker.assets.splice(n, 1);
              }
            },
            removeTakerNativeAsset: function (t, e) {
              if (t.taker && t.taker.assets) {
                var r = e.payload,
                  n = t.taker.assets.findIndex(function (t) {
                    return t.type.toLowerCase() === r.type.toLowerCase();
                  });
                n > -1 && t.taker.assets.splice(n, 1);
              }
            },
            updateMakerNFTApproved: function (t, e) {
              if (t.maker && t.maker.assets) {
                var r = e.payload,
                  n = r.id,
                  i = r.collectionAddress,
                  o = r.approved,
                  s = t.maker.assets.findIndex(function (t) {
                    return (
                      t.id === n &&
                      t.collection.address.toLowerCase() === i.toLowerCase() &&
                      ("ERC1155" === t.type || "ERC721" === t.type)
                    );
                  });
                s > -1 && (t.maker.assets[s].isApproved = o);
              }
            },
            updateTakerNFTApproved: function (t, e) {
              if (t.taker && t.taker.assets) {
                var r = e.payload,
                  n = r.id,
                  i = r.collectionAddress,
                  o = r.approved,
                  s = t.taker.assets.findIndex(function (t) {
                    return (
                      t.id === n &&
                      t.collection.address.toLowerCase() === i.toLowerCase() &&
                      ("ERC1155" === t.type || "ERC721" === t.type)
                    );
                  });
                s > -1 && (t.taker.assets[s].isApproved = o);
              }
            },
            updateMakerERC20Approved: function (t, e) {
              if (t.maker && t.maker.assets) {
                var r = e.payload,
                  n = r.contractAddress,
                  i = r.approved,
                  o = t.maker.assets.findIndex(function (t) {
                    return (
                      "ERC20" === t.type &&
                      t.collection.address.toLowerCase() === n.toLowerCase()
                    );
                  });
                o > -1 && (t.maker.assets[o].isApproved = i);
              }
            },
            updateTakerERC20Approved: function (t, e) {
              if (t.taker && t.taker.assets) {
                var r = e.payload,
                  n = r.contractAddress,
                  i = r.approved,
                  o = t.taker.assets.findIndex(function (t) {
                    return (
                      "ERC20" === t.type &&
                      t.collection.address.toLowerCase() === n.toLowerCase()
                    );
                  });
                o > -1 && (t.taker.assets[o].isApproved = i);
              }
            },
            resetMakerAssetApproved: function (t) {
              t.maker &&
                t.maker.assets &&
                t.maker.assets.forEach(function (t) {
                  t.isApproved = !1;
                });
            },
            resetTakerAssetApproved: function (t) {
              t.taker &&
                t.taker.assets &&
                t.taker.assets.forEach(function (t) {
                  t.isApproved = !1;
                });
            },
            updateMakerERC1155Asset: function (t, e) {
              if (t.maker && t.maker.assets) {
                var r = e.payload,
                  n = r.id,
                  i = r.collectionAddress,
                  o = r.amount,
                  s = t.maker.assets.findIndex(function (t) {
                    var e;
                    return (
                      t.collection.address.toLowerCase() === i.toLowerCase() &&
                      (null === (e = t.id) || void 0 === e
                        ? void 0
                        : e.toLowerCase()) === n.toLowerCase()
                    );
                  });
                s > -1 && (t.maker.assets[s].amount = o);
              }
            },
            updateTakerERC1155Asset: function (t, e) {
              if (t.taker && t.taker.assets) {
                var r = e.payload,
                  n = r.id,
                  i = r.collectionAddress,
                  o = r.amount,
                  s = t.taker.assets.findIndex(function (t) {
                    var e;
                    return (
                      t.collection.address.toLowerCase() === i.toLowerCase() &&
                      (null === (e = t.id) || void 0 === e
                        ? void 0
                        : e.toLowerCase()) === n.toLowerCase()
                    );
                  });
                s > -1 && (t.taker.assets[s].amount = o);
              }
            },
            updateMakerERC20Asset: function (t, e) {
              if (t.maker && t.maker.assets) {
                var r = e.payload,
                  n = r.tokenAddress,
                  i = r.amount,
                  o = r.amountHumanReadable,
                  s = t.maker.assets.findIndex(function (t) {
                    return (
                      n.toLowerCase() === t.collection.address.toLowerCase()
                    );
                  });
                s > -1 &&
                  ((t.maker.assets[s].amount = i),
                  (t.maker.assets[s].amountHumanReadable = o));
              }
            },
            updateTakerERC20Asset: function (t, e) {
              if (t.taker && t.taker.assets) {
                var r = e.payload,
                  n = r.tokenAddress,
                  i = r.amount,
                  o = r.amountHumanReadable,
                  s = t.taker.assets.findIndex(function (t) {
                    return (
                      n.toLowerCase() === t.collection.address.toLowerCase()
                    );
                  });
                s > -1 &&
                  ((t.taker.assets[s].amount = i),
                  (t.taker.assets[s].amountHumanReadable = o));
              }
            },
            updateMakerNativeAsset: function (t, e) {
              if (t.maker && t.maker.assets) {
                var r = e.payload,
                  n = r.type,
                  i = r.amount,
                  o = r.amountHumanReadable,
                  s = t.maker.assets.findIndex(function (t) {
                    return n.toLowerCase() === t.type.toLowerCase();
                  });
                s > -1 &&
                  ((t.maker.assets[s].amount = i),
                  (t.maker.assets[s].amountHumanReadable = o));
              }
            },
            updateTakerNativeAsset: function (t, e) {
              if (t.taker && t.taker.assets) {
                var r = e.payload,
                  n = r.type,
                  i = r.amount,
                  o = r.amountHumanReadable,
                  s = t.taker.assets.findIndex(function (t) {
                    return n.toLowerCase() === t.type.toLowerCase();
                  });
                s > -1 &&
                  ((t.taker.assets[s].amount = i),
                  (t.taker.assets[s].amountHumanReadable = o));
              }
            },
            setDayDuration: function (t, e) {
              t.dayDuration = e.payload;
            },
            validate: function (t) {
              t.canProceed = a(t);
            },
            setCanProceed: function (t, e) {
              t.canProceed = e.payload;
            },
            setIsApprovingModalOpen: function (t, e) {
              t.isApprovingModalOpen = e.payload;
            },
            setIsUnverifiedCollectionModalOpen: function (t, e) {
              t.isUnverifiedCollectionModalOpen = e.payload;
            },
            setIsCartOpen: function (t, e) {
              t.isCartOpen = e.payload;
            },
            setIsPaymentModalOpen: function (t, e) {
              t.isPaymentModalOpen = e.payload;
            },
            testApprove: function (t, e) {
              if (t.maker && t.maker.assets && t.taker && t.taker.assets) {
                var r = e.payload,
                  n = r.contractAddress,
                  i = r.type,
                  o = r.approved,
                  s = r.id,
                  a = ("maker" === t.who ? t.maker : t.taker).assets,
                  u = 0;
                (u = s
                  ? a.findIndex(function (t) {
                      if ("ERC721" === i || "ERC1155" === i)
                        return (
                          t.collection.address.toLowerCase() ===
                            n.toLowerCase() && s === t.id
                        );
                    })
                  : a.findIndex(function (t) {
                      return "ERC721" === i || "ERC1155" === i || "ERC20" === i
                        ? t.collection.address.toLowerCase() === n.toLowerCase()
                        : "NATIVE" === t.type;
                    })) > -1 && "NATIVE" !== i
                  ? s
                    ? ((a[u].isApproved = o),
                      (t.assetsAttemptsToApprove =
                        t.assetsAttemptsToApprove + 1),
                      o &&
                        (t.assetsCurrentlyApproved =
                          t.assetsCurrentlyApproved + 1))
                    : a.forEach(function (e) {
                        i === e.type &&
                          n.toLowerCase() ===
                            e.collection.address.toLowerCase() &&
                          !1 === e.isApproved &&
                          ((e.isApproved = o),
                          (t.assetsAttemptsToApprove =
                            t.assetsAttemptsToApprove + 1),
                          o &&
                            (t.assetsCurrentlyApproved =
                              t.assetsCurrentlyApproved + 1));
                      })
                  : u > -1 &&
                    "NATIVE" === i &&
                    ((t.assetsCurrentlyApproved =
                      t.assetsCurrentlyApproved + 1),
                    (t.assetsAttemptsToApprove = t.assetsAttemptsToApprove + 1),
                    (a[u].isApproved = !0));
              }
            },
            setWho: function (t, e) {
              t.who = e.payload;
            },
            setAssetsCurrentlyApproved: function (t, e) {
              t.assetsCurrentlyApproved = e.payload;
            },
            setAssetsAttemptsToApprove: function (t, e) {
              t.assetsAttemptsToApprove = e.payload;
            },
            setAssetsToApprove: function (t, e) {
              t.assetsToApprove = e.payload;
            },
            setIsApproving: function (t, e) {
              t.isApproving = e.payload;
            },
            setSwapId: function (t, e) {
              t.swapId = e.payload;
            },
            forceUpdateAssetsToApprove: function (t) {
              (t.assetsToApprove = h(t)),
                (t.assetsCurrentlyApproved = 0),
                (t.assetsAttemptsToApprove = 0);
            },
            setTradeCreationDate: function (t, e) {
              t.tradeCreationDate = e.payload;
            },
            setTradeExpirationDate: function (t, e) {
              t.tradeExpirationDate = e.payload;
            },
            setTradeModalMode: function (t, e) {
              t.mode = e.payload;
            },
            setReplaceCollectorAddress: function (t, e) {
              t.replaceCollectorAddress = e.payload;
            },
            setIsErrorToCheckReportedAssets: function (t, e) {
              t.isErrorToCheckReportedAssets = e.payload;
            },
            setIsStartToCheckReportedAssets: function (t, e) {
              t.isStartToCheckReportedAssets = e.payload;
            },
            setHasFinishedToCheckReportedAssets: function (t, e) {
              t.hasFinishedToCheckReportedAssets = e.payload;
            },
            setCountCheckedReportedAssets: function (t, e) {
              t.countCheckedReportedAssets = e.payload;
            },
            setExistsReportedAsset: function (t, e) {
              t.existsReportedAsset = e.payload;
            },
            validateReportedAssets: function (t, e) {
              if (t && t.maker && t.taker) {
                var r =
                  t.maker.assets.filter(function (t) {
                    return "ERC1155" === t.type || "ERC721" === t.type;
                  }).length +
                  t.taker.assets.filter(function (t) {
                    return "ERC1155" === t.type || "ERC721" === t.type;
                  }).length;
                (t.countCheckedReportedAssets =
                  t.countCheckedReportedAssets + 1),
                  e.payload.isError && (t.isErrorToCheckReportedAssets = !0),
                  e.payload.isReported && (t.existsReportedAsset = !0),
                  t.countCheckedReportedAssets === r &&
                    ((t.isStartToCheckReportedAssets = !1),
                    (t.hasFinishedToCheckReportedAssets = !0));
              }
            },
          },
        }),
        a = function (t) {
          var e = !1;
          switch (t.currentStepMenu) {
            case 0:
              e = u(t);
              break;
            case 1:
              e = c(t);
              break;
            case 2:
              (e = l(t)) &&
                ((t.assetsToApprove = h(t)),
                (t.assetsCurrentlyApproved = 0),
                (t.assetsAttemptsToApprove = 0));
          }
          return e;
        },
        u = function (t) {
          return !!t.taker.collector;
        },
        c = function (t) {
          return t.taker.assets.length > 0;
        },
        l = function (t) {
          return t.maker.assets.length > 0;
        },
        h = function (t) {
          var e = t.maker,
            r = t.taker,
            n = e.assets,
            i = r.assets,
            o = 0;
          return (
            "maker" == t.who
              ? n.forEach(function (t) {
                  o++;
                })
              : "taker" == t.who &&
                i.forEach(function (t) {
                  o++;
                }),
            o
          );
        },
        f = s.actions,
        d = f.setTradeModalOpen,
        p = f.setStepperMenuListOpen,
        m = f.setCurrentStepMenu,
        g = f.setDeleteTradeModalOpen,
        v = f.setCustomCollectionModalOpen,
        y = f.setERC20ModalOpen,
        w = (f.setMaker, f.setTaker),
        b = f.addMakerCollector,
        A = f.addTakerCollector,
        E = (f.removeMakerCollector, f.removeTakerCollector),
        M = f.updateTakerCollectorFavourite,
        k = f.addMakerAsset,
        _ = f.addTakerAsset,
        C = f.removeMakerNFTAsset,
        N = f.removeTakerNFTAsset,
        I = f.removeMakerERC20Asset,
        O = f.removeTakerERC20Asset,
        P = f.removeMakerNativeAsset,
        S = f.removeTakerNativeAsset,
        x =
          (f.updateMakerERC1155Asset,
          f.updateTakerERC1155Asset,
          f.updateMakerERC20Asset),
        R = f.updateTakerERC20Asset,
        T = f.updateMakerNativeAsset,
        B = f.updateTakerNativeAsset,
        L = f.validate,
        U = f.setCanProceed,
        D = f.clearTradeModalState,
        j = f.setDayDuration,
        F = f.setIsApprovingModalOpen,
        z = f.setIsUnverifiedCollectionModalOpen,
        q =
          (f.updateMakerNFTApproved,
          f.updateTakerNFTApproved,
          f.updateMakerERC20Approved,
          f.updateTakerERC20Approved,
          f.testApprove),
        G = f.setWho,
        Y = f.setAssetsCurrentlyApproved,
        J = f.setAssetsAttemptsToApprove,
        H = f.setIsApproving,
        K = f.setIsPaymentModalOpen,
        Q = f.setSwapId,
        W = f.clearMakerAssets,
        V = f.clearTakerAssets,
        Z = f.setAssetsToApprove,
        X = f.resetMakerAssetApproved,
        $ = (f.resetTakerAssetApproved, f.forceUpdateAssetsToApprove),
        tt = f.setTradeCreationDate,
        et = f.setTradeExpirationDate,
        rt = f.setTradeModalMode,
        nt = f.setReplaceCollectorAddress,
        it = f.setIsCartOpen,
        ot = f.setIsErrorToCheckReportedAssets,
        st = f.setIsStartToCheckReportedAssets,
        at = f.setHasFinishedToCheckReportedAssets,
        ut = f.setCountCheckedReportedAssets,
        ct = f.setExistsReportedAsset,
        lt = f.validateReportedAssets;
      s.reducer;
    },
    31672: function (t, e, r) {
      "use strict";
      r.d(e, {
        Fm: function () {
          return n;
        },
        M5: function () {
          return o;
        },
        hv: function () {
          return s;
        },
        fc: function () {
          return a;
        },
        DC: function () {
          return u;
        },
        nT: function () {
          return c;
        },
        b6: function () {
          return l;
        },
        vV: function () {
          return h;
        },
        AB: function () {
          return f;
        },
        mh: function () {
          return d;
        },
        tp: function () {
          return p;
        },
        eO: function () {
          return m;
        },
        kw: function () {
          return g;
        },
        Yf: function () {
          return v;
        },
        cT: function () {
          return y;
        },
        nd: function () {
          return w;
        },
        xg: function () {
          return b;
        },
        Ls: function () {
          return A;
        },
        kt: function () {
          return E;
        },
        up: function () {
          return M;
        },
      });
      var n = (0, r(66072).oM)({
          name: "waccount",
          initialState: {
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
          },
          reducers: {
            toggleIsConnected: function (t) {
              t.isConnected = !t.isConnected;
            },
            setIsConnected: function (t, e) {
              t.isConnected = e.payload;
            },
            setAccount: function (t, e) {
              t.account = e.payload;
            },
            setCurrentNetworkId: function (t, e) {
              t.currentNetworkId = e.payload;
            },
            setCurrentNetworkName: function (t, e) {
              t.currentNetworkName = e.payload;
            },
            setNonce: function (t, e) {
              t.nonce = e.payload;
            },
            setUsername: function (t, e) {
              t.username = e.payload;
            },
            setEmail: function (t, e) {
              t.email = e.payload;
            },
            setFirstLogin: function (t, e) {
              t.firstLogin = e.payload;
            },
            setCreatedAt: function (t, e) {
              t.createdAt = e.payload;
            },
            setUpdatedAt: function (t, e) {
              t.updatedAt = e.payload;
            },
            setJWTToken: function (t, e) {
              t.jwtToken = e.payload;
            },
            setWalletProviderName: function (t, e) {
              t.walletProviderName = e.payload;
            },
            setWalletProviderIconURL: function (t, e) {
              t.walletProviderIconURL = e.payload;
            },
            setWAccount: function (t, e) {
              e.payload;
            },
            setAvatarUrl: function (t, e) {
              t.avatarUrl = e.payload;
            },
            setIsNFT: function (t, e) {
              t.isNFT = e.payload;
            },
            setIsVerified: function (t, e) {
              t.isVerified = e.payload;
            },
            clearWAccountState: function (t) {
              (t.account = null),
                (t.isConnected = !1),
                (t.currentNetworkId = null),
                (t.currentNetworkName = null),
                (t.nonce = null),
                (t.username = null),
                (t.email = null),
                (t.firstLogin = null),
                (t.createdAt = null),
                (t.updatedAt = null),
                (t.jwtToken = null),
                (t.walletProviderName = null),
                (t.walletProviderIconURL = null),
                (t.avatarUrl = null),
                (t.isNFT = 0),
                (t.isVerified = 0);
            },
            setSessionExpired: function (t, e) {
              t.sessionExpired = e.payload;
            },
          },
        }),
        i = n.actions,
        o = (i.toggleIsConnected, i.setIsConnected),
        s = i.setAccount,
        a = i.setCurrentNetworkId,
        u = i.setCurrentNetworkName,
        c = i.setNonce,
        l = i.setUsername,
        h = i.setEmail,
        f = i.setFirstLogin,
        d = i.setCreatedAt,
        p = i.setUpdatedAt,
        m = i.setJWTToken,
        g = i.setWAccount,
        v = i.setWalletProviderName,
        y = i.setWalletProviderIconURL,
        w = i.setAvatarUrl,
        b = i.setIsNFT,
        A = i.setIsVerified,
        E = i.clearWAccountState,
        M = i.setSessionExpired;
      n.reducer;
    },
    13713: function (t, e, r) {
      "use strict";
      r.d(e, {
        cU: function () {
          return n;
        },
        $e: function () {
          return i;
        },
      });
      var n = (0, r(66072).oM)({
          name: "walletmodal",
          initialState: { isOpen: !1 },
          reducers: {
            setWalletModalOpen: function (t, e) {
              t.isOpen = e.payload;
            },
          },
        }),
        i = n.actions.setWalletModalOpen;
      n.reducer;
    },
    95479: function (t, e, r) {
      "use strict";
      function n(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var i, o;
      r.d(e, {
        HL: function () {
          return i;
        },
        qe: function () {
          return c;
        },
        dW: function () {
          return l;
        },
        $C: function () {
          return h;
        },
      }),
        (function (t) {
          (t[(t.MAINNET = 1)] = "MAINNET"),
            (t[(t.RINKEBY = 4)] = "RINKEBY"),
            (t[(t.POLYGON = 137)] = "POLYGON"),
            (t[(t.POLYGON_MUMBAI = 80001)] = "POLYGON_MUMBAI");
        })(i || (i = {}));
      var s,
        a =
          (n((o = {}), i.MAINNET, "ethereum"),
          n(o, i.RINKEBY, "rinkeby"),
          n(o, i.POLYGON, "polygon"),
          n(o, i.POLYGON_MUMBAI, "mumbai"),
          o),
        u =
          (n((s = {}), i.MAINNET, "ETH"),
          n(s, i.RINKEBY, "ETH"),
          n(s, i.POLYGON, "MATIC"),
          n(s, i.POLYGON_MUMBAI, "MATIC"),
          s),
        c = function (t) {
          return a[t] || "";
        },
        l = function (t) {
          return u[t] || "";
        },
        h = Object.values(i).filter(function (t) {
          return "number" === typeof t;
        });
      i.MAINNET, i.POLYGON, i.MAINNET, i.RINKEBY, i.POLYGON, i.POLYGON_MUMBAI;
    },
    47190: function (t, e, r) {
      "use strict";
      r.d(e, {
        c: function () {
          return o;
        },
      });
      var n = r(45613).Buffer,
        i = r(65588),
        o = function (t) {
          if (!t) return !1;
          var e = (0, i.SM)();
          if (!e) return !1;
          var r = (function (t) {
            try {
              return JSON.parse(
                n.from(t.split(".")[1], "base64").toString()
              ).address.toLowerCase();
            } catch (e) {
              return console.log(e), !1;
            }
          })(e);
          return !(!r || r != t);
        };
    },
    52229: function (t, e, r) {
      "use strict";
      r.d(e, {
        k: function () {
          return o;
        },
      });
      var n = function () {
          try {
            return (
              (function () {
                for (
                  var t = [], e = Object.keys(localStorage), r = e.length;
                  r--;

                )
                  (e[r].indexOf("verifier") > -1 ||
                    e[r].indexOf("request") > -1 ||
                    e[r].indexOf("authorization") > -1 ||
                    e[r].indexOf("openidConfiguration") > -1 ||
                    e[r].indexOf("username") > -1) &&
                    t.push(e[r]);
                return t;
              })().forEach(function (t) {
                localStorage.removeItem(t);
              }),
              !0
            );
          } catch (t) {
            return !1;
          }
        },
        i = function () {
          try {
            return (
              (function () {
                for (
                  var t = [], e = Object.keys(localStorage), r = e.length;
                  r--;

                )
                  e[r].indexOf("walletlink") > -1 && t.push(e[r]);
                return t;
              })().forEach(function (t) {
                localStorage.removeItem(t);
              }),
              !0
            );
          } catch (t) {
            return !1;
          }
        },
        o = function () {
          !(function () {
            try {
              var t = localStorage.getItem("nfttrader-waccount"),
                e = JSON.parse(t);
              (e.jwtToken = null),
                localStorage.setItem("nfttrader-waccount", JSON.stringify(e));
            } catch (r) {
              return !1;
            }
          })(),
            (function () {
              try {
                localStorage.removeItem("walletconnect");
              } catch (t) {
                return !1;
              }
            })(),
            i(),
            n();
        };
    },
    65588: function (t, e, r) {
      "use strict";
      r.d(e, {
        uM: function () {
          return i;
        },
        sh: function () {
          return o;
        },
        iZ: function () {
          return s;
        },
        jO: function () {
          return a;
        },
        Cz: function () {
          return u;
        },
        PT: function () {
          return c;
        },
        qQ: function () {
          return l;
        },
        UI: function () {
          return h;
        },
        AP: function () {
          return f;
        },
        iG: function () {
          return d;
        },
        MX: function () {
          return p;
        },
        Mc: function () {
          return m;
        },
        YI: function () {
          return g;
        },
        yA: function () {
          return v;
        },
        jL: function () {
          return y;
        },
        MB: function () {
          return w;
        },
        hE: function () {
          return b;
        },
        Jr: function () {
          return A;
        },
        pw: function () {
          return E;
        },
        p7: function () {
          return M;
        },
        Nv: function () {
          return k;
        },
        XU: function () {
          return _;
        },
        Xe: function () {
          return C;
        },
        lN: function () {
          return N;
        },
        wX: function () {
          return I;
        },
        js: function () {
          return O;
        },
        SM: function () {
          return P;
        },
        Yi: function () {
          return S;
        },
        Dw: function () {
          return x;
        },
        Ns: function () {
          return R;
        },
        JP: function () {
          return T;
        },
        a8: function () {
          return B;
        },
        Ij: function () {
          return L;
        },
      });
      var n = function () {
          localStorage.setItem("nfttrader-waccount", JSON.stringify({}));
          var t = localStorage.getItem("nfttrader-waccount");
          return JSON.parse(t);
        },
        i = function (t) {
          try {
            return (
              localStorage.setItem("nfttrader-waccount", JSON.stringify(t)), !0
            );
          } catch (e) {
            return !1;
          }
        },
        o = function (t) {
          try {
            var e = localStorage.getItem("nfttrader-waccount");
            null == e && (e = n());
            var r = JSON.parse(e);
            return (
              (r.account = t),
              localStorage.setItem("nfttrader-waccount", JSON.stringify(r)),
              !0
            );
          } catch (i) {
            return !1;
          }
        },
        s = function (t) {
          try {
            var e = localStorage.getItem("nfttrader-waccount");
            null == e && (e = n());
            var r = JSON.parse(e);
            return (
              (r.email = t),
              localStorage.setItem("nfttrader-waccount", JSON.stringify(r)),
              !0
            );
          } catch (i) {
            return !1;
          }
        },
        a = function (t) {
          try {
            var e = localStorage.getItem("nfttrader-waccount");
            null == e && (e = n());
            var r = JSON.parse(e);
            return (
              (r.firstLogin = t),
              localStorage.setItem("nfttrader-waccount", JSON.stringify(r)),
              !0
            );
          } catch (i) {
            return !1;
          }
        },
        u = function (t) {
          try {
            var e = localStorage.getItem("nfttrader-waccount");
            null == e && (e = n());
            var r = JSON.parse(e);
            return (
              (r.isConnected = t),
              localStorage.setItem("nfttrader-waccount", JSON.stringify(r)),
              !0
            );
          } catch (i) {
            return !1;
          }
        },
        c = function (t) {
          try {
            var e = localStorage.getItem("nfttrader-waccount");
            null == e && (e = n());
            var r = JSON.parse(e);
            return (
              (r.jwtToken = t),
              localStorage.setItem("nfttrader-waccount", JSON.stringify(r)),
              !0
            );
          } catch (i) {
            return !1;
          }
        },
        l = function (t) {
          try {
            var e = localStorage.getItem("nfttrader-waccount");
            null == e && (e = n());
            var r = JSON.parse(e);
            return (
              (r.nonce = t),
              localStorage.setItem("nfttrader-waccount", JSON.stringify(r)),
              !0
            );
          } catch (i) {
            return !1;
          }
        },
        h = function (t) {
          try {
            var e = localStorage.getItem("nfttrader-waccount");
            null == e && (e = n());
            var r = JSON.parse(e);
            return (
              (r.avatarUrl = t),
              localStorage.setItem("nfttrader-waccount", JSON.stringify(r)),
              !0
            );
          } catch (i) {
            return !1;
          }
        },
        f = function (t) {
          try {
            var e = localStorage.getItem("nfttrader-waccount");
            null == e && (e = n());
            var r = JSON.parse(e);
            return (
              (r.isVerified = t),
              localStorage.setItem("nfttrader-waccount", JSON.stringify(r)),
              !0
            );
          } catch (i) {
            return !1;
          }
        },
        d = function (t) {
          try {
            var e = localStorage.getItem("nfttrader-waccount");
            null == e && (e = n());
            var r = JSON.parse(e);
            return (
              (r.isNFT = t),
              localStorage.setItem("nfttrader-waccount", JSON.stringify(r)),
              !0
            );
          } catch (i) {
            return !1;
          }
        },
        p = function (t) {
          try {
            var e = localStorage.getItem("nfttrader-waccount");
            null == e && (e = n());
            var r = JSON.parse(e);
            return (
              (r.createdAt = t),
              localStorage.setItem("nfttrader-waccount", JSON.stringify(r)),
              !0
            );
          } catch (i) {
            return !1;
          }
        },
        m = function (t) {
          try {
            var e = localStorage.getItem("nfttrader-waccount");
            null == e && (e = n());
            var r = JSON.parse(e);
            return (
              (r.updatedAt = t),
              localStorage.setItem("nfttrader-waccount", JSON.stringify(r)),
              !0
            );
          } catch (i) {
            return !1;
          }
        },
        g = function (t) {
          try {
            var e = localStorage.getItem("nfttrader-waccount");
            null == e && (e = n());
            var r = JSON.parse(e);
            return (
              (r.username = t),
              localStorage.setItem("nfttrader-waccount", JSON.stringify(r)),
              !0
            );
          } catch (i) {
            return !1;
          }
        },
        v = function (t) {
          try {
            var e = localStorage.getItem("nfttrader-waccount");
            null == e && (e = n());
            var r = JSON.parse(e);
            return (
              (r.currentNetworkId = t),
              localStorage.setItem("nfttrader-waccount", JSON.stringify(r)),
              !0
            );
          } catch (i) {
            return !1;
          }
        },
        y = function (t) {
          try {
            var e = localStorage.getItem("nfttrader-waccount");
            null == e && (e = n());
            var r = JSON.parse(e);
            return (
              (r.currentNetworkName = t),
              localStorage.setItem("nfttrader-waccount", JSON.stringify(r)),
              !0
            );
          } catch (i) {
            return !1;
          }
        },
        w = function (t) {
          try {
            var e = localStorage.getItem("nfttrader-waccount");
            null == e && (e = n());
            var r = JSON.parse(e);
            return (
              (r.walletProviderIconURL = t),
              localStorage.setItem("nfttrader-waccount", JSON.stringify(r)),
              !0
            );
          } catch (i) {
            return !1;
          }
        },
        b = function (t) {
          try {
            var e = localStorage.getItem("nfttrader-waccount");
            null == e && (e = n());
            var r = JSON.parse(e);
            return (
              (r.walletProviderName = t),
              localStorage.setItem("nfttrader-waccount", JSON.stringify(r)),
              !0
            );
          } catch (i) {
            return !1;
          }
        },
        A = function () {
          try {
            var t = localStorage.getItem("nfttrader-waccount");
            return JSON.parse(t).account;
          } catch (e) {
            return null;
          }
        },
        E = function () {
          try {
            var t = localStorage.getItem("nfttrader-waccount");
            return JSON.parse(t).currentNetworkId;
          } catch (e) {
            return null;
          }
        },
        M = function () {
          try {
            var t = localStorage.getItem("nfttrader-waccount");
            return JSON.parse(t).currentNetworkName;
          } catch (e) {
            return null;
          }
        },
        k = function () {
          try {
            var t = localStorage.getItem("nfttrader-waccount");
            return JSON.parse(t).nonce;
          } catch (e) {
            return null;
          }
        },
        _ = function () {
          try {
            var t = localStorage.getItem("nfttrader-waccount");
            return JSON.parse(t).username;
          } catch (e) {
            return null;
          }
        },
        C = function () {
          try {
            var t = localStorage.getItem("nfttrader-waccount");
            return JSON.parse(t).email;
          } catch (e) {
            return null;
          }
        },
        N = function () {
          try {
            var t = localStorage.getItem("nfttrader-waccount");
            return JSON.parse(t).firstLogin;
          } catch (e) {
            return null;
          }
        },
        I = function () {
          try {
            var t = localStorage.getItem("nfttrader-waccount");
            return JSON.parse(t).createdAt;
          } catch (e) {
            return null;
          }
        },
        O = function () {
          try {
            var t = localStorage.getItem("nfttrader-waccount");
            return JSON.parse(t).updatedAt;
          } catch (e) {
            return null;
          }
        },
        P = function () {
          try {
            var t = localStorage.getItem("nfttrader-waccount");
            return JSON.parse(t).jwtToken;
          } catch (e) {
            return null;
          }
        },
        S = function () {
          try {
            var t = localStorage.getItem("nfttrader-waccount");
            return JSON.parse(t).walletProviderName;
          } catch (e) {
            return null;
          }
        },
        x = function () {
          try {
            var t = localStorage.getItem("nfttrader-waccount");
            return JSON.parse(t).walletProviderIconURL;
          } catch (e) {
            return null;
          }
        },
        R = function () {
          try {
            var t = localStorage.getItem("nfttrader-waccount");
            return JSON.parse(t).avatarUrl;
          } catch (e) {
            return null;
          }
        },
        T = function () {
          try {
            var t = localStorage.getItem("nfttrader-waccount");
            return JSON.parse(t).isVerified;
          } catch (e) {
            return 0;
          }
        },
        B = function () {
          try {
            var t = localStorage.getItem("nfttrader-waccount");
            return JSON.parse(t).isNFT;
          } catch (e) {
            return 0;
          }
        },
        L = function () {
          try {
            var t = localStorage.getItem("nfttrader-waccount");
            return JSON.parse(t).sessionExpired;
          } catch (e) {
            return !1;
          }
        };
    },
    97968: function (t, e, r) {
      "use strict";
      r.d(e, {
        T: function () {
          return i;
        },
        C: function () {
          return o;
        },
      });
      var n = r(32061),
        i = function () {
          return (0, n.I0)();
        },
        o = n.v9;
    },
    57919: function (t) {
      "use strict";
      t.exports = {
        locales: ["en", "jp"],
        defaultLocale: "en",
        pages: { "*": ["common"] },
      };
    },
    52588: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return J;
          },
        });
      var n = r(8014),
        i = r(57919),
        o = r.n(i),
        s = r(44138),
        a = (r(40906), r(66072)),
        u = r(27171),
        c = r(31672),
        l = r(13713),
        h = (0, a.oM)({
          name: "chainmanager",
          initialState: { isError: !1 },
          reducers: {
            toggleError: function (t) {
              t.isError = !t.isError;
            },
            setIsError: function (t, e) {
              t.isError = e.payload;
            },
          },
        }),
        f = h.actions,
        d = (f.toggleError, f.setIsError),
        p = (h.reducer, r(63135)),
        m = r(14647),
        g = r(54646),
        v = (0, a.xC)({
          reducer: {
            waccount: c.Fm.reducer,
            walletmodal: l.cU.reducer,
            trademodal: u._B.reducer,
            chainmanager: h.reducer,
            headermobile: p.Fm.reducer,
            moonpaymodal: m.Ou.reducer,
            reportmodal: g.Pw.reducer,
          },
        }),
        y = r(32061),
        w = r(24789),
        b = r(96269);
      function A(t) {
        return new b.Q(t);
      }
      var E = r(44453),
        M = r.n(E),
        k = r(56168),
        _ = r(93442),
        C = r(31249),
        N = r(83516),
        I = r(95479),
        O = r(97968),
        P = r(65588),
        S = r(47190),
        x = r(52229);
      function R(t, e, r, n, i, o, s) {
        try {
          var a = t[o](s),
            u = a.value;
        } catch (c) {
          return void r(c);
        }
        a.done ? e(u) : Promise.resolve(u).then(n, i);
      }
      function T(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function s(t) {
              R(o, n, i, s, a, "next", t);
            }
            function a(t) {
              R(o, n, i, s, a, "throw", t);
            }
            s(void 0);
          });
        };
      }
      function B(t, e) {
        return null != e &&
          "undefined" !== typeof Symbol &&
          e[Symbol.hasInstance]
          ? e[Symbol.hasInstance](t)
          : t instanceof e;
      }
      var L = function (t) {
          var e = t.children;
          return (
            (function () {
              var t = (0, w.Ge)(),
                e = t.activate,
                r = t.active,
                n = (0, O.T)(),
                i = (0, P.Jr)(),
                o = function (t) {
                  console.log("[".concat(t, "]: dispatching logout...")),
                    n((0, c.eO)(null)),
                    n((0, c.nT)(null)),
                    n((0, c.b6)(null)),
                    n((0, c.mh)(null)),
                    n((0, c.tp)(null)),
                    n((0, c.hv)(null)),
                    n((0, c.fc)(null)),
                    n((0, c.DC)(null)),
                    n((0, c.cT)(null)),
                    n((0, c.Yf)(null)),
                    n((0, c.AB)(null)),
                    n((0, c.up)(!1)),
                    n((0, c.M5)(!1)),
                    (0, x.k)();
                },
                s = function (t) {
                  console.log("[eager]: token is valid..."),
                    console.log("[eager]: dispatching login.."),
                    n((0, c.hv)(t)),
                    n((0, c.fc)((0, P.pw)())),
                    n((0, c.DC)((0, P.p7)())),
                    n((0, c.nT)((0, P.Nv)())),
                    n((0, c.b6)((0, P.XU)())),
                    n((0, c.vV)((0, P.Xe)())),
                    n((0, c.AB)((0, P.lN)())),
                    n((0, c.mh)((0, P.wX)())),
                    n((0, c.tp)((0, P.js)())),
                    n((0, c.eO)((0, P.SM)())),
                    n((0, c.Yf)((0, P.Yi)())),
                    n((0, c.cT)((0, P.Dw)())),
                    n((0, c.nd)((0, P.Ns)())),
                    n((0, c.Ls)((0, P.JP)())),
                    n((0, c.xg)((0, P.a8)())),
                    n((0, c.up)((0, P.Ij)())),
                    n((0, c.M5)(!0)),
                    (0, P.Cz)(!0);
                };
              (0, k.useEffect)(
                function () {
                  r ||
                    T(
                      M().mark(function t() {
                        var r, a, u, l;
                        return M().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    (console.log(
                                      "[eager]: checking wallet to bootstrap.."
                                    ),
                                    (t.prev = 1),
                                    (r = !1),
                                    (a =
                                      localStorage.getItem(
                                        "nfttrader-waccount"
                                      )),
                                    (u = JSON.parse(a)))
                                  ) {
                                    t.next = 7;
                                    break;
                                  }
                                  throw new Error("account stored is null");
                                case 7:
                                  (t.t0 = u.walletProviderName),
                                    (t.next =
                                      "MetaMask" === t.t0 || "Injected" === t.t0
                                        ? 11
                                        : "Coinbase Wallet" === t.t0
                                        ? 16
                                        : "WalletConnect" === t.t0
                                        ? 19
                                        : "Unstoppable Domains" === t.t0
                                        ? 22
                                        : 32);
                                  break;
                                case 11:
                                  return (t.next = 13), C.Lj.isAuthorized();
                                case 13:
                                  return (
                                    (r = t.sent),
                                    (l = C.Lj),
                                    t.abrupt("break", 34)
                                  );
                                case 16:
                                  return (
                                    (r = !0), (l = C.H5), t.abrupt("break", 34)
                                  );
                                case 19:
                                  return (
                                    (r = !0), (l = C.Lw), t.abrupt("break", 34)
                                  );
                                case 22:
                                  if (!C.Lj) {
                                    t.next = 28;
                                    break;
                                  }
                                  return (t.next = 25), C.Lj.isAuthorized();
                                case 25:
                                  (t.t1 = t.sent), (t.next = 29);
                                  break;
                                case 28:
                                  t.t1 = !0;
                                case 29:
                                  return (
                                    (r = t.t1),
                                    (l = C.Lj ? C.Lj : C.Lw),
                                    t.abrupt("break", 34)
                                  );
                                case 32:
                                  return (l = null), t.abrupt("break", 34);
                                case 34:
                                  l && r
                                    ? (B(l, N.zw) &&
                                        (l.walletConnectProvider = void 0),
                                      e(l, void 0, !0)
                                        .then(function () {
                                          if (
                                            (console.log(
                                              "[eager]: ".concat(
                                                u.walletProviderName,
                                                " connector bootstrapped"
                                              )
                                            ),
                                            i)
                                          ) {
                                            if (!(0, S.c)(i))
                                              return (
                                                console.log(
                                                  "[eager]: token not valid.."
                                                ),
                                                void o("eager")
                                              );
                                            (0, P.pw)()
                                              ? s(i)
                                              : T(
                                                  M().mark(function t() {
                                                    var e, r, o;
                                                    return M().wrap(function (
                                                      t
                                                    ) {
                                                      for (;;)
                                                        switch (
                                                          (t.prev = t.next)
                                                        ) {
                                                          case 0:
                                                            return (
                                                              console.log(
                                                                "[eager]: restoring network.."
                                                              ),
                                                              n(d(!1)),
                                                              (t.next = 4),
                                                              null === l ||
                                                              void 0 === l
                                                                ? void 0
                                                                : l.getProvider()
                                                            );
                                                          case 4:
                                                            (e =
                                                              t.sent.chainId),
                                                              (r =
                                                                _.O$.from(
                                                                  e
                                                                ).toNumber()),
                                                              (o = (0, I.qe)(
                                                                r
                                                              )),
                                                              n(d(!1)),
                                                              n((0, c.fc)(r)),
                                                              n((0, c.DC)(o)),
                                                              (0, P.yA)(r),
                                                              (0, P.jL)(o),
                                                              s(i);
                                                          case 13:
                                                          case "end":
                                                            return t.stop();
                                                        }
                                                    },
                                                    t);
                                                  })
                                                )();
                                          } else
                                            console.log(
                                              "[eager]: account not valid.."
                                            ),
                                              o("eager");
                                        })
                                        .catch(function (t) {
                                          console.log(
                                            "[eager]: error while bootstrapping ".concat(
                                              u.walletProviderName,
                                              " connector"
                                            )
                                          ),
                                            console.log(t),
                                            B(t, w.Uu)
                                              ? (console.log(
                                                  "[eager]: dispatching chainmanger modal error.."
                                                ),
                                                n(d(!0)))
                                              : o("eager");
                                        }))
                                    : (console.log(
                                        "[eager]: connector undetected or unauthorized.."
                                      ),
                                      o("eager")),
                                    (t.next = 42);
                                  break;
                                case 37:
                                  (t.prev = 37),
                                    (t.t2 = t.catch(1)),
                                    o("eager"),
                                    console.log("[eager]: unknown error.."),
                                    (null === t.t2 || void 0 === t.t2
                                      ? void 0
                                      : t.t2.toString) &&
                                      console.log("[eager]:", t.t2.toString());
                                case 42:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[1, 37]]
                        );
                      })
                    )();
                },
                [e, r]
              );
            })(),
            (function () {
              var t = (0, w.Ge)().activate,
                e = (0, O.T)(),
                r = (0, O.C)(function (t) {
                  return t;
                }).waccount.isConnected,
                n = function (t) {
                  console.log("[".concat(t, "]: dispatching logout...")),
                    e((0, c.eO)(null)),
                    e((0, c.nT)(null)),
                    e((0, c.b6)(null)),
                    e((0, c.mh)(null)),
                    e((0, c.tp)(null)),
                    e((0, c.hv)(null)),
                    e((0, c.fc)(null)),
                    e((0, c.DC)(null)),
                    e((0, c.cT)(null)),
                    e((0, c.Yf)(null)),
                    e((0, c.AB)(null)),
                    e((0, c.up)(!1)),
                    e((0, c.M5)(!1)),
                    (0, x.k)();
                };
              (0, k.useEffect)(
                function () {
                  try {
                    console.log(
                      "[web3listener]: checking events to listen from wallet.."
                    );
                    var i,
                      o,
                      s = localStorage.getItem("nfttrader-waccount"),
                      a = JSON.parse(s);
                    if (!r)
                      return void console.log(
                        "[web3listener]: no events to add"
                      );
                    if (r)
                      switch (
                        (console.log(
                          "[web3listener]: user is connected on the platform.."
                        ),
                        null === a || void 0 === a
                          ? void 0
                          : a.walletProviderName)
                      ) {
                        case "MetaMask":
                        case "Injected":
                          if (((i = C.Lj), (o = window.ethereum) && o.on)) {
                            console.log(
                              "[web3listener]: MetaMask wallet used. Adding events.."
                            );
                            var l = function () {
                                t(C.Lj, void 0, !0)
                                  .then(
                                    T(
                                      M().mark(function t() {
                                        var r, n, i;
                                        return M().wrap(function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                console.log(
                                                  "[web3listener]: bootstrapped injected connector after chain changed"
                                                ),
                                                  e(d(!1)),
                                                  (r = o.chainId),
                                                  (n = _.O$.from(r).toNumber()),
                                                  (i = (0, I.qe)(n)),
                                                  e((0, c.fc)(n)),
                                                  e((0, c.DC)(i)),
                                                  (0, P.yA)(n),
                                                  (0, P.jL)(i),
                                                  document.body.classList.remove(
                                                    "no-scroll"
                                                  ),
                                                  e((0, u.r$)(!1)),
                                                  e((0, u.jO)()),
                                                  e((0, u.eV)(null)),
                                                  e((0, u.vg)(null));
                                              case 10:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, t);
                                      })
                                    )
                                  )
                                  .catch(function (t) {
                                    console.error(
                                      "[web3listener]: Failed to activate injected after chain changed",
                                      t
                                    ),
                                      B(t, w.Uu) && e(d(!0)),
                                      e((0, c.fc)(null)),
                                      e((0, c.DC)(null)),
                                      (0, P.yA)(null),
                                      (0, P.jL)(null);
                                  });
                              },
                              h = function (e) {
                                if (e.length > 0) {
                                  if (B(i, N.zw)) {
                                    var r = (0, P.Jr)();
                                    if (
                                      e[0].toLowerCase() ==
                                      (null === r || void 0 === r
                                        ? void 0
                                        : r.toLowerCase())
                                    )
                                      return;
                                  }
                                  t(C.Lj, void 0, !0)
                                    .then(function () {
                                      console.log(
                                        "[web3listener]: bootstrapped injected connector after account changed"
                                      ),
                                        n("web3listener");
                                    })
                                    .catch(function (t) {
                                      console.error(
                                        "[web3listener]: Failed to activate injected after account changed",
                                        t
                                      ),
                                        n("web3listener");
                                    });
                                }
                              };
                            return (
                              o.on("chainChanged", l),
                              o.on("accountsChanged", h),
                              function () {
                                o.removeListener &&
                                  (console.log(
                                    "[web3listener]: cleaning events.."
                                  ),
                                  o.removeListener("chainChanged", l),
                                  o.removeListener("accountsChanged", h));
                              }
                            );
                          }
                          break;
                        case "Coinbase Wallet":
                        case "WalletConnect":
                        case "Fortmatic":
                          "Coinbase Wallet" ==
                          (null === a || void 0 === a
                            ? void 0
                            : a.walletProviderName)
                            ? (i = C.H5)
                            : "WalletConnect" ==
                                (null === a || void 0 === a
                                  ? void 0
                                  : a.walletProviderName) && (i = C.Lw),
                            T(
                              M().mark(function r() {
                                var s, u;
                                return M().wrap(function (r) {
                                  for (;;)
                                    switch ((r.prev = r.next)) {
                                      case 0:
                                        return (r.next = 2), i.getProvider();
                                      case 2:
                                        (o = r.sent) &&
                                          o.on &&
                                          ((s = function () {
                                            B(i, N.zw) &&
                                              (i.walletConnectProvider =
                                                void 0),
                                              t(i, void 0, !0)
                                                .then(
                                                  T(
                                                    M().mark(function t() {
                                                      var r, n, i;
                                                      return M().wrap(function (
                                                        t
                                                      ) {
                                                        for (;;)
                                                          switch (
                                                            (t.prev = t.next)
                                                          ) {
                                                            case 0:
                                                              console.log(
                                                                "[web3listener]: bootstrapped ".concat(
                                                                  null === a ||
                                                                    void 0 === a
                                                                    ? void 0
                                                                    : a.walletProviderName,
                                                                  " connector after chain changed"
                                                                )
                                                              ),
                                                                e(d(!1)),
                                                                (r = o.chainId),
                                                                (n =
                                                                  _.O$.from(
                                                                    r
                                                                  ).toNumber()),
                                                                (i = (0, I.qe)(
                                                                  n
                                                                )),
                                                                e((0, c.fc)(n)),
                                                                e((0, c.DC)(i)),
                                                                (0, P.yA)(n),
                                                                (0, P.jL)(i);
                                                            case 9:
                                                            case "end":
                                                              return t.stop();
                                                          }
                                                      },
                                                      t);
                                                    })
                                                  )
                                                )
                                                .catch(function (t) {
                                                  console.error(
                                                    "[web3listener]: Failed to activate ".concat(
                                                      null === a || void 0 === a
                                                        ? void 0
                                                        : a.walletProviderName,
                                                      " after chain changed"
                                                    ),
                                                    t
                                                  ),
                                                    B(t, w.Uu) && e(d(!0)),
                                                    e((0, c.fc)(null)),
                                                    e((0, c.DC)(null)),
                                                    (0, P.yA)(null),
                                                    (0, P.jL)(null);
                                                });
                                          }),
                                          (u = function (e) {
                                            if (e.length > 0) {
                                              if (B(i, N.zw)) {
                                                var r = (0, P.Jr)();
                                                if (
                                                  e[0].toLowerCase() ==
                                                  (null === r || void 0 === r
                                                    ? void 0
                                                    : r.toLowerCase())
                                                )
                                                  return;
                                              }
                                              B(i, N.zw) &&
                                                (i.walletConnectProvider =
                                                  void 0),
                                                t(i, void 0, !0)
                                                  .then(function () {
                                                    console.log(
                                                      "[web3listener]: bootstrapped ".concat(
                                                        null === a ||
                                                          void 0 === a
                                                          ? void 0
                                                          : a.walletProviderName,
                                                        " connector after account changed"
                                                      )
                                                    ),
                                                      n("web3listener");
                                                  })
                                                  .catch(function (t) {
                                                    console.error(
                                                      "[web3listener]: Failed to activate ".concat(
                                                        null === a ||
                                                          void 0 === a
                                                          ? void 0
                                                          : a.walletProviderName,
                                                        " after account changed"
                                                      ),
                                                      t
                                                    ),
                                                      n("web3listener");
                                                  });
                                            }
                                          }),
                                          o.removeListener &&
                                            (console.log(
                                              "[web3listener]: ".concat(
                                                null === a || void 0 === a
                                                  ? void 0
                                                  : a.walletProviderName,
                                                " cleaning previous events.."
                                              )
                                            ),
                                            o.removeListener("chainChanged", s),
                                            o.removeListener(
                                              "accountsChanged",
                                              u
                                            )),
                                          console.log(
                                            "[web3listener]: ".concat(
                                              null === a || void 0 === a
                                                ? void 0
                                                : a.walletProviderName,
                                              " wallet used. Adding events.."
                                            )
                                          ),
                                          o.on("chainChanged", s),
                                          o.on("accountsChanged", u));
                                      case 4:
                                      case "end":
                                        return r.stop();
                                    }
                                }, r);
                              })
                            )();
                      }
                    return;
                  } catch (f) {}
                },
                [r]
              );
            })(),
            e
          );
        },
        U = r(41654),
        D = r.n(U),
        j = r(37011),
        F = function () {
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsx)("div", {
              className:
                "top-0 left-0 w-full h-full fixed z-[30000] bg-black/30 lg:flex lg:justify-center lg:items-center",
              children: (0, n.jsxs)("div", {
                className: "".concat(
                  D().chainModal,
                  " fixed flex flex-col w-full bg-primary-blue z-[20000] rounded-t-[32px] py-[40px] px-[16px] w-full h-[304px] text-center lg:relative lg:w-[520px] lg:rounded-[16px] lg:h-[auto] lg:p-[32px]"
                ),
                children: [
                  (0, n.jsxs)("div", {
                    className: "mb-[40px] text-primary-white",
                    children: [
                      (0, n.jsx)("h3", {
                        className: "text-2xl font-semibold",
                        children: "Wrong network",
                      }),
                      (0, n.jsx)("p", {
                        className: "rubik text-base font-light",
                        children:
                          "Please select a network supported by the platform.",
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: "flex justify-center items-center",
                    children: (0, n.jsx)("img", {
                      className: "".concat(D().rotating, " w-[50px] h-[50px]"),
                      src: j.Z.src,
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        z = function (t) {
          var e = t.children,
            r = (0, O.C)(function (t) {
              return t;
            }).chainmanager.isError;
          return (0, n.jsxs)(n.Fragment, {
            children: [e, r && (0, n.jsx)(F, {})],
          });
        };
      function q(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function G(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable;
              })
            )),
            n.forEach(function (e) {
              q(t, e, r[e]);
            });
        }
        return t;
      }
      var Y = function (t) {
          var e = t.Component,
            r = t.pageProps;
          return (0, n.jsx)(y.zt, {
            store: v,
            children: (0, n.jsx)(w.Ht, {
              getLibrary: A,
              children: (0, n.jsx)(L, {
                children: (0, n.jsx)(z, { children: (0, n.jsx)(e, G({}, r)) }),
              }),
            }),
          });
        },
        J = (0, s.Z)(
          Y,
          G({}, o(), {
            isLoader: !0,
            skipInitialProps: !0,
            loadLocaleFrom: function (t, e) {
              return r(30242)("./".concat(t, "/").concat(e)).then(function (t) {
                return t.default;
              });
            },
          })
        );
    },
    41654: function (t) {
      t.exports = {
        chainModal: "ChainModal_chainModal__6aNnB",
        goUp: "ChainModal_goUp__oP_F5",
        rotating: "ChainModal_rotating__7iFtg",
        rotate: "ChainModal_rotate__UKBQ3",
        zoom: "ChainModal_zoom__tPaq_",
      };
    },
    40906: function () {},
    88677: function () {},
    62808: function () {},
  },
  function (t) {
    var e = function (e) {
      return t((t.s = e));
    };
    t.O(0, [774, 179], function () {
      return e(76363), e(25948);
    });
    var r = t.O();
    _N_E = r;
  },
]);
