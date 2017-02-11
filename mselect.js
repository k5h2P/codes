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
      if (this.undef(s)) s = '';
      if (this.undef(v) && this.undef(s)) v = '';
      if (this.undef(s) && typeof v == 'string' || 'number') document.body.innerHTML = v;
      else v.innerHTML = s;
    },
    rgb(r, g, b) {
      return 'rgb(' + r + ',' + g + ',' + b + ')';
    }
  };
