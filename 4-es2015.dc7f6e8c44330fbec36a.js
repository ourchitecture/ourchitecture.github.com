(window.webpackJsonp = window.webpackJsonp || []).push([
    [4],
    {
        aoIK: function(t, e, n) {
            'use strict';
            n.r(e),
                n.d(e, 'startInputShims', function() {
                    return u;
                });
            var o = n('aiEM');
            const r = new WeakMap(),
                s = (t, e, n, o = 0) => {
                    r.has(t) !== n && (n ? i(t, e, o) : l(t, e));
                },
                a = (t) => t === t.getRootNode().activeElement,
                i = (t, e, n) => {
                    const o = e.parentNode,
                        s = e.cloneNode(!1);
                    s.classList.add('cloned-input'),
                        (s.tabIndex = -1),
                        o.appendChild(s),
                        r.set(t, s);
                    const a = 'rtl' === t.ownerDocument.dir ? 9999 : -9999;
                    (t.style.pointerEvents = 'none'),
                        (e.style.transform = `translate3d(${a}px,${n}px,0) scale(0)`);
                },
                l = (t, e) => {
                    const n = r.get(t);
                    n && (r.delete(t), n.remove()),
                        (t.style.pointerEvents = ''),
                        (e.style.transform = '');
                },
                c = 'input, textarea, [no-blur]',
                d = (t, e) => {
                    if ('INPUT' !== t.tagName) return;
                    if (
                        t.parentElement &&
                        'ION-INPUT' === t.parentElement.tagName
                    )
                        return;
                    if (
                        t.parentElement &&
                        t.parentElement.parentElement &&
                        'ION-SEARCHBAR' ===
                            t.parentElement.parentElement.tagName
                    )
                        return;
                    const n = t.closest('ion-content');
                    if (null === n) return;
                    const o = n.$ionPaddingTimer;
                    o && clearTimeout(o),
                        e > 0
                            ? n.style.setProperty('--keyboard-offset', `${e}px`)
                            : (n.$ionPaddingTimer = setTimeout(() => {
                                  n.style.setProperty(
                                      '--keyboard-offset',
                                      '0px'
                                  );
                              }, 120));
                },
                u = (t) => {
                    const e = document,
                        n = t.getNumber('keyboardHeight', 290),
                        r = t.getBoolean('scrollAssist', !0),
                        i = t.getBoolean('hideCaretOnScroll', !0),
                        l = t.getBoolean('inputBlurring', !0),
                        u = t.getBoolean('scrollPadding', !0),
                        m = Array.from(
                            e.querySelectorAll('ion-input, ion-textarea')
                        ),
                        p = new WeakMap(),
                        f = new WeakMap(),
                        E = (t) => {
                            const e =
                                    (t.shadowRoot || t).querySelector(
                                        'input'
                                    ) ||
                                    (t.shadowRoot || t).querySelector(
                                        'textarea'
                                    ),
                                l = t.closest('ion-content');
                            if (e) {
                                if (l && i && !p.has(t)) {
                                    const n = ((t, e, n) => {
                                        if (!n || !e) return () => {};
                                        const o = (n) => {
                                                a(e) && s(t, e, n);
                                            },
                                            r = () => s(t, e, !1),
                                            i = () => o(!0),
                                            l = () => o(!1);
                                        return (
                                            n.addEventListener(
                                                'ionScrollStart',
                                                i
                                            ),
                                            n.addEventListener(
                                                'ionScrollEnd',
                                                l
                                            ),
                                            e.addEventListener('blur', r),
                                            () => {
                                                n.removeEventListener(
                                                    'ionScrollStart',
                                                    i
                                                ),
                                                    n.removeEventListener(
                                                        'ionScrollEnd',
                                                        l
                                                    ),
                                                    e.addEventListener(
                                                        'ionBlur',
                                                        r
                                                    );
                                            }
                                        );
                                    })(t, e, l);
                                    p.set(t, n);
                                }
                                if (l && r && !f.has(t)) {
                                    const r = ((t, e, n, r) => {
                                        let i;
                                        const l = (t) => {
                                                i = Object(o.j)(t);
                                            },
                                            c = (l) => {
                                                if (!i) return;
                                                const c = Object(o.j)(l);
                                                ((t, e, n) => {
                                                    if (e && n) {
                                                        const t = e.x - n.x,
                                                            o = e.y - n.y;
                                                        return (
                                                            t * t + o * o > 36
                                                        );
                                                    }
                                                    return !1;
                                                })(0, i, c) ||
                                                    a(e) ||
                                                    (l.preventDefault(),
                                                    l.stopPropagation(),
                                                    ((t, e, n, o) => {
                                                        const r = ((t, e, n) =>
                                                            ((t, e, n, o) => {
                                                                const r = t.top,
                                                                    s =
                                                                        t.bottom,
                                                                    a = e.top,
                                                                    i = a + 15,
                                                                    l =
                                                                        0.5 *
                                                                            Math.min(
                                                                                e.bottom,
                                                                                o -
                                                                                    n
                                                                            ) -
                                                                        s,
                                                                    c = i - r,
                                                                    d = Math.round(
                                                                        l < 0
                                                                            ? -l
                                                                            : c >
                                                                              0
                                                                            ? -c
                                                                            : 0
                                                                    ),
                                                                    u = Math.min(
                                                                        d,
                                                                        r - a
                                                                    ),
                                                                    m = Math.abs(
                                                                        u
                                                                    );
                                                                return {
                                                                    scrollAmount: u,
                                                                    scrollDuration: Math.min(
                                                                        400,
                                                                        Math.max(
                                                                            150,
                                                                            m /
                                                                                0.3
                                                                        )
                                                                    ),
                                                                    scrollPadding: n,
                                                                    inputSafeY:
                                                                        4 -
                                                                        (r - i),
                                                                };
                                                            })(
                                                                (
                                                                    t.closest(
                                                                        'ion-item,[ion-item]'
                                                                    ) || t
                                                                ).getBoundingClientRect(),
                                                                e.getBoundingClientRect(),
                                                                n,
                                                                t.ownerDocument
                                                                    .defaultView
                                                                    .innerHeight
                                                            ))(t, n, o);
                                                        Math.abs(
                                                            r.scrollAmount
                                                        ) < 4
                                                            ? e.focus()
                                                            : (s(
                                                                  t,
                                                                  e,
                                                                  !0,
                                                                  r.inputSafeY
                                                              ),
                                                              e.focus(),
                                                              n
                                                                  .scrollByPoint(
                                                                      0,
                                                                      r.scrollAmount,
                                                                      r.scrollDuration
                                                                  )
                                                                  .then(() => {
                                                                      s(
                                                                          t,
                                                                          e,
                                                                          !1,
                                                                          r.inputSafeY
                                                                      ),
                                                                          e.focus();
                                                                  }));
                                                    })(t, e, n, r));
                                            };
                                        return (
                                            t.addEventListener(
                                                'touchstart',
                                                l,
                                                !0
                                            ),
                                            t.addEventListener(
                                                'touchend',
                                                c,
                                                !0
                                            ),
                                            () => {
                                                t.removeEventListener(
                                                    'touchstart',
                                                    l,
                                                    !0
                                                ),
                                                    t.removeEventListener(
                                                        'touchend',
                                                        c,
                                                        !0
                                                    );
                                            }
                                        );
                                    })(t, e, l, n);
                                    f.set(t, r);
                                }
                            }
                        };
                    l &&
                        (() => {
                            let t = !0,
                                e = !1;
                            const n = document;
                            n.addEventListener('ionScrollStart', () => {
                                e = !0;
                            }),
                                n.addEventListener(
                                    'focusin',
                                    () => {
                                        t = !0;
                                    },
                                    !0
                                ),
                                n.addEventListener(
                                    'touchend',
                                    (o) => {
                                        if (e) return void (e = !1);
                                        const r = n.activeElement;
                                        if (!r) return;
                                        if (r.matches(c)) return;
                                        const s = o.target;
                                        s !== r &&
                                            (s.matches(c) ||
                                                s.closest(c) ||
                                                ((t = !1),
                                                setTimeout(() => {
                                                    t || r.blur();
                                                }, 50)));
                                    },
                                    !1
                                );
                        })(),
                        u &&
                            ((t) => {
                                const e = document;
                                e.addEventListener('focusin', (e) => {
                                    d(e.target, t);
                                }),
                                    e.addEventListener('focusout', (t) => {
                                        d(t.target, 0);
                                    });
                            })(n);
                    for (const o of m) E(o);
                    e.addEventListener('ionInputDidLoad', (t) => {
                        E(t.detail);
                    }),
                        e.addEventListener('ionInputDidUnload', (t) => {
                            ((t) => {
                                if (i) {
                                    const e = p.get(t);
                                    e && e(), p.delete(t);
                                }
                                if (r) {
                                    const e = f.get(t);
                                    e && e(), f.delete(t);
                                }
                            })(t.detail);
                        });
                };
        },
    },
]);
