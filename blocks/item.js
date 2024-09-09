class Item {
  #stat1
  stat1fixed = false
  #stat2
  stat2fixed = false
  #stat3
  stat3fixed = false
  #orbCost
  stats
  #lvl
  #selected = false
  constructor(args) {
    this.stat1 = args.stat1;
    this.stat2 = args.stat2;
    this.stat3 = args.stat3;
    this.#orbCost = args.orbCost;
    this.lvl = args.lvl;
  }

  get name() {
    let r = "";
    if (this.#stat3) {
      r += this.#stat3.cName + " ";
    }
    if (this.#stat1) {
      r += this.#stat1.aName;
    }
    if (this.#stat2) {
      r += " " + this.#stat2.bName;
    }
    return capitalizeFirstLetter(r);
  }

  get stat1() {
    return this.#stat1;
  }
  set stat1(s) {
    this.#stat1 = s;
  }

  get stat2() {
    return this.#stat2;
  }
  set stat2(s) {
    this.#stat2 = s;
  }

  get stat3() {
    return this.#stat3;
  }
  set stat3(s) {
    this.#stat3 = s;
  }

  get orbCost() {
    return this.#orbCost;
  }

  get lvl() {
    return this.#lvl;
  }
  set lvl(v) {
    this.#lvl = v;
    if (this.stats)
      this.stats.link = null;
    this.stats = new StatsObj();
    if (this.#stat1)
      this.#stat1.loadStats(this.stats, this.#lvl);
    if (this.#stat2)
      this.#stat2.loadStats(this.stats, this.#lvl);
    if (this.#stat3)
      this.#stat3.loadStats(this.stats, this.#lvl);
    this.selected = this.selected;
  }

  get upgradeCost() {
    return 11 + this.#lvl*4;
  }

  get reforgeCost() {
    let r = 3;
    if (this.stat1fixed) r*=8;
    if (this.stat2fixed) r*=8;
    if (this.stat3fixed) r*=8;
    if (r>100) {
      r = 0;
    }
    return r;
  }

  get selected() {
    return this.#selected;
  }
  set selected(v) {
    if (v) {
      this.stats.link = mainStats;
    } else {
      this.stats.link = null;
    }
    return this.#selected = v;
  }
}