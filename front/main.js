function toggleMainMenu() {
	document.getElementById("js-menu-btn").onclick = function () {
		var e = this.parentNode,
			t = " " + e.className + " ";
		e.className = ~t.indexOf(" is-open ") ? t.replace(" is-open ", " ") : e.className + " is-open"
	}
}



// function showSeoArticle() {
// 	var e = $(".simple-text-seo-holder"),
// 		t = $(".js-seo-title-btn");
// 	e.hasClass("is-minimized-data") ? (e.removeClass("is-minimized-data"), t.text("Hide all")) : (e.addClass("is-minimized-data"), t.text("Show all"))
// }
window.language = window.location.host.match("ru.") ? "ru" : "en",
	function (e, t) {
		"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
			if (!e.document) throw new Error("jQuery requires a window with a document");
			return t(e)
		} : t(e)
	}("undefined" != typeof window ? window : this, function (e, t) {
		function n(e) {
			var t = !!e && "length" in e && e.length,
				n = fe.type(e);
			return "function" !== n && !fe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
		}

		// function i(e, t, n) {
		// 	if (fe.isFunction(t)) return fe.grep(e, function (e, i) {
		// 		return !!t.call(e, i, e) !== n
		// 	});
		// 	if (t.nodeType) return fe.grep(e, function (e) {
		// 		return e === t !== n
		// 	});
		// 	if ("string" == typeof t) {
		// 		if (Te.test(t)) return fe.filter(t, e, n);
		// 		t = fe.filter(t, e)
		// 	}
		// 	return fe.grep(e, function (e) {
		// 		return fe.inArray(e, t) > -1 !== n
		// 	})
		// }

		// function r(e, t) {
		// 	do {
		// 		e = e[t]
		// 	} while (e && 1 !== e.nodeType);
		// 	return e
		// }

		function o(e) {
			var t = {};
			return fe.each(e.match(Ae) || [], function (e, n) {
				t[n] = !0
			}), t
		}

		// function s() {
		// 	ie.addEventListener ? (ie.removeEventListener("DOMContentLoaded", a), e.removeEventListener("load", a)) : (ie.detachEvent("onreadystatechange", a), e.detachEvent("onload", a))
		// }

		function a() {
			(ie.addEventListener || "load" === e.event.type || "complete" === ie.readyState) && (s(), fe.ready())
		}

		// function l(e, t, n) {
		// 	if (n === undefined && 1 === e.nodeType) {
		// 		var i = "data-" + t.replace(De, "-$1").toLowerCase();
		// 		if ("string" == typeof (n = e.getAttribute(i))) {
		// 			try {
		// 				n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : He.test(n) ? fe.parseJSON(n) : n)
		// 			} catch (e) {}
		// 			fe.data(e, t, n)
		// 		} else n = undefined
		// 	}
		// 	return n
		// }

		// function d(e) {
		// 	var t;
		// 	for (t in e)
		// 		if (("data" !== t || !fe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
		// 	return !0
		// }

		// function u(e, t, n, i) {
		// 	if (je(e)) {
		// 		var r, o, s = fe.expando,
		// 			a = e.nodeType,
		// 			l = a ? fe.cache : e,
		// 			d = a ? e[s] : e[s] && s;
		// 		if (d && l[d] && (i || l[d].data) || n !== undefined || "string" != typeof t) return d || (d = a ? e[s] = ne.pop() || fe.guid++ : s), l[d] || (l[d] = a ? {} : {
		// 			toJSON: fe.noop
		// 		}), "object" != typeof t && "function" != typeof t || (i ? l[d] = fe.extend(l[d], t) : l[d].data = fe.extend(l[d].data, t)), o = l[d], i || (o.data || (o.data = {}), o = o.data), n !== undefined && (o[fe.camelCase(t)] = n), "string" == typeof t ? null == (r = o[t]) && (r = o[fe.camelCase(t)]) : r = o, r
		// 	}
		// }

		// function c(e, t, n) {
		// 	if (je(e)) {
		// 		var i, r, o = e.nodeType,
		// 			s = o ? fe.cache : e,
		// 			a = o ? e[fe.expando] : fe.expando;
		// 		if (s[a]) {
		// 			if (t && (i = n ? s[a] : s[a].data)) {
		// 				fe.isArray(t) ? t = t.concat(fe.map(t, fe.camelCase)) : t in i ? t = [t] : (t = fe.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
		// 				for (; r--;) delete i[t[r]];
		// 				if (n ? !d(i) : !fe.isEmptyObject(i)) return
		// 			}(n || (delete s[a].data, d(s[a]))) && (o ? fe.cleanData([e], !0) : ce.deleteExpando || s != s.window ? delete s[a] : s[a] = undefined)
		// 		}
		// 	}
		// }

		// function p(e, t, n, i) {
		// 	var r, o = 1,
		// 		s = 20,
		// 		a = i ? function () {
		// 			return i.cur()
		// 		} : function () {
		// 			return fe.css(e, t, "")
		// 		},
		// 		l = a(),
		// 		d = n && n[3] || (fe.cssNumber[t] ? "" : "px"),
		// 		u = (fe.cssNumber[t] || "px" !== d && +l) && Oe.exec(fe.css(e, t));
		// 	if (u && u[3] !== d) {
		// 		d = d || u[3], n = n || [], u = +l || 1;
		// 		do {
		// 			o = o || ".5", u /= o, fe.style(e, t, u + d)
		// 		} while (o !== (o = a() / l) && 1 !== o && --s)
		// 	}
		// 	return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = d, i.start = u, i.end = r)), r
		// }

		function f(e) {
			var t = We.split("|"),
				n = e.createDocumentFragment();
			if (n.createElement)
				for (; t.length;) n.createElement(t.pop());
			return n
		}

		// function h(e, t) {
		// 	var n, i, r = 0,
		// 		o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : undefined;
		// 	if (!o)
		// 		for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || fe.nodeName(i, t) ? o.push(i) : fe.merge(o, h(i, t));
		// 	return t === undefined || t && fe.nodeName(e, t) ? fe.merge([e], o) : o
		// }

		// function m(e, t) {
		// 	for (var n, i = 0; null != (n = e[i]); i++) fe._data(n, "globalEval", !t || fe._data(t[i], "globalEval"))
		// }

		// function g(e) {
		// 	Fe.test(e.type) && (e.defaultChecked = e.checked)
		// }

		// function v(e, t, n, i, r) {
		// 	for (var o, s, a, l, d, u, c, p = e.length, v = f(t), y = [], b = 0; b < p; b++)
		// 		if ((s = e[b]) || 0 === s)
		// 			if ("object" === fe.type(s)) fe.merge(y, s.nodeType ? [s] : s);
		// 			else if (Xe.test(s)) {
		// 		for (l = l || v.appendChild(t.createElement("div")), d = (Re.exec(s) || ["", ""])[1].toLowerCase(), c = Be[d] || Be._default, l.innerHTML = c[1] + fe.htmlPrefilter(s) + c[2], o = c[0]; o--;) l = l.lastChild;
		// 		if (!ce.leadingWhitespace && _e.test(s) && y.push(t.createTextNode(_e.exec(s)[0])), !ce.tbody)
		// 			for (s = "table" !== d || Ue.test(s) ? "<table>" !== c[1] || Ue.test(s) ? 0 : l : l.firstChild, o = s && s.childNodes.length; o--;) fe.nodeName(u = s.childNodes[o], "tbody") && !u.childNodes.length && s.removeChild(u);
		// 		for (fe.merge(y, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
		// 		l = v.lastChild
		// 	} else y.push(t.createTextNode(s));
		// 	for (l && v.removeChild(l), ce.appendChecked || fe.grep(h(y, "input"), g), b = 0; s = y[b++];)
		// 		if (i && fe.inArray(s, i) > -1) r && r.push(s);
		// 		else if (a = fe.contains(s.ownerDocument, s), l = h(v.appendChild(s), "script"), a && m(l), n)
		// 		for (o = 0; s = l[o++];) Ie.test(s.type || "") && n.push(s);
		// 	return l = null, v
		// }

		// function y() {
		// 	return !0
		// }

		function b() {
			return !1
		}

		// function w() {
		// 	try {
		// 		return ie.activeElement
		// 	} catch (e) {}
		// }

		// function x(e, t, n, i, r, o) {
		// 	var s, a;
		// 	if ("object" == typeof t) {
		// 		"string" != typeof n && (i = i || n, n = undefined);
		// 		for (a in t) x(e, a, n, i, t[a], o);
		// 		return e
		// 	}
		// 	if (null == i && null == r ? (r = n, i = n = undefined) : null == r && ("string" == typeof n ? (r = i, i = undefined) : (r = i, i = n, n = undefined)), !1 === r) r = b;
		// 	else if (!r) return e;
		// 	return 1 === o && (s = r, r = function (e) {
		// 		return fe().off(e), s.apply(this, arguments)
		// 	}, r.guid = s.guid || (s.guid = fe.guid++)), e.each(function () {
		// 		fe.event.add(this, t, r, i, n)
		// 	})
		// }

		// function k(e, t) {
		// 	return fe.nodeName(e, "table") && fe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
		// }

		// function T(e) {
		// 	return e.type = (null !== fe.find.attr(e, "type")) + "/" + e.type, e
		// }

		// function C(e) {
		// 	var t = it.exec(e.type);
		// 	return t ? e.type = t[1] : e.removeAttribute("type"), e
		// }

		// function S(e, t) {
		// 	if (1 === t.nodeType && fe.hasData(e)) {
		// 		var n, i, r, o = fe._data(e),
		// 			s = fe._data(t, o),
		// 			a = o.events;
		// 		if (a) {
		// 			delete s.handle, s.events = {};
		// 			for (n in a)
		// 				for (i = 0, r = a[n].length; i < r; i++) fe.event.add(t, n, a[n][i])
		// 		}
		// 		s.data && (s.data = fe.extend({}, s.data))
		// 	}
		// }

		// function $(e, t) {
		// 	var n, i, r;
		// 	if (1 === t.nodeType) {
		// 		if (n = t.nodeName.toLowerCase(), !ce.noCloneEvent && t[fe.expando]) {
		// 			r = fe._data(t);
		// 			for (i in r.events) fe.removeEvent(t, i, r.handle);
		// 			t.removeAttribute(fe.expando)
		// 		}
		// 		"script" === n && t.text !== e.text ? (T(t).text = e.text, C(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ce.html5Clone && e.innerHTML && !fe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Fe.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
		// 	}
		// }

		function E(e, t, n, i) {
			t = oe.apply([], t);
			var r, o, s, a, l, d, u = 0,
				c = e.length,
				p = c - 1,
				f = t[0],
				m = fe.isFunction(f);
			if (m || c > 1 && "string" == typeof f && !ce.checkClone && nt.test(f)) return e.each(function (r) {
				var o = e.eq(r);
				m && (t[0] = f.call(this, r, o.html())), E(o, t, n, i)
			});
			if (c && (d = v(t, e[0].ownerDocument, !1, e, i), r = d.firstChild, 1 === d.childNodes.length && (d = r), r || i)) {
				for (a = fe.map(h(d, "script"), T), s = a.length; u < c; u++) o = d, u !== p && (o = fe.clone(o, !0, !0), s && fe.merge(a, h(o, "script"))), n.call(e[u], o, u);
				if (s)
					for (l = a[a.length - 1].ownerDocument, fe.map(a, C), u = 0; u < s; u++) o = a[u], Ie.test(o.type || "") && !fe._data(o, "globalEval") && fe.contains(l, o) && (o.src ? fe._evalUrl && fe._evalUrl(o.src) : fe.globalEval((o.text || o.textContent || o.innerHTML || "").replace(rt, "")));
				d = r = null
			}
			return e
		}

		// function A(e, t, n) {
		// 	for (var i, r = t ? fe.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || fe.cleanData(h(i)), i.parentNode && (n && fe.contains(i.ownerDocument, i) && m(h(i, "script")), i.parentNode.removeChild(i));
		// 	return e
		// }

		// function N(e, t) {
		// 	var n = fe(t.createElement(e)).appendTo(t.body),
		// 		i = fe.css(n[0], "display");
		// 	return n.detach(), i
		// }

		// function L(e) {
		// 	var t = ie,
		// 		n = lt[e];
		// 	return n || (n = N(e, t), "none" !== n && n || (at = (at || fe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (at[0].contentWindow || at[0].contentDocument).document, t.write(), t.close(), n = N(e, t), at.detach()), lt[e] = n), n
		// }

		function j(e, t) {
			return {
				get: function () {
					return e() ? void delete this.get : (this.get = t).apply(this, arguments)
				}
			}
		}

		// function H(e) {
		// 	if (e in Tt) return e;
		// 	for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = kt.length; n--;)
		// 		if ((e = kt[n] + t) in Tt) return e
		// }

		// function D(e, t) {
		// 	for (var n, i, r, o = [], s = 0, a = e.length; s < a; s++) i = e[s], i.style && (o[s] = fe._data(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Pe(i) && (o[s] = fe._data(i, "olddisplay", L(i.nodeName)))) : (r = Pe(i), (n && "none" !== n || !r) && fe._data(i, "olddisplay", r ? n : fe.css(i, "display"))));
		// 	for (s = 0; s < a; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
		// 	return e
		// }

		function q(e, t, n) {
			var i = bt.exec(t);
			return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
		}

		// function O(e, t, n, i, r) {
		// 	for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += fe.css(e, n + Me[o], !0, r)), i ? ("content" === n && (s -= fe.css(e, "padding" + Me[o], !0, r)), "margin" !== n && (s -= fe.css(e, "border" + Me[o] + "Width", !0, r))) : (s += fe.css(e, "padding" + Me[o], !0, r), "padding" !== n && (s += fe.css(e, "border" + Me[o] + "Width", !0, r)));
		// 	return s
		// }

		// function M(e, t, n) {
		// 	var i = !0,
		// 		r = "width" === t ? e.offsetWidth : e.offsetHeight,
		// 		o = ft(e),
		// 		s = ce.boxSizing && "border-box" === fe.css(e, "boxSizing", !1, o);
		// 	if (r <= 0 || null == r) {
		// 		if (r = ht(e, t, o), (r < 0 || null == r) && (r = e.style[t]), ut.test(r)) return r;
		// 		i = s && (ce.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
		// 	}
		// 	return r + O(e, t, n || (s ? "border" : "content"), i, o) + "px"
		// }

		function P(e, t, n, i, r) {
			return new P.prototype.init(e, t, n, i, r)
		}

		// function z() {
		// 	return e.setTimeout(function () {
		// 		Ct = undefined
		// 	}), Ct = fe.now()
		// }

		function F(e, t) {
			var n, i = {
					height: e
				},
				r = 0;
			for (t = t ? 1 : 0; r < 4; r += 2 - t) n = Me[r], i["margin" + n] = i["padding" + n] = e;
			return t && (i.opacity = i.width = e), i
		}

		// function R(e, t, n) {
		// 	for (var i, r = (W.tweeners[t] || []).concat(W.tweeners["*"]), o = 0, s = r.length; o < s; o++)
		// 		if (i = r[o].call(n, t, e)) return i
		// }

		function I(e, t, n) {
			var i, r, o, s, a, l, d, u = this,
				c = {},
				p = e.style,
				f = e.nodeType && Pe(e),
				h = fe._data(e, "fxshow");
			n.queue || (a = fe._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
				a.unqueued || l()
			}), a.unqueued++, u.always(function () {
				u.always(function () {
					a.unqueued--, fe.queue(e, "fx").length || a.empty.fire()
				})
			})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], d = fe.css(e, "display"), "inline" === ("none" === d ? fe._data(e, "olddisplay") || L(e.nodeName) : d) && "none" === fe.css(e, "float") && (ce.inlineBlockNeedsLayout && "inline" !== L(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ce.shrinkWrapBlocks() || u.always(function () {
				p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
			}));
			for (i in t)
				if (r = t[i], $t.exec(r)) {
					if (delete t[i], o = o || "toggle" === r, r === (f ? "hide" : "show")) {
						if ("show" !== r || !h || h[i] === undefined) continue;
						f = !0
					}
					c[i] = h && h[i] || fe.style(e, i)
				} else d = undefined;
			if (fe.isEmptyObject(c)) "inline" === ("none" === d ? L(e.nodeName) : d) && (p.display = d);
			else {
				h ? "hidden" in h && (f = h.hidden) : h = fe._data(e, "fxshow", {}), o && (h.hidden = !f), f ? fe(e).show() : u.done(function () {
					fe(e).hide()
				}), u.done(function () {
					var t;
					fe._removeData(e, "fxshow");
					for (t in c) fe.style(e, t, c[t])
				});
				for (i in c) s = R(f ? h[i] : 0, i, u), i in h || (h[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
			}
		}

		// function _(e, t) {
		// 	var n, i, r, o, s;
		// 	for (n in e)
		// 		if (i = fe.camelCase(n), r = t[i], o = e[n], fe.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = fe.cssHooks[i]) && "expand" in s) {
		// 			o = s.expand(o), delete e[i];
		// 			for (n in o) n in e || (e[n] = o[n], t[n] = r)
		// 		} else t[i] = r
		// }

		function W(e, t, n) {
			var i, r, o = 0,
				s = W.prefilters.length,
				a = fe.Deferred().always(function () {
					delete l.elem
				}),
				l = function () {
					if (r) return !1;
					for (var t = Ct || z(), n = Math.max(0, d.startTime + d.duration - t), i = n / d.duration || 0, o = 1 - i, s = 0, l = d.tweens.length; s < l; s++) d.tweens[s].run(o);
					return a.notifyWith(e, [d, o, n]), o < 1 && l ? n : (a.resolveWith(e, [d]), !1)
				},
				d = a.promise({
					elem: e,
					props: fe.extend({}, t),
					opts: fe.extend(!0, {
						specialEasing: {},
						easing: fe.easing._default
					}, n),
					originalProperties: t,
					originalOptions: n,
					startTime: Ct || z(),
					duration: n.duration,
					tweens: [],
					createTween: function (t, n) {
						var i = fe.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
						return d.tweens.push(i), i
					},
					stop: function (t) {
						var n = 0,
							i = t ? d.tweens.length : 0;
						if (r) return this;
						for (r = !0; n < i; n++) d.tweens[n].run(1);
						return t ? (a.notifyWith(e, [d, 1, 0]), a.resolveWith(e, [d, t])) : a.rejectWith(e, [d, t]), this
					}
				}),
				u = d.props;
			for (_(u, d.opts.specialEasing); o < s; o++)
				if (i = W.prefilters[o].call(d, e, u, d.opts)) return fe.isFunction(i.stop) && (fe._queueHooks(d.elem, d.opts.queue).stop = fe.proxy(i.stop, i)), i;
			return fe.map(u, R, d), fe.isFunction(d.opts.start) && d.opts.start.call(e, d), fe.fx.timer(fe.extend(l, {
				elem: e,
				anim: d,
				queue: d.opts.queue
			})), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
		}

		// function B(e) {
		// 	return fe.attr(e, "class") || ""
		// }

		function X(e) {
			return function (t, n) {
				"string" != typeof t && (n = t, t = "*");
				var i, r = 0,
					o = t.toLowerCase().match(Ae) || [];
				if (fe.isFunction(n))
					for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
			}
		}

		// function U(e, t, n, i) {
		// 	function r(a) {
		// 		var l;
		// 		return o[a] = !0, fe.each(e[a] || [], function (e, a) {
		// 			var d = a(t, n, i);
		// 			return "string" != typeof d || s || o[d] ? s ? !(l = d) : void 0 : (t.dataTypes.unshift(d), r(d), !1)
		// 		}), l
		// 	}
		// 	var o = {},
		// 		s = e === Qt;
		// 	return r(t.dataTypes[0]) || !o["*"] && r("*")
		// }

		function V(e, t) {
			var n, i, r = fe.ajaxSettings.flatOptions || {};
			for (i in t) t[i] !== undefined && ((r[i] ? e : n || (n = {}))[i] = t[i]);
			return n && fe.extend(!0, e, n), e
		}

		// function Y(e, t, n) {
		// 	for (var i, r, o, s, a = e.contents, l = e.dataTypes;
		// 		"*" === l[0];) l.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
		// 	if (r)
		// 		for (s in a)
		// 			if (a[s] && a[s].test(r)) {
		// 				l.unshift(s);
		// 				break
		// 			}
		// 	if (l[0] in n) o = l[0];
		// 	else {
		// 		for (s in n) {
		// 			if (!l[0] || e.converters[s + " " + l[0]]) {
		// 				o = s;
		// 				break
		// 			}
		// 			i || (i = s)
		// 		}
		// 		o = o || i
		// 	}
		// 	if (o) return o !== l[0] && l.unshift(o), n[o]
		// }

		// function J(e, t, n, i) {
		// 	var r, o, s, a, l, d = {},
		// 		u = e.dataTypes.slice();
		// 	if (u[1])
		// 		for (s in e.converters) d[s.toLowerCase()] = e.converters[s];
		// 	for (o = u.shift(); o;)
		// 		if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
		// 			if ("*" === o) o = l;
		// 			else if ("*" !== l && l !== o) {
		// 		if (!(s = d[l + " " + o] || d["* " + o]))
		// 			for (r in d)
		// 				if (a = r.split(" "), a[1] === o && (s = d[l + " " + a[0]] || d["* " + a[0]])) {
		// 					!0 === s ? s = d[r] : !0 !== d[r] && (o = a[0], u.unshift(a[1]));
		// 					break
		// 				}
		// 		if (!0 !== s)
		// 			if (s && e["throws"]) t = s(t);
		// 			else try {
		// 				t = s(t)
		// 			} catch (e) {
		// 				return {
		// 					state: "parsererror",
		// 					error: s ? e : "No conversion from " + l + " to " + o
		// 				}
		// 			}
		// 	}
		// 	return {
		// 		state: "success",
		// 		data: t
		// 	}
		// }

		// function G(e) {
		// 	return e.style && e.style.display || fe.css(e, "display")
		// }

		// function Q(e) {
		// 	if (!fe.contains(e.ownerDocument || ie, e)) return !0;
		// 	for (; e && 1 === e.nodeType;) {
		// 		if ("none" === G(e) || "hidden" === e.type) return !0;
		// 		e = e.parentNode
		// 	}
		// 	return !1
		// }

		// function Z(e, t, n, i) {
		// 	var r;
		// 	if (fe.isArray(t)) fe.each(t, function (t, r) {
		// 		n || nn.test(e) ? i(e, r) : Z(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
		// 	});
		// 	else if (n || "object" !== fe.type(t)) i(e, t);
		// 	else
		// 		for (r in t) Z(e + "[" + r + "]", t[r], n, i)
		// }

		function K() {
			try {
				return new e.XMLHttpRequest
			} catch (e) {}
		}

		// function ee() {
		// 	try {
		// 		return new e.ActiveXObject("Microsoft.XMLHTTP")
		// 	} catch (e) {}
		// }

		// function te(e) {
		// 	return fe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
		// }
		var ne = [],
			ie = e.document,
			re = ne.slice,
			oe = ne.concat,
			se = ne.push,
			ae = ne.indexOf,
			le = {},
			de = le.toString,
			ue = le.hasOwnProperty,
			ce = {},
			pe = "1.12.4",
			fe = function (e, t) {
				return new fe.fn.init(e, t)
			},
			he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
			me = /^-ms-/,
			ge = /-([\da-z])/gi,
			ve = function (e, t) {
				return t.toUpperCase()
			};
		fe.fn = fe.prototype = {
			jquery: pe,
			constructor: fe,
			selector: "",
			length: 0,
			toArray: function () {
				return re.call(this)
			},
			get: function (e) {
				return null != e ? e < 0 ? this[e + this.length] : this[e] : re.call(this)
			},
			pushStack: function (e) {
				var t = fe.merge(this.constructor(), e);
				return t.prevObject = this, t.context = this.context, t
			},
			each: function (e) {
				return fe.each(this, e)
			},
			map: function (e) {
				return this.pushStack(fe.map(this, function (t, n) {
					return e.call(t, n, t)
				}))
			},
			slice: function () {
				return this.pushStack(re.apply(this, arguments))
			},
			first: function () {
				return this.eq(0)
			},
			last: function () {
				return this.eq(-1)
			},
			eq: function (e) {
				var t = this.length,
					n = +e + (e < 0 ? t : 0);
				return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
			},
			end: function () {
				return this.prevObject || this.constructor()
			},
			push: se,
			sort: ne.sort,
			splice: ne.splice
		}, fe.extend = fe.fn.extend = function () {
			var e, t, n, i, r, o, s = arguments[0] || {},
				a = 1,
				l = arguments.length,
				d = !1;
			for ("boolean" == typeof s && (d = s, s = arguments[a] || {}, a++), "object" == typeof s || fe.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
				if (null != (r = arguments[a]))
					for (i in r) e = s[i], n = r[i], s !== n && (d && n && (fe.isPlainObject(n) || (t = fe.isArray(n))) ? (t ? (t = !1, o = e && fe.isArray(e) ? e : []) : o = e && fe.isPlainObject(e) ? e : {}, s[i] = fe.extend(d, o, n)) : n !== undefined && (s[i] = n));
			return s
		}, fe.extend({
			expando: "jQuery" + (pe + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function (e) {
				throw new Error(e)
			},
			noop: function () {},
			isFunction: function (e) {
				return "function" === fe.type(e)
			},
			isArray: Array.isArray || function (e) {
				return "array" === fe.type(e)
			},
			isWindow: function (e) {
				return null != e && e == e.window
			},
			// isNumeric: function (e) {
			// 	var t = e && e.toString();
			// 	return !fe.isArray(e) && t - parseFloat(t) + 1 >= 0
			// },
			isEmptyObject: function (e) {
				var t;
				for (t in e) return !1;
				return !0
			},
			isPlainObject: function (e) {
				var t;
				if (!e || "object" !== fe.type(e) || e.nodeType || fe.isWindow(e)) return !1;
				try {
					if (e.constructor && !ue.call(e, "constructor") && !ue.call(e.constructor.prototype, "isPrototypeOf")) return !1
				} catch (e) {
					return !1
				}
				if (!ce.ownFirst)
					for (t in e) return ue.call(e, t);
				for (t in e);
				return t === undefined || ue.call(e, t)
			},
			type: function (e) {
				return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[de.call(e)] || "object" : typeof e
			},
			globalEval: function (t) {
				t && fe.trim(t) && (e.execScript || function (t) {
					e.eval.call(e, t)
				})(t)
			},
			camelCase: function (e) {
				return e.replace(me, "ms-").replace(ge, ve)
			},
			nodeName: function (e, t) {
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
			},
			each: function (e, t) {
				var i, r = 0;
				if (n(e))
					for (i = e.length; r < i && !1 !== t.call(e[r], r, e[r]); r++);
				else
					for (r in e)
						if (!1 === t.call(e[r], r, e[r])) break;
				return e
			},
			trim: function (e) {
				return null == e ? "" : (e + "").replace(he, "")
			},
			makeArray: function (e, t) {
				var i = t || [];
				return null != e && (n(Object(e)) ? fe.merge(i, "string" == typeof e ? [e] : e) : se.call(i, e)), i
			},
			inArray: function (e, t, n) {
				var i;
				if (t) {
					if (ae) return ae.call(t, e, n);
					for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
						if (n in t && t[n] === e) return n
				}
				return -1
			},
			merge: function (e, t) {
				for (var n = +t.length, i = 0, r = e.length; i < n;) e[r++] = t[i++];
				if (n !== n)
					for (; t[i] !== undefined;) e[r++] = t[i++];
				return e.length = r, e
			},
			grep: function (e, t, n) {
				for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
				return i
			},
			map: function (e, t, i) {
				var r, o, s = 0,
					a = [];
				if (n(e))
					for (r = e.length; s < r; s++) null != (o = t(e[s], s, i)) && a.push(o);
				else
					for (s in e) null != (o = t(e[s], s, i)) && a.push(o);
				return oe.apply([], a)
			},
			guid: 1,
			proxy: function (e, t) {
				var n, i, r;
				return "string" == typeof t && (r = e[t], t = e, e = r), fe.isFunction(e) ? (n = re.call(arguments, 2), i = function () {
					return e.apply(t || this, n.concat(re.call(arguments)))
				}, i.guid = e.guid = e.guid || fe.guid++, i) : undefined
			},
			now: function () {
				return +new Date
			},
			support: ce
		}), "function" == typeof Symbol && (fe.fn[Symbol.iterator] = ne[Symbol.iterator]), fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
			le["[object " + t + "]"] = t.toLowerCase()
		});
		var ye = function (e) {
			function t(e, t, n, i) {
				var r, o, s, a, l, d, c, f, h = t && t.ownerDocument,
					m = t ? t.nodeType : 9;
				if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
				if (!i && ((t ? t.ownerDocument || t : R) !== H && j(t), t = t || H, q)) {
					if (11 !== m && (d = ve.exec(e)))
						if (r = d[1]) {
							if (9 === m) {
								if (!(s = t.getElementById(r))) return n;
								if (s.id === r) return n.push(s), n
							} else if (h && (s = h.getElementById(r)) && z(t, s) && s.id === r) return n.push(s), n
						} else {
							if (d[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
							if ((r = d[3]) && x.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(r)), n
						}
					if (x.qsa && !X[e + " "] && (!O || !O.test(e))) {
						if (1 !== m) h = t, f = e;
						else if ("object" !== t.nodeName.toLowerCase()) {
							for ((a = t.getAttribute("id")) ? a = a.replace(be, "\\$&") : t.setAttribute("id", a = F), c = S(e), o = c.length, l = pe.test(a) ? "#" + a : "[id='" + a + "']"; o--;) c[o] = l + " " + p(c[o]);
							f = c.join(","), h = ye.test(e) && u(t.parentNode) || t
						}
						if (f) try {
							return Z.apply(n, h.querySelectorAll(f)), n
						} catch (e) {} finally {
							a === F && t.removeAttribute("id")
						}
					}
				}
				return E(e.replace(ae, "$1"), t, n, i)
			}

			function n() {
				function e(n, i) {
					return t.push(n + " ") > k.cacheLength && delete e[t.shift()], e[n + " "] = i
				}
				var t = [];
				return e
			}

			function i(e) {
				return e[F] = !0, e
			}

			function r(e) {
				var t = H.createElement("div");
				try {
					return !!e(t)
				} catch (e) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null
				}
			}

			function o(e, t) {
				for (var n = e.split("|"), i = n.length; i--;) k.attrHandle[n[i]] = t
			}

			function s(e, t) {
				var n = t && e,
					i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
				if (i) return i;
				if (n)
					for (; n = n.nextSibling;)
						if (n === t) return -1;
				return e ? 1 : -1
			}

			function a(e) {
				return function (t) {
					return "input" === t.nodeName.toLowerCase() && t.type === e
				}
			}

			function l(e) {
				return function (t) {
					var n = t.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && t.type === e
				}
			}

			function d(e) {
				return i(function (t) {
					return t = +t, i(function (n, i) {
						for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
					})
				})
			}

			function u(e) {
				return e && "undefined" != typeof e.getElementsByTagName && e
			}

			function c() {}

			function p(e) {
				for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
				return i
			}

			function f(e, t, n) {
				var i = t.dir,
					r = n && "parentNode" === i,
					o = _++;
				return t.first ? function (t, n, o) {
					for (; t = t[i];)
						if (1 === t.nodeType || r) return e(t, n, o)
				} : function (t, n, s) {
					var a, l, d, u = [I, o];
					if (s) {
						for (; t = t[i];)
							if ((1 === t.nodeType || r) && e(t, n, s)) return !0
					} else
						for (; t = t[i];)
							if (1 === t.nodeType || r) {
								if (d = t[F] || (t[F] = {}), l = d[t.uniqueID] || (d[t.uniqueID] = {}), (a = l[i]) && a[0] === I && a[1] === o) return u[2] = a[2];
								if (l[i] = u, u[2] = e(t, n, s)) return !0
							}
				}
			}

			function h(e) {
				return e.length > 1 ? function (t, n, i) {
					for (var r = e.length; r--;)
						if (!e[r](t, n, i)) return !1;
					return !0
				} : e[0]
			}

			function m(e, n, i) {
				for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
				return i
			}

			function g(e, t, n, i, r) {
				for (var o, s = [], a = 0, l = e.length, d = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), d && t.push(a)));
				return s
			}

			function v(e, t, n, r, o, s) {
				return r && !r[F] && (r = v(r)), o && !o[F] && (o = v(o, s)), i(function (i, s, a, l) {
					var d, u, c, p = [],
						f = [],
						h = s.length,
						v = i || m(t || "*", a.nodeType ? [a] : a, []),
						y = !e || !i && t ? v : g(v, p, e, a, l),
						b = n ? o || (i ? e : h || r) ? [] : s : y;
					if (n && n(y, b, a, l), r)
						for (d = g(b, f), r(d, [], a, l), u = d.length; u--;)(c = d[u]) && (b[f[u]] = !(y[f[u]] = c));
					if (i) {
						if (o || e) {
							if (o) {
								for (d = [], u = b.length; u--;)(c = b[u]) && d.push(y[u] = c);
								o(null, b = [], d, l)
							}
							for (u = b.length; u--;)(c = b[u]) && (d = o ? ee(i, c) : p[u]) > -1 && (i[d] = !(s[d] = c))
						}
					} else b = g(b === s ? b.splice(h, b.length) : b), o ? o(null, s, b, l) : Z.apply(s, b)
				})
			}

			function y(e) {
				for (var t, n, i, r = e.length, o = k.relative[e[0].type], s = o || k.relative[" "], a = o ? 1 : 0, l = f(function (e) {
						return e === t
					}, s, !0), d = f(function (e) {
						return ee(t, e) > -1
					}, s, !0), u = [function (e, n, i) {
						var r = !o && (i || n !== A) || ((t = n).nodeType ? l(e, n, i) : d(e, n, i));
						return t = null, r
					}]; a < r; a++)
					if (n = k.relative[e[a].type]) u = [f(h(u), n)];
					else {
						if (n = k.filter[e[a].type].apply(null, e[a].matches), n[F]) {
							for (i = ++a; i < r && !k.relative[e[i].type]; i++);
							return v(a > 1 && h(u), a > 1 && p(e.slice(0, a - 1).concat({
								value: " " === e[a - 2].type ? "*" : ""
							})).replace(ae, "$1"), n, a < i && y(e.slice(a, i)), i < r && y(e = e.slice(i)), i < r && p(e))
						}
						u.push(n)
					}
				return h(u)
			}

			function b(e, n) {
				var r = n.length > 0,
					o = e.length > 0,
					s = function (i, s, a, l, d) {
						var u, c, p, f = 0,
							h = "0",
							m = i && [],
							v = [],
							y = A,
							b = i || o && k.find.TAG("*", d),
							w = I += null == y ? 1 : Math.random() || .1,
							x = b.length;
						for (d && (A = s === H || s || d); h !== x && null != (u = b[h]); h++) {
							if (o && u) {
								for (c = 0, s || u.ownerDocument === H || (j(u), a = !q); p = e[c++];)
									if (p(u, s || H, a)) {
										l.push(u);
										break
									}
								d && (I = w)
							}
							r && ((u = !p && u) && f--, i && m.push(u))
						}
						if (f += h, r && h !== f) {
							for (c = 0; p = n[c++];) p(m, v, s, a);
							if (i) {
								if (f > 0)
									for (; h--;) m[h] || v[h] || (v[h] = G.call(l));
								v = g(v)
							}
							Z.apply(l, v), d && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
						}
						return d && (I = w, A = y), m
					};
				return r ? i(s) : s
			}
			var w, x, k, T, C, S, $, E, A, N, L, j, H, D, q, O, M, P, z, F = "sizzle" + 1 * new Date,
				R = e.document,
				I = 0,
				_ = 0,
				W = n(),
				B = n(),
				X = n(),
				U = function (e, t) {
					return e === t && (L = !0), 0
				},
				V = 1 << 31,
				Y = {}.hasOwnProperty,
				J = [],
				G = J.pop,
				Q = J.push,
				Z = J.push,
				K = J.slice,
				ee = function (e, t) {
					for (var n = 0, i = e.length; n < i; n++)
						if (e[n] === t) return n;
					return -1
				},
				te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				ne = "[\\x20\\t\\r\\n\\f]",
				ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
				oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
				se = new RegExp(ne + "+", "g"),
				ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
				le = new RegExp("^" + ne + "*," + ne + "*"),
				de = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
				ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
				ce = new RegExp(oe),
				pe = new RegExp("^" + ie + "$"),
				fe = {
					ID: new RegExp("^#(" + ie + ")"),
					CLASS: new RegExp("^\\.(" + ie + ")"),
					TAG: new RegExp("^(" + ie + "|[*])"),
					ATTR: new RegExp("^" + re),
					PSEUDO: new RegExp("^" + oe),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + te + ")$", "i"),
					needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
				},
				he = /^(?:input|select|textarea|button)$/i,
				me = /^h\d$/i,
				ge = /^[^{]+\{\s*\[native \w/,
				ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				ye = /[+~]/,
				be = /'|\\/g,
				we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
				xe = function (e, t, n) {
					var i = "0x" + t - 65536;
					return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
				},
				ke = function () {
					j()
				};
			try {
				Z.apply(J = K.call(R.childNodes), R.childNodes), J[R.childNodes.length].nodeType
			} catch (e) {
				Z = {
					apply: J.length ? function (e, t) {
						Q.apply(e, K.call(t))
					} : function (e, t) {
						for (var n = e.length, i = 0; e[n++] = t[i++];);
						e.length = n - 1
					}
				}
			}
			x = t.support = {}, C = t.isXML = function (e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return !!t && "HTML" !== t.nodeName
			}, j = t.setDocument = function (e) {
				var t, n, i = e ? e.ownerDocument || e : R;
				return i !== H && 9 === i.nodeType && i.documentElement ? (H = i, D = H.documentElement, q = !C(H), (n = H.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ke, !1) : n.attachEvent && n.attachEvent("onunload", ke)), x.attributes = r(function (e) {
					return e.className = "i", !e.getAttribute("className")
				}), x.getElementsByTagName = r(function (e) {
					return e.appendChild(H.createComment("")), !e.getElementsByTagName("*").length
				}), x.getElementsByClassName = ge.test(H.getElementsByClassName), x.getById = r(function (e) {
					return D.appendChild(e).id = F, !H.getElementsByName || !H.getElementsByName(F).length
				}), x.getById ? (k.find.ID = function (e, t) {
					if ("undefined" != typeof t.getElementById && q) {
						var n = t.getElementById(e);
						return n ? [n] : []
					}
				}, k.filter.ID = function (e) {
					var t = e.replace(we, xe);
					return function (e) {
						return e.getAttribute("id") === t
					}
				}) : (delete k.find.ID, k.filter.ID = function (e) {
					var t = e.replace(we, xe);
					return function (e) {
						var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
						return n && n.value === t
					}
				}), k.find.TAG = x.getElementsByTagName ? function (e, t) {
					return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
				} : function (e, t) {
					var n, i = [],
						r = 0,
						o = t.getElementsByTagName(e);
					if ("*" === e) {
						for (; n = o[r++];) 1 === n.nodeType && i.push(n);
						return i
					}
					return o
				}, k.find.CLASS = x.getElementsByClassName && function (e, t) {
					if ("undefined" != typeof t.getElementsByClassName && q) return t.getElementsByClassName(e)
				}, M = [], O = [], (x.qsa = ge.test(H.querySelectorAll)) && (r(function (e) {
					D.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + F + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + F + "+*").length || O.push(".#.+[+~]")
				}), r(function (e) {
					var t = H.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
				})), (x.matchesSelector = ge.test(P = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && r(function (e) {
					x.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), M.push("!=", oe)
				}), O = O.length && new RegExp(O.join("|")), M = M.length && new RegExp(M.join("|")), t = ge.test(D.compareDocumentPosition), z = t || ge.test(D.contains) ? function (e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						i = t && t.parentNode;
					return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
				} : function (e, t) {
					if (t)
						for (; t = t.parentNode;)
							if (t === e) return !0;
					return !1
				}, U = t ? function (e, t) {
					if (e === t) return L = !0, 0;
					var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
					return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === H || e.ownerDocument === R && z(R, e) ? -1 : t === H || t.ownerDocument === R && z(R, t) ? 1 : N ? ee(N, e) - ee(N, t) : 0 : 4 & n ? -1 : 1)
				} : function (e, t) {
					if (e === t) return L = !0, 0;
					var n, i = 0,
						r = e.parentNode,
						o = t.parentNode,
						a = [e],
						l = [t];
					if (!r || !o) return e === H ? -1 : t === H ? 1 : r ? -1 : o ? 1 : N ? ee(N, e) - ee(N, t) : 0;
					if (r === o) return s(e, t);
					for (n = e; n = n.parentNode;) a.unshift(n);
					for (n = t; n = n.parentNode;) l.unshift(n);
					for (; a[i] === l[i];) i++;
					return i ? s(a[i], l[i]) : a[i] === R ? -1 : l[i] === R ? 1 : 0
				}, H) : H
			}, t.matches = function (e, n) {
				return t(e, null, null, n)
			}, t.matchesSelector = function (e, n) {
				if ((e.ownerDocument || e) !== H && j(e), n = n.replace(ue, "='$1']"), x.matchesSelector && q && !X[n + " "] && (!M || !M.test(n)) && (!O || !O.test(n))) try {
					var i = P.call(e, n);
					if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
				} catch (e) {}
				return t(n, H, null, [e]).length > 0
			}, t.contains = function (e, t) {
				return (e.ownerDocument || e) !== H && j(e), z(e, t)
			}, t.attr = function (e, t) {
				(e.ownerDocument || e) !== H && j(e);
				var n = k.attrHandle[t.toLowerCase()],
					i = n && Y.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !q) : undefined;
				return i !== undefined ? i : x.attributes || !q ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
			}, t.error = function (e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, t.uniqueSort = function (e) {
				var t, n = [],
					i = 0,
					r = 0;
				if (L = !x.detectDuplicates, N = !x.sortStable && e.slice(0), e.sort(U), L) {
					for (; t = e[r++];) t === e[r] && (i = n.push(r));
					for (; i--;) e.splice(n[i], 1)
				}
				return N = null, e
			}, T = t.getText = function (e) {
				var t, n = "",
					i = 0,
					r = e.nodeType;
				if (r) {
					if (1 === r || 9 === r || 11 === r) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
					} else if (3 === r || 4 === r) return e.nodeValue
				} else
					for (; t = e[i++];) n += T(t);
				return n
			}, k = t.selectors = {
				cacheLength: 50,
				createPseudo: i,
				match: fe,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function (e) {
						return e[1] = e[1].replace(we, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(we, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function (e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
					},
					PSEUDO: function (e) {
						var t, n = !e[6] && e[2];
						return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function (e) {
						var t = e.replace(we, xe).toLowerCase();
						return "*" === e ? function () {
							return !0
						} : function (e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function (e) {
						var t = W[e + " "];
						return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function (e) {
							return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
						})
					},
					ATTR: function (e, n, i) {
						return function (r) {
							var o = t.attr(r, e);
							return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
						}
					},
					CHILD: function (e, t, n, i, r) {
						var o = "nth" !== e.slice(0, 3),
							s = "last" !== e.slice(-4),
							a = "of-type" === t;
						return 1 === i && 0 === r ? function (e) {
							return !!e.parentNode
						} : function (t, n, l) {
							var d, u, c, p, f, h, m = o !== s ? "nextSibling" : "previousSibling",
								g = t.parentNode,
								v = a && t.nodeName.toLowerCase(),
								y = !l && !a,
								b = !1;
							if (g) {
								if (o) {
									for (; m;) {
										for (p = t; p = p[m];)
											if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
										h = m = "only" === e && !h && "nextSibling"
									}
									return !0
								}
								if (h = [s ? g.firstChild : g.lastChild], s && y) {
									for (p = g, c = p[F] || (p[F] = {}), u = c[p.uniqueID] || (c[p.uniqueID] = {}), d = u[e] || [], f = d[0] === I && d[1], b = f && d[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (b = f = 0) || h.pop();)
										if (1 === p.nodeType && ++b && p === t) {
											u[e] = [I, f, b];
											break
										}
								} else if (y && (p = t, c = p[F] || (p[F] = {}), u = c[p.uniqueID] || (c[p.uniqueID] = {}), d = u[e] || [], f = d[0] === I && d[1], b = f), !1 === b)
									for (;
										(p = ++f && p && p[m] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && (c = p[F] || (p[F] = {}), u = c[p.uniqueID] || (c[p.uniqueID] = {}), u[e] = [I, b]), p !== t)););
								return (b -= r) === i || b % i == 0 && b / i >= 0
							}
						}
					},
					PSEUDO: function (e, n) {
						var r, o = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
						return o[F] ? o(n) : o.length > 1 ? (r = [e, e, "", n], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
							for (var i, r = o(e, n), s = r.length; s--;) i = ee(e, r[s]), e[i] = !(t[i] = r[s])
						}) : function (e) {
							return o(e, 0, r)
						}) : o
					}
				},
				pseudos: {
					not: i(function (e) {
						var t = [],
							n = [],
							r = $(e.replace(ae, "$1"));
						return r[F] ? i(function (e, t, n, i) {
							for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
						}) : function (e, i, o) {
							return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
						}
					}),
					has: i(function (e) {
						return function (n) {
							return t(e, n).length > 0
						}
					}),
					contains: i(function (e) {
						return e = e.replace(we, xe),
							function (t) {
								return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
							}
					}),
					lang: i(function (e) {
						return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, xe).toLowerCase(),
							function (t) {
								var n;
								do {
									if (n = q ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
								} while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function (t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id
					},
					root: function (e) {
						return e === D
					},
					focus: function (e) {
						return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: function (e) {
						return !1 === e.disabled
					},
					disabled: function (e) {
						return !0 === e.disabled
					},
					checked: function (e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function (e) {
						return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
					},
					empty: function (e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeType < 6) return !1;
						return !0
					},
					parent: function (e) {
						return !k.pseudos.empty(e)
					},
					header: function (e) {
						return me.test(e.nodeName)
					},
					input: function (e) {
						return he.test(e.nodeName)
					},
					button: function (e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function (e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first: d(function () {
						return [0]
					}),
					last: d(function (e, t) {
						return [t - 1]
					}),
					eq: d(function (e, t, n) {
						return [n < 0 ? n + t : n]
					}),
					even: d(function (e, t) {
						for (var n = 0; n < t; n += 2) e.push(n);
						return e
					}),
					odd: d(function (e, t) {
						for (var n = 1; n < t; n += 2) e.push(n);
						return e
					}),
					lt: d(function (e, t, n) {
						for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
						return e
					}),
					gt: d(function (e, t, n) {
						for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
						return e
					})
				}
			}, k.pseudos.nth = k.pseudos.eq;
			for (w in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) k.pseudos[w] = a(w);
			for (w in {
					submit: !0,
					reset: !0
				}) k.pseudos[w] = l(w);
			return c.prototype = k.filters = k.pseudos, k.setFilters = new c, S = t.tokenize = function (e, n) {
				var i, r, o, s, a, l, d, u = B[e + " "];
				if (u) return n ? 0 : u.slice(0);
				for (a = e, l = [], d = k.preFilter; a;) {
					i && !(r = le.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = de.exec(a)) && (i = r.shift(), o.push({
						value: i,
						type: r[0].replace(ae, " ")
					}), a = a.slice(i.length));
					for (s in k.filter) !(r = fe[s].exec(a)) || d[s] && !(r = d[s](r)) || (i = r.shift(), o.push({
						value: i,
						type: s,
						matches: r
					}), a = a.slice(i.length));
					if (!i) break
				}
				return n ? a.length : a ? t.error(e) : B(e, l).slice(0)
			}, $ = t.compile = function (e, t) {
				var n, i = [],
					r = [],
					o = X[e + " "];
				if (!o) {
					for (t || (t = S(e)), n = t.length; n--;) o = y(t[n]), o[F] ? i.push(o) : r.push(o);
					o = X(e, b(r, i)), o.selector = e
				}
				return o
			}, E = t.select = function (e, t, n, i) {
				var r, o, s, a, l, d = "function" == typeof e && e,
					c = !i && S(e = d.selector || e);
				if (n = n || [], 1 === c.length) {
					if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && x.getById && 9 === t.nodeType && q && k.relative[o[1].type]) {
						if (!(t = (k.find.ID(s.matches[0].replace(we, xe), t) || [])[0])) return n;
						d && (t = t.parentNode), e = e.slice(o.shift().value.length)
					}
					for (r = fe.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !k.relative[a = s.type]);)
						if ((l = k.find[a]) && (i = l(s.matches[0].replace(we, xe), ye.test(o[0].type) && u(t.parentNode) || t))) {
							if (o.splice(r, 1), !(e = i.length && p(o))) return Z.apply(n, i), n;
							break
						}
				}
				return (d || $(e, c))(i, t, !q, n, !t || ye.test(e) && u(t.parentNode) || t), n
			}, x.sortStable = F.split("").sort(U).join("") === F, x.detectDuplicates = !!L, j(), x.sortDetached = r(function (e) {
				return 1 & e.compareDocumentPosition(H.createElement("div"))
			}), r(function (e) {
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
			}) || o("type|href|height|width", function (e, t, n) {
				if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
			}), x.attributes && r(function (e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
			}) || o("value", function (e, t, n) {
				if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
			}), r(function (e) {
				return null == e.getAttribute("disabled")
			}) || o(te, function (e, t, n) {
				var i;
				if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
			}), t
		}(e);
		fe.find = ye, fe.expr = ye.selectors, fe.expr[":"] = fe.expr.pseudos, fe.uniqueSort = fe.unique = ye.uniqueSort, fe.text = ye.getText, fe.isXMLDoc = ye.isXML, fe.contains = ye.contains;
		var be = function (e, t, n) {
				for (var i = [], r = n !== undefined;
					(e = e[t]) && 9 !== e.nodeType;)
					if (1 === e.nodeType) {
						if (r && fe(e).is(n)) break;
						i.push(e)
					}
				return i
			},
			we = function (e, t) {
				for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
				return n
			},
			xe = fe.expr.match.needsContext,
			ke = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
			Te = /^.[^:#\[\.,]*$/;
		fe.filter = function (e, t, n) {
			var i = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? fe.find.matchesSelector(i, e) ? [i] : [] : fe.find.matches(e, fe.grep(t, function (e) {
				return 1 === e.nodeType
			}))
		}, fe.fn.extend({
			find: function (e) {
				var t, n = [],
					i = this,
					r = i.length;
				if ("string" != typeof e) return this.pushStack(fe(e).filter(function () {
					for (t = 0; t < r; t++)
						if (fe.contains(i[t], this)) return !0
				}));
				for (t = 0; t < r; t++) fe.find(e, i[t], n);
				return n = this.pushStack(r > 1 ? fe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
			},
			filter: function (e) {
				return this.pushStack(i(this, e || [], !1))
			},
			not: function (e) {
				return this.pushStack(i(this, e || [], !0))
			},
			is: function (e) {
				return !!i(this, "string" == typeof e && xe.test(e) ? fe(e) : e || [], !1).length
			}
		});
		var Ce, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
		(fe.fn.init = function (e, t, n) {
			var i, r;
			if (!e) return this;
			if (n = n || Ce, "string" == typeof e) {
				if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Se.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
				if (i[1]) {
					if (t = t instanceof fe ? t[0] : t, fe.merge(this, fe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ie, !0)), ke.test(i[1]) && fe.isPlainObject(t))
						for (i in t) fe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
					return this
				}
				if ((r = ie.getElementById(i[2])) && r.parentNode) {
					if (r.id !== i[2]) return Ce.find(e);
					this.length = 1, this[0] = r
				}
				return this.context = ie, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : fe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(fe) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), fe.makeArray(e, this))
		}).prototype = fe.fn, Ce = fe(ie);
		var $e = /^(?:parents|prev(?:Until|All))/,
			Ee = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};
		fe.fn.extend({
			has: function (e) {
				var t, n = fe(e, this),
					i = n.length;
				return this.filter(function () {
					for (t = 0; t < i; t++)
						if (fe.contains(this, n[t])) return !0
				})
			},
			closest: function (e, t) {
				for (var n, i = 0, r = this.length, o = [], s = xe.test(e) || "string" != typeof e ? fe(e, t || this.context) : 0; i < r; i++)
					for (n = this[i]; n && n !== t; n = n.parentNode)
						if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && fe.find.matchesSelector(n, e))) {
							o.push(n);
							break
						}
				return this.pushStack(o.length > 1 ? fe.uniqueSort(o) : o)
			},
			index: function (e) {
				return e ? "string" == typeof e ? fe.inArray(this[0], fe(e)) : fe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function (e, t) {
				return this.pushStack(fe.uniqueSort(fe.merge(this.get(), fe(e, t))))
			},
			addBack: function (e) {
				return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
			}
		}), fe.each({
			parent: function (e) {
				var t = e.parentNode;
				return t && 11 !== t.nodeType ? t : null
			},
			parents: function (e) {
				return be(e, "parentNode")
			},
			parentsUntil: function (e, t, n) {
				return be(e, "parentNode", n)
			},
			next: function (e) {
				return r(e, "nextSibling")
			},
			prev: function (e) {
				return r(e, "previousSibling")
			},
			nextAll: function (e) {
				return be(e, "nextSibling")
			},
			prevAll: function (e) {
				return be(e, "previousSibling")
			},
			nextUntil: function (e, t, n) {
				return be(e, "nextSibling", n)
			},
			prevUntil: function (e, t, n) {
				return be(e, "previousSibling", n)
			},
			siblings: function (e) {
				return we((e.parentNode || {}).firstChild, e)
			},
			children: function (e) {
				return we(e.firstChild)
			},
			contents: function (e) {
				return fe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : fe.merge([], e.childNodes)
			}
		}, function (e, t) {
			fe.fn[e] = function (n, i) {
				var r = fe.map(this, t, n);
				return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = fe.filter(i, r)), this.length > 1 && (Ee[e] || (r = fe.uniqueSort(r)), $e.test(e) && (r = r.reverse())), this.pushStack(r)
			}
		});
		var Ae = /\S+/g;
		fe.Callbacks = function (e) {
			e = "string" == typeof e ? o(e) : fe.extend({}, e);
			var t, n, i, r, s = [],
				a = [],
				l = -1,
				d = function () {
					for (r = e.once, i = t = !0; a.length; l = -1)
						for (n = a.shift(); ++l < s.length;) !1 === s[l].apply(n[0], n[1]) && e.stopOnFalse && (l = s.length, n = !1);
					e.memory || (n = !1), t = !1, r && (s = n ? [] : "")
				},
				u = {
					add: function () {
						return s && (n && !t && (l = s.length - 1, a.push(n)), function t(n) {
							fe.each(n, function (n, i) {
								fe.isFunction(i) ? e.unique && u.has(i) || s.push(i) : i && i.length && "string" !== fe.type(i) && t(i)
							})
						}(arguments), n && !t && d()), this
					},
					remove: function () {
						return fe.each(arguments, function (e, t) {
							for (var n;
								(n = fe.inArray(t, s, n)) > -1;) s.splice(n, 1), n <= l && l--
						}), this
					},
					has: function (e) {
						return e ? fe.inArray(e, s) > -1 : s.length > 0
					},
					empty: function () {
						return s && (s = []), this
					},
					disable: function () {
						return r = a = [], s = n = "", this
					},
					disabled: function () {
						return !s
					},
					lock: function () {
						return r = !0, n || u.disable(), this
					},
					locked: function () {
						return !!r
					},
					fireWith: function (e, n) {
						return r || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || d()), this
					},
					fire: function () {
						return u.fireWith(this, arguments), this
					},
					fired: function () {
						return !!i
					}
				};
			return u
		}, fe.extend({
			Deferred: function (e) {
				var t = [
						["resolve", "done", fe.Callbacks("once memory"), "resolved"],
						["reject", "fail", fe.Callbacks("once memory"), "rejected"],
						["notify", "progress", fe.Callbacks("memory")]
					],
					n = "pending",
					i = {
						state: function () {
							return n
						},
						always: function () {
							return r.done(arguments).fail(arguments), this
						},
						then: function () {
							var e = arguments;
							return fe.Deferred(function (n) {
								fe.each(t, function (t, o) {
									var s = fe.isFunction(e[t]) && e[t];
									r[o[1]](function () {
										var e = s && s.apply(this, arguments);
										e && fe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
									})
								}), e = null
							}).promise()
						},
						promise: function (e) {
							return null != e ? fe.extend(e, i) : i
						}
					},
					r = {};
				return i.pipe = i.then, fe.each(t, function (e, o) {
					var s = o[2],
						a = o[3];
					i[o[1]] = s.add, a && s.add(function () {
						n = a
					}, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function () {
						return r[o[0] + "With"](this === r ? i : this, arguments), this
					}, r[o[0] + "With"] = s.fireWith
				}), i.promise(r), e && e.call(r, r), r
			},
			when: function (e) {
				var t, n, i, r = 0,
					o = re.call(arguments),
					s = o.length,
					a = 1 !== s || e && fe.isFunction(e.promise) ? s : 0,
					l = 1 === a ? e : fe.Deferred(),
					d = function (e, n, i) {
						return function (r) {
							n[e] = this, i[e] = arguments.length > 1 ? re.call(arguments) : r, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
						}
					};
				if (s > 1)
					for (t = new Array(s), n = new Array(s), i = new Array(s); r < s; r++) o[r] && fe.isFunction(o[r].promise) ? o[r].promise().progress(d(r, n, t)).done(d(r, i, o)).fail(l.reject) : --a;
				return a || l.resolveWith(i, o), l.promise()
			}
		});
		var Ne;
		fe.fn.ready = function (e) {
			return fe.ready.promise().done(e), this
		}, fe.extend({
			isReady: !1,
			readyWait: 1,
			holdReady: function (e) {
				e ? fe.readyWait++ : fe.ready(!0)
			},
			ready: function (e) {
				(!0 === e ? --fe.readyWait : fe.isReady) || (fe.isReady = !0, !0 !== e && --fe.readyWait > 0 || (Ne.resolveWith(ie, [fe]), fe.fn.triggerHandler && (fe(ie).triggerHandler("ready"), fe(ie).off("ready"))))
			}
		}), fe.ready.promise = function (t) {
			if (!Ne)
				if (Ne = fe.Deferred(), "complete" === ie.readyState || "loading" !== ie.readyState && !ie.documentElement.doScroll) e.setTimeout(fe.ready);
				else if (ie.addEventListener) ie.addEventListener("DOMContentLoaded", a), e.addEventListener("load", a);
			else {
				ie.attachEvent("onreadystatechange", a), e.attachEvent("onload", a);
				var n = !1;
				try {
					n = null == e.frameElement && ie.documentElement
				} catch (e) {}
				n && n.doScroll && function t() {
					if (!fe.isReady) {
						try {
							n.doScroll("left")
						} catch (n) {
							return e.setTimeout(t, 50)
						}
						s(), fe.ready()
					}
				}()
			}
			return Ne.promise(t)
		}, fe.ready.promise();
		var Le;
		for (Le in fe(ce)) break;
		ce.ownFirst = "0" === Le, ce.inlineBlockNeedsLayout = !1, fe(function () {
				var e, t, n, i;
				(n = ie.getElementsByTagName("body")[0]) && n.style && (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ce.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
			}),
			function () {
				var e = ie.createElement("div");
				ce.deleteExpando = !0;
				try {
					delete e.test
				} catch (e) {
					ce.deleteExpando = !1
				}
				e = null
			}();
		var je = function (e) {
				var t = fe.noData[(e.nodeName + " ").toLowerCase()],
					n = +e.nodeType || 1;
				return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
			},
			He = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			De = /([A-Z])/g;
		fe.extend({
				cache: {},
				noData: {
					"applet ": !0,
					"embed ": !0,
					"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
				},
				hasData: function (e) {
					return !!(e = e.nodeType ? fe.cache[e[fe.expando]] : e[fe.expando]) && !d(e)
				},
				data: function (e, t, n) {
					return u(e, t, n)
				},
				removeData: function (e, t) {
					return c(e, t)
				},
				_data: function (e, t, n) {
					return u(e, t, n, !0)
				},
				_removeData: function (e, t) {
					return c(e, t, !0)
				}
			}), fe.fn.extend({
				data: function (e, t) {
					var n, i, r, o = this[0],
						s = o && o.attributes;
					if (e === undefined) {
						if (this.length && (r = fe.data(o), 1 === o.nodeType && !fe._data(o, "parsedAttrs"))) {
							for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = fe.camelCase(i.slice(5)), l(o, i, r[i])));
							fe._data(o, "parsedAttrs", !0)
						}
						return r
					}
					return "object" == typeof e ? this.each(function () {
						fe.data(this, e)
					}) : arguments.length > 1 ? this.each(function () {
						fe.data(this, e, t)
					}) : o ? l(o, e, fe.data(o, e)) : undefined
				},
				removeData: function (e) {
					return this.each(function () {
						fe.removeData(this, e)
					})
				}
			}), fe.extend({
				queue: function (e, t, n) {
					var i;
					if (e) return t = (t || "fx") + "queue", i = fe._data(e, t), n && (!i || fe.isArray(n) ? i = fe._data(e, t, fe.makeArray(n)) : i.push(n)), i || []
				},
				dequeue: function (e, t) {
					t = t || "fx";
					var n = fe.queue(e, t),
						i = n.length,
						r = n.shift(),
						o = fe._queueHooks(e, t),
						s = function () {
							fe.dequeue(e, t)
						};
					"inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
				},
				_queueHooks: function (e, t) {
					var n = t + "queueHooks";
					return fe._data(e, n) || fe._data(e, n, {
						empty: fe.Callbacks("once memory").add(function () {
							fe._removeData(e, t + "queue"), fe._removeData(e, n)
						})
					})
				}
			}), fe.fn.extend({
				queue: function (e, t) {
					var n = 2;
					return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? fe.queue(this[0], e) : t === undefined ? this : this.each(function () {
						var n = fe.queue(this, e, t);
						fe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && fe.dequeue(this, e)
					})
				},
				dequeue: function (e) {
					return this.each(function () {
						fe.dequeue(this, e)
					})
				},
				clearQueue: function (e) {
					return this.queue(e || "fx", [])
				},
				promise: function (e, t) {
					var n, i = 1,
						r = fe.Deferred(),
						o = this,
						s = this.length,
						a = function () {
							--i || r.resolveWith(o, [o])
						};
					for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; s--;)(n = fe._data(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
					return a(), r.promise(t)
				}
			}),
			function () {
				var e;
				ce.shrinkWrapBlocks = function () {
					if (null != e) return e;
					e = !1;
					var t, n, i;
					return (n = ie.getElementsByTagName("body")[0]) && n.style ? (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ie.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
				}
			}();
		var qe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			Oe = new RegExp("^(?:([+-])=|)(" + qe + ")([a-z%]*)$", "i"),
			Me = ["Top", "Right", "Bottom", "Left"],
			Pe = function (e, t) {
				return e = t || e, "none" === fe.css(e, "display") || !fe.contains(e.ownerDocument, e)
			},
			ze = function (e, t, n, i, r, o, s) {
				var a = 0,
					l = e.length,
					d = null == n;
				if ("object" === fe.type(n)) {
					r = !0;
					for (a in n) ze(e, t, a, n[a], !0, o, s)
				} else if (i !== undefined && (r = !0, fe.isFunction(i) || (s = !0), d && (s ? (t.call(e, i), t = null) : (d = t, t = function (e, t, n) {
						return d.call(fe(e), n)
					})), t))
					for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
				return r ? e : d ? t.call(e) : l ? t(e[0], n) : o
			},
			Fe = /^(?:checkbox|radio)$/i,
			Re = /<([\w:-]+)/,
			Ie = /^$|\/(?:java|ecma)script/i,
			_e = /^\s+/,
			We = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
		! function () {
			var e = ie.createElement("div"),
				t = ie.createDocumentFragment(),
				n = ie.createElement("input");
			e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ce.leadingWhitespace = 3 === e.firstChild.nodeType, ce.tbody = !e.getElementsByTagName("tbody").length, ce.htmlSerialize = !!e.getElementsByTagName("link").length, ce.html5Clone = "<:nav></:nav>" !== ie.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), ce.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", ce.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = ie.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), ce.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.noCloneEvent = !!e.addEventListener, e[fe.expando] = 1, ce.attributes = !e.getAttribute(fe.expando)
		}();
		var Be = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: ce.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		};
		Be.optgroup = Be.option, Be.tbody = Be.tfoot = Be.colgroup = Be.caption = Be.thead, Be.th = Be.td;
		var Xe = /<|&#?\w+;/,
			Ue = /<tbody/i;
		! function () {
			var t, n, i = ie.createElement("div");
			for (t in {
					submit: !0,
					change: !0,
					focusin: !0
				}) n = "on" + t, (ce[t] = n in e) || (i.setAttribute(n, "t"), ce[t] = !1 === i.attributes[n].expando);
			i = null
		}();
		var Ve = /^(?:input|select|textarea)$/i,
			Ye = /^key/,
			Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
			Ge = /^(?:focusinfocus|focusoutblur)$/,
			Qe = /^([^.]*)(?:\.(.+)|)/;
		fe.event = {
			global: {},
			add: function (e, t, n, i, r) {
				var o, s, a, l, d, u, c, p, f, h, m, g = fe._data(e);
				if (g) {
					for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = fe.guid++), (s = g.events) || (s = g.events = {}), (u = g.handle) || (u = g.handle = function (e) {
							return void 0 === fe || e && fe.event.triggered === e.type ? undefined : fe.event.dispatch.apply(u.elem, arguments)
						}, u.elem = e), t = (t || "").match(Ae) || [""], a = t.length; a--;) o = Qe.exec(t[a]) || [], f = m = o[1], h = (o[2] || "").split(".").sort(), f && (d = fe.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = fe.event.special[f] || {}, c = fe.extend({
						type: f,
						origType: m,
						data: i,
						handler: n,
						guid: n.guid,
						selector: r,
						needsContext: r && fe.expr.match.needsContext.test(r),
						namespace: h.join(".")
					}, l), (p = s[f]) || (p = s[f] = [], p.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, h, u) || (e.addEventListener ? e.addEventListener(f, u, !1) : e.attachEvent && e.attachEvent("on" + f, u))), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, c) : p.push(c), fe.event.global[f] = !0);
					e = null
				}
			},
			remove: function (e, t, n, i, r) {
				var o, s, a, l, d, u, c, p, f, h, m, g = fe.hasData(e) && fe._data(e);
				if (g && (u = g.events)) {
					for (t = (t || "").match(Ae) || [""], d = t.length; d--;)
						if (a = Qe.exec(t[d]) || [], f = m = a[1], h = (a[2] || "").split(".").sort(), f) {
							for (c = fe.event.special[f] || {}, f = (i ? c.delegateType : c.bindType) || f, p = u[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = p.length; o--;) s = p[o], !r && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (p.splice(o, 1), s.selector && p.delegateCount--, c.remove && c.remove.call(e, s));
							l && !p.length && (c.teardown && !1 !== c.teardown.call(e, h, g.handle) || fe.removeEvent(e, f, g.handle), delete u[f])
						} else
							for (f in u) fe.event.remove(e, f + t[d], n, i, !0);
					fe.isEmptyObject(u) && (delete g.handle, fe._removeData(e, "events"))
				}
			},
			trigger: function (t, n, i, r) {
				var o, s, a, l, d, u, c, p = [i || ie],
					f = ue.call(t, "type") ? t.type : t,
					h = ue.call(t, "namespace") ? t.namespace.split(".") : [];
				if (a = u = i = i || ie, 3 !== i.nodeType && 8 !== i.nodeType && !Ge.test(f + fe.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), s = f.indexOf(":") < 0 && "on" + f, t = t[fe.expando] ? t : new fe.Event(f, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = i), n = null == n ? [t] : fe.makeArray(n, [t]), d = fe.event.special[f] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, n))) {
					if (!r && !d.noBubble && !fe.isWindow(i)) {
						for (l = d.delegateType || f, Ge.test(l + f) || (a = a.parentNode); a; a = a.parentNode) p.push(a), u = a;
						u === (i.ownerDocument || ie) && p.push(u.defaultView || u.parentWindow || e)
					}
					for (c = 0;
						(a = p[c++]) && !t.isPropagationStopped();) t.type = c > 1 ? l : d.bindType || f, o = (fe._data(a, "events") || {})[t.type] && fe._data(a, "handle"), o && o.apply(a, n), (o = s && a[s]) && o.apply && je(a) && (t.result = o.apply(a, n), !1 === t.result && t.preventDefault());
					if (t.type = f, !r && !t.isDefaultPrevented() && (!d._default || !1 === d._default.apply(p.pop(), n)) && je(i) && s && i[f] && !fe.isWindow(i)) {
						u = i[s], u && (i[s] = null), fe.event.triggered = f;
						try {
							i[f]()
						} catch (e) {}
						fe.event.triggered = undefined, u && (i[s] = u)
					}
					return t.result
				}
			},
			dispatch: function (e) {
				e = fe.event.fix(e);
				var t, n, i, r, o, s = [],
					a = re.call(arguments),
					l = (fe._data(this, "events") || {})[e.type] || [],
					d = fe.event.special[e.type] || {};
				if (a[0] = e, e.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, e)) {
					for (s = fe.event.handlers.call(this, e, l), t = 0;
						(r = s[t++]) && !e.isPropagationStopped();)
						for (e.currentTarget = r.elem, n = 0;
							(o = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, (i = ((fe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) !== undefined && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
					return d.postDispatch && d.postDispatch.call(this, e), e.result
				}
			},
			handlers: function (e, t) {
				var n, i, r, o, s = [],
					a = t.delegateCount,
					l = e.target;
				if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
					for (; l != this; l = l.parentNode || this)
						if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
							for (i = [], n = 0; n < a; n++) o = t[n], r = o.selector + " ", i[r] === undefined && (i[r] = o.needsContext ? fe(r, this).index(l) > -1 : fe.find(r, this, null, [l]).length), i[r] && i.push(o);
							i.length && s.push({
								elem: l,
								handlers: i
							})
						}
				return a < t.length && s.push({
					elem: this,
					handlers: t.slice(a)
				}), s
			},
			fix: function (e) {
				if (e[fe.expando]) return e;
				var t, n, i, r = e.type,
					o = e,
					s = this.fixHooks[r];
				for (s || (this.fixHooks[r] = s = Je.test(r) ? this.mouseHooks : Ye.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new fe.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
				return e.target || (e.target = o.srcElement || ie), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
			},
			props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function (e, t) {
					return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
				}
			},
			mouseHooks: {
				props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function (e, t) {
					var n, i, r, o = t.button,
						s = t.fromElement;
					return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ie, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || o === undefined || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
				}
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					trigger: function () {
						if (this !== w() && this.focus) try {
							return this.focus(), !1
						} catch (e) {}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function () {
						if (this === w() && this.blur) return this.blur(), !1
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function () {
						if (fe.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
					},
					_default: function (e) {
						return fe.nodeName(e.target, "a")
					}
				},
				beforeunload: {
					postDispatch: function (e) {
						e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
					}
				}
			},
			simulate: function (e, t, n) {
				var i = fe.extend(new fe.Event, n, {
					type: e,
					isSimulated: !0
				});
				fe.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
			}
		}, fe.removeEvent = ie.removeEventListener ? function (e, t, n) {
			e.removeEventListener && e.removeEventListener(t, n)
		} : function (e, t, n) {
			var i = "on" + t;
			e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
		}, fe.Event = function (e, t) {
			if (!(this instanceof fe.Event)) return new fe.Event(e, t);
			e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? y : b) : this.type = e, t && fe.extend(this, t), this.timeStamp = e && e.timeStamp || fe.now(), this[fe.expando] = !0
		}, fe.Event.prototype = {
			constructor: fe.Event,
			isDefaultPrevented: b,
			isPropagationStopped: b,
			isImmediatePropagationStopped: b,
			preventDefault: function () {
				var e = this.originalEvent;
				this.isDefaultPrevented = y, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
			},
			stopPropagation: function () {
				var e = this.originalEvent;
				this.isPropagationStopped = y, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
			},
			stopImmediatePropagation: function () {
				var e = this.originalEvent;
				this.isImmediatePropagationStopped = y, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
			}
		}, fe.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function (e, t) {
			fe.event.special[e] = {
				delegateType: t,
				bindType: t,
				handle: function (e) {
					var n, i = this,
						r = e.relatedTarget,
						o = e.handleObj;
					return r && (r === i || fe.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
				}
			}
		}), ce.submit || (fe.event.special.submit = {
			setup: function () {
				if (fe.nodeName(this, "form")) return !1;
				fe.event.add(this, "click._submit keypress._submit", function (e) {
					var t = e.target,
						n = fe.nodeName(t, "input") || fe.nodeName(t, "button") ? fe.prop(t, "form") : undefined;
					n && !fe._data(n, "submit") && (fe.event.add(n, "submit._submit", function (e) {
						e._submitBubble = !0
					}), fe._data(n, "submit", !0))
				})
			},
			postDispatch: function (e) {
				e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && fe.event.simulate("submit", this.parentNode, e))
			},
			teardown: function () {
				if (fe.nodeName(this, "form")) return !1;
				fe.event.remove(this, "._submit")
			}
		}), ce.change || (fe.event.special.change = {
			setup: function () {
				if (Ve.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (fe.event.add(this, "propertychange._change", function (e) {
					"checked" === e.originalEvent.propertyName && (this._justChanged = !0)
				}), fe.event.add(this, "click._change", function (e) {
					this._justChanged && !e.isTrigger && (this._justChanged = !1), fe.event.simulate("change", this, e)
				})), !1;
				fe.event.add(this, "beforeactivate._change", function (e) {
					var t = e.target;
					Ve.test(t.nodeName) && !fe._data(t, "change") && (fe.event.add(t, "change._change", function (e) {
						!this.parentNode || e.isSimulated || e.isTrigger || fe.event.simulate("change", this.parentNode, e)
					}), fe._data(t, "change", !0))
				})
			},
			handle: function (e) {
				var t = e.target;
				if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
			},
			teardown: function () {
				return fe.event.remove(this, "._change"), !Ve.test(this.nodeName)
			}
		}), ce.focusin || fe.each({
			focus: "focusin",
			blur: "focusout"
		}, function (e, t) {
			var n = function (e) {
				fe.event.simulate(t, e.target, fe.event.fix(e))
			};
			fe.event.special[t] = {
				setup: function () {
					var i = this.ownerDocument || this,
						r = fe._data(i, t);
					r || i.addEventListener(e, n, !0), fe._data(i, t, (r || 0) + 1)
				},
				teardown: function () {
					var i = this.ownerDocument || this,
						r = fe._data(i, t) - 1;
					r ? fe._data(i, t, r) : (i.removeEventListener(e, n, !0), fe._removeData(i, t))
				}
			}
		}), fe.fn.extend({
			on: function (e, t, n, i) {
				return x(this, e, t, n, i)
			},
			one: function (e, t, n, i) {
				return x(this, e, t, n, i, 1)
			},
			off: function (e, t, n) {
				var i, r;
				if (e && e.preventDefault && e.handleObj) return i = e.handleObj, fe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
				if ("object" == typeof e) {
					for (r in e) this.off(r, t, e[r]);
					return this
				}
				return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = b), this.each(function () {
					fe.event.remove(this, e, n, t)
				})
			},
			trigger: function (e, t) {
				return this.each(function () {
					fe.event.trigger(e, t, this)
				})
			},
			triggerHandler: function (e, t) {
				var n = this[0];
				if (n) return fe.event.trigger(e, t, n, !0)
			}
		});
		var Ze = / jQuery\d+="(?:null|\d+)"/g,
			Ke = new RegExp("<(?:" + We + ")[\\s/>]", "i"),
			et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
			tt = /<script|<style|<link/i,
			nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
			it = /^true\/(.*)/,
			rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
			ot = f(ie),
			st = ot.appendChild(ie.createElement("div"));
		fe.extend({
			htmlPrefilter: function (e) {
				return e.replace(et, "<$1></$2>")
			},
			clone: function (e, t, n) {
				var i, r, o, s, a, l = fe.contains(e.ownerDocument, e);
				if (ce.html5Clone || fe.isXMLDoc(e) || !Ke.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (st.innerHTML = e.outerHTML, st.removeChild(o = st.firstChild)), !(ce.noCloneEvent && ce.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || fe.isXMLDoc(e)))
					for (i = h(o), a = h(e), s = 0; null != (r = a[s]); ++s) i[s] && $(r, i[s]);
				if (t)
					if (n)
						for (a = a || h(e), i = i || h(o), s = 0; null != (r = a[s]); s++) S(r, i[s]);
					else S(e, o);
				return i = h(o, "script"), i.length > 0 && m(i, !l && h(e, "script")), i = a = r = null, o
			},
			cleanData: function (e, t) {
				for (var n, i, r, o, s = 0, a = fe.expando, l = fe.cache, d = ce.attributes, u = fe.event.special; null != (n = e[s]); s++)
					if ((t || je(n)) && (r = n[a], o = r && l[r])) {
						if (o.events)
							for (i in o.events) u[i] ? fe.event.remove(n, i) : fe.removeEvent(n, i, o.handle);
						l[r] && (delete l[r], d || "undefined" == typeof n.removeAttribute ? n[a] = undefined : n.removeAttribute(a), ne.push(r))
					}
			}
		}), fe.fn.extend({
			domManip: E,
			detach: function (e) {
				return A(this, e, !0)
			},
			remove: function (e) {
				return A(this, e)
			},
			text: function (e) {
				return ze(this, function (e) {
					return e === undefined ? fe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ie).createTextNode(e))
				}, null, e, arguments.length)
			},
			append: function () {
				return E(this, arguments, function (e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						k(this, e).appendChild(e)
					}
				})
			},
			prepend: function () {
				return E(this, arguments, function (e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = k(this, e);
						t.insertBefore(e, t.firstChild)
					}
				})
			},
			before: function () {
				return E(this, arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this)
				})
			},
			after: function () {
				return E(this, arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
				})
			},
			empty: function () {
				for (var e, t = 0; null != (e = this[t]); t++) {
					for (1 === e.nodeType && fe.cleanData(h(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
					e.options && fe.nodeName(e, "select") && (e.options.length = 0)
				}
				return this
			},
			clone: function (e, t) {
				return e = null != e && e, t = null == t ? e : t, this.map(function () {
					return fe.clone(this, e, t)
				})
			},
			html: function (e) {
				return ze(this, function (e) {
					var t = this[0] || {},
						n = 0,
						i = this.length;
					if (e === undefined) return 1 === t.nodeType ? t.innerHTML.replace(Ze, "") : undefined;
					if ("string" == typeof e && !tt.test(e) && (ce.htmlSerialize || !Ke.test(e)) && (ce.leadingWhitespace || !_e.test(e)) && !Be[(Re.exec(e) || ["", ""])[1].toLowerCase()]) {
						e = fe.htmlPrefilter(e);
						try {
							for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (fe.cleanData(h(t, !1)), t.innerHTML = e);
							t = 0
						} catch (e) {}
					}
					t && this.empty().append(e)
				}, null, e, arguments.length)
			},
			replaceWith: function () {
				var e = [];
				return E(this, arguments, function (t) {
					var n = this.parentNode;
					fe.inArray(this, e) < 0 && (fe.cleanData(h(this)), n && n.replaceChild(t, this))
				}, e)
			}
		}), fe.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function (e, t) {
			fe.fn[e] = function (e) {
				for (var n, i = 0, r = [], o = fe(e), s = o.length - 1; i <= s; i++) n = i === s ? this : this.clone(!0), fe(o[i])[t](n), se.apply(r, n.get());
				return this.pushStack(r)
			}
		});
		var at, lt = {
				HTML: "block",
				BODY: "block"
			},
			dt = /^margin/,
			ut = new RegExp("^(" + qe + ")(?!px)[a-z%]+$", "i"),
			ct = function (e, t, n, i) {
				var r, o, s = {};
				for (o in t) s[o] = e.style[o], e.style[o] = t[o];
				r = n.apply(e, i || []);
				for (o in t) e.style[o] = s[o];
				return r
			},
			pt = ie.documentElement;
		! function () {
			function t() {
				var t, u, c = ie.documentElement;
				c.appendChild(l), d.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = r = a = !1, i = s = !0, e.getComputedStyle && (u = e.getComputedStyle(d), n = "1%" !== (u || {}).top, a = "2px" === (u || {}).marginLeft, r = "4px" === (u || {
						width: "4px"
					}).width,
					d.style.marginRight = "50%", i = "4px" === (u || {
						marginRight: "4px"
					}).marginRight, t = d.appendChild(ie.createElement("div")), t.style.cssText = d.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", d.style.width = "1px", s = !parseFloat((e.getComputedStyle(t) || {}).marginRight), d.removeChild(t)), d.style.display = "none", o = 0 === d.getClientRects().length, o && (d.style.display = "", d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", d.childNodes[0].style.borderCollapse = "separate", t = d.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", (o = 0 === t[0].offsetHeight) && (t[0].style.display = "", t[1].style.display = "none", o = 0 === t[0].offsetHeight)), c.removeChild(l)
			}
			var n, i, r, o, s, a, l = ie.createElement("div"),
				d = ie.createElement("div");
			d.style && (d.style.cssText = "float:left;opacity:.5", ce.opacity = "0.5" === d.style.opacity, ce.cssFloat = !!d.style.cssFloat, d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", ce.clearCloneStyle = "content-box" === d.style.backgroundClip, l = ie.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", d.innerHTML = "", l.appendChild(d), ce.boxSizing = "" === d.style.boxSizing || "" === d.style.MozBoxSizing || "" === d.style.WebkitBoxSizing, fe.extend(ce, {
				reliableHiddenOffsets: function () {
					return null == n && t(), o
				},
				boxSizingReliable: function () {
					return null == n && t(), r
				},
				pixelMarginRight: function () {
					return null == n && t(), i
				},
				pixelPosition: function () {
					return null == n && t(), n
				},
				reliableMarginRight: function () {
					return null == n && t(), s
				},
				reliableMarginLeft: function () {
					return null == n && t(), a
				}
			}))
		}();
		var ft, ht, mt = /^(top|right|bottom|left)$/;
		e.getComputedStyle ? (ft = function (t) {
			var n = t.ownerDocument.defaultView;
			return n && n.opener || (n = e), n.getComputedStyle(t)
		}, ht = function (e, t, n) {
			var i, r, o, s, a = e.style;
			return n = n || ft(e), s = n ? n.getPropertyValue(t) || n[t] : undefined, "" !== s && s !== undefined || fe.contains(e.ownerDocument, e) || (s = fe.style(e, t)), n && !ce.pixelMarginRight() && ut.test(s) && dt.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o), s === undefined ? s : s + ""
		}) : pt.currentStyle && (ft = function (e) {
			return e.currentStyle
		}, ht = function (e, t, n) {
			var i, r, o, s, a = e.style;
			return n = n || ft(e), s = n ? n[t] : undefined, null == s && a && a[t] && (s = a[t]), ut.test(s) && !mt.test(t) && (i = a.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : s, s = a.pixelLeft + "px", a.left = i, o && (r.left = o)), s === undefined ? s : s + "" || "auto"
		});
		var gt = /alpha\([^)]*\)/i,
			vt = /opacity\s*=\s*([^)]*)/i,
			yt = /^(none|table(?!-c[ea]).+)/,
			bt = new RegExp("^(" + qe + ")(.*)$", "i"),
			wt = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			xt = {
				letterSpacing: "0",
				fontWeight: "400"
			},
			kt = ["Webkit", "O", "Moz", "ms"],
			Tt = ie.createElement("div").style;
		fe.extend({
			cssHooks: {
				opacity: {
					get: function (e, t) {
						if (t) {
							var n = ht(e, "opacity");
							return "" === n ? "1" : n
						}
					}
				}
			},
			cssNumber: {
				animationIterationCount: !0,
				columnCount: !0,
				fillOpacity: !0,
				flexGrow: !0,
				flexShrink: !0,
				fontWeight: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {
				"float": ce.cssFloat ? "cssFloat" : "styleFloat"
			},
			style: function (e, t, n, i) {
				if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
					var r, o, s, a = fe.camelCase(t),
						l = e.style;
					if (t = fe.cssProps[a] || (fe.cssProps[a] = H(a) || a), s = fe.cssHooks[t] || fe.cssHooks[a], n === undefined) return s && "get" in s && (r = s.get(e, !1, i)) !== undefined ? r : l[t];
					if (o = typeof n, "string" === o && (r = Oe.exec(n)) && r[1] && (n = p(e, t, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (fe.cssNumber[a] ? "" : "px")), ce.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(s && "set" in s && (n = s.set(e, n, i)) === undefined))) try {
						l[t] = n
					} catch (e) {}
				}
			},
			css: function (e, t, n, i) {
				var r, o, s, a = fe.camelCase(t);
				return t = fe.cssProps[a] || (fe.cssProps[a] = H(a) || a), s = fe.cssHooks[t] || fe.cssHooks[a], s && "get" in s && (o = s.get(e, !0, n)), o === undefined && (o = ht(e, t, i)), "normal" === o && t in xt && (o = xt[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
			}
		}), fe.each(["height", "width"], function (e, t) {
			fe.cssHooks[t] = {
				get: function (e, n, i) {
					if (n) return yt.test(fe.css(e, "display")) && 0 === e.offsetWidth ? ct(e, wt, function () {
						return M(e, t, i)
					}) : M(e, t, i)
				},
				set: function (e, n, i) {
					var r = i && ft(e);
					return q(e, n, i ? O(e, t, i, ce.boxSizing && "border-box" === fe.css(e, "boxSizing", !1, r), r) : 0)
				}
			}
		}), ce.opacity || (fe.cssHooks.opacity = {
			get: function (e, t) {
				return vt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
			},
			set: function (e, t) {
				var n = e.style,
					i = e.currentStyle,
					r = fe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
					o = i && i.filter || n.filter || "";
				n.zoom = 1, (t >= 1 || "" === t) && "" === fe.trim(o.replace(gt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = gt.test(o) ? o.replace(gt, r) : o + " " + r)
			}
		}), fe.cssHooks.marginRight = j(ce.reliableMarginRight, function (e, t) {
			if (t) return ct(e, {
				display: "inline-block"
			}, ht, [e, "marginRight"])
		}), fe.cssHooks.marginLeft = j(ce.reliableMarginLeft, function (e, t) {
			if (t) return (parseFloat(ht(e, "marginLeft")) || (fe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ct(e, {
				marginLeft: 0
			}, function () {
				return e.getBoundingClientRect().left
			}) : 0)) + "px"
		}), fe.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function (e, t) {
			fe.cssHooks[e + t] = {
				expand: function (n) {
					for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Me[i] + t] = o[i] || o[i - 2] || o[0];
					return r
				}
			}, dt.test(e) || (fe.cssHooks[e + t].set = q)
		}), fe.fn.extend({
			css: function (e, t) {
				return ze(this, function (e, t, n) {
					var i, r, o = {},
						s = 0;
					if (fe.isArray(t)) {
						for (i = ft(e), r = t.length; s < r; s++) o[t[s]] = fe.css(e, t[s], !1, i);
						return o
					}
					return n !== undefined ? fe.style(e, t, n) : fe.css(e, t)
				}, e, t, arguments.length > 1)
			},
			show: function () {
				return D(this, !0)
			},
			hide: function () {
				return D(this)
			},
			toggle: function (e) {
				return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
					Pe(this) ? fe(this).show() : fe(this).hide()
				})
			}
		}), fe.Tween = P, P.prototype = {
			constructor: P,
			init: function (e, t, n, i, r, o) {
				this.elem = e, this.prop = n, this.easing = r || fe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (fe.cssNumber[n] ? "" : "px")
			},
			cur: function () {
				var e = P.propHooks[this.prop];
				return e && e.get ? e.get(this) : P.propHooks._default.get(this)
			},
			run: function (e) {
				var t, n = P.propHooks[this.prop];
				return this.options.duration ? this.pos = t = fe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : P.propHooks._default.set(this), this
			}
		}, P.prototype.init.prototype = P.prototype, P.propHooks = {
			_default: {
				get: function (e) {
					var t;
					return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = fe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
				},
				set: function (e) {
					fe.fx.step[e.prop] ? fe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[fe.cssProps[e.prop]] && !fe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : fe.style(e.elem, e.prop, e.now + e.unit)
				}
			}
		}, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
			set: function (e) {
				e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
			}
		}, fe.easing = {
			linear: function (e) {
				return e
			},
			swing: function (e) {
				return .5 - Math.cos(e * Math.PI) / 2
			},
			_default: "swing"
		}, fe.fx = P.prototype.init, fe.fx.step = {};
		var Ct, St, $t = /^(?:toggle|show|hide)$/,
			Et = /queueHooks$/;
		fe.Animation = fe.extend(W, {
				tweeners: {
					"*": [function (e, t) {
						var n = this.createTween(e, t);
						return p(n.elem, e, Oe.exec(t), n), n
					}]
				},
				tweener: function (e, t) {
					fe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ae);
					for (var n, i = 0, r = e.length; i < r; i++) n = e[i], W.tweeners[n] = W.tweeners[n] || [], W.tweeners[n].unshift(t)
				},
				prefilters: [I],
				prefilter: function (e, t) {
					t ? W.prefilters.unshift(e) : W.prefilters.push(e)
				}
			}), fe.speed = function (e, t, n) {
				var i = e && "object" == typeof e ? fe.extend({}, e) : {
					complete: n || !n && t || fe.isFunction(e) && e,
					duration: e,
					easing: n && t || t && !fe.isFunction(t) && t
				};
				return i.duration = fe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in fe.fx.speeds ? fe.fx.speeds[i.duration] : fe.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
					fe.isFunction(i.old) && i.old.call(this), i.queue && fe.dequeue(this, i.queue)
				}, i
			}, fe.fn.extend({
				fadeTo: function (e, t, n, i) {
					return this.filter(Pe).css("opacity", 0).show().end().animate({
						opacity: t
					}, e, n, i)
				},
				animate: function (e, t, n, i) {
					var r = fe.isEmptyObject(e),
						o = fe.speed(t, n, i),
						s = function () {
							var t = W(this, fe.extend({}, e), o);
							(r || fe._data(this, "finish")) && t.stop(!0)
						};
					return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
				},
				stop: function (e, t, n) {
					var i = function (e) {
						var t = e.stop;
						delete e.stop, t(n)
					};
					return "string" != typeof e && (n = t, t = e, e = undefined), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
						var t = !0,
							r = null != e && e + "queueHooks",
							o = fe.timers,
							s = fe._data(this);
						if (r) s[r] && s[r].stop && i(s[r]);
						else
							for (r in s) s[r] && s[r].stop && Et.test(r) && i(s[r]);
						for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
						!t && n || fe.dequeue(this, e)
					})
				},
				finish: function (e) {
					return !1 !== e && (e = e || "fx"), this.each(function () {
						var t, n = fe._data(this),
							i = n[e + "queue"],
							r = n[e + "queueHooks"],
							o = fe.timers,
							s = i ? i.length : 0;
						for (n.finish = !0, fe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
						for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
						delete n.finish
					})
				}
			}), fe.each(["toggle", "show", "hide"], function (e, t) {
				var n = fe.fn[t];
				fe.fn[t] = function (e, i, r) {
					return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, i, r)
				}
			}), fe.each({
				slideDown: F("show"),
				slideUp: F("hide"),
				slideToggle: F("toggle"),
				fadeIn: {
					opacity: "show"
				},
				fadeOut: {
					opacity: "hide"
				},
				fadeToggle: {
					opacity: "toggle"
				}
			}, function (e, t) {
				fe.fn[e] = function (e, n, i) {
					return this.animate(t, e, n, i)
				}
			}), fe.timers = [], fe.fx.tick = function () {
				var e, t = fe.timers,
					n = 0;
				for (Ct = fe.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
				t.length || fe.fx.stop(), Ct = undefined
			}, fe.fx.timer = function (e) {
				fe.timers.push(e), e() ? fe.fx.start() : fe.timers.pop()
			}, fe.fx.interval = 13, fe.fx.start = function () {
				St || (St = e.setInterval(fe.fx.tick, fe.fx.interval))
			}, fe.fx.stop = function () {
				e.clearInterval(St), St = null
			}, fe.fx.speeds = {
				slow: 600,
				fast: 200,
				_default: 400
			}, fe.fn.delay = function (t, n) {
				return t = fe.fx ? fe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
					var r = e.setTimeout(n, t);
					i.stop = function () {
						e.clearTimeout(r)
					}
				})
			},
			function () {
				var e, t = ie.createElement("input"),
					n = ie.createElement("div"),
					i = ie.createElement("select"),
					r = i.appendChild(ie.createElement("option"));
				n = ie.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", ce.getSetAttribute = "t" !== n.className, ce.style = /top/.test(e.getAttribute("style")), ce.hrefNormalized = "/a" === e.getAttribute("href"), ce.checkOn = !!t.value, ce.optSelected = r.selected, ce.enctype = !!ie.createElement("form").enctype, i.disabled = !0, ce.optDisabled = !r.disabled, t = ie.createElement("input"), t.setAttribute("value", ""), ce.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ce.radioValue = "t" === t.value
			}();
		var At = /\r/g,
			Nt = /[\x20\t\r\n\f]+/g;
		fe.fn.extend({
			val: function (e) {
				var t, n, i, r = this[0]; {
					if (arguments.length) return i = fe.isFunction(e), this.each(function (n) {
						var r;
						1 === this.nodeType && (r = i ? e.call(this, n, fe(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : fe.isArray(r) && (r = fe.map(r, function (e) {
							return null == e ? "" : e + ""
						})), (t = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && t.set(this, r, "value") !== undefined || (this.value = r))
					});
					if (r) return (t = fe.valHooks[r.type] || fe.valHooks[r.nodeName.toLowerCase()]) && "get" in t && (n = t.get(r, "value")) !== undefined ? n : (n = r.value, "string" == typeof n ? n.replace(At, "") : null == n ? "" : n)
				}
			}
		}), fe.extend({
			valHooks: {
				option: {
					get: function (e) {
						var t = fe.find.attr(e, "value");
						return null != t ? t : fe.trim(fe.text(e)).replace(Nt, " ")
					}
				},
				select: {
					get: function (e) {
						for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, s = o ? null : [], a = o ? r + 1 : i.length, l = r < 0 ? a : o ? r : 0; l < a; l++)
							if (n = i[l], (n.selected || l === r) && (ce.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !fe.nodeName(n.parentNode, "optgroup"))) {
								if (t = fe(n).val(), o) return t;
								s.push(t)
							}
						return s
					},
					set: function (e, t) {
						for (var n, i, r = e.options, o = fe.makeArray(t), s = r.length; s--;)
							if (i = r[s], fe.inArray(fe.valHooks.option.get(i), o) > -1) try {
								i.selected = n = !0
							} catch (e) {
								i.scrollHeight
							} else i.selected = !1;
						return n || (e.selectedIndex = -1), r
					}
				}
			}
		}), fe.each(["radio", "checkbox"], function () {
			fe.valHooks[this] = {
				set: function (e, t) {
					if (fe.isArray(t)) return e.checked = fe.inArray(fe(e).val(), t) > -1
				}
			}, ce.checkOn || (fe.valHooks[this].get = function (e) {
				return null === e.getAttribute("value") ? "on" : e.value
			})
		});
		var Lt, jt, Ht = fe.expr.attrHandle,
			Dt = /^(?:checked|selected)$/i,
			qt = ce.getSetAttribute,
			Ot = ce.input;
		fe.fn.extend({
			attr: function (e, t) {
				return ze(this, fe.attr, e, t, arguments.length > 1)
			},
			removeAttr: function (e) {
				return this.each(function () {
					fe.removeAttr(this, e)
				})
			}
		}), fe.extend({
			attr: function (e, t, n) {
				var i, r, o = e.nodeType;
				if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? fe.prop(e, t, n) : (1 === o && fe.isXMLDoc(e) || (t = t.toLowerCase(), r = fe.attrHooks[t] || (fe.expr.match.bool.test(t) ? jt : Lt)), n !== undefined ? null === n ? void fe.removeAttr(e, t) : r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = fe.find.attr(e, t), null == i ? undefined : i))
			},
			attrHooks: {
				type: {
					set: function (e, t) {
						if (!ce.radioValue && "radio" === t && fe.nodeName(e, "input")) {
							var n = e.value;
							return e.setAttribute("type", t), n && (e.value = n), t
						}
					}
				}
			},
			removeAttr: function (e, t) {
				var n, i, r = 0,
					o = t && t.match(Ae);
				if (o && 1 === e.nodeType)
					for (; n = o[r++];) i = fe.propFix[n] || n, fe.expr.match.bool.test(n) ? Ot && qt || !Dt.test(n) ? e[i] = !1 : e[fe.camelCase("default-" + n)] = e[i] = !1 : fe.attr(e, n, ""), e.removeAttribute(qt ? n : i)
			}
		}), jt = {
			set: function (e, t, n) {
				return !1 === t ? fe.removeAttr(e, n) : Ot && qt || !Dt.test(n) ? e.setAttribute(!qt && fe.propFix[n] || n, n) : e[fe.camelCase("default-" + n)] = e[n] = !0, n
			}
		}, fe.each(fe.expr.match.bool.source.match(/\w+/g), function (e, t) {
			var n = Ht[t] || fe.find.attr;
			Ot && qt || !Dt.test(t) ? Ht[t] = function (e, t, i) {
				var r, o;
				return i || (o = Ht[t], Ht[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, Ht[t] = o), r
			} : Ht[t] = function (e, t, n) {
				if (!n) return e[fe.camelCase("default-" + t)] ? t.toLowerCase() : null
			}
		}), Ot && qt || (fe.attrHooks.value = {
			set: function (e, t, n) {
				if (!fe.nodeName(e, "input")) return Lt && Lt.set(e, t, n);
				e.defaultValue = t
			}
		}), qt || (Lt = {
			set: function (e, t, n) {
				var i = e.getAttributeNode(n);
				if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n)) return t
			}
		}, Ht.id = Ht.name = Ht.coords = function (e, t, n) {
			var i;
			if (!n) return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
		}, fe.valHooks.button = {
			get: function (e, t) {
				var n = e.getAttributeNode(t);
				if (n && n.specified) return n.value
			},
			set: Lt.set
		}, fe.attrHooks.contenteditable = {
			set: function (e, t, n) {
				Lt.set(e, "" !== t && t, n)
			}
		}, fe.each(["width", "height"], function (e, t) {
			fe.attrHooks[t] = {
				set: function (e, n) {
					if ("" === n) return e.setAttribute(t, "auto"), n
				}
			}
		})), ce.style || (fe.attrHooks.style = {
			get: function (e) {
				return e.style.cssText || undefined
			},
			set: function (e, t) {
				return e.style.cssText = t + ""
			}
		});
		var Mt = /^(?:input|select|textarea|button|object)$/i,
			Pt = /^(?:a|area)$/i;
		fe.fn.extend({
			prop: function (e, t) {
				return ze(this, fe.prop, e, t, arguments.length > 1)
			},
			removeProp: function (e) {
				return e = fe.propFix[e] || e, this.each(function () {
					try {
						this[e] = undefined, delete this[e]
					} catch (e) {}
				})
			}
		}), fe.extend({
			prop: function (e, t, n) {
				var i, r, o = e.nodeType;
				if (3 !== o && 8 !== o && 2 !== o) return 1 === o && fe.isXMLDoc(e) || (t = fe.propFix[t] || t, r = fe.propHooks[t]), n !== undefined ? r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
			},
			propHooks: {
				tabIndex: {
					get: function (e) {
						var t = fe.find.attr(e, "tabindex");
						return t ? parseInt(t, 10) : Mt.test(e.nodeName) || Pt.test(e.nodeName) && e.href ? 0 : -1
					}
				}
			},
			propFix: {
				"for": "htmlFor",
				"class": "className"
			}
		}), ce.hrefNormalized || fe.each(["href", "src"], function (e, t) {
			fe.propHooks[t] = {
				get: function (e) {
					return e.getAttribute(t, 4)
				}
			}
		}), ce.optSelected || (fe.propHooks.selected = {
			get: function (e) {
				var t = e.parentNode;
				return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
			},
			set: function (e) {
				var t = e.parentNode;
				t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
			}
		}), fe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
			fe.propFix[this.toLowerCase()] = this
		}), ce.enctype || (fe.propFix.enctype = "encoding");
		var zt = /[\t\r\n\f]/g;
		fe.fn.extend({
			addClass: function (e) {
				var t, n, i, r, o, s, a, l = 0;
				if (fe.isFunction(e)) return this.each(function (t) {
					fe(this).addClass(e.call(this, t, B(this)))
				});
				if ("string" == typeof e && e)
					for (t = e.match(Ae) || []; n = this[l++];)
						if (r = B(n), i = 1 === n.nodeType && (" " + r + " ").replace(zt, " ")) {
							for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
							a = fe.trim(i), r !== a && fe.attr(n, "class", a)
						}
				return this
			},
			removeClass: function (e) {
				var t, n, i, r, o, s, a, l = 0;
				if (fe.isFunction(e)) return this.each(function (t) {
					fe(this).removeClass(e.call(this, t, B(this)))
				});
				if (!arguments.length) return this.attr("class", "");
				if ("string" == typeof e && e)
					for (t = e.match(Ae) || []; n = this[l++];)
						if (r = B(n), i = 1 === n.nodeType && (" " + r + " ").replace(zt, " ")) {
							for (s = 0; o = t[s++];)
								for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
							a = fe.trim(i), r !== a && fe.attr(n, "class", a)
						}
				return this
			},
			toggleClass: function (e, t) {
				var n = typeof e;
				return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : fe.isFunction(e) ? this.each(function (n) {
					fe(this).toggleClass(e.call(this, n, B(this), t), t)
				}) : this.each(function () {
					var t, i, r, o;
					if ("string" === n)
						for (i = 0, r = fe(this), o = e.match(Ae) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
					else e !== undefined && "boolean" !== n || (t = B(this), t && fe._data(this, "__className__", t), fe.attr(this, "class", t || !1 === e ? "" : fe._data(this, "__className__") || ""))
				})
			},
			hasClass: function (e) {
				var t, n, i = 0;
				for (t = " " + e + " "; n = this[i++];)
					if (1 === n.nodeType && (" " + B(n) + " ").replace(zt, " ").indexOf(t) > -1) return !0;
				return !1
			}
		}), fe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
			fe.fn[t] = function (e, n) {
				return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
			}
		}), fe.fn.extend({
			hover: function (e, t) {
				return this.mouseenter(e).mouseleave(t || e)
			}
		});
		var Ft = e.location,
			Rt = fe.now(),
			It = /\?/,
			_t = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
		fe.parseJSON = function (t) {
			if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
			var n, i = null,
				r = fe.trim(t + "");
			return r && !fe.trim(r.replace(_t, function (e, t, r, o) {
				return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !o - !r, "")
			})) ? Function("return " + r)() : fe.error("Invalid JSON: " + t)
		}, fe.parseXML = function (t) {
			var n, i;
			if (!t || "string" != typeof t) return null;
			try {
				e.DOMParser ? (i = new e.DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
			} catch (e) {
				n = undefined
			}
			return n && n.documentElement && !n.getElementsByTagName("parsererror").length || fe.error("Invalid XML: " + t), n
		};
		var Wt = /#.*$/,
			Bt = /([?&])_=[^&]*/,
			Xt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
			Ut = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			Vt = /^(?:GET|HEAD)$/,
			Yt = /^\/\//,
			Jt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
			Gt = {},
			Qt = {},
			Zt = "*/".concat("*"),
			Kt = Ft.href,
			en = Jt.exec(Kt.toLowerCase()) || [];
		fe.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: Kt,
				type: "GET",
				isLocal: Ut.test(en[1]),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": Zt,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents: {
					xml: /\bxml\b/,
					html: /\bhtml/,
					json: /\bjson\b/
				},
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
				converters: {
					"* text": String,
					"text html": !0,
					"text json": fe.parseJSON,
					"text xml": fe.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function (e, t) {
				return t ? V(V(e, fe.ajaxSettings), t) : V(fe.ajaxSettings, e)
			},
			ajaxPrefilter: X(Gt),
			ajaxTransport: X(Qt),
			ajax: function (t, n) {
				function i(t, n, i, r) {
					var o, c, y, b, x, T = n;
					2 !== w && (w = 2, l && e.clearTimeout(l), u = undefined, a = r || "", k.readyState = t > 0 ? 4 : 0, o = t >= 200 && t < 300 || 304 === t, i && (b = Y(p, k, i)), b = J(p, b, k, o), o ? (p.ifModified && (x = k.getResponseHeader("Last-Modified"), x && (fe.lastModified[s] = x), (x = k.getResponseHeader("etag")) && (fe.etag[s] = x)), 204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, c = b.data, y = b.error, o = !y)) : (y = T, !t && T || (T = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (n || T) + "", o ? m.resolveWith(f, [c, T, k]) : m.rejectWith(f, [k, T, y]), k.statusCode(v), v = undefined, d && h.trigger(o ? "ajaxSuccess" : "ajaxError", [k, p, o ? c : y]), g.fireWith(f, [k, T]), d && (h.trigger("ajaxComplete", [k, p]), --fe.active || fe.event.trigger("ajaxStop")))
				}
				"object" == typeof t && (n = t, t = undefined), n = n || {};
				var r, o, s, a, l, d, u, c, p = fe.ajaxSetup({}, n),
					f = p.context || p,
					h = p.context && (f.nodeType || f.jquery) ? fe(f) : fe.event,
					m = fe.Deferred(),
					g = fe.Callbacks("once memory"),
					v = p.statusCode || {},
					y = {},
					b = {},
					w = 0,
					x = "canceled",
					k = {
						readyState: 0,
						getResponseHeader: function (e) {
							var t;
							if (2 === w) {
								if (!c)
									for (c = {}; t = Xt.exec(a);) c[t[1].toLowerCase()] = t[2];
								t = c[e.toLowerCase()]
							}
							return null == t ? null : t
						},
						getAllResponseHeaders: function () {
							return 2 === w ? a : null
						},
						setRequestHeader: function (e, t) {
							var n = e.toLowerCase();
							return w || (e = b[n] = b[n] || e, y[e] = t), this
						},
						overrideMimeType: function (e) {
							return w || (p.mimeType = e), this
						},
						statusCode: function (e) {
							var t;
							if (e)
								if (w < 2)
									for (t in e) v[t] = [v[t], e[t]];
								else k.always(e[k.status]);
							return this
						},
						abort: function (e) {
							var t = e || x;
							return u && u.abort(t), i(0, t), this
						}
					};
				if (m.promise(k).complete = g.add, k.success = k.done, k.error = k.fail, p.url = ((t || p.url || Kt) + "").replace(Wt, "").replace(Yt, en[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = fe.trim(p.dataType || "*").toLowerCase().match(Ae) || [""], null == p.crossDomain && (r = Jt.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === en[1] && r[2] === en[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (en[3] || ("http:" === en[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = fe.param(p.data, p.traditional)), U(Gt, p, n, k), 2 === w) return k;
				d = fe.event && p.global, d && 0 == fe.active++ && fe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Vt.test(p.type), s = p.url, p.hasContent || (p.data && (s = p.url += (It.test(s) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = Bt.test(s) ? s.replace(Bt, "$1_=" + Rt++) : s + (It.test(s) ? "&" : "?") + "_=" + Rt++)), p.ifModified && (fe.lastModified[s] && k.setRequestHeader("If-Modified-Since", fe.lastModified[s]), fe.etag[s] && k.setRequestHeader("If-None-Match", fe.etag[s])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Zt + "; q=0.01" : "") : p.accepts["*"]);
				for (o in p.headers) k.setRequestHeader(o, p.headers[o]);
				if (p.beforeSend && (!1 === p.beforeSend.call(f, k, p) || 2 === w)) return k.abort();
				x = "abort";
				for (o in {
						success: 1,
						error: 1,
						complete: 1
					}) k[o](p[o]);
				if (u = U(Qt, p, n, k)) {
					if (k.readyState = 1, d && h.trigger("ajaxSend", [k, p]), 2 === w) return k;
					p.async && p.timeout > 0 && (l = e.setTimeout(function () {
						k.abort("timeout")
					}, p.timeout));
					try {
						w = 1, u.send(y, i)
					} catch (e) {
						if (!(w < 2)) throw e;
						i(-1, e)
					}
				} else i(-1, "No Transport");
				return k
			},
			getJSON: function (e, t, n) {
				return fe.get(e, t, n, "json")
			},
			getScript: function (e, t) {
				return fe.get(e, undefined, t, "script")
			}
		}), fe.each(["get", "post"], function (e, t) {
			fe[t] = function (e, n, i, r) {
				return fe.isFunction(n) && (r = r || i, i = n, n = undefined), fe.ajax(fe.extend({
					url: e,
					type: t,
					dataType: r,
					data: n,
					success: i
				}, fe.isPlainObject(e) && e))
			}
		}), fe._evalUrl = function (e) {
			return fe.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				cache: !0,
				async: !1,
				global: !1,
				"throws": !0
			})
		}, fe.fn.extend({
			wrapAll: function (e) {
				if (fe.isFunction(e)) return this.each(function (t) {
					fe(this).wrapAll(e.call(this, t))
				});
				if (this[0]) {
					var t = fe(e, this[0].ownerDocument).eq(0).clone(!0);
					this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
						for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
						return e
					}).append(this)
				}
				return this
			},
			wrapInner: function (e) {
				return fe.isFunction(e) ? this.each(function (t) {
					fe(this).wrapInner(e.call(this, t))
				}) : this.each(function () {
					var t = fe(this),
						n = t.contents();
					n.length ? n.wrapAll(e) : t.append(e)
				})
			},
			wrap: function (e) {
				var t = fe.isFunction(e);
				return this.each(function (n) {
					fe(this).wrapAll(t ? e.call(this, n) : e)
				})
			},
			unwrap: function () {
				return this.parent().each(function () {
					fe.nodeName(this, "body") || fe(this).replaceWith(this.childNodes)
				}).end()
			}
		}), fe.expr.filters.hidden = function (e) {
			return ce.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : Q(e)
		}, fe.expr.filters.visible = function (e) {
			return !fe.expr.filters.hidden(e)
		};
		var tn = /%20/g,
			nn = /\[\]$/,
			rn = /\r?\n/g,
			on = /^(?:submit|button|image|reset|file)$/i,
			sn = /^(?:input|select|textarea|keygen)/i;
		fe.param = function (e, t) {
			var n, i = [],
				r = function (e, t) {
					t = fe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
				};
			if (t === undefined && (t = fe.ajaxSettings && fe.ajaxSettings.traditional), fe.isArray(e) || e.jquery && !fe.isPlainObject(e)) fe.each(e, function () {
				r(this.name, this.value)
			});
			else
				for (n in e) Z(n, e[n], t, r);
			return i.join("&").replace(tn, "+")
		}, fe.fn.extend({
			serialize: function () {
				return fe.param(this.serializeArray())
			},
			serializeArray: function () {
				return this.map(function () {
					var e = fe.prop(this, "elements");
					return e ? fe.makeArray(e) : this
				}).filter(function () {
					var e = this.type;
					return this.name && !fe(this).is(":disabled") && sn.test(this.nodeName) && !on.test(e) && (this.checked || !Fe.test(e))
				}).map(function (e, t) {
					var n = fe(this).val();
					return null == n ? null : fe.isArray(n) ? fe.map(n, function (e) {
						return {
							name: t.name,
							value: e.replace(rn, "\r\n")
						}
					}) : {
						name: t.name,
						value: n.replace(rn, "\r\n")
					}
				}).get()
			}
		}), fe.ajaxSettings.xhr = e.ActiveXObject !== undefined ? function () {
			return this.isLocal ? ee() : ie.documentMode > 8 ? K() : /^(get|post|head|put|delete|options)$/i.test(this.type) && K() || ee()
		} : K;
		var an = 0,
			ln = {},
			dn = fe.ajaxSettings.xhr();
		e.attachEvent && e.attachEvent("onunload", function () {
			for (var e in ln) ln[e](undefined, !0)
		}), ce.cors = !!dn && "withCredentials" in dn, dn = ce.ajax = !!dn, dn && fe.ajaxTransport(function (t) {
			if (!t.crossDomain || ce.cors) {
				var n;
				return {
					send: function (i, r) {
						var o, s = t.xhr(),
							a = ++an;
						if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
							for (o in t.xhrFields) s[o] = t.xhrFields[o];
						t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
						for (o in i) i[o] !== undefined && s.setRequestHeader(o, i[o] + "");
						s.send(t.hasContent && t.data || null), n = function (e, i) {
							var o, l, d;
							if (n && (i || 4 === s.readyState))
								if (delete ln[a], n = undefined, s.onreadystatechange = fe.noop, i) 4 !== s.readyState && s.abort();
								else {
									d = {}, o = s.status, "string" == typeof s.responseText && (d.text = s.responseText);
									try {
										l = s.statusText
									} catch (e) {
										l = ""
									}
									o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = d.text ? 200 : 404
								}
							d && r(o, l, d, s.getAllResponseHeaders())
						}, t.async ? 4 === s.readyState ? e.setTimeout(n) : s.onreadystatechange = ln[a] = n : n()
					},
					abort: function () {
						n && n(undefined, !0)
					}
				}
			}
		}), fe.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /\b(?:java|ecma)script\b/
			},
			converters: {
				"text script": function (e) {
					return fe.globalEval(e), e
				}
			}
		}), fe.ajaxPrefilter("script", function (e) {
			e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
		}), fe.ajaxTransport("script", function (e) {
			if (e.crossDomain) {
				var t, n = ie.head || fe("head")[0] || ie.documentElement;
				return {
					send: function (i, r) {
						t = ie.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
							(n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
						}, n.insertBefore(t, n.firstChild)
					},
					abort: function () {
						t && t.onload(undefined, !0)
					}
				}
			}
		});
		var un = [],
			cn = /(=)\?(?=&|$)|\?\?/;
		fe.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function () {
				var e = un.pop() || fe.expando + "_" + Rt++;
				return this[e] = !0, e
			}
		}), fe.ajaxPrefilter("json jsonp", function (t, n, i) {
			var r, o, s, a = !1 !== t.jsonp && (cn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && cn.test(t.data) && "data");
			if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = fe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(cn, "$1" + r) : !1 !== t.jsonp && (t.url += (It.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
				return s || fe.error(r + " was not called"), s[0]
			}, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
				s = arguments
			}, i.always(function () {
				o === undefined ? fe(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, un.push(r)), s && fe.isFunction(o) && o(s[0]), s = o = undefined
			}), "script"
		}), fe.parseHTML = function (e, t, n) {
			if (!e || "string" != typeof e) return null;
			"boolean" == typeof t && (n = t, t = !1), t = t || ie;
			var i = ke.exec(e),
				r = !n && [];
			return i ? [t.createElement(i[1])] : (i = v([e], t, r), r && r.length && fe(r).remove(), fe.merge([], i.childNodes))
		};
		var pn = fe.fn.load;
		fe.fn.load = function (e, t, n) {
			if ("string" != typeof e && pn) return pn.apply(this, arguments);
			var i, r, o, s = this,
				a = e.indexOf(" ");
			return a > -1 && (i = fe.trim(e.slice(a, e.length)), e = e.slice(0, a)), fe.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (r = "POST"), s.length > 0 && fe.ajax({
				url: e,
				type: r || "GET",
				dataType: "html",
				data: t
			}).done(function (e) {
				o = arguments, s.html(i ? fe("<div>").append(fe.parseHTML(e)).find(i) : e)
			}).always(n && function (e, t) {
				s.each(function () {
					n.apply(this, o || [e.responseText, t, e])
				})
			}), this
		}, fe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
			fe.fn[t] = function (e) {
				return this.on(t, e)
			}
		}), fe.expr.filters.animated = function (e) {
			return fe.grep(fe.timers, function (t) {
				return e === t.elem
			}).length
		}, fe.offset = {
			setOffset: function (e, t, n) {
				var i, r, o, s, a, l, d, u = fe.css(e, "position"),
					c = fe(e),
					p = {};
				"static" === u && (e.style.position = "relative"), a = c.offset(), o = fe.css(e, "top"), l = fe.css(e, "left"), d = ("absolute" === u || "fixed" === u) && fe.inArray("auto", [o, l]) > -1, d ? (i = c.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), fe.isFunction(t) && (t = t.call(e, n, fe.extend({}, a))), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + r), "using" in t ? t.using.call(e, p) : c.css(p)
			}
		}, fe.fn.extend({
			offset: function (e) {
				if (arguments.length) return e === undefined ? this : this.each(function (t) {
					fe.offset.setOffset(this, e, t)
				});
				var t, n, i = {
						top: 0,
						left: 0
					},
					r = this[0],
					o = r && r.ownerDocument;
				if (o) return t = o.documentElement, fe.contains(t, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = te(o), {
					top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
					left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
				}) : i
			},
			position: function () {
				if (this[0]) {
					var e, t, n = {
							top: 0,
							left: 0
						},
						i = this[0];
					return "fixed" === fe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), fe.nodeName(e[0], "html") || (n = e.offset()), n.top += fe.css(e[0], "borderTopWidth", !0), n.left += fe.css(e[0], "borderLeftWidth", !0)), {
						top: t.top - n.top - fe.css(i, "marginTop", !0),
						left: t.left - n.left - fe.css(i, "marginLeft", !0)
					}
				}
			},
			offsetParent: function () {
				return this.map(function () {
					for (var e = this.offsetParent; e && !fe.nodeName(e, "html") && "static" === fe.css(e, "position");) e = e.offsetParent;
					return e || pt
				})
			}
		}), fe.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function (e, t) {
			var n = /Y/.test(t);
			fe.fn[e] = function (i) {
				return ze(this, function (e, i, r) {
					var o = te(e);
					if (r === undefined) return o ? t in o ? o[t] : o.document.documentElement[i] : e[i];
					o ? o.scrollTo(n ? fe(o).scrollLeft() : r, n ? r : fe(o).scrollTop()) : e[i] = r
				}, e, i, arguments.length, null)
			}
		}), fe.each(["top", "left"], function (e, t) {
			fe.cssHooks[t] = j(ce.pixelPosition, function (e, n) {
				if (n) return n = ht(e, t), ut.test(n) ? fe(e).position()[t] + "px" : n
			})
		}), fe.each({
			Height: "height",
			Width: "width"
		}, function (e, t) {
			fe.each({
				padding: "inner" + e,
				content: t,
				"": "outer" + e
			}, function (n, i) {
				fe.fn[i] = function (i, r) {
					var o = arguments.length && (n || "boolean" != typeof i),
						s = n || (!0 === i || !0 === r ? "margin" : "border");
					return ze(this, function (t, n, i) {
						var r;
						return fe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : i === undefined ? fe.css(t, n, s) : fe.style(t, n, i, s)
					}, t, o ? i : undefined, o, null)
				}
			})
		}), fe.fn.extend({
			bind: function (e, t, n) {
				return this.on(e, null, t, n)
			},
			unbind: function (e, t) {
				return this.off(e, null, t)
			},
			delegate: function (e, t, n, i) {
				return this.on(t, e, n, i)
			},
			undelegate: function (e, t, n) {
				return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
			}
		}), fe.fn.size = function () {
			return this.length
		}, fe.fn.andSelf = fe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
			return fe
		});
		var fn = e.jQuery,
			hn = e.$;
		return fe.noConflict = function (t) {
			return e.$ === fe && (e.$ = hn), t && e.jQuery === fe && (e.jQuery = fn), fe
		}, t || (e.jQuery = e.$ = fe), fe
	}),
	function (e) {
		"use strict";
		"function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
	}(function (e) {
		"use strict";
		var t = window.Slick || {};
		t = function () {
			function t(t, i) {
				var r, o = this;
				o.defaults = {
					accessibility: !0,
					adaptiveHeight: !1,
					appendArrows: e(t),
					appendDots: e(t),
					arrows: !0,
					asNavFor: null,
					prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
					nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
					autoplay: !1,
					autoplaySpeed: 3e3,
					centerMode: !1,
					centerPadding: "50px",
					cssEase: "ease",
					customPaging: function (t, n) {
						return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(n + 1)
					},
					dots: !1,
					dotsClass: "slick-dots",
					draggable: !0,
					easing: "linear",
					edgeFriction: .35,
					fade: !1,
					focusOnSelect: !1,
					infinite: !0,
					initialSlide: 0,
					lazyLoad: "ondemand",
					mobileFirst: !1,
					pauseOnHover: !0,
					pauseOnFocus: !0,
					pauseOnDotsHover: !1,
					respondTo: "window",
					responsive: null,
					rows: 1,
					rtl: !1,
					slide: "",
					slidesPerRow: 1,
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 500,
					swipe: !0,
					swipeToSlide: !1,
					touchMove: !0,
					touchThreshold: 5,
					useCSS: !0,
					useTransform: !0,
					variableWidth: !1,
					vertical: !1,
					verticalSwiping: !1,
					waitForAnimate: !0,
					zIndex: 1e3
				}, o.initials = {
					animating: !1,
					dragging: !1,
					autoPlayTimer: null,
					currentDirection: 0,
					currentLeft: null,
					currentSlide: 0,
					direction: 1,
					$dots: null,
					listWidth: null,
					listHeight: null,
					loadIndex: 0,
					$nextArrow: null,
					$prevArrow: null,
					slideCount: null,
					slideWidth: null,
					$slideTrack: null,
					$slides: null,
					sliding: !1,
					slideOffset: 0,
					swipeLeft: null,
					$list: null,
					touchObject: {},
					transformsEnabled: !1,
					unslicked: !1
				}, e.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = e(t), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, r = e(t).data("slick") || {}, o.options = e.extend({}, o.defaults, i, r), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, "undefined" != typeof document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = e.proxy(o.autoPlay, o), o.autoPlayClear = e.proxy(o.autoPlayClear, o), o.autoPlayIterator = e.proxy(o.autoPlayIterator, o), o.changeSlide = e.proxy(o.changeSlide, o), o.clickHandler = e.proxy(o.clickHandler, o), o.selectHandler = e.proxy(o.selectHandler, o), o.setPosition = e.proxy(o.setPosition, o), o.swipeHandler = e.proxy(o.swipeHandler, o), o.dragHandler = e.proxy(o.dragHandler, o), o.keyHandler = e.proxy(o.keyHandler, o), o.instanceUid = n++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
			}
			var n = 0;
			return t
		}(), t.prototype.activateADA = function () {
			this.$slideTrack.find(".slick-active").attr({
				"aria-hidden": "false"
			}).find("a, input, button, select").attr({
				tabindex: "0"
			})
		}, t.prototype.addSlide = t.prototype.slickAdd = function (t, n, i) {
			var r = this;
			if ("boolean" == typeof n) i = n, n = null;
			else if (n < 0 || n >= r.slideCount) return !1;
			r.unload(), "number" == typeof n ? 0 === n && 0 === r.$slides.length ? e(t).appendTo(r.$slideTrack) : i ? e(t).insertBefore(r.$slides.eq(n)) : e(t).insertAfter(r.$slides.eq(n)) : !0 === i ? e(t).prependTo(r.$slideTrack) : e(t).appendTo(r.$slideTrack), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slides.each(function (t, n) {
				e(n).attr("data-slick-index", t)
			}), r.$slidesCache = r.$slides, r.reinit()
		}, t.prototype.animateHeight = function () {
			var e = this;
			if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
				var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
				e.$list.animate({
					height: t
				}, e.options.speed)
			}
		}, t.prototype.animateSlide = function (t, n) {
			var i = {},
				r = this;
			r.animateHeight(), !0 === r.options.rtl && !1 === r.options.vertical && (t = -t), !1 === r.transformsEnabled ? !1 === r.options.vertical ? r.$slideTrack.animate({
				left: t
			}, r.options.speed, r.options.easing, n) : r.$slideTrack.animate({
				top: t
			}, r.options.speed, r.options.easing, n) : !1 === r.cssTransitions ? (!0 === r.options.rtl && (r.currentLeft = -r.currentLeft), e({
				animStart: r.currentLeft
			}).animate({
				animStart: t
			}, {
				duration: r.options.speed,
				easing: r.options.easing,
				step: function (e) {
					e = Math.ceil(e), !1 === r.options.vertical ? (i[r.animType] = "translate(" + e + "px, 0px)", r.$slideTrack.css(i)) : (i[r.animType] = "translate(0px," + e + "px)", r.$slideTrack.css(i))
				},
				complete: function () {
					n && n.call()
				}
			})) : (r.applyTransition(), t = Math.ceil(t), !1 === r.options.vertical ? i[r.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[r.animType] = "translate3d(0px," + t + "px, 0px)", r.$slideTrack.css(i), n && setTimeout(function () {
				r.disableTransition(), n.call()
			}, r.options.speed))
		}, t.prototype.getNavTarget = function () {
			var t = this,
				n = t.options.asNavFor;
			return n && null !== n && (n = e(n).not(t.$slider)), n
		}, t.prototype.asNavFor = function (t) {
			var n = this,
				i = n.getNavTarget();
			null !== i && "object" == typeof i && i.each(function () {
				var n = e(this).slick("getSlick");
				n.unslicked || n.slideHandler(t, !0)
			})
		}, t.prototype.applyTransition = function (e) {
			var t = this,
				n = {};
			!1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
		}, t.prototype.autoPlay = function () {
			var e = this;
			e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
		}, t.prototype.autoPlayClear = function () {
			var e = this;
			e.autoPlayTimer && clearInterval(e.autoPlayTimer)
		}, t.prototype.autoPlayIterator = function () {
			var e = this,
				t = e.currentSlide + e.options.slidesToScroll;
			e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
		}, t.prototype.buildArrows = function () {
			var t = this;
			!0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
				"aria-disabled": "true",
				tabindex: "-1"
			}))
		}, t.prototype.buildDots = function () {
			var t, n, i = this;
			if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
				for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
				i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
			}
		}, t.prototype.buildOut = function () {
			var t = this;
			t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, n) {
				e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
			}), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
		}, t.prototype.buildRows = function () {
			var e, t, n, i, r, o, s, a = this;
			if (i = document.createDocumentFragment(), o = a.$slider.children(), a.options.rows > 1) {
				for (s = a.options.slidesPerRow * a.options.rows, r = Math.ceil(o.length / s), e = 0; e < r; e++) {
					var l = document.createElement("div");
					for (t = 0; t < a.options.rows; t++) {
						var d = document.createElement("div");
						for (n = 0; n < a.options.slidesPerRow; n++) {
							var u = e * s + (t * a.options.slidesPerRow + n);
							o.get(u) && d.appendChild(o.get(u))
						}
						l.appendChild(d)
					}
					i.appendChild(l)
				}
				a.$slider.empty().append(i), a.$slider.children().children().children().css({
					width: 100 / a.options.slidesPerRow + "%",
					display: "inline-block"
				})
			}
		}, t.prototype.checkResponsive = function (t, n) {
			var i, r, o, s = this,
				a = !1,
				l = s.$slider.width(),
				d = window.innerWidth || e(window).width();
			if ("window" === s.respondTo ? o = d : "slider" === s.respondTo ? o = l : "min" === s.respondTo && (o = Math.min(d, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
				r = null;
				for (i in s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? o < s.breakpoints[i] && (r = s.breakpoints[i]) : o > s.breakpoints[i] && (r = s.breakpoints[i]));
				null !== r ? null !== s.activeBreakpoint ? (r !== s.activeBreakpoint || n) && (s.activeBreakpoint = r, "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[r]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = r) : (s.activeBreakpoint = r, "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[r]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = r) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = r), t || !1 === a || s.$slider.trigger("breakpoint", [s, a])
			}
		}, t.prototype.changeSlide = function (t, n) {
			var i, r, o, s = this,
				a = e(t.currentTarget);
			switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), o = s.slideCount % s.options.slidesToScroll != 0, i = o ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
				case "previous":
					r = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - r, !1, n);
					break;
				case "next":
					r = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + r, !1, n);
					break;
				case "index":
					var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
					s.slideHandler(s.checkNavigable(l), !1, n), a.children().trigger("focus");
					break;
				default:
					return
			}
		}, t.prototype.checkNavigable = function (e) {
			var t, n, i = this;
			if (t = i.getNavigableIndexes(), n = 0, e > t[t.length - 1]) e = t[t.length - 1];
			else
				for (var r in t) {
					if (e < t[r]) {
						e = n;
						break
					}
					n = t[r]
				}
			return e
		}, t.prototype.cleanUpEvents = function () {
			var t = this;
			t.options.dots && null !== t.$dots && e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
		}, t.prototype.cleanUpSlideEvents = function () {
			var t = this;
			t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
		}, t.prototype.cleanUpRows = function () {
			var e, t = this;
			t.options.rows > 1 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.empty().append(e))
		}, t.prototype.clickHandler = function (e) {
			!1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
		}, t.prototype.destroy = function (t) {
			var n = this;
			n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
				e(this).attr("style", e(this).data("originalStyling"))
			}), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
		}, t.prototype.disableTransition = function (e) {
			var t = this,
				n = {};
			n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
		}, t.prototype.fadeSlide = function (e, t) {
			var n = this;
			!1 === n.cssTransitions ? (n.$slides.eq(e).css({
				zIndex: n.options.zIndex
			}), n.$slides.eq(e).animate({
				opacity: 1
			}, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
				opacity: 1,
				zIndex: n.options.zIndex
			}), t && setTimeout(function () {
				n.disableTransition(e), t.call()
			}, n.options.speed))
		}, t.prototype.fadeSlideOut = function (e) {
			var t = this;
			!1 === t.cssTransitions ? t.$slides.eq(e).animate({
				opacity: 0,
				zIndex: t.options.zIndex - 2
			}, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
				opacity: 0,
				zIndex: t.options.zIndex - 2
			}))
		}, t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
			var t = this;
			null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
		}, t.prototype.focusHandler = function () {
			var t = this;
			t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (n) {
				n.stopImmediatePropagation();
				var i = e(this);
				setTimeout(function () {
					t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())
				}, 0)
			})
		}, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
			return this.currentSlide
		}, t.prototype.getDotCount = function () {
			var e = this,
				t = 0,
				n = 0,
				i = 0;
			if (!0 === e.options.infinite)
				for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
			else if (!0 === e.options.centerMode) i = e.slideCount;
			else if (e.options.asNavFor)
				for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
			else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
			return i - 1
		}, t.prototype.getLeft = function (e) {
			var t, n, i, r = this,
				o = 0;
			return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = n * r.options.slidesToShow * -1), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, o = (r.options.slidesToShow - (e - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, o = r.slideCount % r.options.slidesToScroll * n * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, o = (e + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, o = 0), !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + o, !0 === r.options.variableWidth && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === r.options.centerMode && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (r.$list.width() - i.outerWidth()) / 2)), t
		}, t.prototype.getOption = t.prototype.slickGetOption = function (e) {
			return this.options[e]
		}, t.prototype.getNavigableIndexes = function () {
			var e, t = this,
				n = 0,
				i = 0,
				r = [];
			for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); n < e;) r.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
			return r
		}, t.prototype.getSlick = function () {
			return this
		}, t.prototype.getSlideCount = function () {
			var t, n, i = this;
			return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function (r, o) {
				if (o.offsetLeft - n + e(o).outerWidth() / 2 > -1 * i.swipeLeft) return t = o, !1
			}), Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
		}, t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
			this.changeSlide({
				data: {
					message: "index",
					index: parseInt(e)
				}
			}, t)
		}, t.prototype.init = function (t) {
			var n = this;
			e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
		}, t.prototype.initADA = function () {
			var t = this;
			t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
				"aria-hidden": "true",
				tabindex: "-1"
			}).find("a, input, button, select").attr({
				tabindex: "-1"
			}), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (n) {
				e(this).attr({
					role: "option",
					"aria-describedby": "slick-slide" + t.instanceUid + n
				})
			}), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function (n) {
				e(this).attr({
					role: "presentation",
					"aria-selected": "false",
					"aria-controls": "navigation" + t.instanceUid + n,
					id: "slick-slide" + t.instanceUid + n
				})
			}).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
		}, t.prototype.initArrowEvents = function () {
			var e = this;
			!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
				message: "previous"
			}, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
				message: "next"
			}, e.changeSlide))
		}, t.prototype.initDotEvents = function () {
			var t = this;
			!0 === t.options.dots && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
				message: "index"
			}, t.changeSlide), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
		}, t.prototype.initSlideEvents = function () {
			var t = this;
			t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
		}, t.prototype.initializeEvents = function () {
			var t = this;
			t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
				action: "start"
			}, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
				action: "move"
			}, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
				action: "end"
			}, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
				action: "end"
			}, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
		}, t.prototype.initUI = function () {
			var e = this;
			!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
		}, t.prototype.keyHandler = function (e) {
			var t = this;
			e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
				data: {
					message: !0 === t.options.rtl ? "next" : "previous"
				}
			}) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
				data: {
					message: !0 === t.options.rtl ? "previous" : "next"
				}
			}))
		}, t.prototype.lazyLoad = function () {
			function t(t) {
				e("img[data-lazy]", t).each(function () {
					var t = e(this),
						n = e(this).attr("data-lazy"),
						i = document.createElement("img");
					i.onload = function () {
						t.animate({
							opacity: 0
						}, 100, function () {
							t.attr("src", n).animate({
								opacity: 1
							}, 200, function () {
								t.removeAttr("data-lazy").removeClass("slick-loading")
							}), s.$slider.trigger("lazyLoaded", [s, t, n])
						})
					}, i.onerror = function () {
						t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, n])
					}, i.src = n
				})
			}
			var n, i, r, o, s = this;
			!0 === s.options.centerMode ? !0 === s.options.infinite ? (r = s.currentSlide + (s.options.slidesToShow / 2 + 1), o = r + s.options.slidesToShow + 2) : (r = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), o = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (r = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, o = Math.ceil(r + s.options.slidesToShow), !0 === s.options.fade && (r > 0 && r--, o <= s.slideCount && o++)), n = s.$slider.find(".slick-slide").slice(r, o), t(n), s.slideCount <= s.options.slidesToShow ? (i = s.$slider.find(".slick-slide"), t(i)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (i = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), t(i)) : 0 === s.currentSlide && (i = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow), t(i))
		}, t.prototype.loadSlider = function () {
			var e = this;
			e.setPosition(), e.$slideTrack.css({
				opacity: 1
			}), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
		}, t.prototype.next = t.prototype.slickNext = function () {
			this.changeSlide({
				data: {
					message: "next"
				}
			})
		}, t.prototype.orientationChange = function () {
			var e = this;
			e.checkResponsive(), e.setPosition()
		}, t.prototype.pause = t.prototype.slickPause = function () {
			var e = this;
			e.autoPlayClear(), e.paused = !0
		}, t.prototype.play = t.prototype.slickPlay = function () {
			var e = this;
			e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
		}, t.prototype.postSlide = function (e) {
			var t = this;
			t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && t.initADA())
		}, t.prototype.prev = t.prototype.slickPrev = function () {
			this.changeSlide({
				data: {
					message: "previous"
				}
			})
		}, t.prototype.preventDefault = function (e) {
			e.preventDefault()
		}, t.prototype.progressiveLazyLoad = function (t) {
			t = t || 1;
			var n, i, r, o = this,
				s = e("img[data-lazy]", o.$slider);
			s.length ? (n = s.first(), i = n.attr("data-lazy"), r = document.createElement("img"), r.onload = function () {
				n.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"), !0 === o.options.adaptiveHeight && o.setPosition(), o.$slider.trigger("lazyLoaded", [o, n, i]), o.progressiveLazyLoad()
			}, r.onerror = function () {
				t < 3 ? setTimeout(function () {
					o.progressiveLazyLoad(t + 1)
				}, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, n, i]), o.progressiveLazyLoad())
			}, r.src = i) : o.$slider.trigger("allImagesLoaded", [o])
		}, t.prototype.refresh = function (t) {
			var n, i, r = this;
			i = r.slideCount - r.options.slidesToShow, !r.options.infinite && r.currentSlide > i && (r.currentSlide = i), r.slideCount <= r.options.slidesToShow && (r.currentSlide = 0), n = r.currentSlide, r.destroy(!0), e.extend(r, r.initials, {
				currentSlide: n
			}), r.init(), t || r.changeSlide({
				data: {
					message: "index",
					index: n
				}
			}, !1)
		}, t.prototype.registerBreakpoints = function () {
			var t, n, i, r = this,
				o = r.options.responsive || null;
			if ("array" === e.type(o) && o.length) {
				r.respondTo = r.options.respondTo || "window";
				for (t in o)
					if (i = r.breakpoints.length - 1, n = o[t].breakpoint, o.hasOwnProperty(t)) {
						for (; i >= 0;) r.breakpoints[i] && r.breakpoints[i] === n && r.breakpoints.splice(i, 1), i--;
						r.breakpoints.push(n), r.breakpointSettings[n] = o[t].settings
					}
				r.breakpoints.sort(function (e, t) {
					return r.options.mobileFirst ? e - t : t - e
				})
			}
		}, t.prototype.reinit = function () {
			var t = this;
			t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
		}, t.prototype.resize = function () {
			var t = this;
			e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
				t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
			}, 50))
		}, t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, n) {
			var i = this;
			if ("boolean" == typeof e ? (t = e, e = !0 === t ? 0 : i.slideCount - 1) : e = !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
			i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
		}, t.prototype.setCSS = function (e) {
			var t, n, i = this,
				r = {};
			!0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", r[i.positionProp] = e, !1 === i.transformsEnabled ? i.$slideTrack.css(r) : (r = {}, !1 === i.cssTransitions ? (r[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(r)) : (r[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(r)))
		}, t.prototype.setDimensions = function () {
			var e = this;
			!1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
				padding: "0px " + e.options.centerPadding
			}) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
				padding: e.options.centerPadding + " 0px"
			})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
			var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
			!1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
		}, t.prototype.setFade = function () {
			var t, n = this;
			n.$slides.each(function (i, r) {
				t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(r).css({
					position: "relative",
					right: t,
					top: 0,
					zIndex: n.options.zIndex - 2,
					opacity: 0
				}) : e(r).css({
					position: "relative",
					left: t,
					top: 0,
					zIndex: n.options.zIndex - 2,
					opacity: 0
				})
			}), n.$slides.eq(n.currentSlide).css({
				zIndex: n.options.zIndex - 1,
				opacity: 1
			})
		}, t.prototype.setHeight = function () {
			var e = this;
			if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
				var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
				e.$list.css("height", t)
			}
		}, t.prototype.setOption = t.prototype.slickSetOption = function () {
			var t, n, i, r, o, s = this,
				a = !1;
			if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], o = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], r = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? o = "responsive" : "undefined" != typeof arguments[1] && (o = "single")), "single" === o) s.options[i] = r;
			else if ("multiple" === o) e.each(i, function (e, t) {
				s.options[e] = t
			});
			else if ("responsive" === o)
				for (n in r)
					if ("array" !== e.type(s.options.responsive)) s.options.responsive = [r[n]];
					else {
						for (t = s.options.responsive.length - 1; t >= 0;) s.options.responsive[t].breakpoint === r[n].breakpoint && s.options.responsive.splice(t, 1), t--;
						s.options.responsive.push(r[n])
					}
			a && (s.unload(), s.reinit())
		}, t.prototype.setPosition = function () {
			var e = this;
			e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
		}, t.prototype.setProps = function () {
			var e = this,
				t = document.body.style;
			e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), t.WebkitTransition === undefined && t.MozTransition === undefined && t.msTransition === undefined || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), t.OTransform !== undefined && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", t.perspectiveProperty === undefined && t.webkitPerspective === undefined && (e.animType = !1)), t.MozTransform !== undefined && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", t.perspectiveProperty === undefined && t.MozPerspective === undefined && (e.animType = !1)), t.webkitTransform !== undefined && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", t.perspectiveProperty === undefined && t.webkitPerspective === undefined && (e.animType = !1)), t.msTransform !== undefined && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", t.msTransform === undefined && (e.animType = !1)), t.transform !== undefined && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
		}, t.prototype.setSlideClasses = function (e) {
			var t, n, i, r, o = this;
			n = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(e).addClass("slick-current"), !0 === o.options.centerMode ? (t = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (e >= t && e <= o.slideCount - 1 - t ? o.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = o.options.slidesToShow + e, n.slice(i - t + 1, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - o.options.slidesToShow).addClass("slick-center") : e === o.slideCount - 1 && n.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= o.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (r = o.slideCount % o.options.slidesToShow,
				i = !0 === o.options.infinite ? o.options.slidesToShow + e : e, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? n.slice(i - (o.options.slidesToShow - r), i + r).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === o.options.lazyLoad && o.lazyLoad()
		}, t.prototype.setupInfinite = function () {
			var t, n, i, r = this;
			if (!0 === r.options.fade && (r.options.centerMode = !1), !0 === r.options.infinite && !1 === r.options.fade && (n = null, r.slideCount > r.options.slidesToShow)) {
				for (i = !0 === r.options.centerMode ? r.options.slidesToShow + 1 : r.options.slidesToShow, t = r.slideCount; t > r.slideCount - i; t -= 1) n = t - 1, e(r.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");
				for (t = 0; t < i; t += 1) n = t, e(r.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");
				r.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
					e(this).attr("id", "")
				})
			}
		}, t.prototype.interrupt = function (e) {
			var t = this;
			e || t.autoPlay(), t.interrupted = e
		}, t.prototype.selectHandler = function (t) {
			var n = this,
				i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
				r = parseInt(i.attr("data-slick-index"));
			if (r || (r = 0), n.slideCount <= n.options.slidesToShow) return n.setSlideClasses(r), void n.asNavFor(r);
			n.slideHandler(r)
		}, t.prototype.slideHandler = function (e, t, n) {
			var i, r, o, s, a, l = null,
				d = this;
			if (t = t || !1, (!0 !== d.animating || !0 !== d.options.waitForAnimate) && !(!0 === d.options.fade && d.currentSlide === e || d.slideCount <= d.options.slidesToShow)) {
				if (!1 === t && d.asNavFor(e), i = e, l = d.getLeft(i), s = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? s : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (e < 0 || e > d.getDotCount() * d.options.slidesToScroll)) return void(!1 === d.options.fade && (i = d.currentSlide, !0 !== n ? d.animateSlide(s, function () {
					d.postSlide(i)
				}) : d.postSlide(i)));
				if (!1 === d.options.infinite && !0 === d.options.centerMode && (e < 0 || e > d.slideCount - d.options.slidesToScroll)) return void(!1 === d.options.fade && (i = d.currentSlide, !0 !== n ? d.animateSlide(s, function () {
					d.postSlide(i)
				}) : d.postSlide(i)));
				if (d.options.autoplay && clearInterval(d.autoPlayTimer), r = i < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + i : i >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : i - d.slideCount : i, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, r]), o = d.currentSlide, d.currentSlide = r, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (a = d.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(d.currentSlide)), d.updateDots(), d.updateArrows(), !0 === d.options.fade) return !0 !== n ? (d.fadeSlideOut(o), d.fadeSlide(r, function () {
					d.postSlide(r)
				})) : d.postSlide(r), void d.animateHeight();
				!0 !== n ? d.animateSlide(l, function () {
					d.postSlide(r)
				}) : d.postSlide(r)
			}
		}, t.prototype.startLoad = function () {
			var e = this;
			!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
		}, t.prototype.swipeDirection = function () {
			var e, t, n, i, r = this;
			return e = r.touchObject.startX - r.touchObject.curX, t = r.touchObject.startY - r.touchObject.curY, n = Math.atan2(t, e), i = Math.round(180 * n / Math.PI), i < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 ? !1 === r.options.rtl ? "left" : "right" : i <= 360 && i >= 315 ? !1 === r.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === r.options.rtl ? "right" : "left" : !0 === r.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical"
		}, t.prototype.swipeEnd = function () {
			var e, t, n = this;
			if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), n.touchObject.curX === undefined) return !1;
			if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
				switch (t = n.swipeDirection()) {
					case "left":
					case "down":
						e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
						break;
					case "right":
					case "up":
						e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
				}
				"vertical" != t && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, t]))
			} else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
		}, t.prototype.swipeHandler = function (e) {
			var t = this;
			if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && e.originalEvent.touches !== undefined ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
				case "start":
					t.swipeStart(e);
					break;
				case "move":
					t.swipeMove(e);
					break;
				case "end":
					t.swipeEnd(e)
			}
		}, t.prototype.swipeMove = function (e) {
			var t, n, i, r, o, s = this;
			return o = e.originalEvent !== undefined ? e.originalEvent.touches : null, !(!s.dragging || o && 1 !== o.length) && (t = s.getLeft(s.currentSlide), s.touchObject.curX = o !== undefined ? o[0].pageX : e.clientX, s.touchObject.curY = o !== undefined ? o[0].pageY : e.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), !0 === s.options.verticalSwiping && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))), "vertical" !== (n = s.swipeDirection()) ? (e.originalEvent !== undefined && s.touchObject.swipeLength > 4 && e.preventDefault(), r = (!1 === s.options.rtl ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), !0 === s.options.verticalSwiping && (r = s.touchObject.curY > s.touchObject.startY ? 1 : -1), i = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, !1 === s.options.infinite && (0 === s.currentSlide && "right" === n || s.currentSlide >= s.getDotCount() && "left" === n) && (i = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), !1 === s.options.vertical ? s.swipeLeft = t + i * r : s.swipeLeft = t + i * (s.$list.height() / s.listWidth) * r, !0 === s.options.verticalSwiping && (s.swipeLeft = t + i * r), !0 !== s.options.fade && !1 !== s.options.touchMove && (!0 === s.animating ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))) : void 0)
		}, t.prototype.swipeStart = function (e) {
			var t, n = this;
			if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return n.touchObject = {}, !1;
			e.originalEvent !== undefined && e.originalEvent.touches !== undefined && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = t !== undefined ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = t !== undefined ? t.pageY : e.clientY, n.dragging = !0
		}, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
			var e = this;
			null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
		}, t.prototype.unload = function () {
			var t = this;
			e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
		}, t.prototype.unslick = function (e) {
			var t = this;
			t.$slider.trigger("unslick", [t, e]), t.destroy()
		}, t.prototype.updateArrows = function () {
			var e = this;
			Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
		}, t.prototype.updateDots = function () {
			var e = this;
			null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
		}, t.prototype.visibility = function () {
			var e = this;
			e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
		}, e.fn.slick = function () {
			var e, n, i = this,
				r = arguments[0],
				o = Array.prototype.slice.call(arguments, 1),
				s = i.length;
			for (e = 0; e < s; e++)
				if ("object" == typeof r || void 0 === r ? i[e].slick = new t(i[e], r) : n = i[e].slick[r].apply(i[e].slick, o), void 0 !== n) return n;
			return i
		}
	}), document.addEventListener("DOMContentLoaded", function () {
		$(".slider").slick({
			fade: !0
		})
	}, !1);
