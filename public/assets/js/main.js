! function(t) {
    function i(s) {
        if(e[s]) return e[s].exports;
        var o = e[s] = {
            i: s,
            l: !1,
            exports: {}
        };
        return t[s].call(o.exports, o, o.exports, i), o.l = !0, o.exports
    }
    var e = {};
    i.m = t, i.c = e, i.d = function(t, e, s) {
        i.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: s
        })
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, i) {
        return Object.prototype.hasOwnProperty.call(t, i)
    }, i.p = "./", i(i.s = 0)
}([function(t, i, e) {
    "use strict";
    var s = e(1),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(s);
    e(2),
        function(t) {
            t.fn.selectScroll = function(i) {
                function e(t) {
                    for(var i = "", e = 0; e < t; e++) i += '<div class="wheel">\n                                    <ul class="wheel-scroll">\n                                    </ul>\n                                </div>\n                                ';
                    return i
                }
                var s = {
                    title: "请选择",
                    data: [
                        [{
                            text: "水晶室女水晶室女水晶室女水晶室女水晶室女",
                            id: 12
                        }, {
                            text: "莉娜",
                            id: 13
                        }, {
                            text: "斯拉克",
                            id: 14
                        }, {
                            text: "斯拉达",
                            id: 15
                        }],
                        [{
                            text: "水晶室女22水晶室女22水晶室女22水晶室女22水晶室女22水晶室女22水晶室女22",
                            id: 12
                        }, {
                            text: "莉娜22",
                            id: 13
                        }, {
                            text: "斯拉克22",
                            id: 14
                        }, {
                            text: "斯拉达33",
                            id: 15
                        }],
                        [{
                            text: "水晶室女33",
                            id: 12
                        }, {
                            text: "莉娜33",
                            id: 13
                        }, {
                            text: "斯拉克33",
                            id: 14
                        }, {
                            text: "斯拉达33斯拉达33斯拉达33斯拉达33斯拉达33斯拉达33",
                            id: 15
                        }]
                    ],
                    cancelTxt: "cancel",
                    cancelClass: "",
                    confirmTxt: "confirm",
                    confirmClass: "",
                    cancel: null,
                    confirm: null,
                    selectedIndex: [0, 0, 0],
                    class: ""
                };
                this.settings = t.extend({}, s, i), this.settings.maxLevel = this.settings.data.length > 3 ? 3 : this.settings.data.length > 0 ? this.settings.data.length : 1;
                var n = e.call(this, this.settings.maxLevel),
                    r = '<div class="picker">\n            <div class="picker-panel">\n                <div class="picker-choose border-bottom-1px">\n                    <span class="cancel"> <img src="../assets/images/icons/edit.svg" alt=""> </span>\n                    <span class="confirm">' + this.settings.confirmTxt + '</span>\n                    <h1 class="picker-title">' + this.settings.title + '</h1>\n                </div>\n                <div class="picker-content">\n                    <div class="mask-top border-bottom-1px"></div>\n                    <div class="mask-bottom border-top-1px"></div>\n                    <div class="wheel-wrapper">' + n + '</div>\n                </div>\n                <div class="picker-footer"></div>\n            </div>\n        </div>',
                    h = this;
                h.$wheel = [], h.isEmpty = function() {
                    return !h.settings.data.length
                }, h.init = function() {
                    if(h.next(".picker").length) h.show();
                    else {
                        h.after(r), "" != h.settings.class && h.next(".picker").addClass(h.settings.class);
                        for(var t = 0; t < h.settings.maxLevel; t++) h._createWheel(t)
                    }
                }, h.confirm = function(t) {
                    var i = h.getData();
                    if(h.hide(), h.bindSelectedIndex(), t.data.callback) t.data.callback(i);
                    else {
                        var e = "";
                        Object.keys(i).reduce(function(t, s) {
                            return e += i[t].text + "," + i[s].text, s
                        }), h.html(e)
                    }
                }, h.cancel = function() {
                    h.hide()
                }, h.show = function() {
                    h.$picker = h.next(".picker"), h.$picker.show(), h.$picker.find(".picker-panel").attr("class", "picker-panel").addClass("up")
                }, h.hide = function() {
                    if(h.$picker) {
                        h.$picker.find(".picker-panel").attr("class", "picker-panel").addClass("down");
                        var t = setTimeout(function() {
                            h.$picker.hide(), clearTimeout(t)
                        }, 300)
                    }
                }, h._destroy = function() {
                    h.$wheel[index] && (h.$wheel[index].disable(), h.$wheel[index].destroy()), h.$picker && h.$picker.remove()
                }, h.setData = function() {}, h.getData = function() {
                    var t = [];
                    if(h.isEmpty()) return [];
                    for(var i = 0; i < h.$wheel.length; i++) t.push(h.settings.data[i][h.$wheel[i].getSelectedIndex()]);
                    return t
                }, h.setSelectedIndex = function(t) {
                    h.bindSelectedIndex(t)
                }, h.updateSelectedIndex = function() {
                    var t = h.settings.selectedIndex.length;
                    for(t; t < h.settings.maxLevel; t++) h.settings.selectedIndex[t] = 0;
                    h.attr("data-selectindex") && (h.settings.selectedIndex = h.attr("data-selectindex").split(","))
                }, h.bindSelectedIndex = function() {
                    for(var t = [], i = 0; i < h.$wheel.length; i++) t.push(h.$wheel[i].getSelectedIndex());
                    t.lenght && h.attr("data-selectIndex", t)
                }, h.detachButtonEvents = function() {
                    h.$confirm.unbind(), h.$cancel.unbind()
                }, h.attachButtonEvents = function() {
                    h.$confirm = h.$picker.find(".confirm").addClass(h.settings.confirmClass), h.$confirm.bind("click", {
                        callback: h.settings.confirm
                    }, h.confirm), h.$cancel = h.$picker.find(".cancel").addClass(h.settings.cancelClass), h.$cancel.bind("click", {
                        callback: h.settings.cancel
                    }, h.cancel)
                }, h.scrollTo = function(t) {
                    h.$wheel[t].wheelTo(t)
                }, h._createWheel = function(t) {
                    h._createHtml(t), h.updateSelectedIndex();
                    var i = document.querySelectorAll(".wheel");
                    h.$wheel[t] = new o.default(i[t], {
                        wheel: {
                            selectedIndex: h.settings.selectedIndex[t],
                            wheelWrapperClass: "wheel-scroll",
                            wheelItemClass: "wheel-item"
                        },
                        probeType: 3
                    }), t === h.settings.maxLevel - 1 && (h.show(), h.attachButtonEvents())
                }, h._createHtml = function(i) {
                    for(var e = "", s = this.settings.data.length ? this.settings.data[i].length : 0, o = 0; o < s; o++) e += '<li class="wheel-item" data-id="' + this.settings.data[i][o].id + '">' + this.settings.data[i][o].text + "</li>";
                    t(".wheel-scroll").eq(i).append(e)
                }, h.init()
            }
        }(jQuery)
}, function(t, i, e) {
    "use strict";

    function s() {
        return window.performance && window.performance.now ? window.performance.now() + window.performance.timing.navigationStart : +new Date
    }

    function o(t) {
        for(var i = arguments.length, e = Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) e[s - 1] = arguments[s];
        for(var o = 0; o < e.length; o++) {
            var n = e[o];
            for(var r in n) t[r] = n[r]
        }
        return t
    }

    function n(t) {
        return void 0 === t || null === t
    }

    function r(t, i) {
        return Math.sqrt(t * t + i * i)
    }

    function h(t) {
        return !1 !== C && ("standard" === C ? "transitionEnd" === t ? "transitionend" : t : C + t.charAt(0).toUpperCase() + t.substr(1))
    }

    function a(t, i, e, s) {
        t.addEventListener(i, e, {
            passive: !1,
            capture: !!s
        })
    }

    function l(t, i, e, s) {
        t.removeEventListener(i, e, {
            passive: !1,
            capture: !!s
        })
    }

    function c(t) {
        for(var i = 0, e = 0; t;) i -= t.offsetLeft, e -= t.offsetTop, t = t.offsetParent;
        return {
            left: i,
            top: e
        }
    }

    function p(t) {
        var i = t.getBoundingClientRect();
        return {
            left: -(i.left + window.pageXOffset),
            top: -(i.top + window.pageYOffset)
        }
    }

    function d(t) {
        if(t instanceof window.SVGElement) {
            var i = t.getBoundingClientRect();
            return {
                top: i.top,
                left: i.left,
                width: i.width,
                height: i.height
            }
        }
        return {
            top: t.offsetTop,
            left: t.offsetLeft,
            width: t.offsetWidth,
            height: t.offsetHeight
        }
    }

    function u(t, i) {
        for(var e in i)
            if(i[e].test(t[e])) return !0;
        return !1
    }

    function m(t, i) {
        var e = document.createEvent("Event");
        e.initEvent(i, !0, !0), e.pageX = t.pageX, e.pageY = t.pageY, t.target.dispatchEvent(e)
    }

    function f(t) {
        function i() {
            r = document.createEvent("Event"), r.initEvent(e, h, a), o(r, n)
        }
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "click",
            s = void 0;
        "mouseup" === t.type || "mousecancel" === t.type ? s = t : "touchend" !== t.type && "touchcancel" !== t.type || (s = t.changedTouches[0]);
        var n = {};
        s && (n.screenX = s.screenX || 0, n.screenY = s.screenY || 0, n.clientX = s.clientX || 0, n.clientY = s.clientY || 0);
        var r = void 0,
            h = !0,
            a = !0;
        if("undefined" != typeof MouseEvent) try {
            r = new MouseEvent(e, o({
                bubbles: h,
                cancelable: a
            }, n))
        } catch(t) {
            i()
        } else i();
        r.forwardedTouchEvent = !0, r._constructed = !0, t.target.dispatchEvent(r)
    }

    function g(t) {
        f(t, "dblclick")
    }

    function v(t, i) {
        i.firstChild ? y(t, i.firstChild) : i.appendChild(t)
    }

    function y(t, i) {
        i.parentNode.insertBefore(t, i)
    }

    function x(t, i) {
        t.removeChild(i)
    }

    function w(t, i, e, s, o, n, r) {
        var h = t - i,
            a = Math.abs(h) / e,
            l = r.deceleration,
            c = r.itemHeight,
            p = r.swipeBounceTime,
            d = r.wheel,
            u = r.swipeTime,
            m = u,
            f = d ? 4 : 15,
            g = t + a / l * (h < 0 ? -1 : 1);
        return d && c && (g = Math.round(g / c) * c), g < s ? (g = n ? Math.max(s - n / 4, s - n / f * a) : s, m = p) : g > o && (g = n ? Math.min(o + n / 4, o + n / f * a) : o, m = p), {
            destination: Math.round(g),
            duration: m
        }
    }

    function S() {}

    function b(t) {}

    function T(t, i) {
        if(!t) throw new Error("[BScroll] " + i)
    }

    function _(t) {
        var i = document.createElement("div"),
            e = document.createElement("div");
        return i.style.cssText = "position:absolute;z-index:9999;pointerEvents:none", e.style.cssText = "box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;", e.className = "bscroll-indicator", "horizontal" === t ? (i.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", e.style.height = "100%", i.className = "bscroll-horizontal-scrollbar") : (i.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", e.style.width = "100%", i.className = "bscroll-vertical-scrollbar"), i.style.cssText += ";overflow:hidden", i.appendChild(e), i
    }

    function Y(t, i) {
        this.wrapper = i.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = t, this.direction = i.direction, i.fade ? (this.visible = 0, this.wrapperStyle.opacity = "0") : this.visible = 1, this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.x = 0, this.y = 0, i.interactive && this._addDOMEvents()
    }

    function X(t) {
        if(t && t.classList) return t.classList.contains("tombstone")
    }

    function M(t, i) {
        var e = this;
        this.options = i, T("function" == typeof this.options.createTombstone, "Infinite scroll need createTombstone Function to create tombstone"), T("function" == typeof this.options.fetch, "Infinite scroll need fetch Function to fetch new data."), T("function" == typeof this.options.render, "Infinite scroll need render Function to render each item."), this.firstAttachedItem = 0, this.lastAttachedItem = 0, this.anchorScrollTop = 0, this.anchorItem = {
            index: 0,
            offset: 0
        }, this.tombstoneHeight = 0, this.tombstoneWidth = 0, this.tombstones = [], this.items = [], this.loadedItems = 0, this.requestInProgress = !1, this.hasMore = !0, this.scroller = t, this.wrapperEl = this.scroller.wrapper, this.scrollerEl = this.scroller.scroller, this.scroller.on("scroll", function() {
            e.onScroll()
        }), this.scroller.on("resize", function() {
            e.onResize()
        }), this.onResize()
    }

    function P(t, i) {
        this.wrapper = "string" == typeof t ? document.querySelector(t) : t, this.wrapper || b("Can not resolve the wrapper DOM."), this.scroller = this.wrapper.children[0], this.scroller || b("The wrapper need at least one child element to be scroller."), this.scrollerStyle = this.scroller.style, this._init(t, i)
    }
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    /*!
     * better-normal-scroll v1.12.4
     * (c) 2016-2018 ustbhuangyi
     * Released under the MIT License.
     */
    var E = function() {
            function t(t, i) {
                var e = [],
                    s = !0,
                    o = !1,
                    n = void 0;
                try {
                    for(var r, h = t[Symbol.iterator](); !(s = (r = h.next()).done) && (e.push(r.value), !i || e.length !== i); s = !0);
                } catch(t) {
                    o = !0, n = t
                } finally {
                    try {
                        !s && h.return && h.return()
                    } finally {
                        if(o) throw n
                    }
                }
                return e
            }
            return function(i, e) {
                if(Array.isArray(i)) return i;
                if(Symbol.iterator in Object(i)) return t(i, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        D = function(t) {
            if(Array.isArray(t)) {
                for(var i = 0, e = Array(t.length); i < t.length; i++) e[i] = t[i];
                return e
            }
            return Array.from(t)
        },
        k = "undefined" != typeof window,
        I = k && navigator.userAgent.toLowerCase(),
        H = I && /wechatdevtools/.test(I),
        z = I && I.indexOf("android") > 0,
        W = k && document.createElement("div").style,
        C = function() {
            if(!k) return !1;
            var t = {
                webkit: "webkitTransform",
                Moz: "MozTransform",
                O: "OTransform",
                ms: "msTransform",
                standard: "transform"
            };
            for(var i in t)
                if(void 0 !== W[t[i]]) return i;
            return !1
        }(),
        O = h("transform"),
        A = k && h("perspective") in W,
        L = k && ("ontouchstart" in window || H),
        R = !1 !== O,
        F = k && h("transition") in W,
        $ = {
            transform: O,
            transitionTimingFunction: h("transitionTimingFunction"),
            transitionDuration: h("transitionDuration"),
            transitionDelay: h("transitionDelay"),
            transformOrigin: h("transformOrigin"),
            transitionEnd: h("transitionEnd")
        },
        N = 1,
        U = {
            touchstart: N,
            touchmove: N,
            touchend: N,
            mousedown: 2,
            mousemove: 2,
            mouseup: 2
        },
        B = {
            startX: 0,
            startY: 0,
            scrollX: !1,
            scrollY: !0,
            freeScroll: !1,
            directionLockThreshold: 5,
            eventPassthrough: "",
            click: !1,
            tap: !1,
            bounce: !0,
            bounceTime: 800,
            momentum: !0,
            momentumLimitTime: 300,
            momentumLimitDistance: 15,
            swipeTime: 2500,
            swipeBounceTime: 500,
            deceleration: .0015,
            flickLimitTime: 200,
            flickLimitDistance: 100,
            resizePolling: 60,
            probeType: 0,
            preventDefault: !0,
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
            },
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0,
            bindToWrapper: !1,
            disableMouse: L,
            disableTouch: !L,
            observeDOM: !0,
            autoBlur: !0,
            wheel: !1,
            snap: !1,
            scrollbar: !1,
            pullDownRefresh: !1,
            pullUpLoad: !1,
            mouseWheel: !1,
            stopPropagation: !1,
            zoom: !1,
            infinity: !1,
            dblclick: !1
        },
        q = {
            swipe: {
                style: "cubic-bezier(0.23, 1, 0.32, 1)",
                fn: function(t) {
                    return 1 + --t * t * t * t * t
                }
            },
            swipeBounce: {
                style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                fn: function(t) {
                    return t * (2 - t)
                }
            },
            bounce: {
                style: "cubic-bezier(0.165, 0.84, 0.44, 1)",
                fn: function(t) {
                    return 1 - --t * t * t * t
                }
            }
        },
        V = function() {
            return k ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || function(t) {
                return window.setTimeout(t, (t.interval || 100 / 60) / 2)
            } : S
        }(),
        j = function() {
            return k ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function(t) {
                window.clearTimeout(t)
            } : S
        }(),
        Z = 1,
        G = -1,
        Q = 1,
        J = -1,
        K = 1,
        tt = 3;
    Y.prototype.handleEvent = function(t) {
        switch(t.type) {
            case "touchstart":
            case "mousedown":
                this._start(t);
                break;
            case "touchmove":
            case "mousemove":
                this._move(t);
                break;
            case "touchend":
            case "mouseup":
            case "touchcancel":
            case "mousecancel":
                this._end(t)
        }
    }, Y.prototype.refresh = function() {
        this._shouldShow() && (this.transitionTime(), this._calculate(), this.updatePosition())
    }, Y.prototype.fade = function(t, i) {
        var e = this;
        if(!i || this.visible) {
            var s = t ? 250 : 500;
            t = t ? "1" : "0", this.wrapperStyle[$.transitionDuration] = s + "ms", clearTimeout(this.fadeTimeout), this.fadeTimeout = setTimeout(function() {
                e.wrapperStyle.opacity = t, e.visible = +t
            }, 0)
        }
    }, Y.prototype.updatePosition = function() {
        if("vertical" === this.direction) {
            var t = Math.round(this.sizeRatioY * this.scroller.y);
            if(t < 0) {
                this.transitionTime(500);
                var i = Math.max(this.indicatorHeight + 3 * t, 8);
                this.indicatorStyle.height = i + "px", t = 0
            } else if(t > this.maxPosY) {
                this.transitionTime(500);
                var e = Math.max(this.indicatorHeight - 3 * (t - this.maxPosY), 8);
                this.indicatorStyle.height = e + "px", t = this.maxPosY + this.indicatorHeight - e
            } else this.indicatorStyle.height = this.indicatorHeight + "px";
            this.y = t, this.scroller.options.useTransform ? this.indicatorStyle[$.transform] = "translateY(" + t + "px)" + this.scroller.translateZ : this.indicatorStyle.top = t + "px"
        } else {
            var s = Math.round(this.sizeRatioX * this.scroller.x);
            if(s < 0) {
                this.transitionTime(500);
                var o = Math.max(this.indicatorWidth + 3 * s, 8);
                this.indicatorStyle.width = o + "px", s = 0
            } else if(s > this.maxPosX) {
                this.transitionTime(500);
                var n = Math.max(this.indicatorWidth - 3 * (s - this.maxPosX), 8);
                this.indicatorStyle.width = n + "px", s = this.maxPosX + this.indicatorWidth - n
            } else this.indicatorStyle.width = this.indicatorWidth + "px";
            this.x = s, this.scroller.options.useTransform ? this.indicatorStyle[$.transform] = "translateX(" + s + "px)" + this.scroller.translateZ : this.indicatorStyle.left = s + "px"
        }
    }, Y.prototype.transitionTime = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        this.indicatorStyle[$.transitionDuration] = t + "ms"
    }, Y.prototype.transitionTimingFunction = function(t) {
        this.indicatorStyle[$.transitionTimingFunction] = t
    }, Y.prototype.destroy = function() {
        this._removeDOMEvents(), this.wrapper.parentNode.removeChild(this.wrapper)
    }, Y.prototype._start = function(t) {
        var i = t.touches ? t.touches[0] : t;
        t.preventDefault(), t.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = i.pageX, this.lastPointY = i.pageY, this.startTime = s(), this._handleMoveEvents(a), this.scroller.trigger("beforeScrollStart")
    }, Y.prototype._move = function(t) {
        var i = t.touches ? t.touches[0] : t;
        t.preventDefault(), t.stopPropagation(), this.moved || this.scroller.trigger("scrollStart"), this.moved = !0;
        var e = i.pageX - this.lastPointX;
        this.lastPointX = i.pageX;
        var s = i.pageY - this.lastPointY;
        this.lastPointY = i.pageY;
        var o = this.x + e,
            n = this.y + s;
        this._pos(o, n)
    }, Y.prototype._end = function(t) {
        if(this.initiated) {
            this.initiated = !1, t.preventDefault(), t.stopPropagation(), this._handleMoveEvents(l);
            var i = this.scroller.options.snap;
            if(i) {
                var e = i.speed,
                    s = i.easing,
                    o = void 0 === s ? q.bounce : s,
                    n = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                    r = e || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - n.x), 1e3), Math.min(Math.abs(this.scroller.y - n.y), 1e3)), 300);
                this.scroller.x === n.x && this.scroller.y === n.y || (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = n, this.scroller.scrollTo(n.x, n.y, r, o))
            }
            this.moved && this.scroller.trigger("scrollEnd", {
                x: this.scroller.x,
                y: this.scroller.y
            })
        }
    }, Y.prototype._pos = function(t, i) {
        t < 0 ? t = 0 : t > this.maxPosX && (t = this.maxPosX), i < 0 ? i = 0 : i > this.maxPosY && (i = this.maxPosY), t = Math.round(t / this.sizeRatioX), i = Math.round(i / this.sizeRatioY), this.scroller.scrollTo(t, i), this.scroller.trigger("scroll", {
            x: this.scroller.x,
            y: this.scroller.y
        })
    }, Y.prototype._shouldShow = function() {
        return "vertical" === this.direction && this.scroller.hasVerticalScroll || "horizontal" === this.direction && this.scroller.hasHorizontalScroll ? (this.wrapper.style.display = "", !0) : (this.wrapper.style.display = "none", !1)
    }, Y.prototype._calculate = function() {
        if("vertical" === this.direction) {
            var t = this.wrapper.clientHeight;
            this.indicatorHeight = Math.max(Math.round(t * t / (this.scroller.scrollerHeight || t || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px", this.maxPosY = t - this.indicatorHeight, this.sizeRatioY = this.maxPosY / this.scroller.maxScrollY
        } else {
            var i = this.wrapper.clientWidth;
            this.indicatorWidth = Math.max(Math.round(i * i / (this.scroller.scrollerWidth || i || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px", this.maxPosX = i - this.indicatorWidth, this.sizeRatioX = this.maxPosX / this.scroller.maxScrollX
        }
    }, Y.prototype._addDOMEvents = function() {
        var t = a;
        this._handleDOMEvents(t)
    }, Y.prototype._removeDOMEvents = function() {
        var t = l;
        this._handleDOMEvents(t), this._handleMoveEvents(t)
    }, Y.prototype._handleMoveEvents = function(t) {
        this.scroller.options.disableTouch || t(window, "touchmove", this), this.scroller.options.disableMouse || t(window, "mousemove", this)
    }, Y.prototype._handleDOMEvents = function(t) {
        this.scroller.options.disableTouch || (t(this.indicator, "touchstart", this), t(window, "touchend", this)), this.scroller.options.disableMouse || (t(this.indicator, "mousedown", this), t(window, "mouseup", this))
    };
    var it = 2e3;
    M.prototype.onScroll = function() {
            var t = -this.scroller.y,
                i = t - this.anchorScrollTop;
            this.anchorItem = 0 === t ? {
                index: 0,
                offset: 0
            } : this._calculateAnchoredItem(this.anchorItem, i), this.anchorScrollTop = t;
            var e = this._calculateAnchoredItem(this.anchorItem, this.wrapperEl.offsetHeight),
                s = this.anchorItem.index,
                o = e.index;
            i < 0 ? (s -= 30, o += 10) : (s -= 10, o += 30), this.fill(s, o), this.maybeRequestContent()
        }, M.prototype.onResize = function() {
            var t = this.options.createTombstone();
            t.style.position = "absolute", this.scrollerEl.appendChild(t), t.style.display = "", this.tombstoneHeight = t.offsetHeight, this.tombstoneWidth = t.offsetWidth, this.scrollerEl.removeChild(t);
            for(var i = 0; i < this.items.length; i++) this.items[i].height = this.items[i].width = 0;
            this.onScroll()
        }, M.prototype.fill = function(t, i) {
            this.firstAttachedItem = Math.max(0, t), this.hasMore || (i = Math.min(i, this.items.length)), this.lastAttachedItem = i, this.attachContent()
        }, M.prototype.maybeRequestContent = function() {
            var t = this;
            if(!this.requestInProgress && this.hasMore) {
                var i = this.lastAttachedItem - this.loadedItems;
                i <= 0 || (this.requestInProgress = !0, this.options.fetch(i).then(function(i) {
                    if(i) t.addContent(i);
                    else {
                        t.hasMore = !1;
                        var e = t._removeTombstones(),
                            s = 0;
                        t.anchorItem.index <= t.items.length ? (s = t._fixScrollPosition(), t._setupAnimations({}, s), t.scroller.resetPosition(t.scroller.options.bounceTime)) : (t.anchorItem.index -= e, s = t._fixScrollPosition(), t._setupAnimations({}, s), t.scroller.stop(), t.scroller.resetPosition(), t.onScroll())
                    }
                }))
            }
        }, M.prototype.addContent = function(t) {
            this.requestInProgress = !1;
            for(var i = 0; i < t.length; i++) this.items.length <= this.loadedItems && this._addItem(), this.items[this.loadedItems++].data = t[i];
            this.attachContent(), this.maybeRequestContent()
        }, M.prototype.attachContent = function() {
            var t = this._collectUnusedNodes(),
                i = this._createDOMNodes(t);
            this._cleanupUnusedNodes(t), this._cacheNodeSize();
            var e = this._fixScrollPosition();
            this._setupAnimations(i, e)
        }, M.prototype._removeTombstones = function() {
            for(var t = void 0, i = 0, e = this.items.length, s = 0; s < e; s++) {
                var o = this.items[s].node,
                    n = this.items[s].data;
                o && !X(o) || n || (t || (t = s), o && this.scrollerEl.removeChild(o))
            }
            return i = e - t, this.items.splice(t), this.lastAttachedItem = Math.min(this.lastAttachedItem, this.items.length), i
        }, M.prototype._collectUnusedNodes = function() {
            for(var t = [], i = 0; i < this.items.length; i++)
                if(i !== this.firstAttachedItem) {
                    var e = this.items[i].node;
                    e && (X(e) ? (this.tombstones.push(e), this.tombstones[this.tombstones.length - 1].style.display = "none") : t.push(e)), this.items[i].node = null
                } else i = this.lastAttachedItem - 1;
            return t
        }, M.prototype._createDOMNodes = function(t) {
            for(var i = {}, e = this.firstAttachedItem; e < this.lastAttachedItem; e++) {
                for(; this.items.length <= e;) this._addItem();
                var s = this.items[e].node,
                    o = this.items[e].data;
                if(s) {
                    if(!X(s) || !o) continue;
                    s.style.zIndex = 1, i[e] = [s, this.items[e].top - this.anchorScrollTop], this.items[e].node = null
                }
                var n = o ? this.options.render(o, t.pop()) : this._getTombStone();
                n.style.position = "absolute", this.items[e].top = -1, this.scrollerEl.appendChild(n), this.items[e].node = n
            }
            return i
        }, M.prototype._cleanupUnusedNodes = function(t) {
            for(; t.length;) this.scrollerEl.removeChild(t.pop())
        }, M.prototype._cacheNodeSize = function() {
            for(var t = this.firstAttachedItem; t < this.lastAttachedItem; t++) this.items[t].data && !this.items[t].height && (this.items[t].height = this.items[t].node.offsetHeight, this.items[t].width = this.items[t].node.offsetWidth)
        }, M.prototype._fixScrollPosition = function() {
            this.anchorScrollTop = 0;
            for(var t = 0; t < this.anchorItem.index; t++) this.anchorScrollTop += this.items[t].height || this.tombstoneHeight;
            this.anchorScrollTop += this.anchorItem.offset;
            for(var i = this.anchorScrollTop - this.anchorItem.offset, e = this.anchorItem.index; e > this.firstAttachedItem;) i -= this.items[e - 1].height || this.tombstoneHeight, e--;
            return i
        }, M.prototype._setupAnimations = function(t, i) {
            var e = this;
            for(var s in t) {
                var o = t[s];
                this.items[s].node.style.transform = "translateY(" + (this.anchorScrollTop + o[1]) + "px) scale(" + this.tombstoneWidth / this.items[s].width + ", " + this.tombstoneHeight / this.items[s].height + ")", this.items[s].node.offsetTop, o[0].offsetTop, this.items[s].node.style.transition = "transform 200ms"
            }
            for(var n = this.firstAttachedItem; n < this.lastAttachedItem; n++) {
                var r = t[n];
                if(r) {
                    var h = r[0];
                    h.style.transition = "transform 200ms, opacity 200ms", h.style.transform = "translateY(" + i + "px) scale(" + this.items[n].width / this.tombstoneWidth + ", " + this.items[n].height / this.tombstoneHeight + ")", h.style.opacity = 0
                }
                i !== this.items[n].top && (r || (this.items[n].node.style.transition = ""), this.items[n].node.style.transform = "translateY(" + i + "px)"), this.items[n].top = i, i += this.items[n].height || this.tombstoneHeight
            }
            this.scroller.maxScrollY = -(i - this.wrapperEl.offsetHeight + (this.hasMore ? it : 0)), setTimeout(function() {
                for(var i in t) {
                    var s = t[i];
                    s[0].style.display = "none", e.tombstones.push(s[0])
                }
            }, 200)
        }, M.prototype._getTombStone = function() {
            var t = this.tombstones.pop();
            return t ? (t.style.display = "", t.style.opacity = 1, t.style.transform = "", t.style.transition = "", t) : this.options.createTombstone()
        }, M.prototype._addItem = function() {
            this.items.push({
                data: null,
                node: null,
                height: 0,
                width: 0,
                top: 0
            })
        }, M.prototype._calculateAnchoredItem = function(t, i) {
            if(0 === i) return t;
            var e = t.index,
                s = 0;
            if((i += t.offset) < 0) {
                for(; i < 0 && e > 0 && this.items[e - 1].height;) i += this.items[e - 1].height, e--;
                s = Math.max(-e, Math.ceil(Math.min(i, 0) / this.tombstoneHeight))
            } else {
                for(; i > 0 && e < this.items.length && this.items[e].height && this.items[e].height < i;) i -= this.items[e].height, e++;
                (e >= this.items.length || !this.items[e].height) && (s = Math.floor(Math.max(i, 0) / this.tombstoneHeight))
            }
            return e += s, i -= s * this.tombstoneHeight, {
                index: e,
                offset: i
            }
        },
        function(t) {
            t.prototype._init = function(t, i) {
                this._handleOptions(i), this._events = {}, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this.setScale(1), this._addDOMEvents(), this._initExtFeatures(), this._watchTransition(), this.options.observeDOM && this._initDOMObserver(), this.options.autoBlur && this._handleAutoBlur(), this.refresh(), this.options.snap || this.scrollTo(this.options.startX, this.options.startY), this.enable()
            }, t.prototype.setScale = function(t) {
                this.lastScale = n(this.scale) ? t : this.scale, this.scale = t
            }, t.prototype._handleOptions = function(t) {
                this.options = o({}, B, t), this.translateZ = this.options.HWCompositing && A ? " translateZ(0)" : "", this.options.useTransition = this.options.useTransition && F, this.options.useTransform = this.options.useTransform && R, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollX = "horizontal" !== this.options.eventPassthrough && this.options.scrollX, this.options.scrollY = "vertical" !== this.options.eventPassthrough && this.options.scrollY, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, !0 === this.options.tap && (this.options.tap = "tap")
            }, t.prototype._addDOMEvents = function() {
                var t = a;
                this._handleDOMEvents(t)
            }, t.prototype._removeDOMEvents = function() {
                var t = l;
                this._handleDOMEvents(t)
            }, t.prototype._handleDOMEvents = function(t) {
                var i = this.options.bindToWrapper ? this.wrapper : window;
                t(window, "orientationchange", this), t(window, "resize", this), this.options.click && t(this.wrapper, "click", this, !0), this.options.disableMouse || (t(this.wrapper, "mousedown", this), t(i, "mousemove", this), t(i, "mousecancel", this), t(i, "mouseup", this)), L && !this.options.disableTouch && (t(this.wrapper, "touchstart", this), t(i, "touchmove", this), t(i, "touchcancel", this), t(i, "touchend", this)), t(this.scroller, $.transitionEnd, this)
            }, t.prototype._initExtFeatures = function() {
                this.options.snap && this._initSnap(), this.options.scrollbar && this._initScrollbar(), this.options.pullUpLoad && this._initPullUp(), this.options.pullDownRefresh && this._initPullDown(), this.options.wheel && this._initWheel(), this.options.mouseWheel && this._initMouseWheel(), this.options.zoom && this._initZoom(), this.options.infinity && this._initInfinite()
            }, t.prototype._watchTransition = function() {
                if("function" == typeof Object.defineProperty) {
                    var t = this,
                        i = !1,
                        e = this.useTransition ? "isInTransition" : "isAnimating";
                    Object.defineProperty(this, e, {
                        get: function() {
                            return i
                        },
                        set: function(e) {
                            i = e;
                            for(var s = t.scroller.children.length ? t.scroller.children : [t.scroller], o = i && !t.pulling ? "none" : "auto", n = 0; n < s.length; n++) s[n].style.pointerEvents = o
                        }
                    })
                }
            }, t.prototype._handleAutoBlur = function() {
                this.on("scrollStart", function() {
                    var t = document.activeElement;
                    !t || "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName || t.blur()
                })
            }, t.prototype._initDOMObserver = function() {
                var t = this;
                if("undefined" != typeof MutationObserver) {
                    var i = void 0,
                        e = new MutationObserver(function(e) {
                            if(!t._shouldNotRefresh()) {
                                for(var s = !1, o = !1, n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    if("attributes" !== r.type) {
                                        s = !0;
                                        break
                                    }
                                    if(r.target !== t.scroller) {
                                        o = !0;
                                        break
                                    }
                                }
                                s ? t.refresh() : o && (clearTimeout(i), i = setTimeout(function() {
                                    t._shouldNotRefresh() || t.refresh()
                                }, 60))
                            }
                        }),
                        s = {
                            attributes: !0,
                            childList: !0,
                            subtree: !0
                        };
                    e.observe(this.scroller, s), this.on("destroy", function() {
                        e.disconnect()
                    })
                } else this._checkDOMUpdate()
            }, t.prototype._shouldNotRefresh = function() {
                var t = this.x > this.minScrollX || this.x < this.maxScrollX || this.y > this.minScrollY || this.y < this.maxScrollY;
                return this.isInTransition || this.stopFromTransition || t
            }, t.prototype._checkDOMUpdate = function() {
                function t() {
                    if(!this.destroyed) {
                        e = d(this.scroller);
                        var t = e.width,
                            n = e.height;
                        s === t && o === n || this.refresh(), s = t, o = n, i.call(this)
                    }
                }

                function i() {
                    var i = this;
                    setTimeout(function() {
                        t.call(i)
                    }, 1e3)
                }
                var e = d(this.scroller),
                    s = e.width,
                    o = e.height;
                i.call(this)
            }, t.prototype.handleEvent = function(t) {
                switch(t.type) {
                    case "touchstart":
                    case "mousedown":
                        this._start(t), this.options.zoom && t.touches && t.touches.length > 1 && this._zoomStart(t);
                        break;
                    case "touchmove":
                    case "mousemove":
                        this.options.zoom && t.touches && t.touches.length > 1 ? this._zoom(t) : this._move(t);
                        break;
                    case "touchend":
                    case "mouseup":
                    case "touchcancel":
                    case "mousecancel":
                        this.scaled ? this._zoomEnd(t) : this._end(t);
                        break;
                    case "orientationchange":
                    case "resize":
                        this._resize();
                        break;
                    case "transitionend":
                    case "webkitTransitionEnd":
                    case "oTransitionEnd":
                    case "MSTransitionEnd":
                        this._transitionEnd(t);
                        break;
                    case "click":
                        this.enabled && !t._constructed && (u(t.target, this.options.preventDefaultException) || (t.preventDefault(), t.stopPropagation()));
                        break;
                    case "wheel":
                    case "DOMMouseScroll":
                    case "mousewheel":
                        this._onMouseWheel(t)
                }
            }, t.prototype.refresh = function() {
                var t = "static" === window.getComputedStyle(this.wrapper, null).position,
                    i = d(this.wrapper);
                this.wrapperWidth = i.width, this.wrapperHeight = i.height;
                var e = d(this.scroller);
                this.scrollerWidth = Math.round(e.width * this.scale), this.scrollerHeight = Math.round(e.height * this.scale), this.relativeX = e.left, this.relativeY = e.top, t && (this.relativeX -= i.left, this.relativeY -= i.top), this.minScrollX = 0, this.minScrollY = 0;
                var s = this.options.wheel;
                s ? (this.items = this.scroller.children, this.options.itemHeight = this.itemHeight = this.items.length ? this.scrollerHeight / this.items.length : 0, void 0 === this.selectedIndex && (this.selectedIndex = s.selectedIndex || 0), this.options.startY = -this.selectedIndex * this.itemHeight, this.maxScrollX = 0, this.maxScrollY = -this.itemHeight * (this.items.length - 1)) : (this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.options.infinity || (this.maxScrollY = this.wrapperHeight - this.scrollerHeight), this.maxScrollX < 0 ? (this.maxScrollX -= this.relativeX, this.minScrollX = -this.relativeX) : this.scale > 1 && (this.maxScrollX = this.maxScrollX / 2 - this.relativeX, this.minScrollX = this.maxScrollX), this.maxScrollY < 0 ? (this.maxScrollY -= this.relativeY, this.minScrollY = -this.relativeY) : this.scale > 1 && (this.maxScrollY = this.maxScrollY / 2 - this.relativeY, this.minScrollY = this.maxScrollY)), this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < this.minScrollX, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < this.minScrollY, this.hasHorizontalScroll || (this.maxScrollX = this.minScrollX, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = this.minScrollY, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = c(this.wrapper), this.trigger("refresh"), !this.scaled && this.resetPosition()
            }, t.prototype.enable = function() {
                this.enabled = !0
            }, t.prototype.disable = function() {
                this.enabled = !1
            }
        }(P),
        function(t) {
            t.prototype._start = function(t) {
                var i = U[t.type];
                if((i === N || 0 === t.button) && !(!this.enabled || this.destroyed || this.initiated && this.initiated !== i)) {
                    this.initiated = i, this.options.preventDefault && !u(t.target, this.options.preventDefaultException) && t.preventDefault(), this.options.stopPropagation && t.stopPropagation(), this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.movingDirectionX = 0, this.movingDirectionY = 0, this.directionLocked = 0, this._transitionTime(), this.startTime = s(), this.options.wheel && (this.target = t.target), this.stop();
                    var e = t.touches ? t.touches[0] : t;
                    this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = e.pageX, this.pointY = e.pageY, this.trigger("beforeScrollStart")
                }
            }, t.prototype._move = function(t) {
                if(this.enabled && !this.destroyed && U[t.type] === this.initiated) {
                    this.options.preventDefault && t.preventDefault(), this.options.stopPropagation && t.stopPropagation();
                    var i = t.touches ? t.touches[0] : t,
                        e = i.pageX - this.pointX,
                        o = i.pageY - this.pointY;
                    this.pointX = i.pageX, this.pointY = i.pageY, this.distX += e, this.distY += o;
                    var n = Math.abs(this.distX),
                        r = Math.abs(this.distY),
                        h = s();
                    if(!(h - this.endTime > this.options.momentumLimitTime && r < this.options.momentumLimitDistance && n < this.options.momentumLimitDistance)) {
                        if(this.directionLocked || this.options.freeScroll || (n > r + this.options.directionLockThreshold ? this.directionLocked = "h" : r >= n + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" === this.directionLocked) {
                            if("vertical" === this.options.eventPassthrough) t.preventDefault();
                            else if("horizontal" === this.options.eventPassthrough) return void(this.initiated = !1);
                            o = 0
                        } else if("v" === this.directionLocked) {
                            if("horizontal" === this.options.eventPassthrough) t.preventDefault();
                            else if("vertical" === this.options.eventPassthrough) return void(this.initiated = !1);
                            e = 0
                        }
                        e = this.hasHorizontalScroll ? e : 0, o = this.hasVerticalScroll ? o : 0, this.movingDirectionX = e > 0 ? J : e < 0 ? Q : 0, this.movingDirectionY = o > 0 ? G : o < 0 ? Z : 0;
                        var a = this.x + e,
                            l = this.y + o,
                            c = !1,
                            p = !1,
                            d = !1,
                            u = !1,
                            m = this.options.bounce;
                        !1 !== m && (c = void 0 === m.top || m.top, p = void 0 === m.bottom || m.bottom, d = void 0 === m.left || m.left, u = void 0 === m.right || m.right), (a > this.minScrollX || a < this.maxScrollX) && (a = a > this.minScrollX && d || a < this.maxScrollX && u ? this.x + e / 3 : a > this.minScrollX ? this.minScrollX : this.maxScrollX), (l > this.minScrollY || l < this.maxScrollY) && (l = l > this.minScrollY && c || l < this.maxScrollY && p ? this.y + o / 3 : l > this.minScrollY ? this.minScrollY : this.maxScrollY), this.moved || (this.moved = !0, this.trigger("scrollStart")), this._translate(a, l), h - this.startTime > this.options.momentumLimitTime && (this.startTime = h, this.startX = this.x, this.startY = this.y, this.options.probeType === K && this.trigger("scroll", {
                            x: this.x,
                            y: this.y
                        })), this.options.probeType > K && this.trigger("scroll", {
                            x: this.x,
                            y: this.y
                        });
                        var f = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft,
                            g = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop,
                            v = this.pointX - f,
                            y = this.pointY - g;
                        (v > document.documentElement.clientWidth - this.options.momentumLimitDistance || v < this.options.momentumLimitDistance || y < this.options.momentumLimitDistance || y > document.documentElement.clientHeight - this.options.momentumLimitDistance) && this._end(t)
                    }
                }
            }, t.prototype._end = function(t) {
                if(this.enabled && !this.destroyed && U[t.type] === this.initiated) {
                    this.initiated = !1, this.options.preventDefault && !u(t.target, this.options.preventDefaultException) && t.preventDefault(), this.options.stopPropagation && t.stopPropagation(), this.trigger("touchEnd", {
                        x: this.x,
                        y: this.y
                    }), this.isInTransition = !1;
                    var i = Math.round(this.x),
                        e = Math.round(this.y),
                        o = i - this.absStartX,
                        n = e - this.absStartY;
                    if(this.directionX = o > 0 ? J : o < 0 ? Q : 0, this.directionY = n > 0 ? G : n < 0 ? Z : 0, !this.options.pullDownRefresh || !this._checkPullDown()) {
                        if(this._checkClick(t)) return void this.trigger("scrollCancel");
                        if(!this.resetPosition(this.options.bounceTime, q.bounce)) {
                            this._translate(i, e), this.endTime = s();
                            var r = this.endTime - this.startTime,
                                h = Math.abs(i - this.startX),
                                a = Math.abs(e - this.startY);
                            if(this._events.flick && r < this.options.flickLimitTime && h < this.options.flickLimitDistance && a < this.options.flickLimitDistance) return void this.trigger("flick");
                            var l = 0;
                            if(this.options.momentum && r < this.options.momentumLimitTime && (a > this.options.momentumLimitDistance || h > this.options.momentumLimitDistance)) {
                                var c = !1,
                                    p = !1,
                                    d = !1,
                                    m = !1,
                                    f = this.options.bounce;
                                !1 !== f && (c = void 0 === f.top || f.top, p = void 0 === f.bottom || f.bottom, d = void 0 === f.left || f.left, m = void 0 === f.right || f.right);
                                var g = this.directionX === J && d || this.directionX === Q && m ? this.wrapperWidth : 0,
                                    v = this.directionY === G && c || this.directionY === Z && p ? this.wrapperHeight : 0,
                                    y = this.hasHorizontalScroll ? w(this.x, this.startX, r, this.maxScrollX, this.minScrollX, g, this.options) : {
                                        destination: i,
                                        duration: 0
                                    },
                                    x = this.hasVerticalScroll ? w(this.y, this.startY, r, this.maxScrollY, this.minScrollY, v, this.options) : {
                                        destination: e,
                                        duration: 0
                                    };
                                i = y.destination, e = x.destination, l = Math.max(y.duration, x.duration), this.isInTransition = !0
                            } else this.options.wheel && (e = Math.round(e / this.itemHeight) * this.itemHeight, l = this.options.wheel.adjustTime || 400);
                            var S = q.swipe;
                            if(this.options.snap) {
                                var b = this._nearestSnap(i, e);
                                this.currentPage = b, l = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(i - b.x), 1e3), Math.min(Math.abs(e - b.y), 1e3)), 300), i = b.x, e = b.y, this.directionX = 0, this.directionY = 0, S = this.options.snap.easing || q.bounce
                            }
                            if(i !== this.x || e !== this.y) return(i > this.minScrollX || i < this.maxScrollX || e > this.minScrollY || e < this.maxScrollY) && (S = q.swipeBounce), void this.scrollTo(i, e, l, S);
                            this.options.wheel && (this.selectedIndex = Math.round(Math.abs(this.y / this.itemHeight))), this.trigger("scrollEnd", {
                                x: this.x,
                                y: this.y
                            })
                        }
                    }
                }
            }, t.prototype._checkClick = function(t) {
                var i = this.stopFromTransition && !this.pulling;
                if(this.stopFromTransition = !1, !this.moved) {
                    if(this.options.wheel) {
                        if(this.target && this.target.className === this.options.wheel.wheelWrapperClass) {
                            var e = Math.abs(Math.round(this.y / this.itemHeight)),
                                o = Math.round((this.pointY + p(this.wrapper).top - this.wrapperHeight / 2) / this.itemHeight);
                            this.target = this.items[e + o]
                        }
                        return this.scrollToElement(this.target, this.options.wheel.adjustTime || 400, !0, !0, q.swipe), !0
                    }
                    if(!i) {
                        var n = this.options.dblclick,
                            r = !1;
                        if(n && this.lastClickTime) {
                            var h = n.delay,
                                a = void 0 === h ? 300 : h;
                            s() - this.lastClickTime < a && (r = !0, g(t))
                        }
                        return this.options.tap && m(t, this.options.tap), this.options.click && !u(t.target, this.options.preventDefaultException) && f(t), this.lastClickTime = r ? null : s(), !0
                    }
                    return !1
                }
                return !1
            }, t.prototype._resize = function() {
                var t = this;
                this.enabled && (z && (this.wrapper.scrollTop = 0), clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
                    t.refresh()
                }, this.options.resizePolling))
            }, t.prototype._startProbe = function() {
                function t() {
                    var e = i.getComputedPosition();
                    if(i.trigger("scroll", e), !i.isInTransition) return void i.trigger("scrollEnd", e);
                    i.probeTimer = V(t)
                }
                j(this.probeTimer), this.probeTimer = V(t);
                var i = this
            }, t.prototype._transitionTime = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                if(this.scrollerStyle[$.transitionDuration] = t + "ms", this.options.wheel)
                    for(var i = 0; i < this.items.length; i++) this.items[i].style[$.transitionDuration] = t + "ms";
                if(this.indicators)
                    for(var e = 0; e < this.indicators.length; e++) this.indicators[e].transitionTime(t)
            }, t.prototype._transitionTimingFunction = function(t) {
                if(this.scrollerStyle[$.transitionTimingFunction] = t, this.options.wheel)
                    for(var i = 0; i < this.items.length; i++) this.items[i].style[$.transitionTimingFunction] = t;
                if(this.indicators)
                    for(var e = 0; e < this.indicators.length; e++) this.indicators[e].transitionTimingFunction(t)
            }, t.prototype._transitionEnd = function(t) {
                t.target === this.scroller && this.isInTransition && (this._transitionTime(), (!this.pulling || this.movingDirectionY === Z) && !this.resetPosition(this.options.bounceTime, q.bounce) && (this.isInTransition = !1, this.options.probeType !== tt && this.trigger("scrollEnd", {
                    x: this.x,
                    y: this.y
                })))
            }, t.prototype._translate = function(t, i, e) {
                if(T(!n(t) && !n(i), "Translate x or y is null or undefined."), n(e) && (e = this.scale), this.options.useTransform ? this.scrollerStyle[$.transform] = "translate(" + t + "px," + i + "px) scale(" + e + ")" + this.translateZ : (t = Math.round(t), i = Math.round(i), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = i + "px"), this.options.wheel)
                    for(var s = this.options.wheel.rotate, o = void 0 === s ? 25 : s, r = 0; r < this.items.length; r++) {
                        var h = o * (i / this.itemHeight + r);
                        this.items[r].style[$.transform] = "rotateX(" + h + "deg)"
                    }
                if(this.x = t, this.y = i, this.setScale(e), this.indicators)
                    for(var a = 0; a < this.indicators.length; a++) this.indicators[a].updatePosition()
            }, t.prototype._animate = function(t, i, e, o) {
                function n() {
                    var u = s();
                    if(u >= d) return r.isAnimating = !1, r._translate(t, i, c), r.trigger("scroll", {
                        x: r.x,
                        y: r.y
                    }), void(r.pulling || r.resetPosition(r.options.bounceTime) || r.trigger("scrollEnd", {
                        x: r.x,
                        y: r.y
                    }));
                    u = (u - p) / e;
                    var m = o(u),
                        f = (t - h) * m + h,
                        g = (i - a) * m + a,
                        v = (c - l) * m + l;
                    r._translate(f, g, v), r.isAnimating && (r.animateTimer = V(n)), r.options.probeType === tt && r.trigger("scroll", {
                        x: r.x,
                        y: r.y
                    })
                }
                var r = this,
                    h = this.x,
                    a = this.y,
                    l = this.lastScale,
                    c = this.scale,
                    p = s(),
                    d = p + e;
                this.isAnimating = !0, j(this.animateTimer), n()
            }, t.prototype.scrollBy = function(t, i) {
                var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : q.bounce;
                t = this.x + t, i = this.y + i, this.scrollTo(t, i, e, s)
            }, t.prototype.scrollTo = function(t, i) {
                var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : q.bounce;
                this.isInTransition = this.options.useTransition && e > 0 && (t !== this.x || i !== this.y), !e || this.options.useTransition ? (this._transitionTimingFunction(s.style), this._transitionTime(e), this._translate(t, i), e && this.options.probeType === tt && this._startProbe(), e || t === this.x && i === this.y || (this.trigger("scroll", {
                    x: t,
                    y: i
                }), this._reflow = document.body.offsetHeight, this.resetPosition(this.options.bounceTime, q.bounce) || this.trigger("scrollEnd", {
                    x: t,
                    y: i
                })), this.options.wheel && (i > this.minScrollY ? this.selectedIndex = 0 : i < this.maxScrollY ? this.selectedIndex = this.items.length - 1 : this.selectedIndex = Math.round(Math.abs(i / this.itemHeight)))) : this._animate(t, i, e, s.fn)
            }, t.prototype.scrollToElement = function(t, i, e, s, o) {
                if(t && (t = t.nodeType ? t : this.scroller.querySelector(t), !this.options.wheel || t.className === this.options.wheel.wheelItemClass)) {
                    var n = c(t);
                    n.left -= this.wrapperOffset.left, n.top -= this.wrapperOffset.top, !0 === e && (e = Math.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), !0 === s && (s = Math.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), n.left -= e || 0, n.top -= s || 0, n.left = n.left > this.minScrollX ? this.minScrollX : n.left < this.maxScrollX ? this.maxScrollX : n.left, n.top = n.top > this.minScrollY ? this.minScrollY : n.top < this.maxScrollY ? this.maxScrollY : n.top, this.options.wheel && (n.top = Math.round(n.top / this.itemHeight) * this.itemHeight), this.scrollTo(n.left, n.top, i, o)
                }
            }, t.prototype.resetPosition = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : q.bounce,
                    e = this.x,
                    s = Math.round(e);
                !this.hasHorizontalScroll || s > this.minScrollX ? e = this.minScrollX : s < this.maxScrollX && (e = this.maxScrollX);
                var o = this.y,
                    n = Math.round(o);
                return !this.hasVerticalScroll || n > this.minScrollY ? o = this.minScrollY : n < this.maxScrollY && (o = this.maxScrollY), (e !== this.x || o !== this.y) && (this.scrollTo(e, o, t, i), !0)
            }, t.prototype.getComputedPosition = function() {
                var t = window.getComputedStyle(this.scroller, null),
                    i = void 0,
                    e = void 0;
                return this.options.useTransform ? (t = t[$.transform].split(")")[0].split(", "), i = +(t[12] || t[4]), e = +(t[13] || t[5])) : (i = +t.left.replace(/[^-\d.]/g, ""), e = +t.top.replace(/[^-\d.]/g, "")), {
                    x: i,
                    y: e
                }
            }, t.prototype.stop = function() {
                if(this.options.useTransition && this.isInTransition) {
                    this.isInTransition = !1, j(this.probeTimer);
                    var t = this.getComputedPosition();
                    this._translate(t.x, t.y), this.options.wheel ? this.target = this.items[Math.round(-t.y / this.itemHeight)] : this.trigger("scrollEnd", {
                        x: this.x,
                        y: this.y
                    }), this.stopFromTransition = !0
                } else !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, j(this.animateTimer), this.trigger("scrollEnd", {
                    x: this.x,
                    y: this.y
                }), this.stopFromTransition = !0)
            }, t.prototype.destroy = function() {
                this.destroyed = !0, this.trigger("destroy"), j(this.options.useTransition ? this.probeTimer : this.animateTimer), this._removeDOMEvents(), this._events = {}
            }
        }(P),
        function(t) {
            t.prototype.on = function(t, i) {
                var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this;
                this._events[t] || (this._events[t] = []), this._events[t].push([i, e])
            }, t.prototype.once = function(t, i) {
                function e() {
                    this.off(t, e), i.apply(s, arguments)
                }
                var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this;
                e.fn = i, this.on(t, e)
            }, t.prototype.off = function(t, i) {
                var e = this._events[t];
                if(e)
                    for(var s = e.length; s--;)(e[s][0] === i || e[s][0] && e[s][0].fn === i) && (e[s][0] = void 0)
            }, t.prototype.trigger = function(t) {
                var i = this._events[t];
                if(i)
                    for(var e = i.length, s = [].concat(D(i)), o = 0; o < e; o++) {
                        var n = s[o],
                            r = E(n, 2),
                            h = r[0],
                            a = r[1];
                        h && h.apply(a, [].slice.call(arguments, 1))
                    }
            }
        }(P),
        function(t) {
            t.prototype._initSnap = function() {
                var t = this;
                this.currentPage = {};
                var i = this.options.snap;
                if(i.loop) {
                    var e = this.scroller.children;
                    e.length > 1 ? (v(e[e.length - 1].cloneNode(!0), this.scroller), this.scroller.appendChild(e[1].cloneNode(!0))) : i.loop = !1
                }
                var s = i.el;
                "string" == typeof s && (s = this.scroller.querySelectorAll(s)), this.on("refresh", function() {
                    if(t.pages = [], t.wrapperWidth && t.wrapperHeight && t.scrollerWidth && t.scrollerHeight) {
                        var e = i.stepX || t.wrapperWidth,
                            o = i.stepY || t.wrapperHeight,
                            n = 0,
                            r = void 0,
                            h = void 0,
                            a = void 0,
                            l = 0,
                            c = void 0,
                            p = 0,
                            u = void 0,
                            m = void 0;
                        if(s)
                            for(c = s.length, u = -1; l < c; l++) m = d(s[l]), (0 === l || m.left <= d(s[l - 1]).left) && (p = 0, u++), t.pages[p] || (t.pages[p] = []), n = Math.max(-m.left, t.maxScrollX), r = Math.max(-m.top, t.maxScrollY), h = n - Math.round(m.width / 2), a = r - Math.round(m.height / 2), t.pages[p][u] = {
                                x: n,
                                y: r,
                                width: m.width,
                                height: m.height,
                                cx: h,
                                cy: a
                            }, n > t.maxScrollX && p++;
                        else
                            for(h = Math.round(e / 2), a = Math.round(o / 2); n > -t.scrollerWidth;) {
                                for(t.pages[l] = [], c = 0, r = 0; r > -t.scrollerHeight;) t.pages[l][c] = {
                                    x: Math.max(n, t.maxScrollX),
                                    y: Math.max(r, t.maxScrollY),
                                    width: e,
                                    height: o,
                                    cx: n - h,
                                    cy: r - a
                                }, r -= o, c++;
                                n -= e, l++
                            }
                        t._checkSnapLoop();
                        var f = i._loopX ? 1 : 0,
                            g = i._loopY ? 1 : 0;
                        t._goToPage(t.currentPage.pageX || f, t.currentPage.pageY || g, 0);
                        var v = i.threshold;
                        v % 1 == 0 ? (t.snapThresholdX = v, t.snapThresholdY = v) : (t.snapThresholdX = Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].width * v), t.snapThresholdY = Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].height * v))
                    }
                }), this.on("scrollEnd", function() {
                    i.loop && (i._loopX ? (0 === t.currentPage.pageX && t._goToPage(t.pages.length - 2, t.currentPage.pageY, 0), t.currentPage.pageX === t.pages.length - 1 && t._goToPage(1, t.currentPage.pageY, 0)) : (0 === t.currentPage.pageY && t._goToPage(t.currentPage.pageX, t.pages[0].length - 2, 0), t.currentPage.pageY === t.pages[0].length - 1 && t._goToPage(t.currentPage.pageX, 1, 0)))
                }), !1 !== i.listenFlick && this.on("flick", function() {
                    var e = i.speed || Math.max(Math.max(Math.min(Math.abs(t.x - t.startX), 1e3), Math.min(Math.abs(t.y - t.startY), 1e3)), 300);
                    t._goToPage(t.currentPage.pageX + t.directionX, t.currentPage.pageY + t.directionY, e)
                }), this.on("destroy", function() {
                    if(i.loop) {
                        var e = t.scroller.children;
                        e.length > 2 && (x(t.scroller, e[e.length - 1]), x(t.scroller, e[0]))
                    }
                })
            }, t.prototype._checkSnapLoop = function() {
                var t = this.options.snap;
                t.loop && this.pages && this.pages.length && (this.pages.length > 1 && (t._loopX = !0), this.pages[0] && this.pages[0].length > 1 && (t._loopY = !0), t._loopX && t._loopY && b("Loop does not support two direction at the same time."))
            }, t.prototype._nearestSnap = function(t, i) {
                if(!this.pages.length) return {
                    x: 0,
                    y: 0,
                    pageX: 0,
                    pageY: 0
                };
                var e = 0;
                if(Math.abs(t - this.absStartX) <= this.snapThresholdX && Math.abs(i - this.absStartY) <= this.snapThresholdY) return this.currentPage;
                t > this.minScrollX ? t = this.minScrollX : t < this.maxScrollX && (t = this.maxScrollX), i > this.minScrollY ? i = this.minScrollY : i < this.maxScrollY && (i = this.maxScrollY);
                for(var s = this.pages.length; e < s; e++)
                    if(t >= this.pages[e][0].cx) {
                        t = this.pages[e][0].x;
                        break
                    }
                s = this.pages[e].length;
                for(var o = 0; o < s; o++)
                    if(i >= this.pages[0][o].cy) {
                        i = this.pages[0][o].y;
                        break
                    }
                return e === this.currentPage.pageX && (e += this.directionX, e < 0 ? e = 0 : e >= this.pages.length && (e = this.pages.length - 1), t = this.pages[e][0].x), o === this.currentPage.pageY && (o += this.directionY, o < 0 ? o = 0 : o >= this.pages[0].length && (o = this.pages[0].length - 1), i = this.pages[0][o].y), {
                    x: t,
                    y: i,
                    pageX: e,
                    pageY: o
                }
            }, t.prototype._goToPage = function(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    e = arguments[2],
                    s = arguments[3],
                    o = this.options.snap;
                if(o && this.pages && this.pages.length && (s = s || o.easing || q.bounce, t >= this.pages.length ? t = this.pages.length - 1 : t < 0 && (t = 0), this.pages[t])) {
                    i >= this.pages[t].length ? i = this.pages[t].length - 1 : i < 0 && (i = 0);
                    var n = this.pages[t][i].x,
                        r = this.pages[t][i].y;
                    e = void 0 === e ? o.speed || Math.max(Math.max(Math.min(Math.abs(n - this.x), 1e3), Math.min(Math.abs(r - this.y), 1e3)), 300) : e, this.currentPage = {
                        x: n,
                        y: r,
                        pageX: t,
                        pageY: i
                    }, this.scrollTo(n, r, e, s)
                }
            }, t.prototype.goToPage = function(t, i, e, s) {
                var o = this.options.snap;
                if(o && this.pages && this.pages.length) {
                    if(o.loop) {
                        var n = void 0;
                        o._loopX ? (n = this.pages.length - 2, t >= n ? t = n - 1 : t < 0 && (t = 0), t += 1) : (n = this.pages[0].length - 2, i >= n ? i = n - 1 : i < 0 && (i = 0), i += 1)
                    }
                    this._goToPage(t, i, e, s)
                }
            }, t.prototype.next = function(t, i) {
                if(this.options.snap) {
                    var e = this.currentPage.pageX,
                        s = this.currentPage.pageY;
                    e++, e >= this.pages.length && this.hasVerticalScroll && (e = 0, s++), this._goToPage(e, s, t, i)
                }
            }, t.prototype.prev = function(t, i) {
                if(this.options.snap) {
                    var e = this.currentPage.pageX,
                        s = this.currentPage.pageY;
                    e--, e < 0 && this.hasVerticalScroll && (e = 0, s--), this._goToPage(e, s, t, i)
                }
            }, t.prototype.getCurrentPage = function() {
                var t = this.options.snap;
                return t ? t.loop ? t._loopX ? o({}, this.currentPage, {
                    pageX: this.currentPage.pageX - 1
                }) : o({}, this.currentPage, {
                    pageY: this.currentPage.pageY - 1
                }) : this.currentPage : null
            }
        }(P),
        function(t) {
            t.prototype.wheelTo = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                this.options.wheel && (this.y = -t * this.itemHeight, this.scrollTo(0, this.y))
            }, t.prototype.getSelectedIndex = function() {
                return this.options.wheel && this.selectedIndex
            }, t.prototype._initWheel = function() {
                var t = this.options.wheel;
                t.wheelWrapperClass || (t.wheelWrapperClass = "wheel-scroll"), t.wheelItemClass || (t.wheelItemClass = "wheel-item"), void 0 === t.selectedIndex && (t.selectedIndex = 0, b("wheel option selectedIndex is required!"))
            }
        }(P),
        function(t) {
            t.prototype._initScrollbar = function() {
                var t = this,
                    i = this.options.scrollbar,
                    e = i.fade,
                    s = void 0 === e || e,
                    o = i.interactive,
                    n = void 0 !== o && o;
                this.indicators = [];
                var r = void 0;
                this.options.scrollX && (r = {
                    el: _("horizontal"),
                    direction: "horizontal",
                    fade: s,
                    interactive: n
                }, this._insertScrollBar(r.el), this.indicators.push(new Y(this, r))), this.options.scrollY && (r = {
                    el: _("vertical"),
                    direction: "vertical",
                    fade: s,
                    interactive: n
                }, this._insertScrollBar(r.el), this.indicators.push(new Y(this, r))), this.on("refresh", function() {
                    for(var i = 0; i < t.indicators.length; i++) t.indicators[i].refresh()
                }), s && (this.on("scrollEnd", function() {
                    for(var i = 0; i < t.indicators.length; i++) t.indicators[i].fade()
                }), this.on("scrollCancel", function() {
                    for(var i = 0; i < t.indicators.length; i++) t.indicators[i].fade()
                }), this.on("scrollStart", function() {
                    for(var i = 0; i < t.indicators.length; i++) t.indicators[i].fade(!0)
                }), this.on("beforeScrollStart", function() {
                    for(var i = 0; i < t.indicators.length; i++) t.indicators[i].fade(!0, !0)
                })), this.on("destroy", function() {
                    t._removeScrollBars()
                })
            }, t.prototype._insertScrollBar = function(t) {
                this.wrapper.appendChild(t)
            }, t.prototype._removeScrollBars = function() {
                for(var t = 0; t < this.indicators.length; t++) this.indicators[t].destroy()
            }
        }(P),
        function(t) {
            t.prototype._initPullDown = function() {
                this.options.probeType = tt
            }, t.prototype._checkPullDown = function() {
                var t = this.options.pullDownRefresh,
                    i = t.threshold,
                    e = void 0 === i ? 90 : i,
                    s = t.stop,
                    o = void 0 === s ? 40 : s;
                return !(this.directionY !== G || this.y < e) && (this.pulling || (this.pulling = !0, this.trigger("pullingDown")), this.scrollTo(this.x, o, this.options.bounceTime, q.bounce), this.pulling)
            }, t.prototype.finishPullDown = function() {
                this.pulling = !1, this.resetPosition(this.options.bounceTime, q.bounce)
            }, t.prototype.openPullDown = function() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.options.pullDownRefresh = t, this._initPullDown()
            }, t.prototype.closePullDown = function() {
                this.options.pullDownRefresh = !1
            }
        }(P),
        function(t) {
            t.prototype._initPullUp = function() {
                this.options.probeType = tt, this.pullupWatching = !1, this._watchPullUp()
            }, t.prototype._watchPullUp = function() {
                this.pullupWatching || (this.pullupWatching = !0, this.on("scroll", this._checkToEnd))
            }, t.prototype._checkToEnd = function(t) {
                var i = this,
                    e = this.options.pullUpLoad.threshold,
                    s = void 0 === e ? 0 : e;
                this.movingDirectionY === Z && t.y <= this.maxScrollY + s && (this.once("scrollEnd", function() {
                    i.pullupWatching = !1
                }), this.trigger("pullingUp"), this.off("scroll", this._checkToEnd))
            }, t.prototype.finishPullUp = function() {
                var t = this;
                this.pullupWatching ? this.once("scrollEnd", function() {
                    t._watchPullUp()
                }) : this._watchPullUp()
            }, t.prototype.openPullUp = function() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.options.pullUpLoad = t, this._initPullUp()
            }, t.prototype.closePullUp = function() {
                this.options.pullUpLoad = !1, this.pullupWatching && (this.pullupWatching = !1, this.off("scroll", this._checkToEnd))
            }
        }(P),
        function(t) {
            t.prototype._initMouseWheel = function() {
                var t = this;
                this._handleMouseWheelEvent(a), this.on("destroy", function() {
                    clearTimeout(t.mouseWheelTimer), t._handleMouseWheelEvent(l)
                }), this.firstWheelOpreation = !0
            }, t.prototype._handleMouseWheelEvent = function(t) {
                t(this.wrapper, "wheel", this), t(this.wrapper, "mousewheel", this), t(this.wrapper, "DOMMouseScroll", this)
            }, t.prototype._onMouseWheel = function(t) {
                var i = this;
                if(this.enabled) {
                    t.preventDefault(), this.options.stopPropagation && t.stopPropagation(), this.firstWheelOpreation && this.trigger("scrollStart"), this.firstWheelOpreation = !1;
                    var e = this.options.mouseWheel,
                        s = e.speed,
                        o = void 0 === s ? 20 : s,
                        n = e.invert,
                        r = void 0 !== n && n,
                        h = e.easeTime,
                        a = void 0 === h ? 300 : h;
                    clearTimeout(this.mouseWheelTimer), this.mouseWheelTimer = setTimeout(function() {
                        i.options.snap || a || i.trigger("scrollEnd", {
                            x: i.x,
                            y: i.y
                        }), i.firstWheelOpreation = !0
                    }, 400);
                    var l = void 0,
                        c = void 0;
                    switch(!0) {
                        case "deltaX" in t:
                            1 === t.deltaMode ? (l = -t.deltaX * o, c = -t.deltaY * o) : (l = -t.deltaX, c = -t.deltaY);
                            break;
                        case "wheelDeltaX" in t:
                            l = t.wheelDeltaX / 120 * o, c = t.wheelDeltaY / 120 * o;
                            break;
                        case "wheelDelta" in t:
                            l = c = t.wheelDelta / 120 * o;
                            break;
                        case "detail" in t:
                            l = c = -t.detail / 3 * o;
                            break;
                        default:
                            return
                    }
                    var p = r ? -1 : 1;
                    l *= p, c *= p, this.hasVerticalScroll || (l = c, c = 0);
                    var d = void 0,
                        u = void 0;
                    if(this.options.snap) return d = this.currentPage.pageX, u = this.currentPage.pageY, l > 0 ? d-- : l < 0 && d++, c > 0 ? u-- : c < 0 && u++, void this._goToPage(d, u);
                    d = this.x + Math.round(this.hasHorizontalScroll ? l : 0), u = this.y + Math.round(this.hasVerticalScroll ? c : 0), this.movingDirectionX = this.directionX = l > 0 ? -1 : l < 0 ? 1 : 0, this.movingDirectionY = this.directionY = c > 0 ? -1 : c < 0 ? 1 : 0, d > this.minScrollX ? d = this.minScrollX : d < this.maxScrollX && (d = this.maxScrollX), u > this.minScrollY ? u = this.minScrollY : u < this.maxScrollY && (u = this.maxScrollY), this.scrollTo(d, u, a, q.swipe), this.trigger("scroll", {
                        x: this.x,
                        y: this.y
                    })
                }
            }
        }(P),
        function(t) {
            t.prototype._initZoom = function() {
                var t = this.options.zoom,
                    i = t.start,
                    e = void 0 === i ? 1 : i,
                    s = t.min,
                    o = void 0 === s ? 1 : s,
                    n = t.max,
                    r = void 0 === n ? 4 : n;
                this.scale = Math.min(Math.max(e, o), r), this.setScale(this.scale), this.scrollerStyle[$.transformOrigin] = "0 0"
            }, t.prototype._zoomTo = function(t, i, e, s) {
                this.scaled = !0;
                var o = t / (s || this.scale);
                this.setScale(t), this.refresh();
                var n = Math.round(this.startX - (i - this.relativeX) * (o - 1)),
                    r = Math.round(this.startY - (e - this.relativeY) * (o - 1));
                n > this.minScrollX ? n = this.minScrollX : n < this.maxScrollX && (n = this.maxScrollX), r > this.minScrollY ? r = this.minScrollY : r < this.maxScrollY && (r = this.maxScrollY), this.x === n && this.y === r || this.scrollTo(n, r, this.options.bounceTime), this.scaled = !1
            }, t.prototype.zoomTo = function(t, i, e) {
                var s = p(this.wrapper),
                    o = s.left,
                    n = s.top,
                    r = i + o - this.x,
                    h = e + n - this.y;
                this._zoomTo(t, r, h)
            }, t.prototype._zoomStart = function(t) {
                var i = t.touches[0],
                    e = t.touches[1],
                    s = Math.abs(i.pageX - e.pageX),
                    o = Math.abs(i.pageY - e.pageY);
                this.startDistance = r(s, o), this.startScale = this.scale;
                var n = p(this.wrapper),
                    h = n.left,
                    a = n.top;
                this.originX = Math.abs(i.pageX + e.pageX) / 2 + h - this.x, this.originY = Math.abs(i.pageY + e.pageY) / 2 + a - this.y, this.trigger("zoomStart")
            }, t.prototype._zoom = function(t) {
                if(this.enabled && !this.destroyed && U[t.type] === this.initiated) {
                    this.options.preventDefault && t.preventDefault(), this.options.stopPropagation && t.stopPropagation();
                    var i = t.touches[0],
                        e = t.touches[1],
                        s = Math.abs(i.pageX - e.pageX),
                        o = Math.abs(i.pageY - e.pageY),
                        n = r(s, o),
                        h = n / this.startDistance * this.startScale;
                    this.scaled = !0;
                    var a = this.options.zoom,
                        l = a.min,
                        c = void 0 === l ? 1 : l,
                        p = a.max,
                        d = void 0 === p ? 4 : p;
                    h < c ? h = .5 * c * Math.pow(2, h / c) : h > d && (h = 2 * d * Math.pow(.5, d / h));
                    var u = h / this.startScale,
                        m = this.startX - (this.originX - this.relativeX) * (u - 1),
                        f = this.startY - (this.originY - this.relativeY) * (u - 1);
                    this.setScale(h), this.scrollTo(m, f, 0)
                }
            }, t.prototype._zoomEnd = function(t) {
                if(this.enabled && !this.destroyed && U[t.type] === this.initiated) {
                    this.options.preventDefault && t.preventDefault(), this.options.stopPropagation && t.stopPropagation(), this.isInTransition = !1, this.isAnimating = !1, this.initiated = 0;
                    var i = this.options.zoom,
                        e = i.min,
                        s = void 0 === e ? 1 : e,
                        o = i.max,
                        n = void 0 === o ? 4 : o,
                        r = this.scale > n ? n : this.scale < s ? s : this.scale;
                    this._zoomTo(r, this.originX, this.originY, this.startScale), this.trigger("zoomEnd")
                }
            }
        }(P),
        function(t) {
            t.prototype._initInfinite = function() {
                this.options.probeType = 3, this.maxScrollY = -it, this.infiniteScroller = new M(this, this.options.infinity)
            }
        }(P), P.Version = "1.12.4", i.default = P
}, function(t, i) {}]);