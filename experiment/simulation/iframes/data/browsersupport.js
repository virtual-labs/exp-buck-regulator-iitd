!(function (e, n, s) {
  function t(e, n) {
    return typeof e === n;
  }
  function o() {
    var e, n, s, o, a, i, l;
    for (var c in f)
      if (f.hasOwnProperty(c)) {
        if (
          ((e = []),
          (n = f[c]),
          n.name &&
            (e.push(n.name.toLowerCase()),
            n.options && n.options.aliases && n.options.aliases.length))
        )
          for (s = 0; s < n.options.aliases.length; s++)
            e.push(n.options.aliases[s].toLowerCase());
        for (o = t(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++)
          (i = e[a]),
            (l = i.split(".")),
            1 === l.length
              ? (Modernizr[l[0]] = o)
              : (!Modernizr[l[0]] ||
                  Modernizr[l[0]] instanceof Boolean ||
                  (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])),
                (Modernizr[l[0]][l[1]] = o)),
            r.push((o ? "" : "no-") + l.join("-"));
      }
  }
  function a(e) {
    var n = c.className,
      s = Modernizr._config.classPrefix || "";
    if ((u && (n = n.baseVal), Modernizr._config.enableJSClass)) {
      var t = new RegExp("(^|\\s)" + s + "no-js(\\s|$)");
      n = n.replace(t, "$1" + s + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((n += " " + s + e.join(" " + s)),
      u ? (c.className.baseVal = n) : (c.className = n));
  }
  function i() {
    return "function" != typeof n.createElement
      ? n.createElement(arguments[0])
      : u
      ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0])
      : n.createElement.apply(n, arguments);
  }
  var r = [],
    f = [],
    l = {
      _version: "3.3.1",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, n) {
        var s = this;
        setTimeout(function () {
          n(s[e]);
        }, 0);
      },
      addTest: function (e, n, s) {
        f.push({ name: e, fn: n, options: s });
      },
      addAsyncTest: function (e) {
        f.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = l), (Modernizr = new Modernizr());
  var c = n.documentElement,
    u = "svg" === c.nodeName.toLowerCase();
  Modernizr.addTest("inlinesvg", function () {
    var e = i("div");
    return (
      (e.innerHTML = "<svg/>"),
      "http://www.w3.org/2000/svg" ==
        ("undefined" != typeof SVGRect &&
          e.firstChild &&
          e.firstChild.namespaceURI)
    );
  });
  var p = "Moz O ms Webkit",
    d = l._config.usePrefixes ? p.split(" ") : [];
  l._cssomPrefixes = d;
  var m = function (n) {
    var t,
      o = g.length,
      a = e.CSSRule;
    if ("undefined" == typeof a) return s;
    if (!n) return !1;
    if (
      ((n = n.replace(/^@/, "")),
      (t = n.replace(/-/g, "_").toUpperCase() + "_RULE"),
      t in a)
    )
      return "@" + n;
    for (var i = 0; o > i; i++) {
      var r = g[i],
        f = r.toUpperCase() + "_" + t;
      if (f in a) return "@-" + r.toLowerCase() + "-" + n;
    }
    return !1;
  };
  l.atRule = m;
  var g = l._config.usePrefixes
    ? " -webkit- -moz- -o- -ms- ".split(" ")
    : ["", ""];
  (l._prefixes = g), o(), a(r), delete l.addTest, delete l.addAsyncTest;
  for (var v = 0; v < Modernizr._q.length; v++) Modernizr._q[v]();
  e.Modernizr = Modernizr;
})(window, document);
(function () {
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var b = this || self;
  function c() {
    var a = b.navigator;
    return a && (a = a.userAgent) ? a : "";
  }
  var d = -1 != c().indexOf("Trident") || -1 != c().indexOf("MSIE");
  function e(a) {
    return !Modernizr.inlinesvg || d
      ? (location.replace(a + window.location.search), !0)
      : !1;
  }
  var f = ["ispring", "compatibility", "performRedirectIfNeeded"],
    g = b;
  f[0] in g ||
    "undefined" == typeof g.execScript ||
    g.execScript("var " + f[0]);
  for (var h; f.length && (h = f.shift()); )
    f.length || void 0 === e
      ? (g = g[h] && g[h] !== Object.prototype[h] ? g[h] : (g[h] = {}))
      : (g[h] = e);
  e("data/html5-unsupported.html");
  window.onerror = function () {
    return !0;
  };
  b.console ||
    ((window._log = ""),
    (b.console = {
      log: function (a) {
        window._log += "\n" + a;
      },
      warn: function (a) {
        window._log += "\nwarn: " + a;
      },
      error: function (a) {
        window._log += "\nerror: " + a;
      },
    }));
})();
