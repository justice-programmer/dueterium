import { onMount as ke } from "svelte";
const Ie = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Ie);
let vt = !1, Pe = !1;
function Re() {
  vt = !0;
}
Re();
const De = 1, Ce = 2, Fe = 4, Me = 8, Le = 16, qe = 2, g = Symbol(), je = "http://www.w3.org/1999/xhtml", Bt = !1;
var $t = Array.isArray, Be = Array.prototype.indexOf, Ue = Object.defineProperty, it = Object.getOwnPropertyDescriptor, te = Object.getOwnPropertyDescriptors, Ye = Object.prototype, Ve = Array.prototype, At = Object.getPrototypeOf;
function He(t) {
  return t();
}
function Tt(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
const S = 2, ee = 4, $ = 8, Ot = 16, F = 32, tt = 64, kt = 128, b = 256, ut = 512, x = 1024, C = 2048, K = 4096, G = 8192, dt = 16384, ne = 32768, It = 65536, Ut = 1 << 17, Ke = 1 << 18, re = 1 << 19, St = 1 << 20, Pt = 1 << 21, z = Symbol("$state"), We = Symbol("legacy props"), ze = Symbol(""), le = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function ie(t) {
  return t === this.v;
}
function Ge(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Ze(t) {
  return !Ge(t, this.v);
}
function Je(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Qe() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Xe(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function $e() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function tn(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function en() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function nn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function rn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let T = null;
function Yt(t) {
  T = t;
}
function fe(t, e = !1, n) {
  T = {
    p: T,
    c: null,
    e: null,
    s: t,
    x: null,
    l: null
  }, vt && !e && (T.l = {
    s: null,
    u: null,
    r1: [],
    r2: oe(!1)
  });
}
function ue(t) {
  var e = (
    /** @type {ComponentContext} */
    T
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      ve(r);
  }
  return T = e.p, /** @type {T} */
  {};
}
function et() {
  return !vt || T !== null && T.l === null;
}
function W(t) {
  if (typeof t != "object" || t === null || z in t)
    return t;
  const e = At(t);
  if (e !== Ye && e !== Ve)
    return t;
  var n = /* @__PURE__ */ new Map(), r = $t(t), i = /* @__PURE__ */ q(0), l = H, u = (f) => {
    if (H === l)
      return f();
    var a = d, s = H;
    U(null), Gt(l);
    var o = f();
    return U(a), Gt(s), o;
  };
  return r && n.set("length", /* @__PURE__ */ q(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(f, a, s) {
        (!("value" in s) || s.configurable === !1 || s.enumerable === !1 || s.writable === !1) && en();
        var o = n.get(a);
        return o === void 0 ? o = u(() => {
          var v = /* @__PURE__ */ q(s.value);
          return n.set(a, v), v;
        }) : R(o, s.value, !0), !0;
      },
      deleteProperty(f, a) {
        var s = n.get(a);
        if (s === void 0) {
          if (a in f) {
            const c = u(() => /* @__PURE__ */ q(g));
            n.set(a, c), mt(i);
          }
        } else {
          if (r && typeof a == "string") {
            var o = (
              /** @type {Source<number>} */
              n.get("length")
            ), v = Number(a);
            Number.isInteger(v) && v < o.v && R(o, v);
          }
          R(s, g), mt(i);
        }
        return !0;
      },
      get(f, a, s) {
        if (a === z)
          return t;
        var o = n.get(a), v = a in f;
        if (o === void 0 && (!v || it(f, a)?.writable) && (o = u(() => {
          var _ = W(v ? f[a] : g), p = /* @__PURE__ */ q(_);
          return p;
        }), n.set(a, o)), o !== void 0) {
          var c = I(o);
          return c === g ? void 0 : c;
        }
        return Reflect.get(f, a, s);
      },
      getOwnPropertyDescriptor(f, a) {
        var s = Reflect.getOwnPropertyDescriptor(f, a);
        if (s && "value" in s) {
          var o = n.get(a);
          o && (s.value = I(o));
        } else if (s === void 0) {
          var v = n.get(a), c = v?.v;
          if (v !== void 0 && c !== g)
            return {
              enumerable: !0,
              configurable: !0,
              value: c,
              writable: !0
            };
        }
        return s;
      },
      has(f, a) {
        if (a === z)
          return !0;
        var s = n.get(a), o = s !== void 0 && s.v !== g || Reflect.has(f, a);
        if (s !== void 0 || h !== null && (!o || it(f, a)?.writable)) {
          s === void 0 && (s = u(() => {
            var c = o ? W(f[a]) : g, _ = /* @__PURE__ */ q(c);
            return _;
          }), n.set(a, s));
          var v = I(s);
          if (v === g)
            return !1;
        }
        return o;
      },
      set(f, a, s, o) {
        var v = n.get(a), c = a in f;
        if (r && a === "length")
          for (var _ = s; _ < /** @type {Source<number>} */
          v.v; _ += 1) {
            var p = n.get(_ + "");
            p !== void 0 ? R(p, g) : _ in f && (p = u(() => /* @__PURE__ */ q(g)), n.set(_ + "", p));
          }
        if (v === void 0)
          (!c || it(f, a)?.writable) && (v = u(() => /* @__PURE__ */ q(void 0)), R(v, W(s)), n.set(a, v));
        else {
          c = v.v !== g;
          var M = u(() => W(s));
          R(v, M);
        }
        var L = Reflect.getOwnPropertyDescriptor(f, a);
        if (L?.set && L.set.call(o, s), !c) {
          if (r && typeof a == "string") {
            var A = (
              /** @type {Source<number>} */
              n.get("length")
            ), O = Number(a);
            Number.isInteger(O) && O >= A.v && R(A, O + 1);
          }
          mt(i);
        }
        return !0;
      },
      ownKeys(f) {
        I(i);
        var a = Reflect.ownKeys(f).filter((v) => {
          var c = n.get(v);
          return c === void 0 || c.v !== g;
        });
        for (var [s, o] of n)
          o.v !== g && !(s in f) && a.push(s);
        return a;
      },
      setPrototypeOf() {
        nn();
      }
    }
  );
}
// @__NO_SIDE_EFFECTS__
function ht(t) {
  var e = S | C, n = d !== null && (d.f & S) !== 0 ? (
    /** @type {Derived} */
    d
  ) : null;
  return h === null || n !== null && (n.f & b) !== 0 ? e |= b : h.f |= re, {
    ctx: T,
    deps: null,
    effects: null,
    equals: ie,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      g
    ),
    wv: 0,
    parent: n ?? h,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ln(t) {
  const e = /* @__PURE__ */ ht(t);
  return e.equals = Ze, e;
}
function ae(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      nt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function fn(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & S) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Rt(t) {
  var e, n = h;
  Z(fn(t));
  try {
    ae(t), e = Te(t);
  } finally {
    Z(n);
  }
  return e;
}
function se(t) {
  var e = Rt(t);
  if (t.equals(e) || (t.v = e, t.wv = Ee()), !B) {
    var n = (j || (t.f & b) !== 0) && t.deps !== null ? K : x;
    P(t, n);
  }
}
const Y = /* @__PURE__ */ new Map();
function oe(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: ie,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function q(t, e) {
  const n = oe(t);
  return Sn(n), n;
}
function R(t, e, n = !1) {
  d !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!k || (d.f & Ut) !== 0) && et() && (d.f & (S | Ot | Ut)) !== 0 && !D?.includes(t) && rn();
  let r = n ? W(e) : e;
  return un(t, r);
}
function un(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    B ? Y.set(t, e) : Y.set(t, n), t.v = e, (t.f & S) !== 0 && ((t.f & C) !== 0 && Rt(
      /** @type {Derived} */
      t
    ), P(t, (t.f & b) === 0 ? x : K)), t.wv = Ee(), ce(t, C), et() && h !== null && (h.f & x) !== 0 && (h.f & (F | tt)) === 0 && (N === null ? xn([t]) : N.push(t));
  }
  return e;
}
function mt(t) {
  R(t, t.v + 1);
}
function ce(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = et(), i = n.length, l = 0; l < i; l++) {
      var u = n[l], f = u.f;
      (f & C) === 0 && (!r && u === h || (P(u, e), (f & (x | b)) !== 0 && ((f & S) !== 0 ? ce(
        /** @type {Derived} */
        u,
        K
      ) : wt(
        /** @type {Effect} */
        u
      ))));
    }
}
var an, sn, on;
function cn(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Dt(t) {
  return sn.call(t);
}
// @__NO_SIDE_EFFECTS__
function Ct(t) {
  return on.call(t);
}
function at(t, e) {
  return /* @__PURE__ */ Dt(t);
}
function _n(t, e) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Dt(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ct(n) : n;
  }
}
function vn(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ct(r);
  return r;
}
function _e(t) {
  h === null && d === null && Xe(), d !== null && (d.f & b) !== 0 && h === null && Qe(), B && Je();
}
function dn(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function J(t, e, n, r = !0) {
  var i = h, l = {
    ctx: T,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | C,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: i,
    b: i && i.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      Ft(l), l.f |= ne;
    } catch (a) {
      throw nt(l), a;
    }
  else e !== null && wt(l);
  var u = n && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & (re | kt)) === 0;
  if (!u && r && (i !== null && dn(l, i), d !== null && (d.f & S) !== 0)) {
    var f = (
      /** @type {Derived} */
      d
    );
    (f.effects ??= []).push(l);
  }
  return l;
}
function hn(t) {
  const e = J($, null, !1);
  return P(e, x), e.teardown = t, e;
}
function Vt(t) {
  if (_e(), !d && h && (h.f & F) !== 0) {
    var e = (
      /** @type {ComponentContext} */
      T
    );
    (e.e ??= []).push(t);
  } else
    return ve(t);
}
function ve(t) {
  return J(ee | Pt, t, !1);
}
function pn(t) {
  return _e(), J($ | Pt, t, !0);
}
function gn(t) {
  return J($, t, !0);
}
function pt(t, e = [], n = ht) {
  const r = e.map(n);
  return de(() => t(...r.map(I)));
}
function de(t, e = 0) {
  var n = J($ | Ot | e, t, !0);
  return n;
}
function Ht(t, e = !0) {
  return J($ | F, t, !0, e);
}
function he(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = B, r = d;
    zt(!0), U(null);
    try {
      e.call(null);
    } finally {
      zt(n), U(r);
    }
  }
}
function pe(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    n.ac?.abort(le);
    var r = n.next;
    (n.f & tt) !== 0 ? n.parent = null : nt(n, e), n = r;
  }
}
function wn(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & F) === 0 && nt(e), e = n;
  }
}
function nt(t, e = !0) {
  var n = !1;
  (e || (t.f & Ke) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (yn(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), pe(t, e && !n), _t(t, 0), P(t, dt);
  var r = t.transitions;
  if (r !== null)
    for (const l of r)
      l.stop();
  he(t);
  var i = t.parent;
  i !== null && i.first !== null && ge(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function yn(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ct(t)
    );
    t.remove(), t = n;
  }
}
function ge(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Kt(t, e) {
  var n = [];
  we(t, n, !0), mn(n, () => {
    nt(t), e && e();
  });
}
function mn(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function we(t, e, n) {
  if ((t.f & G) === 0) {
    if (t.f ^= G, t.transitions !== null)
      for (const u of t.transitions)
        (u.is_global || n) && e.push(u);
    for (var r = t.first; r !== null; ) {
      var i = r.next, l = (r.f & It) !== 0 || (r.f & F) !== 0;
      we(r, e, l ? n : !1), r = i;
    }
  }
}
function Wt(t) {
  ye(t, !0);
}
function ye(t, e) {
  if ((t.f & G) !== 0) {
    t.f ^= G;
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & It) !== 0 || (n.f & F) !== 0;
      ye(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const l of t.transitions)
        (l.is_global || e) && l.in();
  }
}
let st = [];
function En() {
  var t = st;
  st = [], Tt(t);
}
function bn(t) {
  st.length === 0 && queueMicrotask(En), st.push(t);
}
function Tn(t) {
  var e = (
    /** @type {Effect} */
    h
  );
  if ((e.f & ne) === 0) {
    if ((e.f & kt) === 0)
      throw t;
    e.fn(t);
  } else
    me(t, e);
}
function me(t, e) {
  for (; e !== null; ) {
    if ((e.f & kt) !== 0)
      try {
        e.b.error(t);
        return;
      } catch {
      }
    e = e.parent;
  }
  throw t;
}
let xt = !1, ot = null, V = !1, B = !1;
function zt(t) {
  B = t;
}
let ft = [];
let d = null, k = !1;
function U(t) {
  d = t;
}
let h = null;
function Z(t) {
  h = t;
}
let D = null;
function Sn(t) {
  d !== null && d.f & St && (D === null ? D = [t] : D.push(t));
}
let y = null, m = 0, N = null;
function xn(t) {
  N = t;
}
let ct = 1, Q = 0, H = Q;
function Gt(t) {
  H = t;
}
let j = !1;
function Ee() {
  return ++ct;
}
function gt(t) {
  var e = t.f;
  if ((e & C) !== 0)
    return !0;
  if ((e & K) !== 0) {
    var n = t.deps, r = (e & b) !== 0;
    if (n !== null) {
      var i, l, u = (e & ut) !== 0, f = r && h !== null && !j, a = n.length;
      if (u || f) {
        var s = (
          /** @type {Derived} */
          t
        ), o = s.parent;
        for (i = 0; i < a; i++)
          l = n[i], (u || !l?.reactions?.includes(s)) && (l.reactions ??= []).push(s);
        u && (s.f ^= ut), f && o !== null && (o.f & b) === 0 && (s.f ^= b);
      }
      for (i = 0; i < a; i++)
        if (l = n[i], gt(
          /** @type {Derived} */
          l
        ) && se(
          /** @type {Derived} */
          l
        ), l.wv > t.wv)
          return !0;
    }
    (!r || h !== null && !j) && P(t, x);
  }
  return !1;
}
function be(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !D?.includes(t))
    for (var i = 0; i < r.length; i++) {
      var l = r[i];
      (l.f & S) !== 0 ? be(
        /** @type {Derived} */
        l,
        e,
        !1
      ) : e === l && (n ? P(l, C) : (l.f & x) !== 0 && P(l, K), wt(
        /** @type {Effect} */
        l
      ));
    }
}
function Te(t) {
  var e = y, n = m, r = N, i = d, l = j, u = D, f = T, a = k, s = H, o = t.f;
  y = /** @type {null | Value[]} */
  null, m = 0, N = null, j = (o & b) !== 0 && (k || !V || d === null), d = (o & (F | tt)) === 0 ? t : null, D = null, Yt(t.ctx), k = !1, H = ++Q, t.f |= St, t.ac !== null && (t.ac.abort(le), t.ac = null);
  try {
    var v = (
      /** @type {Function} */
      (0, t.fn)()
    ), c = t.deps;
    if (y !== null) {
      var _;
      if (_t(t, m), c !== null && m > 0)
        for (c.length = m + y.length, _ = 0; _ < y.length; _++)
          c[m + _] = y[_];
      else
        t.deps = c = y;
      if (!j || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (o & S) !== 0 && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (_ = m; _ < c.length; _++)
          (c[_].reactions ??= []).push(t);
    } else c !== null && m < c.length && (_t(t, m), c.length = m);
    if (et() && N !== null && !k && c !== null && (t.f & (S | K | C)) === 0)
      for (_ = 0; _ < /** @type {Source[]} */
      N.length; _++)
        be(
          N[_],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (Q++, N !== null && (r === null ? r = N : r.push(.../** @type {Source[]} */
    N))), v;
  } catch (p) {
    Tn(p);
  } finally {
    y = e, m = n, N = r, d = i, j = l, D = u, Yt(f), k = a, H = s, t.f ^= St;
  }
}
function Nn(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Be.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && (e.f & S) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (y === null || !y.includes(e)) && (P(e, K), (e.f & (b | ut)) === 0 && (e.f ^= ut), ae(
    /** @type {Derived} **/
    e
  ), _t(
    /** @type {Derived} **/
    e,
    0
  ));
}
function _t(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Nn(t, n[r]);
}
function Ft(t) {
  var e = t.f;
  if ((e & dt) === 0) {
    P(t, x);
    var n = h, r = V;
    h = t, V = !0;
    try {
      (e & Ot) !== 0 ? wn(t) : pe(t), he(t);
      var i = Te(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = ct;
      var l;
      Bt && Pe && (t.f & C) !== 0 && t.deps;
    } finally {
      V = r, h = n;
    }
  }
}
function An() {
  try {
    $e();
  } catch (t) {
    if (ot !== null)
      me(t, ot);
    else
      throw t;
  }
}
function On() {
  var t = V;
  try {
    var e = 0;
    for (V = !0; ft.length > 0; ) {
      e++ > 1e3 && An();
      var n = ft, r = n.length;
      ft = [];
      for (var i = 0; i < r; i++) {
        var l = In(n[i]);
        kn(l);
      }
      Y.clear();
    }
  } finally {
    xt = !1, V = t, ot = null;
  }
}
function kn(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; n++) {
      var r = t[n];
      if ((r.f & (dt | G)) === 0 && gt(r)) {
        var i = ct;
        if (Ft(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? ge(r) : r.fn = null), ct > i && (r.f & Pt) !== 0)
          break;
      }
    }
    for (; n < e; n += 1)
      wt(t[n]);
  }
}
function wt(t) {
  xt || (xt = !0, queueMicrotask(On));
  for (var e = ot = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if ((n & (tt | F)) !== 0) {
      if ((n & x) === 0) return;
      e.f ^= x;
    }
  }
  ft.push(e);
}
function In(t) {
  for (var e = [], n = t; n !== null; ) {
    var r = n.f, i = (r & (F | tt)) !== 0, l = i && (r & x) !== 0;
    if (!l && (r & G) === 0) {
      (r & ee) !== 0 ? e.push(n) : i ? n.f ^= x : gt(n) && Ft(n);
      var u = n.first;
      if (u !== null) {
        n = u;
        continue;
      }
    }
    var f = n.parent;
    for (n = n.next; n === null && f !== null; )
      n = f.next, f = f.parent;
  }
  return e;
}
function I(t) {
  var e = t.f, n = (e & S) !== 0;
  if (d !== null && !k) {
    if (!D?.includes(t)) {
      var r = d.deps;
      t.rv < Q && (t.rv = Q, y === null && r !== null && r[m] === t ? m++ : y === null ? y = [t] : (!j || !y.includes(t)) && y.push(t));
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var i = (
      /** @type {Derived} */
      t
    ), l = i.parent;
    l !== null && (l.f & b) === 0 && (i.f ^= b);
  }
  if (n && !B && (i = /** @type {Derived} */
  t, gt(i) && se(i)), B) {
    if (Y.has(t))
      return Y.get(t);
    if (n) {
      i = /** @type {Derived} */
      t;
      var u = i.v;
      return ((i.f & x) !== 0 || Se(i)) && (u = Rt(i)), Y.set(i, u), u;
    }
  }
  return t.v;
}
function Se(t) {
  if (t.v === g) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Y.has(e) || (e.f & S) !== 0 && Se(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Mt(t) {
  var e = k;
  try {
    return k = !0, t();
  } finally {
    k = e;
  }
}
const Pn = -7169;
function P(t, e) {
  t.f = t.f & Pn | e;
}
function Rn(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (z in t)
      Nt(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && z in n && Nt(n);
      }
  }
}
function Nt(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        Nt(t[r], e);
      } catch {
      }
    const n = At(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = te(n);
      for (let i in r) {
        const l = r[i].get;
        if (l)
          try {
            l.call(t);
          } catch {
          }
      }
    }
  }
}
let Zt = !1;
function Dn() {
  Zt || (Zt = !0, document.addEventListener(
    "reset",
    (t) => {
      Promise.resolve().then(() => {
        if (!t.defaultPrevented)
          for (
            const e of
            /**@type {HTMLFormElement} */
            t.target.elements
          )
            e.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function xe(t) {
  var e = d, n = h;
  U(null), Z(null);
  try {
    return t();
  } finally {
    U(e), Z(n);
  }
}
function Cn(t, e, n, r = n) {
  t.addEventListener(e, () => xe(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), Dn();
}
function Fn(t, e, n, r = {}) {
  function i(l) {
    if (r.capture || Mn.call(e, l), !l.cancelBubble)
      return xe(() => n?.call(this, l));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? bn(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function Lt(t, e, n, r, i) {
  var l = { capture: r, passive: i }, u = Fn(t, e, n, l);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && hn(() => {
    e.removeEventListener(t, u, l);
  });
}
function Mn(t) {
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = t.composedPath?.() || [], l = (
    /** @type {null | Element} */
    i[0] || t.target
  ), u = 0, f = t.__root;
  if (f) {
    var a = i.indexOf(f);
    if (a !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var s = i.indexOf(e);
    if (s === -1)
      return;
    a <= s && (u = a);
  }
  if (l = /** @type {Element} */
  i[u] || t.target, l !== e) {
    Ue(t, "currentTarget", {
      configurable: !0,
      get() {
        return l || n;
      }
    });
    var o = d, v = h;
    U(null), Z(null);
    try {
      for (var c, _ = []; l !== null; ) {
        var p = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var M = l["__" + r];
          if (M != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === l))
            if ($t(M)) {
              var [L, ...A] = M;
              L.apply(l, [t, ...A]);
            } else
              M.call(l, t);
        } catch (O) {
          c ? _.push(O) : c = O;
        }
        if (t.cancelBubble || p === e || p === null)
          break;
        l = p;
      }
      if (c) {
        for (let O of _)
          queueMicrotask(() => {
            throw O;
          });
        throw c;
      }
    } finally {
      t.__root = e, delete t.currentTarget, U(o), Z(v);
    }
  }
}
function Ln(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Ne(t, e) {
  var n = (
    /** @type {Effect} */
    h
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function yt(t, e) {
  var n = (e & qe) !== 0, r, i = !t.startsWith("<!>");
  return () => {
    r === void 0 && (r = Ln(i ? t : "<!>" + t), r = /** @type {Node} */
    /* @__PURE__ */ Dt(r));
    var l = (
      /** @type {TemplateNode} */
      n || an ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return Ne(l, l), l;
  };
}
function qn() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = cn();
  return t.append(e, n), Ne(e, n), t;
}
function X(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function jn(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ??= t.nodeValue) && (t.__t = n, t.nodeValue = n + "");
}
function Bn(t, e, [n, r] = [0, 0]) {
  var i = t, l = null, u = null, f = g, a = n > 0 ? It : 0, s = !1;
  const o = (c, _ = !0) => {
    s = !0, v(_, c);
  }, v = (c, _) => {
    f !== (f = c) && (f ? (l ? Wt(l) : _ && (l = Ht(() => _(i))), u && Kt(u, () => {
      u = null;
    })) : (u ? Wt(u) : _ && (u = Ht(() => _(i, [n + 1, r]))), l && Kt(l, () => {
      l = null;
    })));
  };
  de(() => {
    s = !1, e(o), s || v(null, null);
  }, a);
}
function qt(t, e, n, r, i) {
  var l = e.$$slots?.[n], u = !1;
  l === !0 && (l = e.children, u = !0), l === void 0 || l(t, u ? () => r : r);
}
function Un(t, e, n) {
  var r = t == null ? "" : "" + t;
  return e && (r = r ? r + " " + e : e), r === "" ? null : r;
}
function Ae(t, e, n, r, i, l) {
  var u = t.__className;
  if (u !== n || u === void 0) {
    var f = Un(n, r);
    f == null ? t.removeAttribute("class") : t.className = f, t.__className = n;
  }
  return l;
}
const Yn = Symbol("is custom element"), Vn = Symbol("is html");
function Jt(t, e, n, r) {
  var i = Hn(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[ze] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && Kn(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function Hn(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??= {
      [Yn]: t.nodeName.includes("-"),
      [Vn]: t.namespaceURI === je
    }
  );
}
var Qt = /* @__PURE__ */ new Map();
function Kn(t) {
  var e = Qt.get(t.nodeName);
  if (e) return e;
  Qt.set(t.nodeName, e = []);
  for (var n, r = t, i = Element.prototype; i !== r; ) {
    n = te(r);
    for (var l in n)
      n[l].set && e.push(l);
    r = At(r);
  }
  return e;
}
function Wn(t, e, n = e) {
  var r = et();
  Cn(t, "input", (i) => {
    var l = i ? t.defaultValue : t.value;
    if (l = Et(t) ? bt(l) : l, n(l), r && l !== (l = e())) {
      var u = t.selectionStart, f = t.selectionEnd;
      t.value = l ?? "", f !== null && (t.selectionStart = u, t.selectionEnd = Math.min(f, t.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Mt(e) == null && t.value && n(Et(t) ? bt(t.value) : t.value), gn(() => {
    var i = e();
    Et(t) && i === bt(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function Et(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function bt(t) {
  return t === "" ? null : +t;
}
function zn(t) {
  return function(...e) {
    var n = (
      /** @type {Event} */
      e[0]
    );
    return n.preventDefault(), t?.apply(this, e);
  };
}
function Oe(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    T
  ), n = e.l.u;
  if (!n) return;
  let r = () => Rn(e.s);
  if (t) {
    let i = 0, l = (
      /** @type {Record<string, any>} */
      {}
    );
    const u = /* @__PURE__ */ ht(() => {
      let f = !1;
      const a = e.s;
      for (const s in a)
        a[s] !== l[s] && (l[s] = a[s], f = !0);
      return f && i++, i;
    });
    r = () => I(u);
  }
  n.b.length && pn(() => {
    Xt(e, r), Tt(n.b);
  }), Vt(() => {
    const i = Mt(() => n.m.map(He));
    return () => {
      for (const l of i)
        typeof l == "function" && l();
    };
  }), n.a.length && Vt(() => {
    Xt(e, r), Tt(n.a);
  });
}
function Xt(t, e) {
  if (t.l.s)
    for (const n of t.l.s) I(n);
  e();
}
let lt = !1;
function Gn(t) {
  var e = lt;
  try {
    return lt = !1, [t(), lt];
  } finally {
    lt = e;
  }
}
function E(t, e, n, r) {
  var i = !vt || (n & Ce) !== 0, l = (n & Me) !== 0, u = (n & Le) !== 0, f = (
    /** @type {V} */
    r
  ), a = !0, s = () => (a && (a = !1, f = u ? Mt(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), f), o;
  if (l) {
    var v = z in t || We in t;
    o = it(t, e)?.set ?? (v && e in t ? (w) => t[e] = w : void 0);
  }
  var c, _ = !1;
  l ? [c, _] = Gn(() => (
    /** @type {V} */
    t[e]
  )) : c = /** @type {V} */
  t[e], c === void 0 && r !== void 0 && (c = s(), o && (i && tn(), o(c)));
  var p;
  if (i ? p = () => {
    var w = (
      /** @type {V} */
      t[e]
    );
    return w === void 0 ? s() : (a = !0, w);
  } : p = () => {
    var w = (
      /** @type {V} */
      t[e]
    );
    return w !== void 0 && (f = /** @type {V} */
    void 0), w === void 0 ? f : w;
  }, i && (n & Fe) === 0)
    return p;
  if (o) {
    var M = t.$$legacy;
    return function(w, rt) {
      return arguments.length > 0 ? ((!i || !rt || M || _) && o(rt ? p() : w), w) : p();
    };
  }
  var L = !1, A = ((n & De) !== 0 ? ht : ln)(() => (L = !1, p()));
  l && I(A);
  var O = (
    /** @type {Effect} */
    h
  );
  return function(w, rt) {
    if (arguments.length > 0) {
      const jt = rt ? I(A) : i && l ? W(w) : w;
      return R(A, jt), L = !0, f !== void 0 && (f = jt), w;
    }
    return B && L || (O.f & dt) !== 0 ? A.v : I(A);
  };
}
var Zn = /* @__PURE__ */ yt("<button><!></button>");
function er(t, e) {
  let n = E(e, "type", 8, "primary"), r = E(e, "size", 8, "large"), i = E(e, "onClick", 8, () => {
    console.log("Default button click");
  });
  var l = Zn(), u = at(l);
  qt(u, e, "default", {}), pt(() => Ae(l, 1, `${n()} ${r()}`, "svelte-3hhevg")), Lt("click", l, function(...f) {
    i()?.apply(this, f);
  }), X(t, l);
}
var Jn = /* @__PURE__ */ yt('<form class="dueterium-form svelte-dbnomx"><h2> </h2> <!></form>');
function nr(t, e) {
  let n = E(e, "onSubmit", 8), r = E(e, "heading", 8, "Sign in");
  E(
    e,
    "width",
    8,
    "400px"
    // For layout control
  );
  var i = Jn(), l = at(i), u = at(l), f = vn(l, 2);
  qt(f, e, "default", {}), pt(() => jn(u, r())), Lt("submit", i, zn(function(...a) {
    n()?.apply(this, a);
  })), X(t, i);
}
var Qn = /* @__PURE__ */ yt('<input class="svelte-9uwe14"/>');
function rr(t, e) {
  fe(e, !1);
  let n = E(e, "value", 12, ""), r = E(e, "placeholder", 8, "Enter text"), i = E(e, "type", 8, "text"), l = E(e, "onInput", 8, () => {
  });
  Oe();
  var u = Qn();
  pt(() => {
    Jt(u, "type", i()), Jt(u, "placeholder", r());
  }), Wn(u, n), Lt("input", u, (f) => l()(f.target.value)), X(t, u), ue();
}
var Xn = /* @__PURE__ */ yt("<div><!></div>");
function lr(t, e) {
  fe(e, !1);
  let n = E(e, "type", 8, "info"), r = E(e, "visible", 12, !0), i = E(
    e,
    "timeout",
    8,
    5e3
    // auto-dismiss after x ms (optional)
  );
  ke(() => {
    i() && r() && setTimeout(() => r(!1), i());
  }), Oe();
  var l = qn(), u = _n(l);
  {
    var f = (a) => {
      var s = Xn(), o = at(s);
      qt(o, e, "default", {}), pt(() => Ae(s, 1, `notification ${n()}`, "svelte-1ainwu6")), X(a, s);
    };
    Bn(u, (a) => {
      r() && a(f);
    });
  }
  X(t, l), ue();
}
export {
  er as Button,
  nr as Form,
  rr as Input,
  lr as Notification
};
