import { E as f } from './el-button.e20cca31.js'
import {
  i as g,
  d as k,
  v as b,
  j as y,
  r as _,
  o as E,
  c as C,
  b as e,
  t as c,
  u as p,
  a as l,
  w as i,
  F as S,
  p as V,
  k as x,
  l as n
} from './vendor.8c74d6a2.js'
const w = g('card', {
  state: () => ({ counter: 4, type: 'a' }),
  getters: { add: (t) => t.counter++ }
})
var D = (t, s) => {
  const o = t.__vccOpts || t
  for (const [a, u] of s) o[a] = u
  return o
}
const r = (t) => (V('data-v-7755c716'), (t = t()), x(), t),
  I = n(' \u52A01 '),
  j = r(() =>
    e(
      'p',
      null,
      [
        n(' Recommended IDE setup: '),
        e('a', { href: 'https://code.visualstudio.com/', target: '_blank' }, 'VSCode'),
        n(' + '),
        e('a', { href: 'https://github.com/johnsoncodehk/volar', target: '_blank' }, 'Volar')
      ],
      -1
    )
  ),
  A = r(() =>
    e('p', null, [n('See '), e('code', null, 'README.md'), n(' for more information.')], -1)
  ),
  B = r(() =>
    e(
      'p',
      null,
      [
        e('a', { href: 'https://vitejs.dev/guide/features.html', target: '_blank' }, ' Vite Docs '),
        n(' | '),
        e('a', { href: 'https://v3.vuejs.org/', target: '_blank' }, 'Vue 3 Docs')
      ],
      -1
    )
  ),
  H = r(() =>
    e(
      'p',
      null,
      [
        n(' Edit '),
        e('code', null, 'components/HelloWorld.vue'),
        n(' to test hot module replacement. ')
      ],
      -1
    )
  ),
  N = n('\u663E\u793Auser'),
  W = k({
    setup(t) {
      console.log(b, 'version')
      const s = y(0),
        o = w()
      setTimeout(() => {
        o.$reset(), o.$patch({ counter: 9, type: 'b' })
      }, 5e3),
        o.counter++
      const a = () => {
        o.add
      }
      return (u, d) => {
        const h = f,
          v = _('router-link'),
          m = _('router-view')
        return (
          E(),
          C(
            S,
            null,
            [
              e('h2', null, 'card' + c(p(o).counter), 1),
              e('h2', null, 'type' + c(p(o).type), 1),
              l(h, { onClick: a }, { default: i(() => [I]), _: 1 }),
              j,
              A,
              B,
              e(
                'button',
                { type: 'button', onClick: d[0] || (d[0] = ($) => s.value++) },
                'count is: ' + c(s.value),
                1
              ),
              H,
              l(v, { to: 'user' }, { default: i(() => [N]), _: 1 }),
              l(m)
            ],
            64
          )
        )
      }
    }
  })
var T = D(W, [['__scopeId', 'data-v-7755c716']])
export { T as default }
