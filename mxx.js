var _ = {
    undef: function() {
      var p = 0;
      for(var i = 0;i < arguments.length;i++) {
        if(arguments[i] === undefined) p++;
      }
      if(p == arguments.length) return true;
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
    ready: function(f) {
      return window.addEventListener('load',f);
    },
    tidy: function(s) {
      document.body.style.margin = 0;
      if(s !== false)
      document.body.style.overflow = 'hidden';
    },
    paint: function(v,s) {
      if(s === undefined) document.body.style.background = v;
      else v.style.background = s;
    }
  };
