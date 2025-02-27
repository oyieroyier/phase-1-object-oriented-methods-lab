!(function (r, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t(require("sinon")))
    : "function" == typeof define && define.amd
    ? define(["sinon"], t)
    : "object" == typeof exports
    ? (exports.SinonSpyUtils = t(require("sinon")))
    : (r.SinonSpyUtils = t(r.sinon));
})(this, function (r) {
  return (function (r) {
    function t(e) {
      if (n[e]) return n[e].exports;
      var o = (n[e] = { i: e, l: !1, exports: {} });
      return r[e].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    var n = {};
    return (
      (t.m = r),
      (t.c = n),
      (t.i = function (r) {
        return r;
      }),
      (t.d = function (r, n, e) {
        t.o(r, n) ||
          Object.defineProperty(r, n, {
            configurable: !1,
            enumerable: !0,
            get: e,
          });
      }),
      (t.n = function (r) {
        var n =
          r && r.__esModule
            ? function () {
                return r.default;
              }
            : function () {
                return r;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function (r, t) {
        return Object.prototype.hasOwnProperty.call(r, t);
      }),
      (t.p = ""),
      t((t.s = 1))
    );
  })([
    function (t, n) {
      t.exports = r;
    },
    function (r, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SpyAndDo = t.StubAndDo = t.Mock = void 0);
      var e = n(0),
        o = (function (r) {
          return r && r.__esModule ? r : { default: r };
        })(e),
        i =
          ((t.Mock = function () {
            for (var r = arguments.length, t = Array(r), n = 0; n < r; n++)
              t[n] = arguments[n];
            var e = {},
              i = !0,
              u = !1,
              f = void 0;
            try {
              for (
                var l, a = t[Symbol.iterator]();
                !(i = (l = a.next()).done);
                i = !0
              ) {
                e[l.value] = o.default.stub();
              }
            } catch (r) {
              (u = !0), (f = r);
            } finally {
              try {
                !i && a.return && a.return();
              } finally {
                if (u) throw f;
              }
            }
            return e;
          }),
          function (r, t, n) {
            var e = n.slice(0, n.length - 1),
              i = n[n.length - 1],
              u = {},
              f = !0,
              l = !1,
              a = void 0;
            try {
              for (
                var c, y = e[Symbol.iterator]();
                !(f = (c = y.next()).done);
                f = !0
              ) {
                var s = c.value;
                u[s] = o.default[r](t, s);
              }
            } catch (r) {
              (l = !0), (a = r);
            } finally {
              try {
                !f && y.return && y.return();
              } finally {
                if (l) throw a;
              }
            }
            try {
              i(u);
            } finally {
              var d = !0,
                p = !1,
                v = void 0;
              try {
                for (
                  var b, h = e[Symbol.iterator]();
                  !(d = (b = h.next()).done);
                  d = !0
                ) {
                  u[b.value].restore();
                }
              } catch (r) {
                (p = !0), (v = r);
              } finally {
                try {
                  !d && h.return && h.return();
                } finally {
                  if (p) throw v;
                }
              }
            }
          });
      (t.StubAndDo = function (r) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), e = 1;
          e < t;
          e++
        )
          n[e - 1] = arguments[e];
        i("stub", r, n);
      }),
        (t.SpyAndDo = function (r) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), e = 1;
            e < t;
            e++
          )
            n[e - 1] = arguments[e];
          i("spy", r, n);
        });
    },
  ]);
});
