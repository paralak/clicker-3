class Upgrades extends HTMLElement {
  connectedCallback() {
    window.addEventListener('load', ()=>{      
      this.querySelector('.damage').addEventListener('click', ()=>{this.tryDamageLvlUp()});
      this.querySelector('.item').addEventListener('click', ()=>{this.tryBuyItem()});
    })
  }

  tryDamageLvlUp() {
    if (this.damageCost <= mainStats.gold) {
      mainStats.gold -= this.damageCost;
      upgradesStats.lvldamage += 1;
      this.querySelector('.damage .lvl').innerHTML = mainStats.lvldamage;
      this.querySelector('.damage .cost').innerHTML = this.damageCost;
    }
  }

  tryBuyItem () {
    if (this.itemGoldCost <= mainStats.gold && this.itemOrbCost <= mainStats.orb) {
      mainStats.gold -= this.itemGoldCost;
      mainStats.orb -= this.itemOrbCost;
      $('p-inventory').addItem(new Item({
        stat1: new ItemStat(itemStatsProto.getRandom()),
        stat2: new ItemStat(itemStatsProto.getRandom()),
        stat3: new ItemStat(itemStatsProto.getRandom()),
        orbCost: this.itemOrbCost,
        lvl: 1,
    }))
      this.querySelector('.item .costg').innerHTML = this.itemGoldCost;
      this.querySelector('.item .costo').innerHTML = this.itemOrbCost;
    }
  }

  get damageCost() {
    return Math.floor(upgradesStats.lvldamage**1.9 * 6) + 10;
  }

  get itemOrbCost() {
    return 10;
  }

  get itemGoldCost() {
    return 10**$('p-inventory').items.length*1000;
  }
}

customElements.define('p-upgrades', Upgrades);