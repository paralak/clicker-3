class CritEffect {
  constructor() {
    this.x = Math.random() * 220 + 40;
    this.y = Math.random() * 120 + 20;
    this.life = 1.0;
    this.r = 22 + Math.random() * 16;
    this.rot = Math.random() * Math.PI;
  }
  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rot);
    ctx.globalAlpha = this.life;
    ctx.strokeStyle = '#ffcc00';
    ctx.lineWidth = 1.5;
    const len = this.r * (1.2 - this.life);
    for (let i = 0; i < 8; i++) {
      const a = i * Math.PI / 4;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(a) * len, Math.sin(a) * len);
      ctx.stroke();
    }
    ctx.restore();
    this.life -= 0.05;
  }
}

class PreparedEffect {
  constructor() {
    this.x = 150;
    this.y = 90;
    this.life = 1.0;
    this.maxR = 65;
  }
  draw(ctx) {
    const r = this.maxR * (1 - this.life);
    ctx.save();
    ctx.globalAlpha = this.life;
    ctx.strokeStyle = '#9040ff';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(this.x, this.y, r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
    this.life -= 0.025;
  }
}

class DoublehitEffect {
  constructor() {
    this.x = Math.random() * 220 + 40;
    this.y = Math.random() * 120 + 20;
    this.life = 1.0;
    this.maxR = 20;
  }
  draw(ctx) {
    const r = this.maxR * (1 - this.life);
    ctx.save();
    ctx.globalAlpha = this.life;
    ctx.strokeStyle = '#30d0d0';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(this.x, this.y, r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
    this.life -= 0.07;
  }
}

const effects = {
  _list: [],
  _ctx: null,

  init() {
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 250;
    canvas.style.cssText = 'position:absolute;top:0;left:0;pointer-events:none;z-index:5;border-radius:10px;';
    $('p-enemy .enemy').appendChild(canvas);
    this._ctx = canvas.getContext('2d');
    setInterval(() => this._tick(), 20);
  },

  _tick() {
    this._ctx.clearRect(0, 0, 300, 250);
    for (let i = this._list.length - 1; i >= 0; i--) {
      this._list[i].draw(this._ctx);
      if (this._list[i].life <= 0) this._list.splice(i, 1);
    }
  },

  _add(e) {
    this._list.unshift(e);
    if (this._list.length > 60) this._list.length = 60;
  },

  crit()      { this._add(new CritEffect()); },
  prepared()  { this._add(new PreparedEffect()); },
  doublehit() { this._add(new DoublehitEffect()); },
};

window.addEventListener('load', () => effects.init());
