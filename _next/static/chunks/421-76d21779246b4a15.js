"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [421],
  {
    46818: function (t, e, r) {
      r.d(e, {
        i: function () {
          return n;
        },
      });
      const n = "abi/5.7.0";
    },
    23992: function (t, e, r) {
      r.d(e, {
        R: function () {
          return T;
        },
        $: function () {
          return F;
        },
      });
      var n = r(25689),
        a = r(98690),
        s = r(87898),
        o = r(46818),
        i = r(78260),
        u = r(91426);
      class c extends i.XI {
        constructor(t) {
          super("address", "address", t, !1);
        }
        defaultValue() {
          return "0x0000000000000000000000000000000000000000";
        }
        encode(t, e) {
          try {
            e = (0, u.Kn)(e);
          } catch (r) {
            this._throwError(r.message, e);
          }
          return t.writeValue(e);
        }
        decode(t) {
          return (0, u.Kn)((0, n.$m)(t.readValue().toHexString(), 20));
        }
      }
      class l extends i.XI {
        constructor(t) {
          super(t.name, t.type, void 0, t.dynamic), (this.coder = t);
        }
        defaultValue() {
          return this.coder.defaultValue();
        }
        encode(t, e) {
          return this.coder.encode(t, e);
        }
        decode(t) {
          return this.coder.decode(t);
        }
      }
      const h = new s.Yd(o.i);
      function m(t, e, r) {
        let n = null;
        if (Array.isArray(r)) n = r;
        else if (r && "object" === typeof r) {
          let t = {};
          n = e.map((e) => {
            const n = e.localName;
            return (
              n ||
                h.throwError(
                  "cannot encode object for signature with missing names",
                  s.Yd.errors.INVALID_ARGUMENT,
                  { argument: "values", coder: e, value: r }
                ),
              t[n] &&
                h.throwError(
                  "cannot encode object for signature with duplicate names",
                  s.Yd.errors.INVALID_ARGUMENT,
                  { argument: "values", coder: e, value: r }
                ),
              (t[n] = !0),
              r[n]
            );
          });
        } else h.throwArgumentError("invalid tuple value", "tuple", r);
        e.length !== n.length &&
          h.throwArgumentError("types/value length mismatch", "tuple", r);
        let a = new i.QV(t.wordSize),
          o = new i.QV(t.wordSize),
          u = [];
        e.forEach((t, e) => {
          let r = n[e];
          if (t.dynamic) {
            let e = o.length;
            t.encode(o, r);
            let n = a.writeUpdatableValue();
            u.push((t) => {
              n(t + e);
            });
          } else t.encode(a, r);
        }),
          u.forEach((t) => {
            t(a.length);
          });
        let c = t.appendWriter(a);
        return (c += t.appendWriter(o)), c;
      }
      function d(t, e) {
        let r = [],
          n = t.subReader(0);
        e.forEach((e) => {
          let a = null;
          if (e.dynamic) {
            let r = t.readValue(),
              i = n.subReader(r.toNumber());
            try {
              a = e.decode(i);
            } catch (o) {
              if (o.code === s.Yd.errors.BUFFER_OVERRUN) throw o;
              (a = o),
                (a.baseType = e.name),
                (a.name = e.localName),
                (a.type = e.type);
            }
          } else
            try {
              a = e.decode(t);
            } catch (o) {
              if (o.code === s.Yd.errors.BUFFER_OVERRUN) throw o;
              (a = o),
                (a.baseType = e.name),
                (a.name = e.localName),
                (a.type = e.type);
            }
          void 0 != a && r.push(a);
        });
        const a = e.reduce((t, e) => {
          const r = e.localName;
          return r && (t[r] || (t[r] = 0), t[r]++), t;
        }, {});
        e.forEach((t, e) => {
          let n = t.localName;
          if (!n || 1 !== a[n]) return;
          if (("length" === n && (n = "_length"), null != r[n])) return;
          const s = r[e];
          s instanceof Error
            ? Object.defineProperty(r, n, {
                enumerable: !0,
                get: () => {
                  throw s;
                },
              })
            : (r[n] = s);
        });
        for (let s = 0; s < r.length; s++) {
          const t = r[s];
          t instanceof Error &&
            Object.defineProperty(r, s, {
              enumerable: !0,
              get: () => {
                throw t;
              },
            });
        }
        return Object.freeze(r);
      }
      class p extends i.XI {
        constructor(t, e, r) {
          super(
            "array",
            t.type + "[" + (e >= 0 ? e : "") + "]",
            r,
            -1 === e || t.dynamic
          ),
            (this.coder = t),
            (this.length = e);
        }
        defaultValue() {
          const t = this.coder.defaultValue(),
            e = [];
          for (let r = 0; r < this.length; r++) e.push(t);
          return e;
        }
        encode(t, e) {
          Array.isArray(e) || this._throwError("expected array value", e);
          let r = this.length;
          -1 === r && ((r = e.length), t.writeValue(e.length)),
            h.checkArgumentCount(
              e.length,
              r,
              "coder array" + (this.localName ? " " + this.localName : "")
            );
          let n = [];
          for (let a = 0; a < e.length; a++) n.push(this.coder);
          return m(t, n, e);
        }
        decode(t) {
          let e = this.length;
          -1 === e &&
            ((e = t.readValue().toNumber()),
            32 * e > t._data.length &&
              h.throwError(
                "insufficient data length",
                s.Yd.errors.BUFFER_OVERRUN,
                { length: t._data.length, count: e }
              ));
          let r = [];
          for (let n = 0; n < e; n++) r.push(new l(this.coder));
          return t.coerce(this.name, d(t, r));
        }
      }
      class g extends i.XI {
        constructor(t) {
          super("bool", "bool", t, !1);
        }
        defaultValue() {
          return !1;
        }
        encode(t, e) {
          return t.writeValue(e ? 1 : 0);
        }
        decode(t) {
          return t.coerce(this.type, !t.readValue().isZero());
        }
      }
      class f extends i.XI {
        constructor(t, e) {
          super(t, t, e, !0);
        }
        defaultValue() {
          return "0x";
        }
        encode(t, e) {
          e = (0, n.lE)(e);
          let r = t.writeValue(e.length);
          return (r += t.writeBytes(e)), r;
        }
        decode(t) {
          return t.readBytes(t.readValue().toNumber(), !0);
        }
      }
      class y extends f {
        constructor(t) {
          super("bytes", t);
        }
        decode(t) {
          return t.coerce(this.name, (0, n.Dv)(super.decode(t)));
        }
      }
      class b extends i.XI {
        constructor(t, e) {
          let r = "bytes" + String(t);
          super(r, r, e, !1), (this.size = t);
        }
        defaultValue() {
          return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(
            0,
            2 + 2 * this.size
          );
        }
        encode(t, e) {
          let r = (0, n.lE)(e);
          return (
            r.length !== this.size &&
              this._throwError("incorrect data length", e),
            t.writeBytes(r)
          );
        }
        decode(t) {
          return t.coerce(this.name, (0, n.Dv)(t.readBytes(this.size)));
        }
      }
      class w extends i.XI {
        constructor(t) {
          super("null", "", t, !1);
        }
        defaultValue() {
          return null;
        }
        encode(t, e) {
          return null != e && this._throwError("not null", e), t.writeBytes([]);
        }
        decode(t) {
          return t.readBytes(0), t.coerce(this.name, null);
        }
      }
      var E = r(93442),
        v = r(94069);
      class _ extends i.XI {
        constructor(t, e, r) {
          const n = (e ? "int" : "uint") + 8 * t;
          super(n, n, r, !1), (this.size = t), (this.signed = e);
        }
        defaultValue() {
          return 0;
        }
        encode(t, e) {
          let r = E.O$.from(e),
            n = v.Bz.mask(8 * t.wordSize);
          if (this.signed) {
            let t = n.mask(8 * this.size - 1);
            (r.gt(t) || r.lt(t.add(v.fh).mul(v.tL))) &&
              this._throwError("value out-of-bounds", e);
          } else
            (r.lt(v._Y) || r.gt(n.mask(8 * this.size))) &&
              this._throwError("value out-of-bounds", e);
          return (
            (r = r.toTwos(8 * this.size).mask(8 * this.size)),
            this.signed &&
              (r = r.fromTwos(8 * this.size).toTwos(8 * t.wordSize)),
            t.writeValue(r)
          );
        }
        decode(t) {
          let e = t.readValue().mask(8 * this.size);
          return (
            this.signed && (e = e.fromTwos(8 * this.size)),
            t.coerce(this.name, e)
          );
        }
      }
      var A = r(10208);
      class O extends f {
        constructor(t) {
          super("string", t);
        }
        defaultValue() {
          return "";
        }
        encode(t, e) {
          return super.encode(t, (0, A.Y0)(e));
        }
        decode(t) {
          return (0, A.ZN)(super.decode(t));
        }
      }
      class x extends i.XI {
        constructor(t, e) {
          let r = !1;
          const n = [];
          t.forEach((t) => {
            t.dynamic && (r = !0), n.push(t.type);
          });
          super("tuple", "tuple(" + n.join(",") + ")", e, r), (this.coders = t);
        }
        defaultValue() {
          const t = [];
          this.coders.forEach((e) => {
            t.push(e.defaultValue());
          });
          const e = this.coders.reduce((t, e) => {
            const r = e.localName;
            return r && (t[r] || (t[r] = 0), t[r]++), t;
          }, {});
          return (
            this.coders.forEach((r, n) => {
              let a = r.localName;
              a &&
                1 === e[a] &&
                ("length" === a && (a = "_length"),
                null == t[a] && (t[a] = t[n]));
            }),
            Object.freeze(t)
          );
        }
        encode(t, e) {
          return m(t, this.coders, e);
        }
        decode(t) {
          return t.coerce(this.name, d(t, this.coders));
        }
      }
      var S = r(2631);
      const j = new s.Yd(o.i),
        N = new RegExp(/^bytes([0-9]*)$/),
        z = new RegExp(/^(u?int)([0-9]*)$/);
      class T {
        constructor(t) {
          (0, a.zG)(this, "coerceFunc", t || null);
        }
        _getCoder(t) {
          switch (t.baseType) {
            case "address":
              return new c(t.name);
            case "bool":
              return new g(t.name);
            case "string":
              return new O(t.name);
            case "bytes":
              return new y(t.name);
            case "array":
              return new p(
                this._getCoder(t.arrayChildren),
                t.arrayLength,
                t.name
              );
            case "tuple":
              return new x(
                (t.components || []).map((t) => this._getCoder(t)),
                t.name
              );
            case "":
              return new w(t.name);
          }
          let e = t.type.match(z);
          if (e) {
            let r = parseInt(e[2] || "256");
            return (
              (0 === r || r > 256 || r % 8 !== 0) &&
                j.throwArgumentError(
                  "invalid " + e[1] + " bit length",
                  "param",
                  t
                ),
              new _(r / 8, "int" === e[1], t.name)
            );
          }
          if (((e = t.type.match(N)), e)) {
            let r = parseInt(e[1]);
            return (
              (0 === r || r > 32) &&
                j.throwArgumentError("invalid bytes length", "param", t),
              new b(r, t.name)
            );
          }
          return j.throwArgumentError("invalid type", "type", t.type);
        }
        _getWordSize() {
          return 32;
        }
        _getReader(t, e) {
          return new i.Ej(t, this._getWordSize(), this.coerceFunc, e);
        }
        _getWriter() {
          return new i.QV(this._getWordSize());
        }
        getDefaultValue(t) {
          const e = t.map((t) => this._getCoder(S._R.from(t)));
          return new x(e, "_").defaultValue();
        }
        encode(t, e) {
          t.length !== e.length &&
            j.throwError(
              "types/values length mismatch",
              s.Yd.errors.INVALID_ARGUMENT,
              {
                count: { types: t.length, values: e.length },
                value: { types: t, values: e },
              }
            );
          const r = t.map((t) => this._getCoder(S._R.from(t))),
            n = new x(r, "_"),
            a = this._getWriter();
          return n.encode(a, e), a.data;
        }
        decode(t, e, r) {
          const a = t.map((t) => this._getCoder(S._R.from(t)));
          return new x(a, "_").decode(this._getReader((0, n.lE)(e), r));
        }
      }
      const F = new T();
    },
    78260: function (t, e, r) {
      r.d(e, {
        BR: function () {
          return c;
        },
        XI: function () {
          return l;
        },
        QV: function () {
          return h;
        },
        Ej: function () {
          return m;
        },
      });
      var n = r(25689),
        a = r(93442),
        s = r(98690),
        o = r(87898),
        i = r(46818);
      const u = new o.Yd(i.i);
      function c(t) {
        const e = [],
          r = function (t, n) {
            if (Array.isArray(n))
              for (let s in n) {
                const o = t.slice();
                o.push(s);
                try {
                  r(o, n[s]);
                } catch (a) {
                  e.push({ path: o, error: a });
                }
              }
          };
        return r([], t), e;
      }
      class l {
        constructor(t, e, r, n) {
          (this.name = t),
            (this.type = e),
            (this.localName = r),
            (this.dynamic = n);
        }
        _throwError(t, e) {
          u.throwArgumentError(t, this.localName, e);
        }
      }
      class h {
        constructor(t) {
          (0, s.zG)(this, "wordSize", t || 32),
            (this._data = []),
            (this._dataLength = 0),
            (this._padding = new Uint8Array(t));
        }
        get data() {
          return (0, n.xs)(this._data);
        }
        get length() {
          return this._dataLength;
        }
        _writeData(t) {
          return this._data.push(t), (this._dataLength += t.length), t.length;
        }
        appendWriter(t) {
          return this._writeData((0, n.zo)(t._data));
        }
        writeBytes(t) {
          let e = (0, n.lE)(t);
          const r = e.length % this.wordSize;
          return (
            r && (e = (0, n.zo)([e, this._padding.slice(r)])),
            this._writeData(e)
          );
        }
        _getValue(t) {
          let e = (0, n.lE)(a.O$.from(t));
          return (
            e.length > this.wordSize &&
              u.throwError("value out-of-bounds", o.Yd.errors.BUFFER_OVERRUN, {
                length: this.wordSize,
                offset: e.length,
              }),
            e.length % this.wordSize &&
              (e = (0, n.zo)([
                this._padding.slice(e.length % this.wordSize),
                e,
              ])),
            e
          );
        }
        writeValue(t) {
          return this._writeData(this._getValue(t));
        }
        writeUpdatableValue() {
          const t = this._data.length;
          return (
            this._data.push(this._padding),
            (this._dataLength += this.wordSize),
            (e) => {
              this._data[t] = this._getValue(e);
            }
          );
        }
      }
      class m {
        constructor(t, e, r, a) {
          (0, s.zG)(this, "_data", (0, n.lE)(t)),
            (0, s.zG)(this, "wordSize", e || 32),
            (0, s.zG)(this, "_coerceFunc", r),
            (0, s.zG)(this, "allowLoose", a),
            (this._offset = 0);
        }
        get data() {
          return (0, n.Dv)(this._data);
        }
        get consumed() {
          return this._offset;
        }
        static coerce(t, e) {
          let r = t.match("^u?int([0-9]+)$");
          return r && parseInt(r[1]) <= 48 && (e = e.toNumber()), e;
        }
        coerce(t, e) {
          return this._coerceFunc ? this._coerceFunc(t, e) : m.coerce(t, e);
        }
        _peekBytes(t, e, r) {
          let n = Math.ceil(e / this.wordSize) * this.wordSize;
          return (
            this._offset + n > this._data.length &&
              (this.allowLoose && r && this._offset + e <= this._data.length
                ? (n = e)
                : u.throwError(
                    "data out-of-bounds",
                    o.Yd.errors.BUFFER_OVERRUN,
                    { length: this._data.length, offset: this._offset + n }
                  )),
            this._data.slice(this._offset, this._offset + n)
          );
        }
        subReader(t) {
          return new m(
            this._data.slice(this._offset + t),
            this.wordSize,
            this._coerceFunc,
            this.allowLoose
          );
        }
        readBytes(t, e) {
          let r = this._peekBytes(0, t, !!e);
          return (this._offset += r.length), r.slice(0, t);
        }
        readValue() {
          return a.O$.from(this.readBytes(this.wordSize));
        }
      }
    },
    2631: function (t, e, r) {
      r.d(e, {
        pc: function () {
          return d;
        },
        _R: function () {
          return g;
        },
        HY: function () {
          return y;
        },
        QV: function () {
          return b;
        },
        Xg: function () {
          return _;
        },
        YW: function () {
          return A;
        },
        IC: function () {
          return x;
        },
      });
      var n = r(93442),
        a = r(98690),
        s = r(87898),
        o = r(46818);
      const i = new s.Yd(o.i),
        u = {};
      let c = { calldata: !0, memory: !0, storage: !0 },
        l = { calldata: !0, memory: !0 };
      function h(t, e) {
        if ("bytes" === t || "string" === t) {
          if (c[e]) return !0;
        } else if ("address" === t) {
          if ("payable" === e) return !0;
        } else if ((t.indexOf("[") >= 0 || "tuple" === t) && l[e]) return !0;
        return (
          (c[e] || "payable" === e) &&
            i.throwArgumentError("invalid modifier", "name", e),
          !1
        );
      }
      function m(t, e) {
        for (let r in e) (0, a.zG)(t, r, e[r]);
      }
      const d = Object.freeze({
          sighash: "sighash",
          minimal: "minimal",
          full: "full",
          json: "json",
        }),
        p = new RegExp(/^(.*)\[([0-9]*)\]$/);
      class g {
        constructor(t, e) {
          t !== u &&
            i.throwError("use fromString", s.Yd.errors.UNSUPPORTED_OPERATION, {
              operation: "new ParamType()",
            }),
            m(this, e);
          let r = this.type.match(p);
          m(
            this,
            r
              ? {
                  arrayLength: parseInt(r[2] || "-1"),
                  arrayChildren: g.fromObject({
                    type: r[1],
                    components: this.components,
                  }),
                  baseType: "array",
                }
              : {
                  arrayLength: null,
                  arrayChildren: null,
                  baseType: null != this.components ? "tuple" : this.type,
                }
          ),
            (this._isParamType = !0),
            Object.freeze(this);
        }
        format(t) {
          if (
            (t || (t = d.sighash),
            d[t] || i.throwArgumentError("invalid format type", "format", t),
            t === d.json)
          ) {
            let e = {
              type: "tuple" === this.baseType ? "tuple" : this.type,
              name: this.name || void 0,
            };
            return (
              "boolean" === typeof this.indexed && (e.indexed = this.indexed),
              this.components &&
                (e.components = this.components.map((e) =>
                  JSON.parse(e.format(t))
                )),
              JSON.stringify(e)
            );
          }
          let e = "";
          return (
            "array" === this.baseType
              ? ((e += this.arrayChildren.format(t)),
                (e +=
                  "[" +
                  (this.arrayLength < 0 ? "" : String(this.arrayLength)) +
                  "]"))
              : "tuple" === this.baseType
              ? (t !== d.sighash && (e += this.type),
                (e +=
                  "(" +
                  this.components
                    .map((e) => e.format(t))
                    .join(t === d.full ? ", " : ",") +
                  ")"))
              : (e += this.type),
            t !== d.sighash &&
              (!0 === this.indexed && (e += " indexed"),
              t === d.full && this.name && (e += " " + this.name)),
            e
          );
        }
        static from(t, e) {
          return "string" === typeof t ? g.fromString(t, e) : g.fromObject(t);
        }
        static fromObject(t) {
          return g.isParamType(t)
            ? t
            : new g(u, {
                name: t.name || null,
                type: S(t.type),
                indexed: null == t.indexed ? null : !!t.indexed,
                components: t.components
                  ? t.components.map(g.fromObject)
                  : null,
              });
        }
        static fromString(t, e) {
          return (
            (r = (function (t, e) {
              let r = t;
              function n(e) {
                i.throwArgumentError(
                  `unexpected character at position ${e}`,
                  "param",
                  t
                );
              }
              function a(t) {
                let r = {
                  type: "",
                  name: "",
                  parent: t,
                  state: { allowType: !0 },
                };
                return e && (r.indexed = !1), r;
              }
              t = t.replace(/\s/g, " ");
              let s = { type: "", name: "", state: { allowType: !0 } },
                o = s;
              for (let i = 0; i < t.length; i++) {
                let r = t[i];
                switch (r) {
                  case "(":
                    o.state.allowType && "" === o.type
                      ? (o.type = "tuple")
                      : o.state.allowParams || n(i),
                      (o.state.allowType = !1),
                      (o.type = S(o.type)),
                      (o.components = [a(o)]),
                      (o = o.components[0]);
                    break;
                  case ")":
                    delete o.state,
                      "indexed" === o.name &&
                        (e || n(i), (o.indexed = !0), (o.name = "")),
                      h(o.type, o.name) && (o.name = ""),
                      (o.type = S(o.type));
                    let t = o;
                    (o = o.parent),
                      o || n(i),
                      delete t.parent,
                      (o.state.allowParams = !1),
                      (o.state.allowName = !0),
                      (o.state.allowArray = !0);
                    break;
                  case ",":
                    delete o.state,
                      "indexed" === o.name &&
                        (e || n(i), (o.indexed = !0), (o.name = "")),
                      h(o.type, o.name) && (o.name = ""),
                      (o.type = S(o.type));
                    let s = a(o.parent);
                    o.parent.components.push(s), delete o.parent, (o = s);
                    break;
                  case " ":
                    o.state.allowType &&
                      "" !== o.type &&
                      ((o.type = S(o.type)),
                      delete o.state.allowType,
                      (o.state.allowName = !0),
                      (o.state.allowParams = !0)),
                      o.state.allowName &&
                        "" !== o.name &&
                        ("indexed" === o.name
                          ? (e || n(i),
                            o.indexed && n(i),
                            (o.indexed = !0),
                            (o.name = ""))
                          : h(o.type, o.name)
                          ? (o.name = "")
                          : (o.state.allowName = !1));
                    break;
                  case "[":
                    o.state.allowArray || n(i),
                      (o.type += r),
                      (o.state.allowArray = !1),
                      (o.state.allowName = !1),
                      (o.state.readArray = !0);
                    break;
                  case "]":
                    o.state.readArray || n(i),
                      (o.type += r),
                      (o.state.readArray = !1),
                      (o.state.allowArray = !0),
                      (o.state.allowName = !0);
                    break;
                  default:
                    o.state.allowType
                      ? ((o.type += r),
                        (o.state.allowParams = !0),
                        (o.state.allowArray = !0))
                      : o.state.allowName
                      ? ((o.name += r), delete o.state.allowArray)
                      : o.state.readArray
                      ? (o.type += r)
                      : n(i);
                }
              }
              return (
                o.parent && i.throwArgumentError("unexpected eof", "param", t),
                delete s.state,
                "indexed" === o.name
                  ? (e || n(r.length - 7),
                    o.indexed && n(r.length - 7),
                    (o.indexed = !0),
                    (o.name = ""))
                  : h(o.type, o.name) && (o.name = ""),
                (s.type = S(s.type)),
                s
              );
            })(t, !!e)),
            g.fromObject({
              name: r.name,
              type: r.type,
              indexed: r.indexed,
              components: r.components,
            })
          );
          var r;
        }
        static isParamType(t) {
          return !(null == t || !t._isParamType);
        }
      }
      function f(t, e) {
        return (function (t) {
          t = t.trim();
          let e = [],
            r = "",
            n = 0;
          for (let a = 0; a < t.length; a++) {
            let s = t[a];
            "," === s && 0 === n
              ? (e.push(r), (r = ""))
              : ((r += s),
                "(" === s
                  ? n++
                  : ")" === s &&
                    (n--,
                    -1 === n &&
                      i.throwArgumentError(
                        "unbalanced parenthesis",
                        "value",
                        t
                      )));
          }
          r && e.push(r);
          return e;
        })(t).map((t) => g.fromString(t, e));
      }
      class y {
        constructor(t, e) {
          t !== u &&
            i.throwError(
              "use a static from method",
              s.Yd.errors.UNSUPPORTED_OPERATION,
              { operation: "new Fragment()" }
            ),
            m(this, e),
            (this._isFragment = !0),
            Object.freeze(this);
        }
        static from(t) {
          return y.isFragment(t)
            ? t
            : "string" === typeof t
            ? y.fromString(t)
            : y.fromObject(t);
        }
        static fromObject(t) {
          if (y.isFragment(t)) return t;
          switch (t.type) {
            case "function":
              return A.fromObject(t);
            case "event":
              return b.fromObject(t);
            case "constructor":
              return _.fromObject(t);
            case "error":
              return x.fromObject(t);
            case "fallback":
            case "receive":
              return null;
          }
          return i.throwArgumentError("invalid fragment object", "value", t);
        }
        static fromString(t) {
          return "event" ===
            (t = (t = (t = t.replace(/\s/g, " "))
              .replace(/\(/g, " (")
              .replace(/\)/g, ") ")
              .replace(/\s+/g, " ")).trim()).split(" ")[0]
            ? b.fromString(t.substring(5).trim())
            : "function" === t.split(" ")[0]
            ? A.fromString(t.substring(8).trim())
            : "constructor" === t.split("(")[0].trim()
            ? _.fromString(t.trim())
            : "error" === t.split(" ")[0]
            ? x.fromString(t.substring(5).trim())
            : i.throwArgumentError("unsupported fragment", "value", t);
        }
        static isFragment(t) {
          return !(!t || !t._isFragment);
        }
      }
      class b extends y {
        format(t) {
          if (
            (t || (t = d.sighash),
            d[t] || i.throwArgumentError("invalid format type", "format", t),
            t === d.json)
          )
            return JSON.stringify({
              type: "event",
              anonymous: this.anonymous,
              name: this.name,
              inputs: this.inputs.map((e) => JSON.parse(e.format(t))),
            });
          let e = "";
          return (
            t !== d.sighash && (e += "event "),
            (e +=
              this.name +
              "(" +
              this.inputs
                .map((e) => e.format(t))
                .join(t === d.full ? ", " : ",") +
              ") "),
            t !== d.sighash && this.anonymous && (e += "anonymous "),
            e.trim()
          );
        }
        static from(t) {
          return "string" === typeof t ? b.fromString(t) : b.fromObject(t);
        }
        static fromObject(t) {
          if (b.isEventFragment(t)) return t;
          "event" !== t.type &&
            i.throwArgumentError("invalid event object", "value", t);
          const e = {
            name: N(t.name),
            anonymous: t.anonymous,
            inputs: t.inputs ? t.inputs.map(g.fromObject) : [],
            type: "event",
          };
          return new b(u, e);
        }
        static fromString(t) {
          let e = t.match(z);
          e || i.throwArgumentError("invalid event string", "value", t);
          let r = !1;
          return (
            e[3].split(" ").forEach((t) => {
              switch (t.trim()) {
                case "anonymous":
                  r = !0;
                  break;
                case "":
                  break;
                default:
                  i.warn("unknown modifier: " + t);
              }
            }),
            b.fromObject({
              name: e[1].trim(),
              anonymous: r,
              inputs: f(e[2], !0),
              type: "event",
            })
          );
        }
        static isEventFragment(t) {
          return t && t._isFragment && "event" === t.type;
        }
      }
      function w(t, e) {
        e.gas = null;
        let r = t.split("@");
        return 1 !== r.length
          ? (r.length > 2 &&
              i.throwArgumentError(
                "invalid human-readable ABI signature",
                "value",
                t
              ),
            r[1].match(/^[0-9]+$/) ||
              i.throwArgumentError(
                "invalid human-readable ABI signature gas",
                "value",
                t
              ),
            (e.gas = n.O$.from(r[1])),
            r[0])
          : t;
      }
      function E(t, e) {
        (e.constant = !1),
          (e.payable = !1),
          (e.stateMutability = "nonpayable"),
          t.split(" ").forEach((t) => {
            switch (t.trim()) {
              case "constant":
                e.constant = !0;
                break;
              case "payable":
                (e.payable = !0), (e.stateMutability = "payable");
                break;
              case "nonpayable":
                (e.payable = !1), (e.stateMutability = "nonpayable");
                break;
              case "pure":
                (e.constant = !0), (e.stateMutability = "pure");
                break;
              case "view":
                (e.constant = !0), (e.stateMutability = "view");
                break;
              case "external":
              case "public":
              case "":
                break;
              default:
                console.log("unknown modifier: " + t);
            }
          });
      }
      function v(t) {
        let e = { constant: !1, payable: !0, stateMutability: "payable" };
        return (
          null != t.stateMutability
            ? ((e.stateMutability = t.stateMutability),
              (e.constant =
                "view" === e.stateMutability || "pure" === e.stateMutability),
              null != t.constant &&
                !!t.constant !== e.constant &&
                i.throwArgumentError(
                  "cannot have constant function with mutability " +
                    e.stateMutability,
                  "value",
                  t
                ),
              (e.payable = "payable" === e.stateMutability),
              null != t.payable &&
                !!t.payable !== e.payable &&
                i.throwArgumentError(
                  "cannot have payable function with mutability " +
                    e.stateMutability,
                  "value",
                  t
                ))
            : null != t.payable
            ? ((e.payable = !!t.payable),
              null != t.constant ||
                e.payable ||
                "constructor" === t.type ||
                i.throwArgumentError(
                  "unable to determine stateMutability",
                  "value",
                  t
                ),
              (e.constant = !!t.constant),
              e.constant
                ? (e.stateMutability = "view")
                : (e.stateMutability = e.payable ? "payable" : "nonpayable"),
              e.payable &&
                e.constant &&
                i.throwArgumentError(
                  "cannot have constant payable function",
                  "value",
                  t
                ))
            : null != t.constant
            ? ((e.constant = !!t.constant),
              (e.payable = !e.constant),
              (e.stateMutability = e.constant ? "view" : "payable"))
            : "constructor" !== t.type &&
              i.throwArgumentError(
                "unable to determine stateMutability",
                "value",
                t
              ),
          e
        );
      }
      class _ extends y {
        format(t) {
          if (
            (t || (t = d.sighash),
            d[t] || i.throwArgumentError("invalid format type", "format", t),
            t === d.json)
          )
            return JSON.stringify({
              type: "constructor",
              stateMutability:
                "nonpayable" !== this.stateMutability
                  ? this.stateMutability
                  : void 0,
              payable: this.payable,
              gas: this.gas ? this.gas.toNumber() : void 0,
              inputs: this.inputs.map((e) => JSON.parse(e.format(t))),
            });
          t === d.sighash &&
            i.throwError(
              "cannot format a constructor for sighash",
              s.Yd.errors.UNSUPPORTED_OPERATION,
              { operation: "format(sighash)" }
            );
          let e =
            "constructor(" +
            this.inputs
              .map((e) => e.format(t))
              .join(t === d.full ? ", " : ",") +
            ") ";
          return (
            this.stateMutability &&
              "nonpayable" !== this.stateMutability &&
              (e += this.stateMutability + " "),
            e.trim()
          );
        }
        static from(t) {
          return "string" === typeof t ? _.fromString(t) : _.fromObject(t);
        }
        static fromObject(t) {
          if (_.isConstructorFragment(t)) return t;
          "constructor" !== t.type &&
            i.throwArgumentError("invalid constructor object", "value", t);
          let e = v(t);
          e.constant &&
            i.throwArgumentError("constructor cannot be constant", "value", t);
          const r = {
            name: null,
            type: t.type,
            inputs: t.inputs ? t.inputs.map(g.fromObject) : [],
            payable: e.payable,
            stateMutability: e.stateMutability,
            gas: t.gas ? n.O$.from(t.gas) : null,
          };
          return new _(u, r);
        }
        static fromString(t) {
          let e = { type: "constructor" },
            r = (t = w(t, e)).match(z);
          return (
            (r && "constructor" === r[1].trim()) ||
              i.throwArgumentError("invalid constructor string", "value", t),
            (e.inputs = f(r[2].trim(), !1)),
            E(r[3].trim(), e),
            _.fromObject(e)
          );
        }
        static isConstructorFragment(t) {
          return t && t._isFragment && "constructor" === t.type;
        }
      }
      class A extends _ {
        format(t) {
          if (
            (t || (t = d.sighash),
            d[t] || i.throwArgumentError("invalid format type", "format", t),
            t === d.json)
          )
            return JSON.stringify({
              type: "function",
              name: this.name,
              constant: this.constant,
              stateMutability:
                "nonpayable" !== this.stateMutability
                  ? this.stateMutability
                  : void 0,
              payable: this.payable,
              gas: this.gas ? this.gas.toNumber() : void 0,
              inputs: this.inputs.map((e) => JSON.parse(e.format(t))),
              outputs: this.outputs.map((e) => JSON.parse(e.format(t))),
            });
          let e = "";
          return (
            t !== d.sighash && (e += "function "),
            (e +=
              this.name +
              "(" +
              this.inputs
                .map((e) => e.format(t))
                .join(t === d.full ? ", " : ",") +
              ") "),
            t !== d.sighash &&
              (this.stateMutability
                ? "nonpayable" !== this.stateMutability &&
                  (e += this.stateMutability + " ")
                : this.constant && (e += "view "),
              this.outputs &&
                this.outputs.length &&
                (e +=
                  "returns (" +
                  this.outputs.map((e) => e.format(t)).join(", ") +
                  ") "),
              null != this.gas && (e += "@" + this.gas.toString() + " ")),
            e.trim()
          );
        }
        static from(t) {
          return "string" === typeof t ? A.fromString(t) : A.fromObject(t);
        }
        static fromObject(t) {
          if (A.isFunctionFragment(t)) return t;
          "function" !== t.type &&
            i.throwArgumentError("invalid function object", "value", t);
          let e = v(t);
          const r = {
            type: t.type,
            name: N(t.name),
            constant: e.constant,
            inputs: t.inputs ? t.inputs.map(g.fromObject) : [],
            outputs: t.outputs ? t.outputs.map(g.fromObject) : [],
            payable: e.payable,
            stateMutability: e.stateMutability,
            gas: t.gas ? n.O$.from(t.gas) : null,
          };
          return new A(u, r);
        }
        static fromString(t) {
          let e = { type: "function" },
            r = (t = w(t, e)).split(" returns ");
          r.length > 2 &&
            i.throwArgumentError("invalid function string", "value", t);
          let n = r[0].match(z);
          if (
            (n ||
              i.throwArgumentError("invalid function signature", "value", t),
            (e.name = n[1].trim()),
            e.name && N(e.name),
            (e.inputs = f(n[2], !1)),
            E(n[3].trim(), e),
            r.length > 1)
          ) {
            let n = r[1].match(z);
            ("" == n[1].trim() && "" == n[3].trim()) ||
              i.throwArgumentError("unexpected tokens", "value", t),
              (e.outputs = f(n[2], !1));
          } else e.outputs = [];
          return A.fromObject(e);
        }
        static isFunctionFragment(t) {
          return t && t._isFragment && "function" === t.type;
        }
      }
      function O(t) {
        const e = t.format();
        return (
          ("Error(string)" !== e && "Panic(uint256)" !== e) ||
            i.throwArgumentError(
              `cannot specify user defined ${e} error`,
              "fragment",
              t
            ),
          t
        );
      }
      class x extends y {
        format(t) {
          if (
            (t || (t = d.sighash),
            d[t] || i.throwArgumentError("invalid format type", "format", t),
            t === d.json)
          )
            return JSON.stringify({
              type: "error",
              name: this.name,
              inputs: this.inputs.map((e) => JSON.parse(e.format(t))),
            });
          let e = "";
          return (
            t !== d.sighash && (e += "error "),
            (e +=
              this.name +
              "(" +
              this.inputs
                .map((e) => e.format(t))
                .join(t === d.full ? ", " : ",") +
              ") "),
            e.trim()
          );
        }
        static from(t) {
          return "string" === typeof t ? x.fromString(t) : x.fromObject(t);
        }
        static fromObject(t) {
          if (x.isErrorFragment(t)) return t;
          "error" !== t.type &&
            i.throwArgumentError("invalid error object", "value", t);
          const e = {
            type: t.type,
            name: N(t.name),
            inputs: t.inputs ? t.inputs.map(g.fromObject) : [],
          };
          return O(new x(u, e));
        }
        static fromString(t) {
          let e = { type: "error" },
            r = t.match(z);
          return (
            r || i.throwArgumentError("invalid error signature", "value", t),
            (e.name = r[1].trim()),
            e.name && N(e.name),
            (e.inputs = f(r[2], !1)),
            O(x.fromObject(e))
          );
        }
        static isErrorFragment(t) {
          return t && t._isFragment && "error" === t.type;
        }
      }
      function S(t) {
        return (
          t.match(/^uint($|[^1-9])/)
            ? (t = "uint256" + t.substring(4))
            : t.match(/^int($|[^1-9])/) && (t = "int256" + t.substring(3)),
          t
        );
      }
      const j = new RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");
      function N(t) {
        return (
          (t && t.match(j)) ||
            i.throwArgumentError(`invalid identifier "${t}"`, "value", t),
          t
        );
      }
      const z = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$");
    },
    77421: function (t, e, r) {
      r.d(e, {
        CC: function () {
          return p;
        },
        vk: function () {
          return g;
        },
        Hk: function () {
          return y;
        },
        vU: function () {
          return E;
        },
      });
      var n = r(91426),
        a = r(93442),
        s = r(25689),
        o = r(33139),
        i = r(82119),
        u = r(98690),
        c = r(23992),
        l = r(2631),
        h = r(87898),
        m = r(46818);
      const d = new h.Yd(m.i);
      class p extends u.dk {}
      class g extends u.dk {}
      class f extends u.dk {}
      class y extends u.dk {
        static isIndexed(t) {
          return !(!t || !t._isIndexed);
        }
      }
      const b = {
        "0x08c379a0": {
          signature: "Error(string)",
          name: "Error",
          inputs: ["string"],
          reason: !0,
        },
        "0x4e487b71": {
          signature: "Panic(uint256)",
          name: "Panic",
          inputs: ["uint256"],
        },
      };
      function w(t, e) {
        const r = new Error(
          `deferred error during ABI decoding triggered accessing ${t}`
        );
        return (r.error = e), r;
      }
      class E {
        constructor(t) {
          let e = [];
          (e = "string" === typeof t ? JSON.parse(t) : t),
            (0, u.zG)(
              this,
              "fragments",
              e.map((t) => l.HY.from(t)).filter((t) => null != t)
            ),
            (0, u.zG)(
              this,
              "_abiCoder",
              (0, u.tu)(new.target, "getAbiCoder")()
            ),
            (0, u.zG)(this, "functions", {}),
            (0, u.zG)(this, "errors", {}),
            (0, u.zG)(this, "events", {}),
            (0, u.zG)(this, "structs", {}),
            this.fragments.forEach((t) => {
              let e = null;
              switch (t.type) {
                case "constructor":
                  return this.deploy
                    ? void d.warn("duplicate definition - constructor")
                    : void (0, u.zG)(this, "deploy", t);
                case "function":
                  e = this.functions;
                  break;
                case "event":
                  e = this.events;
                  break;
                case "error":
                  e = this.errors;
                  break;
                default:
                  return;
              }
              let r = t.format();
              e[r] ? d.warn("duplicate definition - " + r) : (e[r] = t);
            }),
            this.deploy ||
              (0, u.zG)(
                this,
                "deploy",
                l.Xg.from({ payable: !1, type: "constructor" })
              ),
            (0, u.zG)(this, "_isInterface", !0);
        }
        format(t) {
          t || (t = l.pc.full),
            t === l.pc.sighash &&
              d.throwArgumentError(
                "interface does not support formatting sighash",
                "format",
                t
              );
          const e = this.fragments.map((e) => e.format(t));
          return t === l.pc.json
            ? JSON.stringify(e.map((t) => JSON.parse(t)))
            : e;
        }
        static getAbiCoder() {
          return c.$;
        }
        static getAddress(t) {
          return (0, n.Kn)(t);
        }
        static getSighash(t) {
          return (0, s.p3)((0, o.id)(t.format()), 0, 4);
        }
        static getEventTopic(t) {
          return (0, o.id)(t.format());
        }
        getFunction(t) {
          if ((0, s.A7)(t)) {
            for (const e in this.functions)
              if (t === this.getSighash(e)) return this.functions[e];
            d.throwArgumentError("no matching function", "sighash", t);
          }
          if (-1 === t.indexOf("(")) {
            const e = t.trim(),
              r = Object.keys(this.functions).filter(
                (t) => t.split("(")[0] === e
              );
            return (
              0 === r.length
                ? d.throwArgumentError("no matching function", "name", e)
                : r.length > 1 &&
                  d.throwArgumentError(
                    "multiple matching functions",
                    "name",
                    e
                  ),
              this.functions[r[0]]
            );
          }
          const e = this.functions[l.YW.fromString(t).format()];
          return (
            e || d.throwArgumentError("no matching function", "signature", t), e
          );
        }
        getEvent(t) {
          if ((0, s.A7)(t)) {
            const e = t.toLowerCase();
            for (const t in this.events)
              if (e === this.getEventTopic(t)) return this.events[t];
            d.throwArgumentError("no matching event", "topichash", e);
          }
          if (-1 === t.indexOf("(")) {
            const e = t.trim(),
              r = Object.keys(this.events).filter((t) => t.split("(")[0] === e);
            return (
              0 === r.length
                ? d.throwArgumentError("no matching event", "name", e)
                : r.length > 1 &&
                  d.throwArgumentError("multiple matching events", "name", e),
              this.events[r[0]]
            );
          }
          const e = this.events[l.QV.fromString(t).format()];
          return (
            e || d.throwArgumentError("no matching event", "signature", t), e
          );
        }
        getError(t) {
          if ((0, s.A7)(t)) {
            const e = (0, u.tu)(this.constructor, "getSighash");
            for (const r in this.errors) {
              if (t === e(this.errors[r])) return this.errors[r];
            }
            d.throwArgumentError("no matching error", "sighash", t);
          }
          if (-1 === t.indexOf("(")) {
            const e = t.trim(),
              r = Object.keys(this.errors).filter((t) => t.split("(")[0] === e);
            return (
              0 === r.length
                ? d.throwArgumentError("no matching error", "name", e)
                : r.length > 1 &&
                  d.throwArgumentError("multiple matching errors", "name", e),
              this.errors[r[0]]
            );
          }
          const e = this.errors[l.YW.fromString(t).format()];
          return (
            e || d.throwArgumentError("no matching error", "signature", t), e
          );
        }
        getSighash(t) {
          if ("string" === typeof t)
            try {
              t = this.getFunction(t);
            } catch (e) {
              try {
                t = this.getError(t);
              } catch (r) {
                throw e;
              }
            }
          return (0, u.tu)(this.constructor, "getSighash")(t);
        }
        getEventTopic(t) {
          return (
            "string" === typeof t && (t = this.getEvent(t)),
            (0, u.tu)(this.constructor, "getEventTopic")(t)
          );
        }
        _decodeParams(t, e) {
          return this._abiCoder.decode(t, e);
        }
        _encodeParams(t, e) {
          return this._abiCoder.encode(t, e);
        }
        encodeDeploy(t) {
          return this._encodeParams(this.deploy.inputs, t || []);
        }
        decodeErrorResult(t, e) {
          "string" === typeof t && (t = this.getError(t));
          const r = (0, s.lE)(e);
          return (
            (0, s.Dv)(r.slice(0, 4)) !== this.getSighash(t) &&
              d.throwArgumentError(
                `data signature does not match error ${t.name}.`,
                "data",
                (0, s.Dv)(r)
              ),
            this._decodeParams(t.inputs, r.slice(4))
          );
        }
        encodeErrorResult(t, e) {
          return (
            "string" === typeof t && (t = this.getError(t)),
            (0, s.Dv)(
              (0, s.zo)([
                this.getSighash(t),
                this._encodeParams(t.inputs, e || []),
              ])
            )
          );
        }
        decodeFunctionData(t, e) {
          "string" === typeof t && (t = this.getFunction(t));
          const r = (0, s.lE)(e);
          return (
            (0, s.Dv)(r.slice(0, 4)) !== this.getSighash(t) &&
              d.throwArgumentError(
                `data signature does not match function ${t.name}.`,
                "data",
                (0, s.Dv)(r)
              ),
            this._decodeParams(t.inputs, r.slice(4))
          );
        }
        encodeFunctionData(t, e) {
          return (
            "string" === typeof t && (t = this.getFunction(t)),
            (0, s.Dv)(
              (0, s.zo)([
                this.getSighash(t),
                this._encodeParams(t.inputs, e || []),
              ])
            )
          );
        }
        decodeFunctionResult(t, e) {
          "string" === typeof t && (t = this.getFunction(t));
          let r = (0, s.lE)(e),
            n = null,
            a = "",
            o = null,
            i = null,
            u = null;
          switch (r.length % this._abiCoder._getWordSize()) {
            case 0:
              try {
                return this._abiCoder.decode(t.outputs, r);
              } catch (c) {}
              break;
            case 4: {
              const t = (0, s.Dv)(r.slice(0, 4)),
                e = b[t];
              if (e)
                (o = this._abiCoder.decode(e.inputs, r.slice(4))),
                  (i = e.name),
                  (u = e.signature),
                  e.reason && (n = o[0]),
                  "Error" === i
                    ? (a = `; VM Exception while processing transaction: reverted with reason string ${JSON.stringify(
                        o[0]
                      )}`)
                    : "Panic" === i &&
                      (a = `; VM Exception while processing transaction: reverted with panic code ${o[0]}`);
              else
                try {
                  const e = this.getError(t);
                  (o = this._abiCoder.decode(e.inputs, r.slice(4))),
                    (i = e.name),
                    (u = e.format());
                } catch (c) {}
              break;
            }
          }
          return d.throwError(
            "call revert exception" + a,
            h.Yd.errors.CALL_EXCEPTION,
            {
              method: t.format(),
              data: (0, s.Dv)(e),
              errorArgs: o,
              errorName: i,
              errorSignature: u,
              reason: n,
            }
          );
        }
        encodeFunctionResult(t, e) {
          return (
            "string" === typeof t && (t = this.getFunction(t)),
            (0, s.Dv)(this._abiCoder.encode(t.outputs, e || []))
          );
        }
        encodeFilterTopics(t, e) {
          "string" === typeof t && (t = this.getEvent(t)),
            e.length > t.inputs.length &&
              d.throwError(
                "too many arguments for " + t.format(),
                h.Yd.errors.UNEXPECTED_ARGUMENT,
                { argument: "values", value: e }
              );
          let r = [];
          t.anonymous || r.push(this.getEventTopic(t));
          const n = (t, e) =>
            "string" === t.type
              ? (0, o.id)(e)
              : "bytes" === t.type
              ? (0, i.w)((0, s.Dv)(e))
              : ("bool" === t.type &&
                  "boolean" === typeof e &&
                  (e = e ? "0x01" : "0x00"),
                t.type.match(/^u?int/) && (e = a.O$.from(e).toHexString()),
                "address" === t.type && this._abiCoder.encode(["address"], [e]),
                (0, s.$m)((0, s.Dv)(e), 32));
          for (
            e.forEach((e, a) => {
              let s = t.inputs[a];
              s.indexed
                ? null == e
                  ? r.push(null)
                  : "array" === s.baseType || "tuple" === s.baseType
                  ? d.throwArgumentError(
                      "filtering with tuples or arrays not supported",
                      "contract." + s.name,
                      e
                    )
                  : Array.isArray(e)
                  ? r.push(e.map((t) => n(s, t)))
                  : r.push(n(s, e))
                : null != e &&
                  d.throwArgumentError(
                    "cannot filter non-indexed parameters; must be null",
                    "contract." + s.name,
                    e
                  );
            });
            r.length && null === r[r.length - 1];

          )
            r.pop();
          return r;
        }
        encodeEventLog(t, e) {
          "string" === typeof t && (t = this.getEvent(t));
          const r = [],
            n = [],
            a = [];
          return (
            t.anonymous || r.push(this.getEventTopic(t)),
            e.length !== t.inputs.length &&
              d.throwArgumentError(
                "event arguments/values mismatch",
                "values",
                e
              ),
            t.inputs.forEach((t, s) => {
              const u = e[s];
              if (t.indexed)
                if ("string" === t.type) r.push((0, o.id)(u));
                else if ("bytes" === t.type) r.push((0, i.w)(u));
                else {
                  if ("tuple" === t.baseType || "array" === t.baseType)
                    throw new Error("not implemented");
                  r.push(this._abiCoder.encode([t.type], [u]));
                }
              else n.push(t), a.push(u);
            }),
            { data: this._abiCoder.encode(n, a), topics: r }
          );
        }
        decodeEventLog(t, e, r) {
          if (
            ("string" === typeof t && (t = this.getEvent(t)),
            null != r && !t.anonymous)
          ) {
            let e = this.getEventTopic(t);
            ((0, s.A7)(r[0], 32) && r[0].toLowerCase() === e) ||
              d.throwError(
                "fragment/topic mismatch",
                h.Yd.errors.INVALID_ARGUMENT,
                { argument: "topics[0]", expected: e, value: r[0] }
              ),
              (r = r.slice(1));
          }
          let n = [],
            a = [],
            o = [];
          t.inputs.forEach((t, e) => {
            t.indexed
              ? "string" === t.type ||
                "bytes" === t.type ||
                "tuple" === t.baseType ||
                "array" === t.baseType
                ? (n.push(l._R.fromObject({ type: "bytes32", name: t.name })),
                  o.push(!0))
                : (n.push(t), o.push(!1))
              : (a.push(t), o.push(!1));
          });
          let i = null != r ? this._abiCoder.decode(n, (0, s.zo)(r)) : null,
            u = this._abiCoder.decode(a, e, !0),
            c = [],
            m = 0,
            p = 0;
          t.inputs.forEach((t, e) => {
            if (t.indexed)
              if (null == i) c[e] = new y({ _isIndexed: !0, hash: null });
              else if (o[e]) c[e] = new y({ _isIndexed: !0, hash: i[p++] });
              else
                try {
                  c[e] = i[p++];
                } catch (r) {
                  c[e] = r;
                }
            else
              try {
                c[e] = u[m++];
              } catch (r) {
                c[e] = r;
              }
            if (t.name && null == c[t.name]) {
              const r = c[e];
              r instanceof Error
                ? Object.defineProperty(c, t.name, {
                    enumerable: !0,
                    get: () => {
                      throw w(`property ${JSON.stringify(t.name)}`, r);
                    },
                  })
                : (c[t.name] = r);
            }
          });
          for (let s = 0; s < c.length; s++) {
            const t = c[s];
            t instanceof Error &&
              Object.defineProperty(c, s, {
                enumerable: !0,
                get: () => {
                  throw w(`index ${s}`, t);
                },
              });
          }
          return Object.freeze(c);
        }
        parseTransaction(t) {
          let e = this.getFunction(t.data.substring(0, 10).toLowerCase());
          return e
            ? new g({
                args: this._abiCoder.decode(
                  e.inputs,
                  "0x" + t.data.substring(10)
                ),
                functionFragment: e,
                name: e.name,
                signature: e.format(),
                sighash: this.getSighash(e),
                value: a.O$.from(t.value || "0"),
              })
            : null;
        }
        parseLog(t) {
          let e = this.getEvent(t.topics[0]);
          return !e || e.anonymous
            ? null
            : new p({
                eventFragment: e,
                name: e.name,
                signature: e.format(),
                topic: this.getEventTopic(e),
                args: this.decodeEventLog(e, t.data, t.topics),
              });
        }
        parseError(t) {
          const e = (0, s.Dv)(t);
          let r = this.getError(e.substring(0, 10).toLowerCase());
          return r
            ? new f({
                args: this._abiCoder.decode(r.inputs, "0x" + e.substring(10)),
                errorFragment: r,
                name: r.name,
                signature: r.format(),
                sighash: this.getSighash(r),
              })
            : null;
        }
        static isInterface(t) {
          return !(!t || !t._isInterface);
        }
      }
    },
  },
]);
