class Upgrades extends HTMLElement {
  connectedCallback() {
    window.addEventListener('load', ()=>{      
      this.querySelector('.damage').addEventListener('click', ()=>{this.tryDamageLvlUp()});
      this.querySelector('.item').addEventListener('click', ()=>{this.tryBuyItem()});
      this.querySelector('.prestige').addEventListener('click', ()=>{this.tryPrestige()});
    })
  }

  tryDamageLvlUp() {
    if (this.damageCost <= mainStats.gold) {
      mainStats.gold -= this.damageCost;
      upgradesStats.lvldamage += 1;
      this.querySelector('.damage .lvl').innerHTML = S(mainStats.lvldamage);
      this.querySelector('.damage .cost').innerHTML = S(this.damageCost);
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
      this.querySelector('.item .costg').innerHTML = S(this.itemGoldCost);
      this.querySelector('.item .costo').innerHTML = S(this.itemOrbCost);
    }
  }

  tryPrestige() {
    if (this.prestigeCost <= mainStats.gold) {
      mainStats.gold = 0;
      upgradesStats.lvldamage = 0;
      mainStats.prestige += 1;
      this.querySelector('.damage .lvl').innerHTML = S(mainStats.lvldamage);
      this.querySelector('.damage .cost').innerHTML = S(this.damageCost);
      $('p-enemy').prestige();
      this.querySelector('.prestige .lvl').innerHTML = S(mainStats.prestige);
      this.querySelector('.prestige .cost').innerHTML = S(this.prestigeCost);
    }
  }

  get damageCost() {
    return (Math.floor(upgradesStats.lvldamage**1.6 * 6) + 10)*0.99**mainStats.sale;
  }

  get itemOrbCost() {
    return 10 + 10*$('p-inventory').items.length**2;
  }

  get itemGoldCost() {
    return 12**$('p-inventory').items.length*1000;
  }

  get prestigeCost() {
    return 1000000*1.8**mainStats.prestige;
  }
}

customElements.define('p-upgrades', Upgrades);