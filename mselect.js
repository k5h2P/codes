var $ = function(s, v) {
    var a = s.slice(0, 1),
      b = s.slice(1);
    if (v === undefined) v = 0;
    if (a == '#') return document.getElementById(b);
    else if (a == '.') return document.getElementsByClassName(b)[v];
    else return document.getElementsByTagName(s)[v];
  },
  _ = {
    undef: function(s) {
      if (s === undefined) return true;
      else return false;
    },
    rand: function(a, b) {
      if(this.undef(b) && !this.undef(a)) return Math.floor(Math.random() * (a + 1));
      else if (this.undef(a) && this.undef(b)) return Math.round(Math.random());
      else {
        a = Math.ceil(a);
        b = Math.floor(b);
        return Math.floor(Math.random() * (b - a + 1)) + a;
      }
    },
    text: function(v, s) {
      if (this.undef(s)) document.body.innerHTML = v;
      else v.innerHTML = s;
    },
    rgb: function(r, g, b) {
      return 'rgb(' + r + ',' + g + ',' + b + ')';
    },
    load: function(f) {
      return window.addEventListener('load',f);
    },
    tidy: function() {
      document.body.style.margin = 0;
      document.body.style.overflow = 'hidden';
    },
    paint: function(v,s) {
      if(s === undefined) document.body.style.background = v;
      else v.style.background = s;
    }
  };
