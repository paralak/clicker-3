class ItemStat {
  #name = ""
  #nameRu = ""
  #startVal = ""
  #val = (lvl)=>{return lvl}
  #displayval = (lvl)=>{return ""}
  #rarity = "common"
  #lvl = 1

  constructor (args) {
    this.#name = args.name;
    this.#startVal = args.startVal*(0.8+Math.random()*0.4);
    this.#val = args.val;
    this.#displayval = args.displayval;
    this.#rarity = args.rarity;
    this.#nameRu = args.nameRu;
    this.aName = args.aName;
    this.bName = args.bName;
    this.cName = args.cName;
  }

  get name() {
    return this.#name;
  }

  get nameRu() {
    return this.#nameRu;
  }

  get startVal() {
    return this.#startVal;
  }

  get lvl() {
    return this.#lvl;
  }
  set lvl(v) {
    return this.#lvl = v;
  }

  get val() {
    return this.#val(this);
  }

  get displayval() {
    return this.#displayval(this);
  }

  get rarity() {
    return this.#rarity;
  }

  loadStats(stats, lvl) {
    this.lvl = lvl;
    stats[this.name] += this.val;
  }

  get text() {
    return this.nameRu + ": " + this.displayval;
  }
}

itemStatsProto = {
  "prepared":{
    name: "prepared",
    nameRu: "Подготовленный",
    startVal: 4,
    aName: "молот",
    bName: "слона",
    cName: "тяжёлый",
    val: (t)=>{
      return t.startVal*(0.75 + t.lvl/4);
    },
    displayval: (t)=>{
      return S(t.val);
    },
    rarity: "common",
  },
  "critdamage":{
    name: "critdamage",
    nameRu: "Зазубренный",
    startVal: 0.2,
    aName: "крюк",
    bName: "рыбака",
    cName: "зазубр.",
    val: (t)=>{
      return t.startVal*(0.75 + t.lvl/4);
    },
    displayval: (t)=>{
      return S(t.val*100) + "%";
    },
    rarity: "common",
  },
  "flatdamage":{
    name: "flatdamage",
    nameRu: "Плоский",
    startVal: 4,
    aName: "вздох",
    bName: "червя",
    cName: "плоский",
    val: (t)=>{
      return t.startVal*(0.25 + 1.4**(t.lvl-1)/4*3);
    },
    displayval: (t)=>{
      return S(t.val);
    },
    rarity: "common",
  },
  "radians":{
    name: "radians",
    nameRu: "Жаркий",
    startVal: 0.5,
    aName: "свет",
    bName: "солнца",
    cName: "жаркий",
    val: (t)=>{
      return t.startVal*(0.65 + t.lvl*0.35);
    },
    displayval: (t)=>{
      return Math.round(t.val*100) + "%";
    },
    rarity: "rare",
  },
  "basereward":{
    name: "basereward",
    nameRu: "Жадный",
    startVal: 1.5,
    aName: "слиток",
    bName: "купца",
    cName: "жадный",
    val: (t)=>{
      return t.startVal*(3/4 + t.lvl/4);
    },
    displayval: (t)=>{
      return S(t.val);
    },
    rarity: "rare",
  },
  "critrate":{
    name: "critrate",
    nameRu: "Точный",
    startVal: 0.01,
    aName: "кинжал",
    bName: "убийцы",
    cName: "точный",
    val: (t)=>{
      return t.startVal*(0.5 + t.lvl*0.5);
    },
    displayval: (t)=>{
      return Math.round(t.val*1000)/10 + "%";
    },
    rarity: "epic",
  },
  "critaspect":{
    name: "critaspect",
    nameRu: "Бронебойный",
    startVal: 3,
    aName: "клевец",
    bName: "боксёра",
    cName: "сквозной",
    val: (t)=>{
      return t.startVal*(0.5 + t.lvl**1.5*0.5);
    },
    displayval: (t)=>{
      return S(t.val);
    },
    rarity: "common",
  },
  "flatreward":{
    name: "flatreward",
    nameRu: "Толстый",
    startVal: 4,
    aName: "кошель",
    bName: "принц",
    cName: "толстый",
    val: (t)=>{
      return t.startVal*(0.5 + t.lvl**1.5*0.5);
    },
    displayval: (t)=>{
      return S(t.val);
    },
    rarity: "common",
  },
  "extrareward":{
    name: "extrareward",
    nameRu: "Богатый",
    startVal: 0.02,
    aName: "злат",
    bName: "купца",
    cName: "богатый",
    val: (t)=>{
      return t.startVal*(0.5 + t.lvl*0.5);
    },
    displayval: (t)=>{
      return Math.round(t.val*1000)/10 + "%";
    },
    rarity: "epic",
  },
  "poison":{
    name: "poison",
    nameRu: "Ядовитый",
    startVal: 0.02,
    aName: "клык",
    bName: "змея",
    cName: "ядовитый",
    val: (t)=>{
      return t.startVal*(3/4 + t.lvl/4);
    },
    displayval: (t)=>{
      return Math.round(t.val*1000)/10 + "%";
    },
    rarity: "rare",
  },
  getRandom: ()=>{
    let r = Math.random();
    let rar = ""
    if (r>=0) rar = "common";
    if (r>=0.65) rar = "rare";
    if (r>=0.93) rar = "epic";
    if (rar == "common") {
      const i = [
        itemStatsProto["prepared"],
        itemStatsProto["critdamage"],
        itemStatsProto["flatdamage"],
        itemStatsProto["critaspect"],
        itemStatsProto["flatreward"],
      ]
      let r = Math.floor(Math.random()*i.length);
      return i[r];
    }
    if (rar == "rare") {
      const i = [
        itemStatsProto["radians"],
        itemStatsProto["basereward"],
        itemStatsProto["poison"],
      ]
      let r = Math.floor(Math.random()*i.length);
      return i[r];
    }
    if (rar == "epic") {
      const i = [
        itemStatsProto["critrate"],
        itemStatsProto["extrareward"],
      ]
      let r = Math.floor(Math.random()*i.length);
      return i[r];
    }
  },
}