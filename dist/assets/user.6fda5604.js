import { i as d, a as C, n as v, t as F, E as N } from './el-button.e20cca31.js'
import {
  j as w,
  P as S,
  u as h,
  d as z,
  M as D,
  o as g,
  c as E,
  a as M,
  w as B,
  F as T,
  Q as O,
  b as P,
  l as H,
  t as L,
  G as j
} from './vendor.8c74d6a2.js'
function G(u) {
  var e
  const o = h(u)
  return (e = o == null ? void 0 : o.$el) != null ? e : o
}
const X = d ? window : void 0
d && window.document
d && window.navigator
d && window.location
function c(...u) {
  let e, o, r, s
  if ((C(u[0]) ? (([o, r, s] = u), (e = X)) : ([e, o, r, s] = u), !e)) return v
  let n = v
  const i = S(
      () => G(e),
      (a) => {
        n(),
          a &&
            (a.addEventListener(o, r, s),
            (n = () => {
              a.removeEventListener(o, r, s), (n = v)
            }))
      },
      { immediate: !0, flush: 'post' }
    ),
    l = () => {
      i(), n()
    }
  return F(l), l
}
const m =
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
      ? global
      : typeof self != 'undefined'
      ? self
      : {},
  _ = '__vueuse_ssr_handlers__'
m[_] = m[_] || {}
m[_]
function K(u = {}) {
  const {
      type: e = 'page',
      touch: o = !0,
      resetOnTouchEnds: r = !1,
      initialValue: s = { x: 0, y: 0 },
      window: n = X,
      eventFilter: i
    } = u,
    l = w(s.x),
    a = w(s.y),
    f = w(null),
    y = (t) => {
      e === 'page'
        ? ((l.value = t.pageX), (a.value = t.pageY))
        : e === 'client' && ((l.value = t.clientX), (a.value = t.clientY)),
        (f.value = 'mouse')
    },
    Y = () => {
      ;(l.value = s.x), (a.value = s.y)
    },
    b = (t) => {
      if (t.touches.length > 0) {
        const p = t.touches[0]
        e === 'page'
          ? ((l.value = p.pageX), (a.value = p.pageY))
          : e === 'client' && ((l.value = p.clientX), (a.value = p.clientY)),
          (f.value = 'touch')
      }
    },
    k = (t) => (i === void 0 ? y(t) : i(() => y(t), {})),
    x = (t) => (i === void 0 ? b(t) : i(() => b(t), {}))
  return (
    n &&
      (c(n, 'mousemove', k, { passive: !0 }),
      c(n, 'dragover', k, { passive: !0 }),
      o &&
        (c(n, 'touchstart', x, { passive: !0 }),
        c(n, 'touchmove', x, { passive: !0 }),
        r && c(n, 'touchend', Y, { passive: !0 }))),
    { x: l, y: a, sourceType: f }
  )
}
var V, W
d &&
  (window == null ? void 0 : window.navigator) &&
  ((V = window == null ? void 0 : window.navigator) == null ? void 0 : V.platform) &&
  /iP(ad|hone|od)/.test(
    (W = window == null ? void 0 : window.navigator) == null ? void 0 : W.platform
  )
const Q = P('h2', null, 'User followd', -1),
  q = z({
    setup(u) {
      console.log('kkkk'), K()
      const e = D({ url: 'ko', size: ['small', 'large'] })
      e.url = 'oooo'
      const { url: o, size: r } = e
      return (s, n) => {
        const i = N
        return (
          g(),
          E(
            T,
            null,
            [
              Q,
              M(i, null, { default: B(() => [H(L(h(o)), 1)]), _: 1 }),
              (g(!0),
              E(
                T,
                null,
                O(
                  h(r),
                  (l, a) => (g(), j(i, { key: a }, { default: B(() => [H(L(l), 1)]), _: 2 }, 1024))
                ),
                128
              ))
            ],
            64
          )
        )
      }
    }
  })
export { q as default }