var t = {
		locale: window.language,
		ru: {
			email_required: "\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 email",
			name_required: "\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043e \u0438\u043c\u044f",
			name_length: "\u041e\u0447\u0435\u043d\u044c \u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0435",
			subscription_action: ", \u043f\u043e\u0447\u0442\u0438 \u0432\u0441\u0435 \u0433\u043e\u0442\u043e\u0432\u043e"
		},
		en: {
			email_required: "Invalid email address",
			name_required: "Name is not filled",
			name_length: "Name should be longer",
			subscription_action: ", your subscription is almost finished!"
		}
	},
	_t = function (e) {
		return t[t.locale][e]
	};
$(function () {
		var e = $("#subscription-form");
		e.validate({
			rules: {
				username: {
					required: !0,
					minlength: 1
				},
				email: {
					required: !0,
					email: !0
				}
			},
			messages: {
				username: {
					required: _t("name_required"),
					minlength: _t("name_length")
				},
				email: _t("email_required")
			},
			errorPlacement: function (e, t) {
				var n = $(t);
				n.parent().children(".input-error-msg").remove(), $(['<label class="input-error-msg">', $(e).text(), "</label>"].join("")).insertAfter(n)
			},
			highlight: function (e) {
				$(e).parents(":not(label):first").removeClass("is-success").addClass("is-error")
			},
			unhighlight: function (e) {
				$(e).parents(":not(label):first").removeClass("is-error").addClass("is-success")
			},
			submitHandler: function () {
				var t = e.find('input[name="email"]').val(),
					n = e.find('input[name="username"]').val();
				return $.ajax({
					url: e.attr("action"),
					method: "post",
					data: {
						username: n,
						email: t
					}
				}), $("#subscription-form-block").addClass("is-hidden"), $("#subscription-form-success").addClass("is-show").find(".headline-main").text(n + _t("subscription_action")), !1
			}
		})
	}),
	function (e) {
		"function" == typeof define && define.amd ? define(["jquery.validate"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
	}(function (e) {
		e.extend(e.fn, {
			validate: function (t) {
				if (!this.length) return void(t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
				var n = e.data(this[0], "validator");
				return n || (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", function (t) {
					n.settings.submitHandler && (n.submitButton = t.target), e(this).hasClass("cancel") && (n.cancelSubmit = !0), e(this).attr("formnovalidate") !== undefined && (n.cancelSubmit = !0)
				}), this.on("submit.validate", function (t) {
					function i() {
						var i, r;
						return !n.settings.submitHandler || (n.submitButton && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), r = n.settings.submitHandler.call(n, n.currentForm, t), n.submitButton && i.remove(), r !== undefined && r)
					}
					return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
				})), n)
			},
			valid: function () {
				var t, n, i;
				return e(this[0]).is("form") ? t = this.validate().form() : (i = [], t = !0, n = e(this[0].form).validate(), this.each(function () {
					(t = n.element(this) && t) || (i = i.concat(n.errorList))
				}), n.errorList = i), t
			},
			rules: function (t, n) {
				var i, r, o, s, a, l, d = this[0];
				if (null != d && null != d.form) {
					if (t) switch (i = e.data(d.form, "validator").settings, r = i.rules, o = e.validator.staticRules(d), t) {
						case "add":
							e.extend(o, e.validator.normalizeRule(n)), delete o.messages, r[d.name] = o, n.messages && (i.messages[d.name] = e.extend(i.messages[d.name], n.messages));
							break;
						case "remove":
							return n ? (l = {}, e.each(n.split(/\s/), function (t, n) {
								l[n] = o[n], delete o[n], "required" === n && e(d).removeAttr("aria-required")
							}), l) : (delete r[d.name], o)
					}
					return s = e.validator.normalizeRules(e.extend({}, e.validator.classRules(d), e.validator.attributeRules(d), e.validator.dataRules(d), e.validator.staticRules(d)), d), s.required && (a = s.required, delete s.required, s = e.extend({
						required: a
					}, s), e(d).attr("aria-required", "true")), s.remote && (a = s.remote, delete s.remote, s = e.extend(s, {
						remote: a
					})), s
				}
			}
		}), e.extend(e.expr[":"], {
			blank: function (t) {
				return !e.trim("" + e(t).val())
			},
			filled: function (t) {
				var n = e(t).val();
				return null !== n && !!e.trim("" + n)
			},
			unchecked: function (t) {
				return !e(t).prop("checked")
			}
		}), e.validator = function (t, n) {
			this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init()
		}, e.validator.format = function (t, n) {
			return 1 === arguments.length ? function () {
				var n = e.makeArray(arguments);
				return n.unshift(t), e.validator.format.apply(this, n)
			} : n === undefined ? t : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function (e, n) {
				t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
					return n
				})
			}), t)
		}, e.extend(e.validator, {
			defaults: {
				messages: {},
				groups: {},
				rules: {},
				errorClass: "error",
				pendingClass: "pending",
				validClass: "valid",
				errorElement: "label",
				focusCleanup: !1,
				focusInvalid: !0,
				errorContainer: e([]),
				errorLabelContainer: e([]),
				onsubmit: !0,
				ignore: ":hidden",
				ignoreTitle: !1,
				onfocusin: function (e) {
					this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)))
				},
				onfocusout: function (e) {
					this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
				},
				onkeyup: function (t, n) {
					var i = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
					9 === n.which && "" === this.elementValue(t) || -1 !== e.inArray(n.keyCode, i) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
				},
				onclick: function (e) {
					e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
				},
				highlight: function (t, n, i) {
					"radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) : e(t).addClass(n).removeClass(i)
				},
				unhighlight: function (t, n, i) {
					"radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) : e(t).removeClass(n).addClass(i)
				}
			},
			setDefaults: function (t) {
				e.extend(e.validator.defaults, t)
			},
			messages: {
				required: "This field is required.",
				remote: "Please fix this field.",
				email: "Please enter a valid email address.",
				url: "Please enter a valid URL.",
				date: "Please enter a valid date.",
				dateISO: "Please enter a valid date (ISO).",
				number: "Please enter a valid number.",
				digits: "Please enter only digits.",
				equalTo: "Please enter the same value again.",
				maxlength: e.validator.format("Please enter no more than {0} characters."),
				minlength: e.validator.format("Please enter at least {0} characters."),
				rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
				range: e.validator.format("Please enter a value between {0} and {1}."),
				max: e.validator.format("Please enter a value less than or equal to {0}."),
				min: e.validator.format("Please enter a value greater than or equal to {0}."),
				step: e.validator.format("Please enter a multiple of {0}.")
			},
			autoCreateRanges: !1,
			prototype: {
				init: function () {
					function t(t) {
						!this.form && this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0]);
						var n = e.data(this.form, "validator"),
							i = "on" + t.type.replace(/^validate/, ""),
							r = n.settings;
						r[i] && !e(this).is(r.ignore) && r[i].call(n, this, t)
					}
					this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
					var n, i = this.groups = {};
					e.each(this.settings.groups, function (t, n) {
						"string" == typeof n && (n = n.split(/\s/)), e.each(n, function (e, n) {
							i[n] = t
						})
					}), n = this.settings.rules, e.each(n, function (t, i) {
						n[t] = e.validator.normalizeRule(i)
					}), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), e(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
				},
				form: function () {
					return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
				},
				checkForm: function () {
					this.prepareForm();
					for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
					return this.valid()
				},
				element: function (t) {
					var n, i, r = this.clean(t),
						o = this.validationTargetFor(r),
						s = this,
						a = !0;
					return o === undefined ? delete this.invalid[r.name] : (this.prepareElement(o), this.currentElements = e(o), i = this.groups[o.name], i && e.each(this.groups, function (e, t) {
						t === i && e !== o.name && (r = s.validationTargetFor(s.clean(s.findByName(e)))) && r.name in s.invalid && (s.currentElements.push(r), a = s.check(r) && a)
					}), n = !1 !== this.check(o), a = a && n, this.invalid[o.name] = !n, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e(t).attr("aria-invalid", !n)), a
				},
				showErrors: function (t) {
					if (t) {
						var n = this;
						e.extend(this.errorMap, t), this.errorList = e.map(this.errorMap, function (e, t) {
							return {
								message: e,
								element: n.findByName(t)[0]
							}
						}), this.successList = e.grep(this.successList, function (e) {
							return !(e.name in t)
						})
					}
					this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
				},
				resetForm: function () {
					e.fn.resetForm && e(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
					var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
					this.resetElements(t)
				},
				resetElements: function (e) {
					var t;
					if (this.settings.unhighlight)
						for (t = 0; e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass);
					else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
				},
				numberOfInvalids: function () {
					return this.objectLength(this.invalid)
				},
				objectLength: function (e) {
					var t, n = 0;
					for (t in e) e[t] && n++;
					return n
				},
				hideErrors: function () {
					this.hideThese(this.toHide)
				},
				hideThese: function (e) {
					e.not(this.containers).text(""), this.addWrapper(e).hide()
				},
				valid: function () {
					return 0 === this.size()
				},
				size: function () {
					return this.errorList.length
				},
				focusInvalid: function () {
					if (this.settings.focusInvalid) try {
						e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
					} catch (e) {}
				},
				findLastActive: function () {
					var t = this.lastActive;
					return t && 1 === e.grep(this.errorList, function (e) {
						return e.element.name === t.name
					}).length && t
				},
				elements: function () {
					var t = this,
						n = {};
					return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
						var i = this.name || e(this).attr("name");
						return !i && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0]), !(i in n || !t.objectLength(e(this).rules())) && (n[i] = !0, !0)
					})
				},
				clean: function (t) {
					return e(t)[0]
				},
				errors: function () {
					var t = this.settings.errorClass.split(" ").join(".");
					return e(this.settings.errorElement + "." + t, this.errorContext)
				},
				resetInternals: function () {
					this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([])
				},
				reset: function () {
					this.resetInternals(), this.currentElements = e([])
				},
				prepareForm: function () {
					this.reset(), this.toHide = this.errors().add(this.containers)
				},
				prepareElement: function (e) {
					this.reset(), this.toHide = this.errorsFor(e)
				},
				elementValue: function (t) {
					var n, i, r = e(t),
						o = t.type;
					return "radio" === o || "checkbox" === o ? this.findByName(t.name).filter(":checked").val() : "number" === o && "undefined" != typeof t.validity ? t.validity.badInput ? "NaN" : r.val() : (n = t.hasAttribute("contenteditable") ? r.text() : r.val(), "file" === o ? "C:\\fakepath\\" === n.substr(0, 12) ? n.substr(12) : (i = n.lastIndexOf("/")) >= 0 ? n.substr(i + 1) : (i = n.lastIndexOf("\\"), i >= 0 ? n.substr(i + 1) : n) : "string" == typeof n ? n.replace(/\r/g, "") : n)
				},
				check: function (t) {
					t = this.validationTargetFor(this.clean(t));
					var n, i, r, o = e(t).rules(),
						s = e.map(o, function (e, t) {
							return t
						}).length,
						a = !1,
						l = this.elementValue(t);
					if ("function" == typeof o.normalizer) {
						if ("string" != typeof (l = o.normalizer.call(t, l))) throw new TypeError("The normalizer should return a string value.");
						delete o.normalizer
					}
					for (i in o) {
						r = {
							method: i,
							parameters: o[i]
						};
						try {
							if ("dependency-mismatch" === (n = e.validator.methods[i].call(this, l, t, r.parameters)) && 1 === s) {
								a = !0;
								continue
							}
							if (a = !1, "pending" === n) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
							if (!n) return this.formatAndAdd(t, r), !1
						} catch (e) {
							throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."), e
						}
					}
					if (!a) return this.objectLength(o) && this.successList.push(t), !0
				},
				customDataMessage: function (t, n) {
					return e(t).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || e(t).data("msg")
				},
				customMessage: function (e, t) {
					var n = this.settings.messages[e];
					return n && (n.constructor === String ? n : n[t])
				},
				findDefined: function () {
					for (var e = 0; e < arguments.length; e++)
						if (arguments[e] !== undefined) return arguments[e];
					return undefined
				},
				defaultMessage: function (t, n) {
					"string" == typeof n && (n = {
						method: n
					});
					var i = this.findDefined(this.customMessage(t.name, n.method), this.customDataMessage(t, n.method), !this.settings.ignoreTitle && t.title || undefined, e.validator.messages[n.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
						r = /\$?\{(\d+)\}/g;
					return "function" == typeof i ? i = i.call(this, n.parameters, t) : r.test(i) && (i = e.validator.format(i.replace(r, "{$1}"), n.parameters)), i
				},
				formatAndAdd: function (e, t) {
					var n = this.defaultMessage(e, t);
					this.errorList.push({
						message: n,
						element: e,
						method: t.method
					}), this.errorMap[e.name] = n, this.submitted[e.name] = n
				},
				addWrapper: function (e) {
					return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
				},
				defaultShowErrors: function () {
					var e, t, n;
					for (e = 0; this.errorList[e]; e++) n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
					if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
						for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
					if (this.settings.unhighlight)
						for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
					this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
				},
				validElements: function () {
					return this.currentElements.not(this.invalidElements())
				},
				invalidElements: function () {
					return e(this.errorList).map(function () {
						return this.element
					})
				},
				showLabel: function (t, n) {
					var i, r, o, s, a = this.errorsFor(t),
						l = this.idOrName(t),
						d = e(t).attr("aria-describedby");
					a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(n)) : (a = e("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(n || ""), i = a, this.settings.wrapper && (i = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, e(t)) : i.insertAfter(t), a.is("label") ? a.attr("for", l) : 0 === a.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (o = a.attr("id"), d ? d.match(new RegExp("\\b" + this.escapeCssMeta(o) + "\\b")) || (d += " " + o) : d = o, e(t).attr("aria-describedby", d), (r = this.groups[t.name]) && (s = this, e.each(s.groups, function (t, n) {
						n === r && e("[name='" + s.escapeCssMeta(t) + "']", s.currentForm).attr("aria-describedby", a.attr("id"))
					})))), !n && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, t)), this.toShow = this.toShow.add(a)
				},
				errorsFor: function (t) {
					var n = this.escapeCssMeta(this.idOrName(t)),
						i = e(t).attr("aria-describedby"),
						r = "label[for='" + n + "'], label[for='" + n + "'] *";
					return i && (r = r + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")), this.errors().filter(r)
				},
				escapeCssMeta: function (e) {
					return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
				},
				idOrName: function (e) {
					return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
				},
				validationTargetFor: function (t) {
					return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0]
				},
				checkable: function (e) {
					return /radio|checkbox/i.test(e.type)
				},
				findByName: function (t) {
					return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
				},
				getLength: function (t, n) {
					switch (n.nodeName.toLowerCase()) {
						case "select":
							return e("option:selected", n).length;
						case "input":
							if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
					}
					return t.length
				},
				depend: function (e, t) {
					return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
				},
				dependTypes: {
					"boolean": function (e) {
						return e
					},
					string: function (t, n) {
						return !!e(t, n.form).length
					},
					"function": function (e, t) {
						return e(t)
					}
				},
				optional: function (t) {
					var n = this.elementValue(t);
					return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch"
				},
				startRequest: function (t) {
					this.pending[t.name] || (this.pendingRequest++, e(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0)
				},
				stopRequest: function (t, n) {
					this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e(t).removeClass(this.settings.pendingClass), n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
				},
				previousValue: function (t, n) {
					return n = "string" == typeof n && n || "remote", e.data(t, "previousValue") || e.data(t, "previousValue", {
						old: null,
						valid: !0,
						message: this.defaultMessage(t, {
							method: n
						})
					})
				},
				destroy: function () {
					this.resetForm(), e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
				}
			},
			classRuleSettings: {
				required: {
					required: !0
				},
				email: {
					email: !0
				},
				url: {
					url: !0
				},
				date: {
					date: !0
				},
				dateISO: {
					dateISO: !0
				},
				number: {
					number: !0
				},
				digits: {
					digits: !0
				},
				creditcard: {
					creditcard: !0
				}
			},
			addClassRules: function (t, n) {
				t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t)
			},
			classRules: function (t) {
				var n = {},
					i = e(t).attr("class");
				return i && e.each(i.split(" "), function () {
					this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this])
				}), n
			},
			normalizeAttributeRule: function (e, t, n, i) {
				/min|max|step/.test(n) && (null === t || /number|range|text/.test(t)) && (i = Number(i), isNaN(i) && (i = undefined)), i || 0 === i ? e[n] = i : t === n && "range" !== t && (e[n] = !0)
			},
			attributeRules: function (t) {
				var n, i, r = {},
					o = e(t),
					s = t.getAttribute("type");
				for (n in e.validator.methods) "required" === n ? (i = t.getAttribute(n), "" === i && (i = !0), i = !!i) : i = o.attr(n), this.normalizeAttributeRule(r, s, n, i);
				return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
			},
			dataRules: function (t) {
				var n, i, r = {},
					o = e(t),
					s = t.getAttribute("type");
				for (n in e.validator.methods) i = o.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()), this.normalizeAttributeRule(r, s, n, i);
				return r
			},
			staticRules: function (t) {
				var n = {},
					i = e.data(t.form, "validator");
				return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), n
			},
			normalizeRules: function (t, n) {
				return e.each(t, function (i, r) {
					if (!1 === r) return void delete t[i];
					if (r.param || r.depends) {
						var o = !0;
						switch (typeof r.depends) {
							case "string":
								o = !!e(r.depends, n.form).length;
								break;
							case "function":
								o = r.depends.call(n, n)
						}
						o ? t[i] = r.param === undefined || r.param : (e.data(n.form, "validator").resetElements(e(n)), delete t[i])
					}
				}), e.each(t, function (i, r) {
					t[i] = e.isFunction(r) && "normalizer" !== i ? r(n) : r
				}), e.each(["minlength", "maxlength"], function () {
					t[this] && (t[this] = Number(t[this]))
				}), e.each(["rangelength", "range"], function () {
					var n;
					t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])]))
				}), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
			},
			normalizeRule: function (t) {
				if ("string" == typeof t) {
					var n = {};
					e.each(t.split(/\s/), function () {
						n[this] = !0
					}), t = n
				}
				return t
			},
			addMethod: function (t, n, i) {
				e.validator.methods[t] = n, e.validator.messages[t] = i !== undefined ? i : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
			},
			methods: {
				required: function (t, n, i) {
					if (!this.depend(i, n)) return "dependency-mismatch";
					if ("select" === n.nodeName.toLowerCase()) {
						var r = e(n).val();
						return r && r.length > 0
					}
					return this.checkable(n) ? this.getLength(t, n) > 0 : t.length > 0
				},
				email: function (e, t) {
					return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
				},
				url: function (e, t) {
					return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e)
				},
				date: function (e, t) {
					return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
				},
				dateISO: function (e, t) {
					return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
				},
				number: function (e, t) {
					return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
				},
				digits: function (e, t) {
					return this.optional(t) || /^\d+$/.test(e)
				},
				minlength: function (t, n, i) {
					var r = e.isArray(t) ? t.length : this.getLength(t, n);
					return this.optional(n) || r >= i
				},
				maxlength: function (t, n, i) {
					var r = e.isArray(t) ? t.length : this.getLength(t, n);
					return this.optional(n) || r <= i
				},
				rangelength: function (t, n, i) {
					var r = e.isArray(t) ? t.length : this.getLength(t, n);
					return this.optional(n) || r >= i[0] && r <= i[1]
				},
				min: function (e, t, n) {
					return this.optional(t) || e >= n
				},
				max: function (e, t, n) {
					return this.optional(t) || e <= n
				},
				range: function (e, t, n) {
					return this.optional(t) || e >= n[0] && e <= n[1]
				},
				step: function (t, n, i) {
					var r, o = e(n).attr("type"),
						s = "Step attribute on input type " + o + " is not supported.",
						a = ["text", "number", "range"],
						l = new RegExp("\\b" + o + "\\b"),
						d = o && !l.test(a.join()),
						u = function (e) {
							var t = ("" + e).match(/(?:\.(\d+))?$/);
							return t && t[1] ? t[1].length : 0
						},
						c = function (e) {
							return Math.round(e * Math.pow(10, r))
						},
						p = !0;
					if (d) throw new Error(s);
					return r = u(i), (u(t) > r || c(t) % c(i) != 0) && (p = !1), this.optional(n) || p
				},
				equalTo: function (t, n, i) {
					var r = e(i);
					return this.settings.onfocusout && r.not(".validate-equalTo-blur").length && r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
						e(n).valid()
					}), t === r.val()
				},
				remote: function (t, n, i, r) {
					if (this.optional(n)) return "dependency-mismatch";
					r = "string" == typeof r && r || "remote";
					var o, s, a, l = this.previousValue(n, r);
					return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[n.name][r], this.settings.messages[n.name][r] = l.message, i = "string" == typeof i && {
						url: i
					} || i, a = e.param(e.extend({
						data: t
					}, i.data)), l.old === a ? l.valid : (l.old = a, o = this, this.startRequest(n), s = {}, s[n.name] = t, e.ajax(e.extend(!0, {
						mode: "abort",
						port: "validate" + n.name,
						dataType: "json",
						data: s,
						context: o.currentForm,
						success: function (e) {
							var i, s, a, d = !0 === e || "true" === e;
							o.settings.messages[n.name][r] = l.originalMessage, d ? (a = o.formSubmitted, o.resetInternals(), o.toHide = o.errorsFor(n), o.formSubmitted = a, o.successList.push(n), o.invalid[n.name] = !1, o.showErrors()) : (i = {}, s = e || o.defaultMessage(n, {
								method: r,
								parameters: t
							}), i[n.name] = l.message = s, o.invalid[n.name] = !0, o.showErrors(i)), l.valid = d, o.stopRequest(n, d)
						}
					}, i)), "pending")
				}
			}
		});
		var t, n = {};
		e.ajaxPrefilter ? e.ajaxPrefilter(function (e, t, i) {
			var r = e.port;
			"abort" === e.mode && (n[r] && n[r].abort(), n[r] = i)
		}) : (t = e.ajax, e.ajax = function (i) {
			var r = ("mode" in i ? i : e.ajaxSettings).mode,
				o = ("port" in i ? i : e.ajaxSettings).port;
			return "abort" === r ? (n[o] && n[o].abort(), n[o] = t.apply(this, arguments), n[o]) : t.apply(this, arguments)
		})
	}), $(function () {
		var e = function (e, t) {
				$.getJSON("http://graph.facebook.com/?id=" + e, t)
			},
			t = function (e, t) {
				$.getJSON("http://opensharecount.com/count.json?url=" + e, t)
			},
			n = function (e, t) {
				e = e.replace("http%3A%2F%2F", ""), $.ajax({
					url: "https://share.yandex.ru/gpp.xml?url=" + e,
					dataType: "jsonp",
					crossDomain: !0,
					success: t()
				})
			},
			i = function (e, t) {
				$.ajax({
					url: "https://www.linkedin.com/countserv/count/share?url=" + e,
					dataType: "jsonp",
					crossDomain: !0,
					success: t
				})
			},
			r = function (e) {
				window.open(e, "Share", "width=600,height=500")
			},
			o = $("#social-shares"),
			s = encodeURIComponent(window.location.href);
		o.find(".mod-fb").click(function () {
			r("https://www.facebook.com/sharer/sharer.php?app_id=113869198637480&sdk=joey&u=" + s + "&display=popup&ref=plugin&src=share_button")
		}), o.find(".mod-tw").click(function () {
			var e = encodeURIComponent($('meta[name="og:title"]').attr("content"));
			r("https://twitter.com/intent/tweet?original_referer=" + s + "&ref_src=twsrc%5Etfw&text=" + e + "&tw_p=tweetbutton&url=" + s)
		}), o.find(".mod-gp").click(function () {
			r("https://plus.google.com/share?url=" + s)
		}), o.find(".mod-in").click(function () {
			r("https://www.linkedin.com/cws/share?url=" + s)
		}), setTimeout(function () {
			e(s, function (e) {
				$(".mod-fb .btn-counter").length > 0 && o.find(".mod-fb .btn-counter").text(e.share && e.share_count || 0)
			}), t(s, function (e) {
				$(".mod-tw .btn-counter").length > 0 && o.find(".mod-tw .btn-counter").text(e.count || 0)
			}), n(s, function (e) {
				$(".mod-gp .btn-counter").length > 0 && o.find(".mod-gp .btn-counter").text(e || 0)
			}), i(s, function (e) {
				$(".mod-in .btn-counter").length > 0 && o.find(".mod-in .btn-counter").text(e && e.count || 0)
			})
		}, 1e3)
	}), document.addEventListener("DOMContentLoaded", function () {
		if (document.getElementById("disqus_thread")) {
			var e = document,
				t = e.createElement("script");
			t.src = "//" + window.disqus_domain + "/embed.js", t.setAttribute("data-timestamp", +new Date), (e.head || e.body).appendChild(t)
		}
	}, !1), document.addEventListener("DOMContentLoaded", toggleMainMenu), $(document).on("click", ".js-scroll-to", function (e) {
		e.preventDefault(), $("html, body").animate({
			scrollTop: $($.attr(this, "data-scroll")).offset().top
		}, 500)
	});
