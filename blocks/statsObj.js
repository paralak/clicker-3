class StatsObj {
  obj = {}
  #link = null
  constructor(obj = null) {
    if (obj) {
      this.obj = obj;
    } else {
      this.obj = {
        stats:{
          dps: 0,
          lastDeathTime: Date.now(),
        },
        curs:{
          gold:0,
          orb:0,
          rpoints:0,
        },
        lvls:{
          damage:0,
          prestige:0,
        },
        enemy:{
          id:0,
          hp:50,
          maxhp:50,
        },
        ist:{
          prepared:0,
          preparedFlag:false,
          critdamage:0,
          flatdamage:0,
          radians:0,
          basereward:0,
          critrate:0,
          critaspect:0,
          critAspectAdder:0,
          flatreward:0,
          extrareward:0,
          poison:0,
          poisonDmgSum:0,
          doublehit:0,
        }
      }
    }
  }

  get baseDamage() {
    let r = 1;
    if (this.lvldamage) {
      let t = this.lvldamage;
      let i = 0;
      while (t>0) {
        r += t;
        t -= Math.floor(1.7**i * 8);
        i++;
      }
    }
    r += this.critAspectAdder;
    return r;
  }

  get critChance() {
    return 0.1 + this.critrate;
  }

  get critDamage() {
    return 2 + this.critdamage;
  }

  get critAspectAdder() {
    return this.obj.ist.critAspectAdder;
  }

  set critAspectAdder(v) {
    if (v>0) {
      return this.obj.ist.critAspectAdder = v;
    }
    return this.obj.ist.critAspectAdder = 0;
  }

  /**
   * @param {Number} v
   */
  set lvldamage(v) {
    if (this.#link) {
      this.#link.lvldamage += v - this.lvldamage;
    }
    return this.obj.lvls.damage = v;
  }
  get lvldamage() {
    return this.obj.lvls.damage;
  }

  /**
   * @param {Number} v
   */
  set prestige(v) {
    return this.obj.lvls.prestige = v;
  }
  get prestige() {
    return this.obj.lvls.prestige;
  }

  /**
   * @param {Number} v
   */
  set prepared(v) {
    if (this.#link) {
      this.#link.prepared += v - this.prepared;
    }
    return this.obj.ist.prepared = v;
  }
  get prepared() {
    return this.obj.ist.prepared;
  }

  /**
   * @param {Number} v
   */
  set critdamage(v) {
    if (this.#link) {
      this.#link.critdamage += v - this.critdamage;
    }
    return this.obj.ist.critdamage = v;
  }
  get critdamage() {
    return this.obj.ist.critdamage;
  }

  /**
   * @param {Number} v
   */
  set flatdamage(v) {
    if (this.#link) {
      this.#link.flatdamage += v - this.flatdamage;
    }
    return this.obj.ist.flatdamage = v;
  }
  get flatdamage() {
    return this.obj.ist.flatdamage;
  }

  /**
   * @param {Number} v
   */
  set radians(v) {
    if (this.#link) {
      this.#link.radians += v - this.radians;
    }
    return this.obj.ist.radians = v;
  }
  get radians() {
    return this.obj.ist.radians;
  }

  /**
   * @param {Number} v
   */
  set basereward(v) {
    if (this.#link) {
      this.#link.basereward += v - this.basereward;
    }
    return this.obj.ist.basereward = v;
  }
  get basereward() {
    return this.obj.ist.basereward;
  }

  /**
   * @param {Number} v
   */
  set critrate(v) {
    if (this.#link) {
      this.#link.critrate += v - this.critrate;
    }
    return this.obj.ist.critrate = v;
  }
  get critrate() {
    return this.obj.ist.critrate;
  }

  /**
   * @param {Number} v
   */
  set critaspect(v) {
    if (this.#link) {
      this.#link.critaspect += v - this.critaspect;
    }
    return this.obj.ist.critaspect = v;
  }
  get critaspect() {
    return this.obj.ist.critaspect;
  }

  /**
   * @param {Number} v
   */
  set flatreward(v) {
    if (this.#link) {
      this.#link.flatreward += v - this.flatreward;
    }
    return this.obj.ist.flatreward = v;
  }
  get flatreward() {
    return this.obj.ist.flatreward;
  }

  /**
   * @param {Number} v
   */
  set extrareward(v) {
    if (this.#link) {
      this.#link.extrareward += v - this.extrareward;
    }
    return this.obj.ist.extrareward = v;
  }
  get extrareward() {
    return this.obj.ist.extrareward;
  }

  /**
   * @param {Number} v
   */
  set poison(v) {
    if (this.#link) {
      this.#link.poison += v - this.poison;
    }
    return this.obj.ist.poison = v;
  }
  get poison() {
    return this.obj.ist.poison;
  }

  /**
   * @param {Number} v
   */
  set doublehit(v) {
    if (this.#link) {
      this.#link.doublehit += v - this.doublehit;
    }
    return this.obj.ist.doublehit = v;
  }
  get doublehit() {
    return this.obj.ist.doublehit;
  }

  /**
   * @param {Number} v
   */
  set gold(v) {
    return this.obj.curs.gold = v;
  }
  get gold() {
    return this.obj.curs.gold;
  }

  /**
   * @param {Number} v
   */
  set rpoints(v) {
    return this.obj.curs.rpoints = v;
  }
  get rpoints() {
    return this.obj.curs.rpoints;
  }

  /**
   * @param {Number} v
   */
  set orb(v) {
    return this.obj.curs.orb = v;
  }
  get orb() {
    return this.obj.curs.orb;
  }

  /**
   * @param {Date} d
   */
  set lastDeathTime(d) {
    return this.obj.stats.lastDeathTime = d;
  }
  get lastDeathTime() {
    return this.obj.stats.lastDeathTime;
  }

  /**
   * @param {Number} v
   */
  set dps(v) {
    return this.obj.stats.dps = v;
  }
  get dps() {
    return this.obj.stats.dps;
  }

  /**
   * @param {StatsObj} v
   */
  set link(v) {
    if (this.#link) {
      this.unlink();
    }
    if (v) {
      v.lvldamage += this.obj.lvls.damage;
      v.prepared += this.obj.ist.prepared;
      v.critdamage += this.obj.ist.critdamage;
      v.flatdamage += this.obj.ist.flatdamage;
      v.radians += this.obj.ist.radians;
      v.basereward += this.obj.ist.basereward;
      v.critrate += this.obj.ist.critrate;
      v.critaspect += this.obj.ist.critaspect;
      v.flatreward += this.obj.ist.flatreward;
      v.extrareward += this.obj.ist.extrareward;
      v.poison += this.obj.ist.poison;
      v.doublehit += this.obj.ist.doublehit;
    }
    return this.#link = v;
  }
  get link() {
    return this.#link;
  }
  unlink() {
    if (this.#link) {
      this.#link.lvldamage -= this.obj.lvls.damage;
      this.#link.prepared -= this.obj.ist.prepared;
      this.#link.critdamage -= this.obj.ist.critdamage;
      this.#link.flatdamage -= this.obj.ist.flatdamage;
      this.#link.radians -= this.obj.ist.radians;
      this.#link.basereward -= this.obj.ist.basereward;
      this.#link.critrate -= this.obj.ist.critrate;
      this.#link.critaspect -= this.obj.ist.critaspect;
      this.#link.flatreward -= this.obj.ist.flatreward;
      this.#link.extrareward -= this.obj.ist.extrareward;
      this.#link.poison -= this.obj.ist.poison;
      this.#link.doublehit -= this.obj.ist.doublehit;
    }
  }

  /**
   * @param {Number} v
   */
  set hp(v) {
    if (v<this.obj.enemy.hp) 
      this.dps += this.obj.enemy.hp - v;
    this.obj.enemy.hp = v;
    $('p-enemy .hp').innerHTML = S(v);
    if (v<=0) {
      $('p-enemy').death();
    }
    return this.obj.enemy.hp;
  }
  get hp() {
    return this.obj.enemy.hp;
  }

  /**
   * @param {Number} v
   */
  set maxhp(v) {
    $('p-enemy .maxhp').innerHTML = S(v);
    return this.obj.enemy.maxhp = v;
  }
  get maxhp() {
    return this.obj.enemy.maxhp;
  }

  /**
   * @param {Number} v
   */
  set enemyid(v) {
    return this.obj.enemy.id = v;
  }
  get enemyid() {
    return this.obj.enemy.id;
  }
}