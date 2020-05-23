(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([[0], {
  12: function (e, t, n) {
    "use strict";

    n.r(t);

    var a = n(0),
        r = n.n(a),
        c = n(6),
        o = n.n(c),
        l = n(1),
        i = n(2),
        s = n(4),
        u = n(3),
        m = function (e) {
      Object(s.a)(n, e);
      var t = Object(u.a)(n);

      function n() {
        return Object(l.a)(this, n), t.apply(this, arguments);
      }

      return Object(i.a)(n, [{
        key: "render",
        value: function () {
          return r.a.createElement(r.a.Fragment, null, r.a.createElement("section", {
            className: "left-section logo wow fadeIn",
            "data-wow-delay": "0.1s"
          }));
        }
      }]), n;
    }(r.a.Component),
        p = function (e) {
      Object(s.a)(n, e);
      var t = Object(u.a)(n);

      function n() {
        return Object(l.a)(this, n), t.apply(this, arguments);
      }

      return Object(i.a)(n, [{
        key: "render",
        value: function () {
          return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
            className: "main-logo"
          }, r.a.createElement("a", {
            href: "/"
          }, r.a.createElement("img", {
            className: "wow fadeInDown",
            src: "assets/images/app_icon.png",
            width: "50",
            height: "50",
            alt: "Logo"
          }))));
        }
      }]), n;
    }(r.a.Component),
        f = function (e) {
      Object(s.a)(n, e);
      var t = Object(u.a)(n);

      function n() {
        return Object(l.a)(this, n), t.apply(this, arguments);
      }

      return Object(i.a)(n, [{
        key: "buttonBuilder",
        value: function () {
          return "icon" === this.props.type ? r.a.createElement("a", {
            href: this.props.action,
            className: "wow fadeInDown",
            "data-wow-delay": ".2s"
          }, r.a.createElement("img", {
            className: "img-responsive",
            src: this.props.icon,
            alt: "Icon"
          })) : "link" === this.props.type ? r.a.createElement("a", {
            href: this.props.action
          }, this.props.text) : void 0;
        }
      }, {
        key: "render",
        value: function () {
          return r.a.createElement(r.a.Fragment, null, this.buttonBuilder());
        }
      }]), n;
    }(r.a.Component),
        h = function (e) {
      Object(s.a)(n, e);
      var t = Object(u.a)(n);

      function n(e) {
        var a;
        return Object(l.a)(this, n), (a = t.call(this, e)).state = {
          buttons: [{
            id: 0,
            icon: "/assets/images/appstore.png",
            action: "https://www.apple.com/br/ios/app-store/",
            type: "icon"
          }, {
            id: 1,
            icon: "/assets/images/playstore.png",
            action: "https://play.google.com/store",
            type: "icon"
          }]
        }, a;
      }

      return Object(i.a)(n, [{
        key: "render",
        value: function () {
          return r.a.createElement(r.a.Fragment, null, this.state.buttons.map(function (e) {
            return r.a.createElement(f, {
              key: e.id,
              icon: e.icon,
              type: e.type,
              action: e.action
            });
          }));
        }
      }]), n;
    }(r.a.Component),
        b = function (e) {
      Object(s.a)(n, e);
      var t = Object(u.a)(n);

      function n() {
        return Object(l.a)(this, n), t.apply(this, arguments);
      }

      return Object(i.a)(n, [{
        key: "render",
        value: function () {
          return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
            className: "intro"
          }, r.a.createElement("h4", {
            className: "wow fadeInDown"
          }, "Messenger for Anonymous"), r.a.createElement("h1", {
            className: "wow fadeInDown",
            "data-wow-delay": ".1s"
          }, "Send voice and text message anonymously"), r.a.createElement("p", {
            className: "wow fadeInDown"
          }, "Aria is a messenger for people who prefer anonymity. Chat, call and hangout with friends anonymously. Aria is a tor for private conversations. None can catch thou."), r.a.createElement("h3", {
            className: "wow fadeInDown"
          }, "Download Aria for free on "), r.a.createElement(h, null)));
        }
      }]), n;
    }(r.a.Component),
        d = function (e) {
      Object(s.a)(n, e);
      var t = Object(u.a)(n);

      function n(e) {
        var a;
        return Object(l.a)(this, n), (a = t.call(this, e)).state = {
          buttons: [{
            id: 2,
            text: "Facebook",
            action: "https://www.facebook.com/",
            type: "link"
          }, {
            id: 3,
            text: "Twitter",
            action: "https://twitter.com/",
            type: "link"
          }, {
            id: 4,
            text: "Instagram",
            action: "https://www.instagram.com/",
            type: "link"
          }]
        }, a;
      }

      return Object(i.a)(n, [{
        key: "render",
        value: function () {
          return r.a.createElement(r.a.Fragment, null, r.a.createElement("ul", null, this.state.buttons.map(function (e) {
            return r.a.createElement("li", {
              key: e.id
            }, r.a.createElement(f, {
              type: e.type,
              action: e.action,
              text: e.text
            }));
          })));
        }
      }]), n;
    }(r.a.Component),
        w = function (e) {
      Object(s.a)(n, e);
      var t = Object(u.a)(n);

      function n() {
        return Object(l.a)(this, n), t.apply(this, arguments);
      }

      return Object(i.a)(n, [{
        key: "render",
        value: function () {
          return r.a.createElement(r.a.Fragment, null, r.a.createElement("footer", null, r.a.createElement("span", {
            className: "footer-credits"
          }, "\xa9 Aria Messenger 2016"), r.a.createElement(d, null)));
        }
      }]), n;
    }(r.a.Component),
        y = function (e) {
      Object(s.a)(n, e);
      var t = Object(u.a)(n);

      function n() {
        return Object(l.a)(this, n), t.apply(this, arguments);
      }

      return Object(i.a)(n, [{
        key: "render",
        value: function () {
          return r.a.createElement(r.a.Fragment, null, r.a.createElement("section", {
            className: "right-section"
          }, r.a.createElement(p, null), r.a.createElement(b, null), r.a.createElement(w, null)));
        }
      }]), n;
    }(r.a.Component),
        E = function (e) {
      Object(s.a)(n, e);
      var t = Object(u.a)(n);

      function n() {
        return Object(l.a)(this, n), t.apply(this, arguments);
      }

      return Object(i.a)(n, [{
        key: "render",
        value: function () {
          return r.a.createElement(r.a.Fragment, null, r.a.createElement(m, null), r.a.createElement(y, null));
        }
      }]), n;
    }(r.a.Component);

    o.a.render(r.a.createElement(E, null), document.getElementById("root"));
  },
  7: function (e, t, n) {
    e.exports = n(12);
  }
}, [[7, 1, 2]]]);