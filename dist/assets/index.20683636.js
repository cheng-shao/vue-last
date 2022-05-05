import {
  d as m,
  r as _,
  c as p,
  a as h,
  F as g,
  b as y,
  o as v,
  e as b,
  f as E,
  g as O,
  h as L
} from './vendor.8c74d6a2.js'
const P = function () {
  const n = document.createElement('link').relList
  if (n && n.supports && n.supports('modulepreload')) return
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e)
  new MutationObserver((e) => {
    for (const r of e)
      if (r.type === 'childList')
        for (const o of r.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && t(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function s(e) {
    const r = {}
    return (
      e.integrity && (r.integrity = e.integrity),
      e.referrerpolicy && (r.referrerPolicy = e.referrerpolicy),
      e.crossorigin === 'use-credentials'
        ? (r.credentials = 'include')
        : e.crossorigin === 'anonymous'
        ? (r.credentials = 'omit')
        : (r.credentials = 'same-origin'),
      r
    )
  }
  function t(e) {
    if (e.ep) return
    e.ep = !0
    const r = s(e)
    fetch(e.href, r)
  }
}
P()
var S = '/assets/logo.03d6d6da.png'
const k = y('img', { alt: 'Vue logo', src: S }, null, -1),
  w = m({
    setup(c) {
      return (n, s) => {
        const t = _('router-view')
        return v(), p(g, null, [k, h(t)], 64)
      }
    }
  }),
  A = b(),
  C = 'modulepreload',
  l = {},
  N = '/',
  a = function (n, s) {
    return !s || s.length === 0
      ? n()
      : Promise.all(
          s.map((t) => {
            if (((t = `${N}${t}`), t in l)) return
            l[t] = !0
            const e = t.endsWith('.css'),
              r = e ? '[rel="stylesheet"]' : ''
            if (document.querySelector(`link[href="${t}"]${r}`)) return
            const o = document.createElement('link')
            if (
              ((o.rel = e ? 'stylesheet' : C),
              e || ((o.as = 'script'), (o.crossOrigin = '')),
              (o.href = t),
              document.head.appendChild(o),
              e)
            )
              return new Promise((d, f) => {
                o.addEventListener('load', d),
                  o.addEventListener('error', () => f(new Error(`Unable to preload CSS for ${t}`)))
              })
          })
        ).then(() => n())
  },
  V = [
    {
      path: '/',
      component: () =>
        a(
          () => import('./HelloWorld.8e590274.js'),
          [
            'assets/HelloWorld.8e590274.js',
            'assets/HelloWorld.852e3299.css',
            'assets/el-button.e20cca31.js',
            'assets/el-button.30094d43.css',
            'assets/vendor.8c74d6a2.js'
          ]
        )
    },
    {
      path: '/user',
      name: 'user',
      component: () =>
        a(
          () => import('./user.6fda5604.js'),
          [
            'assets/user.6fda5604.js',
            'assets/el-button.e20cca31.js',
            'assets/el-button.30094d43.css',
            'assets/vendor.8c74d6a2.js'
          ]
        )
    }
  ]
var $ = Object.freeze(
  Object.defineProperty({ __proto__: null, default: V }, Symbol.toStringTag, { value: 'Module' })
)
const i = { './modules/user.ts': $ }
console.log(i)
const u = []
Object.keys(i).forEach((c) => {
  const n = i[c].default || {}
  u.push(...n)
})
const R = E({ history: O(), routes: u })
L(w).use(A).use(R).mount('#app')
