import {
  __commonJS
} from "./chunk-OL3AADLO.js";

// node_modules/@kangc/v-md-editor/lib/theme/github.js
var require_github = __commonJS({
  "node_modules/@kangc/v-md-editor/lib/theme/github.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("VMdTheme", [], t) : "object" == typeof exports ? exports.VMdTheme = t() : e.VMdTheme = t();
    }("undefined" != typeof self ? self : exports, function() {
      return function(e) {
        var t = {};
        function r(n) {
          if (t[n])
            return t[n].exports;
          var s = t[n] = { i: n, l: false, exports: {} };
          return e[n].call(s.exports, s, s.exports, r), s.l = true, s.exports;
        }
        return r.m = e, r.c = t, r.d = function(e2, t2, n) {
          r.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: n });
        }, r.r = function(e2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        }, r.t = function(e2, t2) {
          if (1 & t2 && (e2 = r(e2)), 8 & t2)
            return e2;
          if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule)
            return e2;
          var n = /* @__PURE__ */ Object.create(null);
          if (r.r(n), Object.defineProperty(n, "default", { enumerable: true, value: e2 }), 2 & t2 && "string" != typeof e2)
            for (var s in e2)
              r.d(n, s, function(t3) {
                return e2[t3];
              }.bind(null, s));
          return n;
        }, r.n = function(e2) {
          var t2 = e2 && e2.__esModule ? function() {
            return e2.default;
          } : function() {
            return e2;
          };
          return r.d(t2, "a", t2), t2;
        }, r.o = function(e2, t2) {
          return Object.prototype.hasOwnProperty.call(e2, t2);
        }, r.p = "", r(r.s = 82);
      }([function(e, t, r) {
        "use strict";
        var n = Object.prototype.hasOwnProperty;
        function s(e2, t2) {
          return n.call(e2, t2);
        }
        function i(e2) {
          return !(e2 >= 55296 && e2 <= 57343) && (!(e2 >= 64976 && e2 <= 65007) && (65535 != (65535 & e2) && 65534 != (65535 & e2) && (!(e2 >= 0 && e2 <= 8) && (11 !== e2 && (!(e2 >= 14 && e2 <= 31) && (!(e2 >= 127 && e2 <= 159) && !(e2 > 1114111)))))));
        }
        function o(e2) {
          if (e2 > 65535) {
            var t2 = 55296 + ((e2 -= 65536) >> 10), r2 = 56320 + (1023 & e2);
            return String.fromCharCode(t2, r2);
          }
          return String.fromCharCode(e2);
        }
        var a = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g, c = new RegExp(a.source + "|" + /&([a-z#][a-z0-9]{1,31});/gi.source, "gi"), l = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i, u = r(7);
        var p = /[&<>"]/, h = /[&<>"]/g, f = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
        function d(e2) {
          return f[e2];
        }
        var g = /[.?*+^$[\]\\(){}|-]/g;
        var m = r(3);
        t.lib = {}, t.lib.mdurl = r(8), t.lib.ucmicro = r(26), t.assign = function(e2) {
          var t2 = Array.prototype.slice.call(arguments, 1);
          return t2.forEach(function(t3) {
            if (t3) {
              if ("object" != typeof t3)
                throw new TypeError(t3 + "must be object");
              Object.keys(t3).forEach(function(r2) {
                e2[r2] = t3[r2];
              });
            }
          }), e2;
        }, t.isString = function(e2) {
          return "[object String]" === function(e3) {
            return Object.prototype.toString.call(e3);
          }(e2);
        }, t.has = s, t.unescapeMd = function(e2) {
          return e2.indexOf("\\") < 0 ? e2 : e2.replace(a, "$1");
        }, t.unescapeAll = function(e2) {
          return e2.indexOf("\\") < 0 && e2.indexOf("&") < 0 ? e2 : e2.replace(c, function(e3, t2, r2) {
            return t2 || function(e4, t3) {
              var r3 = 0;
              return s(u, t3) ? u[t3] : 35 === t3.charCodeAt(0) && l.test(t3) && i(r3 = "x" === t3[1].toLowerCase() ? parseInt(t3.slice(2), 16) : parseInt(t3.slice(1), 10)) ? o(r3) : e4;
            }(e3, r2);
          });
        }, t.isValidEntityCode = i, t.fromCodePoint = o, t.escapeHtml = function(e2) {
          return p.test(e2) ? e2.replace(h, d) : e2;
        }, t.arrayReplaceAt = function(e2, t2, r2) {
          return [].concat(e2.slice(0, t2), r2, e2.slice(t2 + 1));
        }, t.isSpace = function(e2) {
          switch (e2) {
            case 9:
            case 32:
              return true;
          }
          return false;
        }, t.isWhiteSpace = function(e2) {
          if (e2 >= 8192 && e2 <= 8202)
            return true;
          switch (e2) {
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 32:
            case 160:
            case 5760:
            case 8239:
            case 8287:
            case 12288:
              return true;
          }
          return false;
        }, t.isMdAsciiPunct = function(e2) {
          switch (e2) {
            case 33:
            case 34:
            case 35:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
            case 41:
            case 42:
            case 43:
            case 44:
            case 45:
            case 46:
            case 47:
            case 58:
            case 59:
            case 60:
            case 61:
            case 62:
            case 63:
            case 64:
            case 91:
            case 92:
            case 93:
            case 94:
            case 95:
            case 96:
            case 123:
            case 124:
            case 125:
            case 126:
              return true;
            default:
              return false;
          }
        }, t.isPunctChar = function(e2) {
          return m.test(e2);
        }, t.escapeRE = function(e2) {
          return e2.replace(g, "\\$&");
        }, t.normalizeReference = function(e2) {
          return e2 = e2.trim().replace(/\s+/g, " "), "Ṿ" === "ẞ".toLowerCase() && (e2 = e2.replace(/ẞ/g, "ß")), e2.toLowerCase().toUpperCase();
        };
      }, function(e, t, r) {
        "use strict";
        function n() {
          return (n = Object.assign || function(e2) {
            for (var t2 = 1; t2 < arguments.length; t2++) {
              var r2 = arguments[t2];
              for (var n2 in r2)
                Object.prototype.hasOwnProperty.call(r2, n2) && (e2[n2] = r2[n2]);
            }
            return e2;
          }).apply(this, arguments);
        }
        r.d(t, "a", function() {
          return n;
        });
      }, function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
          return o;
        });
        var n = r(16), s = r.n(n), i = r(0);
        function o(e2) {
          var t2 = e2.codeHighlightExtensionMap, r2 = void 0 === t2 ? {} : t2, n2 = e2.hasLang, s2 = void 0 === n2 ? function() {
            return true;
          } : n2, o2 = e2.highlight, a = void 0 === o2 ? function(e3) {
            return e3;
          } : o2, c = e2.codeBlockClass;
          return function(e3, t3) {
            var n3 = Object(i.escapeHtml)(e3);
            return (t3 = r2[t3] || t3) && s2(t3) && (n3 = a(e3, t3)), '<pre class="' + function(e4) {
              return c ? c(e4) : "language-" + e4;
            }(t3) + '"><code>' + n3 + "</code></pre>";
          };
        }
        t.b = function() {
          var e2 = new s.a();
          return e2.set({ html: true, breaks: true, linkify: false, typographer: true }), e2;
        };
      }, function(e, t) {
        e.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
      }, function(e, t, r) {
        "use strict";
        function n() {
          this.__rules__ = [], this.__cache__ = null;
        }
        n.prototype.__find__ = function(e2) {
          for (var t2 = 0; t2 < this.__rules__.length; t2++)
            if (this.__rules__[t2].name === e2)
              return t2;
          return -1;
        }, n.prototype.__compile__ = function() {
          var e2 = this, t2 = [""];
          e2.__rules__.forEach(function(e3) {
            e3.enabled && e3.alt.forEach(function(e4) {
              t2.indexOf(e4) < 0 && t2.push(e4);
            });
          }), e2.__cache__ = {}, t2.forEach(function(t3) {
            e2.__cache__[t3] = [], e2.__rules__.forEach(function(r2) {
              r2.enabled && (t3 && r2.alt.indexOf(t3) < 0 || e2.__cache__[t3].push(r2.fn));
            });
          });
        }, n.prototype.at = function(e2, t2, r2) {
          var n2 = this.__find__(e2), s = r2 || {};
          if (-1 === n2)
            throw new Error("Parser rule not found: " + e2);
          this.__rules__[n2].fn = t2, this.__rules__[n2].alt = s.alt || [], this.__cache__ = null;
        }, n.prototype.before = function(e2, t2, r2, n2) {
          var s = this.__find__(e2), i = n2 || {};
          if (-1 === s)
            throw new Error("Parser rule not found: " + e2);
          this.__rules__.splice(s, 0, { name: t2, enabled: true, fn: r2, alt: i.alt || [] }), this.__cache__ = null;
        }, n.prototype.after = function(e2, t2, r2, n2) {
          var s = this.__find__(e2), i = n2 || {};
          if (-1 === s)
            throw new Error("Parser rule not found: " + e2);
          this.__rules__.splice(s + 1, 0, { name: t2, enabled: true, fn: r2, alt: i.alt || [] }), this.__cache__ = null;
        }, n.prototype.push = function(e2, t2, r2) {
          var n2 = r2 || {};
          this.__rules__.push({ name: e2, enabled: true, fn: t2, alt: n2.alt || [] }), this.__cache__ = null;
        }, n.prototype.enable = function(e2, t2) {
          Array.isArray(e2) || (e2 = [e2]);
          var r2 = [];
          return e2.forEach(function(e3) {
            var n2 = this.__find__(e3);
            if (n2 < 0) {
              if (t2)
                return;
              throw new Error("Rules manager: invalid rule name " + e3);
            }
            this.__rules__[n2].enabled = true, r2.push(e3);
          }, this), this.__cache__ = null, r2;
        }, n.prototype.enableOnly = function(e2, t2) {
          Array.isArray(e2) || (e2 = [e2]), this.__rules__.forEach(function(e3) {
            e3.enabled = false;
          }), this.enable(e2, t2);
        }, n.prototype.disable = function(e2, t2) {
          Array.isArray(e2) || (e2 = [e2]);
          var r2 = [];
          return e2.forEach(function(e3) {
            var n2 = this.__find__(e3);
            if (n2 < 0) {
              if (t2)
                return;
              throw new Error("Rules manager: invalid rule name " + e3);
            }
            this.__rules__[n2].enabled = false, r2.push(e3);
          }, this), this.__cache__ = null, r2;
        }, n.prototype.getRules = function(e2) {
          return null === this.__cache__ && this.__compile__(), this.__cache__[e2] || [];
        }, e.exports = n;
      }, function(e, t, r) {
        "use strict";
        function n(e2, t2, r2) {
          this.type = e2, this.tag = t2, this.attrs = null, this.map = null, this.nesting = r2, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = false, this.hidden = false;
        }
        n.prototype.attrIndex = function(e2) {
          var t2, r2, n2;
          if (!this.attrs)
            return -1;
          for (r2 = 0, n2 = (t2 = this.attrs).length; r2 < n2; r2++)
            if (t2[r2][0] === e2)
              return r2;
          return -1;
        }, n.prototype.attrPush = function(e2) {
          this.attrs ? this.attrs.push(e2) : this.attrs = [e2];
        }, n.prototype.attrSet = function(e2, t2) {
          var r2 = this.attrIndex(e2), n2 = [e2, t2];
          r2 < 0 ? this.attrPush(n2) : this.attrs[r2] = n2;
        }, n.prototype.attrGet = function(e2) {
          var t2 = this.attrIndex(e2), r2 = null;
          return t2 >= 0 && (r2 = this.attrs[t2][1]), r2;
        }, n.prototype.attrJoin = function(e2, t2) {
          var r2 = this.attrIndex(e2);
          r2 < 0 ? this.attrPush([e2, t2]) : this.attrs[r2][1] = this.attrs[r2][1] + " " + t2;
        }, e.exports = n;
      }, function(e, t, r) {
        "use strict";
        const n = /[\u0000-\u001f]/g, s = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’–—<>,.?/]+/g, i = /[\u0300-\u036F]/g;
        e.exports = function(e2) {
          return e2.normalize("NFKD").replace(i, "").replace(n, "").replace(s, "-").replace(/\-{2,}/g, "-").replace(/^\-+|\-+$/g, "").replace(/^(\d)/, "_$1").toLowerCase();
        };
      }, function(e, t, r) {
        "use strict";
        e.exports = r(21);
      }, function(e, t, r) {
        "use strict";
        e.exports.encode = r(22), e.exports.decode = r(23), e.exports.format = r(24), e.exports.parse = r(25);
      }, function(e, t) {
        e.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
      }, function(e, t) {
        e.exports = /[\0-\x1F\x7F-\x9F]/;
      }, function(e, t) {
        e.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
      }, function(e, t, r) {
        "use strict";
        var n = `<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>`, s = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", i = new RegExp("^(?:" + n + "|" + s + "|<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->|<[?][\\s\\S]*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"), o = new RegExp("^(?:" + n + "|" + s + ")");
        e.exports.HTML_TAG_RE = i, e.exports.HTML_OPEN_CLOSE_TAG_RE = o;
      }, function(e, t, r) {
        "use strict";
        function n(e2, t2) {
          var r2, n2, s, i, o, a = [], c = t2.length;
          for (r2 = 0; r2 < c; r2++)
            126 === (s = t2[r2]).marker && -1 !== s.end && (i = t2[s.end], (o = e2.tokens[s.token]).type = "s_open", o.tag = "s", o.nesting = 1, o.markup = "~~", o.content = "", (o = e2.tokens[i.token]).type = "s_close", o.tag = "s", o.nesting = -1, o.markup = "~~", o.content = "", "text" === e2.tokens[i.token - 1].type && "~" === e2.tokens[i.token - 1].content && a.push(i.token - 1));
          for (; a.length; ) {
            for (n2 = (r2 = a.pop()) + 1; n2 < e2.tokens.length && "s_close" === e2.tokens[n2].type; )
              n2++;
            r2 !== --n2 && (o = e2.tokens[n2], e2.tokens[n2] = e2.tokens[r2], e2.tokens[r2] = o);
          }
        }
        e.exports.tokenize = function(e2, t2) {
          var r2, n2, s, i, o = e2.pos, a = e2.src.charCodeAt(o);
          if (t2)
            return false;
          if (126 !== a)
            return false;
          if (s = (n2 = e2.scanDelims(e2.pos, true)).length, i = String.fromCharCode(a), s < 2)
            return false;
          for (s % 2 && (e2.push("text", "", 0).content = i, s--), r2 = 0; r2 < s; r2 += 2)
            e2.push("text", "", 0).content = i + i, e2.delimiters.push({ marker: a, length: 0, token: e2.tokens.length - 1, end: -1, open: n2.can_open, close: n2.can_close });
          return e2.pos += n2.length, true;
        }, e.exports.postProcess = function(e2) {
          var t2, r2 = e2.tokens_meta, s = e2.tokens_meta.length;
          for (n(e2, e2.delimiters), t2 = 0; t2 < s; t2++)
            r2[t2] && r2[t2].delimiters && n(e2, r2[t2].delimiters);
        };
      }, function(e, t, r) {
        "use strict";
        function n(e2, t2) {
          var r2, n2, s, i, o, a;
          for (r2 = t2.length - 1; r2 >= 0; r2--)
            95 !== (n2 = t2[r2]).marker && 42 !== n2.marker || -1 !== n2.end && (s = t2[n2.end], a = r2 > 0 && t2[r2 - 1].end === n2.end + 1 && t2[r2 - 1].marker === n2.marker && t2[r2 - 1].token === n2.token - 1 && t2[n2.end + 1].token === s.token + 1, o = String.fromCharCode(n2.marker), (i = e2.tokens[n2.token]).type = a ? "strong_open" : "em_open", i.tag = a ? "strong" : "em", i.nesting = 1, i.markup = a ? o + o : o, i.content = "", (i = e2.tokens[s.token]).type = a ? "strong_close" : "em_close", i.tag = a ? "strong" : "em", i.nesting = -1, i.markup = a ? o + o : o, i.content = "", a && (e2.tokens[t2[r2 - 1].token].content = "", e2.tokens[t2[n2.end + 1].token].content = "", r2--));
        }
        e.exports.tokenize = function(e2, t2) {
          var r2, n2, s = e2.pos, i = e2.src.charCodeAt(s);
          if (t2)
            return false;
          if (95 !== i && 42 !== i)
            return false;
          for (n2 = e2.scanDelims(e2.pos, 42 === i), r2 = 0; r2 < n2.length; r2++)
            e2.push("text", "", 0).content = String.fromCharCode(i), e2.delimiters.push({ marker: i, length: n2.length, token: e2.tokens.length - 1, end: -1, open: n2.can_open, close: n2.can_close });
          return e2.pos += n2.length, true;
        }, e.exports.postProcess = function(e2) {
          var t2, r2 = e2.tokens_meta, s = e2.tokens_meta.length;
          for (n(e2, e2.delimiters), t2 = 0; t2 < s; t2++)
            r2[t2] && r2[t2].delimiters && n(e2, r2[t2].delimiters);
        };
      }, function(e, t, r) {
        "use strict";
        const n = r(18), s = { leftDelimiter: "{", rightDelimiter: "}", allowedAttributes: [] };
        function i(e2, t2, r2) {
          let n2 = { match: false, j: null }, s2 = void 0 !== r2.shift ? t2 + r2.shift : r2.position, l = (u = e2, (p = s2) >= 0 ? u[p] : u[u.length + p]);
          var u, p;
          if (void 0 === l)
            return n2;
          for (let e3 in r2)
            if ("shift" !== e3 && "position" !== e3) {
              if (void 0 === l[e3])
                return n2;
              if ("children" === e3 && o(r2.children)) {
                if (0 === l.children.length)
                  return n2;
                let e4, t3 = r2.children, s3 = l.children;
                if (t3.every((e5) => void 0 !== e5.position)) {
                  if (e4 = t3.every((e5) => i(s3, e5.position, e5).match), e4) {
                    let e5 = c(t3).position;
                    n2.j = e5 >= 0 ? e5 : s3.length + e5;
                  }
                } else
                  for (let r3 = 0; r3 < s3.length; r3++)
                    if (e4 = t3.every((e5) => i(s3, r3, e5).match), e4) {
                      n2.j = r3;
                      break;
                    }
                if (false === e4)
                  return n2;
              } else
                switch (typeof r2[e3]) {
                  case "boolean":
                  case "number":
                  case "string":
                    if (l[e3] !== r2[e3])
                      return n2;
                    break;
                  case "function":
                    if (!r2[e3](l[e3]))
                      return n2;
                    break;
                  case "object":
                    if (a(r2[e3])) {
                      if (false === r2[e3].every((t3) => t3(l[e3])))
                        return n2;
                      break;
                    }
                  default:
                    throw new Error(`Unknown type of pattern test (key: ${e3}). Test should be of type boolean, number, string, function or array of functions.`);
                }
            }
          return n2.match = true, n2;
        }
        function o(e2) {
          return Array.isArray(e2) && e2.length && e2.every((e3) => "object" == typeof e3);
        }
        function a(e2) {
          return Array.isArray(e2) && e2.length && e2.every((e3) => "function" == typeof e3);
        }
        function c(e2) {
          return e2.slice(-1)[0] || {};
        }
        e.exports = function(e2, t2) {
          let r2 = Object.assign({}, s);
          r2 = Object.assign(r2, t2);
          const o2 = n(r2);
          e2.core.ruler.before("linkify", "curly_attributes", function(e3) {
            let t3 = e3.tokens;
            for (let e4 = 0; e4 < t3.length; e4++)
              for (let r3 = 0; r3 < o2.length; r3++) {
                let n2 = o2[r3], s2 = null;
                n2.tests.every((r4) => {
                  let n3 = i(t3, e4, r4);
                  return null !== n3.j && (s2 = n3.j), n3.match;
                }) && (n2.transform(t3, e4, s2), "inline attributes" !== n2.name && "inline nesting 0" !== n2.name || r3--);
              }
          });
        };
      }, function(e, t, r) {
        "use strict";
        e.exports = r(20);
      }, function(e, t, r) {
        "use strict";
        r.r(t), r.d(t, "default", function() {
          return g;
        });
        var n = r(1), s = r(15), i = r.n(s), o = function(e2, t2) {
          var r2 = (void 0 === t2 ? {} : t2).lineMarkup, n2 = void 0 === r2 ? "data-line" : r2, s2 = function(e3, t3, r3, n3, s3) {
            return s3.renderToken(e3, t3, r3);
          };
          function i2(e3) {
            return function(t3, r3, s3, i3, o3) {
              var a3 = t3[r3];
              return a3.attrPush([n2, a3.map[0] + 1]), e3(t3, r3, s3, i3, o3);
            };
          }
          function o2(e3) {
            return function(t3, r3, s3, i3, o3) {
              var a3 = e3(t3, r3, s3, i3, o3), c2 = t3[r3].map[0] + 1;
              return "<div " + n2 + '="' + c2 + '">' + a3 + "</div>";
            };
          }
          var a2 = { table_open: i2, blockquote_open: i2, bullet_list_open: i2, ordered_list_open: i2, reference_open: i2, heading_open: i2, lheading_open: i2, paragraph_open: i2, hr: i2, html_block: o2, code_block: o2, fence: o2 };
          Object.keys(a2).forEach(function(t3) {
            var r3 = e2.renderer.rules[t3] || s2;
            e2.renderer.rules[t3] = a2[t3](r3);
          });
        }, a = function(e2, t2) {
          void 0 === t2 && (t2 = {});
          var r2 = t2.getMarks;
          r2 && e2.core.ruler.push("anchor", function(e3) {
            var t3 = {}, n2 = e3.tokens;
            n2.filter(function(e4) {
              return "heading_open" === e4.type;
            }).forEach(function(e4) {
              var s2 = n2[n2.indexOf(e4) + 1].content, i2 = Number(e4.tag.substr(1));
              t3[s2] = s2 in t3 ? Number(t3[s2]) + 1 : "";
              var o2 = r2(s2, i2, t3[s2]);
              o2 && o2.forEach(function(t4) {
                var r3 = t4.attr, n3 = t4.value;
                e4.attrPush([r3, n3]);
              });
            });
          });
        }, c = { includeLevel: [2, 3], containerClass: "table-of-contents", listClass: "table-of-content-list", listItemClass: "table-of-content-list-item", markerPattern: /^\[\[toc\]\]/im, listType: "ul", getAnchorAttrs: function() {
          return [];
        }, format: void 0, forceFullToc: false, containerHeaderHtml: void 0, containerFooterHtml: void 0, transformLink: void 0 }, l = function(e2, t2) {
          var r2, s2 = Object(n.a)({}, c, t2), i2 = s2.markerPattern;
          function o2(e3, t3, r3) {
            for (var n2, i3, a2 = [], c2 = "", l2 = t3.length, u2 = e3; u2 < l2; ) {
              var p2 = t3[u2], h2 = t3[u2 - 1], f2 = p2.tag && parseInt(p2.tag.substr(1, 1));
              if ("heading_close" === p2.type && -1 != s2.includeLevel.indexOf(f2) && "inline" === h2.type) {
                if (n2) {
                  if (f2 > n2) {
                    c2 += (i3 = o2(u2, t3, r3))[1], u2 = i3[0];
                    continue;
                  }
                  if (f2 < n2)
                    return c2 += "</li>", a2.push(c2), [u2, "<" + s2.listType + ' class="' + s2.listClass + '">' + a2.join("") + "</" + s2.listType + ">"];
                  f2 == n2 && (c2 += "</li>", a2.push(c2));
                } else
                  n2 = f2;
                var d2 = h2.children.reduce(function(e4, t4) {
                  return e4 + t4.content;
                }, ""), g2 = h2.content, m = r3[g2] = g2 in r3 ? Number(r3[g2]) + 1 : "", _ = s2.getAnchorAttrs(g2, f2, m);
                c2 = '<li class="' + s2.listItemClass + '">\n      <a ' + _.map(function(e4) {
                  return e4.attr + '="' + e4.value + '"';
                }).join(" ") + ">", c2 += d2, c2 += "</a>", u2++;
              } else
                u2++;
            }
            return c2 += "" === c2 ? "" : "</li>", a2.push(c2), [u2, "<" + s2.listType + ' class="' + s2.listClass + '">' + a2.join("") + "</" + s2.listType + ">"];
          }
          e2.renderer.rules.toc_open = function(e3, t3) {
            var r3 = '<div class="' + s2.containerClass + '">';
            return s2.containerHeaderHtml && (r3 += s2.containerHeaderHtml), r3;
          }, e2.renderer.rules.toc_close = function(e3, t3) {
            var r3 = "";
            return s2.containerFooterHtml && (r3 = s2.containerFooterHtml), r3 + "</div>";
          }, e2.renderer.rules.toc_body = function(e3, t3) {
            var n2 = {};
            if (s2.forceFullToc) {
              for (var i3 = "", a2 = 0, c2 = r2 && r2.tokens && r2.tokens.length; a2 < c2; ) {
                var l2 = o2(a2, r2.tokens, n2);
                a2 = l2[0], i3 += l2[1];
              }
              return i3;
            }
            return o2(0, r2.tokens, n2)[1];
          }, e2.core.ruler.push("grab_state", function(e3) {
            r2 = e3;
          }), e2.inline.ruler.after("emphasis", "toc", function(e3, t3) {
            var r3;
            if (91 !== e3.src.charCodeAt(e3.pos))
              return false;
            if (t3)
              return false;
            if ((r3 = (r3 = i2.exec(e3.src.substr(e3.pos))) ? r3.filter(function(e4) {
              return e4;
            }) : []).length < 1)
              return false;
            e3.push("toc_open", "toc", 1).markup = "[[toc]]", e3.push("toc_body", "", 0), e3.push("toc_close", "toc", -1);
            var n2 = e3.src.indexOf("\n", e3.pos);
            return e3.pos = -1 !== n2 ? n2 : e3.pos + e3.posMax + 1, true;
          });
        }, u = function(e2, t2) {
          void 0 === t2 && (t2 = {});
          var r2 = t2.getWrapperClass, n2 = void 0 === r2 ? function(e3) {
            return "language-" + e3;
          } : r2, s2 = function(e3) {
            return function() {
              for (var t3 = arguments.length, r3 = new Array(t3), s3 = 0; s3 < t3; s3++)
                r3[s3] = arguments[s3];
              var i3 = r3[0], o3 = r3[1], a3 = i3[o3], c2 = e3.apply(void 0, r3);
              return '<!--beforebegin--><div class="' + n2(a3.info.trim()) + ' extra-class" extra-attr><!--afterbegin-->' + c2 + "<!--beforeend--></div><!--afterend-->";
            };
          }, i2 = e2.renderer.rules, o2 = i2.fence, a2 = i2.code_block;
          e2.renderer.rules.fence = s2(o2), e2.renderer.rules.code_block = s2(a2);
        }, p = function(e2, t2) {
          var r2 = t2.externalAttrs, n2 = t2.openLinkIcon, s2 = t2.openLinkIconClass, i2 = false;
          e2.renderer.rules.link_open = function(e3, t3, n3, s3, o2) {
            var a2 = e3[t3], c2 = a2.attrIndex("href");
            if (c2 >= 0) {
              var l2 = a2.attrs[c2][1];
              /^https?:/.test(l2) && (Object.keys(r2).forEach(function(e4) {
                a2.attrSet(e4, r2[e4]);
              }), /_blank/i.test(r2.target) && (i2 = true));
            }
            return o2.renderToken(e3, t3, n3);
          }, e2.renderer.rules.link_close = function(e3, t3, r3, o2, a2) {
            return i2 && (i2 = false, n2) ? s2 ? '<i class="' + s2 + '"></i>' + a2.renderToken(e3, t3, r3) : '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="v-md-svg-outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>' + a2.renderToken(e3, t3, r3) : a2.renderToken(e3, t3, r3);
          };
        }, h = r(6), f = r.n(h), d = r(2);
        function g(e2) {
          var t2 = void 0 === e2 ? {} : e2, r2 = t2.toc, s2 = t2.link, c2 = t2.attrs, h2 = Object(d.b)();
          return h2.use(p, Object(n.a)({ externalAttrs: { target: "_blank" } }, s2)).use(u, { getWrapperClass: function(e3) {
            return "v-md-pre-wrapper v-md-pre-wrapper-" + e3;
          } }).use(i.a, Object(n.a)({ leftDelimiter: "{{{", rightDelimiter: "}}}" }, c2, { allowedAttributes: ["width", "height"].concat(null == c2 ? void 0 : c2.allowedAttributes) })).use(a, { getMarks: function(e3, t3, r3) {
            return [{ attr: "data-v-md-heading", value: f()(e3) + (r3 ? "-" + r3 : "") }];
          } }).use(l, Object(n.a)({ listClass: "v-md-toc", listItemClass: "v-md-toc-item", getAnchorAttrs: function(e3, t3, r3) {
            return [{ attr: "data-v-md-anchor", value: f()(e3) + (r3 ? "-" + r3 : "") }];
          } }, r2)).use(o, { lineMarkup: "data-v-md-line" }), { previewClass: "markdown-body", extend: function(e3) {
            e3(h2);
          }, markdownParser: h2 };
        }
      }, function(e, t, r) {
        "use strict";
        const n = r(19);
        function s(e2) {
          return e2.slice(-1)[0];
        }
        e.exports = (e2) => {
          const t2 = new RegExp("^ {0,3}[-*_]{3,} ?" + n.escapeRegExp(e2.leftDelimiter) + "[^" + n.escapeRegExp(e2.rightDelimiter) + "]");
          return [{ name: "fenced code blocks", tests: [{ shift: 0, block: true, info: n.hasDelimiters("end", e2) }], transform: (t3, r2) => {
            let s2 = t3[r2], i = s2.info.lastIndexOf(e2.leftDelimiter), o = n.getAttrs(s2.info, i, e2);
            n.addAttrs(o, s2), s2.info = n.removeDelimiter(s2.info, e2);
          } }, { name: "inline nesting 0", tests: [{ shift: 0, type: "inline", children: [{ shift: -1, type: (e3) => "image" === e3 || "code_inline" === e3 }, { shift: 0, type: "text", content: n.hasDelimiters("start", e2) }] }], transform: (t3, r2, s2) => {
            let i = t3[r2].children[s2], o = i.content.indexOf(e2.rightDelimiter), a = t3[r2].children[s2 - 1], c = n.getAttrs(i.content, 0, e2);
            n.addAttrs(c, a), i.content.length === o + e2.rightDelimiter.length ? t3[r2].children.splice(s2, 1) : i.content = i.content.slice(o + e2.rightDelimiter.length);
          } }, { name: "tables", tests: [{ shift: 0, type: "table_close" }, { shift: 1, type: "paragraph_open" }, { shift: 2, type: "inline", content: n.hasDelimiters("only", e2) }], transform: (t3, r2) => {
            let s2 = t3[r2 + 2], i = n.getMatchingOpeningToken(t3, r2), o = n.getAttrs(s2.content, 0, e2);
            n.addAttrs(o, i), t3.splice(r2 + 1, 3);
          } }, { name: "inline attributes", tests: [{ shift: 0, type: "inline", children: [{ shift: -1, nesting: -1 }, { shift: 0, type: "text", content: n.hasDelimiters("start", e2) }] }], transform: (t3, r2, s2) => {
            let i = t3[r2].children[s2], o = i.content, a = n.getAttrs(o, 0, e2), c = n.getMatchingOpeningToken(t3[r2].children, s2 - 1);
            n.addAttrs(a, c), i.content = o.slice(o.indexOf(e2.rightDelimiter) + e2.rightDelimiter.length);
          } }, { name: "list softbreak", tests: [{ shift: -2, type: "list_item_open" }, { shift: 0, type: "inline", children: [{ position: -2, type: "softbreak" }, { position: -1, type: "text", content: n.hasDelimiters("only", e2) }] }], transform: (t3, r2, s2) => {
            let i = t3[r2].children[s2].content, o = n.getAttrs(i, 0, e2), a = r2 - 2;
            for (; t3[a - 1] && "ordered_list_open" !== t3[a - 1].type && "bullet_list_open" !== t3[a - 1].type; )
              a--;
            n.addAttrs(o, t3[a - 1]), t3[r2].children = t3[r2].children.slice(0, -2);
          } }, { name: "list double softbreak", tests: [{ shift: 0, type: (e3) => "bullet_list_close" === e3 || "ordered_list_close" === e3 }, { shift: 1, type: "paragraph_open" }, { shift: 2, type: "inline", content: n.hasDelimiters("only", e2), children: (e3) => 1 === e3.length }, { shift: 3, type: "paragraph_close" }], transform: (t3, r2) => {
            let s2 = t3[r2 + 2].content, i = n.getAttrs(s2, 0, e2), o = n.getMatchingOpeningToken(t3, r2);
            n.addAttrs(i, o), t3.splice(r2 + 1, 3);
          } }, { name: "list item end", tests: [{ shift: -2, type: "list_item_open" }, { shift: 0, type: "inline", children: [{ position: -1, type: "text", content: n.hasDelimiters("end", e2) }] }], transform: (t3, r2, i) => {
            let o = t3[r2].children[i], a = o.content, c = n.getAttrs(a, a.lastIndexOf(e2.leftDelimiter), e2);
            n.addAttrs(c, t3[r2 - 2]);
            let l = a.slice(0, a.lastIndexOf(e2.leftDelimiter));
            o.content = " " !== s(l) ? l : l.slice(0, -1);
          } }, { name: "\n{.a} softbreak then curly in start", tests: [{ shift: 0, type: "inline", children: [{ position: -2, type: "softbreak" }, { position: -1, type: "text", content: n.hasDelimiters("only", e2) }] }], transform: (t3, r2, s2) => {
            let i = t3[r2].children[s2], o = n.getAttrs(i.content, 0, e2), a = r2 + 1;
            for (; t3[a + 1] && -1 === t3[a + 1].nesting; )
              a++;
            let c = n.getMatchingOpeningToken(t3, a);
            n.addAttrs(o, c), t3[r2].children = t3[r2].children.slice(0, -2);
          } }, { name: "horizontal rule", tests: [{ shift: 0, type: "paragraph_open" }, { shift: 1, type: "inline", children: (e3) => 1 === e3.length, content: (e3) => null !== e3.match(t2) }, { shift: 2, type: "paragraph_close" }], transform: (t3, r2) => {
            let s2 = t3[r2];
            s2.type = "hr", s2.tag = "hr", s2.nesting = 0;
            let i = t3[r2 + 1].content, o = i.lastIndexOf(e2.leftDelimiter);
            s2.attrs = n.getAttrs(i, o, e2), s2.markup = i, t3.splice(r2 + 1, 2);
          } }, { name: "end of block", tests: [{ shift: 0, type: "inline", children: [{ position: -1, content: n.hasDelimiters("end", e2), type: (e3) => "code_inline" !== e3 }] }], transform: (t3, r2, i) => {
            let o = t3[r2].children[i], a = o.content, c = n.getAttrs(a, a.lastIndexOf(e2.leftDelimiter), e2), l = r2 + 1;
            for (; t3[l + 1] && -1 === t3[l + 1].nesting; )
              l++;
            let u = n.getMatchingOpeningToken(t3, l);
            n.addAttrs(c, u);
            let p = a.slice(0, a.lastIndexOf(e2.leftDelimiter));
            o.content = " " !== s(p) ? p : p.slice(0, -1);
          } }];
        };
      }, function(e, t, r) {
        "use strict";
        function n(e2) {
          return e2.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        t.getAttrs = function(e2, t2, r2) {
          const n2 = /[^\t\n\f />"'=]/, s2 = [];
          let i2 = "", o2 = "", a2 = true, c = false;
          for (let l = t2 + r2.leftDelimiter.length; l < e2.length; l++) {
            if (e2.slice(l, l + r2.rightDelimiter.length) === r2.rightDelimiter) {
              "" !== i2 && s2.push([i2, o2]);
              break;
            }
            let t3 = e2.charAt(l);
            if ("=" === t3 && a2)
              a2 = false;
            else if ("." !== t3 || "" !== i2)
              if ("#" !== t3 || "" !== i2)
                if ('"' !== t3 || "" !== o2)
                  if ('"' === t3 && c)
                    c = false;
                  else if (" " !== t3 || c)
                    a2 && -1 === t3.search(n2) || (a2 ? i2 += t3 : o2 += t3);
                  else {
                    if ("" === i2)
                      continue;
                    s2.push([i2, o2]), i2 = "", o2 = "", a2 = true;
                  }
                else
                  c = true;
              else
                i2 = "id", a2 = false;
            else
              "." === e2.charAt(l + 1) ? (i2 = "css-module", l += 1) : i2 = "class", a2 = false;
          }
          if (r2.allowedAttributes && r2.allowedAttributes.length) {
            let e3 = r2.allowedAttributes;
            return s2.filter(function(t3) {
              let r3 = t3[0];
              return e3.some(function(e4) {
                return r3 === e4 || e4 instanceof RegExp && e4.test(r3);
              });
            });
          }
          return s2;
        }, t.addAttrs = function(e2, t2) {
          for (let r2 = 0, n2 = e2.length; r2 < n2; ++r2) {
            let n3 = e2[r2][0];
            "class" === n3 ? t2.attrJoin("class", e2[r2][1]) : "css-module" === n3 ? t2.attrJoin("css-module", e2[r2][1]) : t2.attrPush(e2[r2]);
          }
          return t2;
        }, t.hasDelimiters = function(e2, t2) {
          if (!e2)
            throw new Error('Parameter `where` not passed. Should be "start", "middle", "end" or "only".');
          return function(r2) {
            let n2, s2, i2, o2, a2 = t2.leftDelimiter.length + 1 + t2.rightDelimiter.length;
            if (!r2 || "string" != typeof r2 || r2.length < a2)
              return false;
            let c = a2 - t2.rightDelimiter.length;
            switch (e2) {
              case "start":
                i2 = r2.slice(0, t2.leftDelimiter.length), n2 = i2 === t2.leftDelimiter ? 0 : -1, s2 = -1 === n2 ? -1 : r2.indexOf(t2.rightDelimiter, c), o2 = r2.charAt(s2 + t2.rightDelimiter.length), o2 && -1 !== t2.rightDelimiter.indexOf(o2) && (s2 = -1);
                break;
              case "end":
                n2 = r2.lastIndexOf(t2.leftDelimiter), s2 = -1 === n2 ? -1 : r2.indexOf(t2.rightDelimiter, n2 + c), s2 = s2 === r2.length - t2.rightDelimiter.length ? s2 : -1;
                break;
              case "only":
                i2 = r2.slice(0, t2.leftDelimiter.length), n2 = i2 === t2.leftDelimiter ? 0 : -1, i2 = r2.slice(r2.length - t2.rightDelimiter.length), s2 = i2 === t2.rightDelimiter ? r2.length - t2.rightDelimiter.length : -1;
            }
            return -1 !== n2 && -1 !== s2 && function(e3) {
              let r3 = "." === e3.charAt(t2.leftDelimiter.length), n3 = "#" === e3.charAt(t2.leftDelimiter.length);
              return r3 || n3 ? e3.length >= a2 + 1 : e3.length >= a2;
            }(r2.substring(n2, s2 + t2.rightDelimiter.length));
          };
        }, t.removeDelimiter = function(e2, t2) {
          const r2 = n(t2.leftDelimiter), s2 = n(t2.rightDelimiter);
          let i2 = new RegExp("[ \\n]?" + r2 + "[^" + r2 + s2 + "]+" + s2 + "$"), o2 = e2.search(i2);
          return -1 !== o2 ? e2.slice(0, o2) : e2;
        }, t.escapeRegExp = n, t.getMatchingOpeningToken = function(e2, t2) {
          if ("softbreak" === e2[t2].type)
            return false;
          if (0 === e2[t2].nesting)
            return e2[t2];
          let r2 = e2[t2].level, n2 = e2[t2].type.replace("_close", "_open");
          for (; t2 >= 0; --t2)
            if (e2[t2].type === n2 && e2[t2].level === r2)
              return e2[t2];
        };
        let s = /[&<>"]/, i = /[&<>"]/g, o = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
        function a(e2) {
          return o[e2];
        }
        t.escapeHtml = function(e2) {
          return s.test(e2) ? e2.replace(i, a) : e2;
        };
      }, function(e, t, r) {
        "use strict";
        var n = r(0), s = r(28), i = r(32), o = r(33), a = r(41), c = r(55), l = r(68), u = r(8), p = r(70), h = { default: r(73), zero: r(74), commonmark: r(75) }, f = /^(vbscript|javascript|file|data):/, d = /^data:image\/(gif|png|jpeg|webp);/;
        function g(e2) {
          var t2 = e2.trim().toLowerCase();
          return !f.test(t2) || !!d.test(t2);
        }
        var m = ["http:", "https:", "mailto:"];
        function _(e2) {
          var t2 = u.parse(e2, true);
          if (t2.hostname && (!t2.protocol || m.indexOf(t2.protocol) >= 0))
            try {
              t2.hostname = p.toASCII(t2.hostname);
            } catch (e3) {
            }
          return u.encode(u.format(t2));
        }
        function b(e2) {
          var t2 = u.parse(e2, true);
          if (t2.hostname && (!t2.protocol || m.indexOf(t2.protocol) >= 0))
            try {
              t2.hostname = p.toUnicode(t2.hostname);
            } catch (e3) {
            }
          return u.decode(u.format(t2), u.decode.defaultChars + "%");
        }
        function k(e2, t2) {
          if (!(this instanceof k))
            return new k(e2, t2);
          t2 || n.isString(e2) || (t2 = e2 || {}, e2 = "default"), this.inline = new c(), this.block = new a(), this.core = new o(), this.renderer = new i(), this.linkify = new l(), this.validateLink = g, this.normalizeLink = _, this.normalizeLinkText = b, this.utils = n, this.helpers = n.assign({}, s), this.options = {}, this.configure(e2), t2 && this.set(t2);
        }
        k.prototype.set = function(e2) {
          return n.assign(this.options, e2), this;
        }, k.prototype.configure = function(e2) {
          var t2, r2 = this;
          if (n.isString(e2) && !(e2 = h[t2 = e2]))
            throw new Error('Wrong `markdown-it` preset "' + t2 + '", check name');
          if (!e2)
            throw new Error("Wrong `markdown-it` preset, can't be empty");
          return e2.options && r2.set(e2.options), e2.components && Object.keys(e2.components).forEach(function(t3) {
            e2.components[t3].rules && r2[t3].ruler.enableOnly(e2.components[t3].rules), e2.components[t3].rules2 && r2[t3].ruler2.enableOnly(e2.components[t3].rules2);
          }), this;
        }, k.prototype.enable = function(e2, t2) {
          var r2 = [];
          Array.isArray(e2) || (e2 = [e2]), ["core", "block", "inline"].forEach(function(t3) {
            r2 = r2.concat(this[t3].ruler.enable(e2, true));
          }, this), r2 = r2.concat(this.inline.ruler2.enable(e2, true));
          var n2 = e2.filter(function(e3) {
            return r2.indexOf(e3) < 0;
          });
          if (n2.length && !t2)
            throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + n2);
          return this;
        }, k.prototype.disable = function(e2, t2) {
          var r2 = [];
          Array.isArray(e2) || (e2 = [e2]), ["core", "block", "inline"].forEach(function(t3) {
            r2 = r2.concat(this[t3].ruler.disable(e2, true));
          }, this), r2 = r2.concat(this.inline.ruler2.disable(e2, true));
          var n2 = e2.filter(function(e3) {
            return r2.indexOf(e3) < 0;
          });
          if (n2.length && !t2)
            throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + n2);
          return this;
        }, k.prototype.use = function(e2) {
          var t2 = [this].concat(Array.prototype.slice.call(arguments, 1));
          return e2.apply(e2, t2), this;
        }, k.prototype.parse = function(e2, t2) {
          if ("string" != typeof e2)
            throw new Error("Input data should be a String");
          var r2 = new this.core.State(e2, this, t2);
          return this.core.process(r2), r2.tokens;
        }, k.prototype.render = function(e2, t2) {
          return t2 = t2 || {}, this.renderer.render(this.parse(e2, t2), this.options, t2);
        }, k.prototype.parseInline = function(e2, t2) {
          var r2 = new this.core.State(e2, this, t2);
          return r2.inlineMode = true, this.core.process(r2), r2.tokens;
        }, k.prototype.renderInline = function(e2, t2) {
          return t2 = t2 || {}, this.renderer.render(this.parseInline(e2, t2), this.options, t2);
        }, e.exports = k;
      }, function(e) {
        e.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}');
      }, function(e, t, r) {
        "use strict";
        var n = {};
        function s(e2, t2, r2) {
          var i, o, a, c, l, u = "";
          for ("string" != typeof t2 && (r2 = t2, t2 = s.defaultChars), void 0 === r2 && (r2 = true), l = function(e3) {
            var t3, r3, s2 = n[e3];
            if (s2)
              return s2;
            for (s2 = n[e3] = [], t3 = 0; t3 < 128; t3++)
              r3 = String.fromCharCode(t3), /^[0-9a-z]$/i.test(r3) ? s2.push(r3) : s2.push("%" + ("0" + t3.toString(16).toUpperCase()).slice(-2));
            for (t3 = 0; t3 < e3.length; t3++)
              s2[e3.charCodeAt(t3)] = e3[t3];
            return s2;
          }(t2), i = 0, o = e2.length; i < o; i++)
            if (a = e2.charCodeAt(i), r2 && 37 === a && i + 2 < o && /^[0-9a-f]{2}$/i.test(e2.slice(i + 1, i + 3)))
              u += e2.slice(i, i + 3), i += 2;
            else if (a < 128)
              u += l[a];
            else if (a >= 55296 && a <= 57343) {
              if (a >= 55296 && a <= 56319 && i + 1 < o && (c = e2.charCodeAt(i + 1)) >= 56320 && c <= 57343) {
                u += encodeURIComponent(e2[i] + e2[i + 1]), i++;
                continue;
              }
              u += "%EF%BF%BD";
            } else
              u += encodeURIComponent(e2[i]);
          return u;
        }
        s.defaultChars = ";/?:@&=+$,-_.!~*'()#", s.componentChars = "-_.!~*'()", e.exports = s;
      }, function(e, t, r) {
        "use strict";
        var n = {};
        function s(e2, t2) {
          var r2;
          return "string" != typeof t2 && (t2 = s.defaultChars), r2 = function(e3) {
            var t3, r3, s2 = n[e3];
            if (s2)
              return s2;
            for (s2 = n[e3] = [], t3 = 0; t3 < 128; t3++)
              r3 = String.fromCharCode(t3), s2.push(r3);
            for (t3 = 0; t3 < e3.length; t3++)
              s2[r3 = e3.charCodeAt(t3)] = "%" + ("0" + r3.toString(16).toUpperCase()).slice(-2);
            return s2;
          }(t2), e2.replace(/(%[a-f0-9]{2})+/gi, function(e3) {
            var t3, n2, s2, i, o, a, c, l = "";
            for (t3 = 0, n2 = e3.length; t3 < n2; t3 += 3)
              (s2 = parseInt(e3.slice(t3 + 1, t3 + 3), 16)) < 128 ? l += r2[s2] : 192 == (224 & s2) && t3 + 3 < n2 && 128 == (192 & (i = parseInt(e3.slice(t3 + 4, t3 + 6), 16))) ? (l += (c = s2 << 6 & 1984 | 63 & i) < 128 ? "��" : String.fromCharCode(c), t3 += 3) : 224 == (240 & s2) && t3 + 6 < n2 && (i = parseInt(e3.slice(t3 + 4, t3 + 6), 16), o = parseInt(e3.slice(t3 + 7, t3 + 9), 16), 128 == (192 & i) && 128 == (192 & o)) ? (l += (c = s2 << 12 & 61440 | i << 6 & 4032 | 63 & o) < 2048 || c >= 55296 && c <= 57343 ? "���" : String.fromCharCode(c), t3 += 6) : 240 == (248 & s2) && t3 + 9 < n2 && (i = parseInt(e3.slice(t3 + 4, t3 + 6), 16), o = parseInt(e3.slice(t3 + 7, t3 + 9), 16), a = parseInt(e3.slice(t3 + 10, t3 + 12), 16), 128 == (192 & i) && 128 == (192 & o) && 128 == (192 & a)) ? ((c = s2 << 18 & 1835008 | i << 12 & 258048 | o << 6 & 4032 | 63 & a) < 65536 || c > 1114111 ? l += "����" : (c -= 65536, l += String.fromCharCode(55296 + (c >> 10), 56320 + (1023 & c))), t3 += 9) : l += "�";
            return l;
          });
        }
        s.defaultChars = ";/?:@&=+$,#", s.componentChars = "", e.exports = s;
      }, function(e, t, r) {
        "use strict";
        e.exports = function(e2) {
          var t2 = "";
          return t2 += e2.protocol || "", t2 += e2.slashes ? "//" : "", t2 += e2.auth ? e2.auth + "@" : "", e2.hostname && -1 !== e2.hostname.indexOf(":") ? t2 += "[" + e2.hostname + "]" : t2 += e2.hostname || "", t2 += e2.port ? ":" + e2.port : "", t2 += e2.pathname || "", t2 += e2.search || "", t2 += e2.hash || "";
        };
      }, function(e, t, r) {
        "use strict";
        function n() {
          this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
        }
        var s = /^([a-z0-9.+-]+:)/i, i = /:[0-9]*$/, o = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, a = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "	"]), c = ["'"].concat(a), l = ["%", "/", "?", ";", "#"].concat(c), u = ["/", "?", "#"], p = /^[+a-z0-9A-Z_-]{0,63}$/, h = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, f = { javascript: true, "javascript:": true }, d = { http: true, https: true, ftp: true, gopher: true, file: true, "http:": true, "https:": true, "ftp:": true, "gopher:": true, "file:": true };
        n.prototype.parse = function(e2, t2) {
          var r2, n2, i2, a2, c2, g = e2;
          if (g = g.trim(), !t2 && 1 === e2.split("#").length) {
            var m = o.exec(g);
            if (m)
              return this.pathname = m[1], m[2] && (this.search = m[2]), this;
          }
          var _ = s.exec(g);
          if (_ && (i2 = (_ = _[0]).toLowerCase(), this.protocol = _, g = g.substr(_.length)), (t2 || _ || g.match(/^\/\/[^@\/]+@[^@\/]+/)) && (!(c2 = "//" === g.substr(0, 2)) || _ && f[_] || (g = g.substr(2), this.slashes = true)), !f[_] && (c2 || _ && !d[_])) {
            var b, k, v = -1;
            for (r2 = 0; r2 < u.length; r2++)
              -1 !== (a2 = g.indexOf(u[r2])) && (-1 === v || a2 < v) && (v = a2);
            for (-1 !== (k = -1 === v ? g.lastIndexOf("@") : g.lastIndexOf("@", v)) && (b = g.slice(0, k), g = g.slice(k + 1), this.auth = b), v = -1, r2 = 0; r2 < l.length; r2++)
              -1 !== (a2 = g.indexOf(l[r2])) && (-1 === v || a2 < v) && (v = a2);
            -1 === v && (v = g.length), ":" === g[v - 1] && v--;
            var y = g.slice(0, v);
            g = g.slice(v), this.parseHost(y), this.hostname = this.hostname || "";
            var x = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!x) {
              var C = this.hostname.split(/\./);
              for (r2 = 0, n2 = C.length; r2 < n2; r2++) {
                var A = C[r2];
                if (A && !A.match(p)) {
                  for (var D = "", w = 0, E = A.length; w < E; w++)
                    A.charCodeAt(w) > 127 ? D += "x" : D += A[w];
                  if (!D.match(p)) {
                    var q = C.slice(0, r2), S = C.slice(r2 + 1), F = A.match(h);
                    F && (q.push(F[1]), S.unshift(F[2])), S.length && (g = S.join(".") + g), this.hostname = q.join(".");
                    break;
                  }
                }
              }
            }
            this.hostname.length > 255 && (this.hostname = ""), x && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
          }
          var L = g.indexOf("#");
          -1 !== L && (this.hash = g.substr(L), g = g.slice(0, L));
          var z = g.indexOf("?");
          return -1 !== z && (this.search = g.substr(z), g = g.slice(0, z)), g && (this.pathname = g), d[i2] && this.hostname && !this.pathname && (this.pathname = ""), this;
        }, n.prototype.parseHost = function(e2) {
          var t2 = i.exec(e2);
          t2 && (":" !== (t2 = t2[0]) && (this.port = t2.substr(1)), e2 = e2.substr(0, e2.length - t2.length)), e2 && (this.hostname = e2);
        }, e.exports = function(e2, t2) {
          if (e2 && e2 instanceof n)
            return e2;
          var r2 = new n();
          return r2.parse(e2, t2), r2;
        };
      }, function(e, t, r) {
        "use strict";
        t.Any = r(9), t.Cc = r(10), t.Cf = r(27), t.P = r(3), t.Z = r(11);
      }, function(e, t) {
        e.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
      }, function(e, t, r) {
        "use strict";
        t.parseLinkLabel = r(29), t.parseLinkDestination = r(30), t.parseLinkTitle = r(31);
      }, function(e, t, r) {
        "use strict";
        e.exports = function(e2, t2, r2) {
          var n, s, i, o, a = -1, c = e2.posMax, l = e2.pos;
          for (e2.pos = t2 + 1, n = 1; e2.pos < c; ) {
            if (93 === (i = e2.src.charCodeAt(e2.pos)) && 0 === --n) {
              s = true;
              break;
            }
            if (o = e2.pos, e2.md.inline.skipToken(e2), 91 === i) {
              if (o === e2.pos - 1)
                n++;
              else if (r2)
                return e2.pos = l, -1;
            }
          }
          return s && (a = e2.pos), e2.pos = l, a;
        };
      }, function(e, t, r) {
        "use strict";
        var n = r(0).unescapeAll;
        e.exports = function(e2, t2, r2) {
          var s, i, o = t2, a = { ok: false, pos: 0, lines: 0, str: "" };
          if (60 === e2.charCodeAt(t2)) {
            for (t2++; t2 < r2; ) {
              if (10 === (s = e2.charCodeAt(t2)))
                return a;
              if (60 === s)
                return a;
              if (62 === s)
                return a.pos = t2 + 1, a.str = n(e2.slice(o + 1, t2)), a.ok = true, a;
              92 === s && t2 + 1 < r2 ? t2 += 2 : t2++;
            }
            return a;
          }
          for (i = 0; t2 < r2 && 32 !== (s = e2.charCodeAt(t2)) && !(s < 32 || 127 === s); )
            if (92 === s && t2 + 1 < r2) {
              if (32 === e2.charCodeAt(t2 + 1))
                break;
              t2 += 2;
            } else {
              if (40 === s && ++i > 32)
                return a;
              if (41 === s) {
                if (0 === i)
                  break;
                i--;
              }
              t2++;
            }
          return o === t2 || 0 !== i || (a.str = n(e2.slice(o, t2)), a.lines = 0, a.pos = t2, a.ok = true), a;
        };
      }, function(e, t, r) {
        "use strict";
        var n = r(0).unescapeAll;
        e.exports = function(e2, t2, r2) {
          var s, i, o = 0, a = t2, c = { ok: false, pos: 0, lines: 0, str: "" };
          if (t2 >= r2)
            return c;
          if (34 !== (i = e2.charCodeAt(t2)) && 39 !== i && 40 !== i)
            return c;
          for (t2++, 40 === i && (i = 41); t2 < r2; ) {
            if ((s = e2.charCodeAt(t2)) === i)
              return c.pos = t2 + 1, c.lines = o, c.str = n(e2.slice(a + 1, t2)), c.ok = true, c;
            if (40 === s && 41 === i)
              return c;
            10 === s ? o++ : 92 === s && t2 + 1 < r2 && (t2++, 10 === e2.charCodeAt(t2) && o++), t2++;
          }
          return c;
        };
      }, function(e, t, r) {
        "use strict";
        var n = r(0).assign, s = r(0).unescapeAll, i = r(0).escapeHtml, o = {};
        function a() {
          this.rules = n({}, o);
        }
        o.code_inline = function(e2, t2, r2, n2, s2) {
          var o2 = e2[t2];
          return "<code" + s2.renderAttrs(o2) + ">" + i(e2[t2].content) + "</code>";
        }, o.code_block = function(e2, t2, r2, n2, s2) {
          var o2 = e2[t2];
          return "<pre" + s2.renderAttrs(o2) + "><code>" + i(e2[t2].content) + "</code></pre>\n";
        }, o.fence = function(e2, t2, r2, n2, o2) {
          var a2, c, l, u, p, h = e2[t2], f = h.info ? s(h.info).trim() : "", d = "", g = "";
          return f && (d = (l = f.split(/(\s+)/g))[0], g = l.slice(2).join("")), 0 === (a2 = r2.highlight && r2.highlight(h.content, d, g) || i(h.content)).indexOf("<pre") ? a2 + "\n" : f ? (c = h.attrIndex("class"), u = h.attrs ? h.attrs.slice() : [], c < 0 ? u.push(["class", r2.langPrefix + d]) : (u[c] = u[c].slice(), u[c][1] += " " + r2.langPrefix + d), p = { attrs: u }, "<pre><code" + o2.renderAttrs(p) + ">" + a2 + "</code></pre>\n") : "<pre><code" + o2.renderAttrs(h) + ">" + a2 + "</code></pre>\n";
        }, o.image = function(e2, t2, r2, n2, s2) {
          var i2 = e2[t2];
          return i2.attrs[i2.attrIndex("alt")][1] = s2.renderInlineAsText(i2.children, r2, n2), s2.renderToken(e2, t2, r2);
        }, o.hardbreak = function(e2, t2, r2) {
          return r2.xhtmlOut ? "<br />\n" : "<br>\n";
        }, o.softbreak = function(e2, t2, r2) {
          return r2.breaks ? r2.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
        }, o.text = function(e2, t2) {
          return i(e2[t2].content);
        }, o.html_block = function(e2, t2) {
          return e2[t2].content;
        }, o.html_inline = function(e2, t2) {
          return e2[t2].content;
        }, a.prototype.renderAttrs = function(e2) {
          var t2, r2, n2;
          if (!e2.attrs)
            return "";
          for (n2 = "", t2 = 0, r2 = e2.attrs.length; t2 < r2; t2++)
            n2 += " " + i(e2.attrs[t2][0]) + '="' + i(e2.attrs[t2][1]) + '"';
          return n2;
        }, a.prototype.renderToken = function(e2, t2, r2) {
          var n2, s2 = "", i2 = false, o2 = e2[t2];
          return o2.hidden ? "" : (o2.block && -1 !== o2.nesting && t2 && e2[t2 - 1].hidden && (s2 += "\n"), s2 += (-1 === o2.nesting ? "</" : "<") + o2.tag, s2 += this.renderAttrs(o2), 0 === o2.nesting && r2.xhtmlOut && (s2 += " /"), o2.block && (i2 = true, 1 === o2.nesting && t2 + 1 < e2.length && ("inline" === (n2 = e2[t2 + 1]).type || n2.hidden || -1 === n2.nesting && n2.tag === o2.tag) && (i2 = false)), s2 += i2 ? ">\n" : ">");
        }, a.prototype.renderInline = function(e2, t2, r2) {
          for (var n2, s2 = "", i2 = this.rules, o2 = 0, a2 = e2.length; o2 < a2; o2++)
            void 0 !== i2[n2 = e2[o2].type] ? s2 += i2[n2](e2, o2, t2, r2, this) : s2 += this.renderToken(e2, o2, t2);
          return s2;
        }, a.prototype.renderInlineAsText = function(e2, t2, r2) {
          for (var n2 = "", s2 = 0, i2 = e2.length; s2 < i2; s2++)
            "text" === e2[s2].type ? n2 += e2[s2].content : "image" === e2[s2].type ? n2 += this.renderInlineAsText(e2[s2].children, t2, r2) : "softbreak" === e2[s2].type && (n2 += "\n");
          return n2;
        }, a.prototype.render = function(e2, t2, r2) {
          var n2, s2, i2, o2 = "", a2 = this.rules;
          for (n2 = 0, s2 = e2.length; n2 < s2; n2++)
            "inline" === (i2 = e2[n2].type) ? o2 += this.renderInline(e2[n2].children, t2, r2) : void 0 !== a2[i2] ? o2 += a2[e2[n2].type](e2, n2, t2, r2, this) : o2 += this.renderToken(e2, n2, t2, r2);
          return o2;
        }, e.exports = a;
      }, function(e, t, r) {
        "use strict";
        var n = r(4), s = [["normalize", r(34)], ["block", r(35)], ["inline", r(36)], ["linkify", r(37)], ["replacements", r(38)], ["smartquotes", r(39)]];
        function i() {
          this.ruler = new n();
          for (var e2 = 0; e2 < s.length; e2++)
            this.ruler.push(s[e2][0], s[e2][1]);
        }
        i.prototype.process = function(e2) {
          var t2, r2, n2;
          for (t2 = 0, r2 = (n2 = this.ruler.getRules("")).length; t2 < r2; t2++)
            n2[t2](e2);
        }, i.prototype.State = r(40), e.exports = i;
      }, function(e, t, r) {
        "use strict";
        var n = /\r\n?|\n/g, s = /\0/g;
        e.exports = function(e2) {
          var t2;
          t2 = (t2 = e2.src.replace(n, "\n")).replace(s, "�"), e2.src = t2;
        };
      }, function(e, t, r) {
        "use strict";
        e.exports = function(e2) {
          var t2;
          e2.inlineMode ? ((t2 = new e2.Token("inline", "", 0)).content = e2.src, t2.map = [0, 1], t2.children = [], e2.tokens.push(t2)) : e2.md.block.parse(e2.src, e2.md, e2.env, e2.tokens);
        };
      }, function(e, t, r) {
        "use strict";
        e.exports = function(e2) {
          var t2, r2, n, s = e2.tokens;
          for (r2 = 0, n = s.length; r2 < n; r2++)
            "inline" === (t2 = s[r2]).type && e2.md.inline.parse(t2.content, e2.md, e2.env, t2.children);
        };
      }, function(e, t, r) {
        "use strict";
        var n = r(0).arrayReplaceAt;
        function s(e2) {
          return /^<\/a\s*>/i.test(e2);
        }
        e.exports = function(e2) {
          var t2, r2, i, o, a, c, l, u, p, h, f, d, g, m, _, b, k, v, y = e2.tokens;
          if (e2.md.options.linkify) {
            for (r2 = 0, i = y.length; r2 < i; r2++)
              if ("inline" === y[r2].type && e2.md.linkify.pretest(y[r2].content))
                for (g = 0, t2 = (o = y[r2].children).length - 1; t2 >= 0; t2--)
                  if ("link_close" !== (c = o[t2]).type) {
                    if ("html_inline" === c.type && (v = c.content, /^<a[>\s]/i.test(v) && g > 0 && g--, s(c.content) && g++), !(g > 0) && "text" === c.type && e2.md.linkify.test(c.content)) {
                      for (p = c.content, k = e2.md.linkify.match(p), l = [], d = c.level, f = 0, u = 0; u < k.length; u++)
                        m = k[u].url, _ = e2.md.normalizeLink(m), e2.md.validateLink(_) && (b = k[u].text, b = k[u].schema ? "mailto:" !== k[u].schema || /^mailto:/i.test(b) ? e2.md.normalizeLinkText(b) : e2.md.normalizeLinkText("mailto:" + b).replace(/^mailto:/, "") : e2.md.normalizeLinkText("http://" + b).replace(/^http:\/\//, ""), (h = k[u].index) > f && ((a = new e2.Token("text", "", 0)).content = p.slice(f, h), a.level = d, l.push(a)), (a = new e2.Token("link_open", "a", 1)).attrs = [["href", _]], a.level = d++, a.markup = "linkify", a.info = "auto", l.push(a), (a = new e2.Token("text", "", 0)).content = b, a.level = d, l.push(a), (a = new e2.Token("link_close", "a", -1)).level = --d, a.markup = "linkify", a.info = "auto", l.push(a), f = k[u].lastIndex);
                      f < p.length && ((a = new e2.Token("text", "", 0)).content = p.slice(f), a.level = d, l.push(a)), y[r2].children = o = n(o, t2, l);
                    }
                  } else
                    for (t2--; o[t2].level !== c.level && "link_open" !== o[t2].type; )
                      t2--;
          }
        };
      }, function(e, t, r) {
        "use strict";
        var n = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, s = /\((c|tm|r|p)\)/i, i = /\((c|tm|r|p)\)/gi, o = { c: "©", r: "®", p: "§", tm: "™" };
        function a(e2, t2) {
          return o[t2.toLowerCase()];
        }
        function c(e2) {
          var t2, r2, n2 = 0;
          for (t2 = e2.length - 1; t2 >= 0; t2--)
            "text" !== (r2 = e2[t2]).type || n2 || (r2.content = r2.content.replace(i, a)), "link_open" === r2.type && "auto" === r2.info && n2--, "link_close" === r2.type && "auto" === r2.info && n2++;
        }
        function l(e2) {
          var t2, r2, s2 = 0;
          for (t2 = e2.length - 1; t2 >= 0; t2--)
            "text" !== (r2 = e2[t2]).type || s2 || n.test(r2.content) && (r2.content = r2.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/gm, "$1—").replace(/(^|\s)--(?=\s|$)/gm, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1–")), "link_open" === r2.type && "auto" === r2.info && s2--, "link_close" === r2.type && "auto" === r2.info && s2++;
        }
        e.exports = function(e2) {
          var t2;
          if (e2.md.options.typographer)
            for (t2 = e2.tokens.length - 1; t2 >= 0; t2--)
              "inline" === e2.tokens[t2].type && (s.test(e2.tokens[t2].content) && c(e2.tokens[t2].children), n.test(e2.tokens[t2].content) && l(e2.tokens[t2].children));
        };
      }, function(e, t, r) {
        "use strict";
        var n = r(0).isWhiteSpace, s = r(0).isPunctChar, i = r(0).isMdAsciiPunct, o = /['"]/, a = /['"]/g;
        function c(e2, t2, r2) {
          return e2.substr(0, t2) + r2 + e2.substr(t2 + 1);
        }
        function l(e2, t2) {
          var r2, o2, l2, u, p, h, f, d, g, m, _, b, k, v, y, x, C, A, D, w, E;
          for (D = [], r2 = 0; r2 < e2.length; r2++) {
            for (o2 = e2[r2], f = e2[r2].level, C = D.length - 1; C >= 0 && !(D[C].level <= f); C--)
              ;
            if (D.length = C + 1, "text" === o2.type) {
              p = 0, h = (l2 = o2.content).length;
              e:
                for (; p < h && (a.lastIndex = p, u = a.exec(l2)); ) {
                  if (y = x = true, p = u.index + 1, A = "'" === u[0], g = 32, u.index - 1 >= 0)
                    g = l2.charCodeAt(u.index - 1);
                  else
                    for (C = r2 - 1; C >= 0 && ("softbreak" !== e2[C].type && "hardbreak" !== e2[C].type); C--)
                      if (e2[C].content) {
                        g = e2[C].content.charCodeAt(e2[C].content.length - 1);
                        break;
                      }
                  if (m = 32, p < h)
                    m = l2.charCodeAt(p);
                  else
                    for (C = r2 + 1; C < e2.length && ("softbreak" !== e2[C].type && "hardbreak" !== e2[C].type); C++)
                      if (e2[C].content) {
                        m = e2[C].content.charCodeAt(0);
                        break;
                      }
                  if (_ = i(g) || s(String.fromCharCode(g)), b = i(m) || s(String.fromCharCode(m)), k = n(g), (v = n(m)) ? y = false : b && (k || _ || (y = false)), k ? x = false : _ && (v || b || (x = false)), 34 === m && '"' === u[0] && g >= 48 && g <= 57 && (x = y = false), y && x && (y = _, x = b), y || x) {
                    if (x) {
                      for (C = D.length - 1; C >= 0 && (d = D[C], !(D[C].level < f)); C--)
                        if (d.single === A && D[C].level === f) {
                          d = D[C], A ? (w = t2.md.options.quotes[2], E = t2.md.options.quotes[3]) : (w = t2.md.options.quotes[0], E = t2.md.options.quotes[1]), o2.content = c(o2.content, u.index, E), e2[d.token].content = c(e2[d.token].content, d.pos, w), p += E.length - 1, d.token === r2 && (p += w.length - 1), h = (l2 = o2.content).length, D.length = C;
                          continue e;
                        }
                    }
                    y ? D.push({ token: r2, pos: u.index, single: A, level: f }) : x && A && (o2.content = c(o2.content, u.index, "’"));
                  } else
                    A && (o2.content = c(o2.content, u.index, "’"));
                }
            }
          }
        }
        e.exports = function(e2) {
          var t2;
          if (e2.md.options.typographer)
            for (t2 = e2.tokens.length - 1; t2 >= 0; t2--)
              "inline" === e2.tokens[t2].type && o.test(e2.tokens[t2].content) && l(e2.tokens[t2].children, e2);
        };
      }, function(e, t, r) {
        "use strict";
        var n = r(5);
        function s(e2, t2, r2) {
          this.src = e2, this.env = r2, this.tokens = [], this.inlineMode = false, this.md = t2;
        }
        s.prototype.Token = n, e.exports = s;
      }, function(e, t, r) {
        "use strict";
        var n = r(4), s = [["table", r(42), ["paragraph", "reference"]], ["code", r(43)], ["fence", r(44), ["paragraph", "reference", "blockquote", "list"]], ["blockquote", r(45), ["paragraph", "reference", "blockquote", "list"]], ["hr", r(46), ["paragraph", "reference", "blockquote", "list"]], ["list", r(47), ["paragraph", "reference", "blockquote"]], ["reference", r(48)], ["html_block", r(49), ["paragraph", "reference", "blockquote"]], ["heading", r(51), ["paragraph", "reference", "blockquote"]], ["lheading", r(52)], ["paragraph", r(53)]];
        function i() {
          this.ruler = new n();
          for (var e2 = 0; e2 < s.length; e2++)
            this.ruler.push(s[e2][0], s[e2][1], { alt: (s[e2][2] || []).slice() });
        }
        i.prototype.tokenize = function(e2, t2, r2) {
          for (var n2, s2 = this.ruler.getRules(""), i2 = s2.length, o = t2, a = false, c = e2.md.options.maxNesting; o < r2 && (e2.line = o = e2.skipEmptyLines(o), !(o >= r2)) && !(e2.sCount[o] < e2.blkIndent); ) {
            if (e2.level >= c) {
              e2.line = r2;
              break;
            }
            for (n2 = 0; n2 < i2 && !s2[n2](e2, o, r2, false); n2++)
              ;
            e2.tight = !a, e2.isEmpty(e2.line - 1) && (a = true), (o = e2.line) < r2 && e2.isEmpty(o) && (a = true, o++, e2.line = o);
          }
        }, i.prototype.parse = function(e2, t2, r2, n2) {
          var s2;
          e2 && (s2 = new this.State(e2, t2, r2, n2), this.tokenize(s2, s2.line, s2.lineMax));
        }, i.prototype.State = r(54), e.exports = i;
      }, function(e, t, r) {
        "use strict";
        var n = r(0).isSpace;
        function s(e2, t2) {
          var r2 = e2.bMarks[t2] + e2.tShift[t2], n2 = e2.eMarks[t2];
          return e2.src.substr(r2, n2 - r2);
        }
        function i(e2) {
          var t2, r2 = [], n2 = 0, s2 = e2.length, i2 = false, o = 0, a = "";
          for (t2 = e2.charCodeAt(n2); n2 < s2; )
            124 === t2 && (i2 ? (a += e2.substring(o, n2 - 1), o = n2) : (r2.push(a + e2.substring(o, n2)), a = "", o = n2 + 1)), i2 = 92 === t2, n2++, t2 = e2.charCodeAt(n2);
          return r2.push(a + e2.substring(o)), r2;
        }
        e.exports = function(e2, t2, r2, o) {
          var a, c, l, u, p, h, f, d, g, m, _, b, k, v, y, x, C, A;
          if (t2 + 2 > r2)
            return false;
          if (h = t2 + 1, e2.sCount[h] < e2.blkIndent)
            return false;
          if (e2.sCount[h] - e2.blkIndent >= 4)
            return false;
          if ((l = e2.bMarks[h] + e2.tShift[h]) >= e2.eMarks[h])
            return false;
          if (124 !== (C = e2.src.charCodeAt(l++)) && 45 !== C && 58 !== C)
            return false;
          if (l >= e2.eMarks[h])
            return false;
          if (124 !== (A = e2.src.charCodeAt(l++)) && 45 !== A && 58 !== A && !n(A))
            return false;
          if (45 === C && n(A))
            return false;
          for (; l < e2.eMarks[h]; ) {
            if (124 !== (a = e2.src.charCodeAt(l)) && 45 !== a && 58 !== a && !n(a))
              return false;
            l++;
          }
          for (f = (c = s(e2, t2 + 1)).split("|"), m = [], u = 0; u < f.length; u++) {
            if (!(_ = f[u].trim())) {
              if (0 === u || u === f.length - 1)
                continue;
              return false;
            }
            if (!/^:?-+:?$/.test(_))
              return false;
            58 === _.charCodeAt(_.length - 1) ? m.push(58 === _.charCodeAt(0) ? "center" : "right") : 58 === _.charCodeAt(0) ? m.push("left") : m.push("");
          }
          if (-1 === (c = s(e2, t2).trim()).indexOf("|"))
            return false;
          if (e2.sCount[t2] - e2.blkIndent >= 4)
            return false;
          if ((f = i(c)).length && "" === f[0] && f.shift(), f.length && "" === f[f.length - 1] && f.pop(), 0 === (d = f.length) || d !== m.length)
            return false;
          if (o)
            return true;
          for (v = e2.parentType, e2.parentType = "table", x = e2.md.block.ruler.getRules("blockquote"), (g = e2.push("table_open", "table", 1)).map = b = [t2, 0], (g = e2.push("thead_open", "thead", 1)).map = [t2, t2 + 1], (g = e2.push("tr_open", "tr", 1)).map = [t2, t2 + 1], u = 0; u < f.length; u++)
            g = e2.push("th_open", "th", 1), m[u] && (g.attrs = [["style", "text-align:" + m[u]]]), (g = e2.push("inline", "", 0)).content = f[u].trim(), g.children = [], g = e2.push("th_close", "th", -1);
          for (g = e2.push("tr_close", "tr", -1), g = e2.push("thead_close", "thead", -1), h = t2 + 2; h < r2 && !(e2.sCount[h] < e2.blkIndent); h++) {
            for (y = false, u = 0, p = x.length; u < p; u++)
              if (x[u](e2, h, r2, true)) {
                y = true;
                break;
              }
            if (y)
              break;
            if (!(c = s(e2, h).trim()))
              break;
            if (e2.sCount[h] - e2.blkIndent >= 4)
              break;
            for ((f = i(c)).length && "" === f[0] && f.shift(), f.length && "" === f[f.length - 1] && f.pop(), h === t2 + 2 && ((g = e2.push("tbody_open", "tbody", 1)).map = k = [t2 + 2, 0]), (g = e2.push("tr_open", "tr", 1)).map = [h, h + 1], u = 0; u < d; u++)
              g = e2.push("td_open", "td", 1), m[u] && (g.attrs = [["style", "text-align:" + m[u]]]), (g = e2.push("inline", "", 0)).content = f[u] ? f[u].trim() : "", g.children = [], g = e2.push("td_close", "td", -1);
            g = e2.push("tr_close", "tr", -1);
          }
          return k && (g = e2.push("tbody_close", "tbody", -1), k[1] = h), g = e2.push("table_close", "table", -1), b[1] = h, e2.parentType = v, e2.line = h, true;
        };
      }, function(e, t, r) {
        "use strict";
        e.exports = function(e2, t2, r2) {
          var n, s, i;
          if (e2.sCount[t2] - e2.blkIndent < 4)
            return false;
          for (s = n = t2 + 1; n < r2; )
            if (e2.isEmpty(n))
              n++;
            else {
              if (!(e2.sCount[n] - e2.blkIndent >= 4))
                break;
              s = ++n;
            }
          return e2.line = s, (i = e2.push("code_block", "code", 0)).content = e2.getLines(t2, s, 4 + e2.blkIndent, false) + "\n", i.map = [t2, e2.line], true;
        };
      }, function(e, t, r) {
        "use strict";
        e.exports = function(e2, t2, r2, n) {
          var s, i, o, a, c, l, u, p = false, h = e2.bMarks[t2] + e2.tShift[t2], f = e2.eMarks[t2];
          if (e2.sCount[t2] - e2.blkIndent >= 4)
            return false;
          if (h + 3 > f)
            return false;
          if (126 !== (s = e2.src.charCodeAt(h)) && 96 !== s)
            return false;
          if (c = h, (i = (h = e2.skipChars(h, s)) - c) < 3)
            return false;
          if (u = e2.src.slice(c, h), o = e2.src.slice(h, f), 96 === s && o.indexOf(String.fromCharCode(s)) >= 0)
            return false;
          if (n)
            return true;
          for (a = t2; !(++a >= r2) && !((h = c = e2.bMarks[a] + e2.tShift[a]) < (f = e2.eMarks[a]) && e2.sCount[a] < e2.blkIndent); )
            if (e2.src.charCodeAt(h) === s && !(e2.sCount[a] - e2.blkIndent >= 4 || (h = e2.skipChars(h, s)) - c < i || (h = e2.skipSpaces(h)) < f)) {
              p = true;
              break;
            }
          return i = e2.sCount[t2], e2.line = a + (p ? 1 : 0), (l = e2.push("fence", "code", 0)).info = o, l.content = e2.getLines(t2 + 1, a, i, true), l.markup = u, l.map = [t2, e2.line], true;
        };
      }, function(e, t, r) {
        "use strict";
        var n = r(0).isSpace;
        e.exports = function(e2, t2, r2, s) {
          var i, o, a, c, l, u, p, h, f, d, g, m, _, b, k, v, y, x, C, A, D = e2.lineMax, w = e2.bMarks[t2] + e2.tShift[t2], E = e2.eMarks[t2];
          if (e2.sCount[t2] - e2.blkIndent >= 4)
            return false;
          if (62 !== e2.src.charCodeAt(w++))
            return false;
          if (s)
            return true;
          for (c = f = e2.sCount[t2] + 1, 32 === e2.src.charCodeAt(w) ? (w++, c++, f++, i = false, v = true) : 9 === e2.src.charCodeAt(w) ? (v = true, (e2.bsCount[t2] + f) % 4 == 3 ? (w++, c++, f++, i = false) : i = true) : v = false, d = [e2.bMarks[t2]], e2.bMarks[t2] = w; w < E && (o = e2.src.charCodeAt(w), n(o)); )
            9 === o ? f += 4 - (f + e2.bsCount[t2] + (i ? 1 : 0)) % 4 : f++, w++;
          for (g = [e2.bsCount[t2]], e2.bsCount[t2] = e2.sCount[t2] + 1 + (v ? 1 : 0), u = w >= E, b = [e2.sCount[t2]], e2.sCount[t2] = f - c, k = [e2.tShift[t2]], e2.tShift[t2] = w - e2.bMarks[t2], x = e2.md.block.ruler.getRules("blockquote"), _ = e2.parentType, e2.parentType = "blockquote", h = t2 + 1; h < r2 && (A = e2.sCount[h] < e2.blkIndent, !((w = e2.bMarks[h] + e2.tShift[h]) >= (E = e2.eMarks[h]))); h++)
            if (62 !== e2.src.charCodeAt(w++) || A) {
              if (u)
                break;
              for (y = false, a = 0, l = x.length; a < l; a++)
                if (x[a](e2, h, r2, true)) {
                  y = true;
                  break;
                }
              if (y) {
                e2.lineMax = h, 0 !== e2.blkIndent && (d.push(e2.bMarks[h]), g.push(e2.bsCount[h]), k.push(e2.tShift[h]), b.push(e2.sCount[h]), e2.sCount[h] -= e2.blkIndent);
                break;
              }
              d.push(e2.bMarks[h]), g.push(e2.bsCount[h]), k.push(e2.tShift[h]), b.push(e2.sCount[h]), e2.sCount[h] = -1;
            } else {
              for (c = f = e2.sCount[h] + 1, 32 === e2.src.charCodeAt(w) ? (w++, c++, f++, i = false, v = true) : 9 === e2.src.charCodeAt(w) ? (v = true, (e2.bsCount[h] + f) % 4 == 3 ? (w++, c++, f++, i = false) : i = true) : v = false, d.push(e2.bMarks[h]), e2.bMarks[h] = w; w < E && (o = e2.src.charCodeAt(w), n(o)); )
                9 === o ? f += 4 - (f + e2.bsCount[h] + (i ? 1 : 0)) % 4 : f++, w++;
              u = w >= E, g.push(e2.bsCount[h]), e2.bsCount[h] = e2.sCount[h] + 1 + (v ? 1 : 0), b.push(e2.sCount[h]), e2.sCount[h] = f - c, k.push(e2.tShift[h]), e2.tShift[h] = w - e2.bMarks[h];
            }
          for (m = e2.blkIndent, e2.blkIndent = 0, (C = e2.push("blockquote_open", "blockquote", 1)).markup = ">", C.map = p = [t2, 0], e2.md.block.tokenize(e2, t2, h), (C = e2.push("blockquote_close", "blockquote", -1)).markup = ">", e2.lineMax = D, e2.parentType = _, p[1] = e2.line, a = 0; a < k.length; a++)
            e2.bMarks[a + t2] = d[a], e2.tShift[a + t2] = k[a], e2.sCount[a + t2] = b[a], e2.bsCount[a + t2] = g[a];
          return e2.blkIndent = m, true;
        };
      }, function(e, t, r) {
        "use strict";
        var n = r(0).isSpace;
        e.exports = function(e2, t2, r2, s) {
          var i, o, a, c, l = e2.bMarks[t2] + e2.tShift[t2], u = e2.eMarks[t2];
          if (e2.sCount[t2] - e2.blkIndent >= 4)
            return false;
          if (42 !== (i = e2.src.charCodeAt(l++)) && 45 !== i && 95 !== i)
            return false;
          for (o = 1; l < u; ) {
            if ((a = e2.src.charCodeAt(l++)) !== i && !n(a))
              return false;
            a === i && o++;
          }
          return !(o < 3) && (s || (e2.line = t2 + 1, (c = e2.push("hr", "hr", 0)).map = [t2, e2.line], c.markup = Array(o + 1).join(String.fromCharCode(i))), true);
        };
      }, function(e, t, r) {
        "use strict";
        var n = r(0).isSpace;
        function s(e2, t2) {
          var r2, s2, i2, o;
          return s2 = e2.bMarks[t2] + e2.tShift[t2], i2 = e2.eMarks[t2], 42 !== (r2 = e2.src.charCodeAt(s2++)) && 45 !== r2 && 43 !== r2 || s2 < i2 && (o = e2.src.charCodeAt(s2), !n(o)) ? -1 : s2;
        }
        function i(e2, t2) {
          var r2, s2 = e2.bMarks[t2] + e2.tShift[t2], i2 = s2, o = e2.eMarks[t2];
          if (i2 + 1 >= o)
            return -1;
          if ((r2 = e2.src.charCodeAt(i2++)) < 48 || r2 > 57)
            return -1;
          for (; ; ) {
            if (i2 >= o)
              return -1;
            if (!((r2 = e2.src.charCodeAt(i2++)) >= 48 && r2 <= 57)) {
              if (41 === r2 || 46 === r2)
                break;
              return -1;
            }
            if (i2 - s2 >= 10)
              return -1;
          }
          return i2 < o && (r2 = e2.src.charCodeAt(i2), !n(r2)) ? -1 : i2;
        }
        e.exports = function(e2, t2, r2, n2) {
          var o, a, c, l, u, p, h, f, d, g, m, _, b, k, v, y, x, C, A, D, w, E, q, S, F, L, z, T, I = false, M = true;
          if (e2.sCount[t2] - e2.blkIndent >= 4)
            return false;
          if (e2.listIndent >= 0 && e2.sCount[t2] - e2.listIndent >= 4 && e2.sCount[t2] < e2.blkIndent)
            return false;
          if (n2 && "paragraph" === e2.parentType && e2.sCount[t2] >= e2.blkIndent && (I = true), (q = i(e2, t2)) >= 0) {
            if (h = true, F = e2.bMarks[t2] + e2.tShift[t2], b = Number(e2.src.slice(F, q - 1)), I && 1 !== b)
              return false;
          } else {
            if (!((q = s(e2, t2)) >= 0))
              return false;
            h = false;
          }
          if (I && e2.skipSpaces(q) >= e2.eMarks[t2])
            return false;
          if (_ = e2.src.charCodeAt(q - 1), n2)
            return true;
          for (m = e2.tokens.length, h ? (T = e2.push("ordered_list_open", "ol", 1), 1 !== b && (T.attrs = [["start", b]])) : T = e2.push("bullet_list_open", "ul", 1), T.map = g = [t2, 0], T.markup = String.fromCharCode(_), v = t2, S = false, z = e2.md.block.ruler.getRules("list"), C = e2.parentType, e2.parentType = "list"; v < r2; ) {
            for (E = q, k = e2.eMarks[v], p = y = e2.sCount[v] + q - (e2.bMarks[t2] + e2.tShift[t2]); E < k; ) {
              if (9 === (o = e2.src.charCodeAt(E)))
                y += 4 - (y + e2.bsCount[v]) % 4;
              else {
                if (32 !== o)
                  break;
                y++;
              }
              E++;
            }
            if ((u = (a = E) >= k ? 1 : y - p) > 4 && (u = 1), l = p + u, (T = e2.push("list_item_open", "li", 1)).markup = String.fromCharCode(_), T.map = f = [t2, 0], h && (T.info = e2.src.slice(F, q - 1)), w = e2.tight, D = e2.tShift[t2], A = e2.sCount[t2], x = e2.listIndent, e2.listIndent = e2.blkIndent, e2.blkIndent = l, e2.tight = true, e2.tShift[t2] = a - e2.bMarks[t2], e2.sCount[t2] = y, a >= k && e2.isEmpty(t2 + 1) ? e2.line = Math.min(e2.line + 2, r2) : e2.md.block.tokenize(e2, t2, r2, true), e2.tight && !S || (M = false), S = e2.line - t2 > 1 && e2.isEmpty(e2.line - 1), e2.blkIndent = e2.listIndent, e2.listIndent = x, e2.tShift[t2] = D, e2.sCount[t2] = A, e2.tight = w, (T = e2.push("list_item_close", "li", -1)).markup = String.fromCharCode(_), v = t2 = e2.line, f[1] = v, a = e2.bMarks[t2], v >= r2)
              break;
            if (e2.sCount[v] < e2.blkIndent)
              break;
            if (e2.sCount[t2] - e2.blkIndent >= 4)
              break;
            for (L = false, c = 0, d = z.length; c < d; c++)
              if (z[c](e2, v, r2, true)) {
                L = true;
                break;
              }
            if (L)
              break;
            if (h) {
              if ((q = i(e2, v)) < 0)
                break;
              F = e2.bMarks[v] + e2.tShift[v];
            } else if ((q = s(e2, v)) < 0)
              break;
            if (_ !== e2.src.charCodeAt(q - 1))
              break;
          }
          return (T = h ? e2.push("ordered_list_close", "ol", -1) : e2.push("bullet_list_close", "ul", -1)).markup = String.fromCharCode(_), g[1] = v, e2.line = v, e2.parentType = C, M && function(e3, t3) {
            var r3, n3, s2 = e3.level + 2;
            for (r3 = t3 + 2, n3 = e3.tokens.length - 2; r3 < n3; r3++)
              e3.tokens[r3].level === s2 && "paragraph_open" === e3.tokens[r3].type && (e3.tokens[r3 + 2].hidden = true, e3.tokens[r3].hidden = true, r3 += 2);
          }(e2, m), true;
        };
      }, function(e, t, r) {
        "use strict";
        var n = r(0).normalizeReference, s = r(0).isSpace;
        e.exports = function(e2, t2, r2, i) {
          var o, a, c, l, u, p, h, f, d, g, m, _, b, k, v, y, x = 0, C = e2.bMarks[t2] + e2.tShift[t2], A = e2.eMarks[t2], D = t2 + 1;
          if (e2.sCount[t2] - e2.blkIndent >= 4)
            return false;
          if (91 !== e2.src.charCodeAt(C))
            return false;
          for (; ++C < A; )
            if (93 === e2.src.charCodeAt(C) && 92 !== e2.src.charCodeAt(C - 1)) {
              if (C + 1 === A)
                return false;
              if (58 !== e2.src.charCodeAt(C + 1))
                return false;
              break;
            }
          for (l = e2.lineMax, v = e2.md.block.ruler.getRules("reference"), g = e2.parentType, e2.parentType = "reference"; D < l && !e2.isEmpty(D); D++)
            if (!(e2.sCount[D] - e2.blkIndent > 3 || e2.sCount[D] < 0)) {
              for (k = false, p = 0, h = v.length; p < h; p++)
                if (v[p](e2, D, l, true)) {
                  k = true;
                  break;
                }
              if (k)
                break;
            }
          for (A = (b = e2.getLines(t2, D, e2.blkIndent, false).trim()).length, C = 1; C < A; C++) {
            if (91 === (o = b.charCodeAt(C)))
              return false;
            if (93 === o) {
              d = C;
              break;
            }
            (10 === o || 92 === o && ++C < A && 10 === b.charCodeAt(C)) && x++;
          }
          if (d < 0 || 58 !== b.charCodeAt(d + 1))
            return false;
          for (C = d + 2; C < A; C++)
            if (10 === (o = b.charCodeAt(C)))
              x++;
            else if (!s(o))
              break;
          if (!(m = e2.md.helpers.parseLinkDestination(b, C, A)).ok)
            return false;
          if (u = e2.md.normalizeLink(m.str), !e2.md.validateLink(u))
            return false;
          for (a = C = m.pos, c = x += m.lines, _ = C; C < A; C++)
            if (10 === (o = b.charCodeAt(C)))
              x++;
            else if (!s(o))
              break;
          for (m = e2.md.helpers.parseLinkTitle(b, C, A), C < A && _ !== C && m.ok ? (y = m.str, C = m.pos, x += m.lines) : (y = "", C = a, x = c); C < A && (o = b.charCodeAt(C), s(o)); )
            C++;
          if (C < A && 10 !== b.charCodeAt(C) && y)
            for (y = "", C = a, x = c; C < A && (o = b.charCodeAt(C), s(o)); )
              C++;
          return !(C < A && 10 !== b.charCodeAt(C)) && (!!(f = n(b.slice(1, d))) && (i || (void 0 === e2.env.references && (e2.env.references = {}), void 0 === e2.env.references[f] && (e2.env.references[f] = { title: y, href: u }), e2.parentType = g, e2.line = t2 + x + 1), true));
        };
      }, function(e, t, r) {
        "use strict";
        var n = r(50), s = r(12).HTML_OPEN_CLOSE_TAG_RE, i = [[/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true], [/^<!--/, /-->/, true], [/^<\?/, /\?>/, true], [/^<![A-Z]/, />/, true], [/^<!\[CDATA\[/, /\]\]>/, true], [new RegExp("^</?(" + n.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, true], [new RegExp(s.source + "\\s*$"), /^$/, false]];
        e.exports = function(e2, t2, r2, n2) {
          var s2, o, a, c, l = e2.bMarks[t2] + e2.tShift[t2], u = e2.eMarks[t2];
          if (e2.sCount[t2] - e2.blkIndent >= 4)
            return false;
          if (!e2.md.options.html)
            return false;
          if (60 !== e2.src.charCodeAt(l))
            return false;
          for (c = e2.src.slice(l, u), s2 = 0; s2 < i.length && !i[s2][0].test(c); s2++)
            ;
          if (s2 === i.length)
            return false;
          if (n2)
            return i[s2][2];
          if (o = t2 + 1, !i[s2][1].test(c)) {
            for (; o < r2 && !(e2.sCount[o] < e2.blkIndent); o++)
              if (l = e2.bMarks[o] + e2.tShift[o], u = e2.eMarks[o], c = e2.src.slice(l, u), i[s2][1].test(c)) {
                0 !== c.length && o++;
                break;
              }
          }
          return e2.line = o, (a = e2.push("html_block", "", 0)).map = [t2, o], a.content = e2.getLines(t2, o, e2.blkIndent, true), true;
        };
      }, function(e, t, r) {
        "use strict";
        e.exports = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "source", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"];
      }, function(e, t, r) {
        "use strict";
        var n = r(0).isSpace;
        e.exports = function(e2, t2, r2, s) {
          var i, o, a, c, l = e2.bMarks[t2] + e2.tShift[t2], u = e2.eMarks[t2];
          if (e2.sCount[t2] - e2.blkIndent >= 4)
            return false;
          if (35 !== (i = e2.src.charCodeAt(l)) || l >= u)
            return false;
          for (o = 1, i = e2.src.charCodeAt(++l); 35 === i && l < u && o <= 6; )
            o++, i = e2.src.charCodeAt(++l);
          return !(o > 6 || l < u && !n(i)) && (s || (u = e2.skipSpacesBack(u, l), (a = e2.skipCharsBack(u, 35, l)) > l && n(e2.src.charCodeAt(a - 1)) && (u = a), e2.line = t2 + 1, (c = e2.push("heading_open", "h" + String(o), 1)).markup = "########".slice(0, o), c.map = [t2, e2.line], (c = e2.push("inline", "", 0)).content = e2.src.slice(l, u).trim(), c.map = [t2, e2.line], c.children = [], (c = e2.push("heading_close", "h" + String(o), -1)).markup = "########".slice(0, o)), true);
        };
      }, function(e, t, r) {
        "use strict";
        e.exports = function(e2, t2, r2) {
          var n, s, i, o, a, c, l, u, p, h, f = t2 + 1, d = e2.md.block.ruler.getRules("paragraph");
          if (e2.sCount[t2] - e2.blkIndent >= 4)
            return false;
          for (h = e2.parentType, e2.parentType = "paragraph"; f < r2 && !e2.isEmpty(f); f++)
            if (!(e2.sCount[f] - e2.blkIndent > 3)) {
              if (e2.sCount[f] >= e2.blkIndent && (c = e2.bMarks[f] + e2.tShift[f]) < (l = e2.eMarks[f]) && (45 === (p = e2.src.charCodeAt(c)) || 61 === p) && (c = e2.skipChars(c, p), (c = e2.skipSpaces(c)) >= l)) {
                u = 61 === p ? 1 : 2;
                break;
              }
              if (!(e2.sCount[f] < 0)) {
                for (s = false, i = 0, o = d.length; i < o; i++)
                  if (d[i](e2, f, r2, true)) {
                    s = true;
                    break;
                  }
                if (s)
                  break;
              }
            }
          return !!u && (n = e2.getLines(t2, f, e2.blkIndent, false).trim(), e2.line = f + 1, (a = e2.push("heading_open", "h" + String(u), 1)).markup = String.fromCharCode(p), a.map = [t2, e2.line], (a = e2.push("inline", "", 0)).content = n, a.map = [t2, e2.line - 1], a.children = [], (a = e2.push("heading_close", "h" + String(u), -1)).markup = String.fromCharCode(p), e2.parentType = h, true);
        };
      }, function(e, t, r) {
        "use strict";
        e.exports = function(e2, t2) {
          var r2, n, s, i, o, a, c = t2 + 1, l = e2.md.block.ruler.getRules("paragraph"), u = e2.lineMax;
          for (a = e2.parentType, e2.parentType = "paragraph"; c < u && !e2.isEmpty(c); c++)
            if (!(e2.sCount[c] - e2.blkIndent > 3 || e2.sCount[c] < 0)) {
              for (n = false, s = 0, i = l.length; s < i; s++)
                if (l[s](e2, c, u, true)) {
                  n = true;
                  break;
                }
              if (n)
                break;
            }
          return r2 = e2.getLines(t2, c, e2.blkIndent, false).trim(), e2.line = c, (o = e2.push("paragraph_open", "p", 1)).map = [t2, e2.line], (o = e2.push("inline", "", 0)).content = r2, o.map = [t2, e2.line], o.children = [], o = e2.push("paragraph_close", "p", -1), e2.parentType = a, true;
        };
      }, function(e, t, r) {
        "use strict";
        var n = r(5), s = r(0).isSpace;
        function i(e2, t2, r2, n2) {
          var i2, o, a, c, l, u, p, h;
          for (this.src = e2, this.md = t2, this.env = r2, this.tokens = n2, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = false, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0, this.result = "", h = false, a = c = u = p = 0, l = (o = this.src).length; c < l; c++) {
            if (i2 = o.charCodeAt(c), !h) {
              if (s(i2)) {
                u++, 9 === i2 ? p += 4 - p % 4 : p++;
                continue;
              }
              h = true;
            }
            10 !== i2 && c !== l - 1 || (10 !== i2 && c++, this.bMarks.push(a), this.eMarks.push(c), this.tShift.push(u), this.sCount.push(p), this.bsCount.push(0), h = false, u = 0, p = 0, a = c + 1);
          }
          this.bMarks.push(o.length), this.eMarks.push(o.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
        }
        i.prototype.push = function(e2, t2, r2) {
          var s2 = new n(e2, t2, r2);
          return s2.block = true, r2 < 0 && this.level--, s2.level = this.level, r2 > 0 && this.level++, this.tokens.push(s2), s2;
        }, i.prototype.isEmpty = function(e2) {
          return this.bMarks[e2] + this.tShift[e2] >= this.eMarks[e2];
        }, i.prototype.skipEmptyLines = function(e2) {
          for (var t2 = this.lineMax; e2 < t2 && !(this.bMarks[e2] + this.tShift[e2] < this.eMarks[e2]); e2++)
            ;
          return e2;
        }, i.prototype.skipSpaces = function(e2) {
          for (var t2, r2 = this.src.length; e2 < r2 && (t2 = this.src.charCodeAt(e2), s(t2)); e2++)
            ;
          return e2;
        }, i.prototype.skipSpacesBack = function(e2, t2) {
          if (e2 <= t2)
            return e2;
          for (; e2 > t2; )
            if (!s(this.src.charCodeAt(--e2)))
              return e2 + 1;
          return e2;
        }, i.prototype.skipChars = function(e2, t2) {
          for (var r2 = this.src.length; e2 < r2 && this.src.charCodeAt(e2) === t2; e2++)
            ;
          return e2;
        }, i.prototype.skipCharsBack = function(e2, t2, r2) {
          if (e2 <= r2)
            return e2;
          for (; e2 > r2; )
            if (t2 !== this.src.charCodeAt(--e2))
              return e2 + 1;
          return e2;
        }, i.prototype.getLines = function(e2, t2, r2, n2) {
          var i2, o, a, c, l, u, p, h = e2;
          if (e2 >= t2)
            return "";
          for (u = new Array(t2 - e2), i2 = 0; h < t2; h++, i2++) {
            for (o = 0, p = c = this.bMarks[h], l = h + 1 < t2 || n2 ? this.eMarks[h] + 1 : this.eMarks[h]; c < l && o < r2; ) {
              if (a = this.src.charCodeAt(c), s(a))
                9 === a ? o += 4 - (o + this.bsCount[h]) % 4 : o++;
              else {
                if (!(c - p < this.tShift[h]))
                  break;
                o++;
              }
              c++;
            }
            u[i2] = o > r2 ? new Array(o - r2 + 1).join(" ") + this.src.slice(c, l) : this.src.slice(c, l);
          }
          return u.join("");
        }, i.prototype.Token = n, e.exports = i;
      }, function(e, t, r) {
        "use strict";
        var n = r(4), s = [["text", r(56)], ["newline", r(57)], ["escape", r(58)], ["backticks", r(59)], ["strikethrough", r(13).tokenize], ["emphasis", r(14).tokenize], ["link", r(60)], ["image", r(61)], ["autolink", r(62)], ["html_inline", r(63)], ["entity", r(64)]], i = [["balance_pairs", r(65)], ["strikethrough", r(13).postProcess], ["emphasis", r(14).postProcess], ["text_collapse", r(66)]];
        function o() {
          var e2;
          for (this.ruler = new n(), e2 = 0; e2 < s.length; e2++)
            this.ruler.push(s[e2][0], s[e2][1]);
          for (this.ruler2 = new n(), e2 = 0; e2 < i.length; e2++)
            this.ruler2.push(i[e2][0], i[e2][1]);
        }
        o.prototype.skipToken = function(e2) {
          var t2, r2, n2 = e2.pos, s2 = this.ruler.getRules(""), i2 = s2.length, o2 = e2.md.options.maxNesting, a = e2.cache;
          if (void 0 === a[n2]) {
            if (e2.level < o2)
              for (r2 = 0; r2 < i2 && (e2.level++, t2 = s2[r2](e2, true), e2.level--, !t2); r2++)
                ;
            else
              e2.pos = e2.posMax;
            t2 || e2.pos++, a[n2] = e2.pos;
          } else
            e2.pos = a[n2];
        }, o.prototype.tokenize = function(e2) {
          for (var t2, r2, n2 = this.ruler.getRules(""), s2 = n2.length, i2 = e2.posMax, o2 = e2.md.options.maxNesting; e2.pos < i2; ) {
            if (e2.level < o2)
              for (r2 = 0; r2 < s2 && !(t2 = n2[r2](e2, false)); r2++)
                ;
            if (t2) {
              if (e2.pos >= i2)
                break;
            } else
              e2.pending += e2.src[e2.pos++];
          }
          e2.pending && e2.pushPending();
        }, o.prototype.parse = function(e2, t2, r2, n2) {
          var s2, i2, o2, a = new this.State(e2, t2, r2, n2);
          for (this.tokenize(a), o2 = (i2 = this.ruler2.getRules("")).length, s2 = 0; s2 < o2; s2++)
            i2[s2](a);
        }, o.prototype.State = r(67), e.exports = o;
      }, function(e, t, r) {
        "use strict";
        function n(e2) {
          switch (e2) {
            case 10:
            case 33:
            case 35:
            case 36:
            case 37:
            case 38:
            case 42:
            case 43:
            case 45:
            case 58:
            case 60:
            case 61:
            case 62:
            case 64:
            case 91:
            case 92:
            case 93:
            case 94:
            case 95:
            case 96:
            case 123:
            case 125:
            case 126:
              return true;
            default:
              return false;
          }
        }
        e.exports = function(e2, t2) {
          for (var r2 = e2.pos; r2 < e2.posMax && !n(e2.src.charCodeAt(r2)); )
            r2++;
          return r2 !== e2.pos && (t2 || (e2.pending += e2.src.slice(e2.pos, r2)), e2.pos = r2, true);
        };
      }, function(e, t, r) {
        "use strict";
        var n = r(0).isSpace;
        e.exports = function(e2, t2) {
          var r2, s, i, o = e2.pos;
          if (10 !== e2.src.charCodeAt(o))
            return false;
          if (r2 = e2.pending.length - 1, s = e2.posMax, !t2)
            if (r2 >= 0 && 32 === e2.pending.charCodeAt(r2))
              if (r2 >= 1 && 32 === e2.pending.charCodeAt(r2 - 1)) {
                for (i = r2 - 1; i >= 1 && 32 === e2.pending.charCodeAt(i - 1); )
                  i--;
                e2.pending = e2.pending.slice(0, i), e2.push("hardbreak", "br", 0);
              } else
                e2.pending = e2.pending.slice(0, -1), e2.push("softbreak", "br", 0);
            else
              e2.push("softbreak", "br", 0);
          for (o++; o < s && n(e2.src.charCodeAt(o)); )
            o++;
          return e2.pos = o, true;
        };
      }, function(e, t, r) {
        "use strict";
        for (var n = r(0).isSpace, s = [], i = 0; i < 256; i++)
          s.push(0);
        "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e2) {
          s[e2.charCodeAt(0)] = 1;
        }), e.exports = function(e2, t2) {
          var r2, i2 = e2.pos, o = e2.posMax;
          if (92 !== e2.src.charCodeAt(i2))
            return false;
          if (++i2 < o) {
            if ((r2 = e2.src.charCodeAt(i2)) < 256 && 0 !== s[r2])
              return t2 || (e2.pending += e2.src[i2]), e2.pos += 2, true;
            if (10 === r2) {
              for (t2 || e2.push("hardbreak", "br", 0), i2++; i2 < o && (r2 = e2.src.charCodeAt(i2), n(r2)); )
                i2++;
              return e2.pos = i2, true;
            }
          }
          return t2 || (e2.pending += "\\"), e2.pos++, true;
        };
      }, function(e, t, r) {
        "use strict";
        e.exports = function(e2, t2) {
          var r2, n, s, i, o, a, c, l, u = e2.pos;
          if (96 !== e2.src.charCodeAt(u))
            return false;
          for (r2 = u, u++, n = e2.posMax; u < n && 96 === e2.src.charCodeAt(u); )
            u++;
          if (c = (s = e2.src.slice(r2, u)).length, e2.backticksScanned && (e2.backticks[c] || 0) <= r2)
            return t2 || (e2.pending += s), e2.pos += c, true;
          for (o = a = u; -1 !== (o = e2.src.indexOf("`", a)); ) {
            for (a = o + 1; a < n && 96 === e2.src.charCodeAt(a); )
              a++;
            if ((l = a - o) === c)
              return t2 || ((i = e2.push("code_inline", "code", 0)).markup = s, i.content = e2.src.slice(u, o).replace(/\n/g, " ").replace(/^ (.+) $/, "$1")), e2.pos = a, true;
            e2.backticks[l] = o;
          }
          return e2.backticksScanned = true, t2 || (e2.pending += s), e2.pos += c, true;
        };
      }, function(e, t, r) {
        "use strict";
        var n = r(0).normalizeReference, s = r(0).isSpace;
        e.exports = function(e2, t2) {
          var r2, i, o, a, c, l, u, p, h = "", f = "", d = e2.pos, g = e2.posMax, m = e2.pos, _ = true;
          if (91 !== e2.src.charCodeAt(e2.pos))
            return false;
          if (c = e2.pos + 1, (a = e2.md.helpers.parseLinkLabel(e2, e2.pos, true)) < 0)
            return false;
          if ((l = a + 1) < g && 40 === e2.src.charCodeAt(l)) {
            for (_ = false, l++; l < g && (i = e2.src.charCodeAt(l), s(i) || 10 === i); l++)
              ;
            if (l >= g)
              return false;
            if (m = l, (u = e2.md.helpers.parseLinkDestination(e2.src, l, e2.posMax)).ok) {
              for (h = e2.md.normalizeLink(u.str), e2.md.validateLink(h) ? l = u.pos : h = "", m = l; l < g && (i = e2.src.charCodeAt(l), s(i) || 10 === i); l++)
                ;
              if (u = e2.md.helpers.parseLinkTitle(e2.src, l, e2.posMax), l < g && m !== l && u.ok)
                for (f = u.str, l = u.pos; l < g && (i = e2.src.charCodeAt(l), s(i) || 10 === i); l++)
                  ;
            }
            (l >= g || 41 !== e2.src.charCodeAt(l)) && (_ = true), l++;
          }
          if (_) {
            if (void 0 === e2.env.references)
              return false;
            if (l < g && 91 === e2.src.charCodeAt(l) ? (m = l + 1, (l = e2.md.helpers.parseLinkLabel(e2, l)) >= 0 ? o = e2.src.slice(m, l++) : l = a + 1) : l = a + 1, o || (o = e2.src.slice(c, a)), !(p = e2.env.references[n(o)]))
              return e2.pos = d, false;
            h = p.href, f = p.title;
          }
          return t2 || (e2.pos = c, e2.posMax = a, e2.push("link_open", "a", 1).attrs = r2 = [["href", h]], f && r2.push(["title", f]), e2.md.inline.tokenize(e2), e2.push("link_close", "a", -1)), e2.pos = l, e2.posMax = g, true;
        };
      }, function(e, t, r) {
        "use strict";
        var n = r(0).normalizeReference, s = r(0).isSpace;
        e.exports = function(e2, t2) {
          var r2, i, o, a, c, l, u, p, h, f, d, g, m, _ = "", b = e2.pos, k = e2.posMax;
          if (33 !== e2.src.charCodeAt(e2.pos))
            return false;
          if (91 !== e2.src.charCodeAt(e2.pos + 1))
            return false;
          if (l = e2.pos + 2, (c = e2.md.helpers.parseLinkLabel(e2, e2.pos + 1, false)) < 0)
            return false;
          if ((u = c + 1) < k && 40 === e2.src.charCodeAt(u)) {
            for (u++; u < k && (i = e2.src.charCodeAt(u), s(i) || 10 === i); u++)
              ;
            if (u >= k)
              return false;
            for (m = u, (h = e2.md.helpers.parseLinkDestination(e2.src, u, e2.posMax)).ok && (_ = e2.md.normalizeLink(h.str), e2.md.validateLink(_) ? u = h.pos : _ = ""), m = u; u < k && (i = e2.src.charCodeAt(u), s(i) || 10 === i); u++)
              ;
            if (h = e2.md.helpers.parseLinkTitle(e2.src, u, e2.posMax), u < k && m !== u && h.ok)
              for (f = h.str, u = h.pos; u < k && (i = e2.src.charCodeAt(u), s(i) || 10 === i); u++)
                ;
            else
              f = "";
            if (u >= k || 41 !== e2.src.charCodeAt(u))
              return e2.pos = b, false;
            u++;
          } else {
            if (void 0 === e2.env.references)
              return false;
            if (u < k && 91 === e2.src.charCodeAt(u) ? (m = u + 1, (u = e2.md.helpers.parseLinkLabel(e2, u)) >= 0 ? a = e2.src.slice(m, u++) : u = c + 1) : u = c + 1, a || (a = e2.src.slice(l, c)), !(p = e2.env.references[n(a)]))
              return e2.pos = b, false;
            _ = p.href, f = p.title;
          }
          return t2 || (o = e2.src.slice(l, c), e2.md.inline.parse(o, e2.md, e2.env, g = []), (d = e2.push("image", "img", 0)).attrs = r2 = [["src", _], ["alt", ""]], d.children = g, d.content = o, f && r2.push(["title", f])), e2.pos = u, e2.posMax = k, true;
        };
      }, function(e, t, r) {
        "use strict";
        var n = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, s = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
        e.exports = function(e2, t2) {
          var r2, i, o, a, c, l, u = e2.pos;
          if (60 !== e2.src.charCodeAt(u))
            return false;
          for (c = e2.pos, l = e2.posMax; ; ) {
            if (++u >= l)
              return false;
            if (60 === (a = e2.src.charCodeAt(u)))
              return false;
            if (62 === a)
              break;
          }
          return r2 = e2.src.slice(c + 1, u), s.test(r2) ? (i = e2.md.normalizeLink(r2), !!e2.md.validateLink(i) && (t2 || ((o = e2.push("link_open", "a", 1)).attrs = [["href", i]], o.markup = "autolink", o.info = "auto", (o = e2.push("text", "", 0)).content = e2.md.normalizeLinkText(r2), (o = e2.push("link_close", "a", -1)).markup = "autolink", o.info = "auto"), e2.pos += r2.length + 2, true)) : !!n.test(r2) && (i = e2.md.normalizeLink("mailto:" + r2), !!e2.md.validateLink(i) && (t2 || ((o = e2.push("link_open", "a", 1)).attrs = [["href", i]], o.markup = "autolink", o.info = "auto", (o = e2.push("text", "", 0)).content = e2.md.normalizeLinkText(r2), (o = e2.push("link_close", "a", -1)).markup = "autolink", o.info = "auto"), e2.pos += r2.length + 2, true));
        };
      }, function(e, t, r) {
        "use strict";
        var n = r(12).HTML_TAG_RE;
        e.exports = function(e2, t2) {
          var r2, s, i, o = e2.pos;
          return !!e2.md.options.html && (i = e2.posMax, !(60 !== e2.src.charCodeAt(o) || o + 2 >= i) && (!(33 !== (r2 = e2.src.charCodeAt(o + 1)) && 63 !== r2 && 47 !== r2 && !function(e3) {
            var t3 = 32 | e3;
            return t3 >= 97 && t3 <= 122;
          }(r2)) && (!!(s = e2.src.slice(o).match(n)) && (t2 || (e2.push("html_inline", "", 0).content = e2.src.slice(o, o + s[0].length)), e2.pos += s[0].length, true))));
        };
      }, function(e, t, r) {
        "use strict";
        var n = r(7), s = r(0).has, i = r(0).isValidEntityCode, o = r(0).fromCodePoint, a = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, c = /^&([a-z][a-z0-9]{1,31});/i;
        e.exports = function(e2, t2) {
          var r2, l, u = e2.pos, p = e2.posMax;
          if (38 !== e2.src.charCodeAt(u))
            return false;
          if (u + 1 < p) {
            if (35 === e2.src.charCodeAt(u + 1)) {
              if (l = e2.src.slice(u).match(a))
                return t2 || (r2 = "x" === l[1][0].toLowerCase() ? parseInt(l[1].slice(1), 16) : parseInt(l[1], 10), e2.pending += i(r2) ? o(r2) : o(65533)), e2.pos += l[0].length, true;
            } else if ((l = e2.src.slice(u).match(c)) && s(n, l[1]))
              return t2 || (e2.pending += n[l[1]]), e2.pos += l[0].length, true;
          }
          return t2 || (e2.pending += "&"), e2.pos++, true;
        };
      }, function(e, t, r) {
        "use strict";
        function n(e2, t2) {
          var r2, n2, s, i, o, a, c, l, u = {}, p = t2.length;
          if (p) {
            var h = 0, f = -2, d = [];
            for (r2 = 0; r2 < p; r2++)
              if (s = t2[r2], d.push(0), t2[h].marker === s.marker && f === s.token - 1 || (h = r2), f = s.token, s.length = s.length || 0, s.close) {
                for (u.hasOwnProperty(s.marker) || (u[s.marker] = [-1, -1, -1, -1, -1, -1]), o = u[s.marker][(s.open ? 3 : 0) + s.length % 3], a = n2 = h - d[h] - 1; n2 > o; n2 -= d[n2] + 1)
                  if ((i = t2[n2]).marker === s.marker && i.open && i.end < 0 && (c = false, (i.close || s.open) && (i.length + s.length) % 3 == 0 && (i.length % 3 == 0 && s.length % 3 == 0 || (c = true)), !c)) {
                    l = n2 > 0 && !t2[n2 - 1].open ? d[n2 - 1] + 1 : 0, d[r2] = r2 - n2 + l, d[n2] = l, s.open = false, i.end = r2, i.close = false, a = -1, f = -2;
                    break;
                  }
                -1 !== a && (u[s.marker][(s.open ? 3 : 0) + (s.length || 0) % 3] = a);
              }
          }
        }
        e.exports = function(e2) {
          var t2, r2 = e2.tokens_meta, s = e2.tokens_meta.length;
          for (n(0, e2.delimiters), t2 = 0; t2 < s; t2++)
            r2[t2] && r2[t2].delimiters && n(0, r2[t2].delimiters);
        };
      }, function(e, t, r) {
        "use strict";
        e.exports = function(e2) {
          var t2, r2, n = 0, s = e2.tokens, i = e2.tokens.length;
          for (t2 = r2 = 0; t2 < i; t2++)
            s[t2].nesting < 0 && n--, s[t2].level = n, s[t2].nesting > 0 && n++, "text" === s[t2].type && t2 + 1 < i && "text" === s[t2 + 1].type ? s[t2 + 1].content = s[t2].content + s[t2 + 1].content : (t2 !== r2 && (s[r2] = s[t2]), r2++);
          t2 !== r2 && (s.length = r2);
        };
      }, function(e, t, r) {
        "use strict";
        var n = r(5), s = r(0).isWhiteSpace, i = r(0).isPunctChar, o = r(0).isMdAsciiPunct;
        function a(e2, t2, r2, n2) {
          this.src = e2, this.env = r2, this.md = t2, this.tokens = n2, this.tokens_meta = Array(n2.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = false;
        }
        a.prototype.pushPending = function() {
          var e2 = new n("text", "", 0);
          return e2.content = this.pending, e2.level = this.pendingLevel, this.tokens.push(e2), this.pending = "", e2;
        }, a.prototype.push = function(e2, t2, r2) {
          this.pending && this.pushPending();
          var s2 = new n(e2, t2, r2), i2 = null;
          return r2 < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), s2.level = this.level, r2 > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], i2 = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(s2), this.tokens_meta.push(i2), s2;
        }, a.prototype.scanDelims = function(e2, t2) {
          var r2, n2, a2, c, l, u, p, h, f, d = e2, g = true, m = true, _ = this.posMax, b = this.src.charCodeAt(e2);
          for (r2 = e2 > 0 ? this.src.charCodeAt(e2 - 1) : 32; d < _ && this.src.charCodeAt(d) === b; )
            d++;
          return a2 = d - e2, n2 = d < _ ? this.src.charCodeAt(d) : 32, p = o(r2) || i(String.fromCharCode(r2)), f = o(n2) || i(String.fromCharCode(n2)), u = s(r2), (h = s(n2)) ? g = false : f && (u || p || (g = false)), u ? m = false : p && (h || f || (m = false)), t2 ? (c = g, l = m) : (c = g && (!m || p), l = m && (!g || f)), { can_open: c, can_close: l, length: a2 };
        }, a.prototype.Token = n, e.exports = a;
      }, function(e, t, r) {
        "use strict";
        function n(e2) {
          var t2 = Array.prototype.slice.call(arguments, 1);
          return t2.forEach(function(t3) {
            t3 && Object.keys(t3).forEach(function(r2) {
              e2[r2] = t3[r2];
            });
          }), e2;
        }
        function s(e2) {
          return Object.prototype.toString.call(e2);
        }
        function i(e2) {
          return "[object Function]" === s(e2);
        }
        function o(e2) {
          return e2.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
        }
        var a = { fuzzyLink: true, fuzzyEmail: true, fuzzyIP: false };
        var c = { "http:": { validate: function(e2, t2, r2) {
          var n2 = e2.slice(t2);
          return r2.re.http || (r2.re.http = new RegExp("^\\/\\/" + r2.re.src_auth + r2.re.src_host_port_strict + r2.re.src_path, "i")), r2.re.http.test(n2) ? n2.match(r2.re.http)[0].length : 0;
        } }, "https:": "http:", "ftp:": "http:", "//": { validate: function(e2, t2, r2) {
          var n2 = e2.slice(t2);
          return r2.re.no_http || (r2.re.no_http = new RegExp("^" + r2.re.src_auth + "(?:localhost|(?:(?:" + r2.re.src_domain + ")\\.)+" + r2.re.src_domain_root + ")" + r2.re.src_port + r2.re.src_host_terminator + r2.re.src_path, "i")), r2.re.no_http.test(n2) ? t2 >= 3 && ":" === e2[t2 - 3] || t2 >= 3 && "/" === e2[t2 - 3] ? 0 : n2.match(r2.re.no_http)[0].length : 0;
        } }, "mailto:": { validate: function(e2, t2, r2) {
          var n2 = e2.slice(t2);
          return r2.re.mailto || (r2.re.mailto = new RegExp("^" + r2.re.src_email_name + "@" + r2.re.src_host_strict, "i")), r2.re.mailto.test(n2) ? n2.match(r2.re.mailto)[0].length : 0;
        } } }, l = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
        function u(e2) {
          var t2 = e2.re = r(69)(e2.__opts__), n2 = e2.__tlds__.slice();
          function a2(e3) {
            return e3.replace("%TLDS%", t2.src_tlds);
          }
          e2.onCompile(), e2.__tlds_replaced__ || n2.push("a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"), n2.push(t2.src_xn), t2.src_tlds = n2.join("|"), t2.email_fuzzy = RegExp(a2(t2.tpl_email_fuzzy), "i"), t2.link_fuzzy = RegExp(a2(t2.tpl_link_fuzzy), "i"), t2.link_no_ip_fuzzy = RegExp(a2(t2.tpl_link_no_ip_fuzzy), "i"), t2.host_fuzzy_test = RegExp(a2(t2.tpl_host_fuzzy_test), "i");
          var c2 = [];
          function l2(e3, t3) {
            throw new Error('(LinkifyIt) Invalid schema "' + e3 + '": ' + t3);
          }
          e2.__compiled__ = {}, Object.keys(e2.__schemas__).forEach(function(t3) {
            var r2 = e2.__schemas__[t3];
            if (null !== r2) {
              var n3 = { validate: null, link: null };
              if (e2.__compiled__[t3] = n3, "[object Object]" === s(r2))
                return !function(e3) {
                  return "[object RegExp]" === s(e3);
                }(r2.validate) ? i(r2.validate) ? n3.validate = r2.validate : l2(t3, r2) : n3.validate = function(e3) {
                  return function(t4, r3) {
                    var n4 = t4.slice(r3);
                    return e3.test(n4) ? n4.match(e3)[0].length : 0;
                  };
                }(r2.validate), void (i(r2.normalize) ? n3.normalize = r2.normalize : r2.normalize ? l2(t3, r2) : n3.normalize = function(e3, t4) {
                  t4.normalize(e3);
                });
              !function(e3) {
                return "[object String]" === s(e3);
              }(r2) ? l2(t3, r2) : c2.push(t3);
            }
          }), c2.forEach(function(t3) {
            e2.__compiled__[e2.__schemas__[t3]] && (e2.__compiled__[t3].validate = e2.__compiled__[e2.__schemas__[t3]].validate, e2.__compiled__[t3].normalize = e2.__compiled__[e2.__schemas__[t3]].normalize);
          }), e2.__compiled__[""] = { validate: null, normalize: function(e3, t3) {
            t3.normalize(e3);
          } };
          var u2 = Object.keys(e2.__compiled__).filter(function(t3) {
            return t3.length > 0 && e2.__compiled__[t3];
          }).map(o).join("|");
          e2.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t2.src_ZPCc + "))(" + u2 + ")", "i"), e2.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t2.src_ZPCc + "))(" + u2 + ")", "ig"), e2.re.pretest = RegExp("(" + e2.re.schema_test.source + ")|(" + e2.re.host_fuzzy_test.source + ")|@", "i"), function(e3) {
            e3.__index__ = -1, e3.__text_cache__ = "";
          }(e2);
        }
        function p(e2, t2) {
          var r2 = e2.__index__, n2 = e2.__last_index__, s2 = e2.__text_cache__.slice(r2, n2);
          this.schema = e2.__schema__.toLowerCase(), this.index = r2 + t2, this.lastIndex = n2 + t2, this.raw = s2, this.text = s2, this.url = s2;
        }
        function h(e2, t2) {
          var r2 = new p(e2, t2);
          return e2.__compiled__[r2.schema].normalize(r2, e2), r2;
        }
        function f(e2, t2) {
          if (!(this instanceof f))
            return new f(e2, t2);
          var r2;
          t2 || (r2 = e2, Object.keys(r2 || {}).reduce(function(e3, t3) {
            return e3 || a.hasOwnProperty(t3);
          }, false) && (t2 = e2, e2 = {})), this.__opts__ = n({}, a, t2), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, c, e2), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = false, this.re = {}, u(this);
        }
        f.prototype.add = function(e2, t2) {
          return this.__schemas__[e2] = t2, u(this), this;
        }, f.prototype.set = function(e2) {
          return this.__opts__ = n(this.__opts__, e2), this;
        }, f.prototype.test = function(e2) {
          if (this.__text_cache__ = e2, this.__index__ = -1, !e2.length)
            return false;
          var t2, r2, n2, s2, i2, o2, a2, c2;
          if (this.re.schema_test.test(e2)) {
            for ((a2 = this.re.schema_search).lastIndex = 0; null !== (t2 = a2.exec(e2)); )
              if (s2 = this.testSchemaAt(e2, t2[2], a2.lastIndex)) {
                this.__schema__ = t2[2], this.__index__ = t2.index + t2[1].length, this.__last_index__ = t2.index + t2[0].length + s2;
                break;
              }
          }
          return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c2 = e2.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c2 < this.__index__) && null !== (r2 = e2.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (i2 = r2.index + r2[1].length, (this.__index__ < 0 || i2 < this.__index__) && (this.__schema__ = "", this.__index__ = i2, this.__last_index__ = r2.index + r2[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e2.indexOf("@") >= 0 && null !== (n2 = e2.match(this.re.email_fuzzy)) && (i2 = n2.index + n2[1].length, o2 = n2.index + n2[0].length, (this.__index__ < 0 || i2 < this.__index__ || i2 === this.__index__ && o2 > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i2, this.__last_index__ = o2)), this.__index__ >= 0;
        }, f.prototype.pretest = function(e2) {
          return this.re.pretest.test(e2);
        }, f.prototype.testSchemaAt = function(e2, t2, r2) {
          return this.__compiled__[t2.toLowerCase()] ? this.__compiled__[t2.toLowerCase()].validate(e2, r2, this) : 0;
        }, f.prototype.match = function(e2) {
          var t2 = 0, r2 = [];
          this.__index__ >= 0 && this.__text_cache__ === e2 && (r2.push(h(this, t2)), t2 = this.__last_index__);
          for (var n2 = t2 ? e2.slice(t2) : e2; this.test(n2); )
            r2.push(h(this, t2)), n2 = n2.slice(this.__last_index__), t2 += this.__last_index__;
          return r2.length ? r2 : null;
        }, f.prototype.tlds = function(e2, t2) {
          return e2 = Array.isArray(e2) ? e2 : [e2], t2 ? (this.__tlds__ = this.__tlds__.concat(e2).sort().filter(function(e3, t3, r2) {
            return e3 !== r2[t3 - 1];
          }).reverse(), u(this), this) : (this.__tlds__ = e2.slice(), this.__tlds_replaced__ = true, u(this), this);
        }, f.prototype.normalize = function(e2) {
          e2.schema || (e2.url = "http://" + e2.url), "mailto:" !== e2.schema || /^mailto:/i.test(e2.url) || (e2.url = "mailto:" + e2.url);
        }, f.prototype.onCompile = function() {
        }, e.exports = f;
      }, function(e, t, r) {
        "use strict";
        e.exports = function(e2) {
          var t2 = {};
          t2.src_Any = r(9).source, t2.src_Cc = r(10).source, t2.src_Z = r(11).source, t2.src_P = r(3).source, t2.src_ZPCc = [t2.src_Z, t2.src_P, t2.src_Cc].join("|"), t2.src_ZCc = [t2.src_Z, t2.src_Cc].join("|");
          return t2.src_pseudo_letter = "(?:(?![><｜]|" + t2.src_ZPCc + ")" + t2.src_Any + ")", t2.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t2.src_auth = "(?:(?:(?!" + t2.src_ZCc + "|[@/\\[\\]()]).)+@)?", t2.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t2.src_host_terminator = "(?=$|[><｜]|" + t2.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t2.src_ZPCc + "))", t2.src_path = "(?:[/?#](?:(?!" + t2.src_ZCc + `|[><｜]|[()[\\]{}.,"'?!\\-]).|\\[(?:(?!` + t2.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t2.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t2.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t2.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t2.src_ZCc + "|[']).)+\\'|\\'(?=" + t2.src_pseudo_letter + "|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t2.src_ZCc + "|[.]).|" + (e2 && e2["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + t2.src_ZCc + ").|\\!+(?!" + t2.src_ZCc + "|[!]).|\\?(?!" + t2.src_ZCc + "|[?]).)+|\\/)?", t2.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t2.src_xn = "xn--[a-z0-9\\-]{1,59}", t2.src_domain_root = "(?:" + t2.src_xn + "|" + t2.src_pseudo_letter + "{1,63})", t2.src_domain = "(?:" + t2.src_xn + "|(?:" + t2.src_pseudo_letter + ")|(?:" + t2.src_pseudo_letter + "(?:-|" + t2.src_pseudo_letter + "){0,61}" + t2.src_pseudo_letter + "))", t2.src_host = "(?:(?:(?:(?:" + t2.src_domain + ")\\.)*" + t2.src_domain + "))", t2.tpl_host_fuzzy = "(?:" + t2.src_ip4 + "|(?:(?:(?:" + t2.src_domain + ")\\.)+(?:%TLDS%)))", t2.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t2.src_domain + ")\\.)+(?:%TLDS%))", t2.src_host_strict = t2.src_host + t2.src_host_terminator, t2.tpl_host_fuzzy_strict = t2.tpl_host_fuzzy + t2.src_host_terminator, t2.src_host_port_strict = t2.src_host + t2.src_port + t2.src_host_terminator, t2.tpl_host_port_fuzzy_strict = t2.tpl_host_fuzzy + t2.src_port + t2.src_host_terminator, t2.tpl_host_port_no_ip_fuzzy_strict = t2.tpl_host_no_ip_fuzzy + t2.src_port + t2.src_host_terminator, t2.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t2.src_ZPCc + "|>|$))", t2.tpl_email_fuzzy = '(^|[><｜]|"|\\(|' + t2.src_ZCc + ")(" + t2.src_email_name + "@" + t2.tpl_host_fuzzy_strict + ")", t2.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t2.src_ZPCc + "))((?![$+<=>^`|｜])" + t2.tpl_host_port_fuzzy_strict + t2.src_path + ")", t2.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t2.src_ZPCc + "))((?![$+<=>^`|｜])" + t2.tpl_host_port_no_ip_fuzzy_strict + t2.src_path + ")", t2;
        };
      }, function(e, t, r) {
        (function(e2, n) {
          var s;
          !function(i) {
            t && t.nodeType, e2 && e2.nodeType;
            var o = "object" == typeof n && n;
            o.global !== o && o.window !== o && o.self;
            var a, c = 2147483647, l = /^xn--/, u = /[^\x20-\x7E]/, p = /[\x2E\u3002\uFF0E\uFF61]/g, h = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, f = Math.floor, d = String.fromCharCode;
            function g(e3) {
              throw new RangeError(h[e3]);
            }
            function m(e3, t2) {
              for (var r2 = e3.length, n2 = []; r2--; )
                n2[r2] = t2(e3[r2]);
              return n2;
            }
            function _(e3, t2) {
              var r2 = e3.split("@"), n2 = "";
              return r2.length > 1 && (n2 = r2[0] + "@", e3 = r2[1]), n2 + m((e3 = e3.replace(p, ".")).split("."), t2).join(".");
            }
            function b(e3) {
              for (var t2, r2, n2 = [], s2 = 0, i2 = e3.length; s2 < i2; )
                (t2 = e3.charCodeAt(s2++)) >= 55296 && t2 <= 56319 && s2 < i2 ? 56320 == (64512 & (r2 = e3.charCodeAt(s2++))) ? n2.push(((1023 & t2) << 10) + (1023 & r2) + 65536) : (n2.push(t2), s2--) : n2.push(t2);
              return n2;
            }
            function k(e3) {
              return m(e3, function(e4) {
                var t2 = "";
                return e4 > 65535 && (t2 += d((e4 -= 65536) >>> 10 & 1023 | 55296), e4 = 56320 | 1023 & e4), t2 += d(e4);
              }).join("");
            }
            function v(e3, t2) {
              return e3 + 22 + 75 * (e3 < 26) - ((0 != t2) << 5);
            }
            function y(e3, t2, r2) {
              var n2 = 0;
              for (e3 = r2 ? f(e3 / 700) : e3 >> 1, e3 += f(e3 / t2); e3 > 455; n2 += 36)
                e3 = f(e3 / 35);
              return f(n2 + 36 * e3 / (e3 + 38));
            }
            function x(e3) {
              var t2, r2, n2, s2, i2, o2, a2, l2, u2, p2, h2, d2 = [], m2 = e3.length, _2 = 0, b2 = 128, v2 = 72;
              for ((r2 = e3.lastIndexOf("-")) < 0 && (r2 = 0), n2 = 0; n2 < r2; ++n2)
                e3.charCodeAt(n2) >= 128 && g("not-basic"), d2.push(e3.charCodeAt(n2));
              for (s2 = r2 > 0 ? r2 + 1 : 0; s2 < m2; ) {
                for (i2 = _2, o2 = 1, a2 = 36; s2 >= m2 && g("invalid-input"), ((l2 = (h2 = e3.charCodeAt(s2++)) - 48 < 10 ? h2 - 22 : h2 - 65 < 26 ? h2 - 65 : h2 - 97 < 26 ? h2 - 97 : 36) >= 36 || l2 > f((c - _2) / o2)) && g("overflow"), _2 += l2 * o2, !(l2 < (u2 = a2 <= v2 ? 1 : a2 >= v2 + 26 ? 26 : a2 - v2)); a2 += 36)
                  o2 > f(c / (p2 = 36 - u2)) && g("overflow"), o2 *= p2;
                v2 = y(_2 - i2, t2 = d2.length + 1, 0 == i2), f(_2 / t2) > c - b2 && g("overflow"), b2 += f(_2 / t2), _2 %= t2, d2.splice(_2++, 0, b2);
              }
              return k(d2);
            }
            function C(e3) {
              var t2, r2, n2, s2, i2, o2, a2, l2, u2, p2, h2, m2, _2, k2, x2, C2 = [];
              for (m2 = (e3 = b(e3)).length, t2 = 128, r2 = 0, i2 = 72, o2 = 0; o2 < m2; ++o2)
                (h2 = e3[o2]) < 128 && C2.push(d(h2));
              for (n2 = s2 = C2.length, s2 && C2.push("-"); n2 < m2; ) {
                for (a2 = c, o2 = 0; o2 < m2; ++o2)
                  (h2 = e3[o2]) >= t2 && h2 < a2 && (a2 = h2);
                for (a2 - t2 > f((c - r2) / (_2 = n2 + 1)) && g("overflow"), r2 += (a2 - t2) * _2, t2 = a2, o2 = 0; o2 < m2; ++o2)
                  if ((h2 = e3[o2]) < t2 && ++r2 > c && g("overflow"), h2 == t2) {
                    for (l2 = r2, u2 = 36; !(l2 < (p2 = u2 <= i2 ? 1 : u2 >= i2 + 26 ? 26 : u2 - i2)); u2 += 36)
                      x2 = l2 - p2, k2 = 36 - p2, C2.push(d(v(p2 + x2 % k2, 0))), l2 = f(x2 / k2);
                    C2.push(d(v(l2, 0))), i2 = y(r2, _2, n2 == s2), r2 = 0, ++n2;
                  }
                ++r2, ++t2;
              }
              return C2.join("");
            }
            a = { version: "1.4.1", ucs2: { decode: b, encode: k }, decode: x, encode: C, toASCII: function(e3) {
              return _(e3, function(e4) {
                return u.test(e4) ? "xn--" + C(e4) : e4;
              });
            }, toUnicode: function(e3) {
              return _(e3, function(e4) {
                return l.test(e4) ? x(e4.slice(4).toLowerCase()) : e4;
              });
            } }, void 0 === (s = function() {
              return a;
            }.call(t, r, t, e2)) || (e2.exports = s);
          }();
        }).call(this, r(71)(e), r(72));
      }, function(e, t) {
        e.exports = function(e2) {
          return e2.webpackPolyfill || (e2.deprecate = function() {
          }, e2.paths = [], e2.children || (e2.children = []), Object.defineProperty(e2, "loaded", { enumerable: true, get: function() {
            return e2.l;
          } }), Object.defineProperty(e2, "id", { enumerable: true, get: function() {
            return e2.i;
          } }), e2.webpackPolyfill = 1), e2;
        };
      }, function(e, t) {
        var r;
        r = function() {
          return this;
        }();
        try {
          r = r || new Function("return this")();
        } catch (e2) {
          "object" == typeof window && (r = window);
        }
        e.exports = r;
      }, function(e, t, r) {
        "use strict";
        e.exports = { options: { html: false, xhtmlOut: false, breaks: false, langPrefix: "language-", linkify: false, typographer: false, quotes: "“”‘’", highlight: null, maxNesting: 100 }, components: { core: {}, block: {}, inline: {} } };
      }, function(e, t, r) {
        "use strict";
        e.exports = { options: { html: false, xhtmlOut: false, breaks: false, langPrefix: "language-", linkify: false, typographer: false, quotes: "“”‘’", highlight: null, maxNesting: 20 }, components: { core: { rules: ["normalize", "block", "inline"] }, block: { rules: ["paragraph"] }, inline: { rules: ["text"], rules2: ["balance_pairs", "text_collapse"] } } };
      }, function(e, t, r) {
        "use strict";
        e.exports = { options: { html: true, xhtmlOut: true, breaks: false, langPrefix: "language-", linkify: false, typographer: false, quotes: "“”‘’", highlight: null, maxNesting: 20 }, components: { core: { rules: ["normalize", "block", "inline"] }, block: { rules: ["blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph"] }, inline: { rules: ["autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text"], rules2: ["balance_pairs", "emphasis", "text_collapse"] } } };
      }, function(e, t, r) {
        "use strict";
        r.r(t), r.d(t, "default", function() {
          return i;
        });
        var n = r(17), s = r(2);
        function i(e2) {
          var t2 = void 0 === e2 ? {} : e2, r2 = t2.Hljs, i2 = t2.baseConfig, o = t2.codeBlockClass, a = t2.codeHighlightExtensionMap, c = void 0 === a ? {} : a, l = Object(n.default)(i2);
          return l.extend(function(e3) {
            e3.set({ highlight: Object(s.a)({ codeHighlightExtensionMap: c, hasLang: function(e4) {
              return r2.getLanguage(e4);
            }, codeBlockClass: o, highlight: function(e4, t3) {
              return r2.highlight(e4, { language: t3 }).value;
            } }) });
          }), { previewClass: "markdown-body", extend: function(e3) {
            l.extend(function() {
              e3.apply(void 0, arguments);
            });
          }, markdownParser: l.markdownParser };
        }
      }, , function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(76);
        t.default = function(e2, t2) {
          void 0 === t2 && (t2 = {});
          var r2 = t2, s = r2.extend, i = r2.config, o = r2.codeHighlightExtensionMap, a = function(e3) {
            var t3 = Object(n.default)({ Hljs: e3.Hljs, baseConfig: e3.baseConfig, codeBlockClass: e3.codeBlockClass || function(e4) {
              return "v-md-hljs-" + e4;
            }, codeHighlightExtensionMap: e3.codeHighlightExtensionMap || {} });
            return { previewClass: "github-markdown-body", extend: function(e4) {
              t3.extend(e4);
            }, markdownParser: t3.markdownParser };
          }({ Hljs: r2.Hljs, baseConfig: i, codeHighlightExtensionMap: o });
          s && a.extend(s), e2.theme(a);
        };
      }, , function(e, t, r) {
      }, , function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(78);
        r(80), r(83);
        t.default = { install: function(e2, t2) {
          e2.vMdParser.use(n.default, t2);
        } };
      }, function(e, t, r) {
      }]).default;
    });
  }
});
export default require_github();
/*! Bundled license information:

@kangc/v-md-editor/lib/theme/github.js:
  (*! https://mths.be/punycode v1.4.1 by @mathias *)
*/
//# sourceMappingURL=@kangc_v-md-editor_lib_theme_github__js.js.map
