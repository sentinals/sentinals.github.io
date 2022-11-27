(() => {
    var e, n, t, r, o, i, _, c, u, d, a, f, s, b, p, g, l, v, w, x, m, h, y, j, S, k, A, E, P, T, O, W, M, C, q, B, I, N, Q, Z, F, J, U, Y, z, D, H, L, X, $, K, V, G, R, ee, ne = {
            1657: (e, n, t) => {
                Promise.all([t.e(905), t.e(336)]).then(t.bind(t, 336)).then((e => e.run()))
            }
        },
        te = {};

    function re(e) {
        var n = te[e];
        if (void 0 !== n) return n.exports;
        var t = te[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return ne[e].call(t.exports, t, t.exports, re), t.loaded = !0, t.exports
    }
    re.m = ne, re.c = te, re.n = e => {
        var n = e && e.__esModule ? () => e.default : () => e;
        return re.d(n, {
            a: n
        }), n
    }, re.d = (e, n) => {
        for (var t in n) re.o(n, t) && !re.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: n[t]
        })
    }, re.f = {}, re.e = e => Promise.all(Object.keys(re.f).reduce(((n, t) => (re.f[t](e, n), n)), [])), re.u = e => e + "-" + {
        336: "2743493ac2ac01b2e231",
        880: "752efbbcaf5fe38ab027",
        905: "18583e604a1495ea3c44",
        991: "a4248bf0ace9d30acb9d"
    } [e] + ".js", re.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), re.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }), e), re.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n), e = {}, re.l = (n, t, r, o) => {
        if (e[n]) e[n].push(t);
        else {
            var i, _;
            if (void 0 !== r)
                for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) {
                    var d = c[u];
                    if (d.getAttribute("src") == n) {
                        i = d;
                        break
                    }
                }
            i || (_ = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, re.nc && i.setAttribute("nonce", re.nc), i.src = n), e[n] = [t];
            var a = (t, r) => {
                    i.onerror = i.onload = null, clearTimeout(f);
                    var o = e[n];
                    if (delete e[n], i.parentNode && i.parentNode.removeChild(i), o && o.forEach((e => e(r))), t) return t(r)
                },
                f = setTimeout(a.bind(null, void 0, {
                    type: "timeout",
                    target: i
                }), 12e4);
            i.onerror = a.bind(null, i.onerror), i.onload = a.bind(null, i.onload), _ && document.head.appendChild(i)
        }
    }, re.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, re.nmd = e => (e.paths = [], e.children || (e.children = []), e), re.p = "assets/", (() => {
        var e = {
            179: 0
        };
        re.f.j = (n, t) => {
            var r = re.o(e, n) ? e[n] : void 0;
            if (0 !== r)
                if (r) t.push(r[2]);
                else {
                    var o = new Promise(((t, o) => r = e[n] = [t, o]));
                    t.push(r[2] = o);
                    var i = re.p + re.u(n),
                        _ = new Error;
                    re.l(i, (t => {
                        if (re.o(e, n) && (0 !== (r = e[n]) && (e[n] = void 0), r)) {
                            var o = t && ("load" === t.type ? "missing" : t.type),
                                i = t && t.target && t.target.src;
                            _.message = "Loading chunk " + n + " failed.\n(" + o + ": " + i + ")", _.name = "ChunkLoadError", _.type = o, _.request = i, r[1](_)
                        }
                    }), "chunk-" + n, n)
                }
        };
        var n = (n, t) => {
                var r, o, [i, _, c] = t,
                    u = 0;
                if (i.some((n => 0 !== e[n]))) {
                    for (r in _) re.o(_, r) && (re.m[r] = _[r]);
                    c && c(re)
                }
                for (n && n(t); u < i.length; u++) o = i[u], re.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            t = self.webpackChunk = self.webpackChunk || [];
        t.forEach(n.bind(null, 0)), t.push = n.bind(null, t.push.bind(t))
    })(), re.nc = void 0, G = {}, R = {
        6486: function() {
            return {
                "./polar_wasm_api_bg.js": {
                    __wbindgen_string_get: function(e, t) {
                        return void 0 === n && (n = re.c[3333].exports), n.qt(e, t)
                    },
                    __wbindgen_object_drop_ref: function(e) {
                        return void 0 === t && (t = re.c[3333].exports), t.ug(e)
                    },
                    __wbindgen_boolean_get: function(e) {
                        return void 0 === r && (r = re.c[3333].exports), r.HT(e)
                    },
                    __wbindgen_number_get: function(e, n) {
                        return void 0 === o && (o = re.c[3333].exports), o.M1(e, n)
                    },
                    __wbindgen_is_object: function(e) {
                        return void 0 === i && (i = re.c[3333].exports), i.Wl(e)
                    },
                    __wbindgen_is_string: function(e) {
                        return void 0 === _ && (_ = re.c[3333].exports), _.eY(e)
                    },
                    __wbindgen_number_new: function(e) {
                        return void 0 === c && (c = re.c[3333].exports), c.pT(e)
                    },
                    __wbindgen_object_clone_ref: function(e) {
                        return void 0 === u && (u = re.c[3333].exports), u.m_(e)
                    },
                    __wbindgen_string_new: function(e, n) {
                        return void 0 === d && (d = re.c[3333].exports), d.h4(e, n)
                    },
                    __wbindgen_is_null: function(e) {
                        return void 0 === a && (a = re.c[3333].exports), a.zr(e)
                    },
                    __wbindgen_is_undefined: function(e) {
                        return void 0 === f && (f = re.c[3333].exports), f.XP(e)
                    },
                    __wbg_String_c8baaa0740def8c6: function(e, n) {
                        return void 0 === s && (s = re.c[3333].exports), s.z_(e, n)
                    },
                    __wbg_get_2d1407dba3452350: function(e, n) {
                        return void 0 === b && (b = re.c[3333].exports), b.cD(e, n)
                    },
                    __wbg_set_f1a4ac8f3a605b11: function(e, n, t) {
                        return void 0 === p && (p = re.c[3333].exports), p.aV(e, n, t)
                    },
                    __wbg_new_693216e109162396: function() {
                        return void 0 === g && (g = re.c[3333].exports), g.Ih()
                    },
                    __wbg_stack_0ddaca5d1abfb52f: function(e, n) {
                        return void 0 === l && (l = re.c[3333].exports), l.yq(e, n)
                    },
                    __wbg_error_09919627ac0992f5: function(e, n) {
                        return void 0 === v && (v = re.c[3333].exports), v.gk(e, n)
                    },
                    __wbg_error_8414d3bb0322604e: function(e, n) {
                        return void 0 === w && (w = re.c[3333].exports), w.Qw(e, n)
                    },
                    __wbg_get_67189fe0b323d288: function(e, n) {
                        return void 0 === x && (x = re.c[3333].exports), x.QQ(e, n)
                    },
                    __wbg_length_42e02f5a04d67464: function(e) {
                        return void 0 === m && (m = re.c[3333].exports), m.Jk(e)
                    },
                    __wbg_new_949bbc1147195c4e: function() {
                        return void 0 === h && (h = re.c[3333].exports), h.FU()
                    },
                    __wbindgen_is_function: function(e) {
                        return void 0 === y && (y = re.c[3333].exports), y.o$(e)
                    },
                    __wbg_new_ac32179a660db4bb: function() {
                        return void 0 === j && (j = re.c[3333].exports), j.Fe()
                    },
                    __wbg_next_c4151d46d5fa7097: function(e) {
                        return void 0 === S && (S = re.c[3333].exports), S.AI(e)
                    },
                    __wbg_next_7720502039b96d00: function(e) {
                        return void 0 === k && (k = re.c[3333].exports), k.b6(e)
                    },
                    __wbg_done_b06cf0578e89ff68: function(e) {
                        return void 0 === A && (A = re.c[3333].exports), A.Sl(e)
                    },
                    __wbg_value_e74a542443d92451: function(e) {
                        return void 0 === E && (E = re.c[3333].exports), E.qi(e)
                    },
                    __wbg_iterator_4fc4ce93e6b92958: function() {
                        return void 0 === P && (P = re.c[3333].exports), P.W4()
                    },
                    __wbg_get_4d0f21c2f823742e: function(e, n) {
                        return void 0 === T && (T = re.c[3333].exports), T.XJ(e, n)
                    },
                    __wbg_call_888d259a5fefc347: function(e, n) {
                        return void 0 === O && (O = re.c[3333].exports), O.BT(e, n)
                    },
                    __wbg_new_0b83d3df67ecb33e: function() {
                        return void 0 === W && (W = re.c[3333].exports), W.aw()
                    },
                    __wbg_isArray_eb7ad55f2da67dde: function(e) {
                        return void 0 === M && (M = re.c[3333].exports), M.mJ(e)
                    },
                    __wbg_push_284486ca27c6aa8b: function(e, n) {
                        return void 0 === C && (C = re.c[3333].exports), C.gZ(e, n)
                    },
                    __wbg_instanceof_ArrayBuffer_764b6d4119231cb3: function(e) {
                        return void 0 === q && (q = re.c[3333].exports), q.ZZ(e)
                    },
                    __wbg_values_364ae56c608e6824: function(e) {
                        return void 0 === B && (B = re.c[3333].exports), B.c2(e)
                    },
                    __wbg_new_342a24ca698edd87: function(e, n) {
                        return void 0 === I && (I = re.c[3333].exports), I.y(e, n)
                    },
                    __wbg_setname_15d4109043e260cc: function(e, n, t) {
                        return void 0 === N && (N = re.c[3333].exports), N.v9(e, n, t)
                    },
                    __wbg_set_a46091b120cc63e9: function(e, n, t) {
                        return void 0 === Q && (Q = re.c[3333].exports), Q.xN(e, n, t)
                    },
                    __wbg_isSafeInteger_0dfc6d38b7184f06: function(e) {
                        return void 0 === Z && (Z = re.c[3333].exports), Z.eK(e)
                    },
                    __wbg_now_af172eabe2e041ad: function() {
                        return void 0 === F && (F = re.c[3333].exports), F.$_()
                    },
                    __wbg_entries_aadf9c3f38203a12: function(e) {
                        return void 0 === J && (J = re.c[3333].exports), J.MZ(e)
                    },
                    __wbg_buffer_397eaa4d72ee94dd: function(e) {
                        return void 0 === U && (U = re.c[3333].exports), U.jp(e)
                    },
                    __wbg_new_a7ce447f15ff496f: function(e) {
                        return void 0 === Y && (Y = re.c[3333].exports), Y.y4(e)
                    },
                    __wbg_set_969ad0a60e51d320: function(e, n, t) {
                        return void 0 === z && (z = re.c[3333].exports), z.YQ(e, n, t)
                    },
                    __wbg_length_1eb8fc608a0d4cdb: function(e) {
                        return void 0 === D && (D = re.c[3333].exports), D.A7(e)
                    },
                    __wbg_instanceof_Uint8Array_08a1f3a179095e76: function(e) {
                        return void 0 === H && (H = re.c[3333].exports), H.yI(e)
                    },
                    __wbg_has_1275b5eec3dc7a7a: function(e, n) {
                        return void 0 === L && (L = re.c[3333].exports), L.Cd(e, n)
                    },
                    __wbindgen_debug_string: function(e, n) {
                        return void 0 === X && (X = re.c[3333].exports), X.fY(e, n)
                    },
                    __wbindgen_throw: function(e, n) {
                        return void 0 === $ && ($ = re.c[3333].exports), $.Or(e, n)
                    },
                    __wbindgen_rethrow: function(e) {
                        return void 0 === K && (K = re.c[3333].exports), K.nD(e)
                    },
                    __wbindgen_memory: function() {
                        return void 0 === V && (V = re.c[3333].exports), V.oH()
                    }
                }
            }
        }
    }, ee = {
        991: [6486]
    }, re.w = {}, re.f.wasm = function(e, n) {
        (ee[e] || []).forEach((function(t, r) {
            var o = G[t];
            if (o) n.push(o);
            else {
                var i, _ = R[t](),
                    c = fetch(re.p + "" + {
                        991: {
                            6486: "6655ebddb553f9c788a5"
                        }
                    } [e][t] + ".module.wasm");
                i = _ && "function" == typeof _.then && "function" == typeof WebAssembly.compileStreaming ? Promise.all([WebAssembly.compileStreaming(c), _]).then((function(e) {
                    return WebAssembly.instantiate(e[0], e[1])
                })) : "function" == typeof WebAssembly.instantiateStreaming ? WebAssembly.instantiateStreaming(c, _) : c.then((function(e) {
                    return e.arrayBuffer()
                })).then((function(e) {
                    return WebAssembly.instantiate(e, _)
                })), n.push(G[t] = i.then((function(e) {
                    return re.w[t] = (e.instance || e).exports
                })))
            }
        }))
    }, re(1657)
})();