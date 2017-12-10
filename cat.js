(function(window) {
  var document = window.document;
  Object.prototype.on = function(a, b) {
    this.addEventListener(a, b);
    return this;
  };
  Object.prototype.off = function(a, b) {
    this.removeEventListener(a, b);
    return this;
  };
  window.can = document.querySelector("canvas");
  window.ctx = window.can.getContext("2d");
  window.can.width = window.innerWidth;
  window.can.height = window.innerHeight;
  window.randInt = function(a, b) {
    if (a === void 0) return Math.round(Math.random());
    else if (b === void 0) return Math.floor(Math.random() * a);
    else return Math.floor(Math.random() * (b - a + 1) + a);
  };
  window.randFloat = function(a, b) {
    if (a === void 0) return Math.random();
    else if (b === void 0) return Math.random() * a;
    else return Math.random() * (b - a) + a;
  };
  window.rand = function(a, b) {
    return Array.isArray(a) ? a[Math.floor(Math.random() * a.length)] : window.randInt(a, b);
  };
  window.rgb = function(r, g, b, a) {
    if (Array.isArray(r))
      return "rgb" + (r.length > 3 ? "a" : "") + "(" + r + ")";
    else if (a !== void 0) return "rgb(" + [r, g, b] + ")";
    return "rgba(" + [r, g, b, a] + ")";
  };
  window.Context = function(can) {
    var ctx = can.getContext("2d")
    var a = 0,
        tx = 0,
        ty = 0,
        ax = can.width / 2,
        ay = can.height / 2;
    this.rotate = function(x, y, d) {
      if (x === void 0) d = 0;
      else if (y === void 0) {
        d = x;
        ax = can.width / 2;
        ay = can.height / 2;
      } else {
        ax = x;
        ay = y;
      }
      a = d * Math.PI / 180;
      return this;
    };
    var c = this.get = function(x, y) {
      x -= ax;
      y -= ay;
      return {
        x: x * Math.cos(a) + y * Math.sin(a) + ax + tx,
        y: y * Math.cos(a) - x * Math.sin(a) + ay + ty
      };
    };
    this.reference = this.ref = function(x, y) {
      if (x === void 0) {
        x = can.width / 2;
        y = can.height / 2;
      }
      tx = x;
      ty = y;
      return this;
    };
    this.moveTo = function(x, y) {
      ctx.moveTo(c(x, y).x, c(x, y).y);
      return this;
    };
    this.lineTo = function(x, y) {
      ctx.lineTo(c(x, y).x, c(x, y).y);
      return this;
    };
    this.quadraticCurveTo = this.quadratic = function(x1, y1, x, y) {
      ctx.quadraticCurveTo(c(x1, y1).x, c(x1, y1).y, c(x, y).x, c(x, y).y);
      return this;
    };
    this.bezierCurveTo = this.bezier = function(x1, y1, x2, y2, x, y) {
      ctx.bezierCurveTo(c(x1, y1).x, c(x1, y1).y, c(x2, y2).x, c(x2, y2).y, c(x, y).x, c(x, y).y);
      return this;
    };
    this.rect = function(x, y, w, h) {
      ctx.beginPath();
      this.moveTo(x, y);
      this.lineTo(x + w, y);
      this.lineTo(x + w, y + h);
      this.lineTo(x, y + h);
      ctx.closePath();
      return this;
    };
    this.fillRect = function(x, y, w, h) {
      this.rect(x, y, w, h);
      ctx.fill();
      return this;
    };
    this.strokeRect = function(x, y, w, h) {
      this.rect(x, y, w, h);
      ctx.stroke();
      return this;
    };
    this.clearRect = this.clear = function(x, y, w, h) {
      ctx.clearRect(c(x, y).x, c(x, y).y, w, h);
      return this;
    };
    this.drawImage = this.project = function(a, b, c, d, e, f, g, h, i) {
      ctx.drawImage(a, c(b, c).x, c(b, c).y, d, e, c(f, g).x, c(f, g).y, h, i);
      return this;
    };
    this.arc = function(x, y, r, s, e, d) {
      if (s === void 0) {
        s = 0;
        e = 2 * Math.PI;
      }
      ctx.arc(c(x, y).x, c(x, y).y, r, s, e, d);
      return this;
    };
    this.arcTo = function(x, y, x1, y1, r) {
      ctx.arcTo(c(x, y).x, c(x, y).y, c(x1, y1).x, c(x1, y1).y, r);
      return this;
    };
    this.isPointInPath = this.inPath = function(x, y) {
      return ctx.isPointInPath(x, y);
    };
    this.drawLine = this.line = function() {
      let a = Array.isArray(arguments[0]) ? arguments[0] : arguments;
      this.moveTo(a[0], a[1]);
      for (let i = 2; i < a.length - 1; i += 2)
        this.lineTo(a[i], a[i + 1]);
      return this;
    };
    this.beginPath = this.begin = function() {
      ctx.beginPath();
      return this;
    };
    this.closePath = this.close = function() {
      ctx.closePath();
      return this;
    };
    this.fill = function(s) {
      if (s === void 0) ctx.fill();
      else ctx.fillStyle = s;
      return this;
    };
    this.stroke = function(s) {
      if (s === void 0) ctx.stroke();
      else ctx.strokeStyle = s;
      return this;
    };
    this.fillStyle = function(s) {
      if (s === void 0) return ctx.fillStyle;
      else ctx.fillStyle = s;
      return this;
    };
    this.strokeStyle = function(s) {
      if (s === void 0) return ctx.strokeStyle;
      else ctx.strokeStyle = s;
      return this;
    };
    this.font = function(a, b) {
      if (a === void 0) return ctx.font;
      else ctx.font = b === void 0 ? a : a + "px " + b;
      return this;
    };
    this.textAlign = function(s) {
      if (s === void 0) return ctx.textAlign;
      else ctx.textAlign = s;
      return this;
    };
    this.textBaseline = function(s) {
      if (s === void 0) return ctx.textBaseline;
      else ctx.textBaseline = s;
      return this;
    };
    this.align = function(a, b) {
      if (a === void 0) {
        a = "center";
        b = "middle";
      }
      this.textAlign(a);
      if (b !== void 0)
        this.textBaseline(b);
      return this;
    };
    this.measureText = function(s) {
      return ctx.measureText(s);
    };
    this.textWidth = function(s) {
      return this.measureText(s).width;
    };
    this.fillText = this.text = function(s, x, y) {
      ctx.fillText(s, c(x, y).x, c(x, y).y);
      return this;
    };
    this.strokeText = function(s, x, y) {
      ctx.strokeText(s, c(x, y).x, c(x, y).y);
      return this;
    };
    this.shadowColor = function(s) {
      if (s === void 0) return ctx.shadowColor;
      else ctx.shadowColor = s;
      return this;
    };
    this.shadowBlur = function(n) {
      if (n === void 0) return ctx.shadowBlur;
      else ctx.shadowBlur = n;
      return this;
    };
    this.shadowOffsetX = this.shadowX = function(n) {
      if (n === void 0) return ctx.shadowOffsetX;
      else ctx.shadowOffsetX = n;
      return this;
    };
    this.shadowOffsetY = this.shadowY = function(n) {
      if (n === void 0) return ctx.shadowOffsetY;
      else ctx.shadowOffsetY = n;
      return this;
    };
    this.set = function(a) {
      for (let i in a)
        ctx[i] = a[i];
      return this;
    };
    this.createLinearGradient = this.linear = function(a, b, c, d) {
      return ctx.createLinearGradient(a, b, c, d);
    };
    this.createRadialGradient = this.radial = function(a, b, c, d, e, f) {
      return ctx.createRadialGradient(a, b, c, d, e, f);
    };
    this.createPattern = this.pattern = function(a, b) {
      if (b === void 0) b = "repeat";
      return ctx.createPattern(a, b);
    };
    this.lineWidth = this.width = function(n) {
      if (n === void 0) return ctx.lineWidth;
      else ctx.lineWidth = n;
      return this;
    };
    this.lineCap = this.cap = function(s) {
      if (s === void 0) return ctx.lineCap;
      else ctx.lineCap = s;
      return this;
    };
    this.lineJoin = this.join = function(s) {
      if (s === void 0) return ctx.lineJoin;
      else ctx.lineJoin = s;
      return this;
    };
    this.miterLimit = function(s) {
      if (s === void 0) return ctx.miterLimit;
      else ctx.miterLimit = s;
      return this;
    };
    this.globalAlpha = this.alpha = this.opacity = function(a) {
      if (a === void 0) return ctx.globalAlpha;
      else ctx.globalAlpha = a;
      return this;
    };
    this.globalCompositeOperation = this.operation = function(s) {
      if (s === void 0) return ctx.globalCompositeOperation;
      else ctx.globalCompositeOperation = s;
      return this;
    };
    this.clip = function() {
      ctx.clip();
      return this;
    };
    this.save = function() {
      ctx.save();
      return this;
    };
    this.restore = function() {
      ctx.restore();
      return this;
    };
  };
  window.c = new window.Context(window.can);
}(window));
