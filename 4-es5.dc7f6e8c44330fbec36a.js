(window.webpackJsonp = window.webpackJsonp || []).push([
    [4],
    {
        aoIK: function(t, e, n) {
            'use strict';
            n.r(e),
                n.d(e, 'startInputShims', function() {
                    return d;
                });
            var o = n('aiEM'),
                r = new WeakMap(),
                i = function(t, e, n) {
                    var o =
                        arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : 0;
                    r.has(t) !== n && (n ? u(t, e, o) : c(t, e));
                },
                a = function(t) {
                    return t === t.getRootNode().activeElement;
                },
                u = function(t, e, n) {
                    var o = e.parentNode,
                        i = e.cloneNode(!1);
                    i.classList.add('cloned-input'),
                        (i.tabIndex = -1),
                        o.appendChild(i),
                        r.set(t, i);
                    var a = 'rtl' === t.ownerDocument.dir ? 9999 : -9999;
                    (t.style.pointerEvents = 'none'),
                        (e.style.transform = 'translate3d('
                            .concat(a, 'px,')
                            .concat(n, 'px,0) scale(0)'));
                },
                c = function(t, e) {
                    var n = r.get(t);
                    n && (r.delete(t), n.remove()),
                        (t.style.pointerEvents = ''),
                        (e.style.transform = '');
                },
                s = 'input, textarea, [no-blur]',
                l = function(t, e) {
                    if (
                        'INPUT' === t.tagName &&
                        !(
                            (t.parentElement &&
                                'ION-INPUT' === t.parentElement.tagName) ||
                            (t.parentElement &&
                                t.parentElement.parentElement &&
                                'ION-SEARCHBAR' ===
                                    t.parentElement.parentElement.tagName)
                        )
                    ) {
                        var n = t.closest('ion-content');
                        if (null !== n) {
                            var o = n.$ionPaddingTimer;
                            o && clearTimeout(o),
                                e > 0
                                    ? n.style.setProperty(
                                          '--keyboard-offset',
                                          ''.concat(e, 'px')
                                      )
                                    : (n.$ionPaddingTimer = setTimeout(
                                          function() {
                                              n.style.setProperty(
                                                  '--keyboard-offset',
                                                  '0px'
                                              );
                                          },
                                          120
                                      ));
                        }
                    }
                },
                d = function(t) {
                    var e = document,
                        n = t.getNumber('keyboardHeight', 290),
                        r = t.getBoolean('scrollAssist', !0),
                        u = t.getBoolean('hideCaretOnScroll', !0),
                        c = t.getBoolean('inputBlurring', !0),
                        d = t.getBoolean('scrollPadding', !0),
                        f = Array.from(
                            e.querySelectorAll('ion-input, ion-textarea')
                        ),
                        v = new WeakMap(),
                        m = new WeakMap(),
                        p = function(t) {
                            var e =
                                    (t.shadowRoot || t).querySelector(
                                        'input'
                                    ) ||
                                    (t.shadowRoot || t).querySelector(
                                        'textarea'
                                    ),
                                c = t.closest('ion-content');
                            if (e) {
                                if (c && u && !v.has(t)) {
                                    var s = (function(t, e, n) {
                                        if (!n || !e) return function() {};
                                        var o = function(n) {
                                                a(e) && i(t, e, n);
                                            },
                                            r = function() {
                                                return i(t, e, !1);
                                            },
                                            u = function() {
                                                return o(!0);
                                            },
                                            c = function() {
                                                return o(!1);
                                            };
                                        return (
                                            n.addEventListener(
                                                'ionScrollStart',
                                                u
                                            ),
                                            n.addEventListener(
                                                'ionScrollEnd',
                                                c
                                            ),
                                            e.addEventListener('blur', r),
                                            function() {
                                                n.removeEventListener(
                                                    'ionScrollStart',
                                                    u
                                                ),
                                                    n.removeEventListener(
                                                        'ionScrollEnd',
                                                        c
                                                    ),
                                                    e.addEventListener(
                                                        'ionBlur',
                                                        r
                                                    );
                                            }
                                        );
                                    })(t, e, c);
                                    v.set(t, s);
                                }
                                if (c && r && !m.has(t)) {
                                    var l = (function(t, e, n, r) {
                                        var u,
                                            c = function(t) {
                                                u = Object(o.j)(t);
                                            },
                                            s = function(c) {
                                                if (u) {
                                                    var s = Object(o.j)(c);
                                                    (function(t, e, n) {
                                                        if (e && n) {
                                                            var o = e.x - n.x,
                                                                r = e.y - n.y;
                                                            return (
                                                                o * o + r * r >
                                                                36
                                                            );
                                                        }
                                                        return !1;
                                                    })(0, u, s) ||
                                                        a(e) ||
                                                        (c.preventDefault(),
                                                        c.stopPropagation(),
                                                        (function(t, e, n, o) {
                                                            var r = (function(
                                                                t,
                                                                e,
                                                                n
                                                            ) {
                                                                return (function(
                                                                    t,
                                                                    e,
                                                                    n,
                                                                    o
                                                                ) {
                                                                    var r =
                                                                            t.top,
                                                                        i =
                                                                            t.bottom,
                                                                        a =
                                                                            e.top,
                                                                        u =
                                                                            a +
                                                                            15,
                                                                        c =
                                                                            0.5 *
                                                                                Math.min(
                                                                                    e.bottom,
                                                                                    o -
                                                                                        n
                                                                                ) -
                                                                            i,
                                                                        s =
                                                                            u -
                                                                            r,
                                                                        l = Math.round(
                                                                            c <
                                                                                0
                                                                                ? -c
                                                                                : s >
                                                                                  0
                                                                                ? -s
                                                                                : 0
                                                                        ),
                                                                        d = Math.min(
                                                                            l,
                                                                            r -
                                                                                a
                                                                        ),
                                                                        f = Math.abs(
                                                                            d
                                                                        );
                                                                    return {
                                                                        scrollAmount: d,
                                                                        scrollDuration: Math.min(
                                                                            400,
                                                                            Math.max(
                                                                                150,
                                                                                f /
                                                                                    0.3
                                                                            )
                                                                        ),
                                                                        scrollPadding: n,
                                                                        inputSafeY:
                                                                            4 -
                                                                            (r -
                                                                                u),
                                                                    };
                                                                })(
                                                                    (
                                                                        t.closest(
                                                                            'ion-item,[ion-item]'
                                                                        ) || t
                                                                    ).getBoundingClientRect(),
                                                                    e.getBoundingClientRect(),
                                                                    n,
                                                                    t
                                                                        .ownerDocument
                                                                        .defaultView
                                                                        .innerHeight
                                                                );
                                                            })(t, n, o);
                                                            Math.abs(
                                                                r.scrollAmount
                                                            ) < 4
                                                                ? e.focus()
                                                                : (i(
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
                                                                      .then(
                                                                          function() {
                                                                              i(
                                                                                  t,
                                                                                  e,
                                                                                  !1,
                                                                                  r.inputSafeY
                                                                              ),
                                                                                  e.focus();
                                                                          }
                                                                      ));
                                                        })(t, e, n, r));
                                                }
                                            };
                                        return (
                                            t.addEventListener(
                                                'touchstart',
                                                c,
                                                !0
                                            ),
                                            t.addEventListener(
                                                'touchend',
                                                s,
                                                !0
                                            ),
                                            function() {
                                                t.removeEventListener(
                                                    'touchstart',
                                                    c,
                                                    !0
                                                ),
                                                    t.removeEventListener(
                                                        'touchend',
                                                        s,
                                                        !0
                                                    );
                                            }
                                        );
                                    })(t, e, c, n);
                                    m.set(t, l);
                                }
                            }
                        };
                    c &&
                        (function() {
                            var t = !0,
                                e = !1,
                                n = document;
                            n.addEventListener('ionScrollStart', function() {
                                e = !0;
                            }),
                                n.addEventListener(
                                    'focusin',
                                    function() {
                                        t = !0;
                                    },
                                    !0
                                ),
                                n.addEventListener(
                                    'touchend',
                                    function(o) {
                                        if (e) e = !1;
                                        else {
                                            var r = n.activeElement;
                                            if (r && !r.matches(s)) {
                                                var i = o.target;
                                                i !== r &&
                                                    (i.matches(s) ||
                                                        i.closest(s) ||
                                                        ((t = !1),
                                                        setTimeout(function() {
                                                            t || r.blur();
                                                        }, 50)));
                                            }
                                        }
                                    },
                                    !1
                                );
                        })(),
                        d &&
                            (function(t) {
                                var e = document;
                                e.addEventListener('focusin', function(e) {
                                    l(e.target, t);
                                }),
                                    e.addEventListener('focusout', function(t) {
                                        l(t.target, 0);
                                    });
                            })(n);
                    for (var E = 0, g = f; E < g.length; E++) {
                        var h = g[E];
                        p(h);
                    }
                    e.addEventListener('ionInputDidLoad', function(t) {
                        p(t.detail);
                    }),
                        e.addEventListener('ionInputDidUnload', function(t) {
                            !(function(t) {
                                if (u) {
                                    var e = v.get(t);
                                    e && e(), v.delete(t);
                                }
                                if (r) {
                                    var n = m.get(t);
                                    n && n(), m.delete(t);
                                }
                            })(t.detail);
                        });
                };
        },
    },
]);
